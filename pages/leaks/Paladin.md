---
layout: post
tags: 
- leak
- ds
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
editlink: /leaks/Paladin.md
twitterimage: https://www.retroreversing.com/public/images/leaks/PaladinLeak.jpg
---

The Paladin leak occurred on the 30th of September 2020 and included about 2.4GB of content related to the Nintendo IRIS and Pokemon spinoffs. This was the third Nintendo leak in September 2020 with the First being the Emerald leak and the second being the Platinum leak.

# Files Leaked
* paladin.7z (2.44GB)

# Contents of Paladin.7z
When the **paladin.7z** archive has been extracted it creates the following contents:
* Dungeon - Pokemon Mystery Dungeon GBA and NDS ROMs
* E3 - Pokemon Leaf Green and Fire Red GBA ROMS
* FMC_DISK.7z - Famicom Disc System Lot Check ROMS
* NetCardWads
* PokeRanger_Euro.zip
* Ranger_EURO.zip
* Ranger_e3_060420
* ctr_card_test.zip
* ctr_eFuse.zip
* ctr_firmware.zip
* ctr_test_tools.zip
* ctr_tools_red.zip
* irisSDKbulb-snapshot-031203-forToolMaker.tar.gz
* irisSDKbulb-snapshot-031203.tar.gz
* irisSDKbulb-snapshot-031212.tar.gz
* irisSDKbulb-snapshot-040120-private.tar.gz
* irisSDKbulb-snapshot-040120.tar.gz
* rangereu.7z

---
#  Famicom Disk System Lot Check ROMS (FMC_DISK.7z)
Similar to the previous Gigaleak, this leak also contains content from the Nintendo Lot Check process, in this case it was the Famicom Disk System ROMs. Some of these games had been previously unreleased, you can find more details in our post about the Nintendo Lot Check ROMs.

{% include link-to-other-post.html post="/nintendo-lot-check" description="For full information on the new Famicom Disk System ROMs in the leak check out this post." %}

---
# E3 (Leaf Green and Fire Red GBA ROMS)

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
# Pokemon Mystery Dungeon (Dungeon)
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
