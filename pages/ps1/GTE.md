---
layout: post
tags: 
- ps1
- hardware
- sdk
title: Playstation 1 Geometry Transformation Engine (GTE)
thumbnail: /public/consoles/Sony Playstation.png
image: /public/GTE.jpg
permalink: /ps1-gte
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: Playstation 1 Geometry Transformation Engine (GTE)
    url: #
recommend: ps1
editlink: /ps1/GTE.md
---
The Geometry Transformation Engine (GTE) is a co-processor attached to the main processor, specifically designed to do fast maths operations.Since it is the second co-processor of the PS1 it is also called Cop2.

It is ideal for the mathematics required to do calculations in 3D space, as it is much faster than the main cpu for these sort of calculations.

Some of the main uses for the GTE are:
* 3D Rotation/Translation/Projection calculations
* Fogging calculations
* Lighting calculations
* Colour calculations

The PSY-Q development environment exposes the gte functionality to programmers using a bunch of functions and assembly instructions that start with gte_, for example gte_ncdt().
