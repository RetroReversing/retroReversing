---
layout: post
tags: 
- gameboy
- leak
- sourcecode
title: Gigaleak - Original Zelda Links Awakening Source Code (DMG)
thumbnail: /public/consoles/Game Boy.png
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
updatedAt: '2023-04-09'
---


<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
The Zelda Links Awakening source code was released in the original Gigaleak inside **dmg.7z** which was inside **Other.7z**.

When extracted the root folder just contains the following sub-directories:
    
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="dmg.7z" date="When extracted the root folder just contains the following sub-directories" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">DMG - Contains the main Assembly source code</li>
      <div class="rr-info-gen">その他 - Translates to Miscellaneous, it contains the IS-Character tiles/sprites</div>
    </ul>
</div>
    
  </div>
</section>  

When extracted the root folder just contains the following sub-directories:
* **DMG** - Contains the main Assembly source code
* **その他** - Translates to Miscellaneous, it contains the IS-Character tiles/sprites

---
# DMG Source Code (/DMG)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DMG</div>
  <div markdown="1" class="rr-post-markdown">
This folder just contains the following sub-directories:
 * **XXX__ゼルダの伝説 夢を見る島** - "ゼルダの伝説 夢を見る島" is the Japanese title of the video game "The Legend of Zelda: Link's Awakening"

The next section will cover this directory in detail.
  </div>
</section>  

---
## The Legend of Zelda: Link's Awakening Source Code (/DMG/XXX__ゼルダの伝説 夢を見る島)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/XXX__ゼルダの伝説 夢を見る島</div>
  <div markdown="1" class="rr-post-markdown">

This folder just contains the following sub-directories:
* **Source** - The main source code for the game

Which in turn contains the following sub-directories:
* **DMG_Zelda_DE_FR** - Original German and French Translation (Also included Canadian French)
* **DMG_Zelda_DE_FR_v1** - Version 1 of German and French (Does not include Canadian French)
* **DMG_Zelda_EN_v2_CFR_v1** - Version 1 of the English Translation and also contains Canadian French
* **DMG_Zelda_JP_EN** - Original version of the English translation
* **SRD_DMG_Zelda_JP_v0** - Original Source code from Systems Research and Development (SRD)


  </div>
</section> 

---
### Original SRD Zelda Source code (Japan version 0) (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SRD_DMG_Zelda_JP_v0</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code for the Japanese version of Links Awakening by **Systems Research and Development** (SRD) where helped Nintendo work on various titles. 

 We are starting with this folder as it seems to be the original and the other folders are just localised changes to the files in this folder, so this is the most important folder in the whole leak.

 When they were preserving the source code to Zelda Links Awakening they used 3 Floppy Disks for the source code and another for the Game Boy SDK and finally one for something called **face**.

This folder contains the following sub-directories:
* **1** - Disk 1 of the Source code containing Main logic and Player control
* **2** - Disk 2 containing the title sequence, background data for Dungeon and Ground and Sound
* **3** - Disk 3 containing the enemy logic
* **face** - Seems to be documentation
* **system** - Official Nintendo Game Boy SDK


  </div>
</section>  



---
### Disk 1 (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1</div>
  <div markdown="1" class="rr-post-markdown">
The first disk containes the files described in the table below:

  </div>
</section>  

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
### Disk 2 (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2</div>
  <div markdown="1" class="rr-post-markdown">
The second disk containes the files described in the table below:

  </div>
</section>  


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
### Disk 3 (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3</div>
  <div markdown="1" class="rr-post-markdown">
The third disk containes the files for enemy logic described in the table below:
  </div>
</section>  


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
### Face Documentation (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/face)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/face</div>
  <div markdown="1" class="rr-post-markdown">
 Not sure why this folder is called "FACE", it seems to contain misc documentation information for developers, even includes a document planning a fishing trip! I am not quite sure what the 21-48 DAT files are however.

  </div>
</section>  


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
#### Game Boy SDK (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/system)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/system</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the Software development tools required for original Game Boy development.

  </div>
</section>  


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
* .DMG - Assembly source code for the Dot Matrix Game (Game Boy)
* .CGE - Character Graphics data (For famicom?)
* .DCG - Character Graphics data (for DMG Game Boy?)
* .CVT - Custom Conversion scripts that can be executed with FCV
* .SCR - Screen file maybe containing location of character tiles in a level?
* .X65 - Either Famicom or Super Famicom source code 
* .COM - Unsure if this is a Windows Command File or something else

**Famicom SDK Files**
One interesting file is that `HDT.EXE` is included here which is the NES/Famicom Debugger, as far as I know this is the first time a file from the Famicom SDK has ever been leaked. As no other official NES/Famicom SDK had been leaked this is quite remarkable. It was written by Intelligent Systems between 1986-1989 and seems to read in three file formats: CHR (Character/Tile Data), SCR (Screen data? or Source Data?) and CGD (No Idea, maybe Character Graphic Designer?).

**SNES Assembler**
Another interesting file is that `IS65.EXE` is included here which is the Official Super Nintendo Entertainment System assembler created by Intelligent Systems in 1990. It seems to have been written by the developer **Toshio Sengoku**.

