---
layout: post
tags: 
- sega
- dreamcast
- symbols
- debug
title: Sega Dreamcast Games with Debug Symbols
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/images/dreamcast/Dreamcast-Games-With-Debug-Symbols.jpg
permalink: /sega-dreamcast-game-debug-symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: Sega Dreamcast Games with Debug Symbols
    url: #
recommend:
- dreamcast
- symbols
editlink: /dreamcast/DreamcastGamesWithDebugSymbols.md
updatedAt: '2019-10-19'
---
<section class="postSection">
    <img src="/public/images/dreamcast/Dreamcast-Games-With-Debug-Symbols.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Debug symbols pretty much open a game wide open to budding verse engineers. These files make reverse engineering almost a piece of cake, giving useful names to each of the functions in an executable and sometimes even full local variable naming and source code references.

However most developers are very careful not to leak any debug symbols, especially into retail releases, so most games will not have publicly available debug symbols. But if you look very hard you might be able to find a game or two compiled for a console that have debug symbols left in by mistake.

The Dreamcast is no different, although unlike the Sega Saturn before it, the games that have symbols are much harder to find and very rare. 

Also it is further complicated due to the fact that there were actually two official Software Development Kits (SDKs) available for the dreamcast. One was the standard `Katana` SDK that  used custom libraries written by Sega and the other was the Windows CE SDK written by Microsoft with added dreamcast functions.

The Windows CE SDK was built to make porting from PC to dreamcast easier but required the game to ship with Windows CE libraries and to be compiled by the Microsoft C Compiler/Assembler suite.
</div>
</section>

---
# PDB files for WinCE executables
The debug symbols for games using the WinCE SDK tend to be put in Program Database files (.PDB) and are external to the game executable. Sadly very few games shipped with these full PDB files in tact on the retail disc, but there are a few games that accidentally contained some incomplete PDB files.

Although these PDB files don't cover the entire source code for the games it can be a useful start when reversing one of these games.

## Taxi 2 - Le Jeu
The french game Taxi 2 contained the PDB files for all the libraries provided by the WindowsCE runtime environment for dreamcast. Also of note is that the NTSC release of Armada also contained the PDB files for the same libraries but they have different MD5 hashes so likely from different versions of the Windows CE runtime environment.

{% include link-to-other-post.html post="/dreamcast-windows-ce" description="For the full list of PDB files found in Taxi 2 click here." %}

However it doesn't seem to have the actual .pdb file from the Taxi2 game itself sadly.

---

# Unstripped ELF files
Unstripped ELF files are a rare gem, very rare and they pretty much crack the game wide open with their debug symbols.

Very few dreamcast games included the ELF executable on the retail disc, only one game has been found which is the Dragons Blood in Europe.

It is believed that this would be compiled with the GNU toolchain provided with the Dreamcast SDK but this has not been confirmed.

Normally dreamcast executables are converted from ELF to BIN before being put on GD-ROM so this must have been a mistake and is not actually used by the game.

## Dragons Blood (European version of Draconus: Cult of the Wyrm)
Dragons Blood contains a very useful file left over on its disc: `RELEASE.ELF`, this is a valid ELF executable that is a fairly large 13.8MB. Executables that just contains code are not normally this large.

The output of running the `file` command on the `RELEASE.ELF` file is:
```
RELEASE.ELF: ELF 32-bit LSB executable, Renesas SH, version 1 (SYSV), statically linked, not stripped
```
Not that it says 'not stripped', this is excellent news it means that all the function names are intact inside the ELF file and can be viewed using your favourite reverse engineering tool (Radare2, Binary Ninja, IDA Pro etc).

There are a total of **7,735** debug symbols in the executable. 

A post specifically investigating this game will come in the near future.

Judging by the symbols the game was written in C++ so it must have used the GNU C++ compiler as the Hitachi compilers were only C-based.

## South Park Rally v1.001 (2000)(Acclaim)(NTSC)(US)
This game includes a file called `CDIMAGE.ELF` but it does not seem to be a valid ELF executable and it doesn't contain debug symbols as far as I can tell.

---

# Linker .map files
During the build process for games the source code gets compiled and then linked into a final executable, in the dreamcast case it becomes the `1st_read.bin`.

In order to help developers debug their games when they have been fully compiled the assembler generated a .map file that contains the function names and their location in the final executable.

Normally these files would remain on the development kits and not appear on the final retail discs, however there are a couple of cases where these files were accidentally put on the retail game disc. The most notable being NFL 2K Japanese version which contained full debug symbols!

## NFL 2K v1.002 (JP)
In the original Japanese version of NFL 2K for the Sega Dreamcast, the Linker Map file is included on the disc by mistake. It was removed in the further versions of the Japanese release and the US/PAL releases.

The MAP file contains all the function names and even the original source file names (the compiled .obj version).

## Urban Chaos v1.000 (WindowsCE)
The Urban Chaos disc contains a file called `NKSCIFKD.MAP` which is a linker map file for a Windows CE executable also called `NKSCIFKD.EXE`. But it is not very useful in terms of reversing the game itself.

## Armada v1.000 (US) (WindowsCE)
The US version of Armada contains the linker map file for the `WSEGACD` windows CE library. You can find out more about this library in our post about  the Windows CE SDK.

{% include link-to-other-post.html post="/dreamcast-windows-ce" description="For the full list of Dreamcase Windows CE libraries check out this post." %}

