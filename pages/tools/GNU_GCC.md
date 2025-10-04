---
layout: post
tags: 
- tools
title: GNU Compiler Toolchain
thumbnail: /public/consoles/Nintendo 64.png
permalink: /GNU-GCC
breadcrumbs:
  - name: Home
    url: /
  - name: Tools
    url: /tools
  - name: GNU Compiler Toolchain (GCC)
    url: #
recommend: tools
editlink: /tools/GNU_GCC.md
updatedAt: '2020-08-31'
---

When reverse engineering programs that have been compiled from **C/C++** it is possible that the toolchain was based on the **GNU Compiler Collection** (GCC).

Most game consoles had some form of GCC toolchain specifically built for their architecture and released as an official SDK. This continues into this very day with support for PS4 and Switch using GCC toolchains.

Consoles that did not have GCC-based compilers were mainly from Nintendo or Microsoft:
* **Nintendo 64** - Official Nintendo 64 SDK did not use GCC but instead used **SGI MIPSpro**
* **GameCube** - Official toolchain was Metrowerks CodeWarrior not GCC-based
* **3DO** - Official SDKs used ARM SDT/ARM C++ (proprietary), not GCC.

---
# GCC Releases by Year
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
| 1994 | 2.5.8     | **Saturn**: Sega/SN shipped a GNU C (SH-2) compiler with Psy-Q; Hitachi SH assembler also included. |
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
# Nintendo 64
Note that the official Nintendo 64 SDK on **IRIX** did not use GCC but instead used **SGI MIPSpro**, however the third party development tools such as compilers by **SN Systems** were forks of GCC.

## Partner-N64PC 
Nintendo’s **Partner-N64PC** packages shipped with a GCC bundle (e.g., `Debugger v1.08D + GCC v1.2`), used in Windows-hosted workflows that still linked against Nintendo’s libraries. Although bare in mind the v1.2 doesn't match to the official GNU releases in this case it was their own versioning system for their port of GCC.

# SN Systems

## Cygnus Experimental compiler (1998) - PS1 and N64

The Cygnus Experimental compiler, often associated with the **EGCS** (Experimental/Enhanced GNU Compiler System) project, was a fork of the GNU Compiler Collection (GCC) initiated and maintained by Cygnus Solutions in the mid-1990s.

As part of their **PSY-Q** SDK SN Systems released versions **2.8.0** and **2.8.1** for the Sony Playstation 1 sometime in **1998**: [^1]
> Version 2.8.1 of the compiler is now available for download, offering improved compile times over 2.8.0. PSX and N64 versions of the Cygnus Experimental compiler are also available.

We don't know the precise date since the page was first archived on 23rd May 1998, but not sure if any other versions of GNU GCC were released for the PS1.


---
# SEGA Saturn

## Cygnus 2.7 Sega SATURN Compiler Toolchain (1996)
**Version 2.7** of the GNU Compiler Collection was built in **September 1996** specifically for the Sega Saturn.

---
# References
[^1]: [SN Systems site from 23rd May 1998](https://web.archive.org/web/19980523231120/http://www.snsys.com/snsys/default.asp)
[^2]: [GCC Releases - GNU Project - Free Software Foundation (FSF)](https://gcc.gnu.org/releases.html)
