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

## CTR-TEG2 - CTR Target Board - Prototype Hardware
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/7b4afde2-f9e4-4458-803a-7006f6b04011" alt="CTR Target Board" class="wow slideInLeft postImage" />

 <div markdown="1">

The earliest known 3DS dev kit was a bare-bones prototype board used during development before the final 3DS hardware was ready, which has a resemblence to the prototype board that was leaked for the DS.

An FCC filing in 2010 revealed a **Nintendo CTR Target Board** test kit consisting of two attached screens (a widescreen 3D top panel and a 4:3 bottom panel) mounted on a circuit board [^1].

This board included a Nintendo DS cartridge slot and SD card slot, indicating backward compatibility and storage, and was used to validate new components like the Wi-Fi module prior to the 3DS’s release [^8].

This early dev hardware made it clear that only the top screen would have **Sharp’s auto-stereoscopic 3D capability**, while the bottom screen was a standard LCD [^1].

![Closeup of CTR-TEG2 K-10-3628](https://github.com/user-attachments/assets/79aee07b-1b86-46ae-b8da-c0f95c310b3d)

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

![Partner-CTR-Debugger](https://github.com/user-attachments/assets/13d8b280-6df6-4f91-bea1-e8434282f72d)

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
## Partner-CTR Capture Unit
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/492c6e6f-032d-4b2c-9a9e-627bf8226ab3" alt="CTR-001-02" class="wow slideInLeft postImage" />

<div markdown="1">
   
The **Partner-CTR Capture** device is a variant of the dev kit focused on video output and capture for testing or demonstration.

It adds high-resolution video output capabilities, allowing the 3DS’s dual screens to be displayed on external monitors or capture equipment. The capture unit’s external box provides multiple output ports: 
 - **two DVI-D outputs** (one for each screen) for digital display
 - A **Nintendo Wii AV multi-out** for analog video (composite/component).

It also includes a **USB output** interface for direct capture to a PC. Using these, developers or QA staff could mirror the 3DS screens on large displays (up to 720p signal for each screen) or record gameplay footage, which was invaluable for preview events and creating game trailers.

The tethered 3DS controller remains wired to the capture box, so a tester can play normally on the handheld while others view the action on big screens.

Internally, the Capture unit is similar to the Debugger but with additional video encoder hardware. Nintendo offered a combined **Partner-CTR Debugger/Capture** kit at a higher price (\~**\$3,905 USD** for the dual-function model). These capture-enabled kits were rare and typically reserved for larger studios and events due to their cost and Nintendo’s strict licensing.

 </div>
</section> 

**Linus Tech Tips** has a video showing the Partner-CTR Debugger/Capture kit in detail:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4YpRJtvFmP8?si=3RZk_BGkBWT99Uw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The Photo below was posted by **moreretrograde** on Reddit:
![Partner-CTR Capture Unit](https://github.com/user-attachments/assets/0df5de96-2d8e-4180-abca-d4ddd2dc0e85)

---
## CTR-001-02 Partner-CTR Tethered Controller (Wired 3DS)
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/343da3f9-5fa1-4ae9-b891-69dc7bc18016" alt="CTR-001-02" class="wow slideInLeft postImage" />
<div markdown="1">
   
The **Partner-CTR development** kits all use a special modified 3DS unit (model CTR-001-02) as the input device [^6]. 

Instead of a functional game cartridge slot, the unit has a panel with two locked cable connectors that attach to the dev kit box.

Through these cables, the handheld’s screens and input are linked to the main dev hardware (video data is sent to the monitors/PC, and input is sent back to the game).

The handheld itself is a **dummy terminal** containing only the LCD displays, speakers, and input controls – most processing and storage are handled by the external Partner box. This design lets developers experience the game on an actual 3DS form-factor (e.g. to test 3D effect using the real screen and to use the touch interface) while still benefiting from debugging and capture features in the host unit.

The wired controller has a reduced internal board and is lighter, since many components (CPU, RAM, etc.) are relocated to the dev kit box. 
 
Nintendo continued this approach of a wired dev-unit controller from the DS era (e.g. the IS-NITRO-Emulator’s DS controller) because it effectively emulates the user experience while enabling full debugging on the PC.
 </div>
</section> 

---
## CTR-001-01 - Panda Development Consoles
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/66ee1c3a-d8a8-4f75-8127-108a2fdf9122" alt="CTR-001-01 Panda" class="wow slideInLeft postImage" />
<div markdown="1">
  
In addition to the full debugger boxes, Nintendo provided simpler **development consoles**, nicknamed **Panda** units, for teams to test games in a more portable, retail-like environment. 
A Panda unit is essentially a modified 3DS handheld that can run unsigned code and dev cartridges but lacks advanced debugging or video-out capabilities.

Panda units use a unique colored shell (often white, silver or black mixes) and contain special boot ROMs and NAND software (Dev Menu, etc.), but otherwise are similar in specs to a retail 3DS. 

They can boot games from any region and from SD card or dev flashcards, bypassing the normal Home Menu for direct launch of software under development.

 However, they will **not run standard retail cartridges** (the keys differ) and cannot access online services like eShop in retail mode.

![Panda in box](https://github.com/user-attachments/assets/eec61cd2-4eec-41e0-b9ed-3b3e1b4c441e)

 These units were relatively inexpensive (\~**\$324 USD** each) compared to the full debugger kits, so studios would buy multiple Panda consoles for QA testers and developers to multiplayer test or continue work off-site.
 </div>
</section> 

Elliot from **The Retro Future** has a video showing off the Panda Development Console:
<iframe width="560" height="315" src="https://www.youtube.com/embed/JvMQs0fnhE4?si=qwBvvWgo4wRLZkbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

 Aside from the case color and a “NOT FOR RESALE” type markings, they look nearly identical to a normal 3DS. (Notably, the term “Panda” was also used for the DSi debug units, continuing the animal-themed dev kit nicknames.)

---
## Rewritable 3DS Development Cartridges
<section class="postSection">
    <img src="https://github.com/user-attachments/assets/2e18b6d8-34f4-45a6-be57-162e347df272" alt="CTR-001-01 Panda" class="wow slideInLeft postImage" />
<div markdown="1">

Like past Nintendo systems, the 3DS uses special **re-writable flash cartridges** to load in-development games. The official **CTR flash cards** resem
ble slightly thicker 3DS game cards with generic labels.

One common model has a 16 Gbit (2 GB) capacity, and larger versions up to 4 GB (32 Gbit) were produced as well. These dev carts have no region lock and are reprogrammable – developers can flash their compiled game builds onto the cart and run them on Panda units or Partner-CTR kits. The cartridges do not have the physical write-protect notch that retail game cards have, and they are usually colored dark gray or other non-standard colors to avoid confusion with retail games. Inside, they contain flash memory for game content and **no built-in save memory**, unlike retail carts.

Instead, the dev cartridges support external **backup memory** modules for game save data. The flash media can be erased and written thousands of times; developers noted they were “easily re-flashed… allowing for easy re-use” during the iteration process.

Some flash carts used by Nintendo at trade shows were shorter (the size of a normal cart) and preloaded with specific demo software, but the **taller** official dev cartridges (approximately double height) allow inserting different capacity backup-memory boards and possibly contained additional debugging interfaces.
 </div>
</section> 

---
### Backup Save Memory Modules
<img width="490" alt="CTR-Flash-Card" src="https://github.com/user-attachments/assets/f3ff420e-f9a4-42d3-b448-3a67dae547d0" />

To accommodate various save sizes and types during development, Nintendo provided **removable save flash chips** for the dev cartridges instead of fixed internal save RAM. These are similar to how Sub Cards worked on the official Nintendo DS flash cards.

These were often referred to as **Backup Memory (Flash) for CTR** and came in at least two sizes: **1 Mbit (128 KB)** and **4 Mbit (512 KB)**, corresponding to the typical save sizes of retail 3DS games. Developers could purchase these backup flash modules for only a few dollars each and use them in conjunction with the dev cart.

The tall CTR dev cartridge has a compartment or socket to insert the backup flash (similar in concept to the DS “sub card” system). This design let teams test their game’s save behavior with different memory sizes or technologies ( EEPROM vs. flash ) by swapping the backup chip.

If a game needed, say, 512KB of save data, the corresponding 4Mbit module could be used to ensure the game functioned within that limit. **Save Data Filer** tools in the 3DS SDK allowed managing the contents of this save memory during testing. (On dev units, saves could also optionally be redirected to the SD card for convenience, but the physical backup flash was used to mimic the exact retail scenario.)

---
## Other Hardware Accessories
The 3DS development kits largely did not require the elaborate “gang writers” of older systems, since the Partner-CTR hardware and PC software could directly flash dev cartridges over USB.

For example, the **Host I/O (HIO)** feature in the dev menu allowed installing game builds to a connected dev kit without manual cartridge writing. However, a few miscellaneous hardware tools were used in the 3DS dev pipeline:

* **Debug and Link Cables:** The Partner-CTR kits shipped with proprietary dual-cables for the controller hookup, as well as USB cables for PC connectivity and optionally extension cables for video output. Standard Wii **AV cables** could be used in the multi-out port of the capture unit for analog output. The dev kits did **not** use normal Wi-Fi for debugging; instead, they relied on USB or wired links for stability.
* **Power Supplies:** The Partner-CTR and IS-CTR-BOX units use external power adapters rather than the small 3DS AC adapter. In fact, similar to earlier dev kits, the IS-CTR-BOX was reported to use a GameCube-style 12V power supply, and the Partner-CTR may use a custom PSU (development units often had robust power requirements). Some kiosk demo 3DS units (CTR-001-05) even used a modified HDMI-like power cable for security in retail displays, but those were not used in development labs.
* **Firmware Update Tools:** To keep dev hardware updated with the latest system software and SDK, Nintendo provided **development unit system updater cartridges/applications**. Specifically, a **“CTR System Updater” (CSU)** was used for original 3DS-based units, and a **“SNAKE System Updater”** for New 3DS units, which install the latest dev firmware, OS, and tools onto the device. These updater programs (distributed as encrypted CIAs or carts) would bring a Panda unit’s system software in line with the SDK version target. Developers would run these periodically, as the dev OS included debug versions of the Home Menu, DevMenu, and other system applets with extra logging and features (for example, the dev Home Menu can display CPU/GPU usage and allows screenshot capture).
* **Gyro Sensor Calibration CTR** Used at Foxconn to test the hardware gyroscope.

![Gyro Sensor Calibration CTR](https://github.com/user-attachments/assets/0c059cab-0974-4f35-966a-35a4dad244e6)


---
## New 3DS Snake Dev Kits
 When the New Nintendo 3DS was introduced (with upgraded CPU, additional RAM, and new functions), Nintendo also updated the dev hardware. Revised development kits code-named **SNAKE** were offered, incorporating the New 3DS’s improved specs.

These were essentially Partner-CTR Debugger/Capture devices with upgraded internals to match the new model’s faster processor and added features. For instance, the SNAKE kits allowed testing the extra CPU core and extended memory mode available to New 3DS titles.

The overall form and function remained the same (tethered New 3DS unit and dev box). This ensured backward compatibility while enabling development of exclusive New 3DS software and performance tuning on the new hardware revision. The SNAKE name appears in update tools and documentation, but the hardware was still generally referred to under the CTR Partner branding by developers.

By late in the 3DS’s life, tools like Unity and other middleware also supported the hardware, but these were software-side improvements.



---
# Third-Party and Partner Development Tools

Unlike the DS era, no separate third-party commercial dev kit (such as SN Systems’ ProDG) came to market for the 3DS – the **Partner-CTR** series effectively *was* the standard. (SN Systems had announced DS support years prior, but by the 3DS launch SN Systems was owned by Sony and did not provide a 3DS solution.)

Instead, licensed developers all used Nintendo’s provided SDK and hardware kits. The SDK included compiler toolchains, debugger software for the Partner-CTR, and even a Visual Studio 2010 integration plugin for coding on 3DS. Some studios did employ additional tools in their pipeline: for example, **Proprietary analyzers and profilers** (like SN Systems Tuner or homegrown performance tools) could be used on the output from the dev kit to optimize code.

But the core development and debugging always revolved around the Nintendo-provided hardware. Nintendo also had an online platform (NintendoWare/NW4C) for developers to download sample code, libraries, and documentation throughout the 3DS’s life. In summary, the 3DS did not see any alternative dev units from third parties; the official Partner-CTR debugger/capture and Panda units were the universal solution for 3DS game development.

One notable third-party contribution was the **middleware and engine support** that grew later in the 3DS lifecycle. For instance, **Unity for New 3DS** was released as an add-on, allowing developers to use the Unity engine and deploy to 3DS hardware. Similarly, other engines (Unreal Engine variants, etc.) and tools (like audio and physics libraries) were made compatible with Nintendo’s hardware, but those were purely software.

On the hardware side, companies like **Kyoto Microcomputer** were essentially acting as a contractor for Nintendo – the Partner-CTR units are sometimes branded with KMC’s logo and they handled distribution in some regions. Nintendo’s close control over 3DS development meant unofficial hardware was not really seen in studios.

---
# References
[^1]: [IQGamer: 3DS Development / Test Hardware Revealed?](http://imagequalitymatters.blogspot.com/2010/05/3ds-development-test-hardware-revealed.html#)
[^2]: [SimonMK7 on X: Here are some images of the IS-CTR-Box/Debugger](https://x.com/SimonOrtizBrian/status/1464387089718382594)
[^3]: [Nintendo 3DS IS-CTR-BOX - Consolevariations](https://consolevariations.com/collectibles/nintendo-3ds-is-ctr-box)
[^4]: [Planet 3DS - Exclusive: Nintendo 3DS Dev Kit prices leaked](https://web.archive.org/web/20110219025126/http://www.planet3ds.net/news/nintendo-3ds-dev-kit-prices-leaked/)
[^5]: [Got my grail this week. The PARTNER-CTR Capture Debugger! : r/nds](https://www.reddit.com/r/nds/comments/1hg0mro/got_my_grail_this_week_the_partnerctr_capture/)
[^6]: [3DS Hardware](https://www.lucklessheaven.com/nintendo-3ds-hardware)
[^7]: [3DS Development Hardware - GBAtemp.net](https://gbatemp.net/threads/3ds-development-hardware.327858/)
[^8]: [CTR-TEG2 (3DS Devkit from 2009) - All Known Media - Internet Archive](https://archive.org/details/CTR-TEG2/K-10-3628/nintendo-ctr-target-board-detail-1678569419-91.jpg)
