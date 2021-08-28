---
permalink: /gamecube/
layout: post
title: Nintendo Gamecube (Dolphin)
recommend: gamecube
recommendTitle: All GC Posts
editlink: ../categories/consoles/Gamecube.md
console: 'gamecube'
consoleimage: /public/consoles/Nintendo Gamecube.png
thumbnail: /public/consoles/Nintendo Gamecube.png
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Nintendo Gamecube (Dolphin)
    url: #
redirect_from:
  - /gc
  - /dolphin
---

# Hardware
The Nintendo Gamecube has fairly sophisticated hardware for the time, this was when Nintendo was still trying to compete with raw processing power. The hardware would then be used as a basis of both the Wii and Wii U consoles in the future.

## Retail Hardware
Rodrigo Copetti has an excellent in-depth article about the hardware architecture of the Nintendo Gamecube, it is a must read for anyone wanting to reverse engineer Gamecube games as you will need to know all about the low level architecture.

{% include link-to-other-site.html url="https://www.copetti.org/projects/consoles/gamecube/" description="The website by Rodrigo Copetti is required reading for any information you want to know about the Gamecube console hardware architecture" image="/public/consoles/Nintendo Gamecube.png" title="Rodrigo Copetti's Gamecube Hardware Architecture"  %}

## Development Hardware
{% include link-to-other-post.html post="/gamecube-development-kit-hardware/" description="For information about Nintendo's Dolphin development hardware check out this post." %}

## Unreleased Hardware
In China there were plans to release a version of the Gamecube with DVD playback functionality and additional security. This was to be a sequal to the iQue Player which was a Chinese only Nintendo 64 plug and play device. However half way through development the resources were moved to work on the Nintendo Wii instead.
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
# Reverse Engineering

## File Formats
{% include link-to-other-post.html post="/gamecube-file-formats" description="Check out this post for a list of Gamecube file formats." %}


---
# All Posts
<div>

{% include console.html %}
</div>
