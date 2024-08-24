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

The term **"Reset Vector"** refers to the memory location that the CPU is directed to when it undergoes a reset. The reason it's called a "vector" is due to the way computer architecture traditionally handles interrupts and resets.

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

Now its time to scroll all the way back to the top of the disasembly to find the definition of the **Start** function.
