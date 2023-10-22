---
layout: post
tags: 
- ps1
- hardware
- devkit
title: 'Net Yaroze - The PS1 Consumer Dev Kit'
thumbnail: /public/consoles/Sony Playstation.png
youtube: "kswSNF8gsHY"
image: https://img.youtube.com/vi/kswSNF8gsHY/maxresdefault.jpg
permalink: /net-yaroze
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation
    url: /ps1
  - name: 'Net Yaroze - The PS1 Consumer Dev Kit'
    url: #
recommend: ps1
editlink: /consoles/ps1/NetYaroze.md
---

# Introduction to the Net Yaroze
The Net Yaroze was a consumer development kit for the Playstation 1, it consisted of a customised retail console with the ability to connect to a developer PC. It cost about £550 in the UK [^1] was black in colour and was also used by various Universities to teach game development to their students.

## What you get in the pack
When you recieve a Net Yaroze directly from Sony it will contain the following items:
* Start up Guide
* Library Reference
* User Guide
* Net Yaroze Boot Disc
* Net Yaroze Software Development Disc
* Access card - Similar to a memory card but doesn't store data (for copy protection?)
* Communication cable

### Start up Guide (010-1997-startupguide.pdf)
![NetYarozeStartUpGuide](https://github.com/RetroReversing/retroReversing/assets/40120498/56f11d13-39dd-44b4-8a20-c751f6f0067b)

The NetYaroze Start up Guide has 39 pages going through topics such as the members only website, the hardware and software included, getting set up and even writing a simple sample program!

### Library Reference (030-1997-libraryref.pdf)
![NetYarozeLibraryReference](https://github.com/RetroReversing/retroReversing/assets/40120498/7fbd3ea7-2f97-4372-b727-d39ca674bb8e)
The NetYaroze Library Reference book has 332 or 349 pages depending on version and is blueish-green in color, it contains the API documentation for Graphics, Sound, Standard and Methematical functions. It has full descriptions of each of the functions, their arguments and return values.

### User Guide (020-1997-userguide.pdf)
![NetYarozeUserGuide](https://github.com/RetroReversing/retroReversing/assets/40120498/2603d9fc-7be2-438d-ae7f-d9d4b776a3ac)
The NetYaroze User Guide has 207 pages and is yellow in color, it contains tutorials for game development such as frame buffer, integrated graphics, sound, kernel management, cd-rom management,  and peripheral devices management. Along with documentation for how to use the Sound/Programming and Console tools.

### Net Yaroze Boot Disc
![NetYarozeBootDisc](https://github.com/RetroReversing/retroReversing/assets/40120498/c220a5c1-1f47-446f-a7cb-03b6be724b04)
The NetYaroze Boot Disc is the PS1 Disc that runs the NetYaroze system, it waits for PC input via the communication cable and runs the code sent to it.

### Net Yaroze Software Development Disc
![NetYarozeSoftwareDevelopmentDisc](https://github.com/RetroReversing/retroReversing/assets/40120498/73f63a22-347d-4938-ada2-590319b0c2a9)
The Net Yaroze Software Development Disc contains all the PC development tools requires to compile, link and communicate with the PS1 over the communication cable.

### Net Yaroze Access card
![NetYarozeAccessCard](https://github.com/RetroReversing/retroReversing/assets/40120498/de622a00-0573-4af6-a3e6-abef08621ae1)
The Net Yaroze Access card goes in the Memory card 1 slot and the boot disc doesn't start without it, unsure if this is just for copy protection or if it also saves some data on it.

### Net Yaroze Communication cable
![NetYarozeCommunicationCable](https://github.com/RetroReversing/retroReversing/assets/40120498/4037163b-3247-48f1-890c-f593bf4e7874)
The Net Yaroze Communication cable slots into the back of the PS1 and connects to a PC's serial port 

---
# Net Yaroze in the media

## EDGE Article
Net Yaroze was featured in the 2000 Christmas edition of the UK Magazine called Edge, it contained interviews with eight programmers who used it to get a start into the games industry [^1].

You can read the full article over on archive.org:
[Class of 2000](https://archive.org/details/net-yaroze-class-2000/mode/2up)

## UK Official PlayStation Magazine
Many Yaroze games were included in the free demo disc distributed with the **UK Official PlayStation Magazine** and for many was an introduction to homebrew games!

---
# Developing for the Net Yaroze
Special Thanks to XPCoin, who is one of the few people who have documented the process of developing for Net Yaroze on YouTube!  Check him out here:  https://www.youtube.com/user/gwald

---
# Yaroze games on the NUON DVD games console
Believe it or not a few games built on the Net Yaroze were ported to the relatively obscure NUON platform [^2], they were ported by a site called **DragonShadow Industries**. The way this was done is rather interesting, they were porting their own game **Decaying Orbit** to the NUON and instead of fully reqriting the games source code, they created a wrapper library that simulated some of the Net Yaroze librarys. This has the benefit of allowing multiple Net Yaroze games to be ported to the NUON with little code modification required!

The games released for the NUON that were developed for Net Yaroze are as follows:
* Decaying Orbit by DragonShadow Industries
* Katapila by Ben James
* Invs by Philippe-Andre Lorin
* BreakDown by Chris Wallace

Unfortunetly the source code for this library was never released, so the games that can be ported are limited to the above list for now.

---
# References
[^1]: [Class of 2000](https://archive.org/details/net-yaroze-class-2000/mode/2up)
[^2]: [DragonShadow Industries releases Yaroze Classics for NUON](http://www.the-nextlevel.com/tnl/threads/39974-DragonShadow-Industries-releases-Yaroze-Classics-for-NUON)
