---
layout: post
tags: 
- xbox
- symbols
- debug
- games
title: Original Xbox Games with Debug Symbols
image: /public/images/xbox/XboxGameDebugSymbols.jpg
permalink: /xbox-game-debug-symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Microsoft Xbox (Original)
    url: /xbox
  - name: Original Xbox Games with Debug Symbols
    url: #
recommend:
- xbox
- symbols
- games
editlink: /consoles/xbox/XboxGamesWithDebugSymbols.md
updatedAt: '2020-01-12'
---
**Debug symbols** left in games make reverse engineering almost a piece of cake, giving useful names to each of the functions in an executable and sometimes even full local variable naming and source code references.

However most developers are very careful not to leak any debug symbols, especially into retail releases, so most games will not have publicly available debug symbols. 

But if you look very hard you might be able to find a game or two compiled for a console that have debug symbols left in by mistake.

# Introduction to Xbox debug symbols 
Unlike the PS2 the debug symbols for Xbox games were **not stored in the executables** themselves, they were instead stored in an external file (normally a program database file or PDB). 

These files are then used the the debugger on a special **Xbox Debug unit** to allow the developer to fix bugs in the compiled code.

The disadvantage of the PDB files being a separate file is that they are very unlikely to be put on a retail Xbox DVD by mistake as they are not required for the game to run and are easy to spot and remove. 

Symbols compiled into the executable themselves are much harder to spot and tend to be the most likely way for debug symbols to end up in retail releases on other consoles like the PS2.

---
## Program Database files (.pdb)
The creme de la creme of useful data for reversers are PDB files and it is very rare for a game to include them on a retail release (or even a prototype for that matter). 

So we are very lucky that after searching pretty much the entire Xbox game library we finally found 2 games with the PDB files fully intact, they are:
* ATV 3 - Lawless (Beta) (`Default.pdb`)
* Crusty Demons (`Crusty.pdb`)
* Gauntlet Dark Legacy (`shell3D.pdb`)
* Xyanide (Multiple pdb files!)

---
## Linker MAP files (.map)
The following Xbox games contain a Linker map file that countain a number of debug symbols:
* **ATV 3 - Lawless (Beta)** - `Default.map`
* **Buffy the Vampire Slayer** - `final.map`
* **Crusty Demons** - `Crusty.map`
* **Miami Vice** - (`Data1.AIF`)
* **Predator - Concrete Jungle**
* **Sphinx And The Cursed Mummy**
* **The Red Star**
* **Wrath Unleashed**
* **X-Men - The Official Game** - `X3.ZPK`
* **Xyanide (2003-05-07)**

## Other games with interesting files for reversing
These files need further investigation but it looks like they might contain debug symbols:
* **Marvel Nemesis** - Rise Of The Imperfects (`default.bak`)
* **Marvel Vs Capcom 2** - (`afs02.afs`)

---
# Xbox Scripting
Scripting is used in many xbox games to allow game designers with less programming experience to focus on the core gameplay and not low-level programming details.

Games vary in their use of scripting, some games can even implement most of their game's missions and levels in scripts while others simply use it to tweak simple variables such as the speed of a car.

The scripting languages themselves also vary wildly between games/engines/developers. However there are a few common languages such as Lua that tend to be the industry standard.

The huge benefit of scripting from a Reversers point of view is that typically the entire source files are available with the game, with useful variable names and even comments!

They can be a great place to start a game mod or simply to make the game easier/harder.

Games that use scripting:
* **Land of the Dead** - Unreal Engine
* **Midtown Madness 3**
* **Pariah**
* **Pirates of the Caribbean**

---
# Games still to Check for Debug Symbols
If there is one place that debug symbols are likely to hide it is game demos, as they are often put together hastily and need to be ready before launch, so whoever has any of the following discs it might be good to check the contents
* **Official Xbox Magazine Demo Discs** - Released in both Europe and the US free with the monthly magazine
* **Xbox exhibition** - 7 known volumes
* Any other xbox demos?
