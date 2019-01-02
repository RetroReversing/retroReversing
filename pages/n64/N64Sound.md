---
layout: post
tags: 
- n64
title: N64 Sound and Audio
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64sound
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Sound and Audio
    url: #
recommend: n64
editlink: /n64/N64Sound.md
---

# N64 Sound Banks
N64 sound banks are composed of two files: the ctl and tbl. 

The N64 Developer Documentation refers to a Wave bank file `.wbk` and a Pointer Bank File `.ptr` but it is not clear what this file is compared to .ctl and .tbl [^1]. My guess is that CTL is the same as .ptr and .TBL is the same as wok but this is unconfirmed. 

## CTL File
The ctl is the sets of sounds and details about them., it starts with the Magic Header: 0x42310001. 

## TBL File
The tbl is the actual raw sound data, usually vadpcm encoded. 

# Finding the TBL from CTL
```
The tool attempts to locate ctl via its magic word (0x42310001), then tries to guess the .tbl. In many games however, the tbl is not directly past the .ctl, since it is hardcoded in the ROM, and thus many ROMs, while they may have soundbanks, will not work exactly out of the box. In that case, search for the magic word in a hex editor, 0x42310001, then the .tbl is usually following it, and is a series of random hex characters that followed some 00 padding. 
```[^2]

# References
[^1]:-https://n64squid.com/homebrew/ProgManual/chapter_libuse.html
[^2]:-https://www.therwp.com/project/n64-sound-tool 
