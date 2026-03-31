---
layout: post
tags:
- gameboy
- leak
title: The Legend of Zelda Link's Awakening - 2D Art Workspace (NEWS_04 Archive)
category: 
- leak
- gameboy
permalink: /zelda-links-awakening-art-workspace
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
  - name: Link's Awakening 2D Art Workspace
    url: #
recommend:
- gameboy
- leak
editlink: /leaks/Nintendo/ZeldaLinksAwakeningArt.md
updatedAt: '2026-03-30'
---

## Archive Source

This article analyzes the **Link's Awakening 2D art and graphics workspace** preserved in the [Gigaleak](/gigaleak) — specifically from the `NEWS_04` archive, a 96 MB Nintendo NEWS workstation backup.

**Path in archive:** `NEWS_04.tar → home/arimoto/GB-zelda/`

The `GB-zelda` directory belongs to **Masanao Arimoto** and represents a parallel Game Boy-targeted branch separate from the SNES-side `zelda` workspace on the same machine. This folder is the largest of three Zelda project folders in the backup (824 files total), with clear Game Boy hardware constraints, object-focused architecture, and explicit localization evidence for multi-region release.

The date range (November 1991 → August 1994) brackets the entire *Link's Awakening* localization window exactly: Japan release June 1993, North America August 1993, Europe December 1993.

{% include link-to-other-post.html post="/gigaleak-news-04" description="For the broader NEWS_04 context, including Star Fox 2 and Sugiyama's multi-project workspace, see the main NEWS_04 deep-dive." %}
{% include link-to-other-post.html post="/gigaleak" description="For the wider Gigaleak context and other NEWS tape archives, start with the main Gigaleak overview." %}

---

## Glossary

<a id="glossary-gb-zelda"></a>
**GB-zelda** — The Game Boy Zelda workspace in the NEWS_04 archive. Directory `home/arimoto/GB-zelda/` containing 824 files across 2D graphics, object definitions, maps, palettes, and transition screens. Most likely represents *The Legend of Zelda: Link's Awakening* production, given the localization evidence, object taxonomy, and date bracket (November 1991 – August 1994). The largest and structurally most distinct of three Zelda folders on Arimoto's machine.

<a id="glossary-arimoto"></a>
**Arimoto, Masanao** — Graphics engineer and workstation owner. Home directory (`arimoto/`) in the NEWS_04 backup contains the SF2 2D workspace, three separate Zelda project folders (DELDA, zelda, GB-zelda), and Sugiyama's multi-project overlay. Known for early NES-era graphics work on *The Legend of Zelda* and *Super Mario Bros.* Likely served as a senior graphics authority coordinating both 2D and 3D asset pipelines during SNES/Game Boy production.

<a id="glossary-cbos"></a>
**CBOS** — C-type boss objects in the GB-zelda `o/cbos` subfolder. 21 files dated September 1992 to February 1993, containing numbered boss definitions (numbered 1-11). Part of the object taxonomy that separates enemies by type and role.

<a id="glossary-dbos"></a>
**DBOS** — Dungeon boss objects in the GB-zelda `o/dbos` subfolder. 47 files dated August 1992 to April 1993, containing dungeon-specific boss definitions (numbered 1-6, with 6-1 and 6-2 variants). Paired with CBOS to form a clear enemy classification system.

<a id="glossary-gomi"></a>
**GOMI** (ゴミ) — Japanese for garbage or junk. Files suffixed with `-gomi` in the GB-zelda workspace (e.g., `f-gomi`, `d-gomi`) mark explicitly discarded or superseded definitions. Represents objects replaced but preserved in the backup, consistent with cautious personal-backup patterns seen across the archive.

<a id="glossary-dan"></a>
**DAN** (段) — Japanese for steps or stairs. Used in the GB-zelda `p` subfolder to name staircase/step transitions. Part of the room-transition vocabulary (`dan`, `irekae`, `tenso`).

<a id="glossary-irekae"></a>
**IREKAE** (入れ替え) — Japanese for swap or replacement. Combined with `tenso` to form `irekae-tenso` (swap-teleport), naming warp-point transition screens in the GB-zelda `p/f` subfolder. Part of the internal naming convention for room transitions.

<a id="glossary-tenso"></a>
**TENSO** (転送) — Japanese for transfer or teleport. Combined with `irekae` to form `irekae-tenso`, naming teleport/warp transitions in the `p/f` subfolder. Part of the internal naming convention for the room-transition pipeline.

