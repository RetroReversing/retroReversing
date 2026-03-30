---
layout: post
tags:
- snes
- leak
- zelda
- alinktothe past
- graphics
- gigaleak
title: The Legend of Zelda - A Link to the Past 2D Art Workspace (NEWS_04 Archive)
category: 
- leak
- snes
- gigaleak
permalink: /zelda-snes-2d-art-workspace
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
  - name: Zelda SNES 2D Art Workspace
    url: #
recommend:
- snes
- leak
- zelda
- gigaleak
editlink: /leaks/Nintendo/ZeldaSNES2DArt.md
updatedAt: '2026-03-30'
---

## Archive Source

This article analyzes the **SNES Zelda 2D art and graphics workspaces** preserved in the [Gigaleak](/gigaleak) — specifically from the `NEWS_04` archive, a 96 MB Nintendo NEWS workstation backup.

**Paths in archive:**
- `NEWS_04.tar → home/arimoto/DELDA/` (earliest prototype phase)
- `NEWS_04.tar → home/arimoto/zelda/` (main long-running SNES workspace)

Both directories belong to **Masanao Arimoto** and represent the SNES-side Zelda production across multiple years. `DELDA` captures the first pure tile-painting phase (May–October 1991), while `zelda` represents the broader, long-running production workspace (May 1991–July 1994) that was actively used for over three years.

Together, these two folders preserve *A Link to the Past* development and extended follow-up work, with evidence of NES reference materials and potential successor project work preserved alongside the original SNES assets.

{% include link-to-other-post.html post="/gigaleak-news-04" description="For the broader NEWS_04 context, including Link's Awakening and Star Fox 2 workspaces, see the main NEWS_04 deep-dive." %}
{% include link-to-other-post.html post="/zelda-links-awakening-art-workspace" description="For the Game Boy Zelda (*Link's Awakening*) workspace, see the dedicated Game Boy art analysis." %}
{% include link-to-other-post.html post="/gigaleak" description="For the wider Gigaleak context and other NEWS tape archives, start with the main Gigaleak overview." %}

---

## Glossary

<a id="glossary-delda"></a>
**DELDA** — The earliest Zelda prototype workspace in the NEWS_04 archive. Directory `home/arimoto/DELDA/` containing 213 files across a five-month window (May–October 1991). Represents the pure tile-painting phase before map and object infrastructure was established. Subfolders: `soto` (outdoor tiles), `m` (active tile art store), `d` (dungeon tiles, concentrated at project end), `i` (residual). No `.OBJ` files; minimal `.MAP` data. Likely the first phase before reorganization into the main `zelda` tree.

<a id="glossary-snes-zelda"></a>
**zelda** — The main long-running SNES Zelda workspace in the NEWS_04 archive. Directory `home/arimoto/zelda/` containing 545 files spanning May 1991 to July 1994 (over three years). The richest Zelda workspace on the machine, with detailed dungeon naming conventions, world-map snapshot (m/tmp), NES reference materials preserved alongside SNES assets, and latest-dated files (1994-07-25) suggesting active follow-up work. Most likely represents *A Link to the Past* development and extended post-release work.

<a id="glossary-arimoto"></a>
**Arimoto, Masanao** — Graphics engineer and workstation owner. Home directory (`arimoto/`) in the NEWS_04 backup contains DELDA, zelda, GB-zelda workspaces, the Star Fox 2 2D workspace, and Sugiyama's multi-project overlay. Known for early NES-era graphics work on *The Legend of Zelda* and *Super Mario Bros.* Likely served as a senior graphics authority coordinating both 2D and 3D asset pipelines across multiple productions.

<a id="glossary-soto"></a>
**SOTO** (外) — Japanese for outside or exterior. Subfolder in DELDA containing outdoor/field tile work (66 files, May 23, 1991 only). Represents early overworld tile set development concentrated on a single day.

<a id="glossary-osiro"></a>
**OSIRO** (お城) — Japanese for castle. File prefix in the `zelda/d` dungeon naming scheme. Represents Hyrule Castle or Light World castle zone tile sets. Part of the named area ID scheme mapping to in-game dungeon and overworld locations.

<a id="glossary-tika"></a>
**TIKA** (地下) — Japanese for underground. File prefix in the `zelda/d` dungeon naming scheme. Represents underground passage tiles.

