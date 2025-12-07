---
layout: post
tags: 
- reversingEmulator
title: Reversing Emulators
thumbnail: /public/consoles/Sega Saturn.png
permalink: /Reversing-Emulators
breadcrumbs:
  - name: Home
    url: /
  - name: Reversing Emulators
    url: #
recommend: reversingEmulator
editlink: ../categories/tools/ReversingEmulators.md
redirect_from:
  -  /reversingEmulator
image: /public/images/reversingEmulator/Reversing emulators.jpg
twitterimage: https://www.retroreversing.com/public/images/reversingEmulator/Reversing emulators.jpg
updatedAt: '2024-10-20'
---

# What is a Reversing Emulator?
To put it simply a Reversing emulator is a standard emulator that has been modified to add additional debugging and tracing functionality useful for reverse engineers.

## Why use a Reversing Emulator?
There are a few use cases where you would want to use a reversing emulator rather than a standard emulator, these include:
* Cheat creation (e.g Game genie/Action replay codes)
* Creating Tool-Assisted-SuperPlays (TASing)
* Game Modding (adding new content to existing games)
* Full game reverse engineering (re-creating the source code of a game)
    * Porting games to other platforms
* Debugging glitches and other bugs in a game
* Learning how a feature in a game was implemented
* Asset ripping (exporting images/sounds/models etc from a game)
* Re-mastering games with higher quality assets

## How to use a Reversing Emulator?
First of all you need a libRetro frontend such as **RetroArch**, next you need to either compile the modified cores yourself or obtain pre-built binaries of the cores and place them inside the core directory of your favourite libRetro frontend.

Next start up your game with the modified libRetro core specified and it should open a web browser on your computer (if not manually go to http://localhost:1234). The game will not start until the run button is pressed. After you have pressed the run button play the game through and pause at any interesting areas via the web interface, and give the state a useful name (e.g start of menu screen, start of level 1, after jump pressed etc).

Now pause the game and you will notice that it has found a bunch of functions and depending on the core it may have also disassembled them. It has also logged your button presses (similar to a TAS) so that the game can be played back with even more logging enabled.

## How was it implemented?
LibRetro cores are modified to include a static library called **libRetroReversing** which provides functionality to inspect the emulator state, log function calls, disassembly code etc. It also includes a Web Interface that is automatically started when the modified core is run, this allows a reverse engineer to inspect the state of the core at any given time in a web browser.

### Why use a web interface rather than a modified frontend?
This is a good question, we has the choice to tie the lib retro cores to one single modified frontend rather than including a web interface (inside libRetroReversing) with each core. However we decided it best to allow users to use whatever frontend they want, so that the frontend can handle features like joypad mapping.

---
# Where do I download?
Version 0.1 is only available for MacOSX and you need RetroArch pre-installed, you can get version 0.1 [here](https://www.mediafire.com/file/jd2oe9x7o9n715v/release-0.1-mac.zip/file). 
If you want other platforms you will need to modify the source code slightly.

Extract the zip file and drag and drop a GB/NES/SNES/GG/SMS ROM file on to the application called **run_macosx.app** and it should open the interface in your default web browser.

To run a GameBoy game, open a terminal in the directory you extracted and run:
```
/Applications/RetroArch.app/Contents/MacOS/RetroArch -L sameboy_libretro.dylib yourGame.gb
```

It will open a new tab in your default browser pointing to "http://localhost:1234/#/", Click on Resume in the top Header and then click Run to start the game.

![image](https://github.com/user-attachments/assets/6cb5c457-633f-48c3-9740-3526d97eec7d)


---
# libRetroReversing
In order to provide a consistent user experience and shared functionality across different console generations a new library was created to encapsulate common functionality.

The C/C++ library is called **libRetroReversing** due to it being based on **libRetro** and adding reverse engineering functionality to the libRetro cores.

Thus **libRetroReversing** enabled cores can run on any libRetro frontend such as RetroArch but the reversing/debugging functionality.

## Creating your own Reversing Emulator
If an existing Reversing Emulator does not exist for your favourite console you can follow our guide to create your own based on an existing libRetro core.

{% include link-to-other-post.html post="/create-reversing-emulator" description="For more information check out this post." %}

---
# Available Consoles
More and more consoles are becoming supported with the aim of most of the Sega/Nintendo/Sony LibRetro cores being supported by the end of 2021.

## Nintendo 64
{% include link-to-other-post.html post="/mupen64RE" description="For more information about the N64 Reversing emulator based on Mupen64 check out this post." %}

## Sega Saturn
{% include link-to-other-post.html post="/Sega-Saturn-Reversing-Emulator" description="For more information about the Sega Saturn emulator based on Beetle check out this post." %}

## Nintendo GameBoy (DMG & GBC)
{% include link-to-other-post.html post="/GameBoy-Reversing-Emulator" description="For more information about the Game Boy and Game Boy Color reversing emulator based on Sameboy check out this post." %}

---
# Similar projects
The idea of adding debugging capabilities to libRetro cores is nothing new, this section will list all the related projects which may be more suitable to your needs

## Hackable Console
Hackable Console is another project to add debugging capabilities to libRetro cores, initially supporting the ZX Spectrum core **ZX48K**. 
It is open source and available here:
[Hackable Console on Github](https://github.com/leiradel/hackable-console?tab=readme-ov-file)

It is implemented in C to provide as much compatibility with existing cores as possible and only requires one function to be added via **retro_get_proc_address_interface** called **hc_set_debugger** which the core should populate a **hc_Debugger** struct.

It uses **SDL** and **Dear ImGui** for the frontend interface.

It would be good for libRetroReversing to be compatible with this interface but currently it has been implemented in a completely different way. We should consider it for a potential rewrite in the future.
