---
layout: post
tags: 
- 2d
- 3d
- introduction
title: 2D & 3D Graphics Techniques
thumbnail: /public/images/RetroReversingLogoSmall.png
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
---

This is a Work in progress page to list interesting articles on 2D graphics techniques to create cool effects.

# 2D Graphics effects

## How Doom's Melting Screen Works
The YouTuber **decino** has created an excellent video explaining how the 2d melting screen transition works in the original Doom. It is well worth a watch!

<iframe width="560" height="315" src="https://www.youtube.com/embed/lUsCXSNhHmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pseudo 3d Roads
For information on how to create 2D games that look pseudo 3d (e.g outrun) Check out:
[Lou's Pseudo 3d Page](http://www.extentofthejam.com/pseudo/)

---
# 3D Graphics effects

## Sonic R's "Impossible" Fading transparency
The video by [GameHut](https://www.youtube.com/watch?v=FdD0GvVRSMc) provides a technical breakdown of a challenging graphical achievement on the Sega Saturn: implementing transparent object fading despite the hardware's limitations. 

The Saturn's sprite-based polygon rendering caused transparency corruption when polygons were distorted, leading to objects *popping* in, as seen in *Daytona*. The solution involved a clever two-step process called **"twelve layer transparency"**: first, stripping away the polygon's **Gouraud shading** by storing and calculating three additional sets of lighting data [03:43], and then using the Saturn's eight available **color calculation ratio** hardware registers to fade the now-unlit texture over the background [04:07].

<iframe width="560" height="315" src="https://www.youtube.com/embed/FdD0GvVRSMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

