---
layout: post
tags: 
- gba
- devkit
- hardware
- snsystems
title: Game Boy Advance (AGB) Development Kit Hardware
thumbnail: /public/consoles/Game Boy Advance.png
image: /public/images/gba/Game Boy Advance Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance Development Kit Hardware.jpg
permalink: /game-boy-advance-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name: Game Boy Advance (AGB) Development Kit Hardware
    url: #
recommend: 
- devkit
- gba
editlink: /gba/GBADevkitHardware.md
redirect_from:
  - /official-gba-devkit/
---

# Official Development Kit Hardware
The Game Boy Advance official development kits were incredibly similar to the original Game Boy and Game Boy Color devkits. In fact they reused the same dev kits and added support for the GBA.

## Early Prototype Development kit
<section class="postSection">
    <img src="/public/images/gba/GBA Early Prototype.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
This is as bare-bones as development kits get, before the GBA was even released to the public a select few developers were sent these kits. It uses a Super Nintendo controller as input and has a small LCD screen attached to the board [^2].

You can see a modified original Game Boy cartridge with the sticker saying `AGB Only` plugged into the cartridge slot and acting as an interface to the developers PC. So presumably they would send ROM images to the board from their PC's development environment.

Presumably it also had a connection to be able to display it on a larger screen for development but there is no obvious connector for that.
</div>
</section>

## Nintendo Game Boy Advance Wide-Boy
<section class="postSection">
    <img src="/public/images/gba/GBA WideBoy64.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Similar to the Wide-Boy for the original and Color Game Boys, Intelligent systems created one for the Game Boy Advance that plugged into the Nintendo 64 [^3].

Just as with previous systems all the GBA hardware is packed inside the cartridge and it comes with a GBA shell that is purely used as a controller.

This device was used for play testing and demoing games internally along with it being used by press outlets for most of the GBA screenshots that were printed in magazines and books.
</div>
</section>

## IS-AGB-EMULATOR (IS-AGB-DEBUGGER)
<section class="postSection">
    <img src="/public/images/gba/IS-AGB-EMULATOR.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The `IS-AGB-EMULATOR` is the next iteration of the `IS-CGB-EMULATOR` with support for Game Boy Advance games, just like its parent generation it is used as the main development kit for GBA.

If the `IS-AGB-DEBUGGER` label is checked on the unit then it also contains support for programmers to use debugging features such as breakpoints and tracing.
</div>
</section>

## IS-AGB-MIDI
For sound developers Intelligent Systems created the `IS-AGB-MIDI` which is a cartridge that plugs into the `IS-AGB-EMULATOR` [^4].

You then connect the cartridge to the development PC via the MIDI port and you have the ability to test sounds and music on the GBA hardware directly!

As far as we know no one has taken a photo of what the `IS-AGB-MIDI` looks like so unfortunately we can only guess.

## IS-AGB-CAPTURE

<section class="postSection">
    <img src="/public/images/gba/IS-AGB-CAPTURE.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Similar to the WideBoy64 and also created by Intelligent Systems comes the `IS-AGB-CAPTURE`. Its main purpose is to display the GBA game on a big screen for easy capturing of screenshots.

Presumably the only advantage this has over the Wide Boy is that it doesn't; t require an N64 to function.

The screenshot on the left is from Andrew Borman on Twitter [^5].
</div>
</section>

## AGB FLASH GANG WRITER
<section class="postSection">
    <img src="/public/images/gba/AGB ROM Flash Gang Writer 2.0.png" class="wow slideInLeft postImage" />

<div markdown="1">
Again similar to the Game boy DMG & Color development kits they provide a Gang writer for flashing multiple EPROM cartridges at once, very useful for sending out multiple copies to all the press outlets [^6].

Not only are they similar to the original gang writers Intelligent Systems actually refurbished old DMG Flash Gang writers into GBA flash gang writers!
</div>
</section>

---
# Third Party Development kits (Devkits)
The official Development kits offered by Intelligent Systems through Nintendo were very costly so many smaller third party development studios had cheaper alternatives.

