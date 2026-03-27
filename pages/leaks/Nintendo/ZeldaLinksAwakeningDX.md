---
layout: post
tags:
- gameboy
- leak
- sourcecode
title: Gigaleak - Zelda Links Awakening DX Source Code (CGB)
thumbnail: /public/consoles/Nintendo Game Boy Color.png
_image: /public/images/leaks/Zelda Links Awakening Source Code.jpg
_twitterimage: http://www.retroreversing.com/public/images/leaks/Zelda Links Awakening Source Code.jpg
permalink: /zelda-links-awakening-dx
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Zelda Links Awakening DX Source Code (CGB)
    url: #
recommend:
 - gameboy
 - leak
 - sourcecode
editlink: /leaks/Nintendo/ZeldaLinksAwakeningDX.md
updatedAt: '2026-03-27'
---

The **CGB.7z** section of the Nintendo Gigaleak preserves Game Boy Color-era material for two projects: **The Legend of Zelda: Link's Awakening DX** and **Hamtaro 2**. For Zelda, this archive is much broader than the earlier DMG backup, containing regional source trees, demo/test builds, save RAM data, compiled ROMs, and assorted build tools.

---
# CGB.7z Root Directory (/CGB.7z)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">CGB.7z</div>
  <div markdown="1" class="rr-post-markdown">
At the root level the archive contains one Zelda DX source backup and one unrelated Hamtaro 2 master build folder.
  </div>
</section>

{% capture folder_items %}
- AZL__ゼルダの伝説 夢を見る島DX - Source code and build material for Link's Awakening DX
- B86__ハム太郎 2 - Hamtaro 2 master ROM material for multiple regions
{% endcapture %}

{% include folder-tree.html version="/CGB.7z" content=folder_items %}

---
## Legend of Zelda: Link's Awakening DX (/AZL__ゼルダの伝説 夢を見る島DX)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="AZL__ゼルダの伝説 夢を見る島DX">AZL DX</div>
  <div markdown="1" class="rr-post-markdown">
`AZL__ゼルダの伝説 夢を見る島DX` is the Link's Awakening DX source tree. `夢を見る島` is the Japanese subtitle "Dreaming Island", and `DX` marks the Game Boy Color enhanced release.

The archive is organised into three source disks. Disk 1 looks like the main regional release snapshot, Disk 2 expands the localisation workspaces, and Disk 3 contains late-stage test, demo, and support material.
  </div>
</section>

{% capture folder_items %}
- Disk1 - Main JP3/US3/EU2 source snapshot
- Disk2 - Regional localisation worktrees and demo material
- Disk3 - Test builds, sample projects, and additional support folders
{% endcapture %}

{% include folder-tree.html version="/AZL__ゼルダの伝説 夢を見る島DX/Source" content=folder_items %}

---
## Disk 1 Main Release Snapshot (/Source/Disk1/ゼルダの伝説_JP3_US3_EU2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/Source/Disk1/ゼルダの伝説_JP3_US3_EU2">Disk1</div>
  <div markdown="1" class="rr-post-markdown">
Disk 1 contains the main multi-region Zelda DX source snapshot. The folder name `ゼルダの伝説_JP3_US3_EU2` strongly suggests this backup covers **Japan version 3**, **USA version 3**, and **Europe version 2**.

This is the most useful high-level entry point into the DX leak because it combines regional source trees, demo material, SRAM test data, and a short bug-fix note.
  </div>
</section>

{% capture folder_items %}
- CGB_zeldaUSA - English/US source tree
- CGB_zeldaDOITU - German source tree (`Doitu` is a phonetic rendering of Deutsch/Deutschland)
- CGB_zeldaFRANCE - French source tree
- DEMO_zelda - Demo/build workspace with source, objects, tools, and ROM outputs
- SRAMデータ - SRAM save data samples
- azljsram - Japanese save RAM archive and extracted folder
- 修正.txt - Bug-fix/change note for the DX version
{% endcapture %}

