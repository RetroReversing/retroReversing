---
layout: post
tags: 
- n64
- memory
- cheatcartridge
- datel
title: Datel Action Replay Professional (N64)
published: true
thumbnail: /public/consoles/Nintendo 64.png
youtube: "Gq8VQBKBKqI"
image: /public/images/actionreplay/ActionReplayViewer.jpg
permalink: /datel-action-replay-professional/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Datel Action Replay Professional (N64)
    url: #
recommend: n64
editlink: /n64/Datel-Action-Replay-Professional.md
---
# Datel Action Replay Professional

## V-Ram functionality

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayViewer.jpg)

You could press a "Freeze button" on the Action Replay to “see images not normally visible during playing of the game”. The video seems to be showing different render frames from the game Top Gear Overdrive.

Not sure why this would be useful apart from taking screenshots for magazines or just to see inside the renderer.

## Code Generator 

Action Replay has a Code Generator which is very similar to other tools in the cheat cartridge/engine world. For example if you have ever used the tool Cheat Engine on PC and used the search/sub-search feature you will be right at home.

If not you might want to read up on how Cheat Engine works and the basics of Memory and hexadecimal notation.

### Action Replay Code Format

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayCodeFormat.jpg)

An action replay code is made up of 2 parts, the address and the value. In the screenshot above you can see that the address is highlighted in yellow.

The address is just the Hexadecimal representation of the memory position of the lives variable.

The value on the right is the value we want to put into the lives variable, in this case 2.

## Tutorial - Finding a cheat in Duke Nukem 64

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayCodeOn.jpeg)

First press the freeze button on the AR device to access the in-game menu. And go to Code Generator.

### Known Value Search

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayKnownValueSearch.jpeg)

Since we know the value of Duke Nukem's bullets we enter the "Known Value Search" option. This will allow us to search for the value of bullets (48) in memory.

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayEqualToKnown.jpeg)

Now go Back to the game and fire a bullet, your bullets should now equal 47 since you just fired one bullet. Now press Freeze and you will be back in the Known Value Search screen, enter 47 as the new value.

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayEqualTo.jpeg)

Initially there was 10555 possibilities for the memory address, but now after the second search it is down to just 2!

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayPossibilities.jpeg)

Now select "View Search Results" and the 2 codes we have found are displayed on the left.

Now select one to make it active by pressing the 'A' button and go back to the game. The game should now have unlimited bullets! :)

## Tutorial - Mortal Kombat Trilogy

### Unknown Value Search

A health bar is the perfect example of an Unknown value since it doesn't display the exact number of health you have just a big green bar.

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayStart.jpeg)

Choose 'Start' to start the Action Replay search system, now return to the game and loose some health.

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayLessThanLast.jpeg)

Now press the Freeze button on the AR and select "Less than Last" since we reduced health.

![image alt text]({{ site.url }}/public/images/actionreplay/ActionReplayManyPossibilities.jpg)

Now just repeat the process until you get around 20 options and test out each one until you find one that doesn't allow the player to lose any health.

## Full Video

Link to the video on youtube is here: [https://www.youtube.com/watch?v=Gq8VQBKBKqI](https://www.youtube.com/watch?v=Gq8VQBKBKqI) 

