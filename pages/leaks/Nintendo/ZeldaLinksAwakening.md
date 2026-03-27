---
layout: post
tags:
- gameboy
- leak
- sourcecode
title: Gigaleak - Original Zelda Links Awakening Source Code (DMG)
category: leak
image: /public/images/leaks/Zelda Links Awakening Source Code.jpg
twitterimage: http://www.retroreversing.com/public/images/leaks/Zelda Links Awakening Source Code.jpg
permalink: /zelda-links-awakening
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Original Zelda Links Awakening Source Code (DMG)
    url: #
recommend:
 - gameboy
 - leak
 - sourcecode
editlink: /leaks/Nintendo/ZeldaLinksAwakening.md
updatedAt: '2026-03-27'
---

The Zelda Links Awakening source code was released in the original Gigaleak inside **dmg.7z**, itself stored inside **Other.7z**.

This part of the leak contains much more than a single source snapshot. The archive preserves the original SRD Japanese source tree, several Japanese and English revision folders, later US v2 and Canadian French revision folders, separate German and French localisation trees, and a companion character/tile asset folder under `その他`.

{% capture root_body %}
Contains two subdirectories.
{% endcapture %}

{% capture folder_items %}
- DMG - Contains the main Assembly source code
- その他 - Translates to Miscellaneous and contains the IS-Character tiles/sprites
{% endcapture %}

{% include connected-folder-tree.html folder="dmg.7z" path="/dmg.7z" body=root_body version="dmg.7z" content=folder_items %}

---
# DMG Source Code (/DMG)
{% capture dmg_body %}
The **DMG** folder is the main location for all the assembly language source code that makes up the original Game Boy version of The Legend of Zelda: Link's Awakening.
{% endcapture %}

{% capture folder_items %}
- XXX__ゼルダの伝説 夢を見る島 - Japanese title of The Legend of Zelda: Link's Awakening
- Source - The main source code for the game
- DMG_Zelda_DE_FR - Original German and French translation (also included Canadian French)
- DMG_Zelda_DE_FR_v1 - Version 1 of German and French (does not include Canadian French)
- DMG_Zelda_EN_v2_CFR_v1 - Version 1 of the English translation and also contains Canadian French
- DMG_Zelda_JP_EN - Original version of the English translation
- SRD_DMG_Zelda_JP_v0 - Original source code from Systems Research and Development (SRD)
{% endcapture %}

{% include connected-folder-tree.html folder="DMG" path="/DMG" body=dmg_body version="/DMG" content=folder_items %}

---
## Source Variants and Localisation Branches
{% capture source_variants_body %}
The `Source` directory preserves several parallel development branches rather than just one final build. Each language branch is split into three disk-style folders matching the original floppy backups: `01` for core game logic, `02` for map, message, title, and sound data, and `03` for enemy logic. Most branches also include a matching `Character` folder containing `.CHR` graphics data and an `RZ.ICE` compressed asset.

In practice this means the leak documents how Link's Awakening moved from the original Japanese codebase into the early US build chain and then into the German, French, and Canadian French localisations.
{% endcapture %}

{% capture folder_items %}
- SRD_DMG_Zelda_JP_v0 - Original SRD Japanese source backup with documentation and SDK tools
- DMG_Zelda_JP_EN - Mixed Japanese and early English/US revision history
- DMG_Zelda_DE_FR - German, French, and Canadian French branches
- DMG_Zelda_DE_FR_v1 - A later German/French-only localisation set
- DMG_Zelda_EN_v2_CFR_v1 - US v2 and Canadian French v1 branches
{% endcapture %}

{% include connected-folder-tree.html folder="Source" path="/Source" body=source_variants_body version="/Source" content=folder_items %}

---
## Source Variants and Localisation Branches
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Source</div>
  <div markdown="1" class="rr-post-markdown">
The `Source` directory preserves several parallel development branches rather than just one final build. Each language branch is split into three disk-style folders matching the original floppy backups: `01` for core game logic, `02` for map, message, title, and sound data, and `03` for enemy logic. Most branches also include a matching `Character` folder containing `.CHR` graphics data and an `RZ.ICE` compressed asset.

