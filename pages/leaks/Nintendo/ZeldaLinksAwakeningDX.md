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
AZLJ01-0, AZLJ01-1 | .GB | Built 1 MB ROM images dated 10 November 1998
cgbzelda | .gb / .com | Another full ROM output, built 9-10 November 1998
dmzel5 | .com | Older July 1998 ROM/build output, showing this workspace was reused over time
C, T, C_oam, kasa, N, ZASSI | .isx | IS debugger / in-circuit emulation images
GAL1, GAL2, GAL3, cgal, cgal2, clink, clink2 | .BAT | Build and link helper scripts for multiple variants
RZ1, rz2, rchr | .ICE | Compressed emulator/debugger or asset data
ISD, ISLINK, ISXTOBIN, ISDMG, SUMCHECK | .EXE | Intelligent Systems build and support utilities
CGX, COLOR, COLOR2, ATR, ATR2, OBJ, TEXT, PHOTO, Geki, ENDING, COM | folders | Main graphics, color, event, object, and packaging work directories
debug, save, aada | .txt / .doc | Internal notes for debugging, SRAM layout, and code cross-references

### Built Outputs and Build Scripts

The top level is full of finished or near-finished outputs, not just source. `AZLJ01-0.GB`, `AZLJ01-1.GB`, and `cgbzelda.gb` are all full 1 MB ROM images, while `cgbzelda.com` and `dmzel5.com` preserve different points in the build history. The date spread is useful here: `dmzel5.com` is from 14 July 1998, but the main `AZLJ01-*` builds are from 10 November 1998, which makes `DEMO_zelda` look like a workspace that stayed active over several months rather than a one-off demo drop.

The build scripts back that up. `cgal.bat` assembles a much broader module set than the plain regional branches, including `ZDB2`, `ZCOL`, `ZCOLSUB`, `ZPLSUB`, `ZWIN`, `ZJP`, `ZFADE`, `ZBDATR`, `ZATR`, `ZMAP`, `ZPR`, `ZGEKI`, `ZGKDAT`, `ZGKANM`, `ZGKSCR`, `ZEND2`, and `zsgb`. That looks less like a simple region overlay and more like a feature-heavy demo or presentation branch with extra cutscene, fade, panel, map, and Super Game Boy support code wired in.

### Internal Notes and Debug Aids

Some of the most revealing material in the folder is not code at all:

* `debug.txt` explains hidden debug behavior for the DX build, including a START+SELECT style BG-collision bypass, a way to reset photo-related demo state, and a shortcut that jumps straight to the ending
* `save.doc` is effectively a hand-written SRAM map, listing addresses for dungeon visitation flags, inventory, keys, songs, rupees, heart pieces, boomerang trade state, Marin flags, and other save variables
* `aada.doc` is a developer cross-reference note that points to exact source files and labels for systems like Marin behavior, hidden or "cheat" mode, BG pass-through, dungeon entrance data, rotating doors, item display logic, and new-dungeon setup
* `TEST1.SCR` and `TEST2.SCR` suggest dedicated screen-layout experiments were being kept right in the same working folder

That combination makes `DEMO_zelda` especially valuable for low-level research, because it does not just preserve source - it also preserves the team’s own notes for how to navigate and manipulate the build.

### Graphics and Content Work Areas

The asset side is just as busy. `CGX` alone contains a dense mix of title, level, event, and character graphics such as `title.cgx`, `zora.cgx`, `gekituri.cgx`, `gekituric.cgx`, `clz1_DEMO.cgx`, `clz4_USA.cgx`, and `TEST_clz5.cgx`. `COLOR` and `COLOR2` hold large banks of `.CDT` color-definition files with names tied to maps, cutscenes, dungeons, the camera/photo system, and specific background groups.

The supporting folders make the same point from different angles:

* `Geki` and `ENDING` preserve event and ending assets
* `PHOTO` lines up with the photo-related debug note in `debug.txt`
* `New_sound` contains both binary audio exports and the editable `.HEX` source formats
* `MAP` still holds raw map data files
* `BACKUP` stores backup copies of core sources like `zma.s`, `zpl.s`, `zex.s`, `zrom.s`, `zti.s`, and `zend.s`

This is exactly the kind of workspace clutter that tends to disappear from cleaner source archives.