<a id="glossary-nukemichi"></a>
**NUKEMICHI** (抜け道) — Japanese for shortcut passage or hidden passage. File prefix in the `zelda/d` dungeon naming scheme. Represents cave area or hidden passage tile sets.

<a id="glossary-kajiya"></a>
**KAJIYA** (鍛冶屋) — Japanese for blacksmith. File prefix in the `zelda/d` dungeon naming scheme. Represents blacksmith or village tile set.

<a id="glossary-sabaku"></a>
**SABAKU** (砂漠) — Japanese for desert. File prefix in the `zelda/d` dungeon naming scheme. Represents desert region tiles.

<a id="glossary-pyramid"></a>
**PYRAMID** — English name used in the `zelda/d` dungeon naming scheme. Represents the Pyramid dungeon exterior tile set. The only non-Japanese area name, suggesting either developer preference or special naming convention.

<a id="glossary-khn"></a>
**KHN** — Likely abbreviation (possibly 「クハン」or similar). Subfolder in `zelda` containing room/screen layout files (72 files, May–November 1991). Active primarily in the first six months of the workspace.

<a id="glossary-atari"></a>
**ATARI** (当たり) — Japanese for hit or contact; also used in game dev to mean collision. Subfolder in `zelda` containing collision data (8 files, June–August 1991). Not related to the Atari company; an internal Japanese game development term. One of the earliest specialized data types in the SNES workspace.

<a id="glossary-spl"></a>
**SPL** — Possibly abbreviation for sprite or panel. Subfolder in `zelda` containing early sprites and panels (10 files, May 23, 1991 only). Includes `kabe` (wall) and `osr` (enemy/contact) variants, suggesting early character and interactive element definition.

<a id="glossary-m-tmp"></a>
**m/tmp snapshot** — A frozen workspace state in the `zelda/m/tmp` folder dated December 1, 1992 (34 files). Captures world-map tile types (hokora = shrine, kumo = cloud, kyokai = border/church, machi = town, mori = forest) alongside opening/ending sequence tiles. Notably preserves `op-ed-nes`, an NES-format tile set alongside SNES assets, indicating the team was still referencing the NES original in late 1992 when designing world-map terrain.

<a id="glossary-hokora"></a>
**HOKORA** (祠) — Japanese for wayside shrine. Named tile type in the `zelda/m/tmp` world-map snapshot, representing shrine tile sets.

<a id="glossary-kumo"></a>
**KUMO** (雲) — Japanese for cloud. Named tile type in the `zelda/m/tmp` world-map snapshot, representing cloud tile sets.

<a id="glossary-kyokai"></a>
**KYOKAI** (境界 or 教会) — Japanese for border or church. Named tile type in the `zelda/m/tmp` world-map snapshot. Represents either border/transition areas or church/religious structures.

<a id="glossary-machi"></a>
**MACHI** (町) — Japanese for town. Named tile type in the `zelda/m/tmp` world-map snapshot, representing town or village tile sets.

<a id="glossary-mori"></a>
**MORI** (森) — Japanese for forest. Named tile type in the `zelda/m/tmp` world-map snapshot, representing forest tile sets. Part of the terrain palette alongside other natural geography.

<a id="glossary-op-ed"></a>
**OP-ED** — Opening/ending sequence tiles. Present in the `zelda/m/tmp` snapshot. Represents animated or composed screens for game introduction and conclusion sequences.

<a id="glossary-op-ed-nes"></a>
**OP-ED-NES** — NES-format opening/ending tiles preserved in the `zelda/m/tmp` snapshot alongside SNES assets. Direct evidence that the team was still referencing the original NES *The Legend of Zelda* when designing world-map terrain art in late 1992 — three years after the original 1986 NES release and after *A Link to the Past* (1991).

<a id="glossary-cgx"></a>
**CGX** — Character and graphics bank format. Present in both DELDA (tile art) and `zelda` (dungeon/overworld banks). The dominant graphics asset type across both SNES Zelda workspaces.

<a id="glossary-col"></a>
**COL** — Palette or color set format. Used throughout both DELDA and `zelda` to control appearance and variation of graphics assets.

<a id="glossary-scr"></a>
**SCR** — Screen or layout assembly format. Composed arrangements of graphics and palettes. Particularly common in `zelda/khn` (room layouts) and `zelda/m` (map data).

