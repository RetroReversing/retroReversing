---
layout: post
tags: 
- ps3
- hardware
- devkit
title: Official PlayStation 3 Development Kit (Hardware)
thumbnail: /public/consoles/Sony Playstation 3.png
image: /public/images/ps3/Sony PS3 Devkit hardware.jpg
permalink: /official-playStation3-devkit
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 3
    url: /ps3
  - name: Official PlayStation 3 Development Kit (Hardware)
    url: #
recommend: 
  - devkit
  - ps3
editlink: /ps3/PlayStation3DevelopmentSystem.md
videocarousel:
  - title: DECR-1000A Official PlayStation Development System
    image: https://img.youtube.com/vi/shr7kbAiyhs/maxresdefault.jpg
    youtube: 'shr7kbAiyhs'
updatedAt: '2020-11-13'
---
This post covers the hardware used to develop Playstation 3 games by major studios back in the day, for the software side see the post on the Official PS3 SDK.

Unlike previous generations, Sony was the only provider of PS3 development hardware, so everyone needed the official development consoles in order to ship for the system.

Similar to previous generations the hardware was split into Testing and Development hardware, each having different capabilities.

The codenames for the different PS3 hardware is as follows:
* CEX - Consumer hardware
* DEX - Development hardware
* SEX - Shop Kiosk hardware

This post only covers DEX development hardware as the other two are well covered on the wider web.

---
# Prototype Development Kits
In order to get vital developer feedback in the early days of the playstation 3 development process as few evaluation systems were sent out to developers to get their feedback. Presumably because Sony knew that the Cell architecture and SPUs of the PS3 would be challenging for developers to get used to and they wanted to make the development kits as user friendly as possible.

## Shreck (First Cell Evaluation System) (CEB-1000)
<section class="postSection">
    <img src="/public/images/ps3/PS3 Devkit - Shreck.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first prototype development kit was called "Shreck" and was used to give a select few developers insight into how to program for the system. 

It did not contain the final CPU or GPU used for the PS3 as the hardware had not yet been finalised but the purpose of this machine was to get feedback on the developer experience.

This was crucial as this was the first time most game developers will have used the Cell PowerPC Architecture and SPUs.
 </div>
</section> 

### Technical specifications
**GPU**: GeForce GTX 7800
**CPU**: Cell 2.4GHz
**DRAM**: 256MB

{% include link-to-other-site.html url="https://www.psdevwiki.com/ps3/SKU_Models_Nonretail#CEB_Series" description="For more information about the technical specs of the Shreck checkout this page on the PS Dev Wiki" image="https://www.psdevwiki.com/ps3/images/9/91/CEB-1000-X.png" title="CEB Series - PS3 Developer wiki"  %}

## Cytology (PS3 Evaluation System) (CEB-2000)
<section class="postSection">
    <img src="/public/images/ps3/PS3 Devkit - Cytology.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Cytology was the second prototype development kit with its main enhancement being the upgraded DRAM to 512MB as opposed to the 256MB in the previous model.

Both **Shreck** and **Cytology** were released sometime in spring 2005 and presumably only sent out to first party developers. So there was not much time between the releases of each version, with the main difference being the amount of DRAM available.
 </div>
</section> 



### Technical specifications
**GPU**:  GeForce GTX 7800
**CPU**: Cell 2.4GHz
**DRAM**: 512MB

{% include link-to-other-site.html url="https://www.psdevwiki.com/ps3/SKU_Models_Nonretail#CEB_Series" description="For more information about the technical specs of the Cytology checkout this page on the PS Dev Wiki" image="https://www.psdevwiki.com/ps3/images/7/70/CEB-2040G2_-_image3.jpg" title="CEB Series - PS3 Developer wiki"  %}

---
# Reference Tools (TOOL)
The **Reference Tool** or just TOOL for short was the main development kit used by programmers to build and debug new games. For testing and QA there was an alternative development kit available known as the **Debug Station**.

## DECR-1000A/J Reference Tool
<section class="postSection">
    <img src="/public/images/ps3/PS3 DECR-1000A Reference Tool.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first non-prototype release of the full development kit was the DECR-1000A/J otherwise known as the **Reference Tool**.

