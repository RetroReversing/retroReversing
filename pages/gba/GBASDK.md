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

It is 163 pages explaining pretty much everything you need to know to start programming for the GBA hardware:
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
The AGB Infrared Communication Programming guide is available in both PDF format (**AGBInfraredCommProgGuide.PDF**) and HTML format (/AllManual/ir) and covers programming for use with the Infrared Adapter.

The GBA Infrared Adapter (**AGB-006**) was an accessory that was released 2 years after the GBA and only ever used in 1 Japanese game called **Cyber Drive Zoids**.

As the hardware is now quite rare and it was only ever used for one game this documentation will most likely not be useful to anyone reverse engineering or creating a new GBA game.

However **Shonumi** has written an excellent Edge of Emulation article on implementing an emulated version of the Infrared adaptor and even created a virtual Zoid (Robot):

{% include link-to-other-site.html url="" description="Check out the Edge of Emulation article on emulating the GBA Infrared Adapter" image="https://shonumi.github.io/articles/zoids_1.png" title="Edge of Emulation: GBA Infrared Adapter"  %}

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
The Sound developer's Manual is HTML-based documentation found in the **/AllManual/musicplayer/sound_dev** folder and is tailored towards the sound engineer.

The documentation for the Sound and Music library is covered in its own post specifically for this functionality, it is recommended you read it here:

{% include link-to-other-post.html post="/game-boy-advance-sdk-m4a/" description="For more information about the GBA Music Library check out this post." %}

---
## Other Documentation (/AllManual/others)
This folder contains the following subsections:
* **Converter** - Documentation for the agbcomp and bmp2agb tools
* **Converter (old)** - Documentation for the tools: act2agb, agbparts, bin2h, bmp2bin, bmpgrid, bmpred and sgi2bmp
* **Function Sample** - Documentation for the sample projects in the src folder that show off certain functions such as Alpha Blending
* **Sample Demo** - Documentation for the two demo games: Yoshi and Dolphin


### Iruka (Dolphin) Demo Documentaton (/AllManual/others/demo/Iruka)
This folder contains documentation for the demo Dolphin game included in the **/src** folder and even includes UML-like Flow diagrams for the main game logic!

---
#### Yoshi Demo Documentation (/AllManual/others/demo/yoshi)
This folder contains documentation for the Yoshi Demo project including the basics of how to play and the technology involved in its creation.

{% include link-to-other-post.html post="/game-boy-advance-sdk-demos/" description="For more information about the GBA SDK Demos check out this post." %}

---
### Function Sample Documentation (/AllManual/others/func_sample)
This folder contains 

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
This folder contains 

File Name | Extension | Description
---|---|---
Agb | .h | Include file for declaring 
AgbDefine | .h, .s | 
AgbDefineArm | .s | 
AgbIr | .h | Include file for declaring 
AgbMacro | .h, .s | 
AgbMacroArm | .s | 
AgbMemoryMap | .h, .s | 
AgbMemoryMapArm | .s | 
AgbMultiBoot | .h | Include file for declaring 
AgbSound | .h | Include file for declaring 
AgbSyscallDefine | .s | 
AgbSyscallDefineArm | .s | 
AgbSystemCall | .h | Include file for declaring 
AgbTypes | .h | Include file for declaring 
IsAgbPrint | .h | Include file for declaring 

<section class="rr-main-cards"><div class="rr-source-code-title">Code Files</div>
<div class="rr-file-card">
  <img class="geopattern" data-title="AgbDefine.h" />
  <h3>AgbDefine.h</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">251</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbMemoryMap.h" />
  <h3>AgbMemoryMap.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">509</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbMultiBoot.h" />
  <h3>AgbMultiBoot.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">126</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="AgbTypes.h" />
  <h3>AgbTypes.h</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">161</div>  </div>
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

<section class="rr-main-cards"><div class="rr-source-code-title">Backup Library Header Files</div>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">103</div>  </div>
</div>

</section>

---
# API Libraries (/lib folder)
There are two types of library in this folder *.a and *.alf.

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
