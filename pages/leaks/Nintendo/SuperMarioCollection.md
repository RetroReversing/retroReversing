---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Super Mario Collection / All-Stars Source Code (Gigaleak)
category: 
- leak
- snes
permalink: /super-mario-collection-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Leaks
    url: /leaks
  - name: Nintendo Leaks
    url: /nintendoleaks
  - name: Gigaleak
    url: /gigaleak
  - name: Original Super Mario Collection / All-Stars Source Code
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/SuperMarioCollection.md
updatedAt: '2026-03-29'
---

The Nintendo Gigaleak preserves a compact but unusually revealing Super Mario Collection source archive under `other/SFC/ソースデータ/srd13-SFCマリオコレクション`.

This is the Japanese Super Famicom release better known in the West as **Super Mario All-Stars**.

This is not a clean one-folder master source tree.
It is a nested export centered on `export/mario-z/linkp`, with one front-end branch, two main gameplay branches, and a smaller Mario 3 subsystem branch, plus linked outputs, linker files, map files, ROM layout scripts, and menu assets.

{% include_cached link-to-other-post.html post="/gigaleak" description="For more information on the rest of the Gigaleak check out this post." %}

---
## At a Glance
This folder is useful because it preserves several layers of the project at once:

* the top-level "Mario Zanmai" launcher code dated **14 December 1992**
* compiled `.hex`, `.lnk`, `.map`, `.sym`, and `.cnf` outputs for multiple branches
* a larger `mn_mrom.sdm` ROM layout script that shows how these branches were meant to be packed together
* clear signs that the export is only part of a wider build tree, because the script references missing sibling folders such as `mario_n4`, `mario_nu`, `mario-1`, `mario-3`, `mario-usa`, and `asm0`

The build timestamps are also nicely tight:

* `mario_n0` links on **4 August 1993 15:51 JST**
* `mario_n1` links on **27 August 1993 15:04 JST**
* `mario_n2` links on **27 August 1993 15:04 JST**
* the matching `.map.CHK` validation files are stamped only seconds later
* the source files themselves cluster across **24 to 27 August 1993**

That makes this look less like a random backup and more like a short export from an active late-summer 1993 build environment.

### Quick Branch Comparison
This is the fastest way to read the export before diving into each folder:

Branch | What it mainly contains | Build state in the leak
---|---|---
`mario_n0` | Mario Zanmai launcher shell and game-select assets | Source plus `.hex`, `.lnk`, `.map`, `.sym`, `.cnf`, and `.map.CHK`
`mario_n1` | First main gameplay branch under the shared shell | Source plus full linked outputs and ROM-layout scripts
`mario_n2` | Japanese `Super Mario Bros. 2` / Lost Levels branch under the shared shell | Source plus full linked outputs and a slightly larger final image
`mario_nu` | Missing likely USA `Super Mario Bros. 2` branch | Not preserved locally, but heavily present in the global map and ROM script
`mario_n3` | Mario 3-specific battle, BG2, and world-data subsystem | Source only in this export, but referenced by the larger ROM layout

### What Survived From the Link Step
One of the nicest things about this export is that the final link pass did not disappear.

Artifact | Why it matters
---|---
`.map` | Shows the exact module-to-bank placement produced by `RICOH SFX LINKER Ver 2.02`
`.map.CHK` | Preserves the follow-up validation output with section sizes and totals
`.sym` | Keeps large symbol exports for the launcher and both main gameplay branches
`.cnf` | Preserves binary layout/config metadata generated alongside the builds

That means the archive does not just preserve source files.
It preserves the moment where those source files were being assembled into a concrete SNES memory layout.

The wrapper scripts around those outputs make the workflow even clearer:

File | What it does
---|---
`mario_n0/mn_m1` | Cleans old launcher outputs, rebuilds with `mn_mario1.make`, runs `map_chk_c`, then launches `sfdb`
`mario_n1/mn_m1` | Rebuilds `mn_hp_smmain` with `mnm1make`, runs `map_chk`, then launches `mn_sfm1`
`mario_n2/mn_m1` | Rebuilds `mn_hp_smmain` with `mn_m1make`, runs `map_chk_c`, then launches `mn_sfm1`
`mario_n1/mn_sfm1` / `mario_n2/mn_sfm1` | Tiny debugger-launch wrappers for `sfdb -9 mn_hp_smmain`

So the export preserves not only source and link artifacts, but also the actual shell commands the team used to rebuild and immediately debug each branch.

# Root Directory (SFC.7z/ソースデータ/srd13-SFCマリオコレクション)
When the Gigaleak SFC.7z archive is extracted it contains several Super Famicom projects.
This post covers the nested Mario Collection export preserved under `export/mario-z/linkp`.

This folder contains the following sub-directories:
{% capture smc_root_body %}
The export is not arranged as one flat game folder.
Instead, it looks like a linker/export workspace holding a menu shell, two main game branches, and a smaller Mario 3-specific branch.
{% endcapture %}

{% capture smc_root_items %}
- export - Export wrapper for the Mario Collection build tree
- export/mario-z - Intermediate project folder
- export/mario-z/linkp - The actual branch export used here
- export/mario-z/linkp/mario_n0 - Front-end and game-select shell
- export/mario-z/linkp/mario_n1 - First main game branch with built outputs and ROM script helpers
- export/mario-z/linkp/mario_n2 - Second main game branch with extra title and ending modules
- export/mario-z/linkp/mario_n3 - Smaller Mario 3-specific gameplay branch
{% endcapture %}

{% include connected-folder-tree.html folder="srd13-SFCマリオコレクション" path="/" body=smc_root_body version="/" content=smc_root_items %}

The shape of the tree matters.
This is a compilation-era workspace where a shared shell and several game-specific branches were being linked into a larger ROM layout.

---
## How Complete This Looks
This archive is best described as a **partial but very revealing working export**.

The strongest signs in its favour are:

* `mario_n0`, `mario_n1`, and `mario_n2` all preserve source plus built outputs such as `.hex`, `.lnk`, `.map`, and `.sym`
* the makefiles still show a standard Nintendo `as65c` -> `link` -> `load` -> `insp` build flow
* `mn_mrom.sdm` lays out the larger final cartridge image and names many of the assets and program branches that fed into it

The biggest caveat is that the export is clearly incomplete as a full rebuild package.

What is missing or only implied:

* the asset folders named by `mn_mrom.sdm`, such as `mario-1`, `mario-3`, `mario-usa`, `asm0`, `mario_n4`, and `mario_nu`
* the assembler, linker, loader, and inspection tools themselves
* a complete set of all game branches, especially the `mario_n4` and `mario_nu` code the ROM script expects

So the useful claim here is not "this is the full Super Mario All-Stars source code".
It is that the leak preserves a real Mario Collection integration workspace with enough code, metadata, and outputs to show how the compilation was being stitched together in 1993.

---
## How the Build Flow Works
The branch makefiles are simple, but they tell us a lot.

File | Role
---|---
`mn_mario1.make` | Builds the small `mn_mario_main` launcher from `mn_mario_main.asm` and `mn_mario_init.asm`
`mnm1make` | Builds `mn_hp_smmain` in `mario_n1` from the common launcher plus the `mn_hp_sm*` modules
`mn_m1make` | Builds `mn_hp_smmain` in `mario_n2`, but swaps in `mn_hp_smending.rel` and even reuses `../mario_n1/mn_hp_smsnd.rel`

