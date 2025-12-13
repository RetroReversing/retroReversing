---
layout: post
permalink: /tools
thumbnail: /public/images/RetroReversingLogoSmall.png
console: tools
breadcrumbs:
  - name: Home
    url: /
  - name: Retro Game Development Tools
    url: /tools
redirect_from:
  - /tooling
  - /tutorials/tools
  - /software
  - /Diaphora
editlink: ../categories/tools/Tools.md
title: Retro Game Development and Reversing Tools of the Trade
recommend: 
 - tools
 - software
tags:
 - tools
 - software
---


# Explore the Tools of the Trade

Back in the day, game development was both an art and a science, involving a unique set of tools and technologies. On this site, you'll find comprehensive links and guides to the essential tools used during the golden era of video game creation.

# Programming

## Programming Languages
Discover the programming languages that powered the classics. From the assembly languages that squeezed every ounce of performance from early hardware to the C and C++ languages that enabled more complex game designs, we cover the essentials that brought pixels to life. Dive into the specifics of languages such as:

- **Assembly**: The low-level language used for its unparalleled control over hardware.
- **C**: The versatile language that struck a balance between performance and portability.
- **C++**: The language that introduced object-oriented programming to game development.

{% include link-to-other-post.html post="/programming-languages" description="For more information on Programming languages used for game development check out this post." %}

---
## Assemblers & Compilers
Learn about the assemblers and compilers that transformed code into playable games. 

These powerful tools were pivotal in optimizing and translating the developers' visions into the games we remember. 

Understand the role of early compilers and their impact on game performance and development workflows. Key tools include:

- **Assemblers**: Programs like **MASM** and **TASM** that converted assembly code into machine code.
- **Compilers**: Tools like GCC and Watcom C that compiled higher-level code into efficient machine code.

{% include link-to-other-post.html post="/compilers" description="For more information on how GNU GCC was used in game development check out the GCC section in the compiler post." %}

---

## Game Development IDEs
Explore the Integrated Development Environments (IDEs) that were instrumental in retro game development. 

These IDEs provided comprehensive toolsets for coding, debugging, and testing, streamlining the development process for many classic games. Key IDEs from this era include:

- **Microsoft Visual Studio**: A powerful and versatile IDE that supported multiple programming languages, making it a favorite among game developers for its robust debugging tools and integrated development features.
- **Borland C++**: Known for its speed and efficiency, Borland C++ was a popular choice for many game developers due to its advanced compiler technology and comprehensive library support.
- **CodeWarrior**: Initially developed for Macintosh, CodeWarrior later expanded to support multiple platforms, offering a flexible environment for cross-platform development which was essential for many game studios. Had special versions for PS2 and Gamecube support [^2].
- **Turbo C++**: An early IDE by Borland, Turbo C++ was known for its simplicity and speed, providing a streamlined environment for writing and testing code quickly.

These IDEs were pivotal in creating the games that defined a generation, providing the necessary tools and environments to bring imaginative worlds to life.

