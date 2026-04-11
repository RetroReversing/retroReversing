---
layout: post
title: "Stunt Race FX 2D Art Workspace (FX2)"
category:
- leak
- snes
tags:
- snes
- leak
permalink: /stunt-race-fx-2d-art-workspace
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
  - name: Stunt Race FX 2D Art Workspace
    url: #
recommend:
- snes
- leak
editlink: /leaks/Nintendo/StuntRaceFX2DArt.md
updatedAt: '2026-03-30'
---

## Archive Source
This page is based on Gigaleak NEWS_04 `home/sugiyama/FX2/` (41 files), from **Tadashi Sugiyama's** workspace.

---
## Glossary

<a id="glossary-fx2"></a>
* **FX2** - Wild Trax / Stunt Race FX UI-art folder.

<a id="glossary-cpt"></a>
* **cpt** - Cup/captain selection asset prefix.

<a id="glossary-p-select"></a>
* **p-select** - Player-select screen asset prefix.

<a id="glossary-cgx"></a>
* **CGX** - Graphics tile bank data.

<a id="glossary-scr"></a>
* **SCR** - Screen layout composition data.

<a id="glossary-col"></a>
* **COL** - Palette data.

<a id="glossary-obj"></a>
* **OBJ** - Object-side definition data.

<a id="glossary-wild-trax"></a>
* **Wild Trax** - Internal/development naming for Stunt Race FX.

<a id="glossary-stunt-race-fx"></a>
* **Stunt Race FX** - Released SNES title with late-cycle UI and race presentation systems.

<a id="glossary-tadashi-sugiyama"></a>
* **Tadashi Sugiyama** - Nintendo developer with multi-project NEWS_04 workspace branches.

---
## Overview
[`FX2`](#glossary-fx2) is a compact late-phase UI/art folder (`1993-07` to `1993-12`) containing player/cup selection assets and test objects.

The lower-case naming style (`cpt`, `p-select`) differs from Sugiyama's other uppercase-heavy folders, which may indicate a different toolchain or handoff stage.

With release in July 1994, this folder likely represents final UI lock before ship.

---
## Folder Snapshot

{% capture fx2_body %}
FX2 is a small, tightly scoped branch with selection-screen families and minimal collateral, suggesting a focused pre-ship UI pass.
{% endcapture %}

{% capture fx2_items %}
- sugiyama/FX2 - 41 files, 1993-07-06 to 1993-12-08, compact UI/select asset branch
- key prefixes - cpt, p-select, test
- core formats - CGX, SCR, COL, OBJ
{% endcapture %}

{% include connected-folder-tree.html folder="fx2" path="NEWS_04/home/sugiyama/FX2" body=fx2_body version="tape restore snapshot" content=fx2_items %}

Signal | Evidence | Reading
---|---|---
Compact branch size | 41 files | Focused UI polish pass, not full production archive
Selection-centric naming | `cpt-*`, `p-select-*` | Menu and roster front-end work
Date window | `1993-07` to `1993-12` | Late production pass before 1994 release window

---
## Asset taxonomy
The table below lists the relevant entries.

Group | Example files | Interpretation
---|---|---
Cup/captain screens | `cpt-1.CGX`, `cpt-1.COL`, `cpt-1.SCR`, `cpt-2.CGX`, `cpt-2A.SCR` | Cup or roster-stage selection UI
Player-select screens | `p-select.CGX`, `p-select.COL`, `p-select.SCR` | Character/player front-end selection panel
Test object | `test-1.OBJ` | Tool/test artifact or prototype object reference

The branch is internally consistent.

It reads as one focused UI pipeline rather than mixed mission or stage authoring.

---
## Lower-case naming as a workflow clue
One of the strongest forensic hints in [`FX2`](#glossary-fx2) is naming style.

Nearby Sugiyama branches are mostly uppercase-heavy (`MARIO-CAR`, `MAP-SELECT`, `GAMESELECT`, `SKYDIVE`).

FX2 shifts to lower-case prefixed naming (`cpt`, `p-select`, `test`).

Possible readings:

* a different authoring tool that normalized names to lower-case
* a handoff from an earlier art branch into a late UI integration branch
* contributor overlap with another team using different naming conventions

This is not proof of team change by itself, but it is a persistent marker of branch identity.

---
## Timeline interpretation
The table below lists the relevant entries.

Date | Event | Reading
---|---|---
`1993-07-06` | FX2 branch opens | Late-stage UI work begins
`1993-12-08` | FX2 last modified | UI branch closes
`1994-07` | Stunt Race FX release window | ~7 month gap for integration, QA, and ship prep

The short, clean branch duration plus release proximity makes FX2 one of the clearest late-lock UI slices in NEWS_04.

---
## Relationship to CAR and SIM
FX2 is useful when compared directly against other Sugiyama branches:

* [`CAR`](/super-mario-kart-2d-art-workspace) is much larger and includes extensive track-side and localization iteration.
* [`SIM`](/simcity-snes-2d-art-workspace) is menu-heavy but long-tail, with broader UI families and `.SFX` side data.
* FX2 is the smallest and most focused, likely representing final-cycle selection UI work.

---
## Working hypothesis
Current best reading:

* **Primary** - final-cycle selection and roster UI assets for Wild Trax / Stunt Race FX.
* **Secondary** - a narrow handoff branch where naming/tool conventions diverged from earlier Sugiyama folders.

The branch is consistent with late production stabilization rather than concept exploration.

---
## Open questions
* Does `cpt` resolve to cup naming or captain naming in any surviving source/UI text tables?
* Is `test-1.OBJ` referenced by any build manifest in the Wild Trax source tree?
* Are lower-case naming conventions visible in any adjacent Wild Trax production directories?
* Can release candidate UI states be mapped to the `cpt-1` and `cpt-2` variant sequence?


