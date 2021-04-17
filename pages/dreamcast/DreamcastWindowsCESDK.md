---
layout: post
tags: 
- sega
- dreamcast
- sdk
- microsoft
title: Sega Dreamcast Microsoft Windows CE SDK
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/images/dreamcast/Dreamcast-WIndows-CE-SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/dreamcast/Dreamcast-WIndows-CE-SDK.jpg
permalink: /dreamcast-windows-ce
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: Sega Dreamcast Microsoft Windows CE SDK
    url: #
recommend:
- dreamcast
- sdk
editlink: /dreamcast/DreamcastWindowsCESDK.md
updatedAt: '2019-10-31'
---
<section class="postSection">
    <img src="/public/images/dreamcast/Dreamcast-WIndows-CE-SDK.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Originally called the Dragon SDK and planned to be the full Operating System (OS) of the dreamcast. However SEGA decided to go with their own limited BIOS with the Dreamcast instead of a fully functional OS. So to use WindowsCE on the Dreamcast game developers would have to bundle the entire Windows CE OS on the game disc [^2].

This means that in order to run the game the dreamcast would first boot into the file `0WINCEOS.BIN` on the GD-ROM disc and then it would load the game. This had a performance impact, reducing the resources the developers would have for the game, so lower memory, longer loading times and less performance for the actual game.

So why would developers use the Windows CE SDK instead of the more powerful Katana SDK?

The answer mainly comes down to the ease of porting PC games to the platform and the developers can use their prior windows knowledge instead of learning a completely new platform from scratch [^1].

This reduces development cost as much of the code from the PC version could be used with some modification and it would take less developer time to learn the Application programming Interfaces (API). So it was a trade-off that worked for less performance demanding games as they could be developed much quicker from a PC port [^1].

One example of a studio doing just that is a presentation from D. Michael Traub from Acclaim on porting the Quagmire engine to the Dreamcast, they used the WinCE SDK to port to the dreamcast and they found that it worked very well, claiming that it only took a month to port the engine thanks to the SDK.
</div>
</section>

---
# Porting issues from PC to DC
Even although the Windows CE SDK's main focus is to make it easy to port your game from Standard windows Direct X over to embedded platforms such as the Dreamcast, there were a few important compatibility issues that developers needed to take into account when porting their games.

Windows CE is Unicode only, so the game needs to be changed from ASCII.

---
# Executable format
Unlike the standard Katana SDK the game executables for dreamcast windows CE were actually in PE executable format. The game executable could be called anything with a `.EXE` extension but many games simply call it `GAME.EXE` which may have been the default.

These executable files are able to be opened in IDA Pro and radare2 for reverse engineering but most don't contain any debug symbols. 

{% include link-to-other-post.html post="/sega-dreamcast-game-debug-symbols" description="For games with debug symbols check out this post." %} 

---
# Tools Provided
The Windows CE SDK for dreamcast came with a tools folder which contains a few GUI-based programs for developers to help debug and optimise their games.

## GD Workshop
{% include link-to-other-post.html post="/dreamcast-gd-workshop/" description="For information about GD Workshop check out this post." %}

## Dreamcast Tool (dctool.exe)
<section class="postSection">
<img src="/public/images/dreamcast/dctool.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The dreamcast Tool is a useful program to connect from a PC to a dreamcast development system allowing you to do tasks such as boot an executable image, run Dtrace, show textures etc.
</div>
</section>


## Dreamcast Trace Tool (Dtrace) (dtview.exe)
DreamcastTrace or DTrace is a performance monitoring tool to allow developers to optimise their games to be as efficient as possible. It is unrelated to the well-known standard `DTrace` tool by Sun Microsystems.

## Image Configuration Tool (config.exe)
<section class="postSection">
<img src="/public/images/dreamcast/dreamcast_image_config.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
Unlike its name it does not relate to graphic images, instead it refers to Operating system images. This allows you to configure which modules will be included in your games version of the Windows CE Operating system.
</div>
</section>


## IP Maker Tool (ipmaker.exe)
This is a tool for creating the boot loader for the disc (IP) called `ip_drago.bin` since the codename for the Win CE SDK is dragon.

