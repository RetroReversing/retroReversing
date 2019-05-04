---
layout: post
tags: 
- wiiU
- gameengines
title: WiiU eShop Game Engines
image:  /public/wiiU/WiiUeShopGameEngines.jpg
thumbnail: /public/consoles/Nintendo WiiU.png
permalink: /WiiUeShopEngines
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: WiiU eShop Game Engines
    url: #
recommend: wiiU
editlink: /wiiU/WiiUGameEngines.md
---

# 3rd Party Game Engines
Most games nowadays are developed using a 3rd party game engine instead of building their own in-house game engine from scratch due to time and budget constraints. 

It is considerably cheaper licensing a game engine such as Unity compared to spending money paying developers to write something that may not even end up as good.  

## Chrowdren Engine
List of Games for wiiU eShop:
* Angry Video Game Nerd Adventures
* Knytt Underground
* Freedom Planet

---

## BluePoint Engine
It could be argued that this is more of an in-house engine as it is mostly used by BluePoint games, but there are enough other games companies using this engine to keep it in this category.

Games:
* Batman Arkham Origins Blackgate [^1]

---
## cocos2d-x
The developer `Frogmind` used a very heavily customised version of the iphone game engine `cocos2d-x` to create the game Badland.

You can normally tell if a game is developed with COCOS2D as it makes heavy use of .plist files.

Full list of WiiU Cocos2d-x games:
* Badland
* Chronicles of Teddy Harmony of Exidus
* Squids Odyssey

---
## Havok Vision Game Engine
In order to find if a game uses this engine decompress the .rpx file and if it has the `showHavokBuild` symbol it is likely to be built using this engine.

Known wiiU Games that use the vision engine:
* Giana Sisters Twisted Dreams
* How to Survive
* Tengami

---
## Nintendo Web Framework
The Nintendo Web Framework was by far the easiest way to develop a game or app for the wiiU. 
It was an HTML5 framework that has an interface for the wiiU controllers.
 
