---
layout: post
tags:
- sdk
- 32x
- megadrive
- sega
title: Sega 32X Software Development Kit (DDK)
category: megadrive
permalink: /sega-32x-sdk
breadcrumbs:
  - name: Home
    url: /
  - name: SDKs
    url: /sdks
  - name: Sega Mega Drives (Genesis)
    url: /mega-drive
  - name: Sega 32X Software Development Kit
    url: '#'
recommend:
- sdk
- 32x
editlink: /consoles/Mega Drive/Sega32XSDK.md
updatedAt: '2026-10-18'
---
# Sega 32X Software Development Kit
The **32X-DDK** is a copy of the Sega of America **Developer Tool Kit CD** for the Sega 32X, the mushroom-shaped add-on that plugged into the [Mega Drive](/megadrive) cartridge slot and added two Hitachi SH2 processors to the console. A cover letter from Sega Developer Technical Support (DTS) on the disc dates the CD build to **June 1995** [^1], the year after the 32X launched.

Unlike the documentation-only archives covered in the [Mega Drive SDK post](/sega-mega-drive-genesis-sdk), this kit is the full developer distribution: scanned manuals, actual tool binaries, source code, sample programs, and the regional lockout implementation that shipped to licensed developers.

## What is on the disc
The kit is organised into four top-level areas, each covered in a section below:

* **sega/** - the scanned documentation set (GIF page scans) for the 32X, Mega CD, and Genesis, plus the Sega technical bulletins
* **SGL_1.0/** - the Sega 3D Game Library (SGL) version 1.0 for the Saturn, with headers, libraries, manuals, and 35 sample programs
* **SEGADTS/** - the current June 1995 DTS drop: 32X cartridge development tools, demos, the GNU SH toolchain, and Acrobat manuals
* **ARCHIVES/** - four earlier DTS drops dated May 1994, June 1994, November 1994, and March 1995, preserved as-is

---
# Browse the archive
This **DOS-era simulation** lets you explore the names, sizes, and purposes of every file in the 32X-DDK without downloading the archive. Start in `SEGADTS/32X` where the current tool drop lives, jump to the scanned documentation, or step back in time through the dated DTS drops in `ARCHIVES/`. Selecting a file shows its size and a short description of its role. The index covers **8,636 files in 798 folders**, but contains no file contents.

{% include archive-explorer.html manifest="/public/data/32x-ddk-archive.json" layout="dos" title="Sega 32X Developer Tool Kit CD" layout_label="DOS era simulation" %}

The documentation scans under `sega/` each correspond to one page of a printed manual, which is why the set contains hundreds of GIF files. File contents and original development dates are not included; the explorer's descriptions are based on inspected formats and filenames, and entries whose purpose could not be established are marked as such.

---
# SEGADTS - the current tool drop
The `SEGADTS` folder is what a registered developer would have received from Sega of America DTS in mid 1995. It is the most complete single snapshot of the 32X toolchain on the disc.

## Cartridge development tools
The `SEGADTS/32X/CARTDEV` folder holds the [Cross Products](/companies/crossproducts) **SNASM2** toolchain for the 32X, known as the **MARS** toolchain after the console's internal codename Project Mars:

* **SNASM68K.EXE** - the assembler for the Motorola 68000, which still runs the game shell on the Genesis side of the 32X
* **SNASMSH2.EXE** - the assembler for the Hitachi SH2 slave CPUs that do the heavy graphics work
* **SNBUG32X.EXE** - the SNASM2 32X/MARS debugger with C source level debugging and breakpoints on the SH2 User Break Controller
* **MARSMON.BIN** - the monitor program loaded into the development cartridge that talks to the host debugger
* **COFF2BIN.EXE** - converts COFF load modules into flat binary ROM images

The release notes in `README.32X` reveal that User Break Controller features require version 2.0 or above of the 21 March 1995 monitor, and `README.NOW` warns about SHARE.EXE incompatibilities with the Flashtek X32VM DOS extender. For the development hardware these tools talked to, see the [Mega Drive development kit hardware](/sega-mega-drive-genesis-development-kit) post.

## Demonstration programs
`SEGADTS/32X/DEMO` contains twelve small 32X programs showing specific hardware tricks, each with source: `SH2_DMA` (DMA transfers between the SH2 and video memory), `TIMECODE`, `TXTURMAP` (texture mapping), `SERIAL`, `RUNLNGTH` (run-length compression), `SOJ_32X` and the CD boot demos `CD_ICD`, `CD_V1A`, `CD_V2A`.

## Hardware diagnostics and lockout
Two folders preserve code that rarely survives:

* **HWDIAG** - source and executable of the 32X hardware diagnostics program distributed on the Sega BBS; it exercises the SH2 CPUs, the VDP, and the add-on's memory
* **LOCKOUT** - the 32X regional lockout implementation (`LOCK.ASM`, `LOCK.BIN`, `LOCK.DOC`, `LOCK.INC`): the code checked at boot so a cartridge only runs on consoles from its licensed region

## Conversion utilities and the FAQ
`SEGADTS/32X/MISC` contains **AIFF2PWM** for converting Macintosh AIFF audio into 32X PWM sound data and **LBMTO32X** for converting Deluxe Paint LBM images. Alongside them sits `32X.FAQ` by **Toshiyasu Morita**, a candid programming FAQ from April 1995 covering the tricky parts of the machine: the dual Genesis/32X boot headers and the unified interrupt handler that works around the SH2 revision 2.5 silicon bug where a high priority interrupt can be lost inside a three cycle window [^2].

---
# SGL 1.0 - the Saturn 3D library
`SGL_1.0` is a complete release of the **Sega 3D Game Library**, the high level Saturn graphics API. Sega clearly expected 32X developers to move up to the Saturn: the CD carries everything needed to start, including headers such as `SGL.H` and `SL_DEF.H`, the compiled `LIBSGL.A` and `LIBCD.A` archives, per-topic text documentation under `DOC/`, the Acrobat manual set under `MANUAL.SGL/`, and **35 sample programs** (`S_2_2` through `S_CD4`, plus `DEMO_A` to `DEMO_D`, `DESIGN1` to `DESIGN3`, and sound samples) each with source, makefile, and built COFF load module.

The relationship between SGL and the lower level Sega Basic Library, plus the later history of the library, is covered in the [Sega Saturn SDK](/sega-saturn-sdk) post.

---
# GNU toolchain and manuals
`SEGADTS/GNU` holds three dated builds of Sega of America's GNU SH cross compiler: **4/6/95** (the build used for the SGL and SBL libraries), **6/6/95** (a beta with minor assembly changes), and **6/16/95**. `SETENV.BAT` wires the toolchain into DOS, and each build ships its own `BIN`, `INCLUDE`, `LIB`, and `SRC` trees including DOS-hosted gcc, gdb, and the libg++ C++ library. The [Sega Saturn Hitachi compiler](/sega-saturn-hitachi-compiler) post covers the Hitachi side of Saturn SH2 development.

`SEGADTS/MANUALS.DTS` gathers the Acrobat-format manuals: the six sections of the SGL Developer's Manual (development environment, programmer's, designer's, and sound tutorials, data transfer, and the reference), the **Saturn Technical Bulletins**, and the Hitachi manuals for the SH7600 (the SH2 family), the H series, the SH C compiler, and the SH simulator/debugger. The accompanying `README.SOA` letter from June 1995 is the documentation that firmly dates this CD [^1].

`SEGADTS/SATURN` rounds out the drop with the Saturn cartridge tools, twelve Saturn demos, graphics plug-ins, the **Saturn sound driver source** (SCSP and SMPC drivers in `SND_DRV/`), and Virtual CD tools.

---
# ARCHIVES - the dated DTS drops
`ARCHIVES` preserves four previous Developer Technical Support drops, giving a timeline of how the 32X (and Saturn) toolchain evolved:

Drop | Approximate date | Highlights
---|---|---
MAY19_94.DTS | May 1994 | Sega graphics tools (SEGATLS: BRIP, SPRITE, SCONVERT, SATURNSP), the Hitachi SHERRY C compiler, and early Saturn development environment files
JUN21_94.DTS | June 1994 | GNU toolchain drop, Hitachi SH tutorials, and the SEGATLS sprite tools with source
NOV01_94.DTS | November 1994 | The first 32X-specific drop: hardware diagnostics source, the GNU-flavoured GNUSMPLE examples (which warn they were written for the version 1 development board), SNASM samples, and the Saturn MODEL_M and MODEL_S trees
MAR01_95.DTS | March 1995 | The mature 32X drop with SNASM2 cartridge tools, plus the Autodesk FLIC animation library and JWP, a Japanese word processor for handling Japanese text in game content

---
# Documentation cross-reference
A large part of `sega/` overlaps with the documentation already covered in the [Mega Drive SDK](/sega-mega-drive-genesis-sdk) post, so this page does not repeat it. The bulletins, the sound driver and MIDI converter manuals, the three 32X development cartridge manuals, and the Genesis software and sound manuals are all documented there.

The parts of the scanned set that are specific to this kit and not covered by that post:

* `sega/32X/Overview` - the 32X Overview document introducing the add-on
* `sega/32X/HWManual` - the full 32X Hardware Manual with two supplements, the deepest technical document in the set
* `sega/32X/HWInfo` - hardware information reference
* `sega/32X/SampleDisk` - documentation for the sample disk
* `sega/32X/SoundTool` - the sound tool overview plus the Sound Simulator, Tone Editor, PWM driver, and sound tool change lists; the matching Macintosh tools themselves are listed as never archived in the Mega Drive SDK post, but their manuals survive here
* `sega/32X/TechInfo` - the general technical information document, the development equipment manual, and Attachment 1
* `sega/MegaCD` - the six Mega CD documentation sets (BIOS, format, hardware, outline, PCM sound, software development)

---
# References
[^1]: `SEGADTS/MANUALS.DTS/README.SOA` cover letter, Sega of America DTS Training and Documentation, 12 June 1995.
[^2]: `SEGADTS/32X/32X.FAQ`, Toshiyasu Morita, last update 21 April 1995.
