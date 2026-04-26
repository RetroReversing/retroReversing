---
layout: post
permalink: /gameboy
title: Nintendo Game Boy Reverse Engineering
category: gameboy
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Nintendo Game Boy Reverse Engineering
    url: #
tags:
  - gameboy
  - introduction
recommendTitle: All Game Boy Posts
recommend:
  - gameboy
  - gba
  - introduction
  - ds
editlink: ../categories/consoles/GameBoy.md
excerpt: Hub page for Game Boy and Game Boy Color hardware, development, reverse engineering, and source code resources
updatedAt: '2026-04-26'
redirect_from:
  - /gameboy/hardware
  - /ultimate-gameboy
  - /gameboy/
---

# Introduction
Welcome to our page dedicated to Game Boy reverse engineering! The Game Boy was a groundbreaking handheld gaming console that was released in 1989, and has since become an iconic symbol of the early days of portable gaming. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Game Boy reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Game Boy and get ready to dive into the exciting world of Game Boy reverse engineering!

## Original GameBoy Dot Matrix Game (DMG) Specs 
Main specs of the original GameBoy:
 * **CPU**: z80 - LR35902 (Opcodes: http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)
 * **RAM**: 8KB (32KB in Color)

## Game Boy Exclusive Games (DMG & Color)
When it comes to finding a game to reverse engineer, it can be helpful to look at games that are cross-platform to compare builds. But the most valuable reverse engineering projects tend to be the platform exclusives, as these are the games people can no longer play on modern consoles.

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy to be able to play" image="/public/NintendoGameBoyThumb.png" title="List of Original DMG Game Boy exclusives"  %}

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy_Color-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy Color to be able to play" image="/public/consoles/Nintendo Game Boy Color.png" title="List of Game Boy Color exclusives"  %}

## The Ultimate Game Boy Talk (hardware specs etc)
The 8-bit Game Boy was sold between 1989 and 2003, but its architecture more closely resembles machines from the early 1980s, like the Commodore 64 or the NES.

This talk attempts to communicate "everything about the Game Boy" to the listener, including its internals and quirks, as well as the tricks that have been used by games and modern demos, reviving once more the spirit of times when programmers counted clock cycles and hardware limitations were seen as a challenge.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HyzD8pNlpwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Game Boy Technology

## Game Boy Assembly Language (Z80-like)
The Game Boy has a variant of the Zilog Z80 processor, well technically it is a CPU between the `i8080` and the Z80, it is not binary compatible with either but there are similarities. You need a assembler that can handle the Game Boy specific opcodes in order to write functional code for the Game Boy in assembly language.

{% include link-to-other-site.html url="https://www.chibiakumas.com/z80/Gameboy.php" description="ChibiAkumas has an excellent page with tutorials and information to get started with Game Boy assembly language." image="https://www.chibiakumas.com/z80/AsmTitleStrip.jpg" title="gbZ80 Assembly programming for the Game Boy and Game Boy Color"  %}

## Game Boy Boot ROM (Bootstrapping)
Every game produced for the Game Boy required a little piece of code known as the "bootloader" or boot code to initialise the state of the console. You don't have to know anything about this, but it can be fascinating to find out what the Game Boy does as soon as you hit that power button.

{% include link-to-other-site.html url="https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/" description="RealBoy has an excellent page that gives you an in-depth look at how the Game Boy's bootloader works" title="A Look At The Game Boy Bootstrap: Let The Fun Begin!"  %}

---
# Reverse Engineering Game Boy Games
There have been a few very successful reverse engineering projects for the Game Boy, one of the most successful is the Pokemon disassembly which managed to reverse engineer the entire game into a rebuildable ROM!

## Pokemon Red/Blue/Yellow
The Pokemon Reverse Engineering Team (PRET) have managed to pull off a marvellous achievement, they have fully reverse engineered Pokemon Red and Blue back into retail-matching assembly code.
{% include_cached link-to-other-post.html post="/pokemonredblue" description="For more information about the project check out this post." %}

## Legend of Zelda Links Awakening
In August 2016 the website KZone started a full disassembly of the classic Game Boy game Link's Awakening, along the way they have written some excellent in-depth articles about how the game works. Check it out!

{% include link-to-other-site.html url="https://kemenaran.winosx.com/posts/category-disassembling-links-awakening/" description="Find out how Zelda Link's Awakening for Game Boy works at KZone!" image="https://kemenaran.winosx.com/images/zelda-links-awakening-sfx/LADX-move.gif" title="Disassembling Link's Awakening"  %}

## Looney Tunes: Carrot Crazy
{% include link-to-other-site.html url="https://www.huderlem.com/blog/posts/carrot-crazy-1/" description="Find out how to reverse engineer Looney Tunes: Carrot Crazy for the GBC" image="https://www.huderlem.com/blog/posts/carrot-crazy-1/password-entry-screen.png" title="Reverse Engineering Carrot Crazy"  %}

