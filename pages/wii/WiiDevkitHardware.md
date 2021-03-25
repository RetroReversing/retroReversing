---
layout: post
tags: 
- wii
- devkit
- hardware
title: Nintendo Wii Development Kit Hardware
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/qii/Nintendo Wii Development Kit Hardware.jpg
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
editlink: /wii/WiiDevkitHardware.md
---

# Wii Prototype Development Kit
<section class="postSection">
    <img src="/public/images/wii/Wii Prototype Development Kit.jpeg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first development kit available for the Wii was actually just a Gamecube with motion controllers!

In fact it was the green gamecube development unit called the **NR Reader**. This allowed developers to write games to writeable NR-discs and test the game out on the read hardware.

You will notice that the motion controller actually plugs into the standard gamecube controller port and so is not wireless and it comes with a slightly different motion bar than the retail units.

 </div>
</section> 

{% include link-to-other-post.html post="/gamecube-development-kit-hardware/" description="For more information about the Nintendo Gamecube Development Kits check out this post." %}

---
# RVT-001 NDEV

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

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Nintendo Wii &quot;Prototype&quot; Tradeshow Development Kit RVT - R Wireless Reader <br><br>Similar to the final RVT-R &quot;Wireless&quot; but in retail flavor, ill take this apart and compare to discern any differences that may exist. <br><br>Enjoy!<br>-Jeff<br><br>Special Thanks <br>@AndrewEarley7 <a href="https://t.co/5RUZkmCBIE">pic.twitter.com/5RUZkmCBIE</a></p>&mdash; Developer Jeff 🕹️ (@OfficialDevJeff) <a href="https://twitter.com/OfficialDevJeff/status/1190400093205254146?ref_src=twsrc%5Etfw">November 1, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
# References
[^1]: [Wii Development Consoles & Games! (RVT-H, RVT-R Wireless & Wired) - H4G - YouTube](https://www.youtube.com/watch?v=uNKoiJaieXQ)
[^2]: [NDEV - RGDWiki](https://wiki.mariocube.com/index.php/NDEV)
