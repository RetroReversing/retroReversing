---
layout: post
tags: 
- n64
- assembly
- tutorial
- incomplete
title: N64 MIPS Assembly Video Tutorials
image: /public/N64/N64LearnMIPSAssemblyLanguage.jpg
category: n64
permalink: /N64MipsAssembly
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 MIPS Assembly Video Tutorials
    url: #
editlink: /consoles/n64/N64MipsAssembly.md
---

# Introduction
[Fraser N64](https://www.youtube.com/channel/UC3tcfSES8CB45DmTbHhUP1w) has created a series of YouTube videos where he teaches N64 [MIPS](#glossary-mips) programming from the ground up. This page is designed to act as notes as you follow along with the tutorials.

First of all in order to help support the creation of more excellent N64 MIPS tutorials, consider subscribing to Fraser here:
[Fraser N64 - YouTube](https://www.youtube.com/channel/UC3tcfSES8CB45DmTbHhUP1w)

Also if you are lucky you can catch the stream live here: 
[fraserN64 - Twitch](https://www.twitch.tv/frasern64/)

## Source Code and Resources
You can access all the source code and resources referenced in the videos here: 
[fraser125/N64_ASM_Videos: The files complementing my video series N64 MIPS Assembly](https://github.com/fraser125/N64_ASM_Videos)

## Glossary of Key Terms
If you are new to MIPS or N64 development, these terms are fundamental to the workflow:
* <a id="glossary-mips"></a>**MIPS** - Microprocessor without Interlocked Pipelined Stages; the RISC architecture used by the N64.
* <a id="glossary-bass"></a>**bass** - A versatile, multi-architecture assembler created by near, used extensively for N64 projects.
* <a id="glossary-n64chain"></a>**n64chain** - A pre-built GCC toolchain specifically configured for creating Nintendo 64 programs.
* <a id="glossary-mame"></a>**MAME** - Multiple Arcade Machine Emulator; used here for its built-in debugger which is superior for inspecting N64 CPU state.

---
# Lesson 001 - Dev Environment Setup
This section is based on the technical walkthrough by Fraser N64[^1] and covers the initial setup of a Windows-based development environment for N64 [MIPS](#glossary-mips) development.

<iframe width="560" height="315" src="https://www.youtube.com/embed/m_eKDuWhBo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Essential Development Tooling
Here is the essential software stack:
* **[bass](#glossary-bass) Assembler** - The primary tool for converting assembly source into N64 ROM data. The ARM9 github fork is the standard version used for these tutorials.
* **GCC for Windows** - Used for creating Windows-side tools or if integrating C code into the pipeline.
* **[n64chain](#glossary-n64chain)** - Essential for projects requiring the standard C library or more complex compilation.
* **Notepad++** - A recommended text editor for its speed, simplicity, and customization options.
* **Legacy Windows Calculator** - The Windows 7 version is preferred over the Windows 10 app for its much more intuitive binary bit-view, which is crucial for manually verifying register values and bitwise operations.
* **GitHub Desktop** - Recommended for users who prefer a GUI for version control and cloning test repositories, such as Peter Lemon's N64 tests.

## Emulator and Debugger Configuration
To run N64 software in [MAME](#glossary-mame), you must have the N64 BIOS files. The file `n64.zip` must be placed inside the `roms/` directory of your MAME installation. It is recommended to leave this file zipped to ensure MAME recognizes it correctly.

### Launching the Debugger
This view provides direct access to the MIPS architecture internals:

* **GPRs** - General Purpose Registers. MIPS contains 32 of these (ranging from `zero` to `ra`), though roughly 30 are practically usable since a few (like the `zero` register) are hard-wired by the architecture.
* **HI / LO Registers** - Special-purpose registers used specifically to hold the 64-bit results of integer multiplication and division.
* **Floating Point Registers** - The Coprocessor 1 (CP1/FPU) register set natively used for floating-point mathematical operations on the N64.

---
## Repo Layout and Template Baseline
The `N64_ASM_Videos` repo is structured as a set of self-contained projects per lesson plus a shared `LIB/` folder. Knowing where things live makes the later lessons much easier to follow.

Here is the high-level layout used by the repo:
* **Template** - A minimal bootable ROM skeleton (`Template/Template.asm`, `Template/N64_Header.asm`, `Template/make.cmd`).
* **LIB** - Shared includes, macros, and binary assets such as `LIB/N64.INC`, `LIB/N64_GFX.INC`, and `LIB/N64_BOOTCODE.BIN`.
* **Video002 ... Video009** - Per-video projects that repeat the same pattern: `Video00X.asm`, `N64_Header.asm`, `make.cmd`, and the built `Video00X.N64`.

## Build Loop (bass + chksum64)
The repo uses the same 2-step build loop in every `make.cmd`: assemble, then patch header checksums.

For example, `Template/make.cmd` looks like this:
```bat
@echo off
bass Template.asm -strict -benchmark
chksum64 Template.N64
```

This matters because `chksum64` is not optional: without it, CRC placeholders in the header remain unpatched and the ROM often will not boot reliably in stricter emulators or on hardware.

## One-Click MAME Run and Debug Scripts
The repo includes wrapper scripts that take a ROM path and launch MAME from a fixed install directory. This avoids retyping long `mame64.exe ...` commands every iteration.

The basic pattern used in `bass/run.cmd` is:
```bat
@echo off
set ROM=%~dpnx1
set OLDDIR=%CD%
cd \mame
mame64.exe n64 -window -cart %ROM% -switchres -nofilter
chdir /d %OLDDIR%
```

`bass/debug.cmd` is the same idea but launches with `-debug -log -verbose` enabled so you drop straight into the debugger and get a log file.

## Toolchain Shells (n64chain + gcc)
If you also use the repo's `n64chain/` and `gcc/` tooling, it provides small helper scripts that just set `PATH` and keep a dedicated prompt open.

For example, `n64chain/WinN64.cmd` is:
```bat
@ECHO OFF
SET PATH=C:\n64chain\bin;%PATH%
ECHO N64 GCC Command Prompt
```

## Repo Naming Conventions
The repo uses simple file naming conventions to separate macros/constants from executable code:
* **`.asm`** - Main program file (entry point + top-level flow).
* **`.INC`** - Variables, constants, and macros (included as source).
* **`.S`** - Function bodies, often called via macros or `jal`.

---
## Workflow Automation
This section covers small Windows-side workflow tweaks that keep your build loop fast and your logs visible.

### Persistent Command Prompts
Standard batch files close their terminal window immediately upon completion, which wipes out your compilation errors and build history.

By creating a Windows shortcut to your batch file and modifying the target, you can force the environment to stay open:
```bat
%COMSPEC% /k "C:\path\to\your\script.bat"
```

The `/k` parameter tells the command processor to carry out the command specified by the string but remain open, leaving you at a command prompt precisely where you need to be to run repeated `bass` assembly commands. You can pin these shortcuts directly to your taskbar for quick access.

### MAME Launch Scripts
Because developers do not use a frontend, typing the full MAME executable path and N64 launch parameters repeatedly becomes tedious. A common pattern is to create batch files that capture your ROM file and route it into MAME automatically.

Here is the standard logic for a `run.bat` script that manages directory switching and parameter passing:
```bat
@echo off
set ROM_PATH=%~f1
set OLD_DIR=%CD%
cd /d "C:\mame"
mame64 n64 -window -cart "%ROM_PATH%"
cd /d "%OLD_DIR%"
```

The `%~f1` syntax is a critical Windows batch trick; it takes the first parameter passed to the script (the ROM filename) and expands it into a fully qualified absolute path name. Since MAME requires absolute paths when invoked from outside its root directory, this automatically handles the path translation.

You can also duplicate this script into a `debug.bat` file to automatically attach the debugger and verbose logging flags:
```bat
@echo off
set ROM_PATH=%~f1
set OLD_DIR=%CD%
cd /d "C:\mame"
mame64 -debug -log -verbose n64 -window -cart "%ROM_PATH%"
cd /d "%OLD_DIR%"
```

---
# Lesson 002 - bass Assembler Keywords
This section covers the fundamental keywords and directives used by the [bass](#glossary-bass) assembler to structure a Nintendo 64 ROM.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lOW7CAkTfig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Walkthrough: Video002.asm Minimal Bootable ROM
The `N64_ASM_Videos` repo includes a minimal, bootable skeleton in `Video002/Video002.asm` that is a good reference for what a known-good `bass` project looks like.

This is the directive block used by the repo:
```nasm
arch n64.cpu
endian msb
output "Video002.N64", create

fill $0010'1000
origin $00000000
base $80000000

include "../LIB/N64.INC"
include "../LIB/N64_GFX.INC"
include "N64_Header.asm"
insert "../LIB/N64_BOOTCODE.BIN"
```

Two directives that are easy to confuse early on are `origin` and `base`:
* `origin` is the current write cursor inside the output ROM file (a file offset).
* `base` is the runtime address space that labels resolve to (the address you will see in the debugger).

In the repo's layout, the first `0x1000` bytes are deliberately reserved for the header + bootcode. With `base $80000000`, that means the label `Start:` ends up at runtime address `0x80001000`.

The repo also makes the CRC patching step explicit. `Video002/make.cmd` is:
```bat
@echo off
bass Video002.asm -strict -benchmark
chksum64 Video002.N64
```

## Core bass Directives
The main directives required for an N64 project include:
* **arch** - Defines the target architecture. For the primary N64 CPU, use `arch n64.cpu`. The assembler also supports `n64.rsp` for the Reality Signal Processor and `n64.rdp` for the Reality Display Processor.
* **endian** - Defines the byte order. The N64 uses Big-Endian, so this must be set to `endian msb` (Most Significant Bit).
* **output** - Specifies the filename of the generated ROM. Using `output "name.n64", create` tells the assembler to generate a completely new ROM from scratch.
* **origin** - Sets the current positional cursor within the output ROM file, which dictates exactly where the following bytes of code will be physically placed.
* **fill** - Used to write zero-padding into the ROM.

Here is an example of what the top of your main assembly file will look like:
```nasm
arch n64.cpu
endian msb
output "lesson2.n64", create
fill 1052672
```

### The Purpose of Fill
When the N64 boots, it automatically copies the first 1 Megabyte of the game cartridge into the console's RAM.
To prevent the console from copying garbage memory if the game is smaller than 1MB, developers pad the ROM with zeros.

The value `1052672` is derived from adding the size of the 4KB header (`4096` bytes) to exactly 1 Megabyte (`1048576` bytes).

## File Modularization Directives
It is crucial to understand the difference between these two keywords:
* **include** - Works like `#include` in C. It parses the external file as source code. If the file contains macros or constants, they are loaded into memory but no bytes are written to the ROM unless those macros are explicitly invoked.
* **insert** - Treats the target file as raw binary data. It grabs the file byte-by-byte and writes it directly to the output ROM at the exact physical location of the `insert` command.

Example usage:
```nasm
include "lib/n64.inc" // Loads constants and macros, writes nothing yet.
insert "n64_bootcode.bin" // Physically dumps 4KB of raw binary boot code here.
```

---
## The N64 Header
This section covers the small metadata block at the start of an N64 ROM, and the handful of fields you typically touch first when building a ROM from scratch.

In the `N64_ASM_Videos` repo, the header file `N64_Header.asm` is structured to occupy exactly `0x40` (64) bytes, and it is immediately followed by a `0xFC0` (4032) byte bootcode blob. Together, these add up to `0x1000` (4096) bytes, which is why the repo's entrypoint code label typically starts at `0x80001000` when `base $80000000` is used.

### Data Width Keywords
When manually constructing the header or laying out data, you use specific keywords to tell `bass` how many bytes to allocate for the literal value:

* **db** - Data Byte (1 byte / 8-bit)
* **dw** - Data Word (4 bytes / 32-bit). Note: A "word" on the MIPS architecture is strictly 32 bits.
* **dd** - Data Double (8 bytes / 64-bit)

Strings can be placed easily using `db`. The N64 header allows for a 27-character string name:
```nasm
db "MY FIRST N64 GAME " // Pads the remaining space with spaces
```

### CRC Calculation
The header also contains two placeholder words for the CRC (Cyclic Redundancy Check) checksums. The N64 boot process calculates the checksum of the first megabyte and compares it to these header values. If they do not match, the game will not boot on hardware.

Because the CRC requires the final compiled ROM, the assembler leaves placeholder `dw` values. You must run a secondary tool-such as `sum64` or `chksum64`-as a post-assembly step in your build script to calculate the true CRC and inject it back into the header.

---
## Debugging in MAME
In the [MAME](#glossary-mame) debugger command line, use the `bp` (breakpoint) command:
```
bp 80000400
```

Address `0x80000400` is conventionally where control is handed over to the user's game loop. From there, you can press `F10` (Step Over) or `F11` (Step Into) to walk through the instructions line by line while inspecting the MIPS registers.

---
# Lesson 003 - Registers and First 6 Instructions
This section covers the [MIPS](#glossary-mips) architecture fundamentals, register layout, and foundational instructions.
<iframe width="560" height="315" src="https://www.youtube.com/embed/Qqf7kmUDupA?si=C-yBL11AWQm3NK9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Walkthrough: Video003 First Instructions
The `N64_ASM_Videos` repo includes a minimal entrypoint in `Video003/Video003.asm` that is useful for understanding what these first instructions do in practice.

This is the first block of real code the repo runs after `Start:`:
```nasm
Start:
  lui  t0, PIF_BASE
  addi t1, zero, 8
  sw   t1, PIF_CTRL(t0)

Loop:
  j Loop
  nop
```

This short sequence is doing three important things:
* It uses `lui` to build a memory-mapped IO base address in a register (`t0`).
* It uses `addi` with `zero` to create a small immediate (`t1 = 8`) without needing a pseudo-instruction.
* It uses `sw base+offset` addressing to write to a specific hardware register.

If you expand the address math, this write becomes very concrete:
* `PIF_BASE` is defined in `LIB/N64.INC` as `0xBFC0`, so `lui t0, PIF_BASE` yields `t0 = 0xBFC00000`.
* `PIF_CTRL` is defined in `LIB/N64.INC` as `0x07FC`, so `sw t1, PIF_CTRL(t0)` writes to `0xBFC00000 + 0x07FC = 0xBFC007FC`.

In debuggers, you will often see these addresses sign-extended into 64-bit registers as `FFFFFFFFBFC00000` and similar values. That is normal on the VR4300 and is the same sign-extension behaviour described later in this lesson.

---
## Memory Hierarchy
The MIPS architecture is referred to as a register architecture because all data must be loaded into a register, operated upon, and then written back out to memory.

The typical flow follows this speed hierarchy (fastest to slowest):
* **Registers** - Located physically at the center of the CPU, these operate with zero latency.
* **Cache** - The N64 MIPS CPU has separate Data and Instruction caches.
* **Console RAM** - Fast, dynamically allocated memory.
* **Cartridge ROM** - The slowest medium of the immediate hierarchy.

## MIPS Register Architecture
While you can technically use any register for anything (except register `0`), developers adhere to strict conventions to ensure code compatibility:
* **zero (r0)** - Hardwired to the value `0`. Any attempt to write to it fails silently.
* **at (r1)** - Assembler Temporary. Reserved for assembler pseudo-instructions.
* **v0-v1 (r2-r3)** - Used exclusively for function return values.
* **a0-a3 (r4-r7)** - Used to pass arguments into functions.
* **t0-t9 (r8-r15, r24-r25)** - Temporaries. Function-local variables that do not need to be saved to the stack before calling another function.
* **s0-s8 (r16-r23, r30)** - Saved registers. Global variables; if a function modifies these, it must back up the original value to the stack and restore it before returning.
* **k0-k1 (r26-r27)** - Kernel variables. Strictly reserved for system exception handling.
* **sp (r29)** - Stack Pointer. Used to save context during function calls.
* **ra (r31)** - Return Address. Populated by Jump-and-Link instructions so the CPU knows where to return after a function call completes.

---
## Assembly Syntax and Formatting
These formatting rules are conventions that make low-level code easier to scan, especially when you are comparing register state in a debugger to what you wrote in source:
* **Whitespace is ignored** - Tabs or spaces are purely for human readability.
* **Instruction format** - The line begins with the instruction mnemonic, followed by 1 to 4 parameters separated by commas.
* **Right-to-Left evaluation** - For most instructions, the destination register is listed first on the left, but conceptually the operation evaluates the right-hand elements and places the result into the left.
* **Exception: sw** - The Store Word instruction works left-to-right (take the data on the left, store it to the address on the right).

---
## Foundational MIPS Instructions
These are the baseline building blocks used throughout the early lessons before you start leaning on heavier macro abstractions.

### Loading Immediate Data
An immediate instruction incorporates literal data directly inside the instruction's opcode itself, rather than reading it from RAM.
* **lui (Load Upper Immediate)** - Takes a 16-bit constant and loads it into the upper 16 bits of the 32-bit space of a register, padding the lower 16 bits with zeros.
* **addi (Add Immediate)** - Adds a literal constant to the value of a source register and stores the result.

---
### Memory Storage
These instructions move data between registers and memory.
* **sw (Store Word)** - Grabs a 32-bit word from a register and writes it into memory. It takes a destination address and an offset value. MIPS also has variants like `sb` (Store Byte), `sh` (Store Halfword), and `sd` (Store Double/64-bit).

### Control Flow
These instructions change what executes next.
* **j (Jump)** - Unconditionally shifts execution to a specific label/address. An infinite loop can simply be `j loop_label`.
* **nop (No Operation)** - Instructs the CPU to do absolutely nothing for one cycle.

### Delay Slots
MIPS architecture relies heavily on Delay Slots-a quirk where the instruction placed immediately after a branch or jump is executed before the jump actually takes effect. This happens because the CPU pipeline has already fetched the next instruction while calculating the jump destination. During early development, it is common practice to simply place a `nop` in the delay slot to prevent execution errors.

---
## Sign Extension
When loading 32-bit values into the N64's 64-bit registers, the CPU performs Sign Extension.

If the highest bit (the sign bit) of the 32-bit value is `1` (indicating a negative value in a signed integer), the CPU extends that `1` across the entire upper 32 bits of the 64-bit register. This is why memory addresses frequently appear in the debugger padded with `F`s (e.g., `FFFFFFFFBFC00000`). While initially confusing, the N64 memory management unit largely ignores the upper 32 bits when addressing 32-bit software space.

---
# Lesson 004 - Memory Mapped Hardware and Video Init
This section details the Nintendo 64 memory mapping, hardware interfaces, and the assembly required to initialize the video subsystem.
<iframe width="560" height="315" src="https://www.youtube.com/embed/FoYPe_k0Fy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Walkthrough: Video004 VI Register Init
The `N64_ASM_Videos` repo includes a complete, explicit VI init sequence in `Video004/Video004.asm`. It is a useful reference because it shows the exact register writes the later `ScreenNTSC(...)` macro wraps.

The lesson uses a classic pattern: load the VI base, then `sw` to a series of fixed offsets:
```nasm
lui t0, VI_BASE

li  t1, BPP16
sw  t1, VI_STATUS(t0)

li  t1, $A000'0000
sw  t1, VI_ORIGIN(t0)

li  t1, 320
sw  t1, VI_WIDTH(t0)
```

If you are new to memory-mapped IO, it helps to see the address math that `bass` is doing for you. This table shows a few of the key VI registers and how their offsets relate to the VI base address:

Register | Offset | Absolute address (KSEG1)
---|---|---
VI_STATUS | `0x00` | `0xA4400000`
VI_ORIGIN | `0x04` | `0xA4400004`
VI_WIDTH | `0x08` | `0xA4400008`
VI_X_SCALE | `0x30` | `0xA4400030`
VI_Y_SCALE | `0x34` | `0xA4400034`

Once you understand the explicit sequence, you can switch to the repo's macro in `LIB/N64_GFX.INC`:
```nasm
ScreenNTSC(320, 240, BPP16, $A010'0000)
```

That macro writes the same VI registers, but it also documents what the “magic” constants mean (for example, the `VI_TIMING` and `VI_H_VIDEO` fields), which makes it a good long-term reference when you start changing resolution, origin, or scaling.

## The Flat Memory Map
When the console boots, the BIOS places the [MIPS](#glossary-mips) processor into a 32-bit kernel mode. This provides a 4 Gigabyte (`0x00000000` to `0xFFFFFFFF`) address space. Even though 64-bit mathematics are available, memory addressing remains firmly in 32-bit.

This flat structure makes assembly programming relatively straightforward because all internal systems-such as the Video Interface (VI), Audio Interface (AI), Peripheral Interface (PI), and Serial Interface (SI)-are mapped directly to specific addresses. You do not need complex port configurations; you interact with the console's hardware simply by reading and writing to standard memory addresses.

### Cached vs. Uncached Memory
These address ranges actually point to the exact same physical memory on the motherboard:
* **0x80000000 (Cached)** - Operations hit the CPU caches first. While reads from the cache take just 1 CPU cycle, writes stay in the cache until manually flushed to physical RAM.
* **0xA0000000 (Uncached)** - Bypasses the internal CPU cache entirely and interacts directly with physical RAM.

For example, `0x80000400` and `0xA0000400` access the identical location in memory. When updating hardware subsystems like the Video Interface, you must either write to the `0xA` uncached range or write to the `0x8` cached range and remember to trigger a cache flush command so the hardware actually receives the data.

---
## Initializing the Video Interface (VI)
When writing values to configure the Video Interface, two technical boundaries exist:

* **Resolution Limits** - The hardware only outputs at `320x240` or `640x480`. Attempting to render non-standard internal resolutions will just draw them inside the standard 320x240 canvas surrounded by physical black borders.
* **Color Depth** - The standard format is 16 Bits-Per-Pixel (BPP). The n64 structures this as an RGBA 5-5-5-1 layout (5 bits Red, 5 bits Green, 5 bits Blue, and 1 bit Alpha transparency).

A fun trick during early development: Setting the frame buffer origin address to point to the start of your game code memory (e.g., `0xA0001000`) will force the VI to render your compiled assembly instructions to the television screen as blobs of static color data.

## Assembly Quality of Life Tricks
Here are techniques commonly used in MIPS projects:
* **Pseudo-instructions** - The `li` (Load Immediate) command doesn't actually exist in the MIPS CPU. It is a pseudo-instruction that the assembler automatically splits into two real instructions at compile time: `lui` (Load Upper Immediate) and `ori` (Or Immediate). This keeps your source code highly readable without sacrificing exact register control.
* **Hexadecimal Ticks** - Reading long memory addresses is error-prone. The `bass` assembler allows inserting a single quote tick `'` anywhere inside a hexadecimal number as a visual separator (e.g. `0x8000'0000`). It compiles the same but is far easier to read.
* **Compile-time Math** - Mathematical functions can be placed directly in the source file, such as configuring resolutions via `320 * 240`. The assembler evaluates this calculation before generating the ROM, costing zero CPU cycles during gameplay.
* **NOP Padding** - Using three consecutive `nop` (No Operation) instructions creates an obvious blank block inside the MAME memory debugger. This is an excellent tactic for placing visual boundaries between distinct functions or initialization loops.

---
# Lesson 005 - Draw Line & Branching Delay Slot
This section covers the fifth technical walkthrough by Fraser MIPS, focusing on drawing basic lines to the screen and understanding the nuances of the [MIPS](#glossary-mips) pipeline and delay slots.
<iframe width="560" height="315" src="https://www.youtube.com/embed/F-RalhLt7Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Frame Buffer Memory Positioning
A standard practice is to place the frame buffer exactly at the 1 Megabyte mark (`0x00100000`).

To set this up cleanly using the assembler:
* Convert 1 Megabyte to bytes: `1024 * 1024 = 1,048,576 bytes`.
* Convert to hexadecimal: `0x100000`.
* Assign this as your VI Origin (Video Interface Origin) pointer.

---
## Pixel Coordinate Math
The formula for finding the offset of a single pixel is:
`((Y_Position * Screen_Width) + X_Position) * Bytes_Per_Pixel`

For example, to start a line 15 rows down and 110 columns in on a 16-bit (2 bytes per pixel) display:
`((15 * 320) + 110) * 2`

This yields the literal memory offset that should be added to your frame buffer's base address to locate the exact destination for your pixel color data.

---
## Writing 32-bit Colors
You achieve this by loading the same 16-bit color constant into both the upper and lower halves of a temporary register:
* **lui** - Loads the 16-bit color into the upper half of the register.
* **ori** - Loads the identical 16-bit color into the lower half of the register.

Now, a single `sw` (Store Word) command writes two adjacent pixels to the frame buffer simultaneously.

---
## Walkthrough: Video005 Horizontal Line (Two Pixels Per Store)
The repo's `Video005/Video005.asm` is a concrete implementation of the pixel math described above. It draws a horizontal line by writing 32-bit words into a 16bpp framebuffer.

The key trick is that the repo packs a single 16-bit color constant into *both* halfwords of a 32-bit register, so each `sw` produces two adjacent pixels of the same color:
```nasm
lui t0, LAWN_GREEN16
ori t0, t0, LAWN_GREEN16
```

Then it computes the starting pixel pointer using the same formula, and loops in 4-byte steps:
```nasm
la   t1, $A010'0000
addi t1, t1, ((320 * 15) + 110) * 2
addi t2, t1, 200

do_Store2Pixels:
  sw  t0, 0(t1)
  bne t1, t2, do_Store2Pixels
  addi t1, t1, 4
```

This loop is also a good demonstration of why delay slots matter: the `addi t1, t1, 4` runs in the branch delay slot, so it executes even on the final iteration when the branch falls through. When you start writing your own loops, be explicit about whether your end pointer is inclusive or end-exclusive so you do not accidentally do one extra store.

## Loop Construction
MIPS favors a do-while loop structure. The typical flow is:
* Calculate the starting pixel address (`t1`).
* Calculate the ending pixel address (`t2`).
* Store the pixel color into the address at `t1`.
* Increment the pointer `t1` by 4 bytes (`addi t1, t1, 4`).
* Compare `t1` and `t2`. If they are not equal, branch back to Step 3 (`bne t1, t2, loop_label`).

## The MIPS Pipeline and Delay Slots
The **Branch Delay Slot** is the single instruction located *immediately after* a branch or jump command. Because of how the pipeline fetches instructions, this slot is executed *before* the jump actually takes effect.

### Pipeline Rules and Performance
Here are a few practical rules of thumb that help avoid accidental slowdowns and hard-to-debug control flow issues.
* **Register-to-Register (e.g., `addi`)**: These take 5 pipeline cycles. Placing one in a branch delay slot is the most efficient use of CPU time, essentially granting you a "free" instruction calculation while the branch evaluates.
* **Load and Store (e.g., `sw`)**: These are blocking operations. If placed in a delay slot, they halt the pipeline, taking 11 pipeline cycles (wasting roughly 3 clock cycles). Do not place them in delay slots.
* **Branch inside a Branch**: Placing a jump or branch inside the delay slot of another jump causes completely unpredictable execution behavior and should be strictly avoided.
* **Pseudo-instructions**: Never place pseudo-instructions (like `la` or `li`) inside a delay slot. They can secretly expand to multiple literal instructions during assembly, meaning only half of the intended operation will fit into the single delay slot, breaking your code.


**Best Practice:** If you cannot find a suitable register-to-register calculation to place in a delay slot, always use a `nop` (No Operation) to keep the pipeline stable.

---
# Lesson 006 - Draw Vertical Line & Delay Slot Optimization
This section covers the sixth technical walkthrough by Fraser MIPS, detailing the structural changes needed to draw vertically and how to implement a practical [MIPS](#glossary-mips) delay slot optimization.
<iframe width="560" height="315" src="https://www.youtube.com/embed/hYoZ03OqGHA?si=PQj6OuYZmJrYv0tK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Vertical Line Logic and Coordinate Math
Instead of an end address, a vertical line loop relies on a specific **counter register** (e.g., `t2`) that decrements on each pass, terminating when it hits zero. This is easily checked using the MIPS `zero` register (`r0`).

### The Screen Pitch Trap
When moving horizontally, memory is perfectly linear. When moving vertically, you must jump down an entire row in memory.

A common bug when calculating this jump is forgetting about the pixel data size. If the screen is `320` pixels wide, you do not simply add `320` to the pointer to move down one row. You must multiply the width by the **Bytes-Per-Pixel (BPP)**.

For a 16-bit display (2 bytes per pixel), the mathematical stride (or "pitch") is:
`320 * 2 = 640 bytes`.

If you incorrectly add just `320`, the N64 will write halfway across the screen horizontally rather than directly below, resulting in strange graphical glitches like drawing multiple half-height lines diagonally.

---
## Practical Delay Slot Optimization
A typical vertical line loop might evaluate like this:
* `addi t2, t2, -1` (Subtract 1 from the counter)
* `addi t1, t1, 640` (Move memory pointer down one screen row)
* `bne t2, zero, loop_label` (Branch back if counter is not zero)
* `nop` (Delay slot buffer)

To optimize this and save execution time, you can pull the counter subtraction out of the main loop body and place it directly into the branch delay slot:
* `addi t1, t1, 640`
* `bne t2, zero, loop_label`
* `addi t2, t2, -1` (Executes "for free" while the branch resolves)

Because the CPU always evaluates the delay slot before taking the jump, the counter is safely decremented on every pass, speeding up the geometry rendering loop.

## Walkthrough: Video006 Vertical Line (Pitch in the Delay Slot)
The repo's `Video006/Video006.asm` shows a practical version of this optimisation pattern. It decrements the counter in the loop body, then advances the framebuffer pointer by one full row in the branch delay slot:
```nasm
addi t2, r0, 200
do_Store2Pixels:
  sw   t0, 0(t1)
  addi t2, t2, -1
  bne  t2, r0, do_Store2Pixels
  addi t1, t1, 320 * 2
```

This is a good template for learning because the delay-slot instruction is a single real instruction (`addi`), not a pseudo-instruction like `li` or `la`, so it cannot expand into multiple instructions and accidentally break control flow.

## Pitfall: `sw` Writes Two Pixels in 16bpp Mode
In `Video006/Video006.asm`, the color is loaded as `lui t0, LIGHT_BLUE16` but the matching `ori` is commented out. That means the lower 16 bits of the store are `0x0000`, so each `sw` writes one LIGHT_BLUE pixel and one black pixel.

If you want each `sw` to write two identical 16bpp pixels, pack the color into both halfwords:
```nasm
lui t0, LIGHT_BLUE16
ori t0, t0, LIGHT_BLUE16
```

---
# Lesson 007 - bass Macros and Debugger Scripts
This section covers the seventh technical walkthrough by Fraser MIPS, focusing on code restructuring using [bass](#glossary-bass) assembler macros and automating the [MAME](#glossary-mame) debugger.
<iframe width="560" height="315" src="https://www.youtube.com/embed/EIs59fdEMHA?si=uEB28357oQHTWZKp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Restructuring with Compile-Time Macros
It is crucial to understand that [bass](#glossary-bass) macros evaluate strictly at **compile-time**. When the assembler encounters a macro call, it literally copies and pastes the underlying instruction block into the compiled ROM at that exact location. It does not perform a function jump (`jal`). If you invoke a large macro 20 times, the code is duplicated 20 times, heavily inflating the ROM size.

## Repo Macro Examples (LIB/*.INC)
The `N64_ASM_Videos` repo leans heavily on macros in `LIB/*.INC` to keep the main `.asm` files readable while still being explicit about what gets written to hardware.

Two macros you will see in almost every lesson project are:
* `init()` from `LIB/N64.INC`, which performs early boot stabilisation and sets up a usable stack pointer.
* `ScreenNTSC(width, height, status, origin)` from `LIB/N64_GFX.INC`, which writes the full set of VI registers using the same constants as the explicit code in `Video004/Video004.asm`.

For example, later lesson files call:
```nasm
init()
ScreenNTSC(320, 240, BPP16, $A010'0000)
```

When you are learning, it is worth reading the macro bodies in `LIB/N64.INC` and `LIB/N64_GFX.INC` because they also serve as documentation: the repo includes comments that describe what each VI timing constant represents.

### Macro Syntax Rules
When declaring a macro in `bass`, you must follow strict syntax constraints:
* The macro must be declared *above* where it is used in the source file.
* The opening curly brace `{` **must** reside on the exact same line as the macro declaration.
* The closing curly brace `}` can be on its own line.

Example of wrapping the Video Interface setup:
```nasm
macro init_video() {
lui t0, 0xA440
sw zero, 0x0010(t0)
// ... extra instructions ...
}
```

### Handling Macro Parameters
Because macros are compile-time text replacements, the passed arguments do not automatically land in CPU registers. You must explicitly load the parameter placeholder into a register inside the macro using pseudo-instructions like `la` (Load Address) or `li` (Load Immediate).
```nasm
macro screen_setup(width, height, origin) {
la t0, {origin}
li t1, {width}
// Now t0 and t1 contain the passed parameters
}
```

## Automating the MAME Debugger
To automate breakpoints, create a simple text file (e.g., `n64_debug.txt`) in your working directory and populate it with standard MAME debugger commands:
```text
bp 80000400
wp 80000400, 4, rw
```

The repo also provides a practical starting point for launching into MAME's debugger without rewriting command lines each time. `bass/debug.cmd` launches MAME with `-debug -log -verbose` enabled:
```bat
@echo off
set ROM=%~dpnx1
set OLDDIR=%CD%
cd \mame
mame64.exe n64 -debug -log -verbose -window -cart %ROM% -switchres -nofilter
chdir /d %OLDDIR%
```

### Advanced Watchpoints
The `wp` command in the script above sets a **Watchpoint**. Unlike a standard breakpoint that halts execution when the Program Counter reaches a line of code, a watchpoint halts execution whenever a specific memory address is accessed.

The parameters `80000400, 4, rw` instruct MAME to halt if the 4-byte range starting at `0x80000400` is either read (`r`) or written to (`w`). This is an incredibly powerful tool for tracking down exactly which function is modifying a variable.

---
### Loading the Debug Script
To use the script, you append the `-debugscript` parameter to your `debug.bat` launch file:
```bash
mame64 -debug -log -verbose n64 -window -cart "%ROM_PATH%" -debugscript "n64_debug.txt"
```

When MAME launches, it will execute the commands in the text file and halt at the system reset vector. Simply press `F5` to resume execution, and MAME will instantly warp to your custom `80000400` breakpoint.

---
# Lesson 008 - Fonts Part 1: Macros and 1-Bit Expansion
This section covers the eighth technical walkthrough by Fraser MIPS, introducing custom fonts and how to manipulate 1-bit per pixel assets for the N64's 16-bit display in [MIPS](#glossary-mips)-based projects.
<iframe width="560" height="315" src="https://www.youtube.com/embed/9CDvlIAjXJM?si=B1uYvPq8RC9hKZxF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1-Bit Fonts on the N64
The standard ASCII table contains 32 non-printable control characters at the beginning. If your font starts at the first printable character (the Space character), you can easily find the correct graphic by subtracting `32` from the character's standard ASCII decimal value.

Because of the 1bpp density, an entire 8x8 ASCII font set requires extremely little memory-roughly 760 bytes. However, the N64 hardware only draws in 16-bit or 32-bit color depths. Therefore, before the font can be drawn to the screen, a routine must parse the 1bpp data and expand it into full 16-bit colors in RAM.

---
## Repo Walkthrough: PIXEL8 Font Pipeline (Video008/Video009)
The `N64_ASM_Videos` repo implements an end-to-end font pipeline using a 1bpp 8x8 font file and a pair of routines in `LIB/PIXEL8_UTIL.S`.

At a high level, the pipeline is:
* Insert the 1bpp font data into the ROM (the repo uses `LIB/PIXEL8.FNT`).
* Call `pixel8_init16(...)` once to expand the 1bpp font into a 16bpp font atlas in RAM.
* Call `pixel8_static16(...)` to blit characters from the expanded atlas into the framebuffer.

The repo wraps these routines with small calling macros in `LIB/PIXEL8_UTIL.INC` so the call sites stay readable. For example, `pixel8_init16(destination, forecolor, backcolor)` is implemented as a macro that sets `a0/a1/a2` and then calls the real routine:
```nasm
macro pixel8_init16(destination, forecolor, backcolor) {
  li  a0, {destination}
  ori a1, r0, {forecolor}
  jal pixel8_init16
  ori a2, r0, {backcolor}
}
```

There are two details worth noticing in that macro:
* It uses the `jal` delay slot intentionally to load `a2` with a single real instruction (`ori`), avoiding the pseudo-instruction hazard described later in this lesson.
* It uses registers `a0/a1/a2` because the real implementation in `LIB/PIXEL8_UTIL.S` treats those as fixed parameters (`a0 = font destination`, `a1 = forecolor`, `a2 = backcolor`).

`Video008/Video008.asm` demonstrates the "expand font into RAM" step by calling `pixel8_init16(...)` twice with different color pairs. `Video009/Video009.asm` demonstrates rendering text by calling `pixel8_static16(...)` and defining a ROM string with `db "Hello World!"`.

---
## Data Inclusion and Alignment
Always `insert` external binary assets at the very end of your source file, far away from your program loops.

### Byte Alignment
When inserting binary files, it is highly recommended to enforce byte alignment. You can use the `align` macro in [bass](#glossary-bass) to force the assembler to pad the file with zeros until the data sits on a clean boundary.
```nasm
ALIGN(8)
include "../LIB/PIXEL8_UTIL.S"
```
Aligning data to an 8-byte boundary is a defensive programming habit that prevents critical crashes when reading blocks of memory into hardware systems like the DMA (Direct Memory Access) controller later on.

### Repo Detail: How pixel8_static16 Passes Position and Length
In the repo, the `pixel8_static16(...)` macro packs the on-screen position into a single register (`a2`) to keep the call ABI simple. The upper 16 bits are `top` and the lower 16 bits are `left`.

The macro builds that packed value using two real instructions, avoiding `li` in a delay slot:
```nasm
lui a2, {top}
ori a2, {left}
```

Inside the implementation in `LIB/PIXEL8_UTIL.S`, the routine unpacks those halves with:
```nasm
srl  top, position, 16
andi left, position, 0xFFFF
```

The macro also passes the string length in `v1` as a simple safety bound. In the repo this is set with `ori v1, zero, {length}`, which again stays as a single instruction.

---
## File Structure Conventions
These conventions help keep large projects modular without accidentally emitting bytes into the ROM.
* **.inc files**: Used exclusively for macros and constants. Including these at the top of your main file will not write any arbitrary bytes to the ROM.
* **.s files**: Used exclusively for pure assembly routines. These should be included carefully, typically at the bottom of your main file, so the routines do not execute accidentally during standard program flow.

## Jump and Link (JAL)
Instead, the macro should only prepare the arguments and immediately call a single, shared assembly routine using **Jump and Link (`jal`)**:
```nasm
macro init_font(dest, fg_color, bg_color) {
li a0, {dest}
li a1, {fg_color}
li a2, {bg_color}
jal expand_font_routine
nop // Delay slot
}
```

The `jal` instruction serves two purposes:
* It jumps to the target label (`expand_font_routine`).
* It automatically saves the address of the *next* instruction into the **Return Address (`ra`)** register.

Once the `expand_font_routine` finishes its work, it terminates with a **Jump Register (`jr ra`)** instruction, sending the CPU straight back to where the macro was initially called.

## Repo Implementation Notes: pixel8_init16 Expansion Loop
The repo's `LIB/PIXEL8_UTIL.S` shows what a 1bpp-to-16bpp expansion loop looks like in real VR4300 code. Conceptually, it streams bits out of the 1bpp font and writes either the foreground or background 16-bit color into a destination buffer in RAM.

One interesting instruction choice in the repo is the use of a branch-likely to place the foreground store in the delay slot:
```nasm
bltzl t1, _continue
sh    forecolor, 0(font_addr)
sh    backcolor, 0(font_addr)
```

Because `bltzl` only executes its delay-slot instruction when the branch is taken, this pattern becomes a compact per-bit decision:
* If the current bit is set, store `forecolor` (delay slot runs) and skip the `backcolor` store.
* If the bit is not set, the delay slot is nullified and the following `sh backcolor, ...` runs instead.

The routine returns the expanded font memory size (in the repo this is `0x2F80`) so higher-level code can allocate multiple font atlases in RAM without guessing sizes.

---
## The Delay Slot Pseudo-Instruction Trap
**Never place an `li` (Load Immediate) into a branch delay slot.**

`li` is a pseudo-instruction. The assembler automatically breaks it down into *two* separate hardware instructions (`lui` and `ori`). The branch delay slot is strictly hardware-enforced to hold only *one* single instruction. If you place an `li` there, only the `lui` half will execute before the jump takes effect, resulting in a corrupted parameter and a broken font initialization.

If you must optimize a parameter load into a delay slot, explicitly write the exact single hardware instruction (like `ori` or `addi`) yourself.

---
# References
[^1]: [Fraser N64 - YouTube](https://www.youtube.com/channel/UC3tcfSES8CB45DmTbHhUP1w)
[^2]: [fraserN64 - Twitch](https://www.twitch.tv/frasern64/)
[^3]: [fraser125/N64_ASM_Videos: The files complementing my video series N64 MIPS Assembly](https://github.com/fraser125/N64_ASM_Videos)
