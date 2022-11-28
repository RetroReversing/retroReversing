---
permalink: /ps1/
layout: post
console: 'ps1'
title: 'Sony Playstation 1 (PSX)'
consoleimage: /public/consoles/Sony Playstation.png
thumbnail: /public/consoles/Sony Playstation.png
twitterimage: https://www.retroreversing.com/public/consoles/Sony Playstation.png
recommend: ps1
recommendTitle: All PS1 Posts
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sony Playstation 1
    url: #
carousel:
  - title: PlayStation Architecture
    description: 'This episode with look at the PS1’s hardware and why Final Fantasy 7 was written the way that it was.'
    image: https://img.youtube.com/vi/MPXpH2hxuNc/maxresdefault.jpg
    link: /playStation-architecture
editlink: ../categories/consoles/ps1.md
updatedAt: 11th November 2019                                      
---

# Introduction to Hacking the Sony Playstation One
Interested in learning more about the Sony Playstation? Excellent! This section will guide you through the basics, starting from basic 32-bit MIPS assembly language all the way to an introduction to reverse engineering your first game!

---
# Retail Playstation hardware
The PS1 was competing against both the Nintendo 64 and Sega Saturn during its lifetime and in some respects was the underdog in terms of processing power and graphics. 

However don’t be disillusioned the PS1 was still a very powerful machine for its time and when programmed correctly games could look stunning, sometimes even better than the Nintendo 64!

{% include link-to-other-post.html post="/playStation-architecture" description="For more information on the PS1 hardware architecture check out this post." %}

The main parts of the hardware are:
* 32-bit MIPs CPU (33.96Mhz)
* GPU - Unlike more modern GPUs it Only handled 2D Polygons (360k per second) [^1]
* Geometry Transformation Engine (GTE) - 1.5M Vertices per second [^1]
* 24 Channel sound chip (SPU)

## Geometry Transformation Engine (GTE)
The Geometry Transformation Engine or GTE was what allowed the Playstation to handle 3D graphics, it specifically designed to do the sort of fast mathematical calculations used for Vertex/Geometry processing. Without it the Playstation hardware would not have been able to pull of the excellent 3D graphics it was known for in its time.

{% include link-to-other-post.html post="/ps1-gte" description="To find out more about the the Geometry Transformation Engine check out this post." %}

One interesting limitation of the PS1 GPU is that it didn't have a Z-buffer so polygons needed to be sorted by the PS1 CPU instead, so often the Painters algorithm was used [^1].

---
# Unofficial Hardware Add-ons

## Sony PlayStation VCD Player Add-On Card
The Youtuber **Scarlet Sprites** has a good overview of this rather rare unofficial PS1 add-on which allowed playing the rather obscure Video CD (VCD) format on retail Playstation 1 consoles:
<iframe width="560" height="315" src="https://www.youtube.com/embed/gcdxsV0Qo0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Also note that there was an official PS1 model released in Japan that played Video CDs called the **SCPH-5903 VideoCD** which has additional hardware inside the console.

---
# Games
What would the Sony Playstation be without its excellent line-up of games? It was the games that attracted many people away from the Nintendo 64 and Sega Saturn and on to their very first Sony console.

## Playstation 1 Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the `Debug symbols` in the retail release of the game. While this is not very common it has happened for a few games released for the Playstation One and gives you access to all the original function and variables names that were used in the retail source code.

{% include link-to-other-post.html post="/ps1-debug-symbols" description="For a list of PS1 games that have debug symbols available check out this post." %}

## Crash Bandicoot
Crash bandicoot was one of the first 3d platformers that managed to deliver quality gameplay while looking impressive for its time. 

It was created by Andy Gavin and Jason Rubin for release on the original Playstation console, and both developers have been kind enough to share ample amount of information on how the game was implemented.

{% include link-to-other-post.html post="/crash-bandicoot" description="To find out how Crash Bandicoot was developed check out this post." %}

## Remastered PS1 Games
Some classic PS1 games have been remastered or remade for more modern consoles, if you are looking to reverse engineer one of these games it may help to look at the modern version to find additional information that may be relevant.

