---
layout: post
tags: 
- wii
- leak
title: Nintendo Emerald Leak  
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/leaks/EmeraldLeak.jpg
permalink: /emeraldleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Nintendo Emerald Leak 
    url: #
recommend: 
- wii
- leak
editlink: /leaks/Emerald.md
twitterimage: https://www.retroreversing.com/public/images/leaks/EmeraldLeak.jpg
---
The Emerald leak occurred on the 2nd of September 2020 and included about 700MB of content related to the Wii and gamecube. So this would not quite qualify as a "Gigaleak" but it was definitely from the same source as the Gigaleak.

{% include link-to-other-post.html post="/gigaleak" description="For more information on the original Gigaleak check out this post." %}

Most notably it contains the ATI Wii Verilog files for **Vegas** (part of the Hollywood graphics chip) and of course the source code to Pokemon Emerald.

# Files Leaked
* emeralds.7z (742MB)

# Contents of emeralds.7z
When extracted the emerald archive has the following sub archives inside it:
* **BOOT-DIAG.7z** - Nintendo Wii software for Boot Diagnosis
* **RVL-FFWP.7z** - Wii VC - Donkey Kong: Original Edition (PAL)
* **RVL-RAAE.7z** - Wii Startup Disc
* **RVL-WTester.7z** - Wii Wifi Tester application
* **pm_eme_ose.7z** - Pokemon Emerald source code
* **tako_main_052306.tgz** - ATI Verilog files & Build environment for the Hollywood Graphics chip (Vegas/Tako)

---
# Nintendo Wii Boot Diagnostic Application (emeralds.7z/BOOT-DIAG.7z)
When extracted the files and folders contained are:
* for246 - contains BOOT_DIAG v0 for system menu version 246
* for4 - contains BOOT_DIAG v0 for system menu version 4
* properties - Meta Data for the BOOT_DIAG app
* v100 - empty folder
* v193 - Just contains **systemmenu.rvl.116.3.wad**
* v0 -  Version 0 of BOOT_DIAG app
* v2 - Version 2 of BOOT_DIAG app

The folders beginning with "for" are referring to the System Menu version, so "for4" folder contains the **BOOT-DIAG-** files for version 4 of the System menu (**systemmenu.rvl.116.4.wad**).

System menu WAD files included:
* systemmenu.rvl.116.3.wad
* systemmenu.rvl.116.4.wad
* systemmenu.rvl.116.246.wad

There are two different versions of the BOOT-DIAG application, v0 and v2, no idea what happened to v1 but it wasn't included.

Files included:
* BOOT-DIAG-v0.cls - Actually a zip file
* BOOT-DIAG-v0.wad.out
* BOOT-DIAG-v2.cls
* BOOT-DIAG-v2.wad.out

---
# Donkey Kong: Original Edition (emeralds.7z/RVL-FFWP.7z)
This archive only contains 2 files in it:
* **FFWP000.wad** - non-working WAD file (at least in dolphin)
* **RVL-FFWP-v0.wad.out** - working WAD file

The name **FFWP** is the product ID for the NES Virtual Console game Donkey Kong: Original Edition. 

The strange thing is that the .wad file doesn't load in dolphin but if you rename the .out file to .wad it works fine in Dolphin!

It would be interest to check if this WAD file contains anything that is not in the retail release.

---
# Wii Startup Disc (emeralds.7z/RVL-RAAE.7z)
This archive contains a few files related to the Wii Startup Disc.

Contains the following files:
* RVL-RAAE-v0.cls
* RVL-RAAE-v0.prod_part
* main-sync.dev_part

Honestly not sure what these files are exactly, but the product code "RVL-RAAE" matches the code for the Wii Startup Disc.

