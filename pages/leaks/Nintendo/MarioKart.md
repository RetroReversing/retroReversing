---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Super Mario Kart Source Code (Gigaleak)
category: leak
permalink: /super-mario-kart-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Original Super Mario Kart Source Code (SNES)
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/MarioKart.md
updatedAt: '2026-03-29'
---

The Nintendo Gigaleak preserves a very substantial Super Mario Kart source archive under `other/SFC/ソースデータ/MarioKart`.

Unlike the F-Zero leak, this is not neatly split into `Game` and `Tools`.
It looks much more like a live working directory copied straight out of development, with assembly source, prebuilt `.rel` objects, regional variants, editor code, backup-RAM routines, and even Super Famicom disk support code all sitting side by side.

{% include link-to-other-post.html post="/gigaleak" description="For more information on the rest of the Gigaleak check out this post." %}

---
## At a Glance
This archive is especially useful because it preserves several layers of the Super Mario Kart project at once:

* the main race, battle, menu, ending, object, audio, and decompression code
* regional source branches for Japanese, European, and PAL-era variants
* in-engine editors for maps, battle layouts, and RAM/debug work
* a matching set of `.rel` object files that make the folder look like an active build workspace, not just a source backup
* low-level SFX-DOS support modules for floppy, serial, console, and printer I/O

It also preserves a nice timeline of how the project grew:

* the core runtime files cluster around **April to August 1992**
* the SFX-DOS and hardware-driver files are older, mostly from **October 1991**
* the regional files show late-stage branch work for **Japanese**, **European**, **PAL**, and a few **German/debug** variants

# Root Directory (SFC.7z/ソースデータ/MarioKart)
The extracted `MarioKart` folder is flat rather than neatly nested.
That alone is revealing, because it makes the archive feel closer to a live programmer workspace than a cleaned-up archive prepared for handoff or release.

At the top level the file types break down like this:

Type | Count | What it suggests
---|---:|---
`.asm` | 145 | Main 65C816 source modules, editor code, and support libraries
`.rel` | 144 | Prebuilt assembled objects kept alongside the source
`.def` | 6 | Shared definitions for labels, work RAM, objects, and regions
No extension | 6 | Register maps and helper include files such as `rp5a22`, `rp5c77`, and `D77C25`
`.lib` | 1 | `sfxdos.lib`, likely a bundled library artifact for the DOS-side support layer

That near one-to-one source/object pairing is one of the strongest clues in the whole archive.
This does not look like a source-only historical export.
It looks like a directory that was actively being assembled and relinked during development.

The pairing is not completely perfect, though.
A few files stand out:

* `TITLE.asm` exists without a matching `TITLE.rel`, while the actual regional title modules such as `title-j.asm`, `title-e.asm`, and `title-p.asm` do have object files
* hardware and SFX-DOS support files like `sfxdos.asm`, `sccdrv.asm`, `fdcdrv.asm`, and `ppidrv.asm` have source but no sibling `.rel`, which makes them look more like shared support code copied into the directory
* a few `.rel` files such as `kart-check.rel`, `kart-ctrl.rel`, `se.rel`, and `sos.rel` survive without matching source, which hints that part of the build graph still lived outside this copied folder

---
## How Complete This Looks
This looks much closer to a real working Super Mario Kart source snapshot than a token sample.

The strongest signs in its favour are:

* the core game runtime is present in major modules like `kart-main.asm`, `kart-init.asm`, `kart-drive.asm`, `kart-calc.asm`, `kart-bg.asm`, `kart-ppu.asm`, `kart-enemy.asm`, and `kart-apu.asm`
* almost every major gameplay and menu module still has a matching `.rel` object beside it
* the archive preserves regional variants rather than just one late merged branch
* the map, RAM, and disk-related editor code is still present
* the folder still carries the shared register/label include files that tell the rest of the source where graphics, audio, maps, and backup RAM live

That said, it is still safer to call this a **near-complete working source snapshot** than a guaranteed self-contained rebuild package.

What is still missing or uncertain:

* there is no obvious top-level makefile or batch file in this folder showing the exact final build order
* some modules still include paths like `../join`, `../../SFX`, `../../DSP`, and `../../../kimura`, which implies this folder originally sat inside a larger tree
* a handful of `.rel` objects survive without source, so not every dependency is visible here
* the actual assembler, linker, and full SDK environment are not bundled in the directory

So the right claim is not "everything needed to rebuild the shipped game is definitely here".
The better claim is that this looks like a very strong working snapshot of Super Mario Kart's development directory, with most of the game-side code and a surprising amount of editor and support infrastructure still intact.

---
## What the Flat Workspace Reveals
The most interesting thing about this leak is how little separation there is between different kinds of work.

In the same directory you can find:

* top-level game control modules like `kart-main.asm` and `kart-init.asm`
* per-scene files like `Battle.asm`, `Pause.asm`, `Result.asm`, `Final.asm`, `Record.asm`, and `Scene.asm`
* per-system files like `Compress.asm`, `ISPK-j.asm`, `System.asm`, `Object.asm`, and `Sub_sound.asm`
* editor files like `mapedit.asm`, `maped3.asm`, `maped4.asm`, `edit_1.asm`, `edit_2.asm`, `edit_3.asm`, `runed.asm`, `runed1.asm`, and `runed2.asm`
* DOS and hardware support code like `sfxdos.asm`, `sccdrv.asm`, `fdcdrv.asm`, `ppidrv.asm`, `condrv.asm`, and `fileio.asm`

That mix makes the archive much more useful than a clean "final source" export would have been.
It preserves some of the actual production mess: game code, runtime data, editor logic, disk routines, and old helper libraries all living together in one place.

The timestamp spread reinforces that impression.
Files like `sfxdos.asm`, `ccp_main.asm`, `condrv.asm`, and `fileio.asm` sit back in **late 1991**, while the core racing code and regional branches were still being updated through **summer 1992**.

---
## Main Runtime Structure
The central control flow becomes clear very quickly once the core modules are opened.

`kart-main.asm` is the real top-level dispatcher.
It defines `Reset_entry`, `NMI_entry`, `IRQ_entry`, `COP_entry`, and a main loop that waits for NMI, then jumps through a `Process_address` table based on the current game mode.

That one file alone shows how broad the game had already become by July 1992.
It imports routines for:

* race flow
* battle flow
* title handling
* course and kart selection
* record screens
* endings and staff-roll style sequences
* pause handling
* object transport and camera control
* three separate editor entry points

`kart-init.asm` is just as revealing.
Rather than handling only power-on setup, it drives the transition system for the whole game.
Its `Selection_address` table includes:

* `Title_initial`
* `Kart_select_initial`
* `World_select_initial`
* `Battle_initial`
* `Edit1_initial`
* `Edit2_initial`
* `Edit3_initial`
* `Course_select_initial`
* `Final_initialize`

That is one of the clearest low-level development details in the leak.
The editors were not treated as separate external tools.
They were wired into the same mode-selection and initialization framework as the real game screens.

The work RAM definitions in `work.def` make that structure even clearer.
They document shared state for `game_status`, `game_mode`, `game_level`, `game_selecta`, `game_index`, `irq_index`, `world_number`, `map_pointer`, `race_init`, `pause_status`, camera state, fade state, sound state, lap counters, and ranking buffers.

### The Main Loop Is a Small Scheduler
What makes `kart-main.asm` especially useful is that it does not just define one generic update loop.
It preserves the actual scheduler that the rest of the game was written around.

After `Reset_entry` finishes the hardware-side setup, `Main_loop` does three things in a very tight cycle:

* call `Selection_process` to see whether the game is transitioning into a new state
* wait until the next NMI flips `NMI_flag`
* jump through `Process_address` using `game_index`

That is a simple structure, but it says a lot about how the project was organized.
Super Mario Kart was not built around one giant "gameplay loop" with lots of internal conditionals.
It was built around a mode dispatcher, with each major screen or tool owning its own main and NMI paths.

The `Process_address` table makes that explicit:

Game index | Main handler | Meaning
---|---|---
`00` | `Playing_process00` | idle or placeholder state
`02` | `Playing_process02` | race
`04` | `Playing_process04` | title
`06` | `Playing_process06` | kart select
`08` | `Playing_process08` | world select
`0A` | `Playing_process0A` | driver's point screen
`0C` | `Playing_process0C` | ending flow
`0E` | `Playing_process0E` | battle
`10` | `Playing_process10` | editor 1
`12` | `Playing_process12` | editor 2
`14` | `Playing_process14` | editor 3
`16` | `Playing_process16` | course select
`18` | `Playing_process18` | final sequence
`1C` | `Playing_process1C` | record screen

That table is a good reminder that the editors and record screen were not hanging awkwardly off the side of the game.
They were first-class runtime modes with the same scheduling status as race, battle, title, and ending.

### Main and NMI Work Are Split Per Mode
The second useful table in `kart-main.asm` is `NMI_address`.
It mirrors the main-mode structure and gives each major state its own VBlank-side handler.

That split matters because it shows how Nintendo kept the heavy per-frame simulation separate from VRAM, OAM, and HDMA work.
For example:

* `NMI_process02` handles the race-side VRAM and OAM transport path, then calls `Race_checker`, `Set_HDMA_parameter`, `Screen_control`, `Demo_camera`, and a common package that handles sound and controller scanning
* `NMI_process04`, `06`, `08`, and `0A` do much lighter menu-style work, mostly `Set_OAM_screen1`, mode-specific NMI code, and the shared input and sound package
* the battle mode mirrors the race structure rather than the menu structure, which makes sense because it still has to move objects, backgrounds, and camera state every frame

That arrangement is one of the best architecture clues in the whole project.
The game is effectively written as a pair of dispatch tables:

* one for per-frame logic
* one for VBlank-time transport and rendering setup

So even before looking at the subsystems, the overall design already looks clean and deliberate.

### kart-init.asm Is the Transition Layer
If `kart-main.asm` is the scheduler, `kart-init.asm` is the state-transition layer that feeds it.

`Initialize_process` is broader than a normal startup routine.
It:

* clears and initializes RAM
* brings up the Nintendo splash path
* initializes the APU and DSP side
* loads character and direction data
* calls `DOS_INI`
* enables NMI
* seeds the initial `game_selecta`, `fade_control`, and `fade_speed` values

That is already enough to show that startup was not only about the retail game.
The boot path still expected the DOS-side support layer and the wider dev environment to exist.

The real architectural center, though, is `Selection_process`.
That routine watches `game_selecta`, waits for the fade state to reach the right point, disables interrupts, clears the current mode state, and then jumps through `Selection_address` to run the correct initializer for the next mode.

That table is one of the clearest summaries of the whole project:

Selection value | Initializer
---|---
`02` | `Race_initial`
`04` | `Title_initial`
`06` | `Kart_select_initial`
`08` | `World_select_initial`
`0A` | `DP_initial`
`0C` | `Record_initial`
`0E` | `Battle_initial`
`10` | `Edit1_initial`
`12` | `Edit2_initial`
`14` | `Edit3_initial`
`16` | `Course_select_initial`
`18` | `Final_initialize`

So `game_selecta` is really the transition request register, while `game_index` becomes the active runtime mode after the transition is complete.
That is a small distinction, but it is one of the best low-level examples in the leak of how Nintendo separated "what we want to become next" from "what we are running now."

### work.def Is the Shared Runtime Contract
`work.def` is easy to skim past, but it is one of the most valuable files in the entire archive because it names the shared RAM contract that all of the major modules are using.

The definitions fall into a few clear groups:

Category | Examples | What they control
---|---|---
Global mode state | `game_status`, `game_mode`, `game_level`, `game_selecta`, `game_index`, `irq_index` | Which broad mode is active and how the scheduler should interpret it
Frame and race state | `frame_counter`, `race_status`, `race_init`, `over_flag`, `lap_number` | How the current race or sequence is progressing
World selection state | `world_number`, `map_pointer`, `map_number`, `map_type`, `game_mode_stock` | Which course family and specific map are loaded
Pause and fade state | `pause_status`, `pause_index`, `fade_control`, `fade_speed`, `fade_data` | Mode transitions and paused execution
Camera and scroll state | `scroll_h`, `scroll_v`, `center_x`, `center_y`, `camera_distance`, `camera_pitch`, `camera_zoom`, `camera_direction`, `camera_mode` | The Mode 7 camera model and screen positioning
Audio state | `sound_port`, `bgm_flag`, `bgm_pointer`, `bgm_status`, `finallap_counter`, `doppler_driver` | Sound command flow, BGM state, and race-specific audio behavior
Persistent or score state | `player_coin`, `win_count`, `official_flag`, `rank_index` | Results, lap progression, and player-facing game state

Reading this file alongside `kart-main.asm` makes the codebase feel much less opaque.
The main dispatcher is not passing around complex structs.
It is coordinating a shared WRAM workspace that every major module knows how to read.

### label.def Is the ROM Content Atlas
If `work.def` is the RAM contract, `label.def` is the ROM content atlas.

The file does much more than define a few constants.
It maps out where major gameplay and presentation data actually lives in ROM:

* BGM addresses such as `Title_BGM`, `Battle_BGM`, `Circuit_BGM`, `Ice_BGM`, and `Ending_BGM`
* demo driver data like `DEMO_MARIO`, `DEMO_PEACH`, `DEMO_KINOPIO`, and the other prerecorded demo inputs
* per-map screen data such as `MAP00_SCR` through `MAP18_SCR`
* course-family character sets like `CIRCUIT_CHR`, `OBAKE_CHR`, `GRASS_CHR`, `CASTLE_CHR`, `ICE_CHR`, `DART_CHR`, `SAND_CHR`, and `STAR_CHR`
* matching BCH, BSC, color, and object tables for each course family

The most revealing part is how systematic it is.
Rather than giving every map an entirely unique content stack, `label.def` shows the game reusing themed asset families across multiple courses and battle maps.

For example:

* multiple circuit maps point back to the same circuit graphics family
* battle maps reuse the same course-family CHR, BCH, BSC, and color banks instead of defining a completely separate battle-only asset format
* the per-map `*_area` and `*_target` definitions hang off one shared `Drive_data_address`, which makes the course logic look table-driven rather than hardwired

That makes `label.def` one of the strongest "how this was really built" files in the whole archive.
It is not just a convenience include.
It is the bridge between symbolic game logic and the actual packed data layout in ROM and RAM.

### Course Data Is Table-Driven
The course-loading side becomes much clearer once `kart-init.asm` and `label.def` are read together.

`Set_map_number` does not hardcode a cup flow in logic.
It computes an index from `world_number` and `map_pointer`, then looks that index up in `World_map_data`.

That table preserves the actual cup ordering:

Cup | Map order
---|---
Mushroom Cup | `13`, `12`, `10`, `11`, `07`
Flower Cup | `0D`, `0A`, `02`, `03`, `0F`
Star Cup | `01`, `0C`, `0B`, `09`, `00`
Special Cup | `04`, `06`, `05`, `08`, `0E`

That is a good example of the project's overall style.
The game flow is controlled by lookup tables rather than by lots of map-specific branching.

The same pattern continues with `Map_type_data`.
Once `map_number` is chosen, `Set_map_type` turns it into one of the shared environment families:

* `circuit`
* `obake`
* `grass`
* `castle`
* `ice`
* `dart`
* `sand`

That in turn drives `Set_maps`, which is split neatly into:

* `Set_map_character`
* `Set_map_screen`

The helper names undersell how much they are doing.
`Open_character` and `Open_screen` pull compressed data into work RAM, while `Set_character_data`, `Set_screen_data`, and `Set_item_BG` push the decoded results toward VRAM and the background buffers.

That is where `label.def` becomes especially valuable.
Its `MAPxx_CHR`, `MAPxx_BCH`, `MAPxx_BSC`, `MAPxx_COL`, and `MAPxx_OBJ` aliases show that each map is assembled from a handful of themed asset families rather than a single monolithic "course blob".

