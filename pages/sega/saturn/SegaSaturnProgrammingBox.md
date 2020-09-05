---
layout: post
tags:
- devkit
- hardware
- saturn
- sega
title: Official Sega Saturn Development Kit (Hardware)
thumbnail: /public/consoles/Sega Saturn.png
image: https://img.youtube.com/vi/xPHtTGfCpgU/hqdefault.jpg
permalink: /sega-saturn-programming-box/
videocarousel:
  - title: Hard 4 Games
    image: https://img.youtube.com/vi/xPHtTGfCpgU/hqdefault.jpg
    youtube: 'xPHtTGfCpgU'
  - title: Video 2
    image: https://img.youtube.com/vi/3E4Gvue9Im8/hqdefault.jpg
    youtube: '3E4Gvue9Im8'
breadcrumbs:
  - name: Home
    url: /
  - name: Development Kits
    url: /devkit
  - name: Official Sega Saturn Development Kit (Hardware)
    url: #
recommend: 
  - devkit
  - crossproducts
editlink: /sega/saturn/SegaSaturnProgrammingBox.md
updatedAt: '2019-11-09'
---

During the Sega saturns lifecycle there were multiple development kits available to developers starting from the original Sphia Systems that came out before the retail hardware, followed by devkits from both `Cross Products` (Official) and the Unofficial `SN Systems (PSYQ)`.

# Sega Saturn Programming Box (Sophia Systems)
<img src="/public/SaturnProgrammingBox.jpg" />
The original Sega Saturn Programming box (or P-Box) became available to developers before the retail release of the Saturn and was the first development kit available for the Saturn [^1].

The Sophia needs to have 2 processors installed to be a working development system but occasionally people sell the systems with only one processor. If only one processor is present it will still boot to dashboard but you won't be able to run anything.

These were later replaced by the CartDev development kit but the new CartDev also had configuration options to connect to the older P-Box.

The P-Box had a DIP switch to change between the built in CD emulator (which booted from hard drive) to the actual CD drive, so developers could load their game on the built in hard drive instead of burning a CD each time they wanted to test.

The P-Box also has a custom Japanese-only SCSI connection to the developers PC (or SGI Indy) so the developer could send game builds to the system and debug games from the PC interface.

---
# Cross Products Dev Kit (SNASM2)
Cross Products is a UK based company that specialised in createing development kits of all sort of consoles, most success came with their SEGA mega-drive line of products. So when the SEGA Saturn was announced they jumped on board to build their own development kit known as the `Cross Saturn` based on their `SNASM2` line of development kits.

<img src="/public/images/saturn/CrossProductsCartDev.png" />



The Software Development Kit that was provided with these systems were also provided by Cross Products and were under the `SNASM2` SDK brand name. This provided all the standard libraries, compilers and other build tools to create Saturn games.

There was an advert in the Uk magazine `EDGE` issue 21 that took the space theme of the saturn and ran with it:
<img src="/public/magazine/SNASM2.Saturn.EDGE.N021.1995.06.jpg" />

According the to advert it was a pretty advanced game development kit back in 1995 [^7]:

> SNASM2 can give you the edge! 
> The preferred development system of SEGA Worldwide, SNASM2 Saturn provides full C Source level debugging, C-Structure browse > facility, and local variable windows, along with support for user breakpoint controller in SH2s.


You can view a japanese version of the SNASM2 Saturn kit in the tweet bellow from `ausretrogamer`:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/retrogaming?src=hash&amp;ref_src=twsrc%5Etfw">#retrogaming</a> dev kit: the official Sega Saturn Cross SNASM 2 Japanese developer kit. <a href="https://twitter.com/hashtag/SegaSaturn?src=hash&amp;ref_src=twsrc%5Etfw">#SegaSaturn</a> <a href="https://t.co/9U4UOp9sON">pic.twitter.com/9U4UOp9sON</a></p>&mdash; ausretrogamer (@ausretrogamer) <a href="https://twitter.com/ausretrogamer/status/813513655589273600?ref_src=twsrc%5Etfw">December 26, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

According to an article in issue 23 of the UK Magazine EDGE `Cross Products` had just been bought by SEGA and were put in charge of supplying the next development kit known as `CartDev`. There were also responsible for the `Mirage CD Emulator` and Modified Saturn sold to game development studios [^3].

---
# Sega CartDev
<img src="/public/images/saturn/P-BOX_and_CartDev.png" />

The CartDev system was a much cheaper alternative to the Sophia `P-Box` costing just 4,800 USD instead of the 7,475 USD for the P-Box. It was the result of SEGA buying the development studio `Cross Products` and rebranding their SNASM2 development kit as the Official Sega `CartDev`.
￼
<img src="/public/images/saturn/Sega_CartDev_1.jpg" />

There are 2 versions of the CartDev kit:
* Cross CartDev Rev.A
* Cross CartDev Rev.B

The first Revision (Rev A) has an issue with the power supply unit and so was quickly replaced with the latest revision B model, so it is much more common to find the Rev.B model out in the wild [^8].

