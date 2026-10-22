---
layout: post
tags: 
- 2d
- 3d
- introduction
title: 2D & 3D Graphics Techniques
category: sourcecode
permalink: /2d-graphics
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: 2D & 3D Graphics Techniques
    url: #
redirect_from:
 - /2d
 - /3d-graphics
recommend: 
  - 2d
  - 3d
  - introduction
editlink: /pages/SourceCode/graphics/Awesome2DTechniques.md
updatedAt: '2026-10-21'
---

This is a Work in progress page to list interesting articles on 2D graphics techniques to create cool effects.

# 2D Graphics effects

---
## Mega Drive graphics tricks
[GameHut](https://www.youtube.com/watch?v=o8qgArSqMsc) explains how a Mega Drive graphics glitch could be used to produce an image effect. This is an example of software deliberately exploiting hardware behaviour.

<iframe width="560" height="315" src="https://www.youtube.com/embed/o8qgArSqMsc" title="How a SEGA GLITCH created stunning images" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## How Doom's Melting Screen Works
The YouTuber **decino** has created an excellent video explaining how the 2d melting screen transition works in the original Doom. It is well worth a watch!

<iframe width="560" height="315" src="https://www.youtube.com/embed/lUsCXSNhHmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pseudo 3d Roads
For information on how to create 2D games that look pseudo 3d (e.g outrun) Check out:
[Lou's Pseudo 3d Page](http://www.extentofthejam.com/pseudo/)

---
# 3D Graphics effects

---
## Sonic special stages
[GameHut](https://www.youtube.com/watch?v=z1mcLXEJTkA) examines the rendering tricks behind Sonic's special stages. The explanation is useful when distinguishing an apparent 3D scene from the operations used to draw it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/z1mcLXEJTkA" title="Sonic&#x27;s Special Stage Tricks Revealed - and it&#x27;s not what you think... (Coding Secrets)" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
## Mickey Mania's chase sequence
[GameHut](https://www.youtube.com/watch?v=nt-AxAqlrOo) breaks down the 3D-style chase in Mickey Mania. The sequence provides another example of creating depth within a 16-bit console's graphics limits.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nt-AxAqlrOo" title="Mickey Mania&#x27;s &quot;Impossible&quot; 3D Chase - How Was It Done?" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

---
## Toy Story's pseudo-3D rendering
[GameHut](https://www.youtube.com/watch?v=IhMMK3QLxSM) explains how Toy Story produced a 3D-style sequence on the Mega Drive. It is a useful companion to the other examples of building depth from limited rendering hardware.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IhMMK3QLxSM" title="CODING SECRETS! How TOY STORY&#x27;S 3D was programmed" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Sonic R's "Impossible" Fading transparency
The video by [GameHut](https://www.youtube.com/watch?v=FdD0GvVRSMc) provides a technical breakdown of a challenging graphical achievement on the Sega Saturn: implementing transparent object fading despite the hardware's limitations. 

The Saturn's sprite-based polygon rendering caused transparency corruption when polygons were distorted, leading to objects *popping* in, as seen in *Daytona*. The solution involved a clever two-step process called **"twelve layer transparency"**: first, stripping away the polygon's **Gouraud shading** by storing and calculating three additional sets of lighting data [03:43], and then using the Saturn's eight available **color calculation ratio** hardware registers to fade the now-unlit texture over the background [04:07].

<iframe width="560" height="315" src="https://www.youtube.com/embed/FdD0GvVRSMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

