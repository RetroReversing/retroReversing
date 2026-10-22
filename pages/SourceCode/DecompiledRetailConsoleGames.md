---
permalink: /source-code/decompiled-retail-console-games
layout: post
title: Decompiled Retail Console Games
image: /public/images/Decompiled Retail Console Games.jpg
twitterimage: https://www.retroreversing.com/public/images/Decompiled Retail Console Games.jpg
category: sourcecode
priority: 1.0
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Decompiled Retail Console Games
    url: #
recommend: 
- sourcecode
- introduction
- games
- industry
tags:
- sourcecode
- games
editlink: ../pages/SourceCode/DecompiledRetailConsoleGames.md
updatedAt: '2026-10-22'
---

This page lists [decompiled](#glossary-decompilation) and [disassembled](#glossary-disassembly) source code projects for retail games, alongside [native ports](#glossary-source-port) and [static recompilations](#glossary-static-recompilation). Projects are grouped by their original platform. Engine reconstructions, fan remakes and unreleased prototypes are labeled in their entries.

---
## Glossary of Project Types
The tables list project types as comma-separated links to their respective projects. A game can have several projects, and a project can use more than one approach:
* <a id="glossary-decompilation"></a>**Decompilation** - Reconstructs higher-level source code, such as C or C++, from a compiled game. Engine decompilations focus on the engine; C# decompilations reconstruct managed code.
* <a id="glossary-matching-decompilation"></a>**Matching decompilation** - Aims to compile back to the same machine code as the original game. Matching does not mean the project is complete.
* <a id="glossary-disassembly"></a>**Disassembly** - Converts machine code into assembly source, often with manually added labels and comments.
* <a id="glossary-static-recompilation"></a>**Static recompilation** - Translates machine code ahead of time into source that can be compiled for another platform, without recovering the original source code.
* <a id="glossary-source-port"></a>**Native port / Source port** - Adapts available or reconstructed source code to run on another platform. A port can build on a decompilation, disassembly or reimplementation.
* <a id="glossary-reimplementation"></a>**Reimplementation / Game engine reimplementation** - Builds new code to reproduce the game's or engine's behavior, often using the original game's assets.
* <a id="glossary-rewrite"></a>**Rewrite** - Rebuilds the implementation with a different architecture or language, potentially using reverse engineering to understand the original behavior.
* <a id="glossary-fan-remake"></a>**Fan remake** - Recreates the game independently, potentially changing its engine, assets or gameplay.

For an introductory comparison, see the [Held Games explainer](https://heldgames.com/guides/retro-decompilation-recompilation-explained) and the [Reddit ELI5 discussion](https://www.reddit.com/r/explainlikeimfive/comments/1j6mo9p/eli5_how_do_video_game_recompilations_work_to_get/). Both explain why a game can run natively after recompilation; the Reddit thread is informal community discussion. For a detailed early example, Andrew Kelley's [Jamulator article](https://andrewkelley.me/post/jamulator.html) walks through static disassembly and recompilation of NES games with LLVM and Go.

For entries with a dated activity check, Active means the linked repository received a default-branch commit within the preceding 12 months. Inactive means no commits in that period, or an archived repository. These labels describe repository activity rather than completion or playability. Last-commit dates come from the project catalog. Check dates are stored in the catalog for maintenance. A failed check retains earlier evidence and is labeled as unavailable; Unverified means no successful check is recorded. Undated activity labels have not yet been checked by the script.

If you are interested to see officially released or leaked source code check out this other post:
{% include_cached link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}

Decompilation and disassembly projects generally need to have reconstructed at least 10% of the source code to be included. Exceptions include platforms with few reversing projects and native-port projects that do not report a matching-code percentage.

Project links provide build instructions and current progress.

---
# Nintendo Systems
Nintendo systems are by far the most popular for reverse engineering projects, especially related to 1st party titles such as Mario, Zelda and Pokemon.

## Nintendo Entertainment System (NES)
The table below lists the relevant entries.

The [NES guide](/nes) covers Famicom and NES hardware, development kits, and reversing. A [Super Mario Bros. walkthrough](/super-mario-bros) examines reversing that game.

{% include decomp-table.html console="nintendo-entertainment-system-nes" %}

---
## Super Nintendo (SNES)
The table below lists the relevant entries.

The [SNES guide](/snes) covers Super Famicom hardware, SDKs, and reversing. Original source code from the Gigaleak is covered separately for [Yoshi's Island](/yoshis-island-source-code) and [A Link to the Past](/zelda-a-link-to-the-past-source-code).

{% include decomp-table.html console="super-nintendo-snes" %}

---
## Nintendo 64
Recently, mainly in thanks to the huge success of the [Super Mario 64](/super-mario-64) project, there has been revived interest in [Nintendo 64](/n64) decompilation. While most projects are still in very early stages, there are a few that meet the criteria for this list.

The [Nintendo 64 guide](/n64) covers the console, SDK, and reversing introduction. Dedicated game pages cover the [Super Mario 64 decompilation](/super-mario-64) and [Mario Kart 64](/mario-kart-64).

{% include decomp-table.html console="nintendo-64" %}

---
## Nintendo GameCube
The table below lists the relevant entries.

The [GameCube guide](/gamecube) covers Dolphin hardware, the development kit, and reversing.

{% include decomp-table.html console="nintendo-gamecube" %}

---
## Nintendo Wii
The table below lists the relevant entries.

The [Wii guide](/wii) covers Revolution SDKs and reversing.

{% include decomp-table.html console="nintendo-wii" %}

---
## Nintendo Wii U
The table below lists Wii U static recompilation projects and native ports.

{% include decomp-table.html console="nintendo-wii-u" %}

---
## Nintendo Switch
Switch file formats and eShop engines are documented on their own pages.
The [Switch file-format guide](/SwitchFileFormats) documents Nintendo Switch formats. The [Switch game-engine guide](/SwitchGameEngines) covers engines used in eShop titles.

The table below lists Nintendo Switch reverse-engineering projects and native ports.

{% include decomp-table.html console="nintendo-switch" %}

---
# Nintendo Handhelds

## Game Boy
The following table presents the latest updates on ongoing Game Boy reverse engineering projects.

The [Game Boy guide](/gameboy) covers DMG and GBC hardware, SDKs, and reversing. A dedicated page covers [Pokemon Red and Blue](/pokemonredblue).

{% include decomp-table.html console="game-boy" %}

---
## Game Boy Color
The table below lists the relevant entries.

The [Game Boy guide](/gameboy) covers DMG and GBC hardware, SDKs, and reversing. A dedicated page covers [Pokemon Red and Blue](/pokemonredblue).

{% include decomp-table.html console="game-boy-color" %}

---
## Game Boy Advance
The table below lists the relevant entries. The [pret project directory](https://pret.github.io/) links to further Pokemon decompilation and disassembly projects.

The [Game Boy Advance guide](/gba) covers the console, SDK, and reversing.

{% include decomp-table.html console="game-boy-advance" %}

---
## Nintendo DS
The [Nintendo DS guide](/ds) covers Nitro hardware, the NITRO SDK, and development.

The table below lists Nintendo DS reverse-engineering projects and native ports.

{% include decomp-table.html console="nintendo-ds" %}

---
## Nintendo 3DS
The [Nintendo 3DS guide](/3ds) covers the handheld, development kits, and reversing.

The table below lists Nintendo 3DS reverse-engineering projects and native ports.

{% include decomp-table.html console="nintendo-3ds" %}

---
# Bandai Systems
## WonderSwan
The table below lists WonderSwan decompilation projects.

{% include decomp-table.html console="wonderswan" %}

---
# Sega Systems
Sega is similar to Nintendo in that most of the games that people are interested in reverse engineering are 1st party titles such as Sonic and Phantasy Star.

## 32X
The table below lists Sega 32X disassembly projects.

{% include decomp-table.html console="sega-32x" %}

### Knuckles Chaotix
{% include link-to-other-site.html url="https://github.com/sonicretro/chaotix" description="Knuckles Chaotix" image="https://upload.wikimedia.org/wikipedia/en/d/dd/Knuckles%27_Chaotix_Coverart.png" title="Knuckles Chaotix"  %}

---
## Sega CD

### Shining Force CD
[ShiningForceCentral's disassembly](https://github.com/ShiningForceCentral/SFCDDISASM) reconstructs Shining Force CD.

![](https://upload.wikimedia.org/wikipedia/en/f/f5/Shining_Force_CD.jpg){:width="100"}

---
## Sega Master System
Although the Sega Master System was hugely popular in Europe, it can't compete with the NES for number of disassembled projects created so far.

The [Master System guide](/mastersystem) covers the console, development, and reversing.

The table below lists Sega Master System disassembly projects.

{% include decomp-table.html console="sega-master-system" %}

---
## Sega Mega Drive
The Sega Mega Drive was Sega's most popular console in terms of games developed, and as such it also seems to be the most popular for reverse engineering projects too.

The [Mega Drive guide](/megadrive) covers Genesis development and reversing.

{% include decomp-table.html console="sega-mega-drive" %}

---
## Sega Game Gear (GG)
Decompiled Game Gear projects are listed under this heading.
The [Game Gear guide](/gamegear) covers the handheld and its development hardware.

### Sonic 1
{% include link-to-other-site.html url="https://github.com/TheRavenfreak/Sonic-1-Game-Gear-Disassembly" description="" image="https://upload.wikimedia.org/wikipedia/en/4/46/Sonic1GGCoverArt.jpg" title="A work in progress split disassembly of Sonic The Hedgehog on the Sega Game Gear" %}

---
## Sega Dreamcast (DC)
The [Dreamcast guide](/dreamcast) covers Katana hardware, the SDK, and development.

The table below lists Sega Dreamcast (DC) reverse-engineering projects and native ports.

{% include decomp-table.html console="sega-dreamcast-dc" %}

---
## Sega Model 2 Arcade 

### Sonic the Fighters  
{% include link-to-other-site.html url="https://github.com/cglmrfreeman/stfdisasm" description="" image="https://upload.wikimedia.org/wikipedia/en/5/5b/Sonic_the_Fighters.png" title="Sonic the Fighters Disassembly"  %}

---
# Sony Systems
Compared to the other systems, Sony doesn't have many decompilation projects, mainly due to the higher complexity of the games developed by the PS1 era, requiring much larger teams to create the games in the first place.

## PlayStation 1
The table below lists the relevant entries.

The [PlayStation guide](/ps1) covers PSX hardware and PSY-Q. A dedicated page covers [Crash Bandicoot and its development](/crash-bandicoot).

{% include decomp-table.html console="playstation-1" %}

---
## PlayStation 2
The [PlayStation 2 guide](/ps2) covers the console, SDK, and development hardware.

The table below lists PlayStation 2 reverse-engineering projects and native ports.

{% include decomp-table.html console="playstation-2" %}

---
## PlayStation Portable
The table below lists PlayStation Portable decompilation projects.

{% include decomp-table.html console="playstation-portable" %}

---
# Microsoft Systems
Microsoft console projects include Xbox reverse engineering and Xbox 360 static recompilations.

## MSX
Decompiled MSX projects are listed under this heading.
The [MSX guide](/msx) covers the computer and its reversing notes.

### Metal Gear (1987)
{% include link-to-other-site.html url="https://github.com/GuillianSeed/MetalGear" description="This repository contains the fully annotated disassembly of the original Metal Gear game, released by Konami for MSX2 in 1987 with code RC750." image="https://upload.wikimedia.org/wikipedia/en/b/bd/Metal_Gear_cover.jpg" title="Fully annotated disassembly of the original Metal Gear game"  %}

---
## Xbox
Decompiled original Xbox projects are listed under this heading.
The [Xbox guide](/xbox) covers the console and XDK.

The table below lists original Xbox decompilation and recompilation projects.

{% include decomp-table.html console="xbox" %}

### Halo: Combat Evolved
{% include link-to-other-site.html url="https://github.com/halo-re/halo" description="The goal of this project is to study and create a free, open-source re-implementation of the original Xbox launch title Halo: Combat Evolved." image="https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg" title="Halo: Combat Evolved Decompilation Research Project"  %}

---
## Xbox 360
Xbox 360 decompilations and native ports are listed below. The [ReXGlue SDK](https://github.com/rexglue/rexglue-sdk) provides a PowerPC-to-C++ recompilation runtime and toolkit used by projects such as LARecomp and EdgeOfTimeRecomp. The [XEO3 Recomp Kit](https://github.com/fxceless/xeo3-recomp-kit) instead targets Microsoft's XEO3 back-compat emulator and builds the recompiled game code into the DLL that emulator loads.
The [Xbox 360 guide](/xbox360) covers the console and its development kit.

The table below lists Xbox 360 reverse-engineering projects and native ports.

{% include decomp-table.html console="xbox-360" %}

---
### Sonic Unleashed
**hedge-dev** has released UnleashedRecomp, a project that statically recompiles the Xbox 360 version of *Sonic Unleashed* to run natively on PC. By translating the original PowerPC instructions and Xenos shaders into native C++ and HLSL, this tool bypasses traditional emulation overhead, enabling features like arbitrary resolutions, high frame rates, and deep modding support on Windows and Linux.

---
## PC (Windows)
The table below lists the relevant entries.

The [PC guide](/pc) covers game development and reversing.

{% include decomp-table.html console="pc-windows" %}

---
# Apple Systems
## PC (macOS)
The table below lists decompilation projects targeting macOS game releases.

{% include decomp-table.html console="pc-macos" %}

---
# Atari Systems

## Atari 2600
The [Atari 2600 guide](/atari2600) covers VCS reversing.

The table below lists Atari 2600 disassembly projects and collections.

{% include decomp-table.html console="atari-2600" %}

---
## ColecoVision

### Donkey Kong
{% include link-to-other-site.html url="https://atariage.com/forums/topic/229669-colecovision-donkey-kong-disassembly/" description="" image="https://i.pinimg.com/originals/28/db/53/28db5343d4801e9c10cbb4e7a91e3317.jpg" title="Donkey Kong for ColecoVision Disassembly" %}

---
# Commodore Systems
## Commodore 64
The table below lists Commodore 64 disassembly projects.

{% include decomp-table.html console="commodore-64" %}

---
# NEC Systems

## PC-9801

### Touhou Project 1-5 (1997-1998)

[ReC98](https://github.com/nmlgc/ReC98) reconstructs the source code of the first five Touhou Project games by ZUN Soft, originally released for the NEC PC-9801.

![](https://static.wikia.nocookie.net/touhou/images/f/f3/Th01Cover.jpg){:width="100"}

---
# Mobile games
Mobile games are a special case that weren't initially going to be included, but we have included a few games that are based on console games.

## Java 2 Mobile Edition (J2ME)

### Sonic 1 J2ME
{% include link-to-other-site.html url="https://github.com/Iso-Kilo/Sonic-1-J2ME-Decompilation" description="A decompilation of the 2005 Java mobile port of Sonic the Hedgehog (1991). This decompilation focuses on the 240x320 resolution version, of part 1 as it uses the original game's graphics. However, there are lower resolutions that function similarily. And part 2 consists of the largest available resolution; 208x208. Part 1 was created by iFone, and 2 by Glu." image="https://repository-images.githubusercontent.com/254218052/8e42f080-7f34-11ea-9261-3e534fe23726" title="Decompile of the 2005 mobile port of Sonic 1" %}

---
## Android
The [Android guide](/Android) covers reversing and game development for the platform.

The table below lists Android reverse-engineering projects and native ports.

{% include decomp-table.html console="android" %}

---
## Windows Phone
The table below lists Windows Phone decompilation projects.

{% include decomp-table.html console="windows-phone" %}

### Plants vs. Zombies (2011)
{% include link-to-other-site.html url="https://github.com/Mewnojs/PlantsVsZombies.NET" description="powered by MonoGame." image="https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg" title="A port of Plants vs. Zombies Windows Phone version to various platforms" %}

