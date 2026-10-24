---
permalink: /3ds
layout: post
title: Nintendo 3DS (Citrus/CTR)
recommend: 3ds
recommendTitle: All 3DS Posts
editlink: ../categories/consoles/3ds.md
category: '3ds'
excerpt: Awesome list of 3DS Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Nintendo 3DS
    url: #
videocarousel:
  - title: EarlyDaysOf3DSHacking
    image: http://img.youtube.com/vi/ImR-TdDAIJE/0.jpg
    youtube: 'ImR-TdDAIJE'
redirect_from:
  - /EarlyDaysOf3DSHacking
  - /3ds/
tags:
  - 3ds
updatedAt: '2026-10-22'
---

# Introduction
Nintendo's 3DS arrived in 2011 with a glasses-free stereoscopic upper screen and a touch screen below it [^1]. For anyone taking apart a game, those two displays are only the visible part of the system: ARM11 software, a separate ARM9 security processor, PICA200 graphics, and several layers of cartridge files all have their own roles [^2]. This hub connects the hardware, development equipment, game formats, and early homebrew work to the more detailed guides below.

## Why do some documents call it Citrus or CTR?
The 3DS followed the [Nintendo DS](/ds) (NITRO) and DSi (TWL). Its development material often uses **CTR**, while file-format names expand it as **Citrus** - for example, CTR Cart Image (CCI) and Citrus Executable Image (CXI) [^3]. The names are useful search terms when a tool, board, or file does not say "3DS" outright.

---
# Hardware
The [Nintendo 3DS hardware analysis by Rodrigo Copetti](https://www.copetti.org/writings/consoles/nintendo-3ds/) traces the processors, graphics pipeline, memory, and security model. Start there when a register access, display behavior, or executable's privilege level needs more context [^2].

## How did stereoscopic 3D change the graphics workload?
The upper display presents a separate 400 x 240 view to each eye; the lower display adds another 320 x 240 image [^2]. In [Iwata Asks: The Hardware Concept](https://iwataasks.nintendo.com/interviews/3ds/how-nintendo-3ds-made/1/2/), Nintendo's engineers describe the practical consequence: supporting 3D meant producing three images, while the brighter backlight also consumed power. Their choice of Digital Media Professionals' graphics technology was shaped by that power budget [^4]. When investigating a game's rendering, it helps to ask whether a scene is drawn twice for stereo or shown only on the lower screen.

## Retail Nintendo 3DS Hardware
Copetti's diagrams also distinguish the ARM11 application side from the ARM9 side and explain how both relate to older DS software [^2]. The article is a useful companion to a disassembly because a 3DS game does not have direct control over every component in the machine.

{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/nintendo-3ds/" description="Copetti.org has an excellent tear down of the Nintendo 3DS Hardware and how it works" image="/public/consoles/Nintendo-3DS.png" title="Nintendo 3DS Architecture - A Practical Analysis" %}

## What did 3DS development hardware look like?
The [development hardware guide](/nintendo-3ds-development-kit) collects photographs and documentation of early CTR target boards and later Partner-CTR equipment. The exposed prototype board is especially helpful for seeing how the two screens and development connections were arranged before the final handheld shell.

{% include_cached link-to-other-post.html post="/nintendo-3ds-development-kit" description="Photographs and notes on CTR prototype boards and official development kits." %}

---
# Games and Homebrew
## Where are a game's code and assets stored?
A 3DS game card image uses an NCSD header to describe its partitions. Those partitions contain NCCH files: an executable CXI can hold ARM11 code in ExeFS and game data in RomFS, while a CFA is non-executable content [^5]. This is why opening a cartridge image is only the first step toward finding the program or the files it loads. The [3DS file formats guide](/3DSFileFormats) maps the extensions and containers you are likely to encounter.

{% include_cached link-to-other-post.html post="/3DSFileFormats" description="A guide to the cartridge, executable, and resource containers used by 3DS games." %}

## How did early 3DS homebrew get started?
The [ninjhax source repository](https://github.com/smealum/ninjhax) shows one route from a game's QR-code reader to unsigned homebrew. Its README identifies the initial Cubic Ninja QR loader, the secondary payload, and the homebrew menu; the project also links to the author's technical write-up [^6]. The [Tech Rules video](https://www.youtube.com/watch?v=ImR-TdDAIJE) tells the story of this early hacking period, including the unlikely role of that game.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ImR-TdDAIJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="Nintendo 3DS" %}

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [Nintendo, "Nintendo 3DS brings a dimensional shift to the world of entertainment on March 25"](https://www.nintendo.com/en-gb/News/2011/Nintendo-3DS-brings-a-dimensional-shift-to-the-world-of-entertainment-on-March-25-253340.html)
[^2]: [Rodrigo Copetti, "Nintendo 3DS Architecture"](https://www.copetti.org/writings/consoles/nintendo-3ds/)
[^3]: [3dbrew, "CCI"](https://www.3dbrew.org/wiki/CCI) and ["NCCH"](https://www.3dbrew.org/wiki/NCCH)
[^4]: [Nintendo, "Iwata Asks: The Hardware Concept", page 3](https://iwataasks.nintendo.com/interviews/3ds/how-nintendo-3ds-made/1/2/)
[^5]: [3dbrew, "NCSD"](https://www.3dbrew.org/wiki/NCSD) and ["NCCH"](https://www.3dbrew.org/wiki/NCCH)
[^6]: [smealum, ninjhax source and README](https://github.com/smealum/ninjhax)
