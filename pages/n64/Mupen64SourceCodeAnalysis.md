---
layout: post
tags: 
- n64
title: Mupen64+ Emulator Source Code Analysis
image: /public/N64/N64Mupen64SourceCodeAnalysis.jpg
thumbnail: /public/consoles/Nintendo 64.png
permalink: /mupen64sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Mupen64+ Emulator Source Code Analysis
    url: #
recommend: n64
editlink: /n64/Mupen64SourceCodeAnalysis.md
---

# Introduction
The Mupen64+ emulator is one of the best open source emulators available for the Nintendo 64, so if you are interested in emulator development or how the Nintendo 64 works then this post should help.

This post will be a sort of `Cliff Notes` to give an overview of how the emulators source code is laid out and should give you an idea on where to start looking for what you are interested in.

# Compiling the Emulator
The first step is to compile the emulator on your system, this will allow you to experiment by changing variables and functions to help you better understand the emulator.

## Building for MacOSX
Building the emulator in MacOSX is fairly straightforward as long as you have all the dependencies installed.

### First install dependencies in Brew
```bash
brew install pkg-config libpng sdl freetype nasm binutils
```

### Run Make
This step is common among all the Operating systems, the `DEBUGGER=1` parameter is used to enable debug mode so that you can step through the N64 MIPS assembly instructions one at a time and even supports creating basic breakpoints.
```
make all DEBUGGER=1
```

### Common Errors when building
This section is a reference to be used only when you have a problem compiling the emulator, otherwise it can be ignored.

#### 'cmath' file not found
If you get this error you will need to modify the MakeFile and change -mmacosx-version-min= in both places to the version of your OS (e.g 10.14)

#### unrecognised output format `macho64'
If you get the following error:
```
nasm: fatal: unrecognised output format `macho64' - use -hf for a list
```
Then make sure to install a new version of nasm, as it is most likely out-of-date:
```
brew install nasm 
```

#### 'dis-asm.h' file not found
If you get an error about `dis-asm.h` such as:
```
../../src/debugger/dbg_memory.c:37:10: fatal error: 'dis-asm.h' file not found
#include <dis-asm.h>
```
You need to install `bin-utils` via brew and then you need to run the following in your current bash session:
```
export LDFLAGS="-L/usr/local/opt/binutils/lib"
 export CPPFLAGS="-I/usr/local/opt/binutils/include"
```

So We get further but now an new error probably due to the version of binutils:
```
../../src/debugger/dbg_memory.c:113:19: error: use of undeclared identifier 'print_insn_i386'; did you mean
      'print_insn_m32c'?
    disassemble = print_insn_i386;
```
To fix this I simply added this to the top of the file called `dbg_memory.c`:
```
#define USE_LIBOPCODES_GE_2_29 1
```

#### Undefined symbols Linker errors
If you get lots of Undefined symbol linker errors such as the following:

```bash
Undefined symbols for architecture x86_64:
  "_htab_hash_pointer", referenced from:
      _xcoff_archive_info_hash in libbfd.a(xcofflink.o)
  "_libintl_dngettext", referenced from:
      _ppc64_elf_build_stubs in libbfd.a(elf64-ppc.o)
  "_xexit", referenced from:
      _spu_elf_final_link in libbfd.a(elf32-spu.o)
  "_hex_init", referenced from:
      _ihex_object_p in libbfd.a(ihex.o)
      _srec_object_p in libbfd.a(srec.o)
      _srec_mkobject in libbfd.a(srec.o)
      _symbolsrec_object_p in libbfd.a(srec.o)
      _tekhex_init in libbfd.a(tekhex.o)
      _verilog_mkobject in libbfd.a(verilog.o)
  "__hex_value", referenced from:
      _ihex_object_p in libbfd.a(ihex.o)
      _ihex_get_section_contents in libbfd.a(ihex.o)
      _srec_object_p in libbfd.a(srec.o)
      _srec_get_section_contents in libbfd.a(srec.o)
      _srec_scan in libbfd.a(srec.o)
      _tekhex_object_p in libbfd.a(tekhex.o)
      _getvalue in libbfd.a(tekhex.o)
      ...
  ```

This is due to brew not installing libiberty.a library file. I found it quite difficult to fix using brew so I installed macports and ran:
```bash
sudo port install x86_64-elf-binutils
```
The look in the folder: `/opt/local/x86_64-elf/host/lib` and you will find a libiberty.a file, copy this across to: `/usr/local/opt/binutils/lib`
```bash
cp /usr/local/opt/binutils/lib/libiberty.a /usr/local/opt/binutils/lib
```

Ok now we have a lot less linker errors we now just need to find libintl.

Now finally change the Makefile on line 643 to add `-L/usr/local/opt/binutils/lib -liberty -lintl -liconv` so it should look like:
```
ifeq ($(DEBUGGER), 1)
  SOURCE += \
    $(SRCDIR)/debugger/dbg_debugger.c \
    $(SRCDIR)/debugger/dbg_decoder.c \
    $(SRCDIR)/debugger/dbg_memory.c \
    $(SRCDIR)/debugger/dbg_breakpoints.c
  LDLIBS += -lopcodes -lbfd -L/usr/local/opt/binutils/lib -liberty -lintl -liconv

