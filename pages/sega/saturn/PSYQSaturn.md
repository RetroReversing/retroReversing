---
layout: post
tags:
- devkit
- hardware
- saturn
- sega
- snsystems
- psyq
- psygnosis
title: PsyQ Sega Saturn Development Kit
image: /public/images/saturn/Sega Saturn PSYQ Development Kit.jpg
thumbnail: /public/consoles/Sega Saturn.png
permalink: /psyq-sega-saturn/
breadcrumbs:
  - name: Home
    url: /
  - name: Development Kits
    url: /devkit
  - name: PsyQ Sega Saturn Development Kit
    url: #
recommend: devkit
editlink: /sega/saturn/PSYQSaturn.md
references:
  - segaretro.org
---

# Advert for PsyQ for Sega Saturn
Advert in EDGE issue 20 for the Sega Saturn development kit by Sony owned Psygnosis and SN Systems:
<img src="/public/magazine/PsyQ.Saturn.EDGE.N020.1995.05.jpg" />

# SegaRetro
There is also some information and a manual for the PSY-Q Saturn development kit on SegaRetro: [PSY-Q Development System](https://segaretro.org/PSY-Q_Development_System)

# Games that were built with PSYQ

Games:
* Bubble Bobble also featuring Rainbow Islands
* Batman Forever - The Arcade Game
* Battle Stations

---
# Interesting PSYQ Related Strings


On Windows/DOS systems PSYQ the PSYQ SDK was normally installed to the root of the main harddrive, so it is very common to find games that have references to the location built into the executables, such as:
* `c:/psyq/`
* `d:\\psyqsat` (in the game BattleStations)

We know that the PSYQ SDK install folder contained at least these folders:

Folder Name | Purpose
---|---
include | Holds all the PSYQ .h header include files
segalib | Holds the sega libraries for saturn


## PSYQ Includes
Known PSYQ header includes are listed in the table below:

File | Purpose
---|---
_ansi.h | 
ctype.h |
sys/config.h | 


# References
[^1]: [Sega Saturn PSY-Q Development Kit (PSYGNOSIS)](http://www.psygnosis.org/history/SATURNPSYQ/)
