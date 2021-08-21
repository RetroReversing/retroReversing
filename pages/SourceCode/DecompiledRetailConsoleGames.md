---
permalink: /source-code/decompiled-retail-console-games
layout: post
title: Decompiled Retail Console Games
thumbnail: /public/consoles/Computer Old Design.png
image: /public/images/Decompiled Retail Console Games.jpg
twitterimage: https://www.retroreversing.com/public/images/Decompiled Retail Console Games.jpg
console: sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Decompiled Retail Console Games
    url: #
recommend: 
- sourcecode
- games
tags:
- sourcecode
- games
editlink: ../pages/SourceCode/DecompiledRetailConsoleGames.md
updatedAt: '2021-05-31'
---

This post contains either decompiled or disassembled source code projects for console games that were sold at retail stores.

If you are interested to see officially released or leaked source code check out this other post:
{% include link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}


To be included in this list the project must have decompiled or disassembled at least 25% of the course code, in order to not pollute the post with hundreds of unfinished projects. An exemption to this rule can be made for consoles with very few reversering projects.


# Nintendo Systems
Nintendo systems are by far the most popular for reverse engineering projects, especially related to 1st party titles such as Mario, Zelda and Pokemon.

## Nintendo Entertainment System (NES)

### Balloon Fight
{% include link-to-other-site.html url="https://github.com/LuigiBlood/balloonfight_dis" description="Project by LuigiBlood, requires BASS to assemble back into the retail ROM" image="https://upload.wikimedia.org/wikipedia/en/a/a8/BalloonFightnesboxart.jpg" title="Balloon Fight (USA) NES Disassembly"  %}

### Dragon Warrior
{% include link-to-other-site.html url="https://github.com/nmikstas/dragon-warrior-disassembly" description="Complete Dragon warrior disassembly by github user nmikstas, uses Ophis to assemble back into the original ROM" image="https://upload.wikimedia.org/wikipedia/en/8/84/Dragon_Warrior.jpg" title="Complete Dragon warrior disassembly"  %}

### Donkey Kong
{% include link-to-other-site.html url="https://github.com/RussianManSMWC/Donkey-Kong-NES-Disassembly" description="This is a disassembly of Donkey Kong for the NES and it's different revisions - Rev 0 (Japenese), Rev 1 (International) and Gamecube. It's fully disassembled but it's not fully documented. Doesn't include graphics data. You must rip it yourself. Assembles with asm6 assembler." image="https://static.wikia.nocookie.net/nes/images/9/9f/Donkey_Kong.JPG" title="Donkey Kong (NES)"  %}

### Final Fantasy
{% include link-to-other-site.html url="https://github.com/Entroper/FF1Disassembly" description="Completed documentation of all code, uses ca65 to assemble back to original ROM" image="https://upload.wikimedia.org/wikipedia/en/d/d8/FF1_USA_boxart.jpg" title="Final Fantasy 1 Disassembly"  %}

### Legend of Zelda
{% include link-to-other-site.html url="https://github.com/camthesaxman/zeldasource" description="This is a work in progress disassembly of The Legend of Zelda for the Nintendo Entertainment System, it uses CC65 to assemble back in to the original ROM" image="https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png" title="Disassembly of Legend of Zelda"  %}

### Mario Bros
{% include link-to-other-site.html url="https://github.com/RussianManSMWC/Mario-Bros.-Dis" description="Disassembly of Mario Bros for the NES" image="https://64.media.tumblr.com/3dbca9a9f380380c267b98ab8e6d451d/tumblr_mito3rZcIR1qbw2q1o1_r1_1280.jpg" title="Full disassembly of Mario Bros (NES)"  %}

### Mega Man 3
{% include link-to-other-site.html url="https://github.com/Raidenthequick/megaman3-disassembly" description="Fully complete disassembly of Mega Man 3 by Raidenthequick, it compiles into the US version of the ROM with the xkas assembler" image="https://upload.wikimedia.org/wikipedia/en/4/49/Megaman3_box.jpg" title="Full disassembly of Mega Man 3 (NES)"  %}

### Mega Man 4
{% include link-to-other-site.html url="https://github.com/Raidenthequick/megaman4-disassembly" description="Fully complete disassembly of Mega Man 4 by Raidenthequick, it compiles into the US version of the ROM with the xkas assembler" image="https://upload.wikimedia.org/wikipedia/en/8/8f/Megaman4_box.jpg" title="Full disassembly of Mega Man 4"  %}

### Mega Man 5
{% include link-to-other-site.html url="https://github.com/Raidenthequick/megaman5-disassembly" description="Fully complete disassembly of Mega Man 5 by Raidenthequick, it compiles into the US version of the ROM with the xkas assembler" image="https://upload.wikimedia.org/wikipedia/en/2/2c/Megaman5_box.jpg" title="Full disassembly of Mega Man 5"  %}

### Super Mario Bros
{% include link-to-other-site.html url="https://gist.github.com/1wErt3r/4048722" description="Complete disassembly of Super Mario Bros by doppelganger. Uses x816 to compile back to the original ROM." image="https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png" title="Full disassembly of Super Mario Bros" %}

