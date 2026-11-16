---
permalink: /dos
layout: post
title: Awesome list of DOS Game Development and Reverse Engineering information
recommendTitle: All DOS Posts
editlink: ../categories/consoles/DOS.md
category: 'dos'
excerpt: Awesome list of DOS Game Development and Reverse Engineering information
redirect_from:
 - /msdos
 - /RetroCityRampage
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: DOS Game reverse engineering
    url: #
recommend: 
 - dos
 - pc
 - msx
tags:
  - dos
  - pc
updatedAt: '2026-11-16'
---

# Introduction
A DOS game's executable can be a small real-mode program, a protected-mode program started by an extender, or a mixture of both. That distinction changes where you look for its code, how it reaches DOS and BIOS services, and which memory addresses mean what. The hardware and game examples below give you starting points for each kind of investigation.

## Related PC platforms
Windows game reversing has its own guide:
{% include_cached link-to-other-post.html post="/pc" description="Windows PC game files, tools and reversing techniques." %}

For the MSX computer family, start here:
{% include_cached link-to-other-post.html post="/msx" description="MSX hardware, development and game reverse engineering." %}

## Glossary of Key Terms
A few terms recur in DOS graphics and timing discussions:
* <a id="glossary-mode13h"></a>**Mode 13h** - A standard VGA graphics mode providing 320x200 resolution with 256 colors from a palette of 262,144.
* <a id="glossary-pit"></a>**PIT** - The Programmable Interval Timer (Intel 8253/8254), used for system timing and generating precise hardware interrupts.
* <a id="glossary-irq0"></a>**IRQ0** - The highest priority hardware interrupt on the PC, typically mapped to the system timer.
* <a id="glossary-watcom"></a>**Open Watcom** - A C/C++ toolchain that includes DOS extender support.

---
# DOS-era PC Hardware

## Game Ports
Many DOS-era PCs exposed a 15-pin game port for joysticks and other controllers.

## DOS-era Graphics Hardware
A graphics card connects through an expansion bus; the connector alone does not tell you which video BIOS calls a game uses. ISA was common on earlier machines, followed by VESA Local Bus on many 486 boards and then PCI.

Bus / Port Type | Time Period | Notes & Relation to DOS Gaming
---|---|---
**ISA (Industry Standard Architecture)** | 1981 to mid-1990s | The dominant bus for early DOS graphics cards like CGA, EGA, and VGA cards. ISA ran at 8 MHz (later 16-bit at 8-10 MHz) and was the standard for most DOS expansion cards initially.
**VESA Local Bus (VLB)** | Early 1990s (~1992 to 1994) | A 32-bit local bus designed to increase throughput for VGA/SVGA cards by connecting directly to the CPU bus at 33 MHz. VLB cards were used briefly in DOS gaming to allow faster graphics and higher resolutions. Mostly on 486 systems.
**PCI (Peripheral Component Interconnect)** | Mid 1990s onwards (from ~1993) | PCI replaced VLB and ISA for most expansions. PCI introduced a separate clock and 32-bit or 64-bit data width with higher throughput, becoming common in late DOS era and Windows 95 gaming. Many late DOS and early Windows 3.x/95 games used PCI graphics cards.

The card-edge connectors make the generations easy to spot:

ISA 16-Bit:
![ISA 16-Bit AT Bus](https://github.com/user-attachments/assets/cd6a9e7d-84b1-4ccc-bb05-8882bd9ad7b2)

ISA 8-Bit:
![ISA 8-Bit PC Bus](https://github.com/user-attachments/assets/d2ac4f52-e189-4b45-8468-af2d63f05b6e)

VESA Local Bus (VLB):
 ![VLB](https://github.com/user-attachments/assets/0fb24a12-088b-49b4-8aac-efbf369981a9)

Some motherboards carried several slot types side by side; [Juan Linietsky photographed one with ISA and VLB slots](https://x.com/reduzio/status/1832339488611107221) [^5].

### How did a DOS game use different SVGA cards?
VESA's **VBE** specification defines BIOS calls for discovering supported graphics modes and setting one. A game using those calls can request an SVGA mode without hard-coding each card's registers. The [VBE 2.0 core-functions specification](https://www.phatcode.net/res/221/files/vbe20.pdf) documents the mode-information and mode-setting calls [^6]. VBE is a software interface; the VESA Local Bus in the table above is a motherboard expansion bus.

---
# DOS Game Reverse Engineering

---
## A DOS game reversing walkthrough
[Fabrice Lété](https://www.youtube.com/watch?v=KdIpuCznir4) works through reverse engineering an old DOS game. The investigation is a practical companion to the other game-specific reversing examples.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KdIpuCznir4" title="Reverse engineering an old DOS game (part 1 of N)" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Reversing DOS games with CicoParser
[CicoParser](https://github.com/gabonator/Education/tree/master/2021/CicoParser) translates x86 assembly into C, offering a route to studying and changing a DOS program without emulating every instruction. Its author demonstrates the approach in this video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4fAeUx8A-OE?si=w45EcMxhSPX2rLi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Reverse Engineering Strike Commander
Fabien Sanglard's [*Strike Commander* reverse-engineering series](https://fabiensanglard.net/reverse_engineering_strike_commander/index.php) follows the 1993 flight simulator from its game architecture through asset extraction and a playable reconstruction.

## Carmageddon 
Debug symbols found in the *Carmageddon Splat Pack* expansion helped the [Dethrace reverse-engineering project](https://github.com/dethrace-labs/dethrace) reconstruct the 1997 game.

### How Pizza Tycoon Simulated Traffic
[Pizza Legacy](https://pizzalegacy.nl/blog/traffic-system.html) features a technical write-up on reverse engineering the traffic simulation system from the 1994 DOS game Pizza Tycoon. The post covers the specific algorithms and engine optimizations the original developers used to route dozens of cars through a city on a strict 25 MHz CPU budget. These structural insights directly support the ongoing open-source C++ reimplementation of the game.

{% include link-to-other-site.html url="https://pizzalegacy.nl/blog/traffic-system.html" description="The Pizza Legacy blog explores the reverse engineering of Pizza Tycoon's 1994 traffic engine, detailing how developers managed city-wide vehicle simulation with minimal CPU overhead." image="" title="How Pizza Tycoon simulated traffic on a 25 MHz CPU" %}

---
# DOS Game Development

## Porting Retro City Rampage to MS-DOS
[Brian Provinciano explains the DOS port of *Retro City Rampage*](https://www.youtube.com/watch?v=kSKeWH4TY9Y), including its 486 target and single-floppy storage goal.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kSKeWH4TY9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Technical Constraints and Goals
The porting process was defined by the need to shrink a modern codebase into a footprint compatible with legacy hardware:
* **Target Hardware** - Minimum requirement of a 486 DX IBM PC compatible with 4MB of RAM.
* **Operating System** - Designed for MS-DOS 3.3 or higher.
* **Storage Limit** - The entire game, including assets, was required to fit on a single 1.44MB 3.5" high-density floppy disk.
* **Graphics Architecture** - Utilized a simple 1-byte-per-pixel buffer to map directly to VGA memory for performance.

### Optimization Strategies
Provinciano discusses several low-level techniques used to achieve real-time performance on the 486:
* **Reprogramming PIT** - The system timer was reprogrammed to increase precision beyond the default 55ms tick, allowing for synchronized audio and video.
* **Inline Assembly** - Used for performance-critical sections such as hiding the mouse cursor via `int 33h` and custom tile-drawing routines.
* **Asset Compression** - Implemented a two-stage compression pipeline: RLE (Run-Length Encoding) for fast runtime rendering and zlib for minimizing executable size on disk.
* **Data Generation** - To save disk space, pathfinding navigation data and car collision objects were generated procedurally from world collision data rather than being stored as distinct files.
* **Memory Management** - Aggressive use of `#ifdef` blocks to strip out modern engine features while maintaining a shared codebase between PS4 and DOS versions.

---
## DOS Gaming Aspect Ratio - 320x200
[Displaced Gamers](https://www.youtube.com/watch?v=YvckyWxHAIw) explains why a 320×200 game image was often displayed on a 4:3 CRT:
<iframe width="560" height="315" src="https://www.youtube.com/embed/YvckyWxHAIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## How did 32-bit DOS games get past real-mode memory limits?
A 386-class PC can run 32-bit protected-mode code, but DOS and its BIOS services still expect real-mode calls. A **DOS extender** starts the program in protected mode and handles the crossings back to those services. The [DPMI 1.0 specification](https://open-watcom.github.io/open-watcom-1.9/devel/dpmi10.pdf), published by the DPMI Committee on 12 March 1991, defines an interface between a protected-mode client and a host for memory, interrupts and real-mode calls [^7]. DPMI is an interface, not a single extender or a promise that every DOS game uses it.

The [Open Watcom DOS/4GW guide](https://open-watcom.github.io/open-watcom-v2-wikidocs/cpguide.html#dos4gw-linear-executables) gives a concrete file-level clue: a DOS/4GW linear executable begins with a real-mode stub that finds `DOS4GW.EXE`, which then loads the protected-mode program. If an EXE's opening instructions only launch an extender, inspect the payload before deciding that you have found the game's main logic [^8].

[PhilsComputerLab's DOS memory video](https://www.youtube.com/watch?v=VRYJsOdjDoM) introduces the conventional, expanded and extended-memory terms used in manuals from this period.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VRYJsOdjDoM" title="DOS Memory Explained" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

For a second extender to compare, the [CauseWay user's guide](https://open-watcom.github.io/open-watcom-v2-wikidocs/cw.html) describes its Watcom support and its intended compatibility with DOS/4GW [^9].

---
## DOS Game Modding

### DOS Game Corruption
The [jsRTC bookmarklet](https://github.com/redscientistlabs/jsRTC/blob/master/jsRTC_for_js-dosbox.txt) corrupts random memory addresses in a browser-based DOSBox session, giving you a quick way to experiment with game behavior.

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="DOS" %}

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: PSi2 Issue 19
[^2]: [All Sony hardware that they developed - Generation MSX](https://www.generation-msx.nl/company/sony/14/hardware/)
[^3]: [Download NVIDIA Tech Demos - NVIDIA Cool Stuff](https://www.nvidia.com/en-gb/geforce/community/demos/)
[^4]: GameMaker UK Magazine Issue 1 October 2003 by Future Publishing
[^5]: [Juan Linietsky](https://x.com/reduzio/status/1832339488611107221)
[^6]: [VESA, VBE Core Functions Standard, version 2.0](https://www.phatcode.net/res/221/files/vbe20.pdf), mode information and mode setting.
[^7]: [DPMI Committee, DOS Protected Mode Interface Specification, version 1.0](https://open-watcom.github.io/open-watcom-1.9/devel/dpmi10.pdf), 12 March 1991, introduction and service overview.
[^8]: [Open Watcom C/C++ Programmer's Guide, DOS/4GW Linear Executables](https://open-watcom.github.io/open-watcom-v2-wikidocs/cpguide.html#dos4gw-linear-executables), stub and loader descriptions.
[^9]: [Open Watcom, CauseWay User's Guide](https://open-watcom.github.io/open-watcom-v2-wikidocs/cw.html), DOS/4GW compatibility.