The same is true for the drive data.
The `MAPxx_area` and `MAPxx_target` labels all hang off one `Drive_data_address`, and the later `MAPxx_ARE` and `MAPxx_TRG` labels point to tightly packed per-course data blocks in ROM.

So the course system is not only theme-driven.
It is also highly table-driven:

* choose a map from the cup table
* map it to a terrain family
* load the matching character, screen, color, and object banks
* pull the drive-area and target data from shared course tables

That is one of the clearest examples in the leak of how Nintendo kept Super Mario Kart's content scalable without inventing a unique code path for every course.

---
## Regional Branches
The regional structure in this archive is much broader than a simple Japan-versus-export split.

The source files show a mixture of suffixes:

Suffix | Likely meaning | Examples
---|---|---
Base | Shared or default branch | `kart-init.asm`, `Final.asm`, `Pause.asm`
`-j` | Japanese branch | `Final-j.asm`, `Ending1-j.asm`, `title-j.asm`
`-e` | European/export branch | `Final-e.asm`, `w-select-e.asm`, `record-e.asm`
`-p` | PAL-era branch | `Final-p.asm`, `Pause-p.asm`, `ISPK-p.asm`
`-d` | Debug or German-specific variant | `Debug-d.asm`, `Meter-d.asm`, `title-d.asm`, `BGunit_set-d.asm`

Some files only branch once or twice, while others preserve full regional stacks.
The heaviest examples are:

* `Final.asm` with `-e`, `-j`, and `-p` variants
* `Ending1` and `Ending2` with `-e`, `-j`, and `-p` variants
* `c-select` and `w-select` with base, `-e`, `-j`, and `-p` variants
* `kart-init` with base, `-e`, `-j`, and `-p` variants
* `title` with base, `-d`, `-e`, `-j`, and `-p` variants

That regional layering matters because it shows Super Mario Kart as a live branching project rather than a single monolithic source tree.
The game was still being locally adapted screen by screen, mode by mode, and system by system.

`title-j.asm` is a good example.
It still contains explicit debug helpers for setting player, world, and rank state right from the title sequence.
`Final-j.asm` is equally rich, preserving the full ending flow with award logic, moving clouds, paper effects, and different behavior depending on finishing rank.

---
## Editors, Debug, and DOS Support
This is where the Mario Kart leak really separates itself from a normal source drop.

### In-Engine Editors
The editor files are not toy leftovers.
They are a layered development environment with front-end shells, specialized editing back ends, supporting data files, and disk I/O bridges.

The cleanest way to read them is as four connected parts:

Part | Main files | What they appear to do
---|---|---
Editor front ends | `edit_1.asm`, `edit_2.asm`, `edit_3.asm` | Boot different editor modes and route control/NMI flow
Map and object editors | `mapedit.asm`, `runed.asm`, `runed1.asm`, `runed2.asm`, `maped3.asm`, `maped4.asm` | Handle point editing, area editing, object placement, save/load, and battle-map work
Editor data | `edit_data.asm`, `edmap2.asm` | Provide UI text, OAM layouts, HDMA tables, file-name tables, and object patterns
Disk bridge | `ed_dos1.asm`, `ed_dos2.asm` | Turn editor save/load requests into SFX-DOS file operations

That split matters because it shows Nintendo was not just carrying one debug menu.
They had a small editor framework with reusable parts.

### The Debug Hub in edit_3.asm
`edit_3.asm` is the best high-level overview of the whole toolset.
It exports `ED_init_3`, `ED_main_3`, and `ED_nmi_3`, then dispatches through a large `editer_select` table.

That table is unusually revealing.
It can boot all of these modes from one place:

* a `select` or debug-mode menu
* a Mode 7 test
* a CG test
* a larger graphics test
* the actual map test, which jumps directly into `map_init` and `map_main`
* a title test
* an object demo
* a sound test

So `edit_3.asm` is not just another editor file.
It looks more like an internal launcher for multiple test and content-production tools.

The file also preserves some nice implementation details:

* it loads prebuilt screen buffers for `title_screen`, `sound_screen`, and `select_screen`
* it has dedicated NMI handlers for the select screen and sound screen
* it explicitly sets `debug_rom_flag`
* it includes Mode 7 buffer-flip code, character conversion helpers, and object-character setup for debug displays

That makes it feel closer to a small internal test shell than a single-purpose editor.

#### What the Top-Level Menu Actually Does
The select menu in `edit_3.asm` is more concrete than a generic "debug mode" label makes it sound.
`select_main` draws a text menu from `select_data`, tracks the current cursor in `edit_point`, and exposes a set of directly launchable actions:

Menu path | What it appears to do
---|---
`select_world` | Change `world_number`
`select_course` | Change `map_pointer`
`start_rase` | Jump straight into a normal race setup
`select_battleobj` | Adjust battle-object selection state
`select_battlemap` | Choose the current battle map
`start_battle` | Jump straight into battle mode
`edit1` | Launch the first editor shell
`edit2` | Launch the second editor shell
`m7_char` | Launch the Mode 7 character test
`cg_map` | Launch the color/CG test
`map_check` | Launch the map editor itself
`demo2` | Launch the object demo
`sound_test` | Launch the sound test

That matters because it shows the menu was not only for isolated graphics tests.
It was also a front door into the real gameplay and editor states.

The jump targets are especially clear in the code:

* `start_rase` sets `race_init`, `game_selecta`, `fade_control`, and `fade_speed`, then pushes the game into a normal race path
* `start_battle` writes the chosen `battlemap` into `map_number`, then jumps through the battle-mode setup path
* `edit1` and `edit2` reuse the same `battlemap` selection and then jump into the first and second editor families through `game_selecta`

So `edit_3.asm` is not just browsing internal demos.
It is actively driving the same global state machine used by the real game.

#### Screen Buffers and NMI Layout
The shell also preserves how Nintendo staged editor UI screens in RAM.

Three fixed screen buffers sit in WRAM:

Buffer | Address | Use
---|---|---
`title_screen` | `7FC000h` | Title or title-test display data
`sound_screen` | `7FC800h` | Sound-test menu display
`select_screen` | `7FD000h` | Main debug-mode menu

The paired `nmi_select` table is small but revealing:

* the select menu gets its own DMA-backed NMI handler
* the sound test gets a different NMI path that also calls `DMA_demokart`
* most of the other test modes do not need their own special NMI routine at all

That suggests the shell was designed around a few heavyweight UI screens and several simpler test states.

#### The Built-In Sound Test
The sound test inside `edit_3.asm` is much richer than a single "play sound" stub.

`soundtest_init`:

* clears the current PPU setup
* points the display buffer at `sound_screen`
* initializes a sprite set through `Init_demokart`
* zeroes sound-port work values and cursor state

Then `soundtest_main` turns the menu into a live APU-port editor.
It:

* tracks a `sound_cursor`
* divides that cursor into a port number and bit position
* lets the user toggle or edit bytes and individual bits
* writes the results to `2140h` through `2142h`
* mirrors those writes into dummy shadow ports

That is a very strong preservation detail.
The developers did not just have a menu of named tracks.
They had a low-level sound-port monitor/editor for directly poking the SPC communication registers.

#### The Graphics and Mode 7 Test Modes
The other test modes are also more practical than decorative.

`m7test_init` clears Mode 7 VRAM, initializes the Mode 7 registers, writes a test screen, and turns the display on.
`cgtest_init` does the same, but also fills test character data so the team could inspect how graphics and palette data behaved in Mode 7.

The larger `bigtest` path is the most interesting of the graphics tests.
It:

* clears VRAM
* converts big character art such as Mario and the other drivers into a Mode 7-friendly format
* flips and repacks that art with `Buffer_write`, `M7flip`, and `sp_mode`
* boots a Mode 7 display using those converted assets

