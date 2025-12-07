---
permalink: /ps2
layout: post
title: Sony Playstation 2
recommend: ps2
recommendTitle: All PS2 Posts
editlink: ../categories/consoles/PS2.md
console: 'ps2'
consoleimage: /public/consoles/Sony PlayStation 2.png
thumbnail: /public/consoles/Sony PlayStation 2.png
excerpt: Awesome list of Sony Playstation 2 Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sony Playstation 2
    url: #
tags:
  - ps2
---

# Introduction
Welcome to our page dedicated to PS2 reverse engineering! The PlayStation 2 was a gaming console released by Sony in 2000, and has since become a beloved classic of the gaming world. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PS2 reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your DualShock controller, and get ready to dive into the exciting world of PS2 reverse engineering!

---
# Hardware
Similar to the original PlayStation the PS2 used a MIPS processor but this time it was 64 bit and codenamed the **Emotion Engine**, along with 2 custom vector processors. Although the PS2 has a much more modern GPU design compared to the PS1, the actual transformation of the vertices were still being process by the CPU core rather than the GPU [^1].

The main parts of the PS2 hardware were:
* Emotion Engine (64 bit MIPS processor + 2 vector processors)
* Graphics Synthesiser (GS) - 4MB with features such as Z-buffer, trilinear texturing and Gourard shading [^1]
* 48-Channel sound chip (SPU2)

## Retail Hardware
For an in-depth look at the PlayStation 2 Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/playstation-2/" description="Copetti.org has an excellent tear down of the PlayStation 2 Hardware and how it works" image="https://www.copetti.org/images/consoles/ps2/_hue8a2466eba16e1ae3cd9542d2db31c8a_66348_dcb7ac7ba1db910c9628de3127aa9544.webp" title="PlayStation 2 Architecture - A Practical Analysis"  %}


## Development Hardware
The hardware used to develop PlayStation 2 games was similar but had an increase in memory along with a few debugging features. The details are covered in a separate post:
{% include link-to-other-post.html post="/playstation-2-development-hardware" description="For information about Sony's PlayStation Two development hardware check out this post." %}

Later in the PS2's lifetime SN Systems released a specific development kit for developing online multiplayer PS2 games compatible with the PS2 Modem called the Network Development Kit (NDK).

{% include link-to-other-post.html post="/sn-systems-network-development-kit-for-ps2/" description="For information about Network Development Kit development hardware check out this post." %}

## Third Party Hardware

### PlayStation 2 Olympus Eye-Trek FMD-20 
Olympus managed to get an official license for "VR goggles" specifically for the PS2 which were supposed to simulate a 52 inch tv floating in front of your eyes. Sounds like a great idea for a cheaper large screen tv without taking all the space, however prolonged use did cause headaches due to only having 180k pixels per eye, much lower than modern VR headsets.

