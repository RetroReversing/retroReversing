---
layout: post
tags: 
- n64
- sdk
- leak
title: Oman Archive
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 Oman Archive.jpg
permalink: /oman-archive
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Oman Archive
    url: #
recommend: n64
editlink: /n64/OmanArchive.md
updatedAt: 3rd May 2020
---

The "Oman Archive" was a leak of Nintendo Technical documents from a source inside SGI in late 1999. It was uploaded to the internet under the name `oman.rar` but has since been repackaged into multiple other archive formats.

Even the origin of the name itself is clouded in mystery with some saying it was leaked by a person called Oman and others disagreeing, but very little information is known about the leak.

It is believed that the archive kickstarted the N64 Emulation development scene and that without it we wouldn't have made much of the early progress in figuring out how the hardware worked [^1].

However the problem with the Oman archive is that the contents were obtained illegally and thus any development based on the stolen content would be liable for copyright infringement.

Thus many talented N64 emulator authors refuse to use the material and instead reverse engineer the inner working of the system themselves. This prevents the code (and the resulting binary) from any patent/copyright/trademark violations, but requires a lot of time and patience. So we are thankful for all these dedicated developers, helping maintain the codebase in a way that prevents distribution of N64 emulators from becoming illegal [^2].

If you plan to do any N64 development then stay as far away from the Oman Archive as you can, including leaving this page...

However historically these documents are very interesting and preservation of the material is vital. So even if the originally material disappears from the internet forever (unlikely but not impossible) lets at least clear up a few misconceptions by asking: What exactly *IS* in the Oman archive?

---
# Top Level files
Like most leaks there are a bunch of misc files at the root of the archive that are not always particularly relevant. This section will try to categorised them as best we can.

## SN64 SDK Files
These documents are all from February 1997 and really should have been in a folder called N64Win95 or Sn64 as they all come from the same product, maybe it was a copy error by the original author of the leak.

They are from a development kit by `SN Systems` known as `SN64` and this was the Windows 95 version of the SDK. SN64 is just the brand name of the Nintendo 64 versions of SN Systems `PSYQ` development kit that also supported Playstation and Saturn consoles. 

This made it a really popular choice for 3rd party game developers as it was slightly easier to port code between the consoles using the SDK.

{% include link-to-other-post.html post="/sn64-sdk-sn-systems" description="If you are wondering what these files do check out our page on the SN64 SDK." %}

All of the files in the root directory up to and including `N64NOTES.TXT` (9th March 1997) are from this SN64 SDK. The other top level files are listed separately below.

## tmp file
Although the file simple called `tmp` looks like a linux directory it is in fact an ASCII Text file that is the output of running a directory command on their `E:\oman\DOC` folder.

## AUD.c
A C-source file that must have been misplaced, not sure exactly where it came from but it was created by SGI in 1994. The same file exists in `TOOLS\EMULATE\AUD.C` so it must have been copied by accident to the top level directory.

## docs.zip
This contains a subset of the files from the `/DOC` folder and they are all identical in contents to those files too. This zip can be ignored and you can go straight to the `/DOC` folder.

## INSTD.tar
This TAR archive contains the N64 SDK version 2.0G (for RCP 2.0) for use on an IRIX Unix machine, to install just copy the 2 folders (var and usr) to the root of your SGI IRIX.

Also note that these files also exist extracted in the root directory of the main tar file.

## usr folder
The files in this tar are part of the standard N64 SDK so will not be covered here as they have been covered multiple times elsewhere.

### tmp folder
The tmp folder is blank and contains no data, it should not have been included in the archive.

### var/inst folder
IRIX machines comes with a command called `inst` used for installing software distributed by SGI [^3]. 

The program saves the details of everything that has been installed in the `/var/inst` folder, and so the SDK comes with a few files used by the inst program when listing what is installed:

Name | Description
---|---
rsp_dev | Install record for `Nintendo 64 RSP Development Environment 2.0G`
ultra | Install record for `Ultra 64 Development Environment, 2.0G`
rsp_audio | Install record for `Nintendo 64 RSP Audio Microcode Source Code 2.0G`
gng_noship | Install record for `Ultra 64 Noship Go/No-go Test Software 2.0G`
rsp_gfx | Install record for `Nintendo 64 RSP Graphics Microcode Source Code 2.0G`
hist | History file for IRIX inst command
.rqsfiles | standard file on all IRIX machines that have inst command
orphan | standard file on all IRIX machines that have inst command
.machine_inventory | Holds metadata about the current machine
INSTLOG | Log file from the last time the inst command ran

### var/sysgen/master.d folder
The folder `var/sysgen/master.d` on an IRIX system is used by the `lboot` command to define the master files for the bootable kernel. In this case it just contains one file called `u64` for the N64 hardware.

Master files are basically configuration for all the modules on an IRIX system and can be viewed using the `master` command [^4].

---
# AS Folder (Algorithm Simulator)
The folder called `AS` is at the top level and contains a brief README saying that this folder contains a C program that begins to model the algorithms and functionality of the MSP and MDP (presumably the RSP and RDP).

The Algorithm Simulator was used before the N64 hardware prototype was available to develop on and allowed developers to get a head start on their games.

The folder contains:
* *.c C source code
* *.h C header files
* *.o compiled version of the *.c files
* *.RGB - Textures
* *.I - 3D object files

---
# COSIM Folder (Co-Simulation)
The `Cosim` folder contains C and Assembly source code used to test the hardware including testing the early Verilog model for "Project Reality".

Co-Simulation is using software to verify and test simulated hardware, in this case it is testing the N64 development hardware with a few basic software tests [^5].

---
# DOC Folder (Documentation)
This is the main folder of goodies, whenever someone talks about the value of the Oman Archive this is the documentation they are talking about.

The folder contains many different file formats, some are plain text (*.TXT), others are Postscript (*.PS) and more are `File Maker` files (*.FM & *.DOC). So there was clearly no standard when it came to documentation.

Note that all the documentation located under this folder is part of what SGI called their `HeadStart development environment`, which was documentation for starting development before the actual hardware was finalised for the console.

## Top Level Documentation
The files located at the root of the DOCS folder tend to be in 3 different formats, .DOC, .FM and .TXT.

Note that the .DOC files start with the ASCII string `<MakerFile 4.0K>` and are *not* MS Word documents. Also the .FM files start with the ASCII string `<MakerFile 3.0F>`.

They were both created with an early version of Adobe FrameMaker but don't seem to be usable in the latest versions of the tool. They also can't be converted with Adobe createPDF service either so the only current way to get partial content is to run `strings` on it but it is hardly readable.

There was a `FM2HTML` tool developed according to W3.org but all download links seem to have been Brough offline [^7].

For anyone trying to reverse engineer the old FrameMaker format, they is a Postscript version of `AUDUCODE.FM` which could help understand what the bytes in the format represent.

Hopefully someone will be able to convert them to a PS, PDF or HTML file someday for us all to enjoy.