The file `VRAMTR.CVT` which is a script in a custom programming langauge that is parsed by the `FCV` program. The comments at the beginning of the file indicate that it takes an input file with a ".SCR" extension and outputs a file with a ".X65" extension.

**File Convert Program**
The File Convert Program (`FCV`) tool was created in 1987 by Intelligent Systems so it is likely it was also part of the Famicom Software Development Kit.

The commands in the script appear to be performing various operations related to transferring data to VRAM. For example, the "VRAD=$2000" command sets the screen address, and the "DTPT=0" command initializes the data pointer. The script also includes commands for writing screen data and attribute data to VRAM.

**Character conversion**
The Bash script `DCGDMG.BAT` is used to convert a file with the extension ".DCG" (presumably containing character graphics) from the FM-R50 system (a Japanese computer system from the 80s) to a source code file with the extension ".DMG". 

The script assumes that the **FM-R50** file is inserted into Drive A of the computer. The script then uses the `FCV` tool to do the conversion.

This potentially means that developers for Nintendo were using the Fujitsu FM-R50 or a compatible system to develop Game Boy games and possibly NES and SNES games too.


---
#### English Version 0 and Japanese Version 0-1 (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/DMG_Zelda_JP_EN)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DMG_Zelda_JP_EN</div>
  <div markdown="1" class="rr-post-markdown">

This folder contains the following sub-directories:
* **JP_v0_01** - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/1)
* **JP_v0_02** - Changes to ZBD/ZBN/ZDB/ZED/ZGD/ZTI/ZVD Compared to SPD Version
* **JP_v0_03** - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/3)
* **JP_v0_Character** - Exactly the same as: Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP) but without the .ICE and .BAT file
* **JP_v1_Character** - Exactly the same as: Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP)
* **Jp_v1_01** - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to version 0
* **Jp_v1_02** - Changes to ZBD/ZBN/ZCO/ZDB/ZED/ZGD/ZTI compared to version 0
* **Jp_v1_03** - Changes to ZE2/ZE5/ZE6/ZE7 compared to version 0
* **US_v0_01** - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to Japan version 0
* **US_v0_02** - Changes to GBMSDT/ZBD/ZBN/ZDB/ZED/ZGD/ZMS/ZTI/ZVD compared to Japan version 0
* **US_v0_03** - Changes to ZE2/ZE5/ZE6/ZE7 compared to Japan version 0
* **US_v0_Character** - Contains changes to C1/C4/C5/C7 and GAL.BAT compared to Ver1JP
  </div>
</section>  


---
##### Japan Version 0 Disk 2 (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/DMG_Zelda_JP_EN/JP_v0_02)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/JP_v0_02</div>
  <div markdown="1" class="rr-post-markdown">
 Since this is technically the second version of Disk 2 (with the SPD folder being the first version) we will only cover the changes made from SPD to save re-covering the same files.

  </div>
</section>  


The changes made to this version are mainly small code comment changes and are described in the table below:

File Name | Extension | Changes made comapred to previous version
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
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/その他</div>
  <div markdown="1" class="rr-post-markdown">
 "その他" (pronounced "sono ta") is a Japanese phrase that means "other" or "miscellaneous". It is often used to refer to something that does not fit into a specific category or is not included in a list of specified items.

This folder just contains the following sub-directorie:
* **DMGZelda** - Miscellaneous data for the original Game Boy Zelda (Only graphics data)

This folder in turn just contains the following sub-directories:
* **Ver1JP** - Graphics data for Version 1 of the Japanese ROM


  </div>
</section>  

---
## Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Ver1JP</div>
  <div markdown="1" class="rr-post-markdown">
This folder just contains the following sub-directories:
* **Character** - Graphics data for Version 1 of the Japanese ROM

 Which in turn just contains graphics data created using the IS-Character development kit which was the official development kit used for graphics development on the original Game Boy.

 All the `.chr` files can be opened in a tool like `Tile Molester` with the Codec set to `2bpp planar` (2-bit per pixel is Game Boy Tile format.)
 
  </div>
</section>  


The files in the **Character** folder are described in the table below:

File Name | Extension | Description
---|---|---
C1 | .CHR | Contains the tiles for the instruments and the numbers 0-9 and others like rupees
C2 | .CHR | Contains the files used for the dungeons
C3 | .CHR | Contains files but unclear exactly what they are
C4 | .CHR | Contains tiles used for the Title Screen (Japanese)
C5 | .CHR | Contains tiles used in the opening sequence
C6 | .CHR | Contains Non Player Character sprites
C7 | .CHR | Unsure what these tiles are
C8 | .CHR | Contains the tiles spelling out "PLAYER" and what could be water tiles
GAL | .BAT | Windows Batch file for running ?
RZ | .ICE | File is related to the In-Circuit-Emulator used for debugging Game Boy Games seems to contain a list of file names such as BGM_1.HEX

The **GAL.BAT** script which is used for assembling the source code contains the comment "全アセンブル　ハイパ－森田スペシャ－－－－ル　スタ－ト" which roughly translates to "All Assemble! Hyper Morita Special Start!".

This likely means that the script is initiating a build process that is optimized for speed or efficiency, and that it was written by **Kazuaki Morita**. 

