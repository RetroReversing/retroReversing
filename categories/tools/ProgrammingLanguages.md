---
layout: post
permalink: /programming-languages
category: programming
breadcrumbs:
  - name: Home
    url: /
redirect_from:
  - /languages
  - /programming
editlink: '../categories/tools/ProgrammingLanguages.md'
title: Retro Game Programming Languages - Assembly, C, Shaders and BASIC
recommend: 
 - programming-languages
 - software
 - tools
tags:
 - programming-languages
 - tools
updatedAt: '2026-10-24'
---

# Introduction
A game's language choice shaped the tools its programmers used, the code that survived in the binary, and how easy that code is to reconstruct today. Assembly gave precise control over a particular CPU. C made larger programs easier to organize without removing the need to understand memory maps, cartridges, or graphics hardware. BASIC opened other routes into game creation. These approaches overlapped: a studio could use C for game logic and assembly for a routine that needed exact timing.

---
# Assembly Language
Assembly names CPU instructions and the registers they act on. It is closely tied to a processor family, so learning one console's assembly does not make another's instruction set interchangeable. The NES uses 6502-family code, the SNES uses 65C816, the Mega Drive's main CPU uses 68000, and the Game Boy uses Sharp's SM83 rather than a Z80, despite the resemblance [^7]. Sega's Master System and Game Gear do use Z80-family code [^8].

