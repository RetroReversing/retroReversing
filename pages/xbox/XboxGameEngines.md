---
layout: post
tags: 
- xbox
- gameengines
- engines
title: Original Xbox Game Engines
thumbnail: /public/consoles/Microsoft Xbox.png
image: /public/images/xbox/XboxGameEngines.jpg
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
updatedAt: '2019-04-28'
---
# Introduction
When the Xbox came out in 2001 most game developers were still getting used to the new layer of abstractions and code re-use provided by the superior hardware of consoles compared to the previous generations.

Game engines have always been used to a certain extent within the games industry for re-using code from one game to another.

These game engines were normally just distributed to developers in the same company and never released to other development studios therefore these are called 'in-house' game engines.

However the xbox generation was the first to really take 3rd party game engines seriously. 

Full Commercial off-the-shelf game engines became much more popular such as Unreal Engine or GameBryo. 

But the real winners were the more specific middleware libraries such as the Havok Physics engine, Bink Video Playback engine and the Renderware Graphics engine.

Most developers still wanted full control over their game engine but it was too costly to write a custom physics, audio or video engine for each game. In future console generations developers would move towards the full game engines, leaving some of the flexability behind.

## Detecting middleware
The games listed below each engine or middleware have been confirmed to use those engines by searching for common strings within the xbox executable themselves. 

If you would like to add a game to the list please make sure to check the executable for a trace of the code, sometimes developers aim to use a library but it never ends up in the final build.

---
# Full Retail Game Engines
These engines were sold to developers as a product as opposed to 'in-house' engines that were only used by one company.

## Unreal Engine
<section class="postSection">
<img src="/public/images/engines/UnrealEngineLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Unreal Engine was developed by [Epic Games](https://www.epicgames.com/) initially for their game `Unreal` but later evolved to become a product in itself with many 3rd party games studios taking advantage of its power.

To find out if your games uses this engine, look for a file with a .umd extension for example `xboxship.umd`. Or search the files for the string `UnrealEd`.

Games:
* America's Army - Rise Of Soldier
* Brother in Arms - Earned in Blood
* Brother in Arms
* Combat Task Force 121
* Dead Man's Hand
* Deus Ex Invisible War
* Ghost Recon Advanced Warfighter
* Land of the Dead
* Magic the Gathering - Battlegrounds
* Men of Valor
* New Legends
* Open Season
* Pariah
* Rainbow Six 3
* Rainbow Six 3 - Black Arrow

</div>
</section>

---
## Vicious Engine
<section class="postSection">
<img src="/public/images/engines/ViciousEngineLogo.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Vicious Engine was developed by Vicious Cycle Software and released late in the Xbox lifecycle in early 2005, thus very few 3rd party game developers used this engine for the Xbox but it was nevertheless available to them during the end of the xbox lifespan.
  
To find out if your games uses this engine, look for games that have `*.rgn` files, RGN stands for Region in this case which is the terminology Vicious Engine uses for Maps/Levels. Although other games that don't use this engine could also use .rgn for a filename such as `Star Wars - Obi Wan` so we will need a better method of detection.

Games:
* Curious George
* Dinotopia - The Sunstone Odyssey [^6]
* Robotech Invasion [^6]
* Spy vs Spy [^6]

</div>
</section>

---
## Gamebryo (formerly NetImmerse)
<section class="postSection">
<img src="/public/images/engines/GameBryoLogo.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Gamebryo engine was developed by Gamebase and licensed to 3rd party game developers such as UbiSoft and Atari for use on the Xbox and other gaming platforms [^5].
  
To find out if your games uses this engine, look for .kfm files or .nif files or references to `NiSystem` or `Gamebryo File Format` in the main game executable.
  
Games:
* Bass Trophy Hunter 2007
* Futurama
* Grooverider - Slot Car Thunder
* IHRA Drag Racing 2005
* Memorick - The Apprentice Knight
* Morrowind Game of the Year
* Oddworld - Munchs Oddysee
* Playboy The Mansion
* Sid Meiers Pirates!
* Stacked

