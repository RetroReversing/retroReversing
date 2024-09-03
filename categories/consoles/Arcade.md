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
