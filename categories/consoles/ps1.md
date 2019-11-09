---
permalink: /ps1/
layout: post
console: 'ps1'
title: 'Sony Playstation 1 (PSX)'
consoleimage: /public/consoles/Sony Playstation.png
thumbnail: /public/consoles/Sony Playstation.png
recommend: ps1
recommendTitle: All PS1 Posts
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sony Playstation 1
    url: #
carousel:
  - title: PlayStation Architecture
    description: 'This episode with look at the PS1’s hardware and why Final Fantasy 7 was written the way that it was.'
    image: https://img.youtube.com/vi/MPXpH2hxuNc/maxresdefault.jpg
    link: /playStation-architecture
editlink: ../categories/consoles/ps1.md
---

# Introduction to Hacking the Sony Playstation One
Interested in learning more about the the Sony Playstation? Excellent! This section will guide you through the basics, starting from basic MIPS assembly language all the way to an introduction to reverse engineering your first game!

## Retail Playstation hardware
The PS1 was competing against both the Nintendo 64 and Sega Saturn during its lifetime and in some respects was the underdog in terms of processing power and graphics. 
However don’t be disillusioned the PS1 was still a very powerful machine for its time and when programmed correctly games could look stunning, sometimes even better than the Nintendo 64!

{% include link-to-other-post.html post="/playStation-architecture" description="For more information on the PS1 hardware architecture check out this post." %}

## Playstation 1 Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the `Debug symbols` in the retail release of the game. While this is not very common it has happened for a few games released for the Playstation One and gives you access to all the original functiontion and variables names that were used in the retail source code.

{% include link-to-other-post.html post="/ps1-debug-symbols" description="For a list of PS1 games that have debug symbols available check out this post." %}

---
# Development Kits (Hardware)
Development kits are released to game developers before the launch of the system to allow games to be developed for the system's launch. These systems would evolve over the systems lifespan and contained useful features for debugging and optimizing games for the platform. These systems were not just limited to the official offerings by Sony as a few other publishers had their own versions of development hardware.

## Official Development Kit
The official development kit for the PS1 was a partnership between Sony and SN Systems which allowed developers to use their PC to interact with the real PS1 hardware.

{% include link-to-other-post.html post="/official-playStation-devkit" description="For more information on the official Sony Playstation Devkit check out this post." %}

---
# Software Development Kits

## Official Software development kit
The Official Software development kit was developed by a partnership between `SN Systems` who are known for excellent 3rd party development kits and the Game Studio Psygnosis who are known for excellent quality games. 

It was called PSY-Q and even although it was owned by Sony it was actually a cross-platform development kit which included support for the Sega Saturn!

{% include link-to-other-post.html post="/official-playstation-1-software-development-kit-(psyq)/" description="For more information on Official SDK for the Playstation 1 check out this post." %}

---
<div>
{% include console.html %}
</div>