For More information about the Wii Startup Disc check out the page on WiiBrew: 
[Wii Startup Disc - WiiBrew](https://wiibrew.org/wiki/Wii_Startup_Disc)

Although to be honest these files aren't as interesting as the Wii Startup Disc dump in the Platinum leak which contains the full **.gcm** file.

{% include link-to-other-post.html post="/platinumleak" description="For more information on the Platinum Leak check out this post." %}

---
#  WifiTester (emeralds.7z/RVL-WTester.7z)
The contents of this archive are as follows:
* RVL-WTester-v0.cls
* RVL-WTester-v0.wad.out
* WTester.3.wad
* forIOS36 - same files as above but for IOS version 36

This doesn't seem to install in Dolphin so it can't be confirmed if it is a WifiTester application. But it is definitely an application for the Wii.

---
# Vegas/Tako (Hollywood) (emeralds.7z/tako_main_052306.tgz)
The archive **tako_main_052306.tgz** has been created by ATI, another company responsible for working on the Nintendo Wii. We already have leaked Verilog files from the company BroadOn previously, so when joined with these files you have a more complete picture of the entire Wii Verilog source code.

{% include link-to-other-post.html post="/broadon-archive" description="For more information on the BroadOn Verilog files check out this post." %}


This archive contains the hardware Verilog source code for the ArtX (ATI) Hollywood graphics processor. Specifically the Vegas portion which is the core of the Chip, note that the project was previously called **Tako** (after the sushi), the name change is noted in the index.html file in the web documentation.

<img src="/public/images/wii/Wii Hollywood Graphics - Vegas and Napa.jpg" class="wow slideInLeft postImage" style="height: 120px;width: 100%;margin-bottom: 20px;margin-top: 20px;" />

Other sources are calling **Tako** a portable Gamecube project, however this is incorrect, there are a few documents talking about a hybrid portable gamecube however this was under the **NNGC** or **GC Portable** name and not related to **Tako** (apart from Tako being encluded as the Graphics processor).

For more information about the Portable Gamecube see the section later on in this page.

This is similar to the previously leaked verilog files for the Nintendo 64 as it contains much of the same tools, even includes a C simulator (csim) version of the verilog hardware.

When the archive has been extracted it has the following folders:
* **bw** - broadway source files
* **doc** - documentation for the project
* **hdk** - Hardware development kit
* **hw** - Hardware spec files (verilog)
* **test** - C source code and scripts to test the hardware specs

note that this folder seems to be missing the **sw** sub folder which is referenced in some of the documentation such as the **buildNTDGX.txt** file, which states that the Nintendo Gamecube Graphics Library (NTDGX) is in that folder.

## BothWare header files and tools (tako_main_052306.tgz/bw) 
This folder potentially contains header files and tools related to Bothware, presumably bothware is content that is used by both the hardware and software folders such as the fdl include files.

The contents of the **bw** folder is as follows:
* **Makefile** - Main makefile that builds the sub directories
* **env** - perl scripts to setup the environment
* **fdl** - contains .fdl scripts for use with the **fiddle** tool
* **fdl_legacy** - old legacy fiddle scripts
* **include** - C header files generated by the fiddle scripts in the **fdl** folder
* **lib** - contains 3 libraries axpli, axsplit and axtoken
* **make** - bash and perl scripts used in Makefiles
* **mcpp** - .mcp files used for a tool called mcpp
* **tools** - C/C++ source code for tools such as fiddle and mcpp
* **xfcode** - Verilog source code for something known as XF

The fiddle tool compiles **.fdl** (Field Description Language) files into C header files, the fdl files describe bit fields such as registers and commands.

---
## Documentation (tako_main_052306.tgz/doc)
The Doc folder contains some very interesting documentation, this is where the news sources got their headline for the **Portable Gamecube** (specifically in the **proj** sub directory).

The contents of this folder are as follows:
* **cmn** - Common documentation related to building the project
* **dummy.txt** - dummy text file with nothing of importance in it
* **hw** - Hardware Documentation
* **index.html** - root index.html that redirects to the index of the **web** directory
* **proj** - Project documentation
* **spec_legacy** - Gamecube flipper hardware documentation
* **sw** - software documentation (Broadon and Nintendo sections are empty but ATI has docs)
* **test** - test plan spreadsheets
* **web** - web based documentation including Wiki backup

### Common Documentation (doc/cmn)
The files in the folder are as follows:
* **buildEnv.txt** - How to setup the build environment (e.g environment variables)
* **buildInternals.txt** - Coming Soon - so nothing of interest
* **buildNTDGX.txt** - how to build the Nintendo Graphics API (NTDGX) used for Gamecube
* **codeAndMakefiles.txt** - pretty detailed guide for how to write better C/C++ and Makefiles
* **log.gz** - just contains a log file with the results of all the builds passing

The most interesting file in this is probably the log file, although not exactly gripping reading material it can be nice to see the result of the build system running successfully. 

The next most interesting is the **codeAndMakefiles.txt** file which describes what they learned from the messy Dolphin (Gamecube) codebase. So they decided to treat all compiler errors as warnings and avoid the use of undefined compiler-specific code. Good advice that still holds to C/C++ developers today!

Also of interest is the uncertainty of what Nintendo was planning, they wanted to support the **NTDGX** API for backwards compatibility with Gamecube but they were not sure if it would still be used by the Wii.

### Software Documentation (doc/sw)
This folder contains three folders but sadly the **nintendo** and **broadon** folders are empty, the only folder with content is the **ati** folder.

The contests of the ati folder are as follows:
* c_style_guide.html - C coding style guide
* cygwin_install.html - How to install the cygwin toolchain on Windows
* labpc_setup.html - How to setup the internal lab PCs
* readme.txt - just a note reminding to add ATI document in this folder
* sshd_setup.html - how to setup the OpenSSH daemon on Windows
* stand_setup.html - how to setup a standalone build environment
* test - Bring upo Test Plans

The most interesting document in this folder is actually the **gfx_bringup.html** document inside the test folder.

### Test Plan Documentation (doc/test)
As expected this folder just contains spreadsheets for the Test plans for each hardware component and the current progress of testing.

The files in this folder are:
* ahb.txt - Notes for the **Advanced High-performance Bus** (AHB)
* ahb.xls - test plan progress spreadsheet for AHB
* ahbmon.doc - list of monitors for measuring performance of AHB
* ahm.txt - Advanced High-performance Memory?
* ahm.xls - test plan progress spreadsheet for AHM
* ahm_direct.doc - Test for AHM registers
* ai.xls - Audio Interface test plan progress spreadsheet
* arb_direct.doc - Tests for AHB Arbiter
* busy.README - Describes memory testing and stuff like .dv files
* busy.txt - Notes on busy client/master setup
* crs_test_plan.xls - Test plan for a chip called CRS
* di0.xls - Disk Interface Test Plan 
* exi.xls - EXI Device Bus test plan
* mem_test.xls - Plan for testing Memory
* pe_expaddr.xls - expanded address testing
* si.xls - Serial Interface test plan
* tst_test_plan.xls - JTAG test plan

Please note we are not sure what CRS stands for and AHB and AHM are unconfirmed.

---
## Hardware Development Kit (HDK) (tako_main_052306.tgz/hdk)
The Hardware development kit contains two versions, one for Linux and another for windows, they are seperated into two different directories:
* **intel_i686_linux_2.4.9-13smp** - Linux based GNU toolchain - but doesn't contain actual files
* **win32** - PC tools used for development such as Codewarriro

The Linux version is very strange as its literally just the folder structure and nothing more, so no actual files are included, so you can't do anything with this folder at all.

The Windows version is much more complete on the other hand and even contains content for the 3.0 Alpha 3 version of CodeWarrior for Gamecube. Although doesn't seem to contain the main executables to actually run CodeWarrior.

It also contains cygwin GCC executables that can be used to compile the C-source code tests on Windows PCs.

---
## Hardware Verilog source code (tako_main_052306.tgz/hw)

Contains:
* Makefile - main makefile to build all the Verilog and **C** source code
* chip
* chip_common
* chip_legacy
* diag
* doc
* dump
* lib
* models
* models_legacy
* pad
* pcb
* pll_test_chip
* ras
* run
* run.dma
* run_legacy
* su
* sys
* sys_common
* sys_legacy
* tools
* usbphy

---
## test (tako_main_052306.tgz/test)
The test folder as you might expect contains scripts and code used to test the project. it contains the following content:
* **Makefile** - calls the sub make files of all the sub folders
* **bin** - perl scripts to run tests
* **lib** - libraries used for the test code in **sys**
* **streams** - empty folder
* **sys** - main test code in **C**
* **sys_legacy** - legacy tests
* **tools** - a couple of tools used for converting file formats

### efb2crc (tools/efb2crc)
A tool created by **ArtX Inc**, the company behind the Flipper Gamecube graphics chip, to calculate the CRC value of an Embedded Frame Buffer (EFB) dump.

### ppm2mem (tools/ppm2mem)
Converts a PPM Image to whatever the output of the function **gxuGetTiledImage** is.

---
# Gamecube Portable

The GC portable was mentioned in a 2003 presentation, note that this is 3 years before the Wii was released on to the market.

There was plans to make a console much more powerful than what became the Wii and there was also to be a portable version with a dock similar to the Nintendo Switch.

The Dock would even have a place to plug in Gamecube controllers and standard Gamecube Memory cards.

---
# References
[^1]: LuigiBlood on Twitter
[^2]: [New leak: Pokémon Emerald source code and a bunch of GC/Wii stuff : emulation](https://www.reddit.com/r/emulation/comments/il9zun/new_leak_pok%C3%A9mon_emerald_source_code_and_a_bunch/)
[^3]: [What is the difference between XFB and EFB?](https://forums.dolphin-emu.org/Thread-what-is-the-difference-between-xfb-and-efb)
