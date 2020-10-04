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
updatedAt: '2020-10-03'
---

<section class="postSection">
    <img src="/public/images/leaks/PaladinLeak.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The Paladin leak occurred on the 30th of September 2020 and included about 2.4GB of content related to the Nintendo IRIS and Pokemon spinoffs. This was the third Nintendo leak in September 2020 with the First being the Emerald leak and the second being the Platinum leak.
 </div>
</section> 

{% include link-to-other-post.html post="/emeraldleak" description="For more information on the Emerald leak check out this post." %}

# Files Leaked
As usual the files were uploaded to anonfiles and the links shared on the 4Chan **/vp** board, the files were:
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
* **ctr_card_test.zip** - Source code for a 3DS test card that seems to mainly test the units memory
* **ctr_eFuse.zip** - Source code for a tool that generates IDs for eFuses
* **ctr_firmware.zip** - 3DS Firmware source code (bootrom)
* **ctr_test_tools.zip** - 3DS DSi Backup Tools
* **ctr_tools_red.zip** - This repository contains internal tools used in Nintendo RED (Research & Engineering Department)
* **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** -  IRIS SDK Files from December 3rd 2003 (with some missing files compared to the next archive)
* **irisSDKbulb-snapshot-031203.tar.gz** -  IRIS SDK Files from December 3rd 2003
* **irisSDKbulb-snapshot-031212.tar.gz** -  IRIS SDK Files from December 12th 2003
* **irisSDKbulb-snapshot-040120-private.tar.gz** - Private files not to be distributed with IRIS SDK from 20th January 2004
* **irisSDKbulb-snapshot-040120.tar.gz** -  IRIS SDK from 20th January 2004


---
#  Famicom Disk System Lot Check ROMS (FMC_DISK.7z)
Similar to the previous Gigaleak, this leak also contains content from the Nintendo Lot Check process, in this case it was the Famicom Disk System ROMs. Some of these games had been previously unreleased, you can find more details in our post about the Nintendo Lot Check ROMs.

{% include link-to-other-post.html post="/nintendo-lot-check" description="For full information on the new Famicom Disk System ROMs in the leak check out this post." %}

---
# E3 Leaf Green and Fire Red GBA ROMS (/E3)

The files have the standard Nintendo SRL extension which was used both both GBA and NDS ROMS, you can rename the extension to **.gba** and they will play just fine in a GBA emulator.

It is unclear the file naming convention and how far along the different builds of the game are but we know that the first 4 characters are the standard product ID for Leaf Green (BPGE) and Fire Red (BPRE).

## ROMS leaked
It is currently unknown what differences are in these builds, but you can rename them to '.gba' and run them in any Game Boy Advance emulator to find out.

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

## Mystery Dungeon GBA & NDS ROMS leaked
Contents: 
* **AB24J00.srl** - Pocket Monsters: Fushigi no Dungeon Aka no Kyuujotai (Japanese) (GBA)
* **NAPHJ00.srl** - Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* **ab9je00.srl** - Pokemon Mystery Dungeon Red Rescue Team Demo (English) (GBA)
* **fushigi2.srl** - Some sort of Test Nintendo DS ROM
* **fushigi_agb.bin** - GBA Test ROM
* **fushigi_agb2.bin** - GBA Test ROM 2
* **na57e00.srl** - Pokemon Mystery Dungeon Blue Rescue Team Demo (English) (Nintendo DS)
* **na57j00.srl** - Pokemon Fushigi no Dungeon: Ao no Kyuujotai Demo (Nintendo DS)
* **naphj10.srl** - Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* **naphj10_debug.srl** - Debug version of Pokemon Fushigi no Dungeon: Ao no Kyuujotai (Nintendo DS)
* **pkd2_build157_toki_debug.srl** - Debug version of Pokemon Fushigi no Dungeon: Toki no Tankentai (Nintendo DS)
* **pkd2_build157_toki_final.srl** - Pokemon Fushigi no Dungeon: Toki no Tankentai (Nintendo DS)
* **pkd2_build157_yami_debug.srl** - Debug version of Pokemon Fushigi no Dungeon: Yami no Tankentai
* **pkd2_build157_yami_final.srl** - Pokemon Fushigi no Dungeon: Yami no Tankentai (Nintendo DS)
* **pkd2_build163_toki_debug.srl** - Debug build 163 of Pokemon Fushigi no Dungeon: Toki no Tankentai
* **pkd2_build163_yami_debug.srl** - Debug build 163 of Pokemon Fushigi no Dungeon: Yami no Tankentai
* **pocchama.srl** - ?
* **pocchama_agb.bin** - Another GBA Test ROM


The Product IDs with numbers as the second 2 characters tend to be Demo versions and are not in the GBA or NDS LotCheck spreadsheet (**AGB_data**).

