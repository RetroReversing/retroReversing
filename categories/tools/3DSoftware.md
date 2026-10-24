---
layout: post
permalink: /3d-software
category: 3d
breadcrumbs:
  - name: Home
    url: /
  - name: Development Tools
    url: /
redirect_from:
  - /3d
editlink: ../categories/tools/3DSoftware.md
title: 3D Software used in Retro-era Game Development
updatedAt: '2026-10-19'
recommend:
 - 3d
 - software
 - tools
tags:
 - 3d
 - software
 - tools
---

# Introduction
A game's 3D artwork might survive as an editable scene, an exported mesh, a runtime model or nothing more than a rendered movie.
Those files tell different parts of the production story.
This hub follows the modelling and animation tools used from the 1990s into the early 2010s, with original documentation and surviving toolchains that help make sense of their output.

---
# From Modelling Software to Game Assets
An editable scene is not necessarily a game-ready model.
Exporters, conversion scripts and build instructions show which parts of a scene reached the engine.
In *Quake II*, for example, a compiler reads triangle data and writes an MD2 model rather than shipping the author's scene file [^2].

The following sources show what survives at different stages of a 3D pipeline:

Tool or pipeline | Evidence to inspect | What it tells you
---|---|---
Quake II qdata | Base mesh, animation frame files and `models.c` | How triangle input becomes an MD2 model [^2]
Doom 3 model export | `.ase` or `.lwo` props; Maya `.mb` scenes, `.def` export blocks and MD5 character files | Why static and animated models leave different evidence [^7]
SOFTIMAGE 3D Design Toolkit for Saturn | Exported files and target preview tools | How artists checked textures and geometry for the console [^3]
LightWave 6 object files | `FORM` and `LWO2` header, surface and image chunks | Object structure and dependencies that may be missing from an archive [^4]

