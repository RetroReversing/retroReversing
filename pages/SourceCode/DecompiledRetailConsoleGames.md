---
permalink: /source-code/decompiled-retail-console-games
layout: post
title: Decompiled Retail Console Games
image: /public/images/Decompiled Retail Console Games.jpg
twitterimage: https://www.retroreversing.com/public/images/Decompiled Retail Console Games.jpg
category: sourcecode
priority: 1.0
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Decompiled Retail Console Games
    url: #
recommend: 
- sourcecode
- introduction
- games
- industry
tags:
- sourcecode
- games
editlink: ../pages/SourceCode/DecompiledRetailConsoleGames.md
updatedAt: '2026-10-11'
---

This page lists decompiled and disassembled source code projects for retail games, alongside native ports and static recompilations. Projects are grouped by their original platform. Engine reconstructions, fan remakes and unreleased prototypes are labeled in their entries.

If you are interested to see officially released or leaked source code check out this other post:
{% include_cached link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}

Decompilation and disassembly projects generally need to have reconstructed at least 10% of the source code to be included. Exceptions include platforms with few reversing projects and native-port projects that do not report a matching-code percentage.

Static recompilation translates machine code into compilable source for another platform. It does not imply recovery of the original source code. Project links provide build instructions and current progress.

# Nintendo Systems
Nintendo systems are by far the most popular for reverse engineering projects, especially related to 1st party titles such as Mario, Zelda and Pokemon.

## Nintendo Entertainment System (NES)
The table below lists the relevant entries.

The [NES guide](/nes) covers Famicom and NES hardware, development kits, and reversing. A [Super Mario Bros. walkthrough](/super-mario-bros) examines reversing that game.

