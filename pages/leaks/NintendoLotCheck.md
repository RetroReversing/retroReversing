---
layout: post
tags: 
- leak
- nes
title: Nintendo Lot Check ROM Leak 
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/NintendoLotCheck.jpg
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
twitterimage: https://www.retroreversing.com/public/N64/NintendoLotCheck.jpg
---

Since Nintendo controls manufacturing of all official games they have a process called **Lot Check** that ensures the games quality before manufacturing. Every game ever officially released for their platform has had to go through the Lot Check process in order to achieve the Nintendo Seal of Quality.

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

## Un-released ROMS
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

---

# Game Boy (DMG & GBC) Lot Check
The Game Boy Lot check including both original and Color games was released to the public on the 9th of September as part of the Platinum Leak.

# References
[^1]: [Nintendo "Gigaleak" - nesdev.com](http://forums.nesdev.com/viewtopic.php?f=5&p=253657)
