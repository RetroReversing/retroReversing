---
permalink: /wii/
layout: post
recommend: wii
recommendTitle: All Wii Posts
editlink: ../categories/consoles/Wii.md
console: 'wii'
title: 'Nintendo Wii'
consoleimage: /public/consoles/Nintendo Wii.png
thumbnail: /public/consoles/Nintendo Wii.png
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Nintendo Wii
    url: #
---
# Introduction to Hacking the Nintendo Wii
Interested in learning more about the the Nintendo Wii? Excellent! This section will guide you through the basics, starting from basic PowerPC assembly language all the way to an introduction to reverse engineering your first game!

---
# Hardware
The Hardware of the Wii is what really made it stand out from the crowd with its unique motion controllers that allowed players to take actions with their hands such as swinging the wii Remote like a tennis racket or golf club. The processor and graphics were just more powerful versions of the Gamecube's chips, as Nintendo was not trying to compete graphically with the Playstation 3 or Xbox 360.

## Retail Hardware
We highly suggest you take a look at this article by **Rodrigo Copetti** which introduces how the Wii hardware works and explains everything from the **Broadway** CPU to the **Hollywood** Graphics processor: 
[Wii Architecture - A Practical Analysis](https://www.copetti.org/writings/consoles/wii/)

## Development Hardware
{% include link-to-other-post.html post="/nintendo-wii-development-kit/" description="For information about Nintendo's Wii development hardware check out this post." %}

---
# Games
What would the Nintendo Wii be without its excellent line-up of games? It was the games like Wii Sports that attracted one of the largest audiences in video game history.

## Wii Games with Debug Symbols
An excellent way to start reverse engineering is to find games where the developers accidentally left the **Debug symbols** in the retail release of the game. While this is not very common it has happened for a few games released for the Wii. This gives you access to all the original function and variables names that were used in the original source code!

{% include link-to-other-post.html post="/wii-debug-symbols/" description="For a list of Wii games that have debug symbols available check out this post." %}


---
# All Posts tagged with Wii
<div>

{% include console.html %}

</div>