Name | Platform | Notes
---|---|---
Ape Escape | PSP | Source Code was ported to the PSP as **Ape Escape: On the Loose**
Crash Bandicoot 1-3 | PS4, Switch, PC, XboxOne | Remade in Alchemy engine but tried to be as faithful as possible to the originals
Crash Team Racing | PS4, Switch, XboxOne | Remade in Alchemy Engine with additional content from Crash Nitro Kart and Crash Tag Team Racing
Castlevania SOTN | Xbox360, PS4, iOS, Android | Re-Released in Castlevania Requiem compilation
Final Fantasy 7-9 | PS4, Switch | 
Legend of Mana | PS4, Switch, iOS, Android | Original engine but with higher resolution assets? (confirmation required)
Medievil | PS4 | Remade in the Unreal Engine
Mega Man X 4 | PS4, Switch, XboxOne | Source Code Port of X4 Released in **Mega Man X Legacy Collection**
Metal Gear Solid | Gamecube | Remade for Gamecube as **Metal Gear Solid: The Twin Snakes**
PaRappa The Rapper | PSP, PS4 | The PS4 version is actually just a the PSP version emulated with higher resolution assets
Resident Evil 1-3 | PS3, PS4, XboxOne | Does this use original engine with higher resolution assets?
SaGa Frontier | PS4, Switch, iOS, Android, Windows | 
Spyro 1-3 | PS4, Switch | Remade in Unreal Engine 4 but aims to be as faithful as possible to the originals
Tony Hawk's Pro Skater 1+2 | PS4/5, Switch, XboxOne | Remade in Unreal Engine 4

Wipeout Omega Collection is one game that did not make the list as its technically not a remaster of the PS1 original.
This list also doesn't include projects such as **PS one Classics** as they were just emulations of the original PS1 games running on a more modern console and not either a source port or a full remake.

## Tool-Assisted-Speedruns (TAS) for PS1
In this video EZScape demonstrates a few speed runs for PS1 games that could never be possible by humans as they require changing the controller input every single frame. He shows techniques such as Zig-zagging in Crash Bandicoot, Pac-Man World and Spyro 3.
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZchqpHU_Hfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you are interested in creating your own Tool-Assisted-Speedruns then you might want to check the latest version of **BizHawk**. If you are interested in improving some existing TAS then check out [PS1 Tool-assisted movies - TASVideos](https://tasvideos.org/Movies-PSX)

---
# Development Kits (Hardware)
Development kits are released to game developers before the launch of the system to allow games to be developed for the system's launch. These systems would evolve over the systems lifespan and contained useful features for debugging and optimizing games for the platform. These systems were not just limited to the official offerings by Sony as a few other publishers had their own versions of development hardware.

## Official Development Kit
The official development kit for the PS1 was a partnership between Sony and SN Systems which allowed developers to use their PC to interact with the real PS1 hardware.

{% include link-to-other-post.html post="/official-playStation-devkit" description="For more information on the official Sony Playstation Devkit check out this post." %}

## Official Consumer Development Kit (Net Yaroze)
The official development kit for the PS1 was only available for licensed game developers but there was a stripped-down version available for the general public known as Net Yaroze.

{% include link-to-other-post.html post="/net-yaroze" description="For more information on the consumer development kit known as Net Yaroze check out this post." %}

---
# Software Development Kits

## Official Software development kit
The Official Software development kit was developed by a partnership between `SN Systems` who are known for excellent 3rd party development kits and the Game Studio Psygnosis who are known for excellent quality games. 

It was called PSY-Q and even although it was owned by Sony it was actually a cross-platform development kit which included support for the Sega Saturn!

{% include link-to-other-post.html post="/official-playstation-1-software-development-kit-(psyq)/" description="For more information on Official SDK for the Playstation 1 check out this post." %}

---
# All Posts
<div>
{% include console.html %}
</div>

---
# References
[^1]: [20 Years of PlayStation®. Console development past and future - Unite Europe 2015 - YouTube](https://www.youtube.com/watch?v=fwCVTqSmioI)
