---
layout: post
tags: 
- devkit
- hardware
- megadrive
title: Sega Mega Drive (Genesis) Development Kit Hardware
thumbnail: /public/consoles/Sega Megadrive.png
image: /public/images/megadrive/Sega Mega Drive Genesis Devkit.jpg
twitterimage: https://www.retroreversing.com/public/images/megadrive/Sega Mega Drive Genesis Development Kit Hardware.jpg
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
redirect_from:
  - /official-mega-drive-devkit/
  - /sega-dev-card
  - /sprobe-megadrive/
---

# Official Development Kits

## Super Mega Drive Development console
There is very little information out there about the Super Mega Drive but a manual was leaked thanks to the [techdocs.exodusemulator.com](techdocs.exodusemulator.com) website.

This gives the information that it would be a Mega Drive console with the ability to use a In-circuit emulator such as the ZAX ICE to debug game code.

The site says that is was by Sega Ozisoft due to the copyright notice that is on every page, however there is another version where the copyright notice is instead changed to "The Code Monkeys". 

Both Sega OziSoft and "The Code Monkeys" were games studios that developed games for the Mega Drive, so it is likely that Sega printed different versions of the user manual each with a watermark of the company they sent it to.

It is believed that this was the first development kit that Sega produced in the early years of the Mega Drive and that it was fairly quickly replaced with others such as the Cross Products SNASM.

There is no known images of the hardware but it is likely a board that looks very similar to the retail MD board but with additional ports for connecting to an ICE.

## ZAX ER308 ICE for Z80 (Sound)
<section class="postSection">
    <img src="/public/images/gamegear/Sega ZAX ICE Z80.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The ER308 was a In-Circuit-Emulator (ICE) developed by ZAX  Corporation for developing Z80 assembly programs.

{% include link-to-other-site.html url="https://segaretro.org/Zax_Corporation" description="For more information about the ZAX corporation checkout this excellent Sega Retro page" image="https://segaretro.org/images/2/20/ZaxCorporation_Logo.png" title="Zax Corporation - Sega Retro"  %}

Sega officially distributed these for Sega Mega Drive development due to the sound chip being a Z80 processor [^3].

Interestingly this piece of hardware required not one but two ISA cards to be in a developers PC in order to communicate with the ICE [^3].

The ICE would allow developers to set breakpoints, step through instructions and trace programs but don't expect audio or graphics output, this is literally just for tracing the execution of the CPU to test programs.

Apparently there was another ZAX ICE for the Motorola 68k processor which would provide the same functionality but for the main Mega Drive processor.
 </div>
</section> 

---
# Third Party Development Kits

## Western Technologies Sega Dev Card
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/A9zQueGP4iI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
The Sega Dev Card by Western Technologies was a third party development kit that functioned in a similar way to modern day Flash Cartridges. It connects to the developers PC (running MS-DOS) via a port on the back of the cartridge [^1].

The developer could then run `SEGALOAD GameName.bin` to load a compiled Sega Mega Drive game ROM file. It can also debug games using breakpoints and memory dumps [^1].

</div>
</section>

## SPROBE (EA)
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/FTnV2NqQwA8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Developed for Electronic Arts in 1989, the SPROBE combines a Sega Mega Drive and a development board.

Latching onto the Mega Drive cart interface, it adds a cartridge emulator as well as a debug / development capability using a PC card link.
This hardware is one of the reasons for EA's early dominance in Sega Genesis gaming [^2].
</div>
</section>

---
# References
[^1]: [Western Technologies Sega Dev Card Demo - YouTube](https://www.youtube.com/watch?time_continue=102&v=A9zQueGP4iI&feature=emb_logo)
[^2]: [Rare video game hardware: The SPROBE Megadrive development system - YouTube](https://www.youtube.com/watch?time_continue=1&v=FTnV2NqQwA8&feature=emb_logo)
[^3]: [ZAX Z80H in-circuit emulator / ER308 / ERX 308P - Forums - SMS Power](https://www.smspower.org/forums/12038-ZAXZ80HInCircuitEmulatorER308ERX308PWasWhatsInADevkitAnyway)
[^4]: [Development Hardware Sega Mega Drive](http://techdocs.exodusemulator.com/Console/SegaMegaDrive/Hardware.html#development-hardware)