It is a very large machine that was aimed to be kept horizontal and rack-mountable (think server rack in data centres). Although there was also a vertical stand for anyone that didn't want to rack mount it or just keep it horizontal.
 </div>
</section> 


### Hard Drives
You can have up to 2 (3.5 inch) hard drives, one was used for the Firmware/Operating system and the other one would be used as a Virtual Blu-ray drive [^1].

This saves time as you didn't need to keep burning a Blu-ray disk for every build of the game you want to run. It would waste a lot of time and burning can be notoriously flakey.

### Floor Pedal/switch
There was also a `Floor switch` to create an instant core dump for debugging purposes.

### Connectivity
In order to connect to your development PC there was a `DEV LAN` ethernet port so you could run and debug right from your PC's IDE.

{% include link-to-other-site.html url="https://www.psdevwiki.com/ps3/DECR-1000" description="For more information about the this model of the PS3 development kit, check out this page on the PS Dev Wiki" image="https://www.psdevwiki.com/ps3/images/thumb/d/d0/Sony_PlayStation_3_DECR-1000A_Reference_Tool_800GB.jpg/800px-Sony_PlayStation_3_DECR-1000A_Reference_Tool_800GB.jpg" title="DECR-1000 - PS3 Developer wiki"  %}


---
## DECR-1400 Reference Tool
<section class="postSection">
    <img src="/public/images/ps3/PS3 DECR-1400 Reference Tool.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Unlike the absolute monster that was the DECR-1000A/J, Sony released a newer version that was almost exactly the same hardware as the retail PS3 Slim model.

So it had the 65nm RSX graphics chip and the 45nm Cell processor, however it also had a few extra ports for connecting to a developers PC (LAN port) and double the RAM.

The firmware and kernel for this PS3 console is completely different however as it has built in developer features.
 </div>
</section> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/xBh-pJYl9Ps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



---
# Debug Station (TEST) (DECH-*)
For QA and testing of in-production games the TOOL would be too expensive and overkill for the process so Sony released another development kit called the Debug Station for PS3.

## Fat PS3 Test (DECH-A00A) 
<section class="postSection">
    <img src="/public/images/ps3/Fat PS3 Test.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first debug station made available to developers was very similar to the retail fat PS3 models, the main difference is that it is not only region free but can also play burned Blu-ray discs [^4].
 </div>
</section> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/EspjhSulJgU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Slim PS3 Test (DECH-2000A)
<section class="postSection">
    <img src="/public/images/ps3/Slim PS3 Test.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
When the PS3 slim was released, Sony also re-vamped the PS3 TEST units which are basically the same hardware as the original slim PS3 but with the same Blu-ray features as the previous TEST unit. 
 </div>
</section> 



---
## AV Tool (DECHSA00A/J) 
<section class="postSection">
    <img src="/public/images/ps3/PS3 AV Tool.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The AV (Audio/Video) Tool systems were sold to studios primarily to test upcoming Blu-Ray films. They are not capable of playing PS3 game as they were never intended for this purpose [^2].

These were available at the Sony dev site:
[https://www.scedev.net/blu-ray/](https://www.scedev.net/blu-ray/)

 </div>
</section> 



---
# DTCP-IP Debugger (DECH-3000A/J) (dtcpipdevdex)
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/P_0SD8DN0Hw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div markdown="1">
This console is used for debugging Video content played on the Playstation 3 which use the DTCP protocol for copyright protection. Internally the hardware is the same as the 3rd generation Slim debugging stations.

One difference however is the firmware, it does not support the regular debugging firmware and instead uses its own firmware.
 </div>
</section> 

---
# References
[^1]: [(Massive!) PS3 Development System - DECR-1000A Reference Tool - YouTube](https://www.youtube.com/watch?v=shr7kbAiyhs)
[^2]: [AV Testing tool DECHSA00A - ASSEMBLERgames.org](https://assemblergames.org/viewtopic.php?t=4287)
[^3]: [SKU Models Nonretail - PS3 Developer wiki](https://www.psdevwiki.com/ps3/SKU_Models_Nonretail#DECR_Series)
[^4]: [DECHAxx - PS3 Developer wiki](https://www.psdevwiki.com/ps3/DECHAxx)
[^5]: [Playstation 3 Devkit Unboxing & Preview! - YouTube](https://www.youtube.com/watch?v=mu-O14xhSfY)
