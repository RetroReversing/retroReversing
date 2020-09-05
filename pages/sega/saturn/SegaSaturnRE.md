---
layout: post
tags: 
- saturn
- reversingEmulator
title: Sega Saturn Reversing Emulator
image: /public/images/saturn/Sega Saturn Reversing Emulator.jpg
twitterimage: http://www.retroreversing.com/public/images/saturn/Sega Saturn Reversing Emulator.jpg
thumbnail: /public/consoles/Sega Saturn.png
permalink: /Sega-Saturn-Reversing-Emulator
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Reversing Emulator
    url: #
recommend: saturn
updatedAt: '2020-07-04'
editlink: /sega/saturn/SegaSaturnRE.md
---
# Introduction
<section class="postSection">
<img src="/public/images/saturn/SegaSaturnReversingEmulatorScreenshot.jpg" class="wow slideInLeft postImage" />
  <div markdown="1">

The Sega Saturn Reversing Emulator (RE) is a fork of the Beetle Sega Saturn emulator tailored for reverse engineering.

The main aim is to generate information that will be useful for the disassembling and decompilation of your chosen game.

It does this by tracing and logging information about asm instructions, functions, memory addresses, DMAs etc as the user plays the game.

The main output after the user has finished playing is a number of files: mainly disassembled code and a tracing JSON file.
</div>
</section>

## Uses LibRetro & LibRetroReversing
The emulator is built on the libRetro fork of the Beetle Sega Saturn emulator, the reasons for this include:
* Users can choose their own frontend (e.g RetroArch)
* Standard libRetro functions can be shared among multiple reversing emulators.

LibRetroReversing is a fork of LibRetro which encompasses common reverse engineering functionality that is shared among multiple Reversing Emulators. This allows for new features and bug fixes to be easily ported across multiple games consoles. For example the CD functionality is shared between both the Saturn and Playstation Reversing Emulators.

## Uses a web-based UI
There is no better cross-platform UI kit than the web itself, it is highly likely you have a web browser on your system and so if you can browse facebook then you can reverse games with our UI!

---
# Features
The emulator contains all the functionality of a standard Saturn emulator but adds additional features for helping reverse engineer the game back into compilable source code.

## Log Input and playback with logging
<section class="postSection">
  <img src="/public/images/saturn/Saturn Reversing - Input Logging.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
One very important feature of the reversing emulator is the ability to record all the button presses made during a playthrough. This allows you to play the game at full speed but then later playback the same button presses with full logging enabled. This is an effective way to log a games functionality without having to play at unbearable framerates.
</div>
</section>
---

## Named Save States and Frame Usage logging
<section class="postSection">
  <img src="/public/images/saturn/Saturn Reversing - Named Save States.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
Once a playthrough has been completed the user has the ability to playback the input states and create named save states for interesting parts of the game.

The name of the save state and the frame number it was saved at are used to give the reverser a hint as to where a function or chunk of memory was used.

For example if a save state was created and called "Start of Level 2" then any function that first gets called in Level 2 will be labelled as such.
</div>
</section>

---
## Configurable Memory Corruption
<section class="postSection">
  <img src="/public/images/saturn/Saturn Reversing - Corruption.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
One effective way to find out what to name certain file or areas of memory is corrupt it and witness the result. 

For example we currently detect audio regions of the rom but can't detect **WHAT** audio is playing, to help with this we support a configuration UI that allow you to choose the file or memory section to corrupt at runtime, allowing you to effectively name unmapped regions of the game.
  </div>
</section>

---
## Data Visualiser
<section class="postSection">
  <img src="/public/images/saturn/Saturn Reversing - Data Visualiser.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
When dealing with huge chunks of memory it can be useful to visualise the bytes in order to detect patterns or images encoded in the data. There are a number of different visualisers such as:
* 8Bits per Pixel (Each byte is coloured)
* 16 Bits Per Pixel
* 24 Bits Per Pixel
  </div>
</section>

---
## Disassembler
<section class="postSection">
  <img src="/public/images/saturn/saturnRE/Saturn Reversing - Disassembler.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
The tool uses the emulation logic from the emulator to export assembly language source code during execution. This has the advantage that it only detects assembly code actually executed so it is almost guaranteed to be correct.
  </div>
</section>

---
## Scripting Support
<section class="postSection">
  <img src="/public/images/saturn/Saturn Reversing - Scripting.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
  The emulator has the ability to run scripts that you define, places where you can execute scripts include:
* File Loading from CD - execute a script when a file is read from the CD file system
* Memory Read/Write - execute code when a specific memory region is read or written to
* Function calling - execute a script when a function is called and overwrite the functionality of the script

The current scripting language supported is Javascript however support for a C-based interpreter is planned for the near future.
</div>
</section>

---
# Planned Features
These are functions that are currently being worked on but not ready for release just yet.

## Function Tagging (Manual)
<section class="postSection">
<div markdown="1">
Unless you are lucky enough to have debug symbols for the game you want to reverse then you will be faced with hundreds of unnamed functions. 

You will ideally want to name these functions something useful so you can start to understand the functionality of the game. However it is very hard to get these names correct as you just piece together the name based on evidence as you discover more about the functionality. These small pieces of evidence can be saved as "tags" and can help group together related functions.

For example if a function is only ever called while the game is loading you can add the tag "loading" to it. You can then use this tag to see functions it calls and functions that calls it. A function tagged with loading will normally either directly or indirectly read data from somewhere such as the CD and save it somewhere in memory.

Examples of tags:
* Sound/Music
* Loading
* Sprite/Background/Image
* CD Loading
* Input Polling
* Player Movement
* Enemy AI
</div>
￼</section>

## Automated Function Tagging
<section class="postSection">
<div markdown="1">
The ability to add tags to unnamed functions is in credibly valuable for understanding the purpose and eventually providing an accurate name for it. However manually adding tags to functions can be tedious and there are a few areas where the emulator can help the user to automatically tag based on functionality such as:
* VDP1 or VDP2 usage
* Sound chip usage
* CD Filesystem usage
* Input Polling

For example if a function uses the hardware to play a sound then it will automatically have the tag "sound" added to it. This allows the reverser to filter down the number of functions to focus on certain functionality. 
</div>
￼</section>

---
## ASCII String Listing
<section class="postSection">
<div markdown="1">
Like every good reversing tool, the emulator supports finding strings from a chunk of memory or file at runtime. These strings can provide valuable hints as to what a function does that references them.
</div>
￼</section>

---
## Assembly Code Export
<section class="postSection">
<div markdown="1">
We plan to have the ability to export the disassembled code into a folder with a working Makefile, that when ran will rebuild the executable code back into a working ISO image.
</div>
￼</section>

---
## Auto detection of Function names
<section class="postSection">
<div markdown="1">
  We provide a json file with common function signatures from the main Sega Saturn SDKs, this is used to automatically detect which functions are included in the game and putting a name to the function.
</div>
</section>

---
## Finding common functions across games
<section class="postSection">
<div markdown="1">
We store the byte pattern of every function we come across while playing multiple games and can use this information to find common functions across games. 

This can be very useful for finding common libraries used across multiple games as well as finding out common game engines used by companies.

This also means we only need to name a function once and it can be detected in other games, sharing the knowledge between multiple projects.
</div>
￼</section>

---
# Download & Source Code
Currently there are no pre-built binaries yet but you can build it yourself by cloning the Github repository: [RetroReversing/beetle-saturn-libretro: Standalone port of Mednafen Saturn to the libretro API.](https://github.com/RetroReversing/beetle-saturn-libretro)

Note that you will also need to update the git submodules that are used such as libRetroReversing.