In practice this means the leak documents how Link's Awakening moved from the original Japanese codebase into the early US build chain and then into the German, French, and Canadian French localisations.
  </div>
</section>

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/Source" date="Development branches"></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">SRD_DMG_Zelda_JP_v0 - Original SRD Japanese source backup with documentation and SDK tools</li>
      <li class="rr-info-gen">DMG_Zelda_JP_EN - Mixed Japanese and early English/US revision history</li>
      <li class="rr-info-gen">DMG_Zelda_DE_FR - German, French, and Canadian French branches</li>
      <li class="rr-info-gen">DMG_Zelda_DE_FR_v1 - A later German/French-only localisation set</li>
      <li class="rr-info-gen">DMG_Zelda_EN_v2_CFR_v1 - US v2 and Canadian French v1 branches</li>
    </ul>
</div>

---
## Original SRD Zelda Source code (Japan version 0) (SRD_DMG_Zelda_JP_v0)
{% capture srd_body %}
This folder contains the source code for the Japanese version of Links Awakening by **Systems Research and Development** (SRD) where helped Nintendo work on various titles.

We are starting with this folder as it seems to be the original and the other folders are just localised changes to the files in this folder, so this is the most important folder in the whole leak.

When they were preserving the source code to Zelda Links Awakening they used 3 Floppy Disks for the source code and another for the Game Boy SDK and finally one for the documentation and other documents that they decided to call **face**.
{% endcapture %}

{% capture folder_items %}
- 1 - Disk 1 of the source code containing main logic and player control
- 2 - Disk 2 containing the title sequence, background data for dungeon and ground, and sound
- 3 - Disk 3 containing the enemy logic
- face - Documentation and other misc documents
- system - Official Nintendo Game Boy SDK
{% endcapture %}

{% include connected-folder-tree.html folder="SRD_DMG_Zelda_JP_v0" path="/SRD_DMG_Zelda_JP_v0" body=srd_body version="/SRD_DMG_Zelda_JP_v0" content=folder_items %}


---
## Japanese and Early English Revision Tree (DMG_Zelda_JP_EN)
{% capture jp_en_body %}
This branch preserves both Japanese and US revision histories. The directory names show two Japanese `v0` revisions, three Japanese `v1` revisions, three US `v0` revisions, and separate character data folders for the Japanese v1 and US v0 builds.

It is especially useful because it shows the project in transition from the Japanese source base into the earliest English localisation work, including `.BAK` backups left beside files such as `ZEND.DMG` and `ZPL.DMG`.
{% endcapture %}

{% capture folder_items %}
- JP_v0_01, JP_v0_02, JP_v0_03 - Early Japanese revision set
- Jp_v1_01, Jp_v1_02, Jp_v1_03 - Later Japanese revision set
- US_v0_01, US_v0_02, US_v0_03 - Early English/US localisation revision set
- JP_v1_Character - Japanese v1 character/tile graphics files (`C1.CHR` to `C8.CHR`, `RZ.ICE`, `GAL.BAT`)
- US_v0_Character - Early US character/tile graphics files
{% endcapture %}

{% include connected-folder-tree.html folder="DMG_Zelda_JP_EN" path="/DMG_Zelda_JP_EN" body=jp_en_body version="/DMG_Zelda_JP_EN" content=folder_items %}

---
## German, French, and Canadian French Branches (DMG_Zelda_DE_FR)
{% capture de_fr_body %}
The `DMG_Zelda_DE_FR` tree contains three parallel localisation branches, each split into the same three floppy-style disks as the main source: German, French, and Canadian French. Each language also ships with its own `Character` folder containing the tile/font graphics used by that build.

The second disk for these branches swaps in language-specific music/message data files such as `BGM_1G.HEX` for German and `BGM_1F.HEX` for French and Canadian French.
{% endcapture %}