<a id="glossary-map"></a>
**MAP** — Map data format. More prevalent in `zelda` (35 files, especially in `m/` and `m/tmp/`) than in DELDA (which has almost none). Represents world-map structures and overworld geography.

<a id="glossary-obj"></a>
**OBJ** — Object-side or enemy-side asset definition. Virtually absent from both DELDA and `zelda` (only 1 early object tile in `zelda/obj`), indicating these workspaces were primarily graphics and layout focused rather than object or enemy composition focused.

<a id="glossary-bak"></a>
**BAK** — Backup or prior-state file. 268 files in `zelda`, 66 in DELDA. Heavy prevalence indicates aggressive iteration with preserved older versions, allowing reconstruction of design evolution.

<a id="glossary-alinktothe past"></a>
**A Link to the Past** — 1991 SNES Zelda game shipped in Japan November 22, 1991. The `zelda` and DELDA workspaces are most likely associated with this title. Evidence includes dungeon naming conventions (osiro, tika, kajiya, sabaku, pyramid) mapping to ALTTP locations, and the date range bracketing production through post-release work.

<a id="glossary-gigaleak"></a>
**Gigaleak** — Large archive of Nintendo internal documentation, source code, and workstation backups released in 2020. Includes NEWS tape sets (NEWS_04, NEWS_05, etc.), source code repositories, and design documentation spanning NES, SNES, Game Boy, and other platforms. The SNES Zelda workspaces (DELDA, zelda) provide detailed views of early 1990s SNES production practices and post-release asset evolution.

<a id="glossary-news04"></a>
**NEWS_04** — A 96 MB Nintendo NEWS workstation backup tape containing primarily graphics-side material. Preserved in the Gigaleak. Contains DELDA, zelda, GB-zelda Zelda project folders; Star Fox 2 2D workspace; and Sugiyama's multi-project overlay. Represents a snapshot of mixed multi-project workstation usage from 1991-1995.

---

## Overview: Two Phases of SNES Zelda Development

The two SNES Zelda folders represent distinct phases of production on a single machine:

- **DELDA** (213 files, May–October 1991): Pure tile-painting phase before map and object infrastructure
- **zelda** (545 files, May 1991–July 1994): Main long-running production workspace spanning over three years

Both started on the same day (May 23, 1991), suggesting the workstation was set up for Zelda work at that moment. `DELDA` closed in October 1991, and tile work moved fully into the main `zelda` tree, which continued active through mid-1994 — nearly three years after *A Link to the Past* shipped.

---

## DELDA: The Earliest Prototype

`DELDA` is the smallest and shortest-lived of the three Zelda folders.
Its five-month window — May to October 1991 — makes it a snapshot of the very first phase of Zelda work on this machine.

Subdir | Files | Date range | Dominant types | Reading
---|---|---|---|---
`soto` | `66` | `1991-05-23` only | BAK, COL, SCR, MAP | Outdoor / field tile work (`soto` = outside/exterior in Japanese)
`m` | `51` | `1991-05-23` → `1991-10-24` | BAK, CGX | Tile art; runs the full five-month span
`d` | `23` | `1991-10-21` → `1991-10-23` | CGX, BAK | Dungeon-side tiles; concentrated in the final two days of the folder's life
`i` | `1` | `1991-05-23` only | BAK | Single residual file

The `soto` subfolder's name (外 = outside) points to outdoor/overworld tile sets.
The `m` subfolder runs the whole five months, suggesting it was the active tile art store.
The `d` subfolder has almost all its files dated to October 21-23, which looks like a concentrated push — possibly porting or adapting dungeon tiles right before the project reorganised into the main `zelda` tree.

`DELDA` does not contain `.OBJ` files and has almost no `.MAP` data.
That makes it feel like a pure tile-painting phase: the team was building raw graphics assets before the broader map and object infrastructure was established.

---

## zelda: The Long-Running SNES Branch

The `zelda` folder runs for over three years and is the richest Zelda workspace on the machine.

