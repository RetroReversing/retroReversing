---
layout: post
tags:
- gameboy
- leak
- sourcecode
title: Gigaleak - Zelda Links Awakening DX Source Code (CGB)
thumbnail: /public/consoles/Nintendo Game Boy Color.png
image: /public/images/leaks/Zelda Links Awakening DX Source Code.jpg
twitterimage: http://www.retroreversing.com/public/images/leaks/Zelda Links Awakening DX Source Code.jpg
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

The **CGB.7z** section of the Nintendo Gigaleak preserves Game Boy Color-era material for two projects: **The Legend of Zelda: Link's Awakening DX** and **Hamtaro 2**.

For Zelda, this archive is far more revealing than a simple source drop. It preserves regional forks, active build folders, save RAM test data, compiled ROMs, debugger files, graphics assets, and the sort of messy work-in-progress clutter that usually gets lost before release.

> **Why this page exists:** this post is meant to save you from downloading and spelunking through the leak yourself. The goal is to show what is actually in the files, how Nintendo and its partners organised the project, and what the archive reveals about low-level Game Boy Color development.

---
## At a Glance

**Key takeaways**

* `Disk1` is the most important part of the leak: the main JP3/US3/EU2 snapshot, plus demo material, SRAM samples, and bug-fix notes
* `Disk2` expands the localisation side with extra regional branches such as UK English and Canada
* `Disk3` is the messiest disk and feels closest to a live developer scratch space
* The regional folders keep both `cgb` and `gb` trees, showing how DX still carried monochrome Game Boy code inside the color project
* The archive preserves real low-level development artefacts: `.s`, `.DMG`, `.CHR`, `.HEX`, `.ISX`, `.ICE`, `.BAT`, `.GB`, debugger data, and build outputs

Disk | What It Mostly Contains | Why It Matters
---|---|---
Disk1 | Main release snapshot, regional trees, demo folder, SRAM data, bug notes | Best place to understand how the shipped project was structured
Disk2 | More localisation branches and another demo workspace | Shows how the project scaled across regions
Disk3 | Test builds, support folders, experiments, and utilities | Feels like an active working disk rather than a clean backup

---
## What’s Inside CGB.7z
{% capture root_body %}
At the root level the archive contains one Zelda DX source backup and one unrelated Hamtaro 2 master build folder.
{% endcapture %}

{% capture folder_items %}
- AZL__ゼルダの伝説 夢を見る島DX - Source code and build material for Link's Awakening DX
- B86__ハム太郎 2 - Hamtaro 2 master ROM material for multiple regions
{% endcapture %}

{% include connected-folder-tree.html folder="CGB.7z" path="/CGB.7z" body=root_body version="/CGB.7z" content=folder_items %}

---
## The Main Zelda DX Source Archive
{% capture zelda_dx_body %}
`AZL__ゼルダの伝説 夢を見る島DX` is the Link's Awakening DX source tree. `夢を見る島` is the Japanese subtitle "Dreaming Island", and `DX` marks the Game Boy Color enhanced release.

{% endcapture %}

{% capture folder_items %}
- Disk1 - Main JP3/US3/EU2 source snapshot
- Disk2 - Regional localisation worktrees and demo material
- Disk3 - Test builds, sample projects, and additional support folders
{% endcapture %}

{% include connected-folder-tree.html folder="AZL DX" path="AZL__ゼルダの伝説 夢を見る島DX" body=zelda_dx_body version="/AZL__ゼルダの伝説 夢を見る島DX/Source" content=folder_items %}

The archive is organised into three source disks. Disk 1 looks like the main regional release snapshot, Disk 2 expands the localisation workspaces, and Disk 3 contains late-stage test, demo, and support material.

---
# Disk 1 - Main Release Snapshot (/Source/Disk1/ゼルダの伝説_JP3_US3_EU2)
{% capture disk1_body %}
Disk 1 contains the main multi-region Zelda DX source snapshot. The folder name `ゼルダの伝説_JP3_US3_EU2` strongly suggests this backup covers **Japan version 3**, **USA version 3**, and **Europe version 2**.

{% endcapture %}

{% capture folder_items %}
- CGB_zeldaUSA - English/US source tree
- CGB_zeldaDOITU - German source tree (`Doitu` is a phonetic rendering of Deutsch/Deutschland)
- CGB_zeldaFRANCE - French source tree
- DEMO_zelda - Demo/build workspace with source, objects, tools, and ROM outputs
- SRAMデータ - SRAM save data samples
- azljsram - Japanese save RAM archive and extracted folder
- 修正.txt - Bug-fix/change note for the DX version
{% endcapture %}

{% include connected-folder-tree.html folder="Disk1" path="/Source/Disk1/ゼルダの伝説_JP3_US3_EU2" body=disk1_body version="/Disk1/ゼルダの伝説_JP3_US3_EU2" content=folder_items %}


