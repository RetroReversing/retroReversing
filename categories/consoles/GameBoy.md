---
permalink: /gameboy/
layout: post
title: Nintendo Game Boy (DMG & GBC)
recommend: gameboy
recommendTitle: All GB Posts
editlink: ../categories/consoles/GameBoy.md
console: gameboy
consoleimage: /public/NintendoGameBoyThumb.png
thumbnail: /public/NintendoGameBoyThumb.png
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gameboy
    url: /gameboy
carousel:
  - title: The Ultimate Game Boy Talk
    description: 'This talk attempts to communicate "everything about the Game Boy" to the listener, including its internals and quirks, as well as the tricks that have been used by games and modern demos, reviving once more the spirit of times when programmers counted clock cycles and hardware limitations were seen as a challenge.'
    image: https://img.youtube.com/vi/HyzD8pNlpwI/maxresdefault.jpg
    link: /ultimate-gameboy
  - title: The Game Boy, a hardware autopsy
    description: 'Have you ever wondered how the Game Boy works? How the games that defined the history of the handheld world were made? This video series hopes to answer these questions and more concerning one of the most successful gaming platforms ever.'
    image: https://img.youtube.com/vi/RZUDEaLa5Nw/maxresdefault.jpg
    link: /gameboy-hardware-autopsy
---
# Game Boy Basics
Interested in learning more about the the original Game Boy or Game Boy Color? Excellent! This section will guide you through the basics, starting from basic assembly language all the way to reverse engineering your first game!


## Game Boy Exclusive Games (DMG & Color)
When it comes to finding a game to reverse engineer it can be helpful to look at games that are cross-platform to compare builds. But the most valuable reverse engineering projects tend to be the platform exclusives as these are games people can no longer play on modern consoles.

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy to be able to play" image="/public/NintendoGameBoyThumb.png" title="List of Original DMG Game Boy exclusives"  %}

{% include link-to-other-site.html url="https://en.wikipedia.org/wiki/Category:Game_Boy_Color-only_games" description="Wikipedia has compiled an excellent list of games that have never been re-released and thus need a Game Boy Color to be able to play" image="" title="List of Game Boy Color exclusives"  %}

---
# Game Boy Technology

## Game Boy Assembly Language (Z80-like)
The Game Boy has a variant of the Zilog Z80 processor, well technically it is a CPU between the `i8080` and the Z80, it is not binary compatible with either but there are similarities. You need a assembler that can handle the Game Boy speicific opcodes in order to write functional code for the Game Boy in assembly language.

{% include link-to-other-site.html url="https://www.chibiakumas.com/z80/Gameboy.php" description="ChibiAkumas has an excellent page with tutorials and information to get started with Game Boy assembly language" image="https://www.chibiakumas.com/z80/AsmTitleStrip.jpg" title="gbZ80 Assembly programming for the Gameboy and Gameboy Color"  %}

## Game Boy Boot ROM (Bootstrapping)
Every game produced for the Game Boy required a little piece of code known as the "bootloader" or boot code to initialise the state of the console. You don't have to know anything about this, but it can be facinating to find out what the Game Boy does as soon as you hit that power button.

{% include link-to-other-site.html url="https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/" description="RealBoy has an excellent page that gives you an in-depth look at how the Game Boy's bootloader works" title="A Look At The Game Boy Bootstrap: Let The Fun Begin!"  %}

# Reverse Engineering Game Boy Games
There have been a few very successful reverse engineering projects for the Game Boy, one of the most successful is the Pokemon dissassembly which managed to reverse engineer the entire game into a rebuildable ROM!

## Legend of Zelda Links Awakening
In August 2016 the website KZone started a full disassembly of the classic Game Boy game Link's Awakening, along the way they have written some excellent in-depth articles about how the game works. Check it out!

{% include link-to-other-site.html url="https://kemenaran.winosx.com/posts/category-disassembling-links-awakening/" description="Find out how Zelda Link's Awakening for Game Boy works at KZone!" image="https://kemenaran.winosx.com/images/zelda-links-awakening-sfx/LADX-move.gif" title="Disassembling Link’s Awakening"  %}


---
# All Posts
<div>

{% include console.html %}
</div>

