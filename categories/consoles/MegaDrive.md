---
permalink: /megadrive
layout: post
title: Sega Mega Drive (Genesis)
recommend: megadrive
recommendTitle: All Mega Drive Posts
editlink: ../categories/consoles/MegaDrive.md
category: megadrive
updatedAt: '2026-10-27'
excerpt: Awesome list of SEGA Mega Drive and Genesis Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Sega Mega Drive (Genesis)
    url: #
redirect_from:
  - /md
  - /mega-drive
  - /genesis
  - /md/
tags:
  - megadrive
  - sega
---

The Mega Drive pairs a Motorola 68000 with a Z80, a video display processor and separate sound chips. That mix makes a ROM more interesting than a single stream of 68000 instructions: graphics and sound depend on how the processors share the machine. This hub connects our development and reverse-engineering posts with interviews, original documentation and useful outside resources.

# Introduction
Sega released the Mega Drive in Japan in 1988; it was sold as the Genesis in North America.



## History of the Mega Drive
**Sega Retro** traces the console's launch, regional releases and later hardware revisions:

{% include link-to-other-site.html url="https://segaretro.org/History_of_the_Sega_Mega_Drive" description="Find out about the history of the SEGA Mega Drive in this excellent post" image="/public/consoles/Sega Megadrive.webp" title="History of the Sega Mega Drive - Sega Retro"  %}

