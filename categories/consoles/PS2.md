---
permalink: /ps2
layout: post
title: Sony Playstation 2
recommendTitle: All PS2 Posts
editlink: ../categories/consoles/PS2.md
category: 'ps2'
excerpt: Awesome list of Sony Playstation 2 Game Development and Reverse Engineering information
redirect_from:
 - /playStation-2-architecture
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Sony Playstation 2
    url: #
tags:
  - ps2
recommend: 
 - ps2
 - ps1
 - introduction
updatedAt: '2026-10-24'
---

# Introduction
Welcome to our page dedicated to PS2 reverse engineering! The PlayStation 2 was a gaming console released by Sony in 2000, and has since become a beloved classic of the gaming world. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PS2 reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your DualShock controller, and get ready to dive into the exciting world of PS2 reverse engineering!

---
# Game Software Development for the Sony Playstation 2

## How long did it take to develop PS2 games back in the day?
In *Postmortems from Game Developer*, one LucasArts PlayStation 2 production released in February 2001 is described as taking 30 months to complete [^5].
At the height of production, the team had approximately 40 full-time developers [^5].

The postmortem also provides a useful snapshot of a relatively large early-PS2 production:
* **Schedule** - 30 months of development
* **Team size** - Approximately 40 full-time developers at peak production
* **Project scale** - 301,000 lines of code, including internal tools
* **Development hardware** - 700MHz Pentium III PCs with 256MB of RAM, GeForce 256 graphics cards, and dedicated PS2 tools
* **Software stack** - Windows 2000, Microsoft Visual C++, Metrowerks for PS2, 3D Studio Max, Softimage, Photoshop, Bryce, Visual SourceSafe, Perl, AfterEffects, and Premiere
* **Specialized technology** - The Eve level design tool, Miles Sound System, ObjectSpace STL, Macromedia/Secret Level Flash, and Planet Blue's Tulip for prerendered cut-scene lip-syncing

---
# Hardware
Similar to the original PlayStation the PS2 used a MIPS processor but this time it was 64 bit and codenamed the **Emotion Engine**, along with 2 custom vector processors. Although the PS2 has a much more modern GPU design compared to the PS1, the actual transformation of the vertices were still being process by the CPU core rather than the GPU [^1].

The main components of the PS2 hardware were:
* **Emotion Engine (EE)** - (64 bit MIPS processor + 2 vector processors)
* **Graphics Synthesiser (GS)** - 4MB with features such as Z-buffer, trilinear texturing and Gourard shading [^1]
* **Sound Processor (SPU2)** - 48-Channel sound chip
* **Image processing Unit (IPU)** - Decodes MPEG2 streams

