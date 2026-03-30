---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Software Development Kit (SDK)
category: gba
image: /public/images/gba/Game Boy Advance SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK.jpg
permalink: /game-boy-advance-sdk
breadcrumbs:
  - name: Home
    url: /
  - name: SDKs
    url: /sdks
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  Game Boy Advance Software Development Kit
    url: #
recommend: 
- gba
- sdk
editlink: /consoles/gba/GBASDK.md
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

The Japanese version also includes the **Mobile System GB** SDK which was a Japanese only accessory to link gameboys together via a mobile phone interface.

---
# Tools (/bin folder)
This folder contains useful command lines tools for GBA development compiled for Microsoft Windows.

File Name | Extension | Description
---|---|---
AGBLOAD | .exe | Tool to load ROM into the **IS-AGB-EMULATOR** hardware
NRDC | .exe | Calculates the CRC checksum for a GBA ROM (for more info see AGB_CRC.txt in /docs)
act2agb | .exe | Converts an Adobe Photoshop .ACT (Adobe Color Table) file to a GBA Palette in C source code form
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

<!-- cspell:disable -->

{% capture card_1_1_items %}
- ON|||1
- OFF|||0
- ENABLE|||1
- DISABLE|||0
- TRUE|||1
- FALSE|||0
- LCD_WIDTH|||240 /* Screen Width*/
- LCD_HEIGHT|||160 /* Screen Height*/
- SYSTEM_CLOCK|||(16 * 1024 * 1024) /* System Clock*/
- RESET_ALL_FLAG|||0xff /* Reset all*/
- RESET_ALL_REG_FLAG|||0xe0 /* Reset all registers*/
- RESET_REG_FLAG|||0x80 /* Reset registers */
- RESET_REG_SOUND_FLAG|||0x40 /* Reset sound register*/
- RESET_REG_SIO_FLAG|||0x20 /* Reset SIO register*/
- RESET_ALL_RAM_FLAG|||0x1f /* Clear the entire RAM*/
- RESET_EX_WRAM_FLAG|||0x01 /* Clear CPU external RAM*/
- RESET_CPU_WRAM_FLAG|||0x02 /* Clear CPU internal RAM*/
- RESET_PLTT_FLAG|||0x04 /* Clear palette*/
- RESET_VRAM_FLAG|||0x08 /* Clear VRAM*/
- RESET_OAM_FLAG|||0x10 /* Clear OAM*/
- BG_SC_CHAR_NO_MASK|||0x03ff /* Character No*/
- BG_SC_FLIP_MASK|||0x0c00 /* Flip*/
- BG_SC_PLTT_MASK|||0xf000 /* Color Palette No*/
- BG_SC_CHAR_NO_SHIFT|||0
- BG_SC_FLIP_SHIFT|||10
- BG_SC_PLTT_SHIFT|||12
- BG_SC_H_FLIP|||0x0400 /* H Flip*/
- BG_SC_V_FLIP|||0x0800 /* V Flip*/
- SIN_SHIFT|||14
- AFFINE_DIV_SHIFT|||8
- AFFINE_REG_SHIFT|||8
- AFFINE_CAL_SHIFT|||(SIN_SHIFT + AFFINE_DIV_SHIFT - AFFINE_REG_SHIFT)
- OAM_V_POS_MASK|||0x000000ff /* OBJ X Coordinate*/
- OAM_H_POS_MASK|||0x01ff0000 /* OBJ Y Coordinate*/
- OAM_SHAPE_MASK|||0x0000c000 /* OBJ shape*/
- OAM_SIZE_MASK|||0xc0000000 /* OBJ size*/
- OAM_OBJ_MODE_MASK|||0x00000c00 /* OBJ Mode*/
- OAM_AFFINE_MODE_MASK|||0x00000300 /* Affine Mode*/
- OAM_AFFINE_NO_MASK|||0x3e000000 /* Affine Parameter No*/
- OAM_FLIP_MASK|||0x30000000 /* Flip*/
- OAM_CHAR_NO_MASK|||0x000003ff /* Character No*/
- OAM_PRIORITY_MASK|||0x00000c00 /* BG Relative Priority*/
- OAM_PLTT_MASK|||0x0000f000 /* Color Palette No*/
- OAM_AFFINE_PARAM_MASK|||0xffff0000 /* Affine Parameter*/
- OAM_V_POS_SHIFT|||0
- OAM_H_POS_SHIFT|||16
- OAM_SHAPE_SHIFT|||14
- OAM_SIZE_SHIFT|||30
- OAM_AFFINE_MODE_SHIFT|||8
- OAM_OBJ_MODE_SHIFT|||10
- OAM_AFFINE_NO_SHIFT|||25
- OAM_FLIP_SHIFT|||28
- OAM_CHAR_NO_SHIFT|||0
- OAM_PRIORITY_SHIFT|||10
- OAM_PLTT_SHIFT|||12
- OAM_AFFINE_PARAM_SHIFT|||16
- OAM_OBJ_ON|||0x00000000 /* OBJ ON*/
- OAM_OBJ_OFF|||0x00000200 /* OBJ OFF*/
- OAM_OBJ_NORMAL|||0x00000000 /* OBJ Normal Mode*/
- OAM_OBJ_BLEND|||0x00000400 /* OBJ Semi-transparent Mode*/
- OAM_OBJ_WINDOW|||0x00000800 /* OBJ Window Mode*/
- OAM_AFFINE_NONE|||0x00000000 /* Affine Invalid Mode*/
- OAM_AFFINE_NORMAL|||0x00000100 /* Affine Normal Mode*/
- OAM_AFFINE_TWICE|||0x00000300 /* Affine Double-size Mode*/
- OAM_AFFINE_ERASE|||0x00000200 /* Affine non-display Mode*/
- OAM_MOS_ON|||0x00001000 /* Mosaic ON*/
- OAM_MOS_OFF|||0x00000000 /* Mosaic OFF*/
- OAM_COLOR_16|||0x00000000 /* Select 16*/
- OAM_COLOR_256|||0x00002000 /* Select 256 colors*/
- OAM_H_FLIP|||0x10000000 /* H Flip*/
- OAM_V_FLIP|||0x20000000 /* V Flip*/
- OAM_SQUARE|||0x00000000 /* Square OBJ*/
- OAM_H_RECTANGLE|||0x00004000 /* Horizontally-oriented rectangle OBJ*/
- OAM_V_RECTANGLE|||0x00008000 /* Vertically-oriented rectangle OBJ*/
- OAM_SIZE_NO_0|||0x00000000 /* OBJ size No 0*/
- OAM_SIZE_NO_1|||0x40000000 /* OBJ size No 1*/
- OAM_SIZE_NO_2|||0x80000000 /* OBJ size No 2*/
- OAM_SIZE_NO_3|||0xc0000000 /* OBJ size No 3*/
- OAM_SIZE_8x8|||0x00000000 /* OBJ 8 x 8 dot*/
- OAM_SIZE_16x16|||0x40000000 /* OBJ 16 x 16 dot*/
- OAM_SIZE_32x32|||0x80000000 /* OBJ 32 x 32 dot*/
- OAM_SIZE_64x64|||0xc0000000 /* OBJ 64 x 64 dot*/
- OAM_SIZE_16x8|||0x00004000 /* OBJ 16 x 8 dot*/
- OAM_SIZE_32x8|||0x40004000 /* OBJ 32 x 8 dot*/
- OAM_SIZE_32x16|||0x80004000 /* OBJ 32 x 16 dot*/
- OAM_SIZE_64x32|||0xc0004000 /* OBJ 64 x 32 dot*/
- OAM_SIZE_8x16|||0x00008000 /* OBJ 8 x 16 dot*/
- OAM_SIZE_8x32|||0x40008000 /* OBJ 8 x 32 dot*/
- OAM_SIZE_16x32|||0x80008000 /* OBJ 16 x 32 dot*/
- OAM_SIZE_32x64|||0xc0008000 /* OBJ 32 x 64 dot*/
- PLTT_RED_MASK|||0x001f /* Red*/
- PLTT_GREEN_MASK|||0x03e0 /* Green*/
- PLTT_BLUE_MASK|||0x7c00 /* Blue*/
- PLTT_RED_SHIFT|||0
- PLTT_GREEN_SHIFT|||5
- PLTT_BLUE_SHIFT|||10
- PSR_CPU_MODE_MASK|||0x1f /* CPU Mode*/
- PSR_USER_MODE|||0x10 /* User*/
- PSR_FIQ_MODE|||0x11 /* FIQ*/
- PSR_IRQ_MODE|||0x12 /* IRQ*/
- PSR_SVC_MODE|||0x13 /* Supervisor*/
- PSR_ABORT_MODE|||0x17 /* Abort (Prefetch/Data)*/
- PSR_UNDEF_MODE|||0x1b /* Undefined Command*/
- PSR_SYS_MODE|||0x1f /* System*/
- PSR_THUMB_STATE|||0x20 /* THUMB State*/
- PSR_FIQ_DISABLE|||0x40 /* FIQ Disable*/
- PSR_IRQ_DISABLE|||0x80 /* IRQ Disable*/
- PSR_IRQ_FIQ_DISABLE|||0xc0 /* IRQ & FIQ Disable*/
- PSR_V_FLAG|||0x10000000 /* Overflow*/
- PSR_C_FLAG|||0x20000000 /* Carry/Borrow/Extend*/
- PSR_Z_FLAG|||0x40000000 /* Zero*/
- PSR_N_FLAG|||0x80000000 /* Negative/Less Than*/
- V_BLANK_INTR_FLAG|||0x0001 /* V Blank Interrupt*/
- H_BLANK_INTR_FLAG|||0x0002 /* H Blank Interrupt*/
- V_COUNT_INTR_FLAG|||0x0004 /* V Counter Corresponding Interrupt*/
- TIMER0_INTR_FLAG|||0x0008 /* Timer 0 Interrupt*/
- TIMER1_INTR_FLAG|||0x0010 /* Timer 1 Interrupt*/
- TIMER2_INTR_FLAG|||0x0020 /* Timer 2 Interrupt*/
- TIMER3_INTR_FLAG|||0x0040 /* Timer 3 Interrupt*/
- SIO_INTR_FLAG|||0x0080 /* Serial Communication Interrupt*/
- DMA0_INTR_FLAG|||0x0100 /* DMA0 Interrupt*/
- DMA1_INTR_FLAG|||0x0200 /* DMA1 Interrupt*/
- DMA2_INTR_FLAG|||0x0400 /* DMA2 Interrupt*/
- DMA3_INTR_FLAG|||0x0800 /* DMA3 Interrupt*/
- KEY_INTR_FLAG|||0x1000 /* Key Interrupt*/
- CASSETTE_INTR_FLAG|||0x2000 /* Game Pak Interrupt*/
- DISP_BG_MODE_MASK|||0x0007 /* BG Mode*/
- DISP_ON_MASK|||0x1f00 /* OBJ BG ON*/
- DISP_WIN_MASK|||0x6000 /* Window ON*/
- DISP_BG_MODE_SHIFT|||0
- DISP_ON_SHIFT|||8
- DISP_WIN_SHIFT|||13
- DISP_MODE_0|||0x0000 /* BG Mode 0*/
- DISP_MODE_1|||0x0001 /* BG Mode 1*/
- DISP_MODE_2|||0x0002 /* BG Mode 2*/
- DISP_MODE_3|||0x0003 /* BG Mode 3*/
- DISP_MODE_4|||0x0004 /* BG Mode 4*/
- DISP_MODE_5|||0x0005 /* BG Mode 5*/
- DISP_BMP_FRAME_NO|||0x0010 /* Bitmap Mode Display Frame*/
- DISP_OBJ_HOFF|||0x0020 /* OBJ Processing in H Blank OFF*/
- DISP_OBJ_CHAR_2D_MAP|||0x0000 /* OBJ Character Data 2D Mapping*/
- DISP_OBJ_CHAR_1D_MAP|||0x0040 /* OBJ Character Data 1D Mapping*/
- DISP_LCDC_OFF|||0x0080 /* LCDC OFF*/
- DISP_BG0_ON|||0x0100 /* BG0 ON*/
- DISP_BG1_ON|||0x0200 /* BG1 ON*/
- DISP_BG2_ON|||0x0400 /* BG2 ON*/
- DISP_BG3_ON|||0x0800 /* BG3 ON*/
- DISP_BG_ALL_ON|||0x0f00 /* All BG ON*/
- DISP_OBJ_ON|||0x1000 /* OBJ ON*/
- DISP_OBJ_BG_ALL_ON|||0x1f00 /* All OBJ/BG ON*/
- DISP_WIN0_ON|||0x2000 /* Window 0 ON*/
- DISP_WIN1_ON|||0x4000 /* Window 1 ON*/
- DISP_WIN01_ON|||0x6000 /* Window 0,1 ON*/
- DISP_OBJWIN_ON|||0x8000 /* OBJ Window ON*/
- DISP_WIN_ALL_ON|||0xe000 /* All Window ON*/
- DISP_ALL_ON|||0x7f00 /* All ON*/
- STAT_VCOUNT_CMP_MASK|||0xff00 /* V Counter Compare Value*/
- STAT_VCOUNT_CMP_SHIFT|||8
- STAT_V_BLANK|||0x0001 /* During V Blank*/
- STAT_H_BLANK|||0x0002 /* During H Blank*/
- STAT_V_COUNT|||0x0004 /* Matching with V Counter*/
- STAT_V_BLANK_IF_ENABLE|||0x0008 /* V Blank Interrupt Request, Enable*/
- STAT_H_BLANK_IF_ENABLE|||0x0010 /* H Blank Interrupt Request, Enable*/
- STAT_V_COUNT_IF_ENABLE|||0x0020 /* V Counter Corresponding */
- BG_PRIORITY_MASK|||0x0003 /* BG Priority*/
- BG_CHAR_BASE_MASK|||0x000c /* Character Base Address*/
- BG_SCREEN_BASE_MASK|||0x1f00 /* Screen Base Address*/
- BG_SCREEN_SIZE_MASK|||0xc000 /* Screen Size (256/512)*/
- BG_PRIORITY_SHIFT|||0
- BG_CHAR_BASE_SHIFT|||2
- BG_SCREEN_BASE_SHIFT|||8
- BG_SCREEN_SIZE_SHIFT|||14
- BG_PRIORITY_0|||0x0000 /* BG 0 Priority*/
- BG_PRIORITY_1|||0x0001 /* BG 1 Priority*/
- BG_PRIORITY_2|||0x0002 /* BG 2 Priority*/
- BG_PRIORITY_3|||0x0003 /* BG 3 Priority*/
- BG_MOS_ON|||0x0040 /* Mosaic ON*/
- BG_MOS_OFF|||0x0000 /* Mosaic OFF*/
- BG_COLOR_16|||0x0000 /* Select 16 colors*/
- BG_COLOR_256|||0x0080 /* Select 256 colors*/
- BG_LOOP_ON|||0x2000 /* Loop ON*/
- BG_LOOP_OFF|||0x0000 /* Loop OFF*/
- BG_SCREEN_SIZE_0|||0x0000 /* Screen Size (256x256)*/
- BG_SCREEN_SIZE_1|||0x4000 /* Screen Size (512x256)*/
- BG_SCREEN_SIZE_2|||0x8000 /* Screen Size (256x512)*/
- BG_SCREEN_SIZE_3|||0xc000 /* Screen Size (512x512)*/
- WIN_END_POS_MASK|||0x00ff /* Window End Position*/
- WIN_START_POS_MASK|||0xff00 /* Window Start Position*/
- WIN_END_POS_SHIFT|||0
- WIN_START_POS_SHIFT|||8
- WIN_BG0_ON|||0x0001 /* BG0 ON*/
- WIN_BG1_ON|||0x0002 /* BG1 ON*/
- WIN_BG2_ON|||0x0004 /* BG2 ON*/
- WIN_BG3_ON|||0x0008 /* BG3 ON*/
- WIN_OBJ_ON|||0x0010 /* OBJ ON*/
- WIN_BLEND_ON|||0x0020 /* Blend ON*/
- WIN_ALL_ON|||0x003f /* All ON*/
- MOS_H_SIZE_MASK|||0x000f /* Mosaic Height*/
- MOS_V_SIZE_MASK|||0x00f0 /* Mosaic Width*/
- MOS_BG_H_SIZE_MASK|||0x000f /* BG Mosaic Height*/
- MOS_BG_V_SIZE_MASK|||0x00f0 /* BG Mosaic Width*/
- MOS_OBJ_H_SIZE_MASK|||0x000f /* OBJ Mosaic Height*/
- MOS_OBJ_V_SIZE_MASK|||0x00f0 /* OBJ Mosaic Width*/
- MOS_H_SIZE_SHIFT|||0
- MOS_V_SIZE_SHIFT|||4
- MOS_BG_H_SIZE_SHIFT|||0
- MOS_BG_V_SIZE_SHIFT|||4
- MOS_OBJ_H_SIZE_SHIFT|||8
- MOS_OBJ_V_SIZE_SHIFT|||12
- BLD_PIXEL_MASK|||0x003f /* Select Pixel*/
- BLD_1ST_PIXEL_MASK|||0x003f /* Select 1st Pixel*/
- BLD_MODE_MASK|||0x00c0 /* Blend Mode*/
- BLD_2ND_PIXEL_MASK|||0x3f00 /* Select 2nd Pixel*/
- BLD_1ST_PIXEL_SHIFT|||0
- BLD_MODE_SHIFT|||6
- BLD_2ND_PIXEL_SHIFT|||8
- BLD_BG0|||0x0001 /* Select BG0 Pixel*/
- BLD_BG1|||0x0002 /* Select BG1 Pixel*/
- BLD_BG2|||0x0004 /* Select BG2 Pixel*/
- BLD_BG3|||0x0008 /* Select BG3 Pixel*/
- BLD_OBJ|||0x0010 /* Select OBJ Pixel*/
- BLD_BD|||0x0020 /* Select Background Color Pixel*/
- BLD_ALL|||0x003f /* Select All Pixels*/
- BLD_BG0_1ST|||0x0001 /* Select BG0 1st Pixel*/
- BLD_BG1_1ST|||0x0002 /* Select BG1 1st Pixel*/
- BLD_BG2_1ST|||0x0004 /* Select BG2 1st Pixel*/
- BLD_BG3_1ST|||0x0008 /* Select BG3 1st Pixel*/
- BLD_OBJ_1ST|||0x0010 /* Select OBJ 1st Pixel*/
- BLD_BD_1ST|||0x0020 /* Select Background Color 1st Pixel*/
- BLD_1ST_ALL|||0x003f /* Select All 1st Pixel*/
- BLD_NORMAL_MODE|||0x0000 /* Normal Mode*/
- BLD_A_BLEND_MODE|||0x0040 /* Semi-transparent Mode*/
- BLD_UP_MODE|||0x0080 /* Brightness UP Mode*/
- BLD_DOWN_MODE|||0x00c0 /* Brightness DOWN Mode*/
- BLD_BG0_2ND|||0x0100 /* Select BG0 2nd Pixel*/
- BLD_BG1_2ND|||0x0200 /* Select BG1 2nd Pixel*/
- BLD_BG2_2ND|||0x0400 /* Select BG2 2nd Pixel*/
- BLD_BG3_2ND|||0x0800 /* Select BG3 2nd Pixel*/
- BLD_OBJ_2ND|||0x1000 /* Select OBJ 2nd Pixel*/
- BLD_BD_2ND|||0x2000 /* Select Background color 2nd Pixel*/
- BLD_2ND_ALL|||0x3f00 /* Select All 2nd Pixel*/
- BLD_A_MASK|||0x001f /* Blend Variable A*/
- BLD_B_MASK|||0x1f00 /* Blend Variable B*/
- BLD_Y_MASK|||0x001f /* Blend Variable Y*/
- BLD_A_SHIFT|||16
- BLD_B_SHIFT|||24
- BLD_Y_SHIFT|||0
- SOUND_SO1_LEVEL_MASK|||0x03 /* S01 Output Level*/
- SOUND_SO2_LEVEL_MASK|||0x30 /* S02 Output Level*/
- SOUND_DMG_SO1_ON_MASK|||0x0f /* DMG Compatible Sound->S01 ON*/
- SOUND_DMG_SO2_ON_MASK|||0xf0 /* DMG Compatible Sound->S02 ON*/
- SOUND_SWEEP_SHIFT_MASK|||0x03 /* Sweep Shift Number*/
- SOUND_SWEEP_TIME_MASK|||0x30 /* Sweep Time*/
- SOUND_COUNTS_MASK|||0x3f /* Sound Length (Count Number)*/
- SOUND_DUTY_MASK|||0xc0 /* Waveform Duty*/
- SOUND_ENV_STEPS_MASK|||0x03 /* Envelope Step Number*/
- SOUND_ENV_INIT_MASK|||0xf0 /* Envelope Initial-Value*/
- SOUND_FREQUENCY_MASK|||0x03ff /* Frequency*/
- SOUND_FREQUENCY_L_MASK|||0xff
- SOUND_FREQUENCY_H_MASK|||0x03
- SOUND_3_COUNTS_MASK|||0xff /* Sound 3 Length (Count Number)*/
- SOUND_3_LEVEL_MASK|||0xe0 /* Output Level*/
- SOUND_4_PRESCALER_MASK|||0x03 /* Sound 4 Prescaler Select*/
- SOUND_4_POLYSHIFT_MASK|||0xf0 /* Polynomial Counter Shift Number*/
- SOUND_SO1_LEVEL_SHIFT|||0
- SOUND_SO2_LEVEL_SHIFT|||4
- SOUND_DMG_SO1_ON_SHIFT|||0
- SOUND_DMG_SO2_ON_SHIFT|||4
- SOUND_SWEEP_SHIFT_SHIFT|||0
- SOUND_SWEEP_TIME_SHIFT|||4
- SOUND_COUNTS_SHIFT|||0
- SOUND_DUTY_SHIFT|||6
- SOUND_ENV_STEPS_SHIFT|||0
- SOUND_ENV_INIT_SHIFT|||4
- SOUND_FREQUENCY_SHIFT|||0
- SOUND_FREQUENCY_L_SHIFT|||0
- SOUND_FREQUENCY_H_SHIFT|||8
- SOUND_3_COUNTS_SHIFT|||0
- SOUND_3_LEVEL_SHIFT|||5
- SOUND_4_PRESCALER_SHIFT|||0
- SOUND_4_POLYSHIFT_SHIFT|||4
- SOUND_1_ON|||0x01 /* Sound 1 ON*/
- SOUND_2_ON|||0x02 /* Sound 2 ON*/
- SOUND_3_ON|||0x04 /* Sound 3 ON*/
- SOUND_4_ON|||0x08 /* Sound 4 ON*/
- SOUND_DMG_ON|||0x80 /* DMG Compatible Sound ON*/
- SOUND_1_SO1_ON|||0x01 /* Sound 1 -> S01 ON*/
- SOUND_2_SO1_ON|||0x02 /* Sound 2 -> S01 ON*/
- SOUND_3_SO1_ON|||0x04 /* Sound 3 -> S01 ON*/
- SOUND_4_SO1_ON|||0x08 /* Sound 4 -> S01 ON*/
- SOUND_1_SO2_ON|||0x10 /* Sound 1 -> S02 ON*/
- SOUND_2_SO2_ON|||0x20 /* Sound 2 -> S02 ON*/
- SOUND_3_SO2_ON|||0x40 /* Sound 3 -> S02 ON*/
- SOUND_4_SO2_ON|||0x80 /* Sound 4 -> S02 ON*/
- SOUND_DMG_ALL_SO1_ON|||0x0f /* DMG Compatible Sound -> S01 ON*/
- SOUND_DMG_ALL_SO2_ON|||0xf0 /* DMG Compatible Sound -> S02 ON*/
- SOUND_DMG_ALL_SO_ON|||0xff /* DMG Compatible Sound -> S01/2 ON*/
- SOUND_VIN_SO1_ON|||0x80 /* Vin -> S01 ON*/
- SOUND_VIN_SO2_ON|||0x08 /* Vin -> S02 ON*/
- SOUND_VIN_SO_ON|||0x08 /* Vin -> S01/2 ON*/
- SOUND_A_SO1_ON|||0x01 /* Direct Sound A -> S01 ON*/
- SOUND_A_SO2_ON|||0x02 /* Direct Sound A -> S02 ON*/
- SOUND_B_SO1_ON|||0x10 /* Direct Sound B -> S01 ON*/
- SOUND_B_SO2_ON|||0x20 /* Direct Sound B -> S02 ON*/
- SOUND_A_ALL_SO_ON|||0x03 /* Direct Sound A -> S01/2 ON*/
- SOUND_B_ALL_SO_ON|||0x30 /* Direct Sound B -> S01/2 ON*/
- SOUND_DIRECT_ALL_SO1_ON|||0x11 /* Direct Sound A/B -> S01 ON*/
- SOUND_DIRECT_ALL_SO2_ON|||0x22 /* Direct Sound A/B -> S02 ON*/
- SOUND_DIRECT_ALL_SO_ON|||0x33 /* Direct Sound A/B -> S01/2 ON*/
- SOUND_A_TIMER_0|||0x00 /* Timer 0 -> Direct Sound A*/
- SOUND_A_TIMER_1|||0x04 /* Timer 1 -> Direct Sound A*/
- SOUND_B_TIMER_0|||0x00 /* Timer 0 -> Direct Sound B*/
- SOUND_B_TIMER_1|||0x40 /* Timer 1 -> Direct Sound B*/
- SOUND_A_FIFO_RESET|||0x08 /* Direct Sound A FIFO Reset*/
- SOUND_B_FIFO_RESET|||0x80 /* Direct Sound B FIFO Reset*/
- SOUND_DMG_MIX_1_4|||0x00 /* DMG Compatible Sound Mix Ratio 1/4*/
- SOUND_DMG_MIX_2_4|||0x01 /* 2/4*/
- SOUND_DMG_MIX_FULL|||0x02 /* Full Range*/
- SOUND_A_MIX_1_2|||0x00 /* Direct Sound A Mix Ratio 1/2*/
- SOUND_A_MIX_FULL|||0x04 /* Full Range*/
- SOUND_B_MIX_1_2|||0x00 /* Direct Sound B Mix Ratio 1/2*/
- SOUND_B_MIX_FULL|||0x08 /* Full Range*/
- SOUND_ALL_MIX_FULL|||0x0e /* All Sound Mix Ratio Full Range*/
- SOUND_INIT_ON|||0x80 /* Initial ON*/
- SOUND_INIT_OFF|||0x00 /* Initial ON*/
- SOUND_COUNTER_ON|||0x40 /* Counter ON*/
- SOUND_COUNTER_OFF|||0x00 /* Counter OFF*/
- SOUND_SWEEP_UP|||0x00 /* Sweep Addition*/
- SOUND_SWEEP_DOWN|||0x08 /* Subtraction*/
- SOUND_DUTY_1_8|||0x00 /* Waveform Duty 1/8*/
- SOUND_DUTY_2_8|||0x40 /* 2/8*/
- SOUND_DUTY_4_8|||0x80 /* 4/8*/
- SOUND_DUTY_6_8|||0xc0 /* 6/8*/
- SOUND_ENV_UP|||0x08 /* Envelope UP*/
- SOUND_ENV_DOWN|||0x00 /* DOWN*/
- SOUND_3_LOCAL_ON|||0x80 /* Sound 3 ON*/
- SOUND_3_WAVE_BANK_0|||0x00 /* Sound 3 Waveform RAM Bank 0*/
- SOUND_3_WAVE_BANK_1|||0x40 /* Bank 1*/
- SOUND_3_WAVE_CONNECT|||0x20 /* Sound 3 Waveform RAM Connect*/
- SOUND_3_WAVE_DISCONNECT|||0x00 /* Disconnect*/
- SOUND_3_LEVEL_0_4|||0x00 /* Sound 3 Output None*/
- SOUND_3_LEVEL_FULL|||0x20 /* 4/4*/
- SOUND_3_LEVEL_2_4|||0x40 /* 2/4*/
- SOUND_3_LEVEL_1_4|||0x60 /* 1/4*/
- SOUND_3_LEVEL_3_4|||0x80 /* 3/4*/
- SOUND_4_POLYSTEP_15|||0x00 /* Sound 4 Polynomial Counter 15 step*/
- SOUND_4_POLYSTEP_7|||0x08 /* 7 step*/
- SIO_MODE_MASK|||0x3000 /* Communication mode*/
- SIO_BAUD_RATE_MASK|||0x0003 /* Baud rate*/
- SIO_ID_NO_MASK|||0x0030 /* Communication ID*/
- SIO_MODE_SHIFT|||12
- SIO_BAUD_RATE_SHIFT|||0
- SIO_ID_NO_SHIFT|||4
- SIO_8BIT_MODE|||0x0000 /* Normal 8-bit communication mode*/
- SIO_32BIT_MODE|||0x1000 /* Normal 32-bit communication mode*/
- SIO_MULTI_MODE|||0x2000 /* Multi-play communication mode*/
- SIO_UART_MODE|||0x3000 /* UART communication mode*/
- SIO_SCK_OUT|||0x0000 /* Select external clock*/
- SIO_SCK_IN|||0x0001 /* Select internal clock*/
- SIO_IN_SCK_256K|||0x0000 /* Select internal clock 256KHz*/
- SIO_IN_SCK_2M|||0x0002 /* Select 2MHz*/
- SIO_ACK_RECV|||0x0004 /* Request transfer*/
- SIO_ACK_SEND|||0x0008 /* Enable transfer*/
- SIO_9600_BPS|||0x0000 /* Baud rate 9600 bps*/
- SIO_38400_BPS|||0x0001 /* 38400 bps*/
- SIO_57600_BPS|||0x0002 /* 57600 bps*/
- SIO_115200_BPS|||0x0003 /* 115200 bps*/
- SIO_MULTI_CONNECT|||0x0004 /* Connecting multi-play communication*/
- SIO_MULTI_DISCONNECT|||0x0000 /* Disconnect*/
- SIO_MULTI_PARENT|||0x0008 /* Multi-play communication Connect master*/
- SIO_MULTI_CHILD|||0x0000 /* Connect slave*/
- SIO_MULTI_SI|||0x0004 /* Multi-play communication SI terminal*/
- SIO_MULTI_SD|||0x0008 /* SD terminal*/
- SIO_MULTI_BUSY|||0x0080 /* Multi-play communicating*/
- SIO_CTS_ENABLE|||0x0004 /* Enable UART send enable signal*/
- SIO_UART_7BIT|||0x0000 /* UART communication data length 7 bit*/
- SIO_UART_8BIT|||0x0080 /* 8 bit*/
- SIO_ERROR|||0x0040 /* Detect error*/
- SIO_START|||0x0080 /* Start transfer*/
- SIO_ENABLE|||0x0080 /* Enable SIO*/
- SIO_FIFO_ENABLE|||0x0100 /* Enable FIFO*/
- SIO_PARITY_ENABLE|||0x0200 /* Enable parity*/
- SIO_PARITY_EVEN|||0x0000 /* Even parity*/
- SIO_PARITY_ODD|||0x0008 /* Odd parity*/
- SIO_TRANS_ENABLE|||0x0400 /* Enable transmitter*/
- SIO_TRANS_DATA_FULL|||0x0010 /* Transmitted data full */
- SIO_RECV_ENABLE|||0x0800 /* Enable receiver*/
- SIO_RECV_DATA_EMPTY|||0x0020 /* No data received*/
- SIO_IF_ENABLE|||0x4000 /* Enable interrupt request*/
- JOY_IF_RESET|||0x01 /* Interrupt request of JOY bus reset */
- JOY_IF_RECV|||0x02 /* Interrupt request of JOY bus receive completion*/
- JOY_IF_SEND|||0x04 /* Interrupt request of JOY bus send completion*/
- JOY_IF_ENABLE|||0x40 /* Enable interrupt request*/
- JSTAT_FLAGS_MASK|||0x30 /* General flag*/
- JSTAT_FLAGS_SHIFT|||4
- JSTAT_RECV|||0x02 /* Receive status*/
- JSTAT_SEND|||0x08 /* Send status*/
- R_SIO_MODE_MASTER_MASK|||0xc000 /* SIO mode master*/
- R_SIO_MODE_MASTER_SHIFT|||14
- R_SIO_MASTER_MODE|||0x0000 /* SIO master mode*/
- R_DIRECT_MODE|||0x8000 /* General input/output */
- R_JOY_MODE|||0xc000 /* JOY communication mode*/
- R_SC|||0x0001 /* Data*/
- R_SD|||0x0002
- R_SI|||0x0004
- R_SO|||0x0008
- R_SC_I_O|||0x0010 /* Select I/O*/
- R_SD_I_O|||0x0020
- R_SI_I_O|||0x0040
- R_SO_I_O|||0x0080
- R_SC_IN|||0x0000 /* Input setting*/
- R_SD_IN|||0x0000
- R_SI_IN|||0x0000
- R_SO_IN|||0x0000
- R_SC_OUT|||0x0010 /* Output setting*/
- R_SD_OUT|||0x0020
- R_SI_OUT|||0x0040
- R_SO_OUT|||0x0080
- R_IF_ENABLE|||0x0100 /* Enable interrupt request*/
- DMA_TIMMING_MASK|||0x30000000 /* Start Timing*/
- DMA_COUNT_MASK|||0x0000ffff /* Transmission Count*/
- DMA_TIMMING_SHIFT|||30
- DMA_COUNT_SHIFT|||0
- DMA_ENABLE|||0x80000000 /* DMA Enable*/
- DMA_IF_ENABLE|||0x40000000 /* Interrupt Request Enable*/
- DMA_TIMMING_IMM|||0x00000000 /* Run Immediately*/
- DMA_TIMMING_V_BLANK|||0x10000000 /* Run V Blank*/
- DMA_TIMMING_H_BLANK|||0x20000000 /* Run H Blank*/
- DMA_TIMMING_DISP|||0x30000000 /* Run Display*/
- DMA_TIMMING_SOUND|||0x30000000 /* Run Sound FIFO Request*/
- DMA_DREQ_ON|||0x08000000 /* Data Request Synchronize Mode ON*/
- DMA_16BIT_BUS|||0x00000000 /* Select Bus Size 16Bit*/
- DMA_32BIT_BUS|||0x04000000 /* Select Bus Size 32Bit*/
- DMA_CONTINUOUS_ON|||0x02000000 /* Continuous Mode ON*/
- DMA_SRC_INC|||0x00000000 /* Select Source Increment*/
- DMA_SRC_DEC|||0x00800000 /* Select Source Decrement*/
- DMA_SRC_FIX|||0x01000000 /* Select Source Fixed*/
- DMA_DEST_INC|||0x00000000 /* Select Destination Increment*/
- DMA_DEST_DEC|||0x00200000 /* Select Destination Decrement*/
- DMA_DEST_FIX|||0x00400000 /* Select Destination Fixed*/
- DMA_DEST_RELOAD|||0x00600000 /* Select Destination */
- TMR_PRESCALER_MASK|||0x00030000 /* Prescaler Clock*/
- TMR_PRESCALER_SHIFT|||16
- TMR_PRESCALER_1CK|||0x00000000 /* Prescaler 1 Clock*/
- TMR_PRESCALER_64CK|||0x00010000 /* 64 clocks*/
- TMR_PRESCALER_256CK|||0x00020000 /* 256 clocks*/
- TMR_PRESCALER_1024CK|||0x00030000 /* 1024 clocks*/
- TMR_IF_ENABLE|||0x00400000 /* Interrupt Request Enable*/
- TMR_ENABLE|||0x00800000 /* Run Timer*/
- BUTTON_MASK|||0x030f /* Button*/
- PLUS_KEY_MASK|||0x00f0 /* +Control Pad*/
- ALL_KEY_MASK|||0x03ff /* All Key*/
- A_BUTTON|||0x0001 /* A Button*/
- B_BUTTON|||0x0002 /* B Button*/
- SELECT_BUTTON|||0x0004 /* SELECT*/
- START_BUTTON|||0x0008 /* START*/
- R_KEY|||0x0010 /* Right Button*/
- L_KEY|||0x0020 /* Left Button*/
- U_KEY|||0x0040 /* Up Button*/
- D_KEY|||0x0080 /* Down Button*/
- R_BUTTON|||0x0100 /* R Button*/
- L_BUTTON|||0x0200 /* L Button*/
- KEY_IF_ENABLE|||0x4000 /* Interrupt Request Enable*/
- KEY_OR_INTR|||0x0000 /* Normal Key Interrupt*/
- KEY_AND_INTR|||0x8000 /* AND Key Interrupt*/
- CST_SRAM_4WAIT|||0x0000 /* SRAM 4 wait*/
- CST_SRAM_3WAIT|||0x0001 /* 3 wait*/
- CST_SRAM_2WAIT|||0x0002 /* 2 wait*/
- CST_SRAM_8WAIT|||0x0003 /* 8 wait*/
- CST_ROM0_1ST_4WAIT|||0x0000 /* ROM0 1st 4 wait*/
- CST_ROM0_1ST_3WAIT|||0x0004 /* 3 wait*/
- CST_ROM0_1ST_2WAIT|||0x0008 /* 2 wait*/
- CST_ROM0_1ST_8WAIT|||0x000c /* 8 wait*/
- CST_ROM0_2ND_2WAIT|||0x0000 /* 2nd 2 wait*/
- CST_ROM0_2ND_1WAIT|||0x0010 /* 1 wait*/
- CST_ROM1_1ST_4WAIT|||0x0000 /* ROM 1 1st 4 wait*/
- CST_ROM1_1ST_3WAIT|||0x0020 /* 3 wait*/
- CST_ROM1_1ST_2WAIT|||0x0040 /* 2 wait*/
- CST_ROM1_1ST_8WAIT|||0x0060 /* 8 wait*/
- CST_ROM1_2ND_4WAIT|||0x0000 /* 2nd 4 wait*/
- CST_ROM1_2ND_1WAIT|||0x0080 /* 1 wait*/
- CST_ROM2_1ST_4WAIT|||0x0000 /* ROM 2 1st 4 wait*/
- CST_ROM2_1ST_3WAIT|||0x0100 /* 3 wait*/
- CST_ROM2_1ST_2WAIT|||0x0200 /* 2 wait*/
- CST_ROM2_1ST_8WAIT|||0x0300 /* 8 wait*/
- CST_ROM2_2ND_8WAIT|||0x0000 /* 2nd 8 wait*/
- CST_ROM2_2ND_1WAIT|||0x0400 /* 1 wait*/
- CST_PHI_OUT_NONE|||0x0000 /* terminal output clock fixed Lo*/
- CST_PHI_OUT_4MCK|||0x0800 /* 4MHz*/
- CST_PHI_OUT_8MCK|||0x1000 /* 8MHz*/
- CST_PHI_OUT_16MCK|||0x1800 /* 16MHz*/
- CST_PREFETCH_ENABLE|||0x4000 /* Enable prefetch buffer*/
- CST_AGB|||0x0000 /* AGB Game Pak*/
- CST_CGB|||0x8000 /* CGB Game Pak*/
{% endcapture %}

