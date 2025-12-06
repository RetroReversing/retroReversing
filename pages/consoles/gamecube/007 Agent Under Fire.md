---
layout: post
tags: 
- gamecube
- symbols
- debug
- reverseengineering
- games
title: 007 Agent Under Fire for Nintendo Gamecube Reverse Engineering
image: /public/images/gamecube/007 Agent Under Fire.jpg
thumbnail: /public/consoles/Nintendo Gamecube.png
permalink: /007-agent-under-fire
youtube: sdloBZ-NYwU
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gamecube 
    url: /gamecube
  - name: 007 Agent Under Fire Reversing Engineering
    url: #
recommend: gamecube
editlink: /consoles/gamecube/007 Agent Under Fire.md
updatedAt: '2019-11-07'
---
# Introduction
Welcome to our page dedicated to the technical details of the Gamecube game **007 Agent Under Fire**! If you're a fan of this classic first-person shooter game, you might be interested in learning more about the technical aspects that make it all possible. 

On this page, we'll dive into the inner workings of "007 Agent Under Fire" and explore the hardware architecture of the Gamecube console, the game's software code, and the various algorithms and techniques used to create the game's immersive gameplay and stunning graphics. Whether you're a seasoned game developer or just a curious enthusiast, you'll find a wealth of information and insights here that will deepen your understanding and appreciation of this iconic game. 

So grab your controller and let's take a deep dive into the technical details of **Agent Under Fire**!

# Game Engine
The game actually used two complete different engines to make up the complete game, one engine for the First Person Shooter part and the other for the Dirivng missions:
 - **Action Engine**: ID Tech 3 engine
 - **Driving Engine**: Believed to be the Need for Speed engine

## IDTech Engine
The FPS part of the game is using the id Tech 3 engine with ÜberTools, for more information about this engine checkout the following sources:
* History of ID Tech Engine - https://youtu.be/00S64bc-QBE
* Information about IDTech3 - https://en.wikipedia.org/wiki/Id_Tech_3
* IDTech3 was open sourced - https://github.com/id-Software/Quake-III-Arena
* UberTools - http://www.ritualistic.com/content.php/games/uber/features.php
* http://ritualistic.chrissstrahl.de/games/ef2/gdkdocs/start.html

---
# Emulator Compatibility
https://wiki.dolphin-emu.org/index.php?title=007%3A_Agent_Under_Fire

---
# Game Mods

## 007: Agent Under Fire Reloaded
Mod for the gamecube version of 007 Agent Under Fire that fixes a few multiplayer balancing issues:
* https://www.romhacking.net/hacks/3731/
* https://www.youtube.com/watch?v=sdloBZ-NYwU

---
# 007 Agent Under fire Gamecube Exploit
Exploit to run unsigned DOL executable from memory card from Agent Under Fire on the Gamecube: https://github.com/FIX94/007-exploit-gc  