---
# NetCardWads
Not sure what these Wii WAD files are and they don't open in the Dolphin emulator, the contents of this folder are:
* common-key.bin
* devmon.wad
* devmon_.wad
* viewer.wad - ShowMiiWads says its corrupt
* viewer_.wad - Sample Viewer

You can extract both **devmon_.wad** and **viewer_.wad** with the tool ShowMiiWads but it is still not clear what purpose they have.

---
# Pokemon Ranger
Pokemon Ranger is a Nintendo Ds game that was first released in Japan on the 23rd of March 2006. It was jointly developed by HAL Laboratory and Creatures Inc. 

Unfortunately this leak does not have the source code for it but it does have some interesting E3 builds of the game and the translation files sent out to the localisation teams.

---
## Pokemon Ranger E3 Demo (Ranger_e3_060420)
This folder contains two Nintendo DS ROMs for Pokemon Ranger, you can play these in any Nintendo DS emulator as they are the same as the .NDS format.

The Contents of this folder are:
* **tycho_e3_0604202018DSf.bin** - Nintendo DS ROM Demo of Pokemon Ranger from 20th April 2006 (F)
* **tycho_e3_0604202018DSm.bin** - Nintendo DS ROM Demo of Pokemon Ranger from 20th April 2006 (M)


The only difference in the file names is the last letter either being an f or an m. Currently waiting for the Pokemon Rom hacking community to figure out what the differences are in these two ROMs.

Could the F stand for Female and the M stand for Male?

---
## Initial Pokemon Ranger PAL Translations (PokeRanger_Euro.zip)
The **PokeRanger_Euro.zip** seems to be created before the localisation process for Pokemon Ranger has started, for the result of the translation process check out the other archive **Ranger_EURO.zip**.

There is a folder called **To_Alessio** which were files to be sent to **Alessio Danieli** who is a Localization Producer at Nintendo of Europe, files in this folder are:
* **pokemon_Ranger_NCL_log_final.xls** - List of Bugs for Nintendo Japan (NCL)
* **PokemonRanger_NOA_log_final.xls** - Nintendo of America Log of Translation changes from Japanese to English
* **capture_challenge.xls** - Notes on how Pokemon appear in the capture challenge
* **RangerTextList_Eng.xls** - This is an overview of what each excel spread sheet sent to translators means
* **Targets_QuickReference.xls** - Targets and how to destroy the target (e.g Ice needs to be burned)
* **Ranger_milestone_debug.xls** - Testing script for how to test the game
* **PokemonRanger_TaskList.xls** - Priority of localization tasks between Nintendo of Europe (NOE) and Nintendo Japan (NCL)
* **Pokemon_DataFile.xls** - details about all the Pokemon in the game


The second folder is titled **To_translators** and contains the documents that translators need to create their respective localization: 
* **capture_challenge.xls** - Notes on how Pokemon appear in the capture challenge
* **RangerTextList_Eng.xls** - This is an overview of what each excel spread sheet sent to translators means
* **Targets_QuickReference.xls** - Targets and how to destroy the target (e.g Ice needs to be burned)
* **Ranger_milestone_debug.xls** - Testing script for how to test the game
* **Pokemon_DataFile.xls** - details about all the Pokemon in the game


The remaining files in this folder are:
* **NARGEd.SRL** - Nintendo DS ROM for Pokemon Ranger
* **staffrole_noa.xls** - List of People who worked on Pokemon Ranger in English and Japanese - used for the credits screen

---
## Pokemon Ranger PAL Translation Spreadsheets (Ranger_EURO.zip)
This folder contains a slightly modified /Documents folder compared to the previous **PokeRanger_Euro.zip** archive, but the changes are not particularly interesting apart from the new folder containing the Japanese translations **Ranger_JP**.

There are four localisations which each have their own separate folder with the same files but with different locale text, these are: German, Italian, French and Spanish. 

The list of files that are present in all the localisations are:
* **message_tap.xls** - Tap messages
* **DPmode_message.xls** - Sending data between games
* **message_freenpc_sub.xls** - NPC dialogues
* **message_mcNPC.xls** - MC brothers dialogues
* **message_system.xls** - System text & NPC dialogues
* **PKR_Others.xls** - Names of Places and Misc
* **message_pokemove.xls** - Descriptions of Pokémon moves
* **target_text.xls** - Target names & descriptions
* **message_record.xls** - Ranger Record related messages
* **message_commu.xls** - Ranger Net text
* **message_menu.xls** - Menu items
* **graphic_text.xls** - images that need to be translated
* **message_dictionary.xls** - Ranger glossary
* **message_wslot.xls** - Post-main story special missions
* **scenario_text.xls** - Mission titles and related descriptions
* **message_powerline.xls** - Poké Assist descriptions
* **PKR_Characters.xls** - Names of Characters
* **map_text.xls** - Area names and descriptions
* **message_browser.xls** - "Browser completion event" scenario
* **message_delivery.xls** - Text for the special missions to distribute
* **message_nameselect.xls** - Name entry related messages
* **message_ending.xls** - Post-main story scenario including some events and NPC dialogues
* **message_scenario.xls** - Body text (main story)


