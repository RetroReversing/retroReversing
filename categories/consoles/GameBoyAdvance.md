---
permalink: /gba
redirect_from:
  - /gba/
layout: post
title: Nintendo Game Boy Advance (GBA) Reverse Engineering
recommend: 
 - gba
 - gameboy
recommendTitle: All GBA Posts
editlink: ../categories/consoles/GameBoyAdvance.md
category: gba
excerpt: Awesome list of GBA Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Game Boy Advance
    url: /gba
tags:
 - gba
updatedAt: '2026-10-16'
---

# Nintendo Game Boy Advance Reverse Engineering
<img width="721" height="414" alt="Game Boy Advance Playing Mario Kart" src="https://github.com/user-attachments/assets/29660934-30bc-49ed-ab66-2ef802e34eeb" />
Welcome to our page dedicated to Game Boy Advance reverse engineering! The Game Boy Advance was a popular handheld gaming console that was released in 2001, and has since become a favorite of gamers around the world. 

If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. On this page, we've compiled a list of links to other pages that cover various topics related to Game Boy Advance reverse engineering.

Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Game Boy Advance, and get ready to dive into the exciting world of Game Boy Advance reverse engineering!

# Hardware Architecture
**Copetti.org** has an excellent page on the hardware Architecture of the Game Boy Advance, it is also a great introduction to the system:

{% include link-to-other-site.html title="Game Boy Advance Architecture - A Practical Analysis" url="https://www.copetti.org/writings/consoles/game-boy-advance/" word1="GBA" word2="Architecture" color1="wisteria" color2="midnight" description="Check out this excellent introduction to the GBA hardware" %}

## GBA AGS-CPU-11 Hardware Schematics
The GameBoy Advance uses a 32-bit RISC CPU (**ARM7TDMI**) running at 16.78 MHz known as the **AGS-CPU-11**, for really low level detail for how this CPU works at a hardware level check out the Schematics:

[gb-schematics/AGS-CPU-11.pdf at master · Gekkio/gb-schematics · GitHub](https://github.com/Gekkio/gb-schematics/blob/master/AGS-CPU-11/schematic/AGS-CPU-11.pdf)

---
# Development Kits (Hardware)
{% include_cached link-to-other-post.html post="/game-boy-advance-development-kit" description="For more information on the GBA Development Kit hardware check out this post." %}

---
# Software Development Kits (SDK)

## Official SDK
{% include_cached link-to-other-post.html post="/game-boy-advance-sdk" description="For more information on the Official GBA SDK check out this post." %}

## Music Library (M4A)
{% include_cached link-to-other-post.html post="/game-boy-advance-sdk-m4a" description="For more information on the GBA Music SDK check out this post." %}

## SDK Demos
{% include_cached link-to-other-post.html post="/game-boy-advance-sdk-demos" description="For more information on the GBA SDK Demo games check out this post." %}

---
# Homebrew porting case studies
[abe's projects](https://www.youtube.com/watch?v=8aK1YYrkRfY) documents an attempt to port Super Auto Pets to the Game Boy Advance. The project is a modern example of adapting a game to the handheld's constraints.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8aK1YYrkRfY" title="I tried to port Super Auto Pets to the Gameboy Advance." loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
# Emulation
Much to the annoyance of Nintendo, Game Boy Advance emulators were released before the console was even launched! Developers managed to get their hands on early development kits and managed to build and release the first known GBA emulator known as **GBAEmu** in September 2000 [^1]! It was able to play the official SDK Demo's such as Yoshi's Island [^2].

Nowadays GBA emulators have such high compatibility that pretty much all commercial games work without much trouble even on low end hardware.

---
# Reverse Engineering 

## Reverse Engineering a Gameboy Advance Game: Klonoa
**Bruno Macabeus** has an excellent write up about reverse engineering the GBA game **Klonoa: Empire of Dreams**. The comprehensive guide covers the GBA architecture and ARM assembly, detailing the process of locating level data to build a custom level editor.

{% include link-to-other-site.html url="https://itnext.io/reverse-engineering-a-gameboy-advance-game-complete-guide-c2fca11f9e59" description="Bruno Macabeus details the complete process of reverse engineering Klonoa on the GBA, from understanding the hardware to creating a functional level editor." image="https://miro.medium.com/v2/resize:fit:1200/1*mF6CmjvVxpSvlFykbwbqZw.png" title="Reverse Engineering a Game Boy Advance Game: Complete Guide" %}

## Reverse Engineering a GBA Game: Pokémon Mystery Dungeon
Star Cube Labs has an excellent write up about reverse engineering the Game Boy Advance title *Pokémon Mystery Dungeon: Red Rescue Team*. It covers the fundamentals of the ARM and Thumb instruction sets, setting up a Ghidra workflow for static analysis, and using emulator debugging features to trace game logic and memory values.

{% include link-to-other-site.html url="https://www.starcubelabs.com/reverse-engineering-gba/" description="Star Cube Labs provides a comprehensive, beginner-friendly tutorial on reverse engineering GBA games, using Pokémon Mystery Dungeon as a case study to teach assembly analysis and debugging strategies." image="https://upload.wikimedia.org/wikipedia/en/8/82/Pokemon_Mystery_Dungeon_Blue_Rescue_Team_and_Red_Rescue_Team.png" title="Reverse Engineering a GBA Game" %}


## Figuring out an E-Reader Function
Matt Greer's Blog has an excellent write up about reverse engineering the Nintendo e-Reader's internal compression routines. It covers locating the `DecompressVPKorNonVPK` function within the **ERAPI** table, analyzing the ARM assembly to decipher parameter requirements, and utilizing the built-in VPK0 decompression to optimize storage for homebrew projects.

{% include link-to-other-site.html url="https://www.mattgreer.dev/blog/figuring-out-an-ereader-function/" description="Matt Greer details the reverse engineering of the Nintendo e-Reader's **ERAPI** to access internal VPK0 decompression, allowing for greater data density on homebrew cards." image="https://avatars.githubusercontent.com/u/1289134?v=4" title="Figuring out an E-Reader Function" %}


---
## Distinguishing ARM, Thumb and Literal Pools
The GBA's ARM7TDMI executes ARM and Thumb code.
Selecting the wrong instruction state can turn valid code into a misleading listing.
At a `bx` instruction, inspect the destination register: bit zero selects Thumb when set and ARM when clear [^3].
Arm's [branch and call guide](https://developer.arm.com/community/arm-community-blogs/b/architectures-and-processors-blog/posts/branch-and-call-sequences-explained) distinguishes these ARMv4T transitions from mechanisms introduced in later architectures [^4].
Do not apply an ARMv5 `blx` recipe to the GBA.

A literal pool is data embedded near code for PC-relative loads.
For example, a Thumb instruction `ldr r0, [pc, #16]` at `0x08000102` loads the word at `0x08000114`: add four to the instruction address, align that PC value down to four bytes, then add the displayed byte offset [^3].
Mark the target as data and inspect its users before extending a function through it.
The word may be an address or constant, not another instruction.

---
### Narrowing and Sign-Extension Clues
The [decomp.wtf ARM guide](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/app/guide/arm.md) highlights shifts and extending loads as useful type evidence [^5].
In this illustrative Thumb sequence, the low byte is retained and sign-extended:

```nasm
lsl r0,r0,#24
asr r0,r0,#24
```

Replacing the arithmetic right shift with a logical right shift would zero-extend the byte instead.
A signed-byte cast is one candidate explanation, but masks, packed values and intermediate conversions can produce similar effects.
Check the value's producers and consumers before changing every related field to a byte type.

Calls to arithmetic support routines are another clue; see [runtime helpers](/compilers#runtime-helpers-reveal-source-operations) before assuming an unfamiliar call is game-specific logic.

---
# All Posts Tagged with GBA
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="Game Boy Advance" %}

---
# References
[^1]: Retro Gamer Issue 01 page 62
[^2]: [emulator](https://www.zophar.net/gba/gbaemu.html)
[^3]: [Arm - ARM7TDMI Technical Reference Manual, DDI 0029G](https://documentation-service.arm.com/static/5e8e1323fd977155116a3129), programmer's model and instruction summaries.
[^4]: [Arm - Branch and call sequences explained](https://developer.arm.com/community/arm-community-blogs/b/architectures-and-processors-blog/posts/branch-and-call-sequences-explained).
[^5]: [decomp.wtf - ARM and Thumb guide](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/app/guide/arm.md).
