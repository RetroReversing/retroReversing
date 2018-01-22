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
Grand Theft Auto III | `DMA Design` | Oct 22, 2001 | PS2SDK 2.3.0 | [^1]
Resident Evil 4 | `Capcom` | Oct 25, 2005 | PS2SDK ??? | [^1]
Resident Evil Code Veronica X | `Capcom` | Aug 21, 2001 | PS2SDK ??? | [^1]
Devil May Cry | `Capcom` | Oct 16, 2001  | PS2SDK ??? | [^1]
Fatal Frame | `Tecmo` | Mar 4, 2002 | PS2SDK ??? | [^1]
ICO (PAL)  | `??` | Oct 22, 2001 | PS2SDK ??? | [^1]
Shadow of the Colossus (PAL) | `??` | Oct 22, 2001 | PS2SDK ??? | [^1]
Xenosaga Episode I: Der Wille zur Macht | `??` | Oct 22, 2001 | PS2SDK 2.4.2 | [^1]
Virtual Fighter 4 Evolution (Korean version) | `??` | ???, 2001 | PS2SDK 2.5.5 | [^1]
Shadow Hearts | `??` | ???, 2001 | PS2SDK 2.2.2 | [^1]
Fatal Frame 2 | `??` | ???, 2001 | PS2SDK 2.8.0 | [^1]
Piposaru 2001 | `??` | ???, 2001 | PS2SDK ??? | [^1]
Jak and Daxter | `??` | ???, 2001 | PS2SDK 2.2.1 | [^1]
Jak II | `??` | ???, 2001 | PS2SDK 2.7.1 | [^1]

---
## Potential Games to try
* Growlanser 3 [^1]

## Others
`sp193` on Assembler Games mentions that the Sound module also has debug information in it:
```
The OSDSND module from the Protokernel boot ROM (SCPH-10000 and SCPH-15000) also has debugging information left over in it. This module is actually the tentative sound driver library (librspu2) that was mentioned within the SONY SDK, and was the predecessor to libsd. The funny thing is that the one in the expansion-bay boot ROMs is newer than the one that comes in the Sony PS2SDK (even in release v3.02).
```

l_oliveira on the same Assembler Games forum topic states that most of the games with debug symbols were compiled with the earlier 2.x.x SDK rather than the later 3.x.x SDK [^1].
```
Piposaru 2001 has full debug symbols on the final retail disc. But then it's a early game compiled with 2.x.x SDK. Very old stuff.

I don't think I've ever seen a retail game with 3.x.x SDK which had symbols in it. It confirms stripping the elf being the norm later on. 

Plenty of PS2 arcade stuff have debug symbols on. IOP stuff with symbols in are quite rare on retail stuff even on older stuff because most programmers didn't bother with making their own IOP modules (only companies who designed their own middleware like Square, for example would bother with making custom IOP modules) and the ones which did had to deal with the IOP having only 2MB of memory, meaning memory was too precious to be wasted.

But yes, arcade stuff have debug symbols in it still. lol @ Konami Python1/2 IOP modules. (Konami striped their retail PS2 modules and ELF files diligently, though. Even when it wasn't required)
```

# References
[^1]: AssemblerGames Forum Topic - https://assemblergames.com/threads/retail-ps2-games-with-debugging-symbols.51510/
