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

The archives released after these do not contain any source code unfortunately, so will not be covered in this post.

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

This includes top down drawings of each of the maps with all the areas of interest mapped such as where to collect items. These files are named like so:
```
bioUC_scenario*_*_* // e.g bioUC_scenario0_0_1
```

This folder also contains some interesting files with the following file formats:
* .EMDL - AutoDesk Softimage Export Model
* .RMDL - Revolution Model (Wii 3D Model)
* .RTSA - Revolution Texture Animation (Wii)
* .RTEX - Revolution Texture format
* .SCN (Scene format)
* .BRRES - Common archive format for Wii assets (models etc)

Some of these file formats are covered in our Wii file formats page: 

{% include link-to-other-post.html post="/wii-file-formats" description="For more information on other Wii File formats check out this post." %}

The **Scenes** folder looks like it used to contain Softimage XSI assets, but not all the files were copied over so much of the folders are sadly empty.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Game Designers at CAPCOM made some excellent documents for Umbrella Chronicles on the Nintendo Wii! <a href="https://twitter.com/hashtag/capcomleaks?src=hash&amp;ref_src=twsrc%5Etfw">#capcomleaks</a> <a href="https://twitter.com/hashtag/capcom?src=hash&amp;ref_src=twsrc%5Etfw">#capcom</a> <a href="https://twitter.com/hashtag/wii?src=hash&amp;ref_src=twsrc%5Etfw">#wii</a> <a href="https://twitter.com/hashtag/ResidentEvil?src=hash&amp;ref_src=twsrc%5Etfw">#ResidentEvil</a> <a href="https://t.co/GYcj4ItoxD">pic.twitter.com/GYcj4ItoxD</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1329126809473081349?ref_src=twsrc%5Etfw">November 18, 2020</a></blockquote> 

---
## Korean version files (/韓国版)
This folder contains the following sub folders inside it:
* BioUC_2D_Kor - 2D assets
* RECYCLER - empty tree
* bioUCリビルド手順 - tutorial for setting up development environment (the same content as the folder at the root level)
* bioUC韓国版テキスト - bioUC Korean version text
* バイオ納品 - Source code

### 2D Assets (/韓国版/BioUC_2D_Kor)
This folder mostly contains TGA images for all the textures and images in the game.

The assets are organised into a number of folders:
* atract - Wii warning messages and starting screens (abstract?)
* binary - contains tpl, brlan and brlyt format files
* dialog - tga/rlan/rlyt image assets for dialogs
* doc - spreadsheets of text for localisation
* game - empty tree
* gameover - empty tree
* icon_banner_kr - empty tree
* option - empty tree
* pause - empty tree
* result - empty tree
* saveload - empty tree
* select - empty tree
* title - empty tree

File formats for 2D assets include:
* BRLAN (Binary Revolution Layout AnimatioN) - Wii format for title animations (Binary)
* BRLYT (Binary Revolution LaYouT) - Wii format for layout
* TPL (Texture Palette Library) - Wii format for texture palettes (colours)
* RLAN (Revolution Layout AnimatioN) - Wii format for title animations (XML)
* RLYT (Binary Revolution LaYouT) - Wii format for layout (XML)

It looks like this folder was half way through copying when it stopped, as it was probably copying alphabetically, as soon as it got to the doc folder it stopped copying, so the rest of the folders are empty trees.

### Korean version text (/韓国版/bioUC韓国版テキスト)
This folder contains fonts and text messages used throughout the game to be localised from Japanese into Korean.

The only file with messages to be translated is called **mes_ko.xls** and contains thousands of messages (2000+) in Japanese with their Korean counterparts. if you have ever wondered how games get localised into other languages then this is the document you should check out.

The fonts are separated into two of folders:
* Ksマッピング - KS mapping (Korean)
    * WKBGHYSO.TTF
    * WKLYESO.TTF
    * WKWCHJO.TTF
    * WKYESO.TTF
* S-jisマッピング - S-JIS mapping (Japanese)
    * CGBGHyso.ttf
    * CGLYeso.TTF
    * CGWCHJO.TTF
    * CGYESO.TTF

### Korean Source code (/韓国版/バイオ納品)
For an overview of the Source code folder see the next section as the only source code we have is for the Korean version, for some reason the other versions were never copied over in the leak.

---
##  Source Code (/バイオ納品 and /韓国版/バイオ納品)
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

### Korean version source code (/韓国版/バイオ納品)
The rest of this section will discuss the korean version of the source code. It contains the following files and folders:
* bioUC - C/C++ source code
* bioUCscript - Game script files (lua etc)
* buildtool - Nintendo SDK Tools
* readme.txt - Japanese document outlining the structor of the source code
* tool - custom tools created by Capcom
* 北米著作権登録 -  North American copyright registration

### North American copyright registration (北米著作権登録)
This is a very strange folder indeed, the translated name might make you think of some sort of legal documents to the North American copyright office. 

However there are two files in this folder and they are not what I would expect at all:
* ending.doc
* title.doc

Just judging by the names you might think it is the story of the game, but if you actually open the documents you will see they are both C/C++ source code files in MS Word format.

Who knows why these exist in this format, very odd indeed!

### Nintendo SDK Tools (/韓国版/バイオ納品/buildtool)
As expected this folder contains all the Software development kits and tools from outside of Capcom. It is split into a number of folders:
* CRI_SDK - CRIware SDK
* CodeWarrior - Metrowerks Codewarrior
* DevelopmentTools - Wii tools created by Nintendo
* MasteringTools - Wii Mastering tools created by Nintendo
* NintendoWareForRevolution - NintendoWare tools and runtime libraries for Wii
* RevolutionSDK - Official Wii SDK

