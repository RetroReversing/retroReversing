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
updatedAt: '2021-03-24'
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
The **IS-NITRO-DEBUGGER** is just a standard **IS-NITRO-EMULATOR** with additional software for a few debugging features such as breakpoints and memory watchers for programmers to debug their code on the real hardware.
 </div>
</section> 

### IS-NITRO-EMULATOR Controller
<section class="postSection">
    <img src="/public/images/ds/IS-NITRO-Emulator controller.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The controller for the **IS-NITRO-EMULATOR** is just a standard Nintendo DS with an un-pluggable cable in the back instead of the game card slot. This allows developers to use all the functionality of the DS such as the touch screen and still debug the code via their main PC.
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
## IS-NITRO-HUB
<section class="postSection">

<img src="/public/images/ds/IS-NITRO-HUB.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **IS-NITRO-HUB** is a piece of development hardware that was used to connect multiple development units (e.g IS-NITRO-EMULATOR) together using standard ethernet cables.

This was very useful for testing multi-player comes or software that communicated with other devices such as Pictochat.
 </div>
</section> 

---
## IS-NITRO-VIDEO
<section class="postSection">

<img src="/public/images/ds/IS-NITRO-VIDEO - voodooween.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **IS-NITRO-VIDEO** is a piece of development hardware that was used to output video from a prototype DS game to multiple monitors, this was used for demos and events where Nintendo would showcase their games. 

The connected DS was used as a controller, this allowed the players to use the touch screen and other event attendees would see the result on large monitors on the show floor.
 </div>
</section> 

---
## IS-NITRO-UIC (MIDI)
<section class="postSection">

<img src="/public/images/ds/IS-NITRO-UIC.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The ** IS-NITRO-UIC** is a piece of development hardware that was used to test MIDI sound on the Nintendo DS. 

The hardware would be connected to a developers PC via USB, and using the provided software the sound engineer could send midi files that would play back on the device's speakers.

The hardware could also be connected to any MIDI instrument directly via the MIDI interface!
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

## DS Rewritable development Cartridge
<section class="postSection">
    <img src="/public/images/ds/DS Development Cartridge.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Similar to most console development kits, there are official development flash cartridges for the DS. These are similar to the standard game cartridge but are re-writeable and thus can be used for any game.

So how does the Rom get written to the cartridge? The answer is above you, well above you on this page, the **IS-NITRO-EMULATOR** and the **IS-NITRO-WRITER** can both write to these game cartridges.

But what about saved game data? Not all retail cartridges have the same amount of Save RAM on them and so the development cartridges should have a configurable amount of Save RAM right?

Right! So this was achieved using "sub-cards" which you can get access to and swap out very easily by opening the top half of the cartridge.

This allows game developers to test their games with the exact right amount of Save RAM [^3]. 
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Reminder: These Nintendo DS development cartridges really existed. <a href="https://t.co/Tp8A0tGvL6">pic.twitter.com/Tp8A0tGvL6</a></p>&mdash; Forest of Illusion (@forestillusion) <a href="https://twitter.com/forestillusion/status/1337742223744495619?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> 
---

## IS-TWL-DEBUGGER
<section class="postSection">
    <img src="/public/images/ds/IS-TWL-DEBUGGER.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The **IS-TWL-DEBUGGER** development kit is a newer version of the **IS-NITRO-DEBUGGER** but with added support for the features of the DSI which was codenamed **Twilight** (TWL) during development.

On the front it has slots for both an SD card and a standard DS cartridge.

It has 32MB of main memory, twice that of the retail Nintendo DSi, this allows developers to use that memory for debugging overlays etc.

For wireless communication it includes its own antenna!

Similar to the **IS-NITRO-Emulator** it uses the gamecube power supply and has a USB port for interfacing with the developers PC.
 </div>
</section> 

### IS-TWL-DEBUGGER Controller
<section class="postSection">
    <img src="/public/images/ds/IS-TWL-DEBUGGER Controller.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Keeping the tradition with its DS predecessor the controller is a modified retail Unit, but instead of the cartridge port it had wires connecting it to the main unit itself [^5].
 </div>
</section> 

---
## IS-TWL-CAPTURE
<section class="postSection">
    <img src="/public/images/ds/IS-TWL-Capture.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Again Keeping the tradition with its DS predecessor the **IS-TWL-CAPTURE** is the equivalent of the **IS-NITRO-CAPTURE** but with the added ability to support DSi functions.
 </div>
