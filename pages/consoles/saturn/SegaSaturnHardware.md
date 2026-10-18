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
updatedAt: '2026-10-18'
---
<!-- cspell:words SCSP SMPC WORKRAM VBLANK TVSTAT TVMD Gouraud -->

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

### Mouse and keyboard reports
Sega's peripheral bulletins show why a single "controller" structure is too vague for every device. A shuttle mouse reports peripheral ID `E3h` and three data bytes. The first holds X/Y sign and overflow flags plus Start, Middle, Right, and Left buttons; the next two hold relative X and Y movement. The keyboard reports ID `34h` and four data bytes, including controller-style buttons, keyboard-type bits, lock state, make/break flags, and a key code [^7] [^8]. A parser needs the ID and reported size before interpreting the payload.

The input contract also appeared in Sega's testing notes. The November 1996 DTS newsletter lists frequent "A-bugs" including games that failed to recover after a peripheral was unplugged, assigned six-player tap ports in the wrong order, ignored controller port 2 when a tap occupied port 1, or let an unsupported device start a game [^9]. These are concrete failure cases behind the general SMPC rule.

The original bit maps show the difference at a glance. The mouse packs button state and X/Y sign flags ahead of two movement bytes; the keyboard adds lock and make/break flags before its key-code byte [^7] [^8]. Each extract can be opened at full size for the bit positions.

{% include article-figure.html src="/public/images/saturn/dts/dts-mouse-packet-layout.webp" mobile_src="/public/images/saturn/dts/dts-mouse-packet-mobile.svg" alt="Saturn shuttle mouse report with buttons and sign flags followed by X and Y movement bytes" width="1140" height="210" title="Three bytes behind the Saturn mouse" caption="Bit table cropped from [Sega Technical Bulletin 44](https://antime.kapsi.fi/sega/files/ST-TECH-44.pdf), PDF p. 1. The narrow-screen version summarizes the bytes; select the figure for the original bit positions." %}

{% include article-figure.html src="/public/images/saturn/dts/dts-keyboard-packet-layout.webp" mobile_src="/public/images/saturn/dts/dts-keyboard-packet-mobile.svg" alt="Saturn keyboard report with controller-style buttons, keyboard type, lock and make-break flags, and key code" width="1185" height="340" title="Four bytes behind the Saturn keyboard" caption="Bit table cropped from [Sega Technical Bulletin 45](https://antime.kapsi.fi/sega/files/ST-TECH-45.pdf), PDF p. 1. The narrow-screen version summarizes the bytes; select the figure for the original bit positions." %}

---
### A screen for watching the ports
Sega's [SMPC sample-program manual](https://antime.kapsi.fi/sega/files/ST-214-111594.pdf) shows what a developer-facing input diagnostic could display. Its port-monitor modes show connected device names, IDs, and returned data, while other modes show the `INTBACK` status, issue SMPC commands, or use a mouse to draw simple shapes [^13]. That is a much more revealing view of the input system than a game character moving on screen.

{% include article-figure.html src="/public/images/saturn/dts/dts-smpc-port-monitor.webp" alt="Sega manual mockup of the SMPC port monitor showing a Saturn pad on port 1 and a multitap with two Mega Drive pads and a Sega mouse on port 2" width="795" height="535" title="What the SMPC reported" caption="Port-monitor screen illustration cropped from the [SMPC Sample Program manual](https://antime.kapsi.fi/sega/files/ST-214-111594.pdf), PDF p. 10. It is a manual mockup, not a captured retail-game screen." %}

The manual says this version could handle up to 30 peripherals with two clocked-serial 15-port adapters, although the monitor displayed only the first seven attached to each main port [^13]. The illustrated screen is smaller: a pad on port 1 and a tap on port 2. It also shows why software must track both the physical port and the device beneath a tap.

---
## DMA crosses buses, but not every route is legal
Sega's developer FAQ gives a revealing failed call: `DMA_ScuMemCopy()` does not copy from one area of high work RAM to another. The SCU DMA engine is for transfers between buses; a copy within the same memory space needs CPU DMA or a software copy [^10]. The FAQ lists high work RAM to VDP1, VDP2, or SCSP and CD buffer to those destinations as useful routes.

That does **not** make every transfer direction valid. Technical Bulletin 12 prohibits using SCU DMA to **read** VRAM, even though a transfer *to* VDP memory can be valid. It also says the VDP2 VBlank status bit reads as set whenever the display-enable bit is off; a polling loop that treats that bit as an ordinary clock can therefore misread a blanked screen [^11]. These distinctions matter when a recovered routine appears to stall or move nothing despite having plausible source and destination addresses.

