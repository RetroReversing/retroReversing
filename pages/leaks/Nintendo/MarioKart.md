---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Super Mario Kart Source Code (Gigaleak)
category: 
- leak
- snes
permalink: /super-mario-kart-source-code
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
  - name: Original Super Mario Kart Source Code
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/MarioKart.md
updatedAt: '2026-03-30'
---

The Nintendo Gigaleak preserves a very substantial Super Mario Kart source archive under `other/SFC/ソースデータ/MarioKart`.

Unlike the F-Zero leak, this is not neatly split into `Game` and `Tools`.
It looks much more like a live working directory copied straight out of development, with assembly source, prebuilt `.rel` objects, regional variants, editor code, backup-RAM routines, and even Super Famicom disk support code all sitting side by side.

{% include link-to-other-post.html post="/gigaleak" description="For more information on the rest of the Gigaleak check out this post." %}
{% include link-to-other-post.html post="/gigaleak-news-04" description="For workstation-side Super Mario Kart art, Mode 7 map tables, and localization assets from Sugiyama's CAR branch, see the NEWS_04 deep-dive." %}

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

---
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
It pulls together:

* race flow
* battle flow
* title handling
* course and kart selection
* record screens
* endings and staff-roll style sequences
* pause handling
* object transport and camera control
* three separate editor entry points

`kart-init.asm` plays the matching role on the transition side.
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
The editors were wired into the same mode-selection and initialization framework as the real game screens, not treated as completely separate tools.

The work RAM definitions in `work.def` make that structure even clearer.
They document shared state for `game_status`, `game_mode`, `game_level`, `game_selecta`, `game_index`, `irq_index`, `world_number`, `map_pointer`, `race_init`, `pause_status`, camera state, fade state, sound state, lap counters, and ranking buffers.

### The Main Loop Is a Small Scheduler
What makes `kart-main.asm` especially useful is that it does not just define one generic update loop.
It preserves the actual scheduler that the rest of the game was written around.

After `Reset_entry` finishes the hardware-side setup, `Main_loop` does three things in a very tight cycle:

* call `Selection_process` to see whether the game is transitioning into a new state
* wait until the next NMI flips `NMI_flag`
* jump through `Process_address` using `game_index`

That says a lot about how the project was organized.
Super Mario Kart was built around a mode dispatcher, with each major screen or tool owning its own main and NMI paths.

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

The editors and record screen were not awkward add-ons.
They were first-class runtime modes with the same scheduling status as race, battle, title, and ending.

### Main and NMI Work Are Split Per Mode
The second useful table in `kart-main.asm` is `NMI_address`.
It mirrors the main-mode structure and gives each major state its own VBlank-side handler.

That split shows how Nintendo kept the heavy per-frame simulation separate from VRAM, OAM, and HDMA work.
For example:

* `NMI_process02` handles the race-side VRAM and OAM transport path, then calls `Race_checker`, `Set_HDMA_parameter`, `Screen_control`, `Demo_camera`, and a common package that handles sound and controller scanning
* `NMI_process04`, `06`, `08`, and `0A` do much lighter menu-style work, mostly `Set_OAM_screen1`, mode-specific NMI code, and the shared input and sound package
* the battle mode mirrors the race structure rather than the menu structure, which makes sense because it still has to move objects, backgrounds, and camera state every frame

The game is effectively written as a pair of dispatch tables:

* one for per-frame logic
* one for VBlank-time transport and rendering setup

Even before looking at the subsystems, the overall design already looks clean and deliberate.

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
The boot path still expected the DOS-side support layer and wider dev environment to exist.

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
That is one of the clearest low-level examples in the leak of how Nintendo separated "what we want to become next" from "what we are running now."

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
The game flow is controlled by lookup tables rather than lots of map-specific branching.

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

### Some Branches Are Near-Clones, Others Still Carry Real Logic Differences
One nice thing about having so many parallel files is that it becomes possible to tell the difference between a true branch and a lightly relabeled copy.

So far, the menu and ending code looks split into two broad groups:

Branch pattern | Examples | What it suggests
---|---|---
Near-structural clones | `title-p.asm`, `Pause-p.asm`, `Final-p.asm` | The branch still exists as its own source file, but the overall logic and state-machine shape remain extremely close to the Japanese or base versions
Behaviorally distinct branches | `w-select-e.asm`, `c-select-p.asm` | The branch still carries front-end logic around unlock state, replay state, backup-RAM state, or screen-specific restore behavior

`title-p.asm` is a good example of the first category.
It keeps the same `Backup_Sam_Check`, `Back_up_clear`, `rom_checker`, and `SET_debug` flow as the Japanese and debug title branches, and it still writes `game_selecta` and `fade_control` in the same broad way.
That makes it feel like a maintained branch, but not a radically different title implementation.