This is the most useful high-level entry point into the DX leak because it combines regional source trees, demo material, SRAM test data, and a short bug-fix note.

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
{% capture regional_body %}
The regional folders on Disk 1 all follow a similar pattern: a shared `cgb` directory, a language-specific Game Boy Color directory, and a fallback `gb` directory for the monochrome Game Boy code path still used inside DX.
{% endcapture %}

{% capture folder_items %}
- CGB_zeldaUSA/cgb_usa - US English Game Boy Color source
- CGB_zeldaDOITU/cgb_d - German Game Boy Color source
- CGB_zeldaFRANCE/cgb_f - French Game Boy Color source
- */cgb - Each regional tree also includes `cgb` subdirectories
- */gb - Each regional tree also includes `gb` subdirectories
{% endcapture %}

{% include connected-folder-tree.html folder="Regional" path="/CGB_zeldaUSA | /CGB_zeldaDOITU | /CGB_zeldaFRANCE" body=regional_body version="Disk1 regional trees" content=folder_items %}

This layout is one of the most interesting parts of the leak because it shows DX was still carrying separate monochrome and color code/assets within the same overall project.

---
## Shared Layout Inside Each Disk 1 Region Folder
{% capture shared_layout_body %}
At a more detailed level, the three main regional folders on Disk 1 all follow the same broad pattern:
{% endcapture %}

{% capture folder_items %}
- cgb - Shared Game Boy Color source base with common engine code, scripts, object files, maps, and graphics
- cgb_* - Language-specific overlay e.g `cgb_usa`, `cgb_d`, or `cgb_f` containing translated message/data files and regional outputs
- gb - A monochrome Game Boy source tree with `.DMG` files, character graphics, music data, and build scripts
{% endcapture %}

{% include connected-folder-tree.html folder="CGB_zelda*" path="/CGB_zeldaUSA | /CGB_zeldaDOITU | /CGB_zeldaFRANCE" body=shared_layout_body version="Disk1 region layout" date="Common structure" content=folder_items %}

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
{% capture us_branch_body %}
The US branch is the clearest example of the overall project layout. Its `cgb` folder looks like the common engine workspace, `cgb_usa` contains the English-specific Game Boy Color layer, and `gb` preserves the monochrome fallback tree.
{% endcapture %}

{% capture folder_items %}
- cgb - Shared Game Boy Color engine workspace with `.s` source, `.o` objects, `.CHR` tiles, `.HEX` audio, `.BAT` build scripts, and debugger data
- cgb_usa - US-specific overlay containing translated message/data files and the main content subfolders
- cgb_usa/ATR - Attribute data workspace
- cgb_usa/ATR2 - Additional panel/attribute data (`.pnl` and `.pdt`)
- cgb_usa/CGX - Color graphics workspace with many `.cgx` files and character graphics
- cgb_usa/COLOR - Color definition data (`.CDT`)
- cgb_usa/COLOR2 - Secondary color definition set
- cgb_usa/COM - Compiled outputs
- cgb_usa/ENDING - Ending-related content
- cgb_usa/Geki - Event/cutscene graphics, especially the photo-event material
- cgb_usa/MAP - Map data (`zel_map1.MDT`, `zel_map2.MDT`)
- cgb_usa/New_sound - Binary sound exports (`bgm_1.bin`, `bgm_2.bin`, `se.bin`)
- cgb_usa/PHOTO - Photo system assets
- cgb_usa/scr - Screen files such as `name_1.scr` and `name_2.scr`
- gb - Monochrome fallback tree with nearly complete `.DMG` source plus shared art/audio assets
{% endcapture %}

{% include connected-folder-tree.html folder="CGB_zeldaUSA" path="/CGB_zeldaUSA" body=us_branch_body version="/CGB_zeldaUSA" content=folder_items %}

What makes the US branch especially valuable is that it preserves both the broad structure and a lot of the day-to-day clutter of the actual project:

File Name | Extension | Description
---|---|---
gbmsdt_usa | .s | US-specific message data source
zma_usa | .s / .o | US-specific main/gameplay source variant
zend_usa | .s / .o | US-specific ending source variant
zcol_usa | .o | US-specific color-related object output
zplsub | .s / .o | Player/control support source and object
msg | .txt | Plain text note left in the US branch
エンディング(NOA) | .txt | NOA ending-related text note
C_USA | .PIF | Project/debug configuration file for the US branch
c_usa | .isx | US in-circuit emulator image

### Why This Branch Matters

If you only explore one regional branch in the whole DX archive, the US one is probably the best choice. It shows the project at three different layers at once:

* `cgb` as the shared engine workspace
* `cgb_usa` as the US-specific production overlay
* `gb` as the older monochrome Game Boy path still living inside the Color project

### The Shared cgb Engine Layer

The base `cgb` folder still looks like the common engine room for all regions. Instead of separating clean source from generated files, it keeps everything in one working directory.

Type | Examples | What it tells us
---|---|---
Core source | `zma.s`, `zpl.s`, `zex.s`, `zend.s`, `zti.s`, `zdb.s`, `zgd.s`, `zms.s`, `zsd.s`, `zvd.s`, `zen.s`, `ze2.s`-`ze8.s` | The main gameplay, map, message, sound, and enemy code was still being worked on as plain assembly source
Object outputs | `ZMA.o`, `ZPL.o`, `ZEX.o`, `ZEND.o`, `ZDB.o`, `ZMS.o` | The folder doubles as an active build directory, not just a source archive
Raw assets | `C1.CHR`-`C8.CHR`, `BGM_1.HEX`, `BGM_2.HEX`, `SE.HEX`, `RZ.ICE` | Graphics, music, sound, and compressed/debug assets sit right beside the code
Build/debug files | `C.isx`, `C.map`, `.prn` listings, `isdwdcmd.dat`, `isdwdrng.dat`, `isdwdsym.dat` | The team was building and debugging directly out of this branch with Intelligent Systems tooling

That makes `cgb` feel less like a preserved “source folder” and more like a bench covered in tools, parts, and half-finished work.

### The US-Specific cgb_usa Overlay

`cgb_usa` is where the branch becomes much more interesting. This is not just translated text dropped on top of a shared codebase. It is a full US production overlay with region-specific source, generated outputs, content folders, and editorial notes.

Folder | What is inside | Why it is interesting
---|---|---
`CGX` | Dozens of `.cgx` graphics files such as `title.cgx`, `clz4_USA.cgx`, `uscg1.cgx`, `uscg4.cgx`, `uscg7.cgx`, `uscg9.cgx`, `uscga.cgx`, and `name.cgx.bin` | Shows region-specific UI and presentation graphics, not just text swaps
`Geki` | Event/cutscene graphics like `shasinya.cgx`, `gekitori.cgx`, `gekitoric.cgx`, `gekihaka.cgx`, and `gekigake1.cgx` | Likely tied to the photo-event and cutscene system mentioned elsewhere in the leak
`COLOR` / `COLOR2` | Large banks of `.CDT` files | Suggests palette or color-layout data was managed as its own asset layer
`ATR` / `ATR2` | Many `.pnl` and `.pdt` files | Looks like panel/attribute resources rather than executable code
`MAP` | `zel_map1.MDT`, `zel_map2.MDT` | Concrete evidence of editable map data files in the US branch
`New_sound` | `bgm_1.bin`, `bgm_2.bin`, `se.bin` | Binary exports of music and sound effect data, not just source formats
`scr` | `name_1.scr`, `name_2.scr` | Menu/name-entry screen layouts
`COM` | Compiled outputs | Confirms that final or near-final builds were being produced inside this tree

Interesting US-only files worth calling out:

* `gbmsdt_usa.s` shows US-specific message data was broken out explicitly
* `zma_usa.s` and `zend_usa.s` suggest even gameplay and ending code had region-specific variants
* `msg.txt` and `エンディング(NOA).txt` show plain text notes still living alongside source and assets
* `C_USA.PIF` and `c_usa.isx` point to region-specific debugger or project configurations

Taken together, `cgb_usa` reads like a real production branch, with content, tools, generated data, and notes all living side by side rather than being cleaned up for archiving.

### The Hidden DMG Project Inside DX

The `gb` folder under `CGB_zeldaUSA` may be the single most revealing part of the entire US branch.

It preserves what is effectively a near-complete monochrome Game Boy Zelda tree inside the DX project, including:

* main `.DMG` source files such as `ZMA.DMG`, `ZPL.DMG`, `ZEX.DMG`, `ZEND.DMG`, `GBMSDT.DMG`, `ZCO.DMG`, `ZDB.DMG`, `ZGD.DMG`, `ZTI.DMG`, and `ZVD.DMG`
* enemy and logic files from `ZEN.DMG` through `ZE8.DMG`
* the same supporting asset formats seen elsewhere in the project: `BGM_1.HEX`, `BGM_2.HEX`, `SE.HEX`, `C1.CHR` through `C8.CHR`, `RZ.ICE`, and `GAL.BAT`

> **Why this stands out**
> What stands out here is not that Link's Awakening DX reused the original DMG source, which is exactly what you would expect, but that the leak preserves that older Game Boy codepath as a distinct working tree beside the Color-specific code and assets.