</div>
</section>

---
# In-House Game Engines
These game engines were not shared with any other developer and tend of be genre-specific, so games with a similar genre will run on a similar engine.

## GoldSrc Engine
<section class="postSection">
<img src="/public/images/engines/SourceEngine.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The GoldSrc engine was originally a modification of the Quake Engine created by Valve for Half-life and then re-used for other internal projects such as Counterstrike. This engine was later forked and mostly rewritten to become the basis of the new Half Life engine known as `Source` [^8].
  
To find out if your games uses this engine, look for references to `VEngine` in the main xbox executable.

Games:
* Counterstrike
* Half-Life 2

</div>
</section>

---
## CryEngine
<section class="postSection">
<img src="/public/images/engines/CryEngineLogo.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
To find out if your games uses this engine, look for games that have the `lua.dat` file.

Games:
* Far Cry - Instincts
* Far Cry Instincts Evolution

</div>
</section>

---
## NgEngine (by Z-Axis)
<section class="postSection">
<img src="/public/images/engines/ZAxislogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The NgEngine by Z-Axis games has very little information written about it just a few references to its name littlered throughout the main game executables.

To find out if your games uses this engine, search the executable for `/NgEngine`.

Games:
* Aggressive Inline
* BMX XXX
* Dave Mirra Freestyle BMX 2

</div>
</section>

---
## Diesel engine
To find out if your games uses this engine, look for games that have a `*.bfs` file which seems to be the packed game format for the engine.

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
## Zero Engine (Pandemic)

Games:
* Mercenaries (mentions redengine?)
* Star Wars The Clone Wars
* Star Wars Battlefront
* Star Wars Battlefront 2

---
## Lithtech Engine (Jupiter)
Depending on the version of the Lithtech engine you need to search for its codename in the main executable, for example `JUPITERSPLASH`.
Games:
* Chicago Enforcer (Mob Enforcer)
* Tron 2.0

---
## TOSHI Engine
The Toshi Engine was developed by `Blue Tongue Entertainment` in Australia. To find out if a game uses this engine search for the strings: `ifdef TOSHI_SKU_PS2` or `AToshiAnimationSystem`

Games:
* Jurassic Park Operation Genesis

---
## id Tech 4
<section class="postSection">
<img src="/public/images/engines/idTechLogo.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Developed by id Software the idTech 4 engine is the next generation of the Doom/Quake engine. 
  
To find out if your game uses this engine search for `idSysLocal` in the main executable.

Games:
* Doom 3
* Doom 3 ROE
</div>
</section>

---
## Serious Engine
<section class="postSection">
<img src="/public/images/engines/SeriousEngineLogo.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Developed by CroTeam for the Serious sam franchise [^1].
  
To find out if your game was developed using this engine simply search for the engine name in the main game executable: `Serious Engine`.

Games:
* Serious Sam
* Serious Sam II
</div>
</section>

---
## Shark 3D
<section class="postSection">
<img src="/public/images/engines/SpinorShark3DLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Shark 3D engine was developed by `Spinor` for internal use only. 

In order to find games developed using this engine search for `shark3d_snake_binary` or `spinor.com`.

Games:
* Dreamfall
</div>
</section>

---
## Real Virtuality
This engine name cannot be confirmed in the executable files but there are multiple sources that say these games are developed using this engine.

Games:
* Operation Flashpoint: Elite [^2]

---
## Glacier Engine
The Glacier engine was developed by IO Interactive for their Hitman series of games, but was also used internally for a few other games such as Freedom Fighters on the xbox. It was initially built in 1999 for Hitman: Codename 47 and for subsequent games up to but not including Hitman Absolution which used Glacier 2 a complete rewrite of the engine [^7].

