---
layout: post
tags: 
- howitworked
- pc
- nes
- appleII
- graphics
- commodore
- atari
title: How Retro Graphics worked
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/Tfh0ytz8S0k/sddefault.jpg
permalink: /how-retro-graphics-worked
breadcrumbs:
  - name: Home
    url: /
  - name: How it Works
    url: /howitworks
  - name: How Retro Graphics worked
    url: #
recommend: dos
editlink: /articles/HowItWorks/RetroGraphics.md
videocarousel:
  - title: Part 1
    image: https://i.ytimg.com/vi/Tfh0ytz8S0k/sddefault.jpg
    youtube: 'Tfh0ytz8S0k'
  - title: Part 2
    image: https://img.youtube.com/vi/_rsycfDliZU/maxresdefault.jpg
    youtube: '_rsycfDliZU'
---

The 8-bit Guy on youtube has an excellent series of videos covering how early computer graphics were implemented with the limitations of the hardware in mind.

# Memory
Previously graphics chips didn't have their own memory (e.g VRAM) so they had to share Ram with he CPU.

If you look at common screen resolutions you can calculate the amount of memory used just to store the pixel data in RAM:
* 320x320 (64,000 pixels)

If each of those pixels was represented by a single bit (black and white) then you would need 8KB of RAM to store the screen. But most games want at least a little colour:

Bits per pixel (BPP) | RAM Required
---|---
1 (black and white) | 8KB
4 (16 colours) | 32K
8 (256 colours) | 64K

Note that this is a huge amount of RAM for early computers, 64K could be larger than the total RAM available for the system [^1].

## Methods for optimising Memory usage
As it was not feasible to use the entire ram just to store pixel data for the screen a few optimisations were developed to save RAM.

### Colour Cells
Colour cells was an optimisation that instead of storing colour values for each pixel it would store it for a square group of pixels known as a "cell".

Each individual pixel would still be represented by 1 bit, for either background or foreground colour, and each colour cell would be 1 byte including RGB data for both the background and foreground colour of a cell.

But the limitation of this mode is that each cell can only have 2 colours.

To get around this limitation the Commodore64 had a mode called "Multi-color Mode" which made the pixels in a cell twice as wide. Lowering the resolution and hence saving RAM, but it uses that saved RAM to allow 4 colours per cell instead of 2. 

So it was a trade off in terms of resolution to get more colours.

Colour Cells were Used in:
* Commodore 64/128/VIC-20/Plus4.
* TI-99, Sinclair Spectrum
* Nintendo Entertainment System

#### Hardware Sprite Generator
Another tool to get around the limitations of Colour Cells was the Hardwire Sprite Generator.

Basically if you wanted a character or enemy to use more colours and resolution that the colour cells allowed you could make them a "Sprite" which act completely independently to the background colours [^1].

### NTSC Artifact Colouring
NTSC Artifact colour was Used in: 
* Apple II (Apple 2)
* Tandy Colour Computer

The Apple II has a notoriously complicated graphics system. It also came in two modes which were completely separate:
* Monochrome Mode
* Colour Mode

The screen is separated into 7 pixel blocks, where each pixel is 1bit and the 8th bit of the byte defines which Pallete should be used.

### CPU Driven Graphics
CPU driven graphics are used when there is no dedicated Video chip so the CPU had to spend most of its time sending pixel data to the screen.

Used in:
* Sinclair ZX81
* Atari 2600

# References
[^1]: [How "oldschool" graphics worked Part 1 - Commodore and Nintendo](https://www.youtube.com/watch?v=Tfh0ytz8S0k)
[^2]: [How "oldschool" graphics work, part 2 - Apple and Atari](https://www.youtube.com/watch?v=_rsycfDliZU)
