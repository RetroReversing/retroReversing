---
layout: post
tags:
- gameboy
- leak
- sourcecode
title: Gigaleak - Game Boy Color Boot ROM Repository
category: leak
permalink: /game-boy-color-boot-rom-repository
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
  - name: Game Boy Color Boot ROM Repository
    url: #
recommend:
- gameboy
- leak
- gba
editlink: /leaks/Nintendo/GameBoyColorBootRomRepository.md
updatedAt: '2026-03-29'
---

The Nintendo Gigaleak preserves the [CGB](#glossary-cgb) boot ROM material in two useful forms.
Inside `other/agb_bootrom` it survives as a compact [SVN](#glossary-svn) repository, and separately the leak also includes `cgb_bootrom_trunk.zip`, an extracted working tree that exposes the actual [DMG](#glossary-dmg)-format source files directly.

{% include link-to-other-post.html post="/gigaleak" description="For the wider Nintendo Gigaleak overview, including the other major archives, check out this post." %}

Here, `monitor` means a small low-level boot control program, not the handheld's physical screen.
So when this page says `boot monitor binary`, it means a compiled startup/control program that initializes hardware, runs checks, and then hands off to the cartridge code.

---
## At a Glance
The CGB repository preserves:

* a compact [SVN](#glossary-svn) history rather than a single loose boot ROM dump
* two built [boot monitor binaries](#glossary-boot-monitor-binary) at the root
* a tiny [DMG](#glossary-dmg)-era `build` package with plaintext source files
* a batch wrapper that still preserves the old `ISDMG` and `ISLINK` flow
* two dated boot monitor specification documents from 1998

---
## Glossary of Key Terms
If you are new to CGB boot-ROM and toolchain terms, this quick glossary should help:

* <a id="glossary-cgb"></a>**CGB** - Game Boy Color platform terminology.
* <a id="glossary-dmg"></a>**DMG** - Original Game Boy generation and naming used in tools/source formats.
* <a id="glossary-es2"></a>**ES2** - Likely `Engineering Sample 2`, a specific pre-release hardware revision target.
* <a id="glossary-svn"></a>**SVN** - Subversion version-control repository format.
* <a id="glossary-vram"></a>**VRAM** - Video RAM used for tile and background display data.
* <a id="glossary-wram"></a>**WRAM** - Work RAM used for runtime state and scratch memory.
* <a id="glossary-oam"></a>**OAM** - Object Attribute Memory used for sprite attributes.
* <a id="glossary-shift-jis"></a>**Shift-JIS** - Japanese text encoding used in comments/strings.
* <a id="glossary-vblank"></a>**VBlank** - Vertical blank interval used for safe display updates.
* <a id="glossary-sgb"></a>**SGB** - Super Game Boy compatibility path/check logic.
* <a id="glossary-nmi"></a>**NMI** - Non-maskable interrupt path used for timing-critical behavior.
* <a id="glossary-boot-monitor-binary"></a>**Boot monitor binary** - Compiled startup/control program that "monitors" boot-time state (hardware init, cartridge header/checksum validity, mode flags, and palette-selection state) before handing off to game code.

---
## What the Revision History Shows
Its visible revision metadata shows a short one-shot import window rather than a later tool-enrichment phase.

Revision | What it appears to do | Why it matters
---|---|---
`1` | Creates the basic [SVN](#glossary-svn) layout with `trunk`, `branches`, and `tags` | Shows this was preserved as a real repository rather than a loose file dump
`2` | Imports the useful CGB working tree in one pass | Brings in the `.com` outputs, `build` folder, and dated boot monitor spec docs together

Repository | Revisions on disk | Earliest date | Latest date | Visible author
---|---|---|---|---
`cgb_bootrom` | 3 revisions (`0` to `2`) | `24 April 2009` | `24 April 2009` | `nakasima`

Of course 2009 is far too late for the CGB boot ROM to have been developed in this way (The GBA was released in 2001!), so it is likely that this repository was created as a compact backup package rather than a real-time development repository.

---
## Trunk Structure

{% capture cgb_trunk_body %}
The CGB repository contains two built [boot monitor binaries](#glossary-boot-monitor-binary) at the root, a very small `build` folder with [DMG](#glossary-dmg)-format source inputs and a batch script, and two dated documents in `doc`.
{% endcapture %}

{% capture cgb_trunk_items %}
- AgbCgbMn2_1.com - Built AGB/CGB boot monitor output
- CgbEs2Mn.com - Alternate [ES2](#glossary-es2)-targeted boot monitor output
- build - Small DMG-era build package
- build/agb_cgb.dmg - Main assembler input
- build/asmagbcgb.bat - Batch wrapper for the build
- build/cgb_es2.dmg - Alternate ES2 source branch
- build/cgbw6def.dmg - Smaller definitions/configuration source
- doc - Dated CGB notes from 1998
- doc/CGB－CPUモニタープログラム仕様書_980403.doc - Internal spec with filename `980403` and an internal creation date of 26 March 1998
- doc/CGB－CPUモニタープログラム仕様書_980615.doc - Internal document dated 15 June 1998
{% endcapture %}

{% include connected-folder-tree.html folder="trunk" path="cgb_bootrom/trunk" body=cgb_trunk_body version="revision 2 import" content=cgb_trunk_items %}

---
## Build Structure
The repository is compact enough that the whole build package fits into one simple workflow:

```mermaid
flowchart LR
  A["<b>asmagbcgb.bat</b><br>batch wrapper"] --> B["<b>ISDMG AGB_CGB</b><br>assemble main DMG-format source"]
  B --> C["<b>ISLINK @LINKAGCG.LNK</b><br>link boot monitor image"]
  C --> D["<b>AgbCgbMn2_1.com</b><br>AGB/CGB boot monitor output"]
  C --> E["<b>CgbEs2Mn.com</b><br>ES2 boot monitor output"]
```

{% capture cgb_build_body %}
The CGB `build` folder is small enough to read almost as one batch-driven package: one wrapper script, two main [DMG](#glossary-dmg)-format source inputs, and one smaller definitions file.
{% endcapture %}

{% capture cgb_build_items %}
- asmagbcgb.bat - Batch wrapper for the DMG assembler and linker flow
- agb_cgb.dmg - Main assembler input
- cgb_es2.dmg - Alternate ES2 source branch
- cgbw6def.dmg - Smaller definitions/configuration source
{% endcapture %}

{% include connected-folder-tree.html folder="build" path="cgb_bootrom/trunk/build" body=cgb_build_body version="revision 2 import" content=cgb_build_items %}

### The Batch Build Wrapper
`asmagbcgb.bat` is only four lines long:

* `ISDMG AGB_CGB`
* `ISLINK @LINKAGCG.LNK`
* `PAUSE`
* `cvt.bat`

That small script is still very useful because it proves the package was built around one named main source file, one named linker command file, and a final conversion step.

The one obvious missing build artifact is `LINKAGCG.LNK` itself.
It is referenced directly by `asmagbcgb.bat`, but it does not survive in the extracted `cgb_bootrom_trunk` tree or the compact `other/agb_bootrom` repository snapshot.
So the overall build flow is preserved, but the exact linker command file still appears to be absent from the leaked CGB package.

---
## The Source Files
The extracted CGB working tree shows that all three `build` inputs are plaintext source files rather than opaque binary artifacts.

### The Main Boot Monitor Source
`agb_cgb.dmg` is a human-readable assembly source file at `1428` lines.
Its own header names it `monitor`, which is where this page's "boot monitor" terminology comes from.


{% capture agbcgb_code_items %}
- function|||init_rom
- function|||vram_clear
- function|||ram_clear
- function|||cp_hl2de
- function|||vblk_wait
- function|||set_cgb_pltt
- function|||init_sound
- function|||fade_out
- function|||cgb_sub
- function|||maker_check
- function|||select_palette
- function|||cpu_mode_change
- table|||hdma_data
- table|||title_key2pltt
- table|||nin_data
- table|||rdata
- table|||set_ninbg_soft
{% endcapture %}

<div class="rr-code-card-aside" markdown="1">
{% include_cached source-code-card.html title="agb_cgb.dmg" items=agbcgb_code_items functions="12" variables="5" lines="1428" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">
The opening lines place all of the code into the first ROM bank (`BANK0 GROUP 0`), pull in the CGB hardware register definitions from `cgb_reg`, and pull in the shared memory-layout and palette constants from `cgbw6def` (the definitions file covered later on this page).

This is much more than a tiny jump into a final boot image.
The visible labels and data blocks show Nintendo logo and title-screen data, VRAM and OAM clearing paths, sound initialization, title sound timing, palette generation, maker checks, SGB checks, and CPU-mode changes.

The header comments are also especially revealing.
Unlike `cgb_es2.dmg`, this file carries later maintenance notes dated `21 August 1999` and `30 March 2000`, which makes it look like a maintained later branch built on top of the older monitor source.

</div>
</div>

### What the Boot Monitor Actually Does
Reading through `agb_cgb.dmg` makes the overall flow much clearer than the filename alone would suggest.
The monitor is not just a minimal boot shim.
It spends most of its time on a staged logo, title, palette, and handoff sequence.

The top-level flow looks like this:

* set the stack and enter `init_rom`
* clear [VRAM](#glossary-vram), [WRAM](#glossary-wram), and [OAM](#glossary-oam)
* copy and double the Nintendo logo data into character memory
* compare the copied logo against the expected `nin_data` table
* run the header checksum
* switch into the title sequence with sound and palette updates
* detect cartridge metadata and choose a palette group
* switch into either the DMG compatibility path or the cartridge's color-capable mode and hand off to the inserted game

```mermaid
flowchart TD
  A["<b>init_rom</b><br>set stack and initialize registers"] --> B["<b>Clear memory</b><br>VRAM, work RAM, and OAM"]
  B --> C["<b>Expand logo data</b><br>copy and double Nintendo logo tiles"]
  C --> D["<b>Validate cartridge</b><br>compare logo and run header checksum"]
  D --> E["<b>Title sequence</b><br>show logo, sound, and palette updates"]
  E --> F["<b>Select palette</b><br>identify cartridge and choose palette group"]
  F --> G["<b>cpu_mode_change</b><br>switch DMG or CGB mode"]
  G --> H["<b>Game start</b><br>jump to cartridge code at 0100H"]
```

That is a useful distinction for readers expecting the retail CGB boot ROM to be "just the Nintendo logo plus a jump."
The source preserved here is very much a monitor-oriented implementation of that process, with a fair amount of staging, bookkeeping, and palette logic wrapped around it.

### The Compatibility Database
The later half of `agb_cgb.dmg` is especially revealing because it preserves a fairly large built-in compatibility database rather than a single hardcoded palette table.

At the source level, that database breaks down into:

* `SINGLE_SOFT_NUM = 64 + 1`
* `PLURAL_SOFT_NUM = 14`
* `SOFT_SUM_NUM = 93 + 1`
* `soft_check_single` as the main table of one-to-one title checks
* `soft_check_plural` and `soft_check_plural_data` for titles that need one more level of disambiguation
* `pltt_index_group_index` as the bridge from game identity to palette group
* `pltt_index_group` as the grouped `OBJ0`, `OBJ1`, and `BG` palette layout
* `pltt_data` as the actual color words used to build the final CGB palette buffers

That is a lot more structure than a simple "default palette" feature.
It shows Nintendo had turned the boot monitor into a small compatibility database that classifies cartridge headers before handing them off to the later palette-group and color-data stages.

The source comments also make the database much easier to read once the file is decoded as [Shift-JIS](#glossary-shift-jis).
Some of the visible title abbreviations in `soft_check_single` and `soft_check_plural_data` include:

* `役満` (`Yakuman`)
* `テニス` (`Tennis`)
* `テトリス` (`Tetris`)
* `ドクマリ` (`Dr. Mario`)
* `カービィ` (`Kirby`)
* `ゼルタ` (`Zelda`)
* `ドンキー` (`Donkey Kong`)
* `ポケ赤` (`Pokemon Red`)
* `ポケ緑` (`Pokemon Green`)
* `ポケ青` (`Pokemon Blue`)
* `ポケ黄` (`Pokemon Yellow`)
* `KIRBY`
* `CHESS`
* `INVAD`
* `ASTRO`
* `WARI2`
* `SOCCR`
* `PKBOM`
* `G&W` (Game and Watch)

That list is only partial, but it is already enough to show what the table was doing in practice.
This was not a generic "DMG cartridge" palette system.
It was explicitly trying to recognize a long list of Nintendo-published or Nintendo-relevant games and attach a more suitable palette profile to each one.

A few especially recognizable entries line up like this:

Title label | Likely game | Checksum byte | Packed selector | Palette no. | Group type
---|---|---|---|---|---
`役満` | `Yakuman` | `$16` | `0*$20+18` | `18` | `0`
`テニス` | `Tennis` | `$D1` | `5*$20+2` | `2` | `5`
`テトリス` | `Tetris` | `$DB` | `0*$20+7` | `7` | `0`
`ドクマリ` | `Dr. Mario` | `$3C` | `2*$20+11` | `11` | `2`
`カービィ` | `Kirby` | `$5C` | `5*$20+8` | `8` | `5`
`ゼルタ` | `Zelda` | `$70` | `5*$20+17` | `17` | `5`
`ドンキー` | `Donkey Kong` | `$19` | `3*$20+6` | `6` | `3`
`ポケ赤` | `Pokemon Red` | `$14` | `1*$20+16` | `16` | `1`
`ポケ緑` | `Pokemon Green` | `$AA` | `1*$20+28` | `28` | `1`
`ポケ黄` | `Pokemon Yellow` | `$15` | `0*$20+7` | `7` | `0`

The interpretation is straightforward up to that point.
The checksum byte and packed selector are direct evidence from the source.
The later sections on palette groups and `pltt_data` explain what those selectors expand into visually.

The plural tables are just as revealing.
They preserve shorter secondary title fragments such as `ポケ青` (`Pokemon Blue`), `WARI2` (`Wario Land 2`), `SOCCR` (`Soccer`), `PKBOM` (`Pocket Bomberman`), `G&W` (`Game & Watch`), `メトロ2` (`Metroid II`), `TET2` (`Tetris 2`), `TETAT` (`Tetris Attack`), `ドンL` (`Donkey Land`), and `ドンL2` (`Donkey Land 2`).

That makes the lookup logic much easier to interpret.
The monitor was not only matching one checksum to one palette entry.
It also had a second-stage disambiguation path for collisions, where one checksum bucket could be split again by title fragment before the final selector was chosen.

So the compatibility logic looks like a three-step chain:

* check the cartridge header checksum
* fall back to a plural-title disambiguation table when needed
* unpack the final selector into palette number and palette-group type

```mermaid
flowchart LR
  A["<b>Cartridge header</b><br>read title and checksum bytes"] --> B["<b>name_sum</b><br>compute title checksum"]
  B --> C["<b>soft_check_single</b><br>try direct game match"]
  B --> D["<b>soft_check_plural</b><br>enter collision bucket"]
  D --> E["<b>soft_check_plural_data</b><br>disambiguate by title fragment"]
  C --> F["<b>pltt_index_group_index</b><br>packed selector"]
  E --> F
  F --> G["<b>Split selector</b><br>palette no. and group type"]
  G --> H["<b>pltt_index_group</b><br>OBJ0 / OBJ1 / BG group"]
  H --> I["<b>pltt_data</b><br>expand to 15-bit CGB colors"]
  I --> J["<b>Palette upload</b><br>apply final CGB palette buffers"]
```

### The Earlier ES2 Source
`cgb_es2.dmg` is another full plaintext source file at `1423` lines.
Its structure is almost the same, but the header is much simpler and only carries a `21 July 1998` date line.

{% capture cgbes2_code_items %}
- function|||init_rom
- function|||vram_clear
- function|||ram_clear
- function|||cp_hl2de
- function|||vblk_wait
- function|||set_cgb_pltt
- function|||init_sound
- function|||fade_out
- function|||cgb_sub
- function|||maker_check
- function|||select_palette
- function|||cpu_mode_change
- table|||hdma_data
- table|||title_key2pltt
- table|||nin_data
- table|||rdata
- table|||set_ninbg_soft
{% endcapture %}

<div class="rr-code-card-aside" markdown="1">
{% include_cached source-code-card.html title="cgb_es2.dmg" items=cgbes2_code_items functions="12" variables="5" lines="1423" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">

A quick diff between the two sources is revealing.
Most of the monitor is the same, but `agb_cgb.dmg` adds the later maintenance comment block, changes the flow around `init_rom2game`, inserts an extra `inc b` flag-setting step, and swaps one small-logo copy path from `ex_nindata` to `$ff80`.

So the best reading here is not "two totally different monitor programs."
It is "one older ES2-era source snapshot and one later maintained branch built on almost exactly the same codebase."

</div>
</div>

### Title, Logo, and Fade Sequence
One of the most interesting parts of the source is how much work goes into the title presentation itself.
The monitor does not just throw a fixed image at the screen.
It builds the title sequence out of several small helpers:

* `cp_nindata`, `cp_rdata`, and `chr2double` prepare the Nintendo logo and `R` mark character data
* `cp_ninbg`, `cp_cgblogo0_bg`, and `cp_cgblogo1_bg` populate the background tilemaps
* `init_sound` and `on_sound0_title` handle the short title audio path
* `fade_out` and `fade_out_sub` gradually walk the palette data toward white before clearing the title background

That makes the monitor feel much more like a small presentation program than a raw bootstrap.
It has a proper sequence of character conversion, tilemap writes, sound timing, per-frame waits, and palette fading.

The `fade_out` path is especially telling.
It loops for `19*2` steps, repeatedly calling `fade_out_sub`, waiting for [VBlank](#glossary-vblank), and re-uploading the updated title palette.
So even this small monitor source is doing a frame-by-frame effect, not just toggling a few registers once.

### Hardcoded Presentation Data
The title sequence is not only control flow.
It also depends on a small set of fixed data blocks and timing constants that survive directly in the source and definitions file.

Source item | What it appears to hold | Why it matters
---|---|---
`nin_data` | Expected Nintendo logo registration data | Used for the cartridge-logo comparison check
`rdata` | Small `R` mark or related title graphic data | Shows the title display was assembled from more than one graphic block
`hdma_data` | Small transfer setup block | Suggests a dedicated transfer setup for title or palette staging
`TITLE_SOUND_TIMING` | `22` | Controls when the title sound event is triggered
`TITLE_SOUND_COUNT_NUM` | `100 - TITLE_SOUND_TIMING` | Title-sequence sound counter setup
`TITLE_TIME_COUNT_NUM` | `68` | Overall title display timing constant

That is a nice reminder that the monitor is not just "logic plus a jump."
It also bundles fixed logo data, sound timing, and presentation-state constants for how the boot sequence should look and feel.

### The Definitions File
`cgbw6def.dmg` is only `103` lines, but it is a real source dependency rather than a mystery helper file.

{% capture cgbw6def_code_items %}
- constant|||ex_nindata
- constant|||cpu_mode_data
- constant|||cgb_vram
- constant|||cgb_work_ram0
- constant|||cgb_work_ram1
- constant|||oam
- constant|||stack
- constant|||cgb_stack
- global|||name_sum
- global|||sel_pltt_flg
- global|||key_counter
- global|||pltt_grp_type
{% endcapture %}

<div class="rr-code-card-aside" markdown="1">
{% include_cached source-code-card.html title="cgbw6def.dmg" items=cgbw6def_code_items functions="0" variables="12" lines="103" class="rr-file-card-aside" %}
<div class="rr-code-card-aside-content" markdown="1">

The top half defines the monitor's memory layout, including VRAM, work RAM banks, OAM, CPU work RAM, stack positions, and palette-buffer scratch areas.
The lower half defines palette IDs and small state bytes used while the monitor decides how to color the title sequence.

That second half is especially interesting because the palette constants name built-in presets like `CI_ZELDA_OBJ`, `CI_TETRIS`, `CI_METROID_OBJ`, `CI_CAMERA`, `CI_KIRBY_OBJ`, and `CI_GAMEWATCH_GB`.
So `cgbw6def.dmg` is also a compact data dictionary for the Game Boy Color boot monitor's built-in palette-selection system.

</div>
</div>

### The Working Memory Layout
`cgbw6def.dmg` is also the clearest place to see how the monitor expected to use CGB memory while it was running.

Region or buffer | Address | Role in the monitor
---|---|---
`ex_nindata` | `$0104` | Cartridge-side Nintendo logo registration data
`cpu_mode_data` | `$0143` | Cartridge CPU mode byte used during the final handoff
`cgb_vram` | `$8000` | VRAM base used for logo tiles, backgrounds, and palette staging
`cgb_work_ram0` | `$C000` | Main work RAM bank 0
`cgb_work_ram1` | `$D000` | Switchable work RAM bank region
`oam` | `$FE00` | Sprite attribute memory
`cpu_work_ram` | `$FF80` | CPU work RAM
`cpu_work_dma_proc` | `$FFC0` | OAM DMA transfer routine area
`stack` | `$FFFE` | Initial stack pointer
`cgb_stack` | `$DFFE` | Expanded monitor stack position
`oam_bak` | `$D100` | OAM build buffer
`bg_bak` | `$D600` | Background build buffer
`ocpd_bak` | `$D800` | OBJ palette buffer
`bcpd_bak` | `$D840` | BG palette buffer
`bcpd_win` | `$D8E0` | Window-specific BG palette area
`pltt_id_grp_mem` | `$D900` | Palette index-group buffer
`cgb_24Bpltt_mem` | `$DA00` | Expanded palette data
`cgb_24Bpltt_all_mem` | `$DD00` | Larger full palette expansion area

That layout makes the monitor feel very deliberate rather than improvised.
It has dedicated staging space for sprite data, background data, palette groups, expanded palette words, and even a DMA routine area inside CPU RAM.

### Named Palette Presets
The palette IDs in `cgbw6def.dmg` are easier to browse once they are grouped by the kind of job they appear to do.

Preset type | Examples | What they suggest
---|---|---
Generic tonal themes | `CI_SEPIA_4A`, `CI_SEPIA_4B`, `CI_BLUE_4A`, `CI_BLUE_4B`, `CI_GREEN_4A`, `CI_RED_4`, `CI_GRAY_4`, `CI_YELLOW_4` | Reusable fallback palettes for broad categories of monochrome games
Series and game-specific entries | `CI_ZELDA_OBJ`, `CI_TETRIS`, `CI_METROID_OBJ`, `CI_KIRBY_OBJ`, `CI_DONKEY_OBJ`, `CI_DONKEY_BG`, `CI_TENNIS_BG`, `CI_BASEBALL_BG`, `CI_PANEPON`, `CI_GAMEWATCH_GB`, `CI_RPG_BG`, `CI_CAMERA`, `CI_SPACE`, `CI_COOKIE` | Named presets for specific Nintendo properties and individual games, rather than only broad fallback palettes

That mix is one of the clearest hints that Nintendo was tuning the CGB boot monitor for appearance, not just compatibility.
The monitor had room for broad fallback color themes, but it also carried hand-labeled presets for specific games and well-known Nintendo properties.

### The Palette Selection System
By this point the overall shape of the palette system is clear: the compatibility tables identify the game, and the remaining logic decides which grouped palette preset to apply or whether to use the manual override path instead.

The source also preserves a manual override path.
`KEY_CHECK_NUM` is `12`, and `key2pltt_table` maps those checks to palette choices, which lines up neatly with the four directional inputs multiplied across three button combinations.
So this is not only an automatic per-game palette system.
It also preserves the user-facing palette switcher Nintendo exposed on real hardware.

The table itself is compact enough to summarize directly.
Each entry stores one input code and one packed palette selection value, where the low 5 bits are the palette number and the high 3 bits are the palette-group type:

Input code | Palette selector | Palette no. | Group type
---|---|---|---
`$40` | `0*$20+18` | `18` | `0`
`$41` | `5*$20+16` | `16` | `5`
`$42` | `3*$20+25` | `25` | `3`
`$20` | `5*$20+24` | `24` | `5`
`$21` | `5*$20+13` | `13` | `5`
`$22` | `0*$20+22` | `22` | `0`
`$80` | `0*$20+23` | `23` | `0`
`$81` | `0*$20+7` | `7` | `0`
`$82` | `5*$20+26` | `26` | `5`
`$10` | `0*$20+5` | `5` | `0`
`$11` | `3*$20+28` | `28` | `3`
`$12` | `0*$20+19` | `19` | `0`

Even without resolving every Japanese input comment perfectly, the structure is clear.
The manual selector is not choosing from arbitrary colors.
It is choosing from the same grouped palette system the automatic compatibility database uses.

With the [Shift-JIS](#glossary-shift-jis) comments decoded, the inputs are clearer too:

* `$40`, `$41`, `$42` are `Up`, `Up+A`, and `Up+B`
* `$20`, `$21`, `$22` are `Left`, `Left+A`, and `Left+B`
* `$80`, `$81`, `$82` are `Down`, `Down+A`, and `Down+B`
* `$10`, `$11`, `$12` are `Right`, `Right+A`, and `Right+B`

So the manual palette switcher really is a compact 12-way menu built out of d-pad direction plus optional `A` or `B`.

### Cartridge Checks and DMG or CGB Handoff
The `maker_check`, `sgb_check`, `select_palette`, and `cpu_mode_change` cluster shows how the monitor decides what to do with the inserted cartridge, including [SGB](#glossary-sgb)-related checks.

At a high level it:

* reads cartridge header bytes around `$0143`, `$0144`, and `$014B`
* checks for the newer maker-code path versus the older style
* computes a title checksum into `name_sum`
* searches the single-title and plural-title tables for a palette match
* updates `curr_pltt_no` and `pltt_grp_type`
* waits for [VBlank](#glossary-vblank) and then switches into either [CGB](#glossary-cgb) or [DMG](#glossary-dmg) mode

That is the logic that ties the header constants, compatibility tables, and palette variables together.
The monitor is effectively doing a small cartridge-identification pass before it decides how the boot sequence should look.

One subtle detail in the source makes the handoff logic even clearer.
During the title loop, `select_palette` is only called when bit 7 of `cpu_mode_data` is clear.
Then `cpu_mode_change` checks the same byte again:

* if bit 7 is set, it writes the cartridge's mode byte straight into `KEY0` and follows the non-DMG path
* if bit 7 is clear, it forces DMG mode, adjusts `OPRI`, uploads the prepared CGB palette data for display, and conditionally resets the Nintendo background

So the manual palette selector is really a DMG-compatibility feature sitting inside the broader CGB monitor flow.
The source is not treating every cartridge the same way.
It branches early between "native color-capable cartridge" and "older monochrome cartridge that may need a compatibility palette."

### Palette Groups and Actual Color Data
The last stage of the palette system is where the earlier selectors become actual display colors.
Once the decoded comments in `cgbw6def.dmg` and `agb_cgb.dmg` are lined up with the tables, that final expansion path is much easier to follow.

At the symbolic level, the monitor knows about palette entries such as:

* `CI_SEPIA_4A`
* `CI_SEPIA_4B`
* `CI_BLUE_4A`
* `CI_BLUE_4B`
* `CI_GREEN_4A`
* `CI_RED_4`
* `CI_GRAY_4`
* `CI_YELLOW_4`
* `CI_GAMEWATCH_GB`
* `CI_RPG_BG`
* `CI_ZELDA_OBJ`
* `CI_TETRIS`
* `CI_METROID_OBJ`
* `CI_CAMERA`

With the comments decoded, a few of those names are much clearer in plain Japanese too:

* `セピア4A` and `セピア4B` (`Sepia 4A` and `Sepia 4B`)
* `ブルー4A` and `ブルー4B` (`Blue 4A` and `Blue 4B`)
* `グリーン4A` (`Green 4A`)
* `ゲームウォッチBG` (`Game & Watch BG`)
* `ゼルダOBJ` (`Zelda OBJ`)
* `テトリス` (`Tetris`)
* `メトロイドOBJ` (`Metroid OBJ`)
* `デバガメ` (`Camera`)
* `宇宙` (`Space`)

Then `pltt_index_group` combines those symbolic entries into 30 grouped presets for `OBJ0`, `OBJ1`, and `BG`.
For example:

Group | OBJ0 | OBJ1 | BG
---|---|---|---
`0` | `CI_MOGURA_OBJ` | `CI_FLASH_1` | `CI_RPG_BG`
`7` | `CI_BLUE_4A` | `CI_FLASH_1` | `CI_TETRIS`
`17` | `CI_ZELDA_OBJ` | `CI_BLUE_4A` | `CI_RED_4`
`20` | `CI_METROID_OBJ` | `CI_GREEN_4A` | `CI_BLUE_4A`
`26` | `CI_CAMERA` | `CI_CAMERA` | `CI_CAMERA`

That is one of the nicest low-level details in the whole source.
Nintendo was not only choosing one palette per game.
It was often choosing coordinated object and background palette triples.

The final `pltt_data` table then resolves those symbolic names into actual 15-bit CGB color words.
A few examples:

Palette entry | Sample color words
---|---
`セピア4A` | `$7fff, $32bf, $00d0, $0000`
`ブルー4B` | `$7fff, $6e31, $454a, $0000`
`ゼルダOBJ` | `$7fff, $03e0, $0206, $0120`
`テトリス` | `$7fff, $03ff, $001f, $0000`
`メトロイドOBJ` | `$03ff, $001f, $000c, $0000`
`デバガメ` | `$7fff, $033f, $0193, $0000`

So the palette pipeline has three clear layers:

* identify a game
* map it to an `OBJ0` and `OBJ1` and `BG` group
* expand that group into concrete 15-bit CGB colors

Here are a few representative swatches generated from the actual `pltt_data` words:

Palette entry | Swatches | Direct evidence
---|---|---
`セピア4A` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFFFF;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFAD63;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#843100;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#000000;border:1px solid #999;"></span> | Converted directly from `$7FFF, $32BF, $00D0, $0000`
`ブルー4B` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFFFF;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#8C8CDE;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#52528C;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#000000;border:1px solid #999;"></span> | Converted directly from `$7FFF, $6E31, $454A, $0000`
`ゼルダOBJ` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFFFF;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#00FF00;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#318400;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#004A00;border:1px solid #999;"></span> | Converted directly from `$7FFF, $03E0, $0206, $0120`
`テトリス` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFFFF;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFF00;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#FF0000;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#000000;border:1px solid #999;"></span> | Converted directly from `$7FFF, $03FF, $001F, $0000`
`メトロイドOBJ` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFF00;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#FF0000;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#630000;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#000000;border:1px solid #999;"></span> | Converted directly from `$03FF, $001F, $000C, $0000`
`デバガメ` | <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFFFFF;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#FFCE00;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#9C6300;border:1px solid #999;"></span> <span style="display:inline-block;width:1.1em;height:1.1em;background:#000000;border:1px solid #999;"></span> | Converted directly from `$7FFF, $033F, $0193, $0000`

That makes the palette story easier to grasp at a glance.
The source is preserving the exact 15-bit color sets the monitor uploaded into CGB palette memory, not just symbolic names.

### Why the AGB_CGB Branch Matters
One subtle but useful detail is that the later `agb_cgb.dmg` branch is not only carrying the same broad logic as `cgb_es2.dmg`.
It also contains a few maintenance-era clues that make it feel like a live follow-on version of the same monitor:

* later header notes dated `1999-08-21` and `2000-03-30`
* a small `init_rom2game` flow change with three inserted `nop` instructions
* an extra `inc b` flag-setting step before `rombank_change`
* one small Nintendo-logo copy change from `ex_nindata` to `$ff80`

Those are all small edits, but together they make the relationship between the two source files easier to understand.
`cgb_es2.dmg` looks like the older baseline, while `agb_cgb.dmg` looks like a carefully carried-forward branch rather than a rewrite.

The actual source diff is also small enough to summarize cleanly:

Change area | `cgb_es2.dmg` | `agb_cgb.dmg`
---|---|---
Header block | single `1998-7-21` line | later `1999-8-21` and `2000-3-30` maintenance notes
Post-`fade_out` flow | direct `jr init_rom2game` | three `nop` instructions, then fall through
`init_rom2game` | no extra flag write | adds `inc b`
Small Nintendo logo copy | `ld de, ex_nindata` | `ld de, $ff80`

So the later branch changes are real, but still very tightly scoped.
They look like maintenance edits to a stable monitor rather than a substantial redesign.

---
## Outputs and Documents
The filenames at the root still tell a useful story.
`AgbCgbMn2_1.com` appears to combine `AGB`, `CGB`, and `Mn`, which likely stands for monitor.
`CgbEs2Mn.com` looks more specialized, with `Es2` strongly suggesting a hardware revision, engineering sample stage, or internal target variant.

The built outputs are also remarkably close to each other.
Both `AgbCgbMn2_1.com` and `CgbEs2Mn.com` are exactly `2304` bytes, and a byte-level comparison only shows `11` differing positions.
That fits very well with the source-level picture from `agb_cgb.dmg` and `cgb_es2.dmg`: these are two extremely closely related boot monitor builds rather than radically different binaries.

Those binary differences are tightly clustered too:

Offset | `AgbCgbMn2_1.com` | `CgbEs2Mn.com`
---|---|---
`0x0F3` | `00` | `18`
`0x0F4` | `00` | `02`
`0x0F6` to `0x0FC` | seven-byte changed block | seven-byte changed block
`0x40A` | `80` | `04`
`0x40B` | `FF` | `01`

That clustering matches the source-level story nicely.
Most of the binary is identical, with only one small early block and one tiny late block changing between the two boot monitor builds.

The `doc` folder survives as two files:

* `CGB－CPUモニタープログラム仕様書_980403.doc`
* `CGB－CPUモニタープログラム仕様書_980615.doc`

{% capture cgb_doc_body %}
The `doc` folder is tiny, but it matters because both files are formal monitor specifications rather than loose notes.
Together they show how Nintendo's documented understanding of the CGB monitor changed between March and June 1998.
{% endcapture %}

{% capture cgb_doc_items %}
- CGB－CPUモニタープログラム仕様書_980403.doc - Earlier monitor specification with filename `980403` and an internal creation date of 26 March 1998
- CGB－CPUモニタープログラム仕様書_980615.doc - Revised monitor specification dated 15 June 1998
{% endcapture %}

{% include connected-folder-tree.html folder="doc" path="cgb_bootrom/trunk/doc" body=cgb_doc_body version="revision 2 import" content=cgb_doc_items %}

Those filenames translate naturally as `CGB CPU Monitor Program Specification`.
So the docs are not stray notes.
They are formal specification documents for the monitor package itself.

Document | Stored filename | Meaning | File size on disk
---|---|---|---
`26 March 1998` initial version | `CGB－CPUモニタープログラム仕様書_980403.doc` | Earlier specification snapshot; filename still carries `980403` | `261,120` bytes
`15 June 1998` initial version | `CGB－CPUモニタープログラム仕様書_980615.doc` | Later revised specification snapshot | `111,616` bytes

They survive as old Word documents, but `textutil` can still pull the main text out cleanly.
That makes them much more useful than raw metadata alone.

Both files identify themselves as `Microsoft Word for Windows 95` documents, both preserve the path `C:\Word Documents\cgb\CGB`, and the later `980615` revision still carries update-field names such as `UPDATETITLE`, `UPDATEITEMNAME`, `UPDATEMODELNUMBER`, and `UPDATEREEDITDAY`.

That confirms a few practical details before even getting into the actual monitor design:

* the spec docs were being edited in a mid-1990s Windows Word environment
* they appear to come from a project directory literally named `cgb`
* the later revision was structured enough to preserve formal update fields rather than being an informal note dump

The most useful improvement here is that the documents can now be read as real text rather than only metadata, which means the specifications can confirm several major behaviours directly.

The `980403` document describes a six-part structure:

* overview
* memory map
* bit layout
* initialization program flowchart
* color-palette selection program start flowchart
* color-palette selection operation

Its overview states that the program handles initialization, displays the Nintendo logo, checks the cartridge registration data, starts the game, and allows color-palette changes when a DMG cartridge is inserted.

The later `980615` document is even more revealing.
It reduces the contents to:

* overview
* memory map
* bit layout
* flowchart

More importantly, the flow description now matches the source very closely:

* clear OAM and VRAM banks 0 and 1
* expand `GAMEBOY` and `NINTENDO` logo data into VRAM
* initialize the logo display palettes
* identify the inserted cartridge and set palette parameters
* allow palette-parameter changes during the logo display
* support `12` palette choices using d-pad plus `A` or `B`
* clear VRAM except for the Nintendo-logo character data
* switch CPU mode and start the game from `0100H`

That is a strong confirmation that the source has been interpreted in the right direction.
The specification and the extracted assembly are clearly describing the same system.

The March and June revisions also show a real design shift rather than a cosmetic document refresh:

Revision | March `980403` | June `980615`
---|---|---
Structure | six-part document | four-part document
Palette-selection model | separate palette-selection startup flow and operation section | folded into one unified boot flow
Runtime behavior | describes a dedicated palette-selection window and [NMI](#glossary-nmi) path during gameplay | describes palette changes during the boot-logo display only
Extra staging details | expands palette-window character data into VRAM bank 1 and builds palette-panel data | emphasizes OAM clear, logo expansion, palette changes during logo display, then VRAM clear except logo tiles
Overall feel | monitor-style palette utility layered on top of boot logic | closer to the familiar retail CGB logo-and-handoff flow

The March wording is especially revealing because it still documents a much more monitor-like palette system.
It describes a `カラーパレット選択ウィンドウ` (`color palette selection window`) overlay appearing on top of the running game, a palette-selection [NMI](#glossary-nmi) path, and resuming play after the window closes.

By June that has been simplified into the now-familiar boot-time behavior:

* palette changes happen during logo display
* the player can choose from `12` combinations using the d-pad with `A` or `B`
* the chosen colors are reflected immediately in the logo display
* after header validation, the monitor clears VRAM except the Nintendo-logo tiles, switches CPU mode, and starts the game

```mermaid
flowchart LR
  subgraph M["<b>March 1998 spec</b><br>980403"]
    M1["<b>Boot and logo</b><br>initialization and cartridge checks"] --> M2["<b>Palette window path</b><br>separate startup flow"]
    M2 --> M3["<b>NMI during gameplay</b><br>pause game and open overlay window"]
    M3 --> M4["<b>Resume play</b><br>close window and continue game"]
  end

  subgraph J["<b>June 1998 spec</b><br>980615"]
    J1["<b>Boot and logo</b><br>initialization and cartridge checks"] --> J2["<b>Logo-time palette choice</b><br>12 d-pad plus A/B combinations"]
    J2 --> J3["<b>CPU mode change</b><br>set final mode and palette state"]
    J3 --> J4["<b>Game start</b><br>jump to 0100H"]
  end
```

---
## What the CGB Side Preserves
Taken together, the CGB repository preserves a compact low-level monitor package rather than a broad SDK-like environment.
The pieces on disk point to:

* two closely related monitor source snapshots
* a small DMG-era assembler and linker flow
* built `.com` monitor outputs
* a definitions file covering memory layout and palette IDs
* dated formal monitor specification documents from 1998

### What This Reveals About the Real CGB Boot Process
At this point the most useful overall conclusion is that the preserved CGB material is not just a dead boot ROM listing.
It is a monitor-oriented implementation of the real color-boot compatibility strategy Nintendo was using in the late Game Boy era.

The source, binaries, and specs all point to the same picture:

* the boot sequence was presentation-heavy, with staged logo display, sound timing, and palette fades
* the colorization path was data-driven, with a real compatibility database for many DMG titles
* Nintendo supported both automatic game-specific palette choice and a 12-way manual override
* the later `agb_cgb.dmg` branch was a maintenance pass on an already-stable monitor rather than a redesign

So the leak is valuable for more than just preserving one boot binary.
It shows how Nintendo structured the logic behind Game Boy Color boot-time palette compatibility at a very low level.

Now you might be interested in our post on the Game Boy Advance Boot ROM:
{% include link-to-other-post.html post="/game-boy-advance-boot-rom-repository" description="For the larger AGB monitor, startup, library, and tooling environment, check out the Game Boy Advance boot ROM page." %}
