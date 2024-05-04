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
---

# Introduction
Welcome to our page dedicated to PS2 reverse engineering! The PlayStation 2 was a gaming console released by Sony in 2000, and has since become a beloved classic of the gaming world. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PS2 reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your DualShock controller, and get ready to dive into the exciting world of PS2 reverse engineering!

# Hardware
Similar to the original Playstation the PS2 used a MIPS processor but this time it was 64 bit and codenamed the **Emotion Engine**, along with 2 custom vector processors. Although the PS2 has a much more modern GPU design compared to the PS1, the actual transformation of the verticies were still being process by the CPU core rather than the GPU [^1].

The main parts of the PS2 hardware were:
* Emotion Engine (64 bit MIPS processor + 2 vector processors)
* Graphics Synthesiser (GS) - 4MB with features such as Z-buffer, trilinear texturing and gourard shading [^1]
* 48-Channel sound chip (SPU2)

## Retail Hardware
For an in-depth look at the Playstation 2 Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/playstation-2/" description="Copetti.org has an excellent tear down of the Playstation 2 Hardware and how it works" image="https://www.copetti.org/images/consoles/ps2/_hue8a2466eba16e1ae3cd9542d2db31c8a_66348_dcb7ac7ba1db910c9628de3127aa9544.webp" title="Playstation 2 Architecture - A Practical Analysis"  %}


## Development Hardware
The hardware used to develop Playstation 2 games was similar but had an increase in memory along with a few debugging features. The details are covered in a seperate post:
{% include link-to-other-post.html post="/playstation-2-development-hardware" description="For information about Sony's Playstation Two development hardware check out this post." %}

Later in the PS2's lifetime SN Systems released a specific development kit for developing online multiplayer PS2 games compatible with the PS2 Modem called the Network Development Kit (NDK).

{% include link-to-other-post.html post="/sn-systems-network-development-kit-for-ps2/" description="For information about Network Development Kit development hardware check out this post." %}

## Third Party Hardware

### Playstation 2 Olympus Eye-Trek FMD-20 
Olympus managed to get an official license for "VR goggles" specifically for the PS2 which were supposed to simulate a 52 inch tv floating in front of your eyes. Sounds like a great idea for a cheaper large screen tv without taking all the space, however prolonged use did cause headaches due to only having 180k pixels per eye, much lower than modern VR headsets.

Review from PSi2 magazine issue 18:
![Playstation 2 Olympus Eye-Trek FMD-20 ](https://github.com/RetroReversing/retroReversing/assets/40120498/0636ee9f-3b49-4e33-9648-533bb66e1c27)


---
# Games
What would the Sony Playstation 2 be without its excellent line-up of games? It was huge line up of third party the games that attracted many people away from the Nintendo Gamecube and Microsoft Xbox.

## Playstation 2 Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the Debug symbols in the retail release of the game. This was surprisingly common in early PS2 games as the SDK didn't remove them when building the final executables. 
These gives you access to all the original function and variables names that were used in the retail source code so are very valuable for reversers!

{% include link-to-other-post.html post="/ps2-unstripped/" description="For a full list of PS2 games that have debug symbols check out this post." %}

## Playstation 2 Demos with Debug Symbols
{% include link-to-other-post.html post="/ps2-demos/" description="For a full list of PS2 games that have debug symbols check out this post." %}

---
# Software Development Kits

## Official Software development kit
The Official Software development kit was developed by a partnership between SN Systems who are known for excellent 3rd party development kits and the Game Studio Psygnosis who are known for excellent quality games.

{% include link-to-other-post.html post="/ps2-official-sdk/" description="For information about Sony's Playstation Two SDK check out this post." %}

### Emotion Engine Static Libraries
The Playstation 2 Software Development kit included various statically compiled libraries that could be optionally included in your games, these ranged from vital (gcc runtime) to optional such as Multi-tap support.

{% include link-to-other-post.html post="/static-libraries-ps2" description="For a list of all the static libraries inside the PS2 SDK check out this post" %}

### Dynamic Libraries (IRX files)
{% include link-to-other-post.html post="/irx-ps2" description="For a list of all the dynamic libraries inside the PS2 SDK and from third parties check out this post" %}

## Consumer Development Kit
Similar to how the PS1 had Net Yaroze for consumers to develop small games for the Playstation, the PS2 had special software that ran a build of Linux. The software ran on consumer PS2 models and came with a PS2 hard-drive.

---
## Creative Software used to create PS2 Games

### 3d Studio Max
3D Studio Max and Character Studio was used by Runecraft software to develop games such as Premier manager on the PS2[^3].

We have a separate post on 3D studio Max which you can find below: {% include link-to-other-post.html post="/3d-studio-max" description="For more information on 3DStudio check out this post." %}

### Photoshop for texturing
3D Studio Max was used by Runecraft software to develop games such as Premier manager on the PS2.
In issue 20 of PSi2 magazine there is an interview with **Mark Edwards** from Runecraft where he talks about using photoshop for Premier manager on the PS2 along with a low-resolution screenshot you can see below [^3]:

![Photoshop being used to create a PS2 game - PSi2 issue 20](https://github.com/RetroReversing/retroReversing/assets/40120498/eba8399a-56e7-4abd-90fe-5b9cf4d0eab9)


---
# Game Engines for the PS2
Before Unity and Unreal dominated the scene it was common for developers to create their own in house game engine, or license a third party engine such as Renderware.

## Brainstorm by BeyondGames (in-house)
In issue 20 of PSi2 an interview with Clark Stacey revealed that they have an in-house game engine called "Brainstorm" which was used for racing games such as Motor Mayhem and Hot Wheels [^3]. It also mentioned that it in theory has support for other genres of games such as platformers and that it has built in networking support.

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
