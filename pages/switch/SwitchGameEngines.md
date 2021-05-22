---
layout: post
tags: 
- switch
- gameengines
title: Nintendo Switch Game Engines
image:  /public/images/switch/Nintendo Switch Game Engines.jpg
twitterimage: https://www.retroreversing.com/public/images/switch/Nintendo Switch Game Engines.jpg
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
updatedAt: '2020-09-05'
---

When reverse engineering games, one of the first things to find out is which engine the game is based on, this will save a considerable amount of time if it is based on a standard engine that is well documented.

This page will list only the confirmed engines for each game along with proof that the game3 was built with that engine, so the list won't contain every game, but any game on the list you can be confident it was based on the engine listed.

# Unity3d
<section class="postSection">
    <img src="/public/images/engines/UnrealEngineLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Unity3d has supported the Nintendo Switch right from launch and the dev tools are distributed by Nintendo themselves rather than by Unity. Developers need to have signed up for a Nintendo Developer account to be granted access to download the Unity plugin to allow exporting to Switch [^1].
</div>
</section>

## Reverse Engineering & Modding
Unity3D games are compiled from .net byte code down to C++ when generating a Nintendo Switch version. This makes it harder than standard Unity reverse engineering as the generated native code is harder to decompile than .net byte code.

There are tools than support dumping the data from Unity NRO games such as the Il2CppDumper:
[https://github.com/Perfare/Il2CppDumper](https://github.com/Perfare/Il2CppDumper)

You should always backup **Managed/Metadata/global-metadata.dat** as it contains debug symbols for the game.

## Games built with Unity
The best way to check if a switch game is using the Unity engine is to look in the RomFs filesystem for a file called `Managed/Metadata/global-metadata.dat`, this contains debug symbols, the larger the file size the more symbols are included.

Game Name | Proof of engine
---|---
Aces of the luftwaffe Squadron | global-metadata.dat (4.33 MB)
Ash of Gods: Redemption | global-metadata.dat
Avicii Invector | global-metadata.dat (7.72 MB)
Black Future 88  | global-metadata.dat
Cat Quest | global-metadata.dat (6.97 MB)
Children of Morta | contains file `unity_builtin_extra`
Fitness Boxing | global-metadata.dat (5.77 MB)
Harvest Moon Light of Hope | contains file `unity_builtin_extra`
Horizon Chase | global-metadata.dat (5.30 MB)
Human Fall Flat | contains file `unity_builtin_extra`
Into the Dead 2 | global-metadata.dat (5.66 MB)
John Wicks Hex | global-metadata.dat (8.98 MB)
Mountain Rescue Simulator | global-metadata.dat (8.09 MB)
Riot Civil Unrest | global-metadata.dat
RPG Maker MV | contains file `unity_builtin_extra`
Saturday morning RPG | contains file `unity_builtin_extra`
Snow Moto Racing Freedom | global-metadata.dat
Songbird Symphony | global-metadata.dat
Stranded Sails: Explorers of the cursed Islands | global-metadata.dat
Super Epic: The Entertainment War | global-metadata.dat (8.07 MB)
Super Monkey Ball Banana Blitz HD | contains file: `data.unity3d`
Truck & Logistics Simulator | global-metadata.dat (9.54 MB)
The Dark Crystal Age of Resistance Tactics | global-metadata.dat (13.4 MB)
The World Ends with You | global-metadata.dat
Two Point Hospital | global-metadata.dat (16.7 MB)
 
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
There is only one Switch game so far that uses the Haxe engine and it is the excellent **Dead Cells**, well worth a purchase whenever it is on sale! 

## Games
Game Name | Proof of engine
---|---
Dead Cells | contains string `C:/Projects/haxeTools/lib/hashlink/src/alloc.c`


---
# MonoGame (XNA)
It is relatively rare to find a Switch game created with MonoGame but they do exist and you can find a few in the table below.

## Games
Game Name | Proof of engine
---|---
Timespinner | contains string: `D:/Projects/Switch/MonoGame.`

---
# Unreal Engine 4
<section class="postSection">
<img src="/public/images/engines/UnrealEngineLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Unreal Engine was developed by [Epic Games](https://www.epicgames.com/) initially for their game `Unreal` but later evolved to become a product in itself with many 3rd party games studios taking advantage of its power.
</div>
</section>

## Games
You can detect Unreal Engine games on the Nintendo switch very easily by looking at the root of the ROMFS section and if it contains a file called **UE4CommandLine.txt** then it is likely to be an UnrealEngine 4 game.

Game Name | Proof of engine
---|---
9 Monkeys of Shaolin | UE4CommandLine.txt
Bioshock remastered | `engine.u`
Gigantosaurus The Game | UE4CommandLine.txt
GRIP Combat racing | UE4CommandLine.txt
Hello Neighbour Hide and Seek  | UE4CommandLine.txt
Jumanji | UE4CommandLine.txt
Monster JAM Crush it | UE4CommandLine.txt
Narcos Rise Of the Cartels | UE4CommandLine.txt
Remothered Tormented Fathers | UE4CommandLine.txt
Skully | UE4CommandLine.txt
Trials of Mana | UE4CommandLine.txt

---
# Havok
<section class="postSection">
<img src="/public/images/engines/HavokLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Havok is a popular physics engines that has been ported to the Nintendo switch.
</div>
</section>

## Games

Game Name | Notes
---|---
Dark Souls | 

---
# MT Framework (in-house Capcom engine)

[MT Framework - Wikipedia](https://en.wikipedia.org/wiki/MT_Framework)

Game Name | Details
---|---
Mega Man 11 | contains *.arc files for compressed assets
Ultra Street Fighter II: The Final Challengers | contains *.arc files

---
# Other Engines
The table below has other engines used for individual games, most are internal and not available to the public.

Game Name | Details
---|---
ARMS | Possibly using parts of the Mario Kart engine?
Payday 2 | Diesel 2.0
Rayman Legends | UbiArt
Retro City Rampage | Vblank Engine
Skyrim | Creation Engine (GameBryo)
Streets of rage 4 | in-house Guard Crush Engine
Wolfenstein II: The New Colossus | id Tech 6


---
# Unknown (Custom?) Engines

Game Name | Details
---|---
Azure striker Gunvolt pack | contains *.irarc files
Borderlands | contains *.xxx (WillowGame?)
Metro 2033 redux | contains *.vfs0 files
Shantae and the Pirates Curse | contains *.vol files
The Binding of Isaac | Custom?
VRally 4 | contains *.paclog files


---
# References
[^1]: [Nintendo Switch - Unity Answers](https://answers.unity.com/questions/1384958/nintendo-switch.html) 
[^2]: [Clickteam - Clickteam Blog](https://www.clickteam.com/clickteam-blog?p=console-conversions)
[^3]: [Nintendo Switch Now Available | Blog | YoYo Games](https://www.yoyogames.com/blog/484/nintendo-switch-now-available)
