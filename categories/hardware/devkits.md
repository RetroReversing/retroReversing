---
permalink: /hardware/devkits
layout: post
title: Introduction to Development Kits (Hardware)
category: devkit
image: /public/images/categories/Console Development Kit Hardware.jpg
twitterimage: https://www.retroreversing.com/public/images/categories/Console Development Kit Hardware.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Hardware
    url: /hardware
redirect_from:
  - /devkit
  - /devkits
  - /dev-kit
  - /developmentkit
  - /development-kit
  - /hardware/devkits/
editlink: ../categories/hardware/devkits.md
recommend: devkit
updatedAt: '2026-10-23'
tags:
  - devkit
  - hardware
---

# Introduction to Development Kits (Hardware)
<section class="postSection">
    <img src="/public/images/categories/Console Development Kit Hardware.jpg" alt="Console development hardware" class="wow slideInLeft postImage" />

 <div markdown="1">
A development kit lets a game run on hardware close to its target console while a programmer works from a separate computer. That mattered especially when a contemporary PC could not reliably emulate a new machine. The kit might be a modified console, a board on a desk, or a tower connected to a host workstation. It might load a build into memory, expose a debugger, emulate a cartridge or disc, or provide a way to test a nearly finished release.

The hardware below shows how different those arrangements could be. Some kits arrived while the retail design was still changing; others were built for testers or artists as well as programmers. Console makers, specialist suppliers, and individual studios all contributed equipment, so a single platform can have several quite different development setups.
 </div>
</section>

## What did the kit add to the development loop?
Sony's [1997 Net Yaroze Start Up Guide](https://psx.arthus.net/sdk/NetYaroze/Net%20Yaroze%20Official%20-%20Startup%20Book.pdf) describes a compact example: compile C on a PC, connect it to the PlayStation by serial cable, then use SIOCONS to download and run the executable. The boot disc and access card prepare the console to receive it [^1].

