---
permalink: /handhelds
layout: post
category: handhelds
title: Handheld Consoles Reverse Engineering
consoleimage: /public/consoles/Handhelds.png
image_: /public/images/Handhelds.jpg
twitterimage_: https://www.retroreversing.com/public/images/Handhelds.jpg
excerpt: Awesome list of Obscure Handheld Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Handheld Consoles
    url: #
recommend: 
- 3ds
- ds
- gba
- gameboy
- gamecom
- gamegear
- pokemonmini
- psp
- vita
- wonderswan
recommendTitle: All Handheld Posts
editlink: ../categories/consoles/Handhelds.md
updatedAt_: '2024-05-05'
tags:
  - 3ds
  - ds
  - gba
  - gameboy
  - gamecom
  - gamegear
  - handhelds
  - pokemonmini
  - psp
  - vita
  - wonderswan
---

# Introduction
Handheld consoles have been a significant part of the gaming industry for decades, offering portable gaming experiences that allow players to enjoy their favorite games on the go. These devices have evolved considerably over time, from simple LCD-based systems to sophisticated multimedia platforms.

This page collects the RetroReversing handheld console hubs, then highlights some of the more obscure commercial handhelds that are easy to miss.

---
# Nintendo
Nintendo's handheld platforms are useful reverse-engineering targets because they span simple 8-bit cartridge systems, ARM-based handhelds, dual-screen hardware, and later security-heavy systems.

## Game Boy and Game Boy Color
The Game Boy and Game Boy Color are useful handheld reverse-engineering targets because the hardware is small enough to understand directly, but still has interesting cartridge mappers, boot ROM behaviour, audio quirks, and late-era development toolchains.

{% include_cached link-to-other-post.html post="/gameboy" description="Game Boy and Game Boy Color hardware, development, reverse engineering, file formats, and source code resources." %}

## Game Boy Advance
The Game Boy Advance moved Nintendo's handheld line to a 32-bit ARM CPU while keeping compatibility with earlier Game Boy software. It is especially useful for studying handheld SDKs, ARM and Thumb code, commercial development hardware, and reverse engineering workflows that sit between 2D console-era code and later embedded platforms.

{% include_cached link-to-other-post.html post="/gba" description="Game Boy Advance development hardware, SDK material, emulation notes, and reverse engineering resources." %}

## Nintendo DS
The Nintendo DS added a second screen, touch input, Wi-Fi, and a dual-processor architecture. Those features make it a good platform for file-format research, ROM hacking, and studying how Nintendo's Nitro-era development tools organised game assets.

{% include_cached link-to-other-post.html post="/ds" description="Nintendo DS hardware, SDKs, file formats, homebrew, and ROM-hacking resources." %}

## Nintendo 3DS
The Nintendo 3DS, codenamed CTR during development, was Nintendo's final dedicated handheld-only family before the Switch. Its security model, development hardware, file formats, and early hacking history make it a useful bridge between older cartridge-based handhelds and modern mobile-style game systems.

{% include_cached link-to-other-post.html post="/3ds" description="Nintendo 3DS hardware, development kit, file format, and hacking resources." %}

## Pokemon Mini
The Pokemon Mini was a low profile handheld games console developed by Nintendo's System Development Division (SDD) in partnership with 
**Jupiter Corporation** and released in Japan on December 14th 2001.

{% include_cached link-to-other-post.html post="/PokemonMini" description="For more information about the Pokemon Mini check out this post." %}

---
# Sony
Sony's handheld systems moved portable game development closer to home-console production, with larger SDKs, richer media formats, and stronger platform security.

## PlayStation Portable
The PlayStation Portable brought a much more home-console-like development model to handheld games, with MIPS-based hardware, UMD media, a large official SDK, and middleware-heavy production workflows. It is a good target for studying debug symbols, executable formats, and Sony handheld development tools.

{% include_cached link-to-other-post.html post="/psp" description="PlayStation Portable hardware, SDK, development kit, file format, and reverse engineering resources." %}

## PlayStation Vita
The PlayStation Vita continued Sony's handheld line with ARM-based hardware, dedicated development units, cartridge authentication, and a software stack closer to later PlayStation platforms. It is especially interesting for reverse engineering file formats, security boundaries, and development hardware.

{% include_cached link-to-other-post.html post="/vita" description="PlayStation Vita hardware, development unit, file format, and cartridge authentication resources." %}

---
# Tiger Electronics
Tiger Electronics released the Game.com as a touchscreen handheld in the late 1990s, making it an unusual target compared with the more common Nintendo and Sega handhelds.

## Game.com
The Game.com (pronounced "game com") was a handheld game console released by Tiger Electronics in 1997. It was designed to compete with other handheld gaming devices of its time, such as the Nintendo Game Boy and the Sega Game Gear. However, despite some innovative features, the Game.com ultimately struggled to gain traction in the market.

{% include_cached link-to-other-post.html post="/gamecom" description="For more information about the Game.com check out this post." %}

---
# Game Park Holdings
Game Park Holdings produced open handheld systems that became popular with homebrew developers and emulator users, especially because they were less locked down than most commercial handhelds.

## GP32
The GP32 is a handheld gaming console developed by the South Korean company Game Park Holdings. 
It was released in November 2001. 
One of the notable features of the GP32 was its open architecture, which allowed independent developers to create and distribute their own games and applications for the platform without the need for official licensing or approval.

The GP32 was powered by a 133 MHz ARM 920T (32-bit RISC) processor and featured a 320x240 pixel LCD screen. 
It utilized SmartMedia cards for game storage, allowing users to easily swap out games and applications. The device also had built-in support for MP3 playback and electronic books, expanding its functionality beyond gaming.

Although the GP32 did not achieve the same level of commercial success as some of its competitors, such as the Nintendo Game Boy Advance, it gained a dedicated following among enthusiasts and indie developers due to its open nature and potential for homebrew development.

## GP32 Games
There were 28 commercial games released for the GP32, Wikipedia has a page listing them all:
[List of commercial GP32 games - Wikipedia](https://en.wikipedia.org/wiki/List_of_commercial_GP32_games)

## GP2X
The GP2X is a handheld gaming console developed by the South Korean company GamePark Holdings. It was released in 2005 as the successor to the GP32. The GP2X was notable for its open architecture and support for homebrew software, much like its predecessor.

The GP2X ran on a Linux-based operating system, which provided a stable and customizable platform for developers

---
# Bandai
Bandai's WonderSwan line is a useful Japanese handheld case study, with an NEC V30-derived CPU and a compact library that includes several notable RPG and visual-novel releases.

## Wonderswan
The Wonderswan is a classic video game console that was only ever released in Japan (on 4th March 1999).

{% include_cached link-to-other-post.html post="/wonderswan" description="For more information about the Bandai Wonderswan check out this post." %}

---
# Atari
Atari entered the handheld market early with color LCD hardware, giving the Lynx a different technical profile from the monochrome Game Boy era.

## Lynx
The Atari Lynx is a handheld gaming console released by Atari Corporation in September 1989. One of the most significant features of the Atari Lynx was its color LCD screen compared to the Game Boy's monochrome screen.

---
# SEGA
SEGA's handheld hardware sits close to the Master System family, which makes it useful when comparing portable and home-console workflows across related 8-bit platforms.

## Game Gear
The Game Gear was a handheld gaming console that was released by SEGA in 1990, and was notable for its full-color backlit screen and library of classic SEGA games.

{% include_cached link-to-other-post.html post="/gamegear" description="For more information about the Sega Game Gear check out this post." %}