All three follow the same broad pattern:

* assemble each `.asm` file into `.rel` with `as65c`
* link the resulting objects with `link`
* turn the linker output into `.hex` with `load`
* extract symbols with `insp`

The outputs confirm that these were real build products rather than source-only stubs:

Output | Example | What it preserves
---|---|---
`.hex` | `mn_mario_main.hex`, `mn_hp_smmain.hex` | Linked program image
`.lnk` | `mn_mario_main.lnk`, `mn_hp_smmain.lnk` | Linker output
`.map` | `mn_mario_main.map`, `mn_hp_smmain.map` | Link map
`.sym` | `mn_mario_main.sym`, `mn_hp_smmain.sym` | Symbol export
`.cnf` | `mn_mario_main.cnf`, `mn_hp_smmain.cnf` | Binary configuration or build-side metadata
`.map.CHK` | `mn_mario_main.map.CHK`, `mn_hp_smmain.map.CHK` | Map-check companion files created after linking

The oddest files here are the `.cnf` files.
They are not plain text config notes.
All three are fixed-size binary files at **28,384 bytes**, and the first two are byte-identical while the `mario_n2` version differs only right at the start.
The repeating block structure makes them look much more like generated linker/debugger layout metadata than hand-written project settings.

That structure is consistent enough to say a little more.
The first words look like regular offset/range-style values rather than free-form config text, and the `mario_n2` version only differs at about **120** byte positions from the other two.
So these files do not look branch-specific in the same way the source modules do.
They look more like a mostly shared generated layout table that only needed a small number of updates when the second gameplay branch changed size and bank placement.

The `.map` and `.map.CHK` files are easier to read, and they are worth more attention than the old page gave them.
They preserve the exact linker runs:

File | What it shows
---|---
`mn_mario_main.map` | `RICOH SFX LINKER Ver 2.02` on **4 August 1993**, mapping the launcher at `00:8000`
`mn_hp_smmain.map` in `mario_n1` | `RICOH SFX LINKER Ver 2.02` on **27 August 1993 15:04**, laying the branch across banks `03`, `04`, and `05`
`mn_hp_smmain.map` in `mario_n2` | `RICOH SFX LINKER Ver 2.02` on **27 August 1993 15:04**, laying the branch across banks `0D`, `0E`, and `0F`
`.map.CHK` files | Japanese map-check output from **Ver 2.00** and **Ver 2.20** tools, stamped a few seconds after the linker runs

That gives the build process a very concrete shape.
This was source plus a preserved record of the exact link pass, section placement, and immediate post-link validation.

The `.sym` files are part of that same picture.
They are not just tiny symbol stubs:

File | Size
---|---
`mn_mario_main.sym` | `42,656` bytes
`mario_n1/mn_hp_smmain.sym` | `343,315` bytes
`mario_n2/mn_hp_smmain.sym` | `372,383` bytes

Those are big enough to act as serious debugger-facing symbol dumps rather than minimal release artifacts.
They preserve thousands of exported identifiers, and the larger `mario_n1` and `mario_n2` symbol files also make the branch differences visible in a second way: `mario_n2` simply has more named material to describe.

The branch sizes are a nice quick indicator of scope:

Branch | Main output | Size
---|---|---
`mario_n0` | `mn_mario_main.hex` | `38,792` bytes
`mario_n1` | `mn_hp_smmain.hex` | `257,708` bytes
`mario_n2` | `mn_hp_smmain.hex` | `284,214` bytes

That is a good clue that `mario_n0` is just the shell, while `mario_n1` and `mario_n2` are much more substantial game-side branches.

---
## The mario_n0 Branch
`mario_n0` is the front-end shell for the collection rather than one of the individual games.

The clearest clue is `mn_mario_main.asm`, which identifies itself as:

* `Mario Zanmai`
* dated **1992.12.14**

Its symbol exports and constants also make the job of this branch very obvious.
The file defines separate start, NMI, and IRQ addresses for multiple bundled games:

* `MARIO_1_START`
* `MARIO_2_START`
* `MARIO_USA_START`
* `MARIO_3_START`
* `MARIO_4_START`

That is exactly what you would expect from a collection launcher.
It is not implementing the games themselves so much as bootstrapping, dispatching, and switching between them.

The lower-level dispatch tables are even more interesting than the constant names.
The file has separate byte tables for game entry points, NMI handlers, and IRQ handlers, and later uses `JSL` calls to jump into each branch's interrupt vectors.
In other words, `mario_n0` is not just drawing a menu.
It is the interrupt-aware control shell that hands execution off to the bundled games and then routes hardware events back into the active branch.

There is also a small hint that the launcher code had a broader life than the final export suggests.
Near the selection tables the file still imports:

* `GSINIT`
* `SELECT1`
* `SELECT2`
* `SELECT3`
* `DR_MARIO`

One `SELECT1` table entry is commented out, while `DR_MARIO` still survives as a live external symbol.
That does not prove Dr. Mario was shipped in this build, but it is a strong sign that the shell code had either earlier multi-game experiments or shared ancestry with a wider menu framework.

The directory is also a proper working branch, not just a pair of source files:

File | Size
---|---
`mn_mario_main.asm` | `92,564` bytes
`mn_mario_init.asm` | `100,296` bytes
`GAMESELECT-Ns.CGX` | `65,792` bytes
`mn_mario_main.hex` | `38,792` bytes
`mn_mario_main.sym` | `42,656` bytes
`map.MAP` | `33,306` bytes
`mzchr.map` | `5,935` bytes

### The Shared Shell Layer
`mn_mario_main.asm` and `mn_mario_init.asm` are doing different jobs, and together they explain the whole folder.

`mn_mario_main.asm` is the low-level shell and dispatcher.
It handles:

* startup and CPU mode switching
* RAM clear passes
* PPU initialization
* per-branch boot vectors
* per-branch NMI and IRQ forwarding
* save-RAM checks and reset logic

The branch start constants show that the launcher already knew the final cartridge layout:

* `MARIO_1_START EQU 038000H`
* `MARIO_2_START EQU 0D8000H`
* `MARIO_USA_START EQU 118000H`
* `MARIO_3_START EQU 208000H`
* `MARIO_4_START EQU 308000H`

That is a lovely low-level detail because it means the front-end was not selecting abstract game IDs.
It was dispatching straight into fixed banked entry points that matched the wider cartridge map exactly.

### The Title And Selection State Machine
`mn_mario_init.asm` is where the launcher becomes visibly a front-end rather than just a bootstrap stub.

Right near the top it defines a selection or title jump table with states like:

* power-on init
* fade-in
* object print
* fade-out and title init
* title demo
* sound wait
* sound set
* switch-on and switch-off checks

That makes the title screen and menu feel much more like a proper state machine than a static select screen.

The file also exports:

* `GSINIT`
* `SELECT2`
* `SELECT3`
* `WINDON`
* `WINDOFF`
* `MRPLIX`

So `mario_n0` was responsible for initializing the select background, driving the selection flow, and running the window and presentation effects around it.

### The Menu Presentation Logic
`mn_mario_init.asm` makes the visual job of the launcher just as explicit.
Its OAM setup code literally comments the title graphics as:

* `"SUPER MARIO"`
* `"ALL*STARS"`
* `"MARIO WORLD" set`

Further down, the dedicated `MARIO3` and `MARIO4` routines populate selection buffers, trigger window-open and window-close effects, and call `WORLDNO` to build world-number display data before handing control onward.

That matters because it shows the front-end was not just selecting a game.
It also handled per-branch presentation details, including the extra world-selection and save-aware UI work that the World-era branch needed.

The `mn_mario_ram.asm` include helps show how much state lived in the launcher itself.
It defines window counters and bounds, flashing timers, sound ports, world and course buffers, game and play numbers, select mode, game mode, and demo timing.
So a lot of the "menu behavior" was being run as a real stateful subsystem, not left to the individual game branches.

### The Asset Side Of The Launcher
The folder also preserves the menu-side assets that go with that shell:

File | What it appears to be
---|---
`GAMESELECT-Ns.CGX` | Game-select graphics tiles
`GAMESELECT-Ns.COL` | Palette data for the select screen
`GAMESELECT-Ns.SCR` | Screen or tilemap layout for that menu
`sm123-title2-Ns.COL` | Extra title-screen palette data
`map.MAP` | Full launcher-side cartridge map output
`mzchr.map` | Generated map of the asset-placement script

The palette files are a nice small clue too.
`GAMESELECT-Ns.COL` is a full `1 KB` palette block full of color entries, while `sm123-title2-Ns.COL` is also `1 KB` but begins with a single non-zero color and then long stretches of zeroed data.
That makes it look less like a full screen palette and more like a smaller title-side patch or placeholder palette block used by the larger title layout.

### mn_mzchr As A Production Manifest
One of the most useful files in the whole folder is `mn_mzchr`.
It is not source code at all.
It is a plain-text placement manifest for the cartridge asset banks.

It maps things like:

* `tsound.bin`
* `m1sound.bin`
* `usasound.bin`
* `m31sound.bin`
* `m32sound.bin`
* `sm123-title-Ps.CGX`
* `ROGO-Ns.CGX`
* `sm123-title2.CGX`
* `GAMESELECT-Ns.CGX`
* `GAMESELECT-Ns.SCR`
* `GAMESELECT-Ns.COL`

And it keeps going into the SMB1, USA Mario 2, Mario 3, and shared asset banks too.

That makes `mario_n0` more than just the menu branch.
It is also the place where the front-end side of the cartridge knew how all those title, menu, sound, and branch graphics were supposed to be packed.

### Build And Glue Scripts
The no-extension helpers are just as important as the code:

File | What it suggests
---|---
`ff` | Small C shell helper that opens `mn_mario_*.asm` files in an editor
`mn_mccp` | Copy script that pushes `mn_mzchr` into `mario_n1`, `mario_n2`, `mario_n3`, `mario_nu`, and `mario_n4`
`mn_mmcp` | Copy script that pushes the shared `mn_mario_main.asm`, `mn_mario_init.asm`, and `mn_mario_ram.asm` shell files into those same sibling branches
`mn_sfmr` | Tiny wrapper that launches `sfdb -9 mn_mario_main`
`mz_map` | Script that runs `pro_map` and `map_chk_r` across the launcher and all sibling branch maps
`mn_m1` | Rebuild wrapper that deletes old outputs, runs `make -f mn_mario1.make`, calls `map_chk_c`, and launches `sfdb`
`mn_mario1.make` | Two-module makefile for rebuilding the collection shell itself

Those helper scripts are a big deal because they remove a lot of guesswork about the wider project layout.
`mario_n0` was not just storing its own shell files.
It was acting as the source of truth for the shared collection wrapper, then copying that wrapper and its asset manifest into the other sibling branches before map-checking and launching debugger sessions.

So `mario_n0` is best read as the compilation shell for the collection.
It preserves the launcher code, the game-select screen assets, the title and world-selection logic, the asset-placement manifest, and several of the actual glue scripts that tied the sibling game branches together.

---
## The mario_n1 Branch
`mario_n1` is the first large game-side branch, and it looks like a Super Mario Bros.-based module adapted for the collection environment.

The older file headers are revealing.
Several modules still identify themselves with original-era comments such as:

* `1985. 8.12 V.1.0 Super Mario`
* `1991.12.03 V.1.0 Super Mario-CD`
* `1992.04.12 V.1.0 Super Mario-CD`

That mix of dates is one of the nicest details in the whole folder.
It suggests this branch was not written fresh for the collection.
Instead, older gameplay modules were being carried forward into a later "Super Mario-CD" or collection-era integration layer.

One structural detail helps make sense of the branch layout.
The shared collection-side files `mn_mario_main.asm`, `mn_mario_init.asm`, and `mn_mario_ram.asm` are byte-identical between `mario_n1` and `mario_n2`.
The differences live in the `mn_hp_sm*` modules, which means the collection shell stayed stable while the actual game-side branch logic diverged underneath it.

The directory is also dense enough to feel like a real working branch rather than a token source drop:

File | Size
---|---
`mn_hp_smmain.asm` | `108,684` bytes
`mn_hp_smenmy.asm` | `110,177` bytes
`mn_hp_smfrdt.asm` | `106,710` bytes
`mn_hp_smsub1.asm` | `109,110` bytes
`mn_hp_smmain.hex` | `257,708` bytes
`mn_hp_smmain.sym` | `343,315` bytes
`mn_hp_smmain.lnk` | `595,906` bytes

### The Module Layout
The branch makefile shows a fairly substantial module split:

* `mn_hp_smmain`
* `mn_hp_sminit`
* `mn_hp_smplay`
* `mn_hp_smenmy`
* `mn_hp_smcros`
* `mn_hp_smcset`
* `mn_hp_smfrdt`
* `mn_hp_smsub0`
* `mn_hp_smsub1`
* `mn_hp_smsub2`
* `mn_hp_smend1`
* `mn_hp_smsnd`

Taken together, those modules cover the expected game flow:

* startup and initialization
* play logic
* enemy logic
* course and frame data
* object or collision setup
* ending logic
* sound and VRAM-side support

The larger source files make the branch hierarchy pretty clear:

File | What it appears to do
---|---
`mn_hp_smmain.asm` | Main branch coordination, large block and tile definitions, system-mode flags, and the shared state layout the other modules build on
`mn_hp_sminit.asm` | Startup, RAM clearing, object setup, and the first pass of block and world-state placement
`mn_hp_smplay.asm` | Core game loop, player state machine, scrolling, block interaction, item handling, and demo play
`mn_hp_smenmy.asm` | Enemy creation, movement, collision, leave-point logic, and effect handling
`mn_hp_smfrdt.asm` | Course/frame readers and the big world/course data tables that feed the rest of the branch
`mn_hp_smend1.asm` | Ending-side routines and world-ending presentation logic
`mn_hp_smsnd.asm` | VRAM clear routines, HDMA support, and the branch-facing sound-port layer

So `mario_n1` is not just "the SMB1 branch" in the abstract.
It is a fairly complete gameplay branch with its own initialization, loop logic, enemy logic, data readers, ending flow, and sound layer, all sitting under the stable collection shell.

### The Core Gameplay Layer
`mn_hp_smplay.asm` is the heart of the branch.
It exposes the most recognizable high-level routine set:

* `GMPLAY`
* `GMPLAY_DEMO`
* `PLAYER`
* `SCRCAL`
* `PLATMV`
* `COINHM`
* `SPRING`
* `GUN`

That is a useful cross-section of what Nintendo still kept as explicit low-level subsystems in the All-Stars-era SMB1 code.
The branch is not one giant game loop.
It still breaks scrolling, player dispatch, spring movement, projectile or gun motion, and coin or hammer handling into named routines.

It also preserves a lot of sound-side event hooks inside gameplay itself.
The file still sets `SOUND0` through `SOUND3` directly for jump, swim, mushroom, coin, break-block, wood, fire, and time-up behaviors, which makes the branch feel very close to the original game logic rather than a high-level rewrite.

### Enemy And Course Data
`mn_hp_smenmy.asm` shows how broad the enemy layer still was.
Near the top it exports not just `ENEMY`, but a long run of enemy IDs and helper states, including:

* `SHTR`
* `BKTR`
* `RDTR`
* `TUTR`
* `FIEN`
* `YPVS`
* `JPTR`
* `WTR0`
* `WTR1`
* `ENDTR`

It also keeps explicit "enemy leave point" and frame or course-end handling around that roster, which is a good reminder that the branch was still managing enemy spawn, despawn, and stage-end triggers as named low-level concepts.

`mn_hp_smfrdt.asm` is just as valuable.
It is where the branch starts to look like a real preserved data pipeline rather than just code:

* `RDCRDT`
* `RDCOSS`
* `FRDAST`
* `COURSD`
* `CROSID`
* `CORS00` through `CORS07`

That means the branch was still carrying explicit per-course tables rather than hiding everything in opaque binary lumps.
The file also mixes obstacle setup codes, enemy references, and course-index tables in one place, which makes it feel like the point where level scripting, object placement, and gameplay logic all meet.

### Ending And Presentation Logic
`mn_hp_smend1.asm` is one of the nicest late-stage files in the branch.
It is newer than most of the core gameplay modules, with a `1992.04.12` `Super Mario-CD` header, and it is much more than a tiny credits stub.

The file exposes:

* `ENDCTR`
* `ENDCTR2`
* `PLCHCH`
* `SCROFF`

It also contains explicit world-ending handlers:

* `WORLD1`
* `WORLD2`
* `WORLD3`
* `WORLD4`
* `WORLD5`
* `WORLD6`
* `WORLD7`

So the All-Stars-era SMB1 branch still carried a dedicated ending script layer keyed by world, not just one generic end routine.
The comment `ending kinopio chr chenge` is also a nice surviving reminder of how character-swapping and presentation scripting still lived close to the gameplay code.

### Sound, VRAM, And The Hardware Layer
`mn_hp_smsnd.asm` is smaller than the main gameplay files, but it is important because it shows what Nintendo considered "sound code" at this level.
It is not just music triggers.
Right at the top it exports:

* `VRMCLZ`
* `VRMCL2`
* `VRMCL3`
* `SNDPORT`
* `HDMAON`
* `HDMAMV`
* `PLCNT_SET`

So this module is really the branch's sound and display-support layer.
It handles sound-port communication, but also VRAM clearing and HDMA-side setup, which helps explain why gameplay code could just poke `SOUND0` to `SOUND3` and leave the lower-level transfer work here.

That split is a nice low-level clue about how the team organized the SNES adaptation.
Game logic stayed in the big `smplay` and `smenmy` files, while the branch-facing hardware and transfer support was factored into `smsnd`.

### Build And Validation Workflow
The side files in `mario_n1` are almost as useful as the assembly itself because they preserve the branch's daily workflow.

File | What it reveals
---|---
`mn_cst.sdm` | Starts with `ALL_STARS + WORLD`, making the wider compilation context explicit
`mn_mrom.sdm` | Large ROM-layout script that places the branch outputs and many external asset files into final cartridge addresses
`mnm1make` | Builds the branch from `mn_mario_main.rel`, `mn_mario_init.rel`, and the full `mn_hp_sm*` module list
`mn_m1` | Deletes old outputs, rebuilds, runs `map_chk`, then launches `mn_sfm1`
`mn_sfm1` | Debugger wrapper for `sfdb -9 mn_hp_smmain`
`ff` | Small editor helper for the local source files
`file_chk` | Compiled checksum or compare tool
`mr_file_chk` | Batch verifier that walks `m00.bin` through `m3b.bin` against matching `rXX.bin` reference files

That `mr_file_chk` script is especially good evidence that this was a practical working directory.
It is the kind of verification helper a team keeps around while comparing many generated binary chunks, not the kind of file someone adds for presentation.

---
## The mario_n2 Branch
`mario_n2` is the second major game-side branch, and unlike `mario_n1` it has some very clear **Japanese Super Mario Bros. 2** markers.

The most direct one is `mn_hp_smtitle.asm`, which identifies itself as:

* `1986. 5.08 V.1.0 Super Mario 2`

In a Japanese Nintendo codebase from this period, that points much more naturally to the Famicom Disk System game later branded in the West as **The Lost Levels**, not the USA `Super Mario Bros. 2`.

That matters because it helps separate the surviving branches more cleanly:

* `mario_n1` fits `Super Mario Bros.`
* `mario_n2` fits Japanese `Super Mario Bros. 2` / `The Lost Levels`
* the missing `mario_nu` branch is then the better candidate for USA `Super Mario Bros. 2`

Like `mario_n1`, this branch still sits on top of the exact same shared launcher files.
The byte-for-byte identical `mn_mario_main.asm`, `mn_mario_init.asm`, and `mn_mario_ram.asm` are a good reminder that Nintendo was not cloning the whole collection wrapper for each game.
The real branch identity lives in the `mn_hp_sm*` layer.

The branch also adds files that do not exist in `mario_n1`:

File | Why it stands out
---|---
`mn_hp_smtitle.asm` | Explicit title-screen module for the Super Mario 2 branch
`mn_hp_smsub.asm` | Extra shared/game-specific subroutine module
`mn_hp_smending.asm` | Ending module dated **1992.8.17**

That last file is one of the better historical details in the tree.
It shows that even though the branch still preserves older Super Mario 2-era module identities, it was still receiving collection-era work in mid-1992.

Those added files are not cosmetic.
They give `mario_n2` a noticeably different shape from `mario_n1`:

File | What it adds to the branch
---|---
`mn_hp_smtitle.asm` | Title-screen flow, demo timing, Luigi/Mario select toggling, and the `URA` flag path
`mn_hp_smsub.asm` | Small game-specific helpers like `KAZECHK`, `KAZEON`, `KAZEOFF`, and flip-chimney support routines
`mn_hp_smfrdt.asm` | `COURSD`, `CORS00` to `CORS07`, `URAINIT`, and detailed fixed-character placement data
`mn_hp_smending.asm` | Explicit ending/game-over selection routines such as `GMOVSEL`, `GOWIT1`, and `GOWIT2`

The symbol exports make that difference visible too.
`mn_hp_smmain.asm` in `mario_n2` exports things like `TLPROS`, `STARCT`, and `OAMCL0`, while `mn_hp_smending.asm` adds `GMOVSEL`.
That makes this branch feel more self-contained around title, secret-route, and ending flow than `mario_n1`.