{% capture folder_items %}
- German_01, German_02, German_03 - German localisation source split across three disks
- French_01, French_02, French_03 - French localisation source split across three disks
- CanadianFrench_01, CanadianFrench_02, CanadianFrench_03 - Canadian French localisation source split across three disks
- German_Character - German character/font graphics
- French_Character - French character/font graphics
- CanadianFrench_Character - Canadian French character/font graphics
{% endcapture %}

{% include connected-folder-tree.html folder="DMG_Zelda_DE_FR" path="/DMG_Zelda_DE_FR" body=de_fr_body version="/DMG_Zelda_DE_FR" content=folder_items %}

---
## Later German and French Branches (DMG_Zelda_DE_FR_v1)
{% capture de_fr_v1_body %}
`DMG_Zelda_DE_FR_v1` is a slimmer follow-up tree that keeps only the German and French branches. Unlike the earlier `DMG_Zelda_DE_FR` folder, Canadian French is no longer present here.
{% endcapture %}

{% capture folder_items %}
- German_01, German_02, German_03 - Later German localisation revision set
- French_01, French_02, French_03 - Later French localisation revision set
- German_Character - German character/font graphics
- French_Character - French character/font graphics
{% endcapture %}

{% include connected-folder-tree.html folder="DMG_Zelda_DE_FR_v1" path="/DMG_Zelda_DE_FR_v1" body=de_fr_v1_body version="/DMG_Zelda_DE_FR_v1" content=folder_items %}

---
## US v2 and Canadian French v1 Branches (DMG_Zelda_EN_v2_CFR_v1)
{% capture en_v2_cfr_v1_body %}
This folder captures a later English branch labelled `US_v2` alongside a `CanadianFrench_v1` branch. As with the other localisation trees, each version is stored as three floppy-style source folders plus a matching `Character` asset folder.
{% endcapture %}

{% capture folder_items %}
- US_v2_01, US_v2_02, US_v2_03 - Later English/US revision set
- CanadianFrench_v1_01, CanadianFrench_v1_02, CanadianFrench_v1_03 - Canadian French v1 revision set
- US_v2_Character - US v2 character/font graphics
- CanadianFrench_v1_Character - Canadian French v1 character/font graphics
{% endcapture %}

{% include connected-folder-tree.html folder="DMG_Zelda_EN_v2_CFR_v1" path="/DMG_Zelda_EN_v2_CFR_v1" body=en_v2_cfr_v1_body version="/DMG_Zelda_EN_v2_CFR_v1" content=folder_items %}


---
### Disk 1 (SRD_DMG_Zelda_JP_v0/1)
{% capture disk1_body %}
The first disk contains the files described in the table below:
{% endcapture %}

{% include connected-folder-tree.html folder="1" path="/1" body=disk1_body %}

