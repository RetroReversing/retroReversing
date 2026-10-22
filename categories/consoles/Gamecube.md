---
permalink: /gamecube
layout: post
title: Nintendo Gamecube (Dolphin) Reverse Engineering
recommend: gamecube
recommendTitle: All GC Posts
editlink: ../categories/consoles/Gamecube.md
category: gamecube
excerpt: Awesome list of Nintendo Gamecube Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Nintendo Gamecube (Dolphin) Reverse Engineering
    url: #
redirect_from:
  - /gc
  - /dolphin
  - /gamecube/
tags:
  - gamecube
updatedAt: '2026-10-21'
---

Welcome to our page dedicated to Gamecube reverse engineering! The Gamecube was a popular gaming console released by Nintendo in 2001, and has since become a beloved classic of the gaming world. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Gamecube reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Gamecube controller, and get ready to dive into the exciting world of Gamecube reverse engineering!

---
# Hardware
The Nintendo Gamecube has fairly sophisticated hardware for the time, this was when Nintendo was still trying to compete with raw processing power. The hardware would then be used as a basis of both the Wii and Wii U consoles in the future.

## Retail Hardware
Rodrigo Copetti has an excellent in-depth article about the hardware architecture of the Nintendo Gamecube, it is a must read for anyone wanting to reverse engineer Gamecube games as you will need to know all about the low level architecture.

{% include link-to-other-site.html url="https://www.copetti.org/projects/consoles/gamecube/" description="The website by Rodrigo Copetti is required reading for any information you want to know about the Gamecube console hardware architecture." image="/public/consoles/Nintendo Gamecube.webp" title="Rodrigo Copetti's Gamecube Hardware Architecture"  %}

## Development Hardware
{% include_cached link-to-other-post.html post="/gamecube-development-kit-hardware" description="For information about Nintendo's Dolphin development hardware check out this post." %}

## Unreleased Hardware
In China there were plans to release a version of the Gamecube with DVD playback functionality and additional security. This was to be a sequel to the iQue Player which was a Chinese only Nintendo 64 plug and play device. However half way through development the resources were moved to work on the Nintendo Wii instead.
{% include_cached link-to-other-post.html post="/ique-gamecube" description="For information about iQue/BroadOn's prototype Chinese Gamecube hardware check out this post." %}


---
# Gamecube Games
The Nintendo Gamecube has an excellent library of games just begging to be reverse engineered, it is always a good idea to do some research before you start, this is where this section comes in as it deals with specific games.

## Games with Debug Symbols
If you are interested in reverse engineering a Gamecube game, the first step is to find out if the game has its **debug symbols** available, this makes it much easier to reverse as all the functions will have nice friendly human readable names.

{% include_cached link-to-other-post.html post="/gamecube-debug-symbols" description="Check out this post for a list of Gamecube games with debug symbols." %}

## Gamecube Exclusives
The most valuable reverse engineering projects tend to be the **platform exclusives** that have never been re-released as these are the games that can benefit the most from enhancements on modern hardware.

Wikipedia maintains a list of Gamecube exclusives - [GameCube-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:GameCube-only_games)

## Prototype Games
Prototype games are ideal targets for reverse engineering as many of them contain developer information inside them and some games never got a retail release, making them even more interesting!

{% include link-to-other-site.html url="https://hiddenpalace.org/Prototypes_by_system/Nintendo_GameCube" description="Hidden Palace has the most complete list of released Gamecube Prototypes and Demos, check it out here." title="List of Nintendo Gamecube Prototypes - Hidden Palace" image="/public/consoles/Nintendo Gamecube.webp"  %}

---
## Games with Emulators ON Gamecube
A few Gamecube games have emulator code built into them either as bonus content (Animal Crossing, Fight Night Round 2) or as the main game (Sonic Mega Collection).

Here is a list of known games that have emulators built in:
* Fight Night Round 2 (uses an emulator called **SNESticle** to play Super Punch Out, ROM file is called SNS4Q0.471 on the Disc, same filename as seen in Nintendo Lot-Check Leaks)

### Fight Night Round 2
The Gamecube game **Fight Night Round 2** has a playable version of the SNES game **Super Punch Out** on the Disc called **SNS4Q0.471**. This file must have come from Nintendo as it matches the Nintendo Lot-check naming scheme that Nintendo uses internally.

The cool thing about this is that the emulator was written by **Icer Addis** who was the co-creator of one of the first ever NES emulators known as **NESticle**. An easter egg of sorts can be found when looking at the strings inside the executable, they called the SNES emulator for gamecube **SNESticle**!

Not only that but a project was launched to try to get other SNES ROMS to work with the emulator known as the **The SNESticle Liberation Project** which consisted of a Multi-ROM menu SNES Rom and a Python script to inject ROMS and put everything together (**fn22snesticle.py**).

