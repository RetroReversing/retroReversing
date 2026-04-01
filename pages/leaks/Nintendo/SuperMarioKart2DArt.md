---
layout: post
title: "Super Mario Kart 2D Art Workspace (CAR)"
category: 
- leak
- snes
tags:
- snes
- leak
permalink: /super-mario-kart-2d-art-workspace
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
  - name: Super Mario Kart 2D Art Workspace
    url: #
recommend:
- snes
- leak
editlink: /leaks/Nintendo/SuperMarioKart2DArt.md
updatedAt: '2026-03-30'
---

The Nintendo Gigaleak preserves a separate Super Mario Kart art workspace under `other/NEWS/テープリストア/NEWS_04/home/sugiyama/CAR`.

Unlike the main source tree, this directory is almost entirely art-side production material.
It is a flat workspace full of screen layouts, character graphics, palette files, object art, and raw Mode 7 maps, with a huge number of `.BAK` revisions still preserved beside the current files.

{% include_cached link-to-other-post.html post="/super-mario-kart-source-code" description="For source/build analysis, see the Super Mario Kart source page." %}

---
## At a Glance
The `CAR` folder is a self-contained artist workspace with **415 files** and no subdirectories.
That flat layout makes it feel less like a cleaned release archive and more like an active working branch copied directly from one developer's home directory.

Even though the directory is flat, the file families split into a few clear production buckets:

{% capture car_body %}
`home/sugiyama/CAR` is a flat artist workspace rather than a nested project tree, but the naming still clusters naturally into UI, object, course-family, and raw map groups.
{% endcapture %}

{% capture car_items %}
- icon=🖼️|Front-end UI - `TITLE*`, `CAR-SELECT*`, `MAP-SELECT*`, `RESULT*`, `REGI*`, `D-POINT*`
- icon=🔤|Text and glyphs - `MOJI*`, `OBJ-MOJI*`, `SELECT*`, `DEMO-MOJI*`, `END-MOJI*`, `ABC`, `MARK`
- icon=🧱|Objects and obstacles - `JUGEM*`, `DOKAN*`, `POLE*`, `SLOT*`, `HATA*`, `BG-ITEM*`, `CAR*`
- icon=🗺️|Course-family sets - `B*`, `C*`, `D*`, `G*`, `H*`, `K*`, `S*`, `W*`, `STAR*`
- icon=🌀|Raw Mode 7 maps - `C.MD7`, `CCC1.MD7`, `S.MD7`
- icon=🗃️|Revision trail - 198 `.BAK` files preserving earlier screen, palette, and graphics revisions
{% endcapture %}

{% include connected-folder-tree.html folder="CAR" path="NEWS_04/home/sugiyama/CAR" body=car_body version="Sugiyama workspace snapshot" content=car_items %}

The file types break down like this:

Type | Count | What it preserves
---|---:|---
`.SCR` | 148 | Screen layouts and tile/screen arrangement data
`.CGX` | 38 | Character or tile graphics
`.COL` | 18 | Palette or color data
`.OBJ` | 8 | Object-layout or sprite-object data
`.MD7` | 3 | Raw 32 KB Mode 7 maps
`.DAT` | 2 | Miscellaneous data files
`.BAK` | 198 | Backup revisions of the same art files

That `.BAK` count is one of the best details in the whole directory.
Nearly half the workspace is revision history, which means this is not just "the final art."
It is a preserved trail of iterative screen and asset work.

---
## Archive Source
This page is based on Gigaleak NEWS_04 `home/sugiyama/CAR/`, part of **Tadashi Sugiyama's** workspace.

The project identification is unambiguous from the filenames alone.
This is clearly Super Mario Kart material, with direct references to:

* `TITLE`
* `CAR-SELECT`
* `MAP-SELECT`
* `RESULT`
* `JUGEM`
* `DOKAN`
* `POLE`
* `SLOT`
* raw track maps like `C.MD7`, `CCC1.MD7`, and `S.MD7`

---
## Glossary

* **CAR**: Super Mario Kart art and UI workspace
* **MD7**: raw SNES Mode 7 map data, here stored as 32,768-byte files
* **JUGEM**: Lakitu
* **DOKAN**: pipe obstacle graphics

---
## What the Folder Preserves
This workspace preserves several different layers of Mario Kart's visual production at once:

* title-screen graphics and multiple title revisions
* character and kart select screens
* map-select and region-selection screens
* result and points screens, including English-localized variants
* obstacle and object art like Lakitu, pipes, poles, and slot imagery
* course-family screen sets for multiple environment groups
* raw Mode 7 maps for at least three track families

That combination makes it a very good companion to the source-code leak.
The code explains how menus, scenes, and object packs were used at runtime, while `CAR` preserves the workstation-side assets those systems were built around.

---
## What the File Formats Look Like
Even without a full decoder, the fixed file sizes and the first few words of each file type already tell us quite a lot about what this workspace was storing.

### The SCR Files Look Like Screen or Tile Layout Tables
All **148** `.SCR` files are exactly **8,960 bytes**.
That is too regular to be arbitrary exports, and the contents look much more like structured 16-bit entries than raw bitmap data.

A few examples make the pattern clearer:

File | First 16-bit words
---|---
`TITLE.SCR` | `0x00D9` repeated
`CAR-SELECT.SCR` | `0x044B` repeated
`RESULT.SCR` | `0x3CA3` repeated
`DOKAN.SCR` | `0x1C00`, `0x1C01`, `0x5C01`, `0x5C00` repeating
`BLACK.SCR` | starts with `0x0000` repeated

`DOKAN.SCR` is especially helpful because its opening pattern looks exactly like a small repeating tile arrangement with flipped or variant entries, not like graphics data.
So the safest reading is that `.SCR` stores screen-layout or tile-layout tables built out of 16-bit words.

What is slightly unusual is the total size.
At **8,960 bytes**, each `.SCR` file contains **4,480** little-endian words, which is much larger than one simple SNES background tilemap.
That suggests these are probably workstation-side screen/layout files rather than raw one-to-one PPU dumps.

### The OBJ Files Look Like Fixed Object or Sprite Layout Records
The `.OBJ` side is just as regular.
All **8** `.OBJ` files are exactly **13,568 bytes**, and the opening bytes in files like `TITLE.OBJ`, `JUGEM.OBJ`, `POLE.OBJ`, `CAR.OBJ`, and `OBJ-MOJI.OBJ` fall into repeated small record-like patterns rather than long graphic runs.

The first few 16-bit words in `CAR.OBJ`, for example, look like this:

`0x0080`, `0xF8F8`, `0xB333`, `0x0080`, `0xF0F8`, `0xB233`, `0x0080`, `0xE8F8`

That does not look like tile art.
It looks much more like repeated entries describing object positions, tile references, or sprite attributes.

### Most of the OBJ Files Read Best as Repeating 3-Word Entries
Looking at the first few dozen words across the live object files makes the structure a bit clearer.
`JUGEM.OBJ`, `POLE.OBJ`, `CAR.OBJ`, `CAR-TEST.OBJ`, `OBJ-MOJI.OBJ`, and `OBJ-MOJI-ENG.OBJ` all break very naturally into repeating three-word groups:

File | First four 3-word groups
---|---
`JUGEM.OBJ` | `[0x0080, 0xED00, 0x0C30]`, `[0x0080, 0xEDF8, 0x0E30]`, `[0x0080, 0xEDF0, 0x0E30]`, `[0x0080, 0x08F8, 0x273A]`
`POLE.OBJ` | `[0x0080, 0x18F8, 0x333A]`, `[0x0080, 0x10F8, 0x323A]`, `[0x0080, 0x18F0, 0x233A]`, `[0x0080, 0x10F0, 0x223A]`
`CAR.OBJ` | `[0x0080, 0xF8F8, 0xB333]`, `[0x0080, 0xF0F8, 0xB233]`, `[0x0080, 0xE8F8, 0xB133]`, `[0x0080, 0xE0F8, 0xB033]`
`OBJ-MOJI.OBJ` | `[0x0080, 0x30E8, 0xB538]`, `[0x0080, 0x28E8, 0xB438]`, `[0x0080, 0x30E0, 0xB338]`, `[0x0080, 0x28E0, 0xB238]`