File Name | Extension | Description
---|---|---
ZE8 | .DMG | Game Boy Z80 Assembly file for Enemy Data (it is only here because it couldn't fit on Disk 3)
ZEND | .DMG | Game Boy Z80 Assembly file for the Ending Sequence, e.g Credits
ZES | .DMG | Game Boy Z80 Assembly file for the Enemy main logic
ZEX | .DMG | Game Boy Z80 Assembly file for extra subroutines
ZMA | .DMG | Game Boy Z80 Assembly file for Main game loop
ZPL | .DMG | Game Boy Z80 Assembly file for player control
ZRAM | .DMG | Game Boy Z80 Assembly file for RAM handling
ZROM | .DMG | Game Boy Z80 Assembly file for ROM handling



---
### Disk 2 (SRD_DMG_Zelda_JP_v0/2)
{% capture disk2_body %}
The second disk contains the files described in the table below:
{% endcapture %}

{% include connected-folder-tree.html folder="2" path="/2" body=disk2_body %}


File Name | Extension | Description
---|---|---
BGM_1 | .HEX | Background Music Data 1
BGM_2 | .HEX | Background Music Data 2
GBMSDT | .DMG | Game Boy Z80 Assembly file for Message Data
SE | .HEX | Sound Effects Data
ZBD | .DMG | Game Boy Z80 Assembly file for Background Character Bank data
ZBN | .DMG | Game Boy Z80 Assembly file for Background Character Number data
ZBS | .DMG | Game Boy Z80 Assembly file for Resident Subroutine 2
ZCO | .DMG | Game Boy Z80 Assembly file for Resident Subroutine 1
ZDB | .DMG | Game Boy Z80 Assembly file for Dungeon Background Data
ZED | .DMG | Game Boy Z80 Assembly file for Enemy Set Data
ZGB | .DMG | Game Boy Z80 Assembly file for Ground Background Data Address
ZGD | .DMG | Game Boy Z80 Assembly file for Ground Background Data
ZMS | .DMG | Game Boy Z80 Assembly file for Message Control Data
ZS1 | .DMG | Game Boy Z80 Assembly file for Title Sequence 2
ZSD | .DMG | Game Boy Z80 Assembly file for Sound control
ZTI | .DMG | Game Boy Z80 Assembly file for Title Sequence 1
ZVD | .DMG | Game Boy Z80 Assembly file for Demo Background VRAM Data


---
### Disk 3 (SRD_DMG_Zelda_JP_v0/3)
{% capture disk3_body %}
The third disk contains the files for enemy logic described in the table below:
{% endcapture %}

{% include connected-folder-tree.html folder="3" path="/3" body=disk3_body %}


File Name | Extension | Description
---|---|---
ZE2 | .DMG | Game Boy Z80 Assembly file for Enemy Data 2
ZE3 | .DMG | Game Boy Z80 Assembly file for Enemy Data 3
ZE4 | .DMG | Game Boy Z80 Assembly file for Enemy Data 4
ZE5 | .DMG | Game Boy Z80 Assembly file for Enemy Data 5
ZE6 | .DMG | Game Boy Z80 Assembly file for Enemy Data 6
ZE7 | .DMG | Game Boy Z80 Assembly file for Enemy Data 7
ZEN | .DMG | Game Boy Z80 Assembly file for Enemy Data 1


---
### Face Documentation (SRD_DMG_Zelda_JP_v0/face)
{% capture face_body %}
The `face` folder is a mixed backup disk containing developer notes, text resources, helper batch files, and a number of unidentified binary data files. Unlike the `1`, `2`, and `3` disks, it is not a clean source-only backup.

Several files are clearly readable text documents, but the numbered `21.DAT` to `48.DAT` files appear to be binary data blocks rather than plain text documentation.
{% endcapture %}

{% include connected-folder-tree.html folder="face" path="/face" body=face_body %}


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
21 | .DAT |
22 | .DAT |
23 | .DAT |
24 | .DAT |
25 | .DAT |
26 | .DAT |
27 | .DAT |
28 | .DAT |
31 | .DAT |
32 | .DAT |
33 | .DAT |
34 | .DAT |
35 | .DAT |
36 | .DAT |
37 | .DAT |
38 | .DAT |
41 | .DAT |
42 | .DAT |
43 | .DAT |
44 | .DAT |
45 | .DAT |
46 | .DAT |
47 | .DAT |
48 | .DAT |
BOM2 | .DAT | The game credits in French
BOM3 | .DAT | Dungeon room list e.g Tail Cave
BOM4 | .DAT | A lisgt of PC-98 games that it looks like they were going to share with each other (piracy?!)
BOMB | .DAT | list of instructions for finding seashells in the game
D1A0 | .DAT | List of all the Cave rooms e.g Fairy Fountain Cave, House of the Quadruplets
MRT | .DAT | A note titled "The Old Man with a Beard" about being an Older programmer by Kazuaki Morita
MRT2 | .DAT | Schedule for a 1993 Fishing Trip to **Nanakawa Dam** in Wakayama Prefecture
MRTX | .DAT | French translations of some of the in-game dialog
SA | .DAT | The game credits in English
SA2 | .DAT | The game credits in German
SA3 | .DAT | Code for special effects such as smoke and water splashes
SBA | .DAT | List of convenient subroutines for enemy use
SPECIAL | .TXT | Defines the Alphabet including German special characters
TEST | N/A | Seems to be the same as ZMA.DMG but with a bunch of modifications
ZCPG | .BAT | Not a real batch file its actually just text explaining the files for the German Translation
ZCPS | .BAT | Not a real batch file its actually just text explaining the files for the French Translation
ZE2 | .DMG | Game Boy Z80 Assembly file for Enemy 2
ZED | .DMG | Game Boy Z80 Assembly file for Enemy set data

### The Old Man with a Beard
The file `MRT.DAT` is a note written by Kazuaki Morita about being an older programmer in the Industry:
> When someone starts fishing, the first catch is said to be a memorable one regardless of its size. Similarly, there are irreplaceable works for game developers. For me, it's Super Mario Bros.
> The program area was a huge 32 kilobytes at the time, and I think I crammed a lot into it. If there were a few bytes of memory left, there would be an uproar.
>
> Then there were Mario's infinite replication and the secret world... I think that's when the term "cheat code" started to be used instead of "bug technique."
>It has been about eight years since then, and I have been involved in various works, but as I age, I feel a decrease in my mental agility and memory.
>
> However, I think I have become more skilled at finding shortcuts. It is often said that a programmer's career lasts until they are 30 years old, but this is a social convention that says "you don't have to program anymore" rather than "you can't program anymore."
> If I feel like I have reached my limit, I will quit this job, because there is no such thing as a "programmer who doesn't program."
>
> Programmer: Kazuaki Morita


---
### Nintendo Game Boy DMG SDK Tools (SRD_DMG_Zelda_JP_v0/system)
{% capture system_body %}
The `system` folder contains the Nintendo Game Boy (DMG) software development toolchain used alongside the source backup. This includes assemblers, conversion utilities, shell helpers, and lookup tables required to build or process Game Boy assets on the original development setup.
{% endcapture %}

{% include connected-folder-tree.html folder="system" path="/system" body=system_body %}


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
A | .EXE | DMG Relocatable Macro Assembler Version 1.00
ASMB | .EXE | 6502 Assembler  Version 1.10 (Famicom tool created in 1987)
ASMD | .EXE | DMG Macro Assembler  Version 1.01
ASMDMG | .EXE | DMG Macro Assembler  Version 1.01 (Identical to ASMD.EXE)
CGE2DMG | .EXE | Converts either CGE or DCG Character graphics to source code (.DMG)
CGEDCG | .BAT | Batch file for running FCV with the DCG2BYT script
DCG2BYT | .CVT | FCV Script to convert DCG Character Graphics files to assembly code (.DMG)
DCGDMG | .BAT | Batch file for character file conversion of a .DCG file to a .DMG source file
DMGFUNC | .TB0 | Custom binary format possibly used by ISD debugger tool contains the string "SENGOKU" at the start
FCV | .EXE | File Convert Program  Version 1.03 (Reads in .CVT files)
FDT | .EXE | FMS Debugger  Version 2.02 (Famicom Tool?)
GENBYTE | .CVT | FCV Script to convert a .COM file to a NES/SNES .X65 source file
HDT | .EXE | MMC/HVC Debugger  Version 03.05 (Famicom/NES Dubugger)
IS65 | .EXE | 6502,65816 Relocatable Macro Assembler version 1.00 (Why is there a SNES assembler in here?)
ISD | .EXE | I.S. Debugger  Version 1.00c
ISDMG | .EXE | DMG Relocatable Macro Assembler Version 1.00
ISLINK | .EXE | ISASM Linker  Version 1.00
L | .EXE | ISASM Linker  Version 1.00 (Presumably just copied to have a shorter name)
PW | .EXE | P-ROM Support Program Version 1.26
PW2 | .EXE, .TB0 | P-ROM Support Program Version 2.02d6
SCR2DMG | .COM | MS-DOS Command File Executable for converting .scr files to .DMG files for assembling
SHL | .COM, .KEY | MS-DOS Command File Executable but not sure what it is for
SHVC | .EXE | SHVC Debugger  Version 1.00a
VRAMTR | .CVT | VRAM Transfer script that converts a .SCR screen file to either a NES or SNES .X65 file
VUP | .EXE | Version UP Program  Version 2.09

**Referenced File Formats**
This SDK seems to use a number of different file formats, but it is not clear what exactly is the purpose of each:
* **.DMG** - Assembly source code for the Dot Matrix Game (Game Boy)
* **.CGE** - Character Graphics data (For famicom?)
* **.DCG** - Character Graphics data (for DMG Game Boy?)
* **.CVT** - Custom Conversion scripts that can be executed with FCV
* **.SCR** - Screen file maybe containing location of character tiles in a level?
* **.X65** - Either Famicom or Super Famicom source code
* **.COM** - Unsure if this is a Windows Command File or something else

**Famicom SDK Files**
One interesting file is that `HDT.EXE` is included here which is the NES/Famicom Debugger, as far as I know this is the first time a file from the Famicom SDK has ever been leaked. As no other official NES/Famicom SDK had been leaked this is quite remarkable. It was written by Intelligent Systems between 1986-1989 and seems to read in three file formats: CHR (Character/Tile Data), SCR (Screen data? or Source Data?) and CGD (No Idea, maybe Character Graphic Designer?).

**SNES Assembler**
Another interesting file is that `IS65.EXE` is included here which is the Official Super Nintendo Entertainment System assembler created by Intelligent Systems in 1990. It seems to have been written by the developer **Toshio Sengoku**.

The file `VRAMTR.CVT` which is a script in a custom programming language that is parsed by the `FCV` program. The comments at the beginning of the file indicate that it takes an input file with a ".SCR" extension and outputs a file with a ".X65" extension.

**File Convert Program**
The File Convert Program (`FCV`) tool was created in 1987 by Intelligent Systems so it is likely it was also part of the Famicom Software Development Kit.

The commands in the script appear to be performing various operations related to transferring data to VRAM. For example, the `VRAD=$2000` command sets the screen address, and the `DTPT=0` command initializes the data pointer. The script also includes commands for writing screen data and attribute data to VRAM.

**Character conversion**
The Bash script `DCGDMG.BAT` is used to convert a file with the extension ".DCG" (presumably containing character graphics) from the FM-R50 system (a Japanese computer system from the 80s) to a source code file with the extension ".DMG".

The script assumes that the **FM-R50** file is inserted into Drive A of the computer. The script then uses the `FCV` tool to do the conversion.

This potentially means that developers for Nintendo were using the Fujitsu FM-R50 or a compatible system to develop Game Boy games and possibly NES and SNES games too.


---
## English Version 0 and Japanese Versions 0 and 1 (/Source/DMG_Zelda_JP_EN)
{% capture jp_en_versions_body %}
This folder contains the following sub-directories:
{% endcapture %}

{% capture folder_items %}
- JP_v0_01 - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/1)
- JP_v0_02 - Changes to ZBD/ZBN/ZDB/ZED/ZGD/ZTI/ZVD compared to SPD version
- JP_v0_03 - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/3)
- JP_v0_Character - Same as version 1 Japan graphics data (/その他/DMGZelda/Ver1JP) but without the .ICE and .BAT file
- JP_v1_Character - Exactly the same as version 1 Japan graphics data (/その他/DMGZelda/Ver1JP)
- Jp_v1_01 - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to version 0
- Jp_v1_02 - Changes to ZBD/ZBN/ZCO/ZDB/ZED/ZGD/ZTI compared to version 0
- Jp_v1_03 - Changes to ZE2/ZE5/ZE6/ZE7 compared to version 0
- US_v0_01 - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to Japan version 0
- US_v0_02 - Changes to GBMSDT/ZBD/ZBN/ZDB/ZED/ZGD/ZMS/ZTI/ZVD compared to Japan version 0
- US_v0_03 - Changes to ZE2/ZE5/ZE6/ZE7 compared to Japan version 0
- US_v0_Character - Changes to C1/C4/C5/C7 and GAL.BAT compared to Ver1JP
{% endcapture %}

