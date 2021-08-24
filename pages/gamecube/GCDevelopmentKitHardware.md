---
layout: post
tags: 
- gamecube
- devkit
- hardware
title: Nintendo Gamecube (Dolphin) Development Kit Hardware
thumbnail: /public/consoles/Nintendo Gamecube.png
videocarousel:
  - title: DDH & NPDP-GDEV
    image: https://img.youtube.com/vi/Bi6xRPhKjvQ/hqdefault.jpg
    youtube: Bi6xRPhKjvQ
  - title: NR Reader
    image: https://img.youtube.com/vi/7qxk9ORDSIk/hqdefault.jpg
    youtube: 7qxk9ORDSIk
image: /public/images/gc/Gamecube Development Kit Hardware.jpg
permalink: /gamecube-development-kit-hardware/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gamecube
    url: /gc
  - name: Nintendo Gamecube (Dolphin) Development Kit Hardware
    url: #
recommend: 
- gamecube
- devkit
editlink: /gamecube/GCDevelopmentKitHardware.md
references:
  - archive.org
twitterimage: https://www.retroreversing.com/public/images/gc/Gamecube Development Kit Hardware.jpg 
updatedAt: '2020-09-30'
redirect_from:
 - /prodg-gamecube
---

# AMC Dolphin Development Hardware (DDH)
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bi6xRPhKjvQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

<div markdown="1">

The earliest Gamecube development hardware available to game developers was known as the **Dolphin Development Hardware** or simply **DDH** for short. This system was sold before the other development kits were finalised, allowing game developers to get a head start on Gamecube development [^4]. 

It was built by Applied Microsystems Corp (AMC) and just looked like a standard light grey PC tower with dolphin logo on the front and some Gamecube controller ports. 

The systems seems to have been distributed with software called the **gameOptix DVD Development Kit** by AMC, presumably this was used to send the game data to the hardware [^3].
</div>
</section>

## Prototype AMC DDH
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/04uII-sb4cQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage" ></iframe>

<div markdown="1">
The Prototype version of the DDH has RJ-11 ports instead of gamecube ports and apparently the system runs at 3/4 the speed of a retail Nintendo Gamecube [^7], which isn't exactly ideal for development but would be fine if just used for debugging non-performance related issues.
</div>
</section>

---
# NPDP Development Kits
According to leaked Nintendo internal documentation **NPDP** standard for Nintendo Pseudo Disc Pack [^14] which are a suite of development tools that used a cartridge to read/write gamecube games.
These cartridges were basically hard disk drives used as game cartridges for developers to write games to them and allowed faster load times than reading from a physical disc.

## NPDP cartridges (GCT-0300)
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/fPrEmWScuZU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

<div markdown="1">

The cartridge consists of a Toshiba IDE Hard Disk Drive (HDD) along with a PATA connector which slots into one of the NPDP development tools or Flash Writers.
</div>
</section>

## NPDP-GDEV - Development Solution
<section class="postSection">
<img src="/public/images/gc/Gamecube NPDP-GDEV - Development Solution.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The **GDEV** unit was built using an **Orca** board, which was the name of the board used for very early prototype Gamecube development [^2]. It has four standard Gamecube ports on the front, a cartridge slot for NPDP cartridges and DIP switches which control the region (PAL/NTSC-J etc). As the NPDP cartridges could store up to 3 different games there is buttons. to control which game will be inserted, including a small LED panel displaying the number of the current game.

It is aimed at programmers directly and allowed standard debugging features such as breakpoints and memory editing. The main benefit of this unit was the built in **NPDP-ODEM** companion card, this allowed it to connect to a PC with the **NPDP-ODEM** PCI card and stream game data directly from the PC instead of using the NPDP cartridge. This was much faster for development as there was no need to write a cartridge every single time and updates could be fairly quick.
</div>
</section>

### Prototype NPDP-GDEV
Developer Jeff managed to find an extremely rare prototype **NPDP-GDEV** which would only have been sent to a select few developers in the early stages of the Gamecube. 
It did not run at full speed initially, but this unit was upgrades to run at full Gamecube speed later down the line.
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">So heres a bit better quality image of the elusive Nintendo Gamecube GDEV Prototype &quot;Beta Release&quot; With Beta ODEM &amp; Beta USB Adapter Module. <br><br>If you have any questions, thoughts, or conerns please drop them below.!<br><br>Thanks and all the best. <br>-Jeff <a href="https://t.co/oGPiGzIadZ">pic.twitter.com/oGPiGzIadZ</a></p>&mdash; Developer Jeff 🕹️ (@OfficialDevJeff) <a href="https://twitter.com/OfficialDevJeff/status/1375587099295023104?ref_src=twsrc%5Etfw">March 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### NPDP-ODEM PCI card - Optical Disk Emulation via PC
<section class="postSection">
<img src="/public/images/gc/Gamecube NPDP-ODEM PCI card.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The Optical Disk Emulator (ODEM) PCI card was used to send game data to the NPDP-GDEV development kit, instead of using a NPDP cartridge, as it was generally easier for developers to connect directly from PC than to write a NPDP cartridge every time they wanted to run the games.
</div>
</section>

