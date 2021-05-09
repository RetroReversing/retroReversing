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
updatedAt: '2021-05-09'
---

# Introduction
<section class="postSection">
    <img src="https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK.jpg" class="wow slideInLeft postImage" />

 <div markdown="1" class="rr-post-markdown">
This page covers release **3.0** of the english software development kit, but the other versions are very similar to this. It is unclear if this was the last release of the development kit.

In the documentation Nintendo calls this SDK the **GameBoy Advance Developers Kit 2000** presumably due to using the millennium/2000 was very trendy at the time.

This was distributed to developers as a windows installer called **AGBSetup.exe** which would by default install it into a folder called **/agb** for Advanced Game Boy, so when upgrading the SDK it tells developers to delete the contents of the **/agb** directory before updating.

 </div>
</section> 

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
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">AGB Programming Manual</div>

 <div markdown="1" class="rr-post-markdown">
The AGB programming manual is available in both PDF format (**AGBProgramming Manual.PDF**) and HTML format (/AllManual/program). 

It is 163 pages explaining pretty much everything you need to know to start programming for the GBA hardware:
* Memory Map
* Background rendering (Both Character and Binary modes)
* Playing sounds
* DMA
* Joypad input
* Interrupts
* Communication interfaces
 </div>
</section> 

## AGB Backup Library Manual
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">Backup Library Manual</div>

 <div markdown="1" class="rr-post-markdown">
The AGB Backup Library manual is available in both PDF format (**AGBBackupLibraryManual.PDF**) and HTML format (/AllManual/backup) and covers the Save RAM (SRAM) available built in to certain cartridges.  

This documents the use of the **libagbbackup.a** static library which MUST be used to communicate with the different Save Game Backup chips on the cartridge, as Nintendo forbids not using this library to access the data (presumably for Save Game Safety).
 </div>
</section> 

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
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">System Call Reference</div>

 <div markdown="1" class="rr-post-markdown">
The AGB System Call Reference manual is available in both PDF format (**AGB System Call Reference.PDF**) and HTML format (/AllManual/syscall). 

This is a 35 page document listing all of the system calls available from the Syscall (**libagbsyscall**) library to use in your application, such as functions like **BgAffineSet** or **CpuFastSet**. it is standard API documentation giving an explanation all the parameters and return type  and a little about what the functions achieve.
 </div>
</section> 

## AGB Register List
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">Register List</div>

 <div markdown="1" class="rr-post-markdown">
The AGB Register List is available in both PDF format (**AGBRegList.PDF**) and HTML format (/AllManual/register). 
It contains a large table of all the addresses of hardware registers, their names and what each bit does. 

This is an extremely helpful document when reverse engineering GBA games as games will often need to read or right to these registers to access the hardware features of the device.
</div>
</section> 

These hardware Registers are used for many things including:
* Reading Game Pad buttons
* Communication over Link cable
* Sprite Management
* Sound Management
* Direct Memory Access (DMA)

## AGB Data Format
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">Data Format</div>

 <div markdown="1" class="rr-post-markdown">
The AGB programming manual is available in both PDF format (**AGBDataFormat.PDF**) and HTML format (**/AllManual/dataformat**) and contains the format that data should be in for certain parts of memory, especially related to graphics.

There are a few areas of memory that need to be in a specific format:
* Pallette RAM (5 bits for Red, 5 for Green and 5 for Blue)
* Background Data (Different format for Character mode vs Bitmap mode)
* Sprite Data/OAM - X/Y position of sprites and the image to show

If you are creating a GBA game you need to follow these Data Formats otherwise the screen will look corrupt, most emulators will be able to help you out with their VRAM viewer windows.
</div>
</section> 

## ARM7TDMI Reference Manual by ARM 
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">ARM7 TDMI</div>

 <div markdown="1" class="rr-post-markdown">
The **ARM7TDMI** Reference Manual is a PDF specification (**/AllManual/arm/ARM7TDMI_Ref_man.pdf**) provided by ARM that has 275 pages of pretty much everything you would ever want to know about the CPU used in the Game Boy Advance.

As this is a reference I wouldn't recommend reading it and instead just refer to it if you are looking into how a particular feature of the CPU works. You can reverse and create games without ever having opened this manual but when anytime you wonder about the Coprocessor or assembly instruction timings then this is a great reference.
</div>
</section> 

## AGB IR Communication Library Manual
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">IR Communication Library</div>

 <div markdown="1" class="rr-post-markdown">
The AGB IR Communication Library manual is available in both PDF format (**AGBIRCommLibraryMan1.0.PDF**) and HTML format (/AllManual/ir) and covers the very low level technology details of how the IR interface works at the hardware level.

For using the IR communication library in a game see the  **AGB Infrared Comm Programming Guide** instead.
</div>
</section> 

## AGB Infrared Communication Programming Guide
<section class="postSection">
    <div class="file-icon file-icon-left file-icon-xl wow slideInLeft postImage" data-type="pdf">IR Programming Guide</div>

 <div markdown="1" class="rr-post-markdown">
The AGB Infrared Communication Programming guide is available in both PDF format (**AGBInfraredCommProgGuide.PDF**) and HTML format (/AllManual/ir) and covers programming for use with the Infrared Adapter.

The GBA Infrared Adapter (**AGB-006**) was an accessory that was released 2 years after the GBA and only ever used in 1 Japanese game called **Cyber Drive Zoids**.

</div>
</section> 

As the hardware is now quite rare and it was only ever used for one game this documentation will most likely not be useful to anyone reverse engineering or creating a new GBA game.

However **Shonumi** has written an excellent Edge of Emulation article on implementing an emulated version of the Infrared adaptor and even created a virtual Zoid (Robot):

{% include link-to-other-site.html url="" description="Check out the Edge of Emulation article on emulating the GBA Infrared Adapter" image="https://shonumi.github.io/articles/zoids_1.png" title="Edge of Emulation: GBA Infrared Adapter"  %}

---
## Frequently Asked Questions (/AllManual/faq)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/faq</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains Frequently asked questions in HTML format for Game Boy Advance Development split into the following categories:
* **General** - Questions about GBA development that don't belong to a specific category
* **Graphics** - Questions about drawing sprites (Objs) and Backgrounds
* **Sound** - Questions related to playing sound and the **IS-AGB-MIDI** hardware
* **Communication** - Questions about Linking Game Boy Advance consoles together with Link Cables
* **Backup** - Questions about Save Data
* **GNU Tool** - Questions related to the Compiler/Assembler/Linker provided by Cygnus GNUPro Toolkit
 </div>
</section> 

---
## GNU Documentation (/AllManual/gnu)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/gnu</div>

 <div markdown="1" class="rr-post-markdown">
  This folder contains HTML documentation provided by Cygnus for their **GNUPro Toolkit** product which was a suite of compilers based on GCC but with official support from Cygnus (later RedHat) for compiling to ARM assembly.
  
  This is the same as any GCC documentation you can find freely on the web and is not customized to the GBA so it will not be covered here.

 </div>
</section> 

---
## Header Documentation (/AllManual/header)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/header</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains the exact same files as the include directory but with a .TXT extension, this was provided just so the developer could access the files easily in their web browser when the have the documentation pages loaded up.

This is not particularly useful as most IDEs nowadays provide easy ways to check on the source code for the include files without leaving the editor.
 </div>
</section> 

---
## Music Player Documentation (/AllManual/musicplayer)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/musicplayer</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains documentation for the **MusicPlayerAGB2000** library, it is split into two different files, one for each of the different types of users:
* Sound Developer's Manual - For the sound engineer
* Programmer's Manual - For the game programmer
 </div>
</section> 

### Sound Developer's Manual
The Sound developer's Manual is HTML-based documentation found in the **/AllManual/musicplayer/sound_dev** folder and is tailored towards the sound engineer.

The documentation for the Sound and Music library is covered in its own post specifically for this functionality, it is recommended you read it here:

{% include link-to-other-post.html post="/game-boy-advance-sdk-m4a/" description="For more information about the GBA Music Library check out this post." %}

---
## Other Documentation (/AllManual/others)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/others</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains the following subsections:
* **Converter** - Documentation for the agbcomp and bmp2agb tools
* **Converter (old)** - Documentation for the tools: act2agb, agbparts, bin2h, bmp2bin, bmpgrid, bmpred and sgi2bmp
* **Function Sample** - Documentation for the sample projects in the src folder that show off certain functions such as Alpha Blending
* **Sample Demo** - Documentation for the two demo games: Yoshi and Dolphin
</div>
</section> 

### Iruka (Dolphin) Demo Documentation (/AllManual/others/demo/Iruka)
This folder contains documentation for the demo Dolphin game included in the **/src** folder and even includes UML-like Flow diagrams for the main game logic!

### Yoshi Demo Documentation (/AllManual/others/demo/yoshi)
This folder contains documentation for the Yoshi Demo project including the basics of how to play and the technology involved in its creation.

{% include link-to-other-post.html post="/game-boy-advance-sdk-demos/" description="For more information about the GBA SDK Demos check out this post." %}

---
### Function Sample Documentation (/AllManual/others/func_sample)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/func_sample</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains basic documentation for each of the samples provided in the **/src** directory that show off certain graphical features of the GBA hardware.
</div>
</section> 

File Name | Extension | Description
---|---|---
alphasm | .htm | Alpha Blending demo code
bg_rsm | .htm | Background demo code  showing rotating, scaling and moving backgrounds
bmpmode | .htm | Background Bitmap mode example code
coleffsm | .htm | Special Color effects sample code
obj_rsm | .htm | Object (Sprite) demo code showing rotating, scaling and moving sprites
swinsm | .htm | Example code showing off the different Window modes

---
# API Headers (/include folder)
This folder contains both C header include files (.h) and assembly headers (.s) that declare all the functions and macros used in the GBA SDK libraries.

File Name | Extension | Description
---|---|---
Agb | .h | Include file for importing all the common header files such as **AgbTypes.h**
AgbDefine | .h, .s |  Include file for declaring common macros such as **LCD_WIDTH**
AgbDefineArm | .s | Assembly include file for declaring common macros such as **SYSTEM_CLOCK**
AgbIr | .h | Include file for declaring the functions in the Infrared Communication library
AgbMacro | .h, .s | 
AgbMacroArm | .s | 
AgbMemoryMap | .h, .s | 
AgbMemoryMapArm | .s | 
AgbMultiBoot | .h | Include file for declaring the types used for the Multi-player download functionality with one cartridge
AgbSound | .h | Include file for declaring 
AgbSyscallDefine | .s | 
AgbSyscallDefineArm | .s | 
AgbSystemCall | .h | Include file for declaring 
AgbTypes | .h | Include file for declaring 
IsAgbPrint | .h | Include file for declaring the functions in the Debug Print to terminal library