{% include connected-folder-tree.html folder="DMG_Zelda_JP_EN" path="/Source/DMG_Zelda_JP_EN" body=jp_en_versions_body version="/Source/DMG_Zelda_JP_EN" content=folder_items %}


---
### Japan Version 0 Disk 2 (DMG_Zelda_JP_EN/JP_v0_02)
{% capture jp_v0_02_body %}
Since this is technically the second version of Disk 2 (with the SPD folder being the first version) we will only cover the changes made from SPD to save re-covering the same files.
{% endcapture %}

{% include connected-folder-tree.html folder="JP_v0_02" path="/JP_v0_02" body=jp_v0_02_body %}


The changes made to this version are mainly small code comment changes and are described in the table below:

File Name | Extension | Changes made compared to previous version
---|---|---
ZBD | .DMG | Differences to BG Bank Data Comments for: Clerk 1/2, Boomerang, Rotating Turret, Test Marine, Fishing Clerk, Fishes
ZBN | .DMG | Differences to two comments from "使ってねー" to "使ってねーよ" which both mean "Don't use it", the final particle "よ" adds a more forceful tone
ZDB | .DMG | Change to one comment that reads "This is the entrance above! You baldy!" The Baldy part was added as an insult in this version
ZED | .DMG | HART1 was commented out and a few code comments were changed such as saying "Mr. Noto can warp to the opposite platform at the Toba Kaido Station."
ZGD | .DMG | Added a comment to BOMGZ to say "Fold in half to make an even number!"
ZTI | .DMG | Just added a comment that says "Use Shibahara!"
ZVD | .DMG | Just added a comment that says "Nausicaa Leaf"


