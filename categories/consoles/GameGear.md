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
Bin2Page.exe | BIN2PAGE: convert file into Intel Hex Pages
BinToHex.exe | Similar to Bin2Hex? 
DB.exe | Program to convert files from some format to another? (Define Byte?)
DW.exe | Program to convert files from some format to another? (Define Word?)
HexToBin.exe | opposite of the BinToHex program
JoinBin.exe | Join two binary files together
Lib80.exe | Copyright (c) 1985-1991 Microtec Research, Inc.
Lnk180.exe | Linker by Microtec for Zilog Z180 (Version 6.0 from 1994)
LnkZ80.exe | Linker by Microtec for standard Zilog Z80
MIDI2GG.exe | Convert MIDI Music files to Game Gear format
PP.exe | PROPACK Copyright (c) 1991,92 Rob Northen Computing - used for file compression
PPV.exe | Maybe ProPack Verify?

The assembler toolchain is made by **Microtech Research** from 1991 and supported the standard z80 and also the **Hitachi 64180** processor (which is a Zilog Z180 processor). The game gear used the standard Z80 so the Z180 functionality was unused.

Key of interesting terms that you will find in the SDK (and barbie source code) is available in the table below:

Name | Description
---|---
MCH | Short for Matthew C. Harmon a developer at Tahoe Software Productions
Tahoe Software Productions | Development company working on Barbie for the Game Gear
Hi-Tech Expressions | Development company working on Barbie for the Game Gear
Bill Oliver | Developer at Tahoe Software Productions
Rational Systems | Developed the DOS/16M Extender used in the DOS SDK executables (not related to Game Gear development)
erxz80 | A program that takes in erx files but not sure what it does


---
# All Posts
<div>

{% include console.html %}
</div>
