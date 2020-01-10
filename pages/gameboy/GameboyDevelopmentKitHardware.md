---
title: Gameboy (DMG & GBC) Development Kit Hardware
layout: post
permalink: /gameboy-development-kit-hardware/
tags:
- gameboy
- nintendo
- devkit
- hardware
thumbnail: /public/NintendoGameBoyThumb.png
editlink: /gameboy/GameboyDevelopmentKitHardware.md
videocarousel:
  - title: GB Smart Development kit
    image: https://img.youtube.com/vi/GYwV4Y1t2sQ/hqdefault.jpg
    youtube: GYwV4Y1t2sQ
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gameboy
    url: /gameboy
  - name: Gameboy (DMG & GBC) Development Kit Hardware
    url: #
recommend: 
- gameboy
- devkit
updatedAt: 10th January 2020
---
This post covers all the hardware developers used to create games for the Gameboy (DMG) and Gameboy Color and some were even used for early Gameboy Advance development.

This post is split into a number of different sections:
* Programming Tools
* Presentation/Demo Tools
* Cartridge Tools

---
# Official Programming Tools
The Official programming development kit for the Gameboy consisted of the Debugger (US$4000) and the Emulator/ICE (US$3000) which were both developed by the Nintendo owned company called Intelligent Systems [^3].

They both connect to a developer workstation such as an IBM-PC via the SCSI port and offer a few software tools for communication between the IBM-PC and the Intelligent systems hardware.

## DMG-ICE (Debugger + Emulator)
<section class="postSection">
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_2.png" class="wow slideInLeft postImage" />
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_3.jpg" class="wow slideInLeft postImage" />
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_4.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
  The Integrated Circuit Emulator or ICE was developed for the original Gameboy (DMG) and allowed developers to debug issues effecting their games, set breakpoints and inspect memory. This is also known as the Program development system but information on eactly how it was used is sparse.
</div>
</section>


## IS-CGB-EMU (Emulator)
The `IS-CGB-EMU` (Intelligent Systems Colour GameBoy Emulator) was hardware that allowed developers to download their games to try on the actual hardware and even communication between an IBM-PC and the gameboy hardware itself to execute and check operations. Developers that bought this would also be given discs with the Inteligent Systems Assembler/Linker and other software development tools.

The Later units also had support for the `AGB` (Advanced GameBoy or Gameboy Advance) built into the hardware.

<iframe src="http://devkits.handheldmuseum.com/IS-CGB-EMU/index.htm" width="100%"></iframe>

## IS-CGB-DEBUGGER (Debugger)
The Color Gameboy debugger hardware was similar to the DMG-ICE in that it allowed fully fledged debugging capabilities such as breakpoints, stack traces and memory modification.

# DMG-CAD (Gameboy tile/sprite editing hardware)
The DMG-CAD (Character Development System) allowed designers/artists to preview pixel art on the gameboy hardware without using the more programmer specific hardware such as the `DMG-ICE`.
Not much information is known about it other than a brief mention on the Intelligent systems website back in 1998. There is also the `IS-CGB-CHARACTER` which is a similar system but updated for the Gameboy Color.

---
# Presentation/Demo Tools
Demonstration tools are hardware that allowed pulishers or the press to present gameboy games on a larger screen, useful for demos and to create screenshots for magazines.

## Demo Boy II

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_0.png)

## DMG/Famicom Wide Boy

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_1.png)


---
# Cartridge Tools
Gameboy Cartridge tools are used to write to writable cartridges known as flash carts or to check the cartridges for problems.

## Prototype Gameboy Cartridges
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/YLNsqcQlOdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
  As Gameboy cartridges contained the game on a ROM chip which is read-only by its nature, in order to create prototype cartridges you can replace the ROM chip with an rewritable data chip such as EEPROM and you have a cartridge ideal for testing! 
Nintendo sold boards with EPROM sockets that could be used for exactly this purpose, it was a standard gameboy cartridge but with a slot where the EPROM chip could be easily removed for re-programming, there was also a piece of hardware called a `GANG writer` that could write to multiple of these cartridges at once. 
  
It was also very common for developers to just create these themselves from retail games.
</div>
</section>


## DMG FLASH GANG WRITER
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_5.png" class="wow slideInLeft postImage" />
<div markdown="1">
  Rather the writing to the prototype cartridges one-by-one, which would be too time consuming as developers tended to send out multiple copies to the press (magazines etc) there was a tool known as the `FLASH GANG WRITER` where you could place the cartridges in and write the same ROM image to all of them.
</div>
</section>

## Duck (Dmg Universal ChecKer)

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_6.png)

## GameBoy DEV Port

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_7.png)

## DMG-Checker

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_8.png)

## GameBoy Tester Unit

![image alt text]({{ site.url }}/public/ZAgzBlXrARIEyn2KnTa4g_img_9.png)

---
# Third Party Development kits

## GB Smart Development kit
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/GYwV4Y1t2sQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
  The GB Smart Development kit could be used by small studios or even individual developers to create games for the original Game Boy. However it was likely mainly used for piracy when solds to individual people and the `development kit` name was used very lightly.

The development cartridge was known as the `Smart Card` which was 16Mbit in size and not only contained standard chips such as Save Ram (SRAM) but also had the Rumble feature used in a small amount of games such as Pokemon Pinball [^6].

The files that were distributed with the development kit have been kindly uploaded by `JakobAir` here: [GitHub - JakobAir/GB-Smart-Development-Kit: Files for the Gameboy Smart Development Kit will be placed here. I claim no authorization of these files.](https://github.com/JakobAir/GB-Smart-Development-Kit) 

The manual has never been scanned so if you find one then please help the community and share a pdf if you have the ability!
</div>
</section>

## Doctor GB Xchanger
the Doctor GB Xchanger was primarily sold as a piracy device but could be used by consumers or even some small studios as a cheaper alternative to the official development kit.

{% include link-to-other-site.html url="https://videogamedevelopmentdevices.fandom.com/wiki/Gameboy_Xchanger" description="The wiki `videogamedevelopmentdevices.fandom.com` has an excellent page on the Doctor GB Xchanger" image="https://vignette.wikia.nocookie.net/videogamedevelopmentdevices/images/2/26/Gb_xchanger_boxed.jpg/revision/latest?cb=20130422153247" title="Gameboy Xchanger"  %}

---
# References
[^1]: Many of the Images are thanks to - [http://nintendoage.com/forum/messageview.cfm?catid=35&threadid=141667](http://nintendoage.com/forum/messageview.cfm?catid=35&threadid=141667) 
[^2]: Board Images of the DMG-ICE - [https://assemblergames.com/threads/dmg-ice-gameboy-black-white-model-dev-kit.47995/](https://assemblergames.com/threads/dmg-ice-gameboy-black-white-model-dev-kit.47995/) 
[^3]: [GB DEV FAQs](http://www.devrs.com/gb/files/faqs.html#ProSoftware)
[^4]: [Intelligent Systems IS-CGB-EMULATOR Nintendo Game Boy Color Emulator](http://devkits.handheldmuseum.com/IS-CGB-EMU/index.htm)
[^5]: [GameBoy Dev Machine - GBA ROM DUMPED!](http://nintendoage.com/forum/messageview.cfm?catid=22&threadid=31950)
[^6]: [GB SMART DEVELOPMENT KIT](http://www.goldenshop.com.hk/AI-trad/Misc_htm/m-smartgb.htm)
