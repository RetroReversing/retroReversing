---
layout: post
tags:
- devkit
- hardware
- saturn
- sega
title: Official Sega Saturn Development Kit (Hardware)
published: true
thumbnail: /public/consoles/Sega Saturn.png
youtube: 3E4Gvue9Im8
image: /public/SaturnProgrammingBox.jpg
permalink: /sega-saturn-programming-box/
breadcrumbs:
  - name: Home
    url: /
  - name: Development Kits
    url: /devkit
  - name: Official Sega Saturn Development Kit (Hardware)
    url: #
recommend: devkit
editlink: /sega/saturn/SegaSaturnProgrammingBox.md
references:
  - segaretro.org
  - youtube
---

During the sega saturns lifecycle there were multiple development kits available to developers starting from the original Sphia Systems that came out before the retail hardware, followed by devkits from both `Cross Products` (Official) and the Unofficial `SN Systems (PSYQ)`.

# Sega Saturn Programming Box (Sophia Systems)
<img src="/public/SaturnProgrammingBox.jpg" />
The original Sega Saturn Programming box (or P-Box) became available to developers before the retail release of the Saturn and was the first development kit available for the Saturn [^1].

These were later replaced by the CartDev development kit but the new CartDev also had configuration options to connect to the older P-Box.

The P-Box had a DIP switch to change between the built in CD emulator (which booted from hard drive) to the actual CD drive, so developers could load their game on the built in hard drive instead of burning a CD each time they wanted to test.

The P-Box also has a SCSI connection to the developers PC (or SGI Indy) so the developer could send game builds to the system and debug games from the PC interface.

---
# Sega of America's Cart Dev
￼<img src="/public/images/saturn/P-BOX_and_CartDev.png" />

The following youtube video shows a CartDev in action:
<iframe width="560" height="315" src="https://www.youtube.com/embed/qKH07vPTC7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Connecting CartDev To the old P-Box
￼<img src="/public/images/saturn/ConnectCartDevToPBox.png" />

## Connecting CartDev to modified retail Saturn
￼<img src="/public/images/saturn/ConnectCartDevToRetailSaturn.png" />

---
# Cross Products Dev Kit
￼<img src="/public/images/saturn/CrossProductsCartDev.png" />
According to the article in EDGE Cross Products has just been bought by SEGA and were in charge of supplying the CartDev, Mirage CD Emulator and Modified Saturn to game development studios [^3].

The Software Development Kit that was provided with these systems were also provided by Cross Products and were under the `SNASM2` SDK brand name. This provided all the standard libraries, compilers and other build tools to create Saturn games.

# Modified Sega Saturn
The Modified Sega Saturn the Cross Products sold to game developers can be seen in this sort youtube video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/72Ac7R5TMuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It has a DIP switch on the side to switch between the CD emulator and the actual CD drive inside the saturn. 
It also has a connection port on the left hand side of the unit along side a Cross Products Logo. This is where it would connect to the Mirage CD emulator from Cross Products.

Presumably the modification to be able to use the CD emulator is the only modification made to the retail saturn units, but its also possible they enabled running CD-Rs without using the Sega Saturn Boot disc, but this is unconfirmed.

---
# Sega Saturn Boot DIsc
Similar to the Dreamcast's Systm Disc 2, this is a disc that allows any retail sega saturn to play developer written CD-Rs without any saturn modding required.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jdOdhjv1FNY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is very useful for developers as they could burn CD-Rs and pas them off to the tsting team that just need the system disc and the burned CD-R [^4].

---

# References
[^1]: https://segaretro.org/Sega_Saturn_Programming_Box
[^2]: https://segaretro.org/Sophia_Systems
[^3]: EDGE Magazine issue 23 (August 1995)
[^4]: [(198) Sega Saturn System Boot Disc (Play Backups Without Modding!) - Game Taff - YouTube](https://www.youtube.com/watch?v=jdOdhjv1FNY)
