---
layout: post
tags: 
- leak
- ds
- 3ds
- gba
title: Nintendo Paladin Leak  
thumbnail: /public/consoles/Nintendo DS.png
image: /public/images/leaks/PaladinLeak.jpg
permalink: /paladinleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Nintendo Paladin Leak 
    url: #
recommend: 
- leak
- gba
- ds
- 3ds
editlink: /leaks/Paladin.md
twitterimage: https://www.retroreversing.com/public/images/leaks/PaladinLeak.jpg
---

The Paladin leak occurred on the 30th of September 2020 and included about 2.4GB of content related to the Nintendo IRIS and Pokemon spinoffs. This was the third Nintendo leak in September 2020 with the First being the Emerald leak and the second being the Platinum leak.

# Files Leaked
* paladin.7z (2.44GB)

# Contents of Paladin.7z
When the **paladin.7z** archive has been extracted it creates the following contents:
* **Dungeon** - Pokemon Mystery Dungeon GBA and NDS ROMs
* **E3** - Pokemon Leaf Green and Fire Red GBA ROMS
* **FMC_DISK.7z** - Famicom Disc System Lot Check ROMS
* **NetCardWads** - Unknown Wii Wad files for something called NetCard
* **PokeRanger_Euro.zip** - Initial Pokemon Ranger PAL Translations
* **Ranger_EURO.zip**  - Final  Pokemon Ranger PAL Translations
* **Ranger_e3_060420** - Pokemon Ranger E3 Demo
* **rangereu.7z** - Pokemon Ranger PAL builds
* **ctr_card_test.zip**
* **ctr_eFuse.zip**
* **ctr_firmware.zip**
* **ctr_test_tools.zip**
* **ctr_tools_red.zip**
* **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** -  IRIS SDK Files from December 3rd 2003 (with some missing files compared to the next archive)
* **irisSDKbulb-snapshot-031203.tar.gz** -  IRIS SDK Files from December 3rd 2003
* **irisSDKbulb-snapshot-031212.tar.gz** -  IRIS SDK Files from December 12th 2003
* **irisSDKbulb-snapshot-040120-private.tar.gz**
* **irisSDKbulb-snapshot-040120.tar.gz** -  IRIS SDK from 20th January 2004


---
#  Famicom Disk System Lot Check ROMS (FMC_DISK.7z)
Similar to the previous Gigaleak, this leak also contains content from the Nintendo Lot Check process, in this case it was the Famicom Disk System ROMs. Some of these games had been previously unreleased, you can find more details in our post about the Nintendo Lot Check ROMs.

{% include link-to-other-post.html post="/nintendo-lot-check" description="For full information on the new Famicom Disk System ROMs in the leak check out this post." %}

---
# E3 Leaf Green and Fire Red GBA ROMS (/E3)

The files have the standard Nintendo SRL extension which was used both both GBA and NDS ROMS, you can rename the extension to **.gba** and they will play just fine in a GBA emulator.

It is unclear the file naming convention and how far along the different builds of the game are but we know that the first 4 characters are the standard product ID for Leaf Green (BPGE) and Fire Red (BPRE).

Contents:
* BPGE264RR.srl - Leaf Green
* BPGE264RU1.srl
* BPGE264RU2.srl
* BPGE264RU5.srl
* BPGE264RU6.srl
* BPGE264RU9.srl
* BPRE264RR.srl - Fire Red
* BPRE264RU0.srl
* BPRE264RU3.srl
* BPRE264RU4.srl
* BPRE264RU7.srl
* BPRE264RU8.srl
* CRC.txt - Just lists the CRC codes for each of the ROMS in this directory

---
# Pokemon Mystery Dungeon (/Dungeon)
In the **Dungeon** folder it has a bunch of Game Boy Advance and Nintendo DS ROMS for Pokemon Mystery Dungeon, they are in the SRL format which is the same as .GBA, so can you can easily play these in any GBA emulator.

