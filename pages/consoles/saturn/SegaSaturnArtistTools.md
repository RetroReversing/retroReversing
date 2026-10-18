---
layout: post
tags:
- tools
- saturn
- sega
title: Sega Saturn Artist Tools
category: saturn
image:  /public/images/saturn/Sega Saturn Artist Tools.jpg
permalink: /sega-saturn-artist-tools
redirect_from:
  - /sega-saturn-artist-tools/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Artist Tools
    url: #
recommend: saturn
editlink: /consoles/saturn/SegaSaturnArtistTools.md
updatedAt: '2026-10-18'
---
<!-- cspell:words Softimage Animetix descrip SSMonitor HrcToSg3 SGT Cinepak -->

This post will cover the most commonly used tools by artists when developing assets for Sega Saturn games, including 2D, 3D and Video.

# 2D Art Software
<section class="postSection">
<img src="/public/images/saturn/SegaSaturnGraphicAndSoundTools.jpg" style="width:200px" class="wow slideInLeft postImage" />
<div markdown="1">
￼The Sega Saturn had multiple tools available for 2D asset creation, most were third party but SEGA even created their own basic first party tools that they distributed to developers for the Apple Macintosh.
</div>
</section>

## MapEditor (Mac)
<section class="postSection">
<img src="/public/images/saturn/SegaMapEditor.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **1.81E**

Import File Formats supported:
 * PICT
 * DGT2
Export File Formats supported:
 * 2D (Sega2D)

The MapEditor allows importing PICT/DGT2 image files and placing them on a 'map'. Areas of pixels are imported from the files and called 'characters'. The result would be scroll data for the game. So you can think of this tool similar to a tile editor, where screens are made up of individual tiles.

Sega's [MapEditor and ScreenEditor manual](https://antime.kapsi.fi/sega/files/MapEdit.pdf) describes the distinction more precisely: MapEditor works in **2-cell by 2-cell character** units, while ScreenEditor works in **1-cell by 1-cell** units. Both read PICT or DGT2 images and save SEGA2D data [^7].
￼
</div>
</section>

## ScreenEditor 
Latest Version: **1.07E**

Import File Formats supported:
 * PICT
 * DGT2
Export File Formats supported:
 * 2D (Sega2D)

Similar to MapEditor but with a character/tile and cell size of 1. So it is more for generating a screen scroll one cell at a time.

## QuickViewer 
Latest Version: **3.17US**

QuickViewer sends a selected region of the Macintosh screen to a Saturn target display, regardless of which Mac application created the image. The manual for version 3.17E lists the Target Model-S Graphics Box and CartDev as compatible targets; its High Resolution option is enabled with CartDev. That makes it a quick check of how artwork looks on the actual video output, rather than a file-format converter [^8].

## Sega2DViewer (SGL_RUN.exe)
<section class="postSection">
<img src="/public/images/saturn/SEGA2DViewer.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Latest Version: **1.0US**

File Formats supported:
 * 2D (Sega2D)

The Sega2DViewer is an application that only works with the CartDev development kit, it basically just displays the output of the MapEditor/ScreenEditor Sega2D files on the Sega Saturn Hardware.
</div>
</section>

---
## SegaConverter 
<section class="postSection">
<img src="/public/images/saturn/SEGAConverter.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Latest Version: **4.83E**

File Formats supported:
 * PICT
 * DGT
 * RGB
 * BOB

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
 * PICT
 * DGT2
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
 * DGT2

The SpriteEditor works in conjunction with the SegaPainter, in that it imports the output and merges multiple images/sprites into what it called `patterns`.
The preserved SpriteEditor ReadMe explains that it registers sprites and assembles them into patterns, with a list used to select sprites and patterns for editing [^9].
</div>
</section>

---
## PhotoShop Plug-Ins
There were 6 plugins provided for Photoshop on the Sega Saturn Art Tools for Macintosh CD.


