---
layout: post
tags:
- fileformats
- saturn
- sega
title: Sega Saturn File Formats
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn File Formats.jpg
twitterimage: https://www.retroreversing.com/public/images/saturn/Sega Saturn File Formats.jpg
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
updatedAt: '2020-05-31'
---
<section class="postSection">
    <img src="/public/images/saturn/Sega Saturn File Formats.jpg" style="width:250px" class="wow slideInLeft postImage" />
<div markdown="1">
The Sega Saturn was the second released Sega console which used CD-ROM to distribute its games, one of the benefits of the CD-ROM format is many times more space than a cartridge. One of the downsides compared to cartridges however was the slower loading times as reading from a CD is much slower than reading from a ROM chip.

Unlike most cartridge based ROM chips CDs have a standard File System to read files from and so instead of everything being in a giant blob of binary and burned to a chip, the game could be split into multiple files.

Also the consoles would not have enough RAM to hold all the game assets so games would have to stream assets into memory when needed. So it would only read the texture or sound files used in a particular level and ignore the rest.

This makes it slightly easier to do some basic modding of Saturn assets compared to a ROM based console such as the Mega Drive, as you can normally pinpoint the asset you want down to a particular file and sometimes they have file extensions that tell you exactly what format the file is.
</div>
</section>

# Executable Code Formats

## Executables (COF)
Sega Saturn Executables are actually COF/COFF (Common Object File Format) files which is a precursor to the ELF executable format that is used on most future console platforms.

## ABS files
ABS files seem to be the output of the LNK command and are specified in `.lnk` makefiles. Each sample in the SDK builds an ABS file along with the COFF executable. They both seem to be a collection of object libraries (assembled code) but not sure the difference between the formats.

Sometimes these are listed as "Execution files" so I am not sure if cof is the default executable format or not anymore.

ABS Files are listed in the documentation as "Absolute load module file "

---
# Video Formats
Due to the large amount of cheap storage available thank to the CD format, game started incorporating full video files, these tended to be in a couple of standard video formats. 

## CPK - Cinepak-compressed video
One fairly common format for storing video in Sega Saturn games is to the the Cinepak-compressed video format known as CPK [^2]. This format uses uncompressed PCM audio and it can even be used without the video component, normally with the `.SND` file extension.


## AVI - Audio Video Interleave
The Sega Saturn had support for Audio Video Interleave (AVI) video files and was widley used in games such as Devil Summoner. You will notice that these files start with the magic header `RIFF`, this is due to AVI being a subformat based on the Resource Interchange File Format (RIFF) [^1].


## TGQ - Video Files
[Electronic Arts TGQ - MultimediaWiki](https://wiki.multimedia.cx/index.php/Electronic_Arts_TGQ) 

---
# Image formats

## RGB Files
[doyousketch2/SatRGB: Extract RGB images from Sega Saturn files](https://github.com/doyousketch2/SatRGB)

---
# Audio Formats

## SEQ files
[mistydemeo/seq2mid: Tool and documentation for the Sega Saturn SEQ format](https://github.com/mistydemeo/seq2mid)

## AIF files

[Audio Formats in Saturn Games - Mini-Revver](https://minirevver.weebly.com/audio-formats-in-saturn-games.html)

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

## DSK
Virtual Disc image used by developers when using the Mirage CD Emulator.

---
# References
[^1]: [Audio Video Interleave - Wikipedia](https://en.wikipedia.org/wiki/Audio_Video_Interleave)
[^2]: [Sega FILM - MultimediaWiki](https://wiki.multimedia.cx/index.php/Sega_FILM#Sega_Saturn_CPK_File_Format)
