---
layout: post
tags: 
- leak
- ps1
title: Capcom Leaks  
thumbnail: /public/consoles/Sony Playstation.png
image: /public/images/leaks/Capcom Leaks.jpg
permalink: /capcomleaks
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Capcom Leaks
    url: #
recommend: 
- leak
- ps1
redirect_from:
  - /capcom
editlink: /leaks/CapcomLeaks.md
twitterimage: https://www.retroreversing.com/public/images/leaks/Capcom Leaks.jpg
updatedAt: '2020-11-17'
---

On 1st November 2020 CAPCOM was targeted by known hacker group **RagnarLeaks** and some source code and private data was leaked to the dark web. This post will only cover source code that was found in the leak, we only support the preservation of old playstation source code.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Information on the RAGNAR malware, that was responsible for compromising Capcom&#39;s servers:<a href="https://t.co/oZDDbKMQNz">https://t.co/oZDDbKMQNz</a></p>&mdash; /PPG/ (@pokeprotos) <a href="https://twitter.com/pokeprotos/status/1328454646847787008?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote>

# Files leaked
There were four archives leaked, and due to size were split into multiple 7Zip parts.
1. **CAPCOMinr1.7z** - No source code (please avoid downloading if you see this file uploaded)
2. **CAPCOMPart2ID.7z** - Umbrella Chronicles source code (21.1GB in 3 parts)
3.  **Capcom3ID451.7z** - Devil May Cry 2 Source code ( 11.2GB in 2 parts)
4. **CAPCOM4_ID442.7z** - The Misadventures of Tron Bonne PS1 source code (1.38GB)

---

# Resident Evil Umbrella Chronicles
When the archives have been extracted it creates a folder called **Wii_バイオハザード アンブレラクロニクルズ** which translates roughly to **Wii_ Biohazard Umbrella Chronicles**. Biohazard is the Japanese name for Resident Evil.

The source code for Resident Evil Umbrella Chronicles has many empty folders inside it, it is unclear why this is the case, they could have been removed due to space constraints or maybe a copy job was only part way through before it was stopped. 

The empty folders will be listed here with their translations just to make you aware of what may have been contained within at some point in time.

The way the files are laid out suggest that this was stored on some sort of external hard drive due to the inclusion of $RECYCLE.BIN and **System Volume Information** folders.

Folders at the top Level are:
* $RECYCLE.BIN - created by Windows OS to hold deleted items (Empty folder)
* Recycled - Unsure of purpose but empty
* System Volume Information - contains empty restore folders, probably due to unexpected hard drive disconnect causing corrupted files
* UC使用フォント - UC fonts used
* bioUCリビルド手順 - build environment tutorial
* design - design documents for the game (level layouts etc)
* サウンド - Sound (Empty folder structure)
* バイオ納品 - Bio delivery (Source code folder structure)
* 企画 - Planning (Empty folder structure)
* 韓国版 - Korean version

## UC fonts used (/UC使用フォント)
As expected by the name this folder contains fonts used in the development of the game i TTF and TTC formats.

It is unclear if these were just used for the game box and manual or if they were also converted to textures for inside the game too.

The fonts included in this folder are:
* CHELSEXR.TTF - Chelsey Extended
* COMMAEXR.TTF - Commador Extended
* DF-ReiSho-W6.ttc - Collection of fonts
* EGGOWN__.TTF - Eggo Wide
* MLSAX.TTF - Prestige
* MLSGW.TTF - Architect
* VOGEB___.TTF - Vogel
* WKWCHJO.TTF - WKWChongjo

---
##  UC build procedure (/bioUCリビルド手順)
This folder contains a tutorial for how to setup a development environment, including Wii SDK, CodeWarrior and CRI SDK for building the source code to Resident Evil Umbrella Chronicles!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Got to hand it to them, the developers of Resident Evil Umbrella Chronicles had good documentation for how to get setup with the codebase. Including installing the Wii SDK, CodeWarrior and the CRI SDK Nice job! <a href="https://twitter.com/hashtag/capcomleaks?src=hash&amp;ref_src=twsrc%5Etfw">#capcomleaks</a> <a href="https://twitter.com/hashtag/capcom?src=hash&amp;ref_src=twsrc%5Etfw">#capcom</a> <a href="https://twitter.com/hashtag/wii?src=hash&amp;ref_src=twsrc%5Etfw">#wii</a> <a href="https://t.co/ntSm1fp4dz">pic.twitter.com/ntSm1fp4dz</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1329108788918558720?ref_src=twsrc%5Etfw">November 18, 2020</a></blockquote> 