{% capture card_1_2_items %}
- void|||irBegin|||(int,irResult*,int)
- void|||irEnd|||()
- int|||irSendConnect|||(int)
- int|||irRecvConnect|||(int)
- void|||irInit|||()
- int|||irSendPacket|||(int*,int)
- int|||irRecvPacket|||(int*,int)
- void|||irMountThumbCore|||()
- void|||irMountArmCore|||(int*,int*)
- void|||irRamCopy|||(int*,int*)
- void|||irEnable|||()
- void|||irDisable|||()
- int|||irDetection|||()
- IR_SHUTDOWN|||0x00
- IR_DISCONNECT|||0xff
- IR_NORMAL|||0x8b /*Normal Value*/
- IR_PULSE_ERR|||0x01 /*When received pulse error*/
- IR_BYTES_ERR|||0x02 /*When received send request for more */
- IR_CODE_ERR|||0x04 /*Header Code Error*/
- IR_SUM_ERR|||0x08 /*Checksum Error*/
- IR_RECEIVER|||0x01 /*Receiver*/
- IR_SENDER|||0x02 /*Sender*/
- IR_UNDEFINED|||0x03 /*Undefined*/
- IR_DATA_RAW|||0x5a /*Sent as part of header*/
- IR_SUCCESS|||1 /*Success Notification*/
- IR_FAILURE|||0 /*Failure Notification*/
- IR_ARM_SEND_CORE_SIZE|||182 /*Words(728Bytes)*/
- IR_ARM_RECV_CORE_SIZE|||169 /*Words(676Bytes)*/
- IR_40kbps_RATE|||0x1A3 /*Cartridge ROM (4-2 Wait):40000bps*/
- IR_47kbps_RATE|||0x161 /* Same (3-1 Wait):47530bps*/
- IR_104kbps_RATE|||0x0A1 /*Internal RAM:104000bps*/
{% endcapture %}