That specificity is useful to a reverse engineer: register accesses, branches, and cycle-sensitive loops remain visible in a disassembly. It also explains why C did not simply replace assembly everywhere. [Peter Morawiec recalled](https://www.sega-16.com/2007/04/interview-peter-morawiec/) that Sega Technical Institute's *Sonic Spinball* was written in C while many other Mega Drive games of its period still used assembly [^5]. The exception is more revealing than a rule that assigns one language to an entire console generation.

{% include link-to-other-site.html url="https://www.gingerbill.org/article/2026/08/20/designing-odins-inline-asm/" description="gingerBill explains how Odin integrates typed inline assembly with the language's type system, register bindings, clobbers, and multiple-return-value semantics." title="Designing Odin's Inline Assembly" %}

---
## Assembly fundamentals
[Ben Eater](https://www.youtube.com/watch?v=ZYJIakkcLYw) explains how loops work in assembly language. This is a useful foundation for recognising control flow in a disassembly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZYJIakkcLYw" title="How assembly language loops work" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

[Dave's Garage](https://www.youtube.com/watch?v=CfbciNZvg0o) presents an introductory assembly-language programming session. It offers a longer practical starting point for readers learning to follow machine-level code.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CfbciNZvg0o" title="Assembly Language Snow Day!  Learn ASM Now!" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

[Jason Turley](https://www.youtube.com/watch?v=tKGYU5wQCSA) offers advice for learning assembly programming. It is a short orientation resource alongside the practical programming lessons.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tKGYU5wQCSA" title="3 Tips to QUICKLY Learn Assembly Programming!" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## x86 Assembly Language
The x86 material below moves from recognizing function calls to inspecting a running program.

---
### Functions and procedures in NASM
[OliveStem](https://www.youtube.com/watch?v=EEEYPCxQyB4) introduces x86 functions and procedures using NASM. The tutorial is useful preparation for recognising calls, returns and function boundaries in a disassembly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EEEYPCxQyB4" title="Learning x86 with NASM - Basics of x86 functions/procedures" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
### Reversing x86 code
[jyn](https://www.youtube.com/watch?v=ygOqZzATxNQ) introduces reverse engineering x86 assembly. The walkthrough provides a practical counterpart to the language and tool references.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ygOqZzATxNQ" title="Reverse Engineering x86 Assembly" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
### x86-64 Playground
[Alberto Ventafridda's x86-64 Playground](https://x64.halb.it/) runs a Linux-compatible emulator and debugger in the browser. You can write a few instructions, execute them, and watch registers or memory change without setting up a local toolchain.

{% include link-to-other-site.html url="https://x64.halb.it/" description="Alberto Ventafridda has created a client-side x86-64 Linux emulator and debugger that runs entirely in the browser, allowing for safe and accessible assembly experimentation." image="https://opengraph.githubassets.com/1/robalb/x86-64-playground" title="x86-64 Playground" %}

---
### PacManOS: A Bare-Metal x86 Pac-Man Kernel
[mdeclerk's PacManOS](https://github.com/mdeclerk/PacManOS) boots a playable Pac-Man clone on a small 32-bit x86 kernel. Its source and build setup offer a different view of assembly: instead of inspecting a compiled game, you can see the code that gets a machine ready to run one.

{% include link-to-other-site.html url="https://github.com/mdeclerk/PacManOS" description="mdeclerk has released PacManOS, a 32-bit x86 kernel written in C and Assembly that demonstrates bare-metal game development and modular kernel design." image="https://opengraph.githubassets.com/1/mdeclerk/PacManOS" title="GitHub - mdeclerk/PacManOS: A bare-metal 32-bit x86 kernel that boots into a playable Pac-Man clone." %}

---
# C/C++
C and C++ let developers split a game into source files, reuse libraries, and work at a higher level than raw instructions. The choice still depended on the platform and the compiler available to a team. *Sonic Spinball* is a documented Mega Drive example: Morawiec named Denis Kobel and Lee Actor as the contractors who programmed it in C [^5]. Game Boy Color titles made in C, including *Lego Stunt Rally* and the Datel Rocket games mentioned in surviving accounts, are another reminder that older hardware did not dictate a single language [^2].

## What did a console C toolchain actually provide?
The [SN Systems N64 development manual](https://ultra64.ca/files/documentation/sn-systems/SN_Systems_PC_Development_System_for_the_Nintendo_64.pdf) lists a GNU C compiler alongside its R4300 assembler, linker, and source-level debugger. It also says developers needed Nintendo-specific libraries and C headers from Nintendo [^9]. A compiler alone did not supply the console's operating-system calls or hardware interface.

For Game Boy, the [GBDK toolchain guide](https://gbdk.org/docs/api/docs_toolchain.html) shows C and assembly sources passing through SDCC, an assembler, a linker, and finally a ROM-image tool [^8]. Its instructions even document placing variables in the Game Boy's high RAM to use shorter memory-access instructions. This is a concrete example of C code still being shaped by the target machine [^8].

In a binary, strings and library routines may suggest a C-family toolchain, but they cannot establish the original source language on their own. Compare compiler output, calling conventions, linked libraries, or surviving build files before making that claim.

Common toolchains in the pages linked here include GNU C and platform-specific assemblers; PC game projects also used Borland Turbo C++ and Microsoft Visual C++.

The [compiler toolchains guide](/compilers) compares the SDK compilers used across consoles and the code patterns they leave in binaries.

{% include_cached link-to-other-post.html post="/compilers" description="Compare console C/C++ compilers and the fingerprints they leave in game binaries." %}

---
## Game Development in C/C++
The following reconstruction shows C as an accessible way to study a small game engine.

### Let's Make: Dangerous Dave
[MaiZure's *Let's Make: Dangerous Dave*](https://www.maizure.org/projects/lets-make-dangerous-dave/) reconstructs the game in roughly 1,000 lines of C and SDL2. Its write-up and videos follow the assets, sprite drawing, and platforming physics, so readers can see what a small engine actually needs.

{% include link-to-other-site.html url="https://www.maizure.org/projects/lets-make-dangerous-dave/" description="MaiZure offers a technical deep dive into remaking Dangerous Dave, including a 10-part series and source code that reconstructs the classic game using minimal C and SDL." image="https://opengraph.githubassets.com/1/MaiZure/lmdave" title="Let's Make: Dangerous Dave" %}


---
## Kernel Development in C/C++
A bare-metal project is a different setting from a commercial console SDK, but it makes the boundary between C++ and assembly visible.

### Make your own kernel from scratch... with C++!
[Cinemint](https://www.youtube.com/watch?v=uR3suoJeKVg) walks through a kernel built with C++ and a little assembly:

<iframe width="560" height="315" src="https://www.youtube.com/embed/uR3suoJeKVg?si=MF7lUqRJxiytTOOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# Shader Languages
A shader is code for a programmable stage of the graphics pipeline. Its language and available operations depend on the GPU and graphics API, so shader source deserves attention alongside a game's CPU code.

## NVIDIA Cg
NVIDIA's Cg (C for Graphics) toolkit first appeared in December 2002. Its compiler targeted several DirectX and OpenGL profiles, with runtime libraries and examples for developers [^6]. The [Cg Toolkit archive](https://developer.nvidia.com/cg-toolkit-archive) preserves legacy releases; it is useful when identifying a game's shader source, runtime dependency, or build tools.

---
# BASIC Variants
BASIC offered a more approachable route into programming than an assembler. Game-focused variants bundled graphics and sound commands so a hobbyist could make something playable without building an engine first.

## Blitz BASIC
On the Amiga, Blitz BASIC combined a familiar BASIC syntax with commands intended for games. Its appeal was practical: drawing, input, and sound were closer at hand than in a general-purpose language. The examples below show that this was more than a teaching tool.

Two Amiga games associated with Blitz BASIC illustrate its commercial reach:
* **Super Skidmarks** - A racing game.
* **Worms** - A turn-based artillery game.

Blitz BASIC later evolved into **Blitz2D** which was for creating games for DOS/Windows and has continued to evolve into future products such as **Blitz3D** [^1].

---
## DarkBASIC
<img src="https://m.media-amazon.com/images/I/51TBHVEJXYL._AC_UF894,1000_QL80_.jpg" alt="DarkBASIC retail software box" />
DarkBASIC carried the game-focused BASIC approach onto Windows, with commands for 2D and 3D graphics. Its emphasis was getting a scene running quickly; Dark Basic Professional later added an extensible plugin system. The surviving source is particularly useful if you want to follow those commands down into the compiler and runtime.

As far as we can tell, DarkBASIC did not become a common choice for large commercial games. It did find its way into other retail software:
* **The 3D Game Maker** - A game-creation package from The Game Creators that appears to have sold reasonably well.
* **Driving Test Success Practical** - A Focus title that the company reported selling more than 100,000 copies [^3].

Dark Basic Professional was later rewritten with support for plugins, extending what its built-in commands could do.

The Game Creators also built FPS Creator with Dark Basic Professional; its [source tree](https://github.com/TheGameCreators/FPS-Creator-Classic/tree/master/Dark%20Basic%20Pro%20Shared/Dark%20Basic%20Pro/Projects/FPSCREATOR) is available to inspect [^4].

The [Dark Basic Professional source repository](https://github.com/Dark-Basic-Software-Limited/Dark-Basic-Pro) includes the compiler and supporting code. It is a stronger starting point for investigating the language than a feature list alone.

[TannerProductions](https://www.youtube.com/watch?v=H74kuD1g1wg) traces the wider The Game Creators product line in this documentary:

<iframe width="560" height="315" src="https://www.youtube.com/embed/H74kuD1g1wg?si=tnyV7nPXcb_MglSN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# References
[^1]: [Scripting language: Blitz BASIC - MobyGames](https://www.mobygames.com/group/11091/scripting-language-blitz-basic/)
[^2]: [Quang Nguyen - Nintendo Game Boy Development - Media - Computing History](https://www.computinghistory.org.uk/det/56957/Quang-Nguyen-Nintendo-Game-Boy-Development/)
[^3]: [The Game Creators Newsletter - Issue 50](https://www.thegamecreators.com/pages/newsletters/newsletter_issue_50.html)
[^4]: [FPS-Creator-Classic/Dark Basic Pro Shared/Dark Basic Pro/Projects/FPSCREATOR at master · TheGameCreators/FPS-Creator-Classic](https://github.com/TheGameCreators/FPS-Creator-Classic/tree/master/Dark%20Basic%20Pro%20Shared/Dark%20Basic%20Pro/Projects/FPSCREATOR)
[^5]: [Ken Horowitz, interview with Peter Morawiec, Sega-16 (20 April 2007)](https://www.sega-16.com/2007/04/interview-peter-morawiec/)
[^6]: [NVIDIA, Cg Toolkit 1.2 Release Notes](https://download.nvidia.com/developer/cg/Cg_1.2/Docs/CgReleaseNotes.pdf)
[^7]: [Open Game Boy Documentation Project, hardware specifications](https://mgba-emu.github.io/gbdoc/) and [SNESdev Wiki, 65C816 CPU listing](https://snes.nesdev.org/wiki/SNESdev_Wiki)
[^8]: [GBDK-2020, toolchain](https://gbdk.org/docs/api/docs_toolchain.html) and [supported consoles](https://gbdk.org/)
[^9]: [SN Systems, PC Development System for the Nintendo 64, installation and toolchain](https://ultra64.ca/files/documentation/sn-systems/SN_Systems_PC_Development_System_for_the_Nintendo_64.pdf)
