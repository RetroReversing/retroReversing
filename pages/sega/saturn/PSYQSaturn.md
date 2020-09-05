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
title: Psy-Q Sega Saturn Development Kit
image: /public/images/saturn/Sega Saturn PSYQ Development Kit.jpg
thumbnail: /public/consoles/Sega Saturn.png
permalink: /psyq-sega-saturn/
breadcrumbs:
  - name: Home
    url: /
  - name: Development Kits
    url: /devkit
  - name: Psy-Q Sega Saturn Development Kit
    url: #
recommend: devkit
editlink: /sega/saturn/PSYQSaturn.md
references:
  - segaretro.org
updatedAt: '2019-11-08'
---

# Introduction to PSY-Q Saturn
The PsyQ Sega Saturn development kit was developed by a partnership of Psygnosis and SN Systems in order to make it really easy to develop for both the Sega Saturn and PS1 using the same sort of development approach.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">*Almost* a complete Psy-Q setup! At least I have enough bits to make it do something useful now. Pretty damn happy. <a href="https://t.co/JZsPnIiYkR">pic.twitter.com/JZsPnIiYkR</a></p>&mdash; Matt Phillips (@bigevilboss) <a href="https://twitter.com/bigevilboss/status/1142030178996183042?ref_src=twsrc%5Etfw">June 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## How it worked
Instead of relying on modified console such as their competitors `Cross Products` they used purly retail hardware with the aim of reducing costs for development studios as the retail hardware and repair costs are much cheaper than specialist hardware.

In order to turn the retail consoles into a development system they used cartridges that plugged into the retail console that has software written in assembly to control the hardware. 

The cartridge would have a SCSI port for connection between the cartridge inside the console and the development PC. The saturn version was no different and slotted into the memory expansion slot above the CD drive.

## Advert for Psy-Q Sega Saturn
Ther is an advert in the UK magazine EDGE issue 20 for the PSYQ Sega Saturn development kit, which would be competing against the Official `Cross Products` development kit also advertised in the same issue:
<img src="/public/magazine/PsyQ.Saturn.EDGE.N020.1995.05.jpg" />

## Development Manual for PSY-Q Saturn
The excellent wiki known as SegaRetro has uploaded the full development manual for using the PsyQ development kit for Sega Saturn. It is unknown where they managed to get it from but it is much appreciated by the whole sega saturn community.

{% include link-to-other-site.html url="https://segaretro.org/PSY-Q_Development_System" description="SegaRetro has the programmer manual available for download." title="PSY-Q Development System Manual" image="https://segaretro.org/images/thumb/9/97/Psy-Q_Development_System_%28Sega_Saturn%29.jpg/511px-Psy-Q_Development_System_%28Sega_Saturn%29.jpg" %}

---
# Games that were built with PSYQ
Not many Sega Saturn games were actually developed using the PsyQ development kit unfortunetly, but there were a small number of quality titles that we have confirmed use the PsyQ SDK.

The Games are:
* Bubble Bobble also featuring Rainbow Islands
* Batman Forever - The Arcade Game
* Battle Stations

---
## Interesting PSYQ Related Strings within the Games

On Windows/DOS systems PSYQ the PSYQ SDK was normally installed to the root of the main harddrive, so it is very common to find games that have references to the location built into the executables, such as:
* `c:/psyq/`
* `d:\\psyqsat` (in the game BattleStations)

From these games we also know that the PSYQ SDK install folder contained at least these folders:

Folder Name | Purpose
---|---
include | Holds all the PSYQ .h header include files
segalib | Holds the sega libraries for saturn


## PSYQ Includes
As PsyQ Saturn was a C-based development kit, it was common to provide an api via c header (.h) files. Since there is no version of PsyQ Saturn available on the internet we have had to data mine a few games that have left over symbols in them.
These are presented in the list below:

File | Purpose
---|---
_ansi.h | 
ctype.h |
sys/config.h | 


# References
[^1]: [Sega Saturn PSY-Q Development Kit (PSYGNOSIS)](http://www.psygnosis.org/history/SATURNPSYQ/)