The file from the previous archive **RangerTextList_Eng.xls** was sent to translators which explains the contents of each of these files.


The other two files not related to the four localisations are at the root of this folder: 
* **PKR_EURO.xls** - Pokemon Ranger Instructions for updating the documents via "macro book"
* **NARGJ00_debag.srl** - Debug version of - Pokemon Ranger NDS ROM


This folder also contains the Japanese version of the Documents seen in the previous archive (**PokeRanger_Euro.zip**), these are the new files in the new **Ranger_JP** in the documents directory:
* **RangerTextList.xls** - This is an overview of what each excel spreadsheet sent to translators means (in Japanese)
* **PKRanger_DebugMode.doc** - How to use the Pokemon Ranger debug function
* **ポケモンレンジャー欧州版作業内容.xls** - - Priority of localization tasks between Nintendo of Europe (NOE) and SMC (what is SMC?)
* **PKRanger_milestone_JP.xls** - Testing script for how to test the game (in Japanese)

The most interesting document here is the **PKRanger_DebugMode.doc** which describes the debug functions in the provided Pokemon Ranger DS ROM. it has functions for infinite life, mission select and map select, this would make it a lot easier for translators to go to the exact area of the game to make sure the text they are writing would work in that context.

Overall this is a very interesting insight into the translation process of a Nintendo DS game, it is something people don't really think about very much but nice to see whole they solved the task, especially for PAL regions that required four additional languages.

---
## Pokemon Ranger PAL builds (rangereu.7z)
When the **rangereu.7z** archive has been extracted you will get a folder for each of the Pokemon Ranger builds.

Each folder contains both a M and F (Male/Female?) version of the European Nintendo DS ROM, it will take some time for Pokemon ROM hackers to understand all the differences in these builds but for now here is the list of builds included:
* 061024 - 24th October 2006
* 061031 - 31st October 2006
* 061108 - 8th November 2006
* 061109 - 9th November 2006
* 061110 - 10th November 2006
* 061114 - 14th November 2006
* 061115 - 15th November 2006
* 061116 - 16th November 2006
* 061117 - 17th November 2006
* 061120 - 20th November 2006
* 061121 - 21st November 2006
* 061122 - 22nd November 2006
* 061128 - 28th November 2006 (version 1)
* 061128 - 28th November 2006 (version 2)
* 061129 - 29th November 2006
* 061130 - 30th November 2006
* 061204 - 4th December 2006
* 061205 - 5th December 2006
* 061206 - 6th December 2006
* 061207 - 7th December 2006
* 061211 - 11th December 2006 (trial)
* 061212 - 12th December 2006 (trial)
* 061213 - 13th December 2006 (trial)
* 061214 - 14th December 2006 (trial) 


The archives **Ranger_trial_eu_061214.zip** and **Ranger_trial_eu_061214.rar** have exactly the same content inside, so they were probably seeing which format compressed the best when sending it on.

---
# 3DS Test Card SVN Repository (ctr_card_test.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```
This is the first in a number of Citrus (CTR/3DS) source code archives which contain interesting test programs used internally at Nintendo.

This project creates a 3DS ROM which has a variety of testing functions:
* Function Test - keeps looping over a function until B is pressed
* Command Test
* Reliability Test for ROM - Aging test
* Reliability Test for Writable Memory - Aging Test
* Back Up Memory Test

## Source code files
The files that will be checked out into the trunk directory are:
* BackupMemoryTest.cpp - sets up the menu for the Backup Memory Test
* CardTestFunction.cpp - dummy functions **cardFunctionTestStart** and **cardFunctionTestEnd**
* CardTestFunction.h
* CommandTest.cpp
* CtrCardTest.cpp - Sets up the selectable Menu for which test to select
* CtrCardTest.desc - 3DS card specification file
* CtrCardTest.rsf - Meta-data about the Card (e.g Title, CompanyCode)
* FunctionTest.cpp
* OMakefile - OMake makefile for building the project
* OMakeroot - OMake build system settings
* ReliabilityTestForRWMemory.cpp
* ReliabilityTestForRom.cpp
* main.cpp - just contains main function that calls **program.Execute** from **CtrCardTest**
* nakayama.cpp - Utility functions, presumably by a guy called nakayama
* nakayama.h - header file for **nakayama.cpp** utility functions
* クラス図.bmp - UML Diagram of all the classes (クラス図 is Japanese for Class Diagram)


