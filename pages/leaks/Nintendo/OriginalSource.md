---
layout: post
tags: 
- leak
- gameboy
title: Pokemon Original Source Code Leak  
thumbnail: /public/consoles/Nintendo GameBoy.png
image_: /public/images/leaks/OriginalSource.jpg
permalink: /pokemon-original-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Pokemon Original Source Code Leak  
    url: #
recommend: 
- leak
- gameboy
editlink: /leaks/Nintendo/OriginalSource.md
twitterimage_: https://www.retroreversing.com/public/images/leaks/OriginalSource.jpg
updatedAt: '2020-10-03'
---
On the 11th April 2020 the source code to the original generation of Pokemon games was released to 4chan as **osrc.zip**. 
This zip archive contained a password protected zip file called **OriginalSouce.zip** which was quickly cracked and found that the password was **poke1024**.

This post will cover the contents of the leaked source code.

# Files Leaked
* **OriginalSouce.zip** - 24.6 MB

When extracted the **OriginalSouce.zip** file contains the following folders:
* **blue8M** - Source code for Pokemon Blue
* **yellow** - Source code for Pokemon Yellow

The next section will talk about Pokemon Blue.

---
# Blue8m (/blue8M)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/blue8M</div>
  <div markdown="1" class="rr-post-markdown">
This folder contains the entire source code for Pokemon Blue, the files directly in this folder are for assembling the source code into a ROM and even includes a pre-built ROM file (**BLUEMONS.ISX**). 
    
Nintendo used .ISX as the extension for GameBoy ROM files, presumably standing for **Intelligent Systems eXecutable** as they are built using the Intelligent systems Game Boy development kit.
    
You will also find files with the .ISO extension, these are **Intelligent System Object** files that are the assembled output of the assembly source code.
    
Assembler used: isdmg - DMG Relocatable Macro Assembler  Version 1.21f
Linker used: islink - ISASM Linker  Version 1.20e

This folder also contains the following sub-directories:
* **検索** - unknown, translates to "search", Just contains one txt file with embedded messages in it in japanese
* **source** - The z80 Assembly source code for the game
* **EFFDATA** - Sound effect data
* **Document** - Translation documents from Japanese to English
* **MAPDATA** - Files which specify which graphic tile goes where on each of the maps
* **DATA** - Static data like graphics and boss statistics
* **SXY** - Structure data for each map (NPCs etc)
* **MONSDATA** - Pokemon Data (graphics?)

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
BLUEMONS | .ISX | Pre-built Pokemon Blue ROM
DMGFUNC | .TB0 | 
bluemons | .sdb | Debug Symbols for the Blue ROM file, contains offsets of each function in the ROM
depends | .bat, .mak, .mak0 | Lists all of the dependencies for each file
err | .txt | Terminal output of runnking assemble/link on the source code
link | .lnk | Link file to tell the Linker how to link everything together into the final ROM
makefile | N/A | Used to build the source code in the folder (run make)
makerom | .bat | Windows Batch file for running 
mssccprj | .scc | Microsoft Visual Studio Source Control config file
mvmsg | .bat | Windows Batch file for running 
readme | .txt | Short text file that explains DMY_MAP2_EXRAM in Japanese


---
## Data (/blue8M/DATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DATA</div>
  <div markdown="1" class="rr-post-markdown">
This folder contains static data like tables that can be looked up to get specific pokemon and boss statistics.
    
They are all technically assembly files but they just use DefineByte (db) with data in hex format for example:
```
db	001h,002h,003h,004h,005h,006h,007h,008h	; 
```
    
Note that whenever the files mention the word "Dealer" they mean "Pokemon Trainer".

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALPHABET | .DAT | 
BADGE | .DAT | 
BANKTOOL | .DAT | 
BDMONS | .DAT | 
BOSS01 | .DAT | 
BOSS02 | .DAT | 
BOSS03 | .DAT | 
BOSS04 | .DAT | 
B_GAUGE | .DAT | 
B_MARUC | .DAT | 
CAST_UP | .DAT | 
CHARA | .DAT | 
CHARI | .DAT | 
DANPEI | .DAT | 
DEALER | .DEF | 
DEALER00 | .DAT | 
DEALER01 | .DAT | 
DEALER02 | .DAT | 
DEALER03 | .DAT | 
DEALER04 | .DAT | 
DEALER05 | .DAT | 
DEALER06 | .DAT | 
DEALER07 | .DAT | 
DEALER08 | .DAT | 
DEALER09 | .DAT | 
DEALER10 | .DAT | 
DEALER11 | .DAT | 
DEALER12 | .DAT | 
DEALER13 | .DAT | 
DEALER14 | .DAT | 
DEALER15 | .DAT | 
DEALER16 | .DAT | 
DEALER17 | .DAT | 
DEALER18 | .DAT | 
DEALER19 | .DAT | 
DEALER20 | .DAT | 
DEALER21 | .DAT | 
DEALER22 | .DAT | 
DEALER23 | .DAT | 
DEALER24 | .DAT | 
DEALER25 | .DAT | 
DEALER26 | .DAT | 
DEALER27 | .DAT | 
DEALER28 | .DAT | 
DEALER29 | .DAT | 
DEALER30 | .DAT | 
DEALER31 | .DAT | 
DEALER32 | .DAT | 
DEALER33 | .DAT | 
DEALER34 | .DAT | 
DEALER41 | .DAT | 
DEALER42 | .DAT | 
DEALER43 | .DAT | 
DEALER44 | .DAT | 
DEALER45 | .DAT | 
DEALERAI | .DAT | 
DEALERNM | .DAT | 
DEALERTB | .DAT | 
DEMO_TIT | .DAT | 
DMONS | .DAT, .SYM | 
ENCOUNT | .DAT, .SAV | 
ENCOUNTB | .DAT | 
ENCOUNTR | .DAT | 
FIGHT | .DAT | 
FONT | .DAT | 
GAUGE | .DAT | 
GAUGE_B | .DAT | 
HANAHANA | .DAT | 
HERO | .DAT | 
ITEMGOLD | .DAT | 
ITEMMENU | .DAT, .SAV | 
ITEMNAME | .DAT, .SAV | 
JIKI | .DAT | 
JIKI_BLU | .DAT | 
JI_BACK | .DAT | 
JUMPDAI | .DAT | 
KASYA1 | .DAT | 
KASYA2 | .DAT | 
KASYA3 | .DAT | 
KASYA4 | .DAT | 
KOMONO | .DAT | 
LOGOVER | .DAT | 
MAPJIKI | .DAT | 
MARUSHI | .DAT | 
MARUSHI2 | .DAT | 
MARUSI_N | .DAT | 
MY_BACK | .DAT | 
NUSI_01 | .DAT | 
NUSI_02 | .DAT | 
NUSI_03 | .DAT | 
NUSI_04 | .DAT | 
NUSI_05 | .DAT | 
NUSI_06 | .DAT | 
NUSI_07 | .DAT | 
NUSI_08 | .DAT | 
N_GAUGE | .DAT | 
OBJ01 | .DAT | 
OBJ02 | .DAT | 
OBJ03 | .DAT | 
OBJ04 | .DAT | 
OBJ05 | .DAT | 
OBJ06 | .DAT | 
OBJ_01 | .DAT | 
OBJ_02 | .DAT | 
OBJ_03 | .DAT | 
OBJ_04 | .DAT | 
OBJ_05 | .DAT | 
OBJ_06 | .DAT | 
OKI01 | .DAT | 
OP_BG | .DAT | 
OP_OBJ | .DAT | 
OP_PURIN | .DAT | 
PMTIT | .DAT | 
PSY | .DAT | 
RAPLUS | .DAT | 
RDMONS | .DAT | 
RIVAL | .DAT | 
SERIFU | .DAT | 
SERIFU_B | .DAT | 
SHINKA | .DAT, .SAV | 
SLOT1 | .DAT | 
SLOT_BG | .DAT | 
SLOT_OB | .DAT | 
STATUSX | .DAT | 
THEEND | .DAT | 
TITLCAP2 | .DAT | 
TITLE03 | .DAT | 
TITLE04 | .DAT | 
TITLE_JI | .DAT | 
TRADE_AN | .DAT | 
VANISH | .DAT | 
WAZAGOLD | .DAT | 
WAZANAME | .DAT | 
WAZA_SE | .DAT, .H | 
WAZA_TBL | .DAT, .SAV | 
WORLDMAP | .DAT | 
YUUICHI | .DAT | 
ZUKAN | .DAT | 
err | .txt | 
font_us | .dat | 


---
## Document (/blue8M/Document)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Document</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation related to translation of the game into english and also general data on bugs found during development.
    
The **.dmg0** files are not assembly code but seem to be a custom scripting language for dialog, where each message has a unique id and a end of message character (`{EOMeom}`), for example;
```
message_id:msg1_0_R06R0201
//ちかつうろは　うすぐらいから{home@}
//おとしもの　おおいんですって{EOMeom}

People often lose{home@}
things in that{gyo3@}
UNDERGROUND PATH.{EOMeom}
```

This folder also contains the following sub-directories:
* **translation** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
POFINAL | .XLS | Final version of tranlation of Pokemon names from japanese to English
POKEMO10 | .DOC | 
bugs | .txt | Talks about bugs such as the save data being corrupted when the user turns off the Game Boy before finishing save
err | .txt | The terminal output of comparing the two files i_msg2_2.dmg0 and 2-2-33.txt which seem to be identical.
fontdef | .xls | Contains two tables with 256 cells, one for the japanese font and the other for the english includng all the special characters like PKMN
i_msg2_0 | .dmg0 | English translations for phrases like "Not even a nibble!" and more
i_msg2_1 | .dmg0 | English translations for dialog on Sylph Corporation 6th floor and more
i_msg2_2 | .dmg0 | English translations for dialog outside hotel and more
i_msg2_3 | .dmg0 | English translations for dialog 
i_msg2_4 | .dmg0 | English translations for dialog
i_msg2_5 | .dmg0 | English translations for dialog
i_msg2_6 | .dmg0 | English translations for dialog
i_msg2_7 | .dmg0 | English translations for dialog
i_msg2_8 | .dmg0 | English translations for dialog
i_msg2_9 | .dmg0 | English translations for dialog
i_msg2_a | .dmg0 | English translations for dialog
logo | .txt | Seems to be an Adobe Illustrator file for the logo but with .txt extension for some reason
pmfile | .dat0 | Pokedex data such as height/weight and english text (japanese text as comments)
poke_ram | .xls | Contains tables showing the layout in ram for the pokemon data, like name, status (sleeping, poisoned etc)
pokemon_map | .txt | Very useful document describing each of the maps
pokescript | .txt | Describes the dialog scripting format called pokescript and special variables such as `{gyo3@}` or `{cr@}` (carriage return)
readme | .txt | Same as pokescript.txt
schedule | .txt | The planned release schedule for releasing Pokemon to the US market
water_enc | .txt | Japanese document describing where to capture pokemon in the water with the Fishing rod 
その他テキスト | .txt | Translations for pokemon types and dialogs
その他テキスト2 | .txt | List of all the pokemon types (e.g water,fire etc) in Japanese
その他テキスト3 | .txt | Talks about the different states a pokemon can be in like sleeping
英語メッセージ未入力 | .txt | Talks about garbase data where the english text is missing


---
### Translation (/blue8M/Document/translation)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/translation</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **old** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
2-0-17 | .txt | 
2-1-18 | .txt | 
2-2-34 | .txt | 
2-3-19 | .txt | 
2-4-21 | .txt | 
2-5-27 | .txt | 
2-6-17 | .txt | 
2-7-13 | .txt | 
2-8-16 | .txt | 
2-9-21 | .txt | 
2-a-7 | .txt | 
Zukan-9 | .txt | 
err | .txt | 


---
#### Old translation documents (/blue8M/Document/translation/old)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/old</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
2-0-1 | .TXT | 
2-0-10 | .txt | 
2-0-11 | .txt | 
2-0-12 | .txt | 
2-0-13 | .txt | 
2-0-14 | .txt | 
2-0-15 | .txt | 
2-0-16 | .txt | 
2-0-2 | .TXT | 
2-0-3 | .txt | 
2-0-4 | .txt | 
2-0-5 | .txt | 
2-0-6 | .txt | 
2-0-7 | .txt | 
2-0-8 | .txt | 
2-0-9 | .txt | 
2-1-1 | .TXT | 
2-1-10 | .txt | 
2-1-11 | .txt | 
2-1-12 | .txt | 
2-1-13 | .txt | 
2-1-14 | .txt | 
2-1-15 | .txt | 
2-1-16 | .txt | 
2-1-17 | .txt | 
2-1-2 | .txt | 
2-1-3 | .txt | 
2-1-4 | .txt | 
2-1-5 | .txt | 
2-1-6 | .txt | 
2-1-7 | .txt | 
2-1-8 | .txt | 
2-1-9 | .txt | 
2-2-1 | .txt | 
2-2-10 | .txt | 
2-2-11 | .txt | 
2-2-12 | .txt | 
2-2-13 | .txt | 
2-2-14 | .txt | 
2-2-15 | .txt | 
2-2-16 | .txt | 
2-2-17 | .txt | 
2-2-18 | .txt | 
2-2-19 | .txt | 
2-2-2 | .txt | 
2-2-20 | .txt | 
2-2-21 | .txt | 
2-2-22 | .txt | 
2-2-23 | .txt | 
2-2-24 | .txt | 
2-2-25 | .txt | 
2-2-26 | .txt | 
2-2-27 | .txt | 
2-2-28 | .txt | 
2-2-29 | .txt | 
2-2-3 | .TXT | 
2-2-30 | .txt | 
2-2-31 | .txt | 
2-2-32 | .txt | 
2-2-33 | .txt | 
2-2-4 | .TXT | 
2-2-6 | .TXT | 
2-2-7 | .txt | 
2-2-8 | .txt | 
2-2-9 | .txt | 
2-3-1 | .txt | 
2-3-10 | .txt | 
2-3-11 | .txt | 
2-3-12 | .txt | 
2-3-13 | .txt | 
2-3-14 | .txt | 
2-3-15 | .txt | 
2-3-16 | .txt | 
2-3-17 | .txt | 
2-3-18 | .txt | 
2-3-2 | .TXT | 
2-3-3 | .txt | 
2-3-4 | .txt | 
2-3-5 | .txt | 
2-3-6 | .txt | 
2-3-7 | .txt | 
2-3-8 | .txt | 
2-3-9 | .txt | 
2-4-1 | .txt | 
2-4-10 | .txt | 
2-4-11 | .txt | 
2-4-12 | .txt | 
2-4-13 | .txt | 
2-4-14 | .txt | 
2-4-15 | .txt | 
2-4-16 | .txt | 
2-4-17 | .txt | 
2-4-18 | .txt | 
2-4-19 | .txt | 
2-4-2 | .TXT | 
2-4-20 | .txt | 
2-4-3 | .TXT | 
2-4-4 | .TXT | 
2-4-5 | .txt | 
2-4-6 | .txt | 
2-4-7 | .txt | 
2-4-8 | .txt | 
2-4-9 | .txt | 
2-5-1 | .txt | 
2-5-10 | .txt | 
2-5-11 | .txt | 
2-5-12 | .txt | 
2-5-13 | .txt | 
2-5-14 | .txt | 
2-5-15 | .txt | 
2-5-16 | .txt | 
2-5-17 | .txt | 
2-5-18 | .txt | 
2-5-19 | .txt | 
2-5-2 | .TXT | 
2-5-20 | .txt | 
2-5-21 | .txt | 
2-5-22 | .txt | 
2-5-23 | .txt | 
2-5-24 | .txt | 
2-5-25 | .txt | 
2-5-26 | .txt | 
2-5-3 | .TXT | 
2-5-4 | .TXT | 
2-5-5 | .TXT | 
2-5-6 | .TXT | 
2-5-7 | .txt | 
2-5-8 | .txt | 
2-5-9 | .txt | 
2-6-1 | .txt | 
2-6-10 | .txt | 
2-6-11 | .txt | 
2-6-12 | .txt | 
2-6-13 | .txt | 
2-6-14 | .txt | 
2-6-15 | .txt | 
2-6-16 | .txt | 
2-6-2 | .txt | 
2-6-3 | .txt | 
2-6-4 | .txt | 
2-6-5 | .txt | 
2-6-6 | .txt | 
2-6-7 | .txt | 
2-6-8 | .txt | 
2-6-9 | .txt | 
2-7-1 | .txt | 
2-7-10 | .txt | 
2-7-11 | .txt | 
2-7-12 | .txt | 
2-7-2 | .txt | 
2-7-3 | .txt | 
2-7-4 | .txt | 
2-7-5 | .txt | 
2-7-6 | .txt | 
2-7-7 | .txt | 
2-7-8 | .txt | 
2-7-9 | .txt | 
2-8-1 | .txt | 
2-8-10 | .txt | 
2-8-11 | .txt | 
2-8-12 | .txt | 
2-8-13 | .txt | 
2-8-14 | .txt | 
2-8-15 | .txt | 
2-8-2 | .TXT | 
2-8-3 | .txt | 
2-8-4 | .txt | 
2-8-5 | .txt | 
2-8-6 | .txt | 
2-8-7 | .txt | 
2-8-8 | .txt | 
2-8-9 | .txt | 
2-9-1 | .TXT | 
2-9-10 | .txt | 
2-9-11 | .txt | 
2-9-12 | .txt | 
2-9-13 | .txt | 
2-9-14 | .txt | 
2-9-15 | .txt | 
2-9-16 | .txt | 
2-9-17 | .txt | 
2-9-18 | .txt | 
2-9-19 | .txt | 
2-9-2 | .txt | 
2-9-20 | .txt | 
2-9-3 | .txt | 
2-9-4 | .txt | 
2-9-5 | .txt | 
2-9-6 | .txt | 
2-9-7 | .txt | 
2-9-8 | .txt | 
2-9-9 | .txt | 
2-A-1 | .txt | 
2-a-2 | .txt | 
2-a-3 | .txt | 
2-a-4 | .txt | 
2-a-5 | .txt | 
2-a-6 | .txt | 
ZUKAN-1 | .TXT | 
ZUKAN-3 | .TXT | 
Zukan-4 | .txt | 
Zukan-5 | .txt | 
Zukan-6 | .txt | 
Zukan-7 | .txt | 
Zukan-8 | .txt | 
zukan-2 | .txt | 


---
## Effect Data (/blue8M/EFFDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/EFFDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the Super Game Boy data and possibly sound effect data?

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BLSLOTBG | .DAT | 
CAPTURE | .DAT | 
COL_BLUE | .DAT | 
COL_RE | .COL | 
COL_RED | .DAT | 
DEMO_TIT | .DAT | 
EF0 | .DAT | 
EF1 | .DAT | 
FLAME1 | .DAT | 
HYDRO1 | .DAT | 
MARUMARU | .DAT | 
MIZU | .DAT | Water?
MUSI | .DAT | 
PF_BLUE | .CGX, .MAP | 
PF_COL | .COL | 
PF_COLOR | .COX | 
PF_GRE | .CGX, .MAP | Super GameBoy Data
PF_GRE2 | .CGX, .COL, .MAP | Super GameBoy Data
PF_GREEN | .MAP | Super GameBoy Data
PF_RED | .CGX, .COL, .MAP | Super GameBoy Data
PF_RED2 | .CGX, .COL, .MAP | Super GameBoy Data
PICT_F | .DAT | 
RYDEEN1 | .DAT | 
SGB_PF | .CGX, .COL, .MAP | 
SGB_PF2 | .MAP | 
SIMPHIT | .DAT | 
SLOTBG_B | .DAT | 
SLOTOB_B | .DAT | 
SLOTOB_R | .DAT | 
STATNAME | .DAT | 
STATNO | .DAT | 
STATUS1 | .DAT | 
STATWAKU | .DAT | 
TEST1 | .COX | 
TETSU | .DAT | 
TURI | .DAT | 


---
## Map Data (/blue8M/MAPDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/MAPDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the character tiles for each of the maps along with the actual layouts of the maps.. 
    
The **.MAP** files contain the layout of each of the screens and are actually just assembly files using Define Byte (db) for each of the graphic tiles in the map, for example:

```
; Map size	X = 10  Y = 9
; Page size	PX = 1  PY = 1
	db	016h,06bh,06ah,017h
	db	002h,009h,008h,001h
	db	018h,06ch,069h,019h
```
    
