---
layout: post
tags: 
- ds
- devkit
- hardware
- snsystems
title: Nintendo DS (Nitro) Development Kit Hardware
thumbnail: /public/consoles/Nintendo DS.png
image: /public/images/ds/Nintendo DS Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/ds/Nintendo DS Development Kit Hardware.jpg
permalink: /nintendo-ds-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo DS (Nitro)
    url: /ds
  - name: Nintendo DS (Nitro) Development Kit Hardware
    url: #
recommend: 
- devkit
- ds
editlink: /ds/DSDevkitHardware.md
redirect_from:
  - /official-ds-devkit/
---

# Official Development kits
This section will cover the official development kit hardware sold by Nintendo and developed by **Intelligent Systems**.

The Nintendo DS was initially codenamed **IRIS** during development and this later changed to **NITRO** which is why most of the development kits have the prefix **IS-NITRO** (IS is for Intelligent Systems).

## Prototype Development Kit
<section class="postSection">
    <img src="/public/images/ds/Early Prototype Nintendo DS Development Kit.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The first ever Nintendo DS development kit simply consisted of two GBA screens connected with a custom SNES-like controller. The image on the left is the unit that Nintendo gave to **Alpha Dream** very early in the DS lifecycle so that they would work on **Partners in Time**.
 </div>
</section> 

## IS-NITRO-Emulator
<section class="postSection">

<iframe class="wow slideInLeft postImage"  src="https://www.youtube.com/embed/zn2amiL45no" height="300" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div markdown="1">
The Nintendo GameBoy has the IS-DMG-Emulator, the GameBoy Advance has the **IS-AGB-Emulator** and thus the DS/NITRO required its own **IS-NITRO-EMULATOR**.

This piece of hardware has a GBA slot but does not allow playing of retail games. 
Some models support Video Out to allow gameplay to be shown on a much larger screen that the DS.

The video on the left by Hard4Games shows off the hardware in great detail [^1].
 </div>
</section> 

You can view the video output in action in this tweet by Andrew Borman:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Testing the IS-Nitro-Emulator with the unreleased Tetris DS that <a href="https://twitter.com/CuttingRoomWiki?ref_src=twsrc%5Etfw">@CuttingRoomWiki</a> released <a href="https://t.co/yQMruabbiK">pic.twitter.com/yQMruabbiK</a></p>&mdash; Andrew Borman (@Borman18) <a href="https://twitter.com/Borman18/status/940016773373493249?ref_src=twsrc%5Etfw">December 11, 2017</a></blockquote>

