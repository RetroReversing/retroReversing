---
layout: post
tags: 
- ique
- n64
- sdk
title: iQue Player Software Development Kit
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/iQue SDK.jpg
permalink: /ique-sdk
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: iQue Player Software Development Kit
    url: #
recommend: 
- ique
- n64
editlink: /n64/iQueSDK.md
updatedAt: '2020-05-11'
twitterimage: https://www.retroreversing.com/public/N64/iQue SDK.jpg
---
The iQue Player was a sort of plug and play version of the Nintendo 64 system sold in China with its main aim to stop the rampant piracy in the market.

It is a mystery how someone managed to leak the iQue SDK as no 3rd party software was ever released for the platform, so it is quite impressive that someone managed to obtain and leak this Software Development Kit.

This post covers the contents from version 1.5 SDK which is available from `ultra64.ca` thanks to someone who managed to obtain and backup the CD. The SDK was built on top of the N64 SDK but ported to build for version 8/9 of Red Hat Linux instead of SGI workstations. 

---
# Bundled software (RPM installers)
The target development environment for the iQue SDK was a Red Hat Linux machine so the official SDk comes bundled with the following installers:
* binutils-mips-linux-2.9.5-3.i386.rpm
* egcs-mips-linux-1.1.2-4.i386.rpm
* libelf-0.8.2-2.i386.rpm
* libelf-devel-0.8.2-2.i386.rpm

These are all standard dependencies for cross-compiling to the MIPS architecture which was used for both the N64 and iQue player.

These is also an `install.sh` bash script which can be run to install the dependencioes along with running make in the models directory and setting up `per_user` folder. 

---
# Doc folder - Documentation
This folder only contains a few new documents that are exclusive to the iQue player, the rest are just copied directly from the Nintendo 64 Official SDK.

## AuxData
When Animal Forest (Animal Crossing) was to be ported to the platform the development team had a problem. One of the cool features of Animal Forest was that if you had a friend that also played the game you could visit their town if you had their save data on a Controller Pak (Memory Card).

The problem with porting this to the iQue is that Controller Pak's didn't exist on the system, so how would this feature be implemented for the iQue? The answer to this problem was added to the API in version 1.3 of the SDK, Auxiliary data or AuxData for short was an API that allowed storing this Controller Pak data on the iQue cartridge.

## GDB - iQue Player Debugger
First added in version 1.2 of the iQue SDK, the  iQue Player Debugger allows proper source level debugging to be performed through the USB interface. 

It is a fork of the very well known GNU Debugger (GDB) and consists of 3 main parts:
* ique_gdb - command line tool that the developer uses to set breakpoints etc
* GDB Stub - Runs on the iQue Player itself as is located in the debug version of libUltra called `libultra_d`
* mux - takes commands from ique_gdb via TCP and forwards it to the GDB Stub on the iQue via USB

Note that the debugger only supports code compiled for the  R4300 CPU and so does not help debug issues with the Reality Co-Processor code such as RSP microcode.

Also note that in order to debug a game, not only does it have to be compiled with the debug version of `libultra` but also needs to call the function `gdbInit` to initialise the GDB stub on the iQue.

## N64OnlineManuals52
This is the same documentation as could be found in version 5.2 of the Nintendo 64 SDK, as far as we know there has been no changes to it for iQue but someone should do a Folder Diff on this to make sure.

{% include link-to-other-post.html post="/n64-sdk" description="For the contents of the 5.2 Nintendo 64 SDK Documentation check out this post." %}

---
# Modules folder - Reality Debug Bridge Driver Module
The modules folder contains source code for the **Reality Debug Bridge** (RDB) which is a Linux driver used to communicate with the iQue Player, mainly for debugging.

A humorous reference to the 1933 movie `Duck soup` appears in the source code in the following line:
```c
#define DRIVER_AUTHOR "Rufus T. Firefly, rtf@freedonia.gov"
```

---
# per_user folder - Main SDK files
The `per_user` folder is exactly what it sounds like, these are installed on a user basis instead of globally on the system, so each user on the system can modify their installation to suit their own needs.

## include - C Header files for iQue SDK
Like pretty much all C/C++ Software development kits, the interface to the SDKs functions and structures are located in the Header files. The includes for the iQue SDK includes all the previous header files from the N64 SDK plus some added extras. 

