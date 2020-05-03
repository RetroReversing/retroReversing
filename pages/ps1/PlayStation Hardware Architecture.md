---
layout: post
tags: 
- ps1
- hardware
- featured
- consolearchitecture
title: PlayStation 1 Hardware Architecture
thumbnail: /public/consoles/Sony Playstation.png
videocarousel:
  - title: Video 1
    image: https://img.youtube.com/vi/MPXpH2hxuNc/hqdefault.jpg
    youtube: 'MPXpH2hxuNc'
  - title: Video 2
    image: https://img.youtube.com/vi/JqeFT67U-xo/hqdefault.jpg
    youtube: 'JqeFT67U-xo'
  - title: Video 3
    image: https://img.youtube.com/vi/hT5NSWS-znc/hqdefault.jpg
    youtube: 'hT5NSWS-znc'
image: https://img.youtube.com/vi/JqeFT67U-xo/hqdefault.jpg
permalink: /playStation-architecture
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation
    url: /ps1
  - name: PlayStation Hardware Architecture (Motherboard)
    url: #
recommend: 
  - ps1
  - consolearchitecture
  - hardware
editlink: /ps1/PlayStation Hardware Architecture.md
redirect_from:
  - /inside-playstation
---
The Playstation One was not only Sony's first commercial video games console it was also the most popular console of its generation. The PS1 was competing against both the Nintendo 64 and Sega Saturn during its lifetime and in some respects was the underdog in terms of processing power and graphics. However don't be disillusioned the PS1 was still a very powerful machine for its time and when programmed correctly games could look stunning, sometimes even better than the Nintendo 64!

The Hardware initially looks quite clean and simple, especially in comparison to other consoles of its generation, but it still managed to pack a lot of power on to its small design.

# Main Board
<section class="postSection">
    <img src="/public/magazine/Playstation1_Motherboard.jpg" class="wow slideInLeft postImage" style="padding-right:15px" />
<div markdown="1">
  1. The CPU (MIPS R3000A 33.96Mhz 32-bit [^2])
  2. ROM containing the Operating System (512KB [^2])
  3. The GPU
  4. Main RAM (DRAM)
  5. Video RAM (VRAM)
  6. Sound Processing Unit (SPU)
  7. Sound RAM (512K)
  8. CD Controller
  9. CD DSP (Digital Signal Processor)
  10. Digital Audio Converter
  11. ???
  12. Video de/encoder
</div>
</section>

---
# The CPU
If you thought that the Nintendo 64 was the only console that partnered with SGI for this generation of consoles you would be mistaken, the CPU for the original playstation used technology licensed from SGI and build by `LSI Logic Corp` [^3].

The CPU used for the Playstation was not just a simple MIPS  R3000A, it was partnered with additional `co-processors` to handle system resources and geometry processing. There was actually only 2 co-processors in the CPU named COP0 and COP2 as COP1 and COP3 were not present in the chip.

## System Control Co-processor (COP0)
The System control co-processor was the part of the CPU that handled memory management, interrupts and hardware breakpoints. This allows the main processor to focus on game logic while the system co-processor handled all the lower-level details [^4].

## Geometry Transformation Engine (COP2)

The Geometry Transformation Engine (GTE) is on of the co-processors attached to the main processor, specifically designed to do fast maths operations. This is what allowed the playstation to do its fast processing of Geometry such as 3D models, animation and effects.

{% include link-to-other-post.html post="/ps1-gte" description="For more information on the GTE check out this post." %}

---

# References
[^1]: Edge Magazine issue 20 (May 1995)
[^2]: [What's inside a Playstation? - YouTube](https://www.youtube.com/watch?v=JqeFT67U-xo&feature=player_embedded)
[^3]: [PlayStation technical specifications - Wikipedia](https://en.wikipedia.org/wiki/PlayStation_technical_specifications#Central_processing_unit_(CPU))
[^4]: [www.raphnet.net/electronique/psx_adaptor/Playstation.txt](http://www.raphnet.net/electronique/psx_adaptor/Playstation.txt)
