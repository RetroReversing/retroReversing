---
layout: post
tags: 
- gba
- sdk
title: M4A Music Library for Game Boy Advance (GBA)
category: gba
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
editlink: /consoles/gba/GBASDKMusic.md
updatedAt: '2021-03-30'
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
* MusicPlayDef.s - Assembly code used for sony data
* mks4agbLib.o - Compiled library functionality
* mks4agbLib.h - Header file for using the library in a game
* m4aLibOD1.o - Compiled code for use when Only DMA 1 mode is active
* m4aLibUSC.o - Compiled code for use when System ROM mode is selected

## Can a sound engineer test the music without building the main game?
Yes! When the tool is run it also outputs a file called **SoundMon.elf** this is an executable GBA program that can be loaded into the IS-AGB-EMULATOR and provides a simple menu for playing back the sounds converted using **mks4agb.exe**.

## What is Direct Sound and Compatible Sound?
Compatible sound is 4 channels of Mono sounds which is backwards compatible with the Game Boy Color. 
Direct Sound is 12 channel Stereo and only for GBA games.

Both Direct Sound and Compatible Sound can be used at the same time in Game Boy Advance games to provide some excellent music!

---
#  Sound Developer's Tutorial (/AllManual/musicplayer/sound_dev/Tutorial)
As part of the documentation Nintendo provided a demo of both AIFF and MIDI music playing on the GBA. The demo shows Wario flying in a plane around while the background music plays and has a few sound effects too.

The table below shows all the the Data required to follow the tutorial, including the ROM file that can be played in any GBA emulator.

File Name | Extension | Description
---|---|---
AiffFiles | .ZIP | The sample AIFF music files used in the Demo game
IniFile | .zip | This provides the sample **mks4agb.ini** that is created during the tutorial
MidiFiles | .zip | The sample MIDI music files used in the Demo game
m_Sample | .zip | The modified sample Assembly code used in the tutorial
mp2kdemo | .zip | This contains the **mp2kdemo.bin** GBA ROM with Wario flying around with sounds

---
# Reverse Engineering

## How can I tell if a game is using the M4A library?
If you use radare2 or IDA pro you can run these FLAIR signatures on your game to find out:
[laqieer/gba_lib_func_sig: Game Boy Advance Library Function Signature for Reverse Engineering](https://github.com/laqieer/gba_lib_func_sig)

If it matches any of the m4aLib functions then you know your game uses it.

## What are the main functions in the M4A Library
You can view the main exports in the **mks4agbLib.h** header file below:

{% capture card_1_1_items %}
- u8 const[]|||__sound_mode_i
- u8 const[]|||__total_mplay_n
- u8 const[]|||__total_song_n
- SoundArea|||m4a_sound
- MPlayTable const[]|||mplay_table
- SongTable const[]|||song_table
- u8[]|||m4a_memacc_area
- void|||m4aSoundInit|||()
- void|||SoundMode_rev01|||(u32)
- void|||m4aSoundMain|||()
- void|||SoundVSync_rev01|||()
- void|||SoundVSyncOff_rev01|||()
- void|||SoundVSyncOn_rev01|||()
- void|||MPlayStart_rev01|||(MusicPlayerArea*,SongHeader*)
- void|||m4aSongNumStart|||(u16)
- void|||m4aSongNumStartOrChange|||(u16)
- void|||m4aSongNumStartOrContinue|||(u16)
- void|||m4aMPlayImmInit|||(MusicPlayerArea*)
- void|||MPlayStop_rev01|||(MusicPlayerArea*)
- void|||m4aSongNumStop|||(u16)
- void|||m4aMPlayAllStop|||()
- void|||m4aMPlayContinue|||(MusicPlayerArea*)
- void|||m4aSongNumContinue|||(u16)
- void|||m4aMPlayAllContinue|||()
- void|||m4aMPlayFadeOut|||(MusicPlayerArea*,u16)
- void|||MPlayTempoControl|||(MusicPlayerArea*,u16)
- void|||MPlayVolumeControl|||(MusicPlayerArea*,u16,u16)
- void|||MPlayPitchControl|||(MusicPlayerArea*,u16,s16)
- void|||MPlayPanpotControl|||(MusicPlayerArea*,u16,s8)
- void|||MPlayModDepthSet|||(MusicPlayerArea*,u16,u8)
- void|||MPlayLFOSpeedSet|||(MusicPlayerArea*,u16,u8)
{% endcapture %}

{% capture section_1_cards %}
{% include source-code-card.html title="mks4agbLib.h" items=card_1_1_items functions="24" variables="7" lines="125" list_style="width:350px" %}
{% endcapture %}

{% include source-code-card-grid.html content=section_1_cards style="justify-content: center" %}
