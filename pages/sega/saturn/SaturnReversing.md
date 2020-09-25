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
image: /public/images/saturn/Sega Saturn Reversing Games.jpg
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

Use a save state: [cyberwarriorx/yssloader: An IDA Pro plugin for importing Yabause YSS save states](https://github.com/cyberwarriorx/yssloader)

### PSYQ IDA Pro
The standard SIG files won't find many functions if the game was compiled with PSYQ!

---

## Loading into Ghidra
[VGKintsugi/Ghidra-SegaSaturn-Loader: Supports loading ISOs as well as Mednafen and Yabause emulator save states](https://github.com/VGKintsugi/Ghidra-SegaSaturn-Loader)

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
You can find the version of libraries that each games uses by searching the executables/save states for the string "Version".

Game | Library Functions Found |   Version Info
---|---|---
Tomb Raider (Core Demo) | 302 | `CPK 1.20` `GFS_SGL 2.11` `STM_SGL 2.11`
Bug Too (Bootleg 2 demo) | 160 | `GFS_SBL 2.10`, `SYS 2.11`
Baku Baku Demo (Flash Demo Disc) | 0 | `GFS_SBL 2.10`, `SYS 2.11`
Sonic Xtreme proto | 101 | `GFS_SGL 2.11`
Steep Slope Sliders Demo (Flash v6) | 75 | `SYS 2.50` `GFS_SGL 2.12` `STM_SGL 2.11` `SYS 2.11` `CPK 1.20`
Daytona CCE (Bootleg 2 demo) | 0 | `SYS 2.20`, `GFS_SBL 2.10`
Three Dirty Dwarfs (Bootleg 2 demo) | 185 | `FLD 1.21` `GFS_SGL 2.11` `GFS_SBL 2.10` `SYS 2.11`
Blam! Machinehead (Core Demo) | 246 | `GFS_SGL 2.11` `STM_SGL 2.11` `CPK 1.20` `SYS 2.11`

Strange thing is that Bug Too manages to find tons of library functions (160) but the Baku Baku Demo finds 0, but they both use exactly the same versions of the standard Sega Saturn libraries!

My guess is that its because it was compiled/assembled with a different toolchain, so Bug Too was presumably GNU compiled but Baku Baku could have been compiled with something else.

## Known Versions of Libraries

Library | Version
---|---
BUP | 1.20 1996-06-19
BUP | 1.21 1996-08-06
BUP | 1.24 1997-03-12
BUP | 1.25 1997-06-20
CDC | 1.22 1997-02-27
CPK | 1.10 1995-03-31
CPK | 1.20 1995-10-05
CPK | 1.22 1996-03-14
CPK | 1.23 1996-04-09
CPK | 1.24 1996-06-14
CPK | 1.25 1997-06-11
FLD | 1.20 1996-01-31
FLD | 1.21 1996-02-28
FLD | 3.00 1997-05-06
GFS_SBL | 2.10 1996-02-01
GFS_SBL | 2.11 1996-02-18
GFS_SBL | 2.12 1996-12-04
GFS_SBL | 2.14 1997-04-11
GFS_SBL | 2.15 1997-07-01
GFS_SBL | 2.16 1998-01-16
GFS_SGL | 2.10 1996-02-01
GFS_SGL | 2.11 1996-03-21
GFS_SGL | 2.12 1996-12-04
GFS_SGL | 2.14 1997-04-11
PCM | 1.15 1995-02-21
PCM | 1.16 1995-03-31
PCM | 1.20 1996-08-01
PCM | 1.21 1996-10-14
PCM | 1.22 1997-03-10
PCM | 1.23 1997-06-10",
PCM | 1.24 1997-06-23
PCM | 1.26 1997-08-26
PCM | 1.27 1997-10-18
PCM | 1.28 1997-11-21
STM_SBL | 2.10 1996-02-01
STM_SBL | 2.11 1996-03-21
STM_SBL | 2.12 1997-02-27
STM_SBL | 2.12 1997-02-27
STM_SGL | 2.10 1996-02-01
STM_SGL | 2.11 1996-03-21
STM_SGL | 2.12 1997-02-27
SYS | 2.10 1996-01-31
SYS | 2.11 1996-02-26
SYS | 2.20 1996-08-06
SYS | 2.21 1996-10-01
SYS | 2.50 1997-06-10
SYS | 2.52 1997-09-24
SYS | 2.53 1997-12-15


## Bios Date in Game Header
What is the Date at 0x06000C30 it could be a bios version as it seems to be 1994-08-01  even for games that link in libraries such as GFS_SBL from 1996-02-01.

Known values:
* 1995-09-05 (Keio FS2)
* 1994-08-01 (Bug Too)
* 1996-04-15 (Baku Baku)
* 1996-10-15 (Hardcore 4x4)
* 1997-04-14 (Tomb Raider)
* 1997-10-28 (Steep Slope Sliders)

## Finding Libraries Manually
Some games don't work with the standard generated signature files, in these cases we need to manually find the library functions.

Many Games have strings such as `GFS_SBL 2.10 1996-02-01` in them, these denote the start of a library inside the executable.

Although not all games have these references such as Bubble Bobble but it is known that it was compiled with PSYQ so that could be the culprit.

---
# References
[^1]: https://segaxtreme.net/threads/starting-a-sega-saturn-translation-hack.6059/
