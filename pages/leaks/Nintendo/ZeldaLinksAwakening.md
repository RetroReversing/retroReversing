---
layout: post
tags: 
- gameboy
- leak
- sourcecode
- incomplete
title: Gigaleak - Original Zelda Links Awakening Source Code (DMG)
thumbnail: /public/consoles/Nintendo Game Boy.png
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

The Zelda Links Awakening source code was released in the original Gigaleak inside **dmg.7z** which was inside **Other.7z**.
    
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="dmg.7z" date="Contains two subdirectories" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">DMG - Contains the main Assembly source code</li>
      <li class="rr-info-gen">その他 - Translates to Miscellaneous, it contains the IS-Character tiles/sprites</li>
    </ul>
</div>

---
# DMG Source Code (/DMG)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DMG</div>
  <div markdown="1" class="rr-post-markdown">
The **DMG** folder is the main location for all the assembly language source code that makes up the original Game Boy version of The Legend of Zelda: Link's Awakening.
    
  </div>
</section>  

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/DMG" date="Folder Tree"></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">XXX__ゼルダの伝説 夢を見る島 - "ゼルダの伝説 夢を見る島" is the Japanese title of the video game "The Legend of Zelda: Link's Awakening"</li>
      <ul>
        <li class="rr-info-gen">Source - The main source code for the game</li>
          <ul>
             <li class="rr-info-gen">DMG_Zelda_DE_FR - Original German and French Translation (Also included Canadian French)</li>
             <li class="rr-info-gen"> DMG_Zelda_DE_FR_v1 - Version 1 of German and French (Does not include Canadian French)</li>
             <li class="rr-info-gen">DMG_Zelda_EN_v2_CFR_v1 - Version 1 of the English Translation and also contains Canadian French</li>
             <li class="rr-info-gen">DMG_Zelda_JP_EN - Original version of the English translation</li>
             <li class="rr-info-gen">SRD_DMG_Zelda_JP_v0 - Original Source code from Systems Research and Development (SRD)</li>
          </ul>
       </ul>
     </ul>
</div>

---
## Original SRD Zelda Source code (Japan version 0) (SRD_DMG_Zelda_JP_v0)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SRD_DMG_Zelda_JP_v0</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code for the Japanese version of Links Awakening by **Systems Research and Development** (SRD) where helped Nintendo work on various titles. 

 We are starting with this folder as it seems to be the original and the other folders are just localised changes to the files in this folder, so this is the most important folder in the whole leak.

 When they were preserving the source code to Zelda Links Awakening they used 3 Floppy Disks for the source code and another for the Game Boy SDK and finally one for the documentation and other documents that they decided to call **face**.

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/SRD_DMG_Zelda_JP_v0" date="Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">1 - Disk 1 of the Source code containing Main logic and Player control</li>
      <li class="rr-info-gen">2 - Disk 2 containing the title sequence, background data for Dungeon and Ground and Sound</li>
      <li class="rr-info-gen">3 - Disk 3 containing the enemy logic</li>
      <li class="rr-info-gen">face - Documentation and other misc documents</li>
      <li class="rr-info-gen">system - Official Nintendo Game Boy SDK</li>
    </ul>
</div>
    

  </div>
</section>  



---
### Disk 1 (SRD_DMG_Zelda_JP_v0/1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1</div>
  <div markdown="1" class="rr-post-markdown">
The first disk contains the files described in the table below:

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
### Disk 2 (SRD_DMG_Zelda_JP_v0/2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2</div>
  <div markdown="1" class="rr-post-markdown">
The second disk contains the files described in the table below:

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
### Disk 3 (SRD_DMG_Zelda_JP_v0/3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3</div>
  <div markdown="1" class="rr-post-markdown">
The third disk contains the files for enemy logic described in the table below:
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
### Face Documentation (SRD_DMG_Zelda_JP_v0/face)
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
### Game Boy SDK (/DMG/XXX__ゼルダの伝説 夢を見る島/Source/SRD_DMG_Zelda_JP_v0/system)
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
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DMG_Zelda_JP_EN</div>
  <div markdown="1" class="rr-post-markdown">

This folder contains the following sub-directories:
  </div>
</section>  

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/Source/DMG_Zelda_JP_EN" date="subdirectories" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">JP_v0_01 - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/1)</li>
      <li class="rr-info-gen">JP_v0_02 - Changes to ZBD/ZBN/ZDB/ZED/ZGD/ZTI/ZVD Compared to SPD Version</li>
      <li class="rr-info-gen">JP_v0_03 - Exactly the same as SPD version (/SRD_DMG_Zelda_JP_v0/3)</li>
      <li class="rr-info-gen">JP_v0_Character - Exactly the same as: Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP) but without the .ICE and .BAT file</li>
      <li class="rr-info-gen">JP_v1_Character - Exactly the same as: Version 1 Japan Graphics Data (/その他/DMGZelda/Ver1JP)</li>
      <li class="rr-info-gen">Jp_v1_01 - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to version 0</li>
      <li class="rr-info-gen">Jp_v1_02 - Changes to ZBD/ZBN/ZCO/ZDB/ZED/ZGD/ZTI compared to version 0</li>
      <li class="rr-info-gen">Jp_v1_03 - Changes to ZE2/ZE5/ZE6/ZE7 compared to version 0</li>
      <li class="rr-info-gen">US_v0_01 - Changes to ZE8/ZEND/ZEX/ZPL/ZROM files compared to Japan version 0</li>
      <li class="rr-info-gen">US_v0_02 - Changes to GBMSDT/ZBD/ZBN/ZDB/ZED/ZGD/ZMS/ZTI/ZVD compared to Japan version 0</li>
      <li class="rr-info-gen">US_v0_03 - Changes to ZE2/ZE5/ZE6/ZE7 compared to Japan version 0</li>
      <li class="rr-info-gen">US_v0_Character - Contains changes to C1/C4/C5/C7 and GAL.BAT compared to Ver1JP</li>
    </ul>
</div>


