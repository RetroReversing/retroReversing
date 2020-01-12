---
layout: post
tags: 
- ps2
- symbols
- games
title: PS2 Demos with Debug Symbols
thumbnail: /public/consoles/Sony PlayStation 2.png
image: https://www.retroreversing.com/public/images/ps2/PS2 Demos with Debug Symbols.jpg
twitterimage: https://www.retroreversing.com/public/images/ps2/PS2 Demos with Debug Symbols.jpg
permalink: /ps2-demos/
breadcrumbs:
  - name: Home
    url: /
  - name: Ps2
    url: /ps2
  - name: PS2 Demo Disks with Debug Symbols
    url: #
recommend: symbols
editlink: /ps2/PS2DemoDisks.md
---
This page is dedicated to listing PS2 Demo Discs that contain developer debug symbols, either embedded inside the executable or as seperate .map or .sym files.

It was much more common for PS2 debug symbols to be leaked on Demo Discs than their retail counterparts during the early days of the PS2 lifespan, later in the lifespan Demos with Debug symbols became rarer and rarer.

# PS2 Demo Discs from Official Playstation 2 Magazine UK
The Official Playstation 2 Magazine in the UK often had a playable PS2 demo free with every magazine, this was a great way for games to 'try before you buy'.

You can find out more about these Demo Discs over at crimson-ceremony.net: [demo pals - OPS2M Demo UK](https://crimson-ceremony.net/demopals/ops2muk/index.php?img=uk005#SCED-50140).

## Searching Demo Progress
We have only managed to search Demo Disc 10->31 for debug symbols, if you have unsearched demos please help by contributing to this list!

Also n ote the following disks have no debug information (as far as we know):
* 58

## List of games available with debug symbols

Demo Disc | Game | Ps2 SDK | Debug Info?
--- | --- | --- | ---
10 - August 2001, SCED_50145) | Le Mans 24 Hours | 2.1.4 | Full Debug Symbols! Plus a zip file that is multiple zips concated together
10 - August 2001, SCED_50145) | Gauntlet Dark Legacy | 2.1.0 | Full Debug Symbols! 
10 - August 2001, SCED_50145) | Star Wars Super Bomad Racing | 1.6.0 | None
10 - August 2001, SCED_50145) | GT3 Quiz | 2.2.4 | Full Debug Symbols!
11 - September 2001 SCED_50146 | Lotus Challenge | 2.1.4 | **2,837** Debug Symbols
12 - October 2001 SCED_50147 | MX Rider | 2.1.0 | **10,586** Debug Symbols
12 - October 2001 SCED_50147 | Portal Runner | 2.1.4 | **5,101** Debug Symbols
12 - October 2001 SCED_50147 | Spy Hunter | 2.1.0 | **11,268** Debug Symbols
12 - October 2001 SCED_50147 | Soul Reaver 2 | 2.1.4 | **4,376** Debug Symbols
13 - November 2001 SCED_50148 | NBA Street | 2.1.0 | **9,125** Debug Symbols, also contains C++ header .h for animation files
13 - November 2001 SCED_50148 | Driven | 2.2.4 | **7,752** Debug Symbols
13 - November 2001 SCED_50148 | Mx 2002 | 2.1.4 | **4,892** Debug Symbols
13 - November 2001 SCED_50148 | SplashDown MPEG Player | 2.3.0 | **947** Debug Symbols
14 - December 2001 SCED_50149 | AirBlade | 2.3.2 | **3,962** Debug Symbols
14 - December 2001 SCED_50149 | Dark Cloud | 2.1.1 | **3,952** Debug Symbols
14 - December 2001 SCED_50149 | Tarzan Freeride | 2.2.4 | **10,588** Debug Symbols
15 - Christmas 2001 SCED_50150J | GTC: Africa | 2.2.4 | Full Debug Symbols (2.5mb elf)
15 - Christmas 2001 SCED_50150J | Lotus Challenge | 2.1.4 | Full Debug Symbols (1.8mb elf)
15 - Christmas 2001 SCED_50150J | Jak and Daxter | 2.2.1 | **880** Debug Symbols (incomplete) (532kb elf)
15 - Christmas 2001 SCED_50150J | Extreme-G 3 | 2.1.4 | **2,874** Debug Symbols (7.4mb elf)
16 - January 2002 SCED_50151 | Shaun Palmer's Pro Snowboarding | 2.3.4 | Full Debug Symbols
16 - January 2002 SCED_50151 | Ecco the Dolphin: Defender of the Future | 2.2.0 | Full Debug Symbols (33mb elf)
16 - January 2002 SCED_50151 | FIFA Football 2002 | 2.2.0 | Full Debug Symbols (7.6mb elf)
16 - January 2002 SCED_50151 | Twisted Metal: Black | 2.1.3 | Full Debug Symbols (5.6mb elf) `LGDEV.IRX`
17 - February 2002 SCED_50152 | Crash Bandicoot: The Wrath of Cortex | 2.4.0 | Full Debug Symbols
17 - February 2002 SCED_50152 | Parappa the Rapper 2 | 2.4.1 | Full Debug Symbols
17 - February 2002 SCED_50152 | Robot Wars| 2.1.1 | Full Debug Symbols
18 - March 2002 SCED_50153 | Drakan The Ancients Gates | 2.3.2 | No symbols but has a txt file mentioning `Riot Engine` and a DEBUG folder and uses `SNPROFIL.IRX`
18 - March 2002 SCED_50153 | GODAI Elemental Force | 2.1.4 | Full Debug Symbols! (6.4mb elf) plus SCRIPTS folder
18 - March 2002 SCED_50153 | Herdy Gerdy | 2.4.2 | No symbols but does have lots of printf debugging with filenames, plus `HGSOUND.TRX` Herdy Gerdy Sound IOP module
18 - March 2002 SCED_50153 | Maximo | 2.2.0 | Full Debug Symbols (5.9MB) `MJOLNIR.IRX`
18 - March 2002 SCED_50153 | Stuntman Xav Stream Video | ? | Full Debug Symbols (1mb) plus IOP Module for playing XAV files `XAVSTRM.IRX` (not a game)
19 - April 2002 SCED_50154 | Mike Tyson Heavyweight Boxing | 2.3.4 | Full Debug Symbols
19 - April 2002 SCED_50154 | Vampire Night | 2.3.0 | Full Debug Symbols
20 - May 2002 SCED_50743 | Rally Championship | 2.2.4 | **3,019** Debug Symbols
20 - May 2002 SCED_50743 | Taz Wanted | 2.4.3 | **4,927** Debug symbols
21 - June 2002 SCED_50742 | Medal of Honour Frontline | 2.4.2 | **6,199** Debug Symbols, also contains .MAP file
21 - June 2002 SCED_50742 | Frequency | 2.3.2 | **13,890** Debug Symbols, uses python, uses EZMidi
21 - June 2002 SCED_50742 | Peter Pan: Return to Never Land | 2.3.0 | **4,382** Debug Symbols
21 - June 2002 SCED_50742 | Super Trucks | 2.4.3 | **2,990** Debug Symbols

