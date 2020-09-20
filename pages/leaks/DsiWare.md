---
layout: post
tags: 
- ds
- leak
- debug
title: Nintendo DsiWare Leak  
thumbnail: /public/consoles/Nintendo 64.png
image: /public/images/leaks/DsiWareLeak.jpg
permalink: /dsiwareleak
breadcrumbs:
  - name: Home
    url: /
  - name: Leaks
    url: /leaks
  - name: Nintendo DsiWare Leak 
    url: #
recommend: leaks
editlink: /leaks/DsiWare.md
twitterimage: https://www.retroreversing.com/public/images/leaks/DsiWareLeak.jpg
updatedAt: '2020-09-20'
---

As part of the Platinum Leak on the 9th of September 2020 a ton of DsiWare titles were leaked, including debug versions of games like Legend of Zelda Four Swords remaster.

{% include link-to-other-post.html post="/platinumleak" description="For more information on the rest of the Platinum check out this post." %}

## DSIWare ROMS (DSiWareROM.rar)

The **DSiWareROM.rar** archive contains a ton of DSiWare ROMS in **TAD** format. The repository is split into folders based on the date, presumably from when Nintendo sent the data to iQue.

Apparently **TAD** files are DSIWare applications that have been exported to the SD card [^1].

All of the ROM files have the prefix **SPD** which is Nintendos Software Planning Devision [^2], which is where these DsiWare titles were sent from to iQue.

You can use the **TWL-DW_data.xls** from previous leaks to look up the 4 character code of the game (e.g KEJJ).

The folders are:
* **20090722** - contains Japanese DsiWare such as ELECTROPLANKTON™ Marine-Crystals (**KEJJ_SPD-02817.tad**)
* **20090925** - contains even more Japanese DsiWare such as Sleep record alarm clock (**KMZJ_SPD-03107.tad**)
* **20091223** - unknown DsiWare such as **SPD-03408_chample0923f.tad**
* **20100120** - two unknown DsiWare including **SPD-03482_TKA2J00.tad**
* **20100127** - just contains **SPD-03521_SikakuDSi_1015.tad**
* **20100203** - two unknown DsiWare including **blocker_dsi_TwlRomSymbol_2009_1008_1040_r27659.tad**
* **20100215** - Two different versions of Starship **Starship_TwlRomSymbol_2009_1028_1122_r28723.tad**
* **20100302** - Unknown DsiWare **SPD-03623_TKSRE00.tad**
* **20100310** - Contains Pinball and Rittango
* **20100324** - Debug version of **Kaite Oboeru: Shashin Tango**  and **Kaite Oboeru: Eitango Chou** from Intelligent Systems
* **20100405** - Debug version of **SPD-03723_KKR1009_1D.tad**
* **20100427** - Contains two unknown DsiWare such as **SPD-03776_TK3LJ00.tad**
* **20100603** - Contains FacePilot and DigiQ
* **20100607** - Contains DsiGolf and another unknown title
* **20100930** - Contains Karuta
* **20110922** - Contains a debug version of Knife (**SPD-05577_KQ9J_DEBUG_2011_0915_1547.tad**) and debug documentation for it

### DsiWare Titles included