---
### Japan Version 0 Disk 2 (DMG_Zelda_JP_EN/JP_v0_02)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/JP_v0_02</div>
  <div markdown="1" class="rr-post-markdown">
 Since this is technically the second version of Disk 2 (with the SPD folder being the first version) we will only cover the changes made from SPD to save re-covering the same files.

  </div>
</section>  


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
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/その他</div>
  <div markdown="1" class="rr-post-markdown">
 "その他" (pronounced "sono ta") is a Japanese phrase that means "other" or "miscellaneous". It is often used to refer to something that does not fit into a specific category or is not included in a list of specified items.

  </div>
</section>  

This folder just contains the following sub-directories:
* **DMGZelda** - Miscellaneous data for the original Game Boy Zelda (Only graphics data)

This folder in turn just contains the following sub-directories:
* **Ver1JP** - Graphics data for Version 1 of the Japanese ROM


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
# CGB.7z Root directory (/CGB.7z)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Root Directory</div>
  <div markdown="1" class="rr-post-markdown">
When extracted the **CGB.7z** Archive contains two different games, **Zelda DX** and **Hamtaro 2**. Hamtaro 2 isn't related to Zelda and only contains a few pre-build ROM files for various regions (PAL, NTSC, JP).

  </div>
</section>  

This folder contains the following sub-directories:
* **AZL__ゼルダの伝説 夢を見る島DX** - Source code for the Color Game Boy version of The Legend of Zelda: Link's Awakening DX
* **B86__ハム太郎 2** - Hamtaro 2 Color Game Boy ROMs (no source code)

---
## Legend of Zelda: Dreaming Island DX (/CGB/AZL__ゼルダの伝説 夢を見る島DX)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/AZL__ゼルダの伝説 夢を見る島DX</div>
  <div markdown="1" class="rr-post-markdown">
The text "/AZL__ゼルダの伝説 夢を見る島DX" is a Japanese text string that roughly translates to "Legend of Zelda: Dreaming Island DX" in English.

Here's a breakdown of the text:

  </div>
</section>  

* "/AZL__" is likely an identifier, maybe Advanced Zelda?
* "ゼルダの伝説" (Zeruda no Densetsu) means "Legend of Zelda."
* "夢を見る島" (Yume wo Miru Shima) means "Dreaming Island."
* "DX" likely stands for "Deluxe," which is a common suffix added to re-releases of games that include additional features or improvements.

This folder contains the following sub-directories:
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/AZL__ゼルダの伝説 夢を見る島DX" date="Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">Source - Contains the Source code for Zelda DX</li>
       <ul class="rr-changelog-more">
        <li class="rr-info-gen">Disk1 - Contains the JP/US/EU source code</li>
        <ul class="rr-changelog-more">
          <li class="rr-info-gen">ゼルダの伝説_JP3_US3_EU2 - Source code for Japan Version 3, USA Version 3 and Europe Version 2</li>
        </ul>
        <li class="rr-info-gen">Disk2 - ?</li>
        <li class="rr-info-gen">Disk3 - ?</li>
      </ul>
    </ul>
</div>

---
### Disk 1 - ゼルダの伝説_jp3_us3_eu2 (/Source/Disk1/ゼルダの伝説_JP3_US3_EU2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ゼルダの伝説_JP3_US3_EU2</div>
  <div markdown="1" class="rr-post-markdown">
  The Japanese text "ゼルダの伝説_jp3_us3_eu2" simply translates to "The Legend of Zelda_JP3_US3_EU2". Presumably this means it is Japan version 3, USA version 3 and Europe Version 2.

 This folder contains the following sub-directories:
  </div>
</section>

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="ゼルダの伝説_JP3_US3_EU2" date="Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">CGB_zeldaDOITU - German Version of the Source Code</li>
      <ul class="rr-changelog-more">
        <li class="rr-info-gen">cgb - ?</li>
        <li class="rr-info-gen">cgb_d - ?</li>
        <li class="rr-info-gen">gb - ?</li>
      </ul>
      <li class="rr-info-gen">CGB_zeldaFRANCE - French Version of the Source Code</li>
      <li class="rr-info-gen">CGB_zeldaUSA - English Version of the Source Code</li>
      <li class="rr-info-gen">DEMO_zelda - ?</li>
      <li class="rr-info-gen">SRAMデータ - Translates to "SRAM data"</li>
      <li class="rr-info-gen">azljsram - Save RAM data for Japanese Zelda split into 4</li>
    </ul>
</div>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
azljsram | .lzh | Compressed archive version of the azljsram folder
修正 | .txt |  "修正.txt" translates to "Correction.txt" which contains a list of Bug Fixes

The `修正.txt` file is interesting as it contains information on a few fixed bugs in the DX version of the game:
>Bug fixes:
>
>In the demo where the fishing shop owner catches the photo shop owner under the bridge, if you press the START button while the photo is being displayed, >the bug that makes it look like you took a picture of the fishing shop owner drowning is fixed.
>→ Commented out the last nine lines of the subroutine "GEKI_8MAIN" in the ZGEKI.s file.
>
>If the number of hearts is greater than the intended number for some reason, the bug fix that causes the game to crash or freeze when you go to the file select screen is fixed.
>→ Added a limit check under the subroutines "HART1ST" and "SVDS010" in the ZTI.s file.
>
>The bug fix for the name registration issue where if the total of the inputted name's character data is 0, you can no longer copy the name.
>→ Changed the addition of numbers in the subroutine "CP3070" in the ZTI.s file to check with an OR command whether the result is 0."

---
#### Zelda Color Game Boy Source Code (ゼルダの伝説_JP3_US3_EU2/CGB_zeldaDOITU/cgb)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/cgb</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains thr source code for the Color Game Boy version of Zelda DX, both source (.s) and compiled output (.o) are included here.

  </div>
</section>


This folder contains the following sub-directories:
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Folder Tree" date="/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaDOITU/cgb" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">BACK - Contains the Assembler and Linker</li>
      <li class="rr-info-gen">cgx - Color Graphics/Tile data</li>
      <li class="rr-info-gen">sound - Sound Effects and Background Music</li>
      <li class="rr-info-gen">すぐ消すふぉるだ - Translates to "Folder to be deleted immediately." - It is empty</li>
    </ul>
