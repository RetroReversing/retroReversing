---
layout: post
permalink: /maths
category: maths
recommend: maths
recommendTitle: All Maths Posts
title: Maths for Game Developers
breadcrumbs:
  - name: Home
    url: /
  - name: Maths for Game Developers
    url: #
redirect_from:
  - /maths/
  - /math
editlink: ../categories/misc/Maths.md
tags:
  - maths
---

# Vectors
{% include_cached link-to-other-post.html post="/Vectors" description="For more information on Vectors check out this post." %}

# Matrices (Matrix)
For an introduction to matrices we have a post on that topic:
{% include_cached link-to-other-post.html post="/Matrix" description="For more information on Matrices check out this post." %}

## View Projection Matrix 

### Reversing The ViewProjection Matrix (Game Engine Reversing)
The **zero-irp** blog features a comprehensive series by **z1rp** on the advanced topic of **game engine reverse engineering**, focusing specifically on dissecting the construction of the **View-Projection Matrix**. 

This multi-part write-up systematically covers the foundational math of 3D transformation matrices (View and Projection), techniques for finding and reversing these matrices in a running game, and detailed analysis of **SIMD instructions** for matrix math. The series concludes with applications like **trampoline hooking** to capture entity positions and explaining **World To Screen (W2S)** transformations.

{% include link-to-other-site.html url="https://zero-irp.github.io/ViewProj-Blog/" description="z1rp presents a deep technical series on reverse engineering an AAA game's rendering pipeline, covering 3D matrix math, tracing matrix construction, and reversing SIMD operations." image="https://zero-irp.github.io/ViewProj-Blog/images/view-projection-matrix-diagram.png" title="Reversing The Construction Of The View-Projection Matrix (Game Engine Reversing)" %}

---
# Quaternions
{% include_cached link-to-other-post.html post="/Quaternions" description="For more information on Quaternions check out this post." %}

---
# Harmonic Analysis
Harmonic Analysis is a major area of mathematical analysis that focuses on how functions—whether they are signals, images, or sound—can be decomposed and reconstructed using simpler, oscillating building blocks like sine and cosine waves.

## How I released a game that has no assets using Sine Waves
In this project, [Zanzlanz](https://www.youtube.com/@zanzlanz) builds a fully functional game, *Crow Sign*, without using any traditional image, audio, or animation assets. Instead, the game generates all graphics, sound, music, and gameplay loops in real-time using sine waves and Fourier transform principles. The result is a highly compressed, mathematically generated experience that demonstrates the creative potential of fundamental wave physics in game development.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qr3VsZYQy4s?si=bfYtgv8iclIKINb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here are the key techniques used by the developer:
* **Fourier Transform:** This is the core algorithm used to convert shapes and audio into frequency data, essentially breaking down complex inputs into a series of **sine wave frequencies**. 
* **Discrete Cosine Transform (DCT):** Used in the game’s in-game **JPEG shader** to simulate image compression by converting pixel groups into sine waves and discarding less important frequencies.
* **Frequency Modulation (FM) Synthesis:** Used to create complex sound effects, such as simulated noise and instrument textures, by modulating the pitch of one sine wave with another.
* **ADSR Envelopes:** Applied to audio to control the volume shape (Attack, Decay, Sustain, Release) of sound effects like balloon pops.
* **Hyperbolic Tangent:** Employed to create the specific **infinitely squished visual effect** seen in the mini-map and heads-up display, drawing inspiration from *MC Escher*.

---
# All Posts
<div>

{% include console.html %}
</div>
