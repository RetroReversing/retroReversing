---
layout: post
tags: 
- ps1
- reverseengineering
title: Playstation 1 Games with Debug Symbols
thumbnail: /public/consoles/Sony Playstation.png
image: /public/consoles/Sony Playstation.png
permalink: /ps1-debug-symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: Playstation 1 Games with Debug Symbols
    url: #
recommend: ps1
editlink: /ps1/PS1Symbols.md
---

I have never seen a PS1 executable bigger than 2mb, normally if they require more code they split it into multiple executables. 
With memory being so precious it would be unlikely a developer would forget to strip the debug symbols from an executable. 
However it is possible to find symbols included on the disk in various formats, one of those formats is SYM:


# SYM Symbol Files

## Games with SYM Symbol file

Game Name | Symbol File
--- | --- 
Brunswick Circuit Pro Bowling | THQB2.SYM
Castrol Honda Superbike Racing | BIKE.SYM
CyberTiger | GOLF.SYM
Disney's 101 Dalmatians 2 | /DATA/MAIN.SYM
Divide The Enemies Within | /SYMBOL/GAME.SYM
Dora the Explorer - Barnyard Buddies | /DATA/MAIN.SYM
Jackie Chan Stuntmaster | /GAME_REL.SYM
Team Losi RC Racer | /SYMS/NEW.SYM
Who Wants to Be a Millionaire 3rd Edition | /MIL3.SYM
Driver 2 (Spanish Version Disc 1) | /SPANISH.SYM 

---

# MAP Files 

## Linker Map file Format
The .MAP file created by a c/c++ linker such as LD follows the format:
```
Start     Stop   Length      Obj Group            Section name
80010000 800179C3 000079C4 80010000 text             .rdata
...
Program entry point : 00000000
Address  Names alphabetically
8008CEF4  CD_ready
```
These files contain all the information you need to get the full debug symbols back for a game! You just need to parse them and add them to your dissassembler of choice (e.g Radare2 or IDA Pro)

## Games with Linker Map file

Game Name | Map File
--- | --- 
Brunswick Circuit Pro Bowling 2 | THQB2R.MAP
Castrol Honda Superbike Racing | BIKE.MAP
Disney's 101 Dalmatians 2 | /DATA/MAIN.MAP
Dora the Explorer - Barnyard Buddies | /DATA/MAIN.MAP
Knockout Kings | /DATA/MAIN.MAP
NCAA March Madness | Located inside IGBIN.BIN
SnoCross Championship Racing | Located inside SNOW.IMG
True Pinball | Contains PINBALL.MAP but doesn't seem to contain function names

---

# Games with Partial Source Code

* Beatmania Best Hits has a near-final copy of Beatmania 5th Mix's source code [^1]


Other Interesting:
* Disney GoofysFunHouse contains string - "dbugpsx /h /epsx.cpe /m-  psx.sym"
* Chill (Europe) seems to have lots of source code in it! incide CDFILLER, includes C files!! Might just be the names of the files tho…
* Digimon World contains quite a lot of what look like symbols in MOV_REL.BIN
* DivideThe EnemiesWithin contains GAME.SYM and looks like it uses C++!
* DoraTheExplorer has MAIN.SYM
* Frogger2 seems to contain Makefiles
* JackieChanStuntmaster contains GAME_REL.SYM!!!
* KnockoutKings contains MAIN.MAP with address name mapping
* NBA Shoot Out seems to have some source code
* TwistedMetal Small Brawl may contain a .sym file zipped inside the /CRG/TWG.PSX file due to string "ps1burnPrc2/tmsb.symPK" where PK is the ZIP file header

# References
[^1]: https://assemblergames.com/threads/retail-playstation-1-games-with-debug-symbols.68587/#post-965072
