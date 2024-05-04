---
permalink: /gameboy/
layout: post
title: Nintendo Game Boy (DMG & GBC) Reversing
recommend: gameboy
recommendTitle: All GameBoy Posts
editlink: ../categories/consoles/GameBoy.md
console: gameboy
consoleimage: /public/NintendoGameBoyThumb.png
thumbnail: /public/NintendoGameBoyThumb.png
excerpt: Awesome list of Nintendo Game Boy Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo GameBoy
    url: /gameboy
videocarousel:
  - title: The Ultimate Game Boy Talk
    image: https://img.youtube.com/vi/HyzD8pNlpwI/hqdefault.jpg
    youtube: HyzD8pNlpwI
  - title: The Game Boy, a hardware autopsy
    image: https://img.youtube.com/vi/RZUDEaLa5Nw/hqdefault.jpg
    youtube: RZUDEaLa5Nw
redirect_from:
  -  /gameboy/hardware
  -  /ultimate-gameboy
---
# Introduction
Welcome to our page dedicated to Game Boy reverse engineering! The Game Boy was a groundbreaking handheld gaming console that was released in 1989, and has since become an iconic symbol of the early days of portable gaming. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Game Boy reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Game Boy and get ready to dive into the exciting world of Game Boy reverse engineering!

## Original GameBoy Dot Matrix Game (DMG) Specs 
Main specs of the original GameBoy:
 - **CPU**: z80 - LR35902 (Opcodes: http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)
 - **RAM**: 8KB (32KB in Color)

## Game Boy Exclusive Games (DMG & Color)
When it comes to finding a game to reverse engineer, it can be helpful to look at games that are cross-platform to compare builds. But the most valuable reverse engineering projects tend to be the platform exclusives, as these are the games people can no longer play on modern consoles.

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy to be able to play" image="/public/NintendoGameBoyThumb.png" title="List of Original DMG Game Boy exclusives"  %}

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy_Color-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy Color to be able to play" image="/public/consoles/Nintendo Game Boy Color.png" title="List of Game Boy Color exclusives"  %}

## The Ultimate Gameboy Talk (hardware specs etc)
The 8-bit Game Boy was sold between 1989 and 2003, but its architecture more closely resembles machines from the early 1980s, like the Commodore 64 or the NES.

This talk attempts to communicate "everything about the Game Boy" to the listener, including its internals and quirks, as well as the tricks that have been used by games and modern demos, reviving once more the spirit of times when programmers counted clock cycles and hardware limitations were seen as a challenge.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HyzD8pNlpwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Game Boy Technology

## Game Boy Assembly Language (Z80-like)
The Game Boy has a variant of the Zilog Z80 processor, well technically it is a CPU between the `i8080` and the Z80, it is not binary compatible with either but there are similarities. You need a assembler that can handle the Game Boy specific opcodes in order to write functional code for the Game Boy in assembly language.

{% include link-to-other-site.html url="https://www.chibiakumas.com/z80/Gameboy.php" description="ChibiAkumas has an excellent page with tutorials and information to get started with Game Boy assembly language" image="https://www.chibiakumas.com/z80/AsmTitleStrip.jpg" title="gbZ80 Assembly programming for the Gameboy and Gameboy Color"  %}

## Game Boy Boot ROM (Bootstrapping)
Every game produced for the Game Boy required a little piece of code known as the "bootloader" or boot code to initialise the state of the console. You don't have to know anything about this, but it can be fascinating to find out what the Game Boy does as soon as you hit that power button.

{% include link-to-other-site.html url="https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/" description="RealBoy has an excellent page that gives you an in-depth look at how the Game Boy's bootloader works" title="A Look At The Game Boy Bootstrap: Let The Fun Begin!"  %}

---
# Reverse Engineering Game Boy Games
There have been a few very successful reverse engineering projects for the Game Boy, one of the most successful is the Pokemon dissassembly which managed to reverse engineer the entire game into a rebuildable ROM!

