---
layout: post
tags: 
- leak
- nes
title: Nintendo Lot Check ROM Leak 
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/leaks/Nintendo Lot Check.jpg
permalink: /nintendo-lot-check
breadcrumbs:
  - name: Home
    url: /
  - name: Leaks
    url: /leaks
  - name: Nintendo Lot Check ROM Leak 
    url: #
recommend: 
- leak
- nes
editlink: /leaks/NintendoLotCheck.md
updatedAt: '2020-09-30'
twitterimage: https://www.retroreversing.com/public/images/leaks/Nintendo Lot Check.jpg
---

<section class="postSection">
    <img src="/public/images/leaks/Nintendo Lot Check.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Since Nintendo controls manufacturing of all official games they have a process called **Lot Check** that ensures the games quality before manufacturing. Every game ever officially released for their platform has had to go through the Lot Check process in order to achieve the Nintendo Seal of Quality.
 </div>
</section> 


# Lot Check Lists
In the Pokemon Leak on the 4th of May 2020 a bunch of excel spreadsheets were uploaded into the `/misc` folder, these contained the full list of all games that have gone through the Nintendo Lot Check process for most systems up until the Nintendo DS.

Name | Description
---|---
MIN_data.xls  | Pokemon Mini Lot Check
AGB_data.xls  | Game Boy Advance Lot Check
CGB_data.xls  | Game Boy Color Lot Check
DMG_data.xls  | Game Boy Lot Check
FileList.csv  | NES Lot Check with less columns
HNPdata_List.xlsx   | NES Lot Check
NTR_data.xls   | Nintendo DS Lot Check
NUD_data.xls  | Nintendo 64DD Lot Check
NUS_data.xls | Nintendo 64 Lot Check
S-ROY_data.xls  | SNES late release games with Royalties
SHNP_data.xls   | SNES Lot Check
TWL-DW_data.xls | DSiware lot Check
TWL-Hyb_data.xls   | Nintendo DSi Hyb? lot Check
TWL-Ltd_data.xls   | Nintendo DSi Lot Check
VUE_data.xls  | Virtual Boy Lot Check

---
# The GigaLeak (NES Lot Check released)
As part of the **Gigaleak** the full set of official Nintendo Lot Check ROMS were distributed online on 4Chan. They were located in an archive called **Other.7z** and the sub archive **Famicom_NES.7z**.

## Contents of Famicom_NES.7z
When extracted from the archive, two folders are created:
* HVC - Japanese Famicom ROMS
* NES - US Nintendo Entertainment System ROMS

Note that in the NES Lot Check list (**HNPdata_List.xlsx**) it had 3 different codes, HVC, NES and PAL, but all the PAL content was not leaked during the Gigaleak.

HVC stands for Home Video Computer and was the codename for the Famicom during development, this is also the product code for all Japanese games.

## ROM Format
The ROMS contained in the 2 main folders are not standard, e.g they are not .NES files and don't have an iNES header. You can not just rename to .nes and run them in an emulator.
 
If you look at the internals of NES cartridge you will notice that there are in fact multiple ROM chips on board, known as PRG for Program code and CHR for Character Tiles (Graphics).

This is important as when manufacturing the cartridge Nintendo would need to have the data for both chips and thus the ROMS available in the Lot Check are split into these two parts.

In theory you could create an iNES header and merge the 2 parts into a .NES rom that would run in an emulator, but you might as well just get the rom elsewhere. It is only worth doing this for games that have never been dumped before, which is the topic of the next section.

The name format is:
```
{HVC or NES}{Abbreviation}{Revision_version}{P or C}.{Software_Number}
```

So for example for Kirby's Adventure its Abbreviation is "KR", it has 2 revisions of the program so you can choose either 0 or one for the revision version.
```js
System = "NES"
Abbreviation = "KR"
Revision_version = 0
Software_Number = '073'

// Result
PRG_FileName = System + Abbreviation + Revision_version + "P." + Software_Number  // NESKR0P.073
CHR_FileName = System + Abbreviation + Revision_version + "C." + Software_Numbe // NESKR0C.073
```

You can find the Abbreviation, revision and software numbers in the **HDPdata_List** spreadsheet.

## Un-released NES ROMS
As the Nintendo Lot Check process is only done during the final stages of development, don't expect any beta or prototype games to be here. 

However there is an occasional game that made it all the way to Lot Check phase but was then deemed too costly to physically manufacture. It is these games that make the Lot Check leak worthwhile.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I cross-referenced the NES bank dumps from today&#39;s leaks, against the known collection of NES roms (No-Intro 2017-06-18). Looks like there&#39;s a few previously unknown roms, including a second revision of the Nintendo World Championship cart! <a href="https://t.co/tFol8CxyLH">pic.twitter.com/tFol8CxyLH</a></p>&mdash; ラ0.F (@MrCheeze_) <a href="https://twitter.com/MrCheeze_/status/1286867151199055873?ref_src=twsrc%5Etfw">July 25, 2020</a></blockquote>  