The data tables here are excellent low-level evidence.
The file still names source ROM regions like `OBJ_mario`, `OBJ_koopa`, `OBJ_peach`, `OBJ_cong`, `OBJ_luige`, `OBJ_noko`, `OBJ_kino`, and `OBJ_yossy`, then assigns palette IDs and conversion parameters to each.

That means `edit_3.asm` is preserving an internal graphics workbench, not only a generic map viewer.

#### The Internal Utility Layer
Another reason `edit_3.asm` matters is that it keeps a whole bundle of reusable editor helpers in one place.

The file contains routines for:

* cursor stepping and accelerated cursor movement
* bit, nibble, byte, and word editing
* text rendering into the debug buffers
* object-message rendering into OAM
* Mode 1 to Mode 7 character conversion with `Conv_m1m7`
* VRAM and color writes
* PPU reset and Mode 7 register initialization
* auto-repeat input handling

This is easy to underestimate, but it is one of the clearest signs that the editor shell was a maintained internal platform.
The Mario Kart team was not writing every test mode from scratch.
They had a shared mini-library for menu rendering, debug cursors, VRAM setup, and Mode 7 conversion.

### The Standalone Mode 7 Map Editor
`mapedit.asm` is the most self-contained editor in the archive, and it is much richer than its plain filename suggests.

Its setup path shows a full in-engine workflow:

* choose the current course with `Set_map_number`
* copy the source map into RAM with `Set_ROM_to_buffer`
* populate BG item data with `Set_BG_item`
* convert screen/text data with `Convert_m1m7`
* upload `mode7_char`, `mode7_screen`, and `mode7_char2` blocks into VRAM
* initialize the Mode 7 view with `Init_mode7`
* enter a main loop that alternates between `point_edit` and `save_load`

The hardcoded DMA blocks are especially interesting because they show exactly how the editor expected its working data to be laid out:

Block | Destination | Source | Size
---|---|---|---: 
`mode7_char` | VRAM `0000h` via `1900h` | `7f4000h` | `4000h`
`mode7_screen` | VRAM `0000h` via `1800h` | `7f0000h` | `4000h`
`mode7_char2` | VRAM `3400h` via `1900h` | `7fc400h` | `0400h`

That is excellent preservation evidence because it turns the editor from an abstraction into a real memory map.

The two-process split is just as useful:

* `point_edit` handles cursor movement, address calculation, zoom, and direct editing of map points
* `save_load` handles backup and restore using a `backup_point` area at `085c800h`

So even at this level, the editor was already built around reversible editing rather than "type once and hope for the best".

### The Two Main Editor Shells
`edit_1.asm` and `edit_2.asm` are small compared to the heavier files, but they explain how the toolchain was assembled.

`edit_1.asm` looks like the front end for the first editor family.
Its main loop switches between three edit modes:

* `AREA_DEIT`
* `CODE_EDIT`
* `POINT_EDIT`

From there it chains into shared worker routines like `AREA_SET`, `NUM_SET`, `POINT_SET`, `S.LMODE_SET`, `SAVE_SET`, `LOAD_SET`, and `CLEAR_SET`.

`edit_2.asm` plays the same role for the second editor family.
It wires together:

* object or "yakumono" placement routines like `YAKDAT_SET1`, `YAKUSCT_SET1`, and `YAKIDSP_SET1`
* direction handling with `HOUKOU_SET1`
* save/load and disk hooks through `FILE_SET2`, `DISK_LOAD`, and `DISK_SAVE`

That makes the structure much easier to understand:
the small `edit_*` files are menu shells, while the much larger `runed*` and `maped*` files carry the real editing behavior.

### What runed.asm and runed1.asm Are Doing
`runed.asm` and `runed1.asm` are where the first editor family becomes much more concrete.

`runed.asm` exports the first-wave setup and editing routines used by `edit_1.asm`.
Its symbol list shows the main concerns very clearly:

* initialization and buffer setup
* position and area editing
* save/load mode switching
* menu flow
* actual disk save and load calls

The file also contains explicit `SAVE LOAD MODE SET` comments and direct calls to `SAVE_FILE1` and `LOAD_FILE1`.
That means the editor was not only modifying data in RAM.
It was designed to write changes back out through the SFX-DOS layer.

`runed1.asm` then goes deeper into specialized editing operations.
The comments preserved in the file are unusually useful, because they show the kinds of content Nintendo expected to edit without opening a different program:

* `BG1,2 SAVE LOAD SET`
* `BG1 LOAD SET`
* `SPEED LOAD SET`
* `BG2 LOAD SET`
* multiple shape-placement helpers like square, triangle, and parallelogram load routines

That tells us the editor was not only for placing single points or objects.
It also had higher-level terrain and background editing tools, including shape-based fill or placement helpers.

### What runed2.asm and the maped Files Add
If `runed.asm` and `runed1.asm` are the first editor family, `runed2.asm`, `maped3.asm`, and `maped4.asm` look like the heavier support side for the second one.

`runed2.asm` exports low-level interaction routines like:

* `POINT_SET`
* `ERASE_SET`
* `POSI_MOVE1`
* `POSDSP_SET1`
* `SPEED_SET`

That makes it feel like the moment-to-moment editing layer: move the cursor, place data, erase data, update the display, and change parameters like speed.

`maped3.asm` is much more presentation-heavy.
It builds a large HDMA-driven editor display, exports `NMI_SET1`, and holds a long run of higher-level editor helpers like `SAVE_SET1`, `MENU_SET1`, `LOAD_SET1`, `CLEAR_SET1`, and `DAT_SET`.

The most interesting part is how visual it is.
It sets up multiple HDMA streams, dynamic VRAM writes, and color-window effects just for the editor UI.
That suggests Nintendo wanted the content tools to be comfortably usable on real hardware, not just technically functional.

`maped4.asm` complements that with the disk-facing and battle-facing side.
Its symbol list and comments make three things stand out:

* explicit `DISK SAVE` and `DISK LOAD` routines
* explicit `BATTLE_LOAD`, `BATTLE_SAVE`, and `BATTLE_ERASE`
* a `DSFN_SET2` file-name display helper that writes selected disk filenames into OAM-backed UI text

That is one of the best low-level clues in the whole editor stack.
Battle content was not just another map.
It had its own save/load path and its own dedicated editor support.

#### The Separate Battle-Map Path in maped4.asm
`maped4.asm` is where the battle editor stops looking like a small variation on the normal course tools and starts looking like its own workflow.

The first clue is that the file carries two overlapping save/load systems.
The generic `DISK_SAVE` and `DISK_LOAD` paths still exist, but both immediately branch into battle-specific handlers when `map_number` is `14h`.
That means the battle map was already being treated as a special case at the top level, not only later when data got written out.

The normal path looks like this:

* editing data lives in `7f8000h`
* `DISK_SAVE` serializes that RAM into a `1c00h` block and hands it to `SAVE_FILE2`
* `DISK_LOAD` calls `LOAD_FILE2`, rebuilds the editor's working buffers, and then redraws VRAM with `DAT_SET`

The battle path is different almost all the way through:

* placed battle objects are tracked in a separate work area at `7f8200h`
* battle saves are staged through `7f9300h`, not the normal `1c00h` block
* `BATTLE_SDISK` and `BATTLE_LDISK` bypass the generic helper wrappers and set up the `cop 16h` and `cop 15h` file calls directly

That split is exactly the sort of low-level detail that makes this leak so useful.
The battle maps were not being stored as a trivial variant of normal track data.
They had their own object list, their own staging buffer, and their own disk transfer path.

#### How Battle Placement and Erase Work
The live editing routines in `maped4.asm` are just as revealing as the save/load code.

`BTTLE_SET` is the core placement routine.
It builds battle-object patterns from `yakidat`, derives width and length values from `PTADAT`, and has a special water placement path through `Water_Set11` and `Water_Set1`.

The important part is what happens after the visual placement work.
When the editor is not in save/load mode, `BTTLE_SET` records the placed battle object into `7f8200h`.
So the battle editor is maintaining its own persistent object list in RAM, rather than treating VRAM as the only source of truth.