You give it the name of your main game executable (*.exe) and it will run that on playing the GD-ROM disc in a dreamcast.

## Profiler Tool (profcvt.exe)
The profiler is a tool to debug performance issues in your game executable's functions. This tool is vital to make a playable dreamcast game that also pushes the hardware limits without going below 30fps.

## Synthesizer Author Tool (SynthAuthor) (synthauthor.exe)
<section class="postSection">
<img src="/public/images/dreamcast/dreamcast_esynth.jpg" class="wow slideInLeft postImage" />

<div markdown="1">
The Synthesizer Author Tool is a program for sounds engineers to create a collection of instruments for use in the game music.
</div>
</section>


## Windows Debugger Tool (Windbg.exe)
This is a standard source-level debugger supporting breakpoint and variable value watching.

Also the file `NknoDbg.exe` is on the retail disc of a few retail games such as `Sega Rally 2`. But it is unconfirmed what this executable is and how it differs from the standard Windbg.exe tool.

---
# Utilities Provided
The Utilities differ from the tools as they all tend to be Command Line oriented and would normally be scripted and used as part of a automated build process.

## Audio Utilities
The following are tools used by sound engineers to convert between sound formats for use on the Dreamcast.

### DLS to Dreamcast ToneBank Converter Utility
(dls2tb.exe)
Converts .DLS files to the dreamcast specific .TB (Tonebank) files format.

### DLS to Sega ToneBank Converter Utility (dls2dcs.exe)
> What is the difference between this and the .TB converter?

### Wave Converter Utility (wavcon.exe) (Audio)
Converts 16-bit PCM wave files to 4-bit ADPCM files for playing on the dreamcast.

---
## Debugging Utilities

### Check RES Utility (checkres.exe)
Check resource files to look for duplicates or problems with resource files.

###  Debug Adapter Check (dacheck.exe)
Used to debug connection issues with the debug adapter.

### Dump Register Utility (dumpreg.exe)
Used for debugging it transfers the dreamcast CPU registers to your PC for debugging low-level assembly code.

### Profile Conversion Utility (profcvt.exe)
This tool is used for converting the output of the function profiler tool into a human-readable text file.

---
## Windows CE OS Image Management Utilities

### Make Image Utility (makeimg.exe)
A command line version of the image config tool, it allows you to build an Windows CE OS image and choose which modules are included. 

### ROM Image Builder Utility (romimage.exe)
> Not sure the difference between this and makeimg.exe

### Registry Compression Utility (regcomp.exe)
Just like standard Windows on the Desktop, windowsCE also includes a Registry to save keys and values.

This tool converts the human readable and easily editable ini file `RegInit.ini` into the compressed `Default.fdf` which is placed inside the WinCE OS image.

---
## Other Utilities

### Binary Generator Utility (bingen.exe) (CLI)
Command line utility to convert an executable into a binary file. Seems to take a language in as a parameter, not sure why.

### Dreamcast Copy (dccopy.exe)
This utility is simply a convenient tool to copy the newly built executable from the **Build** directory into the **Release** directory. 

### Dump NK Utility (dumpnk.exe)
This file dumps NK-ROM image files to a binary file.
> But what is a NK-ROM file?

### Flash Utility (flash.exe)
Use this tool to upgrade the firmware of the Dreamcast development `DEV.BOX`.

### File Merge Utility (fmerge.exe)
Moves configuration files to multiple directories, not sure the purpose.

### Mycat Utility (mycat.exe)
Seems to concatinate some binary files to StandardOut and strips out some data but not sure the purpose.

### NLS Compression Utility (cenlscmp.exe)
> What is Natural Language Support Compression?

### PowerVR Converter Utility (prconv.exe)  (CLI)


### Rebaseic Utility (rebaseic.exe)
Removes duplicate icons from  resource (.RES) files.

## Resource to Executable Utility (res2exe.exe)

## Text to Unicode Utility (txt2ucde.exe)
Since windows CE only supports Unicode strings, for PC ports ASCII would need to be converted to Unicode which is where this utility comes in useful.

