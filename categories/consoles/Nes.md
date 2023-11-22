---
permalink: /nes
layout: post
console: nes
title: Reverse Engineering NES Games - Uncovering the Secrets of Classic Gaming
consoleimage: /public/consoles/Nintendo Entertainment System.png
thumbnail: /public/consoles/Nintendo Entertainment System.png
image: /public/images/nes/NES Reversing.jpg
twitterimage: https://www.retroreversing.com/public/images/nes/NES Reversing.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Reverse Engineering NES Games - Uncovering the Secrets of Classic Gaming
    url: #
recommend: 
 - nes
 - snes
recommendTitle: All NES Posts
editlink: ../categories/consoles/Nes.md
updatedAt: '2022-10-08'
---

# Introduction
Welcome to our guide to reverse engineering NES games! If you're a fan of classic video games, you may have wondered how those old 8-bit games were created and what secrets they hold. Reverse engineering is a process that can help uncover the inner workings of these games and reveal how they were programmed, designed, and even hacked by enthusiasts over the years.

In this guide, we'll explore the basics of reverse engineering and how it can be applied to NES games. We'll cover the tools and techniques used to disassemble and analyze game code, as well as some of the challenges and rewards of this process. Whether you're a curious hobbyist or a seasoned game developer, we hope this guide will inspire you to explore the world of NES game reverse engineering and discover some of the hidden gems of classic gaming.

---
# Games

## Game Library
Despite the release of the Super Nintendo Entertainment System (SNES) in the early 1990s, the original Nintendo Entertainment System (NES) continued to maintain a substantial presence in the gaming industry. 

In 1993, a surprising **55** new NES titles were released[^2], showcasing the enduring popularity of the 8-bit console. This phenomenon can be attributed to several factors, including the affordability of the NES, its vast existing user base, and the dedication of developers and publishers who continued to support the platform. These new NES titles provided a diverse array of gaming experiences, catering to a wide range of players and ensuring that the beloved NES had a lasting impact long after the arrival of its successor, the SNES.

## Official Retail NES Game Source Code
If you are interested to see officially released or leaked source code check for the Nintendo Entertainment System check out our other post:
{% include link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}

### Home Alone NES Source Code
The full source code for the NES game **Home Alone** was released online thats to the **Game History Org** and we have a specific post covering the details of the files included:
{% include link-to-other-post.html post="/home-alone-2-nes-source-code/" description="For the official source code to Home Alone for the NES check out this post." %}