`Pause-p.asm` looks similar.
It still has the same big pause-state structure: `Main_debug`, `RAM_editer_B`, `Save_replay`, `Display_VSnext`, `Display_GPnext`, `Retry_check`, `Change_course`, and `Change_kart` are all still there.
So the PAL pause layer appears to preserve the same "pause as front-end bridge" design rather than introducing a substantially different pause model.

`Final-p.asm` also stays very close to the Japanese ceremony logic.
It still runs `AWARD_SET`, `Rank_Check`, `Message_set`, `Zannen_pose`, `Pukupuku_1` through `Pukupuku_3`, `KUMO_move`, `Paper_fall_set`, and `Final_end_set`, with `Rotate_mode7` still sitting in the exit path.
That suggests the award and celebration flow was stable enough by this point that the branch mainly exists to preserve a separate regional implementation, not to carry a different ending architecture.

`w-select-e.asm` is the file that stands out most strongly in the other direction.
Unlike the simpler world-select path, it keeps `Old_world_number`, updates the old and new cup labels separately in NMI through `MOJI_Set_1`, and pulls in backup-facing routines like `Back_up_set`, `Backup_Sam_Check`, `Back_up_clear`, and `Rank_Check_sum`.
It also checks the stored Mushroom, Flower, and Star Cup completion bytes before allowing Special Cup to remain selected.
That is a real front-end rule difference, not just translated text.

So the regional split in this archive is not uniform.
Some files are effectively parallel maintenance branches, while others still carry genuinely different front-end behavior around save validation, unlock conditions, or menu state restoration.

---
## Title, Menus, and Front-End Flow
The menu-side files are much richer than a simple "press start" layer.
Taken together, `title-j.asm`, `c-select.asm`, `c-select-j.asm`, `w-select.asm`, `k-select.asm`, and `Pause.asm` read like one continuous front-end state machine that can move the player from attract mode into race setup, then back out again through retry, course select, or kart select.

### The Title Code Still Carries Debug Setup
`title-j.asm` does far more than animate the logo and hand off to the next screen.
Its `TITL_init` path calls `PPU_INT_SET`, `Backup_Sam_Check`, `TENSOU_SET`, `PPU_title`, and `OBJ_ERASE`, then explicitly initializes debug-facing variables like `Personal_player` and `Rank_set`.

That becomes much more concrete in `SET_debug`.
That routine draws the current debug values into OAM, lets the player step `Personal_player`, `world_number`, and `Rank_set`, and then copies `Test_rank_data` into the live `point_rank` table.
In other words, the Japanese title branch still preserves a real title-side shortcut for forcing cup and rank state before jumping onward.

The main loop is also broader than a plain menu handler.
`TITL_main` runs `Random`, `KEY_CHECK`, and `FLAG_CHECK`, while the visible menu path itself goes through `WINDOW_SET` and `GAME_SELECT`.
That makes the title file feel less like a self-contained title screen and more like the first front-end controller in the wider runtime scheduler.

### Course Select Is Also Battle Select and Replay Setup
`c-select.asm` is effectively the race-setup router.
Its dispatch tables split the screen into two families:

Mode family | Dispatch entries | What it handles
---|---|---
Race | `select_cup`, `select_course`, `map_read`, `map_yesno` | Cup choice, course choice, and the map-loading confirmation path
Battle | `select_battle`, `battlemap_read` | Battle-map choice and the matching load path

That separation is important because it shows battle mode was not bolted onto the side of the race UI.
It had its own selection flow, its own `map_battle` table, and its own branch through the same front-end infrastructure.

`c-select-j.asm` then makes the picture even more interesting.
Its init path does `Check_backupRAM`, `Check_replay`, `WINDOW_INIT`, `WINDOW_CONTROL`, `Init_meter`, and `DMA_meter`, and it also carries `Erase_timeRAM`, `world_lock`, and `keySRAM_world` / `keySRAM_map` handling.
So the Japanese course-select code is not only choosing the next track.
It is also the point where replay state, key save state, and backup-RAM checks are brought back into sync before the race starts.

### World Select Is a Cup Screen with Trophies and Rule Gating
`w-select.asm` is really the cup-select screen, not just a tiny intermediary menu.
Its init path builds the whole scene through `WORLD_PPU` and `WORLD_TENSOU`, then writes cup labels, trophy sprites, frame graphics, and colors directly into the menu buffers.

Several details stand out:

* `WORLD_TENSOU` converts the source art into the screen format the menu needs rather than just pointing at a prebuilt tilemap
* the screen writes trophy markers for Mushroom, Flower, Star, and, when `game_level` allows it, Special Cup
* `Cup_change.set` changes `world_number`, calls `WAKU_change_set`, restores the previous cup color, then applies the new one through `Color_change`
* the Special Cup is gated through `game_level`, so the menu logic itself is enforcing progression rules

