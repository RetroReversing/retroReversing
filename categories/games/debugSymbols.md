---
permalink: /games/symbols
layout: post
console: symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Games
    url: /games
redirect_from:
  - /debug
  - /symbols
  - /games/debugsymbols
  - /unstrippedbinaries
---
<h1>Introduction to Debug Symbols</h1>
Finding Debug Symbols when reverse engineering a game is the equivalent of buying a Strategy Guide, all the secrets are unlocked which is awesome but it also removes part of the fun of discovering what each part of the game does.

## Where do debug symbols come from?
Debug symbols are an atrifact of compiling a game from a higher level language (e.g C\C++) down to a lower level language such as Assembly code.

## What are debug symbols used for?
They are used by developers to allow them to attach a debugger to the game and debug the code line-by-line with all the function and variable names in tact.

## Why are debug symbols only in some games?
Developers *should* remove the debug symbols before the release of the game, a process called `stripping executables`, but due to the high pressures of development and last-minute bugs they can be left in.

## Which games are likely to contain debug symbols?
Since these are artifacts of compilation it is very unlikely for a game on a platform earlier than the Playstation 1 to contain debug symbols as they tended to be hand written in assembly code.

Also some platforms that used compiled code but were to be released on a small storage medium such as cartridge needed all the bytes they could get so it is very unlikely to get debug symbols on platforms such as Nintendo 64 or GameBoy Advance.

# Game by Platform with debug symbols 

Platform Name | List of games that still contain debug symbols
---|---
Sony Playstation 1 | [Playstation 1 Games with Debug Symbols](https://www.retroreversing.com/ps1-debug-symbols)
Sony Playstation 2 | [PS2 Demo Discs](https://www.retroreversing.com/ps2-demos/) && [PS2 Retail Games](https://www.retroreversing.com/ps2-unstripped/)
Sony Playstation Portable | [Playstation Portable Games with Debug Symbols](https://www.retroreversing.com/psp-debug-symbols)
Nintendo DS |
Nintendo 64 | None due to limitations of cart size. But we do have part of Turok source code: [Turok 64 Official Source Code Analysis](https://www.retroreversing.com/turok64sourcecode)
Nintendo GameCube | [Nintendo Gamecube Games with Debug Symbols](https://www.retroreversing.com/gamecube-debug-symbols)
Nintendo Wii | [Wii Games with Debug Symbols](https://www.retroreversing.com/wii-debug-symbols/) (*Incomplete*)
Nintendo Wii U | [WiiU Games with Debug Symbols](https://www.retroreversing.com/wii-u-unstripped/)
Nintendo Switch | N/A Not a retro console yet
Sega Saturn |
Sega Dreamcast | [Sega Dreamcast Games with Debug Symbols](https://www.retroreversing.com/sega-dreamcast-game-debug-symbols)
Microsoft XBox | [Original Xbox Games with Debug Symbols](https://www.retroreversing.com/xbox-game-debug-symbols)
Microsoft XBox 360 | N/A Not a retro console yet


There are also a few platforms that may have games with debug symbols but it is currently unknown:
* N-gauge
* Cybiko
* GP32/GP2X/Pandora
* Neo Geo X
* Sega CD/Sega 32X
* 3DO

---

<div>
{% include console.html %}
</div>