We have full coverage of the NWF framework here: [Wii U Nintendo Web Framework · RetroReversing](https://www.retroreversing.com/WiiUNWF)

---
## Unity Engine
The Unity engine was by far the most popular game engine for wiiU eShop developers, this was helped by Nintendo's official support of the engine [^9].

There was over 200 wiiU eShop games developed with the Unity engine, we have a complete list on the wiiU Unity section of the site here: [Unity Game Engine Games on wiiU eShop · RetroReversing](https://www.retroreversing.com/WiiUUnity)

---
## Unreal Engine
Surprisingly there are only 2 Unreal Engine games that were released on the wiiU eShop:
* LOST REAVERS
* Master Reboot

Clearly the Official support by Nintendo of the Unity Engine allowed Unity to dominate the wiiU eShop market and Unreal missed out.

---
# Custom in-house Game Engines
Some game developers prefer to use their own in-house game engine rather than use an off-the-shelf game engine such as Unity or Unreal.  This page will cover some of the most used custom engines and the details we know about them.

## Shin'en Multimedia Custom Engine (The C Engine)
Used by `Shin'en Multimedia` for the following wiiU games:
* Art of Balance (Ported from WiiWare and then to 3DS & PS4)
* Nano Assault Neo
* Fast Racing Neo

The have provided some details about their engine in an interview [Shin’en Multimedia Mega Interview: Harnessing the Wii U power! - Dromble](https://www.dromble.com/2012/11/03/shinen-multimedia-mega-interview-harnessing-the-wii-u-power/).

They claim to have used the same engine in 17 games which is impressive.

### 3D Model Format
The 3d objects seem to the a file extension of .w3d, which could be the format from Shockwave3D.


---
## Ginkgo Engine (Broken Rules' in-house engine)
Used in the game Chasing Aurora and can be seen in a video by one of the developers:
[(204) Let's Make Chasing Aurora: #1 Slippery Peak - YouTube](https://www.youtube.com/watch?v=SiZTWOZG6ws)

--- 
## Zen Studios Engine
Zen Studios have developed a custom proprietary game engine mostly used for their pinball games on the WiiU such as:
* Zen Pinball 2
* Star Wars Pinball

It was also used for their `CastleStorm` game which was more of a tower defence type game. So its not only suitable for pinball type games.

---
## UbiArt Engine

WiiU Games:
* CHILD of LIGHT
* Rayman Legends: Challenges App

--- 
## EngineBlack Wayforward Game Engine
The EngineBlack Game Engine is used by the developers Wayforward to create beautiful 2D platformers, it has been ported to multiple platforms but the wiiU eShop games that use this engine are:
Uses lua scripting
* DuckTales: Remastered
* Shantae and the Pirate's Curse
* Shantae: Half-Genie Hero
* Shantae Risky's Revenge Director's Cut
* Mighty Switch Force! 
* Mighty Switch Force! 2

### Features
* LUA scripting

### Modding
Tool to extract the game’s .pak files is available: https://forum.xentax.com/viewtopic.php?f=32&t=10687 

---
## DrinkBox Engine

Used for:
* Guacamelee! Super Turbo Championship Edition
* Severed
[Gamasutra - Postmortem: DrinkBox Studios' Guacamelee!](http://www.gamasutra.com/view/feature/200658/postmortem_drinkbox_studios_.php?page=5)

--- 
## Nicalis Game Engine
Used in:
* 1001 Spikes
* The Binding of Isaac Rebirth

---
## BIT.TRIP engine
WiiU Games built with this engine:
* BIT.TRIP Presents... Runner2 Future Legend of Rhythm Alien
It looks very little has been discovered about this game engine so far: [BIT.TRIP RUNNER - XeNTaX](https://forum.xentax.com/viewtopic.php?t=8646)

---
## Cobra - Frontier’s Game Engine
Used for `Coaster Crazy Deluxe` on the WiiU, it was built using the same engine as `Zoo Tycoon` [^3].

More information can be found on their official website [Technology - Frontier](https://www.frontier.co.uk/node/639)

---
## Dakko Dakko Game Engine
Wii U games using this engine:
* Scram Kitty and his Buddy on Rails

---
## Nucleus (Curve Digital Engine)
Nucleas is the name of the game engine that was custom developed by Curve Digital [^6].

Wii U games that were built using this engine:
* Nova-111
* OlliOlli
* Stealth Inc 2 A Game of Clones
* Lone Survivor
* The Swapper
* Ultratron

---
## Storm3D Engine (FrozenByte)
The Storm3D engine is the name of the in-house game engine used by Frozenbyte [^7].

Source code for some of this engine was available as part of a humble bundle [^8].

WiiU games that were built on this engine:
* Trine 2 Director's Cut
* Trine Enchanted Edition

---
## Two Tribes game engine
Wii U Games made using the engine:
* EDGE
* RUSH
* Swords & Soldiers
* Toki Tori
* Toki Tori 2

---
## Wii U Panorama View
Basically the same app/game but with different assets but that technically makes it an engine. 
The list of wiiU games/apps are:
* Wii U Panorama View Birds in Flight
* Wii U Panorama View Carnival!
* Wii U Panorama View Double-Decker Tour
* Wii U Panorama View Rickshaw Around Kyoto
* Wii U Panorama View Trailer

---

## Emulated Games
Ignoring the virtual console which are all emulated games, a few eShop games are retro games running on an emulator compiled for wiiU.

Known games with emulator:
* Dungeons & Dragons Chronicles of Mystara (mana emulator)
* NES REMIX 1/2

---
## Other games with custom engines
* Amiibo Touch & Play Nintendo Classics Highlights
* Another World 20th Anniversary Edition 
* Art Academy SketchPad
* Axiom Verge
* Blasting Agent Ultimate Edition
* Brave Tank Hero
* Canvaleon
* Citizens of Earth
* Cloudberry Kingdom
* Cubit The Robot HD
* Defend your Crypt
* Don't Starve Giant Edition (Uses C++ and Lua [^4])
* Dr. Luigi
* Dual Core
* Family Tennis SP
* Fist of the North Star Ken's Rage 2
* Flowerworks HD Follie's Adventure
* Gunman Clive HD Collection
* Human Resource Machine
* Inside My Radio
* Kung Fu Rabbit
* Little Inferno
* Minecraft Wii U Edition
* Mutant Mudds Super Challenge
* Pier Solar and the Great Architects
* PixelJunk Monsters
* Plantera
* Project Zero Maiden of Black Water (Same engine as Dead or Alive 5 [^5]) 
* Puddle (has actionscript files)
* Pullblox World
* Pure Chess
* Spin the Bottle Bumpie's Party (has swf files)
* Splatoon Testfire
* Spot The Differences Party! (.bfilm textures)
* Star Fox Guard Special Demo Version
* Star Fox Zero The Battle Begins + Training
* SteamWorld Dig
* SteamWorld Heist
* Super Meat Boy
* Swords & Soldiers II (is this on the Two Tribes game engine?)
* TANK! TANK! TANK!
* The Cave (lua, debug symbols)
* The Mysterious Cities of Gold Secret Paths (debug symbols)
* TNT Racers (debug symbols)
* Turtle Tale
* Typoman
* Unepic EnjoyUp Games
* WICKED MONSTERS BLAST
* Wii KARAOKE U

# References
[^1]: http://bluepointgames.com/bluepoint-engine-batman-arkham-origins-blackgate/
[^2]: https://forum.xentax.com/viewtopic.php?t=8646 
[^3]: https://nintendoeverything.com/interview-frontier-developments-talks-coaster-crazy-deluxe-lostwinds-possibility-of-3ds-support-and-more/ 
[^4]: https://forums.kleientertainment.com/forums/topic/80262-which-game-engine-build-dont-starve-unity3d-or-self-build-engine/ 
[^5]: https://fatalframe.fandom.com/wiki/Fatal_Frame:_Maiden_of_Black_Water 
[^6]: https://www.reddit.com/r/wiiu/comments/2kory6/we_are_curve_digital_developers_of_stealth_inc_2/ 
[^7]: https://www.moddb.com/engines/storm3d 
[^8]: https://github.com/Frozenbyte/Jack-Claw 
[^9]: https://developer.nintendo.com/tools 
