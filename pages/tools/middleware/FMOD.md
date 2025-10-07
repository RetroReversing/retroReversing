---
layout: post
tags: 
- middleware
- gameengines
title: FMOD Sound Middleware
thumbnail: /public/consoles/Tools.jpg
image: /public/images/middleware/FMOD Sound Middleware.jpg
permalink: /fmod-middleware
breadcrumbs:
  - name: Home
    url: /
  - name: Game Engines & Middleware
    url: /engines
  - name: FMOD Sound Engine
    url: #
recommend:
- middleware
editlink: /tools/middleware/FMOD.md
---

The FMOD audio engine is a very common middleware used in modern games, starting with the PS1 generation of consoles. It was developed by **Firelight Technologies** and the first release was on 6th March 1995. It is still commonly used in the industry to this very day and has become an industry standard for audio.

In Uk magazine Develop issue 79 they give a short review of **FMOD** back in 2007:
![Develop 79](https://github.com/user-attachments/assets/9699b116-081a-47a3-bef8-f102feed2d38)

You can download the FMOD source code for yourself here but note that it is not open source so it requires a license to use commerically: 
[https://www.fmod.com/download](https://www.fmod.com/download)

---
# Games using FMOD
FMOD is used in so many games that creating comprehensive a list would be a time consuming process, but some of the major titles include:
* Guitar Hero III
* BioShock
* Metroid Prime 3
* Heavenly Sword
* Call of Duty 4
* Starcraft II

We have also created a list of the Xbox games we know are using FMOD for sound:
[Xbox Games using FMOD · RetroReversing](https://www.retroreversing.com/xbox-game-engines#fmod-sound-and-music-middleware)

---
# Reverse Engineering games with FMOD
If you know your game uses FMOD for audio then it can make the job a lot easier as you have the source code available to you. 

Plus any reversing work you make on another games fmod module you can apply to your game.

Each platform that FMOD supports uses a slightly different implementation tailored to that platform so this post will try to list what we know about fmod compiled for other platforms such as different games consoles.

## Known Files used on Xbox
These files are listed as leftover strings in xbox compiled binaries:, it means that they are being used by Xbox games:
```
fmod\\src\\sound_software.c
fmod\\src\\system_file.c
fmod\\src\\system_thread.c
fmod\\src\\system_memory.c
fmod\\src\\fsound.c
fmod\\src\\fsound_dsp.c
fmod\\src\\fsound_dsp_fft.c
fmod\\src\\fsound_sample.c
fmod\\src\\fsound_stream.c
fmod\\src\\fsound_tag.c

fmod\\src\\fmusic.c
fmod\\src\\music_formatmod.c
fmod\\src\\music_formatit.c
fmod\\src\\music_formatxm.c
fmod\\src\\music_formats3m.c
fmod\\src\\music_formatfsb.c

fmod\\src\\format_oggvorbis.c
fmod\\src\\format_it.c
fmod\\src\\format_mpeg.c
fmod\\src\\format_fsb.c
fmod\\src\\format_wav.c

fmod\\ogg_vorbis\\ogg\\src\\framing.c
fmod\\ogg_vorbis\\vorbis\\lib\\vorbisfile.c
fmod\\ogg_vorbis\\vorbis\\lib\\info.c
fmod\\ogg_vorbis\\vorbis\\lib\\block.c
fmod\\ogg_vorbis\\vorbis\\lib\\psy.c
fmod\\ogg_vorbis\\vorbis\\lib\\sharedbook.c
fmod\\ogg_vorbis\\vorbis\\lib\\codebook.c
fmod\\ogg_vorbis\\vorbis\\lib\\mdct.c
fmod\\ogg_vorbis\\vorbis\\lib\\smallft.c
fmod\\ogg_vorbis\\vorbis\\lib\\envelope.c
fmod\\ogg_vorbis\\vorbis\\lib\\mapping0.c
fmod\\ogg_vorbis\\vorbis\\lib\\res0.c
fmod\\ogg_vorbis\\vorbis\\lib\\floor1.c
fmod\\ogg_vorbis\\vorbis\\lib\\floor0.c
```

---
# References
[^1]: Develop issue 79 page 67
