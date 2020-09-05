---
layout: post
tags: 
- switch
- gameengines
title: Nintendo Switch Game Engines
image:  /public/consoles/Nintendo Switch.png
thumbnail: /public/consoles/Nintendo Switch.png
permalink: /SwitchGameEngines
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Switch
    url: /switch
  - name: Nintendo Switch Game Engines
    url: #
recommend: 
- switch
- gameengines
editlink: /switch/SwitchGameEngines.md
---

When reverse engineering games, one of the first things to find out is which engine the game is based on, this will save a considerable amount of time if it is based on a standard engine that is well documented.

This page will list only the confirmed engines for each game along with proof that the game3 was built with that engine, so the list won't contain every game, but any game on the list you can be confident it was based on the engine listed.

# Unity3d
Unity3d has supported the Nintendo Switch right from launch and the dev tools are distributed by Nintendo themselves rather than by Unity. Developers need to have signed up for a Nintendo Developer account to be granted access to download the Unity plugin to allow exporting to Switch [^1].

## Reverse Engineering & Modding
Unity3D games are compiled from .net byte code down to C++ when generating a Nintendo Switch version. This makes it harder than standard Unity reverse engineering as the generated native code is harder to decompile than .net byte code.

There are tools than support dumping the data from Unity NRO games such as the Il2CppDumper:
https://github.com/Perfare/Il2CppDumper

You should always backup `Managed/Metadata/global-metadata.dat` as it contains debug symbols for the game.

## Games built with Unity

Game Name | Proof of engine
---|---
Ash of Gods: Redemption | `Managed/Metadata/global-metadata.dat`
Black Future 88  | `Managed/Metadata/global-metadata.dat`
Cat Quest | contains file `unity_builtin_extra`
Children of Morta | contains file `unity_builtin_extra`
Harvest Moon Light of Hope | contains file `unity_builtin_extra`
Horizon Chase | `Managed/Metadata/global-metadata.dat`
Human Fall Flat | contains file `unity_builtin_extra`
Mountain Rescue Simulator | `Managed/Metadata/global-metadata.dat`
Riot Civil Unrest | contains file `Managed/Metadata/global-metadata.dat`
RPG Maker MV | contains file `unity_builtin_extra`
Saturday morning RPG | contains file `unity_builtin_extra`
Snow Moto Racing Freedom | `Managed/Metadata/global-metadata.dat`
Songbird Symphony | `Managed/Metadata/global-metadata.dat`
Stranded Sails: Explorers of the cursed Islands | `Managed/Metadata/global-metadata.dat`
Super Monkey Ball Banana Blitz HD | contains file: `data.unity3d`
The World Ends with You | `Managed/Metadata/global-metadata.dat`
Two Point Hospital | `Managed/Metadata/global-metadata.dat`
 
---
# Clickteam Fusion
Clickteam Fusion is a game creation tool created by Clickteam mainly for 2D games. Clickteam also provide a paid-for-service to convert games made in their engine to consoles including the Nintendo Switch [^2].

## Games
Game Name | Proof of engine
---|---
Aggelos | executable contains `E:\_Clickteam\Proffesional Services\Aggelo`
Odallus | executable contains `E:\_Clickteam\Proffesional Services\Degerati Projects\Odallu`
Oniken | executable contains `E:\_Clickteam\Proffesional Services\Degerati Projects\Oniken`

---
# Game Maker
Game Maker is an easy to use 2D game creation software created by Mark Overmars and bought by YoYo games. In October 2018 they released an export module for GameMaker Studio 2 to allow direct export into a Nintendo Switch executable.

## Games
Game Name | Proof of engine
---|---
Undertale | string in main executable: `SDK MW+YoYoGames+GameMaker_Studio_2-11.1.2.132-Release`

---
# Haxe (Heaps.io)

## Games
Game Name | Proof of engine
---|---
Dead Cells | contains string `C:/Projects/haxeTools/lib/hashlink/src/alloc.c`


---
# MonoGame (XNA)

## Games
Game Name | Proof of engine
---|---
Timespinner | contains string: `D:/Projects/Switch/MonoGame.`

---
# Unreal Engine 4

## Games
Game Name | Proof of engine
---|---
Bioshock remastered | `engine.u`
GRIP Combat racing | `UE4CommandLine.txt`
Hello Neighbour Hide and Seek  | `UE4CommandLine.txt`
Jumanji | `UE4CommandLine.txt`
Monster JAM Crush it | `UE4CommandLine.txt`
Narcos Rise Of the Cartels | `UE4CommandLine.txt`
Trials of Mana | `UE4CommandLine.txt`

---
# Havok

## Games
Game Name | Proof of engine
---|---
Dark Souls | 

---
# Other Engines

Game Name | Details
---|---
ARMS | Possibly using parts of the Mario Kart engine?
The Binding of Isaac | 
Retro City Rampage | Custom
Skyrim | Creation Engine (GameBryo)
Wolfenstein II: The New Colossus | id Tech 6

---
# References
[^1]: [Nintendo Switch - Unity Answers](https://answers.unity.com/questions/1384958/nintendo-switch.html) 
[^2]: [Clickteam - Clickteam Blog](https://www.clickteam.com/clickteam-blog?p=console-conversions)
[^3]: [Nintendo Switch Now Available | Blog | YoYo Games](https://www.yoyogames.com/blog/484/nintendo-switch-now-available)
