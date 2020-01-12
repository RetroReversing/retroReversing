---
layout: post
tags: 
- ps2
- sdk
title: Static Libraries (.A) for Playstation 2 Emotion Engine
thumbnail: /public/consoles/Sony PlayStation 2.png
image: https://www.retroreversing.com/public/images/ps2/PS2 Emotion Engine Static Libraries.jpg
twitterimage: https://www.retroreversing.com/public/images/ps2/PS2 Emotion Engine Static Libraries.jpg
permalink: /static-libraries-ps2
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 2
    url: /ps2
  - name: Static Libraries (.A) for Playstation 2 Emotion Engine
    url: #
recommend: 
- ps2
- sdk
editlink: /ps2/EEStaticLibraries.md
---
This post will cover the programming libraries that were provided by the Official PS2 SDK for the Emotion Engine (the main processor for the PS2).

## Main Emotion Engine SDK libraries
These are the essential libraries that games could not function without:

Name | Description
--- | ---
base64.a | 
libatok.a | 
libc_export.a | 
libcdvd.a | 
libcheck.a | 
libdbc.a | 
libdev.a | 
libdma.a | 
libeenet.a | 
liberx.a | 
libeyetoy.a | 
libgcc_2.9-ee-991111-01_export.a | 
libgcc_2.96-ee-001003-1_export.a | 
libgcc_3.2-beta2-ee-030210_export.a | 
libgcc_3.2-ee-030926_export.a | 
libgcc_3.2-ee-040921_export.a | 
libgcc_common_export.a | 
libgp.a | Graphics Processing library
libgraph.a | Used to control the Graphics Synthesizer (GS)
libhig.a | High level Graphics library
libhip.a | Graphic plugin library for HIG
libipu.a | Low level library for controlling the Image data Processor (IPU)
libkernl.a | 
liblout.a | 
libm_export.a | 
libmc.a | 
libmc2.a | 
libmcx.a | 
libmpeg.a | Library for playback of MPEG2 Video
libmrpc.a | 
libmsin.a | 
libmtap.a | 
libpad.a | 
libpad2.a | 
libpc.a | 
libpkt.a | 
libqp.a | 
libscf.a | 
libsdr.a | 
libsein.a | 
libsk.a | 
libspu2m.a | 
libssyn.a | 
libtimer.a | 
libusbkb.a | 
libusbpspcm.a | 
libvib.a | Used for controlling the vibration of a controller
libvu0.a | 




## Networking EE Libraries
These libraries were only used for Playstation 2 games that conntected to the internet for online play.

Name | Description
--- | ---
bnnetcnf.a | BB Navigator Network Configuration Library, used for reading the network configuration.
eenet46.a | HTTP TCP/IP stack for networking
eenetctl.a | Library for setting up the network
ent_dump.a | 
ent_eth.a | Ethernet interface driver paired with ent_eth.irx
ent_ppp.a | Modem driver paired with ent_ppp.irx
ent_smap.a | Network interface driver paired with ent_smap.irx
entctl46.a | 
libinsck.a | Socket library based on libnet
libhttp.a | Library for HTTP calls
libhttps.a | Library for HTTPS calls
libnet.a | Controls the IOP networking INET library
libnetif.a | 
netcnfif.a | Common Network Configuration Interface Library
netglue_eenet.a | General Purpose Network Wrapper API
netglue_insck.a | 
netifmc2.a | 
ntgui2.a | GUI library for managing Network Configuration

## Demo Disc Libraries
```
./Demo Disc SDK/sdk/philmsg/philmsg.a
./Demo Disc SDK/sdk/libscedemo/libscedemo.a
./Demo Disc SDK/sdk/online_lib/online.a
```

## Emotion Engine Sample Libraries
```
./ee/sample/atok/softkb/utf8/libccc/lib/libccc.a
./ee/sample/atok/softkb/libpfont/lib/libpfont.a
./ee/sample/inet/ntgui2/utf8/libccc/lib/libccc.a
./ee/sample/inet/ntgui2/libpfont/lib/libpfont.a
```

## GCC Emotion Engine Libraries
```
./ee/gcc/ee/lib/libidt.a
./ee/gcc/ee/lib/libiberty.a
./ee/gcc/ee/lib/soft-float/libidt.a
./ee/gcc/ee/lib/soft-float/libiberty.a
./ee/gcc/ee/lib/soft-float/libsupc++.a
./ee/gcc/ee/lib/soft-float/libnosys.a
./ee/gcc/ee/lib/soft-float/libm.a
./ee/gcc/ee/lib/soft-float/libg.a
./ee/gcc/ee/lib/soft-float/libc.a
./ee/gcc/ee/lib/soft-float/libstdc++.a
./ee/gcc/ee/lib/libsupc++.a
./ee/gcc/ee/lib/libnosys.a
./ee/gcc/ee/lib/libm.a
./ee/gcc/ee/lib/libg.a
./ee/gcc/ee/lib/libc.a
./ee/gcc/ee/lib/libstdc++.a
./ee/gcc/lib/libtk8.0.a
./ee/gcc/lib/libopcodes.a
./ee/gcc/lib/libiberty.a
./ee/gcc/lib/libtix4.1.8.0.a
./ee/gcc/lib/gcc-lib/ee/3.2-ee-040921/soft-float/libgcc.a
./ee/gcc/lib/gcc-lib/ee/3.2-ee-040921/libgcc.a
./ee/gcc/lib/libitk3.0.a
./ee/gcc/lib/libmmalloc.a
./ee/gcc/lib/libfl.a
./ee/gcc/lib/libbfd.a
./ee/gcc/lib/libitcl3.0.a
./ee/gcc/lib/libtcl8.0.a
./ee/gcc/lib/libexpect5.26.a
```

GCC I/O Processor Libraries
```
./iop/gcc/lib/libopcodes.a
./iop/gcc/lib/libiberty.a
./iop/gcc/lib/gcc-lib/mipsel-scei-elfl/2.8.1/libgcc.a
./iop/gcc/lib/libbfd.a

```

## Deprecated (old) Libraries
LibSPU2 and LibSND2 seems to have been deprecated.. or maybe just these compiled versions are old, not sure..
```
./ee/lib/Old/librspu2.a
./iop/install/lib/Old/libspu2.a
./iop/install/lib/Old/libsnd2.a

./iop/lib/Old/libspu2.a
./iop/lib/Old/libsnd2.a

./iop/gcc/mipsel-scei-elfl/lib/Old/libspu2.a
./iop/gcc/mipsel-scei-elfl/lib/Old/libsnd2.a
```

## Using radare2 to print functions list
```
r2 -qc 'is~FUNC' objectname.o
```