This folder contains **.CEL** files that contain the character tile graphics. Presumably the C stands for Character but we are unsure what the E and L stands for in the extension.
The **.CHR** files are character file graphics too?

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
1 | .CEL | Character Tiles for ?
11_18GAT | .MAP | Gate on route 11 and 18? 
12GATE | .MAP | Gate on route 12
16_GATE | .MAP | Gate on route 16
22GATE | .MAP | Pokémon League Reception Gate 
5_6GATE | .MAP | Gate between Lavender Town and Vermillion City
7_8GATE | .MAP | Gate between 
ARASARE | .CEL, .CHR, .MAP | 
AZITO_B1 | .MAP | Rocket HQ Basement 1
AZITO_B2 | .MAP | Rocket HQ Basement 2
AZITO_B3 | .MAP | Rocket HQ Basement 3
AZITO_B4 | .MAP | Rocket HQ Basement 4
AZITO_EL | .MAP | Rocket HQ ?
AZITO_R1 | .MAP | Rocket HQ ?
AZITO_R2 | .MAP | Rocket HQ ?
AZITO_R3 | .MAP | Rocket HQ ?
BILDING | .CEL | 
BOSSDOJO | .MAP | 
BTOWN_B1 | .DAT | 
BUILDING | .CEL, .DAT | 
BULDING | .CEL | 
CHAMPCUP | .CEL, .CHR, .MAP | 
CICLE | .CEL, .DAT, .MAP | Bicycle Shop
COLOSEUM | .MAP | 
CYCLE | .CEL, .DAT, .MAP | 
DAIMANIA | .CEL, .DAT | 
DAISUKI | .MAP | 
DENDOU | .MAP | 
DENDOU2 | .MAP | 
DEPELV | .MAP | 
DEPT | .CEL, .DAT | Celadon Department Store Graphics
DEPT1F | .MAP | Celadon Department Store 1F
DEPT2F | .MAP | Celadon Department Store 2F
DEPT3F | .MAP | Celadon Department Store 3F
DEPT4F | .MAP | Celadon Department Store 4F
DEPT5F | .MAP | Celadon Department Store 5F
DEPT6F | .MAP | Celadon Department Store 6F
DGN01 | .CEL, .DAT, .MAP | 
DGN02 | .CEL, .DAT, .MAP | 
DGN04 | .MAP | 
DGN05 | .MAP | 
DGN06 | .MAP | 
DOJO | .MAP | Gym Graphics
DOJO_01 | .MAP | Early Gym 1
DOJO_02 | .MAP | Early Gym 2
DOJO_03 | .MAP | Early Gym 3
DOJO_04 | .MAP | Early Gym 4
DOJO_05 | .MAP | Early Gym 5
DOJO_06 | .MAP | Early Gym 6
DOJO_07 | .MAP | Early Gym 7
DOJO_08 | .MAP | Early Gym 8
DONATA | .MAP | 
DUN02 | .CEL | 
END01 | .MAP | 
END02 | .MAP | 
END03 | .MAP | 
FIRE_DUN | .MAP | 
GATE | .CEL, .DAT | 
GATE2F | .MAP | 
GATEHAKU | .CEL, .DAT | 
GYM | .CEL, .DAT | Gym graphics
GYM_01 | .MAP | Gym 1
GYM_02 | .MAP | Gym 2
GYM_03 | .MAP | Gym 3
GYM_04 | .MAP | Gym 4
GYM_05 | .MAP | Gym 5
GYM_06 | .MAP | Gym 6
GYM_07 | .MAP | Gym 7
GYM_08 | .MAP | Gym 8
HAKUBU1F | .MAP | Science Museum 1F
HAKUBU2F | .MAP | Science Museum 2F
HAKUBUTU | .DAT | 
HONBU1 | .MAP | Headquarters 1
HONBU2 | .MAP | Headquarters 2
HONBU3 | .MAP | Headquarters 3
HOTEL | .CEL, .CHR, .DAT, .MAP | Standard Pokemon Center map
HYOUSIKI | .DAT | 
IWAMIN | .MAP | 
IWANUKE_ | .MAP | 
IWA_1F | .MAP | 
IWA_2F | .MAP | 
JIMKYOK | .MAP | 
JIMSHO | .MAP | 
JISAN | .MAP | Unused Grandpa's House
KAICHO_5 | .MAP | 
KENKYU | .CEL, .DAT, .MAP | 
KENKYU_1 | .MAP | 
KENKYU_2 | .MAP | 
KENKYU_3 | .MAP | 
KENKYU_4 | .MAP | 
KENKYU_S | .MAP | 
KOKANJO | .MAP | 
LASTBOSS | .MAP | 
MANIA | .DAT, .MAP | 
MANSH01 | .MAP | 
MANSH02 | .MAP | 
MANSH03 | .MAP | 
MANSH04 | .MAP | 
MANSHO | .CEL, .DAT | 
MANSHO1 | .CEL | 
MAP_TBL | .DAT | 
MDUN_1 | .MAP | 
MDUN_2 | .MAP | 
MDUN_3 | .MAP | 
MDUN_4 | .CEL, .MAP | 
MDUN_5 | .MAP | 
MDUN_6 | .MAP | 
MINKA_A | .CEL, .DAT, .MAP | Minka is a japanese house
MINKA_B | .CEL, .MAP | House
MINKA_C | .MAP | House destroyed by pokemon
MINKA_D | .MAP | House
MISEYADO | .CEL, .DAT | 
NEND01 | .MAP | Forgotten Cave
NEND02 | .MAP | 
NEND03 | .MAP | 
NEW_IWA1 | .MAP | 
NEW_IWA2 | .MAP | 
NHOTEL | .MAP | New version of Pokemon Center
NIWA | .MAP | Unused test map
NROAD_01 | .DAT, .MAP | Route 1
NROAD_02 | .DAT, .MAP | Route 2
NROAD_03 | .DAT, .MAP | Route 3
NROAD_04 | .DAT, .MAP | Route 4
NROAD_05 | .DAT, .MAP | Route 5
NROAD_06 | .DAT, .MAP | Route 6
NROAD_07 | .DAT, .MAP | Route 7
NROAD_08 | .DAT, .MAP | Route 8
NROAD_09 | .DAT, .MAP | Route 9
NROAD_10 | .DAT, .MAP | Route 10
NROAD_11 | .DAT, .MAP | Route 11
NROAD_12 | .DAT, .MAP | Route 12
NROAD_13 | .DAT, .MAP | Route 13
NROAD_14 | .DAT, .MAP | Route 14
NROAD_15 | .DAT, .MAP | Route 15
NROAD_16 | .DAT, .MAP | Route 16
NROAD_17 | .DAT, .MAP | Route 17
NROAD_18 | .DAT, .MAP | Route 18
NROAD_19 | .DAT, .MAP | Route 19
NROAD_20 | .DAT, .MAP | Route 20
NROAD_21 | .DAT, .MAP | Route 21
NROAD_22 | .DAT, .MAP | Route 22
NROAD_23 | .DAT, .MAP | Route 23
NROAD_24 | .DAT, .MAP | Route 24
NROAD_25 | .DAT, .MAP | Route 25
NSILF_1 | .MAP | Silph Co. 1
NSILF_2 | .MAP | Silph Co. 2
NSILF_3 | .MAP | Silph Co. 3
NSILF_4 | .MAP | Silph Co. 4
NSILF_5 | .MAP | Silph Co. 5
NTOWER | .CEL, .DAT | 
NTOWN_01 | .CEL, .DAT, .MAP | 
NTOWN_02 | .MAP | 
NTOWN_03 | .MAP | 
NTOWN_04 | .DAT, .MAP | 
NTOWN_05 | .DAT, .MAP | 
NTOWN_06 | .DAT, .MAP | 
NTOWN_07 | .DAT, .MAP | 
NTOWN_08 | .DAT, .MAP | 
NTOWN_09 | .DAT, .MAP | 
NTOWN_10 | .DAT, .MAP | 
NTOWN_11 | .DAT | 
NTOWN_12 | .DAT | 
NTOWN_T | .DAT, .MAP | 
NT_1F | .MAP | 
NT_2F | .MAP | 
NT_3F | .MAP | 
NT_4F | .MAP | 
NT_5F | .MAP | 
NT_6F | .MAP | 
NT_7F | .MAP | 
NT_EL | .MAP | 
NUKE | .CEL, .DAT | 
NUKE5_6 | .MAP | 
NUKEMIN | .MAP | 
OHKIDO | .MAP | 
ORI | .MAP | 
OTUKI_B1 | .MAP | 
OTUKI_B2 | .MAP | 
OTUKI_B3 | .MAP | 
PACHNCO | .CEL, .MAP | 
POKECEN | .CEL, .DAT, .MAP | 
POKECHR | .CEL | 
POKESEN | .CEL, .DAT | 
POKE_1F | .CEL, .MAP | 
POKE_2F | .CEL, .MAP | 
POKE_3F | .MAP | 
POKE_B1 | .CEL, .MAP | 
PORT | .CEL, .DAT, .MAP | 
PREAGUE | .MAP | 
R1_CHR | .DAT | 
R1_ENC | .DAT | 
ROAD1 | .DAT | 
ROAD10 | .DAT | 
ROAD11 | .DAT | 
ROAD12 | .DAT | 
ROAD13 | .DAT | 
ROAD14 | .DAT | 
ROAD15 | .DAT | 
ROAD16 | .DAT | 
ROAD17 | .DAT | 
ROAD18 | .DAT | 
ROAD19 | .DAT | 
ROAD1T | .DAT | 
ROAD2 | .DAT | 
ROAD20 | .DAT | 
ROAD21 | .DAT | 
ROAD22 | .DAT | 
ROAD23 | .DAT | 
ROAD24 | .DAT | 
ROAD25 | .DAT | 
ROAD3 | .DAT | 
ROAD4 | .DAT | 
ROAD5 | .DAT | 
ROAD6 | .DAT | 
ROAD7 | .DAT | 
ROAD8 | .DAT | 
ROAD9 | .DAT | 
ROOM | .CEL, .DAT | Player's House
ROOM1F | .CEL, .DAT, .MAP | Downstairs of the Player's House
ROOM1~00 | .ORG | 
ROOM2F | .CEL, .DAT, .MAP | Upstairs of the Player's House
ROOM2~00 | .ORG | 
ROOMCELL | .DAT | 
ROOMIMG | .DAT | 
SAFACELL | .CEL | 
SAFARI_1 | .MAP | 
SAFARI_2 | .MAP | 
SAFARI_3 | .MAP | 
SAFARI_4 | .MAP | 
SCFOOL | .CEL | 
SCHOOL | .CEL, .DAT, .MAP | 
SCLCELL | .DAT | 
SCLCE~00 | .ORG | 
SCLIMG | .DAT | 
SEKISHO | .CEL, .DAT, .MAP | 
SHIP | .CEL, .DAT | 
SHOKUDO | .MAP | 
SHOP | .CHR, .MAP | PokeMart map
SHOP1 | .DAT | 
SHOPCELL | .DAT | 
SHOPIMG | .DAT | 
`SHOP~~00` | .ORG | 
SHROOM1 | .MAP | 
SHROOM2 | .MAP | 
SHROOM3 | .MAP | 
SHROOM4 | .MAP | 
SILE_B4 | .MAP | 
SILF_11F | .MAP | 
SILF_1F | .MAP | 
SILF_2F | .MAP | 
SILF_3F | .MAP | 
SILF_4F | .MAP | 
SILF_5F | .MAP | 
SILF_B1 | .MAP | 
SILF_B2 | .MAP | 
SILF_B3 | .MAP | 
SILF_B3A | .MAP | 
SILF_B3B | .MAP | 
SILF_B4 | .MAP | 
SILF_B5 | .MAP | 
SILF_B6 | .MAP | 
SILF_B7 | .MAP | 
SILF_B8 | .MAP | 
SKOYA_1 | .MAP | Safari Zone rest house
SKOYA_2 | .MAP | Unused Safari Zone rest house
STANNU | .CEL, .DAT | 
STANNU01 | .MAP | 
STANNU02 | .MAP | 
STANNU03 | .MAP | 
STANNU04 | .MAP | 
STANNU05 | .MAP | 
T6S2 | .DAT | 
TORI_1F | .MAP | 
TORI_B1 | .MAP | 
TORI_B2 | .MAP | 
TOWER | .CEL, .DAT | 
TOWER1F | .MAP | 
TOWER2F | .MAP | 
TOWER3F | .MAP | 
TOWER4F | .MAP | 
TOWER5F | .MAP | 
TOWER6F | .MAP | 
TOWER7F | .MAP | 
TOWN1 | .DAT | 
TOWN10 | .DAT | 
TOWN11 | .DAT | 
TOWN12 | .DAT | 
TOWN2 | .DAT | 
TOWN3 | .DAT | 
TOWN4 | .DAT | 
TOWN5 | .DAT | 
TOWN6 | .DAT | 
TOWN7 | .DAT | 
TOWN8 | .DAT | 
TOWN9 | .DAT | 
TOWNCELL | .DAT | 
TOWNIMG2 | .DAT | 
TOWN_B1 | .CEL, .DAT | 
TRADE | .MAP | 
TRAINING | .CEL, .MAP | Unused Broken room
TURI | .MAP | 
UMIIE | .MAP | 
YDUN_1 | .MAP | 


---
## Monsdata (/blue8M/MONSDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/MONSDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
DEALER26 | .DAT | 
KABUBONE | .DAT | 
KAIHATSU | .DAT | 
MONSB100 | .DAT | 
MONSB101 | .DAT | 
MONSB102 | .DAT | 
MONSB103 | .DAT | 
MONSB104 | .DAT | 
MONSB105 | .DAT | 
MONSB106 | .DAT | 
MONSB107 | .DAT | 
MONSB108 | .DAT | 
MONSB109 | .DAT | 
MONSB110 | .DAT | 
MONSB111 | .DAT | 
MONSB112 | .DAT | 
MONSB113 | .DAT | 
MONSB114 | .DAT | 
MONSB116 | .DAT | 
MONSB117 | .DAT | 
MONSB118 | .DAT | 
MONSB119 | .DAT | 
MONSB120 | .DAT | 
MONSB122 | .DAT | 
MONSB123 | .DAT | 
MONSB124 | .DAT | 
MONSB125 | .DAT | 
MONSB126 | .DAT | 
MONSB127 | .DAT | 
MONSB128 | .DAT | 
MONSB129 | .DAT | 
MONSB130 | .DAT | 
MONSB131 | .DAT | 
MONSB132 | .DAT | 
MONSB133 | .DAT | 
MONSB134 | .DAT | 
MONSB136 | .DAT | 
MONSB137 | .DAT | 
MONSB138 | .DAT | 
MONSB139 | .DAT | 
MONSB140 | .DAT | 
MONSB141 | .DAT | 
MONSB142 | .DAT | 
MONSB143 | .DAT | 
MONSB144 | .DAT | 
MONSB145 | .DAT | 
MONSB146 | .DAT | 
MONSB147 | .DAT | 
MONSB148 | .DAT | 
MONSB149 | .DAT | 
MONSB150 | .DAT | 
MONSB151 | .DAT | 
MONSB152 | .DAT | 
MONSB153 | .DAT | 
MONSB154 | .DAT | 
MONSB155 | .DAT | 
MONSB156 | .DAT | 
MONSB157 | .DAT | 
MONSB158 | .DAT | 
MONSB159 | .DAT | 
MONSB160 | .DAT | 
MONSB161 | .DAT | 
MONSB162 | .DAT | 
MONSB163 | .DAT | 
MONSB164 | .DAT | 
MONSB165 | .DAT | 
MONSB166 | .DAT | 
MONSB167 | .DAT | 
MONSB168 | .DAT | 
MONSB169 | .DAT | 
MONSB170 | .DAT | 
MONSB171 | .DAT | 
MONSB172 | .DAT | 
MONSB173 | .DAT | 
MONSB174 | .DAT | 
MONSB175 | .DAT | 
MONSB176 | .DAT | 
MONSB177 | .DAT | 
MONSB178 | .DAT | 
MONSB179 | .DAT | 
MONSB180 | .DAT | 
MONSB181 | .DAT | 
MONSB185 | .DAT | 
MONSB186 | .DAT | 
MONSB187 | .DAT | 
MONSB188 | .DAT | 
MONSB189 | .DAT | 
MONSB190 | .DAT | 
MONSBK01 | .DAT | 
MONSBK02 | .DAT | 
MONSBK03 | .DAT | 
MONSBK04 | .DAT | 
MONSBK05 | .DAT | 
MONSBK06 | .DAT | 
MONSBK07 | .DAT | 
MONSBK08 | .DAT | 
MONSBK09 | .DAT | 
MONSBK10 | .DAT | 
MONSBK11 | .DAT | 
MONSBK12 | .DAT | 
MONSBK13 | .DAT | 
MONSBK14 | .DAT | 
MONSBK15 | .DAT | 
MONSBK16 | .DAT | 
MONSBK17 | .DAT | 
MONSBK18 | .DAT | 
MONSBK19 | .DAT | 
MONSBK20 | .DAT | 
MONSBK21 | .DAT | 
MONSBK22 | .DAT | 
MONSBK23 | .DAT | 
MONSBK24 | .DAT | 
MONSBK25 | .DAT | 
MONSBK26 | .DAT | 
MONSBK27 | .DAT | 
MONSBK28 | .DAT | 
MONSBK29 | .DAT | 
MONSBK30 | .DAT | 
MONSBK31 | .DAT | 
MONSBK32 | .DAT | 
MONSBK33 | .DAT | 
MONSBK34 | .DAT | 
MONSBK35 | .DAT | 
MONSBK36 | .DAT | 
MONSBK37 | .DAT | 
MONSBK38 | .DAT | 
MONSBK39 | .DAT | 
MONSBK40 | .DAT | 
MONSBK41 | .DAT | 
MONSBK42 | .DAT | 
MONSBK43 | .DAT | 
MONSBK44 | .DAT | 
MONSBK45 | .DAT | 
MONSBK46 | .DAT | 
MONSBK47 | .DAT | 
MONSBK48 | .DAT | 
MONSBK49 | .DAT | 
MONSBK50 | .DAT | 
MONSBK51 | .DAT | 
MONSBK52 | .DAT | 
MONSBK53 | .DAT | 
MONSBK54 | .DAT | 
MONSBK55 | .DAT | 
MONSBK56 | .DAT | 
MONSBK57 | .DAT | 
MONSBK58 | .DAT | 
MONSBK59 | .DAT | 
MONSBK60 | .DAT | 
MONSBK61 | .DAT | 
MONSBK62 | .DAT | 
MONSBK63 | .DAT | 
MONSBK64 | .DAT | 
MONSBK65 | .DAT | 
MONSBK66 | .DAT | 
MONSBK67 | .DAT | 
MONSBK68 | .DAT | 
MONSBK69 | .DAT | 
MONSBK70 | .DAT | 
MONSBK71 | .DAT | 
MONSBK72 | .DAT | 
MONSBK73 | .DAT | 
MONSBK74 | .DAT | 
MONSBK75 | .DAT | 
MONSBK76 | .DAT | 
MONSBK77 | .DAT | 
MONSBK78 | .DAT | 
MONSBK79 | .DAT | 
MONSBK80 | .DAT | 
MONSBK81 | .DAT | 
MONSBK82 | .DAT | 
MONSBK83 | .DAT | 
MONSBK84 | .DAT | 
MONSBK85 | .DAT | 
MONSBK86 | .DAT | 
MONSBK87 | .DAT | 
MONSBK88 | .DAT | 
MONSBK89 | .DAT | 
MONSBK90 | .DAT | 
MONSBK91 | .DAT | 
MONSBK92 | .DAT | 
MONSBK93 | .DAT | 
MONSBK94 | .DAT | 
MONSBK95 | .DAT | 
MONSBK96 | .DAT | 
MONSBK97 | .DAT | 
MONSBK98 | .DAT | 
MONSBK99 | .DAT | 
MONSC182 | .DAT | 
MONSC183 | .DAT | 
MONSC184 | .DAT | 
MONSDATA | .DAT, .OV, .OVB | 
MONSNAM2 | .DAT | 
MONSNAME | .DAT | 
MONSTBL | .DAT | 
ORDER | .DAT | 
PM2F_001 | .DAT | 
PM2F_002 | .DAT | 
PM2F_003 | .DAT | 
PM2F_004 | .DAT | 
PM2F_005 | .DAT | 
PM2F_006 | .DAT | 
PM2F_007 | .DAT | 
PM2F_008 | .DAT | 
PM2F_009 | .DAT | 
PM2F_010 | .DAT | 
PM2F_011 | .DAT | 
PM2F_012 | .DAT | 
PM2F_013 | .DAT | 
PM2F_014 | .DAT | 
PM2F_015 | .DAT | 
PM2F_016 | .DAT | 
PM2F_017 | .DAT | 
PM2F_018 | .DAT | 
PM2F_019 | .DAT | 
PM2F_020 | .DAT | 
PM2F_021 | .DAT | 
PM2F_022 | .DAT | 
PM2F_023 | .DAT | 
PM2F_024 | .DAT | 
PM2F_025 | .DAT | 
PM2F_026 | .DAT | 
PM2F_027 | .DAT | 
PM2F_028 | .DAT | 
PM2F_029 | .DAT | 
PM2F_030 | .DAT | 
PM2F_031 | .DAT | 
PM2F_032 | .DAT | 
PM2F_033 | .DAT | 
PM2F_034 | .DAT | 
PM2F_035 | .DAT | 
PM2F_036 | .DAT | 
PM2F_037 | .DAT | 
PM2F_038 | .DAT | 
PM2F_039 | .DAT | 
PM2F_040 | .DAT | 
PM2F_041 | .DAT | 
PM2F_042 | .DAT | 
PM2F_043 | .DAT | 
PM2F_044 | .DAT | 
PM2F_045 | .DAT | 
PM2F_046 | .DAT | 
PM2F_047 | .DAT | 
PM2F_048 | .DAT | 
PM2F_049 | .DAT | 
PM2F_050 | .DAT | 
PM2F_051 | .DAT | 
PM2F_052 | .DAT | 
PM2F_053 | .DAT | 
PM2F_054 | .DAT | 
PM2F_055 | .DAT | 
PM2F_056 | .DAT | 
PM2F_057 | .DAT | 
PM2F_058 | .DAT | 
PM2F_059 | .DAT | 
PM2F_060 | .DAT | 
PM2F_061 | .DAT | 
PM2F_062 | .DAT | 
PM2F_063 | .DAT | 
PM2F_064 | .DAT | 
PM2F_065 | .DAT | 
PM2F_066 | .DAT | 
PM2F_067 | .DAT | 
PM2F_068 | .DAT | 
PM2F_069 | .DAT | 
PM2F_070 | .DAT | 
PM2F_071 | .DAT | 
PM2F_072 | .DAT | 
PM2F_073 | .DAT | 
PM2F_074 | .DAT | 
PM2F_075 | .DAT | 
PM2F_076 | .DAT | 
PM2F_077 | .DAT | 
PM2F_078 | .DAT | 
PM2F_079 | .DAT | 
PM2F_080 | .DAT | 
PM2F_081 | .DAT | 
PM2F_082 | .DAT | 
PM2F_083 | .DAT | 
PM2F_084 | .DAT | 
PM2F_085 | .DAT | 
PM2F_086 | .DAT | 
PM2F_087 | .DAT | 
PM2F_088 | .DAT | 
PM2F_089 | .DAT | 
PM2F_090 | .DAT | 
PM2F_091 | .DAT | 
PM2F_092 | .DAT | 
PM2F_093 | .DAT | 
PM2F_094 | .DAT | 
PM2F_095 | .DAT | 
PM2F_096 | .DAT | 
PM2F_097 | .DAT | 
PM2F_098 | .DAT | 
PM2F_099 | .DAT | 
PM2F_100 | .DAT | 
PM2F_101 | .DAT | 
PM2F_102 | .DAT | 
PM2F_103 | .DAT | 
PM2F_104 | .DAT | 
PM2F_105 | .DAT | 
PM2F_106 | .DAT | 
PM2F_107 | .DAT | 
PM2F_108 | .DAT | 
PM2F_109 | .DAT | 
PM2F_110 | .DAT | 
PM2F_111 | .DAT | 
PM2F_112 | .DAT | 
PM2F_113 | .DAT | 
PM2F_114 | .DAT | 
PM2F_115 | .DAT | 
PM2F_116 | .DAT | 
PM2F_117 | .DAT | 
PM2F_118 | .DAT | 
PM2F_119 | .DAT | 
PM2F_120 | .DAT | 
PM2F_121 | .DAT | 
PM2F_122 | .DAT | 
PM2F_123 | .DAT | 
PM2F_124 | .DAT | 
PM2F_125 | .DAT | 
PM2F_126 | .DAT | 
PM2F_127 | .DAT | 
PM2F_128 | .DAT | 
PM2F_129 | .DAT | 
PM2F_130 | .DAT | 
PM2F_131 | .DAT | 
PM2F_132 | .DAT | 
PM2F_133 | .DAT | 
PM2F_134 | .DAT | 
PM2F_135 | .DAT | 
PM2F_136 | .DAT | 
PM2F_137 | .DAT | 
PM2F_138 | .DAT | 
PM2F_139 | .DAT | 
PM2F_140 | .DAT | 
PM2F_141 | .DAT | 
PM2F_142 | .DAT | 
PM2F_143 | .DAT | 
PM2F_144 | .DAT | 
PM2F_145 | .DAT | 
PM2F_146 | .DAT | 
PM2F_147 | .DAT | 
PM2F_148 | .DAT | 
PM2F_149 | .DAT | 
PM2F_150 | .DAT | 
PM2F_151 | .DAT | 
PM2F_MYU | .DAT | 
PM2F_TES | .DAT | 
PMDUMMY | .DAT | 
PMFILE | .DAT, .OV, .OVB | 
PUTEBONE | .DAT | 


