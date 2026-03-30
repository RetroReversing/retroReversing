---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Star Fox Source Code (Gigaleak)
category: 
- leak
- snes
permalink: /star-fox-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Original Star Fox Source Code (SNES)
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/StarFox.md
updatedAt: '2026-03-30'
---

The Nintendo Gigaleak preserves a compact but very revealing Star Fox source drop under `other/SFC/ソースデータ/StarFox`.

Unlike the F-Zero leak, this one is not laid out as loose source folders from the start.
It survives as two separate LZH archives: one for the main game/build tree and one for the map package that the main makefile expects to assemble into the final ROM.

{% include link-to-other-post.html post="/gigaleak" description="For the wider Gigaleak and the other Nintendo source-code drops, check out this post." %}

---
## At a Glance
The big takeaways from this Star Fox drop are:

* the main code and the route/map package survive as two separate archives rather than one extracted tree
* `SG.LZH` looks like the core build tree, with banked assembly, include files, strategy modules, data lumps, and sound banks
* `MAPS.LZH` looks like the level and route package that `MAKEFILE` expects for the heavier map banks
* the build uses `SASMX` as the assembler and `SL` as the linker
* the makefile targets `finished.sg` and `sg.rom`
* `MAIN.ASM` still exposes game-side variables such as `fox`, `frog`, `bunny`, `cock`, `pepper`, and `andorf`
* the archive preserves a lot of the surrounding production data too, including palettes, fonts, route scripts, sprite packs, and many binary sound banks

What makes this leak special is that it preserves both the banked Super FX code structure and the separately packed mission/map layer.
You can see not just "the Star Fox source", but also how its banks, routes, shapes, and data payloads were expected to come together at build time.

---
## Glossary of Key Terms
This page uses several project-specific build terms that are worth defining up front:

* <a id="glossary-sg"></a>**SG** - The label used by the main build products such as `finished.sg` and `sg.rom`.
* <a id="glossary-sob"></a>**SOB** - The assembled object output produced by `SASMX` before final linking.
* <a id="glossary-inc"></a>**INC** - Include files containing shared constants, macros, structures, and declarations.
* <a id="glossary-ext"></a>**EXT** - Public symbol/export definition files used across the banked build.
* <a id="glossary-mc"></a>**MC** - Macro or support source files used heavily by the main engine and rendering side of the project.
* <a id="glossary-superfx"></a>**Super FX** - Nintendo and Argonaut's 3D coprocessor family used by Star Fox and other SNES games.

---
# Root Directory (SFC.7z/ソースデータ/StarFox)
At the top level the Star Fox leak is tiny.
Everything is packed into just two timestamped archives from February 1993.

{% capture starfox_root_body %}
The split between the two archives is the first important thing to notice.
`SG.LZH` is the main game/build tree, while `MAPS.LZH` looks like the route and mission package that the main build expects to pull in.
{% endcapture %}

{% capture folder_items %}
- SG.LZH - Main Star Fox source and build archive (`1,181,921` bytes, `15 February 1993`)
- MAPS.LZH - Route/map archive plus sprite data (`178,925` bytes, `15 February 1993`)
{% endcapture %}

{% include connected-folder-tree.html folder="StarFox" path="other/SFC/ソースデータ/StarFox" body=starfox_root_body content=folder_items %}

The fact that the map package is separate matters because the main `MAKEFILE` inside <a href="#glossary-sg">SG</a> explicitly references `maps\*.asm`.
So this is not a random extra archive beside the game.
It looks like part of the normal build input.

---
## How Complete This Looks
This looks much closer to a near-complete working source snapshot than a token code sample.

The strongest signs in its favour are:

* `SG.LZH` contains the build scripts, bank sources, include files, exported symbol files, binary sound banks, and large data payloads
* `MAPS.LZH` contains the route and mission source files that `MAKEFILE` clearly expects
* `STDFILES.LOG` inside `SG.LZH` lists the standard build set, including `*.inc`, `*.ext`, the bank files, `shbanks.asm`, and `incbins.asm`

It is still safest to call this a **near-complete source snapshot** rather than a guaranteed fully self-contained rebuild package.

The missing or uncertain pieces are:

* the actual assembler and linker executables, `SASMX` and `SL`, are referenced but not bundled
* there are no surviving `.sob` outputs or final linked binaries in the leak folder itself
* some SDK or workstation assumptions may still have lived outside these archives

So the important distinction is:
the leak appears to preserve most of the real Star Fox source and its route package, but it should not be described as a fully self-contained rebuild set unless a clean build has actually been demonstrated.

