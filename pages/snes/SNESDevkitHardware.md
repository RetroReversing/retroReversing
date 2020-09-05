---
layout: post
tags: 
- snes
- devkit
- hardware
- crossproducts
- snsystems
title: SNES (Super Famicom) Development Kit Hardware
thumbnail: /public/consoles/Super Nintendo Entertainment System.png
image: /public/images/snes/Super Nintendo Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/snes/Super Nintendo Development Kit Hardware.jpg
permalink: /super-famicom-snes-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Super Nintendo Entertainment System
    url: /snes
  - name: SNES (Super Famicom) Development Kit Hardware
    url: #
recommend: 
- devkit
- snes
editlink: /snes/SNESDevkitHardware.md
redirect_from:
  - /official-snes-devkit/
updatedAt: '2020-06-26'
---

# Official Nintendo in-house development kit
Unusually there are actually multiple development kits that could be seen as "official", one by Nintendo's Intelligent Systems company and the other by Ricoh who was the creator of the SNES CPU.

## Intelligent Systems SHVC Development System
<section class="postSection">
<img src="/public/images/snes/Intelligent Systems SHVC Development System.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Intelligent systems is often in charge of Nintendo's official development kit that get sold to game studios and the Super Famicom was no exception. There are a number of different versions of the development kit but they mainly contain the same hardware.

There are multiple versions of the development kit:
* IS-Sound (Sound development kit)
* IS-Debugger (Programmers development kit)
* IS-Character (Graphics development kit)
* Emulator SE is the US version and has all 3 in once case [^11]

The `IS-Debugger` is aimed at programmers and has functionality to inspect memory and VRAM, along with breakpoints and debugging symbols [^12].
</div>
</section>

### Intelligent Systems Super Nintendo Emulator SE (US & EU)
<section class="postSection">
  <img src="/public/images/snes/Intelligent Systems Super Nintendo Emulator SE.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The `Super Nintendo Emulator SE` was made by Intelligent systems and sold by Nintendo to developers in both the US and Europe. It differs from the Japanese versions in that it is not split into three different units, all the functionality is in one single tower [^11].

It contains a SCSI hard drive inside and was sold for at least 10k USD at time of launch [^14]

According to Wikipedia `Square Soft` developed the game `Secret of Evermore` using at least two of these units [^13].

</div>
</section>

## Ricoh SF BOX-II
<section class="postSection">
<div markdown="1">
The SF-Box II was a development kit for the Super Nintendo made by `Ricoh` who were responsible for the SNES CPU chip `Ricoh 5A22` and had worked with Nintendo in the past on the Famicom Disc System (FDS) [^3].

The SF-Box uses the standard SNES controller and AV cables and even has a cartridge slot on the top of the unit [^3]. On the back of the unit is 2 sets of DIP switches and power options for both the "Target" and the unit itself. There are 3 interface ports on the back, one that is known to connect to the `SA-1 Emulator`.

On the inside it has 4 layers of PCBs including 4MB of SRAM and a few prototype Ricoh chips (not the production chips used in retail SNES), a ROHM video encoder and a `658c16` CPU [^3].

It is unclear the relation between this and the Intelligent Systems kit, as Ricoh were the official manufacture of the CPU so this can be classed as an official development kit.

There is the `Super Famicom Debugger` Manual on Archive.org which was provided with the SF Box-II and was written in September 1991 [^8].
</div>
</section>

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">For a dev kit, this SF Box-II unit for the SFC that&#39;s on Yahoo Japan right now is charmingly quaint. Sources indicate that this bad boy used to cost a cool 2.5 million yen, which was still apparently cheaper than the Sony workstations devs apparently had to use at first. <a href="https://t.co/5TvPEW5HPD">pic.twitter.com/5TvPEW5HPD</a></p>&mdash; Tom James, The Daigo Umehara of Dating Sims (@iiotenki) <a href="https://twitter.com/iiotenki/status/954904703640379393?ref_src=twsrc%5Etfw">21 January 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Ricoh SA-1 Emulator
<section class="postSection">
  <img src="/public/images/snes/Ricoh SA-1 Emulator.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The `SA-1 Emulator` was developed by `Ricoh` as an add-on to the SF-Box II, it connected to the Control bus on the back of the SF-Box. It adds support for the Super Accelerator 1 (SA1) processor that was located in the cartridges themselves.

This would allow developers more CPU power for their games at the cost of a higher price to manufacture the game cartridges.

The image on the left was taken by a user on ObscureGamers called `HI_RICKY` [^7].