{% include folder-tree.html version="/Disk1/ゼルダの伝説_JP3_US3_EU2" content=folder_items %}

File Name | Extension | Description
---|---|---
azljsram | .lzh | Compressed archive of Japanese SRAM/save data
修正 | .txt | Text note describing several DX bug fixes

The `修正.txt` note records at least three fixes that made it into this backup:

* A photo event bug around the fisherman/photo shop sequence under the bridge
* A file select crash or freeze caused by an out-of-range heart count
* A name registration/copy issue when the entered name data summed to zero

The note also points directly at the affected routines, including `GEKI_8MAIN` in `ZGEKI.s` and `HART1ST`, `SVDS010`, and `CP3070` in `ZTI.s`.

---
## Regional Source Trees on Disk 1
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/CGB_zeldaUSA | /CGB_zeldaDOITU | /CGB_zeldaFRANCE">Regional</div>
  <div markdown="1" class="rr-post-markdown">
The regional folders on Disk 1 all follow a similar pattern: a shared `cgb` directory, a language-specific Game Boy Color directory, and a fallback `gb` directory for the monochrome Game Boy code path still used inside DX.
  </div>
</section>

{% capture folder_items %}
- CGB_zeldaUSA/cgb_usa - US English Game Boy Color source
- CGB_zeldaDOITU/cgb_d - German Game Boy Color source
- CGB_zeldaFRANCE/cgb_f - French Game Boy Color source
- Each regional tree also includes `cgb` and `gb` subdirectories
{% endcapture %}

{% include folder-tree.html version="Disk1 regional trees" content=folder_items %}

This layout is one of the most interesting parts of the leak because it shows DX was still carrying separate monochrome and color code/assets within the same overall project.

---
## Shared Layout Inside Each Disk 1 Region Folder
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/CGB_zeldaUSA | /CGB_zeldaDOITU | /CGB_zeldaFRANCE">CGB_zelda*</div>
  <div markdown="1" class="rr-post-markdown">
At a more detailed level, the three main regional folders on Disk 1 all follow the same broad pattern:
  </div>
</section>

{% capture folder_items %}
- cgb - Shared Game Boy Color source base with common engine code, scripts, object files, maps, and graphics
- cgb_* - Language-specific overlay e.g `cgb_usa`, `cgb_d`, or `cgb_f` containing translated message/data files and regional outputs
- gb - A monochrome Game Boy source tree with `.DMG` files, character graphics, music data, and build scripts
{% endcapture %}

{% include folder-tree.html version="Disk1 region layout" date="Common structure" content=folder_items %}

The shared `cgb` folders contain source and build artefacts side by side. Typical files include:

File Name | Extension | Description
---|---|---
zma, zpl, zex, zend, zti, zdb, zgd, zco, zbs, zed, zen, ze2-ze8 | .s / .o | Core engine, player, map, title, enemy, and ending source plus assembled objects
SE, BGM_1, BGM_2 | .HEX | Sound effect and music data
C1-C8 | .CHR | Character/tile graphics
RZ | .ICE | Compressed asset/emulator data
cgal, clink, GAL | .BAT | Build and link scripts
isdwdcmd, isdwdrng, isdwdsym | .dat | Debugger or in-circuit emulator support data

---
## US Branch Details (CGB_zeldaUSA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/CGB_zeldaUSA">CGB_zeldaUSA</div>
  <div markdown="1" class="rr-post-markdown">
The US branch is the clearest example of the overall project layout. Its `cgb` folder looks like the common engine workspace, `cgb_usa` contains the English-specific Game Boy Color layer, and `gb` preserves the monochrome fallback tree.
  </div>
</section>

The `cgb_usa` folder is notably more structured than the base `cgb` directory and includes specialised subfolders such as:

* `ATR` and `ATR2` for attribute data
* `CGX` for color graphics
* `COLOR` and `COLOR2` for color-related data/scripts
* `COM` for compiled outputs
* `ENDING`, `Geki`, `MAP`, `PHOTO`, and `scr` for feature-specific content