Name | Description
---|---
ABI.DOC | Audio Binary Interface MakerFile Documentation
ANIMATION_ENGINE.FM | Brief overview of 3D Animation of Models
AS.FM | Graphics Algorithm Simulator
AUDBI.FM | Audio Binary Interface 1.0 command reference (e.g for `A_CLEARBUFF`)
AUDUCODE.FM | RSP Audio Microcode Architecture
AUDUCODE.PS | Same as `AUDUCODE.FM` but in Postscript format
BLEND_MODES.TXT | Very detailed description of the Blend Modes by `Phil Gossett`
CHAR_PLAN.DOC | Device Characterization checklist
CHIP_DESIGN_DIRS.FM | Description of the Verilog folders
DEBUGGER.TXT | Notes on how to use the `CaseVision Debugger`
DIAGNOSTIC_PROPOSAL.FM | Proposal to create a `Diagnostic System` for the Nintendo 64 Hardware and Software 
DIAGS.DOC | Diagnostic program documentation for the Ultra 64 development 
board
DMA_PERFORMANCE | DMA Performance Analysis
EMULATOR.TXT | Status of the Graphics Binary Interface Emulator for SGI workstations
ENDIAN.TXT | Brief notes on Big Endian bit ordering
FILTER_BUILDLOG | Bash script to filter the log files in the directory
FIXEDPT.FM | Notes on Fixed Point Numbers
FRAMEREC.TXT | Notes on a way to record gameplay frame by frame on an SGI ONYX
GFX_TEST.TXT | Notes on the tests located in the `PR/apps/rsp*` folder for testing the RSP
GFXBI.FM | RCP Graphics Binary Interface Documentation
GONOGO.FM | Ultra 64 Go/No Go Test Plan
GRUCODE.FM | RSP Graphics Microcode Architecture
GRUCODE.OLD.FM | Old version of RSP Graphics Microcode Architecture
HUFFMAN.FM | Huffman Decoding for MPEG
IO.FM | Interaction between I/O components
IOSIM.FM | `iosim` I/O simulator command documentation
LIGHT-MATERIAL.FM | Lighting and Materials
LIGHTFOG.TXT | Documentation for Lighting, fog, and reflection mapping
LOGICAL_RDP.FM | Rendering Pipeline
MAKEFILE | Top level makefile that just calls the "RSP" folders makefile
MEM_MGMT.FM | Memory Management such as Virtual Addresses and Segments
MEMORY_MAP | Simple Text memory map of each of the components of the N64 (RCP, RDRAM etc)
MMAKE | Fork of the SGI `mmake` bash script
MNIGHTLY | Bash script for nightly builds using mmake
MPEG_API.FM | MPEG Video API
MPEG_STATUS.FM | Status of MPEG integration into the SDK
MPEG_TALK.FM | How MPEG Works presentation
MPEG_TALK.PS | How MPEG Works presentation (Postscript)
MVT.FM | Multi-View Textures (Level of Detail optimisation)
NIGHTLY.SH | Bash script to run nightly regression testing
PERFORMANCE.DOC | RSP Geometry Transformation Performance
PERFORMANCE.DOC.RECOVER | Older version of `PERFORMANCE.DOC`
PERSPNORM.FM | Perspective Normalization
PROBLEMS | Ultra64 Problems and Tips (with workarounds)
RCP_ELEC_SPEC.FM | Electrical specification for RCP
RDB.DOC | RDB Port connecting Indy & the development board
RDP_COMMANDS.FM | Documentation for each of the Reality Display Processor commands
RDP_COMMANDSIX.DOC | Index of RDP Commands
RDP_FUNC_IO_TABLES.PS | I/O tables for the Reality Display Processor
RDPPROG.FM | RDP Programmers Guide
RDRAM_INITIALIZATION | Brief notes on the initialization sequence of the RDRAM (Rambus)
README | Description of the HeadStart development environment
README.6.2 | Notes on one developers attempts to get it running on a 6.2 Indy
README.NIGHTLY | Instructions for setting up a nightly build of regression tests
RELEASE2.FM | Readme for Ultra 64 Developers Release 2.0
RI_PROGRAMMING_GUIDE | RI/RDRAM register read/write operations
RSP_GFX_SW.FM | RSP Fast3D Graphics Software Architecture
RSP_VERIF_ENV | Notes about the RSP verification environment
RSPVERIF.DOC | RSP Design Verification Strategy
SPRITELIB.FM | Sprite Library Documentation
SPRITES.VGS | Introduction to Video Game Sprites
SRCTREE.FM | Introduction to the Src folder
SWARCH.FM | Software Architecture
SWARCH.PS | Postscript version of `SWARCH.FM`
SWBRINGUP.DOC | Operational Software Bringup Sequence - nothing much in this document
SYSDATAFLOW.FM | System Data Flow for both hardware and software
TESTVECTOR.TXT | Test vector development environment for the RCP
TEX_FIGS.FM | Texture Image Coordinate Space
TEXTURE_OUTLINE.DOC | Good overview of texturing on N64
TREEBUILD.DOC | Document that outlines how to use the SGI `pbuild` development environment to build the source tree
TREESETUP.SH | Small bash script for running the `inst` command to setup the dev environment
TUTORIAL.FM | Tutorial for making a N64 game
ULTRADBG.FM | FrameMaker version of `ULTRADBG.TXT`
ULTRADBG.TXT | Very interesting document on how to debug N64 code
VIDEO_MODES.TXT | Described the different video modes for both NTSC and PAL
YIELD.TXT | Notes on What Yield is (e.g `osSpTaskYield`)

