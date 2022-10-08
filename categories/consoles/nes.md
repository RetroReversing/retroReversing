---
permalink: /nes/
layout: post
console: 'nes'
title: 'Nintendo Entertainment System Reverse Engineering'
consoleimage: /public/consoles/Nintendo Entertainment System.png
thumbnail: /public/consoles/Nintendo Entertainment System.png
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Nintendo Entertainment System
    url: #
recommend: nes
recommendTitle: All NES Posts
editlink: ../categories/consoles/nes.md
---

# Introduction
Interested in learning more about the the NES? Excellent! This section will guide you through the basics, starting from basic assembly language all the way to an introduction to reverse engineering your first game!


## Super Mario 'compiler'
The website `neilb.net` has created what it calls a `Mario Compiler` which takes in the original Super Mario Bros ROM and dissassembles it.
The disassembled code is then shown to the user and can then be modified and re-assembled back into a working NES ROM.

{% include link-to-other-site.html url="https://neilb.net/mariocompiler/" description="Check out the Mario compiler here" image="" title="Mario Compiler"  %}

---
# Hardware

## Development Kit Hardware
{% include link-to-other-post.html post="/famicom-nes-development-kit/" description="For information about Nintendo's Famicom development hardware check out this post." %}

## Nintendo (NES) Controller - Electronics
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/dahbvSYV0KA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Have you ever wondered about how a NES controller actually works, such as the circuits and electronic components used to physically create it? Well you are in luck, the Youtuber **Displaced Gamers** explains exactly how the electronics of the NES controller works and a few interesting facts along the way!
He opens up the NES controller revealing the physical wires, traces (green lines on the circuit), rubber membranes and the 8-bit shift register (HD14021BP).
  The Controller as with all electronics has both a Power (High) and Ground (Low) lines, with 5V used for Power. Ground is connected to all of the buttons including the 4 D-pad buttons, whereas the Power lines go straight to the Carbon Printed Pull-Up resistors which then in-turn goes to each of the buttons. When a button is pressed it completes the circuit at that point meaning it is pulled Low (Grounded) which allows the shift register to know that button is pressed. The resistors are used to make sure the power lines are always High, so we can ensure that when a pin is pulled low it has definitely been pressed.
</div>
</section>

---
# Game Modding

## Cheat Cartridges (Game Genie)
The main cheat cartridge available for the NES was the **Game Genie** created by **Codemasters** (Distributed by Galoob & Hornby Hobbies). This was a physical connector that would sit between the NES and the Game Cartridge you wanted to cheat on. It would alter the signals based on which memory addresses were being read/written to in real-time based on the Cheat code that was loaded into the system.

The Game Genie used a special encoding format for its codes which can be encoded and decoded using this handy online tool:
[Game Genie Encoder/Decoder](https://games.technoplaza.net/ggencoder/js/)

---
# All Posts
<div>

{% include console.html %}
</div>