---
## Kyoko Kimura's Work Area
{% capture kimura_body %}
Inside `DEMO_zelda`, the `kimura` folder looks like a dedicated content-editing workspace rather than a normal source directory. It is dominated by map, screen, graphics, panel, and color files, with an unusually large number of `.BAK` revisions preserved side by side with the active versions.
{% endcapture %}

{% include connected-folder-tree.html folder="kimura" path="/Source/Disk1/.../DEMO_zelda/kimura" body=kimura_body %}

At a glance, `kimura` is one of the clearest examples of real day-to-day content production on Disk 1:

The name also lines up neatly with the game's credits. Link's Awakening DX credits **Kyoko Kimura** as a character designer, so `kimura` is very likely a surname-based personal work folder rather than a Zelda-specific technical term [^1]. Given how art-heavy this workspace is, that attribution fits unusually well.

Type | Approximate count | What that suggests
---|---|---
`.BAK` | 716 | Heavy iterative editing, with old revisions kept rather than cleaned away
`.CGX` | 500 | Room and object graphics were being revised constantly
`.SCR` | 365 | Screen-layout data was being edited at scale
`.MAP` | 219 | Room map files were being worked on in bulk
`.COL` | 105 | Color and palette data was maintained as its own layer
`.PNL` | 47 | Panel or attribute-layout resources were part of the same workflow

### What the Folder Looks Like

The top level already feels like a designer or artist sandbox. Files such as `gekigake1.scr`, `gekiwanc.scr`, `cameururira.cgx`, `phoshasinya_p.cgx`, `BGUNCH.pnl`, `DJUNCH.pnl`, `tamesi50.col`, and `zelobjcol.col.BAK` mix event graphics, photo-related assets, test colors, and panel data in one place. Even before looking into the level folders, it is obvious that this was not arranged as a neat export directory.

Below that, `kimura` branches into per-dungeon work areas like `Level-1`, `Level-2`, `Level-4`, `Level-5`, and `Level-6`. Each one follows a very hands-on pattern:

* room graphics as `.CGX`
* room map data as `.MAP`
* room screen/layout data as `.SCR`
* matching `.BAK` revisions for all three
* level color files such as `zelda_dun2.COL`, `zelda_dun2c.COL`, `zelda_dun4.COL`, and `zelda_dun4c.COL`
* panel files like `pnl2c.PNL`, `pnl4.PNL`, `pnl4c.PNL`, and `pnl4t.PNL`

That makes the folder read less like "graphics resources" and more like a per-room edit history.

### Level-2 as a Worked Example

`Level-2` is especially revealing because it preserves active room-by-room work. The folder contains files like `ROOM20.CGX`, `ROOM20.MAP`, `ROOM20.SCR`, then repeats the same pattern through `ROOM3F`, usually with `.BAK` copies sitting right next to the active file. It also includes alternate screen variants like `ROOM20c.SCR`, `ROOM21c.SCR`, `ROOM22c.SCR`, and `ROOM23c.SCR`.

The timestamps make the process visible:

* many `Level-2` `.CGX` and `.MAP` files were last updated in early July 1998
* a large batch of `Level-2` `.SCR` files was updated again on 28 July 1998
* some rooms such as `ROOM28` were still being revised in August 1998

That pattern suggests the team was touching graphics, maps, and screen scripts in separate passes rather than exporting everything in one go.

### Why the Backups Matter

The huge number of `.BAK` files is probably the most interesting part of `kimura`. These are not just a few safety copies. They exist for room graphics, room maps, room screens, panel files, color files, and top-level event assets across multiple levels.

For low-level development history, that matters because it preserves something source trees often lose:

* the fact that room assets were revised file-by-file
* the order in which different data layers changed
* evidence that the workspace was being edited manually rather than regenerated from a single higher-level tool

In other words, `kimura` looks less like an archive of final assets and more like a live room-construction bench, with the old versions left on the table.

---
## The Super Game Boy Sample Workspace
The `sgb` folder is not Zelda-specific content.

Its `README.DOC` describes it as a standard Super Game Boy BIOS sample package, and the source reads like a generic `SGBTEST` project rather than game code.

It is better treated as a shared internal SDK or reference package that happened to be copied into the Zelda demo workspace.