---
## Map Structure (/blue8M/SXY)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SXY</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the map stucture data such as the locations of NPCs and signs.
    
The files are named in a specic way:
* First character is the type
  - T for Town
  - D for Dungeon
  - R for Route?
* Second and third characters are the number of that specifc type
    - T01 is Pallet Town
    - T02 is Viridian City
    - T03 is Pewter City
    - T04 is Cerulean City
    - T05 is Lavender Town
    - T06 is Vermillion City
    - T07 is Celadon City
    - T08 is Fuchsia City
    - T09 is Cinnabar Island
    - T10 is Indigo Plateau
    - T11 is Saffron City
* Fourth character is R presumable standing for Room
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
D01R0101 | .SXY | 
D02R0101 | .SXY | 
D02R0102 | .SXY | 
D02R0103 | .SXY | 
D03R0101 | .SXY | S.S. Anne
D03R0102 | .SXY | 
D03R0103 | .SXY | 
D03R0104 | .SXY | 
D03R0105 | .SXY | 
D03R0106 | .SXY | 
D03R0107 | .SXY | 
D03R0108 | .SXY | 
D03R0109 | .SXY | 
D03R0110 | .SXY | 
D03R0111 | .SXY | S.S. Anne Cabins
D03R0112 | .SXY | 
D03R0113 | .SXY | 
D03R0114 | .SXY | 
D03R0115 | .SXY | 
D03R0116 | .SXY | 
D03R0117 | .SXY | 
D03R0118 | .SXY | 
D03R0119 | .SXY | 
D03R0120 | .SXY | 
D03R0121 | .SXY | 
D03R0122 | .SXY | 
D03R0123 | .SXY | 
D03R0124 | .SXY | S.S. Anne Cabins
D04R0101 | .SXY | 
D05R0101 | .SXY | 
D06R0101 | .SXY | 
D07R0101 | .SXY | 
D08R0101 | .SXY | 
D08R0102 | .SXY | 
D09R0101 | .SXY | 
D09R0102 | .SXY | 
D09R0103 | .SXY | 
D09R0104 | .SXY | 
D09R0105 | .SXY | 
D10R0101 | .SXY | 
D10R0102 | .SXY | 
D10R0103 | .SXY | 
D10R0104 | .SXY | 
D10R0105 | .SXY | 
D10R0106 | .SXY | 
D10R0107 | .SXY | 
D10R0108 | .SXY | 
D10R0109 | .SXY | 
D10R0110 | .SXY | 
D10R0111 | .SXY | 
D10R0112 | .SXY | 
D10R0201 | .SXY | 
D10R0202 | .SXY | 
D10R0203 | .SXY | 
D10R0204 | .SXY | 
D11R0101 | .SXY | 
D11R0102 | .SXY | 
D11R0103 | .SXY | 
D12R0101 | .SXY | 
D12R0102 | .SXY | 
D12R0103 | .SXY | 
D12R0104 | .SXY | 
D12R0105 | .SXY | 
D12R0106 | .SXY | 
D12R0107 | .SXY | 
D12R0108 | .SXY | 
D12R0109 | .SXY | 
D13R0101 | .SXY | 
D13R0102 | .SXY | 
D14R0101 | .SXY | 
D14R0102 | .SXY | 
D14R0103 | .SXY | 
D14R0104 | .SXY | 
D14R0105 | .SXY | 
D14R0106 | .SXY | 
D14R0107 | .SXY | 
D14R0108 | .SXY | 
D14R0109 | .SXY | 
D14R0110 | .SXY | 
D14R0111 | .SXY | 
D14R0112 | .SXY | 
D14R0113 | .SXY | 
D14R0114 | .SXY | 
D14R0115 | .SXY | 
D14R0116 | .SXY | 
D14R0117 | .SXY | 
D14R0118 | .SXY | 
D14R1414 | .SXY | 
D15R0101 | .SXY | 
D16R0101 | .SXY | 
D16R0102 | .SXY | 
D16R0103 | .SXY | 
D16R0104 | .SXY | 
D23R0101 | .SXY | 
R02R0101 | .SXY | 
R02R0201 | .SXY | 
R02R0301 | .SXY | 
R02R0401 | .SXY | 
R02R0501 | .SXY | 
R04R0101 | .SXY | 
R05R0101 | .SXY | 
R05R0201 | .SXY | 
R05R0301 | .SXY | 
R06R0101 | .SXY | 
R06R0201 | .SXY | 
R07R0101 | .SXY | 
R07R0201 | .SXY | 
R07R0301 | .SXY | 
R08R0101 | .SXY | 
R08R0201 | .SXY | 
R10R0101 | .SXY | 
R10R0201 | .SXY | 
R10R0301 | .SXY | 
R11R0101 | .SXY | 
R11R0102 | .SXY | 
R11R0201 | .SXY | 
R12R0101 | .SXY | 
R12R0102 | .SXY | 
R12R0201 | .SXY | 
R15R0101 | .SXY | 
R15R0102 | .SXY | 
R16R0101 | .SXY | 
R16R0102 | .SXY | 
R16R0201 | .SXY | 
R18R0101 | .SXY | 
R18R0102 | .SXY | 
R20R0101 | .SXY | 
R22R0101 | .SXY | 
R23R0101 | .SXY | 
R23R0201 | .SXY | 
R25R0101 | .SXY | 
ROAD01 | .SXY | Route 1 (Pallet to Viridian)
ROAD02 | .SXY | Route 2
ROAD03 | .SXY | Route 3
ROAD04 | .SXY | Route 4
ROAD05 | .SXY | Route 5
ROAD06 | .SXY | Route 6
ROAD07 | .SXY | Route 7
ROAD08 | .SXY | Route 8
ROAD09 | .SXY | Route 9
ROAD10 | .SXY | Route 10
ROAD11 | .SXY | Route 11
ROAD12 | .SXY | Route 12
ROAD13 | .SXY | Route 13
ROAD14 | .SXY | Route 14
ROAD15 | .SXY | Route 15
ROAD16 | .SXY | Route 16
ROAD17 | .SXY | Route 17
ROAD18 | .SXY | Route 18
ROAD19 | .SXY | Route 19
ROAD20 | .SXY | Route 20
ROAD21 | .SXY | Route 21
ROAD22 | .SXY | Route 22
ROAD23 | .SXY | Route 23
ROAD24 | .SXY | Route 24
ROAD25 | .SXY | Route 25
T00R0101 | .SXY | 
T00R0102 | .SXY | 
T01R0101 | .SXY | Player's house F01
T01R0102 | .SXY | Player's house F02
T01R0201 | .SXY | Rival's house
T01R0301 | .SXY | Professor Oak's Lab
T02R0101 | .SXY | Viridian City Pokemon Center
T02R0201 | .SXY | 
T02R0301 | .SXY | 
T02R0401 | .SXY | 
T02R0501 | .SXY | 
T03R0101 | .SXY | 
T03R0102 | .SXY | 
T03R0201 | .SXY | 
T03R0301 | .SXY | 
T03R0401 | .SXY | 
T03R0501 | .SXY | 
T03R0601 | .SXY | 
T04R0101 | .SXY | 
T04R0102 | .SXY | 
T04R0201 | .SXY | 
T04R0301 | .SXY | 
T04R0401 | .SXY | 
T04R0501 | .SXY | 
T04R0601 | .SXY | 
T04R0701 | .SXY | Cerulean Cave 1F
T04R0801 | .SXY | 
T05R0101 | .SXY | 
T05R0201 | .SXY | 
T05R0202 | .SXY | 
T05R0203 | .SXY | 
T05R0204 | .SXY | 
T05R0205 | .SXY | 
T05R0206 | .SXY | 
T05R0207 | .SXY | 
T05R0208 | .SXY | Pokemon Tower Elevator (unused)
T05R0301 | .SXY | 
T05R0401 | .SXY | 
T05R0501 | .SXY | 
T05R0601 | .SXY | 
T06R0101 | .SXY | 
T06R0201 | .SXY | 
T06R0301 | .SXY | 
T06R0401 | .SXY | 
T06R0501 | .SXY | 
T06R0601 | .SXY | 
T06R0701 | .SXY | 
T06R0801 | .SXY | 
T07R0101 | .SXY | 
T07R0102 | .SXY | 
T07R0103 | .SXY | 
T07R0104 | .SXY | 
T07R0105 | .SXY | 
T07R0106 | .SXY | 
T07R0201 | .SXY | 
T07R0202 | .SXY | 
T07R0203 | .SXY | 
T07R0204 | .SXY | 
T07R0205 | .SXY | 
T07R0301 | .SXY | 
T07R0401 | .SXY | 
T07R0501 | .SXY | 
T07R0601 | .SXY | 
T07R0701 | .SXY | 
T07R0801 | .SXY | 
T07R0901 | .SXY | 
T07R1001 | .SXY | 
T08R0101 | .SXY | 
T08R0201 | .SXY | 
T08R0301 | .SXY | 
T08R0401 | .SXY | 
T08R0501 | .SXY | 
T08R0601 | .SXY | 
T08R0701 | .SXY | 
T08R0801 | .SXY | 
T08R0901 | .SXY | 
T08R1001 | .SXY | 
T08R1101 | .SXY | 
T08R1201 | .SXY | Unused Cage map
T08R1301 | .SXY | 
T09R0101 | .SXY | 
T09R0201 | .SXY | 
T09R0301 | .SXY | 
T09R0302 | .SXY | 
T09R0303 | .SXY | 
T09R0304 | .SXY | 
T09R0401 | .SXY | 
T09R0501 | .SXY | 
T09R0601 | .SXY | 
T0TR0101 | .SXY | 
T0TR0201 | .SXY | Fighting Dojo
T0TR0301 | .SXY | 
T0TR0501 | .SXY | 
T0TR0601 | .SXY | 
T0TR0701 | .SXY | 
T0TR0801 | .SXY | 
T10R0101 | .SXY | 
T11R0101 | .SXY | 
T11R0102 | .SXY | 
T11R0201 | .SXY | Fighting Dojo
T11R0301 | .SXY | 
T11R0401 | .SXY | 
T11R0501 | .SXY | 
T11R0601 | .SXY | 
T11R0701 | .SXY | 
T11R0801 | .SXY | 
TOWN01 | .SXY | Pallet Town
TOWN02 | .SXY | Viridian City
TOWN03 | .SXY | Pewter City
TOWN04 | .SXY | Cerulean City
TOWN05 | .SXY | Lavender Town
TOWN06 | .SXY | Vermillion City
TOWN07 | .SXY | Celadon City
TOWN08 | .SXY | Fuchsia City
TOWN09 | .SXY | Cinnabar Island
TOWN0T | .SXY | 
TOWN10 | .SXY | Indigo Plateau
TOWN11 | .SXY | Saffron City
TOWN11NO | .SXY | 


---
## Source (/blue8M/source)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/source</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the z80 assembly code for the game in .DMG files (DMG is the shorthand for Dot Matrix Game, the original name for the GameBoy).

This folder also contains the following sub-directories:
* **Temp** - 
* **Debug** - Cotnains the compiled object files for each of the .DMG files
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ACTOR | .DMG | 
ACTPUT | .DMG | 
ACTSUB | .DMG | 
ANIME | .DEF | 
A_DEMO | .DMG | 
A_MOVE | .DMG | 
BADGE | .DMG | 
BANK | .DMG | 
BANKTOOL | .DEF, .DMG | 
BATTLE | .DMG | 
BMUSIC | .DMG | 
BMUSIC2 | .DMG | 
BMUSIC3 | .DMG | 
CHRSET | .DMG | 
COMMSG | .DMG | 
CONT | .DMG | 
C_EFFECT | .DMG | 
Common | .def | 
D01R0101 | .DMG | 
D02R0101 | .DMG | 
D02R0102 | .DMG | 
D02R0103 | .DMG | 
D03R0101 | .DMG | 
D03R0102 | .DMG | 
D03R0103 | .DMG | 
D03R0104 | .DMG | 
D03R0105 | .DMG | 
D03R0106 | .DMG | 
D03R0107 | .DMG | 
D03R0108 | .DMG | 
D03R0109 | .DMG | 
D03R0110 | .DMG | 
D04R0101 | .DMG | 
D06R0101 | .DMG | 
D07R0101 | .DMG | 
D08R0101 | .DMG | 
D09R0101 | .DMG | 
D09R0102 | .DMG | 
D09R0103 | .DMG | 
D09R0104 | .DMG | 
D09R0105 | .DMG | 
D10R0101 | .DMG | 
D10R0102 | .DMG | 
D10R0103 | .DMG | 
D10R0104 | .DMG | 
D10R0105 | .DMG | 
D10R0106 | .DMG | 
D10R0107 | .DMG | 
D10R0108 | .DMG | 
D10R0109 | .DMG | 
D10R0110 | .DMG | 
D10R0111 | .DMG | 
D11R0101 | .DMG | 
D11R0102 | .DMG | 
D11R0103 | .DMG | 
D12R0101 | .DMG | 
D12R0102 | .DMG | 
D12R0103 | .DMG | 
D12R0104 | .DMG | 
D12R0105 | .DMG | 
D12R0106 | .DMG | 
D12R0107 | .DMG | 
D12R0108 | .DMG | 
D12R0109 | .DMG | 
D13R0101 | .DMG | 
D13R0102 | .DMG | 
D14R0104 | .DMG | 
D14R0109 | .DMG | 
D14R0114 | .DMG | 
D14R0115 | .DMG | 
D14R0116 | .DMG | 
D14R0117 | .DMG | 
D14R0118 | .DMG | 
D15R0101 | .DMG | 
D16R0101 | .DMG | 
D16R0102 | .DMG | 
D16R0103 | .DMG | 
D16R0104 | .DMG | 
DATA_BOX | .DMG | 
DEALER | .DEF, .DMG | 
DEBUG | .DMG | 
DEMO | .DMG | 
DMA | .DMG | 
D_ACTION | .DMG | 
EFFECT | .DEF, .DMG | 
EFFECTER | .DAT, .DMG, .H | 
EFF_TBL | .DMG | 
ENCOUNT | .DMG | 
EV_TOOL | .DMG | 
FADEPLAY | .DMG | 
FEW_MAC | .H | Include file for declaring 
FIGHT | .DEF, .DMG | 
FIGHTER | .DEF, .DMG | 
FNTEQU | .DEF | 
GROUP | .DEF | 
HANA | .DAT | 
HANA2 | .DAT | 
HANA3 | .DAT | 
HEADER | .DMG | 
HITCHECK | .DMG | 
ISASM | .TAG | 
ITEM | .DMG | 
ITEMMENU | .DMG | 
LABOBANK | .MAP | 
LCDC | .DMG | 
MACRO | .H | Include file for declaring 
MAIN | .DMG | 
MAP | .DEF | 
MAPBANK | .DAT | 
MAPHEAD | .DEF | 
MAPORG | .DMG | 
MAPPER | .DMG | 
MAPSUB | .DMG | 
MAPTYPE | .DEF | 
MONSLIST | .DMG | 
MONSTER | .DMG | 
MUSHEAD | .DMG | 
MUSHEAD2 | .DMG | 
MUSHEAD3 | .DMG | 
MUSIC | .TBL | 
MVOICE | .DAT, .H | 
MYUFILE | .DAT | 
M_ASA | .DMG | 
M_AWALK | .DMG | 
M_CASINO | .DMG | 
M_CHARI | .DMG | 
M_DEAL1 | .DMG | 
M_DEAL2 | .DMG | 
M_DEAL3 | .DMG | 
M_DENDOU | .DMG | 
M_DUNG | .DMG | 
M_DUNG2 | .DMG | 
M_DUNG3 | .DMG | 
M_DUNG4 | .DMG | 
M_ENDING | .DMG | 
M_FAN1 | .DMG | 
M_FAN2 | .DMG | 
M_FAN3 | .DMG | 
M_FAN4 | .DMG | 
M_FAN5 | .DMG | 
M_FAN6 | .DMG | 
M_FAN8 | .DMG | 
M_FIELD1 | .DMG | 
M_FIELD2 | .DMG | 
M_FIELD3 | .DMG | 
M_FIELD4 | .DMG | 
M_FIELD5 | .DMG | 
M_FIGHT1 | .DMG | 
M_FIGHT3 | .DMG | 
M_FIGHT4 | .DMG | 
M_FIGHT5 | .DMG | 
M_GYM | .DMG | 
M_HTOWN | .DMG | 
M_KOKAN1 | .DMG | 
M_KOKAN2 | .DMG | 
M_LABO | .DMG | 
M_OHKIDO | .DMG | 
M_PMC | .DMG | 
M_PURIN | .DMG | 
M_RIVAL | .DMG | 
M_SANTO | .DMG | 
M_SEA | .DMG | 
M_SHINKA | .DMG | 
M_START | .DMG | 
M_TITLE | .DMG | 
M_TOU1 | .DMG | 
M_TOU2 | .DMG | 
M_TOWN1 | .DMG | 
M_TOWN2 | .DMG | 
M_TOWN3 | .DMG | 
M_TOWN4 | .DMG | 
M_TOWN5 | .DMG | 
M_TOWN6 | .DMG | 
M_VIC1 | .DMG | 
M_VIC2 | .DMG | 
M_VIC3 | .DMG | 
OBJSET | .DMG | 
OBSERVE | .DMG | 
PATTERN | .DMG | 
PLAY | .DMG | 
PLAY1 | .DMG | 
PLAY2 | .DMG | 
PM_DEBUG | .DEF | 
PRINT | .DMG | 
PRT | .DMG | 
R02R0101 | .DMG | 
R02R0201 | .DMG | 
R02R0301 | .DMG | 
R02R0401 | .DMG | 
R02R0501 | .DMG | 
R04R0101 | .DMG | 
R05R0101 | .DMG | 
R05R0201 | .DMG | 
R05R0301 | .DMG | 
R06R0101 | .DMG | 
R06R0201 | .DMG | 
R07R0101 | .DMG | 
R07R0201 | .DMG | 
R07R0301 | .DMG | 
R08R0101 | .DMG | 
R08R0201 | .DMG | 
R10R0101 | .DMG | 
R10R0201 | .DMG | 
R10R0301 | .DMG | 
R11R0101 | .DMG | 
R11R0102 | .DMG | 
R11R0201 | .DMG | 
R12R0101 | .DMG | 
R12R0102 | .DMG | 
R12R0201 | .DMG | 
R15R0101 | .DMG | 
R15R0102 | .DMG | 
R16R0101 | .DMG | 
R16R0102 | .DMG | 
R16R0201 | .DMG | 
R18R0101 | .DMG | 
R18R0102 | .DMG | 
R20R0101 | .DMG | 
R22R0101 | .DMG | 
R23R0101 | .DMG | 
R25R0101 | .DMG | 
RESET | .DMG | 
ROAD01 | .DMG | 
ROAD02 | .DMG | 
ROAD03 | .DMG | 
ROAD04 | .DMG | 
ROAD05 | .DMG | 
ROAD06 | .DMG | 
ROAD07 | .DMG | 
ROAD08 | .DMG | 
ROAD09 | .DMG | 
ROAD10 | .DMG | 
ROAD11 | .DMG | 
ROAD12 | .DMG | 
ROAD13 | .DMG | 
ROAD14 | .DMG | 
ROAD15 | .DMG | 
ROAD16 | .DMG | 
ROAD17 | .DMG | 
ROAD18 | .DMG | 
ROAD19 | .DMG | 
ROAD20 | .DMG | 
ROAD21 | .DMG | 
ROAD22 | .DMG | 
ROAD23 | .DMG | 
ROAD24 | .DMG | 
ROAD25 | .DMG | 
SAVELOAD | .DMG | 
SE | .DEF | 
SETDMONS | .DMG | 
SFX | .DMG | 
SGB_COL | .DEF, .DMG | 
SHINKA | .DMG | 
SIO | .DMG | 
SOUND | .H | Include file for declaring 
SPATTACK | .DMG | 
T00R0101 | .DMG | 
T00R0102 | .DMG | 
T01R0101 | .DMG | 
T01R0102 | .DMG | 
T01R0201 | .DMG | 
T01R0301 | .DMG | 
T02R0101 | .DMG | 
T02R0201 | .DMG | 
T02R0301 | .DMG | 
T02R0401 | .DMG | 
T02R0501 | .DMG | 
T03R0101 | .DMG | 
T03R0102 | .DMG | 
T03R0201 | .DMG | 
T03R0301 | .DMG | 
T03R0401 | .DMG | 
T03R0501 | .DMG | 
T03R0601 | .DMG | 
T04R0101 | .DMG | 
T04R0201 | .DMG | 
T04R0301 | .DMG | 
T04R0401 | .DMG | 
T04R0501 | .DMG | 
T04R0601 | .DMG | 
T04R0701 | .DMG | 
T04R0801 | .DMG | 
T05R0101 | .DMG | 
T05R0201 | .DMG | 
T05R0202 | .DMG | 
T05R0203 | .DMG | 
T05R0204 | .DMG | 
T05R0205 | .DMG | 
T05R0206 | .DMG | 
T05R0207 | .DMG | 
T05R0301 | .DMG | 
T05R0401 | .DMG | 
T05R0501 | .DMG | 
T05R0601 | .DMG | 
T06R0101 | .DMG | 
T06R0201 | .DMG | 
T06R0301 | .DMG | 
T06R0401 | .DMG | 
T06R0501 | .DMG | 
T06R0601 | .DMG | 
T06R0701 | .DMG | 
T06R0801 | .DMG | 
T07R0101 | .DMG | 
T07R0102 | .DMG | 
T07R0103 | .DMG | 
T07R0104 | .DMG | 
T07R0105 | .DMG | 
T07R0106 | .DMG | 
T07R0201 | .DMG | 
T07R0202 | .DMG | 
T07R0203 | .DMG | 
T07R0204 | .DMG | 
T07R0205 | .DMG | 
T07R0301 | .DMG | 
T07R0401 | .DMG | 
T07R0501 | .DMG | 
T07R0601 | .DMG | 
T07R0701 | .DMG | 
T07R0801 | .DMG | 
T07R0901 | .DMG | 
T07R1001 | .DMG | 
T08R0101 | .DMG | 
T08R0201 | .DMG | 
T08R0301 | .DMG | 
T08R0401 | .DMG | 
T08R0501 | .DMG | 
T08R0601 | .DMG | 
T08R0701 | .DMG | 
T08R0801 | .DMG | 
T09R0101 | .DMG | 
T09R0201 | .DMG | 
T09R0301 | .DMG | 
T09R0302 | .DMG | 
T09R0303 | .DMG | 
T09R0304 | .DMG | 
T09R0401 | .DMG | 
T09R0501 | .DMG | 
T10R0101 | .DMG | 
T11R0101 | .DMG | 
T11R0102 | .DMG | 
T11R0201 | .DMG | 
T11R0301 | .DMG | 
T11R0401 | .DMG | 
T11R0501 | .DMG | 
T11R0601 | .DMG | 
T11R0701 | .DMG | 
T11R0801 | .DMG | 
TABLE | .MAC | 
TALKMAP | .DMG | 
TIMER | .DMG | 
TOWN01 | .DMG | 
TOWN02 | .DMG | 
TOWN03 | .DMG | 
TOWN04 | .DMG | 
TOWN05 | .DMG | 
TOWN06 | .DMG | 
TOWN07 | .DMG | 
TOWN08 | .DMG | 
TOWN09 | .DMG | 
TOWN11 | .DMG | 
TYPE | .DEF | 
Tools | .dmg | 
UNCOMP | .DMG | 
USEITEM | .DMG | 
USEITEM2 | .DMG | 
VANISH | .DEF, .DMG | 
VBLANK | .DMG | 
VOICE | .DAT, .H | 
WATASHI | .DMG | 
WAZA | .DMG | 
WINDOW | .DMG | 
WORLDMAP | .DMG | 
YUKA | .DAT | 
ZUKAN | .DMG | 
i_msg2_0 | .dmg | 
i_msg2_1 | .dmg | 
i_msg2_2 | .dmg | 
i_msg2_3 | .dmg | 
i_msg2_4 | .dmg | 
i_msg2_5 | .dmg | 
i_msg2_6 | .dmg | 
i_msg2_7 | .dmg | 
i_msg2_8 | .dmg | 
i_msg2_9 | .dmg | 
i_msg2_a | .dmg | 
pmcom | .dmg | 


