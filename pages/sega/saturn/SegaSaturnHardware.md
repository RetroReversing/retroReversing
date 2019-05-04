---
layout: post
tags: 
- consolearchitecture
- segasaturn
- hardware
- saturn
- sega
- ss
title: Sega Saturn Hardware Architecture
thumbnail: /public/consoles/Sega Saturn.png
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
editlink: /sega/saturn/SegaSaturnHardware.md
---

Image from EDGE magazine issue 23
<img src="/public/magazine/SegaSaturnMotherboard.EDGE.23.png" />
1. 2x Hitachi SH·2s @28.6MHz, 25 MIPS
2. 16Mbit SDRAM for SH2s
3. 12Mbit SDRAM for VRAM and frame buffer
4. 512K sound DRAM for 68ECOO
5. 32K SRAM for battery back·up
6. 512K IPL (initial program loading) ROM - initiates the Saturn's boot-up sequence
7. VDP1 32bit video display processor, sprite processor and texture-mapping engine with dual 256K frame buffers
8. VDP2 32bit video display processor with five simultaneous scrolling backgrounds and two simultaneous rotation fields
9. Processor controller & LSI for graphics
10. Saturn Custom Sound Processor (SCSP). Contains Yamaha FH·1 DSP (11.3 MHz) and DRAM controller for sound processor
11. Sound CPU - Motorola 68ECOO @22.6 MHz
12. System control unit @14.3 MHz - connects the Saturn's three buses 
13. System manager and peripheral control - 4bit Hitachi chip including battery back·up
14. Crystal oscillator
15. Integrated circuit clock controller 
16. Digital to analogue converter
17. RGB encoder (made by Sony)
18. Cartridge slot
19. Connector for joypads
20. Connector for CD interface
21. SH·1 processor for CD drive
22. MPEG interface
23. CD drive board interface
24. 100-pin CD drive board connector 25 Double-speed JVC CD-ROM drive with 320Kjsec data transfer rate
 [^1]

# References
[^1]: Edge (UK) issue 23
