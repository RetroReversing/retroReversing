---
layout: post
tags: 
- gba
- sdk
- sound
title: M4A Music Library for Game Boy Advance (GBA)
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
image: /public/images/gba/Game Boy Advance SDK M4A.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK M4A.jpg
permalink: /game-boy-advance-sdk-m4a/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  M4A Music Library for Game Boy Advance (GBA)
    url: #
recommend: 
- sdk
- gba
editlink: /gba/GBASDKMusic.md
---

# Introduction

## What is the M4A Library?
The M4A library otherwise known as **Make SoundCodes for AGB** (MKS4AGB) is used to play sound on the Game Boy Advance.

## Where can I get the M4A Library?
Version 3.0 of the Game Boy Advance SDK includes a folder called **MusicPlayerAGB2000**, this contains the documentation and some pre-compiled  object files which the documentation calls **sound object file groups**. 

## How does it work?
The documentation for the library mentions that the pre-compiled sound object files are normally provided by the sound engineer on the team.

These are then linked to the program and the programmer can then use pre-build API functions to play them on the Game Boy Advance.

## What are sound object file groups?
These are the result of converting standard Sound formats (AIFF & MIDI) into a format that can be given to a programmer to link directly into the game.

This allows the programmer to directly take the resulting sound object files and add them to their standard Makefile and play the sounds using the M4A API.

## How do I convert sounds into sound objects?
There are a number of useful executables in the **mp2000** folder:
* **aif2agb.exe** - Convert AIFF format files to assembly code (\*.s)
* **mid2agb.exe** - Convert MIDI format files  to assembly code (\*.s)
* **mks4agb.exe** - main application that calls the other two based on the .ini file configuration for whole folders of sound files


## How were the sound objects created?
The library is built to make it as easy as possible for both the sound engineer and the game programmers to inject sound into their game.

On the sound engineer front all they need to do is create their standard AIFF and MIDI files, put them in a folder and run a program to automatically convert them to a format the programmer can use.

It does this by looping through the files configured in **mks4agb.ini** and calling either **aif2agb.exe** or **mid2agb.exe** depending on the file format.

This then generates Assembly sound code which represents the data.

For example if you have a MIDI file called **bgm_title3.mid** and run it through the converter you will get **bgm_title3.s** as output.

This assembly file can then be modified if required and assembled with the GNU Assembler (GAS) to produce the sound object files to give to the programmer.

## How are the sound objects used?
There are a number of files that are required in order to bring the M4A library into your Game Boy Advance project, they are:
* MusicPlayDef.s
* mks4agbLib.o
* mks4agbLib.h
* m4aLibOD1.o
* m4aLibUSC.o

# Reverse Engineering

## How can I tell if a game is using the M4A library?
If you use radare2 or IDA pro you can run these FLAIR signatures on your game to find out:
[laqieer/gba_lib_func_sig: Game Boy Advance Library Function Signature for Reverse Engineering](https://github.com/laqieer/gba_lib_func_sig)

If it matches any of the m4aLib functions then you know your game uses it.
