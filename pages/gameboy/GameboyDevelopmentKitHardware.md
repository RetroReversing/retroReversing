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
image: /public/images/GameBoy/Game Boy Development Hardware Devkit.jpg
twitterimage: https://www.retroreversing.com/public/images/GameBoy/Game Boy Development Hardware Devkit.jpg
editlink: /gameboy/GameboyDevelopmentKitHardware.md
videocarousel:
  - title: GB Smart Development kit
    image: https://img.youtube.com/vi/GYwV4Y1t2sQ/hqdefault.jpg
    youtube: GYwV4Y1t2sQ
  - title: Wide Boy
    image: https://img.youtube.com/vi/llIz6qjDfLc/hqdefault.jpg
    youtube: llIz6qjDfLc
  - title: Famicom Wide Boy
    image: https://img.youtube.com/vi/zOF4Wm2_6oM/hqdefault.jpg
    youtube: zOF4Wm2_6oM
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
updatedAt: '2020-01-10'
---
This post covers all the hardware developers used to create games for the Gameboy (DMG) and Gameboy Color (GBC) and some were even used for early Gameboy Advance development. Developers used both official Nintendo development kits and some unofficial 3rd party devices to create retail games for the Game Boy and Game Boy Color.

---
# Official Programming Tools
The Official programming development kit for the Gameboy consisted of the Debugger that cost 4,000 USD and the Emulator (ICE) which cost 3,000 USD and were both developed by the Nintendo owned company called **Intelligent Systems** [^3].

They both connect to a developer workstation such as an IBM-PC via the SCSI port and offer a few software tools for communication between the IBM-PC and the Intelligent systems hardware.

## DMG-ICE (Debugger + Emulator)
<section class="postSection">
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_2.png" class="wow slideInLeft postImage" />
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_3.jpg" class="wow slideInLeft postImage" />
<img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_4.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
  The **Integrated Circuit Emulator** or ICE was developed for the original Gameboy (DMG) and allowed developers to debug issues effecting their games, set breakpoints and inspect memory. This is also known as the **Program development system** (confirmation needed) but information on exactly how it was used is sparse.
</div>
</section>


## IS-CGB-EMU (Nintendo Game Boy Color Emulator)
<section class="postSection">
<img src="/public/images/GameBoy/IntelligentSystems_ColorGameBoy_Emulator.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The **IS-CGB-EMU** (Intelligent Systems Color Game Boy Emulator) was hardware that allowed developers to download their games to try on the actual hardware and even communication between an IBM-PC and the gameboy hardware itself to execute and check operations. Developers that bought this would also be given discs with the Inteligent Systems Assembler/Linker and other software development tools.
  
  If the **IS-CGB-DEBUGGER** label is ticked on the bottom of the unit then it also supported debugging options such as setting breakpoints, tracing, inspecting memory etc and is likely an ICE (Similar to DMG-ICE) [^12].

The Later units also had support for the **AGB** (Advanced GameBoy or Gameboy Advance) built into the hardware.
</div>
</section>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I picked up a cool GBC dev kit. The IS-CGB-Emulator. I love the cartridge and cable that connects the handheld to the unit. Does anyone else have one of these or even the GBA version? Please post photos of your kit. I’d love to see it :) <a href="https://t.co/NDhShaEToK">pic.twitter.com/NDhShaEToK</a></p>&mdash; Andrew (@AndrewEarley7) <a href="https://twitter.com/AndrewEarley7/status/1335466371463794688?ref_src=twsrc%5Etfw">December 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{% include link-to-other-site.html url="http://devkits.handheldmuseum.com/IS-CGB-EMU/index.htm" title=" Handheld Museum - IS-CGB-EMU" description="The Handheld Museum website has an excellent page on the IS-CGB-EMU" image="http://devkits.handheldmuseum.com/IS-CGB-EMU/GBC_Emulator.jpg"  %}

## DMG-CAD & IS-CGB-CHARACTER (Gameboy tile/sprite editing hardware)

<section class="postSection">
  <img src="/public/images/GameBoy/IS-CGB-Character-Screen.jpg" class="wow slideInLeft postImage" />
  <img src="/public/images/GameBoy/IS-CGB-Character-Back.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
The DMG-CAD (Character Development System) allowed designers/artists to preview pixel art on the gameboy hardware without using the more programmer specific hardware such as the `DMG-ICE`.

Not much information is known about it other than a brief mention on the Intelligent systems website back in 1998 [^12]. 

