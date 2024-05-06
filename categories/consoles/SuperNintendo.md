---
permalink: /snes/
layout: post
console: 'snes'
title: 'Super Nintendo (Super Famicom) - Reverse engineering & Modding'
consoleimage: /public/consoles/Super Nintendo Entertainment System.png
thumbnail: /public/consoles/Super Nintendo Entertainment System.png
recommend: snes
recommendTitle: All SNES Posts
editlink: ../categories/consoles/SuperNintendo.md
excerpt: Awesome list of Super Nintendo Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Super Nintendo/Famicom (SNES) Reverse Engineering
    url: #
redirect_from:
  - /supernintendo
---
# Introduction
Welcome to our page dedicated to Super Nintendo reverse engineering! The Super Nintendo Entertainment System, or SNES, was a popular gaming console released by Nintendo in 1990. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Super Nintendo reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your SNES controller, and get ready to dive into the exciting world of Super Nintendo reverse engineering!


## State of SNES Emulation
Every three years **Near** created an excellent article on the current status of Super Nintento Emulation, the last version is from 2019, it covers both bsnes and higen.

{% include link-to-other-site.html url="https://near.sh/articles/emulation/state-of-emulation-v" description="The latest status of Super Nintendo emulation, including new and upcoming features for bsnes and higen" image="https://near.sh/images/articles/emulation/state-of-emulation-v/bsnes-widescreen.png" title="SNES Emulation Status 2019"  %}

## The Polygons of Another World
{% include link-to-other-site.html url="http://fabiensanglard.net/another_world_polygons_SNES/index.html" description="The polygons of Another World" image="http://fabiensanglard.net/another_world_polygons_SNES/lester_snes.png" title="The polygons of Another World"  %}

---
# Hardware
If you're interested in reverse engineering software for the Super Nintendo gaming console, it's important to have a thorough understanding of the hardware that powers it. By comprehending the inner workings of the Super Nintendo hardware, you can better understand how the software interacts with the hardware and how you can potentially modify or enhance it.

This segment of our guide will provide you with detailed information and resources on the hardware of the Super Nintendo, including retail, prototype, and development hardware.

## Development Kit Hardware
We have a post all about the hardware that was used to develop for the Super Nintendo:
{% include link-to-other-post.html post="/super-famicom-snes-development-kit/" description="For more information about the **Super Nintendo** development hardware check out this post" %}

---
## Retail Console Hardware
For an in-depth look at the SNES Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/snes/" description="Copetti.org has an excellent tear down of the SNES Hardware and how it works" image="/public/consoles/Super Nintendo Entertainment System.png" title="Super Nintendo Entertainment System (SNES) Architecture - A Practical Analysis" %}

---
## SNES in-flight Airplane hardware (Nintendo Gateway)
In 1993 Nintendo introduced an in-flight entertainment system called the Gateway, this system allowed passengers to play SNES games for about 4 USD an hour.

