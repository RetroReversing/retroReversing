---
layout: post
tags: 
- gameboy
- fileformats
title: Game Boy File Formats (DMG & GBC)
thumbnail: /public/consoles/Nintendo Game Boy.png
_image: /public/images/GameBoy/GameBoy File Formats.jpg
_twitterimage: https://www.retroreversing.com/public/images/wii/Wii File Formats.jpg
permalink: /wii-file-formats
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Game Boy (DMG & CGB)
    url: /gameboy
  - name: Game Boy File Formats
    url: #
recommend: 
- gameboy
- fileformats
editlink: ./gameboy/GameBoyFileFormats.md
_updatedAt: '2023-04-14'
excerpt: Find out about the most common Game Boy File formats in this post
---

# Game Boy File Formats

## Game Boy ROM File Formats
There are a few different file formats that you will find relating to the GameBoy which are listed below:
* **.ISX** Official Nintendo ROM file (compiled by the assembler **ISAS**) (contains debug symbols)
* **.GB** Original GameBoy ROM file (no debug symbols) the exact contents of the ROM chip inside the cartridge
* **.GBC** Original GameBoy Color ROM file (no debug symbols) the exact contents of the ROM chip inside the cartridge

If you backup your own games they will be created with a **.GB** or **.GBC** file extension along with most of the ROMS that can be found online. If the ROM was leaked from a first party developer such as Nintendo then they will likely be in **.ISX** format, this can easily be converted to **.GBC** with the tool **CVTISX** included in the Official GameBoy SDK.

The emulator **SameBoy** recently added support to play ISX files due to the **2020 Nintendo Leaks**:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Following the... uh... recent events, I&#39;ve added ISX file format support to SameBoy, including symbol support <a href="https://t.co/Ba28bA2ARu">pic.twitter.com/Ba28bA2ARu</a></p>&mdash; Lior Halphon (@LIJI32) <a href="https://twitter.com/LIJI32/status/1254137545325260801?ref_src=twsrc%5Etfw">April 25, 2020</a></blockquote>

## Official Game Boy SDK File Formats
This SDK seems to use a number of different file formats, but it is not clear what exactly is the purpose of each.

### Game Boy Source Code File Formats
* **.DMG** - Assembly source code for the Dot Matrix Game (Game Boy)
* **.X65** - Either Famicom or Super Famicom source code 
* **.S** - Game Boy Color assembly source code 
* **.CVT** - Custom Conversion scripts that can be executed with FCV

### Game Boy Source Code Output File Formats
* **.COM** - Compiled Game Boy ROM file, unsure difference between this and ISX
* **.O** - Assembled output of a .DMG/.S/.X65 Source code file
* **.HEX** - Plain data file for including in the ROM - could be anything

### Graphics File Formats
* **.CHR** - Character Graphics Data from Famicom and Game Boy (2 bits per pixel planar)
* **.CGE** - Character Graphics data (For famicom?)
* **.DCG** - Character Graphics data (for DMG Game Boy?)

### Unknown File Formats
* **.SCR** - Screen file maybe containing location of character tiles in a level?
* **.ICE** - Something to do with the In-Circuit-Emulator?