---
### Debug (/blue8M/source/Debug)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Debug</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains compiled object code files for each of the .DMG source code files in the parent folder.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ACTOR | .ISO | 
ACTPUT | .ISO | 
ACTSUB | .ISO | 
A_DEMO | .ISO | 
A_MOVE | .ISO | 
BADGE | .ISO | 
BANK | .ISO | 
BANKTOOL | .ISO | 
BATTLE | .ISO | 
BLUEMONS | .ISX | 
BMUSIC | .ISO | 
BMUSIC2 | .ISO | 
BMUSIC3 | .ISO | 
CHRSET | .ISO | 
COMMON | .ISO | 
COMMSG | .ISO | 
CONT | .ISO | 
C_EFFECT | .ISO | 
D01R0101 | .ISO | 
D02R0101 | .ISO | 
D02R0102 | .ISO | 
D02R0103 | .ISO | 
D03R0101 | .ISO | 
D03R0102 | .ISO | 
D03R0103 | .ISO | 
D03R0104 | .ISO | 
D03R0105 | .ISO | 
D03R0106 | .ISO | 
D03R0107 | .ISO | 
D03R0108 | .ISO | 
D03R0109 | .ISO | 
D03R0110 | .ISO | 
D04R0101 | .ISO | 
D06R0101 | .ISO | 
D07R0101 | .ISO | 
D08R0101 | .ISO | 
D09R0101 | .ISO | 
D09R0102 | .ISO | 
D09R0103 | .ISO | 
D09R0104 | .ISO | 
D09R0105 | .ISO | 
D10R0101 | .ISO | 
D10R0102 | .ISO | 
D10R0103 | .ISO | 
D10R0104 | .ISO | 
D10R0105 | .ISO | 
D10R0106 | .ISO | 
D10R0107 | .ISO | 
D10R0108 | .ISO | 
D10R0109 | .ISO | 
D10R0110 | .ISO | 
D10R0111 | .ISO | 
D11R0101 | .ISO | 
D11R0102 | .ISO | 
D11R0103 | .ISO | 
D12R0101 | .ISO | 
D12R0102 | .ISO | 
D12R0103 | .ISO | 
D12R0104 | .ISO | 
D12R0105 | .ISO | 
D12R0106 | .ISO | 
D12R0107 | .ISO | 
D12R0108 | .ISO | 
D12R0109 | .ISO | 
D13R0101 | .ISO | 
D13R0102 | .ISO | 
D14R0104 | .ISO | 
D14R0109 | .ISO | 
D14R0114 | .ISO | 
D14R0115 | .ISO | 
D14R0116 | .ISO | 
D14R0117 | .ISO | 
D14R0118 | .ISO | 
D15R0101 | .ISO | 
D16R0101 | .ISO | 
D16R0102 | .ISO | 
D16R0103 | .ISO | 
D16R0104 | .ISO | 
DATA_BOX | .ISO | 
DEALER | .ISO | 
DEBUG | .ISO | 
DEMO | .ISO | 
DMA | .ISO | 
D_ACTION | .ISO | 
EFFECT | .ISO | 
EFFECTER | .ISO | 
EFF_TBL | .ISO | 
ENCOUNT | .ISO | 
EV_TOOL | .ISO | 
FADEPLAY | .ISO | 
FIGHT | .ISO | 
FIGHTER | .ISO | 
HEADER | .ISO | 
HITCHECK | .ISO | 
ITEM | .ISO | 
ITEMMENU | .ISO | 
I_MSG2_0 | .ISO | 
I_MSG2_1 | .ISO | 
I_MSG2_2 | .ISO | 
I_MSG2_3 | .ISO | 
I_MSG2_4 | .ISO | 
I_MSG2_5 | .ISO | 
I_MSG2_6 | .ISO | 
I_MSG2_7 | .ISO | 
I_MSG2_8 | .ISO | 
I_MSG2_9 | .ISO | 
I_MSG2_A | .ISO | 
LCDC | .ISO | 
MAIN | .ISO | 
MAPORG | .ISO | 
MAPPER | .ISO | 
MAPSUB | .ISO | 
MONSLIST | .ISO | 
MONSTER | .ISO | 
MUSHEAD | .ISO | 
MUSHEAD2 | .ISO | 
MUSHEAD3 | .ISO | 
M_ASA | .ISO | 
M_AWALK | .ISO | 
M_CASINO | .ISO | 
M_CHARI | .ISO | 
M_DEAL1 | .ISO | 
M_DEAL2 | .ISO | 
M_DEAL3 | .ISO | 
M_DENDOU | .ISO | 
M_DUNG | .ISO | 
M_DUNG2 | .ISO | 
M_DUNG3 | .ISO | 
M_DUNG4 | .ISO | 
M_ENDING | .ISO | 
M_FAN1 | .ISO | 
M_FAN2 | .ISO | 
M_FAN3 | .ISO | 
M_FAN4 | .ISO | 
M_FAN5 | .ISO | 
M_FAN6 | .ISO | 
M_FAN8 | .ISO | 
M_FIELD1 | .ISO | 
M_FIELD2 | .ISO | 
M_FIELD3 | .ISO | 
M_FIELD4 | .ISO | 
M_FIELD5 | .ISO | 
M_FIGHT1 | .ISO | 
M_FIGHT3 | .ISO | 
M_FIGHT4 | .ISO | 
M_FIGHT5 | .ISO | 
M_GYM | .ISO | 
M_HTOWN | .ISO | 
M_KOKAN1 | .ISO | 
M_KOKAN2 | .ISO | 
M_LABO | .ISO | 
M_OHKIDO | .ISO | 
M_PMC | .ISO | 
M_PURIN | .ISO | 
M_RIVAL | .ISO | 
M_SANTO | .ISO | 
M_SEA | .ISO | 
M_SHINKA | .ISO | 
M_START | .ISO | 
M_TITLE | .ISO | 
M_TOU1 | .ISO | 
M_TOU2 | .ISO | 
M_TOWN1 | .ISO | 
M_TOWN2 | .ISO | 
M_TOWN3 | .ISO | 
M_TOWN4 | .ISO | 
M_TOWN5 | .ISO | 
M_TOWN6 | .ISO | 
M_VIC1 | .ISO | 
M_VIC2 | .ISO | 
M_VIC3 | .ISO | 
OBJSET | .ISO | 
OBSERVE | .ISO | 
PATTERN | .ISO | 
PLAY | .ISO | 
PLAY1 | .ISO | 
PLAY2 | .ISO | 
PMCOM | .ISO | 
PRINT | .ISO | 
PRT | .ISO | 
R02R0101 | .ISO | 
R02R0201 | .ISO | 
R02R0301 | .ISO | 
R02R0401 | .ISO | 
R02R0501 | .ISO | 
R04R0101 | .ISO | 
R05R0101 | .ISO | 
R05R0201 | .ISO | 
R05R0301 | .ISO | 
R06R0101 | .ISO | 
R06R0201 | .ISO | 
R07R0101 | .ISO | 
R07R0201 | .ISO | 
R07R0301 | .ISO | 
R08R0101 | .ISO | 
R08R0201 | .ISO | 
R10R0101 | .ISO | 
R10R0201 | .ISO | 
R10R0301 | .ISO | 
R11R0101 | .ISO | 
R11R0102 | .ISO | 
R11R0201 | .ISO | 
R12R0101 | .ISO | 
R12R0102 | .ISO | 
R12R0201 | .ISO | 
R15R0101 | .ISO | 
R15R0102 | .ISO | 
R16R0101 | .ISO | 
R16R0102 | .ISO | 
R16R0201 | .ISO | 
R18R0101 | .ISO | 
R18R0102 | .ISO | 
R20R0101 | .ISO | 
R22R0101 | .ISO | 
R23R0101 | .ISO | 
R25R0101 | .ISO | 
RESET | .ISO | 
ROAD01 | .ISO | 
ROAD02 | .ISO | 
ROAD03 | .ISO | 
ROAD04 | .ISO | 
ROAD05 | .ISO | 
ROAD06 | .ISO | 
ROAD07 | .ISO | 
ROAD08 | .ISO | 
ROAD09 | .ISO | 
ROAD10 | .ISO | 
ROAD11 | .ISO | 
ROAD12 | .ISO | 
ROAD13 | .ISO | 
ROAD14 | .ISO | 
ROAD15 | .ISO | 
ROAD16 | .ISO | 
ROAD17 | .ISO | 
ROAD18 | .ISO | 
ROAD19 | .ISO | 
ROAD20 | .ISO | 
ROAD21 | .ISO | 
ROAD22 | .ISO | 
ROAD23 | .ISO | 
ROAD24 | .ISO | 
ROAD25 | .ISO | 
SAVELOAD | .ISO | 
SETDMONS | .ISO | 
SFX | .ISO | 
SGB_COL | .ISO | 
SHINKA | .ISO | 
SIO | .ISO | 
SPATTACK | .ISO | 
T00R0101 | .ISO | 
T00R0102 | .ISO | 
T01R0101 | .ISO | 
T01R0102 | .ISO | 
T01R0201 | .ISO | 
T01R0301 | .ISO | 
T02R0101 | .ISO | 
T02R0201 | .ISO | 
T02R0301 | .ISO | 
T02R0401 | .ISO | 
T02R0501 | .ISO | 
T03R0101 | .ISO | 
T03R0102 | .ISO | 
T03R0201 | .ISO | 
T03R0301 | .ISO | 
T03R0401 | .ISO | 
T03R0501 | .ISO | 
T03R0601 | .ISO | 
T04R0101 | .ISO | 
T04R0201 | .ISO | 
T04R0301 | .ISO | 
T04R0401 | .ISO | 
T04R0501 | .ISO | 
T04R0601 | .ISO | 
T04R0701 | .ISO | 
T04R0801 | .ISO | 
T05R0101 | .ISO | 
T05R0201 | .ISO | 
T05R0202 | .ISO | 
T05R0203 | .ISO | 
T05R0204 | .ISO | 
T05R0205 | .ISO | 
T05R0206 | .ISO | 
T05R0207 | .ISO | 
T05R0301 | .ISO | 
T05R0401 | .ISO | 
T05R0501 | .ISO | 
T05R0601 | .ISO | 
T06R0101 | .ISO | 
T06R0201 | .ISO | 
T06R0301 | .ISO | 
T06R0401 | .ISO | 
T06R0501 | .ISO | 
T06R0601 | .ISO | 
T06R0701 | .ISO | 
T06R0801 | .ISO | 
T07R0101 | .ISO | 
T07R0102 | .ISO | 
T07R0103 | .ISO | 
T07R0104 | .ISO | 
T07R0105 | .ISO | 
T07R0106 | .ISO | 
T07R0201 | .ISO | 
T07R0202 | .ISO | 
T07R0203 | .ISO | 
T07R0204 | .ISO | 
T07R0205 | .ISO | 
T07R0301 | .ISO | 
T07R0401 | .ISO | 
T07R0501 | .ISO | 
T07R0601 | .ISO | 
T07R0701 | .ISO | 
T07R0801 | .ISO | 
T07R0901 | .ISO | 
T07R1001 | .ISO | 
T08R0101 | .ISO | 
T08R0201 | .ISO | 
T08R0301 | .ISO | 
T08R0401 | .ISO | 
T08R0501 | .ISO | 
T08R0601 | .ISO | 
T08R0701 | .ISO | 
T08R0801 | .ISO | 
T09R0101 | .ISO | 
T09R0201 | .ISO | 
T09R0301 | .ISO | 
T09R0302 | .ISO | 
T09R0303 | .ISO | 
T09R0304 | .ISO | 
T09R0401 | .ISO | 
T09R0501 | .ISO | 
T10R0101 | .ISO | 
T11R0101 | .ISO | 
T11R0102 | .ISO | 
T11R0201 | .ISO | 
T11R0301 | .ISO | 
T11R0401 | .ISO | 
T11R0501 | .ISO | 
T11R0601 | .ISO | 
T11R0701 | .ISO | 
T11R0801 | .ISO | 
TALKMAP | .ISO | 
TIMER | .ISO | 
TOOLS | .ISO | 
TOWN01 | .ISO | 
TOWN02 | .ISO | 
TOWN03 | .ISO | 
TOWN04 | .ISO | 
TOWN05 | .ISO | 
TOWN06 | .ISO | 
TOWN07 | .ISO | 
TOWN08 | .ISO | 
TOWN09 | .ISO | 
TOWN11 | .ISO | 
UNCOMP | .ISO | 
USEITEM | .ISO | 
USEITEM2 | .ISO | 
VANISH | .ISO | 
VBLANK | .ISO | 
WATASHI | .ISO | 
WAZA | .ISO | 
WINDOW | .ISO | 
WORLDMAP | .ISO | 
ZUKAN | .ISO | 


---
### Temp (/blue8M/source/Temp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Temp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
COMMON | .ISO, .PRN | 
common | .dmg | 


---
## 検索 (/blue8M/検索)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/検索</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains just a single file called **埋め込みメッセージ.txt** which seems to list each bank along with some define byte assembly instructions beside source file line numbers. It is unclear the purpose of this file.

  </div>
</section>  


---
# Yellow (/yellow)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/yellow</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code to Pokemon Yellow, in this seciton we will only cover the differences between Pokemon Yellow and Blue, so new files added or modified so as not to repeat the content from above.

This folder also contains the following sub-directories:
* **test** - 
* **Source** - 
* **EFFDATA** - 
* **Document** - 
* **final** - 
* **MAPDATA** - 
* **yellow** - 
* **DATA** - 
* **SOUND** - 
* **SXY** - 
* **MONSDATA** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Yellmons | .bin, .sdb | 
depends | .bat, .mak | 
err | .txt | 
link | .lnk | 
makefile | N/A | Used to build the source code in the folder (run make)
makerom | .bat | Windows Batch file for running 
mapinfo | .txt | 
mssccprj | .scc | 


