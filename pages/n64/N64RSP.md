---
layout: post
tags: 
- n64
title: N64 RSP - Reality Signal Processor
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64rsp
breadcrumbs:
  - name: Home
    url: /
  - name: N64
    url: /n64
  - name: N64 RSP - Reality Signal Processor
    url: #
recommend: n64
editlink: /n64/N64RSP.md
---

The N64 Reality Signal Processor (RSP) is the part of the Reality Co-Processor (RCP) that deals with data transform. It is a MIPS-based cpu like the main R4000 cpu but it also contains additional 8-bit vector opcodes[^1].

The data transform is crucial for both graphics and audio data and so microcode is used to implement graphics and audio routines that run on the RSP.

# RSP for Graphics
Common tasks given to the RSP for graphical data processing are:
* Lighting calculations
* Clipping
* Vertice Transforms (translate, scale, rotate)

# RSP for Audio
Common tasks given to the RSP for graphical data processing are:
* Wavetable Audio format decoding
* Midi Audio processing
* MP3 decoding (Conkers Bad Fur Day)

# Microcode
Although you can initially think of the RSP microcode as similar to a modern Shader language, as they are both used to implement a programmable graphics pipeline. 
It wasn’t common for developers to write their own microcode for their games until near the end of the N64 lifecycle. 

So most early games used pre-written microcode developed by SGI and Nintendo and used it like a fixed function graphical pipeline.

The main reason for the lack of custom microcode development by 3rd party games is due to the poor tools and documentation provided by nintendo. 
Not to mention the complexity of programming for it and no debugger was provided [^1].

# IMEM and DMEM
RSP has its own 8kb of memory split into 2 chunks, one for assembly instructions (opcodes) and the other 4k for data. 
The Data portion was called DMEM (0xA4000000 -> 0xA4000FFF) and the Code portion was called IMEM (0xA4001000 -> 0xA4001FFF) [^2].

#  References
[^1]: https://forum.beyond3d.com/threads/n64-rdp-rsp.15758/
[^2]: https://patater.com/gbaguy/day8n64.htm