One of the most interesting documents in this list that can be easily read is `SWARCH.PS` as it contains plenty of interesting information about how the software architecture works.

## HW - Hardware Documentation

Name | Description
---|---
HW/CYCLES
HW/PI_BLOCK.TXT
HW/HWSYMBOLS.FM
HW/CELL_TRACK.FM
HW/PI.FM
HW/VERILOG_HEADER_TEST
HW/BL.FM
HW/4300_PIN_LIST
HW/SHUFFLETABLE.FM
HW/CC.FM
HW/OS_VIDEO.SC
HW/CELL_NEEDS.FM
HW/TAB_FORMAT.DOC
HW/CSIM_INTRO.DOC
HW/EWCTR.FM
HW/TF.FM
HW/REGFILESPEC.SC
HW/TESTER_CRC.DOC
HW/RCP_BLOCK.FM
HW/AUDIO_DOC
HW/RAMSPEC.SC
HW/WIREDELAYS
HW/TRI_FORMAT.FM
HW/ASICSYN_QUICK_REFERENCE
HW/ATTRIBUTEBUFFER.FM
HW/RCP_IO.FM
HW/PROTOBOARD.SH
HW/CS.FM
HW/SI_SPEC.TXT
HW/TOOLTIPS
HW/PIN_LIST
HW/OS_DEV.SC

## VERIF
Hardware verification documentation files are located in this folder.

Name | Description
---|---
VERIF/RDPOVERALL
VERIF/HIGHLEVELTEST
VERIF/MS
VERIF/BL
VERIF/EW
VERIF/RDPVERIF.FM
VERIF/CS
VERIF/IO
VERIF/TM
VERIF/TC
VERIF/ST
VERIF/CV
VERIF/CC
VERIF/TF

## PICS
These are pictures in all sorts of different formats but it is currently unclear where they are used.

Name | Description
---|---
PICS/TENNIS1.CIF
PICS/PIC8.SGI
PICS/BALL.1
PICS/TEN1.MB
PICS/TEN1.BLK
PICS/LOGO_SGI.SMALL
PICS/INTL.RGB
PICS/BALL.2
PICS/BALL.3

 ## AUDIO

Name | Description
---|---
AUDIO/AUDIOLIBREF.DOC

## DEV
The documents this folder are intended to be released to developers when they obtain the SDK.

