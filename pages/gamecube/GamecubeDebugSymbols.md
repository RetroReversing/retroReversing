---
layout: post
tags: 
- gamecube
- symbols
- debug
- reverseengineering
title: Nintendo Gamecube Games with Debug Symbols
thumbnail: /public/consoles/Nintendo Gamecube.png
image: /public/N64/Gamecube games with debug symbols.jpg
permalink: /gamecube-debug-symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gamecube 
    url: /gamecube
  - name: Nintendo Gamecube Games with Debug Symbols
    url: #
recommend: gamecube
editlink: /gamecube/GamecubeDebugSymbols.md
updatedAt: '2020-04-25'
---
If you are interested in reverse engineering a Gamecube game, the first step is to find out if the game has its debug symbols available, this makes it much easier to reverse as all the functions will have nice friendly human readable names.

Gamecube game executable can come in a number of different formats, one is the standard .DOL file (short for dolphin) and the other is the ELF which is a standard format for Unix based systems.

If a Gamecube game disc has the elf file available then it is possible that it will have debug information embedded inside it, the easiest way to check is to look at the size or run the **strings** command on it.

# ELF Files

ELF files can contain many debug symbols such as the function, variable and sometimes even file names.

You can normally see the symbols by opening in a dissasembler such as Radare2 or IDA Pro.

## ELF Executables with Debug Symbols
The following table lists all the known Gamecube games that contain ELF files with debug symbols embedded inside.

