Wii U eShop Game Engines
---
layout: post
tags: 
- wiiU
title: Wii Game Engines
image:  /public/consoles/Nintendo WiiU.png
thumbnail: /public/consoles/Nintendo WiiU.png
permalink: /WiiUCustomEngines
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: Wii Custom Engines
    url: #
recommend: wiiU
editlink: /wiiU/WiiUGameEngines.md
---

# 3rd Party Game Engines
Most games nowadays are developed using a 3rd party game engine instead of building their own in-house game engine from scratch due to time and budget constraints. 

It is considerably cheaper licensing a game engine such as Unity compared to spending money paying developers to write something that may not even end up as good.  

## List of Known Game Engines used for WiiU eShop Games
* Unity (Many Games)
* Chowdren Game Engine (3 Games)

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

--- 
## Wayforward Game Engine
The Wayforward Game Engine is used by the developers Wayforward to create beautiful 2D platformers, it has been ported to multiple platforms but the wiiU eShop games that use this engine are:
Uses lua scripting
* DuckTales: Remastered
* Shantae and the Pirate's Curse
* Shantae: Half-Genie Hero

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

## Emulated Games
Ignoring the virtual console which are all emulated games, a few eShop games are retro games running on an emulator compiled for wiiU.

Known games with emulator:
* Dungeons & Dragons Chronicles of Mystara (mana emulator)
* 

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
* EDGE
* Family Tennis SP
* Fist of the North Star Ken's Rage 2
* Flowerworks HD Follie's Adventure
* Gunman Clive HD Collection
* Human Resource Machine
* Inside My Radio
* Kung Fu Rabbit
* 
* 

# References
[^1]: http://bluepointgames.com/bluepoint-engine-batman-arkham-origins-blackgate/
[^2]: https://forum.xentax.com/viewtopic.php?t=8646 
[^3]: https://nintendoeverything.com/interview-frontier-developments-talks-coaster-crazy-deluxe-lostwinds-possibility-of-3ds-support-and-more/ 
[^4]: https://forums.kleientertainment.com/forums/topic/80262-which-game-engine-build-dont-starve-unity3d-or-self-build-engine/ 
