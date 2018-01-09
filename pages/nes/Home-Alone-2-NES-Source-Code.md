---
title: Home Alone 2 NES Source Code
layout: post
author: amorri40
permalink: /home-alone-2-nes-source-code/
tags:
- nes
- games
recommend: nes
youtube: cqsCqG-uako
source-id: 1H2w_1W9uv3uGGAasoNzfTNVo_eezOpEQY5comaUNsXk
published: true
---
## Home Alone 2 NES Source Code

The Source Code for "Home Alone 2" was released by Frank Cifaldi from GameHistoryorg (**[@frankcifald**i](https://twitter.com/frankcifaldi)).

The same Game Engine seems to have been used in at least 5 games developed by [Imagineering](https://en.wikipedia.org/wiki/Imagineering_(company)) for the Nintendo Entertainment System.

* Attack of the Killer Tomatoes

* Simpsons 2 (not sure if Bart vs. the Space Mutants or *Bart vs. the World* or *[Bartman Meets Radioactive Ma*n](https://en.wikipedia.org/wiki/Bartman_Meets_Radioactive_Man))

* Barbie

* Swamp Thing

* Home Alone 2

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_0.gif)![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_1.png)

### UTL Directory (Utility directory)

Thanks to "**freem**" on the NesDev forums we have a good description of the tools available in the UTL directory of the source code.

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>A65.EXE</td>
    <td>6502 NES Assembler 
Usage:     a65 [path]infile[.a65] [[path]outfile[.lod]]</td>
  </tr>
</table>


```

Most likely; here are some results after looking through the files in the "UTL" directory:

* A65.EXE looks to be a 6502 assembler.

* CMATCH.EXE and CMERGE.EXE are probably dev tools, but I'm not sure what they're for.

* CNGNIN.EXE: "This utility replaces the color palette information in dest.nin with the palette information from source.nin"

* CSM.EXE: "merge part of font from source to destination."

* DL.EXE, if I had to guess, seems to be used for downloading data to a development cartridge...

* L2G.EXE: "LBM2GRP - LBM to GRP Converter Rev 1.0 (1/22/92)" (as a USA company, that'd be 1992/01/22 under YYYY/MM/DD)

* L2N.EXE: "LBM2NIN - lbm to nin Converter Rev 1.0 June 7, 1991" (Probably the main tool used for graphics conversion, given the number of LBM files in the archive)

* LOD2BIN.EXE: Converts .LOD to binary files, presumably.

* LOD2RAW.EXE: "LOD2RAW - .LOD to .RAW File Conversion Utility Rev 0.0"

* MW.EXE: "MakeWorld" graphical program (uses a mouse)

* NIN2LOD.EXE: Converts .NIN files to .LOD files, whatever each of those are.

* NIN2OBJ2.EXE: Converts a .NIN to assembler source?

* NIN2RAW.EXE: Converts .NIN files to a .RAW file.

* TXTCMP.EXE: "TXTCMP - Text Compression Rev 1.0"

* RAWMRG.EXE: "RAWMRG - Raw Screen Map Merge Rev 0.1"

* RLCMP.EXE: "RLCMP - Run-Length Compression Rev 0.1"

* TXTCMP.EXE: "TXTCMP - Text Compression Rev 1.0"

```

[[https://forums.nesdev.com/viewtopic.php?f=5&t=14339](https://forums.nesdev.com/viewtopic.php?f=5&t=14339) ]

### File Formats

The file formats used in the source are listed in the following table:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>.NIN</td>
    <td>Nintendo image format?</td>
  </tr>
  <tr>
    <td>.RAW</td>
    <td>RAW image format (why have these when we have the LBM files?)</td>
  </tr>
  <tr>
    <td>.LOD</td>
    <td>I think this is compiled object files from assembly but not sure why its called LOD</td>
  </tr>
  <tr>
    <td>.LBM</td>
    <td>Deluxe Paint Images (Interlaced bitmaps), can be opened with XnViewMP</td>
  </tr>
  <tr>
    <td>.GRP</td>
    <td></td>
  </tr>
  <tr>
    <td>.SRC</td>
    <td>6502 Assembler Header files used for includes</td>
  </tr>
  <tr>
    <td>.A65</td>
    <td>6502 Assembler Source Code Implementation files</td>
  </tr>
  <tr>
    <td>.CEW</td>
    <td>6502 Assembler Source Code but with some minor differences</td>
  </tr>
  <tr>
    <td>.GME</td>
    <td>6502 Assembler Source Code Implementation files, these are only located in the Engine folder so does it stand for Game Engine?</td>
  </tr>
</table>


### BASE Directory

The BASE directory contains all the glue code that puts everything together, sets up the banking etc.

#### BASE.A65 vs BASE.CEW

There seems to be three different versions of the "BASE" file, all with minor differences. I'm trying to figure out what CEW stands for as I presume the main build is the BASE.A65 file. 

It looks like BASE.CEW is older than its .A65 sibling as the A65 version has additional code plus some of the CEW code commented out.

The third file is BASE.OLD which presumably is just an older version of BASE.A65 and not that interesting.

### DEVDOC Directory (Developer Documentation)

This directory contains some very interesting documentation written by the developers for how to use the game engine, scripting etc.

<table>
  <tr>
    <td>File Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ADDING.DOC      </td>
    <td>Describes how to go about creating a new ll* directory for the game (local levels). </td>
  </tr>
  <tr>
    <td>FILEINFO.FI    </td>
    <td>Information about the other files in the directory, mentions Game Boy but not sure the purpose of this file.</td>
  </tr>
  <tr>
    <td>INSTALL.DOC</td>
    <td>Installing a new project directory on your hard drive</td>
  </tr>
  <tr>
    <td>NEWNES.DOC      </td>
    <td>Documents how to build the project for different environments, such as Prod, Demo etc</td>
  </tr>
  <tr>
    <td>SCRPDOC.DOC</td>
    <td>Engine scripting documentation, how to use the scripting language</td>
  </tr>
  <tr>
    <td>TEMPLATE</td>
    <td>A bunch of Comment Templates for use in the assembly code, for example how to document a function similar to javadoc.</td>
  </tr>
</table>


### PUB (Public?) Directory

This directory seems to contain all the assets that are required on every level, for example the main character sprites and pickups.

I presume its called public because other developers can work on their own "local levels" but share the PUB folder with each other when they make changes.

#### PUB/GR (Public Graphics directory)

Mainly contains LBM files (Deluxe Paint) for Kevin and pickups used in all the other levels.

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_2.jpg)

### Local Level Directories (ll0 -> ll4)

I presume these are the different game levels?

#### Common FIles

<table>
  <tr>
    <td>CLEAN.BAT</td>
    <td>Clean the folder by removing all the compiled files (*.nin, *.lod, *.spr, *.mem etc)</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


### Local vs Full Game build

It looks like there are 2 different ways to compile the game, one is a 'local build' which only contains a certain level (ll0, ll1 etc) and the other is the full game which contains all the levels.

### ENG (Game Engine) Directory

### Developers

* Tony Lau

* Christoper Will (Is he known in the code as Henry C. Will IV? )

* Joseph A. Moses (Known in the code as Jesus? )