Name | Description
---|---
DEV/DK32.PS
DEV/BARKLEY.PS
DEV/TEMPLATE.DOC
DEV/PARTAUDIOTAB.DOC
DEV/OSCORE.DOC
DEV/TEXRECT.DOC
DEV/SPRITES.DOC
DEV/BLENDER.DOC
DEV/PARTPERFORMANCETAB.DOC
DEV/GAMESHOP.DOC
DEV/SOFTWAREBRINGUP.DOC
DEV/OSINTRO.DOC
DEV/MAKEFILE
DEV/INSTALLATION.DOC
DEV/PARTGETSTARTEDTAB.DOC
DEV/RDPSTATEMACHINE.DOC
DEV/DK32SF.PS
DEV/SCHEDULER.DOC
DEV/PERFORMANCETUNE.DOC
DEV/PRDEV.BOOK
DEV/ADVMEMORYMGMT.DOC
DEV/MUSICIANMAN.DOC
DEV/TEXTURE.DOC
DEV/RSPSTATEMACHINE.DOC
DEV/PRDEVTOC.DOC
DEV/IO.DOC
DEV/SPRITEUCODE.DOC
DEV/PARTGRAPHICSTAB.DOC
DEV/OVERVIEWRUNTIME.DOC
DEV/AUDIOFORMATS.DOC
DEV/PARTDEVTOOLSTAB.DOC
DEV/PARTINDEXTAB.DOC
DEV/PRDEVLOT.DOC
DEV/OVERVIEWCOMPILETIME.DOC
DEV/AUDIOTOOLS.DOC
DEV/PARTOVERVIEWTAB.DOC
DEV/MEMORYMGMT.DOC
DEV/AUDIOLIB.DOC
DEV/PERFORMANCETUNE.PS
DEV/AUDIOMEMORYUSAGE.DOC
DEV/STYLE_STRUCTURE.TXT
DEV/PRDEVIX.DOC
DEV/PARTOSTAB.DOC
DEV/OVERVIEWHARDWARE.DOC
DEV/PRDEVLOF.DOC
DEV/GFXUCODE.DOC
DEV/WALKAPP.DOC

### DEV/SCRIPTS

Name | Description
---|---
DEV/SCRIPTS/UPDATE.SCRIPT
DEV/SCRIPTS/PRINT_TO_PS.FM
DEV/SCRIPTS/PS.SCRIPT

## RSP

Name | Description
---|---
RSP/ADVANCED.DOC
RSP/RSPPROGGUIDE.BOOK
RSP/RSPPROGGUIDELOT.DOC
RSP/RSPPROGGUIDELOF.DOC
RSP/RSPPROGGUIDETOC.DOC
RSP/TITLEPAGE.DOC
RSP/MAKEFILE
RSP/RSPASM.DOC
RSP/RSPARCH.DOC
RSP/PS
RSP/PS/RSPREFCARD.PS
RSP/PS/AA.ZIP
RSP/PS/RSPPROGGUIDE.PS
RSP/OVERVIEW.DOC
RSP/APPENDIXA.DOC
RSP/RSPPROGGUIDEIX.DOC
RSP/RSPPROGGUIDELABELS.FM
RSP/RSPREFCARD.FM
RSP/COP0.DOC
RSP/VUINST.DOC

### RSP/SCRIPTS
RSP/SCRIPTS/UPDATE.SCRIPT
RSP/SCRIPTS/PRINT_TO_PS.FM
RSP/SCRIPTS/REFCARD.SCRIPT
RSP/SCRIPTS/PS.SCRIPT



## MSP_EXAMPLE

Name | Description
---|---
MSP_EXAMPLE/MSP_TRANSFORM.TXT
MSP_EXAMPLE/README
MSP_EXAMPLE/MSP_LIGHT.TXT
MSP_EXAMPLE/MSP_SETUP.TXT


## 4300 - The N64 CPU

Name | Description
---|---
4300/EXCP_HAND.DOC
4300/TEMP.DOC
4300/FMDICTIONARY
4300/GLOSSARY.DOC
4300/DIFFICE.DOC
4300/TESTMODE.DOC
4300/HISTORY.DOC
4300/SYSINTF.DOC
4300/BOOKLOF.DOC
4300/CACHE.DOC
4300/EXECUTION.DOC
4300/OVERVIEW.DOC
4300/JTAG.DOC
4300/ADDENDUM.DOC
4300/CP0.DOC.RECOVER
4300/ELECTRICAL.DOC
4300/FUNDAMENTAL.DOC
4300/INTRO.DOC
4300/BOOK
4300/BOOKLOT.DOC
4300/BLOCKWRITE.SUP
4300/DELAYEDREAD.MIF
4300/CLOCKS.DOC
4300/BLOCKWRITE.MIF
4300/DELAYEDREAD.SUP
4300/TITLE.DOC
4300/DIFF.DOC
4300/CP0.DOC
4300/BOOKTOC.DOC