For a great run down of the mian features offered by the engine checkout this GiantBomb article: [Glacier Engine 1 (Concept) - Giant Bomb](https://www.giantbomb.com/glacier-engine-1/3015-7220/)

Games that are built on the glacier engine tend to include the following string inside the main executable:
`Z:\\code\\engine\\SDL_Engine\\Glacier\\scriptdll.cpp` or `engine\\ScriptInterfaces
`
Games:
* Hitman 2 Silent Assassin
* Hitman Blood Money
* Hitman Contracts
* Freedom Fighters

---
## RIOT Engine
<section class="postSection">
<img src="/public/images/engines/RiotEngine.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The RIOT engine was developed by Surreal Software initially for their Drakan series of games but later used for Xbox games such as The Suffering.
  
  You can find out more about this engine in a Gamasutra retrospective of their game Drakan [Gamasutra - Postmortem: Surreal Software's Drakan: Order of the Flame](https://www.gamasutra.com/view/feature/131586/postmortem_surreal_softwares_.php?page=2)
  
To find a game that uses this engine simply search for `RIOT Engine` in the main executable.

Games: 
* The Suffering
* The Suffering - Ties That Bind
* Mortal Kombat Shaolin Monks

Questionable Games:
* Lord of the Rings Fellowship of the Rings (apparently this engine was used for PS2 and PC but it doesn't seem to be for the xbox version)

</div>
</section>

## Mercury Engine
<section class="postSection">
<img src="/public/images/engines/MercurySteamLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The internal engine used by the company MercurySteam known for the game Scrapland on Xbox [^3].
  
To find a game that uses this engine just search for the developer name in the main game executable: `MercurySteam`.
  
Games:
* Scrapland [^3]

</div>
</section>

---
## Jade Engine
Developed by UbiSoft initially for Beyond Good and Evil but also used for Prince of Persia [^4].
`\\Jade

Games:
* Prince of Persia and the Sands of Time [^4] 
* Prince of Persia Two Thrones
* Prince of Persia Warrior Within [^4]
* Beyond Good And Evil [^4]
* King Kong


---
# Middleware

## Havok Physics Engine
<section class="postSection">
<img src="/public/images/engines/HavokLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
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
* Deus Ex Invisible War
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
* Rainbow Six - Critical Hour
* Rainbow Six - Lockdown
* Robotech Invasion
* Room Zoom - Race For Impact
* Shrek Superslam
* Splinter Cell - Chaos Theory
* Splinter Cell - Double Agent
* Starsky and Hutch
</div>
</section>

---
## Renderware
<section class="postSection">
<img src="/public/images/engines/RenderWareLogo.gif" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The Renderware Engine can be used anywhere from a simple graphics middleware to a full fledged game engine. 

The Renderware engine provided graphics, audio, physics and AI modules. Most games only used a subset of the modules, with the graphics engine being the most popular.

You can find out if your game was built using Renderware by searching the main executable for `RwFont`, `rwsdk` or simply `Renderware`/`RenderWare`

Games:
* Antz - Extreme Racing
* Aquaman - Battle for Atlantis
* Army Men - Sarge's War
* Atari Anthology
* Batman - Rise of Sin Tzu
* Broken Sword - The Sleeping Dragon
* Black
* Burnout
* Burnout 2 - Point of Impact
* Burnout 3 Takedown
* Call of Duty - Finest Hour
* Classified - Sentinel Crisis
* Curse - The Eye of Isis
* Darkwatch
* Dead to Rights 2
* ESPN Major League Baseball
* Evil Dead - Regeneration
* Frogger Beyond
* Furious Karting
* Future Tactics The Uprising
* Grand Theft Auto III
* GTA San Andreas
* GTA Vice City
* Gravity Games Bike
* Headhunter Redemption
* Heroes of the Pacific
* High Heat Baseball 2004
* High Roller Casino
* Kill Switch
* Kung Fu Chaos
* Manhunt
* Max Payne 2
* MLB SlugFest 2006
* MLB SlugFest Loaded
* Mortal Kombat Armageddon
* Mortal Kombat Deception
* Mx 2002
* Mx Superfly
* Need for Speed Underground 2
* NFL Blitz 2k3
* NFL Blitz PRO
* NFL Blitz The League
* Nickelodeon Party Blast
* Outlaw Golf - 9 Holes of Xmas
* Outlaw Golf 2
* Outlaw Tennis
* Outlaw Volleyball
* Outlaw Volleyball - Red Hot
* Redcard 2003
* Robocop
* Run Like Hell
* Scooby Doo - Mystery Mayhem
* Scooby Doo - Night of 100 Frights
* Secret Weapons Over Normandy
* Sonic Heroes
* SpongeBob - Battle for Bikini Bottom
* SpongeBob - Lights Camera PANTS
* Starsky and Hutch
* Strike Force Bowling
* Teenage Mutant Ninja Turtles
* TMNT - Mutant Melee
* The Warriors
* Tony Hawks Pro Skater 3
* Top Gear - RPM Tuning
* Toxic Grind
* World Championship Poker
* World Series Baseball
* World Series Baseball 2K3
* Xyanide

### Renderware Debug information
There is a prototype version of Xyanide  (2003-05-07) that contains the full debug symbols files (.pdb) and linker map files (.map). 
These could be useful to generate a function signature from and apply to other Renderware games.
{% include link-to-other-post.html post="/xbox-game-debug-symbols" description="For more information on Xbox debug symbols check out this post." %}


</div>
</section>

---
## Bink 2 (Video Playback Middleware)
<section class="postSection">
<img src="/public/images/engines/BinkLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Bink was pretty much the industry standard for Video Playback on the Xbox and game development in general at the time.

So many games use the middleware that we would be pretty much listing the entire Xbox library. If you want to find out if your game uses Bink then either search for the string `Not a Bink file.` in the executable, or look for `.bik` files on the game disc.
</div>
</section>

---
## FMOD sound and music Middleware
<section class="postSection">
<img src="/public/images/engines/FMODLogo.png" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
The FMOD Sound and Music middleware library is one of the industry standard for audio playback on games consoles and was used extensivly in the Xbox Generation of consoles and beyond.
  
To find out if your game uses FMOD for audio playback look for the string `FMOD Sample Bank` in the main executable.

Games:
* American Chopper 2 - Full Throttle
* Avatar - The Last Airbender
* Call of Duty 3
* Classified - Sentinel Crisis
* Cold fear
* Dead to Rights 2
* Evil Dead - Regeneration
* Flatout
* Flatout 2
* Heroes of the Pacific
* IHRA Drag Racing 2005
* IHRA Drag Racing Sportsman Edition
* Jurassic Park Operation Genesis
* Rainbow Six - Critical Hour
* Rainbow Six - Lockdown
* Scrapland
* Stacked
* The Dukes of Hazzard
* Xbox Live Arcade
</div>
</section>

---
# References
[^1]: [CroTeam About](http://www.croteam.com/about/#)
[^2]: [Real Virtuality 1 engine - Mod DB](https://www.moddb.com/engines/real-virtuality)
[^3]: [Evolution of Mercury Engine Games 2004-2017 - YouTube](https://www.youtube.com/watch?v=4wJq55jAgPM)
[^4]: [Evolution of Jade Engine Games 2003-2010 - YouTube](https://www.youtube.com/watch?v=7V4d4R1pLwQ)
[^5]: [Gamebryo(R) Powered Titles On Display](https://www.gamesindustry.biz/articles/gamebryor-powered-titles-on-display-at-the-september-1-5-game-stars-live)
[^6]: [Vicious Engine : About Us](http://viciousengine.com/about-us.php)
[^7]: [Gamasutra - An Engine For Assassination IO's Tech Director Speaks](http://www.gamasutra.com/view/feature/134933/an_engine_for_assassination_ios_.php)
[^8]: [GoldSrc - Wikipedia](https://en.wikipedia.org/wiki/GoldSrc)