</div>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
C | .isx | Game Boy Color ROM File
cgal | .bat | Windows Batch file for assembling and linking all the assembly files together
clink | .bat | Windows Batch file for running the linker to put all the compiled files together into a ROM
ddd | N/A | A file used to pass arguments to the Game Boy Linker program `islk32`
gbmsdt | .s | Assembly source file containing german translations for the in game dialog
isdwdcmd | .dat | Command Data Binary file used by ISDW VUE_DEBUGGER created on 1995-11-25
isdwdrng | .dat | Range Data Binary file used by ISDW created on 1995-10-19
isdwdsym | .dat | Debug Symbol Binary file used by ISDW created on 1995-08-16
zbd | .o, .s | Assembly source and compiled output for Background Character Bank Data
zbn | .s | Assembly source file containing Background Character Number Data
zbs | .o, .s | Assembly source and compiled output for Resident Subroutine 2
zchr | .o, .s | Assembly source and compiled output for 
zco | .o, .s | Assembly source and compiled output for Resident Subroutine 1
zdb | .o, .s | Assembly source and compiled output for Dungeon Background Data
ze2 | .o, .s | Assembly source and compiled output for Enemy Data2
ze3 | .o, .s | Assembly source and compiled output for Enemy Data 3
ze4 | .o, .s | Assembly source and compiled output for Enemy Data 4
ze5 | .o, .s | Assembly source and compiled output for Enemy Data 5
ze6 | .o, .s | Assembly source and compiled output for Enemy Data 6
ze7 | .o, .s | Assembly source and compiled output for Enemy Data 7
ze8 | .o, .s | Assembly source and compiled output for Enemy Data 8
zed | .o, .s | Assembly source and compiled output for Enemy Set Data
zen | .o, .s | Assembly source and compiled output for Enemy Data 1
zend | .o, .s | Assembly source and compiled output for the Ending Sequence, e.g Credits
zes | .o, .s | Assembly source and compiled output for Enemy Main Logic
zex | .o, .s | Assembly source and compiled output for extra subroutines
zgb | .o, .s | Assembly source and compiled output for Ground Background Data Address
zgd | .s | Assembly source file containing Ground Background Data
zma | .o, .s | Assembly source and compiled output for Main game loop
zms | .o, .s | Assembly source and compiled output for Message Control Data
zpl | .o, .s | Assembly source and compiled output for Player Control
zram | .s | Assembly source file containing RAM handling code
zrom | .s | Assembly source file containing ROM handling code
zrom1 | .s | Assembly source file containing ?
zs1 | .o, .s | Assembly source and compiled output for Title Sequence 2
zsd | .o, .s | Assembly source and compiled output for Sound Control
zti | .o, .prn, .s | Assembly source and compiled output for title sequence 1
zvd | .s | Assembly source file containing Demo background VRAM Data

The `zti.prn` file contains a disassembly of the ZTI object file created during a debugging session.

---
##### SDK Executables (CGB_zeldaDOITU/cgb/BACK)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/BACK</div>
  <div markdown="1" class="rr-post-markdown">
 This folder just contains two executables from the GameBoy SDK, the Assembler and the Linker used to build the assembly source files. No idea why they called it **BACK** however.

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ISAS32 | .EXE | INTELLIGENT SYSTEMS Assembler Version 1.24.8
ISLK32 | .EXE | INTELLIGENT SYSTEMS Linker Version 1.24.1



---
##### Color Graphics (Cgx) (CGB_zeldaDOITU/cgb/cgx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/cgx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the graphics/tiles created for the Game Boy Color version of Zelda DX. 
    
The Sprite/Tile data created using the IS-Character development kit and are in the .CHR file format used for both NES and Game Boy tiles. In this file format, each tile is represented by an 8x8 pixel matrix, which is stored as a series of 64 bytes. These matrices are then combined to form sprites, backgrounds, and other graphical elements in the game.
    
    Note that these files differ slightly across regions (specifically the title sequence) but most of the tiles are the same across versions. Also these are the same as the DMG tilesets in the DMG.7z leak.

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
C1 | .CHR | Contains the graphic tiles for the instruments and the numbers 0-9 and others like rupees
C2 | .CHR | Contains the tiles used for the dungeons
C3 | .CHR | Contains tiles but unclear exactly what they are
C4 | .CHR | Contains tiles used for the Title Screen (German)
C5 | .CHR | Contains tiles used in the opening sequence
C6 | .CHR | Contains Non Player Character sprites
C7 | .CHR | Unsure what these tiles are
C8 | .CHR | Contains the tiles spelling out “PLAYER” and what could be water tiles
g1 | .bin | Exactly the same as C1.CHR
g2 | .bin | Exactly the same as C2.CHR
g3 | .bin | Exactly the same as C3.CHR
g4 | .bin | Exactly the same as C4.CHR
g5 | .bin | Exactly the same as C5.CHR
g6 | .bin | Exactly the same as C6.CHR
g7 | .bin | Exactly the same as C7.CHR
g8 | .bin | Exactly the same as C8.CHR
isdwdcmd | .dat | Command Data Binary file used by ISDW VUE_DEBUGGER created on 1995-11-25 by N.Nakano
isdwdrng | .dat | Range Data Binary file used by ISDW created on 1995-10-19 by N.Nakano
isdwdsym | .dat | Debug Symbol Binary file used by ISDW created on 1995-08-16 by N.Nakano

---
##### Sound (CGB_zeldaDOITU/cgb/sound)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/sound</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the background music and sound effects data for the Game Boy Color version of Zelda DX.

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BGM_1G | .HEX | Hex version of bgm_1 specifically for German
BGM_2 | .BIN, .HEX | Background Music 2
SE | .BIN, .HEX | Sound Effect data
bgm_1 | .bin | Background Music 1