The handoff is also very explicit.
`NEXT_SET` clears `race_init`, triggers sound effect `002Eh`, writes `#02` into `game_selecta`, calls `BGM_fade_out`, and sets `fade_control` to `8f00h`.
That is a good low-level example of how menu code and the main runtime scheduler talk to each other: the front end does not launch races directly, it writes the next mode request and the transition parameters, then lets the core loop perform the switch.

### Kart Select Is an Animated State Machine
`k-select.asm` is far more dynamic than a static character grid.
Its main path runs `VS_com_set`, `SELECT_SCROLL`, `Cursor_Move_set`, `Small_kart_set`, `Pikupiku_set`, `CURSOR_FLASH`, `KART_CHECK`, `NEXT_CHECK`, and `OBJ_MOVE` every frame, while the NMI path updates demo kart DMA, cursor erasure, cursor draw, back-screen stop markers, and flashing state.

That gives away a lot about how the screen is built:

* the karts are active object scenes with their own DMA path through `DMA_demokart`
* the cursor system keeps separate address, erase, next, and flash state instead of just redrawing one marker
* `Select_Player` and `Swing_select` tables drive the actual carousel order and swing offsets used by the chosen kart art
* `timeattack_flag` is threaded deeply through the code, affecting one-player versus rival setup and even the second cursor path

`NEXT_CHECK` makes the transition logic especially clear.
Once both `move_flag` values settle and `next_counter` reaches `0040h`, the code commits the selected kart IDs into `driver_number`, optionally mirrors one of them into `timeattack_rival`, then converts the current `game_status` into the next runtime mode.
Grand Prix jumps to `#0008`, while VS, Time Trial, and Battle all route through `#0016`, after which `fade_control` is set to `8f00h`.

So even the "pick a driver" screen is not a dead-end UI.
It is already performing game-state setup, rival assignment, and front-end transition scheduling.

### Pause Is a Front-End Bridge, Not Just an Overlay
`Pause.asm` may be the single clearest proof that Super Mario Kart's menus and race code were designed as one connected system.
`PAUSE_MAIN` branches through `open_select`, `every_select`, and `exit_select`, with separate pause-index families for Grand Prix, VS, Time Trial, and Battle.

During the active pause state, `Every_pause` can do much more than wait for resume input:

* it can enter the RAM editor through `RAM_editer_B`
* it calls `Main_debug`
* it draws either `Display_GPnext` or `Display_VSnext`
* it checks `pause_cursor`, `pause_index`, `replay_flag`, and `ghost_flag`

The exit side is even more revealing.
The retry tables can jump into:

Destination | Routine | What it means
---|---|---
Retry current race or advance | `Retry_check` | Chooses between `RACE_RETRY` and `NEXT_RACE`
Return to title | `Retry_start` | Calls `Start_title`
Return to course select | `Change_course` | Calls `Start_C_select`
Return to kart select | `Change_kart` | Calls `Start_K_select`

That is not just a pause menu.
It is a live branch point back into the rest of the front end.
The same pause layer also saves replay state with `Save_replay`, has special handling for ghost/replay flags, and can redraw the menu differently for VS/TM/BT through `Display_VSnext` versus GP through `Display_GPnext`.

Once that file is read alongside the title and select code, the overall design becomes much clearer.
Super Mario Kart was not built as a hard line between "menus" and "gameplay".
It was built as a shared mode system where title, cup select, kart select, race, battle, retry, and debug all talk to the same scheduler through `game_selecta`, `game_index`, and fade-control state.

### The Attract Demo Is a Real Runtime Scene
`demo-j.asm` is also worth reading as part of the front end, because it shows the attract sequence was not a cheap prerecorded movie.
It is a real gameplay-side scene with its own object setup, transport path, and camera math.

The clearest clues are:

* `Rotate_mode7` talks directly to the DSP triangle routine to build a zoom-and-rotation matrix
* `DMA_demokart` increments `demokart_frame` and then calls the normal object transport path through `OBJ_transport`
* `Set_demokart` clears `trans_counter`, resets `camera_direction`, steps through active objects, and uses `Set_trans_data` when transfer slots are available
* `Init_demokart` mounts `demo_kart` objects through `Mount_A`, initializes their positions and pose values, and then seeds extra coins and shells through `Init_demokame`

That is a great low-level preservation detail.
The title-side demo is not just "watch mode".
It is a miniature runtime environment built out of the same object, sprite, and projection systems as the real race code.

### The Regional Front End Was Still Actively Diverging
The menu files also show that front-end work was still branching late into development.
`title-d.asm` is especially revealing, because it keeps the same `Backup_Sam_Check`, `Back_up_clear`, `rom_checker`, and `SET_debug` structure as `title-j.asm`.
So the title-side debug path was not unique to one isolated Japanese source file.
At least one other branch was still carrying the same skeleton.