That makes them look much less like generic binary blobs and much more like compact object-entry tables.
The repeated leading `0x0080` in active runs is especially suggestive.
It looks like some kind of shared object flag or control value sitting beside coordinate and tile/attribute words.

The files also contain a lot of empty space.
If you walk the whole file as three-word groups, most entries start with `0x0000`, while the active groups tend to start with `0x0080`.
So the simplest working model is:

* a large fixed-capacity object-layout file
* many inactive or empty records stored as zeros
* active object entries marked by a nonzero control word

That matches the role of these files nicely.
An artist-side object workspace would benefit from exactly this kind of fixed-record format, because it makes it easy to keep adding, deleting, and rearranging sprite or object placements without repacking the whole file every time.

### Title OBJ Looks Slightly Different from the Gameplay-Oriented Files
`TITLE.OBJ` still belongs to the same broad family, but it looks a little less regular than the object-heavy gameplay files.

Its opening words are:

`0x0080`, `0xE8E8`, `0xB430`, `0x0000`, `0xE0E0`, `0x8A3C`, `0x0000`, `0xE8E0`, `0x893C`

That alternating `0x0000` pattern appears much earlier than it does in files like `CAR.OBJ` or `POLE.OBJ`.
So `TITLE.OBJ` may be using the same general object-layout container while storing title-screen object groups or layers in a slightly different arrangement from the gameplay-facing files.

The same pattern also explains why `OBJ-MOJI.OBJ` matters.
If the `MOJI` banks are reusable glyph graphics, then the `OBJ-MOJI` files look like object-layer text placements built on top of those glyphs.

### The COL and CGX Files Match a Clean Asset Pipeline
The palette and graphics banks are even easier to classify because their sizes cluster so neatly.

Type | Sizes seen | Reading
---|---|---
`.COL` | `1,024` bytes only | palette or color tables
`.CGX` | `17,664`, `34,048`, `65,792` bytes | fixed-size character/tile graphics banks

The `.COL` files also look like little-endian color words rather than text or layout data.
For example, `TITLE.COL` opens with values like `0x4BBF` and repeated `0x7FFF` words, which is exactly the kind of pattern you would expect from packed color entries.

The `.CGX` files, by contrast, read like large binary graphics banks.
`MOJI.CGX` begins with dense nonzero bit patterns, `END-MOJI.CGX` mixes visible glyph-like data with large zero runs, and the huge `BG-ITEM.CGX` bank extends that same pattern at a much larger scale.

### The Workspace Looks Like an Editor-Side Asset Format, Not a Final ROM Dump
Taken together, the fixed sizes suggest a tidy production format:

* `.SCR` for screen or tile-layout tables
* `.OBJ` for object or sprite placement data
* `.COL` for color tables
* `.CGX` for character and tile graphics banks

That also helps explain why the folder sits so neatly beside the source-code leak.
The `MarioKart.md` page mostly shows the runtime and build side of Super Mario Kart, while `CAR` preserves the editor-facing asset side that would have fed those systems before data was packed into the final game.

---
## What the Backup Trail Shows
The `.BAK` side of the workspace is large enough to be worth reading as its own preservation layer, not just as a footnote.

Across the whole folder there are **198** backup files, and they split like this:

Extension | Count
---|---:
`.SCR.BAK` | 138
`.CGX.BAK` | 38
`.COL.BAK` | 18
`.OBJ.BAK` | 4

That skew matters.
Most of the revision history sits in screen layouts rather than palettes or object-layout files.
So the CAR workspace looks like a branch where the screen compositions and course-layout screens were being revised more often than the underlying object containers.

### The Menu and Front-End Families Were Clearly Active
The recognizable front-end groups all keep meaningful backup trails:

Family | Backup files preserved
---|---:
`TITLE*` | 11
`CAR-SELECT*` | 5
`MAP-SELECT*` | 4
`RESULT*` | 4
`D-POINT*` | 4
`REGI*` | 2
`MOJI*` | 2
`SELECT*` | 2
`OBJ-MOJI*` | 3

The `TITLE` branch is the standout.
Its backups cover not just screen layouts, but also graphics, palette, and object-form data:

* `TITLE.SCR.BAK`
* `TITLE.CGX.BAK`
* `TITLE.COL.BAK`
* `TITLE.OBJ.BAK`
* `TITLE-ENG.SCR.BAK`
* `TITLE-ENG.CGX.BAK`
* `TITLE-ENG2.SCR.BAK`
* `TITLE-ENG2.CGX.BAK`
* `TITLE-OBJ.CGX.BAK`
* `TITLE2.SCR.BAK`
* `TITLE2.COL.BAK`

That is a very strong sign that the title presentation was being revised as a layered stack rather than as one flattened asset.

### The Course Families Carry the Heaviest Revision Load
The densest `.BAK` trail sits in the environment families rather than the menus:

Family | Backup files preserved
---|---:
`C*` | 26
`B*` | 25
`D*` | 24
`S*` | 23
`H*` | 19
`G*` | 16
`K*` | 16
`W*` | 12
`STAR*` | 8

Those are not just one-off backups either.
Many of the families preserve the same kind of internal pattern:

* numbered `.SCR` screens like `C1-0.SCR.BAK` to `C1-3.SCR.BAK`
* a base graphics bank like `C1.CGX.BAK`
* a palette like `C1.COL.BAK`
* alternate or support banks like `C1-B.CGX.BAK` and `C1-B.SCR.BAK`

So the backup trail makes the course families look less like a few static asset exports and more like real production sets that were being revised screen by screen.

### Object Revisions Exist, but They Are Much Lighter
The object-side families do keep backups, just not at the same density:

* `JUGEM.CGX.BAK` and `JUGEM.OBJ.BAK`
* `DOKAN.CGX.BAK`, `DOKAN.COL.BAK`, and `DOKAN.SCR.BAK`
* `POLE.CGX.BAK`
* `SLOT.CGX.BAK`
* `HATA.SCR.BAK`
* `CAR.CGX.BAK`
* `OBJ-MOJI.OBJ.BAK`, `OBJ-MOJI-ENG.OBJ.BAK`, and `OBJ-MOJI.CGX.BAK`

That lighter trail suggests the object assets were still being worked on, but the heaviest churn was happening in the menu layouts and course-family screens.

### This Looks Like a Real Iteration Trail, Not Bulk Duplication
The backups are also uneven in a useful way.
Some pairs are identical, like `MARK.CGX` and `MARK.CGX.BAK`, while others differ significantly, like `MOJI.CGX` versus `MOJI.CGX.BAK` or `TITLE.SCR` versus `TITLE.SCR.BAK`.

That mix is exactly what you would expect from a live workspace snapshot.
Some assets had stabilized, some were still in motion, and the preserved `.BAK` trail caught both states at once.

---
## UI and Front-End Assets
The most immediately recognizable part of the folder is the front-end material.
This is not just one title screen and one menu mockup.
It is a full set of menu-facing assets with revisions and localized alternatives.

The clearest examples are:

* `TITLE.SCR`, `TITLE.CGX`, `TITLE.COL`, `TITLE.OBJ`
* `TITLE-ENG.SCR`, `TITLE-ENG.CGX`
* `TITLE-ENG2.SCR`, `TITLE-ENG2.CGX`
* `TITLE2.SCR`, `TITLE2.COL`, `TITLE2B.SCR`, `TITLE3.SCR`
* `CAR-SELECT.SCR`, `CAR-SELECT.COL`, `CAR-SELECT2.SCR`, `CAR-SELECT3.SCR`
* `CAR-SELECT2-ENG.SCR`
* `MAP-SELECT.SCR`, `MAP-SELECT.COL`, `MAP-SELECT2.SCR`
* `MAP-SELECT-ENG.COL`
* `REGI.SCR`, `REGI.COL`
* `RESULT.SCR`, `RESULT2.SCR`
* `RESULT-ENG.SCR`, `RESULT2-ENG.SCR`
* `D-POINT.SCR`, `D-POINT2.SCR`
* `D-POINT-ENG.SCR`, `D-POINT2-ENG.SCR`

That is a strong sign that the folder was being used for actual menu and UI production, not only loose graphic experiments.
The English variants are especially useful because they show localization work happening directly in the art workspace rather than being bolted on somewhere else later.

### The Title Material Looks Like a Full Production Stack
The `TITLE` family is especially rich because it preserves not only one final screen, but multiple layers and revisions of the title presentation:

* `TITLE.SCR`, `TITLE.CGX`, `TITLE.COL`, `TITLE.OBJ`
* `TITLE-OBJ.CGX`
* `TITLE-ENG.SCR`, `TITLE-ENG.CGX`
* `TITLE-ENG2.SCR`, `TITLE-ENG2.CGX`
* `TITLE2.SCR`, `TITLE2.COL`
* `TITLE2-ENG.SCR`
* `TITLE2B.SCR`
* `TITLE3.SCR`

That is a strong sign that the title screen was being built as a layered asset set rather than one flattened image.
The naming suggests at least:

* a base title screen layout
* separate title graphics and object data
* multiple follow-up or alternate title layouts
* at least two English-facing revision branches

The file sizes reinforce that structure.
The title-side `.SCR` files are typically **8,960 bytes**, the title palettes are **1,024 bytes**, and the large title graphics banks like `TITLE.CGX`, `TITLE-ENG.CGX`, and `TITLE-ENG2.CGX` are **34,048 bytes** each.
So this looks like a consistent production format, not a grab bag of random exports.

### The Title Revisions Are All Distinct
One especially useful detail is that the title-family files are not just duplicates with different names.
The main screen layouts all hash differently:

Screen file | MD5 | Reading
---|---|---
`TITLE.SCR` | `2eb5b43d472d3bc0b0db112f5286f787` | base title layout
`TITLE-ENG.SCR` | `760edb83d0d2541f7d9e778b2906169e` | English title variant
`TITLE-ENG2.SCR` | `92eb0cc5f03d6195b11bc42a719f974c` | second English revision
`TITLE2.SCR` | `656d56ef35135ada377604335c27e685` | follow-up title layout
`TITLE2-ENG.SCR` | `855366d8e92ce73f94568ceff9239544` | English follow-up variant
`TITLE2B.SCR` | `3c858694efddd0e532fbd373095776bd` | alternate second-stage layout
`TITLE3.SCR` | `35bec087c0914d5604330b4311fa03ee` | later title-stage layout

That matters because it shows the `TITLE` branch was being iterated actively rather than copied forward mechanically.
Even the closely related English files are genuinely different assets, not just renamed duplicates.

The graphics side tells the same story.
`TITLE.CGX`, `TITLE-ENG.CGX`, `TITLE-ENG2.CGX`, and `TITLE-OBJ.CGX` all have different hashes too, which suggests the English title work was not only happening at the screen-layout level.
The title graphics banks themselves were also being rebuilt or rearranged per revision.

### The Base and English Title Screens Diverge Early in the Layout
A quick binary comparison between `TITLE.SCR` and `TITLE-ENG.SCR` is also revealing.
The first differences appear very early in the file, around byte `195`, and then continue in a dense cluster rather than one isolated changed word.

That suggests the English title version was not just patching one small logo tile or one line of text.
The screen layout itself was being reorganized at a fairly low level, likely to accommodate a differently shaped title graphic, different lettering widths, or a different object/tile arrangement.

So the safest reading is:

* `TITLE.SCR` is not just the Japanese screen with text swapped out
* `TITLE-ENG.SCR` and `TITLE-ENG2.SCR` are real layout revisions
* the `TITLE2*` and `TITLE3` files preserve later or alternate stages of the title presentation stack rather than one final canonical layout

### The Title Branch Looks Like a Small UI Project of Its Own
Taken together, the `TITLE` family feels less like one menu asset and more like a self-contained little project inside the CAR workspace.

It preserves:

* base screen layout
* multiple graphics banks
* palette data
* object-form data
* multiple English revisions
* multiple later-stage or alternate title screens

That makes it one of the clearest examples in the whole CAR directory of how Nintendo's front-end art production really worked.
The title screen was being treated as a layered, revisable asset stack, with layout, graphics, color, and object data all evolving together.

### Car Select, Map Select, and Result Screens Were Iterated in Parallel
The same pattern shows up in the other menu families.

For kart selection the workspace keeps:

* `CAR-SELECT.SCR`, `CAR-SELECT.COL`
* `CAR-SELECT2.SCR`
* `CAR-SELECT3.SCR`
* `CAR-SELECT2-ENG.SCR`

For map selection it keeps:

* `MAP-SELECT.SCR`, `MAP-SELECT.COL`
* `MAP-SELECT2.SCR`
* `MAP-SELECT-ENG.COL`

For result and points screens it keeps:

* `RESULT.SCR`, `RESULT2.SCR`
* `RESULT-ENG.SCR`, `RESULT2-ENG.SCR`
* `D-POINT.SCR`, `D-POINT2.SCR`
* `D-POINT-ENG.SCR`, `D-POINT2-ENG.SCR`
* `REGI.SCR`, `REGI.COL`

That is useful because it shows multiple menu flows being revised side by side.
These are not isolated one-off screens.
They look like whole front-end screen families, each with base versions, second or third revisions, and in several cases English variants too.

### These Menu Families Are Also Real Revisions, Not Duplicates
The screen hashes make that even clearer.
Just like the title branch, the other front-end families are preserving genuinely different screen layouts rather than duplicate copies with new names.

For example:

Screen file | MD5
---|---
`CAR-SELECT.SCR` | `01e3b56a2fbfedbe9b919cfc86e338bb`
`CAR-SELECT2.SCR` | `9fcd464d2a10b3a1543c6cdd36a7361b`
`CAR-SELECT3.SCR` | `3e0e29677d952e2ceff66349bad43519`
`CAR-SELECT2-ENG.SCR` | `ce2bb307f1e9a2c809955262302c5209`
`MAP-SELECT.SCR` | `08fd4f77dbd504f8b935964af6e5d0af`
`MAP-SELECT2.SCR` | `8a072e7199225d997d78937ac9ef6b90`
`RESULT.SCR` | `5e820c34fa986aabfc4bd9cda5db1425`
`RESULT2.SCR` | `d75f773d554e5e770ad5c74795f1e505`
`RESULT-ENG.SCR` | `b37fff6d76bf83b1bb6ff402f0718e26`
`RESULT2-ENG.SCR` | `3125e7ea64f7c5088ad6d61843349ac9`
`D-POINT.SCR` | `5f78b12eb5cf6190280973112908ee04`
`D-POINT2.SCR` | `86f5aa5dbf1287837db9c66a57204a76`
`D-POINT-ENG.SCR` | `d10636d04238c924e6266584baed051d`
`D-POINT2-ENG.SCR` | `9f3a04739531f7fb15475f2dfd11f7c5`
`REGI.SCR` | `d6fb72aed3aab1ff5f25eb238df0613b`

The palette side is distinct too.
`CAR-SELECT.COL`, `MAP-SELECT.COL`, `MAP-SELECT-ENG.COL`, and `REGI.COL` all hash differently, which suggests the localized or alternate screens were sometimes carrying their own color choices rather than only rearranged tilemaps.