## Pokemon Red/Blue/Yellow
The Pokemon Reverse Engineering Team (PRET) have managed to pull off a marvellous achievement, they have fully reverse engineered Pokemon Red and Blue back into retail-matching assembly code.
{% include link-to-other-post.html post="/pokemonredblue" description="For more information about the project check out this post." %}

## Legend of Zelda Links Awakening
In August 2016 the website KZone started a full disassembly of the classic Game Boy game Link's Awakening, along the way they have written some excellent in-depth articles about how the game works. Check it out!

{% include link-to-other-site.html url="https://kemenaran.winosx.com/posts/category-disassembling-links-awakening/" description="Find out how Zelda Link's Awakening for Game Boy works at KZone!" image="https://kemenaran.winosx.com/images/zelda-links-awakening-sfx/LADX-move.gif" title="Disassembling Link’s Awakening"  %}

## Looney Tunes: Carrot Crazy
{% include link-to-other-site.html url="https://www.huderlem.com/blog/posts/carrot-crazy-1/" description="Find out how to reverse engineer Looney Tunes: Carrot Crazy for the GBC" image="https://www.huderlem.com/blog/posts/carrot-crazy-1/password-entry-screen.png" title="Reverse Engineering Carrot Crazy"  %}

---
# Game Boy Development

## Game Boy Development Kit Hardware
Special hardware was sold directly from Nintendo in order to make it easy for third party developers to get started making their own games for the new handheld.

{% include link-to-other-post.html post="/gameboy-development-kit-hardware/" description="For more information about the development hardware used for Game Boy projects check out this post." %}

## Game Boy Software Development Kit
Along with the hardware, Nintendo also provided a fairly limited software development kit, which contained tools such as z80 assemblers and linkers.
{% include link-to-other-post.html post="/official-gameboy-software-dev-kit/" description="For more information about the SDK used to make Game Boy games check out this post." %}

---
# Hardware

## Hardware Architecture
We used to have a post on the hardware architecture of the Game Boy, but now we have replaced it for a link to the far superior page on **copetti.org**, it is a must read for any reverse engineer or beginner emulator developer.
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/game-boy/" description="This page on copetti.org has everything you need to know about the Game Boy Hardware, it is a must read!" image="/public/NintendoGameBoyThumb.png" title="Game boy Architecture - A Practical Analysis"  %}

## Sharp LR35902 Microprocessor
The CPU used in the original Game Boy was a custom Sharp LR35902, which is often considered similar to the Zilog Z80 but with some variations. While it was based on the Z80 architecture, it was not produced by Zilog.

{% include link-to-other-post.html post="/z80" description="For more information about the Z80-based CPU used in the Game Boy check out this post." %}

