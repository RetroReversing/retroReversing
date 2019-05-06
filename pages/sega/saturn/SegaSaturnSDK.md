---
layout: post
tags:
- sdk
- segasaturn
- saturn
- sega
title: Official Sega Saturn Software Development Kit (SDK)
thumbnail: /public/consoles/Sega Saturn.png
image:  /public/consoles/Sega Saturn.png
permalink: /sega-saturn-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Official Sega Saturn Software Development Kit (SDK)
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnSDK.md
---
The Sega Saturn software development kit was available for both PC and SGI workstations.


{% include link-to-other-post.html post="/sega-saturn-programming-box/" description="For the hardware side of the Sega Saturn Development Kit check out this post." %}

---
# Tools
The Tools provided by the Sega Saturn Software Development Kit will be covered in this section.

## Background Converter (BGCON)
Latest Known Version: 1.6

BGCon is a command line tool for graphics designers to convert their images into a Sega Saturn ready image format.

It supports the following formats as input:
* IFF (Interchange File Format)
* PCX (PiCture eXchange)
* TGA (Targa)

The only output format it supports is SGA3 with or without header information.

---
## Host Serial Interface (HSI) Tools
Created by Geoff Caras of `The Igneous Group` it is software with included source code to contact a Sega Saturn CartDev kit from a PC. 

### HSITool
The HSITool is a command line program that runs on the PC to connect to the saturn development kit. It uses the SCSI and ASPI interface to control the CartDev hardware from the PC.

You can do actions such as read memory or capture audio output. Very useful for debugging as you can get the current registers or even write new register values when at a breakpoint.

The source code is available under `HSIWIN.zip`

### COFFLOAD
SegaSaturnCoffLoad.png
￼
COFFLoad.exe is a tool to send a compiled Sega Saturn executable (.coff) to a Sega CardDev kit to run the executable on the Saturn.

The source code of this tool is available in the `WINCOFF.ZIP` file.

---
# Libraries
There were two major libraries for sega saturn developement, the low level Sega Basic Library (SBL) and the high level Sega 3D Game Library (SGL).

## Sega Basic Library (SBL)
Latest Known Version: **6.01**
The Sega Basic Library is a low level API for as close to bare metal access to the hardware as you can get, it is ideal for 2D pixel based games.

### INTERRUPT example
The Interrupt folder inside the Sega Basic library holds a sample of how to use interrupts called `testtim0`.

The sample displays two timers and the Hblank interrupt count. It makes heavy use of the Scroll 2D library to display the text.

It also gives some advice how to do Direct Memory Access (DMA) transfers, which can be triggered by interrupts such as HBlank or VBlank.

### SEGABIN
The SegaBin contains various 3D format converters and CD manipulation programs.

This includes pre-built executables for a range of PCs such as HP, SUN and Windows. It also contains the source code for the converter tools and a few samples as noted in the table below.

Name | Description
---|---
BIN | WIndows Binaries
BINCD | Windows binaries for CD management and emulation
BINHP | Unix Binaries for HP computers
BINSUN | Unix Binaries for Sun Microsystems computers
DGTTO3DT | Source code for the DGT to 3DTable converter
DXFTO3DT | Sample files for use with the DXF To 3DTable converter
MAN | English Manual
MAN_JPN | Japanese SDK Manual
S3DTO3DT | Source code for the Sega3d to 3dTable converter (you can find the executable in the /bin directory)
TIMESTMP | A single C source code example for generating a timestamp
VCD | JVC drivers for the Saturn Video CD Card

#### MFCAT
MFCat is a command line tool that converts a binary file to a `SIMM` (Single In-line Memory Module?) file.

#### Rof2Bin
The `rof2bin` command line executable converts .ABS files to Binary format files (.bin).
> But what are .ABS files?

---
### SEGADAT
The SegaDat folder is well as the name suggests a folder with Sega Saturn data files in it. What sort of data you ask? 

Well it seems to be data that by default gets put on every disk, including the Sega "Warning Message" that plays when you try to put a game in an Audio CD player.
Also it includes fonts used to display the warning message at the start of each game.

It looks like the file `sega_wrn.da` is the audio file that plays when you put a sega saturn disc in an audio player.

### SEGALIB (Libraries)

Folder | Purpose
---|---
AWK | 
BPL | 
CMP | 
CSH | Cache Simulation library
DBG | Debug library
DMA | Direct memory access library
DSP | 
FLD | File loader library
GFS | 
INCLUDE | Header Files (C Includes)
INT | 
LIB | 
MAN | Manual Documentation
MAN_JPN | Japanese Manual Documentation
MEM | 
MPG | 
MTH | 
PCM | 
SCL | 
SDD | 
SHC | 
SND | 
SPR | 
STM | 

### SEGASMP (Samples)
This contains tons of great samples of how to use all the libraries in the Sega Saturn development kit.

The samples are pre-compiled in the `COF` folder as valid Sega Saturn executables.

It also seems to compile `.ABS` files into the `ABS` folder but I am unsure what they are used for.

Folder | Purpose
---|---
ABS | Build output folder of ABS files (not sure what abs files are, but 1 per sample is created)
BUP | Back UP library sample
COF | Build output folder of COFF Saturn executables
CSH | Cache Simulation library sample
DBG | Debug library sample
DMA | DMA library sample
DUAL | Slave CPU example
FLD | File loader example
GAME | 
GAME_CD | 
GFS | 
LIB | 
MAN | Manual/Documentation
MAN_JPN | Manual/Documentation in Japanese
MEM | 
MPG | 
PCM | 
PER | 
SBLSGL | 
SCL | 
SGL | 
SND | 
SPR | 
STM | 
SYS | 
TIM | 
V_BLANK | 

---
## Sega 3D Game Library (SGL)
Latest Known Version: **3.02**
The Sega 3D Game Library (SGL) is a high level API designed for creating 3D games. It does not provide as low-level access as the Sega Basic Library but the two can be used together.

Note that this can also sometimes be called the Sega Graphics library, both are used throughout the official Sega documentation.

### GNU AWK/GAWK
Contains builds of the GNU Free Software AWK for windows.

The GNU Assember (GASM) uses the AWK files to help assemble source input, so these are sort of like part of the source code of the assembler.
