---
layout: post
tags: 
- gamecube
- symbols
- debug
- reverseengineering
title: Nintendo Gamecube Games with Debug Symbols
thumbnail: /public/consoles/Nintendo Gamecube.png
image: /public/consoles/Nintendo Gamecube.png
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
---

Gamecube game executable can come in a number of different formats, one is the standard .DOL file (short for dolphin) and the other is the ELF.



# ELF Files

ELF files can contain many debug symbols such as the function, variable and sometimes even file names.

You can normally see the symbols by opening in a dissasembler such as Radare2 or IDA Pro.

## ELF Executables with Debug Symbols

Game Name | Elf File | Number of Symbols | Genre | Youtube
--- | --- | --- | --- | ---
007 - Agent Under Fire | Bond.elf | **8,519** | Action | 
007 - Everything or Nothing | boot.elf | **822** | Action | 
Bakuten Shoot Beyblade 2002 - Nettou! Magne Tag Battle! (Japan) | main.elf | **1,921** | Action | 
Beyblade VForce - Super Tournament Battle | main.elf | **2,207** | Action | 
Big Air Freestyle | LoadAndParseELF.elf | **5,456** | Sport | 
Black & Bruised | GCNDefault.elf | **3,762** | ? | 
BloodRayne (United Kingdom) | Bloodrayne.elf | **4,340** | Action | 
Crash Bandicoot 4 - Sakuretsu! Majin Power (Japan) | crashwoc.elf | **2,684** | Platformer | 
Disney-Pixar Die Unglaublichen (The Incredibles) (Germany) (Disc 1) | ingc_m.elf | **13,931** | Action | 
Disney's Piglet's Big Game (United Kingdom) | Piglet.elf | **7,951** | Action | 
Doshin the Giant | DolphinDefault.elf | **3,047** | God Game
Fairly OddParents, The - Breakin' da Rules (USA) | Gamecube.elf | **13,828** | |
Finding Nemo (United Kingdom) | GCNemo.elf | **5,600**
Freedom Fighters (United Kingdom) | startup_release.elf | **16,664** | Third-person shooter | 
Freestyle Metal X (USA) | FMX_CUBE_Publisher.elf | **5,836** | | 
Frogger Beyond | Frogger.elf | **4,561** | Action | https://www.youtube.com/watch?v=t0DptiBTWPI
Harry Potter and the Goblet of Fire (United Kingdom) | gof_f.elf | **19,843** (200MB!) | Action |
Interactive Multi-Game Demo Disk - July 2004 | GCNDefaultD.elf | **2,636** | Demo | 
Legend of Spyro, The - A New Beginning | spyro06.elf | **12,813** | Platformer | 
Les Désastreuses Aventures des Orphelins Baudelaire | main.elf | **10,416** | Platformer | 
Medal of Honor - Rising Sun | MOH3RDVD.elf | **9,941** | FPS | 
Mission - Impossible - Operation Surma | IMF_GC-Final.elf | **17,258** | Action | 
Namco Museum 50th Anniversary | ffe.elf | **4,979** | Retro | 
Need for Speed - Underground (Player's Choice) (United Kingdom) | Speed.elf | **10,162** | Racing | 
Nickelodeon SpongeBob SquarePants - Creature from the Krusty Krab (United Kingdom) | SpongeBob_ngc_mfb.elf | **16,884** | Action | 
Super Mario Strikers (Japan) | MarioSoccerR.elf | **8,350** | Sport | 
SX Superstar | Supercross.elf | **7,552** | Sport | 
Tetris Worlds (Japan) | TWgr.elf | **7,252** | Puzzle | 
UFC - Throwdown | GCNDefault.elf | **2,648** | Fighting | 
ZooCube (Japan) | ZooCube.elf | **8,167** | ? | 

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
Pikmin | build.MAP | ?? | God game | 
Scooby-Doo! Mystery Mayhem (United Kingdom) | engine_ret.MAP | ?? | Action | 
Super Mario Sunshine | marioEU.MAP | ?? | Platformer | 
UEFA Champions League 2004-2005 (United Kingdom) | fifa_z.MAP | ?? | Sport | 
Ultimate Spider-Man | symbolgc-final.MAP | ?? | Action | 
Zelda no Densetsu - Twilight Princess (Japan) | frameworkF.MAP | ?? | Action | 


# Prototype Games with Debug Symbols

Game Name | Map File | Number of Symbols | Genre | Notes
--- | --- | --- | --- | ---
NFS Underground (Preview 10-09-2003 Console+ 26669 - 010) | Speed.elf | **9,604** | Racing | Uses SNSystems Library + Debugger

# Other Notes

The Sims 2 Also has multiple .MAP files which have been nulled with 0-bytes.

Pikmin2 has a file called `pikmin2*P.MAP` which could be a compressed or encrypted debugger map file, but thats mainly a guess because the previous Pikmin has a plain-text debugger .MAP file. The * depends the Region U for US, P for PAL and J for Japan
