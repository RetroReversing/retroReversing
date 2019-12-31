---
title: Nintendo Gameboy Software Development Kit (SDK)
layout: post
permalink: /gameboy-software-development-kit-sdk/
tags:
- gameboy
- sdk
thumbnail: /public/NintendoGameBoyThumb.png
editlink: /gameboy/GameboySoftwareDevelopmentKit.md
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gameboy
    url: /gameboy
  - name: Nintendo Gameboy Software Development Kit (SDK)
    url: #
recommend: 
- gameboy
- sdk
---

# Introduction
As with the Nintendo Entertainment system (NES), Nintendo didn't release an official Software Development Kit for the Gameboy, they expected developers to be able to get u to speed with the Z80 processor and they gave some limited documentation on the memory layout and hardware registers of the gameboy.

This caused many third party game developers to create their own set of development libraries and even assemblers, emulators and debuggers to make Gameboy development easier.

# AZ40 Gameboy Assembler Kit (Gremlin)
This is a very old Gameboy assembler kit created around 1991 by Gremlin Graphics Software. Included in the kit the assembler, macros, debugger and Amiga to Gameboy sample converter, Gameboy file clipper, set memory application and a restart application [^2].

The SDK can be downloaded from [Romhacking.net - Utilities - AZ40 GameBoy Assembler Kit](https://www.romhacking.net/utilities/731/).

## Executables included
There are a few executables that can be used in DOS for assembling, debugging and a few sound tools.

Name | Description
---|---
ATG.EXE | "AMIGA TO GAMEBOY SAMPLE CONVERTER (by R.H.C.)"
AZ40.EXE | Gameboy Assembler (Gameboy Esprit Turbo Assembler)
DZ40.EXE | Gameboy Debugger (Copyright 1991 Gremlin Graphics Software Ltd.)
CUTFILE.EXE | GAMEBOY FILE CLIPPER (by R.H.C.)
RESTART.EXE | Seems to connect to a gameboy (to restart it?)

Along with the release on Romhacking.net there was another release of Gameboy source code that included it in a zip file called `BarryLeitch.zip`. It seems to have the source code for the music for the amiga game called "The Humans" along with gameboy specific source code and the SDK.


## Unanswered questions

## Who or what was R.H.C?
It could be the initials of an employee who wrote the software or it could be a company. They seem to have written both `ATG.EXE` and `CUTFILE.EXE`.

R.H.C was possibly Richard Hutchison as that was a college of Barry and worked on a few titles together, but this is unconfirmed? [^1].

---
# References
[^1]: [Barry Leitch - Video Game Music Preservation Foundation Wiki](http://www.vgmpf.com/Wiki/index.php/Barry%20Leitch#Game_Boy)
[^2]: [Romhacking.net - Utilities - AZ40 GameBoy Assembler Kit](https://www.romhacking.net/utilities/731/)
