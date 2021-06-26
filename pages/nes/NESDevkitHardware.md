---
layout: post
tags: 
- nes
- devkit
- hardware
title: NES (Famicom) Development Kit Hardware
thumbnail: /public/consoles/Nintendo Entertainment System.png
image: /public/images/nes/NES Famicom Development Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/nes/Famicom_PDS_INTERFACE.jpg
permalink: /famicom-nes-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Entertainment System
    url: /nes
  - name: NES (Famicom) Development Kit Hardware
    url: #
recommend: 
- devkit
- nes
editlink: /nes/NESDevkitHardware.md
redirect_from:
  - /official-nes-devkit/
updatedAt: '2020-07-18'
---

# Introduction
The Nintendo `Famicom` was released in Japan on 15th July, 1983 at a price of 14,800 yen. Development for the machine was strictly controlled by Nintendo as they didn't want a repeat of the US "Video Game Crash" which they blamed on the lack of quality games. As such most of the games initially released for the platform were made by Nintendo itself, presumably on prototype NES hardware.

Since Nintendo were very new to the video game market and saw themselves as creating most of the software that will run on the NES they did not make a specific development kit, or if they did it was very well hidden in the official Nintendo headquarters and no public information has been released on it.

## What about 3rd parties?
It wasn't until the first 3rd party game was in development that the need for a Development Kit for the NES was established. It took a full year after the Famicom's launch for the first 3rd party title to appear.

## Nintendo Licensee program
In 1986 Nintendo would open up its licensee program to allow other developers to create software for the Famicom [^12]. It was then on the lookout for talented programmers to make use of the 6502 chip which was relatively uncommon at the time of its launch (although had been used in the Commodore 64).

Presumably many developers would write code for the C64 taking into account the memory model of the NES and test their code via burning an EEPROM cartridge.

It is likely that developers who managed to get an official license from Nintendo were given some basic documentation about the hardware such as the memory map, PPU and APU. It would then be up to the developer to create their own development environment [^3].

---
# Official Nintendo in-house development kit
Nintendo has been very secretive about how their official NES games were developed but there is some information coming from a Japanese children's book of all places and kindly translated by Chris Covell on his website.

## Programming Hardware
<section class="postSection">
    <img src="/public/images/nes/FamicomProgrammersHardAtWorkOnMario3.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
When the NES was first released it was not common in Japan for PCs to be running with a 6502 processor [^24], so how did developers write and test code for the famicom? Did they have to burn a EPROM everytime they assembled their code to test even the smallest change?!
  
Well yes in fact that was the case, the code for the early NES games was written using a **NEC PC-8001** [^24] which has a Z80 processor, so none of the 6502 assembly code could be run without connecting to a NES system.

In the photograph from a children's book titled `Stars of the Famicom Games` (Kindly scanned and translated by Chris Covell) you can see 4 programmers presumably working on Super Mario Bros 3 [^5]. They are using `HP 64000 mainframe computers` which have presumably been modified to have a Famicom add-on board or 6502 processor card to be able to test their assembled code.
</div>
</section>

## Testing & prototype Hardware
<section class="postSection">
    <img src="/public/images/nes/FamicomEEPROMWriter.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

So how did Nintendo test the games they were writing on the hardware? The EEPROM writers scattered around the offices in the children's book hint at how this was done.

An EEPROM writer writes to an erasable version of the games "ROM" chip which can be slotted in a development cartridge which can be placed in a retail Famicom unit for testing.
</div>
</section>

<section class="postSection">
    <img src="/public/images/nes/FamicomWithEEPROMCart.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

In the photograph on the left you can see a custom EEPROM cartridge inside the retail Famicom on Miyamoto's desk, so he would run through the game and give feedback or bug reports to the programmers and artists for the next build of the game.

</div>
</section>

## Graphic Artist hardware

<section class="postSection">
    <img src="/public/images/nes/FmicomGraphiEditing.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

From the same children's book we can see Mr. Tezuka hard at work on Super Mario Bros 3, it looks like he is viewing the Character (Sprite/Pixel) data for the Mario sprite sheet. 

It is unclear if it is connected to the version running on the Famicom to the right of the computer. It would be pretty useful if changes made on the PC automatically updated the sprites in the running game, but it is unlikely they had  built the hardware to support such a feature.

</div>
</section>

<section class="postSection">
    <img src="/public/images/nes/FamicomMarioSpriteViewer.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

Presumably this is some sort of pixel editing tool that can piece together parts from the sprite sheet and update and possibly even animate the result to the viewer. It is unclear what the colours at the top represent, it could be the available colour pallet.

