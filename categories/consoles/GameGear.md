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
Up until recently it was not known if SEGA ever released a software development kit for the Game Gear, as previous consoles such as the SEGA Master System only had a documentation of the hardware but no actual official SDK. So it was up to developers to "roll their own" software development kits for the Game Gear.

However thanks to the source code leak of the unreleased Game Gear game **Barbie Super Model** on both Romhacking.net: [Romhacking.net - Documents - Barbie Super Model Source Code](https://www.romhacking.net/documents/604/) and SMS Power: [Barbie Super Model - Development - SMS Power!](https://www.smspower.org/Development/BarbieSuperModel-GG). We now have at least some of the files that were sent out to Game Gear developers as an official SDK from SEGA. It is not clear who leaked the source code for the game, potentially an old **Hi-Tech Expressions** employee.

The files included in the leak which are believed to be part of the official SEGA Game Gear SDK are in the table below:

Name | Description
---|---
ASM80 | Assembler by for DOS/16M Copyright (C) 1987-1990 by Rational Systems, Inc
Bin2Hex | BIN2HEX Rev 1.00, copyright (c) 1989 by Lex Computer Services
Bin2Page | BIN2PAGE: convert file into Intel Hex Pages
BinToHex | Similar to Bin2Hex? 
DB | Program to convert files from some format to another? (Define Byte?)
DW | Program to convert files from some format to another? (Define Word?)

Key of terms:

Name | Description
---|---
MCH | Short for Matthew C. Harmon a developer at Tahoe Software Productions
Tahoe Software Productions | Development company working on Barbie for the Game Gear
Hi-Tech Expressions | Development company working on Barbie for the Game Gear
Bill Oliver | Developer at Tahoe Software Productions


---
# All Posts
<div>

{% include console.html %}
</div>