Review from PSi2 magazine issue 18:
![Playstation 2 Olympus Eye-Trek FMD-20 ](https://github.com/RetroReversing/retroReversing/assets/40120498/0636ee9f-3b49-4e33-9648-533bb66e1c27)


---
# Games
What would the Sony Playstation 2 be without its excellent line-up of games? It was huge line up of third party games that attracted many people away from the Nintendo Gamecube and Microsoft Xbox.

## Playstation 2 Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the Debug symbols in the retail release of the game. This was surprisingly common in early PS2 games as the SDK didn't remove them when building the final executables. 
These gives you access to all the original function and variables names that were used in the retail source code so are very valuable for reversers!

{% include link-to-other-post.html post="/ps2-unstripped/" description="For a full list of PS2 games that have debug symbols check out this post." %}

## Playstation 2 Demos with Debug Symbols
{% include link-to-other-post.html post="/ps2-demos/" description="For a full list of PS2 games that have debug symbols check out this post." %}

## Playstation 2 Exclusives
The most valuable reverse engineering projects tend to be the **platform exclusives** that have never been re-released as these are the games that can benefit the most from enhancements on modern hardware.

Wikipedia maintains a list of games exclusive to the Playstation 2 - [PlayStation 2-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:PlayStation_2-only_games)

---
# Software Development Kits

## Official Software development kit
The Official Software development kit was developed by a partnership between SN Systems who are known for excellent 3rd party development kits and the Game Studio Psygnosis who are known for excellent quality games.

{% include link-to-other-post.html post="/ps2-official-sdk/" description="For information about Sony's Playstation Two SDK check out this post." %}

### Emotion Engine Static Libraries
The Playstation 2 Software Development kit included various statically compiled libraries that could be optionally included in your games, these ranged from vital (gcc runtime) to optional such as Multi-tap support.

{% include link-to-other-post.html post="/static-libraries-ps2" description="For a list of all the static libraries inside the PS2 SDK check out this post." %}

### Emotion Engine Relocatable Executable (.ERX) Files
This was a newer format introduced by Sony which can be used to provide patches for online PS2 games according to a GDC advert from Metrowerks Codewarrior [^4].

### IOP Relocatable Executable Executable (.IRX) Files
{% include link-to-other-post.html post="/irx-ps2" description="For a list of all the dynamic libraries inside the PS2 SDK and from third parties check out this post." %}

---
## Consumer Development Kits

### Playstation 2 Linux
Similar to how the PS1 had Net Yaroze for consumers to develop small games for the Playstation, the PS2 had special software that ran a build of **Linux**. The software ran on consumer PS2 models and came with a PS2 hard-drive.

---
## Homebrew PS2 Software Development Kits

### Athena - Javascript on the PS2
Athena is an environment that acts as a native PS2 program (written in C) which embeds a modified version of the QuickJS engine to interpret and run JavaScript code on the console.

**JSLegendDev** has a good video covering the basic of the engine, showing how to show a 2D Sonic sprite, move it around with the controller and text rendering:
<iframe width="560" height="315" src="https://www.youtube.com/embed/QN8JmOpc9cE?si=vHUEM1QxeQnkH0LH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Creative Software used to create PS2 Games

### 3D Studio Max
3D Studio Max and Character Studio was used by **Runecraft software** to develop games such as Premier manager on the PS2[^3].

We have a separate post on 3D Studio Max which you can find below: {% include link-to-other-post.html post="/3d-studio-max" description="For more information on 3D Studio Max check out this post." %}

### Photoshop - industry standard for PS2 Texturing
Photoshop was used by Runecraft software to develop games such as Premier manager on the PS2.
In issue 20 of PSi2 magazine there is an interview with **Mark Edwards** from Runecraft where he talks about using **Photoshop** for Premier manager on the PS2 along with a low-resolution screenshot you can see below [^3]:

![Photoshop being used to create a PS2 game - PSi2 issue 20](https://github.com/RetroReversing/retroReversing/assets/40120498/eba8399a-56e7-4abd-90fe-5b9cf4d0eab9)


---
# Game Engines for the PS2
Before **Unity** and the modern **Unreal Engine** dominated the scene it was common for developers to create their own **in-house** game engine, or license a third party engine such as Renderware.

## Brainstorm by BeyondGames (in-house)
In issue 20 of PSi2 an interview with **Clark Stacey** revealed that they have an in-house game engine called **Brainstorm** which was used for racing games such as **Motor Mayhem** and **Hot Wheels** [^3]. 
It also mentioned that it in theory has support for other genres of games such as platformers and that it has built in networking support.

---
## Merkury engine by Krome Studios (in-house)
Krome Studios used the **Merkury Engine** for many of its own titles, particularly on the PS2 and other last-generation systems:
* **Ty the Tasmanian Tiger** (2002) - The first in the franchise and a flagship Merkury title.
* **Sunny Garcia Surfing** (2001) - Credited engine programmers in the manual.
* **The Adventures of Jimmy Neutron: Jet Fusion** (2003) - Confirmed via file analysis.
* **King Arthur** (2004)
* **Ty the Tasmanian Tiger 2: Bush Rescue** (2004)
* **Ty the Tasmanian Tiger 3: Night of the Quinkan** (2005)
* **The Legend of Spyro: A New Beginning** (2006) - Developed by Krome for the PS2, Xbox, GameCube, and GBA.
* **The Legend of Spyro: The Eternal Night** (2007) - Developed by Krome for the PS2 and Wii.
* **Star Wars: The Force Unleashed** (2008) - The PS2, PSP, and Wii versions were custom-built by Krome using Merkury.
* **Star Wars: The Clone Wars – Republic Heroes** (2009) - Included a PS2 version.
* **Transformers: Revenge of the Fallen** (2009) - The PS2 and Wii versions were developed by Krome Studios.

If you are interested in learning more we have a specific post about the Merkury engine:
{% include link-to-other-post.html post="/krome-merkury-engine" %}


---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [20 Years of PlayStation®. Console development past and future - Unite Europe 2015 - YouTube](https://www.youtube.com/watch?v=fwCVTqSmioI)
[^2]: Psi2 issue 18
[^3]: Psi2 issue 20
[^4]: [GDC 2004 Evolve](https://ia803200.us.archive.org/11/items/evolveeventprogr2004unse/evolveeventprogr2004unse.pdf)
