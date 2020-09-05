---
layout: post
tags: 
- n64
title: N64 RDP - Reality Display Processor
image: /public/N64/N64 Reality Display Processor.jpg
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64rdp
breadcrumbs:
  - name: Home
    url: /
  - name: N64
    url: /n64
  - name: N64 RDP - Reality Display Processor
    url: #
recommend: n64
editlink: /n64/N64RDP.md
updatedAt: '2020-04-25'
---

# Introduction
<section class="postSection">
    <img src="/public/N64/N64-RCP-Decapped.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Unlike most PC hardware at the time the Nintendo 64 has the advantage of having its own stand alone graphics processor known as the `Reality Co-Processor` (RCP). This freed up the main CPU from having to do any graphics calculations and it could use all its processing power for the main game logic.

The RCP is actually split into two distinct parts one for the Geometry transformations known as the `Reality Signal Processor` (RSP) and the other for the Per-pixel calculations known as the `Reality Display Processor` (RDP).


The N64 Reality Display Processor (RDP) is used to render the Nintendo 64's game polygons into 2D pixels that it stores in the FrameBuffer ready to be displayed on the screen [^1].

The functionality of the RDP was first described in an interview with `George Zachary` in the magazine `Next Generation` where he described the processor as the big advantage over the Playstation hardware as it allowed advanced features such as Texture Perspective correction which Sony's hardware could not perform efficiently [^4].

The RDP is used after the Reality Signal Processor has processed its calculations, so you can think of the RSP as a sort of Vertex Shader and the RDP as a sort of Pixel Shader [^2].

</div>
</section>

{% include link-to-other-post.html post="/n64rsp" description="For more information about the second half of the RCP known as the Reality Signal Processor check out this post." %}

---
# Purpose of the RDP
The main purpose of the Reality Display Processor was to rasterise polygons into pixels that can be displayed on the screen.
But it can also be used for a variety of effects:
* Anti-Aliasing
* blending
* Mip-mapping
* Texturing (including perspective correction)
* Trilinear Interpolation
* Z-buffering


## Anti-Aliasing
<iframe width="560" height="315" src="https://www.youtube.com/embed/QDiHgKil8AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One of the main advantages the N64 had over its competitors was its hardware accelerated Anti-Aliasing. Anti-Aliasing is a technique that makes the graphics look a lot smoother by removing the "jaggies" which are caused by pixels drawing a line in low resolution.

While this was a great feature when the N64 was released, people wanting to play N64 on more modern hardware started to hate the blurring effect of Anti-Aliasing. So there have been a number of ways to remove the Anti-Aliasing such as game modifications, game shark cheat codes and hardware modifications.

## Z-buffering
<iframe width="560" height="315" src="https://www.youtube.com/embed/HyVc0X9JKpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Z-buffering is vital for 3D game engines for perspective, without it 3d models would just be displayed on the screen in the order you draw them. No matter where they are supposed to be in the 3D scene. 

This was all handled by the N64's Reality Display Processor as it handles it on a per-pixel basis. You can even visualise the z-buffer as a black and white image of pixels that have already been written.

---
# Components of the RDP
The RDP is built up of a number of sub-components such as memory for Texture data (TMEM), Lookup tables for textures (TLUT) and display lists that hold the result of the RSP's calculations on the vertices.

## TLUT (Texture Lookup Table)
TLUT stands for Texture Look up table and is stored in TMEM (Texture Memory). The first 2kb of the 4kb TMEM will be the texture look up table if it is used.

## Texture Memory (TMEM)
The Texture Memory (TMEM) located in the RDP can store up to 8 textures (tiles) at one time.

## Display Lists (DP)
Just like Microcode is used to program the Reality Signal Processor (RSP), display Lists are used to program the Reality Display Processor (RDP).

Although whether these are really programs is debatable, you can change the functionality similar to the openGL concept of `glTexEnv` but at its core its a fixed-function pipeline.

Display Lists might be similar to a binarized OpenGL display list format for models but this is unconfirmed [^2].

---
# Emulating the RDP
One of the biggest problems with N64 emulation to date is that the RDP is not emulated at a low level. 

Instead High Level Emulation or HLE is used, which involves approximating the functionality required instead of accurately emulating the behaviour of the physical chip. 

There are many benefits to the High level approach, specially the faster speed, but it will never be as accurate as proper low-level emulation.

By High Level emulation we mean that the emulator checks which uCode is used for a specific game and instead of running the uCode with a CPU-like emulator it just runs various graphics commands directly.

Low level emulation would be emulating each opcode in the uCode [^1].

## Rendering in Low Level Emulation Mode
One of the developers of the N64 emulation plugin `GLideN64` known as `gonetz ` has written an excellent series of posts about the difficulties: implementing Low Level Emulation of the N64s RDP.

[GLideN64: Rendering in Low Level Emulation mode. Part I.](http://gliden64.blogspot.com/2019/10/rendering-in-low-level-emulation-mode.html?m=1)
[GLideN64: Rendering in Low Level Emulation mode. Part II](http://gliden64.blogspot.com/2019/11/rendering-in-low-level-emulation-mode.html?m=1)


---
# References
[^1]: [N64 RDP/RSP](https://forum.beyond3d.com/threads/n64-rdp-rsp.15758/)
[^2]: [N64 object software renderer in 512 lines](https://news.ycombinator.com/item?id=16138583)
[^3]: [Chapter 4 - Runtime Software Architecture](http://ultra64.ca/files/documentation/online-manuals/man-v5-1/pro-man/pro04/04-05.htm)
[^4]: [NEXT Generation Issue #14 February 1996 : Imagine Media : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/details/nextgen-issue-014/page/n9)
