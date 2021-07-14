---
layout: post
tags:
- devkit
- hardware
- megadrive
- crossproducts
- snsystems
title: Sega Mega Drive (Genesis) Development Kit Hardware
thumbnail: /public/consoles/Sega Megadrive.png
image: /public/images/megadrive/Sega Mega Drive Genesis Devkit.jpg
twitterimage: https://www.retroreversing.com/public/images/megadrive/Sega Mega Drive Genesis Devkit.jpg
permalink: /sega-mega-drive-genesis-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Mega Drives (Genesis)
    url: /mega-drive
  - name: Sega Mega Drive (Genesis) Development Kit Hardware
    url: #
recommend: 
- devkit
- megadrive
editlink: /sega/Mega Drive/MegaDriveDevkitHardware.md
videocarousel:
  - image: https://img.youtube.com/vi/A9zQueGP4iI/maxresdefault.jpg
    title: Western Technologies Sega Dev Card
    youtube: 'A9zQueGP4iI'
  - image: https://img.youtube.com/vi/GH94fKtGr0M/maxresdefault.jpg 
    youtube: 'GH94fKtGr0M'
  - image: https://img.youtube.com/vi/gLfNgKutK-g/maxresdefault.jpg
    youtube: 'gLfNgKutK-g'
  - image: https://img.youtube.com/vi/aD8kCGBi4wI/maxresdefault.jpg
    youtube: 'aD8kCGBi4wI'
redirect_from:
  - /official-mega-drive-devkit/
  - /sega-dev-card
  - /sprobe-megadrive/
  - /snasm2-cross-products
updatedAt: '2020-11-25'
---
The SEGA Mega drive was released on October 29th 1988 in Japan following with North America almost a year later and Europe another whole year later than that! 

During its lifespan it became incredibly popular especially in Brazillian and European markets where it lasted long after the death of its successor the Saturn.

# Official Development Kits
SEGA provided developers with different options for developing games for the platform throughout the years, starting with their Super Mega Drive and eventually leading to the distribution of Cross Products SNASM development kits.

Below is the photo containing the only information we have on the pricing of the development kit:

<img src="/public/images/megadrive/Mega Drive Price List.jpg" class="wow slideInLeft" />

## Super Mega Drive Development console
<section class="postSection">
    <img src="/public/images/megadrive/Super Mega Drive (top).jpg" class="wow slideInLeft postImage" />
   <img src="/public/images/megadrive/Super Mega Drive (bottom).jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
There is very little information out there about the Super Mega Drive but a manual was leaked thanks to the [techdocs.exodusemulator.com](techdocs.exodusemulator.com) website.

This gives the information that it would be a Mega Drive console with the ability to use a In-circuit emulator such as the ZAX ICE to debug game code.

At first glance it might seem that it was built by Sega Ozisoft due to the copyright notice that is on every page, however there is another version where the copyright notice is instead changed to "The Code Monkeys". 

Both Sega OziSoft and "The Code Monkeys" were games studios that developed games for the Mega Drive, so it is likely that Sega printed different versions of the user manual each with a watermark of the company they sent it to.

It is believed that this was the first development kit that Sega produced in the early years of the Mega Drive and that it was fairly quickly replaced with others such as the Cross Products SNASM.

 </div>
</section> 

There was no known images of this rare development kit online until Phil Bennett (@PhilBennett3D) posted one of my favourite tweets which you can see below:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What&#39;s this? Why it&#39;s a Super Mega Drive, Sega&#39;s Mega Drive development system. (1/) <a href="https://t.co/Jl29Bj3pOw">pic.twitter.com/Jl29Bj3pOw</a></p>&mdash; Phil Bennett (@PhilBennett3D) <a href="https://twitter.com/PhilBennett3D/status/1406684067710394373?ref_src=twsrc%5Etfw">June 20, 2021</a></blockquote>

---
## ZAX ER308 ICE for Z80 (Sound)
<section class="postSection">
    <img src="/public/images/gamegear/Sega ZAX ICE Z80.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The ER308 was a In-Circuit-Emulator (ICE) developed by ZAX  Corporation for developing Z80 assembly programs.

Sega officially distributed these for Sega Mega Drive development due to the sound chip being a Z80 processor [^3].

Interestingly this piece of hardware required not one but two ISA cards to be in a developers PC in order to communicate with the ICE [^3].

The ICE would allow developers to set breakpoints, step through instructions and trace programs but don't expect audio or graphics output, this is literally just for tracing the execution of the CPU to test programs.
 </div>
</section> 