### Super Mario Bros 2 The Lost Levels (Japanese)
{% include link-to-other-site.html url="https://github.com/threecreepio/smb2j-disassembly" description="" image="https://upload.wikimedia.org/wikipedia/en/b/b5/Mariobros2japanbox.jpg" title="Disassembly of Super Mario Bros 2" %}

### Super Mario Bros 3
{% include link-to-other-site.html url="https://github.com/captainsouthbird/smb3" description="Looks like a fairly complete Disassembly of Super Mario Bros 3 that uses NESASM to re-assemble back into the original US ROM" image="https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png" title="Disassembly of Super Mario Bros 3"  %}

### Tetris
{% include link-to-other-site.html url="https://github.com/CelestialAmber/TetrisNESDisasm" description="This is a disassembly of Tetris (NES) that uses cc65 as the assembler" image="https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_NES_cover_art.jpg" title="Disassembly of Tetris (NES)"  %}

---
## Super Nintendo (SNES)

### Donkey Kong Country 2
{% include link-to-other-site.html url="https://github.com/p4plus2/DKC2-disassembly" description="A repository dedicated to the reverse engineering of the SNES game DKC2." image="https://upload.wikimedia.org/wikipedia/en/c/c3/DK_Country_2.jpg" title="DKC2 Disassembly"  %}

### Super Bomberman
{% include link-to-other-site.html url="https://github.com/LIJI32/superbomberman" description="The Disassembly of Super Bomberman is about half complete and it uses ca65 to build the retail worldwide ROM images" image="https://upload.wikimedia.org/wikipedia/en/7/7a/Super.Bomberman.Box.Art.SNES.PAL.png" title="Disassembly and remade build system for SNES game Super Bomberman"  %}

### Super Mario All-Stars
{% include link-to-other-site.html url="https://github.com/Ersanio/SMAS-Disassembly" description="Incomplete Super Mario All-Stars Disassembly project, has made great progress but still quite a lot of work to do. There are plans to make this disassembly assemble-able in either xkas or asar" image="https://upload.wikimedia.org/wikipedia/en/3/3c/Super_Mario_All_Stars_%28game_box_art%29.jpg" title="Disassembly of the Super Mario All-Stars ROM"  %}

### Super Mario World
{% include link-to-other-site.html url="https://github.com/Dotsarecool/SMWDisX" description="(Yet another) disassembly of Super Mario World. This disassembly will focus on code readability and the ability to assemble any of the four console releases of the original game (J, U, E 1.0, & E 1.1). It also assembles the Super System arcade version of the game. Uses the Asar v1.61 Assembler to build back into original ROMs" image="https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png" title="SMW Disassembly X"  %}

### Super Mario World 2: Yoshi's Island
{% include link-to-other-site.html url="https://github.com/Raidenthequick/yoshisisland-disassembly" description="Disassembly is 100% finished, assembles under Asar and produces a fully clean ROM." image="https://upload.wikimedia.org/wikipedia/en/9/9a/Yoshi%27s_Island_%28Super_Mario_World_2%29_box_art.jpg" title="Full disassembly of Yoshi's Island (SNES) version U 1.0"  %}

### Super Mario RPG
{% include link-to-other-site.html url="https://github.com/Yoshifanatic1/Super-Mario-RPG-Disassembly" description="This project is a disassembly of Super Mario RPG for the Super Famicom (SNES), it is not under active development." image="https://upload.wikimedia.org/wikipedia/en/8/89/SuperMarioRPGSNESCoverArtUS.jpg" title="Super Mario RPG Disassembly"  %}

### Super Metroid
{% include link-to-other-site.html url="https://github.com/strager/supermetroid" description="This project is a disassembly of Super Metroid for the Super Famicom (SNES), it is still under active development." image="https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg" title="Super Metroid SNES game, disassembled"  %}

---
## Nintendo 64
Recently, mainly in thanks to the huge success of the Super Mario 64 project, there has been revived interest in Nintendo 64 Decompilation. While most projects are still in very early stages, there are a few that meet the criteria for this list.

### Banjo Kazooie
{% include link-to-other-site.html url="https://github.com/n64decomp/banjo-kazooie" description="Decompilation of Banjo Kazooie, about 20% complete" image="https://upload.wikimedia.org/wikipedia/en/1/12/Banjo_Kazooie_Cover.png" title="Decompilation of Banjo Kazooie"  %}

### Blast Corps
{% include link-to-other-site.html url="https://github.com/retroplastic/blastcorps" description="Disassembly of Blast Corps" image="https://upload.wikimedia.org/wikipedia/en/8/83/Blast_Corps_Coverart.png" title="Blast Corps"  %}

### Body Harvest
{% include link-to-other-site.html url="https://github.com/jaytheham/body-harvest-decompilation" description="Disassembly of Body Harvest" image="https://upload.wikimedia.org/wikipedia/en/a/a3/Body_Harvest.jpg" title="Body Harvest"  %}

### Conker's Bad Fur Day
{% include link-to-other-site.html url="https://github.com/mkst/conker" description="Decompilation of Conker, about 4% complete" image="https://upload.wikimedia.org/wikipedia/en/9/99/Conkersbfdbox.jpg" title="Decompilation of Conker's Bad Fur Day"  %}

