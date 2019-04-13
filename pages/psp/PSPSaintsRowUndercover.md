---
layout: post
tags: 
- psp
- beta
- prototype
- games
title: PSP Saints Row Undercover Officially Released Prototype
thumbnail: /public/consoles/Sony PSP.png
image: https://img.youtube.com/vi/-8O2cLAiWIE/maxresdefault.jpg
permalink: /psp-saints-row-undercover
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation Portable
    url: /psp
  - name: Saints Row Undercover Officially Released PSP Prototype
    url: #
recommend: psp
editlink: /psp/PSPSaintsRowUndercover.md
videocarousel:
  - title: Inside Volition Saints Row Undercover
    image: https://img.youtube.com/vi/-8O2cLAiWIE/maxresdefault.jpg
    youtube: '-8O2cLAiWIE'
  - title: Volition Plays Saints Row Undercover
    image: https://img.youtube.com/vi/YYvAO6yOgYc/maxresdefault.jpg
    youtube: 'YYvAO6yOgYc'
  - title: How to Play Saints Row Undercover on PSP! - Unreleased Saints Row Game Patched
    image: https://img.youtube.com/vi/LIUJaqQDl74/maxresdefault.jpg
    youtube: 'LIUJaqQDl74'
---
# Saints Row Undercover
Also known as `Saint Row - The Fall` earlier in development, this is one of the rare few prototype games released by the developers themselves, in this case Savage games and Volition, they are a rare example of developers that truly cares about the community and game preservation [^1].

The story behind the release is very interesting and can be read in full over at Unseen64 (https://www.unseen64.net/2016/01/25/saints-row-undercover-fall-psp-cancelled/) including a link to download the playable prototype, design doc and prototype. In short this release is mainly thanks to Josh Stinson who found the game in a random cupboard around the office and managed to convince his bosses with support from Alexander Mejia and Mike Watson to allow releasing information about this game [^1].

# The ISO Image
<img src="/public/images/SaintsRowPSPDVD.jpg" />
The PSP devkit supports 2 different methods of reading discs, one from the UMD drive and the other from a built in DVD drive. The build found by Violition was burned to a DVD-R and will only play on a Official PSP dev kit until it was ripped into .ISO format which can be run by both emulators and modded PSP consoles.


## How to play the ISO
Interestingly there is a few modifications you need to make in order to run the ISO on a psp. MrMario has created a video covering how to do this [^2]:
<iframe width="560" height="315" src="https://www.youtube.com/embed/LIUJaqQDl74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## EBOOT.BIN
The EBOOT.BIN file in the iso is completely blank, although it says it is 6mb it is actually just 6mb of 0 bytes. This is why tutorials tell you to replace the EBOOT.BIN with the BOOT.BIN. 
This is common for prototypes as the EBOOT.BIN is only really needed when encrypting for the final release to retail PSP units.


# References
[^1]: [Saints Row: Undercover [PSP - Cancelled] - Unseen64](https://www.unseen64.net/2016/01/25/saints-row-undercover-fall-psp-cancelled/)
[^2]: [(116) How to Play Saints Row: Undercover on PSP! - Unreleased Saints Row Game Patched - YouTube](https://www.youtube.com/watch?v=LIUJaqQDl74)
