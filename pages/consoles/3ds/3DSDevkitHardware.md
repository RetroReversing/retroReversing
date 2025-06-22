---
layout: post
tags:
- 3ds
- devkit
- hardware
title: Nintendo 3DS (Citrus) Development Kit Hardware
thumbnail: /public/consoles/Nintendo 3DS.png
_image: /public/images/3ds/Nintendo 3DS Development Kit Hardware.jpg
_twitterimage: https://www.retroreversing.com/public/images/3ds/Nintendo 3DS Development Kit Hardware.jpg
permalink: /nintendo-3ds-development-kit/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 3DS (Citrus)
    url: /ds
  - name: Nintendo 3DS (Citrus) Development Kit Hardware
    url: #
recommend:
- devkit
- 3ds
- ds
editlink: /consoles/3ds/3DSDevkitHardware.md
_updatedAt: '2025-06-22'
---

# Official Development kits
Nintendo’s official 3DS development hardware was created in collaboration with **Intelligent Systems (IS)** and **Kyoto Microcomputer Co.**.

## CTR Target Board - Prototype Hardware
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/98180b1a-d88d-49ae-973e-a02dd5faed23" alt="CTR Target Board" class="wow slideInLeft postImage" />

 <div markdown="1">

The earliest known 3DS dev kit was a bare-bones prototype board used during development before the final 3DS hardware was ready, which has a resemblence to the prototype board that was leaked for the DS.

An FCC filing in 2010 revealed a **Nintendo CTR Target Board** test kit consisting of two attached screens (a widescreen 3D top panel and a 4:3 bottom panel) mounted on a circuit board [^1].

This board included a Nintendo DS cartridge slot and SD card slot, indicating backward compatibility and storage, and was used to validate new components like the Wi-Fi module prior to the 3DS’s release.

This early dev hardware made it clear that only the top screen would have **Sharp’s auto-stereoscopic 3D capability**, while the bottom screen was a standard LCD [^1].

The CTR Target Board allowed first-party developers to begin building 3DS software on prototype hardware months before the retail units were finalized, but as far as we know it was never used outside of Nintendo.
 </div>
</section> 

---
## IS-CTR-BOX Development Unit
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/0bda5f5b-7678-4fe7-a53c-5e715575744b" alt="IS-CTR-BOX" class="wow slideInLeft postImage" />

 <div markdown="1">
   
 Nintendo initially produced a large "big box" 3DS dev kit known as the **IS-CTR-BOX**, designed by Intelligent Systems. The photo on the left is by **SimonMK7** on twitter [^2].

 This kit consists of a teal-blue external unit ("the box") and a tethered 3DS-like controller. Notably, in this early design the *handheld controller contained the main 3DS hardware* (CPU/GPU), while the external box acted primarily as a “card emulator” for loading game code.

  The IS-CTR-BOX couldn't operate with the controller unplugged because the "brains" were inside the handheld, unlike later units where the box housed the processing hardware. But the controller could be used without plugging it into the IS-CTR-BOX allowing for more portable testing!

![Packaging of the IS-CTR-BOX](https://github.com/user-attachments/assets/8ea66bb4-7415-4405-8d03-9471dca1eff2)


  This dev kit was released around 2011 in limited quantities (estimated only a few hundred) before Nintendo quickly phased it out in favor of the **Partner-CTR** series, which offered greater functionality and a more standard setup [^3].
 </div>
</section> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Looks like this finally arrived today. This is the IS-CTR-Debugger. Created by Intelligent Systems, this piece of hardware was used to help developers test &amp; debug their games for the Nintendo 3DS. It includes the IS-CTR-Box, the SPR for Emulator unit &amp; a Wii ac adaptor + cables. <a href="https://t.co/SX1VWcMfHs">pic.twitter.com/SX1VWcMfHs</a></p>&mdash; SimonMK7 (@SimonOrtizBrian) <a href="https://twitter.com/SimonOrtizBrian/status/1464382922778050560?ref_src=twsrc%5Etfw">November 26, 2021</a></blockquote>

---
## Partner-CTR-Debugger by KMC
Nintendo’s main development kit for the 3DS became the **Partner-CTR-Debugger**, manufactured by **Kyoto Microcomputer** (KMC) in partnership with Nintendo.

This system uses a two-unit design: a **dev console** (code-named **CTR-001(-02)**, often called the **Partner CTR Controller**) which looks like a 3DS handheld, and a **debugger host unit** (the Partner-CTR) that contains the core hardware and interfaces.

The handheld portion connects to the debugger box via a pair of proprietary high-bandwidth cables that plug into the base of the unit (occupying the game card slot area).

The tethered 3DS serves as the input controller and display, allowing developers to interact using the real 3DS buttons and touch screen while their code runs on the dev kit hardware in the external box.

The Partner-CTR Debugger box features USB connectivity to the development PC for deploying games and debugging, as well as connectors for the wired controller and other I/O (front panel slots exist for dev cartridges and SD cards, plus indicator LEDs and an IR port).

This kit enables setting breakpoints, inspecting memory, and other runtime debugging on actual 3DS hardware.

The Partner-CTR Debugger initially retailed for about **\$2,620 USD** as a complete set according to an early leak from Planet3DS [^4]. This is the table they had on their now defunct website [^4]:

| Part # | Item                                                              | Price   |
|--------|-------------------------------------------------------------------|---------|
| 73056  | PARTNER-CTR DEBUGGER                                              | $2,620  |
| 73058  | PARTNER-CTR DEBUGGER/CAPTURE (Dual Functionality)                | $3,950  |
| 73065  | Nintendo 3DS (Development only) “Panda” USA                      | $324    |
| 73066  | Nintendo 3DS (Development only) “Panda” EU                       | $324    |
| 73067  | Nintendo 3DS (Development only) “Panda” AUS                      | $324    |
| 73062  | Flash Card, 16 Gbits (2 GBytes) CTR                              | $85     |
| 73063  | Backup Memory, 1Mbit (128 KBytes) Flash CTR                      | $8.35   |
| 73064  | Backup Memory, 4Mbits (512 KBytes) Flash CTR                     | $10.65  |

It is hard to find good images for the non-capture version of the Partner-CTR-Debugger online but here is a video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/d2PfyEvWycY?si=y1mPcRqQ9T__cpxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# References
[^1]: [IQGamer: 3DS Development / Test Hardware Revealed?](http://imagequalitymatters.blogspot.com/2010/05/3ds-development-test-hardware-revealed.html#)
[^2]: [SimonMK7 on X: Here are some images of the IS-CTR-Box/Debugger](https://x.com/SimonOrtizBrian/status/1464387089718382594)
[^3]: [Nintendo 3DS IS-CTR-BOX - Consolevariations](https://consolevariations.com/collectibles/nintendo-3ds-is-ctr-box)
[^4]: [Planet 3DS - Exclusive: Nintendo 3DS Dev Kit prices leaked](https://web.archive.org/web/20110219025126/http://www.planet3ds.net/news/nintendo-3ds-dev-kit-prices-leaked/)
