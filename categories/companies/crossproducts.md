---
layout: post
permalink: /companies/crossproducts
category: crossproducts
tags:
 - companies
 - industry
 - crossproducts
recommend: 
 - industry
 - crossproducts
recommendTitle: All CrossProducts Posts
title: Cross Products (Creator of Development Tools)
image: /public/images/companies/Cross Product - Company.jpg
twitterimage: https://www.retroreversing.com/public/images/companies/Cross Product - Company.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Companies
    url: /
  - name: Cross Products
    url: #
redirect_from:
  - /cross-products
  - /crossproducts
editlink: ../categories/companies/crossproducts.md
updatedAt: '2026-10-16'
---

# History of Cross Products
Cross Products was a British developer of game programming tools, founded in 1989 by Ian Oliver and Andy Craven [^1].
Its SNASM range let programmers build code on a PC and debug it on the target hardware.

The company's [archived website](https://web.archive.org/web/19970217093645/http://www.crossprod.co.uk/company.htm) dates its acquisition by Sega to June 1994.
It describes the purchase as part of Sega's development-tools strategy, after which Cross Products concentrated on Sega platforms [^6].

{% include link-to-other-site.html url="https://segaretro.org/Cross_Products" description="More information about Cross Products on SegaRetro." image="https://segaretro.org/images/thumb/6/65/CrossProducts_logo.svg/938px-CrossProducts_logo.svg.png" title="Cross Products on SegaRetro"  %}

---
# Products
The range covered assemblers, debuggers and hardware for downloading and testing games.