The `mn_m1make` file is also more revealing than the `mario_n1` makefile.
It shows that this branch:

* links `mn_hp_smending.rel` instead of stopping at `mn_hp_smend1.rel`
* still reuses `../mario_n1/mn_hp_smsnd.rel` for sound

That reuse is a nice reminder that these branches were not hermetically sealed.
The collection build was sharing pieces across branches where it made sense.

The linker map makes that reuse even more concrete.
`mario_n2/mn_hp_smmain.map` does not just imply shared audio logic, it literally links `../mario_n1/mn_hp_smsnd.rel` into the finished image.
So by late August 1993, Nintendo was comfortable building the second branch against a sound object compiled in the first branch's directory rather than maintaining a separate duplicate.

The timestamps tell a similar story.
Most of the source files in `mario_n2` cluster around **25 August 1993**, while the rebuilt linker outputs follow on **27 August 1993**.
That makes it look like this branch was edited first and then rebuilt shortly afterwards.

---
## The mario_n3 Branch
`mario_n3` is smaller than the other branches at a glance, but once opened up it is much denser than it first appears.

Everything here points toward Mario 3-specific support code, especially the two-player and battle-side material:

File | What it appears to cover
---|---
`mn_hp_mr3battle.asm` | Battle-mode, bonus-stage, and Mario-vs-Luigi logic
`mn_hp_mr3ascr.asm` | Auto-scroll and action-screen support
`mn_hp_mr3bg2st.asm` | BG2 setup and state handling
`mn_hp_mr3bgd0.asm` to `mn_hp_mr3bgd5.asm` | Large background and unit-data banks

The first impression from the file list is a little misleading.
This is not just a tiny leftover folder.
The files are large enough to feel like a serious subsystem export:

File | Size
---|---
`mn_hp_mr3bgd2.asm` | `259,711` bytes
`mn_hp_mr3bgd3.asm` | `182,397` bytes
`mn_hp_mr3bgd1.asm` | `168,498` bytes
`mn_hp_mr3bg2st.asm` | `164,792` bytes
`mn_hp_mr3bgd4.asm` | `131,038` bytes
`mn_hp_mr3battle.asm` | `77,350` bytes
`mn_hp_mr3ascr.asm` | `26,054` bytes

That makes `mario_n3` feel less like a loose battle patch and more like a concentrated Mario 3 subsystem export where the big world, BG2, and unit-placement data has been broken out into dedicated source blocks.

### Battle, Bonus, And Mario Vs Luigi
The comments inside `mn_hp_mr3battle.asm` are unusually direct.
They explicitly mention:

* `Mario 3 Bonus stage`
* `Mario vs Luigi`
* battle new-unit read data
* bonus enemy initialization
* bonus enemy logic
* cross-vs-enemy checks

The file also exports `BATTLE_GAME`, tracks `BPLEND` as a battle-end state, and contains comments like `All enemy stop !!` and `Last enemy ?`.
That makes this folder feel less like "generic Mario 3 code" and more like the special collection-era support material for Mario 3's extra multiplayer and battle presentation.

This is also where the branch starts to look distinctly compilation-era.
A lot of the preserved logic is not about normal side-scrolling level flow.
It is about bonus rooms, versus play, battle objects, battle enemies, and end-of-round control.

### Auto-Scroll And Screen Logic
`mn_hp_mr3ascr.asm` is the control layer that sits between those stage data banks and the live screen.
It is much more than a single scroll routine.

Right near the top it exposes:

* `SCRLMV`
* `SC00MV`
* `SC10MV`
* `SC20MV`
* `SC30MV`
* `SC45MV`

And the comments make the intended use very clear:

* all-scroll modes
* V-scroll-only modes
* auto-scroll end checks
* scroll-point setup
* ground auto-scroll
* special BG2 flashing support

So `mn_hp_mr3ascr.asm` is best read as the branch's motion and camera script layer.
It converts the giant data banks into actual scrolling behavior, including the more scripted and spectacle-heavy Mario 3 sequences.

### BG2 And Stage Presentation
`mn_hp_mr3bg2st.asm` is where the branch becomes especially revealing.
This file is not just background data.
It is a huge procedural BG2 setup layer with named handlers for many presentation types.

It exports a whole run of BG2-side routines and state:

* `B2UNTST`
* `B2TETWRT`
* `B2DTINT`
* `BG2BFST`
* `B2WKST`
* `BONASST`
* `MISESET`
* `BIGYKST`
* `B2EDST`

And later it keeps explicit setup blocks for:

* slot BG2
* ending BG2
* battle BG2
* demo BG2
* ice BG2
* cave BG2
* vertical unit sets
* slope unit changes

The comments in `mn_hp_mr3bg2st.asm` are especially nice because they still preserve stage labels rather than reducing everything to opaque tables.
That file names sections for:

* `world 4`
* `world 8 - 1`
* `world 8 - 2`
* `world 8 ha-i-ko-u`
* `2 play battle`
* `07 demo`
* `13 BG2 bonas`

So even without the final linked `mn_hp_mr3mainX.hex` image, the source export still gives a very concrete view of how Mario 3 stage/background setup and battle-mode support were organized inside the collection.

### The Giant Data Banks
The `mr3bgd*` files are where the real scale shows up.

`mn_hp_mr3bgd0.asm` is the smallest of the set, but it is still useful because it explains what kind of data the larger files are supporting.
It exports routines like `BGUTCNG` and `CLCNCHG`, plus named block and object categories such as:

* `CONB`
* `CLRB`
* `JMPB`
* `DORB`
* `BOTB`
* `WARB`
* `HATB`
* `TAIB`
* `BG0B`
* `BG1B`
* `BG2B`

That makes it look like a conversion or dispatch layer between abstract unit IDs and the real map or tile behaviors.

`mn_hp_mr3bgd1.asm` and `mn_hp_mr3bgd2.asm` then explode that into huge banks of named world data.
They preserve:

* long runs of `ENYM*` and `ENWK*` entries
* large `B1xx`, `B2xx`, and `B28x` bank-change tables
* many named setup helpers for terrain, doors, bridges, mushrooms, holes, clouds, flowers, ice, caves, and other Mario 3 environment types
* explicit battle and bonus-side data such as `BNS00` through `BNS0F`

So the huge `bgd` files are not just "background graphics."
They look more like the actual stage-construction vocabulary of the Mario 3 branch: tile categories, object banks, enemy placements, set-piece helpers, and bank-switched data tables.

### A Hands-On Source Workspace
This branch also has its own small helper scripts:

* `ff`, a C shell wrapper that opens `mn_hp_mr3*.asm` in an editor with `fe`
* `aa`, a matching helper that assembles `f_hp_mr3*.asm` with `as65c -lw`
* `ft`, another editor helper that opens the `f_hp_mr3*.asm` side with `te`

Those little wrappers are a nice reminder that this was a hands-on development folder, not just a copied source dump.
They also hint that the visible `mn_hp_mr3*.asm` files were living alongside a parallel `f_hp_mr3*.asm` workflow, even though those files are not preserved here.

Unlike `mario_n1` and `mario_n2`, `mario_n3` does not preserve its linked outputs in this export.
So this folder feels more like a source-side slice of one subsystem than a full branch capture.

{% include_cached link-to-other-post.html post="/super-mario-collection-mario-n3-mario-3-branch" description="For a dedicated deep dive into the preserved mario_n3 Mario 3 source slice, check out this post." %}

