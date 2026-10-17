---
layout: post
title: SEGA DTS and the World Behind Saturn Development
permalink: /sega-dts
category: saturn
placeholderimages:
  - /public/images/saturn/dts/sega-dts-website-masthead.png
tags:
- saturn
- sdk
- devkit
- industry
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: SEGA DTS
    url: '#'
editlink: /pages/consoles/saturn/SegaDTS.md
updatedAt: '2026-10-17'
excerpt: Inside Sega Developer Technical Support, from Saturn SDK patches and expensive development hardware to DevelopMental newsletters, developer conferences, and a password-protected 1990s website.
---

**DTS stood for Developer Technical Support**, Sega's support operation for the people building games on its hardware.
Its surviving [Saturn](/saturn) website opens with that name and describes a service supplied by Sega Technical Institute to registered developers.
Some *DevelopMental* newsletter mastheads instead expand DTS as **Development Technical Support**; both forms occur in Sega's own material [^1] [^2].

For a Saturn developer, DTS was where a programming problem could turn into a corrected library, a hardware order, a training session, or a conversation with another studio.
Its publications put processor questions beside artist tools, sound advice, and the paperwork needed to submit a finished disc.
The surviving archive captures that whole working environment, right down to the browser plug-in you needed to read the manuals.

<img src="/public/images/saturn/dts/sega-dts-website-masthead.gif" alt="Original Sega Developer Technical Support WWW Environment masthead from the DTS website" width="294" height="232" style="display: block; max-width: 100%; height: auto; margin: 1rem auto;">

*The original DTS website masthead, preserved as `front/dtsmast.gif` in the reconstructed mirror* [^3].

This article concentrates on the Saturn-era service documented by the surviving website and newsletters.
DTS also supported other Sega platforms: the October 1994 newsletter discusses Saturn alongside Mars, the development name used there for the 32X, and Genesis peripherals [^4].
The website, support department, newsletters, and DTS distribution CDs were related parts of the service, rather than interchangeable names for a single SDK.

## A short glossary
These terms recur throughout the developer material:
* <a id="glossary-dts"></a>**DTS** - Developer Technical Support; also written as Development Technical Support in newsletter mastheads.
* <a id="glossary-sbl"></a>**SBL** - Sega Basic Library, the lower-level library family used by many Saturn samples.
* <a id="glossary-sgl"></a>**SGL** - Sega's higher-level graphics/game library, called Sega 3D Game Library on the website.
* <a id="glossary-bbs"></a>**BBS** - Bulletin board system, a dial-up service used to distribute files and information.
* <a id="glossary-ice"></a>**ICE** - In-circuit emulator, specialist hardware for debugging a target system.
* <a id="glossary-smpc"></a>**SMPC** - System Manager and Peripheral Control, Saturn hardware involved in system management and controller communication.
* <a id="glossary-dsp"></a>**DSP** - Digital signal processor; Saturn documentation discusses both the system-control DSP and sound-processing facilities.

---
# From fax requests to a developer portal
The newsletters show a gradual change in how Sega delivered support.
In October 1994, DTS encouraged developers to acquire an email address, offered updated Saturn training videotapes, and accepted documentation requests by fax or email.
Those tapes included material from the Saturn Developer's Conference held that May [^4].

By April 1996, the DevCon report described a website under construction and plans for FTP and greater use of email.
The May issue announced that the web environment would be unveiled at E3 in Los Angeles, with access in Sega's Developer's Room.
It advertised more than 5,000 pages of documentation and accounts for registered developers [^5] [^6].