In a children's book titled "The Making of Dragon Quest VI" you can see an `SF BOX-II` on the desk of one of the Enix/Heartbeat programmers [^9]. So it was clearly widely used by game developers, just not sure if it was more or less common than the Intelligent Systems model.
</div>
</section>

## Ricoh SF Box (Original)
<section class="postSection">
  <img src="/public/images/snes/Ricoh SF Box Original.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Not much is known about the first version of the Ricoh SF Box, aside from a few screenshots from an old auction listing. It looks like a standard PC tower but has all the standard ports for Super Nintendo [^10]. 

From the outside it looks like a tower version of the SF-Box-II but it is unclear what has changed on the inside.
</div>
</section>

## 8 MB EPROM cartridge (SHVC-8PV5B-01)
<section class="postSection">
  <img src="/public/images/snes/8MB Super Famicom EPROM Cartridge SHVC-8PV5B-01.jpg" class="wow slideInLeft postImage" />
  <img src="/public/images/snes/SNES TEST Board EPROM SHVC-2P3B-01.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Nintendo also sold flashable cartridges with up to 8MB of EPROM that could be written to via EPROM writers and worked on retail Super Famicom consoles [^27].
</div>
</section>

---
# Third Party development kits
Although Nintendo sold a very good development kit, many game studios still created their own hardware for development. They did this for various reasons such as cost and flexibility, the main in-house and commercial development kits that we know about will be described in this section.

## Super Magicom
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/-nDu9Z6MUXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
The Magicom was developed by `JSI Front FarEast` and `SN Software Ltd` in the UK (not to be confused with SN Systems) and allowed developers to. Burn a floppy disc with a ROM binary of their code and run on the retail system. It was also widely used for backing up cartridges and piracy, many of the ROMS available online were created using the Super Magicom.

You could download code to the SNES Magicom via a parallel cable, allowing developers to send their code directly without needing to write a floppy. 

The system was features in the UK Magazine `N-Force` issue 02 as a backup device and had the usual disclaimer about owning the games you are going to backup [^1].
</div>
</section>

Plenty of developers such as Mike Dailly used the Magicom as a cheap development kit for the Super Nintendo:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You could download code to the SNES Magicoms via a parallel cable. Gave me a cheap ass devkit back in the early 90s with my Amiga! :) <a href="https://t.co/M6Yxslg8s6">https://t.co/M6Yxslg8s6</a></p>&mdash; Mike Dailly™ 🏴󠁧󠁢󠁳󠁣󠁴󠁿 (@mdf200) <a href="https://twitter.com/mdf200/status/890481867123773445?ref_src=twsrc%5Etfw">July 27, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{% include link-to-other-site.html url="https://videogamedevelopmentdevices.fandom.com/wiki/Super_Magicom" description="The wiki known as `Video Game Development Devices` has compiled an excellent page with more details on the Super Magicom" image="https://vignette.wikia.nocookie.net/videogamedevelopmentdevices/images/8/8e/Smagicom.jpg/revision/latest?cb=20130422150458" title="Super Magicom"  %}

## Argonaut RAMBoy/RAMBaby/FATBoy
<section class="postSection">
  <img src="/public/images/snes/Argonaut RAMBoy.png" class="wow slideInLeft postImage" />
  <img src="/public/images/snes/Argonaut RAMBoy Internals.png" class="wow slideInLeft postImage" />
<div markdown="1">
The RAMBOY was an in-house development kit by Argonaut Software for producing Super Nintendo Games, very little is known about the system but a few pictures were released by an eBay user known as `simon_gba`.

The RAMBOY was briefly mentioned in the September 1990 issues of ACE magazine in the UK. It was mentioned as part of the preview of the game Boy game `Eclipse` as the game's core was written on the RAMBOY for the SNES and translated to the Z80 for the Game Boy [^5].

There was also a version known as `RAMBOY 5` which has a custom cartridge that plugged into a retail SNES and communicated to the developers PC through an interface [^6].
</div>
</section>

## Accolade SNES Development System
<section class="postSection">
  <img src="/public/images/snes/Accolade SNES Dev System.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Accolade built their own development kit for Super Nintendo development which consisted of a retail SNES with a custom cartridge.

The custom cartridge shown on the left used static RAM for the game that was being executed and an EPROM chip with development software that could monitor and debug the game.

In order to send a game to the cartridge there was a parallel port that connected to a developers PC, the PC could then send debugging commands to the cartridge to add breakpoints etc [^14].

What is interesting is that it looks like it used the `SNASM PC-connection card` from the SN Systems development kit to talk to the PC, so it may just be a modified version of the SN Systems development kit [^18].

