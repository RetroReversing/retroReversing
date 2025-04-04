---
permalink: /psp/
layout: post
title: Sony Playstation Portable (PSP)
recommend: psp
recommendTitle: All PSP Posts
editlink: ../categories/consoles/PSP.md
console: 'psp'
consoleimage: /public/consoles/Sony PSP.png
thumbnail: /public/consoles/Sony PSP.png
excerpt: Awesome list of Sony Playstation Portable Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sony Playstation Portable
    url: #
---
# Introduction
Welcome to our page dedicated to PSP reverse engineering! The PlayStation Portable, or PSP, was a popular handheld gaming console released by Sony in 2004. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PSP reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your PSP, and get ready to dive into the exciting world of PSP reverse engineering!

---
# Hardware
When announced the PSP was claimed to be as powerful as the PS2 and while it was certainly a very powerful system and the most impressive portable console on the market, it didn't quite reach the performance of it's home console sibling.

The PSP was made up of:
* Dual Core MIPS 32bit CPU with SIMD Matrix coprocessor
* GPU with embedded memory (Fixed Function Pipeline)
* Sound processing on second CPU core

## Retail Hardware
For an in-depth look at the Playstation Portable's Retail hardware architecture check out the excellent post by **Copetti.org**:

{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/playstation-portable/" description="Check out the page on Copetti.org" image="/public/consoles/Sony PSP.png" title="PlayStation Portable Architecture - A Practical Analysis"  %}

### ALLEGREX CPU
The main CPU in the PSP was the ALLEGREX.

### VFPU - Vector Floating-point processor
The VFPU operates as a coprocessor for ALLEGREX it is a 128-bit vector floating-point processor.

Operates synchronously with ALLEGREX's clock (However, the write buffer operates at the bus clock speed.)

Equipped with 32 **128-bit** matrix registers
Designed for vector and matrix calculations (The minimum access unit is 32 bits.)

Capable of high-speed processing for geometry calculations, audio processing, and more.

---
## Development Hardware
We have a seperate post all about the development hardware used to make PSP games:
{% include link-to-other-post.html post="/official-psp-devkit" description="For more information on the development hardware check out this post." %}


---
# PSP Game Software Devleopment

## SN Systems ProDG SDK
There was a custom Software Development kit that was created by **SN Systems** before they got bought by Sony in 2005. It was later included in the official SDK when Sony bought the company.

{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information on the SN Systems SDK check out this post." %}

## File Formats

Some file formats used in the creation of PSP games:
* GIM - 2D Image Texture format similar to TIM on PS1
* GMO - 3D model format

---
# All Posts
<div>

{% include console.html %}
</div>