---
# Game Boy Development

## Game Boy Development Kit Hardware
Special hardware was sold directly from Nintendo in order to make it easy for third party developers to get started making their own games for the new handheld.

{% include_cached link-to-other-post.html post="/gameboy-development-kit-hardware" description="For more information about the development hardware used for Game Boy projects check out this post." %}

## Game Boy Software Development Kit
Along with the hardware, Nintendo also provided a fairly limited software development kit, which contained tools such as z80 assemblers and linkers.
{% include_cached link-to-other-post.html post="/official-gameboy-software-dev-kit" description="For more information about the SDK used to make Game Boy games check out this post." %}

---
# Hardware
Understanding the platform before opening a ROM saves time. The Game Boy family is simple enough to study at board-level, but it still has enough cartridge and accessory variation that hardware context matters.

## Hardware Architecture
If you want a broad architectural overview before going deeper, Copetti's write-up is one of the best starting points:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/game-boy/" description="Rodrigo Copetti provides a practical architectural overview of the Game Boy, covering the CPU, memory layout, graphics pipeline, audio system, and cartridge hardware." image="/public/NintendoGameBoyThumb.png" title="Game Boy Architecture - A Practical Analysis" %}

## Boot ROM
The boot ROM is one of the first platform-specific code paths worth understanding. It establishes initial hardware state, checks cartridge header data, and controls the startup sequence:
{% include link-to-other-site.html url="https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/" description="A practical breakdown of the original Game Boy bootstrap process, useful when studying cartridge headers, reset state, and emulator accuracy." title="A Look At The Game Boy Bootstrap" %}

## Sharp LR35902 Microprocessor
The Sharp LR35902 is close enough to Z80-family code to feel familiar, but different enough that you should treat it as its own target architecture. In practice it sits somewhere between the `i8080` and the Z80 and is not binary-compatible with either:
{% include_cached link-to-other-post.html post="/z80" description="Background on the Z80 family and why the Game Boy CPU looks familiar while still requiring Game Boy specific handling." %}

## Schematics
If you want to work from recreated board-level documentation, Gekkio's schematic set is a strong reference for the Pocket hardware revision:
{% include link-to-other-site.html url="https://github.com/Gekkio/gb-schematics/blob/master/MGB-xCPU/schematic/MGB-xCPU.pdf" description="Recreated schematics for the Game Boy Pocket CPU board, useful for tracing signals and understanding hardware level behaviour." title="Game Boy Pocket Hardware Schematics" %}

