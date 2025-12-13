---
title: NES Sprite Tile Editing
permalink: /nes-sprite-tile-editing/
tags:
- nes
- gameboy
- introduction
layout: post
youtube: "iMACSQjyRDs"
image: /public/QkyxcBhunP1JpTNuoeDIMw_img_0.png
thumbnail: /public/consoles/Nintendo Entertainment System.png
breadcrumbs:
  - name: Home
    url: /
  - name: NES
    url: /nes
  - name: NES Sprite Tile Editing
    url: #
recommend: 
- nes
- snes
- introduction
editlink: /consoles/nes/NES-Sprite-Tile-Editing.md
---
# Sprite Tile editing with Tile Layer Pro

If you have ever wondered how graphical rom hacks are made this is for you! This should work for most early games such as NES and Game Boy. Future generation games start to compress their sprites which makes it more difficult.

Back in the day of NES and Game Boy development, the sprites and tiles were saved in the rom file completely uncompressed and thus visible with the correct editor, one such editor is **Tile Layer Pro**.

![image alt text]({{ site.url }}/public/QkyxcBhunP1JpTNuoeDIMw_img_0.png)

## Tile Layer Pro: ROM Graphics Editor
Tile Layer Pro is a fundamental and widely-used utility in the field of ROM hacking and graphical reverse engineering. The application allows users to view, edit, and manipulate the raw tile data (8x8 or 16x16 pixel blocks) that constitute the sprites, background images, and foreground elements within classic video game ROM files. This tool is essential for understanding how tilemaps are laid out in memory, enabling hackers to customize graphics across numerous tile-based consoles.

{% include link-to-other-site.html url="https://segaretro.org/Tile_Layer_Pro" description="Sega Retro has an entry for Tile Layer Pro, a classic ROM hacking utility used for viewing and editing the tile-based graphics data in video game ROMs." title="Tile Layer Pro" %}

### How to Hack NES Games: Editing Graphics
[John Riggs](https://www.youtube.com/watch?v=iMACSQjyRDs) presents a tutorial on modifying NES game graphics using **Tile Layer Pro**. The video demonstrates how to locate 8x8 tile patterns within a ROM (using *Super Mario Bros.* as an example), use the "Tile Arranger" to visualize sprites, and edit them pixel-by-pixel or by importing graphics from other games to create custom characters.

One cool feature of Tile Layer Pro is being able to open multiple games at once and copy tiles over, so in the video they copy a ghost from Pacman and replace the Mario Goomba with it!

<iframe width="560" height="315" src="https://www.youtube.com/embed/iMACSQjyRDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
