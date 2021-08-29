---
layout: post
tags: 
- leak
- wii
- gc
title: The Unexpected 2021 Nintendo Leak  
thumbnail: /public/consoles/Nintendo Gamecube.png
image: /public/images/leaks/UnexpectedLeak.jpg
twitterimage: https://www.retroreversing.com/public/images/leaks/UnexpectedLeak.jpg
permalink: /nintendo-2021-leak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: The Unexpected Nintendo Leak of 2021
    url: #
recommend: 
- leak
- wii
- gc
editlink: /leaks/Unexpected2021Leak.md
---
On the **20th July 2021** the Nintendo Leaks (aka Gigaleaks) continued after a long hiatus, the content was obtained by Zammis Clark and then leaked online by anonymous individuals. 

# Files Leaked

The files that were leaked on the 20th July 2021 are as follows:
* **datasheet.7z** - Low level hardware information for Switch Game cards and Gamecube memory cards
* **DIAG4RVL.7z** - just contains DIAG4RVL.zip
* **DIAG4RVL.zip** -Contains the source code for A Wii/Gamecube Diagnostic tool know as DIAG4
* **pmEME_US20050207.7z** - Pokemon Emerald Localisation from Japanese to Other languages information
* **ique_player_common_tickets.7z** - Collection of 86 tik and tikmd files for the iQue player (N64 version)
* **haishin_20130912.zip** - Pokemon X/Y Distribution event Software
* **bb2.7z** - Information and Verilog source code for the BroadOnBoard 2 a planned Chinese version of the gamecube
* **gen4_era_protos.7z** - Diamond and perl prototype roms and the source code
* **teru-sama_mail_2006.7z** - A dump of the personal email inbox of **Murakawa Tsushin**

---
# Switch Game Card Hardware Datasheets (Datasheet.7z)
The contents of the **Datasheet.7z** archive are documented in a separate post that you can access below.

{% include link-to-other-post.html post="/switch-game-card-data-sheets" description="For more information on the low level hardware information about the Nintendo Switch, including Lotus3 Game Cards reader and the Game Cards themselves check out this post." %}

Honestly the **Datasheet.7z** probably won't be of interest to most people, unless you really like looking at hardware data sheets about physical storage. It will also not be particularly useful for homebrew or emulation purposes either.

---
# Chinese Gamecube (BroadOn Board 2/iQue) (bb2.7z)
The leaked **BB2.7z** archive contained documentation and source code for an unreleased console for the Chinese market with the codename BB2 (BroadOn Board 2).

It was planned to be a Gamecube with support for standard DVD playback at a cheap price point, but got cancelled as the team was moved over to work on the Nintendo Wii.

The contents of the **BB2.7z** archive are documented in a separate post which you can find a link to below.

{% include link-to-other-post.html post="/ique-gamecube/" description="For more information about the planned Chinese Gamecube console check out this post." %}

---
# Pokemon Gen 4 Era Prototypes  (gen4_era_protos.7z)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gen4_era_protos</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Nintendo DS Rom files for Pokemon Diamond and Perl in the almost retail stage of development from 2006.

Each build is distributed as an **.SRL** file which is Nintendo's naming extension for .NDS ROM files, so they can be opened directly in any Nintendo DS emulator without modification.

  </div>
</section>  

The files in this folder are listed in the table below:

File Name | Extension | Description
---|---|---
PokemonFushigiDS1006 | .zip | Pokemon Mystery Dungeon Nintendo DS ROM
adjust | .xls | List of adjustments to make to diamond/perl mainly related to localisation 
dia060813en | .zip | Diamond ROM built on 13th August 2006
dia061005 | .zip | Diamond ROM built on 5th October 2006
dia061031 | .zip | Diamond ROM built on 31st October 2006
dia061031_2 | .zip | Diamond ROM built on 31st October 2006 (duplicate)
dia061114 | .zip | Diamond ROM built on 14th November 2006
dia061115 | .zip | Diamond ROM built on 15th November 2006
dia061120 | .zip | Diamond ROM built on 20th November 2006
dia061121 | .zip | Diamond ROM built on 21st November 2006
dia061124 | .zip | Diamond ROM built on 24th November 2006
dia061127 | .zip | Diamond ROM built on 27th November 2006
dia061208 | .zip | Diamond ROM built on 8th December 2006
dia061212 | .zip | Diamond ROM built on 12th December 2006
dp060807 | .zip | Diamond and Perl ROMs built on 7th August  2006
dp060809 | .zip | Diamond and Perl ROMs built on 9th August  2006
dp060816 | .zip | Diamond and Perl ROMs built on 16th August  2006
pokemon_dp_VER20060816 | .zip | The Source code to Pokemon Diamond and Perl
readme | .txt | Describes each of the builds very briefly (mainly tells the user to read adjust.xls for the exact fixes in each build)
rtceditds0620 | .srl |  Nintendo DS ROM to change the System time for real time clock, probably used to test out day/night or special day events