{% include link-to-other-post.html post="/super-game-boy-sdk/" description="For the full breakdown of the SGB sample package, its libraries, build flow, check out this post." %}

---
## Disk 1 Save Data Folders
{% capture save_ram_body %}
Disk 1 also preserves two separate save-data areas, and both are useful for understanding how the team was testing the game.
{% endcapture %}

{% include connected-folder-tree.html folder="Save RAM" path="/SRAMデータ and /azljsram" body=save_ram_body %}

### Quick SRAM Snapshots

`SRAMデータ` literally means "SRAM data" and contains four standalone save dumps:

File Name | Extension | Description
---|---|---
bug | .bin | Standalone 8 KB save dump, very likely kept as a bug-reproduction snapshot
esubahara | .bin | Standalone 8 KB save dump with a personal or place-name label
kasa | .bin | Standalone 8 KB save dump with a short internal nickname
not | .bin | Another named 8 KB save dump, likely another ad hoc test case

All four files are exactly 8192 bytes, which matches a single 64 kbit SRAM bank rather than a full 32 KB banked SRAM dump. Their timestamps cluster in August and September 1999, later than the main `azljsram` archive below, which makes them feel like quick late-stage snapshots kept around for testing specific states.

---
### The azljsram Archive

The `azljsram` folder is much more formal. Its `readme.txt` says the archive contains SRAM data for the "Zelda no Densetsu: Yume o Miru Shima DX" cartridge, and explains that each `No1` to `No4` folder stores a 256 kbit SRAM image split into 64 kbit chunks named `azlj??-?.bin`, where the first number is the cartridge number and the second is the SRAM bank number.

That structure is worth spelling out more clearly:

Folder | Contents | What stands out
---|---|---
`No1` | `azlj01-0.bin` to `azlj01-3.bin` plus `isdwdcmd.dat`, `isdwdrng.dat`, `isdwdsym.dat` | Full banked SRAM dump with matching debugger metadata
`No2` | `azlj02-0.bin` to `azlj02-3.bin` | Only the raw SRAM chunks survive here, with no debugger sidecar files
`No3` | `azlj03-0.bin` to `azlj03-3.bin` plus debugger metadata | Similar layout to `No1`, but with a much smaller symbol/range set
`No4` | `azlj04-0.bin` to `azlj04-3.bin` plus debugger metadata | The messiest of the four, with meaningful non-`FF` data even in bank 3

---
### What the Bank Layout Shows

Looking more closely at the data, the split archive behaves less like four save slots and more like four separate cartridge captures:

* `azlj01-0.bin` through `azlj04-0.bin` are the only consistently "live" banks, each containing a mix of real data, `00`, and large `FF` regions
* almost every `-1.bin`, `-2.bin`, and `-3.bin` file is either completely `FF` filled or very close to it, suggesting those upper SRAM banks were unused on most carts
* one repeated all-`FF` bank image is reused across nearly every upper-bank file in `No1`, `No2`, `No3`, and part of `No4`
* `No4` is the odd exception, because `azlj04-3.bin` is not empty and contains a distinct high-`FF` but still populated pattern

---
### Dates and Tooling

The timestamps also split into two useful phases:

* the raw `azlj??-?.bin` cartridge chunks were written on 15 June 1999
* the debugger sidecar files in `No1`, `No3`, and `No4` were added later on 15 June, 2 August, and 15 June 1999 respectively

That suggests `azljsram` was not just a folder of save files copied out of the game. It looks more like a small internal SRAM-dump archive tied to Intelligent Systems debugging tools, with some carts preserved as raw banked memory images and others paired with symbol/range metadata for deeper inspection.

---
### Why It Matters

Taken together, Disk 1 seems to preserve two different save-data workflows at once:

* `SRAMデータ` for quick one-bank snapshots with informal labels
* `azljsram` for more deliberate cartridge-level SRAM captures, sometimes bundled with debugger metadata

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
## What Disk 2 Adds Beyond Disk 1
The main reason Disk 2 matters is not that it replaces Disk 1. It expands it.

Two additions stand out immediately:

* `CGB_zeldaEIKOKU` adds a distinct UK English branch with its own `cgb_e` overlay beside the shared `cgb` and fallback `gb` trees
* `CGB_zeldaCANDA` is a much smaller flat Canadian branch made up almost entirely of top-level DMG-format source modules and audio/graphics resources