## Quake II's Model Compiler
The released [Quake II tool source](https://github.com/id-Software/Quake-2-Tools/blob/master/qdata/models.c) gives a concrete example of the conversion step.
In `models.c`, the base mesh and animation frames can be read through either `LoadTriangleList` or `Load3DSTriangleList`.
Frame lookup supports names such as `run.1` and `run1.tri`; the default model output is `tris.md2` [^2].

The compiler rejects an animation frame when its triangle count differs from the base mesh.
So a set of frames can look intact in isolation yet fail as a model sequence [^2].
The `FindFrameFile` function and triangle-count error in the source show where those checks happen.

---
## Why Does a Doom 3 Archive Have Several Model Formats?
The [original *Doom 3* model-export guide](https://iddevnet.dhewm3.org/doom3/modelexport.html) separates static props from animated characters.
The engine can load `.lwo` LightWave objects and `.ase` 3ds Max exports as static models.
For characters, the documented route starts with Maya binary `.mb` scenes and uses `exportModels` to produce `.md5mesh` and `.md5anim` files [^7].

The export declarations live in `.def` files: `mesh` and `anim` entries name their Maya inputs, while options can set a frame range or destination [^7].
That makes a `.def` file a useful bridge between source scenes and the MD5 files found in game data.
Static models have a different dependency to watch: the guide derives material names from texture paths embedded in the export, so a moved `.ase` file may have intact geometry but broken material references [^7].
The released [*Doom 3* source README](https://github.com/id-Software/DOOM-3/blob/master/README.txt) also identifies the included Maya export plug-in code; it does not include the game's art assets [^8].

---
# How Were 3D Game Cut Scenes Developed?
Prerendered cutscenes play back finished images; real-time cutscenes ask the game engine to draw each frame.
Offline rendering can spend longer on a frame, but the finished video cannot reveal an editable mesh, rig or lighting setup on its own.
An archive of original scenes tells a different story from one containing only rendered frames or the encoded movie.

Modelling and animation packages such as 3D Studio Max, Maya and Softimage are separate from compositing tools, which combine rendered layers and effects.
The existing [community discussion of 1990s cutscene software](https://news.ycombinator.com/item?id=34305515) is useful for research leads, rather than proof of a particular game's production setup [^1].

## Compositing and Animation Tools
Compositing packages worth looking for in production records include Combustion, Quantel Henry, After Effects, Nuke and Fusion.
The version and contemporary vendor matter when identifying an installation; a product's later branding does not date an old project.
NaturalMotion's morpheme belongs to the animation-middleware side of the investigation, rather than a list of offline renderers.
A game's credits, project files or developer account make a stronger case for any particular tool than a general software list.

---
# 3D Art Software
These modelling packages each left distinctive documentation and development files.

## 3D Studio (Max)
The distinction between a native scene and an exchange file matters when examining 3D Studio material.
Quake II's `Load3DSTriangleList` path is evidence of an importer in the toolchain, not proof that every compatible input was originally authored in 3D Studio [^2].
The dedicated page covers the DOS-era tools and the later Max line:
{% include_cached link-to-other-post.html post="/3d-studio-max" description="3D Studio and 3D Studio Max in game development." %}

## Maya
Maya and its predecessor tools belong to a longer history of workstation-based modelling and animation.
For the history of Alias PowerAnimator and Maya in game development, see:
{% include_cached link-to-other-post.html post="/maya" description="Alias PowerAnimator, Maya and their use in game production." %}

## Softimage and the Saturn Design Toolkit
[Sega's September 1995 Developer News](https://antime.kapsi.fi/sega/files/DTS-0995.pdf) describes a SOFTIMAGE 3D Design Toolkit tailored to the [Saturn](/saturn).
It offered Saturn-format export and a viewer based on SGI IRIX and Saturn CartDev, alongside interactive colour reduction, texture painting and UV-coordinate editing.
The newsletter specifies SGI workstations running IRIX 5.2 or 5.3 [^3].

Artists could adjust textures and inspect the exported result on target hardware before it entered a game.
The newsletter also pins this toolkit to specific software and workstations; a generic Softimage installation would not tell the same story.

## LightWave
The [LightWave SDK object-format specification](https://documentation.help/LightWave/lwo2.html), dated 9 November 2001, documents `LWO2`, introduced with LightWave 6.0.
A file starts with `FORM`, a four-byte big-endian size equal to the file length minus eight, and then `LWO2`.
That header distinguishes this version from other `.lwo` files [^4].

Objects contain points, polygons and surfaces, but surfaces can also reference external images, plug-ins and animation envelopes.
If a recovered model opens without its textures, the references may be broken even when the artwork survives elsewhere.
The SDK's [annotated object-file examples](https://documentation.help/LightWave/lwo2ex.html) provide small files to compare against a hex dump [^4].

### LightWave Used by Team17 for Worms on the Amiga
[Retro Recipes](https://www.youtube.com/watch?v=rcyHqJ6ZHXs) explores an original *Worms* development [Amiga](/Amiga) 4000 with developer Chris Blythe.
The recovery shows LightWave animation files, full-motion video assets and unreleased artwork on the machine's ageing drives.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcyHqJ6ZHXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Other 3D Art Software
Some packages changed names between releases, complicating the search for their old project files and documentation.

## 3D-Brush (Later 3DCoat)
3D-Brush was created by **Andrew Shpagin**, who had previously worked at GSC.
In a [2018 interview with the Pilgway team](https://www.cgtrader.com/blog/pilgway-talk-about-the-ethics-in-3d-and-hint-at-a-new-major-release-of-3dcoat-in-the-next-12-months-2018-05), the developers describe its origin as a character-texturing tool and date the first $70 sale to 2007 [^5].

Shpagin's [3D-Coat 2.07 announcement](https://3dcoat.com/forum/index.php?/topic/878-3d-coat-207-released/), posted on 10 March 2008, explains the rename: the 3D-Brush name was too close to ZBrush for trademark registration.
Existing users could carry over their serial numbers, and he described installing over the earlier version to retain brushes, materials and settings [^6].
These details help connect installations bearing the two names; they do not establish which commercial games used the early tool.

This screenshot from the old 3d-brush.com website shows the 1.82 Beta interface:
![3d-Brush 1.82](https://github.com/user-attachments/assets/6531ba92-5fed-4e49-9df3-4cf2172043ff)

## Visual Reality
Visual Reality 2.0 by Visual Software remains a research lead.
The [archived Visual Software website from November 1999](https://web.archive.org/web/19991128081032/http://www.vissoft.com/) is retained here as a starting point; a dated manual, catalogue or developer account would be needed to establish a specific game-production workflow.

---
# References
[^1]: [Ask HN What software was used to make 90s cutscenes?](https://news.ycombinator.com/item?id=34305515) - community research leads.
[^2]: [id Software - Quake II Tools, qdata/models.c](https://github.com/id-Software/Quake-2-Tools/blob/master/qdata/models.c).
[^3]: [Sega DTS Developer News, September 1995](https://antime.kapsi.fi/sega/files/DTS-0995.pdf), page 2, "New Version has a Saturn Ring".
[^4]: [LightWave SDK - Object Files](https://documentation.help/LightWave/lwo2.html), 9 November 2001, and [Object File Examples](https://documentation.help/LightWave/lwo2ex.html).
[^5]: [CGTrader interview with Andrew Shpagin and Stanislav Chernyshuk](https://www.cgtrader.com/blog/pilgway-talk-about-the-ethics-in-3d-and-hint-at-a-new-major-release-of-3dcoat-in-the-next-12-months-2018-05), 23 May 2018.
[^6]: [Andrew Shpagin - 3D-Coat 2.07 released](https://3dcoat.com/forum/index.php?/topic/878-3d-coat-207-released/), 10 March 2008.
[^7]: [id Software - Making DOOM 3 Mods: Model Exporting](https://iddevnet.dhewm3.org/doom3/modelexport.html), including static models, Maya animation export and material paths.
[^8]: [id Software - DOOM 3 source release README](https://github.com/id-Software/DOOM-3/blob/master/README.txt), "Game data and patching" and "MayaImport".