---
## Data (/yellow/DATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALPHABET | .DAT | 
ANE | .CHR | 
BADGE | .DAT | 
BANKTOOL | .DAT | 
BASAN | .CHR | 
BDMONS | .DAT, .SYM | 
BOSS | .CHR | 
BOSS01 | .DAT | 
BOSS02 | .DAT | 
BOSS03 | .DAT | 
BOSS04 | .DAT | 
BOY | .CHR | 
B_GAUGE | .DAT | 
B_MARUC | .DAT | 
CAST_UP | .DAT | 
CHARA | .DAT | 
CHARI | .DAT | 
CHARIYA | .CHR | 
CHIKIN | .CHR | 
COINBIT | .DAT | 
COOK | .CHR | 
CYCLE | .CHR | 
DANIN | .CHR | 
DANPEI | .CHR, .DAT | 
DEALER00 | .DAT | 
DEALER01 | .DAT | 
DEALER02 | .DAT | 
DEALER03 | .DAT | 
DEALER04 | .DAT | 
DEALER05 | .DAT | 
DEALER06 | .DAT | 
DEALER07 | .DAT | 
DEALER08 | .DAT | 
DEALER09 | .DAT | 
DEALER10 | .DAT | 
DEALER11 | .DAT | 
DEALER12 | .DAT | 
DEALER13 | .DAT | 
DEALER14 | .DAT | 
DEALER15 | .DAT | 
DEALER16 | .DAT | 
DEALER17 | .DAT | 
DEALER18 | .DAT | 
DEALER19 | .DAT | 
DEALER20 | .DAT | 
DEALER21 | .DAT | 
DEALER22 | .DAT | 
DEALER23 | .DAT | 
DEALER24 | .DAT | 
DEALER25 | .DAT | 
DEALER26 | .DAT | 
DEALER27 | .DAT | 
DEALER28 | .DAT | 
DEALER29 | .DAT | 
DEALER30 | .DAT | 
DEALER31 | .DAT | 
DEALER32 | .DAT | 
DEALER33 | .DAT | 
DEALER34 | .DAT | 
DEALER41 | .DAT | 
DEALER42 | .DAT | 
DEALER43 | .DAT | 
DEALER44 | .DAT | 
DEALER45 | .DAT | 
DEALERAI | .DAT | 
DEALERNM | .DAT | 
DEALERTB | .DAT | 
DEMO_TIT | .DAT | 
DEPAGA | .CHR | 
DMONS | .DAT, .SYM | 
DUMMY | .CHR | 
ENCOUNT | .DAT | 
ENCOUNTB | .DAT | 
ENCOUNTR | .DAT | 
ENCOUNTY | .DAT | 
ENTHOU | .CHR | 
FIGHT | .DAT | 
FONT | .DAT | 
FUJI | .CHR | 
FUNANORI | .CHR | 
FUSHIGI | .CHR | 
GAMERM | .CHR | 
GAUGE | .DAT | 
GAUGE_B | .DAT | 
GSAN | .CHR | 
GSAN2 | .CHR | 
HANAHANA | .DAT | 
HERO | .DAT | 
HOTELM | .CHR | 
HOTELMAN | .CHR | 
HOTELW | .CHR | 
ITEMBIT | .DAT | 
ITEMGOLD | .DAT | 
ITEMMENU | .DAT | 
ITEMNAME | .DAT | 
JIBUN | .CHR | 
JIKI | .DAT | 
JIKI_BLU | .DAT | 
JI_BACK | .DAT | 
JUMPDAI | .DAT | 
JUNSAR | .CHR | 
KAKUTOU | .CHR | 
KANNA | .CHR | 
KASYA1 | .DAT | 
KASYA2 | .DAT | 
KASYA3 | .DAT | 
KASYA4 | .DAT | 
KEIBI | .CHR | 
KENKYUIN | .CHR | 
KIKUKO | .CHR | 
KITOUSHI | .CHR | 
KOJIRO | .CHR | 
KOMONO | .DAT | 
LOGOVER | .DAT | 
LOLITA | .CHR | 
LUCKY | .CHR | 
MAPJIKI | .DAT | 
MARUMON | .CHR | 
MARUSHI | .DAT | 
MARUSHI2 | .DAT | 
MARUSHIY | .DAT | 
MARUSI_N | .DAT | 
MONSTER | .CHR | 
MORIMORI | .CHR | 
MUSASHI | .CHR | 
MY_BACK | .DAT | 
NANAMI | .CHR | 
NAZOKUSA | .CHR | 
NEECHYAN | .CHR | 
NIICHYAN | .CHR | 
NUSI_01 | .DAT | 
NUSI_02 | .DAT | 
NUSI_03 | .DAT | 
NUSI_04 | .DAT | 
NUSI_05 | .DAT | 
NUSI_06 | .DAT | 
NUSI_07 | .DAT | 
NUSI_08 | .DAT | 
N_GAUGE | .DAT | 
OBASAN | .CHR | 
OBJ01 | .DAT | 
OBJ02 | .DAT | 
OBJ03 | .DAT | 
OBJ04 | .DAT | 
OBJ05 | .DAT | 
OBJ06 | .DAT | 
OKAASAN | .CHR | 
OKI01 | .DAT | 
OKID_BAK | .DAT | 
OOKIDO | .CHR | 
OP_BG | .DAT | 
OP_OBJ | .DAT | 
OP_PURIN | .DAT | 
OSSAN | .CHR | 
OSSAN2 | .CHR | 
PHILIP | .CHR | 
PICKMAP | .DAT, .TBL | 
PICKTBL | .DAT | 
PIKA10AA | .DAT | 
PIKA10A_ | .DAT | 
PIKA10B_ | .DAT | 
PIKA_01 | .DAT | 
PIKA_01A | .DAT | 
PIKA_02 | .DAT, .USO | 
PIKA_02A | .DAT | 
PIKA_03 | .DAT | 
PIKA_03A | .DAT | 
PIKA_04 | .DAT | 
PIKA_04A | .DAT | 
PIKA_05 | .DAT | 
PIKA_05A | .DAT | 
PIKA_06 | .DAT | 
PIKA_06A | .DAT | 
PIKA_07 | .DAT | 
PIKA_07A | .DAT | 
PIKA_08 | .DAT | 
PIKA_08A | .DAT | 
PIKA_09 | .DAT | 
PIKA_09A | .DAT | 
PIKA_10 | .DAT | 
PIKA_10A | .DAT | 
PIKA_10B | .DAT | 
PIKA_11 | .DAT | 
PIKA_11A | .DAT | 
PIKA_12 | .DAT | 
PIKA_12A | .DAT | 
PIKA_13 | .DAT | 
PIKA_13A | .DAT | 
PIKA_14 | .DAT | 
PIKA_14A | .DAT | 
PIKA_15 | .DAT | 
PIKA_15A | .DAT | 
PIKA_16 | .DAT | 
PIKA_16A | .DAT | 
PIKA_17 | .DAT | 
PIKA_17A | .DAT | 
PIKA_18 | .DAT | 
PIKA_18A | .DAT | 
PIKA_19 | .DAT | 
PIKA_19A | .DAT | 
PIKA_20 | .DAT | 
PIKA_20A | .DAT | 
PIKA_21 | .DAT | 
PIKA_21A | .DAT | 
PIKA_21B | .DAT | 
PIKA_21C | .DAT | 
PIKA_21D | .DAT | 
PIKA_22 | .DAT | 
PIKA_22A | .DAT | 
PIKA_23 | .DAT | 
PIKA_23A | .DAT | 
PIKA_24 | .DAT | 
PIKA_24A | .DAT | 
PIKA_25 | .DAT | 
PIKA_25A | .DAT | 
PIKA_25B | .DAT | 
PIKA_26 | .DAT | 
PIKA_26A | .DAT | 
PIKA_27 | .DAT | 
PIKA_27A | .DAT | 
PIKA_28 | .DAT | 
PIKA_28A | .DAT | 
PIKA_WLK | .DAT | 
PIPPI | .CHR | 
PMTIT | .DAT | 
PSY | .DAT | 
PURIN | .CHR | 
RAPLUS | .DAT | 
RDMONS | .DAT, .SYM | 
RIVAL | .CHR, .DAT | 
ROCKET1 | .DAT | 
ROCKET2 | .DAT | 
ROCKETS | .DAT | 
SAND | .CHR | 
SEINEN | .CHR | 
SENTHOU | .CHR | 
SERIFU | .DAT | 
SERIFU_B | .DAT | 
SHAINM | .CHR | 
SHAINW | .CHR | 
SHATHOU | .CHR | 
SHINKA | .DAT | 
SHIVA | .CHR | 
SHOPMAN | .CHR | 
SHOUNEN | .CHR | 
SLOT1 | .DAT | 
SLOT_BG | .DAT | 
SLOT_OB | .DAT | 
STATUSNE | .DAT | 
STATUSX | .DAT | 
SURFPIKA | .DAT | 
SWIMMER | .CHR | 
SYLPHMAN | .CHR | 
TESTBALL | .CHR | 
THEEND | .DAT | 
TITLCAP2 | .DAT | 
TITLE03 | .DAT | 
TITLE04 | .DAT | 
TITLE_JI | .DAT | 
TITLE_Y | .DAT | 
TORI | .CHR | 
TRADE_AN | .DAT | 
TRAINERM | .CHR | 
TRAINERW | .CHR | 
UMINOIE | .CHR | 
UMIRYU | .CHR | 
VANISH | .DAT | 
WALKPIKA | .CHR | 
WATARU | .CHR | 
WAZAGOLD | .DAT | 
WAZANAME | .DAT | 
WAZA_SE | .DAT, .H | 
WAZA_TBL | .DAT | 
WORLDMAP | .DAT | 
YUUICHI | .DAT | 
ZUKAN | .DAT | 
font_us | .dat | 


---
## Document (/yellow/Document)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Document</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **BugReportFromNOA** - 
* **Script** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
FAX MESSAGE | .doc | 
pika | .bmp | 
バンク移動計画(1) | .txt | 
バンク移動計画(2) | .txt | 
青の履歴 | .txt | 


---
### Bugreportfromnoa (/yellow/Document/BugReportFromNOA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/BugReportFromNOA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BUG1-13 | .TXT | 
Bug1-19 | .txt | 
Bug1-21 | .txt | 
Bug1-25 | .txt | 
Bug1-28 | .txt | 
Bug2-01 | .txt | 
debug | .txt | 


---
### Script (/yellow/Document/Script)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Script</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PMFILE | .dat | 
YELMSG_9 | .txt | 
mvzukan | .bat | Windows Batch file for running 
putmsgj | .bat | Windows Batch file for running 
yelmsg | .zip | 
yelmsg_0 | .txt | 
yelmsg_1 | .txt | 
yelmsg_2 | .txt | 
yelmsg_3 | .txt | 
yelmsg_4 | .txt | 
yelmsg_5 | .txt | 
yelmsg_6 | .txt | 
yelmsg_7 | .txt | 
yelmsg_8 | .txt | 
yelmsg_a | .txt | 


---
## Effdata (/yellow/EFFDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/EFFDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BLSLOTBG | .DAT | 
CAPTURE | .DAT | 
COL_BLUE | .DAT | 
COL_RED | .DAT | 
DEMO_TIT | .DAT | 
EF0 | .DAT | 
EF1 | .DAT | 
FLAME1 | .DAT | 
HYDRO1 | .DAT | 
MARUMARU | .DAT | 
MIZU | .DAT | 
MUSI | .DAT | 
PF_Y_CGX | .DAT | 
PF_Y_MAP | .DAT | 
PICT_F | .DAT | 
RYDEEN1 | .DAT | 
SIMPHIT | .DAT | 
SLOTBG_B | .DAT | 
SLOTOB_B | .DAT | 
SLOTOB_R | .DAT | 
STATNAME | .DAT | 
STATNO | .DAT | 
STATUS1 | .DAT | 
STATWAKU | .DAT | 
TETSU | .DAT | 
TURI | .DAT | 


---
## Map Data (/yellow/MAPDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/MAPDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the tile data for each of the maps.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
1 | .CEL | 
11_18GAT | .MAP | 
12GATE | .MAP | 
16_GATE | .MAP | 
22GATE | .MAP | 
5_6GATE | .MAP | 
7_8GATE | .MAP | 
ARASARE | .CEL, .CHR, .MAP | 
AZITO_B1 | .MAP | 
AZITO_B2 | .MAP | 
AZITO_B3 | .MAP | 
AZITO_B4 | .MAP | 
AZITO_EL | .MAP | 
AZITO_R1 | .MAP | 
AZITO_R2 | .MAP | 
AZITO_R3 | .MAP | 
BILDING | .CEL | 
BOSSDOJO | .MAP | 
BTOWN_B1 | .DAT | 
BUILDING | .CEL, .DAT | 
BULDING | .CEL | 
CHAMPCUP | .CEL, .CHR, .MAP | 
CICLE | .CEL, .DAT, .MAP | 
COLOSEUM | .MAP | 
CYCLE | .CEL, .DAT, .MAP | 
DAIMANIA | .CEL, .DAT | 
DAISUKI | .MAP | 
DENDOU | .MAP | 
DENDOU2 | .MAP | 
DEPELV | .MAP | 
DEPT | .CEL, .DAT | 
DEPT1F | .MAP | 
DEPT2F | .MAP | 
DEPT3F | .MAP | 
DEPT4F | .MAP | 
DEPT5F | .MAP | 
DEPT6F | .MAP | 
DGN01 | .CEL, .DAT, .MAP | 
DGN02 | .CEL, .DAT, .MAP | 
DGN04 | .MAP | 
DGN05 | .MAP | 
DGN06 | .MAP | 
DOJO | .MAP | 
DOJO_01 | .MAP | 
DOJO_02 | .MAP | 
DOJO_03 | .MAP | 
DOJO_04 | .MAP | 
DOJO_05 | .MAP | 
DOJO_06 | .MAP | 
DOJO_07 | .MAP | 
DOJO_08 | .MAP | 
DONATA | .MAP | 
DUN02 | .CEL | 
END01 | .MAP | 
END02 | .MAP | 
END03 | .MAP | 
FIRE_DUN | .MAP | 
GATE | .CEL, .DAT | 
GATE2F | .MAP | 
GATEHAKU | .CEL, .DAT | 
GYM | .CEL, .DAT | 
GYM_01 | .MAP | 
GYM_02 | .MAP | 
GYM_03 | .MAP | 
GYM_04 | .MAP | 
GYM_05 | .MAP | 
GYM_06 | .MAP | 
GYM_07 | .MAP | 
GYM_08 | .MAP | 
GYM_Y | .CEL | 
HAKUBU1F | .MAP | 
HAKUBU2F | .MAP | 
HAKUBUTU | .DAT | 
HONBU1 | .MAP | 
HONBU2 | .MAP | 
HONBU3 | .MAP | 
HOTEL | .CEL, .CHR, .DAT, .MAP | 
HOTEL_Y | .MAP | 
HYOUSIKI | .DAT | 
IWAMIN | .MAP | 
IWANUKE_ | .MAP | 
IWA_1F | .MAP | 
IWA_2F | .MAP | 
JIMKYOK | .MAP | 
JIMSHO | .MAP | 
JISAN | .MAP | 
KAICHO_5 | .MAP | 
KENKYU | .CEL, .DAT, .MAP | 
KENKYU_1 | .MAP | 
KENKYU_2 | .MAP | 
KENKYU_3 | .MAP | 
KENKYU_4 | .MAP | 
KENKYU_S | .MAP | 
KOKANJO | .MAP | 
LASTBOSS | .MAP | 
MANIA | .DAT, .MAP | 
MANSH01 | .MAP | 
MANSH02 | .MAP | 
MANSH03 | .MAP | 
MANSH04 | .MAP | 
MANSHO | .CEL, .DAT | 
MANSHO1 | .CEL | 
MAP_TBL | .DAT | 
MDUN_1 | .MAP | 
MDUN_2 | .MAP | 
MDUN_3 | .MAP | 
MDUN_4 | .CEL, .MAP | 
MDUN_5 | .MAP | 
MDUN_6 | .MAP | 
MINKA_A | .CEL, .DAT, .MAP | 
MINKA_B | .CEL, .MAP | 
MINKA_C | .MAP | 
MINKA_D | .MAP | 
MISEYADO | .CEL, .DAT | 
NEND01 | .MAP | 
NEND02 | .MAP | 
NEND03 | .MAP | 
NEW_IWA1 | .MAP | 
NEW_IWA2 | .MAP | 
NHOTEL | .MAP | 
NHOTEL_Y | .MAP | 
NIWA | .MAP | 
NROAD_01 | .DAT, .MAP | 
NROAD_02 | .DAT, .MAP | 
NROAD_03 | .DAT, .MAP | 
NROAD_04 | .DAT, .MAP | 
NROAD_05 | .DAT, .MAP | 
NROAD_06 | .DAT, .MAP | 
NROAD_07 | .DAT, .MAP | 
NROAD_08 | .DAT, .MAP | 
NROAD_09 | .DAT, .MAP | 
NROAD_10 | .DAT, .MAP | 
NROAD_11 | .DAT, .MAP | 
NROAD_12 | .DAT, .MAP | 
NROAD_13 | .DAT, .MAP | 
NROAD_14 | .DAT, .MAP | 
NROAD_15 | .DAT, .MAP | 
NROAD_16 | .DAT, .MAP | 
NROAD_17 | .DAT, .MAP | 
NROAD_18 | .DAT, .MAP | 
NROAD_19 | .DAT, .MAP | 
NROAD_20 | .DAT, .MAP | 
NROAD_21 | .DAT, .MAP | 
NROAD_22 | .DAT, .MAP | 
NROAD_23 | .DAT, .MAP | Route 23
NROAD_24 | .DAT, .MAP | 
NROAD_25 | .DAT, .MAP | 
NSILF_1 | .MAP | 
NSILF_2 | .MAP | 
NSILF_3 | .MAP | 
NSILF_4 | .MAP | 
NSILF_5 | .MAP | 
NTOWER | .CEL, .DAT | 
NTOWN_01 | .CEL, .DAT, .MAP | 
NTOWN_02 | .MAP | 
NTOWN_03 | .MAP | 
NTOWN_04 | .DAT, .MAP | 
NTOWN_05 | .DAT, .MAP | 
NTOWN_06 | .DAT, .MAP | 
NTOWN_07 | .DAT, .MAP | 
NTOWN_08 | .DAT, .MAP | 
NTOWN_09 | .DAT, .MAP | 
NTOWN_10 | .DAT, .MAP | 
NTOWN_11 | .DAT | 
NTOWN_12 | .DAT | 
NTOWN_T | .DAT, .MAP | 
NT_1F | .MAP | 
NT_2F | .MAP | 
NT_3F | .MAP | 
NT_4F | .MAP | 
NT_5F | .MAP | 
NT_6F | .MAP | 
NT_7F | .MAP | 
NT_EL | .MAP | 
NUKE | .CEL, .DAT | 
NUKE5_6 | .MAP | 
NUKEMIN | .MAP | 
OHKIDO | .MAP | 
OHKIDO_Y | .CEL | 
ORI | .MAP | 
OTUKI_B1 | .MAP | 
OTUKI_B2 | .MAP | 
OTUKI_B3 | .MAP | 
PACHNCO | .CEL, .MAP | 
POKECEN | .CEL, .DAT, .MAP | 
POKECHR | .CEL | 
POKESEN | .CEL, .DAT | 
POKE_1F | .CEL, .MAP | 
POKE_2F | .CEL, .MAP | 
POKE_3F | .MAP | 
POKE_B1 | .CEL, .MAP | 
PORT | .CEL, .DAT, .MAP | 
PREAGUE | .MAP | 
R1_CHR | .DAT | 
R1_ENC | .DAT | 
ROAD1 | .DAT | 
ROAD10 | .DAT | 
ROAD11 | .DAT | 
ROAD12 | .DAT | 
ROAD13 | .DAT | 
ROAD14 | .DAT | 
ROAD15 | .DAT | 
ROAD16 | .DAT | 
ROAD17 | .DAT | 
ROAD18 | .DAT | 
ROAD19 | .DAT | 
ROAD1T | .DAT | 
ROAD2 | .DAT | 
ROAD20 | .DAT | 
ROAD21 | .DAT | 
ROAD22 | .DAT | 
ROAD23 | .DAT | 
ROAD24 | .DAT | 
ROAD25 | .DAT | 
ROAD3 | .DAT | 
ROAD4 | .DAT | 
ROAD5 | .DAT | 
ROAD6 | .DAT | 
ROAD7 | .DAT | 
ROAD8 | .DAT | 
ROAD9 | .DAT | 
ROOM | .CEL, .DAT | 
ROOM1F | .CEL, .DAT, .MAP | 
ROOM2F | .CEL, .DAT, .MAP | 
ROOMCELL | .DAT | 
ROOMIMG | .DAT | 
SAFACELL | .CEL | 
SAFARI_1 | .MAP | 
SAFARI_2 | .MAP | 
SAFARI_3 | .MAP | 
SAFARI_4 | .MAP | 
SCFOOL | .CEL | 
SCHOOL | .CEL, .DAT, .MAP | 
SCLCELL | .DAT | 
SCLIMG | .DAT | 
SEKISHO | .CEL, .DAT, .MAP | 
SHIP | .CEL, .DAT | 
SHOKUDO | .MAP | 
SHOP | .CHR, .MAP | 
SHOP1 | .DAT | 
SHOPCELL | .DAT | 
SHOPIMG | .DAT | 
SHOP_Y | .CEL, .CHR, .MAP | 
SHROOM1 | .MAP | 
SHROOM2 | .MAP | 
SHROOM3 | .MAP | 
SHROOM4 | .MAP | 
SILE_B4 | .MAP | 
SILF_11F | .MAP | 
SILF_1F | .MAP | 
SILF_2F | .MAP | 
SILF_3F | .MAP | 
SILF_4F | .MAP | 
SILF_5F | .MAP | 
SILF_B1 | .MAP | 
SILF_B2 | .MAP | 
SILF_B3 | .MAP | 
SILF_B3A | .MAP | 
SILF_B3B | .MAP | 
SILF_B4 | .MAP | 
SILF_B5 | .MAP | 
SILF_B6 | .MAP | 
SILF_B7 | .MAP | 
SILF_B8 | .MAP | 
SKOYA_1 | .MAP | 
SKOYA_2 | .MAP | 
STANNU | .CEL, .DAT | 
STANNU01 | .MAP | 
STANNU02 | .MAP | 
STANNU03 | .MAP | 
STANNU04 | .MAP | 
STANNU05 | .MAP | 
T6S2 | .DAT | 
TORI_1F | .MAP | 
TORI_B1 | .MAP | 
TORI_B2 | .MAP | 
TOWER | .CEL, .DAT | 
TOWER1F | .MAP | 
TOWER2F | .MAP | 
TOWER3F | .MAP | 
TOWER4F | .MAP | 
TOWER5F | .MAP | 
TOWER6F | .MAP | 
TOWER7F | .MAP | 
TOWN1 | .DAT | 
TOWN10 | .DAT | 
TOWN11 | .DAT | 
TOWN12 | .DAT | 
TOWN2 | .DAT | 
TOWN3 | .DAT | 
TOWN4 | .DAT | 
TOWN5 | .DAT | 
TOWN6 | .DAT | 
TOWN7 | .DAT | 
TOWN8 | .DAT | 
TOWN9 | .DAT | 
TOWNCELL | .DAT | 
TOWNIMG2 | .DAT | 
TOWN_B1 | .CEL, .DAT | 
TRADE | .MAP | 
TRAINING | .CEL, .MAP | 
TURI | .MAP | 
UMIHOUSE | .CEL, .DAT, .MAP | 
UMIIE | .MAP | 
YDUN_1 | .MAP | 
YEND_01 | .MAP | 
YEND_02 | .MAP | 
YEND_03 | .MAP | 
YGYM_04 | .MAP | 
YPACHNCO | .MAP | 
YROAD_04 | .MAP | 
YROAD_19 | .MAP | 
YTOWN_B1 | .DAT | 


