---
layout: post
tags: 
- ds
- leak
- sourcecode
title: Nintendo Platinum Leak  
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/leaks/PlatinumLeak.jpg
permalink: /platinumleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Nintendo Platinum Leak 
    url: #
recommend: leaks
editlink: /leaks/Platinum.md
twitterimage: https://www.retroreversing.com/public/images/leaks/PlatinumLeak.jpg
updatedAt: '2020-09-19'
---

The Platinum leak occurred on the 9th of September 2020 and included gigabytes of content, hence why some call it GigaLeak 3.

{% include link-to-other-post.html post="/gigaleak" description="For more information on the original Gigaleak check out this post." %}

Most notably it contains the source code for Pokemon Platinum, the Wii Startup Disc and a ton of previously un released Game Boy and Game Boy Color ROMS from the Nintendo Lot Check process.

# Files Leaked
* platinum.7z (2.73GB) - Game Boy Lot Check ROMs, Wii Starup Disc, Pokemon Platinum and DSi source code
* generic.7z (1.82 GB) - iQue DsiWare Tad files and a Pokemon Event Distribution Application
* from_nintendo.rar (1.85GB) - iQue Email dump

---
# Contents of Platinum.7z
The Platinum.7z archive contains the following contents:
* **20090512.rar** - Wii Startup Disc from May 2009
* **MASTER_CPUJ00.zip** - Pokemon Platinum Source Code
* **dmg_sgb.7z** - Game Boy Lot Check ROMS
* **ntr-bootrom.7z** - Nintendo DS Bootrom
* **patch_from_MASTER_CPUJ00_to_FIELDTEST2.zip** - Patch for Platinum source
* **patch_from_MASTER_CPUJ00_to_FIELDTEST2_nobanner.zip** - Patch for Platinum source
* **twl.7z** - Nintendo DSi stuff

---
# Game Boy Lot Check ROMS (dmg_sgb.7z)
Similar to the previous Gigaleak, this leak also contains content from the Nintendo Lot Check process, in this case it was Game Boy and Game Boy Color roms. Tons of these games had been previously unreleased, you can find more details in our post about the Nintendo Lot Check roms.

{% include link-to-other-post.html post="/nintendo-lot-check" description="For full information on the new GBC and DMG roms in the leak check out this post." %}

---
# Wii Startup Disc (20090512.rar)
The Wii Startup Disc is a Wii disc containing a firmware upgrade, this was required on development kits and demo Kiosks, but was also originally intended to be required for the first retail units too. In fact a few retail units were sold that required the disc, a few had the disc included but many did not, making the console useless [^1].

The Disc was only needed to run once, sort of like installing an Operating System but when its installed there was no going back, it was impossible to downgrade or re-install with the disc.

## Contents of 20090512.rar
The archive contains the following files
* **main_cn41v2_2009-0508-1945.zip** - Main Channel GCM file
* **photo_090508_CHN_FINAL.zip** - Final Version of the Wii photo Channel WAD file
* **sample_channel_for_CK_20090511.zip** - Dummy channels with debugging info
* **startupdisc_changeLog.txt** - Developer Change log in Japanese

## Main Channel GCM File (main_cn41v2_2009-0508-1945.gcm)
A GCM file is a basically a Game Cube ISO Image, so a file with all the contents of a physical Game Cube/Wii disc. The **main_cn41v2_2009-0508-1945.gcm** file is the first revision of the Wii Startup Disc and can be loaded into Dolphin with a couple of byte changes.

{% include link-to-other-site.html url="https://lostmediawiki.com/Wii_Startup_Disc_(found_software_disc;_2006)" description="For more information about the leaked start up disc check out this article from the Lost Media Wiki" image="https://lostmediawiki.com/images/1/1a/Wii-StartupDiscInsertDisk.png" title="Lost Media Wiki article on Wii Startup Disc"  %}

---
# Nintendo DS Boot ROM (ntr-bootrom.7z)
The Nintendo DS Boot ROM is flashed on every retail DS unit sold and it is the first piece of code to execute when you start up the console.

The source code for this is contained in the **ntr-bootrom.7z** archive in the form of a Subversion (SVN) repository.

