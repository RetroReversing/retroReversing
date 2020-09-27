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

# Retail Hardware
Rodrigo Copetti has an excellent in-depth article about the hardware architecture of the Nintendo Gamecube, it is a must read for anyone wanting to reverse engineer Gamecube games as you will need to know all about the low level architecture.

{% include link-to-other-site.html url="https://www.copetti.org/projects/consoles/gamecube/" description="The website by `Rodrigo Copetti` is required reading for console hardware architecture" image="https://www.copetti.org/images/consoles/gamecube/motherboard_marked.d93afe1360c2793657e14a68fa6af06e17e65df339df93d8fa4c720973359919.png" title="Rodrigo Copetti's Gamecube Hardware Architecture"  %}

After finishing that article here is a brief overview of the Gamecube motherboard, see if you can spot the components that you have just learned about:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x5K6RgIfBcw" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Gamecube Games
The Nintendo Gamecube has an excellent library of games just begging to be reverse engineered, it is always a good idea to do some research before you start, this is where this section comes in as it deals with specific games.

## Games with Debug Symbols
If you are interested in reverse engineering a Gamecube game, the first step is to find out if the game has its **debug symbols** available, this makes it much easier to reverse as all the functions will have nice friendly human readable names.

{% include link-to-other-post.html post="/gamecube-debug-symbols" description="Check out this post for a list of Gamecube games with debug symbols." %}

## Prototype Games
Prototype games are ideal targets for reverse engineering as many of them contain developer information inside them and some games never got a retail release, making them even more interesting!

{% include link-to-other-site.html url="https://hiddenpalace.org/Prototypes_by_system/Nintendo_GameCube" description="Hidden Palace has the most complete list of released Gamecube Prototypes and Demos, check it out here." title="List of Nintendo Gamecube Prototypes - Hidden Palace"  %}




---
# All Posts
<div>

{% include console.html %}
</div>
