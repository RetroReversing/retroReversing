---
layout: post
tags: 
- n64
- memory
title: Paper Mario N64 Rom Memory Hacking
published: true
thumbnail: /public/consoles/Nintendo 64.png
youtube: "AxRmQ3bbe1Q"
image: /public/OtJz1MlDMoYL7Wgc91mkg_img_0.png
permalink: /paper-mario-n64-rom-memory-hacking/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Paper Mario N64 Rom Memory Hacking
    url: #
recommend: n64
editlink: /n64/Paper-Mario-N64-Rom-Memory-Hacking.md
source-id: 11Kwn0Lq3f7bPkCtwPdI5a_Z85r5tYl2Vr34a3p3rwu4
published: true
---
# Paper Mario Memory Hacking Basics

This is a great tutorial to show you the basics of finding the memory locations of common statistics such as HP, items etc. The example is Paper Mario but this technique should work for most games on the nintendo 64.

![image alt text]({{ site.url }}/public/OtJz1MlDMoYL7Wgc91mkg_img_0.png)

The video is located here: [https://gaming.youtube.com/watch?v=AxRmQ3bbe1Q](https://gaming.youtube.com/watch?v=AxRmQ3bbe1Q) 

The technique is simple:

1. do an initial memory search for the current value of the stat you want (e.g HP).

2. Change the stat in the game, e.g loose a life.

3. Now do a "sub-search" which will search within the results of the first search.

4. The results should have been vastly reduced

5. Repeat until you only get a couple of values

Now you can 'lock' these memory addresses if you don’t want the game to change the stat, e.g you won’t lose HP.

Try to document these addresses and share your findings with the retro reversing community.

One great way to get addresses or even test your findings is to learn how to create cheats for 'cheat cartridges' e.g Action Replay, Game Breaker or Equalizer. 

If you learn the syntax they use for the cheats you will be able to get the addresses they use for a similar cheat. For example if you look for an HP cheat code for Action Replay it will have the same addresses shown in the video. You can then put this knowledge to the test and create your own cheat codes.

If you have the physical cheat cartridges you can even test your new cheats on the original hardware :)  