{% capture dts_gallery_1 %}
{% include article-figure.html
  src="/public/images/saturn/dts/developmental-may-1996-cover.jpg"
  alt="Purple DevelopMental cover announcing the DTS WWW Environment in May 1996"
  width="765"
  height="1000"
  title="May 1996 / Going online"
  caption="The launch announcement gave developer support a cover story of its own.  [DevelopMental, May 1996, p. 1](https://antime.kapsi.fi/sega/files/DTS-0596.pdf). Select the image to enlarge."
  loading="eager" %}
{% include article-figure.html
  src="/public/images/saturn/dts/developmental-june-july-1996-cover.jpg"
  alt="Green DevelopMental cover with a Netscape browser illustration for the DTS WWW Companion"
  width="765"
  height="1000"
  title="June/July 1996 / A guide to the guide"
  caption="The next preserved issue taught developers how to navigate the new service.  [DevelopMental, June/July 1996, p. 1](https://antime.kapsi.fi/sega/files/DTS-0696.pdf). Select the image to enlarge."
  loading="eager" %}
{% endcapture %}
{% include article-gallery.html figures=dts_gallery_1 %}

The following milestones are supported by the surviving material; they are not a complete history of the department:

Period | What the evidence shows
---|---
October 1994 | *DTS Developer News* promotes training videotapes, tools, and documentation requests by fax or email.
April 1996 | The DevCon report describes smaller seminars and a move toward web, FTP, and email support.
May 1996 | *DevelopMental* announces the DTS website's E3 unveiling.
June/July 1996 | The newsletter becomes a guide to the website, including browser requirements, account access, and navigation.
November 1996 | The newsletter publishes a practical list of recurring development-standards failures under the heading *1996's Best Known A-Bugs*.
January/February 1997 | Sega describes a Lotus Domino connection between its website and internal support database, plus developer discussions.
August/September 1997 | The preserved main page lists updated SGA3 specifications and a PowerAnimator converter announcement [^7].

The May announcement is evidence for an advertised unveiling, rather than an exact timestamp for the site's first public response.
Likewise, the August and September entries date individual updates, not every page in the mirror.

---
# Getting through the front door
The original address was `www.dts.sega.com`.
The surviving entry page offers Member, purpose/help, and Non-Member links.
The Non-Member page asks applicants for their name, job title, company, email, telephone/fax number, and URL, with a username and password supplied after approval [^1].

The June/July 1996 guide says accounts were for registered developers and that usernames and passwords were reissued every 90 days.
The May announcement also describes reconfirming employment as access approached expiry [^2] [^6].
These details explain why the site mixed an openly visible entrance with restricted development material.

## The browser was part of the toolchain
The June/July guide recommended a 28.8 kbit/s modem and Netscape Navigator, while noting that 14.4 kbit/s would work more slowly.
It reported that Microsoft Explorer worked too, and required Adobe Acrobat for viewing the documentation.
It also warned that the browsers then supplied by America Online, CompuServe, and Prodigy could not handle the site's environment [^2].