Name | Project Type | Mapper | Status
--- | --- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/a/a8/BalloonFightnesboxart.jpg){:width="100"} [Balloon Fight](https://github.com/LuigiBlood/balloonfight_dis) | Disassembly | NROM |
![](https://images.launchbox-app.com/e0510c38-b7f6-4cc0-b995-3d011941597d.jpg){:width="100"} [Battle City](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Battle%20City) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/6/65/Contra_cover.jpg){:width="100"} [Contra](https://github.com/vermiceli/nes-contra-us/) | Disassembly | UNROM | Documented
![](https://upload.wikimedia.org/wikipedia/en/9/9b/Crystalisboxart.jpg){:width="100"} [Crystalis](https://github.com/crystalisdisassembly/crystalisdisassembly) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/b/be/Danny_Sullivan%27s_Indy_Heat_Coverart.png){:width="100"} [Danny Sullivan's Indy Heat](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Danny%20Sullivan's%20Indy%20Heat) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/6/65/Donald_land.jpg){:width="100"} [Donald Land](https://github.com/brunovalads/donald-land) | Disassembly | MMC1 |
![](https://static.wikia.nocookie.net/nes/images/9/9f/Donkey_Kong.JPG){:width="100"} [Donkey Kong](https://github.com/RussianManSMWC/Donkey-Kong-NES-Disassembly) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/0/02/NES_Double_Dragon_II_packaging_front.jpg){:width="100"} [Double Dragon II: The Revenge (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Double%20Dragon%20II) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/f/f8/Dr._Mario_box_art.jpg){:width="100"} [Dr. Mario](https://github.com/Nostaljipi/dr-mario-disassembly) | Disassembly | MMC1 |
![](https://upload.wikimedia.org/wikipedia/en/8/84/Dragon_Warrior.jpg){:width="100"} [Dragon Warrior](https://github.com/nmikstas/dragon-warrior-disassembly) | Disassembly | MMC1 | N/A and Documented
![](https://upload.wikimedia.org/wikipedia/en/f/f8/Excitebike_cover.jpg){:width="100"} [Excitebike](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Excitebike) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/d/d8/FF1_USA_boxart.jpg){:width="100"} [Final Fantasy I](https://github.com/Entroper/FF1Disassembly) | Disassembly | MMC1 | N/A and Documented
![](https://www.mobygames.com/images/covers/l/110876-final-fantasy-ii-nes-front-cover.jpg){:width="100"} [Final Fantasy II](https://github.com/everything8215/ff2) | Disassembly | MMC1 |
![](https://www.mobygames.com/images/covers/l/159409-final-fantasy-iii-nes-front-cover.jpg){:width="100"} [Final Fantasy III](https://github.com/everything8215/ff3) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/commons/b/b7/Game-Genie-NES.jpg){:width="100"} [Game Genie (Cheat Cartridge)](https://github.com/qalle2/nes-gg-disassembly) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/d/df/IceClimberboxartnes.jpg){:width="100"} [Ice Climber (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Ice%20Climber) | Disassembly | NROM |
![](https://static.wikia.nocookie.net/kuniokun/images/1/15/KKnNSL_JP.jpg){:width="100"} [*Kunio-kun no Nekketsu Soccer League*](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Kunio-kun%20no%20Nekketsu%20Soccer%20League) | Disassembly |  |
![](https://www.mobygames.com/images/covers/l/251123-mappy-nes-front-cover.jpg){:width="100"} [Mappy (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Mappy) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/c/c1/MarioBros.boxart.png){:width="100"} [Mario Bros.](https://github.com/RussianManSMWC/Mario-Bros.-Dis) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/4/49/Megaman3_box.jpg){:width="100"} [Mega Man 3](https://github.com/Raidenthequick/megaman3-disassembly) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/8/8f/Megaman4_box.jpg){:width="100"} [Mega Man 4](https://github.com/Raidenthequick/megaman4-disassembly) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/2/2c/Megaman5_box.jpg){:width="100"} [Mega Man 5](https://github.com/Raidenthequick/megaman5-disassembly) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_boxart.jpg){:width="100"} [Metroid](https://metroiddatabase.com/source-code/) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG){:width="100"} [Mike Tyson's Punch-Out!!](https://github.com/nmikstas/mike-tysons-punch-out-disassembly) | Disassembly | MMC2 |
![](https://pbs.twimg.com/media/ELrst70WkAE4Eo-?format=jpg){:width="100"} [Nuts & Milk (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Nuts%20%26%20Milk) | Disassembly | NROM |
![](https://images.nintendolife.com/0122e34331721/pac-man-cover.cover_large.jpg){:width="100"} [Pac-Man (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Pac-Man) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/9/96/Solstice_The_Quest_for_the_Staff_of_Demnos_Cover.jpg){:width="100"} [Solstice: The Quest for the Staff of Demnos](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Solstice) | Disassembly |  |
![](http://www.hardcoregaming101.net/wp-content/uploads/2018/09/nintendo-nes-sonson.jpg){:width="100"} [SonSon](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Son%20Son) | Disassembly | NROM |
![](https://static.wikia.nocookie.net/contra/images/8/87/Super_Contra_-_%28NA%29_-_01.jpg){:width="100"} [Super C](https://github.com/vermiceli/nes-super-c/) | Disassembly | MMC3 | Documented
![](https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png){:width="100"} [Super Mario Bros.](https://gist.github.com/1wErt3r/4048722) | Disassembly / Decompilation | NROM; [SMB-Vanilla](https://github.com/nukep/SMB-Vanilla) - C reconstruction of this game and The Lost Levels. |
![](https://upload.wikimedia.org/wikipedia/en/b/b5/Mariobros2japanbox.jpg){:width="100"} [Super Mario Bros. 2 The Lost Levels (Japanese)](https://github.com/threecreepio/smb2j-disassembly ) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png){:width="100"} [Super Mario Bros. 3](https://github.com/captainsouthbird/smb3) | Disassembly |  |
![](https://images.igdb.com/igdb/image/upload/t_cover_big/js2ldjaxvwvvblwuvyep.png){:width="100"} [Tecmo World Cup Soccer (Japanese)](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Tecmo%20World%20Cup%20Soccer) | Disassembly |  |
![](https://upload.wikimedia.org/wikipedia/en/9/98/Tennis_%28video_game%29.jpg){:width="100"} [Tennis](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Tennis) | Disassembly | NROM |
![](https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_NES_cover_art.jpg){:width="100"} [Tetris](https://github.com/CelestialAmber/TetrisNESDisasm) | Disassembly | MMC1 |
![](https://upload.wikimedia.org/wikipedia/en/3/31/Crazy_Castle_Cover.png){:width="100"} [The Bugs Bunny Crazy Castle](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Bugs%20Bunny%20Crazy%20Castle) | Disassembly | MMC1 |
![](https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png){:width="100"} [The Legend of Zelda](https://github.com/aldonunez/zelda1-disassembly) | Disassembly | MMC1 | N/A and Documented
![](https://upload.wikimedia.org/wikipedia/en/f/fc/Transformers_Mystery_of_Comvoy_Famicom_box.png){:width="100"} [Transformers: Mystery of Convoy](https://github.com/Fixatron/TFRom-Recreation) | Disassembly |  | N/A and Documented
![](https://upload.wikimedia.org/wikipedia/en/b/ba/Yie_Ar_Kung-Fu_flyer.png){:width="100"} [Yie Ar Kung Fu](https://github.com/cyneprepou4uk/NES-Games-Disassembly/tree/main/Yie%20Ar%20Kung-Fu) | Disassembly | NROM |

---
## Super Nintendo (SNES)
The table below lists the relevant entries.

The [SNES guide](/snes) covers Super Famicom hardware, SDKs, and reversing. Original source code from the Gigaleak is covered separately for [Yoshi's Island](/yoshis-island-source-code) and [A Link to the Past](/zelda-a-link-to-the-past-source-code).

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/2/21/Demonscrest_us.jpg){:width="100"} [Demon's Crest](https://github.com/fredyeye/various-game-disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/1/1a/Donkey_Kong_Country_SNES_cover.png){:width="100"} [Donkey Kong Country](https://github.com/Yoshifanatic1/Donkey-Kong-Country-1-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/c/c3/DK_Country_2.jpg){:width="100"} [Donkey Kong Country 2](https://github.com/p4plus2/DKC2-disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/c/cc/Dkc3_snes_boxart.jpg){:width="100"} [Donkey Kong Country 3](https://github.com/Yoshifanatic1/Donkey-Kong-Country-3-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/1/1f/EarthBound_Box.jpg){:width="100"} [Earthbound / Mother 2](https://github.com/Herringway/ebsrc) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/9/90/Final_Fantasy_IV.jpg){:width="100"} [Final Fantasy IV](https://github.com/everything8215/ff4) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_V_Box_JAP.jpg){:width="100"} [Final Fantasy V](https://www.ff6hacking.com/ff5wiki/images/0/00/Ff5j_asm_Squall.txt) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/0/05/Final_Fantasy_VI.jpg){:width="100"} [Final Fantasy VI](https://github.com/everything8215/ff6) | Disassembly | Active
![](https://upload.wikimedia.org/wikipedia/en/6/60/SNES_Goof_Troop_cover_art.jpg){:width="100"} [Goof Troop](https://github.com/Yoshifanatic1/Goof-Troop-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/7/7a/Super.Bomberman.Box.Art.SNES.PAL.png){:width="100"} [Super Bomberman](https://github.com/LIJI32/superbomberman) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/3/35/GhoulsSNES_boxart.JPG){:width="100"} [Super Ghouls 'n Ghosts](https://github.com/fredyeye/super-ghouls-n-ghosts-disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/8/89/SuperMarioRPGSNESCoverArtUS.jpg){:width="100"} [Super Mario RPG](https://github.com/Yoshifanatic1/Super-Mario-RPG-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png){:width="100"} [Super Mario World](https://github.com/IsoFrieze/SMWDisX) | Disassembly / Reimplementation | [Super Mario World (snesrev)](https://github.com/snesrev/smw) - C reimplementation and native port.
![](https://upload.wikimedia.org/wikipedia/en/9/9a/Yoshi%27s_Island_%28Super_Mario_World_2%29_box_art.jpg){:width="100"} [Super Mario World 2: Yoshi's Island](https://github.com/brunovalads/yoshisisland-disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg){:width="100"} [Super Metroid](https://github.com/strager/supermetroid) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/4/40/Superpunchoutbox.jpg){:width="100"} [Super Punch-Out!!](https://github.com/Yoshifanatic1/Super-Punch-Out-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg){:width="100"} [The Legend of Zelda: A Link to the Past](https://github.com/snesrev/zelda3) | Reimplementation, PC Port | Active

---
## Nintendo 64
Recently, mainly in thanks to the huge success of the [Super Mario 64](/super-mario-64) project, there has been revived interest in [Nintendo 64](/n64) decompilation. While most projects are still in very early stages, there are a few that meet the criteria for this list.

The [Nintendo 64 guide](/n64) covers the console, SDK, and reversing introduction. Dedicated game pages cover the [Super Mario 64 decompilation](/super-mario-64) and [Mario Kart 64](/mario-kart-64).

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/3/36/AeroGauge_Coverart.png){:width="100"} [AeroGauge](https://github.com/LLONSIT/AeroGauge) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/6/62/Aidyn_Chronicles-_The_First_Mage_game_cover.jpg){:width="100"} [Aidyn Chronicles: The First Mage](https://github.com/blackgamma7/Aidyn) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/1/12/Banjo_Kazooie_Cover.png){:width="100"} [Banjo-Kazooie](https://gitlab.com/banjo.decomp/banjo-kazooie) | Decompilation | Completed; [BanjoRecomp](https://github.com/BanjoRecomp/BanjoRecomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/4/41/Banjo-Tooie_Coverart.png){:width="100"} [Banjo-Tooie](https://github.com/mr-wiseguy/banjo-tooie) | Decompilation | Active, 12% Done
![](https://upload.wikimedia.org/wikipedia/en/8/83/Blast_Corps_Coverart.png){:width="100"} [Blast Corps](https://github.com/retroplastic/blastcorps) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/a/a3/Body_Harvest.jpg){:width="100"} [Body Harvest](https://github.com/deltaniumindustries/bodyharvestdecomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/5/5f/Bomberman_64.jpg){:width="100"} [Bomberman 64](https://github.com/bomberhackers/bm64) | Decompilation | Active; [BM64Recomp](https://github.com/RevoSucks/BM64Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/a/a3/Bomberman64sa_box.jpg){:width="100"} [Bomberman 64: The Second Attack!](https://github.com/bomberhackers/tsa) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/1/1c/Bomberman_Hero_box.jpg){:width="100"} [Bomberman Hero](https://github.com/bomberhackers/bmhero) | Decompilation | Active; [BMHeroRecomp](https://github.com/RevoSucks/BMHeroRecomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/0/0b/Castlevania_%28Nintendo_64%29.jpg){:width="100"} [Castlevania 64](https://github.com/k64ret/cv64) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/1/1e/Chameleon_Twist_Cover_Art.jpg){:width="100"} [Chameleon Twist](https://github.com/chameleontwistret/chameleontwistv1.0-jp) | Decompilation | Active, 44% Done; [Chameleon Twist Recompiled](https://github.com/Rainchus/ChameleonTwist1-JP-Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/2/28/Chameleon_Twist_2_cover.jpg){:width="100"} [Chameleon Twist 2](https://github.com/chameleontwistret/chameleontwist2v1.0-jp) | Decompilation | Active, 3% Done
![](https://upload.wikimedia.org/wikipedia/en/9/99/Conkersbfdbox.jpg){:width="100"} [Conker's Bad Fur Day](https://github.com/mkst/conker) | Decompilation | Active, 4% Done
![](https://upload.wikimedia.org/wikipedia/en/8/84/Darkrift.jpg){:width="100"} [Dark Rift](https://github.com/unnunu/darkrift) | Decompilation | Active, 70% Done
![](https://upload.wikimedia.org/wikipedia/en/a/a0/DKRboxart.jpg){:width="100"} [Diddy Kong Racing](https://github.com/DavidSM64/Diddy-Kong-Racing) | Decompilation | Active, 97% Done
![](https://static.wikia.nocookie.net/starfox/images/1/1f/Dinosaur_planet_wallpaper.jpg){:width="100"} [Dinosaur Planet](https://github.com/zestydevy/dinosaur-planet) | Decompilation | Active, 18% Done; [Dinosaur Planet: Recompiled](https://github.com/DinosaurPlanetRecomp/dino-recomp) - Native-port project for the December 2000 prototype; this is an unreleased game. Uses static recompilation.
![](https://upload.wikimedia.org/wikipedia/en/a/ae/DonkeyKong64CoverArt.jpg){:width="100"} [Donkey Kong 64](https://gitlab.com/dk64_decomp/dk64) | Decompilation | Active, 57% Done; [DK64 Recompiled / Rekongpiled](https://dk64recomp.com) - Static recompilation; [source and releases](https://github.com/Rainchus/Donkey-Kong-64-Recompiled).
![](https://upload.wikimedia.org/wikipedia/en/2/2b/Doom_64_box.jpg){:width="100"} [Doom 64](https://github.com/Erick194/DOOM64-RE) | Decompilation | Completed; [DOOM 64 EX](https://doom64ex.wordpress.com) - DOOM 64 recreation based on the DOOM engine.
![](https://upload.wikimedia.org/wikipedia/en/3/39/Doraemon_Nobita_to_Mittsu_no_Seireiseki_Game_Cover.jpg){:width="100"} [Doraemon: Nobita to Mittsu no Seireiseki](https://github.com/prakxo/doraemon1) | Decompilation | Active
![](https://static.wikia.nocookie.net/nintendo/images/1/10/Dobutsu_no_Mori_%28JP%29.jpg/revision/latest?cb=20090706200749&path-prefix=en){:width="100"} [Dōbutsu no Mori](https://github.com/zeldaret/af) | Decompilation | Active, 18% Done
![](https://upload.wikimedia.org/wikipedia/en/d/d9/Dr._Mario_64.jpg){:width="100"} [Dr. Mario 64](https://github.com/angheloalf/drmario64) | Decompilation | Active, 98% Done; [Dr. Mario 64 Recomp Plus](https://github.com/theboy181/drmario64_recomp_plus) - Static recompilation and native port.
![](https://static.wikia.nocookie.net/nintendo/images/9/92/N64_DukeNukem64_NA1.png/revision/latest?cb=20110703215052&path-prefix=en){:width="100"} [Duke Nukem 64](https://github.com/nblood/duke64-re) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/7/7e/Duke_Nukem_Zero_Hour_box.jpg){:width="100"} [Duke Nukem: Zero Hour](https://github.com/gillou68310/dukenukemzerohour) | Decompilation | Completed
![Extreme-G box art](https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20%28USA%29.png){:width="100"} [Extreme-G](https://gitlab.com/sonicdcer/ExtremeGRecomp) | Static recompilation | Extreme-G native-port project.
![](https://upload.wikimedia.org/wikipedia/en/2/21/F-Zero_X_box_art.jpg){:width="100"} [F-Zero X](https://github.com/inspectredc/fzerox) | Decompilation | Active, 95% Done; [G-Diffuser](https://github.com/Zorkats/G-Diffuser) provides an unofficial native PC port based on the decompilation
![](https://static.wikia.nocookie.net/fzero/images/6/65/JapaneseBoxArt.jpg){:width="100"} [F-Zero X Expansion Kit](https://github.com/inspectredc/fzerox-expansion-kit) | Decompilation | Active, 97% Done
![](https://upload.wikimedia.org/wikipedia/en/6/6f/Gauntlet_Legends_Coverart.png){:width="100"} [Gauntlet Legends](https://github.com/Drahsid/gauntlet-legends) | Decompilation | Inactive
![](https://static.wikia.nocookie.net/nintendo/images/c/c4/Gex_Enter_the_Gecko_%28Nintendo_64%29_%28NA%29.jpg/revision/latest?cb=20110218174255&path-prefix=en){:width="100"} [Gex 64: Enter the Gecko](https://github.com/matbourgon/gex64decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/c/c7/Glover_Nintendo_64_cover_art.jpg){:width="100"} [Glover](https://github.com/rainchus/glover) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/5/5b/Goemonsgreatadvbox.jpg){:width="100"} [Goemon's Great Adventure](https://github.com/Fluvian/gga) | Decompilation | Inaccessible
![](https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg){:width="100"} [GoldenEye 007](https://github.com/n64decomp/007) | Decompilation | Active, 71% Done
![](https://upload.wikimedia.org/wikipedia/en/6/6a/Harvest_Moon_64_Coverart.png){:width="100"} [Harvest Moon 64](https://github.com/harvestwhisperer/hm64-decomp) | Decompilation | Active, 80% Done; [HarvestMoon64Recomp](https://github.com/HarvestMoon64Recomp/HarvestMoon64Recomp) - Static recompilation and native port.
![](https://static.wikia.nocookie.net/nintendo/images/1/18/Jet_Force_Gemini_%28NA%29.png/revision/latest?cb=20141029030448&path-prefix=en){:width="100"} [Jet Force Gemini](https://github.com/ryan-myers/jet-force-gemini) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/c/c1/Kirby64_box.jpg){:width="100"} [Kirby 64: The Crystal Shards](https://github.com/kirby64ret/kirby64) | Decompilation | Active, 12% Done
![](https://static.wikia.nocookie.net/nintendo/images/0/01/LEGO_Racer_%28NA%29.jpg){:width="100"} [Lego Racers](https://github.com/marijnvdwerf/lego-racers) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/6/66/Mario_Golf_box.jpg){:width="100"} [Mario Golf](https://github.com/monde-lointain/mariogolf64) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/a1/Mario_Kart_64.jpg){:width="100"} [Mario Kart 64](https://github.com/n64decomp/mk64) | Decompilation | Completed
![](https://upload.wikimedia.org/wikipedia/en/c/cd/Marioparty1.jpg){:width="100"} [Mario Party](https://github.com/mariopartyrd/marioparty) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/2/23/Marioparty2.jpg){:width="100"} [Mario Party 2](https://github.com/mariopartyrd/marioparty2) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/1/19/Marioparty3.jpg){:width="100"} [Mario Party 3](https://github.com/mariopartyrd/marioparty3) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/f/fa/Mario_Tennis_box.jpg){:width="100"} [Mario Tennis](https://github.com/dellm-79/mariotennisn64) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/3/31/Mischief_Makers.jpg){:width="100"} [Mischief Makers](https://github.com/drahsid/mischief-makers) | Decompilation | Active, 3% Done
![](https://static.wikia.nocookie.net/nintendo/images/6/6b/Mystical_Ninja_Starring_Goemon.jpg/revision/latest?cb=20110222141810&path-prefix=en){:width="100"} [Mystical Ninja Starring Goemon](https://github.com/klorfmorf/mnsg) | Decompilation | Active; [Goemon64Recomp](https://github.com/klorfmorf/Goemon64Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/c/cf/Neon_Genesis_Evangelion_64_Game_Box.jpg){:width="100"} [Neon Genesis Evangelion](https://github.com/farisawan-2000/evangelion) | Decompilation | Active
![](https://static.wikia.nocookie.net/nintendo/images/0/02/Onegai_Monsters_%28JP%29.jpg/revision/latest?cb=20221103235507&path-prefix=en){:width="100"} [Onegai Monsters](https://github.com/ryan-myers/onegaimonsters) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/6/61/Papermario.jpg){:width="100"} [Paper Mario](https://github.com/pmret/papermario) | Decompilation | Completed
![](https://upload.wikimedia.org/wikipedia/en/3/32/Perfect_dark_box.jpg){:width="100"} [Perfect Dark](https://github.com/n64decomp/perfect_dark) | Decompilation | Completed; [Perfect Dark PC port](https://github.com/perfect-dark-pc-port/perfect_dark) - Native PC port.
![](https://upload.wikimedia.org/wikipedia/en/b/b6/Pok%C3%A9mon_Puzzle_League_Coverart.png){:width="100"} [Pokemon Puzzle League](https://github.com/angheloalf/puzzleleague64) | Decompilation | Active, 43% Done
![](https://upload.wikimedia.org/wikipedia/en/0/0a/Pok%C3%A9mon_Snap_Coverart.png){:width="100"} [Pokemon Snap](https://github.com/ethteck/pokemonsnap) | Decompilation | Active, 96% Done
![](https://upload.wikimedia.org/wikipedia/en/7/70/Pokemonstadiumbox.jpg){:width="100"} [Pokemon Stadium](https://github.com/pret/pokestadium) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/b/ba/Pok%C3%A9mon_Stadium_2_Coverart.png){:width="100"} [Pokemon Stadium 2](https://github.com/pret/pokestadiumgs) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/ae/Quest64_big.jpg){:width="100"} [Quest 64](https://github.com/rainchus/quest64-decomp) | Decompilation | Active; [Quest64-Recomp](https://github.com/Rainchus/Quest64-Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/9/90/Rocket_Robot_on_Wheels_Cover.jpg){:width="100"} [Rocket: Robot on Wheels](https://github.com/RocketRet/Rocket-Robot-On-Wheels) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/f/fa/Shadowgate64.jpg){:width="100"} [Shadowgate 64](https://github.com/rainchus/shadowgate64) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/2/23/Snowboard_Kids_2_cover.jpg){:width="100"} [Snowboard Kids 2](https://github.com/cdlewis/snowboardkids2-decomp) | Decompilation | Active, 69% Done
![](https://upload.wikimedia.org/wikipedia/en/0/04/Silicon_Valley_Artwork.jpg){:width="100"} [Space Station Silicon Valley](https://github.com/mkst/sssv) | Decompilation | Active, 77% Done; [SSSV_Recomp](https://github.com/Cellenseres/SSSV_Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/6/63/StarFox64_N64_Game_Box.jpg){:width="100"} [Star Fox 64](https://github.com/sonicdcer/sf64) | Decompilation | Active, 99% Done
![](https://upload.wikimedia.org/wikipedia/en/9/9e/Star_Wars_-_Shadows_of_the_Empire_Coverart.png){:width="100"} [Star Wars: Shadows of the Empire](https://github.com/eltalelibrarian/sote) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg){:width="100"} [Super Mario 64](https://github.com/n64decomp/sm64) | Decompilation | Completed; [SM64 Port](https://github.com/sm64-port/sm64-port) - Native PC port; [sm64coopdx](https://github.com/coop-deluxe/sm64coopdx) - Online cooperative PC port; [SM64Plus](https://github.com/MorsGames/sm64plus) - PC port with quality-of-life improvements and customization.
![](https://upload.wikimedia.org/wikipedia/en/4/42/Supersmashbox.jpg){:width="100"} [Super Smash Bros.](https://github.com/vetritheretri/ssb-decomp-re) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/3/3b/Superman64box.jpg){:width="100"} [Superman 64](https://github.com/farisawan-2000/superman) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg){:width="100"} [The Legend of Zelda: Ocarina of Time](https://github.com/zeldaret/oot) | Decompilation | Completed
![](https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg){:width="100"} [The Legend of Zelda: Majora's Mask](https://github.com/zeldaret/mm) | Decompilation | Completed; [Zelda64Recomp](https://github.com/Zelda64Recomp/Zelda64Recomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/b/b9/The_New_Tetris_for_N64%2C_Front_Cover.jpg){:width="100"} [The New Tetris](https://github.com/kiritodv/tnt) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/7/7f/Turok_3_-_Shadow_of_Oblivion_Coverart.png){:width="100"} [Turok 3: Shadow of Oblivion](https://github.com/Drahsid/turok3) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/d/de/Virtual_Pool_64_for_N64%2C_Front_Cover.jpg){:width="100"} [Virtual Pool 64](https://github.com/LLONSIT/virtualpool64) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/7/75/Virtualprowrestling2.jpg){:width="100"} [Virtual Pro Wrestling 2: Ōdō Keishō](https://github.com/aki-club/vpw2) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/e/e6/Wave_Race_64_Coverart.png){:width="100"} [Wave Race 64](https://github.com/LLONSIT/Wave-Race-64) | Decompilation | Active, 49% Done
![](https://upload.wikimedia.org/wikipedia/en/4/4b/Yoshi%27s_Story.jpg){:width="100"} [Yoshi's Story](https://github.com/decompals/yoshis-story) | Decompilation | Active, 13% Done

---
## Nintendo GameCube
The table below lists the relevant entries.

The [GameCube guide](/gamecube) covers Dolphin hardware, the development kit, and reversing.

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/8/82/Animal_Crossing_Coverart.png){:width="100"} [Animal Crossing](https://github.com/acreteam/ac-decomp) | Decompilation | Active, 99% Done
![Bomberman Generation box art](https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Bomberman%20Generation%20%28USA%29.png){:width="100"} [Bomberman Generation](https://github.com/nikeymikey/bomberman-generation-moderngekko) | Static recompilation | GameCube native build using DolRecomp and ModernGekko.
![](https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Chibi_Robo.jpg/220px-Chibi_Robo.jpg){:width="100"} [Chibi-Robo! Plug Into Adventure!](https://github.com/eavpsp/cbr_decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/7/7c/Doshin_the_Giant.gamecover.amazon.jpg){:width="100"} [Doshin the Giant](https://github.com/break-core/doshin-gc) | Decompilation | Active
![](https://static.wikia.nocookie.net/nintendo/images/8/83/D%C5%8Dbutsu_no_Mori_e_%28GC%29_%28JP%29.jpg/revision/latest?cb=20230228004425&path-prefix=en){:width="100"} [Dōbutsu no Mori e+](https://github.com/acreteam/afe-decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/5/59/Harvest_Moon_-_A_Wonderful_Life_Coverart.png){:width="100"} [Harvest Moon: A Wonderful Life](https://github.com/ChrisNonyminus/hmawl) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/4/49/Homeland_GC.jpg){:width="100"} [Homeland](https://github.com/bttrdrgn/homeland) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/b/ba/Karbox.jpg){:width="100"} [Kirby Air Ride](https://github.com/doldecomp/kar) | Decompilation | Inactive
![](https://static.wikia.nocookie.net/nintendo/images/7/77/Luigis_Mansion_%28NA%29.jpg/revision/latest?cb=20110824160012&path-prefix=en){:width="100"} [Luigi's Mansion](https://github.com/sage-of-mirrors/zmansion) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/7/78/Mario_Kart_Double_Dash.jpg){:width="100"} [Mario Kart: Double Dash!!](https://github.com/doldecomp/mkdd) | Decompilation | Active, 42% Done
![](https://upload.wikimedia.org/wikipedia/en/5/58/Mario_Party_4.jpg){:width="100"} [Mario Party 4](https://github.com/mariopartyrd/marioparty4) | Decompilation | Completed
![](https://upload.wikimedia.org/wikipedia/en/d/d0/Mario_Party_5_Box_Art.JPG){:width="100"} [Mario Party 5](https://github.com/mariopartyrd/marioparty5) | Decompilation | Active, 16% Done
![](https://upload.wikimedia.org/wikipedia/en/c/c6/Mario_Party_6_Coverart.png){:width="100"} [Mario Party 6](https://github.com/mariopartyrd/marioparty6) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/6/60/Mario_Party_7_Coverart.png){:width="100"} [Mario Party 7](https://github.com/mariopartyrd/marioparty7) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/2/2f/Mario_Superstar_Baseball.jpg){:width="100"} [Mario Superstar Baseball](https://github.com/roeming/mssb-dtk) | Decompilation | Active, 9% Done
![](https://upload.wikimedia.org/wikipedia/en/b/ba/MetroidPrimebox.jpg){:width="100"} [Metroid Prime](https://github.com/PrimeDecomp/prime) | Decompilation | Active, 24% Done
![](https://upload.wikimedia.org/wikipedia/en/6/6e/Echoesboxart_%28Large%29.jpg){:width="100"} [Metroid Prime 2: Echoes](https://github.com/PrimeDecomp/echoes) | Decompilation | Active, 1% Done
![](https://static.wikia.nocookie.net/nintendo/images/7/73/Need_for_Speed_Most_Wanted_%28GC%29_%28NA%29.jpg/revision/latest?cb=20200820062015&path-prefix=en){:width="100"} [Need for Speed: Most Wanted](https://github.com/dbalatoni13/nfsmw) | Decompilation | Active, 1% Done
![](https://static.wikia.nocookie.net/nintendo/images/c/c1/Need_For_Speed_Underground_%28GC%29_%28NA%29.jpg/revision/latest?cb=20150213050318&path-prefix=en){:width="100"} [Need for Speed: Underground](https://github.com/dbalatoni13/nfsug) | Decompilation | Active
![](https://static.wikia.nocookie.net/naruto/images/d/de/Clash_4.jpg){:width="100"} [Naruto: Gekitō Ninja Taisen! 4](https://github.com/doldecomp/gnt4) | Decompilation | Inactive
![](https://static.wikia.nocookie.net/nintendo/images/b/b6/Paper_Mario_The_Thousand_Year_Door_%28NA%29.png/revision/latest?cb=20120523040020&path-prefix=en){:width="100"} [Paper Mario: The Thousand-Year Door](https://github.com/doldecomp/ttyd) | Decompilation | Active, 14% Done
![](https://upload.wikimedia.org/wikipedia/en/1/13/Pikmin_cover_art.jpg){:width="100"} [Pikmin](https://github.com/projectPiki/pikmin) | Decompilation | Active, 99% Done
![](https://upload.wikimedia.org/wikipedia/en/3/38/Pikmin_2_Case.jpg){:width="100"} [Pikmin 2](https://github.com/projectPiki/pikmin2) | Decompilation | Active, 86% Done
![](https://static.wikia.nocookie.net/nintendo/images/b/b7/Ratatouille_GC.jpg/revision/latest?cb=20190824004133&path-prefix=en){:width="100"} [Ratatouille](https://github.com/zounadecomp/ratdecomp) | Decompilation | Active, 2% Done
![](https://static.wikia.nocookie.net/nintendo/images/2/20/Skies_of_Arcadia_Legends_box.jpg/revision/latest?cb=20140709200349&path-prefix=en){:width="100"} [Skies of Arcadia Legends](https://github.com/rainchus/skiesofarcadialegends) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/it/7/7a/Sonic_Adventure_DX_Director%27s_Cut_logo.png){:width="100"} [Sonic Adventure DX](https://github.com/doldecomp/sadx) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/1/15/Sonic_Riders_Coverart.png){:width="100"} [Sonic Riders](https://github.com/doldecomp/sonicriders) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/c/c7/BattleForBikiniBottom.jpg){:width="100"} [SpongeBob SquarePants: Battle for Bikini Bottom](https://github.com/bfbbdecomp/bfbb) | Decompilation | Active, 35% Done
![](https://static.wikia.nocookie.net/nintendo/images/9/9c/Star_Fox_Adventures_%28NA%29.jpg/revision/latest?cb=20120404131112&path-prefix=en){:width="100"} [Star Fox Adventures](https://github.com/renakunisaki/sfadebug) | Decompilation | Active
![](https://static.wikia.nocookie.net/nintendo/images/d/d7/Summoner_A_Goddess_Reborn_%28GC%29_%28NA%29.jpg/revision/latest?cb=20251008223123&path-prefix=en){:width="100"} [Summoner: A Goddess Reborn](https://github.com/Charlese2/sgr) | Decompilation | Active, 10% Done
![](https://upload.wikimedia.org/wikipedia/en/b/b3/Supermariostrikersbox.jpg){:width="100"} [Super Mario Strikers](https://github.com/yannicksuter/smstrikers-decomp) | Decompilation | Active, 21% Done
![](https://upload.wikimedia.org/wikipedia/en/0/05/Super_Mario_Sunshine_Box_Art.png){:width="100"} [Super Mario Sunshine](https://github.com/doldecomp/sms) | Decompilation | Active, 25% Done
![](https://upload.wikimedia.org/wikipedia/en/9/96/Super_Monkey_Ball_Coverart.png){:width="100"} [Super Monkey Ball](https://github.com/camthesaxman/smb-decomp/) | Decompilation | Inactive, 59% Done
![](https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png){:width="100"} [Super Smash Bros. Melee](https://github.com/doldecomp/melee) | Decompilation | Active, 47% Done
![](https://upload.wikimedia.org/wikipedia/en/0/0b/The_Incredibles_%282004_video_game%29.png){:width="100"} [The Incredibles](https://github.com/seilweiss/incredibles) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg){:width="100"} [The Legend of Zelda: The Wind Waker](https://github.com/zeldaret/tww) | Decompilation | Active, 56% Done
![](https://upload.wikimedia.org/wikipedia/en/0/0e/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg){:width="100"} [The Legend of Zelda: Twilight Princess](https://github.com/zeldaret/tp) | Decompilation | Completed; [DuskLight](https://twilitrealm.dev) - Native PC port.
![](https://static.wikia.nocookie.net/nintendo/images/a/a1/The_SpongeBob_SquarePants_Movie_GameCube.jpg/revision/latest?cb=20210822125016&path-prefix=en){:width="100"} [The SpongeBob SquarePants Movie](https://github.com/bfbbdecomp/tssm) | Decompilation | Active, 5% Done
![](https://static.wikia.nocookie.net/nintendo/images/c/c9/Ty_the_Tasmanian_Tiger_Box_Art_NA.jpg/revision/latest?cb=20200406031238&path-prefix=en){:width="100"} [Ty the Tasmanian Tiger](https://github.com/1superchip/ty-decomp) | Decompilation | Active, 24% Done

---
## Nintendo Wii
The table below lists the relevant entries.

The [Wii guide](/wii) covers Revolution SDKs and reversing.

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/a/ac/InazumaElevenStrikers.jpg){:width="100"} [Inazuma Eleven Strikers](https://github.com/SwareJonge/IEStrikers) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/e/e3/Kirby%27s_Epic_Yarn_Title.png){:width="100"} [Kirby's Epic Yarn](https://github.com/swiftshine/key) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/d/d6/Mario_Kart_Wii.png){:width="100"} [Mario Kart Wii](https://github.com/riidefi/mkw) | Decompilation | Active, 11%
![](https://upload.wikimedia.org/wikipedia/en/b/b2/Mario_Party_8_NA_Box_Art.png){:width="100"} [Mario Party 8](https://github.com/mariopartyrd/marioparty8) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/f/f0/Mario_Party_9_US_cover.jpg){:width="100"} [Mario Party 9](https://github.com/mariopartyrd/marioparty9) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/9/94/Pok%C3%A9mon_Battle_Revolution_Coverart.png){:width="100"} [Pokemon Battle Revolution](https://github.com/bgsamm/pbr-dtk) | Decompilation | Active, 1% Done
![](https://static.wikia.nocookie.net/nintendo/images/d/d2/PokePark_Wii_Pikachu%27s_Adventure_%28EU%29.jpg/revision/latest?cb=20100602174809&path-prefix=en){:width="100"} [Pokepark Wii: Pikachu's Adventure](https://github.com/sephdb/pokepark-wii-decomp) | Decompilation | Active, 1% Done
![](https://upload.wikimedia.org/wikipedia/en/3/3b/Rock_Band_3_Game_Cover.jpg){:width="100"} [Rock_Band_3](https://github.com/DarkRTA/rb3) | Decompilation | Active, 50% Done
![](https://upload.wikimedia.org/wikipedia/en/3/3b/SonicRiders2.PNG){:width="100"} [Sonic Riders: Zero Gravity](https://github.com/m0ester/SRZGDecomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/7/76/SuperMarioGalaxy.jpg){:width="100"} [Super Mario Galaxy (Korean)](https://github.com/SMGCommunity/Petari) | Decompilation | Active, 23% Done; [AstroCore](https://www.lumasworkshop.com/astrocore) - LumaWorkshop native PC port.
![](https://upload.wikimedia.org/wikipedia/en/6/65/Super_Mario_Galaxy_2_Box_Art.jpg){:width="100"} [Super Mario Galaxy 2](https://github.com/SMGCommunity/Garigari) | Decompilation | Active, 1% Done
![](https://upload.wikimedia.org/wikipedia/en/c/c9/Super_Paper_Mario_cover.jpg){:width="100"} [Super Paper Mario](https://github.com/SeekyCt/spm-decomp) | Decompilation | Active, 2% Done
![](https://upload.wikimedia.org/wikipedia/en/f/f3/SSBB_Cover.jpg){:width="100"} [Super Smash Bros. Brawl](https://github.com/doldecomp/brawl) | Decompilation | Active, 1% Done
![](https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg){:width="100"} [The Legend of Zelda: Ocarina of Time (Virtual Console)](https://github.com/nim-ka/vc64-decomp) | Decompilation | Active, 31% Done
![](https://upload.wikimedia.org/wikipedia/en/9/99/Legend_of_Zelda_Skyward_Sword_boxart.png){:width="100"} [The Legend of Zelda: Skyward Sword](https://github.com/zeldaret/ss) | Decompilation | Active, 11% Done
![](https://static.wikia.nocookie.net/sims/images/b/b1/Thesims2castaway-wii.jpg){:width="100"} [The Sims 2: Castaway](https://github.com/simdecomp/ts2c) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg){:width="100"} [Wii Sports](https://github.com/doldecomp/ogws) | Decompilation | Active, 22% Done
![](https://upload.wikimedia.org/wikipedia/en/d/d9/Xenoblade_box_artwork.png){:width="100"} [Xenoblade Chronicles](https://github.com/xbret/xenoblade) | Decompilation | Active, 7% Done

---
## Nintendo Switch
Switch file formats and eShop engines are documented on their own pages.
The [Switch file-format guide](/SwitchFileFormats) documents Nintendo Switch formats. The [Switch game-engine guide](/SwitchGameEngines) covers engines used in eShop titles.

The table below lists Nintendo Switch reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/5/5e/Super_Mario_3D_World_box_art.jpg){:width="100"} [Super Mario 3D World + Bowser's Fury](https://github.com/3DWCommunity/3dcomp) | Decompilation | Active, 3% Done
![](https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg){:width="100"} [Super Mario Odyssey](https://github.com/MonsterDruide1/OdysseyDecomp) | Decompilation | Active, 15% Done
![](https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg){:width="100"} [The Legend of Zelda: Breath of the Wild](https://github.com/zeldaret/botw) | Decompilation | Active, 17% Done

---
# Nintendo Handhelds

## Game Boy
The following table presents the latest updates on ongoing Game Boy reverse engineering projects.

The [Game Boy guide](/gameboy) covers DMG and GBC hardware, SDKs, and reversing. A dedicated page covers [Pokemon Red and Blue](/pokemonredblue).

Name | Project Type
| ---- | ---- |
|![](https://upload.wikimedia.org/wikipedia/en/2/23/Donkey_Kong_94_box_art.jpg){:width="100"} [Donkey Kong '94](https://github.com/CelestialAmber/DKGBDisasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/8/83/Kdl1ussmall.jpg){:width="100"} [Kirby's Dream Land](https://github.com/huderlem/kirbydreamland)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/9/93/Metroid2_boxart.jpg){:width="100"} [Metroid II: Return of Samus](https://github.com/Vashy777/metroid2)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/02/Mole_mania_boxart.png){:width="100"} [Mole Mania](https://github.com/froggestspirit/mmania)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/a/af/Pok%C3%A9mon_Red_and_Blue_cover_art.webp){:width="200"} [Pokemon Red & Blue](https://github.com/pret/pokered)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/4/4a/Pokemon_Yellow.png){:width="100"} [Pokemon Yellow](https://github.com/pret/pokeyellow)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/02/Supermariolandboxart.jpg){:width="100"} [Super Mario Land](https://github.com/kaspermeerts/supermarioland)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/0d/Super_Mario_Land_2_box_art.jpg){:width="100"} [Super Mario Land 2: Six Golden Coins](https://github.com/froggestspirit/marioland2)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg){:width="100"} [Super Mario Land 3: Wario Land](https://github.com/Kak2X/wl)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/4/4a/Tetris_Boxshot.jpg){:width="100"} [Tetris](https://github.com/alexsteb/tetris_disassembly)              | Disassembly |

---
## Game Boy Color
The table below lists the relevant entries.

The [Game Boy guide](/gameboy) covers DMG and GBC hardware, SDKs, and reversing. A dedicated page covers [Pokemon Red and Blue](/pokemonredblue).

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/d/d7/Dragonwarrior1.jpg){:width="100"} [Dragon Warrior Monsters (German)](https://github.com/Ebernacher90/DragonQuestMonstersGerman) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/f/f8/Looney_Tunes_Carrot_Crazy.jpg){:width="100"} [Looney Tunes: Carrot Crazy](https://github.com/huderlem/carrotcrazy) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png){:width="100"} [Pokemon Gold & Silver](https://github.com/pret/pokegold) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/a/af/Pokemon_Crystal_Box.png){:width="100"} [Pokemon Crystal](https://github.com/pret/pokecrystal) | Disassembly / C port | [suiCune](https://github.com/DanZC/suiCune) - Native port written in C.
![](https://upload.wikimedia.org/wikipedia/en/e/e9/Pok%C3%A9mon_Pinball_Coverart.png){:width="100"} [Pokemon Pinball](https://github.com/pret/pokepinball) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/1/19/Pok%C3%A9mon_Trading_Card_Game_Coverart.png){:width="100"} [Pokemon Trading Card Game](https://github.com/pret/poketcg) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/f/f5/Pok%C3%A9mon_Puzzle_Challenge_Coverart.png){:width="100"} [Pokémon Puzzle Challenge](https://github.com/pret/pokepuzzle) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/c/cb/Warioland3.jpg){:width="100"} [Wario Land 3](https://github.com/froggestspirit/wland3) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/c/c1/Link%27s_Awakening.png){:width="100"} [The Legend of Zelda Links Awakening DX](https://github.com/zladx/LADX-Disassembly) | Disassembly |
![](https://upload.wikimedia.org/wikipedia/en/a/af/The_Legend_of_Zelda_Oracle_of_Seasons_and_Oracle_of_Ages_Game_Cover.jpg){:width="100"} [The Legend of Zelda Oracle of Ages & Seasons](https://github.com/Drenn1/oracles-disasm) | Disassembly |

---
## Game Boy Advance
The table below lists the relevant entries. The [pret project directory](https://pret.github.io/) links to further Pokemon decompilation and disassembly projects.

The [Game Boy Advance guide](/gba) covers the console, SDK, and reversing.

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/f/ff/Bkgruntysrevengentsc.jpg){:width="100"} [Banjo-Kazooie: Grunty's Revenge](https://github.com/jellees/bkgr) | Decompilation | Active, 32% Done
![](https://www.mobygames.com/images/covers/l/14074-breath-of-fire-game-boy-advance-front-cover.jpg){:width="100"} [Breath of Fire](https://github.com/Normmatt/bof) | Decompilation | Inactive
![](https://vgboxart.com/boxes/GBA/74706-fire-emblem-the-binding-blade.jpg){:width="100"} [Fire Emblem: The Binding Blade](https://github.com/StanHash/fe6) | Decompilations | Active
![](https://upload.wikimedia.org/wikipedia/en/1/1e/Fire_Emblem_The_Sacred_Stones.JPG){:width="100"} [Fire Emblem: The Sacred Stones](https://github.com/FireEmblemUniverse/fireemblem8u) | Decompilations | Active
![](https://upload.wikimedia.org/wikipedia/en/7/7a/Harvest_Moon-_FoMT.jpg){:width="100"} [Harvest Moon: Friends of Mineral Town](https://github.com/StanHash/fomt) | Decompilations | Active
![Kingdom Hearts: Chain of Memories box art](https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Kingdom%20Hearts%20-%20Chain%20of%20Memories%20%28USA%29.png){:width="100"} [Kingdom Hearts: Chain of Memories](https://github.com/Pheenoh/khcom) | Decompilation | Game Boy Advance decompilation project.
![](https://upload.wikimedia.org/wikipedia/en/0/0b/Kirby_%26_the_Amazing_Mirror.jpg){:width="100"} [Kirby & The Amazing Mirror](https://github.com/jiangzhengwenjz/katam) | Decompilations | Active
![](https://upload.wikimedia.org/wikipedia/en/6/63/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg){:width="100"} [Mario & Luigi: Superstar Saga](https://github.com/nstearns96/MLSuperstarSaga) | Disassembly | Inactive
![](https://mario.wiki.gallery/images/9/9b/Mvd.jpg){:width="100"} [Mario VS Donkey Kong](https://github.com/camthesaxman/mariovsdk) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/7/7d/Metroid_--_Zero_Mission_%28box_art%29.jpg){:width="100"} [Metroid: Zero Mission](https://github.com/YohannDR/mzm) | Decompilation | Active, 98% Done
![](https://static.wikia.nocookie.net/earthbound/images/e/eb/Mother1%2B2_boxart.PNG){:width="100"} [Mother 1+2 (Japan)](https://github.com/Normmatt/m12) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/b/be/PokemonRubySapphireBox.jpg){:width="200"} [Pokemon Ruby & Sapphire](https://github.com/pret/pokeruby) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg){:width="100"} [Pokemon Emerald](https://github.com/pret/pokeemerald) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg){:width="100"} [Pokemon FireRed & LeafGreen](https://github.com/pret/pokefirered) | Decompilation | Active
![](https://images.nintendolife.com/3f3cb022ee63f/pokemon-mystery-dungeon-red-rescue-team-cover.cover_large.jpg){:width="100"} [Pokémon Mystery Dungeon: Red Rescue Team](https://github.com/pret/pmd-red) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/8/82/Pokemonpinballrubyandsapphire.png){:width="100"} [Pokémon Pinball: Ruby & Sapphire](https://github.com/pret/pokepinballrs) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/a1/Sonic_Advance_2_Coverart.png){:width="100"} [Sonic Advance 2](https://github.com/freshollie/sa2) | Decompilation / Native port | Active, 67% Done; [Sonic Advance (SAT-R)](https://github.com/SAT-R/sa2) - Sonic Advance series decompilation and native-port project.
![](https://static.wikia.nocookie.net/summonnight/images/0/0c/Hajimari_no_ishi.jpg){:width="100"} [Summon Night Swordcraft Story 3](https://github.com/jiangzhengwenjz/csm3) | Decompilation | Active
![](https://mario.wiki.gallery/images/c/c7/Box_NA_-_Super_Mario_World_Super_Mario_Advance_2.png){:width="100"} [Super Mario Advance 2: Super Mario World](https://github.com/atasro2/sma2) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_Game_Cover.JPG){:width="100"} [The Legend of Zelda: The Minish Cap](https://github.com/zeldaret/tmc) | Decompilation / Native port | Completed; an [unofficial 3DS port has been reported](https://gonintendo.com/contents/63754-the-legend-of-zelda-the-minish-cap-gets-an-unofficial-3ds-port); [Project Picori](https://github.com/999sian/tmc) - Native PC-port project.
![](https://static.wikia.nocookie.net/yugioh/images/6/6f/Yu-Gi-Oh%21_Reshef_of_Destruction.jpg){:width="100"} [Yu-Gi-Oh! Reshef of Destruction](https://github.com/shinny456/ygodm8) | Decompilation | Active

---
## Nintendo DS
The [Nintendo DS guide](/ds) covers Nitro hardware, the NITRO SDK, and development.

The table below lists Nintendo DS reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://static.wikia.nocookie.net/nintendo/images/b/ba/Castlevania_Order_of_Ecclesia_%28NA%29.jpg){:width="100"} [Castlevania: Order of Ecclesia](https://github.com/lagolunatic/ooe) | Decompilation | This is a decompilation of Castlevania: Order of Ecclesia.
![](https://upload.wikimedia.org/wikipedia/en/b/bb/DragonQuestIXBoxArtJP.png){:width="100"} [Dragon Quest IX](https://github.com/dqix/dqix-decomp) | Decompilation | This is a decompilation of Dragon Quest IX.
![](https://static.wikia.nocookie.net/nintendo/images/c/c3/Mario_%26_Luigi_-_Partners_in_Time_%28NA%29.png){:width="100"} [Mario & Luigi - Partners in Time](https://github.com/rainchus/partnersintime-decomp) | Decompilation | This is a decompilation of Mario & Luigi - Partners in Time.
![](https://static.wikia.nocookie.net/nintendo/images/3/38/Mario_Party_DS_%28NA%29.png){:width="100"} [Mario Party DS](https://github.com/mariopartyrd/mariopartyds) | Decompilation | This is a decompilation of Mario Party DS.
![](https://upload.wikimedia.org/wikipedia/en/2/2e/PokemonDiamondPearlBoxArt.jpg){:width="100"} [Pokemon Diamond and Pearl](https://github.com/pret/pokediamond) | Decompilation | This is a decompilation of Pokémon Diamond/Pearl.
![](https://upload.wikimedia.org/wikipedia/en/c/cb/PokemonHGSSBox.jpg){:width="100"} [Pokemon HeartGold and SoulSilver](https://github.com/pret/pokeheartgold) | Decompilation | This is a decompilation of Pokémon HeartGold/SoulSilver.
![Pokemon Platinum box art](https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20DS/Named_Boxarts/Pokemon%20-%20Platinum%20Version%20%28USA%29.png){:width="100"} [Pokemon Platinum](https://github.com/cybervisi0n/pokeplatinum) | Native port | Native-port fork of the Pokemon Platinum decompilation.
![](https://upload.wikimedia.org/wikipedia/en/3/38/RhythmHeaven.PNG){:width="100"} [Rhythm Heaven (Gold)](https://github.com/patataofcourse/rhgold) | Decompilation | This is a decompilation of Rhythm Heaven.
![](https://static.wikia.nocookie.net/nintendo/images/6/6b/Legend_of_Zelda_Phantom_Hourglass_%28NA%29.jpg){:width="100"} [The Legend of Zelda: Phantom Hourglass](https://github.com/zeldaret/ph) | Decompilation | This is a decompilation of The Legend of Zelda: Phantom Hourglass.
![](https://static.wikia.nocookie.net/nintendo/images/0/0f/Legend_of_Zelda_Spirit_Tracks_%28NA%29.png){:width="100"} [The Legend of Zelda: Spirit Tracks](https://github.com/yanis002/st) | Decompilation | This is a decompilation of The Legend of Zelda: Spirit Tracks.

---
## Nintendo 3DS
The [Nintendo 3DS guide](/3ds) covers the handheld, development kits, and reversing.

The table below lists Nintendo 3DS reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://static.wikia.nocookie.net/nintendo/images/7/7c/Paper_Mario_Sticker_Star_%28NA%29.png){:width="100"} [Paper Mario: Sticker Star](https://github.com/darxoon/leaflitter) | Decompilation | This is a decompilation of Paper Mario: Sticker Star.
![](https://upload.wikimedia.org/wikipedia/en/4/42/Super-Mario-3D-Land-Logo.jpg){:width="100"} [Super Mario 3D Land (EU)](https://github.com/3dsdecomp/RedPepper) | Decompilation | This is a decompilation of the EU version of Super Mario 3D Land.
![](https://upload.wikimedia.org/wikipedia/en/3/30/The_Legend_of_Zelda_Ocarina_of_Time_3D_box_art.png){:width="100"} [The Legend of Zelda: Ocarina of Time 3D](https://github.com/zeldaret/oot3d) | Decompilation | This is a decompilation of The Legend of Zelda: Ocarina of Time 3D.

---
# Sega Systems
Sega is similar to Nintendo in that most of the games that people are interested in reverse engineering are 1st party titles such as Sonic and Phantasy Star.

## 32X

### Knuckles Chaotix
{% include link-to-other-site.html url="https://github.com/sonicretro/chaotix" description="Knuckles Chaotix" image="https://upload.wikimedia.org/wikipedia/en/d/dd/Knuckles%27_Chaotix_Coverart.png" title="Knuckles Chaotix"  %}

---
## Sega CD

### Shining Force CD
[ShiningForceCentral's disassembly](https://github.com/ShiningForceCentral/SFCDDISASM) reconstructs Shining Force CD.

![](https://upload.wikimedia.org/wikipedia/en/f/f5/Shining_Force_CD.jpg){:width="100"}

---
## Sega Master System
Although the Sega Master System was hugely popular in Europe, it can't compete with the NES for number of disassembled projects created so far.

The [Master System guide](/mastersystem) covers the console, development, and reversing.

The table below lists Sega Master System disassembly projects.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/3/34/Phantasy_Star_MS_cover.png){:width="100"} [Phantasy Star](https://github.com/lory90/ps1disasm) | Disassembly | Incomplete Phantasy Star Disassembly for Sega Master System from SonicRetro. It uses the wla-z80 assembler to build the ROM
![](https://greenhillszone.files.wordpress.com/2011/03/sonic_the_hedgehog_2_8-bit.png){:width="100"} [Sonic 2](https://github.com/sonicretro/s2smsdisasm) | Disassembly | Sonic 2 for the Sega Master System Incomplete Disassembly from SonicRetro. It uses the wla-z80 assembler to build the ROM.

---
## Sega Mega Drive
The Sega Mega Drive was Sega's most popular console in terms of games developed, and as such it also seems to be the most popular for reverse engineering projects too.

The [Mega Drive guide](/megadrive) covers Genesis development and reversing.

Name | Project Type
---- | ----
|![](https://upload.wikimedia.org/wikipedia/en/7/75/Kid_Chameleon_Coverart.png){:width="100"} [Kid Chameleon](https://github.com/sonicretro/kid-chameleon-disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg){:width="100"} [Knuckles the Echidna in Sonic the Hedgehog 2](https://github.com/sonicretro/ktes2)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/d/d4/Phantasy_Star_II.jpg){:width="100"} [Phantasy Star II](https://github.com/lory90/ps2disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/c/c9/Phantasy_Star_III_box_US.jpg){:width="100"} [Phantasy Star III](https://github.com/lory90/ps3disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/6/67/Phantasy_Star_EotM_cover.jpg){:width="100"} [Phantasy Star IV](https://github.com/lory90/ps4disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/2/2a/Ristar_cover_EU.jpg){:width="100"} [Ristar](https://github.com/sonicretro/ristar)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg){:width="100"} [Sonic the Hedgehog](https://github.com/sonicretro/s1disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg){:width="100"} [Sonic the Hedgehog 2](https://github.com/sonicretro/s2disasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/0/07/Sonic3-box-us-225.jpg){:width="100"} [Sonic the Hedgehog 3](https://github.com/sonicretro/skdisasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/d/d3/Sonic_%26_Knuckles_cover.jpg){:width="100"} [Sonic & Knuckles](https://github.com/sonicretro/skdisasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/3/36/Sonic3D.jpg){:width="100"} [Sonic 3D Blast](https://github.com/sonicretro/s3ddisasm)              | Disassembly |
|![](https://upload.wikimedia.org/wikipedia/en/6/6c/Sonic_Spinball_Box.jpeg){:width="100"} [Sonic Spinball](https://github.com/sonicretro/spindisasm)              | Disassembly |

---
## Sega Game Gear (GG)
Decompiled Game Gear projects are listed under this heading.
The [Game Gear guide](/gamegear) covers the handheld and its development hardware.

### Sonic 1
{% include link-to-other-site.html url="https://github.com/TheRavenfreak/Sonic-1-Game-Gear-Disassembly" description="" image="https://upload.wikimedia.org/wikipedia/en/4/46/Sonic1GGCoverArt.jpg" title="A work in progress split disassembly of Sonic The Hedgehog on the Sega Game Gear" %}

---
## Sega Dreamcast (DC)
The [Dreamcast guide](/dreamcast) covers Katana hardware, the SDK, and development.

The table below lists Sega Dreamcast (DC) reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/6/60/Sonic_Adventure.PNG){:width="100"} [Sonic Adventure](https://github.com/sonicretro/sad_disasm) | Disassembly | Very early disassembly of Sonic Adventure for the Dreamcast.
![](https://coverproject.sfo2.cdn.digitaloceanspaces.com/dreamcast/dc_tokyobusguide_jp_thumb.jpg){:width="100"} [Tokyo Bus Guide](https://github.com/lhsazevedo/tbg-decomp) | Decompilation | This is a decompilation of Tokyo Bus Guide for the Dreamcast.

---
## Sega Model 2 Arcade 

### Sonic the Fighters  
{% include link-to-other-site.html url="https://github.com/cglmrfreeman/stfdisasm" description="" image="https://upload.wikimedia.org/wikipedia/en/5/5b/Sonic_the_Fighters.png" title="Sonic the Fighters Disassembly"  %}

---
# Sony Systems
Compared to the other systems, Sony doesn't have many decompilation projects, mainly due to the higher complexity of the games developed by the PS1 era, requiring much larger teams to create the games in the first place.

## PlayStation 1
The table below lists the relevant entries.

The [PlayStation guide](/ps1) covers PSX hardware and PSY-Q. A dedicated page covers [Crash Bandicoot and its development](/crash-bandicoot).

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/c/cf/Castlevania_SOTN_PAL.jpg){:width="100"} [Castlevania: Symphony of the Night](https://sotn.xee.dev/) | Decompilation | Active; [SymphonyRecomp](https://github.com/BlackLabelHQ/SymphonyRecomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png){:width="100"} [Crash Bandicoot](https://github.com/wurlyfox/c1) | Decompilation | Active, 78% functional
![](https://upload.wikimedia.org/wikipedia/en/e/e6/Crash_Bandicoot_2_Cortex_Strikes_Back_Game_Cover.jpg){:width="100"} [Crash Bandicoot 2: Cortex Strikes Back](https://github.com/ughman/c2c) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/4/4f/CrashTeamRacingNACover.png){:width="100"} [Crash Team Racing](https://github.com/CTR-Tools/CTR-ModSDK) | Decompilation | Active, 73% Done; [CTR-Native](https://github.com/CTR-tools/ctr-native) - Native PC port.
![](https://upload.wikimedia.org/wikipedia/en/9/9c/Croc_Legend_of_the_Gobbos.jpg){:width="100"} [Croc: Legend of the Gobbos](https://github.com/xeeynamo/croc) | Decompilation | Inactive
![Digimon Digital Card Battle box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20-%20Digital%20Card%20Battle%20%28USA%29.png){:width="100"} [Digimon Digital Card Battle](https://github.com/juandav/dcb_decomp) | Decompilation | PlayStation decompilation project.
![Digimon World box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20World%20%28USA%29.png){:width="100"} [Digimon World](https://github.com/jype0/dw_decomp) | Decompilation | PlayStation decompilation project.
![](https://upload.wikimedia.org/wikipedia/en/8/8e/Driver_2_Coverart.jpg){:width="100"} [Driver 2](https://github.com/OpenDriver2/REDRIVER2) | Decompilation | N/A, Fully Playable on PC
![](https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg){:width="100"} [Final Fantasy VII](https://github.com/xeeynamo/ff7-decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/1/16/Froggercover.png){:width="100"} [Frogger: He's Back!](https://github.com/HighwayFrogs/frogger-psx) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/8/86/Legacy_Of_Kain-_Soul_Reaver_Cover.jpg){:width="100"} [Legacy of Kain: Soul Reaver](https://github.com/fmil95/soul-re) | Decompilation | Active, 80% Done
![](https://upload.wikimedia.org/wikipedia/en/3/32/Legend_of_Dragoon.jpg){:width="100"} [Legend of Dragoon](https://github.com/Legend-of-Dragoon-Modding/Legend-of-Dragoon-Java) | Decompilation | Active, 90% Done (First Disk Playable); [Severed Chains](https://legendofdragoon.org/projects/severed-chains) - Reverse-engineering and native PC-port project.
![](https://upload.wikimedia.org/wikipedia/en/3/3f/Legend_of_Legaia_cover.jpg){:width="100"} [Legend of Legaia](https://github.com/dacodechick/legaia-decomp) | Decompilation | Active
![Legend of Mana box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legend%20of%20Mana%20%28USA%29.png){:width="100"} [Legend of Mana](https://github.com/celophi/lom-decomp) | Matching decompilation | Reconstruction of the PlayStation game.
![](https://upload.wikimedia.org/wikipedia/en/a/a9/LSD_Coverart.png){:width="100"} [LSD Dream Emulator](https://github.com/FirecatFG/lsddecomp) | Decompilation | Active
![](https://www.mobygames.com/images/covers/l/83999-lunar-2-eternal-blue-complete-playstation-front-cover.jpg){:width="100"} [Lunar 2: Eternal Blue](https://github.com/Zackmon/lunar2-psx-decomp) | Decompilation | Inactive, 12% Done
![](https://upload.wikimedia.org/wikipedia/en/d/d3/Medievil_cover.jpg){:width="100"} [MediEvil](https://github.com/medievildecompilation/medievil-decomp) | Decompilation | Inactive; [MediEvilRecomp](https://github.com/BlackLabelHQ/MediEvilRecomp) - Static recompilation and native port.
![](https://upload.wikimedia.org/wikipedia/en/3/33/Metal_Gear_Solid_cover_art.png){:width="100"} [Metal Gear Solid](https://github.com/FoxdieTeam/mgs_reversing) | Decompilation | Active, SLPM_862.47, SLPM_862.48 and SLPM_862.49 Completed
![](https://upload.wikimedia.org/wikipedia/en/e/e2/NFS_High_Stakes_box.jpg){:width="100"} [Need for Speed: High Stakes](https://github.com/OpenNFS/NFSHSX) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/7/7b/NFS_II_%28PC%2C_US%29_cover_art.jpg){:width="100"} [Need for Speed 1-6](https://github.com/OpenNFS/OpenNFS) | Game Engine Reimplementation | Inactive
![](https://doomwiki.org/w/images/0/0a/PSXDoomBoxArt.jpg){:width="100"} [PSX DOOM](https://github.com/Erick194/PSXDOOM-RE) | Decompilation | Completed
![Ridge Racer box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ridge%20Racer%20%28USA%29.png){:width="100"} [Ridge Racer](https://github.com/kazuyette/rr-pc-port) | Decompilation port | Reverse-engineering and PC-port project for the original Ridge Racer.
![](https://upload.wikimedia.org/wikipedia/en/4/43/Shin_Megami_Tensei_The_First.jpg){:width="100"} [Shin Megami Tensei](https://codeberg.org/chickenzes/smt-decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/9/96/Silent_Hill_video_game_cover.png){:width="100"} [Silent Hill](https://github.com/Vatuu/silent-hill-decomp) | Decompilation | Active, 26% Done
![](https://upload.wikimedia.org/wikipedia/en/5/53/Spyro_the_Dragon.jpg){:width="100"} [Spyro the Dragon](https://github.com/TheMobyCollective/spyro-1) | Decompilation | Active, 58% Done; [OpenPete](https://openpete.com/) provides a native PC port using a hybrid static-recompilation and matching-decompilation approach
![](https://upload.wikimedia.org/wikipedia/en/6/69/Tomb_Raider_%281996%29.png){:width="100"} [Tomb Raider](https://github.com/rr-/Tomb1Main) | Reimplementation | PC Port Fully Playable
![](https://psxdatacenter.com/images/covers/U/T/SLUS-00437.jpg){:width="100"} [Tomb Raider II](https://github.com/Arsunt/TR2Main) | Reimplementation | Active - v0.8.2 release
![](https://upload.wikimedia.org/wikipedia/en/3/3f/Tomb_Raider_-_Chronicles.png){:width="100"} [Tomb Raider: Chronicles](https://github.com/TOMB5/TOMB5) | Decompilation | Inactive
![](https://upload.wikimedia.org/wikipedia/en/6/69/Tomb_Raider_%281996%29.png){:width="100"} [Tomb Raider 1-5](https://github.com/XProger/OpenLara) | Game Engine Reimplementation | First Game Fully Playable
![](https://upload.wikimedia.org/wikipedia/en/7/75/Tomba%21_NTSC.png){:width="100"} [Tomba!](https://github.com/hansbonini/psx_tomba) | Decompilation | Active, 35% Done
![](https://upload.wikimedia.org/wikipedia/en/3/3d/Twisted_Metal_cover.jpg){:width="100"} [Twisted Metal](https://github.com/abelbriggs1/tm1_decomp) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/2/26/Vandal_Hearts_Coverart.png){:width="100"} [Vandal Hearts](https://github.com/shao113/vh) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/a/a3/Vagrantstorybox.jpg){:width="100"} [Vagrant Story](https://github.com/shao113/vh) | Decompilation | Active, 16% Done
![WipeOut box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/WipEout%20%28USA%29.png){:width="100"} [WipeOut](https://github.com/wipeout-phantom-edition/wipeout-phantom-edition) | Source port | Native source port of the original WipeOut.
![](https://upload.wikimedia.org/wikipedia/en/6/6f/Xenogears_box.jpg){:width="100"} [Xenogears](https://github.com/ladysilverberg/xenogears-decomp) | Decompilation | Active, 15% Done

---
## PlayStation 2
The [PlayStation 2 guide](/ps2) covers the console, SDK, and development hardware.

The table below lists PlayStation 2 reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://static.wikia.nocookie.net/darkcloud/images/b/b1/Dark_Cloud_front_cover.png/revision/latest?cb=20190201005021){:width="100"} [Dark Cloud](https://github.com/adubbz/dcdecomp) | Decompilation | Decompilation project for Dark Cloud.
![](https://upload.wikimedia.org/wikipedia/en/b/b7/Fatal_Frame_Coverart.png){:width="100"} [Fatal Frame 1](https://github.com/Mikompilation/Himuro) | Decompilation | Decompilation project for Fatal Frame 1.
![](https://upload.wikimedia.org/wikipedia/en/a/af/Fatal_Frame_II_-_Crimson_Butterfly.jpg){:width="100"} [Fatal Frame 2](https://github.com/Mikompilation/Minakami) | Decompilation | Decompilation project for Fatal Frame 2.
![Grand Theft Auto III and Vice City box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Grand%20Theft%20Auto%20III%20%28USA%29.png){:width="100"} ![Grand Theft Auto Vice City box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Grand%20Theft%20Auto%20-%20Vice%20City%20%28USA%29%20%28v1.40%29.png){:width="100"} [Grand Theft Auto III and Vice City](https://github.com/Cai1Hsu/re3) | Reverse-engineered source port | Grand Theft Auto III and Grand Theft Auto: Vice City reverse-engineered PC source.
![](https://upload.wikimedia.org/wikipedia/en/4/40/Ico_cover_-_EU%2BJP.jpg){:width="100"} [Ico](https://github.com/rossydoubleunderscore/ico-decomp) | Decompilation | This is a decompilation project for Ico for the PS2.
![](https://upload.wikimedia.org/wikipedia/en/b/b6/Jak_and_Daxter_-_The_Precursor_Legacy_Coverart.png){:width="100"} [Jak and Daxter 1-3](https://github.com/open-goal/jak-project) | Decompilation / Native port | OpenGOAL reconstructs the GOAL language and provides native PC ports of Jak and Daxter, Jak II and Jak 3. [OpenGOAL](https://opengoal.dev/) provides setup instructions and documentation for the first three Jak games.
![](https://upload.wikimedia.org/wikipedia/en/8/85/Kingdom_Hearts.jpg){:width="100"} [Kingdom Hearts](https://github.com/ethteck/kh1) | Decompilation | Targets the main game executable, ELF file `SLPS_251.05` (SHA-1 `9dabbf867a7ec2a030df99ba1ed969f2deef0488`).
![](https://upload.wikimedia.org/wikipedia/en/f/f5/Klonoa2.jpg){:width="100"} [Klonoa 2: Lunatea's Veil](https://github.com/entriphy/kl2_lv_decomp) | Decompilation | Targeting SLUS_201.51. Structs, classes, and function names are taken from decompiling the C# assembly of Klonoa Phantasy Reverie Series.
![](https://upload.wikimedia.org/wikipedia/en/6/6a/Metalgear2boxart.jpg){:width="100"} [Metal Gear Solid 2: Sons of Liberty](https://github.com/GirianSeed/mgs2) | Decompilation | Decompilation project for Metal Gear Solid 2: Sons of Liberty for the PS2.
![Monster Hunter box art](https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Monster%20Hunter%20%28Japan%29.png){:width="100"} [Monster Hunter](https://github.com/2Tie/mh1j) | Decompilation | Reconstruction of the Japanese PlayStation 2 release.
![](https://cdn.mobygames.com/covers/3891875-parappa-the-rapper-2-playstation-2-front-cover.jpg){:width="100"} [PaRappa the Rapper 2](https://github.com/parappadev/parappa2) | Decompilation | Decompilation project for PaRappa the Rapper 2 (NTSC-J).
![](https://upload.wikimedia.org/wikipedia/en/4/44/RECV_boxart.jpg){:width="100"} [Resident Evil - Code: Veronica X](https://github.com/fmil95/recvx-decomp) | Decompilation | Decompilation project for Resident Evil - Code: Veronica X for the PS2.
![](https://upload.wikimedia.org/wikipedia/en/8/8e/SlyCooper2002cover.jpg){:width="100"} [Sly Cooper and the Thievius Raccoonus](https://github.com/TheOnlyZac/sly1) | Decompilation | This is a work-in-progress, experimental decompilation of Sly Cooper and the Thievius Raccoonus for the PlayStation 2. It is based on the NTSC-U version of the game (SCUS-971.98)
![](https://upload.wikimedia.org/wikipedia/fr/c/c2/Street_Fighter_III_3rd_Strike_Fight_for_the_Future_Logo.png){:width="100"} [Street Fighter III: 3rd Strike](https://github.com/crowded-street/3s-decomp) | Decompilation | This is a completed decompilation project for Street Fighter III: 3rd Strike for the PS2. [3SXW](https://github.com/guimaraf/3sxw) is an enhanced PC-port fork based on the PlayStation 2 decompilation.
![](https://upload.wikimedia.org/wikipedia/en/9/9e/Twisted_Metal_Black.jpg){:width="100"} [Twisted Metal: Black](https://github.com/abelbriggs1/tmb_decomp) | Decompilation | This is a decompilation project for Twisted Metal: Black for the PS2.
![](https://static.wikia.nocookie.net/xenosaga/images/4/4e/XS1.png){:width="100"} [Xenosaga Episode 1 - Der Wille zur Macht](https://github.com/squareman/xenosaga) | Decompilation | This is a decompilation project for Xenosaga Episode 1 - Der Wille zur Macht for the PS2.
![](https://upload.wikimedia.org/wikipedia/en/e/e4/Yakuza-sega.jpg){:width="100"} [Yakuza](https://github.com/hamzaxx370/ogre-decomp) | Decompilation | This is a decompilation project for Yakuza for the PS2.

---
# Microsoft Systems
Microsoft console projects include Xbox reverse engineering and Xbox 360 static recompilations.

## MSX
Decompiled MSX projects are listed under this heading.
The [MSX guide](/msx) covers the computer and its reversing notes.

### Metal Gear (1987)
{% include link-to-other-site.html url="https://github.com/GuillianSeed/MetalGear" description="This repository contains the fully annotated disassembly of the original Metal Gear game, released by Konami for MSX2 in 1987 with code RC750." image="https://upload.wikimedia.org/wikipedia/en/b/bd/Metal_Gear_cover.jpg" title="Fully annotated disassembly of the original Metal Gear game"  %}

---
## Xbox
Decompiled original Xbox projects are listed under this heading.
The [Xbox guide](/xbox) covers the console and XDK.

### Halo: Combat Evolved
{% include link-to-other-site.html url="https://github.com/halo-re/halo" description="The goal of this project is to study and create a free, open-source re-implementation of the original Xbox launch title Halo: Combat Evolved." image="https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg" title="Halo: Combat Evolved Decompilation Research Project"  %}

---
## Xbox 360
Xbox 360 decompilations and native ports are listed below. The [ReXGlue SDK](https://github.com/rexglue/rexglue-sdk) provides a PowerPC-to-C++ recompilation runtime and toolkit used by projects such as LARecomp and EdgeOfTimeRecomp.
The [Xbox 360 guide](/xbox360) covers the console and its development kit.

The table below lists Xbox 360 reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![Blue Dragon box art](https://cdn.thegamesdb.net/images/original/boxart/front/105392-1.jpg){:width="100"} [Blue Dragon](https://github.com/zolaware/reblue) | Native port | Blue Dragon PC-port project.
![Condemned 2: Bloodshot box art](https://images.launchbox-app.com/3c1ff837-8c46-4a3e-a4e0-789a93b12477.jpg){:width="100"} [Condemned 2: Bloodshot](https://github.com/psxrestore/Condemned2Recomp) | Static recompilation | Condemned 2: Bloodshot native-port project. Uses static recompilation.
![Destroy All Humans! Path of the Furon box art](https://s.pacn.ws/1/p/7e/pa.133096.1.png?v=k3gwbt){:width="100"} [Destroy All Humans! Path of the Furon](https://github.com/masterspike52/reDAHM) | Static recompilation | Destroy All Humans! Path of the Furon native-port project. Uses static recompilation.
![Dragon Ball Z: Budokai HD box art](https://images.launchbox-app.com/8aad2f1b-afcd-4070-99ab-13a491e6de7b.png){:width="100"} [Dragon Ball Z: Budokai HD](https://github.com/WistfulHopes/DBZ1) | Static recompilation | Dragon Ball Z: Budokai HD native-port project. Uses static recompilation.
![Eternal Sonata box art](https://i.3djuegos.com/juegos/1853/eternal_sonata__trusty_bell_/fotos/ficha/eternal_sonata__trusty_bell_-1684586.jpg){:width="100"} [Eternal Sonata](https://github.com/birabittoh/EternalSonataReprise) | Static recompilation | Eternal Sonata native-port project. Uses static recompilation.
![Kameo: Elements of Power box art](https://pnpdistribution.com/i/KAMEO-X3.jpg){:width="100"} [Kameo: Elements of Power](https://github.com/birabittoh/KameoRePowered) | Static recompilation | Kameo: Elements of Power native-port project. Uses static recompilation.
![Lollipop Chainsaw box art](https://thumbnails.libretro.com/Microsoft%20-%20Xbox%20360/Named_Boxarts/Lollipop%20Chainsaw%20%28Japan%29.png){:width="100"} [Lollipop Chainsaw](https://github.com/MaxDeadBear/Re-Cherry) | Static recompilation | Lollipop Chainsaw native-port project. Uses static recompilation.
![Midnight Club: Los Angeles box art](https://www.lukiegames.com/assets/images/Xbox-360/X360_MIDNIGHT_CLUB_LOS_ANGELES_COMPLET.jpg){:width="100"} [Midnight Club: Los Angeles](https://github.com/mzzvxm/larecomp) | Static recompilation | Midnight Club: Los Angeles (Complete Edition) native Windows port. Uses static recompilation.
![Naughty Bear box art](https://cdn.mobygames.com/covers/3483175-naughty-bear-xbox-360-front-cover.jpg){:width="100"} [Naughty Bear](https://github.com/MaxDeadBear/NaughtyBear_ReStuff) | Static recompilation | Naughty Bear native-port project. Uses static recompilation.
![Sonic the Hedgehog (2006) box art](https://vglist.sfo2.digitaloceanspaces.com/iqdic0g3w3h2c5nx8wamyw8fcdjo){:width="100"} [Sonic the Hedgehog (2006)](https://github.com/sonicnext-dev/MarathonRecomp) | Static recompilation | Xbox 360 version of Sonic the Hedgehog (2006). Uses static recompilation.
![Sonic Unleashed box art](https://www.thevideogamecompany.com/cdn/shop/products/sonic-unleashed-microsoft-xbox-360-010086680294-cover-art.jpg?v=1661463165){:width="100"} [Sonic Unleashed](https://github.com/hedge-dev/UnleashedRecomp) | Static recompilation | hedge-dev has released UnleashedRecomp, a static recompilation tool that allows Sonic Unleashed to run natively on PC with performance enhancements and modding support.
![Spider-Man: Edge of Time box art](https://s.pacn.ws/1/p/b9/pa.202512.1.jpg?v=lpldl4){:width="100"} [Spider-Man: Edge of Time](https://github.com/goliathret/EdgeOfTimeRecomp) | Static recompilation | Xbox 360 version of Spider-Man: Edge of Time. Uses static recompilation.
![](https://cdn0.spong.com/pack/t/e/terraria409425l/_-Terraria-Xbox-360-_.jpg){:width="100"} [Terraria](https://github.com/dptug/TerrariaXDK) | C# decompilation | Since Terraria is based on XNA which is a C# library, it is possible to decompile back into C# source code. This project is still very early but has some interesting results.
![Viva Pinata: Trouble in Paradise box art](https://www.thevideogamecompany.com/cdn/shop/products/viva-pinata-trouble-in-paradise-microsoft-xbox-360-882224718561-cover-art.jpg?v=1661463747){:width="100"} [Viva Pinata: Trouble in Paradise](https://github.com/SolarCookies/TiP-Recomp) | Static recompilation | Viva Pinata: Trouble in Paradise native-port project. Uses static recompilation.

---
### Sonic Unleashed
**hedge-dev** has released UnleashedRecomp, a project that statically recompiles the Xbox 360 version of *Sonic Unleashed* to run natively on PC. By translating the original PowerPC instructions and Xenos shaders into native C++ and HLSL, this tool bypasses traditional emulation overhead, enabling features like arbitrary resolutions, high frame rates, and deep modding support on Windows and Linux.

---
## PC (Windows)
The table below lists the relevant entries.

The [PC guide](/pc) covers game development and reversing.

Name | Project Type | Status / Ports
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/en/8/83/Cave_Story_title_screen.png){:width="100"} [Cave Story](https://github.com/gameblabla/CSE2) | Decompilation | Taken down by DMCA
![Chrono Cross: Radical Dreamers Edition artwork](https://cdn11.bigcommerce.com/s-uak4l72xa0/images/stencil/1280x1280/products/884/1889/f58fb71fef47d7b8f3d709ed62a7fee0_KR_350__56122.1687800627.png?c=1){:width="100"} [Chrono Cross: Radical Dreamers Edition](https://github.com/jdperos/chrono-cross-decomp) | Matching decompilation | Reconstruction of the PC remaster.
![](https://upload.wikimedia.org/wikipedia/en/c/c9/Cosmoscosmicadventurecover.jpg){:width="100"} [Cosmo's Cosmic Adventure](https://github.com/smitelli/cosmore) | Decompilation | Active
![Cut the Rope DX artwork](https://raw.githubusercontent.com/yell0wsuit/cuttherope-dx/main/distribution/icons/CutTheRopeDXIcon_512.png){:width="100"} [Cut the Rope DX](https://github.com/yell0wsuit/cuttherope-dx) | Decompilation port | Cut the Rope decompilation with enhancements.
![](https://upload.wikimedia.org/wikipedia/en/0/06/Deus_Ex_Human_Revolution_cover.jpg){:width="100"} [Deus Ex: Human Revolution](https://github.com/rrika/cdcEngineDXHR) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/3/3a/Diablo_Coverart.png){:width="100"} [Diablo](https://github.com/diasurgical/devilution) | Decompilation | N/A
![](https://upload.wikimedia.org/wikipedia/fr/3/3c/Diablo_II_Logo.png){:width="100"} [Diablo II](https://github.com/ThePhrozenKeep/D2MOO/) | Decompilation | Active, >50%
![](https://upload.wikimedia.org/wikipedia/en/d/d4/Duck_Game_Logo.jpg){:width="100"} [Duck Game](https://github.com/TheFlyingFoool/DuckGameRebuilt) | Decompilation | Completed
![](https://upload.wikimedia.org/wikipedia/en/9/9e/Duke_Nukem_II_Cover.jpg){:width="100"} [Duke Nukem II (DOS)](https://github.com/lethal-guitar/Duke2Reconstructed) | Reimplementation | N/A
![](https://upload.wikimedia.org/wikipedia/en/a/a1/Lego-island.jpg){:width="100"} [Lego Island](https://github.com/isledecomp/isle) | Decompilation | Active, 98% Accuracy
![](https://www.oldgames.sk/images/oldgames/action/Oddworld.Abes.Oddysee/Covers/oddworld-abes-oddysee-windows-front-cover.jpg){:width="100"} [Oddworld 1-2](https://github.com/AliveTeam/alive_reversing) | Game Engine Reimplementation | Active, Playable
![](https://upload.wikimedia.org/wikipedia/en/7/77/Oregon_Trail_II_cover.jpg){:width="100"} [Oregon Trail II](https://github.com/katstasaph/otii) | Decompilation | Active
![](https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg){:width="100"} [Plants vs. Zombies GOTY Edition](https://github.com/Patoke/re-plants-vs-zombies) | Decompilation | Active
![](https://opengraph.githubassets.com/1/RSDKModding/RSonic3D-Decompilation){:width="100"} [Retro Sonic 3D](https://github.com/RSDKModding/RSonic3D-Decompilation) | Decompilation | Retro-Sonic 3D: Sky Worlds (2005).
![](https://images.igdb.com/igdb/image/upload/t_cover_big/co2hi5.png){:width="100"} [SkiFree](https://github.com/yuv422/skifree_decomp) | Decompilation | Completed
![](https://static.wikia.nocookie.net/sonic/images/d/d9/CD2011Art.jpg){:width="100"} [Sonic CD (2011)](https://github.com/Rubberduckycooly/Sonic-CD-11-Decompilation) | Decompilation | Active; [Retro Engine v3](https://github.com/RSDKModding/RSDKv3-Decompilation) - Engine used by Sonic CD (2011); [Sonic CD scripts (RSDKv3)](https://github.com/RSDKModding/RSDKv3-Script-Decompilation) - Game scripts for Sonic CD (2011) and Sonic Origins.
![](https://upload.wikimedia.org/wikipedia/en/d/d2/Sonic_Mania_%28artwork%29.jpg){:width="100"} [Sonic Mania](https://github.com/Rubberduckycooly/Sonic-Mania-Decompilation) | Decompilation | Active; [Retro Engine v5 and v5 Ultimate](https://github.com/RSDKModding/RSDKv5-Decompilation) - Engine versions used by Sonic Mania and Sonic Origins; [Sonic Mania (RSDKModding)](https://github.com/RSDKModding/Sonic-Mania-Decompilation) - Game-code reconstruction used with the Retro Engine v5 decompilation.
![](https://github.com/user-attachments/assets/3619edef-95e1-466a-9596-bc74c7252e18){:width="100"} [ShortLine railroad (DOS)](https://github.com/konovalov-aleks/reSL) | Decompilation | Completed
![](https://opengraph.githubassets.com/1/RSDKModding/RSDKv2-Decompilation){:width="100"} [Sonic Nexus (Retro Engine v2)](https://github.com/RSDKModding/RSDKv2-Decompilation) | Engine decompilation | Reconstruction of the 2008 game's engine.
![TimeSplitters Rewind artwork](https://media.moddb.com/images/downloads/1/301/300077/TSRSplashTest2.jpg){:width="100"} [TimeSplitters Rewind](https://www.timesplittersrewind.com) | Fan remake | Recreation combining material from the three TimeSplitters games.
![](https://upload.wikimedia.org/wikipedia/en/8/8b/Th06cover.jpg){:width="100"} [Touhou Koumakyou: The Embodiment of Scarlet Devil](https://github.com/happyhavoc/th06) | Decompilation | Active; [Touhou 6 (GensokyoClub)](https://github.com/GensokyoClub/th06) - Alternative decompilation project.
![](https://images.pcgamingwiki.com/c/cb/Twisted_Metal_2_cover.jpg){:width="100"} [Twisted Metal 2](https://github.com/abelbriggs1/tm2pc-reveng) | Decompilation | Inactive

---
# Atari Systems

## Atari 2600
The [Atari 2600 guide](/atari2600) covers VCS reversing.

The table below lists Atari 2600 disassembly projects and collections.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://upload.wikimedia.org/wikipedia/commons/b/b9/Atari-2600-Wood-4Sw-Set.jpg){:width="100"} [Atari 2600 disassembly collection](http://www.bjars.com/disassemblies.html) | Disassembly | Various disassembled Atari 2600 games
![](https://images-na.ssl-images-amazon.com/images/I/71B3YruuXkL._AC_SL1095_.jpg){:width="100"} [Donkey Kong](https://atariage.com/forums/topic/286583-donkey-kong-disassembly-take-2/) | Disassembly | Atari 2600 disassembly.

---
## ColecoVision

### Donkey Kong
{% include link-to-other-site.html url="https://atariage.com/forums/topic/229669-colecovision-donkey-kong-disassembly/" description="" image="https://i.pinimg.com/originals/28/db/53/28db5343d4801e9c10cbb4e7a91e3317.jpg" title="Donkey Kong for ColecoVision Disassembly" %}

---
# NEC Systems

## PC-9801

### Touhou Project 1-5 (1997-1998)

[ReC98](https://github.com/nmlgc/ReC98) reconstructs the source code of the first five Touhou Project games by ZUN Soft, originally released for the NEC PC-9801.

![](https://static.wikia.nocookie.net/touhou/images/f/f3/Th01Cover.jpg){:width="100"}

---
# Mobile games
Mobile games are a special case that weren't initially going to be included, but we have included a few games that are based on console games.

## Java 2 Mobile Edition (J2ME)

### Sonic 1 J2ME
{% include link-to-other-site.html url="https://github.com/Iso-Kilo/Sonic-1-J2ME-Decompilation" description="A decompilation of the 2005 Java mobile port of Sonic the Hedgehog (1991). This decompilation focuses on the 240x320 resolution version, of part 1 as it uses the original game's graphics. However, there are lower resolutions that function similarily. And part 2 consists of the largest available resolution; 208x208. Part 1 was created by iFone, and 2 by Glu." image="https://repository-images.githubusercontent.com/254218052/8e42f080-7f34-11ea-9261-3e534fe23726" title="Decompile of the 2005 mobile port of Sonic 1" %}

---
## Android
The [Android guide](/Android) covers reversing and game development for the platform.

The table below lists Android reverse-engineering projects and native ports.

Name | Project Type | Status / Notes
--- | --- | ---
![](https://static.wikia.nocookie.net/sonic/images/2/2c/Sonic2iOSpromotional3.png){:width="100"} [Sonic 1 & 2 Classic (2013)](https://github.com/Rubberduckycooly/Sonic-1-2-2013-Decompilation) | Decompilation | Decompilation project. The RSDKModding projects separate the [Retro Engine v4 reconstruction](https://github.com/RSDKModding/RSDKv4-Decompilation) from the [Sonic 1, Sonic 2 and Sonic CD game scripts](https://github.com/RSDKModding/RSDKv4-Script-Decompilation). The script project also covers related Sonic Origins versions.
![](https://i.ytimg.com/vi/u9BNOiB9Pcc/maxresdefault.jpg){:width="100"} [Sonic Advance](https://github.com/ImmutableOctet/sonicgba-monkey) | Decompilation | Sonic GBA is a fan developed reinterpretation of decompiled Java output from the Android version of Sonic Advance.

---
## Windows Phone

### Plants vs. Zombies (2011)
{% include link-to-other-site.html url="https://github.com/Mewnojs/PlantsVsZombies.NET" description="powered by MonoGame." image="https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg" title="A port of Plants vs. Zombies Windows Phone version to various platforms" %}