An advert for attracting game developers to use **Microsoft Visual Studio** from the September 2007 issue of **Develop** magazine:
![Microsoft Visual Studio](https://github.com/user-attachments/assets/290b146d-d4ef-411c-93cb-64cb4b8c8b74)


---
## Software Development Kits
Every platform had its own official Software Development Kit (SDK), so whether you were developing for the PlayStation or the PC you would be interacting with different APIs. In addition there were third parties that created their own multi-platform SDKs which could be used on multiple games consoles or Operating Systems.

We have a post specifically about all the different SDKs for each platform.

{% include link-to-other-post.html post="/sdks" description="For more information on SDK used to create retro games, check out this post." %}


---
# Asset Development

## 3D Modelling
Explore the evolution of 3D modeling tools that gave depth and realism to early 3D games. From primitive polygon editors to the pioneering software that laid the groundwork for today's sophisticated 3D graphics, get insights into the creative processes behind iconic game visuals. Essential tools and techniques include:

- **Early Polygon Editors**: Basic tools for creating simple 3D models.
- **Advanced Modelling Software**: Programs like 3D Studio, SoftImage and Maya that allowed for more detailed and complex designs.
- **Texture Mapping**: Techniques for applying textures to 3D models to enhance visual realism.

{% include link-to-other-post.html post="/3d-software" description="For more information on 3D Software check out this post." %}

## 2D Images, Sprites and Textures
Known software used in the creation of 2D Image asserts for retro video games include:
* **Deluxe Paint** (aka DPaint) - Created by Electronic Arts
* **DeBabilizer** - Shown off during 1997 Computer Game Developers Conference (Used for palletizing sprites for StarCraft [^1])

### 8-bit EGA Pixel art at LucasArts
**Mark Ferrari** has an excellent GDC talk, in which he discussed some of the techniques for drawing 8-bit game graphics, including color cycling and palette shifting in Deluxe Paint:
<iframe width="560" height="315" src="https://www.youtube.com/embed/aMcJ1Jvtef0?si=rNd0Wo1EO2NwxCLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Music Creation
Music has always been a cornerstone of the gaming experience. Uncover the music creation tools and techniques that produced the memorable soundtracks of retro games. Learn about the hardware limitations and ingenious methods composers used to create captivating game music. Important aspects include:

- **Sound Chips**: Hardware like the SID chip in the Commodore 64 and the Yamaha YM2612 in the Sega Genesis that defined the sound of many classic games.
- **Tracker Software**: Programs like FastTracker and ProTracker that allowed composers to create music with limited hardware capabilities.
- **MIDI Composition**: The use of MIDI to sequence and control sound modules and synthesizers for richer game audio.


---
# Production
The tools used by producers for project management are much harder to find information on as no details will leak into the source code or compiled game binaries, however, we know of a few thanks to articles in magazines such as **Develop**.

## DevTrack by TechExcel
DevTrack is TechExcel’s project issue-tracking tool, comprehensively managing issues as far reaching as new features, QA reports and IT activities. Clients include Activision, Electronic Arts, Sammy Studios, Sony Online Entertainment, Vivendi Universal.

The reason we know about this tool is thanks to issue 78 of the UK game development magazine **Develop** which had a brief section on it:
![TECHEXCEL DEVTRACK](https://github.com/user-attachments/assets/0789c549-0dce-4838-9c22-500b0aa35285)

It was previously known as **PowerTrack** but rebranded to **DevTrack** in 1999 to focus on software development specifically.

In the February 1999 issue of EXE magazine it mentions the rebrand was at version 3.0: 
![PowerTrack rebrand](https://github.com/user-attachments/assets/059f454d-af29-4ffb-bb71-9183f7fb871a)


The product is still going strong in 2025!


---
# Reverse Engineering Tools for Games

Reverse engineering is a vital process for understanding and recreating the magic behind retro games. By dissecting and analyzing the original game code, assets, and mechanics, enthusiasts can learn how these classics were built and even modify or enhance them. Our site provides detailed information on the essential tools and techniques used in reverse engineering games. Here’s an overview of the key tools you'll need:

## Disassemblers
Disassemblers are crucial for breaking down compiled game code back into human-readable assembly language. These tools allow you to see the underlying instructions that the game uses to function, providing insight into the game's logic and structure.

- **IDA Pro**: One of the most powerful disassemblers, supporting a wide range of processors and file formats.
- **Ghidra**: A free, open-source disassembler developed by the NSA, known for its robust features and user-friendly interface.
- **Radare2**: A highly customizable and versatile disassembler and debugger, popular in the open-source community.

{% include link-to-other-post.html post="/disassemblers" description="For more information on Disassemblers check out this post." %}

---
## Debuggers
Debuggers are used to test and analyze game code in real-time, allowing you to track the execution of programs, inspect memory, and find bugs or glitches.

- **OllyDbg**: A popular Windows debugger known for its strong analysis capabilities and ease of use.
- **x64dbg**: An open-source debugger for Windows with modern features and an active development community.
- **Cheat Engine**: While primarily known as a game cheating tool, Cheat Engine’s debugging features make it useful for reverse engineering.

---
## Hex Editors
Hex editors let you view and modify the raw binary data of game files. They are essential for making precise changes to game code and assets at the byte level.

- **HxD**: A fast and efficient hex editor for Windows with features like file comparison and memory modification.
- **Hex Fiend**: A powerful hex editor for macOS, capable of handling large files with ease.
- **010 Editor**: A professional-grade hex editor with powerful scripting and parsing capabilities.

---
## Decompilers
Decompilers attempt to convert executable code back into a higher-level programming language, making it easier to understand and modify.

- **Reko**: An open-source decompiler designed for multiple architectures and file formats.
- **RetDec**: A retagetable machine-code decompiler that supports various architectures and file types.
- **Ghidra**: Besides being a disassembler, Ghidra also includes decompiler features that provide pseudo-code representations of disassembled binaries.

{% include link-to-other-post.html post="/intro-decompiling-with-ghidra" description="For more information on Ghidra check out this post." %}

---
## File Format Analyzers
Understanding game-specific file formats is crucial for modifying assets and extracting valuable information. These tools help analyze and manipulate proprietary file formats used in games.

- **Game Extractor**: A tool for opening and modifying the archives used in many games.
- **QuickBMS**: A universal script-based extractor that supports hundreds of game archive formats.
- **TrID**: A utility for identifying file types and formats based on their binary signatures.
- **Detect It Easy**: [horsicq/Detect-It-Easy: Program for determining types of files for Windows, Linux and MacOS.](https://github.com/horsicq/Detect-It-Easy?tab=readme-ov-file) (excellent for getting compiler/linker information for an executable)

### Diaphora - The Deeply Interactive Program Diffing Tool
**Diaphora** is an advanced program diffing framework written by **joxeankoret** that integrates directly into the IDA Pro disassembler (and supports Ghidra via a script). 
This tool is essential for tasks like comparing binary versions, allowing users to identify changes in functions, structures, and global variables between two databases. It provides a visual and interactive way to track code evolution and analyze modifications in complex binaries.

{% include link-to-other-site.html url="https://github.com/joxeankoret/diaphora" description="joxeankoret's Diaphora is a highly interactive program diffing tool for IDA Pro (with Ghidra support) used to compare two binary databases and highlight differences in functions, types, and data." image="https://opengraph.githubassets.com/1/joxeankoret/diaphora" title="Diaphora: The Deeply Interactive Program Diffing Tool" %}

[BSides Lisbon](https://www.youtube.com/watch?v=eAVfRxp99DM) features a presentation by **Joxean Koret**, the creator of **Diaphora**, an open-source program diffing plugin for IDA Pro. 

Koret details the tool's architecture, which exports IDA databases to **SQLite** and uses **44 different heuristics** to match functions, including techniques based on the **Hex-Rays decompiler's Abstract Syntax Tree (AST)** for high-quality, cross-architecture comparison. The presentation includes demos of identifying a security patch and porting symbols between stripped and unstripped binaries.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eAVfRxp99DM" frameborder="0" allowfullscreen></iframe>


### Using BinDiff and Diaphora
[Guided Hacking](https://www.youtube.com/watch?v=n06QSoICU6c) presents a tutorial on using both **Diaphora** and **BinDiff**  to perform binary diffing. 
The video demonstrates how to set up workspaces to visually compare function control flow graphs and identify code similarities, which is essential for analyzing security patches, identifying vulnerabilities, and detecting code reuse in malware variants like the **Conti ransomware**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n06QSoICU6c" frameborder="0" allowfullscreen></iframe>

---
## Emulators
Emulators replicate the hardware of old gaming systems on modern computers, allowing you to run and test games in a controlled environment.

- **MAME**: An emulator that supports a wide range of arcade and console systems.
- **PCSX2**: A PlayStation 2 emulator that provides debugging features for reverse engineering.
- **Dolphin**: A GameCube and Wii emulator known for its accuracy and debugging tools.

{% include link-to-other-post.html post="/Reversing-Emulators" description="For more information on Reversing Emulators check out this post." %}

### QEMU 
QEMU is an open-source machine emulator and virtualizer that enables hardware-level virtualization and full-system emulation for running operating systems and software across different CPU architectures.

#### A Deep Dive into QEMU Internals
The **Airbus Security Lab** has an excellent write up about reverse engineering the internal mechanics of the QEMU emulator. 
It covers the Tiny Code Generator (TCG), memory management via SoftMMU, and the main execution loop, offering critical insights for security researchers aiming to audit or fuzz the emulation engine.

{% include link-to-other-site.html url="https://airbus-seclab.github.io/qemu_blog/" description="Airbus Security Lab provides a comprehensive series of blog posts detailing QEMU internals, including the TCG JIT compiler, memory access handling, and device emulation." image="https://avatars.githubusercontent.com/u/41308365?v=4" title="A Deep Dive into QEMU Internals" %}

---
## Game Cracking Software used back in the day
Cracking games for piracy and other purposes has existed for almost as long as the games industry has existed. 

We have tons of modern software for Reverse Engineering and ROM Hacking but how were games cracked back in the day?

We have a post specifically about this software in the link below.

{% include link-to-other-post.html post="/cracking-software" description="For more information on Game Cracking software used back in the day check out this post." %}


---
# Posts
Here is a list of posts on the site that have been tagged as related to game development or reverse engineering tools.

<div>
{% include console.html %}
</div>

---
# References
[^1]: [What did developers in the 90s use to create pixel graphics for their games r/gamedev](https://www.reddit.com/r/gamedev/comments/ygosp6/what_did_developers_in_the_90s_use_to_create/)
[^2]: [GDC Evolve Page 36](https://ia803200.us.archive.org/11/items/evolveeventprogr2004unse/evolveeventprogr2004unse.pdf)