The Journalist **Ernie Smith** has written an excellent article on his site which you can access at [Will the In-Flight Entertainment System Survive COVID-19?](https://tedium.co/2020/06/19/in-flight-entertainment-system-covid-19-impact-history/) and also tweeted out the Nintendo Power article which talks about it: 
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Remember when you could play Super NES games on a plane? That was awesome. Nintendo Power, circa Feb. &#39;94: <a href="https://t.co/iKm6mLB8Us">pic.twitter.com/iKm6mLB8Us</a></p>&mdash; Ernie Smith (@ShortFormErnie) <a href="https://twitter.com/ShortFormErnie/status/834989238810775552?ref_src=twsrc%5Etfw">February 24, 2017</a></blockquote>

Also if you prefer video-based content the youtuber **Top Hat Gaming Man** has created an excellent video on the subject:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ItKIhAiNCLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
 ## Satellaview
 The **Satellaview** was a satelite add on for the Super Famicom only ever released in Japan on the 24th April 1995. It allowed users to download games, virtual magazines and listen to radio broadcasts.
 
 The sad thing about the Satellaview is due to the nature of the technology most of the content has been lost to time and has only been partially preserved by finding old recordings on people's Satellaview cartridges. Some content was broadcast but never downloaded, or soon overwritten with newer content so there is no other way to obtain the data.
 
 In 2020 Luigiblood did a presentation to the **AirGap2020** conference about **Satellaview Reverse Engineering** which can be watched below:
 <iframe width="560" height="315" src="https://www.youtube.com/embed/qUAmk8dYmrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
 The **Satellaview** has little Memory Packs with only 1MB (8 MegaBit) of flash storage space that would slot into the BSX Satellaview cartridges, it was a cartridge that had a smaller cartirdge slot on top. Note that there was one other game that supported these Memory Packs, it was a game creator called **RPG Maker**.
 
---
# Games
The SNES wouldn't be as fondly remembered today if it didn't have its huge library of both first-party and third party games. This section will look at some of those games for those of you looking for inspiration for a new reversing project.  

## Remakes for the GBA
As soon as the Game Boy Advance (GBA) was annonced people were describing it as a portable Super Nintendo, Nintendo themselves contribute to this message by re-releasing many of their SNES games for the platform. In total 48 SNES games were released on the GBA, most from Nintendo themselves but third party publishers got on board too.

The GBA is a completely different beast from the SNES in terms of architecture and with most SNES games written in pure 6502 assembly it wasn't possible to just do a straight port. Most of the games needed to be re-written from scratch to support the new portable console.
During this process a lot of changes were made to fit the much smaller non-backlit screen of the GBA, such as increasing the sprite size and brightening the contrast. 

The Youtuber **CaptRobau** has an excellent video showing off the graphical differences between all 48 games that were remade for the GBA:
<iframe width="560" height="315" src="https://www.youtube.com/embed/xurqNOafU6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

---
# SNES Game Development

## How long did it take to develop games for the SNES back in the day?
On average, SNES game development could take anywhere from several months to a couple of years. Some simpler or shorter games might be developed more quickly, while larger, more complex titles could take longer.

Most game development teams only hand a handful of people working full time on the game, mostly programmers. Artists and Sound Engineers were often working on multiple projects at the same time. Music was usually created and added to the game near the end of the development process when the game was getting ready to be shipped.

Some examples of the length of time it took to develop Super Nintendo games are:
* **Spider Man & X-Men in Arcade's revenge** - Took roughly 6-7 months from start to final build using a team of 4 highly experienced game programmers, 2 talented musicians and 6 brilliant artists[^1]:
  - Programmers:	Mike Follin, Kevin Edwards, Stephen Ruddy and Michael Webb
  - Artwork:	Anthony Anderson, Craig Houston, David McLachlan, James Clarke, Jonathan M. Smith and Ste Pickford
  - Music:	Geoff Follin and Tim Follin
* **Super Mario World 2: Yoshi's Island** - Took exactly 3 years and 5 months to complete (February 1st, 1992 until June  29th 1995 [^2]) with a team of 12 programmers.
* **RPM Racing (Interplay)** - In an interview with SuperPlay (October 1992) **Brain Fargo** explains that they only had **4-5 months** to implement the game after finding out out the specs of the Super Nintendo. But he goes on to say that games after that took **1-3 years** on average to get a better level of polish. It was developed with the **Sluggo III** SNES development kit [^4].

## What would you need to write SNES games?
Pretty much every development team had their own ways of working back then, some had official development hardware and others had to make their own or license it from a thrid party development tool company.

You would need thw following on your desk:
* Computer to write the code on (e.g Apple II [^4])
* Either a modified retail SNES or a development Kit
* A CRT Monitor to connect to the SNES
* Cables to connect the modified SNES cart (or devkit) to the computer

On your computer of choice tou would need:
* Text editor
* Assembler (e.g Merlin on the Apple II[^4])
* Linker
* Program to send the ROM data to the console
* Program to flash a ROM image to an EEPROM.

## What programming languages were used to write SNES games?
At least 90 percent for all commerical Super Nintendo games were written in raw 65c816 assembly language, however there have been some hints over the years of ORCA/C support but no confirmation on specific games [^5].

## Were there any IDEs for the SNES?
Integrated Development Environments (IDEs) as we know them today were not as prevalent or sophisticated. However, there were some software tools and environments that provided integrated features for assembly language development back in the early 90s.

**Merlin** was a popular assembly language development environment for the Apple II. It provided an integrated editor, assembler, and debugger, making it a comprehensive tool for writing and debugging assembly code. This was used to write a number of Super Nintendo games for Interplay such as **RPM Racing** and the SNES port of **Out Of This World**[^4].

## How would teams send their games to QA or to the press?
FTP servers were setup for sending builds across the world but for local testing the code would be flashed to an EEPROM chip (Electrically Erasable Programmable Read-Only Memory) and put in a cartridge shell (either an modified retail cartridge or a specialised cartridge.

## How large were SNES game development teams?
According to **Brain Fargo** of Interplay his SNES games had teams of 5 people on average working on a single game.

## How did SNES Game Development teams communicate?
Back in 1992 the internet was still finding its footing in the games industry and much of the communication was done via Fax, here is one example of a Fax sent between the Acclaim production team presumably in the US and the game programmers in the UK.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">31 years ago we were working on SNES Spider-Man and the X-Men in Arcade&#39;s Revenge. We had very little time on for this project and had 3 experienced coders on-board to get it done. Here&#39;s a FAX from production at Acclaim to give you a flavour of the pressure we were under 1/2. <a href="https://t.co/FrJ6XDIGJu">pic.twitter.com/FrJ6XDIGJu</a></p>&mdash; Kevin Edwards ( Retro Videogame development ) (@KevEdwardsRetro) <a href="https://twitter.com/KevEdwardsRetro/status/1715387308600394213?ref_src=twsrc%5Etfw">October 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Although note that in the Fax they mention sending a build of the game to Nintendo via Modem for sound testing so the Internet was in use.

---
# Sound and Music

For anyone interested in how Sound works on the SNES you should watch **SNES Audio System Overview** from **Retro Game Mechanics Explained** on Youtube:
<iframe width="560" height="315" src="https://www.youtube.com/embed/zrn0QavLMyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Game Modification and ROM Hacking

## SNES Save Editing with Link to the Past
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/dRwjBcqHMpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Excellent video by **Displaced Gamers** on how to edit SRAM saves for a Link to the Past on Super Nintendo, this is not actually **ROM Hacking** as the ROM is exactly the same, it is only the SRAM that is modified.

</div>
</section>

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [Kevin Edwards ( Retro Videogame development ) on X: "@BananaBytesBr IIRC about 6-7 months from start to final build." / X](https://twitter.com/KevEdwardsRetro/status/1715423462066360653)
[^2]: [Development:Super Mario World 2: Yoshi's Island - The Cutting Room Floor](https://tcrf.net/Development:Super_Mario_World_2:_Yoshi%27s_Island)
[^3]: Super Play issue 11 October 1993
[^4]: [Sluggo III - Super Famicom Development Wiki](https://wiki.superfamicom.org/sluggo-iii)
[^5]: [65C816 Cross Development Tools](https://groups.google.com/g/comp.sys.apple2/c/HVO_s48q7Kw/m/wcRA5s07jdoJ?pli=1)
