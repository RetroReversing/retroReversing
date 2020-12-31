---
layout: post
tags:
- tools
- segasaturn
- saturn
- sega
title: Sega Saturn Artist Tools
thumbnail: /public/consoles/Sega Saturn.png
image:  /public/images/saturn/Sega Saturn Artist Tools.jpg
permalink: /sega-saturn-artist-tools/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Artist Tools
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnArtistTools.md
---
This post will cover the most commonly used tools by artists when developing assets for sega saturn games, including 2D, 3D and Video.

# 2D Art Software
<section class="postSection">
<img src="/public/images/saturn/SegaSaturnGraphicAndSoundTools.jpg" style="width:200px" class="wow slideInLeft postImage" />
<div markdown="1">
￼The Sega Saturn had multiple tools availble for 2D asset creation, most were third party but SEGA even created their own basic first party tools that they distributed to developers for the Apple Macintosh.
</div>
</section>

## MapEditor (Mac)
<section class="postSection">
<img src="/public/images/saturn/SegaMapEditor.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **1.81E**

Import File Formats supported:
 - PICT
 - DGT2
Export File Formats supported:
 - 2D (Sega2D)

The MapEditor allows importing PICT/DGT2 image files and placing them on a 'map'. Areas of pixels are imported from the files and called 'characters'. The result would be scroll data for the game. So you can think of this tool similar to a tile editor, where screens are made up of individual tiles.
￼
</div>
</section>

## ScreenEditor 
Latest Version: **1.07E**

Import File Formats supported:
 - PICT
 - DGT2
Export File Formats supported:
 - 2D (Sega2D)

Similar to MapEditor but with a character/tile and cell size of 1. So it is more for generating a screen scroll one cell at a time.
 ## QuickViewer 
Latest Version: **3.17US**

The QuickViewer does exactly what it says on the tin, quickly allows you to view various image formats on the Sega Saturn development kit (both cart dev and P-Box). 
## Sega2DViewer (SGL_RUN.exe)
<section class="postSection">
<img src="/public/images/saturn/SEGA2DViewer.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Latest Version: **1.0US**

File Formats supported:
 - 2D (Sega2D)

The Sega2DViewer is an application that only works with the CartDev development kit, it basically just displays the output of the MapEditor/ScreenEditor SEGA2D files on the Sega Saturn Hardware.
</div>
</section>

---
## SegaConverter 
<section class="postSection">
<img src="/public/images/saturn/SEGAConverter.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **4.83E**

File Formats supported:
 - PICT
 - DGT
 - RGB
 - BOB

The SegaConverter tool was developed to convert between similar 2D image formats.
</div>
</section>

---
## SegaPainter 
<section class="postSection">
<img src="/public/images/saturn/SEGAPainter.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **1.11US**

File Formats supported:
 - PICT
 - DGT2 
SegaPainter is a 2D Pixel Art Editor that supports animations, it is great for creating sprites tiles and backgrounds for the Sega Saturn.
</div>
</section>

---
## SpriteEditor
<section class="postSection">
<img src="/public/images/saturn/SpriteEditor.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **1.36US**

File Formats Supported:
 - DGT2

The SpriteEditor works in conjunction with the SegaPainter, in that it imports the output and merges multiple images/sprites into what it called `patterns`.
</div>
</section>

---
## PhotoShop Plug-Ins
There were 6 plugins provided for Photoshop on the Sega Saturn Art Tools for Macintosh CD.


---
# Video Software

## TrueMotion 3.5 (Video)
TrueMotion is a Video compression format developed by `The Duck Corp.` similar to `Cinepak` or `Mpeg`, but higher quality than the former and less efficient than the latter. This was fairly widely used in Sega Saturn games to show full motion video due to the extra space on the Sega Saturn CDs.

