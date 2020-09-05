---
layout: post
tags: 
- ps2
- hardware
- devkit
title: Sony PlayStation 2 Development Kit (Hardware)
thumbnail: /public/consoles/Sony PlayStation 2.png
image: https://www.retroreversing.com/public/images/ps2/PS2 Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/ps2/PS2 Development Kit Hardware.jpg
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
    image: https://img.youtube.com/vi/hYjcwZA3XWs/hqdefault.jpg
    youtube: 'hYjcwZA3XWs'
  - title: Ebay Find Playstation 2 TOOL (Dev Kit)
    image: https://img.youtube.com/vi/G2ep1X_BS-Q/hqdefault.jpg
    youtube: 'G2ep1X_BS-Q'
updatedAt: '2020-01-11'
---
This post covers the hardware used to develop Playstation 2 games by major studios back in the day, for the software side see the post on the Official PS2 SDK.

{% include link-to-other-post.html post="/ps2-official-sdk/" description="For the software side of the PS2 Development Kit check out this post." %}


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
Developed by SN Systems the `DTL-T14000` hardware was not a full development kit in itself it was just an add-on for existing TOOL units that allowed developers to use a hard drive version of the game but it emulates the speed and disc access of a physical CD/DVD. This saves developers creating hundreds of CD/DVDs of their game when testing and gives more realistic load times compares to the hard drive [^8].

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
# Consumer Development Kits
Consumer development kits allow hobbies users to create software for the Playstation 2, technically Sony released two official products for this, one was the Yabasic development environment and the other was the much more capable Playstation 2 Linux development kit. 

## Playstation 2 Linux
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/rWmJ0RH_Feo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Sony officially released an official development kit for hobbyists similar to their `Net Yaroze` system they created for the original Playstation. 

The kit comes with:
* PS2 Linux software
* PS2 branded Mouse
* PS2 branded keyboard
* PS2 Harddrive adapter + Netwrok interface
* PS2 to VGA adapter
* Hard Drive

They sold many of these to universities to tech `console` development, but we use the word console lightly as it was basically just Linux game programming as control of the PS2 hardware was severely limited [^9].
</div>
</section>

## Yabasic
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/ZnXpzczPc38" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Yabasic was released with every PAL Playstation 2 on the accompanying demo disc.

It was offered as an attempt to clarify the Playstation 2 as a Home Computer in the European Union to avoid the game console tax which existed at the time [^10].

This attempt failed to convince the courts in Europe that the console should be classified as a Home Computer.
</div>
</section>

---
# References
[^1]: [GIANT PlayStation 2 Development Tool! - YouTube](https://www.youtube.com/watch?v=hYjcwZA3XWs)
[^2]: [Ebay Find: Playstation 2 TOOL (Dev Kit) - YouTube](https://www.youtube.com/watch?time_continue=896&v=G2ep1X_BS-Q&feature=emb_logo)
[^3]: [Playstation 2 Prototype, Debug & Sample Hardware](http://thevideogameproject.com/ps2hard.html)
[^4]: [PS2 - PlayStation 2 TOOL DTL-T10000/DTL-T15000 Reliability](https://www.obscuregamers.com/threads/playstation-2-tool-dtl-t10000-dtl-t15000-reliability.376/)
[^5]: [EB-2000 prototype PS2 development system](https://web.archive.org/web/20141106125327/http://www.assemblergames.com/forums/showthread.php?10802-EB-2000-prototype-PS2-development-system)
[^6]: [Index of /ps2](http://lorezan.free.fr/ps2/?M=A)
[^7]: [Playstation 2 DTL-T14000 Tool CD/DVD-ROM Emulator By Nicholas Cottrill on Flickr](https://www.flickr.com/photos/icarusnick/6096224897)
[^8]: [DVD Emulator (DTL-T14000) for PlayStation®2](https://web.archive.org/web/20040829081814/http://www.snsys.com/PlayStation2/dvdemu.htm)
[^9]: [Official Playstation 2 Linux Kit Installation and Demo - YouTube](https://www.youtube.com/watch?v=rWmJ0RH_Feo)
[^10]: [How/Why Sony Classed the PlayStation 2 as a Home Computer - Demo of Yabasic - YouTube](https://www.youtube.com/watch?v=ZnXpzczPc38)
