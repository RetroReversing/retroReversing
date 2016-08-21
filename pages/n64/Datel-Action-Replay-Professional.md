---
title: Datel Action Replay Professional
layout: page
author: amorri40
permalink: /datel-action-replay-professional/
tags:
- n64
- memory
- cheat cartridge
collection: n64
source-id: 1iGy7B-iC51XU-Lb6SrNB_1KDAjTlMrV0_dSxhrymPYk
published: true
---
# Datel Action Replay Professional

## V-Ram functionality

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_0.png)

You could press a "Freeze button" on the Action Replay to “see images not normally visible during playing of the game”. The video seems to be showing different render frames from the game Top Gear Overdrive.

Not sure why this would be useful apart from taking screenshots for magazines or just to see inside the renderer.

## Code Generator 

Action Replay has a Code Generator which is very similar to other tools in the cheat cartridge/engine world. For example if you have ever used the tool Cheat Engine on PC and used the search/sub-search feature you will be right at home.

If not you might want to read up on how Cheat Engine works and the basics of Memory and hexadecimal notation.

### Action Replay Code Format

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_1.png)

An action replay code is made up of 2 parts, the address and the value. In the screenshot above you can see that the address is highlighted in yellow.

The address is just the Hexadecimal representation of the memory position of the lives variable.

The value on the right is the value we want to put into the lives variable, in this case 2.

## Tutorial - Finding a cheat in Duke Nukem 64

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_2.png)

First press the freeze button on the AR device to access the in-game menu. And go to Code Generator.

### Known Value Search

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_3.png)

Since we know the value of Duke Nukem's bullets we enter the "Known Value Search" option. This will allow us to search for the value of bullets (48) in memory.

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_4.png)

Now go Back to the game and fire a bullet, your bullets should now equal 47 since you just fired one bullet. Now press Freeze and you will be back in the Known Value Search screen, enter 47 as the new value.

![image alt text]({{ site.url }}/public/sicxZRNfuwPDLZTJMduj6w_img_5.png)

Initially there was 10555 possibilities for the memory address, but now after the second search it is down to just 2!

## Full Video

Link to the video on youtube is here: [https://www.youtube.com/watch?v=Gq8VQBKBKqI](https://www.youtube.com/watch?v=Gq8VQBKBKqI) 

