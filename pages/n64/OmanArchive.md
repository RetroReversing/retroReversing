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
updatedAt: 25th April 2020
---

The "Oman Archive" was a leak of Nintendo Technical documents from a source inside SGI in late 1999. It was uploaded to the internet under the name `oman.rar` but has since been repackaged into multiple other archive formats.

Even the origin of the name itself is clouded in mystery with some saying it was leaked by a person called Oman and others disagreeing, but very little information is known about the leak.

It is believed that the archive kickstarted the N64 Emulation development scene and that without it we wouldn't have made much of the early progress in figuring out how the hardware worked [^1].

However the problem with the Oman archive is that the contents were obtained illegally and thus any development based on the stolen content would be liable for copyright infringement.

Thus many talented N64 emulator authors refuse to use the material and instead reverse engineer the inner working of the system themselves. This prevents the code (and the resulting binary) from any patent/copyright/trademark violations, but requires a lot of time and patience. So we are thankful for all these dedicated developers, helping maintain the codebase in a way that prevents distribution of N64 emulators from becoming illegal [^2].

If you plan to do any N64 development then stay as far away from the Oman Archive as you can, including leaving this page...

However historically these documents are very interesting and preservation of the material is vital. So even if the originally material disappears from the internet forever (unlikely but not impossible) lets at least clear up a few misconceptions by asking: What exactly IS in the Oman archive?

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
The folder `var/sysgen/master.d` on an IRIX system is used by the `lboot` command to define the master files for the bootable kernel. In this case it just contains one file called `u64` for the show N64 SDK.

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
# HW & HW2 Folders (Hardware Verilog Models)
Verilog is a Hardware Description Language used to Design and verify hardware. The HW and HW2 folders contain Verilog descriptions for the Nintendo 64 hardware, including the prototype development boards.


---
# Man Folder (Manual Pages)
This folder contains all the Manual pages (known as man pages in unix) for the entire N64 development kit.

If you ever wonder what a specific tool or function was used for in N64 development then this is the best place to search.

During install of the development kit, two versions were created of these files, one in the standard man page location and the other in PostScript file format intended for physically printing out.

---
# RDPSIM & RDPSIM2 Folders (Reality Display Processor Simulation)
These folders contain two slightly different versions of the Reality Display Processor Simulator. This was used to help software developers start coding their games while the hardware was still being developed and also as a way to test the hardware while it was being created.

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
# References
[^1]: [Why did N64 emulation hit a reef? : emulation](https://www.reddit.com/r/emulation/comments/6leedm/why_did_n64_emulation_hit_a_reef/) 
[^2]: [/vg/ - Emulation General /emugen/ - 4chan](https://yuki.la/vg/67102961)
[^3]: [inst - IRIX](https://nixdoc.net/man-pages/IRIX/man1/inst.1.html)
[^4]: [master - IRIX](http://nixdoc.net/man-pages/IRIX/man2/man4/master.4.html)
[^5]: [HW/SW CoSim](http://www.frobnotz.com/cosim/cosim.html)
[^6]: [cord(1) [osf1 man page]](https://www.unix.com/man-page/osf1/1/cord/)
