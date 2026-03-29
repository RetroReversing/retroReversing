---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Gigaleak - SNES Source Code Leak 
category: leak
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
recommend: 
 - snes
 - leak
 - sourcecode
editlink: /leaks/Gigaleak.md
updatedAt: '2026-03-29'
twitterimage: https://www.retroreversing.com/public/N64/Gigaleak.jpg
---

On 24 July 2020, a large Nintendo archive was uploaded online and quickly became known as the `Gigaleak`.
It was not one single neat source drop.
It was a mixed archive of ROMs, source trees, boot ROM repositories, internal tools, and later CVS/Subversion backups.


## Uploaded Files

These were the archive files uploaded on 4chan /g/ on 24 July 2020, the day the Gigaleak was leaked:
* **other.7z** - The broadest archive, containing DMG, CGB, SFC, lot-check, and boot ROM material
* **agb_bootrom_trunk.zip** - Extracted latest trunk snapshot of the AGB boot ROM repository
* **cgb_bootrom_trunk.zip** - Extracted latest trunk snapshot of the CGB boot ROM repository
* **pokemon-checkout.7z** - Pokemon-related source/material
* **netcard.7z** - Material for a cancelled Game Boy Advance peripheral
* **20100713cvs_backup.tar.7z** - CVS repository backup with later Nintendo projects

This page will cover each of these files, linking out to specific posts for each to dive into the details.

The next day its sequel, often called **Gigaleak 2**, followed with much more Nintendo 64 material.

---
# Other (other.7z)
The archive mysteriously named **other.7z** is one of the most interesting parts of the leak because it mixes game source trees with internal repositories and support material.

It contains these major sub-archives:
* **agb_bootrom.zip**  - Subversion repositories for both the Game Boy Advance and Game Boy Color boot ROM projects
* **CGB.7z** - Game Boy Color Source Code for Zelda and a build of Hamtaro 2
* **dmg.7z** - Original Game Boy Source Code for Zelda
* **Famicom_NES.7z** - Full set of official JP/USA Famicom/NES ROMS (Lot Check)
* **NEWS.7z** - A smaller archive with SFC-adjacent material and logs
* **SFC.7z** - SNES Source Code

---
## Boot ROM Repositories (other/agb_bootrom)
The `other/agb_bootrom` folder is much richer than the filename suggests.
On disk it survives as two full Subversion repositories, one for `agb_bootrom` and one for `cgb_bootrom`, complete with revision history, `trunk/branches/tags`, and surrounding build material.

{% include link-to-other-post.html post="/game-boy-boot-rom-repositories/" description="For the full breakdown of the AGB and CGB boot ROM repositories, including the SVN history and trunk contents, check out this post." %}

## Original Game Boy Source Code for The Legend of Zelda Links Awakening (dmg.7z)
The archive **dmg.7z** contains the source code for the original version of The Legend of Zelda Links Awakening.

{% include link-to-other-post.html post="/zelda-links-awakening" description="For more information check out this post." %}

---
## Game Boy Color Source Code for The Legend of Zelda Links Awakening DX (CGB.7z)
The archive **CGB.7z** contains the source code for the Game Boy Color game The Legend of Zelda Links Awakening DX and pre-build ROM images of Hamtaro 2.

{% include link-to-other-post.html post="/zelda-links-awakening-dx" description="For more information check out this post." %}

---
## Famicom (NES) Lot Check ROMS (Famicom_NES.7z)
We have a post covering the Full set of official JP/USA Famicom/NES ROMS released in the **Famicom_NES.7z** archive along with other LotCheck releases:

{% include link-to-other-post.html post="/nintendo-lot-check" description="For more information on the Famicom Lot Check ROMS check out this post." %}

---
## Super Nintendo Source Code (SFC.7z)
Contains the Source code for a number of Super Famicom (SNES) titles:
* StarFox 1 & 2
* Yoshi's Island (ヨッシーアイランド)
* Legend of Zelda - LTTP (ゼルダの伝説神々のトライフォース)
* Super Mario Kart
* Stunt Race FX (ワイルドトラックス)
* F-Zero
* Super Mario All-Stars (マリオコレクション)

### F-Zero Source Code
We have a post specifically about the **F-Zero** source code leaked in **SFC.7z** here:
{% include link-to-other-post.html post="/f-zero-source-code" description="For more information on the F-Zero Source Code check out this post." %}

---
# Gameboy Color Boot ROM (cgb_bootrom_trunk.zip)
The `cgb_bootrom_trunk.zip` archive is best understood as an exported working copy from the `cgb_bootrom` Subversion repository preserved inside `other/agb_bootrom`.

{% include link-to-other-post.html post="/game-boy-boot-rom-repositories/" description="For the repository layout, revision history, and surviving CGB trunk files, check out this post." %}

---
# Game Boy Advance Boot ROM (agb_bootrom_trunk.zip)
The `agb_bootrom_trunk.zip` archive is the extracted latest working copy from the much larger `agb_bootrom` Subversion repository found inside `other/agb_bootrom`.

{% include link-to-other-post.html post="/game-boy-boot-rom-repositories/" description="For the wider AGB repository contents, including the monitor code, include files, libraries, docs, and later tools like AgbComp and Bmp2Agb, check out this post." %}

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