---
## Design documents (/design)
The design folder contains a bunch of game design document for Umbrella Chronicles!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Game Designers at CAPCOM made some excellent documents for Umbrella Chronicles on the Nintendo Wii! <a href="https://twitter.com/hashtag/capcomleaks?src=hash&amp;ref_src=twsrc%5Etfw">#capcomleaks</a> <a href="https://twitter.com/hashtag/capcom?src=hash&amp;ref_src=twsrc%5Etfw">#capcom</a> <a href="https://twitter.com/hashtag/wii?src=hash&amp;ref_src=twsrc%5Etfw">#wii</a> <a href="https://twitter.com/hashtag/ResidentEvil?src=hash&amp;ref_src=twsrc%5Etfw">#ResidentEvil</a> <a href="https://t.co/GYcj4ItoxD">pic.twitter.com/GYcj4ItoxD</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1329126809473081349?ref_src=twsrc%5Etfw">November 18, 2020</a></blockquote>

---
##  Source Code & Tools (/バイオ納品 and /韓国版/バイオ納品)
The folder name roughly translates to **Bio Deliverables** and should contain the source code and tools developed for the game. 

However there is one important point about this folder, it is located in two places in the leak, one is mainly just the empty folder structure and the other is the real deal. 

The strange thing is the one with the actual content is actually in the Korean version folder (**/韓国版/バイオ納品**).

In the root version it is mainly an empty folder structure but the **buildtool** does contain some files.

### Files only in the Root version  (/バイオ納品)
There are a few files that are only located in the **/バイオ納品** folder despite the majority of it being an empty folder structure. They are all located in `/バイオ納品/buildtool/buildtool/` and have the following folders:
* CRI_SDK - CRI Middleware SDK
* CodeWarrior - CodeWarrior + Plugins + License
* DevelopmentTools - Wii Development tools
* MasteringTools - Tools for Wii game publishing
* NintendoWareForRevolution - NintendoWare tools and runtime libraries for Wii
* RevolutionSDK - Wii SDK

These are all official software development kit files from Nintendo and CRIware used in many 1st & 3rd party Wii games.

Since these are not Capcom specific they will be covered in a future post.

---
# Devil May Cry 2 Source code (Capcom3ID451.7z)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A backup of a disk containing DMC2 code was found in the leak. <br><br>Original is probably in cold storage, sitting at some undisclosed location.<br><br>The disk contains all software and data needed to compile and run the game. <a href="https://t.co/AVd17xjJvc">pic.twitter.com/AVd17xjJvc</a></p>&mdash; /PPG/ (@pokeprotos) <a href="https://twitter.com/pokeprotos/status/1328189538326388736?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote> 

---
# The Misadventures of Tron Bonne (CAPCOM4_ID442.7z)
The root folder is called **PS_トロンにコブン** which is the Japanese name for the game plus the PS_ prefix for Playstation. It contains three sub folders inside it:
* 北米版 - North American Edition
* PAL版 - PAL version (Europe)
* 国内版 - Domestic version (Japan)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Plus the source code of &quot;The Misadventures of Tron Bonne&quot; (screenshot not mine): <a href="https://t.co/eutXjxgjel">pic.twitter.com/eutXjxgjel</a></p>&mdash; WaluigiBSOD (@WaluigiBSOD) <a href="https://twitter.com/WaluigiBSOD/status/1328411114980470784?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote> 

---
## PAL Version (/PAL版)
There are three folders in the PAL version:
* ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ- Master ROM image
* TRON_CD1 - PAL Source Code
* TRON_CD2 - PAL Tools

### ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ- Master ROM image
The Master ROM image folder contains an .img/.cue file combo that is the disc they pressed for PAL regions, you should be able to play this in the PS1 emulator of your choice.

It is unconfirmed if there are any minor differences between this and the retail disc that players would buy, but it is unlikely.

---
## North American Version (/北米版) 
there are four folders in the North American version:
* ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ - Master ROM image
* disc1 - NA Source Code
* disc2 - Tools developed by matsuda and shingaki
* disc3 - NA Tools

### ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ - Master ROM image
The Master ROM image folder contains an .img/.cue file combo that is the disc they pressed for North America, you should be able to play this in the PS1 emulator of your choice.

It is unconfirmed if there are any minor differences between this and the retail disc that players would buy, but it is unlikely.

---
## Japanese Version (/国内版) 
Te Japanese version contains more folders than the other two due to it containing some development tools.
* tools - tools developed by each member of the development team
* library - development software such as Multi-ICE
* ﾏｽﾀｰﾛﾑﾃﾞｰﾀ - Master ROM data
* pocket - Pocketstation source code
* psx - PS1 source code and assets

### Tools (/国内版/tools)
Each folder belongs to a member of the development team:
* ito - Souichi Itou?
* matsuda - Kouetsu Matsuda
* misawa - Tsuyoshi Misawa
* nucky - ?
* sakano - Mitsunori Sakano
* shingaki - Hidekazu Shingaki
* tuji - ?
