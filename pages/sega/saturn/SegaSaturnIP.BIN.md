---
layout: post
tags:
- saturn
- sega
title: Sega Saturn IP.BIN (Initial Program)
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn IP.bin.jpg
twitterimage: http://www.retroreversing.com/public/images/saturn/Sega Saturn IP.bin.jpg
permalink: /sega-saturn-initial-program-ip/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn IP.BIN (Initial Program)
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnIP.BIN.md
---
The first 15 sectors (32KB) of a SEGA Saturn CD contains the Boot System Initial Program code known as IP.BIN [^1]. In this post we will explore what it is, the purpose of it and how it works. 

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

## Creating it for Homebrew development
The Homebrew version for the Sega Saturn SDK has its own tool for creation called the IPMaker.

If you are interested in how it works you can check out some of the source code below:
[IPMaker source Code - SystemID.c](https://github.com/SaturnSDK/Saturn-SDK-Tool-IPMaker/blob/master/Source/Common/Source/SystemID.c)


---
# References
[^1]: [About IP.BIN SegaXtreme](https://segaxtreme.net/threads/about-ip-bin.6229/)
[^2]: [Disc Format Standards Specification Sheet](https://antime.kapsi.fi/sega/files/ST-040-R4-051795.pdf)