There was originally more photos on the site `Nintendo-Town.fr` but unfortunately the Wayback machine didn't save them, you can see the post with the missing photos here: [Accolade - the archeoDEV lair](http://web.archive.org/web/20130622225603/http://www.nintendo-town.fr/mod2/?tag=accolade).
</div>
</section>

## Sluggo Development system
<section class="postSection">
  <img src="/public/images/snes/sluggo 3 Memory emulator.jpg" class="wow slideInLeft postImage" />
  <img src="/public/images/snes/sluggo 3 snes cartridge.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The Sluggo development system was a custom in-house development tool created by `Rebecca Heineman` and her partner while working at Interplay. The development kit was created because Interplay couldn't afford the official SNES devkit but managed to get Nintendo to send over the hardware documentation in Japanese [^23].

The two images on the left are from the `Atari Compendium` and show the main development kit (memory emulator) and a custom SNES cartridge that could be connected to an IBM-PC or even an Apple II GS to execute code on the Super Nintendo (and other consoles) [^15]. 

It was also sold to other developers for $895 for a single ROM system and $1295 for a dual, where the dual would be used to simulate 2 ROMs which was needed for consoles like the NES [^15].

The Sluggo could support different console by having a separate `personality module` (custom cartridge) that plugs into the standard console cartridge slot [^17].

Consoles supported:
* Mega Drive (Genesis)
* Atari Lynx
* NES (Famicom)
* Turbo Grafix 16
* Commodore 64

Games that were developed using the Sluggo:
* RPM Racing [^16]
* Out of this world (Another World) [^23]
</div>
</section>

{% include link-to-other-site.html url="https://wiki.superfamicom.org/sluggo-iii" description="For more information and an excellent interview with the author check out this page on the super famicom wiki" image="https://wiki.superfamicom.org/uploads/sluggo-3.jpg" title="Sluggo III"  %}

## Rare Ltd
<section class="postSection">
  <img src="/public/images/snes/Rare SNES Development kit 1995.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The Super Nintendo development kit created by Rare was a custom cartridge which presumably contained SRAM that gets populated by the game ROM when connected to a developers PC. Very little is known about this development kit but it would be great to know the features this supported and which games were developed using it (Donkey Kong Country?) .
</div>
</section>

## PUNK Development Kit
The "PUNK" development kit was only used in-house at the company called `PUNK Development` who made games for RazorSoft. It was a cheaper alternative to the official Nintendo kit and developed by John R. Carlsen and team in 1991 [^3].

There was an image of the development kit on `Shiggsy's Place` but sadly the Wayback machine never archived it [^3].

Kevin Seghetti and Scott Statton were part of the team that created the PUNK development kit for SNES and Mega Drive (Genesis) but later formed his own company called `Developer Resources` which also created development kits for the same consoles [^19].

## Sculptured Software Development Kit
<section class="postSection">
  <img src="/public/images/snes/SculpturedSoftwareDevkit.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Sculptured Software created their own custom Development Kit and even sold it to other companies as long as they were licensed with Nintendo, but it is unclear how much this would cost.
  
It consists of a card that fits into the ISA slot of a developers PC which contains an entire SNES board on a 3x3 inch square [^32]. 

This seems like an incredibly convenient way to develop games for the Super Nintendo and may have influenced the official PS1 development kit that came out a few years later with the same concept. 
</div>
</section>

## SFX Development Kit
The `SFX Development Kit` was created by `Software Creations` for in-house Super Nintendo game development instead of the official Nintendo devkits [^3].

It is likely similar to how they made their NES development kits and was also created by `Mike Webb` by reverse engineering the early Super Famicom Hardware before it was released [^20].

In an interview with the developers of Solstice 2 they mention developing the game in early 1991 on IBM computers with their own tools that simulated the functions of the Super Famicom [^20].

In fact it was one of the first SNES games to start development outside of Japan [^21].

Similar to the PUNK development kit there was an image of the development kit on `Shiggsy's Place` but sadly the Wayback machine never archived it [^3].


##  PSY-Q Development System (Psygnosis & SN Systems)
<section class="postSection">
  <img src="/public/images/snes/Psy-Q-SNES-SDK-Software-Development-Kit-incl.-Manual-Hardware-Software.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The PSY-Q cross-platform development kit was built by a partnership between SN Systems and  Psygnosis [^2].

The Super Nintendo version consisted of a PC Interface board, SNES Development Cartridge and SCSI cable for connecting the two together [^22].

This development kit was used to create ground-breaking games for the Super Nintendo such as Toy Story [^22].
</div>
</section>