{% capture card_1_3_items %}
- BOOT_ROM|||0x00000000 /* Boot ROM*/
- BOOT_ROM_END|||(BOOT_ROM + 0x4000)
- EX_WRAM|||0x02000000 /* CPU External Work RAM*/
- EX_WRAM_END|||(EX_WRAM + 0x40000)
- CPU_WRAM|||0x03000000 /* CPU Internal Work RAM*/
- CPU_WRAM_END|||(CPU_WRAM + 0x8000)
- WRAM|||EX_WRAM /* Entire Work RAM*/
- WRAM_END|||CPU_WRAM_END
- SOUND_AREA_ADDR_BUF|||(CPU_WRAM_END - 0x10)/*Sound Driver Work Address*/
- INTR_CHECK_BUF|||(CPU_WRAM_END - 0x8)/* Interrupt Check*/
- SOFT_RESET_DIRECT_BUF|||(CPU_WRAM_END - 0x6)/* SoftReset() Specify Return to*/
- INTR_VECTOR_BUF|||(CPU_WRAM_END - 0x4)/* Interrupt Branch Address*/
- REG_BASE|||0x04000000 /* Registers*/
- REG_END|||(REG_BASE + 0x300)
- PLTT|||0x05000000 /* Palette RAM*/
- PLTT_END|||(PLTT + 0x400)
- BG_PLTT|||(PLTT + 0x0) /* BG Palette RAM*/
- BG_PLTT_END|||(PLTT + 0x200)
- OBJ_PLTT|||(PLTT + 0x200) /* OBJ Palette RAM*/
- OBJ_PLTT_END|||(PLTT + 0x400)
- VRAM|||0x06000000 /* VRAM*/
- VRAM_END|||(VRAM + 0x18000)
- BG_VRAM|||(VRAM + 0x0) /* BG Character/Screen RAM*/
- BG_BITMAP0_VRAM|||(VRAM + 0x0) /* BG Bitmap 0 RAM*/
- BG_BITMAP1_VRAM|||(VRAM + 0xa000) /* BG Bitmap 1 RAM*/
- OBJ_MODE0_VRAM|||(VRAM + 0x10000) /* OBJ Character RAM*/
- OBJ_MODE1_VRAM|||(VRAM + 0x10000)
- OBJ_MODE2_VRAM|||(VRAM + 0x10000)
- OBJ_MODE3_VRAM|||(VRAM + 0x14000)
- OBJ_MODE4_VRAM|||(VRAM + 0x14000)
- OBJ_MODE5_VRAM|||(VRAM + 0x14000)
- OBJ_VRAM_END|||(VRAM + 0x18000)
- OAM|||0x07000000 /* OAM*/
- OAM_END|||(OAM + 0x400)
- ROM_BANK0|||0x08000000 /* ROM Bank 0*/
- ROM_BANK0_END|||0x0a000000
- ROM_BANK1|||0x0a000000 /* ROM Bank 1*/
- ROM_BANK1_END|||0x0c000000
- ROM_BANK2|||0x0c000000 /* ROM Bank 2*/
- ROM_BANK2_END|||0x0e000000
- RAM_BANK|||0x0c000000 /* RAM Bank*/
- RAM_BANK_END|||0x10000000
- FLASH_1M|||0x09fe0000 /* 1M Flash Memory*/
- FLASH_1M_END|||0x0a000000
- BOOT_ROM_SIZE|||0x4000 /* Boot ROM*/
- EX_WRAM_SIZE|||0x40000 /* CPU External Work RAM*/
- CPU_WRAM_SIZE|||0x8000 /* CPU Internal Work RAM*/
- WRAM_SIZE|||0x48000 /* Entire Work RAM*/
- PLTT_SIZE|||(2*256*2) /* Palette RAM*/
- BG_PLTT_SIZE|||(2*256) /* BG Palette RAM*/
- OBJ_PLTT_SIZE|||(2*256) /* OBJ Palette RAM*/
- VRAM_SIZE|||0x18000 /* VRAM*/
- BG_MODE0_VRAM_SIZE|||0x10000 /* BG Character/Screen*/
- BG_MODE1_VRAM_SIZE|||0x10000
- BG_MODE2_VRAM_SIZE|||0x10000
- BG_MODE3_VRAM_SIZE|||0x14000 /* BG Bitmap*/
- BG_MODE4_VRAM_SIZE|||0x0a000
- BG_MODE5_VRAM_SIZE|||0x0a000
- OBJ_MODE0_VRAM_SIZE|||0x08000 /* OBJ Character*/
- OBJ_MODE1_VRAM_SIZE|||0x08000
- OBJ_MODE2_VRAM_SIZE|||0x08000
- OBJ_MODE3_VRAM_SIZE|||0x04000
- OBJ_MODE4_VRAM_SIZE|||0x04000
- OBJ_MODE5_VRAM_SIZE|||0x04000
- OAM_SIZE|||(8*128) /* OAM*/
- ROM_BANK_SIZE|||0x02000000 /* ROM Bank*/
- ROM_BANK0_SIZE|||0x02000000 /* ROM Bank 0*/
- ROM_BANK1_SIZE|||0x02000000 /* ROM Bank 1*/
- ROM_BANK2_SIZE|||0x02000000 /* ROM Bank 2*/
- RAM_BANK_SIZE|||0x02000000 /* RAM Bank*/
- FLASH_1M_SIZE|||0x20000 /* 1M Flash Memory*/
- REG_IME|||(REG_BASE + 0x208) /* Interrupt Master Enable*/
- REG_IE|||(REG_BASE + 0x200) /* Interrupt Enable*/
- REG_IF|||(REG_BASE + 0x202) /* Interrupt Request*/
- REG_WAITCNT|||(REG_BASE + 0x204) /* Game Pak Wait Control*/
- REG_DISPCNT|||(REG_BASE + 0x0) /* Display Control*/
- REG_STAT|||(REG_BASE + 0x4) /* Status*/
- REG_VCOUNT|||(REG_BASE + 0x6) /* V Counter*/
- REG_MOSAIC|||(REG_BASE + 0x4c) /* Mosaic Size*/
- REG_BLDCNT|||(REG_BASE + 0x50) /* Blend Mode Control*/
- REG_BLDALPHA|||(REG_BASE + 0x52) /* Semi-transparent Parameter*/
- REG_BLDY|||(REG_BASE + 0x54) /* Brightness Change Parameter*/
- REG_WINCNT|||(REG_BASE + 0x40) /* Window Control*/
- REG_WIN0H|||(REG_BASE + 0x40) /* Window 0 Horizontal Area*/
- REG_WIN1H|||(REG_BASE + 0x42) /* Window 1 Horizontal Area*/
- REG_WIN0V|||(REG_BASE + 0x44) /* Window 0 Vertical Area*/
- REG_WIN1V|||(REG_BASE + 0x46) /* WIndow 1 Vertical Area*/
- REG_WININ|||(REG_BASE + 0x48) /* Internal Window Control*/
- REG_WIN0|||(REG_BASE + 0x48) /* Window 0 Control*/
- REG_WIN1|||(REG_BASE + 0x49) /* Window 1 Control*/
- REG_WINOUT|||(REG_BASE + 0x4a) /* External Window Control*/
- REG_OBJWIN|||(REG_BASE + 0x4b) /* OBJ Window Control*/
- REG_BGCNT|||(REG_BASE + 0x8) /* BG Control*/
- REG_BG0CNT|||(REG_BASE + 0x8) /* BG 0 Control*/
- REG_BG1CNT|||(REG_BASE + 0xa) /* BG 1 Control*/
- REG_BG2CNT|||(REG_BASE + 0xc) /* BG 2 Control*/
- REG_BG3CNT|||(REG_BASE + 0xe) /* BG 3 Control*/
- REG_BGOFS|||(REG_BASE + 0x10) /* BG Offset*/
- REG_BG0HOFS|||(REG_BASE + 0x10) /* BG 0 H Offset*/
- REG_BG0VOFS|||(REG_BASE + 0x12) /* BG 0 V Offset*/
- REG_BG1HOFS|||(REG_BASE + 0x14) /* BG 1 H Offset*/
- REG_BG1VOFS|||(REG_BASE + 0x16) /* BG 1 V Offset*/
- REG_BG2HOFS|||(REG_BASE + 0x18) /* BG 2 H Offset*/
- REG_BG2VOFS|||(REG_BASE + 0x1a) /* BG 2 V Offset*/
- REG_BG3HOFS|||(REG_BASE + 0x1c) /* BG 3 H Offset*/
- REG_BG3VOFS|||(REG_BASE + 0x1e) /* BG 3 V Offset*/
- REG_BG2AFFINE|||(REG_BASE + 0x20) /* BG 2 Affin Transformation Parameters*/
- REG_BG2PA|||(REG_BASE + 0x20) /* BG 2 Line Direction X Coordinate Difference*/
- REG_BG2PB|||(REG_BASE + 0x22) /* BG 3 Vertical Direction X Coordinate Difference*/
- REG_BG2PC|||(REG_BASE + 0x24) /* BG 2 Line Direction Y coordinate Difference*/
- REG_BG2PD|||(REG_BASE + 0x26) /* BG 2 Vertical Direction Y Coordinate Difference*/
- REG_BG2X|||(REG_BASE + 0x28) /* BG 2 Start X Coordinate*/
- REG_BG2X_L|||(REG_BASE + 0x28)
- REG_BG2X_H|||(REG_BASE + 0x2a)
- REG_BG2Y|||(REG_BASE + 0x2c) /* BG 2 Start Y Coordinate*/
- REG_BG2Y_L|||(REG_BASE + 0x2c)
- REG_BG2Y_H|||(REG_BASE + 0x2e)
- REG_BG3AFFINE|||(REG_BASE + 0x30) /* BG 3 Affin Transformation Parameters*/
- REG_BG3PA|||(REG_BASE + 0x30) /* BG 3 Line Direction X Coordinate Difference*/
- REG_BG3PB|||(REG_BASE + 0x32) /* BG 3 Vertical Direction X Coordinate Difference*/
- REG_BG3PC|||(REG_BASE + 0x34) /* BG 3 Line Direction Y Coordinate Difference*/
- REG_BG3PD|||(REG_BASE + 0x36) /* BG 3 Vertical Direction Y Coordinate Difference*/
- REG_BG3X|||(REG_BASE + 0x38) /* BG 3 Start X Coordinate*/
- REG_BG3X_L|||(REG_BASE + 0x38)
- REG_BG3X_H|||(REG_BASE + 0x3a)
- REG_BG3Y|||(REG_BASE + 0x3c) /* BG 3 Start Y Coordinate*/
- REG_BG3Y_L|||(REG_BASE + 0x3c)
- REG_BG3Y_H|||(REG_BASE + 0x3e)
- REG_SOUNDCNT|||(REG_BASE + 0x80) /* Sound Control*/
- REG_SOUNDCNT_L|||(REG_BASE + 0x80)
- REG_SOUNDCNT_H|||(REG_BASE + 0x82)
- REG_SOUNDCNT_X|||(REG_BASE + 0x84)
- REG_SOUNDBIAS|||(REG_BASE + 0x88) /* Sound BIAS*/
- REG_SOUND1CNT|||(REG_BASE + 0x60) /* Sound 1 Control*/
- REG_SOUND1CNT_L|||(REG_BASE + 0x60)
- REG_SOUND1CNT_H|||(REG_BASE + 0x62)
- REG_SOUND1CNT_X|||(REG_BASE + 0x64)
- REG_SOUND2CNT|||(REG_BASE + 0x68) /* Sound 2 Control*/
- REG_SOUND2CNT_L|||(REG_BASE + 0x68)
- REG_SOUND2CNT_H|||(REG_BASE + 0x6c)
- REG_SOUND3CNT|||(REG_BASE + 0x70) /* Sound 3 Control*/
- REG_SOUND3CNT_L|||(REG_BASE + 0x70)
- REG_SOUND3CNT_H|||(REG_BASE + 0x72)
- REG_SOUND3CNT_X|||(REG_BASE + 0x74)
- REG_SOUND4CNT|||(REG_BASE + 0x78) /* Sound 4 Control*/
- REG_SOUND4CNT_L|||(REG_BASE + 0x78)
- REG_SOUND4CNT_H|||(REG_BASE + 0x7c)
- REG_WAVE_RAM|||(REG_BASE + 0x90) /* Sound 3 Waveform RAM*/
- REG_WAVE_RAM0|||(REG_BASE + 0x90)
- REG_WAVE_RAM0_L|||(REG_BASE + 0x90)
- REG_WAVE_RAM0_H|||(REG_BASE + 0x92)
- REG_WAVE_RAM1|||(REG_BASE + 0x94)
- REG_WAVE_RAM1_L|||(REG_BASE + 0x94)
- REG_WAVE_RAM1_H|||(REG_BASE + 0x96)
- REG_WAVE_RAM2|||(REG_BASE + 0x98)
- REG_WAVE_RAM2_L|||(REG_BASE + 0x98)
- REG_WAVE_RAM2_H|||(REG_BASE + 0x9a)
- REG_WAVE_RAM3|||(REG_BASE + 0x9c)
- REG_WAVE_RAM3_L|||(REG_BASE + 0x9c)
- REG_WAVE_RAM3_H|||(REG_BASE + 0x9e)
- REG_FIFO|||(REG_BASE + 0xa0) /* Sound FIFO*/
- REG_FIFO_A|||(REG_BASE + 0xa0)
- REG_FIFO_A_L|||(REG_BASE + 0xa0)
- REG_FIFO_A_H|||(REG_BASE + 0xa2)
- REG_FIFO_B|||(REG_BASE + 0xa4)
- REG_FIFO_B_L|||(REG_BASE + 0xa4)
- REG_FIFO_B_H|||(REG_BASE + 0xa6)
- REG_DMA0|||(REG_BASE + 0xb0) /* DMA 0*/
- REG_DMA0SAD|||(REG_BASE + 0xb0) /* (Internal Memory -> */
- REG_DMA0SAD_L|||(REG_BASE + 0xb0)
- REG_DMA0SAD_H|||(REG_BASE + 0xb2)
- REG_DMA0DAD|||(REG_BASE + 0xb4)
- REG_DMA0DAD_L|||(REG_BASE + 0xb4)
- REG_DMA0DAD_H|||(REG_BASE + 0xb6)
- REG_DMA0CNT|||(REG_BASE + 0xb8)
- REG_DMA0CNT_L|||(REG_BASE + 0xb8)
- REG_DMA0CNT_H|||(REG_BASE + 0xba)
- REG_DMA1|||(REG_BASE + 0xbc) /* DMA 1*/
- REG_DMA1SAD|||(REG_BASE + 0xbc) /* (Internal Memory -> Sound */
- REG_DMA1SAD_L|||(REG_BASE + 0xbc)
- REG_DMA1SAD_H|||(REG_BASE + 0xbe)
- REG_DMA1DAD|||(REG_BASE + 0xc0)
- REG_DMA1DAD_L|||(REG_BASE + 0xc0)
- REG_DMA1DAD_H|||(REG_BASE + 0xc2)
- REG_DMA1CNT|||(REG_BASE + 0xc4)
- REG_DMA1CNT_L|||(REG_BASE + 0xc4)
- REG_DMA1CNT_H|||(REG_BASE + 0xc6)
- REG_DMA2|||(REG_BASE + 0xc8) /* DMA 2*/
- REG_DMA2SAD|||(REG_BASE + 0xc8) /* (Internal Memory -> Sound */
- REG_DMA2SAD_L|||(REG_BASE + 0xc8)
- REG_DMA2SAD_H|||(REG_BASE + 0xca)
- REG_DMA2DAD|||(REG_BASE + 0xcc)
- REG_DMA2DAD_L|||(REG_BASE + 0xcc)
- REG_DMA2DAD_H|||(REG_BASE + 0xce)
- REG_DMA2CNT|||(REG_BASE + 0xd0)
- REG_DMA2CNT_L|||(REG_BASE + 0xd0)
- REG_DMA2CNT_H|||(REG_BASE + 0xd2)
- REG_DMA3|||(REG_BASE + 0xd4) /* DMA 3*/
- REG_DMA3SAD|||(REG_BASE + 0xd4) /* (Game Pak/Internal Memory */
- REG_DMA3SAD_L|||(REG_BASE + 0xd4)
- REG_DMA3SAD_H|||(REG_BASE + 0xd6)
- REG_DMA3DAD|||(REG_BASE + 0xd8)
- REG_DMA3DAD_L|||(REG_BASE + 0xd8)
- REG_DMA3DAD_H|||(REG_BASE + 0xda)
- REG_DMA3CNT|||(REG_BASE + 0xdc)
- REG_DMA3CNT_L|||(REG_BASE + 0xdc)
- REG_DMA3CNT_H|||(REG_BASE + 0xde)
- REG_TM0CNT|||(REG_BASE + 0x100) /* Timer 0*/
- REG_TM0CNT_L|||(REG_BASE + 0x100)
- REG_TM0CNT_H|||(REG_BASE + 0x102)
- REG_TM1CNT|||(REG_BASE + 0x104) /* Timer 1*/
- REG_TM1CNT_L|||(REG_BASE + 0x104)
- REG_TM1CNT_H|||(REG_BASE + 0x106)
- REG_TM2CNT|||(REG_BASE + 0x108) /* Timer 2*/
- REG_TM2CNT_L|||(REG_BASE + 0x108)
- REG_TM2CNT_H|||(REG_BASE + 0x10a)
- REG_TM3CNT|||(REG_BASE + 0x10c) /* Timer 3*/
- REG_TM3CNT_L|||(REG_BASE + 0x10c)
- REG_TM3CNT_H|||(REG_BASE + 0x10e)
- REG_RCNT|||(REG_BASE + 0x134) /* General Input/Output Control*/
- REG_SIOCNT|||(REG_BASE + 0x128) /* Serial Communication Control*/
- REG_SIODATA8|||(REG_BASE + 0x12a) /* 8bit Serial Communication Data*/
- REG_SIODATA32|||(REG_BASE + 0x120) /* 32bit Serial Communication Data*/
- REG_SIOMLT_SEND|||(REG_BASE + 0x12a) /* Multi-play SIO Send Data*/
- REG_SIOMLT_RECV|||(REG_BASE + 0x120) /* Multi-play SIO Receive Data*/
- REG_SIOMULTI0|||(REG_BASE + 0x120)
- REG_SIOMULTI1|||(REG_BASE + 0x122)
- REG_SIOMULTI2|||(REG_BASE + 0x124)
- REG_SIOMULTI3|||(REG_BASE + 0x126)
- REG_JOYCNT|||(REG_BASE + 0x140) /* JOY Bus Communication Control*/
- REG_JOYSTAT|||(REG_BASE + 0x158) /* JOY Bus Status*/
- REG_JOY_RECV|||(REG_BASE + 0x150) /* JOY Bus Receive Data*/
- REG_JOY_RECV_L|||(REG_BASE + 0x150)
- REG_JOY_RECV_H|||(REG_BASE + 0x152)
- REG_JOY_TRANS|||(REG_BASE + 0x154) /* JOY Bus Send Data*/
- REG_JOY_TRANS_L|||(REG_BASE + 0x154)
- REG_JOY_TRANS_H|||(REG_BASE + 0x156)
- REG_KEYINPUT|||(REG_BASE + 0x130) /* Key Input*/
- REG_KEYCNT|||(REG_BASE + 0x132) /* Key Control*/
- OFFSET_REG_IME|||0x208 /* Interrupt Master Enable*/
- OFFSET_REG_IE|||0x200 /* Interrupt Enable*/
- OFFSET_REG_IF|||0x202 /* Interrupt Request*/
- OFFSET_REG_WAITCNT|||0x204 /* Game Pak Wait Control*/
- OFFSET_REG_DISPCNT|||0x0 /* Display Control*/
- OFFSET_REG_STAT|||0x4 /* Status*/
- OFFSET_REG_VCOUNT|||0x6 /* V Counter*/
- OFFSET_REG_MOSAIC|||0x4c /* Mosaic Size*/
- OFFSET_REG_BLDCNT|||0x50 /* Blend Mode Control*/
- OFFSET_REG_BLDALPHA|||0x52 /* Semi-trams[aremt Parameter*/
- OFFSET_REG_BLDY|||0x54 /* Brightness Change Parameter*/
- OFFSET_REG_WINCNT|||0x40 /* Window Control*/
- OFFSET_REG_WIN0H|||0x40 /* Window 0 Horizontal Area*/
- OFFSET_REG_WIN1H|||0x42 /* Window 1 Horizontal Area*/
- OFFSET_REG_WIN0V|||0x44 /* Window 0 Vertical Area*/
- OFFSET_REG_WIN1V|||0x46 /* Window 1 Vertical Area*/
- OFFSET_REG_WININ|||0x48 /* Internal Window Control*/
- OFFSET_REG_WIN0|||0x48 /* Window 0 Control*/
- OFFSET_REG_WIN1|||0x49 /* Window 1 Control*/
- OFFSET_REG_WINOUT|||0x4a /* External Window Control*/
- OFFSET_REG_OBJWIN|||0x4b /* OBJ Window Control*/
- OFFSET_REG_BGCNT|||0x8 /* BG Control*/
- OFFSET_REG_BG0CNT|||0x8 /* BG 0 Control*/
- OFFSET_REG_BG1CNT|||0xa /* BG 1 Control*/
- OFFSET_REG_BG2CNT|||0xc /* BG 2 Control*/
- OFFSET_REG_BG3CNT|||0xe /* BG 3 Control*/
- OFFSET_REG_BGOFS|||0x10 /* BG Offset*/
- OFFSET_REG_BG0HOFS|||0x10 /* BG 0 H Offset*/
- OFFSET_REG_BG0VOFS|||0x12 /* BG 0 V Offset*/
- OFFSET_REG_BG1HOFS|||0x14 /* BG 1 H Offset*/
- OFFSET_REG_BG1VOFS|||0x16 /* BG 1 V Offset*/
- OFFSET_REG_BG2HOFS|||0x18 /* BG 2 H Offset*/
- OFFSET_REG_BG2VOFS|||0x1a /* BG 2 V Offset*/
- OFFSET_REG_BG3HOFS|||0x1c /* BG 3 H Offset*/
- OFFSET_REG_BG3VOFS|||0x1e /* BG 3 V Offset*/
- OFFSET_REG_BG2AFFINE|||0x20 /* BG 2 Affin Transformation Parameters*/
- OFFSET_REG_BG2PA|||0x20 /* BG 2 Line Direction X Coordinate Difference*/
- OFFSET_REG_BG2PB|||0x22 /* BG 2 Vertical Direction X Coordinate Difference*/
- OFFSET_REG_BG2PC|||0x24 /* BG 2 Line Direction Y Coordinate Difference*/
- OFFSET_REG_BG2PD|||0x26 /* BG 2 Vertical Direction Y Coordinate Difference*/
- OFFSET_REG_BG2X|||0x28 /* BG 2 Start X Coordinate*/
- OFFSET_REG_BG2X_L|||0x28
- OFFSET_REG_BG2X_H|||0x2a
- OFFSET_REG_BG2Y|||0x2c /* BG 2 Start Y Coordinate*/
- OFFSET_REG_BG2Y_L|||0x2c
- OFFSET_REG_BG2Y_H|||0x2e
- OFFSET_REG_BG3AFFINE|||0x30 /* BG 3 Affin Transformation Parameters*/
- OFFSET_REG_BG3PA|||0x30 /* BG 3 Line Direction X Coordinate Difference*/
- OFFSET_REG_BG3PB|||0x32 /* BG 3 Vertical Direction X Coordinate Difference*/
- OFFSET_REG_BG3PC|||0x34 /* BG 3 Line Direction Y Coordinate Difference*/
- OFFSET_REG_BG3PD|||0x36 /* BG 3 Vertical Direction Y Coordinate Difference*/
- OFFSET_REG_BG3X|||0x38 /* BG 3 Start X Coordinate*/
- OFFSET_REG_BG3X_L|||0x38
- OFFSET_REG_BG3X_H|||0x3a
- OFFSET_REG_BG3Y|||0x3c /* BG 3 Start Y Coordinate*/
- OFFSET_REG_BG3Y_L|||0x3c
- OFFSET_REG_BG3Y_H|||0x3e
- OFFSET_REG_SOUNDCNT|||0x80 /* Sound Control*/
- OFFSET_REG_SOUNDCNT_L|||0x80
- OFFSET_REG_SOUNDCNT_H|||0x82
- OFFSET_REG_SOUNDCNT_X|||0x84
- OFFSET_REG_SOUNDBIAS|||0x88 /* Sound BIAS*/
- OFFSET_REG_SOUND1CNT|||0x60 /* Sound 1 Control*/
- OFFSET_REG_SOUND1CNT_L|||0x60
- OFFSET_REG_SOUND1CNT_H|||0x62
- OFFSET_REG_SOUND1CNT_X|||0x64
- OFFSET_REG_SOUND2CNT|||0x68 /* Sound 2 Control*/
- OFFSET_REG_SOUND2CNT_L|||0x68
- OFFSET_REG_SOUND2CNT_H|||0x6c
- OFFSET_REG_SOUND3CNT|||0x70 /* Sound 3 Control*/
- OFFSET_REG_SOUND3CNT_L|||0x70
- OFFSET_REG_SOUND3CNT_H|||0x72
- OFFSET_REG_SOUND3CNT_X|||0x74
- OFFSET_REG_SOUND4CNT|||0x78 /* Sound 4 Control*/
- OFFSET_REG_SOUND4CNT_L|||0x78
- OFFSET_REG_SOUND4CNT_H|||0x7c
- OFFSET_REG_WAVE_RAM|||0x90 /* Sound 3 Waveform RAM*/
- OFFSET_REG_WAVE_RAM0|||0x90
- OFFSET_REG_WAVE_RAM0_L|||0x90
- OFFSET_REG_WAVE_RAM0_H|||0x92
- OFFSET_REG_WAVE_RAM1|||0x94
- OFFSET_REG_WAVE_RAM1_L|||0x94
- OFFSET_REG_WAVE_RAM1_H|||0x96
- OFFSET_REG_WAVE_RAM2|||0x98
- OFFSET_REG_WAVE_RAM2_L|||0x98
- OFFSET_REG_WAVE_RAM2_H|||0x9a
- OFFSET_REG_WAVE_RAM3|||0x9c
- OFFSET_REG_WAVE_RAM3_L|||0x9c
- OFFSET_REG_WAVE_RAM3_H|||0x9e
- OFFSET_REG_FIFO|||0xa0 /* Sound FIFO*/
- OFFSET_REG_FIFO_A|||0xa0
- OFFSET_REG_FIFO_A_L|||0xa0
- OFFSET_REG_FIFO_A_H|||0xa2
- OFFSET_REG_FIFO_B|||0xa4
- OFFSET_REG_FIFO_B_L|||0xa4
- OFFSET_REG_FIFO_B_H|||0xa6
- OFFSET_REG_DMA0|||0xb0 /* DMA 0*/
- OFFSET_REG_DMA0SAD|||0xb0 /* (Internal Memory -> Internal */
- OFFSET_REG_DMA0SAD_L|||0xb0
- OFFSET_REG_DMA0SAD_H|||0xb2
- OFFSET_REG_DMA0DAD|||0xb4
- OFFSET_REG_DMA0DAD_L|||0xb4
- OFFSET_REG_DMA0DAD_H|||0xb6
- OFFSET_REG_DMA0CNT|||0xb8
- OFFSET_REG_DMA0CNT_L|||0xb8
- OFFSET_REG_DMA0CNT_H|||0xba
- OFFSET_REG_DMA1|||0xbc /* DMA 1*/
- OFFSET_REG_DMA1SAD|||0xbc /* (Internal Memory -> Sound */
- OFFSET_REG_DMA1SAD_L|||0xbc
- OFFSET_REG_DMA1SAD_H|||0xbe
- OFFSET_REG_DMA1DAD|||0xc0
- OFFSET_REG_DMA1DAD_L|||0xc0
- OFFSET_REG_DMA1DAD_H|||0xc2
- OFFSET_REG_DMA1CNT|||0xc4
- OFFSET_REG_DMA1CNT_L|||0xc4
- OFFSET_REG_DMA1CNT_H|||0xc6
- OFFSET_REG_DMA2|||0xc8 /* DMA 2*/
- OFFSET_REG_DMA2SAD|||0xc8 /* (Internal Memory -> Sound */
- OFFSET_REG_DMA2SAD_L|||0xc8
- OFFSET_REG_DMA2SAD_H|||0xca
- OFFSET_REG_DMA2DAD|||0xcc
- OFFSET_REG_DMA2DAD_L|||0xcc
- OFFSET_REG_DMA2DAD_H|||0xce
- OFFSET_REG_DMA2CNT|||0xd0
- OFFSET_REG_DMA2CNT_L|||0xd0
- OFFSET_REG_DMA2CNT_H|||0xd2
- OFFSET_REG_DMA3|||0xd4 /* DMA 3*/
- OFFSET_REG_DMA3SAD|||0xd4 /* (Game Pak/Internal Memory */
- OFFSET_REG_DMA3SAD_L|||0xd4
- OFFSET_REG_DMA3SAD_H|||0xd6
- OFFSET_REG_DMA3DAD|||0xd8
- OFFSET_REG_DMA3DAD_L|||0xd8
- OFFSET_REG_DMA3DAD_H|||0xda
- OFFSET_REG_DMA3CNT|||0xdc
- OFFSET_REG_DMA3CNT_L|||0xdc
- OFFSET_REG_DMA3CNT_H|||0xde
- OFFSET_REG_TM0CNT|||0x100 /* Timer 0*/
- OFFSET_REG_TM0CNT_L|||0x100
- OFFSET_REG_TM0CNT_H|||0x102
- OFFSET_REG_TM1CNT|||0x104 /* Timer 1*/
- OFFSET_REG_TM1CNT_L|||0x104
- OFFSET_REG_TM1CNT_H|||0x106
- OFFSET_REG_TM2CNT|||0x108 /* Timer 2*/
- OFFSET_REG_TM2CNT_L|||0x108
- OFFSET_REG_TM2CNT_H|||0x10a
- OFFSET_REG_TM3CNT|||0x10c /* Timer 3*/
- OFFSET_REG_TM3CNT_L|||0x10c
- OFFSET_REG_TM3CNT_H|||0x10e
- OFFSET_REG_RCNT|||0x134 /* General Input/Output Control*/
- OFFSET_REG_SIOCNT|||0x128 /* Serial Communication Control*/
- OFFSET_REG_SIODATA8|||0x12a /* 8 bit Serial Communication Data*/
- OFFSET_REG_SIODATA32|||0x120 /* 32 bit Serial Communication Data*/
- OFFSET_REG_SIOMLT_SEND|||0x12a /* Multi-play SIO Send Data*/
- OFFSET_REG_SIOMLT_RECV|||0x120 /* Multi-play SIO Receive Data*/
- OFFSET_REG_SIOMULTI0|||0x120
- OFFSET_REG_SIOMULTI1|||0x122
- OFFSET_REG_SIOMULTI2|||0x124
- OFFSET_REG_SIOMULTI3|||0x126
- OFFSET_REG_JOYCNT|||0x140 /* JOY Bus Communication Control*/
- OFFSET_REG_JOYSTAT|||0x158 /* JOY Bus Status*/
- OFFSET_REG_JOY_RECV|||0x150 /* JOY Bus Receive Data*/
- OFFSET_REG_JOY_RECV_L|||0x150
- OFFSET_REG_JOY_RECV_H|||0x152
- OFFSET_REG_JOY_TRANS|||0x154 /* JOY Bus Send Data*/
- OFFSET_REG_JOY_TRANS_L|||0x154
- OFFSET_REG_JOY_TRANS_H|||0x156
- OFFSET_REG_KEYINPUT|||0x130 /* Key Input*/
- OFFSET_REG_KEYCNT|||0x132 /* Key Control*/
{% endcapture %}

