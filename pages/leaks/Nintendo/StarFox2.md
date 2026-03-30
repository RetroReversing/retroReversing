---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Star Fox 2 Source Code (Gigaleak)
category:
- leak
- snes
permalink: /star-fox-2-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Original Star Fox 2 Source Code (SNES)
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/StarFox2.md
updatedAt: '2026-03-30'
---

The Nintendo Gigaleak preserves a much larger and messier Star Fox 2 workspace under `other/SFC/ソースデータ/StarFox2`.

Unlike the original Star Fox drop, this one is not just a compact source archive.
It preserves the main `SF2` game tree, a separate DOS-side content editor called `SFCAD`, a bundled `BIN` workstation tool directory, personal branch snapshots, packaged `.LZH` milestones, and even a standalone `SF.ROM` image in one developer folder.

{% include link-to-other-post.html post="/gigaleak" description="For the wider Gigaleak and the other Nintendo source-code drops, check out this post." %}

## At a Glance
The biggest takeaways from this Star Fox 2 drop are:

* the main `SF2` directory looks like a late, working game source tree rather than a token sample
* `MAKEFILE` still names the full bank build, including `bank0` through `bank11`, `shbanks`, `incbins`, and `incbins2`
* unlike several other Gigaleak projects, the assembler and linker named by the build scripts, `ARGSFXX` and `ARGLINK`, are actually present in the bundled `BIN` folder
* the archive keeps prebuilt <a href="#glossary-sob">`.SOB`</a> objects and <a href="#glossary-map">`.MAP`</a> linker maps beside the source, which makes this feel unusually close to a live developer checkout
* `SFCAD` is a separate DOS toolchain for shapes, fonts, slopes, and message assets rather than SNES runtime code
* `KAWAGUCH/SF2` looks like a later personal branch or mirror, with many files dated through September 1995
* `ZIPS` contains packaged `.LZH` milestones, including `SF_J_FIN.LZH` and `SF_E_FIN.LZH`

What makes this drop special is that it shows both halves of the project.
You can study the banked Super FX game code, but you can also see the PC-side tools and personal workspaces that sat around it.

---
## Glossary of Key Terms
This page uses several project-specific build and asset terms that are worth defining up front:

* <a id="glossary-sob"></a>**SOB** - The assembled object output produced by the Argonaut assembler before final linking.
* <a id="glossary-map"></a>**MAP** - A linker or build map showing symbol layout and bank placement for the assembled output.
* <a id="glossary-pcr"></a>**PCR** - Packed graphics or compressed resource input files pulled in by the binary packing banks.
* <a id="glossary-ccr"></a>**CCR** - Companion color or resource definition files that sit beside many of the packed graphics inputs.
* <a id="glossary-cgx"></a>**CGX** - Tile or graphics data files used heavily by the art and editor side of the project.
* <a id="glossary-pac"></a>**PAC** - Packed resource bundles, such as the large `allcols.pac` color package.
* <a id="glossary-sfcad"></a>**SFCAD** - The DOS-side content editor and asset workspace preserved beside the game source.
* <a id="glossary-superfx"></a>**Super FX** - Nintendo and Argonaut's 3D coprocessor family used by Star Fox and Star Fox 2.

---
# Root Directory (SFC.7z/ソースデータ/StarFox2)
At the top level the Star Fox 2 leak is much broader than the earlier Star Fox folder.
It mixes the game source with workstation tools, local branch copies, editor installs, and packaged milestone archives.

{% capture starfox2_root_body %}
The main thing to notice is that this is not just one clean project checkout.
The archive preserves the main `SF2` build tree, the separate <a href="#glossary-sfcad">`SFCAD`</a> editor side, a bundled DOS tool bin, and several personal or packaged snapshots around them.
{% endcapture %}

