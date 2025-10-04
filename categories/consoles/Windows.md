---
permalink: /pc/
layout: post
title: Awesome list of Windows 3.x+ Reverse Engineering and Game Development information
recommendTitle: All Windows PC Posts
editlink: ../categories/consoles/Windows.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
excerpt: Awesome list of Windows 3.x+ Reverse Engineering and Game Development information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: PC
    url: #
tags:
  - pc
recommend:
  - pc
  - dos
  - msx
---

# Introduction
Welcome to our page dedicated to PC reverse engineering! PCs are some of the most versatile and widely-used computing platforms in the world, and there's no shortage of interesting and challenging reverse engineering topics to explore. If you're interested in learning more about the technical aspects of PCs and how they work, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PC reverse engineering. Whether you're interested in understanding the hardware architecture of retro CPUs and GPUs, analyzing software at the binary level, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your keyboard and mouse, and get ready to dive into the exciting world of PC reverse engineering!

## DOS PC Game Reverse engineering
Note that if you are interested in reversing DOS era PC games we have a seperate post on that topic:
{% include link-to-other-post.html post="/dos" description="For more information on reversing DOS games check out this post." %}

## MSX PC
Note that if you are interested in the MSX PC we have a seperate post on that topic:
{% include link-to-other-post.html post="/msx" description="For more information on the MSX check out this post." %}

---
# Hardware

## Graphics Hardware

### How does the industry make sure there is compatibility between different manufactures of Graphics hardware?
This is where the The **Video Electronics Standards Association** (VESA) comes in, VESA's primary mission is to develop and promote open standards for the display industry, ensuring interoperability and enhancing the user experience across various devices. Without their standards your PC wouldn't even boot if it wasn't compatible with the motherboard.

### What are the different Graphics/Video Card ports?
Over the years there have been a few different standard ports for Video cards:
* **Industry Standard Architecture** (ISA) port - 1981+ Available as 8-bit PC Bus and 16-bit AT Bus
  ![ISA 16-Bit AT Bus](https://github.com/user-attachments/assets/cd6a9e7d-84b1-4ccc-bb05-8882bd9ad7b2)
  ![ISA 8-Bit PC Bus](https://github.com/user-attachments/assets/d2ac4f52-e189-4b45-8468-af2d63f05b6e)
* **VESA Local Bus** (VLB) - 1992+
  ![VLB](https://github.com/user-attachments/assets/0fb24a12-088b-49b4-8aac-efbf369981a9)
* **Peripheral Component Interconnect** (PCI) port - 1992+
* **Accelerated Graphics Port** (AGP) - 1997+
* **PCI Express** (PCIe) - 2004+

There were many motherboards that supported multiple different ports at once such as ISA 16-bit, 8-bit and VLB, thanks to [Juan Linietsky on Twitter
](https://x.com/reduzio/status/1832339488611107221)!

---
# Windows
Windows has played a significant role in the world of PC gaming, offering a vast and diverse library of video games spanning various genres and styles. 

In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, gaming transitioned to a more user-friendly and graphical environment, but many DOS games continued to run using compatibility features provided by Windows. 

The Windows platform offers backward compatibility for DOS games, allowing enthusiasts to relive the nostalgia of classic titles from the DOS era. This compatibility, along with the vast library of modern Windows-based games, showcases the ongoing role of Windows as a versatile and enduring platform for gamers.
 
## Windows Executable File Formats (NE,LE and PE)
We have seperated out the information on Windows executable (exe) file formats into its own post:
{% include link-to-other-post.html post="/WindowsExecutables" description="For more information on Windows Executables check out this post." %}

## Finding other games using a similar dll
Sometimes games have their engine code in a seperate dll file, in such cases it can be useful to find other games that use the same dll file as they might have additional debug information, one good way to find other games using: [Diskmaster search](https://discmaster.textfiles.com/search?q=bg.dll&extension=.dll&family=executable&sizeMin=1024&dedup=dedup&sortBy=ts&limit=10&showItemName=showItemName)

It is a tool that mirrors various CD-ROM images uploaded by archive.org by users, allowing you to search by filenames and by contents inside disc images, unlike the default archive.org search!

---
## Windows Game Engines
The best way to see the wide range of game engines available for PC is to check out the SteamDB section which catalogs all the games by the game engines/libraries used to create them:
[Technologies - SteamDB](https://steamdb.info/tech/)

## Networking with winsock
If you are looking to reverse games from the late 1990s then it can sometimes be useful to see tutorials that were posted online during that time, **flipCode** had a good multi-part series on writing networking code [flipCode - Network Game Programming](https://web.archive.org/web/19990909174312/http://www.flipcode.com/network/)

---
## NVIDIA Tech Demos
NVIDIA's first tech demo can be traced back to the early years of the company. One notable early demo was showcased in 1999, featuring the GeForce 256, which was NVIDIA's first GPU. This demo highlighted the advanced capabilities of the GeForce 256, such as hardware transform and lighting, which were groundbreaking features at the time. 

Since then, NVIDIA has consistently released tech demos to showcase the capabilities of its new GPU architectures and technologies, these can be downloaded on their website and reverse engineered to see how they work [^3].

If you don't want to download and run each one you can watch this video by **Game Evolutions** showing off every demo from 1999 to 2022:
<iframe width="560" height="315" src="https://www.youtube.com/embed/jVoV2VysX3M?si=meImKQclk6YpLbOr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The UK Magazine Game Maker has an interview with Daniel Hornick, Hubert Nguyen and Curtis Beeson which described the process of creating these demos from concept to 3D art (in Maya) to code (in C++ or MEL) which is worth reading if you can find a copy [^4]. It describes techniques used in the production of the demos **Time Machine**, **Last Chance Gas Ultra**, **Ogre**, **Toys** and **Vulkan**.

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: PSi2 Issue 19
[^2]: [All Sony hardware that they developed - Generation MSX](https://www.generation-msx.nl/company/sony/14/hardware/)
[^3]: [Download NVIDIA Tech Demos - NVIDIA Cool Stuff](https://www.nvidia.com/en-gb/geforce/community/demos/)
[^4]: GameMaker UK Magazine Issue 1 October 2003 by Future Publishing
[^5]: [Juan Linietsky](https://x.com/reduzio/status/1832339488611107221)