That split is interesting because the two new regions are not preserved in the same form. UK English looks like a full branch integrated into the normal Color-era project structure, while the Canadian material looks more like a lightweight localisation or packaging snapshot.

### The UK English Branch
`CGB_zeldaEIKOKU` follows the same broad pattern as the Disk 1 regional folders:

* a shared `cgb` directory
* a region-specific `cgb_e` overlay
* a fallback `gb` code path

The `cgb_e` folder contains the sort of branch-specific content you would expect from a real English localisation workspace: `gbmsdt_e.s`, `msg.txt`, `新規英文テキスト.txt`, `エンディング(NOA).txt`, and a set of `_e` source and object files such as `zatr_e.s`, `zcol_e.s`, `zend_e.s`, `zma_e.s`, `zms_e.s`, `zpr_e.s`, `zti_e.s`, and `zvd_e.s`.

That makes `CGB_zeldaEIKOKU` feel like a proper regional branch rather than just a final ROM drop. It preserves both text-facing localisation files and the branch-specific source layer that would have compiled them.

#### What the Text Files Show
The most revealing file is `msg.txt`. Its opening lines are a short internal note from Sakamoto saying that the requested English translation had arrived from Jim at NOA and asking the team to use it. Below that, the file immediately switches into actual message entries, including new English text for the Color-era content such as the color dungeon minibosses, owl hints, Piece of Heart text, Gold Leaf text, and photo-related dialogue.

`新規英文テキスト.txt` makes the same process even clearer. It is essentially a translated text handoff document, pairing message IDs with short Japanese context notes and then the English lines beneath them. That makes this branch unusually valuable, because it shows not just the final English text but part of the localisation workflow that carried it into the source tree.

`エンディング(NOA).txt` is another nice survivor. It preserves an English-facing ending credit list, including the 1998 staff and the original 1993 staff, and it explicitly names **Kyoko Kimura** as a character designer along with the English script staff.

#### Compared with the US Branch
Compared with Disk 1's `CGB_zeldaUSA/cgb_usa`, the UK branch is recognisably related but not identical.

At the top level, `cgb_e` shares only a small core of exact filenames with the US `cgb_usa` overlay. Much of the branch-specific source is renamed with `_e` suffixes instead of `_usa`, and many of the files that differ are exactly the ones you would expect in a localisation-heavy branch:

* text and message files
* ending/credit material
* branch-specific source modules such as `zma_e.s`, `zend_e.s`, `zms_e.s`, `zti_e.s`, and `zvd_e.s`
* branch-specific build and debugger outputs like `c_e.com` and `c_e.isx`

The shared `cgb` directory still carries the common engine layer, but the `cgb_e` overlay shows that Nintendo was not treating UK English as a trivial alias of the US branch. It had enough distinct text, source, and build state to justify its own maintained overlay.

#### What Actually Changes in the Source Modules
Once the UK `_e` modules are compared directly against the US `_usa` ones, a clearer pattern appears: most of the branch-specific code is extremely close, and the real differences cluster in only a few files.

The modules that are effectively identical include:

* `zatr_e.s` versus `zatr_usa.s`
* `zatrsub_e.s` versus `zatrsub_usa.s`
* `zcol_e.s` versus `zcol_usa.s`
* `zcolsub_e.s` versus `zcolsub_usa.s`
* `zma_e.s` versus `zma_usa.s`
* `zvd_e.s` versus `zvd_usa.s`
* `msg.txt` versus the US `msg.txt`

That is important because it means the UK branch was not a large gameplay fork. In many places it is the same underlying branch simply renamed and rebuilt for a different regional overlay.

The places that do change are more specific:

* `gbmsdt_e.s` versus `gbmsdt_usa.s` is 99.91% identical, with tiny text-level changes such as `lose all heart!` versus `lose all hearts!`, some shield wording reflow, and several puzzle-hint lines changing `BLUE RED` to `RED  BLUE` or `Red  Blue`
* `zrom.s` differs in the cartridge-header area, where the UK branch removes the explicit `ZELA` title bytes and the US version tagging seen in the US branch, leaving a more neutral overseas header state
* `cgal.bat` and `ddd` differ mainly because the UK build script swaps `_usa` modules for `_e` modules and links heavily against the German `cgb_d` tree rather than the US branch's dependencies on `DEMO_zelda`
* `zchr.s` changes only in a few `libbin` include paths, where the UK branch points some event graphics loads at the German `cgb_d` folder instead of the shared `DEMO_zelda` location used by the US branch

