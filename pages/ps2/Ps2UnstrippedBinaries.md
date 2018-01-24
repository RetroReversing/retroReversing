---
layout: post
tags: 
- ps2
- symbols
- games
title: PS2 UnStripped Binaries (Developer Symbols)
thumbnail: /public/consoles/Sony PlayStation 2.png
permalink: /ps2-unstripped/
breadcrumbs:
  - name: Home
    url: /
  - name: Ps2
    url: /ps2
  - name: PS2 UnStripped Binaries (Developer Symbols)
    url: #
recommend: symbols
editlink: /ps2/Ps2UnstrippedBinaries.md
references:
  - assemblergames
---

## PS2 Retail Games with Debug Symbols

Game | Developer | Release Date | Ps2 SDK | Source
--- | --- | --- | ---
Crazy Taxi | `Acclaim Studios Cheltenham, Hitmaker` | May 15, 2001 | PS2SDK 2.1.4 | [^1]
Jak and Daxter | `Naughty Dog` | 3 December 2001 | PS2SDK 2.2.1 | [^1]
Shadow Hearts | `Sacnoth / Midway` | Dec 11, 2001 | PS2SDK 2.2.2 | [^1]
Grand Theft Auto III | `DMA Design` | Oct 22, 2001 | PS2SDK 2.3.0 | [^1]
Xenosaga Episode I: Der Wille zur Macht | `Monolith Soft` | 28 February 2002 | PS2SDK 2.4.2 | [^1]
007 Nightfire | `Eurocom / Electronic Arts` |  Nov 18, 2002 | PS2SDK 2.4.3 | [^2] 
Virtual Fighter 4 Evolution (Korean version) | `SEGA` | Aug 13, 2003 | PS2SDK 2.5.5 | [^1]
Jak II | `Naughty Dog` | 14 October 2003 | PS2SDK 2.7.1 | [^1]
Fatal Frame 2 | `Tecmo` | Dec 10, 2003 | PS2SDK 2.8.0 | [^1]
Resident Evil 4 | `Capcom` | Oct 25, 2005 | PS2SDK ??? | [^1]
Resident Evil Code Veronica X | `Capcom` | Aug 21, 2001 | PS2SDK ??? | [^1]
Devil May Cry | `Capcom` | Oct 16, 2001  | PS2SDK ??? | [^1]
Fatal Frame | `Tecmo` | Mar 4, 2002 | PS2SDK ??? | [^1]
ICO (PAL)  | `Sony Interactive Entertainment Japan Studio` | Sep 24, 2001 | PS2SDK ??? | [^1]
Shadow of the Colossus (PAL) | `Sony Interactive Entertainment Japan Studio` | October 18, 2005 | PS2SDK ??? | [^1]
Piposaru 2001 | `SIE Japan Studio` | 5 July 2001 | PS2SDK ??? | [^1]

---
## Potential Games to try
* Growlanser 3 [^1]
* LEGO Racers 2 [^3]

## Others
`sp193` on Assembler Games mentions that the Sound module also has debug information in it [^1]:
```
The OSDSND module from the Protokernel boot ROM (SCPH-10000 and SCPH-15000) also has debugging information left over in it. 
This module is actually the tentative sound driver library (librspu2) that was mentioned within the SONY SDK, and was the predecessor to libsd. 
The funny thing is that the one in the expansion-bay boot ROMs is newer than the one that comes in the Sony PS2SDK (even in release v3.02).
```


l_oliveira on the same Assembler Games forum topic states that most of the games with debug symbols were compiled with the earlier 2.x.x SDK rather than the later 3.x.x SDK [^1]. 
He then goes on to mention an interesting tidbit about Arcade code still having debug symbols in it, even when they strip the Ps2 version of the same game (e.g Konami).

Also the IRX I/O processor modules rarely if ever have any debug symbols due to most games not developing their own IOP modules and the limit of the 2MB memory for the modules [^1].

# References
[^1]: AssemblerGames Forum Topic - https://assemblergames.com/threads/retail-ps2-games-with-debugging-symbols.51510/
[^2]: Copy of Nightfire NTSC
[^3]: Lego Racers 2 - http://www.ps2-home.com/forum/viewtopic.php?f=13&t=1231
