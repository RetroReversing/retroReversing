---
layout: post
tags: 
- middleware
- gameengines
title: FMOD Sound Middleware
thumbnail: /public/consoles/Microsoft Xbox.png
image: /public/consoles/Microsoft Xbox.png
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
editlink: /middleware/FMOD.md
---

The FMOD audio engine is a very common middleware used in modern games, starting with the PS1 generation of consoles.

# Source Code
You can download FMOD for yourself here: https://www.fmod.com/download 

# Reverse Engineering games with FMOD
If you know your game uses FMOD for audio then it can make the job a lot easier as you have the source code available to you. 

Plus any reversing work you make on another games fmod module you can apply to your game.

Each platform that FMOD supports uses a slightly different implementation tailored to that platform so this post will try to list what we know about fmod compiled for other platforms such as different games consoles.

# Games using FMOD
We have created a list per platform of the games we know are using FMOD for sound:
[Xbox Games using FMOD · RetroReversing](https://www.retroreversing.com/xbox-game-engines#fmod-sound-and-music-middleware)

# Known Files used on Xbox
These files are listed as leftover strings in xbox compiled binaries:, it means that they are being used by Xbox games:
```
fmod\\ogg_vorbis\\ogg\\src\\framing.c
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
