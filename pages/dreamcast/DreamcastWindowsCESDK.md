---
layout: post
tags: 
- sega
- dreamcast
- sdks
- microsoft
title: Sega Dreamcast Microsoft Windows CE SDK
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/consoles/Sega Dreamcast.png
permalink: /dreamcast-windows-ce
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: Sega Dreamcast Microsoft Windows CE SDK
    url: #
recommend:
- dreamcast
- sdks
editlink: /dreamcast/DreamcastWindowsCESDK.md
---

Originally called the Dragon SDK and planned to be the full Operating System (OS) of the dreamcast. However SEGA decided to go with their own limited BIOS with the Dreamcast instead of a fully functional OS. So to use WindowsCE on the Dreamcast game developers would have to bundle the entire Windows CE OS on the game disc [^2].

This means that in order to run the game the dreamcast would first boot into the file `0WINCEOS.BIN` on the GD-ROM disc and then it would load the game. This had a performance impact, reducing the resources the developers would have for the game, so lower memory, longer loading times and less performance for the actual game.

So why would developers use the Windows CE SDK instead of the more powerful Katana SDK?

The answer mainly comes down to the ease of porting PC games to the platform and the developers can use their prior windows knowledge instead of learning a completely new platform from scratch [^1].

This reduces development cost as much of the code from the PC version could be used with some modification and it would take less developer time to learn the Application programming Interfaces (API). So it was a trade-off that worked for less performance demanding games as they could be developed much quicker from a PC port [^1].

# Games that were built for WindowsCE
You can find out if your favourite game was built using the Windows CE SDK by inserting the disc and looking for the file `0WINCEOS.BIN` in the root of the GD-ROM.
Here is A list of Windows CE games that I have found so far:

Game | Additional Notes
---|---
4X4 EVO v1.001 (2000)(GOD)(NTSC)(US)| 
Armada v1.000 (1999)(Metro3D)(NTSC)(US)| 
Atari Anniversary Edition v1.001 (2001)(Infogrames)(NTSC)(US)[compilation]| 
Biohazard 2 Value Plus v1.005 (1999)(Capcom)(NTSC)(JP)(en)| 
Bust-A-Move 4 v1.001 (2000)(Acclaim)(NTSC)(US)| 
Bust-A-Move 4 v1.001 (2000)(Acclaim)(PAL)| 
Caesars Palace 2000 - Millennium Gold Edition v1.000 (2000)(Interplay)(PAL)| 
Caesars Palace 2000 - Millennium Gold Edition v1.011 (2000)(Interplay)(NTSC)(US)| 
Championship Surfer v1.002 (2000)(Mattel)(NTSC)(US)| 
Championship Surfer v1.002 (2001)(GAME Studios)(PAL)(M5)| 
Ducati World - Racing Challenge v1.000 (2001)(Acclaim)(NTSC)(US)| 
Ducati World v1.001 (2001)(Acclaim)(PAL)(M4)| 
For Symphony - With all one's Heart v0.800 (2003)(Takuyo)(NTSC)(JP)| 
GET!! Colonies v1.000 (2000)(Sega)(NTSC)(JP)| 
GK - Giant Killers v1.400 (2001)(AAA Game)(PAL)| 
Happy Lesson v1.002 (2001)(Datam Polystar)(NTSC)(JP)| 
Hello Kitty - Lovely Fruit Park v1.004 (1999)(Sega)(NTSC)(JP)| 
Hello Kitty - Magical Block v1.001 (2000)(Sega)(NTSC)(JP)| 
Hidden & Dangerous v1.001 (2000)(Take 2)(PAL)(M4)| 
Hidden & Dangerous v1.100 (2000)(Take 2)(NTSC)(US)| 
Historical Mystery Adventure TROIA 1186 B.C. v1.002 (1999)(Hitachi - TBS)(NTSC)(JP)| 
Hoyle Casino v1.001 (2000)(Sierra)(NTSC)(US)| 
Hundred Swords v1.005 (2000)(Sega)(NTSC)(JP)| 
Jimmy White's 2 - Cueball v1.100 (1999)(Virgin)(PAL)| 
Kaitou Apricot v1.006 (2003)(Takuyo)(NTSC)(JP)| 
KISS Psycho Circus - The Nightmare Child v1.000 (2000)(Take 2)(NTSC)(US)| 
KISS Psycho Circus - The Nightmare Child v1.100 (2000)(Take 2)(PAL)(M3)| 
Kita He - White Illumination v2.002 (1999)(Hudson)(NTSC)(JP)| 
Kitahei Gold v1.007 (1999)(Net Village)(NTSC)(JP)| 
Marionette Company 2 v1.001 (2000)(Microcabin)(NTSC)(JP)| 
Marionette Company v1.001 (1999)(Microcabin)(NTSC)(JP)| 
Maximum Pool v1.004 (2000)(Sierra)(NTSC)(US)| 
Midway's Greatest Arcade Hits Volume 1 v1.000 (2000)(Midway)(PAL)[compilation]| 
Midway's Greatest Arcade Hits Volume 1 v1.001 (2000)(Midway)(NTSC)(US)[compilation]| 
Midway's Greatest Arcade Hits Volume 2 v1.001 (2001)(Midway)(NTSC)(US)[compilation]| 
Miss Moonlight v1.006 (2001)(Naxat)(NTSC)(JP)| 
Morita no Saikyou Reversi v1.003 (1999)(Random House)(NTSC)(JP)| 
Morita no Saikyou Shougi v1.003 (1999)(Random House)(NTSC)(JP)| 
Net De Para v1.007 (2000)(Takyuo)(NTSC)(JP)| 
Next Tetris, The - On-line Edition v1.100 (2000)(Crave)(NTSC)(US)| 
Next Tetris, The v1.003 (2001)(Crave)(PAL)| 
Nightmare Creatures II v1.000 (2000)(Konami)(NTSC)(US)| 
Nightmare Creatures II v1.004 (2000)(Konami)(PAL)(M4)| 
Plus Plumb v1.073 (1999)(Takuyo)(NTSC)(JP)| 
Puzzle Bobble 4 v1.000 (2000)(Cyberfront - Taito)(NTSC)(JP)| 
Q-bert v1.003 (2000)(Majesco)(NTSC)(US)| 
Railroad Tycoon II - Gold Edition v1.004 (2000)(GOD)(NTSC)(US)| 
Railroad Tycoon II v1.002 (2000)(Take 2)(PAL)(M3)| 
Resident Evil 2 v1.000 (2000)(Virgin)(PAL)(en-fr)| 
Resident Evil 2 v1.001 (2000)(Capcom)(NTSC)(US)| 
Rune Jade v1.027 (2000)(Hudson)(NTSC)(JP)| 
Sega Rally 2 v1.000 (1999)(Sega)(PAL)| 
Sega Rally 2 v1.003 (1999)(Sega)(NTSC)(US)| 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en)[HDR-0010-0011 10MM1, 10M3]| 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en)[HDR-0010-0011 11MB1, 11MM1]| 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en)[HDR-0010-0011 HJ120D, HJ121A, HJ122C]| 
Sega Smashpack Volume 1 v1.002 (2000)(Sega)(NTSC)(US)[7S 51146][compilation]| 
Shinseiki Evangelion - Typing E Keikaku v1.001 (2001)(Gainax)(NTSC)(JP)| 
SnoCross - Championship Racing v1.000 (2000)(Crave - Ubi Soft)(PAL)(M3)| 
SnoCross - Championship Racing v1.000 (2000)(Crave)(NTSC)(US)| 
Soukou no Kihei - Space Griffon v1.001 (1999)(Panther)(NTSC)(JP)| 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US)[1S T-8105N]| 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US)[7S T-8105N]| 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US)[8S T-8105N]| 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(PAL)| 
Spirit of Speed 1937 v1.001 (2000)(LJN)(NTSC)(US)| 
Spirit of Speed 1937 v1.002 (2000)(Acclaim)(PAL)(M4)| 
StarLancer v1.002 (2000)(Crave)(NTSC)(US)| 
StarLancer v1.003 (2000)(Crave - Ubi Soft)(PAL)| 
Super Producers - Mezase Show Biz Kai v1.001 (1999)(Hudson)(NTSC)(JP)| 
Super Runabout - San Francisco Edition v1.005 (2000)(Interplay)(NTSC)(US)| 
Super Runabout v1.002 (2000)(Virgin)(PAL)| 
Super Runabout v1.003 (2000)(Climax Entertainment)(NTSC)(JP)| 
Taxi 2 - Le Jeu v1.000 (2000)(Ubi Soft)(PAL)(FR)| 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.001 (2000)(Red Storm - Swing!)(PAL)(DE)| 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.002 (2000)(Red Storm - Swing!)(PAL)| 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.002 (2000)(Red Storm - Swing!)(PAL)(FR)| 
Tom Clancy's Rainbow Six v1.004 (2000)(Majesco - Red Storm)(NTSC)(US)| 
Tomb Raider - Die Chronik v1.001 (2000)(EIDOS)(PAL)(DE)| 
Tomb Raider - La Revelation Finale v1.000 (2000)(EIDOS)(PAL)(FR)| 
Tomb Raider - The Last Revelation v1.000 (2000)(EIDOS)(PAL)| 
Tomb Raider - The Last Revelation v1.000 (2000)(EIDOS)(PAL)(IT)| 
Tomb Raider - The Last Revelation v1.001 (2000)(EIDOS)(NTSC)(US)| 
Tomb Raider Chronicles - La Leggenda di Lara Croft v1.000 (2000)(EIDOS)(PAL)(IT)| 
Tomb Raider Chronicles v1.000 (2000)(EIDOS)(NTSC)(US)| 
Tomb Raider Chronicles v1.002 (2000)(EIDOS)(PAL)| 
Tomb Raider IV - The Last Revelation v1.000 (2000)(Capcom)(NTSC)(JP)| 
Tomb Raider IV - The Last Revelation v1.000 (2000)(EIDOS)(PAL)(DE)| 
Tsuushin Taisen Logic Battle Daisessen v1.000 (2000)(Fortyfive)(NTSC)(JP)| 
UnderCover 2025 AD Kei v1.005 (1999)(Pulse Interactive)(NTSC)(JP)| 
Urban Chaos v1.000 (2000)(EIDOS)(NTSC)(US)(en-fr)| 
Urban Chaos v1.001 (2000)(EIDOS)(PAL)(en-fr)| 
Virtua Cop 2 v1.011 (2000)(Sega)(NTSC)(JP)(en)| 
Who Wants to Beat Up a Millionaire v1.004 (2000)(Simon & Schuster)(NTSC)(US)| 
Wild Metal v1.003 (2000)(Rockstar - Take 2)(NTSC)(US)(M6)| 
Wild Metal v1.003 (2000)(Take 2)(PAL)(M6)| 
World Neverland Plus - Olerud Oukoku Monogatari v1.008 (1999)(Riverhillsoft)(NTSC)(JP)| 
Worms Armageddon v1.001 (1999)(Hasbro - Team17)(PAL)(M8)| 
Worms Armageddon v1.001 (1999)(MicroProse)(NTSC)(US)| 
Worms World Party v1.001 (2001)(Titus)(NTSC)(US)(M9)| 
Worms World Party v1.002 (2001)(Virgin)(PAL)(M9)| 
Yoshia no Oka De Nekoronde... v1.001 (2001)(Mesa - Naxat)(NTSC)(JP)| 
Yuki Gatari v1.004 (2002)(Takuyo)(NTSC)(JP)

# WIndows CE Platform SDK
The Windows CE Platform SDK itself was available free from the Microsoft website and was used for programming for a range of embedded devices. However this only included the CE libraries and headers, in order to actually compile for the Dreamcast you would need to pay for the full Katana development platform [^3].

# Windows CE Dreamcast Specific Libraries
These are the libraries that were unique to the Dreamcast Windows CE SDK and were not standard as part of the normal Win CE SDK.

## Maple
Maple is the name of the library that allows the Windows CE SDK to connect to external devices such as Light-Guns, keyboards and more.

# References
[^1]: [The Dreamcast Junkyard: Windows CE is Best OS and Dreamcast is Best PC?](http://www.thedreamcastjunkyard.co.uk/2016/05/windows-ce-is-best-os-and-dreamcast-is.html)
[^2]: [Windows CE - Sega Retro](https://segaretro.org/Windows_CE)
[^3]: https://www.gamasutra.com/view/feature/131737/games_to_go_windows_ce.php?page=3