## Flash cartridges (Flash2Advance & others)
A surprisingly common method of development was to use unlicensed Flash cards which were often used for piracy along with an emulator on PC such as no$gba. 

Many retail games were developed using this very cheap method including big names such as `Hot Wheels Stunt Track Driver` and `Matchbox Emergency Patrol` [^1].

## Sn Systems Pro-DG
<section class="postSection">
    <img src="/public/images/gba/ProDG GBA devkit photo by Nicholas Cottrill.jpg" class="wow slideInLeft postImage" />
    <img src="/public/images/gba/ProDG GBA photo by Nicholas Cottrill.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

SN Systems released their Pro-DG development kit for Game Boy Advance in March 2001 the same month that the retail GBA hit store shelves in Japan [^7].

It cost £1,700 but the development kit is only sold to developers who are licensed by Nintendo so consumers could not buy these development kits [^8].

According to the official product sheet the development kit consists of the following hardware:
* Development GBA console
* 32MB Cartridge emulator (custom cartridge)
* SCSI card for connecting to the PC

[View the official Pro-DG GBA product sheet on the Wayback Machine](http://web.archive.org/web/20040612123439/http://www.snsys.com/Products/ProductSheets/ProDGAGB-E-headed.pdf)

Although the GBA is listed as a development version it seems to just be a retail console with a slight modification of the power source [^10].

ProDG connects to the developers PC running Visual Studio through a SCSI cable that connects to the custom cartridge.

The photos on the left are by Nicholas Cottrill who has an excellent Flickr account full of cool development kit photographs [^9]!

</div>
</section>

## Unknown Development Kits
<section class="postSection">
    <img src="/public/images/gba/SN Systems Game Boy Cartridge.jpg" class="wow slideInLeft postImage" />
<div markdown="1">

Although it says SN Systems on it, it was not available as part of their ProDG development kit and according to a post on `GoCollect` it wasn't actually made by SN Systems themselves [^11].

Although it looks like a standard DMG cartridge it actually had a Game Boy Advance ROM on it.
</div>
</section>

---
# References
[^1]: [Writing a Game Boy Advance Game | Hacker News](https://news.ycombinator.com/item?id=10096634)
[^2]: [Game Boy Advance Development Kit Revealed - IGN](https://uk.ign.com/articles/2000/08/22/game-boy-advance-development-kit-revealed)
[^3]: [Nintendo Game Boy Advance Wide-Boy (for N64)](https://devkits.handheldmuseum.com/GBA_Wideboy.htm)
[^4]: [Game Boy Advance TS Board - ASSEMbler Games Archive](https://www.assembler-games.com/threads/game-boy-advance-ts-board.61693/)
[^5]: [Andrew Borman on Twitter: "People talk about the best ways to play Game Boy games. They talk about Super Game Boys, Game Boy Players (with or without mods), and even some development equipment like the Wideboy. But rarely does the IS-AGB-Capture come up. https://t.co/i4xJUycSaz" / Twitter](https://twitter.com/borman18/status/1056336154755297282)
[^6]: [[research] Gen 3 Event Generation Algorithm Research (10ANNIV, etc) - Page 16 - ROM - GBA Research and Development - Project Pokemon Forums](https://projectpokemon.org/home/forums/topic/39517-gen-3-event-generation-algorithm-research-10anniv-etc/page/16/)
[^7]: [Gamasutra - SN Systems Releases ProDG for GameCube and Game Boy Advance](https://www.gamasutra.com/view/news/243/blogs/rss/)
[^8]: [GameBoy Advance Dev'rs - Hardware](https://www.devrs.com/gba/hardware.php)
[^9]: [Prodg Gameboy Advance | Nicholas Cottrill | Flickr](https://www.flickr.com/photos/icarusnick/6096215559/in/photostream/)
[^10]: [Nintendo Game Boy Advance ProDG Development Kit](http://devkits.handheldmuseum.com/GBC-ProDG/index.htm)
[^11]: [[Tech] GameBoy Dev Machine - GBA ROM DUMPED! — GoCollect Forum](https://connect.gocollect.com/discussion/31950/i-came-back-again-after-a-few-months-to-the-same)