`BATTLE_ERASE` confirms the same design from the opposite direction.
It searches that `7f8200h` list by `bgadd`, clears matching entries, updates `erasedat` and `eraseflg`, and recalculates the object dimensions through `witcnt` and `lthcnt`.

That is a stronger implementation than a simple tile paint tool.
The editor was tracking discrete battle objects with metadata, placement state, and erase logic, not just rewriting background cells.

#### What the Battle Save Format Appears to Preserve
The internal battle save/load pair is one of the clearest clues about the actual data flow.

`BATTLE_SAVE` walks the battle object list in `7f8200h` and serializes it into bank `11h`, starting at `11:8200`.
`BATTLE_LOAD` does the reverse: it clears VRAM and the live object list, rebuilds the placement data from that serialized block, then replays `BTTLE_SET` to redraw the resulting objects.

That replay step matters.
The battle editor was not only restoring a raw tilemap dump.
It was restoring a structured object list and then regenerating the visible map state from it.

The disk-facing battle path uses a second stage:

* `BATTLE_SDISK` copies battle data into `7f:9300`
* it then sets filename, address, and count fields manually before calling `cop 16h`
* the count is `0c00h`, which is much smaller and more fixed than the generic course-editor save path

`BATTLE_LDISK` mirrors that process on load.
It pulls the stored block back into `7f:9300` with `cop 15h`, rebuilds the `7f8200h` object list, then redraws the editor state by calling `BTTLE_SET` again.

So the battle workflow seems to have three layers:

* a live placement list in `7f8200h`
* a serialized in-memory form around `11:8200`
* a disk transfer buffer at `7f:9300`

That is far more elaborate than "save the current map."
It looks like a deliberately separate battle-object pipeline living alongside the normal course tools.

#### Checksum and Validation Clues
`maped4.asm` also preserves a small but important validation routine in `SUM_CHECK2`.

That routine computes a checksum over `701000h` and `702000h`, then compares the result against `700ffeh`.
In context, it looks like editor-side RAM validation for the loaded battle or map work area, probably to catch corrupted or mismatched buffers before the rest of the tool tries to rebuild display data from them.

Even that tiny detail is useful.
It shows the editor was robust enough to expect failure cases, not just a one-shot internal script that assumed every load would always succeed.

### The Data Files Behind the Editors
The editors are backed by two compact but revealing data modules.

`edit_data.asm` is the small shared data pack used by `edit_3.asm`.
It contains:

* `select_data`
* `title_data`
* `sound_data`
* conversion helpers like `conv_data0`
* `set_m7scr` screen-layout data

That is what makes the debug hub able to present multiple test modes cleanly instead of just dumping raw graphics.

`edmap2.asm` is even more obviously UI-facing.
It contains:

* `OAM2` and `MSB2` sprite/OAM layouts for editor text and cursors
* multiple HDMA tables
* `YAKI_NO` pattern tables for placeable object sets
* `SELECTDAT1`, `SELECTDAT2`, and `MENUDAT1` text data
* `save_numb2` tables for save slots or save areas
* `disk_file2` and `file_number2` support data for the file selectors

The object pattern tables are a particularly nice detail.
They include groups for things like question blocks, smiley or face-style tiles, arrows, walls, oil, jumps, and multiple coin frames.

So the editor was not only moving abstract data around.
It had a real in-engine palette of placeable course objects.

### How the Disk Bridge Fits In
The last important layer is `ed_dos1.asm` and `ed_dos2.asm`.

These files show how the editors talked to the DOS support layer without every editor file needing to know the hardware details directly.

`ed_dos1.asm` handles one family of editor files:

* `FILE_SET1` cycles through save slots or file entries
* `SAVE_FILE1` builds a filename, sets address/count fields, and triggers `cop 16h`
* `LOAD_FILE1` does the same for `cop 15h`

`ed_dos2.asm` does the same for the second editor family, but also preserves:

* `INIDOS_SET`, which selects drive and media mode
* `POINT_SET8`, which copies stack or work pointers between RAM areas
* `DOS_INI` and `DOS_INI_1`, which are mostly commented out here but still show how the editor originally expected to enter the SFX-DOS environment

The two bridge files are also a good reminder that the editors were not all saving the same kind of payload.
They are preparing different address and size fields before they ever reach the DOS layer:

Editor path | Save area | Transfer size | What it suggests
---|---|---:|---
`SAVE_FILE1` / `LOAD_FILE1` | `0800h` | `0400h` | The first editor family writes a larger structured block
`SAVE_FILE2` / `LOAD_FILE2` | `1c00h` | `0080h` | The second editor family writes a much smaller compact object/map buffer
`BATTLE_SDISK` / `BATTLE_LDISK` | `7f:9300` | `0c00h` | Battle editing bypasses the generic wrappers and stages its own larger transfer

That is useful because it clarifies the architectural boundary.
The main editor code manipulated map, object, and UI state.
The `ed_dos*` bridge files then translated those requests into the `cop`-based save/load calls used by Nintendo's SFX-DOS layer, with different transfer layouts for different kinds of editor data.

Together these editor files make one larger point very clearly:
Super Mario Kart was not just developed by editing source and rebuilding the game.
Nintendo also had a substantial hardware-facing editor environment for placing objects, shaping course data, previewing Mode 7 output, and saving work back out through floppy-backed dev tools.

---
### SFX-DOS Layer
The older 1991 files reveal another part of the setup: a disk and I/O support layer for Super Famicom development hardware.

`sfxdos.asm` describes itself as a `Super Famicom Disk Operation System special version`, written by **Y. Nishida** on **29 October 1991**.
Together with `fileio.asm`, `fdcdrv.asm`, `sccdrv.asm`, `ppidrv.asm`, `condrv.asm`, and `ccp_main.asm`, it preserves a real SNES-side operating layer for floppy access, keyboard and serial input, printer output, file management, and text-console interaction.

That part of the leak is broader than Mario Kart itself, so it now has its own article:

{% include link-to-other-post.html post="/super-famicom-sfx-dos/" description="For a full breakdown of the SFX-DOS stack, the COP API, the file system layer, and the driver hardware, check out this post." %}

For Mario Kart specifically, the important takeaway is simple:

* `ed_dos1.asm` and `ed_dos2.asm` were calling into a real disk operating layer
* the editors were saving named files through a proper file-system API, not a one-off debug stub
* the battle editor's direct `cop 15h` and `cop 16h` path was still sitting on top of the same broader SFX-DOS environment

---
## Compression, Graphics, and Data Formats
Super Mario Kart's Mode 7 pipeline is unusually visible in this archive.

The `ISPK` and `Compress` files are the key.
`ISPK-j.asm` and `ISPK-p.asm` preserve the actual decompression logic for a custom `ISPK` format, with entry points like `Decode_7E_X` and `Decode_7F_X` that stream data from ROM into work RAM.

`Compress.asm` then builds on that.
It exposes routines such as:

* `Decode_M7copy`
* `Decode_M7_BF`
* `Decode_M7_buff`
* `Decode_mode7`

Its comments make the intended pipeline unusually explicit: compressed Mode 7 character data is unpacked into RAM buffers and then transferred onward into VRAM.

That sits neatly beside the location tables in `label.def`.
The file maps out where music, map screens, character graphics, battle graphics, color data, and object graphics live in ROM.
It names concrete resources like:

* `Title_BGM`
* `Battle_BGM`
* `MAP00_SCR` through later course screen entries
* `CIRCUIT_CHR`, `OBAKE_CHR`, `GRASS_CHR`, `CASTLE_CHR`, `ICE_CHR`, `DART_CHR`, `SAND_CHR`, and `STAR_CHR`
* the matching BCH, BSC, and color tables for each course family

That makes `label.def` much more than a generic include.
It is effectively a hand-written ROM content index for the project.

The other extensionless files play a similar role:

File | Role
---|---
`rp5a22` | SNES CPU register definitions
`rp5c77` | SNES PPU register definitions
`D77C25` | DSP command definitions for the math/Mode 7 support hardware
`label` | Older raw register-label include used by the editor-side DOS files
`label_1` | Save/load editor workspace definitions
`label_3` | Larger editor workspace definitions for map/battle editing

