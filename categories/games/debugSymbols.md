---
permalink: /symbols
layout: post
console: symbols
title: Debug Symbols in Retail Games (Console & PC)
breadcrumbs:
  - name: Home
    url: /
  - name: Debug Symbols in Retail Games (Console & PC)
    url: /#
redirect_from:
  - /debug
  - /games/symbols
  - /debugsymbols
  - /unstrippedbinaries
editlink: ../categories/games/debugSymbols.md
tags:
  - symbols
  - debug
  - games
recommend:
  - symbols
  - debug
  - games
  - sdk
---

# Introduction to Debug Symbols
Finding Debug Symbols when reverse engineering a game is the equivalent of buying a Strategy Guide, all the secrets are unlocked which is awesome but it also removes part of the fun of discovering what each part of the game does.

## Where do debug symbols come from?
Debug symbols are an **artifact of compiling** a game from a higher level language (e.g. C/C++) down to a lower level language such as Assembly code. 
They are similar to source maps in modern web development when using a langiage like typescript that compiles down to javascript, but instead of typescript think C or C++ and instead of javascript think raw machine code or assembly.

## What are debug symbols used for?
They are used by developers to allow them to attach a debugger to the game and debug the code line-by-line with all the function and variable names intact. So you can think of debug symbols as meta data that maps the high level language to each assembly instruction so that developers can add breakpoints in their high level language and the system will know what to do. 

They are also incredibly valuable in diagnosing a crash as the **stack** trace would simply be a list of meaningless memory offsets without the debug symbols explaining what functions were called on the way to the crash site.

## Why are debug symbols only in some games?
Developers *should* remove the debug symbols before the release of the game, a process called `stripping executables`, but due to the high pressures of development and last-minute bugs they can be left in.

## Which games are likely to contain debug symbols?
Since these are artifacts of compilation it is very unlikely for a game on a platform earlier than the Playstation 1 to contain debug symbols as they tended to be hand written in assembly code.

Also some platforms that used compiled code but were to be released on a small storage medium such as cartridge needed all the bytes they could get so it is very unlikely to get debug symbols on platforms such as Nintendo 64 or Game Boy Advance.

---
# Game by Platform with debug symbols 

## Sony Consoles
Sony consoles have the higest likelyhood of shipping with debug symbols, specifically due to the rather relaxed checking of Playstation 2 binaries based on version 2 of the official SDK, but there are also games for PS1 and PSP that have been released with debug symbols in tact.

### Sony Playstation 1 
We have a post specifically listing all the debug symbols for the PS1 here:
[Playstation 1 Games with Debug Symbols](https://www.retroreversing.com/ps1-debug-symbols)

### Sony Playstation 2
We have a post specifically listing all the debug symbols for the PS2 Demos here:
[PS2 Demo Discs](https://www.retroreversing.com/ps2-demos/) 

Plenty of retail games also has their debug symbols:
[PS2 Retail Games](https://www.retroreversing.com/ps2-unstripped/)

### Sony Playstation Portable
[Playstation Portable Games with Debug Symbols](https://www.retroreversing.com/psp-debug-symbols)

---
## Nintendo consoles
Finding debug symbols on Nintendo consoles was like finding a needle in a haystack, one that did not even have a needle, ocassionaly you would find some of the developers memory left over in a SNES game, but that all changes with the Gamecube and its large storage space on the disc. Now it became common for developers to loose a tiny few MB file on a large 1GB disc, this trend continued into both the Wii and Wii U era too, with debug symbols even being found in modern switch games!

### Nintendo 64
You will not find any debug symbols left in retail Nintendo 64 games due to limitations of cart size, developers has to squeeze out every last byte to avoid the more expensive cartridges so debug symbols were the first to go. 

But we do have part of the Turok source code which contains them: [Turok 64 Official Source Code Analysis](https://www.retroreversing.com/turok64sourcecode)

There has also been a number of Nintendo leaks, leaking the full source code for multiple Nintendo 64 games. Not to forget the excellent work the community is doing on reversing N64 games even without any symbols present!

### Nintendo GameCube 
[Nintendo Gamecube Games with Debug Symbols](https://www.retroreversing.com/gamecube-debug-symbols)

### Nintendo Wii 
[Wii Games with Debug Symbols](https://www.retroreversing.com/wii-debug-symbols/)

### Nintendo Wii U
[Wii U Games with Debug Symbols](https://www.retroreversing.com/wii-u-unstripped/)


---
## SEGA consoles

We have never been able to find any Sega Saturn games that actually have debug symbols left on the disc! Sega must have been a little more strict on game developers before the dreamcast, so if you do find any games with debug symbols then please let us know.

### Sega Dreamcast
[Sega Dreamcast Games with Debug Symbols](https://www.retroreversing.com/sega-dreamcast-game-debug-symbols)

---
## Debug symbols on Microsoft consoles

### Microsoft Xbox 
[Original Xbox Games with Debug Symbols](https://www.retroreversing.com/xbox-game-debug-symbols)


There are also a few platforms that may have games with debug symbols but it is currently unknown:
* 3DO
* Cybiko
* GP32/GP2X/Pandora
* N-Gage
* Neo Geo X
* Sega CD/Sega 32X


---

<div>
{% include console.html %}
</div>