### New Revision ROMS
All computer programs have bugs, and NES games are no different, in some cases there were new patched versions of a game released with a higher revision number. A few of these never got physically manufactured such as [^1]:
* Bridgestone Cycle: Radac Tailor-made (Japan)
* Dragon Slayer Jr.: Romancia (Japan)
* Family Computer Othello (Japan)
* Nintendo World Cup (North America)
* Roger Clemens' MVP Baseball (North America)


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">the mystery roms have been discovered <a href="https://t.co/tY5sH5yfeq">pic.twitter.com/tY5sH5yfeq</a></p>&mdash; I..A..N..S (@IANSYT) <a href="https://twitter.com/IANSYT/status/1287615989304131584?ref_src=twsrc%5Etfw">July 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Famicom Disk System Lot Check
On the 30th September 2020 the Famicom Disc System Lot Check ROMS were leaked to the public as part of the **Paladin Leak**. The archive containing these ROMS was called **FMC_DISK.7z** and was included in the **paladin.7z** main archive.

It is important to know a few things about the Famicom Disk System before proceeding, the disks could have multiple sides (2 of course) and has different content on each side. Nintendo used a format called `RD*` to store these games and had a different file for each side, so if a game has two sides then there would be both an **RDA** and **RDB** file (for side A and side B respectively). 

## Contents of FMC_DISK.7z
When the **FMC_DISK.7z** archive has been extract it creates the following files and folders:
* **110803HNPdata.xls** - NES Lot Check list (from 3rd August 2011)
* **DiskWriterSoftPak_ZEL.txt** - Notes about the Zelda EPROM Converter
* **DiskWriterSoftPak_ZEL.zip** - Source code and Zelda EPROM result
* **FMC_DISK.zip** - Zip of the disk_image folder (password protected)
* **FMCｄｉｓｋsystem_ead_070726.xls** - Lot Check list of Famicom Disk System Games (from 26th July 2007)
* **FMCｄｉｓｋsystem_ead_160519.xls** - Lot Check list of Famicom Disk System Games (from 19th May 2016)
* **disk_image** - ROMS for each of the sides (A/B) of the disks
* **disk_labels** - photographs of each of the master disks that was dumped
* **readme.txt** - notes about the files in this folder, created for Wii Virtual Console
* **tool** - contains a tool to convert RDA/RDB to FDS format (**rdafds.exe**)

The **readme.txt** file is really interesting as it mentions converting side A and side B of the Disk to a format called QD, which is basically both **rda** and **rda** files concatenated together.

Presumably the D in both file extension formats stands for Disk, but it is unclear what the Q stands for or even the R in RDA/RDB.

## RDA to FDS Converter tool (rdafds)
This is a tool that converts from the Nintendo RD* format for Disk System games to the iNES **FDS** so that it can be emulated on a PC. It seems that nintendo were using an NES emulator to test these games before the virtual console versions were available.

If you are interested in converting the RD* files located in this archive then you can use the **rdafds.exe** executable located in the **tool** folder to do the conversion.

## Zelda Disk Version (DiskWriterSoftPak_ZEL.zip)
It seems that Nintendo had trouble getting any data from the Master Disk for Zelda so they asked Mr. **Tomohiro Kawase** who managed to get the data from an EPROM (SQCD?).

It seems they needed to create a tool called **scattoqd.exe** to convert the resulting EPROM data (called SCAT for some reason?) to the Virtual Console QD format. The source code is also availble for this tool under a single C++ source file called **scattoqd.cpp**.

The result is in the zip archive under the name **007_FMC-ZEL-0-1.qd**, as mentioned before the Virtual Console (QD) format is just RDA and RDB concatenated together, so you could split it up fairly easily.