Nintendo's [Introduction to the Nintendo 64](https://ultra64.ca/files/documentation/nintendo/Nintendo_64_Intro_to_the_N64.pdf) describes Partner-N64 units for debugging on either PCs or SGI workstations; the network model links an Indy or O2 to a modified N64 and debugger body [^2]. Sega's [Dreamcast getting-started guide](https://github.com/Kochise/dreamcast-docs/blob/master/SDK/EXES/INSTALL%20KATANA%20SDK/INPUT/R10.1_000518/GetStart.txt) shows another arrangement: a Set 5 dev station with a debug adapter and GD-ROM emulator. GD Workshop could lay out a disc image on the development system's hard drive before a GD-R was burned [^3]. These manuals help explain why a surviving "dev kit" may be more than the console-shaped box in a photograph.

---
# Nintendo Console Development Kit Hardware
Intelligent Systems built several of the Nintendo kits collected here, but the links also lead to other suppliers and in-house equipment. The [NES hardware guide](/famicom-nes-development-kit), for example, records more than one studio-specific setup. Look for the host connection and the way a build was loaded, not just the maker stamped on the case.

## Nintendo Entertainment System (NES/Famicom)
The Famicom and NES page compares official equipment with several systems assembled or adapted inside studios.

{% include_cached link-to-other-post.html post="/famicom-nes-development-kit" description="Official Famicom equipment and in-house NES development systems." %}

## Super Nintendo Entertainment System (SNES)
The SNES trail runs from Intelligent Systems hardware to Ricoh's SF Box and the EPROM cartridges used for tests.

{% include_cached link-to-other-post.html post="/super-famicom-snes-development-kit" description="Intelligent Systems, Ricoh SF Box, prototype cartridges, and studio hardware." %}

## Nintendo 64 (Ultra64)
N64 development could involve an SGI workstation or a PC, a debugger, and hardware connected to the console [^2].

{% include_cached link-to-other-post.html post="/official-n64-devkit" description="N64 workstations, Partner-N64, IS-Viewer, and prototype cartridges." %}

### 3rd Party Nintendo 64 Development Kits
Bung's Doctor V64 could load software for testing, though it was also widely used to back up cartridges. Its place in this list shows how development and consumer backup hardware can overlap.

The [N64 hardware guide's Doctor V64 section](/official-n64-devkit#bung-doctorv64) covers its disc drive, PC connection, and cartridge backup role.

SN Systems' Maestro64 gave musicians a way to test sound on N64 hardware. It belongs beside the general-purpose kits because audio work had its own hardware needs.
{% include_cached link-to-other-post.html post="/maestro64" description="SN Systems cartridge for testing Nintendo 64 music and sound." %}


## Nintendo GameCube (Dolphin)
GameCube development did not revolve around one box: the linked page distinguishes NPDP-GDEV for development, GBOX for testing, and writers for prototype media.

{% include_cached link-to-other-post.html post="/gamecube-development-kit-hardware" description="GameCube prototype boards, NPDP development units, readers, and writers." %}

## Nintendo Wii
The Wii hardware page follows the transition from prototype setups to later development units.

{% include_cached link-to-other-post.html post="/nintendo-wii-development-kit" description="A survey of Nintendo Wii development hardware." %}

---
# Nintendo Handheld Development Kit Hardware
These pages show that handheld development also needed dedicated capture, sound, and cartridge-writing hardware, not just a modified portable console.

## Nintendo Game Boy (DMG & GBC)
Game Boy work could use an ICE debugger, character-editing hardware, or a Wide Boy to show handheld output on a television.

{% include_cached link-to-other-post.html post="/gameboy-development-kit-hardware" description="Game Boy ICE, Wide Boy, character tools, and Color development units." %}

## Nintendo Game Boy Advance (GBA)
The GBA hardware collection includes early target boards, an emulator, and separate MIDI, capture, and character tools.

{% include_cached link-to-other-post.html post="/game-boy-advance-development-kit" description="GBA target boards, emulator, capture, MIDI, and cartridge hardware." %}

## Nintendo DS (NDS)
The DS guide separates the IS-NITRO emulator from capture, video, sound, and cartridge-writing equipment.

{% include_cached link-to-other-post.html post="/nintendo-ds-development-kit" description="IS-NITRO emulator, capture, writer, and other DS development devices." %}

## Nintendo 3DS
An early CTR target board makes a striking contrast with later Partner-CTR debuggers and tethered handhelds.

{% include_cached link-to-other-post.html post="/nintendo-3ds-development-kit" description="CTR target boards, Partner-CTR systems, and rewritable cartridges." %}

---
# SEGA Development Kit Hardware
Sega development setups changed considerably from one console to the next. The links below include specialist third-party hardware as well as Sega-branded equipment; the Saturn alone had several approaches.

## SEGA Master System
Krisalis used a setup that spans Master System and Game Gear development, including a Z80 toolchain.

{% include_cached link-to-other-post.html post="/krisalis-development-kit-(sega)" description="Krisalis Master System and Game Gear development hardware and tools." %}

## SEGA Game Gear
The Game Gear page ranges from a development board and modified handheld to Z80 emulation hardware.

{% include_cached link-to-other-post.html post="/sega-game-gear-devkit" description="Game Gear boards, modified consoles, Z80 tools, and test cartridges." %}

## SEGA Mega Drive
For Mega Drive work, the linked collection distinguishes 68000 and Z80 emulators, loaders, and prototype cartridges.

{% include_cached link-to-other-post.html post="/sega-mega-drive-genesis-development-kit" description="Mega Drive CPU emulators, loaders, and prototype cartridges." %}

## SEGA Saturn
The Saturn page follows the early programming box and later CartDev arrangements, including their debugging and virtual-CD workflows.

{% include_cached link-to-other-post.html post="/sega-saturn-programming-box" description="Saturn programming boxes, CartDev, debugger, and virtual-CD workflow." %}

SN Systems also supplied a Saturn setup as part of its multi-platform PSY-Q toolchain. It offers a useful contrast with the official programming box.

{% include_cached link-to-other-post.html post="/psyq-sega-saturn" description="SN Systems Saturn hardware and the PSY-Q development environment." %}

## SEGA Dreamcast
The Dreamcast dev box is arguably Sega's most capable kit, which makes the console's short lifespan a shame. Its GD-ROM emulator let a team test a disc layout from the development system's hard drive before committing it to physical media [^3].

{% include_cached link-to-other-post.html post="/Sega-Dreamcast-Katana-Development-Kit" description="Katana dev box, GD-R writer, and Dreamcast test equipment." %}

---
# Sony Development Kit Hardware
Sony's kits range from the relatively approachable Net Yaroze to substantial professional systems. Their hardware often made testing convenient, even when programming a later machine such as the PS3 could still be painful. The PlayStation links below make the differences between those setups visible.

## Sony PlayStation Portable
The PSP page distinguishes development units from testing tools and the Commander Arm setups.

{% include_cached link-to-other-post.html post="/official-psp-devkit" description="PSP development units, testing tools, and Commander Arm." %}

## Sony PlayStation 1
Professional PlayStation systems supported workflows beyond the consumer-oriented Net Yaroze package below.

{% include_cached link-to-other-post.html post="/official-playStation-devkit" description="Professional PlayStation development and debugging hardware." %}

Net Yaroze gave hobbyists a Sony-supported route into PlayStation development. It was more limited than the professional kits, but its PC-to-console workflow was real, and some excellent games came out of it [^1].

{% include_cached link-to-other-post.html post="/net-yaroze" description="The consumer PlayStation kit, its software, cable, and manuals." %}

## Sony PlayStation 2
The PS2 page follows early prototypes, the DTL-T10000 development tool, disc emulation, and TEST stations.

{% include_cached link-to-other-post.html post="/playstation-2-development-hardware" description="PS2 prototypes, development tools, disc emulation, and TEST stations." %}

## Sony PlayStation 3
The PS3 collection begins with Cell evaluation systems and continues through reference and test tools.

{% include_cached link-to-other-post.html post="/official-playStation3-devkit" description="PS3 Cell evaluation, reference, and test systems." %}

---
# Microsoft Development Kit Hardware
Microsoft entered this list with Xbox, bringing a familiar PC development environment to its console work. The Xbox and Xbox 360 posts show several kinds of development, test, and stress hardware, each made for a different part of the production cycle.

## Microsoft Xbox
The Xbox page includes debug kit variants and how prototype builds could be recovered from them.

{% include_cached link-to-other-post.html post="/microsoft-xbox-development-kit" description="Original Xbox debug hardware and prototype recovery." %}


## Microsoft Xbox 360
The Xbox 360 page traces alpha and beta XeDK units, later retail-shaped kits, and dedicated test and stress hardware.

{% include_cached link-to-other-post.html post="/microsoft-xbox-360-development-kit" description="Xbox 360 XeDK, development, test, and stress hardware." %}

---
# All Posts tagged with Development Kit
The full devkit-tagged index continues beyond the console families highlighted above.

<div>
{% include console.html %}
</div>

---
# References
[^1]: [Sony Computer Entertainment, Net Yaroze Start Up Guide (February 1997)](https://psx.arthus.net/sdk/NetYaroze/Net%20Yaroze%20Official%20-%20Startup%20Book.pdf)
[^2]: [Nintendo, Introduction to the Nintendo 64, chapters 6-7](https://ultra64.ca/files/documentation/nintendo/Nintendo_64_Intro_to_the_N64.pdf)
[^3]: [Sega, Getting Started with Dreamcast Release 10](https://github.com/Kochise/dreamcast-docs/blob/master/SDK/EXES/INSTALL%20KATANA%20SDK/INPUT/R10.1_000518/GetStart.txt)
