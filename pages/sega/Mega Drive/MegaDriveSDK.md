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
* **Sega Software Development and Game Standards.pdf** - 9 page guide to what needs to be in your game in order to get approval from SEGA, including a requirement for demonstation to play if the user doesn't press start

For low level technical information about how the Genesis works the **Genesis Software Manual** document is worth a read, but it's not information that you can't find in a better form elsewhere.

The Game standards document (**Sega Software Development and Game Standards.pdf**) is an interesting read, it is surprising how specifc the game standards were, and it is why so many games looked the same during the startup and title screens. It even includes specifications for Continue/Game over sections and a password screen.

## Sound Documentation
The **Sega Mega Family.7z** archive contains a few interesting documents on how Sound was produced for the Sega Mega Drive, which are listed in the table below.

Name | Description
---|---
68000 Sound Driver Ver 3.00.pdf | Documentation for the 32x sound driver (PCM)
Genesis Sound Software Manual.pdf | Contains Z80 memory Map, how to communicate with the Main 68K CPU, envelope specification and Programmable Sound generator information
MIDI Converter Ver 1.30.pdf | Documentation for a few Macintosh tools that convert standard MIDI files into multiple formats
