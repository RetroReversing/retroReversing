---
layout: post
title: Introduction to Audio/Music Programming of Retro Games
image: https://i.ytimg.com/vi/q_3d1x2VPxk/sddefault.jpg
permalink: /how-retro-audio-worked
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Introduction to Audio Programming of Retro Games
    url: #
tags: 
- introduction
- pc
- nes
recommend: 
- introduction
- sdk
- pc
- nes
editlink: /Introduction/RetroAudio.md
updatedAt: '2025-10-18'
---

# Introduction
To get started the **8-bit Guy** on Youtube has an excellent video covering how early computers and game consoles played sound and music [^1].

<iframe width="560" height="315" src="https://www.youtube.com/embed/q_3d1x2VPxk?si=EiN8a2g7nPkwg-GT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The gives a good overview of the different types of Audio available in retro games:
* **Beeper Speakers** - CPU driven clicking noises
* **GM Synthesisers** - Dedicated Sound chips (No CPU load)
* **PCM Samples**

---
# Beeper Speaker
The beeper speaker is a very simple speaker controller by the CPU which can produce clicking noises. The CPU would have to time the clicking noises exactly right to produce the required tone. As it runs all the logic on the cpu it slows down the game and the audio produced is CPU limited.

Used in:
* **Early IBM-PC**
* **Apple II**

---
# FM Synthesizer
In the early 1980s computers started coming with dedicated audio chips to take away the load from the CPU.

Each system would have a different number of Voices/Channels. Basically this allows multiple notes to be plays at the same time as each voice/channel can only do one note.

System | Voices/Channels
---|---
NES | 5 Voices
Commodore 64 | 3 Voices

---
## Mega Drive music production
[GST Channel](https://www.youtube.com/watch?v=WEvnZRCW_qc) demonstrates making Sega Genesis music with a period workflow from 1994. The video connects the console's sound hardware with the tools used to compose for it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WEvnZRCW_qc" title="How to make Sega Genesis music (in 1994)" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## NES
The first 2 voices were only capable of producing square waves.
The 3rd voice can only produce a triangle and is used for bass notes.
The 4th voice can only produce random noise.
The 5th voice was for PCM sample sounds but apparently rarely used.

[Displaced Gamers](https://www.youtube.com/watch?v=mJnz6dEWwIw) explains the NES DMC audio channel. The discussion is a focused example of sample playback within an early console sound system.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mJnz6dEWwIw" title="NES Sound: The DMC - Behind the Code" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Commodore 64
Although the C64 only had 3 voices, each one could use whatever waveform it wanted out of the following options:
* Square
* Triangle
* Sawtooth
* Noise

[Ben Eater](https://www.youtube.com/watch?v=LSMQ3U1Thzw) explains the SID and classic 8-bit sound. The video complements the sample-playback discussion with an overview of the chip itself.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LSMQ3U1Thzw" title="The SID: Classic 8-bit sound" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

### How the C64 Played Sound Samples
<iframe width="560" height="315" src="https://www.youtube.com/embed/0xWyLeVnxFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
The C64's sound hardware was powered by the MOS Technologies 6581 SID chip, which was advanced for its time but not considered capable of outputting digitized speech or sound samples. However, two games, Impossible Mission and Ghostbusters, released in 1984, managed to include digitized speech, which was a groundbreaking achievement.

The SID chip has three programmable oscillators but no concept of PCM audio, which is used to represent sampled audio signals. Digitized sound samples became possible on the C64 without additional hardware, thanks to a bug found on the 6581 SID chip. The speaker explains that adjusting the master volume affects the DC voltage on the volume register, which can be manipulated to create sound. By converting a sound sample to 4-bit unsigned mono and feeding it to the master volume register, it is possible to play a digitized sound sample on the C64. Modern Vintage Gamer
 demonstrates this by playing a sample on the Commodore 64 using both BASIC and Assembly language.

The original 6581 SID chip was replaced by the 8580 in the C64c, which fixed the issue with DC voltage offsets on the master volume register. This results in a significant difference in sound quality between the two chips. However, other methods for playing samples on the C64 have been discovered, allowing for higher-quality samples to be played using different techniques.

---
## Sound cards for IBM-PC
Here are a few of the sound cards developed for the IBM-PC:
* **Ad-lib**  (Yamaha YM3812) - early audio card
* **SoundBlaster** (Yamaha YM3812) - became more popular than Ad-Lib 

Notice that they both use the same audio chip inside (Yamaha YM3812).

9 Voices were available in this chip and similar to the C64 they were independently programmable so each voice could have its own waveform. Unlike the NES where each voice could only use one waveform.

---
# PCM Samples
Audio would be built up of small audio clips called "samples". The concept of a "Mod Tracker" was developed to take advantage of this capability.

[Bisqwit](https://www.youtube.com/watch?v=m9qstmRvej8) explains PCM audio and provides example C++ code. It is a practical companion to the distinction between stored samples and synthesised sound.

<iframe width="560" height="315" src="https://www.youtube.com/embed/m9qstmRvej8" title="How does PCM audio work? :: Case study and example C++ code" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
## SNES music production
[Nerdwriter1](https://www.youtube.com/watch?v=jvIzIAgRWV0) explains how music was made for the Super Nintendo. It is a useful introduction to the production side of sample-based console audio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jvIzIAgRWV0" title="How Music Was Made On Super Nintendo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
# Audio Tools for Retro Games

---
## Tracker music
[Ahoy](https://www.youtube.com/watch?v=roBkg-iPrbw) traces tracker music and its role in 16-bit sound. The video connects music-production tools with the data and playback code used by games.

<iframe width="560" height="315" src="https://www.youtube.com/embed/roBkg-iPrbw" title="Trackers: The Sound of 16-Bit" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

# VGMTrans
[vgmtrans/vgmtrans: VGMTrans - a tool to convert proprietary, sequenced videogame music to industry-standard formats](https://github.com/vgmtrans/vgmtrans?tab=readme-ov-file#vgmtrans---video-game-music-translator--)

---
# References
[^1]: [How Oldschool Sound/Music worked](https://www.youtube.com/watch?v=q_3d1x2VPxk)
