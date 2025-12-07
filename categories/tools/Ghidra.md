---
permalink: /ghidra
layout: post
console: 'ghidra'
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
Ghidra is the most advanced reverse engineering tool on the market, and best of all it is completly free and open source! Most of the content on RetroReversing will be using Ghidra going forward due to it being much more accessable than competitors such as IDA Pro.

# Introduction to Ghidra
There is no better way to start out the hobby reverse engineering than learning Ghidra, it is an essentail tool that takes much of the headaches out of reversing.

{% include link-to-other-post.html post="/intro-decompiling-with-ghidra" description="For a good introduction to decompiling with Ghidra check out this post." %}

# Console Plugins

## Nintendo Game Boy
Download the Ghidra plugin from [Github](https://github.com/Gekkio/GhidraBoy)

## Nintendo Game Boy Advance
Download the Ghidra plugin from [Github](https://github.com/pudii/gba-ghidra-loader)

An excellent guide for decompiling GBA games using Ghidra and mGBA is available on [Starcubelabs](https://www.starcubelabs.com/reverse-engineering-gba/)

Another excellent guide is on [wrongbaud](https://wrongbaud.github.io/posts/ghidra-debugger/)

## Nintendo DS
Download the Ghidra plugin from [Github](https://github.com/pedro-javierf/NTRGhidra)

## Nintendo Entertainment System
Download the Ghidra plugin from [Github]([https://github.com/ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin/releases/tag/2021-09-23.3](https://github.com/kylewlacy/GhidraNes/releases))

It even has multiple builds setup for each Ghidra version via Github Workflows!

Note that there was another older Ghidra plugin called **Ghidra-Nes-Rom-Decompiler-Plugin** however it failed to build against latest Ghidra (11.1.2).

## Super Nintendo
There is only one Ghidra plugin for SNES but it is currently not under active development you can get it from [Github](https://github.com/achan1989/ghidra-snes-loader)

## Nintendo 64
Nintendo 64 games can be slightly harder to reverse due to everything being bundles as one large ROM image containing all the code and assets used in the game. Luckily there are a few tools that can help, such as the `Reversing Emulator` and a N64 Loader for Ghidra.

{% include link-to-other-post.html post="/n64-decompiling" description="If you are interested in Decompiling a Nintendo 64 game with Ghidra check out this post." %}

## Gamecube
Download the Ghidra plugin from [Github](https://github.com/Cuyler36/Ghidra-GameCube-Loader/releases)

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

## Sega Master System/Game gear
Download the Ghidra plugin from [Github](https://github.com/VGKintsugi/Ghidra-SegaMasterSystem-Loader)

## Sega Mega Drive/Genesis
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_sega_ldr)

## Sega Saturn
Download the Ghidra plugin from [Github](https://github.com/VGKintsugi/Ghidra-SegaSaturn-Loader)

## Sega Dreamcast
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_sdc_ldr)
Also for GDI support in Ghidra: [Github](https://github.com/hazzaaclark/gdiGhidra)

## Original Xbox
Download the Ghidra plugin from [Github](https://github.com/XboxDev/ghidra-xbe)

## Xbox 360
Download the Ghidra plugin from [Github](https://github.com/zeroKilo/XEXLoaderWV)

## PlayStation 1
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_psx_ldr)
Also for a guide for using Ghidra for PS1 reversing: [tokimeki-memorial](https://tetracorp.github.io/tokimeki-memorial/methods/decompiling-psx-games.html)

## PlayStation 2
Download the Ghidra plugin from [Github](https://github.com/chaoticgd/ghidra-emotionengine-reloaded)

## PlayStation 3
There are a few useful script for working with PS3 executables on [Github](https://github.com/clienthax/Ps3GhidraScripts)

## PlayStation Portable
Download the Ghidra plugin from [Github](https://github.com/kotcrab/ghidra-allegrex)

---
# Recommended Plugins
While Ghidra has a large number of features built in, there are a number of features missing that are thankfully available due to community plugins, this section will cover some of the most useful for game reversing.

## CodeCut
CodeCut allows a user to assign functions to object files in Ghidra, and then interact with the binary at the object file level. Functions are assigned to object files by setting the Namespace field in the Ghidra database. DeepCut attempts to establish initial object file boundaries which the user can then adjust using the CodeCut Table window.
[https://github.com/jhuapl/codecut](https://github.com/jhuapl/codecut)

### GhidrAssist Project: LLM Integration for Ghidra
**GhidrAssist** is a powerful extension that integrates Large Language Models (LLMs) directly into the Ghidra reverse engineering workflow. 
The tool supports both local and cloud-based AI providers (such as OpenAI and Ollama) to facilitate tasks like code explanation, refactoring, and vulnerability detection. Uniquely, it features an 'Agentic Mode' utilizing the ReAct pattern, allowing the AI to autonomously plan and execute investigation steps within the binary.

{% include link-to-other-site.html url="https://github.com/jtang613/GhidrAssist" description="jtang613 has released GhidrAssist, a comprehensive Ghidra extension that leverages LLMs for tasks like code explanation, interactive chat, and autonomous binary analysis using agentic reasoning." image="https://opengraph.githubassets.com/1/jtang613/GhidrAssist" title="GhidrAssist: AI Assistance for Ghidra" %}

---
# Ghidra decompiler macros
WHen using the decompiler Ghidra spits out code which uses a number of macros which are not immedietly obvious of their function, we provide some of these below with our reccomendation of an easier to read version.

## CONCAT11(x, y)
In Ghidra, the CONCAT11(x, y) operation combines two 8-bit values (x and y) into a single 16-bit value. The operation is defined as:
```c
#define CONCAT11(x, y) = (((uint16_t)x) << 8) | ((uint8_t)y)
```

When cleaning up the deocmpiled code we suggest using the following replacement as it is more explicit about the purpose:
```c
// MergeBytesTo16Bit -  combines high and low bytes into a single 16bit value
#define MergeBytesTo16Bit(highByte, lowByte) = (((uint16_t)highByte) << 8) | ((uint8_t)lowByte)
```

---
# All Ghidra Posts
<div>

{% include console.html %}
</div>
