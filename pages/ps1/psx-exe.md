---
layout: post
tags: 
- ps1
- sdk
- fileformat
title: PSX-EXE Format
thumbnail: /public/consoles/Sony Playstation.png
image: /public/psx-exe.png
permalink: /ps1-exe
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: PS1 Executable Binary Format
    url: #
recommend: ps1
editlink: /ps1/psx-exe.md
---

The PSX-EXE executable file format is a format similar to the standard UNIX ELF format. 
It is used on the Sony Playstation 1 and it is a MIPS 32-bit executable. It contains both code and data.

In order to use tools like the RetDec decompiler we need to convert the exe format into elf, and in order to run on the playstation we need to convert compiled elf files into exe files.

This document will contain my findings with regards to the PSX-EXE format.

Some Information about the format:
* Sony’s CD player can’t read executibles file that aren’t multiple of 2048 bytes [^1]

# Useful Sources
* ELF2EXE source code - https://github.com/cetygamer/psxsdk/blob/master/tools/elf2exe.c

# EXE Header

Name | Length | Description
--- | --- | ---
PSX Magic Number | 8 | Spells out 'PS-X EXE'
Unknown | 16 | ???
Initial Program Counter | 4 | e.g 0x80010000 (stored opposite way around due to little endian)
Global Pointer | 4 | e.g 0x0009B000



# References

[^1]: https://www.linux-mips.org/wiki/PS1
