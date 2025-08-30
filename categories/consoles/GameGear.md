---
permalink: /gamegear/
layout: post
title: Sega Game Gear Reverse Engineering
recommend: gamegear
recommendTitle: All GG Posts
editlink: ../categories/consoles/GameGear.md
console: 'gamegear'
consoleimage: /public/consoles/Sega Game Gear.png
thumbnail: /public/consoles/Sega Game Gear.png
excerpt: Awesome list of Sega Game Gear Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sega Game Gear Reverse Engineering
    url: #
tags:
  - gamegear
  - sega
---

# Introduction
Welcome to our page dedicated to Game Gear reverse engineering! The Game Gear was a handheld gaming console that was released by SEGA in 1990, and was notable for its full-color backlit screen and library of classic SEGA games. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Game Gear reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Game Gear, and get ready to dive into the exciting world of Game Gear reverse engineering!

---
# Hardware
If you're interested in reverse engineering software for the Sega Game Gear handheld console, it's crucial to have a solid understanding of the hardware that powers it. By comprehending the inner workings of the Game Gear hardware, you can better understand how the software interacts with the hardware and how you can potentially modify or enhance it.

This section of our guide will provide you with comprehensive information and resources on the hardware of the Sega Game Gear, including retail, prototype, and development hardware.

## Official Development Hardware
{% include link-to-other-post.html post="/sega-game-gear-devkit" description="For information about SEGA's Game Gear development hardware check out this post." %}

### Sega Digitizer System
The Sega Digitizer System was a development kit specifically for creating sprites and background tiles officially inside SEGA. It is unclear if they ever sold the system to third party developers. 

