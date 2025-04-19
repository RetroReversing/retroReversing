---
permalink: /arcade/
layout: post
title: Arcade
recommend: arcade
recommendTitle: All Arcade Posts
editlink: ../categories/consoles/Arcade.md
console: 'arcade'
consoleimage: /public/consoles/Arcade.png
excerpt: Awesome list of Arcade Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Arcade
    url: #
---

# Development of Arcade Games

## What programming languages were used to create Arcade games?
Since every Arcade board is different it can depend on the power of the system, some less powerful boards used pure assembly to write the game code and others used a higher level language such as C.

For example the 1990 game **Klax** was written in C according to **Greg Omi** who was sent the source code for his Atari Lynx port of the game [^4].

This is further confirmed in a 1990 interview with Atari developer **Mark Stephen Pierce**[^5]:
> "All Atari coin‑ops today are written in C ‑ that's the most popular language with the programmers here, I guess. The actual programming work is carried out on standard terminals, and then transferred into our VAX machines where it's compiled and compressed.  Finally it's downloaded from there through an EPROM burner and onto the hardware for the game that the engineer has put together. Every coin‑op's hardware is different partly because each game is different, and partly as a form of copy protection.


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

## Game Development at Taito
Taito put together a 250-page Hardware Manual for new developers who joined the team to learn how to create an Arcade game from scratch using RAM/ROM/CPU chips and a standard TV. This was before the internet and even before there were many books on the topic when the industry was very new and companies didn't want to share their "trade secrets".

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">With the Taito Hardware Manual for reference, new engineers were sent out to Akihabara to get some ROM and RAM chips and a CPU, solder them all together onto a test PCB, then write a brick breaker game.<a href="https://t.co/huXblA0rv4">https://t.co/huXblA0rv4</a><a href="https://t.co/CXlnKUPHkH">https://t.co/CXlnKUPHkH</a> <a href="https://t.co/Yip45KbLIE">pic.twitter.com/Yip45KbLIE</a></p>&mdash; Taito Corporation (@TaitoCorp) <a href="https://twitter.com/TaitoCorp/status/1748438175977226708?ref_src=twsrc%5Etfw">January 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

They used an In-Circuit Emulator to debug the programs they were creating as can be seen in this diagram:
![Alt text](/public/images/arcade/TaitoArcadeICE.png)

---
## Defender (1981 by Williams Electronics)
The source code for the classic arcade game from 1981 **Defender** has been released on Github:
[mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)

It is written in a variant of the Assembly language specifically for the Motorola 6809 CPU [^1].

The physical board had 11 ROM chips on it that would need to be flashed with the assembled result of that source code [^1].

Defender was developed by **Eugene Jarvis** and **Larry DeMar** two programmers who utilized algorithms to great effect rather than relying on artists, one such example is the classic explosion particle effect. Defender became one of the highest grossing arcade games in history [^2].

The first issue of the Magazine Wireframe contains a python (pygame) code snippet to re-create the classic particle explosion from Defender [^2]. You can find that code on github too: https://github.com/Wireframe-Magazine/Wireframe-1/blob/master/explosion.py

## RoboTron (1981)
At GDC 2014 **Eugene Jarvis** gives an excellent presentation about the development of Robotron:
<iframe width="560" height="315" src="https://www.youtube.com/embed/8AbiBOK8jZ0?si=1ftjO79ry3ld1i6u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

They used the Gimix 6809 as their development system:
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
# MAME
Even as far back as June 2000 MAME was being advertised in Japanese magazines (Arcadia Issue 1):
![AracadiaIssue1MAME](https://github.com/user-attachments/assets/2227f696-f652-4073-b5b6-e7a2211be7a4)


---
# References
[^1]: [mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)
[^2]: Wireframe Issue 01 page 33
[^3]: Retro Gamer Issue 28
[^4]: Retro Gamer Issue 97 page 57
[^5]: Inside Atari Games ("The One" Magazine 1990) and on http://www.atari-explorer.com/articles/articles-atari-games.html
