---
layout: post
tags: 
- nes
- devkit
- hardware
title: NES (Famicom) Development Kit Hardware
thumbnail: /public/consoles/Nintendo Entertainment System.png
image: /public/consoles/Nintendo Entertainment System.png
permalink: /official-nes-devkit/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Entertainment System
    url: /nes
  - name: NES (Famicom) Development Kit Hardware
    url: #
recommend: nes
editlink: /nes/NESDevkitHardware.md
---

The Nintendo Famicom was released in Japan on 15th July, 1983 at a price of 14,800 yen. It was one of the first consoles on the market that used the 6502 processor and so not many developers has experience creating games for it. As such most of the games initially released for the platform were made by Nintendo itself, presumably on prototype NES hardware.

Since Nintendo were very new to the video game market and saw themselves as creating most of the software that will run on the NES they did not make a specific development kit, or if they did it was very well hidden in the official Nintendo headquarters and no public information has been released on it.

It wasn't until the first 3rd party game was in development that the need for a Development Kit for the NES was established.

It is likely that developers who managed to get an official license from Nintendo were given some basic documentation about the hardware such as the memory map, PPU and APU. It would then be up to the developer to create their own development environment [^3].

# Official Nintendo in-house development kit
Nintendo has been very secretive about how their official NES games were developed but there is some information coming from a Japanese childrens book of all places and kindly translated by Chris Mcovell on his website.

## Programming Hardware

---
# In-house development kits
Due to the lack of official NES development kits, many companies had to reverse engineer the system themselves in order to do any game development for the system.

# HAL “Game Maker” (Twin Famicom)
<section class="postSection">
    <img src="/public/images/nes/TwinFamicomGameMaker.png" class="wow slideInLeft postImage" />

<div markdown="1">
HAL Laboratory, Inc. who are best known for creating the Kirby and Mother series of games were very early NES developers. Like many other developers they did not have an official development kits available so took a rather unique approach to developing games on the system. They used the retail Twin Famicom System with an added trackball mouse, no keyboard at all [^7]!

Development data was written and read from the floppy disc and they presumably created some software that ran on the cartridge port that allowed them to edit code or sprite data.
</div>
</section>

## Software Creations Development Kit (Mike Webb)
Software Creations Ltd has a problem on their hands, they wanted to develop games for Nintendo's new home console but Nintendo only allowed companies who were already developing NES games to become licensed. 

This Catch-22 situation resulted in Mike Webb reverse engineering the NES hardware and creating his own development kit. According to an interview in Retro Gamer Magazine issue 37 it was quite an elaborate creation consisting of a stack of RAM chips that could be written on a Commodore 64 and then read via the cartridge port of a retail NES [^4]. 

You can see Mike Webb talking about the making of Solstice for NES, a game he not only programmed but also created the hardware development kit for, in the video below.
<iframe width="560" height="315" src="https://www.youtube.com/embed/894_PNqBkx4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## BEAM's NES Development System
BEAM was a very small company in the 80s mostly creating titles for the ZX Spectrum from their office in Melbourne, Australia. When the Famicom (NES) was released in Japan to critical acclaim they knew hat their next development platform would be. However they also knew that Nintendo would never give development kits to such a small company 
[^8].

They spent the year reverse engineering the Famicom hardware and in 1987 they completed their `NES Development System`. These caused quite a stir especially in the local Australian development community, so much so that BEAM started selling the kits to other development companies [^8].

The news of the sale of these 3rd party development kits did not please Nintendo and after a lengthy negotiation process BEAM agreed to stop selling its development kit in order to gain an official development license from Nintendo [^8].

## Namco
Namco reverse engineered the Famicom hardware and created their own suite of development tools [^10]. However very little information has been released about their internal development kits so it is presumed they were disposed of after NES development ceased.


---
# Unanswered Questions

## Did Nintendo ever provide an Official Development kit for the NES?
Many sources hint that there was no official Nintendo development kit for the NES and in fact there is very little information that has been leaked about these development kits. It looked like Nintendo themselves used EEPROM writers and custom made cartridges for development.

However in the NintendoAge article from issue 2 [^8] it mentioned that in 1987 BEAM software knew they couldn't get an official development kit from Nintendo and so made their own. When Nintendo found out about their custom development kit they wanted the sale of it stopped. Why did they want the custom development kits to case production if they didn't have officially supported ones?

Did they really rely on every single creating their own hardware based development kit?

## Was their official software such as assemblers?
Some sources such as [^3] suggest that there was an official Nintendo assembler for the NES but very little information online confirms this.

# References
[^1]: [NES Mission control dev kit | ASSEMbler Games Archive](https://www.assembler-games.com/threads/nes-mission-control-dev-kit.41738/)
[^2]: [NES Mission Control Development System](http://devkits.handheldmuseum.com/NES_MissionControl.htm)
[^3]: [What was dev like on the NES back in 1987? - nesdev.com](https://forums.nesdev.com/viewtopic.php?f=2&t=10169)
[^4]: [Bagshot Row : The Chuckie Egg Professional's Resource Kit](http://www.bagshot-row.org/chuckie-egg/authors.html)
[^5]: [Stars of Famicom Games](http://www.chrismcovell.com/secret/weekly/Stars_of_the_Family_Computer.html)
[^6]: [Nintendo’s Development Disks « Famicom World](https://famicomworld.com/workshop/tech/nintendos-development-disks/)
[^7]: [Kirby’s Development Secrets – Source Gaming](http://www.sourcegaming.info/2017/04/19/kirbys-development-secrets/)
[^8]: NintendoAge e-Zine Issue 02 2009
[^9]: Edge [uk] 136
[^10]: [How Do You Make a Game? Part 2: Development Tools – The History of How We Play](https://thehistoryofhowweplay.wordpress.com/2018/07/10/how-do-you-make-a-game-part-2-development-tools/)
