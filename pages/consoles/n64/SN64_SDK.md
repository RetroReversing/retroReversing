---
layout: post
tags: 
- n64
- sdk
- snsystems
title: SN64 - Nintendo 64 Software Development Kit (SDK)
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 SN64 Software Development Kit.jpg
permalink: /sn64-sdk-sn-systems
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: SN64 - Nintendo 64 Software Development Kit (SDK)
    url: #
recommend: n64
editlink: /consoles/n64/SN64_SDK.md
updatedAt: '2020-06-27'
---

SN64 was a software development kit for the Nintendo 64 created by `SN Systems` and was especially popular with 3rd party game developers.

# Introduction
<section class="postSection">
    <img src="/public/N64/SN64_Devkit_By_ChrisCor.jpg" class="wow slideInLeft postImage" />
    <img src="/public/N64/SN64_Devkit_By_ChrisCor2.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Sn Systems are a company that have always specialised in creating excellent tools for game developers. Their most popular product during the N64 lifecycle was called PSYQ and targeted Sony PlayStation and Sega Saturn consoles. 

It was inevitable that SN Systems would create a SDK for the newly announced Ultra 64 to target the 3rd party development market as an alternative to Nintendos own offering. 

This made it a really popular choice for 3rd party game developers as it was slightly easier to port code between the consoles using the SDK.

SN64 went under a multitude of different names as SN Systems were constantly re-branding it, these include:
* N64Win95 - Probably a popular name before the official PartnerN64 came out
* SN64 - Most common name
* Psy-Q N64 - Name in some of the development tools such as Assembler
* Pro-DG - To align with their other development tools late in the lifecycle of the N64.

Images on the left of the Development kit hardware are courtesy of ChrisCor on Twitter who kindly gave permission for us to include his photos on this page you can check out his Twitter here: [ChrisCor (@Jackhead_ASG) / Twitter](https://twitter.com/Jackhead_ASG) [^1].

</div>
</section>

---
# Contents of the SDK (106)
An early version of SN64 was released in the "Oman Archive" with a date of February 1997. It wasn't specifically stated but the files at the top level of the Oman archive with the Feb 97 date are all from the SN64 development kit.

This SDK is version 106 which is the 10th release and the 6th patch and was released in early 1997.

## Index files
These files are legitimately useless, why? Well they should list the contents of the folder but they actually only list themselves. They don't give a single other filename that should be in the directory, total waste of space.
`00_INDEX.HTM`
`00_INDEX.TXT`

## Documentation Files

Name | Description
---|---
README.zip | Contains documentation for the Psy-Q debugger (Version 2, Release 10, Patch Level 6) in TXT and RTF formats 

## Windows Executables

Name | Description
---|---
SETCSUM.zip | Contains SETCSUM.exe
SETCSUM.exe | Program to Set checksum and entry point for your ROM image
PSYLINK3.zip | Contains psylink32.exe
PSYLINK32.exe | The PSYQ 32 bit linker
PSYLIB2.zip | Contains PSYLIB2.exe
PSYLIB2.exe | The PSYQ SDK Librarian
ELFCONV.zip | Contains ELFCONV.exe from December 1996
ELFCONV.EXE | Convert resulting ELF to N64 executable format
CCN64.zip | Contains CCN64.exe from January 1997 
CCN64.exe | C compiler for N64
REL106.exe | PSYQ Release setup
PAT106.exe | PSYQ Patch setup
N64104.exe |
LOADBIOS.exe | Program to load BIOS on to Sn64 cartridge 

---
## GNUN6432.zip
Contains the PsyQ GNU C/C++ compiler toolchain for Nintendo 64:
* CPPN64.exe - C++ Compiler
* CC1N64.exe - C compiler
* CC1PLN64.exe - Linker?

## N6432.zip
This archive contains the **32bit SN64 SDK** from December 1996 that run under **Windows 95**. Many of these are the same as the files in the Windows Executables section but from a slightly earlier date.

These files would normally be located in the developers **C:\** drive at location `c:\n64\bin32`.

The Full List of files contained in the archive are included below:

| Name          | Modified   | Size   | Description                            |
| ------------- | ---------- | ------ | ------------------------------- |
| TBIOS2.COM    | 28/11/1996 | 17 KB  | BIOS replacement for `psybios` for N64 version only  |
| asmn6432.exe  | 12/12/1996 | 134 KB | 32bit N64 Assembler for windows   |
| asn6432.exe   | 12/12/1996 | 89 KB  | Another assembler `Psy-Q ASN64 version 2.55`   |
| ELFCONV.EXE   | 12/12/1996 | 57 KB  | Convert resulting ELF to N64 executable format |
| PSYMAKE.COM   | 12/04/1995 | 19 KB  | Fork of Make by SN Systems known as PSYMake (runs makefiles) |
| RUN.EXE       | 24/10/1996 | 5 KB   | Standard PSYQ program to load executables on to cartridge   |
| CCNG6432.EXE  | 29/11/1996 | 64 KB  | N64 C compiler |
| KANJI.COM     | 30/06/1995 | 512 B  | Program that converts Kanji from one format to another |
| RUNCART.EXE   | 22/11/1996 | 12 KB  | Program that loads a bios on to the SN64 cartridge that plays the pass through game connected to the cartridge   |
| PSYLINK32.EXE | 02/12/1996 | 70 KB  | PSYQ Linker |
| SETCSUM.EXE   | 28/11/1996 | 37 KB  | Program to Set checksum and entry point for your ROM image |
| LOADBIOS.EXE  | 22/11/1996 | 14 KB  | Program to load BIOS to the SN64 cartridge |
| PSYLIB2.EXE   | 03/12/1996 | 52 KB  | PSYQ Librarian |
| PSYQ.INI      | 02/12/1996 | 132 B  | Configuration INI file for the PSYQ SDK |
| DBUNG64.EXE   | 20/11/1996 | 161 KB | ?   |
| README.N64    | 25/11/1996 | 637 B  | Standard Readme with information about the files   |
| test          | ---        | 23 KB  | Folder containing example project |


### Test folder inside N6432.zip
There is a folder inside the zip simply called `test` that contains a basic initialise example for N64.

Name | Description
---|---
| PSYQ.OBJ      | 26/11/1996 | 11 KB  | Compiled Object file |
| PSYQ.H        | 29/11/1996 | 34 B   | Header file that only exports one function called `init_debug` |
| TEST.LNK      | 29/11/1996 | 4000 B | Link file configuration for the order in which to link files into the final executable |
| MAKEFILE.MAK  | 29/11/1996 | 294 B  | Makefile to run the example |
| SNMAIN.S      | 29/11/1996 | 814 B  | Assembly code for the entry point for the game |
| TEST.C        | 12/12/1996 | 805 B  | Simple C code to initialise the N64 |
| PSYQDBG.OBJ   | 12/12/1996 | 9 KB   | Compiled Object file (debug version) |


---
# References
[^1]: [ChrisCor (@Jackhead_ASG) / Twitter](https://twitter.com/Jackhead_ASG)