## Demo Disc 22 - July 2002 SCED_50744

Game | Ps2 SDK | Debug Info?
--- | --- | ---
F1 2002 | 2.4.0 | Debug Symbols in the .MAP file
2002 FIFA World Cup | 2.3.4 | **9,823** Debug Symbols
MTV Music Generator | 2.1.0 | **2,098** Debug Symbols


## Demo Disc 23 - August 2002 SCED_50745
This demo came in a proper PS2 box rather than the standard DVD box used by the previous demo.

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Men in Black 2 Alien Escape | 2.4.3 | **20,542** Debug Symbols, References to `Metrowerks SDK`
Project Zero | 2.2.4 | **4,328** Debug Symbols


## Demo Disc 24 - September 2002 SCED_50746

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Need for Speed Hot Pursuit 2 | 2.4.3 | **8,341** Debug Symbols,  Plus .MAP file that contains filenames and library names, odd fact is that it contains 2 elfs, one with debug symbols and one without, why include the debug symbols version, was it a mistake?
Jak and Daxter: The Precursor Legacy | 2.2.1 | **880** debug symbols plus interesting looking .CGO and .DGO files... 

## Demo Disc 25 - October 2002 SCED_50747

Game | Ps2 SDK | Debug Info?
--- | --- | ---
X-Men Next Dimension | 2.4.3 | **3,418** Debug Symbols


## Demo Disc 26 - November 2002 SCED_50748

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Crash Bandicoot: The Wrath of Cortex | 2.4.0 | **3,817** Debug Symbols
Summoner 2 | 2.4.0 | **5,647** Debug Symbols


## Demo Disc 27 - December 2002 SCED_50749

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Colin Mcrae Rally 3 | 2.5.2 | **4,969** Debug Symbols
Haven: Call of the King | 2.5.0 | Contains a RUNABOUT.EXE with debug symbols but it unpacks the actual elf from some data file
Alpine Racer 3 | 2.4.2 | **3,916** Debug Symbols


