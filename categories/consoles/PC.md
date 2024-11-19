---
permalink: /pc/
layout: post
title: IBM-PC & Compatibles
recommend: pc
recommendTitle: All PC Posts
editlink: ../categories/consoles/PC.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
excerpt: Awesome list of IBM PC Game Development and Reverse Engineering information
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
# DOS Game Reverse Engineering

## Reversing DOS games with CicoParser
CicoParser is a tool that helps convert old DOS programs to run on modern computers. Instead of emulating the entire DOS system, it translates the program's assembly code into C code. This makes the program run much faster and allows for easier modification and improvement of the original application.

You can find it on Github:
[Education/2021/CicoParser at master · gabonator/Education](https://github.com/gabonator/Education/tree/master/2021/CicoParser)

Here is a video from the author:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4fAeUx8A-OE?si=w45EcMxhSPX2rLi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Reverse Engineering Strike Commander
Fabien Sanglard has an excellent series of articles on how he reverse engineered the classic flight simulator **Strike Commander**:
[Reverse Engineering Strike Commander](https://fabiensanglard.net/reverse_engineering_strike_commander/index.php)

## Carmageddon 
Thanks to debug symbols being found in the **Carmageddon Splat Pack** expansion and the amazing work of the community there is now a reversing project for Carmageddon called **Dethrace**.
[dethrace-labs/dethrace: Reverse engineering the 1997 game "Carmageddon"](https://github.com/dethrace-labs/dethrace?tab=readme-ov-file)

---
## DOS Gaming Aspect Ratio - 320x200
The Youtuber **Displaced Gamers** has an excellent video explaining the common DOS aspect ratio:
<iframe width="560" height="315" src="https://www.youtube.com/embed/YvckyWxHAIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## 32-bit DOS Applications
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EDl9qBZ9Bb0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
The video discusses the 640k memory limitation of DOS and why many DOS games require more than 1MB of memory. The 16-bit x86 architecture used a trick to address up to one megabyte of memory, which became a limitation as software became more complicated. DOS extenders were developed to allow 32-bit memory access with almost no performance penalty, enabling 32-bit games to run on 16-bit MS-DOS. DOS extenders were based on the DPMI specification, providing larger memory access and multitasking capabilities. Developers only needed to know how to use the correct DOS external functions when mode switching was necessary. The use of DOS extenders extended the lifespan of MS-DOS and its legacy is engraved into the memory of classic DOS games, which shaped the video game industry.

### Real Mode
Real mode is a processor mode in the x86 architecture where the CPU can directly access the first 1MB of memory. In real mode, the CPU uses 16-bit registers and addresses memory using 20-bit addresses that are formed by combining a 16-bit segment address with a 16-bit offset address. Real mode is the default mode of operation for the x86 CPU, and it was used in early versions of MS-DOS.

### Protected Mode
Protected mode is another processor mode in the x86 architecture that allows the CPU to access more than 1MB of memory, up to 4GB. Protected mode uses a different memory addressing scheme, called linear addressing, where memory is addressed using 32-bit addresses. Protected mode also provides hardware-based memory protection and multitasking capabilities, which make it suitable for modern operating systems like Windows and Linux. Protected mode is used by modern operating systems, and it requires a transition from real mode to enter this mode of operation.

### DOS Extenders
DOS extenders work by extending the 16-bit real mode of the x86 architecture to allow 32-bit applications to run on the platform. In real mode, applications can only access up to 1MB of memory. DOS extenders enable applications to access more memory by running in protected mode, which allows them to use up to 4GB of memory.

DOS extenders operate by adding an additional layer between the application and the operating system. This layer intercepts certain system calls made by the application and provides additional functionality. The extender provides a set of APIs that allow the application to access memory beyond the 1MB limit and other system services that are not available in real mode.

The DOS extender typically consists of a small loader program and a runtime library that is linked with the application. When the application is launched, the loader program loads the extender and initializes it. The extender then sets up a protected mode environment and transfers control back to the application, which can now use 32-bit instructions and access more memory.

The use of DOS extenders allows applications to take full advantage of the capabilities of the x86 architecture, and it played a crucial role in the development of early PC games. DOS extenders were particularly important for games that required a lot of memory and high-performance graphics, as they allowed developers to create games that pushed the limits of the platform.

#### DPMI - DOS Protected Mode Interface
DPMI stands for "DOS Protected Mode Interface" It is a specification that provides a way for DOS applications to run in protected mode, which allows them to access more memory and run more efficiently. DPMI was developed in the late 1980s and early 1990s, during a time when the transition from 16-bit to 32-bit computing was taking place. DPMI provides a set of services that allow DOS applications to run in a protected environment, including virtual memory management, task switching, and interrupt handling. It was used extensively in the development of DOS extenders, which allowed 32-bit applications to run on DOS systems. The DPMI specification was widely adopted and helped to extend the life of the DOS platform well into the 1990s.

DPMI was created by Microsoft in the late 1980s as part of their work on the Windows 3.0 operating system. It was developed to standardize the use of DOS extenders and allow applications using them to run under the protected mode environment of Windows 3.0.

#### Popular DOS Extenders
Some popular DOS extenders include:
* **DOS4GW** - bundled with the Watcom C/C++ compiler, and used by many popular games such as Doom and Duke Nukem 3D.
* **CauseWay** - an open-source extender that was designed to be small and fast.
* **CWSDPMI** - a DPMI implementation for use with the DJGPP compiler.
* **DOS/32A** - an extender designed for use with the Borland C/C++ compiler.
* **DOS/4G** - a commercial extender used by many games and applications.

---
## DOS Game Modding

### DOS Game Corruption
If You are using a browser-based DOSBox emulator to run your games you can add this bookmarklet to your browser for it to automatically corrupt random memory addresses inside the DOS game:
[jsRTC/jsRTC_for_js-dosbox.txt at master · redscientistlabs/jsRTC](https://github.com/redscientistlabs/jsRTC/blob/master/jsRTC_for_js-dosbox.txt)

---
# Windows
Windows has played a significant role in the world of PC gaming, offering a vast and diverse library of video games spanning various genres and styles. 

In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, gaming transitioned to a more user-friendly and graphical environment, but many DOS games continued to run using compatibility features provided by Windows. 

The Windows platform offers backward compatibility for DOS games, allowing enthusiasts to relive the nostalgia of classic titles from the DOS era. This compatibility, along with the vast library of modern Windows-based games, showcases the ongoing role of Windows as a versatile and enduring platform for gamers.
 
## Windows Executable File Formats (NE,LE and PE)
We have seperated out the information on Windows executable (exe) file formats into its own post:
{% include link-to-other-post.html post="/WindowsExecutables" description="For more information on Windows Executables check out this post." %}


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
