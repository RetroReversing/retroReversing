---
layout: post
tags: 
- n64
- hardware
- consolearchitecture
title: Nintendo 64 Hardware Architecture
category: n64
videocarousel:
  - title: Nintendo 64 Super Computer
    image: https://img.youtube.com/vi/a4SxPDQcG_k/hqdefault.jpg
    youtube: a4SxPDQcG_k
  - title: Nintendo 64 Game Console Teardown
    image: https://img.youtube.com/vi/ScicrgZwvg4/hqdefault.jpg
    youtube: ScicrgZwvg4
image: https://img.youtube.com/vi/ScicrgZwvg4/hqdefault.jpg
permalink: /n64-hardware-architecture
redirect_from:
  - /n64-hardware-architecture/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Nintendo 64 Hardware Architecture
    url: #
recommend: n64
editlink: /consoles/n64/N64HardwareArchitecture.md
updatedAt: '2026-10-22'
---

<section class="postSection">
<img src="/public/N64/NUS- CPU -01.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The Nintendo 64 hardware brought incredible processing power into players homes with its 64-bit architecture and state of the art graphics.

In order to pull this off Nintendo worked with SGI and a number of manufacturers to develop a PCB that would not only deliver power but would also be affordable to the average consumer.

The custom chips inside the N64 all have the suffix `NUS` which stands for Nintendo Ultra Sixtyfour.

</div>
</section>

## CPU (CPU-NUS A) (9726XK053)
<section class="postSection">
    <img src="/public/N64/Nintendo64-CPU-NUS.jpg" class="wow slideInLeft postImage" />

<div markdown="1">

The CPU was called the `VR4300` which was a derivative of the 64-bit MIPS R4300i, it developed by a partnership between SGI and Nintendo and manufactured by NEC [^1]. 

It ran at 93.75MHz and has an onboard 24 KB L1 cache [^2].

</div>
</section>

### CPU address spaces and DMA caches
The CPU uses virtual addresses. In the kernel mode normally used by N64 applications, two regions map directly to physical memory, while other regions can be mapped through the translation lookaside buffer (TLB) [^3]. The common regions have different cache behaviour:

Region | Virtual range | Mapping and cache behaviour
---|---|---
KUSEG | `0x00000000`-`0x7FFFFFFF` | TLB mapped
KSEG0 | `0x80000000`-`0x9FFFFFFF` | Direct mapped and cached
KSEG1 | `0xA0000000`-`0xBFFFFFFF` | Direct mapped and uncached
KSSEG | `0xC0000000`-`0xDFFFFFFF` | TLB mapped
KSEG3 | `0xE0000000`-`0xFFFFFFFF` | TLB mapped

For example, `0x80000000` and `0xA0000000` both refer to physical address zero, but only the first uses the CPU cache. This is why a debugger's CPU address is not necessarily a ROM offset or a unique physical location [^3].

DMA adds a second concern. The CPU's data cache can hold bytes that an RSP task or DMA engine cannot yet see. Software must write back cached data before a device reads it, and invalidate the destination cache lines before a device writes new data into memory. Nintendo's manual also warns about cache-line alignment when DMA buffers share a line with unrelated data [^4].


---
## RCP-NUS (Reality Co-processor) (9727EK078)
<section class="postSection">
    <img src="/public/N64/N64-RCP-Decapped.jpg" class="wow slideInLeft postImage" />

<div markdown="1">

The Nintendo 64 has a separate `Reality Co-Processor` (RCP) for graphics work. The CPU still prepares display lists and schedules graphics tasks; the RCP handles much of the geometry and pixel processing [^5].

The RCP chip was developed by a partnership between SGI Inc and Nintendo and the retail version was physically manufactured by NEC [^1]. 

The RCP is split into two distinct parts: the `Reality Signal Processor` (RSP) for geometry transformations and the `Reality Display Processor` (RDP) for pixel operations. You can see the de-capped chip on the left, showing the main parts such as the RDP and RSP.

The Reality Display Processor (RDP) is used to render the polygons into 2D pixels that it stores in the FrameBuffer ready to be displayed on the screen.

{% include_cached link-to-other-post.html post="/n64rdp" description="For more information about the Reality Display Processor check out this post." %}

The N64 Reality Signal Processor (RSP) is the part of the Reality Co-Processor (RCP) that deals with data transform. It is a MIPS-based cpu like the main R4300 cpu but it also contains additional 8-bit vector opcodes.

{% include_cached link-to-other-post.html post="/n64rsp" description="For more information about the Reality Signal Processor check out this post." %}

</div>
</section>

---
### Comparing the N64 and PlayStation
[Purple Arcade](https://www.youtube.com/watch?v=DhKX_i4BlGs) compares why games on the [PlayStation](/ps1) and Nintendo 64 looked different. It is a useful visual comparison of the consequences of their hardware designs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DhKX_i4BlGs" title="Why PS1 and N64 Games Were Different" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## PIF(P)-NUS (PIF)
The Peripheral Interface Bus (PIF) handles all the input from external peripherals such as the game controllers. It has a small Initial Program Loader which is about 2kb of code. 

It also was used for security to region-lock and prevent piracy, it does this by waiting for the security chip in the cartridge before it loads the next IPL from the cartridge [^1]. 

It was designed by Nintendo but manufactured by Sharp.

## Nintendo RDRAM18-NUS (9727LU641)
<section class="postSection">
    <img src="/public/N64/Nintendo64-RDRAM18-NUS.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The RDRAM came as a standard 4MB  and was manufactured by NEC, you could get an additional 4MB if you used the Expansion Pak [^1].

</div>
</section>


## MX8330MC (Main Clock)
The `MX8330MC` is a RAMBUS clock generator developed by `Macronix`, hence the MX in the name.


## Audio/Video Hardware

### AMP-NUS (Audio Amp)
The Audio Amp used for any audio playback and fun actions as a regular amp. 

### 9480F
16-bit stereo audio DAC.

### DENC-NUS (Dac Encoder)
The Dac Encoder is used for processing video


---
# Cartridge hardware

## Mask ROMS
The Mask ROMS were manufactured by `Macronix` and contained all the game data in a single chip [^1].


---
# References
[^1]: [EEVblog #491 - Nintendo 64 Game Console Teardown - Page 1](https://www.eevblog.com/forum/blog/eevblog-491-nintendo-64-game-console-teardown/) 
[^2]: [Nintendo 64 technical specifications - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_64_technical_specifications)
[^3]: [Nintendo 64 Programming Manual - CPU Addressing](https://ultra64.ca/files/documentation/online-manuals/man/pro-man/pro09/09-03.html), kernel address regions and direct mappings.
[^4]: [Nintendo 64 Programming Manual - Data Cache](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/pro-man/pro03/03-06.htm), cache writeback, invalidation, and DMA alignment.
[^5]: [Nintendo SDK - OSTask Structure](https://ultra64.ca/files/documentation/online-manuals/functions_reference_manual_2.0i/os/OSTask.html), CPU task setup and graphics command lists.