<a id="glossary-cgx"></a>
**CGX** — Character and graphics bank format. Used in both SNES and Game Boy branches. 86 files in GB-zelda. Typically paired with `.COL` (palette) and `.SCR` (screen/layout) files. Used for sprite sheets, tile art, and object-side graphics.

<a id="glossary-obj"></a>
**OBJ** — Object-side or enemy-side asset definition. 147 files in GB-zelda, significantly more than the 2 files in the SNES `zelda` branch. Reflects the Game Boy architecture's reliance on composed objects rather than full-screen bitmaps. Organized into subtypes (CBOS, DBOS, field, house, dungeon).

<a id="glossary-map"></a>
**MAP** — Map data format. 62 files in GB-zelda, more than double the 35 files in the SNES `zelda` branch. Represents world-map and overworld structures. The `m/tmp` snapshot contains named tile types (forest, town, shrine, cloud) and even NES-format variants.

<a id="glossary-scr"></a>
**SCR** — Screen or layout assembly format. 45 files in GB-zelda, fewer than the 77 in `zelda`, reflecting the Game Boy's smaller screen resolution and object-composed architecture. Found across all subfolders including localization variants (`gameover-France`, `gameover-Germany`, `gameover-usa`).

<a id="glossary-col"></a>
**COL** — Palette or color set format. Only 3 files in GB-zelda, compared to 63 in the SNES `zelda`. The dramatic drop reflects Game Boy's trivially small palette space relative to SNES. Game Boy color palettes are built into hardware rather than artist-defined.

<a id="glossary-bak"></a>
**BAK** — Backup or prior-state file. 469 files in GB-zelda, more than the 268 in `zelda`. Heavy prevalence indicates aggressive iteration with preserved older versions. Game Boy work may have required more trial-and-error given hardware constraints.

<a id="glossary-localization"></a>
**Localization** — The process of adapting a game for regional release. GB-zelda shows explicit localization evidence: regional game-over screens (`gameover-France`, `gameover-Germany`, `gameover-usa`) and dates spanning the entire localization window (June 1993 Japan → December 1993 Europe). The workspace continued active through August 1994, suggesting localization support and maintenance work.

<a id="glossary-pnl"></a>
**PNL** — Panel or transition screen format. Found in GB-zelda `p` subfolders handling room transitions. Files carry Japanese naming conventions for staircase (`dan`), warp (`irekae-tenso`), and dungeon-specific transitions. Represents the internal screen-composition pipeline for level entry/exit.

<a id="glossary-gigaleak"></a>
**Gigaleak** — Large archive of Nintendo internal documentation, source code, and workstation backups released in 2020. Includes NEWS tape sets (NEWS_04, NEWS_05, etc.), source code repositories, and design documentation spanning NES, SNES, Game Boy, and other platforms. The GB-zelda workspace is one of the most detailed preserved views of Game Boy era production and localization work.

<a id="glossary-news04"></a>
**NEWS_04** — A 96 MB Nintendo NEWS workstation backup tape containing primarily graphics-side material. Preserved in the Gigaleak. Contains three Zelda project folders (DELDA, zelda, GB-zelda) and the Star Fox 2 2D workspace (SF2). Represents a snapshot of multi-project workstation usage from mixed production era, 1991-1995.

<a id="glossary-tmp-snapshot"></a>
**TMP snapshot** — A frozen workspace state captured in the `zelda/m/tmp` folder on December 1, 1992. Contains named tile types (forest, town, shrine, cloud, opening/ending sequences) and notably includes `op-ed-nes`, an NES-format tile set preserved alongside SNES assets. Suggests the team was still referencing the NES original when designing world-map terrain art.

---

## Overview

`GB-zelda` is the largest of three Zelda folders on Masanao Arimoto's machine and structurally the most distinct.
Its extension profile is strikingly different from the SNES-side `zelda` workspace:

Extension | zelda | GB-zelda | Implication
---|---|---|---
`.BAK` | `268` | `469` | More revision history in the GB branch
`.OBJ` | `2` | `147` | Object focus is far heavier on the Game Boy side
`.CGX` | `84` | `86` | Similar tile bank count
`.MAP` | `35` | `62` | More map data in GB-zelda
`.SCR` | `77` | `45` | Fewer raw screen layouts; objects replace them
`.COL` | `63` | `3` | Almost no palette files — GB palette system is simpler

The steep drop in `.COL` makes sense for Game Boy hardware where the palette space is trivially small.
The surge in `.OBJ` reflects a more object-composed screen architecture.

---

## Localization Evidence