---
## Monsdata (/yellow/MONSDATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/MONSDATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
029NIDO | .GIF | 
DEALER26 | .DAT | 
DEALER42 | .DAT | 
HERO | .DAT | 
KABUBONE | .DAT | 
KAIHATSU | .DAT | 
MONSB100 | .DAT | 
MONSB101 | .DAT | 
MONSB102 | .DAT | 
MONSB103 | .DAT | 
MONSB104 | .DAT | 
MONSB105 | .DAT | 
MONSB106 | .DAT | 
MONSB107 | .DAT | 
MONSB108 | .DAT | 
MONSB109 | .DAT | 
MONSB110 | .DAT | 
MONSB111 | .DAT | 
MONSB112 | .DAT | 
MONSB113 | .DAT | 
MONSB114 | .DAT | 
MONSB116 | .DAT | 
MONSB117 | .DAT | 
MONSB118 | .DAT | 
MONSB119 | .DAT | 
MONSB120 | .DAT | 
MONSB122 | .DAT | 
MONSB123 | .DAT | 
MONSB124 | .DAT | 
MONSB125 | .DAT | 
MONSB126 | .DAT | 
MONSB127 | .DAT | 
MONSB128 | .DAT | 
MONSB129 | .DAT | 
MONSB130 | .DAT | 
MONSB131 | .DAT | 
MONSB132 | .DAT | 
MONSB133 | .DAT | 
MONSB134 | .DAT | 
MONSB136 | .DAT | 
MONSB137 | .DAT | 
MONSB138 | .DAT | 
MONSB139 | .DAT | 
MONSB140 | .DAT | 
MONSB141 | .DAT | 
MONSB142 | .DAT | 
MONSB143 | .DAT | 
MONSB144 | .DAT | 
MONSB145 | .DAT | 
MONSB146 | .DAT | 
MONSB147 | .DAT | 
MONSB148 | .DAT | 
MONSB149 | .DAT | 
MONSB150 | .DAT | 
MONSB151 | .DAT | 
MONSB152 | .DAT | 
MONSB153 | .DAT | 
MONSB154 | .DAT | 
MONSB155 | .DAT | 
MONSB156 | .DAT | 
MONSB157 | .DAT | 
MONSB158 | .DAT | 
MONSB159 | .DAT | 
MONSB160 | .DAT | 
MONSB161 | .DAT | 
MONSB162 | .DAT | 
MONSB163 | .DAT | 
MONSB164 | .DAT | 
MONSB165 | .DAT | 
MONSB166 | .DAT | 
MONSB167 | .DAT | 
MONSB168 | .DAT | 
MONSB169 | .DAT | 
MONSB170 | .DAT | 
MONSB171 | .DAT | 
MONSB172 | .DAT | 
MONSB173 | .DAT | 
MONSB174 | .DAT | 
MONSB175 | .DAT | 
MONSB176 | .DAT | 
MONSB177 | .DAT | 
MONSB178 | .DAT | 
MONSB179 | .DAT | 
MONSB180 | .DAT | 
MONSB181 | .DAT | 
MONSB185 | .DAT | 
MONSB186 | .DAT | 
MONSB187 | .DAT | 
MONSB188 | .DAT | 
MONSB189 | .DAT | 
MONSB190 | .DAT | 
MONSBK01 | .DAT | 
MONSBK02 | .DAT | 
MONSBK03 | .DAT | 
MONSBK04 | .DAT | 
MONSBK05 | .DAT | 
MONSBK06 | .DAT | 
MONSBK07 | .DAT | 
MONSBK08 | .DAT | 
MONSBK09 | .DAT | 
MONSBK10 | .DAT | 
MONSBK11 | .DAT | 
MONSBK12 | .DAT | 
MONSBK13 | .DAT | 
MONSBK14 | .DAT | 
MONSBK15 | .DAT | 
MONSBK16 | .DAT | 
MONSBK17 | .DAT | 
MONSBK18 | .DAT | 
MONSBK19 | .DAT | 
MONSBK20 | .DAT | 
MONSBK21 | .DAT | 
MONSBK22 | .DAT | 
MONSBK23 | .DAT | 
MONSBK24 | .DAT | 
MONSBK25 | .DAT | 
MONSBK26 | .DAT | 
MONSBK27 | .DAT | 
MONSBK28 | .DAT | 
MONSBK29 | .DAT | 
MONSBK30 | .DAT | 
MONSBK31 | .DAT | 
MONSBK32 | .DAT | 
MONSBK33 | .DAT | 
MONSBK34 | .DAT | 
MONSBK35 | .DAT | 
MONSBK36 | .DAT | 
MONSBK37 | .DAT | 
MONSBK38 | .DAT | 
MONSBK39 | .DAT | 
MONSBK40 | .DAT | 
MONSBK41 | .DAT | 
MONSBK42 | .DAT | 
MONSBK43 | .DAT | 
MONSBK44 | .DAT | 
MONSBK45 | .DAT | 
MONSBK46 | .DAT | 
MONSBK47 | .DAT | 
MONSBK48 | .DAT | 
MONSBK49 | .DAT | 
MONSBK50 | .DAT | 
MONSBK51 | .DAT | 
MONSBK52 | .DAT | 
MONSBK53 | .DAT | 
MONSBK54 | .DAT | 
MONSBK55 | .DAT | 
MONSBK56 | .DAT | 
MONSBK57 | .DAT | 
MONSBK58 | .DAT | 
MONSBK59 | .DAT | 
MONSBK60 | .DAT | 
MONSBK61 | .DAT | 
MONSBK62 | .DAT | 
MONSBK63 | .DAT | 
MONSBK64 | .DAT | 
MONSBK65 | .DAT | 
MONSBK66 | .DAT | 
MONSBK67 | .DAT | 
MONSBK68 | .DAT | 
MONSBK69 | .DAT | 
MONSBK70 | .DAT | 
MONSBK71 | .DAT | 
MONSBK72 | .DAT | 
MONSBK73 | .DAT | 
MONSBK74 | .DAT | 
MONSBK75 | .DAT | 
MONSBK76 | .DAT | 
MONSBK77 | .DAT | 
MONSBK78 | .DAT | 
MONSBK79 | .DAT | 
MONSBK80 | .DAT | 
MONSBK81 | .DAT | 
MONSBK82 | .DAT | 
MONSBK83 | .DAT | 
MONSBK84 | .DAT | 
MONSBK85 | .DAT | 
MONSBK86 | .DAT | 
MONSBK87 | .DAT | 
MONSBK88 | .DAT | 
MONSBK89 | .DAT | 
MONSBK90 | .DAT | 
MONSBK91 | .DAT | 
MONSBK92 | .DAT | 
MONSBK93 | .DAT | 
MONSBK94 | .DAT | 
MONSBK95 | .DAT | 
MONSBK96 | .DAT | 
MONSBK97 | .DAT | 
MONSBK98 | .DAT | 
MONSBK99 | .DAT | 
MONSC182 | .DAT | 
MONSC183 | .DAT | 
MONSC184 | .DAT | 
MONSDATA | .DAT, .OV | 
MONSNAM2 | .DAT | 
MONSNAME | .DAT | 
MONSTBL | .DAT | 
ORDER | .DAT | 
PMDUMMY | .DAT | 
PMFILE | .DAT, .OV | 
PMYF_001 | .DAT | 
PMYF_002 | .DAT | 
PMYF_003 | .DAT | 
PMYF_004 | .DAT | 
PMYF_005 | .DAT | 
PMYF_006 | .DAT | 
PMYF_007 | .DAT | 
PMYF_008 | .DAT | 
PMYF_009 | .DAT | 
PMYF_010 | .DAT | 
PMYF_011 | .DAT | 
PMYF_012 | .DAT | 
PMYF_013 | .DAT | 
PMYF_014 | .DAT | 
PMYF_015 | .DAT | 
PMYF_016 | .DAT | 
PMYF_017 | .DAT | 
PMYF_018 | .DAT | 
PMYF_019 | .DAT | 
PMYF_020 | .DAT | 
PMYF_021 | .DAT | 
PMYF_022 | .DAT | 
PMYF_023 | .DAT | 
PMYF_024 | .DAT | 
PMYF_025 | .DAT | 
PMYF_026 | .DAT | 
PMYF_027 | .DAT | 
PMYF_028 | .DAT | 
PMYF_029 | .DAT | 
PMYF_030 | .DAT | 
PMYF_031 | .DAT | 
PMYF_032 | .DAT | 
PMYF_033 | .DAT | 
PMYF_034 | .DAT | 
PMYF_035 | .DAT | 
PMYF_036 | .DAT | 
PMYF_037 | .DAT | 
PMYF_038 | .DAT | 
PMYF_039 | .DAT | 
PMYF_040 | .DAT | 
PMYF_041 | .DAT | 
PMYF_042 | .DAT | 
PMYF_043 | .DAT | 
PMYF_044 | .DAT | 
PMYF_045 | .DAT | 
PMYF_046 | .DAT | 
PMYF_047 | .DAT | 
PMYF_048 | .DAT | 
PMYF_049 | .DAT | 
PMYF_050 | .DAT | 
PMYF_051 | .DAT | 
PMYF_052 | .DAT | 
PMYF_053 | .DAT | 
PMYF_054 | .DAT | 
PMYF_055 | .DAT | 
PMYF_056 | .DAT | 
PMYF_057 | .DAT | 
PMYF_058 | .DAT | 
PMYF_059 | .DAT | 
PMYF_060 | .DAT | 
PMYF_061 | .DAT | 
PMYF_062 | .DAT | 
PMYF_063 | .DAT | 
PMYF_064 | .DAT | 
PMYF_065 | .DAT | 
PMYF_066 | .DAT | 
PMYF_067 | .DAT | 
PMYF_068 | .DAT | 
PMYF_069 | .DAT | 
PMYF_070 | .DAT | 
PMYF_071 | .DAT | 
PMYF_072 | .DAT | 
PMYF_073 | .DAT | 
PMYF_074 | .DAT | 
PMYF_075 | .DAT | 
PMYF_076 | .DAT | 
PMYF_077 | .DAT | 
PMYF_078 | .DAT | 
PMYF_079 | .DAT | 
PMYF_080 | .DAT | 
PMYF_081 | .DAT | 
PMYF_082 | .DAT | 
PMYF_083 | .DAT | 
PMYF_084 | .DAT | 
PMYF_085 | .DAT | 
PMYF_086 | .DAT | 
PMYF_087 | .DAT | 
PMYF_088 | .DAT | 
PMYF_089 | .DAT | 
PMYF_090 | .DAT | 
PMYF_091 | .DAT | 
PMYF_092 | .DAT | 
PMYF_093 | .DAT | 
PMYF_094 | .DAT | 
PMYF_095 | .DAT | 
PMYF_096 | .DAT | 
PMYF_097 | .DAT | 
PMYF_098 | .DAT | 
PMYF_099 | .DAT | 
PMYF_100 | .DAT | 
PMYF_101 | .DAT | 
PMYF_102 | .DAT | 
PMYF_103 | .DAT | 
PMYF_104 | .DAT | 
PMYF_105 | .DAT | 
PMYF_106 | .DAT | 
PMYF_107 | .DAT | 
PMYF_108 | .DAT | 
PMYF_109 | .DAT | 
PMYF_110 | .DAT | 
PMYF_111 | .DAT | 
PMYF_112 | .DAT | 
PMYF_113 | .DAT | 
PMYF_114 | .DAT | 
PMYF_115 | .DAT | 
PMYF_116 | .DAT | 
PMYF_117 | .DAT | 
PMYF_118 | .DAT | 
PMYF_119 | .DAT | 
PMYF_120 | .DAT | 
PMYF_121 | .DAT | 
PMYF_122 | .DAT | 
PMYF_123 | .DAT | 
PMYF_124 | .DAT | 
PMYF_125 | .DAT | 
PMYF_126 | .DAT | 
PMYF_127 | .DAT | 
PMYF_128 | .DAT | 
PMYF_129 | .DAT | 
PMYF_130 | .DAT | 
PMYF_131 | .DAT | 
PMYF_132 | .DAT | 
PMYF_133 | .DAT | 
PMYF_134 | .DAT | 
PMYF_135 | .DAT | 
PMYF_136 | .DAT | 
PMYF_137 | .DAT | 
PMYF_138 | .DAT | 
PMYF_139 | .DAT | 
PMYF_140 | .DAT | 
PMYF_141 | .DAT | 
PMYF_142 | .DAT | 
PMYF_143 | .DAT | 
PMYF_144 | .DAT | 
PMYF_145 | .DAT | 
PMYF_146 | .DAT | 
PMYF_147 | .DAT | 
PMYF_148 | .DAT | 
PMYF_149 | .DAT | 
PMYF_150 | .DAT | 
PMYF_151 | .DAT | 
PMYF_DMY | .DAT | 
PUTEBONE | .DAT | 
RIVAL | .DAT | 
TEST | .DAT | 


---
## Sound (/yellow/SOUND)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SOUND</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AABO | .DAT | 
AABOKKU | .DAT | 
BATAFURI | .DAT | 
BETOBETA | .DAT | 
BETOBETO | .DAT | 
BIIDORU | .DAT | 
BIRIRIDA | .DAT | 
DAGUTORI | .DAT | 
DANE30 | .DAT | 
DATA | .DAT | 
DIGUDA | .DAT | 
DOGAASU | .DAT | 
DOKUKURA | .DAT | 
DOODORIO | .DAT | 
EBIWARAA | .DAT | 
FILENAME | .DAT | 
FUSHIGI | .DAT | 
FUSIGIDA | .DAT | 
GENGAA | .DAT | 
GOOSU | .DAT | 
GOOSUTO | .DAT | 
GOROON | .DAT | 
GORUBATT | .DAT | 
HITODEMA | .DAT | 
HITOKAGE | .DAT | 
ISITUBUT | .DAT | 
IWAAKU | .DAT | 
KARAKARA | .DAT | 
KEESII | .DAT | 
KODAKKU | .DAT | 
KOIKINGU | .DAT | 
KOIRU | .DAT | 
KOKUUN | .DAT | 
KONPAN | .DAT | 
KORATTA | .DAT | 
KURABU | .DAT | 
KUSAIHAN | .DAT | 
KYATAPII | .DAT | 
MADATUBO | .DAT | 
MANKII | .DAT | 
MATADOGA | .DAT | 
MENOKURA | .DAT | 
MONJYARA | .DAT | 
MORUHON | .DAT | 
NAZONOKU | .DAT | 
NYAASU | .DAT | 
OKORIZAR | .DAT | 
ONISUZUM | .DAT | 
PARASU | .DAT | 
PAUWAU | .DAT | 
PERUSIAN | .DAT | 
PIJYON | .DAT | 
PIKA01 | .DAT | 
PIKA02 | .DAT | 
PIKA03 | .DAT | 
PIKA04 | .DAT | 
PIKA05 | .DAT | 
PIKA06 | .DAT | 
PIKA07 | .DAT | 
PIKA08 | .DAT | 
PIKA09 | .DAT | 
PIKA10 | .DAT | 
PIKA11 | .DAT | 
PIKA12 | .DAT | 
PIKA13 | .DAT | 
PIKA14 | .DAT | 
PIKA15 | .DAT | 
PIKA16 | .DAT | 
PIKA17 | .DAT | 
PIKA18 | .DAT | 
PIKA19 | .DAT | 
PIKA20 | .DAT | 
PIKA21 | .DAT | 
PIKA22 | .DAT | 
PIKA23 | .DAT | 
PIKA24 | .DAT | 
PIKA25 | .DAT | 
PIKA26 | .DAT | 
PIKA27 | .DAT | 
PIKA30 | .DAT | 
PIKA33 | .DAT | 
PIKA36 | .DAT | 
PIKA38 | .DAT | 
PIKA41 | .DAT | 
PIKACHUU | .DAT | 
PIKACU10 | .DAT | 
PIKACU11 | .DAT | 
PIKACU12 | .DAT | 
PIKACU13 | .DAT | 
PIKACU14 | .DAT | 
PIKACU15 | .DAT | 
PIKACU16 | .DAT | 
PIKACUU | .DAT | 
PIKACUU2 | .DAT | 
PIKACUU3 | .DAT | 
PIKACUU4 | .DAT | 
PIKACUU5 | .DAT | 
PIKACUU6 | .DAT | 
PIKACUU7 | .DAT | 
PIKACUU8 | .DAT | 
PIKACUU9 | .DAT | 
PIKUSII | .DAT | 
PIPPI | .DAT | 
POKEMON | .DAT | 
POPPO | .DAT | 
RAICHUU | .DAT | 
RAKKII | .DAT | 
RATTA | .DAT | 
REAKOIRU | .DAT | 
ROKON | .DAT | 
SANDO | .DAT | 
SAWAMURA | .DAT | 
SUPIAA | .DAT | 
SURIIPAA | .DAT | 
SURIIPU | .DAT | 
SUTAAMII | .DAT | 
TATTUU | .DAT | 
TEST | .DAT | 
TORANSER | .DAT | 
TOSAKINT | .DAT | 
UTUDON | .DAT | 
WANRIKII | .DAT | 
YADON | .DAT | 
YADORAN | .DAT | 
YUN16 | .DAT | 
YUN21 | .DAT | 
YUN25 | .DAT | 
YUN30 | .DAT | 
YUN35 | .DAT | 
YUN40 | .DAT | 
YUNGERAA | .DAT | 
ZENIGAME | .DAT | 
ZUBATTO | .DAT | 


---
## Sxy (/yellow/SXY)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SXY</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
D01R0101 | .SXY | 
D02R0101 | .SXY | 
D02R0102 | .SXY | 
D02R0103 | .SXY | 
D03R0101 | .SXY | 
D03R0102 | .SXY | 
D03R0103 | .SXY | 
D03R0104 | .SXY | 
D03R0105 | .SXY | 
D03R0106 | .SXY | 
D03R0107 | .SXY | 
D03R0108 | .SXY | 
D03R0109 | .SXY | 
D03R0110 | .SXY | 
D03R0111 | .SXY | 
D03R0112 | .SXY | 
D03R0113 | .SXY | 
D03R0114 | .SXY | 
D03R0115 | .SXY | 
D03R0116 | .SXY | 
D03R0117 | .SXY | 
D03R0118 | .SXY | 
D03R0119 | .SXY | 
D03R0120 | .SXY | 
D03R0121 | .SXY | 
D03R0122 | .SXY | 
D03R0123 | .SXY | 
D03R0124 | .SXY | 
D04R0101 | .SXY | 
D05R0101 | .SXY | 
D06R0101 | .SXY | 
D07R0101 | .SXY | 
D08R0101 | .SXY | 
D08R0102 | .SXY | 
D09R0101 | .SXY | 
D09R0102 | .SXY | 
D09R0103 | .SXY | 
D09R0104 | .SXY | 
D09R0105 | .SXY | 
D10R0101 | .SXY | 
D10R0102 | .SXY | 
D10R0103 | .SXY | 
D10R0104 | .SXY | 
D10R0105 | .SXY | 
D10R0106 | .SXY | 
D10R0107 | .SXY | 
D10R0108 | .SXY | 
D10R0109 | .SXY | 
D10R0110 | .SXY | 
D10R0111 | .SXY | 
D10R0112 | .SXY | 
D10R0201 | .SXY | 
D10R0202 | .SXY | 
D10R0203 | .SXY | 
D10R0204 | .SXY | 
D11R0101 | .SXY | 
D11R0102 | .SXY | 
D11R0103 | .SXY | 
D12R0101 | .SXY | 
D12R0102 | .SXY | 
D12R0103 | .SXY | 
D12R0104 | .SXY | 
D12R0105 | .SXY | 
D12R0106 | .SXY | 
D12R0107 | .SXY | 
D12R0108 | .SXY | 
D12R0109 | .SXY | 
D13R0101 | .SXY | 
D13R0102 | .SXY | 
D14R0101 | .SXY | 
D14R0102 | .SXY | 
D14R0103 | .SXY | 
D14R0104 | .SXY | 
D14R0105 | .SXY | 
D14R0106 | .SXY | 
D14R0107 | .SXY | 
D14R0108 | .SXY | 
D14R0109 | .SXY | 
D14R0110 | .SXY | 
D14R0111 | .SXY | 
D14R0112 | .SXY | 
D14R0113 | .SXY | 
D14R0114 | .SXY | 
D14R0115 | .SXY | 
D14R0116 | .SXY | 
D14R0117 | .SXY | 
D14R0118 | .SXY | 
D14R1414 | .SXY | 
D15R0101 | .SXY | 
D16R0101 | .SXY | 
D16R0102 | .SXY | 
D16R0103 | .SXY | 
D16R0104 | .SXY | 
D23R0101 | .SXY | 
R02R0101 | .SXY | 
R02R0201 | .SXY | 
R02R0301 | .SXY | 
R02R0401 | .SXY | 
R02R0501 | .SXY | 
R04R0101 | .SXY | 
R05R0101 | .SXY | 
R05R0201 | .SXY | 
R05R0301 | .SXY | 
R06R0101 | .SXY | 
R06R0201 | .SXY | 
R07R0101 | .SXY | 
R07R0201 | .SXY | 
R07R0301 | .SXY | 
R08R0101 | .SXY | 
R08R0201 | .SXY | 
R10R0101 | .SXY | 
R10R0201 | .SXY | 
R10R0301 | .SXY | 
R11R0101 | .SXY | 
R11R0102 | .SXY | 
R11R0201 | .SXY | 
R12R0101 | .SXY | 
R12R0102 | .SXY | 
R12R0201 | .SXY | 
R15R0101 | .SXY | 
R15R0102 | .SXY | 
R16R0101 | .SXY | 
R16R0102 | .SXY | 
R16R0201 | .SXY | 
R18R0101 | .SXY | 
R18R0102 | .SXY | 
R19R0101 | .SXY | 
R20R0101 | .SXY | 
R22R0101 | .SXY | 
R23R0101 | .SXY | 
R23R0201 | .SXY | 
R25R0101 | .SXY | 
ROAD01 | .SXY | 
ROAD02 | .SXY | 
ROAD03 | .SXY | 
ROAD04 | .SXY | 
ROAD05 | .SXY | 
ROAD06 | .SXY | 
ROAD07 | .SXY | 
ROAD08 | .SXY | 
ROAD09 | .SXY | 
ROAD10 | .SXY | 
ROAD11 | .SXY | 
ROAD12 | .SXY | 
ROAD13 | .SXY | 
ROAD14 | .SXY | 
ROAD15 | .SXY | 
ROAD16 | .SXY | 
ROAD17 | .SXY | 
ROAD18 | .SXY | 
ROAD19 | .SXY | 
ROAD20 | .SXY | 
ROAD21 | .SXY | 
ROAD22 | .SXY | 
ROAD23 | .SXY | 
ROAD24 | .SXY | 
ROAD25 | .SXY | 
T00R0101 | .SXY | 
T00R0102 | .SXY | 
T01R0101 | .SXY | 
T01R0102 | .DBG, .SXY | 
T01R0201 | .SXY | 
T01R0301 | .SXY | 
T02R0101 | .SXY | 
T02R0201 | .SXY | 
T02R0301 | .SXY | 
T02R0401 | .SXY | 
T02R0501 | .SXY | 
T03R0101 | .SXY | 
T03R0102 | .SXY | 
T03R0201 | .SXY | 
T03R0301 | .SXY | 
T03R0401 | .SXY | 
T03R0501 | .SXY | 
T03R0601 | .SXY | 
T04R0101 | .SXY | 
T04R0102 | .SXY | 
T04R0201 | .SXY | 
T04R0301 | .SXY | 
T04R0401 | .SXY | 
T04R0501 | .SXY | 
T04R0601 | .SXY | 
T04R0701 | .SXY | 
T04R0801 | .SXY | 
T05R0101 | .SXY | 
T05R0201 | .SXY | 
T05R0202 | .SXY | 
T05R0203 | .SXY | 
T05R0204 | .SXY | 
T05R0205 | .SXY | 
T05R0206 | .SXY | 
T05R0207 | .SXY | 
T05R0208 | .SXY | 
T05R0301 | .SXY | 
T05R0401 | .SXY | 
T05R0501 | .SXY | 
T05R0601 | .SXY | 
T06R0101 | .SXY | 
T06R0201 | .SXY | 
T06R0301 | .SXY | 
T06R0401 | .SXY | 
T06R0501 | .SXY | 
T06R0601 | .SXY | 
T06R0701 | .SXY | 
T06R0801 | .SXY | 
T07R0101 | .SXY | 
T07R0102 | .SXY | 
T07R0103 | .SXY | 
T07R0104 | .SXY | 
T07R0105 | .SXY | 
T07R0106 | .SXY | 
T07R0201 | .SXY | 
T07R0202 | .SXY | 
T07R0203 | .SXY | 
T07R0204 | .SXY | 
T07R0205 | .SXY | 
T07R0301 | .SXY | 
T07R0401 | .SXY | 
T07R0501 | .SXY | 
T07R0601 | .SXY | 
T07R0701 | .SXY | 
T07R0801 | .SXY | 
T07R0901 | .SXY | 
T07R1001 | .SXY | 
T08R0101 | .SXY | 
T08R0201 | .SXY | 
T08R0301 | .SXY | 
T08R0401 | .SXY | 
T08R0501 | .SXY | 
T08R0601 | .SXY | 
T08R0701 | .SXY | 
T08R0801 | .SXY | 
T08R0901 | .SXY | 
T08R1001 | .SXY | 
T08R1101 | .SXY | 
T08R1201 | .SXY | Unused Cage map
T08R1301 | .SXY | 
T09R0101 | .SXY | 
T09R0201 | .SXY | 
T09R0301 | .SXY | 
T09R0302 | .SXY | 
T09R0303 | .SXY | 
T09R0304 | .SXY | 
T09R0401 | .SXY | 
T09R0501 | .SXY | 
T09R0601 | .SXY | 
T0TR0101 | .SXY | 
T0TR0201 | .SXY | 
T0TR0301 | .SXY | 
T0TR0501 | .SXY | 
T0TR0601 | .SXY | 
T0TR0701 | .SXY | 
T0TR0801 | .SXY | 
T10R0101 | .SXY | 
T11R0101 | .SXY | 
T11R0102 | .SXY | 
T11R0201 | .SXY | 
T11R0301 | .SXY | 
T11R0401 | .SXY | 
T11R0501 | .SXY | 
T11R0601 | .SXY | 
T11R0701 | .SXY | 
T11R0801 | .SXY | 
TOWN01 | .SXY | 
TOWN02 | .SXY | 
TOWN03 | .SXY | 
TOWN04 | .SXY | 
TOWN05 | .SXY | 
TOWN06 | .SXY | 
TOWN07 | .SXY | 
TOWN08 | .SXY | 
TOWN09 | .SXY | 
TOWN0T | .SXY | 
TOWN10 | .SXY | 
TOWN11 | .SXY | 


