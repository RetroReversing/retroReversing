---
permalink: /gamegear
redirect_from:
  - /gamegear/
layout: post
title: Sega Game Gear Reverse Engineering
recommendTitle: All GG Posts
editlink: ../categories/consoles/GameGear.md
category: gamegear
excerpt: Awesome list of Sega Game Gear Game Development and Reverse Engineering information
updatedAt: '2026-10-18'
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Sega Game Gear Reverse Engineering
    url: #
tags:
  - gamegear
  - sega
  - handhelds
recommend: 
  - gamegear
  - sega
  - handhelds
---

# Introduction
Sega released the Game Gear in 1990 with a colour, backlit screen.
This page brings together accounts of how developers made its games, the tools and hardware they used, and technical references for the console itself.
If you are examining a ROM, those sources can help connect the artwork and music created during development with the data and hardware writes left in the finished game.

---
# Game Development
Paul Hutchinson's [interview about his Sega work](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson) describes what sat on one Game Gear developer's desk: a PC and Amiga, home-written converters, an in-circuit emulator and a test cartridge. His setup is a useful production example, not a universal SDK [^2].

## How large were Game Gear development teams?
There was no fixed team size, but two projects give useful numbers. Matt Harmon recalls making the Game Gear version of *Barbie Super Model* with an artist: at least two direct contributors [^12]. The [*X-Men* Game Gear manual](https://www.gamesdatabase.org/Media/SYSTEM/Sega_Game_Gear//Manual/formated/X-men_-_Sega.pdf#page=22) names eight distinct people across production, programming, art, music and design. It credits one programmer, five people for art and four for design; several names appear in more than one role [^17].

Hutchinson was that *X-Men* programmer. As an independent contractor, he also worked on graphics and sound; Sega supplied artwork, sound and some early programming help. Across his Sega projects, he names three project managers based inside Sega of America [^11]. In [his longer account](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson), he describes working from a designer's initial plan and coordinating with artists and, on some projects, a musician [^2]. The *X-Men* manual lists testers, marketing and manual staff separately. Eight counts the named production roles, not everybody who helped ship the game.

---
## How long did a Game Gear game take to make?
Harmon says he made the PC and Game Gear versions of *Barbie Super Model* from scratch in one month each [^12]. That unusually specific recollection is useful alongside the [surviving Game Gear project files](https://www.smspower.org/Development/BarbieSuperModel-GG), which contain source revisions, graphics and supporting programs [^6]. It describes Harmon's work on one port, not a typical schedule for the platform.

---
## What computers were used to make Game Gear games?
Hutchinson recalls buying a 486 DX2-66 PC to connect to Sega's development kit. He later used an Amiga 2000HD for Deluxe Paint artwork and ProTracker music. The kit included a ZAX-ICE in-circuit emulator; Game Gear development used a dedicated board rather than a retail handheld. He built and tested cartridge images at home, then uploaded work to Sega of America's BBS [^2].

That account puts the PC tools, art machine and target hardware in one workflow. The [Game Gear development hardware guide](/sega-game-gear-devkit) covers the board and emulator in more detail.

{% include article-figure.html src="/public/images/gamegear/Sega Game Gear Development Board.jpg" alt="Sega Game Gear development board with exposed circuit boards and a connected controller" width="2048" height="1698" size="photo" title="A Game Gear on the development bench" caption="A surviving Sega development board photographed by [Andrew Earley](https://twitter.com/AndrewEarley7/status/1266102158614654976). It illustrates the kind of target hardware described here, though it is not identified as Hutchinson's own board." %}

---
## How were sound and music created for the Game Gear?
Hutchinson used ProTracker on an Amiga 2000HD to compose music for the Game Gear *X-Men* games. For *Chakan*, a composer supplied MIDI files and Hutchinson wrote a DOS converter to put them into the format expected by the game's sound routines. He initially recalled routing *X-Men* MOD files through MIDI too, but later found his tools and clarified that the final converter took ProTracker data directly to Game Gear format [^1].

The recovered *X-Men* MODs offer a rare chance to compare working music files with the released tunes. Hutchinson says the modules were adjusted for conversion, so they are not untouched originals; samples and pitch effects also changed or disappeared on the Game Gear [^1].

---
## What software was used to create Game Gear games?
Hutchinson describes the software he used on his Game Gear projects [^2]:
* **Avocet Z80 Assembler** - Z80 Assembly programming
* **Turbo C++** - writing utilities such as converters for file formats
* **Deluxe Paint** - Artwork
* **Pro-Tracker** - Sound & Music
* **TUME** (The Ultimate Map Editor) - Map creation, created by  Dan Chang

---
## What assemblers were used for Game Gear Z80 code?
We know of two confirmed assemblers that were used for Game Gear programming:
* **Avocet Z80 Assembler** - Used on games such as X-Men 1 & 2, Chakan and Spiderman vs the Kingpin
* **Microtech Research ASM80** - Used for the Barbie Game Gear game

---
## How was the final ROM built?
Normally it was up to the main programmer to put everything together, all the images, sounds, music and other assets into the final game ROM that would be sent to Sega. 

Hutchinson's example makes the handoffs concrete. Deluxe Paint artwork, TUME maps and music files began in their own formats. He wrote Turbo C++ utilities to turn asset data into assembler `db` and `dw` statements, then built the ROM with the Avocet Z80 assembler [^2]. The [*Barbie Super Model* development archive](https://www.smspower.org/Development/BarbieSuperModel-GG) preserves a different project directory with source, graphics, a Game Gear character editor and supporting tools [^6].

For his own games, Hutchinson programmed the ROM onto EPROMs with a Needham's Electronics programmer, placed them in a test cartridge and ran them on a retail system. He also uploaded code to Sega of America's Bulletin Board System (BBS) [^2].


---
# Hardware
The hardware notes here help separate cartridge code from writes to the video and sound chips.
The development-kit links document how programmers and artists tested those writes on real machines.

## What was beyond the Game Gear's screen borders?
The LCD shows a central 160 by 144 pixel window of the picture generated by the video display processor (VDP) [^13]. Sega's [VDP manual](https://www.smspower.org/Development/GGOfficialDocs) notes that a development board or TV adapter can reveal the surrounding area, with the backdrop colour filling the space outside the LCD window [^3].

{% include article-figure.html src="/public/images/gamegear/game-gear-lcd-vdp-area.svg" alt="Diagram of the 160 by 144 pixel LCD window centred in the 256 by 192 pixel VDP picture" width="800" height="620" size="document" title="The LCD shows only the centre" caption="Reconstructed from Sega's [Game Gear VDP manual](https://www.smspower.org/Development/GGOfficialDocs): the 20-by-18-cell LCD window sits inside a 32-by-24-cell picture. Select the diagram to enlarge." %}

Invisible does not mean inactive. The [SMS Power VDP guide](https://www.smspower.org/Development/GGVDP) explains that sprites outside the LCD window can still count toward the per-line sprite limit [^13]. When a sprite disappears in a ROM trace, check its position in the larger VDP picture before assuming the game stopped drawing it.

---
## Was the Game Gear backwards compatible with the Master System?
Yes, with a cartridge adaptor. The [Master Gear Converter](https://www.smspower.org/Hardware/MasterGearConverter) passes a [Master System](/mastersystem) cartridge through to the Game Gear slot and connects a pin that enables the handheld's built-in Master System mode [^14]. In that mode, the Game Gear's Start button serves as the Master System Pause button [^15].

{% include article-figure.html src="/public/images/gamegear/master-gear-converter-game-gear-de.jpg" alt="Black Master Gear Converter with a blue locking knob" width="700" height="529" size="photo" title="The cartridge adaptor" caption="The Master Gear Converter has a Master System cartridge slot above its Game Gear connector. Photograph from [Game-Gear.de's adaptor gallery](https://www.game-gear.de/gamegearmsadaptors.htm)." %}

This does not make every Master System accessory available. The converter guide lists card games, 3D glasses and the Light Phaser among the limitations [^14]. For a reverse engineer, the mode also matters when interpreting video behaviour: the [Game Gear VDP guide](https://www.smspower.org/Development/GGVDP) distinguishes Master System mode from the Game Gear mode that adds a 12-bit palette and crops the displayed area [^13].

---
## Reading the Cartridge
A Game Gear ROM file is more than a continuous run of Z80 instructions. The [Sega ROM header reference](https://www.smspower.org/Development/ROMHeader) describes a 16-byte header usually found at file offset `$7FF0`. It starts with `TMR SEGA` and records a product code, version, region and nominal ROM size. Those fields can contain mistakes, so the size nibble alone is not proof of how much data the cartridge holds [^7].

Bank switching matters once a game exceeds what the CPU can see at one time. The Z80 has a 64 KB address space, with 48 KB available to the cartridge. In the common Sega mapper, writes to CPU addresses `$FFFD`-`$FFFF` select ROM banks for three 16 KB slots; `$FFFC` controls cartridge RAM mapping [^8]. A routine reached at `$8000` can therefore belong to a different part of the ROM after a bank change. The [SMS Power mapper guide](https://www.smspower.org/Development/Mappers) also documents other cartridge schemes, so do not assume every game uses Sega's registers.

---
## Tracing Palette Writes
The [Sega Game Gear technical manuals](https://www.smspower.org/Development/GGOfficialDocs), transcribed by SMS Power, describe colour RAM as 32 entries of 12-bit colour.
A colour occupies two successive byte addresses: the even byte carries four red and four green bits; the odd byte carries four blue bits.
For bright red, the manual's example writes `$0F` followed by `$00` [^3].

The Z80 selects colour RAM through two writes to VDP control port `$BF`, then sends colour bytes to data port `$BE`.
The VDP advances its address after each data byte.
When tracing a palette loader, look for the `$C0` control byte and pairs of data writes, not a single 12-bit write.
The manual warns that changing colour RAM while the screen is scanned can produce flicker and recommends doing so during vertical blanking [^3].

The [SMS Power VRAM map](https://www.smspower.org/Development/VRAMMemoryMap) shows a common layout with tile patterns from `$0000`, a tilemap at `$3800` and a sprite attribute table at `$3F00` [^4].
Those addresses are video RAM, reached through the VDP ports, rather than CPU memory addresses to search for in a cartridge disassembly.
It is a common layout, so check the game's VDP register values before assigning a region a fixed purpose [^4].

---
## Tracing Stereo Sound
Sega's manual assigns I/O port `$06` to left and right routing for the three tone channels and noise channel [^3].
The [Game Gear stereo reference](https://www.smspower.org/Development/GameGearStereo) maps bits 0-3 to the right and bits 4-7 to the left.
For example, `$FF` enables all four channels on both sides, while `$F0` routes them to the left headphone channel [^5].

If a music routine writes to `$06`, annotate it as routing, not as a new note or volume value.
The routing affects the headphone output; the built-in speaker is unaffected, so muting both headphone sides is not equivalent to silencing the machine [^5].

---
## How did two Game Gears communicate?
The [Gear-to-Gear Cable](https://www.smspower.org/Hardware/GearToGearCable) connects two handhelds for multiplayer play; each machine needs its own copy of the game because the cable carries communication rather than the game itself [^16].

{% include article-figure.html src="/public/images/gamegear/gear-to-gear-cable-game-gear-de.jpg" alt="Gear-to-Gear Cable and its Sega Game Gear retail box" width="700" height="700" size="photo" title="Two handhelds, one cable" caption="The cable's two matching connectors and retail package. Photograph from [Game-Gear.de's cable gallery](https://www.game-gear.de/Game_Gear_to_Gear_Cable.htm)." %}

Sega's [communications documentation](https://www.smspower.org/Development/GGOfficialDocs) shows the crossed cable connections and describes both parallel I/O and serial transfers through the expansion connector. For serial communication, port `$03` holds outgoing data, `$04` receives data and `$05` controls the mode; the documented rates range from 300 to 4800 bits per second. Software can poll for data or request an interrupt when a byte arrives [^3]. Those port accesses are a useful clue when tracing a multiplayer routine.

---
## Official Development Hardware
We have a specific post all about the known Game Gear development hardware such as the development board and the ZAX-ICE **ERX308** that was used:

{% include_cached link-to-other-post.html post="/sega-game-gear-devkit" description="For information about SEGA's Game Gear development hardware check out this post." %}

### Sega Digitizer System
The Sega Digitizer System was a development kit specifically for creating sprites and background tiles officially inside SEGA. It is unclear if they ever sold the system to third party developers. 

{% include article-figure.html src="/public/images/gamegear/sega-digitizer-system-pitfall-ii.jpg" alt="Artist using a pen on the Sega Digitizer System, with Pitfall II on a nearby monitor" width="1013" height="777" size="photo" title="Drawing on the Sega Digitizer System" caption="An early Sega Digitizer System in use. Photograph preserved by [Video Games Densetsu](https://videogamesdensetsu.tumblr.com/post/149092824100/the-sega-digitizer-system-a-tool-used-by-graphic). Select the image to enlarge." %}

You can see Pitfall II from 1985 in the photo above. It had a rudimentary touch screen with a pen allowing artists to "draw" pixels directly on the screen.

This was not exclusive to Game Gear development, it was also used in early sega arcade games, system 1 and system 16 (1986) and all the way up to Mega Drive (it had 3 different versions).

You can find out more including lots of images on [Video Games Densetsu: The Sega Digitizer System, a tool used by graphic...](https://videogamesdensetsu.tumblr.com/post/149092824100/the-sega-digitizer-system-a-tool-used-by-graphic)

---
## Third Party Development Hardware
There is one known third party development kit called **Krisalis** which we have a separate post about:
{% include_cached link-to-other-post.html post="/krisalis-development-kit-(sega)" description="For information about the Krisalis 3rd party development hardware check out this post." %}

---
# Software Development Kit
The examples below show both Sega-supplied tools and utilities written by individual developers.
They document one working environment rather than a universal Game Gear SDK.

However thanks to the source code leak of the unreleased Game Gear game **Barbie Super Model** on both Romhacking.net: [Romhacking.net - Documents - Barbie Super Model Source Code](https://www.romhacking.net/documents/604/) and SMS Power: [Barbie Super Model - Development - SMS Power!](https://www.smspower.org/Development/BarbieSuperModel-GG). The surviving files include Sega tools that were supplied to Game Gear developers. It is not clear who leaked the source code for the game, potentially an old **Hi-Tech Expressions** employee.

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
PP.exe | PROPACK Copyright (c) 1991,92 **Rob Northen Computing** - used for file compression
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
## How were Game Gear sprites and tiles made?
Hutchinson used Deluxe Paint on his Amiga for artwork [^2]. Sega also supplied the **Game Gear Character Editor** to manage sprites and background tiles; the [*Barbie Super Model* archive](https://www.smspower.org/Development/BarbieSuperModel-GG) preserves a copy alongside the project's graphics and other tools [^6]. The version in the archive is 2.04 from October 30, 1991. It also contains the **Game Gear Animation Editor**, which handles animated sprites in the `.ANM` format.

The preserved editor directory includes these files:

Name | Description
---|---
GG.EXE | The main program, you need to pass the parallel port number of the connected Game Gear as an argument.
GGO.EXE | Similar to GG.EXE but seems to have been modified slightly not sure if this is an official change or not.
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
The table below lists the relevant entries.

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
# Reverse Engineering Game Gear Games
The hardware references become more useful when paired with a trace from a running game. [Gearsystem](https://github.com/drhelius/Gearsystem) supports Game Gear ROMs and includes a disassembler, CPU breakpoints, trace logger, I/O inspector and VRAM viewer [^9].

## Follow a Video Write
For a first exercise, pause at a Z80 `out` instruction that writes to VDP control port `$BF`, then follow the data writes to `$BE`. Sega's manual gives a concrete palette example: send `$04` and `$C0` to `$BF`, then `$0F` and `$00` to `$BE`. That writes bright red into one colour RAM entry [^3]. In the debugger, the trace shows which routine issued those writes and the palette viewer shows their result. This connects a port sequence to visible output without treating a VDP address as an offset in the cartridge file.

---
## A Game-Sized Disassembly
The [*Sonic the Hedgehog* Game Gear split disassembly](https://github.com/TheRavenfreak/Sonic-1-Game-Gear-Disassembly) shows what lies beyond a single trace. Its author has separated music, palettes, art, level layouts, block mappings and some object logic into named parts [^10]. It is a work in progress by the community, not Sega's original source, but it makes the relationship between ROM data and a game's visible and audible pieces much easier to inspect.

---
# All Posts
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="Game Gear" %}

---
# References
[^1]: [GST♥: Part 2: A Discovery with Paul Hutchinson](https://gstdaisuki.tumblr.com/post/746416756992688128/part-2-a-discovery-with-paul-hutchinson)
[^2]: [GST♥: Part 1: A Chat with Paul Hutchinson](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson#:~:text=cover%20was%20removed%20in%20order,and%20we%20would%20meet%20and)
[^3]: [Sega Game Gear technical manuals, transcribed by SMS Power](https://www.smspower.org/Development/GGOfficialDocs), VDP manual "Writing to the color RAM" and main manual "I/O port 06H".
[^4]: [SMS Power - VRAM Memory Map](https://www.smspower.org/Development/VRAMMemoryMap), common Master System and Game Gear layout.
[^5]: [SMS Power - Game Gear Stereo](https://www.smspower.org/Development/GameGearStereo), port `$06` bit assignments and speaker behaviour.
[^6]: [SMS Power - Barbie Super Model development archive](https://www.smspower.org/Development/BarbieSuperModel-GG), contents of the archived project directories.
[^7]: [SMS Power - ROM Header](https://www.smspower.org/Development/ROMHeader), header location, fields and known inconsistencies.
[^8]: [SMS Power - Mappers](https://www.smspower.org/Development/Mappers), cartridge address space and Sega mapper registers.
[^9]: [Gearsystem README](https://github.com/drhelius/Gearsystem), supported machines and debugger features.
[^10]: [Sonic 1 Game Gear Disassembly README](https://github.com/TheRavenfreak/Sonic-1-Game-Gear-Disassembly), project scope and split assets.
[^11]: [Game Developer Research Institute - interview with Paul Hutchinson](https://gdri.smspower.org/wiki/index.php/Interview:Paul_Hutchinson), work on Sega of America's Game Gear titles.
[^12]: [Sega-16 - interview with Matt Harmon](https://www.sega-16.com/2009/01/interview-matt-harmon/), *Barbie Super Model* team and development time.
[^13]: [SMS Power - Game Gear VDP](https://www.smspower.org/Development/GGVDP), display area, palette mode and off-screen sprite limit.
[^14]: [SMS Power - Master Gear Converter](https://www.smspower.org/Hardware/MasterGearConverter), compatibility pin and unsupported accessories.
[^15]: [SMS Power - Start Button](https://www.smspower.org/Development/StartButton), Pause behaviour in Master System mode.
[^16]: [SMS Power - Gear to Gear Cable](https://www.smspower.org/Hardware/GearToGearCable), multiplayer connection and separate game copies.
[^17]: [*X-Men* Game Gear instruction manual](https://www.gamesdatabase.org/Media/SYSTEM/Sega_Game_Gear//Manual/formated/X-men_-_Sega.pdf#page=22), p. 20, production credits.
