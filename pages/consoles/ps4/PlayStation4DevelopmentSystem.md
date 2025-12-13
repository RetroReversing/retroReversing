---
layout: post
tags: 
- ps4
- hardware
- devkit
title: Official PlayStation 4 Development Kit (Hardware)
thumbnail: /public/consoles/Sony Playstation 4.png
image_: /public/images/ps3/Sony PS4 Devkit hardware.jpg
permalink: /official-playStation4-devkit
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 4
    url: /ps4
  - name: Official PlayStation 4 Development Kit (Hardware)
    url: #
recommend: 
  - devkit
  - ps4
editlink: /consoles/ps4/PlayStation4DevelopmentSystem.md
---

This post covers the hardware used to develop PlayStation 4 games by major studios back in the day, for the software side see the post on the Official PS4 SDK.

## Pricing Information
The PS4 development kits were split into "Testing Kits" for QA and "Development Kits" for software developers. With both having an alternative Bundle version.

The prices for standard PS4 testing kits and the PS4 Pro testing/development hardware are listed in the table below in Euros (€), currently we don't know the price of the standard PS4 Development kit.

ID | Name | Price in Euro
---|---|---
9267669 | DUALSHOCK 4 CONTROLLER | € 50.00	
DUH-D1000AA | PS4 DEVELOPMENT KIT | Unknown ?
DUH-T1200AA | PS4 TESTING KIT (C CHASSIS) | € 800.00	
DUH-T1200AAB | PS4 TESTING KIT BUNDLE (C CHASSIS) | € 800.00	
DUH-T2000AA | PS4 TESTING KIT (D CHASSIS) | € 800.00	
DUH-T2000AAB | PS4 TESTING KIT BUNDLE (D CHASSIS) | € 800.00	
DUH-D7000AA | PS4 PRO DEVELOPMENT KIT | € 2,000.00	
DUH-D7000AAB | PS4 PRO DEVELOPMENT KIT BUNDLE | € 2,000.00	
DUH-T7000AA | PS4 PRO TESTING KIT | € 800.00	
DUH-T7000AAB | PS4 PRO TESTING KIT BUNDLE | € 800.00	

## DUH-D1000AA - Original PS4 Development Kit (DUH-D1000AA)
<img width="1767" height="1325" alt="DUH-D1000AA from WorldUponAString on Reddit" src="https://github.com/user-attachments/assets/68f1665c-67c8-431e-82c1-1bfe41cae67b" />

The development kit details were known about as early as July 2013 due to the FCC white papers that are available to the public [^3]. These included sketches of the front and back of the unit and low level hardware details including the new intake fan.

[devkit](https://www.youtube.com/watch?v=dgfGF2Dt_Bs) provides a detailed overview of an early PlayStation 4 development hardware unit (model DUH-D1000AA), highlighting physical differences such as additional USB/Ethernet ports and debug LEDs. 

The video demonstrates the system's "expired" state, explores the extensive debug settings menu, and showcases the **Neighborhood** desktop software used for remote console management and package installation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dgfGF2Dt_Bs" frameborder="0" allowfullscreen></iframe>

Thanks to **WorldUponAString** over on Reddit we have a photo of the rear of the Unit [^2]:
![Rear of DUH-D1000AA](/public/images/ps4/PS4_DUH-D1000AA_Rear_WorldUponAString.png)


---
## DUH-D7000AA - Sony PlayStation 4 Pro DevKit
The PS4 Pro development kit **DUH-D7000AA** was made by Foxconn [^1] and had a stackable design ideal for rack mounting which would be useful for connecting to the hardware from developers machines over the network.

### Front Panel
Here are some specifications about the front panel of the development kit:
  * **Material:** Thin brushed aluminum plate.
  * **Debug:** Row of LEDs numbered 0–7 (likely for binary debug codes).
  * **Controls:** Standard Power/Eject plus Dev-specific buttons (Reset, System/Memory access).

### I/O (Connectivity):**
The hardware provided the following ports:
  * **Front:** 3x USB ports.
  * **Rear:**
    * 2x Ethernet (RJ45): One standard, one labeled **DevLAN**.
    * 1x USB Type-B ("Dev USB").
    * 1x Standard Rear USB.
    * Aux port (likely for Camera/VR).
    * HDMI & Optical Out.

### Internal Hardware
[Gamers Nexus](https://www.youtube.com/watch?v=aPBFzdQCrVE) performs a detailed teardown of a the DUH-D7000AA PlayStation 4 Pro development kit. The analysis reveals a unique, robust cooling system with massive 12mm heat pipes that potentially influenced the later PS5 design, alongside a doubled memory capacity of 16GB GDDR5 compared to the retail version.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aPBFzdQCrVE" frameborder="0" allowfullscreen></iframe>

Here are the internal hardware components shown off in the video:
  * **APU (Processor):**
      * **Model Number:** Sony CXD90044GC.
      * **Die Size:** ~23.0mm x 14.9mm.
  * **Memory (RAM):**
      * **Total Capacity:** **16GB GDDR5**.
      * **Configuration:** 16 x 1GB modules (8 on each side of the motherboard).
      * **Note:** This is double the 8GB found in the consumer PS4 Pro to assist with debugging.
  * **Storage:**
      * **Drive Type:** 2.5-inch HGST HDD.
      * **Specs:** 1TB, 5400 RPM, SATA 3Gb/s.
  * **Power Supply:**
      * **Output:** ~330 Watts on the 12V rail.
      * **Features:** Modular design with accessible external probe points for technicians.


---
# References
[^1]: [Gamers Nexus - PS4 Pro Development Kit](https://www.youtube.com/watch?v=aPBFzdQCrVE)
[^2]: [WorldUponAString - Finally got what I consider to be a grail in my collection, a PS4 Development Kit. : r/gamecollecting](https://www.reddit.com/r/gamecollecting/comments/xapla7/finally_got_what_i_consider_to_be_a_grail_in_my/)
[^3]: [PS4 dev kit reveals juicy hardware details - MyGaming](https://mygaming.co.za/news/playstation/56346-ps4-dev-kit-reveals-juicy-hardware-details)
