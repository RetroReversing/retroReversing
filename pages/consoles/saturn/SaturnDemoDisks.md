---
layout: post
tags:
- saturn
- sega
- games
title: Sega Saturn Demo Discs
category: saturn
permalink: /saturn-demos
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Demo Discs
    url: #
recommend:
- saturn
- games
editlink: /consoles/saturn/SaturnDemoDisks.md
updatedAt: '2026-08-09'
---

<div class="emoji">💿</div>
[Sega Saturn](/saturn) demo discs are useful for reverse engineering because they often ship earlier or alternate builds of retail games, and they can expose different SDK library versions than the final release. Official samplers and magazine covermounts also pack multiple playable demos onto one disc, which makes them a good starting point when hunting for symbols, leftover debug strings, or unreleased content.

The tables below catalogue **176** Saturn demo and magazine disc dumps across Europe, USA, and Japan. Demo names omit region and redundant `(Demo)` tags already covered by other columns. Notes capture useful extras such as magazine covermount links and alternate dump labels where known.

Product codes, versions, and dates come from each disc's `IP.BIN` header. Every dump in this set exposed a readable product number this way.

For multi-game samplers and magazine discs, the **Games** column lists titles recovered from per-game `*_IP.BIN` files on the ISO when present. If those headers are missing or reused, the column falls back to distinctive ISO directory names from the disc.

{% include_cached link-to-other-post.html post="/sega-saturn-initial-program-ip" description="For details on the Saturn IP.BIN header fields including product number and version check out this post." %}

{% include_cached link-to-other-post.html post="/saturn-reversing" description="For examples of Saturn demos used to identify SDK library versions check out this post." %}

---
## Europe and USA samplers / covermounts
These discs package multiple demos or trailers onto one CD. They are grouped below into official Sega samplers and publisher-produced sampler discs.

### Official samplers
The table below lists 5 official sampler discs:

Demo | Region | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | --- | ---
Bootleg Sampler | Europe | World Series Baseball, Bug!, Clockwork Knight 2, Sega Rally Championship, Virtua Fighter | MK-81031 V | 1.000 | 1995-11-07 | Made in EU, Made in Japan
Preview Sega Saturn Vol. 1 | Europe |  | SG0000000 | V1.000 | 1996-08-08 | 
Bootleg Sampler | USA | World Series Baseball, Clockwork Knight 2, Sega Rally Championship | MK-81031 V | 1.006 | 1995-10-26 | 
Sega Saturn Bootleg II - On the Road | USA | Virtual On, Daytona USA CCE, Three Dirty Dwarves, Baku Baku Animal | MK-81068 | V1.002 | 1996-10-25 | 
Sega Saturn Choice Cuts | USA |  | 81600 | V1.000 | 1995-04-17 | RE

---
### Publisher samplers
The table below lists 3 publisher sampler discs:

Demo | Region | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | --- | ---
Core Demo Disc | Europe |  | 610-6576 | V1.000 | 1997-03-14 | Saturn Power 1
Gremlin Demo Disc | Europe | CLUB, HARD, LOAD | T-12313H | V1.002 | 1997-04-23 | Also Saturn Power 2 covermount
Gremlin Demo Disk | Europe | Euro96, GOLF, Loaded | T-12301H | V1.001 | 1996-06-01 | Different disc from Gremlin Demo Disc; IP title LOADED

---
### Saturn Power
UK magazine **Saturn Power** shipped covermount discs with several issues. Known covermounts in this set are:
* **Saturn Power 1** - Core Demo Disc
* **Saturn Power 2** - Gremlin Demo Disc
* **Saturn Power 3** - Block Rocking Beats (audio disc artwork only in this set, no game dump)
* **Saturn Power 5** - WipEout 2097 demo

---
## Single-game demos (Europe and USA)
The table below lists 12 disc dumps from this group:

Demo | Region | Type | Product | Version | Date | Notes
--- | --- | --- | --- | --- | --- | ---
Crimewave | Europe | Single-game demo | 610-6455 | V1.000 | 1996-10-28 | 
Impact Racing | Europe | Single-game demo | T-6010H-50 | V1.200 | 1996-10-04 | 
Pinball Graffiti | Europe | Single-game demo | T-6011H-50 | V1.000 | 1996-11-18 | 
Swagman | Europe | Single-game demo | T-610-6529 | V1.000 | 1997-02-11 | 
Victory Boxing | Europe | Single-game demo | T-6005H-50 | 1.0ED | 1995-10-02 | 
Winter Heat | Europe | Single-game demo | MK-81125 | V0.000 | 1997-12-01 | 
WipEout 2097 | Europe | Single-game demo | T-6106698 | V0.900 | 1997-07-04 | Also Saturn Power 5 covermount
WWF WrestleMania - The Arcade Game | Europe | Single-game demo | T-99901G | V1.000 | 1995-04-18 | 
Bug! | USA | Single-game demo | MK-81030 | V1.002 | 1995-09-20 | 
NiGHTS into Dreams... | USA | Single-game demo | MK-81063 | V1.001 | 1996-09-10 | 
Panzer Dragoon | USA | Single-game demo | MK-81018 | V0.901 | 1995-03-16 | 
Rayman | USA | Single-game demo | 610-6164 | V1.000 | 1995-11-20 | 