### The English Variants Diverge Early in the Layout Data
The binary comparisons are useful here because they show where the differences begin.

`CAR-SELECT2.SCR` and `CAR-SELECT2-ENG.SCR` start diverging around byte `193`, with a dense run of changed values immediately after that point.
`RESULT.SCR` and `RESULT-ENG.SCR` diverge even earlier, around byte `131`, again in a dense block rather than one isolated replacement.

That matters because it suggests these English files were not created by tweaking one tiny text region at the end of an otherwise identical layout.
The screen arrangements themselves were being rebuilt early in the data, which is exactly what you would expect if the localized screens needed different object placement, text spacing, or tile allocation.

So the safest conclusion is that `CAR-SELECT`, `MAP-SELECT`, `RESULT`, and `D-POINT` were all being actively revised as full screen families.
The English work was part of the same production flow, not an afterthought layered onto one frozen Japanese layout.

### Smaller Support Screens and Banks Still Matter
Outside the main title, select, and result families, a few smaller files help round out the workspace.

`REGI.SCR` and `REGI.COL` look like a compact region-selection or registration-style pair rather than a stray leftover, and both are distinct assets with their own hashes.
That makes `REGI` feel like a real front-end screen family, just a smaller one than the title or result branches.

The remaining support banks sit a little closer to the edge of the workspace:

* `SLOT.CGX` looks like a standalone graphics bank with no surviving companion layout
* `HATA.CGX` and `HATA.SCR` preserve a small flag-related two-file set
* `BLACK.SCR` looks like a utility or blanking screen rather than a full menu family
* `CAR.CGX`, `CAR.OBJ`, and `CAR-TEST.OBJ` suggest a more general kart-side object or test-art branch

`CAR.OBJ` and `CAR-TEST.OBJ` are especially interesting because they are the same size at **13,568 bytes** but not identical.
Their binary differences begin almost immediately, which suggests `CAR-TEST.OBJ` is a genuine test or alternate object-layout asset rather than a straight copy of the main `CAR.OBJ`.

That kind of file is easy to overlook, but it is historically useful.
It shows the CAR workspace still carrying experimental or validation-side object data alongside the cleaner menu and obstacle art families.

### The Text Assets Explain How Localization Was Being Handled
The lower-level text and glyph files help explain how the localized menu screens were probably being produced.

The most useful families are:

* `MOJI.CGX` and `MOJI-ENG.CGX`
* `SELECT.CGX` and `SELECT-ENG.CGX`
* `OBJ-MOJI.OBJ` and `OBJ-MOJI-ENG.OBJ`
* `DEMO-MOJI.CGX`
* `END-MOJI.CGX`
* support banks like `ABC.CGX`, `MARK.CGX`, and `NINTENDO.CGX`

#### The Reusable Glyph Banks Are Distinct, Not Token Renames
The clearest thing these files show is that English support was not being handled only by repainting finished screens.

`MOJI.CGX`, `MOJI-ENG.CGX`, `SELECT.CGX`, and `SELECT-ENG.CGX` all survive as separate **17,664-byte** graphics banks.
That size is a neat multiple of `32`, which strongly suggests full tile banks rather than tiny one-off labels or compressed scraps.

The paired Japanese and English banks are also genuinely different files:

File | MD5
---|---
`MOJI.CGX` | `ddc47793bc8006d8102686b9d859ebb0`
`MOJI-ENG.CGX` | `606c5ef28c75451b4bb05fab2b85710d`
`SELECT.CGX` | `3697691a0e93e2cbd61ded95d6505317`
`SELECT-ENG.CGX` | `7af87a522a754b755da3edeac8c9edf4`

The binary differences also start surprisingly early.
`MOJI.CGX` and `MOJI-ENG.CGX` diverge at byte `257`, while `SELECT.CGX` and `SELECT-ENG.CGX` diverge at byte `475`.
That makes these look like properly maintained localized tile banks, not late-stage patches where one or two words were swapped in after the fact.

#### The Object-Layer Text Survives As Layout Data Too
The `OBJ-MOJI` pair is even more revealing because it shows that text was also being handled at the object-layout level, not only as background tile graphics.

`OBJ-MOJI.OBJ` and `OBJ-MOJI-ENG.OBJ` are both **13,568 bytes**, but they are not the same file.
Their differences begin almost immediately, at byte `4`.
That strongly suggests separate object-form text layouts for Japanese and English UI elements.

The family is also slightly messy in a useful way.
The live folder preserves `OBJ-MOJI.OBJ` and `OBJ-MOJI-ENG.OBJ`, but the graphics side only survives as `OBJ-MOJI.CGX.BAK`.
That makes the CAR workspace feel less like a tidy export and more like a real working branch where the latest object-text graphics may have been renamed, replaced, or moved while the layout files stayed active.

#### The Support Banks Show Different UI Roles
The rest of the glyph assets split into a few clear sizes and likely roles.

File | Size | Likely role
---|---:|---
`ABC.CGX` | 17,664 bytes | compact reusable alphabet or menu text bank
`DEMO-MOJI.CGX` | 17,664 bytes | dedicated attract-mode or demo text bank
`END-MOJI.CGX` | 34,048 bytes | larger ending or finale text bank
`MARK.CGX` | 34,048 bytes | larger bank of symbols, markers, or UI signs
`NINTENDO.CGX` | 34,048 bytes | branding or logo-side front-end graphics

Those larger **34,048-byte** banks are especially interesting because they sit at almost double the size of the regular menu glyph sets.
`END-MOJI`, `MARK`, and `NINTENDO` look less like ordinary menu-font banks and more like bigger presentation-side assets for the ending, logo screens, or title overlays.

#### The Backup Trail Shows Active Iteration
The `.BAK` files are useful here too because they show which text assets were still changing.

Most of the core banks differ from their backups:

* `MOJI.CGX` differs from `MOJI.CGX.BAK`, with the first change at byte `13,073`
* `MOJI-ENG.CGX` differs from `MOJI-ENG.CGX.BAK`, with the first change at byte `681`
* `SELECT.CGX` differs from `SELECT.CGX.BAK`, with the first change at byte `1,217`
* `SELECT-ENG.CGX` differs from `SELECT-ENG.CGX.BAK`, with the first change at byte `16,418`
* `DEMO-MOJI.CGX` differs from `DEMO-MOJI.CGX.BAK`, with the first change at byte `1,255`
* `OBJ-MOJI.OBJ` differs from `OBJ-MOJI.OBJ.BAK`, with the first change at byte `1,540`

A few files do stay stable.
`OBJ-MOJI-ENG.OBJ` is identical to its backup, and `MARK.CGX` is also unchanged across the preserved pair.
That mix makes the revision trail feel real: some assets were still moving, while others had already settled into a final-looking form.

That fits nicely with the source side of the leak.
The code page shows title, select, result, and ending logic as separate runtime modules, while this art page shows the reusable text banks, object-text layouts, and localized glyph sets that would have fed those modules.

---
## Object and Obstacle Art
The CAR directory also preserves a smaller but very recognizable set of gameplay-facing visual assets.

The clearest ones are:

* `JUGEM.CGX` and `JUGEM.OBJ`
* `DOKAN.CGX`, `DOKAN.COL`, `DOKAN.SCR`
* `POLE.CGX`, `POLE.OBJ`
* `SLOT.CGX`
* `CAR-TEST.OBJ`

This overlaps neatly with the object-side material in the source tree.
The code page already covers Lakitu, poles, pipes, and other object families as runtime systems.
This folder shows the matching artist-side assets for some of those same objects.

`DOKAN` is especially nice because it survives as a graphics file, palette file, and screen/layout file.
That makes it look less like a loose sprite sheet and more like a worked obstacle asset with enough data to preview it inside a screen or tile arrangement.

