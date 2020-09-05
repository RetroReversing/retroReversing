---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Gigaleak - SNES Source Code Leak 
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/snes/Gigaleak.jpg
twitterimage: http://www.retroreversing.com/public/images/snes/Gigaleak.jpg
permalink: /gigaleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - SNES Source Code Leak 
    url: #
recommend: snes
editlink: /leaks/Gigaleak.md
updatedAt: '2020-09-03'
twitterimage: https://www.retroreversing.com/public/N64/Gigaleak.jpg
---

On the 24th of July 2020, the mother-load (2GB) was uploaded to a thread on 4chan and was dubbed the  `Gigaleak`. This is a continuation of the leaks that were obtained from a iQue/BroadOn/Routefree hack earlier in the year. 

The next day its sequel Gigaleak 2 was released with tons of Nintendo 64 content.

---
# Uploaded Files

Files Leaked:
* **20100713cvs_backup.tar.7z** - CVS Repo Dump of projects such as ensata
* **netcard.7z** - Game Boy Advance Peripheral
* **cgb_bootrom_trunk.zip** - Game Boy Color Boot ROM
* **pokemon-checkout.7z**
* **agb_bootrom_trunk.zip** - Game Boy Advance Boot ROM
* **other.7z** - Source code for DMG, GBC, SNES games

---
# Other (other.7z)
The archive mysteriously named **other.7z** actually contains a bunch of sub-archives which are:
* agb_bootrom.zip  - SVN repository for both GBA and GBC Boot ROMs
* CGB.7z - Game Boy Color Source Code
* dmg.7z - Original Game Boy Source Code 
* Famicom_NES.7z - Full set of official JP/USA Famicom/NES ROMS
* NEWS.7z - Not sure what this is, but contains a subset of SFC plus log files, some sort of Backup program?
* SFC.7z - SNES Source Code

## Original Game Boy Source Code (dmg.7z)
Contains the source code for the original version of The Legend of Zelda Links Awakening.

## Game Boy Color Source Code (CGB.7z)
Contains the source code for two games:
* The Legend of Zelda: Links Awakening DX - (AZL__ゼルダの伝説 夢を見る島DX)
* Hamtaro 2

## Super Nintendo Source Code (SFC.7z)
Contains the Source code for a number of Super Famicom (SNES) titles:
* StarFox 1 & 2
* Yoshi's Island (ヨッシーアイランド)
* Legend of Zelda - LTTP (ゼルダの伝説神々のトライフォース)
* Super Mario Kart
* Stunt Race FX (ワイルドトラックス)
* F-Zero
* Super Mario All-Stars (マリオコレクション)

---
# Gameboy Color Boot ROM (cgb_bootrom_trunk)
In the **cgb_bootrom_trunk.zip** archive you get a dump of the latest development version of the Game Boy Color Boot ROM, extracted from the SVN repository found in the `other.7z/agb_bootrom.zip` archive.

---
# Game Boy Advance Boot ROM (agb_bootrom_trunk)
In the **agb_bootrom_trunk.zip** archive you get a dump of the latest development version of the Game Boy Advance Boot ROM, extracted from the SVN repository found in the `other.7z/agb_bootrom.zip` archive.

---
# Netcard (cancelled GBA peripheral)
In the **netcard.7z** archive

---
#  CVS Repository Dump (20100713cvs_backup.tar.7z)
The CVS Repository dump is from the 20th of October 2007 and mainly contains projects related to the WII Virtual console, such as emulators for Game Boy and DS, along with a few other small projects by individual developers.

## Checking out the latest version

### Step 1 - Extracting the tar
The first step after extracting the 7Zip file to to extract the tar archive, you can do this like so:
```bash
tar -xvf 20100713cvs_backup.tar
```

### Step 2 - Installing CVS and checking out files
You will need to first have the CVS command line utilities installed if you haven't already then you can install like so:
* Mac OSX: `brew install cvs`
* Ubuntu Linux: `apt-get install cvs`

Now run the command in a folder that you want to extract the files:
```bash
cvs -d ~/extract_path/usr/local/cvsrepo/ensata checkout .
```
Note that the path has to be the FULL absolute path or it will complain about not being able to find the host.

It is a very large repository so expect it to take a while to complete.

---
## Ensata (DS Emulator)


---
## imatake
This folder contains two projects by someone known as Imatake who presumably worked at Nintendo 13 years ago (2007). One is a disassembler for original Game Boy ROMs and the other is a tool to support Korean Hangul characters in the Pokemon Font.

### dmgdasm
This is a disassembler for Original DMG Game boy ROMs written in C++, presumably used to test the Virtual Console Game Boy emulator in the **turnout** folder.

### dpk_fontconv (Hangul Korean Font Converter)
This is a font converter used to generate the Pokemon front for the Korean writing system known as Hangul.

---
## muratest
This seems to be a bunch of test projects setup by Teruki Murakawa for Gamecube development.

## noriproj (Misc Tools)
Not sure why this folder is called **noriproj** but it contains two pretty unrelated projects, one is a C# tool to generate a wallpaper based on a password and the other is a tool to upload .WAD files to the Wii Shop (written in PHP).

### WallPaperPasswordMaker
This is a tool that was used in Japan to give trainers special Box Wallpapers, presumably this was used at Pokemon events.

It generates 4 passwords for a user based on a word list with an algorithm that takes into account the trainer ID and whatever wallpaper the user wants for their Box.

There is an unofficial version available on PokeWiki.de here: 
[Secret Code Generator - PokéWiki](https://www.pokewiki.de/Spezial:Geheimcode-Generator?uselang=en)

### Virtual Console Uploader (vc)
This is a PHP project that makes it easy for the user to upload WAD files to the Wii eShop and Virtual Console.

---
## turnout (Game Boy emulator for Wii VC)
The turnout folder contains a Game Boy emulator for the Wii, presumably used for the Virtual Console Game boy titles. 

---
## pokemon

---
# References
[^1]: [Massive Nintendo "Gigaleak" Surfaces With ROMs, Canceled Games, and Much More Switcher.gg](https://switcher.gg/s/news/massive-nintendo-gigaleak-surfaces-with-roms-canceled-games-and-much-more/)