---
## Japan demos and magazine discs
The subsections below group **156** Japan disc dumps. Some series were official Sega club/partner discs rather than newsstand magazines. Others were print magazines that shipped Saturn covermount CDs.

### Flash SegaSaturn
Flash SegaSaturn (フラッシュ・セガサターン) was an official Sega Japan demo-disc series for Sega Club members, not a print magazine. [Sega Retro](https://segaretro.org/Category:Flash_Sega_Saturn) documents **32** numbered volumes from 1996 to 1998, plus the hardware-bundled special disc **Ochikazuki-hen** (おちかづき編) [^1]. Do not confuse it with the unrelated European Sega Flash series.

The table below lists 33 disc dumps:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Vol. 1 | Darius Gaiden, Sega Rally Championship, Gundam, Guardian Heroes | SG0000000 | V1.000 | 1995-09-05 | 
Vol. 2 | Panzer Dragoon 2, Guardian Heroes, Pachinko Collection | SG0000000 | V1.000 | 1995-09-05 | 
Vol. 12 | Dynamite Deka, E0 (movie), VS041 JIKKYO PARODIUS for FSS, Magic Carpet SS | 610616612 | V1.001 | 1995-11-20 | 
Vol. 3 | Panzer Dragoon Zwei, Pd Ultraman Link, Victory Goal96 Demo, Dark Savior | 610616603 | V1.002 | 1996-02-15 | 
Ochikazuki-hen | Bomberman SS, Gold V | 610616699 | V1.001 | 1996-02-26 | 
Vol. 4 | GRADIUS-DP FSS-version, Victory Goal96 Final, Fishing Koshien, Sand R, The Regend Of Thor, Irem Ac | 610616604 | V1.001 | 1996-03-13 | 
Vol. 5 | Darius2, Dragon Ball Z Idainarudbdensetu, Donpachi-SS | 610616605 | V1.003 | 1996-04-10 | 
Vol. 6 | Greatest Nine'96, Langrisser III, Strikers 1945, Shippu Mahou Daisakusen, Daitoride | 610616606 | V1.000 | 1996-05-10 | 
Vol. 7 | Greatest Nine'96, Bomberman SS, Aquazone Cd-Rom, Puzzle Bubble 2X | 610616607 | V1.000 | 1996-06-07 | 
Vol. 8 | World Heroes Perfect For Segasaturn, Bomberman SS, New Kururinpa, Ultraman | 610616608 | V2.000 | 1996-07-12 | 
Vol. 9 | Magical Drop 2, Steeldom, Maruko Puzzledam | 610616609 | V1.000 | 1996-07-30 | 
Vol. 10 | Tryrush Deppy, FIST, Master of Monsters, LULU | 610616610 | V1.001 | 1996-09-06 | 
Vol. 11 | Wws 97, Sexy-Parodius, Last Gladiators, Vatlva | 610616611 | V1.001 | 1996-10-03 | 
Vol. 13 | Daytona USA Circuit Edition, F.Illusion Shou, Tomb Raiders, Fanta Step, Taromaru | 610616613 | V1.003 | 1997-01-08 | 
Vol. 14 | Puzzle Bobble 3, Quovadis II, Dragon Master Silk, Monster Slider, Tenchimuyo Rensahitsuyou | 610616614 | V1.001 | 1997-01-30 | 
Vol. 15 | Hanagumi Taisen Columns, Touge King 2, Seabass Fishing2, Sangokushi Koumeiden, Jissen Pachinko Hisshouhou Twin | 610616615 | V1.003 | 1997-03-07 | 
Vol. 16 | Three Dirty Dwarves, Daisenryaku Strong Style, Stakes Winner2, Fishing Koshien2, Macross | 610616616 | V1.001 | 1997-03-31 | 
Vol. 17 | Sonic Jam, Salamander-DP, Magical Drop 3, Macross, Harukaze Sentai V-Force | 610616617 | V1.000 | 1997-05-06 | 
Vol. 18 | Last Bronx, Azel -Panzer Dragoon RPG-, Bulk Slash, Thunder Force V, Monomono | 610616618 | V1.003 | 1997-06-10 | 
Vol. 19 | Azel -Panzer Dragoon RPG-, Gekitotsu Koshien, Tm Tokkaedama, Pulirula | 610616619 | V1.001 | 1997-07-07 | 
Vol. 20 | Silhouette Mirage, Goiken Muyou | 610616620 | V1.000 | 1997-07-28 | 
Vol. 21 | Pro Wrestling, Columns Arcade Collection, Steep Slope Sliders, Dead Or Alive | 610616621 | V1.001 | 1997-09-01 | 
Vol. 22 | Zero Divide, Memorial Selection Vol. 2, Bubble Symphony, J:Azel Panzer Dragoon RPG/U:Panzer Dragoon Saga | 610616621 | V1.000 | 1997-10-01 | 
Vol. 23 | Shining Force 3 Scenario 1 Ohto No Kyoshin Demo Version, Jungle Park, Cotton2, Princess Crown, Ninpen Manmaru, Hansya De Spark, Solo Crisis | 610616621 | V1.001 | 1997-10-31 | 
Vol. 24 | Soukuu No Tubasa, Saturn Bomberman Fight | 610616624 | V1.000 | 1997-11-19 | 
Vol. 25 | Power Drift, Tenant Wars, Battle Garegga, Burning Rangers | 610616625 | V1.001 | 1998-01-09 | 
Vol. 26 | Sakura Taisen2, Dungeon Master Nexus, Savaki | 610616626 | V1.000 | 1998-02-03 | 
Vol. 27 | Kuttuketto, SAKURA2 DEMO (movie) | 610616627 | V1.001 | 1998-03-05 | 
Vol. 28 | Super Tempo, SAKURA2 DEMO (movie) | 610616628 | V1.003 | 1998-04-03 | 
Vol. 29 | Bakuchou, Kurosu Tantei Monogatari, Langrisser 5 | 610616629 | V1.000 | 1998-04-21 | 
Vol. 30 | Waku Waku Monster, Astra Superstars | 610616630 | V1.001 | 1998-05-27 | 
Vol. 31 | Guardian Force, Lupin3Rd The Sop | 610616631 | V1.002 | 1998-06-26 | 
Vol. 32 | NADESICO The blank of 3years FIVE LOVE | 610616632 | V1.001 | 1998-07-21 | 

---
### Mogitate SegaSaturn
Mogitate SegaSaturn (モギタテセガサターン, "freshly picked" Saturn) was a Sega Partners / club information-disc series rather than a newsstand magazine. Known discs include the November 1997 inaugural **Soukangou** issue, **Vol. 2** through **Vol. 6** (1998-1999), and a **Special Movie** disc (Deep Fear and Shadows of the Tusk trailers) that [Redump](http://redump.org/disc/45275/) notes was bundled with Vol. 3 [^2] [^3]. This set has Vol. 2-6 plus Special Movie, and does not include the 1997 first issue.

The table below lists 6 disc dumps:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Vol. 2 | Tmotor, W Heat | 610680502 | V1.002 | 1998-01-29 | 
Special Movie |  | 6106929 | V1.000 | 1998-04-22 | Bundled with Vol. 3
Vol. 3 | Lang5 | 610680503 | V1.000 | 1998-04-24 | 
Vol. 4 |  | 610680504 | V1.000 | 1998-07-21 | 
Vol. 5 | YGS | 610680505 | V1.000 | 1998-10-27 | 
Vol. 6 |  | 610680506 | V1.001 | 1999-01-28 | 

---
### Tech Saturn
Tech Saturn (テックサターン) was an ASCII magazine focused on the Sega Saturn. It began as **Tech Saturn Tsuushin** (TECH サターン通信) and later shortened the title to Tech Saturn when it moved to a denser monthly schedule [^4]. Covermount discs tracked by [Sega Retro](https://segaretro.org/Tech_Saturn) include Tsuushin Vol. 1-5, two 1996 volumes, and monthly discs for January through October 1997.

The table below lists 17 disc dumps:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Tsuushin - Spring 1995 | DSR, Snddata | 610-5913-0 | 1 | 1995-04-23 | 
Tsuushin - Autumn 1995 - Special CD-ROM | Axe Dir, Blazing, Pldata, Rayman, Snd New, Spcolor, YK | 610591302 | V1.000 | 1995-08-25 | 
Tsuushin - Winter 1995 - Taikenban & Demo-ban ga Tenkomori! | Hypgolf, Kiwame S, PAO, Roadblas, RP, Sento, Smpdata, Themeprk, Ultrquiz | 610591303 | V1.000 | 1995-11-10 | 
Tsuushin Vol. 4 - Spring 1996 - Youriyou Meippai Kikaku Tenkomori | BBQ, Daiboken, Don A, Fkoshien, Hioctane, Sand R, Suiko, TH2 | 610591304 | V1.000 | 1996-03-05 | 
Tsuushin Vol. 5 - Summer 1996 | Bs264, DDSS, Toons, Vf Kids | 610591305 | V1.000 | 1996-05-31 | 
Vol. 1-1996 - Yatchimatta! | AP2, Mighty, Nauts, RASH, St Tail | 610636001 | V1.000 | 1996-08-02 | 
Vol. 2-1996 - Maitsuki 8-nichi wa Tessa no Hi - Ataru to Sugo Iyo | Deppy, LULU, Necro, Purikura, Tfgp1, Undo S | 610636002 | V1.000 | 1996-10-11 | 
Jan.1997 - Kizuitara Gekkan-ka | Blade, Carpet, E0 Tm, SR | 610636003 | V1.000 | 1996-11-11 | 
Feb.1997 - E, Chocolate Kurereba Morau yo | FHB, M, Rmate, Tengai, TOMB | 610636004 | V1.000 | 1996-11-29 | 
Mar.1997 - Okaeshi wa Marshmallow, Cookie, Howaito Choco | Adv Vg, Gineiden, GTR, NH, SILK | 610636005 | V1.000 | 1997-01-10 | 
Apr.1997 | Fantstep, QV2, SILK, Skull, Tksoq, Waktri | 610636006 | V1.000 | 1997-02-10 | 
May.1997 | Gamepara, Shinoh, Warawara | 610636007 | V1.000 | 1997-03-12 | 
Jun.1997 | Daisen, Dezaemon, FK2, G3Taiken, Hunt E1, Hunt Elf, Magical3, Seabass2 | 610636008 | V1.000 | 1997-04-11 | 
Jul.1997 | Bas4SS, Criotama, Daisen, Magical3, Shienryu, Stakes2, STPK, Touge2 | 610636009 | V1.000 | 1997-05-12 | 
Aug.1997 | Bul Sla, Criotama, Daisuki, Deza2, Monomono, RS, SM | 610636010 | V1.000 | 1997-06-10 | 
Sep.1997 | Criotama, Deza2, Gineiden, Kurodan, Magical, Magical3, Rabbit, RMSV, Rmsv V, Tuku Pon | 610636011 | V1.001 | 1997-07-18 | 
Oct.1997 | DDP, Deza2, Goiken, Jajamaru, SM, SSS, Tuku Pon | 610636012 | V1.000 | 1997-08-04 | 

---
### Saturn Super
Saturn Super (サターンスーパー) was a Japanese Saturn magazine that shipped its own demo discs. [Sega Retro](https://segaretro.org/Saturn_Super) lists it as bimonthly from mid-1995 to early 1997 with **11** numbered issues, plus extras such as **Saturn CG Selection** and **Taikenban Saturn Soft Taizen** (体験版サターンソフト大全) [^5]. Later volumes are often labeled as furoku (付録) CD-ROMs.

The table below lists 13 disc dumps:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Vol. 1 | Wing Arms, Race Drivin' | 610602001 | V1.000 | 1995-06-15 | Mostly video trailers; playable demos per Redump [^7]
Vol. 2 | Axe Dir, Rayman | 610602002 | V1.000 | 1995-08-08 | 
Saturn CG Selection |  | J-0101 | V1.001 | 1995-09-22 | Extra disc; Rev A; CG/FMV showcase (no playable demos)
Vol. 3 | Galaxy, Hangon, Pachi, Sento, Ultrquiz, VC | 610602003 | V1.001 | 1995-10-18 | Rev A
Henshuubu Hen - Taikenban Saturn Soft Taizen | Chaos, Hypgolf, Kiwame S, Oekaki L, PAO, SDDS, Smpdata, Srm Gra, Strahl, Themeprk | 610602004 | V1.000 | 1995-11-10 | Extra disc
Vol. 4 | Derodero, Loderunn, Magical, PITA, Seabass | 610602005 | V1.000 | 1995-12-01 | 
Vol. 5 | ALG, D Savior, Hyper R, KURU, Loderunn, Sand R, VH | 610602006 | V1.000 | 1996-02-13 | 
Vol. 6 | Keio2, KIDS, Metalblk, SSSS, Ts Hrv, Zippy | 610602007 | V1.000 | 1996-04-08 | 
Vol. 7 | Block, E0 Mps, Kuru2, Lunar, Seimei, Strikers, Toons, Vsysswsp | 610602008 | V1.000 | 1996-06-10 | 
Vol. 8 | Albert, CW, Mighty | 610602009 | V1.000 | 1996-07-30 | 
Vol. 9 Furoku CD-ROM | Deppy, LULU, Necro, Purikura, SSgan, TARO | 610602010 | V1.000 | 1996-10-09 | 
Vol. 10 Furoku CD-ROM | 1999, Blade, Minamino, Seint, SR, Vatlva | 610602011 | V1.000 | 1996-11-08 | 
Vol. 11 Furoku CD-ROM | FHB, Loderunn, Tengai, TG, TOMB, ZOOP | 610602012 | V1.000 | 1996-12-06 | 

---
### Develo Magazine
Develo Magazine (デベロマガジン) was a Tokuma Shoten Intermedia print magazine. The Saturn disc below is its known appendix CD-ROM covermount, a compilation of mostly non-interactive demos for upcoming titles [^6].

The table below lists 1 disc dump:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Develo Magazine Appendix CD-ROM for SegaSaturn | Basic, E0, Gjiko, Lunar, Rmate | 610645801 | V1.000 | 1996-11-19 | 

---
### Publisher samplers
Publisher line-up discs were used to show multiple upcoming titles from one company on a single Saturn CD.

The table below lists 1 disc dump:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Hudson Soft - New Soft Line Up for Sega Saturn | Bul Sla | 6106540 | V1.000 | 1997-04-18 | 

---
### Other demo discs
Miscellaneous Japan demo or promotional discs that do not belong to the magazine or club series above.

The table below lists 1 disc dump:

Demo | Games | Product | Version | Date | Notes
--- | --- | --- | --- | --- | ---
Tenchi Muyou! Ryououki Gokuraku CD-ROM for Sega Saturn |  | T-21801G00 | V1.010 | 1995-08-18 | 

---
### Single-game demos
The table below lists 84 disc dumps:

Demo | Product | Version | Date | Notes
--- | --- | --- | --- | ---
Fighting Vipers | GS-9001 | V1.000 | 1994-10-05 | 
Virtua Fighter | GS-9001 | V1.000 | 1994-10-05 | 
X-Men - Children of the Atom | 999999999 | V0.000 | 1994-11-22 | 
Daytona USA | GS-9013 | V1.000 | 1995-03-01 | 
Kanzen Chuukei Pro Yakyuu Greatest Nine | SG-9024 | V1.000 | 1995-04-17 | 
Riglordsaga | GS-9021 | V1.000 | 1995-05-01 | 
Mahjong Kaigan Monogatari - Mahjong-kyou Jidai Sexy Idol-hen | T-2201G | V1.004 | 1995-06-27 | 
Fire Pro Gaiden Blazing Tornado | T-4302G | V1.002 | 1995-07-12 | 
Shining Wisdom | GS-9057 | V1.000 | 1995-07-15 | 
Hang On GP '95 | GS-9032 | V1.000 | 1995-08-10 | 
Vampire Hunter - Darkstalker's Revenge | T-1202G | V0.001 | 1995-08-25 | En, Ja
Magical Drop | T-1304G | V0.000 | 1995-10-03 | 
Virtua Fighter 2 | GS-9079 | V0.006 | 1995-11-12 | 
Sega Rally Championship | SGS-9047 | V1.000 | 1995-11-20 | 
Gebockers | ST-5303G | V1.000 | 1995-12-01 | 
Farland Story - Habou no Mai | 610-6471 | V1.000 | 1996-01-08 | 
Gotha II - Tenkuu no Kishi + Teitoku no Ketsudan II | ST-7608G | V1.000 | 1996-01-31 | 
Suiko Enbu - Fuuun Saiki | T-1305G | V0.000 | 1996-02-01 | 
DonPachi | T-14405G | V1.000 | 1996-03-08 | 
Nanatsu no Hikan | ST-7616G | V1.000 | 1996-03-08 | 
Saturn Bomberman | T-14302G | V1.000 | 1996-03-22 | 
Strikers 1945 | T-14407G | V1.01J | 1996-05-02 | 
NiGHTS into Dreams... | GS-0000 | V0.200 | 1996-05-15 | 
Mobile Suit Gundam Side Story I - Senritsu no Blue | T-13306G | V1.000 | 1996-05-31 | 
Girls in Motion Puzzle Vol. 2 - Body Special 264 | T-21003G | V1.000 | 1996-06-06 | 
Street Fighter Zero 2 | ST-1212G | V0.950 | 1996-07-25 | 
Vatlva | T-31501G | V0.610 | 1996-09-23 | 
Lunar - Silver Star Story | ST-27901G | V1.000 | 1996-10-04 | 
PriKura (Princess Kurara) Daisakusen | T-14409G | V1.002 | 1996-10-09 | 
Sengoku Blade - Sengoku Ace Episode II | T-14410G | V1.002 | 1996-10-11 | 
Dennou Senki - Virtual On - Cyber Troopers | 610-6443 | V1.000 | 1996-10-18 | 
Tomb Raiders | ST-6010G | V1.000 | 1996-11-13 | 
Funky Head Boxers | 610-6459 | V1.000 | 1996-11-20 | 
Tengai Makyou - Daiyon no Mokushiroku - The Apocalypse IV | T-14301G | V0.000 | 1996-12-04 | 
Nissan Presents - Over Drivin' GT-R | ST-10613G | V1.000 | 1996-12-20 | 
Drift King Shutokou Battle '97 - Tsuchiya Keiichi & Bandou Masaaki | 610-6503 | V1.001 | 1997-01-22 | 
QuoVadis 2 - Wakusei Kyoushuu Ovan Rei | 610-6502 | V0.002 | 1997-01-25 | 
Monster Slider | 610-6537 | V1.000 | 1997-02-08 | 
Jantei Battle Cos-Player | 6106541 | V1.004 | 1997-03-06 | 
Magical Drop III - Toretate Zoukan-gou! | 6106569 | V1.002 | 1997-03-13 | 
Touge King the Spirits 2 | 6106539 | V1.001 | 1997-03-14 | 
Yuukyuu Gensoukyoku | 6106602 | V1.000 | 1997-04-20 | 
Thunder Force V | 6106563 | V1.000 | 1997-04-24 | 
Mr. Bones | GS-9127 | V1.001 | 1997-05-13 | 
Fully Cowled Mini Yonku - Super Factory | 6106567 | V0.200 | 1997-05-15 | 
Tokimeki Memorial Drama Series Vol. 1 - Nijiiro no Seishun | 6106663 | V1.000 | 1997-05-16 | 
Rabbit | 6106613 | V1.002 | 1997-05-27 | 
Gekitotsu Koushien | 6106677 | V1.000 | 1997-06-06 | 
Marvel Super Heroes | 6106664 | V1.000 | 1997-06-06 | 
Side Pocket 3 | 6106678 | V0.999 | 1997-06-06 | 
Virus | 6106680 | V1.100 | 1997-06-16 | 
Goiken Muyou - Anarchy in the Nippon | 6106695 | V0.100 | 1997-07-09 | 
DoDonPachi | 61014419 | V0.100 | 1997-07-10 | 
Silhouette Mirage | 610-6679 | V1.001 | 1997-07-17 | 
Soukuu no Tsubasa - Gotha World | 6106710 | V1.000 | 1997-07-22 | 
Tactics Formula | 610 6717 | V0.101 | 1997-07-31 | 
Layer Section II | 610-6727 | V0.110 | 1997-08-06 | 
Steep Slope Sliders | 6106716 | V0.500 | 1997-08-18 | 
Street Fighter Collection | 6106672 | V1.000 | 1997-08-18 | 
Hansha de Spark! | 6106731 | V0.001 | 1997-08-19 | 
Super Robot Taisen F | 610-6745 | V0.400 | 1997-08-19 | 
Message Navi | 6106728 | V0.003 | 1997-08-29 | 
Sega Touring Car Championship | 610-6747 | V1.002 | 1997-09-04 | 
Machi | 6106777 | V1.001 | 1997-10-06 | 
Solo Crisis | 6106802 | V1.001 | 1997-10-16 | 
Shining Force III - Scenario 1 - Outo no Kyoshin | 6106816 | V1.000 | 1997-10-24 | 
Sonic R | 6106815 | V1.001 | 1997-10-29 | 
Saturn Bomberman Fight!! | 6106801 | V0.300 | 1997-10-30 | 
DJ Wars | 6106762 | V0.004 | 1997-11-04 | 
Tenant Wars | 6106821 | V1.000 | 1997-11-19 | 
Yuukyuu Gensoukyoku 2nd Album | 6106842 | V1.000 | 1997-12-02 | 
Pia Carrot e Youkoso!! We've Been Waiting for You | 6106822 | V1.000 | 1997-12-04 | 
Stellar Assault SS | 6106827 | V0.012 | 1997-12-04 | 
Maria - Kimi-tachi ga Umareta Wake | 6106800 | V1.000 | 1997-12-11 | 
House of the Dead, The | 6106861 | V1.000 | 1997-12-29 | 
Shiroki Majo - Mou Hitotsu no Eiyuu Densetsu | 6106860 | V1.000 | 1998-01-15 | 
Sakura Taisen 2 - Kimi, Shinitamou Koto Nakare | 6106864 | V1.001 | 1998-01-17 | 
Eve - The Lost One | 6106837 | V1.000 | 1998-01-28 | 
Waku Waku Puyo Puyo Dungeon | 6106895 | V1.000 | 1998-03-04 | 
Gungriffon II | 6106896 | V1.000 | 1998-03-09 | 
Cross Tantei Monogatari | 6106876 | V1.000 | 1998-03-16 | Demo 1
MeltyLancer - Re-inforce | 6106905 | V1.001 | 1998-03-24 | 
Cross Tantei Monogatari | 6106877 | V1.002 | 1998-04-19 | Demo 2
Keriotosse! | 6106885 | V1.000 | 1998-05-15 |

---
## Reading IP.BIN metadata
<div class="emoji">🧾</div>
Each Saturn disc stores identity fields in the first sectors of the data track as `IP.BIN`. The useful contribution fields for this catalogue are:

* **Product** - 10-byte product number at offset `0x20`
* **Version** - 6-byte version string at offset `0x2A`
* **Date** - 8-byte release date at offset `0x30` (usually `YYYYMMDD`)
* **Title** - game/disc title at offset `0x60`

Multi-game samplers and magazine discs often also ship per-game headers such as `G1_IP.BIN` or `BB_IP.BIN` in the ISO root. The script below reads the disc `IP.BIN`, then scans the ISO9660 root for those files and prints each game title.

If you have a `.cue` / `.bin` dump, run it against **Track 1** (the MODE1 data track). Paste the printed values into the tables on this page.

```python
#!/usr/bin/env python3
"""Read Sega Saturn disc IP.BIN fields and list games on multi-game discs."""

from __future__ import annotations

import argparse
import re
import struct
from pathlib import Path

HW_MAGIC = b"SEGA SEGASATURN "
SECTOR = 2352
USER = 2048
USER_OFF = 16


def format_date(raw: str) -> str:
    raw = raw.strip()
    if len(raw) == 8 and raw.isdigit():
        yyyy, mm, dd = raw[0:4], raw[4:6], raw[6:8]
        if yyyy.startswith(("19", "20")) and 1 <= int(mm) <= 12 and 1 <= int(dd) <= 31:
            return f"{yyyy}-{mm}-{dd}"
        mm, dd, yyyy = raw[0:2], raw[2:4], raw[4:8]
        if yyyy.startswith(("19", "20")) and 1 <= int(mm) <= 12 and 1 <= int(dd) <= 31:
            return f"{yyyy}-{mm}-{dd}"
    return raw


def raw_to_user(raw: bytes) -> bytes:
    user = bytearray()
    for i in range(len(raw) // SECTOR):
        off = i * SECTOR
        user.extend(raw[off + USER_OFF : off + USER_OFF + USER])
    return bytes(user)


def read_lbas(track_bin: Path, start_lba: int, count: int) -> bytes:
    with track_bin.open("rb") as f:
        f.seek(start_lba * SECTOR)
        raw = f.read(count * SECTOR)
    if len(raw) < SECTOR:
        raise SystemExit(f"Could not read LBA {start_lba} from {track_bin}")
    return raw_to_user(raw)


def parse_ip(ip: bytes) -> dict[str, str] | None:
    if ip[:16] != HW_MAGIC:
        idx = ip.find(HW_MAGIC)
        if idx < 0:
            return None
        ip = ip[idx:]
    if len(ip) < 0xD0:
        return None

    def field(start: int, size: int) -> str:
        return ip[start : start + size].decode("ascii", "replace").replace("\0", "").strip()

    date_raw = field(0x30, 8)
    title = re.sub(r"[^\x20-\x7E]+", " ", field(0x60, 0x70))
    title = re.sub(r"\s+", " ", title).strip()
    if not title:
        return None
    return {
        "maker": field(0x10, 16),
        "product": field(0x20, 10),
        "version": field(0x2A, 6),
        "date_raw": date_raw,
        "date": format_date(date_raw),
        "device": field(0x38, 8),
        "title": title,
    }


def both_endian_u32(buf: bytes, offset: int) -> int:
    return struct.unpack_from("<I", buf, offset)[0]


def list_iso_dir(user: bytes, extent: int, size: int) -> list[tuple[str, bool, int, int]]:
    data = user[extent * USER : extent * USER + size]
    pos = 0
    entries: list[tuple[str, bool, int, int]] = []
    while pos < len(data):
        length = data[pos]
        if length == 0:
            nxt = ((pos // USER) + 1) * USER
            if nxt <= pos or nxt >= len(data):
                break
            pos = nxt
            continue
        if pos + length > len(data):
            break
        flags = data[pos + 25]
        name_len = data[pos + 32]
        name = data[pos + 33 : pos + 33 + name_len]
        extent_lba = both_endian_u32(data, pos + 2)
        file_size = both_endian_u32(data, pos + 10)
        if name not in (b"\x00", b"\x01"):
            decoded = name.decode("ascii", "replace").split(";")[0]
            entries.append((decoded, bool(flags & 0x02), extent_lba, file_size))
        pos += length
    return entries


def root_entries(track_bin: Path) -> list[tuple[str, bool, int, int]]:
    # PVD is logical block 16. Pull enough early LBAs for the root directory.
    head = read_lbas(track_bin, 0, 1024)
    pvd = head[16 * USER : 17 * USER]
    if pvd[1:6] != b"CD001":
        raise SystemExit(f"No ISO9660 PVD found in {track_bin}")
    root = pvd[156 : 156 + 34]
    root_extent = both_endian_u32(root, 2)
    root_size = both_endian_u32(root, 10)
    need = root_extent + (root_size + USER - 1) // USER + 4
    if need > 1024:
        head = read_lbas(track_bin, 0, need)
    return list_iso_dir(head, root_extent, root_size)


def is_game_ip_name(name: str) -> bool:
    return bool(re.search(r"(^|_)IP\.BIN$", name.upper()))


def list_games(track_bin: Path, disc_title: str) -> list[str]:
    games: list[str] = []
    seen: set[str] = set()
    entries = root_entries(track_bin)

    for name, is_dir, extent, size in entries:
        if is_dir or not is_game_ip_name(name):
            continue
        sectors = max(1, (min(size, 32768) + USER - 1) // USER)
        payload = read_lbas(track_bin, extent, sectors)[:size]
        meta = parse_ip(payload)
        if not meta:
            continue
        title = meta["title"]
        if title == disc_title or title in seen:
            continue
        if title.upper() in {"SAMPLE GAME", "SAMPLE IP_BIN", "DEMO DEMO DISK"}:
            continue
        if title.upper().startswith("GAME TITLE"):
            continue
        seen.add(title)
        games.append(title)

    if len(games) >= 2:
        return games

    # Fallback: distinctive root folders when per-game IP headers are missing/reused.
    skip = {
        "SYSTEM", "DATA", "SOUND", "SOUNDS", "TITLE", "FMV", "OTHER", "INTRO",
        "MAINMENU", "DEMOMENU", "VIDPROC", "SOFDEC", "CA_RYUBO",
    }
    dirs = []
    for name, is_dir, _extent, _size in entries:
        if not is_dir:
            continue
        upper = name.upper()
        if upper in skip or re.fullmatch(r"G\d{1,3}", upper):
            continue
        dirs.append(name)
    return dirs


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("track1_bin", type=Path, help="Path to Track 1 MODE1/2352 .bin")
    args = parser.parse_args()

    disc = parse_ip(read_lbas(args.track1_bin, 0, 16))
    if not disc:
        raise SystemExit(f"No Saturn IP header at sector 0: {args.track1_bin}")

    print(f"Title:   {disc['title']}")
    print(f"Maker:   {disc['maker']}")
    print(f"Product: {disc['product']}")
    print(f"Version: {disc['version']}")
    print(f"Date:    {disc['date']} (raw {disc['date_raw']})")
    print(f"Device:  {disc['device']}")

    games = list_games(args.track1_bin, disc["title"])
    if not games:
        print("Games:   (single-game disc, or no per-game IP.BIN / folders found)")
        return

    print(f"Games ({len(games)}):")
    for title in games:
        print(f"  - {title}")


if __name__ == "__main__":
    main()
```

Example for a single-game demo:

```bash
python3 saturn_ip_info.py "Bug! (USA) (Demo) (Track 01).bin"
```

Example for a multi-game sampler:

```bash
python3 saturn_ip_info.py "Bootleg Sampler (Europe) (Track 01).bin"
```

When contributing a missing disc, send the Demo name, Region, Product, Version, Date, and the playable games list if it is a multi-game disc.

---
# References
[^1]: [Category:Flash Sega Saturn - Sega Retro](https://segaretro.org/Category:Flash_Sega_Saturn)
[^2]: [Mogitate Sega Saturn Vol. 2 - Sega Retro](https://segaretro.org/Mogitate_Sega_Saturn_Vol._2)
[^3]: [Mogitate SegaSaturn Special Movie - Redump](http://redump.org/disc/45275/)
[^4]: [Tech Saturn - Sega Retro](https://segaretro.org/Tech_Saturn)
[^5]: [Saturn Super - Sega Retro](https://segaretro.org/Saturn_Super)
[^6]: [Develo Magazine Appendix CD-ROM for Sega Saturn - Sega Retro](https://segaretro.org/Develo_Magazine_Appendix_CD-ROM_for_Sega_Saturn)
[^7]: [Saturn Super Vol. 1 - Redump](http://redump.org/disc/41098/)
