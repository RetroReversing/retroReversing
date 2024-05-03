---
permalink: /atarijaguar
layout: post
console: atarijaguar
title: Atari Jaguar Reverse Engineering
consoleimage: /public/consoles/Atari Jaguar.png
thumbnail: /public/consoles/Atari Jaguar.png
image_: /public/images/nes/Atari Jaguar.jpg
twitterimage_: https://www.retroreversing.com/public/images/atari/Atari Jaguar.jpg
excerpt: Awesome list of Atari Jaguar Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Atari Jaguar
    url: #
recommend: 
- atari
- jaguar
recommendTitle: All Atari Jaguar Posts
editlink: ../categories/consoles/AtariJaguar.md
updatedAt_: '2024-05-03'
---

# Introduction
Welcome to our page dedicated to Atari Jaguar reverse engineering! 
The Atari Jaguar is a classic video game console that was first released in North America suring November 1993. 

If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. On this page, we've compiled a list of links to other pages that cover various topics related to Atari Jaguar reverse engineering. 

Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. So grab your controller, fire up your Atari Jaguar, and get ready to dive into the exciting world of Atari Jaguar reverse engineering!

---
# Development Kit

## Hardware used for Alien vs predator
In an interview for Wireframe magazine[^1] **Jane Whittaker** talks about all the hardware sent over to her parents house in Yorkshire which gives us an insight into the hardware required to make Atari Jaguar games.

They (Jane and Mike Beaton) moved from Atari's San Fransisco office back to the UK due to home sickness and Atari supported this by sending development hardware all the way to the UK to set up a make shift office in Jane's parents house.

They got sent **Atari TT** machines and monitors, prototype Atari Jaguars, a couple of PCs and presumably all the cables to fit everything together [^1].

This was how they developed Alien vs Predator for the Atari Jaguar.

## Official Atari Jaguar Development Manual
The official "Atari Jaguar Development Manual" is available over on **archive.org** with thanks to **Lars Hannig** (Starcat Developments) for obtaining, scanning and organising the hundreds of pages.


It comes with:
* M68000 8-/16-/32-Bit Microprocessors User’s Manual Ninth Edition written by MOTOROLA in 1993
* **ALN Linker** - 11 pages of linker documentation from 5th June 1995
* Appendix A - Frequently AskedQuestions About Jaguar
* Appendix B - Programming Guidelines
* Appendix D - Jaguar Development Standards
* Appendir E - Jaguar Software Experience Approved Manufacturer Production Guidelines
* Appendix F - Additional Documentation - just mentioned DB the Atari debugger.
* **The Jaguar CD-ROM** - 40 pages
* **Cinepak For Jaguar** - 37 pages
* **DB: The Atari Debugger** - 84 pages
* **Getting Started** - 8 pages
* **Hardware Bugs & Warnings** - 6 pages
* **Libraries** - 65 pages
* **Madmac Macro Assembler** - 39 pages
* **QSound For Jaguar** - 8 pages
* **Jaguar Sample Programs** - 13 pages
* **Software Reference Manual - Tom & Jerry** - 103 Pages from 7th June 1995
* **Software Reference Manual - Tom & Jerry Revision 8** - 141 Pages from 28th February 2001
* **Overview of Jaguar Hardware & Architecture** - 15 pagea
* **Technical Reference** - 31 pages
* **Tools** - 21 pages
* **Atari Jaguar Voice Modem** - 22 pages
* **Jaguar Workshop Series** - 22 pages

---
# File Formats
The table below lists common Atari Jaguar file formats encountered when developing software for the platform:

Extension | Description
---|---
.3DS | A 3D Object file for Autodesk 3D-Studio. Use the 3DS2JAG toolt o convert into sourcecode compatible with the Jaguar 3-D Graphics library.
.ABS | DRI/Alcon format absolute location executable program file. Output from ALN Linker.
.ASC | ASCII version of Jaguar Synth sound patch. This is a MADMAC sourcecode file that is typically included by one of the source code files used with the Jaguar Synth and Music driver.
.AVI | Microsoft Video For Windows filmfile.
.BIN | Binary data. This could be a binary image of program code, data, a picture, or whatever. The LTXCONV utility used with the GASM assembler creates .BIN files containing the combined TEXT &DATA sections of the assembledfile(s).
.BPG | BPEG Compressed image file. BPEG is the current flavor of JPEG used with the Jaguar.
.С |  sourcecodefile
.CCR | Chunky-format 16-bit CRY Cinepak film
.СМР | Compressed sound sample, created from a raw 16-bit (stereo or mono) sound sample file using the SNDCMP utility.
.COF | Common Obiect File absolute location executable program file. Output from ALN Linker
.CRG | Chunky-format 16-bit RGB Cinepak film
.CRY | Madmac source code file for a CRY-format graphics image, typically converted from Targa format using the TGA2CRY utility.
.DAS | DSP assembly lanquage source. This extension is used for files that contain source exclusively for the DSP, to be assembled by either MADMAC or GASM.
.DB | Debugger script file
.DTA | Binary image of program DATA segment. Created by **FILEFIX** utility
.ENV | Envelope definition file. Used by the Jaguar Synth & Music driver
.GAS | GPU assembly language source. This extension is used for files that contain source exclusively for the GPU, to be assembled by either MADMAC or GASM.
.INC | Madmac/GASM include file. Typically used to contain equartes and macro definitions.
.J3D | 3D object data in MADMAC assembler source format. Output from the 3DS2JAG utility. Must be compiled by MADMAC.
.JAG | Jaguar JPEG compressed graphics image. Created by the JAGPEG utilities. Note that JAGPEG has been replaced by the BPEG package. Also, the 3DS2JAG utility that converts Autodesk 3D Studio into source code format for the Jaguar 3D libraries once also used the .JAG extension (it has since beenchanged to use .J3D).
.LTX | GASM assembler output file. The GASM assembler does not output files that are compatible with the ALN linker, so LTX files must be converted using the **LTXCONV** utility.
.LZJ | LZSS Compressed data file. This is a binary file containing raw LZsS-compressed data. It ix created by the **LZJAG** utility. This is linked into your program, and then decompressed using the DELZJAG routines.
.MID | MIDI score file. This is a MIDI file output by a MIDI sequencer. You feed these files to the **PARSE** utility to create a musicscore usable by the Jaguar Synth & Music driver
.O | 68000/mixed object module. Object file created after assembling a .S file with **MADMAC**. Some of the conversion utilities create MADMAC source code files that don't always end in filename extensions of .S, and they may also use the O. filename extension after being assembled.
.OJ | DSP (JERRY) object module. Object file created after assembling a.DAS file with **MADMAC** (Note that GASM does not create standard object modules)
.OD | Some older projects have used an extension of .OD for DSP object code. However, the .OJ extension is preferred.
.OT | GPU (TOM) object code. Object file created after assembling a .GAS file with **MADMAC** (Note that GASM does not create standard object modules.)
.OG | Some older projects have used an extension of .OG for GPU object code. However, the .OG extension is preferred.
.OUT | Parsed MIDI file, output by the **PARSE** and **MERGE** utilities.This is really a MADMAC source code file which is normally assembled into an object file using a .SCR extension
.PTC | Jaguar Sound Tool Patch File. These are the binary patch files used by the Jaguar Sound Tool and the Jaguar Synth.
.ROM | Alpine Board / ROM Image File. Created by **FILEFIX** utility, or saved from Alpine board using the debugger.
.S | 68000/mixed assembly language source. This extension is used for files that contain source either exclusively for the 68000 or mixed source for any combination of 68000, GPU, and/or DSP.
.SCR | Compiled MIDI score file. This is an object file, the same as .O files, except with a different extension to highlight the idea that they contain MUSIC score information. Files with an .SCR extension are to .MID files as .S files are to .O files. This file extension is also used for some Cinepak Movie Files (Smooth CRY-format)
.SRG | Smooth format 16-bit RGB Cinepak film
.SYM | Symbol Table File. Created by **FILEFIX** utility. This is the same basic format as an executable program file, except with empty TEXT and DATA sections. Only the symbol table has information in it.
.TGA | Targa picture file. The Targa format is a popular format for 16-bit and 24-bit RGB true color graphics images. Can be converted into Jaguar CRY-format using the **TGA2CRY** utility.
.TX/.TXT | Binary image of a program's TEXT segment. Created by the **FILEFIX** utility. The current version of FILEFIX produces files with a "TX" extension. However, older versions created files with the ."TXT" extension. Because the TXT extension is also used for ASCII text files, this was changed to avoid conflicts.
.WAV | Waveform definition. Used by the Jaguar Synth & Music driver.


---
# References
[^1]: Wireframe issue 2 Page 26
