---
title: Introduction to Game Engines & Middleware
shorttitle: Game Engines & Middleware
permalink: /games/engines
layout: post
console: gameengines
breadcrumbs:
  - name: Home
    url: /
  - name: Game Engines and Middleware
    url: /#
redirect_from:
  - /gameengines
  - /gameengine
  - /engines
  - /games/gameengines
  - /game-engines
  - /middleware
tags:
  - gameengines
  - middleware
  - introduction
  - sdk
recommend:
  - gameengines
  - middleware
  - introduction
  - sdk
editlink: ../categories/games/GameEngines.md
---
# Introduction to Game Engines & Middleware
Game Engines are the foundation in which games are built, they contain all the logic to be able to show graphics, play audio, compute input, etc. without having any of the game specific assets such as sprites or music files.

Middleware on the other hand has one specific goal in mind, for example an audio middleware just plays sounds and you would not be able to display graphics with it.

So you can think of game engines as the combination of middleware.

## Who develops game engines?
There are two types of game engines based on who developed them or rather who has access to them:

  - In-house game engines - Only available to one game development studio.
  - Retail game engine - Engines that are normally sold as a product and used by multiple game development studios.

## How much did game engines cost?
This really depends on the engine, it could have been anywhere between a licensing fee per game sold or a one time fee of thousands of dollars for console games.

This was due to the limited audience of game engines at the time, you would have to pay an entire development team to work on a game engine (not cheap) and you would only be able to sell to about a dozen companies.

However with the Indie game revolution a number of free or cheap game engines became available but tended still to charge much more for console development.

---
# Commercial Game Engines

## Instinct Studio
Instinct Studio was a rather obscure a software suite by the Ireland based company **Instinct Technology**. It claimed to combine a complete set of game development tools with an array of 'best in class' middleware plug-ins, giving game developers the power and flexibility to create state-of-the-art productions within realistic budgets.

![Instinct Studio Screenshots](https://github.com/user-attachments/assets/c332f749-9442-4ec1-abd4-64f35a015957)


As far as we know it wasn't used in any commercial games but it a custom version of the engine was created specifically for the University of Abertay in Scotland. Also they had a playable demo of a game called **Dreadnought** on their website in 2007.

The website was "http://www.instinct-tech.com/", it was created in 2006 and lasted until 2009.

The website had a screenshot of what the editor interface was like, it is very mid-2000s Microsoft:
![Instinct Studio Interface](https://github.com/user-attachments/assets/3995f8b4-b2e8-45dd-94ec-4d2be7d30e1f)

It was also featured in **EDGE** magazine issue 169 in their CodeShop Section:
![Code Shop EDGE 169](https://github.com/user-attachments/assets/9ddbe96a-1f56-4ab0-83be-a61cb90f16c9)

---
## Unity
Unless you have been living under a rock you will have heard about Unity3D, it was originally released the 8th of June 2005 as a MacOSX only engine. However, over its lifetime it has grown to support not just PC but also many games consoles (Wii, Xbox 360, PS3) and mobile platforms (iOS, Android). It was developed by the Danish vendor **OTEE**.

Key milestones include:
* **Unity 1.0** first version that even included a full version of the physics engine Ageia PhysX (8th June 2005).
* **Unity 1.1** introduced Windows deployment support on August 23rd 2005, but there was no support for editing on Windows yet.
* **Unity 1.5** introduced the cross platform web-player via the The **Unity Web Player browser plugin** (June 16th 2006).
* **Unity 2.0** introduced new features like the Terrain Rendering Engine, DirectX 9 Renderer for Windows, Built-in Networked Multiplayer Support, Web Player Streaming and Improved Web Player Compression. Along with a new companion product, the Unity Asset Server!
* **Unity 2.5** introduced **Windows support** for the Unity development environment so games can be created on both Windows and Mac OS X.
* **Unity iPhone** was introduced on October 22, 2008.

The first ever Unity developer conference **Unite** was held in the two days between October 10-12th 2007.

---
## Game Maker
Game Maker is a popular 2D game development tool originally called **Animo** and developed by Professor **Mark Overmars**.

Version 1.0 was built some time in 1998-1999 and never released publicly but on the 15th November 1999 Game Maker was officially released to the public with version 1.1.

We have so much content on Game Maker that we had to split this section out into its **own post** you can find it below:
{% include link-to-other-post.html post="/game-maker" description="For more information about the Game Maker check out this post." %}


---
# Game Engines by Platform
Although game engines can be used across multiple games consoles or platforms, we have separated the game engines by platform to make it easier to compare the features between engines of a given console generation.

Platform Name | Game Engine List
---|---
Microsoft Xbox | [Original Xbox Game Engines](https://www.retroreversing.com/xbox-game-engines)
Nintendo Wii U | [Wii U eShop Game Engines](https://www.retroreversing.com/WiiUeShopEngines) <br /> [Unity Game Engine Games on Wii U eShop](https://www.retroreversing.com/WiiUUnity) <br /> [Wii U Nintendo Web Framework](https://www.retroreversing.com/WiiUNWF)

---
# Commercial Middleware

## Ageia PhysX SDK
Originally known as NovodeX (by Swiss company of the same name) the technology was bought by Ageia in 2004 and rebranded to PhysX. Later in 2008, Nvidia bought Ageia and continued to support the SDK even releasing it as open source in December 2018.
Although the source code was technically available for free before that as long as you registered on the Nvidia website (2015-2017).

PhysX under Ageia allowed the SDK binaries to be offered royalty free but access to the source code is **$50,000** per application.

**Unity** announced that they would be including the full version of Ageia PhysX on March 4th 2005 which was before version 1.0 was released, which means many Unity games are using the SDK.

## Menus Master (by omegame)
**Menus Master** was a middleware specifically for creating game menu interfaces it was first released April 15th 2005 [^2]. It has an interface to create the menus along with a C++ SDK that is compatible with the PS2, Xbox, GameCube, and PC.

It was used by **Delphine Software** in the **Moto Racer** series to great success!

---
# References
[^1]: Develop issue 78 Page 45 referring to PhysX SDK 2.7
[^2]: [Omegame unveils Menus Master, the game user interface authoring solution that free your creativity and save your money! - GamesIndustry.biz](https://www.gamesindustry.biz/omegame-unveils-menus-master-the-game-user-interface-authoring-solution-that-free-your-creativity-and-save-your-money)

---
<div>
  
{% include console.html %}
</div>