---
# HW & HW2 Folders (Hardware Verilog Models)
Verilog is a Hardware Description Language used to Design and verify hardware. The HW and HW2 folders contain Verilog source code for the Nintendo 64 hardware, including the prototype development boards.

HW.old contains version 1.0 of the RCP Verilog source code presumably for archival reasons.

---
# INCLUDE Folder
This folder contains header files that are distributed with the official N64 SDK to developers plus some additional headers used for internal tools.

Files unique to this directory and not in the SDK are as follows:
* AudioTools.h
* DbgDefs.h
* DbgProto.h
* DriverD.h
* Em.h
* RSP_IPC.h
* TaskOff.C
* Trace.h
* Ultra64.h
* UltraHost.h
* verify.h

---
# IOSIM Folder (Input Output Simulation)
This folder contains code for Input/Output simulation for the Verilog models of the N64 hardware.

This seems to be mainly used for testing the prototype N64 hardware while still in development.

---
# KERN Folder
This folder contains the source code for the N64 development board kernel so that it can be used from the Indy workstation.

This consists of the following folders:
* INSTALL - source for `prinstall` which installs the SDK
* MASTER.D - Boot information for n64 development hardware board
* SYS - Header files for device driver
* U64 - Device driver source code for /dev/u64

---
# LIB Folder
This folder contains the source code for a variety of different libraries that are not distributed to developers.

* BRINGUPBOOT - contains code for `Boot` and `pif2Boot`, along with IPL4 code
* LIBAUDIO.SKIP - Old version of the Audio code found in libUltra
* LIBMPAUDIO - MPEG Audio library (only 2 files)
* LIBULTRAHOST - Code for functions such as `uhOpenGame` which communicate with the N64 development hardware
* ERROR - Seems to be a list of supported Error messages used in libUltra
* LIBIMAGE - converts `libimage.a` to `libimage.so`
* LIBRCPPLI - Code for `librcppli` - unknown purpose
* LIBVID - Huf Mpeg Video Library

---
# LIBULTRA Folder
LibUltra is the official Nintendo 64 development library sent out to all developers in compiled form as part of the official SDK. This folder contains the actual source code for this library.

The source code is split into a number of folders based on the specific task:
* AUDIO - all the Audio functions that start with `al` in the library
* GT - Turbo Graphics Utility functions such as `gtDumpTurbo`
* GU - all the Graphics functions that start with `gu` such as `guLookAtF`
* IO - Input/Output functions that normally start with `os` such as `osContReset`
* LIBC - Standard C library functions such as `sprintf`
* LIBULTRA - Config for creating retail hardware version of libUltra
* LIBULTRA_D - Config for creating retail hardware version of libUltra with debugging
* LIBULTRA_EM - Config for creating emulator version of libUltra
* LIBULTRA_I - Config for creating Indy Workstation version of libUltra
* LIBULTRA_ROM - Config for creating retail `libultra_rom.a` library
* LOG - Debug Functions for logging such as `osCreatelog`
* OS - Main operating system functions such as `osInitialize`
* RG - Memory region functions such as `osMalloc`
* RMON - Reality Monitor functions such as `osMalloc`
* SCHED - Scheduler functions such as `osCreateScheduler`
* SP - Sprite Library functions such as `spMove`

---
# Man Folder (Manual Pages)
This folder contains all the Manual pages (known as man pages in unix) for the entire N64 development kit.

If you ever wonder what a specific tool or function was used for in N64 development then this is the best place to search.

During install of the development kit, two versions were created of these files, one in the standard man page location and the other in PostScript file format intended for physically printing out at `/usr/src/PR/doc/ps`.

---
# RDPSIM & RDPSIM2 Folders (Reality Display Processor Simulation)
These folders contain two different versions of the Reality Display Processor Simulator. One for RCP 1.0 and the other for RCP 2.0. 

