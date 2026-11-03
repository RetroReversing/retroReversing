---
permalink: /ps4
redirect_from:
  - /ps4/
layout: post
title: Sony Playstation 4
recommend: ps4
recommendTitle: All PS4 Posts
editlink: ../categories/consoles/PS4.md
category: ps4
excerpt: Awesome list of Sony Playstation 4 Game Development and Reverse Engineering information
updatedAt: '2026-11-03'
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Sony Playstation 4
    url: #
tags:
  - ps4
---

# Introduction
Sony launched the PlayStation 4 in 2013 with an x86-64 CPU, an AMD-derived GPU and unified GDDR5 memory. That made the processor architecture more familiar than the PS3's Cell, but a PS4 game still depends on console-specific executable formats and system libraries [^2] [^3]. This hub collects hardware, development-kit and software references for following those differences through a game.

### Mark Cerny: The Road to PS4 Architecture
[Darien](https://www.youtube.com/watch?v=JJW5OKbh0WA) hosts Mark Cerny's 2013 “The Road to PS4” presentation. Cerny explains the move from the PS3's Cell to x86-64 and why unified GDDR5 memory mattered to game development.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JJW5OKbh0WA" frameborder="0" allowfullscreen></iframe>

---
# Hardware
The retail system and its development hardware answer different questions: one shows what shipped games could use, while the other shows how studios built and tested them.

## Retail Hardware
Sony's [2013 system announcement](https://sonyinteractive.com/en/press-releases/sony-computer-entertainment-inc-introduces-playstation4-ps4/) specifies eight AMD Jaguar x86-64 CPU cores, a Radeon-based GPU with 18 compute units, and 8 GB of unified GDDR5 memory [^2]. Those figures describe the launch hardware; game code still has to be read in the context of Sony's own operating system and graphics interfaces.

## Development Hardware
Our development-hardware post collects the official PS4 kits:
{% include_cached link-to-other-post.html post="/official-playStation4-devkit" %}

## Why is a PS4 executable different from a PC ELF?
The CPU may use x86-64 instructions, but PS4 programs are not ordinary PC executables. The [OpenOrbis PS4 ELF specification](https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain/wiki/PS4-ELF-Specification) documents Sony-specific ELF program headers and a dynamic-library-data segment containing module names, external symbols and relocations [^3]. These are useful landmarks when a disassembler can decode the instructions but cannot yet resolve imports. OpenOrbis documents the format from its homebrew toolchain; its notes are a guide to the structures it handles, not a complete specification of every retail build.

The [OpenOrbis toolchain](https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain) provides a practical example. Identify an executable's imported libraries before treating its raw x86-64 disassembly as a self-contained game.

## Operating System
The PS4 operating system is commonly called Orbis OS; [Phoronix](https://www.phoronix.com/news/MTM5NDI) reported its FreeBSD 9.0 lineage in 2013 [^1]. That heritage does not make PS4 games interchangeable with FreeBSD applications: the executable and library conventions above remain console-specific.

---
# All Posts
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="PlayStation 4" %}

---
# References
[^1]: [Sony's PlayStation 4 Is Running Modified FreeBSD 9 - Phoronix](https://www.phoronix.com/news/MTM5NDI)
[^2]: [Sony Computer Entertainment, PlayStation 4 system announcement (February 2013)](https://sonyinteractive.com/en/press-releases/sony-computer-entertainment-inc-introduces-playstation4-ps4/).
[^3]: [OpenOrbis, PS4 ELF Specification](https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain/wiki/PS4-ELF-Specification).