---
## A sprite could cast a shadow without drawing its own image
Sega's shadow bulletin describes two ways VDP1 can write special pixels that VDP2 interprets while combining sprites and backgrounds [^12]. A normal shadow uses a reserved palette value to darken a background pixel. An MSB shadow sets the high bit of the VDP1 frame-buffer pixel, allowing the effect to darken a sprite already drawn there as well. The choice changed what else the scene could display:

Shadow mode | Useful trade-off
---|---
Normal | Can mix with RGB sprites and use different priorities, but overwrites a lower sprite rather than darkening it
MSB | Can darken another sprite, but cannot mix with RGB sprites; transparent MSB shadow pixels share priority register zero

MSB shadows require VDP2's sprite-control bits to leave the high bit available and work only with sprite types 2-7, which rules out VDP1 high-resolution modes. Normal shadows are available in those modes, but their reserved palette entries cannot be used as ordinary sprite colours [^12]. These are useful clues when a game uses apparently strange colour values or a shadow disappears after a rendering-mode change.

{% include article-figure.html src="/public/images/saturn/dts/dts-shadow-modes.svg" mobile_src="/public/images/saturn/dts/dts-shadow-modes-mobile.svg" alt="Normal shadow uses a reserved palette value to darken the background; MSB shadow uses a high bit and can darken existing sprites too" width="1200" height="250" title="Two routes through the Saturn's shadow hardware" caption="Diagram reconstructed from [Sega Technical Bulletin SOA-2](https://antime.kapsi.fi/sega/files/Sattechs.pdf), pp. 135-137 of the PDF." %}

---
## What one shading test cost
An April 1996 DTS Q&A reports a specific VDP1 test: drawing several hundred **untextured** polygons with Gouraud shading made VDP1 about one-third slower than drawing them without it [^14]. The writer explicitly did not know whether textured polygons paid the same penalty. This is a period measurement for one workload, not a general Saturn frame-rate rule.

{% include article-figure.html src="/public/images/saturn/dts/dts-newsletter-gouraud-qa.webp" alt="April 1996 DevelopMental Q and A reporting an approximately one-third VDP1 slowdown for Gouraud shading on a test of several hundred untextured polygons" width="440" height="1045" size="document" title="A useful number, with an important limit" caption="Q&A cropped from [DevelopMental, April 1996](https://antime.kapsi.fi/sega/files/DTS-0496.pdf), PDF p. 3. The author did not establish the cost for textured polygons." %}

For a cheaper flat-lighting effect, the same answer suggests colour calculation between paletted sprites and the line screen, with a selectable ratio per sprite [^14]. It is a different visual technique with different constraints, rather than a drop-in replacement for Gouraud interpolation.

---
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
[^7]: Sega DTS, [Technical Bulletin 44 - Shuttle Mouse Data Format](https://antime.kapsi.fi/sega/files/ST-TECH-44.pdf), 1 July 1996.
[^8]: Sega DTS, [Technical Bulletin 45 - Saturn Keyboard Data Format](https://antime.kapsi.fi/sega/files/ST-TECH-45.pdf), 10 July 1996.
[^9]: Sega DTS, [DevelopMental, November 1996](https://antime.kapsi.fi/sega/files/DTS-1196.pdf), p. 4, "1996's Best Known A-Bugs".
[^10]: Sega DTS, [DevelopMental, January/February 1997](https://antime.kapsi.fi/sega/files/DTS-0197.pdf), p. 3, "DMA Programming" FAQ.
[^11]: Sega DTS, [Saturn Technical Bulletins](https://antime.kapsi.fi/sega/files/Sattechs.pdf), Bulletin 12, "SCU DMA, Boot ROM, and Vblank Precautions," PDF p. 54.
[^12]: Sega DTS, [Saturn Technical Bulletins](https://antime.kapsi.fi/sega/files/Sattechs.pdf), Bulletin SOA-2, "Casting VDP1 Shadows on VDP2 Backgrounds," PDF pp. 135-137.
[^13]: Sega, [Saturn SMPC Sample Program User's Manual](https://antime.kapsi.fi/sega/files/ST-214-111594.pdf), pp. 3-6 on sample modes and the port monitor.
[^14]: Sega DTS, [DevelopMental, April 1996](https://antime.kapsi.fi/sega/files/DTS-0496.pdf), PDF p. 3, VDP1 Gouraud-shading Q&A.
