---
layout: post
tags: 
- n64
title: N64 Reversing Introduction
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /N64Reversing
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Reversing Introduction
    url: #
recommend: n64
editlink: /n64/N64ReversingIntroduction.md
---

This post will give a brief introduction for the tools and techniques you need to start reverse engineering and decompiling a N64 Game.

# Part 1 - Looking for Initial Clues

## Find filenames in rom
One way to get a hint of the programming languages that a rom was written in (normally either c or c++) is to look for any left over references to the filenames in  the rom.

One really nice website that lists this information is:
http://shygoo.net/n64-uncompiled/n64-filenames.txt

## Find left over source code in the rom
Very occasionally you can be lucky and see a snippet or two of the original source code left in the rom, you can view a list of these here:
http://en64.shoutwiki.com/wiki/N64_C_Repo

-------

# Part 2 - Splitting up the ROM

## Introduction to N64Split
N64 Split is a tool initially developed for Super Mario 64 for extracting files out of the n64 rom but it is now general enough to be used for any N64 game.

This is the tool we will be using to start reversing the game of your choice.

You can download N64 Split here: [queueRAM/sm64tools: Collection of tools for Super Mario 64 ROM hacking](https://github.com/queueRAM/sm64tools)

## Find existing N64Split configs
If someone has already started reversing a game you may be lucky and they could have generated a config file that we can use in N64Split:
https://github.com/queueRAM/sm64tools/tree/master/configs

## Creating a new N64Split config
If the game you want to reverse engineer does not yet have a split file config then we can create one using the following template:
```yaml
# ROM splitter configuration file
name: "Your Game Name (Region)"

# checksums from ROM header offsets 0x10 and 0x14
# used for auto configuration detection
checksum1: 0xA03CF036
checksum2: 0xBCC1C5D2

# base filename used for outputs - [please, no spaces)
basename: "yourGameName.region"

# ranges to split the ROM into
# types:
#   asm      - MIPS assembly block.  Symbol names are in 'labels' list below
#   behavior - behavior script
#   bin      - raw binary, usually data
#   header   - ROM header block
#   instrset - instrument set
#   level    - level commands
#   m64      - M64 music sequence bank
#   mio0     - MIO0 compressed data block.  may have texture breakdown
#   ptr      - RAM address or ROM offset pointer
#
#   textures types:
#      rgba   - 16-bit RGBA - [5-5-5-1)
#      ia     - 16/8/4/1-bit greyscale
#      skybox - grid of 32x32 16-bit RGBA
ranges:
   # start,  end,      type,     label
   - [0x000000, 0x000040, "header", "header"]
   - [0x000040, 0x001000, "bin",    "boot"]
   - [0x001000, 0x0B6A40, "asm", "main", 0x80241800]
# Labels for functions or data memory addresses
# All label addresses are RAM addresses
# Order does not matter
labels:
  - [0x80241800, "EntryPoint"]
```

### Set checksum values
You will notice in the above template that there are 2 checksum addresses:
```yaml
checksum1: 0xA03CF036
checksum2: 0xBCC1C5D2
```
These are currently set to the checksum for Mario64 which will be no good for any other game, so lets get some proper values for this!

You will need to change the checksum1 and checksum2 values to the values of your specific rom. 

You can find the values by opening the Z64 ROM in a hex editor and going to address 0x10 and copying the hex value at that location. The same for checksum2 at 0x14 in the ROM.

### Set Entry point values
In two sections of the above template we have reference to the hex address `0x80241800`.
One is in the labels section:
```yaml
labels:
  - [0x80241800, "EntryPoint"]
```

The other is in the main range section:
```yaml
   - [0x001000, 0x0B6A40, "asm", "main", 0x80241800]
```

 This is called the Entry Point of a game and it is start point for the game code in RAM, the value above is for the Super Mario ROM.

So we need to replace this value with the start address of the game you are wanting to reverse.

Again open your ROM in a hex editor and go to address: 0x08 and use the 4 bytes at that address to set the entry point for you rom.

### Set end of assembly
This is much trickier, so while we know that the assembly code starts at 0x001000 we don’t know where it finishes. This will require some disassembling and detective work which is what we will do in the next section so for now keep it at `0x0B6A40` which is where the initial Mario code ends. We will find the proper value for this later on.

------
# Part 3 - Code Analysis

### Find Ultra64 SDK Library Symbols
You can use this tool: https://github.com/shygoo/n64sym 
```bash
n64sym paper_mario.bin -l libs/libgultra_rom.a
```

-------
# Part 4 - Advanced

## Embedded Javascript engine in Project64
Youtube: https://www.youtube.com/watch?v=PC0Tlz6oiN0 

## Use the official tools to display textures, sounds and NIF models
youtube - https://www.youtube.com/watch?v=yUX1Vga6amg 

## IDA Pro
When loading Turok .z64 into IDA pro an error window pops up with:
`The boot code is not loaded into the database, use manual load to load it`