---
# その他 - Miscellaneous (/その他)
{% capture sonota_body %}
The `その他` branch translates to "miscellaneous" and contains a standalone `Ver1JP/Character` folder. Its contents match the sort of character/font graphics bundles used by the source branches, with `C1.CHR` through `C8.CHR`, `RZ.ICE`, and a `GAL.BAT` helper script.

This makes it a useful companion asset dump for the Japanese v1 build rather than executable gameplay source code.
{% endcapture %}

{% include connected-folder-tree.html folder="その他" path="/その他" body=sonota_body %}

This folder just contains the following sub-directories:
* **DMGZelda** - Miscellaneous data for the original Game Boy Zelda (Only graphics data)

This folder in turn just contains the following sub-directories:
* **Ver1JP** - Graphics data for Version 1 of the Japanese ROM


---
## Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP)
{% capture ver1jp_body %}
This folder just contains the following sub-directories:
* **Character** - Graphics data for Version 1 of the Japanese ROM

 Which in turn just contains graphics data created using the IS-Character development kit which was the official development kit used for graphics development on the original Game Boy.

 All the `.chr` files can be opened in a tool like `Tile Molester` with the Codec set to `2bpp planar` (2-bit per pixel is Game Boy Tile format.)
{% endcapture %}

{% include connected-folder-tree.html folder="Ver1JP" path="/Ver1JP" body=ver1jp_body %}


