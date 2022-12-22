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
# Game Boy Basics
Interested in learning more about the the original Game Boy or Game Boy Color? Excellent! This section will guide you through the basics, starting from basic assembly language all the way to reverse engineering your first game!

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
## GB Booster
Similar to the Super GameBoy but this is for the Nintendo 64 and not licenced by Nintendo, I first saw this for sale in issue X of the UK Nintendo Official Magazine.
<iframe width="560" height="420" src="https://www.youtube.com/embed/NiMx10PV_cw?color=white&theme=dark"></iframe>
For more information: 
- http://www.chrismcovell.com/gbbooster.html
- https://gamehacking.org/wiki/Game_Booster_(Nintendo_64)

## Wide Boy 64
Official device to play gameboy (including GBA) games on the N64, but was not sold to the general public. You had to be a game developer or press in order to buy one from Intelligent Systems.
<iframe width="560" height="420" src="https://www.youtube.com/embed/llIz6qjDfLc?color=white&theme=dark"></iframe>

---
## Datel Game Booster for Sony Playstation
Similar to the Super GameBoy but this is for the Sony Playstation!
<iframe width="560" height="420" src="https://www.youtube.com/embed/SxF2e6DUMRo?color=white&theme=dark"></iframe>

---
## GameBoy Printer
<iframe width="560" height="420" src="https://www.youtube.com/embed/43FfJvd-YP4?color=white&theme=dark"></iframe>

---
# Source Code

## Mr Do! For Original Game Boy
The source code for the Game Boy classic `Mr Do!` has been kindly released by two of the original game developers and can provide an excellent reference for how retail Game Boy games were developed in 1990!

{% include link-to-other-post.html post="/mrdo" description="For more information about the source code check out this post." %}

---
# Sound and Audio on the Game Boy

## Game Boy Color Audio Chip
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I reverse-engineered the audio chip in the <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> Game Boy Color. It contains three power op-amps for the speaker and headphone channels. This 1998 chip is built from about 100 NPN and PNP transistors. Die photo from <a href="https://twitter.com/johndmcmaster?ref_src=twsrc%5Etfw">@johndmcmaster</a>. Article &amp; schematic:<a href="https://t.co/EhsVogAJPl">https://t.co/EhsVogAJPl</a> <a href="https://t.co/J6CYPsOdaz">pic.twitter.com/J6CYPsOdaz</a></p>&mdash; Ken Shirriff (@kenshirriff) <a href="https://twitter.com/kenshirriff/status/1256631240838361088?ref_src=twsrc%5Etfw">May 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Synthic: Automatically generate gameboy music using machine learning
This is a very interesting project that played a large set of gameboy games in a custom headless emulator and tracked the audio registers into a text format. They then trained a Machine Learning algorithm on that audio data and used it to generate completely new Gameboy Music! Check it out here:
[jawline/Synthic: Automatically generate gameboy music using machine learning](https://github.com/jawline/Synthic)

---
# File Formats
There are a few different file formats that you will find relating to the GameBoy which are listed below:
* **.ISX** Official Nintendo ROM file (compiled by the assembler **ISAS**) (contains debug symbols)
* **.GB** Original GameBoy ROM file (no debug symbols) the exact contents of the ROM chip inside the cartridge
* **.GBC** Original GameBoy Color ROM file (no debug symbols) the exact contents of the ROM chip inside the cartridge

If you backup your own games they will be created with a **.GB** or **.GBC** file extension along with most of the ROMS that can be found online. If the ROM was leaked from a first party developer such as Nintendo then they will likely be in **.ISX** format, this can easily be converted to **.GBC** with the tool **CVTISX** included in the Official GameBoy SDK.

The emulator SameBoy recently added support to play ISX files due to the **2020 Nintendo Leaks**:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Following the... uh... recent events, I&#39;ve added ISX file format support to SameBoy, including symbol support <a href="https://t.co/Ba28bA2ARu">pic.twitter.com/Ba28bA2ARu</a></p>&mdash; Lior Halphon (@LIJI32) <a href="https://twitter.com/LIJI32/status/1254137545325260801?ref_src=twsrc%5Etfw">April 25, 2020</a></blockquote>


---
# All Posts tagged with GameBoy
<div>

{% include console.html %}
</div>