{% capture starfox2_root_items %}
- SF2 - Main Star Fox 2 game source tree with banked assembly, maps, sound, binary resources, `.SOB` outputs, and `.MAP` files
- SFCAD - DOS content editor and asset workspace with C++ sources, built executables, fonts, messages, slopes, and shape data
- BIN - Bundled workstation tools, including `ARGSFXX.EXE`, `ARGLINK.EXE`, `MAKE.EXE`, `PKZIP.EXE`, and many DOS utilities
- BRIEF - Brief editor install plus a huge `BACKUP` mirror that mixes Star Fox 2 sources with workstation-side C utilities and backup scripts
- KAWAGOE - Personal machine boot files plus a standalone `SF.ROM` image dated `1 April 1994`
- KAWAGUCH - Later personal mirror of the `SF2` tree with `360` files dated through `September 1995`
- EGUCHI and YAMADA - Personal copies of editor-side tools such as `SFC.EXE`, `SLOPE.EXE`, and `SHAPED.EXE`
- ZIPS - Packaged `.LZH` milestones from `June` to `September 1995`, including `SF_J_FIN.LZH` and `SF_E_FIN.LZH`
{% endcapture %}

{% include connected-folder-tree.html folder="StarFox2" path="other/SFC/ソースデータ/StarFox2" body=starfox2_root_body content=starfox2_root_items %}

Two top-level remnants are also worth noting.
`ROM` and `YAJIMA` survive as almost empty directories, which makes the rest of the archive feel even more like a copied workstation tree rather than a carefully repackaged release set.

---
## How Complete This Looks
This looks stronger than a typical "near-complete source snapshot".
It is closer to a preserved developer workspace.

The strongest signs in its favour are:

* the `SF2` tree contains the source, includes, maps, data folders, sound folders, build scripts, and packed binary resources
* the main game folder also keeps prebuilt <a href="#glossary-sob">`.SOB`</a> objects and <a href="#glossary-map">`.MAP`</a> outputs, which means the archive is not source-only
* the `BIN` folder contains the exact assembler and linker named by `SF2/MAKEFILE`, `ARGSFXX.EXE` and `ARGLINK.EXE`
* the separate `SFCAD` tool workspace survives with both source and built executables
* personal snapshots such as `KAWAGUCH/SF2` and packaged `.LZH` milestones in `ZIPS` show that the project was still being copied and frozen in multiple forms through `1995`

There are still a few reasons to stop short of calling it perfectly self-contained:

* the top-level `SF2` tree does not keep one obvious final ROM image beside the main build products
* some local workstation assumptions may still live in the boot scripts, path setup, or editor installs rather than in the source folder itself
* the most polished final artifacts appear in side folders such as `KAWAGOE/SF.ROM` and `ZIPS/SF_J_FIN.LZH`, not in one single "release" directory

So the safest description is:
this looks like a late, very complete Star Fox 2 development workspace, with source, tools, generated outputs, and branch snapshots all preserved together.

---
## SF2 - Main Game Source Tree
`SF2` is the heart of the leak.
It looks like a late 1995 game tree with source, generated objects, map outputs, binary asset banks, and region-specific message files all sitting side by side.

{% capture sf2_body %}
The main project tree is split into a few clear layers:

* banked assembly sources and shared include files at the top level
* `DATA`, `MAPS`, `MSPRITES`, and `SOUND` as the content side of the build
* `EXT` as exported/public symbol definitions used across the banked code
* prebuilt `.SOB` and `.MAP` files, which make the folder feel like a working checkout rather than a source-only mirror
{% endcapture %}

{% capture sf2_items %}
- Top-level bank sources - `BANK0.ASM` to `BANK11.ASM`, plus `SHBANKS.ASM`, `INCBINS.ASM`, and `INCBINS2.ASM`
- Shared definitions - `65` `.INC` files and `118` `.EXT` files for headers, exported symbols, macros, and structures
- Core runtime modules - files such as `MAIN.ASM`, `GAME.ASM`, `WORLD.ASM`, `PLANETS.ASM`, `OBJ.ASM`, `SOUND.ASM`, `DRAW.ASM`, and `INTRO.ASM`
- DATA - packed art, palette, font, and resource inputs such as `.PCR`, `.CCR`, `.CGX`, and `.PAC`
- MAPS - mission, battle, title, test, and demo route scripts
- MSPRITES - binary sprite packs used by the final binary-pack step
- SOUND - streamed sound and music payloads used by `INCBINS2.ASM`
- Build outputs - `13` `.SOB` files and `12` `.MAP` files kept beside the source
{% endcapture %}

