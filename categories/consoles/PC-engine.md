---
layout: post
permalink: /pc-engine
title: PC-Engine
breadcrumbs:
  - name: Home
    url: /
  - name: PC-Engine
    url: #
editlink: ../categories/consoles/PC-engine.md
_image: /public/images/consoles/PC-Engine.jpg
_twitterimage: https://www.retroreversing.com/public/images/consoles/PC-Engine.jpg
tags:
 - pc-engine
 - introduction
recommend:
 - pc-engine
 - introduction
_updatedAt: '2025-02-15'
---
# Introduction to the PC-Engine

Sakharu Baguette has created an excellent documentary which explores the history of the PC Engine (known as the TurboGrafx-16 in North America), detailing its rise as a major rival to Nintendo in Japan and its struggle to find footing in the US [^1].

<iframe width="560" height="315" src="https://www.youtube.com/embed/ow13aO1OmJM?si=ZbrFdQnzaX3oSFsF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## How were games distributed for the PC-Engine?
Instead of bulky cartridges, games were released on **HuCards** (credit-card-sized chips), which were cheaper to make and futuristic for the time.

## How did the PC Engine work?
**Retro48K** has an excellent video diving in to the low level details of the PC engine hardware:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ngpq_uuMQhw?si=IcOjh75ucSOqbKku" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What CPU did the PC-Engine use?
The PC-Engine used the 8-bit **Hudson Soft HuC6280**, an enhanced **65C02** derivative running at selectable 1.79 or 7.16 MHz. It added a memory management unit for bank switching, integrated timers and IRQ handling, and simple I/O functions, making it a compact but efficient control CPU for the system.

---
# Hardware

## Retail Hardware
If you're interested in learning more about the hardware architecture of the NES, we highly recommend checking out the post on **Copetti.org**.

{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/pc-engine/" description="Copetti.org has an excellent page on the Hardware and how it works"  title="PC-Engine Hardware Architecture - A Practical Analysis" %}

## Consumer Development Hardware

### Develo box
The **Develo box** was a development kit sold to consumers allowing development of PC-Engine software via either an interface that can connect to either the MSX or PC-9801 [^2].

From the book "The untold history of Japanese Game Developers Volume 2" we can see a photo of the Develo Box in action:
<img width="593" height="360" alt="Develo Box connected to a PC-Engine" src="https://github.com/user-attachments/assets/272ba723-7527-4897-94c8-48391ac121c5" />

There were two books released for the plaform, one for assembly language and the other for basic, you can find out more on [Develo Books](http://www.interlog.com/~daves/develo.html)
<img width="1110" height="846" alt="Assembly Language Develo Book beside the Develo Box" src="https://github.com/user-attachments/assets/f9ea96aa-e9fe-495d-91d7-6f0d68c98547" />


---
# Sound on the PC-Engine
Interview with **Takayuki Hirono** where he explains the differences between the sound capabilities of the Famicom compared to the PC-engine:
[An Interview with 8ing and developers from Compile and TechnoSoft - YouTube](https://www.youtube.com/watch?v=_gop6t8B4HY)

---
# References
[^1]: [The PC-Engine Chronicles, the unexpected success of an unusual console - A TurboGrafx-16 Documentary](https://www.youtube.com/watch?v=ow13aO1OmJM)
[^2]: [Tokuma Shoten Intermedia - DEVELOでべろBOX - Generation MSX](https://www.generation-msx.nl/hardware/tokuma-shoten-intermedia/develobox/1708/)
