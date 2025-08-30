---
permalink: /saturn/
layout: post
console: 'saturn'
title: 'Sega Saturn (Hacking & Reversing)'
consoleimage: /public/consoles/Sega Saturn.png
thumbnail: /public/consoles/Sega Saturn.png
recommend: 
 - saturn
 - dreamcast
recommendTitle: All Sega Saturn Posts
editlink: ../categories/consoles/Saturn.md
excerpt: Awesome list of SEGA Saturn Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sega Saturn
    url: #
redirect_from:
  - /segasaturn
  - /ss
tags:
  - saturn
---

# Introduction to Hacking/Modding/Reversing the Sega Saturn
Welcome to our page dedicated to Sega Saturn reverse engineering! The Sega Saturn was a gaming console released by Sega in 1994, and it introduced several innovative features to the gaming world, such as the ability to play games on both CDs and cartridges. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Sega Saturn reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your Sega Saturn controller, and get ready to dive into the exciting world of Sega Saturn reverse engineering!

{% include link-to-other-post.html post="/saturn-reversing" description="For an introduction on reverse engineering Sega Saturn games check out this post." %}

---
## Sega Saturn Exclusives
When it comes to finding a game to reverse engineer it can be helpful to look at games that are cross-platform to compare builds. But the most valuable reverse engineering projects tend to be the platform exclusives as these are games people can no longer play on modern consoles.

{% include link-to-other-post.html post="/sega-saturn-exclusives/" description="For a list of all the exclusive Sega Saturn games check out this post." %}

## Reverse Engineering the Password System in *The Lost World: Jurassic Park*

In May 2025, reverse engineer Bo Bayles published an in-depth analysis of the password system used in the Sega Saturn version of *The Lost World: Jurassic Park*. By examining the game's code with Ghidra, Bayles uncovered previously undocumented cheat codes that unlock features such as invincibility, a stage select screen, and two hidden arcade galleries. These discoveries shed light on the game's internal mechanics and offer new ways to experience the title nearly three decades after its release.

For a detailed breakdown of the password system and the newly discovered codes, refer to Bayles' full article:

> [Under the Microscope: The Lost World – Jurassic Park](https://32bits.substack.com/p/under-the-microscope-the-lost-world)


## Sega Saturn Graphics
There are some myths around the Sega Saturn's graphical abilities, such as the lack of transparency support, that can be proven false with some clever programming techniques.

{% include link-to-other-post.html post="/saturn-transparency" description="For details on Transparency effects in Sega Saturn games check out this post." %}

## Sega File Formats
The Sega Saturn was the second released Sega console which used CD-ROM to distribute its games, one of the benefits of the CD-ROM format is many times more space than a cartridge. One of the downsides compared to cartridges however was the slower loading times as reading from a CD is much slower than reading from a ROM chip.

Unlike most cartridge based ROM chips CDs have a standard File System to read files from and so instead of everything being in a giant blob of binary and burned to a chip, the game could be split into multiple files.

Also the consoles would not have enough RAM to hold all the game assets so games would have to stream assets into memory when needed. So it would only read the texture or sound files used in a particular level and ignore the rest.

{% include link-to-other-post.html post="/sega-saturn-file-formats/" description="For details on the file formats you might find in Sega Saturn games check out this post." %}

This makes it slightly easier to do some basic modding of Saturn assets compared to a ROM based console such as the Mega Drive, as you can normally pinpoint the asset you want down to a particular file and sometimes they have file extensions that tell you exactly what format the file is.

{% include link-to-other-post.html post="/sega-saturn-save-data/" description="For details on the Save Data file formats for Sega Saturn games check out this post." %}

---
# Sega Saturn Hardware
If you're interested in reverse engineering software for the Sega Saturn gaming console, it's crucial to have a solid understanding of the hardware that powers it. By comprehending the inner workings of the Saturn hardware, you can better understand how the software interacts with the hardware and how you can potentially modify or enhance it.

This section of our guide will provide you with comprehensive information and resources on the hardware of the Sega Saturn, including retail, prototype, and development hardware.

## Retail Sega Saturn hardware
When the Saturn was launched it brought incredible processing power into the home with two SH-2 Hitachi processors. The hardware was state of the art but also very complex and hard to program but exploring how it was developed is a fascinating topic.

{% include link-to-other-post.html post="/saturn-architecture" description="For more information on the Saturn hardware architecture check out this post." %}

## Retail Saturn Disc Copy Protection 
The user **jhl** on assemblergames has an excellent post on the inner workings of the Saturn DISC protection:
https://web.archive.org/web/20170626013038/https://www.assemblergames.com/threads/saturn-copy-protection-and-cdrs-the-conclusive-end.50295/

## Saturn Hardware in the Arcade
The Sega ST-V arcade board is basically a Sega Saturn located in an arcade cabinet, some of the games released for the ST-V were also available on the Saturn but others remain exclusive to the arcade hardware.
<iframe width="560" height="315" src="https://www.youtube.com/embed/EgAsiBv1TJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Development Kits (Hardware)
Development kits are released to game developers before the launch of the system to allow games to be developed for the system's launch. These systems would evolve over the systems lifespan and contained useful features for debugging and optimizing games for the platform. These systems were not just limited to the official offerings by nintendo as a few other publishers had their own versions of development hardware.

### Official Development Kits
The official development kit for the Saturn was a partnership between SEGA and Sophia and the hardware evolved over time. The first development kit released was called the `Saturn Programming box` or `P-box` and evolved into the `Cart-Dev` system.

{% include link-to-other-post.html post="/sega-saturn-programming-box/" description="For more information on the official Segas Saturn Devkit check out this post." %}

### 3rd Party Development Kits
There were a few third party developers who created their own custom development kits for the Sega Saturn. One of the main developers for 3rd party devkits was SN Systems with their Psy-Q Saturn with a much cheaper price tag than an official Sega devkit.

{% include link-to-other-post.html post="/psyq-sega-saturn/" description="For more information on the SN Systems PSYQ Saturn check out this post." %}

---
# Sega Saturn Software Development Kits

## Official Software development kit
The Official Software development kit was developed in-house by SEGA and was made up of multiple libraries and compiler toolchains. One was a fork of GCC built by `Cygnus Solutions` and the other was a custom compiler built by `Hitachi`.

{% include link-to-other-post.html post="/sega-saturn-sdk/" description="For more information on Official SDK for the Saturn check out this post." %}

### Using the SDK - Compiling samples
One of the best ways to get started understanding how games were made using the official SDK is to tinker with the samples that come packaged with the SDK. By compiling and running these on a Saturn console you can start to understand how everything pieces together.

{% include link-to-other-post.html post="/sega-saturn-compiling-samples/" description="For more information on Official SDK for the Saturn check out this post." %}

---
<div>
{% include console.html %}
</div>
