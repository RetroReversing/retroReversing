---
layout: post
tags:
- sdk
- samples
- saturn
- sega
title: Compiling an Official Sega Saturn Sample (SDK)
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn SDK Samples.jpg
permalink: /sega-saturn-compiling-samples/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Compiling an Official Sega Saturn Sample (SDK)
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnSampleCompilation.md
---
This guide will walk you through compiling the official Sega Saturn samples which are part of the Sega Basic Library.

---
# Building START (STRT) library
This needs to be built before any of the samples as it contains common code for booting up a game.

The library can be compiled with Hitachi toolchain or the GNU toolchain, each one requires slightly different code.

## STRT2_H and STRT2_G
The Start code is split into two different versions based on the compiler toolchain that the developer wants to use. The _H version is for the Hitachi toolchain and the _G is for the GNU Toolchain.


## Compiling for Hitachi (STRT2_H)
You can run the following commands to build with the Hitachi toolchain:
```
ASMSH.EXE STRT1_H.SRC -cpu=7600
SHC.EXE -sub=LIB.SHC STRT2_H.C
```

The first step assembles `STRT1_H.SRC` which can be executed with `wineconsole` on mac or linux.

The second step is more tricky as it requires a few additional files to compile the `STRT2_H.C` .

The first error will complain about not being able to find `stdlib.h` as it was not present with the Dreamcast SDK version of the Hitachi compiler:
```
STRT2_H.C(11) : 2005 (E) Cannot open include file "stdlib.h"
..\..\segalib\include\machine.h(4) : 2500 (E) Illegal token "void"
```

In order to fix this you can use the Include folder from the PSYQ SDK. And also comment out a piece in sys/config.h

The second error I have been unable to fix complains about `shcnpic.lib` missing:
```
** 211 CANNOT FIND FILE(..\..\..\sh\lib\shcnpic.lib)
```

The library `shcnpic.lib` is for handling of Position Independent Code (PIC) for the SH series of cpus.

---
# General File System 1A (SMPGFS1A)
Part of the Sega Basic Library samples.

## SMPGFS.BAT
Calls `shc` and `lnk` for the Samplke (SMP) for the General File System (GFS).

You can find both `shc.exe` and `lnk.exe` from the Hitachi SH2 SDK provided as part of a Dreamcast SDK.

### SHC
SHC is the C compile provided for the SH processors by Hitachi.

Running SHC:
```
set PATH=%PATH%;C:\Hitachi\
set SHC_LIB=C:\Hitachi\
set SHCPU=SH3
set SHC_TMP=.
```

### (0) : 3021 (F) Memory overflow
This happened when I set the SHC_LIB directory wrong. To fix it make sure this environment variable is set to where the hitachi compiler executables are.

## Makefile
Uses `gcc` to compile the *.c files and `gasm` to assemble the assembly files.

## Libraries Included
name | purpose
---|---
segadgfs.a | General File System
sega_cdc.a | 
sega_csh.a | 
sega_dma.a | Direct Memory Access
sega_int.a | Interrupt handling