The **nakayama.cpp** file is a pretty useful library of functions to create a basic UI for 3DS programs, it has classes such as Page/UIControl etc which can be used to create nice clean UI code.

One of the more interesting files is actually **クラス図.bmp** which is a rare case of programmers actually using UML to design or document the code they are writing.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It can be quite rare for game developers to use UML, but this class diagram was created for the Nintendo 3DS (CTR) Test Card. This was presumably created by Nakayama (nakayama.cpp) who seems to have created a nice little UI library for the 3DS. <a href="https://twitter.com/hashtag/NintendoLeaks?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeaks</a> <a href="https://twitter.com/hashtag/Nintendo3ds?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo3ds</a> <a href="https://t.co/drWynTWPEL">pic.twitter.com/drWynTWPEL</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1312401796514689024?ref_src=twsrc%5Etfw">October 3, 2020</a></blockquote>

Also this project seems to use **OMake** rather than standard **make**, but since it is a fork of make it is fully backwards compatible and has a few new features such as dependency analysis [^1].

This needs more investigation in to how the ROM performs each of the tests, if you have a build environment set up for 3DS and an emulator then lets us know what you find.

---
# 3DS eFuse SVN Repository (ctr_eFuse.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```
This seems to be the source code for a Unix (Windows via Cygwin) tool to generate an eFuseID. eFuse are microscopic 'fuses' that can be physically burned away. They are used to prevent downgrading a firmware to a lower version as each firmware requires a higher number of fuses to have been destroyed. However we are not exactly sure what this software is used for or what an eFuse ID is. Also we know that the Nintendo Switch uses eFuses but no record of the 3DS using eFuses.

All we know is that this project uses openssl and uses private/public key encryption using AES.

It creates three different executables:
* outputSharpID - Outputs the ID in a format corresponding to testSharpID
* sharp
* testSharpID
* gen_id

## Source Code Files

The files that will be checked out into the trunk directory are:
* Makefile - Makefile for **gen_id**
* Makefile.outputSharpID - Makefile for **outputSharpID** executable
* Makefile.sharp - Makefile for sharp executable
* Makefile.testSharpID - Makefile for **testSharpID** executable
* ReleasePackage.sh - creates a zip archive for the **sharp** executable
* cr_alloc.c - memory allocation functions
* cr_alloc.h - memory allocation header
* cr_device_cert.c - create 3DS (CTR) Device certificate
* cr_enc_id.c - functions such as **EncryptID**
* cr_generate_id.c - functions such as **cr_generate_id**
* cr_generate_id.h - header for cr_generate_id
* cr_generate_id_private.h - private internal functions for generate_id
* cr_hsm_alloc.c - memory allocation for HSM
* cr_hsm_alloc.h - header for cr_hsm
* cr_hsm_bignum.c - big number functions (from nCipher Corporation Limited)
* cr_hsm_bignum.h - header for cr_hsm_bignum
* cr_hsm_code.c - functions such as **hsm_aes_encrypt** and **hsm_rsa_decrypt**
* cr_hsm_code.h - header for cr_hsm_code
* cr_id_util.c - utility functions such as **GetTimestamp**
* cr_keyPair.c - functions such as **GenarateECCKeyPair**
* dep_objs - empty folder
* document - function documentation in japanese
* dummyKey
* hsm_utils - utility functions for the Hardware Security Module (HSM)
* main.c - main entry point for **gen_id.exe** and **libgenid.a**
* main2.c - main entry for executable called **testSharpID.exe**
* main3.c - main entry point for **outputSharpID.exe**  
* output - empty folder
* package - just contains OpenSSL archives (**openssl-0.9.8k.tar.gz**)
* realKey - folder that contains **eFuse_iv.bin** and **NCT2_pub.der** for both dev and production
* sample.c - main entry point for **sharp.exe**
* tools - contains perl scripts for **bin2c**, **merge_lib_objs_hsm** and **merge_lib_objs**
* util.c - small number of utility functions **keyboard_is_hit**
* util.h - header for util

If you know anything about this tool please reach out to us so we can update the information here.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Mystery from the Nintendo Paladin Leak: Why is there a Nintendo 3DS &quot;eFuse&quot; repository when they were not used on the console? The switch used eFuses to prevent downgrading firmware versions but the 3DS did not as far as we know. <a href="https://t.co/1BrJ1wDS7i">https://t.co/1BrJ1wDS7i</a> <a href="https://twitter.com/hashtag/NintendoLeaks?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeaks</a> <a href="https://twitter.com/hashtag/3ds?src=hash&amp;ref_src=twsrc%5Etfw">#3ds</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1312407942742896641?ref_src=twsrc%5Etfw">October 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
# 3DS DSi Backup Tools (TwlBkpCheck) SVN Repository (ctr_test_tools.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The **ctr_test_tools.zip** archive contains source code for a tool called **TwlBkpCheck** which was created for the DSi (Project Twilight/TWL) partition on the 3DS.

