---
permalink: /pc/
layout: post
title: IBM-PC & Compatibles
recommend: pc
recommendTitle: All PC Posts
editlink: ../categories/consoles/PC.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: PC
    url: #
---

# Introduction
Welcome to our page dedicated to PC reverse engineering! PCs are some of the most versatile and widely-used computing platforms in the world, and there's no shortage of interesting and challenging reverse engineering topics to explore. If you're interested in learning more about the technical aspects of PCs and how they work, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PC reverse engineering. Whether you're interested in understanding the hardware architecture of retro CPUs and GPUs, analyzing software at the binary level, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your keyboard and mouse, and get ready to dive into the exciting world of PC reverse engineering!

---
# DOS

## DOS Gaming Aspect Ratio - 320x200
The Youtuber **Displaced Gamers** has an excellent video explaining the common DOS aspect ratio:
<iframe width="560" height="315" src="https://www.youtube.com/embed/YvckyWxHAIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## 32-bit DOS Applications
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EDl9qBZ9Bb0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
The video discusses the 640k memory limitation of DOS and why many DOS games require more than 1MB of memory. The 16-bit x86 architecture used a trick to address up to one megabyte of memory, which became a limitation as software became more complicated. DOS extenders were developed to allow 32-bit memory access with almost no performance penalty, enabling 32-bit games to run on 16-bit MS-DOS. DOS extenders were based on the DPMI specification, providing larger memory access and multitasking capabilities. Developers only needed to know how to use the correct DOS external functions when mode switching was necessary. The use of DOS extenders extended the lifespan of MS-DOS and its legacy is engraved into the memory of classic DOS games, which shaped the video game industry.

---
## DOS Game Modding

### DOS Game Corruption
If You are using a browser-based DOSBox emulator to run your games you can add this bookmarklet to your browser for it to automatically corrupt random memory addresses inside the DOS game:
[jsRTC/jsRTC_for_js-dosbox.txt at master · redscientistlabs/jsRTC](https://github.com/redscientistlabs/jsRTC/blob/master/jsRTC_for_js-dosbox.txt)

---
## DOS Game Reverse Engineering

### REVERSE ENGINEERING STRIKE COMMANDER
Fabien Sanglard has an excellent series iof articles on how he reverse engineered the classic flight simuator **Strike Commander**:
[Reverse Engineering Strike Commander](https://fabiensanglard.net/reverse_engineering_strike_commander/index.php)

---
# MSX
The MSX was a standard introducted by **Microsoft Japan** to make sure no matter which manufacturer build the PC (e.g Sony, Panasonic, Philips) they would all be able to run the same software.
There were three different revisions of the MSX:
* MSX
* MSX2
* MSX Turbo R

## Introduction to the technology of the MSX
The best video I have found on the MSX is by the Youtuber **Displaced Gamers** where he goes through all the variations of the MSX (MSX2 etc) and explains the hardware limitations and the impressive feats developers managed to accomplish on the systems:
<iframe width="560" height="315" src="https://www.youtube.com/embed/AFRf87SqWrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MSX Games
While the MSX system is most famous for Konami games like Vampire Killer (Castlevania) and Metal Gear there are quite a few games worth playing for the system. What better video to show off the MSX games than the **Game Sack** episode on the topic:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4R779hMGGC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# All Posts
<div>

{% include console.html %}
</div>
