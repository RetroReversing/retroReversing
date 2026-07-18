---
layout: post
permalink: /gameboy
title: Nintendo Game Boy Reverse Engineering
category: gameboy
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Nintendo Game Boy Reverse Engineering
    url: #
tags:
  - gameboy
  - introduction
recommendTitle: All Game Boy Posts
recommend:
  - gameboy
  - gba
  - introduction
  - ds
editlink: ../categories/consoles/GameBoy.md
excerpt: Hub page for Game Boy and Game Boy Color hardware, development, reverse engineering, and source code resources
updatedAt: '2026-04-26'
redirect_from:
  - /gameboy/hardware
  - /ultimate-gameboy
  - /gameboy/
---

# Introduction
The original Game Boy (DMG) and Game Boy Color (GBC) are good reverse-engineering targets because the software stack is still small enough to reason about directly, while the hardware is rich in cartridge mappers, boot-time behaviour, audio quirks, and late-1990s toolchains. They sit at a useful midpoint between 8-bit home consoles and later handhelds, so platform details are still visible instead of disappearing behind large SDKs and operating systems.

This page serves two roles. It groups the RetroReversing posts related to the Game Boy family, and it curates a set of external references that are worth keeping close while you work through ROMs, schematics, tools, or source code.

## Quick Technical Reference
The quick reference below is useful when choosing an emulator, debugger, or disassembly target:

Property | Notes
---|---
CPU | Sharp LR35902, an 8-bit CPU with `i8080` and Z80 ancestry
Display | `160x144` LCD with tile- and sprite-based graphics
RAM | DMG has 8 KB work RAM and 8 KB VRAM; GBC expands the memory available to software
Audio | Four hardware sound channels
Cartridges | Commonly include ROM plus mapper hardware such as MBC controllers, battery-backed RAM, or RTC logic

---
# Hardware
Understanding the platform before opening a ROM saves time. The Game Boy family is simple enough to study at board-level, but it still has enough cartridge and accessory variation that hardware context matters.

## Hardware Architecture
If you want a broad architectural overview before going deeper, Copetti's write-up is one of the best starting points:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/game-boy/" description="Rodrigo Copetti provides a practical architectural overview of the Game Boy, covering the CPU, memory layout, graphics pipeline, audio system, and cartridge hardware." image="/public/NintendoGameBoyThumb.png" title="Game Boy Architecture - A Practical Analysis" %}

## Boot ROM
The boot ROM is one of the first platform-specific code paths worth understanding. It establishes initial hardware state, checks cartridge header data, and controls the startup sequence:
{% include link-to-other-site.html url="https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/" description="A practical breakdown of the original Game Boy bootstrap process, useful when studying cartridge headers, reset state, and emulator accuracy." title="A Look At The Game Boy Bootstrap" %}

## Sharp LR35902 Microprocessor
The Sharp LR35902 is close enough to Z80-family code to feel familiar, but different enough that you should treat it as its own target architecture. In practice it sits somewhere between the `i8080` and the Z80 and is not binary-compatible with either:
{% include_cached link-to-other-post.html post="/z80" description="Background on the Z80 family and why the Game Boy CPU looks familiar while still requiring Game Boy specific handling." %}

## Schematics
If you want to work from recreated board-level documentation, Gekkio's schematic set is a strong reference for the Pocket hardware revision:
{% include link-to-other-site.html url="https://github.com/Gekkio/gb-schematics/blob/master/MGB-xCPU/schematic/MGB-xCPU.pdf" description="Recreated schematics for the Game Boy Pocket CPU board, useful for tracing signals and understanding hardware level behaviour." title="Game Boy Pocket Hardware Schematics" %}

## The Ultimate Game Boy Talk
The video below is still one of the best broad introductions to the hardware and the programming model, especially if you want one long-form overview before drilling into specific subsystems:
<iframe width="560" height="315" src="https://www.youtube.com/embed/HyzD8pNlpwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Game Boy, a hardware autopsy
These two videos are worth keeping together because they focus on the physical hardware itself rather than the higher-level architectural write-ups above:
<iframe width="560" height="315" src="https://www.youtube.com/embed/RZUDEaLa5Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ecTQVa42sJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Development
Understanding the official toolchain helps when you encounter build artifacts, linker conventions, or assembly layout in old projects.

