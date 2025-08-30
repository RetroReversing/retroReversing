---
permalink: /games/fileformats
layout: post
console: fileformats
title: Introduction to Game File Formats
breadcrumbs:
  - name: Home
    url: /
  - name: Games
    url: /games
redirect_from:
  - /fileformats
  - /gamefileformats
  - /gamefiles
  - /fileformat
  - /game-file-formats
recommend: 
 - fileformats
---

# Introduction to Game File Formats
With the advent of Disc-based video games, developers were free to separate games into multiple files, such as audio, textures, sprites, 3d models etc.

Before disc based games, games used to all be on a single rom chip which could be thought of as a single file with all the assets and game code in one large binary file.

## What are the benefits of external files?
It was much easier for artists or sound designers to modify the game and test on hardware if all they needed to do was replace a single file, instead of the old days when everything needed to be compiled into one.

It is also more efficient in terms of memory as it only needs to load certain files at certain times, although as it is disc-based it adds loading times to the game.

Another benefit is that it makes it much easier for modding of the game if you are only interested in changing music/textures/models/text then it can be as simple as finding the correct file.

## But what about performance?
There is a performance issue with loading hundreds of small files from a cd so games tended to create their own binary blobs of concatenated (and sometimes compressed) smaller files.
This makes some games similar to ROMS in that everything is packed in a single file, this makes loading from disc faster in theory but the bigger the data file the slower it will be.

## Are game formats standard?
Some are and some are custom formats created by the developers for efficiency, in more modern games you will get files like .mp3, .dds, .png etc.

Some are from middleware providers such as .bik files which play using the Bink video middleware.

---
# Game Formats by Platform 
Although game formats can be used across multiple games consoles or platforms, we have separated the file formats by platform to make it easier to see the files a developer would be working with when developing for a specific platform.

Platform Name | Game Engine List
---|---
Nintendo Gamecube | [Nintendo Gamecube (Dolphin) File Formats](https://www.retroreversing.com/gamecube-file-formats)
Nintendo WiiU | [Wii U File Formats](https://www.retroreversing.com/WiiUFileFormats)
Sony Playstation 1 | [Playstation 1 File Formats](https://www.retroreversing.com/ps1-file-formats)


