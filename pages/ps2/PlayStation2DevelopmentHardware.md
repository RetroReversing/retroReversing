---
layout: post
tags: 
- ps2
- hardware
- devkit
title: Sony PlayStation 2 Development Kit (Hardware)
thumbnail: /public/consoles/Sony Playstation 2.png
image: https://img.youtube.com/vi/shr7kbAiyhs/maxresdefault.jpg
permalink: /playstation-2-development-hardware
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 2
    url: /ps2
  - name: Sony PlayStation 2 Development Kit (Hardware)
    url: #
recommend: 
  - devkit
  - ps2
editlink: /ps2/PlayStation2DevelopmentHardware.md
videocarousel:
  - title: GIANT PlayStation 2 Development Tool!
    image: https://img.youtube.com/vi/hYjcwZA3XWs/maxresdefault.jpg
    youtube: 'hYjcwZA3XWs'
  - title: Ebay Find Playstation 2 TOOL (Dev Kit)
    image: https://img.youtube.com/vi/G2ep1X_BS-Q/maxresdefault.jpg
    youtube: 'G2ep1X_BS-Q'
updatedAt: 11th January 2020
---
This post covers the hardware used to develop Playstation 2 games by major studios back in the day, for the software side see the post on the Official PS2 SDK.

# Official Development Kit
The official development kit created by Sony was by far the most widley used by game studios for development, however Sony sold a few different devices tailored for different purposes such as programming or QA.

## Playstation 2 Prototype Development Kit (EB-1000+)
<section class="postSection">
  <img src="/public/images/ps2/PS2_Prototype_EB-1000_by_koukimonster91.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Before the retail release of the Playstation 2 hardware developers needed to start development so that the console would have titles on launch. 

Since the hardware was still under heavy development, only a select few studios were trusted enough to get sent one of the Prototype PS2 development kits.

The development kits were used as a build target and connected to the development PC via a PCI interface card so the PC would send down the code to execute and the kit would run it and display the output on a separate screen.

The image on the left is the only known image of the prototype development kits and it was taken from a Sony Dev conference presentation [^5]. 

These kits have an internal reference code `EB-*` with `EB-1000` being the first unit developed and `EB-2000S` being the last known unit made available.

It is very unlikely any of these will be available to buy as they were all ordered to be sent back to Japan to be crushed and the developers will get sent out the new development kit as a replacement, the new development kit is the `TOOL` mentioned below.
</div>
</section>

## Playstation 2 DTL-T10000 Development Tool
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/G2ep1X_BS-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
  The `PlayStation 2 DTL-T10000 Development Tool` or TOOL for short was developed by Sony and sold directly to game studios for game development. 
It connects to a PC workstation and also has the ability to run both burned and retail PS2 game discs [^1].

They have space to support 2 IDE hard drives at once, they came as standard with either 20gb or 40gb [^4].

There were multiple models of the TOOL available, codes that have an H at the end had support for Networking built in:
* Playstation 2 DTL-T10000 Development Tool
* Playstation 2 DTL-T10000H Development Tool
* Playstation 2 DTL-T10000HA Development Tool
* Playstation 2 DTL-T15000 Development Tool with Performance Analyzer

The upgraded model `DTL-15000` with the Performance Analyzer is especially rare and was a more expensive unit so developers tended to only have a couple and used them for debugging performance issues with their games.

Currently no video exists of the Performance Analyzer running, but if someone has the ability to record this it would be greatly appreciated!
</div>
</section>

## Playstation 2 DTL-T14000 CD/DVD Emulator Board For TOOL
<section class="postSection">
   <img src="/public/images/ps2/Playstation 2 DTL-T14000 Tool CDDVD-ROM Emulator.jpg" class="wow slideInLeft postImage" />
  
<div markdown="1">
The `DTL-T14000` hardware was not a full development kit in itself it was just an add-on for existing TOOL units that allowed developers to use a hard drive version of the game but it emulates the speed and disc access of a physical CD/DVD. This saves developers creating hundreds of CD/DVDs of their game when testing and gives more realistic load times compares to the hard drive.

The image on the left[^7] was taken by `Nicholas Cottrill` and uploaded to his excellent Flickr account available here: [Nicholas Cottrill | Flickr](https://www.flickr.com/photos/icarusnick/).
</div>
</section>

## Playstation 2 DTL-H1000 Debugging station (TEST)
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/aaGl-yM1lvo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
  Since the TOOL was an expensive beast aimed at programmers, for QA testing of games, Sony released another unit for known as the `PLAYSTATION 2 DTL-H1000 DEBUGGING STATION` or `TEST` for short. This was basically a standard Playstation 2 but with the ability to read burned CDRs.

There were a few different models of the TEST and different variants for each region:
* Playstation 2 DTL-H1000 Debugging Station 
* Playstation 2 DTL-H10100 Debugging Station 
* Playstation 2 DTL-30002 Debugging Station 
* Playstation 2 SPCH-39004 console
* Playstation 2 SPCH-770004 console


Some early models didn't have support for reading retail discs or DVDs, so only CDRs were supported [^3].

To add networking capabilities you could purchase a `DTL-H10010 Development tool PCMCIA card` that slotted into the back of the TEST unit (there was a PCMCIA slot on the TEST where the retail had the Hard Drive bay).
</div>
</section>

{% include link-to-other-site.html url="http://thevideogameproject.com/ps2hard.html" description="For more information on the Debugging station, The Video Game project has an excellent page on the subject" image="http://thevideogameproject.com/images/ps2hard13.jpg" title="PS2 Debugging Station - The Video Game Project"  %}

---
# Third Party Development Kits
Due to the complexity of the PS2 hardware it was not very common for third parties to create development tools for the PS2, however there were a few companies such as SN Systems that created their own cheaper development kits that compete directly with Sony's.

## SN Systems Network Development Kit
One of the development kits that SN Systems created for the Playstation 2 was tailored for games that utilise the Network capabilities that were added towards the end of the PS2's lifetime.

{% include link-to-other-post.html post="/sn-systems-network-development-kit-for-ps2/" description="For more informations about the SN Systems Network Development kit for the PS2." %}

---
# References
[^1]: [GIANT PlayStation 2 Development Tool! - YouTube](https://www.youtube.com/watch?v=hYjcwZA3XWs)
[^2]: [Ebay Find: Playstation 2 TOOL (Dev Kit) - YouTube](https://www.youtube.com/watch?time_continue=896&v=G2ep1X_BS-Q&feature=emb_logo)
[^3]: [Playstation 2 Prototype, Debug & Sample Hardware](http://thevideogameproject.com/ps2hard.html)
[^4]: [PS2 - PlayStation 2 TOOL DTL-T10000/DTL-T15000 Reliability | ObscureGamers - Prototopia](https://www.obscuregamers.com/threads/playstation-2-tool-dtl-t10000-dtl-t15000-reliability.376/)
[^5]: [EB-2000 prototype PS2 development system](https://web.archive.org/web/20141106125327/http://www.assemblergames.com/forums/showthread.php?10802-EB-2000-prototype-PS2-development-system)
[^6]: [Index of /ps2](http://lorezan.free.fr/ps2/?M=A)
[^7]: [Playstation 2 DTL-T14000 Tool CD/DVD-ROM Emulator | Nicholas Cottrill | Flickr](https://www.flickr.com/photos/icarusnick/6096224897)
