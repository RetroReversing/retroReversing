---
layout: post
tags: 
- sega
- dreamcast
- sdk
title: GD Workshop (GD-ROM Burner/Virtualiser)
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/consoles/Sega Dreamcast.png
permalink: /sega-dreamcast-gd-workshop
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: "GD Workshop (GD-ROM Burner/Virtualiser)"
    url: #
recommend:
- dreamcast
- sdk
editlink: /dreamcast/DreamcastGDWorkshop.md
---

GD Workshop was developed by CrossProducts as a tool to not only burn GD-ROMs but also to create virtual GDROM images for use on the DEV.BOX.

# GD-ROM Contents

## Session 1 (Low Density)
The first session is the lowest density area of the GD-ROM disc.

### CDDA Tracks
Raw Audio files where each file is its own audio track. These tracks can be played if you pop your dreamcast disc into a normal CD Player.

### Mode1 Tracks
Some Game information is on this track, but it is more like a table of contents of the game information on the other Session of the disc.

If you place your GD-ROM disc into the PC you will see the following files, which makes it look like the start of an acacemic paper:
* Bibliogr.txt
* Abstract.txt
* Copyrigh.txt

## Session 2 (High Density)
The second session is the High Density area of the GD-ROM disc. This tends to contain 2 Mode1 Data tracks of game information, a buffer track and at least one CDDA Audio track.

### Session 2- Mode1 tracks
Two Mode-1 tracks are present in the high density region of the disc (known as session 2), these contain all the game information including the executables and assets used to play the game.

The 5th Mode1 Track is the outermost ring of the physical GD-ROM disc and it contains the main game executable (`1st_read.bin`).

### Session 2 - CDDA Tracks
Additional CDDA Audio tracks can be placed in Session 2 but they will not be played by a CD-player.