The bigger divergences are in `zend_e.s`, `zms_e.s`, and `zti_e.s`:

* `zend_e.s` is only about 94% similar to `zend_usa.s` and includes many path changes, comment/date differences, and code-layout drift, suggesting the ending branch was being maintained somewhat separately
* `zms_e.s` is only about 90% similar to `zms_usa.s`, and the reason is quite specific: the US file carries a large extra block dated `1998/09/28` and explicitly marked as code moved in from `zpl.s`. That block defines `MSBGAD`, `MSVRAH`, `MSVRAL`, and a long `MSVRSV` routine that backs up message-window tile data and, when `CGBFLG` is set, also switches `VBK` and `SVBK` to preserve the Color Game Boy attribute layer. In other words, the extra US-only block is not generic fluff. It is a substantial message-screen save routine with CGB attribute support that the UK `zms_e.s` copy does not carry in the same file
* `zti_e.s` is about 95.6% similar to `zti_usa.s`, with additional conditionals and branch logic differences around state handling and secret/new-dungeon checks

So the UK English branch looks less like a fully independent gameplay fork and more like a lightly diverged localisation branch sitting on top of mostly shared logic, with only a few modules absorbing the real region-specific drift.

#### What That Suggests
`CGB_zeldaEIKOKU` looks like a genuine localisation work branch rather than a late ROM export. It preserves translation handoff notes, message revisions, branch-specific source modules, and its own build outputs.

That makes it one of the most interesting parts of Disk 2. If Disk 1 is the best snapshot of the late main build environment, `CGB_zeldaEIKOKU` is one of the clearest snapshots of how that main build was being pushed outward into region-specific English localisation work.

### The Canadian Branch
`CGB_zeldaCANDA` is much stranger. Instead of the usual `cgb` / language-overlay / `gb` split, it is a flat directory with only 40 files.

Those files are almost entirely DMG-format modules and base resources:

* core source like `ZMA.DMG`, `ZPL.DMG`, `ZEX.DMG`, `ZEND.DMG`, `ZTI.DMG`, and the `ZE2` to `ZE8` set
* audio data like `BGM_1F.HEX`, `BGM_2.HEX`, and `SE.HEX`
* graphics banks `C1.CHR` to `C8.CHR`

That shape suggests the Canadian branch was not being maintained as a full parallel Color-era workspace in the same way as USA, UK, German, or French. It looks more like a compact localisation or build-prep snapshot rooted in the monochrome-compatible source path.

### DEMO_zelda on Disk 2 Compared with Disk 1
The most surprising Disk 2 result is how little its `DEMO_zelda` folder differs from Disk 1.

A full recursive compare shows:

* Disk 1 `DEMO_zelda`: 3113 files, 44 directories
* Disk 2 `DEMO_zelda`: 3095 files, 43 directories
* shared files: 3094
* byte-identical shared files: 3085
* changed shared files: only 9

Even the major content-heavy subtrees match almost perfectly in size. `kimura`, `sgb`, `CGX`, `COLOR`, `PHOTO`, `Geki`, `ENDING`, `BACKUP`, `ATR`, `ATR2`, `MAP`, and `New_sound` all have the same file counts on both disks.

That means Disk 2's `DEMO_zelda` is not a clearly different creative workspace. It is much closer to a near-clone or branch copy of the Disk 1 demo folder.

### The Small Set of Real Differences
The changed shared files are tightly clustered:

* `zgeki.s` and `ZGEKI.o`
* `zrom.s` and `zrom.o`
* `zti.s` and `zti.o`
* `C.isx`
* `isdwdcmd.dat`, `isdwdrng.dat`, and `isdwdsym.dat`

The biggest source difference is `zti.s`. Compared with Disk 2, the Disk 1 copy contains extra heart-container and name-handling logic, including a dedicated heart-container table and additional checks that line up neatly with the nearby `修正.txt` bug-fix note on Disk 1. `zrom.s` also looks version-marked in a useful way: Disk 1 identifies itself as a version 3 branch with heart-container fixes, while Disk 2 still looks closer to version 2.

