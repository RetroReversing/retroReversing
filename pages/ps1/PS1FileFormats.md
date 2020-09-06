---
layout: post
tags: 
- ps1
- reverseengineering
- fileformats
title: Playstation 1 File Formats
thumbnail: /public/consoles/Sony Playstation.png
image: /public/images/ps1/Sony PS1 File Formats.jpg
twitterimage: https://www.retroreversing.com/public/images/ps1/Sony PS1 File Formats.jpg
permalink: /ps1-file-formats
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: Playstation 1 File Formats
    url: #
recommend: ps1
editlink: /ps1/PS1FileFormats.md
updatedAt: '2019-05-04'
---

# File Formats used to distribute PS1 Discs
A Playstation One CD can either be directly put into your PC via the CD-ROM drive or mounting a .BIN/.ISO file. All of these are just ways to be able to see the contents of a PS1 Disc similar to a folder of files.

Extension | Description
--- | ---
.BIN | A BIN file needs a .CUE file in order to be useful, it is the raw binary contents of a PS1 disc
.CUE | A CUE sheet describes a .BIN file and can be `mounted` on a pc to reveal the file system of the disc
.ISO | A ISO file can be `mounted` on a pc to reveal the file system of the disc

---

# File formats Located on the PS1 Disc
After mounting a PS1 Disc ISO/BIN/CUE you can view the file system of the Disc and you will see files with a variety of extensions, some of these extensions are standard across games and are listed in the table below.

Extension | Description
--- | ---
.STR | Streaming Movie
.BS | MDEC Stream
.XA | Streaming CD-ROM Vocals
.RSD | 3D Model files
.TMD | 3D Model files (for PSYQ libraries)
.PMD | High speed Modelling data
.TOD | Animation Data
.HMD | Hierarchical 3D Model plus animation and other data
.TIM | 2D Image file
.SDF | Sprite Editor Project File
.PXL | Pixel Image Data
.CLT | Palette Data
.ANM | Animation informaton for 2D
.TSQ | Animation Time sequence for 2D
.CEL | Cell Data
.BGD | Background Map Data
.SEQ | Audio Sequence file
.SEP | Multi-Track Audio Sequence file
.VAG | Audio Wavefile
.VAB | Audio Source Data
.DA | CD-DA Data
.FAT | Memory Card File