## The Ultimate Game Boy Talk
This talk is still one of the best broad introductions to the hardware and the programming model, especially if you want one long-form overview before drilling into specific subsystems:
<iframe width="560" height="315" src="https://www.youtube.com/embed/HyzD8pNlpwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Game Boy, a hardware autopsy
These two videos are worth keeping together because they focus more on the physical hardware itself than the higher-level architectural write-ups above:
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
* [Chris Mcovell's page](http://www.chrismcovell.com/gbbooster.html)
* [GameHacking.org Wiki Page](https://gamehacking.org/wiki/Game_Booster_(Nintendo_64))

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

{% include_cached link-to-other-post.html post="/mrdo" description="For more information about the source code check out this post." %}

---
# Games
Some game-specific anecdotes are worth keeping because they point to development constraints, unusual implementation tricks, or particularly good analysis material.

## Alien 3
`Alien 3` is a useful reminder of how compressed licensed handheld schedules could be. Jas Austin has said the Game Boy version was written in about five weeks [^1].
The Game Boy game **Alien 3** was written in only 5 weeks by legendary game programmer **Jas Austin**:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fastest commercial game I&#39;ve ever written? That would have been Alien3 on Game Boy. Done in about 5 weeks :) with <a href="https://twitter.com/recluse_games?ref_src=twsrc%5Etfw">@recluse_games</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/297359737287225345?ref_src=twsrc%5Etfw">February 1, 2013</a></blockquote> 

## R-Type
According to Jas Austin, the Game Boy version of `R-Type` was largely built from memory after arcade research trips rather than from shared code or art assets [^2].

He also described being hired after showing a one-week demo to B.I.T.S, which is a useful glimpse into how quickly Game Boy contract work could move in that era [^2].



<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I agree, it&#39;s amazing some of the lengths we have to go to when we didn&#39;t have code or assets. For R-Type I did most of it from memory after visits to the Trocadero in London. And I didn&#39;t live in London.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1251581149643780097?ref_src=twsrc%5Etfw">April 18, 2020</a></blockquote>

The company **B.I.T.S** obtained the license to develop the Game Boy version of the game but required a programmer to work on the title. **Jas Austin** heard about this through his agency and travelled to London to meet up, he impressed them so much that he was given a development kit and a deadline of a week to come up with a demo! He did such a good job he got a permanent job at **B.I.T.S** [^1].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I hid a version of John Conway's game of Life in R-Type on the Game Boy.</p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/1379131739415719941?ref_src=twsrc%5Etfw">April 5, 2021</a></blockquote>

Austin later mentioned hiding an implementation of John Conway's Game of Life inside the cartridge [^3], and also shared source graphics for the level 3 ship by Mark Jones [^4].

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Source graphics for Game Boy R-Type Lv3 ship. By Mark Jones... <a href="https://twitter.com/hashtag/ScreenshotSaturday24YearsAgo?src=hash&amp;ref_src=twsrc%5Etfw">#ScreenshotSaturday24YearsAgo</a> <a href="http://t.co/RsKlc0rQOE">pic.twitter.com/RsKlc0rQOE</a></p>&mdash; Jas Austin (@IamXERO) <a href="https://twitter.com/IamXERO/status/591964228053016577?ref_src=twsrc%5Etfw">April 25, 2015</a></blockquote>

## How Pokemon Gold & Silver Work (Tribute to Satoru Iwata)
[TheHappieCat](https://www.youtube.com/watch?v=XGFBtVbBgnM) explains the technical wizardry Satoru Iwata employed to fit the Kanto region into *Pokémon Gold & Silver*. The video provides a primer on low-level assembly programming and memory alignment, illustrating how efficient data packing and optimization allowed for the game's massive scope on the limited Game Boy Color hardware.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XGFBtVbBgnM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Peripherals and Accessories
The wider Game Boy ecosystem matters for reverse engineering because several accessories introduce their own protocols, bootstrap behaviour, or unusual cartridge side hardware.

## Mobile Adapter GB
Nintendo released a Japanese accessory called the Mobile Adapter GB which connected a Game Boy Color to a mobile phone. Only a small set of games used it, making it a good example of an obscure platform feature that remained dormant for years:
{% include link-to-other-site.html url="https://xcellerator.github.io/posts/tetsuji/" description="TheXcellerator explains how the Mobile Adapter GB works and how it was turned into a route for running custom code years after release." title="Tetsuji - Remote Code Execution on a Game Boy Colour 22 Years Later" %}

## Super Game Boy
The Super Game Boy is important because it effectively embeds Game Boy hardware inside a Super Nintendo cartridge, creating a hybrid environment with its own timing and presentation quirks:
{% include link-to-other-site.html url="https://www.youtube.com/watch?v=uaeLY441Fwc" description="A video overview of the Super Game Boy hardware and how Nintendo adapted the handheld for television output." title="Super Game Boy Overview" %}
<iframe width="560" height="420" src="https://www.youtube.com/embed/uaeLY441Fwc?color=white&theme=dark"></iframe>

## Wide Boy 64
The Wide Boy 64 was an official but non-retail device used by developers and press to run Game Boy and Game Boy Advance software through an N64 based setup:
{% include link-to-other-site.html url="https://www.youtube.com/watch?v=llIz6qjDfLc" description="An overview of the Wide Boy 64 and why it matters as a rare Nintendo evaluation and capture device." title="Wide Boy 64 Overview" %}
<iframe width="560" height="420" src="https://www.youtube.com/embed/llIz6qjDfLc?color=white&theme=dark"></iframe>

## Game Boy Printer
The Game Boy Printer is relevant because it exposes another side of the accessory protocol stack, and because several games shipped explicit printing features rather than treating it as a camera-only novelty. `Pokemon Yellow`, `Pokemon Gold`, and `Pokemon Silver` all used it for game-specific output such as Pokedex stickers [^5].

## GB Booster
The GB Booster was an unlicensed Nintendo 64 accessory in the same broad space as the Super Game Boy, but built outside Nintendo's official hardware ecosystem. Two short references are useful if you want to document it further:
* **[Chris McCovell](http://www.chrismcovell.com/gbbooster.html)** - Notes and photos covering the hardware and behaviour of the device.
* **[GameHacking.org Wiki](https://gamehacking.org/wiki/Game_Booster_(Nintendo_64))** - A general reference page for the accessory.
<iframe width="560" height="420" src="https://www.youtube.com/embed/NiMx10PV_cw?color=white&theme=dark"></iframe>

## Datel Game Booster and GameStudio
Datel also shipped PlayStation accessories for running Game Boy software, including the PlayStation Game Booster and the later `GameStudio` for PlayStation 2:
<iframe width="560" height="420" src="https://www.youtube.com/embed/SxF2e6DUMRo?color=white&theme=dark"></iframe>
![Datel GameStudio](https://github.com/RetroReversing/retroReversing/assets/40120498/9026fc2e-7577-447d-94ee-e1643e97aa11)

## Dance Dance Revolution Controller for GBC
Konami's `Dance Dance Revolution` controller for the Game Boy Color is a useful example of how far the accessory ecosystem stretched beyond normal link cable peripherals:
![Dance Dance Revolution Controller for GBC](https://github.com/RetroReversing/retroReversing/assets/40120498/5de18708-4006-471f-88f4-3864f6a7f34a)

---
# Sound
The audio hardware is one of the most technically interesting parts of the platform, especially once you move beyond music drivers and start looking at the analogue side.

## Game Boy Color Audio Chip Reversing
Ken Shirriff's reverse engineering of the Game Boy Color audio amplifier chip is one of the best examples of taking the handheld beyond emulator level understanding and into silicon level analysis. The chip contains three power op-amps for the speaker and headphone paths, so the article is useful if you want analogue details rather than just register level behaviour:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I reverse-engineered the audio chip in the <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> Game Boy Color. It contains three power op-amps for the speaker and headphone channels. This 1998 chip is built from about 100 NPN and PNP transistors. Die photo from <a href="https://twitter.com/johndmcmaster?ref_src=twsrc%5Etfw">@johndmcmaster</a>. Article &amp; schematic:<a href="https://t.co/EhsVogAJPl">https://t.co/EhsVogAJPl</a> <a href="https://t.co/J6CYPsOdaz">pic.twitter.com/J6CYPsOdaz</a></p>&mdash; Ken Shirriff (@kenshirriff) <a href="https://twitter.com/kenshirriff/status/1256631240838361088?ref_src=twsrc%5Etfw">May 2, 2020</a></blockquote>

If you are interested in low-level hardware details about the Game Boy then this is a must read article: [Reverse-engineering the audio amplifier chip in the Nintendo Game Boy Color](http://www.righto.com/2020/05/reverse-engineering-audio-chip-in.html)

## Synthic: Automatically generate gameboy music using machine learning
This is a very interesting project that played a large set of gameboy games in a custom headless emulator and tracked the audio registers into a text format. They then trained a Machine Learning algorithm on that audio data and used it to generate completely new Game Boy Music! Check it out here:
[jawline/Synthic: Automatically generate gameboy music using machine learning](https://github.com/jawline/Synthic)

---
# File Formats
{% include_cached link-to-other-post.html post="/game-boy-file-formats" description="For more about the game boy file formats information check out this post." %}

### DMG-palette-patcher
[MrBlinky](https://github.com/MrBlinky/DMG-palette-patcher) has released a Python tool for patching Original Game Boy (DMG) ROMs to use specific color palettes when played on a Game Boy Color. The script works by modifying the ROM's header-specifically the license code and title checksum-to trick the Game Boy Color's boot ROM into automatically selecting one of 45 built-in color palettes, such as the classic grey theme, rather than the default blue-greenish hues.

{% include link-to-other-site.html url="https://github.com/MrBlinky/DMG-palette-patcher" description="MrBlinky has released DMG-palette-patcher, a tool that modifies Game Boy ROM headers to trigger specific built-in color palettes on the Game Boy Color." title="DMG-palette-patcher by MrBlinky" %}

## gb-save-states
`gb-save-states` is interesting because it applies patch based save state support to commercial games running on original hardware, which makes it a good example of practical ROM level instrumentation:
{% include link-to-other-site.html url="https://github.com/mattcurrie/gb-save-states" description="A collection of patches that add save state support to Game Boy and Game Boy Color titles on original hardware." title="gb-save-states" %}

## Blem! PlayStation Emulator for the GB
`Blem!` was a prank ROM that pretended to boot a PlayStation emulator on the Game Boy. The joke was a reference to the `Bleem!` PlayStation emulator, and it was notable enough to show up in `GBX` issue 3 in a short discussion of Game Boy emulation on PC and Mac [^6]. It is not technically important in the same way as the tools above, but it is a useful reminder that handheld homebrew culture also produced jokes, hoaxes, and magazine folklore around emulation.

---
# All Posts
<div>

{% include console.html %}

</div>

---
# References
[^1]: [Jas Austin on Alien 3 for Game Boy taking about five weeks - Twitter/X](https://twitter.com/IamXERO/status/297359737287225345)
[^2]: [Terminator 2, R-Type, Altered Beast with Jas Austin - The Retro Hour EP320 - YouTube](https://www.youtube.com/watch?v=5ilnsca4jYc)
[^3]: [Jas Austin on hiding Conway's Game of Life inside R-Type - Twitter/X](https://twitter.com/IamXERO/status/1379131739415719941)
[^4]: [Jas Austin sharing R-Type source graphics by Mark Jones - Twitter/X](https://twitter.com/IamXERO/status/591964228053016577)
[^5]: [Game Boy Printer - Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Game_Boy_Printer)
[^6]: GBX issue 3 (September 2001) page 11
