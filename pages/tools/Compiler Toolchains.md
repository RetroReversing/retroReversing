---
layout: post
title: C/C++ Compiler Toolchains (Console & PC)
permalink: /compilers
breadcrumbs:
  - name: Home
    url: /
  - name: Tools
    url: /tools
  - name: C/C++ Compiler Toolchains (Console & PC)
    url: #
redirect_from:
- /GNU-GCC
tags:
- sdk
- tools
recommend:
- tools
- sdk
editlink: /tools/Compiler Toolchains.md
updatedAt: '2020-08-31'
---

When reverse engineering commercial console binaries built from **C/C++**, the first question is often *which* toolchain produced the code as it can make your job reverse engineering a game so much easier.

On 1990s–2000s consoles you will encounter both **GCC-derived** compilers and  a wide variety of **proprietary** compilers such as: 
* MIPSpro
* CodeWarrior
* Hitachi SHC
* ARM SDT/ADS
* Microsoft VC++ (including WinCE for dreamcast)

## What is a Compiler Toolchain?
**Compiler toolchain** here means the C/C++ compiler front end plus the assembler, linker, C runtime, and some low-level runtime libraries shipped in an **official SDK**.

Each platform had an official prefferred compiler toolchain but this does not mean that the game you are reversing was compiled by it! Some of the main compiler toolchains for each console platform are listed in the table below:

| Platform | Primary official compilers (high-level) | Notes |
| --- | --- | -- |
| PlayStation (PS1) | GCC-based flow in **PSY-Q** feeding SN Systems assembler/linker | Later PS1 builds also saw 2.8.x-based drops. [^1] |
| Sega Saturn | **Hitachi SHC** and a bundled **GNU SH-2** (`GNUSH`) in PSY-Q | Teams used either; both target the same ABI. |
| Nintendo 64 | **SGI MIPSpro** on IRIX as baseline | Windows-based **Partner-N64PC** and SN Systems kits provided GCC-based options; many studios used these, but IRIX MIPSpro remained the reference SDK. [^3] |
| Sega Dreamcast | **Hitachi SHC** via Katana; **Microsoft VC++** for the WinCE path | Sega also licensed CodeWarrior late-gen; all official, non-GCC. |
| 3DO | **ARM SDT / ARM C++ (proprietary)** | ARM toolchains predate GBA/DS era use. |
| PlayStation 2 | **ee-gcc 2.95.2**, **iop-gcc 2.95.x** (Sony/SN builds) | GCC-based official cross tools for EE/IOP. |
| GameCube | **Metrowerks CodeWarrior** | Official Nintendo SDK path. |
| PSP | **SNC** (SN Systems) | Official compiler; GCC commonly seen only in homebrew. |
| PlayStation 3 | **SNC** and **SCE GCC** (PPU/SPU) | Two official compilers shipped side-by-side. |

*Homebrew toolchains (devkitX family, etc.) are intentionally excluded from the table above.*

## Why is knowing the Compiler useful when reverse engineering?
Knowing the likely toolchain helps you interpret calling conventions, codegen idioms, and debug-stub artifacts.

## How can I detect which compiler was used?
Specific toolchains leave stable fingerprints: stack frame layout, prologue/epilogue shapes, switch lowering, delay-slot policy, PIC setup, section naming, and archive formats. 
These let you move faster when mapping unknown functions.


---
# GNU Compiler Collection (GCC)

## GCC Releases by Year
The following table will list the first major version released on the specific year, this can be useful to see what versions would have been in use in a certain date period [^2].

