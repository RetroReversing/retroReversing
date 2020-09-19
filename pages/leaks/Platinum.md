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
---

The Platinum leak occurred on the 9th of September 2020 and included gigabytes of content, hence why some call it GigaLeak 3.

Most notably it contains the source code for Pokemon Platinum, the Wii Startup Disc and a ton of previously un released Game Boy and Game Boy Color ROMS from the Nintendo Lot Check process.

# Files Leaked
* platinum.7z (2.73GB) 
* generic.7z
* from_nintendo.rar

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
* main_cn41v2_2009-0508-1945.zip - Main Channel GCM file
* photo_090508_CHN_FINAL.zip - Final Version of the Wii photo Channel WAD file
* sample_channel_for_CK_20090511.zip - Dummy channels with debugging info
* startupdisc_changeLog.txt - Developer Change log in Japanese

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
* NitroAgbMonTS1_040304.bin - GBA Boot rom for DS
* NitroMainpMonTS1_040304.bin - Main DS Boot rom
* NitroMainpMonTS1_040304.map - Linker Map for Main DS Boot rom
* NitroMonCheckSumTS1_040304.txt - Check sum's for the DS Boot roms located in this folder
* NitroSubpMonTS1_040304.bin - Subprocessor DS Boot rom
* NitroSubpMonTS1_040304.map - Linker Map for Subprocess DS Boot rom
* doc - documentation in Japanese

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
* tests - contains 2 tests, one if a font viewer for DS, the other are roms for testing the Master Editor
* tools - Windows installers for the compiled tools

### Build (TwlToolsRED/build)
Contains the source code for the following tools:
* A9Ovl_Chk - Delphi/pascal project to check ARM9 overlay in rom?
* AccessLogConverter - Perl script to conver access log format
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
## TwlIPL
When the repository has been checked out it contains the following files and folders:
* Makefile
* Makefile.full
* Makefile.nitroSystem.HYB
* Makefile.nitroSystem.LTD
* Makefile.sysmenu
* Makefile.twlSDK
* RomHeader
* add-ins
* bin
* build
* debugsoft
* docs
* include
* keys
* man
* readme.txt
* setup
* tools

---
# References
[^1]: [Lost Media Wiki - Wii Startup Disc](https://lostmediawiki.com/Wii_Startup_Disc_(found_software_disc;_2006))
[^2]: [IRIS - NintendoWiki](http://niwanetwork.org/wiki/IRIS)
[^3]: [Nintendo Research & Engineering - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_Research_%26_Engineering)