SegaRetro has an excellent article about Truemotion, including a list of games that used it: [TrueMotion - Sega Retro](https://segaretro.org/TrueMotion)

## Cinepak Library 1.21 and Tools
Cinepak is similar to TrueMotion, it is a video compression format developed by SuperMatch for displaying Full Motion Video in early CD-based games.

SegaRetro has an excellent article about Cinepak for Saturn including the list of games using it: [Cinepak - Sega Retro](https://segaretro.org/Cinepak).

---
# 3D Software
In order to create 3D assets for the Sega Saturn there were multiple packages that developers could buy, the one Sega promoted was Softimage but N-world, 3DStudio and Alias/Wavefront PowerAnimator all supported exporting to the Sega Saturn 3d Model formats.

## Sega 3DEditor 
<section class="postSection">
<img src="/public/images/saturn/Sega3DEditor.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Latest Version: **1.72US**

The Sega 3DEditor was a very simple 3D viewer which allowed some basic modifications to 3d models. Developers could use this software to add textures to their 3d models or use basic RGB colours to each quad.


File Formats Supported:
 - SEGA3D
 - DXF
</div>
</section>

## Softimage
Most games that use 3D models used an SGI workstation such as the SGI Indigo and used the Softimage software [^1]. In fact Sega announced in January 1995 that it was partnering with Softimage to make it the official 3D modelling package for the Sega Saturn [^2].

<iframe width="560" height="315" src="https://www.youtube.com/embed/SkgatzeLrlk?start=769" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Softimage was enhanced to allow exporting to the Sega Saturn 3d model formats.

This console generation was interesting in terms of games companies choosing their prefered 3d modelling packages, Sega and Nintendo went for competing 3d modelling packages, so while Sega went with SoftImage, Nintendo went for Alias 3D modelling software [^4].

## Saturn Express 3.0 (N-World)
Saturn Express by `Nichimen Graphics` is a tool for their 3D modelling software known as `N-World` that allows viewing 3d models on the Saturn hardware itself. It is part of the `GameExpress` suite of tools which include Playstation and N64 versions of the same tools [^3].

## Alias|Wavefront Saturn Games tools
In 1996 Alias|Wavefront announced support for PowerAnimator 7.5 exporters to the Sega Saturn 3D model formats, there were two known tools created for this:  
* Wire to Sega GL Converter [^5]
* General Games Tools Plugins [^5]

PowerAnimator eventually became known as Maya and owned by Autodesk. For more information about the PowerAnimator support for the Sega Saturn check out this post from SegaRetro: 
[PowerAnimator - Sega Retro](https://segaretro.org/PowerAnimator)

## Syndesis Interchange 4.0 
<section class="postSection">
<img src="/public/images/saturn/Interchange.gif" class="wow slideInLeft postImage" />

<div markdown="1">
Interchange 4.0 is software for both PC and SGI workstations that simply converts 3d models from one format to another, it claimed to support over 50 file formats and was useful for developers when changing between software. It doesn't support Sega Saturn formats directly but it was advertised in the official Sega Developmental Newsletter.
</div>
</section>

## GAMUT-SG™ Sega Saturn™ Artist Tools (3DStudio)
GAMUT is a suite of software developed by Animetix for converting `3D Studio` formats to various game consoles, even allowing to preview on the hardware before saving to the export format. 

There was a specific version for Sega Saturn developers called `GAMUT-SG` that could work with the CartDev of PsyQ development kits to preview the 3D models on the Sega Saturn, very useful for artists. 

Especially since the Sega Saturn required geometry to be in Quads and not Polygons, so the artist would need to tweak the output to look better on Saturn hardware. The tweaks to the output were saved in the 3dStudio file format so it could be re-used for further exports [^6].

---
## Shade III Light for Saturn
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Anyone have a spare £999 to preserve the rare Shade III development tools for sega saturn, not much is known about it <a href="https://twitter.com/hashtag/segasaturn?src=hash&amp;ref_src=twsrc%5Etfw">#segasaturn</a> <a href="https://twitter.com/hashtag/devkit?src=hash&amp;ref_src=twsrc%5Etfw">#devkit</a> <a href="https://t.co/iaSrppcgl5">https://t.co/iaSrppcgl5</a></p>&mdash; RetroReversing.com - Reverse Retro Games (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1302526859519971328?ref_src=twsrc%5Etfw">September 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# References
[^1]: [How make 3d objects, for the Saturn, and what programs?](http://segasaturngroup.proboards.com/thread/7994/make-3d-objects-saturn-programs)
[^2]: [History and Versions](https://softimage.fandom.com/wiki/History_and_Versions)
[^3]: [Game Express](https://web.archive.org/web/19970716123150if_/http://www.nichimen.com/PRODUCT-INFO/nworld/game-express/saturn-express.html)
[^4]: Game Developer Magazine June/July 1995
[^5]: Sega Developmental Newsletter from April 1996
[^6]: [Animetix GAMUT-SG](https://web.archive.org/web/19980428083125/http://www.animetix.com/products/gamutsg1.htm)
