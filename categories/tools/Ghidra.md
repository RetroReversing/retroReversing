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
---
Ghidra is the most advanced reverse engineering tool on the market, and best of all it is completly free and open source! Most of the content on RetroReversing will be using Ghidra going forward due to it being much more accessable than competitors such as IDA Pro.

# Introduction to Ghidra
There is no better way to start out the hobby reverse engineering than learning Ghidra, it is an essentail tool that takes much of the headaches out of reversing.

{% include link-to-other-post.html post="/intro-decompiling-with-ghidra" description="For a good introduction to decompiling with Ghidra check out this post." %}

# Console Plugins

## Nintendo Entertainment System
Download the Ghidra plugin from [Github](https://github.com/ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin/releases/tag/2021-09-23.3)

## Super Nintendo
There is only one Ghidra plugin for SNES but it is currently not under active development you can get it from [Github](https://github.com/achan1989/ghidra-snes-loader)

## Nintendo 64
Nintendo 64 games can be slightly harder to reverse due to everything being bundles as one large ROM image containing all the code and assets used in the game. Luckily there are a few tools that can help, such as the `Reversing Emulator` and a N64 Loader for Ghidra.

{% include link-to-other-post.html post="/n64-decompiling" description="If you are interested in Decompiling a Nintendo 64 game with Ghidra check out this post." %}

## Gamecube
Download the Ghidra plugin from [Github](https://github.com/Cuyler36/Ghidra-GameCube-Loader/releases)

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

## Playstation 1
Download the Ghidra plugin from [Github](https://github.com/lab313ru/ghidra_psx_ldr)
Also for a guide for using Ghidra for PS1 reversing: [tokimeki-memorial](https://tetracorp.github.io/tokimeki-memorial/methods/decompiling-psx-games.html)

## Playstation 2
Download the Ghidra plugin from [Github](https://github.com/chaoticgd/ghidra-emotionengine-reloaded)

---
# All Ghidra Posts
<div>

{% include console.html %}
</div>