---
## Source (/yellow/Source)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Source</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **Temp** - 
* **Iso** - 
* **bin** - 
* **Isx** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ACTOR | .DMG | 
ACTPUT | .DMG | 
ACTSUB | .DMG | 
ANIME | .DEF | 
A_DEMO | .dmg | 
A_MOVE | .DMG | 
BADGE | .DMG | 
BANK | .DMG, .MAP | 
BANKTOOL | .DEF, .DMG | 
BATTLE | .dmg | 
BITPLAY | .DMG | 
BMUSIC | .DMG | 
BMUSIC2 | .DMG | 
BMUSIC3 | .DMG | 
BMUSIC4 | .DMG | 
CHRSET | .DMG | 
COMMON | .DEF | 
COMMSG | .dmg | 
CONT | .DMG | 
C_EFFECT | .dmg | 
D01R0101 | .dmg | 
D02R0101 | .dmg | 
D02R0102 | .dmg | 
D02R0103 | .dmg | 
D03R0101 | .dmg | 
D03R0102 | .dmg | 
D03R0103 | .dmg | 
D03R0104 | .DMG | 
D03R0105 | .dmg | 
D03R0106 | .dmg | 
D03R0107 | .dmg | 
D03R0108 | .dmg | 
D03R0109 | .dmg | 
D03R0110 | .dmg | 
D04R0101 | .DMG | 
D06R0101 | .DMG | 
D07R0101 | .DMG | 
D08R0101 | .dmg | 
D09R0101 | .dmg | 
D09R0102 | .dmg | 
D09R0103 | .dmg | 
D09R0104 | .dmg | 
D09R0105 | .dmg | 
D10R0101 | .dmg | 
D10R0102 | .dmg | 
D10R0103 | .dmg | 
D10R0104 | .dmg | 
D10R0105 | .dmg | 
D10R0106 | .dmg | 
D10R0107 | .dmg | 
D10R0108 | .dmg | 
D10R0109 | .dmg | 
D10R0110 | .dmg | 
D10R0111 | .DMG | 
D11R0101 | .dmg | 
D11R0102 | .dmg | 
D11R0103 | .dmg | 
D12R0101 | .dmg | 
D12R0102 | .dmg | 
D12R0103 | .dmg | 
D12R0104 | .dmg | 
D12R0105 | .dmg | 
D12R0106 | .dmg | 
D12R0107 | .dmg | 
D12R0108 | .dmg | 
D12R0109 | .dmg | 
D13R0101 | .DMG | 
D13R0102 | .dmg | 
D14R0104 | .dmg | 
D14R0109 | .dmg | 
D14R0114 | .dmg | 
D14R0115 | .dmg | 
D14R0116 | .dmg | 
D14R0117 | .dmg | 
D14R0118 | .dmg | 
D15R0101 | .dmg | 
D16R0101 | .DMG | 
D16R0102 | .DMG | 
D16R0103 | .DMG | 
D16R0104 | .dmg | 
DATA_BOX | .DMG | 
DEALER | .DEF, .DMG | 
DEBUG | .dmg | 
DEMO | .dmg | 
DMA | .DMG | 
DMGFUNC | .TB0 | 
D_ACTION | .dmg | 
EFFECT | .DEF, .dmg | 
EFFECTER | .DAT, .DMG, .H | 
EFF_TBL | .DMG | 
ENCOUNT | .DMG | 
ENDING | .dmg | 
EV_TOOL | .dmg | 
EX_ACTOR | .DMG, .H | 
FADEPLAY | .DMG | 
FEW_MAC | .H | Include file for declaring 
FIGHT | .DEF, .dmg | 
FIGHTER | .DEF, .dmg | 
FNTEQU | .DEF | 
GROUP | .DEF | 
HANA | .DAT | 
HANA2 | .DAT | 
HANA3 | .DAT | 
HEADER | .DMG | 
HITCHECK | .DMG | 
ISASM | .TAG | 
ITEM | .DMG | 
ITEMMENU | .DMG | 
LASTER | .H | Include file for declaring 
LCDC | .DMG | 
LINKFILE | .Y | 
MACRO | .H | Include file for declaring 
MAIN | .dmg | 
MAP | .DEF | 
MAPBANK | .DAT | 
MAPHEAD | .DEF | 
MAPORG | .DMG | 
MAPPER | .DMG | 
MAPSUB | .dmg | 
MAPTYPE | .DEF | 
MONSLIST | .dmg | 
MONSTER | .DMG | 
MUSHEAD | .DMG | 
MUSHEAD2 | .DMG | 
MUSHEAD3 | .DMG | 
MUSHEAD4 | .DMG | 
MUSIC | .TBL | 
MVOICE | .DAT, .H | 
MYUFILE | .DAT | 
M_ASA | .DMG | 
M_AWALK | .DMG | 
M_CASINO | .DMG | 
M_CHARI | .DMG | 
M_DEAL1 | .DMG | 
M_DEAL2 | .DMG | 
M_DEAL3 | .DMG | 
M_DENDOU | .DMG | 
M_DUNG | .DMG | 
M_DUNG2 | .DMG | 
M_DUNG3 | .DMG | 
M_DUNG4 | .DMG | 
M_ENDING | .DMG | 
M_FAN1 | .DMG | 
M_FAN2 | .DMG | 
M_FAN3 | .DMG | 
M_FAN4 | .DMG | 
M_FAN5 | .DMG | 
M_FAN6 | .DMG | 
M_FAN8 | .DMG | 
M_FIELD1 | .DMG | 
M_FIELD2 | .DMG | 
M_FIELD3 | .DMG | 
M_FIELD4 | .DMG | 
M_FIELD5 | .DMG | 
M_FIGHT1 | .DMG | 
M_FIGHT3 | .DMG | 
M_FIGHT4 | .DMG | 
M_FIGHT5 | .DMG | 
M_GYM | .DMG | 
M_HTOWN | .DMG | 
M_KOKAN1 | .DMG | 
M_KOKAN2 | .DMG | 
M_LABO | .DMG | 
M_NAMI | .DMG | 
M_OHKIDO | .DMG | 
M_PIKA | .DMG | 
M_PMC | .DMG | 
M_PURIN | .DMG | 
M_RIVAL | .DMG | 
M_ROCKET | .DMG, .ORG | 
M_SAKAKI | .DMG, .ORG | 
M_SANTO | .DMG | 
M_SEA | .DMG | 
M_SHINKA | .DMG | 
M_START | .DMG | 
M_TITLE | .DMG | 
M_TOU1 | .DMG | 
M_TOU2 | .DMG | 
M_TOWN1 | .DMG | 
M_TOWN2 | .DMG | 
M_TOWN3 | .DMG | 
M_TOWN4 | .DMG | 
M_TOWN5 | .DMG | 
M_TOWN6 | .DMG | 
M_VIC1 | .DMG | 
M_VIC2 | .DMG | 
M_VIC3 | .DMG | 
NAMINORI | .DMG | 
NEWMAP | .DMG | 
NEWOBJ | .DMG | 
OBJBANK | .DEF | 
OBSERVE | .dmg | 
OPENING | .DMG | 
PATTERN | .DMG | 
PIKA | .DEF | 
PIKAACT | .DMG | 
PIKAANM | .H | Include file for declaring 
PIKAFACE | .DMG | 
PIKATALK | .dmg | 
PLAY | .DMG | 
PLAY1 | .dmg | 
PLAY2 | .dmg | 
PM_DEBUG | .DEF | 
PRINT | .dmg | 
PRINTER | .DMG, .H | 
PRINTER2 | .dmg | 
PRT | .DMG | 
PRT_SIO | .DMG | 
P_VOICE | .DMG | 
R02R0101 | .dmg | 
R02R0201 | .dmg | 
R02R0301 | .dmg | 
R02R0401 | .dmg | 
R02R0501 | .dmg | 
R04R0101 | .dmg | 
R05R0101 | .dmg | 
R05R0201 | .DMG | 
R05R0301 | .dmg | 
R06R0101 | .DMG | 
R06R0201 | .dmg | 
R07R0101 | .DMG | 
R07R0201 | .dmg | 
R07R0301 | .dmg | 
R08R0101 | .DMG | 
R08R0201 | .dmg | 
R10R0101 | .dmg | 
R10R0201 | .dmg | 
R10R0301 | .dmg | 
R11R0101 | .dmg | 
R11R0102 | .dmg | 
R11R0201 | .dmg | 
R12R0101 | .dmg | 
R12R0102 | .dmg | 
R12R0201 | .dmg | 
R15R0101 | .dmg | 
R15R0102 | .dmg | 
R16R0101 | .dmg | 
R16R0102 | .dmg | 
R16R0201 | .dmg | 
R18R0101 | .dmg | 
R18R0102 | .dmg | 
R19R0101 | .dmg | 
R20R0101 | .DMG | 
R22R0101 | .dmg | 
R23R0101 | .dmg | 
R25R0101 | .dmg | 
RESET | .DMG | 
ROAD01 | .dmg | 
ROAD02 | .dmg | 
ROAD03 | .dmg | 
ROAD04 | .dmg | 
ROAD05 | .dmg | 
ROAD06 | .dmg | 
ROAD07 | .dmg | 
ROAD08 | .dmg | 
ROAD09 | .dmg | 
ROAD10 | .dmg | 
ROAD11 | .dmg | 
ROAD12 | .dmg | 
ROAD13 | .dmg | 
ROAD14 | .dmg | 
ROAD15 | .dmg | 
ROAD16 | .dmg | 
ROAD17 | .dmg | 
ROAD18 | .dmg | 
ROAD19 | .dmg | 
ROAD20 | .dmg | 
ROAD21 | .dmg | 
ROAD22 | .dmg | 
ROAD23 | .dmg | 
ROAD24 | .dmg | 
ROAD25 | .dmg | 
SAVELOAD | .dmg | 
SE | .DEF | 
SETDMONS | .DMG | 
SET_PPL | .DMG | 
SFX | .DMG | 
SGB_COL | .DEF, .DMG | 
SHINKA | .dmg | 
SIO | .DMG | 
SOUND | .H | Include file for declaring 
SPATTACK | .dmg | 
T00R0101 | .dmg | 
T00R0102 | .dmg | 
T01R0101 | .dmg | 
T01R0102 | .DMG | 
T01R0201 | .dmg | 
T01R0301 | .dmg | 
T02R0101 | .dmg | 
T02R0201 | .dmg | 
T02R0301 | .dmg | 
T02R0401 | .dmg | 
T02R0501 | .dmg | 
T03R0101 | .dmg | 
T03R0102 | .dmg | 
T03R0201 | .dmg | 
T03R0301 | .dmg | 
T03R0401 | .dmg | 
T03R0501 | .dmg | 
T03R0601 | .dmg | 
T04R0101 | .dmg | 
T04R0201 | .dmg | 
T04R0301 | .dmg | 
T04R0401 | .dmg | 
T04R0501 | .dmg | 
T04R0601 | .dmg | 
T04R0701 | .DMG | 
T04R0801 | .dmg | 
T05R0101 | .dmg | 
T05R0201 | .dmg | 
T05R0202 | .dmg | 
T05R0203 | .dmg | 
T05R0204 | .dmg | 
T05R0205 | .dmg | 
T05R0206 | .dmg | 
T05R0207 | .dmg | 
T05R0301 | .dmg | 
T05R0401 | .dmg | 
T05R0501 | .dmg | 
T05R0601 | .dmg | 
T06R0101 | .dmg | 
T06R0201 | .dmg | 
T06R0301 | .dmg | 
T06R0401 | .dmg | 
T06R0501 | .dmg | 
T06R0601 | .dmg | 
T06R0701 | .dmg | 
T06R0801 | .dmg | 
T07R0101 | .dmg | 
T07R0102 | .dmg | 
T07R0103 | .dmg | 
T07R0104 | .dmg | 
T07R0105 | .dmg | 
T07R0106 | .DMG | 
T07R0201 | .dmg | 
T07R0202 | .dmg | 
T07R0203 | .dmg | 
T07R0204 | .dmg | 
T07R0205 | .dmg | 
T07R0301 | .dmg | 
T07R0401 | .dmg | 
T07R0501 | .dmg | 
T07R0601 | .dmg | 
T07R0701 | .dmg | 
T07R0801 | .dmg | 
T07R0901 | .dmg | 
T07R1001 | .dmg | 
T08R0101 | .dmg | 
T08R0201 | .dmg | 
T08R0301 | .dmg | 
T08R0401 | .dmg | 
T08R0501 | .dmg | 
T08R0601 | .dmg | 
T08R0701 | .dmg | 
T08R0801 | .dmg | 
T09R0101 | .dmg | 
T09R0201 | .dmg | 
T09R0301 | .dmg | 
T09R0302 | .dmg | 
T09R0303 | .dmg | 
T09R0304 | .dmg | 
T09R0401 | .dmg | 
T09R0501 | .dmg | 
T10R0101 | .dmg | 
T11R0101 | .dmg | 
T11R0102 | .dmg | 
T11R0201 | .dmg | 
T11R0301 | .dmg | 
T11R0401 | .dmg | 
T11R0501 | .dmg | 
T11R0601 | .dmg | 
T11R0701 | .dmg | 
T11R0801 | .dmg | 
TALKMAP | .dmg | 
TAMA | N/A | 
TIMER | .DMG | 
TOOLS | .dmg | 
TOWN01 | .dmg | 
TOWN02 | .dmg | 
TOWN03 | .dmg | 
TOWN04 | .dmg | 
TOWN05 | .dmg | 
TOWN06 | .dmg | 
TOWN07 | .dmg | 
TOWN08 | .dmg | 
TOWN09 | .dmg | 
TOWN11 | .dmg | 
TURIDATA | .DMG | 
TYPE | .DEF | 
UNCOMP | .DMG | 
USEITEM | .dmg | 
USEITEM2 | .DMG | 
VANISH | .DEF, .DMG | 
VBLANK | .DMG | 
VOICE | .DAT, .H | 
VYOSI1 | .DAT | 
WATASHI | .DMG | 
WAZA | .DMG | 
WINDOW | .DMG | 
WORLDMAP | .dmg | 
YUKA | .DAT | 
Y_PATCH | .DMG | 
ZUKAN | .DMG | 
yelmsg_0 | .dmg | 
yelmsg_1 | .dmg | 
yelmsg_2 | .dmg | 
yelmsg_3 | .dmg | 
yelmsg_4 | .dmg | 
yelmsg_5 | .dmg | 
yelmsg_6 | .dmg | 
yelmsg_7 | .dmg | 
yelmsg_8 | .dmg | 
yelmsg_9 | .dmg | 
yelmsg_a | .dmg | 
zukanmsg | .dmg | 


