---
layout: post
tags: 
- gc
- devkit
- hardware
title: Nintendo Gamecube (Dolphin) Development Kit Hardware
thumbnail: /public/consoles/Nintendo Gamecube.png
videocarousel:
  - title: DDH & NPDP-GDEV
    image: http://img.youtube.com/vi/Bi6xRPhKjvQ/hqdefault.jpg
    youtube: Bi6xRPhKjvQ
  - title: 
    image: http://img.youtube.com/vi/Z45nbzMLk98/hqdefault.jpg
    youtube: Z45nbzMLk98
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
- gc
- devkit
editlink: /gamecube/GCDevelopmentKitHardware.md
references:
  - archive.org
---

# AMC Dolphin Development Hardware (DDH)
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bi6xRPhKjvQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

<div markdown="1">

The earliest Gamecube development hardware available to game developers was known as the Dolphin Development Hardware or simply DDH for short. This system was sold before the other development kits were finalised, allowing game developers to get a head start on Gamecube development [^4]. 

It was built by Applied Microsystems Corp (AMC) and just looked like a standard light grey PC tower with dolphin logo on the front and some Gamecube controller ports. 

The systems seems to have been distributed with software called the **gameOptix DVD Development Kit** by AMC, presumably this was used to send the game data to the hardware [^3].
</div>
</section>

## Prototype AMC DDH
<section class="postSection">
<iframe width="560" height="315" src="https://www.youtube.com/embed/04uII-sb4cQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage" ></iframe>

<div markdown="1">
The Prototype version of the DDH has RJ-11 ports instead of gamecube ports and only ran at either 3/4 or half the speed of the retail Gamecube.

Apparently the system runs at 3/4 the speed of a retail Nintendo Gamecube [^7], which isn't exactly ideal for development but would be fine if just used for debugging non-performance related issues.
</div>
</section>

---
# NPDP Development Kits
NPDP is the name of the development cartridges for in development games, they were basically hard disk drives used as game cartridges for developers to write games to them.

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
<iframe width="560" height="315" src="https://www.youtube.com/embed/2GHRdOQ2Y3I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

<div markdown="1">
The GBOX was very similar to the GDEV unit but instead of being focussed for programmers it has more of a focus on testing. The main feature it lacks compared to the **NPDP-GDEV** is the lack of connecting to the Optical Disk Emulator (ODEM) PCI card [^5], so it could only test games from the physical NPDP cartridges that had been written using either the **NPDP-GDEV** or one of the NPDP Writers (NPDP-GW/NPDP-SW).
</div>
</section>

---
## NPDP Reader
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

The main purpose of this unit however was for Assert creators (Graphics artists, Sound engineers, 3D Animators etc) to preview how their game assets would look (or sound) when played on real Gamecube hardware. This has the advantage of being a cheaper solution that buying asset creators their own **NPDP-GBOX** and so they didn't need to share time with other programmers and Testers on the team.

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