The following youtube video shows a CartDev in action:
<iframe width="560" height="315" src="https://www.youtube.com/embed/qKH07vPTC7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Connecting CartDev To the old P-Box
The new CartDev development kit needed Saturn hardware to connect to, as the Sophia P-Box was technically Saturn hardware it could also be used with the CartDev development kit. This would have been at least a partial relief for developers who spent thousands of dollars on the first Sega Saturn Development kit, only for it to be replaced by the `CartDev` not long after.
<img src="/public/images/saturn/ConnectCartDevToPBox.png" />


## Connecting CartDev to modified retail Saturn
For developers that didn't have a Sophia Systems Programming Box there was a much cheaper alternative provided with the `CartDev` system. Cross Products could modify a retail Sega Saturn console and allow it to connect to the `CartDev` system.
<img src="/public/images/saturn/ConnectCartDevToRetailSaturn.png" />

---

# Modified Sega Saturn
The Modified Sega Saturn that Cross Products sold to game developers was known as the `DevSaturn` and can be seen in this sort youtube video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/72Ac7R5TMuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It cost $700 and it was not able to run burned CDR games without the `System Boot Disc` so there was no benefit to non-developers for owning the modified unit.

It has a DIP switch on the side to switch between the CD emulator and the actual CD drive inside the Saturn. 
It also has a connection port on the left hand side of the unit along side a Cross Products Logo. This is where it would connect to the Mirage CD emulator from Cross Products.

You can see the back of the modified Saturn with the cross products CD Switch in a photo taken by `stevejigga` and posted on the AssemblerGames forum:
<img src="/public/images/saturn/CrossProducts_Saturn_CD_Switch.jpg" />

Notice the `VCD` port, this is not for the `Video Compact Disc` feature of the Sega Saturn but instead used for Virtual CD emulators such as the `Mirage` which was a hard-drive that emulated the functionality of loading a CD, much quicker than actually burning a physical CD! [^8]

The modification to be able to use the CD emulator, along with the region switcher is the only modifications made to most of the the retail Saturn units known as the `MS100` model. However there was an additional variant with a MIDI interface to connect to the `Sega Sound Tools` if you bought the `MC100` model [^8].

The official price list from Cross Products put the Modified Saturn by itself at a price of £500 which are simply described as:
> A production Saturn fitted with shielded NMI cables and CD switch (VCD)

