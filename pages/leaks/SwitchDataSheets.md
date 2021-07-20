---
layout: post
tags: 
- leak
- switch
title: Nintendo Switch Game Card Leak  
thumbnail: /public/consoles/Nintendo Switch.png
image: /public/images/leaks/Nintendo Switch Game Card Leak.jpg
twitterimage: https://www.retroreversing.com/public/images/leaks/Nintendo Switch Game Card Leak.jpg
permalink: /switch-game-card-data-sheets
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Switch
    url: /switch
  - name: Nintendo Switch GameCard Leak (Datasheets)
    url: #
recommend: 
- leak
- switch
editlink: /leaks/SwitchDataSheets.md
updatedAt: '2021-07-20'
---
<section class="postSection">
    <img src="/public/images/leaks/Nintendo Switch Game Card Leak.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
On the **20th July 2021** the Nintendo Leaks (aka Gigaleaks) continued after a long hiatus. One of the files uploaded by the leakers was **datasheet.7z**.

The archive contains low level hardware information about the Nintendo Switch, including Lotus3 Game Cards reader and the Game Cards themselves.

This contents of this archive are documented in this post in order to preserve the history of the files without distributing the content itself. 

Most of the content in this archive is not useful unless you are planning on creating custom Game Card hardware for the Switch.
 </div>
</section> 

---
# Datasheets.7z
When **datasheet.7z** is extracted it has a folder called **データシート** (Translates to Datasheet) and contains a bunch of very low level documents related to Game cards and Memory cards for various consoles.

This folder contains two sub-folders, one for each console:
* **Lotus3** - Switch Game Card Datasheets
* **GC** - Gamecube Datasheets

# Lotus3 (Switch Gamecard Interface) (/Lotus3)
The **Lotus3** folder contains hardware specifications for the chips that allow the Switch to read their custom Game Card format.

The Bridge Application Specific Integrated Circuit (ASIC) is the hardware inside the switch console that reads the Game Card, so you can think of it as a bridge between the console and the game. It has been designed by the combination of MegaChips Corporation and Macronix International.

The ASIC has two interfaces the eMMC interface for connecting to the console and the Nintendo Game Memory Interface connects to the Card.

It even contains its own **Coretex-M3** ARM-based processor inside along with a small amount of ROM (4KB) and SRAM (42KB) and a custom Random Number Generator.

## Preliminary Specifications
There are 3 different versions of the **Bridge ASIC Datasheet** file which contains the information about the two interfaces:
* **Lotus3ver10_Mar16.pdf** - Version 10 (Presumably March 16th 2015)
* **Lotus3Ver11_Mar22.pdf** - Version 11 (Presumably March 22nd 2015)
* **Lotus3Ver12_Mar28.pdf** - Version 12 (Presumably March 28th 2015)

## Final Specification
The final specification seems to have been created by Macronix and contains much of the same information:
* **MX23L0009ver000-Dec10.pdf** - Macronix International MX23L0009 Datasheet for the Game Card storage chips (December 10th 2015)

## Testing
During the development phase it is important to test the Cards to see how long they last in extreme conditions. There are a few documents that describe the process that MegaChips went through to test:
* **Lotus3_Riliability_ITEM_160201.pdf** - List of reliability tests and their codenames e.g High temperature testing
* **Lotus3_Reliablility_Report_Tentative.pdf** - Testing results of the cards in high temperatures and humidity

For More information about Lotus3 check out this excellent page on SwitchBrew:
[Lotus3 - Nintendo Switch Brew](https://switchbrew.org/wiki/Lotus3)

---
# Game Card Datasheets (/GC)
The GC folder contains specifications for each of the different Manufacturers of Nintendo Switch Game Cards and is split in to two folders:
* **Lapis** - Lapis make a 4GB and a 16GB Game Card
* **MXIC** - Macronix make 8/16/32/64/128/256 GB Game Cards

## Lapis Game Cards (/GC/Lapis)
The **Lapis** folder just contains two specifications for the Game Cards manufactured by the Lapis company:
* **16GB_ROM.pdf** - Specification of the 16GB (MR20RG4410E) from January 15th 2016
* **4GB_ROM.pdf** - Specification of the 4GB (MR20RG2410D) from January 15th 2016

## Macronix Game Cards (/GC/MXIC)
The **MXIC** folder contains specifications for the Game Cards developed by Macronix. There are two sub-folders **ES** and **CS**, the ES folder contains the same specifications but from an earlier date. The CS folder is the more up-to-date information and also has additional card types.

Each of the documents is available in both PDF and GNU Privacy Guard (GPG) format. You can ignore the GPG files as the PDFs are un-encrypted.

### 8GBit ROM Card (MX23J8GL0)
Version 12 seems to have been the latest version of the 8 Giga-Bit Switch ROM Card as specified in the following two documents:
* /CS/MX23J8GL0ver12(B)_Apr22.pdf
* /CS/MX23J8GL0ver12(B)_Apr22.pdf.gpg

### 6GBit ROM Card (MX23J16GL0)
Version 12 seems to have been the latest version of the 6 Giga-Bit Switch ROM Card as specified in the following two documents:
* /CS/MX23J16GL0ver12(B)_Apr22.pdf.gpg
* /CS/MX23J16GL0ver12(B)_Apr22.pdf

### 32GBit ROM Card (MX23J32GL0)
Version 16 seems to have been the latest version of the 32 Giga-Bit (4 Gigabyte) Switch ROM Card as specified in the following two documents, along with an older Specification in the ES folder:
* /CS/MX23J32GL0ver16(B)_Apr22.pdf
* /CS/MX23J32GL0ver16(B)_Apr22.pdf.gpg
* /ES/4GB_ROM_STD_データシート.pdf - Older version from 2015

### 64GBit ROM Card (MX23K64GL0)
Version 14 seems to have been the latest version of the 64 Giga-Bit Switch ROM Card as specified in the following two documents:
* /CS/MX23K64GL0ver14(B)_Apr27.pdf 
* /CS/MX23K64GL0ver14(B)_Apr27.pdf.gpg

### 128GBit ROM Card (MX23K128GL0)
Version 13 seems to have been the latest version of the 128 Giga-Bit Switch ROM Card as specified in the following two documents:
* /CS/MX23K128GL0ver13(B)_Apr27.pdf
* /CS/MX23K128GL0ver13(B)_Apr27.pdf.gpg
* /ES/16GB_ROM.pdf - Older version

### 256GBit ROM Card (MX23K256GL0)
Version 11 seems to have been the latest version of the 256 Giga-Bit Switch ROM Card as specified in the following two documents:
* /CS/MX23K256GL0ver11(B)_Apr27.pdf
* /CS/MX23K256GL0ver11(B)_Apr27.pdf.gpg

---
# References
[^1]: [Lotus3 - Nintendo Switch Brew](https://switchbrew.org/wiki/Lotus3)