Game Name | Elf File | Number of Symbols | Genre | Youtube
--- | --- | --- | --- | ---
007 - Agent Under Fire | Bond.elf | **8,519** | Action | 
007 - Everything or Nothing | boot.elf | **822** | Action | 
Backyard Sports - Baseball 2007 (USA) | Mpe.Gcn.Release.elf | **4,702** | Sport | 
Bakuten Shoot Beyblade 2002 - Nettou! Magne Tag Battle! (Japan) | main.elf | **1,921** | Action | 
Beyblade VForce - Super Tournament Battle | main.elf | **2,207** | Action | 
Big Air Freestyle | LoadAndParseELF.elf | **5,456** | Sport | 
Black & Bruised | GCNDefault.elf | **3,762** | ? | 
BloodRayne (United Kingdom) | Bloodrayne.elf | **4,340** | Action | 
Blowout (USA) | Blowout.elf | **4,151** | ? | 
Bratz - Rock Angelz (France) | Bratz_NGC_M.elf | **15,275** | ? | 
Crash Bandicoot - The Wrath of Cortex (USA) | crashwoc.elf | **2,685** | Platformer | 
Crash Bandicoot 4 - Sakuretsu! Majin Power (Japan) | crashwoc.elf | **2,684** | Platformer | 
Cubix Robots for Everyone - Showdown (USA) | CubixGameCube.elf | **5,433** | ? | 
Dark Summit (USA) | mob2gr.elf | **11,459** | ? | 
Densetsu no Quiz Ou Ketteisen (Japan) | main.elf | **3,674** | ? | 
Disney-Pixar Cars (USA) | CarsGCN.elf | **12,973** | ? | 
Disney-Pixar Finding Nemo (USA) (v1.00) | GCNemo.elf | **5,562** | ? | 
Disney-Pixar Ratatouille (France) | ratsgc_m.elf | **10,581** | ? |
Disney-Pixar The Incredibles - Rise of the Underminer | in2gc_m.elf | **13,876** | Action | 
Disney-Pixar The Incredibles (USA) | ingc_m.elf | **13,931** | | 
Disney-Pixar Die Unglaublichen (The Incredibles) (Germany) (Disc 1) | ingc_m.elf | **13,931** | Action | 
Disney's Piglet's Big Game (United Kingdom) | Piglet.elf | **7,951** | Action | 
Disney's PK - Out of the Shadows (USA) (En,Fr,De,It) | RM_DLL.elf | **7,372** | ? | 
Disney's Winnie the Pooh's Rumbly Tumbly Adventure (USA) (En,Fr,Es) | winnie.elf | **8,392** | | 
Doshin the Giant | DolphinDefault.elf | **3,047** | God Game
Duel Masters Nettou! Battle Arena (Japan) | main.elf | **2,306** | | 
Fairly OddParents, The - Breakin' da Rules (USA) | Gamecube.elf | **13,828** | |
Finding Nemo (United Kingdom) | GCNemo.elf | **5,600**
Freedom Fighters (United Kingdom) | startup_release.elf | **16,664** | Third-person shooter | 
Freestyle Metal X (USA) | FMX_CUBE_Publisher.elf | **5,836** | | 
Frogger Beyond | Frogger.elf | **4,561** | Action | https://www.youtube.com/watch?v=t0DptiBTWPI
GoldenEye - Rogue Agent (USA) (Disc 1) | GE2RDVD.ELF | **20,654** | FPS | 
Harry Potter and the Goblet of Fire (United Kingdom) | gof_f.elf | **19,843** (200MB!) | Action |
Hot Wheels - Velocity X (USA) | HotWheels.elf | **2,363** | | 
Hudson Selection Vol. 4 - Takahashi-Meijin no Boukenjima (Japan) | huos.elf | **2,298** | | 
Intellivision Lives! (USA) | GCNDefault.elf | **1,991** | | 
Interactive Multi-Game Demo Disk - July 2004 | GCNDefaultD.elf | **2,636** | Demo | 
Jeremy McGrath Supercross World (USA) | sx2002.elf | **4,186** | Sport | 
Kao the Kangaroo - Round 2 (USA) | kao2gcnF.elf | **8,201** | Platformer | 
King Arthur (USA) | Arthur.elf | **8,259** | | 
Legend of Spyro, The - A New Beginning | spyro06.elf | **12,813** | Platformer | 
Lemony Snicket's A Series of Unfortunate Events (United Kingdom) | main.elf | **10,416** | Platformer | 
Mario Smash Football | MarioSoccerP.elf | **7,879** | Sport | 
Medal of Honor - European Assault (Germany) | MOH4RDVD.ELF | **17,815** | FPS | 
Medal of Honor - Frontline (United Kingdom) | Moh2UK.elf | **4,778** | FPS | 
Medal of Honor - Rising Sun | MOH3RDVD.elf | **9,941** | FPS | 
Men in Black II - Alien Escape | MiiB_GCN_rtl.elf | **5,821** | Action | 
Mission - Impossible - Operation Surma | IMF_GC-Final.elf | **17,258** | Action | 
Monopoly - Mezase!! Daifugou Jinsei!! (Japan) | GRMJ0001.elf | **2,903** | Board | 
Mortal Kombat - Deadly Alliance | mk5gc_release.elf | **5,864** | Fighting | 
Namco Museum 50th Anniversary | ffe.elf | **4,979** | Retro | 
Need for Speed - Underground (Player's Choice) (United Kingdom) | Speed.elf | **10,162** | Racing | 
Need for Speed - Underground 2 | Speed.elf | **13,870** | Racing | 
Nickelodeon SpongeBob SquarePants - Creature from the Krusty Krab (United Kingdom) | SpongeBob_ngc_mfb.elf | **16,884** | Action | 
Nickelodeon SpongeBob SquarePants - The Movie (United Kingdom) | sb04gc_nm.elf | **8,005** | Action | 
Nickelodeon SpongeBob SquarePants in - Battle for Bikini Bottom | sbpeM.elf | **9,296** | Action | 
Nickelodeon Tak 2 - Der Stab der Traeume (Germany) (Disc 2) | BobTak2_German_Disc2.elf | **1,187** | | 
Nickelodeon The Adventures of Jimmy Neutron - Boy Genius (United Kingdom) | Jimmy.elf | **8,375** | | 
Pac-Man World 3 (USA) | PMA_GC_M.elf | **16,619** | Platfomer | 
Peter Jackson's King Kong - The Official Game of the Movie | jadegc_ia2cr.elf | **6,033** | Action | 
Scooby-Doo! Mystery Mayhem (United Kingdom) | engine_ret.elf | **5,849** | | 
Scooby-Doo! Unmasked | engine_ret.elf | **6,066** | | 
Spider-Man (Japan) | SMGDevS.elf | **9,711** | Action | 
Star Wars - The Clone Wars | Clonewars.elf | **8,173** | Action | 
Super Mario Strikers (Japan) | MarioSoccerR.elf | **8,350** | Sport | 
SX Superstar | Supercross.elf | **7,552** | Sport | 
Terminator 3 - The Redemption | t3game_gc.elf | **11,758** | Action | 
Tetris Worlds (Japan) | TWgr.elf | **7,252** | Puzzle | 
Top Gun - Ace of the Sky (Japan) | GCNDefault.elf | **2,866** | Action | 
Top Gun - Combat Zones (USA) | GCNDefault.elf | **2,866** | Action | 
TY the Tasmanian Tiger (USA) | TY_REL.elf | **7,701** | Platformer | 
TY the Tasmanian Tiger 2 - Bush Rescue (USA) | Ty2.elf |**15,792** | Platformer | 
TY the Tasmanian Tiger - Night of the Quinkan (USA) | Ty3.elf | **16,618** | Platformer | 
UFC - Throwdown | GCNDefault.elf | **2,648** | Fighting |
UFC2 Tapout Final Spec (Japan) | GCNDefault.elf | **2,682** | Sport | 
ZooCube (Japan) | ZooCube.elf | **8,167** | ? | 

---
# Link Maps (.MAP files)
Many Interactive Demo Discs contain link maps which are files that the linker generates and contains the function names. Also in retail games such as Animal Crossing and Final Fantasy Crystal Chronicals.
One good way of finding these is to do a string search of the GCM ISO files for ".text section layout".

Game Name | Map File | Number of Symbols | Genre | Youtube
--- | --- | --- | --- | ---
Animal Crossing (Australia) | foresta.map and static.map | ??? | RPG | 
Bratz - Forever Diamondz (United Kingdom) | Bratz_Gamecube Master Fast Build.MAP | ??? | ??? | 
FIFA Football 2005 (United Kingdom) | fifa_z.map | ??? | Sport | 
Final Fantasy - Crystal Chronicles | dvd/map/stg009/game.MAP | ? | RPG | 
Hot Wheels - World Race (United Kingdom) | HotwheelsFCDpal.MAP | ? | Racing | 
Jeremy McGrath Supercross World | sx2002.MAP | ? | Sport | 
Legend of Zelda, The - The Wind Waker (Korea) | f_pc_profile_lst.MAP plus others | ?? | Action | 
Mario Kart - Double Dash!! | debugInfoS.MAP | ?? | Racing | 
Mario Smash Football | MarioSoccerD.MAP, MarioSoccerP.MAP, MarioSoccerR.MAP, MarioSoccerZ.MAP | ?? | Sport | 
Nickelodeon Tak 2 - Der Stab der Traeume (Germany) (Disc 2) | BobTak2_German_Disc2.MAP | ?? | ? | 
Pikmin | build.MAP | ?? | God Game | 
Pikmin 2 demo in Multi-Game Kiosk Demo Disc 17 (USA) | pikmin2?P.MAP | ?? | God Game | 
Scooby-Doo! Mystery Mayhem (United Kingdom) | engine_ret.MAP | ?? | Action | 
Super Mario Sunshine | marioEU.MAP | ?? | Platformer | 
Sims 2, The (USA) | u2_ngc_debug.map | ?? | Simulation | 
UEFA Champions League 2004-2005 (United Kingdom) | fifa_z.MAP | ?? | Sport | 
Ultimate Spider-Man | symbolgc-final.MAP | ?? | Action | 
Zelda no Densetsu - Twilight Princess (Japan) | frameworkF.MAP | ?? | Action | 

---
# Prototype Games with Debug Symbols
Prototype games are even more likely to contain debug symbols as they are intended for either testing or journalistic usage, thus having the symbols available would help the developers fix bugs before the final retail release. The table below is an incomplete list of prototypes that have debug symbols, if you know any more please let us know!

Game Name | Map File | Number of Symbols | Genre | Notes
--- | --- | --- | --- | ---
NFS Underground (Preview 10-09-2003 Console+ 26669 - 010) | Speed.elf | **9,604** | Racing | Uses SNSystems Library + Debugger

---
# Other Notes
This section contains notes about other games not listed above.

## Pikmin 2
Thanks to Nikki (@NWPlayer123) on Twitter we now know that the **pikmin2?P.MAP** file in the retail Pikmin 2 release is full of junk data, as Nintendo had a tool to scrub the debug map file but the file entry on the disk still remained.

The good news is that there are 2 Demo Discs of Pikmin that contain a valid Pikmin 2 symbol map, as mentioned in this twitter thread by Nikki:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">note to self: the demo disc with the Pikmin 2 US symbol map is D78E01, matches about 96% of retail <a href="https://t.co/Sbr05XKQvl">pic.twitter.com/Sbr05XKQvl</a></p>&mdash; Nikki™ 🌹 (@NWPlayer123) <a href="https://twitter.com/NWPlayer123/status/1414757863495503876?ref_src=twsrc%5Etfw">July 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Nintendo Puzzle Collection
Nintendo Puzzle Collection (Japan) contains an ARM executable for running on the GBA that has developer symbols in it called: ponagb2m_client.elf (Panel de Pon game?).
