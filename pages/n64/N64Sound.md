---
layout: post
tags: 
- n64
title: N64 Sound and Audio
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64sound
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Sound and Audio
    url: #
recommend: n64
editlink: /n64/N64Sound.md
---

# Decoding Audio on the RSP
The Reality Signal Processor or `RSP` is not only used for the games graphics, it is also used for the games audio and so the developers need to have a balance between time spent for graphics processing and time spend for audio processing on the RSP.

The RSP is where all the low-level audio processing is done, decoding the audio sample data and passing it on to be played through TV speakers.

---

# N64 Sound Banks
N64 sound banks are composed of two files: the ctl and tbl. 

The N64 Developer Documentation refers to a Wave bank file `.wbk` and a Pointer Bank File `.ptr` but it is not clear what this file is compared to .ctl and .tbl [^1]. My guess is that CTL is the same as .ptr and .TBL is the same as wok but this is unconfirmed. 

## CTL File
The ctl is the sets of sounds and details about them., it starts with the Magic Header: 0x42310001. 

## TBL File
The tbl is the actual raw sound data, usually vadpcm encoded. 

## Finding the TBL from CTL
```
The tool attempts to locate ctl via its magic word (0x42310001), then tries to guess the .tbl. In many games however, the tbl is not directly past the .ctl, since it is hardcoded in the ROM, and thus many ROMs, while they may have soundbanks, will not work exactly out of the box. In that case, search for the magic word in a hex editor, 0x42310001, then the .tbl is usually following it, and is a series of random hex characters that followed some 00 padding. 
```
[^2]

---

# Official Sound Tools
The official N64 Development Sound tools were released by Nintendo for use by Musicians to create and test sounds for N64 hardware.

The Sound Tools has two applications bundled, one is the `N64 Waveform Editor (dse.exe)` and the other is the `N64 Sequencer (dream.exe)`

---

# N64 Sound Libraries
There are 2 known officials sound libraries for N64 development, the `Sound Tools API Library` and the `N_Audio Driver for Sound Tools`.

But what is the difference between these two libraries?

---

# Sound Player (Sound effects)
At the start of the game the Sound Player is initialised and assigned a `bank of sound effects`.

## Sound Effects format (Wave)
Sound effect samples are stored in the ROM with a bunch of parameters required for playing the audio such as:
* Pitch
* Envelopes
* Key Mapping

The Sound Player requires a section of RAM to be reserved for it to move sound sample data from ROM into RAM.

Sound effects are often edited with the N64 Waveform Editor also known as `dse.exe`.
 

---

# Sound Sequencer (Music)
At the start of the game the Sound Sequencer is initialised and assigned a `bank of instruments` and a `bank of MIDI sequences`.

## Sequence (Music) format
Sequences are saved as MIDI format but can also be a compressed version of MIDI that gets decompressed at runtime.

Sequences are edited using the N64 Sequencer tool also known as `dream.exe`.

---

# References
[^1]:-https://n64squid.com/homebrew/ProgManual/chapter_libuse.html
[^2]:-https://www.therwp.com/project/n64-sound-tool 