---
## SG.LZH - Main Game and Build Archive
`SG.LZH` is the heart of the leak.
It holds the banked game source, the build logic, the shared include files, the strategy/object modules, and the bulk of the binary asset payloads.

{% capture sg_body %}
The archive mixes several different layers of the project:

* bank assembly such as `BANK0.ASM` through `BANK11.ASM`
* shared include and export files such as `HEADER.INC`, `MACROS.INC`, and `MAIN.EXT`
* main engine/gameplay modules such as `MAIN.ASM`, `GAME.ASM`, `WORLD.ASM`, `PLANETS.ASM`, and `SOUND.ASM`
* data and binary payload folders such as `DATA` and `SND`
* macro-heavy support files such as the `.MC` rendering and utility sources
{% endcapture %}

{% capture folder_items %}
- Build files - `MAKEFILE`, `SYMSON.MAK`, `FLIST`, `STDFILES.LOG`
- Include files - `32` `.INC` headers for constants, macros, structures, weapons, and sound definitions
- Export files - `48` `.EXT` symbol/public definition files
- Bank source - `BANK0.ASM` to `BANK11.ASM`, plus `SHBANKS.ASM` and `INCBINS.ASM`
- Core modules - `MAIN.ASM`, `GAME.ASM`, `WORLD.ASM`, `PLANETS.ASM`, `SOUND.ASM`, `NMI.ASM`, `IRQ.ASM`, `DRAW.ASM`
- Macro/support files - `23` `.MC` files such as `MOBJ.MC`, `MCLIP.MC`, `MPLANET.MC`, and `MHUD.MC`
- DATA - palettes, fonts, compressed resources, shapes, and graphics source lumps
- SND - `43` `.BIN` music and sound banks
{% endcapture %}

{% include connected-folder-tree.html folder="SG.LZH" path="StarFox/SG.LZH" body=sg_body content=folder_items %}

The archive is dense enough that a quick count is useful:

File type | Count | What it suggests
---|---|---
`.ASM` | `77` | A heavily banked assembly codebase rather than a tiny sample
`.INC` | `32` | Lots of shared macro/structure/header logic
`.EXT` | `48` | Broad use of exported/public symbol definition files
`.MC` | `23` | A substantial support layer for engine, rendering, and utility logic
`.BIN` | `43` | Many prebuilt music and sound payloads expected at final build time

### How the Main Build Works
The first big clue comes from `MAKEFILE`.
It uses `SASMX` as the assembler and `SL` as the linker, and builds a set of <a href="#glossary-sob">`.sob`</a> objects that are then linked into either `finished.sg` or `sg.rom`.

Output | Role
---|---|
`finished.sg` | Default linked build target
`sg.rom` | Explicit ROM output target
`bank0.sob` to `bank11.sob` | Main assembled bank objects
`shbanks.sob` | Shared or shape-bank build product
`incbins.sob` | The bank that pulls in large binary payloads and packed assets

The bank structure is also revealing.
The makefile has explicit rules for `bank0`, `bank1`, `bank2`, `bank4` through `bank11`, plus `shbanks` and `incbins`.
That kind of layout is exactly what you would expect from a large SNES game with a coprocessor-heavy runtime and lots of banked asset data.

---
### What the Build Dependencies Reveal
The makefile is more than a compile script.
It acts like a table of contents for the project.

Some of the most revealing dependency groups are:

* `bank2.sob` pulls in `MAIN.ASM`, `GAME.ASM`, `WORLD.ASM`, `PLANETS.ASM`, `SOUND.ASM`, `DRAW.ASM`, `NMI.ASM`, and many graphics/color assets
* `bank5.sob` pulls in a huge run of `maps\*.asm` route files, which is the clearest proof that `MAPS.LZH` is part of the normal build
* `shbanks.sob` pulls in many `SHAPES*.ASM` files plus a cluster of BGM binaries
* `incbins.sob` pulls in a massive set of `.CCR`, `.PCR`, `.COL`, `.PAC`, `.CGX`, and `.BIN` resources

That makes `SG.LZH` feel much more like a real live source tree than a curated code sample.
It still expects to build against all the mission data, shape banks, palette packs, and sound banks that sit beside it.

---
### What MAIN.ASM Reveals
`MAIN.ASM` is a good example of how direct and readable the surviving code can be.
Right at the start it initializes variables named `fox`, `frog`, `bunny`, `cock`, `pepper`, and `andorf`, then calls routines such as `playerstart_init_l` and `initplanets_l`.

That does two useful things for the page:

* it confirms the archive is clearly Star Fox from the inside, not just from the folder name
* it shows the code is not just low-level engine scaffolding - it still exposes high-level game state and character-specific names

The same file also contains the higher-level game startup and loop structure:

* `initialise_l` does the early setup and palette unpack/copy work
* `initgame_l` resets the level state, initializes lists and map pointers, and creates the first objects
* `initgame3d_l` sets up the 3D/rendering side
* `gamestart` and `gameloop2` drive the main loop, pause checks, transfer step, messages, and level-finished/game-over flow

That makes `MAIN.ASM` a strong entry point for anyone who wants to study how the leaked project actually boots into gameplay.

---
### What SHBANKS.ASM and INCBINS.ASM Reveal
Two files make the asset side of the build especially easy to read: `SHBANKS.ASM` and `INCBINS.ASM`.

`SHBANKS.ASM` is the cleaner of the two.
It groups shape banks and selected BGM payloads together into banks `12`, `14`, `15`, `16`, and `17`, with entries such as `incshapes shapes.asm`, `incshapes kshapes.asm`, and `incbinfile snd\sgbgmm.bin`.

That tells us the Star Fox build was not only splitting logic into banks.
It was also deliberately grouping 3D shape data and music payloads into dedicated late banks that could be swapped or reused by the runtime.

`INCBINS.ASM` is even more revealing because it acts like a master packing script for the rest of the binary data.
It pulls in:

* `MSPRITES` sprite packs such as `sprites3.dat`, `sprites4.dat`, and `spritesg.dat`
* compressed background and object resources via `inccru`
* face and UI data such as `face.cgx`
* large palette packs such as `data\gfx\allcols.pac`
* the full run of sound and BGM binaries from `snd\sgsound0.bin` through the many `sgbgm*.bin` tracks

It also contains region and build-condition switches.
There are explicit `IFEQ GERMAN`, `IFEQ PAL`, and `IFEQ CONTEST` blocks that swap different art and sound payloads in or out while logging the alternatives with `fileslog`.

That is one of the most useful low-level details in the whole archive.
The leak is not just preserving source code and loose assets.
It preserves the actual pack-in script that decides which compressed backgrounds, sprites, face graphics, and sound banks become part of the final ROM for different builds.

---
## MAPS.LZH - Route and Mission Archive
`MAPS.LZH` looks like the missing second half of the build.
It is overwhelmingly made of map and route assembly, plus three `MSPRITES` data files.

{% capture maps_body %}
The route archive splits neatly into two layers:

* `MAPS` - path data, mission scripts, route lists, planet/scene maps, and campaign flow
* `MSPRITES` - three sprite data packs used by the map side of the build
{% endcapture %}

{% capture folder_items %}
- MAPS - `125` `.ASM` files plus `MAPS.EXT` and `MAPLIST.EXT`
- MSPRITES - `SPRITES3.DAT`, `SPRITES4.DAT`, and `SPRITESG.DAT`
{% endcapture %}

{% include connected-folder-tree.html folder="MAPS.LZH" path="StarFox/MAPS.LZH" body=maps_body content=folder_items %}

The file count alone makes the point:

File type | Count | What it suggests
---|---|---
`.ASM` | `125` | A very large mission/route layer, not a token collection of map examples
`.EXT` | `2` | Export/public definitions for the map package itself
`.DAT` | `3` | Packed sprite data accompanying the route archive

### What MAPLIST.ASM Reveals
`MAPS/MAPLIST.ASM` is the cleanest overview of how the route archive is organized.
It defines:

* `courses` in the order `course2`, `course1`, `course3`
* the level chains inside each course, such as `level1_1` through `level1_6`
* a long run of `INCMAP` inclusions for specific route/scene files

That is important because it shows `MAPS.LZH` is not just a stash of loose stage files.
It has a proper top-level route list and campaign structure.

---
### What the Route Files Look Like
A file like `MAPS/LEVEL1_1.ASM` makes the format feel very game-like rather than abstract.
It contains script-style map commands such as:

* `initlevel`
* `mapwait`
* `setvar`
* `mapjsr`
* `mapplayermode`
* `mapobj`
* `pathobj`
* `maploop`
* `mapend`

Those commands read much more like a mission scripting language than raw coordinate tables.
The route files place objects, trigger fades, switch player modes, attach path objects, and jump into submaps.

That makes the Star Fox map archive especially valuable.
It is preserving not just level geometry, but the actual mission-script layer that orchestrated encounters and transitions.