---
# Address Checker Hardware by SI Electronics
<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Good luck fitting this SEGA Saturn in your TV cabinet. Egg for scale.<br><br>(this machine was used to ensure that games in development didn&#39;t violate the Sega Memory usage guide) <a href="https://t.co/pZaZCEHigN">pic.twitter.com/pZaZCEHigN</a></p>&mdash; Codemasters (@Codemasters) <a href="https://twitter.com/Codemasters/status/1192794937613524992?ref_src=twsrc%5Etfw">November 8, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In order to make sure your game doesn't violate the Sega Memory usage guide this piece of hardware would allow running your game with real-time checking of the memory addresses used. 

If the game accessed memory in certain restricted regions this machine would send an error message to an attached PC. Apart from that functionality it is exactly the same as a retail Saturn console (including the need for System Disc to run CD-Rs).

This machine would likely be used by Sega themselves to check if games can be given the go-ahead to be produced, otherwise they would be failed and given back to the developer to fix the memory issues.

{% include link-to-other-site.html url="https://nfggames.com/games/satadd/" description="NFGGames has a good page on the original SI Electronics Address checker." title="IS Electronics / Sega Saturn Address Checker - NFG Games" image="https://nfggames.com/games/satadd/satadd2.jpg" %}

For the second version of the Sega Saturn Address checker hardware it was basically a retail Saturn with LED lights down the side, one for each unmapped memory area, for more information SEGARetro has an excellent wiki page on it.

{% include link-to-other-site.html url="https://segaretro.org/Sega_Saturn_Address_Checker" description="SegaRetro page on the 2nd version of the Sega Saturn Address Checker." title="Address Checker v2" image="https://segaretro.org/images/a/a6/Ssaddresschk_01.jpg" %}

---
# Sega Saturn Boot Disc
Similar to the Dreamcast's System Disc 2, this is a disc that allows any retail Sega Saturn to play developer written CD-Rs without any Saturn modding required.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jdOdhjv1FNY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is very useful for developers as they could burn CD-Rs and pass them off to the testing team that just need the system disc and the burned CD-R [^4].

There are two versions available, one in red and the other in black, one can only be used for Sega first party titles as it was only used in-house at Sega. The other was given to 3rd party developers and only boots 4rd party games.

Note that when using the system disc it will go back to the dashboard and disable the security check, so just pop the CD-R disc into the drive and it should boot as normal.

---
# Mirage CD Emulator
<iframe width="560" height="315" src="https://www.youtube.com/embed/BQwD0asDiic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
The Mirage CD Emulator was developed by Cross Products and sold to development studios to save time and discs by emulating the use of a physical drive.

It cost $3000.00 to buy directly from SEGA and contained a 1gb hard drive inside, allowing for a couple of games to be stored on it.

Similar to mounting an ISO on a PC, although instead of ISO the Mirage used a custom format that needed to be created with special development kit tools.

This allowed developers to simulate errors with the disc to make sure their game was as robust as possible.

For more information about the Mirage please check out this excellent page on SegaRetro: [MIRAGE Universal CD Emulator](https://segaretro.org/MIRAGE_Universal_CD_Emulator)

The Mirage wasn't the only way to mount discs for the development system, there was also a Virtual CD emulator available for the P-box. This allowed much more discs to be mounted as it could use the entire PC hard drive as storage.

{% include link-to-other-site.html url="http://dj898.egloos.com/932484" description="For more images of the Mirage CD Emulator check out this site on egloos." image="http://pds6.egloos.com/pds/200710/30/68/e0037268_47269a29124f0.jpg" title="Images of Mirage"  %}


---
# Hitachi E7000 PC Debug Unit (ICE)
<section class="postSection">
  <img src="/public/images/saturn/Hitachi-E7000-PC-Debug-Saturn.jpg"  class="wow slideInLeft postImage" />
  <div markdown="1">
  The Hitachi E7000 PC Debug Unit is an In Circuit Emulator or ICE for short, it connects to the Sophia (P-Box) or the Address Checker hardware and also the developers PC.

  This was used by developers to debug their games and it acted as a full SH-2 cpu. It was not cheap as one unit cost $15,000.00 USD including all wires and documentation, so not all developers could have one of these units.
  </div>
</section>

You can use the `ipi` executable included with the hitachi development kit to connect to it as shown in the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/yUgepCl0J0w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Hardware for Designers
Sega recommended Macintosh for sound designers or 2D Artists, and SGI INDY or INDIGO2 machines for 3D work. Sega also released a couple of hardware attachments for Macintosh systems specifically for these designers.

## Sound Target Box by Sophia Systems
<section class="postSection">
  <img src="/public/images/saturn/Sophia-Sega-Saturn-Sound-Box-byPeekB.jpg" class="wow slideInLeft postImage" />
  <div markdown="1">
For sound designers a `Sound Box` could be purchased for $4,800.00 from SEGA and connected to the sound designers Macintosh system. 

This was the first sound development hardware available for the SEGA Saturn and was later replaced by a model of the `CartDev` development kit which has a MIDI port that also connected to the Macintosh based SEGA Sound Tools.
  </div>
</section>

## Graphics Target Box by Sophia Systems
<section class="postSection">
  <img src="/public/images/saturn/Saturn-Graphics-Box-ChrisMCovell.jpg" class="wow slideInLeft postImage" />
  <div markdown="1">
For Graphics Designers a `Graphics Box` developed by Sophia Systems can be purchased from Sega. This image was from `Chris M Covell`[^6] and you can check out his excellent site here: [Sega Saturn Graphics Box](https://www.chrismcovell.com/saturnbox.html).
    
As this is similar to the Sound Box it is likely that this also got replaced by the `CartDev` development kit, but it is unlikely it would need a special model as there would be no need for an additional connectivity options as the SCSI port should be able to handle any graphics being sent between development PC and graphics development kit.
  </div>
</section>

---
# Overall Cost of Development Kits
In this side by side example of the Sega Saturn and Nintendo 64 you can see which one developers preferred in terms of cost:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Comparing development hardware costs <a href="https://twitter.com/hashtag/SegaSaturn?src=hash&amp;ref_src=twsrc%5Etfw">#SegaSaturn</a> vs <a href="https://twitter.com/hashtag/Nintendo64?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo64</a> <a href="https://t.co/v5GOhLGFXg">pic.twitter.com/v5GOhLGFXg</a></p>&mdash; Shane Battye 🎮 (@shanebattye) <a href="https://twitter.com/shanebattye/status/1149429606509961219?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

# 3rd Party Development kits
Although the Cross Products development kit was initially a 3rd party development kit it was included on this page as it became the official `CartDev` development kit. However there was also another competing 3rd party development kit by Sony of all people.. well technically a company that got bought by Sony: Sn Systems & Psygnosis. It was called the Psy-Q Saturn development kit and it was part of a cross platform suite of development kits.

{% include link-to-other-post.html post="/psyq-sega-saturn/" description="For more information on the SN Systems & Psygnosis PSYQ Saturn check out this post." %}

---
# References
[^1]: https://segaretro.org/Sega_Saturn_Programming_Box
[^2]: https://segaretro.org/Sophia_Systems
[^3]: EDGE Magazine issue 23 (August 1995)
[^4]: [Sega Saturn System Boot Disc (Play Backups Without Modding!) - Game Taff - YouTube](https://www.youtube.com/watch?v=jdOdhjv1FNY)
[^5]: [Ebay: Hitachi E7000 PC Saturn SH-2 Debugging station](https://assemblergames.com/threads/ebay-hitachi-e7000-pc-saturn-sh-2-debugging-station.3092/)
[^6]: [Sega Saturn Graphics Box](https://www.chrismcovell.com/saturnbox.html)
[^7]: EDGE issue 21 (June 1995)
[^8]: [All Dev Saturn consoles the same?](https://www.obscuregamers.com/threads/arent-all-dev-saturn-consoles-the-same.324/)