The Fujitsu FM R-50 HD business computer was used to create all the pixel art for Super Mario Bros 3. It was an IBM-PC compatible which ran a version of MS-DOS.
</div>
</section>


## Famicom Disk System Development hardware
The Famicom Disk System (FDS) was just a cheaper way of distributing games for the Famicom in Japan due to the higher cost of producing cartridges.

It was released in Japan only on the 21st of February 1986, 3 years later than the Famicom but the same year as the European NES release. 

It seems to have been commonly been used for development of NES games even if they ended up on cartridges for western audiences.

### FDT ICE  (ISD)
<section class="postSection">
    <img src="/public/images/nes/IntelligentSystems-ICE-Famicom-Disc-System.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

This is a very rare item, it is possibly only used within Intelligent Systems (IS) themselves, although IS did mass produce a similar product for the SNES so it is possible that this was THE official development kit for the NES.

ICE stands for In-Circuit Emulator and Intelligent Systems made these for most of Nintendo's hardware in the future too. These would be used by connecting to a development PC and allowing breakpoints and memory checking to be run from a debugger-like interface.

As for the acronyms used in the name:
* ISD may stand for Intelligent Systems Debugger or Development.
* FDT may stand for Famicom Disk T(?)

</div>
</section>

### Famicom Disk System Prototypes
<section class="postSection">
    <img src="/public/images/nes/PrototypeFamicomDiskWhite.jpg" class="wow slideInLeft postImage" />

<div markdown="1">

Retail FDS games were either yellow or Blue so a White FDS disk is used for in-development prototype games and may be re-writable. It is unclear whether they could be written to via a standard PC floppy drive however.
</div>
</section>

---
# Consumer Development Kits
It is very rare for Nintendo to allow non-licensed developers to write code or "homebrew" on their consoles. However when they developed the Famicom (Family Computer) they wanted to expand the computer aspect and not just rely on games so they had a few initiatives to allow PC like functionality on the console.

## Family BASIC for Famicom
<section class="postSection">
<iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/j8J58aTxCPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
The first ever Nintendo development kit that general consumers could buy was `Family Basic`, which was as the name suggests an implementation of the BASIC programming language that you could write and execute on the Famicom [^20].

As for Commercial games, the legendary developer of Pokemon, Satoshi Tajiri from Game Freaks used Family BASIC to create his first game, which he then built his own NES development kit on top of and created the game called Mendel Palace [^21].

</div>
</section>



---
# In-house development kits
Due to the lack of official NES development kits, many companies had to reverse engineer the system themselves in order to do any game development for the system.

## NES Mission control dev kit
<section class="postSection">
    <img src="/public/images/nes/NESMissionControlDeckNESInternals.jpg" class="wow slideInLeft postImage" />
<img src="/public/images/nes/NESMissionControDeck.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The `Mission Control NES development kit` was created by Rocket Science Productions to help smaller developers get into the market of creating games for Nintendos new console [^1].

It consists of a breadboard filled with chips and screwed to a plank of wood and a modified retail NES console [^2].

Games built using this development system include but is not limited to:
* Bill & Ted's Excellent Adventure
* The Mutant Virus [^2]
</div>
</section>

## HAL “Game Maker” (Twin Famicom)
<section class="postSection">
    <img src="/public/images/nes/TwinFamicomGameMaker.png" class="wow slideInLeft postImage" />

<div markdown="1">
HAL Laboratory, Inc. who are best known for creating the Kirby and Mother series of games were very early NES developers. Like many other developers they did not have an official development kits available so took a rather unique approach to developing games on the system. They used the retail Twin Famicom System with an added trackball mouse along with a tool they created that had a virtual keyboard [^7].

Development data was written and read from the floppy disc and they created some software that ran on the cartridge port that allowed them to edit code or sprite data. This was during the development of their game `Metal Slader Glory` [^11]
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

## Westwood Studios

<section class="postSection">
    <img src="/public/images/nes/WestwoodStudiosNESDevkit.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

A rather intriguing looking item was put up for auction on Ebay in 2011 claiming it was a NES development kit used by Westwood studios. Strangely the description for the item also mentions that "Atari" was printed on some of the boards. It is currently unknown who bought the hardware and if it was used for Westwood's only NES title called DragonStrike.

Games that may have been built with this kit:
* DragonStrike

</div>
</section>

## Namco
Namco reverse engineered the Famicom hardware and created their own suite of development tools [^10]. However very little information has been released about their internal development kits so it is presumed they were disposed of after NES development ceased.

## N2G - Nintendo Development System
<section class="postSection">
    <img src="/public/images/nes/N2G NES Development Kit.jpg" class="wow slideInLeft postImage" />
  <img src="/public/images/nes/N2G NES Development Kit Inside.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The user `JaxsBox` posted details of a 3rd party development kit for the NES on the old NintendoAge site, where he has posted a few photos and some technical information [^23].
  
