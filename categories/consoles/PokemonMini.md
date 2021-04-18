---
permalink: /PokemonMini/
layout: post
console: 'PokemonMini'
title: 'Pokemon Mini'
consoleimage: /public/consoles/PokemonMini.png
thumbnail: /public/consoles/PokemonMini.png
image: https://www.retroreversing.com/public/images/PokemonMini/Pokemon Mini Introduction.jpg
twitterimage: https://www.retroreversing.com/public/images/PokemonMini/Pokemon Mini Introduction.jpg
recommend: PokemonMini
recommendTitle: All Pokemon Mini Posts
editlink: ../categories/consoles/PokemonMini.md
videocarousel:
  - title: Nintendo's Forgotten Console
    image: https://img.youtube.com/vi/_Da5CfhH128/hqdefault.jpg
    youtube: '_Da5CfhH128'
  - title: Did You Known Gaming
    image: https://img.youtube.com/vi/JHSQsxWMWwY/hqdefault.jpg
    youtube: 'JHSQsxWMWwY'
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Pokemon Mini
    url: #
updatedAt: '2021-04-18'
---

# Introduction to the Pokemon Mini (PM)
<section class="postSection">
    <img src="/public/images/PokemonMini/Pokemon Mini Introduction.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
The Pokemon Mini was a low profile handheld games console developed by Nintendo's System Development Division (SDD) in partnership with 
**Jupiter Corporation** and released in Japan on December 14th 2001. 

They had previously worked with the Jupiter Corporation on hardware such as the Pocket Pikachu which created the foundation for the Pokemon Mini project.

The Japanese company **Denyusha** was also contracted to create games for the Pokemon Mini and would become one of only 3 developers for the system (SDD, Jupiter and Denyusha).
 </div>
</section> 


## Nintendo System Development Division
The Nintendo System Development Division (SDD) was a small development team in charge of lower-profile hardware such as the **Pokewalker**, **Pokemotion** and Pokemon Mini [^3]. 

SDD was lead by general manager `Masaru Shimomura` and in charge of the Pokemon Mini project were the two directors `Yoshikazu Mori` and `Shinya Kawada`. 

There were two main Pokemon Mini programmers at SDD, `Daisuke Tsujimura` and `Koji Yoshizaki` who both worked on titles such as **Pokemon Tetris** and **Snorlax's Lunchtime**, along with also working closely with the **Jupiter Corporation** and **Denyusha** to help create games and software for the new handheld [^4]. At least one of them are thanked in the credits of all games released on the Pokemon Mini! So it is safe to say these two were vital in the development of the Pokemon Mini, at least in terms of the software produced for it.

The games SDD developed for the Pokemon Mini are as follows:
* Pokemon Shock Tetris
* Snorlax's Lunchtime (Only released as part of Pokemon Channel)

Employees at SDD responsible for Pokemon Mini programming:
* Daisuke Tsujimura
* Koji Yoshizaki

## Jupiter Corporation
Jupiter is a very important company when it comes to the Pokemon Mini, in fact they developed more than half of the games available for the console with 6 in total!

Jupiter had a long history working with Nintendo and were trusted licensees of many Nintendo characters after creating game such as **Mario Picross** in as far back as 1995.

They were responsible for the **Pocket Pikachu Color** which was released in November 21st 1999 which can be seen as the predecessor to the Pokemon Mini and likely used very similar technology [^1].

They also released similar projects for non-Nintendo licensed products such as the `Pocket Sakura` which is the same hardware as the Pocket Pikachu but could communicate with the Sakura Wars game for gameboy [^2]!

The games Jupiter developed for the Pokemon Mini are as follows:
* Pokémon Pinball mini
* Pokémon Puzzle Collection
* Pokémon Puzzle Collection vol. 2
* Pokémon Race mini
* Togepi's Great Adventure
* Pokémon Breeder mini