By contrast, `zgeki.s` changes are tiny and mostly look like commented-out debug or temporary marker lines being cleaned up rather than a major content rewrite.

### What That Suggests
Taken together, Disk 2 looks less like "the next big workspace after Disk 1" and more like a localisation expansion layer wrapped around an almost unchanged copy of the same demo/build environment.

The new UK and Canadian folders are the genuinely new content. The demo workspace mostly serves as evidence that the branch was still anchored to nearly the same build bench, with only a few targeted source and debugger differences around versioning and late fixes.

On balance, that makes Disk 1's `DEMO_zelda` look slightly newer and closer to the later fixed state, while Disk 2 preserves an almost identical but slightly older-looking branch of the same workspace.

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

Disk 3 is where the CGB leak stops looking like a tidy regional backup and starts looking like a real workshop. Instead of mainly preserving release branches, it preserves test benches, support tools, DMG carry-overs, and rougher duplicate workspaces with backup files still lying around.

The main folders break down into a few different roles:

Folder | What it looks like | Why it matters
---|---|---
`TEST_zelda` | Focused level and asset test workspace | Best evidence on Disk 3 for hands-on room and dungeon testing
`DEMO_zelda` | Rougher clone of the main demo workspace | Preserves extra intermediates, backups, tools, and scratch material not seen on Disk 1
`bgcheck` | One-screen CG preview/check utility | Shows how art assets could be previewed quickly inside Nintendo's CGB workflow
`GBZE` and `gbzelda` | Older monochrome Zelda support folders | Preserve DMG-era build paths still living beside the color project
`CGB_samp` | General CGB sample/reference package | Shows the kind of low-level test code and helper material sitting around the workspace

---
## TEST_zelda

`TEST_zelda` is the most informative new folder on Disk 3. It is smaller than `DEMO_zelda`, but it is much more focused. Instead of being a broad release or regional branch, it looks like a dedicated test workspace for room data, dungeon resources, and colorised asset experiments.

File counts help show the difference in scale:

Folder | Files | Directories
---|---|---
`TEST_zelda` | 1226 | 31
`DEMO_zelda` | 3352 | 50

That makes `TEST_zelda` large enough to be a serious project folder, but still compact enough that its purpose reads more clearly.

### A Dungeon and Room Test Bench

The strongest clue is the layout of the level folders:

* `Level-5`, `Level-6`, `Level-7`, and `Level-8` each split into `CGX` and `SCR`
* those folders contain long runs of `ROOMxx.bin` files, for example `ROOM80.bin` through `ROOMA9.bin` in `Level-5`
* `Level-7` also includes special-case files like `HASIRA.bin`

That pairing makes the intent pretty clear. This workspace was preserving room graphics and room screen/layout data side by side, dungeon by dungeon, rather than only building one monolithic ROM image and throwing the working files away.

The rest of the folder reinforces that interpretation:

Folder | What survives there | What it suggests
---|---|---
`CGX` / `CGX2` | Test and dungeon graphics such as `TEST.CGX`, `TEST_clz5.cgx`, `clz1.cgx`-`clz9.cgx`, `g1.cgx`-`g9.cgx`, and many alternate `clz*a` / `clz*k` variants | The team was iterating on multiple visual versions of dungeon graphics rather than treating them as fixed compiled assets
`COLOR` / `COLOR2` | `.CDT` color-definition files like `2_room.CDT`, `5-room.CDT`, `bg_3a.CDT`, `heya-1.CDT`, `ido.CDT`, and `ietype_0.CDT` | Palette and color-layout data were being tuned as their own editable layer
`ATR` / `ATR2` | `.pnl` and `.pdt` attribute resources named after room groups and background chunks | Collision, panel, or attribute metadata was being edited directly alongside art and maps
`PANEL` / `PDT` | Additional panel resources | A second sign that this folder was built around testing map and room data, not just code

### Build Outputs and Tools Stay in the Same Folder

Like the main demo workspace, `TEST_zelda` is not cleanly separated into source versus build. The code, tools, intermediates, and debugger outputs all live together:

* source files like `zma.s`, `zpl.s`, `zti.s`, `zchr.s`, `zcol.s`, and `gbmsdt.s`
* object and intermediate files like `.o` and `.ISO`
* debugger images such as `C.isx`, `N.isx`, and `T.isx`
* shipped or near-shipped outputs such as `cgbzelda.com`, `CGZEL.COM`, `ZEL.BIN`, and `teszelda.com`
* the full toolchain, including `ISAS32.EXE`, `ISLK32.EXE`, `ISDMG.EXE`, `ISLINK.EXE`, `ISD.EXE`, and `SUMCHECK.EXE`

`cgal.bat` confirms that this was not just a passive archive. It assembles a large set of Zelda modules, from `ZMA` and `ZPL` through `ZCOL`, `ZATR`, and `ZMAP`, then links them with `ISLK32 @ddd`. In other words, `TEST_zelda` was still a working build folder, just one aimed at testing and iteration rather than at preserving a clean regional branch.

### What Makes It Different from DEMO_zelda

`TEST_zelda` overlaps heavily with the broader Zelda workspaces, but it is not just a smaller copy. The room-heavy level folders, the test graphics like `TEST.CGX`, the standalone `TEST1.SCR` and `TEST2.SCR`, and the concentration of panel/color resources all make it feel like a staging area for dungeon and screen experiments.

If Disk 1 showed how the main project was organised, `TEST_zelda` shows how specific parts of it were actually poked, rebuilt, and checked.

---
## DEMO_zelda on Disk 3

Disk 3 also carries another `DEMO_zelda`, but this one is much rougher than the cleaner snapshots on Disk 1 and Disk 2.

A recursive compare against Disk 1 shows the overall shape:

Measure | Disk 1 `DEMO_zelda` | Disk 3 `DEMO_zelda`
---|---|---
Files | 3113 | 3352
Shared filenames | 3094 | 3094
Only on this disk | 19 | 258

That means Disk 3 is not a different demo branch so much as a messier copy of the same bench, with a lot more debris left behind.

The extra files are revealing:

* many `.ISO` assembler intermediates such as `ZMA.ISO`, `ZPL.ISO`, `ZEX.ISO`, `ZEND.ISO`, and the full `ZE2` to `ZE8` set
* many backup files with `~` suffixes, including `cgal.bat~`, `ddd~`, `aada.doc~`, `bug.txt~`, `msg.txt~`, and backup copies of source modules across the whole tree
* tool executables such as `ISAS32.EXE` and `ISLK32.EXE` inside the workspace itself
* scratch areas such as `てすと`, extra `panel` variants, and photo-related helpers like `PHOTO/photocp`

That makes the Disk 3 copy valuable in a different way from Disk 1. Disk 1 is the better high-level snapshot. Disk 3 is the better "what was still lying on the desk" snapshot.

---
## bgcheck

`bgcheck` is one of the nicest little utility folders in the whole leak.

Its `readme.txt` describes it as a CGB one-picture CG check program. The workflow is very direct:

* export artwork from the CAD tool as `CGX`, `SCR`, and `COL`
* copy those files into the `bgcheck` folder
* rename them to `bg.cgx`, `bg.scr`, and `bg.col`
* run `xyz.bat`
* load `X.isx` in the debugger and execute it

So this was essentially a quick preview harness. Instead of rebuilding a whole Zelda branch just to inspect one background, artists and developers could drop in one screen's worth of art data and view it immediately through the standard debugger flow.

The folder contents line up perfectly with that purpose:

File or Folder | What it contains | Why it is interesting
---|---|---
`XYZ.BAT` | Tiny build script | Confirms the whole tool is meant to be rebuilt on demand
`X.isx` | Debugger image | The output loaded after running the batch file
`hy_main.s`, `hy_prog.s`, `hy_sub.s`, `chars.s`, `Nintendo.s` | Support code for the preview program | This was a real little application, not just a file converter
`ISAS32.EXE`, `ISLK32.EXE` | Assembler and linker | The toolchain was self-contained in the folder
`isdwd*.dat`, `isdws*.dat` | Debugger metadata | The same Intelligent Systems workflow seen elsewhere in the leak

The subfolders are even better:

* `KIMKYO` contains a large pile of real Zelda art assets in `.cgx`, `.scr`, and `.col` form, including photo-event files like `pho11.cgx`, `pho12c.col`, `pho9cgb.scr`, and `syasinya.cgx`
* `HABU` contains a smaller sample set around `marin3.cgx`, `marin3.scr`, and `marin3.col`
* `Test_char` contains a tiny character test set with `test.cgx` and `t0.scr` through `t9.scr`

That means `bgcheck` was not just a generic utility copied into the archive. It was being used with real Link's Awakening DX assets, including art tied to the photo system and region-specific graphics.

---
## The DMG Support Folders

`GBZE` and `gbzelda` are the clearest reminder on Disk 3 that the DX project was still carrying around a full monochrome Zelda world.

Both folders are flat DMG-era workspaces full of familiar pieces:

* `.DMG` source modules like `ZMA.DMG`, `ZEX.DMG`, `ZEND.DMG`, `ZTI.DMG`, and the `ZE2` to `ZE8` set
* `.ISO` intermediates
* DMG build tools like `ISDMG.EXE`, `ISLINK.EXE`, and `ISXTOBIN.EXE`
* shared asset formats like `C1.CHR` through `C8.CHR`, `BGM_1.HEX`, `BGM_2.HEX`, `SE.HEX`, and `RZ.ICE`

But they are not quite the same.

Folder | What stands out
---|---
`GBZE` | Leaner monochrome build/test folder with `SUBCALL`, `SUNCALL`, `T.ISX`, and only a small set of scripts
`gbzelda` | More content-facing DMG folder with `TEST.CGX`, `TEST1.SCR`, `TEST2.SCR`, `GBZEL.BIN`, extra `GAL*.BAT` variants, and a tiny `test.bat` that simply runs `isdmg zma`

So `GBZE` looks more like a stripped DMG build bench, while `gbzelda` looks more like a DMG Zelda sandbox carrying graphics tests and quick rebuild scripts.

Neither folder is as rich as the Disk 1 regional trees, but together they reinforce the same pattern seen elsewhere in the leak: even deep into the DX project, monochrome Game Boy source and tooling were still active enough to survive intact beside the color branch.

---
## CGB_samp

`CGB_samp` looks like a general low-level Game Boy Color sample package rather than a Zelda branch.

Its file list is built around reusable test programs and helper modules:

* framework files such as `MAIN.DMG`, `LIB.DMG`, `MACRO.DMG`, `GLOBAL.DMG`, `DEF.DMG`, `DEBUG.DMG`, and `INT.DMG`
* asset/data helpers like `BGDATA.DMG`, `CHRDATA.DMG`, `OBJDATA.DMG`, `PLTDATA.DMG`, and `SOUND.HEX`
* self-describing tests such as `BGTEST.DMG`, `KEYTEST.DMG`, `LCDTEST.DMG`, `SIOTEST.DMG`, `SOUNTEST.DMG`, `TIMETEST.DMG`, and `WINTEST.DMG`
* build/debug outputs like `LIB.ICE`, `LIB.ISO`, `LIB.ISX`, `CHECK.COM`, and `Check.bin`

`MAIN.DMG` opens with a very conventional low-level framework: reset vectors, interrupt vectors, LCDC on/off routines, DMA handling, and keypad interrupt setup. In other words, this is the sort of sample code a team could reuse when testing specific CGB hardware features.

Inside the Zelda DX article, the interesting part is not the sample package by itself. It is the fact that this kind of low-level test/reference code was sitting on the same disk as the Zelda workspaces, which says a lot about how mixed and practical the real development environment was.

---
# Why the CGB Leak Matters
<section class="postSection">
  <div markdown="1" class="rr-post-markdown">
Compared with the earlier DMG Link's Awakening leak, the CGB archive shows a much messier and more revealing development environment. Instead of only preserving clean floppy backups of source files, it keeps regional forks, ROM outputs, SRAM samples, demo builds, test folders, and the toolchain used to assemble and debug the Game Boy Color version.

That makes this one of the best surviving snapshots of how Nintendo and its collaborators were actually maintaining a late Game Boy/Game Boy Color project across multiple regions.
  </div>
</section>

---
# References
[^1]: [Kyoko Kimura - Zelda Dungeon Wiki, a The Legend of Zelda wiki](https://www.zeldadungeon.net/wiki/Kyoko_Kimura)