### The Runtime Race Pipeline
The main race path in `kart-main.asm` is worth calling out on its own, because it shows how the game's heavy per-frame work is ordered.

In the normal race state, `Playing_process02` runs in a fixed sequence:

* `WINDOW_CONTROL`
* `Set_position`
* `Camera_controlB`
* `OBJ_setB`
* `Official_B`
* `Set_trans_bufferB`
* `Camera_controlA`
* `Set_trans_bufferA`
* `OBJ_setA`
* `Official_A`
* `Race_control`
* `Color_effect`

That is not a random collection of calls.
It reveals a two-screen or two-pass mental model where camera, object setup, and transfer preparation are handled separately for A and B contexts before the race simulation finalizes world state.

Then the NMI side finishes the transport work.
`NMI_process02` performs the VBlank-safe half of the pipeline:

* `OBJ_transport`
* `BG_transport`
* `Race_checker`
* `Set_HDMA_parameter`
* `Screen_control`
* `Demo_camera`
* common sound and controller work through `NMI_package`

That split is one of the best low-level architecture details in the whole archive.
The race engine is not only "gameplay code plus rendering."
It is a carefully staged pipeline:

* main-thread logic prepares positions, camera data, object state, and transfer buffers
* the NMI thread performs the actual VRAM/OAM/background transport and final display setup

The battle loop mirrors that shape rather than inventing a separate engine architecture.
It swaps in `Battle_objsetA`, `Battle_objsetB`, and `Battle_control`, but the overall ordering stays recognizably the same.

That makes the codebase feel much more like one shared runtime with different mode-specific control modules than a set of unrelated mini-engines.

---
## Audio System and BGM Control
The audio side is much richer than a simple "write song IDs to the SPC" setup.

`kart-apu.asm` shows three different layers working together:

Layer | Main routines | Role
---|---|---
High-level music control | `BGM_control`, `Set_race_BGM`, `Set_battle_BGM`, `Call_bgm`, `Call_fanfare` | Choose themes, handle fanfares, final-lap changes, and queue music transitions
Frame-to-frame sound dispatch | `Sound_set`, `Sound_set_trigger`, `Check_trigger_SE` | Feed the current sound command registers and queued effects to the APU
Driving and event logic | `Engine_sound`, `Count_down_sound`, `Goal_in_sound`, `Start_ultra_BGM`, `End_ultra_BGM` | Turn race state into engine pitch, countdown behavior, and event-driven music changes

### Music Is Queued, Not Swapped Instantly
One of the most useful details in `kart-apu.asm` is that BGM requests are buffered.

`Call_bgm` does not immediately rewrite the active music.
It pushes a value into `bgm_buffer` and increments `bgm_pointer`.

Later, `Sound_set` checks `bgm_pointer`, `trigger_pointer`, and `se_pointer` in order, and only then writes the chosen command into the APU-facing sound registers.

That means the audio system is explicitly queue-driven.
Multiple pieces of logic can request music or sound changes, and the dispatcher drains those requests in a controlled order during the sound update path.

That is a much cleaner design than every gameplay routine poking the SPC ports directly.

### The BGM Theme Selection Is Data-Driven Too
`Set_race_BGM` and `Set_battle_BGM` reinforce the same theme we saw in the course loader.
The game does not hardcode one song per map in scattered logic.

Instead:

* `Set_battle_BGM` always selects the battle theme path
* `Set_race_BGM` uses `map_type` to pick an entry from a `BGM_data` table
* `BGM_transport` then decodes the corresponding music data into RAM and boots the APU with it

That ties neatly back into `label.def`, where the actual song data addresses are named explicitly:

* `Title_BGM`
* `Battle_BGM`
* `Circuit_BGM`
* `Ice_BGM`
* `Grass_BGM`
* `Obake_BGM`
* `Sand_BGM`
* `Castle_BGM`
* `Dart_BGM`
* `Ending_BGM`

So the audio side follows the same pattern as the graphics side:
gameplay code selects a theme category, and the actual data addresses live in tables and labels.

### The Race-State Audio Logic Is Surprisingly Dynamic
`BGM_control` is where the race audio gets much more interesting.
It is not only checking "are we racing?"
It is watching multiple gameplay-driven counters and using them to trigger music changes:

* `signal_counter` controls the delayed handoff from the start countdown into the main race BGM
* `finallap_counter` controls the switch into the final-lap music
* `fanfare_counter` controls how long win or loss fanfares suppress the normal track themes
* `ultra_index` controls a separate special-music path that can start and stop around ultra or star-style states

That is a strong preservation detail because it shows how much music state the game was tracking in real time.
The BGM was not static background decoration.
It was reacting to countdowns, race milestones, placement results, and special gameplay states.

### Sound Effects Are Buffered With Pan Data
The sound-effect side is just as revealing.

`Trigger_sound_1` and `Trigger_sound_2` do not write one effect directly to the sound port and return.
They push effect IDs into `se_buffer` and matching pan values into `pan_buffer`, then advance `se_pointer`.

Later, `Sound_set` drains that queue and uses the pan value to decide how to write the stereo side bit into `Sound2`.

That means the effect system was designed around:

* a small queued list of pending sound effects
* per-effect pan metadata
* mode-aware filtering so effects are not triggered for inactive or already-finished karts

Even the helper list is revealing.
Named entry points such as `Coin_sound`, `Jump_sound`, `Spin_jump_sound`, `Landing_sound`, `Dash_sound`, `Crash_sound`, `Falling_sound`, `Splash_sound`, `Balloon_sound`, `Lost_sound`, `Kame_sound`, and `Cursor_sound` all exist as stable API hooks, even though the real queue work happens later.

### Engine Sound Is Part of the Driving Model
The engine code is also much more tightly coupled to gameplay than the filename alone suggests.

`Count_down_engine` and `Check_countdown_engine` read:

* player input
* `game_status`
* `rank_number`
* `engine_power`
* `kart_status`
* `special_trigger`

That lets the code detect wheelspin and super-start windows before the race even begins.
Then the normal `Engine_sound` path chooses different handlers depending on `game_mode`, so one- and two-player states can mix engine and doppler behavior differently.

That is a nice low-level reminder that the audio layer was not bolted on afterward.
It was sharing real state with the kart-control model and reacting to it every frame.

### kart-calc.asm Is the Movement Math Layer
One of the last big missing pieces is `kart-calc.asm`.
It sits underneath a lot of the files already discussed and acts as the shared math and decision layer for movement, targeting, ranking, and race progression.

The two most important exports are:

* `Calc_move_direction`
* `Calc_target`

Those are the routines other modules keep leaning on whenever they need a direction or angle from one point to another.
The file also imports lookup data like `Sec_data` and `Tan_data`, which makes it clear that a lot of the steering and camera math is table-driven rather than done with slow generic arithmetic each frame.

That matters because it gives the rest of the codebase a common geometry language.
`kart-enemy.asm`, `kart-effect.asm`, and the camera-side code are not all reinventing their own target-angle logic.
They are routing through the same shared calculation layer.

The rest of the file reinforces that role.
Alongside the geometry helpers it also carries:

* `Calc_timer`
* `Game_control`
* `Race_checker`
* `Goalin_control`
* `All_check_rank`
* `Check_crash_mykart`
* `Check_crash_enemy`

So `kart-calc.asm` is not only "the math file."
It is also one of the main places where geometric state gets turned into race-state decisions.

### Calc_target Helps Tie the Whole Game Together
`Calc_target` is particularly useful because it shows up all over the project.

It is used for:

* AI target steering in `kart-enemy.asm`
* target and vector work in `kart-calc.asm` itself
* effect-side steering correction in `kart-effect.asm`
* camera and background helpers elsewhere in the runtime

That makes it a good example of how shared the low-level movement model really was.
The game does not have one aiming system for enemies, another for drift correction, and another for camera turns.
It has one core target-angle routine, then a number of systems interpreting that result in their own way.

