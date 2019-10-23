---
layout: post
tags: 
- n64
- worldeditor
title: Super Mario 64
thumbnail: /public/consoles/Nintendo 64.png
youtube: "4d5OsHRo7Nc"
image: /public/fE8SrXMPgHkCwy4NDQWZQ_img_0.png
permalink: /super-mario-64/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Super Mario 64
    url: #
recommend: n64
editlink: /n64/SuperMario64.md
---

# Introduction to Super Mario 64
<section class="postSection">
<img src="/public/N64/SuperMario64(USA).png" class="wow slideInLeft postImage" />

<div markdown="1">
The Game was made by Nintendo EAD and was released in Europe on March 1st, 1997. 
The development team consisted of 2 System programmers and 3 main programmers with additions from `Giles Goddard` responsible for the Mario face at the beginning and `Takumi Kawagoe` responsible for the camera programming [^1].

The source code is almost completely written in C and compiled with IDO C compiler 5.3.
</div>
</section>

# Modding Tools

## Super Mario 64 World Editing
<section class="postSection">
<img src="/public/fE8SrXMPgHkCwy4NDQWZQ_img_0.png" class="wow slideInLeft postImage" />

<div markdown="1">

You can use the program called "Toad's Tool" to edit the 3D worlds for the game Mario 64. It’s quite a simple tool, it allows you to view each world and edit the x,y,z coordinates of each object.

Also contains basic functionality for texture editing.
</div>
</section>

---
# Decompilation
Super Mario 64 was blown wide open when a full decompilation of the source code was acheived by a team of talented individuals.

The project can be rebuilt with the correct version of the IDO C compiler through QEMU-IRIX to produce a byte-identical ROM of the retail game for both North America and Japan. 

This allows anyone with basic c-knowledge to hack around and change core gameplay elements, make the game easier/harder/add new mechanics etc.

## Introduction to the Decompilation project
Mountainflaw has released a tutorial that covers the basics of the Decompilation project and is the best way to get started for newcomers:
[Introduction to Super Mario64 Decomp](https://mountainflaw.github.io/assets/page/intro.html)

## Checking out the Code
The project is released on Github: [GitHub - n64decomp/sm64: A Super Mario 64 decompilation, brought to you by a bunch of clever folks.](https://github.com/n64decomp/sm64) and can be built on linux and windows but for mac you will need to use something like docker.

```bash
git clone https://github.com/n64decomp/sm64.git
```

---

# References
[^1]: [Super Mario 64 Credits](https://nintendo.fandom.com/wiki/Super_Mario_64/credits#)