---
## NPDP-GBOX - Testing Solution
<section class="postSection">
  <img src="/public/images/gc/NPDP-G-BOX - Gamecube Developmet Kit.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The GBOX was very similar to the GDEV unit but instead of being focussed for programmers it has more of a focus on testing. The main feature it lacks compared to the **NPDP-GDEV** is the lack of connecting to the Optical Disk Emulator (ODEM) PCI card [^5], so it could only test games from the physical NPDP cartridges that had been written using one of the NPDP Writers (NPDP-GW/NPDP-SW).
</div>
</section>

---
## NPDP Reader Console
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rAwBQomvFZI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

<div markdown="1">
Later on in the Gamecube's lifespan a much cheaper option for testing NPDP cartridges became available called the NPDP Reader. 

it was very similar to a retail Gamecube apart from the giant NPDP cartridge reader on the top instead of the optical drive. In fact for you take the **NRDP** cartridge reader part away from the rest of the console and hook it up to a retail Gamecube and it would work just fine, in fact this is commonly used for dumping NRDP cartridges [^9].

This mostly replaced the need for a **NPDP-GBOX** and was much cheaper due to it being a modified retail Gamecube system with the Optical Disc drive being replaced with a **NPDP** interface slot. 

However it lacked any method of communicating with a developers PC, which is where the **IS-DOL-VIEWER** would come in.
</div>
</section>

### IS-DOL-VIEWER (Intelligent Systems Dolphin Viewer)
<section class="postSection">
<img src="/public/images/gc/Gamecube IS-DOL-VIEWER.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Intelligent Systems have a history of creating **IS-Viewer** cartridges for Nintendo consoles such as the Nintendo 64 and the Gamecube was no different. It connected to the bottom of the NPDP Reader console and enabled communication with a development PC over a RS-232 cable, making it similar to the **NPDP-GBOX**.

The main purpose of this unit however was for Assert creators (Graphics artists, Sound engineers, 3D Animators etc) to preview how their game assets would look (or sound) when played on real Gamecube hardware. This has the advantage of being a cheaper solution than buying asset creators their own **NPDP-GBOX** and so they didn't need to share time with other programmers and Testers on the team.

It provided a High Speed USB 2.0 interface to connect to the Developers PC which allowed very fast transfer of Game assets for previewing on the Gamecube hardware [^8]. It also boasts about being the only Gamecube development hardware that natively supports the Apple Macintosh, which was a popular platform for content creators at the time.

According to the official Intelligent Systems Website it also provided a connector to the NPDP-GDEV and AMC DDH development units by using an optional connector called the **IS-DOL-VIEWER MEMORY CARD SLOT I / F kit** [^8]. The main advantage of this would be to use the Intelligent Systems previewing tools and Macintosh support.
</div>
</section>


## NPDP-GW (Flash Gang Writer) 
<section class="postSection">
<img src="/public/images/gc/Gamecube NPDP-GW - Gang writer.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The NPDP Gang Writer (**NPDP-GW**) for Gamecube had 8 slots available to place blank NPDP cartridges in and it will write the same game to all 8. This would be especially useful when sending out prototypes to a team of QA engineers, as far as we know it was never used to send to Journalists as they would not have the equipment available to read the NPDP cartridge.
</div>
</section>

## NPDP-SW (Single Writer)
<section class="postSection">
<img src="/public/images/gc/Gamecube NPDP-SW - Single Writer.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The little brother of the **NPDP-GW** is the NPDP Single Writer (**NPDP-SW**) which has the same function but only one port for writing to a single NPDP cartridge. This was much more convenient for sharing individual game builds throughout the team.

</div>
</section>

## NPDP-WIF (Writer InterFace) PCI card (GCP-3000)
<section class="postSection">
<img src="/public/images/gc/Gamecube NPDP-WIF - Writer InterFace PCI card.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
This PCI cart connected to the Gang/Single NPDP writers and is required for them to be able to write any data. it also comes with software for the PC which contained the device drivers and also an application called **NPDP-Writer** which was used to burn NPDP cartridges.
</div>
</section>

---
## NR Development Kits
The NR-based development kits came out at the same time as the NPDP kits and had the advantage of using fairly cheap DVD-Rs, known as NR Discs to store games. The downside is that a new CDR would need to be burned for each build, meaning it was a lot more wasteful than the NPDP development options.