This was used to help software developers start coding their games while the hardware was still being developed and also as a way to test the hardware while it was being created.

---
# RSPASM & RSPASM1201 Folders (Reality Signal Processor Assembler)
This folder contains the source code for the Assembler used to compile `*.S` assembly files into RSP microcode (uCode).

To do this they have created a yacc parser grammar file called `PARSER.G.Y` and a Lexer called `PARSER.LX.L`.  Also included are a few AWK scripts to help the assembler with tasks such as wrapping the file in C code etc.

This is a fairly standard way to create an assembler or compiler and it doesn't take very long to understand the YACC grammar syntax and you can understand how it works.

The `RSPASM1201` is just a previous version of the `RSPASM` folder from the 1st of December (12/01) used for regression testing of the RSP.

---
# RSPCODE Folder (RSP uCode microcode)
This folder contains RSP source code (known as uCode or microcode) for performing a bunch of tasks on the RSP (Reality Signal Processor) chip.

These include:
* AUDIO - playing Sounds and Music using the RSP
* GRAPHICS - Graphics calculations such as Lighting etc 
* MANTEST - Manufacturing Test Vectors microcode
* MPAUDIO.DELETED - MPEG audio microcode (deprecated)
* MPVIDEO.DELETED - MPEG video microcode (deprecated)
* RSPBOOT - The Boot (Startup) code for the RSP
* VIDEO - MPEG video microcode
* grfx_ucode_src.zip - compressed version of the `GRAPHICS` folder

All the source code requires `RSPASM` to assemble into object files and then `RSP2ELF` to convert into an executable file format.


---
# RSPSIM Folder (Reality Signal Processor Simulation)
This folder contains the source code for a full simulator (emulator) of the RSP (Reality Signal Processor). This was created to allow developers to start writing RSP scripts while the hardware was still being developed.

There are a few executables that this source code builds which are:
* rsp - main simulation executable (CLI version)
* rspg - main simulation executable (GUI version)
* rsp_ops - utility to dump the disassembly of the command set

These tools helped 1st party developers (and a few lucky third parties) write and debug their RSP microcode on their workstation without constantly testing on the hardware.

{% include link-to-other-post.html post="/n64rsp" description="For more information about the RSP check out this page." %}

---
# TOOLS Folder
The Tools folder contains the source code of many of the tools distributed in the Nintendo 64 SDK.

There is a `Makefile` in this directory that can be used to build all of the tools at once.

## COMPUTILS 
The CompUtils folder contains code for a bunch of compiler tools such as `nld`, `gdis`, `gnm` and `r4300_check`.


## CONTROLLER 
The Controller folder contains example C code for a Unix (IRIX) program that can access a game controller. Probably useful for testing code before the N64 hardware was ready by connecting a controller directly to the IRIX workstation.

## CONV - multigen database conversion tools
Multigen was a tool for creating 3D models and environments on SGI IRIX workstations and so was ideal for creating 3D graphics for the N64.

In fact Nintendo had its own fork of the project specifically for the Nintendo 64 called `Ningen`.

{% include link-to-other-post.html post="/n64-3d-modelling" description="For more information about MultiGen and Ningen check out this post on 3D Modelling Software for the N64." %}

The CONV project is source code for a series of tools to convert Multigen models and textures to a format that can be run on the N64. These tools include:
* flt2c - Convert 3D models in FLT format to C code
* rgb2c - convert RGB textures to C code
* ppmquant - reduce colours in pixmap
* imscale - RGB image scale tool

## DATA - Verilog data tools
Not sure exactly what these tools are for but something to do with manipulating `.data` scripts for Verilog.

Tools included I n this package are:
* checkaudio - extracts and verifies audio from Verilog log file
* checkhex
* checkimage - extracts and verifies image from Verilog log file
* checkvideo - extracts image from `vi.tab` and compare to rgb file
* data2rdram 
* rdram2data 
* rdram2image 
* rdramgclr
* bump - creates bump map?
* dump2mem 
* gbi2mem

