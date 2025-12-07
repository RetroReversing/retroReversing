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
editlink: /consoles/gameboy/GameBoySDK.md
updatedAt: '2020-01-11'
---

# Official GameBoy Software Development Kit (by Intelligent Systems)
The official Game Boy development kit was developed by Intelligent systems and sold with their development kit hardware such as the `DMG-ICE`. It evolved over time and added support for the Gameboy Color, eventually becoming the SDK shipped with the `IS-CGB-EMULATOR` hardware.
{% include link-to-other-post.html post="/gameboy-development-kit-hardware/" description="For more information on the development hardware check out this post." %}

## Using the SDK
If you are interested in using the SDK to develop homebrew or to help reverse engineer a game that used the Official SDK then this section will guide you through some of the basics.

### Download the Official Game Boy Color SDK
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
The archive only seems to contains the **IS-CGB-CAD** tool, which I presume is some sort of graphics/map editor. Graphics, Sprites and Tiles are known as "characters" for the GameBoy. 
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
## Original Game Boy DMG SDK (Contained in Gigaleak archive called Other.7z)
In the first Nintendo **Gigaleak** the source code for the original Zelda Links Awakening for the DMG Game Boy was included which contained what is believed to be the full Software Development Kit used both in-house at Nintendo and a few partners such as **Systems Research and Development** (SRD).

The files included in the Original DMG SDK are described in the table below:

File Name | Extension | Description
---|---|---
A | .EXE | DMG Relocatable Macro Assembler Version 1.00
ASMB | .EXE | 6502 Assembler  Version 1.10 (Famicom tool created in 1987)
ASMD | .EXE | DMG Macro Assembler  Version 1.01
ASMDMG | .EXE | DMG Macro Assembler  Version 1.01 (Identical to ASMD.EXE)
CGE2DMG | .EXE | Converts either CGE or DCG Character graphics to source code (.DMG) 
CGEDCG | .BAT | Batch file for running FCV with the DCG2BYT script
DCG2BYT | .CVT | FCV Script to convert DCG Character Graphics files to assembly code (.DMG)
DCGDMG | .BAT | Batch file for character file conversion of a .DCG file to a .DMG source file
DMGFUNC | .TB0 | Custom binary format possibly used by ISD debugger tool contains the string "SENGOKU" at the start
FCV | .EXE | File Convert Program  Version 1.03 (Reads in .CVT files)
FDT | .EXE | FMS Debugger  Version 2.02 (Famicom Tool?)
GENBYTE | .CVT | FCV Script to convert a .COM file to a NES/SNES .X65 source file
HDT | .EXE | MMC/HVC Debugger  Version 03.05 (Famicom/NES Dubugger)
IS65 | .EXE | 6502,65816 Relocatable Macro Assembler version 1.00 (Why is there a SNES assembler in here?)
ISD | .EXE | I.S. Debugger  Version 1.00c
ISDMG | .EXE | DMG Relocatable Macro Assembler Version 1.00
ISLINK | .EXE | ISASM Linker  Version 1.00
L | .EXE | ISASM Linker  Version 1.00 (Presumably just copied to have a shorter name)
PW | .EXE | P-ROM Support Program Version 1.26 
PW2 | .EXE, .TB0 | P-ROM Support Program Version 2.02d6
SCR2DMG | .COM | MS-DOS Command File Executable for converting .scr files to .DMG files for assembling
SHL | .COM, .KEY | MS-DOS Command File Executable but not sure what it is for
SHVC | .EXE | SHVC Debugger  Version 1.00a
VRAMTR | .CVT | VRAM Transfer script that converts a .SCR screen file to either a NES or SNES .X65 file
VUP | .EXE | Version UP Program  Version 2.09

### Game Boy SDK File Formats
This SDK seems to use a number of different file formats, but it is not clear what exactly is the purpose of each:
* **.DMG** - Assembly source code for the Dot Matrix Game (Game Boy)
* **.CGE** - Character Graphics data (For famicom?)
* **.DCG** - Character Graphics data (for DMG Game Boy?)
* **.CVT** - Custom Conversion scripts that can be executed with `FCV`
* **.SCR** - Screen file maybe containing location of character tiles in a level?
* **.X65** - Either Famicom or Super Famicom source code 
* **.COM** - Unsure if this is a Windows Command File or something else

### NES/Famicom SDK Files
One interesting file is that `HDT.EXE` is included here which is the NES/Famicom Debugger, as far as I know this is the first time a file from the Famicom SDK has ever been leaked. As no other official NES/Famicom SDK had been leaked this is quite remarkable. It was written by Intelligent Systems between 1986-1989 and seems to read in three file formats: CHR (Character/Tile Data), SCR (Screen data? or Source Data?) and CGD (No Idea, maybe Character Graphic Designer?).

### SNES/Super Famicom SDK Files
Another interesting file is that `IS65.EXE` is included here which is the Official Super Nintendo Entertainment System assembler created by Intelligent Systems in 1990. It seems to have been written by the developer **Toshio Sengoku**.

The file `VRAMTR.CVT` which is a script in a custom programming language that is parsed by the `FCV` program. The comments at the beginning of the file indicate that it takes an input file with a ".SCR" extension and outputs a file with a ".X65" extension.

### File Convert Program
The File Convert Program (`FCV`) tool was created in 1987 by **Intelligent Systems** so it is likely it was also part of the Famicom Software Development Kit.

The commands in the script appear to be performing various operations related to transferring data to VRAM. For example, the "VRAD=$2000" command sets the screen address, and the "DTPT=0" command initializes the data pointer. The script also includes commands for writing screen data and attribute data to VRAM.

### Character Graphics conversion
The Bash script `DCGDMG.BAT` is used to convert a file with the extension ".DCG" (presumably containing character graphics) from the FM-R50 system (a Japanese computer system from the 80s) to a source code file with the extension ".DMG". 

The script assumes that the **FM-R50** file is inserted into Drive A of the computer. The script then uses the `FCV` tool to do the conversion.

This potentially means that developers for Nintendo were using the Fujitsu FM-R50 or a compatible system to develop Game Boy games and possibly NES and SNES games too.

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