## NR Disc (DOT-003)
<section class="postSection">
<img src="/public/images/gc/Gamecube NR Disc.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The Gamecube NR Discs are  a small 8cm DVD-R that developers would write to using an **NR-Writer** and could only be played back on specific gamecube hardware called the **NR-Reader**. NR Disc were mainly used as a convenient testing solution as they could be easily burnt and given to a team of game testers to play on their NR-Reader consoles.

</div>
</section>


## NR Reader
<section class="postSection">
<img src="/public/images/gc/Gamecube NR-Reader.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The Gamecube **NR-Reader** was a slightly modified retail Gamecube unit that could only play burned development NR discs, so it doesn't play any retail game discs. Its purpose was to get as close to testing on a retail machine as possible, so no debugging features were present on these consoles.

The main modification to the hardware other than the optical disc reader is that it has a switch on the side to switch between different regions (PAL/NTSC) [^6].

</div>
</section>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧𝙨 𝙆𝙞𝙩 𝙤𝙛 𝙩𝙝𝙚 𝙙𝙖𝙮<br><br>If you’re wondering why this <a href="https://twitter.com/hashtag/Gamecube?src=hash&amp;ref_src=twsrc%5Etfw">#Gamecube</a> has such an odd color, that’s because it’s a devkit. This is called an NR- reader. It only reads NR discs. <a href="https://twitter.com/hashtag/gaming?src=hash&amp;ref_src=twsrc%5Etfw">#gaming</a> <a href="https://twitter.com/hashtag/nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#nintendo</a> <a href="https://twitter.com/hashtag/gamersunite?src=hash&amp;ref_src=twsrc%5Etfw">#gamersunite</a> <a href="https://t.co/rXA20vuTnc">pic.twitter.com/rXA20vuTnc</a></p>&mdash; 🕹 ᄃӨᄂӨПΣᄂ FΛᄂᄃӨП 🕹 (@ColonelFalcon) <a href="https://twitter.com/ColonelFalcon/status/1068871756327337988?ref_src=twsrc%5Etfw">December 1, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## NR-Writer
<section class="postSection">
<img src="/public/images/gc/Gamecube NR-Writer.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The Gamecube NR Writer connects to a developer's PC via a SCSI port and allows burning of Game Cube Image files (GCM) to NR discs. According to Nintendo this would only take about 20 minutes and you could even daisy chain multiple NR-Writers together to write up to 4 images at once! This gave it a similar functionality to the Gang Writer for NPDP cartridges.

According to a post on AssemblerGames these writers are not unique to Nintendo and were used outside the games industry, but Nintendo got special permission from Panasonic to write custom firmwares for these drives to produce NR discs [^6]
</div>
</section>



## USB-EXI USB Adapter (GCP-2000)
<section class="postSection">
<img src="/public/images/gc/Gamecube GCP-2000 USB Adapter.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The GCP-2000 USB Adapter connects via a Gamecube's memory card slot and has a usb port allowing communication between a developer's PC and the Gamecube hardware. The EXI bus on a Gamecube is used to connect external peripherals including the memory card and so this hardware just provides an interface between that EXI Bus and USB.

</div>
</section>

<iframe width="560" height="315" src="https://www.youtube.com/embed/nvG25CKrg_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---

# SN Systems Development Kits
SN Systems are very well known for their quality third party development kit hardware and SDKs and the gamecube was one of the last non-Sony platforms that they supported after being bought out by Sony.

{% include link-to-other-post.html post="/companies/snsystems/" description="For more information on SN Systems check out this post." %}


## SN Systems Tiny Development Kit (SN-TDEV)
<section class="postSection">
<img src="/public/images/gc/Gamecube SN Systems Tiny Development Kit - SN-TDEV.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The SN Systems Tiny Development Kit or **SN-TDEV** for short was a cheaper alternative to the other development kits and was very popular in Universities teaching game development along with smaller third party game developers. They require a license to use which apparently only lasted a single semester so the University would need to keep renewing them from SN Systems every term that they wanted to run the course [^6].

It cannot play regular retail games, only Burned NR-discs, but it also has a fast USB 2.0 connector which can be used to emulate the Disc drive on a developers PC, skipping the need to burn NR Discs.

It provided double the amount of RAM (48MB) as a standard Nintendo Gamecube which allowed the ability to send compiled ELF executables to the system to debug and run [^11].

</div>
</section>

