---
layout: post
tags: 
- dos
- pc
- msdos
- sourcecode
- games
title: Planet X3 (2019 MS-DOS game)
thumbnail: /public/consoles/Computer Old Design.png
image: https://img.youtube.com/vi/szhv6fwx7GY/hqdefault.jpg
permalink: /planet-x3-dos
breadcrumbs:
  - name: Home
    url: /
  - name: Disc Operating System (DOS)
    url: /dos
  - name: Planet X3
    url: #
recommend: dos
editlink: /pc/PlanetX3.md
videocarousel:
  - title: Part 1
    image: https://img.youtube.com/vi/szhv6fwx7GY/maxresdefault.jpg
    youtube: 'szhv6fwx7GY'
  - title: Part 2
    image: https://img.youtube.com/vi/QUzVesdY6OU/maxresdefault.jpg
    youtube: 'QUzVesdY6OU'
  - title: Part 3
    image: https://img.youtube.com/vi/BdhvIfmRtvQ/maxresdefault.jpg
    youtube: 'BdhvIfmRtvQ'
  - title: Part 4
    image: https://img.youtube.com/vi/wCx32lrBSNQ/maxresdefault.jpg
    youtube: 'wCx32lrBSNQ'
updatedAt: '2019-06-26'
---

# Introduction
PlanetX3 is a brand new game developed by YouTube 8-bit guy for MS-DOS and released in early 2019.

The game was developed using crowd funding through Kickstarter [^1].

The Kickstarter for the project is available here: [Planet X3 for MS-DOS by David Murray — Kickstarter](https://www.kickstarter.com/projects/1973096722/planet-x3-for-ms-dos)

As it is a very late release MS-DOS game it is a great case study for MS-DOS programming and can be an excellent way to learn how DOS games were made in the past, which is knowledge that can be vital to anyone who wants to reverse engineer a DOS game.

# Target Hardware
As David mentions in Part 1 of the documentary, unlike the Commodore64, MS-Dos was not run on a set of "standard hardware". Users had the ability to upgrade, have different processors and even video modes.

He breaks it down into 3 categories based on the video and audio system used:
* CGA/EGA (1982-1986)
* VGA/Ad-Lib (1987-1992)
* S-VGA/Sound Blaster (1993-1997)

He also gives a list of the most common video modes throughout the DOS lifetime:
* CGA
* PCjr / Tandy
* Hercules
* EGA (Pain to program for, never used on laptops) 
* VGA
* SVGA

As he wanted the game to run on some of the earliest DOS machines he chose the Tandy 1000 EX/ HX as the minimum target machine.

The specifications of this system are as follows [^3]:
* CPU - 7.16 Mhz
* Memory - 256K
* Graphics - CGA & Tandy
* Hard Drive - None
* Floppy Drive - Single 360K/720K

# Video Modes
The video modes supported by Planet X3 are as follows [^3]:
* CGA 4-Color (320x200)
* CGA Composite 16-color (160x200)
* PCjr / Tandy 16-color (160x200)
* VGA 256-color (320x200)

Which should support at least 90% of the DOS systems still available today.

# Programming Language
The programming language chosen was 8086 Assembler, due to it being the industry standard in the 1980s and even early 90s for programming DOS games [^3].

He is not using an IDE, just using notepad to write the source code in.

The "compiler" (assembler) he is using is called the A86 compiler.

Testing is done using DOSBOX.

No version control software is used, just manual copying of the source to folders for backups [^5].

# Graphics
David created his own Tile Editor to give him some experience programming for the target platform. 
It was created to support all the different video modes with about 90% of the code being able to be reused across video modes.

This was a great choice to be able to create different tile sets for each video mode.

He also created a Map editor which utilises the tiles and also works across the different video modes.

# Map Implementation
The game engine uses a grid of 16x16 tiles to represent the map.
All tiles were initially treated the same in the game engine, so the render code could be nice and simple and just render each tile.

To allow units such as tanks to move across the map over grass tiles, the unit would just remember what tile it is on and then when it moves away from that tile it puts it back to the tile it was, for example grass.

However there were a few issues with this method when it came to projectiles, so the projectiles were handled separately and acted more like sprites in that they are rendered after the background tiles.

This is very well explained in Part 2 of the documentary.

# Pathfinding
In Part 3 of the documentary David briefly covers issues with pathfinding implementation. But the algorithm used for pathfinding is not mentioned unfortunately [^5].

# Source Code Availability
In part 4 of the youtube documentary David alludes to the potential of releasing the source code under an open source license for the community to contribute to and learn from [^2]. 

We hope that this becomes the case in the near future!




# References
[^1]: [Planet X3 for MS-DOS by David Murray — Kickstarter](https://www.kickstarter.com/projects/1973096722/planet-x3-for-ms-dos)
[^2]: [Planet X3 -The Making of, Part 4 - YouTube](https://www.youtube.com/watch?v=wCx32lrBSNQ)
[^3]: [Planet X3 for MS-DOS Development - Part 1 - YouTube](https://www.youtube.com/watch?v=szhv6fwx7GY)
[^4]: [Planet X3 for MS-DOS Update & KIckstarter - YouTube](https://www.youtube.com/watch?v=QUzVesdY6OU)
[^5]: [Planet X3 Status Update - Part 3 - YouTube](https://www.youtube.com/watch?v=BdhvIfmRtvQ)
