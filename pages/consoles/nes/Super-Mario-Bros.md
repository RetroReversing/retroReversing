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

# Cartridge
The original **Super Mario Bros.** cartridge for the NES used the **NES-NROM-256** board (**HVC-NROM-256K** in Japan). 

This board was a standard ROM-only (NROM) configuration, featuring 32 KB of PRG (Program) ROM and 8 KB of CHR (Character) ROM. The "256" in the name refers to the size of the PRG ROM in kilobits (32 KB = 256 kilobits).

This board was commonly used in early NES games and did not include any special memory mapping hardware, relying solely on the CPU's built-in capabilities to access the ROM data.

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

\[ 32,768 \, \text{bytes} + 8,192 \, \text{bytes} + 16 \, \text{bytes} = 40,976 \, \text{bytes} \]

Compared to modern games this is tiny, infact a screenshot Super Mario Bros could be bigger than 41KB! Every byte was valuable during the development of the game.

This is why later games such as Mario Bros 2 and 3 would have more ROM data in the cartridge to give the programmers more room to work with all the new features.
