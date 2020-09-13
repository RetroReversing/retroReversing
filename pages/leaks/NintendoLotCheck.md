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
updatedAt: '2020-09-13'
twitterimage: https://www.retroreversing.com/public/images/leaks/Nintendo Lot Check.jpg
---

<section class="postSection">
    <img src="/public/images/leaks/Nintendo Lot Check.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
Since Nintendo controls manufacturing of all official games they have a process called **Lot Check** that ensures the games quality before manufacturing. Every game ever officially released for their platform has had to go through the Lot Check process in order to achieve the Nintendo Seal of Quality.
 </div>
</section> 


# Lot Check Lists
In the Pokemon Leak on the 4th of September 2020 a bunch of excel spreadsheets were uploaded into the `/misc` folder, these contained the full list of all games that have gone through the Nintendo Lot Check process for most systems up until the Nintendo DS.

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
S-ROY_data.xls  | ??? Possibly Arcade boards based on SNES hardware
SHNP_data.xls   | SNES Lot Check
TWL-DW_data.xls | DSiware lot Check
TWL-Hyb_data.xls   | Nintendo DS? lot Check
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

### New Revision ROMS
All computer programs have bugs, and NES games are no different, in some cases there were new patched versions of a game released with a higher revision number. A few of these never got physically manufactured such as [^1]:
* Bridgestone Cycle: Radac Tailor-made (Japan)
* Dragon Slayer Jr.: Romancia (Japan)
* Family Computer Othello (Japan)
* Nintendo World Cup (North America)
* Roger Clemens' MVP Baseball (North America)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I cross-referenced the NES bank dumps from today&#39;s leaks, against the known collection of NES roms (No-Intro 2017-06-18). Looks like there&#39;s a few previously unknown roms, including a second revision of the Nintendo World Championship cart! <a href="https://t.co/tFol8CxyLH">pic.twitter.com/tFol8CxyLH</a></p>&mdash; ラ0.F (@MrCheeze_) <a href="https://twitter.com/MrCheeze_/status/1286867151199055873?ref_src=twsrc%5Etfw">July 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">the mystery roms have been discovered <a href="https://t.co/tY5sH5yfeq">pic.twitter.com/tY5sH5yfeq</a></p>&mdash; I..A..N..S (@IANSYT) <a href="https://twitter.com/IANSYT/status/1287615989304131584?ref_src=twsrc%5Etfw">July 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

# Game Boy (DMG & GBC) Lot Check
The Game Boy Lot check including both original and Color games was released to the public on the 9th of September as part of the Platinum Leak.

## Un-released Game Boy ROMS
As the Nintendo Lot Check process is only done during the final stages of development, don't expect any beta or prototype games to be here. 

However there is an occasional game that made it all the way to Lot Check phase but was then deemed too costly to physically manufacture. It is these games that make the Lot Check leak worthwhile. Unlike the NES Lot Check Leak, for the Game Boy there was a plethora of previously un-released games in the Lot Check set!

### WorkBoy
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In today&#39;s <a href="https://twitter.com/hashtag/NintendoLeak?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoLeak</a> there is also the GB ROM of the WorkBoy, a never-released peripheral!!!<br><br>More info: <a href="https://t.co/dJAXlqQFkR">https://t.co/dJAXlqQFkR</a> <a href="https://t.co/kyfvRFOecd">pic.twitter.com/kyfvRFOecd</a></p>&mdash; WaluigiBSOD (@WaluigiBSOD) <a href="https://twitter.com/WaluigiBSOD/status/1303689931143835649?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Austin Powers Episode 3 & 4
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">gamers, the motherlode has been found in this latest nintendo leak: TWO unreleased game boy color austin powers games <a href="https://t.co/QdAYa9dhBx">pic.twitter.com/QdAYa9dhBx</a></p>&mdash; The Ordinary Nintendo (@sebmal) <a href="https://twitter.com/sebmal/status/1303828713776148482?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Kirby Family
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">[Bonus Posts !]<br>Today, a new Nintendo leaks happened, and it contained the unreleased (JPN only AD-ON/games) &quot;Kirby Family&quot; for the GBC ! which was planned to be released in September 2001 !<br><br>So, today we can say that it&#39;s the day this game was released (discovered) in the world! <a href="https://t.co/TF2nr6tMPm">pic.twitter.com/TF2nr6tMPm</a></p>&mdash; Kirby Birthday ! 🎉 (@KirbyBirthday) <a href="https://twitter.com/KirbyBirthday/status/1303692286459600900?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Gimmick Land/Tomato Adventure (\platinum\dmg_sgb\DMG\KENSA\CGBBAKJ0.0)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gimmick Land/Tomato Adventure for the GBC!<br>It looks AMAZING!! <a href="https://t.co/HKHNAKDKFK">pic.twitter.com/HKHNAKDKFK</a></p>&mdash; toruzz (@toruzz) <a href="https://twitter.com/toruzz/status/1303678395990056960?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## RockBoard
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">News: Unreleased RockBoard Game Boy Port Discovered<a href="https://t.co/6C9WmhkBOA">https://t.co/6C9WmhkBOA</a> <a href="https://t.co/UXizG2448p">pic.twitter.com/UXizG2448p</a></p>&mdash; Brian (@Protodude) <a href="https://twitter.com/Protodude/status/1303703176281980928?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Pokémon Picross (DMGAKVJ0.1)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Canceled Pokémon Picross Game Boy Color Game Surfaces In Nintendo Leak <a href="https://t.co/A8QS7LTEno">https://t.co/A8QS7LTEno</a></p>&mdash; ⭐ yyoossk⭐ (@Cloud0835) <a href="https://twitter.com/Cloud0835/status/1304067589400702977?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# References
[^1]: [Nintendo "Gigaleak" - nesdev.com](http://forums.nesdev.com/viewtopic.php?f=5&p=253657)
