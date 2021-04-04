---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Software Development Kit (SDK)
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
image: /public/images/gba/Game Boy Advance SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK.jpg
permalink: /game-boy-advance-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  Game Boy Advance Software Development Kit
    url: #
recommend: 
- sdk
- gba
editlink: /gba/GBASDK.md
---
# Introduction
This page covers release 3 of the english software development kit, but the other versions are very similar to this. It is unclear if this was the last release of the development kit.

In the documentation Nintendo calls this SDK the **GameBoy Advance Developers Kit 2000** presumably due to using the millennium/2000 was very trendy at the time.

This was distributed to developers as a windows installer called **AGBSetup.exe** which would by default install it into a folder called **/agb** for Advanced Game Boy, so when upgrading the SDK it tells developers to delete the contents of the **/agb** directory before updating.

## Japanese SDK
As Nintendo is a Japanese company the SDK was originally created in Japanese and localised to English, however there are a few differences between the development kits.

The Japanese version include the **Mobile System GB** SDK which was a Japanese only accessory to link gameboys together via a mobile phone interface.

---
# Tools (/bin folder)
This folder contains useful command lines tools for GBA development compiled for Microsoft Windows.

File Name | Extension | Description
---|---|---
AGBLOAD | .exe | Tool to load ROM into the **IS-AGB-EMULATOR** hardware
NRDC | .exe | Calculates the CRC checksum for a GBA ROM (for more info see AGB_CRC.txt in /docs)
act2agb | .exe | Converts an Adobe Photoshop .ACT (Adobe Color Table) file to a GBA pallete in C source code form
agbcomp | .exe | Compresses binary data using either LZ77 or Huffman encoding
agbparts | .exe | Converts a bitmap image into 8x8 pixel parts useful for an optimized tileset or even sprites
bin2h | .exe | generates a C header file from the Binary result of objcopy
bmp2agb | .exe | Converts BMP images to either binary or text with optional compression
bmp2bin | .exe | Converts BMP files to binary formats .imb (Image Binary) and .plb (Palette Binary)
bmp2map | .exe | Converts BMP files to C-source code based on 8x8 pixel tiles
bmpgrid | .exe | Splits up a Bitmap into tiles/partitions based on input width/height (minimum 8x8)
bmpred | .exe, .sh | Reduces the colors of a BMP image using a specified palette 
sgi2bmp | .exe | Converts an SGI format image into a BMP format image

---
# Documentation (/doc folder)

This folder contains all the documentation provides for the various tools and libraries provided in the Game Boy Advance SDK.

File Name | Extension | Description
---|---|---
AGB_CRC | .txt | Describes usage of the tool **nrdc.exe** for calculating the CRC checksum for a GBA ROM
CompilerBugFix | .txt | This text file lists the differences in a patch applied to the cygwin toolchain (for 000512 -> 000513) (2001/2/6)
relnotes_rel3 | .txt | List of changes in version 3.0 of the SDK
relnotes_us | .txt | Notes the differences between the English US SDK and the Japanese version
toolsSetup | .txt | Instructions for installing the SDK and connecting to the development kit hardware

## AGB Programming Manual
The AGB programming manual is available in both PDF format (**AGBProgramming Manual.PDF**) and HTML format (/AllManual/program). 

It is 163 pages explaining everything pretty much everything you need to know to start programming for the GBA hardware:
* Memory Map
* Background rendering (Both Character and Binary modes)
* Playing sounds
* DMA
* Joypad input
* Interrupts
* Communication interfaces


## AGB Backup Library Manual
The AGB Backup Library manual is available in both PDF format (**AGBBackupLibraryManual.PDF**) and HTML format (/AllManual/backup) and covers the Save RAM (SRAM) available built in to certain cartridges.  

This documents the use of the **libagbbackup.a** static library which MUST be used to communicate with the different Save Game Backup chips on the cartridge, as Nintendo forbids not using this library to access the data (presumably for Save Game Safety).

The available SRAM chips on the GBA cartridges were:
* 256kbit SRAM
* 512kbit FLASH ROM
* 4kbit EEPROM

They had also planned support for **1Mbit DACS** but this was never released.

Each type of backup chip had its own set of functions and their own header files as listed below:
* SRAM - **AgbSram.h** and **AgbSramFast.h** 
* FLASH ROM - **AgbFlash.h**
* EEPROM - **AgbEeprom.h**

