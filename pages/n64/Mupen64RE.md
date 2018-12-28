Mupen64+ Reversing Emulator
---
layout: post
tags: 
- n64
title: Mupen64+ Reversers Edition
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /mupen64RE
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Mupen64+ Reverser Edition
    url: #
recommend: n64
editlink: /n64/Mupen64RE.md
---

# Introduction
Mupen64+ Reverser Edition (RE) is a fork of the Mupen64+ Nintendo 64 emulator tailored for reverse engineering.

The main aim is to generate information that will be useful for the disassembling and decompilation of your chosen game.

It does this by tracing and logging information about asm instructions, functions, memory addresses, DMAs etc as the user plays the game.

The main output after the user has finished playing is a couple of files: an n64split config file and a tracing JSON file.

# Features

# Auto detection of ASM regions
Using DMA and TLB data we can auto detect regions of the rom which are interpreted as assembly instructions and use this information to write out a N64Split config file with asm region information. 

# Auto detection of data reads to ROM addresses
Using DMA and TLB tracing information we can generate a list of sections in the rom which are used to transfer data to memory.

We also log the 4 byte header of each region which can be very useful for finding compressed data, e.g MIO or RNC are common headers.

This information is written out into the n64split config file allowing the splitter to separate binary sections from assembly and eventually to use the header information to generate uncompressed assets.

# Auto detection of Function names
We provide a json file with common function signatures from libultra, this is used to auto detect which functions are included in the game and putting a name to the function.

This information is also written out into the n64split config file as a label which can further help the process of starting a new reversing project.


# Finding common functions across games
We store the byte pattern of every function we come across while playing multiple games and can use this information to find common functions across games. 

This can be very useful for finding common libraries used across multiple games as well as finding out common game engines used by companies.

It was very common for the same development house to use a game engine for multiple games, one example is the Turok2 engine being used for the South Park game.

This also means we only need to name a function once and it can be detected in other games, sharing the knowledge between multiple projects.

This information is written out into the labels section of the n64split config file and if you find functions with names that start with a different game name then you have likely found a common library or engine function.

Here is part of the n64split label output of playing a single race in top gear overdrive, not that it finds common functions that it has seen before when playing Road Rash and BlastCorps. Along with finding common libultra symbols.
￼

# Auto detection of Audio regions
Logging of the RSP Audio decoding allows us to identify which parts of the rom are audio files, as can bee seen below:
￼

# Future Plans
* Auto detection of Texture/3D data?
* Auto detection of memcopy
* Auto detection of uncompression routine
* config file to load what to log
* automated memory corruption
* More ultra64 signatures
* Auto Detection of Audio/Input/Display functions
* option to collapse audio regions into smaller regions
* log function calls
* replace functions with javascript
* auto detect rsp.boot

GZIP header in Beetle Adventure Racing:
￼
