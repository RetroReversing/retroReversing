---
layout: post
tags: 
- n64
- hardware
title: Nintendo 64 Hardware Architecture
thumbnail: /public/consoles/Nintendo 64.png
videocarousel:
  - title: Nintendo 64 Game Console Teardown
    image: http://img.youtube.com/vi/ScicrgZwvg4/hqdefault.jpg
    youtube: ScicrgZwvg4
image: http://img.youtube.com/vi/ScicrgZwvg4/hqdefault.jpg
permalink: /n64-hardware-architecture/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Nintendo 64 Hardware Architecture
    url: #
recommend: n64
editlink: /n64/N64HardwareArchitecture.md
---
The custom chips inside the N64 tend of have the suffix `NUS` which stands for Nintendo Ultimate SixtyFour.

<img src="/public/N64/NUS- CPU -01.jpg" class="wow slideInLeft postImage" />

## CPU (CPU-NUS A) (9726XK053)
The CPU was called the `VR4300` which was a derivative of the 64-bit MIPS R4300i, it developed by a partnership between SGI and Nintendo and manufactured by NEC [^1]. 
It ran at 93.75MHz and has an onboard 24 KB L1 cache [^2].

## RCP-NUS (Reality Co-processor) (9727EK078)
<section class="postSection">
    <img src="/public/N64/N64-RCP-Decapped.jpg" class="wow slideInLeft postImage" />

<div markdown="1">

The RCP was the main graphics chip in the Nintendo 64 developed by SGI/Nintendo and manufactured by NEC [^1]. 
It consisted of multiple separate areas that can be seen in the De-capped chip on the left, such as the RDP and RSP. 

The Reality Display Processor (RDP) is used to render the polygons into 2D pixels that it stores in the FrameBuffer ready to be displayed on the screen.

{% include link-to-other-post.html post="/n64rdp" description="For more information about the Reality Display Processor check out this post." %}

The N64 Reality Signal Processor (RSP) is the part of the Reality Co-Processor (RCP) that deals with data transform. It is a MIPS-based cpu like the main R4300 cpu but it also contains additional 8-bit vector opcodes.

{% include link-to-other-post.html post="/n64rsp" description="For more information about the Reality Signal Processor check out this post." %}

</div>
</section>


## PIF(P)-NUS (PIF)
The Peripheral Interface Bus (PIF) handles all the input from external peripherals such as the game controllers. It has a small Initial Program Loader which is about 2kb of code. 

It also was used for security to region-lock and prevent piracy, it does this by waiting for the security chip in the cartridge before it loads the next IPL from the cartridge [^1]. 

It was designed by Nintendo but manufactured by Sharp.

## Nintendo RDRAM18-NUS (9727LU641)
The RDRAM came as a standard 4MB  and was manufactured by NEC, you could get an additional 4MB if you used the Expansion Pak [^1].


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