---
# Video Software
The [1994 Authoring Environment Guide](https://antime.kapsi.fi/sega/files/ST-091-R1-062794.pdf) places movies alongside graphics, sound, and a content library in Sega's production flow. Material passed through authoring tools, a program, and a CD emulator before it reached the Saturn [^13]. That makes the video tools below part of a larger edit-and-test loop, not just standalone compressors.

{% include article-figure.html src="/public/images/saturn/dts/dts-authoring-workflow-1994.webp" alt="Sega's 1994 Saturn authoring workflow linking planning, graphics, sound, a content library and movies to authoring tools, program, CD emulator and Saturn" width="1165" height="740" title="From edit suite to target hardware" caption="Production-flow diagram cropped from Sega's [Authoring Environment Guide](https://antime.kapsi.fi/sega/files/ST-091-R1-062794.pdf), PDF p. 7." %}

The guide sketches several budgets. Its low-cost example names a Macintosh AV with at least 32 MB of RAM, a 500 MB host disk, and an external disk of at least 1 GB; a larger setup uses a Quadra, capture and VTR-control boards, and faster SCSI storage. For a Cinepak route it shows video capture, Macintosh editing with Premiere or another editor, *Movie to Saturn* conversion, then CD-emulator testing [^13]. These are recommended 1994 setups, not minimum requirements for every Saturn project.

## TrueMotion 3.5 (Video)
TrueMotion is a Video compression format developed by `The Duck Corp.` similar to `Cinepak` or `Mpeg`, but higher quality than the former and less efficient than the latter. This was fairly widely used in Sega Saturn games to show full motion video due to the extra space on the Sega Saturn CDs.

SegaRetro has an excellent article about Truemotion, including a list of games that used it: [TrueMotion - Sega Retro](https://segaretro.org/TrueMotion)

## Cinepak Library 1.21 and Tools
Cinepak is similar to TrueMotion, it is a video compression format developed by SuperMatch for displaying Full Motion Video in early CD-based games.

SegaRetro has an excellent article about Cinepak for Saturn including the list of games using it: [Cinepak - Sega Retro](https://segaretro.org/Cinepak).

---
# 3D Software
In order to create 3D assets for the Sega Saturn there were multiple packages that developers could buy, the one Sega promoted was Softimage but N-World, 3DStudio and Alias/Wavefront PowerAnimator all supported exporting to the Sega Saturn 3D Model formats.

## Designing for one texture per face
Sega's [SGL Programmer's Tutorial](https://antime.kapsi.fi/sega/files/ST-237-R1-051795.pdf) shows why an artist could not simply drape one texture across a whole model. SGL's visible face is a four-vertex polygon, and each face receives one texture. Artwork meant to continue across adjacent faces had to be divided into a matching set of textures [^14]. That adds seams and asset bookkeeping to what looks like one painted surface.

The same tutorial shows a second surprise: a texture is reshaped to fit its polygon rather than clipped to the polygon's outline. A square texture on a rectangular face stretches, and a four-vertex face made triangular by repeating a vertex squeezes the image into that triangle [^14]. Keeping the source artwork's aspect ratio close to the intended face was one way to limit distortion. These are SGL's documented authoring rules, not evidence that every game's renderer kept Sega's source texture files.

{% include article-figure.html src="/public/images/saturn/dts/dts-sgl-texture-shaping.webp" alt="SGL tutorial diagrams showing a texture divided across multiple polygons and a square texture stretched to fit a nonrectangular polygon" width="1040" height="1425" size="document" title="The art had to fit the face" caption="Texture-application and shaping diagrams cropped from the [SGL Programmer's Tutorial](https://antime.kapsi.fi/sega/files/ST-237-R1-051795.pdf), PDF p. 117. The following page discusses matching texture and polygon aspect ratios." %}

## Sega 3DEditor 
<section class="postSection">
<img src="/public/images/saturn/Sega3DEditor.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Latest Version: **1.72US**

The Sega 3DEditor was a very simple 3D viewer which allowed some basic modifications to 3d models. Developers could use this software to add textures to their 3D models or use basic RGB colours to each quad.


File Formats Supported:
 * SEGA3D
 * DXF
</div>
</section>

The archived [3D Editor 1.72US ReadMe](https://antime.kapsi.fi/sega/files/3DEdit.pdf) shows the small, practical decisions behind that description: pick the connected Saturn target, then set colour on a polygon in a separate dialog [^12]. These are cropped interface illustrations from the original manual.

{% capture dts_editor_controls %}
{% include article-figure.html src="/public/images/saturn/dts/dts-3d-editor-target-dialog.webp" alt="Sega 3D Editor target selection dialog listing a Saturn CartDev connection and 320 by 224 screen size" width="895" height="585" title="Choose the target" caption="The [3D Editor 1.72US ReadMe](https://antime.kapsi.fi/sega/files/3DEdit.pdf), PDF p. 3, shows a Saturn CartDev among the targets." %}
{% include article-figure.html src="/public/images/saturn/dts/dts-3d-editor-colour-dialog.webp" alt="Sega 3D Editor colour selector with red green and blue controls" width="1060" height="320" title="Set a polygon colour" caption="Colour-selector detail from the [same ReadMe](https://antime.kapsi.fi/sega/files/3DEdit.pdf), PDF p. 19." %}
{% endcapture %}
{% include article-gallery.html figures=dts_editor_controls compact=true %}

---
## Windows 95 Graphics Tools and their sample models
The later Windows 95 package joined **3D Editor**, **Map Editor**, and **SS Monitor**. The monitor sent a model or scroll screen through CartDev to the Saturn, making a television preview part of the editing loop [^11]. The [preserved package](https://antime.kapsi.fi/sega/files/WGT_10J.zip) includes the tools and real sample assets: `.SG3` models, `.SGT` texture sets, bitmaps, and JPEG textures. Its manual lists `sonic3.sg3` as a 214-polygon sample with 12 textures, alongside a 464-polygon `mt_sonic.sg3` [^11]. Those are SDK examples, not evidence that either file shipped in a retail game.

The package's bitmap samples give a more immediate feel for the workbench than a file listing. `BEACH.BMP` is a horizon and layout guide, `DINO.BMP` is a small pixel-art character, and `SUNSET.BMP` is a painted landscape. They are original tool samples from `Sample/MAP_SAM`, not screenshots of a released game [^11].

{% capture dts_wgt_samples %}
{% include article-figure.html src="/public/images/saturn/dts/dts-wgt-sample-beach.webp" alt="Original BEACH.BMP Saturn SDK map sample with blue sky and sea over a marked sand layout" width="512" height="512" title="Beach layout" caption="`Sample/MAP_SAM/BEACH.BMP` in the [Windows 95 Graphics Tools archive](https://antime.kapsi.fi/sega/files/WGT_10J.zip)." %}
{% include article-figure.html src="/public/images/saturn/dts/dts-wgt-sample-dino.webp" alt="Original DINO.BMP pixel-art dinosaur sample from the Saturn graphics tools" width="112" height="80" title="Dinosaur sprite" caption="`Sample/MAP_SAM/DINO.BMP` in the [same archive](https://antime.kapsi.fi/sega/files/WGT_10J.zip)." %}
{% include article-figure.html src="/public/images/saturn/dts/dts-wgt-sample-sunset.webp" alt="Original SUNSET.BMP painted purple sunset landscape from the Saturn graphics tools" width="576" height="451" title="Sunset artwork" caption="`Sample/MAP_SAM/SUNSET.BMP` in the [same archive](https://antime.kapsi.fi/sega/files/WGT_10J.zip)." %}
{% endcapture %}
{% include article-gallery.html figures=dts_wgt_samples columns="3" compact=true %}

The manual records a useful preview trap. Some sample models use collapsed vertices to make concave quads. The Windows editor renders triangles, so these quads can look wrong on the PC even though the Saturn or SS Monitor displays them correctly. The `.SG3` model also stores texture reference numbers, allowing a different `.SGT` texture set to change a character's appearance without changing its geometry [^11]. That is a concrete reason to inspect the model, texture set, and target-hardware preview together.

The manual's file-format notes are helpful when sorting recovered assets:

Tool | File operations
---|---
3D Editor model window | Opens `.SG3`; saves `.SG3` or `.MDL`
3D Editor texture list | Opens `.SGT`, imports BMP or JPEG; saves `.SGT` or `.TXR`, exports BMP, SGL, or TIFF
Map Editor | Opens `.S2D`, imports BMP or JPEG; saves `.S2D` or SGL `.MAP`, `.CEL`, and `.PAL` data

---
## Softimage
Most games that use 3D models used an SGI workstation such as the SGI Indigo and used the Softimage software [^1]. In fact Sega announced in January 1995 that it was partnering with Softimage to make it the official 3D modelling package for the Sega Saturn [^2].

<iframe width="560" height="315" src="https://www.youtube.com/embed/SkgatzeLrlk?start=769" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Softimage was enhanced to allow exporting to the Sega Saturn 3d model formats.
The September 1995 DTS newsletter describes the Saturn-specific toolkit in more detail: a Saturn format exporter, an IRIX viewer linked to CartDev, interactive colour reduction, texture painting with 3D projection, and UV coordinate editing. Those steps show a practical loop from the modelling workstation to a target console [^10].

The same issue follows Sega's Creative Support Art Group replacing textures in an unnamed game approaching its deadline. Its rooms looked flat, while some existing textures "chattered" or showed bright hot spots on Saturn. Artists played a current build to find the problem surfaces, rendered new control-screen and wall-panel textures, checked them on the console, attached them to polygons, and then checked the results in the game [^10]. This was a loop between the running build and the art tools, not a one-way export step.

{% include article-figure.html src="/public/images/saturn/dts/dts-creative-support-art-1995.webp" alt="September 1995 DTS Developer News page showing Sega's Creative Support Art Group and its texture replacement workflow" width="1082" height="1400" size="document" title="A production deadline, seen from the art desk" caption="[DTS Developer News, September 1995, p. 1](https://antime.kapsi.fi/sega/files/DTS-0995.pdf) describes texture problems in an unnamed Saturn game. Select the original page to enlarge." %}

This console generation was interesting in terms of games companies choosing their preferred 3D modelling packages, Sega and Nintendo went for competing 3D modelling packages, so while Sega went with SoftImage, Nintendo went for Alias 3D modelling software [^4].

## Saturn Express 3.0 (N-World)
Saturn Express by `Nichimen Graphics` is a tool for their 3D modelling software known as `N-World` that allows viewing 3D models on the Saturn hardware itself. It is part of the `GameExpress` suite of tools which include Playstation and N64 versions of the same tools [^3].

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
Interchange 4.0 is software for both PC and SGI workstations that simply converts 3D models from one format to another, it claimed to support over 50 file formats and was useful for developers when changing between software. It doesn't support Sega Saturn formats directly but it was advertised in the official Sega Developmental Newsletter.
</div>
</section>

## GAMUT-SG™ Sega Saturn™ Artist Tools (3DStudio)
GAMUT is a suite of software developed by Animetix for converting `3D Studio` formats to various game consoles, even allowing to preview on the hardware before saving to the export format. 

There was a specific version for Sega Saturn developers called `GAMUT-SG` that could work with the CartDev of PsyQ development kits to preview the 3D models on the Sega Saturn, very useful for artists. 

Especially since the Sega Saturn required geometry to be in Quads and not Polygons, so the artist would need to tweak the output to look better on Saturn hardware. The tweaks to the output were saved in the 3DStudio file format so it could be re-used for further exports [^6].

---
## Shade III Light for Saturn
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Anyone have a spare £999 to preserve the rare Shade III development tools for sega saturn, not much is known about it <a href="https://twitter.com/hashtag/segasaturn?src=hash&amp;ref_src=twsrc%5Etfw">#segasaturn</a> <a href="https://twitter.com/hashtag/devkit?src=hash&amp;ref_src=twsrc%5Etfw">#devkit</a> <a href="https://t.co/iaSrppcgl5">https://t.co/iaSrppcgl5</a></p>&mdash; RetroReversing.com - Reverse Retro Games (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1302526859519971328?ref_src=twsrc%5Etfw">September 6, 2020</a></blockquote> 

---
# References
[^1]: [How make 3D objects, for the Saturn, and what programs?](http://segasaturngroup.proboards.com/thread/7994/make-3d-objects-saturn-programs)
[^2]: [History and Versions](https://softimage.fandom.com/wiki/History_and_Versions)
[^3]: [Game Express](https://web.archive.org/web/19970716123150if_/http://www.nichimen.com/PRODUCT-INFO/nworld/game-express/saturn-express.html)
[^4]: Game Developer Magazine June/July 1995
[^5]: Sega Developmental Newsletter from April 1996
[^6]: [Animetix GAMUT-SG](https://web.archive.org/web/19980428083125/http://www.animetix.com/products/gamutsg1.htm)
[^7]: Sega, [MapEditor 1.81E / ScreenEditor 1.07E ReadMe](https://antime.kapsi.fi/sega/files/MapEdit.pdf), preserved under `docs/core/descrip/graphics/MapEdit.pdf` in the DTS mirror.
[^8]: Sega, [QuickViewer 3.17E ReadMe](https://antime.kapsi.fi/sega/files/QkViewer.pdf), `Introduction`, `Restrictions`, and `Basic Operations`.
[^9]: Sega, [SpriteEditor ReadMe](https://antime.kapsi.fi/sega/files/SprEdit.pdf), `Introduction` and interface description.
[^10]: Sega, [DTS Developer News, September 1995](https://antime.kapsi.fi/sega/files/DTS-0995.pdf), pp. 1-2.
[^11]: Sega DTS, [SS-SDK Windows 95 Graphic Tools Manual and Reference](https://antime.kapsi.fi/sega/files/WGT_MAN.pdf), pp. 4-6 and 12-14; accompanying [WGT_10J.zip](https://antime.kapsi.fi/sega/files/WGT_10J.zip), `Sample/SG3_SAM` and `Sample/MAP_SAM`.
[^12]: Sega DTS, [Sega 3D Editor 1.72US ReadMe](https://antime.kapsi.fi/sega/files/3DEdit.pdf), PDF pp. 3 and 19.
[^13]: Sega, [Authoring Environment Guide](https://antime.kapsi.fi/sega/files/ST-091-R1-062794.pdf), 1994, pp. 3-6 on the production flow, hardware examples, and Cinepak route.
[^14]: Sega, [SGL Developer's Manual: Programmer's Tutorial](https://antime.kapsi.fi/sega/files/ST-237-R1-051795.pdf), "Texture application" and "Texture Shaping," PDF pp. 117-118.