```

if you get the following error:
```
ld: library not found for -lintl
```
Then run:
```
brew link gettext --force
```

So Finally we have a `libmupen64plus.dylib` with the  debugger enabled! Now what? How do we use it?! Well first we need a few plugins to be compiled to be able to render graphics.

### Compiling Glitch64
In order to compile Glitch64 you will need to make sure you have boost installed, which you can do via brew like so:
```
brew install boost
```

Also I had to change line 137 of MakeFile to match the following:
```
CFLAGS += $(OPTFLAGS) $(WARNFLAGS) -ffast-math -fno-strict-aliasing -fvisibility=hidden -I../../src -I../../src/Glitch64/inc -DGCC -I/usr/local/Cellar/boost/1.67.0_1/include
```

Now Glitch64 should be able to be compiled with `make`.

---
### Building the Console Application
Finally the Console Application is the last piece of the puzzle, this is what will actually execute the emulator, so when this is built we will be able to run games!

You will need to point APIDIR to the location of the core source code you checked out earlier.
```
make APIDIR=/../mupen64plus-core-master/src/api DEBUG=1 all
```
The console application is the simplest frontend for the emulator and it also has a very basic debugger in it.

Now copy over the plugins that you have built previously such as `glide64`.

---
# Running the emulator
Now the run the emulator! The emulator comes with an example public domain rom file called `example.v64`, this ROM only seems to work with glide64 graphics for me. You can run it like so:
```
./mupen64plus --emumode 0 --corelib ./libmupen64plus.dylib --gfx ./mupen64plus-video-glide64mk2.dylib ./example.v64
```

## Running With Debugger
You can run the emulator with the debugger enabled by passing a few extra parameters like so:
```
./mupen64plus --corelib ./libmupen64plus.dylib --gfx ./mupen64plus-video-glide64mk2.dylib --emumode 0 --noosd --verbose --debug ./example.v64
```

In debugger mode PC starts at 0xA4000040 (2751463488) with:
```
mtc0 $zero,C0_CAUSE
```
---

# Mupen64+ Features

## GlideHQ (Texture upscale)
GlideHQ is a texture upscale for the Glide graphics emulator plugin. This uses a number of different upscaling algorithms to make textures look higher quality than the what the original hardware supported.

GlideHq comes as part of the Mupen64+ Glide64 source code.

---

# Source code analysis

## Device folder
Contains most of the emulator logic for the N64.

### r4300_core
The r4300 is the main CPU used in the Nintendo64, it is based on the R4200 by MIPS Technologies Inc. [R4200 - Wikipedia](https://en.wikipedia.org/wiki/R4200)

The main implementation of the cpu is contained in the `r4300_core` folder along with implementations of the 3 co-processors (cp0, cp1 and cp2).

More information about the CPU can be found here:
[N64 Programming/CPU overview - Wikibooks, open books for an open world](https://en.wikibooks.org/wiki/N64_Programming/CPU_overview)

### rdp_core
### rsp_core
### ai_controller
### mi_controller
### pi_controller
### ri_controller
### si_controller
### vi_controller
### pif;
### rdram
### memory

### game_controller 
### biopak 
### mempak
### rumblepak
### transferpak
### gb_cart

### cart
* cart_rom.c - cartridge stuff like DMA
* sram.c/eeprom.c/flashram.c - saving stuff with the Controller Pak (list of games that use this: http://micro-64.com/database/gamesave.shtml )

IPL2 is the PIF ROM?
IPL3 is the first 1MB of CART?

### dd_controller
