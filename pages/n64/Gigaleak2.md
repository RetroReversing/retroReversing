---
layout: post
tags: 
- n64
- sdk
- leak
title: Gigaleak 2 Electric Boogaloo - N64 Source Code Leak 
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 Gigaleak2.jpg
permalink: /gigaleak2
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Gigaleak 2 Electric Boogaloo - N64 Source Code Leak 
    url: #
recommend: n64
editlink: /n64/Gigaleak2.md
updatedAt: 1st August 2020
twitterimage: https://www.retroreversing.com/public/N64/N64 Gigaleak2.jpg
---

On the 25th of July 2020, the day after the `Gigaleak`, its sequel Gigaleak 2 was uploaded to a thread on 4chan. This is a continuation of the leaks that were obtained from a iQue/BroadOn/Routefree hack earlier in the year. 

---
# Uploaded Files
This leak contained files for a Version Control Repository (CVS) owned by the creators of the Chinese iQue Player (Routefree). It mainly focussed on Nintendo 64 source code but also contained a few Gameboy Advance (AGB) files too. Note that this was sent from Nintendo to iQue for the purpose of creating a Chinese localised version of the main N64 games such as:
* 1080 snowboarding
* Animal Crossing/Forest
* Super Mario 64
* Mario Kart 64
* Wave Race 64
* Zelda (MM & OOT).

Files Leaked:
* bbgames.7z (just contains bbgames.tar)

## Step 1 - Extracting the tar
The first step after extracting the 7Zip file to to extract the tar archive, you can do this like so:
```bash
tar -xvf bbgames.tar
```
If you get an error such as "Cannot open: Invalid argument" it is due to some of the file names containing characters that are invalid on a FAT* based File System. So you will need to extract on a different file system such as NTSC [^1].

## Step 2 - Installing CVS and checking out files
You will need to first have the CVS command line utilities installed if you haven't already then you can install like so:
* Mac OSX: `brew install cvs`
* Ubuntu Linux: `apt-get install cvs`

Now run the command in a folder that you want to extract the files:
```bash
cvs -d path/to/download/d1/routefree/bbgames/depot checkout .
```

It is a very large repository so expect it to take a while to complete.

---
# Root directory (d1/routefree/bbgames/depot)
This section will give you an overview of all the main folder contained at the root directory of the extracted leak.
The table below gives a brief description of what is in each folder, most of the folder are game specific:

Folder Name | Description
---|---
1080 | Source code to 1080 Snowboarding
TFC | Source code for the Famicom emulator for NES used in Animal Crossing
cba | Source code for "Kobe Bryant in NBA Courtside"
cba2 | Source code for "NBA Courtside 2: Featuring Kobe Bryant"
certs | Certificates for iQue Player?
club | Source code for the iQue Club application
devkit | N64 Dev Kit 5.0 (both pc & sgi) & Sound Tools
devsys | Partner N64 Development Kit
dm64 | Dr Mario 64 Source code
f0x | Source code for Star Fox 64
forest | Source code to Animal Crossing
game_manuals | Contains the Adobe Postscript files for the physical game manuals
marioAGB | Source code for Super Mario Advance
mk64 | Source code for Mario Kart 64
os20l | N64 SDK OS Library Version 2.0L
ostrees | Contains versions (2.0E, 2.0F, 2.0G) of the SGI versions of the SDK
release | Compiled release versions of the source codes in rom format
sf64 | Source code for Star Fox 64
sm64 | Source code for Super Mario 64
tex_viewer | Source code for the N64 Texture viewer [^2]
tools | A bunch of Python and Perl tools to convert and compress various formats
wario4land_gba_ique | Source code for "Wario land 4" for the GBA
wr64 | Source code for Wave Race 64
yoshi | Source code for Yoshi's Story
z_majora | Source code for Zelda Majora's Mask
z_ocarina | Source code for Zelda OOT
z_ocarina2 | Source code for Master Quest (Ura Zelda)

---
# Dr Mario 64 (dm64 folder)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The full complete source code to Dr Mario 64 has been successfully compiled! <a href="https://twitter.com/hashtag/n64?src=hash&amp;ref_src=twsrc%5Etfw">#n64</a> <a href="https://twitter.com/hashtag/nintendoleak?src=hash&amp;ref_src=twsrc%5Etfw">#nintendoleak</a> <a href="https://t.co/y66ryCOmgJ">https://t.co/y66ryCOmgJ</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1287691481772326919?ref_src=twsrc%5Etfw">July 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Release Folder (Compiled Roms)
The **/release** folder contains the result of compiling the source code for each game in this leak, in both english and Chinese roms.


---
# References
[^1]: [filenames - What is tar error message " Cannot open: Invalid argument" - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/349914/what-is-tar-error-message-cannot-open-invalid-argument)
[^2]: [Multi Texture Viewer Manual](http://n64devkit.square7.ch/niff/mtv/index.htm)
