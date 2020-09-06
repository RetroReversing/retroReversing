---
layout: post
tags: 
- wiiU
title: Wii U Virtual Console Reversing
image: /public/wiiU/WiiU Virtual Console Reversing.jpg
twitterimage: https://www.retroreversing.com/public/wiiU/WiiU Virtual Console Reversing.jpg
thumbnail: /public/consoles/Nintendo WiiU.png
permalink: /WiiUVirtualConsole
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: Wii U Virtual Console Reversing
    url: #
recommend: wiiU
editlink: /wiiU/WiiUVirtualConsole.md
updatedAt: '2019-03-04'
---

# Introduction
<section class="postSection">
    <img src="/public/wiiU/WiiU Virtual Console Reversing.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The WiiU Virtual console was a fantastic way to play retro Nintendo games from pretty much all of Nintendo's old consoles, it even included wii games!

To be able to play these retro games on the wiiU hardware Nintendo had to bundle each game rom with an emulator, Nintendo didn't want to develop their own emulators so they outsourced each consoles emulator to various companies such as M2 for Gameboy Advance.

The alternative to emulation would have been recompiling each game for the wiiU. This would not only have been time consuming but would require a full rewrite for the earlier games that were implemented in assembly code.

This post will cover the details we have discovered so far about how the WiiU virtual console games are implemented. Each console has a different method of emulation so this post will be split by console.
</div>
</section>

---

# Common
This section will cover the common files that are in all the Virtual Console titles, in fact most WiiU software contain these files.
These files basically tell the WiiU Operating system (CafeOs) how to deal with certain parts of the application.

## /code/app.xml
This file contains the WiiU operating system version required, the SDK that it was built in,  unique game title ids and version information.

## /code/cos.xml
Cafe OS settings file, this tells the OS how to run the `.rpx` file, including what arguments it takes and the code and data sizes.

## /meta/Manual.bfma
The Virtual Game Manual which is viewable through the wiiU's virtual manual viewer. Mostly made up of compressed xml files.

## /meta/meta.xml
This file is read by the OS to tell it the game name and other data so it can display it on the dashboard with the custom images for each game.

Contains data such as publisher name, game code etc. There are editors that can generate this for you such as: [Wii Meta XML Editor - WiiBrew](http://wiibrew.org/wiki/Wii_Meta_XML_Editor)

## /meta/bootMovie.h264
A short wiiU boot movie that is played when you select this game, you can play this in VLC.

---

# Gameboy Advance (M2Engage)
The Gameboy Advance emulator for the WiiU was developed by the Japanese game development company `M2`. They are also the company that developed some of the emulators for the original Wii Virtual Console.

It is unknown why it is called `engage`, but the 'age' at the end could stand for 'Advanced Gameboy emulator' due to the initial name of the GBA being `Advanced Gameboy`.

## /content/alldata.psb.m
The rom seems to be located in a file called `alldata.psb.m` and if you know how to decompress and recompress this format you can actually inject pretty much any GBA game into the emulator and run it on your Wii U [^1]!

The rom seems to be in a format called PSB, not sure what PSB could stand for in this context.

## /content/alldata.bin
It is unknown what the alldata.bin file contains or is used for.

## /code/m2engage.rpx
This is the wiiU executable of the Gameboy Advance Emulator developed by M2.

If you go through all the different GBA VC games and compare the m2engage files you will find about 40 different variations of the RPX file.

Which hints at the possibility of game specific changes in the emulator, for example checking the rom header to make sure it only plays that specific game.

### Filename symbols
The RPX is mostly stripped but there are a few strings in the executable that hint at how it was implemented:

Filename | Notes
--- | ---
../emu_m68kbase/emu_m68k/ao.c | Audio Output?
../emu_m68kbase/emu_m68k/cpu.c | CPU emulator
../emu_m68kbase/emu_m68k/cpu_m68k_3.c | M68000 CPU emulator
../emu_m68kbase/emu_m68k/cpu_m6502.c | M6502 CPU emulator
../emu_m68kbase/emu_m68k/cpu_z80.c | Z80 CPU emulation
../emu_m68kbase/emu_m68k/snddrv_generic.c | Sound Driver?
../emu_m68kbase/emu_m68k/quartz.c | Sound?
../emu_m68kbase/emu_m68k/snddev.c | Sound dev?
../emu_m68kbase/emu_m68k/memento.c | Save state manager?
../emu_m68kbase/emu_m68k/module.c | Module loader
../emu_m68kbase/emu_m68k/strutil.c | String utilities


### M2Lib
There is a reference to a library called `m2lib` which would most likely be a bunch of functions that are common across multiple games made by M2. 
The interesting string is:
```
archive file version is too new. update m2lib. (ver: %.04f > %.04f)
```

### PGBLib
There are references in the executable for a library called `pgblib`, judging by the following filenames it is likely this is a simple data structure library but unconfirmed:
```
../emu_m68kbase/emu_m68k/lib/libpglib/pglib_core.c
../emu_m68kbase/emu_m68k/lib/libpglib/pglib_array.c
../emu_m68kbase/emu_m68k/lib/libpglib/pglib_data.c
../emu_m68kbase/emu_m68k/lib/libpglib/pglib_hashtable.c
../emu_m68kbase/emu_m68k/lib/libpglib/pglib_list.c
```

### Motion Editor
There are mentions of a `Motion Editor` in the executable, my only guess is that this is left over from some of the 3D motion effect that they implemented in their 3DS Sega titles.
```
motion file '%s' has not adaptive spec of motion file. export psb again.
motion file '%s' version is too old. update MotionEditor, export motion file 
motion file '%s' version is too new. update m2lib. (ver: %.04f > %.04f)
```

### PSB
Not sure what PSB is or what it stands for but it seems to be some sort of file format used for rom and other data.

Strings referencing PSB:
```
psb/psb.cpp
PSBWriteStream
PSBBinaryWriteStream
PSBReadStreamWindow
PSBMemoryReadStream
PSBDummyWriteStream
PSBFilter
PSBReadStream

// Some examples of PSB format files:
system/font/multi32_0.psb.m
system/config/soundlist.psb.m
system/motion/svc_player.psb.m
```

### LibMArchive
The rom data is in a file that has a `.m` extension (alldata.psb.m). The libMArchive must be the library that can decrypt the *.m file archives.

Presumably this is an internal only library so it would be interesting to see if this was also used in any other projects. For example for the Wii/3DS Virtual Console, or even the numerous other ports M2 have implemented.

The RPX file has references to the source code for this library:
```
../emu_m68kbase/emu_m68k/lib/libmarchive/marchive.c
../emu_m68kbase/emu_m68k/lib/libmarchive/marchive_format_ccf.c
../emu_m68kbase/emu_m68k/lib/libmarchive/marchive_format_tar.c
../emu_m68kbase/emu_m68k/lib/libmarchive/marchive_compression_gzip.c
../emu_m68kbase/emu_m68k/lib/libmarchive/marchive_format_zip.c
```


### Others
Here are a few miscellaneous strings that are interesting:
```
K:\vessel\agb_007_siofix\m2engage\bin\CAFE\NDEBUG\m2engage.rpx
M2EpiArchSubInfo
arcadeutil.c
ind_sgnl.c
m2epi.c
ratnum.c
```


# References
[^1]: [Injectiine/inject_gba.py at master · CatmanFan/Injectiine](https://github.com/CatmanFan/Injectiine/blob/master/Tools/CONSOLES/GBA/Injector/inject_gba/inject_gba.py)
[^2]: [M2 (game developer) - Wikipedia](https://en.wikipedia.org/wiki/M2_(game_developer)#Wii_U)
