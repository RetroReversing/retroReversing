---
layout: post
tags: 
- introduction
title: Why Reverse Engineer Retro games? - About RetroReversing.com
image: /public/Articles/Why Reverse Engineer Games retroreversing.com.jpg
thumbnail: /public/consoles/Atari 2600.png
youtube: k6PWZh0MJ1Y
permalink: /why-reverse-retro-games
breadcrumbs:
  - name: Home
    url: /
  - name: "Why Reverse Engineer Retro games? - About RetroReversing.com"
    url: #
recommend: 
- introduction
editlink: /About.md
updatedAt: '2020-05-12'
twitterimage: https://www.retroreversing.com/public/Articles/Why Reverse Engineer Games retroreversing.com.jpg
redirect_from:
  -  /retrogame-archeology
---

If you have arrived at this page you may have a few questions such as why does RetroReversing.com even exist?

Well, let us try to answer this question, starting with the problem we are trying to solve.

**Problem**: The difficulty curve of going from a player of a game to being able to reverse engineer, modify or decompile it is too damn high.

This is especially true of console games, where without a knowledge of assembly and how the hardware actually works it can be very tricky to started without giving up in frustration.

# Why bother?
But why learn how to reverse engineer an old game? Surely there are better uses of your time than that, right? right?!

There are multiple answer to this question but we feel the most important is simple: It is fun.

Other reasons include game preservation, knowledge and even just enjoying participating in a community of people with the same interests.

# Why not just play the game for fun instead?
Play the game, multiple times, play all the DLC, enjoy it, have fun. Now what if that game could be improved, what feature would you add to it? 

Whole new levels, characters, stories and game mechanics?! Cool! I bet there would be tons of people who would love to play your modified version of the game.

# Thats too hard for me, I don't even know X, Y, Z...
Ignore what you don't know, these will come gradually in time, don't worry about learning anything before hand. 

Learn just what you need when you need it and apply it straight away. This way everything you learn will stick and you save yourself waiting time memorizing concepts you may never even need.

# But where would I even start?
That really depends on what you want to accomplish, but start at smallest most basic step and make each subsequent step as small as possible.

Let's say you want to modify the Nintendo 64 game "Mario Kart 64" to give it 8 player online play support. 

Thats quite a goal but just take a few small steps and learn everything along the way, for example:
* Find out how Mario Kart takes controller input in 4 player mode
* Find out how the emulator sends input to the running game
* How does the key presses impact the memory of the game?
* Can you swap player 1 so that it controls player 3, or even a NPC?
* Can you send button presses over TCP so that it controls an emulator on a different system?
* How does the game display 4 different cameras on screen, could this be increased to 8? or decreased to 1...

This is not the fastest way to learn everything about the low level N64 defaults **but** it is a fun way to learn about some low level N64 details that you never knew before.

Even if you give up after the first few steps you will have learned more than you knew before and your next project is sure to get further!

If that all still sounds out of reach then don't worry the main aim of this site is to help everyone learn the basics so we can bring these possibilities within reach.

---
# Why learn Reverse Engineering?
Reverse engineering has been an integral part of the game industry from the very start, whether it was game developers reverse engineering the console to rival companies reversing each other games, reversing was a vital skill.

## Retrogame Archeology
Retrogame Archeology is a term coined by Associate Professor John Aycokc from the University of Calgary. 

He highlights the benefits of looking under the hood of old games in this excellent video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/k6PWZh0MJ1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Site specific
This section aims to answer questions as to why the site is setup the way it is, what content should be included in the site and what is out of scope or better covered on other websites.

## Differences to other sites
This site has a much more technical focus, focusing on knowledge and tutorials for stuff like modding, hacking and reverse engineering. Example how a game works, how the code works, how to modify the graphics or sound or other assets.

How were the games made, what development kits, what 3D modelling tools, what 2D artist tools etc.

This is a site for:
* Development kits (both software and hardware)
* Source Code analysis and walkthoughs
* How specific game mechanics were implemented
* How to extract and replace game assets (modding)
* How to change game behaviour
* Development history of a game and the tools the developers used

This is not a site for:
* Game reviews (plenty of sites for that)
* Unused assets (use The Cutting Room Floor)
* Prototype and Beta content (use Forbidden Palace)


## Site Architecture Advantages
We are taking advantage of a few of Github's features such as being able to edit un a web browser without checking out the code and live preview before submitting.

The advantages are:
* Decentralised (anyone can fork and download a local copy of the entire website)

## Examples of content not to post

### Unused Assets
Do not post unused content, that is the domain of The Cutting Room Floor, a link should be made on each game page to Link to this, and any con tent found should be posted to TCRF page.