Contents: 
* AB24J00.srl - Pocket Monsters: Fushigi no Dungeon Aka no Kyuujotai (Japanese) (GBA)
* NAPHJ00.srl - Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* ab9je00.srl - Pokemon Mystery Dungeon Red Rescue Team Demo (English) (GBA)
* fushigi2.srl - Some sort of Test Nintendo DS ROM
* fushigi_agb.bin - GBA Test ROM
* fushigi_agb2.bin - GBA Test ROM 2
* na57e00.srl - Pokemon Mystery Dungeon Blue Rescue Team Demo (English) (Nintendo DS)
* na57j00.srl - Pokemon Fushigi no Dungeon: Ao no Kyuujotai Demo (Nintendo DS)
* naphj10.srl - Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* naphj10_debug.srl - Debug version of Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* pkd2_build157_toki_debug.srl - Debug version of Pokemon Fushigi no Dungeon: Toki no Tankentai (Nintendo DS)
* pkd2_build157_toki_final.srl - Pokemon Fushigi no Dungeon: Toki no Tankentai (Nintendo DS)
* pkd2_build157_yami_debug.srl - Debug version of Pokemon Fushigi no Dungeon: Yami no Tankentai
* pkd2_build157_yami_final.srl - Pokemon Fushigi no Dungeon: Yami no Tankentai (Nintendo DS)
* pkd2_build163_toki_debug.srl - Debug build 163 of Pokemon Fushigi no Dungeon: Toki no Tankentai
* pkd2_build163_yami_debug.srl - Debug build 163 of Pokemon Fushigi no Dungeon: Yami no Tankentai
* pocchama.srl - ?
* pocchama_agb.bin - Another GBA Test ROM

The Product IDs with numbers as the second 2 characters tend to be Demo versions and are not in the GBA or NDS LotCheck spreadsheet (**AGB_data**).

---
# NetCardWads
Not sure what these Wii WAD files are and they don't open in the Dolphin emulator, the contents of this folder are:
* common-key.bin
* devmon.wad
* devmon_.wad
* viewer.wad
* viewer_.wad

---
# Pokemon Ranger E3 Demo (Ranger_e3_060420)
This folder contains two Nintendo DS Roms for Pokemon Ranger, you can play these in any Nintendo DS emulator as they are the same as the .NDS format.
The Contents of this folder are:
* tycho_e3_0604202018DSf.bin - Nintendo DS ROM Demo of Pokemon Ranger from 20th April 2006 (F)
* tycho_e3_0604202018DSm.bin - Nintendo DS ROM Demo of Pokemon Ranger from 20th April 2006 (M)

The only difference in the file names is the last letter either being an f or an m. Currently waiting for the Pokemon Rom hacking community to figure out what the differences are in these two ROMs.

Could the F stand for Female and the M stand for Male?

---
# Initial Pokemon Ranger PAL Translations (PokeRanger_Euro.zip)
The **PokeRanger_Euro.zip** seems to be created before the localisation process for Pokemon Ranger has started, for the result of the translation process check out the other archive **Ranger_EURO.zip**.

There is a folder called **To_Alessio** which were files to be sent to **Alessio Danieli** who is a Localization Producer at Nintendo of Europe, files in this folder are:
* pokemon_Ranger_NCL_log_final.xls
* PokemonRanger_NOA_log_final.xls
* capture_challenge.xls
* RangerTextList_Eng.xls
* Targets_QuickReference.xls
* Ranger_milestone_debug.xls
* PokemonRanger_TaskList.xls
* Pokemon_DataFile.xls

The second folder is titled **To_translators** and contains the documents that translators need to create their respective localization: 
* capture_challenge.xls
* RangerTextList_Eng.xls
* Targets_QuickReference.xls
* Ranger_milestone_debug.xls
* Pokemon_DataFile.xls

The remaining files in this folder are:
* NARGEd.SRL
* staffrole_noa.xls

---
# Final  Pokemon Ranger PAL Translations (Ranger_EURO.zip)
This folder contains a slightly modified /Documents folder compared to the previous **PokeRanger_Euro.zip** archive, but the changes are not particularly interesting apart from the new folder containing the Japanese translations **Ranger_JP**.

There are four localisations which each have their own separate folder with the same files but with different locale text, these are: German, Italian, French and Spanish. 

