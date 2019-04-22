---
layout: post
tags: 
- xbox
- gameengines
- engines
title: Original Xbox Game Engines
thumbnail: /public/consoles/Microsoft Xbox.png
image: /public/consoles/Microsoft Xbox.png
permalink: /xbox-game-engines
breadcrumbs:
  - name: Home
    url: /
  - name: Microsoft Xbox (Original)
    url: /xbox
  - name: Game Engines for the Original Xbox
    url: #
recommend:
- xbox
- gameengines
editlink: /xbox/XboxGameEngines.md
---
# Introduction
When the Xbox came out in 2001 most game developers were still getting used to the new layer of abstractions and code re-use provided by the superior hardware of consoles compared to the previous generations.

Game engines have always been used to a certain extent within the games industry, re-using code from one game to another.

These game engines were normally just distributed to developers in the same company and never released to other development studios, these are called 'in-house' game engines.

However the xbox generation was the first to really take 3rd party game engines seriously. 

Full Commercial off-the-shelf game engines became much more popular such as Unreal Engine or GameBryo. 

But the real winners were the more specific middleware libraries such as the Havok Physics engine, Bink Video Playback engine and the Renderware Graphics engine.

Most developers still wanted full control over their game engine but it was too costly to write a custom physics, audio or video engine for each game. In future console generations developers would move towards the full game engines, leaving some of the flexability behind.

## Detecting middleware
The games listed below each engine or middleware have been confirmed to use those engines by searching for common strings within the xbox executable themselves. 

If you would like to add a game to the list please make sure to check the executable for a trace of the code, sometimes developers aim to use a library but it never ends up in the final build.

# Full Retail Game Engines

## Unreal Engine
Look for a file with a .umd extension for example `xboxship.umd`.

Games:
* Brother in Arms - Earned in Blood
* Brother in Arms
* Combat Task Force 121
* Dead Man's Hand
* Deus Ex Infinity War
* Ghost Recon Advanced Warfighter
* Land of the Dead
* Magic the Gathering - Battlegrounds
* Men of Valor
* Open Season
* Pariah

---
## Vicious Engine
Look for games that have `*.rgn` files, these are Region files so similar to maps/levels.

Games:
* Curious George
* Dinotopia - The Sunstone Odyssey
* Spy vs Spy

---
## Gamebryo (formerly NetImmerse)
Look for .kfm files or .nif files or references to `NiSystem`
Games:
* Bass Trophy Hunter 2007
* Futurama
* Grooverider - Slot Car Thunder
* IHRA Drag Racing 2005
* Memorick - The Apprentice Knight
* Morrowind Game of the Year
* Oddworld - Munchs Oddysee
* Playboy The Mansion

---
# In-House Game Engines

## GoldSrc (Source Engine)
Look for references to VEngine in the main xbox executable.

Games:
* Counterstrike
* Half-Life 2

---
## CryEngine
Look for games that have the `lua.dat` file.
* Far Cry - Instincts
* Far Cry Instincts Evolution

---
## NgEngine (by Z-Axis)

Games:
* Aggressive Inline
* BMX XXX
* Dave Mirra Freestyle BMX 2

---
## Diesel engine
Look for games that have a `*.bfs` file which seems to be the packed game format for the engine.

Games:
* Flatout
* Flatout2

---
## Open Dynamics Engine

Games:
* Aeon Flux
* BloodRayne 2

---
## Avalanche Engine

Games:
* Just Cause


---
# Middleware

## Havok Physics Engine
The Havok Physics engine was very popular with developers during the xbox era, with over 36 known games that use the middleware.

To find out if a game uses Havok just search for the string `havok.com` in the main xbe executable file. Normally the havok libraries contain error messages redirecting to the havok.com website.

Games:
* 007 - From Russia With Love
* 50 Cent Bulletproof
* Armed and Dangerous
* Backyard Wrestling
* Backyard Wrestling 2
* Crash Nitro Kart
* Darkwatch
* Destroy all humans
* Destroy all humans 2
* Deus Ex Infinity War
* Ed Edd n Eddy The MIS-EDventures
* Evil Dead - Regeneration
* Full spectrum warrior
* Full Spectrum Warrior Ten Hammers
* Gene Troopers
* Ghost Recon 2
* Ghost Recon 2 Summit Strike
* Ghost Recon Advanced Warfighter
* Goldeneye Rogue Agent
* Halo 2
* Harry Potter and the Goblet of Fire
* IHRA Drag Racing 2005
* IHRA Drag Racing Sportsman Edition
* Just Cause
* Lord of the Rings The Third Age
* Marvel Nemesis - Rise Of The Imperfects
* Max Payne 2
* Medal of Honor European Assault
* Mercenaries
* Mortal Kombat Shaolin Monks
* Nickelodeon Party Blast
* Over the Hedge
* Painkiller Hell Wars
* Pariah
* Psi Ops - The Mindgate Conspiracy
* Starsky and Hutch

---
## Renderware (Graphics)

---
## Bink 2 (Video Playback Middleware)

Games:
* IHRA Drag Racing 2005

---
## FMOD sound and music Middleware

Games:
* IHRA Drag Racing 2005

