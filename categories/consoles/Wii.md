---
permalink: /wii/
layout: post
recommend: wii
recommendTitle: All Wii Posts
editlink: ../categories/consoles/Wii.md
console: 'wii'
title: Nintendo Wii Reverse Engineering
consoleimage: /public/consoles/Nintendo Wii.png
thumbnail: /public/consoles/Nintendo Wii.png
excerpt: Awesome list of Nintendo Wii Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Nintendo Wii Reverse Engineering
    url: #
---
# Introduction to Hacking the Nintendo Wii
Welcome to our page dedicated to Wii reverse engineering! The Wii was a popular gaming console released by Nintendo in 2006, and it introduced several groundbreaking features to the gaming world, such as motion-based controls and online gameplay. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Wii reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Wii remote, and get ready to dive into the exciting world of Wii reverse engineering!

---
# Hardware
The Hardware of the Wii is what really made it stand out from the crowd with its unique motion controllers that allowed players to take actions with their hands such as swinging the Wii Remote like a tennis racket or golf club. The processor and graphics were just more powerful versions of the Gamecube's chips, as Nintendo was not trying to compete graphically with the Playstation 3 or Xbox 360.

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

## Wii Exclusives
The most valuable reverse engineering projects tend to be the **platform exclusives** that have never been re-released as these are the games that can benefit the most from enhancements on modern hardware.

Wikipedia maintains a list of Wii exclusives - [Wii-only games - Wikipedia](https://en.wikipedia.org/wiki/Category:Wii-only_games)



---
# All Posts tagged with Wii
<div>

{% include console.html %}

</div>