## SNASM
SNASM (Spiny Norman's Assembler) was developed by Martin Day in collaboration with Cross Products founders Ian Oliver and Andy Craven.
Cross Products licensed it for its early Atari ST and Amiga development kits [^3].

Martin Day also co-founded [SN Systems](/companies/snsystems).
The shared history can make the names confusing: Cross Products sold SNASM, while SN Systems developed the competing Psy-Q tools [^3].

{% include_cached link-to-other-post.html post="/companies/snsystems" description="The history of SN Systems and its Psy-Q development tools." %}

**The Games Machine**, issue 29 (April 1990), described a pre-release PC-based kit priced at GBP 600.
Its report named **Realtime Games** and **Vektor Grafix** as collaborators and listed Atari ST, Amiga and Macintosh targets [^2].

### SNASM Speed
The Games Machine reported an assembly time of five seconds for 12,000 source lines [^2].
A more concrete production example comes from Ian Oliver's [1989 ST NEWS interview](https://segaretro.org/Interview:_Realtime_Games_Software_(1989-08-12)_by_ST_NEWS_Disk_Magazine): assembling Carrier Command took six minutes on the ST and 18 seconds with the team's PC assembler.
These are contemporary performance claims, rather than timings from a reproduced benchmark [^7].

The original 68000 toolchain suited machines such as the Amiga and Atari ST, as well as the [Sega Mega Drive](/megadrive).

{% include link-to-other-site.html url="https://segaretro.org/SNASM68K" description="More information about SNASM68K on SegaRetro." title="SNASM68K - Sega Retro"  %}

---
### Companies that used SNASM
System 3 used SNASM during development of Last Ninja 3 [^5].

---
### CPUs Supported
The assembler name identifies its processor family.
The Saturn manual documents both `SNASM68K` and `SNASMSH2` [^8]:
* **SNASM68K** - Motorola 68000 family.
* **SNASM658** - 65816 family, used for [Super Nintendo](/snes) development.
* **SNASMSH2** - Hitachi SH-2.

---
## SNASM2 Platforms supported
Cross Products' [May 1995 export price list](https://drive.google.com/file/d/1FKipn9LJQUcxAjWKbUL7tSpVSaded6iT/view) lists complete development systems for these platforms [^9]:
* Amiga 600/1200 (SNASM68K)
* Sega Genesis/Mega Drive (SNASM68K)
* Sega 32X
* Mega CD (SNASM68K)
* Sega Saturn
* Super Nintendo Entertainment System (SNASM658)
* Jaguar
* Philips CDi

### SNASM2 for Philips CDi
In an [interview with The Black Moon Project](https://web.archive.org/web/20160621124117/http://blackmoonproject.co.uk/interviews/ashley_hogg.php), **Ashley Hogg** recalled using SNASM tools for Codemasters' Philips CD-i port of Micro Machines.
The PC communicated with the development hardware over SCSI.
Hogg also kept an Amiga A4000 for custom bonus-level and graphics tools, so the PC kit was only part of the production workflow [^4].

---
### SNASM658 for Super Nintendo
The **SNASM658** tools targeted the [Super Nintendo](/snes).
The May 1995 price list offered a SNASM2 SNES system with 16 Mbit capacity [^9].

**Mike Dailly** photographed his SNASM development kit alongside other SNES development hardware:
<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Some sexy <a href="https://twitter.com/hashtag/SNES?src=hash&amp;ref_src=twsrc%5Etfw">#SNES</a> dev stuff… My old SNASM devkit, a special SNES EPROM box that let you max out the ROM space, and aSNES dev cart.<br>Lastly a Psygnosis PsyQ devkit. <a href="https://t.co/bIeXhlx3Ok">pic.twitter.com/bIeXhlx3Ok</a></p>&mdash; Mike Dailly™ 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇺🇦🇵🇸💙 (@mdf200) <a href="https://twitter.com/mdf200/status/1555993551082766336?ref_src=twsrc%5Etfw">August 6, 2022</a></blockquote>

The SNES development-hardware guide covers the kit alongside alternatives used by other studios:
{% include_cached link-to-other-post.html post="/super-famicom-snes-development-kit" description="SNASM2 and other Super Nintendo development hardware." %}

---
### SNASM for Atari ST
The SNASM interface let programmers develop software on a PC, then download and debug it on an Atari ST.
The Centre for Computing History holds three interface boxes formerly owned by **David Jones**, creator of the Magic Knight games [^10].

{% include link-to-other-site.html url="https://www.computinghistory.org.uk/det/47580/SNASM-Devkit-Box-for-the-Atart-ST/" description="Photographs and provenance of three surviving Atari ST development interfaces." title="SNASM Devkit Box for the Atari ST - Centre for Computing History" image="https://www.computinghistory.org.uk/userdata/images/large/83/67/product-118367.jpg"  %}

---
## SNASM2.1 and archived Saturn projects
The [SNASM2.1 Saturn manual](https://segaretro.org/images/2/24/SNASM2.1_Saturn_Development_System_User%27s_Manual.pdf) explains a compatibility trap when rebuilding [Saturn](/saturn) projects: GNU's linker could not directly link SNASM2 objects, despite both using COFF (Common Object File Format).
Cross Products supplied **SN2G** to convert assembler output for GNU linking.
Using the SNASM2 linker with GNU objects instead lost C structure-browsing information [^8].

Conversion had limits: complex relocation expressions could fail, and group information was discarded.
Keep original object files when investigating a build [^8].

When examining an archived project, look for these documented clues before choosing replacement tools [^8]:

File or command | What to inspect
---|---
`snasmsh2` | SH-2 assembly steps and their output files
`snmake` | Build rules; its default project filename is `MAKEFILE`
`SNBUGSAT.INI` | Debugger sessions, which can retain breakpoints, watches and object-file paths

Try following one object file from its assembly command through conversion and linking.
Record the tools and options at each step rather than assuming that the filename extension identifies a compatible format.

---
## CodeScape
Sega's [January/February 1997 developer newsletter](https://antime.kapsi.fi/sega/files/DTS-0197.pdf) presented **CodeScape** as a replacement for the Saturn `Snbugsat` debugger that could load existing COFF files.
It combined editing, compilation and downloading, supported multiple CartDev units, and saved its configuration between sessions.
The advertised hosts were Windows 95, Windows NT 3.51/4.0 and SGI Indy [^11].

The same announcement listed a separate **16 MB CartDev RAM buffer board** for porting games before reducing their memory use.
That distinction matters when studying development builds: the extra memory was an optional development aid, not the retail console's memory budget [^11].

---
## Mirage CD-ROM emulator
**Mirage** stood in for the target machine's CD-ROM drive.
Sega's [September 1995 developer newsletter](https://antime.kapsi.fi/sega/files/DTS-0995.pdf) described a removable 1 GB SCSI hard drive, interchangeable target-specific modules and incremental disc-image builds.
Its error-injection controls included adjustable error rates and a button to simulate a knock to the console [^12].

These features let developers test disc-reading failures as well as ordinary loading.
For the Saturn hardware connections and other parts of the setup, see the [Saturn development-kit guide](/sega-saturn-programming-box).

---
# All Posts mentioning Cross Products
<div>

{% include console.html %}
</div>

---
# References
[^1]: [Cross Products](https://segaretro.org/Cross_Products)
[^2]: The Games Machine Issue 29 April 1990
[^3]: [SN Systems](https://segaretro.org/SN_Systems)
[^4]: [Ashley Hogg interview - The Black Moon Project, archived June 2016](https://web.archive.org/web/20160621124117/http://blackmoonproject.co.uk/interviews/ashley_hogg.php). Original URL: http://www.blackmoonproject.co.uk/interviews/ashley_hogg.php
[^5]: [Last Ninja 3 - WikiMili](https://wikimili.com/en/Last_Ninja_3)
[^6]: [Cross Products company information, archived February 1997](https://web.archive.org/web/19970217093645/http://www.crossprod.co.uk/company.htm).
[^7]: [Realtime Games Software interview - ST NEWS Disk Magazine, 12 August 1989](https://segaretro.org/Interview:_Realtime_Games_Software_(1989-08-12)_by_ST_NEWS_Disk_Magazine).
[^8]: [Cross Products SNASM2.1 Saturn Development System User's Manual, revised 21 August 1995](https://segaretro.org/images/2/24/SNASM2.1_Saturn_Development_System_User%27s_Manual.pdf), sections 4.1, 8.2.2, 9.3.1 and chapter 11.
[^9]: [Cross Products SNASM2 export price list, May 1995](https://drive.google.com/file/d/1FKipn9LJQUcxAjWKbUL7tSpVSaded6iT/view), development systems page. Preserved in the Exodus technical-documentation collection.
[^10]: [SNASM Devkit Box for the Atari ST - Centre for Computing History](https://www.computinghistory.org.uk/det/47580/SNASM-Devkit-Box-for-the-Atart-ST/), collection reference CH47580.
[^11]: [Sega Developmental, January/February 1997](https://antime.kapsi.fi/sega/files/DTS-0197.pdf), page 2, CodeScape announcement and CartDev RAM buffer board note.
[^12]: [Sega DTS Developer News, September 1995](https://antime.kapsi.fi/sega/files/DTS-0995.pdf), page 3, Cross Products announcements.