{% include connected-folder-tree.html folder="SF2" path="StarFox2/SF2" body=sf2_body content=sf2_items %}

The quick file-type count is useful because it shows how broad the tree really is:

File type | Count | What it suggests
---|---|---
`.ASM` | `221` | A large banked codebase rather than a token sample
`.EXT` | `118` | Heavy use of exported/public symbol definition files across banks
`.BIN` | `106` | A lot of prebuilt binary data and sound payloads
`.CCR` | `67` | Many companion color/resource definition files
`.INC` | `65` | Extensive shared macro and structure layers
`.PCR` | `61` | Large amounts of packed graphics/resource data
`.MC` | `48` | A deep macro/support layer for rendering and utility code
`.SOB` | `13` | Surviving assembled object outputs from the real build flow
`.MAP` | `12` | Surviving layout/map outputs from linked banks

The main tree also keeps little revision clues such as `BANK11.OLD` and `BPATHDAT.NEW`.
Those do not change the overall build picture, but they make the folder feel even more like a live working checkout.

---
### How the Main Build Works
The first big clue is `SF2/MAKEFILE`.
It uses `ARGSFXX` as the assembler and `ARGLINK` as the linker, and it still defines the final outputs `finished.sg` and `sf.rom`.

That alone would already be useful.
What makes it more interesting is that the build products named in the makefile also survive in the folder.

Output | Role
---|---|
`finished.sg` | Default linked build target
`sf.rom` | Explicit ROM output target
`bank0.sob` to `bank11.sob` | Main assembled bank objects
`shbanks.sob` | Shared shape-bank object
`incbins.sob` | Packed graphics and resource object
`incbins2.sob` | Packed sound and music object

This build layout is one of the clearest signs that the archive is not just source.
The project still has the assembler, linker, object outputs, and map files in roughly the same place a developer would have used them.

It is also not perfectly tidy.
`BANK9.ASM` survives in the tree, but it is not part of the main `ALLFILES` target, which suggests the archive preserves at least a little bit of branch residue or retired build structure as well as the active path.

---
### What the Bank Layout Reveals
The bank dependencies in `MAKEFILE` act like a table of contents for the whole game.

Some of the most revealing groups are:

* `bank2.sob` pulls in a large chunk of the main runtime, including `MAIN.ASM`, `GAME.ASM`, `OBJ.ASM`, `PLANETS.ASM`, `WORLD.ASM`, `SCREEN.ASM`, `INTRO.ASM`, `SOUND.ASM`, and `DRAW.ASM`
* `bank4.sob` leans into map, title, sprite, and screen setup work with files like `MISMAP.ASM`, `MAPANIME.ASM`, `CONFIG.ASM`, and `TITLE.ASM`
* `bank5.sob` is the clearest mission bank, because it assembles the `MAPS` route files directly
* `bank6.sob` and `bank7.sob` pull in player, view, display, and strategy-side modules
* `bank8.sob` is unusually data-heavy, combining path files, charts, fonts, slopes, weapons, and results code
* `shbanks.sob` and the two `incbins` banks are effectively the asset-packing half of the build

That tells us Star Fox 2 was not laid out as a tiny central loop with a few helper files.
It was a deliberately banked production tree with code, path logic, shape banks, compressed graphics, and streamed sound all split into separate build products.

---
### What MAIN.ASM Reveals
`MAIN.ASM` is a particularly good entry point because it exposes both high-level game concepts and the low-level initialization flow.

Right near the start it seeds named gameplay variables like `fox`, `frog`, `bunny`, `cock`, `pepper`, and `andorf`, then calls routines such as `playerstatus_init_l`, `playerstart_init_l`, and `initplanets_l`.
That makes the source feel much closer to a real game than to anonymous engine scaffolding.