## How Sega bet against Reverse Engineering...and lost
[Modern Vintage Gamer](https://www.youtube.com/watch?v=-aLfKnJAe0Y) has an excellent video about the history of reverse engineering on the Sega Genesis. It covers the technical and legal strategies used by Electronic Arts and Accolade to bypass the console's **TMSS** security chip, detailing how clean-room reverse engineering led to a landmark court ruling for software interoperability.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-aLfKnJAe0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Are there any Mega Drive Reverse Engineered games or active projects?
Our reverse-engineered-games index is a place to find existing Mega Drive projects:

{% include_cached link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For the list of decompiled games check out this post." %}

## What are the games exclusive to the Sega Mega Drive?
There were many exclusive games for the Mega Drive and the various hardware add-ons that were released for it, these are ideal targets for reverse engineering and porting to other platforms:
* Sega Mega Drive - [Sega Genesis-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_Genesis-only_games)
* Sega 32X - [Sega 32X-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_32X-only_games)
* Sega CD - [Sega CD-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_CD-only_games)


---
# Hardware
The retail machine and the equipment used to build its games answer different questions. Development kits show how code reached test hardware; the console's bus and video hardware explain what that code actually does.

## Why does the 68000 request the Z80 bus?
The 68000 can access the Z80's RAM, but it must request the Z80 bus and wait for acknowledgement before doing so. Sega's [*Genesis Software Development Manual*](https://gendev.spritesmind.net/files/md/tech/Genesis%20Software%20Development%20Manual%20%5BVersion%202.0%5D%20%5B1991-07-09%5D.pdf) warns that releasing the request inside an interrupt can let the Z80 resume before the 68000 finishes a planned access, corrupting Z80 RAM or reading the wrong bank [^5]. That makes bus-request writes around a sound-driver update meaningful when tracing a game's 68000 code. The same manual documents a separate timing precaution when the Z80 accesses the 68000 bus near controller I/O [^5].

## Development Hardware
Studios could buy development hardware or build their own. Our hardware guide collects the known kits:

{% include_cached link-to-other-post.html post="/sega-mega-drive-genesis-development-kit" description="For information about SEGA's Mega Drive development hardware check out this post." %}

## Sega Digitizer System
The Sega Digitizer System was a development kit specifically for creating sprites and background tiles officially inside SEGA. It is unclear if they ever sold the system to third party developers. It required a **NEC PC-98** for development which was the ideal choice for many game developers in japan.
![SEGA Digitizer III](https://github.com/user-attachments/assets/11be3100-1e8e-4c53-b935-6ba691482687)

It had a rudimentary touch screen with a pen allowing artists to "draw" pixels directly on the screen.

This was not exclusive to Mega Drive development, it was also used in early sega arcade games, system 1 and system 16 (1986).

You can find out more including lots of images on [Video Games Densetsu: The Sega Digitizer System, a tool used by graphic...](https://videogamesdensetsu.tumblr.com/post/149092824100/the-sega-digitizer-system-a-tool-used-by-graphic)

---
# Mega Drive Game Software Development

## The Mega Drive Game development process 

### What programming languages were used to create games for the Sega Mega Drive?
Although almost all Mega Drive games were written in 68K assembly there is one known commercial Mega Drive game to be written in C, **Sonic Spinball** [^1]!

## What computers were used to write Mega Drive games?
Popular choices for computers for writing Mega Drive games in Japan were the **Sharp X68000** (it shared the same processor) and the Intel 8086 based **NEC PC-9801**. In the UK the **Amiga** was a very popular choice for writing Mega Drive games due to it being based on the same 68000 CPU.

The **Sharp X68000** is known to have been used at **Game Arts** [^3] and is a smart choice as the assembly code can be tested out on the hardware directly and only required the Mega Drive development kit for testing the graphics and sound capabilities. So game logic could be tested more efficiently.

The **NEC PC-9801** is known to have been used at SEGA of Japan thanks to the **Sound-Source leak** [^4].

### Porting From AMIGA to MEGA DRIVE - with Stoo Cambridge
**onaretrotip** has an excellent interview with **Stoo Cambridge** about porting Amiga games like **Megalomania** and **Sensible Soccer** to the Sega Mega Drive. It covers the technical similarities (shared 68000 CPU) and differences (bitmap vs. tile-based graphics), as well as specific tricks used to overcome the Mega Drive's color limitations, such as overlaying playfields to simulate 32-color intro screens.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CX8Hvt2Cnqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### How large were Mega Drive game development teams?
The development of the game **Alien Soldier** and other games by **Treasure** had only 4 people working on it, 2 programmers and 2 game designers which we found out in a translated interview with **Masato Maegawa**[^2]:
> In the early 90s, for our Megadrive developments, all our developments were done with 2 programmers and 2 designers max. Alien Soldier, in fact, started out with just one person, NAMI, who took on the role of both designer and programmer.

### How long did it take to develop games for the Mega Drive back in the day?
At **Treasure** (e.g Alien Soldier) **Masato Maegawa** reveals that it takes around about 10 months but that more complicated games could last 2 years [^2]:
> In the Megadrive days we took about 10 months for a game; now it's about 15 months. There were some titles that took us a full 2 years, though.
Although he also revealed that there was a tight development cycle for Alien Solider as the deadline was January 3rd 1995 and they were working through the New Year switch.

### What did a Mega Drive Design Document look like?
**Hardcore Gaming 101** has a video showing the design document created for the Mega Drive game **MUSHA**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hfKbDRJv9Y8?si=DlTc8-7eWCtAd4gp&amp;start=123" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Mega Drive Software Development Kit
Our SDK guide covers Sega's official Mega Drive software tools:
{% include_cached link-to-other-post.html post="/sega-mega-drive-genesis-sdk" description="For information about SEGA's Mega Drive software development kit check out this post." %}

The 32X add-on had its own Developer Tool Kit CD, with SNASM2, source code and lockout implementation. We cover it separately:
{% include_cached link-to-other-post.html post="/sega-32x-sdk" description="Browse the Sega 32X Developer Tool Kit CD with the interactive archive explorer, including the cartridge tools, demos, and dated DTS drops." %}

---
## In-House Development Software
It was common in the industry to develop custom software in-house to make the game development process easier not just for the current game but also future games targetting the same hardware.

### DARI and KETCHUP (Game Arts)
For the development of the Mega Drive game **Alisia Dragoon**, Game Arts created some in-house development software called KETCHUP and DARI:
* **KETCHUP** was used for editing maps and defining the pattern of enemy movements by configuring basic curves in the editor, as can be seen in the image below [^3].
![KETCHUP Development Software](https://github.com/user-attachments/assets/da139574-dc3a-47b9-8590-efeda984bb39)
* **DARI** was used for editing animated Sprites for games targetting both Mega Drive and Sharp X68000 systems:
![DARI development software](https://github.com/user-attachments/assets/95868040-6b64-4ac3-b289-398d1fd50c30)


In the image below you can see the Main Programmer **Naozumi Honma** on the left and Assistant Programmer Osamu Harada on the right along with their **Sharp X68000** development computers (and Mega Drive controller presumably hooked up to a development kit) [^3]:
![image](https://github.com/user-attachments/assets/ea1b6728-814a-4075-ace2-414e976cacdc)


---
## Assembly Language programming

---
### Sonic coding techniques
[GameHut](https://www.youtube.com/watch?v=Br5NfeQsLQo) examines coding techniques used in Sonic the Hedgehog. The examples connect the Mega Drive's programming model to the behaviour of a specific game.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Br5NfeQsLQo" title="The Coding Secrets hidden in &quot;Sonic the Hedgehog&quot;" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
### Sonic 3D exception handling
[GameHut](https://www.youtube.com/watch?v=i9bkKw32dGw) explains why physically disturbing Sonic 3D can reveal a level-select screen. The example connects an unusual player-visible result with the game's defensive programming.

<iframe width="560" height="315" src="https://www.youtube.com/embed/i9bkKw32dGw" title="Why does PUNCHING Sonic 3D trigger a Secret Level Select?" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

### Basics of 68K Assembly
In an interview with **Computerphile** the Tanglewood developer **Matt Phillips** explains the basics of how assembly language programming works for creating Mega Drive games:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Kalmryn9_sE?si=3GarbB4oJDhYoxLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In the video he uses Windows 95 and Notepad++ to edit the assembly files, which are then assembled using the MS-DOS command:
```bash
snasm68k /sdb test.asm, test.cof
```
You can see it being assembled in the screenshot:
![Assembled in SNASM68K](https://github.com/user-attachments/assets/1441632b-e33e-4bc8-bdd1-15954c7d1873)

It is then loaded into the SNASM debugger (V2.0) on a SNASM Mega CD Development Kit, which connects to the PC via an ISA card and SCSI cable.

![SNASM Debugger](https://github.com/user-attachments/assets/f5b11139-d39b-462f-a673-d57ee2f0f082)


### Code Your Own Sonic Game
The Youtuber **Game Hut** has a series of tutorials on Sega Mega Drive programming.
Part 1:
<iframe width="560" height="315" src="https://www.youtube.com/embed/PSYhSmXBgIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Part 2:
<iframe width="560" height="315" src="https://www.youtube.com/embed/tdjVfl_YWd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




---
# All Posts
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platforms="Mega Drive|Sega Mega Drive|Mega-CD|Sega Mega CD|32X|Sega 32X" %}

---
# References
[^1]: [Interview: Peter Morawiec (2007-04-20) by Sega-16 - Sega Retro](https://segaretro.org/Interview:_Peter_Morawiec_(2007-04-20)_by_Sega-16?rdfrom=https%3A%2F%2Finfo.sonicretro.org%2Findex.php%3Ftitle%3DInterview%3A_Peter_Morawiec_%282007-04-20%29_by_Sega-16%26redirect%3Dno)
[^2]: [Alien Soldier – 1995 Developer Interview - shmuplations.com](https://shmuplations.com/aliensoldier/)
[^3]: [Alisia Dragoon – 1992 Developer Interview - shmuplations.com](https://shmuplations.com/alisiadragoon/)
[^4]: [News/Sega of Japan Sound Documents and Source Code - Hidden Palace](https://hiddenpalace.org/News/Sega_of_Japan_Sound_Documents_and_Source_Code)
[^5]: [Sega, *Genesis Software Development Manual*, version 2.0 (1991), “Precautions for Software Development”](https://gendev.spritesmind.net/files/md/tech/Genesis%20Software%20Development%20Manual%20%5BVersion%202.0%5D%20%5B1991-07-09%5D.pdf)
