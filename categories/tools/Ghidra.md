---
permalink: /ghidra
layout: post
category: 'ghidra'
title: 'Ghidra Decompiler & Disassembler - Awesome List'
recommend: ghidra
recommendTitle: All Ghidra Posts
editlink: ../categories/tools/Ghidra.md
breadcrumbs:
  - name: Home
    url: /
  - name: Tools
    url: /
  - name: Ghidra
    url: #
tags:
  - ghidra
  - tools
---

Ghidra is the most advanced reverse engineering tool on the market, and best of all it is completely free and open source! Most of the content on RetroReversing will be using Ghidra going forward due to it being much more accessible than competitors such as IDA Pro.

# Introduction to Ghidra
There is no better way to start out the hobby reverse engineering than learning Ghidra, it is an essential tool that takes much of the headaches out of reversing.

{% include_cached link-to-other-post.html post="/intro-decompiling-with-ghidra" description="For a good introduction to decompiling with Ghidra check out this post." %}
{% include_cached link-to-other-post.html post="/how-decompilers-work" description="For how a decompiler recovers expressions, types, and control flow from machine code, see this tutorial." %}
{% include_cached link-to-other-post.html post="/PDBFileReversing" description="PDB symbol files, and how to use them while reversing, are covered on their own page." %}

# Console Plugins