There is also the **IS-CGB-CHARACTER** which is a similar system but updated for the Gameboy Color, the photos on the left are from that system but it only shows the Gameboy screen and wires coming out the back, it is unclear where the wires went.

There was one sold on Japanese Yahoo Auctions but the link was never archived in the wayback machine ("http://page.auctions.yahoo.co.jp/jp/auction/181784286").
</div>
</section>

---
# Presentation/Demo Tools
Demonstration tools are hardware that allowed publishers or the press to present gameboy games on a larger screen, useful for demos and to create screenshots for magazines.

## Famicom Wide Boy (DMG)
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_1.png" class="wow slideInLeft postImage" />
<div markdown="1">
The **WideBoy** was used to present Game Boy games on a bigger screen such as a TV, to do this it contained Famicom (NES) hardware with a custom program written to an EPROM and connected directly to the Famicom board. It was developed by Intelligent Systems and only sold to Game developers and Press outlets by Nintendo themselves.
  
  This was commonly used by developers and testers to make it much easier on their eyes than constantly looking at the non-backlit original Gameboy screens [^10].
</div>
</section>

{% include link-to-other-site.html url="https://www.chrismcovell.com/wideboy.html" description="Chris M Covell has an excellent page on the WideBoy" image="https://www.chrismcovell.com/images/WideBoyFamilyM.jpg" title="Nintendo WideBoy"  %}

## N64 Wide Boy (Wide-Boy64) (DMG & CGB)
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/llIz6qjDfLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
An updated version of the Wide Boy was released as a cartridge for the Nintendo 64 that supported GameBoy Color games [^11]. There was later a version of the Wide-Boy64 that could play Gameboy Advance games known as the AGB model.
</div>
</section>

## Demo Boy II (DemoVision)
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_0.png" class="wow slideInLeft postImage" />
<div markdown="1">
The **Demo Boy** was an alternative to the **Wide Boy** that allowed displaying two gameboy screens at once on a single TV. It used similar hardware that was based on the Famicom (NES) with a custom ROM image for loading the data from the two gameboys attached via cable and displaying the result on the screen. It is an ideal way to develop and test link-cable games on a much larger display.
  
 There exists multiple versions of this under a variety of names starting with the Demo Boy then Demo Boy 2 and finally the Demo Vision [^9].
</div>
</section>

{% include link-to-other-site.html url="https://www.chrismcovell.com/demovision.html" description="Chris M Covell has an excellent page on the DemoVision unit which seems like a newer version of the Demo Boy" image="https://www.chrismcovell.com/images/demovision.gif" title="Nintendo Demo Vision"  %}



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

### DMG-MBC5-32M-R-FLASH (32Mb Rumble Flash cartidge)
<section class="postSection">
  <img src="/public/images/GameBoy/DMG-MBC5-32M-R-FLASH - outside.jpeg" class="wow slideInLeft postImage" />
  <img src="/public/images/GameBoy/DMG-MBC5-32M-R-FLASH - inside.jpeg" class="wow slideInLeft postImage" />
<div markdown="1">
Nintendo sold special flash cartridges which had rumble support along with Memory Bank Controller 5 (MBC5) which were used for games such as **Looney Tunes Collector**: **Martian Alert**.
</div>
</section>

Thank you to both **@forestillusion** and **@Altomare3** for these excellent images of both the outide and inside of the cartridges.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Enjoy! <a href="https://t.co/pYSsMY0Eyp">pic.twitter.com/pYSsMY0Eyp</a></p>&mdash; Altomare (@Altomare3) <a href="https://twitter.com/Altomare3/status/1416342450914959361?ref_src=twsrc%5Etfw">July 17, 2021</a></blockquote>


### DMG-MBC1 MULTI CHECKER CARTRIDGE (DMG-Checker)
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_8.png" class="wow slideInLeft postImage" />
<div markdown="1">
  The **DMG-MBC1 Multichecker cartridge** was the earliest of the official prototype cartridges sold by Nintendo and only supported Memory Bank Controller version 1 (MBC1) so it was limited to games that were under 2 MB of ROM and 32 KB of RAM, **Dig Dug** is one game that was developed using this cartridge [^7].
</div>
</section>

## DMG FLASH GANG WRITER
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_5.png" class="wow slideInLeft postImage" />
<div markdown="1">
  Rather the writing to the prototype cartridges one-by-one, which would be too time consuming as developers tended to send out multiple copies to the press (magazines etc) there was a tool known as the **FLASH GANG WRITER** where you could place the cartridges in and write the same ROM image to all of them.
</div>
</section>