`c-select-p.asm` is equally useful because it makes the replay and ghost path very explicit.
It still runs `Check_backupRAM`, clears `replay_flag`, and then calls both `backup_replay` and `check_replay` during init.
Those helpers read `keySRAM_world` and `keySRAM_map`, mark selected entries in the course buffer, and use `ghost_flag` to distinguish backup or replay-driven state from a normal manual selection flow.

That means the front-end branching was not only about translated text or PAL timing.
At least some of the regional menu work was still carrying different save, replay, and debug expectations right inside the selection code.

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

So even at this level, the editor appears to have been built around reversible editing rather than "type once and hope for the best".

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

### What runed2.asm and the 'maped' Files Add
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
It appears to have been restoring a structured object list and then regenerating the visible map state from it.

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

`sfxdos.asm` describes itself as a `Super Famicom Disk Operation System special version`, programmed by **Y. Nishida** on **29 October 1991**.
Together with `fileio.asm`, `fdcdrv.asm`, `sccdrv.asm`, `ppidrv.asm`, `condrv.asm`, and `ccp_main.asm`, it preserves a real SNES-side operating layer for floppy access, keyboard and serial input, printer output, file management, and text-console interaction.

That part of the leak is broader than Mario Kart itself, so it now has its own article:

{% include link-to-other-post.html post="/super-famicom-sfx-dos" description="For a full breakdown of the SFX-DOS stack, the COP API, the file system layer, and the driver hardware, check out this post." %}

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

### The PPU Layer Is a Split-Screen Display Engine
`kart-bg.asm` and `kart-ppu.asm` make the hardware-facing side much clearer.
They show that Super Mario Kart was not only preparing one Mode 7 screen and then throwing sprites on top.
It was actively staging two camera contexts, two OAM states, and a timed IRQ sequence to change how the PPU was configured mid-frame.

The camera side lives in `kart-bg.asm`.
`Camera_controlA` and `Camera_controlB` both flow through `Set_camera_data`, which then calls:

* `Set_camera_position`
* `Set_camera_direction`
* `Pers_parameter`

`Camera_controlB` also calls `Set_double_buffer` first, copying the B-side scroll, center, and background values into a second buffer before the next camera pass runs.
That is a strong clue that the game was preserving multiple camera states at once, not only recalculating one set of Mode 7 registers.

The background register path is equally explicit.
`BG_resister_A` and `BG_resister_B` write:

* `Scroll_0H` and `Scroll_0V`
* `Rotation_X` and `Rotation_Y`
* `Scroll_2H` and `Scroll_2V`
* the extra back-screen values derived from `back_2*` and `back_3*`

That means the race view was combining the Mode 7 road plane with additional scrolling background layers rather than treating the whole scene as one flat transformed bitmap.

The most revealing routine is `Screen_control`.
During VBlank it:

* sets the OBJ bank
* calls `IRQ_control`
* writes `camera_flip` into `Screen_flip`
* pushes `nuki_color` values into the color registers when needed
* applies the A-side background registers
* applies window and color-bias settings through `Set_window_bias`

Then the IRQ path takes over later in the same frame.
`Regular_IRQ` seeds the timer, and the later `IRQ_2` and `IRQ_6` handlers do the really interesting work:

* `IRQ_2` waits for the right beam position, blanks the screen, switches the screen-flip state, writes the B-side background registers, and rebuilds OAM for screen 2
* `IRQ_6` restores the normal PPU control state, resets DMA sync, restores OAM for screen 1, and runs `Color_transport_s`

So the split-screen effect is not a simple static layout.
It is an IRQ-timed display pipeline that changes scroll, window, color, and sprite state while the frame is being drawn.

`kart-ppu.asm` shows the matching sprite and transfer side.
`OBJ_transport` walks `obj_trans_buffer` in 6-byte chunks, each one describing:

* the destination VRAM address
* the source ROM address
* the source bank
* the transfer size

That is then fed straight into DMA channel 0 for VBlank-time uploads.
The paired `Set_trans_bufferA` and `Set_trans_bufferB` routines fill those transfer queues, but they do not try to upload everything every frame.
They rotate through counters, cap the number of entries, and only call `Trans_mark` when there is still room.

That is a lovely low-level detail because it shows Nintendo throttling sprite and kart graphic uploads instead of treating VRAM as infinitely cheap.
Animation and object-character updates were being budgeted across frames.

The same file also keeps two separate OAM staging paths:

* `Set_OAM_screen1`
* `Set_OAM_screen2`

That fits neatly with the IRQ logic in `kart-bg.asm`.
The game was not only maintaining two camera contexts.
It was also maintaining two sprite presentation states and swapping between them as the beam moved down the screen.

Taken together, these files make the graphics side feel much more concrete.
Super Mario Kart's display pipeline was built around:

* camera A and camera B state
* per-frame transfer queues for object graphics
* VBlank DMA into VRAM and OAM
* IRQ-timed mid-frame PPU changes
* split-screen window and color-bias control layered on top of Mode 7

That is one of the clearest places in the whole leak where you can see the difference between "a game uses Mode 7" and "a commercial SNES game has a carefully engineered display pipeline."

### Camera, Projection, and HUD All Live in Separate Layers
The display side becomes even clearer once `Camera.asm`, `Screen.asm`, and `Window.asm` are read alongside the PPU modules.

`Camera.asm` is not the general race camera solver.
It is a smaller control layer for special camera states, and it is explicitly credited to **H. Yajima** in the file header.
Its exported routines are:

* `Init_camera`
* `Ending_camera`
* `Stop_camera`
* `Winner_camera`
* `TV_camera`

That makes the file useful because it shows the camera system had named cinematic or state-specific overrides on top of the normal race camera path.
`Winner_camera`, for example, sets special camera-control bits, tracks a separate `goalin_offset`, and gradually rotates the camera around the winning kart instead of leaving the view locked to the standard chase direction.

`Screen.asm` then shows how world-space objects become on-screen sprite positions.
Its header calls it `XYZ -> HV convert`, and that description is accurate.
The file exports:

* `project`
* `screen_A`
* `screen_B`
* `project_Z`
* `screen_AZ`
* `screen_BZ`
* `dist_project`
* `dist_screen`

The key detail is that this path is DSP-backed.
Both `project` and `dist_project` write position data to `DSP_data`, then the later `screen_A` and `screen_B` routines read the resulting values back and turn them into:

* horizontal screen position
* vertical screen position
* distance values
* culling decisions
* fallback `min_patern` handling when something is too far away or outside the visible range

That means the object layer was not doing all of its projection math in ad hoc per-object code.
It had a dedicated world-to-screen conversion module, again credited to **H. Yajima**, feeding the sprite placement path.

The split-screen logic shows up here too.
`screen_A` and `screen_B` are separate routines, with mirrored handling for upper and lower views.
They even preserve special back-view behavior when the player index indicates rear-view mode, flipping the horizontal placement around `H_center+80h` instead of the normal center.

`Window.asm` fills in the last missing piece: the HUD and rank-window layer.
`WINDOW_INIT` does much more than clear a small buffer.
It:

* decodes rank or number graphics into `deco_rank`
* sets up window, color, and blend registers
* programs DMA channel 7 for HDMA writes into the window registers
* initializes `window_lank` data in WRAM

Then `WINDOW_CONTROL` updates that data live from gameplay state.
It reads `obj_flag` and `rank_number` for the upper and lower players, checks whether each side has reached the goal state, and switches between small and large rank-number layouts by writing different entries into `window_lank`.

That is a great low-level detail because it means the rank display is not only a sprite overlay.
It is tied into the SNES window and color-blend hardware as a separate display layer, with its own WRAM-backed HDMA data stream.

So the display stack now reads very cleanly from top to bottom:

* `Camera.asm` handles special camera-state overrides
* `kart-bg.asm` prepares camera A/B scroll, perspective, IRQ, and window state
* `Screen.asm` projects world-space positions into screen-space coordinates with DSP help
* `kart-ppu.asm` queues and uploads sprite and object graphics
* `Window.asm` drives the rank and goal overlay through HDMA-backed window data

That separation is one of the strongest technical details in the archive.
Nintendo did not hide camera math, projection, sprites, and HUD logic in one giant render routine.
They split them into distinct layers that each map quite neatly onto specific pieces of SNES hardware.

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
`kart-calc.asm` sits underneath a lot of the files already discussed and acts as the shared math and decision layer for movement, targeting, ranking, and race progression.

The two most important exports are:

* `Calc_move_direction`
* `Calc_target`

Those are the routines other modules keep leaning on whenever they need a direction or angle from one point to another.
The file also imports lookup data like `Sec_data` and `Tan_data`, which makes it clear that a lot of the steering and camera math is table-driven rather than done with slow generic arithmetic each frame.

That gives the rest of the codebase a common geometry language.
`kart-enemy.asm`, `kart-effect.asm`, and the camera-side code are all routing through the same shared calculation layer rather than reinventing their own target-angle logic.

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

`Calc_target` is especially revealing because it shows up all over the project.

It is used for:

* AI target steering in `kart-enemy.asm`
* target and vector work in `kart-calc.asm` itself
* effect-side steering correction in `kart-effect.asm`
* camera and background helpers elsewhere in the runtime

It is a good example of how shared the low-level movement model really was.
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

This is not a single-purpose effects module.
It is a broad "what should happen to the kart and camera right now?" layer.

The file is especially useful because it preserves how Nintendo grouped these behaviors together:

* engine-power and wheelspin handling
* fade and display transitions
* jump, fall, and out-of-bounds event states
* drift-state updates
* spin and crash reactions
* camera-side spin and drift behavior

So while `kart-drive.asm` owns the top-level race flow, `kart-effect.asm` is where a lot of the local state transitions actually get expressed.

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
This is where the source stops being mostly about tools and runtime structure and starts to show the actual rule systems underneath the game.

The most revealing files here are `kart-enemy.asm`, `kart-drive.asm`, `BGcheck-p.asm`, `Item.asm`, and `Battle.asm`.
Taken together, they show a surprisingly data-driven runtime: tracks are broken into area and target tables, AI karts read those tables through shared buffers, collision pushes back through a surface-status layer, and battle mode adds a separate HP and object-state system on top.

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

That is a very strong clue about the runtime model.
The AI is not following a hand-authored spline in code.
It is moving from target to target across a course map that has already been partitioned into logical areas.

The goal line is layered on top of the same system.
For race maps below `14h`, `Initial_enemy` also opens `Goal_data`, finds the matching area rows, and marks those cells with a dedicated goal-box bit inside `area_buffer`.
Battle maps skip that path entirely.

That suggests race and battle were already diverging at the data-layout level, not only in higher-level gameplay code.

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

This is one of the most interesting low-level findings in the whole archive.
The AI is not only "follow the path faster or slower."
It is path-following layered with rank-aware tactical behavior.

### Battle Maps Reuse the Path System Selectively
The battle data in `label.def` turns out to be revealing here too.

Not every battle map has its own unique area and target tables:

* `MAP14`, `MAP15`, `MAP17`, and `MAP18` share the same area and target base
* `MAP16` keeps its own distinct pair

That suggests the battle layouts were not all authored with the same level of unique drive-data support as the normal race tracks.
Some are clearly sharing a common base path or logic grid, even while their visual presentation differs.

That looks like the same asset-reuse mindset showing up in gameplay data, not just graphics.

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

Taken together, these files show how table-driven the gameplay layer really was.
Tracks were divided into areas and targets, AI steering combined path following with rank-based tactics, collision used a decoded surface-status map, items used character- and rank-aware decision tables, and battle mode layered its own HP and arena-object rules on top.

---
## Race Completion and Result Flow
The race-end side of Super Mario Kart is almost its own subsystem.
Once you put `Goal.asm`, `Round.asm`, and `Result.asm` together, the finish line stops looking like a single flag flip and starts to look like a layered presentation and state machine.

### Goal.asm Is Tiny, but Result.asm Carries the Real State Machine
`Goal.asm` itself is surprisingly small.
It is basically a thin `In_goal` entry that copies a block of data with `MVN`, then returns.

The real finish logic lives in `Result.asm`.
That file preserves separate goal handlers for:

* Grand Prix win, safe, and loss paths
* Time Trial goal and replay paths
* VS win and loss paths
* Battle win and loss paths

The branching is explicit in the tables.
`goalset_A` and `goalset_B` read the active `goalstate`, then use `rank_jump` to route rank `1` into `winer_demo`, ranks `2` through `4` into `safe_demo`, and ranks `5` through `8` into `lost_demo`.

That is a great example of how structured the finish logic was.
The game was not only checking "did the player finish?"
It was immediately sorting the player into different end-of-race presentation flows based on rank and mode.

### Round.asm Handles the Animated Round Overlay
`Round.asm` is another nice surprise.
It is not a lap-check module at all.
It is the animated `ROUND` overlay system that appears around the start of a race and in demo contexts.

The key state variable is `round_process`, which dispatches through:

* `round_off`
* `round_open`
* `round_disp`
* `sprite_erase`
* `round_close`

`Init_round` builds the tile and OAM data in `round_buffer`, using `data_round_a` and `data_round_b` to lay out the `ROUND` text separately for the upper and lower displays.
Then `Main_round` opens the overlay, holds it on-screen with a timer, erases the sprite side, and finally closes it again.

That means the race lifecycle had its own miniature presentation controller before the player even got to lap timing and end-of-race results.

### Result.asm Bridges Race Logic, Presentation, and Save Data
`Result.asm` is where the finish system becomes much more revealing.
It ties together:

* camera changes through `Stop_camera`, `Winner_camera`, and `TV_camera`
* finish-state flags in `goal_flag` and `result_status`
* result messages and animated text buffers
* lap-time formatting
* the save handoff to `Save_laptime`

The goal text path is especially rich.
`Init_goalin` resets the per-screen message state, `DMA_goalin` pushes character data toward VRAM, and `Disp_goalin` builds the actual finish-time display into the `moji_result` buffers.
That function does not only print a message.
It calls `Disp_laptime`, which in turn calls `Save_laptime`, so the visible result screen and the SRAM update are directly connected.