## Nintendo Game Boy
Download the Ghidra plugin from [Github](https://github.com/Gekkio/GhidraBoy)

{% include_cached link-to-other-post.html post="/gameboy" description="The Game Boy page covers DMG and GBC hardware, SDKs, and reversing posts." %}

## Nintendo Game Boy Advance
Download the Ghidra plugin from [Github](https://github.com/pudii/gba-ghidra-loader)

{% include_cached link-to-other-post.html post="/gba" description="The Game Boy Advance page covers the console, SDK, and related reversing posts." %}

An excellent guide for decompiling GBA games using Ghidra and mGBA is available on [Starcubelabs](https://www.starcubelabs.com/reverse-engineering-gba/)

Another excellent guide is on [wrongbaud](https://wrongbaud.github.io/posts/ghidra-debugger/)

## Nintendo DS
Download the Ghidra plugin from [Github](https://github.com/pedro-javierf/NTRGhidra)

{% include_cached link-to-other-post.html post="/ds" description="The Nintendo DS page covers Nitro hardware, the NITRO SDK, and related posts." %}

## Nintendo Entertainment System
Download the Ghidra plugin from [Github]([https://github.com/ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin/releases/tag/2021-09-23.3](https://github.com/kylewlacy/GhidraNes/releases))

{% include_cached link-to-other-post.html post="/nes" description="The NES page covers Famicom and NES hardware, development kits, and reversing posts." %}
{% include_cached link-to-other-post.html post="/nes-ghidra" description="A dedicated walkthrough covers reversing an NES game in Ghidra." %}

It even has multiple builds setup for each Ghidra version via Github Workflows!

Note that there was another older Ghidra plugin called **Ghidra-Nes-Rom-Decompiler-Plugin** however it failed to build against latest Ghidra (11.1.2).

## Super Nintendo
There is only one Ghidra plugin for SNES but it is currently not under active development you can get it from [Github](https://github.com/achan1989/ghidra-snes-loader)

{% include_cached link-to-other-post.html post="/snes" description="The Super Nintendo page covers Super Famicom hardware, SDKs, and reversing posts." %}

## Nintendo 64
Nintendo 64 games can be slightly harder to reverse due to everything being bundles as one large ROM image containing all the code and assets used in the game. Luckily there are a few tools that can help, such as the `Reversing Emulator` and a N64 Loader for Ghidra.

{% include_cached link-to-other-post.html post="/n64" description="The Nintendo 64 page covers the console, SDK, and reversing introduction." %}

{% include_cached link-to-other-post.html post="/n64-decompiling" description="If you are interested in Decompiling a Nintendo 64 game with Ghidra check out this post." %}

## Gamecube
Download the Ghidra plugin from [Github](https://github.com/Cuyler36/Ghidra-GameCube-Loader/releases)

{% include_cached link-to-other-post.html post="/gamecube" description="The GameCube page covers Dolphin hardware, the development kit, and related posts." %}

Note that to build the GameCubeLoader you will need to have gradle version 7 or below installed otherwise you will get an error similar to:
```
FAILURE: Build failed with an exception.

* Where:
Build file './Ghidra-GameCube-Loader/build.gradle' line: 63

* What went wrong:
A problem occurred evaluating root project 'GameCubeLoader'.
> Adding a Configuration as a dependency is no longer allowed as of Gradle 8.0.
```

On Mac OSX you can install an older version of Gradle using brew:
```bash
brew install gradle@7
```

## Wii
A guide for using Ghidra on Wii games is available on [WiiBrew](https://wiibrew.org/wiki/Using_Ghidra_with_the_Wii)

{% include_cached link-to-other-post.html post="/wii" description="The Wii page covers Hollywood hardware, the development kit, and related posts." %}

## Sega Master System/Game gear
Download the Ghidra plugin from [Github](https://github.com/VGKintsugi/Ghidra-SegaMasterSystem-Loader)

{% include_cached link-to-other-post.html post="/mastersystem" description="The Master System page covers the console and its development hardware." %}
{% include_cached link-to-other-post.html post="/gamegear" description="The Game Gear page covers the handheld and its development hardware." %}

## Sega Mega Drive/Genesis
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_sega_ldr)

{% include_cached link-to-other-post.html post="/megadrive" description="The Mega Drive page covers Genesis hardware, the SDK, and related posts." %}

## Sega Saturn
Download the Ghidra plugin from [Github](https://github.com/VGKintsugi/Ghidra-SegaSaturn-Loader)

{% include_cached link-to-other-post.html post="/saturn" description="The Saturn page covers the console, PSY-Q, and reversing posts." %}

## Sega Dreamcast
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_sdc_ldr)
Also for GDI support in Ghidra: [Github](https://github.com/hazzaaclark/gdiGhidra)

{% include_cached link-to-other-post.html post="/dreamcast" description="The Dreamcast page covers Katana hardware, the SDK, and related posts." %}

## Original Xbox
Download the Ghidra plugin from [Github](https://github.com/XboxDev/ghidra-xbe)

{% include_cached link-to-other-post.html post="/xbox" description="The original Xbox page covers the console, XDK, and related posts." %}

## Xbox 360
Download the Ghidra plugin from [Github](https://github.com/zeroKilo/XEXLoaderWV)

{% include_cached link-to-other-post.html post="/xbox360" description="The Xbox 360 page covers the console and its development kit." %}

## PlayStation 1
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_psx_ldr)
Also for a guide for using Ghidra for PS1 reversing: [tokimeki-memorial](https://tetracorp.github.io/tokimeki-memorial/methods/decompiling-psx-games.html)

{% include_cached link-to-other-post.html post="/ps1" description="The PlayStation 1 page covers PSX hardware, PSY-Q, and related posts." %}

## PlayStation 2
Download the Ghidra plugin from [Github](https://github.com/chaoticgd/ghidra-emotionengine-reloaded)

{% include_cached link-to-other-post.html post="/ps2" description="The PlayStation 2 page covers the console, SDK, and development hardware." %}

## PlayStation 3
There are a few useful script for working with PS3 executables on [Github](https://github.com/clienthax/Ps3GhidraScripts)

{% include_cached link-to-other-post.html post="/ps3" description="The PlayStation 3 page covers the console and its development hardware." %}

### Introduction to Ghidra: Modding and Reverse Engineering PS3 Games
**bordplate** provides an in-depth introduction to using Ghidra for game reverse engineering, demonstrating the process by adding multiplayer to the PS3 port of *Ratchet & Clank*. 

The video covers setting up Ghidra for PowerPC architecture, identifying game functions like `spawnMoby` through string analysis, and injecting custom C++ code to hook game logic and implement networking.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3c7yBlkQ_fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## PlayStation Portable
Download the Ghidra plugin from [Github](https://github.com/kotcrab/ghidra-allegrex)

{% include_cached link-to-other-post.html post="/psp" description="The PSP page covers the handheld, official SDK, and development kit." %}

---
# Recommended Plugins
While Ghidra has a large number of features built in, there are a number of features missing that are thankfully available due to community plugins, this section will cover some of the most useful for game reversing.

## CodeCut
CodeCut allows a user to assign functions to object files in Ghidra, and then interact with the binary at the object file level. Functions are assigned to object files by setting the Namespace field in the Ghidra database. DeepCut attempts to establish initial object file boundaries which the user can then adjust using the CodeCut Table window.
[https://github.com/jhuapl/codecut](https://github.com/jhuapl/codecut)

### GhidrAssist Project: LLM Integration for Ghidra
**GhidrAssist** is a powerful extension that integrates Large Language Models (LLMs) directly into the Ghidra reverse engineering workflow. 
The tool supports both local and cloud-based AI providers (such as OpenAI and Ollama) to facilitate tasks like code explanation, refactoring, and vulnerability detection. Uniquely, it features an 'Agentic Mode' utilizing the ReAct pattern, allowing the AI to autonomously plan and execute investigation steps within the binary.

{% include link-to-other-site.html url="https://github.com/jtang613/GhidrAssist" description="GhidrAssist is a comprehensive Ghidra extension that leverages LLMs for tasks like code explanation, interactive chat, and autonomous binary analysis using agentic reasoning." image="https://opengraph.githubassets.com/1/jtang613/GhidrAssist" title="GhidrAssist: AI Assistance for Ghidra" %}

---
# Ghidra decompiler macros
WHen using the decompiler Ghidra spits out code which uses a number of macros which are not immediately obvious of their function, we provide some of these below with our recommendation of an easier to read version.

## CONCAT11(x, y)
In Ghidra, the CONCAT11(x, y) operation combines two 8-bit values (x and y) into a single 16-bit value. The operation is defined as:
```c
#define CONCAT11(x, y) = (((uint16_t)x) << 8) | ((uint8_t)y)
```

When cleaning up the decompiled code we suggest using the following replacement as it is more explicit about the purpose:
```c
// MergeBytesTo16Bit -  combines high and low bytes into a single 16bit value
#define MergeBytesTo16Bit(highByte, lowByte) = (((uint16_t)highByte) << 8) | ((uint8_t)lowByte)
```

---
# All Ghidra Posts
<div>

{% include console.html %}
</div>