### PSY-Q PC Interface Board

<section class="postSection">
  <img src="/public/images/snes/PSY-Q PC Interface Card.png" class="wow slideInLeft postImage" />
<div markdown="1">
The PC interface card was standard across all of PSY-Q's development kits, on the left the image is from the 32X kit but it functions the same as the SNES card. 

This was basically just used to allow the PC to interpret the results coming back from the SNES and also as an interface to send data such as ROMs or breakpoint information to the SNES cartridge.
</div>
</section>

### PSY-Q Development Cartridge
<section class="postSection">
  <img src="/public/images/snes/SNES PSYQ Advert.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The Development Cartridge slotted into the standard Super Nintendo Cartridge slot and connected to the PC via SCSI cable. This allows the game developer to send new game builds straight to the SNES from their PC and also contained functionality for debugging such as breakpoints, C source code lines support and tracing.

You have to slot a retail game cartridge in the back in order to pass the SNES region check and it also uses the SRAM and other chips located on the board.
</div>
</section>

##  SNASM2 by Cross Products
<section class="postSection">
  <img src="/public/images/snes/Snasm658 SNES Development Kit.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
SNASM2 was a third party development kit created by Cross Products which supported multiple consoles including the Super Nintendo. 

The Super Nintendo version was called the `SNASM658` and cost £2,000 in May 1995 according to the official price List archived by `SegaRetro` [^24].

Not much information exists about the Super Nintendo version of this development kit but the site `SegaRetro` has in-depth information about the Sega Mega Drive version of the devkit, so for more details check out their website.

The image on the left was kindly taken by `GlitchedHeart` over on her Twitter [^30]. 
</div>
</section>

{% include link-to-other-site.html url="https://segaretro.org/SNASM68K" description="For information about the Sega Mega Drive SNASM2 development kit check out Sega Retro" image="https://segaretro.org/images/a/af/SNASM68K_Console_Interface.jpg" title="Sega Mega Drive SNASM68K - Sega Retro"  %}

## Factor 5 PEGASUS Snes Devkit
<section class="postSection">
  <img src="/public/images/snes/Pegasus SNES by Factor5 development kit.png" class="wow slideInLeft postImage" />
<div markdown="1">
The `PEGASUS` development kit was created and used in-house at Factor-5 for their Super Nintendo games such as Super Turrican [^25].

It consists of a custom cartridge and a modified Super Nintendo system which has an added `CSG 6520 CIA interface chip` (from C64/Amiga) along with DIP switches at the side of the unit. It connects to a developers PC with a standard Parallel cable and has a `PCMCIA Adapter` but it is unclear what that is for [^26].
</div>
</section>

## Developer Resources Sega Genesis and Super Nintendo development tools
`Developer Resources` was a company founded by former members of the company `Punk development` in order to focus on development tools for the Super Nintendo and Mega Drive. 

They wanted to expand the development tools offered from the simple ROM emulator at PUNK to a full featured development environment including source level debugger, graphics tools and game libraries. 

According to Will Norris's CV they has a custom SNES cartridge with a parallel port for downloading art assets to the super Nintendo, as soon as the developer hits the `PrintScrn` button the image shown up on the SNES very cool indeed! [^29].

It is unknown who they sold these development kits to or even what the hardware looked like, but the developers did release some of the source code they work on to Sourceforge [^28].

{% include link-to-other-site.html url="https://sourceforge.net/projects/drdevtools/" description="Check out the source code they released on SourceForge"  title="Developer Resources console dev tools download"  %}

## Rhotech Labs Romulator
<section class="postSection">
  <img src="/public/images/snes/Rhotech Labs Romulator.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The `ROMulator` development kit was a third party development kit sold online by `Rhotech Labs` for both Super Nintendo and Mega Drive development [^31].

The development kit was prices at $225 for the Main board and one of either a SNES or Genesis Cartridge  along with all the software and cables required for use [^31].

The image on the left was kindly taken by `GlitchedHeart` over on her Twitter [^30]. 
</div>
</section>