The same file also shows how many team-specific systems were being layered together.
The comments call out "kawaguchi params", "Yajima's Parameter", "Kawagoe's Parameters", and even a separate "Dylan Parameters" block.
That is a nice little production detail.
The code still preserves evidence of multiple people or subsystems feeding configuration into the same startup sequence.

The mission and battle split is also visible in plain assembly.
`initgame_l` branches between mission and battle setup, resets map and timer state, configures radar scale, sets window and HDMA state, and clears a large amount of gameplay state before the first scene starts.

---
### What the Map and Mission Package Reveals
The `MAPS` folder is one of the most useful content-side parts of the whole leak because it is still named in the main build.

{% capture maps_body %}
This folder is not an optional extra beside the source tree.
`bank5.sob` explicitly assembles these route and mission files as part of the normal build, including battle maps, story stages, SOS missions, training routes, demos, and test scenarios.
{% endcapture %}

{% capture maps_items %}
- MAPP.ASM and MAPLIST.ASM - Core map package files
- TITLEMAP.ASM - Title-screen map data
- BAT - `BAT1.ASM` to `BAT5.ASM` battle or arena map scripts
- MIS - Story stages, SOS missions, demos, tests, and transitional scripts such as `STG1.ASM`, `SOS1.ASM`, `DEMO0.ASM`, `TEST.ASM`, and `TRA1.ASM`
{% endcapture %}

{% include connected-folder-tree.html folder="MAPS" path="StarFox2/SF2/MAPS" body=maps_body content=maps_items %}

The mission names are revealing on their own.
This tree still has stage scripts, battle maps, demo playback content, title-map data, and a `TEST.ASM`, which makes it look like a real iteration workspace rather than a cleaned archive of only shipping material.

---
### What the Scenario Scripts Actually Look Like
`MAPLIST.ASM` makes the folder structure much easier to read because it names the map package in terms of actual game roles instead of just filenames.

It defines:

* a player map in `MAPP.ASM`
* a dedicated `TITLEMAP.ASM`
* named mission scripts like `stg1map` through `stg6map`
* alternate or side-route scripts like `ext1map` through `ext4map`
* SOS scripts `sos1map` through `sos3map`
* ten separate demo maps, including `titledemomap`, `startenemydemomap`, `endingdemomap`, `specialenemydemomap`, and `cannondemomap`

That one file shows that the `MAPS` folder is really a scenario library.
It is not just "level geometry".
It is the script layer that ties title mode, gameplay, demos, and special scenes together.

---
### What the Mission Files Reveal
The individual mission scripts are full of gameplay staging rather than just coordinates.

`STG1.ASM` is a good example because it exposes a lot of the map scripting vocabulary in one place.
It switches between ground and room starts, sets the mission background, configures battle area bounds and camera behavior, places the player start, seeds dust and radar state, and then fills the map with scripted objects using commands like `pathobj` and `m_inertpath`.

The same file also branches by difficulty.
It has separate `step1_0`, `step1_2`, and `step1_4` blocks, each with different object layouts, switch setups, enemy placements, item boxes, and environmental props.
That makes the mission files look much closer to authored encounter scripts than to static map blobs.

There is also a clear training route embedded in the same stage file.
`STG1.ASM` jumps to `training_mode` for one level setting, then places simpler landmarks like bridges, houses, and way markers.
That is another useful clue that the map scripts were handling mission logic and mode selection together.

---
### Battle, Demo, and Test Maps
The non-story scripts are just as revealing.
They make it clear that the `MAPS` folder was also carrying multiplayer, title-loop, and debug-style content.

Script | What it appears to do | Why it matters
---|---|---
`BAT1.ASM` | Sets up a ground battle arena with two player start positions, arena bounds, item spawns, and battle-init objects | Shows that battle mode was using the same map scripting system as the main missions
`DEMO0.ASM` | Sets the `titledemo` background, colored moving dust, and `map_demomode title` | Looks like part of the title-loop playback system rather than a normal mission
`DEMO6.ASM` | Uses the same simple looping scene structure but switches `map_demomode credits` | Preserves a dedicated credits/demo playback route
`TEST.ASM` | Loads `attackcorneriademo` and uses `map_demomode destruct_enemy` | Looks like a compact test or debug scenario rather than shipping stage content