</section> 


## IS-TWL-VSA
Very little is known about the **IS-TWL-VSA** but it was briefly mentioned in a 2015 recruitment document and described as a "Integrated Development environment add in" [^6].

## IS-TWL-MIDI
Noone has taken any photos of the **IS-TWL-VSA** but it was briefly mentioned in a 2015 Intelligent Systems recruitment document and described as a "Sound Development System" [^6]. It is presumably just a more up-to-date version of the **IS-NITRO-UIC**.

## TWL-DEV-EUR (PANDA) Nintendo DSi Development Unit

<section class="postSection">
    <img src="/public/images/ds/TWL-DEV-EUR.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The DSi development unit was similar to its retail counterpart but had the ability to read development cartridges and install *.TAD files.

TAD files are the equivalent of Wii's WAD file format but for Twilight (DSi).
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Today’s arrival : a boxer Nintendo DSI panda (dev console) with a development box ! (Where usually all box actually know for those panda was just no name white box).<br><br>And I also got two cards, including one of the four Nintendo factory devcart that was recently found. <a href="https://t.co/w4O188jCx8">pic.twitter.com/w4O188jCx8</a></p>&mdash; Michel Gaschet (@Michel_Gaschet) <a href="https://twitter.com/Michel_Gaschet/status/1315986618227068931?ref_src=twsrc%5Etfw">October 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Third party Development Kits
In addition to the official development kits put out by Nintendo, there was a third party development kit from SN-Systems.

## Sn Systems Pro-DG for Nintendo DS (DSDEV)
SN Systems have a long history of creating 3rd party development kits for Nintendo consoles and the Nintendo DS was no exception, or was it?!

You see before the console was released SN Systems announced a collaboration with Hudson soft to add Nintendo DS support to their ProDG line of development kits [^4].

However it is unclear if it actually materialised or if any game developers used it to create a retail game, as all mention of it was scrubbed from their official website after 2005.

---
# Consumer Development Kits
A consumer development kit for the DS? Of course Nintendo would never allow Homebrew on their console officially but there was an attempt by Datel to allow users to write Apps for the DS using a special cartridge.

## Datel Games n Music
Datel are a very talented company when to comes to by-passing security and doing things people didn't think possible. One project they sold in stores was called **Games n' Music** and allowed users to create their own mini Apps.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Datel once released a multimedia cartridge for DS which allowed playing music, images, and user made apps. It was essentially a flash cart without a ROM loader. These were actually on store shelves in America?? It&#39;s how I got into piracy and homebrew on my DS at age like, 11... <a href="https://t.co/a7kDkDo7LW">pic.twitter.com/a7kDkDo7LW</a></p>&mdash; Kaitlyn Molinas (@orcastraw) <a href="https://twitter.com/orcastraw/status/1317956971128102912?ref_src=twsrc%5Etfw">October 18, 2020</a></blockquote>

---
{% include link-to-other-post.html post="/game-boy-advance-development-kit/" description="Since you have got this far you might be interested in Nintendo's previous generation of handheld development hardware, if so check out this post." %}

---
# References
[^1]: [Nintendo DS Development Unit! - IS Nitro Emulator - H4G - YouTube](https://www.youtube.com/watch?v=zn2amiL45no)
[^2]: [Nintendo DS on your television, the IS-Nitro-Capture a developers tool - YouTube](https://www.youtube.com/watch?v=Qh9pHzKFXE4)
[^3]: [The NSMB Hacking Domain » Nintendo DS dev hardware! IS-NITRO-EMULATOR & co.](https://nsmbhd.net/thread/4438-nintendo-ds-dev-hardware-is-nitro-emulator-and-co/)
[^4]: [Gamasutra - SN Systems and Hudson Announce DS Tools Project](https://www.gamasutra.com/view/news/96005/SN_Systems_and_Hudson_Announce_DS_Tools_Project.php)
[^5]: [Nintendo DS IS TWL Debugger from Retrogames](https://www.retrogames.co.uk/044754/Nintendo/Nintendo-DS-IS-TWL-Debugger)
[^6]: [Intelligent Systems Recruitment 2015](https://intsys.co.jp/recruit/requirement/pamphlet2015.pdf)