The project comes in two parts, one that runs on the 3DS itself and the other that runs on Windows PCs.

## TwlBkpImporter for 3DS
The first tool is for the 3DS system itself and it is called **TwlBkpImporter**, which seems to be a tool to import a previously backed-up DSi (partition?/game?) from the SD card into the TWL NAND partition, the source files are:
* TwlBkpImporter/sdAccessor.h - header file for SD card functions
* TwlBkpImporter/OMakefile - OMakefile for the 3DS rom
* TwlBkpImporter/twlBkpImporter.rsf - Meta-data about the Card (e.g Title, CompanyCode)
* TwlBkpImporter/window.cpp - implementation of the Window class methods
* TwlBkpImporter/sdAccessor.cpp - functions to read from the SD Card
* TwlBkpImporter/window.h - header file for Window class
* TwlBkpImporter/draw.cpp - drawing functions such as **DrawBinaryFile**
* TwlBkpImporter/main.cpp - main method **nnMain** with initialise code
* TwlBkpImporter/draw.h - header for drawing functions
* OMakefile - calls OMake for all sub folders apart from Bin

One interesting thing is that some of the source files says they are part of project "Horizon", but it is not mentioned anywhere what this project is.

The **Bin** folder contains the compiled version as two different CCI ROM files:
* twlBkpImporterForWPS_DevFast_r43296.cci
* twlBkpImporter_DevFast_r43296.cci

One of the builds is **TwlBkpImporterForWPS**, the WPS stands for **With Private Save**, the make file for this is in the **TwlBkpImporterForWPS** folder:
* TwlBkpImporterForWPS/OMakefile


---
## TwlBkpCheck for Windows 
The other folder holds the Windows based tools for the TwlBkpCheck tool, the contents are:
* TwlBkpCheck.sln - Visual Studio solution (project file)

The **Bin** folder just contains the compiled results of both **TWLBackupBlock** and **FalsifyTwlBackup**:
* FalsifyTwlBackup.exe
* TwlBackupBlock.dll - dynamic library used by FalsifyTwlBackup.exe to read TWL: backup files

### TWLBackupBlock (.net C# Project)
This is a Dynamic Library that provides encryption / decryption processing for TWL backup data. Not sure if this is for **TAD** files, the contents are:
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

### FalsifyTwlBackup (.net C# Project)
This is a .net C# executable that seems to modify a TWL backup by removing sections of bytes and replacing with 0-only bytes.

There seems to be 6 different categories of modifications it will make (1xx,2xx,3xx,4xx,5xx and 9xx).

This program is to presumably create bad input for the 3DS **TwlBkpImporter** application to test that it correctly errors on bad input. The contents of this folder are:
* Category1xx.cs
* Properties.cs - Standard C# file with meta-data
* Category9xx.cs
* main.cs
* Category5xx.cs
* FalsifyTwlBackup.csproj - Standard C# Project file
* Properties/AssemblyInfo.cs - Standard C# file with meta-data
* Falsify.cs - functions such as **CreateImproperData**
* Category4xx.cs
* Category3xx.cs
* Category2xx.cs