`MAPP.ASM` is small but useful too.
It places `EXplayer_Istrat`, checks for one-screen mode, and conditionally adds `EXplayer2_Istrat`, which makes it look like a tiny player-start or mode-bootstrap script rather than a full mission.

That combination is what makes this folder so valuable.
The leak preserves the scripting layer for actual stages, but it also keeps the route definitions for battle mode, the title/demo loop, the credits path, and a leftover test scenario.

---
### What the Binary Packing Banks Reveal
`SHBANKS.ASM`, `INCBINS.ASM`, and `INCBINS2.ASM` are some of the best files in the archive for understanding how the final ROM was assembled.

`INCBINS.ASM` is effectively the graphics and resource packer.
It pulls in `MSPRITES` sprite packs, a large run of <a href="#glossary-pcr">`.PCR`</a> and <a href="#glossary-ccr">`.CCR`</a> inputs, tile graphics such as <a href="#glossary-cgx">`.CGX`</a> files, and big packed resources such as `allcols.pac`.

`INCBINS2.ASM` does the same thing for sound.
It gathers `fox2snd.bin`, sound-effect groups like `sdse1.bin` and `sdse2.bin`, set files like `ffset1.bin` and `spset1.bin`, and a long run of `music01.bin` through the later numbered music banks.

That split matters because it shows the build system treating game logic, graphics payloads, and sound payloads as distinct layers.
The banked assembly is only part of the final ROM.
These two packer files are the other half of the production pipeline.

---
### INCBINS.ASM as a Region and Revision Switchboard
`INCBINS.ASM` is more revealing than a plain asset list because it does not just pack files.
It also chooses between regional and revision-specific variants at build time.

The top of the file splits the sprite packs by `PAL` and `janglish`, so the same bank numbers can pull in:

* `spt_23.bin` and `spt_45.bin` for the default NTSC/Japanese path
* `spt_23A.bin` and `spt_45a.bin` for the English path
* `spt_23P.bin` and `spt_45p.bin` for PAL

The larger art banks do the same thing with many more files.
The Japanese path includes assets like `w0.ccr`, `e5.ccr`, `e6.ccr`, and `b14.pcr`, while the English path swaps in alternates such as `w0_a.ccr`, `e5_a.ccr`, `e6_a.ccr`, `b14_a.ccr`, and `b14_a.pcr`.

That is one of the best low-level details in the whole archive.
The build was not relying only on text or message files for localisation.
It had separate graphics and packed-resource variants for different builds too.

`INCBINS.ASM` also keeps year-tagged art decisions in plain sight.
The `e9` resource is selected through `kyear-95`, `kyear-96`, and `kyear-97` conditionals, with matching files like `e9.ccr`, `e9_96.ccr`, `e9_97.ccr`, and the `_a` English variants.
That makes the packer feel less like a static final script and more like a live branch that kept absorbing updated art revisions over time.

---
### What the Graphics Banks Actually Hold
The graphics side is split quite deliberately across banks `18` to `25`.

Bank range | Content focus | Evidence
---|---|---
`18` to `20` | Main sprite banks | `msprites\\spt_01.bin`, `spt_23*`, `spt_45*`
`21` to `23` | Large runs of packed `.CCR` and `.PCR` art resources | the `a*`, `e*`, and `b*` families
`24` | Mixed support bank with `d3_3.asm`, `sprdata.asm`, `keyscr.asm`, `kawaguti.cgx`, and `allcols.pac` | a blend of code/data helpers and packed graphics
`25` | Another dense `.CCR` / `.PCR` bank plus `mdata.mc` | looks like the tail end of the packed graphics layer

Two details stand out here.

First, `allcols.pac` and `kawaguti.cgx` are treated as first-class build inputs, not odd leftovers.
That makes them feel like major shared visual resources rather than one-off test files.

