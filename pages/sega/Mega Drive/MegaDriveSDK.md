---
layout: post
tags:
- sdk
- megadrive
- 32x
- crossproducts
- snsystems
title: Sega Mega Drive (Genesis)  Software Development Kit (SDK)
thumbnail: /public/consoles/Sega Megadrive.png
image: /public/images/megadrive/Sega Mega Drive Genesis SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/megadrive/Sega Mega Drive Genesis SDK.jpg
permalink: /sega-mega-drive-genesis-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Mega Drives (Genesis)
    url: /mega-drive
  - name: Sega Mega Drive (Genesis) Software Development Kit
    url: #
recommend: 
- sdk
- megadrive
editlink: /sega/Mega Drive/MegaDriveSDK.md
---
# Sega Mega Drive (Genesis) SDK
Unlike the original Master System or SG-1000 systems, **SEGA** provided third party developers with some tools to make **Mega Drive** development easier.

## Files leaked
There are still Sega Mega Drive SDK files that have never been archived or released on the internet unfortunately, so this post will only cover the files we have access to.

The following files have been released to the internet over time:
* **Sega Mega Family.7z** - Documentation PDFs for 32x, Mega CD and Sound development and the 32X SDK
* **Sega SDK.zip** - Similar to the first archive but the documentation are individual gifs for each documentation page, also contains mainly Saturn SDK files, no point in downloading this if you are only interested in Mega Drive

---
# Official Sega Mega Drive Software Development Kit
The files in this section are from the **Sega Mega Family.7z** archive as they are much easier to use when in pdf format. The **Sega SDK.zip** archive contains the same contend but each page is a separate .gif file.

## What is missing?
Before we look at the files we have access to lets have a look at the files that are known about but that have never been archived.

### Macintosh Based tools
SEGA developed some tools for Apple Macintosh computers for editing sound and potentially graphics too.
* **Midi2Bin32X** - Converts MIDI to BGM compatible **binary** file
* **SeConv32X** - Converts MIDI to Sequence Data for the 32X Sound Simulator
* **Midi2Txt32X** - Converts MIDI to BGM compatible **text** file
* **32X Sound Simulator** - 
* **Tone Editor 32X** - Creates and Edits MIDI files

---
## Standard Mega Drive/Genesis Documentation
The only documentation we have for the standard (non add-on) Sega Mega Drive development are:
* **Genesis Software Manual** - Created in 1989 contains documentation on Memory Maps, Interrupts, VDP, DMA, backwards compatibility and I/O 
* **Sega Software Development and Game Standards.pdf** - 9 page guide to what needs to be in your game in order to get approval from SEGA, including a requirement for demonstration to play if the user doesn't press start

For low level technical information about how the Genesis works the **Genesis Software Manual** document is worth a read, but it's not information that you can't find in a better form elsewhere.

The Game standards document (**Sega Software Development and Game Standards.pdf**) is an interesting read, it is surprising how specific the game standards were, and it is why so many games looked the same during the startup and title screens. It even includes specifications for Continue/Game over sections and a password screen.

---
## Sound Documentation
The **Sega Mega Family.7z** archive contains a few interesting documents on how Sound was produced for the Sega Mega Drive, which are listed in the table below.

Name | Description
---|---
68000 Sound Driver Ver 3.00.pdf | Documentation for the 32x sound driver (PCM)
Genesis Sound Software Manual.pdf | Contains Z80 memory Map, how to communicate with the Main 68K CPU, envelope specification and Programmable Sound generator information
MIDI Converter Ver 1.30.pdf | Documentation for a few Macintosh tools that convert standard MIDI files into multiple formats

---
## Development Cartridge Documentation
In order to test games on the retail Genesis hardware a few development cartridges were sold to developers which act like flash cartridges.

In the **Sega Mega Family.7z** archive there are three manuals for these cartridges listed in the table below.

Name | Description
---|---
IC BD 16M 42 PIN 4 EPROM 32X RD 837-11070 User's Manual.pdf | Documentation for the 16Mbit EPROM based development cartridge for the 32X
IC BD 32M SRAM + 256K BUP 32X RD 837-11068 User's Manual.pdf | documentation for the SRAM based development cartridge with 32Mbit of space
IC BD 4M 32 PIN 8 EPROM 32X RD 837-11069 User's Manual.pdf | Documentation for the 32Mbit EPROM based development cartridge for the 32X

---
## Official Sega Bulletins
The folder **Bulletins** inside the archive contains a number of scanned emails that SEGA of America sent out to all registered Genesis developers.

Name | Description
---|---
Addendum | Contains a few additional specifications, including custom joysticks via the I/O port, DMA, H-Blank and V-Blank interrupts and details about communication between Z80 and the 68K
Cinepak | Contains an email sent to Sega Developers in 1994 about Cinepak version 1.2, which must now be used for all future games. This was presumably only for Mega CD and Saturn developers as Cinepak is a video library 
Gen-tech | Scanned emails from 1991 giving newer information to all Mega Drive developers. Includes assembly code listings for some examples.
MCD-tech | SEGA CD specific technical bulletins including information on the US BIOS, information on CD writers and discs, and corrections to the Mega CD documentation
Misc | Information about the Super Target hardware and corrections for the software guidelines.

The most interesting emails are in the **Gen-tech** folder as they are the earliest known documentation we have on SEGA Mega Drive development.

Technical Bulletin number 32 includes an introduction to XBAND for assing online multiplayer support into your games!

The Sega CD Technical Bulletin number 20 mentions that there are only two approved CD re-writers for SEGA CD content which are:
* Yamaha model #YPE-301/YPR-301S (Uses SEGA Red discs)
* Fujitsu model #FMCDW101S (Uses SEGA Blue discs)

The first Technical Bulletin mentions some errors with **Microtec** example code, which has never been archived or distributed online.

It looks like it would be for DOS and It mentions that it has a few files:
* **asm68k** - Assembler for the main Mega Drive 68k CPU
* **lnk68k** - Linker to link together assembled object code into a single executable/ROM
* **TestC68K.bat** - Seems to be an example of using the C programming language on the Mega Drive!