### Some Object Families Are Much More Complete Than Others
Once the object files are compared directly, the CAR folder starts to show a clear split between full worked asset sets and lighter supporting graphics.

The most complete examples are:

Asset family | Files | What that suggests
---|---|---
`JUGEM` | `JUGEM.CGX`, `JUGEM.OBJ` | Lakitu had both graphics and object-layout data in the art workspace
`DOKAN` | `DOKAN.CGX`, `DOKAN.COL`, `DOKAN.SCR` | the pipe asset preserved graphics, palette, and a screen/layout preview
`POLE` | `POLE.CGX`, `POLE.OBJ` | pole-side course objects kept both graphics and object placement/form data

Those three families feel like real worked production assets, not just loose graphic banks.
They preserve enough surrounding material to suggest the artist could preview, place, or at least validate the asset in something close to its intended in-game arrangement.

By contrast, a few other files look more like support pieces:

* `SLOT.CGX` survives only as a graphics bank
* `HATA.CGX` and `HATA.SCR` look like a smaller two-file flag-related asset set
* `BG-ITEM.CGX` is much larger than the other object graphics banks at **65,792 bytes**, which makes it look more like a shared item or background-object sheet than one single obstacle
* `CAR.CGX` and `CAR.OBJ`, plus `CAR-TEST.OBJ`, suggest there was also a more general kart or vehicle-side object workspace sitting near the obstacle assets

That variety is useful because it shows this was not a single consistent export format.
The workspace appears to preserve whatever combination of graphics, object layout, palette, and preview screen the artist happened to need for each asset family.

### The File Sizes Also Hint at Different Roles
The object-side file sizes line up in a fairly suggestive way:

* most `.CGX` banks for these object sets are **34,048 bytes**
* `.OBJ` files like `JUGEM.OBJ`, `POLE.OBJ`, and `CAR.OBJ` are **13,568 bytes**
* `DOKAN.COL` is a standard **1,024-byte** palette file
* `DOKAN.SCR` and `HATA.SCR` are **8,960-byte** screen/layout files
* `BG-ITEM.CGX` is unusually large at **65,792 bytes**

That implies there was at least a semi-regular production pattern:

* `.CGX` for the raw graphic bank
* `.OBJ` for object-form arrangement or layout data
* `.COL` when a dedicated palette mattered
* `.SCR` when the asset needed a screen or layout preview

`BG-ITEM.CGX` stands out because it breaks that scale.
It is large enough that it probably acted as a broader shared item or object graphics bank rather than a single self-contained hazard.

That makes it a good candidate for one of the "glue" files in the workspace: not a complete worked asset family on its own, but a larger support bank feeding multiple item or background-object cases.

### This Matches the Code-Side Split Pretty Well
The object files in CAR line up cleanly with the structure seen in the source tree.
`Jugem.asm` controls Lakitu as a race-state system, `Scene.asm` mounts course-family packs like `set_dokan`, and `Pole.asm`, `Poo.asm`, `Net.asm`, and `Item.asm` cover the wider track-object and item side.

So the value here is not only that "Lakitu graphics survived."
It is that we can see both sides of the same production chain:

* code modules that animate and place these objects at runtime
* art assets that define how those objects were drawn, colored, and arranged in the workspace

That makes `JUGEM`, `DOKAN`, and `POLE` some of the clearest bridges between the Mario Kart source archive and the separate CAR art branch.

---
## Course Families and Prototype Screen Sets
One of the most interesting things in the directory is how much of it is organized into repeating family blocks rather than named final retail tracks.

The file patterns include large groups like:

* `B1-0.SCR` through `B6-3.SCR`
* `C1-0.SCR` through `C4-3.SCR`, plus `C1.CGX`, `C1.COL`, `C1-B.CGX`, `C1-B.SCR`
* `D1-0.SCR` through `D3-3.SCR`, plus `D1.CGX`, `D1.COL`, `D1-B.CGX`, `D1-B.SCR`
* `G1-0.SCR` through `G3-3.SCR`, plus `G1.CGX`, `G1.COL`, `G1-B.CGX`, `G1-B.SCR`
* `H1-0.SCR` through `H3-3.SCR`, plus `H1.CGX`, `H1.COL`, `H1-B.CGX`, `H1-Z.COL`
* `K1-0.SCR` through `K3-3.SCR`, plus `K1.CGX`, `K1.COL`, `K1-B.CGX`, `K1-B.SCR`
* `S1-0.SCR` through `S2-3.SCR`, plus `S1.CGX`, `S1.COL`, `S1-B.CGX`, `S1-Z.COL`
* `W1-0.SCR` through `W2-3.SCR`, plus `W1.CGX`, `W1.COL`, `W1-B.CGX`, `W1-B.SCR`
* `STAR-0.SCR` through `STAR-3.SCR`, plus `STAR.CGX`, `STAR.COL`, `STAR-B.CGX`, `STAR-B.SCR`

That structure suggests the folder preserves course-family art workspaces rather than only final named cup data.
Each family tends to have:

* multiple `.SCR` panels or quadrants
* one or more matching `.CGX` graphics banks
* one or more `.COL` palette files
* occasional `-B` or `-Z` variants that look like alternates or related sub-assets

This is one of the best reasons the CAR folder matters.
It suggests a pre-release art organization where environment sets were still being grouped and iterated by broad family code before the final retail course structure fully hardened.

### The Family Blocks Look Like Real Working Sets
Once the family files are counted together, they stop looking like random leftovers and start looking like repeated production templates.

The largest groups are:

Family | Approximate non-BAK file count | What survives
---|---:|---
`B` | 24 | `B1-0.SCR` through `B6-3.SCR`
`C` | 20 | `C1-0.SCR` through `C4-3.SCR`, plus `C1.CGX`, `C1.COL`, `C1-B.CGX`, `C1-B.SCR`
`D` | 20 | `D1-0.SCR` through `D3-3.SCR`, plus `D1.CGX`, `D1.COL`, `D1-B.CGX`, `D1-B.SCR`
`G` | 16 | `G1-0.SCR` through `G3-3.SCR`, plus `G1.CGX`, `G1.COL`, `G1-B.CGX`, `G1-B.SCR`
`H` | 18 | `H1-0.SCR` through `H3-3.SCR`, plus `H1.CGX`, `H1.COL`, `H1-B.CGX`, `H1-B.SCR`, `H1-Z.COL`
`K` | 16 | `K1-0.SCR` through `K3-3.SCR`, plus `K1.CGX`, `K1.COL`, `K1-B.CGX`, `K1-B.SCR`
`S` | 12 | `S1-0.SCR` through `S2-3.SCR`, plus `S1.CGX`, `S1.COL`, `S1-B.CGX`, `S1-Z.COL`
`W` | 12 | `W1-0.SCR` through `W2-3.SCR`, plus `W1.CGX`, `W1.COL`, `W1-B.CGX`, `W1-B.SCR`
`STAR` | 8 | `STAR-0.SCR` through `STAR-3.SCR`, plus `STAR.CGX`, `STAR.COL`, `STAR-B.CGX`, `STAR-B.SCR`

That repeated shape matters.
Most families preserve:

* a run of numbered `.SCR` layouts
* one main `.CGX` graphics bank
* one `.COL` palette file
* one or more `-B` variants that look like alternate graphics or companion screen elements

So this was probably not a folder of disconnected test scraps.
It looks much more like a set of reusable art packages for different environment themes.

### The Naming Does Not Match Retail Track Names Cleanly
Another useful detail is that these family names do not line up one-to-one with final retail track names.
Some, like `STAR`, feel familiar, but many others are just compact letter blocks like `C`, `D`, `G`, `H`, `K`, `S`, and `W`.

