---
permalink: /md/
layout: post
title: Sega Mega Drive (Genesis)
recommend: megadrive
recommendTitle: All Mega Drive Posts
editlink: ../categories/consoles/MegaDrive.md
console: 'megadrive'
consoleimage: /public/consoles/Sega Megadrive.png
thumbnail: /public/consoles/Sega Megadrive.png
excerpt: Awesome list of SEGA Mega Drive and Genesis Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sega Mega Drive (Genesis)
    url: #
redirect_from:
  - /megadrive
  - /mega-drive
  - /genesis
tags:
  - megadrive
  - sega
---

Welcome to our in-depth guide to Amiga reverse engineering! This page serves two roles. It groups all of our posts related to Amiga reverse engineering, and it aggregates high quality sources from the web into create a unified reference.

The content starts high level, outlining the system, its history, and its official game development process, then moves into low level details with a focus on reverse engineering and homebrew development.

# Introduction
The Sega Mega Drive, also known as the Sega Genesis in North America, was a popular gaming console released by Sega in 1988, and has since become a beloved classic of the gaming world.



## History of the Mega Drive
**Sega Retro** has an excellent page covering the history of the Sega Mega Drive in great detail, it is highly recommended that you read this before anything else:

{% include link-to-other-site.html url="https://segaretro.org/History_of_the_Sega_Mega_Drive" description="Find out about the history of the SEGA Mega Drive in this excellent post" image="/public/consoles/Sega Megadrive.png" title="History of the Sega Mega Drive - Sega Retro"  %}

## How Sega bet against Reverse Engineering...and lost
[Modern Vintage Gamer](https://www.youtube.com/watch?v=-aLfKnJAe0Y) has an excellent video about the history of reverse engineering on the Sega Genesis. It covers the technical and legal strategies used by Electronic Arts and Accolade to bypass the console's **TMSS** security chip, detailing how clean-room reverse engineering led to a landmark court ruling for software interoperability.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-aLfKnJAe0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Are there any Mega Drive Reverse Engineered games or active projects?
Before diving in its best to check if there are any existing reversing projects for the Sega Mega Drive that you can contribute to, check out our other post specifically on this topic:

{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For the list of decompiled games check out this post." %}

## What are the games exclusive to the Sega Mega Drive?
There were many exclusive games for the Mega Drive and the various hardware add-ons that were released for it, these are ideal targets for reverse engineering and porting to other platforms:
* Sega Mega Drive - [Sega Genesis-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_Genesis-only_games)
* Sega 32X - [Sega 32X-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_32X-only_games)
* Sega CD - [Sega CD-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Sega_CD-only_games)


---

# Hardware
If you're interested in reverse engineering software for the Sega Mega Drive gaming console, it's essential to have a strong understanding of the hardware that powers it. By comprehending the inner workings of the Mega Drive hardware, you can better understand how the software interacts with the hardware and how you can potentially modify or enhance it.

In this section of our guide, we will provide you with detailed information and resources on the hardware of the Sega Mega Drive, including retail, prototype, and development hardware.

## Development Hardware
In order for game developers to create software for the SEGA Mega Drive, they had the choice of a number of different development hardware to purchase, or they could go it alone and create their own hardware. To find out more check out the post below.

{% include link-to-other-post.html post="/sega-mega-drive-genesis-development-kit/" description="For information about SEGA's Mega Drive development hardware check out this post." %}

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
> In the Megadrive days we took about 10 months for a game; now it’s about 15 months. There were some titles that took us a full 2 years, though.
Although he also revealed that there was a tight development cycle for Alien Solider as the deadline was January 3rd 1995 and they were working through the New Year switch.

### What did a Mega Drive Design Document look like?
**Hardcore Gaming 101** has a video showing the design document created for the Mega Drive game **MUSHA**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hfKbDRJv9Y8?si=DlTc8-7eWCtAd4gp&amp;start=123" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Mega Drive Software Development Kit
To find out about the Official SEGA Mega Drive Software development Kit check out our page on the topic:
{% include link-to-other-post.html post="/sega-mega-drive-genesis-sdk" description="For information about SEGA's Mega Drive software development kit check out this post." %}

---
## In-House Development Software
It was common in the industry to develop custom software in-house to make the game development process easier not just for the current game but also future games targetting the same hardware.

### DARI and KETCHUP (Game Arts)
For the development of the Mega Drive game **Alisia Dragoon**, Game Arts created some in-house development software called KETCHUP and DARI:
- **KETCHUP** was used for editing maps and defining the pattern of enemy movements by configuring basic curves in the editor, as can be seen in the image below [^3].
![KETCHUP Development Software](https://github.com/user-attachments/assets/da139574-dc3a-47b9-8590-efeda984bb39)
- **DARI** was used for editing animated Sprites for games targetting both Mega Drive and Sharp X68000 systems:
![DARI development software](https://github.com/user-attachments/assets/95868040-6b64-4ac3-b289-398d1fd50c30)


In the image below you can see the Main Programmer **Naozumi Honma** on the left and Assistant Programmer Osamu Harada on the right along with their **Sharp X68000** development computers (and Mega Drive controller presumably hooked up to a development kit) [^3]:
![image](https://github.com/user-attachments/assets/ea1b6728-814a-4075-ace2-414e976cacdc)


---
## Assembly Language programming

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
# References
[^1]: [Interview: Peter Morawiec (2007-04-20) by Sega-16 - Sega Retro](https://segaretro.org/Interview:_Peter_Morawiec_(2007-04-20)_by_Sega-16?rdfrom=https%3A%2F%2Finfo.sonicretro.org%2Findex.php%3Ftitle%3DInterview%3A_Peter_Morawiec_%282007-04-20%29_by_Sega-16%26redirect%3Dno)
[^2]: [Alien Soldier – 1995 Developer Interview - shmuplations.com](https://shmuplations.com/aliensoldier/)
[^3]: [Alisia Dragoon – 1992 Developer Interview - shmuplations.com](https://shmuplations.com/alisiadragoon/)
[^4]: [News/Sega of Japan Sound Documents and Source Code - Hidden Palace](https://hiddenpalace.org/News/Sega_of_Japan_Sound_Documents_and_Source_Code)
