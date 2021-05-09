---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Tool Source Code
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
image: /public/images/gba/Game Boy Advance Tool Source Code.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance Tool Source Code.jpg
permalink: /game-boy-advance-tool-source-code/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  Game Boy Advance Tool Source Code
    url: #
recommend: 
- sdk
- gba
editlink: /gba/GBAToolSourceCode.md
---

# Introduction
In the Game Boy Advance SDK Version 3.0 the source code for a variety of tools are available to learn from and modify. These tools all have a command line interface (CLI) and are targeted for the Windows Operating System. They even come with Visual C++ 5.0 project files to make it really easy to build and extend, if you can still find a working version of VC++ 5.0 for your PC.

## What tools have source code available?
The GBA development tools with source code available are:

Tool Name | Description
---|---
act2agb | Converts an Adobe Photoshop .ACT (Adobe Color Table) file to a GBA pallete in C source code form
agbparts | Converts a bitmap image into 8x8 pixel parts useful for an optimized tileset or even sprites
bin2h | generates a C header file from the Binary result of objcopy
bmp2agb | Converts BMP images to either binary or text with optional compression
bmp2bin | Converts BMP files to binary formats .imb (Image Binary) and .plb (Palette Binary)
bmp2map | Converts BMP files to C-source code based on 8x8 pixel tiles
bmpgrid | Splits up a Bitmap into tiles/partitions based on input width/height (minimum 8x8)
bmpred | Reduces the colors of a BMP image using a specified palette 
sgi2bmp | Converts an SGI format image into a BMP format image

---
## What other information is included?
Along with a directory for each of the tools mentioned above, there are also a few files and directories that provide further information:
* doc - Three text documents that provide information about the tools
* etc - Blank folder
* include - Contains the C-header files for the common tool library (libmagbx)
* lib - contains the pre-build library libmagbx.lib
* libsrc - contains the source code for libmagbx
* readme.txt - brief notes on how to setup Visual C++ to build the tools

---
## What is libMagbX?
It seems to be a library containing common functionality used across multiple development tools for GBA development, as most of the tools operate on images there is common code to read and write image formats.

### Why is the library called libmagbX?
So the first 3 letters **lib** is a common prefix for statically compiled libraries, the next letter M is unknown but it could be short for iMage since this library mainly handles image conversions. The next 3 letters AGB stands for Advanced Game Boy but the last letter X is unknown.
