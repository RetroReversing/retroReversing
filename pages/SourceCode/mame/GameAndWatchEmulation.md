---
permalink: /game-and-watch-emulation
layout: post
title: "Emulating Game & Watch (MAME)"
excerpt: A technical guide to how MAME emulates Nintendo Game and Watch hardware, from the Sharp SM5xx MCU family to LCD segment rendering and input scanning.
category:
- sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: "How MAME Emulates Game & Watch"
    url: #
recommend:
- sourcecode
- emulation
- handhelds
tags:
- sourcecode
- emulation
- handhelds
editlink: ../pages/SourceCode/mame/GameAndWatchEmulation.md
updatedAt: '2026-04-28'
---
# How MAME Emulates Game & Watch
Game & Watch emulation in MAME is hardware emulation, not game reimplementation.
The actual machine code dumped from original Nintendo microcontroller chips runs unmodified.
MAME replicates the Sharp SM5xx CPU, the LCD segment controller, multiplexed inputs, and piezo buzzer - the game logic follows automatically.

## Glossary of Key Terms
If you are new to the hardware involved, this quick glossary explains the key terms used throughout:

* <a id="glossary-mcu"></a>**MCU** - Microcontroller Unit. A self-contained chip combining CPU, RAM, ROM, and I/O peripherals. Each Game & Watch unit contains one Sharp SM5xx MCU.
* <a id="glossary-lcd"></a>**LCD** - Liquid Crystal Display. The segment-based screen used in G&W games. Individual segments switch on or off; they do not form pixels.
* <a id="glossary-rom"></a>**ROM** - Read-Only Memory. The game program, permanently baked into the MCU die.
* <a id="glossary-acl"></a>**ACL** - All Clear. The reset button found on every G&W unit, tied directly to the MCU reset line.
* <a id="glossary-svg"></a>**SVG** - Scalable Vector Graphics. The format MAME uses to describe LCD panel geometry, with each segment as a named vector shape.
* <a id="glossary-lfsr"></a>**LFSR** - Linear Feedback Shift Register. A shift register whose output feeds back as input, producing a pseudo-random sequence. The SM5xx uses a 6-bit LFSR as a program counter within each ROM page.
* <a id="glossary-lut"></a>**LUT** - Look-Up Table. A precomputed array used in the SM511 melody controller to translate tone commands into duty cycle counts.
* <a id="glossary-bl-bm"></a>**BL/BM** - The lower and upper halves of the SM5xx RAM address register. Together they select the current 4-bit RAM nibble.

---
## The Sharp SM5xx CPU Family
<div class="emoji">🧩</div>
Nintendo used a family of 4-bit Sharp microcontrollers across the Game & Watch product line.
Each variant differs in ROM capacity, RAM layout, and peripheral features.
All variants share a common instruction set and are emulated through a single inheritance hierarchy in `src/devices/cpu/sm510/`.

The table below covers the main variants you will encounter when exploring MAME drivers:

Name | ROM | RAM | Notes
--- | --- | --- | ---
SM5A | 1.8 KB | 5x13x4 nibbles | Oldest series, ~1980
SM510 | 2.7 KB | 128x4 nibbles | Standard series, non-contiguous ROM map
SM511 | 4 KB | 128x4 nibbles | Adds dedicated melody controller
SM512 | 4 KB | 160x4 nibbles | SM511 with extended LCD RAM
SM530 | 2 KB | Varies | Later variant, used in select titles

The Soviet Union manufactured licensed clones of these chips, renaming them to КБ1013ВК1-2 (SM5A), КБ1013ВК4-2 (SM510), and КБ1013ВК7-2 (SM511).
MAME supports Soviet Elektronika G&W clones through the same driver.
MAME's shared SM5xx core source header also cites Sharp semiconductor data books as background documentation for the implementation [^9] [^10].

<div class="rr-code-card-aside" markdown="1">
{% capture sm510base_h_items %}
- auto::read_k::()
- auto::write_segs::()
- auto::write_r::()
- virtual void::execute_one::() = 0
- virtual bool::op_argument::()
- u16::get_lcd_row::(int column, u8* ram)
- virtual void::lcd_update::()
- virtual void::clock_melody::()
- virtual void::increment_pc::()
- virtual void::execute_run::()
- void::do_interrupt::()
- u16::m_pc
- u8::m_acc
- u8::m_bl
- u8::m_bm
- u8::m_c
- bool::m_skip
- bool::m_halt
- u16::m_div
- u8::m_gamma
{% endcapture %}