{% capture card_1_4_items %}
- MULTIBOOT_NCHILD|||3 /* Maximum number of slaves*/
- MULTIBOOT_HEADER_SIZE|||0xc0 /* Header size*/
- MULTIBOOT_SEND_SIZE_MIN|||0x100 /* Minimum transmission size*/
- MULTIBOOT_SEND_SIZE_MAX|||0x40000 /* Maximum transmission size*/
- MULTIBOOT_ERROR_04|||0x04
- MULTIBOOT_ERROR_08|||0x08
- MULTIBOOT_ERROR_0c|||0x0c
- MULTIBOOT_ERROR_40|||0x40
- MULTIBOOT_ERROR_44|||0x44
- MULTIBOOT_ERROR_48|||0x48
- MULTIBOOT_ERROR_4c|||0x4c
- MULTIBOOT_ERROR_80|||0x80
- MULTIBOOT_ERROR_84|||0x84
- MULTIBOOT_ERROR_88|||0x88
- MULTIBOOT_ERROR_8c|||0x8c
- MULTIBOOT_ERROR_NO_PROBE_TARGET|||0x50
- MULTIBOOT_ERROR_NO_DLREADY|||0x60
- MULTIBOOT_ERROR_BOOT_FAILURE|||0x70
- MULTIBOOT_ERROR_HANDSHAKE_FAILURE|||0x71
- MULTIBOOT_CONNECTION_CHECK_WAIT|||15
- MULTIBOOT_SERVER_TYPE_NORMAL|||0
- MULTIBOOT_SERVER_TYPE_QUICK|||1
- MULTIBOOT_HANDSHAKE_TIMEOUT|||400
{% endcapture %}