---
# References
[^1]: [Take A Peek Behind The Curtain At Rare With This New Exhibit - Feature - Nintendo Life](http://www.nintendolife.com/news/2018/08/feature_take_a_peek_behind_the_curtain_at_rare_with_this_new_exhibit)
[^2]: [SNES Development Hardware and Software - Super Famicom Development Wiki](https://wiki.superfamicom.org/snes-development-hardware-and-software)
[^3]: [Shiggsy's Place](https://web.archive.org/web/20110726073425/http://shiggsy.gbadev.org/section.php?s=snes)
[^4]: [N-Force - No 2 (1992-08)(Europress Impact)(GB)](https://archive.org/stream/N-Force_No_2_1992-08_Europress_Impact_GB#page/n6/mode/1up)
[^5]: [ACE Issues Oct 1987-April 1992](https://archive.org/stream/ACE35Aug90/ACE/ACE36-Sep90#page/n11/mode/2up/search/ramboy)
[^6]: [Argonaut RAMBOY 5 - SNES Development Hardware circa 1992 — GoCollect Forum](https://connect.gocollect.com/discussion/184683/argonaut-ramboy-5-snes-development-hardware-circa-1992)
[^7]: [SNES - SF BOX-II with SA-1 EMULATOR - ObscureGamers - Prototopia](https://www.obscuregamers.com/threads/sf-box-ii-with-sa-1-emulator.146/)
[^8]: [SF Box-II](https://archive.org/details/sfbox2sfd)
[^9]: [How Games are Made -- Page 2](http://www.chrismcovell.com/secret/weekly/How_Games_Are_Made_DQVI_2.html)
[^10]: [Nintendo Super Nes Snes Ricoh Sfbox Development Kit Dev Console](http://supernintendosnesvideogames.com/en/nintendo_super_nes_snes_ricoh_sfbox_development_kit_dev_console.php)
[^11]: [SNES - SFC/SNES Development Manual and Software source - ObscureGamers - Prototopia](https://www.obscuregamers.com/threads/sfc-snes-development-manual-and-software-source.907/)
[^12]: [SHVC IS-DEBUGGER is alive - ASSEMbler Games Archive](https://www.assembler-games.com/threads/shvc-is-debugger-is-alive.61987/)
[^13]: [Super NES Emulator SE - Wikipedia](https://en.wikipedia.org/wiki/Super_NES_Emulator_SE)
[^14]: [Russell Borogove on Twitter](https://twitter.com/mister_borogove/status/1122915184014585857)
[^15]: [Sluggo III - Super Famicom Development Wiki](https://wiki.superfamicom.org/sluggo-iii)
[^16]: [RPM Racing - Wikipedia](https://en.wikipedia.org/wiki/RPM_Racing)
[^17]: [Atari Compendium](http://www.ataricompendium.com/archives/interviews/rebecca_heineman/interview_rebecca_heineman.html)
[^18]: [Accolade - the archeoDEV lair](http://web.archive.org/web/20130622225603/http://www.nintendo-town.fr/mod2/?tag=accolade)
[^19]: [Interview:Kevin Seghetti - GDRI :: Game Developer Research Institute](http://gdri.smspower.org/wiki/index.php/Interview:Kevin_Seghetti)
[^20]: [Making of Solstice 2: Equinox](http://www.chrismcovell.com/secret/sp_Solstice2int.html)
[^21]: [Solstice 2](http://www.zee-3.com/pickfordbros/softography/index.php?game=45)
[^22]: [Psy-Q SNES SDK (Software Development Kit) incl. Manual, Hardware & Software - Rare Video Games Auctions, Sales & Pricing](http://gamesniped.com/2013/06/10/psy-q-snes-sdk-software-development-kit-incl-manual-hardware-software/)
[^23]: [The polygons of Another World](http://fabiensanglard.net/another_world_polygons_SNES/index.html)
[^24]: [Cross Products UK Price List](https://segaretro.org/images/3/3c/Cross_Products_UK_Price_List__May_1995.pdf)
[^25]: [Factor 5 Pegasus SNES Super Nintendo Development Kit - Rare Video Games Auctions, Sales & Pricing](http://gamesniped.com/2011/07/10/factor-5-pegasus-snes-super-nintendo-development-kit/)
[^26]: [dforce3000](http://www.dforce3000.de/index.php?p=fdsingle&uid=488)
[^27]: [SNES 8 MB EPROM Cartridge](https://devkits.handheldmuseum.com/SNES_8MBEPROM.htm)
[^28]: [Interview:Kevin Seghetti - GDRI :: Game Developer Research Institute](http://gdri.smspower.org/wiki/index.php/Interview:Kevin_Seghetti)
[^29]: [Will Norris: C.V.](http://www.biohack.net/cv/)
[^30]: [GlitchedHeart (@glitchedheart) / Twitter](https://twitter.com/glitchedheart)
[^31]: [where can I get a Romulator and how much?](http://strangetextsbutcher.blogspot.com/2019/08/where-can-i-get-romulator-and-how-much.html)
[^32]: [dforce3000 Sculptured Software](http://ultra16.dforce3000.de/index.php?p=news)
