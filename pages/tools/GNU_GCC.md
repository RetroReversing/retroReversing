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
updatedAt: 31st August 2020
---

When reverse engineering programs that have been compiled from C/C++ it is very likely that the toolchain was based on the GNU Compiler Collection (GCC).

Most game consoles had some form of GCC toolchain specifically built for their architecture and released as an official SDK. This continues into this very day with support for PS4 and Switch using GCC toolchains.

# GCC Releases by Year
The following table will list the first major version released on the specific year, this can be useful to see what versions would have been in use in a certain date period [^2].

Year | Version
---|---
1987 | 1.0
1988 | 1.17
1989 | 1.33
1990 | 1.37
1991 | 1.39
1992 | 1.41
1993 | 2.4.0
1994 | 2.5.8
1995 | 2.7.0
1996 | 2.7.2
1997 | 2.7.2.2
1998 | 2.8.0
1999 | 2.95
2000 | 2.95.2
2001 | 3.0
2002 | 3.1
2003 | 3.3
2004 | 3.4
2005 | 4.0
2006 | 4.1
2007 | 4.2
2008 | 4.3
2009 | 4.4

---
# Playstation 1

## Cygnus Experimental compiler
SN Systems released versions 2.8.0/2.8.1 for the Sony Playstation 1 [^1].

---
# Nintendo 64

## Cygnus Experimental compiler
SN Systems released versions 2.8.0/2.8.1 for the Sony Nintendo 64 [^1].

---
# SEGA Saturn

## Cygnus 2.7 Sega SATURN Compiler Toolchain
Version 2.7 of the GNU Compiler Collection built in September 1996 specifically for the Sega Saturn.

---
# References
[^1]: [SN Systems](https://web.archive.org/web/19980523231120/http://www.snsys.com/snsys/default.asp)
[^2]: [GCC Releases - GNU Project - Free Software Foundation (FSF)](https://gcc.gnu.org/releases.html)