{% capture card_1_5_items %}
- vl|||volatile
- ST_PSR_USER_MODE|||0x10 /* User*/
- ST_PSR_FIQ_MODE|||0x11 /* FIQ*/
- ST_PSR_IRQ_MODE|||0x12 /* IRQ*/
- ST_PSR_SVC_MODE|||0x13 /* Supervisor*/
- ST_PSR_ABORT_MODE|||0x17 /* Abort (pre-fetch/data)*/
- ST_PSR_UNDEF_MODE|||0x1b /* Undefined command*/
- ST_PSR_SYS_MODE|||0x1f /* System*/
- ST_DISP_OBJ_CHAR_2D_MAP|||0 /* OBJ character data 2D mapping*/
- ST_DISP_OBJ_CHAR_1D_MAP|||1 /* OBJ character data 1D mapping*/
- ST_BLD_NORMAL_MODE|||0 /* Normal mode*/
- ST_BLD_A_BLEND_MODE|||1 /* Translucent mode*/
- ST_BLD_UP_MODE|||2 /* Brighness UP mode*/
- ST_BLD_DOWN_MODE|||3 /* Brightness DOWN mode*/
- ST_BG_COLOR_16|||0 /* Select 16 colors*/
- ST_BG_COLOR_256|||1 /* Select 256 colors*/
- ST_OAM_OBJ_NORMAL|||0 /* OBJ normal mode*/
- ST_OAM_OBJ_BLEND|||1 /* OBJ translucent mode*/
- ST_OAM_OBJ_WINDOW|||2 /* OBJ window mode*/
- ST_OAM_AFFINE_NONE|||0 /* Affine invalid mode*/
- ST_OAM_AFFINE_NORMAL|||1 /* Affine normal mode*/
- ST_OAM_AFFINE_TWICE|||3 /* Affine double angle mode*/
- ST_OAM_AFFINE_ERASE|||2 /* Affine non-display mode*/
- ST_OAM_COLOR_16|||0 /* Select 16 colors*/
- ST_OAM_COLOR_256|||1 /* Select 256 colors*/
- ST_OAM_SQUARE|||0 /* Square OBJ*/
- ST_OAM_H_RECTANGLE|||1 /* Horizontally-oriented rectangle OBJ*/
- ST_OAM_V_RECTANGLE|||2 /* Vertically-oriented rectangle OBJ*/
- ST_SOUND_DMG_MIX_1_4|||0 /* DMG compatible sound mixing ratio 1/4*/
- ST_SOUND_DMG_MIX_2_4|||1 /* 2/4*/
- ST_SOUND_DMG_MIX_FULL|||2 /* full range*/
- ST_SOUND_DIRECT_MIX_1_2|||0 /* Direct sound mixing ratio 1/2*/
- ST_SOUND_DIRECT_MIX_FULL|||1 /* full range*/
- ST_SOUND_SWEEP_UP|||0 /* Sweep addition*/
- ST_SOUND_SWEEP_DOWN|||1 /* subtraction*/
- ST_SOUND_DUTY_1_8|||0 /* Waveform duty 1/8*/
- ST_SOUND_DUTY_2_8|||1 /* 2/8*/
- ST_SOUND_DUTY_4_8|||2 /* 4/8*/
- ST_SOUND_DUTY_6_8|||3 /* 6/8*/
- ST_SOUND_ENV_UP|||1 /* Envelope UP*/
- ST_SOUND_ENV_DOWN|||0 /* DOWN*/
- ST_SOUND_3_LEVEL_0_4|||0 /* No sound 3 output*/
- ST_SOUND_3_LEVEL_FULL|||1 /* 4/4*/
- ST_SOUND_3_LEVEL_2_4|||2 /* 2/4*/
- ST_SOUND_3_LEVEL_1_4|||3 /* 1/4*/
- ST_SOUND_3_LEVEL_3_4|||4 /* 3/4*/
- ST_SOUND_4_POLYSTEP_15|||0 /* Sound 4 polynomical counter 15 steps*/
- ST_SOUND_4_POLYSTEP_7|||1 /* 7 steps*/
- ST_SIO_8BIT_MODE|||0 /* Normal 8-bit communication mode*/
- ST_SIO_32BIT_MODE|||1 /* Normal 32-bit communication mode*/
- ST_SIO_SCK_OUT|||0 /* Select external clock*/
- ST_SIO_SCK_IN|||1 /* Select internal clock*/
- ST_SIO_IN_SCK_256K|||0 /* Select internal clock 256KHz*/
- ST_SIO_IN_SCK_2M|||1 /* Select 2MHz */
- ST_SIO_MULTI_MODE|||2 /* Multi-play communication mode*/
- ST_SIO_9600_BPS|||0 /* Baud rate 9600 bps*/
- ST_SIO_38400_BPS|||1 /* 38400 bps*/
- ST_SIO_57600_BPS|||2 /* 57600 bps*/
- ST_SIO_115200_BPS|||3 /* 115200 bps*/
- ST_SIO_MULTI_PARENT|||1 /* Multi-play communication Connect master*/
- ST_SIO_MULTI_CHILD|||0 /* Connect slave*/
- ST_SIO_UART_MODE|||3 /* UART communication mode*/
- ST_SIO_UART_7BIT|||0 /* UART communication data length 7 bits*/
- ST_SIO_UART_8BIT|||1 /* 8 bits*/
- ST_SIO_PARITY_EVEN|||0 /* Even parity*/
- ST_SIO_PARITY_ODD|||1 /* Odd parity*/
- ST_R_SIO_MASTER_MODE|||0 /* SIO master mode*/
- ST_R_DIRECT_MODE|||2 /* General input/output communication mode*/
- ST_R_JOY_MODE|||3 /* JOY communication mode*/
- ST_R_IN|||0 /* Select input*/
- ST_R_OUT|||1 /* Select output*/
- ST_DMA_TIMMING_IMM|||0 /* Start immediately*/
- ST_DMA_TIMMING_V_BLANK|||1 /* Start V blank*/
- ST_DMA_TIMMING_H_BLANK|||2 /* Start H blank*/
- ST_DMA_TIMMING_DISP|||3 /* Start display*/
- ST_DMA_TIMMING_SOUND|||3 /* Start sound FIFO request*/
- ST_DMA_16BIT_BUS|||0 /* Select bus size 16 bits*/
- ST_DMA_32BIT_BUS|||1 /* Select bus size 32 bits*/
- ST_DMA_INC|||0 /* Select address increment*/
- ST_DMA_DEC|||1 /* Select address decrement*/
- ST_DMA_FIX|||2 /* Select address fix*/
- ST_DMA_RELOAD|||3 /* Select address increment/reload*/
- ST_TMR_PRESCALER_1CK|||0 /* Prescaler 1 clock*/
- ST_TMR_PRESCALER_64CK|||1 /* 64 clocks*/
- ST_TMR_PRESCALER_256CK|||2 /* 256 clocks*/
- ST_TMR_PRESCALER_1024CK|||3 /* 1024 clocks*/
- ST_KEY_OR_INTR|||0 /* Normal key interrupt*/
- ST_KEY_AND_INTR|||1 /* AND key interrupt*/
- ST_CST_SRAM_4WAIT|||0 /* SRAM 4 wait*/
- ST_CST_SRAM_3WAIT|||1 /* 3 wait*/
- ST_CST_SRAM_2WAIT|||2 /* 2 wait*/
- ST_CST_SRAM_8WAIT|||3 /* 8 wait*/
- ST_CST_ROM_1ST_4WAIT|||0 /* ROM 1st 4 wait*/
- ST_CST_ROM_1ST_3WAIT|||1 /* 3 wait*/
- ST_CST_ROM_1ST_2WAIT|||2 /* 2 wait*/
- ST_CST_ROM_1ST_8WAIT|||3 /* 8 wait*/
- ST_CST_ROM0_2ND_2WAIT|||0 /* ROM 0 2nd 2 wait*/
- ST_CST_ROM0_2ND_1WAIT|||1 /* 1 wait*/
- ST_CST_ROM1_2ND_4WAIT|||0 /* ROM 1 2nd 4 wait*/
- ST_CST_ROM1_2ND_1WAIT|||1 /* 1 wait*/
- ST_CST_ROM2_2ND_8WAIT|||0 /* ROM 2 2nd 8 wait*/
- ST_CST_ROM2_2ND_1WAIT|||1 /* 1 wait*/
- ST_CST_PHI_OUT_NONE|||0 /* terminal output clock Lo fix*/
- ST_CST_PHI_OUT_4MCK|||1 /* 4MHz*/
- ST_CST_PHI_OUT_8MCK|||2 /* 8MHz*/
- ST_CST_PHI_OUT_16MCK|||3 /* 16MHz*/
- ST_CST_AGB|||0 /* AGB game pak*/
- ST_CST_CGB|||1 /* CGB game pak*/
{% endcapture %}