It also contains clearly regional files such as `gbmsdt_usa.s`, `zmssub_usa.o`, and `zcolsub_usa.o`, which show how the shared codebase was overlaid with English-language message and color data.

The `gb` folder under `CGB_zeldaUSA` is especially revealing because it preserves what is effectively a complete DMG-format Zelda tree inside the DX project, including `ZMA.DMG`, `ZPL.DMG`, `ZEND.DMG`, `ZE2.DMG` through `ZE8.DMG`, `GBMSDT.DMG`, `BGM_1.HEX`, `BGM_2.HEX`, `SE.HEX`, `C1.CHR` through `C8.CHR`, `RZ.ICE`, and `GAL.BAT`.

---
## German and French Branch Details
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/CGB_zeldaDOITU and /CGB_zeldaFRANCE">DOITU and FRANCE</div>
  <div markdown="1" class="rr-post-markdown">
The German and French folders mirror the US layout, but the language-specific overlays are more visibly customised and preserve more localisation-era odds and ends.
  </div>
</section>

For `CGB_zeldaDOITU`:

* `cgb_d` is the German-specific Game Boy Color layer
* it contains `TEXT`, `PHOTO`, and `COM` folders, matching the structure seen in the old mixed article
* it preserves German-specific outputs such as `c_d1211.GB`, `c_d1211.com`, `c_d.isx`, and `c_d.ram`
* there is even a stray `bug-e106.avi`, which suggests at least one bug was captured as a video during debugging
* files like `zms_d.s`, `zgkscr.s`, `zrom1.s`, and `ze9.s` hint at localisation-specific script splits and some branch divergence from the US tree

For `CGB_zeldaFRANCE`:

* `cgb_f` is the French-specific Game Boy Color layer
* the French `gb` folder swaps in `BGM_1F.HEX` instead of the default `BGM_1.HEX`, matching the localisation pattern seen in the DMG leak
* `cgb_f` contains French-specific message/color files such as `gbmsdt_f.s` and `zcolsub_f.s`
* it also includes `sound`, `COM`, and debugger data alongside the core source

Taken together, these two branches show that Disk 1 is not just a single build snapshot. It is a full regional development workspace, with the common codebase and language overlays sitting side by side.

---
## Demo Workspace on Disk 1 (/Source/Disk1/.../DEMO_zelda)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/Source/Disk1/.../DEMO_zelda">DEMO_zelda</div>
  <div markdown="1" class="rr-post-markdown">
The `DEMO_zelda` folder is not just a clean source snapshot. It looks like a live build workspace with source files, object files, scripts, graphics, IS debugger assets, and finished ROM images all mixed together.
  </div>
</section>

File Name | Extension | Description
---|---|---
AZLJ01-0 | .GB | Built Game Boy ROM image
AZLJ01-1 | .GB | Built Game Boy ROM image
cgbzelda | .gb | Another built ROM output
C, T, C_oam, kasa, N, ZASSI | .isx | IS debugger / in-circuit emulation images
GAL1, GAL3, cgal, cgal2, clink | .BAT | Build/link helper scripts
RZ1, rz2, rchr | .ICE | Compressed emulator/debugger or asset data
ISD, ISLINK, ISXTOBIN | .EXE | Intelligent Systems build/debugger tools
CGX, COLOR2, OBJ, TEXT, ATR, PANEL | folders | Graphics, attribute, object, and text work directories
追加エンディング | .txt | Note for additional ending content

Looking more closely, `DEMO_zelda` also contains:

* a dense `CGX` folder with color graphics files like `title.cgx`, `zora.cgx`, `gekituri.cgx`, and multiple `clz*.cgx` variants
* source and object files for feature-specific modules such as `zgeki`, `zsgb`, `zbdatr`, and `zcolsub`
* debugging and documentation fragments including `debug.txt`, `save.doc`, `aada.doc`, `TEST1.SCR`, and `taitol.dsc`
* multiple built outputs such as `AZLJ01-0.GB`, `AZLJ01-1.GB`, `cgbzelda.com`, and `dmzel5.com`

