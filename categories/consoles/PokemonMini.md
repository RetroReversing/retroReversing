---
permalink: /PokemonMini/
layout: post
console: 'PokemonMini'
title: 'Pokemon Mini'
consoleimage: /public/consoles/PokemonMini.png
thumbnail: /public/consoles/PokemonMini.png
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

The hardware for the Pokemon Mini was provided by `Seiko EPSON` which included a 8-bit CPU called the `S1C88` , it was a cpu that was commonly sold for small portable devices such as watches or pedometers [^1].

---
# Official Software Development Kit (Toolchain)
{% include link-to-other-post.html post="official-pokemon-mini-sdk/" description="For an introduction to the official SDK used to create Pokemon Mini games check out this post." %}

---
# Homebrew SDK
The Pokémon Mini homebrew scene is just starting to take off, with some very talented developers making tools that make it easier than ever to start programming your own games or applications!

## Flash Cartridge
It is now possible to flash your games onto a development cartridge thanks to the creation of the `Ditto Mini`.

{% include link-to-other-site.html url="http://dittomini.com" description="Flash cartridge for the Pokemon Mini" title="DittoMini" image="http://dittomini.com/images/cartridge_hero.png"  %}


## Browser-based Emulator
The developer `Scylus` has created a brand new browser-based (javascript) Pokemon Mini emulator which wile not yet as stable as PokeMini emulator it supports the official S1C88 assembly language. It even contains basic debugging support but there are a few known bugs which cause inaccuracies in the emulation.

{% include link-to-other-site.html url="https://minimon.scyl.us/" description="An excellent browser-based emulator and debugger for Pokemon Mini games, the first one to support the official S1C88 assembly language" title="Minimon.js by Scylus"  %}

---
# Reverse Engineering Pokémon Mini games

## Pokémon Mini ROM disassembler - mindis2
{% include link-to-other-site.html url="https://github.com/pokemon-mini/mindis2" description="Pokémon Mini ROM disassembler with support for the official S1C88 assembly language" title="mindis2 - Pokémon Mini ROM disassembler"  %}

---
# References
[^1]: Jhynjhiruu, Scylus (aka asterick) and VirtualChris on PokeMini Dev Discord