FileName | DsiWare Name
---|---
KAAJ_SPD-02799.tad | AQUARIO (Art Style シリーズ)
KADJ_SPD-02799.tad | DECODE (Art Style シリーズ)
KAGJ_SPD-02808.tad | あつめる笑顔帳 (Collecting smile books)
KAHJ_SPD-02799.tad | HACOLIFE (Art Style シリーズ)
KAKJ_SPD-02799.tad | nalaku (Art Style シリーズ)
KAPJ_SPD-02799.tad | PiCOPiCT (Art Style シリーズ)
KASJ_SPD-02799.tad | SOMNIUM (Art Style シリーズ)
KAVJ_SPD-02799.tad | DIGIDRIVE (Art Style シリーズ)
KBGJ_SPD-02803.tad | ちょっとDS文学全集 世界の文学20 (World literature 20)
KBRJ_SPD-02807.tad | フォトスタンド付き バンブラDXラジオ (Bumbra DX Radio with Photo Stand)
KCPJ_SPD-02799.tad | できすぎチンクルパック (Too much tingle pack)
KD9J_SPD-02803.tad | ちょっとDr.MARIO
KDNJ_NWD-00151.tad | ほぼ日路線図 2009 (Hobonichi Route Map 2009)
KE3J_SPD-02799.tad | あそべる絵本　マインドテン (Picture book to play with Mind Ten)
KEAJ_SPD-02817.tad | エレクトロプランクトン　トレーピー (Electroplankton trappy)
KEBJ_SPD-02817.tad | エレクトロプランクトン　ハネンボン (Electroplankton Hanenbon)
KECJ_SPD-02817.tad | 
KEDJ_SPD-02817.tad | 
KEEJ_SPD-02817.tad | 
KEFJ_SPD-02817.tad | 
KEGJ_SPD-02817.tad | 
KEHJ_SPD-02817.tad | 
KEIJ_SPD-02817.tad | 
KEJJ_SPD-02817.tad | 
KGBJ_SPD-02803.tad | 
KGCJ_SPD-02803.tad | 
KGDJ_SPD-02803.tad | 
KGFJ_SPD-02803.tad | 
KGGJ_SPD-02803.tad | 
KGHJ_SPD-02803.tad | 
KGJJ_SPD-02803.tad | 
KGMJ_SPD-02803.tad | 
KGVJ_SPD-02803.tad | 
KHDJ_SPD-02803.tad | 
KJEJ_SPD-02807.tad | 
KK4J_SPD-02816.tad | 
KKDJ_SPD-02803.tad | 
KM9J_SPD-02817.tad | 
KMDJ_SPD-02817.tad | 
KMFJ_SPD-02817.tad | 
KMIJ_SPD-02817.tad | 
KMNJ_SPD-02817.tad | 
KMSJ_SPD-02817.tad | 
KN9J_SPD-02807.tad | 
KNDJ_SPD-02807.tad | 
KNKJ_SPD-02803.tad | 
KNRJ_SPD-02807.tad | 
KPNJ_SPD-02803.tad | 
KQ6J_SPD-02803.tad | 
KR2J_NWD-00151.tad | 
KRIJ_NWD-00151.tad | 
KSEJ_SPD-02807.tad | 
KSLJ_SPD-02807.tad | 
KSUJ_SPD-02816.tad | 
KTBJ_SPD-02816.tad | 
KTPJ_SPD-02816.tad | 
KTRJ_SPD-02816.tad | 
KUWJ_SPD-02808.tad | 
KWBJ_SPD-02807.tad | 
KWCJ_SPD-02807.tad | 
KWDJ_SPD-02807.tad | 
KWFJ_SPD-02807.tad | 
KWGJ_SPD-02807.tad | 
KX7J_SPD-02803.tad | 
K59J_SPD-03093.tad | 
KA2E_SPD-03100.tad | 
KAIE_SPD-03100.tad | 
KCDJ_SPD-03107.tad | 
KCHJ_SPD-03097.tad | 
KDMJ_SPD-03100.tad | 
KMTJ_SPD-03097.tad | 
KMZJ_SPD-03107.tad | 
KOAJ_SPD-03097.tad | 
KOBJ_SPD-03097.tad | 
KOCJ_SPD-03097.tad | 
KODJ_SPD-03097.tad | 
KOEJ_SPD-03097.tad | 
KPTJ_SPD-03100.tad | 
KSPJ_SPD-03100.tad | 
KTUJ_SPD-03097.tad | 

---
# References
[^1]: [DSi CID Discovered | Next Generation Emulation](https://www.ngemu.com/threads/dsi-cid-discovered.169257/)
[^2]: [Nintendo Software Planning & Development - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_Software_Planning_%26_Development)
