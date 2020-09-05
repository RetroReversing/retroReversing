---
layout: post
tags: 
- howitworks
- pc
- nes
- snes
- n64
- megadrive
- mastersystem
title: How Retro Cartridges/ROMS work
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/NLEMsw1SjDY/sddefault.jpg
permalink: /how-retro-cartridges-roms-worked
breadcrumbs:
  - name: Home
    url: /
  - name: How it Works
    url: /howitworks
  - name: How Retro Cartridges/ROMS worked
    url: #
recommend: 
- howitworks
- nes
editlink: /articles/HowItWorks/RetroCartridges.md
videocarousel:
  - title: Part 1
    image: https://i.ytimg.com/vi/NLEMsw1SjDY/sddefault.jpg
    youtube: 'NLEMsw1SjDY'
  - title: Part 2 MVG
    image: https://i.ytimg.com/vi/gYQMdox5gzI/sddefault.jpg
    youtube: 'gYQMdox5gzI'
updatedAt: '2020-08-24'
---
Have you ever wondered what exactly is inside those retro game cartirdges (ROMs)? In this post we will find out the purpose of ROM cartridges and how they worked.

# Advantages of Cartridges
Cartridges are not the only format available to distrubute games for consoles, with other popular alternatives being CDs, Floppy Discs and Cassettes.

## Additional Hardware inside Cartridges
Cartridges have the benefit of being able to include custom chips to make the hardware more capable. One example is games that came with additional RAM right inside the cartridge [^1].

One of the most famous was the SuperFX chip included in games like Starfox or Stunt Race FX which allowed the Super Nintendo to do 3D polygon rendering [^1].

Super Mario RPG also contains a chip called the SA-1 which contains a CPU core similar to the core inside the SNES.

## Cartridges vs Floppy discs
Although most early games consoles only allowed cartridge based games, PCs had multiple options for loading games such as floppy discs and cassettes.

One advantage to cartridges on PC however was they were much harder to pirate than floppy based games [^1].

Another advantage is there loading time, there is very little loading time for cartridges as the memory is directly read from the cartridge rather than having to copy floppy content into RAM first.

## Cartridges vs CDs

Loading time was much lower on cartridges as the memory was immediately available from a ROM chip.

However the cost of cartridges was much higher and the amount of memory was much lower on cartridges, with an average CD holding 700mb, the equivalent cartridge would be far too expensive to mass produce.

---
# Nintendo Entertainment Cartridges
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZB7-VZg8q58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
NES carts actually contain a minimum 2 ROM chips inside them [^3]. 

This is due to them splitting the code and graphical data into two distinct ROM chips inside the cartridge.

This means that the graphics ROM chip can be directly connected to the GPU itself and the code ROM can be directly connected to the CPU.

The two ROMs in the cartridge are:
* CHR (Character) ROM - graphics tiles
* PRG (Program) ROM - code & other data

---
# Game Boy Cartirdges
<iframe width="560" height="315" src="https://www.youtube.com/embed/gYQMdox5gzI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
The Nintendo Game Boy was one of the first handheld systems that featured inter-changable cartridges [^4]. 

Only 32KB of the cartridge ROM is available to the CPU at any one time, early games such as Tetris were only 32KB so this wasn't a problem. 

But ROM cartridges could be up to 8MB by using a Memory Bank Controller which implemented a feature called **Bank Switching**. For example about 80% of games used MBC1 (Memory Bank Controller 1) which provided 125 ROM banks and 32KB of RAM.

Bank Switching was not unique to the Game Boy as it had also been used on other cartridge-based systems such as the Nintendo Entertainment System.

On the Game Boy it is implmented using two 16KB banks, Bank 0 is static and always points to the first bank in the Cartridge ROM and the second bank could be switched to point to any 16KB bank in the entire cartridge ROM.

---
# Memory Mappers (Bank Switching)
Mappers are configurations of cartridges to tell the emulator what hardware each cartridge has available. There are hundreds of these as each cartridge could include its own custom hardware in any configuration it wanted.

# Bank Switching on PC games?
Bank switching was rarely used for PC games as it was simply cheaper to put games on a floppy disc rather than a cartridge [^1]. Plus not all early PCs came with cartridge sockets.


# References
[^1]: [How Oldschool ROM Cartridge Games Worked YouTube](https://www.youtube.com/watch?v=NLEMsw1SjDY)
[^2]: [How old school cassette tape drives worked](https://www.youtube.com/watch?v=_9SM9lG47Ew)
[^3]: [Why does an NES cartridge have two ROM chips inside? YouTube](https://www.youtube.com/watch?v=ZB7-VZg8q58)
[^4]: [How Cartridges worked on the Nintendo Game Boy MVG YouTube](https://www.youtube.com/watch?v=gYQMdox5gzI)