For more information and a tear down visit: [The NSMB Hacking Domain » Nintendo DS dev hardware! IS-NITRO-EMULATOR & co.](https://nsmbhd.net/thread/4438-nintendo-ds-dev-hardware-is-nitro-emulator-and-co/)

### IS-NITRO-DEBUGGER
<section class="postSection">
    <img src="/public/images/ds/IS-NITRO-DEBUGGER.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Similar to the **IS-NITRO-EMULATOR** the **IS-NITRO-DEBUGGER** was an advanced version which added a few debugging features such as breakpoints and memory watchers to the emulator.
 </div>
</section> 

---
## IS-NITRO-Capture
<section class="postSection">

<img src="/public/images/ds/IS-NITRO-Capture.jpeg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **IS-NITRO-Capture** is hardware that can play DS and GBA games on a monitor or PC via USB. You have multiple options such as using two monitors, one for each of the DS screens or just displaying both DS screens on the same monitor. this is controlled by the value of the DIP switches on the back of the unit.

This is very useful for QA teams to avoid eye strain and for Game journalists to take screenshots of Nintendo DS games.

When connected to a PC it can even capture video footage, perfect for showcasing games at conventions!

Note that it did not support original GB and GBC games unlike the retail Nintendo DS [^2].
 </div>
</section> 

---
## IS-NITRO-Writer
<section class="postSection">

<img src="/public/images/ds/IS-NITRO-Writer.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **IS-NITRO-Writer** is used to flash a ROM image to multiple flash cartridges at once!  intelligent Systems developed one of these units for most Nintendo consoles including the Nintendo 64 and Game Boy.

One of the slots holds the master cartridge that will be copied to all the 7 other cartridges. Alternatively it can connect to the PC via USB and take a ROM from the PC and flash to 8 cartridges at once (the Master slot is used to flash an extra one).

it has a bunch of DIP switches for configuration, a USB type-B port and uses the same power supply as a Nintendo Gamecube!
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ahhh, now there&#39;s a devkit for a platform I knew inside and out... Great memories developing the first few LEGO games on this. Next to it the eight slot gang burner for programming test cartridges. <a href="https://t.co/PzgzULWWA7">pic.twitter.com/PzgzULWWA7</a></p>&mdash; Paul Hughes (@PaulieHughes) <a href="https://twitter.com/PaulieHughes/status/1336074097281929218?ref_src=twsrc%5Etfw">December 7, 2020</a></blockquote> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">There was Nintendo Dev kits for sale on ebay. This is a &quot;Nitro&quot; writer (the codename for the DS). Notice it takes a Gamecube power port. <a href="https://t.co/MUIzuCGIMT">pic.twitter.com/MUIzuCGIMT</a></p>&mdash; Kuromi Bunny in Boston (@KuromiBunnyGirl) <a href="https://twitter.com/KuromiBunnyGirl/status/838516430882684929?ref_src=twsrc%5Etfw">March 5, 2017</a></blockquote> 

For more information about the Writer and a teardown: [The NSMB Hacking Domain » Nintendo DS dev hardware! IS-NITRO-EMULATOR & co.](https://nsmbhd.net/thread/4438-nintendo-ds-dev-hardware-is-nitro-emulator-and-co/?from=20)

---
## DS Rewritable development Cartridge
DS Development Cartridge.jpg

<section class="postSection">
    <img src="/public/images/engines/image.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Similar to most console development kits, there are official development flash cartridges for the DS. These are similar to the standard game cartridge but are re-writeable and thus can be used for any game.

So how does the Rom get written to the cartridge? The answer is above you, well above you on this page, the **IS-NITRO-EMULATOR** and the **IS-NITRO-WRITER** can both write to these game cartridges.

But what about saved game data? Not all retail cartridges have the same amount of Save RAM on them and so the development cartridges should have a configurable amount of Save RAM right?

Right! So this was achieved using "sub-cards" which you can get access to and swap out very easily by opening the top half of the cartridge.

This allows game developers to test their games with the exact right amount of Save RAM [^3]. 
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Reminder: These Nintendo DS development cartridges really existed. <a href="https://t.co/Tp8A0tGvL6">pic.twitter.com/Tp8A0tGvL6</a></p>&mdash; Forest of Illusion (@forestillusion) <a href="https://twitter.com/forestillusion/status/1337742223744495619?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Consumer Development Kits
A consumer development kit for the DS? Of course Nintendo would never allow Homebrew on their console officially but there was an attempt by Datel to allow users to write Apps for the DS using a special cartridge.

## Datel Games n Music
Datel are a very talented company when to comes to by-passing security and doing things people didn't think possible. One project they sold in stores was called **Games n' Music** and allowed users to create their own mini Apps.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Datel once released a multimedia cartridge for DS which allowed playing music, images, and user made apps. It was essentially a flash cart without a ROM loader. These were actually on store shelves in America?? It&#39;s how I got into piracy and homebrew on my DS at age like, 11... <a href="https://t.co/a7kDkDo7LW">pic.twitter.com/a7kDkDo7LW</a></p>&mdash; Kaitlyn Molinas (@orcastraw) <a href="https://twitter.com/orcastraw/status/1317956971128102912?ref_src=twsrc%5Etfw">October 18, 2020</a></blockquote>

---
# References
[^1]: [Nintendo DS Development Unit! - IS Nitro Emulator - H4G - YouTube](https://www.youtube.com/watch?v=zn2amiL45no)
[^2]: [Nintendo DS on your television, the IS-Nitro-Capture a developers tool - YouTube](https://www.youtube.com/watch?v=Qh9pHzKFXE4)
[^3]: [The NSMB Hacking Domain » Nintendo DS dev hardware! IS-NITRO-EMULATOR & co.](https://nsmbhd.net/thread/4438-nintendo-ds-dev-hardware-is-nitro-emulator-and-co/)
