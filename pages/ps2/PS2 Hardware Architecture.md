---
layout: post
tags: 
- ps2
- hardware
- consolearchitecture
title: PlayStation 2 Hardware Architecture
thumbnail: /public/consoles/Sony PlayStation 2.png
youtube: "X6wtbHI94iE"
image: https://img.youtube.com/vi/X6wtbHI94iE/hqdefault.jpg
permalink: /playStation-2-architecture
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 2
    url: /ps2
  - name: PlayStation 2 Hardware Architecture
    url: #
recommend: 
  - ps2
  - consolearchitecture
editlink: /ps2/PS2 Hardware Architecture.md
---
PS1's hardware (Motherboard) overview. 

# Hardware Components

## Emotion Engine
* Used for Game Logic
* 32MB RAM
* MIPS 59k CPU

## Graphic Synthesiser
* Used for rendering and vertex transformation
* 4MB RAM
* 2.4 GPixel/sec
* Support for Mip-mapping and alpha blending
* Texture formats: 32/24/16/8/4

## I/O Processor (IOP)
* Used for Interaction with peripherals (Memory cards, usb devices, Networking, Audio, DVD etc)
* 2MB RAM (8MB on a devkit)
* Playstation 1 on a chip (used for playing PS1 games)
* 36.9 Mhz

## Sound Processor (SPU2)
* Sound controller

## Image processing Unit (IPU)
* Decodes MPEG2 streams

## Serial Interface (SIF)
* Used to Interface between the Emotion Engine (EE) and the I/O processor (IOP)
* SIFDMA - transfer memory to other processor
* CIFCMD - run a command on the other processor such as setting flags
* SIFRPC - run remote operations on the other processor, includes a return value

### Example of SIF in action
An example of using the SIF to communicate between both processors is the controller pad libraries. We want to communicate between libpad.a which runs on the Emotion Engine and padman.irx which runs on the I/O Processor.
So during the VBlank period the IOP Padman.irx uses SIFDMA to send controller information (such as which buttons are pressed) to the Emotion Engine.
The Emotion Engine can then request this information by calling the API scePadRead

---

# Hardware Specs

## Display Specs
 - Supports 480p progressive
 - MPEG-2 Full Motion Video (FMV)
 
## Sound Specs
- Dolby pro logic 2 (5.1 Surround sound)
- DTS
- Streaming Audio

## Max Game Specs
Per frame:
 - 120,000 and 6,000 tris
 - 3Mb of Textures 
 - Frame rate of 30 or 60fps

 
 