Note that this development kit doesn't contain a cartridge slot so it probably connects to a developers PC directly to send ROM data to the machine for emulation.

Presumably this was developed in house by `RSP` (Riedel Software Productions, Inc), although it is also possible that it was developed by another company and just licensed to RSP.

Games that may have been built by this development kit:
* Sesame Street: Countdown
* Sesame Street: Big Bird's Hide and Speak
* MTV Remote Control
* Win, Lose, or Draw

</div>
</section>


## Square (Apple II & Twin Famicom)

<section class="postSection">
<iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/LGzd7JRbxL0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">

In a very rare interview with Nasir Gebelli he talks about creating NES games for Square with an Apple II and Mini Assembler, including final fantasy 1!

</div>
</section>

<section class="postSection">
<iframe  class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/z6pcfINCB4o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">

This is a short video on the making on final fantasy 2 and it looks like most of the developers are using a Sharp Twin Famicom. This was used to at least test their games on but it is unclear if they built any custom hardware or even what computers they used to write the 6502 assembly on. Although it was presumably the Apple II with Mini Assembler.

</div>
</section>

## Programmers Development System (PDS) 
The Programmers Development System or PDS for short was a development kit for many 8-bit systems including C64 and ZX Spectrum that was very popular in the UK [^17].

It was developed by Andrew Glaister, Foo Katan and his friend Jez San and sold by their company `PD Systems Ltd`. Foo Katan was also the founder of `Bits studios` which created the NES game `Loopz` and many gameboy games, including a  game boy development kit [^19]. It is unclear if his NES and GB development was based on his prior work with PDS but it is very likely at least influenced by it.

### Rare Ltd (PDS)
<section class="postSection">
    <img src="/public/images/nes/Famicom_PDS_INTERFACE.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

Rare became one of Nintendos first 3rd party developers outside of Japan by Reverse engineering the Famicom hardware before its western launch and presenting the results to Nintendo [^16].

This development kit was the result of the reverse engineering effort as you can see the board has `COPYRIGHT 1988 RARE LTD` rather than an official Nintendo or Intelligent Systems Copyright mark.

It also has `Nintendo PDS Interface` printed on the board, which likely stands for `Programmers Development System`.

This hints at it being used with the `PDS development system` made by `P.D.Systems Ltd` (Andy Glaister & co) which came with a 6502 assembler and was a full development system for  C64 and ZX Spectrum [^17]. 

PDS was a commonly used development kit in UK and it would be likely that when Rare was developing ZX Spectrum games they used this development system so all they had to do was reverse-engineer the NES and create an interface to control it from their existing development setup. 
</div>
</section>

### Eurocom (PDS)
In the source code for the 1990 NES game Magician, which was kindly opened source by developer Chris Shrigley, it contains .PDS files which are used in the PDS development kit.

When you open the .PDS files in a text editor the string `P.D.Systems Ltd 1985-88` can clearly be seen confirming that it used the  PDS development system.

So it was definitely used for NES game development by studio `Eurocom` but whether they used Rare's interface board or created their own remains a mystery.

### Zippo Software (Rare partnership, probably PDS)
In the UK Magazine GamesTM issue 22 it is mentioned that Zippo software's partnership with Rare meant they were one of the first to receive a NES development kit outside of Japan and thus producing `Solar Jetman` in 1989. It is possible that this is a PDS development System kit with the Interface card built by Rare.

### Codemasters
As a fellow British game developer who was working on C64 and Spectrum games, Codemasters used PDS to develop most of their games for all of these platforms [^18]. 

Although it has been confirmed that used PDS for all their other systems there is no proof that they also used the development kit for NES games but it is probable as they were already familiar with the environment.

In Edge UK Magazine Issue 136 it is mentioned that they created their own prototype NES development kit to get around Nintendo's expensive licensing fees. This is also how they developed the cheat device known as the `Game Genie` [^9].

Their hardware side of the development kit was described as a PC connected to a C64 connected to a NES in a mass of wires and each release was named after a character from Blade Runner [^9]!

### Bit Managers & Infogrames (PDS)
<section class="postSection">
    <img src="/public/images/nes/Programmers Development System By PDSystems.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
In an Interview with `Alberto González` who was a composer for many classic video game soundtracks along with graphics development work, he mentioned that he used PDS with modifications for GameBoy, Master System and NES [^22]. The screenshot on the left is Alberto using `PDS Pc1.24` developed by `P.D.Systems Ltd 1985-88`.

</div>
</section>

---
# Unanswered Questions