## Txt2vmi Utility (txt2vmi.exe)
Converts VMU text files to VMI images.

## VC5 to VC6 Converter Utility (vc5tovc6.exe)
Simply converts Visual C++ 5.0 projects to Visual C++ 6.0 project files.

---
# Libraries

## DebugMem Tool (DEBUGMEM.LIB)
The DebugMem tool is actually a library and programming interface that developers use to debug memory issues such as memory leaks.

---
# Games that were built for WindowsCE
You can find out if your favourite game was built using the Windows CE SDK by inserting the disc and looking for the file `0WINCEOS.BIN` in the root of the GD-ROM.
Here is A list of Windows CE games that I have found so far:

Game | Additional Notes
---|---
4X4 EVO v1.001 (2000)(GOD)(NTSC)(US) | 
Armada v1.000 (1999)(Metro3D)(NTSC)(US) | 
Atari Anniversary Edition v1.001 (2001)(Infogrames)(NTSC)(US) | 
Biohazard 2 Value Plus v1.005 (1999)(Capcom)(NTSC)(JP)(en) | 
Bust-A-Move 4 v1.001 (2000)(Acclaim)(NTSC)(US) | 
Bust-A-Move 4 v1.001 (2000)(Acclaim)(PAL) | 
Caesars Palace 2000 - Millennium Gold Edition v1.000 (2000)(Interplay)(PAL) | 
Caesars Palace 2000 - Millennium Gold Edition v1.011 (2000)(Interplay)(NTSC)(US) | 
Championship Surfer v1.002 (2000)(Mattel)(NTSC)(US) | 
Championship Surfer v1.002 (2001)(GAME Studios)(PAL)(M5) | 
Ducati World - Racing Challenge v1.000 (2001)(Acclaim)(NTSC)(US) | 
Ducati World v1.001 (2001)(Acclaim)(PAL)(M4) | 
For Symphony - With all one's Heart v0.800 (2003)(Takuyo)(NTSC)(JP) | 
GET!! Colonies v1.000 (2000)(Sega)(NTSC)(JP) | 
GK - Giant Killers v1.400 (2001)(AAA Game)(PAL) | 
Happy Lesson v1.002 (2001)(Datam Polystar)(NTSC)(JP) | 
Hello Kitty - Lovely Fruit Park v1.004 (1999)(Sega)(NTSC)(JP) | 
Hello Kitty - Magical Block v1.001 (2000)(Sega)(NTSC)(JP) | 
Hidden & Dangerous v1.001 (2000)(Take 2)(PAL)(M4) | 
Hidden & Dangerous v1.100 (2000)(Take 2)(NTSC)(US) | 
Historical Mystery Adventure TROIA 1186 B.C. v1.002 (1999)(Hitachi - TBS)(NTSC)(JP) | 
Hoyle Casino v1.001 (2000)(Sierra)(NTSC)(US) | 
Hundred Swords v1.005 (2000)(Sega)(NTSC)(JP) | 
Jimmy White's 2 - Cueball v1.100 (1999)(Virgin)(PAL) | 
Kaitou Apricot v1.006 (2003)(Takuyo)(NTSC)(JP) | 
KISS Psycho Circus - The Nightmare Child v1.000 (2000)(Take 2)(NTSC)(US) | 
KISS Psycho Circus - The Nightmare Child v1.100 (2000)(Take 2)(PAL)(M3) | 
Kita He - White Illumination v2.002 (1999)(Hudson)(NTSC)(JP) | 
Kitahei Gold v1.007 (1999)(Net Village)(NTSC)(JP) | 
Marionette Company 2 v1.001 (2000)(Microcabin)(NTSC)(JP) | 
Marionette Company v1.001 (1999)(Microcabin)(NTSC)(JP) | 
Maximum Pool v1.004 (2000)(Sierra)(NTSC)(US) | 
Midway's Greatest Arcade Hits Volume 1 v1.000 (2000)(Midway)(PAL) | 
Midway's Greatest Arcade Hits Volume 1 v1.001 (2000)(Midway)(NTSC)(US) | 
Midway's Greatest Arcade Hits Volume 2 v1.001 (2001)(Midway)(NTSC)(US) | 
Miss Moonlight v1.006 (2001)(Naxat)(NTSC)(JP) | 
Morita no Saikyou Reversi v1.003 (1999)(Random House)(NTSC)(JP) | 
Morita no Saikyou Shougi v1.003 (1999)(Random House)(NTSC)(JP) | 
Net De Para v1.007 (2000)(Takyuo)(NTSC)(JP) | 
Next Tetris, The - On-line Edition v1.100 (2000)(Crave)(NTSC)(US) | 
Next Tetris, The v1.003 (2001)(Crave)(PAL) | 
Nightmare Creatures II v1.000 (2000)(Konami)(NTSC)(US) | 
Nightmare Creatures II v1.004 (2000)(Konami)(PAL)(M4) | 
Plus Plumb v1.073 (1999)(Takuyo)(NTSC)(JP) | 
Puzzle Bobble 4 v1.000 (2000)(Cyberfront - Taito)(NTSC)(JP) | 
Q-bert v1.003 (2000)(Majesco)(NTSC)(US) | 
Railroad Tycoon II - Gold Edition v1.004 (2000)(GOD)(NTSC)(US) | 
Railroad Tycoon II v1.002 (2000)(Take 2)(PAL)(M3) | 
Resident Evil 2 v1.000 (2000)(Virgin)(PAL)(en-fr) | 
Resident Evil 2 v1.001 (2000)(Capcom)(NTSC)(US) | 
Rune Jade v1.027 (2000)(Hudson)(NTSC)(JP) | 
Sega Rally 2 v1.000 (1999)(Sega)(PAL) | 
Sega Rally 2 v1.003 (1999)(Sega)(NTSC)(US) | 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en) | 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en) | 
Sega Rally 2 v1.04 (1999)(Sega)(NTSC)(JP)(en) | 
Sega Smashpack Volume 1 v1.002 (2000)(Sega)(NTSC)(US)[7S 51146] | 
Shinseiki Evangelion - Typing E Keikaku v1.001 (2001)(Gainax)(NTSC)(JP) | 
SnoCross - Championship Racing v1.000 (2000)(Crave - Ubi Soft)(PAL)(M3) | 
SnoCross - Championship Racing v1.000 (2000)(Crave)(NTSC)(US) | 
Soukou no Kihei - Space Griffon v1.001 (1999)(Panther)(NTSC)(JP) | 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US) | 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US) | 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(NTSC)(US) | 
South Park - Chef's Luv Shack v1.000 (1999)(Acclaim)(PAL) | 
Spirit of Speed 1937 v1.001 (2000)(LJN)(NTSC)(US) | 
Spirit of Speed 1937 v1.002 (2000)(Acclaim)(PAL)(M4) | 
StarLancer v1.002 (2000)(Crave)(NTSC)(US) | 
StarLancer v1.003 (2000)(Crave - Ubi Soft)(PAL) | 
Super Producers - Mezase Show Biz Kai v1.001 (1999)(Hudson)(NTSC)(JP) | 
Super Runabout - San Francisco Edition v1.005 (2000)(Interplay)(NTSC)(US) | 
Super Runabout v1.002 (2000)(Virgin)(PAL) | 
Super Runabout v1.003 (2000)(Climax Entertainment)(NTSC)(JP) | 
Taxi 2 - Le Jeu v1.000 (2000)(Ubi Soft)(PAL)(FR) | 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.001 (2000)(Red Storm - Swing!)(PAL)(DE) | 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.002 (2000)(Red Storm - Swing!)(PAL) | 
Tom Clancy's Rainbow Six incl. Eagle Watch Missions v1.002 (2000)(Red Storm - Swing!)(PAL)(FR) | 
Tom Clancy's Rainbow Six v1.004 (2000)(Majesco - Red Storm)(NTSC)(US) | 
Tomb Raider - Die Chronik v1.001 (2000)(EIDOS)(PAL)(DE) | 
Tomb Raider - La Revelation Finale v1.000 (2000)(EIDOS)(PAL)(FR) | 
Tomb Raider - The Last Revelation v1.000 (2000)(EIDOS)(PAL) | 
Tomb Raider - The Last Revelation v1.000 (2000)(EIDOS)(PAL)(IT) | 
Tomb Raider - The Last Revelation v1.001 (2000)(EIDOS)(NTSC)(US) | 
Tomb Raider Chronicles - La Leggenda di Lara Croft v1.000 (2000)(EIDOS)(PAL)(IT) | 
Tomb Raider Chronicles v1.000 (2000)(EIDOS)(NTSC)(US) | 
Tomb Raider Chronicles v1.002 (2000)(EIDOS)(PAL) | 
Tomb Raider IV - The Last Revelation v1.000 (2000)(Capcom)(NTSC)(JP) | 
Tomb Raider IV - The Last Revelation v1.000 (2000)(EIDOS)(PAL)(DE) | 
Tsuushin Taisen Logic Battle Daisessen v1.000 (2000)(Fortyfive)(NTSC)(JP) | 
UnderCover 2025 AD Kei v1.005 (1999)(Pulse Interactive)(NTSC)(JP) | 
Urban Chaos v1.000 (2000)(EIDOS)(NTSC)(US)(en-fr) | 
Urban Chaos v1.001 (2000)(EIDOS)(PAL)(en-fr) | 
Virtua Cop 2 v1.011 (2000)(Sega)(NTSC)(JP)(en) | 
Who Wants to Beat Up a Millionaire v1.004 (2000)(Simon & Schuster)(NTSC)(US) | 
Wild Metal v1.003 (2000)(Rockstar - Take 2)(NTSC)(US)(M6) | 
Wild Metal v1.003 (2000)(Take 2)(PAL)(M6) | 
World Neverland Plus - Olerud Oukoku Monogatari v1.008 (1999)(Riverhillsoft)(NTSC)(JP) | 
Worms Armageddon v1.001 (1999)(Hasbro - Team17)(PAL)(M8) | 
Worms Armageddon v1.001 (1999)(MicroProse)(NTSC)(US) | 
Worms World Party v1.001 (2001)(Titus)(NTSC)(US)(M9) | 
Worms World Party v1.002 (2001)(Virgin)(PAL)(M9) | 
Yoshia no Oka De Nekoronde... v1.001 (2001)(Mesa - Naxat)(NTSC)(JP) | 
Yuki Gatari v1.004 (2002)(Takuyo)(NTSC)(JP) | 

