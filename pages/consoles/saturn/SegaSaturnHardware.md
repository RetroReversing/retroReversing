---
layout: post
tags: 
- saturn
- consolearchitecture
- hardware
- sega
title: Sega Saturn Hardware Architecture
category: saturn
image: https://img.youtube.com/vi/EF85n86FcPk/maxresdefault.jpg
permalink: /saturn-architecture
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /segasaturn
  - name: Sega Saturn Hardware Architecture
    url: #
references:
  - youtube
  - edge
  - gamehut
videocarousel:
  - title: Sega Saturn Hardware Architecture
    image: https://img.youtube.com/vi/RvRG_v8XpC0/maxresdefault.jpg
    youtube: 'RvRG_v8XpC0'
  - title: Sega Saturn Teardown
    image: https://img.youtube.com/vi/H-4HH56_sOY/maxresdefault.jpg
    youtube: 'H-4HH56_sOY'
  - title: Sega Saturn Teardown
    image: https://img.youtube.com/vi/bzO2P4WJO8E/maxresdefault.jpg
    youtube: 'bzO2P4WJO8E'
  - title: Sega Saturn Repair
    image: https://img.youtube.com/vi/EF85n86FcPk/maxresdefault.jpg
    youtube: 'EF85n86FcPk'
recommend: 
  - saturn
  - consolearchitecture
editlink: /consoles/saturn/SegaSaturnHardware.md
updatedAt: '2026-10-17'
---
<!-- cspell:words SCSP SMPC -->

Image from EDGE magazine issue 23
<img src="/public/magazine/SegaSaturnMotherboard.EDGE.23.webp" />
* 2x Hitachi SH·2s @28.6MHz, 25 MIPS
* 16Mbit SDRAM for SH2s
* 12Mbit SDRAM for VRAM and frame buffer
* 512K sound DRAM for 68EC000
* 32K SRAM for battery back·up
* 512K IPL (initial program loading) ROM - initiates the Saturn's boot-up sequence
* VDP1 32bit video display processor, sprite processor and texture-mapping engine with dual 256K frame buffers
* VDP2 32bit video display processor with five simultaneous scrolling backgrounds and two simultaneous rotation fields
* Processor controller & LSI for graphics
* Saturn Custom Sound Processor (SCSP), including the 22.6 MHz sound-effects DSP [^6]
* Sound CPU - Motorola MC68EC000 @11.3 MHz [^6]
* System control unit @14.3 MHz - connects the Saturn's three buses 
* System manager and peripheral control - 4bit Hitachi chip including battery back·up
* Crystal oscillator
* Integrated circuit clock controller 
* Digital to analogue converter
* RGB encoder (made by Sony)
* Cartridge slot
* Connector for joypads
* Connector for CD interface
* SH·1 processor for CD drive
* MPEG interface
* CD drive board interface
* 100-pin CD drive board connector 25 Double-speed JVC CD-ROM drive with 320 KB/sec data transfer rate
 [^1]

---
# Developer-facing hardware restrictions
The DTS technical bulletins make the architecture more concrete: they record rules developers had to follow when using the chips and expansion port, beyond listing their specifications.

## Reading peripherals through the SMPC
The System Manager and Peripheral Control chip (SMPC) handles controller data as well as system commands. Sega's July 1996 bulletin instructs developers to use the peripheral library to fetch controller data rather than the SH-2 direct mode, with an exception for Virtua Gun. It also warns against relying on reserved peripheral-data bits, because later peripherals could use them [^2]. That matters when reading old input routines: masking unused bits was part of compatibility, not just tidying the code.

## Data and RAM cartridges
Sega described two different expansion-cartridge uses in its 1996 bulletins:

Cartridge | Address and capacity noted by Sega | Important restriction
---|---|---
Data cartridge | A-Bus CS0, beginning at `0x22000000` | Store data only; program code in the cartridge was prohibited
Extended RAM cartridge | `0x22400000`-`0x227FFFFF`; initial 8 Mbit, expandable to 32 Mbit | Transfer data only; program code was prohibited even after transfer

These are contemporary developer requirements, not evidence that all retail games used either cartridge. The data-cartridge bulletin also says the CD-ROM system ID gained an `R` for a corresponding cartridge title [^3] [^4].

## Starting and stopping the sound CPU
The Saturn's MC68EC000 sound CPU and SCSP had their own restrictions. A January 1997 DTS bulletin says `RESET` and `TAS` instructions cannot be used on that sound CPU. Sega directs developers to issue SMPC `SNDON` and `SNDOFF` commands when starting or stopping it, and to start the CPU immediately after loading the sound driver [^5]. The [SDK sound-tools section](/sega-saturn-sdk#sound-production-tools) covers the Mac tools that prepared the data it played.

---
# References
[^1]: Edge (UK) issue 23
[^2]: Sega DTS, [Technical Bulletin 42 - Cautions on Using SMPC](https://antime.kapsi.fi/sega/files/ST-TECH-42.pdf), 1 July 1996.
[^3]: Sega DTS, [Technical Bulletin 46 - Data Cartridge Manual](https://antime.kapsi.fi/sega/files/ST-TECH-46.pdf), 10 July 1996.
[^4]: Sega DTS, [Technical Bulletin 47 - Extended RAM Cartridge Manual](https://antime.kapsi.fi/sega/files/ST-TECH-47.pdf), 1 October 1996.
[^5]: Sega DTS, [Technical Bulletin 51 - Restrictions for the MC68EC000 Sound CPU and SCSP](https://antime.kapsi.fi/sega/files/ST-TECH-51.pdf), 22 January 1997.
[^6]: Sega, [Saturn Overview](https://antime.kapsi.fi/sega/files/ST-103-R1-040194.pdf), sound subsystem and CPU specifications. This distinguishes the 11.3 MHz sound CPU from the 22.6 MHz sound-effects DSP.
