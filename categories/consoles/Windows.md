---
permalink: /pc/
layout: post
title: Awesome list of Windows 3.x+ Reverse Engineering and Game Development information
recommendTitle: All Windows PC Posts
editlink: ../categories/consoles/Windows.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
excerpt: Awesome list of Windows 3.x+ Reverse Engineering and Game Development information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: PC
    url: #
tags:
  - pc
recommend:
  - pc
  - dos
  - msx
---

# Introduction
Welcome to our page dedicated to PC reverse engineering! PCs are some of the most versatile and widely-used computing platforms in the world, and there's no shortage of interesting and challenging reverse engineering topics to explore. If you're interested in learning more about the technical aspects of PCs and how they work, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PC reverse engineering. Whether you're interested in understanding the hardware architecture of retro CPUs and GPUs, analyzing software at the binary level, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your keyboard and mouse, and get ready to dive into the exciting world of PC reverse engineering!

## DOS PC Game Reverse engineering
Note that if you are interested in reversing DOS era PC games we have a separate post on that topic:
{% include link-to-other-post.html post="/dos" description="For more information on reversing DOS games check out this post." %}

## MSX PC
Note that if you are interested in the MSX PC we have a separate post on that topic:
{% include link-to-other-post.html post="/msx" description="For more information on the MSX check out this post." %}

---
# Hardware

## Graphics Hardware

### How does the industry make sure there is compatibility between different manufactures of Graphics hardware?
This is where the The **Video Electronics Standards Association** (VESA) comes in, VESA's primary mission is to develop and promote open standards for the display industry, ensuring interoperability and enhancing the user experience across various devices. Without their standards your PC wouldn't even boot if it wasn't compatible with the motherboard.