Employees at Jupiter responsible for Pokemon Mini programming:
* Yoshikazu Mori (Pokémon Pinball mini, Pokémon Race mini, Togepi's Great Adventure)
* Hiroyuki Kawaharabayashi (Pokémon Puzzle Collection, Togepi's Great Adventure)
* Hiraku Kitawaki (Pokémon Puzzle Collection)
* Masato Furukawa (Pokémon Race mini)

## Denyusha
Denyusha were contracted out by The Pokemon Company to make 3 different games for the Pokemon Mini console, according to their official website they started working with the Pokemon Corporation in June 2001 but had already worked with Nintendo since 1998 [^5].

The games Denyusha developed for the Pokemon Mini are as follows:
* Pichu Bros. mini
* Pokémon Party mini
* Pokémon Zany Cards

Employees at Denyusha responsible for Pokemon Mini programming:
* Go Nagasaka (Pokémon Zany Cards)
* Katsuhisa Okino (Pichu Bros. mini, Pokémon Party mini)

---
# Hardware
Unlike previously thought, Nintendo SDD did not actually create custom hardware for the Pokemon Mini, as it would have been far too expensive for such a low profile device. Instead they used somewhat off the shelf parts as it was recently found out that the CPU is actually a standard `Seiko Epson` model that was previously used to power similar devices with small LCDs.

The hardware for the Pokemon Mini was provided by `Seiko EPSON` which included a 8-bit CPU called the `S1C88` , it was a cpu that was commonly sold for small portable devices such as watches or pedometers.

---
# Game Development

## Official Software Development Kit (Toolchain)
{% include link-to-other-post.html post="/official-pokemon-mini-sdk/" description="For an introduction to the official SDK used to create Pokemon Mini games check out this post." %}

## Homebrew SDK
The Pokémon Mini homebrew scene is just starting to take off, with some very talented developers making tools that make it easier than ever to start programming your own games or applications!

### Flash Cartridge
It is now possible to flash your games onto a development cartridge thanks to the creation of the `Ditto Mini`.

{% include link-to-other-site.html url="http://dittomini.com" description="Flash cartridge for the Pokemon Mini" title="DittoMini" image="http://dittomini.com/images/cartridge_hero.png"  %}

---
# Emulation

## Browser-based Emulator
The developer `Scylus` has created a brand new browser-based (javascript) Pokemon Mini emulator which wile not yet as stable as PokeMini emulator it supports the official S1C88 assembly language. It even contains basic debugging support but there are a few known bugs which cause inaccuracies in the emulation.

{% include link-to-other-site.html url="https://minimon.scyl.us/" description="An excellent browser-based emulator and debugger for Pokemon Mini games, the first one to support the official S1C88 assembly language" title="Minimon.js by Scylus" image="http://www.retroreversing.com/public/consoles/PokemonMini.png" %}

---
# Reverse Engineering Pokémon Mini games

## Pokémon Mini ROM disassembler - mindis2
{% include link-to-other-site.html url="https://github.com/pokemon-mini/mindis2" description="Pokémon Mini ROM disassembler with support for the official S1C88 assembly language" title="mindis2 - Pokémon Mini ROM disassembler" image="http://www.retroreversing.com/public/consoles/PokemonMini.png"  %}

--- 
# ROM Hacking Pokémon Mini games

## Tile and Sprite editing
<section class="postSection">
    <img src="/public/images/PokemonMini/Pokemon Mini ROM Image Editing.png" class="wow slideInLeft postImage" />

 <div markdown="1">
    You can open any Pokemon Mini rom file (`*.min`) in a tool called `Tile Molester` with the Codec setup to be `1BPP`, as Pokemon Mini is only back and white all images are stored as 1 bit per pixed, with black as 0 and white as 1.
    
   In the screenshot on the left you can see what initially looks like lots of duplicate tiles, these are infact the Masks used for transparency and you can see the tile they apply to to the right of the mask.
 </div>
</section> 


---
# ROM Translations
The Pokémon Mini only had a library of 10 games, and 5 of those were only ever released in Japan! 
Luckily for us a dedicated team of fans have translated the Japanese exclusives into english and are fully playable via flash cart or emulator!

## Pichu Bros. Mini
{% include link-to-other-site.html url="https://www.romhacking.net/translations/4578/" description="Pichu Bros. Mini in english!" title="Romhacking.net - Translations - Pichu Bros. Mini" image="https://www.romhacking.net/translations/pokemin/images/4578titlescreen.png"  %}

## Pokémon Breeder mini
{% include link-to-other-site.html url="https://www.romhacking.net/translations/2937/" description="Pokémon Breeder Mini in english!" title="Romhacking.net - Translations - Pokémon Sodateyasan Mini" image="https://www.romhacking.net/translations/pokemin/images/2937titlescreen.png"  %}

## Pokémon Puzzle Collection vol. 2
{% include link-to-other-site.html url="https://www.romhacking.net/translations/2933/" description="Pokémon Puzzle Collection vol. 2 in english!" title="Romhacking.net - Translations - Pokémon Puzzle Collection Vol. 2" image="https://www.romhacking.net/translations/pokemin/images/2933titlescreen.png"  %}

## Pokémon Race mini
{% include link-to-other-site.html url="https://www.romhacking.net/translations/2928/" description="Pokémon Race Mini in english!" title="Romhacking.net - Translations - Pokémon Race mini" image="https://www.romhacking.net/translations/pokemin/images/2928titlescreen.png"  %}

## Togepi's Great Adventure
{% include link-to-other-site.html url="https://www.romhacking.net/translations/2929/" description="Togepi's Great Adventure in english!" title="Romhacking.net - Translations - Togepi no Daibouken" image="https://www.romhacking.net/translations/pokemin/images/2929titlescreen.png"  %}

---
# References
[^1]: [Pocket Pikachu Color! Gold & Silver Together!](http://www.jupiter.co.jp/e/product/game/other/pokepika.php)
[^2]: [Pocket Sakura](http://www.jupiter.co.jp/e/product/game/other/pokesaku.php)
[^3]: [Nintendo System Development - Wikipedia](https://en.wikipedia.org/wiki/Nintendo_System_Development)
[^4]: [Daisuke Tsujimura](https://nintendo.fandom.com/wiki/Daisuke_Tsujimura)
[^5]: [denyu-sha.co.jp - Wayback Machine](https://web.archive.org/web/20021002220556/https://denyu-sha.co.jp/)