## Even more games?
SegaRetro wiki has a list of even more games that were created with the WindowsCE SDK but I have been unable to verify if they have WINCE on the disc yet, you can find the list here: [Windows CE - Sega Retro](https://segaretro.org/Windows_CE).

Also I haven't checked Demo discs or prototype games either, so please contribute if you know of some that should be added to the list.

## Armada (US)
The US version of Armada contains the linker map file for the `WSEGACD` windows CE library.  This contains all the function names provided by the library.

## The Next Tetris (WindowsCE)
The online edition of 'The Next Tetris' was built using the Dreamcast Windows CE SDK and has accidentally placed 2 windowsCE libraries on the retail disc:
* CHATCE.LIB (Chat library for windowsCE)
* SOUNDLIBWCE.LIB (Sound library for windowsCE)

Note that The Next Tetris is the only dreamcast game that includes these two libraries.

The game includes `TETRISDC.EXE` which is a SH-4 PE executable but it does not contain any debug symbols.

## Taxi 2 - Le Jeu (contains WinCE PDB files)
The french game Taxi 2 contained the PDB files for all the libraries provided by the WindowsCE runtime environment for dreamcast. 
Also of note is that the NTSC release of Armada also contained the PDB files for the same libraries but they have different md5 hashes so likely from different versions of the Windows CE runtime environment.

PDB File | Md5 Hash | Notes
---|---|---
WINCE/IMEJPPUI.PDB | 6f5aac1bf15ed29bac2bde7f20c09abd | Japanese Input Method Editor (IME)
WINCE/NETFLASH.PDB | 2f0c91d6349f0180ef2a432887f9ee78 | 
WINCE/DDI.PDB | 7a0475d3944db3fdb04c35c6efe955c6 | Display Driver [^4]
WINCE/DPMODEMX.PDB | ef1c6043e93adf89832f400b06ae1f70 | 
WINCE/MRASENTRY.PDB | b00d54787d2501208db1adc44a269532 | MRASENTRY is a utility to create a RAS entry based on a file description of the entry
WINCE/SERIAL.PDB | be068a5cc2d9251615c907595f8ab2d4 | Serial Communication Driver
/WINCE/MPPP.PDB | ffa4e1d4e53e3f50c8b51f168e253cb7 | Microsoft Point-to-Point Protocol
/WINCE/JSCRIPT.PDB | 1922e087c3d14125a6bfe261b7023ae5 | ECMAScript (Web Browser Lib)
/WINCE/URLMON.PDB | 848491a8ff3ad6c424e108a6f1b20b44 | Url Moniker Services (Web Browser Lib)
/WINCE/TIMER.PDB | 01da19d9a794d9a80f812dd163aeefb3 | High/low resolution Timer library
/WINCE/DMUSIC.PDB | 7ba57234ca02b601d8206bacb4bbfc3d | Direct Music
/WINCE/WDMLIB.PDB | 4e6baf98669347559c3f3f6e7e3148af | Windows Driver Model (WDM) Library
/WINCE/AMSTREAM.PDB | d2649a8ba34a15c0787ee02088d66669 | DirectShow multimedia stream interfaces
/WINCE/MRASDIAL.PDB | 37fc61f89f96f045122f5579f409b0db | RAS (Remote access service) dial connection
/WINCE/DDHAL.PDB | cb7980ce0aa02fce0ac8df35678317a0 | Direct Dreamcast Hardware library for graphics
/WINCE/DMLOADER.PDB | b10343666d5367efa606999dea08871c | Direct music loader
/WINCE/SENDKEY.PDB | 39673bbc3b9868200cc9eb2ce879402a | 
/WINCE/DINPUTX.PDB | 80f2f681f0ec52fee0d83642d2adc65b | Direct Input
/WINCE/SH4SER.PDB | e6d83904b4cec7f27dabacf63b48bf5b | SH4 cpu serial interface
/WINCE/MAPLE.PDB | 7024df629207f9d2933882e8b57ba3dd | Maple is the hardware bus that connects external devices to the Dreamcast console and enables the console to communicate with them.
/WINCE/MSHTML.PDB | 98f0da4a152625b9233b4e2036ac3683 | HTML library (Browser)
/WINCE/WSEGACD.PDB | 6d80b4857534df779563c7d81305ff1e | 
/WINCE/TOOLHELP.PDB | c1bfd3d289271ec0c188eb2955373fcf | 
/WINCE/TANKANJI.PDB | 96f6185994890346efab2204a9a42076 | 
/WINCE/DBG.PDB | 8c68aa19ca867f16fb44fa69a45429e0 | 
/WINCE/IECEUI.PDB | f822550d3217de63f15905a092695943 | 
/WINCE/DPLAYX.PDB | 1f20a4dbe4008b00cab5d2bee01fb1bd | 
/WINCE/MEMTOOL.PDB | 342c579283dea04da50635d843e7475d | 
/WINCE/SHELL.PDB | 29818f5057786e277b3876dbbe8cc5bf | 
/WINCE/SHLWAPI.PDB | 8c10158ffeb2effd328e2fe5d8302fd5 | 
/WINCE/DMBAND.PDB | 1ac4d18f288e223387517930a1c66637 | 
/WINCE/MSADPCM.PDB | 03046a5031844eac7cc569515a070196 | 
/WINCE/MICROSTK.PDB | b6d52beeff2376bdfffb88d958d7b2ce | 
/WINCE/ICCVID.PDB | d0b252d5cdf97b8eae841bc0031a0d3d | 
/WINCE/CEMM.PDB | 1a4386d0c114637768825d88d14c78ab | 
/WINCE/DMIME.PDB | 99a5cc3a058800d13c811f54c61bba79 | 
/WINCE/CEGSM.PDB | d0e5a9d213fa27765533e3b343bed706 | 
/WINCE/MMTIMER.PDB | 73df42ae62e3e519c450ced1b3e7a260 | 
/WINCE/SERF.PDB | 49bcc93e670c830ed6140e3612253970 | 
/WINCE/MAPLEDEV.PDB | e4a4c08660fff95f396a1b76e2a5eb06 | Sega Dreamcast External Device Interface called Maple (Dreamcast Exclusive)
/WINCE/PROFDLL.PDB | b726b6e700577ac031276137ee409c46 | 
/WINCE/MLANG.PDB | 608461596ee74a63c534f2fc6b085acf | 
/WINCE/ICM.PDB | 21f88d3b1ed893675c4a39850eeae05f | 
/WINCE/DMSTYLE.PDB | ea4f688ba564b80143a8b7eb6f7f8f06 | 
/WINCE/DPWSOCKX.PDB | 7bf36df6cf92fe82f86ef37f1e321a96 | 
/WINCE/DPLDPLAY.PDB | 3757ab16452c0cadd1f545c431774d62 | 
/WINCE/LOADDBG.PDB | 2a8f6653f30f4c224922cde229739baa | 
/WINCE/MSRLE32.PDB | 45ef2dd47c31f31b5a5a5bfbe2924f41 | 
/WINCE/SHDOCVW.PDB | 3beabcae6acac63ab1e3d5110aa5504b | 
/WINCE/SEGAMIDI.PDB | d9bdf522cb01ef00a9c3c55a06deabc8 | Sega MIDI Audio Library (Dreamcast Exclusive)
/WINCE/DTRACE.PDB | 261dc62ed89e60a174fd8782a173e027 | 
/WINCE/PLATUTIL.PDB | 4d5f3442b63da62dfdb2afbc383ec9bc | 
/WINCE/PCMCONV.PDB | 10bb816afe70b89776ad2cff11cd4d44 | 
/WINCE/WDEVICE.PDB | e608d2a64e7c5b846a80f1fa0e9d2d4a | 
/WINCE/DSOUND.PDB | c1b58163abc63a62ec02f23108581a84 | DirectSound
/WINCE/PHONETIC.PDB | b3423caa3f865fd854dd24c2a462f834 | 
/WINCE/WDMOEM.PDB | f0c97921378e026fdf80dd620cb5addf | 
/WINCE/GETHINFO.PDB | f42c92cf802716be223aac7ae8460080 | 
/WINCE/IMGUTIL.PDB | 25bf03f1816625bdeb06359e74fefb02 | 
/WINCE/WINSOCK.PDB | f3bbb266d7db9dcd8bbc6cd38d7ce2a6 | BSD Socket API
/WINCE/QUARTZ.PDB | b6beee41e50066fbcd1023efd0ae721d | 
/WINCE/VKEYBD.PDB | 2c4c7ec9d10ccc94f191fb2061f40c01 | 
/WINCE/MSCHATPR.PDB | d3fff1f7db4170f83a7845dc34e741c6 | 
/WINCE/SYSSTART.PDB | ac0667e3c5cd6e60a41e2dbbefed87b4 | 
/WINCE/WININET.PDB | 5b897f635c639fbd01634f666adb850b | 
/WINCE/VMUPROTO.PDB | b9416a7b18e24cba80d81b3da598631c | 
/WINCE/DMCOMPOS.PDB | b6bc29fc907956015f93e88360fef80e | 
/WINCE/IMAADPCM.PDB | e3b5db45278bf750f60d04117385bef2 | ADPCM Audio
/WINCE/IMEJPP.PDB | ae1960bea798a07a2d124e75a1f7e0ec | Japanese Text
/WINCE/OLEAUT32.PDB | 5cabc49947ab6c80ea46459c21d3bbbf | Automation Type Library Registration (HTML)
/WINCE/PNGFILT.PDB | 8a594e11f1b590b447842a4caa9042ac | PNG image filter
/WINCE/SECUR32.PDB | c2a3331bd80c7117b92db9d8ed120f5a | Security (Not neded for Dreamcast?) [^5]
/WINCE/VMIMIME.PDB | b386e6121076488d918bd571580cb37a | VMU library (Dreamcast Specific)
/WINCE/SEG_ROCK.PDB | 453bd7c35f93e56c8c7a64dd215b2d45 | Dial Up library?
/WINCE/MSG711.PDB | 4bb4ec3ff7f0bab234e4764e49ccfbba | 
/WINCE/IECEEXT.PDB | 69f3b3c4ece400917f3058bcde26f356 | HTML Core
/WINCE/SNDCORE.PDB | 45b095dad4466c4af848cf2f1aa7edf8 | DirectX Sound Driver
/WINCE/SCHANNEL.PDB | 05ac9c6c854f3c7a59f0152cb4ac1977 | Security
/WINCE/MSACMCE.PDB | 415c1bf169f661a86f5e3775361d66a0 | Audio Compression Manager
/WINCE/D3DIM.PDB | dc101a1f68d59818921cff9fa0859ad8 | Direct3D Immediate Mode
/WINCE/DDRAW.PDB | f7f1a6ad153bcb8bd4a2e5dfe4015e79 | Direct Draw

## Games that contained un-linked Library files
It was very rare for games to include library files on the disc, these would serve no purpose as the game can't load static libraries at runtime (they would have to be dynamic link libraries .dll).

These are somewhat interesting as they do contain function names but they are just a small part of each game.

Library | Game | Additional Notes
---|---|---
SOUNDLIBWCE.LIB | The Next Tetris | Sound
CHATCE.LIB  | The Next Tetris | Chat networking
CARCE.LIB | Spirit of Speed 1937 | 
CEFRONTLIB.LIB | Spirit of Speed 1937 | 
ARCHIVE.LIB | Spirit of Speed 1937 | 
BORIS2CE.LIB | Spirit of Speed 1937 | 
GRAPHICSLIB.LIB | Spirit of Speed 1937 | 
ERRORLIB.LIB | Spirit of Speed 1937 | 
MAPLEDEV.LIB | Taxi 2 - Le Jeu | See the Maple library section
MFSTDLIBDC.LIB | Urban Chaos | 
DDLIBDC.LIB | Urban Chaos | 
DDENGDC.LIB | Urban Chaos | 

# WIndows CE Platform SDK
The Windows CE Platform SDK itself was available free from the Microsoft website and was used for programming for a range of embedded devices. However this only included the CE libraries and headers, in order to actually compile for the Dreamcast you would need to pay for the full Katana development platform [^3].

# Windows CE Dreamcast Specific Libraries
These are the libraries that were unique to the Dreamcast Windows CE SDK and were not standard as part of the normal Win CE SDK.

## Maple
Maple is the name of the library that allows the Windows CE SDK to connect to external devices such as Light-Guns, keyboards and more.

## WSEGACD
The WSEGACD library was developed by Sega for control of the GD-ROM drive. So developers could read data or even stream data from the disc. Presumably the 'W' stands for windows as a different library was developed for the Katana SDK.

## VMIMIME (VMU)
The `VMIMIME` library is used to connect between the main game code and the VMU unit in the back of the controller.

---
# Glossary

Name | Meaning
---|---
WDM | Windows Device Model 

# References
[^1]: [The Dreamcast Junkyard: Windows CE is Best OS and Dreamcast is Best PC?](http://www.thedreamcastjunkyard.co.uk/2016/05/windows-ce-is-best-os-and-dreamcast-is.html)
[^2]: [Windows CE - Sega Retro](https://segaretro.org/Windows_CE)
[^3]: [Gamasutra - Games to Go: Windows CE](https://www.gamasutra.com/view/feature/131737/games_to_go_windows_ce.php?page=3)
[^4]: [Windows CE OS GUI (Shell) Is Possible](https://assemblergames.com/threads/windows-ce-os-gui-shell-is-possible.64930/)
[^5]: [Needles files in the WinCE folder of QDC! - DCEmulation](http://dcemulation.org/phpBB/viewtopic.php?t=7087)