Subdir | Files | Date range | Dominant types | Reading
---|---|---|---|---
`d` | `170` | `1991-05-23` → `1994-07-25` | BAK, CGX, COL, SCR | Dungeon and overworld area tile banks; **latest files in the whole zelda tree**
`khn` | `72` | `1991-05-23` → `1991-11-07` | BAK, SCR | Room/screen layouts; active in the first six months
`m` | `89` | `1991-05-23` → `1992-04-28` | MAP, CGX, COL, SCR | Map-side data with a special `tmp` sub-snapshot
`spl` | `10` | `1991-05-23` only | SCR, BAK | Early sprites and panels (kabe = wall, osr = enemy/contact)
`atari` | `8` | `1991-06-11` → `1991-08-09` | BAK, CGX | Collision data (`atari` = hit/contact in Japanese game dev — not the company)
`i` | `14` | `1991-05-23` only | BAK, SCR | Interior room screens (h-1 through h-a2)
`w` | `9` | `1991-05-23` only | SCR, BAK, COL | Simple early screens (1, 2, 3, 4)
`obj` | `1` | `1991-05-23` only | CGX | Single early object tile

### The d Subfolder: Dungeon Areas Named

The `d` subfolder is by far the most interesting part of the `zelda` tree.
Its files are named by dungeon or overworld area — and the area names are directly readable:

Name | Japanese reading | Likely area
---|---|---
`0-osiro` | お城 — castle | Hyrule Castle or Light World castle zone
`1-tika` | 地下 — underground | Underground passage tiles
`10-nukemichi` | 抜け道 — shortcut passage | Hidden passage or cave area
`11-kajiya` | 鍛冶屋 — blacksmith | Blacksmith or village tile set
`12-sabaku` | 砂漠 — desert | Desert region tiles
`13-pyramid` | pyramid | Pyramid dungeon exterior

These names map well to the dungeon and overworld vocabulary of *A Link to the Past*.
The numbered prefix (`0-`, `1-`, `10-`, `11-`, `12-`, `13-`) is almost certainly an area ID scheme that matches the game's internal map numbering.

The `d` subfolder also contains the **newest files in the entire `zelda` tree** — as late as `1994-07-25`.
That is nearly three years after the game shipped in Japan (November 1991).
This strongly suggests `zelda/d` was actively used for follow-up work — potentially the eventual SNES remake, regional port, or a successor project — long after the original title was complete.

### The m/tmp Sub-Snapshot

The `m` subfolder contains a nested `tmp` folder dated entirely to `1992-12-01`.
Its 34 files carry named tile types rather than numbered IDs:

* `hokora` — wayside shrine (祠)
* `kumo` — cloud (雲)
* `kyokai` — border / church (境界 or 教会)
* `machi` — town (町)
* `mori` — forest (森)
* `caddata` — likely a raw CAD tool export
* `op-ed` — opening / ending sequence tiles
* `op-ed-nes` — NES variant of the opening/ending tiles

This `tmp` snapshot reads like a world-map tile palette capture: terrain types (forest, town, shrine, cloud) alongside an opening/ending sequence set.
The `op-ed-nes` file is especially notable because it preserves a **NES-format tile set alongside the SNES assets** — suggesting the team was still referencing the NES original in late 1992 when designing or revising world-map terrain art.

---

## Production Timeline

The timeline of DELDA and zelda:

1. **May 23, 1991**: Both `DELDA` and `zelda/d` start on the same day — the workstation is initialized for Zelda work
2. **May–October 1991**: `DELDA` runs as a pure tile-painting phase; `zelda` begins broader infrastructure
3. **October 1991**: `DELDA` closes; tile work consolidates fully into `zelda`
4. **November 1991**: *A Link to the Past* ships in Japan
5. **November 1991–April 1992**: Core production continues; `zelda/m` (map data) active through April 1992
6. **December 1992**: `zelda/m/tmp` snapshot captures world-map tile palette, notably preserving NES reference materials
7. **July 1994**: Latest file in `zelda/d` — active three years after original release, suggesting follow-up work or reuse

The preservation of NES-format tiles in late 1992 (after ALTTP shipped) suggests continued reference to the original for consistency or potential successor/remake work.

---

## What Remains to Study

* **Area ID mapping**: Correlating the numbered dungeon prefixes (`0-`, `1-`, `10-`, etc.) to specific in-game locations and progression
* **Tile variation evolution**: Tracking how tile sets evolved between DELDA's pure painting phase and `zelda`'s broader infrastructure
* **Screen composition**: Reconstructing how `khn` room layouts combined graphics, collision, and map data
* **Post-release work**: Understanding the purpose and scope of the 1994 edits to `zelda/d` — possible port, remake, or successor project
* **NES reference usage**: Analyzing how the `op-ed-nes` and other preserved NES assets were used in 1992 production decisions
