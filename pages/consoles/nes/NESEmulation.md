---
title: The History of NES Emulation
layout: post
permalink: /nes-emulation
image: https://github.com/user-attachments/assets/096a3d2c-ad64-47b3-9671-687b138c146b
twitterimage: https://github.com/user-attachments/assets/096a3d2c-ad64-47b3-9671-687b138c146b
tags:
- nes
- emulation
recommend:
- nes
- emulation
editlink: /consoles/nes/NESEmulation.md
_updatedAt: '2024-12-18'
---
# The History of NES Emulation

## The Birth of Emulation and the NES

In the early 1990s, as personal computers became more powerful, a new frontier in gaming culture emerged: emulation. 

Emulation involves mimicking one system's hardware or software on another platform, allowing games and applications designed for older systems to run on modern hardware.

The Nintendo Entertainment System (NES), released in 1983 in Japan as the *Famicom* and in 1985 globally, became one of the most iconic gaming consoles of all time. 

By the mid-90s, with the NES discontinued and its cartridges becoming harder to find, nostalgia fueled the desire to play classic games on newer systems.

## The Pioneers of NES Emulation

The earliest attempts to emulate the NES were small-scale and rudimentary. 

### Family Computer Emulator
In 1990, programmer **Haruhisa Udagawa** developed "Family Computer Emulator V0.35" for the Japan-only FM Towns PC.

Since this was long before the iNES format each game was split into multiple files depending on the ROM chip inside the cartridge (.P25 for Program ROM, .C64 for Character ROM)
![File Formats](https://github.com/user-attachments/assets/277d9476-66fd-4bf7-a8cb-33928148fef7)

This primitive emulator could run only five NES games and Version 0.35 of it lacked complete sound support.

The emulator even in its last known version (V0.45) had several limitations:
* The priority between sprites and background is fixed (for instance, it cannot display Mario entering a pipe or enemies appearing behind it).
* It only supports vertical scrolling.
* ROMs are limited to 40KB in size (PRG 16KB or 32KB + CHR 8KB).
* Sound reproduction is incomplete, and color rendering is also inaccurate.

These issues limit the titles that can run, but for games that do work, the emulator allows normal operation and can be played as long as the sound is ignored.

![FM Towns Freeware Collection 3*](https://github.com/user-attachments/assets/c66b11e9-3f70-4ce6-b59b-fa9255671ab9)

It was available on the **FM Towns Freeware Collection 3** CD (which is available on archive.org here: [FreeWare Collection 3 / フリーウェアコレクション3 - Internet Archive](https://archive.org/details/cdrom-fs-collection-3)) 

You can see a video of version Ver 0.45 of it here running in the FM Towns emulator **Tsugaru** by **bcc2528**:
<iframe width="560" height="315" src="https://www.youtube.com/embed/xcyF4jqAyFg?si=4q9vLKxeNH7McMKD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### NESticle
A significant breakthrough came in 1997 with the release of **NESticle**, a Windows-based NES emulator created by programmer Icer Addis of Bloodlust Software. 

NESticle was revolutionary: it could play many NES games at full speed on common PCs of the era and featured debugging tools, save states, and graphical enhancements. 

Modern Vintage Gamer has an excellent video covering the impact of NESticle:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Yo54FZJkIMQ?si=ysMBElQWfjCoIFLh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Its user-friendly design and high compatibility made it popular among gamers and developers, laying the groundwork for the emulation scene as we know it today. 

## ROMs and the Ethics of Emulation

Alongside the rise of NES emulators, ROM files—digital copies of NES game cartridges—began circulating on the internet. 

These ROMs were often extracted using specialized hardware devices and shared on forums, newsgroups, and early file-sharing networks. 

NES ROMs allowed players to access classic games that were otherwise out of print, but they also sparked intense debates about the legality and ethics of emulation.

Nintendo, aware of the growing emulation scene, began cracking down on websites hosting ROM files, issuing cease-and-desist letters and pursuing legal action. 

Despite these efforts, emulation continued to grow as a grassroots movement, with many enthusiasts arguing that it preserved video game history and offered access to games no longer commercially available.

## The Rise of Open-Source Emulators

By the late 1990s and early 2000s, the NES emulation scene matured significantly. Open-source emulators like **FCE Ultra** and **Nintendulator** emerged, allowing communities to contribute to the codebase and improve compatibility. 

These projects pushed emulation accuracy to new heights, ensuring that NES games ran as close to their original hardware as possible.

Another milestone came with **Nestopia** (2003), an emulator renowned for its near-perfect accuracy and feature set. 

Nestopia's focus on preserving every quirk and behavior of the NES hardware earned it praise from enthusiasts and developers alike.

## Accuracy vs. Speed: A Balancing Act

As emulation technology progressed, a split in philosophy emerged within the NES emulation community: accuracy versus speed. 

Some developers prioritized making emulators as accurate as possible, replicating the NES's hardware down to its most obscure bugs and quirks. Others focused on optimizing performance to ensure that emulators ran smoothly even on older computers.

Emulators like **higan** (formerly bsnes), created by Near (formerly known as byuu), represented the pinnacle of accuracy, using techniques like cycle-accurate emulation to replicate the exact behavior of the NES CPU, PPU (Picture Processing Unit), and memory. However, the cost of such accuracy was higher system requirements.

On the other hand, lightweight emulators like **Nestopia UE** and **QuickNES** prioritized accessibility and performance, making NES emulation available to a broader audience.

## NES Emulation Goes Mainstream

By the mid-2000s, NES emulation had entered the mainstream. Emulators became essential tools for game preservation, speedrunning, and modding. Fan-made hacks, translations, and homebrew games flourished, breathing new life into classic NES titles. 

Popular emulator frontends like **RetroArch** and **OpenEmu** further democratized NES emulation by offering polished, all-in-one solutions for managing ROM libraries and running emulators.

### Official NES Emulation from Nintendo
Nintendo, meanwhile, began embracing its retro library through official channels. 

With the launch of the **Virtual Console** on the Wii in 2006 and later services like the **NES Classic Edition** and the **Nintendo Switch Online NES library**, the company capitalized on the enduring popularity of its 8-bit classics. 

These official emulators offered an alternative to the fan-driven emulation scene while underscoring the importance of preserving gaming history.

## The Role of NES Emulation in Game Preservation

NES emulation has become a cornerstone of video game preservation. 
Many classic games risked being lost to time due to aging cartridges, hardware failure, and the lack of re-releases. 
Emulation has allowed these titles to remain accessible to new generations of players and researchers.

Moreover, the tools built by emulation developers—debuggers, disassemblers, and reverse engineering frameworks—have been invaluable to historians, speedrunners, and modders. 

Projects like **Mesen**, a highly accurate NES emulator with powerful debugging tools, have enabled developers to analyze NES games at a granular level, leading to discoveries about programming techniques, unused assets, and developer secrets.

## Legacy and Future of NES Emulation

Today, NES emulation is a mature, well-documented field, with multiple emulators offering near-perfect accuracy. 

Modern tools like **Mesen**, **higan**, and **RetroArch** allow players to experience NES games in ways that were impossible on the original hardware—complete with high-definition 