## Duck (Dmg Universal ChecKer)
<section class="postSection">
  <img src="/public/ZAgzBlXrARIEyn2KnTa4g_img_6.png" class="wow slideInLeft postImage" />
<div markdown="1">
  The DMG Universal Checker or aptly named **DUCK** is a unit for quality control (QA) of the cartridges during the manufacturing process, a Game Boy cartridge is inserted into the socket and the machine calculates and compares the checksum of the ROM with a test cartridge, it also tests saving and loading from SRAM to check for any corruption errors [^8].
</div>
</section>

---
# Third Party Development kits

## GB Smart Development kit
<section class="postSection">
  <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/GYwV4Y1t2sQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
  The **GB Smart Development kit** could be used by small studios or even individual developers to create games for the original Game Boy. However it was likely mainly used for piracy when sold to individual people and the `development kit` name was used very lightly.

The development cartridge was known as the **Smart Card** which was 16 Mbit in size and not only contained standard chips such as Save Ram (SRAM) but also had the Rumble feature used in a small amount of games such as Pokemon Pinball [^6].

The files that were distributed with the development kit have been kindly uploaded by `JakobAir` here: [GitHub - JakobAir/GB-Smart-Development-Kit: Files for the Gameboy Smart Development Kit will be placed here. I claim no authorization of these files.](https://github.com/JakobAir/GB-Smart-Development-Kit) 

The manual has never been scanned so if you find one then please help the community and share a pdf if you have the ability!
</div>
</section>

## Codemasters Orac
Ex-Codemasters employee **DrTune** posted his custom FPGA based Game Boy devkit used in 1992 to his twitter:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ha just came across pic of my &quot;Orac&quot; Gameboy dev board from 1992, used for all Codemasters GB games; 256K SRAM, PC interface. Old skool FPGA. Big connector is optional logic analyzer port. Acid house smiley face b/c we did more than just hack hardware. <a href="https://t.co/1zHhvED1fC">pic.twitter.com/1zHhvED1fC</a></p>&mdash; DrTune (@drtune) <a href="https://twitter.com/drtune/status/1343388636784414720?ref_src=twsrc%5Etfw">December 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Doctor GB Xchanger
The **Doctor GB Xchanger** was primarily sold as a piracy device but could be used by consumers or even some small studios as a cheaper alternative to the official development kit.

{% include link-to-other-site.html url="https://videogamedevelopmentdevices.fandom.com/wiki/Gameboy_Xchanger" description="The wiki **videogamedevelopmentdevices.fandom.com** has an excellent page on the Doctor GB Xchanger" image="https://vignette.wikia.nocookie.net/videogamedevelopmentdevices/images/2/26/Gb_xchanger_boxed.jpg/revision/latest?cb=20130422153247" title="Gameboy Xchanger"  %}

---
# References
[^1]: Many of the Images are thanks to - [http://nintendoage.com/forum/messageview.cfm?catid=35&threadid=141667](http://nintendoage.com/forum/messageview.cfm?catid=35&threadid=141667) 
[^2]: Board Images of the DMG-ICE - [https://assemblergames.com/threads/dmg-ice-gameboy-black-white-model-dev-kit.47995/](https://assemblergames.com/threads/dmg-ice-gameboy-black-white-model-dev-kit.47995/) 
[^3]: [GB DEV FAQs](http://www.devrs.com/gb/files/faqs.html#ProSoftware)
[^4]: [Intelligent Systems IS-CGB-EMULATOR Nintendo Game Boy Color Emulator](http://devkits.handheldmuseum.com/IS-CGB-EMU/index.htm)
[^5]: [GameBoy Dev Machine - GBA ROM DUMPED!](http://nintendoage.com/forum/messageview.cfm?catid=22&threadid=31950)
[^6]: [GB SMART DEVELOPMENT KIT](http://www.goldenshop.com.hk/AI-trad/Misc_htm/m-smartgb.htm)
[^7]: [DMG-MBC1 MULTI CHECKER CARTRIDGE](http://www.nesworld.com/gb/pics/dmgmbs1-3.jpg)
[^8]: [Game Boy “DUCK” DMG Universal Dev](https://thissideout.wordpress.com/2014/03/11/game-boy-duck-dmg-universal-dev/)
[^9]: [Demo Vision](https://www.chrismcovell.com/demovision.html)
[^10]: [WideBoy](https://www.chrismcovell.com/wideboy.html)
[^11]: [Wide Boy 64](https://www.chrismcovell.com/wideboy64.html)
[^12]: [IS CGB tool](https://web.archive.org/web/20021017211518/http://www.intsys.co.jp/tool/cgb/)