Second, the structure in `DATA` backs up what the script is doing.
The folder still has both default and `_A` English variants for many `B*`, `E*`, and `W*` resources, which matches the conditional packing logic exactly.

---
### INCBINS2.ASM as the Audio Packer
`INCBINS2.ASM` does for sound what `INCBINS.ASM` does for graphics, but the audio split is even easier to read because the symbolic names are more explicit.

The file packs several layers of audio content:

* base sound sets such as `fox2snd`, `sdse1`, and `sdse2`
* grouped sound-effect collections like `ffset1`, `ffset2`, `spset1`, `spset2`, `ggset1`, and `ggset2`
* voice banks for named characters and speakers, including `foxvox`, `falvox`, `pepvox`, `slpvox`, `ga1vox`, and `ga2vox`
* a long run of music banks from `music01` through `music25`, plus `music18b`
* scene or context banks like `sdgrd1`, `sdspac`, `sdcnt`, `sdovr`, `sddis`, and `sdtlk`

That mix is useful because it shows the game was not treating audio as one monolithic blob.
The ROM was carrying separate banks for music, voices, menu or event speech, and grouped environment/effect sets.

The named voice banks are especially interesting because they are not isolated in the packer.
The same labels are referenced again in `SOUND.ASM`, which means this is a real symbol-driven audio pipeline rather than a dead include list.

---
### Region, Language, and Size Clues in the Audio Build
The sound packer also preserves a lot of late-build decision making.

For music, the file switches between the normal `musicNN.bin` set and PAL-specific `mNN_p.bin` files.
That suggests the PAL build was not just a timing tweak in code.
It had its own alternate music assets.

There is also a small but revealing language split in the talk bank.
When `janglish` is enabled the build packs `sdtlk.bin`, and when it is not it switches to `sdtlk2.bin`.
Since `VARS.INC` defines `janglish equ 0 ; 0 = english, 1 = japanese`, the talk data was clearly being selected per-language in the pack script itself.

The file ends with an explicit ROM-size guard:
if the packed data pushes the build past `$100000`, it prints `MORE THAN 8 MEGA-BITS OF ROM USED!!` and fails.
That is a great little production clue.
It shows the packer was not just collecting files.
It was one of the places where the team was actively policing cartridge size limits.

---
## SFCAD - DOS Content Editor and Asset Workspace
`SFCAD` is the most interesting non-runtime part of the leak.
It looks like a DOS content tool built in C++ for shape, font, message, and slope work rather than SNES gameplay code.

{% capture sfcad_body %}
The folder mixes source, object outputs, executables, fonts, messages, and editable asset files.
That makes it feel like a live PC-side authoring tool rather than a one-off utility.
{% endcapture %}

{% capture sfcad_items %}
- C++ sources - `SFC.CC`, `WINDOWS.CC`, `GADGETS.CC`, `EXTRAS.CC`, `SLOPES.CC`, `FONTS.CC`, `MESSAGES.CC`
- Build files - `MAKEFILE`, `MAKE.ERR`, headers, `.O` objects, and `.EXT` symbol definitions
- Executables - `SFC.EXE`, `SFC2.EXE`, and `SFCORG.EXE`
- Fonts - large runs of `.FNT` files across `COUR`, `HELV`, `TMS`, `SYMB`, `XM`, and PC font families
- Asset files - `.CGX`, `.BIN`, `.SLO`, `.ANM`, `.MSG`, and plain-text shape descriptions such as `BUILD_1.TXT`
{% endcapture %}

{% include connected-folder-tree.html folder="SFCAD" path="StarFox2/SFCAD" body=sfcad_body content=sfcad_items %}

---
### How the Editor Builds
`SFCAD/MAKEFILE` shows a completely different toolchain from the SNES game itself.
It uses `GCC`, `BLINK`, and `go32`, plus `grx` and `libm`, to build a DOS executable called `sfc.exe`.

That split is extremely useful because it makes the project boundary very obvious:

* `SF2` is the Super Nintendo game-side build
* `SFCAD` is the PC-side authoring environment used to prepare content for that game

The preserved `.O` files and `.EXE` binaries make this even clearer.
This was not just a helper source folder.
It was a compiled tool that lived alongside the game source as part of normal development.

---
### What the Main Program Actually Does
`SFC.CC` makes the tool's front end surprisingly easy to read.
It identifies itself as `Starfox CAD Tool v0.9 - (c) 1994 Dylan Cuthbert`, creates a windowed DOS GUI, and builds a simple mode menu with:

* `Font Conversion`
* `Starfox Messages`
* `CGX Tweaking`
* `Slope Data`

The most interesting little wrinkle is that the visible menu is ahead of the source we have.
In `DoMode`, the code actually dispatches only the font, slope, and message tools.
`CGX Tweaking` is still present in the menu definitions, but there is no matching live mode handler in the surviving source.

That could mean the CGX editor lived in code we do not have, or that the option was planned or partially removed without the menu being cleaned up.
Either way, it is a nice reminder that even the tool side of the leak preserves signs of active iteration.

---
### Fonts and Message Editing
The font and message modules show that `SFCAD` was not just a geometry tool.
It was also handling UI and localisation assets.

`FONTS.CC` builds a large internal character map covering:

* Latin uppercase and lowercase
* digits and punctuation
* special symbols
* Japanese punctuation
* hiragana
* katakana

That lines up neatly with the preserved font assets and the separate `JAPANESE.MSG` and `ENGLISH.MSG` files in the same folder.
The tool was clearly designed to manage multilingual text presentation rather than a single western-only font pipeline.

`MESSAGES.CC` goes one step further and shows how those assets were previewed and edited.
It loads `.msg` files and `.bin` font data, keeps per-message name and sound lists, draws the text into a preview window with real glyph widths, and even exposes a `wordwrap` boundary visually.

That is a very practical preservation detail.
The editor was not only storing script strings.
It was previewing how they would actually fit on screen with the packed in-game font.

---
### Slope Data and Shape Authoring
`SLOPES.CC` is the clearest proof that the tool was doing 3D content preparation rather than just text work.

It defines editable slope types such as `GROUND`, `WATER`, `ICE`, and `GRASS`, tracks per-face flags like `slopepoly` and `animation`, and can export selected geometry into `.slo` files with generated metadata and timestamps.

That makes the `.SLO` files in the folder much easier to interpret.
They are not random opaque blobs.
They are authored collision or traversal surfaces exported from the CAD tool.

`BUILD_1.TXT` gives the same side of the tool a simpler plain-text face.
It stores a small object as vertices and polygon definitions, which makes it feel like a hand-editable or intermediate format the editor could consume during shape work.

---
### What the Asset Files Suggest
The file mix inside `SFCAD` tells us what kinds of assets the tool was handling.

The font library is the first obvious clue.
There are many `.FNT` files across multiple families and sizes, plus matching `JAPANESE.MSG` and `ENGLISH.MSG` files, which suggests the editor had to deal with UI and message presentation in more than one language.

The slope and shape side is also visible.
Files like `K_TORI_0.SLO`, `SAKA_7.SLO`, `YAMA_0_0.SLO`, and `YAMA_1_2.TXT` sit beside `.ANM` and `.CGX` assets, which makes the tool look like a hybrid map/shape editor rather than a single-purpose font utility.

`BUILD_1.TXT` is a nice little example.
It stores a simple 3D object definition in plain text, with a vertex count, coordinate list, and polygon faces.
That kind of file makes `SFCAD` feel much closer to an in-house shape-building or authoring tool than to a generic external package.

The editor-side outputs also line up neatly with the game tree.
Files like `FONT_0.BIN`, `FONT_1.BIN`, `MMJ.BIN`, and `MME.BIN` have obvious cousins in the main `SF2` folder, which suggests `SFCAD` was generating content that the game-side packer banks later pulled into the final build.

