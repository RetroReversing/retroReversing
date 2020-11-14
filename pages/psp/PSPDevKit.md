---
layout: post
tags: 
- psp
- hardware
- devkit
title: Official PlayStation Portable Development Kit
thumbnail: /public/consoles/Sony PSP.png
image: https://img.youtube.com/vi/F0kLdmOn7aI/maxresdefault.jpg
permalink: /official-psp-devkit
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation Portable
    url: /psp
  - name: Official PlayStation Portable Development Kit
    url: #
recommend: 
  - devkit
  - psp
editlink: /psp/PSPDevKit.md
videocarousel:
  - title: PlayStation Portable (PSP) Development System Showcase!
    image: https://img.youtube.com/vi/Edegy5QUg2M/maxresdefault.jpg
    youtube: 'Edegy5QUg2M'
  - title: Sony PSP development debug hardware the DTP-H1500
    image: https://img.youtube.com/vi/F0kLdmOn7aI/maxresdefault.jpg
    youtube: 'F0kLdmOn7aI'
  - title: Lazy Overview PSP development system DTP H1500
    image: https://img.youtube.com/vi/0Vph-DeosFE/maxresdefault.jpg
    youtube: '0Vph-DeosFE'
updatedAt: '2020-01-11'
---

# Official PSP Development Kit hardware
The hardware supports booting games from both the UMD and DVD drive, the DVD drive can even boot games from standard DVD-R/RW and so many prototype PSP games are actually written on standard rewritable DVDs.

## PSP-1000 Standard Commander Arm
In order to use the DevKit to play games you need a controller, and what better controller than the psp itself! A custom PSP `Controller Arm` was provided with the devkit for such a purpose. It wasn't a real psp and the inside board were very different to a retail psp, it was mainly just an interface for providing button in put and screen output for the developers to see what it would look like on a real psp.
Here is a tear down of the controler hardware by RetroGameTech [^2]:
<iframe width="560" height="315" src="https://www.youtube.com/embed/P_ajF24sfGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## PSP Go Commander Arm
When the PSP Go console came out there was an optional accessory for the development kit to switch the standard PSP controller to a version that is basically a PSP-Go shell with all the PSP chips ripped out and it is pretty much just used as a controller and display.
<img src="/public/images/PSPGoSDK.jpg" />
[^1]

---
## The Testing Tool (DTP-H1500)
The testing tool tower contains both a DVD and UMD drive with a toggle to switch between the two, it contains a slot to insert the PSP memory stick, a usb-mini port, a headphone port and a port to connect the Commander Arm. It also contains a number of DIP switches but it is unclear what each DIP-switch does.

Notice that this does not have an ethernet port so can't be used for debugging unless using the slow usb serial or WLAN interface [^3]
<img src="/public/images/PSPTower.jpg" />

---
## The Development Unit (DTP-T1000)
<section class="postSection">
    <img src="/public/images/DTPT-1000-Front.png" class="wow slideInLeft postImage" />

 <div markdown="1">
The front of the development Unit looks pretty much identical to the Testing tool (DTP-H1500), but on the back it contains an ethernet port to allow debugging with a host PC.

this was the reccomended choice for programmers as it was easy to send code to the development unit via LAN and debug the code by setting breakpoints and viewing mermory/registers.
 </div>
</section> 

<img src="/public/images/DTPT-1000-Back.png" />


## Software Development Kit
Since the development TOOL doesn't have a hard drive and I can't find references to any CDs that contains the development kit files, presumably developers had to logon to the SCE developer website to download the SDK, compilers etc for their PC.


A PSP SDK has never been leaked probably because it was just a download that most people would do and then throw away, much easier to loose than a physical CD like previous Sony SDKs.

# References
[^1]: [SCEE Hardware Overview](http://develop.scee.net/files/presentations/acgirussia/Hardware_Overview_ACGI_09.pdf)
[^2]: [What's Inside? - Sony PSP Development Controller - DTP-H110 - YouTube](https://www.youtube.com/watch?v=P_ajF24sfGc)
[^3]: [Hooking up DTP-H1500 to computer](https://assemblergames.com/threads/help-psp-devkit-hooking-up-dtp-h1500-to-computer.66933/)
