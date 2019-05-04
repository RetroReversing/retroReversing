---
permalink: /harware/consoles
layout: blog-cards
console: consolearchitecture
breadcrumbs:
  - name: Home
    url: /
  - name: Games
    url: /games
redirect_from:
  - /architecture
  - /console-architecture
  - /consolehardware
  - /games/console
  - /hardware-architecture
---
<h1>Introduction to Game Console Hardware Architecture </h1>
A game console itself is a series of chips placed on to a board, however unlike a PC motherboard it contains specialist chips that can normally not be upgraded.

The placement of the chips on the board is called the hardware architecture and it is an art as much as a science, it needs to be carefully creafted to get the most performance out of the system.

It also needs to implement anti-piracy measures, which is why many systems required a physical mod-chip installed in order to by pass copy-protection or region-lock.

## Why is this related to Game Reversing?
Knowing the hardware is vital for understaning why a game was written the way it was, game programming is not easy and developers wanted to get the most out of the hardware.
This resulted in them having to write strange code in order for the hardware to be pushed to the limits.
Its this attention to hawrdware detail which makes developing an emulator a very tricky task and results in some games being unplayable or missing certain features.

---
# Game Console Architecture 
The table below contains the information we have collected about the hardware architecture of each games console.

Platform Name | Game Engine List
---|---
Nintendo Gamecube | [Gamecube Architecture](https://www.retroreversing.com/gamecube-architecture)
Sega Saturn | [Sega Saturn Hardware Architecture](https://www.retroreversing.com/saturn-architecture)
Sony Playstation | [PlayStation Hardware Architecture](https://www.retroreversing.com/playStation-architecture) <br /> [What's inside a Playstation?](https://www.retroreversing.com/inside-playstation)
Sony Playstation 2 | [PlayStation 2 Hardware Architecture](https://www.retroreversing.com/playStation-2-architecture)

<div>
{% include console.html %}
</div>