## Game Boy Pocket Hardware Schematics
If you want to go really low level into the Game Boy hardware, you can view a re-creation of the Gameboy Circuit Schematics over on Github:
[gb-schematics/MGB-xCPU.pdf at master · Gekkio/gb-schematics · GitHub](https://github.com/Gekkio/gb-schematics/blob/master/MGB-xCPU/schematic/MGB-xCPU.pdf)

## The Game Boy, a hardware autopsy
<iframe width="560" height="315" src="https://www.youtube.com/embed/RZUDEaLa5Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ecTQVa42sJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Mobile Adapter GB
In Japan an adapter was released that allowed you to connect your GameBoy Color to a mobile phone called **The Mobile Adapter GB**. Only a few Japanese games supported this adapter, one of which was Pokemon Crystal.

**TheXcellerator** has written an excellent article on not only how the adapter works but also how he managed to create an exploit to run custom code through the adapter! 

Here is the link: [Tetsuji: Remote Code Execution on a GameBoy Colour 22 Years Later :: TheXcellerator](https://xcellerator.github.io/posts/tetsuji/)

---
## Super GameBoy
The Super GameBoy was a Super Nintendo Cartridge that allowed you to play Original GameBoy (DMG) games on the big screen (TV Monitor). It did this by including all the hardware a normal GameBoy has (a z80 cpu etc) minus the screen and the buttons:
<iframe width="560" height="420" src="https://www.youtube.com/embed/uaeLY441Fwc?color=white&theme=dark"></iframe>

---
## Wide Boy 64
Official device to play gameboy (including GBA) games on the N64, but was not sold to the general public. You had to be a game developer or press in order to buy one from Intelligent Systems.
<iframe width="560" height="420" src="https://www.youtube.com/embed/llIz6qjDfLc?color=white&theme=dark"></iframe>

---
## Game Boy Printer
To go along with the Game Boy Camera Nintendo also releases a Game Boy Printer to print the photos you have taken, it also had integration with a couple of GB games such as Pokemon Yellow/Gold/Silver to print out Pokedex stickers [^2].
<iframe width="560" height="420" src="https://www.youtube.com/embed/43FfJvd-YP4?color=white&theme=dark"></iframe>

---
## GB Booster (for N64)
Similar to the Super GameBoy but this is for the Nintendo 64 and not licenced by Nintendo, I first saw this for sale in issue X of the UK Nintendo Official Magazine.
<iframe width="560" height="420" src="https://www.youtube.com/embed/NiMx10PV_cw?color=white&theme=dark"></iframe>
For more information: 
- http://www.chrismcovell.com/gbbooster.html
- https://gamehacking.org/wiki/Game_Booster_(Nintendo_64)

---
## Datel Game Booster for Sony Playstation
Similar to the Super GameBoy but this is for the Sony Playstation!
<iframe width="560" height="420" src="https://www.youtube.com/embed/SxF2e6DUMRo?color=white&theme=dark"></iframe>

There was also one for PS2 that played Game Boy Color games called the **GameStudio**:
![Datel game Studio](https://github.com/RetroReversing/retroReversing/assets/40120498/9026fc2e-7577-447d-94ee-e1643e97aa11)


## Dance Dance Revolution Controller for GBC
Konami came out with a custom "controller" for Dance Dance Revolution that goes on top of the Game Boy Color and maps the buttons, quite cool but a very cheap accessory.
![Dance Dance Revolution Controller for GBC](https://github.com/RetroReversing/retroReversing/assets/40120498/5de18708-4006-471f-88f4-3864f6a7f34a)


---
# Game Boy Source Code

## Mr Do! For Original Game Boy
The source code for the Game Boy classic `Mr Do!` has been kindly released by two of the original game developers and can provide an excellent reference for how retail Game Boy games were developed in 1990!

{% include link-to-other-post.html post="/mrdo" description="For more information about the source code check out this post." %}

---
# Game Boy Games

## Alien 3
The Game Boy game **Alien 3** was written in only 5 weeks by legendary game programmer **Jas Austin**:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fastest commercial game I&#39;ve ever written? That would have been Alien3 on Gameboy. Done in about 5 weeks :) with <a href="https://twitter.com/recluse_games?ref_src=twsrc%5Etfw">@recluse_games</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/297359737287225345?ref_src=twsrc%5Etfw">February 1, 2013</a></blockquote> 

## R-Type
The Game Boy classic **R-Type** was programmed by **Jas Austin** completely from Memory as he didn't have any code or assets from any other version of the game!
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I agree, it&#39;s amazing some of the lengths we have to go to when we didn&#39;t have code or assets. For R-Type I did most of it from memory after visits to the Trocadero in London. And I didn&#39;t live in London.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1251581149643780097?ref_src=twsrc%5Etfw">April 18, 2020</a></blockquote>

The company **B.I.T.S** obtained the license to develop the Game Boy version of the game but required a programmer to work on the title. **Jas Austin** heard about this through his agency and travelled to London to meet up, he impressed them so much that he was given a development kit and a deadline of a week to come up with a demo! He did such a good job he got a permanent job at **B.I.T.S** [^1].

One cool easter egg he added to the game was an implementation of John Conway’s game of Life!
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I hid a version of John Conway’s game of Life in R-Type on the Game Boy.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1379131739415719941?ref_src=twsrc%5Etfw">April 5, 2021</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Source graphics for Gameboy R-Type Lv3 ship. By Mark Jones... <a href="https://twitter.com/hashtag/ScreenshotSaturday24YearsAgo?src=hash&amp;ref_src=twsrc%5Etfw">#ScreenshotSaturday24YearsAgo</a> <a href="http://t.co/RsKlc0rQOE">pic.twitter.com/RsKlc0rQOE</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/591964228053016577?ref_src=twsrc%5Etfw">April 25, 2015</a></blockquote>

---
# Game Boy Homebrew
If you are interested in reverse engineering Gamy Boy Homebrew you will want to check out the tool **gbtoolsid** which can give an indication of what tool was used to make the rom (e.g GBDK, GBStudio etc):
[bbbbbr/gbtoolsid: A command line app for identifying tools used to build Game Boy ROMs](https://github.com/bbbbbr/gbtoolsid)

## Blem! Playstation Emulator for the GB
Blem! was a prank ROM for the Game Boy which pretended to load up a playstation 1 emulator on the Game Boy. This is a reference to the Bleam! Playstaiton emulator released for Mac and Dreamcast. I doubt anyone really believed this prank but it was mentioned in the UK Magazine **GBX** issue 3 (Septermber 2001) when talking about Game Boy emulation for PC (NoCash) and Mac (Virtual Boy) [^11].


---
# Sound and Audio on the Game Boy

## Game Boy Color Audio Chip Reversing (AMP MGB)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I reverse-engineered the audio chip in the <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> Game Boy Color. It contains three power op-amps for the speaker and headphone channels. This 1998 chip is built from about 100 NPN and PNP transistors. Die photo from <a href="https://twitter.com/johndmcmaster?ref_src=twsrc%5Etfw">@johndmcmaster</a>. Article &amp; schematic:<a href="https://t.co/EhsVogAJPl">https://t.co/EhsVogAJPl</a> <a href="https://t.co/J6CYPsOdaz">pic.twitter.com/J6CYPsOdaz</a></p>&mdash; Ken Shirriff (@kenshirriff) <a href="https://twitter.com/kenshirriff/status/1256631240838361088?ref_src=twsrc%5Etfw">May 2, 2020</a></blockquote>

If you are interested in low-level hardware details about the Game Boy then this is a must read article: [Reverse-engineering the audio amplifier chip in the Nintendo Game Boy Color](http://www.righto.com/2020/05/reverse-engineering-audio-chip-in.html)

## Synthic: Automatically generate gameboy music using machine learning
This is a very interesting project that played a large set of gameboy games in a custom headless emulator and tracked the audio registers into a text format. They then trained a Machine Learning algorithm on that audio data and used it to generate completely new Gameboy Music! Check it out here:
[jawline/Synthic: Automatically generate gameboy music using machine learning](https://github.com/jawline/Synthic)

---
# File Formats
{% include link-to-other-post.html post="/game-boy-file-formats" description="For more about the game boy file formats information check out this post." %}

---
# All Posts tagged with GameBoy

<div>
{% include console.html %}
</div>

---
# References
[^1]: [Terminator 2, R-Type, Altered Beast with Jas Austin - The Retro Hour EP320 - YouTube](https://www.youtube.com/watch?v=5ilnsca4jYc)
[^2]: [Game Boy Printer - Bulbapedia, the community-driven Pokémon encyclopedia](https://bulbapedia.bulbagarden.net/wiki/Game_Boy_Printer)
[^3]: GBX issue 3 (Septermber 2001) Page 11