## Development Kit Hardware
Nintendo sold dedicated development hardware for Game Boy projects, and the physical setup explains a lot about how teams built, tested, and flashed handheld software in the early 1990s:
{% include_cached link-to-other-post.html post="/gameboy-development-kit-hardware" description="An overview of the official Game Boy development hardware and how it fit into commercial production workflows." %}

## Software Development Kit
Alongside the hardware, Nintendo also shipped a software development kit with assemblers, linkers, and related utilities:
{% include_cached link-to-other-post.html post="/official-gameboy-software-dev-kit" description="Notes on the official Game Boy SDK, including the tools and file types that appear in retail era development setups." %}

## Assembly Language
The Game Boy CPU uses its own instruction set variant, so it helps to keep a Game Boy specific opcode reference nearby instead of assuming normal Z80 compatibility:
{% include link-to-other-site.html url="https://www.chibiakumas.com/z80/Gameboy.php" description="A beginner friendly but detailed introduction to Game Boy assembly programming, with examples of the instruction set and platform specific quirks." image="https://www.chibiakumas.com/z80/AsmTitleStrip.jpg" title="Game Boy Assembly Programming" %}

---
# Reverse Engineering
If you want to begin with projects that already expose structure, build systems, or platform specific research, start with the material below.

## Pokemon Red and Blue
The Pokemon Reverse Engineering Team (PRET) reconstructed Pokemon Red and Blue into retail matching assembly, making it one of the most useful Game Boy case studies for understanding large commercial codebases:
{% include_cached link-to-other-post.html post="/pokemonredblue" description="Coverage of the PRET disassembly project and why it matters for rebuildable Game Boy reverse engineering." %}

## Link's Awakening
The Link's Awakening disassembly effort produced a steady stream of technical write-ups that are still useful when you want to see how a polished commercial Game Boy title is structured internally:
{% include link-to-other-site.html url="https://kemenaran.winosx.com/posts/category-disassembling-links-awakening/" description="A long-running series on disassembling Link's Awakening, with practical explanations of systems, data formats, and game logic." image="https://kemenaran.winosx.com/images/zelda-links-awakening-sfx/LADX-move.gif" title="Disassembling Link's Awakening" %}

## Looney Tunes Carrot Crazy
If you want a more focused example of reversing a single Game Boy Color title, this write-up is a good smaller target:
{% include link-to-other-site.html url="https://www.huderlem.com/blog/posts/carrot-crazy-1/" description="A practical reverse engineering walk-through for Looney Tunes Carrot Crazy on the Game Boy Color." image="https://www.huderlem.com/blog/posts/carrot-crazy-1/password-entry-screen.png" title="Reverse Engineering Carrot Crazy" %}

