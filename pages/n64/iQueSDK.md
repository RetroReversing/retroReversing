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
updatedAt: 10th May 2020
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
ansi.h | 
asm.h | 
assert.h | 
dl-machine.h | 
fpregdef.h | 
fpu_control.h | 
gzip.h | 
libfb.h | 
libmus_data.h | 
libmus.h | 
machine-gmon.h | 
regdef.h | 
sgidefs.h | 
stdlib.h | 
string.h | 
tinymon.h | 
ultra64.h | 
ultrahost.h |

### ide - IDE headers

Header File Name | Description
---|---
ide/dbg_comm.h | 
ide/diag.h | 
ide/ide.h | 

### sys - System headers 

Header File Name | Description
---|---
sys/asm.h | 
sys/fpregdef.h | 
sys/fpu.h | 
sys/inst.h | 
sys/regdef.h | 
sys/u64driver.h | 
sys/u64gio.h | 
sys/ucontext.h | 


### Make - Common include for Makefiles

Header File Name | Description
---|---
make/commondefs | 
make/commonrules | 
make/ismcommondefs | 
make/ismcommonrules | 
make/kcommondefs | 
make/kcommonrules | 
make/PRdefs | 
make/releasedefs | 
make/startversion | 

### nustd - Nintendo Ultra Standard Library includes

Header File Name | Description
---|---
nustd/ctype.h | 
nustd/malloc.h | 
nustd/math.h | 
nustd/mathdef.h | 
nustd/setjmp.h | 

### PR - Project Reality (N64) Includes

Header File Name | Description
---|---
PR/abi.h | 
PR/audiotools.h | 
PR/bbfs_export.h | 
PR/bbfs.h | 
PR/bbskapi_export.h | 
PR/bbskapi.h | 
PR/dbgdefs.h | 
PR/dbgproto.h | 
PR/driverd.h | 
PR/em.h | 
PR/gbi.h | 
PR/gs2dex.h | 
PR/gt.h | 
PR/gtoff.h | 
PR/gu.h | 
PR/gzsort.h | 
PR/leo.h | 
PR/leoappli.h | 
PR/leosp.h | 
PR/libaudio.h | 
PR/mbi.h | 
PR/n_libaudio_s_to_n.h | 
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

---
## lib folder - Compiled Library files for iQue

Library File Name | Description
---|---
libcrypto.a | 
libfb.a | 
libgcc.a | 
libmus_d.a | 
libmus.a | 
libn_audio.a | 
libn_mus_d.a | 
libn_mus.a | 
libnustd.a | Nintendo Ultra Standard library (Source for this is available in the N64 SDK)
libultra_d.a | 
libultra_rom.a | 
libultra.a | 
libz.a | Zlib compression library

### PR - Project reality (N64) Libraries

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