The files in the **Character** folder are described in the table below:

File Name | Extension | Description
---|---|---
C1 | .CHR | Contains the tiles for the instruments and the numbers 0-9 and others like rupees
C2 | .CHR | Contains the tiles used for the dungeons
C3 | .CHR | Contains tiles but unclear exactly what they are
C4 | .CHR | Contains tiles used for the Title Screen (Japanese)
C5 | .CHR | Contains tiles used in the opening sequence
C6 | .CHR | Contains Non Player Character sprites
C7 | .CHR | Unsure what these tiles are
C8 | .CHR | Contains the tiles spelling out "PLAYER" and what could be water tiles
GAL | .BAT | Windows Batch file for running ?
RZ | .ICE | File is related to the In-Circuit-Emulator used for debugging Game Boy Games seems to contain a list of file names such as BGM_1.HEX

The **GAL.BAT** script which is used for assembling the source code contains the comment "全アセンブル　ハイパ－森田スペシャ－－－－ル　スタ－ト" which roughly translates to "All Assemble! Hyper Morita Special Start!".

This likely means that the script is initiating a build process that is optimized for speed or efficiency, and that it was written by **Kazuaki Morita**.

---

Note: This page is currently unfinished, if you have any time to contribute please consider submitting a Pull Request to this page.