The `s` subfolder contains screen layout files with explicitly localized names:

* `gameover`
* `gameover1`
* `gameover-France`
* `gameover-Germany`
* `gameover-usa`
* `fue-neiro` — likely 「フエ音色」, a flute/ocarina sound timbre reference

Three named regional variants of the game-over screen (France, Germany, USA) are strong evidence that this branch was being prepared for a multi-region release.
*Link's Awakening* shipped in Japan in June 1993, in North America in August 1993, and in Europe in December 1993.
The GB-zelda branch date range (1991-11-27 → 1994-08-02) brackets the entire localisation window exactly.

---

## Object Taxonomy

The `o` folder and its sub-trees form a clear object classification system:

Sub-tree | Files | Date range | Reading
---|---|---|---
`o` (top level) | `84` | `1991-11-29` → `1993-07-01` | General objects; `clear`, numbered variants
`o/cbos` | `21` | `1992-09-18` → `1993-02-27` | C-type boss objects (numbered 1-11)
`o/dbos` | `47` | `1992-08-07` → `1993-04-12` | Dungeon boss objects (numbered 1-6, with 6-1 and 6-2 variants)
`o/f` | `28` | `1992-04-15` → `1993-03-16` | Field objects (f1-f12 + `f-gomi` = discarded field data)
`o/h` | `33` | `1992-12-03` → `1993-03-17` | House/hero objects (h1-h13)
`o/d` | `57` | `1992-04-09` → `1993-02-25` | Dungeon objects (d1-d13 + `d-gomi` = discarded dungeon data)
`o/s` | `2` | `1992-07-07` → `1992-11-04` | Small: `op-2`, `s1`
`o/y` | `1` | `1993-02-12` only | Single residual: `ygomi` (discarded)

The `-gomi` suffix (ゴミ = garbage/junk) marks explicitly discarded or superseded files.
`f-gomi` and `d-gomi` are named junk heaps — earlier object definitions that were replaced but not deleted, which is consistent with the cautious personal-backup pattern seen across the whole archive.

The `cbos` / `dbos` naming (c-type boss / dungeon boss) sets up a clear enemy taxonomy.
Boss objects were separated from general field and dungeon objects and given their own numbered sequences.

---

## The Panel and Transition System

The `p` subfolder and its sub-trees handle room transitions:

Sub-tree | Files | Date range | Reading
---|---|---|---
`p` (top level) | `26` | `1992-03-04` → `1993-03-04` | Staircase/step transitions (`dan` = stairs; `dan-irekae` = stair-swap variants)
`p/f` | `38` | `1992-09-10` → `1993-04-08` | Teleport/warp transitions (`irekae-tenso` = transfer/warp swap sequences)
`p/d` | `10` | `1992-11-26` → `1993-02-09` | Dungeon-specific transition data
`p/y` | `4` | `1992-12-15` → `1993-03-16` | Y-type transitions

Key vocabulary:
* `dan` — 段 (steps / stairs)
* `irekae` — 入れ替え (swap or replacement)
* `tenso` — 転送 (transfer or teleport)

So `irekae-tenso` = "swap-teleport" = warp-point transition screen.
This is a named internal convention for the room-transition pipeline, not just a label someone chose at random.

---

## Timeline and Production Context

The date range and folder structure support the interpretation that `GB-zelda` is the primary *Link's Awakening* workspace:

1. **November 1991**: `GB-zelda` opens as a parallel Game Boy-targeted branch
2. **1992**: Object taxonomy builds out; boss and field objects separate; transition system stabilizes
3. **June 1993**: *Link's Awakening* ships in Japan
4. **July 1993**: Core graphics work largely complete; object edits taper off
5. **August 1993**: Game ships in North America; localization screens appear in archive
6. **September 1993 – August 1994**: Continued localization, regional variants, and maintenance work

The regional game-over screens (`gameover-France`, `gameover-Germany`, `gameover-usa`) and the active date range through August 1994 suggest this workspace was actively maintained through European release and localization support.

---

## What Remains to Study

* **Regional palette variation**: Understanding how palettes were customized for different Game Boy versions and regions
* **Object-screen composition**: Reconstructing how object definitions combined to create level screens and room layouts
* **Transition flow**: Mapping the `dan`, `irekae-tenso`, and dungeon-specific transitions to actual in-game level progression
* **Boss design evolution**: Using the CBOS and DBOS numbered sequences to track how boss encounters evolved across production
* **Localization impact**: Analyzing how regional variants were created and maintained in parallel