The list of files that are present in all the localisations are:
* message_tap.xls
* DPmode_message.xls
* message_freenpc_sub.xls
* message_mcNPC.xls
* message_system.xls
* PKR_Others.xls
* message_pokemove.xls
* target_text.xls
* message_record.xls
* message_commu.xls
* message_menu.xls
* graphic_text.xls
* message_dictionary.xls
* message_wslot.xls
* scenario_text.xls
* message_powerline.xls
* PKR_Characters.xls
* map_text.xls
* message_browser.xls
* message_delivery.xls
* message_nameselect.xls
* message_ending.xls
* message_scenario.xls

The other two files not related to the four localisations are at the root of this folder: 
* PKR_EURO.xls
* NARGJ00_debag.srl

This folder also contains the Japanese version of the Documents seen in the previous archive (**PokeRanger_Euro.zip**), these are the new files in the new **Ranger_JP** in the documents directory:
* RangerTextList.xls
* PKRanger_DebugMode.doc
* ポケモンレンジャー欧州版作業内容.xls
* PKRanger_milestone_JP.xls

---
# Pokemon Ranger PAL builds (rangereu.7z)
When the **rangereu.7z** archive has been extracted you will get a folder for each of the Pokemon Ranger builds.

Each folder contains both a M and F (Male/Female?) version of the European Nintendo DS ROM, it will take some time for Pokemon ROM hackers to understand all the differences in these builds but for now here is the list of builds included:
* 061024 - 24th October 2006
* 061031
* 061108 - 8th November 2006
* 061109
* 061110
* 061114
* 061115
* 061116
* 061117
* 061120
* 061121
* 061122
* 061128 - (version 1)
* 061128 - (version 2)
* 061129
* 061130
* 061204 - 4th December 2006
* 061205
* 061206
* 061207
* 061211 - (trial)
* 061212 - (trial)
* 061213 - (trial)
* 061214 - 14th December 2006 (trial) 

The archives **Ranger_trial_eu_061214.zip** and **Ranger_trial_eu_061214.rar** have exactly the same content inside, so they were probably seeing which format compressed the best when sending it on.
---
# 3DS Card Test SVN Repository (ctr_card_test.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The files that will be checked out into the trunk directory are:
* BackupMemoryTest.cpp
* CardTestFunction.cpp
* CardTestFunction.h
* CommandTest.cpp
* CtrCardTest.cpp
* CtrCardTest.desc
* CtrCardTest.rsf
* FunctionTest.cpp
* OMakefile
* OMakeroot
* ReliabilityTestForRWMemory.cpp
* ReliabilityTestForRom.cpp
* main.cpp
* nakayama.cpp
* nakayama.h
* クラス図.bmp

---
# 3DS eFuse SVN Repository (ctr_eFuse.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The files that will be checked out into the trunk directory are:
* Makefile
* Makefile.outputSharpID
* Makefile.sharp
* Makefile.testSharpID
* ReleasePackage.sh
* cr_alloc.c
* cr_alloc.h
* cr_device_cert.c
* cr_enc_id.c
* cr_generate_id.c
* cr_generate_id.h
* cr_generate_id_private.h
* cr_hsm_alloc.c
* cr_hsm_alloc.h
* cr_hsm_bignum.c
* cr_hsm_bignum.h
* cr_hsm_code.c
* cr_hsm_code.h
* cr_id_util.c
* cr_keyPair.c
* dep_objs
* document
* dummyKey
* hsm_utils
* main.c
* main2.c
* main3.c
* output
* package
* realKey
* sample.c
* tools
* util.c
* util.h

---
# 3DS Firmware SVN Repository (ctr_firmware.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The files that will be checked out into the trunk directory are:
* Makefile
* bootrom
* doc
* firmware
* public
* readme.txt
* setup
* tools

---
# TwlBkpCheck - 3DS Testing Tool SVN Repository (ctr_test_tools.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

## TwlBkpImporter for 3DS
The first tool is for the 3DS system itself and it is called **TwlBkpImporter**:
* TwlBkpImporter/sdAccessor.h
* TwlBkpImporter/OMakefile
* TwlBkpImporter/twlBkpImporter.rsf
* TwlBkpImporter/window.cpp
* TwlBkpImporter/sdAccessor.cpp
* TwlBkpImporter/window.h
* TwlBkpImporter/draw.cpp
* TwlBkpImporter/main.cpp
* TwlBkpImporter/draw.h
* OMakefile