---
## Console security
[Modern Vintage Gamer](https://www.youtube.com/watch?v=VGMR6FHey68) explains how PlayStation 2 security was defeated. It is a platform-specific introduction to the protection mechanisms that homebrew and research tools had to work around.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VGMR6FHey68" title="How the Sony Playstation 2 Security Was Defeated | MVG" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Retail Hardware
For an in-depth look at the PlayStation 2 Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/playstation-2/" description="Copetti.org has an excellent tear down of the PlayStation 2 Hardware and how it works" image="https://www.copetti.org/images/consoles/ps2/_hue8a2466eba16e1ae3cd9542d2db31c8a_66348_dcb7ac7ba1db910c9628de3127aa9544.webp" title="PlayStation 2 Architecture - A Practical Analysis"  %}

### What were the specs of the PS2?
Display Specs:
 * Supports 480p progressive
 * MPEG-2 Full Motion Video (FMV)
 
Sound Specs:
* Dolby pro logic 2 (5.1 Surround sound)
* DTS
* Streaming Audio

Max Game Specs Per frame:
 * 120,000 and 6,000 tris
 * 3Mb of Textures 
 * Frame rate of 30 or 60fps


### Emotion Engine
The Emotion Engine was used for Game Logic and had the following:
* 32MB RAM
* MIPS 59k CPU

### Graphic Synthesiser (GS)
Used for rendering and vertex transformation:
* 4MB RAM
* 2.4 GPixel/sec
* Support for Mip-mapping and alpha blending
* Texture formats: 32/24/16/8/4

### I/O Processor (IOP)
Used for Interaction with peripherals (Memory cards, usb devices, Networking, Audio, DVD etc)
* 2MB RAM (8MB on a devkit)
* Playstation 1 on a chip (used for playing PS1 games)
* 36.9 Mhz

### Serial Interface (SIF)
The Serial Interface (SIF) is used to Interface between the Emotion Engine (EE) and the I/O processor (IOP)
* **SIFDMA** - transfer memory to other processor
* **CIFCMD** - run a command on the other processor such as setting flags
* **SIFRPC** - run remote operations on the other processor, includes a return value

#### Example of SIF in action
An example of using the SIF to communicate between both processors is the controller pad libraries. We want to communicate between libpad.a which runs on the Emotion Engine and padman.irx which runs on the I/O Processor.
So during the VBlank period the IOP Padman.irx uses SIFDMA to send controller information (such as which buttons are pressed) to the Emotion Engine.
The Emotion Engine can then request this information by calling the API scePadRead

---
## Development Hardware
The hardware used to develop PlayStation 2 games was similar but had an increase in memory along with a few debugging features. The details are covered in a separate post:
{% include_cached link-to-other-post.html post="/playstation-2-development-hardware" description="For information about Sony's PlayStation Two development hardware check out this post." %}

Later in the PS2's lifetime SN Systems released a specific development kit for developing online multiplayer PS2 games compatible with the PS2 Modem called the Network Development Kit (NDK).

{% include_cached link-to-other-post.html post="/sn-systems-network-development-kit-for-ps2" description="For information about Network Development Kit development hardware check out this post." %}

---
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

{% include_cached link-to-other-post.html post="/ps2-unstripped" description="For a full list of PS2 games that have debug symbols check out this post." %}

## Playstation 2 Demos with Debug Symbols
{% include_cached link-to-other-post.html post="/ps2-demos" description="For a full list of PS2 games that have debug symbols check out this post." %}

## Playstation 2 Exclusives
The most valuable reverse engineering projects tend to be the **platform exclusives** that have never been re-released as these are the games that can benefit the most from enhancements on modern hardware.

Wikipedia maintains a list of games exclusive to the Playstation 2 - [PlayStation 2-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:PlayStation_2-only_games)

---
## Static Recompilation Projects
Static recompilation translates game code ahead of time for a different host processor. It does not by itself establish a completed matching decompilation or remove the need to reproduce console hardware behavior.

### God Hand
LasVola's [God Hand Recompiled](https://github.com/LasVola/godhand-recomp) uses PS2Recomp to translate the main executable to C++, with function names and boundaries from LucasPicoli's `god-hand-decomp` project.
Its README reports side-by-side testing with a real PS2 through stage 2 and part of stage 3. Later stages, final bosses and the ending remain untested in the documented progress report.
The project requires the user's own USA disc image and includes no game data [^7].

---
### Gran Turismo 4
The [moesuito GT4Recomp fork](https://github.com/moesuito/gt4-staticrecomp), forked from [Kaezzey's project](https://github.com/Kaezzey/gt4-staticrecomp), documents ahead-of-time translation of Emotion Engine code and VU0/VU1 microprograms to native code.
Graphics use the PCSX2 GSdx renderer in a separate process, while other PS2 hardware behavior is reproduced in software. This is a hybrid recompilation, not a claim of zero emulation [^8].

The maintainers report full-speed 60 FPS in their tested scenes, but long sessions, some graphics features and broader GPU coverage remain incompletely tested.
Setup requires the user's own Gran Turismo 4 USA v2.00 disc image (SCUS-97328); the repository does not provide game files [^8].

---
# Software Development Kits

## Official Software development kit
The Official Software development kit was developed by a partnership between SN Systems who are known for excellent 3rd party development kits and the Game Studio Psygnosis who are known for excellent quality games.

{% include_cached link-to-other-post.html post="/ps2-official-sdk" description="For information about Sony's Playstation Two SDK check out this post." %}

### Emotion Engine Static Libraries
The Playstation 2 Software Development kit included various statically compiled libraries that could be optionally included in your games, these ranged from vital (gcc runtime) to optional such as Multi-tap support.

{% include_cached link-to-other-post.html post="/static-libraries-ps2" description="For a list of all the static libraries inside the PS2 SDK check out this post." %}

### Emotion Engine Relocatable Executable (.ERX) Files
This was a newer format introduced by Sony which can be used to provide patches for online PS2 games according to a GDC advert from Metrowerks Codewarrior [^4].

### IOP Relocatable Executable Executable (.IRX) Files
{% include_cached link-to-other-post.html post="/irx-ps2" description="For a list of all the dynamic libraries inside the PS2 SDK and from third parties check out this post." %}

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

We have a separate post on 3D Studio Max which you can find below: {% include_cached link-to-other-post.html post="/3d-studio-max" description="For more information on 3D Studio Max check out this post." %}

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
{% include_cached link-to-other-post.html post="/krome-merkury-engine" %}


---
# Static Recompilation for the Browser
[PS2 Web Recomp](https://github.com/snuri00/ps2-web-recomp) translates a game's Emotion Engine executable into C++ ahead of time, then compiles it to WebAssembly. Its browser runtime handles the remaining PS2 operating system and hardware services, including graphics through WebGPU. The project documents *Gran Turismo 4* and *God of War II* as working examples, with users supplying their own disc images.

The repository's [How it works section](https://github.com/snuri00/ps2-web-recomp#how-it-works) explains how the recompiler handles R5900 instructions and how the runtime handles the I/O processor and vector units. This is a toolkit and runtime for game-specific browser builds rather than a matching decompilation of either example game.

---
# Executable Overlays and Loadable Segments
A disc file containing code may be a separate executable or a raw overlay rather than part of the boot program.
The [decomp.wtf PS2 importer](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/rom/overlays.py) reads executable ELF program headers to obtain the file offsets and virtual addresses of executable loadable segments [^6].

Prefer those declared mappings over a guessed base, then verify how the game loads them.
The importer excludes relocatable I/O processor modules from this path; these need the [IRX module workflow](/irx-ps2) rather than being treated as an Emotion Engine executable.
For headerless code, the [raw-overlay example](/ps1-file-formats#recovering-raw-overlay-load-addresses) explains how call targets can suggest a base and why loader verification is still needed.

---
# All Posts
<div>

{% include console.html %}
</div>

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="PlayStation 2" %}

---
# References
[^1]: [20 Years of PlayStation®. Console development past and future - Unite Europe 2015 - YouTube](https://www.youtube.com/watch?v=fwCVTqSmioI)
[^2]: Psi2 issue 18
[^3]: Psi2 issue 20
[^4]: [GDC 2004 Evolve](https://ia803200.us.archive.org/11/items/evolveeventprogr2004unse/evolveeventprogr2004unse.pdf)
[^5]: Postmortems from Game Developer (Austin Grossman, 2003) Page 299
[^6]: [decomp.wtf - ELF overlay handling and IOP exclusions](https://github.com/i12bp8/decomp.wtf/blob/main/src/decompnet/rom/overlays.py).
[^7]: [LasVola, God Hand Recompiled README](https://github.com/LasVola/godhand-recomp), progress, implementation and credits, consulted 24 October 2026.
[^8]: [moesuito, GT4Recomp README](https://github.com/moesuito/gt4-staticrecomp), implementation, performance, known issues and requirements, consulted 24 October 2026.