### SRAM Library
The difference between the two header files comes down to memory vs cpu optimization, the **Fast** version is more efficient on the CPU but uses 300 extra bytes of Work RAM (WRAM). Apart from the difference in memory usage they are identical. 

---
## AGB System Call Reference
The AGB System Call Reference manual is available in both PDF format (**AGB System Call Reference.PDF**) and HTML format (/AllManual/syscall). 

This is a 35 page document listing all of the system calls available from the Syscall (**libagbsyscall**) library to use in your application, such as functions like **BgAffineSet** or **CpuFastSet**. it is standard API documentation giving an explanation all the parameters and return type  and a little about what the functions achieve.

## AGB Register List
The AGB Register List is available in both PDF format (**AGBRegList.PDF**) and HTML format (/AllManual/register). 
It contains a large table of all the addresses of hardware registers, their names and what each bit does. 

This is an extremely helpful document when reverse engineering GBA games as games will often need to read or right to these registers to access the hardware features of the device.

These hardware Registers are used for many things including:
* Reading Game Pad buttons
* Communication over Link cable
* Sprite Management
* Sound Management
* Direct Memory Access (DMA)

## AGB Data Format
The AGB programming manual is available in both PDF format (**AGBDataFormat.PDF**) and HTML format (**/AllManual/dataformat**) and contains the format that data should be in for certain parts of memory, especially related to graphics.

There are a few areas of memory that need to be in a specifc format:
* Pallette RAM (5 bits for Red, 5 for Green and 5 for Blue)
* Background Data (Different format for Character mode vs Bitmap mode)
* Sprite Data/OAM - X/Y position of sprites and the image to show

If you are creating a GBA game you need to follow these Data Formats otherwise the screen will look corrrupt, most emulators will be able to help you out with their VRAM viewer windows.

## ARM7TDMI Reference Manual by ARM 
The **ARM7TDMI** Reference Manual is a PDF specification (**/AllManual/arm/ARM7TDMI_Ref_man.pdf**) provided by ARM that has 275 pages of pretty much everything you would ever want to know about the CPU used in the Game Boy Advance.

As this is a reference I wouldn't recommend reading it and instead just refer to it if you are looking into how a particular feature of the CPU works. You can reverse and create games without ever having opened this manual but when anytime you wonder about the Coprocessor or assembly instruction timings then this is a great reference.

## AGB IR Communication Library Manual
The AGB IR Communication Library manual is available in both PDF format (**AGBIRCommLibraryMan1.0.PDF**) and HTML format (/AllManual/ir) and covers the very low level technology details of how the IR interface works at the hardware level.

For using the IR communication library in a game see the  **AGB Infrared Comm Programming Guide** instead.

## AGB Infrared Communication Programming Guide
The AGB Infrared Communication Programming guide is available in both PDF format (**AGBInfraredCommProgGuide.PDF**) and HTML format (/AllManual/ir). 


---
## Frequently Asked Questions (/AllManual/faq)
This folder contains Frequently asked questions in HTML format for Game Boy Advance Development split into the following categories:
* **General** - Questions about GBA development that don't belong to a specific category
* **Graphics** - Questions about drawing sprites (Objs) and Backgrounds
* **Sound** - Questions related to playing sound and the **IS-AGB-MIDI** hardware
* **Communication** - Questions about Linking Game Boy Advance consoles together with Link Cables
* **Backup** - Questions about Save Data
* **GNU Tool** - Questions related to the Compiler/Assembler/Linker provided by Cygnus GNUPro Toolkit


---
## GNU Documentation (/AllManual/gnu)
This folder contains HTML documentation provided by Cygnus for their **GNUPro Toolkit** product which was a suite of compilers based on GCC but with official support from Cygnus (later RedHat) for compiling to ARM assembly.

This is the same as any GCC documentation you can find freely on the web and is not customized to the GBA so it will not be covered here.

---
## Header Documentation (/AllManual/header)
This folder contains the exact same files as the include directory but with a .TXT extension, this was provided just so the developer could access the files easily in their web browser when the have the documentation pages loaded up.

This is not particularly useful as most IDEs nowadays provide easy ways to check on the source code for the include files without leaving the editor.

---
## Music Player Documentation (/AllManual/musicplayer)
This folder contains documentation for the **MusicPlayerAGB2000** library, it is split into two different files, one for each of the different types of users:
* Sound Developer's Manual - For the sound engineer
* Programmer's Manual - For the game programmer

### Sound Developer's Manual
The Sound developer's Manual is HTML-based documentation found in the **/AllManual/musicplayer/sound_dev** folder.
