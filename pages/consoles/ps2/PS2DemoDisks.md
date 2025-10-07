---
layout: post
tags: 
- ps2
- symbols
- games
title: PS2 Demo Disks with Debug Symbols
thumbnail: /public/consoles/Sony PlayStation 2.png
image: https://www.retroreversing.com/public/images/ps2/PS2 Demos with Debug Symbols.jpg
twitterimage: https://www.retroreversing.com/public/images/ps2/PS2 Demos with Debug Symbols.jpg
permalink: /ps2-demos/
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PS2
    url: /ps2
  - name: PS2 Demo Discs with Debug Symbols
    url: #
recommend:
 - ps2
 - symbols
 - games
 - ps1
updatedAt: '2025-10-03'
editlink: /consoles/ps2/PS2DemoDisks.md
---
This page is dedicated to listing **Playstation 2 Demo Discs** that contain developer **debug symbols**, either embedded inside the executable or as separate .map or .sym files.

It was much more common for PS2 debug symbols to be leaked on Demo Discs than their retail counterparts during the early days of the PS2 lifespan, later in the lifespan demos with Debug symbols became rarer and rarer.

## Which games were likely to have debug symbols?
Most games found with debug symbols on this list are using the PS2 SDK about **2.1.0** and below **2.5.2** so its possible that after that version they started stripping the symbols by default on demo builds, or maybe the people who created the demo discs got stricter for looking for them. Although there are some exceptions to this rule, there are a few games using PS2 SDK 3.0.0 that accidently left a .MAP file of symbols somewhere on the disc (rather than in the executable), so it wasn't fool proof.

---
# PS2 Demo Discs from Official Playstation 2 Magazine in Europe
The **Official Playstation 2 Magazine** in the UK and europe often had a playable PS2 Demo free with every magazine, this was a great way for games to 'try before you buy'. Many of the same discs were pressed and then released throughout Europe with their own localised version of the magazine. However there were some variations based on local region restrictions and trademarks etc, so we include the SCED code along with any referenced demo disc on this page so its easier to track down the demo you are looking for.

You can find out more about these Demo Discs including scans of each of the covers and discs over at **crimson-ceremony.net**: [demo pals - OPS2M Demo UK](https://crimson-ceremony.net/demopals/ops2muk/index.php).


## List of demo games that contain debug symbols
The table below has a list of all the playable game demos that we have confirmed have debug symbols inside them, although we have only managed to search Demo Disc 10->31 so far. So if you have any of the demos then please help by contributing to the list!

Demo Disc | Game | PS2 SDK | Debug Info?
--- | --- | --- | ---
10 - August 2001, SCED_50145) | Le Mans 24 Hours | 2.1.4 | Full Debug Symbols! Plus a zip file that is actually multiple zips concatenated together
10 - August 2001, SCED_50145) | Gauntlet Dark Legacy | 2.1.0 | Full Debug Symbols! 
10 - August 2001, SCED_50145) | GT3 Quiz | 2.2.4 | Full Debug Symbols!
11 - September 2001 SCED_50146 | Lotus Challenge | 2.1.4 | **2,837** Debug Symbols
12 - October 2001 SCED_50147 | MX Rider | 2.1.0 | **10,586** Debug Symbols
12 - October 2001 SCED_50147 | Portal Runner | 2.1.4 | **5,101** Debug Symbols
12 - October 2001 SCED_50147 | Spy Hunter | 2.1.0 | **11,268** Debug Symbols
12 - October 2001 SCED_50147 | Soul Reaver 2 | 2.1.4 | **4,376** Debug Symbols
13 - November 2001 SCED_50148 | NBA Street | 2.1.0 | **9,125** Debug Symbols, also contains C++ header .h for animation files
13 - November 2001 SCED_50148 | Driven | 2.2.4 | **7,752** Debug Symbols
13 - November 2001 SCED_50148 | MX 2002 | 2.1.4 | **4,892** Debug Symbols
13 - November 2001 SCED_50148 | SplashDown MPEG Player | 2.3.0 | **947** Debug Symbols
14 - December 2001 SCED_50149 | AirBlade | 2.3.2 | **3,962** Debug Symbols
14 - December 2001 SCED_50149 | Dark Cloud | 2.1.1 | **3,952** Debug Symbols
14 - December 2001 SCED_50149 | Tarzan Freeride | 2.2.4 | **10,588** Debug Symbols
15 - Christmas 2001 SCED_50150J | GTC: Africa | 2.2.4 | Full Debug Symbols (2.5mb elf)
15 - Christmas 2001 SCED_50150J | Lotus Challenge | 2.1.4 | Full Debug Symbols (1.8mb elf)
15 - Christmas 2001 SCED_50150J | Jak and Daxter | 2.2.1 | **880** Debug Symbols (incomplete) (532kb elf)
15 - Christmas 2001 SCED_50150J | Extreme-G 3 | 2.1.4 | **2,874** Debug Symbols (7.4mb elf)
16 - January 2002 SCED_50151 | Shaun Palmer's Pro Snowboarding | 2.3.4 | Full Debug Symbols
16 - January 2002 SCED_50151 | Ecco the Dolphin: Defender of the Future | 2.2.0 | Full Debug Symbols (33mb elf)
16 - January 2002 SCED_50151 | FIFA Football 2002 | 2.2.0 | Full Debug Symbols (7.6mb elf)
16 - January 2002 SCED_50151 | Twisted Metal: Black | 2.1.3 | Full Debug Symbols (5.6mb elf) `LGDEV.IRX`
17 - February 2002 SCED_50152 | Crash Bandicoot: The Wrath of Cortex | 2.4.0 | Full Debug Symbols
17 - February 2002 SCED_50152 | Parappa the Rapper 2 | 2.4.1 | Full Debug Symbols
17 - February 2002 SCED_50152 | Robot Wars| 2.1.1 | Full Debug Symbols
18 - March 2002 SCED_50153 | Drakan The Ancients Gates | 2.3.2 | No symbols but has a txt file mentioning `Riot Engine` and a DEBUG folder and uses `SNPROFIL.IRX`
18 - March 2002 SCED_50153 | GODAI Elemental Force | 2.1.4 | Full Debug Symbols! (6.4mb elf) plus SCRIPTS folder
18 - March 2002 SCED_50153 | Herdy Gerdy | 2.4.2 | No symbols but does have lots of printf debugging with filenames, plus `HGSOUND.TRX` Herdy Gerdy Sound IOP module
18 - March 2002 SCED_50153 | Maximo | 2.2.0 | Full Debug Symbols (5.9MB) `MJOLNIR.IRX`
18 - March 2002 SCED_50153 | Stuntman Xav Stream Video | ? | Full Debug Symbols (1mb) plus IOP Module for playing XAV files `XAVSTRM.IRX` (not a game)
19 - April 2002 SCED_50154 | Mike Tyson Heavyweight Boxing | 2.3.4 | Full Debug Symbols
19 - April 2002 SCED_50154 | Vampire Night | 2.3.0 | Full Debug Symbols
20 - May 2002 SCED_50743 | Rally Championship | 2.2.4 | **3,019** Debug Symbols
20 - May 2002 SCED_50743 | Taz Wanted | 2.4.3 | **4,927** Debug symbols
21 - June 2002 SCED_50742 | Medal of Honor: Frontline | 2.4.2 | **6,199** Debug Symbols, also contains .MAP file
21 - June 2002 SCED_50742 | Frequency | 2.3.2 | **13,890** Debug Symbols, uses python, uses EZMidi
21 - June 2002 SCED_50742 | Peter Pan: Return to Never Land | 2.3.0 | **4,382** Debug Symbols
21 - June 2002 SCED_50742 | Super Trucks | 2.4.3 | **2,990** Debug Symbols
22 - July 2002 SCED_50744 | F1 2002 | 2.4.0 | Debug Symbols in the .MAP file
22 - July 2002 SCED_50744 | 2002 FIFA World Cup | 2.3.4 | **9,823** Debug Symbols
22 - July 2002 SCED_50744 | MTV Music Generator | 2.1.0 | **2,098** Debug Symbols
23 - August 2002 SCED_50745 | Men in Black II: Alien Escape | 2.4.3 | **20,542** Debug Symbols, References to `Metrowerks SDK`
23 - August 2002 SCED_50745 | Project Zero | 2.2.4 | **4,328** Debug Symbols
24 - September 2002 SCED_50746 | Need for Speed: Hot Pursuit 2 | 2.4.3 | **8,341** Debug Symbols,  Plus .MAP file that contains filenames and library names, odd fact is that it contains 2 elfs, one with debug symbols and one without, why include the debug symbols version, was it a mistake?
24 - September 2002 SCED_50746 | Jak and Daxter: The Precursor Legacy | 2.2.1 | **880** debug symbols plus interesting looking .CGO and .DGO files... 
25 - October 2002 SCED_50747 | X-Men: Next Dimension | 2.4.3 | **3,418** Debug Symbols
26 - November 2002 SCED_50748 | Crash Bandicoot: The Wrath of Cortex | 2.4.0 | **3,817** Debug Symbols
26 - November 2002 SCED_50748 | Summoner 2 | 2.4.0 | **5,647** Debug Symbols
27 - December 2002 SCED_50749 | Colin McRae Rally 3 | 2.5.2 | **4,969** Debug Symbols
27 - December 2002 SCED_50749 | Haven: Call of the King | 2.5.0 | Contains a RUNABOUT.EXE with debug symbols but it unpacks the actual elf from some data file
27 - December 2002 SCED_50749 | Alpine Racer 3 | 2.4.2 | **3,916** Debug Symbols
28 - Christmas 2002 SCED_50750 | V-Rally 3 | 2.5.2 | **6,603** Debug Symbols
28 - Christmas 2002 SCED_50750 | MX Superfly | 2.5.0 | **6,115** Debug Symbols
28 - Christmas 2002 SCED_50750 | Treasure Planet | 2.5.0 | **4,519** Debug Symbols
29 - January 2003 SCED_51384 | FIFA 2003 | 2.3.4 | **12,074** Debug Symbols
30 - February 2003 SCED_51457 | NBA Live 2003 | 2.4.3 | **15,756** Debug Symbols
30 - February 2003 SCED_51457 | Space Channel 5 V2 | 2.3.0 | **10,212** Debug Symbols
30 - February 2003 SCED_51457 | Tom Clancy's Ghost Recon | 2.4.2 | **19,496** Debug Symbols
31 - March 2003 SCED_51529 | Grand Prix Challenge | 2.5.4 | **14,342** Debug Symbols
31 - March 2003 SCED_51529 | The Mark of Kri | 2.5.4 | **7,387** Debug Symbols plus .MAP file!
31 - March 2003 SCED_51529 | Wakeboarding Unleashed | 2.4.3 | Debug Symbols split over 3 elfs
55 - January 2005 SCED_52170 | Rumble Roses | PS2SDK 3.0.1 | Contains Map file
56 - February 2005 SCED_53122 | Athens 2004 | PS2SDK 3.0.0 | Contains .MAP file
57 - March 2005 SCED_53160 | Full Spectrum Warrior | PS2SDK 3.0.0 | Contains **19,690** symbols in .sndata segment