## Checking out the repository
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///Users/blah/Downloads/platinum/ntr_bootrom" ntr-bootrom-src
```

## Contents of the Repository
When you checkout the repository you will get the following files:
* **AGBモニタ履歴.txt** - Change log for GBA / AGB2 monitor program
* **IrisMainp** - Source code for DS (Iris) Main processor boot ROM (ARM9)
* **IrisSubp** - Source code for DS (Iris) Subprocessor boot ROM (ARM7)
* **NitroAgbMonTS1_040304.bin** - GBA Boot rom for DS
* **NitroMainpMonTS1_040304.bin** - Main DS Boot rom
* **NitroMainpMonTS1_040304.map** - Linker Map for Main DS Boot rom
* **NitroMonCheckSumTS1_040304.txt** - Check sum's for the DS Boot roms located in this folder
* **NitroSubpMonTS1_040304.bin** - Subprocessor DS Boot rom
* **NitroSubpMonTS1_040304.map** - Linker Map for Subprocess DS Boot rom
* **doc** - Documentation in Japanese

Note that Iris was the codename for the Nintendo Ds while in early development, it was later changed to Nitro [^2]. 

As you can see above the DS had 3 different Boot ROMS:
* GBA Boot ROM for running GBA games
* Main DS Boot ROM (ARM9)
* Subprocess DS Boot ROM (ARM7)

This is because the DS has 2 CPUs, the ARM9 (main) and the ARM7 (sub) so needs boot ROMs for each, and of course for backwards compatibility there is also the GBA boot ROM.

[Booting the Nintendo DS – a technical summary – CorgiDS](https://corgids.wordpress.com/2017/07/28/booting-the-nintendo-ds-a-technical-summary/)

---
## Main processor Bootrom (ARM9)

### C Header files (include folder)

Were these headers available in the main developer SDK for the Nintendo DS?

Name | Description
---|---
Iris.h | Main interface, basically includes all the other Header files
Iris2D.h | 2D drawing such as **BG_SetAffine**
Iris2D_Arm.s | Arm assembly version of **Iris2D.h**
Iris2D_Mw.s | Mw assembly assembly version of **Iris2D.h**
IrisDefine.h | Preprocessor constants are defined here
IrisDefineArm.s | Assembly constants defined here
IrisGX.h | 3D functions such as **GX_Viewport**
IrisGXB.h | Generate display list to buffer (mainly data TCM)
IrisGXB_Primitive.h | Generate primitive drawing display lists
IrisGXC.h | Generate IRIS compressed display list to buffer (data TCM)
IrisGX_Primitive.h | IRIS Primitive Drawing Display List Generation
IrisMTX.h | Matrix library
IrisMacro.h | Preprocessor Macros
IrisMacroArm.s | Assembly Macros
IrisMacroMw.s | Assembly Macros (for MWASMARM)
IrisMemoryMap.h | Contains constants for all the memory locations
IrisMemoryMapArm.s | Assembly version of **IrisMemoryMap.h**
IrisOS.h | Operating System functions such as **OS_EnableITCM**
IrisOS_Arm.s | Arm assembly version of **IrisOS.h**
IrisOS_Mw.s | Mw assembly version of **IrisOS.h**
IrisQUAT.h | Quaternion library
IrisSinTable.h | Pre-generated Sine table for optimization
IrisSystemCall.h | System calls such as **SVC_CpuClear**
IrisSystemCallArm.s | Arm assembly version of **IrisSystemCall.h**
IrisSystemCallDefine.h | Just defines both **SWI_NO_WAIT_INTR** and **SWI_NO_WAIT_VBLANK_INTR**
IrisSystemCallDefineArm.s | In addition to the header above it also defines **SWI_NO_CPU_SET** and **SWI_NO_CPU_SET_FAST**
IrisSystemCallMw.s | Mw version of **IrisSystemCallArm.s**
IrisTarget.h | Defines what target the bios is for such as Breadboard, TS orTEG
IrisTargetArm.s | Same as **IrisTarget.h** but for assembly
IrisTypes.h | Standard type declaration such as **unsigned char**
IrisUTL.h | Utility functions such as **UTL_CpuClear16**
IrisUTL_Arm.s | Arm assembly version of **IrisUTL.h**
IrisUTL_Mw.s | Mw assembly version of **IrisUTL.h**
IrisVEC.h | Vector Library for Dot Product, Cross Product etc


### Source Code

Unfortunately there is no make file so it is unclear how to build it back into the original ROM. However there is an MCP file which can be opened in CodeWarrior and should be able to compile.

Name | Description
---|---
Cp15InitArm.s | Startup routine in assembly
IRISモニタ履歴.txt | 
IrisMon.c | Contains the main function **IrisMonMain**
IrisMon.h | Main header file that includes all other header files
IrisMon.mcp | CodeWarrior project file
IrisMon.ses | CodeWarrior configuration session
IrisMonCard.c | 
IrisMonDefine.h | 
IrisMonDefineArm.s | 
IrisMonMacro.h | 
IrisMonMemoryMap.h | 
IrisMonMempryMapArm.s | 
IrisMonSub.c | 
IrisMonSub.h | 
IrisMonTarget.h | 
IrisMonTargetArm.s | 
IrisTegOnlySub.c | 
NitroAgbMonTS1_040304.bin | Compiled GBA Boot ROM
NitroMainpMonTS1_040304.bin | Compiled Main DS Boot ROM
crt0Arm.s | 
crt0subArmCommon.s | 

---
## Sub-processor Bootrom (ARM7)

### C Header files (include folder)

Were these headers available in the main developer SDK for the Nintendo DS?

Name | Description
---|---
IrisSubp.h | 
IrisSubpDefine.h | 
IrisSubpDefineArm.s | 
IrisSubpMacro.h | 
IrisSubpMacroArm.s | 
IrisSubpMacroMw.s | 
IrisSubpMemoryMap.h | 
IrisSubpMemoryMapArm.s | 
IrisSubpOS.h | 
IrisSubpOS_Arm.s | 
IrisSubpOS_Mw.s | 
IrisSubpSystemCall.h | 
IrisSubpSystemCallArm.s | 
IrisSubpSystemCallDefine.h | 
IrisSubpSystemCallDefineArm.s | 
IrisSubpSystemCallMw.s | 
IrisSubpTarget.h | 
IrisSubpTargetArm.s | 
IrisSubpTypes.h | 
IrisSubpUTL.h | 
IrisSubpUTL_Arm.s | 
IrisSubpUTL_Mw.s | 

### Source Code

Unfortunately there is no make file so it is unclear how to build it back into the original ROM.

Name | Description
---|---
Blowfish.c | 
Blowfish.h | 
BlowfishInitTable.s | 
BlowfishTestTable.s | 
IRIS-SUBPモニタ履歴.txt | 
IrisMonSharedArea.h | 
IrisSubpMon.c | 
IrisSubpMon.h | 
IrisSubpMon.mcp | 
IrisSubpMon.ses | 
IrisSubpMonCard.c | 
IrisSubpMonDefine.h | 
IrisSubpMonDefineArm.s | 
IrisSubpMonMacro.h | 
IrisSubpMonMemeoryMap.h | 
IrisSubpMonMemoryMapArm.s | 
IrisSubpMonRtc.c | 
IrisSubpMonSpi.c | 
IrisSubpMonSub.c | 
IrisSubpMonSub.h | 
IrisSubpMonTarget.h | 
IrisSubpMonTargetArm.s | 
NintendoLogoData.s | 
SndDataArm.s | 
crt0Arm.s | 
crt0subArmCommon.s | 
crt0subExceptions.s | 
snd_ptable.bin | 
snd_sinetable.bin | 
snd_vtable.bin | 

---
# Nintendo DSi (Twilight) content (twl.7z)
During development the Nintendo Dsi had the code name **Twilight** hence the name of the archive containing this content is **twl.7z**.

When the archive is extracted it contains the following folders, which are all SVN repositories:
* TwlIPL
* TwlToolsRED - internal tools used in Nintendo RED
* twl_mcu - source code to the Micro Controller Unit
* twl_wrapsdk - internal version of the Nintendo DSi SDK

## Checking out the SVN repositories
Each of the folders in this archive is a separate Subversion repository and each one will need to be checked out with a command like so:
```bash
svn checkout "file:///Users/blah/Downloads/platinum/ntr_bootrom" ntr-bootrom-src
```

## MCU (Micro Controller Unit) (twl_mcu svn repository)
The source code to the MCU (Auxiliary Microcontroller) firmware which was responsible for controlling the hardware LED such as camera, power and wifi along with volume and reset buttons.

The contents of the repository are listed in the table below:

Name | Description
---|---
ADC.c | 
ADC.h | 
DCP.c | 
DCP.h | 
EEPe.c | 
EEPe.h | 
I2C.c | 
I2C.h | 
I2C_selfprog.c | 
I2C_selfprog.h | 
Int.h | 
LEDs.c | 
LEDs.h | 
PMIC_TWL2.c | 
PMIC_TWL2.h | 
Port.c | 
Port.h | 
SW_I2C.c | 
SW_I2C.h | 
System.c | 
System.h | 
System_user.c | 
TWL_MCU_33-MP_95811supp.hex | 
Timer.c | 
Timer.h | 
Timer_user.c | 
WDT.c | 
WDT.h | 
callback_funcs.c | 
callback_funcs.h | 
config.h | 
demo.c | 
demo.h | 
flash.c | 
flash.h | 
incs.h | 
jhl_defs.h | 
lk.dr | 
macrodriver.h | 
main.c | 
option.asm | 
option.inc | 
twl2mcu2.h | 
user_define.h | 
vreg.c | 
vreg.h | 

---
## Main SDK? (twl_wrapsdk)
This looks like the main Nintendo DS SDK updated for DSi, however it is unclear why it has the word "wrap" in the title. Also it is quite different from the previously leaked version 5.5 of the TWL SDK and is missing tons of content.

When the SVN repository has been checkout out it has the following contents:
* **Makefile** - Main makefile which just calls the build Makefile
* **build** - Main source code
* **builder** - Continuous integration server scripts for nightly builds
* **camera** - empty folder
* **include** - C header files for the SDK
* **lib** - compiled versions of libsyscall for various targets
* **readme** - AES.txt - notes about AES encryption keys
* **readme.txt** - Just mentions the SDK required to build (NitroSDK4.0)
* **release** - Just contains the release Makefile
* **setup** - Small Bash script that sets **TWLSDK_ROOT** environment variable
* **tools** - source code for SDK tools

The project builds the DS SDK version 4.0 as described in the readme file.

### Tools (twl_wrapsdk/tools)
The tools folder contains the following items:
* axd - AXD debugger session files for CodeWarrior
* bin - Just contains the Rom header template
* makelst - Unsure but seems to generate C source files from DLLs
* partner_mlt - Config for something called **PARTNER**
* prom - exo files for **Xilinx iMPACT**
* stripdebug - strips an elf file, removing all debug symbols

### Build (twl_wrapsdk/build)
The build folder contains the main source code, which is rather odd as the name would suggest that it would be the built artefacts and not the main source code.

Has similarities to the previously released SDK version 5.5 but is also missing quite a few files and has a number of new files. Still need to figure out what this is.

---
## TwlToolsRED
This repository contains internal tools used in Nintendo RED (Research & Engineering Department).

When you check out the SVN repository you get the following folders:
* build - source code for all the tools
* docs - documentation for some of the tools
* include - empty folder
* tests - contains 2 tests, one if a font viewer for DS, the other are ROMs for testing the Master Editor
* tools - Windows installers for the compiled tools

### Build (TwlToolsRED/build)
Contains the source code for the following tools:
* A9Ovl_Chk - Delphi/pascal project to check ARM9 overlay in rom?
* AccessLogConverter - Perl script to convert access log format
* BannerForcefulInserter - Forcefully inserts a Banner into an SRL ROM
* CardToSD - DS tool to Dump Game Cartridge to SD card
* ChinaKorea - empty folder
* DisableDebugFlgChecker - DS tool to check if a game has Debug Flag disabled
* IllegalRomMaker - PC tool to change a ROM to make it illegal (i.e fail tests)
* KENJCleaner - DS tool to clean data of the DSIWare game **Hobonichi no Kenkou Techou** (Publisher Code: KENJ)
* MainMemoryDumper - DS tool to dump main memory
* MasterEditor - PC tools: FingerPrinter and MasterEditor
* Mastering Batch File - Windows Batch script to **master** a DS rom
* MenuSkipFlagTool - PC tool to modify a DS ROM to skip the menu interface
* MenuSkipFlagTool_Checker - PC tool to check if a DS ROM has the Manu Skip flag checked
* NitroArm7VerChecker - DS tool to show the SDK Version for Arm7 components in a cartridge
* RatingAllFreeTool - PC tool to set the rating of a DS ROM
* RepairExportSaveData - DS tool to export save data to SD card
* TamperDetectorForSrl - PC tool to check if a SRL DS ROM doesn't match meta data
* sctools - even more tools

### sctools  (TwlToolsRED/build/sctools)
Unsure why this folder is called **sctools** but this is what it contains:
* Makefile
* auto_preinst_rom
* bin
* common
* copy_dst
* copy_org
* cryptopc
* files
* make_tad_table
* makesdtd
* my_armadillo.TWL
* wifilib

### FingerPrinter
This is a tool that can be run either through the terminal console or via GUI. To run via the console you can do the following:
```bash
FingerprintTWL.exe input_rom output_rom fingerprint [options]
```

It supports both ROM formats (SRL and TAD) and modifies the fingerprint of the input rom and saves it as the output rom. So this is basically a tool to update the checksum of the ROM.

### Master Editor
The Master Editor is a tool for Windows PCs to 

### Tools (TwlToolsRED/tools)
The tools folder simply contains a **bin** folder that contains:
* FingerPrinterTWL_ExternalComponents.zip - contains **maketad.exe**
* FingerprinterTWLSetup.msi - installer for **FingerPrinter** tool
* MasterEditorTWLSetup.msi - installer for **MasterEditor** tool
* MasterEditorTWLSetup_en.msi - installer for **MasterEditor** tool in english
* MasterEditorTWL_AllExceptChinaSetup.msi
* MasterEditorTWL_LauncherSetup.msi
* MasterEditorTWL_SecureSetup.msi
* MasterEditorTWL_SystemSetup.msi
* Mastering Batch File.zip

---
## TwlIPL - Initial Program Loader? Operating System?
Not sure what this is, but guessing it is the Initial Program Loader/Operating System for DSi, but this is unconfirmed.

When the repository has been checked out it contains the following files and folders:
* Makefile - Main makefile that calls the one in the build folder
* Makefile.full - Calls ALL the other Makefiles in this folder, builds everything
* Makefile.nitroSystem.HYB - HYBLID Architecture Makefile
* Makefile.nitroSystem.LTD - LIMITED Architecture Makefile
* Makefile.sysmenu - Makefile for the System Menu
* Makefile.twlSDK - Makefile for the DSi SDK
* RomHeader
* add-ins - Contains NitroSystem from 8th April 2008 and a PC Tool called **NTR_IPL2_Gaiji_Font_PC**
* bin - some built DS ROMs in SRL and TAD format
* build - source code
* debugsoft - DS debug ROMs such as **SaveDataTest**
* docs - All sorts of misc documentation
* include - C header files for sysmenu and the firmware
* keys - Perl script to create RSA keys
* man - Doxygen manual for **WDS_Wrapper**
* readme.txt - brief notes for how to build the repository
* setup - bash script that you are supposed to **source** into your bash shell
* tools - tools for windows such as **AesDecrypter.exe**

### Source Code (TwlIPL/build folder)
This folder contains the source code for a bunch of tools and different firmware:
* Makefile - Main Makefile which builds everything in each sub folder
* buildtools - standard DS build tools such as **commondefs**
* components - contains jackal and hyena components
* debugsoft - source code for the DS debug ROMs
* gcdfirm - GCD Firmware
* libraries - source code for libraries such as **aes**
* libraries_sysmenu - System Menu libraries such as **acsign**
* nandfirm - NAND Firmware
* norfirm - NOR Firmware
* systemMenu_RED - Source code for the System Menu
* systemMenu_mastering - Contains mastering Makefile
* systemMenu_tools - source code for System Menu tools such as **CardboardEraser**
* tests - source code for testing tools such as **ErrorLogTest**
* tools - source code for some of the tools such as **rombreaker**

---
# Pokemon Platinum Source Code (MASTER_CPUJ00.zip)
This archive contains the full source code for the Nintendo DS game called Pokemon Platinum.

**CPUJ** is the Product ID for the Japanese Pokemon Platinum (**CPUE** is the North American product ID). The two zeros at the end of the filename are also part of the internal ID and just represent the revision number. So this is the source code for the first released version of Platinum.

When the archive is extracted it contains the following three top level folders:
* **lib** - extracted versions of some of the zip files such as the SDK
* **main** - the main source code
* **zip** - contains zip archive of stuff such as the SDK

## Libraries (MASTER_CPUJ00.zip/lib folder)
The lib folder contains the following items:
* **NitroDWC** - DS wireless communication Library version 2.2 plus8
* **NitroSDK** - DS Software Development Kit
* **NitroSystem** - DS Graphics and Sound SDK libraries
* **NitroWiFi** - DS Wi-Fi library
* **cygwin.bat** - Windows Batch File  to start up a cygwin bash terminal
* **libVCT** - VoiceChat Library version 1.3.1
* **readme.txt** - very brief notes about the two batch files and a note to install CodeWarrior IDE
* **setpath.bat** - Sets environment variables such as **NITROSDK_ROOT**

## Zip Archives (MASTER_CPUJ00.zip//zip)
This folder contains all the different librarys that are used to make the pokemon platinum source code, including the full SDK and CodeWarrior IDE.

The zip files are:
* **NITRO-System-Library-071126-patch1.zip** - DS Graphics and Sound SDK libraries (patch)
* **NITRO-System-Library-071126.zip** - DS Graphics and Sound SDK libraries from 26th Nov 2007
* **NitroDWC-2_2plus8-080630.zip** - DS wireless communication Library from 30th June 2008
* **NitroDWC-addon-ppwlobby-20080707.zip** - Pokemon Platinum Wi-Fi Lobby Library
* **NitroMiddleware-libVCT-1_3_1-080401.zip** - VoiceChat Library from 1st April 2008
* **NitroSDK-4_2-071210.zip** - DS SDK from 10th December 2007
* **NitroSDK-4_2-patch-plus-080118.zip** DS SDK Patch from 18th January 2008
* **NitroWiFi-2_1-070710.zip** - DS WiFi Library from 10th July 2007
* **NitroWiFi-2_1-patch-plus3-070920.zip** - DS WiFi Library patch from 20th September 2007
* **cw_ds-2_0-sp2-20071025.zip** - CodeWarrior IDE from 25th October 2007
* **cw_ds-2_0-sp2-patch2-20080215.zip** - CodeWarrior IDE path from 15th Feb 2008

Note that almost all of these have been extracted in the **/lib** folder so you don't need to extract them manually. The only exception is the **PPWLobby** which you will need to extract if you are interested in it.


## The Patches (patch_from_MASTER_CPUJ00_to_FIELDTEST2.zip)
There are two archives that contain source code patches for the Pokemon Platinum source code, they are:
* patch_from_MASTER_CPUJ00_to_FIELDTEST2_nobanner.zip
* patch_from_MASTER_CPUJ00_to_FIELDTEST2.zip

The two patch archives are identical apart from one file called **platinum.rsf** which is only available in the **_nobanner** version.

An RSF file is a **Nitro ROM SPEC FILE** used for building the DS ROM file.

---
# Contents of generic.7z
When the archive is extracted it is found to contain the following archives inside it:
* DSiWareROM.rar - DSiWare ROMS sent to iQue
* ro.rar - Chinese iQue DSiWare
* sd.rar - Contents of an SD card from iQue
* windows.rar - Pokemon Distribution Windows Program

## DSIWare ROMS (generic.7z/DSiWareROM.rar)

The **DSiWareROM.rar** archive contains a ton of DSiWare ROMS in **TAD** format. The repository is split into folders based on the date, presumably from when Nintendo sent the data to iQue.

We have a separate post on the **DSiWareROM.rar** archive contents with the intention to do a deep dive into the various debug versions included in the archive.

{% include link-to-other-post.html post="/dsiwareleak" description="For more information on the files inside the DsiWare archive check out this post." %}

---
## Chinese DsiWare ROM backup (generic.7z/ro.rar)
The archive contains the Chinese versions of some DSi titles by iQue, when extracted this archive has the following folders:
* G&W_New - Chinese ports of Game & Watch games
* 一下下马力欧医生 - Dr Mario
* 照照瓦利殴制造 - WarioWare: Snapped!
* 鸟和豆&纸飞机 - Bird and Bean & Paper Airplane

### Game & Watch (ro.rar/G&W_New) 
This folder contains all the iQue Chinese ports of the Game & Watch DsiWare titles, it includes the following **tad** files:
* TKGBC00.tad - Game&Watch FLAGMAN (CHN)
* TKGCC00.tad - Game&Watch CHEF (CHN)
* TKGDC00.tad - Game&Watch DONKEY KONG JR. (CHN)
* TKGFC00.tad - Game&Watch MARIO'S Cement Factory (CHN)
* TKGGC00.tad - Game&Watch FLAGMAN (CHN)
* TKGHC00.tad - Game&Watch HELMET (CHN)
* TKGJC00.tad - ゲーム＆ウオッチ ジャッジ
* TKGMC00.tad - Game&Watch MANHOLE (CHN)
* TKGVC00.tad - Game&Watch VERMIN (CHN)

### Dr Mario - Chinese Version (ro.rar/一下下马力欧医生)
This folder contains the raw ROMS (srl files) for the Chinese version of Dr Mario:
* SPD-03675_TKD9C00.tad.exe - self extracting executable
* SPD-03675_TKD9C00.tad.srl - 
* TKD9C00.tad.srl - 

Not sure what the difference between the two ROM files is.

### WarioWare: Snapped!  - Chinese Version (ro.rar/照照瓦利殴制造)
This folder contains the WarioWare: Snapped Chinese localisation.
* SPD-03671_TKUWC10.exe
* twlmiwCN_100223.tad
* SPD-03671_TKUWC10.tad
* SPD-03671_TKUWC10.tad.srl

### Bird and Bean & Paper Airplane - Chinese Version (ro.rar/鸟和豆&纸飞机 )
This folder contains two different games, one is Pyoro (Bird and Beans) and the other is Paper Airplane Chase, both versions are Chinese for the iQue DSi.

The files in this folder are:
* Plane.bmp - iQue image warning players of problems such as Game addiction and Piracy
* Plane_NITRO.srl - Raw ROM of Paper Airplane Chase
* Pyoro.bmp - iQue image warning players of problems such as Game addiction and Piracy
* Pyoro_NITRO.srl - Raw ROM of Pyoro (Bird and Beans)
* TKAMC00.tad - Tad file of Paper Airplane Chase
* TKP6C00.tad - Tad file of Pyoro (Bird and Beans)

---
## DPDeliver - Pokemon Distribution Windows Program (generic.7z/windows.rar)

When the RAR file is extracted the contents are:
* DPDeliver.exe - Main Windows Application in either Japanese or Chinese (unsure)
* templateagb.srl - Game Boy Advance ROM template 
* templateds.nlf - NitroROM List File
* templateds.srl - Nintendo DS ROM template

The DPDeliver application for Windows is a tool to create a Pokemon Distribution event ROM, it is completely in Japanese.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">DPDeliver.exe, a program that is NOT rendering correctly for me in American Locale, but, this can generate a distro ROM for Gen 4 Pokemon game events I think. <a href="https://t.co/CJboJPhIjX">pic.twitter.com/CJboJPhIjX</a></p>&mdash; Kaitlyn Molinas (@orcastraw) <a href="https://twitter.com/orcastraw/status/1304912291700371456?ref_src=twsrc%5Etfw">September 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The **.NLF** file is interesting as it is a **NitroROM List File** as it seems to list the contents of the DS SRL file, it lists the contents of the DS ROM as follows:
* bin/ARM9-TS/Release/templateds_header.sbin
* bin/ARM9-TS/Release/templateds.sbin
* d:/nitro/NitroSDK/components/mongoose/ARM7-TS/Release/mongoose_sub.sbin
* bin/ARM9-TS/Release/templateds_files.sbin
* files/286.b15
* files/data.bin
* files/debug.lz
* files/decchi.bin
* files/evo.narc
* files/growtbl.narc
* files/period.dat
* files/personal.narc
* files/waza_tbl.narc
* files/wotbl.narc

---
## iQue SD card contents - sd.rar
This archive is a backup of an iQue developer or testers SD card. it contains different builds of multiple DSiWare applications such as SystemUpdater.

The Contents are:
* 090902_mario
* 090902_wario 
* 20090924_shop - contains **shop.HNFC.Release.thumb.tad**
* A_phtclock.tad
* B_phtclock.tad
* CTR-Oinari_docs.zip
* C_phtclock.tad
* Capture - Contains 3 empty BMP files
* DCIM - Standard photo folder containing selfies of 2 attractive Chinese Women
* HNI_0037.JPG - Photo of 2 attractive Chinese Women
* HNI_0040.JPG - modified version of **HNI_0037.JPG** with lots of stamps on it
* MoMo
* Plane_cn_708.tad - Paper Airplane Chase (Chinese) Build 708
* Plane_cn_727F.tad - Paper Airplane Chase (Chinese) Build 727F 
* Pyoro_cn_708.tad - Pyoro (Chinese) Build 708
* Pyoro_cn_727F.tad - Pyoro (Chinese) Build 727F
* TKUWJ00D.tad - WarioWare Snapped (Japanese)
* TKUWV00D.tad - WarioWare Snapped (English)
* dic - Dictionary data for Chinese (CH and TW)
* ecConfigView - DSiStore Debug tool
* edit.txt - blank text file
* file1.txt
* mario_CHN20090910
* mario_CHN20090911_+a
* photo - empty folder
* phtclock.tad
* phtclock_2.tad
* phtclock_3.tad
* phtclock_4.tad
* phtclock_5.tad
* phtclock_6.tad
* phtclock_7.tad
* phtclock_8.tad
* private
* shop.HNFC.Release.14231.tad
* tcl_2.tad

It also contains the following builds of the **SystemUpdater**:
* SystemUpdater_20090417_forCKdev.srl
* SystemUpdater_20090428.tad
* SystemUpdater_20090430.tad
* SystemUpdater_20090514.tad
* SystemUpdater_20090611.tad
* SystemUpdater_20090710.tad
* SystemUpdater_forCKdev.tad

### ecConfigView (sd.rar/ecConfigView)
This is a tool for debugging the DSiStore only to be used on development hardware. It is a standard TAD ROM file that can be installed on development DSi hardware.

It adds an item to the DSi menu called "EC file utility" which simply had a few options to delete files such as "ec.cfg" from the DsiShop.

### 3DS Capture Software for PARTNER-CTR-CAPTURE (sd.rar/MoMo/3DSSoft)
This folder contains the Windows Installer for the software that connects to the **PARTNER-CTR-CAPTURE** development hardware. This is a way for developers to take screenshots and short videos from the Nintendo 3DS.

---
# iQue Email dump - Contents of from_nintendo.rar
The **from_nintendo.rar** archive contains what looks like an email attachment dump of all the files that Nintendo sent to iQue(?). They are all split by folders depending on what date they were sent from Nintendo and overall it is quite a random bunch of files.

The date folders contained in the archive are:
* **20090522** - Screenshots of some DS Fatal errors - probably from a debugging email thread
* **20090525** - A tool called **MessageEditor** version 4.9.6.1
* **20090630** - Spreadsheets (XLS) about how the DSiShop works
* **20090703** - Contains TWL-ManualTools
* **20090707** - Archives with Chinese names (Something to do with WiiSports)
* **20090713** - Wii Tech specs and some sort of Dog show game
* **20090715** - DSiWare Wario information for a translation into Chinese (contains ROMs in TAD format)
* **20090730** - MotionPlus Movie Player
* **20090807** - Translation information for Dr Mario (Spreadsheets)
* **20090824** - Contains WiiFit design Docs (TWN_ExtraBalance_090824) and TWL-ManualTools 3.1
* **20090825** - Some notes about which Dr Mario ROM to use and a file called **health_message.gmm** which has something to do with WiiFit
* **20091021** - Info about DSi apps Solitare and Clock/Calculator
* **20091023** - PhotoBooth Sound files? (Love Girlys?!)
* **20091028** - contains **EAD-00960_NintenDOG_C_NoBGM_091027.exe**
* **20091030** - contains spreadsheets of the staff credits for each region
* **20091102** - contains some .wav sound files
* **20091105** - contains **5bpA-5ciA** around 20 titles for iQue DS (cls and tad files)
* **20091109** - contains **clocks_rom_header.zip** - rom header templates
* **20091111** - DS TAD ROM of shop? for checking version upgrade

## TWL-ManualTools (from_nintendo.rar/20090703)
The **ManualTools** application for Windows PCs is actually sent to iQue twice, on the 3rd of July and then again on the 24th of August.

The tools are to update the digital manuals that come with DSi titles and can be viewed on the Nintendo DSi.

There is a viewer which is an application for the DSi that can be used to preview manual files on the console itself.

### Contents of TWL-ManualTools
The following files and folders can be extracted from the **TWL-ManualTools** archive:
* Makefile - Makefile for **LibM2d**
* ManualEditorStarter.exe - Main Windows executable for the Manual Editor
* SourceTreeMap.txt - brief overview of each file in the repository
* build - Source code for the m2d library and demos for using it
* data - Only contains file **m2dres_narc.blz**
* docs - Documentation for both the Editor and a programmers guide for the library
* include - C header files for the **m2d** library
* lib - precompiled version of the **m2d** library
* man - HTML reference manual for the m2d library
* manualResources - images for each language the tool supports
* readme.txt - Describes the purpose of the Manual Tools (to create e-Manuals)
* tools - Tools to preview and edit the digital manual files

### m2d library (Manual Display Library)
Inside the manual tools there is also source code for the M2D library that is used to show the electronic manuals on the Nintendo DS. 

This is also called **libntmvm2d** elsewhere in the files, **lib** is a standard prefix for precompiled libraries, guessing the **nt** stands for Nitro (DS codename).

### Manual Editor
The Manual Editor is a Windows application for editing the digital manuals present in Nintendo DS games.

Pages are saved with the extension **.ntpg**, presumably standing for NITRO Page.

---
# References
[^1]: [Lost Media Wiki - Wii Startup Disc](https://lostmediawiki.com/Wii_Startup_Disc_(found_software_disc;_2006))
[^2]: [IRIS - NintendoWiki](http://niwanetwork.org/wiki/IRIS)
[^3]: [Nintendo Research & Engineering - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_Research_%26_Engineering)
[^4]: [DSi CID Discovered | Next Generation Emulation](https://www.ngemu.com/threads/dsi-cid-discovered.169257/)
[^5]: [Nintendo Software Planning & Development - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_Software_Planning_%26_Development)