In my opinion the most interesting file here is the source code to Diamond and Perl located in the archive **pokemon_dp_VER20060816.zip**.

Unless you are a big fan of Diamond/Perl the slight modifications of each prototype are not particularly interesting as they are near the retail version and fix slight issues that come up while localising to western languages.

---
# iQue Player Common Tickets
The Chinese iQue Player was a plug-and-play Nintendo 64 console with an online shop for purchasing N64 games. Each of these games were signed with a ticket so that only the purchaser can install the game on their console.

However the file **ique_player_common_tickets.7z** which was leaked on 20th July 2021 contains all the tickets for each of these purchases.

There are two files for each game a Ticket (.tik) and a MetaData file (.tikmd), each game has its own TitleId. 

So the files in this archive are the titleID followed by either of those extensions depending on the file type:


File Name | Extension | Description
---|---|---
10000001 | .tik, .tikmd | (older iQue Club?)
10000002 | .tik, .tikmd | (older iQue Club?)
10000003 | .tik, .tikmd | iQue Club
1101104 | .tik, .tikmd | Super Mario 64
1101104_ | .tik, .tikmd | Super Mario 64 Backup?
1101902 | .tik, .tikmd | Super Mario 64 (v2)
1101906 | .tik, .tikmd | Super Mario 64 (v6)
1102101 | .tik, .tikmd | Yoshi's Story
1102902 | .tik, .tikmd | Yoshi's Story (v2)
1102904 | .tik, .tikmd | Yoshi's Story (v4)
1102906 | .tik, .tikmd | Yoshi's Story (v6)
1201105 | .tik, .tikmd | Super Smash Bros.
1201901 | .tik, .tikmd | Super Smash Bros.
2101104 | .tik, .tikmd | The Legend of Zelda: Ocarina of Time
2101902 | .tik, .tikmd | The Legend of Zelda: Ocarina of Time (v2)
2101904 | .tik, .tikmd | The Legend of Zelda: Ocarina of Time (v4)
2102104 | .tik, .tikmd | Paper Mario
2102902 | .tik, .tikmd | Paper Mario (v2)
2102904 | .tik, .tikmd | Paper Mario (v4)
2104108 | .tik, .tikmd | Animal Crossing
2105103 | .tik, .tikmd | Custom Robo
2106101 | .tik, .tikmd | The Legend of Zelda: Ocarina of Time
(Traditional Chinese)
4101104 | .tik, .tikmd | Star Fox 64 (v4)
4101105 | .tik, .tikmd | Star Fox 64 (v5)
4101902 | .tik, .tikmd | Star Fox 64 (v2)
4101904 | .tik, .tikmd | Star Fox 64 (v4)
4102103 | .tik, .tikmd | Sin & Punishment
4102901 | .tik, .tikmd | Sin & Punishment
5101104 | .tik, .tikmd | Wave Race 64
5101902 | .tik, .tikmd | Wave Race 64 (v2)
5101904 | .tik, .tikmd | Wave Race 64 (v4)
5102108 | .tik, .tikmd | Excitebike 64
5102902 | .tik, .tikmd | Excitebike 64
5201104 | .tik, .tikmd | Mario Kart 64 (v4)
5201105 | .tik, .tikmd | Mario Kart 64 (v5)
5201902 | .tik, .tikmd | Mario Kart 64 (v2)
5201906 | .tik, .tikmd | Mario Kart 64 (v6)
5202103 | .tik, .tikmd | F-Zero X
5202902 | .tik, .tikmd | F-Zero X (v2)
5202904 | .tik, .tikmd | F-Zero X (v4)
6101104 | .tik, .tikmd | Dr. Mario 64
6101902 | .tik, .tikmd | Dr. Mario 64 (v2)
6101904 | .tik, .tikmd | Dr. Mario 64 (v4)

One interesting thing about iQue Title ID's is that the last 2 digits are the version of the game, so if the game has been patched multiple times it could theoretically go up to 99.

**iQueBrew** has a list of titles and each has a field called "Has Ticket". The tickets that are in this leak and marked as No in that table are as follows: 2101902, 2102902, 2106101, 4101104, 4101902, 5201902, 5202902, 6101902.

