---
permalink: /psp/
layout: post
title: Sony Playstation Portable (PSP)
recommend: psp
recommendTitle: All PSP Posts
editlink: ../categories/consoles/PSP.md
console: 'psp'
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
We have a separate post all about the development hardware used to make PSP games:
{% include link-to-other-post.html post="/official-psp-devkit" description="For more information on the development hardware check out this post." %}


---
# PSP Game Software Devleopment

## SN Systems ProDG SDK
There was a custom Software Development kit that was created by **SN Systems** before they got bought by Sony in 2005. It was later included in the official SDK when Sony bought the company.

{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information on the SN Systems SDK check out this post." %}

---
# File Formats
This section lists all the file formats that are useful to know about for reverse engineering or developing PSP games.

## PSP Executable Formats
On official PSP discs, there are actually two executables included in the **SYSDIR** folder: **BOOT.BIN** and **EBOOT.BIN** the former is uncompressed/unencrypted and suitable for reverse engineering and the latter is the encrypted version that is loaded by the PSP retail firmware.

* **BOOT.BIN** - uncompressed, unencrypted executable, typically used during development and debugging.
* **EBOOT.BIN** - encrypted, compressed version of the same executable. Sony’s encryption prevents casual tampering and reverse engineering.

Sometimes the **BOOT.BIN** file is filled with zero bytes, this was more common with later PSP games, in which case you will need to decrypt **EBOOT.BIN** manually instead.

If you only have an **EBOOT.BIN** don't worry there are tools that can decrypt it back into a **BOOT.BIN** such as **PRXDecrypter**.

On retail discs, games almost always ship with both executables, even though only **EBOOT.BIN** is guaranteed to be used by official firmware.

Homebrew/custom firmware can be configured to load either, which is why **BOOT.BIN** remains useful for modders.

---
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

---
## Common PSP Files
There are some files that are common to almost all PSP games, they are often found in an extracted PSP game, this section will describe the purpose of each of them.

### UMD_DATA.BIN
**UMD_DATA.BIN** is a small binary file found inside PSP game disc images (UMD ISOs). 
It essentially contains header data about the UMD disc, mainly including the disc ID and partition information. 
This file helps the PSP or emulators identify and manage the game data on the UMD image correctly.

In the structure of a dumped PSP game ISO, UMD_DATA.BIN serves as metadata that references the partitions (numbered typically 0001 and 0002) and the disc identity. It is crucial for proper loading and launching of the game when the ISO is used on the PSP system or emulators.

It usually contains the following metadata separated by the pipe "|" (0x7C) character:
* Game disc ID (e.g "ULUS-10345")
* Unique disc hash or identifier (e.g "E93842F88AADAA8C")
* Partition number (e.g 0001) - often partition 0001 for the game data and 0002 for updates or extras
* Additional flags or markers (e.g "G") - unsure what other values are valid, does G mean game?

Tools like **UMDGen**, commonly used for creating and editing PSP UMD ISO files, can generate or edit UMD_DATA.BIN as part of managing the overall disc image

---
### PARAM.SFO
**PARAM.SFO** is a small but critical metadata file used by the PSP (and also PS3/PS4/PS5 with different schema). It’s stored in the root of the **PSP_GAME** folder and sometimes inside the **SYSDIR**/**UPDATE** folders too.

The purpose of the file is to **describes the game** (or update package) to the PSP system, so that the XMB had the data for displaying the game icon, title, version, and other details. It also tells the firmware what minimum system software version is required to run.

Typical Fields (for a PSP game):
* **TITLE** - Human-readable game title (what you see on XMB).
* **DISC_ID** - Unique identifier (e.g., ULUS-10409).
* **CATEGORY** - Type (e.g., MG for game, UG for update).
* **BOOTABLE** - Whether the package can be launched.
* **PSP_SYSTEM_VER** - Minimum firmware version required.
* **PARENTAL_LEVEL** - Restriction flag for parental controls.
* **REGION** - Sometimes embedded to limit compatibility.

The PSP will **refuse to boot the game** if PARAM.SFO is missing or corrupted, so make sure that when modding or trimming ISOs, PARAM.SFO must stay intact in the root!
The update folder’s PARAM.SFO is only used if you try to run the included firmware updater.

It can be edited (with tools like **PSP SFO Editor**) to spoof firmware requirements, useful for running older ISOs on newer/different firmware.

---
## PSP Development Formats
Some file formats used in the creation of PSP games:
* **.GIM** - 2D Image Texture format similar to the PS1 **TIM** image format
* **.GMO** - 3D model format
* **.PMF** - PlayStation Media Format used for full-motion video in games

### .PMF - PlayStation Media Format
On the PSP, .pmf files are PlayStation Media Format containers. They are a proprietary Sony format used mainly for full-motion video (FMV) in games e.g for logos, intro movies, attract/demo sequences, cutscenes and credits.

Internally, PMF files are very similar to MPEG-4 video with H.264-like video and ATRAC3+ audio.

They are typically played with the **psmf.prx** and **libpsmfplayer.prx** modules.

They are not essential to gameplay itself so they can be removed and the game usually still runs, but it may crash when trying to load the missing FMV unless the executable is patched. So its best to replace them with 0 byte files if you want to save space or skip cutscenes.

---
# Games

## PSP Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the **Debug symbols** in the retail release of the game. While this is rare due to Sony's TRC requirements, it has happened for some PSP games. These gives you access to all the original function and variables names that were used in the retail source code so are very valuable for reversers!

{% include link-to-other-post.html post="/psp-debug-symbols" description="For a list of PSP games that have debug symbols available check out this post." %}

---
# Reverse Engineering PSP Games with Ghidra

First step is to find your **BOOT.BIN** file, normally in the **PSP_GAME/SYSDIR** folder of the extracted game ISO. If you only have an EBOOT.BIN file you will need to convert it to a BOOT.BIN with a tool such as **PRXDecrypter**.

Since **BOOT.BIN** files are standard ELF executables compiled for the **MIPS R4000** (little-endian) instruction set you can import directly into Ghidra without any plugins!

![Importing BOOT.BIN into Ghidra](https://github.com/user-attachments/assets/47509766-9b30-4385-993b-30cde0597c71)

Now double click on **BOOT.BIN** in the Ghidra tree view and Ghidra will then ask you if you want to analyze the imported binary, say yes and keep the default settings for now.
![Analyze the imported executable in Ghidra](https://github.com/user-attachments/assets/05af9cd2-a88a-4cee-a7c9-b2d642038bda)

Give it some time to analyze, depending on the size of the executable it could take up to 10 or 20 minutes.

---
# All Posts

{% include console.html %}