## Did Nintendo ever provide an Official Development kit for the NES?
Many sources hint that there was no official Nintendo development kit for the NES and in fact there is very little information that has been leaked about these development kits. It looked like Nintendo themselves used EEPROM writers and custom made cartridges for development.

However in the NintendoAge article from issue 2 [^8] it mentioned that in 1987 BEAM software knew they couldn't get an official development kit from Nintendo and so made their own. When Nintendo found out about their custom development kit they wanted the sale of it stopped. Why did they want the custom development kits to cease production if they didn't have officially supported ones?

Did they really rely on every single studio creating their own hardware based development kit? It seems like quite a barrier for entry, but then again Nintendo only wanted *quality* software so this could be intentional.

## Official NES development software such as assemblers?
Some sources such as [^3] suggest that there was an official Nintendo assembler for the NES but very little information online confirms this.

---
# References
[^1]: [NES Mission control dev kit](https://www.assembler-games.com/threads/nes-mission-control-dev-kit.41738/)
[^2]: [NES Mission Control Development System](http://devkits.handheldmuseum.com/NES_MissionControl.htm)
[^3]: [What was dev like on the NES back in 1987?](https://forums.nesdev.com/viewtopic.php?f=2&t=10169)
[^4]: [Bagshot Row : The Chuckie Egg Professional's Resource Kit](http://www.bagshot-row.org/chuckie-egg/authors.html)
[^5]: [Stars of Famicom Games](http://www.chrismcovell.com/secret/weekly/Stars_of_the_Family_Computer.html)
[^6]: [Nintendo’s Development Disks « Famicom World](https://famicomworld.com/workshop/tech/nintendos-development-disks/)
[^7]: [Kirby’s Development Secrets – Source Gaming](http://www.sourcegaming.info/2017/04/19/kirbys-development-secrets/)
[^8]: NintendoAge e-Zine Issue 02 2009
[^9]: Edge UK Issue 136
[^10]: [How Do You Make a Game? Part 2: Development Tools – The History of How We Play](https://thehistoryofhowweplay.wordpress.com/2018/07/10/how-do-you-make-a-game-part-2-development-tools/)
[^11]: [First Kirby Game Was Created With a Trackball, No Keyboard Gaming](https://uk.pcmag.com/games/89073/first-kirby-game-was-created-with-a-trackball-no-keyboard)
[^12]: [Gamasutra - A former mentor recalls the early career of Satoru Iwata](https://www.gamasutra.com/view/news/254169/A_former_mentor_recalls_the_early_career_of_Satoru_Iwata.php)
[^13]: [Original Famicom (NES) development kit belonging to RARE. : retrogaming](https://www.reddit.com/r/retrogaming/comments/9aspgn/original_famicom_nes_development_kit_belonging_to/)
[^14]: GamesTM issue 22
[^15]: [Take A Peek Behind The Curtain At Rare With This New Exhibit - Feature - Nintendo Life](http://www.nintendolife.com/news/2018/08/feature_take_a_peek_behind_the_curtain_at_rare_with_this_new_exhibit)
[^16]: [Original Famicom (NES) development kit belonging to RARE. : retrogaming](https://www.reddit.com/r/retrogaming/comments/9aspgn/original_famicom_nes_development_kit_belonging_to/)
[^17]: [PDS development system - CPCWiki](http://www.cpcwiki.eu/index.php/PDS_development_system)
[^18]: [Oliver Twins](https://web.archive.org/web/20060829185146/http://www.blitzgames.com/olivertwins/earlyyearsp2.htm)
[^19]: [Retro Gamer 2018 PressReader.com](https://www.pressreader.com/uk/retro-gamer/20181129/281638191249599)
[^20]: [history - Was Family BASIC for the NES/Famicom powerful enough to create full games and applications? - Retrocomputing Stack Exchange](https://retrocomputing.stackexchange.com/questions/5024/was-family-basic-for-the-nes-famicom-powerful-enough-to-create-full-games-and-ap)
[^21]: [Gamasutra - A basic history of BASIC on its 50th birthday](https://www.gamasutra.com/view/news/216469/A_basic_history_of_BASIC_on_its_50th_birthday.php)
[^22]: [Interview with Alberto González (composer) – VGArc](http://www.vgarc.org/vgarc-originals/interview-with-alberto-gonzalez/)
[^23]: [N2G](https://web.archive.org/web/20170415132556/http://nintendoage.com/forum/messageview.cfm?catid=56&threadid=69249)
[^24]: [Nintendo Entertainment System/NES (1985-1995) – History of Console Gaming](https://hiscoga.wordpress.com/nintendo-entertainment-systemnes-1985-1995/)
