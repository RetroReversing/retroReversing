---
layout: post
tags:
- sdk
- segasaturn
- saturn
- sega
title: Official Sega Saturn Software Development Kit (SDK)
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn Official SDK.jpg
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
updatedAt: '2019-11-05'
---
The Sega Saturn software development kit was available for both PC and SGI workstations and consisted of a number of libraries build in-house by sega and a few custom 3rd party.

{% include link-to-other-post.html post="/sega-saturn-programming-box/" description="For the hardware side of the Sega Saturn Development Kit check out this post." %}

---
#  Compiler Toolchain
There were multiple sets of compilers available to Sega Saturn developers, the most popular being the Cygnus Solutions version of GCC for SH Microprocessors (Supplied by Sega) and the other was the custom SH-2 compiler developed by `Hitachi`. 

Cygnus Solutions were a company that sold GNU products with enterprise level support to make it easier for developers when they encountered compiler issues.

Although the Cygnus Solutions compiler toolchain supports C++ it was reccomended against it by Sega in their official FAQ released with the compilers due to the larger code size output compared to standard C.

{% include link-to-other-post.html post="/sega-saturn-hitachi-compiler/" description="For more information on Hitachi Compiler for the Saturn check out this post." %}

---
# Documentation
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Some early <a href="https://twitter.com/hashtag/SegaSaturn?src=hash&amp;ref_src=twsrc%5Etfw">#SegaSaturn</a> developer documentation from March 1994 <a href="https://t.co/K1UlD2jNoc">pic.twitter.com/K1UlD2jNoc</a></p>&mdash; Shane Battye🎄 🎮 (@shanebattye) <a href="https://twitter.com/shanebattye/status/1337556128868143104?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Tools
The SDK didn't only provide compilers, there was a set of useful tools provided for a wide variety of tasks such as image conversion and debugging.

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
One of the very nice things about the sega saturn SDK is that it actually contains the full source code to all the libraries that make up the SDK. The C and ASM source files are all located inside the SEGALIB folder seperated into folders based on the library name.

Each folder contains a:
* .a library for GCC compiler linking
* .lib library for HITACHI SHC compiler linking
* .lbr metadata of what objects to put in the .lib SHC compiler library when built
* .c or .asm source code
* makefile for building the source code

Folder | Purpose
---|---
AWK | Awk scripts for gasm
BPL | Branching Playback
CMP | Compression Library
CSH | Cache Simulation library
DBG | Debug library
DMA | Direct memory access library
DSP | Library to load programs into the Saturn SCU DSP
FLD | File loader library
GFS | General File System
INCLUDE | Header Files (C Includes)
INT | Interrupt library
LIB | Contains all the prebuilt libraries in both .a and .lib format
MAN | Manual Documentation
MAN_JPN | Japanese Manual Documentation
MEM | Memory library
MPG | MPEG Video
MTH | Math Library
PCM | Audio PCM/AD-PCM playback
SCL |  (VDP2 Library?)
SDD | Sound Driver source code (assembly)
SHC | Hitachi SH C compile library source, only seems to implement one function `__sftra`
SND | Sound Library
SPR | Sprite Library
STM | Stream System Library

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
GAME | Demo game source code
GAME_CD | Same sample game but with a few additions for CD Music playback
GFS | General File system library samples
LIB | Start module examples
MAN | Manual/Documentation
MAN_JPN | Manual/Documentation in Japanese
MEM | Memory management samples
MPG | MPEG Video sample
PCM | Audio playback samples
PER | Peripheral samples (e.g mouse, gun, keyboard)
SBLSGL | Graphics examples
SCL | VDP2 graphics examples
SGL | Graphics samples
SND | Sound samples
SPR | Sprite examples
STM | Stream examples
SYS | Application initialization program sample
TIM | Timer samples
V_BLANK | VBlank usage sample

---
## Sega 3D Game Library (SGL)
Latest Known Version: **3.02**
The Sega 3D Game Library (SGL) is a high level API designed for creating 3D games. It does not provide as low-level access as the Sega Basic Library but the two can be used together.

Note that this can also sometimes be called the Sega Graphics library, both are used throughout the official Sega documentation.

### GNU AWK/GAWK
Contains builds of the GNU Free Software AWK for windows.

The GNU Assembler (GASM) uses the AWK files to help assemble source input, so these are sort of like part of the source code of the assembler.

### Documentation

### Demos
The Demos folder Contains 4 Demos in source code form ready to be compiled using the GNU compiler toolchain for Sega Saturn.

#### BiPlane Demo
Compile with: GNU 2.7+ (GCC for SH2))
Written in: C 

#### CDDA_SGL
CD Audio demo very simple with only one C source file.

#### Chrome
The Chrome demo shows various graphical effects such as gouraud shading, bump mapping and chrome finish for simple objects.

#### Flying
Compile with: GNU 2.7+ (GCC for SH2))
Written in: C 
This is a demo game where you fly a spaceship (flying saucer) and shoot at enemies below.

---
### Include files

---
### Libraries

#### CDC (CD Communication)
Functions that have the prefix CDC_ are part of the CD Communication library.

### Samples
There are two different sample folders for this library, called sample1 and sample2.

### SDDRV (Sound driver)
Assembly source code for the Sega Saturn Sound driver interface.

### Tools
* DG2TEX.EXE
* S2D2SGL.EXE
* S3D2SGL.EXE
* S3DTEX.EXE

---
# Software for Designers
The software for 2D/3D Artists, Designers and sound editors are covered in the following post:
{% include link-to-other-post.html post="/sega-saturn-artist-tools/" description="For the artist tools used for Sega Saturn Development check out this post." %}


---
# Glossary

Term | Meaning
---|---
VCD | Either VirtualCD or Video CD depending the context
