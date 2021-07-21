---
layout: post
tags: 
- 3ds
- fileformats
title: Nintendo 3DS File Formats
image:  /public/images/3ds/Nintendo 3DS File Formats.jpg
twitterimage: https://www.retroreversing.com/public/images/3ds/Nintendo 3DS File Formats.jpg
thumbnail: /public/consoles/Nintendo 3DS.png
permalink: /3DSFileFormats
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 3DS
    url: /ds
  - name: Nintendo 3DS File Formats
    url: #
recommend: 
- 3ds
- fileformats
editlink: /3ds/3DSFileFormats.md
updatedAt: '2021-07-17'
---
The **Nintendo 3DS** (Codename **CITRUS**) utilises a number of different file formats either created by Nintendo or third party. If you are interested in reverse engineering a 3DS game then you will most likely come across these formats, so it is a good idea to have at least some knowledge of how they work.

The main file formats used in Nintendo 3DS games are outlined in the table below, with further detail in the sections of this post.

Extension | Description
---|---
.3ds | Unofficial format used for dumping 3DS Game Cards
.cci | Nintendo Official file format for dumping 3DS game cards
.csu | 3DS Update file
.cxi | Citrus Executable Image - archvie that contains executable game code
.app | Another name for .cxi files
.cfa | Citrus File Archive - compressed file that doesn't contain executable code e.g for Game Manuals
.cia | Citrus Installable Archive - used for games that get installed to the 3ds memory


---
# NCSD Formats
Nintendo Citrus Standard formats are used for game cards and system updates.

There are three different extensions for the same file format: .3ds/.cci and .csu.

They all basically just contains **NCCH** format files such as (.cxi/.cfa/.app/.caa)[^1] which are documented in the NCCH section. 

## .3ds (3DS Game cards)
The .3ds format is commonly used unofficially to represent what Nintendo calls .cci files. They are Game cards for the Nintendo 3DS.

You can extract with:
```bash
3dstool -xvt017f cci 0.cxi 1.cfa 7.cfa input.3ds --header ncsdheader.bin
```
This will create the following files:
* ncsdheader.bin
* 0.cxi 
* 1.cfa 
* 7.cfa

Note that CXI and CFA files are **NCCH** formats that are covered in a section below.

---
## .cci (Citrus Card Image)
The CCI format is exactly the same as the **.3ds** extension, it is the official file extension that Nintendo uses for 3DS game cards.

---
## .csu (Citrus Sytem Update)
Nintendo 3DS (Citus) System Update files have the extension .csu but are exactly the same as any other NCSD format in that they are just an archive that contains NCCH-based files.


---
# NCCH Formats
NCCH files are always wrapped in a NCSD format as mentioned above, but there are two different types based on if they have executable ARM11 code in them. or not.

Check out 3DBrew for a nice guide to NCCH file formats:
[NCCH - 3dbrew](https://www.3dbrew.org/wiki/NCCH) 

---
## .cxi/.app (Citrus eXecutable Image)
These are files that contain executable ARM11 code
You can extract the files with:
```bash
# extract cxi without encryption
3dstool -xvtf cxi 0.cxi --header ncchheader.bin --exh exh.bin --logo logo.bcma.lz --plain plain.bin --exefs exefs.bin --romfs romfs.bin
```

This will create the **exefs.bin** which holds the executable ARM code and a **romfs.bin** which contains other data.

## ExeFS (Executable File System)
NCCH files can contains executable file system partitions (ExeFS), these are ARM code that run on the 3DS processors.

### Convert ExeFs to ELF
Here is a useful tool to convert ExeFS into the standard ELF format, loadable in other reverse engineering software such as Ghidra or IDA Pro.

[archshift/ctr-elf: Converts a 3DS program's EXEFS to an (IDA-loadable) ELF](https://github.com/archshift/ctr-elf) 

--
## .cfa (Citrus File Archive) 
Citrus File Archives are  NCCH files that do not contain Executable code, so they contain other things such as electronic manuals.

---
# References
[^1]: [.3DS vs .CCI ROM File Formats? - General - Citra Community](https://community.citra-emu.org/t/3ds-vs-cci-rom-file-formats/191/2)