That suggests the workspace was still organized around internal art-family buckets rather than the exact retail cup presentation seen by players.
In other words, the artist-side naming here looks earlier and looser than the code-side family labels like `CIRCUIT`, `OBAKE`, `GRASS`, `CASTLE`, `ICE`, `DART`, `SAND`, and `STAR` that survive in the source tree.

That mismatch is historically useful.
It suggests the production pipeline may have moved through at least two levels of naming:

* artist-side family codes in `CAR`
* code/runtime-side family labels in `label.def` and `Scene.asm`

### The Source Tree Helps Explain Why These Families Matter
The main Mario Kart source page already shows that the runtime was built around family-based assets rather than one unique blob per course.

In the code-side material:

* `label.def` groups maps through families like `CIRCUIT_CHR`, `OBAKE_CHR`, `GRASS_CHR`, `CASTLE_CHR`, `ICE_CHR`, `DART_CHR`, `SAND_CHR`, and `STAR_CHR`
* `MAPxx_CHR`, `MAPxx_BCH`, `MAPxx_BSC`, `MAPxx_COL`, and `MAPxx_OBJ` point each course back to one of those shared themed sets
* `Scene.asm` then mounts environment-specific object packs like `set_dokan`, `set_bubble`, `set_fish`, `set_poo`, `set_wood`, `set_ball`, and `set_rdossun`

That means the CAR workspace is probably preserving the earlier visual side of the same family-based content model.
The code tells us the game was assembled from themed asset banks.
The `CAR` directory shows what those themed art banks may have looked like while they were still being laid out, colored, and revised.

### The Circuit Runtime Family Is the Best Concrete Match
If one code-side family is compared closely, the circuit branch gives the clearest picture of how the runtime and art workspace probably fit together.

In `label.def`, the four circuit courses all point back to one shared runtime family:

* `MAP00_CHR`, `MAP07_CHR`, `MAP0E_CHR`, and `MAP0F_CHR` all resolve to `CIRCUIT_CHR`
* `MAP00_BCH`, `MAP07_BCH`, `MAP0E_BCH`, and `MAP0F_BCH` all resolve to `CIRCUIT_BCH`
* `MAP00_BSC`, `MAP07_BSC`, `MAP0E_BSC`, and `MAP0F_BSC` all resolve to `CIRCUIT_BSC`
* `MAP00_COL`, `MAP07_COL`, `MAP0E_COL`, and `MAP0F_COL` all resolve to `CIRCUIT_COL`
* `MAP00_OBJ`, `MAP07_OBJ`, `MAP0E_OBJ`, and `MAP0F_OBJ` all resolve to `CIRCUIT_OBJ`

`kart-init.asm` then treats those `BCH` and `BSC` tables as the back-layer path.
`Open_character` decodes `Back_character_address` as the mode 0 background character set, and `Set_back_screen` uploads the matching back-layer screen data from `Back_screen_address`.

That is not just a vague secondary asset slot.
For the circuit family, the game really does appear to be built around:

* a shared main course graphics bank
* a shared back-layer character bank
* a shared back-layer screen bank
* one shared palette
* one shared object family
* multiple per-course main screen layouts

That structure lines up strikingly well with the `C1` package in `CAR`:

* a large primary bank in `C1.CGX`
* a smaller companion branch in `C1-B.CGX` and `C1-B.SCR`
* one shared palette in `C1.COL`
* multiple layout screens in `C1-0.SCR` through `C1-3.SCR`

The naming still is not a perfect proof.
`C1` in the art workspace is not explicitly labelled `CIRCUIT`, and the source tree uses more descriptive family names than the CAR folder does.
But structurally, the match is very close.

So the safest interpretation is:

* `C1` looks like a strong artist-side candidate for one circuit-family package
* `C1-B` looks like the same kind of companion background branch the runtime later exposes as `CIRCUIT_BCH` and `CIRCUIT_BSC`
* the four `C1-0` to `C1-3` screens fit the same "one family, multiple course layouts" pattern seen in the four circuit maps on the code side

### D1 Looks Like a Plausible Dart-Side Candidate
For a less explicit family, `D1` is a good second check.
It has the same overall package shape:

* `D1.CGX`
* `D1-B.CGX`
* `D1-B.SCR`
* `D1.COL`
* `D1-0.SCR` to `D1-3.SCR`

That lines up neatly with the runtime `DART` family, which also preserves `DART_CHR`, `DART_BCH`, `DART_BSC`, `DART_COL`, and `DART_OBJ` in `label.def`.
The naming is still only circumstantial here, so this is best treated as a plausible match rather than a proven one, but the structure is very close.

`D1` is also useful because it shows the family layers can stabilize at different times.
Its main `D1.CGX` bank is identical to `D1.CGX.BAK`, while the palette and the `-B` branch were still changing:

Pair | Reading
---|---
`D1.CGX` vs `D1.CGX.BAK` | unchanged
`D1.COL` vs `D1.COL.BAK` | changed from byte `546`
`D1-B.CGX` vs `D1-B.CGX.BAK` | changed from byte `19`
`D1-B.SCR` vs `D1-B.SCR.BAK` | changed from byte `65`

That is a nice reminder that the companion branch was not just an afterthought.
At least in some families, the primary course graphics could settle first while the secondary layer and palette were still being revised.

### W1 Is the Best Remaining Candidate for the Ice Family
Of the still-unresolved letter families, `W1` now looks like the strongest candidate for the runtime `ICE` branch.

The clearest clue is the palette.
`W1.COL` opens with a run of very bright high-value colors like:

`0x7D46`, `0x7FFF`, `0x7FFE`, `0x7FFD`, `0x7FFB`, `0x7FDA`, `0x7FB9`, `0x7F98`

That is a much colder, whiter start than families like `H1`, whose palette begins with darker and more mixed values.
So purely on the art side, `W1` already reads more naturally as a snow or ice-themed package than most of the other unresolved families.

The source side nudges the same way.
The runtime has a dedicated `ICE` family in `label.def`, and `Scene.asm` comments one of the shared obstacle paths as `dokan,dokanX ; (CIRCUIT,SNOW)`.
That is useful because it shows the codebase still preserving a `snow` naming idea beside the final `ICE` family label.

Taken together, the safest read is:

* `W` is a plausible artist-side shorthand for a winter or snow-themed family
* that makes `W1` the strongest remaining candidate for the runtime `ICE` package
* the match is still inferential, but it is stronger than the other unresolved letters

### H Still Looks Unresolved, but Horror or Obake Is Plausible
`H1` is more difficult to place cleanly.
It has the same strong family-package structure as the other major groups, including:

* a full `H1.CGX`
* a `H1-B` companion branch
* both `H1.COL` and `H1-Z.COL`
* four numbered screen layouts

So it is clearly an important family.
What was missing earlier was a clean naming hint.
The preview images in the CAR folder help a lot here.

`H1.CGX.png` and `H1-B.png` do not look neutral.
They show dark vertical tile runs, eye-like or ghost-like small sprites, jagged skyline bands, and fence or grave-marker style motifs rather than bright terrain or castle masonry.
That visual read fits the runtime `OBAKE` family much better than any of the other unresolved code-side groups.

So `H` now looks more likely to be an earlier artist-side label for the runtime `OBAKE` branch, perhaps something closer to "horror" than the later descriptive code name.
It is still not a perfect textual proof, but the visual evidence is much stronger than it was before.

### K1 Now Looks Like the Best Candidate for the Castle Family
`K1` is a better fit than `B` for the remaining runtime `CASTLE` family.

It preserves the full family-package shape:

* `K1.CGX`
* `K1-B.CGX`
* `K1-B.SCR`
* `K1.COL`
* `K1-0.SCR` to `K1-3.SCR`

That already makes it look more like the other resolved environment families than `B`, which survives mostly as runs of numbered `.SCR` panels without the same full bank-and-palette package.

