---
layout: post
tags: 
- ps1
- sdk
- symbols
title: PSX Analysis with Radare2 
thumbnail: /public/consoles/Sony Playstation.png
image: /public/ps1radare2.png
permalink: /ps1-radare2
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: PS1 Binary Analysis with Radare2
    url: #
recommend: ps1
editlink: /ps1/PS1_Radare2.md
---
This guide will presume you have already installed the radare2 suite of binary analysis tools on your computer.

# Opening a PSX executable in radare2
First lets run radare2:
```bash
r2 ./SLES_032.85
```

To Disassemble PS1 Binary files (MIPS little endian) you need to map a file at offset 0x80010000 like so:
```
o ./SLES_032.85 0x80010000 rwx
```
Replace SLES_032.85 with the location of your own PSX executable.

Now we want to analyze all the functions in the executable like so:
```
aaaa
```