---
#### German Color Game Boy Source (CGB_zeldaDOITU/cgb_d)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/cgb_d</div>
  <div markdown="1" class="rr-post-markdown">
 This folder speciailly contains the source code modified for the German Localisation of the game.

  </div>
</section>


This folder contains the following sub-directories:
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="CGB_zeldaDOITU/cgb_d" date="Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">BACK - SDK Assembler and Linker</li>
      <li class="rr-info-gen">COM - Compiled output of the source code (including symbol files)</li>
      <li class="rr-info-gen">Geki - Cutscene tile graphics</li>
      <li class="rr-info-gen">ISX - Contains a Pre-build Game Boy ROM</li>
      <li class="rr-info-gen">PHOTO - Maybe it contains the output of the photo feature in the game but unsure</li>
      <li class="rr-info-gen">TEXT - Documents related to translating the Dialog to German</li>
      <li class="rr-info-gen">cgx - Color Graphics/Tile Data</li>
      <li class="rr-info-gen">すぐ消すふぉるだ - Translates to "Folder to be deleted immediately." - It is empty</li>
    </ul>
</div>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GEZELDAE | .TXT | 
ZATRSUB_D | .o | 
ZCOL | .o | 
ZCOLSUB_D | .o | 
ZDB2 | .o | 
ZE9 | .o | 
ZEND2 | .o | 
ZFADE | .o, .s | Assembly source and compiled output for 
ZGEKI | .o | 
ZGKANM | .o | 
ZGKDAT | .o | 
ZGKSCR | .o | 
ZJP | .o | 
ZMAP | .o | 
ZMSSUB_D | .o | 
ZPLSUB | .o | 
ZPR | .o | 
ZPRSUB_D | .o | 
ZS1SUB_D | .o | 
ZVD_D | .o | 
azld00-0 | .gb | 
bug-e103 | .avi | Video showing a bug where ? 
bug-e106 | .avi | Video showing a bug where ? 
bug-e94 | .avi | Video showing a bug where ? 
c_d | .isx, .ram | Compiled Game Boy ROM file
c_d1211 | .GB, .com | Compiled Game Boy ROM file
cgal | .bat | Windows Batch file for running ?
clink | .bat | Windows Batch file for running ?
ddd | N/A | 
gbmsdt | .o, .s | Assembly source and compiled output for 
gbmsdt_d | .s | Assembly source file containing ?
geadd | .doc, .txt | 
gezelda | .doc, .txt | 
isdwdcmd | .dat | 
isdwdrng | .dat | 
isdwdsym | .dat | 
messcorr | .txt | 
shi | .txt | 
zatr_d | .o, .s | Assembly source and compiled output for 
zatrsub_d | .s | Assembly source file containing ?
zbd | .o, .s | Assembly source and compiled output for 
zbdatr | .o, .s | Assembly source and compiled output for 
zbn | .s | Assembly source file containing ?
zbs | .o, .s | Assembly source and compiled output for 
zchr | .o, .s | Assembly source and compiled output for 
zco | .o, .s | Assembly source and compiled output for 
zcol | .s | Assembly source file containing ?
zcolsub_d | .s | Assembly source file containing ?
zdb | .o, .s | Assembly source and compiled output for 
zdb2 | .s | Assembly source file containing ?
ze2 | .o, .s | Assembly source and compiled output for Enemy code 2
ze3 | .o, .s | Assembly source and compiled output for Enemy code 3
ze4 | .o, .s | Assembly source and compiled output for Enemy code 4
ze5 | .o, .s | Assembly source and compiled output for Enemy code 5
ze6 | .o, .s | Assembly source and compiled output for Enemy code 6
ze7 | .o, .s | Assembly source and compiled output for Enemy code 7
ze8 | .o, .s | Assembly source and compiled output for Enemy code 8
ze9 | .s | Assembly source file containing Enemy code 9
zed | .o, .s | Assembly source and compiled output for 
zen | .o, .s | Assembly source and compiled output for Enemy code 1
zend2 | .s | Assembly source file containing ?
zend_d | .o, .s, .s_BAK | 
zes | .o, .s | Assembly source and compiled output for 
zex | .o, .s | Assembly source and compiled output for 
zgb | .o, .s | Assembly source and compiled output for 
zgd | .s | Assembly source file containing ?
zgeki | .s, .s~ | 
zgkanm | .s | Assembly source file containing ?
zgkdat | .s | Assembly source file containing ?
zgkscr | .s | Assembly source file containing ?
zjp | .s | Assembly source file containing ?
zma | .o, .s | Assembly source and compiled output for 
zmap | .s | Assembly source file containing ?
zms_d | .o, .s | Assembly source and compiled output for 
zmssub_d | .s | Assembly source file containing ?
zpl | .o, .s | Assembly source and compiled output for 
zplsub | .s | Assembly source file containing ?
zpr | .s | Assembly source file containing ?
zprsub_d | .s | Assembly source file containing ?
zram | .o, .prn, .s | 
zrom | .o, .s, .s~ | 
zrom1 | .s | Assembly source file containing ?
zs1 | .o, .s | Assembly source and compiled output for 
zs1sub_d | .s | Assembly source file containing ?
zsd | .o, .s | Assembly source and compiled output for 
zsgb | .o, .s | Assembly source and compiled output for 
zti | .prn | 
zti_d | .o, .s, .s~ | 
zvd_d | .s | Assembly source file containing ?
zwin | .o, .s, .s_BAK | 

---
##### Assembler and Linker (CGB_zeldaDOITU/cgb_d/BACK)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/BACK</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the Linker and Assembler from the Official Nintendo Game Boy SDK

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ISAS32 | .EXE | INTELLIGENT SYSTEMS Assembler Version 1.24.8
ISLK32 | .EXE | INTELLIGENT SYSTEMS Linker Version 1.24.1
cgal | .bat | Windows Batch file for assembily and linking all the source code
ddd | N/A | Text file containing parameters that get passed to islk32

