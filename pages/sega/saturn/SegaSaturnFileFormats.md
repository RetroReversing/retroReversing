---
layout: post
tags:
- fileformats
- saturn
- sega
title: Sega Saturn File Formats
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn File Formats.jpg
permalink: /sega-saturn-file-formats/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn File Formats
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnFileFormats.md
---

# Code Formats

## Executables (COF)
Sega Saturn Executables are actually COF/COFF (Common Object File Format) files which is a precursor to the ELF executable format that is used on most future console platforms.

## ABS files
ABS files seem to be the output of the LNK command and are specified in `.lnk` makefiles. Each sample in the SDK builds an ABS file along with the COFF executable. They both seem to be a collection of object libraries (assembled code) but not sure the difference between the formats.

Sometimes these are listed as "Execution files" so I am not sure if cof is the default executable format or not anymore.

ABS Files are listed in the documentation as "Absolute load module file "

---
# Video Formats

## CPK
```
Many Sega Saturn CD-ROM games use this file format to store frames of a Cinepak-compressed video interleaved with uncompressed PCM audio. When this is the case, the files will typically have the extension .CPK (which is why FILM files are usually known as CPK files). Sometimes, audio-only FILM files will have a .SND extension.
```
[Sega FILM - MultimediaWiki](https://wiki.multimedia.cx/index.php/Sega_FILM#Sega_Saturn_CPK_File_Format)

# TGQ - Video Files
[Electronic Arts TGQ - MultimediaWiki](https://wiki.multimedia.cx/index.php/Electronic_Arts_TGQ) 

---
# Image formats

## RGB Files
[doyousketch2/SatRGB: Extract RGB images from Sega Saturn files](https://github.com/doyousketch2/SatRGB)

---
# Other Formats

## PCS
A quick look at the PCS File format from the Sega Saturn game Exhumed/Powerslave:
<iframe width="560" height="315" src="https://www.youtube.com/embed/VmQ64ZVRdn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MDT and MDP
[MDT and MDP File Formats · TrekkiesUnite118/GrandiaTranslation Wiki](https://github.com/TrekkiesUnite118/GrandiaTranslation/wiki/MDT-and-MDP-File-Formats)

## PRS Files
[PRS compression - Sega Retro](https://segaretro.org/PRS_compression)

## Grandia
[TrekkiesUnite118/GrandiaTranslation: Collection of Tools and Info for Translating Grandia for the Sega Saturn.](https://github.com/TrekkiesUnite118/GrandiaTranslation)

# DSK
Virtual Disc image used by developers when using the Mirage CD Emulator.

