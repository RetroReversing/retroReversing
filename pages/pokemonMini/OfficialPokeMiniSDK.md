---
layout: post
tags: 
- PokemonMini
- sdk
title: Pokemon Mini Official Software Development Kit (Toolchain)
thumbnail: /public/consoles/PokemonMini.png
image: /public/consoles/PokemonMini.png
twitterimage: https://www.retroreversing.com/public/consoles/PokemonMini.png
permalink: /official-pokemon-mini-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Pokemon Mini
    url: /PokemonMini/
  - name: Pokemon Mini Official Software Development Kit (Toolchain)
    url: #
recommend: 
- PokemonMini
- sdk
editlink: /pokemonMini/OfficialPokeMiniSDK.md
---

# Introduction to the Pokemon Mini
Unlike previously thought, Nintendo did not actually create custom hardware for the Pokemon Mini, as it was recently found out that the CPU is actually a standard Seiko model that was previously used to power similar devices with small LCDs.

The hardware for the Pokemon Mini was provided by `Seiko EPSON` which included a 8-bit CPU called the `S1C88` , it was a cpu that was commonly sold for small portable devices such as watches or pedometers [^2].

## Which S1C88 chip?
Seiko created many different chips in the `S1C88` family which all have different configurations so to find out what specific chip the Pokemon Mini used required some investigation.

The chip was found to be the `E0C88V20` which was never actually advertised on their website as part of the family but the community found a description file in the epson toolchain that almost matched the PM completely. 

The only difference between the PM and the description was the different execution core, presumably to handle the sprite engine [^1].

Although the SDK provided by the hardware vendor is for the whole family of chips so we don't need to know the exact chip, it is just interesting information.

---
# Official Hardware SDK toolchain
The Pokemon mini was never intended to be a huge income-generator, with the gameboy advance released soon after it was more a toy base don some cool technology with the Pokemon brand applied. So not much Nintendo resources went into the project, so if you are expecting a full Software development kit similar to the GBC, GBA or N64 you will be slightly disappointed.

As Nintendo had very little involvement in the Pokemon Mini's hardware design the Official software development kit was provided by the hardware manufacturer.

In this case a toolchain was provided specifically provided for the S1C88 assembly language, providing the common tools such assemblers and even a C compiler!

It contains everything needed to develop games for the portable console, including an emulator with LCD support and simple debugging tools that they have simply named `simulator`.

## Obtaining the SDK
The hardware SDK toolchain was found still alive on the Epson website: https://www.epsondevice.com/products_and_drivers/semicon/products/micro_controller/zip/s5u1c88000c16.zip  which if you download provides you with a `setup.exe` to be run on early Windows OS (98/ME).

However you are most likely wanting to run it on a more modern operating system and that is where the `c88-pokemin` project comes in. It will run through all the steps, even downloading the zip file from epson (or Internet Archive) and extracting the contents of the setup executable!

The main steps to set this up are as follows:
1. Clone or download: https://github.com/pokemon-mini/c88-pokemini
2. If downloaded as zip Extract the contents
3. Go into the directory named `c88-pokemini`
4. Run `make`

If everything has succeeded then you are in luck and can proceed to the next stage, otherwise we have a few tips to help fix the problem.

### Error wineboot command not found
If you get an error on MacOSX such as:
```bash
/bin/sh: wineboot: command not found
```
Then you will need to install the `wineboot` dependency in order to make progress.

## Documentation
The documentation given to the developers would be fairly limited in comparison to the official N64 of GBC offerings but they did go into great detail about how the hardware works.

* https://global.epson.com/products_and_drivers/semicon/pdf/id000920.pdf
* http://www.rayslogic.com/Software/TimexUSB/Docs/s1c88%20core%20cpu%20manual.pdf

## Official Assembler
As the CPU used `Seiko S1c88 assembly language` which was a very specialised dialect of assembly there was only one assembler that could handle it and it was made by a cooperation between `Seiko EPSON` and `Tasking Inc`.

## Official C Compiler

The official SDK provided a proprietary C compiler developed by `Tasking Inc` and licensed by Seiko EPSON for distribution with their SDK.

### Compiler Optimizations
https://web.archive.org/web/20010304085224/http://www.tasking.com/technology/compiler.html

## Simulator (emulator)
Simulator doc: https://global.epson.com/products_and_drivers/semicon/pdf/id000926.pdf
```the simulator works fine for standard S1C88 parts, but only the info file was provided, and the V20 core.  It was missing some DLL files specific to that part though```

## Minlib

Minlib is a library of code either written by Nintendo or Jupiter and included in all of the games developed for the Pokemon Mini. 

It contains common functionality such as displaying the boot logo and audio functions.

---
# Homebrew SDK

## Browser-based Emulator
With basic debugging support but there are a few known bugs which cause inaccuracies in the emulation.
https://minimon.scyl.us/

---
# Reverse Engineering Toolchain

## mindis2 Disassembler
[GitHub - pokemon-mini/mindis2: Pokémon Mini ROM disassembler](https://github.com/pokemon-mini/mindis2)

# References
[^1]: Jhynjhiruu, Scylus (aka asterick) and VirtualChris on PokeMini Dev Discord