The naming clue is also better than it looks at first.
On the source side, the runtime family is called `CASTLE`, but the actual courses are Bowser's castles.
So an artist-side shorthand based on `Koopa` is quite plausible.

The visual previews make that interpretation stronger too.
`K1.CGX.png` and `K1-B.png` look full of repeating stone or beam segments, arch-like structures, and lava- or bridge-adjacent decorative tiles.
That reads much more naturally as a Bowser castle kit than as a ghost or snow set.

The palette also fits that direction reasonably well.
`K1.COL` opens with a darker run of browns, reds, and yellows rather than the cold whites of `W1` or the brighter grass-like sets:

`0x0000`, `0x18C8`, `0x294C`, `0x318E`, `0x39D0`, `0x4212`, `0x4A54`, `0x5296`

That is not a proof by itself, but it sits more comfortably with a castle or lava-adjacent environment than with a snow or ghost course.

So the safest updated read is:

* `K1` is the strongest remaining candidate for the runtime `CASTLE` family
* `B` now looks less like a main environment family and more like some other screen-grouping branch

### C1 Is a Good Worked Example of a Full Family Package
`C1` is one of the clearest families to study because it preserves almost every layer of the artist-side stack at once:

* `C1-0.SCR` to `C1-3.SCR`
* `C1-B.SCR`
* `C1.CGX`
* `C1-B.CGX`
* `C1.COL`
* backups for every one of those files

That makes it look much less like one course screen and much more like a small production package.
It has multiple layout screens, a main graphics bank, a secondary `-B` graphics and screen branch, and a palette.

The live files are all distinct:

File | Size | MD5
---|---:|---
`C1-0.SCR` | 8,960 | `ff1bb0edd1686714c5e5ce17ea01274b`
`C1-1.SCR` | 8,960 | `e122d968ab2b41f913d9cd56753ec74b`
`C1-2.SCR` | 8,960 | `b5d3745ee9a3258eec51dfc7573ef750`
`C1-3.SCR` | 8,960 | `9fd8242ec7e7b572a781dfe558a67bba`
`C1-B.SCR` | 8,960 | `73470dd1f87087376d279a563378ce0c`
`C1.CGX` | 65,792 | `83e7bef72785284a12839eded96617b6`
`C1-B.CGX` | 17,664 | `76f8484072b86e10cb1b1c7e63dd231f`
`C1.COL` | 1,024 | `f941b09b506ef4164b8d044ff9e792d6`

The size split is especially interesting.
`C1.CGX` is one of the big **65,792-byte** family graphics banks, while `C1-B.CGX` drops down to the smaller **17,664-byte** bank size.
That makes the `-B` branch look more like a support or alternate graphics layer than a full second copy of the main course bank.

### The C1 Backup Pairs Show Layered Revisions
The backup comparisons make `C1` even more revealing.
Every major live file differs from its `.BAK`, but not all in the same way:

Pair | First difference
---|---:
`C1.CGX` vs `C1.CGX.BAK` | byte `16,257`
`C1.COL` vs `C1.COL.BAK` | byte `577`
`C1-0.SCR` vs `C1-0.SCR.BAK` | byte `5,837`
`C1-B.SCR` vs `C1-B.SCR.BAK` | byte `134`

That spread is useful.
It does not look like one bulk export replacing every file from the top.
It looks more like targeted edits landing at different layers of the same family:

* palette edits landing partway through the color table
* layout edits landing late in one screen file
* much earlier changes in the `-B` support screen
* graphics-bank edits landing deep inside the large tile bank

So `C1` reads as a good worked example of how the CAR workspace was actually being used.
Artists were not just saving one final course-family blob.
They were revising screens, support screens, graphics banks, and palettes independently inside the same family package.

### STAR Shows the Other Side of the Revision Story
The `STAR` family is smaller, but it is useful because it preserves a mix of changed and unchanged backups:

* `STAR.CGX`, `STAR.COL`, `STAR-0.SCR`, `STAR-1.SCR`, `STAR-3.SCR`, and `STAR-B.SCR` all differ from their backups
* `STAR-2.SCR` is identical to `STAR-2.SCR.BAK`
* `STAR-B.CGX` is identical to `STAR-B.CGX.BAK`

That is a nice reminder that the backup trail is not simply "everything changed."
Some pieces of a family were still moving, while others had already settled into stable forms.

### The Most Likely Family Mappings
At this point a few of the artist-side families can be mapped back to the runtime side with more confidence than others.

CAR family | Runtime-side candidate | Confidence | Why
---|---|---|---
`C` / `C1` | `CIRCUIT` | high | explicit structural match, plus `C.MD7` and four-map circuit reuse in `label.def`
`STAR` | `STAR` | high | name survives directly on both sides
`D` / `D1` | `DART` | medium | same family-package shape and matching initial, but no explicit descriptive label in `CAR`
`G` / `G1` | `GRASS` | medium | same family-package shape and matching initial
`K` / `K1` | `CASTLE` | medium | full family-package structure, plausible `Koopa` shorthand, and a darker castle-like palette
`W` / `W1` | `ICE` | medium | bright white-heavy palette, plausible winter shorthand, and source-side `SNOW` comment near the ice/circuit obstacle path
`S` / `S1` | `SAND` | medium | same family-package shape and matching initial, but could be confused with other `S`-prefixed material
`H` / `H1` | `OBAKE` | medium | ghost-like preview imagery, strong family-package shape, and a plausible earlier "horror"-side label
`B` | unknown | low | mostly survives as numbered `.SCR` panel groups without the same full bank-and-palette structure

That table is still intentionally cautious.
The important part is not pretending every letter is solved.
It is showing that the CAR workspace and the runtime source are organized the same way even where the exact artist-side naming has not fully survived.

### The B and Z Suffixes Behave Quite Consistently
Once the family variants are compared directly, the suffixes start to look much less arbitrary.

The `-B` branch appears in:

* `C1-B.CGX`, `C1-B.SCR`
* `D1-B.CGX`, `D1-B.SCR`
* `G1-B.CGX`, `G1-B.SCR`
* `H1-B.CGX`, `H1-B.SCR`
* `K1-B.CGX`, `K1-B.SCR`
* `S1-B.CGX`, `S1-B.SCR`
* `W1-B.CGX`, `W1-B.SCR`
* `STAR-B.CGX`, `STAR-B.SCR`

That is a very regular pattern.
Across all of those families, `-B` means a smaller companion graphics bank plus a matching screen/layout file.

Variant type | Size pattern | Reading
---|---:|---
main family `.CGX` | `65,792` bytes | large primary course-family graphics bank
`-B` `.CGX` | `17,664` bytes | smaller companion graphics bank
main family `.SCR` | `8,960` bytes | regular family screen/layout file
`-B` `.SCR` | `8,960` bytes | companion screen/layout file using the same container format

That consistency is one of the strongest clues in the whole workspace.
It suggests `-B` was not being reused loosely for unrelated things.
It looks much more like a deliberate secondary-layer convention inside the course-family pipeline.

The binary comparisons reinforce that.
Every tested family differs from its `-B` companion immediately:

Pair | First difference
---|---:
`C1.CGX` vs `C1-B.CGX` | byte `1`
`D1.CGX` vs `D1-B.CGX` | byte `1`
`G1.CGX` vs `G1-B.CGX` | byte `1`
`H1.CGX` vs `H1-B.CGX` | byte `1`
`K1.CGX` vs `K1-B.CGX` | byte `1`
`S1.CGX` vs `S1-B.CGX` | byte `1`
`W1.CGX` vs `W1-B.CGX` | byte `1`
`C1-0.SCR` vs `C1-B.SCR` | byte `1`
`D1-0.SCR` vs `D1-B.SCR` | byte `1`
`G1-0.SCR` vs `G1-B.SCR` | byte `1`
`K1-0.SCR` vs `K1-B.SCR` | byte `1`
`W1-0.SCR` vs `W1-B.SCR` | byte `1`