{% include_cached source-code-card.html title="sm510base.h" items=sm510base_h_items functions="95" variables="55" lines="250" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">
The `sm510_base_device` class defines the complete SM5xx interface.
It declares 95 virtual methods - the majority being opcode handlers (`op_tl`, `op_add11`, `op_cend`, etc.) that subclasses override for variant-specific behaviour.
The 55 member variables cover CPU registers, LCD state, the divider, melody controller state, and I/O callbacks.
Relevant interface definition [^4].
</div>
</div>

### CPU Architecture
<div class="emoji">⚙️</div>
All SM5xx variants are 4-bit processors with a Harvard architecture.
The core registers are:

The following registers make up the CPU core state, accessed during every instruction:

* **ACC** (`m_acc`) - 4-bit accumulator. All arithmetic and logic operations pass through here.
* **BL/BM** (`m_bl`, `m_bm`) - RAM address register. BL holds the lower 4 bits, BM the upper bits. Together they index into the 4-bit RAM array.
* **PC** (`m_pc`) - 12-bit program counter. Advances via LFSR rather than simple increment.
* **C** (`m_c`) - 1-bit carry flag. Set or cleared by arithmetic operations, testable by `TC` (skip-if-no-carry).
* **Skip** (`m_skip`) - When set, the next fetched instruction is discarded as a NOP. Used to implement conditional branches.
* **Halt** (`m_halt`) - Puts the MCU into low-power standby. The CPU stays halted until an external K input or the gamma timer wakes it.
* **W** (`m_w`) - 8-bit output shift register. The `WR`/`WS` opcodes shift 0 or 1 into this register. `PTW` latches the value to the S output port.
* **DIV** (`m_div`) - 15-bit free-running divider. Increments every crystal tick. Provides time references for the LCD refresh, melody controller, and the gamma interrupt.

The execute loop is the heart of the emulation.
It runs until the instruction count budget (`m_icount`) is exhausted.

```cpp
void sm510_base_device::execute_run()
{
    while (m_icount > 0)
    {
        // in halt mode, wake up after gamma signal or K input
        if (m_halt)
        {
            if (m_ext_wakeup || m_gamma)
                do_interrupt();
            else
            {
                debugger_wait_hook();
                m_icount = 0;
                return;
            }
        }

        m_icount--;

        m_prev_op = m_op;
        m_prev_pc = m_pc;

        if (!m_skip)
            debugger_instruction_hook(m_pc);
        m_op = m_program->read_byte(m_pc);
        increment_pc();

        // 2-byte opcodes
        if (op_argument())
        {
            m_icount--;
            m_param = m_program->read_byte(m_pc);
            increment_pc();
        }

        // handle opcode if it's not skipped
        if (m_skip)
        {
            m_skip = false;
            m_op = 0; // fake nop
        }
        else
            execute_one();
    }
}
```

Relevant source [^3].

Two-byte opcodes (such as `TL xyz` long jump and `TML xyz` long call) consume an extra cycle and read a second byte as `m_param`.
If the skip flag is set, the fetched opcode is replaced with a fake `0x00` NOP rather than branching away - this means the 2-byte instruction is still consumed.

---
### Address Space and ROM Layout
The SM510 and SM511 differ in how they map their program ROM into the address space.

The SM510 uses a **non-contiguous** map across a 12-bit address space.
The 704-byte pages are placed at specific offsets and the gaps in between are unmapped:

```cpp
void sm510_device::program_2_7k(address_map &map)
{
    map(0x0000, 0x02bf).rom();
    map(0x0400, 0x06bf).rom();
    map(0x0800, 0x0abf).rom();
    map(0x0c00, 0x0ebf).rom();
}
```

Relevant source [^6].

The SM511 uses a **contiguous** 4 KB region starting at address 0:

```cpp
void sm511_device::program_4k(address_map &map)
{
    map(0x0000, 0x0fff).rom();
}
```

Relevant source [^7].

The data address map is identical between SM510 and SM511.
The lower 96 bytes (`0x00-0x5F`) are general-purpose RAM.
The upper 32 bytes (`0x60-0x7F`) are shared with the LCD controller as `lcd_ram_a` and `lcd_ram_b`.
The SM512 adds a third shared region (`lcd_ram_c`) at `0x50-0x5F`.

```cpp
void sm511_device::data_96_32x4(address_map &map)
{
    map(0x00, 0x5f).ram();
    map(0x60, 0x6f).ram().share("lcd_ram_a");
    map(0x70, 0x7f).ram().share("lcd_ram_b");
}
```

Relevant source [^7].

The program counter advances within each 64-instruction page using a **6-bit LFSR** rather than a plain counter.
The LFSR produces a non-sequential order of addresses within the page - the game's ROM must be placed at exactly the addresses the hardware would visit.

```cpp
void sm510_base_device::increment_pc()
{
    // PL(program counter low 6 bits) is a simple LFSR: newbit = (bit0==bit1)
    int msb = m_pagemask >> 1 ^ m_pagemask;
    int feed = ((m_pc >> 1 ^ m_pc) & 1) ? 0 : msb;
    m_pc = feed | (m_pc >> 1 & m_pagemask >> 1) | (m_pc & ~m_pagemask);
}
```

Relevant source [^3].

The upper bits of `m_pc` (PM and PU) select the page, while PL (the lower 6 bits) steps through the LFSR sequence.

---
### The Instruction Set
<div class="emoji">📄</div>
The SM510 instruction set is compact and purpose-built for the G&W use case.
Most opcodes are one byte. Long jumps and calls use two bytes.

<div class="rr-code-card-aside" markdown="1">
{% capture sm510op_items %}
- void::op_tl::()
- void::op_tml::()
- void::op_rtn0::()
- void::op_t::()
- void::op_kta::()
- void::op_atl::()
- void::op_atx::()
- void::op_wr::()
- void::op_ws::()
- void::op_ptw::()
- void::op_add11::()
- void::op_rot::()
- void::op_cend::()
- void::op_pre::()
- void::op_tmel::()
{% endcapture %}

{% include_cached source-code-card.html title="sm510op.cpp" items=sm510op_items functions="64" lines="455" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">
All 64 opcode handlers are defined here as methods of `sm510_base_device`.
They cover five categories: RAM address manipulation, ROM address/control flow, data transfer and I/O, arithmetic and test, and melody control.
Each opcode handler is a tiny function, typically 2-5 lines.
</div>
</div>

The following examples show the key instruction categories, with their exact C++ implementations.

#### Control Flow
`TL xyz` performs a long jump to an absolute 12-bit address.
The target is assembled from the 4-bit opcode low nibble and the full second byte:

```cpp
void sm510_base_device::op_tl()
{
    // TL xyz: long jump
    do_branch(m_param >> 6 & 3, m_op & 0xf, m_param & 0x3f);
}
```

`TML xyz` is the call variant - it pushes the return address onto the stack first:

```cpp
void sm510_base_device::op_tml()
{
    // TML xyz: long call
    push_stack();
    do_branch(m_param >> 6 & 3, m_op & 3, m_param & 0x3f);
}
```

`RTN0` returns from a subroutine by popping the stack:

```cpp
void sm510_base_device::op_rtn0()
{
    // RTN0: return from subroutine
    pop_stack();
}
```

Relevant source [^5].

#### I/O and LCD Instructions
The game reads buttons via `KTA` (K-to-ACC).
This is the primary way the game logic checks which buttons are pressed:

```cpp
void sm510_base_device::op_kta()
{
    // KTA: input K to ACC
    m_acc = m_read_k() & 0xf;
}
```

The `WR`/`WS` opcodes build up the S strobe output one bit at a time.
`WR` shifts a 0 into the shift register W; `WS` shifts a 1.
After building the desired strobe pattern, `PTW` latches it to the output port:

```cpp
void sm510_base_device::op_wr()
{
    // WR: shift 0 into W
    m_w = m_w << 1 | 0;
    update_w_latch();
}

void sm510_base_device::op_ws()
{
    // WS: shift 1 into W
    m_w = m_w << 1 | 1;
    update_w_latch();
}
```

`ATL` and `ATX` write the accumulator into the LCD control registers L and X.
These affect which segments blink and which LCD common lines are active:

```cpp
void sm510_base_device::op_atl()
{
    // ATL: output ACC to L
    m_l = m_acc;
}

void sm510_base_device::op_atx()
{
    // ATX: output ACC to X
    m_x = m_acc;
}
```

Relevant source [^5].

#### Arithmetic
`ADD11` is the carry-propagating add instruction.
It adds RAM, ACC, and carry together, sets carry on overflow, and skips the next instruction if carry is set:

```cpp
void sm510_base_device::op_add11()
{
    // ADD11: add RAM and carry to ACC and carry, skip next on carry
    m_acc += ram_r() + m_c;
    m_c = m_acc >> 4 & 1;
    m_skip = (m_c == 1);
    m_acc &= 0xf;
}
```

`ROT` rotates the 4-bit accumulator right through carry.
This provides a simple way to inspect individual bits:

```cpp
void sm510_base_device::op_rot()
{
    // ROT: rotate ACC right through carry
    u8 c = m_acc & 1;
    m_acc = m_acc >> 1 | m_c << 3;
    m_c = c;
}
```

Relevant source [^5].

#### Halt
`CEND` stops the CPU clock and enters low-power mode.
Games use this to idle between frames.
The CPU remains halted until an external K input or the divider gamma signal fires:

```cpp
void sm510_base_device::op_cend()
{
    // CEND: stop clock (halt the cpu and go into low-power mode)
    m_halt = true;
}
```

Relevant source [^5].

---
## ROM Data
<div class="emoji">💾</div>
Each Game & Watch driver in `src/mame/handheld/hh_sm510.cpp` defines three categories of ROM data.

The simplest example is Ball (AC-01), the very first Game & Watch game.
It uses the SM5A and has a single LCD screen:

```cpp
ROM_START( gnw_ball )
    ROM_REGION( 0x800, "maincpu", 0 )
    ROM_LOAD( "ac-01", 0x0000, 0x0740, CRC(ac94e6e4) SHA1(8270cb61f9fbff252eafec411b4c67f0171f8687) )

    ROM_REGION( 71748, "screen", 0)
    ROM_LOAD( "gnw_ball.svg", 0, 71748, CRC(7c116eaf) SHA1(578882af492b8a9f1eb72e06a547c8b574255fb9) )
ROM_END
```

Relevant source [^1].

The three ROM types are:

* **Program ROM** - The machine code dump from the MCU, placed at the program address space. `ac-01` here is 0x0740 (1856) bytes of actual SM5A instructions.
* **SVG file** - A vector graphics description of the LCD panel. The `"screen"` region holds the entire SVG as raw binary data. MAME's SVG renderer reads this at startup.
* **Melody ROM** - Only present on SM511 and SM512 games. A 256-byte region tagged `"maincpu:melody"` containing tone commands for the melody controller.

Donkey Kong (DK-52) uses the SM510 with a dual vertical screen layout.
It has 4 KB of program ROM and two separate SVG files:

```cpp
ROM_START( gnw_dkong )
    ROM_REGION( 0x1000, "maincpu", 0 )
    ROM_LOAD( "dk-52", 0x0000, 0x1000, CRC(5180cbf8) SHA1(5174570a8d6a601226f51e972bac6735535fe11d) )

    ROM_REGION( 176843, "screen_top", 0)
    ROM_LOAD( "gnw_dkong_top.svg", 0, 176843, CRC(16c16b84) SHA1(fa2e54c04366a30b51de024296b9f94c1cb76d68) )

    ROM_REGION( 145516, "screen_bottom", 0)
    ROM_LOAD( "gnw_dkong_bottom.svg", 0, 145516, CRC(2b711e9d) SHA1(0e263020cbe0e8b88bb68e3176630639b518935e) )
ROM_END
```

Relevant source [^1].

Notice that the SVG region sizes are exact byte counts, treated like any other ROM dump.
Checksums (CRC and SHA1) verify the SVG file integrity the same way they verify a program ROM.

---
## The LCD Driver
<div class="emoji">📄</div>
The LCD controller lives inside the CPU device itself, not in the driver.
The CPU device exposes a `write_segs()` callback that fires once per LCD refresh cycle.
The driver connects this callback to its own display processing pipeline.

<div class="rr-code-card-aside" markdown="1">
{% capture sm510base_cpp_items %}
- void::device_start::()
- void::device_reset::()
- u16::get_lcd_row::(int column, u8* ram)
- void::lcd_update::()
- void::lcd_timer_cb::()
- void::init_lcd_driver::()
- TIMER_CB::div_timer_cb::()
- void::init_divider::()
- void::execute_set_input::(int line, int state)
- void::do_interrupt::()
- void::increment_pc::()
- void::execute_run::()
{% endcapture %}

{% include_cached source-code-card.html title="sm510base.cpp" items=sm510base_cpp_items functions="14" lines="329" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">
`sm510base.cpp` implements the shared infrastructure: startup, reset, the LCD controller, the divider timer, interrupt handling, PC advancement, and the main execution loop.
Device-specific behaviour (opcode dispatch, ROM address maps) lives in the per-variant files.
</div>
</div>

The `init_lcd_driver()` function creates a timer that fires at approximately 1 kHz.
This matches the real hardware behaviour where the LCD is strobed once per 32 divider ticks:

```cpp
void sm510_base_device::init_lcd_driver()
{
    // note: in reality, this timer runs at high frequency off the main divider,
    // strobing one segment at a time
    m_lcd_timer = timer_alloc(FUNC(sm510_base_device::lcd_timer_cb), this);
    attotime period = attotime::from_ticks(0x20, unscaled_clock()); // default 1kHz
    m_lcd_timer->adjust(period, 0, period);
}
```

Relevant source [^3].

Each timer tick calls `lcd_update()`.
This function reads four columns of LCD data out of `lcd_ram_a`, `lcd_ram_b`, and `lcd_ram_c`, then fires the `write_segs()` callback for each:

```cpp
void sm510_base_device::lcd_update()
{
    // 4 columns
    for (int h = 0; h < 4; h++)
    {
        // 16 segments per row from upper part of RAM
        m_write_segs(h | SM510_PORT_SEGA, get_lcd_row(h, m_lcd_ram_a));
        m_write_segs(h | SM510_PORT_SEGB, get_lcd_row(h, m_lcd_ram_b));
        m_write_segs(h | SM510_PORT_SEGC, get_lcd_row(h, m_lcd_ram_c));

        // bs output from L/X and Y regs
        u8 blink = (m_div & 0x4000) ? m_y : 0;
        u8 bs = ((m_l & ~blink) >> h & 1) | ((m_x*2) >> h & 2);
        m_write_segs(h | SM510_PORT_SEGBS, (m_bc || !(m_bp & 1)) ? 0 : bs);
    }
}
```

Relevant source [^3].

The helper `get_lcd_row()` assembles a 16-bit word from one column of LCD RAM.
It returns zero immediately if the LCD backplate (`m_bp`) or bleeder (`m_bc`) is in the off state:

```cpp
inline u16 sm510_base_device::get_lcd_row(int column, u8* ram)
{
    if (ram == nullptr || m_bc || !(m_bp & 1))
        return 0;

    u16 rowdata = 0;
    for (int i = 0; i < 0x10; i++)
        rowdata |= (ram[i] >> column & 1) << i;

    return rowdata;
}
```

Relevant source [^3].

The BS (blinking segment) column deserves special mention.
The `m_div` bit 14 (the F1 divider flag) controls blink timing.
When this bit is set, the Y register masks specific L bits, making those segments blink at a low frequency without any CPU intervention.

---
## The Display System
<div class="emoji">🖼️</div>
The LCD driver inside the CPU device fires the `write_segs()` callback, but that callback lands in `hh_sm510_state` inside `hh_sm510.cpp`.
This is where the CPU output is converted into named screen outputs that the SVG renderer can read.

<div class="rr-code-card-aside" markdown="1">
{% capture hh_sm510_h_items %}
- void::update_display::()
- void::sm510_lcd_segment_w::(offs_t offset, u16 data)
- void::sm500_lcd_segment_w::(offs_t offset, u16 data)
- void::set_display_size::(u8 x, u8 y, u8 z)
- TIMER_CB::display_decay_tick::()
- u8::read_inputs::(int columns, int fixed)
- void::update_k_line::()
- void::input_r::()
- void::input_w::(u8 data)
- void::piezo_r1_w::(u8 data)
- void::piezo_input_w::(u8 data)
- void::sm5a_common::(machine_config &config, u16 w, u16 h)
- void::sm510_common::(machine_config &config, u16 w, u16 h)
- void::sm511_common::(machine_config &config, u16 w, u16 h)
- void::sm510_dualh::(machine_config &config, ...)
- void::sm510_dualv::(machine_config &config, ...)
- int::m_decay_pivot
- int::m_decay_len
- u32::m_display_state[0x20]
- u8::m_display_decay[0x20][0x20]
{% endcapture %}

{% include_cached source-code-card.html title="hh_sm510.h" items=hh_sm510_h_items functions="41" variables="20" lines="118" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">
`hh_sm510_state` is the base class for all ~200 Game & Watch drivers.
It bridges the CPU device output to MAME's screen and output systems.
The 20 member variables cover display geometry, decay simulation state, input multiplexer state, and audio output.
Relevant state definition [^2].
</div>
</div>

### Segment Dimensions
The SM510 series and the SM500/SM5A series use different LCD geometries.
`set_display_size()` tells the display system which dimensions to use:

```cpp
void hh_sm510_state::set_display_size(u8 x, u8 y, u8 z)
{
    // x = groups(in bits)
    // y = number of segments per group
    // z = commons(in bits)
    m_display_x_len = x;
    m_display_y_len = y;
    m_display_z_len = z;
}
```

The segment write callbacks call this before storing the segment data:

```cpp
void hh_sm510_state::sm510_lcd_segment_w(offs_t offset, u16 data)
{
    set_display_size(2, 16, 2);
    m_display_state[offset] = data;
}

void hh_sm510_state::sm500_lcd_segment_w(offs_t offset, u16 data)
{
    set_display_size(4, 4, 1);
    m_display_state[offset] = data;
}
```

Relevant source [^1].

For the SM510 family, the segment space is organised as:

* **x** - 2 bits = 4 groups (a, b, bs, c)
* **y** - 16 segments per group (bits 0-15 in the 16-bit data word)
* **z** - 2 bits = 4 commons (H1 to H4)

For SM500/SM5A, the space is smaller:

* **x** - 4 bits = up to 16 O groups
* **y** - 4 segments per group
* **z** - 1 bit = 2 commons (H1 and H2)

The older SM500-family display and opcode behaviour is implemented in a separate source file from the SM510 family core [^8].

---
### LCD Decay Simulation
<div class="emoji">💡</div>
A naive implementation would turn LCD segments on and off as the CPU writes to LCD RAM.
Real LCD panels do not behave this way.
Physical LCD cells take a few milliseconds to fully activate and deactivate.
MAME simulates this persistence using a per-segment decay counter.

The decay system is driven by a second independent 1024 Hz timer, created in `machine_start()`:

```cpp
m_display_decay_timer = timer_alloc(FUNC(hh_sm510_state::display_decay_tick), this);
m_display_decay_timer->adjust(attotime::from_hz(1024), 0, attotime::from_hz(1024));
```

Relevant source [^1].

Each tick calls `update_display()`.
This is the full implementation:

```cpp
void hh_sm510_state::update_display()
{
    u8 z_mask = (1 << m_display_z_len) - 1;
    u8 zx_len = 1 << (m_display_x_len + m_display_z_len);

    for (int zx = 0; zx < zx_len; zx++)
    {
        for (int y = 0; y < m_display_y_len; y++)
        {
            // delay lcd segment on/off state
            if (m_display_state[zx] >> y & 1)
            {
                if (m_display_decay[y][zx] < (m_decay_pivot + m_decay_len))
                    m_display_decay[y][zx]++;
            }
            else if (m_display_decay[y][zx] > 0)
                m_display_decay[y][zx]--;
            u8 active_state = (m_display_decay[y][zx] < m_decay_pivot) ? 0 : 1;

            // SM510 series: output to x.y.z, where:
            // x = group a/b/bs/c (0/1/2/3)
            // y = segment 1-16 (0-15)
            // z = common H1-H4 (0-3)

            // SM500/SM530 series: output to x.y.z, where:
            // x = O group (0-*)
            // y = O segment 1-4 (0-3)
            // z = common H1/H2 (0/1)
            m_out_x[zx >> m_display_z_len][y][zx & z_mask] = active_state;
        }
    }
}
```

Relevant source [^1].

The decay logic works as follows.
Each segment has a counter in `m_display_decay[y][zx]`.
When the segment data is 1 (on), the counter increments each tick up to a ceiling of `m_decay_pivot + m_decay_len`.
When the data is 0 (off), it decrements toward zero.
The output is set active only when the counter is at or above `m_decay_pivot`.

This produces two distinct visual effects.

##### On Delay
A segment that was off and turns on does not appear until the counter reaches `m_decay_pivot`.
With the default of 8 ticks at 1024 Hz, that is about 8 ms of activation lag.
This prevents very brief CPU writes from producing a visible flash.

##### Persistence
A segment that turns off continues to appear until the counter drains below `m_decay_pivot`.
With the default `m_decay_len` of 17 ticks, that gives about 17 ms of afterglow.
This is what makes G&W segments look solid rather than flickering as the CPU scans through them.

##### Per-Game Tuning
The defaults work well for most games.
Some games need different values.
Turtle Bridge (TL-28), for example, has segments that incorrectly activate at default settings.
Its constructor increases both parameters:

```cpp
gnw_tbridge_state(const machine_config &mconfig, device_type type, const char *tag) :
    hh_sm510_state(mconfig, type, tag)
{
    // increase lcd decay: unwanted segments light up
    m_decay_pivot = 25;
    m_decay_len = 25;
}
```

Relevant source [^1].

The higher `m_decay_pivot` means a segment must receive a full 25 ticks of data before appearing.
Short spurious pulses from the real hardware (which on Turtle Bridge accidentally activate neighbouring segments) are filtered out because they never accumulate enough ticks to cross the threshold.

---
### Segment-to-Screen Mapping
The final line of `update_display()` writes to `m_out_x`:

```cpp
m_out_x[zx >> m_display_z_len][y][zx & z_mask] = active_state;
```

`m_out_x` is declared as `output_finder<16, 16, 4>` with the format string `"%u.%u.%u"`.
MAME expands this into named output values like `"0.0.0"`, `"0.1.0"`, `"1.3.2"`, and so on.
The SVG file must use those exact strings as element IDs.
When `m_out_x[0][3][1]` is 1, MAME looks for an SVG element with ID `"0.3.1"` and makes it visible.

This is the complete rendering pipeline: CPU writes nibbles to LCD RAM, the LCD driver assembles them into 16-bit words per column, the segment callback stores them into `m_display_state`, the decay timer updates the visibility state, and the named output system maps that state into SVG element visibility.

---
## SVG Rendering Pipeline
<div class="emoji">🖼️</div>
MAME's SVG screen type renders vector artwork that changes dynamically based on named output values.
Each SVG element whose `id` matches an output name is shown when that output is 1 and hidden when it is 0.
The SVG describes the exact shape, position, and colour of every LCD segment on the physical panel.

The `mcfg_svg_screen()` helper configures one screen device per display:

```cpp
void hh_sm510_state::mcfg_svg_screen(machine_config &config, u16 width, u16 height, const char *tag)
{
    if (width == 0 || height == 0)
        return;

    screen_device &screen(SCREEN(config, tag, SCREEN_TYPE_SVG));
    screen.set_refresh_hz(60);
    screen.set_size(width, height);
    screen.set_visarea_full();

    config.set_default_layout(layout_hh_sm510_single);
}
```

Relevant source [^1].

The width and height values come from the individual game driver.
Ball, for example, passes `1671` and `1080`.
These are the pixel dimensions used for the SVG viewport.

The layout file (`hh_sm510_single.lh`, or `hh_sm510_dualv.lh` etc.) is a compressed MAME artwork file included at compile time.
It positions the screen within the MAME window.
The four layout variants are included at the top of the driver file:

```cpp
#include "hh_sm510_single.lh"
#include "hh_sm510_dualv.lh"
#include "hh_sm510_dualh.lh"
#include "hh_sm510_tripleh.lh"
```

Relevant source [^1].

### Multi-Screen Games
Dual-screen and triple-screen G&W games simply add more screen devices.
Each screen gets its own SVG ROM region and its own named output namespace.

For a dual vertical layout (top/bottom, like Donkey Kong), `sm510_dualv()` creates two screens:

```cpp
void hh_sm510_state::sm510_dualv(machine_config &config,
    u16 topwidth, u16 topheight, u16 botwidth, u16 botheight)
{
    mcfg_cpu_sm510(config);
    mcfg_sound_r1(config);
    mcfg_svg_screen(config, topwidth, topheight, "screen_top");
    mcfg_svg_screen(config, botwidth, botheight, "screen_bottom");

    config.set_default_layout(layout_hh_sm510_dualv);
}
```

The Donkey Kong driver calls it with the screen dimensions halved from the SVG file natural size:

```cpp
void gnw_dkong_state::gnw_dkong(machine_config &config)
{
    sm510_dualv(config, 1920/2, 1266/2, 1920/2, 1266/2);
}
```

Relevant source [^1].

For a dual horizontal layout (left/right, like Mario Bros), `sm510_dualh()` creates `"screen_left"` and `"screen_right"`.
For triple horizontal (like Zelda), `sm511_tripleh()` creates left, middle, and right screens.
In each case, the CPU's LCD output is split between the screens based on which output names appear in which SVG file.

---
## Input Handling
<div class="emoji">🔧</div>
The SM5xx input system uses multiplexing.
The CPU writes a strobe pattern to the S output port using the W shift register.
The driver reads the K, BA, and B input pins in response to that strobe.
This allows more buttons than the CPU has input pins.

### The Input Functions
`read_inputs()` scans the active input rows based on the current multiplexer mask `m_inp_mux`:

```cpp
u8 hh_sm510_state::read_inputs(int columns, int fixed)
{
    u8 ret = 0;

    // read selected input rows
    for (int i = 0; i < columns; i++)
        if (BIT(m_inp_mux, i))
            ret |= m_inputs[i]->read();

    if (fixed >= 0)
        ret |= m_inputs[fixed]->read();

    return ret;
}
```

`input_r()` is the callback the CPU calls when reading the K port.
It delegates to `read_inputs()` with the configured column count and fixed line:

```cpp
u8 hh_sm510_state::input_r()
{
    return read_inputs(m_inp_lines, m_inp_fixed);
}
```

Relevant source [^1].

`update_k_line()` feeds the current input state directly to the MCU interrupt line.
This allows the CPU to wake from halt mode when a button is pressed:

```cpp
void hh_sm510_state::update_k_line()
{
    // this is necessary because the MCU can wake up on K input activity
    m_maincpu->set_input_line(0, input_r() ? ASSERT_LINE : CLEAR_LINE);
}
```

Relevant source [^1].

---
### Input Port Definitions
Simple games like Ball use only the BA and B input pins directly.
The CPU reads them as single bits without any strobe:

```cpp
static INPUT_PORTS_START( gnw_ball )
    PORT_START("IN.0")
    PORT_BIT( 0x01, IP_ACTIVE_HIGH, IPT_SELECT ) PORT_CHANGED_CB(input_changed) PORT_NAME("Time")
    PORT_BIT( 0x02, IP_ACTIVE_HIGH, IPT_START2 ) PORT_CHANGED_CB(input_changed) PORT_NAME("Game B")
    PORT_BIT( 0x04, IP_ACTIVE_HIGH, IPT_START1 ) PORT_CHANGED_CB(input_changed) PORT_NAME("Game A")
    PORT_CONFNAME( 0x08, 0x00, "Invincibility (Cheat)" )
    PORT_CONFSETTING(    0x00, DEF_STR( Off ) )
    PORT_CONFSETTING(    0x08, DEF_STR( On ) )

    PORT_START("BA")
    PORT_BIT( 0x01, IP_ACTIVE_LOW, IPT_JOYSTICK_RIGHT ) PORT_CHANGED_CB(input_changed) PORT_16WAY

    PORT_START("B")
    PORT_BIT( 0x01, IP_ACTIVE_LOW, IPT_JOYSTICK_LEFT ) PORT_CHANGED_CB(input_changed) PORT_16WAY

    PORT_START("ACL")
    PORT_BIT( 0x01, IP_ACTIVE_HIGH, IPT_SERVICE1 ) PORT_CHANGED_CB(acl_button) PORT_NAME("ACL")
INPUT_PORTS_END
```

Donkey Kong uses three multiplexed strobe rows (S1, S2, S3), accessed by the CPU as `"IN.0"`, `"IN.1"`, `"IN.2"`:

```cpp
static INPUT_PORTS_START( gnw_dkong )
    PORT_START("IN.0") // S1
    PORT_BIT( 0x07, IP_ACTIVE_HIGH, IPT_UNUSED )
    PORT_BIT( 0x08, IP_ACTIVE_HIGH, IPT_BUTTON1 ) PORT_CHANGED_CB(input_changed) // Jump

    PORT_START("IN.1") // S2
    PORT_BIT( 0x01, IP_ACTIVE_HIGH, IPT_JOYSTICK_RIGHT ) PORT_CHANGED_CB(input_changed)
    PORT_BIT( 0x02, IP_ACTIVE_HIGH, IPT_JOYSTICK_UP ) PORT_CHANGED_CB(input_changed)
    PORT_BIT( 0x04, IP_ACTIVE_HIGH, IPT_JOYSTICK_LEFT ) PORT_CHANGED_CB(input_changed)
    PORT_BIT( 0x08, IP_ACTIVE_HIGH, IPT_JOYSTICK_DOWN ) PORT_CHANGED_CB(input_changed)

    PORT_START("IN.2") // S3
    PORT_BIT( 0x01, IP_ACTIVE_HIGH, IPT_SELECT ) PORT_CHANGED_CB(input_changed) PORT_NAME("Time")
    PORT_BIT( 0x02, IP_ACTIVE_HIGH, IPT_START2 ) PORT_CHANGED_CB(input_changed) PORT_NAME("Game B")
    PORT_BIT( 0x04, IP_ACTIVE_HIGH, IPT_START1 ) PORT_CHANGED_CB(input_changed) PORT_NAME("Game A")
    PORT_BIT( 0x08, IP_ACTIVE_HIGH, IPT_SERVICE2 ) PORT_CHANGED_CB(input_changed) PORT_NAME("Alarm")

    PORT_START("ACL")
    PORT_BIT( 0x01, IP_ACTIVE_HIGH, IPT_SERVICE1 ) PORT_CHANGED_CB(acl_button) PORT_NAME("ACL")
INPUT_PORTS_END
```

Relevant source [^1].

The game code writes different values to the S port to select which row it wants to read, then reads K to get the button state for that row.
This is the same technique used in keyboard matrix scanning.

---
## Sound
<div class="emoji">🎧</div>
Game & Watch sound is simple by modern standards.
A piezoelectric buzzer produces tones from a 1-bit or 2-bit digital output.
The SM511 and SM512 added a dedicated melody controller with a 256-byte tone ROM.

### 1-bit Piezo (SM510 and SM5A)
The simplest configuration routes the R port directly to a `speaker_sound_device`.
`mcfg_sound_r1()` sets this up:

```cpp
void hh_sm510_state::mcfg_sound_r1(machine_config &config)
{
    SPEAKER(config, "mono").front_center();
    SPEAKER_SOUND(config, m_speaker);
    m_speaker->add_route(ALL_OUTPUTS, "mono", 0.25);

    m_maincpu->write_r().set(FUNC(hh_sm510_state::piezo_r1_w));
}
```

The callback simply writes the low bit of the R output to the speaker level:

```cpp
void hh_sm510_state::piezo_r1_w(u8 data)
{
    // R1 to piezo (SM511 R pin is melody output)
    m_speaker->level_w(data & 1);
}
```

Relevant source [^1].

The SM510 `clock_melody()` method controls tone frequency via a divider mask.
When `m_r_mask_option` is `RMASK_DIRECT`, the raw R register bits drive the speaker.
When set to a divider bit index, the divider free-runs and the CPU only gates the output on or off.
This is how the SM510 produces alarm tones without needing to toggle a bit at audio frequency.

The SM5A complicates this slightly.
On the SM5A, the R port serves double duty for both sound and input multiplexing.
The `sm5a_common()` config overrides the default R callback with `piezo_input_w`, which handles both functions from a single write:

```cpp
void hh_sm510_state::piezo_input_w(u8 data)
{
    // R1 to piezo, other to input mux
    piezo_r1_w(data & 1);
    input_w(data >> 1);
}
```

Relevant source [^1].

Bit 0 goes to the speaker, higher bits go to the input multiplexer.

---
### Melody ROM (SM511 and SM512)
<div class="emoji">🎼</div>
The SM511 adds a dedicated 256-byte melody ROM and a hardware melody controller.
The CPU program does not need to toggle the R pin at audio frequency.
Instead, it writes a melody address via the `PRE` opcode and enables playback via `SME`.
The hardware automatically advances through the melody data and generates tones.

##### Tone Command Format
The tone cycle table is a 64-entry [LUT](#glossary-lut) embedded in the emulator.
It maps each combination of tone command (0-15) and duty cycle index (0-3) to a tick count:

```cpp
static const u8 lut_tone_cycles[4*16] =
{
    0, 0, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13, 14, 14, 0, 0,
    0, 0, 8, 8, 9, 9, 10, 11, 11, 12, 13, 13, 14, 15, 0, 0,
    0, 0, 8, 8, 9, 9, 10, 10, 11, 12, 12, 13, 14, 15, 0, 0,
    0, 0, 8, 9, 9, 10, 10, 11, 11, 12, 13, 14, 14, 15, 0, 0,
};
```

Commands 0 and 1 are rest and stop respectively.
Commands 2-13 produce tones.
Commands 14-15 are illegal.
The OCT bit (bit 4 of the command byte) shifts the cycle count left by 1, halving the frequency - this is the octave selector.

##### Playback and Note Advancement
The complete `clock_melody()` function runs on every divider tick:

```cpp
void sm511_device::clock_melody()
{
    if (!m_melody_rom)
        return;

    u8 cmd = m_melody_rom[m_melody_address] & 0x3f;
    u8 out = 0;

    // clock duty cycle if tone is active
    if ((cmd & 0xf) >= 2 && (cmd & 0xf) <= 13)
    {
        out = m_melody_duty_index & m_melody_rd & 1;
        m_melody_duty_count++;
        int index = m_melody_duty_index << 4 | (cmd & 0xf);
        int shift = ~cmd >> 4 & 1; // OCT

        if (m_melody_duty_count >= (lut_tone_cycles[index] << shift))
        {
            m_melody_duty_count = 0;
            m_melody_duty_index = (m_melody_duty_index + 1) & 3;
        }
    }
    else if ((cmd & 0xf) == 1)
    {
        // set melody stop flag
        m_melody_rd |= 2;
    }

    // clock time base on divider F7/F8
    if ((m_div & melody_step_mask()) == 0)
    {
        u8 mask = (cmd & 0x20) ? 0x1f : 0x0f;
        m_melody_step_count = (m_melody_step_count + 1) & mask;

        if (m_melody_step_count == 0)
            m_melody_address++;
    }

    // output to R pin
    if (out != m_r_out)
    {
        m_write_r(out);
        m_r_out = out;
    }
}
```

Relevant source [^7].

The duty cycle index cycles through 0-3.
The output bit is `m_melody_duty_index & m_melody_rd & 1`.
This means only when both the duty index is odd and melody is enabled does the output go high.
The result is a square-wave-like pattern whose frequency is set by how quickly the duty counter fills to the LUT threshold.

The melody address advances whenever the lower divider bits (`melody_step_mask()`) wrap around to zero.
The duration field at bits 5-4 of the ROM byte doubles or quadruples the note length by widening the step counter mask.

The SM511 also resets its clock divider to 4 rather than 2, halving the effective CPU instruction rate from 16384 Hz to 8192 Hz.
This is set in `device_reset()`:

```cpp
void sm511_device::device_reset()
{
    sm510_base_device::device_reset();
    m_melody_rd &= ~1;
    m_clk_div = 4; // 8kHz
    notify_clock_changed();
}
```

Relevant source [^7].

A melody ROM region in the driver provides the tune data.
The region tag `"maincpu:melody"` is how the CPU device locates it at runtime.
The verifier in `init_melody()` checks every byte and logs a warning if any byte has illegal bits set.

---
# References
[^1]: `src/mame/handheld/hh_sm510.cpp` - Main Game & Watch driver, ~200 games
[^2]: `src/mame/handheld/hh_sm510.h` - Driver state class definition
[^3]: `src/devices/cpu/sm510/sm510base.cpp` - SM5xx shared CPU implementation
[^4]: `src/devices/cpu/sm510/sm510base.h` - SM5xx base class and opcode declarations
[^5]: `src/devices/cpu/sm510/sm510op.cpp` - SM510 opcode handler implementations
[^6]: `src/devices/cpu/sm510/sm510.cpp` - SM510 device, ROM maps, buzzer controller
[^7]: `src/devices/cpu/sm510/sm511.cpp` - SM511/SM512 device, melody controller
[^8]: `src/devices/cpu/sm510/sm500op.cpp` - SM500 opcode handlers (shift-register display ops)
[^9]: 1986 Sharp Semiconductor Data Book (referenced in sm510base.cpp source header)
[^10]: 1990 Sharp Microcomputers Data Book (referenced in sm510base.cpp source header)