{% include link-to-other-site.html url="https://segaretro.org/Zax_Corporation" description="For more information about the ZAX corporation checkout this excellent Sega Retro page" image="https://segaretro.org/images/2/20/ZaxCorporation_Logo.png" title="Zax Corporation - Sega Retro"  %}

## ZAX ERX 318P ICE for Motorola 68K
<section class="postSection">
    <img src="/public/images/megadrive/Mega Drive ZAX ERX 318P.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
There was another ZAX ICE for the Motorola 68k processor which would provide the same functionality as the Z80 one but for the main Mega Drive processor. This would have most likely been the way most Mega Drive game programmers debugged their main game logic.
 </div>
</section> 


## Mega Drive Loader (171-5734)
<section class="postSection">
    <img src="/public/images/megadrive/Mega Drive Loader.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The SEGA Mega Drive Loader was a connector for transferring data from a developers PC to the Mega Drive console. It connected to the controller port on the console and the printer port of the PC.

It was mainly used for downloading ROM files to the ICE unit to be played on the console.
 </div>
</section> 


## Mega Drive Address Checker (171-6286)

<section class="postSection">
    <img src="/public/images/megadrive/Mega Drive Address Checker.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The SEGA Mega Drive Address Checker was a development tool used to check the integrity of software for the system. It warned the user of any writes to invalid memory addresses, which is a very useful debugging tool and useful for SEGA itself to make sure cartridges are of a quality enough to produce.
 </div>
</section> 


---
## Prototype Cartridges
In order to QA the game and send out promotional copies to magazines or other media publications, prototype cartridges were sold by SEGA that contained slots for EPROMs to be burned.

### 4Meg ROM Board A (171-5694-01)

<section class="postSection">
    <img src="/public/images/megadrive/Mega Drive 4Meg ROM Board A.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The 4Mb ROM board is the most common to find today as it was distributed to media companies, especially games magazines. 

The developer would use an EPROM writer to write each of the chips and then place them inside the cartridge.  
</div>
</section> 


## SEGADEV SRAM Sega Mega Drive Development Cartridge

<section class="postSection">
    <img src="/public/images/megadrive/SEGADEV SRAM Sega Mega Drive Development Cartridge.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The Sega Dev Card by Western Technologies was a  development kit that functioned in a similar way to modern day Flash Cartridges. It connects to the developers PC (running MS-DOS) via a port on the back of the cartridge [^1].

Western Technologies created the 2MB RAM cartridge that was then distributed by SEGA to developers.

This development cartridge has a port on it to connect to a development PC to load data into the RAM chips [^3]. Apparently the two 8KB EPROMS you can see are for a bootloader program. 

So if you are considering buying one of these please remember that there will be no prototype games on them due to it being SRAM based. The data is gone as soon as it is disconnected.</div>
</section> 

<img src="/public/images/megadrive/SEGADEV SRAM Sega Mega Drive Development Cartridge Back.jpg" class="wow slideInLeft" />

The developer could run `SEGALOAD GameName.bin` to load a compiled Sega Mega Drive game ROM file. It can also debug games using breakpoints and memory dumps [^1].

 <iframe class="wow slideInLeft" width="560" height="315" src="https://www.youtube.com/embed/A9zQueGP4iI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Official Development Kits for Mega Drive Addons
The SEGA Mega drive is one of the most upgradable consoles ever on the market due to SEGAs initiatives to keep the hardware up to date with up coming 32-bit systems.

## Sega Virtua Processor (SVP) Dev Board (171-6666A)

<section class="postSection">
    <img src="/public/images/megadrive/Sega Virtua Processor Dev Board.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The Sega Virtua Processor was an additional processor for handling 3D geometry contained inside the mega drive cartridge itself. You can think of this as SEGAs answer to the superFX chip.

In order to develop games that used this new processor, development hardware has to be created with the processor on board. The SVP Dev board was just that, it had the SVP processor along with slots for EPROM chips to be inserted with the custom game code.
</div>
</section> 

## MegaCD CTrac CD Emulation System
<section class="postSection">
    <img src="/public/images/megadrive/MegaCD CTrac CD Emulation System.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The CTrac CD Emulation system was developed by **ICOM Simulations** and distributed officially by SEGA. As the name suggest it emulates a CD drive, instead using the hard drive of the developers PC to stream content to the Mega CD.
</div>
</section> 

This was also used for the Cross Products Mega-CD development kit and you can see more details about both in the following video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gLfNgKutK-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Third Party Development Kits
SEGA were not the only distributer of development kits for the SEGA Mega Drive, British-based companies such as SN Systems and Cross Products dominated the marked in the UK.