![SEGA Digitizer I with Pitfall II](https://github.com/user-attachments/assets/ff5816cc-66ef-4d4d-8299-5edfe3dd1eb9)

You can see Pitfall II from 1985 in the photo above. It had a rudimentary touch screen with a pen allowing artists to "draw" pixels directly on the screen.

This was not exclusive to Game Gear development, it was also used in early sega arcade games, system 1 and system 16 (1986) and all the way up to Mega Drive (it had 3 different versions).

You can find out more including lots of images on [Video Games Densetsu: The Sega Digitizer System, a tool used by graphic...](https://videogamesdensetsu.tumblr.com/post/149092824100/the-sega-digitizer-system-a-tool-used-by-graphic)

## Third Party Development Hardware
{% include link-to-other-post.html post="/krisalis-development-kit-(sega)/" description="For information about the Krisalis 3rd party development hardware check out this post." %}

---
# Software Development Kit
Up until recently it was not known if SEGA ever released a software development kit for the Game Gear, as previous consoles such as the SEGA Master System only had a documentation manual of the hardware but no actual official SDK. 

So it was up to developers to "roll their own" software development kits for the Game Gear.

However thanks to the source code leak of the unreleased Game Gear game **Barbie Super Model** on both Romhacking.net: [Romhacking.net - Documents - Barbie Super Model Source Code](https://www.romhacking.net/documents/604/) and SMS Power: [Barbie Super Model - Development - SMS Power!](https://www.smspower.org/Development/BarbieSuperModel-GG). We now have at least some of the files that were sent out to Game Gear developers as an official SDK from SEGA. It is not clear who leaked the source code for the game, potentially an old **Hi-Tech Expressions** employee.

## ASM80
In the Barbie source code there is a folder called **ASM80** this is the assembler toolchain which is made by **Microtech Research** from 1991-1994, it is likely this is the recommended official SEGA Game Gear SDK, the main executables are listed in the table below:

Name | Description
---|---
ASM80.exe | Assembler for z80 by Microtech
Bin2Hex.exe | BIN2HEX Rev 1.00, copyright (c) 1989 by Lex Computer Services
Lib80.exe | Executable librarian program (manages static libraries) - Copyright (c) 1985-1991 Microtec Research, Inc.
Lnk180.exe | Linker by Microtec for Zilog Z180 (Version 6.0 from 1994)
LnkZ80.exe | Linker by Microtec for standard Zilog Z80
MIDI2GG.exe | Convert MIDI Music files to Game Gear format
PP.exe | PROPACK Copyright (c) 1991,92 Rob Northen Computing - used for file compression
PPV.exe | Maybe ProPack Verify?

The assembler toolchain is made by **Microtech Research** from 1991 and supported the standard Z80 and also the **Hitachi 64180** processor (which is a Zilog Z180 processor). The Game Gear used the standard Z80 so the Z180 functionality was unused.

This folder also contains pre-compiled executables known as the **GGUtils** which were written by **Paul Hutchinson** with the source code available, they are in the table below:
Name | Description
---|---
Bin2Page.exe | Creates Intel Hex .HEX 16k pages from a binary file
BinToHex.exe | Creates an Intel Hex .HEX file from a binary file
DB.exe | Creates a DB statement .ASM file from a binary file
DW.exe |Creates a DW statement .ASM file from a binary file
HexToBin.exe | Creates a binary file from an Intel Hex .HEX file
JoinBin.exe | Creates one binary file from two binary files

The source code is also available under **/SEGA/GGUTILS** in the Barbie source code leak.

## /ZAXBIN - ZAX Z80 ICE Executables
Binary executables for communicating with the ZAX Z80 In-Circuit-Emulator (ICE), specifically the **ERX308 for Z80** Version 2.21 from February 19, 1993.

Name | Description
---|---
CVTZ80.exe | Converts Microtec ASMZ80 symbol/absolute file (.ABS) to the emulator standard symbol/absolute file.
ERXZ80.exe | ZAX ERX Symbolic Debug Package - Sends commands to the ZAX ICE - Copyright (c) Zax Corporation 1990 - 1993
HLLDZ80.CMD | High Level Language Debugger - useful for C programming, not likely used in much Game Gear Development

---
## /GG - Game Gear Character Editor
In order to help developers manage sprites and tiles for Game Gear games SEGA developed the **Game Gear Character Editor**, which is similar to tools available for Nintendo Game Boy development (CAD). The version leaked is 2.04	from October 30, 1991. Note that the Character Editor also contains the **Game Gear Animation Editor** useful for creating animating sprites in the .ANM format.

Name | Description
---|---
GG.EXE | The main program, you need to pass the parallel port number of the connected Game Gear as an argument.
GGO.EXE | Basically the same as GGO.EXE but seems to have been modified slightly not sure if this is an official change or not.
INSERT.CMD | CUSTOM command whose purpose is to EASE the process of downloading sprites overtop of the background.
Custom.inc | X86 Assembly file that can be assembled with MASM or TASM for communicating with GG.EXE in custom tools. - Copyright Sega Of America 1991

---
## /SEGA - Sega provided executables
Sega provided a few applications to make working with tiled graphics and other formats easier, they are in the table below:

Name | Description
---|---
Tile.exe | Background tiling utility version 1.1 (c) 1992 Sega of America
TilePic.exe |  Image cutting & tiling utility v1.3 (07APR93) - (c) 1993 Sega of America
Iff2Bin |  AIFF to raw binary converter IFF2BIN v1.2 (26MAR93) - (C) 1992 Sega of America, Inc

---
## File Formats

Name | Description
---|---
.CMD | Emulator Command file used with ERXZ80.exe
.MAC | Macro File used with ERXZ80.exe
.ABS | Object file (compile output of a source file)
.PAL | Palette files used for graphics
.GG | Game Gear file - saved and loaded by the GG.EXE Character Editor
.CFG | Binary file containing ?
.LBM | Deluxe Paint Bitmap
.ANM | Animated sprites
.SRC | Assembly source code

Key of interesting terms that you will find in the SDK (and barbie source code) is available in the table below:

Name | Description
---|---
MCH | Short for Matthew C. Harmon a developer at Tahoe Software Productions
Tahoe Software Productions | Development company working on Barbie for the Game Gear
Hi-Tech Expressions | Development company working on Barbie for the Game Gear
Bill Oliver | Developer at Tahoe Software Productions
Joe Moses | Programmer at Tahoe Software Productions
Joel Gressel | Developer at Tahoe Software Productions (Art?)
Paul Hutchinson | Sega of America, sound subroutines developer
Joergen Bech | Sega of America, sound subroutines developer
Rational Systems | Developed the DOS/16M Extender used in the DOS SDK executables (not related to Game Gear development)
erxz80 | A program that takes in erx files but not sure what it does
CTG | Possible someones name? Or a company Has written files for the GG Character Editor


---
# All Posts
<div>

{% include console.html %}
</div>
