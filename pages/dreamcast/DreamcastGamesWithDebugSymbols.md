---
layout: post
tags: 
- sega
- dreamcast
- symbols
- debug
title: Sega Dreamcast Games with Debug Symbols
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/consoles/Sega Dreamcast.png
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
---

Debug symbols pretty much open a game wide open to budding verse engineers. These files make reverse engineering almost a piece of cake, giving useful names to each of the functions in an executable and sometimes even full local variable naming and source code references.

However most developers are very careful not to leak any debug symbols, especially into retail releases, so most games will not have publicly available debug symbols. But if you look very hard you might be able to find a game or two compiled for a console that have debug symbols left in by mistake.

The Dreamcast is no different, although unlike the Sega Saturn before it, the games that have symbols are much harder to find and very rare. 

Also it is further complicated due to the fact that there were actually two official Software Development Kits (SDKs) available for the dreamcast. One was the standard `Katana` SDK that  used custom libraries written by Sega and the other was the Windows CE SDK written by Microsoft with added dreamcast functions.

The Windows CE SDK was built to make porting from PC to dreamcast easier but required the game to ship with Windows CE libraries and to be compiled by the Microsoft C Compiler/Assembler suite.

---
# PDB files for WinCE executables
The debug symbols for games using the WinCE SDK tend to be put in Program Database files (.PDB) and are external to the game executable. Sadly very few games shipped with these full PDB files in tact on the retail disc, but there are a few games that accidentally contained some incomplete PDB files.

Although these PDB files don't cover the entire source code for the games it can be a useful start when reversing one of these games.

## Taxi 2 - Le Jeu
The french game Taxi 2 contained the PDB files for all the libraries provided by the WindowsCE runtime environment for dreamcast. Also of note is that the NTSC release of Armada also contained the PDB files for the same libraries but they have different MD5 hashes so likely from different versions of the Windows CE runtime environment.

{% include link-to-other-post.html post="/dreamcast-windows-ce/" description="For the full list of PDB files found in Taxi 2 click here." %}

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
# Other interesting content 

## Marionette Company
The following  strings inside the Marionette Company main executable suggests that the Windows CE SDK for dreamcast was called dragon, and this is confirmed by the SegaRetro wiki [^1].
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.dll
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.pdb

This shows that they were using version 1.1 of the windows CE (i.e "Dragon") SDK.
This also confirms that there was a SegaMidi dynamic library (.dll) that came as part of the Dreamcast version of the WindowsCE SDK.

---
# References
[^1]: [History of the Sega Dreamcast/Development - Sega Retro](https://segaretro.org/History_of_the_Sega_Dreamcast/Development) 
[^2]: [Windows CE OS GUI (Shell) Is Possible | ASSEMbler - Home of the obscure](https://assemblergames.com/threads/windows-ce-os-gui-shell-is-possible.64930/)