That makes `DEMO_zelda` feel less like a curated archive and more like someone copied an active work directory straight off a development machine.

---
## Disk 1 Save Data Folders
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/SRAMデータ and /azljsram">Save RAM</div>
  <div markdown="1" class="rr-post-markdown">
Disk 1 also preserves two separate save-data areas, and both are useful for understanding how the team was testing the game.
  </div>
</section>

`SRAMデータ` literally means "SRAM data" and contains four standalone save dumps:

File Name | Extension | Description
---|---|---
bug | .bin | Save data likely used to reproduce a bug
esubahara | .bin | Named SRAM sample
kasa | .bin | Named SRAM sample, probably related to an internal test case
not | .bin | Named SRAM sample

`azljsram` is a much larger Japanese save archive. Its extracted `azlj-sram` tree is split into `No1` through `No4`, and each slot contains four numbered `.bin` files plus debugger metadata such as `isdwdcmd.dat`, `isdwdrng.dat`, and `isdwdsym.dat`.

That makes it look like Disk 1 was carrying both quick ad hoc SRAM snapshots and a more formal multi-slot save-data archive for the Japanese build.

---
## Disk 2 Localisation Expansion (/Source/Disk2)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/Source/Disk2">Disk2</div>
  <div markdown="1" class="rr-post-markdown">
Disk 2 broadens the project from the three-region Disk 1 snapshot into a wider set of localisation workspaces. In addition to USA, German, and French, it also includes separate **UK English** and **Canadian** folders.
  </div>
</section>

{% capture folder_items %}
- CGB_zeldaUSA - US English
- CGB_zeldaDOITU - German
- CGB_zeldaEIKOKU - UK English (`Eikoku` means Britain/England)
- CGB_zeldaFRANCE - French
- CGB_zeldaCANDA - Canadian branch
- DEMO_zelda - Demo/build workspace carried over here as well
{% endcapture %}

{% include folder-tree.html version="Disk2" content=folder_items %}

This suggests Disk 2 was being used as a broader localisation and packaging workspace, with the same project structure repeated per region.

---
## Disk 3 Test and Support Material (/Source/Disk3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage" title="/Source/Disk3">Disk3</div>
  <div markdown="1" class="rr-post-markdown">
Disk 3 shifts away from the cleaner region trees and toward testing and support material. It still contains a `CGB_zeldaUSA` branch, but the more unusual folders here are the test and utility workspaces.
  </div>
</section>

{% capture folder_items %}
* CGB_zeldaUSA - US regional source tree
* TEST_zelda - Large mixed test/build workspace
* GBZE - Game Boy-oriented test/support folder
* gbzelda - Additional monochrome Zelda support folder
* CGB_samp - Sample or reference Game Boy Color material
* DEMO_zelda - Demo workspace also present on this disk  
* bgcheck - Background checking/debug folder
{% endcapture %}

{% include folder-tree.html version="Disk3" content=folder_items %}

The `TEST_zelda` folder is especially messy in a useful way: it contains build outputs, `.ISO` intermediate files, `.ISX` debugger images, scripts, graphics folders, tool executables, and experimental data such as `TEST1.SCR`. That makes Disk 3 the closest thing in the leak to an active developer scratch disk.

---
## Why the CGB Leak Matters
<section class="postSection">
  <div markdown="1" class="rr-post-markdown">
Compared with the earlier DMG Link's Awakening leak, the CGB archive shows a much messier and more revealing development environment. Instead of only preserving clean floppy backups of source files, it keeps regional forks, ROM outputs, SRAM samples, demo builds, test folders, and the toolchain used to assemble and debug the Game Boy Color version.

That makes this one of the best surviving snapshots of how Nintendo and its collaborators were actually maintaining a late Game Boy/Game Boy Color project across multiple regions.
  </div>
</section>