The folder layout and build scripts suggest this was more than a single shared source tree compiled in two different modes. `gb/GAL.BAT` still builds the monochrome modules with `ISDMG`, while `cgb/cgal.bat` assembles a separate set of color-era sources with `isas32`. When comparing files such as `ZMA`, `ZPL`, `ZEX`, `ZEND`, and `GBMSDT`, the `gb` and `cgb` versions are extremely close but not byte-identical, which points to a carried-forward DMG codepath living beside an actively edited Color branch rather than one exact file set being reused unchanged.

The quick comparison below shows the overall pattern:

Module | What the DX branch shows | What that suggests
---|---|---
`gb/*.DMG` | Most modules exactly match older DMG leak snapshots | Large parts of the monochrome path were carried forward from earlier Link's Awakening branches
`cgb/*.s` | Equivalent modules are very similar but not identical to the `gb` versions | The Color branch was based on the same codebase, but still had its own active edits
`gb/GAL.BAT` vs `cgb/cgal.bat` | Different toolchains and separate build scripts | The DX archive preserves two distinct build paths, not just one source tree with a flag switch

---
## German and French Branch Details
{% capture german_french_body %}
The German and French folders mirror the US layout, but the language-specific overlays are more visibly customised and preserve more localisation-era odds and ends.
{% endcapture %}

{% include connected-folder-tree.html folder="DOITU / FRANCE" path="/CGB_zeldaDOITU and /CGB_zeldaFRANCE" body=german_french_body %}

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
{% capture demo_workspace_body %}
The `DEMO_zelda` folder is not just a clean source snapshot. It looks like a live build workspace with source files, object files, scripts, graphics, IS debugger assets, and finished ROM images all mixed together.
{% endcapture %}

{% include connected-folder-tree.html folder="DEMO_zelda" path="/Source/Disk1/.../DEMO_zelda" body=demo_workspace_body %}

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
{% capture save_ram_body %}
Disk 1 also preserves two separate save-data areas, and both are useful for understanding how the team was testing the game.
{% endcapture %}

{% include connected-folder-tree.html folder="Save RAM" path="/SRAMデータ and /azljsram" body=save_ram_body %}

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
# Disk 2 - Localisation Expansion (/Source/Disk2)
{% capture disk2_body %}
Disk 2 broadens the project from the three-region Disk 1 snapshot into a wider set of localisation workspaces. In addition to USA, German, and French, it also includes separate **UK English** and **Canadian** folders.
{% endcapture %}

{% capture folder_items %}
- CGB_zeldaUSA - US English
- CGB_zeldaDOITU - German
- CGB_zeldaEIKOKU - UK English (`Eikoku` means Britain/England)
- CGB_zeldaFRANCE - French
- CGB_zeldaCANDA - Canadian branch
- DEMO_zelda - Demo/build workspace carried over here as well
{% endcapture %}

{% include connected-folder-tree.html folder="Disk2" path="/Source/Disk2" body=disk2_body version="Disk2" content=folder_items %}

This suggests Disk 2 was being used as a broader localisation and packaging workspace, with the same project structure repeated per region.

---
# Disk 3 - Test and Support Material (/Source/Disk3)
{% capture disk3_body %}
Disk 3 shifts away from the cleaner region trees and toward testing and support material. It still contains a `CGB_zeldaUSA` branch, but the more unusual folders here are the test and utility workspaces.
{% endcapture %}

{% capture folder_items %}
* CGB_zeldaUSA - US regional source tree
* TEST_zelda - Large mixed test/build workspace
* GBZE - Game Boy-oriented test/support folder
* gbzelda - Additional monochrome Zelda support folder
* CGB_samp - Sample or reference Game Boy Color material
* DEMO_zelda - Demo workspace also present on this disk  
* bgcheck - Background checking/debug folder
{% endcapture %}

{% include connected-folder-tree.html folder="Disk3" path="/Source/Disk3" body=disk3_body version="Disk3" content=folder_items %}

The `TEST_zelda` folder is especially messy in a useful way: it contains build outputs, `.ISO` intermediate files, `.ISX` debugger images, scripts, graphics folders, tool executables, and experimental data such as `TEST1.SCR`. That makes Disk 3 the closest thing in the leak to an active developer scratch disk.

---
# Why the CGB Leak Matters
<section class="postSection">
  <div markdown="1" class="rr-post-markdown">
Compared with the earlier DMG Link's Awakening leak, the CGB archive shows a much messier and more revealing development environment. Instead of only preserving clean floppy backups of source files, it keeps regional forks, ROM outputs, SRAM samples, demo builds, test folders, and the toolchain used to assemble and debug the Game Boy Color version.

That makes this one of the best surviving snapshots of how Nintendo and its collaborators were actually maintaining a late Game Boy/Game Boy Color project across multiple regions.
  </div>
</section>
