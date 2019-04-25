---
layout: post
tags: 
- ps1
- hardware
- devkit
title: Official PlayStation 1 Development Kit (Hardware)
thumbnail: /public/consoles/Sony Playstation.png
image: https://img.youtube.com/vi/y3aKAFafPoc/maxresdefault.jpg
permalink: /official-playStation-devkit
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation
    url: /ps1
  - name: Official PlayStation 1 Development Kit (Hardware)
    url: #
recommend: ps1
editlink: /ps1/PlayStationDevelopmentSystem.md
videocarousel:
  - title: DTL-H2000 Official PlayStation Development System
    image: https://img.youtube.com/vi/y3aKAFafPoc/maxresdefault.jpg
    youtube: 'y3aKAFafPoc'
  - title: PS1 Debug Stations
    image: https://img.youtube.com/vi/mdaavzvAxwA/maxresdefault.jpg
    youtube: 'mdaavzvAxwA'
---
This post covers the hardware used to develop Playstation One games by major studios back in the day, for the software side see:
{% include link-to-other-post.html post="/official-playstation-1-software-development-kit-(psyq)/" description="For the software side of the PS1 development kit (PsyQ) check out this post." %}

# PC Development Environment
<img src="/public/images/psOneTool.jpg"/>

Unlike previous games consoles, Sony decided to use a system that plugs in to a standard PC instead of rolling their own development hardware. This allowed developers to use their PC development experience and tools straight to work when developing playstation games.


EDGE magazine issue 20 had the following to say about this decision:

> Perhaps the most ingenious move on Sony's part was its decision to use the PC as a development platform, enabling it to call on the skills of huge number of developers. 
> Licensees now receive a pair of full-length ISA cards that plug into a normal PC. 
> These two cards contain the entire PlayStation chipset, as well as extra RAM and some logic to enable them to talk to the PC. 'lt's great having the system inside the PC,' reckons Peter Molyneux. 'With most bulky console development systems it sometimes feels like you're surrounded by NASA control.'
> 					
> Such technology doesn't come cheap, though. PlayStation developers need to cough up £ 12,000 for the full system (which Sony is adamant it doesn't make money on), although all subsequent software tools and hardware upgrades are free.
> 					
> But the decision to embrace the PC as a development platform has wider ramifications. Rather than promote a PlayStation-only development path, Sony has seen the advantage of capitalising on the crossover of product between the two platforms. 
The vast majority of non-Japanese developers are focusing on both formats (in Japan the IBM-compatible PC has a small following). 
> 
> The PlayStation hardware was condensed by SCE Japan onto two cards that  would fit inside a standard PC. The Japanese flew Andy and Martin (From SN Systems) out to Tokyo in June to let them work on the new setup and write new software, so that the bulk of the existing system worked with the new hardware. Apart from extra RAM (eight megabytes of DRAM as opposed to two megabytes in the production PlayStation) and some PC logic, the hardware that slotted into the PC was virtually the same as the production PlayStation.
[^2]


# MW.3 (Original Prototype Playstation)
Original Prototype PS1 given to only a few developers such as SN Systems and was called MW.3, it was only used for very early playstation games. This was basically just an entitre prototype playstation and the hardware differes from the finally released retail playstation, a photo of it was provideded in EDGE issue 20:
<img src="/public/magazine/PS1OriginalDevKitMW3_EDGE_Issue_20.png" />

# Twin ISA Development Kit:
The Twin ISA development kit was the most popular development kit used for the playstation:
<img src="/public/magazine/PS1DevKitTwinISA_EDGE_Issue_20.png" />

# DTL-H2000
<img src="/public/images/psoneToolISA.jpg"/>
The video above shows the DTL-H2000 Development unit which slots into the ISA slot of a PC and contains all the hardware on a retail PS1.
These boards were originally sold only to licensed developers only. 

<img src="/public/images/psone-DTL-H2510.jpg"/>

# CD Emulator Card
<img src="/public/images/AllPSOneDevBoards.jpg"/>

The CD emulator card developed by SN Systems (yellow card in above screenshot) is mentioned briefly in the same EDGE UK magazine article:		
> This enabled the company to design a CD emulator card which connected to a hard drive and output a steady data stream equivalent to that from the CD drive. 
> Now PlayStation	code could be written and tested under simulation without having to repeatedly cut expensive gold COs (requiring a specialist Sony machine costing £4000).
[^2]

# Blue Debugging Playstation
The Blue debugging playstation is described in the EDGE UK magazine issue 20:
> However, the few differences between the development kit and a production Playstation mean that final testing is done on a blue debugging PlayStation - this is the closest it gets to running on a production console before the complete game is submitted to Sony for duplication.  
[^2]

# PSY-Q PlayStation Plug-in
To go along with the PC based development environment, SN Systems also developed a custom plugin for the back of the playstation debug unit. This turns the debug unit into a full development environment!

<img src="/public/magazine/Sn Systems hadrware for Ps1 PsyQ in Next_Generation_Issue_015_March_1996_0083-2.jpg" />
[^1]

# References
[^1]: Next generation issue 15 from March 1996
[^2]: EDGE issue 20
[^3]: [SONY TOOL Playstation One PS1 Development DTL Devkit Debugging - RARE PROTOTYPE | eBay](https://www.ebay.com/itm/SONY-TOOL-Playstation-One-PS1-Development-DTL-Devkit-Debugging-RARE-PROTOTYPE/173864533814?_trkparms=aid%3D222007%26algo%3DSIM.MBE%26ao%3D1%26asc%3D20131231084308%26meid%3Df253eb90745846e382cf476c18395868%26pid%3D100010%26rk%3D5%26rkt%3D12%26sd%3D113713937185%26itm%3D173864533814&_trksid=p2047675.c100010.m2109)
