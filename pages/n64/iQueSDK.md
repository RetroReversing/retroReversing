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

## GDB - GNU Debugger
First added in version 1.2 of the iQue SDK, the GNU Debugger allows proper source level debugging to be performed through the USB interface. 

## N64OnlineManuals52
This is the same documentation as could be found in version 5.2 of the Nintendo 64 SDK, as far as we know there has been no changes to it for iQue but someone should do a Folder Diff on this to make sure.

{% include link-to-other-post.html post="/n64-sdk" description="For the contents of the 5.2 Nintendo 64 SDK Documentation check out this post." %}

---
# per_user folder
The `per_user` folder is exactly what it sounds like, these are installed on a user basis instead of globally on the system, so each user on the system can modify their installation to suit their own needs.

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
