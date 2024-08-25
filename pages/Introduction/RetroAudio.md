---
layout: post
tags: 
- introduction
- pc
- nes
title: Introduction to Audio Programming of Retro Games
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/q_3d1x2VPxk/sddefault.jpg
permalink: /how-retro-audio-worked
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Introduction to Audio Programming of Retro Games
    url: #
recommend: 
- introduction
editlink: /Introduction/RetroAudio.md
videocarousel:
  - title: Part 1
    image: https://i.ytimg.com/vi/q_3d1x2VPxk/sddefault.jpg
    youtube: 'q_3d1x2VPxk'
---

The **8-bit Guy** on Youtube has an excellent video covering how early computers and game consoles played sound and music [^1].

He has split up his video into 3 sections:
* Beeper Speakers
* GM Synthesisers
* PCM Samples

# Beeper Speaker
The beeper speaker is a very simple speaker controller by the CPU which can produce clicking noises. The CPU would have to time the clicking noises exactly right to produce the required tone. As it runs all the logic on the cpu it slows down the game and the audio produced is CPU limited.

Used in:
* Early IBM-PC
* Apple II

# FM Synthesizer
In the early 1980s computers started coming with dedicated audio chips to take away the load from the CPU.

Each system would have a different number of Voices/Channels. Basically this allows multiple notes to be plays at the same time as each voice/channel can only do one note.

System | Voices/Channels
---|---
NES | 5 Voices
Commodore 64 | 3 Voices

## NES
The first 2 voices were only capable of producing square waves.
The 3rd voice can only produce a triangle and is used for bass notes.
The 4th voice can only produce random noise.
The 5th voice was for PCM sample sounds but apparently rarely used.

You can see a visualisation of the wave in a play though of Mario bros 3 in the video by Bizqwit below [^2]:
<iframe width="560" height="315" src="https://www.youtube.com/embed/xI3xZAn7r2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Commodore 64
Although the C64 only had 3 voices, each one could use whatever waveform it wanted out of the following options:
* Square
* Triangle
* Sawtooth
* Noise

### How the C64 Played Sound Samples
<iframe width="560" height="315" src="https://www.youtube.com/embed/0xWyLeVnxFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
The C64's sound hardware was powered by the MOS Technologies 6581 SID chip, which was advanced for its time but not considered capable of outputting digitized speech or sound samples. However, two games, Impossible Mission and Ghostbusters, released in 1984, managed to include digitized speech, which was a groundbreaking achievement.

The SID chip has three programmable oscillators but no concept of PCM audio, which is used to represent sampled audio signals. Digitized sound samples became possible on the C64 without additional hardware, thanks to a bug found on the 6581 SID chip. The speaker explains that adjusting the master volume affects the DC voltage on the volume register, which can be manipulated to create sound. By converting a sound sample to 4-bit unsigned mono and feeding it to the master volume register, it is possible to play a digitized sound sample on the C64. Modern Vintage Gamer
 demonstrates this by playing a sample on the Commodore 64 using both BASIC and Assembly language.

The original 6581 SID chip was replaced by the 8580 in the C64c, which fixed the issue with DC voltage offsets on the master volume register. This results in a significant difference in sound quality between the two chips. However, other methods for playing samples on the C64 have been discovered, allowing for higher-quality samples to be played using different techniques.

---
## Sound cards for IBM-PC
Here are a few of the sound cards developed for the IBM-PC:
* Ad-lib  (Yamaha YM3812) - early audio card
* SoundBlaster (Yamaha YM3812) - became more popular than Ad-Lib 

Notice that they both use the same audio chip inside (Yamaha YM3812).

9 Voices were available in this chip and similar to the C64 they were independently programmable so each voice could have its own waveform. Unlike the NES where each voice could only use one waveform.

# PCM Samples
Audio would be built up of small audio clips called "samples". The concept of a "Mod Tracker" was developed to take advantage of this capability.

# References
[^1]: [How Oldschool Sound/Music worked](https://www.youtube.com/watch?v=q_3d1x2VPxk)
[^2]: [NES Memory Visualization: Super Mario Bros. 3 - YouTube](https://www.youtube.com/watch?v=xI3xZAn7r2A)
