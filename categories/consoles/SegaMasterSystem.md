---
permalink: /mastersystem
layout: post
title: Sega Master System Reverse Engineering
recommend: 
- mastersystem
- sega
- introduction
recommendTitle: All SMS Posts
editlink: ../categories/consoles/SegaMasterSystem.md
category: mastersystem
excerpt: Awesome list of SEGA Master System Game Development and Reverse Engineering information
updatedAt: '2026-11-04'
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Sega Master System Reverse Engineering
    url: #
redirect_from:
  - /segamastersystem
  - /sms/
tags:
  - mastersystem
  - introduction
---

# Introduction
The Sega Master System grew from the 1985 Mark III. Its Z80 program shares a small address space with banked cartridge ROM, while the video display processor (VDP) keeps graphics in separate video RAM. Those two boundaries matter when reading a game: a CPU address may refer to different ROM banks over time, and a tile visible on screen will not appear as ordinary Z80 RAM [^2] [^3]. This hub connects the hardware references with accounts of how developers built and tested games.

---
# Developer Interviews
Period interviews give the hardware a workshop context: which machines developers used, how they loaded builds, and who handled the art and sound.

## US Gold Interview
[SMS Power's scan of *Zero* issue 7](https://www.smspower.org/Articles/Zero-Issue07-StayAWhile) visits **US Gold** during development of *Impossible Mission* and *Gauntlet*.

The interview estimates a 128 KB cartridge for *Impossible Mission*, including:
* 16 KB of Z80 code
* 70 KB of graphics
* 20 KB of sound

Their PC-based Z80 assembler connected to a Master System through a **Z80 probe** in place of the console's CPU. The interview says they loaded game data into RAM instead of burning ROM chips, and compares the turnaround with the PDS development system. It does not describe the precise PC-to-RAM interface.

In this same interview they comment on Japanese Sega Game developers:
> The often dubious quality of some of the Sega games is down to the strange programming habits of the Japanese. Generally there are around six people working on a game for a year. It's the way developers recruit programmers that is bizarre; they put an ad in the local rag asking for anyone interested in computing to contact them. The developers then train the new recruits and get them to join a team of novices to start work on a game. Established programmers aren't even considered.

It is a rather odd statement to make, almost sounds like one of the developers was salty about not being recruited for a Japanese Game developer...

You can read the full interview here:
* [Zero - Issue 07 - Stay A While... - Articles - SMS Power](https://www.smspower.org/Articles/Zero-Issue07-StayAWhile)

---
## MirrorSoft Interview
One of the best interviews with Sega Master System Developers was in the UK Magazine called **S the Sega Magazine**, specifically issue 8 where they interview the programmers of MirrorSoft in Bath about their upcoming game **Speedball**.

You can read the full interview here:
[S the Sega Magazine - Issue 8 - Back to the Future - Articles - SMS Power](https://www.smspower.org/Articles/STheSegaMagazine-Issue8-BackToTheFuture)

---
## Paul Hutchinson Interview
[Game SoundTracks](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson) has an interview with Paul Hutchinson where he talks about developing Sega Master System games such as **Spider-Man vs. The Kingpin**, including details of the development hardware that he was sent from Sega of America.

He programmed the game with a little help from John Kennedy and created all the Music and Sound! He worked from home as a stay-at-home dad so he sent the code to Sega over a Bulletin Board System (BBS).

He used a $2200 **Intel 486 DX2 66** CPU with a $300 14" CRT monitor, which is likely what he used to develop his Sega Master System games and then later an Amiga 2000HD for Deluxe Paint (Pixel Art) and Pro-Tracker (Music).

{% include link-to-other-site.html url="https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson" description="An interview with Paul Hutchinson where it mentions his time with Sega Master System and Game Gear Development" title="A Chat with Paul Hutchinson" %}


---
# Hardware
Hardware revisions and studio setups varied. The accounts below describe particular development systems, rather than a single standard kit.

## Development Kit Hardware
Surviving developer accounts help identify the tools used alongside modified retail machines.

Thanks to a [Game SoundTracks](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson) interview with Paul Hutchinson we know that Sega used to send out ZAX-ICE In-Circuit Emulators along with a modified Sega Master System [^1]:
> The Sega development kit included a ZAX-ICE (In-Circuit Emulator), which plugged into an SMS where the Z80 cpu would be (the SMS top cover was removed in order to achieve that).

We do have information about a third party development kit used for Master System development called the Krisalis development kit:
{% include_cached link-to-other-post.html post="/krisalis-development-kit-(sega)" description="For more information on The Third Party Master System Development Hardware check out this post." %}

The Sega Game Gear was a very similar system so some of the development hardware for Game Gear was also used for Master System games, you can find out about Game Gear development hardware in the post below:

{% include_cached link-to-other-post.html post="/sega-game-gear-devkit" description="For more information on Master System Development Hardware check out this post." %}

### Sega Digitizer System
The Sega Digitizer System was a development kit specifically for creating sprites and background tiles officially inside SEGA. It is unclear if they ever sold the system to third party developers. 
![SEGA Digitizer I](https://github.com/user-attachments/assets/d915b94d-6116-4984-95ed-26621dd05129)

This was not exclusive to Sega Master System development, it was also used in early sega arcade games, system 1 and system 16 (1986) and all the way up to Mega Drive (it had 3 different versions).

You can find out more including lots of images on [Video Games Densetsu: The Sega Digitizer System, a tool used by graphic...](https://videogamesdensetsu.tumblr.com/post/149092824100/the-sega-digitizer-system-a-tool-used-by-graphic)

## Retail SMS Hardware
Sega's [Mark III software reference manual](https://www.smspower.org/Development/SMSOfficialDocs) describes a 3.58 MHz Z80A, 8 KB of system RAM, a VDP with 16 KB of dedicated video RAM, and a programmable sound generator [^2]. Component manufacturers and BIOS sizes vary by model, so these capacities and interfaces are more useful for reading software than a chip list from one board.

### Why does a ROM address not always identify one file offset?
In the common Sega mapper layout, `$0000-$03FF` stays fixed while three slots cover `$0400-$3FFF`, `$4000-$7FFF` and `$8000-$BFFF`. Writes to `$FFFD-$FFFF` choose their banks; `$FFFC` controls cartridge RAM mapping [^3]. Code that writes one of these registers changes what later reads from that slot mean. The [SMS Power memory map](https://www.smspower.org/Development/MemoryMap) is a useful companion when tracing a jump across banks. Other cartridge mappers exist, so identify the mapping scheme before applying these addresses to every game.

### Where are the tiles and sprites stored?
The VDP's 16 KB of video RAM is outside the Z80's normal memory map. Sega's manual describes writing it through VDP ports, with a background tilemap and sprite attribute table alongside tile patterns [^2]. In a common layout, patterns occupy `$0000-$37FF` of video RAM, the tilemap `$3800-$3EFF`, and sprite attributes `$3F00-$3FFF` [^4]. These are *VDP* addresses, not cartridge offsets. The [SMS Power VRAM map](https://www.smspower.org/Development/VRAMMemoryMap) explains how VDP registers can move the tables and change which patterns sprites use.

For board photos and a fuller account of the console's buses and video pipeline, see Copetti's hardware analysis:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/master-system/" description="Copetti.org has an excellent tear down of the SMS Hardware and how it works" image="/public/consoles/Sega Master System.png" title="Sega Master System (SMS) Architecture - A Practical Analysis" %}

## Zilog Z80 Microprocessor
The Z80 runs game logic and sends commands to the VDP and sound generator through I/O ports. Sega's manual also ties the Pause button to the Z80's non-maskable interrupt at `$0066`, a useful landmark when following a game's control flow [^2].

{% include_cached link-to-other-post.html post="/z80" description="For more information about the Z80 CPU used in the Sega Master System check out this post." %}

---
# Software Development Kit
The [Sega Mark III software reference manual](https://www.smspower.org/Development/SMSOfficialDocs) covers CPU interrupts, VDP commands, memory management, input ports (including the light gun), and sound, with short assembly examples [^2]. It documents the machine rather than supplying a universal assembler and linker; the US Gold and Hutchinson interviews above show how individual teams assembled their own working setups.

---
# All Posts

<div>

{% include console.html %}
  
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platforms="Master System|Sega Master System" %}

---
# References
[^1]: [GST♥: Part 1: A Chat with Paul Hutchinson](https://gstdaisuki.tumblr.com/post/746416707047981056/a-chat-with-paul-hutchinson#:~:text=cover%20was%20removed%20in%20order,and%20we%20would%20meet%20and)
[^2]: [Sega, Software Reference Manual for the Sega Mark III Console](https://www.smspower.org/Development/SMSOfficialDocs).
[^3]: [SMS Power, Memory Map](https://www.smspower.org/Development/MemoryMap).
[^4]: [SMS Power, VRAM Memory Map](https://www.smspower.org/Development/VRAMMemoryMap).