### Diddy Kong Racing
{% include link-to-other-site.html url="https://github.com/DavidSM64/Diddy-Kong-Racing" description="A very early decompilation of Diddy Kong Racing source by DavidSM64" image="https://upload.wikimedia.org/wikipedia/en/a/a0/DKRboxart.jpg" title="Diddy Kong Racing"  %}

### Dinosaur Planet
{% include link-to-other-site.html url="https://github.com/zestydevy/dinosaur-planet" description="A decompilation of Dinosaur Planet" image="https://static.wikia.nocookie.net/starfox/images/1/1f/Dinosaur_planet_wallpaper.jpg/revision/latest/scale-to-width-down/1000?cb=20100131064948" title="Decompilation of Dinosaur Planet"  %}

### Doom 64
{% include link-to-other-site.html url="https://github.com/Erick194/DOOM64-RE" description="A decompilation of Doom 64 by the GEC Team" image="https://upload.wikimedia.org/wikipedia/en/2/2b/Doom_64_box.jpg" title="Decompilation of Doom 64"  %}

### Goldeneye 007
{% include link-to-other-site.html url="https://github.com/n64decomp/007" description="A an early decompilation of Goldeneye 007" image="https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg" title="Goldeneye 007 Decompilation"  %}

### Kirby 64: The Crystal Shards
{% include link-to-other-site.html url="https://github.com/farisawan-2000/kirby64" description="A decompilation of Kirby 64" image="https://upload.wikimedia.org/wikipedia/en/c/c1/Kirby64_box.jpg" title="Kirby 64 disassembly"  %}

### Mario Party
{% include link-to-other-site.html url="https://github.com/gamemasterplc/mpsource" description="A decompilation of the original Mario Party" image="https://upload.wikimedia.org/wikipedia/en/c/cd/Marioparty1.jpg" title="Mario Party disassembly"  %}

### Mario Party 3
{% include link-to-other-site.html url="https://github.com/PartyPlanner64/mp3" description="A decompilation of Mario Party 3" image="https://upload.wikimedia.org/wikipedia/en/1/19/Marioparty3.jpg" title="Mario Party 3 disassembly"  %}

### Mario Kart 64
{% include link-to-other-site.html url="https://github.com/ProjectRevoTPP/mk64" description="A decompilation of Mario Kart 64 source" image="https://upload.wikimedia.org/wikipedia/en/7/7e/Mario_Kart_64box.png" title="A Mario Kart 64 disassembly"  %}

### Neon Genesis Evangelion
{% include link-to-other-site.html url="https://github.com/farisawan-2000/evangelion" description="A decompilation of Neon Genesis Evangelion" image="https://upload.wikimedia.org/wikipedia/en/c/cf/Neon_Genesis_Evangelion_64_Game_Box.jpg" title="Neon Genesis Evangelion disassembly"  %}

### Super Mario 64
{% include link-to-other-site.html url="https://github.com/n64decomp/sm64" description="This repo contains a full decompilation of Super Mario 64 (J), (U), and (E) with minor exceptions in the audio subsystem. it uses the original IRIX based compiler toolchain to build wrapped in QEMU-IRIX for compatibility on modern systems." image="https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg" title="Super Mario 64 decompilation"  %}

### Superman 64
{% include link-to-other-site.html url="https://github.com/farisawan-2000/superman" description="A decompilation of Superman 64 source" image="https://upload.wikimedia.org/wikipedia/en/3/3b/Superman64box.jpg" title="Superman 64 disassembly"  %}

### The Legend of Zelda: Ocarina of Time
{% include link-to-other-site.html url="https://github.com/zeldaret/oot" description="This is a WIP decompilation of The Legend of Zelda: Ocarina of Time. The purpose of the project is to recreate a source code base for the game from scratch, using information found inside the game along with static and/or dynamic analysis. The only build currently supported is Master Quest (Debug), but other versions are planned to be supported." image="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png/220px-The_Legend_of_Zelda_Ocarina_of_Time_box_art.png" title="Decompilation of The Legend of Zelda: Ocarina of Time"  %}

### The Legend of Zelda: Majora's Mask
{% include link-to-other-site.html url="https://github.com/zeldaret/mm" description="A decompilation of The Legend of Zelda: Majora's Mask brought to you by a bunch of clever folks" image="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg/220px-The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg" title="Decompilation of The Legend of Zelda: Majora's Mask"  %}

### Paper Mario
{% include link-to-other-site.html url="https://github.com/pmret/papermario" description="Decompilation of Paper Mario, about 30% complete" image="https://images.nintendolife.com/847b9a804f99c/paper-mario-cover.cover_large.jpg" title="Decompilation of Paper Mario"  %}

### Pokemon Snap
{% include link-to-other-site.html url="https://github.com/ethteck/pokemonsnap" description="An early Decompilation of Pokemon Snap" image="https://upload.wikimedia.org/wikipedia/en/0/0a/Pokémon_Snap_Coverart.png" title="Decompilation of Pokemon Snap"  %}

### Pokemon Stadium
{% include link-to-other-site.html url="https://github.com/ethteck/pokemonstadium" description="Early Decompilation of Pokemon Stadium" image="https://upload.wikimedia.org/wikipedia/en/7/70/Pokemonstadiumbox.jpg" title="Decompilation of Pokemon Stadium"  %}

