---
permalink: /hardware/
layout: post
console: hardware
title: Game Console Hardware
breadcrumbs:
  - name: Home
    url: /
  - name: Hardware
    url: /hardware
redirect_from:
  - /hardware
  - /cpu
  - /playStation-evolution
tags:
- hardware
recommend:
- hardware
- introduction
editlink: ../categories/hardware/hardware.md
---

Welcome to our our page dedicated to the hardware topics related to reverse engineering! This page serves two roles. It groups all of our posts related to physical Hardware, and it aggregates high quality sources from the web into create a unified reference.

# Retro Gaming Hardware
This section collects the main topics related to the general hardware components that are used in game consoles and development kits.

## Microprocessors
This section tracks the key CPUs that defined each console generation, from simple 8-bit designs to richer 16/32-bit hybrids.
Knowing their instruction sets, bus layouts, and quirks is essential for emulation, tooling, and reverse engineering hardware behavior.


### MOS 6502 (1975+)
Released by **MOS Technology** in 1975, the 6502 was designed as an affordable alternative to the more expensive microprocessors of its time. It was used in the Nintendo Entertainment System, Atari 2600, Commodore 64 and many others. We have a specific post all about is here:

{% include link-to-other-post.html post="/6502" %}

### Motorola 68K
Motorola's 68K family powered a generation of consoles and computers thanks to its clean CISC design and generous register set.
It was famously used in the Sega Genesis/Mega Drive, Atari ST, and early Macintosh systems, we have a specific post all about is here:

{% include link-to-other-post.html post="/68k" %}

### The PowerPC
The PowerPC was a collaboration between Apple, IBM, and Motorola, custom PowerPC chips used in the Nintendo GameCube (Gekko), Wii (Broadway), Xbox 360, and PlayStation 3.

{% include link-to-other-post.html post="/powerpc" %}

---
## Development Kit Hardware
We have all our Game Console Development Kit Hardware posts categorised from a single page, acting as a central hub for understanding the specialized hardware used to create video games:

{% include link-to-other-post.html post="/hardware/devkits/" %}

---
## Cheat Cartridge Hardware
{% include link-to-other-post.html post="/hardware/cheatcartridge/" %}

---
## Retail Console Hardware

### Evolution Of PlayStation Hardware (PS1 to PS4)
[gameranx](https://www.youtube.com/watch?v=j-eVnP-Om3s) has an excellent video documenting the architectural evolution of Sony's console line from 1995 to 2013. It details key hardware transitions, including the PS1's dedicated 3D processing, the PS2's Emotion Engine and DVD integration, the PS3's complex Cell Broadband Engine with Blu-ray support, and the PS4's shift to a developer-friendly x86-64 APU with unified GDDR5 memory.

<iframe width="560" height="315" src="https://www.youtube.com/embed/j-eVnP-Om3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PlayStation One Hardware
{% include link-to-other-post.html post="/playStation-architecture" %}

{% include link-to-other-post.html post="/ps1-gte" %}

### PlayStation 2 Contole Hardware
{% include link-to-other-post.html post="/playStation-2-architecture" %}

### Nintendo 64 Console Hardware
{% include link-to-other-post.html post="/n64-hardware-architecture/" %}

### SEGA Saturn Hardware
{% include link-to-other-post.html post="/saturn-architecture" %}

---
# Hardware Reverse Engineering 

## How to Reverse engineer a microchip
{% include link-to-other-post.html post="/how-to-reverse-microchip" %}

## Verilog - Hardware Description Language
{% include link-to-other-post.html post="/verilog" %}

### rePalm: Porting PalmOS to the Fisher-Price Pixter Color
Dmitry.GR has an excellent write up about reverse engineering the **Fisher-Price Pixter Color** to run **PalmOS 5**. It covers the challenges of the device's minimal **Sharp LH75411 ARM7 SoC** (lacking cache and MMU), creating a custom cartridge for code execution, and optimizing performance for the hardware's slow memory bus and STN display.

{% include link-to-other-site.html url="https://dmitry.gr/?r=05.Projects&proj=27.+rePalm#pixter" description="Dmitry.GR details the process of porting PalmOS to the **Fisher-Price Pixter Color**, including reverse engineering the cartridge interface, overcoming the limitations of the ARM7 SoC, and developing custom hardware drivers." image="https://dmitry.gr/images/rePalm/pixter_boot.jpg" title="rePalm on **Pixter** Color" %}

---
# All Posts
{% include console.html %}
