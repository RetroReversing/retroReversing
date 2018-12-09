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

# Find Ultra64 SDK Library Symbols
You can use this tool: https://github.com/shygoo/n64sym 
```bash
n64sym paper_mario.bin -l libs/libgultra_rom.a
```

-------
# Part 3 - Advanced

## Embedded Javascript engine in Project64
Youtube: https://www.youtube.com/watch?v=PC0Tlz6oiN0 

## Use the official tools to display textures, sounds and NIF models
youtube - https://www.youtube.com/watch?v=yUX1Vga6amg 

## IDA Pro
When loading Turok .z64 into IDA pro an error window pops up with:
`The boot code is not loaded into the database, use manual load to load it`

