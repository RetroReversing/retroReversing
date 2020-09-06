---
layout: post
tags: 
- sega
- dreamcast
- sdk
title: GD Workshop (GD-R Burner/Virtualiser)
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/images/dreamcast/Dreamcast-GD-Workshop.jpg
twitterimage: https://www.retroreversing.com/public/images/dreamcast/Dreamcast-GD-Workshop.jpg
permalink: /sega-dreamcast-gd-workshop
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: "GD Workshop (GD-R Burner/Virtualiser)"
    url: #
recommend:
- dreamcast
- sdk
editlink: /dreamcast/DreamcastGDWorkshop.md
updatedAt: '2019-10-31'
---	
<section class="postSection">
    <img src="/public/images/dreamcast/Dreamcast-GD-Workshop.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
GD Workshop was developed by CrossProducts as a tool to not only burn GD-Rs but also to create virtual GDROM images for use on the **DEV.BOX** development hardware.
  </div>
</section>
  
# Running GD Workshop
Although the Katana development kit Dev.BOX is basically a windows PC with a GD-ROM drive, it cannot run on standard PCs without being patched.

---
# Burning GD-Rs
It normally takes around 1-hour to burn a physical GD-R disc so this wasn't a quick process. So an alternative is to Emulate the GD-ROM disc so it can be booted straight away.

---
# GD Workshop Interface
GD Workshop is a fairly simple program with an interface similar to old fashioned CD-burning software. You chose what data will go where on the disc image, the only difference is that there are 2 'sessions' on a GD-ROM disc, known as the High and Low density sessions.

---
# GD-ROM Contents
It is important to put the correct content on the correct session otherwise not only will the game not be optimised it will not be able to find the main bootable piece of code.

This section will briefly cover the main areas of a GD-ROM which is important for proper use of the GD Workshop to burn a bootable GD-R.

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

The last Mode1 Track is the outermost ring of the physical GD-ROM disc and it contains the main game executable (`1st_read.bin`). 

#### IP.BIN and IP0000.BIN
It also contains IP.BIN/IP0000.BIN which need to be the first file loading by the dreamcast. These files are customised for each game and contains information such as the game name, version and the file name of the game executable which is normally `1st_read.bin`.

### Session 2 - CDDA Tracks
Additional CDDA Audio tracks can be placed in Session 2 but they will not be played by a CD-player.

---
# Playing Burned GD-Rs
You need the System Disc 2, which you would put in your dreamcast before your game then switch it out with your GD-R.

{% include link-to-other-post.html post="/Sega-Dreamcast-System-Disc-2" description="You can find out about the System Disc 2 in this post." %}