---
### Iso (/yellow/Source/Iso)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Iso</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ACTOR | .ISO | 
ACTPUT | .ISO | 
ACTSUB | .ISO | 
A_DEMO | .ISO | 
A_MOVE | .ISO | 
BADGE | .ISO | 
BANK | .ISO | 
BANKTOOL | .ISO | 
BATTLE | .ISO | 
BMUSIC | .ISO | 
BMUSIC2 | .ISO | 
BMUSIC3 | .ISO | 
BMUSIC4 | .ISO | 
CHRSET | .ISO | 
COMMON | .ISO | 
COMMSG | .ISO | 
CONT | .ISO | 
C_EFFECT | .ISO | 
D01R0101 | .ISO | 
D02R0101 | .ISO | 
D02R0102 | .ISO | 
D02R0103 | .ISO | 
D03R0101 | .ISO | 
D03R0102 | .ISO | 
D03R0103 | .ISO | 
D03R0104 | .ISO | 
D03R0105 | .ISO | 
D03R0106 | .ISO | 
D03R0107 | .ISO | 
D03R0108 | .ISO | 
D03R0109 | .ISO | 
D03R0110 | .ISO | 
D04R0101 | .ISO | 
D06R0101 | .ISO | 
D07R0101 | .ISO | 
D08R0101 | .ISO | 
D09R0101 | .ISO | 
D09R0102 | .ISO | 
D09R0103 | .ISO | 
D09R0104 | .ISO | 
D09R0105 | .ISO | 
D10R0101 | .ISO | 
D10R0102 | .ISO | 
D10R0103 | .ISO | 
D10R0104 | .ISO | 
D10R0105 | .ISO | 
D10R0106 | .ISO | 
D10R0107 | .ISO | 
D10R0108 | .ISO | 
D10R0109 | .ISO | 
D10R0110 | .ISO | 
D10R0111 | .ISO | 
D11R0101 | .ISO | 
D11R0102 | .ISO | 
D11R0103 | .ISO | 
D12R0101 | .ISO | 
D12R0102 | .ISO | 
D12R0103 | .ISO | 
D12R0104 | .ISO | 
D12R0105 | .ISO | 
D12R0106 | .ISO | 
D12R0107 | .ISO | 
D12R0108 | .ISO | 
D12R0109 | .ISO | 
D13R0101 | .ISO | 
D13R0102 | .ISO | 
D14R0104 | .ISO | 
D14R0109 | .ISO | 
D14R0114 | .ISO | 
D14R0115 | .ISO | 
D14R0116 | .ISO | 
D14R0117 | .ISO | 
D14R0118 | .ISO | 
D15R0101 | .ISO | 
D16R0101 | .ISO | 
D16R0102 | .ISO | 
D16R0103 | .ISO | 
D16R0104 | .ISO | 
DATA_BOX | .ISO | 
DEALER | .ISO | 
DEBUG | .ISO | 
DEMO | .ISO | 
DMA | .ISO | 
D_ACTION | .ISO | 
EFFECT | .ISO | 
EFFECTER | .ISO | 
EFF_TBL | .ISO | 
ENCOUNT | .ISO | 
ENDING | .ISO | 
EV_TOOL | .ISO | 
EX_ACTOR | .ISO | 
FADEPLAY | .ISO | 
FIGHT | .ISO | 
FIGHTER | .ISO | 
HEADER | .ISO | 
HITCHECK | .ISO | 
ITEM | .ISO | 
ITEMMENU | .ISO | 
LCDC | .ISO | 
MAIN | .ISO | 
MAPORG | .ISO | 
MAPSUB | .ISO | 
MONSLIST | .ISO | 
MONSTER | .ISO | 
MUSHEAD | .ISO | 
MUSHEAD2 | .ISO | 
MUSHEAD3 | .ISO | 
MUSHEAD4 | .ISO | 
M_ASA | .ISO | 
M_AWALK | .ISO | 
M_CASINO | .ISO | 
M_CHARI | .ISO | 
M_DEAL1 | .ISO | 
M_DEAL2 | .ISO | 
M_DEAL3 | .ISO | 
M_DENDOU | .ISO | 
M_DUNG | .ISO | 
M_DUNG2 | .ISO | 
M_DUNG3 | .ISO | 
M_DUNG4 | .ISO | 
M_ENDING | .ISO | 
M_FAN1 | .ISO | 
M_FAN2 | .ISO | 
M_FAN3 | .ISO | 
M_FAN4 | .ISO | 
M_FAN5 | .ISO | 
M_FAN6 | .ISO | 
M_FAN8 | .ISO | 
M_FIELD1 | .ISO | 
M_FIELD2 | .ISO | 
M_FIELD3 | .ISO | 
M_FIELD4 | .ISO | 
M_FIELD5 | .ISO | 
M_FIGHT1 | .ISO | 
M_FIGHT3 | .ISO | 
M_FIGHT4 | .ISO | 
M_FIGHT5 | .ISO | 
M_GYM | .ISO | 
M_HTOWN | .ISO | 
M_KOKAN1 | .ISO | 
M_KOKAN2 | .ISO | 
M_LABO | .ISO | 
M_NAMI | .ISO | 
M_OHKIDO | .ISO | 
M_PIKA | .ISO | 
M_PMC | .ISO | 
M_PURIN | .ISO | 
M_RIVAL | .ISO | 
M_ROCKET | .ISO | 
M_SAKAKI | .ISO | 
M_SANTO | .ISO | 
M_SEA | .ISO | 
M_SHINKA | .ISO | 
M_START | .ISO | 
M_TITLE | .ISO | 
M_TOU1 | .ISO | 
M_TOU2 | .ISO | 
M_TOWN1 | .ISO | 
M_TOWN2 | .ISO | 
M_TOWN3 | .ISO | 
M_TOWN4 | .ISO | 
M_TOWN5 | .ISO | 
M_TOWN6 | .ISO | 
M_VIC1 | .ISO | 
M_VIC2 | .ISO | 
M_VIC3 | .ISO | 
NAMINORI | .ISO | 
NEWMAP | .ISO | 
NEWOBJ | .ISO | 
OBSERVE | .ISO | 
OPENING | .ISO | 
PATTERN | .ISO | 
PIKAACT | .ISO | 
PIKAFACE | .ISO | 
PIKATALK | .ISO | 
PLAY | .ISO | 
PLAY1 | .ISO | 
PLAY2 | .ISO | 
PRINT | .ISO | 
PRINTER | .ISO | 
PRINTER2 | .ISO | 
PRT | .ISO | 
PRT_SIO | .ISO | 
P_VOICE | .ISO | 
R02R0101 | .ISO | 
R02R0201 | .ISO | 
R02R0301 | .ISO | 
R02R0401 | .ISO | 
R02R0501 | .ISO | 
R04R0101 | .ISO | 
R05R0101 | .ISO | 
R05R0201 | .ISO | 
R05R0301 | .ISO | 
R06R0101 | .ISO | 
R06R0201 | .ISO | 
R07R0101 | .ISO | 
R07R0201 | .ISO | 
R07R0301 | .ISO | 
R08R0101 | .ISO | 
R08R0201 | .ISO | 
R10R0101 | .ISO | 
R10R0201 | .ISO | 
R10R0301 | .ISO | 
R11R0101 | .ISO | 
R11R0102 | .ISO | 
R11R0201 | .ISO | 
R12R0101 | .ISO | 
R12R0102 | .ISO | 
R12R0201 | .ISO | 
R15R0101 | .ISO | 
R15R0102 | .ISO | 
R16R0101 | .ISO | 
R16R0102 | .ISO | 
R16R0201 | .ISO | 
R18R0101 | .ISO | 
R18R0102 | .ISO | 
R19R0101 | .ISO | 
R20R0101 | .ISO | 
R22R0101 | .ISO | 
R23R0101 | .ISO | 
R25R0101 | .ISO | 
RESET | .ISO | 
ROAD01 | .ISO | 
ROAD02 | .ISO | 
ROAD03 | .ISO | 
ROAD04 | .ISO | 
ROAD05 | .ISO | 
ROAD06 | .ISO | 
ROAD07 | .ISO | 
ROAD08 | .ISO | 
ROAD09 | .ISO | 
ROAD10 | .ISO | 
ROAD11 | .ISO | 
ROAD12 | .ISO | 
ROAD13 | .ISO | 
ROAD14 | .ISO | 
ROAD15 | .ISO | 
ROAD16 | .ISO | 
ROAD17 | .ISO | 
ROAD18 | .ISO | 
ROAD19 | .ISO | 
ROAD20 | .ISO | 
ROAD21 | .ISO | 
ROAD22 | .ISO | 
ROAD23 | .ISO | 
ROAD24 | .ISO | 
ROAD25 | .ISO | 
SAVELOAD | .ISO | 
SETDMONS | .ISO | 
SET_PPL | .ISO | 
SFX | .ISO | 
SGB_COL | .ISO | 
SHINKA | .ISO | 
SIO | .ISO | 
SPATTACK | .ISO | 
T00R0101 | .ISO | 
T00R0102 | .ISO | 
T01R0101 | .ISO | 
T01R0102 | .ISO | 
T01R0201 | .ISO | 
T01R0301 | .ISO | 
T02R0101 | .ISO | 
T02R0201 | .ISO | 
T02R0301 | .ISO | 
T02R0401 | .ISO | 
T02R0501 | .ISO | 
T03R0101 | .ISO | 
T03R0102 | .ISO | 
T03R0201 | .ISO | 
T03R0301 | .ISO | 
T03R0401 | .ISO | 
T03R0501 | .ISO | 
T03R0601 | .ISO | 
T04R0101 | .ISO | 
T04R0201 | .ISO | 
T04R0301 | .ISO | 
T04R0401 | .ISO | 
T04R0501 | .ISO | 
T04R0601 | .ISO | 
T04R0701 | .ISO | 
T04R0801 | .ISO | 
T05R0101 | .ISO | 
T05R0201 | .ISO | 
T05R0202 | .ISO | 
T05R0203 | .ISO | 
T05R0204 | .ISO | 
T05R0205 | .ISO | 
T05R0206 | .ISO | 
T05R0207 | .ISO | 
T05R0301 | .ISO | 
T05R0401 | .ISO | 
T05R0501 | .ISO | 
T05R0601 | .ISO | 
T06R0101 | .ISO | 
T06R0201 | .ISO | 
T06R0301 | .ISO | 
T06R0401 | .ISO | 
T06R0501 | .ISO | 
T06R0601 | .ISO | 
T06R0701 | .ISO | 
T06R0801 | .ISO | 
T07R0101 | .ISO | 
T07R0102 | .ISO | 
T07R0103 | .ISO | 
T07R0104 | .ISO | 
T07R0105 | .ISO | 
T07R0106 | .ISO | 
T07R0201 | .ISO | 
T07R0202 | .ISO | 
T07R0203 | .ISO | 
T07R0204 | .ISO | 
T07R0205 | .ISO | 
T07R0301 | .ISO | 
T07R0401 | .ISO | 
T07R0501 | .ISO | 
T07R0601 | .ISO | 
T07R0701 | .ISO | 
T07R0801 | .ISO | 
T07R0901 | .ISO | 
T07R1001 | .ISO | 
T08R0101 | .ISO | 
T08R0201 | .ISO | 
T08R0301 | .ISO | 
T08R0401 | .ISO | 
T08R0501 | .ISO | 
T08R0601 | .ISO | 
T08R0701 | .ISO | 
T08R0801 | .ISO | 
T09R0101 | .ISO | 
T09R0201 | .ISO | 
T09R0301 | .ISO | 
T09R0302 | .ISO | 
T09R0303 | .ISO | 
T09R0304 | .ISO | 
T09R0401 | .ISO | 
T09R0501 | .ISO | 
T10R0101 | .ISO | 
T11R0101 | .ISO | 
T11R0102 | .ISO | 
T11R0201 | .ISO | 
T11R0301 | .ISO | 
T11R0401 | .ISO | 
T11R0501 | .ISO | 
T11R0601 | .ISO | 
T11R0701 | .ISO | 
T11R0801 | .ISO | 
TALKMAP | .ISO | 
TIMER | .ISO | 
TOOLS | .ISO | 
TOWN01 | .ISO | 
TOWN02 | .ISO | 
TOWN03 | .ISO | 
TOWN04 | .ISO | 
TOWN05 | .ISO | 
TOWN06 | .ISO | 
TOWN07 | .ISO | 
TOWN08 | .ISO | 
TOWN09 | .ISO | 
TOWN11 | .ISO | 
TURIDATA | .ISO | 
UNCOMP | .ISO | 
USEITEM | .ISO | 
USEITEM2 | .ISO | 
VANISH | .ISO | 
VBLANK | .ISO | 
WATASHI | .ISO | 
WAZA | .ISO | 
WINDOW | .ISO | 
WORLDMAP | .ISO | 
YELLMONS | .ISX | 
YELMSG_0 | .ISO | 
YELMSG_1 | .ISO | 
YELMSG_2 | .ISO | 
YELMSG_3 | .ISO | 
YELMSG_4 | .ISO | 
YELMSG_5 | .ISO | 
YELMSG_6 | .ISO | 
YELMSG_7 | .ISO | 
YELMSG_8 | .ISO | 
YELMSG_9 | .ISO | 
YELMSG_A | .ISO | 
Y_PATCH | .ISO | 
ZUKAN | .ISO | 
ZUKANMSG | .ISO | 


---
### Isx (/yellow/Source/Isx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Isx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **saveData** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
DMGFUNC | .TB0 | 
ISX2BIN | .EXE | 
USRED | .BIN | 
YELLMONS | .ISX, .rtc | 
isdwdcmd | .dat | 
isdwdrng | .dat | 
isdwdsym | .dat | 
y990218 | .bin | 
y990222 | .bin | 
yellmons | .ram | 
コピー ～ yellmons | .ram | 


---
##### Route10 (/yellow/Source/Isx/saveData/Route10)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route10</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route11 (/yellow/Source/Isx/saveData/Route11)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route11</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route12 (/yellow/Source/Isx/saveData/Route12)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route12</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route13 (/yellow/Source/Isx/saveData/Route13)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route13</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route14 (/yellow/Source/Isx/saveData/Route14)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route14</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route15 (/yellow/Source/Isx/saveData/Route15)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route15</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route16 (/yellow/Source/Isx/saveData/Route16)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route16</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route17 (/yellow/Source/Isx/saveData/Route17)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route17</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route18 (/yellow/Source/Isx/saveData/Route18)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route18</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route19 (/yellow/Source/Isx/saveData/Route19)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route19</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route20 (/yellow/Source/Isx/saveData/Route20)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route20</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route21 (/yellow/Source/Isx/saveData/Route21)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route21</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route22 (/yellow/Source/Isx/saveData/Route22)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route22</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route23 (/yellow/Source/Isx/saveData/Route23)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route23</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route24 (/yellow/Source/Isx/saveData/Route24)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route24</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/Route25/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ﾐｻｷﾉｺﾔ (/yellow/Source/Isx/saveData/Route25/ﾐｻｷﾉｺﾔ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾐｻｷﾉｺﾔ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route3 (/yellow/Source/Isx/saveData/Route3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route3</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route4 (/yellow/Source/Isx/saveData/Route4)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route4</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route5 (/yellow/Source/Isx/saveData/Route5)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route5</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route6 (/yellow/Source/Isx/saveData/Route6)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route6</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route8 (/yellow/Source/Isx/saveData/Route8)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route8</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### Route9 (/yellow/Source/Isx/saveData/Route9)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Route9</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### ｲﾜﾔﾏﾄﾝﾈﾙ (/yellow/Source/Isx/saveData/ｲﾜﾔﾏﾄﾝﾈﾙ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｲﾜﾔﾏﾄﾝﾈﾙ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｵﾂｷﾐﾔﾏ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _2 (/yellow/Source/Isx/saveData/ｵﾂｷﾐﾔﾏ/_2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｸﾁﾊﾞｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
####### 1f (/yellow/Source/Isx/saveData/ｸﾁﾊﾞｼﾃｨ/ｻﾝﾄｱﾝﾇ/1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
####### 2f (/yellow/Source/Isx/saveData/ｸﾁﾊﾞｼﾃｨ/ｻﾝﾄｱﾝﾇ/2F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
####### B1f (/yellow/Source/Isx/saveData/ｸﾁﾊﾞｼﾃｨ/ｻﾝﾄｱﾝﾇ/B1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ｸﾁﾊﾞｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 1f (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾔｼｷ/1f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 2f (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾔｼｷ/2f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 3f (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾔｼｷ/3f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### B1f (/yellow/Source/Isx/saveData/ｸﾞﾚﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾔｼｷ/B1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 1f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 2f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/2F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 3f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/3F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 4f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/4F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/4F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 5f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/5F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/5F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 6f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/6F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/6F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 7f (/yellow/Source/Isx/saveData/ｼｵﾝﾀｳﾝ/ﾎﾟｹﾓﾝﾀﾜｰ/7F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/7F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｶﾝﾅ (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/ｶﾝﾅ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｶﾝﾅ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｷｸｺ (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/ｷｸｺ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｷｸｺ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾊﾞ (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/ｼﾊﾞ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾊﾞ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ﾗｲﾊﾞﾙ (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/ﾗｲﾊﾞﾙ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾗｲﾊﾞﾙ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ﾜﾀﾙ (/yellow/Source/Isx/saveData/ｾｷｴｲｺｳｹﾞﾝ/ﾜﾀﾙ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾜﾀﾙ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ｾｷﾁｸｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｻﾌｧﾘ (/yellow/Source/Isx/saveData/ｾｷﾁｸｼﾃｨ/ｻﾌｧﾘ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｻﾌｧﾘ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ｾｷﾁｸｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### B1f (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｱｼﾞﾄ/B1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### B2f (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｱｼﾞﾄ/B2F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B2F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### B3f (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｱｼﾞﾄ/B3F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B3F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### B4f (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｱｼﾞﾄ/B4F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/B4F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｻｶｷ (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｱｼﾞﾄ/ｻｶｷ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｻｶｷ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### ｼﾞﾑ (/yellow/Source/Isx/saveData/ﾀﾏﾑｼｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 1f (/yellow/Source/Isx/saveData/ﾁｬﾝﾋﾟｮﾝﾛｰﾄﾞ/1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 2f (/yellow/Source/Isx/saveData/ﾁｬﾝﾋﾟｮﾝﾛｰﾄﾞ/2F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 3f (/yellow/Source/Isx/saveData/ﾁｬﾝﾋﾟｮﾝﾛｰﾄﾞ/3f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ﾄｷﾜｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _2 (/yellow/Source/Isx/saveData/ﾄｷﾜｼﾃｨ/_2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ﾄｷﾜｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### ﾄｷﾜﾉﾓﾘ (/yellow/Source/Isx/saveData/ﾄｷﾜﾉﾓﾘ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾄｷﾜﾉﾓﾘ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ﾆﾋﾞｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ﾆﾋﾞｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ﾊﾅﾀﾞｼﾃｨ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _2 (/yellow/Source/Isx/saveData/ﾊﾅﾀﾞｼﾃｨ/_2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ﾊﾅﾀﾞｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
##### ﾌﾀｺﾞｼﾞﾏ (/yellow/Source/Isx/saveData/ﾌﾀｺﾞｼﾞﾏ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾌﾀｺﾞｼﾞﾏ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _1 (/yellow/Source/Isx/saveData/ﾏｻﾗﾀｳﾝ/_1)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_1</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _2 (/yellow/Source/Isx/saveData/ﾏｻﾗﾀｳﾝ/_2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_2</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### _3 (/yellow/Source/Isx/saveData/ﾏｻﾗﾀｳﾝ/_3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_3</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
####### _4 (/yellow/Source/Isx/saveData/ﾏｻﾗﾀｳﾝ/_4)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_4</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
####### _5 (/yellow/Source/Isx/saveData/ﾏｻﾗﾀｳﾝ/_5)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/_5</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .BAK, .gbp | 


---
####### ｶｸﾄｳ (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｶｸﾄｳ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｶｸﾄｳ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 10f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/10f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/10f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 11f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/11f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/11f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 1f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/1F)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1F</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 2f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/2f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/2f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 3f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/3f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/3f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 4f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/4f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/4f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 5f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/5f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/5f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 6f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/6f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/6f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 7f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/7f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/7f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
######## 8f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/8f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/8f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### 9f (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/9f)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/9f</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｻｶｷ (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/ｻｶｷ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｻｶｷ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ﾗｲﾊﾞﾙ (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾙﾌｶﾝﾊﾟﾆ/ﾗｲﾊﾞﾙ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ﾗｲﾊﾞﾙ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
###### ｼﾞﾑ (/yellow/Source/Isx/saveData/ﾔﾏﾌﾞｷｼﾃｨ/ｼﾞﾑ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ｼﾞﾑ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
YELLMONS | .ram | 
Yellmons | .gbp | 


---
### Temp (/yellow/Source/Temp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Temp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
COMMON | .ISO, .PRN | 
common | .dmg | 


---
### Bin (/yellow/Source/bin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
y990203 | .bin | 
y990203a | .bin | 
y990210 | .bin | 
y990215 | .bin | 
y990216 | .bin | 
y990217 | .bin | 


---
## Final (/yellow/final)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/final</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
CTYPE | .TXT | 
apse00-0 | .gb | 


---
## Test (/yellow/test)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/test</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
mvmsg | .bat | Windows Batch file for running 


---
### Data (/yellow/yellow/DATA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/DATA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALPHABET | .DAT | 
ANE | .CHR | 
BADGE | .DAT | 
BANKTOOL | .DAT | 
BASAN | .CHR | 
BDMONS | .DAT, .SYM | 
BOSS | .CHR | 
BOSS01 | .DAT | 
BOSS02 | .DAT | 
BOSS03 | .DAT | 
BOSS04 | .DAT | 
BOY | .CHR | 
B_GAUGE | .DAT | 
B_MARUC | .DAT | 
CAST_UP | .DAT | 
CHARA | .DAT | 
CHARI | .DAT | 
CHARIYA | .CHR | 
CHIKIN | .CHR | 
COINBIT | .DAT | 
COOK | .CHR | 
CYCLE | .CHR | 
DANIN | .CHR | 
DANPEI | .CHR, .DAT | 
DEALER00 | .DAT | 
DEALER01 | .DAT | 
DEALER02 | .DAT | 
DEALER03 | .DAT | 
DEALER04 | .DAT | 
DEALER05 | .DAT | 
DEALER06 | .DAT | 
DEALER07 | .DAT | 
DEALER08 | .DAT | 
DEALER09 | .DAT | 
DEALER10 | .DAT | 
DEALER11 | .DAT | 
DEALER12 | .DAT | 
DEALER13 | .DAT | 
DEALER14 | .DAT | 
DEALER15 | .DAT | 
DEALER16 | .DAT | 
DEALER17 | .DAT | 
DEALER18 | .DAT | 
DEALER19 | .DAT | 
DEALER20 | .DAT | 
DEALER21 | .DAT | 
DEALER22 | .DAT | 
DEALER23 | .DAT | 
DEALER24 | .DAT | 
DEALER25 | .DAT | 
DEALER26 | .DAT | 
DEALER27 | .DAT | 
DEALER28 | .DAT | 
DEALER29 | .DAT | 
DEALER30 | .DAT | 
DEALER31 | .DAT | 
DEALER32 | .DAT | 
DEALER33 | .DAT | 
DEALER34 | .DAT | 
DEALER41 | .DAT | 
DEALER42 | .DAT | 
DEALER43 | .DAT | 
DEALER44 | .DAT | 
DEALER45 | .DAT | 
DEALERAI | .DAT | 
DEALERNM | .DAT | 
DEALERTB | .DAT | 
DEMO_TIT | .DAT | 
DEPAGA | .CHR | 
DMONS | .DAT, .SYM | 
DUMMY | .CHR | 
ENCOUNT | .DAT | 
ENCOUNTB | .DAT | 
ENCOUNTR | .DAT | 
ENCOUNTY | .DAT | 
ENTHOU | .CHR | 
FIGHT | .DAT | 
FONT | .DAT | 
FUJI | .CHR | 
FUNANORI | .CHR | 
FUSHIGI | .CHR | 
GAMERM | .CHR | 
GAUGE | .DAT | 
GAUGE_B | .DAT | 
GSAN | .CHR | 
GSAN2 | .CHR | 
HANAHANA | .DAT | 
HERO | .DAT | 
HOTELM | .CHR | 
HOTELMAN | .CHR | 
HOTELW | .CHR | 
ITEMBIT | .DAT | 
ITEMGOLD | .DAT | 
ITEMMENU | .DAT | 
ITEMNAME | .DAT | 
JIBUN | .CHR | 
JIKI | .DAT | 
JIKI_BLU | .DAT | 
JI_BACK | .DAT | 
JUMPDAI | .DAT | 
JUNSAR | .CHR | 
KAKUTOU | .CHR | 
KANNA | .CHR | 
KASYA1 | .DAT | 
KASYA2 | .DAT | 
KASYA3 | .DAT | 
KASYA4 | .DAT | 
KEIBI | .CHR | 
KENKYUIN | .CHR | 
KIKUKO | .CHR | 
KITOUSHI | .CHR | 
KOJIRO | .CHR | 
KOMONO | .DAT | 
LOGOVER | .DAT | 
LOLITA | .CHR | 
LUCKY | .CHR | 
MAPJIKI | .DAT | 
MARUMON | .CHR | 
font_us | .dat | 