The **Bin** folder contains the compiled version as two different CCI ROM files:
* twlBkpImporterForWPS_DevFast_r43296.cci
* twlBkpImporter_DevFast_r43296.cci

One of the builds is **TwlBkpImporterForWPS** but not quite sure what WPS is yet but there are a few separate source files for making is for WPS:
* TwlBkpImporterForWPS
* TwlBkpImporterForWPS/OMakefile
* OMakeroot

## TwlBkpCheck for Windows 
The other folder holds the Windows based tools for the TwlBkpCheck tool, the contents are:
* TwlBkpCheck.sln

The **Bin** folder just contains the compiled results of both **TWLBackupBlock** and **FalsifyTwlBackup**:
* FalsifyTwlBackup.exe
* TwlBackupBlock.dll

### TWLBackupBlock
**TWLBackupBlock**:
* ExtBinaryReader.cs
* SignatureBody.cs
* Utility.cs
* AesCmac.cs
* TmdReserved.cs
* HeaderBody.cs
* Body.cs
* Block.cs
* Blocks.cs
* Properties
* Properties/AssemblyInfo.cs
* Properties/Settings.Designer.cs
* Properties/Resources.resx
* Properties/Settings.settings
* Properties/Resources.Designer.cs
* TwlBackupBlock.csproj
* AbstractBody.cs

### FalsifyTwlBackup
**FalsifyTwlBackup**:
* Category1xx.cs
* Properties.cs
* Category9xx.cs
* main.cs
* Category5xx.cs
* FalsifyTwlBackup.csproj
* Properties
* Properties/AssemblyInfo.cs
* Falsify.cs
* Category4xx.cs
* Category3xx.cs
* Category2xx.cs

---
# Nintendo RED 3DS Tools (ctr_tools_red.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The folders that will be checked out into the trunk directory are:
* HSM_Server
* MakeUpdatePartition
* MasterEditorCTR
* MediaSizeTestProjectMaker
* MetaDataExtractor
* RatingEditorCTR
* RomCompareTool
* mastering

---
# IRIS Software Development Kit
The IRIS project was supposed to be the next in the Game Boy line, a more powerful Game Boy Advance with a single screen. Later the project was changed into the **NITRO** project when another screen was added and it became the Nintendo DS.

## IRIS SDK Files from December 3rd 2003 for ToolMaker (irisSDKbulb-snapshot-031203-forToolMaker.tar.gz)
The **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** archive is the earliest known Software development kit for the IRIS project.

