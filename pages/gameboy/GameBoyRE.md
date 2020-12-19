---
layout: post
tags: 
- gameboy
- reversingEmulator
title: Game Boy (DMG/GBC) Reversing Emulator
thumbnail: /public/consoles/GameBoy.png
permalink: /GameBoy-Reversing-Emulator
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Game Boy
    url: /saturn
  - name: Game Boy (DMG & GBC) Reversing Emulator
    url: #
recommend: gameboy
editlink: /gameboy/GameBoyRE.md
image: /public/images/gameboy/Game Boy Reversing Emulator.jpg
twitterimage: https://www.retroreversing.com/public/images/gameboy/Game Boy Reversing Emulator.jpg
updatedAt: '2020-10-17'
---
# Introduction
<section class="postSection">
<img src="/public/images/gameboy/Game Boy Reversing Emulator.jpg" class="wow slideInLeft postImage" />
  <div markdown="1">

The Game Boy Reversing Emulator (RE) is a fork of the libRetro Same Boy emulator tailored for reverse engineering.

The main aim is to generate information that will be useful for the disassembling  and exploration of your chosen game.

It does this by tracing and logging information about asm instructions, functions, memory addresses, DMAs etc as the user plays the game.
</div>
</section>

## Uses LibRetro & LibRetroReversing
The emulator is built on the **libRetro** core of the SameBoy emulator, the reasons for this include:
* Users can choose their own frontend (e.g RetroArch)
* Standard libRetro functions can be shared among multiple reversing emulators.

The reversing functionality is contained in a library called **LibRetroReversing** which itself is based on **LibRetro** which encompasses common reverse engineering functionality that is shared among multiple Reversing Emulators. 

This allows for new features and bug fixes to be easily ported across multiple games consoles. For example the Tool-Assisted-Superplay features are available across all libRetroReversing cores.

## Cross Platform Web-based UI
There is no better cross-platform UI kit than the web itself, it is highly likely you have a web browser on your system and so if your computer can browse Facebook then you can reverse games with our UI!

---
# Features
The emulator contains all the functionality of a standard Game Boy Color emulator but adds additional features for helping reverse engineer the game back into compatible source code.

## Log Input and playback with logging
<section class="postSection">
  <img src="/public/images/gameboy/GameBoyRE-Run.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
One very important feature of the reversing emulator is the ability to record all the button presses made during a playthrough. 

This allows you to play the game at full speed but then later playback the same button presses with full logging enabled. 

This is an effective way to log a games functionality without having to play at unbearable framerates.
</div>
</section>
---

## Edit Input Playback for TASing
<section class="postSection">
  <img src="/public/images/gameboy/GameBoyRE-TASing.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
Since we have the functionality to record all the player input and replay it back on demand, this allows us to add Tool-Assisted-Superplay (TAS) features.

We provide a UI to edit the user input on a frame-by-frame basis, including functionality to preview a section of the game in a loop so you can optimize the input as much as possible.
</div>
</section>

---
## Named Save States and Frame Usage logging
<section class="postSection">
  <img src="/public/images/gameboy/GameBoyRE-SaveStates.jpg" class="wow bounceInUp postImage" />
<div markdown="1">
Once a playthrough has been completed the user has the ability to playback the input states and create named save states for interesting parts of the game.

The name of the save state and the frame number it was saved at are used to give the reverser a hint as to where a function or chunk of memory was used.

For example if a save state was created and called "Start of Level 2" then any function that first gets called in Level 2 will be labelled as such.
</div>
</section>