The same is true of `Calc_move_direction`.
That routine appears to convert vector or target deltas into the discrete direction format used by kart and body state, which helps explain why so many files can exchange values like `mark_direction`, `move_direction`, `body_direction`, and `kart_direction` without needing expensive conversion code everywhere.

### kart-effect.asm Is the Runtime State-Machine Layer
If `kart-calc.asm` provides the math, `kart-effect.asm` provides a lot of the live state-machine glue for driving effects and moment-to-moment reactions.

Its exports tell the story immediately:

* `Tire_effect`
* `Color_effect`
* `Check_engine_status`
* `Event_control`
* `Camera_spin`
* `Spin_jump`
* `Spin_crash`
* `Fade_control`
* `Engine_power_control`

That is not a single-purpose effects module.
It is a broad "what should happen to the kart and camera right now?" layer.

The file is especially useful because it preserves how Nintendo grouped these behaviors together:

* engine-power and wheelspin handling
* fade and display transitions
* jump, fall, and out-of-bounds event states
* drift-state updates
* spin and crash reactions
* camera-side spin and drift behavior

So while `kart-drive.asm` owns the top-level race flow, `kart-effect.asm` is where a lot of the local state transitions actually get expressed.

### Drift, Spin, and Ultra States Are Real State Machines
The drift and spin code is one of the nicest remaining low-level details in the archive.

This is not a one-bit "is drifting" flag.
`kart-effect.asm` carries multiple fields like:

* `drift_index`
* `drift_angle`
* `drift_pose`
* `vector_velocity`
* `camera_drift`

and uses them to step through different handling states over time.

That is why the file exports separate routines like `Spin_jump`, `Spin_crash`, and `Spin_crash_sub` rather than one general "spin" helper.
The game is keeping track of distinct movement phases and using those to decide:

* how the body should rotate
* how quickly velocity should decay
* how the camera should react
* when to hand control back to the normal drive path

The same idea shows up in the ultra and engine-status handling.
`Check_engine_status` and `Engine_power_control` tie wheelspin, braking, drift resistance, and engine power together instead of treating them as unrelated effects.

So the "feel" of Mario Kart is not hidden in one giant physics routine.
A lot of it lives in these smaller state-machine transitions layered on top of the shared movement math.

### Event_control Shows How Surface and Hazard States Are Unified
One especially helpful part of `kart-effect.asm` is `Event_control`.
Its dispatch table groups several otherwise separate-looking situations into one unified event-state system:

* normal
* jump
* falling ghost-house pit
* falling lava
* falling water
* out of bounds
* forced movement
* kart lift down

That is important because it clarifies the relationship between collision and movement.
`BGcheck-p.asm` can decide that a kart has hit a wall or gone out of bounds, but `kart-effect.asm` is where those conditions become timed movement states with gravity, landing behavior, and control recovery.

So the overall runtime model looks more coherent after reading these two files together:

* `kart-enemy.asm` and the drive tables choose where things want to go
* `kart-calc.asm` provides the geometry, direction, and race-state calculations
* `kart-effect.asm` turns special situations like drift, spin, jump, crash, and fall into explicit state transitions
* `kart-drive.asm` keeps the wider race flow moving around them

That makes the remaining gameplay code feel much less fragmented.
The separate files are not isolated tricks.
They are specialized layers built around one shared movement and state model.

---
## Course Logic, AI, and Battle Rules
At this point the source starts to show not just how Super Mario Kart was built, but how the actual game rules were encoded.

The most revealing files here are:

* `kart-enemy.asm`
* `kart-drive.asm`
* `BGcheck-p.asm`
* `Item.asm`
* `Battle.asm`

Taken together, they show a surprisingly data-driven runtime.
Tracks are broken into area and target tables, AI karts read those tables through shared buffers, collision pushes back through a surface-status layer, and battle mode adds a separate HP and object-state system on top.

### The Course Logic Uses Area and Target Tables
`label.def` already hints that the course logic hangs off `Drive_data_address`, but `kart-enemy.asm` makes that concrete.

`Initial_enemy` opens two kinds of per-course data:

* area data through `Area_address_ROM` or `Area_address_SRAM`
* target data through `Target_address_ROM` or `Target_address_SRAM`

That split matters.
The course is not treated as one flat AI blob.
It is divided into:

* an area grid that gets unpacked into `area_buffer`
* a target list that gets unpacked into `target_bufferX`, `target_bufferY`, and `target_status`

The area stream is code-based and terminated by `FFh`, while the target stream is read as repeating position and status entries.
After loading, the code even appends the first target to the end of the buffer so the path can wrap cleanly.

That is a very strong clue about the runtime model:
the AI is not following a hand-authored spline in code.
It is moving from target to target across a course map that has already been partitioned into logical areas.

The goal line is layered on top of the same system.
For race maps below `14h`, `Initial_enemy` also opens `Goal_data`, finds the matching area rows, and marks those cells with a dedicated goal-box bit inside `area_buffer`.
Battle maps skip that path entirely.

That means race and battle are already diverging at the data-layout level, not only in higher-level gameplay code.

### AI Steering Is Driven by Target Buffers and Rank State
The enemy-control module is more sophisticated than a simple "rubber band" routine.

Its update path is split into three passes:

Pass | Routine | What it appears to do
---|---|---
Pass 1 | `Enemy_control_100` | Run event logic, update direction, and set velocity
Pass 2 | `Enemy_control_200` | Choose steering and control behavior from the current move state
Pass 3 | `Enemy_control_300` | Recompute the current drive status for tactical decisions

`Check_target_direction` is the key bridge between course data and steering.
In normal driving it can use the precomputed `drive_direction` table directly from the current area cell.
In special states such as jumps or irregular positions, it switches to the explicit target coordinates in `target_bufferX` and `target_bufferY` and recomputes the heading through `Calc_target`.

That is a smart hybrid design:

* cheap area-based direction lookup in the normal case
* more exact target-based direction when the kart is off the usual path

The tactical layer sits on top of that.
`Check_drive_status` does not just ask whether a kart is moving.
It looks at:

* current rank
* whether the kart is first or last
* whether a player is immediately ahead or behind
* special states like ultra or thunder/chibi status
* current lap state and nearby enemy or player spacing

From there it returns different drive states such as:

* normal
* waiting
* ultra-style catch-up
* special boosted or constrained movement

That is one of the most interesting low-level findings in the whole archive.
The AI is not only "follow the path faster or slower."
It is path-following layered with rank-aware tactical behavior.

### Battle Maps Reuse the Path System Selectively
The battle data in `label.def` turns out to be revealing here too.

Not every battle map has its own unique area and target tables:

* `MAP14`, `MAP15`, `MAP17`, and `MAP18` share the same area and target base
* `MAP16` keeps its own distinct pair

That suggests the battle layouts were not all authored with the same level of unique drive-data support as the normal race tracks.
Some are clearly sharing a common base path or logic grid, even while their visual presentation differs.

That is a nice example of the same asset-reuse mindset showing up in gameplay data, not just graphics.

### Collision Is a Surface-State System, Not Just a Wall Check
The surviving source for the collision side is the PAL branch file `BGcheck-p.asm`, but it is enough to show the general design clearly.

The important routines are:

* `BGcheck_kart`
* `BGcheck_item`
* `check_BG`

`check_entry` turns the current position into a lookup inside `BGcheck_buffer`, then uses the resulting tile or surface code to index `BGstatus_buffer`.
That means the collision layer is working from a decoded background-status map rather than from raw graphics.

The consequences are more nuanced than a simple solid or non-solid test:

* if an object is out of bounds, it gets an `area_out` flag
* if the current surface is marked as a mirror or crash surface, the code pushes into `BG_mirror`
* control can be temporarily disabled through `_flag`, `_hit_timer`, and `_unable_control`
* post-impact handling changes horizontal and vertical velocity instead of only stopping the kart dead

The velocity-damping logic is especially revealing.
`speed_chenge` distinguishes between:

* low-speed bumps
* normal crashes
* shell or projectile-style impacts
* high-speed dash impacts

and scales the rebound differently depending on crash side and current speed.

So this is not just "did I hit a wall."
It is a compact terrain and crash-response system with out-of-bounds handling, control lockout, and different bounce strengths for different situations.

### Items Are Also Rank- and Target-Aware
`Item.asm` shows the same design philosophy again.
Items are not only random pickups with a single shared probability table.

The enemy-fire path uses:

* `rank_number`
* current lap state
* forward or backward kart selection
* character-specific `table_select` and `patern_select` tables

to decide whether and what to fire.

That means enemy item behavior is partly character-tuned and partly position-aware.
The source also keeps distinct sound hooks like `sound_kame`, `sound_banana`, and `sound_missile`, which makes the whole item layer feel tightly integrated with both gameplay state and the audio queueing system we already saw in `kart-apu.asm`.

So even the item system is more data-driven than it first appears:

* choose a likely target based on rank and relative position
* consult per-driver probability and pattern tables
* fire an item type through a shared movement and sound path

### Battle Mode Adds HP and Dynamic Arena Objects
`Battle.asm` is smaller than the editor-side battle files, but it still preserves some important gameplay-specific rules.

`Init_BTmode` initializes `battle_HP` for both sides, and `Check_spin` watches effect flags for spin events.
When a spin is confirmed, it walks the battle-object status list, updates HP, and can trigger a balloon-hit sound path through `sound_balloon`.

That is a useful reminder that the battle system was not only "race mode with different maps."
It had its own win-condition layer tracking damage or balloon loss separately from lap progression.

The same file also preserves the question-block animation path:

* `Init_question`
* `DMA_question`

Those routines advance through `Question_buffer`, rewrite character data in `BGcheck_buffer`, and update the live background display through DMA-style screen writes.

That is a nice low-level detail because it shows battle arenas were not static tilemaps.
At least some arena objects were being animated by rewriting their backing background data on the fly.

Taken together, these files make one bigger point very clear:
Super Mario Kart's gameplay logic was highly table-driven underneath the presentation layer.
Tracks were divided into areas and targets, AI steering combined path following with rank-based tactics, collision used a decoded surface-status map, items used character- and rank-aware decision tables, and battle mode layered its own HP and arena-object rules on top.

---
## Backup RAM and Player Records
The record and backup side of the game survives unusually well here.

`Record.asm` and `record-e.asm` are not vague menu helpers.
They operate directly on a `Backup_RAM` area at `700000h`, with `Backup_time` records stored at `Backup_RAM+660H`.

The high-level picture is clearer than it first looks.
Each course gets its own fixed record block, that block is guarded by a checksum, and the game updates best-lap and best-total tables separately.

### The Per-Course Record Layout
The save layout is built around one repeated record structure per course.
`Check_backupRAM` loops over `20` entries, and it computes the per-course address by ORing the course number with `1400h` before multiplying.

That matters because the math lines up with a fixed `20-byte` course record:

* `2` bytes of checksum at the start
* `5` ranked total-time entries at `3` bytes each
* `1` best-lap entry at another `3` bytes

That is exactly `18` data bytes plus the initial checksum word, giving `20` bytes per map.

The internal comparison code makes the layout even more concrete:

Offset | Meaning
---|---
`+00` to `+01` | Per-course checksum
`+02` to `+04` | Fastest total time entry
`+05` to `+07` | Second-place total time entry
`+08` to `+0A` | Third-place total time entry
`+0B` to `+0D` | Fourth-place total time entry
`+0E` to `+10` | Fifth-place total time entry
`+11` to `+13` | Best-lap entry

So the record system is not a general-purpose save blob.
It is a very tight table of per-course time-attack data.

### How Validation and Default Data Work
`Check_backupRAM` is one of the nicest small routines in the whole archive because it shows exactly how Nintendo treated SRAM integrity.

For each course it:

* computes the course record address
* runs `Checksum_map`
* compares the computed checksum against the stored word at the start of the record
* reinitializes the whole course block if the check fails

The checksum itself is simple and very hardware-friendly.
`Checksum_map` just sums the next `18` bytes after the checksum word, then stores the resulting `16-bit` value back at the start of the course block.

The default data is also preserved explicitly.
When a course record is initialized, the code writes a sentinel checksum and then fills every time slot with the same placeholder triplet:

* `99`
* `59`
* `0A`

That gives the game an obviously "bad" default time and lets the later comparison code treat any real finish as an improvement.

### What Gets Packed Into Each Entry
Each saved record entry is only `3` bytes wide, so the game packs multiple meanings into the same fields.

The low-level display and compare code shows this pattern:

* the first `2` bytes store the time value used for ordering
* the low nibble of the third byte stores the remaining small time field used in comparisons
* the high nibble of the third byte stores the driver identity used for the display name lookup

That is why `Disp_best` can decode both the time and the character name from the same tiny record.
It masks the low nibble to decide whether the time is valid, then pulls the upper nibble back out and uses it as an index into the character-name table:

* `mario`
* `luige`
* `kuppa`
* `peach`
* `cong`
* `kame`
* `kinopio`
* `yossy`

So the save data is not only preserving the best times.
It is also preserving who set them.

### Best Lap and Best Total Are Separate Paths
The most interesting design choice in `Save_laptime` is that best-lap and best-total handling are separate, even though both live in the same `20-byte` course block.

The first pass scans the current race's lap times and chooses the fastest lap from the local `_round` buffer.
If that lap beats the stored best-lap entry, the code writes:

* the lap time into `+11`
* the lap number into `best_flag`
* the driver nibble plus the minute nibble into `+13`

That means the best-lap entry is storing more than a time.
It is also encoding which lap number produced the record and which character set it.

The second pass then switches to the total race time and compares it against the five ranked total-time entries.
If the new total qualifies, the code:

* copies the whole existing `20-byte` block into a temporary escape buffer
* finds the insertion point by walking backwards through the stored top-five list
* writes the new `3-byte` record into the correct slot
* shifts the lower-ranked entries down
* recomputes the checksum and stores it back at the start

That insertion logic is one of the nicest low-level details in the whole file.
Super Mario Kart was not just overwriting a single best time.
It was maintaining a real ordered top-five table in SRAM.

### The Export Build Adds an Erase Path
`record-e.asm` also preserves a little extra behavior that the base `Record.asm` file does not expose as clearly.

It exports `Erase_timeRAM`, which:

* computes the current course record address
* checks a flag nibble in the stored data
* either wipes the whole course record back to defaults
* or partially reinitializes the lower ranked entries and then rewrites the checksum

That is a useful regional clue.
The export branch was carrying a more explicit record-erasure path, not just passive validation on boot.

### Where the Record Code Is Used
The save code is not isolated in one forgotten corner of the project.
It is wired into the normal game flow.

`Result.asm` calls `Save_laptime` during the lap-time display path, so the SRAM update happens right where the player sees the finished times.
`kart-init.asm` still has a `Record_initial` entry in its mode setup table, even if the routine itself is tiny here, and `c-select-j.asm` calls the backup checks from the menu side.

That is a good reminder that on older console projects, menu code and result code often had to know quite a lot about persistent save structures.

Taken together, these files show that Super Mario Kart's save system was compact but carefully structured:

* per-course top-five total times
* one separate best-lap record
* per-entry character ownership
* checksum-protected SRAM blocks
* ordered insertion and erase logic rather than simple overwrite behavior

---
## Why This Archive Matters
F-Zero is a beautifully tidy archive.
Super Mario Kart is the opposite, and that is exactly why it is so useful.

This folder preserves the game code, the regional branches, the prebuilt objects, the decompression code, the editor entry points, the backup-RAM logic, and the DOS/dev-hardware support layer in one place.

For anyone trying to understand how official SNES games were actually built at a low level, that combination is the headline detail.
It shows Super Mario Kart not as a single frozen ROM source tree, but as a living workspace where race code, Mode 7 data handling, editor screens, save logic, and development-hardware support all still overlapped.
