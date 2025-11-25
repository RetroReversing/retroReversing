---
permalink: /arcade/
layout: post
title: Arcade - How retro arcade games were made
recommend: arcade
recommendTitle: All Arcade Posts
editlink: ../categories/consoles/Arcade.md
console: 'arcade'
consoleimage: /public/consoles/Arcade.png
excerpt: Awesome list of Arcade Game Development information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Arcade
    url: #
tags:
  - arcade
---

# Development of Arcade Games

## What programming languages were used to create Arcade games?
Since every Arcade board is different it can depend on the power of the system, some less powerful boards used pure assembly to write the game code and others used a higher level language such as C.

For example the 1990 game **Klax** was written in C according to **Greg Omi** who was sent the source code for his Atari Lynx port of the game [^4].

This is further confirmed in a 1990 interview with original designer of Klax **Mark Stephen Pierce**[^5]:
> "All Atari coin‑ops today are written in C ‑ that's the most popular language with the programmers here, I guess. The actual programming work is carried out on standard terminals, and then transferred into our VAX machines where it's compiled and compressed.  Finally it's downloaded from there through an EPROM burner and onto the hardware for the game that the engineer has put together. Every coin‑op's hardware is different partly because each game is different, and partly as a form of copy protection.

Early arcade games didnt use a programming language at all with all the game logic built at the hardware level. So to change the game it meant literally rewiring the hardware components and modding involved adding new hardware components which bypassed the original behavior.

## What tools were used to create the art for Arcade games?
In the 1990 interview with **Mark Stephen Pierce** the following was published (in "The One" magazine) [^5]:
> Mark's graphics are produced on a PC ‑ but using Atari's own specially written utility: RAD (Rendering and Animation Design). "It's basically a standard paint tool with some animation facilities. I design and draw on the PC before uploading everything to the VAX to be compressed."


## What did a Typical Arcade Game Development Team Look Like?
In the early days of arcade gaming, development teams needed to be highly specialized. Unlike today’s streamlined development environments, both **hardware and software** had to be built **from scratch** for each new game. This required expertise across a wide range of disciplines, from custom chip design to game logic and audiovisual presentation.

As arcade hardware evolved and became more standardized—often borrowing from or influencing console architectures—the **hardware workload** decreased slightly. However, the **software and design** demands increased, calling for larger, more diverse teams to handle game mechanics, visual design, sound, and player experience.

A great example is Taito’s groundbreaking 1987 arcade title, **Darius**, which employed a team with clearly defined roles:
- **Sound Designer** – Yasuhiko Tanaka
- **Composer** – Hisayoshi “OGR” Ogura
- **Cabinet Designer** – Natsuki Hirosawa
- **Game Designer** – Junji Yarita
- **Planner** – Akira Fujita
- **Programmer** – Toru Sagawara
- **Hardware Engineer** – Takeki Nakamura

