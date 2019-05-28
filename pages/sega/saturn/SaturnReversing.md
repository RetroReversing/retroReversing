---
layout: post
tags: 
- segasaturn
- saturn
- sega
- ss
- reversing
title: Reversing Sega Saturn Games
thumbnail: /public/consoles/Sega Saturn.png
permalink: /saturn-reversing
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /segasaturn
  - name: Reversing Sega Saturn Games
    url: #
references:
  - segaxtreme.net
recommend: segasaturn
editlink: /sega/saturn/SaturnReversing.md
---

# Disassembling the executable 
According to a post on segaxtreme.net the Sega Saturn executes the first file it find on the disc, most of the time its in the root directory in alphabetical order.

## Loading into IDA Pro

Use a save state: [cyberwarriorx/yssloader: An IDA Pro plugin for importing Yabause YSS savestates](https://github.com/cyberwarriorx/yssloader) 

### PSYQ IDA Pro
The standard SIG files won't find many functions if the game was compiled with PSYQ!

---

## Loading into Ghidra
[VGKintsugi/Ghidra-SegaSaturn-Processor: A Ghidra processor for the Sega Saturn (SuperH SH-2)](https://github.com/VGKintsugi/Ghidra-SegaSaturn-Processor) 

---
# Extracting & Rebuilding Saturn Game discs
[cyberwarriorx/vcdextract: A tool for extracting Sega Saturn discs for later rebuilding](https://github.com/cyberwarriorx/vcdextract)

## Extracting images
[doyousketch2/SatRGB: Extract RGB images from Sega Saturn files](https://github.com/doyousketch2/SatRGB)


---
# Games which find Symbols
These games use the standard .sig files provided and all find a reasonable amount of function names:
* Tomb Raider (Core Demo) (Eidos Interactive) (Nov 1996)
* Hardcore 4x4 (ASC Games) (Dec 1996)
* Athlete Kings (Flash v2)
* Loaded (Gremlin Demo)
* Steep Slope Sliders (Flash v6)

---
# Games that don't find any symbols
* Die Hard Arcade
* Daytona CCE
* Panzer Dragoon 2
* Baku Baku Demo (Flash Demo Disc)

# Table of Games and number of symbols found

Game | Library Functions Found |   Version Info
---|---|---
Tomb Raider (Core Demo) | Yes | 
Bug Too (Bootleg 2 demo) | 160 | `GFS_SBL 2.10`, `SYS 2.11`
Baku Baku Demo (Flash Demo Disc) | 0 | `GFS_SBL 2.10`, `SYS 2.11`

Strange thing is that Bug Too manages to find tons of library functions (160) but the Baku Baku Demo finds 0, but they both use exactly the same versions of the standard Sega Saturn libraries!

My guess is that its because it was compiled/assembled with a different toolchain, so Bug Too was presumably GNU compiled but Baku Baku could have been compiled with something else.

## Known Versions of Libraries

Library | Version
---|---
GFS_SBL | 2.10 1996-02-01
SYS | 2.11 1996-02-26

## Bios Date in Game Header
What is the Date at 0x06000C30 it could be a bios version as it seems to be 1994-08-01  even for games that link in libraries such as GFS_SBL from 1996-02-01.

Known values:
* 1995-09-05 (Keio FS2)
* 1994-08-01 (Bug Too)
* 1996-04-15 (Baku Baku)

---
# References
[^1]: https://segaxtreme.net/threads/starting-a-sega-saturn-translation-hack.6059/ 
