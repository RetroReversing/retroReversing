---
layout: post
tags: 
- n64
- memory
title: N64 Rom Memory Hacking (Paper Mario)
thumbnail: /public/consoles/Nintendo 64.png
youtube: "AxRmQ3bbe1Q"
image: https://i.ytimg.com/vi/AxRmQ3bbe1Q/sddefault.jpg
permalink: /n64-rom-memory-hacking/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Rom Memory Hacking (Paper Mario)
    url: #
recommend: 
- n64
- memory
editlink: /n64/N64-Rom-Memory-Hacking.md
---
# Memory Hacking
One excellent way to get started modifying your favourite game is to use memory hacking techniques. By learning what memory locations are used for specific functions you can perform all sorts of crazy cheats and start to get an understanding of how the game works internally.

# Introduction to Memory Hacking with Paper Mario

The Youtube users known as **Soul Umbreon** has put together an excellent video tutorial for finding the memory locations of common statistics such as HP, items etc. The example is Paper Mario but this technique should work for most games on the nintendo 64.

![image alt text]({{ site.url }}/public/OtJz1MlDMoYL7Wgc91mkg_img_0.png)

The video is located here: [https://gaming.youtube.com/watch?v=AxRmQ3bbe1Q](https://gaming.youtube.com/watch?v=AxRmQ3bbe1Q) 

## How it works
The technique is simple:
1. Perform an initial memory search for the current value of the stat you want (e.g Lives or HP).
2. Change the stat in the game, e.g loose a life.
3. Now do a "sub-search" which will search within the results of the first search for the new value of lives.
4. The results should have been vastly reduced
5. Repeat until you only get a couple of values
6. Then change these values and the one that increases your lives is the variable you want

Now you can 'lock' these memory addresses if you don’t want the game to change the stat, e.g you won’t lose HP.

# Share What you find
Try to document these addresses and share your findings with the Retro Reversing community.

---
# Run on real Hardware
One great way to get addresses or even test your findings is to learn how to create cheats for 'cheat cartridges' e.g Action Replay, Game Breaker or Equalizer. 

If you learn the syntax they use for the cheats you will be able to get the addresses they use for a similar cheat. 
For example if you look for an HP cheat code for Action Replay it will have the same addresses shown in the video. You can then put this knowledge to the test and create your own cheat codes.

---
# More advanced Memory Hacking
Memory Hacking is not exclusive to Emulators or cheat cartirdges, the PC gaming community has been using these methods for many years. One very popular tool is known as **Cheat Engine** and it performs the same functions but for any PC program.

Cheat engine can be very powerful so if you are interested check out the Guided Hacking Bible:
[Guide - GHB1 - Start Here Beginner Guide to Game Hacking - Guided Hacking](https://guidedhacking.com/threads/ghb1-start-here-beginner-guide-to-game-hacking.5911/)


