---
layout: post
tags: 
- switch
- gameengines
- middleware
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
- middleware
editlink: /consoles/switch/SwitchGameEngines.md
updatedAt: '2022-09-23'
---

When reverse engineering games, one of the first things to find out is which engine the game is based on, this will save a considerable amount of time if it is based on a standard engine that is well documented.

This page will list only the confirmed engines for each game along with proof that the game was built with that engine, so the list won't contain every game, but any game on the list you can be confident it was based on the engine listed.

---
# Unity3d
<section class="postSection">
    <img src="/public/images/engines/UnrealEngineLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Unity3d has supported the Nintendo Switch right from launch and the dev tools are distributed by Nintendo themselves rather than by Unity. Developers need to have signed up for a Nintendo Developer account to be granted access to download the Unity plugin to allow exporting to Switch [^1].
</div>
</section>

## Reverse Engineering & Modding Unity Games
Unity3D games are compiled from .net byte code down to C++ when generating a Nintendo Switch version. This makes it harder than standard Unity reverse engineering as the generated native code is harder to decompile than .net byte code.

There are tools that support dumping the data from Unity NRO games such as the Il2CppDumper:
[https://github.com/Perfare/Il2CppDumper](https://github.com/Perfare/Il2CppDumper)

You should always backup **Managed/Metadata/global-metadata.dat** as it contains debug symbols for the game.

## Games built with Unity
The best way to check if a switch game is using the Unity engine is to look in the RomFs filesystem for a file called `Managed/Metadata/global-metadata.dat`, this contains debug symbols, the larger the file size the more symbols are included.

Game Name | Size of global-metadata.dat
---|---
30 in 1 Game Collection Vol 1 | 4.72 MB
Aces of the luftwaffe Squadron | 4.33 MB
Ary | 10.9 MB
Alex Kidd in Miracle World DX | 7.24 MB
Ash of Gods: Redemption | ?
Avicii Invector | 7.72 MB
Bendy and the Ink Machine | 5.57 MB
Black Future 88  | ?
Cat Quest | 6.97 MB
Cities Skylines | 7.25MB
Chicken Range | 4.87 MB
Children of Morta | ?
Cris Tales | 10.8 MB
Cruis’n Blast | 8.13 MB
Cyanide & Happiness Freakpocalypse | 6.83 MB
Empire of Sin | 8.75 MB
Evergate | 4.90 MB
Farmers Vs Zombies | 7.46 MB
Final Fantasy IX | 5.26
Final Vendetta | 4.25
Fitness Boxing | 5.77 MB
Foreclosed | 9.39 MB
Fort Boyard | 8.61 MB
Greak memories of Azur | 7.21 MB
Harvest Moon Light of Hope | ?
Horizon Chase | 5.30 MB
Human Fall Flat | ?
Instant Sports | 4.96 MB
Into the Dead 2 | 5.66 MB
John Wicks Hex | 8.98 MB
Kaze and the Wild Masks | 7.55 MB
KeWe | 10.1 MB
Kingdom Hearts Melody of Memory | 7.64 MB
Knights and Bikes | 8.15 MB
Kunai | 8.96 MB
Mountain Rescue Simulator | 8.09 MB
Nightmare Boy | 3.83 MB
Pokemon Brilliant Diamond | 11.4 MB
realMYST | 6.31 MB
RICO: London | 8.24 MB
Riot Civil Unrest | ?
RPG Maker MV | ?
Road 96 | 10.4 MB
Saturday morning RPG | ?
Sea of Solitude | 5.69 MB
Shadowgate | 6.23 MB
Snow Moto Racing Freedom | ?
Songbird Symphony | ?
Stranded Sails: Explorers of the cursed Islands | ?
Stranger Things 3 The Game | 10.6 MB
Streets of Red | 4.73 MB
Subnautica | 11.0 MB
Subnautica Below Zero | 12.3 MB
Super Epic: The Entertainment War | 8.07 MB
Supermarket shriek | 7.89 MB
Super Monkey Ball Banana Blitz HD | ?
To The Moon | 3.33 MB
Truck & Logistics Simulator | 9.54 MB
The Dark Crystal Age of Resistance Tactics | 13.4 MB
The Falconeer: Warrior Edition | 3.53 MB
The World Ends with You | ?
Two Point Campus | 10.1 MB
Two Point Hospital | 16.7 MB
Wasteland 2 | 19.6 MB
Wizard of Legend | 5.77 MB
Yooka laylee and the impossible lair | 10.1 MB
 
---
# Clickteam Fusion
Clickteam Fusion is a game creation tool created by Clickteam mainly for 2D games. Clickteam also provides a paid-for-service to convert games made in their engine to consoles including the Nintendo Switch [^2].

A list of the games known to run on the **Clickteam Fusion** engine are listed in the table below along with how we know they use the engine:

Game Name | Proof of engine
---|---
Aggelos | executable contains `E:\_Clickteam\Proffesional Services\Aggelo`
Odallus | executable contains `E:\_Clickteam\Proffesional Services\Degerati Projects\Odallu`
Oniken | executable contains `E:\_Clickteam\Proffesional Services\Degerati Projects\Oniken`

---
# Game Maker Studio
Game Maker is an easy to use 2D game creation software originally created by **Mark Overmars** and bought by **YoYo games**. In October 2018 they released an export module for **GameMaker Studio 2** to allow direct export into a Nintendo Switch executable.

A list of the games known to run on the **Game Maker Studio** engine are listed in the table below along with how we know they use the engine:

Game Name | Proof of engine
---|---
Undertale | string in main executable: `SDK MW+YoYoGames+GameMaker_Studio_2-11.1.2.132-Release`

---
# Haxe (Heaps.io)
There is only one Switch game so far that uses the Haxe engine and it is the excellent **Dead Cells**, well worth a purchase whenever it is on sale! 



Game Name | Proof of engine
---|---
Dead Cells | contains string `C:/Projects/haxeTools/lib/hashlink/src/alloc.c`


---
# MonoGame (XNA)
It is relatively rare to find a Switch game created with MonoGame but they do exist and you can find a few in the table below.


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
Balan Wonderworld | UE4CommandLine.txt
Bioshock remastered | `engine.u`
Close to the sun | UE4CommandLine.txt
Destroy all humans | UE4CommandLine.txt
Fast & Furious: Spy Racers | UE4CommandLine.txt
Gigantosaurus The Game | UE4CommandLine.txt
GRIP Combat racing | UE4CommandLine.txt
Hello Neighbour Hide and Seek  | UE4CommandLine.txt
Hot Wheels Unleashed | UE4CommandLine.txt
Jumanji | UE4CommandLine.txt
Kings Bounty 2 | UE4CommandLine.txt
Little Nightmares 2 | UE4CommandLine.txt
LiveALive | UE4CommandLine.txt
Man Eater | UE4CommandLine.txt
Monster JAM Crush it | UE4CommandLine.txt
Narcos Rise Of the Cartels | UE4CommandLine.txt
Remothered Tormented Fathers | UE4CommandLine.txt
Skully | UE4CommandLine.txt
Spirit of the North | UE4CommandLine.txt
Taxi Chaos | UE4CommandLine.txt
Tiny Metal Ultimate | UE4CommandLine.txt
Tony Hawks Pro Skater 1+2 | UE4CommandLine.txt
Tracks: Toybox Edition | UE4CommandLine.txt
Trials of Mana | UE4CommandLine.txt
Tropico 6 | UE4CommandLine.txt

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
Eastward | contains lua scripts
Hades | contains lua scripts
Metro 2033 redux | contains *.vfs0 files
Shantae and the Pirates Curse | contains *.vol files
The Binding of Isaac | Custom?
VRally 4 | contains *.paclog files


---
# References
[^1]: [Nintendo Switch - Unity Answers](https://answers.unity.com/questions/1384958/nintendo-switch.html) 
[^2]: [Clickteam - Clickteam Blog](https://www.clickteam.com/clickteam-blog?p=console-conversions)
[^3]: [Nintendo Switch Now Available | Blog | YoYo Games](https://www.yoyogames.com/blog/484/nintendo-switch-now-available)