<div class="rr-source-code-title">API Header Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="AgbDefine.h" />
  <h3>AgbDefine.h</h3><ul>
    <li><span>ON</span> <span>1</span></li>
    <li><span>OFF</span> <span>0</span></li>
    <li><span>ENABLE</span> <span>1</span></li>
    <li><span>DISABLE</span> <span>0</span></li>
    <li><span>TRUE</span> <span>1</span></li>
    <li><span>FALSE</span> <span>0</span></li>
    <li><span>LCD_WIDTH</span> <span>240 /* Screen Width*/</span></li>
    <li><span>LCD_HEIGHT</span> <span>160 /* Screen Height*/</span></li>
    <li><span>SYSTEM_CLOCK</span> <span>(16 * 1024 * 1024) /* System Clock*/</span></li>
    <li><span>RESET_ALL_FLAG</span> <span>0xff /* Reset all*/</span></li>
    <li><span>RESET_ALL_REG_FLAG</span> <span>0xe0 /* Reset all registers*/</span></li>
    <li><span>RESET_REG_FLAG</span> <span>0x80 /* Reset registers */</span></li>
    <li><span>RESET_REG_SOUND_FLAG</span> <span>0x40 /* Reset sound register*/</span></li>
    <li><span>RESET_REG_SIO_FLAG</span> <span>0x20 /* Reset SIO register*/</span></li>
    <li><span>RESET_ALL_RAM_FLAG</span> <span>0x1f /* Clear the entire RAM*/</span></li>
    <li><span>RESET_EX_WRAM_FLAG</span> <span>0x01 /* Clear CPU external RAM*/</span></li>
    <li><span>RESET_CPU_WRAM_FLAG</span> <span>0x02 /* Clear CPU internal RAM*/</span></li>
    <li><span>RESET_PLTT_FLAG</span> <span>0x04 /* Clear palette*/</span></li>
    <li><span>RESET_VRAM_FLAG</span> <span>0x08 /* Clear VRAM*/</span></li>
    <li><span>RESET_OAM_FLAG</span> <span>0x10 /* Clear OAM*/</span></li>
    <li><span>BG_SC_CHAR_NO_MASK</span> <span>0x03ff /* Character No*/</span></li>
    <li><span>BG_SC_FLIP_MASK</span> <span>0x0c00 /* Flip*/</span></li>
    <li><span>BG_SC_PLTT_MASK</span> <span>0xf000 /* Color Palette No*/</span></li>
    <li><span>BG_SC_CHAR_NO_SHIFT</span> <span>0</span></li>
    <li><span>BG_SC_FLIP_SHIFT</span> <span>10</span></li>
    <li><span>BG_SC_PLTT_SHIFT</span> <span>12</span></li>
    <li><span>BG_SC_H_FLIP</span> <span>0x0400 /* H Flip*/</span></li>
    <li><span>BG_SC_V_FLIP</span> <span>0x0800 /* V Flip*/</span></li>
    <li><span>SIN_SHIFT</span> <span>14</span></li>
    <li><span>AFFINE_DIV_SHIFT</span> <span>8</span></li>
    <li><span>AFFINE_REG_SHIFT</span> <span>8</span></li>
    <li><span>AFFINE_CAL_SHIFT</span> <span>(SIN_SHIFT + AFFINE_DIV_SHIFT - AFFINE_REG_SHIFT)</span></li>
    <li><span>OAM_V_POS_MASK</span> <span>0x000000ff /* OBJ X Coordinate*/</span></li>
    <li><span>OAM_H_POS_MASK</span> <span>0x01ff0000 /* OBJ Y Coordinate*/</span></li>
    <li><span>OAM_SHAPE_MASK</span> <span>0x0000c000 /* OBJ shape*/</span></li>
    <li><span>OAM_SIZE_MASK</span> <span>0xc0000000 /* OBJ size*/</span></li>
    <li><span>OAM_OBJ_MODE_MASK</span> <span>0x00000c00 /* OBJ Mode*/</span></li>
    <li><span>OAM_AFFINE_MODE_MASK</span> <span>0x00000300 /* Affine Mode*/</span></li>
    <li><span>OAM_AFFINE_NO_MASK</span> <span>0x3e000000 /* Affine Parameter No*/</span></li>
    <li><span>OAM_FLIP_MASK</span> <span>0x30000000 /* Flip*/</span></li>
    <li><span>OAM_CHAR_NO_MASK</span> <span>0x000003ff /* Character No*/</span></li>
    <li><span>OAM_PRIORITY_MASK</span> <span>0x00000c00 /* BG Relative Priority*/</span></li>
    <li><span>OAM_PLTT_MASK</span> <span>0x0000f000 /* Color Palette No*/</span></li>
    <li><span>OAM_AFFINE_PARAM_MASK</span> <span>0xffff0000 /* Affine Parameter*/</span></li>
    <li><span>OAM_V_POS_SHIFT</span> <span>0</span></li>
    <li><span>OAM_H_POS_SHIFT</span> <span>16</span></li>
    <li><span>OAM_SHAPE_SHIFT</span> <span>14</span></li>
    <li><span>OAM_SIZE_SHIFT</span> <span>30</span></li>
    <li><span>OAM_AFFINE_MODE_SHIFT</span> <span>8</span></li>
    <li><span>OAM_OBJ_MODE_SHIFT</span> <span>10</span></li>
    <li><span>OAM_AFFINE_NO_SHIFT</span> <span>25</span></li>
    <li><span>OAM_FLIP_SHIFT</span> <span>28</span></li>
    <li><span>OAM_CHAR_NO_SHIFT</span> <span>0</span></li>
    <li><span>OAM_PRIORITY_SHIFT</span> <span>10</span></li>
    <li><span>OAM_PLTT_SHIFT</span> <span>12</span></li>
    <li><span>OAM_AFFINE_PARAM_SHIFT</span> <span>16</span></li>
    <li><span>OAM_OBJ_ON</span> <span>0x00000000 /* OBJ ON*/</span></li>
    <li><span>OAM_OBJ_OFF</span> <span>0x00000200 /* OBJ OFF*/</span></li>
    <li><span>OAM_OBJ_NORMAL</span> <span>0x00000000 /* OBJ Normal Mode*/</span></li>
    <li><span>OAM_OBJ_BLEND</span> <span>0x00000400 /* OBJ Semi-transparent Mode*/</span></li>
    <li><span>OAM_OBJ_WINDOW</span> <span>0x00000800 /* OBJ Window Mode*/</span></li>
    <li><span>OAM_AFFINE_NONE</span> <span>0x00000000 /* Affine Invalid Mode*/</span></li>
    <li><span>OAM_AFFINE_NORMAL</span> <span>0x00000100 /* Affine Normal Mode*/</span></li>
    <li><span>OAM_AFFINE_TWICE</span> <span>0x00000300 /* Affine Double-size Mode*/</span></li>
    <li><span>OAM_AFFINE_ERASE</span> <span>0x00000200 /* Affine non-display Mode*/</span></li>
    <li><span>OAM_MOS_ON</span> <span>0x00001000 /* Mosaic ON*/</span></li>
    <li><span>OAM_MOS_OFF</span> <span>0x00000000 /* Mosaic OFF*/</span></li>
    <li><span>OAM_COLOR_16</span> <span>0x00000000 /* Select 16*/</span></li>
    <li><span>OAM_COLOR_256</span> <span>0x00002000 /* Select 256 colors*/</span></li>
    <li><span>OAM_H_FLIP</span> <span>0x10000000 /* H Flip*/</span></li>
    <li><span>OAM_V_FLIP</span> <span>0x20000000 /* V Flip*/</span></li>
    <li><span>OAM_SQUARE</span> <span>0x00000000 /* Square OBJ*/</span></li>
    <li><span>OAM_H_RECTANGLE</span> <span>0x00004000 /* Horizontally-oriented rectangle OBJ*/</span></li>
    <li><span>OAM_V_RECTANGLE</span> <span>0x00008000 /* Vertically-oriented rectangle OBJ*/</span></li>
    <li><span>OAM_SIZE_NO_0</span> <span>0x00000000 /* OBJ size No 0*/</span></li>
    <li><span>OAM_SIZE_NO_1</span> <span>0x40000000 /* OBJ size No 1*/</span></li>
    <li><span>OAM_SIZE_NO_2</span> <span>0x80000000 /* OBJ size No 2*/</span></li>
    <li><span>OAM_SIZE_NO_3</span> <span>0xc0000000 /* OBJ size No 3*/</span></li>
    <li><span>OAM_SIZE_8x8</span> <span>0x00000000 /* OBJ 8 x 8 dot*/</span></li>
    <li><span>OAM_SIZE_16x16</span> <span>0x40000000 /* OBJ 16 x 16 dot*/</span></li>
    <li><span>OAM_SIZE_32x32</span> <span>0x80000000 /* OBJ 32 x 32 dot*/</span></li>
    <li><span>OAM_SIZE_64x64</span> <span>0xc0000000 /* OBJ 64 x 64 dot*/</span></li>
    <li><span>OAM_SIZE_16x8</span> <span>0x00004000 /* OBJ 16 x 8 dot*/</span></li>
    <li><span>OAM_SIZE_32x8</span> <span>0x40004000 /* OBJ 32 x 8 dot*/</span></li>
    <li><span>OAM_SIZE_32x16</span> <span>0x80004000 /* OBJ 32 x 16 dot*/</span></li>
    <li><span>OAM_SIZE_64x32</span> <span>0xc0004000 /* OBJ 64 x 32 dot*/</span></li>
    <li><span>OAM_SIZE_8x16</span> <span>0x00008000 /* OBJ 8 x 16 dot*/</span></li>
    <li><span>OAM_SIZE_8x32</span> <span>0x40008000 /* OBJ 8 x 32 dot*/</span></li>
    <li><span>OAM_SIZE_16x32</span> <span>0x80008000 /* OBJ 16 x 32 dot*/</span></li>
    <li><span>OAM_SIZE_32x64</span> <span>0xc0008000 /* OBJ 32 x 64 dot*/</span></li>
    <li><span>PLTT_RED_MASK</span> <span>0x001f /* Red*/</span></li>
    <li><span>PLTT_GREEN_MASK</span> <span>0x03e0 /* Green*/</span></li>
    <li><span>PLTT_BLUE_MASK</span> <span>0x7c00 /* Blue*/</span></li>
    <li><span>PLTT_RED_SHIFT</span> <span>0</span></li>
    <li><span>PLTT_GREEN_SHIFT</span> <span>5</span></li>
    <li><span>PLTT_BLUE_SHIFT</span> <span>10</span></li>
    <li><span>PSR_CPU_MODE_MASK</span> <span>0x1f /* CPU Mode*/</span></li>
    <li><span>PSR_USER_MODE</span> <span>0x10 /* User*/</span></li>
    <li><span>PSR_FIQ_MODE</span> <span>0x11 /* FIQ*/</span></li>
    <li><span>PSR_IRQ_MODE</span> <span>0x12 /* IRQ*/</span></li>
    <li><span>PSR_SVC_MODE</span> <span>0x13 /* Supervisor*/</span></li>
    <li><span>PSR_ABORT_MODE</span> <span>0x17 /* Abort (Prefetch/Data)*/</span></li>
    <li><span>PSR_UNDEF_MODE</span> <span>0x1b /* Undefined Command*/</span></li>
    <li><span>PSR_SYS_MODE</span> <span>0x1f /* System*/</span></li>
    <li><span>PSR_THUMB_STATE</span> <span>0x20 /* THUMB State*/</span></li>
    <li><span>PSR_FIQ_DISABLE</span> <span>0x40 /* FIQ Disable*/</span></li>
    <li><span>PSR_IRQ_DISABLE</span> <span>0x80 /* IRQ Disable*/</span></li>
    <li><span>PSR_IRQ_FIQ_DISABLE</span> <span>0xc0 /* IRQ & FIQ Disable*/</span></li>
    <li><span>PSR_V_FLAG</span> <span>0x10000000 /* Overflow*/</span></li>
    <li><span>PSR_C_FLAG</span> <span>0x20000000 /* Carry/Borrow/Extend*/</span></li>
    <li><span>PSR_Z_FLAG</span> <span>0x40000000 /* Zero*/</span></li>
    <li><span>PSR_N_FLAG</span> <span>0x80000000 /* Negative/Less Than*/</span></li>
    <li><span>V_BLANK_INTR_FLAG</span> <span>0x0001 /* V Blank Interrupt*/</span></li>
    <li><span>H_BLANK_INTR_FLAG</span> <span>0x0002 /* H Blank Interrupt*/</span></li>
    <li><span>V_COUNT_INTR_FLAG</span> <span>0x0004 /* V Counter Corresponding Interrupt*/</span></li>
    <li><span>TIMER0_INTR_FLAG</span> <span>0x0008 /* Timer 0 Interrupt*/</span></li>
    <li><span>TIMER1_INTR_FLAG</span> <span>0x0010 /* Timer 1 Interrupt*/</span></li>
    <li><span>TIMER2_INTR_FLAG</span> <span>0x0020 /* Timer 2 Interrupt*/</span></li>
    <li><span>TIMER3_INTR_FLAG</span> <span>0x0040 /* Timer 3 Interrupt*/</span></li>
    <li><span>SIO_INTR_FLAG</span> <span>0x0080 /* Serial Communication Interrupt*/</span></li>
    <li><span>DMA0_INTR_FLAG</span> <span>0x0100 /* DMA0 Interrupt*/</span></li>
    <li><span>DMA1_INTR_FLAG</span> <span>0x0200 /* DMA1 Interrupt*/</span></li>
    <li><span>DMA2_INTR_FLAG</span> <span>0x0400 /* DMA2 Interrupt*/</span></li>
    <li><span>DMA3_INTR_FLAG</span> <span>0x0800 /* DMA3 Interrupt*/</span></li>
    <li><span>KEY_INTR_FLAG</span> <span>0x1000 /* Key Interrupt*/</span></li>
    <li><span>CASSETTE_INTR_FLAG</span> <span>0x2000 /* Game Pak Interrupt*/</span></li>
    <li><span>DISP_BG_MODE_MASK</span> <span>0x0007 /* BG Mode*/</span></li>
    <li><span>DISP_ON_MASK</span> <span>0x1f00 /* OBJ BG ON*/</span></li>
    <li><span>DISP_WIN_MASK</span> <span>0x6000 /* Window ON*/</span></li>
    <li><span>DISP_BG_MODE_SHIFT</span> <span>0</span></li>
    <li><span>DISP_ON_SHIFT</span> <span>8</span></li>
    <li><span>DISP_WIN_SHIFT</span> <span>13</span></li>
    <li><span>DISP_MODE_0</span> <span>0x0000 /* BG Mode 0*/</span></li>
    <li><span>DISP_MODE_1</span> <span>0x0001 /* BG Mode 1*/</span></li>
    <li><span>DISP_MODE_2</span> <span>0x0002 /* BG Mode 2*/</span></li>
    <li><span>DISP_MODE_3</span> <span>0x0003 /* BG Mode 3*/</span></li>
    <li><span>DISP_MODE_4</span> <span>0x0004 /* BG Mode 4*/</span></li>
    <li><span>DISP_MODE_5</span> <span>0x0005 /* BG Mode 5*/</span></li>
    <li><span>DISP_BMP_FRAME_NO</span> <span>0x0010 /* Bitmap Mode Display Frame*/</span></li>
    <li><span>DISP_OBJ_HOFF</span> <span>0x0020 /* OBJ Processing in H Blank OFF*/</span></li>
    <li><span>DISP_OBJ_CHAR_2D_MAP</span> <span>0x0000 /* OBJ Character Data 2D Mapping*/</span></li>
    <li><span>DISP_OBJ_CHAR_1D_MAP</span> <span>0x0040 /* OBJ Character Data 1D Mapping*/</span></li>
    <li><span>DISP_LCDC_OFF</span> <span>0x0080 /* LCDC OFF*/</span></li>
    <li><span>DISP_BG0_ON</span> <span>0x0100 /* BG0 ON*/</span></li>
    <li><span>DISP_BG1_ON</span> <span>0x0200 /* BG1 ON*/</span></li>
    <li><span>DISP_BG2_ON</span> <span>0x0400 /* BG2 ON*/</span></li>
    <li><span>DISP_BG3_ON</span> <span>0x0800 /* BG3 ON*/</span></li>
    <li><span>DISP_BG_ALL_ON</span> <span>0x0f00 /* All BG ON*/</span></li>
    <li><span>DISP_OBJ_ON</span> <span>0x1000 /* OBJ ON*/</span></li>
    <li><span>DISP_OBJ_BG_ALL_ON</span> <span>0x1f00 /* All OBJ/BG ON*/</span></li>
    <li><span>DISP_WIN0_ON</span> <span>0x2000 /* Window 0 ON*/</span></li>
    <li><span>DISP_WIN1_ON</span> <span>0x4000 /* Window 1 ON*/</span></li>
    <li><span>DISP_WIN01_ON</span> <span>0x6000 /* Window 0,1 ON*/</span></li>
    <li><span>DISP_OBJWIN_ON</span> <span>0x8000 /* OBJ Window ON*/</span></li>
    <li><span>DISP_WIN_ALL_ON</span> <span>0xe000 /* All Window ON*/</span></li>
    <li><span>DISP_ALL_ON</span> <span>0x7f00 /* All ON*/</span></li>
    <li><span>STAT_VCOUNT_CMP_MASK</span> <span>0xff00 /* V Counter Compare Value*/</span></li>
    <li><span>STAT_VCOUNT_CMP_SHIFT</span> <span>8</span></li>
    <li><span>STAT_V_BLANK</span> <span>0x0001 /* During V Blank*/</span></li>
    <li><span>STAT_H_BLANK</span> <span>0x0002 /* During H Blank*/</span></li>
    <li><span>STAT_V_COUNT</span> <span>0x0004 /* Matching with V Counter*/</span></li>
    <li><span>STAT_V_BLANK_IF_ENABLE</span> <span>0x0008 /* V Blank Interrupt Request, Enable*/</span></li>
    <li><span>STAT_H_BLANK_IF_ENABLE</span> <span>0x0010 /* H Blank Interrupt Request, Enable*/</span></li>
    <li><span>STAT_V_COUNT_IF_ENABLE</span> <span>0x0020 /* V Counter Corresponding */</span></li>
    <li><span>BG_PRIORITY_MASK</span> <span>0x0003 /* BG Priority*/</span></li>
    <li><span>BG_CHAR_BASE_MASK</span> <span>0x000c /* Character Base Address*/</span></li>
    <li><span>BG_SCREEN_BASE_MASK</span> <span>0x1f00 /* Screen Base Address*/</span></li>
    <li><span>BG_SCREEN_SIZE_MASK</span> <span>0xc000 /* Screen Size (256/512)*/</span></li>
    <li><span>BG_PRIORITY_SHIFT</span> <span>0</span></li>
    <li><span>BG_CHAR_BASE_SHIFT</span> <span>2</span></li>
    <li><span>BG_SCREEN_BASE_SHIFT</span> <span>8</span></li>
    <li><span>BG_SCREEN_SIZE_SHIFT</span> <span>14</span></li>
    <li><span>BG_PRIORITY_0</span> <span>0x0000 /* BG 0 Priority*/</span></li>
    <li><span>BG_PRIORITY_1</span> <span>0x0001 /* BG 1 Priority*/</span></li>
    <li><span>BG_PRIORITY_2</span> <span>0x0002 /* BG 2 Priority*/</span></li>
    <li><span>BG_PRIORITY_3</span> <span>0x0003 /* BG 3 Priority*/</span></li>
    <li><span>BG_MOS_ON</span> <span>0x0040 /* Mosaic ON*/</span></li>
    <li><span>BG_MOS_OFF</span> <span>0x0000 /* Mosaic OFF*/</span></li>
    <li><span>BG_COLOR_16</span> <span>0x0000 /* Select 16 colors*/</span></li>
    <li><span>BG_COLOR_256</span> <span>0x0080 /* Select 256 colors*/</span></li>
    <li><span>BG_LOOP_ON</span> <span>0x2000 /* Loop ON*/</span></li>
    <li><span>BG_LOOP_OFF</span> <span>0x0000 /* Loop OFF*/</span></li>
    <li><span>BG_SCREEN_SIZE_0</span> <span>0x0000 /* Screen Size (256x256)*/</span></li>
    <li><span>BG_SCREEN_SIZE_1</span> <span>0x4000 /* Screen Size (512x256)*/</span></li>
    <li><span>BG_SCREEN_SIZE_2</span> <span>0x8000 /* Screen Size (256x512)*/</span></li>
    <li><span>BG_SCREEN_SIZE_3</span> <span>0xc000 /* Screen Size (512x512)*/</span></li>
    <li><span>WIN_END_POS_MASK</span> <span>0x00ff /* Window End Position*/</span></li>
    <li><span>WIN_START_POS_MASK</span> <span>0xff00 /* Window Start Position*/</span></li>
    <li><span>WIN_END_POS_SHIFT</span> <span>0</span></li>
    <li><span>WIN_START_POS_SHIFT</span> <span>8</span></li>
    <li><span>WIN_BG0_ON</span> <span>0x0001 /* BG0 ON*/</span></li>
    <li><span>WIN_BG1_ON</span> <span>0x0002 /* BG1 ON*/</span></li>
    <li><span>WIN_BG2_ON</span> <span>0x0004 /* BG2 ON*/</span></li>
    <li><span>WIN_BG3_ON</span> <span>0x0008 /* BG3 ON*/</span></li>
    <li><span>WIN_OBJ_ON</span> <span>0x0010 /* OBJ ON*/</span></li>
    <li><span>WIN_BLEND_ON</span> <span>0x0020 /* Blend ON*/</span></li>
    <li><span>WIN_ALL_ON</span> <span>0x003f /* All ON*/</span></li>
    <li><span>MOS_H_SIZE_MASK</span> <span>0x000f /* Mosaic Height*/</span></li>
    <li><span>MOS_V_SIZE_MASK</span> <span>0x00f0 /* Mosaic Width*/</span></li>
    <li><span>MOS_BG_H_SIZE_MASK</span> <span>0x000f /* BG Mosaic Height*/</span></li>
    <li><span>MOS_BG_V_SIZE_MASK</span> <span>0x00f0 /* BG Mosaic Width*/</span></li>
    <li><span>MOS_OBJ_H_SIZE_MASK</span> <span>0x000f /* OBJ Mosaic Height*/</span></li>
    <li><span>MOS_OBJ_V_SIZE_MASK</span> <span>0x00f0 /* OBJ Mosaic Width*/</span></li>
    <li><span>MOS_H_SIZE_SHIFT</span> <span>0</span></li>
    <li><span>MOS_V_SIZE_SHIFT</span> <span>4</span></li>
    <li><span>MOS_BG_H_SIZE_SHIFT</span> <span>0</span></li>
    <li><span>MOS_BG_V_SIZE_SHIFT</span> <span>4</span></li>
    <li><span>MOS_OBJ_H_SIZE_SHIFT</span> <span>8</span></li>
    <li><span>MOS_OBJ_V_SIZE_SHIFT</span> <span>12</span></li>
    <li><span>BLD_PIXEL_MASK</span> <span>0x003f /* Select Pixel*/</span></li>
    <li><span>BLD_1ST_PIXEL_MASK</span> <span>0x003f /* Select 1st Pixel*/</span></li>
    <li><span>BLD_MODE_MASK</span> <span>0x00c0 /* Blend Mode*/</span></li>
    <li><span>BLD_2ND_PIXEL_MASK</span> <span>0x3f00 /* Select 2nd Pixel*/</span></li>
    <li><span>BLD_1ST_PIXEL_SHIFT</span> <span>0</span></li>
    <li><span>BLD_MODE_SHIFT</span> <span>6</span></li>
    <li><span>BLD_2ND_PIXEL_SHIFT</span> <span>8</span></li>
    <li><span>BLD_BG0</span> <span>0x0001 /* Select BG0 Pixel*/</span></li>
    <li><span>BLD_BG1</span> <span>0x0002 /* Select BG1 Pixel*/</span></li>
    <li><span>BLD_BG2</span> <span>0x0004 /* Select BG2 Pixel*/</span></li>
    <li><span>BLD_BG3</span> <span>0x0008 /* Select BG3 Pixel*/</span></li>
    <li><span>BLD_OBJ</span> <span>0x0010 /* Select OBJ Pixel*/</span></li>
    <li><span>BLD_BD</span> <span>0x0020 /* Select Background Color Pixel*/</span></li>
    <li><span>BLD_ALL</span> <span>0x003f /* Select All Pixels*/</span></li>
    <li><span>BLD_BG0_1ST</span> <span>0x0001 /* Select BG0 1st Pixel*/</span></li>
    <li><span>BLD_BG1_1ST</span> <span>0x0002 /* Select BG1 1st Pixel*/</span></li>
    <li><span>BLD_BG2_1ST</span> <span>0x0004 /* Select BG2 1st Pixel*/</span></li>
    <li><span>BLD_BG3_1ST</span> <span>0x0008 /* Select BG3 1st Pixel*/</span></li>
    <li><span>BLD_OBJ_1ST</span> <span>0x0010 /* Select OBJ 1st Pixel*/</span></li>
    <li><span>BLD_BD_1ST</span> <span>0x0020 /* Select Background Color 1st Pixel*/</span></li>
    <li><span>BLD_1ST_ALL</span> <span>0x003f /* Select All 1st Pixel*/</span></li>
    <li><span>BLD_NORMAL_MODE</span> <span>0x0000 /* Normal Mode*/</span></li>
    <li><span>BLD_A_BLEND_MODE</span> <span>0x0040 /* Semi-transparent Mode*/</span></li>
    <li><span>BLD_UP_MODE</span> <span>0x0080 /* Brightness UP Mode*/</span></li>
    <li><span>BLD_DOWN_MODE</span> <span>0x00c0 /* Brightness DOWN Mode*/</span></li>
    <li><span>BLD_BG0_2ND</span> <span>0x0100 /* Select BG0 2nd Pixel*/</span></li>
    <li><span>BLD_BG1_2ND</span> <span>0x0200 /* Select BG1 2nd Pixel*/</span></li>
    <li><span>BLD_BG2_2ND</span> <span>0x0400 /* Select BG2 2nd Pixel*/</span></li>
    <li><span>BLD_BG3_2ND</span> <span>0x0800 /* Select BG3 2nd Pixel*/</span></li>
    <li><span>BLD_OBJ_2ND</span> <span>0x1000 /* Select OBJ 2nd Pixel*/</span></li>
    <li><span>BLD_BD_2ND</span> <span>0x2000 /* Select Background color 2nd Pixel*/</span></li>
    <li><span>BLD_2ND_ALL</span> <span>0x3f00 /* Select All 2nd Pixel*/</span></li>
    <li><span>BLD_A_MASK</span> <span>0x001f /* Blend Variable A*/</span></li>
    <li><span>BLD_B_MASK</span> <span>0x1f00 /* Blend Variable B*/</span></li>
    <li><span>BLD_Y_MASK</span> <span>0x001f /* Blend Variable Y*/</span></li>
    <li><span>BLD_A_SHIFT</span> <span>16</span></li>
    <li><span>BLD_B_SHIFT</span> <span>24</span></li>
    <li><span>BLD_Y_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_SO1_LEVEL_MASK</span> <span>0x03 /* S01 Output Level*/</span></li>
    <li><span>SOUND_SO2_LEVEL_MASK</span> <span>0x30 /* S02 Output Level*/</span></li>
    <li><span>SOUND_DMG_SO1_ON_MASK</span> <span>0x0f /* DMG Compatible Sound->S01 ON*/</span></li>
    <li><span>SOUND_DMG_SO2_ON_MASK</span> <span>0xf0 /* DMG Compatible Sound->S02 ON*/</span></li>
    <li><span>SOUND_SWEEP_SHIFT_MASK</span> <span>0x03 /* Sweep Shift Number*/</span></li>
    <li><span>SOUND_SWEEP_TIME_MASK</span> <span>0x30 /* Sweep Time*/</span></li>
    <li><span>SOUND_COUNTS_MASK</span> <span>0x3f /* Sound Length (Count Number)*/</span></li>
    <li><span>SOUND_DUTY_MASK</span> <span>0xc0 /* Waveform Duty*/</span></li>
    <li><span>SOUND_ENV_STEPS_MASK</span> <span>0x03 /* Envelope Step Number*/</span></li>
    <li><span>SOUND_ENV_INIT_MASK</span> <span>0xf0 /* Envelope Initial-Value*/</span></li>
    <li><span>SOUND_FREQUENCY_MASK</span> <span>0x03ff /* Frequency*/</span></li>
    <li><span>SOUND_FREQUENCY_L_MASK</span> <span>0xff</span></li>
    <li><span>SOUND_FREQUENCY_H_MASK</span> <span>0x03</span></li>
    <li><span>SOUND_3_COUNTS_MASK</span> <span>0xff /* Sound 3 Length (Count Number)*/</span></li>
    <li><span>SOUND_3_LEVEL_MASK</span> <span>0xe0 /*    Output Level*/</span></li>
    <li><span>SOUND_4_PRESCALER_MASK</span> <span>0x03 /* Sound 4 Prescaler Select*/</span></li>
    <li><span>SOUND_4_POLYSHIFT_MASK</span> <span>0xf0 /* Polynomical Counter Shift Number*/</span></li>
    <li><span>SOUND_SO1_LEVEL_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_SO2_LEVEL_SHIFT</span> <span>4</span></li>
    <li><span>SOUND_DMG_SO1_ON_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_DMG_SO2_ON_SHIFT</span> <span>4</span></li>
    <li><span>SOUND_SWEEP_SHIFT_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_SWEEP_TIME_SHIFT</span> <span>4</span></li>
    <li><span>SOUND_COUNTS_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_DUTY_SHIFT</span> <span>6</span></li>
    <li><span>SOUND_ENV_STEPS_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_ENV_INIT_SHIFT</span> <span>4</span></li>
    <li><span>SOUND_FREQUENCY_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_FREQUENCY_L_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_FREQUENCY_H_SHIFT</span> <span>8</span></li>
    <li><span>SOUND_3_COUNTS_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_3_LEVEL_SHIFT</span> <span>5</span></li>
    <li><span>SOUND_4_PRESCALER_SHIFT</span> <span>0</span></li>
    <li><span>SOUND_4_POLYSHIFT_SHIFT</span> <span>4</span></li>
    <li><span>SOUND_1_ON</span> <span>0x01 /* Sound 1 ON*/</span></li>
    <li><span>SOUND_2_ON</span> <span>0x02 /* Sound 2 ON*/</span></li>
    <li><span>SOUND_3_ON</span> <span>0x04 /* Sound 3 ON*/</span></li>
    <li><span>SOUND_4_ON</span> <span>0x08 /* Sound 4 ON*/</span></li>
    <li><span>SOUND_DMG_ON</span> <span>0x80 /* DMG Compatible Sound ON*/</span></li>
    <li><span>SOUND_1_SO1_ON</span> <span>0x01 /* Sound 1 -> S01 ON*/</span></li>
    <li><span>SOUND_2_SO1_ON</span> <span>0x02 /* Sound 2 -> S01 ON*/</span></li>
    <li><span>SOUND_3_SO1_ON</span> <span>0x04 /* Sound 3 -> S01 ON*/</span></li>
    <li><span>SOUND_4_SO1_ON</span> <span>0x08 /* Sound 4 -> S01 ON*/</span></li>
    <li><span>SOUND_1_SO2_ON</span> <span>0x10 /* Sound 1 -> S02 ON*/</span></li>
    <li><span>SOUND_2_SO2_ON</span> <span>0x20 /* Sound 2 -> S02 ON*/</span></li>
    <li><span>SOUND_3_SO2_ON</span> <span>0x40 /* Sound 3 -> S02 ON*/</span></li>
    <li><span>SOUND_4_SO2_ON</span> <span>0x80 /* Sound 4 -> S02 ON*/</span></li>
    <li><span>SOUND_DMG_ALL_SO1_ON</span> <span>0x0f /* DMG Compatible Sound -> S01 ON*/</span></li>
    <li><span>SOUND_DMG_ALL_SO2_ON</span> <span>0xf0 /* DMG Compatible Sound -> S02 ON*/</span></li>
    <li><span>SOUND_DMG_ALL_SO_ON</span> <span>0xff /* DMG Compatible Sound -> S01/2 ON*/</span></li>
    <li><span>SOUND_VIN_SO1_ON</span> <span>0x80 /* Vin -> S01 ON*/</span></li>
    <li><span>SOUND_VIN_SO2_ON</span> <span>0x08 /* Vin -> S02 ON*/</span></li>
    <li><span>SOUND_VIN_SO_ON</span> <span>0x08 /* Vin -> S01/2 ON*/</span></li>
    <li><span>SOUND_A_SO1_ON</span> <span>0x01 /* Direct Sound A -> S01 ON*/</span></li>
    <li><span>SOUND_A_SO2_ON</span> <span>0x02 /* Direct Sound A -> S02 ON*/</span></li>
    <li><span>SOUND_B_SO1_ON</span> <span>0x10 /* Direct Sound B -> S01 ON*/</span></li>
    <li><span>SOUND_B_SO2_ON</span> <span>0x20 /* Direct Sound B -> S02 ON*/</span></li>
    <li><span>SOUND_A_ALL_SO_ON</span> <span>0x03 /* Direct Sound A -> S01/2 ON*/</span></li>
    <li><span>SOUND_B_ALL_SO_ON</span> <span>0x30 /* Direct Sound B -> S01/2 ON*/</span></li>
    <li><span>SOUND_DIRECT_ALL_SO1_ON</span> <span>0x11 /* Direct Sound A/B -> S01 ON*/</span></li>
    <li><span>SOUND_DIRECT_ALL_SO2_ON</span> <span>0x22 /* Direct Sound A/B -> S02 ON*/</span></li>
    <li><span>SOUND_DIRECT_ALL_SO_ON</span> <span>0x33 /* Direct Sound A/B -> S01/2 ON*/</span></li>
    <li><span>SOUND_A_TIMER_0</span> <span>0x00 /* Timer 0 -> Direct Sound A*/</span></li>
    <li><span>SOUND_A_TIMER_1</span> <span>0x04 /* Timer 1 -> Direct Sound A*/</span></li>
    <li><span>SOUND_B_TIMER_0</span> <span>0x00 /* Timer 0 -> Direct Sound B*/</span></li>
    <li><span>SOUND_B_TIMER_1</span> <span>0x40 /* Timer 1 -> Direct Sound B*/</span></li>
    <li><span>SOUND_A_FIFO_RESET</span> <span>0x08 /* Direct Sound A FIFO Reset*/</span></li>
    <li><span>SOUND_B_FIFO_RESET</span> <span>0x80 /* Direct Sound B FIFO Reset*/</span></li>
    <li><span>SOUND_DMG_MIX_1_4</span> <span>0x00 /* DMG Compatible Sound Mix Ratio 1/4*/</span></li>
    <li><span>SOUND_DMG_MIX_2_4</span> <span>0x01 /*                        2/4*/</span></li>
    <li><span>SOUND_DMG_MIX_FULL</span> <span>0x02 /*                        Full Range*/</span></li>
    <li><span>SOUND_A_MIX_1_2</span> <span>0x00 /* Direct Sound A Mix Ratio 1/2*/</span></li>
    <li><span>SOUND_A_MIX_FULL</span> <span>0x04 /*                        Full Range*/</span></li>
    <li><span>SOUND_B_MIX_1_2</span> <span>0x00 /* Direct Sound B Mix Ratio 1/2*/</span></li>
    <li><span>SOUND_B_MIX_FULL</span> <span>0x08 /*                        Full Range*/</span></li>
    <li><span>SOUND_ALL_MIX_FULL</span> <span>0x0e /* All Sound Mix Ratio Full Range*/</span></li>
    <li><span>SOUND_INIT_ON</span> <span>0x80 /* Initial ON*/</span></li>
    <li><span>SOUND_INIT_OFF</span> <span>0x00 /* Initial ON*/</span></li>
    <li><span>SOUND_COUNTER_ON</span> <span>0x40 /* Counter ON*/</span></li>
    <li><span>SOUND_COUNTER_OFF</span> <span>0x00 /* Counter OFF*/</span></li>
    <li><span>SOUND_SWEEP_UP</span> <span>0x00 /* Sweep Addition*/</span></li>
    <li><span>SOUND_SWEEP_DOWN</span> <span>0x08 /*          Subtraction*/</span></li>
    <li><span>SOUND_DUTY_1_8</span> <span>0x00 /* Waveform Duty 1/8*/</span></li>
    <li><span>SOUND_DUTY_2_8</span> <span>0x40 /*                  2/8*/</span></li>
    <li><span>SOUND_DUTY_4_8</span> <span>0x80 /*                  4/8*/</span></li>
    <li><span>SOUND_DUTY_6_8</span> <span>0xc0 /*                  6/8*/</span></li>
    <li><span>SOUND_ENV_UP</span> <span>0x08 /* Envelope UP*/</span></li>
    <li><span>SOUND_ENV_DOWN</span> <span>0x00 /*              DOWN*/</span></li>
    <li><span>SOUND_3_LOCAL_ON</span> <span>0x80 /* Sound 3 ON*/</span></li>
    <li><span>SOUND_3_WAVE_BANK_0</span> <span>0x00 /* Sound 3 Waveform RAM Bank 0*/</span></li>
    <li><span>SOUND_3_WAVE_BANK_1</span> <span>0x40 /*                       Bank 1*/</span></li>
    <li><span>SOUND_3_WAVE_CONNECT</span> <span>0x20 /* Sound 3 Waveform RAM Connect*/</span></li>
    <li><span>SOUND_3_WAVE_DISCONNECT</span> <span>0x00 /*                       Disconnect*/</span></li>
    <li><span>SOUND_3_LEVEL_0_4</span> <span>0x00 /* Sound 3 Output None*/</span></li>
    <li><span>SOUND_3_LEVEL_FULL</span> <span>0x20 /*                 4/4*/</span></li>
    <li><span>SOUND_3_LEVEL_2_4</span> <span>0x40 /*                 2/4*/</span></li>
    <li><span>SOUND_3_LEVEL_1_4</span> <span>0x60 /*                 1/4*/</span></li>
    <li><span>SOUND_3_LEVEL_3_4</span> <span>0x80 /*                 3/4*/</span></li>
    <li><span>SOUND_4_POLYSTEP_15</span> <span>0x00 /* Sound 4 Polynomical Counter 15 step*/</span></li>
    <li><span>SOUND_4_POLYSTEP_7</span> <span>0x08 /*                              7 step*/</span></li>
    <li><span>SIO_MODE_MASK</span> <span>0x3000 /* Communication mode*/</span></li>
    <li><span>SIO_BAUD_RATE_MASK</span> <span>0x0003 /* Baud rate*/</span></li>
    <li><span>SIO_ID_NO_MASK</span> <span>0x0030 /* Communication ID*/</span></li>
    <li><span>SIO_MODE_SHIFT</span> <span>12</span></li>
    <li><span>SIO_BAUD_RATE_SHIFT</span> <span>0</span></li>
    <li><span>SIO_ID_NO_SHIFT</span> <span>4</span></li>
    <li><span>SIO_8BIT_MODE</span> <span>0x0000 /* Normal 8-bit communication mode*/</span></li>
    <li><span>SIO_32BIT_MODE</span> <span>0x1000 /* Normal 32-bit communication mode*/</span></li>
    <li><span>SIO_MULTI_MODE</span> <span>0x2000 /* Multi-play communication mode*/</span></li>
    <li><span>SIO_UART_MODE</span> <span>0x3000 /* UART communication mode*/</span></li>
    <li><span>SIO_SCK_OUT</span> <span>0x0000 /* Select external clock*/</span></li>
    <li><span>SIO_SCK_IN</span> <span>0x0001 /* Select internal clock*/</span></li>
    <li><span>SIO_IN_SCK_256K</span> <span>0x0000 /* Select internal clock 256KHz*/</span></li>
    <li><span>SIO_IN_SCK_2M</span> <span>0x0002 /*                  Select 2MHz*/</span></li>
    <li><span>SIO_ACK_RECV</span> <span>0x0004 /* Request transfer*/</span></li>
    <li><span>SIO_ACK_SEND</span> <span>0x0008 /* Enable transfer*/</span></li>
    <li><span>SIO_9600_BPS</span> <span>0x0000 /* Baud rate 9600 bps*/</span></li>
    <li><span>SIO_38400_BPS</span> <span>0x0001 /*          38400 bps*/</span></li>
    <li><span>SIO_57600_BPS</span> <span>0x0002 /*          57600 bps*/</span></li>
    <li><span>SIO_115200_BPS</span> <span>0x0003 /*        115200 bps*/</span></li>
    <li><span>SIO_MULTI_CONNECT</span> <span>0x0004 /* Connecting multi-play communication*/</span></li>
    <li><span>SIO_MULTI_DISCONNECT</span> <span>0x0000 /*                  Disconnect*/</span></li>
    <li><span>SIO_MULTI_PARENT</span> <span>0x0008 /* Multi-play communication  Connect master*/</span></li>
    <li><span>SIO_MULTI_CHILD</span> <span>0x0000 /*                  Connect slave*/</span></li>
    <li><span>SIO_MULTI_SI</span> <span>0x0004 /* Multi-play communication SI terminal*/</span></li>
    <li><span>SIO_MULTI_SD</span> <span>0x0008 /*                  SD terminal*/</span></li>
    <li><span>SIO_MULTI_BUSY</span> <span>0x0080 /* Multi-play communicating*/</span></li>
    <li><span>SIO_CTS_ENABLE</span> <span>0x0004 /* Enable UART send enable signal*/</span></li>
    <li><span>SIO_UART_7BIT</span> <span>0x0000 /* UART communication data length 7 bit*/</span></li>
    <li><span>SIO_UART_8BIT</span> <span>0x0080 /*                       8 bit*/</span></li>
    <li><span>SIO_ERROR</span> <span>0x0040 /* Detect error*/</span></li>
    <li><span>SIO_START</span> <span>0x0080 /* Start transfer*/</span></li>
    <li><span>SIO_ENABLE</span> <span>0x0080 /* Enable SIO*/</span></li>
    <li><span>SIO_FIFO_ENABLE</span> <span>0x0100 /* Enable FIFO*/</span></li>
    <li><span>SIO_PARITY_ENABLE</span> <span>0x0200 /* Enable parity*/</span></li>
    <li><span>SIO_PARITY_EVEN</span> <span>0x0000 /* Even parity*/</span></li>
    <li><span>SIO_PARITY_ODD</span> <span>0x0008 /* Odd parity*/</span></li>
    <li><span>SIO_TRANS_ENABLE</span> <span>0x0400 /* Enable transmitter*/</span></li>
    <li><span>SIO_TRANS_DATA_FULL</span> <span>0x0010 /* Transmitted data full */</span></li>
    <li><span>SIO_RECV_ENABLE</span> <span>0x0800 /* Enable receiver*/</span></li>
    <li><span>SIO_RECV_DATA_EMPTY</span> <span>0x0020 /* No data received*/</span></li>
    <li><span>SIO_IF_ENABLE</span> <span>0x4000 /* Enable interrupt request*/</span></li>
    <li><span>JOY_IF_RESET</span> <span>0x01 /* Interrupt request of JOY bus reset */</span></li>
    <li><span>JOY_IF_RECV</span> <span>0x02 /* Interrupt request of JOY bus receive completion*/</span></li>
    <li><span>JOY_IF_SEND</span> <span>0x04 /* Interrupt request of JOY bus send completion*/</span></li>
    <li><span>JOY_IF_ENABLE</span> <span>0x40 /* Enable interrupt request*/</span></li>
    <li><span>JSTAT_FLAGS_MASK</span> <span>0x30 /* General flag*/</span></li>
    <li><span>JSTAT_FLAGS_SHIFT</span> <span>4</span></li>
    <li><span>JSTAT_RECV</span> <span>0x02 /* Receive status*/</span></li>
    <li><span>JSTAT_SEND</span> <span>0x08 /* Send status*/</span></li>
    <li><span>R_SIO_MODE_MASTER_MASK</span> <span>0xc000 /* SIO mode master*/</span></li>
    <li><span>R_SIO_MODE_MASTER_SHIFT</span> <span>14</span></li>
    <li><span>R_SIO_MASTER_MODE</span> <span>0x0000 /* SIO master mode*/</span></li>
    <li><span>R_DIRECT_MODE</span> <span>0x8000 /* General input/output */</span></li>
    <li><span>R_JOY_MODE</span> <span>0xc000 /* JOY communication mode*/</span></li>
    <li><span>R_SC</span> <span>0x0001 /* Data*/</span></li>
    <li><span>R_SD</span> <span>0x0002</span></li>
    <li><span>R_SI</span> <span>0x0004</span></li>
    <li><span>R_SO</span> <span>0x0008</span></li>
    <li><span>R_SC_I_O</span> <span>0x0010 /* Select I/O*/</span></li>
    <li><span>R_SD_I_O</span> <span>0x0020</span></li>
    <li><span>R_SI_I_O</span> <span>0x0040</span></li>
    <li><span>R_SO_I_O</span> <span>0x0080</span></li>
    <li><span>R_SC_IN</span> <span>0x0000 /* Input setting*/</span></li>
    <li><span>R_SD_IN</span> <span>0x0000</span></li>
    <li><span>R_SI_IN</span> <span>0x0000</span></li>
    <li><span>R_SO_IN</span> <span>0x0000</span></li>
    <li><span>R_SC_OUT</span> <span>0x0010 /* Output setting*/</span></li>
    <li><span>R_SD_OUT</span> <span>0x0020</span></li>
    <li><span>R_SI_OUT</span> <span>0x0040</span></li>
    <li><span>R_SO_OUT</span> <span>0x0080</span></li>
    <li><span>R_IF_ENABLE</span> <span>0x0100 /* Enable interrupt request*/</span></li>
    <li><span>DMA_TIMMING_MASK</span> <span>0x30000000 /* Start Timing*/</span></li>
    <li><span>DMA_COUNT_MASK</span> <span>0x0000ffff /* Transmission Count*/</span></li>
    <li><span>DMA_TIMMING_SHIFT</span> <span>30</span></li>
    <li><span>DMA_COUNT_SHIFT</span> <span>0</span></li>
    <li><span>DMA_ENABLE</span> <span>0x80000000 /* DMA Enable*/</span></li>
    <li><span>DMA_IF_ENABLE</span> <span>0x40000000 /* Interrupt Request Enable*/</span></li>
    <li><span>DMA_TIMMING_IMM</span> <span>0x00000000 /* Run Immediately*/</span></li>
    <li><span>DMA_TIMMING_V_BLANK</span> <span>0x10000000 /* Run V Blank*/</span></li>
    <li><span>DMA_TIMMING_H_BLANK</span> <span>0x20000000 /* Run H Blank*/</span></li>
    <li><span>DMA_TIMMING_DISP</span> <span>0x30000000 /* Run Display*/</span></li>
    <li><span>DMA_TIMMING_SOUND</span> <span>0x30000000 /* Run Sound FIFO Request*/</span></li>
    <li><span>DMA_DREQ_ON</span> <span>0x08000000 /* Data Request Synchronize Mode ON*/</span></li>
    <li><span>DMA_16BIT_BUS</span> <span>0x00000000 /* Select Bus Size 16Bit*/</span></li>
    <li><span>DMA_32BIT_BUS</span> <span>0x04000000 /* Select Bus Size 32Bit*/</span></li>
    <li><span>DMA_CONTINUOUS_ON</span> <span>0x02000000 /* Continuous Mode ON*/</span></li>
    <li><span>DMA_SRC_INC</span> <span>0x00000000 /* Select Source Increment*/</span></li>
    <li><span>DMA_SRC_DEC</span> <span>0x00800000 /* Select Source Decrement*/</span></li>
    <li><span>DMA_SRC_FIX</span> <span>0x01000000 /* Select Source Fixed*/</span></li>
    <li><span>DMA_DEST_INC</span> <span>0x00000000 /* Select Destination Increment*/</span></li>
    <li><span>DMA_DEST_DEC</span> <span>0x00200000 /* Select Destination Decrement*/</span></li>
    <li><span>DMA_DEST_FIX</span> <span>0x00400000 /* Select Destination Fixed*/</span></li>
    <li><span>DMA_DEST_RELOAD</span> <span>0x00600000 /* Select Destination */</span></li>
    <li><span>TMR_PRESCALER_MASK</span> <span>0x00030000 /* Prescaler Clock*/</span></li>
    <li><span>TMR_PRESCALER_SHIFT</span> <span>16</span></li>
    <li><span>TMR_PRESCALER_1CK</span> <span>0x00000000 /* Prescaler 1 Clock*/</span></li>
    <li><span>TMR_PRESCALER_64CK</span> <span>0x00010000 /*            64 clocks*/</span></li>
    <li><span>TMR_PRESCALER_256CK</span> <span>0x00020000 /*          256 clocks*/</span></li>
    <li><span>TMR_PRESCALER_1024CK</span> <span>0x00030000 /*        1024 clocks*/</span></li>
    <li><span>TMR_IF_ENABLE</span> <span>0x00400000 /* Interrupt Request Enable*/</span></li>
    <li><span>TMR_ENABLE</span> <span>0x00800000 /* Run Timer*/</span></li>
    <li><span>BUTTON_MASK</span> <span>0x030f /* Button*/</span></li>
    <li><span>PLUS_KEY_MASK</span> <span>0x00f0 /* +Control Pad*/</span></li>
    <li><span>ALL_KEY_MASK</span> <span>0x03ff /* All Key*/</span></li>
    <li><span>A_BUTTON</span> <span>0x0001 /* A Button*/</span></li>
    <li><span>B_BUTTON</span> <span>0x0002 /* B Button*/</span></li>
    <li><span>SELECT_BUTTON</span> <span>0x0004 /* SELECT*/</span></li>
    <li><span>START_BUTTON</span> <span>0x0008 /* START*/</span></li>
    <li><span>R_KEY</span> <span>0x0010 /* Right Button*/</span></li>
    <li><span>L_KEY</span> <span>0x0020 /* Left Button*/</span></li>
    <li><span>U_KEY</span> <span>0x0040 /* Up Button*/</span></li>
    <li><span>D_KEY</span> <span>0x0080 /* Down Button*/</span></li>
    <li><span>R_BUTTON</span> <span>0x0100 /* R Button*/</span></li>
    <li><span>L_BUTTON</span> <span>0x0200 /* L Button*/</span></li>
    <li><span>KEY_IF_ENABLE</span> <span>0x4000 /* Interrupt Request Enable*/</span></li>
    <li><span>KEY_OR_INTR</span> <span>0x0000 /* Normal Key Interrupt*/</span></li>
    <li><span>KEY_AND_INTR</span> <span>0x8000 /* AND Key Interrupt*/</span></li>
    <li><span>CST_SRAM_4WAIT</span> <span>0x0000 /* SRAM 4 wait*/</span></li>
    <li><span>CST_SRAM_3WAIT</span> <span>0x0001 /*          3 wait*/</span></li>
    <li><span>CST_SRAM_2WAIT</span> <span>0x0002 /*          2 wait*/</span></li>
    <li><span>CST_SRAM_8WAIT</span> <span>0x0003 /*          8 wait*/</span></li>
    <li><span>CST_ROM0_1ST_4WAIT</span> <span>0x0000 /* ROM0 1st 4 wait*/</span></li>
    <li><span>CST_ROM0_1ST_3WAIT</span> <span>0x0004 /*                 3 wait*/</span></li>
    <li><span>CST_ROM0_1ST_2WAIT</span> <span>0x0008 /*                 2 wait*/</span></li>
    <li><span>CST_ROM0_1ST_8WAIT</span> <span>0x000c /*                 8 wait*/</span></li>
    <li><span>CST_ROM0_2ND_2WAIT</span> <span>0x0000 /*          2nd 2 wait*/</span></li>
    <li><span>CST_ROM0_2ND_1WAIT</span> <span>0x0010 /*                 1 wait*/</span></li>
    <li><span>CST_ROM1_1ST_4WAIT</span> <span>0x0000 /* ROM 1 1st 4 wait*/</span></li>
    <li><span>CST_ROM1_1ST_3WAIT</span> <span>0x0020 /*                 3 wait*/</span></li>
    <li><span>CST_ROM1_1ST_2WAIT</span> <span>0x0040 /*                 2 wait*/</span></li>
    <li><span>CST_ROM1_1ST_8WAIT</span> <span>0x0060 /*                 8 wait*/</span></li>
    <li><span>CST_ROM1_2ND_4WAIT</span> <span>0x0000 /*          2nd 4 wait*/</span></li>
    <li><span>CST_ROM1_2ND_1WAIT</span> <span>0x0080 /*                 1 wait*/</span></li>
    <li><span>CST_ROM2_1ST_4WAIT</span> <span>0x0000 /* ROM 2 1st 4 wait*/</span></li>
    <li><span>CST_ROM2_1ST_3WAIT</span> <span>0x0100 /*                 3 wait*/</span></li>
    <li><span>CST_ROM2_1ST_2WAIT</span> <span>0x0200 /*                 2 wait*/</span></li>
    <li><span>CST_ROM2_1ST_8WAIT</span> <span>0x0300 /*                 8 wait*/</span></li>
    <li><span>CST_ROM2_2ND_8WAIT</span> <span>0x0000 /*          2nd 8 wait*/</span></li>
    <li><span>CST_ROM2_2ND_1WAIT</span> <span>0x0400 /*                 1 wait*/</span></li>
    <li><span>CST_PHI_OUT_NONE</span> <span>0x0000 /* terminal output clock fixed Lo*/</span></li>
    <li><span>CST_PHI_OUT_4MCK</span> <span>0x0800 /*                4MHz*/</span></li>
    <li><span>CST_PHI_OUT_8MCK</span> <span>0x1000 /*                8MHz*/</span></li>
    <li><span>CST_PHI_OUT_16MCK</span> <span>0x1800 /*              16MHz*/</span></li>
    <li><span>CST_PREFETCH_ENABLE</span> <span>0x4000 /* Enable prefetch buffer*/</span></li>
    <li><span>CST_AGB</span> <span>0x0000 /* AGB Game Pak*/</span></li>
    <li><span>CST_CGB</span> <span>0x8000 /* CGB Game Pak*/</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">710</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbIr.h" />
  <h3>AgbIr.h</h3><ul>
    <li><span>void</span> irBegin<span class="rr-func-args">(int,irResult*,int)</span></li> 
    <li><span>void</span> irEnd<span class="rr-func-args">()</span></li> 
    <li><span>int</span> irSendConnect<span class="rr-func-args">(int)</span></li> 
    <li><span>int</span> irRecvConnect<span class="rr-func-args">(int)</span></li> 
    <li><span>void</span> irInit<span class="rr-func-args">()</span></li> 
    <li><span>int</span> irSendPacket<span class="rr-func-args">(int*,int)</span></li> 
    <li><span>int</span> irRecvPacket<span class="rr-func-args">(int*,int)</span></li> 
    <li><span>void</span> irMountThumbCore<span class="rr-func-args">()</span></li> 
    <li><span>void</span> irMountArmCore<span class="rr-func-args">(int*,int*)</span></li> 
    <li><span>void</span> irRamCopy<span class="rr-func-args">(int*,int*)</span></li> 
    <li><span>void</span> irEnable<span class="rr-func-args">()</span></li> 
    <li><span>void</span> irDisable<span class="rr-func-args">()</span></li> 
    <li><span>int</span> irDetection<span class="rr-func-args">()</span></li> 
    <li><span>IR_SHUTDOWN</span> <span>0x00</span></li>
    <li><span>IR_DISCONNECT</span> <span>0xff</span></li>
    <li><span>IR_NORMAL</span> <span>0x8b /*Normal Value*/</span></li>
    <li><span>IR_PULSE_ERR</span> <span>0x01 /*When received pulse error*/</span></li>
    <li><span>IR_BYTES_ERR</span> <span>0x02 /*When received send request for more */</span></li>
    <li><span>IR_CODE_ERR</span> <span>0x04 /*Header Code Error*/</span></li>
    <li><span>IR_SUM_ERR</span> <span>0x08 /*Checksum Error*/</span></li>
    <li><span>IR_RECEIVER</span> <span>0x01 /*Receiver*/</span></li>
    <li><span>IR_SENDER</span> <span>0x02 /*Sender*/</span></li>
    <li><span>IR_UNDEFINED</span> <span>0x03 /*Undefined*/</span></li>
    <li><span>IR_DATA_RAW</span> <span>0x5a /*Sent as part of header*/</span></li>
    <li><span>IR_SUCCESS</span> <span>1 /*Success Notification*/</span></li>
    <li><span>IR_FAILURE</span> <span>0 /*Failure Notification*/</span></li>
    <li><span>IR_ARM_SEND_CORE_SIZE</span> <span>182 /*Words(728Bytes)*/</span></li>
    <li><span>IR_ARM_RECV_CORE_SIZE</span> <span>169 /*Words(676Bytes)*/</span></li>
    <li><span>IR_40kbps_RATE</span> <span>0x1A3 /*Cartridge ROM (4-2 Wait):40000bps*/</span></li>
    <li><span>IR_47kbps_RATE</span> <span>0x161 /*      Same    (3-1 Wait):47530bps*/</span></li>
    <li><span>IR_104kbps_RATE</span> <span>0x0A1 /*Internal RAM:104000bps*/</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">251</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbMemoryMap.h" />
  <h3>AgbMemoryMap.h</h3><ul>
    <li><span>BOOT_ROM</span> <span>0x00000000 /* Boot ROM*/</span></li>
    <li><span>BOOT_ROM_END</span> <span>(BOOT_ROM + 0x4000)</span></li>
    <li><span>EX_WRAM</span> <span>0x02000000 /* CPU External Work RAM*/</span></li>
    <li><span>EX_WRAM_END</span> <span>(EX_WRAM + 0x40000)</span></li>
    <li><span>CPU_WRAM</span> <span>0x03000000 /* CPU Internal Work RAM*/</span></li>
    <li><span>CPU_WRAM_END</span> <span>(CPU_WRAM + 0x8000)</span></li>
    <li><span>WRAM</span> <span>EX_WRAM /* Entire Work RAM*/</span></li>
    <li><span>WRAM_END</span> <span>CPU_WRAM_END</span></li>
    <li><span>SOUND_AREA_ADDR_BUF</span> <span>(CPU_WRAM_END - 0x10)/*Sound Driver Work Address*/</span></li>
    <li><span>INTR_CHECK_BUF</span> <span>(CPU_WRAM_END - 0x8)/* Interrupt Check*/</span></li>
    <li><span>SOFT_RESET_DIRECT_BUF</span> <span>(CPU_WRAM_END - 0x6)/* SoftReset() Specify Return to*/</span></li>
    <li><span>INTR_VECTOR_BUF</span> <span>(CPU_WRAM_END - 0x4)/* Interrupt Branch Address*/</span></li>
    <li><span>REG_BASE</span> <span>0x04000000 /* Registers*/</span></li>
    <li><span>REG_END</span> <span>(REG_BASE + 0x300)</span></li>
    <li><span>PLTT</span> <span>0x05000000 /* Palette RAM*/</span></li>
    <li><span>PLTT_END</span> <span>(PLTT + 0x400)</span></li>
    <li><span>BG_PLTT</span> <span>(PLTT + 0x0) /* BG Palette RAM*/</span></li>
    <li><span>BG_PLTT_END</span> <span>(PLTT + 0x200)</span></li>
    <li><span>OBJ_PLTT</span> <span>(PLTT + 0x200) /* OBJ Palette RAM*/</span></li>
    <li><span>OBJ_PLTT_END</span> <span>(PLTT + 0x400)</span></li>
    <li><span>VRAM</span> <span>0x06000000 /* VRAM*/</span></li>
    <li><span>VRAM_END</span> <span>(VRAM + 0x18000)</span></li>
    <li><span>BG_VRAM</span> <span>(VRAM + 0x0) /* BG Character/Screen RAM*/</span></li>
    <li><span>BG_BITMAP0_VRAM</span> <span>(VRAM + 0x0) /* BG Bitmap 0 RAM*/</span></li>
    <li><span>BG_BITMAP1_VRAM</span> <span>(VRAM + 0xa000) /* BG Bitmap 1 RAM*/</span></li>
    <li><span>OBJ_MODE0_VRAM</span> <span>(VRAM + 0x10000) /* OBJ Character RAM*/</span></li>
    <li><span>OBJ_MODE1_VRAM</span> <span>(VRAM + 0x10000)</span></li>
    <li><span>OBJ_MODE2_VRAM</span> <span>(VRAM + 0x10000)</span></li>
    <li><span>OBJ_MODE3_VRAM</span> <span>(VRAM + 0x14000)</span></li>
    <li><span>OBJ_MODE4_VRAM</span> <span>(VRAM + 0x14000)</span></li>
    <li><span>OBJ_MODE5_VRAM</span> <span>(VRAM + 0x14000)</span></li>
    <li><span>OBJ_VRAM_END</span> <span>(VRAM + 0x18000)</span></li>
    <li><span>OAM</span> <span>0x07000000 /* OAM*/</span></li>
    <li><span>OAM_END</span> <span>(OAM + 0x400)</span></li>
    <li><span>ROM_BANK0</span> <span>0x08000000 /* ROM Bank 0*/</span></li>
    <li><span>ROM_BANK0_END</span> <span>0x0a000000</span></li>
    <li><span>ROM_BANK1</span> <span>0x0a000000 /* ROM Bank 1*/</span></li>
    <li><span>ROM_BANK1_END</span> <span>0x0c000000</span></li>
    <li><span>ROM_BANK2</span> <span>0x0c000000 /* ROM Bank 2*/</span></li>
    <li><span>ROM_BANK2_END</span> <span>0x0e000000</span></li>
    <li><span>RAM_BANK</span> <span>0x0c000000 /* RAM Bank*/</span></li>
    <li><span>RAM_BANK_END</span> <span>0x10000000</span></li>
    <li><span>FLASH_1M</span> <span>0x09fe0000 /* 1M Flash Memory*/</span></li>
    <li><span>FLASH_1M_END</span> <span>0x0a000000</span></li>
    <li><span>BOOT_ROM_SIZE</span> <span>0x4000 /* Boot ROM*/</span></li>
    <li><span>EX_WRAM_SIZE</span> <span>0x40000 /* CPU External Work RAM*/</span></li>
    <li><span>CPU_WRAM_SIZE</span> <span>0x8000 /* CPU Internal Work RAM*/</span></li>
    <li><span>WRAM_SIZE</span> <span>0x48000 /* Entire Work RAM*/</span></li>
    <li><span>PLTT_SIZE</span> <span>(2*256*2) /* Palette RAM*/</span></li>
    <li><span>BG_PLTT_SIZE</span> <span>(2*256) /* BG Palette RAM*/</span></li>
    <li><span>OBJ_PLTT_SIZE</span> <span>(2*256) /* OBJ Palette RAM*/</span></li>
    <li><span>VRAM_SIZE</span> <span>0x18000 /* VRAM*/</span></li>
    <li><span>BG_MODE0_VRAM_SIZE</span> <span>0x10000 /* BG Character/Screen*/</span></li>
    <li><span>BG_MODE1_VRAM_SIZE</span> <span>0x10000</span></li>
    <li><span>BG_MODE2_VRAM_SIZE</span> <span>0x10000</span></li>
    <li><span>BG_MODE3_VRAM_SIZE</span> <span>0x14000 /* BG Bitmap*/</span></li>
    <li><span>BG_MODE4_VRAM_SIZE</span> <span>0x0a000</span></li>
    <li><span>BG_MODE5_VRAM_SIZE</span> <span>0x0a000</span></li>
    <li><span>OBJ_MODE0_VRAM_SIZE</span> <span>0x08000 /* OBJ Character*/</span></li>
    <li><span>OBJ_MODE1_VRAM_SIZE</span> <span>0x08000</span></li>
    <li><span>OBJ_MODE2_VRAM_SIZE</span> <span>0x08000</span></li>
    <li><span>OBJ_MODE3_VRAM_SIZE</span> <span>0x04000</span></li>
    <li><span>OBJ_MODE4_VRAM_SIZE</span> <span>0x04000</span></li>
    <li><span>OBJ_MODE5_VRAM_SIZE</span> <span>0x04000</span></li>
    <li><span>OAM_SIZE</span> <span>(8*128) /* OAM*/</span></li>
    <li><span>ROM_BANK_SIZE</span> <span>0x02000000 /* ROM Bank*/</span></li>
    <li><span>ROM_BANK0_SIZE</span> <span>0x02000000 /* ROM Bank 0*/</span></li>
    <li><span>ROM_BANK1_SIZE</span> <span>0x02000000 /* ROM Bank 1*/</span></li>
    <li><span>ROM_BANK2_SIZE</span> <span>0x02000000 /* ROM Bank 2*/</span></li>
    <li><span>RAM_BANK_SIZE</span> <span>0x02000000 /* RAM Bank*/</span></li>
    <li><span>FLASH_1M_SIZE</span> <span>0x20000 /* 1M Flash Memory*/</span></li>
    <li><span>REG_IME</span> <span>(REG_BASE + 0x208) /* Interrupt Master Enable*/</span></li>
    <li><span>REG_IE</span> <span>(REG_BASE + 0x200) /* Interrupt Enable*/</span></li>
    <li><span>REG_IF</span> <span>(REG_BASE + 0x202) /* Interrupt Request*/</span></li>
    <li><span>REG_WAITCNT</span> <span>(REG_BASE + 0x204) /* Game Pak Wait Control*/</span></li>
    <li><span>REG_DISPCNT</span> <span>(REG_BASE + 0x0) /* Display Control*/</span></li>
    <li><span>REG_STAT</span> <span>(REG_BASE + 0x4) /* Status*/</span></li>
    <li><span>REG_VCOUNT</span> <span>(REG_BASE + 0x6) /* V Counter*/</span></li>
    <li><span>REG_MOSAIC</span> <span>(REG_BASE + 0x4c) /* Mosaic Size*/</span></li>
    <li><span>REG_BLDCNT</span> <span>(REG_BASE + 0x50) /* Blend Mode Control*/</span></li>
    <li><span>REG_BLDALPHA</span> <span>(REG_BASE + 0x52) /* Semi-transparent Parameter*/</span></li>
    <li><span>REG_BLDY</span> <span>(REG_BASE + 0x54) /* Brightness Change Parameter*/</span></li>
    <li><span>REG_WINCNT</span> <span>(REG_BASE + 0x40) /* Window Control*/</span></li>
    <li><span>REG_WIN0H</span> <span>(REG_BASE + 0x40) /* Window 0 Horizontal Area*/</span></li>
    <li><span>REG_WIN1H</span> <span>(REG_BASE + 0x42) /* Window 1 Horizontal Area*/</span></li>
    <li><span>REG_WIN0V</span> <span>(REG_BASE + 0x44) /* Window 0 Vertical Area*/</span></li>
    <li><span>REG_WIN1V</span> <span>(REG_BASE + 0x46) /* WIndow 1 Vertical Area*/</span></li>
    <li><span>REG_WININ</span> <span>(REG_BASE + 0x48) /* Internal Window Control*/</span></li>
    <li><span>REG_WIN0</span> <span>(REG_BASE + 0x48) /* Window 0 Control*/</span></li>
    <li><span>REG_WIN1</span> <span>(REG_BASE + 0x49) /* Window 1 Control*/</span></li>
    <li><span>REG_WINOUT</span> <span>(REG_BASE + 0x4a) /* External Window Control*/</span></li>
    <li><span>REG_OBJWIN</span> <span>(REG_BASE + 0x4b) /* OBJ Window Control*/</span></li>
    <li><span>REG_BGCNT</span> <span>(REG_BASE + 0x8) /* BG Control*/</span></li>
    <li><span>REG_BG0CNT</span> <span>(REG_BASE + 0x8) /* BG 0 Control*/</span></li>
    <li><span>REG_BG1CNT</span> <span>(REG_BASE + 0xa) /* BG 1 Control*/</span></li>
    <li><span>REG_BG2CNT</span> <span>(REG_BASE + 0xc) /* BG 2 Control*/</span></li>
    <li><span>REG_BG3CNT</span> <span>(REG_BASE + 0xe) /* BG 3 Control*/</span></li>
    <li><span>REG_BGOFS</span> <span>(REG_BASE + 0x10) /* BG Offset*/</span></li>
    <li><span>REG_BG0HOFS</span> <span>(REG_BASE + 0x10) /* BG 0 H Offset*/</span></li>
    <li><span>REG_BG0VOFS</span> <span>(REG_BASE + 0x12) /* BG 0 V Offset*/</span></li>
    <li><span>REG_BG1HOFS</span> <span>(REG_BASE + 0x14) /* BG 1 H Offset*/</span></li>
    <li><span>REG_BG1VOFS</span> <span>(REG_BASE + 0x16) /* BG 1 V Offset*/</span></li>
    <li><span>REG_BG2HOFS</span> <span>(REG_BASE + 0x18) /* BG 2 H Offset*/</span></li>
    <li><span>REG_BG2VOFS</span> <span>(REG_BASE + 0x1a) /* BG 2 V Offset*/</span></li>
    <li><span>REG_BG3HOFS</span> <span>(REG_BASE + 0x1c) /* BG 3 H Offset*/</span></li>
    <li><span>REG_BG3VOFS</span> <span>(REG_BASE + 0x1e) /* BG 3 V Offset*/</span></li>
    <li><span>REG_BG2AFFINE</span> <span>(REG_BASE + 0x20) /* BG 2 Affin Transformation Parameters*/</span></li>
    <li><span>REG_BG2PA</span> <span>(REG_BASE + 0x20) /* BG 2 Line Direction X Coordinate Difference*/</span></li>
    <li><span>REG_BG2PB</span> <span>(REG_BASE + 0x22) /* BG 3 Vertical Direction X Coordinate Difference*/</span></li>
    <li><span>REG_BG2PC</span> <span>(REG_BASE + 0x24) /* BG 2 Line Direction Y coordinate Difference*/</span></li>
    <li><span>REG_BG2PD</span> <span>(REG_BASE + 0x26) /* BG 2 Vertical Direction Y Coordinate Difference*/</span></li>
    <li><span>REG_BG2X</span> <span>(REG_BASE + 0x28) /* BG 2 Start X Coordinate*/</span></li>
    <li><span>REG_BG2X_L</span> <span>(REG_BASE + 0x28)</span></li>
    <li><span>REG_BG2X_H</span> <span>(REG_BASE + 0x2a)</span></li>
    <li><span>REG_BG2Y</span> <span>(REG_BASE + 0x2c) /* BG 2 Start Y Coordinate*/</span></li>
    <li><span>REG_BG2Y_L</span> <span>(REG_BASE + 0x2c)</span></li>
    <li><span>REG_BG2Y_H</span> <span>(REG_BASE + 0x2e)</span></li>
    <li><span>REG_BG3AFFINE</span> <span>(REG_BASE + 0x30) /* BG 3 Affin Transformation Parameters*/</span></li>
    <li><span>REG_BG3PA</span> <span>(REG_BASE + 0x30) /* BG 3 Line Direction X Coordinate Difference*/</span></li>
    <li><span>REG_BG3PB</span> <span>(REG_BASE + 0x32) /* BG 3 Vertical Direction X Coordinate Difference*/</span></li>
    <li><span>REG_BG3PC</span> <span>(REG_BASE + 0x34) /* BG 3 Line Direction Y Coordinate Difference*/</span></li>
    <li><span>REG_BG3PD</span> <span>(REG_BASE + 0x36) /* BG 3 Vertical Direction Y Coordinate Difference*/</span></li>
    <li><span>REG_BG3X</span> <span>(REG_BASE + 0x38) /* BG 3 Start X Coordinate*/</span></li>
    <li><span>REG_BG3X_L</span> <span>(REG_BASE + 0x38)</span></li>
    <li><span>REG_BG3X_H</span> <span>(REG_BASE + 0x3a)</span></li>
    <li><span>REG_BG3Y</span> <span>(REG_BASE + 0x3c) /* BG 3 Start Y Coordinate*/</span></li>
    <li><span>REG_BG3Y_L</span> <span>(REG_BASE + 0x3c)</span></li>
    <li><span>REG_BG3Y_H</span> <span>(REG_BASE + 0x3e)</span></li>
    <li><span>REG_SOUNDCNT</span> <span>(REG_BASE + 0x80) /* Sound Control*/</span></li>
    <li><span>REG_SOUNDCNT_L</span> <span>(REG_BASE + 0x80)</span></li>
    <li><span>REG_SOUNDCNT_H</span> <span>(REG_BASE + 0x82)</span></li>
    <li><span>REG_SOUNDCNT_X</span> <span>(REG_BASE + 0x84)</span></li>
    <li><span>REG_SOUNDBIAS</span> <span>(REG_BASE + 0x88) /* Sound BIAS*/</span></li>
    <li><span>REG_SOUND1CNT</span> <span>(REG_BASE + 0x60) /* Sound 1 Control*/</span></li>
    <li><span>REG_SOUND1CNT_L</span> <span>(REG_BASE + 0x60)</span></li>
    <li><span>REG_SOUND1CNT_H</span> <span>(REG_BASE + 0x62)</span></li>
    <li><span>REG_SOUND1CNT_X</span> <span>(REG_BASE + 0x64)</span></li>
    <li><span>REG_SOUND2CNT</span> <span>(REG_BASE + 0x68) /* Sound 2 Control*/</span></li>
    <li><span>REG_SOUND2CNT_L</span> <span>(REG_BASE + 0x68)</span></li>
    <li><span>REG_SOUND2CNT_H</span> <span>(REG_BASE + 0x6c)</span></li>
    <li><span>REG_SOUND3CNT</span> <span>(REG_BASE + 0x70) /* Sound 3 Control*/</span></li>
    <li><span>REG_SOUND3CNT_L</span> <span>(REG_BASE + 0x70)</span></li>
    <li><span>REG_SOUND3CNT_H</span> <span>(REG_BASE + 0x72)</span></li>
    <li><span>REG_SOUND3CNT_X</span> <span>(REG_BASE + 0x74)</span></li>
    <li><span>REG_SOUND4CNT</span> <span>(REG_BASE + 0x78) /* Sound 4 Control*/</span></li>
    <li><span>REG_SOUND4CNT_L</span> <span>(REG_BASE + 0x78)</span></li>
    <li><span>REG_SOUND4CNT_H</span> <span>(REG_BASE + 0x7c)</span></li>
    <li><span>REG_WAVE_RAM</span> <span>(REG_BASE + 0x90) /* Sound 3 Waveform RAM*/</span></li>
    <li><span>REG_WAVE_RAM0</span> <span>(REG_BASE + 0x90)</span></li>
    <li><span>REG_WAVE_RAM0_L</span> <span>(REG_BASE + 0x90)</span></li>
    <li><span>REG_WAVE_RAM0_H</span> <span>(REG_BASE + 0x92)</span></li>
    <li><span>REG_WAVE_RAM1</span> <span>(REG_BASE + 0x94)</span></li>
    <li><span>REG_WAVE_RAM1_L</span> <span>(REG_BASE + 0x94)</span></li>
    <li><span>REG_WAVE_RAM1_H</span> <span>(REG_BASE + 0x96)</span></li>
    <li><span>REG_WAVE_RAM2</span> <span>(REG_BASE + 0x98)</span></li>
    <li><span>REG_WAVE_RAM2_L</span> <span>(REG_BASE + 0x98)</span></li>
    <li><span>REG_WAVE_RAM2_H</span> <span>(REG_BASE + 0x9a)</span></li>
    <li><span>REG_WAVE_RAM3</span> <span>(REG_BASE + 0x9c)</span></li>
    <li><span>REG_WAVE_RAM3_L</span> <span>(REG_BASE + 0x9c)</span></li>
    <li><span>REG_WAVE_RAM3_H</span> <span>(REG_BASE + 0x9e)</span></li>
    <li><span>REG_FIFO</span> <span>(REG_BASE + 0xa0) /* Sound FIFO*/</span></li>
    <li><span>REG_FIFO_A</span> <span>(REG_BASE + 0xa0)</span></li>
    <li><span>REG_FIFO_A_L</span> <span>(REG_BASE + 0xa0)</span></li>
    <li><span>REG_FIFO_A_H</span> <span>(REG_BASE + 0xa2)</span></li>
    <li><span>REG_FIFO_B</span> <span>(REG_BASE + 0xa4)</span></li>
    <li><span>REG_FIFO_B_L</span> <span>(REG_BASE + 0xa4)</span></li>
    <li><span>REG_FIFO_B_H</span> <span>(REG_BASE + 0xa6)</span></li>
    <li><span>REG_DMA0</span> <span>(REG_BASE + 0xb0) /* DMA 0*/</span></li>
    <li><span>REG_DMA0SAD</span> <span>(REG_BASE + 0xb0) /* (Internal Memory -> */</span></li>
    <li><span>REG_DMA0SAD_L</span> <span>(REG_BASE + 0xb0)</span></li>
    <li><span>REG_DMA0SAD_H</span> <span>(REG_BASE + 0xb2)</span></li>
    <li><span>REG_DMA0DAD</span> <span>(REG_BASE + 0xb4)</span></li>
    <li><span>REG_DMA0DAD_L</span> <span>(REG_BASE + 0xb4)</span></li>
    <li><span>REG_DMA0DAD_H</span> <span>(REG_BASE + 0xb6)</span></li>
    <li><span>REG_DMA0CNT</span> <span>(REG_BASE + 0xb8)</span></li>
    <li><span>REG_DMA0CNT_L</span> <span>(REG_BASE + 0xb8)</span></li>
    <li><span>REG_DMA0CNT_H</span> <span>(REG_BASE + 0xba)</span></li>
    <li><span>REG_DMA1</span> <span>(REG_BASE + 0xbc) /* DMA 1*/</span></li>
    <li><span>REG_DMA1SAD</span> <span>(REG_BASE + 0xbc) /* (Internal Memory -> Sound */</span></li>
    <li><span>REG_DMA1SAD_L</span> <span>(REG_BASE + 0xbc)</span></li>
    <li><span>REG_DMA1SAD_H</span> <span>(REG_BASE + 0xbe)</span></li>
    <li><span>REG_DMA1DAD</span> <span>(REG_BASE + 0xc0)</span></li>
    <li><span>REG_DMA1DAD_L</span> <span>(REG_BASE + 0xc0)</span></li>
    <li><span>REG_DMA1DAD_H</span> <span>(REG_BASE + 0xc2)</span></li>
    <li><span>REG_DMA1CNT</span> <span>(REG_BASE + 0xc4)</span></li>
    <li><span>REG_DMA1CNT_L</span> <span>(REG_BASE + 0xc4)</span></li>
    <li><span>REG_DMA1CNT_H</span> <span>(REG_BASE + 0xc6)</span></li>
    <li><span>REG_DMA2</span> <span>(REG_BASE + 0xc8) /* DMA 2*/</span></li>
    <li><span>REG_DMA2SAD</span> <span>(REG_BASE + 0xc8) /* (Internal Memory -> Sound */</span></li>
    <li><span>REG_DMA2SAD_L</span> <span>(REG_BASE + 0xc8)</span></li>
    <li><span>REG_DMA2SAD_H</span> <span>(REG_BASE + 0xca)</span></li>
    <li><span>REG_DMA2DAD</span> <span>(REG_BASE + 0xcc)</span></li>
    <li><span>REG_DMA2DAD_L</span> <span>(REG_BASE + 0xcc)</span></li>
    <li><span>REG_DMA2DAD_H</span> <span>(REG_BASE + 0xce)</span></li>
    <li><span>REG_DMA2CNT</span> <span>(REG_BASE + 0xd0)</span></li>
    <li><span>REG_DMA2CNT_L</span> <span>(REG_BASE + 0xd0)</span></li>
    <li><span>REG_DMA2CNT_H</span> <span>(REG_BASE + 0xd2)</span></li>
    <li><span>REG_DMA3</span> <span>(REG_BASE + 0xd4) /* DMA 3*/</span></li>
    <li><span>REG_DMA3SAD</span> <span>(REG_BASE + 0xd4) /* (Game Pak/Internal Memory <--> */</span></li>
    <li><span>REG_DMA3SAD_L</span> <span>(REG_BASE + 0xd4)</span></li>
    <li><span>REG_DMA3SAD_H</span> <span>(REG_BASE + 0xd6)</span></li>
    <li><span>REG_DMA3DAD</span> <span>(REG_BASE + 0xd8)</span></li>
    <li><span>REG_DMA3DAD_L</span> <span>(REG_BASE + 0xd8)</span></li>
    <li><span>REG_DMA3DAD_H</span> <span>(REG_BASE + 0xda)</span></li>
    <li><span>REG_DMA3CNT</span> <span>(REG_BASE + 0xdc)</span></li>
    <li><span>REG_DMA3CNT_L</span> <span>(REG_BASE + 0xdc)</span></li>
    <li><span>REG_DMA3CNT_H</span> <span>(REG_BASE + 0xde)</span></li>
    <li><span>REG_TM0CNT</span> <span>(REG_BASE + 0x100) /* Timer 0*/</span></li>
    <li><span>REG_TM0CNT_L</span> <span>(REG_BASE + 0x100)</span></li>
    <li><span>REG_TM0CNT_H</span> <span>(REG_BASE + 0x102)</span></li>
    <li><span>REG_TM1CNT</span> <span>(REG_BASE + 0x104) /* Timer 1*/</span></li>
    <li><span>REG_TM1CNT_L</span> <span>(REG_BASE + 0x104)</span></li>
    <li><span>REG_TM1CNT_H</span> <span>(REG_BASE + 0x106)</span></li>
    <li><span>REG_TM2CNT</span> <span>(REG_BASE + 0x108) /* Timer 2*/</span></li>
    <li><span>REG_TM2CNT_L</span> <span>(REG_BASE + 0x108)</span></li>
    <li><span>REG_TM2CNT_H</span> <span>(REG_BASE + 0x10a)</span></li>
    <li><span>REG_TM3CNT</span> <span>(REG_BASE + 0x10c) /* Timer 3*/</span></li>
    <li><span>REG_TM3CNT_L</span> <span>(REG_BASE + 0x10c)</span></li>
    <li><span>REG_TM3CNT_H</span> <span>(REG_BASE + 0x10e)</span></li>
    <li><span>REG_RCNT</span> <span>(REG_BASE + 0x134) /* General Input/Output Control*/</span></li>
    <li><span>REG_SIOCNT</span> <span>(REG_BASE + 0x128) /* Serial Communication Control*/</span></li>
    <li><span>REG_SIODATA8</span> <span>(REG_BASE + 0x12a) /* 8bit Serial Communication Data*/</span></li>
    <li><span>REG_SIODATA32</span> <span>(REG_BASE + 0x120) /* 32bit Serial Communication Data*/</span></li>
    <li><span>REG_SIOMLT_SEND</span> <span>(REG_BASE + 0x12a) /* Multi-play SIO Send Data*/</span></li>
    <li><span>REG_SIOMLT_RECV</span> <span>(REG_BASE + 0x120) /* Multi-play SIO Receive Data*/</span></li>
    <li><span>REG_SIOMULTI0</span> <span>(REG_BASE + 0x120)</span></li>
    <li><span>REG_SIOMULTI1</span> <span>(REG_BASE + 0x122)</span></li>
    <li><span>REG_SIOMULTI2</span> <span>(REG_BASE + 0x124)</span></li>
    <li><span>REG_SIOMULTI3</span> <span>(REG_BASE + 0x126)</span></li>
    <li><span>REG_JOYCNT</span> <span>(REG_BASE + 0x140) /* JOY Bus Communication Control*/</span></li>
    <li><span>REG_JOYSTAT</span> <span>(REG_BASE + 0x158) /* JOY Bus Status*/</span></li>
    <li><span>REG_JOY_RECV</span> <span>(REG_BASE + 0x150) /* JOY Bus Receive Data*/</span></li>
    <li><span>REG_JOY_RECV_L</span> <span>(REG_BASE + 0x150)</span></li>
    <li><span>REG_JOY_RECV_H</span> <span>(REG_BASE + 0x152)</span></li>
    <li><span>REG_JOY_TRANS</span> <span>(REG_BASE + 0x154) /* JOY Bus Send Data*/</span></li>
    <li><span>REG_JOY_TRANS_L</span> <span>(REG_BASE + 0x154)</span></li>
    <li><span>REG_JOY_TRANS_H</span> <span>(REG_BASE + 0x156)</span></li>
    <li><span>REG_KEYINPUT</span> <span>(REG_BASE + 0x130) /* Key Input*/</span></li>
    <li><span>REG_KEYCNT</span> <span>(REG_BASE + 0x132) /* Key Control*/</span></li>
    <li><span>OFFSET_REG_IME</span> <span>0x208 /* Interrupt Master Enable*/</span></li>
    <li><span>OFFSET_REG_IE</span> <span>0x200 /* Interrupt Enable*/</span></li>
    <li><span>OFFSET_REG_IF</span> <span>0x202 /* Interrupt Request*/</span></li>
    <li><span>OFFSET_REG_WAITCNT</span> <span>0x204 /* Game Pak Wait Control*/</span></li>
    <li><span>OFFSET_REG_DISPCNT</span> <span>0x0 /* Display Control*/</span></li>
    <li><span>OFFSET_REG_STAT</span> <span>0x4 /* Status*/</span></li>
    <li><span>OFFSET_REG_VCOUNT</span> <span>0x6 /* V Counter*/</span></li>
    <li><span>OFFSET_REG_MOSAIC</span> <span>0x4c /* Mosaic Size*/</span></li>
    <li><span>OFFSET_REG_BLDCNT</span> <span>0x50 /* Blend Mode Control*/</span></li>
    <li><span>OFFSET_REG_BLDALPHA</span> <span>0x52 /* Semi-trams[aremt Parameter*/</span></li>
    <li><span>OFFSET_REG_BLDY</span> <span>0x54 /* Brightness Change Parameter*/</span></li>
    <li><span>OFFSET_REG_WINCNT</span> <span>0x40 /* Window Control*/</span></li>
    <li><span>OFFSET_REG_WIN0H</span> <span>0x40 /* Window 0 Horizontal Area*/</span></li>
    <li><span>OFFSET_REG_WIN1H</span> <span>0x42 /* Window 1 Horizontal Area*/</span></li>
    <li><span>OFFSET_REG_WIN0V</span> <span>0x44 /* Window 0 Vertical Area*/</span></li>
    <li><span>OFFSET_REG_WIN1V</span> <span>0x46 /* Window 1 Vertical Area*/</span></li>
    <li><span>OFFSET_REG_WININ</span> <span>0x48 /* Internal Window Control*/</span></li>
    <li><span>OFFSET_REG_WIN0</span> <span>0x48 /* Window 0 Control*/</span></li>
    <li><span>OFFSET_REG_WIN1</span> <span>0x49 /* Window 1 Control*/</span></li>
    <li><span>OFFSET_REG_WINOUT</span> <span>0x4a /* External Window Control*/</span></li>
    <li><span>OFFSET_REG_OBJWIN</span> <span>0x4b /* OBJ Window Control*/</span></li>
    <li><span>OFFSET_REG_BGCNT</span> <span>0x8 /* BG Control*/</span></li>
    <li><span>OFFSET_REG_BG0CNT</span> <span>0x8 /* BG 0 Control*/</span></li>
    <li><span>OFFSET_REG_BG1CNT</span> <span>0xa /* BG 1 Control*/</span></li>
    <li><span>OFFSET_REG_BG2CNT</span> <span>0xc /* BG 2 Control*/</span></li>
    <li><span>OFFSET_REG_BG3CNT</span> <span>0xe /* BG 3 Control*/</span></li>
    <li><span>OFFSET_REG_BGOFS</span> <span>0x10 /* BG Offset*/</span></li>
    <li><span>OFFSET_REG_BG0HOFS</span> <span>0x10 /* BG 0 H Offset*/</span></li>
    <li><span>OFFSET_REG_BG0VOFS</span> <span>0x12 /* BG 0 V Offset*/</span></li>
    <li><span>OFFSET_REG_BG1HOFS</span> <span>0x14 /* BG 1 H Offset*/</span></li>
    <li><span>OFFSET_REG_BG1VOFS</span> <span>0x16 /* BG 1 V Offset*/</span></li>
    <li><span>OFFSET_REG_BG2HOFS</span> <span>0x18 /* BG 2 H Offset*/</span></li>
    <li><span>OFFSET_REG_BG2VOFS</span> <span>0x1a /* BG 2 V Offset*/</span></li>
    <li><span>OFFSET_REG_BG3HOFS</span> <span>0x1c /* BG 3 H Offset*/</span></li>
    <li><span>OFFSET_REG_BG3VOFS</span> <span>0x1e /* BG 3 V Offset*/</span></li>
    <li><span>OFFSET_REG_BG2AFFINE</span> <span>0x20 /* BG 2 Affin Transformation Parameters*/</span></li>
    <li><span>OFFSET_REG_BG2PA</span> <span>0x20 /* BG 2 Line Direction X Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG2PB</span> <span>0x22 /* BG 2 Vertical Direction X Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG2PC</span> <span>0x24 /* BG 2 Line Direction Y Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG2PD</span> <span>0x26 /* BG 2 Vertical Direction Y Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG2X</span> <span>0x28 /* BG 2 Start X Coordinate*/</span></li>
    <li><span>OFFSET_REG_BG2X_L</span> <span>0x28</span></li>
    <li><span>OFFSET_REG_BG2X_H</span> <span>0x2a</span></li>
    <li><span>OFFSET_REG_BG2Y</span> <span>0x2c /* BG 2 Start Y Coordinate*/</span></li>
    <li><span>OFFSET_REG_BG2Y_L</span> <span>0x2c</span></li>
    <li><span>OFFSET_REG_BG2Y_H</span> <span>0x2e</span></li>
    <li><span>OFFSET_REG_BG3AFFINE</span> <span>0x30 /* BG 3 Affin Transformation Parameters*/</span></li>
    <li><span>OFFSET_REG_BG3PA</span> <span>0x30 /* BG 3 Line Direction X Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG3PB</span> <span>0x32 /* BG 3 Vertical Direction X Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG3PC</span> <span>0x34 /* BG 3 Line Direction Y Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG3PD</span> <span>0x36 /* BG 3 Vertical Direction Y Coordinate Difference*/</span></li>
    <li><span>OFFSET_REG_BG3X</span> <span>0x38 /* BG 3 Start X Coordinate*/</span></li>
    <li><span>OFFSET_REG_BG3X_L</span> <span>0x38</span></li>
    <li><span>OFFSET_REG_BG3X_H</span> <span>0x3a</span></li>
    <li><span>OFFSET_REG_BG3Y</span> <span>0x3c /* BG 3 Start Y Coordinate*/</span></li>
    <li><span>OFFSET_REG_BG3Y_L</span> <span>0x3c</span></li>
    <li><span>OFFSET_REG_BG3Y_H</span> <span>0x3e</span></li>
    <li><span>OFFSET_REG_SOUNDCNT</span> <span>0x80 /* Sound Control*/</span></li>
    <li><span>OFFSET_REG_SOUNDCNT_L</span> <span>0x80</span></li>
    <li><span>OFFSET_REG_SOUNDCNT_H</span> <span>0x82</span></li>
    <li><span>OFFSET_REG_SOUNDCNT_X</span> <span>0x84</span></li>
    <li><span>OFFSET_REG_SOUNDBIAS</span> <span>0x88 /* Sound BIAS*/</span></li>
    <li><span>OFFSET_REG_SOUND1CNT</span> <span>0x60 /* Sound 1 Control*/</span></li>
    <li><span>OFFSET_REG_SOUND1CNT_L</span> <span>0x60</span></li>
    <li><span>OFFSET_REG_SOUND1CNT_H</span> <span>0x62</span></li>
    <li><span>OFFSET_REG_SOUND1CNT_X</span> <span>0x64</span></li>
    <li><span>OFFSET_REG_SOUND2CNT</span> <span>0x68 /* Sound 2 Control*/</span></li>
    <li><span>OFFSET_REG_SOUND2CNT_L</span> <span>0x68</span></li>
    <li><span>OFFSET_REG_SOUND2CNT_H</span> <span>0x6c</span></li>
    <li><span>OFFSET_REG_SOUND3CNT</span> <span>0x70 /* Sound 3 Control*/</span></li>
    <li><span>OFFSET_REG_SOUND3CNT_L</span> <span>0x70</span></li>
    <li><span>OFFSET_REG_SOUND3CNT_H</span> <span>0x72</span></li>
    <li><span>OFFSET_REG_SOUND3CNT_X</span> <span>0x74</span></li>
    <li><span>OFFSET_REG_SOUND4CNT</span> <span>0x78 /* Sound 4 Control*/</span></li>
    <li><span>OFFSET_REG_SOUND4CNT_L</span> <span>0x78</span></li>
    <li><span>OFFSET_REG_SOUND4CNT_H</span> <span>0x7c</span></li>
    <li><span>OFFSET_REG_WAVE_RAM</span> <span>0x90 /* Sound 3 Waveform RAM*/</span></li>
    <li><span>OFFSET_REG_WAVE_RAM0</span> <span>0x90</span></li>
    <li><span>OFFSET_REG_WAVE_RAM0_L</span> <span>0x90</span></li>
    <li><span>OFFSET_REG_WAVE_RAM0_H</span> <span>0x92</span></li>
    <li><span>OFFSET_REG_WAVE_RAM1</span> <span>0x94</span></li>
    <li><span>OFFSET_REG_WAVE_RAM1_L</span> <span>0x94</span></li>
    <li><span>OFFSET_REG_WAVE_RAM1_H</span> <span>0x96</span></li>
    <li><span>OFFSET_REG_WAVE_RAM2</span> <span>0x98</span></li>
    <li><span>OFFSET_REG_WAVE_RAM2_L</span> <span>0x98</span></li>
    <li><span>OFFSET_REG_WAVE_RAM2_H</span> <span>0x9a</span></li>
    <li><span>OFFSET_REG_WAVE_RAM3</span> <span>0x9c</span></li>
    <li><span>OFFSET_REG_WAVE_RAM3_L</span> <span>0x9c</span></li>
    <li><span>OFFSET_REG_WAVE_RAM3_H</span> <span>0x9e</span></li>
    <li><span>OFFSET_REG_FIFO</span> <span>0xa0 /* Sound FIFO*/</span></li>
    <li><span>OFFSET_REG_FIFO_A</span> <span>0xa0</span></li>
    <li><span>OFFSET_REG_FIFO_A_L</span> <span>0xa0</span></li>
    <li><span>OFFSET_REG_FIFO_A_H</span> <span>0xa2</span></li>
    <li><span>OFFSET_REG_FIFO_B</span> <span>0xa4</span></li>
    <li><span>OFFSET_REG_FIFO_B_L</span> <span>0xa4</span></li>
    <li><span>OFFSET_REG_FIFO_B_H</span> <span>0xa6</span></li>
    <li><span>OFFSET_REG_DMA0</span> <span>0xb0 /* DMA 0*/</span></li>
    <li><span>OFFSET_REG_DMA0SAD</span> <span>0xb0 /* (Internal Memory -> Internal */</span></li>
    <li><span>OFFSET_REG_DMA0SAD_L</span> <span>0xb0</span></li>
    <li><span>OFFSET_REG_DMA0SAD_H</span> <span>0xb2</span></li>
    <li><span>OFFSET_REG_DMA0DAD</span> <span>0xb4</span></li>
    <li><span>OFFSET_REG_DMA0DAD_L</span> <span>0xb4</span></li>
    <li><span>OFFSET_REG_DMA0DAD_H</span> <span>0xb6</span></li>
    <li><span>OFFSET_REG_DMA0CNT</span> <span>0xb8</span></li>
    <li><span>OFFSET_REG_DMA0CNT_L</span> <span>0xb8</span></li>
    <li><span>OFFSET_REG_DMA0CNT_H</span> <span>0xba</span></li>
    <li><span>OFFSET_REG_DMA1</span> <span>0xbc /* DMA 1*/</span></li>
    <li><span>OFFSET_REG_DMA1SAD</span> <span>0xbc /* (Internal Memory -> Sound */</span></li>
    <li><span>OFFSET_REG_DMA1SAD_L</span> <span>0xbc</span></li>
    <li><span>OFFSET_REG_DMA1SAD_H</span> <span>0xbe</span></li>
    <li><span>OFFSET_REG_DMA1DAD</span> <span>0xc0</span></li>
    <li><span>OFFSET_REG_DMA1DAD_L</span> <span>0xc0</span></li>
    <li><span>OFFSET_REG_DMA1DAD_H</span> <span>0xc2</span></li>
    <li><span>OFFSET_REG_DMA1CNT</span> <span>0xc4</span></li>
    <li><span>OFFSET_REG_DMA1CNT_L</span> <span>0xc4</span></li>
    <li><span>OFFSET_REG_DMA1CNT_H</span> <span>0xc6</span></li>
    <li><span>OFFSET_REG_DMA2</span> <span>0xc8 /* DMA 2*/</span></li>
    <li><span>OFFSET_REG_DMA2SAD</span> <span>0xc8 /* (Internal Memory -> Sound */</span></li>
    <li><span>OFFSET_REG_DMA2SAD_L</span> <span>0xc8</span></li>
    <li><span>OFFSET_REG_DMA2SAD_H</span> <span>0xca</span></li>
    <li><span>OFFSET_REG_DMA2DAD</span> <span>0xcc</span></li>
    <li><span>OFFSET_REG_DMA2DAD_L</span> <span>0xcc</span></li>
    <li><span>OFFSET_REG_DMA2DAD_H</span> <span>0xce</span></li>
    <li><span>OFFSET_REG_DMA2CNT</span> <span>0xd0</span></li>
    <li><span>OFFSET_REG_DMA2CNT_L</span> <span>0xd0</span></li>
    <li><span>OFFSET_REG_DMA2CNT_H</span> <span>0xd2</span></li>
    <li><span>OFFSET_REG_DMA3</span> <span>0xd4 /* DMA 3*/</span></li>
    <li><span>OFFSET_REG_DMA3SAD</span> <span>0xd4 /* (Game Pak/Internal Memory <--> */</span></li>
    <li><span>OFFSET_REG_DMA3SAD_L</span> <span>0xd4</span></li>
    <li><span>OFFSET_REG_DMA3SAD_H</span> <span>0xd6</span></li>
    <li><span>OFFSET_REG_DMA3DAD</span> <span>0xd8</span></li>
    <li><span>OFFSET_REG_DMA3DAD_L</span> <span>0xd8</span></li>
    <li><span>OFFSET_REG_DMA3DAD_H</span> <span>0xda</span></li>
    <li><span>OFFSET_REG_DMA3CNT</span> <span>0xdc</span></li>
    <li><span>OFFSET_REG_DMA3CNT_L</span> <span>0xdc</span></li>
    <li><span>OFFSET_REG_DMA3CNT_H</span> <span>0xde</span></li>
    <li><span>OFFSET_REG_TM0CNT</span> <span>0x100 /* Timer 0*/</span></li>
    <li><span>OFFSET_REG_TM0CNT_L</span> <span>0x100</span></li>
    <li><span>OFFSET_REG_TM0CNT_H</span> <span>0x102</span></li>
    <li><span>OFFSET_REG_TM1CNT</span> <span>0x104 /* Timer 1*/</span></li>
    <li><span>OFFSET_REG_TM1CNT_L</span> <span>0x104</span></li>
    <li><span>OFFSET_REG_TM1CNT_H</span> <span>0x106</span></li>
    <li><span>OFFSET_REG_TM2CNT</span> <span>0x108 /* Timer 2*/</span></li>
    <li><span>OFFSET_REG_TM2CNT_L</span> <span>0x108</span></li>
    <li><span>OFFSET_REG_TM2CNT_H</span> <span>0x10a</span></li>
    <li><span>OFFSET_REG_TM3CNT</span> <span>0x10c /* Timer 3*/</span></li>
    <li><span>OFFSET_REG_TM3CNT_L</span> <span>0x10c</span></li>
    <li><span>OFFSET_REG_TM3CNT_H</span> <span>0x10e</span></li>
    <li><span>OFFSET_REG_RCNT</span> <span>0x134 /* General Input/Output Control*/</span></li>
    <li><span>OFFSET_REG_SIOCNT</span> <span>0x128 /* Serial Communication Control*/</span></li>
    <li><span>OFFSET_REG_SIODATA8</span> <span>0x12a /* 8 bit Serial Communication Data*/</span></li>
    <li><span>OFFSET_REG_SIODATA32</span> <span>0x120 /* 32 bit Serial Communication Data*/</span></li>
    <li><span>OFFSET_REG_SIOMLT_SEND</span> <span>0x12a /* Multi-play SIO Send Data*/</span></li>
    <li><span>OFFSET_REG_SIOMLT_RECV</span> <span>0x120 /* Multi-play SIO Receive Data*/</span></li>
    <li><span>OFFSET_REG_SIOMULTI0</span> <span>0x120</span></li>
    <li><span>OFFSET_REG_SIOMULTI1</span> <span>0x122</span></li>
    <li><span>OFFSET_REG_SIOMULTI2</span> <span>0x124</span></li>
    <li><span>OFFSET_REG_SIOMULTI3</span> <span>0x126</span></li>
    <li><span>OFFSET_REG_JOYCNT</span> <span>0x140 /* JOY Bus Communication Control*/</span></li>
    <li><span>OFFSET_REG_JOYSTAT</span> <span>0x158 /* JOY Bus Status*/</span></li>
    <li><span>OFFSET_REG_JOY_RECV</span> <span>0x150 /* JOY Bus Receive Data*/</span></li>
    <li><span>OFFSET_REG_JOY_RECV_L</span> <span>0x150</span></li>
    <li><span>OFFSET_REG_JOY_RECV_H</span> <span>0x152</span></li>
    <li><span>OFFSET_REG_JOY_TRANS</span> <span>0x154 /* JOY Bus Send Data*/</span></li>
    <li><span>OFFSET_REG_JOY_TRANS_L</span> <span>0x154</span></li>
    <li><span>OFFSET_REG_JOY_TRANS_H</span> <span>0x156</span></li>
    <li><span>OFFSET_REG_KEYINPUT</span> <span>0x130 /* Key Input*/</span></li>
    <li><span>OFFSET_REG_KEYCNT</span> <span>0x132 /* Key Control*/</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">509</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbMultiBoot.h" />
  <h3>AgbMultiBoot.h</h3><ul>
    <li><span>MULTIBOOT_NCHILD</span> <span>3 /* Maximum number of slaves*/</span></li>
    <li><span>MULTIBOOT_HEADER_SIZE</span> <span>0xc0 /* Header size*/</span></li>
    <li><span>MULTIBOOT_SEND_SIZE_MIN</span> <span>0x100 /* Minimum transmission size*/</span></li>
    <li><span>MULTIBOOT_SEND_SIZE_MAX</span> <span>0x40000 /* Maximum transmission size*/</span></li>
    <li><span>MULTIBOOT_ERROR_04</span> <span>0x04</span></li>
    <li><span>MULTIBOOT_ERROR_08</span> <span>0x08</span></li>
    <li><span>MULTIBOOT_ERROR_0c</span> <span>0x0c</span></li>
    <li><span>MULTIBOOT_ERROR_40</span> <span>0x40</span></li>
    <li><span>MULTIBOOT_ERROR_44</span> <span>0x44</span></li>
    <li><span>MULTIBOOT_ERROR_48</span> <span>0x48</span></li>
    <li><span>MULTIBOOT_ERROR_4c</span> <span>0x4c</span></li>
    <li><span>MULTIBOOT_ERROR_80</span> <span>0x80</span></li>
    <li><span>MULTIBOOT_ERROR_84</span> <span>0x84</span></li>
    <li><span>MULTIBOOT_ERROR_88</span> <span>0x88</span></li>
    <li><span>MULTIBOOT_ERROR_8c</span> <span>0x8c</span></li>
    <li><span>MULTIBOOT_ERROR_NO_PROBE_TARGET</span> <span>0x50</span></li>
    <li><span>MULTIBOOT_ERROR_NO_DLREADY</span> <span>0x60</span></li>
    <li><span>MULTIBOOT_ERROR_BOOT_FAILURE</span> <span>0x70</span></li>
    <li><span>MULTIBOOT_ERROR_HANDSHAKE_FAILURE</span> <span>0x71</span></li>
    <li><span>MULTIBOOT_CONNECTION_CHECK_WAIT</span> <span>15</span></li>
    <li><span>MULTIBOOT_SERVER_TYPE_NORMAL</span> <span>0</span></li>
    <li><span>MULTIBOOT_SERVER_TYPE_QUICK</span> <span>1</span></li>
    <li><span>MULTIBOOT_HANDSHAKE_TIMEOUT</span> <span>400</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">126</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbTypes.h" />
  <h3>AgbTypes.h</h3><ul>
    <li><span>vl</span> <span>volatile</span></li>
    <li><span>ST_PSR_USER_MODE</span> <span>0x10 /* User*/</span></li>
    <li><span>ST_PSR_FIQ_MODE</span> <span>0x11 /* FIQ*/</span></li>
    <li><span>ST_PSR_IRQ_MODE</span> <span>0x12 /* IRQ*/</span></li>
    <li><span>ST_PSR_SVC_MODE</span> <span>0x13 /* Supervisor*/</span></li>
    <li><span>ST_PSR_ABORT_MODE</span> <span>0x17 /* Abort (pre-fetch/data)*/</span></li>
    <li><span>ST_PSR_UNDEF_MODE</span> <span>0x1b /* Undefined command*/</span></li>
    <li><span>ST_PSR_SYS_MODE</span> <span>0x1f /* System*/</span></li>
    <li><span>ST_DISP_OBJ_CHAR_2D_MAP</span> <span>0 /* OBJ character data 2D mapping*/</span></li>
    <li><span>ST_DISP_OBJ_CHAR_1D_MAP</span> <span>1 /* OBJ character data 1D mapping*/</span></li>
    <li><span>ST_BLD_NORMAL_MODE</span> <span>0 /* Normal mode*/</span></li>
    <li><span>ST_BLD_A_BLEND_MODE</span> <span>1 /* Translucent mode*/</span></li>
    <li><span>ST_BLD_UP_MODE</span> <span>2 /* Brighness UP mode*/</span></li>
    <li><span>ST_BLD_DOWN_MODE</span> <span>3 /* Brightness DOWN mode*/</span></li>
    <li><span>ST_BG_COLOR_16</span> <span>0 /* Select 16 colors*/</span></li>
    <li><span>ST_BG_COLOR_256</span> <span>1 /* Select 256 colors*/</span></li>
    <li><span>ST_OAM_OBJ_NORMAL</span> <span>0 /* OBJ normal mode*/</span></li>
    <li><span>ST_OAM_OBJ_BLEND</span> <span>1 /* OBJ translucent mode*/</span></li>
    <li><span>ST_OAM_OBJ_WINDOW</span> <span>2 /* OBJ window mode*/</span></li>
    <li><span>ST_OAM_AFFINE_NONE</span> <span>0 /* Affine invalid mode*/</span></li>
    <li><span>ST_OAM_AFFINE_NORMAL</span> <span>1 /* Affine normal mode*/</span></li>
    <li><span>ST_OAM_AFFINE_TWICE</span> <span>3 /* Affine double angle mode*/</span></li>
    <li><span>ST_OAM_AFFINE_ERASE</span> <span>2 /* Affine non-display mode*/</span></li>
    <li><span>ST_OAM_COLOR_16</span> <span>0 /* Select 16 colors*/</span></li>
    <li><span>ST_OAM_COLOR_256</span> <span>1 /* Select 256 colors*/</span></li>
    <li><span>ST_OAM_SQUARE</span> <span>0 /* Square OBJ*/</span></li>
    <li><span>ST_OAM_H_RECTANGLE</span> <span>1 /* Horizontally-oriented rectangle OBJ*/</span></li>
    <li><span>ST_OAM_V_RECTANGLE</span> <span>2 /* Vertically-oriented rectangle OBJ*/</span></li>
    <li><span>ST_SOUND_DMG_MIX_1_4</span> <span>0 /* DMG compatible sound mixing ratio 1/4*/</span></li>
    <li><span>ST_SOUND_DMG_MIX_2_4</span> <span>1 /*                          2/4*/</span></li>
    <li><span>ST_SOUND_DMG_MIX_FULL</span> <span>2 /*                          full range*/</span></li>
    <li><span>ST_SOUND_DIRECT_MIX_1_2</span> <span>0 /* Direct sound mixing ratio 1/2*/</span></li>
    <li><span>ST_SOUND_DIRECT_MIX_FULL</span> <span>1 /*                          full range*/</span></li>
    <li><span>ST_SOUND_SWEEP_UP</span> <span>0 /* Sweep addition*/</span></li>
    <li><span>ST_SOUND_SWEEP_DOWN</span> <span>1 /*          subtraction*/</span></li>
    <li><span>ST_SOUND_DUTY_1_8</span> <span>0 /* Waveform duty 1/8*/</span></li>
    <li><span>ST_SOUND_DUTY_2_8</span> <span>1 /*                  2/8*/</span></li>
    <li><span>ST_SOUND_DUTY_4_8</span> <span>2 /*                  4/8*/</span></li>
    <li><span>ST_SOUND_DUTY_6_8</span> <span>3 /*                  6/8*/</span></li>
    <li><span>ST_SOUND_ENV_UP</span> <span>1 /* Envelope UP*/</span></li>
    <li><span>ST_SOUND_ENV_DOWN</span> <span>0 /*              DOWN*/</span></li>
    <li><span>ST_SOUND_3_LEVEL_0_4</span> <span>0 /* No sound 3 output*/</span></li>
    <li><span>ST_SOUND_3_LEVEL_FULL</span> <span>1 /*                 4/4*/</span></li>
    <li><span>ST_SOUND_3_LEVEL_2_4</span> <span>2 /*                 2/4*/</span></li>
    <li><span>ST_SOUND_3_LEVEL_1_4</span> <span>3 /*                 1/4*/</span></li>
    <li><span>ST_SOUND_3_LEVEL_3_4</span> <span>4 /*                 3/4*/</span></li>
    <li><span>ST_SOUND_4_POLYSTEP_15</span> <span>0 /* Sound 4 polynomical counter 15 steps*/</span></li>
    <li><span>ST_SOUND_4_POLYSTEP_7</span> <span>1 /*                                     7 steps*/</span></li>
    <li><span>ST_SIO_8BIT_MODE</span> <span>0 /* Normal 8-bit communication mode*/</span></li>
    <li><span>ST_SIO_32BIT_MODE</span> <span>1 /* Normal 32-bit communication mode*/</span></li>
    <li><span>ST_SIO_SCK_OUT</span> <span>0 /* Select external clock*/</span></li>
    <li><span>ST_SIO_SCK_IN</span> <span>1 /* Select internal clock*/</span></li>
    <li><span>ST_SIO_IN_SCK_256K</span> <span>0 /* Select internal clock 256KHz*/</span></li>
    <li><span>ST_SIO_IN_SCK_2M</span> <span>1 /*                  Select 2MHz */</span></li>
    <li><span>ST_SIO_MULTI_MODE</span> <span>2 /* Multi-play communication mode*/</span></li>
    <li><span>ST_SIO_9600_BPS</span> <span>0 /* Baud rate 9600 bps*/</span></li>
    <li><span>ST_SIO_38400_BPS</span> <span>1 /*          38400 bps*/</span></li>
    <li><span>ST_SIO_57600_BPS</span> <span>2 /*          57600 bps*/</span></li>
    <li><span>ST_SIO_115200_BPS</span> <span>3 /*        115200 bps*/</span></li>
    <li><span>ST_SIO_MULTI_PARENT</span> <span>1 /* Multi-play communication  Connect master*/</span></li>
    <li><span>ST_SIO_MULTI_CHILD</span> <span>0 /*                  Connect slave*/</span></li>
    <li><span>ST_SIO_UART_MODE</span> <span>3 /* UART communication mode*/</span></li>
    <li><span>ST_SIO_UART_7BIT</span> <span>0 /* UART communication data length 7 bits*/</span></li>
    <li><span>ST_SIO_UART_8BIT</span> <span>1 /*                       8 bits*/</span></li>
    <li><span>ST_SIO_PARITY_EVEN</span> <span>0 /* Even parity*/</span></li>
    <li><span>ST_SIO_PARITY_ODD</span> <span>1 /* Odd parity*/</span></li>
    <li><span>ST_R_SIO_MASTER_MODE</span> <span>0 /* SIO master mode*/</span></li>
    <li><span>ST_R_DIRECT_MODE</span> <span>2 /* General input/output communication mode*/</span></li>
    <li><span>ST_R_JOY_MODE</span> <span>3 /* JOY communication mode*/</span></li>
    <li><span>ST_R_IN</span> <span>0 /* Select input*/</span></li>
    <li><span>ST_R_OUT</span> <span>1 /* Select output*/</span></li>
    <li><span>ST_DMA_TIMMING_IMM</span> <span>0 /* Start immediately*/</span></li>
    <li><span>ST_DMA_TIMMING_V_BLANK</span> <span>1 /* Start V blank*/</span></li>
    <li><span>ST_DMA_TIMMING_H_BLANK</span> <span>2 /* Start H blank*/</span></li>
    <li><span>ST_DMA_TIMMING_DISP</span> <span>3 /* Start display*/</span></li>
    <li><span>ST_DMA_TIMMING_SOUND</span> <span>3 /* Start sound FIFO request*/</span></li>
    <li><span>ST_DMA_16BIT_BUS</span> <span>0 /* Select bus size 16 bits*/</span></li>
    <li><span>ST_DMA_32BIT_BUS</span> <span>1 /* Select bus size 32 bits*/</span></li>
    <li><span>ST_DMA_INC</span> <span>0 /* Select address increment*/</span></li>
    <li><span>ST_DMA_DEC</span> <span>1 /* Select address decrement*/</span></li>
    <li><span>ST_DMA_FIX</span> <span>2 /* Select address fix*/</span></li>
    <li><span>ST_DMA_RELOAD</span> <span>3 /* Select address increment/reload*/</span></li>
    <li><span>ST_TMR_PRESCALER_1CK</span> <span>0 /* Prescaler 1 clock*/</span></li>
    <li><span>ST_TMR_PRESCALER_64CK</span> <span>1 /*            64 clocks*/</span></li>
    <li><span>ST_TMR_PRESCALER_256CK</span> <span>2 /*          256 clocks*/</span></li>
    <li><span>ST_TMR_PRESCALER_1024CK</span> <span>3 /*        1024 clocks*/</span></li>
    <li><span>ST_KEY_OR_INTR</span> <span>0 /*   Normal key interrupt*/</span></li>
    <li><span>ST_KEY_AND_INTR</span> <span>1 /* AND key interrupt*/</span></li>
    <li><span>ST_CST_SRAM_4WAIT</span> <span>0 /* SRAM  4 wait*/</span></li>
    <li><span>ST_CST_SRAM_3WAIT</span> <span>1 /*                 3 wait*/</span></li>
    <li><span>ST_CST_SRAM_2WAIT</span> <span>2 /*                 2 wait*/</span></li>
    <li><span>ST_CST_SRAM_8WAIT</span> <span>3 /*                 8 wait*/</span></li>
    <li><span>ST_CST_ROM_1ST_4WAIT</span> <span>0 /* ROM  1st 4 wait*/</span></li>
    <li><span>ST_CST_ROM_1ST_3WAIT</span> <span>1 /*                 3 wait*/</span></li>
    <li><span>ST_CST_ROM_1ST_2WAIT</span> <span>2 /*                 2 wait*/</span></li>
    <li><span>ST_CST_ROM_1ST_8WAIT</span> <span>3 /*                 8 wait*/</span></li>
    <li><span>ST_CST_ROM0_2ND_2WAIT</span> <span>0 /* ROM 0 2nd 2 wait*/</span></li>
    <li><span>ST_CST_ROM0_2ND_1WAIT</span> <span>1 /*                 1 wait*/</span></li>
    <li><span>ST_CST_ROM1_2ND_4WAIT</span> <span>0 /* ROM 1 2nd 4 wait*/</span></li>
    <li><span>ST_CST_ROM1_2ND_1WAIT</span> <span>1 /*                 1 wait*/</span></li>
    <li><span>ST_CST_ROM2_2ND_8WAIT</span> <span>0 /* ROM 2 2nd 8 wait*/</span></li>
    <li><span>ST_CST_ROM2_2ND_1WAIT</span> <span>1 /*                 1 wait*/</span></li>
    <li><span>ST_CST_PHI_OUT_NONE</span> <span>0 /*  terminal output clock Lo fix*/</span></li>
    <li><span>ST_CST_PHI_OUT_4MCK</span> <span>1 /*                    4MHz*/</span></li>
    <li><span>ST_CST_PHI_OUT_8MCK</span> <span>2 /*                    8MHz*/</span></li>
    <li><span>ST_CST_PHI_OUT_16MCK</span> <span>3 /*                  16MHz*/</span></li>
    <li><span>ST_CST_AGB</span> <span>0 /* AGB game pak*/</span></li>
    <li><span>ST_CST_CGB</span> <span>1 /* CGB game pak*/</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">729</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="IsAgbPrint.h" />
  <h3>IsAgbPrint.h</h3><ul>
    <li><span>void</span> AGBPrintInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> AGBPutc<span class="rr-func-args">(char const)</span></li> 
    <li><span>void</span> AGBPrint<span class="rr-func-args">(char const*)</span></li> 
    <li><span>void</span> AGBPrintf<span class="rr-func-args">(char const*,...)</span></li> 
    <li><span>void</span> AGBPrintFlush1Block<span class="rr-func-args">()</span></li> 
    <li><span>void</span> AGBPrintFlush<span class="rr-func-args">()</span></li> 
    <li><span>void</span> AGBAssert<span class="rr-func-args">(char const*,int,char const*,int)</span></li> 
    <li><span>AGB_ASSERT()</span> <span>(exp) ? ((void*)0) : AGBAssert(__FILE__, __LINE__, #exp, 1);</span></li>
    <li><span>AGB_WARNING()</span> <span>(exp) ? ((void*)0) : AGBAssert(__FILE__, __LINE__, #exp, 0);</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">161</div>  </div>
</div>
</div>
</section>

---
## Backup Library Headers (/backup)
This folder contains all the C include files for accessing Save Data on the cartridge for all the supported types of Backup chip (Flash/SRAM/EEPROM)

File Name | Extension | Description
---|---|---
AgbDacs | .h | Include file for declaring the unused DACS reading/writing functions such as **ReadDacs**
AgbEeprom | .h | Include file for declaring EEPROM reading/writing functions such as **ReadEepromDword**
AgbFlash | .h | Include file for declaring FLASH chip reading/writing functions such as **EraseFlashSector**
AgbSram | .h | Include file for declaring the slower (but uses less WRAM) SRAM reading/writing functions such as  **ReadSram**
AgbSramFast | .h | Include file for declaring the faster (but more memory intensive) SRAM reading/writing functions such as **ReadSramFast**

<div class="rr-source-code-title">Backup Library Header Files</div>
<section class="rr-main-cards">

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbDacs.h" />
  <h3>AgbDacs.h</h3><ul>
    <li><span>dacsType const*</span> dacs</li> 
    <li><span>u32</span> dacs_remainder</li> 
    <li><span>u16</span> IdentifyDacs<span class="rr-func-args">()</span></li> 
    <li><span>u16</span> SetDacsTimerIntr<span class="rr-func-args">(u8,void(**)())</span></li> 
    <li><span>u32</span> ExchangeSectorToPhysAdr<span class="rr-func-args">(u16)</span></li> 
    <li><span>u32</span> ExchangePhysAdrToSector<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> ReadDacs<span class="rr-func-args">(u16,u32,u16*,u32)</span></li> 
    <li><span>u16</span> EraseDacsChip<span class="rr-func-args">()</span></li> 
    <li><span>u16</span> EraseDacsSector<span class="rr-func-args">(u16)</span></li> 
    <li><span>u16</span> ProgramDacs_NE<span class="rr-func-args">(u16,u32,u16*,u32)</span></li> 
    <li><span>u16</span> ProgramDacsSector<span class="rr-func-args">(u16,u16*)</span></li> 
    <li><span>u32</span> VerifyDacs<span class="rr-func-args">(u16,u16,u16*,u32)</span></li> 
    <li><span>u32</span> VerifyDacsSector<span class="rr-func-args">(u16,u16*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">364</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbSram.h" />
  <h3>AgbSram.h</h3><ul>
    <li><span>void</span> ReadSram<span class="rr-func-args">(u8*,u8*,u32)</span></li> 
    <li><span>void</span> WriteSram<span class="rr-func-args">(u8*,u8*,u32)</span></li> 
    <li><span>u32</span> VerifySram<span class="rr-func-args">(u8*,u8*,u32)</span></li> 
    <li><span>SRAM_ADR</span> <span>0x0e000000 /* SRAM Start Address*/</span></li>
    <li><span>SRAM_SIZE_256K</span> <span>0x00008000 /* 256KSRAM*/</span></li>
    <li><span>SRAM_SIZE_512K</span> <span>0x00010000 /* 512KSRAM */</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">87</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbSramFast.h" />
  <h3>AgbSramFast.h</h3><ul>
    <li><span>void</span> SetSramFastFunc<span class="rr-func-args">()</span></li> 
    <li><span>void(*)(u8*,u8*,u32)</span> ReadSramFast</li> 
    <li><span>void</span> WriteSramFast<span class="rr-func-args">(u8*,u8*,u32)</span></li> 
    <li><span>u32(*)(u8*,u8*,u32)</span> VerifySramFast</li> 
    <li><span>SRAM_ADR</span> <span>0x0e000000 /* SRAM Start Address*/</span></li>
    <li><span>SRAM_SIZE_256K</span> <span>0x00008000 /* 256KSRAM*/</span></li>
    <li><span>SRAM_SIZE_512K</span> <span>0x00010000 /* 512KSRAM*/</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">103</div>  </div>
</div>

</section>

---
# API Libraries (/lib folder)
<section class="postSection">
    <div class="css-folder css-folder-left wow slideInLeft postImage">/lib</div>

 <div markdown="1" class="rr-post-markdown">
This folder contains all the libraries that a developer can link into their GBA game, they contains some useful functions for using system calls, game saves and IR communication. There are two types of library in this folder *.a and *.alf.

The libraries included are as follows:
* **libagbsyscall.a** - System Call Library
* **libagbsyscall_arm.alf** - System Call Library (ARM version)
* **libagbbackup.a** - Save Game library
* **libagbbackup_arm.alf** - Save Game library (ARM version)
* **libagbir.a** - IR communication library
* **libagbir_arm.alf** - IR communication library (ARM version)
* **libisagbprn.s** - Assembly source code for the **libisagbprn.a** library
* **libisagbprn.a** - Debug library for Printing messages to console
* **libisagbprn_arm.alf** - Debug library for Printing messages to console (ARM version)

 </div>
</section> 

---
# Source code (/src folder)
The source folder contains all the C and assembly source code for:
* Two demo games (Dolphin and Yoshi)
* 13 samples of GBA functionality
* The System Call library source code in ARM assembly
* Source code for all of the tools in the **bin** directory

## Demo Source Code (src/demos)
The GBA SDK comes with source code for 2 demo games:
* Yoshi - A demo using sprites from the N64 game Yoshi's story
* Dolphin - A demo similar to ecco the dolphin

For more details on the two demos we have a separate post covering the details:
{% include link-to-other-post.html post="/game-boy-advance-sdk-demos/" description="For more information about the GBA SDK Demos check out this post." %}

## SysCall Library Source Code (src/lib/syscall)
The Assembly source code for the SysCall library is available in the **src/lib/syscall** folder of the GBA SDK and is available in two different formats:
* GNU - GNU Assembler (GAS) format assembly code
* ARM - ARMASM format assembly code

The source code is not particularly interesting as all it does is act as a wrapper around the 42 GBA Software Interrupts which you can find a full list of here:
[Tonc: Software Interrupts](https://www.coranac.com/tonc/text/swi.htm)

They all follow the same format so here is an example:
```asm
@********************************************************************
@*          AgbSysArcTan.s                                          *
@*            AGB System Call Functions (for GAS)                   *
@*                                                                  *
@*          Copyright (C) 1999-2000 NINTENDO Co.,Ltd.               *
@********************************************************************
		.INCLUDE	"AgbDefine.s"
		.INCLUDE	"AgbMemoryMap.s"
		.TEXT
		.CODE 16

@--------------------------------------------------------------------
@-		Arc Tangent  					    -
@--------------------------------------------------------------------
		.GLOBAL	ArcTan
		.THUMB_FUNC
ArcTan:			swi		9 // This calls software interupt number 9
				bx		lr // return and switch instruction set to THUMB if Least Significant Bit is 1 otherwise switch to ARM


		.END
```

## Sample Source Code (src/samples)
The SDK also comes with 13 sample projects, each showing off a different feature of the GBA hardware, this section would be huge if we went into detail on this page, so we have split it out into its own page.

{% include link-to-other-post.html post="/game-boy-advance-sdk-samples/" description="For more information about the Samples provided by the SDK check out this post." %}


## Tool Source Code (src/bin)
The Tool Source Code folder holds the source code for most of the standard GBA development tools that deal with image conversion, the pre-compiled tools are available in the **/bin** directory.

If you are interested in going in depth into the source code for how these tools works then we have a separate post covering just that:
{% include link-to-other-post.html post="/game-boy-advance-tool-source-code/" description="For more information about the GBA SDK Tool Source Code check out this post." %}

---
# GBA Compilers
The compilers provided for the GBA were a modified version of GNU GCC distributed by **Cygnus Solutions** (Cygwin) for the ARM architecture. They provided an installed called **AGBSetup2.exe** on the AGB Developers ToolKit CD which installed the programs to **C:\Program files\cygnus**.

The version of GCC shipped with the SDK is **2.95.1** which is handy to know when decompiling the games back to C source code, about **90%** of games were compiled with this version including the Pokemon series of games.

There is a RAR file called **gba_compilers.rar** that is an archive that contains the following files inside it:
* **armelf-000512.zip** - All the pre-compiled tools such as compilers and linkers
* **thumb_patch03-OCT-03.zip** - contains an updated version of the THUMB C compilers (cc1.exe and cc1plus.exe)
* **src_patch021206.zip** - Patch for arm-000512 from 2006
* **GNUPro021206.zip** - Contains Setup.exe for installing the compiler toolchain

In the leaked version there is also a **armelf-000512** folder which is not the contents of **armelf-000512.zip** but it looks like it is the GNU source code for the tools provided in that zip.