---
##### Compiled Output (CGB_zeldaDOITU/cgb_d/COM)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/COM</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the compiled output created by the build process. I am not quite sure the difference between .GB and .COM files, they are similar but have some different bytes when comparing with a hex editor.

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AZLD10-0 | .GB, .com | Compiled Game Boy ROM
azld00-0 | .gb | Compiled Game Boy ROM
cgbzel_ger0820 | .com | MS-DOS Command File Executable for ?
isdwdcmd | .dat | Command Data Binary file used by ISDW VUE_DEBUGGER created on 1995-11-25 
isdwdrng | .dat | Range Data Binary file used by ISDW created on 1995-10-19 by N.Nakano
isdwdsym | .dat | Debug Symbol Binary file used by ISDW created on 1995-08-16 by N.Nakano

---
##### Geki Cutscene (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaDOITU/cgb_d/Geki)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Geki</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Game Boy Color Graphic files (.cgx) for a cutscene.

 "Gekigake" (激駆け) is a Japanese word that combines the characters "geki" (激), meaning "intense," "violent," or "passionate," and "kake" (駆け), meaning "dash," "rush," or "gallop." Together, the word can be translated as "intense rush" or "violent gallop." 

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gekigake1 | .cgx | Color Tile Graphics for some sort of cutscene but hard to tell which one
gekigake1c | .cgx | Slightly different version of gekigake1.cgx


---
##### Isx Game Boy ROM (CGB_zeldaDOITU/cgb_d/ISX)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ISX</div>
  <div markdown="1" class="rr-post-markdown">
 This folder just contains a pre-build Game Boy ROM file called **c_d1211.isx**. This is in the Intelligent Systems Executable format which is the same as a Game Boy ROM file that can be played in any GB emulator.

  </div>
</section>

---
##### Photo (CGB_zeldaDOITU/cgb_d/PHOTO)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/PHOTO</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains one single file called `album_gm.CSD`, it is unclear what this file actually is, it is only 720 bytes. Presumably it is related to the photographer feature that was added to the DX version of the game.

  </div>
</section>

---
##### German Translation Documents (CGB_zeldaDOITU/cgb_d/TEXT)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/TEXT</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation that was used to produced the German translation of the game. It also seems to contain some French documents so it may have initially been both French and German before the separate French folder was created.

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Changes German | .doc, .txt | List of changes to the german dialog from December 7th, 1998
Color GB German Trans Add | .doc | Small list of german tranaslations
Color GB German Translation_new | .doc | Small list of german tranaslations
D3_change | .doc | Minor change to Mr. Tanaka dialog
G1_ 1208 | .doc, .txt | Changes as of December 8th, 1998
MasterLog French | .xls | List of French translation bugs from 1998
MasterLog French95 | .xls | Same as `MasterLog French.xls` no idea why they added the 95 suffix as it still contains 1998 bugs
Textbugs0712 | .doc, .txt | German translation bugs from December 7th, 1998
chkText | .txt, .txt~ | List of Bug Fixes (in Japanese)
chk_text | .txt | List of Bug Fixes (in Japanese)
deutsch | .doc | Big list of German translations divided by bank
gchanges | .doc | Short document on a minor german translation error

---
##### Color Graphics (Cgx) (CGB_zeldaDOITU/cgb_d/cgx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/cgx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Game Boy Color Tile Graphic (.cgx)

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gb_gm1 | .cgx | 
gb_gm2 | .cgx | 
gb_gm3 | .cgx | 
gb_gm4 | .cgx | 
gb_gm5 | .cgx | 
gb_gm6 | .cgx | 
gb_gm7 | .cgx | 
gb_gm8 | .cgx | 
gb_gm9 | .cgx | 
gmcgb1 | .cgx | Similar to `gb_gm1.cgx` but contains changes
gmcgb2 | .cgx | Similar to `gb_gm2.cgx` but contains changes
gmcgb3 | .cgx | Similar to `gb_gm3.cgx` but contains changes
gmcgb4 | .cgx | Similar to `gb_gm4.cgx` but contains changes
gmcgb5 | .cgx | Similar to `gb_gm5.cgx` but contains changes
gmcgb6 | .cgx | Similar to `gb_gm6.cgx` but contains changesSimilar to `gb_gm2.cgx` but contains changes
gmcgb7 | .cgx | Similar to `gb_gm7.cgx` but contains changes
gmcgb8 | .cgx | Similar to `gb_gm8.cgx` but contains changes
gmcgb9 | .cgx | Similar to `gb_gm9.cgx` but contains changes
gmcgba | .cgx | Contains some german text


---
##### Original Game Boy Version Source Code (CGB_zeldaDOITU/gb)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gb</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the original Game Boy version of the source code translated to German. They included this here to be able to refer back to it as they were working on the DX version.

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BGM_1G | .HEX | Plain Data for Background Music 1 (German version)
BGM_2 | .HEX | Plain Data for Background Music 2
C1 | .CHR | Sprite/Tile data created using the IS-Character development kit
C2 | .CHR | Sprite/Tile data created using the IS-Character development kit
C3 | .CHR | Sprite/Tile data created using the IS-Character development kit
C4 | .CHR | Sprite/Tile data created using the IS-Character development kit
C5 | .CHR | Sprite/Tile data created using the IS-Character development kit
C6 | .CHR | Sprite/Tile data created using the IS-Character development kit
C7 | .CHR | Sprite/Tile data created using the IS-Character development kit
C8 | .CHR | Sprite/Tile data created using the IS-Character development kit
GBMSDT | .DMG | Game Boy Z80 Assembly file for ?
SE | .HEX | Plain Data for Sound Effects
ZBD | .DMG | Game Boy Z80 Assembly file for ?
ZBN | .DMG | Game Boy Z80 Assembly file for ?
ZBS | .DMG | Game Boy Z80 Assembly file for ?
ZCO | .DMG | Game Boy Z80 Assembly file for ?
ZDB | .DMG | Game Boy Z80 Assembly file for ?
ZE2 | .DMG | Game Boy Z80 Assembly file for Enemy Data 2
ZE3 | .DMG | Game Boy Z80 Assembly file for Enemy Data 3
ZE4 | .DMG | Game Boy Z80 Assembly file for Enemy Data 4
ZE5 | .DMG | Game Boy Z80 Assembly file for Enemy Data 5
ZE6 | .DMG | Game Boy Z80 Assembly file for Enemy Data 6
ZE7 | .DMG | Game Boy Z80 Assembly file for Enemy Data 7
ZE8 | .DMG | Game Boy Z80 Assembly file for Enemy Data 8
ZED | .DMG | Game Boy Z80 Assembly file for ?
ZEN | .DMG | Game Boy Z80 Assembly file for Enemy Data 1
ZEND | .DMG | Game Boy Z80 Assembly file for ?
ZES | .DMG | Game Boy Z80 Assembly file for ?
ZEX | .DMG | Game Boy Z80 Assembly file for ?
ZGB | .DMG | Game Boy Z80 Assembly file for ?
ZGD | .DMG | Game Boy Z80 Assembly file for ?
ZMA | .DMG | Game Boy Z80 Assembly file for ?
ZMS | .DMG | Game Boy Z80 Assembly file for ?
ZPL | .DMG | Game Boy Z80 Assembly file for ?
ZRAM | .DMG | Game Boy Z80 Assembly file for ?
ZROM | .DMG | Game Boy Z80 Assembly file for ?
ZS1 | .DMG | Game Boy Z80 Assembly file for ?
ZSD | .DMG | Game Boy Z80 Assembly file for ?
ZTI | .DMG | Game Boy Z80 Assembly file for ?
ZVD | .DMG | Game Boy Z80 Assembly file for ?