## Cross Products SNASM 68000
<section class="postSection">
    <img src="/public/images/megadrive/Cross Products SNASM 68000.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
The SNASM 68K was Cross Products first development kit for a SEGA console and it was hugely popular! So popular that SEGA purchased Cross Products outright and they became the official creator of development kits for every SEGA system since.

SNASM68K was part of an overall product suite known as SNAM which had development kits for most of the major consoles at the time including the SNES.
</div>
</section> 

Note that the SNASM68K was not just development hardware but in fact contained the very popular SDK toolchain also called SNASM68K.

SEGARetro.org has an excellent page on the development kit: [SNASM68K - Sega Retro](https://segaretro.org/SNASM68K)

The SNASM 68K lasted until late 1993 when it was then replaced with version 2 of the suite aptly called SNASM2.

---
## Cross Products SNASM2 Suite
In November 1993 Cross Products teamed up with SEGA to produce the sequel to their popular SNASM68K development kit named SNASM2. 

There were multiple flavours of the SNASM2 development kits, one with a SEGA Mega-CD built in and another for 32X development.

### Cross Products SNASM2 Mega-CD development Kit
The SNASM2 Mega-CD kit is one of the most commonly seen Mega Drive developments kits and has been used recently to create the game **Tanglewood**.

In fact you can even see the Tanglewood developer Matt give an overview of the hardware in a video for Computerphile:
<iframe width="560" height="315" src="https://www.youtube.com/embed/GH94fKtGr0M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For even more details about the Mega-CD development kit check out the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aD8kCGBi4wI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Cross Products SNASM2 32X development kit
In Issue 17 of the UK Magazine **EDGE** there is a full-page advert for the 32X version fo the SNASM2 suite.

<img src="/public/magazine/SNASM2_Edge_UK_017.jpg"> 


---
# Psy-Q Development Kit (Plus 32X support)

<section class="postSection">
    <img src="/public/images/megadrive/Psy-Q Mega Drive Development Kit.jpg" class="wow slideInLeft postImage" />
 <div markdown="1">
SN Systems were a well known company in the UK for producing development kit hardware and so they jumped at the chance to develop a kit for the Sega Mega Drive.

Common to most of their other development kits they tend to be extensions of the retail hardware with custom cartridges placed in the console with a connected to the developers PC for sending ROMS down to the console.
</div>
</section> 

Nicholas Cottrill has some excellent photos of the Psy-Q Mega Drive hardware on his Flickr:
[Psy-Q Mega Drive/Mega CD and 32X by Nicholas Cottrill | Flickr](https://www.flickr.com/photos/icarusnick/6096758782/in/photostream/)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The Mega Drive setup - that card looks sussssssspiciously similar, so I have my hopes up.<br><br>I think this is the setup <a href="https://twitter.com/Psycatic?ref_src=twsrc%5Etfw">@Psycatic</a> used for his Invaders game. <a href="https://t.co/I7teIze9MG">pic.twitter.com/I7teIze9MG</a></p>&mdash; Matt Phillips (@bigevilboss) <a href="https://twitter.com/bigevilboss/status/1142031487317020672?ref_src=twsrc%5Etfw">June 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# In-House development Kits
Even with the wide variety of development kits on the market for the SEGA Genesis some companies prefered to create their own development kits.

## SPROBE (EA)
<section class="postSection">
      <img src="/public/images/megadrive/EA-mega-drive-devkit-sprobe.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Developed for Electronic Arts in 1989, the SPROBE combines a Sega Mega Drive and a development board.

Latching onto the Mega Drive cart interface, it adds a cartridge emulator as well as a debug / development capability using a PC card link.
This hardware is one of the reasons for EA's early dominance in Sega Genesis gaming [^2].

There used to be a video showing off this hardware on Youtube by AssemblerGames, however it has since been deleted.
</div>
</section>


---
# References
[^1]: [Western Technologies Sega Dev Card Demo - YouTube](https://www.youtube.com/watch?time_continue=102&v=A9zQueGP4iI&feature=emb_logo)
[^2]: [Rare video game hardware: The SPROBE Megadrive development system - YouTube](https://www.youtube.com/watch?time_continue=1&v=FTnV2NqQwA8&feature=emb_logo)
[^3]: [ZAX Z80H in-circuit emulator / ER308 / ERX 308P - Forums - SMS Power](https://www.smspower.org/forums/12038-ZAXZ80HInCircuitEmulatorER308ERX308PWasWhatsInADevkitAnyway)
[^4]: [Development Hardware Sega Mega Drive](http://techdocs.exodusemulator.com/Console/SegaMegaDrive/Hardware.html#development-hardware)