When trying to run the **FalsifyTwlBackup.exe** executable the following usage information is printed:
```bash
./FalsifyingTwlBackup.exe BACKUP_FILE ENC_KEY_FILE MAC_KEY_FILE [-mode MODE] [-type TYPE]
  BACKUP_FILE  : *.bin
  ENC_KEY_FILE : *.txt
  MAC_KEY_FILE : *.txt

  MODE
   all (default) : output all falsifying pattern
   cat:CAT_NUM   : output all pattern of CAT_NUM category
                     ex) -mode cat:100 -> falsifying 100,101,102....
   each:PAT_NUM  : output PAT_NUM pattern
                     ex) -mode each:204 -> falsifying 204 only
   verify        : verify backup file

  TYPE
   normal (default) : normal bkp type
   wps              : bkp with private save type
   legacy           : legacy bkp type
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Second Mystery from the Paladin Leak, what were the DSi Backup tools for 3DS used for (FalsifyTwlBackup). They seem to be tools to import a DSi Backup and &quot;Falsify&quot; it but why would this be needed on the 3DS? <a href="https://t.co/1BrJ1wmgII">https://t.co/1BrJ1wmgII</a> <a href="https://twitter.com/hashtag/nintendoleak?src=hash&amp;ref_src=twsrc%5Etfw">#nintendoleak</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1312490952334868481?ref_src=twsrc%5Etfw">October 3, 2020</a></blockquote>


---
# Nintendo RED 3DS Tools (ctr_tools_red.zip)
In order to access the contents of the SVN repository you have to run the following command:
```bash
svn checkout "file:///$PWD" trunk
```

The folders that will be checked out into the trunk directory are:
* **HSM_Server** - Hardware Security Module Server for signing content from the 3DS Store
* MakeUpdatePartition - Create the Update Partition in a 3DS Game
* MasterEditorCTR
* MediaSizeTestProjectMaker
* MetaDataExtractor
* RatingEditorCTR
* RomCompareTool
* mastering

## HSM Server by Sarion Systems Research
**Sarion Systems Research** is a Japanese Company who specialise in Hardware Security Modules (HSM) [^2].

This is the source code to a server that issues HSM certificates for 3DS downloadable content. This acts in a similar way to browsers certificate authorities to make sure that the software being sent to the 3DS is signed by official sources and has not been tampered with.

Basically it is Java EE web application source code that gets compiled into a **war** file and uses apache as the web server for static content.

They call the application Web Service Signer (WSSigner) and it comes in a few parts:
* **Wssigner-client** - sample client -this would probably have been used to help development of the 3DS Game Store, although of course it would not have been written in Java like this sample is
* **WSSigner-API** - The main API uses to get signed content and make sure the content is correct

Unless you are really interested in security and cryptography you will probably not be interested in this source code. 

---
## MakeUpdatePartition
This folder contains the source code for a tool that updated *.cia files and adds a standard update partition into it. 

Presumably this tool is used just before mastering the final Game card so that it will contain the necessary update data so that if the user doesn't have a high enough firmware version, they can update via the Game Card.

Most if not all 3DS game cards had update partitions with the latest firmware available at the time on them.

This project is a mix of Python and bash scripts a long with two executables which we are not sure the purpose of:
* imas-tool.4.8.1.exe
* CommandLineOls.exe

Note that many of these files confirm that the 3DS operating Systems name was "Horizon".

### CommandLineOls (Official Licensing Service/Server?)
When you try to run the ** executable from the Command Prompt it provides the following usage information:
```bash
Usage: ./CommandLineOls *.xml threadNum[default=1]
```

It is not clearly understood the purpose, but we believe it is a tool to contact the Official Licensing Server (OLS) to create signed licenses for each game title, presumably it is quite an extensive operation if you can customise the number of threads used!

Although there is a few scripts that can give a clue as to what this tools does, they are:
* genDevOlsXml.py
* genOlsXml.py
* genProdOlsXml.py

When you try to run one of the python files it prints the following usage information:
```bash
Usage:
  genOlsXml.py UserName Password Tin downloadDirectory serverName titlePassword ciaFiles...