The software catalogue lists an 18.7 MB download for [SBL](#glossary-sbl) 6.01 [^8].
At 28.8 kbit/s, 18.7 decimal megabytes would take about **87 minutes** at the nominal line rate, before protocol overhead or any compression effects.
That is a useful scale comparison, not a measured download time: fetching the library could be a substantial part of an afternoon.
CD distribution still made practical sense.

---
## Frames, image maps, and a Java ticker
The newsletter defended its use of browser frames: a sidebar kept news visible while a separate navigation area stayed available.
Readers who disliked frames were told they could resize them out of the way.
The guide asked developers to check the front page at least every three days [^2].

The preserved HTML has its own period fingerprints.
The main page identifies Adobe PageMill 2.0 for Windows as its generator and embeds a Java `TickerTape` applet for a September 1997 announcement.
An extensionless file named `main` contains rectangular image-map coordinates for the section buttons [^7].

That small file is useful archaeological evidence.
Even when a destination is missing, its menu entry can reveal the intended site structure.
It does not prove that the corresponding content survives.

{% include article-figure.html
  src="/public/images/saturn/dts/dts-website-tour-june-july-1996.jpg"
  alt="Original newsletter layout showing DTS website screenshots, frame navigation, PDF downloads, and the webmaster button"
  width="1391"
  height="1800"
  title="The web, explained on paper"
  caption="Browser windows, a giant scrollbar, and a pointing-hand cursor turn the website tour into a very 1996 magazine layout.  [DevelopMental, June/July 1996, p. 4](https://antime.kapsi.fi/sega/files/DTS-0696.pdf). Select the image to enlarge."
  size="document" %}

---
# A tour of the developer's desk
The image map and main-page navigation identify eight destinations.
Their survival varies in the reconstructed mirror [^3] [^7]:

Section | What it offered or pointed toward | Evidence in the mirror
---|---|---
Documentation | Manuals, standards, and technical bulletins | A replacement index explicitly reconstructed by the archivist
Software | Libraries, sample code, sound demos, and NetLink information | A substantial surviving catalogue page
Graphics | Artist software, hardware, documentation, and outside resources | Several surviving category pages
FAQs | Answers to programming and development questions | Navigation and newsletter descriptions; the linked FAQ page is absent
Hardware | Development systems, target boxes, accessories, and prices | A surviving catalogue and supporting material
Tools | Utility downloads | A replacement index whose author labels its proposed contents as uncertain
Vendors | Third-party supplier information | A menu destination; the linked vendor page is absent
Code | A separate code-example destination | A menu destination; the linked page is absent, although software pages describe examples

A tour through these sections moves from writing code to building an entire production setup.
The interesting connections are often between them: a graphics converter needs target hardware, a library update needs a corrected link file, and a running game still needs to meet Sega's submission standards.

---
# Libraries, samples, and the patch between CDs
The software page is a compact history of the official development environment.
It describes the Windows 95 SS-SDK as a package containing [SGL](#glossary-sgl) 3.02, Windows graphics tools, and an SGI graphics converter [^8].

## SGL and SBL served different needs
Sega presents [SGL](#glossary-sgl) as a higher-level library incorporating Saturn development experience from AM2, including work on *Virtua Fighter 2* and *Virtua Cop*.
The catalogue highlights dual-CPU task allocation, near clipping, depth cueing, Gouraud shading, and coloured lights.
Those are Sega's descriptions of the library's capabilities, rather than independent performance measurements [^8].

[SBL](#glossary-sbl) 6.01 is described as a lower-level library that also incorporates 3D functionality from SGL 1.31 and includes source code.
This makes the two families more interesting than a simple old-versus-new comparison: developers could choose different levels of abstraction, while functionality also moved between them [^8].

The catalogue connects several packages to the November 1996 DTS CD:

Package | Catalogue description | What survives in the inspected mirror
---|---|---
`SGL302J.ZIP` | SGL 3.02 distribution | ZIP containing library, documentation, samples, and demos
`WGT_10J.zip` | Windows 95 graphics tools | ZIP plus a separate `WGT_MAN.pdf`
`SBL601.zip` | SBL 6.01, including source | ZIP containing library material and sample projects
`DEVCON96.ZIP` | Examples associated with DSP and advanced graphics conference sessions | Described on the page; that named ZIP is absent
`PROGEXAM.ZIP` | Backup RAM, dual-CPU, file-system, and peripheral examples | Described on the page; that named ZIP is absent
`CODEDEMO.ZIP` | Sequence, one-shot, PCM, and CD-audio demonstrations for the programming box | Described on the page; that named ZIP is absent
`SND_DEMO.SIT` | Sound Box and MIDI CartDev test material | Macintosh StuffIt archive

These presence checks refer to the inspected reconstruction, not to the full historical DTS distribution.
For the libraries and compiler environment themselves, see the dedicated SDK guide:

{% include_cached link-to-other-post.html post="/sega-saturn-sdk" %}

---
## When the download was newer than the disc
The [SBL](#glossary-sbl) update notes contain unusually concrete descriptions of the problems DTS helped developers resolve [^8]:
* **A corrected link file** - An updated `SATURN.LNK` for the GCC sample environment.
* **An interrupt-time address error** - The scroll library could access `0x00000000` if a V-Blank IN interrupt occurred during initialisation; the stated fix checked for a null pointer.
* **A sound-library adjustment** - The notes describe a change to a dummy-read address in version 1.08 of the sound library.
* **A peripheral sample correction** - `GetTriggergun()` in `SBL6/SEGASMP/PER/SMPPER12/MOVE.C` wrote values to registers that the notes describe as seven-bit. Setting the high bit produced an Address Checker error.

The last entry is dated **2 December 1996**.
Sega specifically says the web ZIP contains the corrected `MOVE.C`, while the November 1996 DTS CD does not [^8].

That is a valuable clue when reconstructing a build environment.
Two packages associated with the same library version can differ because one received a later fix.
A release label alone does not establish that their contents match.
Record the distribution medium, archive hash, and relevant file contents when comparing SDK copies.

---
## Small demonstrations with useful boundaries
The software page groups its [SBL](#glossary-sbl) programming examples around backup memory, the two CPUs, file access, and peripherals.
Its sound demonstrations separate starting a MIDI sequence, triggering a sound effect, playing PCM data, and playing a CD-audio track [^8].

These are good starting points for reverse engineering because each has a narrow job.
A small example can make the interaction between application code and a library easier to follow than the same operation buried inside a complete game.
The catalogue tells you what the demonstration was intended to exercise; the actual source and binary are needed to establish how it does so.

For a practical route into compiling the surviving samples, see:

{% include_cached link-to-other-post.html post="/sega-saturn-compiling-samples" %}

---
# The hardware catalogue had a price tag
The hardware page makes the cost of a [Saturn](/saturn) workstation unusually tangible.
It lists both complete development systems and individual pieces of equipment, with a downloadable order form [^9].

{% capture dts_gallery_2 %}
{% include article-figure.html
  src="/public/images/saturn/dts/dts-catalogue-cartdev.gif"
  alt="DTS catalogue photograph of the CartDev system with Saturn console, controller, software, and interface hardware"
  width="235"
  height="207"
  title="CartDev / $4,800"
  caption="The compact development system from the catalogue.  [Source notes](/sega-dts#fn:9). Select the image to enlarge." %}
{% include article-figure.html
  src="/public/images/saturn/dts/dts-catalogue-pbox.gif"
  alt="DTS catalogue photograph of the large beige Saturn Programming Target Box"
  width="414"
  height="288"
  title="Target Box / $7,475"
  caption="A substantial piece of desktop hardware.  [Source notes](/sega-dts#fn:9). Select the image to enlarge." %}
{% include article-figure.html
  src="/public/images/saturn/dts/dts-catalogue-e7kdev.gif"
  alt="DTS catalogue photograph of the Saturn target box and Hitachi E7000 development equipment"
  width="428"
  height="286"
  title="Hitachi ICE system / $30,575"
  caption="The catalogue's expensive end of the debugging spectrum.  [Source notes](/sega-dts#fn:9). Select the image to enlarge." %}
{% endcapture %}
{% include article-gallery.html figures=dts_gallery_2 columns="3" compact=true %}

These are selected historical dollar prices as displayed in the preserved page, without inflation adjustment.
The page does not establish one precise effective date for the entire list:

Part number | Catalogue description | Listed price
---|---|---
`ST-1000-01` | Hitachi ICE-based Saturn development system | $30,575
`SN-310` | Saturn CartDev/SNASM 2 development system | $4,800
`SN-350` | Mirage Saturn CD emulation | $3,000
`ST-RT-V3VCD` | Saturn Virtual-CD emulator board version 3.3 | $8,100
`ST-4001` | Programming Target Box 2 | $7,475
`ST-4003-102` | Sound Target Box, with availability to be checked | $4,800
`ST-713-187B` | Saturn CartDev SIMM buffer board | $275
`ST-MSAT-00` | US production Saturn modified for CartDev and CD emulation | $700
`SAT-MK-80001` | US production Saturn | $300
`SAT-MK-80201` | European PAL production Saturn | $360
`ST-E7000PC` | Hitachi E7000PC ICE kit | $15,000
`171-6692D` | SH-2 CPU board | $200

The $30,575 [ICE](#glossary-ice) system is an attention-grabbing number, but the list describes different configurations and purposes.
It should not be read as a set of directly equivalent alternatives, or added together into a universal minimum development budget.

The graphics hardware page also notes that the Sophia Systems Graphics Target Box was no longer available [^10].
Between prices, availability notices, and order forms, DTS helped developers work out which physical pieces they could actually obtain.

The relationship between target boxes, CartDev, and retail hardware is covered in more detail here:

{% include_cached link-to-other-post.html post="/sega-saturn-programming-box" %}

---
# Artists and sound designers had their own problems
The graphics section is a reminder that a development kit extended well beyond a compiler.
Its listings span Macintosh, Windows PCs, and Silicon Graphics workstations, with converters connecting commercial art packages to the target console [^10].

## Getting a model onto real hardware
The preserved Alias|Wavefront entry describes a **Wire to Sega-GL Converter** for PowerAnimator 8.x.
It offers plug-in and standalone versions, conversion of geometry and textures, and CartDev download utilities for previewing the result on a [Saturn](/saturn).
Other advertised features include animation support, texture-size controls, table optimisation, and DOS/UNIX ASCII output [^10].

The same page lists Animetix GAMUT-SG for 3D Studio, Nichimen Saturn Express, and a Softimage 3D Design Toolkit.
These entries show several routes from an artist's preferred package into a Saturn-specific data pipeline.
They are a catalogue of supported or relevant tools, not evidence that every studio used the same combination.

Sega's Macintosh list includes a 3D Editor, MapEditor, ScreenEditor, QuickViewer, Sega2DViewer, SegaConverter, SegaPainter, SpriteEditor, and Photoshop plug-ins.
The description of QuickViewer is especially immediate: take an image on the Mac screen and send it to the target.
That short feedback loop let artists inspect results on the hardware their audience would use [^10].

{% capture dts_gallery_3 %}
{% include article-figure.html
  src="/public/images/saturn/Sega3DEditor.jpg"
  alt="Sega Saturn 3D Editor interface with model editing windows"
  width="785"
  height="521"
  title="The artist's workbench / 3D Editor"
  caption="A 287-face T-Rex takes shape in one of the tools listed by DTS.  [Saturn artist tools guide](/sega-saturn-artist-tools). Select the image to enlarge." %}
{% include article-figure.html
  src="/public/images/saturn/SpriteEditor.jpg"
  alt="Sega Saturn SpriteEditor interface and editing controls"
  width="739"
  height="460"
  title="Pixels and palettes / SpriteEditor"
  caption="Sonic sprites and pattern controls show the other side of Sega's graphics tool suite.  [Saturn artist tools guide](/sega-saturn-artist-tools). Select the image to enlarge." %}
{% endcapture %}
{% include article-gallery.html figures=dts_gallery_3 %}

For the individual applications and their interfaces, see:

{% include_cached link-to-other-post.html post="/sega-saturn-artist-tools" %}

---
## Sound support crossed the artist-programmer boundary
The June/July 1996 newsletter's QSound article explains a workflow involving an enhanced DSP linker, an effect program, tone data, and control from a sequence or game program.
The accompanying questions include timing issues when checking whether a sequence has started [^2].

That mixture is characteristic of DTS.
A sound designer needed usable authoring tools, while a programmer needed to understand when commands and status queries would take effect.
The website's separate Sound Box test demos gave teams a way to exercise equipment before integrating it into a game [^8].

The graphics catalogue also directs developers to DTS or their account executive for Cinepak and TrueMotion licensing information [^10].
Support therefore included helping a studio obtain technology as well as explaining how to use it.

---
# DevelopMental was a magazine for the production floor
The newsletter archive combines technical Q&A, hardware and software announcements, conference reports, staff profiles, and document inventories.
Early preserved issues use the name *DTS Developer News*; later issues use *DevelopMental*.
The website's newsletter index contains nine issues, ranging from October 1994 to January/February 1997 [^11].

These are the issues listed in that index, rather than a claim that only nine were ever published:

Issue | Featured subject identified by the website
---|---
October 1994 | Hardware
January 1995 | Software Exchange
June 1995 | DevCon '95 wrap-up
September 1995 | Creative Support Group
April 1996 | DevCon '96 wrap-up
May 1996 | The DTS website announcement
June/July 1996 | The DTS WWW Companion
November 1996 | Best Known A-Bugs
January/February 1997 | CodeScape, more A-Bugs, and a European support-team profile

The original PDFs are accessible through [Antime's documentation archive](https://antime.kapsi.fi/sega/docs.html).
The [May 1996 announcement](https://antime.kapsi.fi/sega/files/DTS-0596.pdf) and [June/July website companion](https://antime.kapsi.fi/sega/files/DTS-0696.pdf) are particularly good entry points.
The latter is a paper guide explaining how to use the new online service: a very practical bridge between two ways of distributing information.

## The bugs that stood between a game and release
November 1996's *Best Known A-Bugs* covers controller reconnection, software reset, opening the CD door, peripheral sampling, and multi-tap behaviour.
The advice repeatedly points readers back to Sega's development standards [^12].

January/February 1997 continues with discrepancies between the master-release form and the disc's identification data, plus disc-building script problems [^13].
A game might run and still have the wrong region information, missing descriptive files, or an incorrectly configured disc layout.
These pages show the less glamorous engineering required to deliver a finished product.

{% include article-figure.html
  src="/public/images/saturn/dts/dts-development-standards-bugs-1996.jpg"
  alt="DevelopMental page listing common Saturn development-standards failures and their solutions"
  width="1237"
  height="1600"
  title="The page you wanted to read before submission"
  caption="Controller handling, reset behaviour, and CD-door checks share a densely packed troubleshooting spread.  [DevelopMental, November 1996, p. 4](https://antime.kapsi.fi/sega/files/DTS-1196.pdf). Select the image to enlarge."
  size="document" %}

For preservation work, this gives seemingly minor files a reason to exist.
`CPY.TXT`, `ABS.TXT`, and `BIB.TXT` were discussed in submission guidance; they were not necessarily stray documentation left on a disc by accident [^13].
The corresponding boot and identification structures are explored in the [Saturn initial-program guide](/sega-saturn-initial-program-ip).

---
# People behind the support address
The website's staff page credits a director, a coordinator, engineers responsible for training, software and hardware, a technical writer, and a webmaster.
It is a snapshot of one staff listing, without enough information to treat it as an organisation chart for the whole Saturn era [^14].

The preserved masthead names:

Name | Listed role
---|---
Neal Robison | Director
Judy Jette' | Technical Support Coordinator
John Byrd | Technical Support Engineer - Training
Gary Lake | Technical Support Engineer - Software
Martin Power | Technical Support Engineer - Software
Jim Yamashita | Technical Support Engineer - Software
Bert Maurico | Technical Support Engineer - Hardware
Brian May | Documentation/Technical Writer
Michael Tucker | DTS Webmaster

The January/February 1997 newsletter also profiles **European Developer Technical Support**, or EDTS.
It introduces Colin Carter, Ed Hollingshead, Tamer Tahsin, Thomas Szirtes, and James Burns, alongside musician Richard Jacques of Sega Digital Studio Europe [^13].
The descriptions mix professional specialities with music, cooking, sport, and jokes about desks full of equipment.
Even a publication full of register names made room for the people answering the questions.

{% include article-figure.html
  src="/public/images/saturn/dts/european-dts-team-1997.jpg"
  alt="Black-and-white group portrait of six people pictured in the European DTS newsletter profile"
  width="647"
  height="487"
  title="The people at the other end of the support request"
  caption="Clockwise from the bottom, the original caption identifies Colin Carter, Ed Hollingshead, Tamer Tahsin, Thomas Szirtes, Richard Jacques, and James Burns. Photo region from  [DevelopMental, January/February 1997, p. 5](https://antime.kapsi.fi/sega/files/DTS-0197.pdf). Select the image to enlarge."
  size="photo" %}

## Conferences turned answers into examples
The April 1996 DevCon report describes a shift from large lectures toward smaller rooms and repeated sessions.
Developers could ask questions during presentations and spend more time with the topic leaders.
Sega says staff from Japan, Europe, and America participated, along with developers contributing their own experience [^5].

The website's `DEVCON96.ZIP` description connects distributed examples to sessions about suggested uses for the [DSP](#glossary-dsp) and advanced graphics effects [^8].
That creates a useful research trail: a newsletter identifies an event, the catalogue names a downloadable package, and surviving code can potentially show what the audience saw.

---
## SMUG and the shared knowledge base
The June/July newsletter describes **SMUG**, the Saturn Master User's Group, as an email forum with more than 64 members worldwide.
Sega helped administer it, but the newsletter says Sega did not edit the contributions.
A separate list, `SEGA_SEZ`, carried announcements about events and website updates [^2].

By January/February 1997, the website had acquired another route to answers.
Sega described using **Lotus Domino** to connect its internal call-tracking database to a searchable web FAQ, alongside a developer discussion area [^13].

This explains why a static mirror cannot preserve the whole service.
The HTML and downloads capture published material; the newsletter establishes that a database-backed support system also existed.
The inspected reconstruction does not contain that database or a complete archive of its discussions.

---
# Reading the mirror as an archaeological object
The inspected collection is named `Sega DTS Website Mirror`, with a `DTS Mirror` directory inside it.
Its `index.htm` explicitly calls it a **partial reconstruction**, assembled from Internet Archive captures, Goodcow Films page snapshots, and Antime's file archive [^3].

[Nemesis's archive-sharing post](https://assemblergames-archive.com/thread-60710-post-902609.html) independently describes assembling a partial DTS website reconstruction and adding extra files.
That is useful provenance for the distributed archive, although the local copy was not hash-matched against the linked download.

## What is actually present
A recursive inventory of the inspected copy found **189 files**.
These counts include the reconstruction's additions and count files by extension, rather than unique historical documents:

File type | Count
---|---
PDF | 93
HTML, including upper-case `.HTM` | 30
GIF | 49
ZIP | 8
StuffIt `.sit` | 5
RAR | 1
JPEG | 1
Text | 1
Extensionless image-map file | 1

The directory names help separate the website interface from its downloadable material:

{% capture dts_mirror_body %}
Selected directories from the inspected reconstruction. The `antime` directory contains supplementary archive material and should not automatically be treated as an original server directory.
{% endcapture %}
{% capture dts_mirror_items %}
- front - Welcome, purpose, registration information, and entry-page artwork
- graphics - Artist software, hardware, documentation, and resource pages
- hardware - Development equipment catalogue and supporting files
- software - Library and demonstration catalogue
- software/zipdocs - Preserved ZIP and StuffIt packages and PDF manuals
- extra - Newsletter index
- extra/newspdf - Nine newsletter PDFs
- docs - Reconstructed documentation index and supporting material
- tools - Reconstructed tools index
- antime - Supplementary documentation and software from Antime's archive
{% endcapture %}
{% include connected-folder-tree.html folder="DTS Mirror" path="Sega DTS Website Mirror/DTS Mirror" body=dts_mirror_body content=dts_mirror_items %}

---
## Three distinctions that prevent misleading history
The reconstruction is valuable precisely because it gathers scattered material, but that also makes provenance important:
* **Original page versus replacement index** - `docs/docs.htm` says the original page was missing and its contents were reconstructed. `tools/tools.htm` uses more tentative language about which files may have appeared there.
* **Advertised download versus surviving file** - The software page names more packages than are present under their advertised filenames. A link is evidence of an offering, not proof that its payload was recovered.
* **Publication date versus capture date** - A Wayback footer in `front/nonmemb.htm` records a January 1997 capture retrieved in May 2016. Those dates describe archiving activity, while the main page contains September 1997 news.

Consequently, the collection should not be described as a complete, untouched snapshot of the site on a single day.
Its own introduction's approximate 1996 framing does not encompass every dated item preserved inside it [^3] [^7].

---
## A few worthwhile investigations
The collection is especially useful when you follow a specific question across different kinds of evidence:
* **Compare the web and CD samples** - Start with the December 1996 `MOVE.C` correction, then compare actual file contents across distributions rather than trusting the version label.
* **Trace a document revision** - Match the document number in a newsletter inventory against the PDF's title page and revision history. Do not assume the newest-looking filename settles the issue.
* **Follow an art conversion path** - Read a converter's documentation alongside its target viewer and the commercial tool version it expects.
* **Investigate a submission failure** - Compare the newsletter's disc-layout advice with a game's identification data and build-related files.
* **Separate missing pages from missing knowledge** - A vanished FAQ may have answers reproduced in newsletters, even when its original database is unavailable.

The strongest reconstructions combine these sources.
A manual explains the intended interface, a sample shows one implementation, and a support note may reveal why the first version did not quite work.
That last part is what makes DTS such a useful companion to the official SDK.

---
# References
<!-- cspell:ignore cartdev pbox e7kdev dtsmast nonmemb newspdf extensionless zipdocs gfxsw gfxhw -->
[^1]: Sega DTS website, `front/purpose.htm` and `front/nonmemb.htm`, inspected in the reconstructed mirror described in [^3]. These pages expand the name and explain developer access.
[^2]: Sega, [DevelopMental, June/July 1996](https://antime.kapsi.fi/sega/files/DTS-0696.pdf), pp. 1-4: browser requirements, SMUG, SEGA_SEZ, QSound, account access, and frames. Also preserved as `extra/newspdf/0696.pdf`.
[^3]: `Sega DTS Website Mirror/DTS Mirror/index.htm`, reconstruction notice and locally inspected file inventory. See also [Nemesis's first-person description of the reconstruction](https://assemblergames-archive.com/thread-60710-post-902609.html), post #11, and [Antime's Saturn archive](https://antime.kapsi.fi/sega/docs.html). Mirror filenames in these references identify files within that collection, not paths on RetroReversing's server.
[^4]: Sega, [DTS Developer News, October 1994](https://antime.kapsi.fi/sega/files/DTS-1094.pdf), p. 1: support channels, Saturn training videotapes, and other Sega platforms.
[^5]: Sega, [DevelopMental, April 1996](https://antime.kapsi.fi/sega/files/DTS-0496.pdf), p. 1: DevCon format and planned online support.
[^6]: Sega, [DevelopMental, May 1996](https://antime.kapsi.fi/sega/files/DTS-0596.pdf), pp. 1-2: website announcement, access policy, and June 1996 CD distribution.
[^7]: Sega DTS website, `bridge.htm` and the extensionless image-map file `main`, inspected in the reconstructed mirror [^3]. Includes dated 1997 announcements, navigation destinations, PageMill metadata, and the ticker applet.
[^8]: Sega DTS website, `software/soft.htm`, inspected in the reconstructed mirror [^3]. Package descriptions, library changes, CD references, sample catalogue, and the dated `MOVE.C` correction. Presence checks also used the directory listing and ZIP member lists of `software/zipdocs/SBL601.zip` and `software/zipdocs/SGL302J.ZIP`.
[^9]: Sega DTS website, `hardware/hard.htm`, historical equipment catalogue inspected in the reconstructed mirror [^3]. The accompanying original photographs are `hardware/core/cartdev.gif`, `hardware/core/pbox.gif`, and `hardware/core/e7kdev.gif`.
[^10]: Sega DTS website, `graphics/gfxsw.htm` and `graphics/gfxhw.htm`, inspected in the reconstructed mirror [^3]. Artist tools, conversion utilities, supported systems, hardware availability, and codec enquiries.
[^11]: Sega DTS website, `extra/dev.htm`, newsletter index inspected in the reconstructed mirror [^3].
[^12]: Sega, [DevelopMental, November 1996](https://antime.kapsi.fi/sega/files/DTS-1196.pdf), p. 4: recurring development-standards problems and suggested solutions.
[^13]: Sega, [DevelopMental, January/February 1997](https://antime.kapsi.fi/sega/files/DTS-0197.pdf), pp. 3-5: Domino-backed FAQ and developer discussions, submission issues, and the European support-team profile.
[^14]: Sega DTS website, `masthead.htm`, staff listing inspected in the reconstructed mirror [^3]. Names and role spellings follow that page.
