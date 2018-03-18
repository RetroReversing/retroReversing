---
layout: post
tags: 
- wii
- symbols
- games
title: Wii Games with Debug Symbols
thumbnail: /public/consoles/Nintendo Wii.png
image: https://img.youtube.com/vi/bl55B1cvLUA/maxresdefault.jpg
permalink: /wii-debug-symbols/
breadcrumbs:
  - name: Home
    url: /
  - name: Wii
    url: /wii
  - name: Wii Games with Debug Symbols
    url: #
recommend: wii
editlink: /wii/WiiGamesWithDebugSymbols.md
references:
  - gbatemp.net
---

## How to extract wii Wads into .app files
First you need to use wii.cs tools called `WadMii.exe` (you can run this in wine on MacOSX or Linux) and point it at the .wad file and give it an extract location.

This will generate a bunch of .app files, you will notice each of these .app files has the file header of "55 AA 38 2D" or U.8-.

## How to extract .app files
You can use a GUI tool such as `U8Mii.exe` or a command line interface such as `ARCTool`
```
wine U8Mii.exe 
```

## With ARC Tool
You can download ARCTool here: <a href="http://wiibrew.org/wiki/ARCTool">http://wiibrew.org/wiki/ARCTool</a>

Line Attack example:
```
python ARCTool.py ./lineattack/00000002.app
```




# WiiWare games


# References
[^1]: https://gist.github.com/mariomadproductions/db19996c7109a0289847bb0ec69e32e8