```

The Username and Password will be for a Nintendo user admin, serverName will presumably be one of the licensing servers that handles 3DS content.

### IMAS Tool (Item Uploader?)
The executable **imas-tool.4.8.1.exe** is quite interesting, while we don't quite know the purpose of it, some of the contents can be seen using a simple `strings` command.

It contains compiled Java classes for apache and even some from Nintendo, this is because the executable is using **Launch4J**, so it's a Java application that looks like a standard executable.
 
You can see the Nintendo files in the table below.

Name | Possible Purpose
---|---
jp/co/nintendo/imas/tool/ImasTool.class | 
jp/co/nintendo/imas/tool/MailSender.class | 
jp/co/nintendo/imas/tool/util/PropertyManager$PropertyKey.class | 
jp/co/nintendo/imas/tool/util/UserConfigurationManager.class | 
jp/co/nintendo/imas/tool/util/Messages.class | 
jp/co/nintendo/imas/tool/util/UserConfigurationManager$1.class | 
jp/co/nintendo/imas/tool/util/ImasUrlUtil.class | 
jp/co/nintendo/imas/tool/util/PropertyManager.class | 
jp/co/nintendo/imas/tool/util/ImasToolUtil.class | 
jp/co/nintendo/imas/tool/xml/Proxy.class | 
jp/co/nintendo/imas/tool/xml/BmsAccount.class | 
jp/co/nintendo/imas/tool/xml/Operation.class | 
jp/co/nintendo/imas/tool/xml/Configuration.class | 
jp/co/nintendo/imas/tool/xml/Operations.class | 
jp/co/nintendo/imas/tool/xml/Titles.class | 
jp/co/nintendo/imas/tool/xml/ObjectFactory.class | 
jp/co/nintendo/imas/tool/xml/Notification.class | 
jp/co/nintendo/imas/tool/xml/RsaServerDownNotification.class | 
jp/co/nintendo/imas/tool/xml/Title.class | 
jp/co/nintendo/imas/tool/xml/ServerInfo.class | 
jp/co/nintendo/imas/tool/HttpClientManager$1.class | 
jp/co/nintendo/imas/tool/OlsException.class | 
jp/co/nintendo/imas/tool/ResponseParser.class | 
jp/co/nintendo/imas/tool/ResponseParser$1.class | 
jp/co/nintendo/imas/tool/NotificationException.class | 
jp/co/nintendo/imas/tool/HttpClientManager.class | 
jp/co/nintendo/imas/tool/BtsException.class | 
jp/co/nintendo/imas/tool/BmsException.class | 
jp/co/nintendo/imas/tool/HttpClientManager$3.class | 
jp/co/nintendo/imas/tool/HttpClientManager$2.class | 
jp/co/nintendo/imas/tool/MailSender$1.class | 
jp/co/nintendo/imas/tool/enums/OperationEnum.class | 
jp/co/nintendo/imas/tool/enums/CountryEnum.class | 
jp/co/nintendo/imas/tool/enums/PlatformEnum.class | 
jp/co/nintendo/imas/tool/enums/BmsErrorCodeEnum.class | 
jp/co/nintendo/imas/tool/enums/TitleTypeEnum.class | 
jp/co/nintendo/imas/tool/ols/BtsOperation$UploadStatusTask.class | 
jp/co/nintendo/imas/tool/ols/BtsOperation.class | 
jp/co/nintendo/imas/tool/ols/OlsOperation.class | 
jp/co/nintendo/imas/tool/ols/AbstractOlsOperation.class | 
jp/co/nintendo/imas/tool/HttpClientManager$4.class | 
jp/co/nintendo/imas/tool/HttpClientManager$5.class | 
jp/co/nintendo/imas/tool/messages.properties | 
jp/co/nintendo/imas/tool/messages_ja.properties | 
jp/co/nintendo/imas/tool/HttpManager.class | 
jp/co/nintendo/imas/tool/RsaServerDownException.class | 
jp/co/nintendo/imas/tool/Constants.class | 
META-INF/maven/jp.co.nintendo/imas-tool/pom.xml | 
META-INF/maven/jp.co.nintendo/imas-tool/pom.properties | 

If you try to run the application with a Java Runtime installed it shows the following usage information and then quits:
> Usage:
> - Execute from command line : ./item-uploader.exe [Configuration file]
> - Execute from explorer : Drag & drop a configuration file over item-uploader.exe icon

---
# IRIS Software Development Kit
The IRIS project was supposed to be the next in the Game Boy line, a more powerful Game Boy Advance with a single screen. Later the project was changed into the **NITRO** project when another screen was added and it became the Nintendo DS.

## Files from December 3rd 2003 for ToolMaker (irisSDKbulb-snapshot-031203-forToolMaker.tar.gz)
The **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** archive is the earliest known Software development kit for the IRIS project.

There are some files that are not in this archive that are in the **irisSDKbulb-snapshot-031203.tar.gz** archive instead, namely the **docs/_private/** folder which will be covered in the next section.

As for the files in this archive they are just earlier versions of the IRIS SDK so check out the section below for the files in the last known version of the IRIS SDK as it is very similar.

---
## Files from December 3rd 2003 (irisSDKbulb-snapshot-031203.tar.gz)
This is almost exactly the same as the content from **irisSDKbulb-snapshot-031203-forToolMaker.tar.gz** but contains some new files which I guess are not to be sent in the **forToolMaker** build (whatever that is).

All the new files are under the folder **docs/_private/** which is a completely new directory, these files are:
* how-to-make-headers.txt
* web
* CodeWarrior

---
## Files from December 12th 2003 (irisSDKbulb-snapshot-031212.tar.gz)
The contents are pretty much the same as December 3rd but there has been development work so there isn't that many new files but quite a few source files have changed, which is to be expected.

Nothing of real interest is in this archive unless you want to see the progress made between two different snapshots. Check out the last IRIS SDK (**irisSDKbulb-snapshot-040120.tar.gz**) for an overview of the contents of the IRIS SDK.

---
## Private Files from 20th January 2004 (irisSDKbulb-snapshot-040120-private.tar.gz)
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
## Files from 20th January 2004 (irisSDKbulb-snapshot-040120.tar.gz)
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
./iris_sp.h | 
./iris_sp/init | 
./iris_sp/init/crt0.h | 
./iris_sp/hw | 
./iris_sp/hw/mmap_global.h | 
./iris_sp/hw/ioreg_SPSND.h | 
./iris_sp/hw/ioreg.h | 
./iris_sp/hw/mmap_wram.h | 
./iris_sp/hw/ioreg_SPPAD.h | 
./iris_sp/hw/armArch.h | 
./iris_sp/hw/ioreg_SPMPI.h | 
./iris_sp/hw/ioreg_SPDISP.h | 
./iris_sp/hw/ioreg_SPOS.h | 
./iris_sp/hw/ioreg_SPMI.h | 
./iris_sp/code32.h | 
./iris_sp/os.h | 
./iris_sp/memorymap.h | 
./iris_sp/snd | 
./iris_sp/snd/snd_capture.h | 
./iris_sp/snd/snd_channel.h | 
./iris_sp/snd/snd.h | 
./iris_sp/snd/snd_init.h | 
./iris_sp/snd/snd_util.h | 
./iris_sp/os | 
./iris_sp/os/interrupt.h | 
./iris_sp/os/system.h | 
./iris_sp/code16.h | 

### IRIS Header files (/include/iris)
These files are for the ARM9 CPU core and would be included in your C/C++ source code in order to use the functionalities provided by the main processor SDK library.

Name | Description
---|---
./iris/init | 
./iris/init/crt0.h | 
./iris/ARM7-TEG.lcf | 
./iris/version.h | 
./iris/hw | 
./iris/hw/ioreg_PAD.h | 
./iris/hw/ioreg_G3X.h | 
./iris/hw/mmap_global.h | 
./iris/hw/ioreg_G3.h | 
./iris/hw/ioreg_OS.h | 
./iris/hw/mmap_shared.h | 
./iris/hw/ioreg.h | 
./iris/hw/mmap_main.h | 
./iris/hw/armArch.h | 
./iris/hw/ioreg_MI.h | 
./iris/hw/mmap_vram.h | 
./iris/hw/ioreg_GX.h | 
./iris/hw/mmap_tcm.h | 
./iris/hw/ioreg_SPI.h | 
./iris/hw/ioreg_CP.h | 
./iris/hw/ioreg_G2.h | 
./iris/types.s | 
./iris/code32.h | 
./iris/types.h | 
./iris/mi | 
./iris/mi/wram.h | 
./iris/mi/dma.h | 
./iris/mi/exMemory.h | 
./iris/ARM9-BB.lcf | 
./iris/misc.h | 
./iris/fx | 
./iris/fx/fx.h | 
./iris/fx/fx_mtx33.h | 
./iris/fx/fx_trig.h | 
./iris/fx/fx_mtx43.h | 
./iris/fx/fx_cp.h | 
./iris/fx/fx_mtx44.h | 
./iris/fx/fx_mtx.h | 
./iris/fx/fx_const.h | 
./iris/fx/fx_vec.h | 
./iris/os.h | 
./iris/ARM7-BB.lcf | 
./iris/pad | 
./iris/pad/pad.h | 
./iris/ARM9-TEG.lcf | 
./iris/memorymap.h | 
./iris/ARM9-TEG.lcf.template | 
./iris/gx | 
./iris/gx/gx.h | 
./iris/gx/g3c.h | 
./iris/gx/g3x.h | 
./iris/gx/g3.h | 
./iris/gx/g2_oam.h | 
./iris/gx/gxcommon.h | 
./iris/gx/gx_vramcnt.h | 
./iris/gx/g2.h | 
./iris/gx/gx_load.h | 
./iris/gx/g3imm.h | 
./iris/gx/g3_util.h | 
./iris/gx/gx_capture.h | 
./iris/gx/g3b.h | 
./iris/gx/gx_bgcnt.h | 
./iris/os | 
./iris/os/spinLock.h | 
./iris/os/halt.h | 
./iris/os/protectionUnit.h | 
./iris/os/context.h | 
./iris/os/cache.h | 
./iris/os/message.h | 
./iris/os/protectionRegion.h | 
./iris/os/emulator.h | 
./iris/os/systemCall.h | 
./iris/os/timer.h | 
./iris/os/thread.h | 
./iris/os/printf.h | 
./iris/os/interrupt.h | 
./iris/os/system.h | 
./iris/os/mutex.h | 
./iris/os/utility.h | 
./iris/os/init.h | 
./iris/os/exception.h | 
./iris/os/arena.h | 
./iris/os/alloc.h | 
./iris/os/tcm.h | 
./iris/cp | 
./iris/cp/sqrt.h | 
./iris/cp/divider.h | 
./iris/code16.h | 
./iris.h | 

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

---
# References
[^1]: [The OMake build system](http://omake.metaprl.org/index.html)
[^2]: [HSM - Sarion Systems Research](https://translate.googleusercontent.com/translate_c?depth=1&hl=en&prev=search&pto=aue&rurl=translate.google.com&sl=ja&sp=nmt4&u=https://www.sarion.co.jp/biz/biz_area_hsm.html&usg=ALkJrhhZSaL83IoTbt-2GDjG7yidTS4zSA)
