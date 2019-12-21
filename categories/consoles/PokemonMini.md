---
permalink: /PokemonMini/
layout: post
console: 'PokemonMini'
title: 'Pokemon Mini'
consoleimage: /public/consoles/PokemonMini.png
thumbnail: /public/consoles/PokemonMini.png
twitterimage: http://www.retroreversing.com/public/consoles/PokemonMini.png
recommend: PokemonMini
recommendTitle: All Pokemon Mini Posts
editlink: ../categories/consoles/PokemonMini.md
videocarousel:
  - title: Did You Known Gaming
    image: http://img.youtube.com/vi/JHSQsxWMWwY/hqdefault.jpg
    youtube: 'JHSQsxWMWwY'
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Pokemon Mini
    url: #
---

# Introduction to the Pokemon Mini
Unlike previously thought, Nintendo did not actually create custom hardware for the Pokemon Mini, as it was recently found out that the CPU is actually a standard Seiko model that was previously used to power similar devices with small LCDs.

The hardware for the Pokemon Mini was provided by `Seiko EPSON` which included a 8-bit CPU called the `S1C88` , it was a cpu that was commonly sold for small portable devices such as watches or pedometers.

## Jupiter Corporation
Jupiter is a very important company when it comes to the Pokemon Mini, in fact they developed more than half of the games available for the console with 6 in total!

Jupiter had a long history working with Nintendo and were trusted licensees of many Nintendo characters after creating game such as `Mario Picross` in as far back as 1995.

They were responsible for the `Pocket Pikachu Color` which was released in November 21st 1999 which can be seen as the predecessor to the Pokemon Mini and likely used very similar technology [^1].

They also released similar projects for non-Nintendo licensed products such as the `Pocket Sakura` which is the same hardware as the Pocket Pikachu but could communicate with the Sakura Wars game for gameboy [^2]!


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
