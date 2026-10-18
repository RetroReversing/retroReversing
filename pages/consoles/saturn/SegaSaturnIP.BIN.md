---
layout: post
tags:
- saturn
- sega
title: Sega Saturn IP.BIN (Initial Program)
category: saturn
image: /public/images/saturn/Sega Saturn IP.bin.jpg
twitterimage: http://www.retroreversing.com/public/images/saturn/Sega Saturn IP.bin.jpg
permalink: /sega-saturn-initial-program-ip
redirect_from:
  - /sega-saturn-initial-program-ip/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn IP.BIN (Initial Program)
    url: #
recommend: saturn
editlink: /consoles/saturn/SegaSaturnIP.BIN.md
updatedAt: '2026-10-18'
---
<!-- cspell:words smpsys SMPSYS AREJ AREU IPGNUSRC IPBUILD -->

The disc's system area begins with the Boot System Initial Program, commonly extracted as `IP.BIN`. Its size is recorded in the system ID and can vary up to **16 sectors**, or 32 KiB of user data, under Sega's disc format specification [^2]. In this post we will explore what it is, the purpose of it and how it works.

# What is it for?
After the Sega Saturn's internal BIOS code has been executed the CPU will jump to a location in the IP.BIN which will start the setup for game specific settings and meta data such as the game name and version information.

So you can think of it as both Meta Data for the inserted game and also as the starting point for the CPU.

---
# What does it contain?
Most of the IP.BIN is the same between games with just a few settings changed such as the:
* Maker ID
* Product Number/Version
* Release Date
* Game Name

Content that stays the same between games include:
* Security code (has to be the exact contents of `SYS_SEC.OBJ`)
* Area code (has to be one of the `SYS_ARE*.OBJ` files )

## Official Specification 
The specification for the Sega Saturn CD Format including the IP.BIN is defined in the Official SDK documentation as "Disc Format Standards Specification Sheet" [^2].

---
# How was it created?
In order to create an IP.BIN for their game developers needed to link together multiple machine code object files along with their own assembly code.

These files included:
* sys_id.obj (game specific meta data assembled from sys_id.src)
* sys_sec.obj (Saturn security code check)
* sys_are*.obj (Region specific code)
* sys_init.obj 
* smpsys.obj (Sample Application initial Program compiled from SMPSYS.C)

## System ID (Meta Data)
An assembly source file called **SYS_ID.SRC** is provided by the official SDK for developers to modify and assemble with their own meta data set (such as Game title and version information).

Developers would modify that file and assemble it with the provided assembler to result in a **sys_id.obj** file. This file is then linked at the start of the IP.BIN executable.


## Security Code
The Security code in the IP.BIN file has to be the contents of a compiled object found in the SDK, otherwise the Saturn will not boot the CD. Presumably this is to allow suing unlicensed developers for copyright infringements if it is included on their CDs.

The compiled object file is located in the official SDK at path:
```
\SATURN\SEGALIB\LIB\SYS_SEC.OBJ 
```

It will be interesting to see if Homebrew Saturn SDKs include this file or not.

## Area Codes
In order to region lock games, sega requires developers to include special compiled object files depending on which region they want to target, there are also contained in the`\SATURN\SEGALIB\LIB\` directory of the SDK and contains:
* SYS_AREJ.OBJ - Japan
* SYS_ARET.OBJ - Asia NTSC
* SYS_AREU.OBJ - North America NTSC
* SYS_AREE.OBJ  - PAL regions such as Europe

You can have multiple area code objects linked, does this mean there are region free Saturn games available?

## Linking it all together
There is an example linker file called **smpsys.lnk** which has the following contents:
```
Input sys_id.obj
Input ..\segalib\lib\sys_sec.obj
Input  ..\segalib\lib\sys_arej.obj
Input ..\segalib\lib\sys_aret.obj
Input ..\segalib\lib\sys_areu.obj
Input ..\segalib\lib\sys_aree.obj
Input ..\segalib\lib\sys_init.obj
Input ..\smpsys.obj
STart SYSID (06002000)
Output sys_ip.abs
Print sys_ip.map 
EXIT
```

When this linking script is executed it creates a file called **sys_ip.abs** which can be renamed to IP.BIN.

---
## What the preserved GNU build adds
Sega's [IPGNUSRC package](https://antime.kapsi.fi/sega/files/IPGNUSRC.zip) includes `SYS_ID.SRC`, `SMPSYS.C`, a makefile, object files, and `IPBUILD.TXT`, a November 1996 guide to building an IP with GNU tools [^3]. The guide says to compile an IP for each product rather than patch or reuse one from another disc. Normally the developer could customise the system ID by editing `SYS_ID.SRC`; the makefile then assembled and linked the parts into `IP.BIN`.

The package also clarifies what the red and black developer key discs tested. A red disc was for Sega-brand IPs and a black disc for third-party IPs. Within either class, a particular key disc was not paired one-to-one with a particular game. The IP still needed area symbols matching the target Saturn's region. A third-party code was recorded in the IP for submission review, but the guide says that code itself was not essential to booting [^3]. This makes the disc's system ID and area-code objects more useful clues than a supposed unique key-disc match.

Finally, the program's load and run addresses had to agree with the entry address expected by the IP. The archive's guide recommends keeping them the same and gives Sega's default as `0x06010000` [^3]. Sega's boot-system bulletin explains the timing: the boot ROM loads the first-read file while the licensed Sega logo is displayed, but does not execute that file; the application initial program runs after the area code [^4]. A bad first-read address could therefore look like a boot failure before the game's own code visibly starts.

## Creating it for Homebrew development
The Homebrew version for the Sega Saturn SDK has its own tool for creation called the IPMaker.

If you are interested in how it works you can check out some of the source code below:
[IPMaker source Code - SystemID.c](https://github.com/SaturnSDK/Saturn-SDK-Tool-IPMaker/blob/master/Source/Common/Source/SystemID.c)


---
# Inspecting IP.BIN in File Lab
<div class="emoji">🧪</div>
[File Lab](/file-lab) decodes a Saturn Initial Program in the browser. Drop an `IP.BIN`, or the MODE1/2352 data track, and open the Initial Program tab.

The tab reads the system ID (title, product number, version, date, area symbols, and peripherals), checks the boot ROM limits on IP size and the 1st read address, and lists the SH-2 boot code at the SDK link address `0x06002000`. The security code is the fixed `SYS_SEC.OBJ` block at file offset `0x100`. Area objects and the application initial program follow it at `0xE00`.

The same fields are highlighted in the Hex tab, using raw sector offsets when the file is a 2352-byte MODE1 track.

---
# References
[^1]: [About IP.BIN SegaXtreme](https://segaxtreme.net/threads/about-ip-bin.6229/)
[^2]: [Disc Format Standards Specification Sheet](https://antime.kapsi.fi/sega/files/ST-040-R4-051795.pdf)
[^3]: Sega DTS, [`IPGNUSRC.zip`](https://antime.kapsi.fi/sega/files/IPGNUSRC.zip), especially `IPGNUSRC/IPBUILD.TXT`, `SYS/SYS_ID.SRC`, and `SYS/MAKEFILE`.
[^4]: Sega DTS, [Saturn Technical Bulletins](https://antime.kapsi.fi/sega/files/Sattechs.pdf), boot-system explanation in the IP creation bulletin, pp. 43-44 of the PDF.
