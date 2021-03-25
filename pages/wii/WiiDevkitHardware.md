---
layout: post
tags: 
- wii
- devkit
- hardware
title: Nintendo Wii Development Kit Hardware
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/wii/Nintendo Wii Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/Nintendo Wii Development Kit Hardware.jpg
permalink: /nintendo-wii-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Wii
    url: /wii
  - name: Nintendo Wii Development Kit Hardware
    url: #
recommend: 
- devkit
- wii
videocarousel:
  - title: Hard 4 Games 
    image: http://img.youtube.com/vi/uNKoiJaieXQ/hqdefault.jpg
    youtube: 'uNKoiJaieXQ'
editlink: /wii/WiiDevkitHardware.md
updatedAt: '2021-03-25'
---

# Wii Prototype Development Kit
<section class="postSection">
    <img src="/public/images/wii/Wii Prototype Development Kit.jpeg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first development kit available for the Wii was actually just a Gamecube with motion controllers!

In fact it was the green gamecube development unit called the **NR Reader**. This allowed developers to write games to writeable NR-discs and test the game out on the read hardware.

You will notice that the motion controller actually plugs into the standard gamecube controller port and so is not wireless and it comes with a slightly different motion bar than the retail units.

You can read more about the NR Reader and other Gamecube development kit hardware on its own page.
 </div>
</section> 

{% include link-to-other-post.html post="/gamecube-development-kit-hardware/" description="For more information about the Nintendo Gamecube Development Kits check out this post." %}

---
# RVT-001 - NDEV
<section class="postSection">
    <img src="/public/images/wii/NDEV.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **NDEV** was the main unit used by the game programmers to build and debug their games.

The unit itself contains all the standard Wii hardware but lacks any kind of hard drive, so in order to play games on the unit they must be streamed from the game developer's PC via USB.

So the unit treat the host PC like a external hard drive and reads the ELF executable and all the game files directly from the PC HDD [^2].
 </div>
</section> 

For much more detailed information about the NDEV unit check out the RGDWiki page on it:
[NDEV - RGDWiki](https://wiki.mariocube.com/index.php/NDEV)

---
# RVT-002 - RVT-R Reader (Optical Drive)
<section class="postSection">
    <img src="/public/images/wii/RVT-R Reader.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
In order for QA to test the game without purchasing a very expensive **NDEV** unit, the RVT range of development tools were created.

The RVT-R Reader was very similar to the retail Wii unit but could play burned discs (RVT-R Single Layer Disc). This allowed programmers to burn a build they were happy with and hand it over to the testing team to find bugs.

Apparently these are green to fit in with the previous generation of development kits for the gamecube. Where Green was used for the development kit with the Optical drive and Red was used for the cartridge (hard drive) based development unit [^1].
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Nintendo Wii &quot;Prototype&quot; Tradeshow Development Kit RVT - R Wireless Reader <br><br>Similar to the final RVT-R &quot;Wireless&quot; but in retail flavor, ill take this apart and compare to discern any differences that may exist. <br><br>Enjoy!<br>-Jeff<br><br>Special Thanks <br>@AndrewEarley7 <a href="https://t.co/5RUZkmCBIE">pic.twitter.com/5RUZkmCBIE</a></p>&mdash; Developer Jeff 🕹️ (@OfficialDevJeff) <a href="https://twitter.com/OfficialDevJeff/status/1190400093205254146?ref_src=twsrc%5Etfw">November 1, 2019</a></blockquote>

---
# RVT-003 - RVT-R Writer
<section class="postSection">
    <img src="/public/images/wii/RVT-R Writer.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
In order to burn the RVT-R Single Layer Disc's a special unit was produced that connected to a developers PC.

It was essentially just a DVD-R burner that could burn to the proprietary DVDs that the Wii used.
 </div>
</section> 

---
# RVT-004 - RVT-R Single Layer Disc
<section class="postSection">
    <img src="/public/images/wii/RVT-R Single Layer Disc.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Similar to the NR discs for the Gamecube development kit but with the added storage capacity required for Wii Games.

These can be read by the **RVT-R Reader** and written to using the **RVT-R Writer**.
 
Many Prototype Wii games have been found on these Discs and they can be dumped using a hacked Wii console. Redump has a guide for dumping these if you are interested: [Nintendo GameCube (NR) / Wii (RVT-R) Dumping Guide - Redump Wiki](http://wiki.redump.org/index.php?title=Nintendo_GameCube_(NR)_/_Wii_(RVT-R)_Dumping_Guide)
</div>
</section> 

---
# RVT-005 - RVT-H (Hard drive)
<section class="postSection">
    <img src="/public/images/wii/RVT-H.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **RVT-H** is basically the same as a RVT-R Reader expect that instead of reading optical disks it instead has a built in hard drive. 

The hard-drive can hold multiple games at once and you can switch between them with buttons on the front of the unit.
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Now unboxing a <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> RVT-H wireless <a href="https://twitter.com/hashtag/Wii?src=hash&amp;ref_src=twsrc%5Etfw">#Wii</a> <a href="https://twitter.com/hashtag/devkit?src=hash&amp;ref_src=twsrc%5Etfw">#devkit</a>. Unlike the green RVT-R, this has an HDD, not an optical drive. <a href="https://t.co/exe4QcbUm9">pic.twitter.com/exe4QcbUm9</a></p>&mdash; Robin Davies (@ozconsoul) <a href="https://twitter.com/ozconsoul/status/738635595430264832?ref_src=twsrc%5Etfw">June 3, 2016</a></blockquote>


---
# References
[^1]: [Wii Development Consoles & Games! (RVT-H, RVT-R Wireless & Wired) - H4G - YouTube](https://www.youtube.com/watch?v=uNKoiJaieXQ)
[^2]: [NDEV - RGDWiki](https://wiki.mariocube.com/index.php/NDEV)
