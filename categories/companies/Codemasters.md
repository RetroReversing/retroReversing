---
permalink: /companies/codemasters
layout: post
category: codemasters
recommend: 
- industry
tags:
- companies
- industry
recommendTitle: All Codemasters Posts
title: Codemasters (Creator of the Game Genie)
breadcrumbs:
  - name: Home
    url: /
  - name: Companies
    url: /companies
  - name: Codemasters
    url: #
redirect_from:
  - /codemasters
editlink: ../categories/companies/Codemasters.md
updatedAt: '2026-10-16'
---

# History of Codemasters
Richard and David Darling founded Codemasters in 1986 [^1].
Alongside its games, the company developed hardware for working with consoles: development boards, cartridge interfaces and the Game Genie.
These tools make Codemasters a useful subject for studying how developers investigated machines without the console manufacturer's documentation [^2].

The [Oliver Twins' history](https://www.olivertwins.com/our-story) follows the company's home-computer era through their Dizzy and Simulator games, then describes their move into NES development after visiting CES in January 1990 [^6].

---
# Hardware
The Game Genie and Codemasters' development boards served different purposes: one changed selected values while a game ran; the other let programmers download and investigate their own code.

## Game Genie
The Game Genie sat between a console and its game cartridge.
On the [NES](/nes), it could substitute bytes at three ROM locations [^2].
Changing an instruction or a constant could alter a game's rules without rewriting the cartridge's ROM.
For the wider product history, see the [cheat-cartridge guide](/hardware/cheatcartridge).

### Reading a code as a patch
The [FCEUX Game Genie encoder/decoder](https://fceux.com/web/help/GameGenieEncoderDecoder.html) exposes the fields behind an NES code.
A six-letter code specifies a CPU address and replacement byte; an eight-letter code also includes the original byte to compare against [^3].

The address is in the CPU's `$8000-$FFFF` program-ROM window, not a byte offset in a ROM file.
Bank switching can put different cartridge data at that same address.
FCEUX therefore reports possible affected file offsets rather than treating the address as a unique location [^3].

To investigate a known code, pause the game in FCEUX and decode it.
Inspect the instruction or data at the decoded CPU address, noting the active bank and original byte.
Then toggle the cheat and repeat the same game action.
Keep the ROM revision and bank mapping with your notes so that another researcher can reproduce the result [^3].

---
### Disassembling the Game Genie itself
[qalle's NES Game Genie disassembly](https://codeberg.org/qalle/nes-gamegenie-disassembly) covers the device's own menu ROM.
It includes ASM6 sources, a code/data log and instructions for comparing a rebuilt image with the original [^4].

Start with `prg.asm`: the `decode_allcodes` routine processes entered codes, and a later loop copies the decoded values into registers at `$8001-$800C`.
Following that path connects the on-screen letters to the hardware setup.
This is a reconstructed disassembly, not a release of Codemasters' original source [^4].

---
## Development boards and the unreleased Game Genie II
In his [2009 interview](https://gamehacking.org/qna/40), engineer **Richard Aplin** describes tracing cartridge-bus signals with a logic analyser before building development boards.
Their boot code entered a monitor program so a PC could inspect and change memory through a parallel connection compatible with the Programmers Development System (PDS) [^2].

Aplin also describes an unreleased [Super Nintendo](/snes) **Game Genie II** prototype.
It could intercept interrupts to inject code, rather than relying only on byte substitution.
He lists controller-triggered cheats and battery-backed score storage among its features [^2].
The [Game Boy development-hardware guide](/gameboy-development-kit-hardware) includes his Orac board, while the [NES development-kit guide](/famicom-nes-development-kit) covers Codemasters' work on that console.

---
## CD-ROM for the Nintendo Entertainment System
Issue 1 of the UK magazine GamesX reported a proposed NES CD-ROM product:
![GamesX clipping announcing a proposed Codemasters NES CD-ROM interface](https://github.com/RetroReversing/retroReversing/assets/40120498/081b44bd-d708-4653-ace4-33bedb106335)

The announcement should not be treated as evidence of working hardware.
When [Time Extension asked David Darling about it](https://www.timeextension.com/news/2023/08/codemasters-was-supposed-to-make-a-nes-cd-drive-but-it-never-happened), he recalled the idea only vaguely.
After checking with former colleagues, he said they did not think a prototype or product had been developed and suggested that Camerica had announced it prematurely [^1].

---
# Reversing Codemasters NES cartridges
A cartridge's **mapper** is the hardware that selects which ROM banks the CPU can see.
Before importing a Codemasters game into a disassembler, identify its board variant and account for bank switching.
The [NES Ghidra guide](/nes-ghidra) provides a starting point for loading these games.

Mesen's [BF909x implementation](https://github.com/SourMesen/Mesen2/blob/b9fa69ddc6d0a331fb103fdb5eef6904305703c2/Core/NES/Mappers/Codemasters/BF909x.h) and [BF9096 implementation](https://github.com/SourMesen/Mesen2/blob/b9fa69ddc6d0a331fb103fdb5eef6904305703c2/Core/NES/Mappers/Codemasters/BF9096.h) provide compact, executable references for two related banking arrangements [^5]:

Implementation | Program-ROM mapping | What to track
---|---|---
BF909x | A switchable 16 KiB bank followed by the last 16 KiB bank | Bank-select writes; the Fire Hawk variant also changes nametable mirroring
BF9096 | A selected 64 KiB block, divided into four 16 KiB banks | Both block and bank selection; the upper CPU window uses bank 3 of the selected block

In the BF9096 model, changing the outer block changes the code visible in the upper window too.
Treating that window as the last bank of the entire cartridge would produce misleading cross-references.
When tracing a bank change, record the CPU address and selected ROM bank together [^5].

These are emulator implementations, so use cartridge observations and execution traces to check assumptions about a particular board.

---
# Software (Games)
Codemasters' catalogue spans Dizzy and Micro Machines, racing series such as Colin McRae Rally, TOCA/Race Driver, DiRT, F1 and GRID, and releases including Operation Flashpoint, Overlord and Bodycount.
For research, identify the individual release and developer rather than assuming every game under a publishing label shares a codebase or toolchain.

## Dizzy and recovered source
The [Oliver Twins' account of Wonderland Dizzy's rediscovery](https://www.olivertwins.com/copy-of-news) describes finding the NES source in their loft after discussing an old map at Play Blackpool in 2015.
Lukasz Kur then recompiled it, made fixes and produced a master build [^7].

This is a useful distinction when cataloguing an unreleased game: a later playable build may come from recovered source with additional work, rather than an untouched period ROM.
Record the build's provenance alongside its release date.

The twins' [development history](https://www.olivertwins.com/our-story) also identifies outside teams as the authors of early Atari ST and Amiga conversions.
Their later Interactive Studios team brought more conversions in-house [^6].
That is a reason to check credits before attributing a port's implementation to the original game's authors.

---
# References
[^1]: [Codemasters Was Supposed To Make A NES CD Drive, But It Never Happened - Time Extension](https://www.timeextension.com/news/2023/08/codemasters-was-supposed-to-make-a-nes-cd-drive-but-it-never-happened), including David Darling's recollection.
[^2]: [Richard Aplin - GameHacking.org interview, 17 April 2009](https://gamehacking.org/qna/40).
[^3]: [Game Genie Encoder/Decoder - FCEUX documentation](https://fceux.com/web/help/GameGenieEncoderDecoder.html).
[^4]: [NES Game Genie disassembly - qalle](https://codeberg.org/qalle/nes-gamegenie-disassembly), README and `prg.asm`.
[^5]: Mesen 2, [BF909x](https://github.com/SourMesen/Mesen2/blob/b9fa69ddc6d0a331fb103fdb5eef6904305703c2/Core/NES/Mappers/Codemasters/BF909x.h) and [BF9096](https://github.com/SourMesen/Mesen2/blob/b9fa69ddc6d0a331fb103fdb5eef6904305703c2/Core/NES/Mappers/Codemasters/BF9096.h) mapper implementations, pinned to revision `b9fa69ddc6d0a331fb103fdb5eef6904305703c2`.
[^6]: [Our Story - The Oliver Twins](https://www.olivertwins.com/our-story), particularly "From Computers to Consoles" and "Interactive Studios".
[^7]: [Pre-2020 News - The Oliver Twins](https://www.olivertwins.com/copy-of-news), "Wonderland Dizzy - NES: Rediscovered", October 2015.