The devlog is a very good read and is available here: [Devlog - The SNESticle Liberation Project](https://dataswamp.org/~josk/snesticle/devlog/)

This drew the attention of Icer who decided to release the full source code for **SNESticle** (PS2 & Dreamcast):
[iaddis/SNESticle: SNESticle source code (circa ~2004)](https://github.com/iaddis/SNESticle)

---
# Game Engines for the Nintendo GameCube
Before **Unity** and the modern **Unreal Engine** dominated the scene it was common for developers to create their own **in-house** game engine, or license a third party engine.

## Merkury engine by Krome Studios (in-house)
Krome Studios used the **Merkury Engine** for many of its own titles, particularly on the GameCube and other last-generation systems. A programmer for **Krome Studios**, Tony Ball managed to get the engine running on the GameCube hardware only took a couple of weeks, with development running simultaneously with the PlayStation 2 version.

Here are the games that used the Merkury Engine for the GameCube:
* **Ty the Tasmanian Tiger** (2002) - The first in the franchise and a flagship Merkury title.
* **The Adventures of Jimmy Neutron: Jet Fusion** (2003) - Also released on PS2.
* **Ty the Tasmanian Tiger 2: Bush Rescue** (2004)
* **King Arthur** (2004)
* **Ty the Tasmanian Tiger 3: Night of the Quinkan** (2005)
* **The Legend of Spyro: A New Beginning** (2006) - Developed by Krome for the GameCube, PS2, Xbox, and GBA.

If you are interested in learning more we have a specific post about the **Merkury** engine:
{% include_cached link-to-other-post.html post="/krome-merkury-engine" %}

---
# Reverse Engineering

---
## Console security
[Modern Vintage Gamer](https://www.youtube.com/watch?v=Uxjl_kD3imQ) explains how GameCube security was defeated. The video provides context for the platform's disc formats, homebrew tools and reverse-engineering workflows.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uxjl_kD3imQ" title="How the Nintendo GameCube Security was defeated | MVG" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## GameCube specific File Formats
We have a specific post that covers all the file formats that can be found in gamecube games (or file formats used to store gamecube games) here:
{% include_cached link-to-other-post.html post="/gamecube-file-formats" description="Check out this post for a list of Gamecube file formats." %}


---
## Recognising PowerPC Compiler Patterns
Ordinary C arithmetic can look elaborate in a PowerPC disassembly.
The [decomp.wtf PowerPC guide](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/app/guide/ppc.md) provides recognition clues; use instruction semantics to test each interpretation rather than assigning an original C type from one opcode [^1].

These patterns are useful starting points for the GameCube's integer and scalar floating-point code [^2]:

Pattern | Interpretation to test
---|---
`clrlwi r3,r3,24` | Keep the low eight bits, as in a mask or an unsigned-byte conversion
`cmpw` versus `cmplw` | Signed versus unsigned comparison at this operation
`cntlzw` followed by a right shift of five | Produce one for a zero input and zero otherwise
`fctiwz`, followed by a store and integer load | Convert floating point to a signed integer with truncation toward zero, then transfer the result
`frsp` | Round a floating-point register value to single precision

For example, this illustrative sequence computes a zero test into `r3`:

```nasm
cntlzw r3,r4
srwi   r3,r3,5
```

A zero 32-bit input has 32 leading zero bits; any nonzero input has at most 31.
Shifting that count right by five gives a value equivalent to `r4 == 0`.
This identifies the operation, not whether the programmer wrote `!x`, a comparison or a conditional expression.

---
### Floating-Point Expressions Need Extra Care
An integer-to-floating-point conversion may construct a double-precision bit pattern in memory and subtract a bias.
The constants can look like unrelated game data until the surrounding stores and floating-point load are traced [^1].

The `fmadds` instruction combines multiplication and addition with a single rounding to single precision.
It can implement an expression shaped like `a * b + c`, but separate multiply and add instructions can round differently [^3].
Preserve operand order and check the compiler's floating-point settings when matching.
Likewise, `frsp` establishes a rounding operation; it does not alone prove there was a source-level `double` variable.

Compare these candidates with the [matching-decompilation workflow](/decompilers#troubleshooting-matching-decompilation), keeping the project's compiler and flags fixed while testing expression changes.

---
## Runtime Thunks and Register Inputs
Some runtime helpers use inputs outside the ordinary C argument registers.
The [decomp.wtf tests](https://github.com/i12bp8/decomp.wtf/blob/main/tests/test_handwritten.py) include a CodeWarrior member-function-pointer dispatch helper, `__ptmf_scall`, that reads a descriptor through `r12` before assigning that register [^4].

Trace the caller's setup of `r12` and the helper's loads before declaring an ordinary C function prototype.
A wrapper that adjusts an object pointer and branches indirectly may implement language runtime machinery rather than game logic.
Compare against the project's runtime library before attempting an independent reconstruction.

For general checks, see [function boundaries and unusual calling conventions](/disassemblers#check-function-boundaries-and-unusual-calling-conventions).

---
# All Posts
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platforms="GameCube|Nintendo GameCube" %}

---
# References
[^1]: [decomp.wtf - PowerPC guide](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/app/guide/ppc.md).
[^2]: [IBM AIX 7.1 Assembler Language Reference](https://www.ibm.com/docs/ssw_aix_71/assembler/assembler_pdf.pdf), instruction entries for clrlwi, cmp, cmpl, cntlzw, fctiwz and frsp.
[^3]: [IBM - Floating Multiply-Add instruction](https://www.ibm.com/docs/en/aix/7.1.0?topic=set-fmadd-fma-floating-multiply-add-instruction).
[^4]: [decomp.wtf - CodeWarrior runtime-helper fixtures](https://github.com/i12bp8/decomp.wtf/blob/main/tests/test_handwritten.py).