## The Next Tetris (WindowsCE)
The online edition of 'The Next Tetris' was built using the Dreamcast Windows CE SDK and has accidentally placed 2 windowsCE libraries on the retail disc:
* CHATCE.LIB (Chat library for windowsCE)
* SOUNDLIBWCE.LIB (Sound library for windowsCE)

These are the files that are used during the build process to create the final executable and they have the function names inside and can technically be used and linked into your own games if you need a chat or sound library. It would be interesting to find out the differences between this sound library and the one that comes with the Windows CE SDK.

## Rune Jade v1.027 (JP) (WIndowsCE)
The Japanese only online role playing game Rune Jade has a few linker map files for their windows CE online networking engine called `IWNETENGINE`. The rest of the game does not contain any debug symbols.


---
# Games with Uncompiled Scripting

## Resident Evil 3/ Biohazard 3
The dreamcast version of Resident Evil 3 is unique in that it contains a folder of uncompiled BioScript files.  The scripting language is very similar to C, including header files and they have the extension .SCT.

These can be modified to easily make mods for the game, you can find out more about Resident Evil Modding here: [Resident Evil 3 (1999) - Resident Evil 1 2 3 - Modding Forum](https://www.tapatalk.com/groups/residentevil123/resident-evil-3-1999-f56/)

---
# Other interesting content 

## Marionette Company
The following  strings inside the Marionette Company main executable suggests that the Windows CE SDK for dreamcast was called dragon, and this is confirmed by the SegaRetro wiki [^1].
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.dll
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.pdb

This shows that they were using version 1.1 of the windows CE (i.e "Dragon") SDK.
This also confirms that there was a SegaMidi dynamic library (.dll) that came as part of the Dreamcast version of the WindowsCE SDK.

## Makefile in Prince of Persia Arabian Nights
A full Makefile is available on the retail US release of the game Prince of Persia Arabian Nights. It seems to use the tool `k2atosom` to convert *.dm to *.cm using .lst files.

It is unknown what LevelRIP tool is, could be an internal tool.
```makefile
#----- File generated by LEVELRIP -----
DISP_OPTIONS = -NOSORT -ONETEX -NOMERGE -SLIGHTS 0.100000
%.dm: %.k2a 
k2atosom $*.k2a $(DISP_OPTIONS) -OFILE $*.dm -MTF rooftex.lst
COLL_OPTIONS = -NOSORT -NOTEX -NOMERGE 
%.cm: %.k2a 
k2atosom $*.k2a $(COLL_OPTIONS) -LFILE $*.lst -OFILE $*.cm 
roof.wld: roof1_1a.dm \
roof1_1b.dm \
roof1_1c.dm \
roof1_1d.dm \
roof1_1e.dm \
roof1_1f.dm \
roof1_1g.dm \
roof1_1h.dm \
roof1_1i.dm \
roof1_1j.dm \
roof1_2a.dm \
roof1_2b.dm \
roof1_2c.dm \
roof1_2d.dm \
roof1_2e.dm \
roof1_3a.dm \
roof1_3b.dm \
roof1_3c.dm \
roof1_3d.dm \
roof1_3e.dm \
roof1_3f.dm \
roof1_3g.dm \
roof1_4a.dm \
roof1_4b.dm \
roof1_4c.dm \
roof1_4d.dm \
roof1_4e.dm \
roof1_5a.dm \
roof1_5b.dm \
roof1_5b1.dm \
roof1_5c.dm \
roof1_5d.dm \
roof1_5e.dm \
roof1_5f.dm \
roof1_6a.dm \
roof1_6b.dm \
roof1_6c.dm \
roof1_6d.dm \
roof1_7a.dm \
roof1_7b.dm \
roof1_7c.dm \
roof1_7d.dm \
roof1_7e.dm \
roof1_8.dm \
roof1_9a.dm \
roof1_9b.dm \
roof1_9c.dm \
roof1_10.dm \
RoofSkybox.dm 
```

---
# Largest Dreamcast Executables
Normally the largest executables for a given console tend to contain the most debug information, unfortunately due to the high use of external debug symbol files, the dreamcast executables tend to be quite small and lacking in symbols.

This section will list the largest executables but sadly none of them seem to contain debug symbols as far as we can see, this is just hear for those curious about the laegest dreamcast executables.

## Largest Katana 1st_read.bin executable
The largest game compiled with the standard (non-winCE) SDK was `Street Fighter III - 3rd Strike` at 14.3MB with `Toy Story 2 - Buzz Lightyear to the Rescue` at 13.6MB coming in second.

Looking at the size of the executables you would be excused for presuming that these would contain debug symbols. But no, well as far as we can tell it just includes code. Thats a lot of code!

## Largest WindowsCE Executable
Sadly all the Windows CE Dreamcast games were built with an external debug symbol file (.PDB).

So the largest Windows CE game comes in at only 3.8MB which is 'SPACESTATION.EXE' from "Historical Mystery Adventure TROIA 1186 B.C. v1.002 (JP)" or more bizarley the pool game "Jimmy White's 2 - Cueball v1.100 (1999)(Virgin)(PAL)".

Games smaller than that are unlikely to contain debug symbols as they tend to be stored as uncompressed strings and dreamcast development tended to include a lot of symbols with long names which add up to MBs of symbols.

---
# References
[^1]: [History of the Sega Dreamcast/Development - Sega Retro](https://segaretro.org/History_of_the_Sega_Dreamcast/Development) 
[^2]: [Windows CE OS GUI (Shell) Is Possible | ASSEMbler - Home of the obscure](https://assemblergames.com/threads/windows-ce-os-gui-shell-is-possible.64930/)
