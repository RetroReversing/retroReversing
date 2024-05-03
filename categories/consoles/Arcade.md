---
permalink: /arcade/
layout: post
title: Arcade
recommend: arcade
recommendTitle: All Arcade Posts
editlink: ../categories/consoles/Arcade.md
console: 'pc'
consoleimage: /public/consoles/Arcade.png
excerpt: Awesome list of Arcade Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Arcade
    url: #
---

# Game Development at Taito
Taito put together a 250-page Hardware Manual for new developers who joined the team to learn how to create an Arcade game from scratch using RAM/ROM/CPU chips and a standard TV. This was before the internet and even before there were many books on the topic when the industry was very new and companies didn't want to share their "trade secrets".

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">With the Taito Hardware Manual for reference, new engineers were sent out to Akihabara to get some ROM and RAM chips and a CPU, solder them all together onto a test PCB, then write a brick breaker game.<a href="https://t.co/huXblA0rv4">https://t.co/huXblA0rv4</a><a href="https://t.co/CXlnKUPHkH">https://t.co/CXlnKUPHkH</a> <a href="https://t.co/Yip45KbLIE">pic.twitter.com/Yip45KbLIE</a></p>&mdash; Taito Corporation (@TaitoCorp) <a href="https://twitter.com/TaitoCorp/status/1748438175977226708?ref_src=twsrc%5Etfw">January 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

They used an In-Circuit Emulator to debug the programs they were creating as can be seen in this diagram:
![Alt text](/public/images/arcade/TaitoArcadeICE.png)

---
# Defender (1981 by Williams Electronics)
The source code for the classic arcade game from 1981 **Defender** has been released on Github:
[mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)

It is written in a variant of the Assembly language specifically for the Motorola 6809 CPU [^1].

The physical board had 11 ROM chips on it that would need to be flashed with the assembled result of that source code [^1].

Defender was developed by **Eugene Jarvis** and **Larry DeMar** two programmers who utilized algorithms to great effect rather than relying on artists, one such example is the classic explosion particle effect. Defender became one of the highest grossing arcade games in history [^2].

The first issue of the Magazine Wireframe contains a python (pygame) code snippet to re-create the classic particle explosion from Defender [^2].

---
# References
[^1]: [mwenge/defender: Defender(1981) by Eugene Jarvis and Sam Dicker](https://github.com/mwenge/defender)
[^2]: Wireframe Issue 01 page 33
