---
layout: post
tags: 
- n64
- memory
- introduction
title: Memory Hacking
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/n64/N64 Memory Editing.jpg
twitterimage: https://www.retroreversing.com/public/images/n64/N64 Memory Editing.jpg
permalink: /n64-rom-memory-hacking/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Memory Hacking
    url: #
recommend: 
- n64
- memory
- introduction
editlink: /Memory-Hacking.md
updatedAt: '2021-03-24'
---
# Memory Hacking
One excellent way to get started modifying your favourite game is to use memory hacking techniques. By learning what memory locations are used for specific functions you can perform all sorts of crazy cheats and start to get an understanding of how the game works internally.

You can even use a tool like **Cheat Engine** to inspect memory of an emulator such as **Mupen64** to modify the contents of N64 game memory!

## How it works
<section class="postSection">
    <img src="/public/OtJz1MlDMoYL7Wgc91mkg_img_0.png" class="wow slideInLeft postImage" />

 <div markdown="1">
 So we know that anything that can change in a game will be stored in some sort of Writable memory such as RAM.
 
 This means that there are a number of bytes in RAM which corrospond to an interesting value in-game such as the Lives of the Player, or well anything at all really.
 
 If we can find where these locations are we can change how the game behaves in real-time. But how do we find out where the values are located in the big blob of bytes known as RAM?
 
 Just like finding anything we perform a search, if we know the current game lives are set to 3, then just loop over each byte in RAM until the value 3 and that should be the value right?! 
 
 Well sort of, it *could* be but the number 3 will also be used for many other non-lives related things in the game, for example an enemy could be located at position 3 on the Y axis etc. So we need to find out *which* location that has the number 3 corrosponds to the actual lives.
 
The technique is simple:
1. Perform an initial memory search for the current value of the stat you want (e.g Lives or HP).
2. Change the stat in the game, e.g loose a life.
3. Now do a "sub-search" which will search within the results of the first search for the new value of lives.
4. The results should have been vastly reduced
5. Repeat until you only get a couple of values
6. Then change these values and the one that increases your lives is the variable you want

Now you can **lock** these memory addresses if you don’t want the game to change the stat, e.g you won’t lose HP.
 </div>
</section> 

---
# Share What you find
Try to document these addresses and share your findings with the community, any new cheat codes or information about what memory addresses are responsible for what are always appreciated.

Any information you share can then give other Reversers a head start when they look into the same game and hopefully they will build on what you found, creating even more value for the community.

---
# Run on real Hardware
<section class="postSection">
    <img src="/public/images/n64/Equalizer Cheat Code Cartridge.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
It is even possible to edit the memory of your favourite game on the original hardware, with no modifications required! Just use an old School Cheat Cartridge such as the Action Replay, Game Breaker or Equalizer cartridges. 

These cartridges use a special syntax to tell the Nintendo 64 which memory addresses you want to modify and using that you can convert any cheat you have made in an emulator to run on physical hardware.

For example if you look for a life cheat code for **Action Replay** it will have the same addresses. You can then put this knowledge to the test and create your own cheat codes which run on physical Action Replay cartridges.
 </div>
</section> 

---
# More advanced Memory Hacking
Memory Hacking is not exclusive to Emulators or cheat cartridges, the PC gaming community has been using these methods for many years. One very popular tool is known as **Cheat Engine** and it performs the same functions but for any PC program.

---
# References
[^1]: [Hacking Nintendo 64 ROMs - Memory Hacking Software MHS - YouTube](https://www.youtube.com/watch?v=AxRmQ3bbe1Q)