---
### USA Game Boy Color Source Code (ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/cgb_usa</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>


This folder contains the following sub-directories:
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa" date="Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">ATR - ?</li>
      <li class="rr-info-gen">ATR2 - ?</li>
      <li class="rr-info-gen">CGX - Game Boy Color Tile Graphics</li>
      <li class="rr-info-gen">COLOR - Possibly Pallete information?</li>
      <li class="rr-info-gen">COLOR2 - ?</li>
      <li class="rr-info-gen">COM - Compiled Output files from the build process</li>
      <li class="rr-info-gen">ENDING - ?</li>
      <li class="rr-info-gen">Geki - ?</li>
      <li class="rr-info-gen">MAP - ?</li>
      <li class="rr-info-gen">New_sound - Background and Sound Effect Audio files</li>
      <li class="rr-info-gen">PHOTO - ?</li>
      <li class="rr-info-gen">scr - ?</li>
    </ul>
</div>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AZLE00-0 | .GB | 
AZLE00-1 | .GB | 
C | .map | 
C_USA | .PIF | 
c_usa | .com, .isx | 
cgal | .bat | Windows Batch file for running ?
ddd | N/A | 
gbmsdt_usa | .s, .s~ | 
isdwdcmd | .dat | 
isdwdrng | .dat | 
isdwdsym | .dat | 
msg | .txt | 
zatr_usa | .o, .s | Assembly source and compiled output for 
zatrsub_usa | .o, .s | Assembly source and compiled output for 
zchr | .o, .s | Assembly source and compiled output for 
zcol_usa | .o, .s | Assembly source and compiled output for 
zcolsub | .s | Assembly source file containing ?
zcolsub_usa | .o, .s | Assembly source and compiled output for 
zend_usa | .o, .s | Assembly source and compiled output for 
zex | .o, .s | Assembly source and compiled output for 
zma_usa | .o, .s | Assembly source and compiled output for 
zms_usa | .o, .s | Assembly source and compiled output for 
zmssub_usa | .o, .s, .s~ | 
zpl | .o, .s | Assembly source and compiled output for 
zpl1 | .o, .s | Assembly source and compiled output for 
zplsub | .o, .s | Assembly source and compiled output for 
zprsub_usa | .o, .s | Assembly source and compiled output for 
zrom | .o, .s, .s~ | 
zrom1 | .s | Assembly source file containing ?
zs1sub_usa | .o, .s | Assembly source and compiled output for 
zti_usa | .o, .prn, .s, .s~ | 
zvd | .o | 
zvd_usa | .o, .s | Assembly source and compiled output for 
エンディング(NOA) | .txt | 
新規英文テキスト | .txt | 


---
#### Atr (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/ATR)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ATR</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
T | .pdt, .pnl | 
ajitopnl | .pdt, .pnl | 
bg_4-0pn | .pdt, .pnl | 
bg_4-4pn | .pdt, .pnl | 
bg_4-8pn | .pdt, .pnl | 
bg_6-4pn | .pdt, .pnl | 
bg_6-9pn | .pdt, .pnl | 
bg_7-9pn | .pdt, .pnl | 
bg_8-0pn | .pdt, .pnl | 
bg_8-1pn | .pdt, .pnl | 
bg_8-2pn | .pdt, .pnl | 
bg_8-3pn | .pdt, .pnl | 
bg_8-6pn | .pdt, .pnl | 
bg_8-8pn | .pdt, .pnl | 
bg_8-apn | .pdt, .pnl | 
bg_9-3pn | .pdt, .pnl | 
bg_a-0pn | .pdt, .pnl | 
bg_a-2pn | .pdt, .pnl | 
bg_a-4pn | .pdt, .pnl | 
bg_a-8pn | .pdt, .pnl | 
bg_b-0pn | .pdt, .pnl | 
bg_b-3pn | .pdt, .pnl | 
bg_c-0pn | .pdt, .pnl | 
bg_c-2pn | .pdt, .pnl | 
bg_c-6pn | .pdt, .pnl | 
bg_c-cpn | .pdt, .pnl | 
bg_c-dpn | .pdt, .pnl | 
bg_d-dpn | .pdt, .pnl | 
bg_e-0pn | .pdt, .pnl | 
bg_e-8pn | .pdt, .pnl | 
camera | .pdt, .pnl | 
cz_a-2pn | .pnl | 
fukupnl | .dat, .pdt, .pnl | 
ido | .pdt, .pnl | 
idogata | .PNL, .pdt | 
idogata1 | .PNL, .pdt | 
ietype | .PNL, .pdt | 
ietype_1 | .PNL, .pdt | 
l2pnl | .pdt, .pnl | 
l4pnl | .pdt, .pnl | 
l6pnl | .pdt, .pnl | 
l8pnl | .pdt, .pnl | 
lv_1pnl | .pdt, .pnl | 
lv_3pnl | .pdt, .pnl | 
lv_5pnl | .pdt, .pnl | 
lv_7pnl | .pdt, .pnl | 
nzod1357 | .PNL, .pdt | 
onemupnl | .pdt, .pnl | 
pnl2c | .PNL, .pdt | 
pnl4c | .PNL, .pdt | 
pnl6c | .PNL, .pdt | 
pnl8c | .PNL, .pdt | 
shiropnl | .pdt, .pnl | 
tamapnl | .pdt, .pnl | 
turi_pnl | .pdt | 
turitype | .pdt, .pnl | 