---
## List of games without debug symbols but with interesting data
The following is a list of games that while they don't contain debug symbols, during analysis we did find they countained some interesting information that may be worth looking into:

Demo Disc | Game | PS2 SDK | Debug Info?
---|---|---|---
10 - August 2001, SCED_50145) | Star Wars Super Bomad Racing | 1.6.0 | No debug symbols but early version of SDK
53 - January 2005 SCED_52168 | Driver 3 | PS2SDK 2.7.0 | Contains animation Data in DRIVER3.IMG
53 - January 2005 SCED_52168 | Sega Superstars | PS2SDK 3.0.0 | Uses boost libraries
54 - January 2005 SCED_52169 | EyeToy: Play 2 | 3.0.0 | Has .lua script files but no symbols in main elf 
55 - January 2005 SCED_52170 | Mashed | PS2SDK 3.0.1 | contains some strings related to C source file location (Physics/Rwp37Active/src/core/context/src/RwpObj.c)
55 - January 2005 SCED_52170 | Mercenaries | PS2SDK 2.7.1 | Mentions Indiana Jones as unlockable character in config
55 - January 2005 SCED_52170 | Pro Evolution Soccer 4 | PS2SDK 3.0.1 | mentions `ADXT`
55 - January 2005 SCED_52170 | Splinter Cell Pandora Tommorrow | PS2 SDK 3.0.0 | contains a few symbol-like strings
56 - February 2005 SCED_53122 | Timesplitters Future Perfect | PS2SDK 3.0.2 | Contains some symbols as segment names and a few references to source files
59 - May 2005 SCED_53162 | Enthusia | 3.0.0 | Symbols in segment names
65 - November 2005 SCED_53186 | Need for Speed: Most Wanted | 2.8.0 | Some function and class names in uncommon format
65 - November 2005 SCED_53186 | NHL 06 | 2.8.0 | `FontFusion 2.4.1-nhl` `APT 0.18.06-nhl` `RealCore 6.25.00-nhl` `RealGraph 6.11.01-nhl` `Reveal 1.4.0` `Mudlark 1.1.6`
65 - November 2005 SCED_53186 | Wallace & Gromit: The Curse of the Were-Rabbit | ? | Uses same engine as Project Zoo `fgdk3` (Frontier Game Development Kit 3?)
72 - May 2006 SCED_54044 | Driver 4 | 3.0.0 | Contains .MAP files in DRIVER4.IMG [^1]
72 - May 2006 SCED_54044 | TOCA Race Driver 3 | 3.0.2 | a few references to cpp files and a small .sndata section

Also note the following demo discs have no debug information, as far as we can tell, but some may be encrypted/compressed etc so its still possible there is something of value on them: 
* 58 - April 2005 SCED_53161


---
## Full list of playable demos (regardless of debug)
You may have reached this page out of genuine curiosity to try out some Playstation 2 demo games, and are not interested in the debug information, for this we have a table below that lists all the known playable games and which demo disc they are on engine:

| Demo Name |  SCED Code |  Playable Game Names |   
| --- | --- | --- |
| OPS2M Demo 01 |  SCED-50065 | International Superstar Soccer, Wild Wild Racing | 
| OPS2M Demo 02 |  SCED-50066 | Dynasty Warriors 2, NHL 2001 | 
| OPS2M Demo 03 |  SCED-50067 | Dynasty Warriors 2, International Superstar Soccer, Moto GP, NHL 2001, Wild Wild Racing |  
| OPS2M Demo 05 |  SCED-50140 | Gran Turismo 3 A-spec |  
| OPS2M Demo 06 |  SCED-50141 | Dead Or Alive 2, Zone of the Enders |  
| OPS2M Demo 07 |  SCED-50142 | Sky Odyssey, Star Wars Starfighter, Warriors of Might and Magic |   
| OPS2M Demo 08 |  SCED-50143 | Moto GP, MTV Music Generator 2 |  
| OPS2M Demo 09 |  SCED-50144 | Formula 1 2001, Rugby, Wacky Races | 
| OPS2M Demo 10 |  SCED-50145 | Gauntlet: Dark Legacy, Le Mans 24 Hours, Star Wars: Super Bombad Racing | 
| OPS2M Demo 11 |  SCED-50146 | Lotus Challenge, World Championship Snooker 2002 | 
| OPS2M Demo 12 |  SCED-50147 | MX Rider, Portal Runner, Soul Reaver 2, Spy Hunter, This Is Football 2 |  
| OPS2M Demo 12 |  SCED-50543 | Portal Runner, Soul Reaver 2, Spy Hunter, This Is Football 2002 |   
| OPS2M Demo 13 |  SCED-50148 | Driven, Klonoa 2: Lunatea's Veil, MX 2002 Featuring Ricky Carmichael, NBA Street, Rayman M, Silent Scope 2, Time Crisis 2 |   
| OPS2M Demo 14 |  SCED-50149 | Airblade, Baldur's Gate 2: Dark Alliance, Dark Cloud, Silent Hill 2, Tarzan Freeride, Wipeout Fusion, World Rally Championship, WWF Smackdown! Just Bring It |  
| OPS2M Demo 15 |  SCED-50150 | Burnout, Dropship: United Peace Force, ESPN X Games Skateboarding, Extreme G-3, Formula One 2001, G-Surfers, GTC Africa, Jak & Daxter, Lotus Challenge, Project Eden, Thunderhawk: Operation Phoenix, Top Gun: Combat Zones |
| OPS2M Demo 16 |  SCED-50151 | Ace Combat 4, Dropship: United Peace Force, Ecco The Dolphin: Defender Of The Future, FIFA 2002, Headhunter, MotoGP 2, Pro Evolution Soccer, Shaun Palmer's Pro Snowboarder, Twisted Metal: Black, Wipeout Fusion | 
| OPS2M Demo 17 |  SCED-50152 | Crash Bandicoot: The Wrath of Cortex, Metal Gear Solid 2: Sons of Liberty, Parappa the Rapper 2, Rez, Robot Wars, Soul Reaver 2, Wipeout Fusion | 
| OPS2M Demo 18 |  SCED-50153 | Drakan: The Ancients' Gates, Dynasty Warriors 3, Godai: Elemental Force, Half-Life, Herdy Gerdy, Maximo | 
| OPS2M Demo 19 |  SCED-50154 | Dead or Alive 2, Formula One 2001, Ico, Mike Tyson Heavyweight Boxing, Vampire Night |  
| OPS2M Demo 20 | SCED-50743 | Final Fantasy X, Moto GP, Rally Championship, Space Race, Taz Wanted | 
| OPS2M Demo 21 | SCED-50742 | Frequency, Medal of Honor: Frontline, Peter Pan: Return to Never Land, Redcard, Smash Court Tennis Pro Tournament, Star Wars: Jedi Starfighter, Super Trucks, This is Football 2002, Tiger Woods PGA Tour 2002 | 
| OPS2M Demo 22 | SCED-50744 | 2002 FIFA World Cup, Britney's Dance Beat, Formula One 2002, Gitaroo Man, MTV Music Generator, Time Crisis 2 | 
| OPS2M Demo 23 | SCED-50745 | Army Men: Real Time Strategy, Fireblade, Men In Black II: Alien Escape, Project Zero, Stuntman | 
| UPS2M Demo Italia 08/02 | SCED-51111 | 2002 FIFA World Cup,  Army Men: Real Time Strategy,  Britney's Dance Beat,  Fireblade,  Formula One 2002,  Men In Black II: Alien Escape,  Project Zero,  Stuntman
| OPS2M Demo 24 | SCED-50746 | Aggressive Inline Skating, Conflict: Desert Storm, Downforce, Jak & Daxter: The Precursor Legacy, Need for Speed Hot Pursuit 2, TOCA Race Driver, World Rally Championship |   
| OPS2M Demo 25 | SCED-50747 | Disney's Stitch: Experiment 626, Ninja Assault, This is Football 2003, Timesplitters 2, WWE Smackdown! Just Bring It!, X-Men Next Dimension |  
| OPS2M Demo 26 | SCED-50748 | Burnout 2: Point of Impact, Crash Bandicoot: The Wrath of Cortex, Ferrari F355 Challenge, Hitman 2: Silent Assassin, Micro Machines, Ratchet & Clank, Red Faction 2, Summoner 2, Superman: Shadow of Apokolips, Tekken 4 |   
| OPS2M Demo 27 | SCED-50749 | Alpine Racer 3, Colin McRae Rally 3, Heaven: Call of the King, Reign of Fire, Twin Caliber, Ty the Tasmanian Tiger, WRC II Extreme |  
| OPS2M Demo 28 | SCED-50750 | Battle Engine Aquila, MX Superfly, The Getaway, Treasure Planet, V-Rally 3 | 
| OPS2M Demo 29 | SCED-51384 | Ape Escape 2, Eggo Mania, FIFA 2003, Formula One 2002, Pro Evolution Soccer 2, Rocky |
| OPS2M Demo 29 | SCED-51440 | Ape Escape 2, Eggo Mania, FIFA 2003, Formula One 2002, Pro Evolution Soccer 2, Rocky |
| OPS2M Demo 30 | SCED-51457 | ATV2: Quad Power Racing, Crashed, Mortal Kombat: Deadly Alliance, NBA Live 2003, Primal, Sly Raccoon, Space Channel 5 v2, Tiger Woods PGA Tour 2003, Tom Clancy's Ghost Recon, WWE Smackdown! Shut Your Mouth |
| OPS2M Demo 30 | SCED-51489 | ATV Quad Power Racing 2, Crashed, Mortal Combat Deadly Alliance, NBA Live 2003, Primal, Sly Raccoon, Space Channel 5: Part 2, Tiger Wood's PGA Tour 2003, Tom Clancy's Ghost Recon, WWE Smackdown: Shut Your Mouth! |
| OPS2M Demo 31 | SCED-51529 | Dr Muto, Grand Prix Challenge, Rayman 3: Hoodlum Havoc, Splinter Cell, The Mark of Kri, Timesplitters 2, Wakeboarding Unleashed, War of the Monsters, Zapper |
| OPS2M Demo 31 | SCED-51556 | Dr. Muto, Grand Prix Challenge, Rayman 3 Hoodlum Havoc, The Mark Of Kri, Timesplitters 2, Tom Clancy's Splinter Cell, War Of The Monsters, Wakeboarding Unleashed Featuring Shaun Murray, Zapper |
| OPS2M Demo 32 | SCED-51530 | Ape Escape 2, Dakar 2, Mobile Suit Gundam: Federation Vs Zeon, Silent Hill 2, Spy Hunter, Techu: Wrath Of Heaven, Scorpion King, Splinter Cell, Vexx, Zone Of The Enders |
| OPS2M Demo 32 (French) | SCED-51558 | Ape Escape 2, Dakar 2, Mobile Suit Gundam Fed Vs Zeon, Silent Hill 2, Splinter Cell, Spy Hunter, Tenchu, The Scorpion King, Vexx, Zone Of The Enders The 2nd Runner |
| UPS2M Demo Italia 04/03 | SCED-51652 | Ape Escape 2,  Dakar 2,  Mobile Suit Gundam: Federation Vs Zion,  Silent Hill 2,  Splinter Cell,  Spy Hunter,  Tenchu: Wrath Of Heaven,  The Scorpion King,  Vexx,  Zone Of The Enders
| OPS2M Demo 33 | SCED-51531 | Conflict: Desert Storm, Dynasty Warriors 3, Evolution Skateboarding, Herdy Gerdy, Moto GP3, Pride FC, Project Eden, Shinobi, WRC II Extreme |
| OPS2M Demo 33 | SCED-51559 | Conflict Desert Storm, Dynasty Warriors 3, Evolution Skateboarding, Herdy Gerdy, Moto GP3, Pride FC, Primal, Project Eden, Shinobi, WRC II Extreme (Challenge Demo) |
| OPS2M Demo 34 | SCED-51532 | Airblade, Baldur's Gate: Dark Alliance, Burnout 2, Def Jam Vendetta, Rygar, Silent Hill 3, Virtua Fighter 4, Wipeout Fusion  |
| OPS2M Demo 34 | SCED-51560 | Airblade, Baldur's Gate, Burnout 2 Point Of Impact, Def Jam Vendetta, Gunfighter 2, Rygar, Silent Hill 3, Virtua Figther 4 Evo, Wipeout Fusion  |
| OPS2M Demo 35 | SCED-51533 | Alter Echo, Gunfighter II, Hitman 2: Silent Assassin, Ico, Jak & Daxter, Ratchet & Clank, Socom: US Navy Seals, Twisted Metal: Black, WWE Smackdown! Shut Your Mouth    |
| OPS2M Demo 35 | SCED-51561 | Gunfighter 2, Hitman 2, Ico, Jak & Daxter, Ratchet & Clank, SOCOM: US Navy Seals, Twisted Metal Black, WWE Smackdown: Shut Your Mouth!    |
| OPS2M Demo 36 | SCED-51534 | Final Fantasy X, Futurama, Headhunter, Mace Griffin Bounty Hunter, Starsky & Hutch, Tekken 4, This is Football 2003, Tiger Woods PGA Tour 2003, Zone of the Enders |
| OPS2M Demo 37 | SCED-51537 | Alter Echo, Ape Escape 2, Die Hard Vendetta, Dynasty Warriors 3, Metal Gear Solid 2, Ratchet & Clank, Return to Castle Wolfenstein, Splashdown 2: Rides Gone Wild, Splinter Cell, The Great Escape, WRC II Extreme |
| OPS2M Demo 37 | SCED-51563 | Alter Echo, Ape Escape 2, Die Hard Vendetta, Dynasty Warriors 3, Metal Gear Solid 2, Ratchet & Clank, Return To Castle Wolfenstein, Splashdown 2 Rides, Splinter Cell, The Great Escape, WRC II Extreme |
| OPS2M Demo 38 | SCED-51538 | Amplitude, Chaos Legion, Colin McRae Rally 4, Finding Nemo, Formula One 2003, Freedom Fighters, Metal Gear Solid 3 Snake Eater, Perfect Ace, Rugby 2004, Soul Calibur 2, Sphinx And The Shadow Of Set, Summer Heat Beach Volleyball, True Crime: Streets Of LA, Warhammer 40K: Firewarrior, Zone Of The Enders The 2nd Runner |
| OPS2M Demo 39 | SCED-51540 | Beyond Good & Evil, Conflict: Desert Storm II, Extreme Skate Adventure, Freestyle Metal X, Ironstorm: World War Zero, Jak II: Renegade, Judge Dredd: Dredd Vs Death, My Street, Prince of Persia: The Sands of Time, Rolling, The Italian Job: LA Heist (Curcuit), The Italian Job: LA Heist (Stunt)  |
| OPS2M Demo 40 | SCED-51535 | Destruction Derby Arenas, Dog's Life, Freaky Flyers, Ghosthunter, Gladius, James Bond 007: Everything or Nothing, Need for Speed Underground, Ratchet & Clank 2: Locked and Loaded, Tiger Woods PGA Tour 2004, Time Crisis 3, Wallace & Gromit in Project Zoo |
UPS2M Demo Italia 06/03 | | Airblade,  Baldur's Gate: Dark Alliance,  Burnout 2,  Def Jam Vendetta,  Rygar,  Silent Hill 3,  Virtua Fighter 4,  Wipeout Fusion
UPS2M Demo Italia 07/03 | | Gunfighter,  Hitman 2,  Ico,  Jak & Daxter,  Ratchet & Clank,  Socom U.S. Navy Seals,  Twisted Metal Black,  WWE Smackdown
UPS2M Demo Italia 08/03 | | Final Fantasy X,  Futurama,  Headhunter,  Mace Griffin Bounty Hunter,  Starsky & Hutch,  Tekken 4,  This Is Fotball 2003,  Tiger Woods PGA Tour 2003,  Zone Of The Enders
UPS2M Demo Italia 09/03 | | Alter Echo,  Ape Escape 2,  Die Hard Vendetta,  Dynasty Warriors 3,  Metal Gear Solid 2 Sons Of Liberty,  Ratchet & Clank,  Return To Castle Wolfenstein: Operation Resurrection,  Splashdown 2: Rides Gone Wild,  The Great Escape,  Tom Clancy's Splinter Cell,  WRC II Extreme
UPS2M Italia 12/03 | | 007 Everything Or Nothing,  Destruction Derby Arenas,  Dog's Life,  Freaky Flyers,  Ghosthunter,  Gladius,  Need For Speed Underground,  Ratchet & Clank 2,  Tiger Woods PGA Tour 2004,  Time Crisis 3,  Wallace & Gromit
OPS2M Demo 41 | | Buffy the Vampire Slayer: Chaos Bleeds,  Dancing Stage Fever,  Jimmy Neutron Jet Fusion,  Kao the Kangaroo 2,  NHL Hitz Pro,  Pro Evolution Soccer 3,  Scooby-Doo! Mystery Mayhem,  Super Farm,  The Hulk,  The Simpsons Hit & Run,  Tom Clancy's Ghost Recon: Jungle Storm,  Buffy the Vampire Slayer: Chaos Bleeds,  Dancing Stage Fever,  Jimmy Neutron Jet Fusion,  Kao the Kangaroo 2,  NHL Hitz Pro,  Pro Evolution Soccer 3,  Scooby-Doo! Mystery Mayhem,  Super Farm,  The Hulk,  The Simpsons Hit & Run,  Tom Clancy's Ghost Recon: Jungle Storm
UPS2M Italia 01/04 Demo | | Buffy The Vampire Slayer: Chaos Bleeds,  Dancing Stage Fever,  Ghost Recon: Jungle Storm,  Kao The Kangaroo 2,  NHL Hitz Pro,  Pro evolution Soccer 3,  Scooby-Doo! Mystery Mayhem,  Super Farm,  The Simpson's Hit And Run
OPS2M Demo 42 | | FIFA 2004,  Grooverider,  Pop Idol,  R-Type Final,  Socom: US Navy Seals,  Soul Calibur II,  Starsky & Hutch,  Tak and the Power of Juju,  WRC 3,  XIII,  FIFA 2004,  Grooverider,  R-Type Final,  Socom: US Navy Seals,  Soul Calibur II,  Starsky & Hutch,  Tak and the Power of Juju,  WRC 3,  XIII
UPS2M Demo Italia 02/04 | | FIFA Football 2004,  Grooverider,  R-Type Final,  Socom: U.S. Navy Seals,  Soul Calibur II,  Starsky & Hutch,  Tak And The Power Of Juju,  World Rally Championship 3,  XIII
OPS2M Demo 43 | | Arc: Twilight of the Spirits,  Castlevania,  Ford Racing 2,  I-Ninja,  Maximo Vs Army of Zin,  Metal Arms: Glitch in the System,  Rogue Ops,  SSX 3,  Worms 3D,  Arc Twilight Of The Spirits,  Castlevania Lament Of Innocence,  Ford Racing 2,  I-Ninja,  Maximo Vs The Army Of Zin,  Metal Arms,  Rogue Ops,  SSX 3,  Worms 3D
OPS2M Demo 44 | | 007: Everything Or Nothing,  Crash Nitro Cart,  Downhill Domination,  Kill Switch,  Nightshade,  Rainbow Six 3,  Urban Freestyle Soccer,  Whiplash
OPS2M Demo 45 | | Broken Sword: The Sleeping Dragon,  Final Fantasy X-2,  Firefighter FD:18,  Forbidden Siren,  Kya: Dark Lineage,  R: Racing Evolution,  Socom 2: US Navy Seals,  This is Football 2004,  Broken Sword: The Sleeping Dragon,  Final Fantasy X-2,  Firefighter FD:18,  Forbidden Siren,  Kya: Dark Lineage,  R: Racing Evolution,  Socom 2: US Navy Seals,  This is Football 2004
UPS2M Italia 05/04 | | Broken Sword 3 The Sleeping Dragon,  Final Fantasy X-2,  Firefighter F.D. 18,  Forbidden Siren,  Kya: Dark Lineage,  R: Racing,  Socom II,  This Is Fotball 2004
OPS2M Demo 46 | | Arc: Twilight Of The Spirits,  CY Girls,  Fight Night 2004,  MX Unleashed,  NFL Street,  Richard Burns Rally,  Rise To Honour,  Sonic Heroes,  Teenage Mutant Ninja Turtles,  Transformers
UPS2M Italia 06/04 | | Arc Twilight Of The Spirits,  Cy Girls,  Fight Night,  Mashed,  MX Unleashed,  NFL Street,  Richard Burns Rally,  Rise To Honor,  Sonic Heroes,  Teenage Mutant Ninja Turtles,  Transformers
OPS2M Demo 47 | | Alias,  Champions Of Norrath,  Deadly Skies III,  Goblin Commander: Unleash The Horde,  Megaman X7,  Pool Paradise,  World War Zero: Ironstorm
OPS2M Demo 47 | | Alias,  Champions Of Norrath,  Deadly Skies III,  Goblin Commander: Unleash The Horde,  Megaman X7,  Pool Paradise,  World War Zero
OPS2M Demo 48 | | Athens 2004,  Mashed,  MTV Music Generator 3,  Serious Sam,  Syphon Filter: The Omega Strain,  This Is Football 2004,  Athens 2004,  Mashed,  MTV Music Generator 3,  Serious Sam,  Syphon Filter: The Omage Strain,  This Is Football 2004
OPS2M Demo 49 | | Formula One 2004,  Hitman Contracts,  Mashed,  Smash Court Tennis 2,  Splinter Cell: Pandora Tomorrow
OPS2M Demo 49 | | Formula One 04,  Hitman Contracts,  Mashed,  Smash Court Tennis Pro Tournament 2,  Splinter Cell Pandora Tomorrow
OPS2M Demo 50 | | Burnout 3,  Crash Unlimited,  Psi Ops,  Ribbit King,  Second Sight,  Silent Hill 4 The Room,  Star Wars Battlefront,  Van Helsing
OPS2M Demo 50 | | Burnout 3,  Crash Unlimited,  Psi Ops The Mindgate Conspiracy,  Ribbit King,  Second Sight,  Silent Hill 4 The Room,  Star Wars Battlefront,  Van Helsing
UPS2M Italia 09/04 | | Burnout 3,  Crash Unlimited,  Formula One 04,  Psi Ops,  Ribbit King,  Second Sight,  Silent Hill 4 The Room,  Smash Court Tennis Pro Tournament 2,  Splinter Cell Pandora Tomorrow,  Star Wars Battlefront,  Van Helsing
OPS2M Demo 51 | | Colin McRae Rally 2005,  Crisis Zone,  DJ: Decks And Effects,  Ratched & Clank 3,  Spyro: A Hero's Tail
OPS2M Demo 51/eur | | Colin McRae Rally 2005,  Crisis Zone,  DJ: Decks & FX,  Ratchet & Clank: Up Your Arsenal,  Spyro: A Hero's Tail
OPS2M Demo 52 | | Killzone,  Obscure,  Pro Evolution Soccer 4,  Rocky Legends,  Sly 2: Band Of Thieves
OPS2M Demo 52 | | Jak II Renegade,  Killzone,  Obscure,  Pro Evolution Soccer 4,  Ratchet & Clank 2,  Rocky Legends,  Sly 2 Band Of Thieves,  TOCA Race Driver 2,  WRC 3
UPS2M Italia 11/04 | | Jak II Renegade,  Killzone,  Need For Speed Underground 2,  Obscure,  Pro Evolution Soccer 4,  Ratchet & Clank 2,  Rocky Legends,  Sly 2 Band Of Thieves,  TOCA Race Driver 2,  WRC 3
OPS2M Demo 53 | | Driv3er,  Jackie Chan Adventures,  Jak 3,  Need For Speed Underground 2,  Sega Superstars,  The Incredibles,  This Is Football 2005,  Tiger Woods PGA Tour 2005,  TOCA Race Driver 2,  World Rally Championship 4
OPS2M Demo 53 | | Adiboo And The Energy Thieves,  Jackie Chan Adventures,  Jak 3,  Need For Speed Underground 2,  Sega Superstars,  The Incredibles,  This Is Football 2005,  Tiger Woods PGA Tour 2005,  WRC 4
OPS2M Demo 54 | | Dancing Stage Fusion,  EyeToy Play 2,  Forgotten Realms: Demon Stone,  Fren-zE,  Prince Of Persia 2,  The Getaway: Black Monday
OPS2 Demo 54 spa | | Athens 2004,  Dancing Stage Fusion,  Forbidden Realms: Demon Stone,  EyeToy Play 2,  Fren-zE,  Moto GP 3,  Prince Of Persia 2,  Soul Calibur 2,  The Getaway Black Monday
UPS2 Demo 2005/01 ita | | Athens 2004,  Dancing Stage Fusion,  Demon Stone,  EyeToy Play 2,  Fren-zE,  Moto GP 3,  Prince Of Persia 2,  Soul Calibur 2,  The Getaway Black Monday
OPS2M Demo 55 | | Burnout 3,  Fren-zE,  Killzone,  Mashed,  Mercenaries,  Pro Evolution Soccer 4,  Rumble Roses,  Splinter Cell: Pandora Tomorrow
OPS2 Demo 55 euro | | Burnout 3,  Fren-zE,  Megaman X8,  Mercenaries,  Metal Slug 3,  Nanobreaker,  Pro Evolution Soccer 4,  Rumble Roses,  Splinter Cell: Pandora Tomorrow,  Tekken 4,  Van Helsing
OPS2M Germany 02-2005 | | Burnout 3,  Fren-zE,  Megaman X8,  Metal Slug 3,  Nanobreaker,  Pro Evolution Soccer 4,  Rumble Roses,  Second Sight,  Serious Sam,  Sonic Heroes,  Splinter Cell: Pandora Tomorrow,  Tekken 4,  Van Helsing
OPS2M Demo 56 uk | | Ace Combat 5: Squadron Leader,  Athens 2004,  Metal Slug 3,  Moto GP 3,  Nanobreaker,  Prince Of Persia: Sands Of Time,  Timesplitters: Future Perfect,  Transformers
OPS2M Demo 56 | | Ace Combat Squadron Leader,  Burnout 3,  Fren-Ze,  Killzone,  Mercenaries,  Metal Slug 3,  Nanobreaker,  Pro Evolution Soccer 4,  Rumble Roses,  Splinter Cell Pandora Tomorrow,  TimeSplitters Future Perfect,  Ace Combat 5: Squadron Leader,  Death By Degrees,  King Of Fighters: Maximum Impact,  Legend Of Kay,  Moto GP 3,  Prince Of Persia: Sands Of Time,  Smash Court Tennis Pro Tournament 2,  Teenage Mutant Ninja Turtles 2,  Transformers,  Viewtiful Joe 2
OPS2M Demo 57 | | Ace Combat 5 Squadron Leader,  Death By Degrees,  Full Spectrum Warrior,  King Of Fighters: Maximum Impact,  Legend Of Kay,  Megaman X8,  Metal Gear Solid 3 Snake Eater,  Teenage Mutant Ninja Turtles 2,  Area 51,  Cold Winter,  Constantine,  Full Spectrum Warrior,  Megaman X8,  Metal Gear Solid 3 Snake Eater,  Ratchet & Clank 3,  WRC 4
OPS2M Demo 58 | | Area 51,  Cold Winter,  Constantine,  EyeToy: AntiGrav,  Jak 3,  Juiced,  Metal Gear Solid 3: Snake Eater,  Ratchet & Clank 3,  The Getaway: Black Monday,  WRC 4
OPS2M Demo 58 euro | | Enthusia,  Fight Night Round 2,  Full Spectrum Warrior,  Jak 3,  Juiced,  Killzone,  Rugby 2005,  The Spongebob Squarepants Movie
OPS2M Demo 58 - spa/por | | Enthusia,  Fight Night Round 2,  Full Spectrum Warrior,  Jak 3,  Juiced,  Killzone,  Rugby 2005,  The Spongebob Squarepants Movie,  Timesplitters Future Perfect
OPS2M Demo 59 | | Enthusia,  Fight Night Round 2,  Full Spectrum Warrior,  Juiced,  Killzone,  Lego Star Wars,  Rugby 2005,  The Spongebob Squarepants Movie
OPS2M Demo 59 euro | | CT Special Forces: Fire For Effect,  EyeToy Play 2,  FIFA Street,  Lego Star Wars,  Robots,  SingStar Pop,  SRS: Street Racing Syndicate,  Super Monkey Ball Deluxe
OPS2M Demo 60 | | Brave,  Brothers In Arms: Road To Hill 30,  CT Special Forces: Fire For Effect,  Robots,  Singstar Pop,  SRS: Street Racing Syndicate,  Stolen,  Super Monkey Ball Deluxe
OPS2M Demo 60 euro | | Brother In Arms: Road To Hill 30,  Burnout 3,  Destroy All Humans!,  Killzone,  Moto GP 3,  Prince Of Persia 2,  SingStar Pop,  Super Monkey Ball Deluxe
OPS2M Italian Demo 61 07/05 | | Brothers In Arms: Road To Hill 30,  Burnout 3,  Destroy All Humans,  Killzone,  Moto GP 3,  Prince Of Persia 2,  SingStar Popworld,  Super Monkey Ball Deluxe
OPS2M Demo 61 | | Destroy All Humans!,  Pro Evolution Soccer 4,  Worms 4 Mayhem,  Ys: Ark Of Napishtim,  Tekken 5
OPS2M Demo 61 euro | | Brave,  Demon Stone,  Final Fantasy X-2,  Formula One 2005,  Pro Evolution Soccer 4,  Soul Calibur 2,  Spyro: A Hero's Tail,  Tekken 5,  Worms 4 Mayhem,  Ys The Ark Of Napishtim
OPS2M Demo 62 | | Area 51,  Brothers In Arms: Road To Hill 30,  Destroy All Humans!,  Fight Nigh Round 2,  Formula One 2005,  God Of War,  Lego Star Wars,  Madagascar
OPS2M Demo 62 euro | | Area 51,  Brothers In Arms: Road To Hill 30,  Destroy All Humans!,  Fight Night Round 2,  Formula One 2005,  God Of War,  Lego Star Wars,  Madagaskar
OPS2M Demo 63 | | 187 Ride Or Die,  Brian Lara International Cricket 2005,  God Of War,  Juiced,  Musashi: Samurai Legend,  Tekken 5,  The Incredible Hulk: Ultimate Destruction,  Tiger Woods PGA Tour 2005
OPS2M Demo 63 euro | | 187 Ride Or Die,  God Of War,  Juiced,  Metal Gear Solid 3: Snake Eater,  Musashi Samurai Legend,  Rugby 2005,  Tekken 5,  The Incredible Hulk: Ultimate Destruction,  Tiger Woods PGA Tour 2006,  TimeSplitters: Future Perfect
OPS2M Demo 64 | | Burnout Revenge,  Conflict Global Terror,  Crash Tag Team Racing,  Everybody's Golf,  Fahrenheit,  Steel Lancer Arena International,  Wild Water Adrenaline
UPS2M Italia 10/2005 - Italian Demo | | Burnout Revenge,  Conflict Global Terror,  Crash Tag Team Racing,  Delta Force: Black Hawk Down,  Everybody's Golf,  Fahrenheit,  Steel Lancer Arena International,  Total Overdose,  Wild Water Adrenaline
OPS2 Demo 65 | | Beatdown: Fists Of Vengeance,  Brothers In Arms: Earned in Blood,  Darkwatch,  Delta Force: Black Hawk Down,  Need For Speed Most Wanted,  NHL 2006,  Pro Evolution Soccer 5,  Soul Calibur 3,  Tom Clancy's Rainbow Six Lockdown,  Wallace & Gromit The Curse Of The Were-Rabbit,  WRC Rally Evolved
OPS2M Demo 66 | | Asterix & Obelix XXL2,  Dancing Stage Max,  Evil Dead Regeneration,  FIFA 2006,  Genji,  LA Rush,  King Kong,  Ratchet Gladiator,  Shrek Superslam,  Sly 3: Honour Among Thieves,  Spartan Total Warrior,  SpyToy,  The Sims 2
OPS2M Demo 67 | | From Russia With Love,  The Incredibles: Rise Of The Underminer,  Jak X Racing,  The Matrix: The Path Of Neo,  SingStar 80's,  Without Warning,  Battlefield 2: Modern Combat,  From Russia With Love,  Jak X Racing,  SingStar 80's,  The Incredibles: Rise Of The Underminer,  The Matrix: The Path Of Neo,  Without Warning
UPS2M Demo Italia 01/2006 | | 007 From Russia With Love,  Battlefield 2 Modern Combat,  Jak X,  SingStar 80's,  The Incredibles: Rise of the Underminer,  The Matrix: Path Of Neo,  Without Warning
OPS2M Demo 68 | | Battlefield 2 Modern Combat,  Pilot Down: Behind Enemy Lines,  The Chronicles Of Narnia,  TOCA Race Driver 3,  Urban Reign
OPS2M Demo 69 | | 24: The Game,  Black,  Fahrenheit,  ICO,  Shadow Of The Colossus
OPS2M Demo 69 & 70 | | 24: The Game,  Black,  Castlevania: Curse Of Darkness,  Drakengard 2,  Driver: Parallel Lines,  Fahrenheit,  ICO,  Shadow Of The Colossus,  The Sword Of Etheria,  We Love Katamari
OPS2M Demo 70 | | Castlevania: Curse Of Darkness,  Commandos: Strike Force,  Drakengard 2,  Driver: Parallel Lines,  The Sword Of Etheria,  We Love Katamari
OPS2M Demo 71/uk | | Dragon Quest: The Journey Of The Cursed King,  FIFA Street 2,  Fight Night Round 3,  Marc Ecko's Getting Up: Contents Under Pressure,  Rugby 06,  Suikoden Tactics,  Tomb Raider Legend
OPS2M Demo 71 por/spa | | Commandos Strike Force,  Dragon Quest: The Journey Of The Cursed King,  FIFA Street 2,  Fight Night Round 3,  Marc Ecko's Getting Up: Contents Under Pressure,  Rugby 06,  Sonic Riders,  Suikoden Tactics,  Tomb Raider Legend
UPS2M Demo Italia 03-2006 | | Commandos Strike Force,  Drakengard 2,  Driver: Parallel Lines,  FIFA Street 2,  Fight Night Round 3,  Rugby 06,  Suikoden Tactics,  Tomb Raider Legend
OPS2M Demo 72/uk | | 24: The Game,  Black,  Driver: Parallel Lines,  Hitman: Blood Money,  Outrun 2006: Coast 2 Coast,  Sonic Riders,  TOCA Race Driver 3,  Tomb Raider Legend,  We Love Katamari
UPS2M Demo Italia 04/2006 | | Dragon Quest VIII,  Hitman Blood Money,  Mark Echo's Getting Up: Contents Under Pressure,  Outrun 2006 Coast 2 Coast,  Sensible Soccer,  Sonic Riders,  Super Monkey Ball Deluxe
OPS2M Demo 73/uk | | Ape Escape 3,  Dragon Quest VIII,  FIFA Street 2,  Hitman: Blood Money,  Micro Machines V4,  Outrun 2006: Coast 2 Coast,  Sensible Soccer,  Sonic Riders,  Super Monkey Ball Adventure,  Tomb Raider Legend
OPS2M Demo 73/benelux | | Dragon Quest VIII,  FIFA Street 2,  Hitman Blood Money,  Micro Machines V4,  Outrun 2006: Coast 2 Coast,  Sensible Soccer,  Sonic Riders,  Super Monkey Ball Adventure,  Tomb Raider Legend,  Urban Chaos: Riot Response
UPS2M Demo Italia 05-2006 | | 24: The Game,  Dragon Quest VIII,  FIFA Street 2,  Hitman Blood Money,  Micro Machines V4,  Outrun 2006: Coast 2 Coast,  Pro Evolution Soccer 5,  Super Monkey Ball Adventure,  Tomb Raider Legend,  Urban Chaos: Riot Response
OPS2M Demo 74 | | Driver: Parallel Lines,  Earache Extreme Metal Racing,  EyeToy: Play Sports,  Fight Night Round 3,  Forbidden Siren 2,  Micro Machines V4,  Sensible Soccer,  SingStar Rocks!,  Tomb Raider Legend
OPS2M Demo 74/spa | | Driver: Parallel Lines,  Earache Extreme Metal Racing,  EyeToy: Play Sports,  Fight Night Round 3,  Forbidden Siren 2,  SingStar Rocks!,  Tomb Raider Legend,  Urban Chaos Riot Response
UPS2M Italia06/2006 | | Driver: Parallel Lines,  Earache Extreme Metal Racing,  EyeToy: Play Sports,  Fight Night Round 3,  Forbidden Siren 2,  Metal Gear Solid 3 Snake Eater,  Micro Machines V4,  Sensible Soccer,  SingStar Rocks!,  Tekken 5
OPS2M Demo 75 | | B-Boy,  Dragon Quest VIII,  FIFA Street 2,  Hitman: Blood Money,  Jak 3,  Micro Machines V4,  Outrun 2006: Coast 2 Coast,  Ratchet Gladiator,  SingStar Rocks!,  Sonic Riders,  Tomb Raider Legend
UPS2M Demo Italia 07-2006 | | B-Boy,  Dragon Quest VIII,  Hitman Blood Money,  Jak 3,  Micro Machines V4,  Outrun 2006 Coast 2 Coast,  Ratchet Gladiator,  Shinobido,  SingStar Rocks!,  Sonic Riders,  Tomb Raider Legend
OPS2M Demo 76/uk | | B-Boy,  Black,  FIFA 06,  Forbidden Siren 2,  Formula One 2006,  LEGO Star Wars 2,  Metal Gear Solid 3: Snake Eater,  Shinobido,  SingStar Rocks!,  Yakuza
OPS2M Demo 77 uk/eur | | Ace Combat: The Belkan War,  B-Boy,  Bionicle: Heroes,  EyeToy: Lemmings,  Formula One 06,  LEGO Star Wars II: The Original Trilogy,  Need For Speed Carbon,  ProStroke Golf,  Yakuza
OPS2M Demo 78 | | Bionicle Heroes,  Destroy All Humans! 2,  Lemmings Classic,  Lemmings EyeToy,  Made Man,  Need for Speed: Carbon,  The Sims 2
OPS2M Demo 79 | | Bionicle Heroes,  Buzz! Junior Jungle Party,  Destroy All Humans! 2,  FIFA 07,  LEGO Star Wars,  LEGO Star Wars II,  LMA Manager 2007,  Made Man,  Pro Evolution Soccer 6
OPS2M Demo 80 | | Eragon,  Final Fantasy X-2,  LMA Manager 2007,  Pro Evolution Soccer 6,  Silent Hill 3,  Virtua Fighter 4
OPS2M Demo 80 spa/por | | Eragon,  Final Fantasy X-2,  Lemmings Classic,  LMA Manager 2007,  Pro Evolution Soccer 6,  Silent Hill 3,  The Sims 2,  Virtua Fighter 4
OPS2M Demo 81 | | Arthur & The Invisibles,  Black,  Dragon Quest VIII,  FIFA 2007,  Final Night Round 3,  Jak 3,  Okami,  Outrun 2006: Coast 2 Coast,  TOCA Race Driver 3,  Tomb Raider Legend,  We Love Katamari
OPS2M Demo 81 spa/por | | Arthur & The Invisibles,  Dragon Quest VIII,  Driver: Parallel Lines,  FIFA 2007,  Formula 1 2006,  Lego Star Wars 2,  Need For Speed Carbon,  Okami,  Pro Evolution Soccer 6,  SingStar Rocks!,  Tomb Raider Legend
OPS2M Demo 82 | | EyeToy Play Sports,  FIFA 2007,  FIFA Street 2,  Fight Night Round 3,  Okami,  Pro Evolution Soccer 6,  Rugby 06,  SingStar Rocks!,  Sonic Riders,  Suikoden Tactics,  Tomb Raider Legend
OPS2M Demo 83 | | Dancing Stage Fusion,  Ferrari F355 Challenge,  Formula One 04,  Heatseeker,  Juiced,  Kill Switch,  Need For Speed: Hot Pursuit 2,  Rocky Legends,  Stuntman,  The Simpsons: Hit & Run,  WRC 4,  Zone Of The Enders: The 2nd Runner
OPS2M Demo 84 | | Brian Lara's International Cricket 2007,  Castlevania: Curse Of Darkness,  Everybody's Tennis,  God Of War,  ICO,  Mashed,  Maximo Vs. Army Of Zin,  Rise To Honour,  Soul Calibur 3,  Virtua Fighter 4
OPS2M Demo 85 | | Alias,  Beyond Good & Evil,  Buffy The Vampire Slayer: Chaos Bleeds,  Cy Girls,  God Of War 2,  Mercenaries,  Primal,  Tomb Raider Legend,  Transformers,  UEFA Championship League 2006-2007
OPS2M Demo 86 | | 24 The Game,  Crash Tag Team Racing,  Dark Cloud,  Enthusia Professional Racing,  Everybody's Golf,  Everybody's Tennis,  Fahrenheit,  From Russia With Love,  Ratchet Gladiator,  Second Sight
OPS2M Demo 87 | | Buzz! Junior: Jungle Party,  Destroy All Humans! 2,  Dog's Life,  Ford Racing 2,  Ghost Recon: Jungle Storm,  God Of War II,  Hitman 2 Silent Assassin,  Lumines Plus,  Metal Gear Solid 3: Snake Eater,  Obscure II,  Reign Of Fire,  War Of The Monsters
OPS2M Demo 88 | | Broken Sword 3: The Sleeping Dragon,  Ghosthunter,  King Of Clubs,  Micro Machines Odyssey,  Project Zero,  Sly Raccoon 2: Band Of Thieves,  Viewtiful Joe 2,  V-Rally 3,  World Rally Championship 4,  Worms 3D
OPS2M Demo 88 (OPS2M Demo 89 uk/eur) | | Final Fantasy X,  Finding Nemo,  Firefighter F.D. 18,  Forbidden Siren 2,  Freedom Fighters,  Juiced,  Obscure 2,  Okami,  Rogue Galaxy,  The Incredibles
OPS2M Demo 90 | | Crash Nitro Cart,  Crash Of The Titans,  Moto GP3,  Project Eden,  Rogue Galaxy,  Shrek Superslam,  Spartan: Total Warrior,  Syphon Filter: The Omega Strain,  Tomb Raider Anniversary,  Yakuza
OPS2M Demo 91 | | Amplitude,  Beyond Good & Evil,  Crash Of The Titans,  Freedom Fighters,  Killzone,  Rez,  Stuntman Ignition,  The Simpsons: Hit & Run,  Tomb Raider Anniversary,  Wallace & Gromit
OPS2M Demo 92 | | Destroy All Humans!,  FIFA 08,  Need For Speed: Most Wanted,  Pro Evolution Soccer 2008,  Ratchet & Clank 3,  Return To Castle Wolfenstein,  Soul Calibur 2,  Space Channel 5: Part 2,  Spider-Man: Friend Or Foe,  Tenchu: Wrath Of Heaven,  Whiplash
OPS2M Demo 93 | | Brian Lara Cricket 2007,  Everybody's Tennis,  FIFA 08,  God Of War II,  Harry Potter And The Order Of The Phoenix,  Heatseeker,  Okami,  PDC World Championship Darts 2008,  Rogue Galaxy,  Spider-Man Friend Or Foe,  Stuntman Ignition,  Tomb Raider Anniversary
OPS2M Demo 94 | | Asterix At The Olympic Games,  Black,  Crash Of The Titans,  Harry Potter & The Order Of The Phoenix,  LEGO Star Wars 2,  Lumines Plus,  Metal Gear Solid 3: Snake Eater,  Need For Speed: Carbon,  Outrun 2006: Coast 2 Coast,  SingStar Rocks,  TimeSplitters: Future Perfect
OPS2M Demo 95 | | 24: The Game,  Brothers In Arms: Earned In Blood,  Dragon Quest VIII,  Harry Potter And The Order Of The Phoenix,  High School Musical,  Jak 3,  Prince Of Persia: The Sands Of Time,  Ratchet: Gladiator,  Rise To Honour,  SEGA Superstars,  Spyro: A Hero's Tail
OPS2M Demo 96 | | Arthur And The Invisibles,  Bionicle Heroes,  From Russia With Love,  ICO,  Prince Of Persia: The Warrior Within,  Rocky Legends,  Shadow Of The Colossus,  Sonic Riders,  The Incredible Hulk,  The Incredibles,  Tomb Raider Anniversary
OPS2M Demo 97 | | Arthur And The Invisibles,  Bionicle Heroes,  Crash Of The Titans,  Dark Cloud,  Harry Potter & The Order Of The Phoenix,  Klonoa 2: Lunatea's Veil,  Okami,  Tak And The Power Of Juju,  The Simpsons: Hit & Run,  The Incredibles: Rise Of The Underminer,  Wallace & Gromit: Curse Of The Were Rabbit,  We Love Katamari
OPS2M Demo 98 | | Burnout Revenge,  Ferrari F355 Challenge,  Formula One 2006,  Juiced,  Mashed,  Micro Machines V4,  Moto GP 3,  Need For Speed: Carbon,  Outrun 2006: Coast 2 Coast,  Stuntman Ignition,  Toca Race Driver 3,  WRC Rally Evolved
OPS2M Demo 99 | | 24: The Game,  Black,  Brothers In Arms: Road To Hill 30,  Conflict Desert Storm,  Ghost Recon: Jungle Storm,  Killzone,  Medal Of Honor: Frontline,  Metal Slug 3,  Rainbow Six: Lockdown,  Return To Castle Wolfenstein,  Rez,  Second Sight,  TimeSplitters 2
OPS2M Demo 100 | | Burnout Revenge,  Final Fantasy X,  Metal Gear Solid 3 Snake Eater,  Okami,  Pro Evolution Soccer 2008,  Rogue Galaxy,  Shadow Of The Colossus,  TimeSplitters 2,  Tomb Raider Legend
OPS2M Demo 101 eur | | Amplitude,  Area 51,  Beyond Good & Evil,  Broken Sword 3: The Sleeping Dragon,  Cold Winter,  Freedom Fighters,  Futurama,  Goblin Commander: Unleash The Horde,  Kill.Switch,  Mashed,  Maximo Vs. Army Of Zin,  Metal Slug 3,  R-Type Final,  Viewtiful Joe 2,  Virtua Fighter 4,  XIII


---
# References
[^1]: Driver: Parallel Lines with MAP files in it - https://assemblergames.com/threads/ops2m-demo-disc-72-driver-parallel-lines-late-05-beta-demo-download.66661/
