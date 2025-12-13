---
layout: post
permalink: /Amiga
title: Amiga Reverse Engineering
breadcrumbs:
  - name: Home
    url: /
  - name: Amiga
    url:
editlink: ../categories/consoles/Amiga.md
console: amiga
_image: /public/images/thumbnails/categories/consoles/Amiga-Reverse-Engineering.jpg
_twitterimage: https://www.retroreversing.com/public/images/thumbnails/categories/consoles/Amiga-Reverse-Engineering.jpg
tags:
  - amiga
recommend:
  - amiga
  - introduction
_updatedAt: 2025-12-08
redirect_from:
  - /Amiga/
---

Welcome to our in-depth guide to Amiga reverse engineering! This page serves two roles. It groups all of our posts related to Amiga reverse engineering, and it aggregates high quality sources from the web into create a unified reference.

The content starts high level, outlining the system, its history, and its official game development process, then moves into low level details with a focus on reverse engineering and homebrew development.


# Introduction to the Amiga
[Nostalgia Nerd](https://www.youtube.com/watch?v=ws3DJF7MbMU) has an excellent two part series about the development and technical architecture of the Amiga computer. It covers the creation of the custom chipset (Agnes, Denise, Paula), the engineering challenges faced by Jay Miner's team, and the hardware evolution from the Amiga 1000 to the 500:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ws3DJF7MbMU?si=NDn0Qt0VgjUMKEwb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Amiga Engineers Panel: Amiga 40th Anniversary at VCF 2025
The **[BIOSJERBIL](https://www.youtube.com/watch?v=9CixT0idLwQ&t=3898s)** YouTube channel documents a gathering of original Amiga engineers, including Dale Luck, at the Amiga 40th anniversary celebration held during the Vintage Computer Festival 2025. 

The engineers on the panel, listed in the order they were introduced or spoke:
 * **Dale Luck** - Amiga Software Engineer
   * Dale wrote a "Blitter emulator" in software to visualize and verify the hardware functions before the actual chips were available. He also added the physics and "bounce" to the famous Boing Ball demo (improving on Sam Dicker's spinning ball).
 * **Don Reisinger** - Director of Marketing (Sales & Marketing)
   * Don joined Amiga from **Tonka Toys** (where he worked with Dave Morse). He was responsible for selling the Amiga concept to dealers and investors ("selling water in the desert") and organizing the initial trade show exhibits, such as the 1984 CES booth.
 * **Ron Nicholson** - Director of Hardware Development
   * Ron worked on the system architecture and wire-wrapped the original prototype motherboards (building 2 or 3 of them). He mentioned being influenced by Apple's Bill Atkinson to implement a hardware "blitter" for graphics performance.
 * **Glenn Keller** - Hardware Engineer
   * Glenn was responsible for the Porsche chip (which became Paula), handling the audio, disk controller, and UART. He shared a famous story about fixing a fatal flaw in the disk controller chip by physically cutting a microscopic wire on the silicon die with an X-Acto knife and a microscope.
 * **Sam Dicker** - Software Engineer
   * A former Williams Electronics employee (**Defender**, **Sinistar**), he worked on entertainment software and sound drivers. He created the original spinning ball demo (using color cycling to simulate rotation) and the sound effects for the Boing Ball demo (recorded by hitting a garage door with a foam bat).
 * **Mike Slifcak** - Manager of Software QA
   * Mike was responsible for testing hardware and software, including "torture testing" floppy drives (e.g., inserting disks upside down). He also wrote early graphics algorithms (like Bresenham line drawing) in C before the hardware blitter was ready.
 * **R.J. Mical** - Software Engineer (Intuition/User Interface)
   * In the video, he focuses on the "folklore" of the Amiga team, recounting stories like the "mystery wire" on a wire-wrap board that seemed essential for the system to work despite not being connected to anything, and the team's intense work ethic (sleeping in the office) leading up to CES.


<iframe width="560" height="315" src="https://www.youtube.com/embed/9CixT0idLwQ?start=3898" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## How many games were released for Amiga?
According to **MobyGames** There are 3,930 video games for the Amiga [^1] but the number would be much larger if Public Domain/shareware and other more indie titles are included.
[MobyGames - Amiga games list](https://www.mobygames.com/platform/amiga/)

### All Commodore Amiga Games Compilation
[All Games](https://www.youtube.com/watch?v=Ro9S27OJVgo) presents a massive seven-hour video compilation documenting the extensive library of the Commodore Amiga. This visual archive serves as a comprehensive reference for the platform's software history, showcasing the graphical and auditory evolution across thousands of titles. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ro9S27OJVgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### The 150 Essential AMIGA Games
**itsaPIXELthing** has created a video compilation showcasing 150 essential titles for the Commodore Amiga. It covers a vast array of genres and gameplay styles, serving as a comprehensive visual reference for the platform's graphical capabilities and software history.
<iframe width="560" height="315" src="https://www.youtube.com/embed/xBZvKqOqZ1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What does it mean to reverse engineer a game?
Reverse engineering is a process that can help uncover the inner workings of these games and reveal how they were programmed, designed, and even uncover hidden easter eggs.

For more information on the basics and benefits of reverse engineering games in general check out our introductory guide:
{% include link-to-other-post.html post="/tutorials/introduction" %}

---
## Amiga Magazines

### The Rise and Fall of Amiga Format (1989-2000)
The video from [The Retro Collective](http://www.youtube.com/watch?v=c6wYDiPXVss) documents the history of the influential UK magazine *Amiga Format* from its start in 1989 to its closure in 2000. It highlights how the magazine guided the Amiga community, transitioning users from gaming into deeper technical subjects. The content covered important retro-computing topics such as hardware upgrades (e.g., A590 hard disk), programming tutorials using AMOS and Blitz Basic, and creative applications like the OctaMED music tracker and 3D rendering with Vista. The video chronicles the platform's peak popularity and the community's attempts to keep the Amiga ecosystem alive after Commodore's bankruptcy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c6wYDiPXVss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Preserving Amiga History: A New Software Archive
[Amiga Love](https://www.youtube.com/watch?v=PZJ9PxYlvTg) has a video about their new project to preserve and archive rare Amiga software, specifically focusing on disk magazines, user group discs, and obscure shareware. The video covers the technical challenges of digitizing these aging floppy disks and demonstrates a workflow using ChatGPT to OCR text and metadata, creating a searchable, browser-based library where users can explore file contents without needing to download ADF images.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PZJ9PxYlvTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---
# Hardware
In this section, we'll explore the hardware that powers the Amiga. Understanding the hardware that drives the system is key to unlocking its potential and gaining a deeper appreciation for the games that were developed for it.

## The Amiga Development System
Before the Amiga 1000 was commercially released, Commodore provided special Amiga Development Systems (often in tower or rack-style enclosures) to game and software houses. These units typically used early revisions of the custom chips and were meant specifically for developers to start writing and testing Amiga software ahead of launch [^2].

### Developmer Edition Amiga 1000
Amiga Love showcases an ultra-rare "Developer Edition" Amiga 1000, one of less than 700 units sent to companies like Hewlett-Packard in 1985 before the computer's retail launch. 
This specific unit features a glossy plastic case, a "Commodore" logo instead of the Amiga checkmark, and early custom chips (Daphne/Portia) on a motherboard layout that bridges the gap between the known "Velvet" prototype and the final retail version. 

The video details the physical and technical differences, such as the reversed power switch and lack of signatures inside the case, and demonstrates the machine booting up with a user-installed QuickStart ROM upgrade.
<iframe width="560" height="315" src="https://www.youtube.com/embed/lfUVgHsPoNU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## What was the standard hardware was used to develop Amiga games?
For most of the commercial life of the platform, a normal Amiga (commonly an A2000 or later A3000/A4000) plus the official Amiga Developer Kit (software, documentation, and example code) functioned as the primary dev kit. 

Developers often added hardware like hard drives, memory expansions, and sometimes accelerator cards to create a more capable development machine.

### Team17's WORMS developer Amiga 4000
[Retro Recipes](https://www.youtube.com/watch?v=rcyHqJ6ZHXs) has an incredible video about discovering and exploring the original development Amiga 4000 used to create the classic game *Worms*. The video documents the process of recovering data from the aging hard drives, revealing original Lightwave 3D animation files, FMV assets, and even unreleased artwork, guided by the original developer, Chris Blythe.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcyHqJ6ZHXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## What consoles used the Amiga for game development? 
Some console dev kits actually used Amigas as the host hardware, such as the Atari Lynx (originally Epyx Handy) development setup that ran on an Amiga 2000 with attached debugging hardware [^3]. Many Sega Mega Drive games were also developed as ports of Amiga games due to the similar CPU.

---
## Retail Amiga Hardware

## The Ultimate Amiga 500 Talk - Amiga Hardware Design And Programming
[8-Bit Relics](https://www.youtube.com/watch?v=3Ho12VYv-iw) presents a technical deep dive into the architecture of the Amiga 500, delivered by speaker Raara. The talk details the interplay between the Motorola 68000 CPU and the custom chips (Paula, Agnus, Denise), explaining the roles of the Copper and Blitter co-processors, DMA channels, and the unique memory map that defined the system's capabilities.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3Ho12VYv-iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Core custom chips in the retail Amiga
On the classic Amiga machines (like the Amiga 1000, 500, and 2000), the core custom chips were named Agnus, Denise, and Paula, alongside the Motorola 68000 CPU.

### Agnus (Address GeNerator Unit) Custom Chip
Agnus was the master DMA controller that arbitrates access to chip RAM and contains the blitter (block image transfer engine) and Copper (video-synced coprocessor)

The Big Book of Amiga Hardware has an excellent write up about Agnus, it covers the chip's role in managing DMA channels and Chip RAM addressing, as well as its integration of the Blitter and Copper co-processors.

{% include link-to-other-site.html url="https://bigbookofamigahardware.com/bboah/product.aspx?id=1478" description="The Big Book of Amiga Hardware provides technical specifications, pin-out details, and revision history for the Commodore Agnus chip, highlighting its functions in video generation and memory management." image="https://bigbookofamigahardware.com/bboah/media/images/agnus8372a_s.jpg" title="Agnus - Commodore" %}

### Bit Blit Algorithm (Agnes)
[Computerphile](https://www.youtube.com/watch?v=-6g1tD66QBA) has an explainer video about the Bit Blit (Bit Block Transfer) algorithm, famously implemented in the Amiga's Agnes chip. 
It covers the history of the algorithm from Xerox PARC, the technical details of manipulating bitmaps in memory using boolean logic (AND, OR, NOT), and why hardware implementations provided significant performance gains over software by handling bit-shifting and memory masking efficiently.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-6g1tD66QBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
### Denise Video Chip
Denise was the primary video chip handling bitplane graphics, sprites, playfields, and display modes.

The Big Book of Amiga Hardware provides a detailed technical profile of the Denise custom chip (MOS 8362/8373). It outlines the chip's critical role in Amiga graphics, including sprite management, bitplane operations, and color palette handling (supporting HAM-6 and Extra Half-Brite modes), while listing specific part numbers and revisions for compatibility with OCS and ECS systems.

{% include link-to-other-site.html url="https://bigbookofamigahardware.com/bboah/product.aspx?id=1487" description="The Big Book of Amiga Hardware offers technical specifications, revision history, and compatibility details for the Denise chip, the component responsible for the Amiga's advanced video output and sprite capabilities." image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/MOS_8362R8_Denise_2050_2290.jpg/800px-MOS_8362R8_Denise_2050_2290.jpg" title="Denise - Commodore" %}

---
### Paula (MOS 8364) - The Amiga Sound Chip
The Paula custom chip (MOS 8364) is a core component of the Amiga's Original Chip Set (OCS), known for handling multiple crucial peripheral functions. Its primary role is providing the Amiga's native audio, featuring 4-channel 8-bit sound in conjunction with Agnus DMA. 

Additionally, Paula functions as the floppy drive controller, manages the UART for the serial port, and provides the interface for mouse and joystick inputs. Different revisions (R4 and R7) were used across various Amiga models, including the A1000, A500+, A2000, A3000, A600, and A4000.

{% include link-to-other-site.html url="https://bigbookofamigahardware.com/bboah/product.aspx?id=1490" description="The Big Book of Amiga Hardware details the Paula chip, the Amiga's multi-function I/O and audio controller, including its various part numbers and the Amiga models it was used in." image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Custom_Chip_Paula_8364_R4_used_in_Amiga_1000.jpg/800px-Custom_Chip_Paula_8364_R4_used_in_Amiga_1000.jpg" title="Paula - Commodore" %}

#### Interview with Glenn Keller: Designer of the Amiga Paula Chip
[The Guru Meditation](https://www.youtube.com/watch?v=fuXH2csMR8Y) has an interview with **Glenn Keller**, the engineer responsible for the Amiga's custom Paula chip. The discussion covers the manual chip design process of the 1980s, the decision to integrate audio, floppy disk control, and UART I/O into a single chip, and Keller's experience working under Jay Miner to create the Amiga's distinct sound architecture.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fuXH2csMR8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Third Party Amiga Hardware

### Amiga 2000 Action Replay Controller
[RobSmithDev](https://www.youtube.com/watch?v=GYsq0pcCVx0) has an excellent video about reverse engineering the pinout for a rare Amiga 2000 Action Replay card to rebuild its missing controller. It covers tracing the PCB to identify the freeze and slow-motion logic, comparing the circuitry to the Amiga 500 model, and designing a custom 3D-printed housing for the replacement unit.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GYsq0pcCVx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Amiga Retro Joypad From 1994 Reverse Engineering
[Happy Little Diodes](https://www.youtube.com/watch?v=yp36ICwD1us) has an excellent video about reverse engineering a vintage 1994 Amiga joypad. It covers disassembling the controller, analyzing the discrete transistor-based turbo fire circuit, simulating the oscillator, and modifying component values to optimize the auto-fire frequency for better gameplay compatibility.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yp36ICwD1us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



---
# Amiga Software Development


## Official Game Software Development for Amiga

### Is there any official source code for Amiga?
If you are interested to see officially released or leaked source code, for Amiga check out our other post:
{% include link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}

### The Story of Another World on the Amiga: Technical Deep Dive
**[Modern Vintage Gamer](http://www.youtube.com/watch?v=0iz9PJbs5rE)**  provides a deep technical analysis of the 1991 cinematic platformer *Another World* on the Commodore Amiga. The video details how creator Eric Chahi achieved its unique 2D polygonal aesthetic by utilizing the Amiga's Blitter co-processor for line drawing and area filling, rather than traditional sprites [00:06:45].

It explores the clever optimization techniques, such as background caching with four frame buffers, which allowed the game to maintain a smooth frame rate despite drawing hundreds of polygons on a 7MHz processor [00:09:31]. The discussion also covers the game's virtual machine architecture that facilitated easy porting [00:11:29].

<iframe width="560" height="315" src="https://www.youtube.com/embed/0iz9PJbs5rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
### The Polygons of Another World: A Retrospective on 90s Graphics Hardware
Fabien Sanglard presents a comprehensive retrospective on the technical implementation of the 1991 game *Another World* (also known as *Out of This World*), focusing on how its vector-based graphics were rendered across various early 90s hardware platforms. The article series introduces the game's core architecture as a simple virtual machine (VM) with only 29 opcodes, 256 variables, 64 threads, and four framebuffers. This approach enabled high portability and resource efficiency. It delves into platform-specific optimization tricks, such as the use of background buffers and special palette manipulations for translucency effects.

{% include link-to-other-site.html url="https://fabiensanglard.net/another_world_polygons/index.html" description="Fabien Sanglard provides an in-depth reverse engineering analysis of the Another World game engine, detailing its bytecode virtual machine, framebuffer manipulation, and platform-specific graphics optimizations across systems like the Amiga, Atari ST, and IBM PC." image="https://fabiensanglard.net/another_world_polygons/AnotherWorldAmiga_files/amiga_03.png" title="The polygons of Another World - Fabien Sanglard" %}


#### Classic Game Postmortem - Another World (GDC 2011)
This video is a GDC 2011 talk delivered by Eric Chahi, the original creator of the groundbreaking 1991 cinematic platformer Another World (known as Out of This World in North America). Chahi provides a deep retrospective on his development process, covering the game's innovative vector-based graphics engine, its virtual machine architecture that allowed for easy porting, and the unique challenges of developing the narrative and animation entirely on his own. This talk serves as a historical and technical account of how he single-handedly created one of the most influential games of the early 90s.
<iframe width="560" height="315" src="https://www.youtube.com/embed/JFaOYYSxSEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Porting From AMIGA to MEGA DRIVE - with Stoo Cambridge
onaretrotip has an excellent interview with Stoo Cambridge about porting Amiga games like *Megalomania* and *Sensible Soccer* to the Sega Mega Drive. It covers the technical similarities (shared 68000 CPU) and differences (bitmap vs. tile-based graphics), as well as specific tricks used to overcome the Mega Drive's color limitations, such as overlaying playfields to simulate 32-color intro screens.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CX8Hvt2Cnqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---
## Modern Game Development for the Amiga

### Zippy Race Amiga Port
[Building Games for Old Retro 1985 Hardware - Zippy Race Amiga Port - YouTube](https://www.youtube.com/watch?v=n5fBdYuIKqg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/n5fBdYuIKqg?si=RJl8htMQ32WydgYh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Amiga Tech
Dutch Retro Guy's "Amiga Tech" playlist offers a deep dive into advanced graphical programming on the Commodore Amiga, focusing on assembly language and custom hardware manipulation. The series details technical implementations of visual effects like free-form sprite layers and dual playfields, explaining how to leverage the Copper and Blitter chips to push the system's limits.

{% include link-to-other-site.html url="https://www.youtube.com/playlist?list=PLGzlnhU22jLBhiJwk5rKmVV64jRgFjSeE" description="Dutch Retro Guy explores high-level Amiga programming techniques, demonstrating how to create complex graphical effects using assembly and the system's custom chipset." image="https://i.ytimg.com/vi/rzFUq1tHPHc/hqdefault.jpg" title="Amiga Tech Playlist" %}


---
# Reverse Engineering Amiga games

## Are there any Amiga Reverse Engineered games or active projects?
Before diving in its best to check if there are any existing reversing projects for the Amiga that you can contribute to, check out our other post specifically on this topic:

{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For the list of decompiled games check out this post." %}

### Menace Amiga Code
[Dave Poo 2](https://www.youtube.com/playlist?list=PLr783JgI3IBd9PZuc9WMmwwxoG2ic-NzB) has an excellent playlist about reverse engineering the Amiga game *Menace*. It covers the detailed analysis of the source code originally published in Amiga Format, walking through the 68000 assembly to understand game logic, fix bugs, and explore the engine's design.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLr783JgI3IBd9PZuc9WMmwwxoG2ic-NzB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## File Formats
When reversing Amiga games you will come across a variety of file formats, this section will try to cover all of the most common formats you will encounter.

---
## Game Modding and ROM Hacking for Amiga games
By modifying the code, graphics, or sound of an Amiga game, you can create new levels, characters, or even entirely new games that build upon the classic gameplay and aesthetics of the original. 

Additionally, modding games can be a great way to learn more about the technical aspects of game development and programming.

### Amiga X-Copy: The Full Story!
RobSmithDev has an excellent video about the history and reverse engineering of the iconic Amiga disk copier, X-Copy. It covers the technical evolution of the software, analyzes the "Cyclone" hardware dongles used to bypass copy protection by treating digital data as analog signals, and includes an interview with a former Cachet employee regarding the company's legacy and modern software preservation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MgBm8UzyxtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [MobyGames - Amiga games list](https://www.mobygames.com/platform/amiga/)
[^2]: [The Amiga Development System - YouTube](https://www.youtube.com/watch?v=lfUVgHsPoNU)
[^3]: [Handy Devkit files - English Amiga Board](https://eab.abime.net/showthread.php?t=104973)