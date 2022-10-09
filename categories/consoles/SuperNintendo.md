---
permalink: /snes/
layout: post
console: 'snes'
title: 'Super Nintendo (Super Famicom) - Reverse engineering & Modding'
consoleimage: /public/consoles/Super Nintendo.png
thumbnail: /public/consoles/Super Nintendo.png
recommend: snes
recommendTitle: All SNES Posts
editlink: ../categories/consoles/SuperNintendo.md
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Super Nintendo/Famicom (SNES)
    url: #
---
# Introduction
Interested in learning more about the the SNES? Excellent! This section will guide you through the basics, starting from basic assembly language all the way to an introduction to reverse engineering your first game!


## State of SNES Emulation
Every three years **Near** created an excellent article on the current status of Super Nintento Emulation, the last version is from 2019, it covers both bsnes and higen.

{% include link-to-other-site.html url="https://near.sh/articles/emulation/state-of-emulation-v" description="The latest status of Super Nintendo emulation, including new and upcoming features for bsnes and higen" image="https://near.sh/images/articles/emulation/state-of-emulation-v/bsnes-widescreen.png" title="SNES Emulation Status 2019"  %}

## The Polygons of Another World
{% include link-to-other-site.html url="http://fabiensanglard.net/another_world_polygons_SNES/index.html" description="The polygons of Another World" image="http://fabiensanglard.net/another_world_polygons_SNES/lester_snes.png" title="The polygons of Another World"  %}

---
# Hardware

## Development Kit Hardware
{% include link-to-other-post.html post="/super-famicom-snes-development-kit/" description="For more information about the **Super Nintendo** development hardware check out this post" %}

## Retail Console Hardware
For an in-depth look at the SNES Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/snes/" description="Copetti.org has an excellent tear down of the SNES Hardware and how it works" image="/public/consoles/Nintendo Entertainment System.png" title="Super Nintendo Entertainment System (SNES) Architecture - A Practical Analysis" %}

## SNES in-flight Airplane hardware (Nintendo Gateway)
In 1993 Nintendo introduced an in-flight entertainment system called the Gateway, this system allowed passengers to play SNES games for about 4 USD an hour.

The Journalist **Ernie Smith** has written an excellent article on his site which you can access at [Will the In-Flight Entertainment System Survive COVID-19?](https://tedium.co/2020/06/19/in-flight-entertainment-system-covid-19-impact-history/) and also tweeted out the Nintendo Power article which talks about it: 
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Remember when you could play Super NES games on a plane? That was awesome. Nintendo Power, circa Feb. &#39;94: <a href="https://t.co/iKm6mLB8Us">pic.twitter.com/iKm6mLB8Us</a></p>&mdash; Ernie Smith (@ShortFormErnie) <a href="https://twitter.com/ShortFormErnie/status/834989238810775552?ref_src=twsrc%5Etfw">February 24, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Also if you prefer video-based content the youtuber **Top Hat Gaming Man** has created an excellent video on the subject:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ItKIhAiNCLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