## Exclusive Games as Research Targets
Platform exclusives are often better long-term preservation targets because they are less likely to have cleaner ports or modern rereleases. These two category pages are simple discovery lists rather than technical references, but they are useful when you need candidate ROMs to investigate:
{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy-only_games" description="A discovery list of original DMG exclusives that can help you find titles which still depend on original Game Boy hardware." image="/public/NintendoGameBoyThumb.png" title="Original Game Boy Exclusive Games" %}

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy_Color-only_games" description="A discovery list of Game Boy Color exclusives, useful when you want GBC specific software targets rather than DMG compatible games." image="/public/consoles/Nintendo Game Boy Color.png" title="Game Boy Color Exclusive Games" %}

---
# Source Code
Official or near-official source releases are especially valuable on Game Boy because they expose real memory layouts, tool conventions, and cartridge assumptions that decompilation alone can hide.

## Mr Do! for Original Game Boy
The released source code for `Mr Do!` is a useful reference point for how a commercial Game Boy project was organised in 1990:
{% include_cached link-to-other-post.html post="/mrdo" description="Coverage of the Mr Do! source release and the structure of a retail era Game Boy codebase." %}

---
# Games
Some game-specific anecdotes are worth keeping because they point to development constraints, unusual implementation tricks, or particularly good analysis material.

## Alien 3
`Alien 3` is a useful reminder of how compressed licensed handheld schedules could be. Jas Austin has said the Game Boy version was written in about five weeks [^1].
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fastest commercial game I&#39;ve ever written? That would have been Alien3 on Game Boy. Done in about 5 weeks :) with <a href="https://twitter.com/recluse_games?ref_src=twsrc%5Etfw">@recluse_games</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/297359737287225345?ref_src=twsrc%5Etfw">February 1, 2013</a></blockquote> 

## R-Type
According to Jas Austin, the Game Boy version of `R-Type` was largely built from memory after arcade research trips rather than from shared code or art assets [^2].

He also described being hired after showing a one-week demo to B.I.T.S, which is a useful glimpse into how quickly Game Boy contract work could move in that era [^2].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I agree, it&#39;s amazing some of the lengths we have to go to when we didn&#39;t have code or assets. For R-Type I did most of it from memory after visits to the Trocadero in London. And I didn&#39;t live in London.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1251581149643780097?ref_src=twsrc%5Etfw">April 18, 2020</a></blockquote>

The company **B.I.T.S** obtained the license to develop the Game Boy version of the game but required a programmer to work on the title. **Jas Austin** heard about this through his agency and travelled to London to meet up, he impressed them so much that he was given a development kit and a deadline of a week to come up with a demo. He did such a good job he got a permanent job at **B.I.T.S** [^2].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I hid a version of John Conway's game of Life in R-Type on the Game Boy.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1379131739415719941?ref_src=twsrc%5Etfw">April 5, 2021</a></blockquote>

Austin later mentioned hiding an implementation of John Conway's Game of Life inside the cartridge [^3], and also shared source graphics for the level 3 ship by Mark Jones [^4].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Source graphics for Game Boy R-Type Lv3 ship. By Mark Jones... <a href="https://twitter.com/hashtag/ScreenshotSaturday24YearsAgo?src=hash&amp;ref_src=twsrc%5Etfw">#ScreenshotSaturday24YearsAgo</a> <a href="http://t.co/RsKlc0rQOE">pic.twitter.com/RsKlc0rQOE</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/591964228053016577?ref_src=twsrc%5Etfw">April 25, 2015</a></blockquote>

## How Pokemon Gold & Silver Work (Tribute to Satoru Iwata)
[TheHappieCat](https://www.youtube.com/watch?v=XGFBtVbBgnM) explains the technical wizardry Satoru Iwata employed to fit the Kanto region into *Pokémon Gold & Silver*. The video provides a primer on low-level assembly programming and memory alignment, illustrating how efficient data packing and optimization allowed for the game's massive scope on the limited Game Boy Color hardware.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XGFBtVbBgnM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Peripherals and Accessories
The wider Game Boy ecosystem matters for reverse engineering because several accessories introduce their own protocols, bootstrap behaviour, or unusual cartridge side hardware.

## Mobile Adapter GB
Nintendo released a Japanese accessory called the Mobile Adapter GB which connected a Game Boy Color to a mobile phone. Only a small set of games used it, making it a good example of an obscure platform feature that remained dormant for years:
{% include link-to-other-site.html url="https://xcellerator.github.io/posts/tetsuji/" description="TheXcellerator explains how the Mobile Adapter GB works and how it was turned into a route for running custom code years after release." title="Tetsuji - Remote Code Execution on a Game Boy Colour 22 Years Later" %}

## Super Game Boy
The video below explains how the Super Game Boy embeds Game Boy hardware inside a Super Nintendo cartridge, creating a hybrid environment with its own timing and presentation quirks:
{% include link-to-other-site.html url="https://www.youtube.com/watch?v=uaeLY441Fwc" description="A video overview of the Super Game Boy hardware and how Nintendo adapted the handheld for television output." title="Super Game Boy Overview" %}
<iframe width="560" height="420" src="https://www.youtube.com/embed/uaeLY441Fwc?color=white&theme=dark"></iframe>

## Wide Boy 64
The video below covers the **Wide Boy 64**, an official but non-retail device used by developers and press to run Game Boy and Game Boy Advance software through an N64 based setup:
{% include link-to-other-site.html url="https://www.youtube.com/watch?v=llIz6qjDfLc" description="An overview of the Wide Boy 64 and why it matters as a rare Nintendo evaluation and capture device." title="Wide Boy 64 Overview" %}
<iframe width="560" height="420" src="https://www.youtube.com/embed/llIz6qjDfLc?color=white&theme=dark"></iframe>

## Game Boy Printer
![Game Boy Printer](../../public/images/GameBoy/Game Boy Printer.png)
The Game Boy Printer not only supported the Game Boy Camera, several games shipped explicit printing features, games such as `Pokemon Yellow`, `Pokemon Gold`, and `Pokemon Silver` all used it for output such as Pokedex stickers [^5].

At the protocol level, the printer behaves like a link-cable serial peripheral. The Game Boy remains the master, while the printer waits for packets beginning with the magic bytes `0x88, 0x33`. Known commands include `INIT`, `PRINT`, `DATA`, and `STATUS`, with image dot-data transferred in `160x16` strips until a full `160x144` image is buffered [^6].

This is useful for emulator authors because the print data uses the same 2bpp tile-style format as normal Game Boy graphics. Some games also use the printer's optional run-length encoding, and robust emulators need to handle edge cases such as empty `DATA` packets [^6].

Shonumi has an in-depth article on emulating the Game Boy Printer, it explains the printer packet format, serial link behaviour, command set, dot-data transfer, status handling, and the run-length encoding used for compressed print data:

{% include link-to-other-site.html url="https://shonumi.github.io/articles/art2.html" description="A technical breakdown of Game Boy Printer emulation, covering link cable serial packets, printer commands, image dot-data, status responses, and the compression format used by some games." title="In Depth: The Game Boy Printer" %}

## GB Booster
The **GB Booster** was an unlicensed Nintendo 64 accessory in the same broad space as the Super Game Boy, but built outside Nintendo's official hardware ecosystem. Two short references are useful if you want to document it further:
* **[Chris McCovell](http://www.chrismcovell.com/gbbooster.html)** - Notes and photos covering the hardware and behaviour of the device.
* **[GameHacking.org Wiki](https://gamehacking.org/wiki/Game_Booster_(Nintendo_64))** - A general reference page for the accessory.
<iframe width="560" height="420" src="https://www.youtube.com/embed/NiMx10PV_cw?color=white&theme=dark"></iframe>

## Datel Game Booster and GameStudio
The video below shows Datel's PlayStation Game Booster:
<iframe width="560" height="420" src="https://www.youtube.com/embed/SxF2e6DUMRo?color=white&theme=dark"></iframe>

The Image below shows the later `GameStudio` accessory for PlayStation 2 also by Datel:
<img alt="Datel GameStudio" src="https://github.com/RetroReversing/retroReversing/assets/40120498/9026fc2e-7577-447d-94ee-e1643e97aa11">

## Dance Dance Revolution Controller for GBC
Konami's `Dance Dance Revolution` controller for the Game Boy Color is a useful example of how far the accessory ecosystem stretched beyond normal link cable peripherals:
<img alt="Dance Dance Revolution Controller for GBC" src="https://github.com/RetroReversing/retroReversing/assets/40120498/5de18708-4006-471f-88f4-3864f6a7f34a">

---
# Sound
The audio hardware is one of the most technically interesting parts of the platform, especially once you move beyond music drivers and start looking at the analogue side.

## Game Boy Color Audio Chip Reversing
**Ken Shirriff's** reverse engineering of the Game Boy Color audio amplifier chip is one of the best examples of taking the handheld beyond emulator level understanding and into silicon level analysis. The chip contains three power op-amps for the speaker and headphone paths, so the article is useful if you want analogue details rather than just register level behaviour:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I reverse-engineered the audio chip in the <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> Game Boy Color. It contains three power op-amps for the speaker and headphone channels. This 1998 chip is built from about 100 NPN and PNP transistors. Die photo from <a href="https://twitter.com/johndmcmaster?ref_src=twsrc%5Etfw">@johndmcmaster</a>. Article &amp; schematic:<a href="https://t.co/EhsVogAJPl">https://t.co/EhsVogAJPl</a> <a href="https://t.co/J6CYPsOdaz">pic.twitter.com/J6CYPsOdaz</a></p>&mdash; Ken Shirriff (@kenshirriff) <a href="https://twitter.com/kenshirriff/status/1256631240838361088?ref_src=twsrc%5Etfw">May 2, 2020</a></blockquote>

{% include link-to-other-site.html url="http://www.righto.com/2020/05/reverse-engineering-audio-chip-in.html" description="A transistor level analysis of the Game Boy Color audio amplifier chip, including die photos, schematic reconstruction, and analogue behaviour." title="Reverse Engineering the Audio Amplifier Chip in the Nintendo Game Boy Color" %}

## Synthic
`Synthic` played a large set of Game Boy games in a custom headless emulator and tracked the audio registers into a text format. That data was then used to train a machine learning model to generate new Game Boy music:
{% include link-to-other-site.html url="https://github.com/jawline/Synthic" description="A project that records Game Boy audio register activity from emulated play sessions and uses that data to generate new music." title="Synthic" %}

---
# Tools and File Formats
If you are tracing ROM headers, cartridge metadata, or patch formats, the material below is worth keeping close.

## File Formats
Start here if you want a broader survey of Game Boy file structures before drilling into specific ROM hacks or tools:
{% include_cached link-to-other-post.html post="/game-boy-file-formats" description="An overview of Game Boy file formats, cartridge related structures, and common file handling topics." %}

## gbtoolsid
When dealing with homebrew or unlabeled ROM sets, `gbtoolsid` is a practical first pass because it can often identify the toolchain used to build a Game Boy ROM:
{% include link-to-other-site.html url="https://github.com/bbbbbr/gbtoolsid" description="A command line utility for identifying which tools or engines were likely used to build a Game Boy ROM." title="gbtoolsid" %}

## DMG-palette-patcher
[MrBlinky](https://github.com/MrBlinky/DMG-palette-patcher) has released a Python tool for patching Original Game Boy (DMG) ROMs to use specific color palettes when played on a Game Boy Color. The script works by modifying the ROM's header-specifically the license code and title checksum-to trick the Game Boy Color's boot ROM into automatically selecting one of 45 built-in color palettes, such as the classic grey theme, rather than the default blue-greenish hues.

{% include link-to-other-site.html url="https://github.com/MrBlinky/DMG-palette-patcher" description="MrBlinky has released DMG-palette-patcher, a tool that modifies Game Boy ROM headers to trigger specific built-in color palettes on the Game Boy Color." title="DMG-palette-patcher by MrBlinky" %}

## gb-save-states
`gb-save-states` is interesting because it applies patch based save state support to commercial games running on original hardware, which makes it a good example of practical ROM level instrumentation:
{% include link-to-other-site.html url="https://github.com/mattcurrie/gb-save-states" description="A collection of patches that add save state support to Game Boy and Game Boy Color titles on original hardware." title="gb-save-states" %}

## Blem! PlayStation Emulator for the GB
`Blem!` was a prank ROM that pretended to boot a PlayStation emulator on the Game Boy. The joke was a reference to the `Bleem!` PlayStation emulator, and it was notable enough to show up in `GBX` issue 3 in a short discussion of Game Boy emulation on PC and Mac [^7]. It is not technically important in the same way as the tools above, but it is a useful reminder that handheld homebrew culture also produced jokes, hoaxes, and magazine folklore around emulation.

---
# All Posts
<div>

{% include console.html %}

</div>

---
# References
[^1]: [Jas Austin on Alien 3 for Game Boy taking about five weeks - Twitter/X](https://twitter.com/IamXERO/status/297359737287225345)
[^2]: [Terminator 2, R-Type, Altered Beast with Jas Austin - The Retro Hour EP320 - YouTube](https://www.youtube.com/watch?v=5ilnsca4jYc)
[^3]: [Jas Austin on hiding Conway's Game of Life inside R-Type - Twitter/X](https://twitter.com/IamXERO/status/1379131739415719941)
[^4]: [Jas Austin sharing R-Type source graphics by Mark Jones - Twitter/X](https://twitter.com/IamXERO/status/591964228053016577)
[^5]: [Game Boy Printer - Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Game_Boy_Printer)
[^6]: [Shonumi - In Depth: The Game Boy Printer](https://shonumi.github.io/articles/art2.html)
[^7]: GBX issue 3 (September 2001) page 11