That makes the race-end pipeline much clearer:

* a kart enters a goal state
* mode- and rank-specific handlers choose the right finish path
* camera and object behavior switch into finish-mode presentation
* lap and total times are formatted into result buffers
* the same handoff also updates the persistent record data

So the result screen is not just a menu layered on top of the race.
It is the point where race logic, save logic, and presentation all meet.

### Final.asm Is the Award Ceremony Controller
The cup-clear ceremony is much richer than a simple victory screen.
`Final-j.asm` reads like a full presentation controller with its own timer, rank gate, camera state, paper effects, cloud motion, and shadow logic.

The key routines make the structure pretty clear:

* `Champgne_timer` acts as the master award timer
* `AWARD_SET` handles the core podium and celebration setup
* `Rank_Check` decides whether the player gets a true award scene or the lower-ranked "too bad" branch
* `Message_set` and `Zannen_pose` handle the lower-ranked outcome
* `Pukupuku_1`, `Pukupuku_2`, and `Pukupuku_3` handle the top-three-specific animation paths
* `KUMO_move`, `Paper_fall_set`, and `Final_end_set` keep the common background presentation moving underneath the rank-specific animation

That is a lot more than a static post-race overlay.
The ceremony is being staged as its own animated scene with separate branches for podium ranks, moving background elements, and a timed handoff into the final exit path.

The NMI side confirms that the scene is doing real display work too.
`Final_nmi` writes `Scroll_X`, `Scroll_Y`, `Center_X`, `Center_Y`, and the live `rotate_A` to `rotate_D` matrix values into the SNES registers, while `Final_end_set` eventually calls `Rotate_mode7`.
So the award ceremony is using the same kind of active Mode 7 camera control we saw elsewhere in the project, not just a flat congratulation screen.

### The Japanese Ending Is Split into Two Distinct Stages
The Japanese ending path is not bundled into one file.
It is split between `Ending1-j.asm` and `Ending2-j.asm`, and those two files appear to handle very different parts of the ending presentation.

`Ending1-j.asm` is the staff-roll choreography layer.
Its two entry points, `Staff_roll_A` and `Staff_roll_B`, pick alternate layouts from `ending_pattern`, then feed into `Staff_roll_set`.
From there the sequence runs through a clear staged controller:

Stage | Main routines | What it appears to do
---|---|---
Initial page setup | `Executive_position_set`, `Name_set` | Lay out the current heading block and matching name rows
Motion phase | `Executive_position_move`, `Name_move` | Slide the current heading and name group into place
Final packed page | `Jump_name_set` | Reconfigure the final page layout before the ending closes
Cleanup | `Erase_Executive_position`, `Erase_name_set` | Remove the current page and advance to the next pattern

That makes the staff roll feel far more authored than a plain text crawl.
The source is positioning, coloring, moving, and erasing credits as grouped OAM data with explicit counters and per-pattern layout rules.

`Ending2-j.asm` then takes over for the actual finale.
Its timer triggers a series of staged events:

* early frames run `Banzai_set_everydody`
* `Set_fall_moji` enables the falling-text phase
* `Set_Wave_play` enables the wave sequence and updates `Banzai_counter`
* the main body keeps calling `Wave_set`, `Noji_Fall_set`, and `Color_change_set`
* the tail ends in `The_End_set`, driven by `Fade_set`, `Fade_counter`, and `Fade_timer`

The setup path in `Tensou_ending2_set` is just as revealing.
It seeds wave acceleration, wave points, landing points, falling-text acceleration, BG3 data, thank-you sprite positions, and the fade controller before the main loop even starts.
So the final scene is another real timed animation layer, not just one still image after the credits finish.

### Scene.asm Shows the Same Presentation Backbone Underneath
`Scene.asm` helps make sense of all of this because it preserves the shared scene/object layer underneath the rest of the game.

At the top of the file, `scene_select` maps every race and battle map to:

* a grid definition like `grid_circuit0` or `grid_battle4`
* a shared `set_kart` mount step
* an environment-specific object pack such as `set_dokan`, `set_bubble`, `set_fish`, `set_poo`, `set_wood`, `set_ball`, or `set_rdossun`

It also keeps `type_data` and `level_data`, then exposes the shared helpers the rest of the project relies on, including `Execute_VRAM`, `Execute_TRANS`, `Set_VRAMextra`, `Buffer_pause`, and `Set_debugmap`.

That matters because the ending and ceremony code are not building an entirely separate renderer.
They are leaning on the same project-wide scene, object-mount, and VRAM transport layer that the race and battle systems already use.

### The Ending Files Preserve Real Regional Deltas
The ending branch layout also reinforces the wider picture of this archive as a live multi-branch project.

The source preserves:

* `Final.asm` with `Final-e.asm`, `Final-j.asm`, and `Final-p.asm`
* `Ending1.asm` with `Ending1-e.asm`, `Ending1-j.asm`, and `Ending1-p.asm`
* `Ending2.asm` with `Ending2-e.asm`, `Ending2-j.asm`, and `Ending2-p.asm`

That is useful in itself.
Nintendo was not only localizing text strings at this point.
It was still carrying separate ending and ceremony code by branch, just as it did for title, cup select, and pause.

---
## Debug Hooks and Standalone Systems
The last group of files worth calling out are the ones that do not fit neatly into the course editor, race loop, or save system sections, but still reveal a lot about how Nintendo actually worked.

### Debug.asm Is a Real-Time Memory Editor
`Debug.asm` and `Debug-d.asm` are much more than tiny leftover cheat hooks.
They preserve a full in-game RAM inspector and editor built around `debug_FLAG`, `debug_address`, `debug_cursor`, and a small meter-buffer display.

The input combinations are unusually explicit.
The file can toggle:

* `ON_goaldebug`
* `ON_usemeter`
* `ON_realtime`
* `ON_debugitem`
* `ON_debugmode`

Once active, the code displays the current bank and address, reads back RAM through the indirect address in `debug_address`, and can write modified values back through paired `debug_load` and `debug_store` handlers.

That is historically useful because it shows Nintendo carrying a real-time memory editor inside the game runtime itself, not only external tooling on the dev hardware side.
The `Debug-d.asm` branch preserves the same structure, which suggests this was not a one-off abandoned experiment.

### System.asm Is Shared Object-Visibility Glue
`System.asm` is not flashy, but it helps explain how the object layer stays under control.
The `check_mode_A` and `check_mode_B` routines gate object display based on:

* player mode
* projected distance
* sprite-count limits
* fallback map-screen behavior

If an object is too far away or the sprite budget is already full, these routines drop it to `min_patern` and route into an erase or return path instead.

That is a very practical low-level detail.
The object system was not only projecting and animating hazards.
It was continuously deciding whether each object was worth drawing at all in the current screen context.

### Lakitu, Missiles, Hazards, and Track Objects Each Have Their Own Logic
The smaller object files are revealing because they show how many gameplay-specific systems Nintendo kept as separate modules rather than folding them into one giant object file.

`Jugem.asm` is the biggest example.
It is effectively Lakitu's whole rescue and race-control layer, with control sequences for:

* start-light behavior
* lap and final-lap signaling
* goal handling
* sea or water recovery
* takeout and comeback behavior
* over-out handling when the kart leaves the valid course space

That is a strong reminder that Lakitu was not just a sprite with a few canned animations.
He was part of the actual race-state machinery, clearing `official_flag`, interacting with camera control, and moving players back into a valid state.

`Missile.asm` is much smaller, but it preserves the projectile-spawn side very cleanly.
`open_shot` uses per-direction `Xoffset` and `Yoffset` tables to place the missile relative to the firing kart, then links it to the current firing register.

`Pole.asm` is really a collection of course-object behaviors rather than only poles.
It includes logic for:

* fish and jumping objects
* Thwomp-style `dossun` behavior
* moving obstacle selection
* poo and flower variants
* ball and wood object display paths

Because it routes those objects through `project`, `project_Z`, `screen_AZ`, `screen_BZ`, `jumpset_A`, and `jumpset_B`, it also acts like a worked example of how the general projection and object-display pipeline was reused for specific hazards.

`Poo.asm` and `Net.asm` round that picture out.
`Poo.asm` handles a dedicated poo status path and links back into the pole-object state, while `Net.asm` appears to manage indexed placement data for net or fence-style course objects using per-screen offsets and object-position setup.

Taken together, these smaller files make one last point clear:
Super Mario Kart's runtime was highly modular.
Lakitu, projectiles, heavy stage hazards, and track-side objects all had their own compact control modules, but they still plugged back into the same shared projection, collision, and display layers described earlier in the page.

---
## Backup RAM and Player Records
The record and backup side of the game survives unusually well here.

`Record.asm` and `record-e.asm` are not vague menu helpers.
They operate directly on a `Backup_RAM` area at `700000h`, with `Backup_time` records stored at `Backup_RAM+660H`.

Each course gets its own fixed record block, that block is guarded by a checksum, and the game updates best-lap and best-total tables separately.

### The Per-Course Record Layout
The save layout is built around one repeated record structure per course.
`Check_backupRAM` loops over `20` entries, and it computes the per-course address by ORing the course number with `1400h` before multiplying.

The address math lines up with a fixed `20-byte` course record:

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

For anyone trying to understand how official SNES games were actually built at a low level, that combination is the key detail.
It shows Super Mario Kart not as a single frozen ROM source tree, but as a living workspace where race code, Mode 7 data handling, editor screens, save logic, and development-hardware support all still overlapped.