There seems to be a few tools from converting rdram to data and back but it is not clear what the purpose of this would be.

## DLPRINT - Print DisplayLists
This folder is the course code for a tool called `dlprint` that basically sits in a loop waiting for Display Lists to be passed to it and it will print them to the console, very useful for debugging.

So how exactly do we pass display lists to the tool? Well it seems to use a macro defined in `u64gio.h` called `DEV_U64_DATA` for this purpose and is set to the path: `/dev/u64_data`.

Notice that this is a UNIX device (in `/dev` folder) so it is used to communicate with the N64 development board that was inside the workstation.

It calls a function called `uhOpenGame` which is defined in the `LIBULTRAHOST` project in the file `OPENGAME.C`. It returns a file descriptor if it succeeds.

## DRIVERD - Driver Daemon startup utility
This folder contains the source code for a program called `driverd` which is used to setup the N64 emulation hardware. This program is a daemon so it runs in the background and should only ever be running one instance at any given time. 

It provides functionality to send commands to running games and read responses. You can use this functionality by using the IRIX device driver for u64. See the `dlprint` source code above for example code utilising this driver daemon.

## EMULATE - N64 Emulator by SGI
This folder contains the source code for the `emulate` executable and the library `libem.a`. The emulate tool takes in a rom image and a bunch of parameters whether to enable lighting and openGL. 

This tool is used as a High Level emulator running on the IRIX workstation and forks a process of each of the RSP and RDP simulators to handle the additional chips.

## GLOAD - Game Loader
This folder contains the source code for the command `gload` which is use for loading a ROM into the N64 development board inside the IRIX workstation. Unlike the emulate tool this actually runs the game on real N64 hardware.

## GPERF - Game Performance Profiler
The source code for the `gperf` tool is in this folder, the tool is used to help game developers optimise their code by profiling how much time is spent in each function.

## MAKEROM
This folder contains the source code for the `makerom` utility which converts a `specfile` into a ROM image that can be run on the hardware and also an ELF executable that can be run in the debugger (GVD).

## KDEBUG - Kernel Debugger
This folder contains the source code for the Kernel Debugger known as `kdebug`, this tool was used to send debugging information to and from the N64 development kit hardware inside the IRIX workstation. It used the `/dev/u64_kdebug` device driver for the communication. 

## GCORD - Code Re-order tool
This folder contains source code for two versions of a tool called `gcord`, which is similar to the Unix command `cord`. The purpose is to optimise the game code to fit into the machines cache more efficiently.

---
# usr and var folders
These 2 folders are just extracted versions from the INSTD.tar file at the root of the project, please see the section on that topic for more information.

---
# Glossary of Terms
There are a few terms used in the Oman archive that you may not be familiar with, here we try to list the most common ones.

## MSP - Media Display Processor 
MSP or Media Display Processor is a term thought up by SGI for their co-processor that purely handles graphic data. You probably know this for its later name as it became the Reality Display Processor when it became part of Project Reality (i.e the N64).

## MBI - Media Binary Interface 
The Media Binary interface is just a term that refers to the software interface for interacting with the Reality Co-Processor. 

---
# References
[^1]: [Why did N64 emulation hit a reef? : emulation](https://www.reddit.com/r/emulation/comments/6leedm/why_did_n64_emulation_hit_a_reef/) 
[^2]: [/vg/ - Emulation General /emugen/ - 4chan](https://yuki.la/vg/67102961)
[^3]: [inst - IRIX](https://nixdoc.net/man-pages/IRIX/man1/inst.1.html)
[^4]: [master - IRIX](http://nixdoc.net/man-pages/IRIX/man2/man4/master.4.html)
[^5]: [HW/SW CoSim](http://www.frobnotz.com/cosim/cosim.html)
[^6]: [cord(1) [osf1 man page]](https://www.unix.com/man-page/osf1/1/cord/)
[^7]: [fm2html](https://www.w3.org/Tools/fm2html.html)
