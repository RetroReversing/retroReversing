---
layout: post
tags: 
- n64
- reversingEmulator
title: N64 Reversing Emulator - Mupen64+ RE
image:  /public/N64/N64ReversingEmulator.png
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
updatedAt: '2020-07-04'
editlink: /n64/Mupen64RE.md
---

# Introduction
<section class="postSection">
<img src="/public/mupenRE/MupenN64ReversingEmulator.png" class="wow slideInLeft postImage" />
  <div markdown="1">

Mupen64+ Reverser Edition (RE) is a fork of the Mupen64+ Nintendo 64 emulator tailored for reverse engineering.

The main aim is to generate information that will be useful for the disassembling and decompilation of your chosen game.

It does this by tracing and logging information about asm instructions, functions, memory addresses, DMAs etc as the user plays the game.

The main output after the user has finished playing is a couple of files: an n64split config file and a tracing JSON file.
</div>
</section>

---

# Features

## Auto detection of ASM regions
<section class="postSection">
<img src="/public/mupenRE/Mupen64+ RE ASM regions.jpeg" class="wow bounceInUp postImage" />
  <div markdown="1">
Using DMA and TLB data we can auto detect regions of the rom which are interpreted as assembly instructions and use this information to write out a N64Split config file with asm region information. 
  </div>
</section>

---

## Auto detection of data reads to ROM addresses
<section class="postSection">
  <img src="/public/mupenRE/MupenRE headers.png" class="wow bounceInUp postImage" />
<div markdown="1">
Using DMA and TLB tracing information we can generate a list of sections in the rom which are used to transfer data to memory.

We also log the 4 byte header of each region which can be very useful for finding compressed data, e.g MIO or RNC are common headers.

This information is written out into the n64split config file allowing the splitter to separate binary sections from assembly and eventually to use the header information to generate uncompressed assets.
</div>
</section>

---

## Auto detection of Function names
<section class="postSection">
  <img src="/public/mupenRE/mupenRE Library.png" class="wow bounceInUp postImage" />
<div markdown="1">
  We provide a json file with common function signatures from libultra, this is used to auto detect which functions are included in the game and putting a name to the function.

  This information is also written out into the n64split config file as a label which can further help the process of starting a new reversing project.
</div>
</section>

---

## Finding common functions across games
<section class="postSection">
  <img src="/public/mupenRE/Mupen64+ RE Common Functions.jpeg" class="wow bounceInUp postImage" />

<div markdown="1">
We store the byte pattern of every function we come across while playing multiple games and can use this information to find common functions across games. 

This can be very useful for finding common libraries used across multiple games as well as finding out common game engines used by companies.

It was very common for the same development house to use a game engine for multiple games, one example is the Turok2 engine being used for the South Park game.

This also means we only need to name a function once and it can be detected in other games, sharing the knowledge between multiple projects.

This information is written out into the labels section of the n64split config file and if you find functions with names that start with a different game name then you have likely found a common library or engine function.

Here is part of the n64split label output of playing a single race in top gear overdrive, note that it finds common functions that it has seen before when playing Road Rash and BlastCorps. Along with finding common libultra symbols.
</div>
￼</section>

---

## Auto detection of Audio regions
<section class="postSection">
<img src="/public/mupenRE/Mupen64+ Reversers Edition.jpeg" class="wow bounceInUp postImage" />
<div markdown="1">
  Logging of the RSP Audio decoding allows us to identify which parts of the rom are audio files.
 </div>
</section>
---

## Configurable Dynamic Memory Corruption
<section class="postSection">
<div markdown="1">
One effective way to find out what to name certain areas of a rom is to corrupt it and witness the result. For example we currently detect audio regions of the rom but can't detect WHAT audio is playing, to help with this we support custom config paramters that allow you to choose the section to corrupt at runtime, allowing you to effectivly name unmapped regios of the ROM.
  </div>
</section>

## Printf Logging (osSyncPrintf)
<section class="postSection">
  <img src="/public/mupenRE/MupenRE printfs.png" class="wow bounceInUp postImage" />
<div markdown="1">
  Sometimes the developer leaves in printf statement to help debugging, we can log these to json and also print them to the console, also useful for homebrew development.
</div>
</section>

---

# Future Plans
* Auto detection of Texture/3D data?
* Auto detection of memcopy
* Auto detection of uncompression routine
* config file to load what to log
* More ultra64 signatures (use Zignature format?)
* Auto Detection of Audio/Input/Display functions
* option to collapse audio regions into smaller regions
* log function calls
* replace functions with javascript
* auto detect rsp.boot
￼
---
# Download & Source Code
Currently there are no pre-built binaries yet but you can build it yourself by cloning the github repository: [RetroReversing/mupen64plus-core: Core module of the Mupen64Plus Reversing Emulator](https://github.com/RetroReversing/mupen64plus-core)

## Running
when you have compiled the code you will get a dynamic library file (*.dylib on mac, *.so on linux and *.dll on windows) you can run mupen using this core like so:
```bash
./mupen64plus --corelib ./libmupen64plus.dylib --gfx ./mupen64plus-video-glide64mk2.dylib --noosd ./example.v64
```