## Unreleased Famicom Disc System Games
Thanks to **MrCheeze_** over on twitter we have a list of games that do not match any previously released Game Codes, these games are:
* 064 - BAN-UL1-0-0 - Ultraman - Kaijuu Teikoku no Gyakushuu
* 070 - SCO-MEA-2-0 - Michael English Daibouken (Sample)
* 085 - FMC-ON1-3-0 - Famicom Mukashi Banashi - Shin Onigashima
* 086 - FMC-ON2-0-0 - Famicom Mukashi Banashi - Shin Onigashima (Disk 2)
* 143 - NDS-PAC-1-0 - Pac-Man
* 145 - NDS-DIG-0-0 - Dig Dug
* 146 - NDS-DD2-0-0 - Dig Dug II
* 164 - FSC-FTAJ-1-0 - 野村のファミコントレード (Nomura NES Trade)
* 165 - FSC-FTEJ-1-0 - 野村のファミコントレード（デモ用）(Nomura's NES trade (for demo))
* 166 - FMC-KMAR-0-0 - Kaettekita Mario Bros. (translation: Come back Mario Bros)
* 174 - FMC-BFD-1-0 - バルーンファイト (Balloon fight)
* 180 - FMC-GOD-0-0 - 五目ならべ (Five eyes) (Gomoku Narabe Renju)
* 194 - SFL-TMG-1-0 - ザ·マネーゲーム (The Money Game)
* 195 - PAC-KTD-1-0 - Kattobi! Warabe Ko
* 201 - BAN-SG2-0-0 - SDｶﾞﾝﾀﾞﾑﾜｰﾙﾄﾞ ｶﾞﾁｬﾎﾟﾝ戦士 SCRAMBLE WARS ﾏｯﾌﾟｺﾚｸｼｮﾝ (SD Gundam World Gachapon Warrior SCRAMBLE WARS Map Collection)
* 210 - FSC-FTBJ-1-0 - 野村のファミコントレード (Nomura NES Trade)

Some of the names for the games were found in the MAME source code, so not completely unknown ROMS [^8]. 

of particular note are the Nomura NES Trade ROMS which were used to trade Stock with the Japanese bank **Nomura**.

The format of each Games product code is as follows (example is for Bandai's Ultraman):
```js
Publisher = "BAN"
Abbreviation = "UL1"
Revision_version = 0
Unknown = 0
Software_Number = '064'

// Result
SIDE_A_FileName = Software_Number + "_" Publisher + "-" + Abbreviation + "-" + Revision_version + Unknown  + ".rda" // 064_BAN-UL1-0-0.rda
SIDE_B_FileName = Software_Number + "_" Publisher + "-" + Abbreviation + "-" + Revision_version + Unknown  + ".rdb" // 064_BAN-UL1-0-0.rdb
```

The Publisher codes used for the above files are as follows:
* **BAN** - Bandai
* **KDS** - Konami
* **FSC** - Nintendo
* **FMC** - Nintendo
* **NDS** - Namco
* **PAC** - Pack-In Video
* **SCO** - Scorpion Soft
* **SFL** - Sofel

## Gomoku Narabe Renju 五目ならべ
<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/LuigiBlood?ref_src=twsrc%5Etfw">@LuigiBlood</a> already documented the unreleased FDS port of Balloon Fight. I think this is another unrelease FDS port of &quot;Gomoku Narabe Renju&quot;, Nintendo&#39;s Famicom version of Go. <a href="https://t.co/PAhjtBW8fJ">pic.twitter.com/PAhjtBW8fJ</a></p>&mdash; ラ0.F (@MrCheeze_) <a href="https://twitter.com/MrCheeze_/status/1311358036678713345?ref_src=twsrc%5Etfw">September 30, 2020</a></blockquote>

## Balloon Fight
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve never seen Balloon Fight on FDS, ever <a href="https://t.co/NACIXI3nCP">pic.twitter.com/NACIXI3nCP</a></p>&mdash; LuigiBlood (@LuigiBlood) <a href="https://twitter.com/LuigiBlood/status/1311270365503598595?ref_src=twsrc%5Etfw">September 30, 2020</a></blockquote>


---

# Game Boy (DMG & GBC) Lot Check
The Game Boy Lot check including both original and Color games was released to the public on the 9th of September as part of the Platinum Leak. The content was available inside the **platinum.7z** file in an archive called **dmg_sgb.7z**.

## Contents of dmg_sgb.7z
There are two folders at the top level of the archive which are:
* DMG - lot Check ROMS are in here
* SGB - Super Game Boy BIOS

For documentation on the SGB folder checkout the Cutting Room Floors article on it: [Proto:Super Game Boy - The Cutting Room Floor](https://www.tcrf.net/Proto:Super_Game_Boy)

### DMG Folder
The DMG (Dot Matrix Game) folder actually also contains GBC Roms too, it has the following folders in it:
* 001~500 - first 500 games (.001 to .500)
* 501~@00 - second 500 games (.501 to .@00)
* @01~E00 - next 500 games (.@01 to .E00)
* e01~j00 - next 500 games (.e01 to .j00)
* J01~O00 - next 500 games (.j01 to .O00)
* TestPRG - Test programs internal to Nintendo (MBC5 tester)
* CGB - Game Boy color roms, also split into 2 folders of 500
* MBC3_CGB - Documentation for Memory Bank Controller 3 for the Color Game Boy
* NG - ?
* POOL - ?
* KENSA - Test Games (KENSA is Japanese word for test/inspection/examination.)

The games are numbered based on when they came into the Lot Check process so release dates can vary.

Not that because they use a 3 digit extension for the number, when it reached **.999** it had to start using the alphabet as the first character, counting from **@** to the letter **O**. The **@** symbol comes before **A** but it is unclear why they did this, maybe to give an extra letter incase they ran out, but surely they would do that at the end after **Z**.

The **NG** folder contains games:
* One Piece (J)
* Yu-Gi-Oh (EU)
* Yu-Gi-Oh (FR)
* Wendy Der Traum Yon Arizona (GER)
* Watashi no Restaurant (J)
* Kanji Boy 3 (J)
* Tonka Construction Zone (U)
* Komugi-Chan no Cake o Tsukurou! (J)

The **POOL** folder contains games such as:
* Edd the Duck
* CutThroat Island (U)
* NFL Quarterback Club '96 US
* Alien Games 2044 AD (U)

## Un-released Game Boy ROMS
As the Nintendo Lot Check process is only done during the final stages of development, don't expect any beta or prototype games to be here. 

However there is an occasional game that made it all the way to Lot Check phase but was then deemed too costly to physically manufacture. It is these games that make the Lot Check leak worthwhile. Unlike the NES Lot Check Leak, for the Game Boy there was a plethora of previously un-released games in the Lot Check set!

### All Un-released and Un-dumped DMG ROMS
The table below contains all the previously unreleased ROMS for the original Game Boy (DMG). Some are from cancelled games, unreleased localisations and others are games that made it to retail but have never been dumped or released online.

Name | Description
---|---
10-Pin Bowling (USA).gb | Previously un-dumped
Aguri Suzuki F-1 Super Driving (Japan).gb | Previously un-dumped
Alien Games (USA).gb | Cancelled Game
All Star Tennis 2000 (AZTX) (Rev 0).gb | Never released in AZTX?
All Star Tennis 2000 (USA) (Rev 0).gb | Never released in USA
Asterix (USA).gb | Never released in USA
Baby's Day Out (USA).gb | Cancelled Game [^6]
Bakusou Senki Metal Walker GB - Koutetsu no Yuujou (Japan) (Rev 1).gb | New Revision
Beethoven (USA).gb | Previously un-dumped
Berlitz German Language Translator (USA, Europe).gb | Previously un-dumped
Berlitz Japan Language Translator (USA, Europe).gb | Previously un-dumped
Bloomland.gb | Never released
Bobby's World (Europe) (Rev 0).gb | Never released [^7]
Bobby's World (USA) (Rev 0).gb | Never released [^7]
Calculator-0.7.gb | Never released
Card Games (USA).gb | Never released in USA
Castelian (Japan).gb | Previously un-dumped
Castle Quest (USA).gb | Never released in USA
Chuugaku Eijukugo 350 (Japan).gb | Previously un-dumped
Chuugaku Eitango 1700 (Japan).gb | Previously un-dumped
Cutthroat Island (Japan).gb | Never released in Japan
Dirty Racing (USA).gb | Never released in USA
Disney's Mulan (USA).gb | 
Donkey Kong Land 2 (Japan).gb | Game Boy Color re-release
Doomsayer - A Heros Crusade (USA).gb | Previously un-dumped
Dragon Dance (Europe) (Rev 0).gb | Was released for Game boy Color instead
Dragon Dance (USA) (Rev 0).gb | Was released for Game boy Color instead
Dragon Quest Monsters - Terry no Wonderland (Japan) (Rev 1).gb | Previously un-dumped
Dungeon Savior (Japan) (Rev 1).gb | New revision
Edd The Duck.gb | New never-released game based on Baby T-rex
Eurosport XS Racing (Europe).gb | Never released
F1 Challenge (USA).gb | Never released
Fastest Lap (USA).gb | Previously un-dumped
Flappy Special (USA).gb | Never released in USA
G1 King - 3 Biki no Yosouya (Japan).gb | Never released
GB Slam Dunk (Japan).gb | Released as Slam Dunk instead
Gakkyuu Ou Yamazaki (Japan).gb | Previously un-dumped
Gameboy Gallery 2 (Japan).gb | Previously un-dumped
Garfield Labyrinth (USA).gb | This was released as The Real Ghostbusters in North America Instead
Gargoyle's Quest II - The Demon Darkness (Europe).gb |  Never released in Europe
Gargoyle's Quest II - The Demon Darkness (USA).gb |  Never released in USA
Golf King (Europe).gb | Never released
Golf Robot (USA).gb | Never released
Hammerin' Harry - Ghost Building Company (USA).gb | Never released in USA
Hello Kitty - PocketCamera (Japan).gb | Never released
Hello Kitty's Cube Frenzy (Europe).gb | Never released in Europe
Hexcite (Europe).gb |  Previously un-dumped
Home Alone 2 - Kevin's Dream (USA).gb | Never released
Hudson Hawk (Europe).gb | Never released in Europe
Hyper Lode Runner (Japan).gb | Previously un-dumped
Itchy & Scratchy - Miniature Golf Madness (USA).gb | Previously un-dumped
Jeep Jamboree (USA).gb | Previously un-dumped
John Madden (USA).gb | Never released
Jungle Strike (USA).gb | Previously un-dumped
KICK ATTACK (Japan).gb | Never released in Japan
Kaseki Reborn (Japan) (Rev 1).gb | 
Kawa no Nushi Tsuri 4 (Japan) (Rev 1).gb | New revision
Klustar (Japan).gb | Never released in Japan (USA and Europe only)
Konchuu Hakase 2 (Japan) (Rev 1).gb | New revision
LOPPI-KAN1 (Japan) (Rev 1).gb | ?
LOPPI-KAN2 (Japan) (Rev 1).gb | ?
LOPPI-KAN3 (Japan) (Rev 1).gb | ?
Legend of the Sea King GB (USA).gb | Never released in USA
Lunar Chase (USA).gb | Never released
Mini Putt (Europe).gb | Never released in Europe (Japan exclusive)
Mini Putt (USA).gb | Never released in USA (Japan exclusive)
Momoiro Zousan (Japan).gb | Never released
NBA In The Zone (USA).gb | Released for Game Boy Color
NFL Quarterback Club 96 (Japan).gb | Never released in Japan (USA and Europe only)
Nanonote (Japan) (Rev 1).gb | New revision
Nemesis (USA) (Rev 1).gb | New revision
Nick Faldo Championship Golf (USA).gb | Never released
Ninja Spirit (Europe).gb | Never released in Europe
Ninja Spirit (USA).gb | Never released in USA
One Piece - Maboroshi no Grand Line Boukenki! (Japan) (Rev 0).gb | New revision
One Piece - Maboroshi no Grand Line Boukenki! (Japan) (Rev 1).gb | New revision
Oni 4 - Kishin no Ketsuzoku (Japan) (Rev 1).gb | Previously un-dumped
POWERPAWS (USA) (P4X).gb | Released as Cat Trap
POWERPAWS (USA) (PMX).gb | Released as Cat Trap
Pac-Man (USA) (Rev 0).gb | New revision
Pac-in-Time (Europe) (Rev 1).gb | New revision
Palamedes (USA).gb | Never released in USA (Europe and Japan only)
Pang (Europe).gb | Previously un-dumped
Pocket Golf (USA).gb | Never released in USA (Japan exclusive)
Pokemon Picross (Japan).gb | Unreleased
Popeye (USA).gb | Never released in USA (Japan exclusive)
Prince of Persia (Japan).gb | Previously un-dumped
Pro Champ Fishing (Europe).gb | Never released in Europe
Puchi Carat (USA).gb | Never released in USA
Purikura Pocket 3 (Japan).gb | Previously un-dumped
Puzznic (USA).gb | Never released in USA (Japan exclusive)
R-Type II (Europe).gb | Previously un-dumped
Rap Quest (USA).gb | Never released
Robopon - Star Version (USA).gb | Never released
Robot Ponkottsu - Sun Version (Japan) (Rev 0 Sample).gb | Never released sample
Rockboard (Japan).gb | Never released
SINGER-2 (Europe) (En,Fr,Es,Pt).gb | Never released
SINGER-3 (Europe) (En,De,It,Nl).gb | Never released
Sei Hai Densetsu (Japan).gb | Previously un-dumped
Shanghai Pocket (Rev 0).gb | New revision
Shanghai Pocket (Rev 1).gb | New revision
Shikakui Atama wo Maruku Suru - Nanmon no Shou (Japan).gb | Never released
Space Date (USA).gb | Released as "Out of Gas" instead
Space Invaders (USA).gb | Previously un-dumped
Speedball 2 - Brutal Deluxe (Japan).gb | Previously un-dumped
Speedy Gonzales (Japan).gb | Released as Soreyuke! Speedy Gonzales  in Japan
Star Trek - The Next Generation (USA).gb | Previously un-dumped
Stargate (Japan).gb | Never released in Japan
Super James Pond (USA).gb | Never released in USA (Europe exclusive)
Survival Kids 2 - Dasshutsu!! Futago Shima! (Japan) (Rev 1).gb | New revision
Sutte Hakkun (Japan) (Rev 0).gb | Never released
Sutte Hakkun GB (Japan) (Rev 0).gb | Never released
Tale Spin (Europe) (Es).gb | Never released Spanish version
Teenage Mutant Hero Turtles III - Radical Rescue (USA) (Rev 1).gb | New revision
Teenage Mutant Ninja Turtles III - Radical Rescue (USA) (Rev 1).gb | New revision
Tesserae (USA).gb | Previously un-dumped
Test Drive 6 (USA) (Rev 1).gb | Released for Color Game Boy instead
The Adventures of Rocky and Bullwinkle (USA).gb | Previously un-dumped
The Flintstones - King Rock Treasure Island (Japan).gb | Never released in Japan
The Jetsons Robot Panic (USA) (Rev 0).gb | New revision
The Jetsons Robot Panic (USA) (Rev 1).gb | New revision
The Lawnmower Man (USA).gb | Never released in USA
The Little Mermaid (Europe) (Es).gb | Never released Spanish version
The Sword of Hope (USA).gb | Previously un-dumped
The XVII Olympic Winter Games - Lillehammer 1994 (USA) (Rev 1).gb | New revision
Triple Ace (USA).gb | Never released
Umi no Nushi Tsuri 2 (Japan).gb | Previously un-dumped
Wordhai (USA).gb | Never released
Wordtris (Europe) (De).gb | Never released in Germany
Wordtris (Europe) (En).gb | Never released in Europe
Wordtris (Europe) (Fr).gb | Never released in France
Workboy (USA).gb | Never released
World Cup Striker (Europe) (En,Fr,De).gb | Never released in Europe
World Ice Hockey (USA).gb | Never released in USA
ZAS (Europe).gb | Never released in Europe
Zool (Japan).gb | Never released in Japan


### Bloomland (DMGB7A-0.288)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Another fascinating discovery &#39;Philip &amp; Marlowe in Bloomland&#39;. Appears to be an English version of &#39;Taiyou no Tenshi Marlowe&#39; but lacks the cutscene at the start, but also is dated 1991 - This game eventually came out in 1994! <a href="https://t.co/oYzglvAPZW">pic.twitter.com/oYzglvAPZW</a></p>&mdash; Nintendo Metro (@NintendoMetro) <a href="https://twitter.com/NintendoMetro/status/1303674267142205440?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

### John Madden Football (DMGAJFE0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ubisoft&#39;s unreleased port of John Madden Football for the Game Boy has found its way online <a href="https://t.co/l51xnKbbBO">https://t.co/l51xnKbbBO</a> <a href="https://t.co/58QdHqHVWG">pic.twitter.com/58QdHqHVWG</a></p>&mdash; GoNintendoTweet (@GoNintendoTweet) <a href="https://twitter.com/GoNintendoTweet/status/1306321630516436993?ref_src=twsrc%5Etfw">September 16, 2020</a></blockquote>  

### Gargoyle's Quest II (DMGRFE-0.828)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&#39;Gargoyle&#39;s Quest II&#39; was released in the US on the NES. In Japan this was also released on the Game Boy, but didn&#39;t get an English release.<br><br>Except thanks to these new <a href="https://twitter.com/hashtag/NintendoLeaks?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeaks</a>.. the seeminly finished game is just here. In English. <a href="https://t.co/O4yZjmA4Gs">pic.twitter.com/O4yZjmA4Gs</a></p>&mdash; Nintendo Metro (@NintendoMetro) <a href="https://twitter.com/NintendoMetro/status/1303677933874110464?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

### Golf King (DMGBGRP0.2) & Golf Robot (DMGBGRE0.1)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">at some point this game was reworked into SuperShot Golf Robot, where Bobby is replaced with a robot called Vibot <a href="https://t.co/ZgCzJo6gTO">pic.twitter.com/ZgCzJo6gTO</a></p>&mdash; taizou 🏳️‍🌈🦁 (@taizou_hori) <a href="https://twitter.com/taizou_hori/status/1303881347941855232?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote>  

## Hello Kitty Pocket Camera (GBDHKAJ0.2)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hello Kitty Pocket Camera Game Boy (I never thought I&#39;d say those words and yet here we are..) Press and hold Start + Select while booting up to access an &quot;erase all Data&quot; screen, as in the original Game Boy / Pocket Camera. <a href="https://t.co/B9wlynjzMe">pic.twitter.com/B9wlynjzMe</a></p>&mdash; ‏Soul filing cabinets (@nensondubois_) <a href="https://twitter.com/nensondubois_/status/1304630259514355714?ref_src=twsrc%5Etfw">September 12, 2020</a></blockquote>  

### Home Alone 2 - Kevin's Dream (DMGV6E-0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here’s a Toys R Us Vidpro card for the Game Boy game Home Alone 2: Kevin’s Dream. This game was never released and I can barely find anything else about it <a href="https://t.co/9MjGWqHNzh">pic.twitter.com/9MjGWqHNzh</a></p>&mdash; N4Us (@TheN4Us) <a href="https://twitter.com/TheN4Us/status/1281017851814440962?ref_src=twsrc%5Etfw">July 9, 2020</a></blockquote>  

### Lunar Chase/X (DMGECE-0.477)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The game &#39;X&#39;, developed by Argonaut on the Game Boy as a 3D title, never made it to the states. With the new <a href="https://twitter.com/hashtag/NintendoLeaks?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeaks</a>, it appears this was intended to release as &#39;Lunar Chase&#39; at some point. <a href="https://twitter.com/dylancuthbert?ref_src=twsrc%5Etfw">@dylancuthbert</a> <a href="https://t.co/QfeLxC6hb9">pic.twitter.com/QfeLxC6hb9</a></p>&mdash; Nintendo Metro (@NintendoMetro) <a href="https://twitter.com/NintendoMetro/status/1303694957576740869?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

### Nick Faldo Championship Golf (DMGNFE-0.372)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&#39;Nick Faldo Championship Golf&#39; appears to be an unreleased 1991 Golf game for the Game Boy by Titus. <a href="https://twitter.com/hashtag/NintendoLeaks?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeaks</a> <a href="https://t.co/biarKEJjLT">pic.twitter.com/biarKEJjLT</a></p>&mdash; Nintendo Metro (@NintendoMetro) <a href="https://twitter.com/NintendoMetro/status/1303693075517120512?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

### Rap Quest (DMGRQE-0.547)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Checking out Rap Quest, an unreleased Game Boy game featuring Vanilla Ice <a href="https://t.co/HoDPMfhCPO">https://t.co/HoDPMfhCPO</a> <a href="https://t.co/NQfYIEtiIe">pic.twitter.com/NQfYIEtiIe</a></p>&mdash; GoNintendoTweet (@GoNintendoTweet) <a href="https://twitter.com/GoNintendoTweet/status/1057139448327081984?ref_src=twsrc%5Etfw">October 30, 2018</a></blockquote>  

### Robopon (DMGHRCE0.2)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve found another huge get in the leak!? This Robopon pre-release, raffled out in Comic BomBom to only 500 people! Unlike the final GBC version, it targets the Super Game Boy, and lacks the special cartridge.<br>With this… some revision of EVERY official GB(C) cart is preserved!!! <a href="https://t.co/G1SBoi5qgc">pic.twitter.com/G1SBoi5qgc</a></p>&mdash; Samuel 💻✨ Messner (@obskyr) <a href="https://twitter.com/obskyr/status/1305568495388618752?ref_src=twsrc%5Etfw">September 14, 2020</a></blockquote>  

### Sutte Hakkun (DMGASPJ0.2)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">both of the sutte hakkun protos from the leak have a neat SGB border.. huh. <a href="https://t.co/nZyEYcnaes">pic.twitter.com/nZyEYcnaes</a></p>&mdash; 🦦kuro!! (@kurobutt) <a href="https://twitter.com/kurobutt/status/1304973540823838726?ref_src=twsrc%5Etfw">September 13, 2020</a></blockquote>  


### WorkBoy (DMGWYE-0.781)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In today&#39;s <a href="https://twitter.com/hashtag/NintendoLeak?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeak</a> there is also the GB ROM of the WorkBoy, a never-released peripheral!!!<br><br>More info: <a href="https://t.co/dJAXlqQFkR">https://t.co/dJAXlqQFkR</a> <a href="https://t.co/kyfvRFOecd">pic.twitter.com/kyfvRFOecd</a></p>&mdash; WaluigiBSOD (@WaluigiBSOD) <a href="https://twitter.com/WaluigiBSOD/status/1303689931143835649?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

### RockBoard (DMGVOJ-0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">News: Unreleased RockBoard Game Boy Port Discovered<a href="https://t.co/6C9WmhkBOA">https://t.co/6C9WmhkBOA</a> <a href="https://t.co/UXizG2448p">pic.twitter.com/UXizG2448p</a></p>&mdash; Brian (@Protodude) <a href="https://twitter.com/Protodude/status/1303703176281980928?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

---
## Un-released Game Boy Color ROMS


### All Un-released GBC ROMS
The table below contains all the previously unreleased ROMS for the original Game Boy (DMG). 

The table was generated from a file called `newroms.7z` was was released after the main leak.

Name | Description
---|---
3D Pool Allstars (U).gbc | 
AMF Bowling (U).gbc | Cancelled Game
Absoloute X (EU).gbc | Cancelled Game [^2]
Austin Powers Episode III (EU).gbc | Cancelled Game
Austin Powers Episode IV (EU).gbc | Cancelled Game
Billard Club (J).gbc | Cancelled Game [^3]
Blue's Clues - Blue's Alphabet Book (U).gbc | Previously un-dumped
Bomberman Selection (K) (Rev 1).gbc | Previously un-dumped
Bomberman Selection (K).gbc | Previously un-dumped
Bounced! (EU).gbc | Cancelled Game [^4]
Card Captors Sakura (J).gbc | 
Carmageddon (U).gbc | 
Carmageddon TDR 2000 (EU).gbc | Cancelled Game
Carnivale (U).gbc | Cancelled Game [^5]
Carrera (EU).gbc | Cancelled Game
Casper (U).gbc | 
Catwoman (J).gbc | Never released in Japan
Daikatana (U).gbc | Never released in North America
David Beckham Soccer (U).gbc | Never released in North America
Denki Blocks (U).gbc | Never released in North America
Di Gi Charat (J).gbc | Cancelled Game
Donkey Kong Country (U).gbc | 
E.T The Extraterrestrial (EU).gbc | Cancelled Game
Equestriad 2001 (EU).gbc | Cancelled Game
F-18 Thunder Strike (U).gbc | Never released in North America
F1 Racing Championship (U).gbc | Never released in North America
F1 World Grand Prix (J) (Rev 1).gbc | Never released in Japan
F1 World Grand Prix (J).gbc | Never released in Japan
Formula One 2000 (EU).gbc | Never released in EU
Gameboy Wars III (J).gbc | 
Ganso! Doubutsu uranai (J).gbc | Cancelled Game
Gift (EU).gbc | Never released in EU
Gifty (GER).gbc | Never released in Germany
Gimmick Land (J).gbc | Cancelled Game
Grand Casino (J).gbc | Cancelled Game
Hajimari no Mori (J).gbc | Cancelled Game
Hello Kitty Pocket Camera (J).gb | Cancelled Game
Heroes of Might & Magic (U).gbc | 
Hydro Cross (U).gbc | Cancelled Game
Jeremny McGarth Supercross 2000 (J).gbc | Never released in Japan
Jibaku Kun Twelve World Story (J).gbc | Cancelled Game
Jimmy White's Cueball (U).gbc | Never released in North America
Jissen no Yakudatsu Tsumego (J).gbc | 
Kanji Boy 3 (J).gbc | 
Kanji Shishuu (J).gbc | Cancelled Game
Kirby Family (J).gbc | Cancelled Game (Sewing Patterns)
Komugi-Chan no Cake o Tsukurou! (J) (Rev 1).gbc | Cancelled Game
Komugi-Chan no Cake o Tsukurou! (J).gbc | Cancelled Game
Lemmings (EU).gbc | Never released in EU
MBC3 Test ROM 16M Model.gb | Internal Only Tool
MBC5 Tester Ver7.08 (16m).gb | Internal Only Tool
MBC5 Tester Ver7.08 (2m).gb | Internal Only Tool
MBC5 Tester Ver7.08 (32m).gb | Internal Only Tool
MBC5 Tester Ver7.08 (4m).gb | Internal Only Tool
MBC5 Tester Ver7.08 (64m).gb | Internal Only Tool
MBC5 Tester Ver7.08 (8m).gb | Internal Only Tool
MBC5 Tester Ver99.6 (1m).gb | Internal Only Tool
Magi-Nation Keeper's Quest (U).gbc | Cancelled Game
Max Steel (U).gbc | Cancelled Game
Mission Bravo (U).gbc | Cancelled Game
Mission Impossible (EU).gbc | Previously not dumped
Monster Traveler (J).gbc | Previously not dumped
Mystery Dungeon Shiren the Wanderer GB2- Sabaku no Majou (J).gbc |  Previously un-dumped
NBA Show Time (U).gbc | 
Playmobil Laura (EU) (Rev 1).gbc | Never released in EU
Playmobil Laura (EU).gbc | Never released in EU
Pocket GT (U).gbc | Cancelled Game
Pocket Music (U).gbc | 
Primera División Stars 2001 (SP).gbc | Never Released in Spain
Pro Pool (U).gbc | 
Qix Adventure (U).gbc | Never released in North America
RPG Tsukuru GB (J).gbc |  Previously un-dumped
Runelords (U).gbc | Cancelled Game
Shin Megami Tensei- Devil Children (J).gbc |  Previously un-dumped
Space-Net Cosmo Neo (J).gbc |  Previously un-dumped
Spy vs. Spy (EU).gbc | Never released in EU
Spy vs. Spy (U).gbc |  Previously un-dumped
Street Fighter Alpha - Warriors Dreams (EU).gbc | Never Released in EU
Suzuki Alstare Extreme Racing (U).gbc | Never Released in North America
Swing (EU).gbc |  Previously un-dumped
Sylva 2 (J).gbc | Cancelled Game
Taxi 2 (EU).gbc |  Previously un-dumped
The Little Mermaid II- Pinball Frenzy (J).gbc | 
The New Adams Family (EU).gbc | 
The Powerpuff Girls- Bad Mojo Jojo (IT).gbc | Never Released in Italy
The Powerpuff Girls- Bad Mojo Jojo (UK).gbc | Never Released in UK
The Powerpuff Girls- Paint the Townsville Green (UK).gbc | Never Released in UK
Tiny Toon Adventures- Dizzy's Candy Quest (U).gbc | Never Released in North America
Tonka Construction Zone (U).gbc |  Previously un-dumped
Tony Hawk's Pro Skater (J).gbc | Never released in Japan
Top Gear Pocket 2 (J).gbc | Never released in Japan
Top Gear Pocket 2 (U).gbc |  Previously un-dumped
Towers II- Plight of the Stargazer (U).gbc | Cancelled Game
VR Sports Powerboat Racing (U).gbc | Cancelled Game
Vegas Games (U).gbc |  Previously un-dumped
Watashi no Restaurant (J) (Rev 1).gbc |  Previously un-dumped
Watashi no Restaurant (J) (Rev 2).gbc |  Previously un-dumped
Watashi no Restaurant (J).gbc |  Previously un-dumped
Wendy Der Traum Yon Arizona (GER).gbc |  Previously un-dumped
Xtreme Wheels (J).gbc | Never released in Japan
Yakouchuu GB (J).gbc | 
Yu-Gi-Oh (EU).gbc | Never released in EU
Yu-Gi-Oh (FR).gbc | Never released in France

### Austin Powers Episode 3 (CGBBA3P0.3) & 4 (CGBBA4P0.0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">gamers, the motherlode has been found in this latest nintendo leak: TWO unreleased game boy color austin powers games <a href="https://t.co/QdAYa9dhBx">pic.twitter.com/QdAYa9dhBx</a></p>&mdash; The Ordinary Nintendo (@sebmal) <a href="https://twitter.com/sebmal/status/1303828713776148482?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  


### Gimmick Land/Tomato Adventure (KENSA\CGBBAKJ0.0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gimmick Land/Tomato Adventure for the GBC!<br>It looks AMAZING!! <a href="https://t.co/HKHNAKDKFK">pic.twitter.com/HKHNAKDKFK</a></p>&mdash; toruzz (@toruzz) <a href="https://twitter.com/toruzz/status/1303678395990056960?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

## Hajimari no Mori (CGBAHJJ0.1)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Game Boy Bunko: Hajimari no Mori (Game Boy Pocket Books: The Forest of Beginnings) is an unannounced first party game for the GBC found in the recent leaks. It&#39;s apparently a version of Famicom Bunko: Hajimari no Mori, a Super Famicom game.<br>It looks incredible. <a href="https://t.co/tjBAp7qekp">pic.twitter.com/tjBAp7qekp</a></p>&mdash; toruzz (@toruzz) <a href="https://twitter.com/toruzz/status/1303709388222484481?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  


## Kanji Shishuu / Kanji Embroidery (CGBBKBJ0.0)
<iframe width="560" height="315" src="https://www.youtube.com/embed/YMtm_MnSDAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Kirby Family (CGBBJVJ0.0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">[Bonus Posts !]<br>Today, a new Nintendo leaks happened, and it contained the unreleased (JPN only AD-ON/games) &quot;Kirby Family&quot; for the GBC ! which was planned to be released in September 2001 !<br><br>So, today we can say that it&#39;s the day this game was released (discovered) in the world! <a href="https://t.co/TF2nr6tMPm">pic.twitter.com/TF2nr6tMPm</a></p>&mdash; Kirby Birthday ! 🎉 (@KirbyBirthday) <a href="https://twitter.com/KirbyBirthday/status/1303692286459600900?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote>  

## Pokémon Picross (DMGAKVJ0.1)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Canceled Pokémon Picross Game Boy Color Game Surfaces In Nintendo Leak <a href="https://t.co/A8QS7LTEno">https://t.co/A8QS7LTEno</a></p>&mdash; ⭐ yyoossk⭐ (@Cloud0835) <a href="https://twitter.com/Cloud0835/status/1304067589400702977?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote>  

---
# Nintendo DSi
While not quite a Lot Check release, you might also be interested in the **DSiWareROM.rar** archive from the Platinum leak as it contains a ton of DSiWare ROMS in **TAD** format. 

These were sent to iQue for localisation for the Chinese market and were presumably taken from the Lot Check archive by Nintendo SPD.

{% include link-to-other-post.html post="/dsiwareleak" description="For more information on the files inside the DsiWare archive check out this post." %}

---
# References
[^1]: [Nintendo "Gigaleak" - nesdev.com](http://forums.nesdev.com/viewtopic.php?f=5&p=253657)
[^2]: [NESWORLD.COM - MIDAS ATTEMPT TO ENTER THE GAMEBOY MARKET](http://www.nesworld.com/gbc-midas.php)
[^3]: [Billard Club for Game Boy Color - GameFAQs](https://gamefaqs.gamespot.com/gbc/565800-billard-club)
[^4]: [Bounced - The Cutting Room Floor](https://tcrf.net/Bounced)
[^5]: [Carnivale for Game Boy Color - GameFAQs](https://gamefaqs.gamespot.com/gbc/915800-carnivale)
[^6]: [Baby's Day Out The Lost Media Wiki](https://lostmediawiki.com/Baby%27s_Day_Out_(partially_lost_builds_of_cancelled_movie_tie-in_video_games;_1994) )
[^7]: [Bobby's World (Game Boy) - The Cutting Room Floor](https://tcrf.net/Bobby%27s_World_(Game_Boy))
[^8]: [mame/famicom_flop.xml at master mamedev/mame GitHub](https://github.com/mamedev/mame/blob/master/hash/famicom_flop.xml)
