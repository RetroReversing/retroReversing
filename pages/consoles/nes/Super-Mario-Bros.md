---
title: Let's reverse - Super Mario Bros (NES)
layout: post
permalink: /super-mario-bros
tags:
- nes
- game
recommend:
- nes
- game
editlink: /consoles/nes/Super-Mario-Bros.md
_updatedAt: '2024-08-17'
---

# Introduction
This page will give a brief overview of how Super Mario Bros for the Nintendo Entertainment System (NES) works. This page wouldn't have been possible without the excellent work by **doppelganger** on their [Comprehensive Super Mario Bros. Disassembly](https://gist.github.com/1wErt3r/4048722).

# Cartridge
![SuperMarioBrosNes](https://github.com/user-attachments/assets/ebc2b54b-9e71-451e-88c7-7d11c056e775)

The original **Super Mario Bros.** cartridge for the NES used the **NES-NROM-256** board (**HVC-NROM-256K** in Japan). 

This board was commonly used in early NES games and did not include any special memory mapping hardware, relying solely on the CPU's built-in capabilities to access the ROM data.

## NROM-256
This board was a standard ROM-only (NROM) configuration, featuring 32 KB of PRG (Program) ROM and 8 KB of CHR (Character) ROM. The "256" in the name refers to the size of the PRG ROM in kilobits (32 KB = 256 kilobits).

You can see the Board name clearly at the top of the circuit board in the photo below:
![NES-NROM-256-01](https://github.com/user-attachments/assets/2c0dd1e8-d809-4914-8b85-1aaa77fb868e)

You can see that there are 3 main chips, from left to right:
* The Lockout Chip or CIC (Checking Integrated Circuit) - used for piracy prevention and region checking (not present in Japanese cartridges)
* The CHR ROM - used for art/graphic data
* The PRG ROM - used for program code and other data such as sound/music

### Vertical Mirroring
You can also see near the middle of the board is a gold circle with a V beside it, this means that the data is mirrored Vertical (if the circle was on the right beside the H symbol it would be Horizontal.

In NES cartridges, the terms Vertical Mirroring and Horizontal Mirroring refer to how the PPU (Picture Processing Unit) maps the Name Tables in memory, which are used to store background tile data for rendering the game's screen. 

The NES has the ability to display up to four different Name Tables, but with most games, only two are used due to memory limitations. Mirroring determines how these two Name Tables are mapped across the available memory space.

Vertical Mirroring is best suited for **horizontally scrolling games** because it allows continuous horizontal scrolling without repeating the left and right edges. SO this is why its used in Super Mario Bros.


## Cartridge Revisions
The number at the end of the board designation, such as **NES-NROM-256-01**, typically refers to a specific version or revision of that particular board type. 

In this case it was used for revisions based on region as can be seen in the table below:

Region | Board
---|---
USA | NES-NROM-256-01
Europe | NES-NROM-256-02
UK | NES-NROM-256-03
Germany/Sweden | NES-NROM-256-06
Spain | NES-NROM-256-08
Japan | HVC-NROM-256K-02

But not that the number at the end is not a region identifier, its more of a revision identifier. 

Note that the table above was provided thanks to the data available at [NesCartDB](https://nescartdb.com/search/basic?keywords=super+Mario+bros.&kwtype=game), it is possible that revision 04, 05 and 07 exist but noone has yet added them to the **NesCartDB**.

Revisions might involve minor changes or improvements to the board's design, manufacturing process, or component layout, but they don't typically affect the overall functionality or behavior of the game.

## The ROM
If you legally back up your Super Mario Bros NES ROM you will notice that the size of the ROM is about 41KB (40,976 bytes to be precise), this makes sense as the ROM file is based on the storage of the cartridge plus a 16 byte header of information about the cartridge:
- **32 KB** (32,768 bytes) of Program Code (PRG) ROM
- **8 KB** (8,192 bytes) of Graphics (CHR) ROM
- **16 bytes** of iNES header

The total of these is:

> 32,768 bytes + 8,192 bytes + 16 bytes = 40,976 bytes

Compared to modern games this is tiny, infact a screenshot Super Mario Bros could be bigger than 41KB! Every byte was valuable during the development of the game.

This is why later games such as Mario Bros 2 and 3 would have more ROM data in the cartridge to give the programmers more room to work with all the new features.

---
# Start of the game
The NES knows where to start executing code based on the **Reset Vector**, which is a specific memory address stored in the last two bytes of the Program (PRG) ROM. 

When the NES is powered on (or **reset** button is pressed), the CPU (the Ricoh 2A03 or 2A07, depending on the region) automatically reads the Reset Vector to determine the starting point for execution. Without this vector, the CPU would not know where to start, leading to undefined behavior

## Reset Vector
The term "Reset Vector" refers to the memory location that the CPU is directed to when it undergoes a reset. 

The Reset Vector is called a "vector" because it acts as a pointer directing the CPU to the starting address in memory where it should begin executing code after a reset. The term is consistent with other types of vectors in computer architecture that serve similar purposes for different types of system events.

## Super Mario Bros Reset Vector
If you scroll all the way to the bottom of the [Disassembly](https://gist.github.com/1wErt3r/4048722) you will see a section that looks like the following:
```assembly
;-------------------------------------------------------------------------------------
;INTERRUPT VECTORS

      .dw NonMaskableInterrupt
      .dw Start
      .dw $fff0  ;unused
```
In this you can see that there are three vectors defined, although the last one is unused. In order they are:
* NMI Vector: $FFFA-$FFFB
* Reset Vector: $FFFC-$FFFD
* IRQ/BRK Vector: $FFFE-$FFFF

The Non Maskable Interrupt (**NMI**) is crucial for synchronizing game logic with the display, as it occurs at a regular interval determined by the PPU.
The IRQ/BRK Vector is not used in Mario Bros so it can be safely ignored.

But we are first interested in the Reset Vector which is a 16bit (2 byte) pointer to the Subroutine/Function called helpfully called **Start**.

## The Start Function
Now its time to scroll all the way back to the top of the disasembly to find the definition of the **Start** function.
```
;-------------------------------------------------------------------------------------
;DIRECTIVES

       .index 8 ; This directive likely specifies that indexed operations should consider 8-bit addressing, aligning with the 6502 processor’s 8-bit index registers
       .mem 8 ; This directive might dictate that memory operations or alignment should be based on 8-bit boundaries, ensuring proper data alignment or access.

       .org $8000

;-------------------------------------------------------------------------------------

Start:
             sei                          ;pretty standard 6502 type init here
             cld
             lda #%00010000               ;init PPU control register 1 
             sta PPU_CTRL_REG1
             ldx #$ff                     ;reset stack pointer
             txs
```
You can ignore the .index and .mem directives these are just for the specific assembler that is used to build this specific disassembly. In this case it was for assembling in the old DOS-only x816 assembler which doesn't even run correctly in DOSBox, so it is unlikely you will be using that assembler.

The `.org` directive is useful as it tells the assembler where to put the next block of code, in this case at location hex 0x8000 which is the starting address of the first PRG ROM bank that is mapped into the address space. So the Start function will be placed right at the start of **Program** memory and the NES can access it by using the address 0x8000.

This address is exactly where the Reset Vector is pointing, so if you look at memory in a Hex editor it will have the byte 0x80 at the location 0xFFFC.

### The Start Function decompiled
If you open the NES ROM in Ghidra you will get an output in the decompilation window, we have tidied this up and added comments around the code to give a clearer idea of what is happening:
```c

// constants
#define WARM_BOOT_FLAG 0xA5
#define WarmBootOffset 0xd6
#define ColdBootOffset 0xfe

// Global variables referenced in the code
extern byte[5] TopScoreDisplay; // Location 0x07d7 - Holds the Top score
extern byte WarmBootValidation; // Location 0x07ff - Whether we are warm boot or not. 

void Start() // By default its called reset because GhidraNes detected its the reset Vector
{
  PPUCTRL = 0x10; // Initialize PPU control register 1 to value of binary 00010000 ( See section below why this is the case)

  stackPointer = (uint8_t *) 0xff; // reset the stack pointer

char currentPPUStatus;

// Wait for VBlank 1
do {
    currentPPUStatus = PPUSTATUS;
  } while (currentPPUStatus > -1);

// Wait for VBlank 2
  do {
    currentPPUStatus = PPUSTATUS;
  } while (currentPPUStatus > -1);


 byte bootJumpPointer = 0xfe; // By default set the bootJumpPointer to ColdBootOffset, but we are just about to check if its a warm boot and override

// Check if we are a Warm Boot or a Cold Boot
// Warm Boot is when player pressed reset button as they had previously been playing the game
// Todo this we just check if the Top Score has changed from the default value
 
  char i = 5;
  do {
// It is only possible for players to get the decimal digits 0->9 as a score so if the byte is higher (hex) then it must be default score which means we are a cold boot
    if (TopScoreDisplay[i] > 9) goto ColdBoot;
    i = i - 1;
  } while (i > -1);

// Second check for a ColdBoot
  if (WarmBootValidation == WARM_BOOT_FLAG) {
    bootJumpPointer = WarmBootOffset; // Set the bootJumpPointer to WarmBootOffset as the player has played the game previously
  }

ColdBoot:
  *(undefined2 *)(sVar4 + -1) = 0x802e;
  OperMode = InitializeMemory((bootJumpPointer);
  DMC_RAW = OperMode;
  WarmBootValidation = WARM_BOOT_FLAG;
  PseudoRandomBitReg = WARM_BOOT_FLAG;
  SND_CHN = 0xf; // Enable all sound channels except dmc
  PPUMASK = 6;
  *(undefined2 *)(sVar4 + -1) = 0x8049;
  MoveAllSpritesOffscreen(6);
  *(undefined2 *)(sVar4 + -1) = 0x804c;
  InitializeNameTables();
  DisableScreenFlag = DisableScreenFlag + '\x01';
  bVar2 = Mirror_PPU_CTRL_REG1 | 0x80;
  *(undefined2 *)(sVar4 + -1) = 0x8057;
  WritePPUReg1(bVar2);
  do {
                    /* WARNING: Do nothing block with infinite loop */
  } while( true );
}
```

### Initialize PPU control Register 1
The **PPU Control Register 1**, also known as 0x2000, is a crucial register in the NES that controls various aspects of the Picture Processing Unit (PPU). The register is an 8-bit value, and each bit or group of bits has a specific function that affects how the NES renders graphics.

The first thing Super Mario does is set the value to 0x10 like so:
```c
PPUCTRL = 0x10; // init PPU control register 1 to value of binary 00010000
```

These bits in the PPU Control Register 1 are used to configure the NES's video hardware to control how sprites and backgrounds are rendered and how the PPU handles memory operations and interrupts. Properly setting these bits is crucial for correct graphics display and game functionality.

We have now set the 5th Bit (from the left) to 1 which means we want to set the Increment Mode

In the NES's PPU (Picture Processing Unit), the "Increment Mode" setting determines how the address pointer for PPU memory operations (such as accessing the nametable, attribute tables, or pattern tables) is updated after each read or write operation.

This means the PPU will now Increment the address by 32 bytes after each operation. This is suitable for accessing memory in larger chunks, such as accessing an entire row of tiles or attributes in a nametable.

#### Usage in Context
For Background Tile Data: When using an increment mode of 32 bytes, you can more efficiently handle background tile data because a single increment operation advances you by an entire row of 32 bytes. For example, if you are writing tile data to a nametable, using a 32-byte increment means you can easily update an entire row of tiles in one go.

For Attribute Tables: For attribute tables, which are used to define the properties of tiles (such as color and palette), using a 32-byte increment means you can move to the next row of attributes quickly, as each row is 32 bytes in size.

### Reset the Stack Pointer
The stack pointer on the NES starts at the high end of the stack area in memory. 

By setting the stack pointer to 0xFF, you initialize it to the highest address of the stack segment.

Note that this is not real C Code, it is imagining that the stackPointer could be changed by setting it as a variable:
```c
  stackPointer = (uint8_t *) 0xff; // reset the stack pointer back to the top at location in memory 0xFF
```

The stack in the 6502 processor grows downwards, meaning it starts at the high end of the stack segment and grows towards lower memory addresses. 

Setting the stack pointer to 0xFF prepares the stack for use by pushing data onto it.

This is required because the player might have just been playing the game and press reset and the stack will be dirty with all the values that were placed on it during the last game. We need to make sure we are starting fresh!

