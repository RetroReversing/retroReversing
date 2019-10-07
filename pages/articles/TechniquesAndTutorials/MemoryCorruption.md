---
layout: post
tags: 
- tutorial
- pc
- nes
- memory
- n64
- gc
- corruption
title: Emulator Game Memory corruption
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/sIELpn4-Umw/hqdefault.jpg
permalink: /emulator-game-memory-corruption
breadcrumbs:
  - name: Home
    url: /
  - name: Techniques & Tutorials
    url: /tutorials
  - name: Emulator Game Memory corruption
    url: #
recommend: 
- tutorial
- memory
editlink: /articles/TechniquesAndTutorials/MemoryCorruption.md
videocarousel:
  - title: Part 1
    image: https://i.ytimg.com/vi/sIELpn4-Umw/hqdefault.jpg
    youtube: 'sIELpn4-Umw'
---

# Introduction
Game corruption has become a hot topic recently due to many you tubers playing through games that have in some way had their memory corrupted. 

This practise can cause the game to produce some weird and wonderful effects which can be entertaining to watch.

However game memory corruption can also be a very effective tool for reverse engineering games.

One of the troubles with reversing games is that there are no variable names so the memory is one giant blob of bytes that are unlabelled. By corrupting this memory and watching the effect on the game you can start to figure out what part of memory does what.

You can then map the memory reads/writes back to the game code to get an indication of what a function or piece of assembly code is doing for the game.

# Tools
ROM Corruptors have existed since the year 2000 with many no longer being updated, however there are 2 main corruptors that are still in use today [^4]:
* Vinesauce ROM Corruptor
* Real Time Corruptor

## Vinesauce ROM Corruptor
The Vinesauce ROM Corruptor was developed due to inspiration from YouTuber Vinesauce rom corruption videos. It corrupts the ROM file itself rather than memory, so technically it can be used on any file [^5].

## Real Time Corruptor
<iframe width="560" height="315" src="https://www.youtube.com/embed/sIELpn4-Umw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
The Real Time Corruptor was developed by Phil Girard and Dan Barreiro as a way to corrupt emulated games in an easy to use manner.

### RTC Engines
There are a number of different "Engines" available in RTC, these are basically different ways to corrupt the data, the corruptors available are:
* Nightmare engine - throws random bytes at the selected memory regions
* Hellgenie Engine (cheats) - applies random cheats (e.g game engine codes)
* Distortion Engine (Bytes) - creates blast backups and re-applies them later
* External ROM Plugin - use with Glitch Harvester

### Error Delay
The error delay chooses how much time to wait between each blasted byte.

### Memory Zones
Memory Zones are areas of memory that are allowed to be corrupted. For example you could only select Video RAM for only graphical glitches [^6]. 

### Blast Radius
The blast radius controls how it corrupts memory, there are a few options:
* SPREAD - spreads corruptions random across selected memory
* CHUNK - corrupts all the memory in one chunk
* BURST - same as chunk but split into 10 different areas

### Blast Type
Blast type chooses how to change the bytes that are to be blasted. Basically how it selects the value to replace the old memory value. There are three blast types:
* Random - Random value is placed at that byte location
* Tilt - it will go up or down a value
* Random Tilt - both combined

If you are looking for a specific thing in the game it is good to set the region of memory that would most likely contain that data along with setting the `Blast Radius` to `CHUNK`.

### Time Flow & Time Map
If you choose to use TimeStack it will keep creating a save state every X number of seconds (configurable).

The time map consists of a green line that represents time, orange line is fast forward and the blue line is rewinding.

This basically allows you to keep track of what is happening in the game while you corrupt, so you can go back in time to undo corruptions.


### Glitch Harvester
The Glitch Harvester comes as part of RTC but works in a very different manner. It works on save states, allowing you to quickly try different random corruptions and save the ones you like.

It works with RTC as it still uses the selected engine and settings from RTC, it just provides an additional interface for save state management.

#### Blast Editor
Not currently available but will be very useful int he future to see the exact bytes that were corrupted and what their new value is.

---

# Console Specific corrupting
This section covers techniques for corrupting games for specific consoles.

## Nintendo Entertainment System
<iframe width="560" height="315" src="https://www.youtube.com/embed/-csXgGstvHg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One Lone Coder on youtube has quite a fun video showing random NES memory corruption. 
Unfortunately it doesn't mention any source code release of the changes made to the emulator and it doesn't mention how much memory gets corrupted at a time.

But it is quite fun to watch as the levels get more and more corrupted as it seems the corruption happens after a set number of frames.

## Nintendo 64
<iframe width="560" height="315" src="https://www.youtube.com/embed/wR89Ezgwt84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Nintendo 64 corruption is covered in depth on the Corrupt.Wiki site available here:
[Basic/Advanced ROM Corruption - Corrupt.wiki](https://corrupt.wiki/consoles/n64/basic-advanced-rom-corruption)

## Gamecube & Wii (Dolphin)
<iframe width="560" height="315" src="https://www.youtube.com/embed/MRb36LZDtxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This uses the Real Time Corruptor which is a tool for specifically corrupting the memory of emulated games [^3].

# References
[^1]: [Deliberate NES Memory Corruption - YouTube](https://www.youtube.com/watch?v=-csXgGstvHg)
[^2]: [HOW TO CORRUPT NINTENDO WII AND GAMECUBE GAMES - YouTube](https://www.youtube.com/watch?v=MRb36LZDtxs)
[^3]: [Real-Time Corruptor](http://redscientist.com/pages/rtc.php)
[^4]: [Old Corruptors - Corrupt.wiki](https://corrupt.wiki/corruptors/old-corruptors)
[^5]: [The Vinesauce ROM Corruptor :: Corrupted Bytes](http://corruptedbytes.com/the-vinesauce-rom-corruptor/)
[^6]: [(416) RTC Guide Part 1 | Main Program - YouTube](https://www.youtube.com/watch?v=sIELpn4-Umw)