So the `-B` files are not trimmed copies of the main branch.
They are separate companion assets that just happen to live inside the same family package.

### The B Graphics Banks Also Cluster Into Two Visual Styles
Looking just at the raw `-B` graphics banks adds one more useful clue.
They are all the same size at **17,664 bytes**, but they do not all open the same way.

One group starts with long zero-heavy prefixes:

* `C1-B.CGX`
* `D1-B.CGX`
* `G1-B.CGX`
* `K1-B.CGX`
* `S1-B.CGX`
* `W1-B.CGX`

Another group starts immediately with denser `0xFF` and `0x00FF` style bit patterns:

* `H1-B.CGX`
* `STAR-B.CGX`

That split is not enough to say exactly what the banks contain, but it does suggest the `-B` branch was still being used for more than one recurring visual role.
Some companion banks look sparse or partially blank at the front, while others jump straight into dense tile data.

The cross-family comparisons make the same point.
Files like `C1-B.CGX` and `D1-B.CGX` do not match each other, but they stay structurally similar enough to diverge only after the first `21` bytes.
`S1-B.CGX` and `W1-B.CGX` are also close enough to hold off their first difference until byte `73`.

So the `-B` banks do not look random.
They behave like a recurring companion-bank format, but one that could still hold different kinds of support graphics depending on the family.

The source tree now makes that interpretation much stronger.
In `kart-init.asm`, the secondary runtime tables beside the main family assets are literally named `Back_character_address` and `Back_screen_address`, and those point to the `BCH` and `BSC` data listed in `label.def`.
`Open_character` then decodes the `BCH` path as the mode 0 background character set, while `Set_back_screen` uploads the `BSC` data as the matching back-layer screen data.

So while the CAR suffixes do not prove an exact one-to-one filename mapping by themselves, the overall structure lines up very neatly:

* main family banks for the primary course graphics and screen data
* smaller `-B` banks on the art side
* `BCH` and `BSC` back-layer character and screen banks on the runtime side

That makes the `-B` branch look much more like a companion background layer than a random alternate export.

### Z Looks Like an Alternate Palette Path, Not a Full Secondary Asset Set
The `-Z` suffix behaves much more narrowly.
In this workspace it only appears as:

* `H1-Z.COL`
* `S1-Z.COL`

Both are regular **1,024-byte** palette files, and both differ from the main family palette:

Pair | First difference
---|---:
`H1.COL` vs `H1-Z.COL` | byte `5`
`S1.COL` vs `S1-Z.COL` | byte `1`

That is a much tighter pattern than `-B`.
There are no matching `-Z` graphics banks or `-Z` screen files here.
So the safest reading is that `-Z` was being used for alternate palette variants inside specific families, not for a full second visual layer.

Taken together, the suffixes now look surprisingly disciplined:

* `-B` behaves like a recurring secondary graphics-and-layout branch
* `-Z` behaves like a rarer alternate palette branch

That is exactly the kind of detail that makes the CAR workspace feel like a real production system rather than a random artist dump.

---
## The Raw Mode 7 Maps
The three `.MD7` files are some of the highest-signal artifacts in the whole directory:

* `C.MD7`
* `CCC1.MD7`
* `S.MD7`

All three are exactly **32,768 bytes**, which matches a full **128x128** Mode 7 map.
That makes them much more than ordinary menu assets.
They look like direct raw course-plane data for actual track work.

That is especially useful alongside the source leak.
The code page explains how Mario Kart's runtime consumed course grids, area tables, target tables, and scene families.
This CAR page preserves the artist-side raw map data that sits much closer to the visual construction stage of those courses.

### Two of the Three Maps Are Actually the Same
One especially useful detail is that the three files are not all unique.

File | Size | MD5 | Notes
---|---:|---|---
`C.MD7` | `32768` | `a8d5cdcfa2e7b639ebe8fbbfb87637c2` | identical to `CCC1.MD7`
`CCC1.MD7` | `32768` | `a8d5cdcfa2e7b639ebe8fbbfb87637c2` | identical to `C.MD7`
`S.MD7` | `32768` | `3f5a4254a470ecfb553a0eba0800536e` | distinct map data

`C.MD7` and `CCC1.MD7` are byte-for-byte identical.
That is a nice clue that `CCC1` is probably not preserving a different map layout, but a duplicate, alias, or revision tag pointing back to the same underlying course-plane data.

By contrast, `S.MD7` is genuinely different.
So the workspace is preserving at least two distinct raw Mode 7 map bodies, not just three filenames for the same asset.

### The Files Look Like Dense 16-Bit Tile or Cell Data
Viewed as raw words, the `.MD7` files do not look like compressed blobs or image headers.
They look like dense repeating 16-bit values spread across the entire file.

For example, the first few words in `C.MD7` and `CCC1.MD7` are:

```text
08f0 08f0 08f0 07f0 09f1 08f1 08f1 08f1
09f2 08f2 08f2 08f2 08f3 08f3 08f3 08f3
```

The most common 16-bit words in `C.MD7` include values like:

* `1944`
* `1d44`
* `1901`
* `1744`
* `1d01`

While `S.MD7` is dominated by a very different set:

* `1e17`
* `1e07`
* `1217`
* `1e00`
* `1d00`

That is consistent with the idea that these are map-plane cell values, tile IDs, or packed per-cell flags rather than simple sequential bitmap graphics.
The exact encoding still needs proper format decoding, but the files clearly behave like structured map data.

### What This Probably Means for the Workspace
Taken together, the `.MD7` files suggest that the CAR branch was not only painting interface art.
It was also carrying raw track-plane data close enough to the real game format that it could feed directly into Mode 7 map work.

The duplicate `C` and `CCC1` pair is especially interesting because it hints at one of three things:

* an alias or duplicate copy kept under a different working name
* a course family and one named course temporarily sharing the same base map
* a revision or branch marker where the second file had not diverged yet

The safest conclusion is simply that the workspace still contained raw course data under active working names, and that not every map-family file in CAR represented a unique final layout.

---
## What Overlaps with the Source Tree
This page and the main source page do overlap, but in a good way.
They are usually describing different sides of the same systems.

The clearest overlaps are:

Workspace item | Art-side evidence here | Code-side match in the source tree
---|---|---
Title and menu screens | `TITLE*`, `CAR-SELECT*`, `MAP-SELECT*`, `RESULT*`, `REGI*` | `title*.asm`, `k-select.asm`, `w-select*.asm`, `c-select*.asm`, `Result.asm`
Object art | `JUGEM*`, `DOKAN*`, `POLE*`, `SLOT*` | `Jugem.asm`, `Scene.asm`, object packs like `set_dokan`
Course-family assets | `C*`, `D*`, `G*`, `H*`, `K*`, `S*`, `W*`, `STAR*` | family-based asset labels in `label.def` and scene grouping in `Scene.asm`
Mode 7 map work | `C.MD7`, `CCC1.MD7`, `S.MD7` | runtime map, scene, and drive-data systems described in `MarioKart.md`

So the overlap is not really duplication.
`MarioKart.md` explains how the game-side code uses these families and screens.
`SuperMarioKart2DArt.md` preserves the workstation-side material those systems were built from.

---
## Interpretation
The CAR workspace captures a pre-release phase where Super Mario Kart's art pipeline still looked fluid and hands-on.

The strongest clues are:

* the huge number of `.BAK` revisions
* multiple localized title, result, and menu variants
* family-coded course art sets rather than only final named retail tracks
* raw Mode 7 maps living beside menu and object art in the same directory

Taken together, this looks less like a final clean asset dump and more like an artist's active branch where UI, track-family graphics, obstacle art, and map data were all being iterated side by side.