---
## How the Branches Fit Together
Once the four folders are read side by side, the overall structure is much clearer.

Branch | Role in the export | Strongest evidence
---|---|---
`mario_n0` | Shared launcher and collection shell | `Mario Zanmai`, game-select assets, branch start/NMI/IRQ vectors
`mario_n1` | One main gameplay branch under the shared shell | `Super Mario` and `Super Mario-CD` headers, full `mn_hp_sm*` module set, built `.hex` output
`mario_n2` | Japanese `Super Mario Bros. 2` / Lost Levels branch | `Super Mario 2` headers in a Japanese codebase, extra `smtitle` / `smending` / `smsub` modules, larger `.hex` output
`mario_nu` | Missing likely USA `Super Mario Bros. 2` branch | `mario-usa` asset references, `mn_nws_yrmain.hex`, and a full five-bank code region in the global map
`mario_n3` | Mario 3-specific subsystem branch | battle, bonus, Mario-vs-Luigi comments, World 8 and 2-player battle BG2 data

The useful high-level model is:

* `mario_n0` is the stable outer shell
* `mario_n1` and `mario_n2` are the preserved SMB1 and Japanese SMB2 / Lost Levels branches
* `mario_nu` is the missing but strongly implied USA SMB2 branch
* `mario_n3` is a Mario 3-heavy source slice whose final linked image is referenced by `mn_mrom.sdm` but not preserved here

That is why the archive feels a little uneven at first glance.
It preserves one collection shell, two built game branches, and one deeper source-side Mario 3 subsystem export inside a wider compilation environment.

---
## What the ROM Layout Script Reveals
The single most important file in the whole archive may be `mario_n1/mn_mrom.sdm`.

It is not source code for one module.
It is a cartridge layout script that shows how the larger compilation was supposed to be assembled.

A few things stand out immediately:

* it clears a target image with `f 0,4fffff,ff`
* it loads the built branch outputs such as `mn_hp_smmain.hex`
* it places many external graphics, screen, palette, sound, and binary data files at fixed ROM addresses

It is detailed enough that you can see distinct layers of the final cartridge being packed in:

Layer | Examples from the script | What it suggests
---|---|---
Front-end shell | `mario_n0/GAMESELECT-Ns.CGX`, `.SCR`, `.COL` | The collection menu lived as its own addressable graphics block
Converted NES-era graphics | `nes_m2/*`, `nes_mu/*`, `nes_m3/*`, `nes_m0/neszan.bin` | The compilation was still carrying converted or intermediate NES-derived asset banks
Branch program images | `mario_n1/mn_hp_smmain.hex`, `mario_n2/mn_hp_smmain.hex`, `mario_n3/mn_hp_mr3mainX.hex`, `mario_n4/mn_hp_m4main.hex` | Each bundled game or subsystem had its own linked program image
World-era additions | `mario_n4/mr4.CHR`, `X-Q-X-luiji.CGX`, `cbank*.bin` | The wider build included a separate fourth branch with its own graphics and character banks
Sound payloads | `tsound.bin`, `m1sound.bin`, `usasound.bin`, `m31sound.bin`, `m32sound.bin` | Audio was being packed as separate binary lumps rather than folded invisibly into one monolithic branch

The script also preserves a few wonderfully scrappy production details.
One of the missing Mario World-era files is literally named `X-Q-X-luiji.CGX`, typo and all, and the menu title graphics are split between both `mario_n0` and `mario_p0`.
That is exactly the sort of real pipeline untidiness that usually disappears from polished SDK samples.

That makes the missing context very visible.
The script expects sibling folders and assets that are not preserved in this export:

* `mario-1`
* `mario-usa`
* `mario-3`
* `mario_n4`
* `mario_nu`
* `asm0`
* `nes_m0`, `nes_m2`, `nes_m3`, `nes_mu`

It also names some of the final program images that are absent here:

* `../mario_nu/mn_nws_yrmain.hex`
* `../mario_n3/mn_hp_mr3mainX.hex`
* `../mario_n4/mn_hp_m4main.hex`

So this file does two things at once.
It confirms that the export sits inside a much bigger Super Mario Collection build environment, and it gives a concrete low-level view of how code and assets from multiple branches were packed into the cartridge image.

### Reconstructing the Full Cartridge From map.MAP
The most important follow-up artifact is `mario_n0/map.MAP`.
Unlike the smaller branch-local maps, this one is effectively a whole-cartridge linker map.

That matters because it preserves far more than `mario_n0`.
It covers:

* the launcher shell in bank `00`
* the `mario_n1` gameplay branch across banks `03` to `05`
* the `mario_n2` gameplay branch across banks `0D` to `0F`
* the missing `mario_nu` branch across banks `11` to `15`
* the missing larger `mario_n3` build across banks `20` to `2A`
* the missing larger `mario_n4` build across banks `2B` to `37`
* a long run of graphics, palette, screen, and sound banks between those code areas

At a high level, the code-side layout looks like this:

Branch | Main code banks in `map.MAP` | Preserved module count
---|---|---
Launcher shell | `00` plus shared front-end assets around it | `6` ASEG entries in the launcher bank
`mario_n1` | `03` to `05` | `12` gameplay-side modules plus shared shell pieces
`mario_n2` | `0D` to `0F` | `11` gameplay-side modules plus shared shell pieces
`mario_nu` | `11` to `15` | `38` surviving module entries
`mario_n3` | `20` to `2A` | `42` surviving module entries
`mario_n4` | `2B` to `37` | `44` surviving module entries

That makes one thing very clear:
the missing branches were not tiny add-ons.
They were large enough to occupy long contiguous bank ranges with dozens of named modules each.

The occupancy numbers make that feel even more concrete:

Branch | Total mapped ASEG bytes | What that implies
---|---|---
Launcher shell | `25,992` bytes in bank `00` | the front-end shell alone fills roughly four-fifths of a standard code bank
`mario_n1` | `92,094` bytes across banks `03` to `05` | three dense gameplay banks, all comfortably above `27 KB`
`mario_n2` | `92,124` bytes across banks `0D` to `0F` | almost the same overall weight as `mario_n1`, despite the different module mix
`mario_nu` | `154,296` bytes across banks `11` to `15` | five banks of code and data, with the first four all sitting around `30 KB` or more
`mario_n3` | `319,546` bytes across banks `20` to `2A` | a genuinely huge Mario 3 program region, with most banks heavily occupied
`mario_n4` | `302,769` bytes across banks `2B` to `37` | another very large branch, especially dense across banks `30` to `35`

That makes the hidden branches look much more like late-stage linked programs than loose partial experiments.
They were big, bank-hungry, and already shaped to fit a final cartridge map.

The bank layout is also not perfectly clean or isolated.
`mario_n3` gets a long uninterrupted run from `20` to `2A`, but the World-era `mario_n4` branch is split in two, with code at `2B` and `2C`, then a Mario 3-heavy asset run at `2D` to `2F`, and only then the rest of the `mario_n4` code at `30` to `37`.
That is a nice low-level reminder that Nintendo was packing one shared cartridge, not giving each game a sealed private region.

The surviving module names also make those branches easier to characterize:

Branch | What the module names suggest
---|---
`mario_nu` | A full gameplay branch with `main`, `player`, `title`, `enemy`, `cross`, `ramset`, `bgset`, `cgset`, `snd`, and multiple `dat` / `scr` modules
`mario_n3` | A very large Mario 3 build with `mainX`, `titl`, `play`, `battle`, `play2`, `play2s`, `kupa`, `bg2st`, many `bgd*` banks, many `enmy*` banks, and multiple data modules
`mario_n4` | An even larger World-era build with `main`, `play`, `demo`, `titl`, `ascr`, `mod7`, many `bgsc*` and `bgdt*` modules, many `enmy*` banks, map modules, and multiple ending modules

That deeper map evidence sharpens the earlier guesses:

* `mario_nu` really does look like a proper standalone gameplay branch rather than a stray helper
* the preserved `mn_hp_mr3*` source folder is only part of the wider Mario 3 build, not the whole thing
* `mario_n4` is not just "probably Super Mario World" in a vague sense, it is a very large branch with enough modules to support that reading strongly

You can also read the missing branches as structured codebases rather than flat name lists:

Branch | What the bank layout shows most clearly
---|---
`mario_nu` | bank `11` opens with `main`, four large `dat` / `bgdt` blocks, and an `endt` module, bank `12` adds `player`, `title`, `enemy`, `enemy2`, `cross`, `bgset`, and `ramset`, and banks `13` to `15` add `chr0`, `cgset`, `cgdt`, several `yscr` / `tscr` screen modules, more `bgst` / `bgdt` blocks, `snd`, and final `dat1` / `dat1b` payloads
`mario_n3` | bank `20` starts with `mainX`, `titl`, `cset`, and `man1`, then the branch expands into `data0`, `vrdt`, `play`, `battle`, `play2`, `play2s`, many `bgd*` banks, many `enmy*` banks, `mpro`, `sub0`, `sub1`, `kupa`, `bg2st`, `b2ut`, `b2cs`, and `wind`
`mario_n4` | bank `2B` opens with `rom0`, `endg`, `demo`, and `bgdt0`, bank `2C` is dominated by `bgsc0` to `bgsc4`, banks `30` to `33` hold `main`, `chst`, `play`, eight `enmy*` banks, and `mod7`, bank `34` adds large `mapy` and `mapd` data, bank `35` mixes title, auto-scroll, and four `map*` blocks, and banks `36` to `37` close with six `bgdt*` banks plus `end0` and `end1`

Some of the largest preserved pieces are revealing in their own right:

Module | Bank span in `map.MAP` | Size | Why it matters
---|---|---|---
`mn_nws_yrcgdt.asm` | `14:8000` to `14:BFFF` | full `16 KB` bank | `mario_nu` had at least one completely full CG or character-data bank
`mn_hp_mr3data0.asm` | `21:8000` to `21:FD70` | `32,113` bytes | the larger Mario 3 build had very large standalone data payloads beyond the `mario_n3` folder we can open directly
`mn_hp_m4mapd.asm` | `34:A400` to `34:EF3D` | `19,262` bytes | the World-era branch devoted an unusually large block to map data alone
`mn_hp_m4play.asm` | `30:C460` to `30:F9F4` | `13,717` bytes | `mario_n4` was not just data heavy, it also had a large active play module

The asset side is just as revealing.
Banks `01` to `02`, `06` to `0C`, `10`, `16` to `1F`, `2D` to `2F`, and large chunks of `38` to `4F` are filled with `CHAR` entries for:

* title graphics
* menu graphics
* converted NES graphics banks
* player and object graphics
* palette and screen data
* multiple separate sound binaries

So `map.MAP` turns the export into something much bigger than a few surviving folders.
It gives a partial reconstruction of the entire collection cartridge layout, even where the underlying source or asset folders no longer survive.

### What the Asset Banks Show
The `CHAR` side of `map.MAP` is not just a few loose graphics blobs.
It is a full asset layout running right across the cartridge.

By type, the surviving `CHAR` entries break down roughly as:

Asset type | Count in `map.MAP`
---|---
Graphics (`.CGX`, `.CHR`) | `53`
Palettes (`.COL`) | `25`
Screen/tilemaps (`.SCR`, `.SCRN`) | `14`
Sound or binary payloads (`.bin`) | `9`
List data (`.lst`) | `1`

The most striking pattern is how heavily the upper banks lean toward Mario 3 and World-era material.

Range | What dominates there
---|---
`01` to `02` | Front-end title/logo art plus early World-era graphics
`06` to `0C` | SMB1 graphics mixed with title/menu assets and separate sound payloads
`16` to `1F` | SMB2 / USA graphics banks plus more audio payloads
`2D` to `2F` | Mario 3, SMB2 player graphics, and SMB1 ending crossover assets
`38` to `3F` | Mario 3 menu, palette, ending, player, and 2-player assets
`40` to `47` | Eight large Mario 3 graphics banks, including both native and `nes_m3` converted banks
`48` to `49` | Two full banks of `GAMESELECT-Ns.CGX` for the collection front-end
`4A` to `4D` | Four full banks of `mario_n4/mr4.CHR`
`4E` to `4F` | `mario_n4/cbank1.lst` and `mario_n4/cbank2.bin`

That tells us a few useful things.

First, Mario 3 was not a tiny side branch in the cartridge layout.
It owned a huge amount of graphics and palette space, especially in banks `38` to `47`.

Second, the front-end menu was expensive enough to get two dedicated `GAMESELECT-Ns.CGX` banks of its own at `48` and `49`.
That makes the launcher feel more substantial than a simple static menu layer.

Third, the middle banks show that Nintendo was not separating "game assets" and "front-end assets" into perfectly isolated regions.
For example:

* bank `07` mixes SMB1 object graphics, `m32sound.bin`, title graphics, title screen data, two title palettes, and the first chunk of `neszan.bin`
* bank `0C` mixes `m31sound.bin`, the launcher screen tilemap, a Mario 3 ending object bank, and SMB1 2-bit graphics
* bank `1F` splits cleanly into `m1sound.bin` and `usasound.bin`, showing that the sound payloads themselves were still kept as distinct binaries

Fourth, the World-era branch was carrying at least four entire `mr4.CHR` banks plus additional `cbank` data at the very end of the mapped space.
So even on the asset side, `mario_n4` looks like one of the larger branches in the overall compilation.

Some of those regions are worth calling out more concretely:

Range | Good examples from the mapped files | What that range was doing
---|---|---
`01` to `02` | `mario_p0/sm123-title-Ps.CGX`, `mario_p0/ROGO-Ns.CGX`, `mario_n4/X-Q-X-luiji.CGX`, `mario_n4/X-1W-luiji.CGX` | front-end logo/title material already mixed with World-era character art
`06` to `0C` | `mario-1/sm-1-bg.CGX`, `mario-1/sm-1-obj.CGX`, `asm0/m32sound.bin`, `asm0/sm123-title2.CGX`, `mario_n0/GAMESELECT-Ns.SCR`, `mario-3/sm-3-ending-obj.CGX` | SMB1 graphics, menu/title assets, and separate sound payloads packed side by side
`16` to `1F` | `mario-usa/sm-2-a-h.CGX`, `mario-usa/sm-2-q-x.CGX`, `nes_mu/sm-2-y-1fN.CGX`, `asm0/m1sound.bin`, `asm0/usasound.bin` | the SMB2 / USA side of the cartridge, still split across native and NES-derived banks
`38` to `3F` | `mario-3/2play-menu.SCR`, `mario-3/sm-3-map-player.CGX`, `mario-3/sm-3-demoobj.CGX`, `mario_p0/sm123-title-Ps.SCR`, `mario_n0/GAMESELECT-Ns.COL`, many `color-rom-*.COL` files | the densest Mario 3-heavy run, mixing menus, endings, 2-player assets, and huge palette blocks
`40` to `47` | `mario-3/sm-3-0.CGX` through `sm-3-7.CGX`, plus `nes_m3/sm-3-3N.CGX` and `sm-3-4N.CGX` | eight large Mario 3 graphics banks with converted NES-side support still visible
`48` to `4F` | `mario_n0/GAMESELECT-Ns.CGX`, `mario_n4/mr4.CHR`, `mario_n4/cbank1.lst`, `mario_n4/cbank2.bin` | the cartridge closes with a surprisingly expensive front-end block and a large World-era character-data run

The mixed banks are also interesting.
For example:

* bank `25` mixes Mario 3 battle code with `color-rom-battle.COL` and `sm-3-2p.SCRN`
* bank `3C` combines title/menu screen data, twenty-two different Mario 3 palette chunks, and several ending/background screen maps
* banks `07`, `0C`, and `1F` mix sound payloads with title/menu or gameplay graphics rather than reserving a completely isolated audio region

That is a nice reminder that this was a practical production cartridge map, not a tidy academic example.
Nintendo was packing code, art, palettes, screens, and sound where they fit, as long as the final bank layout worked.

### How the Local Branch Maps Fit Into the Full Map
The branch-local map files make much more sense once they are placed beside `mario_n0/map.MAP`.

The `mario_n1` and `mario_n2` local maps are basically zoomed-in slices of the larger cartridge map:

Branch-local map | Full-cartridge bank range | What it confirms
---|---|---
`mario_n1/mn_hp_smmain.map` | `03` to `05` | The first main gameplay branch sits exactly where the global map says it should
`mario_n2/mn_hp_smmain.map` | `0D` to `0F` | The second gameplay branch occupies its own later bank run with the same module family

That makes `mario_n0/map.MAP` easier to trust when it describes the missing branches too.
It is not inventing some abstract cartridge plan.
For the branches we can verify locally, the global map matches the local link maps exactly.

So when it places:

* `mario_nu` across `11` to `15`
* the larger `mario_n3` build across `20` to `2A`
* the larger `mario_n4` build across `2B` to `37`

it is very likely preserving the real final link layout for those missing branches, not just a placeholder design.

---
### What the Missing Sibling Folders Most Likely Were
At this point the missing folders are not complete mysteries anymore.
Between `mn_mrom.sdm`, `mn_mzchr`, `mn_mmcp`, `mz_map`, and even `mario_n0/map.MAP`, we can make fairly grounded guesses:

Folder | Most likely role
---|---
`mario_nu` | Another gameplay branch with its own linked image, probably the `mn_nws_yrmain.hex` path named by the ROM and map-check scripts
`mario_n4` | The Super Mario World-era branch, strongly suggested by `MR4` names, `mr4.CHR`, and launcher comments about `"SUPER MARIO WORLD"`
`mario_p0` | Shared title/logo asset folder feeding the collection front-end
`asm0` | Common binary/graphics/sound asset folder used across the whole cartridge build
`mario-1` | Asset branch for Super Mario Bros.
`mario-usa` | Asset branch for the USA / Super Mario Bros. 2 side of the compilation
`mario-3` | Asset branch for Super Mario Bros. 3
`nes_m0`, `nes_m2`, `nes_m3`, `nes_mu` | Converted or intermediate NES-derived asset banks used during the SNES compilation

The key extra clue is that `mario_n0/map.MAP` still preserves the missing program modules by name, even though the source folders themselves are gone.
It lists:

Branch | Surviving module names in `map.MAP`
---|---
`mario_nu` | `mn_nws_yrmain.asm`, `mn_nws_yrplayer.asm`, `mn_nws_yrtitle.asm`, `mn_nws_yrenmy.asm`, `mn_nws_yrenmy2.asm`, `mn_nws_yrcros.asm`, `mn_nws_yrbgset.asm`, `mn_nws_yrramset.asm`, `mn_nws_yrcgset.asm`, `mn_nws_yrcgdt.asm`, `mn_nws_yrsnd.asm`
`mario_n3` | `mn_hp_mr3mainX.asm`, `mn_hp_mr3titl.asm`, `mn_hp_mr3play.asm`, `mn_hp_mr3battle.asm`, `mn_hp_mr3play2.asm`, `mn_hp_mr3play2s.asm`, `mn_hp_mr3kupa.asm`, `mn_hp_mr3bg2st.asm`, `mn_hp_mr3b2ut.asm`, `mn_hp_mr3b2cs.asm`, `mn_hp_mr3wind.asm`
`mario_n4` | `mn_hp_m4main.asm`, `mn_hp_m4demo.asm`, `mn_hp_m4play.asm`, `mn_hp_m4titl.asm`, `mn_hp_m4ascr.asm`, `mn_hp_m4mod7.asm`, `mn_hp_m4mapd.asm`, `mn_hp_m4bgwt.asm`, `mn_hp_m4end0.asm`, `mn_hp_m4end1.asm`

Put together with the known game list for Super Mario Collection / All-Stars, that makes the likely branch mapping much clearer:

Branch | Most likely game
---|---
`mario_n1` | `Super Mario Bros.`
`mario_n2` | Japanese `Super Mario Bros. 2` / `The Lost Levels`
`mario_nu` | USA `Super Mario Bros. 2`
`mario_n3` | `Super Mario Bros. 3`
`mario_n4` | `Super Mario World`

That is important because it turns the missing branches from vague references into partially reconstructable ones.
We now know not only that they existed, but roughly how they were modularized and where their linked code lived in the final memory map.

{% include_cached link-to-other-post.html post="/super-mario-collection-mario-n4-world-branch" description="For a deeper reconstruction of the missing World-era mario_n4 branch, check out this post." %}

{% include_cached link-to-other-post.html post="/super-mario-collection-mario-nu-branch" description="For a deeper reconstruction of the missing mario_nu branch, check out this post." %}

{% include_cached link-to-other-post.html post="/super-mario-collection-asm0-shared-assets" description="For a deeper reconstruction of the missing shared asm0 asset staging folder, check out this post." %}

So the export we have is not just missing "some folders".
It is missing the rest of a wider branch-and-asset workspace that the surviving scripts still clearly expect to be present.

---
## What This Archive Is Best At Showing
This export is most valuable as a snapshot of integration work.

It shows:

* a 1992 Mario Zanmai front-end shell
* older SMB-era and SMB2-era modules being carried forward into a 1993 collection build
* Mario 3-specific battle-side and world-data support code
* the exact late-stage build artifacts produced by Nintendo's SNES toolchain
* the larger ROM packing script that tied all those branches together

So even though the leak does not preserve the entire Super Mario Collection source tree in one place, it still gives a very useful low-level view into how Nintendo was assembling a multi-game SNES compilation from shared shell code, reused older game modules, and branch-specific content.