The utility code around the editor reinforces that.
`WINDOWS.CC` sets up a 640x480 GRX graphics mode with mouse support and multiple font families, while `EXTRAS.CC` implements a full DOS file requester for loading and saving project files.
So `SFCAD` was not a command-line converter.
It was a proper mouse-driven in-house editor environment.

---
## Supporting Workstation Material
The outer folders around `SF2` and `SFCAD` are not just noise.
They are part of what makes this leak feel like a copied developer machine rather than a cleaned source release.

---
### BIN - The Bundled Tool Bin
`BIN` is unusually valuable because it contains the actual DOS-side tools referenced by the game build, not just generic utilities.

The most important files are:

* `ARGSFXX.EXE` - the assembler named by `SF2/MAKEFILE`
* `ARGLINK.EXE` - the linker named by `SF2/MAKEFILE`
* `MAKE.EXE` - the build driver used by the DOS makefiles
* `ARGBUG.EXE` and the matching `ARGBUG*.ROM` files - debugger or ROM-side tooling tied to the Argonaut environment

Around those sit many ordinary workstation tools too, including `PKZIP`, `PKUNZIP`, `LHA`, FTP clients, backup scripts, and DOS utilities.
That wider mix is useful because it shows the build tools living inside a much broader personal workstation environment rather than inside one neat SDK directory.

---
### BRIEF and BACKUP - Editor and Mirror Snapshot
`BRIEF` starts as a normal install of the Brief text editor, but the real value is its `BACKUP` directory.

That `BACKUP` mirror is huge and messy.
It includes many Star Fox 2 source files, older or parallel copies of the bank sources, asset tools, build scripts, and also a large amount of unrelated PC-side C code for things like chat, HTML, mail, and network utilities.

That mix matters because it tells us two things at once:

* the developer was using `BRIEF/BACKUP` as a real working backup area rather than as a polished project export
* the Star Fox 2 source lived inside a normal everyday workstation environment full of side tools, experiments, and personal utilities

The dates inside `BACKUP` also skew earlier than the main `SF2` tree in a lot of places.
That makes it a useful shadow archive for older revisions, even though it is clearly noisier than the main project folder.

---
### Personal Branches and Packaged Milestones
Several smaller folders make the late-project history easier to read.

Folder | What survives | Why it matters
---|---|---
`KAWAGOE` | `AUTOEXEC.BAT`, `CONFIG.SYS`, and a `997,300` byte `SF.ROM` dated `1 April 1994` | Preserves a standalone ROM snapshot plus one developer machine's boot environment
`PENTIUM` | `AUTOEXEC.BAT` and `CONFIG.SYS` dated `25 September 1995` | Suggests a later workstation setup or migration to a newer machine
`KAWAGUCH/SF2` | `360` files, many matching the main `SF2` tree but with dates through `September 1995` | Looks like a later personal mirror or branch of the same project
`EGUCHI` | `SFC/SFC.EXE` dated `8 July 1994` | A personal copy of the editor-side toolchain
`YAMADA` | `SLOPE.EXE`, `SHAPED.EXE`, and `SFC.EXE` under `SF2SLO` | Personal copies of slope/shape/editor tools
`ZIPS` | `ES18-9.LZH`, `JS18-9.LZH`, `SF_E_FIN.LZH`, `SF_J_FIN.LZH`, and related packages from `June` to `September 1995` | Packaged milestone or final-region archives, including explicit Japanese and English final bundles

The `ZIPS` folder is especially telling.
By late September 1995, the archive has both `SF_J_FIN.LZH` and `SF_E_FIN.LZH`, which is about as close as this leak gets to preserving named final packaged builds.

---
## Why This Archive Matters
The Star Fox 2 leak is useful for more than just proving that source survived.

It shows the shape of the whole production environment:
the banked Super FX game code, the route and asset packers, the separate DOS content editor, the bundled assembler and linker, personal workstation backups, and final packaged milestones.

That makes it one of the best Nintendo source leaks for studying how an unfinished late-SNES game was actually built day to day.
It is not only the code for Star Fox 2.
It is much closer to the surrounding workshop.