### Quest 64
{% include link-to-other-site.html url="https://github.com/mallos31/quest64" description="Very early Decompilation of Quest 64" image="https://upload.wikimedia.org/wikipedia/en/a/ae/Quest64_big.jpg" title="Decompilation of Quest 64"  %}

---
## Nintendo GameCube

### Naruto: Gekitō Ninja Taisen! 4
{% include link-to-other-site.html url="https://github.com/doldecomp/gnt4" description="" image="https://images-na.ssl-images-amazon.com/images/I/51G3ZCM607L._AC_.jpg" title="Naruto: Gekitō Ninja Taisen! 4"  %}

### Legend of Zelda: Twilight Princess
{% include link-to-other-site.html url="https://github.com/zeldaret/tp" description="" image="https://www.covercentury.com/covers/gamecube/t/gc_thelegendofzeldatwilightprincess_au.jpg" title="Legend of Zelda: Twilight Princess"  %}

### Paper Mario: The Thousand Year Door
{% include link-to-other-site.html url="https://github.com/doldecomp/ttyd" description="" image="https://upload.wikimedia.org/wikipedia/en/1/18/Paper_Mario_The_Thousand-Year_Door_%28artwork%29.jpg" title="Paper Mario: The Thousand Year Door"  %}

### Super Smash Bros Melee
{% include link-to-other-site.html url="https://github.com/doldecomp/melee" description="." image="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Super_Smash_Bros_Melee_box_art.png/220px-Super_Smash_Bros_Melee_box_art.png" title="A decompilation of Super Smash Bros Melee"  %}

### Super Mario Sunshine
{% include link-to-other-site.html url="https://github.com/JimB16/SMS" description="Disassembly of the main .dol-file of Super Mario Sunshine, lacks documentation but a very impressive project." image="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Super_mario_sunshine.jpg/220px-Super_mario_sunshine.jpg" title="Disassembly of Super Mario Sunshine"  %}

---
## Nintendo Wii

### Speed Racer
{% include link-to-other-site.html url="https://github.com/farisawan-2000/speedracer" description="Speed Racer for Wii Disassembly with a single decompiled function in C" image="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Speed_Racer_game_Wii.jpg/220px-Speed_Racer_game_Wii.jpg" title="Speed Racer" %}

### Wii Sports
{% include link-to-other-site.html url="https://github.com/doldecomp/ogws" description="" image="https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg" title="Wii Sports" %}

### Legend of Zelda Ocarina of Time (Wii Virtual Console)
{% include link-to-other-site.html url="https://github.com/doldecomp/ogws" description="Disassembly of Legend of Zelda Ocarina of Time for the Wii Virtual Console" image="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png/220px-The_Legend_of_Zelda_Ocarina_of_Time_box_art.png" title="Disassembly of Legend of Zelda Ocarina of Time" %}

---
## Nintendo Switch

### The Legend of Zelda: Breath of the Wild
{% include link-to-other-site.html url="https://github.com/zeldaret/botw" description="Initial decompilation of the Nintendo switch version of BOTW, it uses the devkitA64 toolchain" image="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" title="A decompilation of LOZ BOTW"  %}

### Super Mario Odyssey
{% include link-to-other-site.html url="https://github.com/shibbo/OdysseyDecomp" description="Initial decompilation of the Nintendo switch game Super Mario Odyssey" image="https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg" title="A decompilation of Super Mario Odyssey"  %}

---
# Nintendo Handhelds

## Nintendo Game Boy

### Donkey Kong '94
{% include link-to-other-site.html url="https://github.com/CelestialAmber/DKGBDisasm" description="" image="https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Donkey_Kong_94_box_art.jpg/220px-Donkey_Kong_94_box_art.jpg" title="Donkey Kong '94"  %}

### Kirby's Dream Land
{% include link-to-other-site.html url="https://github.com/huderlem/kirbydreamland" description="This is a disassembly of Kirby's Dream Land (Game Boy), still under active development but many subroutines still to be named. It uses the RGBDS assembler." image="https://upload.wikimedia.org/wikipedia/en/8/83/Kdl1ussmall.jpg" title="Disassembly of Kirby's Dream Land"  %}

### Mole Mania
{% include link-to-other-site.html url="https://github.com/froggestspirit/mmania" description="" image="https://upload.wikimedia.org/wikipedia/en/0/02/Mole_mania_boxart.png" title="Mole Mania"  %}

### Pokemon Red & Blue
{% include link-to-other-site.html url="https://github.com/pret/pokered" description="This is a fully complete disassembly of Pokémon Red and Blue. It uses the RGBDS assembler." image="https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Pok%C3%A9mon_Red_and_Blue_cover_art.webp/440px-Pok%C3%A9mon_Red_and_Blue_cover_art.webp.png" title="Disassembly of Pokémon Red/Blue"  %}

### Pokemon Yellow
{% include link-to-other-site.html url="https://github.com/pret/pokeyellow" description="This is a fully complete disassembly of Pokémon Yellow.  It uses the RGBDS assembler." image="https://upload.wikimedia.org/wikipedia/en/4/4a/Pokemon_Yellow.png" title="Disassembly of Pokemon Yellow"  %}

### Super Mario Land
{% include link-to-other-site.html url="https://github.com/kaspermeerts/supermarioland" description="Incomplete disassembly of Super Mario Land (World) (Rev A). It uses the RGBDS assembler." image="https://upload.wikimedia.org/wikipedia/en/0/02/Supermariolandboxart.jpg" title="Super Mario Land disassembly"  %}