{% capture card_1_6_items %}
- void|||AGBPrintInit|||()
- void|||AGBPutc|||(char const)
- void|||AGBPrint|||(char const*)
- void|||AGBPrintf|||(char const*,...)
- void|||AGBPrintFlush1Block|||()
- void|||AGBPrintFlush|||()
- void|||AGBAssert|||(char const*,int,char const*,int)
- AGB_ASSERT()|||(exp) ? ((void*)0) : AGBAssert(__FILE__, __LINE__, #exp, 1);
- AGB_WARNING()|||(exp) ? ((void*)0) : AGBAssert(__FILE__, __LINE__, #exp, 0);
{% endcapture %}

{% capture section_1_cards %}
{% include source-code-card.html title="AgbDefine.h" items=card_1_1_items functions="0" variables="0" lines="710" %}
{% include source-code-card.html title="AgbIr.h" items=card_1_2_items functions="13" variables="0" lines="251" %}
{% include source-code-card.html title="AgbMemoryMap.h" items=card_1_3_items functions="0" variables="0" lines="509" %}
{% include source-code-card.html title="AgbMultiBoot.h" items=card_1_4_items functions="0" variables="0" lines="126" %}
{% include source-code-card.html title="AgbTypes.h" items=card_1_5_items functions="0" variables="0" lines="729" %}
{% include source-code-card.html title="IsAgbPrint.h" items=card_1_6_items functions="7" variables="0" lines="161" %}
{% endcapture %}

{% include source-code-card-grid.html title="API Header Files" content=section_1_cards %}

 <!-- cspell:enable -->

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

{% capture card_2_1_items %}
- dacsType const*|||dacs
- u32|||dacs_remainder
- u16|||IdentifyDacs|||()
- u16|||SetDacsTimerIntr|||(u8,void(**)())
- u32|||ExchangeSectorToPhysAdr|||(u16)
- u32|||ExchangePhysAdrToSector|||(u32)
- void|||ReadDacs|||(u16,u32,u16*,u32)
- u16|||EraseDacsChip|||()
- u16|||EraseDacsSector|||(u16)
- u16|||ProgramDacs_NE|||(u16,u32,u16*,u32)
- u16|||ProgramDacsSector|||(u16,u16*)
- u32|||VerifyDacs|||(u16,u16,u16*,u32)
- u32|||VerifyDacsSector|||(u16,u16*)
{% endcapture %}

{% capture card_2_2_items %}
- void|||ReadSram|||(u8*,u8*,u32)
- void|||WriteSram|||(u8*,u8*,u32)
- u32|||VerifySram|||(u8*,u8*,u32)
- SRAM_ADR|||0x0e000000 /* SRAM Start Address*/
- SRAM_SIZE_256K|||0x00008000 /* 256KSRAM*/
- SRAM_SIZE_512K|||0x00010000 /* 512KSRAM */
{% endcapture %}

{% capture card_2_3_items %}
- void|||SetSramFastFunc|||()
- void(*)(u8*,u8*,u32)|||ReadSramFast
- void|||WriteSramFast|||(u8*,u8*,u32)
- u32(*)(u8*,u8*,u32)|||VerifySramFast
- SRAM_ADR|||0x0e000000 /* SRAM Start Address*/
- SRAM_SIZE_256K|||0x00008000 /* 256KSRAM*/
- SRAM_SIZE_512K|||0x00010000 /* 512KSRAM*/
{% endcapture %}

{% capture section_2_cards %}
{% include source-code-card.html title="AgbDacs.h" items=card_2_1_items functions="11" variables="2" lines="364" %}
{% include source-code-card.html title="AgbSram.h" items=card_2_2_items functions="3" variables="0" lines="87" %}
{% include source-code-card.html title="AgbSramFast.h" items=card_2_3_items functions="2" variables="2" lines="103" %}
{% endcapture %}

{% include source-code-card-grid.html title="Backup Library Header Files" content=section_2_cards %}

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
