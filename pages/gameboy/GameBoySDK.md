---
title: Game Boy Software Development Kits
layout: post
permalink: /official-gameboy-software-dev-kit/
tags:
- gameboy
- sdk
image: /public/images/GameBoy/Game Boy SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/GameBoy/Game Boy SDK.jpg
thumbnail: /public/NintendoGameBoyThumb.png
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Game Boy (DMG & CGB)
    url: /gameboy
  - name: Game Boy Software Development Kit
    url: #
recommend: 
- gameboy
- sdk
editlink: /gameboy/GameBoySDK.md
updatedAt: '2020-01-11'
---

# Official GameBoy Software Development Kit (by Intelligent Systems)
The official Game Boy development kit was developed by Intelligent systems and sold with their development kit hardware such as the `DMG-ICE`. It evolved over time and added support for the Gameboy Color, eventually becoming the SDK shipped with the `IS-CGB-EMULATOR` hardware.
{% include link-to-other-post.html post="/gameboy-development-kit-hardware/" description="For more information on the development hardware check out this post." %}

## Using the SDK
If you are interested in using the SDK to develop homebrew or to help reverse engineer a game that used the Official SDK then this section will guide you through some of the basics.

### Download the SDK
You can download the Japanese version of the Gameboy Color SDK from emuparadise here: 
[Gameboy Color SDK](https://www.emuparadise.me/sdk/)

---
## Documentation
The official manual for the Software Development Kit was uploaded to archive.org and is available here: 
[Gameboy Development Manual V1.1 : Nintendo : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/details/GameBoyProgManVer1.1)

---
## Tools included

### Intelligent Systems Assembler (ISAS)
To assemble your GameBoy source code into Z80 machine code you could use the official Nintendo (Intelligent Systems) assembler and linker, ISAS and ISLK respectively.
*Last Known Version*: ISAS 1.26 / ISLK 1.26 (1999/10/26)

### Intelligent Systems eXecutable - ISX and CVTISX 
ISX is the format that the Assembler (ISAS) compiles the programs into, it is a compressed version of the rom, to convert it into a standard gameboy rom you need to run it through CVTISX (ConvertISX).

### Intelligent Systems Character Designer (IS-CGB-CAD or DMG-CAD)
The archive only seems to contains the "IS-CGB-CAD" tool, which I presume is some sort of graphics/map editor. Graphics, Sprites and Tiles are known as "characters" for the GameBoy. 
Its known as a Character development system.
So I presume it stands for Intelligent Systems Character A??? Designer or Development

### Others
Just before the Intelligent Systems development FTP server was shut down, someone managed to backup the contents of the Gameboy color sdk and the files that were saved are as follows:
* IS-CGB-SDK.7z - Software development kit (libraries etc)
* IS-CGB-EMULATOR.7z - Color Gameboy Emulator   
* IS-CGB-DEBUGGER.7z - Gameboy debugger
* IS-CGB-CAD.7z - Character/Graphics development tool  
* IS-CGB-CHARACTER.7z - Character/Graphics development tool  
* IS-CGB-CHARACTER Documentation.7z - Documentation for the CAD graphics tool

---
# Third Party SDKs
Many third party game developers to create their own set of development libraries and even assemblers, emulators and debuggers to make Gameboy development easier.

## AZ40 Gameboy Assembler Kit (Gremlin)
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


### Unanswered questions

#### Who or what was R.H.C?
In the Gremlin SDK it mentions that a lot of tools were `by R.H.C`, but it is unclear who or what this is.
It could be the initials of an employee who wrote the software or it could be a company. They seem to have written both `ATG.EXE` and `CUTFILE.EXE`.

R.H.C was possibly Richard Hutchison as that was a college of Barry and worked on a few titles together, but this is unconfirmed? [^1].

---
# References
[^1]: [Barry Leitch - Video Game Music Preservation Foundation Wiki](http://www.vgmpf.com/Wiki/index.php/Barry%20Leitch#Game_Boy)
[^2]: [Romhacking.net - Utilities - AZ40 GameBoy Assembler Kit](https://www.romhacking.net/utilities/731/)