| Year | Version   | Notes (GCC forks / console SDKs) |
| --- | --- | ---
| 1987 | 1.0       | Initial GNU C release. |
| 1988 | 1.21      |  |
| 1989 | 1.35      |  |
| 1990 | 1.37.1    |  |
| 1991 | 1.39      |  |
| 1992 | 1.41      |  |
| 1993 | 2.4.x     |  |
| 1994 | 2.5.8     | **Saturn**: Sega/SN shipped a GNU C (SH-2) compiler with Psy-Q; Hitachi SH assembler also included. **Jaguar**: GCC was used in the Atari Jaguar SDK, specifically version 2.5.x |
| 1995 | 2.7.0     | **PS1**: PSY-Q used a GNU C/C++–derived backend plus SN assemblers/linker (mid-90s). |
| 1996 | 2.7.2     | **Saturn**: Cygnus GCC 2.7 build (Sep 1996) in circulation. |
| 1997 | 2.7.2.2   | **Net Yaroze**: DJGPP-based GCC 2.7.2 toolchain (released mid-90s, kits shipped 1996–97). |
| 1998 | 2.8.0     | **PS1**: SN Systems also distributed experimental GCC 2.8.0/2.8.1 builds. |
| 1999 | 2.95      | **PS2**: IOP toolchain (iop-gcc) based on GCC 2.95.x. |
| 2000 | 2.95.2    | **PS2**: EE toolchain (ee-gcc 2.95.2) in official SDKs. |
| 2001 | 3.0       |  |
| 2002 | 3.1       | Homebrew GBA toolchains (devkitadv) used GCC; official GBA dev favoured ARM tools. |
| 2003 | 3.3       | Early DS homebrew starts settling on GCC; official tools still CodeWarrior. |
| 2004 | 3.4       | **DS/Nitro**: some SDK packages also exposed GCC via Cygwin. |
| 2005 | 4.0       | **PSP**: official SNC compiler (non-GCC); homebrew psptoolchain used GCC 4.x. |
| 2006 | 4.1       | **PS3**: official SDKs shipped **SNC** and **SCE GCC** (ppu-gcc/spu-gcc). IBM Cell SDK on Linux used GCC too. |
| 2007 | 4.2       |  |
| 2008 | 4.3       | Wii homebrew (devkitPPC) widely GCC-based |
| 2009 | 4.4       |  |


---
## PS1 PSY-Q - GCC 2.7/2.8
PSY-Q shipped with a customized GCC front end that emitted the original 32-bit **MIPS I** assembly consumed by SN Systems’ assembler/linker to produce a **PS-X EXE** PlayStation 1 executable. [^1]

### MIPS I o32 Application Binary Interface (ABI)
The o32 ABI is the convention used by classic MIPS I CPUs like the PlayStation 1’s R3000A, defining things like argument passing, stack layout, and binary object file format. It ensures that the assembly and binaries produced by the compiler/toolchain match what the hardware and system expect.

Here are some of the rules in the o32 ABI that the compiler needs to follow:
* Args in `a0..a3`, return in `v0` (and `v1` if needed)  
* Callee-saved: `s0..s7`, `sp`, `ra`
* Typical **16-byte outgoing arg area** reserved in frames


---
## Partner-N64PC - GCC Compiler for N64
Nintendo’s **Partner-N64PC** packages shipped with a GCC bundle (e.g., `Debugger v1.08D + GCC v1.2`), used in Windows-hosted workflows that still linked against Nintendo’s libraries. Although bare in mind the v1.2 doesn't match to the official GNU releases in this case it was their own versioning system for their port of GCC.

There are known versions of this SDK released in 1996 and 1997, distributed as **GNUN6432.zip** (GNU N64 for 32bit Windows) containing 3 files:
* **CPPN64.exe** - C++ Compiler
* **CC1N64.exe** - C compiler
* **CC1PLN64.exe** - Linker

For more information check out our post on this SDK:
{% include link-to-other-post.html post="/sn64-sdk-sn-systems" %}


---
## Cygnus Experimental compiler (1998) - PS1 and N64

The Cygnus Experimental compiler, often associated with the **EGCS** (Experimental/Enhanced GNU Compiler System) project, was a fork of the GNU Compiler Collection (GCC) initiated and maintained by Cygnus Solutions in the mid-1990s.

As part of their **PSY-Q** SDK SN Systems released versions **2.8.0** and **2.8.1** for the Sony Playstation 1 sometime in **1998**: [^1]
> Version 2.8.1 of the compiler is now available for download, offering improved compile times over 2.8.0. PSX and N64 versions of the Cygnus Experimental compiler are also available.

We don't know the precise date since the page was first archived on 23rd May 1998, but not sure if any other versions of GNU GCC were released for the PS1.

---
## Cygnus 2.7 Sega SATURN Compiler Toolchain (1996)
**Version 2.7** of the GNU Compiler Collection was built in **September 1996** specifically for the Sega Saturn.

---
# References
[^1]: [SN Systems site from 23rd May 1998](https://web.archive.org/web/19980523231120/http://www.snsys.com/snsys/default.asp)
[^2]: [GCC Releases - GNU Project - Free Software Foundation (FSF)](https://gcc.gnu.org/releases.html)