---
#### Atr2 (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/ATR2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ATR2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
00pnl | .pdt, .pnl | 
06pnl | .pdt | 
08pnl | .pdt, .pnl | 
0epnl | .pdt, .pnl | 
11pnl | .pdt, .pnl | 
1apnl | .pdt, .pnl | 
cz_2-2pn | .pdt, .pnl | 
cz_2-8pn | .pdt, .pnl | 
cz_2-fpn | .pdt | 
cz_2-fqn | .pnl | 
cz_3-0pn | .pdt, .pnl | 
cz_3-7pn | .pdt, .pnl | 
cz_4-0pn | .pdt, .pnl | 
cz_4-4pn | .pdt, .pnl | 
cz_4-6pn | .pdt, .pnl | 
cz_4-8pn | .pdt, .pnl | 
cz_4-cpn | .pdt, .pnl | 
cz_6-8pn | .pdt, .pnl | 
cz_6-apn | .pdt, .pnl | 
cz_7-5pn | .pdt, .pnl | 
cz_8-0pn | .pdt, .pnl | 
cz_8-2pn | .pdt, .pnl | 
cz_8-3pn | .pdt, .pnl | 
cz_8-6pn | .pdt, .pnl | 
cz_8-7pn | .pdt, .pnl | 
cz_8-apn | .pdt, .pnl | 
cz_8-cpn | .pdt, .pnl | 
cz_8-epn | .pdt, .pnl | 
cz_a-0pn | .pdt, .pnl | 
cz_a-2pn | .pdt, .pnl | 
cz_a-4pn | .pdt, .pnl | 
cz_a-8pn | .pdt, .pnl | 
cz_b-1pn | .pdt, .pnl | 
cz_c-2pn | .pdt, .pnl | 
cz_c-4pn | .pdt, .pnl | 
cz_c-cpn | .pdt, .pnl | 
cz_c-dpn | .pdt, .pnl | 
cz_c-epn | .pdt, .pnl | 
cz_d-dpn | .pdt, .pnl | 
cz_e-0pn | .pdt, .pnl | 
cz_e-8pn | .pdt, .pnl | 


---
#### Color Graphics (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/CGX)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/CGX</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>




The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
C1 | .CHR | Sprite/Tile data created using the IS-Character development kit
C2 | .CHR | Sprite/Tile data created using the IS-Character development kit
C3 | .CHR | Sprite/Tile data created using the IS-Character development kit
C4 | .CHR | Sprite/Tile data created using the IS-Character development kit
C5 | .CHR | Sprite/Tile data created using the IS-Character development kit
C6 | .CHR | Sprite/Tile data created using the IS-Character development kit
C7 | .CHR | Sprite/Tile data created using the IS-Character development kit
C8 | .CHR | Sprite/Tile data created using the IS-Character development kit
TEST_clz5 | .cgx | 
camegake1 | .cgx | 
camegake1c | .cgx | 
cametori | .cgx | 
clz1 | .cgx | 
clz1_DEMO | .cgx | 
clz2 | .cgx | 
clz3 | .cgx | 
clz3k | .cgx | 
clz4_USA | .cgx | 
clz4z | .cgx | 
clz5 | .cgx | 
clz5k | .cgx | 
clz5z | .cgx | 
clz6 | .cgx | 
clz6k | .cgx | 
clz7 | .cgx | 
clz7k | .cgx | 
clz8 | .cgx | 
clz9 | .cgx | 
clza | .cgx | 
ctool | .cgx | 
g1 | .cgx | 
g2 | .cgx | 
g3 | .cgx | 
g4 | .cgx | 
g5 | .cgx | 
g6 | .cgx | 
g7 | .cgx | 
g8 | .cgx | 
g9 | .cgx | 
gekisiro | .cgx | 
gekitori | .cgx | 
gekitoric | .cgx | 
gekituri | .cgx | 
gekituric | .cgx | 
gekizola | .cgx | 
name.cgx | .bin | 
phowan | .cgx | 
ugb_1 | .cgx | 
ugb_4 | .cgx | 
ugb_5 | .cgx | 
ugb_7 | .cgx | 
ugb_9 | .cgx | 
uscg1 | .cgx | 
uscg4 | .cgx | 
uscg5 | .cgx | 
uscg7 | .cgx | 
uscg9 | .cgx | 
uscga | .cgx | 


