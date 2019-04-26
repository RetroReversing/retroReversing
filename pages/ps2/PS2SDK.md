---
layout: post
tags: 
- ps2
- symbols
- sdk
title: PS2 Official Software Development Kit (SDK)
thumbnail: /public/consoles/Sony PlayStation 2.png
permalink: /ps2-official-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Ps2
    url: /ps2
  - name: PS2 Official Software Development Kit (SDK)
    url: #
recommend: ps2
editlink: /ps2/PS2SDK.md
references:
  - assemblergames
---

## PS2 Official Software development Kit by Sony

Last known version: **3.1.0** [^1]
First version: **0.3.0** [^2]

Updates were provided to licenced playstation developers on ps2-pro.com, where the update contained just the files that have changed and could be dropped in place to overwrite the previous versions.

### SDK Versions


SDK Version | Publicly Leaked? | Notes
--- | --- | ---
0.3.0 | No | 
0.4.0 | No | 
0.5.0 | No | 
1.0 | No | **Sep 1999**



### How to check version of SDK in use
You are really just looking for a string of the form "PSII* 2720" where the * denotes text that can change based on which library you search.

You can search for Games that match a specific SDK version by running the following bash command:
```bash
find . -name "MCMAN.IRX" -print0 | xargs -0 strings | grep -Hn "   272"
```
Replace 2720 with the version number you want, e.g 272 is 2.7.2

# Running PS2 Official SDK under 64-bit ubuntu Linux
By default the 64-bit version of ubuntu does come with the 32bit libraries that the SDK binaries have been linked to. 
So when you try to run any of the binaries it gives an error such as:
```
iop-gcc: command not found
```

In order to fix this you need to run the following commands:
```
sudo apt-get update; sudo apt-get upgrade; sudo apt-get install ia32-libs
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install lib32z1
```

# SDK Contents

## Emotion Engine (EE) Toolchain
The Emotion Engine Toolchain was developed by Cygnus based on GNUPro and has support for running the toolchain on windows, linux and Solaris.

Tool | Description
--- | ---
ee-gcc | C compiler modified from GNU GCC
ee-g++ | C++ GNU compiler
ee-as | GNU Assembler
dvp-elf-as | GNU Assembler for DVP (Vector unit Assembler?)
ee-ld | GNU Linker (Link object files together to create libraries)
ee-gbd | Standard GNU Debugger
ee-run | Simulator
sky.ld | Script that calls the Linker?
ee-addr2line | Get filenames and lines numbers from program addresses
ee-ar | GNU Archive handler
ee-c++filt | Demangle C++ symbols
ee-nm | print the list of symbols contained in an object file
ee-objcopy | Copy object files
ee-objdump | Standard GNU object dumper to display information about an object
ee-ranlib | List the index of an archive
ee-size | Display the size of sections in a file
ee-strings | Standard SNU strings utility to get strings from binary files
ee-strip | Strip an executable to remove debugging symbols

### Debugging
One important point is that generating debug symbols doesn't ever modify the code generation but there are some optimisation flags that can make debugging more difficult.


### Emotion Engine Simulator
The simulator was released before developers got access to the hardware [^3], it is basically an emulator which virtualizes the hardware of the emotion engine on a standard pc. This emulator was not cycle-accurate so was not guaranteed to produce the same result as running on the physical hardware.

## EENet Library
## EyeToy® Vision Library
## HTTPS Library
## IOP Toolchain
## Libcheck Library
## Poweroff Processing Libraries
## Runtime Libraries 3.0.3
## Runtime Library Docs
## Sample Code
## Sample Data
## SIF DMA Package
## USB PSP™ Communications Library
## Demo Disc SDK
## Shell System Package

---

# SDK Software

## HDD Checker

## MultiStream Package

## Network Analysis Suite

## Performance Analysis Package

## QA Tool

## Sulpha Sound Utility

## VCL

## VRAMSnap

## VUEdit

## YNCF Tool

# Misc

## Legend of terms

Name | Meaning
--- | ---
DECI2 | Protocol for PC to communicate with PS2 TOOL
DMAC | ...
DMA | Direct Memory Access?
DNAS | Online library for..
DSNet | Suite of tools for debugging using a PS2 TOOL
DVP | D* Vector Processor?
GIF | Graphics Interface
GS | Graphics Synthesiser
IOP | Input/Output Processor
SIF | Serial Interface
SPR | Scratch Pad RAM
SPU | Sound Processing Unit
TRC | Technical Requirements Checklist
VIF0 | Vector Unit 0 Interface
VIF1 | Vector Unit 1 Interface
VU0 | Vector Unit 0
VU1 | Vector Unit 1



# References
[^1]: https://assemblergames.com/threads/sdk-and-tools-versions-information.35040/
[^2]: https://assemblergames.com/threads/request-ps2-sdk-3-0-0.64540/
[^3]: http://redhatpartnerweb.com/about/presscenter/cygnus_1999/sony2.html
