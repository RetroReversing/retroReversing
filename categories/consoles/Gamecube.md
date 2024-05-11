---
permalink: /gamecube/
layout: post
title: Nintendo Gamecube (Dolphin) Reverse Engineering
recommend: gamecube
recommendTitle: All GC Posts
editlink: ../categories/consoles/Gamecube.md
console: 'gamecube'
consoleimage: /public/consoles/Nintendo Gamecube.png
thumbnail: /public/consoles/Nintendo Gamecube.png
excerpt: Awesome list of Nintendo Gamecube Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Nintendo Gamecube (Dolphin) Reverse Engineering
    url: #
redirect_from:
  - /gc
  - /dolphin
---
Welcome to our page dedicated to Gamecube reverse engineering! The Gamecube was a popular gaming console released by Nintendo in 2001, and has since become a beloved classic of the gaming world. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Gamecube reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Gamecube controller, and get ready to dive into the exciting world of Gamecube reverse engineering!

# Hardware
The Nintendo Gamecube has fairly sophisticated hardware for the time, this was when Nintendo was still trying to compete with raw processing power. The hardware would then be used as a basis of both the Wii and Wii U consoles in the future.

## Retail Hardware
Rodrigo Copetti has an excellent in-depth article about the hardware architecture of the Nintendo Gamecube, it is a must read for anyone wanting to reverse engineer Gamecube games as you will need to know all about the low level architecture.

{% include link-to-other-site.html url="https://www.copetti.org/projects/consoles/gamecube/" description="The website by Rodrigo Copetti is required reading for any information you want to know about the Gamecube console hardware architecture." image="/public/consoles/Nintendo Gamecube.png" title="Rodrigo Copetti's Gamecube Hardware Architecture"  %}

## Development Hardware
{% include link-to-other-post.html post="/gamecube-development-kit-hardware/" description="For information about Nintendo's Dolphin development hardware check out this post." %}

## Unreleased Hardware
In China there were plans to release a version of the Gamecube with DVD playback functionality and additional security. This was to be a sequel to the iQue Player which was a Chinese only Nintendo 64 plug and play device. However half way through development the resources were moved to work on the Nintendo Wii instead.
{% include link-to-other-post.html post="/ique-gamecube/" description="For information about iQue/BroadOn's prototype Chinese Gamecube hardware check out this post." %}


---
# Gamecube Games
The Nintendo Gamecube has an excellent library of games just begging to be reverse engineered, it is always a good idea to do some research before you start, this is where this section comes in as it deals with specific games.

## Games with Debug Symbols
If you are interested in reverse engineering a Gamecube game, the first step is to find out if the game has its **debug symbols** available, this makes it much easier to reverse as all the functions will have nice friendly human readable names.

{% include link-to-other-post.html post="/gamecube-debug-symbols" description="Check out this post for a list of Gamecube games with debug symbols." %}

## Prototype Games
Prototype games are ideal targets for reverse engineering as many of them contain developer information inside them and some games never got a retail release, making them even more interesting!

{% include link-to-other-site.html url="https://hiddenpalace.org/Prototypes_by_system/Nintendo_GameCube" description="Hidden Palace has the most complete list of released Gamecube Prototypes and Demos, check it out here." title="List of Nintendo Gamecube Prototypes - Hidden Palace" image="/public/consoles/Nintendo Gamecube.png"  %}

---
## Games with Emulators ON Gamecube
A few Gamecube games have emulator code built into them either as bonus content (Animal Crossing, Fight Night Round 2) or as the main game (Sonic Mega Collection).

Here is a list of known games that have emulators built in:
* Fight Night Round 2 (uses an emulator called **SNESticle** to play Super Punch Out, ROM file is called SNS4Q0.471 on the Disc, same filename as seen in Nintendo Lot-Check Leaks)

### Fight Night Round 2
The Gamecube game **Fight Night Round 2** has a playable version of the SNES game **Super Punch Out** on the Disc called **SNS4Q0.471**. This file must have come from Nintendo as it matches the Nintendo Lot-check naming scheme that Nintendo uses internally.

The cool thing about this is that the emulator was written by **Icer Addis** who was the co-creator of one of the first ever NES emulators known as **NESticle**. An easter egg of sorts can be found when looking at the strings inside the executable, they called the SNES emulator for gamecube **SNESticle**!

Not only that but a project was launched to try to get other SNES ROMS to work with the emulator known as the **The SNESticle Liberation Project** which consisted of a Multi-ROM menu SNES Rom and a Python script to inject ROMS and put everything together (**fn22snesticle.py).

The devlog is a very good read and is available here: [Devlog - The SNESticle Liberation Project](https://dataswamp.org/~josk/snesticle/devlog/)

This drew the attention of Icer who decided to release the full source code for **SNESticle** (PS2 & Dreamcast):
[iaddis/SNESticle: SNESticle source code (circa ~2004)](https://github.com/iaddis/SNESticle)

---
# Reverse Engineering

## File Formats
{% include link-to-other-post.html post="/gamecube-file-formats" description="Check out this post for a list of Gamecube file formats." %}


---
# All Posts
<div>

{% include console.html %}
</div>
