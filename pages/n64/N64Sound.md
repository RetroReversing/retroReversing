---
layout: post
tags: 
- n64
title: N64 Sound and Music
image:  /public/N64/N64SoundMusic.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64sound
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Sound and Music
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

The N_Audio Driver is the new version of the older SGI Sound Tools API and is more optimised for playing sounds. Most later games used this API.

---

# Sound Player (Sound effects)
At the start of the game the Sound Player is initialised and assigned a `bank of sound effects`.

The Sound Player requires a section of RAM to be reserved for it to move sound sample data from ROM into RAM.

Sound effects are often edited with the N64 Waveform Editor also known as `dse.exe`.

## Sound Effects format (Wave) (.tbl)
Sound effects are made up of a couple of files, one is an ADPCM .AIFF file which stores the raw wave data and the other is a metadata file for playback settings.

Sound effect samples are stored in the ROM with a bunch of parameters required for playing the audio such as:
* Pitch
* Envelopes
* Key Mapping

The parameter data is stored in a `.bnk` file and is paired with a single compressed sound effect data `.tbl` file.

The compressed Sound effect data is stored in `.tbl` files during development before it gets merged into the ROM.

## Sound effects Development Process
The Musician would initially have created the sound sample as AIFF files which are then compressed into AIFC files.

An .inst file is created with the playback parameters in it, then this file is merged with the AIFC files to generate a single .tbl file.

Whats the difference between .inst and .bnk?

## Example .tbl file
A .tbl file is plain text:
```
2
4
  979   474   697   564   606   563   562   541 
  991  1458  1179  1268  1177  1175  1131  1109 
-1567 -2597 -3104 -3156 -2854 -2314 -1650  -963 
 3394  4056  4124  3729  3023  2156  1259   436 
 -113  -117  -115  -113  -111  -109  -107  -104 
 2123  2088  2048  2008  1969  1931  1893  1856 
-1735 -3186 -4381 -5346 -6106 -6683 -7100 -7376 
 3761  5171  6310  7207  7888  8380  8706  8888 
```

## Example .inst file
```
envelope env1
{
    attackTime		= 5000;
    attackVolume	= 127;
    decayTime		= 364920;
    decayVolume		= 127;
    releaseTime		= 5000;
    releaseVolume	= 0;
}

sound sound1
{
    use (“SoundFileName”);    
    pan    = 64;
    volume = 127;
    envelope = env1;
}

instrument inst1
{
    volume = 127;
    pan    = 64;
    sound  = sound1;
}

bank Wave1
{
    instrument [0] = inst1;
}
```

---

# Sound Sequencer (Music)
At the start of the game the Sound Sequencer is initialised and assigned a `bank of instruments` and a `bank of MIDI sequences`.

## Sequence (Music) format (.seq)
Sequences are saved as `.seq` file in MIDI format but can also be a compressed version of MIDI that gets decompressed at runtime.

The seq format is slightly more optimised than standard MIDI as it has all the unneeded events removed [^3].

Sequences are edited using the N64 Sequencer tool also known as `dream.exe`.

## Sequence Bank format (.sbk)
The Sequence Bank format is just a bunch of .seq files added together.

## Music Development Process
To generate a .sbk file the Musician would compile the MIDI first into .seq files and then merge multiple .seq into a single .sbk file.

---

# References
[^1]: https://n64squid.com/homebrew/ProgManual/chapter_libuse.html
[^2]: https://www.therwp.com/project/n64-sound-tool 
[^3]: https://level42.ca/projects/ultra64/Documentation/man/pro-man/pro20/index20.1.html
