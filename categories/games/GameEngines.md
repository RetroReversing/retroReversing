---
permalink: /games/engines
layout: blog-cards
console: gameengines
breadcrumbs:
  - name: Home
    url: /
  - name: Games
    url: /games
redirect_from:
  - /gameengines
  - /gameengine
  - /engines
  - /games/gameengines
  - /game-engines
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

Version 1.0 was built some time in 1998-1999 but never released publicly but on the 15th November 1999 Game Maker was officially released to the public with version 1.1.

Early versions of game maker (1.0->?) exported games in .gmr format that required the **Game Maker Runner** to execute, later versions allowed exporting directly as .exe files (the exe files technically just appended the gmr file data to the end of the actual runner executable).

Development History:
* 2003 - Game Maker was written in Delphi (version 5), The IDE was slightly over 25,000 lines of code in 2003 with the runner part similar in size [^5].
* 2004 - Delphi version 7. The IDE source code is now over 40.000 lines of code. The source code for the runner part is similar in size [^6]

It was later rewritten by YoYoGames with the runner now being written in C++.


Key milestones include:
* **Version 1.0** - Never released to the public (Called Animo)
* **Version 1.1** - First public version of Game Maker (15th November 1999)
* **Version 1.2**
* **Version 1.3** - Added support for larger images and importing/exporting games (7th January 2000) [^3]
* **Version 2.0** - Added DirectSound support, added object depth support (8th September 2000)
* **Version 3.0** - Full Screen DirectX support and new Game Maker File (*.gmf) format (Beta release on 6th November 2000 then final on 23rd November 2000)
* **Version 3.1** - DirectX in windowed mode and removal of Exclusive mode
* **Version 3.2** - New room options have been added: more background options, multiple views, and transitions between rooms (27th January 27 2001)
* **Version 3.3** - (4th April 2001)
* **Version 4.0** - Complete rewrite that was not backwards compatible - logo changed from blue to red to signify this change (16th July 2001)
* **Version 4.1** - (12th January 2002)
* **Version 4.2** - (9th May 2002)
* **Version 4.3** - (18th November 2002)
* **Version 4.3a** - Bugfix release for 4.3 (25th November 2002)
* **Version 5.0** - (12th April 2003)
* **Version 5.1** - (14th September 2003)
* **Version 5.2** - (15th December 2003)
* **Version 6.0** - (2nd October 2004)

Mark Overmars also released some companion software to Game Maker:
* **Background Maker 1.0** - Tool for combining tiles into a single background image (7th December 2000)
* **Image Maker 1.0** - Tool for creating animated gifs for Game Maker
* **Child Proof 1.0** - Sandbox environment for children using PCs

### Game Maker Community
One of the strongest parts of Game Maker was its community, first started on 9th November 2000 and simply called **Game Maker Forum** (gamemaking.community.everyone.net)[^4].

Key milestones for the GMC:

Image | Host | Description
---|---|---|
None | gamemaking.community.everyone.net | Single board simply called **Game Maker Forum**
 ![pub58.ezboard.com/bgamemakercommunity](https://github.com/user-attachments/assets/b1938ad5-2496-4ef3-93e2-1aceb8ce07fd) | pub58.ezboard.com/bgamemakercommunity | It then moved to EZboard on the 16th March 2001
![gmcommunity.edgehost.com](https://github.com/user-attachments/assets/c4198059-b7a2-45a8-add1-34cfc864edaf) | gmcommunity.edgehost.com/forums/ | Invision Power Board v 1.1 on 6th October 2002 but it only lasted until 8th January 2003 due to server problems (so they went back to Ezboard).
![forums.gamemaker.nl](https://github.com/user-attachments/assets/6483e04f-d798-4213-9de0-91e2c6046968) | forums.gamemaker.nl | Started on 26th October 2003 another self-hosted Invision Power Board v1.3 this one was much more successful and they never went back to Ezboard


The Game Maker Community has now lasted over 25 years!

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


<div>
{% include console.html %}
</div>

# References
[^1]: Develop issue 78 Page 45 refering to PhysX SDK 2.7
[^2]: [Omegame unveils Menus Master, the game user interface authoring solution that free your creativity and save your money! - GamesIndustry.biz](https://www.gamesindustry.biz/omegame-unveils-menus-master-the-game-user-interface-authoring-solution-that-free-your-creativity-and-save-your-money)
[^3]: [Game Maker 1.3](https://web.archive.org/web/20000229113403/http://www.cs.uu.nl/people/markov/kids/gmaker/index.html)
[^4]: [Game Maker Pages](https://web.archive.org/web/20001110011300/http://www.cs.uu.nl/people/markov/kids/gmaker/index.html)
[^5]: [Game Maker History](https://web.archive.org/web/20021212194534if_/http://www.cs.uu.nl/people/markov/gmaker/history.html)
[^6]: [Game Maker Facts](https://web.archive.org/web/20041012165649if_/http://www.cs.uu.nl/people/markov/gmaker/facts.html)
