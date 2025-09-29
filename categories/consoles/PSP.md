---
permalink: /psp/
layout: post
title: Sony Playstation Portable (PSP)
recommend: psp
recommendTitle: All PSP Posts
editlink: ../categories/consoles/PSP.md
console: 'psp'
consoleimage: /public/consoles/psp.svg
thumbnail: /public/consoles/psp.svg
excerpt: Awesome list of Sony Playstation Portable Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sony Playstation Portable
    url: #
tags:
  - psp
---
# Introduction
Welcome to our page dedicated to PSP reverse engineering! The PlayStation Portable, or PSP, was a popular handheld gaming console released by Sony in 2004. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PSP reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your PSP, and get ready to dive into the exciting world of PSP reverse engineering!

{{ site.category_images[page.console] }}

---
# Hardware
When announced the PSP was claimed to be as powerful as the PS2 and while it was certainly a very powerful system and the most impressive portable console on the market, it didn't quite reach the performance of it's home console sibling.

The PSP was made up of:
* Dual Core MIPS 32-bit CPU with SIMD Matrix coprocessor
* GPU with embedded memory (Fixed Function Pipeline)
* Sound processing on second CPU core

## Retail Hardware
For an in-depth look at the Playstation Portable's Retail hardware architecture check out the excellent post by **Copetti.org**:

{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/playstation-portable/" description="Check out the page on Copetti.org" image="/public/consoles/Sony PSP.png" title="PlayStation Portable Architecture - A Practical Analysis"  %}

### ALLEGREX CPU
The main CPU in the PSP was the **ALLEGREX**.

### VFPU - Vector Floating-point processor
The VFPU operates as a coprocessor for ALLEGREX it is a 128-bit vector floating-point processor.

Operates synchronously with ALLEGREX's clock (However, the write buffer operates at the bus clock speed.)

Equipped with 32 **128-bit** matrix registers
Designed for vector and matrix calculations (The minimum access unit is 32 bits.)

Capable of high-speed processing for geometry calculations, audio processing, and more.

---
## Development Hardware
We have a seperate post all about the development hardware used to make PSP games:
{% include link-to-other-post.html post="/official-psp-devkit" description="For more information on the development hardware check out this post." %}


---
# PSP Game Software Devleopment

## SN Systems ProDG SDK
There was a custom Software Development kit that was created by **SN Systems** before they got bought by Sony in 2005. It was later included in the official SDK when Sony bought the company.

{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information on the SN Systems SDK check out this post." %}

---
# File Formats
This section lists all the file formats that are useful to know about for reverse engineering or developing PSP games.

## PSP Game File Formats
Officially the PSP either used physical Universal Media Discs (UMD) or PBP files to distrubte games, but there are a variety of formats available for storing PSP games:
*	**ISO** - The most common format for PSP game files, an ISO is a disc image containing all the game disc’s data, essentially a copy of the Universal Media Disc (UMD) used by the PSP console.
*	**CSO** - A compressed version of an ISO file that reduces file size for storage and sharing but might result in slightly longer load times during gameplay.
*	**PBP** - Used for official PSP game files downloaded from the PlayStation Network, this format contains multiple compressed files such as the game executable, data, and media.
*	**CHD** - Another compressed and compact format supported by many PSP emulators.
*	**DAX** - An older compressed game file format used with early custom firmware.
*	**ELF** - Contains the executable code of a PSP game and is usually associated with homebrew applications.

Additionally, compressed zip and rar archives can sometimes be used by PSP emulators like **PPSSPP** run games without extracting.

### DAX - Dark_AleX's compressed File Format
The DAX file format is named after **Dark_AleX**, the pseudonym of a famous Spanish programmer who was a key figure in the PSP hacking and homebrew community. 

Dark_AleX developed custom firmware and various tools that enabled compressed PSP game images, including the DAX format, to overcome storage limitations of early PSP memory sticks.

Specifically, the DAX ISO compressor was created by Dark_AleX as a solution to the small storage sizes of Memory Stick PRO Duo cards available at the time. His work allowed users to compress PSP game images into smaller files (DAX files) for easier storage and use on PSP devices with limited storage capacity.

However more recently users found it more convenient to convert DAX files to the more popular compressed **CSO** format, which offers better compression and compatibility with almost all emulators unlike DAX.

### UMD_DATA.BIN
**UMD_DATA.BIN** is a small binary file found inside PSP game disc images (UMD ISOs). 
It essentially contains header data about the UMD disc, mainly including the disc ID and partition information. 
This file helps the PSP or emulators identify and manage the game data on the UMD image correctly.

In the structure of a dumped PSP game ISO, UMD_DATA.BIN serves as metadata that references the partitions (numbered typically 0001 and 0002) and the disc identity. It is crucial for proper loading and launching of the game when the ISO is used on the PSP system or emulators.

It usually contains the following metadata seperated by the pipe "|" (0x7C) character:
* Game disc ID (e.g "ULUS-10345")
* Unique disc hash or identifier (e.g "E93842F88AADAA8C")
* Partition number (e.g 0001) - often partition 0001 for the game data and 0002 for updates or extras
* Additional flags or markers (e.g "G") - unsure what other values are valid, does G mean game?

Tools like **UMDGen**, commonly used for creating and editing PSP UMD ISO files, can generate or edit UMD_DATA.BIN as part of managing the overall disc image

---
## PSP Development Formats
Some file formats used in the creation of PSP games:
* **GIM** - 2D Image Texture format similar to the PS1 **TIM** image format
* **GMO** - 3D model format

---
# All Posts

{% include console.html %}