### Super Mario Land 2: Six Golden Coins
{% include link-to-other-site.html url="https://github.com/froggestspirit/marioland2" description="" image="https://upload.wikimedia.org/wikipedia/en/0/0d/Super_Mario_Land_2_box_art.jpg" title="Super Mario Land 2: Six Golden Coins disassembly"  %}

### Super Mario Land 3: Wario Land
{% include link-to-other-site.html url="https://github.com/Kak2X/wl" description="" image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Wario_Land_Box_Art.jpg/220px-Wario_Land_Box_Art.jpg" title="Super Mario Land 3 disassembly"  %}

---
## Nintendo Game Boy Color

### The Legend of Zelda Links Awakening DX
{% include link-to-other-site.html url="https://github.com/zladx/LADX-Disassembly" description="Links Awakening DX Disassembly still under active development. It uses RGBDS to build into the worldwide ROM set." image="https://upload.wikimedia.org/wikipedia/en/c/c1/Link%27s_Awakening.png" title="Disassembly of Legend of Zelda: Links Awakening DX"  %}

### The Legend of Zelda Oracle of Ages & Seasons
{% include link-to-other-site.html url="https://github.com/Drenn1/oracles-disasm" description="This is intended to be a full disassembly of Oracle of Ages and Seasons for the Gameboy Color. The disassembly uses WLA-DX as its assembler." image="https://upload.wikimedia.org/wikipedia/en/a/af/The_Legend_of_Zelda_Oracle_of_Seasons_and_Oracle_of_Ages_Game_Cover.jpg" title="Disassembly of Oracle of Ages and Seasons"  %}

### Looney Tunes: Carrot Crazy
{% include link-to-other-site.html url="https://github.com/huderlem/carrotcrazy" description="Links Awakening DX Disassembly still under active development. It uses RGBDS to build into the worldwide ROM set." image="https://upload.wikimedia.org/wikipedia/en/f/f8/Looney_Tunes_Carrot_Crazy.jpg" title="Looney Tunes: Carrot Crazy"  %}

### Pokemon Gold & Silver
{% include link-to-other-site.html url="https://github.com/pret/pokegold" description="This is a fully documented disassembly of Pokemon Gold and Pokemon Silver. It uses the RGBDS assembler to build into the retail ROMs" image="https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png" title="Disassembly of Pokémon Gold/Silver"  %}

### Pokemon Crystal
{% include link-to-other-site.html url="https://github.com/pret/pokecrystal" description="This is a fully documented disassembly of Pokemon Crystal. It uses the RGBDS assembler to build into the retail ROMs" image="https://upload.wikimedia.org/wikipedia/en/a/af/Pokemon_Crystal_Box.png" title="Disassembly of Pokémon Crystal"  %}

### Pokemon Pinball
{% include link-to-other-site.html url="https://github.com/pret/pokepinball" description="This is a disassembly of Pokémon Pinball (Game Boy Color), the assembler used is rgbds version 0.4.0." image="https://upload.wikimedia.org/wikipedia/en/e/e9/Pok%C3%A9mon_Pinball_Coverart.png" title="Disassembly of Pokémon Pinball"  %}

### Pokemon Trading Card Game
{% include link-to-other-site.html url="https://github.com/pret/poketcg" description="This is a disassembly of Pokémon TCG that uses the RGBDS assembler toolchain to build the retail ROM." image="https://upload.wikimedia.org/wikipedia/en/1/19/Pok%C3%A9mon_Trading_Card_Game_Coverart.png" title="Disassembly of Pokémon TCG"  %}

### Pokémon Puzzle Challenge
{% include link-to-other-site.html url="https://github.com/pret/pokepuzzle" description="This is a disassembly of Pokémon Puzzle Challenge that uses the RGBDS assembler toolchain to build the retail ROM." image="https://upload.wikimedia.org/wikipedia/en/f/f5/Pok%C3%A9mon_Puzzle_Challenge_Coverart.png" title="Disassembly of Pokémon Puzzle Challenge"  %}

### Wario Land 3
{% include link-to-other-site.html url="https://github.com/froggestspirit/wland3" description="" image="https://upload.wikimedia.org/wikipedia/en/c/cb/Warioland3.jpg" title="Wario Land 3 disassembly"  %}

---
## Game Boy Advance

### Banjo Kazooie Grunty's Revenge
{% include link-to-other-site.html url="https://github.com/jellees/bkgr" description="" image="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Bkgruntysrevengentsc.jpg/220px-Bkgruntysrevengentsc.jpg" title="Banjo Kazooie Grunty's Revenge"  %}

### Fire Emblem: The Sacred Stones
{% include link-to-other-site.html url="https://github.com/FireEmblemUniverse/fireemblem8u" description="This is a disassembly of Fire Emblem: The Sacred Stones (U)[!], it uses the devkitARM SDK to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/1/1e/Fire_Emblem_The_Sacred_Stones.JPG" title="Decompilation/disassembly of Fire Emblem: The Sacred Stones"  %}

### Kirby & The Amazing Mirror
{% include link-to-other-site.html url="https://github.com/jiangzhengwenjz/katam" description="This is a disassembly of Kirby & The Amazing Mirror (USA), it uses the devkitARM SDK to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/0/0b/Kirby_%26_the_Amazing_Mirror.jpg" title="Disassembly of Kirby & The Amazing Mirror (USA)"  %}

### The Legend of Zelda: The Minish Cap
{% include link-to-other-site.html url="https://github.com/zeldaret/tmc" description="" image="https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_Game_Cover.JPG" title="The Legend of Zelda: The Minish Cap"  %}

### Mario & Luigi Superstar Saga
{% include link-to-other-site.html url="https://github.com/nstearns96/MLSuperstarSaga" description="" image="https://upload.wikimedia.org/wikipedia/en/6/63/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg" title="Mario & Luigi Superstar Saga"  %}

### Mario VS Donkey Kong
{% include link-to-other-site.html url="https://github.com/camthesaxman/mariovsdk" description="" image="https://mario.wiki.gallery/images/9/9b/Mvd.jpg" title="Decompilation of Mario VS Donkey Kong"  %}

### Pokemon Ruby & Sapphire
{% include link-to-other-site.html url="https://github.com/pret/pokeruby" description="This is a disassembly of Pokémon Ruby and Sapphire, it uses the devkitARM SDK to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/b/be/PokemonRubySapphireBox.jpg" title="Decompilation of Pokémon Ruby/Sapphire"  %}

### Pokemon Emerald
{% include link-to-other-site.html url="https://github.com/pret/pokeemerald" description="This is a decompilation of Pokémon Emerald, it uses the devkitARM SDK to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg" title="Decompilation of Pokémon Emerald"  %}

### Pokemon FireRed & LeafGreen
{% include link-to-other-site.html url="https://github.com/pret/pokefirered" description="This is a disassembly of Pokémon FireRed and LeafGreen, it uses the devkitARM SDK to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg" title="Decompilation of Pokémon FireRed/LeafGreen"  %}

### Pokémon Mystery Dungeon: Red Rescue Team
{% include link-to-other-site.html url="https://github.com/pret/pmd-red" description="This is a disassembly of Pokémon Mystery Dungeon: Red Rescue Team, it uses the devkitARM SDK to build the ROM" image="https://images.nintendolife.com/3f3cb022ee63f/pokemon-mystery-dungeon-red-rescue-team-cover.cover_large.jpg" title="Decompilation of Pokémon Mystery Dungeon: Red Rescue Team"  %}

### Sonic Advance 2
{% include link-to-other-site.html url="https://github.com/froggestspirit/SoAdvance2" description="" image="https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_Game_Cover.JPG" title="The Legend of Zelda: The Minish Cap"  %}

### Super Mario Advance 2: Super Mario World
{% include link-to-other-site.html url="https://github.com/atasro2/sma2" description="" image="https://coverproject.sfo2.cdn.digitaloceanspaces.com/gameboy_advance/supermarioadvance2_thumb.jpg" title="Decompilation of Super Mario Advance 2: Super Mario World"  %}

---
## Nintendo DS

### Pokemon Platinum
{% include link-to-other-site.html url="https://github.com/JimB16/PokePlat" description="Impressive Disassembly of the NDS game Pokemon Platinum. Uses the DevKitARM toolchain to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Pokemon_Platinum.png/220px-Pokemon_Platinum.png" title="Disassembly of Pokemon Platinum"  %}

---
# Sega Systems
Sega is similar to Nintendo in that most of the games that people are interested in reverse engineering are 1st party titles such as Sonic and Phantasy Star.

## 32X

### Knuckles Chaotix
{% include link-to-other-site.html url="https://github.com/sonicretro/chaotix" description="Knuckles Chaotix" image="https://upload.wikimedia.org/wikipedia/en/d/dd/Knuckles%27_Chaotix_Coverart.png" title="Knuckles Chaotix"  %}

## Sega CD

### Shining Force CD
{% include link-to-other-site.html url="https://github.com/ShiningForceCentral/SFCDDISASM" description="." image="https://upload.wikimedia.org/wikipedia/en/f/f5/Shining_Force_CD.jpg" title="A disassembly of the game Shining Force CD"  %}

---
## Sega Master System
Although the Sega Master System was hugely popular in Europe, it can't compete with the NES for number of disassembled projects created so far.

### Phantasy Star
{% include link-to-other-site.html url="https://github.com/lory90/ps1disasm" description="Incomplete Phantasy Star Disassembly for Sega Master System from SonicRetro. It uses the wla-z80 assembler to build the ROM" image="https://upload.wikimedia.org/wikipedia/en/3/34/Phantasy_Star_MS_cover.png" title="Phantasy Star Disassembly"  %}

### Sonic 2 (SMS)
{% include link-to-other-site.html url="https://github.com/sonicretro/s2smsdisasm" description="Sonic 2 for the Sega Master System Incomplete Disassembly from SonicRetro. It uses the wla-z80 assembler to build the ROM." image="https://greenhillszone.files.wordpress.com/2011/03/sonic_the_hedgehog_2_8-bit.png" title="Sonic 2 SMS Disassembly"  %}

---
## Sega Mega Drive
The Sega Mega Drive was Sega's most popular console in terms of games developed, and as such it also seems to be the most popular for reverse engineering projects too.

### Kid Chameleon
{% include link-to-other-site.html url="https://github.com/sonicretro/kid-chameleon-disasm" description="Kid Chameleon Disassembly seems to be fairly well documented but still needs much more work to document each subroutine" image="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Kid_Chameleon_Coverart.png/220px-Kid_Chameleon_Coverart.png" title="Split disassembly of Kid Chameleon"  %}

### Knucles the Echidna in Sonic 2
{% include link-to-other-site.html url="https://github.com/sonicretro/ktes2" description="Knucles the Echidna in Sonic 2" image="https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg" title="Knucles the Echidna in Sonic 2"  %}

### Phantasy star II
{% include link-to-other-site.html url="https://github.com/lory90/ps2disasm" description="Incomplete Phantasy star II Disassembly for Mega Drive/Genesis by lory90. It uses an assembler called ASW." image="https://upload.wikimedia.org/wikipedia/en/d/d4/Phantasy_Star_II.jpg" title="Phantasy Star II Disassembly"  %}

### Phantasy star III
{% include link-to-other-site.html url="https://github.com/lory90/ps3disasm" description="Incomplete Phantasy star III Disassembly for Mega Drive/Genesis by lory90. It uses an assembler called ASW." image="https://upload.wikimedia.org/wikipedia/en/c/c9/Phantasy_Star_III_box_US.jpg" title="Phantasy Star III Disassembly"  %}

### Phantasy Star IV
{% include link-to-other-site.html url="https://github.com/lory90/ps4disasm" description="Incomplete Phantasy star IV Disassembly for Mega Drive/Genesis by lory90. It uses an assembler called ASW." image="https://upload.wikimedia.org/wikipedia/en/6/67/Phantasy_Star_EotM_cover.jpg" title="Phantasy Star IV Disassembly"  %}

### Ristar
{% include link-to-other-site.html url="https://github.com/sonicretro/ristar" description="A disassembly of Ristar for the Sega Mega Drive/Genesis by SonicRetro." image="https://upload.wikimedia.org/wikipedia/en/2/2a/Ristar_cover_EU.jpg" title="Ristar Disassembly"  %}

### Sonic 1
{% include link-to-other-site.html url="https://github.com/sonicretro/s1disasm" description="The very latest Sonic 1 Disassembly, under very active development by the SonicRetro team. It uses the ASM68K assembler." image="https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg" title="Sonic 1 Disassembly"  %}

### Sonic 2
{% include link-to-other-site.html url="https://github.com/sonicretro/s2disasm" description="A disassembly of Sonic the Hedgehog 2 for the Sega Mega Drive/Genesis by SonicRetro. It uses the AS Macroassembler." image="https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg" title="Sonic 2 Disassembly"  %}

### Sonic 3
{% include link-to-other-site.html url="https://github.com/sonicretro/s2disasm" description="A disassembly of Sonic the Hedgehog 3 for the Sega Mega Drive/Genesis by SonicRetro. It uses the AS Macroassembler." image="https://upload.wikimedia.org/wikipedia/en/0/07/Sonic3-box-us-225.jpg" title="Sonic 3 Disassembly"  %}

### Sonic 3D Blast
{% include link-to-other-site.html url="https://github.com/sonicretro/s3ddisasm" description="A disassembly of Sonic 3D Blast for the Sega Mega Drive/Genesis by SonicRetro. It uses the AS Macroassembler." image="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Sonic3D.jpg/220px-Sonic3D.jpg" title="Sonic 3D Blast Disassembly"  %}

### Sonic and Knuckles
{% include link-to-other-site.html url="https://github.com/sonicretro/skdisasm" description="A disassembly of Sonic and Knuckles for the Sega Mega Drive/Genesis by SonicRetro. It uses the AS Macroassembler." image="https://upload.wikimedia.org/wikipedia/en/d/d3/Sonic_%26_Knuckles_cover.jpg" title="Sonic and Knuckles Disassembly"  %}

### Sonic Spinball 
{% include link-to-other-site.html url="https://github.com/sonicretro/spindisasm" description="This is the Sonic Spinball disassembly by Andlabs converted to a .asm file and fixed up to produce an accurate build in asm68k." image="https://upload.wikimedia.org/wikipedia/en/6/6c/Sonic_Spinball_Box.jpeg" title="Sonic Spinball Disassembly"  %}

---
## Sega CD

### Shining Force CD
{% include link-to-other-site.html url="https://github.com/ShiningForceCentral/SFCDDISASM" description="." image="https://upload.wikimedia.org/wikipedia/en/f/f5/Shining_Force_CD.jpg" title="A disassembly of the game Shining Force CD"  %}

---
## Sega Game Gear (GG)

### Sonic 1 (GG)
{% include link-to-other-site.html url="https://github.com/TheRavenfreak/Sonic-1-Game-Gear-Disassembly" description="." image="https://upload.wikimedia.org/wikipedia/en/4/46/Sonic1GGCoverArt.jpg" title="A work in progress split disassembly of Sonic The Hedgehog on the Sega Game Gear"  %}

---
## Sega Dreamcast (DC)

### Sonic Adventure (DC)
{% include link-to-other-site.html url="https://github.com/sonicretro/sad_disasm" description="Very early disassembly of Sonic Adventure for the Dreamcast" image="https://upload.wikimedia.org/wikipedia/en/6/60/Sonic_Adventure.PNG" title="Sonic Adventure (DC) Disassembly"  %}

---
# Sony Systems
Compared to the other systems, Sony doesn't have many decompilation projects, mainly due to the higher complexity of the games developed by the PS1 era, requiring much larger teams to create the games in the first place.

## Playstation 1

### Tomb Raider: Chronicles
{% include link-to-other-site.html url="https://github.com/TOMB5/TOMB5" description="This repository contains decompiled code for the game Tomb Raider: Chronicles. All decompiled code is based off the final PlayStation and PC version. The goal is to decompile as much as possible since the original source code is reportedly lost. It is not expected for decompiled code to be 1:1 with the original source code. However, functionality wise it will be the same." image="https://upload.wikimedia.org/wikipedia/en/3/3f/Tomb_Raider_-_Chronicles.png" title="Tomb Raider: Chronicles Disassembly translated to C source code"  %}

### Need for Speed: High Stakes
{% include link-to-other-site.html url="https://github.com/OpenNFS/NFSHSX" description="A very early decompilation project for Need For Speed 4, but the progress that has been made is very impressive." image="https://upload.wikimedia.org/wikipedia/en/e/e2/NFS_High_Stakes_box.jpg" title="Need for Speed: High Stakes Disassembly translated to C source code"  %}

### PSX DOOM
{% include link-to-other-site.html url="https://github.com/RetailGameSourceCode/PSXDOOM-RE" description="The complete reverse engineering of PSX Doom by [GEC], this effort took about 2 and a half years to complete." image="https://doomwiki.org/w/images/0/0a/PSXDoomBoxArt.jpg" title="Psx Doom Reverse Engineering"  %}

---
# Microsoft Systems
There are only a handful of reverse engineered games for Microsoft games consoles.

## Xbox 360

### Terraria
{% include link-to-other-site.html url="https://github.com/dptug/TerrariaXDK" description="Since Terraria is based on XNA which is a C# library, it is possible to decompile back into C# source code. This project is still very early but has some interesting results." image="https://upload.wikimedia.org/wikipedia/en/4/42/TerrariaLogo2.png" title="Broken Decompiled Terraria Xbox 360 Edition source code"  %}

## PC

### Sonic CD
{% include link-to-other-site.html url="https://github.com/sonicretro/scdpc_disasm" description="" image="https://thumbnails.pcgamingwiki.com/8/8f/Sonic_CD_1995_cover.jpg/300px-Sonic_CD_1995_cover.jpg" title="Sonic CD PC Disassembly"  %}

### Sonic and Knuckles Collection
{% include link-to-other-site.html url="https://github.com/sonicretro/skc_disasm" description="" image="https://archive.org/download/S3KPCUSA/__ia_thumb.jpg" title="Sonic and Knuckles Collection PC Disassembly"  %}

---
# Atari Systems

## Atari 2600

{% include link-to-other-site.html url="https://github.com/johnidm/asm-atari-2600" description="Various disassembled Atari 2600 games" image="https://upload.wikimedia.org/wikipedia/commons/b/b9/Atari-2600-Wood-4Sw-Set.jpg" title="Multiple Atari 2600 Games"  %}

### Donkey Kong
{% include link-to-other-site.html url="https://atariage.com/forums/topic/286583-donkey-kong-disassembly-take-2/" description="Various disassembled Atari 2600 games" image="https://images-na.ssl-images-amazon.com/images/I/71B3YruuXkL._AC_SL1095_.jpg" title="Donkey Kong (Atari 2600)"  %}

## ColecoVision

### Donkey Kong
{% include link-to-other-site.html url="https://atariage.com/forums/topic/229669-colecovision-donkey-kong-disassembly/" description="Various disassembled Atari 2600 games" image="https://i.pinimg.com/originals/28/db/53/28db5343d4801e9c10cbb4e7a91e3317.jpg" title="Donkey Kong for ColecoVisio n Disassembly"  %}


---
# Mobile games
Mobile games are a special case that weren't initially going to be included, but we have included a few games that are based on console games.

## Java 2 Mobile Edition (J2ME)

### Sonic 1 J2ME
{% include link-to-other-site.html url="https://github.com/Iso-Kilo/Sonic-1-J2ME-Decompilation" description="A decompilation of the 2005 Java mobile port of Sonic the Hedgehog (1991). This decompilation focuses on the 240x320 resolution version, of part 1 as it uses the original game's graphics. However, there are lower resolutions that function similarily. And part 2 consists of the largest available resolution; 208x208. Part 1 was created by iFone, and 2 by Glu." image="https://repository-images.githubusercontent.com/254218052/8e42f080-7f34-11ea-9261-3e534fe23726" title="Decompile of the 2005 mobile port of Sonic 1"  %}

---
## Android

### Sonic Advance
{% include link-to-other-site.html url="https://github.com/ImmutableOctet/sonicgba-monkey" description="Sonic GBA is a fan developed reinterpretation of decompiled Java output from the Android version of Sonic Advance." image="https://i.ytimg.com/vi/u9BNOiB9Pcc/maxresdefault.jpg" title="A Monkey port of decompiled Java from Sonic Advance (Mobile)"  %}
