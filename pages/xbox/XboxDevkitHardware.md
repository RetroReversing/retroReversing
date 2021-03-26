---
layout: post
tags: 
- xbox
- devkit
- hardware
title: Microsoft Xbox (Original) Development Kit Hardware
thumbnail: /public/consoles/Microsoft Xbox.png
image: /public/images/xbox/Microsoft Xbox Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/xbox/Microsoft Xbox Development Kit Hardware.jpg
permalink: /microsoft-xbox-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Microsoft Xbox
    url: /xbox
  - name: Microsoft Xbox (Original) Development Kit Hardware
    url: #
recommend: 
- devkit
- xbox
videocarousel:
  - title: MVG Getting games off debug hardware
    image: http://img.youtube.com/vi/D_rstdgCz9M/hqdefault.jpg
    youtube: 'D_rstdgCz9M'
  - title: PTOP Xbox Debug Kit Exploration
    image: http://img.youtube.com/vi/ocJcI7YjLJc/hqdefault.jpg
    youtube: 'ocJcI7YjLJc'
editlink: /xbox/XboxDevkitHardware.md
updatedAt: '2021-03-26'
---

# Alpha Development Hardware
<section class="postSection">
    <img src="/public/images/xbox/Original Xbox Alpha Development Kits.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
During the development of the Xbox console, the games aiming to be launch titles required a system to develop for. 

The first development kit that Microsoft sent out to the early developers was the **Alpha I**. 

It has a slower CPU speed (600Mhz) that what became the retail Xbox hardware (733 MHz), however it gave the developers everything they needed to get started with their game.

Later on Microsoft sent out the **Alpha II** development kits which came either as an upgrade for the **Alpha I** unit or pre-built. This new version allowed developers to utilise the full 733 MHz CPU that would be in the retail console.

These development kits were used up until May 2001 when they were replaced by the **DVT3** [^3].

These Alpha development kits looked like standard PCs at first glance but if you open it up you will find custom parts built specifically for the console [^1]. 

People have attempted to create their own **FrankenAlpha** versions of these consoles with alternative hardware to varying success.
 </div>
</section> 

---
# DVT3 - Xbox Development Kits
<section class="postSection">
    <img src="/public/images/xbox/Xbox DVT3 development kit.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **DVT3** development kit was released after the Alpha units when the retail hardware had been finalised.

These were only distributed from June to August 2001 where they were replaced by the final **DVT4** development kit [^3].
 </div>
</section> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/g0nWpmZo69Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# DVT4 - Xbox Development Kit
<section class="postSection">
    <img src="/public/images/xbox/Xbox DVT4 development kit.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **DVT4** development kit was released next and was the main kit used throughout the lifecycle of the original Xbox.

Although it looks similar to the retail Xbox it is about an inch taller as it contains a DVD-emulation board on the top which is used to connect to the developers PC in order to send builds to run on the unit.

You can tell the difference between a DVT4 and DVT3 by looking at the USB-shaped port on the back (it's not actually USB), it is open on the DVT3 but blocked on the DVT4.
 </div>
</section> 

---
# PCI XDK Raptor DVD Emulator Card (for DVT3/4)
The XDK Raptor card plugs in to the PCI slot of the developers PC and is used to connect to the DVT3/4's DVD emulation board via a SCSI cable [^5]. 

The image below was taken by Developer Jeff over on his Twitter account, which is a highly recommended channel to follow [^4].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rare Xbox Development kit DVT3/4 PCI Raptor DVD Emulator Card.<br>&quot;XDK-DVD&quot;<br><br>Enjoy!<br><br>-Jeff <a href="https://t.co/sjEKWPhzpD">pic.twitter.com/sjEKWPhzpD</a></p>&mdash; Developer Jeff 🕹️ (@OfficialDevJeff) <a href="https://twitter.com/OfficialDevJeff/status/1120452508000903170?ref_src=twsrc%5Etfw">April 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Debug Kits
<section class="postSection">
    <img src="/public/images/xbox/Xbox Green Debug Kit.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Debug units look very similar to the retail Xbox consoles both inside and out but they have a few differences useful for testing prototype games. 

One of the main ones is the ability to run unsigned code instead of retail signed code and double the RAM of the retail console. This is required due to debug tools overhead that remain in memory while the prototypes are run.
 </div>
</section> 

## Different Debug Kit variants
There were multiple different variants of the Debug Kit, in the video below PToPOnline provides an excellent overview of these:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ocJcI7YjLJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Backing up Prototypes from Debug Kits
If you happen to buy a Debug kit, please take extra care with the hard drive, it may contain an unreleased prototype. In the Video Below Modern Vintage Gamer takes you through the steps to preserving prototypes.
<iframe width="560" height="315" src="https://www.youtube.com/embed/D_rstdgCz9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---
# References
[^1]: [HEX1GON -- The XBOX Collector: A look at different XBOX Development Kits](http://hexigon.blogspot.com/2012/01/look-at-different-xbox-development-kits.html)
[^2]: [Development Kits - xboxdevwiki](https://xboxdevwiki.net/Development_Kits)
[^3]: [Beta Xbox Development Tools - DVT3 Overview - YouTube](https://www.youtube.com/watch?v=g0nWpmZo69Q&t=68s)
[^4]: [Developer Jeff 🕹️ (@OfficialDevJeff) / Twitter](https://twitter.com/OfficialDevJeff)
[^5]: [DVD Emulator - xboxdevwiki](https://xboxdevwiki.net/DVD_Emulator)