For the list on iQueBrew check out their page: [Titles - iQueBrew](http://www.iquebrew.org/index.php?title=Titles)

---
# Pokemon Emerald Localisation Emails

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">pmEME_US20050207</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains localisation documentation from around the time when Emerald was released in Japan but was undergoing changes for the Overseas markets.

It also contains a Pokemon Emerald ROM called **BPEE072D.srl**, but not sure if there is anything different in it. Will link to an article if TCRF or another website documents the differences in the build.

Apart from the ROM file, I wouldn't recommend downloading this archive as it doesn't provide any more information than is already of the internet. It is a much better idea to download the source code for Pokemon Emerald and play around with that.
  </div>
</section>  

File Name | Extension | Description
---|---|---
BPEE072D | .srl | Pokemon Emerald ROM
localize | .txt | Japanese Text Document discussing the changes in the overseas version of Pokemon Emerald
北米EMトレーナーヒル案(最新版）_ | .xls | North American EM Trainer Hill Proposal (Latest Version) - details about the Trainer Hill area in Pokemon Emerald

The most interesting file in this folder is definitely **localize.txt** as when you translate it to english it provides some interesting information about changes between the Japanese and English versions of the game. 
Although nothing that hasn't already been documented on **Bulbapedia** already.

The Spreadsheet is data about the area known as Trainer Hill which involves battling Pokemon one after the other in a sort of time attack mode. The document contains all the Pokemon used and details such as their available moves.

You can view information about it on **Bulbapedia**:
[Trainer Hill - Bulbapedia, the community-driven Pokémon encyclopedia](https://bulbapedia.bulbagarden.net/wiki/Trainer_Hill)

---
## Email history (/メール履歴)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">メール履歴</div>
  <div markdown="1" class="rr-post-markdown">
 This folder name translates to **Email history** and as the name suggest it contains emails exported to html format.

There are 4 email threads exported in this folder which are:
* **Emerald Question (About Quiz Sister)** - Questions about localising the Quiz ladies questions (she can be found in Pokemon Center)
* **About item data corruption** - There was a bug in the Japanese version where if the power was turned off during a specific start of the save it would cause corruption, this thread is talking about fixing it for overseas versions
* **Notice of correction update for overseas version** - Contains the differences made to the source code for the overseas version. Contains some C source code!
* **There is a bug in the Pokemon Coliseum. (Pokemon Box)** - Description of a bug in Pokemon Coliseum where if the Pokemon has a name longer than 10 characters the screen becomes garbled

The most interesting thread from a programmers point of view is by far the **Notice of correction update for overseas version** as it even contains some source code examples. But it can be hard to read the translated version so not sure I would recommend downloading this archive just for this content!
  </div>
</section>  

The files in this folder aren't that interesting, the main file is **emerald_mails.html** that can be opened in any web browser.

File Name | Extension | Description
---|---|---
emerald_mails | .html | The index page, open this to view the emails which loads in the _menu and _cont html pages in frames. 
emerald_mails_cont | .html | The contents of the emails
emerald_mails_menu | .html | The menu list of all emails included in the dump
tree1 | .png | Image used to draw a file tree in the html menu
tree2 | .png | Image used to draw a file tree in the html menu
tree3 | .png | Image used to draw a file tree in the html menu


---
# Pokemon X/Y Distribution Tool (haishin_20130912.zip)
This archive contains data for the **Pokemon X/Y Event Distribution tool**, this is where Nintendo would host events where users with a 3DS could get special gifts by connecting to a kiosk.

The kiosk is really just a development tool that can install .CIA files (Citrus Installable Archive) and acts like a 3DS. To install the CIA file a SD card is used or alternatively there is an eShop version according to the documentation. 

It connects to participants Nintendo 3DS systems using Infrared or wireless.

Name | Description
---|---
ResetSV.cia | 3DS Installable Archive that resets the Distribution Tool
haishin_text.xlsx | Localised text for the distribution tool in Japanese, English, French, German, Italian, Korean and Spanish
xy.cia | 3DS Installable Archive of Pokemon XY Distribution tool to be run on the Kiosk
xy_debug.cia | Debug version of the xy.cia file
配信ツール説明.txt | Delivery tool description
変更点_.txt | Change log for the distribution tool (xy.cia)

For more information on the Pokemon X/Y Distribution Tool : [Distribution devices - Bulbapedia, the community-driven Pokémon encyclopedia](https://bulbapedia.bulbagarden.net/wiki/Distribution_devices)

---
# Wii/GC Diagnostic Tool (DIAG4RVL.ZIP)
The archive **DIAG4RVL.ZIP** contains the source code for the Internal Wii Diagnostic Tool known as **DIAG**. There is also gamecube diagnostics in the tool as it was initially created during the Gamecube development process and the Wii is based on its hardware.

The contents of the **DIAG4RVL.ZIP** archive are documented in a separate post which you can find a link to below.

{% include link-to-other-post.html post="/nintendo-wii-diag4rvl-leak/" description="For more information about the DIAG tool source code check out this post." %}

Also inside **DIAG4RVL.zip** was the source code to the SDK provided to Nintendo by ArtX/ATI when developing both the Gamecube and Wii graphics hardware, we have a post covering it linked below.
{% include link-to-other-post.html post="/ati-low-level-wii-sdk/" description="For more information on the leaked low level ArtX/ATI SDK check out this post." %}

---
# Murakawa Tsushin Hidemaru emails (teru-sama_mail_2006.7z)
The **teru-sama_mail_2006.7z** archive contains an email dump of the inbox of **Murakawa Tsushin** who was in charge of Pokemon localisation at Nintendo of Japan.

{% include link-to-other-post.html post="/nintendo-hidemaru-mail-leak" description="For more information on the leaked emails check out this post." %}