### What are the different Graphics/Video Card ports?
Over the years there have been a few different standard ports for Video cards:
* **Industry Standard Architecture** (ISA) port - 1981+ Available as 8-bit PC Bus and 16-bit AT Bus
  ![ISA 16-Bit AT Bus](https://github.com/user-attachments/assets/cd6a9e7d-84b1-4ccc-bb05-8882bd9ad7b2)
  ![ISA 8-Bit PC Bus](https://github.com/user-attachments/assets/d2ac4f52-e189-4b45-8468-af2d63f05b6e)
* **VESA Local Bus** (VLB) - 1992+
  ![VLB](https://github.com/user-attachments/assets/0fb24a12-088b-49b4-8aac-efbf369981a9)
* **Peripheral Component Interconnect** (PCI) port - 1992+
* **Accelerated Graphics Port** (AGP) - 1997+
* **PCI Express** (PCIe) - 2004+

There were many motherboards that supported multiple different ports at once such as ISA 16-bit, 8-bit and VLB, thanks to [Juan Linietsky on Twitter
](https://x.com/reduzio/status/1832339488611107221)!

---
# Windows
Windows has played a significant role in the world of PC gaming, offering a vast and diverse library of video games spanning various genres and styles. 

In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, gaming transitioned to a more user-friendly and graphical environment, but many DOS games continued to run using compatibility features provided by Windows. 

The Windows platform offers backward compatibility for DOS games, allowing enthusiasts to relive the nostalgia of classic titles from the DOS era. This compatibility, along with the vast library of modern Windows-based games, showcases the ongoing role of Windows as a versatile and enduring platform for gamers.
 
## Windows Executable File Formats (NE,LE and PE)
We have separated out the information on Windows executable (exe) file formats into its own post:
{% include link-to-other-post.html post="/WindowsExecutables" description="For more information on Windows Executables check out this post." %}

## Finding other games using a similar dll
Sometimes games have their engine code in a separate dll file, in such cases it can be useful to find other games that use the same dll file as they might have additional debug information, one good way to find other games using: [Diskmaster search](https://discmaster.textfiles.com/search?q=bg.dll&extension=.dll&family=executable&sizeMin=1024&dedup=dedup&sortBy=ts&limit=10&showItemName=showItemName)

It is a tool that mirrors various CD-ROM images uploaded by archive.org by users, allowing you to search by filenames and by contents inside disc images, unlike the default archive.org search!

---
## eXoWin3x - Windows 3.x Preservation Project
eXoWin3x is a curated preservation set focused on games, multimedia and educational software developed for Windows 3.x. Sitting between the pure DOS era and the Windows 95 boom, this collection targets a transitional period where GUIs were gaining ground but still required DOS underpinnings.

If you are interesting in reversing games from this era then **eXoWin3x** is a great start as all the games come ready to play including all the required DOSBox config, drivers and windows files required!
[eXoWin3x Project Wiki](https://wiki.retro-exo.com/index.php/EXOWin3x)

### The Games
As of version 2, released in 2021, the collection includes over 1,100 unique titles. These range from FMV-heavy games and interactive fiction to children's educational software and multimedia encyclopedias. 

Note that during the Windows 3.x transition period there were multiple different executable formats, MZ for DOS, NE for Windows 3.x, LE for Windows 3.x and PE for mordern windows. Each of these formats needs different tools to reverse, so each game listed in the table below has the executable format:

<!-- cspell:disable -->

Game | Executable | EXE format | EXE Size | Notes 
-----|------------|------------|----------|-------
Noughts and Crosses (1993) | 0x.exe | NE for Windows 3.x | 44096 | 
101 Dalmatians - Escape From DeVil Manor (1997) | 101.exe | MS-DOS executable | 14784 | 
American Civil War - From Sumter to Appomattox (1996) | 1862.exe | NE for Windows 3.x | 5403345 | 
American Civil War - From Sumter to Appomattox (1996) | 1863.exe | NE for Windows 3.x | 4517701 | 
1942 - The Pacific Air War Gold (1994) | 1942.exe | MZ for MS-DOS | 643840 | 
1942 - The Pacific Air War Gold (1994) | 1942full.exe | MZ for MS-DOS | 643792 | 
1942 - The Pacific Air War Gold (1994) | 1942init.exe | NE for Windows 3.x | 85857 | 
20,000 Leagues Under The Sea (1995) | 20000.exe | NE for Windows 3.x | 2974263 | 
Activision's Atari 2600 Action Pack (1995) | 2600emu.exe | NE for Windows 3.x | 421376 | 
Jump Start 2nd Grade (1996) | 2g.exe | NE for Windows 3.x | 539104 | 
Aviation Adventure (1994) | 3.exe | MS-DOS executable | 134018 | 
Thinkin' Things Collection 2 (1995) | 3dblox.exe | MS-DOS executable | 167840 | 
Jongg CD!, The (1997) | 3djongg.exe | PE32 for Windows | 1169408 | 
3D Maze (1991) | 3dmaze.exe | NE for Windows 3.x | 34352 | 
3DPC (1993) | 3dpc.exe | NE for Windows 3.x | 209920 | 
3DPC (1993) | 3dpcplay.exe | MS-DOS executable | 47518 | 
CyberSpace Crossword (1992) | 3dxwd.exe | NE for Windows 3.x | 233539 | 
Jump Start Adventures 3rd Grade - Mystery Mountain (1996) | 3g.exe | NE for Windows 3.x | 776304 | 
Jump Start Adventures 4th Grade - Haunted Island (1996) | 4g.exe | PE32 for Windows | 262144 | 
4 Play (1993) | 4play.exe | NE for Windows 3.x | 150528 | 
Jump Start Adventures 5th Grade - Jo Hammet, Kid Detective (1997) | 5g.exe | NE for Windows 3.x | 566752 | 
Nine Worlds (1996) | 9worlds.exe | NE for Windows 3.x | 741994 | 
Power Politics (1992) | _election.exe | NE for Windows 3.x | 2042304 | 
Backstreet Boys - Puzzles in Motion (1999) | _instpgm.exe | NE for Windows 3.x | 1140020 | 
Arthur's Reading Race (1996) | _isdel.exe | NE for Windows 3.x | 8192 | 
Front Page Sports - Trophy Bass 2 (1996) | _setup.exe | NE for Windows 3.x | 528080 | 
EarthSiege 2 (1996) | _vshell.exe | PE32 for Windows | 566304 | 
Silent Thunder - A-10 Tank Killer II (1996) | a10shell.exe | PE32 for Windows | 414240 | 
Silent Thunder - A-10 Tank Killer II (1996) | a10sim.exe | PE32 for Windows | 625184 | 
Amazing Mazez to Amaze (1997) | a16v13.exe | NE for Windows 3.x | 218244 | 
Disney Presents Ariel's Story Studio (1997) | a_ss_del.exe | NE for Windows 3.x | 19424 | 
Alien Arcade (1994) | aarcade.exe | NE for Windows 3.x | 375296 | 
Mission 9 (1995) | aawin.exe | NE for Windows 3.x | 41488 | 
Alge-Blaster 3 (1994) | ab3.exe | NE for Windows 3.x | 2824704 | 
Abalone (1999) | abalone.exe | NE for Windows 3.x | 127488 | 
X-Fools, The - The Spoof is out There (1997) | abduct16.exe | NE for Windows 3.x | 3262277 | 
Let's Talk About Me (1996) | aboutme.exe | NE for Windows 3.x | 3187463 | 
Ace Ventura (1996) | ace.exe | NE for Windows 3.x | 99600 | 
Monty Python and the Quest for the Holy Grail (1996) | ace_demo.exe | NE for Windows 3.x | 92976 | 
Jump Start Pre-K (1996) | aces.exe | NE for Windows 3.x | 857116 | 
Brain Games For Windows (1992) | achi.exe | NE for Windows 3.x | 23909 | 
Putt-Putt and Fatty Bear's Activity Pack (1995) | activity.exe | NE for Windows 3.x | 30720 | 
American Civil War - From Sumter to Appomattox (1996) | acwiii.exe | NE for Windows 3.x | 7549952 | 
Battleground 6 - Napoleon in Russia (1997) | ad.exe | NE for Windows 3.x | 27182 | 
Cribbage Master (1992) | addgrp.exe | NE for Windows 3.x | 143888 | 
Nine Worlds (1996) | addmail.exe | NE for Windows 3.x | 47384 | 
Microsoft Bob (1995) | address.exe | NE for Windows 3.x | 232482 | 
Take a Break! Crosswords (1992) | addxwdsk.exe | NE for Windows 3.x | 29980 | 
Star Warped (1997) | admin.exe | NE for Windows 3.x | 51760 | 
Nine Worlds (1996) | admin16.exe | NE for Windows 3.x | 43024 | 
Nine Worlds (1996) | admin32.exe | PE32 for Windows | 87552 | 
After Dark 3.2 (1995) | adtray.exe | PE32 for Windows | 18944 | 
Dole 5 A Day Adventures (1995) | adventur.exe | NE for Windows 3.x | 1495669 | 
After Dark 3.2 (1995) | adw30.exe | NE for Windows 3.x | 286192 | 
Anyone for Cards (1994) | afc.exe | NE for Windows 3.x | 3062299 | 
Alien Force (1990) | aforce.exe | NE for Windows 3.x | 34816 | 
Africa Trail (1997) | africa16.exe | NE for Windows 3.x | 884480 | 
Allied General (1995) | ag.exe | PE32 for Windows | 2167296 | 
Hard Day's Night, A (1993) | ahdn.exe | NE for Windows 3.x | 78736 | 
Nine Worlds (1996) | airdial.exe | NE for Windows 3.x | 185792 | 
Air Havoc Controller (1994) | airhavoc.exe | NE for Windows 3.x | 114296 | 
Nine Worlds (1996) | airmail.exe | NE for Windows 3.x | 237216 | 
Nine Worlds (1996) | airmos.exe | NE for Windows 3.x | 970752 | 
Let's Explore the Airport (1995) | airport.exe | NE for Windows 3.x | 30720 | 
Jurassic Art (1997) | aleovl1.exe | NE for Windows 3.x | 428224 | 
Jurassic Art (1997) | alexpres.exe | NE for Windows 3.x | 1502368 | 
Reader Rabbit 2 (1993) | alias.exe | NE for Windows 3.x | 14416 | 
Alice - Interactive Museum (1994) | alice.exe | NE for Windows 3.x | 684733 | 
Full Tilt! 2 Pinball (1996) | alien.exe | NE for Windows 3.x | 812560 | 
ID4 Mission Disks (1996) | alien_f.exe | NE for Windows 3.x | 1754975 | 
AlienTic (1992) | alientic.exe | NE for Windows 3.x | 63376 | 
Spaceward Ho! (1992) | allun.exe | NE for Windows 3.x | 15816 | 
Space Station Alpha - The Encounter (1996) | alpha.exe | NE for Windows 3.x | 1008962 | 
Jurassic Art (1997) | alsovl1.exe | NE for Windows 3.x | 428256 | 
Al Unser, Jr. Arcade Racing (1995) | alunser.exe | PE32 for Windows | 488567 | 
Amanda Stories (1991) | amanda.exe | NE for Windows 3.x | 373139 | 
Amazon Trail, The (1993) | amazon.exe | NE for Windows 3.x | 534539 | 
American Girls Premiere, The (1997) | amgirl16.exe | NE for Windows 3.x | 567232 | 
Focus Essential Senior Word Games (1997) | anagram.exe | NE for Windows 3.x | 307440 | 
Anastasia - Adventures with Pooka and Bartok! (1999) | anastasi.exe | NE for Windows 3.x | 47527 | 
Area D (1997) | ancipitaldemo.exe | PE32 for Windows, InstallShield | 6420918 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | anim.exe | NE for Windows 3.x | 290248 | 
Bricks (1996) | animtion.exe | NE for Windows 3.x | 14992 | 
AnnaTommy (1994) | ant.exe | NE for Windows 3.x | 225904 | 
Betrayal in Antara (1997) | antarar.exe | PE32 for Windows | 1253888 | 
Madeline's Rainy Day Activities (1996) | aolinst.exe | NE for Windows 3.x | 6800 | 
Storybook Weaver Deluxe (1994) | aollink.exe | NE for Windows 3.x | 47954 | 
Age of Sail (1996) | aos.exe | NE for Windows 3.x | 542111 | 
Age of Sail (1996) | aosedit.exe | NE for Windows 3.x | 396544 | 
Sophie's World (1997) | app16.exe | NE for Windows 3.x | 1025024 | 
Double Feature Solitaire (1994) | arachnid.exe | NE for Windows 3.x | 44432 | 
Arc of Doom (1994) | arc.exe | NE for Windows 3.x | 687973 | 
Arcade America (1996) | arcade.exe | NE for Windows 3.x | 107008 | 
ID4 Mission Disks (1996) | area51.exe | NE for Windows 3.x | 1776077 | 
Area D (1997) | area_d.exe | NE for Windows 3.x | 120384 | 
Disney Presents Ariel's Story Studio (1997) | ariel_ss.exe | NE for Windows 3.x | 606720 | 
Microsoft Art Gallery (1993) | artgall.exe | NE for Windows 3.x | 160800 | 
Age of Sail (1996) | as_start.exe | NE for Windows 3.x | 171770 | 
Isaac Asimov's - The Ultimate Robot (1994) | asimov.exe | NE for Windows 3.x | 210976 | 
Achtung Spitfire (1997) | asp31.exe | NE for Windows 3.x | 1965568 | 
Microsoft Arcade (1993) | asteroid.exe | NE for Windows 3.x | 165120 | 
Astronomica - The Quest for the Edge of the Universe (1994) | astro.exe | NE for Windows 3.x | 418376 | 
Activision's Atari 2600 Action Pack 2 (1995) | atlantis.exe | NE for Windows 3.x | 44032 | 
Cartopedia - The Ultimate World Reference Atlas (1996) | atlas.exe | NE for Windows 3.x | 1478016 | 
3D Atlas '98 (1997) | atlas98.exe | NE for Windows 3.x | 1564672 | 
Atmoids (1990) | atmoids.exe | NE for Windows 3.x | 21136 | 
Atmosfear - The Third Dimension (1995) | atmos.exe | NE for Windows 3.x | 289808 | 
Atomic (1993) | atomic.exe | NE for Windows 3.x | 288768 | 
A to Zap! (1995) | atozap.exe | NE for Windows 3.x | 484368 | 
Pyst (1997) | attpatch.exe | PE32 for Windows | 136704 | 
Millennium Auction (1994) | auction.exe | NE for Windows 3.x | 416848 | 
Putt-Putt Enters the Race (1998) | autoputt.exe | PE32 for Windows | 43008 | 
Creatures (1997) | autorun.exe | PE32 for Windows | 202752 | 
Avalon Casinos (1996) | avalonc.exe | NE for Windows 3.x | 1611360 | 
Aviation Adventure (1994) | aviation.exe | NE for Windows 3.x | 30528 | 
Bow and Arrow (1992) | b&arrow.exe | NE for Windows 3.x | 145168 | 
Las Vegas Super Casino (1997) | baccarat.exe | NE for Windows 3.x | 571460 | 
Backpacker - The Lost Florence Gold Mine (1997) | backpack.exe | NE for Windows 3.x | 1684960 | 
Creatures (1997) | backup.exe | PE32 for Windows | 194560 | 
Residents, The - Bad Day on the Midway (1995) | bad_day.exe | NE for Windows 3.x | 742342 | 
Bad Mojo (1996) | badmojo.exe | NE for Windows 3.x | 511760 | 
Bailey's Book House (1993) | bailey.exe | PE32 for Windows | 1223680 | 
Putt-Putt and Pep's Balloon-o-Rama (1996) | balloon.exe | NE for Windows 3.x | 21648 | 
One Armed Bandit (1991) | bandit.exe | NE for Windows 3.x | 72704 | 
Bang! Bang! (1990) | bangbang.exe | NE for Windows 3.x | 73216 | 
Barkanoid (1997) | barka.exe | NE for Windows 3.x | 5680128 | 
Activision's Atari 2600 Action Pack 2 (1995) | barnstrm.exe | NE for Windows 3.x | 44032 | 
Microsoft Complete Baseball - 1994 Edition (1993) | baseball.exe | NE for Windows 3.x | 1596576 | 
Brain Games For Windows (1992) | bastille.exe | NE for Windows 3.x | 28773 | 
Pink Panther, The - Hokus Pokus Pink (1998) | batchman.exe | MS-DOS executable | 29630 | 
Adventures of Batman and Robin, The - Cartoon Maker (1995) | batmancm.exe | NE for Windows 3.x | 454176 | 
Battle Sat (1991) | batsat.exe | NE for Windows 3.x | 111731 | 
Hoyle Battling Ships And War (1998) | battlwar.exe | PE32 for Windows | 518144 | 
Brick Breaker II Turbo (1994) | bb2.exe | NE for Windows 3.x | 414208 | 
Front Page Sports - Baseball Pro '96 Season (1996) | bbarch.exe | PE32 for Windows | 27136 | 
Animals Of Farthing Wood, The (1996) | bbcaofw.exe | NE for Windows 3.x | 14432 | 
APBA presents - Baseball for Windows (1995) | bbereg.exe | NE for Windows 3.x | 93712 | 
Front Page Sports - Baseball Pro '96 Season (1996) | bbupdate.exe | PE32 for Windows | 119808 | 
Wiggins in Storyland (1995) | bd1.exe | NE for Windows 3.x | 18569 | 
Wiggins in Storyland (1995) | bd2.exe | NE for Windows 3.x | 28382 | 
Wiggins in Storyland (1995) | bd3.exe | NE for Windows 3.x | 19674 | 
Wiggins in Storyland (1995) | bd4.exe | NE for Windows 3.x | 25408 | 
Battle Beast (1995) | beast.exe | NE for Windows 3.x | 122752 | 
Beetle Run (1995) | beetle.exe | NE for Windows 3.x | 1621475 | 
Bermuda Syndrome (1996) | bermuda.exe | NE for Windows 3.x | 145408 | 
Beyond Time (1997) | beyond.exe | NE for Windows 3.x | 394800 | 
Backgammon (1990) | bg.exe | NE for Windows 3.x | 83264 | 
Battleground 8 - Prelude to Waterloo (1997) | bg_start.exe | NE for Windows 3.x | 528319 | 
Battleground - Ardennes (1995) | bga.exe | NE for Windows 3.x | 1023558 | 
Battleground - Ardennes (1995) | bga134uk.exe | NE for Windows 3.x | 946690 | 
Battleground 2 - Gettysburg (1996) | bgg.exe | NE for Windows 3.x | 1265576 | 
Battleground 2 - Gettysburg (1996) | bgg134uk.exe | NE for Windows 3.x | 4681817 | 
Battleground 5 - Antietam (1996) | bgn.exe | NE for Windows 3.x | 1180461 | 
Battleground 7 - Bull Run (1997) | bgr.exe | NE for Windows 3.x | 1264552 | 
Battleground 7 - Bull Run (1997) | bgr102uk.exe | NE for Windows 3.x | 185225 | 
Battleground 4 - Shiloh (1996) | bgs.exe | NE for Windows 3.x | 1160235 | 
Battleground 3 - Waterloo (1996) | bgw.exe | NE for Windows 3.x | 1239648 | 
Big Job (1996) | bigjob.exe | NE for Windows 3.x | 666240 | 
Big One, The (1994) | bigone.exe | NE for Windows 3.x | 2368000 | 
Wallobee Jack - The Bingi Burra Stone (1994) | bingi.exe | NE for Windows 3.x | 75776 | 
Nine Worlds (1996) | binst.exe | NE for Windows 3.x | 47616 | 
Microsoft Entertainment Pack 2 (1991) | binxz.exe | NE for Windows 3.x | 34288 | 
Eyewitness Virtual Reality Bird (1995) | bird.exe | NE for Windows 3.x | 2255936 | 
Journeyman Project 2, The - Buried in Time (1995) | bit2416.exe | NE for Windows 3.x | 1163264 | 
Journeyman Project 2, The - Buried in Time (1995) | bit816.exe | NE for Windows 3.x | 1168384 | 
Journeyman Project 2, The - Buried in Time (1995) | bitmpc.exe | NE for Windows 3.x | 52464 | 
Masque Blackjack (1994) | bjwin.exe | NE for Windows 3.x | 364256 | 
Microsoft Complete NBA Basketball Guide '94-'95 (1994) | bktball.exe | NE for Windows 3.x | 1555040 | 
Blades of Exile (1999) | blades.exe | NE for Windows 3.x | 2382848 | 
Blades of Exile (1999) | bladpced.exe | NE for Windows 3.x | 658107 | 
Interactive Adventures of Blake and Mortimer, The - The Time Trap (1997) | blake16.exe | NE for Windows 3.x | 932417 | 
Microsoft Entertainment Pack 4 (1992) | blakjak.exe | NE for Windows 3.x | 136768 | 
Casino Deluxe 2 (1996) | blakjk.exe | NE for Windows 3.x | 5151435 | 
Cyberstrip Poker (1995) | blckjck.exe | NE for Windows 3.x | 2969311 | 
Bricks (1996) | bldfig.exe | NE for Windows 3.x | 10496 | 
Bricks (1996) | bldwall.exe | NE for Windows 3.x | 9872 | 
Blue Heat - The Case of the Cover Girl Murders (1997) | blheat16.exe | NE for Windows 3.x | 510144 | 
National Lampoon's Blind Date (1994) | blindate.exe | NE for Windows 3.x | 685837 | 
Area D (1997) | blitz3ddemo166.exe | PE32 for Windows | 6284376 | 
FunPack (1993) | blitzer.exe | NE for Windows 3.x | 237312 | 
Triple Threat - An Arcade Adventure (1995) | blkrein.exe | NE for Windows 3.x | 6984720 | 
Blob Factory (1996) | blobfact.exe | NE for Windows 3.x | 56372 | 
Block Breaker (1992) | block.exe | NE for Windows 3.x | 171504 | 
Symantec Game Pack (1991) | blocks.exe | NE for Windows 3.x | 63504 | 
Blown Away (1994) | blownawy.exe | NE for Windows 3.x | 400458 | 
Thinkin' Things Collection 1 (1993) | blox.exe | MS-DOS executable | 153696 | 
Blades of Exile (1999) | blscened.exe | NE for Windows 3.x | 879104 | 
Blue Ice (1995) | blueice.exe | PE32 for Windows | 197632 | 
Bricks (1996) | bmp2avi.exe | NE for Windows 3.x | 85120 | 
Hoyle Classic Card Games (1997) | board.exe | PE32 for Windows | 1281024 | 
Ultimate Human Body 2.0, The (1996) | body2.exe | NE for Windows 3.x | 1858688 | 
BogOut (1992) | bogout.exe | NE for Windows 3.x | 69632 | 
ID4 Mission Disks (1996) | bomber.exe | NE for Windows 3.x | 1844189 | 
This is Spinal Tap (1994) | bonus.exe | NE for Windows 3.x | 50272 | 
SkyBorg - Into the Vortex (1995) | borg.exe | NE for Windows 3.x | 1887499 | 
Activision's Atari 2600 Action Pack (1995) | boss.exe | NE for Windows 3.x | 41472 | 
Fast Action Paq (1993) | bot.exe | NE for Windows 3.x | 1523200 | 
Activision's Atari 2600 Action Pack (1995) | boxing.exe | NE for Windows 3.x | 58263 | 
Bicycle Pinochle (1997) | bpin.exe | PE32 for Windows | 908800 | 
Bicycle Poker (1996) | bpoker.exe | PE32 for Windows | 685056 | 
BrainWave (1997) | brainwav.exe | NE for Windows 3.x | 1733120 | 
TZ-Breakout (1996) | breakout.exe | NE for Windows 3.x | 466432 | 
Creatures (1997) | breedkit.exe | PE32 for Windows | 303616 | 
Bricks (1996) | bricks.exe | NE for Windows 3.x | 713472 | 
BreakThru! (1994) | brkthru.exe | NE for Windows 3.x | 300032 | 
Carmen Sandiego - Junior Detective Edition (1995) | broemidi.exe | NE for Windows 3.x | 230080 | 
X-Fools, The - The Spoof is out There (1997) | brsetup.exe | NE for Windows 3.x | 104608 | 
Microsoft Complete Baseball - 1995 Edition (1994) | bs95.exe | NE for Windows 3.x | 1801344 | 
Microsoft Bookshelf '95 (1995) | bs95ctw.exe | NE for Windows 3.x | 4944 | 
Microsoft Bookshelf '95 (1995) | bshelf95.exe | NE for Windows 3.x | 816064 | 
BattleStar (1996) | bstar.exe | NE for Windows 3.x | 373648 | 
Bad Toys (1995) | bt3d.exe | NE for Windows 3.x | 156160 | 
BreakThru! (1994) | btdemo.exe | NE for Windows 3.x | 300032 | 
Beat the House (1995) | bth.exe | NE for Windows 3.x | 632336 | 
Fast Action Paq (1993) | bubble.exe | NE for Windows 3.x | 416768 | 
Bug! (1996) | bug!.exe | PE32 for Windows | 513536 | 
Scholastic's The Magic School Bus Explores the Solar System (1994) | busgame1.exe | NE for Windows 3.x | 362240 | 
Brickbuster (1995) | buster.exe | NE for Windows 3.x | 79872 | 
BrainWave 2 (1997) | bw2.exe | NE for Windows 3.x | 1881600 | 
Microsoft Arcade (1993) | bz.exe | NE for Windows 3.x | 408320 | 
Full Tilt! Pinball (1996) | cadet.exe | NE for Windows 3.x | 642048 | 
Shadows of Cairn (1994) | cairn.exe | NE for Windows 3.x | 253952 | 
Microsoft Bob (1995) | cal.exe | NE for Windows 3.x | 335920 | 
Math Blaster - Episode 2 - Secret of the Lost City (1994) | calculat.exe | NE for Windows 3.x | 200176 | 
Arcade Mania (1995) | cam1.exe | NE for Windows 3.x | 33348 | 
Anastasia - Adventures with Pooka and Bartok! (1999) | camel16.exe | NE for Windows 3.x | 2788864 | 
Area D (1997) | camels2demo.exe | PE32 for Windows, InstallShield | 12736323 | 
Capitol Hill (1993) | capitol.exe | NE for Windows 3.x | 376128 | 
Capitalist Pig (1992) | cappig.exe | NE for Windows 3.x | 1308672 | 
Hoyle Classic Card Games (1997) | card.exe | PE32 for Windows | 1783296 | 
Casino De Luxe (1995) | carib.exe | NE for Windows 3.x | 1027939 | 
Where in the World is Carmen Sandiego (CD-ROM)(1995) | carmen.exe | NE for Windows 3.x | 550416 | 
Corporate Pursuit (1996) | case.exe | NE for Windows 3.x | 330385 | 
Play To Win Casino (1998) | casino.exe | NE for Windows 3.x | 15774136 | 
Casino Deluxe 2 (1996) | casino2.exe | NE for Windows 3.x | 766464 | 
Casper Brainy Book (1995) | casper.exe | NE for Windows 3.x | 38056 | 
Castle Explorer (1996) | castle.exe | NE for Windows 3.x | 4467456 | 
Castle of the Winds (1993) | castle1.exe | NE for Windows 3.x | 833456 | 
Castle of the Winds (1993) | castle2.exe | NE for Windows 3.x | 978784 | 
Castle of the Winds (1993) | catalog.exe | MZ for MS-DOS, LZEXE v0.91 compressed | 121162 | 
Let's Explore the Airport (1995) | catalog2.exe | NE for Windows 3.x | 30720 | 
Titanic - A Mysterious Undersea Adventure (1998) | catalogue.exe | PE32 for Windows | 2102272 | 
Catz - Your Computer Petz (1996) | catz.exe | NE for Windows 3.x | 43008 | 
Comic Book Confidential (1994) | cbc.exe | NE for Windows 3.x | 11650927 | 
Hanna-Barbera's Cartoon Carnival (1995) | cc.exe | NE for Windows 3.x | 134656 | 
Crystal Caliburn (1994) | ccwin.exe | NE for Windows 3.x | 726126 | 
Endorfun (1995) | cd_efun.exe | NE for Windows 3.x | 45568 | 
Mosaic (1993) | cdplyr.exe | MS-DOS executable | 15179 | 
Dilbert - Not Just A Calendar (1997) | cedco.exe | NE for Windows 3.x | 2556928 | 
Curious George Learns Phonics (1997) | cglp.exe | NE for Windows 3.x | 750592 | 
Chaos - A Fantasy Adventure Game (1996) | chaos.exe | NE for Windows 3.x | 696871 | 
Spy Fox in Cheese Chase (1998) | chase.exe | NE for Windows 3.x | 21616 | 
101 Dalmatians - Escape From DeVil Manor (1997) | check95.exe | MS-DOS executable | 11782 | 
Brainiacs (1995) | checkers.exe | NE for Windows 3.x | 241088 | 
Jongg CD!, The (1997) | checkmem.exe | PE32 for Windows | 14336 | 
Microsoft Entertainment Pack for Windows (1990) | chess.exe | NE for Windows 3.x | 232688 | 
Masque ChessNet 3 (1994) | chessnet.exe | NE for Windows 3.x | 429104 | 
Chinese Solitaire (1993) | chinasol.exe | NE for Windows 3.x | 148101 | 
Chip's Challenge (1991) | chips.exe | NE for Windows 3.x | 267776 | 
Thinkin' Things Collection 1 (1993) | chiqexec.exe | MZ for MS-DOS | 349184 | 
Microsoft Bob (1995) | chkbook.exe | NE for Windows 3.x | 1366944 | 
Power - The Game (1995) | chksum.exe | MS-DOS executable | 87631 | 
Chomp (1991) | chomp.exe | NE for Windows 3.x | 126848 | 
FunPack (1993) | chompw.exe | NE for Windows 3.x | 128928 | 
Microsoft Bob (1995) | chooser.exe | NE for Windows 3.x | 34348 | 
TC Choplifter (1995) | choplift.exe | NE for Windows 3.x | 445952 | 
Activision's Atari 2600 Action Pack (1995) | chopper.exe | NE for Windows 3.x | 58263 | 
Chess Mates (1996) | chsmts16.exe | NE for Windows 3.x | 423936 | 
Cinema Volta (1994) | cinevolt.exe | NE for Windows 3.x | 370009 | 
Microsoft Cinemania '94 (1994) | cinlst94.exe | NE for Windows 3.x | 91136 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | cipher.exe | NE for Windows 3.x | 458642 | 
Exploring Ancient Cities (1995) | cities.exe | NE for Windows 3.x | 43610161 | 
Sid Meier's Civilization (1993) | civ.exe | NE for Windows 3.x | 832512 | 
Sid Meier's Civilization II - The Collector's Edition (1996) | civ2.exe | NE for Windows 3.x | 2100240 | 
Sid Meier's Civilization II - The Collector's Edition (1996) | civ2map.exe | NE for Windows 3.x | 2123776 | 
Sid Meier's Civilization II - The Collector's Edition (1996) | civ2orig.exe | NE for Windows 3.x | 1764880 | 
Sid Meier's Civilization II - The Collector's Edition (1996) | civ2scen.exe | NE for Windows 3.x | 1764880 | 
Sid Meier's CivNet (1995) | civmaps.exe | NE for Windows 3.x | 559616 | 
Sid Meier's CivNet (1995) | civnet.exe | NE for Windows 3.x | 2073600 | 
Captain Kangaroo - Life's First Lessons Adventure #1 (1998) | ck1_16.exe | NE for Windows 3.x | 527664 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpc.exe | NE for Windows 3.x | 161776 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpc1.exe | NE for Windows 3.x | 161776 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpc2.exe | NE for Windows 3.x | 161776 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpccdrt.exe | MS-DOS executable | 1142 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpcdos.exe | LE executable | 126610 | 
Pinball Builder - A Construction Kit for Windows (1996) | ckpcgame.exe | MZ for MS-DOS | 312133 | 
Jurassic Art (1997) | clipartv.exe | NE for Windows 3.x | 477344 | 
ClockWerx (1995) | clockwrx.exe | NE for Windows 3.x | 239792 | 
Dandy Dinosaurs (1993) | clubhse.exe | NE for Windows 3.x | 368245 | 
Clueless - CD-ROM (1997) | clueless.exe | NE for Windows 3.x | 943475 | 
Chessmaster 4000 Turbo, The (1993) | cm4000.exe | NE for Windows 3.x | 684784 | 
Chessmaster 4000 Turbo, The (1993) | cm4000b.exe | NE for Windows 3.x | 525040 | 
NumberMaze Challenge (1999) | cmaze.exe | NE for Windows 3.x | 100240 | 
Masque ChessNet 3 (1994) | cnall1.exe | MZ for MS-DOS, LHa self-extracting archive | 100705 | 
Masque ChessNet 3 (1994) | cnall2.exe | MZ for MS-DOS, LHa self-extracting archive | 8812 | 
Microsoft Cinemania '95 (1995) | cnmnia95.exe | NE for Windows 3.x | 1187200 | 
Flight Sim Toolkit (1993) | cockpit.exe | NE for Windows 3.x | 49741 | 
Symantec Game Pack (1991) | codebrak.exe | NE for Windows 3.x | 24880 | 
Cogito (1992) | cogito.exe | NE for Windows 3.x | 942624 | 
Monty Python and the Quest for the Holy Grail (1996) | colddemo.exe | NE for Windows 3.x | 92848 | 
Maui Mallard in Cold Shadow (1996) | coldshdw.exe | PE32 for Windows | 501248 | 
Sid Meier's Colonization (1994) | colonize.exe | NE for Windows 3.x | 1175040 | 
Flight Sim Toolkit (1993) | colours.exe | NE for Windows 3.x | 39685 | 
Comet Busters! (1994) | comet.exe | NE for Windows 3.x | 237968 | 
Comix Zone (1995) | comix.exe | PE32 for Windows | 1995264 | 
Wallace and Gromit Fun Pack (1996) | comp.exe | NE for Windows 3.x | 1148391 | 
Al Unser, Jr. Arcade Racing (1995) | config.exe | PE32 for Windows | 107008 | 
Connections (1995) | connect.exe | NE for Windows 3.x | 690019 | 
Corporate Pursuit (1996) | corp.exe | NE for Windows 3.x | 1454080 | 
Corporate Pursuit (1996) | corpurs.exe | NE for Windows 3.x | 900396 | 
Activision's Atari 2600 Action Pack (1995) | cosmic.exe | NE for Windows 3.x | 58263 | 
Countdown (1992) | count.exe | NE for Windows 3.x | 372749 | 
Bricks (1996) | countsel.exe | NE for Windows 3.x | 6144 | 
Microsoft Arcade (1993) | cp.exe | NE for Windows 3.x | 232192 | 
Crosswords and Word Games (1995) | cpd.exe | NE for Windows 3.x | 304368 | 
Jongg CD!, The (1997) | cpinball.exe | PE32 for Windows | 1740288 | 
Madeline's Rainy Day Activities (1996) | cpinst.exe | NE for Windows 3.x | 6800 | 
Guignols de l'Info, Les - Le Cauchemar de PPD (1996) | cppd16.exe | NE for Windows 3.x | 987176 | 
Activision's Atari 2600 Action Pack (1995) | crackpot.exe | NE for Windows 3.x | 58263 | 
Better Home And Gardens Cool Crafts (1994) | craftpc.exe | NE for Windows 3.x | 687785 | 
Casino Deluxe 2 (1996) | craps.exe | NE for Windows 3.x | 6600037 | 
Las Vegas Super Casino (1997) | crazy8.exe | NE for Windows 3.x | 229688 | 
Strategy Heads (1997) | create16.exe | NE for Windows 3.x | 1035801 | 
Day at the Races, A (1994) | creatgrp.exe | NE for Windows 3.x | 60946 | 
Strategy Heads (1997) | creator.exe | PE32 for Windows | 1412265 | 
Creatures (1997) | creature.exe | PE32 for Windows | 720896 | 
Star Trek - Klingon (1996) | credits.exe | NE for Windows 3.x | 271224 | 
Cribbage (1991) | cribbage.exe | NE for Windows 3.x | 61440 | 
Cribbage Master (1992) | cribwin.exe | NE for Windows 3.x | 235536 | 
Critical Path (1993) | critpath.exe | NE for Windows 3.x | 115975 | 
Take a Break! Crosswords (1992) | cross.exe | NE for Windows 3.x | 159744 | 
Crosswords and Word Games (1995) | crossmor.exe | NE for Windows 3.x | 523968 | 
Crosswords and Word Games (1995) | crosswrd.exe | NE for Windows 3.x | 422048 | 
Microsoft Golf 2.0 (1995) | crsconv.exe | NE for Windows 3.x | 169184 | 
Microsoft Entertainment Pack for Windows (1990) | cruel.exe | NE for Windows 3.x | 17120 | 
Crusader - Adventure Out of Time (1997) | crusad31.exe | NE for Windows 3.x | 932265 | 
Crosswords and Word Games (1995) | crypto.exe | NE for Windows 3.x | 382712 | 
Crystal Skull, The (1996) | crystal.exe | NE for Windows 3.x | 932333 | 
Masque Caribbean Stud Poker (1995) | cstudpro.exe | NE for Windows 3.x | 372224 | 
Where in the USA is Carmen Sandiego (1996) | csusa.exe | NE for Windows 3.x | 630272 | 
101 Dalmatians - Escape From DeVil Manor (1997) | ctmouse.exe | MS-DOS executable | 5829 | 
Mosaic (1993) | ctwave.exe | NE for Windows 3.x | 454656 | 
Philip Marlowe Private Eye (1996) | cube.exe | NE for Windows 3.x | 34096 | 
Carmen Sandiego Word Detective (1997) | cwd16.exe | NE for Windows 3.x | 1342480 | 
Sesame Street - Letters (1999) | cwrun.exe | NE for Windows 3.x | 7824 | 
Cyberstrip Poker (1995) | cyber.exe | NE for Windows 3.x | 1565727 | 
Cyberstrip Poker (1995) | cybrbj.exe | MZ for MS-DOS Self-extracting PKZIP archive | 1892478 | 
Jongg CD!, The (1997) | cybrdice.exe | PE32 for Windows | 1324544 | 
Cyberstrip Poker (1995) | cybrpkr.exe | MZ for MS-DOS Self-extracting PKZIP archive | 1833318 | 
Gus Goes to Cyberstone Park (1996) | cybstone.exe | NE for Windows 3.x | 707439 | 
Dare to Dream Part One - In a Darkened Room (1993) | d2d.exe | NE for Windows 3.x | 1786155 | 
Dare to Dream 2 (1993) | d2d2.exe | NE for Windows 3.x | 2638387 | 
Dare to Dream 3 (1993) | d2d3.exe | NE for Windows 3.x | 2635514 | 
Diamonds 3D (1996) | d3d.exe | NE for Windows 3.x | 2245708 | 
Daedalus Encounter, The (1995) | daedalus.exe | NE for Windows 3.x | 299321 | 
Dagger's Rage (1995) | dagger.exe | NE for Windows 3.x | 190720 | 
Daleks (1991) | daleks.exe | NE for Windows 3.x | 46078 | 
Dare to Dream Part One - In a Darkened Room (1993) | dare2drm.exe | NE for Windows 3.x | 67824 | 
Dark Seed II (1995) | dark0001.exe | NE for Windows 3.x | 183184 | 
Dark Eye, The (1995) | darkeye.exe | NE for Windows 3.x | 742326 | 
Office Darts 301 (1994) | dart.exe | NE for Windows 3.x | 462336 | 
Front Page Sports - Baseball Pro '96 Season (1996) | datain.exe | PE32 for Windows | 330752 | 
ID4 Mission Disks (1996) | dave.exe | NE for Windows 3.x | 1774167 | 
Dazzeloids (1994) | dazz.exe | NE for Windows 3.x | 1034266 | 
Brain Games For Windows (1992) | dblblock.exe | NE for Windows 3.x | 24933 | 
Time Warp of Dr. Brain, The (1996) | dbpatch.exe | PE32 for Windows | 339683 | 
EarthSiege 2 (1996) | dbsim.exe | PE32 for Windows | 727584 | 
Steven Spielberg's Director's Chair (1996) | dc.exe | NE for Windows 3.x | 36740 | 
Total Mayhem (1996) | ddhelp.exe | PE32 for Windows | 16896 | 
Deadlock - Planetary Conquest (1996) | deadlock.exe | PE32 for Windows | 1043488 | 
WinGenius (1994) | dealers.exe | COM executable for DOS | 8283 | 
Deflektor PC (1998) | deflekto.exe | NE for Windows 3.x | 963907 | 
In the 1st Degree (1995) | degree.exe | NE for Windows 3.x | 612864 | 
Disney's The Jungle Book (1994) | deinst.exe | PE32 for Windows | 23552 | 
Sensible Golf (1994) | deinst32.exe | PE32 for Windows | 34304 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | deinstal.exe | NE for Windows 3.x | 47279 | 
Deja Vu I and II - The Casebooks of Ace Harding (1992) | dejavu.exe | NE for Windows 3.x | 305664 | 
Deja Vu I and II - The Casebooks of Ace Harding (1992) | dejavu2.exe | NE for Windows 3.x | 653312 | 
Sid Meier's Civilization II - The Collector's Edition (1996) | delevent.exe | MS-DOS executable | 10431 | 
Journeyman Project 2, The - Buried in Time (1995) | demohelp.exe | NE for Windows 3.x | 29952 | 
Barbie Fashion Designer (1996) | design.exe | NE for Windows 3.x | 384064 | 
Indiana Jones and his Desktop Adventures (1996) | deskadv.exe | NE for Windows 3.x | 264208 | 
Dust - A Tale of the Wired West (1995) | df.exe | PE32 for Windows | 340480 | 
Sportsman's Paradise (1998) | dh2.exe | NE for Windows 3.x | 1319712 | 
Fisher-Price Dream Doll House (1995) | dhouse.exe | NE for Windows 3.x | 307840 | 
Nine Worlds (1996) | diaga2s.exe | NE for Windows 3.x | 20064 | 
Microsoft Encarta '94 (1993) | dict.exe | NE for Windows 3.x | 293376 | 
Eyewitness Virtual Reality Dinosaur Hunter (1996) | dino.exe | NE for Windows 3.x | 1705280 | 
Dinosaur Museum (1997) | dino16.exe | NE for Windows 3.x | 2060180 | 
3-D Dinosaur Adventure Anniversary Edition (1997) | dino3d.exe | NE for Windows 3.x | 37736 | 
Jurassic Art (1997) | dinodraw.exe | NE for Windows 3.x | 1421088 | 
Aesop's Fables (1994) | discis.exe | NE for Windows 3.x | 505360 | 
Diva X - Ariana (1995) | diva1.exe | NE for Windows 3.x | 2661665 | 
Diversions Slots (1996) | divslots.exe | NE for Windows 3.x | 568376 | 
Eyewitness Virtual Reality Bird (1995) | dkswtchw.exe | NE for Windows 3.x | 4864 | 
Karma - Curse of the 12 Caves (1995) | dlaunch.exe | NE for Windows 3.x | 53248 | 
Dilbert - Not Just A Calendar (1997) | dllchk16.exe | NE for Windows 3.x | 5728 | 
Dilbert - Not Just A Calendar (1997) | dllchk32.exe | PE32 for Windows | 18944 | 
Dodger (1994) | dodger.exe | NE for Windows 3.x | 140832 | 
Putt-Putt and Pep's Dog on a Stick (1996) | dog.exe | NE for Windows 3.x | 21648 | 
Dogz - Your Computer Pet (1995) | dogz.exe | NE for Windows 3.x | 54802 | 
Activision's Atari 2600 Action Pack 2 (1995) | dolphin.exe | NE for Windows 3.x | 44032 | 
Vortex, The - Quantum Gate II (1994) | dontread.exe | NE for Windows 3.x | 67672 | 
Symantec Game Pack (1991) | dots.exe | NE for Windows 3.x | 73856 | 
Area D (1997) | doubletopdemo.exe | PE32 for Windows, InstallShield | 2687140 | 
3-D Dinosaur Adventure Anniversary Edition (1997) | dp.exe | NE for Windows 3.x | 320304 | 
Thinkin' Things Collection 1 (1993) | dparents.exe | NE for Windows 3.x | 5808 | 
Golf Pro 2000 Downunder (1997) | dpmiload.exe | MS-DOS executable | 22324 | 
Dracula in London (1993) | dracwin.exe | NE for Windows 3.x | 866601 | 
Dragon in a Wagon (1997) | dragon.exe | NE for Windows 3.x | 1288211 | 
Area D (1997) | dragontilesdemo.exe | PE32 for Windows, InstallShield | 3016460 | 
Activision's Atari 2600 Action Pack 2 (1995) | dragster.exe | NE for Windows 3.x | 44032 | 
Time Warp of Dr. Brain, The (1996) | drbrain4.exe | PE32 for Windows | 777728 | 
X-Fools, The - The Spoof is out There (1997) | driven16.exe | NE for Windows 3.x | 986079 | 
Mr. Drumstix' Music Studio (1993) | drumstix.exe | NE for Windows 3.x | 580608 | 
Drain Storm (1997) | ds.exe | NE for Windows 3.x | 486816 | 
Star Warped (1997) | dsd16.exe | NE for Windows 3.x | 2280679 | 
Duck City (1996) | duckcity.exe | NE for Windows 3.x | 141488 | 
Dust - A Tale of the Wired West (1995) | dust.exe | NE for Windows 3.x | 69632 | 
Area D (1997) | dxsetup.exe | PE32 for Windows | 147456 | 
Sink Sub Pro (1997) | e-reg.exe | NE for Windows 3.x | 199168 | 
Math Blaster - Episode 2 - Secret of the Lost City (1994) | e2cd16.exe | NE for Windows 3.x | 465264 | 
Math Blaster - Episode 2 - Secret of the Lost City (1994) | e2edit.exe | NE for Windows 3.x | 189296 | 
Beyond Planet Earth (1994) | earth.exe | NE for Windows 3.x | 299008 | 
Complete MAUS, The (1995) | ebwin.exe | NE for Windows 3.x | 274400 | 
Ecco the Dolphin (1995) | eccowin.exe | NE for Windows 3.x | 790528 | 
Econ's Arena (1994) | econ.exe | NE for Windows 3.x | 360960 | 
ZAARK and the Night Team - The Quest for Patterns (1995) | edc_app.exe | NE for Windows 3.x | 124395 | 
Perfect Partner Bridge (1995) | editebs.exe | NE for Windows 3.x | 31031 | 
American Civil War - From Sumter to Appomattox (1996) | editor.exe | NE for Windows 3.x | 771072 | 
Thinkin' Things Collection 3 (1995) | edlaunch.exe | PE32 for Windows | 132096 | 
Thinkin' Things Collection 2 (1995) | edmkgrp.exe | NE for Windows 3.x | 10876 | 
Power Politics (1992) | election.exe | NE for Windows 3.x | 2042304 | 
Guignols De L'Info, Les...Le Jeu ! (1995) | elm.exe | NE for Windows 3.x | 697216 | 
FunPack (1993) | eml.exe | NE for Windows 3.x | 52800 | 
Emlith (1992) | emlith.exe | NE for Windows 3.x | 46528 | 
EmPipe (1993) | empipe.exe | NE for Windows 3.x | 368304 | 
World Empire III (1994) | empire.exe | NE for Windows 3.x | 411785 | 
World Empire IV (1996) | empireiv.exe | NE for Windows 3.x | 746828 | 
Enemy Nations (1996) | enations.exe | PE32 for Windows | 1866240 | 
Microsoft Encarta '94 (1993) | encart94.exe | NE for Windows 3.x | 1341952 | 
Microsoft Encarta '95 (1994) | encart95.exe | NE for Windows 3.x | 2171456 | 
Endorfun (1995) | endorf95.exe | PE32 for Windows | 218112 | 
Endorfun (1995) | endorfun.exe | NE for Windows 3.x | 238080 | 
Activision's Atari 2600 Action Pack 2 (1995) | enduro.exe | NE for Windows 3.x | 44032 | 
Chessmaster 4000 Turbo, The (1993) | engine.exe | NE for Windows 3.x | 185774 | 
Glider 4.0 for Windows (1994) | enjoy.exe | NE for Windows 3.x | 361728 | 
Expect No Mercy (1995) | enomercy.exe | NE for Windows 3.x | 341152 | 
Entombed (1994) | entombed.exe | NE for Windows 3.x | 277984 | 
Disney's The Jungle Book (1994) | epremove.exe | PE32 for Windows | 35328 | 
You Don't Know Jack (1995) | ereg16.exe | NE for Windows 3.x | 218672 | 
You Don't Know Jack - Television (1997) | ereg32.exe | NE for Windows 3.x | 77085 | 
Storybook Weaver Deluxe (1994) | ereglink.exe | NE for Windows 3.x | 47957 | 
EarthSiege 2 (1996) | es.exe | PE32 for Windows | 42016 | 
Jongg CD!, The (1997) | escapade.exe | PE32 for Windows | 933888 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | escher.exe | NE for Windows 3.x | 197999 | 
Evocation 2 - The Dream (1994) | evo_2.exe | NE for Windows 3.x | 7165204 | 
X-Fools, The - The Spoof is out There (1997) | ewok16.exe | NE for Windows 3.x | 933409 | 
Expert Chess (1994) | exchess.exe | NE for Windows 3.x | 439600 | 
Chessmaster 4000 Turbo, The (1993) | exe5er.exe | NE for Windows 3.x | 189500 | 
Exile - Escape from the Pit (1995) | exile.exe | NE for Windows 3.x | 2284032 | 
Exile II - Crystal Souls (1996) | exile2.exe | NE for Windows 3.x | 3246592 | 
Exile II - Crystal Souls (1996) | exile2ed.exe | NE for Windows 3.x | 371200 | 
Exile III - Ruined World (1996) | exile3.exe | NE for Windows 3.x | 3972608 | 
Exile III - Ruined World (1996) | exile3ed.exe | NE for Windows 3.x | 526848 | 
Exile - Escape from the Pit (1995) | exileed.exe | NE for Windows 3.x | 340203 | 
1942 - The Pacific Air War Gold (1994) | exitwin.exe | NE for Windows 3.x | 54228 | 
Hell Cab (1993) | expand.exe | MZ for MS-DOS Self-extracting PKZIP archive | 29378 | 
Microsoft Dangerous Creatures (1994) | explore.exe | NE for Windows 3.x | 254464 | 
Bricks (1996) | extobmp.exe | NE for Windows 3.x | 12512 | 
Microsoft Bob (1995) | extract.exe | MS-DOS executable | 78438 | 
National Lampoon's Blind Date (1994) | ezgrp.exe | NE for Windows 3.x | 27136 | 
ID4 Mission Disks (1996) | f18.exe | NE for Windows 3.x | 1691893 | 
Triple Threat - An Arcade Adventure (1995) | f18nfz.exe | NE for Windows 3.x | 3849744 | 
Operation - Inner Space (1994) | factory.exe | NE for Windows 3.x | 39536 | 
Let's Explore the Farm (1995) | farm.exe | NE for Windows 3.x | 35328 | 
Fate of the Starlords (1994) | fatestar.exe | NE for Windows 3.x | 9872 | 
KidWorks 2 (1993) | fb_ngn.exe | NE for Windows 3.x | 29184 | 
Opening Night (1995) | fbvngn.exe | NE for Windows 3.x | 30720 | 
Flight Commander 2 (1994) | fc.exe | NE for Windows 3.x | 1150976 | 
Flight Commander 2 (1994) | fcmb.exe | NE for Windows 3.x | 412672 | 
Felix The Cat's Cartoon Toolbox (1995) | felix.exe | NE for Windows 3.x | 694477 | 
Jump Start 1st Grade (1995) | fg.exe | NE for Windows 3.x | 388448 | 
Brickbuster (1995) | fighter.exe | NE for Windows 3.x | 135680 | 
RollOver (1997) | fimain.exe | NE for Windows 3.x | 376160 | 
Fisherman's Delight (1996) | fishd121.exe | NE for Windows 3.x | 109912 | 
Fisherman's Delight (1996) | fishd211.exe | NE for Windows 3.x | 122712 | 
Activision's Atari 2600 Action Pack (1995) | fishderb.exe | NE for Windows 3.x | 58263 | 
Jongg CD!, The (1997) | fjiggler.exe | PE32 for Windows | 1251840 | 
Fast Action Paq (1993) | flak.exe | NE for Windows 3.x | 342528 | 
Flight Sim Toolkit (1993) | fly.exe | MZ for MS-DOS | 267793 | 
Creatures (1997) | fnrlkit.exe | PE32 for Windows | 289792 | 
Fields of Battle (1995) | fob.exe | NE for Windows 3.x | 863232 | 
Alice - Interactive Museum (1994) | follow.exe | NE for Windows 3.x | 685345 | 
Jurassic Art (1997) | fontmgr.exe | NE for Windows 3.x | 526528 | 
AFL Finals Fever (1996) | footy.exe | LE executable for MS-DOS, DOS4GW DOS extender | 293463 | 
AFL Finals Fever (1996) | footylr.exe | LE executable for MS-DOS, DOS4GW DOS extender | 273891 | 
Las Vegas Super Casino (1997) | forms.exe | NE for Windows 3.x | 109072 | 
Fun Pack 3 (1995) | fortress.exe | NE for Windows 3.x | 548385 | 
Fox Hunt (1996) | foxhunt.exe | NE for Windows 3.x | 341008 | 
Doonesbury Election Game Campaign '96, The (1995) | fplayer.exe | NE for Windows 3.x | 12432 | 
Interactive History of Frankenstein (1995) | frank.exe | NE for Windows 3.x | 741818 | 
Frankenstein - Through the Eyes of the Monster (1995) | frankie.exe | NE for Windows 3.x | 2229509 | 
Residents, The - Freak Show (1994) | freaks.exe | NE for Windows 3.x | 695893 | 
Freddi Fish and the Case of the Missing Kelp Seeds (1995) | freddi.exe | NE for Windows 3.x | 21696 | 
Freddi Fish 2 - The Case of the Haunted School House (1996) | freddi2.exe | NE for Windows 3.x | 21616 | 
Freddi Fish 3 - The Case of the Stolen Conch Shell (1998) | freddi3.exe | NE for Windows 3.x | 21616 | 
FreeCell Plus (1996) | freeplus.exe | NE for Windows 3.x | 74792 | 
Activision's Atari 2600 Action Pack (1995) | freeway.exe | NE for Windows 3.x | 58263 | 
Activision's Atari 2600 Action Pack (1995) | frstbite.exe | NE for Windows 3.x | 58263 | 
Fructus (1995) | fructus.exe | NE for Windows 3.x | 49920 | 
Fruit-Picker (1996) | fruit-picker.exe | NE for Windows 3.x | 61744 | 
Microsoft Entertainment Pack 3 (1991) | fujigolf.exe | NE for Windows 3.x | 253952 | 
Full Tilt! Pinball (1996) | fulltilt.exe | NE for Windows 3.x | 332288 | 
F!Zone (1996) | fury3.exe | PE32 for Windows | 645120 | 
F!Zone (1996) | furyedit.exe | PE32 for Windows | 545280 | 
Gadget - Invention, Travel and Adventure (1995) | gadget.exe | NE for Windows 3.x | 369009 | 
Focus Essential Senior Word Games (1997) | games.exe | NE for Windows 3.x | 271056 | 
Legions (1994) | gamex.exe | NE for Windows 3.x | 8291840 | 
Gazillionaire (1994) | gaz.exe | NE for Windows 3.x | 1075305 | 
Gazillionaire Deluxe (1997) | gaz2.exe | NE for Windows 3.x | 1067371 | 
Gazillionaire (1994) | gazshare.exe | NE for Windows 3.x | 507707 | 
GayBlade (1992) | gblade.exe | NE for Windows 3.x | 672896 | 
American Civil War - From Sumter to Appomattox (1996) | gconcsa.exe | NE for Windows 3.x | 1938715 | 
American Civil War - From Sumter to Appomattox (1996) | gconusa.exe | NE for Windows 3.x | 1659143 | 
This Means War! (1996) | gdetect.exe | NE for Windows 3.x | 17520 | 
Gearheads (1996) | gear_en.exe | NE for Windows 3.x | 272896 | 
Gecko Shuffle (1994) | gecko.exe | NE for Windows 3.x | 78336 | 
GemStorm (1995) | gemstorm.exe | NE for Windows 3.x | 3859968 | 
GeoSafari - Animals (1996) | geoanmls.exe | NE for Windows 3.x | 933769 | 
Sid Meier's Civilization II (1996) | get_info.exe | NE for Windows 3.x | 11087239 | 
Ghosts (1995) | ghosts.exe | NE for Windows 3.x | 165264 | 
3D Thinking Lab (1998) | ginsu.exe | PE32 for Windows | 1669632 | 
Microsoft Golf 2.0 (1995) | glf2help.exe | NE for Windows 3.x | 256736 | 
Microsoft Golf 2.0 (1995) | glfmod2m.exe | PE32 for Windows | 1669120 | 
Microsoft Golf (1992) | glfmod3.exe | NE for Windows 3.x | 741744 | 
Glider 4.0 for Windows (1994) | glider.exe | NE for Windows 3.x | 1853696 | 
Glider 4.0 for Windows (1994) | glidercd.exe | NE for Windows 3.x | 285440 | 
Power - The Game (1995) | gmlink.exe | NE for Windows 3.x | 49792 | 
Yearn2Learn - Master Snoopy's World Geography (1995) | go.exe | NE for Windows 3.x | 273920 | 
Microsoft Entertainment Pack 4 (1992) | gofigure.exe | NE for Windows 3.x | 70663 | 
Solitaire Twin Pack (1995) | golf.exe | NE for Windows 3.x | 158756 | 
Twisted Mini Golf (1995) | golf32.exe | PE32 for Windows | 159232 | 
Sensible Golf (1994) | golfdos.exe | LE for MS-DOS, DOS4GW DOS extender (embedded) | 582895 | 
Golf Pro 2000 Downunder (1997) | golfpro.exe | NE for OS/2 1.x | 602112 | 
Sensible Golf (1994) | golfwin.exe | PE32 for Windows | 239616 | 
Gord@k (1997) | gordakcd.exe | NE for Windows 3.x | 737262 | 
PBA Bowling (1995) | gpba.exe | PE32 for Windows | 278528 | 
Titanic - A Mysterious Undersea Adventure (1998) | gplay16.exe | NE for Windows 3.x | 267136 | 
Area D (1997) | gplay32_.exe | PE32 for Windows | 370176 | 
Grand Prix Manager (1995) | gpm.exe | NE for Windows 3.x | 1514896 | 
Grand Prix Manager 2 (1996) | gpm2.exe | NE for Windows 3.x | 2388976 | 
Time Out Sports - Baseball (1994) | grab.exe | NE for Windows 3.x | 55808 | 
Grackon's Curse (1995) | grackon.exe | NE for Windows 3.x | 694293 | 
Monty Python and the Quest for the Holy Grail (1996) | grail.exe | NE for Windows 3.x | 96656 | 
Great War, The (1995) | greatwar.exe | NE for Windows 3.x | 806124 | 
Mystery at Greveholm, The (1997) | greve16.exe | NE for Windows 3.x | 1041257 | 
Area D (1997) | gridrunnerdemo.exe | PE32 for Windows, InstallShield | 7702725 | 
Activision's Atari 2600 Action Pack (1995) | grndprix.exe | NE for Windows 3.x | 58263 | 
Book of Shadowboxes, The (1995) | grnpnt.exe | NE for Windows 3.x | 85088 | 
Grossology (1997) | gross.exe | NE for Windows 3.x | 1209256 | 
Great War, The (1995) | grtwar.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Tue May 28 05:03:51 1985, uncompressed size 2311863, method=deflate | 1027626 | 
Jurassic Art (1997) | gs_juras.exe | NE for Windows 3.x | 1326137 | 
Corporate Pursuit (1996) | gsw.exe | NE for Windows 3.x | 286720 | 
Green Thumb Cards (1996) | gtc16.exe | NE for Windows 3.x | 2221796 | 
Get the Girl! (1993) | gtg.exe | NE for Windows 3.x | 538434 | 
Countdown (1992) | guide.exe | NE for Windows 3.x | 185620 | 
American Civil War - From Sumter to Appomattox (1996) | guncsa.exe | NE for Windows 3.x | 2198857 | 
American Civil War - From Sumter to Appomattox (1996) | gunusa.exe | NE for Windows 3.x | 1755067 | 
Philip Marlowe Private Eye (1996) | halftone.exe | NE for Windows 3.x | 12080 | 
Battle Hamster (1995) | hamster.exe | NE for Windows 3.x | 837383 | 
Crosswords and Word Games (1995) | hangman.exe | NE for Windows 3.x | 742208 | 
Creatures (1997) | hatchery.exe | PE32 for Windows | 252416 | 
Magic Theatre - Haunted House (1995) | haunted.exe | NE for Windows 3.x | 478656 | 
Hawaii High - The Mystery of the Tiki (1994) | hawaii.exe | NE for Windows 3.x | 712673 | 
Disney's Animated Storybook - The Hunchback of Notre Dame (1996) | hb_asb.exe | NE for Windows 3.x | 533120 | 
Disney's Animated Storybook - The Hunchback of Notre Dame (1996) | hb_del.exe | NE for Windows 3.x | 15520 | 
High Command (1992) | hc.exe | NE for Windows 3.x | 156160 | 
Hell Cab (1993) | hco.exe | NE for Windows 3.x | 366734 | 
Hell Cab (1993) | hcow.exe | NE for Windows 3.x | 366734 | 
Hell Cab (1993) | hcwindow.exe | NE for Windows 3.x | 375246 | 
Hearts for Windows (1991) | hearts.exe | NE for Windows 3.x | 189968 | 
Backyard Baseball (1997) | heini.exe | NE for Windows 3.x | 14912 | 
Iron Helix (1993) | helix.exe | NE for Windows 3.x | 428720 | 
Hell Cab (1993) | hellcab.exe | NE for Windows 3.x | 375246 | 
Castle of the Winds (1993) | helpme.exe | MS-DOS executable | 13936 | 
Nautical Number Hunt (1998) | helpvwr.exe | PE32 for Windows | 371712 | 
Disney's Animated Storybook - Hercules (1997) | herc_asb.exe | NE for Windows 3.x | 543040 | 
Disney's Animated Storybook - Hercules (1997) | herc_del.exe | NE for Windows 3.x | 17056 | 
Full Tilt! 2 Pinball (1996) | hero.exe | NE for Windows 3.x | 823312 | 
Hero Defiant (1998) | herodef.exe | NE for Windows 3.x | 736992 | 
Brainiacs (1995) | hex.exe | NE for Windows 3.x | 227296 | 
Jan Pienkowski Haunted House (1995) | hhdelete.exe | NE for Windows 3.x | 13568 | 
Magic Theatre - Haunted House (1995) | hhelp.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Sun Apr 19 23:15:33 1987, uncompressed size 131620, method=deflate | 52751 | 
Gahan Wilson's The Ultimate Haunted House (1994) | hhouse.exe | NE for Windows 3.x | 3181345 | 
Bricks (1996) | hidesel.exe | NE for Windows 3.x | 5808 | 
Young Dilbert Hi-Tech Hijinks (1997) | hijinks.exe | NE for Windows 3.x | 30104 | 
Hoyle Classic Card Games (1997) | hipoker2.exe | PE32 for Windows | 528384 | 
Creatures (1997) | hlthkit.exe | PE32 for Windows | 320000 | 
Hollywood Mogul (1997) | hmchange.exe | NE for Windows 3.x | 271967 | 
Activision's Atari 2600 Action Pack 2 (1995) | hockey.exe | NE for Windows 3.x | 44032 | 
Hodj 'n' Podj (1995) | hodjpodj.exe | NE for Windows 3.x | 169936 | 
Area D (1997) | holeinonedemo.exe | PE32 for Windows, InstallShield | 3018994 | 
Holiday Island (1996) | holiday.exe | NE for Windows 3.x | 688624 | 
Holiday Island (1996) | holiuvbe.exe | NE for Windows 3.x | 18750 | 
Hollywood (1995) | hollywd.exe | NE for Windows 3.x | 545593 | 
Microsoft Bob (1995) | home.exe | NE for Windows 3.x | 288512 | 
Hooves of Thunder! (1996) | hooves.exe | PE32 for Windows | 532480 | 
Brainiacs (1995) | hoppers.exe | NE for Windows 3.x | 233584 | 
Day at the Races, A (1994) | horse.exe | NE for Windows 3.x | 177664 | 
History of the World (1997) | hotw.exe | NE for Windows 3.x | 2931456 | 
Hoyle Classic Games (1998) | hoylecg.exe | NE for Windows 3.x | 649084 | 
Pink Panther, The - Hokus Pokus Pink (1998) | hpp.exe | PE32 for Windows | 697856 | 
Hard Evidence - The Marilyn Monroe Files (1995) | hrdevdnc.exe | NE for Windows 3.x | 751981 | 
Hyperoid (1991) | hyperoid.exe | NE for Windows 3.x | 50752 | 
Better Home And Gardens Complete Guide To Gardening (1999) | iaprtshr.exe | NE for Windows 3.x | 4576 | 
Island Casino (1995) | ic.exe | NE for Windows 3.x | 1631778 | 
Icebreaker (1996) | ice.exe | NE for Windows 3.x | 227520 | 
Icebreaker (1996) | icemaker.exe | NE for Windows 3.x | 268016 | 
Lemmings for Windows (1995) | icon.exe | NE for Windows 3.x | 3920 | 
Adventures of Pinocchio, The (1996) | icssctwt.exe | PE32 for Windows | 373760 | 
Adventures of Pinocchio, The (1996) | icssfbwt.exe | PE32 for Windows | 108544 | 
Adventures of Pinocchio, The (1996) | icswinmm.exe | NE for Windows 3.x | 29728 | 
Adventures of Pinocchio, The (1996) | icthresh.exe | PE32 for Windows | 68096 | 
Adventures of Pinocchio, The (1996) | icwinsrv.exe | PE32 for Windows | 179712 | 
Adventures of Pinocchio, The (1996) | icwordx.exe | PE32 for Windows | 190464 | 
Adventures of Pinocchio, The (1996) | icwrpccl.exe | NE for Windows 3.x | 43328 | 
Adventures of Pinocchio, The (1996) | icwrpcsv.exe | NE for Windows 3.x | 27344 | 
Microsoft Entertainment Pack 2 (1991) | idlewild.exe | NE for Windows 3.x | 24672 | 
Ice and Fire (1995) | if_w.exe | PE32 for Windows | 741376 | 
It's a Funny Old Game (1996) | ifog.exe | NE for Windows 3.x | 673632 | 
Dilbert Screen Saver Collection (1994) | iminst2.exe | NE for Windows 3.x | 75888 | 
Dilbert Screen Saver Collection (1994) | iminst3.exe | NE for Windows 3.x | 5600 | 
Improv Presents, The - Don't Quit Your Day Job (1996) | improv.exe | NE for Windows 3.x | 730079 | 
Devo Presents - Adventures of the Smart Patrol (1996) | incoming.exe | NE for Windows 3.x | 746300 | 
GeoSafari - Animals (1996) | info.exe | MZ for MS-DOS | 28801 | 
Phantasmagoria (1995) | innw.exe | NE for Windows 3.x | 12512 | 
Operation - Inner Space (1994) | inspace.exe | NE for Windows 3.x | 310112 | 
Mosaic (1993) | inst-drv.exe | MS-DOS executable | 19010 | 
Blades of Exile (1999) | install.exe | NE for Windows 3.x | 3744377 | 
Pilgrim - Faith as a Weapon (1998) | instdisk.exe | NE for Windows 3.x | 375544 | 
Space Bastards (1996) | instwing.exe | NE for Windows 3.x | 61952 | 
Dilbert Screen Saver Collection (1994) | intermis.exe | NE for Windows 3.x | 96736 | 
American Civil War - From Sumter to Appomattox (1996) | intro.exe | NE for Windows 3.x | 10168417 | 
Brickbuster (1995) | invaders.exe | NE for Windows 3.x | 61440 | 
Super Spy (1996) | irsetup.exe | NE for Windows 3.x | 196976 | 
Arthur's Reading Race (1996) | is_setup.exe | NE for Windows 3.x | 44064 | 
Aviation Adventure (1994) | iscore.exe | MS-DOS executable | 30016 | 
Enemy Nations (1996) | iserve.exe | PE32 for Windows | 141824 | 
Symantec Game Pack (1991) | jacks.exe | NE for Windows 3.x | 113776 | 
EarthSiege 2 (1996) | jconfig.exe | PE32 for Windows | 53792 | 
1942 - The Pacific Air War Gold (1994) | jemmex.exe | MS-DOS executable | 30075 | 
Jeopardy TV and Movie Pack (1996) | jeopardy.exe | NE for Windows 3.x | 637440 | 
Jewel Master (1992) | jewels.exe | NE for Windows 3.x | 187952 | 
Jewels II - The Ultimate Challenge (1998) | jewsii31.exe | NE for Windows 3.x | 977853 | 
JezzBall (1992) | jezzball.exe | NE for Windows 3.x | 49664 | 
Jongg CD!, The (1997) | jiggle3d.exe | PE32 for Windows | 1453568 | 
Microsoft Entertainment Pack 2 (1991) | jigsawed.exe | NE for Windows 3.x | 66904 | 
Jixxa (1995) | jixxa.exe | NE for Windows 3.x | 166848 | 
Jewels of the Oracle (1995) | jlaunch.exe | NE for Windows 3.x | 49664 | 
Juilliard Music Adventure (1995) | jma.exe | NE for Windows 3.x | 572339 | 
Journeyman Project, The - Turbo! (1994) | jman.exe | NE for Windows 3.x | 480160 | 
Journeyman Project, The - Turbo! (1994) | jman_.exe | NE for Windows 3.x | 480160 | 
Mosaic (1993) | jointvoc.exe | MS-DOS executable | 10391 | 
Jolly Postman's Party, The (1997) | jpunin.exe | NE for Windows 3.x | 62603 | 
Jump Start Baby (1999) | jsbaby.exe | NE for Windows 3.x | 286256 | 
Jump Start Kindergarten Reading (1996) | jskr.exe | NE for Windows 3.x | 36850 | 
Jumanji (1997) | jumanji.exe | PE32 for Windows | 498176 | 
Jump - The David Bowie Interactive CD-ROM (1994) | jump.exe | NE for Windows 3.x | 684317 | 
Brain Games For Windows (1992) | jumper.exe | NE for Windows 3.x | 19557 | 
Jungle Book (1996) | jungle.exe | NE for Windows 3.x | 2298496 | 
Disney's The Jungle Book (1994) | junglew.exe | PE32 for Windows | 265728 | 
Jewel Thief (1992) | jwlthief.exe | NE for Windows 3.x | 134242 | 
Activision's Atari 2600 Action Pack (1995) | kaboom.exe | NE for Windows 3.x | 58263 | 
Jump Start Pre-K (1996) | kaload.exe | NE for Windows 3.x | 27196 | 
Karma - Curse of the 12 Caves (1995) | karma.exe | NE for Windows 3.x | 697047 | 
Karma - Curse of the 12 Caves (1995) | karmhint.exe | NE for Windows 3.x | 1125133 | 
Aviation Adventure (1994) | kawin.exe | NE for Windows 3.x | 6194 | 
Keroppi Day Hopper (1994) | keroppi.exe | NE for Windows 3.x | 371272 | 
Exile - Escape from the Pit (1995) | keygen_editor.exe | PE32 for Windows | 67072 | 
Exile - Escape from the Pit (1995) | keygen_game.exe | PE32 for Windows, UPX compressed | 67072 | 
Activision's Atari 2600 Action Pack 2 (1995) | keystone.exe | NE for Windows 3.x | 44032 | 
Bricks (1996) | kidbrick.exe | NE for Windows 3.x | 1207008 | 
Kid Riffs (1995) | kidriffs.exe | NE for Windows 3.x | 8686 | 
Gahan Wilson's The Ultimate Haunted House (1994) | kidscat.exe | NE for Windows 3.x | 11264 | 
KidWorks 2 (1993) | kidworks.exe | NE for Windows 3.x | 401872 | 
Dark Seed II (1995) | killdsii.exe | NE for Windows 3.x | 7536 | 
Mind of a Killer (1995) | killmap.exe | NE for Windows 3.x | 149024 | 
Babylon 5 - Shadow Wars (1997) | killreg.exe | NE for Windows 3.x | 14688 | 
Hello Kitty - Big Fun Deluxe (1994) | kitty.exe | NE for Windows 3.x | 703689 | 
Star Trek - Klingon (1996) | klingon.exe | NE for Windows 3.x | 318014 | 
Microsoft Entertainment Pack 3 (1991) | klotski.exe | NE for Windows 3.x | 147584 | 
Virtual K'Nex (1998) | knex16.exe | PE32 for Windows | 629248 | 
Brain Games For Windows (1992) | knight.exe | NE for Windows 3.x | 19045 | 
Area D (1997) | knightmaredemo.exe | PE32 for Windows, InstallShield | 5330912 | 
Klik and Play (1994) | knp.exe | NE for Windows 3.x | 421504 | 
Koala Lumpur - Journey to the Edge (1997) | koala.exe | NE for Windows 3.x | 698880 | 
Sacred Mirror of Kofun, The (1996) | kofun.exe | NE for Windows 3.x | 932864 | 
Sacred Mirror of Kofun, The (1996) | kofunvr.exe | NE for Windows 3.x | 932864 | 
Klik and Play (1994) | kpschool.exe | NE for Windows 3.x | 5084759 | 
Liberation of Kuwait, The (1991) | kuwait.exe | NE for Windows 3.x | 130512 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | kye.exe | NE for Windows 3.x | 339968 | 
Kyodai (1997) | kyodai.exe | NE for Windows 3.x | 217344 | 
L-Zone (1993) | l_zone.exe | NE for Windows 3.x | 370009 | 
Live Action Football (1994) | laf.exe | NE for Windows 3.x | 232464 | 
Star Trek - Klingon (1996) | langlab.exe | NE for Windows 3.x | 405248 | 
Timelapse (1996) | lapse.exe | NE for Windows 3.x | 89216 | 
Activision's Atari 2600 Action Pack 2 (1995) | lasblast.exe | NE for Windows 3.x | 44032 | 
Laserstrike (1993) | laser.exe | NE for Windows 3.x | 133888 | 
3D Thinking Lab (1998) | launch.exe | PE32 for Windows | 503808 | 
Creatures (1997) | launcher.exe | PE32 for Windows | 197120 | 
Guignols De L'Info, Les...Le Jeu ! (1995) | le_jeu.exe | NE for Windows 3.x | 37904 | 
Lemmings for Windows (1995) | lemmings.exe | PE32 for Windows | 113152 | 
Lenny's Music Toons (1993) | lenny.exe | NE for Windows 3.x | 138240 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | lens16.exe | NE for Windows 3.x | 96048 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | lens32.exe | PE32 for Windows | 40960 | 
Lenny's Music Toons (1993) | lensnoop.exe | NE for Windows 3.x | 18432 | 
How the Leopard Got His Spots (1995) | leopard.exe | NE for Windows 3.x | 32496 | 
Focus Essential Senior Word Games (1997) | letrlink.exe | NE for Windows 3.x | 326896 | 
Microsoft Bob (1995) | letter.exe | NE for Windows 3.x | 194102 | 
TZ-Breakout (1996) | levedit.exe | NE for Windows 3.x | 299008 | 
Space Bucks (1996) | lha.exe | MS-DOS executable | 34283 | 
Wheel Of Fortune Featuring Vanna White (1992) | lharc.exe | MS-DOS executable | 31256 | 
Microsoft Entertainment Pack 3 (1991) | lifegen.exe | NE for Windows 3.x | 60752 | 
Lights Out 3D (1996) | lights.exe | NE for Windows 3.x | 691061 | 
Disney's Animated Storybook - The Lion King (1995) | lionking.exe | NE for Windows 3.x | 286400 | 
Literati (1994) | litlite.exe | NE for Windows 3.x | 451376 | 
Disney's The Lion King Activity Center (1995) | lkac.exe | NE for Windows 3.x | 1295552 | 
Loony Labyrinth (1995) | llwin16.exe | NE for Windows 3.x | 16192 | 
Loony Labyrinth (1995) | llwin32g.exe | PE32 for Windows | 165376 | 
Loony Labyrinth (1995) | llwin32s.exe | PE32 for Windows | 165376 | 
Total Mayhem (1996) | loader.exe | NE for Windows 3.x | 288272 | 
Sensible Golf (1994) | loadpats.exe | MS-DOS executable | 49194 | 
Lode Runner - The Legend Returns (1994) | loderunn.exe | NE for Windows 3.x | 463360 | 
Pajama Sam - Lost and Found (1998) | lost.exe | NE for Windows 3.x | 21616 | 
Timmy and the Magic Pictures (1995) | lostdemo.exe | NE for Windows 3.x | 387840 | 
Louis Cat Orze - The Mystery Of The Queen's Necklace (1995) | louis.exe | NE for Windows 3.x | 719433 | 
Reader Rabbit and Friends - Let's Start Learning (1995) | lslwin.exe | NE for Windows 3.x | 250880 | 
Lucas's Problem (1990) | lucas.exe | NE for Windows 3.x | 39936 | 
Lunacy for Windows (1995) | lunacy.exe | NE for Windows 3.x | 115968 | 
Arcade Mania (1995) | lunarfox.exe | PE32 for Windows | 288256 | 
Blob Factory (1996) | lvledit.exe | NE for Windows 3.x | 15139 | 
Mission 9 (1995) | m9.exe | NE for Windows 3.x | 581382 | 
Maabus (1995) | maabus.exe | NE for Windows 3.x | 257800 | 
Macbeth (1995) | macbeth.exe | NE for Windows 3.x | 316107 | 
MacBlaster (1992) | macblast.exe | NE for Windows 3.x | 51712 | 
Full Tilt! 2 Pinball (1996) | mad.exe | NE for Windows 3.x | 813584 | 
Wild World of Madison Jaxx (1994) | madison.exe | NE for Windows 3.x | 746364 | 
Magic Death, The - Virtual Murder 2 (1993) | magic.exe | NE for Windows 3.x | 375298 | 
MagnaFlux Runner (1993) | magnarun.exe | NE for Windows 3.x | 1652512 | 
Microsoft Bob (1995) | mailroom.exe | NE for Windows 3.x | 144434 | 
Hanna-Barbera's Cartoon Carnival (1995) | makeicon.exe | NE for Windows 3.x | 37888 | 
Mosaic (1993) | makepv.exe | MS-DOS executable | 10053 | 
Jongg CD!, The (1997) | maketile.exe | NE for Windows 3.x | 58400 | 
Myst (1993) | making.exe | NE for Windows 3.x | 341008 | 
Total Mayhem (1996) | mania.exe | NE for Windows 3.x | 990736 | 
Nitemare-3D (1994) | maps.exe | NE for Windows 3.x | 120048 | 
Marble Drop (1997) | marble.exe | NE for Windows 3.x | 718864 | 
Madeline And The Magnificent Puppet Show (1995) | mate.exe | NE for Windows 3.x | 185360 | 
Great Math Adventure (1995) | math.exe | NE for Windows 3.x | 116016 | 
Math Heads (1996) | mathhd16.exe | NE for Windows 3.x | 1034189 | 
Complete MAUS, The (1995) | maus.exe | NE for Windows 3.x | 205962 | 
Corporate Pursuit (1996) | mausqest.exe | NE for Windows 3.x | 576810 | 
Maven (1995) | maven.exe | PE32 for Windows | 1056768 | 
Mavis Beacon Teaches Typing! for Kids (1994) | mavkid.exe | NE for Windows 3.x | 423952 | 
Microsoft Entertainment Pack 4 (1992) | maxwell.exe | NE for Windows 3.x | 72704 | 
Brickbuster (1995) | maze.exe | NE for Windows 3.x | 180224 | 
Mazemaker (1992) | mazemakr.exe | NE for Windows 3.x | 82336 | 
Mile Bones (1994) | mb.exe | NE for Windows 3.x | 125952 | 
Microsoft Arcade (1993) | mc.exe | NE for Windows 3.x | 366336 | 
Music Chase 1 - The Music In Me (1995) | mc1.exe | NE for Windows 3.x | 469504 | 
Madeline's Rainy Day Activities (1996) | mccf_.exe | NE for Windows 3.x | 1315401 | 
Madeline's Rainy Day Activities (1996) | mccs_.exe | NE for Windows 3.x | 1289481 | 
McKenzie and Co. (1995) | mckframe.exe | NE for Windows 3.x | 3217950 | 
Activision's Atari 2600 Action Pack 2 (1995) | megaman.exe | NE for Windows 3.x | 44032 | 
Las Vegas Super Casino (1997) | megaslot.exe | NE for Windows 3.x | 1325283 | 
Area D (1997) | menu.exe | PE32 for Windows | 652288 | 
Avalon Casinos (1996) | merge.exe | NE for Windows 3.x | 20784 | 
Metal Marines (1994) | metal.exe | NE for Windows 3.x | 4768000 | 
Metal Marines (1994) | metaltek.exe | NE for Windows 3.x | 5107584 | 
TZ-Minigolf (1995) | mgolf.exe | NE for Windows 3.x | 609792 | 
MicroMan (1993) | micro1.exe | NE for Windows 3.x | 776160 | 
Millie's Math House (1992) | millie.exe | PE32 for Windows | 728064 | 
Milo (1996) | milo.exe | NE for Windows 3.x | 704645 | 
Mind Grind (1996) | mindgrnd.exe | NE for Windows 3.x | 396688 | 
Mind of a Killer (1995) | mindkill.exe | NE for Windows 3.x | 64055 | 
Minesweeper (1992) | mine.exe | NE for Windows 3.x | 27776 | 
Mines (1990) | mines.exe | NE for Windows 3.x | 29940 | 
Brickbuster (1995) | minetrap.exe | NE for Windows 3.x | 214734 | 
3-D Ultra Minigolf (1997) | minigolf.exe | PE32 for Windows | 409088 | 
Nisus Missile Master (1994) | missile.exe | NE for Windows 3.x | 93351 | 
Jongg CD!, The (1997) | mjiggler.exe | PE32 for Windows | 1233408 | 
Pinball Builder - A Construction Kit for Windows (1996) | mkicon.exe | NE for Windows 3.x | 8223 | 
Ms. Metaverse (1995) | mm.exe | NE for Windows 3.x | 189072 | 
Casino Master (1996) | mm7card.exe | NE for Windows 3.x | 69744 | 
BBC Mastermind (1996) | mm_ur.exe | NE for Windows 3.x | 664752 | 
Casino Master (1996) | mmbacrat.exe | NE for Windows 3.x | 44912 | 
Casino Master (1996) | mmbj.exe | NE for Windows 3.x | 137680 | 
Casino Master (1996) | mmcraps.exe | NE for Windows 3.x | 162112 | 
Puzzle Power (1995) | mmcrypto.exe | NE for Windows 3.x | 46512 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | mme.exe | NE for Windows 3.x | 86287 | 
Mosaic (1993) | mmjbox.exe | NE for Windows 3.x | 26816 | 
Casino Master (1996) | mmkeno.exe | NE for Windows 3.x | 38992 | 
Puzzle Power (1995) | mmkkross.exe | NE for Windows 3.x | 111376 | 
AweSome Animated Monster Maker (1997) | mmover.exe | PE32 for Windows | 195584 | 
Casino Master (1996) | mmpaigow.exe | NE for Windows 3.x | 73616 | 
Mosaic (1993) | mmplay.exe | MS-DOS executable | 66926 | 
Casino Master (1996) | mmpoker.exe | NE for Windows 3.x | 50752 | 
Puzzle Power (1995) | mmqfalls.exe | NE for Windows 3.x | 51600 | 
Casino Master (1996) | mmreddog.exe | NE for Windows 3.x | 45776 | 
Africa Trail (1997) | mmrt16.exe | NE for Windows 3.x | 510000 | 
Casino Master (1996) | mmrulet.exe | NE for Windows 3.x | 68448 | 
Casino Master (1996) | mmslots.exe | NE for Windows 3.x | 301184 | 
Puzzle Power (1995) | mmsrch.exe | NE for Windows 3.x | 114992 | 
Casino Master (1996) | mmtexas.exe | NE for Windows 3.x | 71200 | 
AweSome Animated Monster Maker (1997) | mmultra.exe | PE32 for Windows | 440320 | 
Puzzle Power (1995) | mmxword.exe | NE for Windows 3.x | 118912 | 
Johnny Mnemonic (1995) | mnemonic.exe | NE for Windows 3.x | 304608 | 
Aviation Adventure (1994) | moag.exe | MS-DOS executable | 135576 | 
Flight Sim Toolkit (1993) | model.exe | NE for Windows 3.x | 49405 | 
Fast Action Paq (1993) | mole.exe | NE for Windows 3.x | 894976 | 
Monopoly (1995) | monopoly.exe | PE32 for Windows | 282624 | 
Jongg CD!, The (1997) | moraff.exe | PE32 for Windows | 456192 | 
Mordor - The Depths of Dejenol (1995) | mordor.exe | NE for Windows 3.x | 1199633 | 
Jongg CD!, The (1997) | morejong.exe | PE32 for Windows | 1187328 | 
Jongg CD!, The (1997) | moretris.exe | PE32 for Windows | 376320 | 
L'affaire Morlov (1996) | morlov.exe | NE for Windows 3.x | 624656 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | morph.exe | NE for Windows 3.x | 65039 | 
Mortuum (1995) | mort10.exe | NE for Windows 3.x | 62192 | 
Mosaic (1993) | mosaic.exe | NE for Windows 3.x | 195584 | 
You Don't Know Jack Movies (1996) | movies16.exe | NE for Windows 3.x | 476672 | 
Dust - A Tale of the Wired West (1995) | movplay.exe | PE32 for Windows | 168448 | 
Microsoft Multimedia Mozart (1994) | mozart.exe | NE for Windows 3.x | 248343 | 
Monopoly Deluxe (1992) | mp.exe | MZ for MS-DOS | 414000 | 
Incredible Toon Machine, The (1994) | mpc_toon.exe | NE for Windows 3.x | 1171456 | 
Battle Chess Enhanced (1991) | mpcchess.exe | NE for Windows 3.x | 160637 | 
Deadlock - Planetary Conquest (1996) | mpcheck.exe | PE32 for Windows | 173568 | 
Microsoft Encarta '95 (1994) | mpegplay.exe | PE32 for Windows | 144384 | 
Microsoft Encarta '95 (1994) | mpegply.exe | PE32 for Windows | 143360 | 
Quantum Gate (1993) | mplayer.exe | NE for Windows 3.x | 113488 | 
Microsoft Encarta '95 (1994) | mplayer2.exe | NE for Windows 3.x | 14560 | 
Scrabble (1996) | mplaynow.exe | PE32 for Windows | 263168 | 
MayaQuest Trail (1995) | mquest16.exe | NE for Windows 3.x | 637600 | 
Mr. Potato Head Activity Pack (1998) | mrpactpk.exe | NE for Windows 3.x | 1913664 | 
Yearn2Learn - Master Snoopy's World Geography (1995) | ms_geo.exe | NE for Windows 3.x | 710977 | 
Scholastic's The Magic School Bus Explores Inside the Earth (1996) | msbearth.exe | NE for Windows 3.x | 208256 | 
Scholastic's The Magic School Bus Explores the Human Body (1994) | msbhuman.exe | NE for Windows 3.x | 166080 | 
Scholastic's The Magic School Bus Explores the Ocean (1995) | msbocean.exe | NE for Windows 3.x | 4832 | 
Scholastic's The Magic School Bus Explores the Ocean (1995) | msbsea.exe | NE for Windows 3.x | 196864 | 
Scholastic's The Magic School Bus Explores the Solar System (1994) | msbsolar.exe | NE for Windows 3.x | 32576 | 
Ms. Chomp (1992) | mschomp.exe | NE for Windows 3.x | 146832 | 
Microsoft Dangerous Creatures (1994) | msdanger.exe | NE for Windows 3.x | 8272 | 
Microsoft Dinosaurs (1993) | msdinos.exe | NE for Windows 3.x | 2146048 | 
Microsoft Golf 2.0 (1995) | msgolf.exe | NE for Windows 3.x | 43680 | 
Microsoft Musical Instruments (1992) | msinstr.exe | NE for Windows 3.x | 148464 | 
Microsoft Ancient Lands (1994) | mslands.exe | NE for Windows 3.x | 8176 | 
Sheila Rae the Brave (1996) | mssetup.exe | NE for Windows 3.x | 24624 | 
Pinball Builder - A Construction Kit for Windows (1996) | mssw95.exe | MZ for MS-DOS Self-extracting PKZIP archive | 8029 | 
BBC Mastermind (1996) | mstrmnd.exe | NE for Windows 3.x | 193536 | 
Magic Theatre (1994) | mt.exe | NE for Windows 3.x | 383008 | 
Comic Book Confidential (1994) | mtb30net.exe | NE for Windows 3.x | 8928 | 
Evocation 2 - The Dream (1994) | mtb30run.exe | NE for Windows 3.x | 643968 | 
I Can Be an Animal Doctor (1997) | mtplay16.exe | NE for Windows 3.x | 739232 | 
Young Dilbert Hi-Tech Hijinks (1997) | mtplay31.exe | NE for Windows 3.x | 740896 | 
Magic Theatre (1994) | mtsetup.exe | PE32 for Windows | 9459783 | 
Mike Mulligan and His Steam Shovel (1996) | mulligan.exe | NE for Windows 3.x | 918481 | 
Mummy - Tomb of the Pharaoh (1996) | mummy.exe | NE for Windows 3.x | 2939630 | 
Math Munchers Deluxe (1995) | munch16.exe | NE for Windows 3.x | 431648 | 
Murder, She Wrote - Mystery Jigsaw Puzzles (1996) | murder.exe | NE for Windows 3.x | 115408 | 
Mosaic (1993) | music.exe | MS-DOS executable | 12843 | 
Treasure Quest (1996) | mviaware.exe | NE for Windows 3.x | 27744 | 
Treasure Quest (1996) | mviplay.exe | MZ for MS-DOS Self-extracting PKZIP archive | 56690 | 
Treasure Quest (1996) | mviprof.exe | MZ for MS-DOS Self-extracting PKZIP archive | 56649 | 
Myst (1993) | myst.exe | NE for Windows 3.x | 446480 | 
Nanotank (1993) | nanotank.exe | NE for Windows 3.x | 287232 | 
Microsoft Explorapedia - The World of Nature (1995) | nature.exe | NE for Windows 3.x | 163356 | 
ID4 Mission Disks (1996) | nav.exe | NE for Windows 3.x | 1834037 | 
NCC-1701 (1992) | ncc1701.exe | NE for Windows 3.x | 164409 | 
Neko (1991) | neko.exe | NE for Windows 3.x | 44973 | 
Deadlock - Planetary Conquest (1996) | netbios.exe | MS-DOS executable | 24514 | 
Dilbert Screen Saver Collection (1994) | netpass.exe | NE for Windows 3.x | 19464 | 
Total Mayhem (1996) | netplay.exe | PE32 for Windows | 32288 | 
Arcade Mania (1995) | neutrino.exe | NE for Windows 3.x | 477416 | 
Huygen's Disclosure (1996) | new.exe | NE for Windows 3.x | 1605440 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | newfloyd.exe | NE for Windows 3.x | 584192 | 
Head Coach - NFL Math (1996) | nflmath.exe | NE for Windows 3.x | 683008 | 
Head Coach - NFL Reading (1996) | nflread.exe | NE for Windows 3.x | 701056 | 
Nile - Passage to Egypt (1995) | nile.exe | NE for Windows 3.x | 2820199 | 
9 - The Last Resort (1996) | nine_31.exe | NE for Windows 3.x | 1077661 | 
Battleground 6 - Napoleon in Russia (1997) | nir.exe | NE for Windows 3.x | 1374853 | 
Battleground 6 - Napoleon in Russia (1997) | nir102a.exe | NE for Windows 3.x | 251251 | 
Battleground 6 - Napoleon in Russia (1997) | nir103uk.exe | NE for Windows 3.x | 489246 | 
Nitemare-3D (1994) | nite3w.exe | NE for Windows 3.x | 230128 | 
NumberMaze Challenge (1999) | nmaze3d.exe | NE for Windows 3.x | 397704 | 
Noir - A Shadowy Thriller (1996) | noir.exe | NE for Windows 3.x | 1020879 | 
Noisy Video Poker and Blackjack (1995) | noisy.exe | NE for Windows 3.x | 118127 | 
Microsoft Bob (1995) | notebook.exe | NE for Windows 3.x | 283736 | 
Microsoft Encarta '95 (1994) | nsclient.exe | NE for Windows 3.x | 2188188 | 
Comet Busters! (1994) | nuclwint.exe | NE for Windows 3.x | 83374 | 
Nautical Number Hunt (1998) | numline.exe | PE32 for Windows | 1568256 | 
Multimedia Celebrity Poker (1995) | nwcsi.exe | NE for Windows 3.x | 19184 | 
Anyone for Cards (1994) | oafc.exe | NE for Windows 3.x | 3062171 | 
Oddballz (1996) | oddballz.exe | NE for Windows 3.x | 32768 | 
Odell Down Under (1994) | odell.exe | NE for Windows 3.x | 641552 | 
Origin FX (1992) | ofx30.exe | MS Compress archive data, SZDD variant, e is last character of original name, original size: 452112 bytes | 114024 | 
Origin FX (1992) | ofx31.exe | MS Compress archive data, SZDD variant, e is last character of original name, original size: 452112 bytes | 114106 | 
Activision's Atari 2600 Action Pack 2 (1995) | oink.exe | NE for Windows 3.x | 44032 | 
Opening Night (1995) | on16.exe | NE for Windows 3.x | 591312 | 
Operation Neptune (1995) | onwincd.exe | NE for Windows 3.x | 300544 | 
OOG - The Object Orientation Game (1995) | oog.exe | NE for Windows 3.x | 422912 | 
Oregon Trail II - 25th Anniversary Limited Edition (1996) | oregon.exe | NE for Windows 3.x | 4099088 | 
Origin FX (1992) | originfx.exe | NE for Windows 3.x | 452112 | 
Who is Oscar Lake (1996) | oscar.exe | NE for Windows 3.x | 665600 | 
Oscar the Balloonist Flies into the Mountains (2001) | oscar16.exe | NE for Windows 3.x | 1264750 | 
Oscar the Balloonist Discovers the Farm (2001) | oshof31.exe | NE for Windows 3.x | 1076653 | 
Adventures With Oslo - Tools and Gadgets (1994) | oslotg.exe | NE for Windows 3.x | 995939 | 
Adventures With Oslo - World of Water (1995) | oslowow.exe | NE for Windows 3.x | 1017261 | 
Oscar the Balloonist Dives into the Lake (2000) | ossee16.exe | NE for Windows 3.x | 1198794 | 
Oscar the Balloonist and the Secrets of the Forest (2000) | oswald31.exe | NE for Windows 3.x | 1078137 | 
Oregon Trail II - 25th Anniversary Limited Edition (1996) | otii16.exe | NE for Windows 3.x | 997392 | 
Over the Reich (1996) | otr31.exe | NE for Windows 3.x | 1691648 | 
Sportsman's Paradise (1998) | outdoors.exe | NE for Windows 3.x | 10549 | 
Outpost (1994) | outpost.exe | NE for Windows 3.x | 640640 | 
Multimedia Celebrity Poker (1995) | outtakes.exe | NE for Windows 3.x | 30000 | 
Creatures (1997) | ownerkit.exe | PE32 for Windows | 317952 | 
Legends of Oz (1993) | ozmm.exe | NE for Windows 3.x | 369250 | 
Hell Cab (1993) | pacop.exe | NE for Windows 3.x | 3168 | 
Don Quixote - A Multimedia Storybook (1992) | pageflip.exe | NE for Windows 3.x | 98304 | 
Pagemaster, The (1994) | pagemstr.exe | NE for Windows 3.x | 1796096 | 
Pagemaster, The (1994) | pageset.exe | NE for Windows 3.x | 7216 | 
Casino Deluxe 2 (1996) | paigo.exe | NE for Windows 3.x | 3509555 | 
Pajama Sam - No Need to Hide When It's Dark Outside (1996) | pajama.exe | NE for Windows 3.x | 21616 | 
Pajama Sam 2 - Thunder and Lightning aren't so Frightening (1998) | pajama2.exe | NE for Windows 3.x | 22352 | 
Palace of Deceit, The - The Dragon's Plight (1992) | palace21.exe | NE for Windows 3.x | 3788702 | 
Panic in the Park (1995) | panic.exe | NE for Windows 3.x | 577426 | 
Mosaic (1993) | parrot.exe | MS-DOS executable | 25701 | 
Even More! Incredible Machine, The (1993) | patch.exe | NE for Windows 3.x | 81408 | 
Perfect Partner Bridge (1995) | patch95.exe | NE for Windows 3.x | 11276 | 
Infinite Patience (1997) | patience.exe | NE for Windows 3.x | 1055284 | 
ZAARK and the Night Team - The Quest for Patterns (1995) | patterns.exe | NE for Windows 3.x | 532458 | 
1942 - The Pacific Air War Gold (1994) | pawcore.exe | NE for Windows 3.x | 38647645 | 
1942 - The Pacific Air War Gold (1994) | pawgold.exe | NE for Windows 3.x | 558870 | 
1942 - The Pacific Air War Gold (1994) | pawsetup.exe | NE for Windows 3.x | 14080 | 
Las Vegas Super Casino (1997) | pckeno.exe | NE for Windows 3.x | 307780 | 
Babylon 5 - Shadow Wars (1997) | pdesk31.exe | NE for Windows 3.x | 419584 | 
Prairie Dog Hunt 2 - Judgement Day (1994) | pdh2jd.exe | NE for Windows 3.x | 492909 | 
Prairie Dog Hunt Pro (1995) | pdhpro.exe | NE for Windows 3.x | 1345055 | 
Prairie Dog Hunt Pro '97 (1997) | pdhpro97.exe | NE for Windows 3.x | 1849656 | 
Brainiacs (1995) | pegged.exe | NE for Windows 3.x | 213520 | 
High Command (1992) | pend.exe | NE for Windows 3.x | 183296 | 
High Command (1992) | pendulous (high command).exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Tue Oct  9 23:14:52 1990, method=store | 467585 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | pent.exe | NE for Windows 3.x | 536064 | 
Microsoft Explorapedia - The World of People (1995) | people.exe | NE for Windows 3.x | 48640 | 
How To Be Perfect (1995) | perfect.exe | NE for Windows 3.x | 810298 | 
Chuck Jones - Peter and the Wolf (1994) | peter.exe | NE for Windows 3.x | 574976 | 
Umbra Conspiracy, The (1995) | pgcd.exe | NE for Windows 3.x | 565264 | 
Jongg CD!, The (1997) | phdetect.exe | PE32 for Windows | 1681920 | 
Sportsman's Paradise (1998) | phhunt.exe | NE for Windows 3.x | 1669152 | 
Nine Worlds (1996) | phonedir.exe | NE for Windows 3.x | 50224 | 
Sportsman's Paradise (1998) | pigeon.exe | NE for Windows 3.x | 1631776 | 
Pilgrim - Faith as a Weapon (1998) | pilgrim.exe | NE for Windows 3.x | 831488 | 
Take a Break! Pinball (1993) | pinball.exe | NE for Windows 3.x | 235008 | 
3-D Ultra Pinball - Creep Night (1996) | pinball2.exe | PE32 for Windows | 462848 | 
3-D Ultra Pinball - The Lost Continent (1997) | pinball3.exe | PE32 for Windows | 315392 | 
Adventures of Pinocchio, The (1996) | pinoc.exe | NE for Windows 3.x | 1857856 | 
Microsoft Entertainment Pack 2 (1991) | pipe.exe | NE for Windows 3.x | 124960 | 
Pirates - Captain's Quest (1997) | pirates.exe | NE for Windows 3.x | 1036288 | 
Activision's Atari 2600 Action Pack (1995) | pitfall.exe | NE for Windows 3.x | 58263 | 
World Empire IV (1996) | pkunzip.exe | MZ for MS-DOS Self-extracting PKZIP archive | 29378 | 
World of Aden - Entomorph - Plague of the Darkfall (1995) | plague.exe | PE32 for Windows | 380928 | 
Activision's Atari 2600 Action Pack 2 (1995) | plaque.exe | NE for Windows 3.x | 44032 | 
Mosaic (1993) | playcmf.exe | MS-DOS executable | 11150 | 
Felix The Cat's Cartoon Toolbox (1995) | player.exe | NE for Windows 3.x | 834551 | 
Mosaic (1993) | playmidi.exe | MS-DOS executable | 13189 | 
Playtoons - Vol 1-4 (1994) | playtn.exe | NE for Windows 3.x | 455680 | 
Take Your Best Shot (1995) | plympton.exe | NE for Windows 3.x | 71664 | 
Book of Shadowboxes, The (1995) | pnkpnt.exe | NE for Windows 3.x | 85088 | 
Disney's Animated Storybook - Pocahontas (1995) | poca_asb.exe | NE for Windows 3.x | 364736 | 
Disney's Animated Storybook - Pocahontas (1995) | poca_del.exe | NE for Windows 3.x | 13600 | 
Casino Deluxe 2 (1996) | poker.exe | NE for Windows 3.x | 5180909 | 
Monopoly Deluxe (1992) | poly.exe | NE for Windows 3.x | 764097 | 
Pool Champion (1995) | pool.exe | NE for Windows 3.x | 455576 | 
Powerhouse (1995) | power.exe | NE for Windows 3.x | 1414584 | 
Power - The Game (1995) | powerwin.exe | NE for Windows 3.x | 461312 | 
Powerhouse (1995) | powhs.exe | NE for Windows 3.x | 957328 | 
Perfect Partner Bridge (1995) | ppb.exe | NE for Windows 3.x | 457773 | 
Perfect Partner Bridge (1995) | ppbmodem.exe | NE for Windows 3.x | 636442 | 
Paparazzi! - Tales of Tinseltown (1995) | pprazzi.exe | NE for Windows 3.x | 5331351 | 
Pink Panther, The - Passport to Peril (1997) | pptp.exe | PE32 for Windows | 594432 | 
Power Rangers Zeo Versus The Machine Empire (1996) | pr.exe | PE32 for Windows | 453632 | 
Jump Start Pre-K Year 2 - Trucks N Things (1999) | pre_k.exe | PE32 for Windows | 266786 | 
Better Home And Gardens Complete Guide To Gardening (1999) | present.exe | NE for Windows 3.x | 253648 | 
Dr. T's Sing-A-Long Kid's Classics (1993) | preview.exe | NE for Windows 3.x | 5424 | 
ID4 Mission Disks (1996) | prez.exe | NE for Windows 3.x | 1666293 | 
Crayola Magic Princess Paper Doll Maker (1999) | princess.exe | NE for Windows 3.x | 933292 | 
Mosaic (1993) | pro_org.exe | MS-DOS executable | 48376 | 
Castle Explorer (1996) | profdisp.exe | NE for Windows 3.x | 4352 | 
Profitania (1998) | profit.exe | NE for Windows 3.x | 2027159 | 
Disney's Animated Storybook - The Lion King (1995) | profwing.exe | NE for Windows 3.x | 3136 | 
Madeline's Rainy Day Activities (1996) | progchk.exe | NE for Windows 3.x | 1969941 | 
Prince Interactive (1994) | program.exe | NE for Windows 3.x | 262656 | 
Flight Sim Toolkit (1993) | project.exe | NE for Windows 3.x | 60929 | 
Proliferation (1995) | prolif.exe | NE for Windows 3.x | 2048448 | 
Umbra Conspiracy, The (1995) | prolog.exe | NE for Windows 3.x | 52752 | 
Jump Start Pre-K (1996) | prschool.exe | NE for Windows 3.x | 33576 | 
Take a Break! Pinball (1993) | pshell.exe | NE for Windows 3.x | 56832 | 
Icebreaker (1996) | ptro.exe | MS-DOS executable | 43968 | 
Battleground 8 - Prelude to Waterloo (1997) | ptw.exe | NE for Windows 3.x | 1374853 | 
Battleground 8 - Prelude to Waterloo (1997) | ptw104uk.exe | NE for Windows 3.x | 603236 | 
Book of Shadowboxes, The (1995) | purpnt.exe | NE for Windows 3.x | 85088 | 
Trivial Pursuit Interactive Multimedia Game (1994) | pursuit.exe | NE for Windows 3.x | 95876 | 
Putt-Putt Enters the Race (1998) | puttrace.exe | NE for Windows 3.x | 21696 | 
Putt-Putt Travels Through Time (1997) | putttime.exe | NE for Windows 3.x | 21616 | 
Putt-Putt Saves the Zoo (1995) | puttzoo.exe | NE for Windows 3.x | 30720 | 
Moving Puzzle - Action Flights (1998) | puzzle.exe | NE for Windows 3.x | 1345496 | 
Playskool Puzzles (1996) | puzzles.exe | NE for Windows 3.x | 1916720 | 
Las Vegas Super Casino (1997) | pvpoker.exe | NE for Windows 3.x | 2200900 | 
Philip Marlowe Private Eye (1996) | pvteye.exe | PE32 for Windows | 570368 | 
Secrets of the Pyramids (1994) | pyramid.exe | NE for Windows 3.x | 377328 | 
Pyst (1997) | pyst16.exe | NE for Windows 3.x | 1034847 | 
Fun Pack 3 (1995) | python.exe | NE for Windows 3.x | 196704 | 
Quantum Gate (1993) | qgate.exe | NE for Windows 3.x | 490960 | 
Qin - Tomb of the Middle Kingdom (1995) | qin.exe | NE for Windows 3.x | 2759680 | 
Spectre VR (1993) | qmixer32.exe | PE32 for Windows | 875008 | 
Stay Tooned! (1996) | qsetup.exe | NE for Windows 3.x | 1682688 | 
Microsoft Bookshelf '95 (1995) | qshelf95.exe | NE for Windows 3.x | 95376 | 
GeoSafari - Animals (1996) | qt16.exe | NE for Windows 3.x | 2041344 | 
GeoSafari - Animals (1996) | qt32inst.exe | PE32 for Windows | 2063872 | 
Madness of Roland, The (1995) | qtnotify.exe | NE for Windows 3.x | 4176 | 
Cyberstrip Poker (1995) | qtwsetup.exe | NE for Windows 3.x | 24624 | 
Hunchback of Notre Dame, The (Isabelle Bristow)(1996) | quasimodo.exe | NE for Windows 3.x | 61744 | 
Triple Threat - An Arcade Adventure (1995) | quatra.exe | NE for Windows 3.x | 3280400 | 
Jonny Quest - The Real Adventures - Cover-Up at Roswell (1996) | quest.exe | NE for Windows 3.x | 929869 | 
Don Quixote - A Multimedia Storybook (1992) | quickeys.exe | NE for Windows 3.x | 16960 | 
Qwirks (1995) | qwirks.exe | NE for Windows 3.x | 294324 | 
Arthur's Reading Race (1996) | race.exe | NE for Windows 3.x | 565760 | 
Arthur's Reading Race (1996) | race32.exe | PE32 for Windows | 420864 | 
Jongg CD!, The (1997) | radiate.exe | PE32 for Windows | 1029120 | 
Madeline's Rainy Day Activities (1996) | rainyday.exe | NE for Windows 3.x | 856457 | 
Dr. Drago's Madcap Chase (1995) | rally.exe | NE for Windows 3.x | 438272 | 
Bricks (1996) | random.exe | NE for Windows 3.x | 6192 | 
Power Rangers Zeo Versus The Machine Empire (1996) | rangers.exe | NE for Windows 3.x | 83248 | 
Magic Fairy Tales - Barbie As Rapunzel (1997) | rap_del.exe | NE for Windows 3.x | 15472 | 
Magic Fairy Tales - Barbie As Rapunzel (1997) | rapunzel.exe | NE for Windows 3.x | 535840 | 
Rats! (1994) | rats.exe | NE for Windows 3.x | 200704 | 
Microsoft Entertainment Pack 2 (1991) | rattler.exe | NE for Windows 3.x | 70226 | 
Rave Shuttle - The Cosmic Challenge (1997) | raves.exe | NE for Windows 3.x | 1000911 | 
Reading Blaster Invasion of the Word Snatchers (1994) | rblaster.exe | NE for Windows 3.x | 324032 | 
Area D (1997) | reactorsdemo.exe | PE32 for Windows, InstallShield | 9668520 | 
Alice - Interactive Museum (1994) | read.exe | NE for Windows 3.x | 1739831 | 
Mosaic (1993) | readdrv.exe | MS-DOS executable | 15813 | 
Cyberstrip Poker (1995) | readme.exe | NE for Windows 3.x | 172066 | 
Monopoly Deluxe (1992) | readnote.exe | MS-DOS executable | 14315 | 
Casino Deluxe 2 (1996) | reddog.exe | NE for Windows 3.x | 2608759 | 
3-D Ultra Pinball - The Lost Continent (1997) | redirect.exe | NE for Windows 3.x | 30240 | 
Reelect JFK (1994) | reeljfk.exe | NE for Windows 3.x | 686867 | 
3D Thinking Lab (1998) | reg16.exe | NE for Windows 3.x | 59680 | 
Treasure Quest (1996) | reg1_16.exe | NE for Windows 3.x | 5040 | 
You Don't Know Jack Movies (1996) | reg32.exe | PE32 for Windows | 14336 | 
3D Thinking Lab (1998) | register.exe | PE32 for Windows | 472576 | 
Dogz - Your Computer Pet (1995) | registr1.exe | NE for Windows 3.x | 19340 | 
Frankenstein - Through the Eyes of the Monster (1995) | registr2.exe | NE for Windows 3.x | 5008 | 
You Don't Know Jack Movies (1996) | regstart.exe | PE32 for Windows | 18432 | 
Jurassic Art (1997) | regsvr.exe | NE for Windows 3.x | 7216 | 
Crayola Magic Princess Paper Doll Maker (1999) | relaunch.exe | NE for Windows 3.x | 28832 | 
Creatures (1997) | remove.exe | PE32 for Windows | 15872 | 
Renju (1994) | renju11p.exe | NE for Windows 3.x | 68608 | 
1942 - The Pacific Air War Gold (1994) | retwin.exe | NE for Windows 3.x | 51516 | 
Brainiacs (1995) | reversi.exe | NE for Windows 3.x | 210768 | 
Aviation Adventure (1994) | rimg.exe | MS-DOS executable | 18096 | 
Jongg CD!, The (1997) | ringjong.exe | PE32 for Windows | 797696 | 
Rise and Rule of Ancient Empires, The (1996) | rise31.exe | PE32 for Windows | 526336 | 
Rise and Rule of Ancient Empires, The (1996) | rise95.exe | PE32 for Windows | 565248 | 
Computer Edition of Risk, The - The World Conquest Game (1991) | risk.exe | NE for Windows 3.x | 157318 | 
Activision's Atari 2600 Action Pack (1995) | rivraid.exe | NE for Windows 3.x | 58263 | 
Activision's Atari 2600 Action Pack 2 (1995) | rivraid2.exe | NE for Windows 3.x | 44032 | 
Rock'N Roll Your Own (1995) | rnryo.exe | NE for Windows 3.x | 165904 | 
RoboSport (1991) | robo.exe | NE for Windows 3.x | 883712 | 
RoboSport (1991) | robotcrk.exe | MS-DOS executable | 1709 | 
Robot City (1995) | robotcty.exe | NE for Windows 3.x | 1493568 | 
Microsoft Entertainment Pack 2 (1991) | rodent.exe | NE for Windows 3.x | 56424 | 
Rodney's Funscreen (1992) | rodneys.exe | MS-DOS executable | 146383 | 
Rodney's Funscreen (1992) | rodneysw.exe | NE for Windows 3.x | 159232 | 
Between Earth And The End Of Time (1996) | rodstart.exe | NE for Windows 3.x | 697661 | 
Madness of Roland, The (1995) | roland.exe | NE for Windows 3.x | 14342 | 
Madness of Roland, The (1995) | rolguts.exe | NE for Windows 3.x | 429172 | 
RollOver (1997) | rollover.exe | NE for Windows 3.x | 1596858 | 
Gadget - Invention, Travel and Adventure (1995) | room306.exe | NE for Windows 3.x | 369009 | 
Casino Deluxe 2 (1996) | roulet.exe | NE for Windows 3.x | 4691377 | 
Reader Rabbit's Reading 1 (1997) | rr1cd16.exe | NE for Windows 3.x | 1020416 | 
Reader Rabbit 2 (1993) | rr2cd.exe | NE for Windows 3.x | 258576 | 
Reader Rabbit 3 (1996) | rr3wincd.exe | NE for Windows 3.x | 576512 | 
Reader Rabbit's Reading Journey 1 (1996) | rrirjw16.exe | NE for Windows 3.x | 299008 | 
Reader Rabbit's Toddler (1997) | rrtw32.exe | PE32 for Windows | 227433 | 
Shivers Two - Harvest of Souls (1997) | rshivers.exe | PE32 for Windows | 891904 | 
Romance of the Three Kingdoms IV - Wall of Fire (1996) | rtk4win.exe | NE for Windows 3.x | 707392 | 
Golf Pro 2000 Downunder (1997) | rtm.exe | MS-DOS executable | 120853 | 
Better Home And Gardens Complete Guide To Gardening (1999) | runcomm.exe | NE for Windows 3.x | 45056 | 
Adventures of Pinocchio, The (1996) | rundemo.exe | NE for Windows 3.x | 8192 | 
Pinball Builder - A Construction Kit for Windows (1996) | rundos.exe | NE for Windows 3.x | 6150 | 
Real Video Blackjack (1995) | rvbj.exe | NE for Windows 3.x | 108904 | 
Real Video Poker (1994) | rvp.exe | NE for Windows 3.x | 115816 | 
Rodney's Wonder Window (1992) | rww.exe | NE for Windows 3.x | 408259 | 
Microsoft Bob (1995) | s3.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Tue Jul 30 20:47:17 1985, uncompressed size 41664, method=deflate | 318071 | 
Safety Monkey (1994) | saf.exe | NE for Windows 3.x | 82128 | 
Microsoft Bob (1995) | safari.exe | NE for Windows 3.x | 221806 | 
Sammy's Science House (1994) | sammy.exe | PE32 for Windows | 695296 | 
Prince Interactive (1994) | sampler.exe | ASCII text, with CRLF line terminators | 47 | 
Mosaic (1993) | sbmidi.exe | MS-DOS executable | 15871 | 
Mosaic (1993) | sbp-mix.exe | MS-DOS executable | 47473 | 
Mosaic (1993) | sbp-set.exe | MS-DOS executable | 11740 | 
Space Bucks (1996) | sbpatch.exe | MZ for MS-DOS, LHa self-extracting archive | 453429 | 
Mosaic (1993) | sbpmixer.exe | NE for Windows 3.x | 27744 | 
Dare to Dream 2 (1993) | sbsetup.exe | NE for Windows 3.x | 6960 | 
Storybook Weaver Deluxe (1994) | sbw16.exe | PE32 for Windows | 1977344 | 
Skull Cracker (1996) | sc.exe | PE32 for Windows | 583680 | 
SimCity 2000 - CD Collection (1993) | sc2000w.exe | NE for Windows 3.x | 11632 | 
Mosaic (1993) | schedule.exe | NE for Windows 3.x | 136704 | 
Microsoft Multimedia Schubert (1993) | schubert.exe | NE for Windows 3.x | 233062 | 
ID4 Mission Disks (1996) | science.exe | NE for Windows 3.x | 1766499 | 
Robot City (1995) | scifi.exe | NE for Windows 3.x | 182208 | 
Creatures (1997) | scikit.exe | PE32 for Windows | 381952 | 
King's Quest V - Absence Makes the Heart Go Yonder! (1992) | scikq5.exe | NE for Windows 3.x | 140288 | 
King's Quest VI - Heir Today Gone Tomorrow CD (1992) | sciwv.exe | NE for Windows 3.x | 190464 | 
American Civil War - From Sumter to Appomattox (1996) | sconcsa.exe | NE for Windows 3.x | 2058039 | 
American Civil War - From Sumter to Appomattox (1996) | sconusa.exe | NE for Windows 3.x | 1795671 | 
Creatures (1997) | scorekit.exe | PE32 for Windows | 250880 | 
Scrabble (1996) | scrabble.exe | PE32 for Windows | 1984289 | 
Crosswords and Word Games (1995) | scramble.exe | NE for Windows 3.x | 387648 | 
Monty Python and the Quest for the Holy Grail (1996) | scrndemo.exe | NE for Windows 3.x | 93968 | 
Rolling Stones Voodoo Lounge CD-ROM (1995) | scrnrave.exe | NE for Windows 3.x | 696751 | 
Scrutiny In The Great Round (1995) | scrutiny.exe | NE for Windows 3.x | 724885 | 
SimCity 2000 - CD Collection (1993) | scurkw.exe | NE for Windows 3.x | 13584 | 
Second Conflict (1991) | scw.exe | NE for Windows 3.x | 275456 | 
SimCity (1992) | scwsetup.exe | NE for Windows 3.x | 64080 | 
Battle Isle 2220 - Shadow of the Emperor (1996) | sdi_1r.exe | PE32 for Windows | 800768 | 
Activision's Atari 2600 Action Pack (1995) | seaquest.exe | NE for Windows 3.x | 58263 | 
Focus Essential Senior Word Games (1997) | search.exe | NE for Windows 3.x | 320320 | 
Dracula's Secret (1996) | secret.exe | NE for Windows 3.x | 808748 | 
Secrets of the Luxor (1996) | secrets.exe | NE for Windows 3.x | 938231 | 
Bricks (1996) | selcolor.exe | NE for Windows 3.x | 11696 | 
Bricks (1996) | sellevel.exe | NE for Windows 3.x | 9744 | 
Bricks (1996) | seltype.exe | NE for Windows 3.x | 9568 | 
Mosaic (1993) | set-env.exe | MS-DOS executable | 20594 | 
Bricks (1996) | setbase.exe | NE for Windows 3.x | 9888 | 
Thinkin' Things - Sky Island Mysteries (1998) | setbrows.exe | NE for Windows 3.x | 4528 | 
Harpoon Classic (1995) | setpath.exe | MZ for MS-DOS | 43923 | 
Pinball Builder - A Construction Kit for Windows (1996) | setsound.exe | LE executable | 153551 | 
Total Mayhem (1996) | settings.exe | NE for Windows 3.x | 51216 | 
GayBlade (1992) | setup1.exe | NE for Windows 3.x | 34096 | 
Gabriel Knight 2 - The Beast Within (1995) | setup32.exe | PE32 for Windows | 135680 | 
Castle Explorer (1996) | setupdx2.exe | PE32 for Windows | 13824 | 
Dr. Seuss Preschool (1999) | seussp16.exe | NE for Windows 3.x | 823296 | 
Interactive Adventures Of Seymore Butts, The (1993) | seymore.exe | NE for Windows 3.x | 186392 | 
SFCave (1995) | sfcave.exe | NE for Windows 3.x | 48390 | 
SFPD Homicide - Case File - The Body in the Bay (1995) | sfpd.exe | NE for Windows 3.x | 696847 | 
Six Feet Under (1994) | sfu.exe | MZ for MS-DOS, LHa self-extracting archive | 602971 | 
Smart Games Challenge #1 (1996) | sgc1.exe | NE for Windows 3.x | 296448 | 
Smart Games Stratajams (1997) | sgc1demo.exe | NE for Windows 3.x | 283648 | 
Smart Games Puzzle Challenge 2 (1997) | sgpc2.exe | PE32 for Windows | 77824 | 
Smart Games Puzzle Challenge 3 (1998) | sgpc3.exe | PE32 for Windows | 173568 | 
Smart Games Stratajams (1997) | sgsj.exe | NE for Windows 3.x | 309760 | 
Smart Games Word Puzzles #1 (1996) | sgwp1.exe | NE for Windows 3.x | 230400 | 
Bad Mojo (1996) | sh22mon.exe | NE for Windows 3.x | 7680 | 
Captain Kangaroo - Life's First Lessons Adventure #1 (1998) | sh30mon.exe | NE for Windows 3.x | 6144 | 
Shadowgate (1993) | shadow.exe | NE for Windows 3.x | 458240 | 
Babylon 5 - Shadow Wars (1997) | shadows.exe | PE32 for Windows | 215552 | 
Shanghai II - Dragon's Eye (1994) | shanghai.exe | NE for Windows 3.x | 144144 | 
Flight Sim Toolkit (1993) | shape.exe | NE for Windows 3.x | 171008 | 
Shark! (1999) | shark16.exe | NE for Windows 3.x | 947082 | 
Shark! (1999) | shark32.exe | PE32 for Windows | 1124183 | 
Strategy Heads (1997) | sheads16.exe | NE for Windows 3.x | 1035801 | 
Sheila Rae the Brave (1996) | sheila.exe | NE for Windows 3.x | 298496 | 
Sheila Rae the Brave (1996) | sheila32.exe | PE32 for Windows | 231424 | 
Shanghai - Great Moments (1995) | shgm.exe | PE32 for Windows | 322603 | 
Shine (1996) | shine.exe | NE for Windows 3.x | 1937650 | 
Shivers Two - Harvest of Souls (1997) | shivers2.exe | PE32 for Windows | 116736 | 
Leisure Suit Larry - Love for Sail! (1996) | sier.exe | LE for MS-DOS, DOS4GW DOS extender (embedded) | 905165 | 
Phantasmagoria (1995) | sierra.exe | LE for MS-DOS, DOS4GW DOS extender (embedded) | 934189 | 
King's Quest VII - The Princeless Bride (1994) | sierraw.exe | NE for Windows 3.x | 806004 | 
Police Quest SWAT (1995) | sierrawh.exe | NE for Windows 3.x | 730241 | 
Leisure Suit Larry - Love for Sail! (1996) | sierw.exe | NE for Windows 3.x | 789184 | 
Leisure Suit Larry - Love for Sail! (1996) | sierw5.exe | PE32 for Windows | 575488 | 
You Don't Know Jack - Television (1997) | sigspat.exe | PE32 for Windows | 311808 | 
SimAnt - The Electronic Ant Colony (1991) | simantw.exe | NE for Windows 3.x | 516096 | 
SimLife (1992) | simlifew.exe | NE for Windows 3.x | 718336 | 
Simon (1991) | simon.exe | NE for Windows 3.x | 21888 | 
SimPark (1996) | simpark.exe | PE32 for Windows | 646656 | 
Simpsons Cartoon Studio, The (1996) | simpsons.exe | NE for Windows 3.x | 3368957 | 
SimTower - The Vertical Empire (1995) | simtower.exe | NE for Windows 3.x | 6220288 | 
SimTown (1995) | simtown.exe | PE32 for Windows | 1982496 | 
SimTunes (1996) | simtunes.exe | PE32 for Windows | 468480 | 
Dr. T's Sing-A-Long Kid's Classics (1993) | singk.exe | NE for Windows 3.x | 347632 | 
Sinkha - The 3D Multimedia Novel (1994) | sinkha.exe | NE for Windows 3.x | 932884 | 
Six Feet Under (1994) | sixfeet.exe | NE for Windows 3.x | 75264 | 
Skat 3000 (1999) | skat.exe | NE for Windows 3.x (WinZip) | 6114053 | 
Skat 2010 (1993) | skat2010.exe | NE for Windows 3.x | 13648 | 
Skat 3000 (1999) | skat3000.exe | NE for Windows 3.x | 1037024 | 
Skat 2095 (1996) | skat_sw.exe | NE for Windows 3.x | 612400 | 
Microsoft Entertainment Pack 3 (1991) | ski.exe | NE for Windows 3.x | 88848 | 
Activision's Atari 2600 Action Pack 2 (1995) | skiing.exe | NE for Windows 3.x | 44032 | 
Skull Cracker (1996) | skull.exe | NE for Windows 3.x | 83088 | 
Amazon Skulls (1993) | skulls.exe | NE for Windows 3.x | 58624 | 
Thinkin' Things - Sky Island Mysteries (1998) | skyislan.exe | PE32 for Windows | 3673088 | 
Activision's Atari 2600 Action Pack (1995) | skyjinks.exe | NE for Windows 3.x | 58263 | 
Aviation Adventure (1994) | slap.exe | MS-DOS executable | 20092 | 
Schoolyard Slaughter (1994) | slaughtr.exe | NE for Windows 3.x | 813355 | 
Slay (1995) | slay.exe | PE32 for Windows | 140288 | 
Follow That Sleigh! (1994) | sleigh.exe | NE for Windows 3.x | 744124 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | slide.exe | NE for Windows 3.x | 39304 | 
Casino Deluxe 2 (1996) | slots.exe | NE for Windows 3.x | 2300649 | 
Slots of Trivia (1996) | slottriv.exe | NE for Windows 3.x | 395556 | 
Noir - A Shadowy Thriller (1996) | smackpw6.exe | NE for Windows 3.x | 95952 | 
Star Merc (1997) | smpatch.exe | MZ for MS-DOS Self-extracting PKZIP archive | 32387 | 
Devo Presents - Adventures of the Smart Patrol (1996) | smrtptrl.exe | NE for Windows 3.x | 741904 | 
Thinkin' Things Collection 2 (1995) | snake.exe | MS-DOS executable | 217696 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | snark.exe | NE for Windows 3.x | 571746 | 
Nine Worlds (1996) | snmdreg.exe | NE for Windows 3.x | 27472 | 
Yearn2Learn - Snoopy (1994) | snoopy.exe | NE for Windows 3.x | 418576 | 
Aviation Adventure (1994) | soadl.exe | MS-DOS executable | 2462 | 
Backyard Soccer (1998) | soccer.exe | NE for Windows 3.x | 21616 | 
Pajama Sam's SockWorks (1997) | socks.exe | NE for Windows 3.x | 21616 | 
Soft Kill (1993) | softkill.exe | NE for Windows 3.x | 144896 | 
Solitaire XXX (1998) | soli.exe | NE for Windows 3.x | 249673 | 
Solitaire Deluxe (1996) | solwin.exe | NE for Windows 3.x | 1032208 | 
Sonic KNP Collection (1999) | sonknpcl.exe | NE for Windows 3.x | 63648 | 
Mosaic (1993) | soundfx.exe | MS-DOS executable | 19055 | 
Mosaic (1993) | soundole.exe | NE for Windows 3.x | 60416 | 
1942 - The Pacific Air War Gold (1994) | soundset.exe | NE for Windows 3.x | 80138 | 
Fun Pack 3 (1995) | spacebmb.exe | NE for Windows 3.x | 353554 | 
Space Bucks (1996) | spacebuc.exe | NE for Windows 3.x | 1360838 | 
Spaceward Ho! (1992) | spaceho.exe | PE32 for Windows | 6057472 | 
Area D (1997) | spacepanicdemo.exe | PE32 for Windows, InstallShield | 10335435 | 
Jongg CD!, The (1997) | sphejong.exe | PE32 for Windows | 711168 | 
Area D (1997) | spheresofchaosdemo.exe | PE32 for Windows, InstallShield | 1441586 | 
Spider-Man Cartoon Maker (1995) | spidercm.exe | NE for Windows 3.x | 447104 | 
Activision's Atari 2600 Action Pack (1995) | spiderfi.exe | NE for Windows 3.x | 58263 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | spiders.exe | NE for Windows 3.x | 248162 | 
Area D (1997) | splash.exe | PE32 for Windows | 445952 | 
Noir - A Shadowy Thriller (1996) | splay.exe | NE for Windows 3.x | 29288 | 
Simpsons Cartoon Studio, The (1996) | splayer.exe | NE for Windows 3.x | 884843 | 
SPQR - The Empire's Darkest Hour (1997) | spqr16.exe | NE for Windows 3.x | 742240 | 
Stowaway! Stephen Biesty's Incredible Cross-Sections (1994) | spupdate.exe | NE for Windows 3.x | 403540 | 
Star Trek Omnipedia (1995) | sputil.exe | NE for Windows 3.x | 52400 | 
Spy Fox in Dry Cereal (1997) | spyfox.exe | NE for Windows 3.x | 21616 | 
FunPack (1993) | squash.exe | NE for Windows 3.x | 72704 | 
Squirmer The Game (1994) | squirmer.exe | NE for Windows 3.x | 259052 | 
Tonka Search and Rescue (1997) | sr_del.exe | NE for Windows 3.x | 17152 | 
Aviation Adventure (1994) | srats.exe | MS-DOS executable | 14124 | 
Sink Sub Pro (1997) | ss.exe | NE for Windows 3.x | 868777 | 
Super Solvers - Spellbound (1999) | ssbwincd.exe | NE for Windows 3.x | 222208 | 
Dilbert - Not Just A Calendar (1997) | ssconfig.exe | NE for Windows 3.x | 37104 | 
Super Solvers - Gizmos and Gadgets! (1997) | ssgwincd.exe | NE for Windows 3.x | 516624 | 
Super Spy (1996) | ssi.exe | NE for Windows 3.x | 3511549 | 
Super Solvers Mission - T.H.I.N.K. (1999) | ssmwin16.exe | NE for Windows 3.x | 1930545 | 
Super Solvers - OutNumbered! (1997) | ssowincd.exe | NE for Windows 3.x | 407056 | 
Sink Sub Pro (1997) | sspro16.exe | NE for Windows 3.x | 954372 | 
Super Solvers - Midnight Rescue! (1995) | ssrwincd.exe | NE for Windows 3.x | 425488 | 
Stars! (1996) | st27a27b.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Fri May  6 04:48:15 1988, uncompressed size 131396, method=deflate | 100558 | 
Stars! (1996) | st27b27f.exe | Zip archive data, made by v5.0 MVS, extract using at least v2.0, last modified Mon Aug 22 17:39:24 1988, uncompressed size 11173, method=deflate | 384475 | 
Stars! (1996) | st27f27g.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Tue Oct  4 03:58:11 1988, uncompressed size 6895, method=deflate | 371751 | 
Stars! (1996) | st27g27h.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Sun Nov 27 01:10:56 1988, uncompressed size 11185, method=deflate | 393868 | 
Stars! (1996) | st27h27i.exe | Zip archive data, made by v5.0 MVS, extract using at least v2.0, last modified Sun Jun 18 08:24:04 1989, uncompressed size 673732, method=deflate | 417420 | 
Star Trek Omnipedia (1995) | st_omni2.exe | NE for Windows 3.x | 809781 | 
Activision's Atari 2600 Action Pack 2 (1995) | stampede.exe | NE for Windows 3.x | 44032 | 
Stanley's Sticker Stories (1996) | stanley.exe | NE for Windows 3.x | 4071296 | 
Stardate 2140.2 - Crusade in Space (1994) | star.exe | NE for Windows 3.x | 503280 | 
Stars! (1996) | star27au.exe | Zip archive data, made by v2.0, extract using at least v2.0, last modified Sun Apr 24 09:53:48 1988, uncompressed size 11667, method=deflate | 402919 | 
Stardate 2140.2 - Crusade in Space (1994) | stargen.exe | NE for Windows 3.x | 308192 | 
Star Merc (1997) | starmerc.exe | NE for Windows 3.x | 745528 | 
Stars! (1996) | stars!.exe | NE for Windows 3.x | 3164480 | 
Stars! (1996) | stars.exe | NE for Windows 3.x | 3153152 | 
Stars! (1996) | stars26i.exe | NE for Windows 3.x | 3216832 | 
Stars! (1996) | stars_.exe | NE for Windows 3.x | 12440 | 
Space Bastards (1996) | start.exe | NE for Windows 3.x | 147456 | 
Millie Meters Nutrition Adventure (2001) | start16.exe | NE for Windows 3.x | 1588457 | 
Huygen's Disclosure (1996) | startdlg.exe | PE32 for Windows | 163328 | 
P.A.W.S. - Personal Automated Wagging System (1995) | startdog.exe | NE for Windows 3.x | 818961 | 
Star Warped (1997) | starw16.exe | NE for Windows 3.x | 1385809 | 
Silent Steel (1995) | steel.exe | NE for Windows 3.x | 536080 | 
Arcade Mania (1995) | stellar5.exe | NE for Windows 3.x | 482456 | 
ID4 Mission Disks (1996) | steve.exe | NE for Windows 3.x | 1797301 | 
Symantec Game Pack (1991) | sticks.exe | NE for Windows 3.x | 11216 | 
Microsoft Entertainment Pack 2 (1991) | stones.exe | NE for Windows 3.x | 31296 | 
S.T.O.R.M. (1996) | stormwin.exe | PE32 for Windows | 892928 | 
Stowaway! Stephen Biesty's Incredible Cross-Sections (1994) | stowaway.exe | NE for Windows 3.x | 696736 | 
Strategy Heads (1997) | strategy.exe | PE32 for Windows | 1412265 | 
Strip Poker! International (1993) | strip.exe | NE for Windows 3.x | 485888 | 
American Civil War - From Sumter to Appomattox (1996) | suncsa.exe | NE for Windows 3.x | 1993141 | 
American Civil War - From Sumter to Appomattox (1996) | sunusa.exe | NE for Windows 3.x | 1700749 | 
ID4 Mission Disks (1996) | supreme.exe | NE for Windows 3.x | 1664965 | 
How Would You Survive (1995) | survive.exe | NE for Windows 3.x | 703155 | 
Front Page Sports - Trophy Rivers (1997) | sutil.exe | NE for Windows 3.x | 294912 | 
You Don't Know Jack - Television (1997) | sutil32.exe | PE32 for Windows | 400384 | 
Microsoft Bob (1995) | svga.exe | MZ for MS-DOS Self-extracting PKZIP archive | 432405 | 
Take a Break! Pinball (1993) | sview.exe | MS-DOS executable, LZEXE v0.91 compressed | 12442 | 
Spectre VR (1993) | svrcd.exe | NE for Windows 3.x | 807692 | 
Wishbone and the Amazing Odyssey (1996) | switch16.exe | NE for Windows 3.x | 16556 | 
Wishbone and the Amazing Odyssey (1996) | switch32.exe | PE32 for Windows | 78848 | 
Disney's Hunchback of Notre Dame - 5 Topsy Turvy Games (1996) | t&pdempc.exe | NE for Windows 3.x | 99216 | 
Alien Tales (1995) | tales.exe | NE for Windows 3.x | 1013897 | 
Combat Tanks (1994) | tank.exe | NE for Windows 3.x | 196736 | 
This is Spinal Tap (1994) | tap.exe | NE for Windows 3.x | 61504 | 
Planetary Taxi (1995) | taxi.exe | NE for Windows 3.x | 236488 | 
Trophy Bass (1995) | tbass.exe | PE32 for Windows | 446464 | 
Trophy Bass 2 Deluxe (1998) | tbass2.exe | PE32 for Windows | 593920 | 
Psychotron, The (1994) | tbknet.exe | NE for Windows 3.x | 5360 | 
Comic Book Confidential (1994) | tbload.exe | NE for Windows 3.x | 7232 | 
Adventures of Ninja Nanny and Sherrloch Sheltie - No 11 Downing Street (1993) | tbook.exe | NE for Windows 3.x | 398880 | 
THiNK-X (1996) | tc.exe | NE for Windows 3.x | 297296 | 
Super Solvers - Treasure Cove! (1994) | tcvwin.exe | NE for Windows 3.x | 230912 | 
TDK Pinball Machine (1995) | tdkpin.exe | NE for Windows 3.x | 3396864 | 
Day The World Broke, The (1998) | tdtwb.exe | NE for Windows 3.x | 743296 | 
Perfect Partner Bridge (1995) | teachbid.exe | NE for Windows 3.x | 458783 | 
Perfect Partner Bridge (1995) | teachply.exe | NE for Windows 3.x | 457503 | 
Dilbert - Not Just A Calendar (1997) | techsupp.exe | PE32 for Windows | 581632 | 
P.T.O. - Pacific Theater of Operations II (1996) | teke2win.exe | NE for Windows 3.x | 837632 | 
Crosswords and Word Games (1995) | tele.exe | NE for Windows 3.x | 461328 | 
Even More! Incredible Machine, The (1993) | temim.exe | NE for Windows 3.x | 306688 | 
Microsoft Arcade (1993) | tempest.exe | NE for Windows 3.x | 289536 | 
Activision's Atari 2600 Action Pack 2 (1995) | tennis.exe | NE for Windows 3.x | 44032 | 
Terrace (1994) | terrace.exe | NE for Windows 3.x | 429227 | 
SimCity (1992) | terrain.exe | MS-DOS executable | 135785 | 
Terror T.R.A.X. - Track of the Vampire (1995) | terror.exe | NE for Windows 3.x | 479536 | 
Flight Sim Toolkit (1993) | terview.exe | NE for Windows 3.x | 87022 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | tessel.exe | NE for Windows 3.x | 83730 | 
Tesserae (1993) | tesserae.exe | NE for Windows 3.x | 1056512 | 
Mosaic (1993) | test-sbp.exe | MS-DOS executable | 72268 | 
Dilbert Screen Saver Collection (1994) | testdos.exe | MS-DOS executable | 6069 | 
Microsoft Entertainment Pack 3 (1991) | tetravex.exe | NE for Windows 3.x | 35376 | 
Microsoft Entertainment Pack for Windows (1990) | tetris.exe | NE for Windows 3.x | 64784 | 
Crayola Magic Princess Paper Doll Maker (1999) | textract.exe | NE for Windows 3.x | 933308 | 
Greens, The (1993) | thegreen.exe | NE for Windows 3.x | 702951 | 
Jolly Postman's Party, The (1997) | thejp.exe | NE for Windows 3.x | 936375 | 
Titanic - Adventure Out of Time (1996) | ti.exe | PE32 for Windows | 461824 | 
Microsoft Entertainment Pack for Windows (1990) | tic.exe | NE for Windows 3.x | 20706 | 
Brain Games For Windows (1992) | tictac.exe | NE for Windows 3.x | 25957 | 
Microsoft Entertainment Pack for Windows (1990) | tictacdp.exe | NE for Windows 3.x | 121376 | 
Tiles And Tribulations (1993) | tiles.exe | NE for Windows 3.x | 651004 | 
Timmy the Dream Hunter (1996) | tim1demo.exe | NE for Windows 3.x | 332288 | 
Timmy and the Magic Pictures (1995) | tim2demo.exe | NE for Windows 3.x | 413696 | 
Where in Time is Carmen Sandiego (1997) | time16.exe | NE for Windows 3.x | 1033744 | 
Escher Interactive - Exploring the Art of the Infinite (1996) | timeline.exe | NE for Windows 3.x | 332072 | 
Travel the World with Timmy! (1998) | timmy.exe | PE32 for Windows | 2455040 | 
Timmy and the Magic Pictures (1995) | timmy1.exe | NE for Windows 3.x | 333312 | 
Timmy the Dream Hunter (1996) | timmy2.exe | NE for Windows 3.x | 416000 | 
Incredible Machine Version 3.0, The (1995) | timwin.exe | PE32 for Windows | 454656 | 
Titanic - Adventure Out of Time (1996) | titanic.exe | NE for Windows 3.x | 83008 | 
Chessmaster 4000 Turbo, The (1993) | title.exe | NE for Windows 3.x | 7472 | 
Timelapse (1996) | tl.exe | PE32 for Windows | 471040 | 
Where in the USA is Carmen Sandiego (1996) | tlcrun.exe | NE for Windows 3.x | 8144 | 
Super Solvers - Treasure MathStorm! (1996) | tms16.exe | NE for Windows 3.x | 384000 | 
This Means War! (1996) | tmw.exe | NE for Windows 3.x | 1940480 | 
Jump Start Toddlers (1996) | toddler.exe | NE for Windows 3.x | 35048 | 
Tommy (1996) | tomstart.exe | NE for Windows 3.x | 698495 | 
Tonka Search and Rescue (1997) | tonka_sr.exe | NE for Windows 3.x | 561984 | 
Disney's Hunchback of Notre Dame - 5 Topsy Turvy Games (1996) | topsy.exe | NE for Windows 3.x | 95104 | 
Battleground - Ardennes (1995) | topten.exe | NE for Windows 3.x | 61262 | 
Time Out Sports - Basketball (1994) | tos.exe | NE for Windows 3.x | 79872 | 
Total Distortion (1995) | total_d.exe | NE for Windows 3.x | 700747 | 
Aviation Adventure (1994) | tower.exe | MS-DOS executable | 18528 | 
Double Feature Solitaire (1994) | towers.exe | NE for Windows 3.x | 34096 | 
Toy Story Power Play (1996) | toystory.exe | PE32 for Windows | 1638912 | 
Taipei (1990) | tp.exe | NE for Windows 3.x | 154328 | 
Big One, The (1994) | tpc.exe | MZ for MS-DOS, diet compressed | 6331 | 
Treasure Quest (1996) | tquest.exe | NE for Windows 3.x | 1692672 | 
Nine Worlds (1996) | trace.exe | NE for Windows 3.x | 160416 | 
Tracon for Windows (1993) | tracon.exe | NE for Windows 3.x | 538080 | 
Pilgrim - Faith as a Weapon (1998) | trailer.exe | NE for Windows 3.x | 831488 | 
Felix The Cat's Cartoon Toolbox (1995) | transfmr.exe | NE for Windows 3.x | 1542693 | 
Trap Shooting (1994) | trap.exe | NE for Windows 3.x | 190024 | 
Sportsman's Paradise (1998) | trappro.exe | NE for Windows 3.x | 1380563 | 
Muppet Treasure Island (1996) | treasure.exe | NE for Windows 3.x | 327152 | 
Spider-Man Cartoon Maker (1995) | tree.exe | NE for Windows 3.x | 36568 | 
WinTrek 2.0 (1992) | trek.exe | NE for Windows 3.x | 100272 | 
Living Puzzles - Triazzle (1995) | triazzle.exe | NE for Windows 3.x | 4189184 | 
Microsoft Entertainment Pack 3 (1991) | tripeaks.exe | NE for Windows 3.x | 115056 | 
Front Page Sports - Trophy Rivers (1997) | trivers.exe | PE32 for Windows | 671744 | 
Troggle Trouble Math (1994) | troggle.exe | NE for Windows 3.x | 456208 | 
Trudy's Time and Place House (1995) | trudy.exe | PE32 for Windows | 807936 | 
Dilbert - Not Just A Calendar (1997) | tsa16.exe | NE for Windows 3.x | 185360 | 
Disney's Toy Story Activity Center (1996) | tsac.exe | NE for Windows 3.x | 1931264 | 
Disney's Animated Storybook - Toy Story (1996) | tsasb.exe | NE for Windows 3.x | 1660416 | 
Thinkin' Things Collection 1 (1993) | tt.exe | MS-DOS executable | 2449 | 
Thinkin' Things Collection 2 (1995) | tt2.exe | MS-DOS executable | 2359 | 
Thinkin' Things Collection 2 (1995) | tt2exec.exe | MZ for MS-DOS | 400928 | 
Thinkin' Things Collection 2 (1995) | tt2w.exe | NE for Windows 3.x | 18960 | 
Thinkin' Things Collection 3 (1995) | tt3.exe | PE32 for Windows | 1043968 | 
Thinkin' Things Collection 1 (1993) | ttw.exe | NE for Windows 3.x | 18864 | 
Aviation Adventure (1994) | tu.exe | MS-DOS executable | 32746 | 
Tuneland (1994) | tuneland.exe | NE for Windows 3.x | 23968 | 
Peter and the Wolf (1995) | tunes.exe | NE for Windows 3.x | 221952 | 
Microsoft Entertainment Pack 2 (1991) | tutstomb.exe | NE for Windows 3.x | 101472 | 
Way Things Work, The (1994) | twtw.exe | NE for Windows 3.x | 534784 | 
Operation - Eco-Nightmare (1997) | tx2.exe | NE for Windows 3.x | 2585471 | 
Microsoft Bob (1995) | ubackup.exe | NE for Windows 3.x | 25123 | 
Microsoft Bob (1995) | ubackupx.exe | NE for Windows 3.x | 16675 | 
Greg Norman Ultimate Challenge Golf (1996) | ucg90.exe | NE for Windows 3.x | 739917 | 
Greg Norman Ultimate Challenge Golf (1996) | ucginit.exe | NE for Windows 3.x | 432679 | 
Jurassic Art (1997) | ug_draw.exe | NE for Windows 3.x | 1675018 | 
Jurassic Art (1997) | ug_font.exe | NE for Windows 3.x | 565085 | 
Jurassic Art (1997) | ug_view.exe | NE for Windows 3.x | 737358 | 
Animals Of Farthing Wood, The (1996) | ui16.exe | NE for Windows 3.x | 347984 | 
Jongg CD!, The (1997) | ultblast.exe | PE32 for Windows | 444928 | 
Las Vegas Super Casino (1997) | ultima21.exe | NE for Windows 3.x | 1393940 | 
Bricks (1996) | unhide.exe | NE for Windows 3.x | 5872 | 
Magic Theatre - Haunted House (1995) | unins000.exe | PE32 for Windows | 710426 | 
Reader Rabbit and Friends - Let's Start Learning (1995) | uninst16.exe | NE for Windows 3.x | 248176 | 
Dilbert - Not Just A Calendar (1997) | uninstal.exe | NE for Windows 3.x | 247296 | 
Uninvited (1993) | uninv.exe | NE for Windows 3.x | 476672 | 
Smart Games Stratajams (1997) | uninwing.exe | NE for Windows 3.x | 273920 | 
SimLife (1992) | univbe.exe | MS-DOS executable | 74412 | 
Mr. Drumstix' Music Studio (1993) | unpack.exe | NE for Windows 3.x | 41216 | 
Michael Ninn's Latex - The Game (1996) | unqtw.exe | NE for Windows 3.x | 232218 | 
After Dark 3.2 (1995) | unreg.exe | PE32 for Windows | 18944 | 
Warhammer - Shadow of the Horned Rat (1996) | unsetup.exe | NE for Windows 3.x | 265728 | 
Dinosaur Museum (1997) | unstall.exe | NE for Windows 3.x | 66479 | 
Millie Meters Nutrition Adventure (2001) | unwise.exe | NE for Windows 3.x | 245520 | 
Harpoon Classic (1995) | updreg.exe | NE for Windows 3.x | 4128 | 
Microsoft Bob (1995) | urestore.exe | NE for Windows 3.x | 20259 | 
Ultimate Solitaire Collection, The (1994) | usc.exe | NE for Windows 3.x | 201022 | 
Dilbert Screen Saver Collection (1994) | userinst.exe | NE for Windows 3.x | 11776 | 
Fall of the House of Usher, The (1994) | usher.exe | NE for Windows 3.x | 408064 | 
Invention Studio (1996) | usinvr.exe | NE for Windows 3.x | 216352 | 
Victory Or Defeat (1995) | usrguide.exe | NE for Windows 3.x | 545953 | 
Hoyle Battling Ships And War (1998) | utildel.exe | NE for Windows 3.x | 53200 | 
Microsoft Bob (1995) | utopiawa.exe | NE for Windows 3.x | 365200 | 
UltraVixen (1997) | uv31.exe | NE for Windows 3.x | 1098177 | 
UltraVixen (1997) | uvixen.exe | PE32 for Windows | 1472337 | 
Video Cube Space (1993) | v3.exe | NE for Windows 3.x | 731632 | 
Adventures of Valdo and Marie, The (1997) | valdo.exe | PE32 for Windows | 523264 | 
Mosaic (1993) | vedit2.exe | MS-DOS executable | 126872 | 
Victory Or Defeat (1995) | vicordef.exe | NE for Windows 3.x | 990208 | 
Aviation Adventure (1994) | vid.exe | MS-DOS executable | 526 | 
Quantum Gate (1993) | vidgame.exe | NE for Windows 3.x | 540352 | 
Vortex, The - Quantum Gate II (1994) | vidone.exe | NE for Windows 3.x | 73812 | 
Flight Sim Toolkit (1993) | view.exe | NE for Windows 3.x | 85505 | 
Don Quixote - A Multimedia Storybook (1992) | viewer.exe | NE for Windows 3.x | 284176 | 
Jongg CD!, The (1997) | viewer95.exe | PE32 for Windows | 177664 | 
Universe According to Virgil Reality, The (1996) | virgil.exe | NE for Windows 3.x | 102064 | 
Vikings - The Strategy of Ultimate Conquest (1996) | vk.exe | NE for Windows 3.x | 1347983 | 
Virtual Nightclub - A Game About Time (1997) | vnc.exe | NE for Windows 3.x | 726643 | 
Mosaic (1993) | voc-hdr.exe | MZ for MS-DOS | 25666 | 
Mosaic (1993) | voc2wav.exe | MS-DOS executable | 47802 | 
Mosaic (1993) | voice.exe | MS-DOS executable | 10397 | 
Rolling Stones Voodoo Lounge CD-ROM (1995) | voodoo.exe | NE for Windows 3.x | 866187 | 
Vortex, The - Quantum Gate II (1994) | vortex.exe | NE for Windows 3.x | 803712 | 
Enemy Nations (1996) | vpdiag.exe | PE32 for Windows | 164352 | 
Mosaic (1993) | vplay.exe | MS-DOS executable | 18114 | 
Casino Deluxe 2 (1996) | vpoke.exe | NE for Windows 3.x | 3084503 | 
Masque Video Poker (1995) | vpwin.exe | NE for Windows 3.x | 220928 | 
Spectre VR (1993) | vrchtect.exe | NE for Windows 3.x | 231424 | 
Mosaic (1993) | vrec.exe | MS-DOS executable | 19698 | 
EarthSiege 2 (1996) | vshell.exe | PE32 for Windows | 566304 | 
Aliens (1993) | waliens.exe | NE for Windows 3.x | 367616 | 
MicroProse Entertainment Pack Vol #1 - Dr Floyd's Desktop Toys (1993) | wallop.exe | NE for Windows 3.x | 3771771 | 
Whac-A-Mole (1994) | wam.exe | NE for Windows 3.x | 2894848 | 
FunPack (1993) | warhead.exe | NE for Windows 3.x | 68608 | 
Warpath (1994) | warpath.exe | NE for Windows 3.x | 332864 | 
ID4 Mission Disks (1996) | warrior.exe | NE for Windows 3.x | 1751593 | 
Freddi Fish and Luther's Water Worries (1996) | water.exe | NE for Windows 3.x | 21616 | 
Mosaic (1993) | wav2voc.exe | MS-DOS executable | 11532 | 
Battleship (1998) | wb2vovl.exe | NE for Windows 3.x | 237177 | 
WinGenius (1994) | wbaffle.exe | NE for Windows 3.x | 188960 | 
Winblocker (1996) | wblocker.exe | NE for Windows 3.x | 360192 | 
Monopoly (1995) | wchat.exe | NE for Windows 3.x | 408218 | 
WinGenius (1994) | wchecker.exe | NE for Windows 3.x | 221008 | 
Holiday Island (1996) | wconfig.exe | NE for Windows 3.x | 302080 | 
WinGenius (1994) | wconnect.exe | NE for Windows 3.x | 199328 | 
101 Dalmatians - Escape From DeVil Manor (1997) | wdalmat.exe | NE for Windows 3.x | 15360 | 
Weird - Truth is Stranger than Fiction (1997) | weird31.exe | NE for Windows 3.x | 389232 | 
Casino Master (1996) | welcome.exe | NE for Windows 3.x | 11072 | 
Sportsman's Paradise (1998) | wf3.exe | NE for Windows 3.x | 1437333 | 
SimEarth - The Living Planet (1990) | wgaia.exe | NE for Windows 3.x | 269824 | 
Take a Break! Pinball (1993) | what.exe | MS-DOS executable | 3170 | 
Word Heads (1997) | wheads.exe | PE32 for Windows | 1412273 | 
Word Heads (1997) | wheads16.exe | NE for Windows 3.x | 1035809 | 
Wheel Of Fortune (1994) | wheel.exe | NE for Windows 3.x | 1205776 | 
Warhammer - Shadow of the Horned Rat (1996) | whshr31.exe | PE32 for Windows | 576000 | 
Widget Workshop - The Mad Scientist's Laboratory (1995) | widget.exe | PE32 for Windows | 684032 | 
Wiggins in Storyland (1995) | wiggins.exe | NE for Windows 3.x | 145184 | 
Wiggins in Storyland (1995) | wigsnoop.exe | NE for Windows 3.x | 18432 | 
Fun Pack 3 (1995) | willi.exe | NE for Windows 3.x | 83252 | 
Arc of Doom (1994) | win32s.exe | NE for Windows 3.x | 880 | 
Widget Workshop - The Mad Scientist's Laboratory (1995) | win3_1.exe | NE for Windows 3.x | 1689687 | 
WinAdv (1992) | winadv.exe | NE for Windows 3.x | 111824 | 
APBA presents - Baseball for Windows (1995) | winbb.exe | NE for Windows 3.x | 1093632 | 
APBA presents - Baseball for Windows (1995) | winbjebe.exe | NE for Windows 3.x | 959488 | 
CatFight - The Ultimate Female Fighting Game (1996) | wincat.exe | PE32 for Windows | 361472 | 
Clue (1996) | winclue.exe | NE for Windows 3.x | 221696 | 
Cow V - The Great Egg Quest (1992) | wincow.exe | NE for Windows 3.x | 178176 | 
Timmy and the Magic Pictures (1995) | windemo.exe | NE for Windows 3.x | 279808 | 
Prairie Dog Hunt for Windows (1993) | windog.exe | NE for Windows 3.x | 375123 | 
APBA presents - Baseball for Windows (1995) | windraft.exe | NE for Windows 3.x | 954112 | 
WinFight (1993) | winfight.exe | NE for Windows 3.x | 175616 | 
Wings - Saigon to Persian Gulf (1998) | wingssp.exe | NE for Windows 3.x | 378384 | 
Harpoon Classic (1995) | winharp.exe | NE for Windows 3.x | 697920 | 
WinGenius (1994) | winhex.exe | NE for Windows 3.x | 141856 | 
Spaceward Ho! (1992) | winho.exe | NE for Windows 3.x | 544256 | 
WinGenius (1994) | winjump.exe | NE for Windows 3.x | 140976 | 
APBA presents - Baseball for Windows (1995) | winlm.exe | NE for Windows 3.x | 859136 | 
Microsoft Entertainment Pack for Windows (1990) | winmine.exe | NE for Windows 3.x | 31248 | 
Hollywood Mogul (1997) | winmogul.exe | NE for Windows 3.x | 590725 | 
Fun Pack 3 (1995) | winpool.exe | NE for Windows 3.x | 256407 | 
WinRisk (1992) | winrisk.exe | NE for Windows 3.x | 220672 | 
WinRoids (1993) | winroids.exe | NE for Windows 3.x | 346880 | 
Mosaic (1993) | winsetup.exe | NE for Windows 3.x | 23936 | 
APBA presents - Baseball for Windows (1995) | winstats.exe | NE for Windows 3.x | 679936 | 
WinTrek (1992) | wintrek.exe | NE for Windows 3.x | 143712 | 
Wishbone and the Amazing Odyssey (1996) | wish31.exe | NE for Windows 3.x | 1026617 | 
Wishbone and the Amazing Odyssey (1996) | wish95.exe | PE32 for Windows | 1622975 | 
Last Dynasty, The (1995) | wloader.exe | NE for Windows 3.x | 671248 | 
Treasure Quest (1996) | wmviplay.exe | NE for Windows 3.x | 20912 | 
Bizarre Adventures of Woodruff and the Schnibble, The (1995) | woodruff.exe | NE for Windows 3.x | 325632 | 
Great Math Adventure (1995) | word.exe | NE for Windows 3.x | 115392 | 
Crosswords and Word Games (1995) | wordsrch.exe | NE for Windows 3.x | 412880 | 
Microsoft Entertainment Pack 3 (1991) | wordzap.exe | NE for Windows 3.x | 90112 | 
Out of This World (1994) | world.exe | NE for Windows 3.x | 209168 | 
Sesame Street - Let's Make a Word! (1995) | wow.exe | NE for Windows 3.x | 406032 | 
Pirates! Gold (1994) | wp.exe | NE for Windows 3.x | 639414 | 
Disney's Animated Storybook - Winnie the Pooh and the Honey Tree (1995) | wphtasb.exe | NE for Windows 3.x | 433024 | 
Crosswords and Word Games (1995) | wrdmatch.exe | NE for Windows 3.x | 367864 | 
Quatra Command (1994) | write1.exe | MZ for MS-DOS Self-extracting PKZIP archive | 9229 | 
Jump Start Kindergarten Reading (1996) | wrkbk.exe | NE for Windows 3.x | 32862 | 
Harpoon Classic (1995) | wscenedt.exe | NE for Windows 3.x | 462256 | 
101 Dalmatians - Escape From DeVil Manor (1997) | wsetup.exe | NE for Windows 3.x | 15360 | 
SimFarm (1996) | wsimfarm.exe | NE for Windows 3.x | 2039872 | 
Fun Pack 3 (1995) | wslam.exe | NE for Windows 3.x | 82336 | 
World Series of Poker Deluxe Casino Pak (1995) | wsopdelx.exe | NE for Windows 3.x | 1250272 | 
Fisher-Price Great Adventures - Wild Western Town (1997) | wtown31.exe | NE for Windows 3.x | 1472175 | 
Welcome to the Future (1995) | wttf.exe | NE for Windows 3.x | 99216 | 
Arc of Doom (1994) | xcopy.exe | MS-DOS executable | 230377 | 
X-Fools, The - The Spoof is out There (1997) | xfools16.exe | NE for Windows 3.x | 1732991 | 
Star Warped (1997) | xman16.exe | NE for Windows 3.x | 1319015 | 
Microsoft Encarta '95 (1994) | xmplayer.exe | NE for Windows 3.x | 256352 | 
Xplora 1 - Peter Gabriel's Secret World (1993) | xplora1.exe | NE for Windows 3.x | 1064281 | 
Team Xtreme - Operation Weather Disaster (1995) | xtreme.exe | NE for Windows 3.x | 690123 | 
Yearn2Learn - Peanuts (1994) | y2l.exe | NE for Windows 3.x | 353633 | 
Yacht (1993) | yacht.exe | NE for Windows 3.x | 47616 | 
Ultimate Yahtzee (1996) | yahtzee.exe | PE32 for Windows | 317952 | 
Yellow Brick Road (1996) | ybr.exe | NE for Windows 3.x | 369007 | 
You Don't Know Jack XL (X-Tra Large)(1996) | ydkj.exe | NE for Windows 3.x | 302080 | 
You Don't Know Jack (1995) | ydkj101.exe | NE for Windows 3.x | 297472 | 
You Don't Know Jack - Volume 3 (1997) | ydkj316.exe | NE for Windows 3.x | 535040 | 
You Don't Know Jack Sports (1996) | ydkjs.exe | NE for Windows 3.x | 301568 | 
You Don't Know Jack - Television (1997) | ydkjtv16.exe | NE for Windows 3.x | 491008 | 
You Don't Know Jack - Volume 2 (1996) | ydkjv2.exe | NE for Windows 3.x | 429568 | 
Book of Shadowboxes, The (1995) | yelpnt.exe | NE for Windows 3.x | 85088 | 
Adventures of Ninja Nanny and Sherrloch Sheltie - No 11 Downing Street (1993) | ync.exe | MS-DOS executable | 6990 | 
Jongg CD!, The (1997) | yourjong.exe | PE32 for Windows | 1476608 | 
Yukon Trail, The (1994) | yukon.exe | NE for Windows 3.x | 401088 | 
Zombie Castle (1995) | z-share.exe | NE for Windows 3.x | 399643 | 
Zap! (1998) | zap.exe | PE32 for Windows | 3179520 | 
Babylon 5 - Shadow Wars (1997) | zapreg.exe | NE for Windows 3.x | 14752 | 
Zurk's Alaskan Trek (1995) | zatl.exe | NE for Windows 3.x | 698239 | 
Zeddas - Servant of Sheol (1995) | zeddas.exe | NE for Windows 3.x | 741818 | 
Zig-Zag (1994) | zigzag.exe | NE for Windows 3.x | 2996099 | 
Zurk's Learning Safari (1993) | zlsw.exe | NE for Windows 3.x | 274112 | 
Logical Journey of the Zoombinis (1996) | zoombini.exe | NE for Windows 3.x | 951824 | 
Zurk's Rainforest Lab (1995) | zrl.exe | NE for Windows 3.x | 246272 | 
Zombie Wars (1996) | zwars.exe | NE for Windows 3.x | 700928 | 

<!-- cspell:enable -->

---
## Windows Game Engines
For modern games the best way to see the wide range of game engines available for PC is to check out the **SteamDB** tech section which catalogs all the games by the game engines/libraries used to create them:
[Technologies - SteamDB](https://steamdb.info/tech/). But for earlier pre-steam titles it can be harder to track down information on their game engine, so this section will go through the most popular ones (there are too many PC game engines to list them all).

### id Tech 3 engine
The original PC version of **Call of Duty** (released in 2003) was built using a highly modified version of the id Tech 3 engine, which was originally used for games like **Quake III Arena**.
This engine was adapted and enhanced by Infinity Ward to deliver distinctive features for Call of Duty, and while later games in the series would use the proprietary **IW engine** (a fork that diverged from id Tech 3), the original game remained fundamentally based on id Tech 3

---
## Retro Game Programming Tutorials
If you are looking to reverse games from the late 1990s then it can sometimes be useful to see tutorials that were posted online during that time, **flipCode** had a good multi-part series on writing networking code [flipCode - Network Game Programming](https://web.archive.org/web/19990909174312/http://www.flipcode.com/network/)

---
## NVIDIA Tech Demos
NVIDIA's first tech demo can be traced back to the early years of the company. One notable early demo was showcased in 1999, featuring the GeForce 256, which was NVIDIA's first GPU. This demo highlighted the advanced capabilities of the GeForce 256, such as hardware transform and lighting, which were groundbreaking features at the time. 

Since then, NVIDIA has consistently released tech demos to showcase the capabilities of its new GPU architectures and technologies, these can be downloaded on their website and reverse engineered to see how they work [^3].

If you don't want to download and run each one you can watch this video by **Game Evolutions** showing off every demo from 1999 to 2022:
<iframe width="560" height="315" src="https://www.youtube.com/embed/jVoV2VysX3M?si=meImKQclk6YpLbOr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The UK Magazine Game Maker has an interview with Daniel Hornick, Hubert Nguyen and Curtis Beeson which described the process of creating these demos from concept to 3D art (in Maya) to code (in C++ or MEL) which is worth reading if you can find a copy [^4]. It describes techniques used in the production of the demos **Time Machine**, **Last Chance Gas Ultra**, **Ogre**, **Toys** and **Vulkan**.

---
### Playable3DMaze: Reverse Engineering the Windows 9x 3D Maze Screensaver
x86matthew's GitHub project documents the reverse-engineering process used to transform the classic Microsoft 3D Maze screensaver from Windows 9x into a playable game. 

The project focuses on modifying the original screensaver binary by patching out the computer-controlled logic and injecting a custom DLL to enable user-controlled keyboard input. This approach preserves the original OpenGL graphics and code, offering a look into the existing game logic within the executable.

{% include link-to-other-site.html url="https://github.com/x86matthew/Playable3DMaze" description="x86matthew has released Playable3DMaze, a project detailing the reverse engineering and modification of the original Windows 9x ssmaze.scr binary to add user-controlled keyboard input." image="https://opengraph.githubassets.com/1/x86matthew/Playable3DMaze" title="Playable3DMaze: A playable version of Microsoft's old 3DMaze screensaver from Windows 9x" %}

---
# Reverse Engineering

## DRM

### How To Hack A Denuvo Game
[Nathan Baggs](https://youtu.be/t_jyCBu0nUA) has a video detailing the reverse engineering process of an early version of Denuvo DRM in F1 2016. The content covers the VMP2 virtualization layer, hardware ID validation, and the development of custom tooling to handle obfuscation like jump flattening and dead store removal. It specifically demonstrates advanced techniques such as DLL hijacking, Vectored Exception Handlers (VEH) for silent patching, and dynamic binary instrumentation using Intel PIN to intercept hardware instructions like CPUID and RDTSC.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_jyCBu0nUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: PSi2 Issue 19
[^2]: [All Sony hardware that they developed - Generation MSX](https://www.generation-msx.nl/company/sony/14/hardware/)
[^3]: [Download NVIDIA Tech Demos - NVIDIA Cool Stuff](https://www.nvidia.com/en-gb/geforce/community/demos/)
[^4]: GameMaker UK Magazine Issue 1 October 2003 by Future Publishing
[^5]: [Juan Linietsky](https://x.com/reduzio/status/1832339488611107221)