---
#### Color (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/COLOR)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/COLOR</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains CDT files. Presumably these are 'Color Data Table" files that act as a pallete for the tile graphics.

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
2_room | .CDT | 
5-room | .CDT | 
7-room-0 | .CDT | 
T | .isx | 
ajitocol | .CDT | 
arasi | .CDT | 
bg_0 | .CDT | 
bg_1 | .CDT | 
bg_3 | .CDT | 
bg_3a | .CDT | 
bg_4 | .CDT | 
bg_7 | .CDT | 
bg_d | .CDT | 
camera | .CDT | 
fhoto | .CDT | 
fukucol | .CDT, .col | 
hekiga0c | .CDT | 
heya-1 | .CDT | 
heyall_a | .CDT | 
heyall_b | .CDT | 
heyall_c | .CDT | 
ido | .CDT | 
ido1 | .CDT | 
idotype_0 | .CDT | 
idotype_1 | .CDT | 
idotype_2 | .CDT | 
idotype_3 | .CDT | 
idotype_4 | .CDT | 
ietype_0 | .CDT | 
ietype_1 | .CDT | 
ietype_2 | .CDT | 
ietype_3 | .CDT | 
ietype_4 | .CDT | 
ietype_5 | .CDT | 
ietype_6 | .CDT | 
ietype_7 | .CDT | 
ietype_8 | .CDT | 
ietype_9 | .CDT | 
ietype_A | .CDT | 
jyotyu | .CDT | 
kaiga_0c | .CDT | 
kyan2 | .CDT | 
l2col | .CDT | 
l4col | .CDT | 
l6col | .CDT | 
l8col | .CDT | 
library2 | .CDT | 
love | .CDT | 
lv_1col | .CDT | 
lv_3col | .CDT | 
lv_5col | .CDT | 
lv_7col | .CDT, .cdt~ | 
map1 | .CDT | 
marin2 | .CDT | 
mori_1 | .CDT | 
mori_2 | .CDT | 
na-sa0c | .CDT | 
nyan2 | .CDT | 
objcol_c | .CDT | 
objcol_oba | .CDT | 
oc_hana | .CDT | 
oc_pine | .CDT | 
onemucol | .CDT | 
open00c | .CDT | 
open0c | .CDT | 
open0kai | .CDT | 
open1c | .CDT | 
piti_0c | .CDT | 
room1b | .CDT | 
sel_obj | .CDT | 
select_l | .CDT | 
shiba2 | .CDT | 
shirocol | .CDT | 
shop2 | .CDT | 
tamacol | .CDT | 
tamesi50 | .CDT | 
tele2 | .CDT | 
toguru | .CDT | 
tou_demo | .CDT | 
turi_ol | .CDT | 
turi_ol2 | .CDT | 
unasare | .CDT | 
ururira2 | .CDT | 
zelda_dun2 | .CDT | 
zelda_dun2c | .CDT | 
zelda_dun4c | .CDT | 
zelda_dun6c | .CDT | 
zelda_dun8 | .CDT | 
zelda_dun8c | .CDT | 
zelda_obj_swim | .col | 


---
#### Color2 (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/COLOR2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/COLOR2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
00col | .CDT | 
06col | .CDT | 
07col | .CDT | 
08col | .CDT | 
0ecol | .CDT | 
10col | .CDT | 
2bcol | .CDT | 
cz0 | .CDT | 
cz1 | .CDT | 
cz11 | .CDT | 
cz2 | .CDT | 
cz2a | .CDT | 
cz3 | .CDT | 
cz3a | .CDT | 
cz4 | .CDT | 
cz5 | .CDT | 
cz6 | .CDT | 
cz6a | .CDT | 
cz7 | .CDT | 
cz9 | .CDT | 
czb | .CDT | 
czc | .CDT | 
czca | .CDT | 
czd | .CDT | 


---
#### Compiled Output (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/COM)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/COM</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AZLE20-0 | .GB, .com | Compiled GBC ROM
AZLE20-C | .com | Compiled GBC ROM
Azlp20-0 | .GB | Compiled GBC ROM
cgbzel_usa0820 | .com | Compiled GBC ROM
isdwdcmd | .dat | 
isdwdrng | .dat | 
isdwdsym | .dat | 


---
#### Ending (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/ENDING)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ENDING</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>




The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
kaiso_1 | .CDT, .CSD | 
kaiso_2 | .CSD | 
kaiso_3 | .CSD | 
kaiso_4 | .CSD | 
kaiso_5 | .CSD | 


---
#### Geki (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/Geki)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Geki</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Game Boy Color Tile graphic for...

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gekigake1 | .cgx | 
gekigake1c | .cgx | 
gekihaka | .cgx | 
gekisiro | .cgx | 
gekisiroc | .cgx | 
gekitori | .cgx | 
gekitoric | .cgx | 
gekiwanc | .cgx | 
shasinya | .cgx | 
tenso | .cgx | 


---
#### Map (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/MAP)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/MAP</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
zel_map1 | .MDT | 
zel_map2 | .MDT | 


---
#### New_sound (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/New_sound)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/New_sound</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
bgm_1 | .bin | Background Music 1
bgm_2 | .bin | Background Music 2
se | .bin | Sound Effects


---
#### Photo (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/PHOTO)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/PHOTO</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
camegake1 | .CSD, .cgx | 
camegake2 | .CSD, .cgx | 
camehaka | .CSD, .cgx | 
camesiro | .CSD, .cgx | 
cametori | .CSD, .cgx | 
cameturi | .CSD, .cgx | 
camezola | .CSD, .cgx | 
camezolat | .cgx | 
camezolata | .CSD | 
fhoto | .CCD, .CSD | 
hekiga | .CCD, .CSD, .cgx, .col, .scr | 
himitsu | .cgx | 
himitsu1 | .CSD | 
himitsu10 | .CSD | 
himitsu11 | .CSD | 
himitsu2 | .CSD | 
himitsu4 | .CSD | 
himitsu7 | .CSD | 
himitsu8 | .CSD | 
himitsu9 | .CSD | 
kaiga | .CCD, .CSD, .cgx, .col, .scr | 
peach | .CCD, .CSD, .cgx, .col, .scr | 
ph_4 | .CSD, .cgx | 
ph_a1p | .CSD, .cgx | 
ph_uru_p | .CSD, .cgx | 
phodoro | .CSD, .cgx | 
phoshasinya | .CSD, .cgx | 
phoshasinya_P | .CSD | 
phoshasinya_p | .cgx | 
photori | .CSD, .cgx | 


---
#### Scr (/AZL__ゼルダの伝説 夢を見る島DX/Source/Disk1/ゼルダの伝説_JP3_US3_EU2/CGB_zeldaUSA/cgb_usa/scr)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/scr</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
name_1 | .scr | 
name_2 | .scr | 

---

Note: This page is currently unfinished, if you have any time to contribute please consider submitting a Pull Request to this page.
