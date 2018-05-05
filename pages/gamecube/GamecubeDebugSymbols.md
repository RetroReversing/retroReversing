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
Les Désastreuses Aventures des Orphelins Baudelaire | main.elf | **10,416** | Platformer | 
Disney-Pixar Die Unglaublichen (The Incredibles) (Germany) (Disc 1) | ingc_m.elf | **13,931** | Action | 
Disney's Piglet's Big Game (United Kingdom) | Piglet.elf | **7,951** | Action | 
Doshin the Giant | DolphinDefault.elf | **3,047** | God Game
Finding Nemo (United Kingdom) | GCNemo.elf | **5,600**
Freedom Fighters (United Kingdom) | startup_release.elf | **16,664** | Third-person shooter | 
Frogger Beyond | Frogger.elf | **4,561** | Action | https://www.youtube.com/watch?v=t0DptiBTWPI

# Link Maps (.MAP files)
Many Interactive Demo Discs contain link maps which are files that the linker generates and contains the function names. Also in retail games such as Animal Crossing and Final Fantasy Crystal Chronicals.
One good way of finding these is to do a string search of the GCM ISO files for ".text section layout".

Game Name | Map File | Number of Symbols | Genre | Youtube
--- | --- | --- | --- | ---
Animal Crossing (Australia) | foresta.map and static.map | ??? | RPG | 
FIFA Football 2005 (United Kingdom) | fifa_z.map | ??? | Sport | 
Final Fantasy - Crystal Chronicles | dvd/map/stg009/game.MAP | ? | RPG | 
Hot Wheels - World Race (United Kingdom) | HotwheelsFCDpal.MAP | ? | Racing | 
Jeremy McGrath Supercross World | sx2002.MAP | ? | Sport | 
Mario Smash Football | MarioSoccerD.MAP, MarioSoccerP.MAP, MarioSoccerR.MAP, MarioSoccerZ.MAP | ?? | Sport | 
Nickelodeon Tak 2 - Der Stab der Traeume (Germany) (Disc 2) | BobTak2_German_Disc2.MAP | ?? | ? | 
Pikmin | build.MAP | ?? | God game | 
Scooby-Doo! Mystery Mayhem (United Kingdom) | engine_ret.MAP | ?? | Action | 
Super Mario Sunshine | marioEU.MAP | ?? | Platformer | 
UEFA Champions League 2004-2005 (United Kingdom) | fifa_z.MAP | ?? | Sport | 
Ultimate Spider-Man | symbolgc-final.MAP | ?? | Action | 


# Prototype Games with Debug Symbols

Game Name | Map File | Number of Symbols | Genre | Notes
--- | --- | --- | --- | ---
NFS Underground (Preview 10-09-2003 Console+ 26669 - 010) | Speed.elf | **9,604** | Racing | Uses SNSystems Library + Debugger

# Other Notes

Mario Kart - Double Dash!! contains a file called debugInfoS.MAP which would have presumably contained debug symbols but sadly it doesn't contain any data (nulled with 0-bytes).

The Sims 2 Also has multiple .MAP files which have been nulled with 0-bytes.

Pikmin2 has a file called `pikmin2*P.MAP` which could be a compressed or encrypted debugger map file, but thats mainly a guess because the previous Pikmin has a plain-text debugger .MAP file. The * depends the Region U for US, P for PAL and J for Japan