### Tools By Capcom (/韓国版/バイオ納品/tool)
This folder contains pre-compiled versions of the tools made for the game by Capcom employees.

Some of the tools include:
* BGObjConv - Background Object converter for object placed in rooms
* BGObjCreater - Creates background objects from BGObj models
* BulletHoleVolume - Tool for putting bullet holes in 3d models
* CharaConv
* CollisionTool - Converts Collision data
* Doc
* FontConv - Convert Font data
* FontConvLocal - Font localisation
* FontConvLocal_Multi
* FontConv_Multi
* IconBanner - Tool for creating Wii banner
* ItemModel - Uploads 3D model data to asset server
* ItemParam - Uploads item parameter data to asset server
* LayoutConv - converts the output of the LayoutEditor into binary and packs it into an **arc** archive
* MakeBRFNT_Tool - Create BRFNT font file from your own images
* PlayerBulletModel - Converts 3d models for Bullets
* PlayerWeaponParam - Upload the players weapon parameters to the asset server
* StageViewer - Creates background data for stages

### Lua scripting (bioUCscript)
The game uses both LUA scripting language and the Ruby scripting language for its game design scripts.

The folders contained are:
* __binary__ - empty tree but would have contained binary compiled versions of the scripts
* __camera__ - Camera script in EMT format
* __include__ - C include files used for Lua
* __system__ - tools used for scripting (e.g lua interpreter)
* __zai__ - Zombie AI scripts (Ruby)
* omake - special stage scripts
* r_alpha - opening cutscene lua script
* r_alpha_saveload saving and loading Lua script
* r_biouc - main game management
* r_e3 - E3 demo script
* r_halfalpha
* r_leipzig - Leipzig GC Developers Conference demo
* r_prepro
* r_privateshow
* r_tgs
* s00c1 - Stage 0.0 Chapter 1
* s00c2 - Stage 0.0 Chapter 2
* s00c3 - Stage 0.0 Chapter 3
* s01c1 - Stage 0.1 Chapter 1
* s01c2 - Stage 0.1 Chapter 2
* s10c1 - Stage 1.0 Chapter 1
* s10c2 - Stage 1.0 Chapter 2
* s10c3 - Stage 1.0 Chapter 3
* s11c1 - Stage 1.1 Chapter 1
* s11c2 - Stage 1.1 Chapter 2
* s12c1 - Stage 1.2 Chapter 1
* s12c2 - Stage 1.2 Chapter 2
* s20c1 - Stage 2.0 Chapter 1
* s20c1_e3 - E3 version of  Stage 2.0 Chapter 1
* s20c2 - Stage 2.0 Chapter 2
* s20c3 - Stage 2.0 Chapter 3
* s21c1 - Stage 2.1 Chapter 1
* s22c1 - Stage 2.2 Chapter 1
* s23c1 - Stage 2.3 Chapter 1
* s30c1 - Stage 3.0 Chapter 1
* s30c2 - Stage 3.0 Chapter 2
* s30c3 - Stage 3.0 Chapter 3
* s31c1 - Stage 3.1 Chapter 1
* s31c2 - Stage 3.1 Chapter 2
* s31c3 - Stage 3.1 Chapter 3

The scripting file formats used are:
* .EMT - Custom binary format
* .LUA - LUA script
* .H - Standard C/C++ header file
* .RB - Ruby Script
* .AI - Zombie AI - Compiled version of (SAI)
* .SAI - Source Zombie AI scripts in Ruby
* .CONF - Plain text config
* .TRAP - traps (custom binary format)


### C/C++ Source Code (/bioUC)
This folder contains:
* Doc - Documentation for the source code
* DvdRoot - Contents from the retail disc
* Project - project build scripts
* Src - contains the actual source code
* update_data.bat - batch script to update directory from the main build server

### Source Code documentation (/bioUC/Doc)
This folder contains documentation for the source code completely in japanese:
* aiscript.txt - Documentation for the custom scripting language for AI based on Forth
* ode_script.txt - Documentation for the scripts they use of Open Dynamic Engine objects
* takahashis
* ゆれもの仕様.doc - WiiMote controller Shake specifications
* エフェクトについて.txt - Effects such as Blur/Glare/Shadows etc
* カウンターアクションコマンドについて - Counter action commands
* カメラ／ライト／フォグについて.txt - About camera / light / fog
* システム周りについて.txt - About the system
* スクリーンショット撮影について.txt - About screenshot ability
* デバッグ支援について.txt - Debugging support
* データ型について.txt - About Data Types
* バイオハザードにおけるIK処理負荷.doc - Inver Kinematics (IK) processing load in biohazard
* パッドについて.txt - Controller Pad
* プロジェクトの構築方法について.txt - How to build the project
* フォルダ構成について.txt - About folder structure
* メモリ確保について.txt - About memory allocation
* 噛み付きについて - About Zombie Bites
* 振動エディタ - Vibration editor
* 描画周りについて.txt - About drawing
* 音周り - Sound

The file **aiscript.txt** is facinating, it describes the custom scripting language they implemented for the movement of the AI characters. It is based on the Forth programming language and they called it **bioForth**. It is well worth a read if you can translate it.

Following on from **aiscript.txt** you should also read **ode_script.txt** as it is based on the same custom scripting language. In this case it is used for Open Dynamic Engine physics object creation!

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
The Japanese version contains more folders than the other two due to it containing some development tools.
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