`LEVEL1_1.ASM` is a strong example because it starts with presentation and pacing, not geometry.
It turns meters on and off, waits for fades, switches the player into `ExitBase` and then `onplanet` mode, spawns Arwing wingmen with `pathobj`, drops in enemy objects with `mapobj`, and uses `mapjsr cl_ground` to hand control to another map routine.

That reads less like "here are some coordinates" and more like a stage-direction script.
The file is telling the engine when to fade, when to spawn Falco and Slippy, when to place background traffic, and when to transition into the playable route.

---
### How the Map Scripting Language Works
The route files become much clearer once you look at `MAPMACS.INC` in the main archive.
That file defines the control-byte layer behind the macros, with entries such as `ctrlmapobj`, `ctrlmapwait`, `ctrlsetbg`, `ctrlmapjsr`, `ctrlmapgoto`, `ctrlsendmessage`, `ctrlmapcspecial`, and `ctrlmapsetpath`.

That matters because it shows the map files were not just free-form assembly source.
They were written in a purpose-built mission language that compiled down into a compact command stream for the game to interpret.

Some of the macros are straightforward:

* `mapwait` advances time
* `setbg` and `waitsetbg` control background changes
* `setfadeup`, `setfadedown`, and `mapwaitfade` handle screen transitions
* `mapjsr`, `maprts`, and `mapgoto` give the route scripts subroutine and jump-style flow control

Others are closer to object scripting:

* `mapobj` spawns a normal object entry
* `mapqobj` and `mapqobj2` are compact object forms that pack position and frame data more tightly
* `mapdobj` is a denser object form used when the shape and strategy mapping allow it
* `pathobj` attaches scripted movement/path behavior to an object rather than just dropping it into space

That mix is one of the strongest signs that `MAPS.LZH` is a gameplay authoring layer.
It let designers or programmers describe timing, camera state, messages, object waves, fades, and scripted movement in one file format instead of scattering them across many unrelated tables.

---
### Training, Intro, and Credits as Scripted Scenes
Once the macro layer is visible, some of the named files in `MAPS.LZH` stand out even more.

`TRAINING.ASM` is not a tiny special case.
It is a long looping tutorial script that uses `pathobj` to place ring sequences, `mapobj` to place towers, pillars, robots, and bases, and `mapmsg 123` to trigger tutorial messaging.

The file is full of commented-out test material too.
There is an entire disabled "MSG TEST" block with many `mapmsg` calls, plus traces of helper routines like `skillfly_set`.
That makes the training map feel like an active sandbox for testing message flow and flight drills, not just a final polished stage script.

`INTRO.ASM` shows that the same language was used for cinematic presentation.
It disables player control, sets the intro background, spawns the "Presented by Nintendo" text with `textpath`, drops in enemy and player-intro objects, and then loops forever with `mapgoto`.

`CREDITS.ASM` pushes that even further.
It sets up a dedicated credits background, disables normal play, calls `actualcreds`, and then uses repeated `textpath` commands to stage the names and roles of Nintendo and Argonaut staff in sequence.

So the mission package is broader than "maps".
The same route-script system drives training scenarios, intro presentation, and the full end credits flow.

---
### What Survives in the Map Package
The filenames alone show how broad the package is.
Alongside generic stage files like `LEVEL1_1.ASM` and `LEVEL2_4.ASM`, it also preserves more specific named content such as:

* `ARMSMAP.ASM`
* `AIRLOCK1.ASM`
* `CASTANET.ASM`
* `TRUCKER.ASM`
* `WEBMONST.ASM`
* `MOTHERS.ASM`
* `BHOLE.ASM`
* `TRAINING.ASM`
* `CREDITS.ASM`
* `INTRO.ASM`
* `TITLE.ASM`

So `MAPS.LZH` is not only "the stage data".
It also preserves special encounters, route scenes, intro/title flow, training content, and credits-related map scripting.

There are also a few smaller clues worth calling out:

* `MAPS.EXT` and `MAPLIST.EXT` show the route package had its own exported/public symbol layer rather than being treated like raw data
* the archive includes both route files like `LEVEL3_1.ASM` and helper files like `PATHDATA.ASM`, `EPATHDAT.ASM`, `DPATHDAT.ASM`, and `KPATHDAT.ASM`
* names such as `CL_WARP`, `CL_EARTH`, `CL_CHASE`, `CL_UNDER`, and `CL_DIVE` suggest entire cinematic or transition sequences were implemented in the same mission-script format as gameplay sections

Taken together, that makes `MAPS.LZH` feel like a campaign and encounter package, not just a map folder.