The SN-TDEV unit supports the SN Systems SDK known as PRO-DG, including the performance optimiser known as **Tuner** [^11].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧𝙨 𝙆𝙞𝙩 𝙤𝙛 𝙩𝙝𝙚 𝙙𝙖𝙮<br><br>This is a chocolate brown <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> <a href="https://twitter.com/hashtag/Gamecube?src=hash&amp;ref_src=twsrc%5Etfw">#Gamecube</a> TDEV. It’s a devkit that was also used in Universities. It does not play regular games, only NR discs. (Found at <a href="https://t.co/RfI4EsLWv6">https://t.co/RfI4EsLWv6</a>) <a href="https://twitter.com/hashtag/retrogaming?src=hash&amp;ref_src=twsrc%5Etfw">#retrogaming</a> <a href="https://t.co/W7uVfQBGfP">pic.twitter.com/W7uVfQBGfP</a></p>&mdash; 🕹 ᄃӨᄂӨПΣᄂ FΛᄂᄃӨП 🕹 (@ColonelFalcon) <a href="https://twitter.com/ColonelFalcon/status/949407089524342785?ref_src=twsrc%5Etfw">January 5, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## SN Systems ProDG Devlink
<section class="postSection">
<img src="/public/images/gc/SN Systems ProDG Devlink.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The SN Systems ProDG Devlink was hardware supplied with the SN Systems ProDG SDK known as **ProView**, which is similar in function to the **IS-DOL-VIEWER** in that it targeted asset creators rather than programmers [^13]. It connects to the NPDP Reader or NR Reader consoles and provides a USB interface to allow content creators to send assets to the Gamecube quickly. The image on the left was kindly provided by **Shane Battye** over on his twitter [^12].
</div>
</section>

Here is an image of the Pro-DG SDK package that was sold to developers, looks beautiful but it was very expensive for only 150mb of data:
<img src="/public/images/gc/ProDG Gamecube SDK by SN Systems.jpg" />


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Interesting little tool for NR-Readers and GameCube dev - this is an SN Systems ProDG devlink kit <a href="https://t.co/KClW9Br2DB">pic.twitter.com/KClW9Br2DB</a></p>&mdash; Shane Battye 🎮 (@shanebattye) <a href="https://twitter.com/shanebattye/status/1165466965164449793?ref_src=twsrc%5Etfw">August 25, 2019</a></blockquote>


---
{% include link-to-other-post.html post="/official-n64-devkit/" description="Since you have got this far you might be interested in Nintendo's previous generation of console development hardware, if so check out this post." %}


---
# References
[^1]: [Rare Nintendo Dolphin prototype NPDP-GDEV & DHH System Review - Gamester81 - YouTube](https://www.youtube.com/watch?list=PLD4E95BD5EA898348&time_continue=44&v=Bi6xRPhKjvQ&feature=emb_logo)
[^2]: [GDEV - RGDWiki](https://wiki.mariocube.com/index.php/GDEV)
[^3]: [Nintendo Gamecube SDK Documentation](https://archive.org/stream/GCN_SDK_Documentation/Setting%20Up%20the%20Dolphin%20Development%20Kit)
[^4]: [Applied Microsystems - Guide - Nintendo World Report](https://www.nintendoworldreport.com/guide/1795/gamecube-faq-applied-microsystems)
[^5]: [NDPD - ASSEMbler Games Archive](https://www.assembler-games.com/threads/ndpd.4458/)
[^6]: [Comprehensive list of Gamecube dev stuff? - ASSEMbler - Home of the obscure](https://web.archive.org/web/20160408125552/https://www.assemblergames.com/l/threads/comprehensive-list-of-gamecube-dev-stuff.29487/)
[^7]: https://www.youtube.com/embed/04uII-sb4cQ
[^8]: [INTELLIGENT SYSTEMS 開発ツール](https://web.archive.org/web/20021113013320/http://www.intsys.co.jp/tools/gamecube/viewer/intro.html)
[^9]: [Dumping a NPDP cart? - ASSEMbler Games Archive](https://www.assembler-games.com/threads/dumping-a-npdp-cart.42055/)
[^10]: [Copying a NPDP cart - ASSEMbler Games Archive](https://www.assembler-games.com/threads/copying-a-npdp-cart.6497/)
[^11]: [SN-TDEV for Nintendo GameCube](https://web.archive.org/web/20041206205148/http://www.snsys.com/GameCube/SN-TDEV.htm)
[^12]: [Shane Battye 🎮 on Twitter: "Interesting little tool for NR-Readers and GameCube dev - this is an SN Systems ProDG devlink kit](https://twitter.com/shanebattye/status/1165466965164449793)
[^13]: [ProView for Nintendo GameCube](https://web.archive.org/web/20041208104135/http://www.snsys.com/GameCube/ProView.htm)
[^14]: ANEMONE2.DOC from the BB2 Nintendo Leak