---
## Reverse Engineered NES Games
If you are interested to see existing reversing projects for the NES check out our other post specifically on this topic:
{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For the list of decompiled games check out this post." %}

## Super Mario Bros
The original Super Mario Bros was the game that revolutionised platformers, with its smooth scrolling and excellent game design there was bound to be many reversing projects related to it. This section covers projects specifically targeted towards the classic platformer.

### Super Mario Compiler
The website **neilb.net** has created what it calls a **Mario Compiler** which takes in the original Super Mario Bros ROM and disassembles it.
The disassembled code is then shown to the user and can then be modified and re-assembled back into a working NES ROM. All from within the web application!

{% include link-to-other-site.html url="https://neilb.net/mariocompiler/" description="Check out the Mario compiler here" image="" title="Mario Compiler"  %}

You can also view the source code for the project here: [nbarkhina/MarioCompiler: A Super Mario Compiler written in JavaScript](https://github.com/nbarkhina/MarioCompiler)

### Super Mario Bros in C
**Mitchell Sternke** has created an impressive port of the original NES Super Mario Bros, he has written a tool that converts most of the 6502 assembly code into its equivalent C code. He has then written a PPU, Controller and APU emulation layer in C to make it all work into a portable C application running natively on the target hardware (No 6502 CPU emulation required!).

You can find it on Github here:
[SuperMarioBros-C/README.md at master · MitchellSternke/SuperMarioBros-C](https://github.com/MitchellSternke/SuperMarioBros-C/blob/master/README.md)

---
# Hardware
In this section, we'll explore the hardware that powers the NES and how it can be reverse engineered. Understanding the hardware that drives the NES is key to unlocking its potential and gaining a deeper appreciation for the games that were developed for it.

We'll take a closer look at the different components of the NES hardware, including the CPU, PPU, and APU, and discuss how they work together to create the unique gaming experience of the NES.

## Development Kit Hardware
Since Nintendo were very new to the home video game market, they saw themselves as creating most of the software that will run on the NES. 
So they did not make a public NES development kit, so most third parties has to roll their own development kits.

We have a specific post covering all the NES development kits that we know about here:
{% include link-to-other-post.html post="/famicom-nes-development-kit/" description="For information about Nintendo's Famicom development hardware check out this post." %}

## Retail NES Hardware
If you're interested in learning more about the hardware architecture of the NES, we highly recommend checking out the post on **Copetti.org**. This website is dedicated to exploring the technical details of the NES hardware, including the CPU, PPU, and APU, as well as other components that make up the console. You'll find in-depth explanations of how each component works, as well as detailed schematics and diagrams that help illustrate the inner workings of the NES.

{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/nes/" description="Copetti.org has an excellent tear down of the NES Hardware and how it works" image="/public/consoles/Nintendo Entertainment System.png" title="Nintendo Entertainment System (NES) Architecture - A Practical Analysis" %}

## Retail NES Controller Electronics
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/dahbvSYV0KA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Have you ever wondered about how a NES controller actually works, such as the circuits and electronic components used to physically create it? 
  
  Well you are in luck, the YouTuber **Displaced Gamers** explains exactly how the electronics of the NES controller works and a few interesting facts along the way!
  
He opens up the NES controller revealing the physical wires, traces (green lines on the circuit), rubber membranes and the 8-bit shift register (HD14021BP).
  
  The Controller as with all electronics has both a Power (High) and Ground (Low) lines, with 5V used for Power. Ground is connected to all of the buttons including the 4 D-pad buttons, whereas the Power lines go straight to the Carbon Printed Pull-Up resistors which then in-turn goes to each of the buttons. 
  
  When a button is pressed it completes the circuit at that point meaning it is pulled Low (Grounded) which allows the shift register to know that button is pressed. The resistors are used to make sure the power lines are always High, so we can ensure that when a pin is pulled low it has definitely been pressed.
</div>
</section>

---
# Game Software Development
There was an official software development kit provided by Nintendo/Intelligent Systems for the NES/Famicom but Nintendo didn't distribute it to third party developers. Instead developers were required to either get an off-the-shelf 6502 assembler or write their own. Paired with a booklet covering how the NES handled graphics, input and sound, this was all that game developers got in terms of software for game development on the NES.

Nowadays there are many open source assemblers, IDE's and even high level language compilers that can be used to create NES homebrew games.

## How long did it take to develop games for the NES back in the day?
On average, NES game development could take anywhere from several months to a couple of years. Some simpler or shorter games might be developed more quickly, while larger, more complex titles could take longer.

Most game development teams only hand a handful of people working full time on the game, mostly programmers. Artists and Sound Engineers were often working on multiple projects at the same time. Music was usually created and added to the game near the end of the development process when the game was getting ready to be shipped.

Some examples of the length of time it took to develop Nintendo Entertainment System games are:
* **SOLAR JETMAN: HUNT FOR THE GOLDEN WARSHIP** - Took 1 year with 4 developers (but only 2 developers for 60% of development time) [^4].

## Who was the first NES game developers outside of Japan?
The British company **Rare** made gaming history by becoming the first non-Japanese licensed game developer for the NES, securing the license from Nintendo through an ingenious demonstration of their skills by reverse engineering the console and showcasing the game "Slalom" as a convincing demo to Nintendo in 1986 [^3].

They created their own development kits based on the PDS and you can find out more about it in our post on the NES Development Hardware:
{% include link-to-other-post.html post="/famicom-nes-development-kit/" description="For information about Nintendo's Famicom development hardware check out this post." %}

## What do we know about the Official Famicom SDK?
The Official Famicom SDK was created by Nintendo and Intelligent Systems in 1986, as revealed by a file leaked in the Nintendo Gigaleaks. The file, called `HDT.EXE`, was included with the source code to the Game Boy Zelda game. 

It contains the NES/Famicom Debugger, a tool developed by Intelligent Systems between 1986-1989, which appears to read in three file formats: CHR (Character/Tile Data), SCR (Screen data or Source Data), and CGD (possibly standing for Character Graphic Designer, though this is uncertain).

## What is an NES emulator and how does it work?
We have a specific post covering exactly how emulators work including tips for writing your own emulators: 
{% include link-to-other-post.html post="/how-emulators-work" description="For more information on how emulators work check out this post." %}

## NES Emulators with Debugging Functionality
When reversing or developing NES games it is vital to use a good emulator which has debugging support such as:
* **BreakPoints** - e.g can create a breakpoint at a specific code or memory location and execution will stop at that place
* **Symbol File support** - e.g supports loading a file with a list of known variable and function names
* **Built-in Assembler** - assemble code in real-time within the emulator to quickly create patches
* **PPU Viewer** - see the current state of the Picture Processing Unit such as the Nametable, Sprites, CHR Memory viewer etc

Here is a list of a few Open Source emulators that have some of these features:
* **Mesen** - [SourMesen/Mesen: Mesen is a cross-platform (Windows & Linux) NES/Famicom emulator built in C++ and C#](https://github.com/SourMesen/Mesen)
* **Nintendulator** - [quietust/nintendulator: NES emulator for Windows](https://github.com/quietust/nintendulator)

## The Making of ROM City Rampage (Grand Theftendo)
The developers of **Retro City Rampage** (V-blank Entertainment) created a limited NES port of their game for the NES and documented some of the major changes that they needed in order to get it to run on the real console:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Hvx4xXhZMrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is a good introduction to some of the limitations you need to think about when developing a NES game. According to **RomHacking.net**[^1] they were not allowed to release the NES ROM created for **Grand Theftendo** or even some of the documentation that they wrote while creating it. However the ROM is in the final game, so if you own the game it is possible to extract the NES ROM and play it in an emulator!

You need to use a tool called **BFP Extractor** to extract content from: the file **gamedata.bfp** at addresses 0x747E67D6 and 0xC87FC3A3 then create a iNES ROM Header for it with the following Hex values:
```
4E 45 53 1A 20 20 50 00 00 00 00 00 00 00 00 00
```
Then simply join the header with the content from address 0x747E67D6 and 0xC87FC3A3 together and name it as a .nes file.

---
# Game Modding
Modding NES games can be a fun and rewarding way to explore the world of classic gaming and unleash your creativity. By modifying the code, graphics, or sound of an NES game, you can create new levels, characters, or even entirely new games that build upon the classic gameplay and aesthetics of the original. This can provide a unique and personalized gaming experience that is tailored to your own interests and preferences. Additionally, modding NES games can be a great way to learn more about the technical aspects of game development and programming, as well as to connect with other enthusiasts in the retro gaming community.

## Cheat Cartridges (Game Genie)
The main cheat cartridge available for the NES was the **Game Genie** created by **Codemasters** (Distributed by Galoob & Hornby Hobbies). This was a physical connector that would sit between the NES and the Game Cartridge you wanted to cheat on. It would alter the signals based on which memory addresses were being read/written to in real-time based on the Cheat code that was loaded into the system.

### Game Genie Code Format
The Game Genie used a special encoding format for its codes which can be encoded and decoded using this handy online tool:
[Game Genie Encoder/Decoder](https://games.technoplaza.net/ggencoder/js/)

### Making Game Genie Codes Permanent
If you want to permanently modify one of your NES ROM files with a certain cheat code there is a Windows Only tool to do this created by **rdurbin**: 
[Romhacking.net - Utilities - Permanent Game Genie](https://www.romhacking.net/utilities/784/)

## NES Memory Corruption
Corrupting the memory of a ROM has become very popular over on Youtube with creators such as **Vinesauce** regularly using ROM corruptors on popular games to produce some interesting results.

If you want to try it yourself we recommend the **Real-Time Corruptor Vanguard** (RTCV) available on Github: [redscientistlabs/RTCV: Real-Time Corruptor, Vanguard, CorruptCore, NetCore2 https://redscientist.com/rtc](https://github.com/redscientistlabs/RTCV). It is written using DotNet so it should work on Windows and MacOSX/Linux via Mono.

For more information we have a specific post on the topic of Game memory corruption:
{% include link-to-other-post.html post="/emulator-game-memory-corruption" description="For information about Game Memory Corruption check out this post." %}

### Deliberate NES Memory Corruption by Javidx9
The Youtuber **Javidx9** has created a system that randomly corrupts the memory of a NES game (every 5 seconds) as it runs just for the fun of seeing the chaos that follows. The interesting part of this is that his system is somewhat smart in that it tracks the most common memory addresses used per frame (excluding screen memory) and changes those at a higher rate compared to just random memory locations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-csXgGstvHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Apparently the source code was once linked on the twitch page, but it is sadly so old now that the link has disappeared, it would have been really interesting to see it!

## HD Texture Packs
You can easily replace the 2D Sprites and Tiles from a NES game with HD/4K alternatives using specific emulators such as Mesen and HDNes. The gameplay is unchanged as it overlays the HD Graphics on top of the game and doesn't have any of the colour limitations of the NES hardware. These modifications as emulator specific and will not modify the original ROM.

Mesen even comes with a HD Pack Builder Tool to create your own texture packs, for more information: [HD Packs :: Mesen Documentation](https://www.mesen.ca/docs/hdpacks.html#using-the-hd-pack-builder)

---
# Graphics & Rendering
For an introduction to how the NES renders graphics to the screen checkout **Austin Morlan**'s excellent article on his website:
[An Overview of NES Rendering - Austin Morlan](https://austinmorlan.com/posts/nes_rendering_overview/).

It covers the following topics related to NES Graphics:
* **Tiles** - 8x8 pixel graphics used to make up the background of a game
* **Block** - A set of 4x4 tiles (used for colour indexing)
* **Frames** - Background made up of 32x30 titles (256x240 pixels)
* **Nametable** - Big blob of bytes, specifying which tile is placed where in the frame (Like a Room in GameMaker)
* **Pattern Table** - Contains the actual pixels for the 8x8 tiles as either a 1 or a 0 (no colour information)
* **System Palette** - A Palette of all the 64 colours a NES can output to the screen
* **Frame Palette** - A dynamic subset of the System Palette of just the colours used in a single frame. Palette 0 to 3 are for background tiles, and 4 to 7 are for sprites.
* **Attribute Table** - A look up table of which Palette to use for that Block (set of 4x4 tiles)
* **Sprites** - Graphics made up of tiles but are rendered above the background tiles

---
# Reverse Engineering
If you're interested in exploring the inner workings of classic video games, reverse engineering is a process that can help you uncover the secrets of how these games were designed and programmed. In this tutorial, we'll provide an overview of the techniques used to reverse engineer NES games, including disassembly, debugging, and memory analysis

## File Formats
When reversing NES games you will come across a variety of file formats, this section will try to cover all of the most common formats you will encounter.

The formats for NES ROMS (virtual cartridges) are:
* **.NES** - This is the most common format for NES ROMs to be in, it is also known as the **iNES** format, most emulators will play this format (For More information: [INES - NESdev Wiki](https://www.nesdev.org/wiki/INES))
* **.UNIF** - The Universal NES Image Format was a competitor format to iNES 1.0 but has largely been replaced by iNES 2.0
* **.FDS** - Famicom Disc System backup format created for the **fwNES** emulator
* **.NSF** (NSF2/NSFe) - NES Sound Format for playing music ripped from NES games can be played back in some emulators and specific NSF tools.
* **.TNES** - Official Format by Nintendo used on the 3DS Virtual Console and also supports Famicom Disc System games

## Tutorial - Adding Hard Drops to NES Tetris
The website **Grid Bugs** has written an excellent article on reverse engineering the NES version of Tetris to add functionality to the game called a **Hard Drop**. Check it out here:
[Reverse-Engineering NES Tetris to add Hard Drop](https://www.gridbugs.org/reverse-engineering-nes-tetris-to-add-hard-drop/)

## Opening NES ROMs with Ghidra
Ghidra doesn't have support out of the box for NES ROM reverse engineering so we need to use a plugin created by **ilyakharlamov** available here:
[ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin: Ghidra NES / Famicom ROM Decompiler Plugin](https://github.com/ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin)

After downloading open up ghidra and go to `File -> Install Extensions..`
![GhidraNESInstallExtension](https://user-images.githubusercontent.com/40120498/235518649-ed162f5f-ff90-4faa-b199-b59109b2b1ce.jpeg)

It will then open up the following window, click the green plus icon in the top right:
![GhidraInstallExtensions](https://user-images.githubusercontent.com/40120498/235519010-4fd53d8c-643a-45fb-8edf-ffa2ff10ef2a.jpeg)

Then make sure to select the zip file that you downloaded previously:
![SelectExtensionZipFile](https://user-images.githubusercontent.com/40120498/235519239-7c4f2fec-daac-4e73-8d06-1f29dcf1e9b0.jpeg)

If you get the following screen then you will either need to build the plugin from source or use an older version of Ghidra:
![ErrorInstallingPlugin](https://user-images.githubusercontent.com/40120498/235519452-472736aa-fadf-4b20-9756-b7456c601cae.jpeg)

When attempting to compile the plugin from source and linking the ghidra directory I normally get the error:
> JavaModelException: Build path contains duplicate entry: '/ghidra_10.2.3_PUBLIC/Ghidra/Processors/68000/lib/68000.jar'for project 'Ghidra-Nes-Rom-Decompiler-Plugin'

To fix this you need to right Click on the Project and select "Properties", go to the "Java Build Path" tab and then the Libraries tab and delete all the jars.

When that is done you will be able to run the application in Eclipse by clicking the green play icon and the following window will pop up:
![GhidraRunAsExtension](https://user-images.githubusercontent.com/40120498/235523073-0428ba75-ebab-40c0-91d8-72182a37a9b1.jpeg)

Select "Ghidra" from this window.

If you get an error such as:
> Exception in thread "main" ghidra.util.exception.AssertException: Multiple modules collided with same name: Ghidra-Nes-Rom-Decompiler-Plugin

THen you need to delete the `Ghidra-Nes-Rom-Decompiler-Plugin` folder from the global ghidra config file location e.g `~/.ghidra/Extensions`

Now when you go to `Import File` and select a .nes ROM file you should get the following dialog:
![ImportNESROM](https://user-images.githubusercontent.com/40120498/235524698-6024d805-fddd-4079-aee2-0a7a61ffc2e2.jpeg)

Now after import you should be able to decompile any function you want as long as the Mapper is supported in the NES Plugin (currently only Mapper 0):
![NESDecompile](https://user-images.githubusercontent.com/40120498/235525315-360f63fb-2203-41c2-bd95-9e1f68df8c6f.jpeg)


---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [ROM City Rampage](https://www.romhacking.net/forum/index.php?topic=15982.0)
[^2]: Game Developer Magazine April 1994 Page 24
[^3]: Retro Gamer Issue 84 from December 2010 pages 34–35.
[^4]: Retro Gamer Issue 96 page 55