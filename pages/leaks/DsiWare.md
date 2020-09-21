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
recommend: 
- leak
- ds
editlink: /leaks/DsiWare.md
twitterimage: https://www.retroreversing.com/public/images/leaks/DsiWareLeak.jpg
updatedAt: '2020-09-20'
---

As part of the Platinum Leak on the 9th of September 2020 a ton of DsiWare titles were leaked, including debug versions of games like Legend of Zelda Four Swords remaster.

{% include link-to-other-post.html post="/platinumleak" description="For more information on the rest of the Platinum check out this post." %}

The Platinum leak contained an archive called **generic.7z** it is inside this that you will find the **DSiWareROM.rar** archive covered in this post

# DSiWare ROMS (DSiWareROM.rar)
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

## DSiWare Titles included
The DSiWare included in both **20090722** and **20090925** folders are listed in the table below along with their name in both Japanese and English.

FileName | DSiWare Name
---|---
KAAJ_SPD-02799.tad | AQUARIO (Art Style シリーズ)
KADJ_SPD-02799.tad | DECODE (Art Style シリーズ)
KAGJ_SPD-02808.tad | あつめる笑顔帳 (Collecting smile books?!)
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
KECJ_SPD-02817.tad | エレクトロプランクトン　ルミナリアン (Electroplankton Luminarian)
KEDJ_SPD-02817.tad | エレクトロプランクトン　タイヨウチュウ (Electroplankton Heliozoa)
KEEJ_SPD-02817.tad | エレクトロプランクトン　レックレック (Electroplankton Reclek)
KEFJ_SPD-02817.tad | エレクトロプランクトン　ナノカープ (Electroplankton nanocarp)
KEGJ_SPD-02817.tad | エレクトロプランクトン　ヒカリノワ (Electroplankton Hikarinova)
KEHJ_SPD-02817.tad | エレクトロプランクトン　マリンスノー (Electroplankton marine snow)
KEIJ_SPD-02817.tad | エレクトロプランクトン　ツリガネムシ (Electroplankton Vorticella)
KEJJ_SPD-02817.tad | エレクトロプランクトン　ボルボイス (Electroplankton Volvois)
KGBJ_SPD-02803.tad | ゲーム＆ウオッチ ボール (Games & Watch Balls)
KGCJ_SPD-02803.tad | ゲーム＆ウオッチ シェフ (Game & Watch Chef)
KGDJ_SPD-02803.tad | ゲーム＆ウオッチ ドンキーコングJR. (Game&Watch DONKEY KONG JR.)
KGFJ_SPD-02803.tad | ゲーム＆ウオッチ マリオズセメントファクトリー (Game&Watch MARIO'S Cement Factory)
KGGJ_SPD-02803.tad | ゲーム＆ウオッチ フラッグマン (Game&Watch FLAGMAN)
KGHJ_SPD-02803.tad | ゲーム＆ウオッチ ヘルメット(Game&Watch HELMET)
KGJJ_SPD-02803.tad | ゲーム＆ウオッチ ジャッジ (Game&Watch JUDGE)
KGMJ_SPD-02803.tad | ゲーム＆ウオッチ マンホール (Game&Watch MANHOLE)
KGVJ_SPD-02803.tad | ゲーム＆ウオッチ バーミン (Game&Watch VERMIN)
KHDJ_SPD-02803.tad | いつでもプリクラ☆キラデコプレミアム (Anytime Purikura ☆ Kiradeco Premium)
KJEJ_SPD-02807.tad | リズムで鍛える新しいえいご漬け　ネイティブ会話編 (New English Training)
KK4J_SPD-02816.tad | 囲んで消して ワクグミの時間  (Wakugumi: Monochrome Puzzle)
KKDJ_SPD-02803.tad | がんばる私のおさいふ応援団 (Household account book)
KM9J_SPD-02817.tad | ちょっとマジック大全 恐ろしい数字 (A Little Bit of... Magic Made Fun: Deep Psyche)
KMDJ_SPD-02817.tad | ちょっとマジック大全 デート占い (A Little Bit of… Magic Made Fun: Matchmaker)
KMFJ_SPD-02817.tad | ちょっとマジック大全 ファニーフェイス (A Little Bit of... Magic Made Fun: Funny Face)
KMIJ_SPD-02817.tad | ちょっとマジック大全 スキ·キライ発見器 (A Little Bit of… Magic Made Fun: Mind Probe)
KMNJ_SPD-02817.tad | ちょっとマジック大全 念写カメラ (A Little Bit of… Magic Made Fun: Psychic Camera)
KMSJ_SPD-02817.tad | ちょっとマジック大全 3つのシャッフルゲーム(A Little Bit of... Magic Made Fun: Shuffle Games)
KN9J_SPD-02807.tad | ちょっと脳を鍛える大人のDSiトレーニング 数独編 (Brain Age Express: Sudoku)
KNDJ_SPD-02807.tad | ちょっと脳を鍛える大人のDSiトレーニング 文系編 (Brain Age Express: Arts & Letters)
KNKJ_SPD-02803.tad | 井出洋介の健康麻将DSi (Yosuke Ide's Health Asahi DSi)
KNRJ_SPD-02807.tad | ちょっと脳を鍛える大人のDSiトレーニング 理系編 (Brain Age Express: Math)
KPNJ_SPD-02803.tad | ちょっとパネルでポン (Puzzle League Express)
KQ6J_SPD-02803.tad | くるくるアクション くるパチ６ (Spin 6)
KR2J_NWD-00151.tad | ポケットるるぶ京都 (Pocket Rurubu Kyoto)
KRIJ_NWD-00151.tad | ポケットるるぶ東京 (Pocket Rurubu Tokyo)
KSEJ_SPD-02807.tad | リズムで鍛える新しいえいご漬け　やさしい会話編 (New English Training)
KSLJ_SPD-02807.tad | ソリティアDSi (Touch Solitaire)
KSUJ_SPD-02816.tad | ちょっと数陣タイセン (Number Battle)
KTBJ_SPD-02816.tad | ちょっとアソビ大全 おなじみテーブル (A Little Bit of... All-Time Classics: Strategy Games)
KTPJ_SPD-02816.tad | ちょっとアソビ大全 おてがるトランプ (A Little Bit of... All-Time Classics: Family Games)
KTRJ_SPD-02816.tad | ちょっとアソビ大全 じっくりトランプ (A Little Bit of... All-Time Classics: Card Classics)
KUWJ_SPD-02808.tad | うつすメイドインワリオ (WarioWare: Snapped!)
KWBJ_SPD-02807.tad | ニンテンドーDSi時計 ファミコンマリオタイプ (Mario Clock)
KWCJ_SPD-02807.tad | ニンテンドーDSi時計 どうぶつの森タイプ (Animal Crossing Clock)
KWDJ_SPD-02807.tad | ニンテンドーDSi時計 フォトスタンドタイプ (Photo Clock)
KWFJ_SPD-02807.tad | ニンテンドーDSi電卓 ファミコンマリオタイプ (Mario Calculator)
KWGJ_SPD-02807.tad | ニンテンドーDSi電卓 どうぶつの森タイプ (Animal Crossing Calculator)
KX7J_SPD-02803.tad | パズルいろいろ　月刊クロスワードハウス　Vol.1 (Various puzzles Monthly Crossword House Vol.1)
K59J_SPD-03093.tad | あぁ無情 刹那 (Metal Torrent)
KA2E_SPD-03100.tad | Art Academy: Second Semester (European ROM)
KAIE_SPD-03100.tad | Art Academy: First Semester (European ROM)
KCDJ_SPD-03107.tad | Word
KCHJ_SPD-03097.tad | カードヒーロー スピードバトルカスタム (Card Hero Speed Battle Custom)
KDMJ_SPD-03100.tad | Minis (Mario vs. Donkey Kong: Minis March Again!)
KMTJ_SPD-03097.tad | ニンテンドーDSi メトロノーム (Nintendo DSi Metronome)
KMZJ_SPD-03107.tad | 睡眠記録 めざまし時計 (Sleep Clock)
KOAJ_SPD-03097.tad | 今日からはじめるフェイスニング顔トレミニ①すっきり小顔コース (Face training)
KOBJ_SPD-03097.tad | 今日からはじめるフェイスニング顔トレミニ②ステキな笑顔コース (Face training 2)
KOCJ_SPD-03097.tad | 今日からはじめるフェイスニング顔トレミニ③若々しい顔コース (Face training 3)
KODJ_SPD-03097.tad | 今日からはじめるフェイスニング顔トレミニ④目と口の健康コース (Face training 4)
KOEJ_SPD-03097.tad | 今日からはじめるフェイスニング顔トレミニ⑤顔のリフレッシュコース (Face Training 5)
KPTJ_SPD-03100.tad | パネル連結　３分ロケット (Pata)
KSPJ_SPD-03100.tad | ねらってスポっと！ (Spot!)
KTUJ_SPD-03097.tad | ニンテンドーDSi 楽器チューナー (Nintendo DSi Instrument Tuner)

---
# Electroplankton Series (エレクトロプランクトン)
In the list above you will notice a lot of games in the Electroplankton series, Electroplankton was originally a DS game and then split up into sub-games and sold on the DSi Store for 200 points each [^3].

The ID for the games all start with **KE** then the letter of the sub-game from **A** to **J** and finally followed by the region, for the leak they are all Japanese so have the letter **J**.

The ROMs leaked for Electroplankton are:
* KEAJ_SPD-02817.tad - エレクトロプランクトン　トレーピー (Electroplankton trappy)
* KEBJ_SPD-02817.tad - エレクトロプランクトン　ハネンボン (Electroplankton Hanenbon)
* KECJ_SPD-02817.tad - エレクトロプランクトン　ルミナリアン (Electroplankton Luminarian)
* KEDJ_SPD-02817.tad - エレクトロプランクトン　タイヨウチュウ (Electroplankton Heliozoa)
* KEEJ_SPD-02817.tad - エレクトロプランクトン　レックレック (Electroplankton Reclek)
* KEFJ_SPD-02817.tad - エレクトロプランクトン　ナノカープ (Electroplankton nanocarp)
* KEGJ_SPD-02817.tad - エレクトロプランクトン　ヒカリノワ (Electroplankton Hikarinova)
* KEHJ_SPD-02817.tad - エレクトロプランクトン　マリンスノー (Electroplankton marine snow)
* KEIJ_SPD-02817.tad - エレクトロプランクトン　ツリガネムシ (Electroplankton Vorticella)
* KEJJ_SPD-02817.tad - エレクトロプランクトン　ボルボイス (Electroplankton Volvois)

---
# Game & Watch Series (ゲーム＆ウオッチ)
Nintendo released remakes of some of their classic Game & Watch handheld systems as downloadable DSiWare available for both the DSi and 3DS.

The ID for the games all start with **KG** followed by the letter of the individual game and watch game, the letters represent the first letter of the game, e.g **B** for Balls and **V** for Vermin, so not all Letters are used.

The ROMs leaked in the Game & Watch series are:
* KGBJ_SPD-02803.tad - ゲーム＆ウオッチ ボール (Games & Watch Balls)
* KGCJ_SPD-02803.tad - ゲーム＆ウオッチ シェフ (Game & Watch Chef)
* KGDJ_SPD-02803.tad - ゲーム＆ウオッチ ドンキーコングJR. (Game&Watch DONKEY KONG JR.)
* KGFJ_SPD-02803.tad - ゲーム＆ウオッチ マリオズセメントファクトリー (Game&Watch MARIO'S Cement Factory)
* KGGJ_SPD-02803.tad - ゲーム＆ウオッチ フラッグマン (Game&Watch FLAGMAN)
* KGHJ_SPD-02803.tad - ゲーム＆ウオッチ ヘルメット(Game&Watch HELMET)
* KGJJ_SPD-02803.tad - ゲーム＆ウオッチ ジャッジ (Game&Watch JUDGE)
* KGMJ_SPD-02803.tad - ゲーム＆ウオッチ マンホール (Game&Watch MANHOLE)
* KGVJ_SPD-02803.tad - ゲーム＆ウオッチ バーミン (Game&Watch VERMIN)

---
# Art Academy Series (Art Style シリーズ)
The ROMs leaked in the Art Academy Series are:
* KA2E_SPD-03100.tad - Art Academy: Second Semester (European ROM)
* KAIE_SPD-03100.tad - Art Academy: First Semester (European ROM)
* KAAJ_SPD-02799.tad - AQUARIO (Art Style シリーズ)
* KADJ_SPD-02799.tad - DECODE (Art Style シリーズ)
* KAGJ_SPD-02808.tad - あつめる笑顔帳 (Collecting smile books?!)
* KAHJ_SPD-02799.tad - HACOLIFE (Art Style シリーズ)
* KAKJ_SPD-02799.tad - nalaku (Art Style シリーズ)
* KAPJ_SPD-02799.tad - PiCOPiCT (Art Style シリーズ)
* KASJ_SPD-02799.tad - SOMNIUM (Art Style シリーズ)
* KAVJ_SPD-02799.tad - DIGIDRIVE (Art Style シリーズ)

---
# Unknown & Test ROMs
The ROMs in the first two folders (**20090722** and **20090925**) are fairly easy to identify the name of. However the other folders don't seem to have ROMs using the standard naming convention. 

Some are missing the product code which is the easiest way to identify the ROMs. So if you know what any of the ROMs in the list below are then please let us know.

The Unknown ROMs are:
* **SPD-03408_chample0923f.tad** - Chample? (never heard of it)
* **SPD-03521_SikakuDSi_1015.tad** - Sikaku? (mistransliteration of "Shikaku" [^4])
* **blocker_dsi_TwlRomSymbol_2009_1008_1040_r27659.tad** - Blocker?
* **Starship_TwlRomJapan_2009_1028_1125_r28723.tad** - Starship? (maybe Starship Patrol / Defender? [^4])
* **Starship_TwlRomSymbol_2009_1028_1122_r28723.tad** - Starship(?) with debug symbols
* **SPD-03654_Zodiac_Pinball_Cheat_2009_08_26_1205.tad** -  Pinball Pulse: The Ancients Beckon [^4] Presumably with build in cheats
* **SPD-03649_AttaColleda_RomForShot100204.tad** - Unknown
* SPD-03776_20100127_2D.tad -  Attakoreda, JP title of Tales in a Box
* **x_dsi_TwlRomSymbol_2010_0204_1646_r32157.tad** - Unknown
* **SPD-03878_R13948_DSRL.tad**
* **SPD-03878_artest100215_2105_R13948_DSFN.tad** - Augmented Reality test?

Some of these ROMs do have the product code after the letter **T** which presumably means it is a test version and not a retail release.

The Testing ROMs are:
* **SPD-03394_TKAVJ01.tad** - DIGIDRIVE (Art Style Series)
* **SPD-03396_TKPAJ00.tad** - Leader
* **SPD-03400_pbat.KPBJ.F.0907.2660.tad** - P-Bat
* **SPD-03482_TKA2J00.tad** - Art Academy: Second Semester
* **SPD-03483_TKAIJ00.tad** - Art Academy: First Semester
* **TKDZJ10.tad** - DigiQ-z
* **SPD-03623_TKSRE00.tad** - Project Sky
* **SPD-03654_TKZPE01.tad** - Pinball Pulse The Ancients Beckon
* **SPD-03649_TWL-KRGJ091201.tad** - Looksley's Line Up
* **K8PJ_SVN4990_rel.tad** - Mtan P (release?)
* **K8PJ_SVN4990_rom.tad** - Mtan P (debug?)
* **K8EJ_SVN4989_rel.tad** - Mtan E (release?)
* **K8EJ_SVN4989_rom.tad** - Mtan E (debug?)
* **SPD-03723_KKR1009_1D.tad** - Flip The Core? (Guess based on KKR)
* **SPD-03776_TK3LJ00.tad** - さるバンド (仮) (Monkey band (provisional))
* **TKDXJ00.tad** - DigiQ-x
* **SPD-03895_DSiGolf_us20091204d.tad** - DsiGolf
* **SPD-03895_TK72E00.tad** - DsiGolf
* **SPD-05577_KQ9J_DEBUG_2011_0915_1547.tad** - Knife (Zelda 4 swords?)


---
# References
[^1]: [DSi CID Discovered - Next Generation Emulation](https://www.ngemu.com/threads/dsi-cid-discovered.169257/)
[^2]: [Nintendo Software Planning & Development - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_Software_Planning_%26_Development)
[^3]: [Electroplankton - Wikipedia](https://en.wikipedia.org/wiki/Electroplankton)
[^4]: [Gingerbread Man on Twitter: "@RetroReversing @orcastraw Zodiac Pinball I guess is Pinball Pulse: The Ancients Beckon, made by Fuse Games. It's based on Greek mythology. It was never released in Japan, so Zodiac Pinball was likely its planned JP title (or working title). Starship: maybe Starship Patrol / Defender?" / Twitter](https://twitter.com/confluentibus/status/1307833147007160320)