Header File Name | Description
---|---
ansi.h | Standard Minix include: [www.doc.ic.ac.uk/~svb/oslab/Minix/usr/include/ansi.h](http://www.doc.ic.ac.uk/~svb/oslab/Minix/usr/include/ansi.h)
asm.h | Just includes `sys/asm.h`
assert.h | Defined the assert preprocessor macro for making sure values are correct
dl-machine.h | Machine-dependent ELF dynamic relocation inline functions (GNU C Library)
fpregdef.h | GNU C Library
fpu_control.h | Floating Point control Unit (GNU C Library)
gzip.h | Zlib wrapper for function `expand_gzip` to uncompress
libfb.h | FrameBuffer Nintendo Library header, defines functions such as `fbInit`
libmus_data.h | Music library data definition header file (Software Creations Ltd)
libmus.h |  Nintendo 64 Music Tools Programmers Library (Software Creations Ltd)
machine-gmon.h | Machine-specific calling sequence for `mcount' profiling function (GNU C Library)
regdef.h | Part of the GNU C Library
sgidefs.h | Part of the GNU C Library
stdlib.h | Standard functions such as `abort`
string.h | Standard string handling functions such as `strcmp`
tinymon.h | Constants for TinyMon (SGI)
ultra64.h | Includes all the N64 headers from the `./Pr` folder
ultrahost.h | Functions for the N64 Development kit board for SGI Indy

### ide - Interactive Diagnostic Environment headers
Initially we thought this would be related to an Integrated development environment, but alas its an acronym for what they called the **Interactive Diagnostic Environment**.

Header File Name | Description
---|---
ide/dbg_comm.h | Common debug functions such as `dgDmaReadMem` (SGI)
ide/diag.h | Common structure definitions and global variables for BOSTON diags
ide/ide.h | Data structures used by the Interactive Diagnostic Environment interpreter.

### sys - System headers 

Header File Name | Description
---|---
sys/asm.h | MIPS Assembly preprocessor macros (GNU C Library)
sys/fpregdef.h | MIPS Register preprocessor defines (GNU C Library)
sys/fpu.h | Floating Point control functions (SGI)
sys/inst.h | MIPS Instruction Format defines (MIPS)
sys/regdef.h | Symbolic register names for 32 bit ABI (GNU C Library)
sys/u64driver.h | N64 development kit driver for SGI Indy
sys/u64gio.h | N64 development kit Global IO defines (SGI)
sys/ucontext.h | System V/mips ABI compliant context switching support (GNU C Library)


### Make - Common include for Makefiles
Makefiles are used to build all the source code in the SDK and so instead of duplicating the same logic in many Makefiles, common logic is placed into a file in this directory.

Header File Name | Description
---|---
make/commondefs | Common definition such as where to find the compilers (SGI)
make/commonrules | Common Makefile Rules (SGI)
make/ismcommondefs | Common definitions for building ism idb's and images
make/ismcommonrules | Commonrules to build idb's and images for an ism
make/kcommondefs | contains basic common flags/locations for kernel builds (SGI)
make/kcommonrules | common rules for kernel makefiles (SGI)
make/PRdefs | Just links to PRdefs in the PR directory (SGI)
make/releasedefs | Version information for the current release
make/startversion | generate version number (and alpha number) in a standard fashion

Currently unsure what an ISM IDB is or what `gendist` does (Generated Probability Distribution Models?).

### nustd - Nintendo Ultra Standard Library includes
Unlike previous header files, this library is written by Nintendo themselves and thus has comments in Japanese.

Header File Name | Description
---|---
nustd/ctype.h | Common type functions such as `isdigit`
nustd/malloc.h | Standard Memory Allocation
nustd/math.h | Maths functions such as `floor`
nustd/mathdef.h | Maths definitions such as PI: `DVAL_PI`
nustd/setjmp.h | Defined two jump functions `setjmp` and `longjmp`

### PR - Project Reality (N64) Includes
This folder is part of the Official Nintendo 64 SDK and seems to be a fairly unmodified version of it. The main difference is the addition of files that start with the prefix `bb`.

Note that files with the prefix `Leo` refer to the Nintendo 64 Disk Drive (64DD) as Leo was its codename while in development.

Header File Name | Description
---|---
PR/abi.h | Audio Binary Interface (SGI)
PR/audiotools.h | defines used by the audiotools programs (SGI)
PR/bbfs_export.h | iQue Filesystem defines (BroadOn)
PR/bbfs.h | This file is blank (BroadOn)
PR/bbskapi_export.h | iQue SK Api (BroadOn)
PR/bbskapi.h | This file is blank (BroadOn)
PR/dbgdefs.h | Debug defines, just defined a few data types such as `TVid` (SGI)
PR/dbgproto.h | 
PR/driverd.h | Driver Daemon startup utility for Indy (SGI)
PR/em.h | Emulator definitions (SGI)
PR/gbi.h | Graphics Binary Interface (SGI)
PR/gs2dex.h | Header file for S2DEX microcode (Nintendo)
PR/gt.h | Header for the TURBO 3D graphics microcode (SGI)
PR/gtoff.h | TURBO 3D State defines (Automatically generated) (SGI)
PR/gu.h | Graphics API functions such as `guLoadTextureBlockMipMap`
PR/gzsort.h | Header for ZSort microcode(Nintendo)
PR/leo.h | Standard 64DD functions (Nintendo)
PR/leoappli.h | Low level 64DD defines (ALPS Electric Co)
PR/leosp.h | A few extra 64DD defines
PR/libaudio.h | Audio Library defines (SGI)
PR/mbi.h | Media Binary Interface, basically include that GBI and ABI (SGI)
PR/n_libaudio_s_to_n.h | Audio macro functions such as `alSynAddPlayer`
PR/n_libaudio.h | 
PR/os_ai.h | 
PR/os_bb_export.h | 
PR/os_bb.h | 
PR/os_bbcard.h | 
PR/os_bbexec_export.h | 
PR/os_bbexec.h | 
PR/os_bbfs_export.h | 
PR/os_bbfs.h | 
PR/os_cache.h | 
PR/os_cont.h | 
PR/os_convert.h | 
PR/os_debug.h | 
PR/os_eeprom.h | 
PR/os_error.h | 
PR/os_exception.h | 
PR/os_flash.h | 
PR/os_gbpak.h | 
PR/os_gio.h | 
PR/os_host.h | 
PR/os_internal_debug.h | 
PR/os_internal_error.h | 
PR/os_internal_exception.h | 
PR/os_internal_gio.h | 
PR/os_internal_host.h | 
PR/os_internal_reg.h | 
PR/os_internal_rsp.h | 
PR/os_internal_si.h | 
PR/os_internal_thread.h | 
PR/os_internal_tlb.h | 
PR/os_internal.h | 
PR/os_libc.h | 
PR/os_message.h | 
PR/os_motor.h | 
PR/os_pfs.h | 
PR/os_pi.h | 
PR/os_rdp.h | 
PR/os_reg.h | 
PR/os_rsp.h | 
PR/os_si.h | 
PR/os_system.h | 
PR/os_thread.h | 
PR/os_time.h | 
PR/os_tlb.h | 
PR/os_usb.h | 
PR/os_version.h | 
PR/os_vi.h | 
PR/os_voice.h | 
PR/os.h | 
PR/PRimage.h | 
PR/R4300.h | 
PR/ramrom.h | 
PR/rcp.h | 
PR/rdb.h | 
PR/region.h | 
PR/rmon.h | 
PR/rsp_ipc.h | 
PR/rsp.h | 
PR/sched.h | 
PR/sp.h | 
PR/sptask.h | 
PR/sptaskoff.h | 
PR/trace.h | 
PR/ucode_debug.h | 
PR/ucode.h | 
PR/ultraerror.h | 
PR/ultralog.h | 
PR/ultratypes.h | 
PR/uportals.h | 
PR/verify.h | 

The SK API for iQue was used to allow games and software to interact with the Secure Kernel of the iQue, the website iQueBrew has an excellent page with all the known Secure Kernel calls [SKC - iQueBrew](http://www.iquebrew.org/index.php?title=SKC).

---
## lib folder - Compiled Library files for iQue
The lib folder unsurprisingly contains static libraries that can be linked with iQue applications.

Not sure why there is 2 versions of the Music libraries, some have the prefix `libn_` and the others are just `lib`.

Library File Name | Description
---|---
libcrypto.a | Encryption library for iQue Player content
libfb.a | Framebuffer library by Nintendo with functions such as `fbPixel`
libgcc.a | Standard GNU GCC library
libmus_d.a | Music library data definition library
libmus.a | Nintendo 64 Music Tools Programmers Library
libn_audio.a | Nintendo Audio Library
libn_mus_d.a | Music library data definition library
libn_mus.a | Nintendo 64 Music Tools Programmers Library
libnustd.a | Nintendo Ultra Standard library (Source for this is available in the N64 SDK)
libultra_d.a | Debug version of the Ultra64 Library
libultra_rom.a | Retail version of the Ultra64 Library
libultra.a | Standard version of Ultra64 Library
libz.a | Zlib compression library

### PR - Project reality (N64) Libraries
This folder contains the standard pre-compiled libraries that were distributed as part of the official Nintendo 64 SDK.

Library File Name | Description
---|---
PR/aspMain.o | 
PR/Boot | 
PR/convert.o | 
PR/error.fmt | 
PR/font | 
PR/gspF3DEX.dram.o | 
PR/gspF3DEX.fifo.o | 
PR/gspF3DEX.NoN.fifo.o | 
PR/gspF3DEX2.fifo.o | 
PR/gspF3DEX2.NoN.fifo.o | 
PR/gspF3DEX2.NoN.xbus.o | 
PR/gspF3DEX2.Rej.fifo.o | 
PR/gspF3DEX2.Rej.xbus.o | 
PR/gspF3DEX2.xbus.o | 
PR/gspF3DEX2d.fifo.o | 
PR/gspF3DEX2d.NoN.fifo.o | 
PR/gspF3DEX2d.NoN.xbus.o | 
PR/gspF3DEX2d.Rej.fifo.o | 
PR/gspF3DEX2d.Rej.xbus.o | 
PR/gspF3DEX2d.xbus.o | 
PR/gspF3DLP.Rej.fifo.o | 
PR/gspF3DLX.fifo.o | 
PR/gspF3DLX.FlatFog.fifo.o | 
PR/gspF3DLX.NoN.fifo.o | 
PR/gspF3DLX.Rej.fifo.o | 
PR/gspF3DLX2.Rej.fifo.o | 
PR/gspF3DLX2.Rej.xbus.o | 
PR/gspF3DLX2d.Rej.fifo.o | 
PR/gspF3DLX2d.Rej.xbus.o | 
PR/gspF3DNCom.fifo.o | 
PR/gspF3DNCom.Rej.fifo.o | 
PR/gspF3DNoN.dram.o | 
PR/gspF3DNoN.fifo.o | 
PR/gspF3DNoN.o | 
PR/gspF3DPEX.fifo.o | 
PR/gspF3DPEX.NoN.fifo.o | 
PR/gspF3DPLP.Rej.fifo.o | 
PR/gspF3DPLX.fifo.o | 
PR/gspF3DPLX.NoN.fifo.o | 
PR/gspF3DPLX.Rej.fifo.o | 
PR/gspF3DZEX.fifo.o | 
PR/gspF3DZEX.NoN.fifo.o | 
PR/gspF3DZLP.Rej.fifo.o | 
PR/gspF3DZLX.fifo.o | 
PR/gspF3DZLX.NoN.fifo.o | 
PR/gspF3DZLX.Rej.fifo.o | 
PR/gspFast3D.dram.o | 
PR/gspFast3D.fifo.o | 
PR/gspFast3D.o | 
PR/gspL3DEX.fifo.o | 
PR/gspL3DEX2.fifo.o | 
PR/gspL3DEX2.xbus.o | 
PR/gspL3DEX2d.fifo.o | 
PR/gspL3DEX2d.xbus.o | 
PR/gspL3DPEX.fifo.o | 
PR/gspL3DZEX.fifo.o | 
PR/gspLine3D.dram.o | 
PR/gspLine3D.fifo.o | 
PR/gspLine3D.o | 
PR/gspS2DEX.fifo_d.o | 
PR/gspS2DEX.fifo.o | 
PR/gspS2DEX2.fifo.o | 
PR/gspS2DEX2.xbus.o | 
PR/gspS2DEX2d.fifo.o | 
PR/gspS2DEX2d.xbus.o | 
PR/gspSprite2D.dram.o | 
PR/gspSprite2D.fifo.o | 
PR/gspSprite2D.o | 
PR/gspTurbo3D.dram.o | 
PR/gspTurbo3D.fifo.o | 
PR/gspTurbo3D.o | 
PR/gspZSort.fifo.o | 
PR/gspZSort.pl.fifo.o | 
PR/ipl4prom | 
PR/ipl4purom | 
PR/ipl4rom | 
PR/libdg.a | 
PR/libpli.a | 
PR/librcppli.a | 
PR/n_aspMain.o | 
PR/pif2Boot | 
PR/rcppli.tab | 
PR/romheader | 
PR/rspboot.o | 
PR/table.o | 
PR/tspManTest1.dram.o | 
PR/tspManTest1.o | 

---
## sbin - Command line tools
The sbin directory contains pre-build command line tools that are useful for developers when writing iQue applications. Many of these are based on the N64 version of the same name.

Note that if you are interest in the source code for any of these tools then you can find it in "BroadOn Leak".

{% include link-to-other-post.html post="/broadon-archive" description="For more information about the BroadOn N64 Leak." %}

Tool name | Description
---|---
a2b | Simple program to convert 64-bit words in ASCII to binary
aes_encode | Encrypt binary content with AES encryption
aesrom | Encrypts a N64 rom into romname.aes
asccode | Kanji Ascii Code converter
b2a | Opposite of a2b, converts from binary to ASCII
b2mem |  Converts binary file into ASCII verilog memory file
bincode | Kanji Binary Code converter
bincut | Cuts out X number of bytes from a binary file at a certain offset
blink | This program changes the color of a specified primitive to magenta in order to make it stand out in the display.
buildtask | simple linker for RSP tasks. It concatenates objects compiled by rspasm, as well as their data segments, and builds an object table in DMEM
bump | Bump map generator
byte2lba | Convert Bytes to Leo (64DD)
calcncc | Calculate Nintendo Check Code
cglue | Glue together 3 images into a color image
checkaudio | extracts and verifies audio from Verilog log file
checkhex | 
checkimage |  extracts and verifies image from Verilog log file
checkvideo | extracts image from `vi.tab` and compare to rgb file
copySimResultsToArchive | Archives the resulting simulator files
copyToArchive | copies each file (from the list of .rdp files specified as incoming arguments) to similarly named (mem,rdram,rdp) files with a .archive suffix tacked on.
cpp | GNU C++ compiler for MIPS
cscale | Multiply or divide the colors in an image by a color vector
ctrldesc | 
d2elf | Create a debug ELF file
dat2bin | Convert hex data file into binary file
data2rdram | tool to expand .data scripts into .rdram files
devsh | send commands to remote monitor and receive responses
do_wave | Bash script for converting Wave tabular files to Qsim scripts
dump2mem | 
ecs_gen | 
filter | RDP filter simulator
flat_shade_dl | 
flt2c | MultiGen `.flt` database to Ultra 64 graphics data-structure
fp | 
gbi2mem | 
gen_rdram | 
iclr | clear the "incore" area of image file so cmp on 2 images works
idf | 
imgsize | 
imscale | RGB image scale tool
iplload | 
iplpload | 
iplpuload | 
ique_gdb | GDb Debugger for iQue Player
irix-install | 
irix-ipcrm | 
lba2byte | 
lst2imem | 
main2image | 
main2rdp | 
make_movie | 
makemask | 
makerom | 
mdump | 
merrg | 
mips332 | inplace rewrite the elf header of a 32-bit MSB mips binary (Linux)
mkisprite | 
mksprite | 
mksprite32 | 
mksprite8 | 
mkspriteia | 
mkspriteyuv | 
monitor | 
mux | Middle man between GDB client and server 
oneband | Extract  a single band of a color image
plog | Multigen database conversion tool
plotstt | 
ppmquant | reduce colours in pixmap
printvec | 
publish | 
ramstart | 
raw2image | 
rdp2read | 
rdram2data | 
rdram2image | 
rdram2new | 
rdram2rdp | 
rdramg | 
rdramgclr | 
rdramPatch | 
remove_comments | 
rgb2c | Convert RGB image to C code
romaddress | 
romalign | 
romdump | 
romfill | 
rommap | Perl script to get a symbol map of the rom
rommd | Sets the MetaData for the ROM such as how many Controller Paks
rsp | RSP Simulator
rsp_ops | program that dumps the disassembly table
rsp2elf | Converts RSP compiled objects to ELF executables
rspasm | RSP microcode assembler
setup | a short test program to test the polygon setup algorithm for the RSP
subimg | Extract a region from an image (Paul Haeberli - 1984)
symedit | Edit debug symbols in ELF executable
tab2sim | convert tabular file to Compass Qsim script
tab2vmem | convert tabular file to Verilog memory driver
tab2wvs | convert tabular file to Compass Wave driver
vparse | Parse verilog tab files
vsig | Print vertical signals names as comments in tab file
whohas | Bash script to tell you who may have a file in modify state (Version control)
xnet | Translates netlist information, along with a configuration file into an executive main function (either C or Verilog)