## Demo Disc 28 - Christmas 2002 SCED_50750

Game | Ps2 SDK | Debug Info?
--- | --- | ---
VRally 3 | 2.5.2 | **6,603** Debug Symbols
MX Superfly | 2.5.0 | **6,115** Debug Symbols
Treasure Planet | 2.5.0 | **4,519** Debug Symbols

## Demo Disc 29 - January 2003 SCED_51384

Game | Ps2 SDK | Debug Info?
--- | --- | ---
FIFA 2003 | 2.3.4 | **12,074** Debug Symbols


## Demo Disc 30 - February 2003 SCED_51457

Game | Ps2 SDK | Debug Info?
--- | --- | ---
NBA Live 2003 | 2.4.3 | **15,756** Debug Symbols
Space Channel 5 V2 | 2.3.0 | **10,212** Debug Symbols
Tom Clancy's Ghost Recon | 2.4.2 | **19,496** Debug Symbols


## Demo Disc 31 - March 2003 SCED_51529

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Grand Prix Challenge | 2.5.4 | **14,342** Debug Symbols
The Mark of Kri | 2.5.4 | **7,387** Debug Symbols plus .MAP file!
Wakeboarding Unleashed | 2.4.3 | Debug Symbols split over 3 elfs

---

## Demo Disc 53 - January 2005 SCED_52168
Game | Ps2 SDK | Debug Info?
Driver 3 | PS2SDK 2.7.0 | Contains animation Data in DRIVER3.IMG
Sega Superstars | PS2SDK 3.0.0 | Uses boost libraries

## Demo Disc 54 - January 2005 SCED_52169
Game | Ps2 SDK | Debug Info?
EyeToy: Play 2 | 3.0.0 | Has .lua script files but no symbols in main elf 

<iframe src="https://archive.org/embed/PlayStation_2_Demo_Disc_SCED-52169_PAL" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

## Demo Disc 55 - January 2005 SCED_52170
Game | Ps2 SDK | Debug Info?
--- | --- | ---
Mashed | PS2SDK 3.0.1 | **No symbols**, but contains some strings related to c source file location (Physics/Rwp37Active/src/core/context/src/RwpObj.c)
Mercenaries | PS2SDK 2.7.1 | **No Symbols**, Mentions Indiana Jones as unlockable character in config
PES4 | PS2SDK 3.0.1 | **No Symbols**, mentions `ADXT`
Rumble Roses | PS2SDK 3.0.1 | Contains Map file
Splinter Cell Pandora Tommorrow | PS2 SDK 3.0.0 | **No Symbols**, but contains a few symbol-like strings


## Demo Disc 56 - February 2005 SCED_53122

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Athens 2004 | PS2SDK 3.0.0 | Contains .MAP file
Timesplitters Future Perfect | PS2SDK 3.0.2 | Contains some symbols as segment names and a few references to source files


## Demo Disc 57 - March 2005 SCED_53160

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Full Spectrum Warrior | PS2SDK 3.0.0 | Contains **19,690** symbols in .sndata segment

## Demo Disc 58 - April 2005 SCED_53161
I can't find any debug information on this Disc.


## Demo Disc 59 - May 2005 SCED_53162

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Enthusia | 3.0.0 | Symbols in segment names


## Demo Disc 65 - November 2005 SCED_53186

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Need for Speed Most Wanted | 2.8.0 | Some function and class names in uncommon format
NHL 06 | 2.8.0 | `FontFusion 2.4.1-nhl` `APT 0.18.06-nhl` `RealCore 6.25.00-nhl` `RealGraph 6.11.01-nhl` `Reveal 1.4.0` `Mudlark 1.1.6`
Wallace & Gromit: The Curse of the Were-Rabbit | ? | Uses same engine as Project Zoo `fgdk3` (Frontier Game Development Kit 3?)


## Demo Disc 72 - May 2006 SCED_54044

Game | Ps2 SDK | Debug Info?
--- | --- | ---
Driver 4 | 3.0.0 | Contains .MAP files in DRIVER4.IMG [^1]
TOCA Race Driver 3 | 3.0.2 | Not much a few references to cpp files and a small .sndata section


---

# References
[^1]: Driver Parallel lines with MAP files in it - https://assemblergames.com/threads/ops2m-demo-disc-72-driver-parallel-lines-late-05-beta-demo-download.66661/