There are some files that are not in this archive that are in the **irisSDKbulb-snapshot-031203.tar.gz** archive instead, namely the **docs/_private/** folder which will be covered in the next section.

As for the files in this archive they are just earlier versions of the IRIS SDK so check out the section below for the files in the last known version of the IRIS SDK as it is very similar.

---
## IRIS SDK Files from December 3rd 2003 (irisSDKbulb-snapshot-031203.tar.gz)
This is almost exactly the same as the content from **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** but contains some new files which I guess are not to be sent in the **forToolMaker** build (whatever that is).

All the new files are under the folder **docs/_private/** which is a completely new directory, these files are:
* how-to-make-headers.txt
* web
* CodeWarrior

---
## IRIS SDK Files from December 12th 2003 (irisSDKbulb-snapshot-031212.tar.gz)
The contents are pretty much the same as December 3rd but there has been development work so there isn't that many new files but quite a few source files have changed, which is to be expected.

Nothing of real interest is in this archive unless you want to see the progress made between two different snapshots. Check out the last IRIS SDK (**irisSDKbulb-snapshot-040120.tar.gz**) for an overview of the contents of the IRIS SDK.

---
## Private IRIS SDK Files from 20th January 2004 (irisSDKbulb-snapshot-040120-private.tar.gz)
This is an interesting archive as it only contains contents not found in the other build from 20th January 2004 (**irisSDKbulb-snapshot-040120.tar.gz**). 

These files are:
* ./KnownIssues
* ./KnownIssues/031212
* ./KnownIssues/031212/kagemai.css
* ./KnownIssues/031212/69.htm
* ./KnownIssues/031212/126.htm
* ./KnownIssues/031203
* ./KnownIssues/031203/kagemai.css
* ./KnownIssues/031203/110.htm
* ./KnownIssues/031203/69.htm
* ./KnownIssues/031203/81.htm
* ./KnownIssues/@
* ./READMEs-Snapshot
* ./READMEs-Snapshot/@ChangeLog.cvs
* ./SDKTools
* ./SDKTools/@CVS-TagTable.rtf
* ./SDKTools/@WinCvsSetting.rtf

---
## IRIS SDK from 20th January 2004 (irisSDKbulb-snapshot-040120.tar.gz)
This is the last known version of the IRIS SDK built on the 20th of January 2004, presumably just after the Nintendo DS (NITRO) project was started as it contains files referencing the project under the name **Nitro**.
Contents:
* Makefile
* SrcTreeMap.txt
* build - source code
* docs - Documentation for using the SDK such as Release Notes and the Nitro ROM format
* include - C/C++ header files
* lib - Precompiled Static Libraries
* man - Manual in japanese
* tools - Tools such as elftobin and makerom

### Documentation (/docs)
Contents:
* ./SDKHowTo
* ./SDKHowTo/HowToBuildSDKTree.rtf
* ./SDKRules
* ./SDKRules/Rule-Defines.html
* ./SDKRules/Rule-NameSpace.html
* ./SDKRules/irisSDKstandard.css
* ./TechnicalNotes
* ./TechnicalNotes/NitroRomFormat.rtf
* ./READMEs-Snapshot
* ./READMEs-Snapshot/ChangeLog.cvs
* ./READMEs-Snapshot/QuickStartForIrisSDK.rtf
* ./READMEs-Snapshot/history
* ./READMEs-Snapshot/history/ReleaseNotes-031212.rtf
* ./READMEs-Snapshot/history/ReleaseNotes-031203.rtf
* ./READMEs-Snapshot/ReleaseNotes-040120.rtf
* ./READMEs-Snapshot/AboutChangelog.rtf
* ./SDKTools
* ./SDKTools/CygwinPackageList.rtf

---
### IRIS Sub-processor (IRIS_SP) Header files (/include/iris_sp)
These files are for the ARM7 CPU core and would be included in your C/C++ source code in order to use the functionalities provided by the Sub-processor SDK library.

Name | Description
---|---
./iris_sp.h
./iris_sp/init
./iris_sp/init/crt0.h
./iris_sp/hw
./iris_sp/hw/mmap_global.h
./iris_sp/hw/ioreg_SPSND.h
./iris_sp/hw/ioreg.h
./iris_sp/hw/mmap_wram.h
./iris_sp/hw/ioreg_SPPAD.h
./iris_sp/hw/armArch.h
./iris_sp/hw/ioreg_SPMPI.h
./iris_sp/hw/ioreg_SPDISP.h
./iris_sp/hw/ioreg_SPOS.h
./iris_sp/hw/ioreg_SPMI.h
./iris_sp/code32.h
./iris_sp/os.h
./iris_sp/memorymap.h
./iris_sp/snd
./iris_sp/snd/snd_capture.h
./iris_sp/snd/snd_channel.h
./iris_sp/snd/snd.h
./iris_sp/snd/snd_init.h
./iris_sp/snd/snd_util.h
./iris_sp/os
./iris_sp/os/interrupt.h
./iris_sp/os/system.h
./iris_sp/code16.h

### IRIS Header files (/include/iris)
These files are for the ARM9 CPU core and would be included in your C/C++ source code in order to use the functionalities provided by the main processor SDK library.

Name | Description
---|---
./iris/init
./iris/init/crt0.h
./iris/ARM7-TEG.lcf
./iris/version.h
./iris/hw
./iris/hw/ioreg_PAD.h
./iris/hw/ioreg_G3X.h
./iris/hw/mmap_global.h
./iris/hw/ioreg_G3.h
./iris/hw/ioreg_OS.h
./iris/hw/mmap_shared.h
./iris/hw/ioreg.h
./iris/hw/mmap_main.h
./iris/hw/armArch.h
./iris/hw/ioreg_MI.h
./iris/hw/mmap_vram.h
./iris/hw/ioreg_GX.h
./iris/hw/mmap_tcm.h
./iris/hw/ioreg_SPI.h
./iris/hw/ioreg_CP.h
./iris/hw/ioreg_G2.h
./iris/types.s
./iris/code32.h
./iris/types.h
./iris/mi
./iris/mi/wram.h
./iris/mi/dma.h
./iris/mi/exMemory.h
./iris/ARM9-BB.lcf
./iris/misc.h
./iris/fx
./iris/fx/fx.h
./iris/fx/fx_mtx33.h
./iris/fx/fx_trig.h
./iris/fx/fx_mtx43.h
./iris/fx/fx_cp.h
./iris/fx/fx_mtx44.h
./iris/fx/fx_mtx.h
./iris/fx/fx_const.h
./iris/fx/fx_vec.h
./iris/os.h
./iris/ARM7-BB.lcf
./iris/pad
./iris/pad/pad.h
./iris/ARM9-TEG.lcf
./iris/memorymap.h
./iris/ARM9-TEG.lcf.template
./iris/gx
./iris/gx/gx.h
./iris/gx/g3c.h
./iris/gx/g3x.h
./iris/gx/g3.h
./iris/gx/g2_oam.h
./iris/gx/gxcommon.h
./iris/gx/gx_vramcnt.h
./iris/gx/g2.h
./iris/gx/gx_load.h
./iris/gx/g3imm.h
./iris/gx/g3_util.h
./iris/gx/gx_capture.h
./iris/gx/g3b.h
./iris/gx/gx_bgcnt.h
./iris/os
./iris/os/spinLock.h
./iris/os/halt.h
./iris/os/protectionUnit.h
./iris/os/context.h
./iris/os/cache.h
./iris/os/message.h
./iris/os/protectionRegion.h
./iris/os/emulator.h
./iris/os/systemCall.h
./iris/os/timer.h
./iris/os/thread.h
./iris/os/printf.h
./iris/os/interrupt.h
./iris/os/system.h
./iris/os/mutex.h
./iris/os/utility.h
./iris/os/init.h
./iris/os/exception.h
./iris/os/arena.h
./iris/os/alloc.h
./iris/os/tcm.h
./iris/cp
./iris/cp/sqrt.h
./iris/cp/divider.h
./iris/code16.h
./iris.h

### Precompiled Static Libraries (*.A) (/lib)

These are:
* ARM7-BB - Sub processor Library compiled for Bread Board IRIS
* ARM7-TEG - Sub processor Library compiled for TEG board IRIS
* ARM9-BB - Main processor Library compiled for Bread Board IRIS
* ARM9-TEG - Main processor Library compiled for TEG board IRIS

The compiled libraries are:
* libirissubpsyscall.a - Sub processor Library
* libirissubpsyscall_arm.a - Sub processor Library (compiled for ARM)
* libirissyscall.a - Main processor Library
* libirissyscall_arm.a - Main processor Library (compiled for ARM)
* crt0.o
* libfx.a
* libgx.a
* libirissyscall.a
* libirissyscall_arm.a
* libmi.a
* libos.a
* libstubsisd.a

---
### Japanese Manual (/man/ja_JP)
Contents:
* a-z.html
* contents.html
* cp
* css
* demos
* fx
* gx
* icons.html
* index.html
* main.html
* mi
* os
* pad
* snd
* svc 

---
### Tools (/tools)

contents:
* ./bin
* ./bin/makelcf.exe
* ./bin/dis
* ./bin/makerom.exe
* ./makerom
* ./makerom/spMain_defs.sbin
* ./makerom/spMain.sbin
* ./elftobin
* ./elftobin/spIdle.elf
* ./elftobin/romHeader.bin
* ./elftobin/IrisPostLinker.bat

---
### Build (/build)
Contents:
* Makefile
* buildsetup
* buildtools
* demos
* libraries
* libraries_sp
* tests
* tools


Contents:
* Makefile
* fs
* fx
* gx
* ide
* mi
* os
* pad
* template
* template_sp