For a deeper look into the development of *Darius*, check out this excellent translated interview on **shmuplations**:  
[Darius I & II – 1986/89 Developer Interviews – shmuplations.com](https://shmuplations.com/dariusii/)

## How long did it take to develop an Arcade game?
In 1990 Atari developer **Mark Stephen Pierce** had the following to say about the length of time for developing an Arcade game:
> An Atari game takes, on average, around a year to produce ‑ but then an average can come from two extremes, which is certainly in Mark's case - Escape took over two years to put together, whereas Klax was written in just four months!

## How were Arcade games tested?
The challenge with Arcade games is they are expensive to produce and need to be visually appealing, easy to grasp, and have a carefully balanced difficulty level. Challenging enough to be engaging but not so hard that it drives players away or so easy that it allows endless play on a single coin.

So prototype Arcade games were placed into various arcades and player behaviour was closely monitored to strike the right balance of difficulty and engagement. The Atari games even had a video recorder built in so that the development team could watch how players played the game, along with a computer that tracked the money made for the game [^5]. 

---
# Arcade Development Hardware

## Game Development at Taito
Taito put together a **250-page Hardware Manual** for new developers who joined the team to learn how to create an Arcade game from scratch using RAM/ROM/CPU chips and a standard TV. This was before the internet and even before there were many books on the topic when the industry was very new and companies didn't want to share their "trade secrets".

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">With the Taito Hardware Manual for reference, new engineers were sent out to Akihabara to get some ROM and RAM chips and a CPU, solder them all together onto a test PCB, then write a brick breaker game.<a href="https://t.co/huXblA0rv4">https://t.co/huXblA0rv4</a><a href="https://t.co/CXlnKUPHkH">https://t.co/CXlnKUPHkH</a> <a href="https://t.co/Yip45KbLIE">pic.twitter.com/Yip45KbLIE</a></p>&mdash; Taito Corporation (@TaitoCorp) <a href="https://twitter.com/TaitoCorp/status/1748438175977226708?ref_src=twsrc%5Etfw">January 19, 2024</a></blockquote>

They used an In-Circuit Emulator to debug the programs they were creating as can be seen in this diagram:
![Alt text](/public/images/arcade/TaitoArcadeICE.png)

---
## Development of RoboTron (1981)
At GDC 2014 **Eugene Jarvis** gives an excellent presentation about the development of Robotron:
<iframe width="560" height="315" src="https://www.youtube.com/embed/8AbiBOK8jZ0?si=1ftjO79ry3ld1i6u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

They used the **Gimix 6809** as their development system:
![image](https://github.com/user-attachments/assets/2677fd5b-8cba-4ca2-94ec-cf0bf58fbee1)

As for the software side, they had to write their own text editor and assembler, they didn't comment or use tabs as every byte that was used in memory was precious:
![image](https://github.com/user-attachments/assets/76461177-48dc-4a86-a85c-744684448b7a)

In Retro Gamer 28 there is an excellent article from **Archer Maclean** where he went to a presentation by **Eugene Jarvis** and this is what he had to say [^3]:
> He went on to describe that his code spilled over into multiple files on more
than one floppy, and yet there were no multi-floppy code-linkers so he devised the exact same bizarre jump vector solution I had devised to allow non-linked blocks of code to communicate.
> Then he described how he had to write ‘utilities’ to edit tiny bitmaps drawn on graph paper and entered as hex,
> and how to get around the one hour compile times by editing memory directly and disassembling in your head,
> and how to make interesting sounds from 30 bytes of data, and how to write ultra-tight optimised machine code to move small bitmaps around a screen fast, and off course, cram it all into a 32k ROM.

---
# Arcade Game Source Code

## Defender (1981 by Williams Electronics)
The source code for the classic arcade game from 1981 **Defender** has been released on Github:
[mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)

It is written in a variant of the Assembly language specifically for the Motorola 6809 CPU [^1].

The physical board had 11 ROM chips on it that would need to be flashed with the assembled result of that source code [^1].

Defender was developed by **Eugene Jarvis** and **Larry DeMar** two programmers who utilized algorithms to great effect rather than relying on artists, one such example is the classic explosion particle effect. Defender became one of the highest grossing arcade games in history [^2].

The first issue of the Magazine Wireframe contains a python (pygame) code snippet to re-create the classic particle explosion from Defender [^2]. You can find that code on github too: [https://github.com/Wireframe-Magazine/Wireframe-1/blob/master/explosion.py](https://github.com/Wireframe-Magazine/Wireframe-1/blob/master/explosion.py)


---
# Speed Up Kits
Speed-up kits, also known as **enhancement kits**, were aftermarket hardware modifications designed to alter the behavior of arcade games. These kits typically increased game speed, introduced new features, or adjusted difficulty levels. By modifying the original game code or hardware, speed-up kits aimed to rejuvenate player interest and extend the commercial lifespan of arcade cabinets.

## Purpose and Impact of Speed Up Kits
The primary motivations for implementing speed-up kits included:
- **Increased Revenue**: Faster gameplay reduced session times, allowing more players per hour and increasing coin drop rates.
- **Extended Cabinet Life**: By refreshing game mechanics, operators could delay purchasing new machines.
- **Enhanced Player Engagement**: New challenges and features kept experienced players interested.

For example, the original **Asteroids** game allowed skilled players to play indefinitely on a single credit. A speed-up kit made the game more challenging, thereby reducing playtime per credit and increasing revenue .

---
## Notable Examples

<iframe width="560" height="315" src="https://www.youtube.com/embed/rhM8NAMW_VQ?si=hHhQDzRVGSHGOtsp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Some of the most famous examples of speed up kits are:
- **Super Missile Attack**: Developed by General Computer Corporation (GCC), this kit modified Atari's *Missile Command*, adding new enemies and increasing difficulty. Its success led to legal action from Atari, which was eventually settled when Atari hired GCC to develop games .
- **Ms Pac Man**: Another GCC project, this kit transformed Namco's **Pac-Man** into **Crazy Otto**, introducing new mazes and improved AI. Midway licensed and released it as an official sequel called **Ms Pac Man** [^6].

---
## How were Speed Up Kits implemented?
Speed-up kits were typically implemented through reverse engineering the original game and modifying it using:

- **Daughterboards**: Additional circuit boards that modified signals or data paths.
- **ROM Replacements**: Swapping out original ROM chips with modified versions containing new code.
- **Clock Modifications**: Altering the system clock to increase CPU speed, thus speeding up gameplay .

---
## Legal and Ethical Considerations
While speed-up kits offered benefits to arcade operators, they raised legal and ethical questions:

- **Intellectual Property**: Modifying and distributing altered versions of games without permission infringed on the original developers' rights.
- **Quality Control**: Unauthorized modifications could lead to inconsistent gameplay experiences and potential hardware issues.

The legal dispute between Atari and GCC over **Super Missile Attack** highlighted these concerns. The settlement resulted in GCC ceasing unauthorized modifications and instead developing licensed content resulting in **Ms Pac Man** [^6].

---
## Legacy of Speed Up Kits
Speed-up kits played a significant role in the arcade industry's evolution:

- **Innovation Catalyst**: They demonstrated the demand for game enhancements, influencing official sequels and updates.
- **Technical Advancement**: The reverse engineering skills developed during kit creation contributed to advancements in game development and hardware understanding.
- **Preservation Challenges**: Today, original speed-up kits are valuable to collectors and historians but pose challenges for preservation due to their unofficial nature.


---
# MAME: The Multiple Arcade Machine Emulator
MAME (Multiple Arcade Machine Emulator) is a free and open-source project that emulates the hardware of arcade systems, allowing classic games to run on modern platforms. Its primary goal is to preserve decades of software history by accurately documenting and replicating the behavior of original arcade hardware.

## History of MAME
<iframe width="560" height="315" src="https://www.youtube.com/embed/Mse3Wo0hbLE?si=8otkKlDYUzI7koyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
MAME version 0.1 was released on February 5, 1997, by Italian programmer **Nicola Salmoria**. This first version was a command-line application for MS-DOS and supported five games: ￼ ￼
* Pac-Man
* Pengo
* Phoenix
* Pleiads
* Frogger

To run a game, you would use the DOS prompt like so:
```dos
mame pacman
```

All of the first games used a Z80 CPU, the first non-z80 game was Centipede which was released in version 0.10	on the 13th March 1997 [^8].

For a full release history of MAME check out: [MAME Release Dates - Retro Arcade Guides](https://pleasuredome.miraheze.org/wiki/MAME_Release_Dates?utm_source=chatgpt.com)

### 1997 July - MAME32 first release
![MAME32](https://github.com/user-attachments/assets/63931c3c-1316-4c15-ba2b-e90dd137d698)
The first release of MAME32 occurred on **July 18, 1997**, with version 0.26.1 [^8]. This marked the debut of a Windows-based version of MAME, featuring a graphical user interface (GUI) that simplified the process of loading and managing arcade ROMs. 

Developed by **Chris Kirmse**, MAME32 made arcade emulation more accessible to a broader audience by eliminating the need for command-line operations required in the original MS-DOS version of MAME.

---
### 2014 - The Internet Arcade
The Internet Arcade was first launched in early November 2014, it enables users to play classic arcade games directly in their web browser by leveraging **JSMESS**, a JavaScript port of the MAME emulator [^9].

JSMESS was created by cross-compiling the original C/C++ codebase into JavaScript using **Emscripten**, a toolchain that translates C/C++ code into asm.js or WebAssembly for high-performance execution in browsers.

The original source code for JSMESS, is still available on [JSMESS original Github](https://github.com/jsmess/jsmess). But please note that it has now been integrated into the **main MAME repository**, so this repository is now **archived** and no longer actively maintained, but the source remains accessible for historical and reference purposes.

For an up-to-date build of JSMESS you can follow the Emscripten part of the guide here: [Compiling MAME — MAME Documentation 0.278 documentation](https://docs.mamedev.org/initialsetup/compilingmame.html#emscripten-javascript-and-html)

---
### 2015 - MAME merges with MESS
In 2015, MAME merged with **MESS** (Multi Emulator Super System), expanding its scope to include home consoles, computers, and calculators.

### 2016 - CppCon The MAME story: From C to Modern C++
At CppCon 2016 **Miodrag Milanović** gave a fantastic talk about how MAME moved from C to modern C++, which helped with better compatibility, portability, and overall better code, you can watch it on youtube below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/wAUnUWYaA5s?si=zhEr2jsf42yx0Hr-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## MAME in the Press
MAME was first mentioned in issue 45 of EDGE magazine back in May 1997, only a few months afte the first release, ever since then it has been mentioned in hundreds of magazines, books and newspapers.

It wasn't just western media either, as far back as June 2000 **MAME** was being advertised in Japanese magazines (Arcadia Issue 1):
![Arcadia Issue1 MAME](https://github.com/user-attachments/assets/2227f696-f652-4073-b5b6-e7a2211be7a4)

MAME was again featured in EDGE magazine in **October 2002**, where it was described as "by far the greatest and most important piece of videogaming code ever written"[^11].

---
# References
[^1]: [mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)
[^2]: Wireframe Issue 01 page 33
[^3]: Retro Gamer Issue 28
[^4]: Retro Gamer Issue 97 page 57
[^5]: Inside Atari Games ("The One" Magazine 1990) and on http://www.atari-explorer.com/articles/articles-atari-games.html
[^6]: [Upgrade kits, lawsuits and Lite-Brite: How Ms. Pac-Man was made](https://www.gamedeveloper.com/business/upgrade-kits-lawsuits-and-lite-brite-how-i-ms-pac-man-i-was-made?utm_source=chatgpt.com)
[^7]: [MAMEdev.org - Home of The MAME Project](https://www.mamedev.org/?utm_source=chatgpt.com)
[^8]: [MAME Release Dates - Retro Arcade Guides](https://pleasuredome.miraheze.org/wiki/MAME_Release_Dates?utm_source=chatgpt.com)
[^9]: [The Internet Arcade – Internet Archive Help Center](https://help.archive.org/help/the-internet-arcade/)
[^10]: [https://github.com/jsmess/jsmess](https://github.com/jsmess/jsmess)
[^11]: [MAME Over](https://worldofstuart.excellentcontent.com/mameover.htm)
