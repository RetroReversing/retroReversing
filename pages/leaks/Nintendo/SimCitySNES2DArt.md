---
layout: post
title: "SimCity SNES 2D Art Workspace (SIM)"
category:
- leak
- snes
tags:
- snes
- leak
permalink: /simcity-snes-2d-art-workspace
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
  - name: SimCity SNES 2D Art Workspace
    url: #
recommend:
- snes
- leak
editlink: /leaks/Nintendo/SimCitySNES2DArt.md
updatedAt: '2026-03-30'
---

The Nintendo Gigaleak preserves a separate SimCity SNES art workspace under `other/NEWS/テープリストア/NEWS_04/home/sugiyama/SIM`.

Compared with the much broader Mario Kart `CAR` folder, `SIM` is smaller and more focused.
It is almost entirely menu, panel, input, and city-interface material, with a distinctive `.SFX` side format that appears to preserve tool metadata from the asset pipeline itself.

{% include_cached link-to-other-post.html post="/snes-file-formats" description="For a broader explanation of formats like `.SCR`, `.OBJ`, `.CGX`, `.COL`, and SimCity's `.SFX` sidecars, see the SNES file-format reference page." %}

---
## At a Glance
At the top level the `SIM` branch contains **85 entries**: **84 files** and one subdirectory called `is`.

Even before looking inside the files, the naming makes the workspace feel tightly scoped around SimCity SNES front-end and in-game UI production:

{% capture sim_body %}
Unlike the flatter Mario Kart art branch, SIM has both a clean top-level asset set and a second `is/` work area that looks like an internal staging or editor-side directory.
{% endcapture %}

{% capture sim_items %}
- icon=🖼️|Main UI screens - `SELECT-SCENARIO*`, `MAP-SELECT*`, `TOWN*`, `LEVEL*`, `SELECT*`
- icon=⌨️|Input and text layer - `INPUT*`, `MOJI.OBJ`, `OBJ-MOJI.CGX`, `KANJI.CGX`
- icon=🧰|Tool sidecars - `*.SFX` files beside the main screen families
- icon=🎛️|Shared UI banks - `icon_p*`, `iconpd*`, `optishd*`, `SAVED*`, `KAGE-G*`
- icon=🗃️|Revision trail - 37 `.BAK` files at the top level
- icon=📁|Internal work area - `is/` subdirectory with 81 more staging files
{% endcapture %}

{% include connected-folder-tree.html folder="SIM" path="NEWS_04/home/sugiyama/SIM" body=sim_body version="Sugiyama workspace snapshot" content=sim_items %}

The top-level file types break down like this:

Type | Count | What it preserves
---|---:|---
`.SCR` | 15 | Screen and panel layout data
`.CGX` | 17 | Character and tile graphics banks
`.COL` | 3 | Palette data
`.OBJ` | 3 | Object or object-text placement data
`.SFX` | 9 | Tool-side metadata files with embedded version strings
`.BAK` | 37 | Backup revisions of the current asset files

This is not a random pile of graphics exports.
It is a consistent UI-production branch with layout, graphics, palette, object, and tool-side files all surviving together.

---
## Archive Source
This page is based on Gigaleak NEWS_04 `home/sugiyama/SIM/`, part of **Tadashi Sugiyama's** wider multi-project workspace.

The project identification is straightforward from the filenames:

* `SELECT-SCENARIO`
* `MAP-SELECT`
* `TOWN`
* `LEVEL`
* `INPUT`
* `SAVED`

Those names line up very cleanly with the Super Famicom SimCity interface rather than with gameplay scenery, world art, or character animation.

---
## Glossary

* **SIM**: SimCity SNES UI and menu art workspace
* **SCR**: screen or panel layout data
* **OBJ**: object-side placement data, often for UI or object-form text
* **CGX**: character or tile graphics bank data
* **COL**: palette data
* **SFX**: 2 KB tool-side metadata file with an embedded `S-CG-CAD` version string
* **is**: internal subdirectory inside `SIM` that appears to preserve a second staging or editor-side work area

---
## What the Folder Preserves
This workspace preserves several different layers of SimCity SNES's visual production at once:

* scenario-select and map-select screens
* town and level UI screens
* input and key-entry surfaces
* text and kanji graphics
* object-form UI layouts
* icon, option-shadow, and save-panel graphics
* tool-side `.SFX` files paired with major UI families
* a second `is/` work area with many related but non-identical assets

That combination makes `SIM` more than just a texture dump.
It preserves both the visible UI assets and a surprisingly clear trail of how Nintendo's SimCity art tools were organizing them.

---
## What the File Formats Look Like
The `SIM` branch uses the same broad asset vocabulary seen in other NEWS_04 art folders, but in a much more focused UI-only mix.

### The SCR Files Look Like Layout Tables
All top-level `.SCR` files are exactly **8,960 bytes**, which strongly suggests a fixed editor-side layout format rather than arbitrary bitmap exports.

A few openings make that clear:

File | First 16-bit words
---|---
`SELECT-SCENARIO.SCR` | `0x0020`, `0x0021`, `0x0022`, `0x0023` ...
`MAP-SELECT.SCR` | `0xFFFF`, `0x0800`, `0x0801`, `0x0802` ...
`TOWN.SCR` | `0x0601`, `0x0601`, `0x0601`, `0x0601` ...
`BG2bit.SCR` | `0x0080`, `0x0081`, `0x0082`, `0x0083` ...

That pattern fits very well with structured 16-bit layout entries rather than raw graphics.

The reuse is also revealing.
`SELECT-SCENARIO.SCR` and `INPUT1.SCR` share the same opening run before diverging at byte `257`, while `MAP-SELECT.SCR` and `INPUT2-KEY.SCR` share the same opening pattern before diverging at byte `197`.
That makes the input screens look less like unrelated one-offs and more like screens built from shared menu templates.

### The OBJ Files Look Like UI Placement Data
The three top-level `.OBJ` files are all **13,568 bytes**:

* `INPUT.OBJ`
* `MOJI.OBJ`
* `SCENARIO.OBJ`

They are clearly not graphics banks.
Their first words break into repeated small numeric groups much more like object or placement records than tile art.

`MOJI.OBJ` and `SCENARIO.OBJ` are especially interesting because they sit beside text-facing assets like `KANJI.CGX` and `OBJ-MOJI.CGX`.
That makes them look like object-form text or UI layout data rather than generic sprite lists.

### The CGX and COL Files Fit a Clean UI Pipeline
The graphics and palette side is also very regular:

Type | Sizes seen | Reading
---|---|---
`.COL` | `1,024` bytes | palette tables
`.CGX` | `17,664` and `34,048` bytes | fixed-size tile graphics banks

The smaller `17,664` byte banks tend to show up in utility or low-level graphics sets like `BG2bit.CGX` and `KAGE-G.CGX`, while the larger `34,048` byte banks dominate the visible UI layer through `INPUT-BG.CGX`, `KANJI.CGX`, `OBJ-MOJI.CGX`, `icon_p.CGX`, `iconpd.CGX`, `optishd.CGX`, and `SAVED.CGX`.

That gives the whole branch a very editor-friendly shape:

* `.SCR` for layout
* `.OBJ` for object-side placement
* `.COL` for color tables
* `.CGX` for tile and text graphics

---
## The SFX Files Preserve Tool Metadata
The most distinctive technical artifact in `SIM` is the `.SFX` format.

All nine `.SFX` files are exactly **2,048 bytes**, and unlike the earlier stub page's guesswork, they do not look like vague runtime "effects" files.
They begin with clear ASCII headers:

File | Header text
---|---
`SELECT-SCENARIO.SFX` | `NAK1989 S-CG-CADVer1.21 900611`
`MAP-SELECT.SFX` | `NAK1989 S-CG-CADVer1.21 900611`
`SCENARIO.SFX` | `NAK1989 S-CG-CADVer1.21 900611`
`SELECT.SFX` | `NAK1989 S-CG-CADVer1.21 900611`
`LEVEL.SFX` | `NAK1989 S-CG-CADVer1.21 900611`
`INPUT.SFX` | `NAK1989 S-CG-CADVer1.13 900424`
`BG2bit.SFX` | `NAK1989 S-CG-CADVer1.13 900424`
`TOWN.SFX` | `NAK1989 S-CG-CADVer1.23 901226`

That is one of the clearest pipeline clues in the whole NEWS_04 restore.
These files preserve the signature of a dedicated `S-CG-CAD` tool, complete with version numbers and build dates embedded directly in the sidecar files.

The wider `NEWS_04` leak backs that interpretation up.
Outside `SIM`, Nintendo's workstation folders also preserve `.CAD_SRD` directories and `CAD.sfx_main.LST` manifests that point at `/usr/local/srd/cad/sfc/sfx_main.hex`, which makes the `S-CG-CAD` naming look like a real SRD toolchain component rather than a one-off SimCity quirk.

The payloads are not identical either.
The first `48` bytes stay the same within a tool version family, but the rest of each file hashes differently.
So the `.SFX` files look like per-screen metadata produced by the same graphics tool, not like generic empty headers stamped onto unrelated files.

The version spread is useful too:

* `Ver1.13` appears on `INPUT` and `BG2bit`
* `Ver1.21` appears on most of the main menu families
* `Ver1.23` appears on `TOWN`

That suggests the SIM branch captures more than one moment in the UI toolchain rather than one single export pass.

### Most of the SFX Payloads Are Sparse, but TOWN Is Not
The body of the `.SFX` files is also informative.
After the shared header, most of the screens only carry a small amount of nonzero data:

File | Nonzero bytes after header | Reading
---|---:|---
`BG2bit.SFX` | 37 | compact metadata block
`SELECT-SCENARIO.SFX` | 38 | compact metadata block
`SCENARIO.SFX` | 39 | compact metadata block
`SELECT.SFX` | 39 | compact metadata block
`INPUT-KEY.SFX` | 39 | compact metadata block
`INPUT.SFX` | 40 | compact metadata block
`MAP-SELECT.SFX` | 42 | compact metadata block
`LEVEL.SFX` | 44 | compact metadata block
`TOWN.SFX` | 918 | much denser metadata payload

That makes `TOWN.SFX` stand out immediately.
It is not just a newer header on the same kind of tiny sidecar.
It appears to preserve a much richer payload, which may reflect a more complex city-status screen or a later, more featureful version of the same authoring tool.

Even the compact files still differ from each other beyond the header.
So the safest reading is that these are screen-specific tool records, not one shared stub copied across the whole branch.

### A Closer Read of TOWN.SFX
`TOWN.SFX` deserves special attention because it behaves differently from the rest of the set.

The first thing it shares with the other files is the same overall structure:

* a `48`-byte ASCII tool header
* a mostly sparse block immediately after that
* a second active region beginning around offset `0x100`

But the density changes dramatically after that point.

Detail | `TOWN.SFX` | Typical `Ver1.21` file
---|---:|---:
Size | `2,048` bytes | `2,048` bytes
Header | `S-CG-CADVer1.23 901226` | `S-CG-CADVer1.21 900611`
Nonzero bytes after header | `918` | roughly `38` to `44`
Nonzero ranges after header | `67` | around `30` to `34`

So `TOWN.SFX` is not just a minor variant.
It looks like the same file type carrying much more real data.

The early payload still looks familiar.
Like the other `.SFX` files, it begins with tiny control values such as `0x0001` and `0x0100`, which suggests simple flags or counters rather than text or image data.
What changes is that `TOWN.SFX` keeps going.
Instead of collapsing back into near-empty space, it preserves many more populated ranges across the rest of the file.

The safest interpretation is that `TOWN.SFX` records a richer screen configuration than the other top-level UI sidecars.
That could mean more windows, more panel regions, more tool annotations, or simply a later tool version writing out more of its internal state.

Either way, `TOWN.SFX` is currently the best single candidate in the whole branch if you want to reverse the `S-CG-CAD` metadata format itself.

### TOWN.SFX Has a More Layered Internal Shape
Looking at the file in `16`-byte blocks makes the difference even clearer.

The early part of the payload still behaves like the other sidecars:

* tiny nonzero markers around offsets `0x30`, `0x40`, and `0x50`
* another sparse setup area beginning around `0x100`
* small flag-like values such as `0x0001`, `0x0100`, and `0x0200`

But after that, `TOWN.SFX` develops two much larger active regions:

Range | Behavior
---|---
`0x0200` to `0x02EF` | dense byte ramps and table-like data
`0x0320` to `0x03EF` | second dense region with long graded runs
`0x0400` to `0x05EF` | another structured block with many repeated low values and small control words

That is very different from the other `.SFX` files, which mostly go quiet after the first setup fields.

The middle ranges especially look table-driven.
They contain long ordered byte runs like `0x49 0x48 0x24 0x48 ...`, then broader descending and ascending sequences through values like `0x6b`, `0x66`, `0x63`, `0x62`, `0x74`, `0x72`, `0x4e`, and then long bands in the `0x2b` to `0x5c` range.

That does not read like text.
It looks much more like structured numeric data: screen parameters, lookup tables, curve data, or serialized region definitions from the CAD tool.

### The Later Blocks May Describe More Than One Screen Layer
The repeated shape of the lower blocks is another useful clue.

The region around `0x0400` starts with:

* `0x4948`, `0x4948`, `0x4c4b`
* short control-like values such as `0x0212`, `0x0606`, `0x0008`, `0x0911`

Then the region around `0x0500` begins in a very similar way:

* `0x4948`, `0x4948`, `0x4c4b`, `0x4b4d`
* another run of small control values and short tables

That repeated pattern suggests `TOWN.SFX` may be storing more than one closely related configuration block, perhaps for multiple windows, states, or layered panel definitions inside the town interface.

So while we still cannot name the exact fields, the file is clearly more than "a richer sidecar."
It appears to be a multi-block serialized tool record, probably describing several interlocking pieces of the SimCity town screen rather than one flat parameter list.

### A Working Offset Map for TOWN.SFX
The safest way to summarize the file now is as a set of regions rather than one opaque payload:

Range | Working reading
---|---
`0x0000` to `0x002f` | ASCII `S-CG-CAD` header and version string
`0x0030` to `0x005f` | tiny setup flags, mostly `0x0001` and `0x0100`
`0x0100` to `0x015f` | denser setup area with short control tables
`0x0200` to `0x02ef` | first major dense payload block
`0x0320` to `0x03ef` | second dense payload block with long graded runs
`0x0400` to `0x04ef` | structured lower block, likely one screen-state definition
`0x0500` to `0x05ef` | second lower block with a very similar shape

That does not prove the exact field names, but it does move the page beyond “this file is denser than the others.”
`TOWN.SFX` now looks like a multi-region serialized tool record with several linked configuration blocks inside it.

---
## The Main UI Families
The top-level names cluster into a few clear interface groups.

### Scenario and Selection Flow
The front-end entry path is the clearest part of the directory:

* `SELECT-SCENARIO.SCR`
* `SELECT-SCENARIO-2.SCR`
* `SELECT-SCENARIO.SFX`
* `SCENARIO.OBJ`
* `SCENARIO.SFX`
* `SELECT.SCR`
* `SELECT.SFX`

This looks like a layered scenario-selection stack rather than one finished menu screen.
There are separate layout files, object-side data, and tool sidecars all living under the same naming family.

### Map and Town Screens
The next layer looks like city-state and region-facing UI:

* `MAP-SELECT.SCR`
* `MAP-SELECT2.SCR`
* `MAP-SELECT.SFX`
* `TOWN.SCR`
* `TOWN2.SCR`
* `TOWN.SFX`
* `LEVEL1.SCR`
* `LEVEL2.SCR`
* `LEVEL.SFX`

This grouping is very menu-heavy and panel-heavy.
It does not look like gameplay scenery or simulation tile art.
It looks like the screens around choosing, viewing, and configuring city scenarios.

### Input and Text Handling
The input side is one of the most revealing parts of the whole branch:

* `INPUT-BG.CGX`
* `INPUT.OBJ`
* `INPUT.SFX`
* `INPUT-KEY.SFX`
* `INPUT1.SCR`
* `INPUT2-KEY.SCR`
* `INPUT2-PUSH.SCR`
* `INPUT-LEVEL.SCR`
* `MOJI.OBJ`
* `OBJ-MOJI.CGX`
* `KANJI.CGX`

This is the point where the branch stops looking like "menu screens" in a generic sense and starts looking like an actual UI production environment.
There are dedicated text graphics, object-form text layouts, background graphics, and multiple input-screen compositions all preserved together.

### The Text Layer Mixes Graphic Banks and Object-Form Layouts
The text side is especially revealing because it preserves both graphics and placement data.

`KANJI.CGX` is a large **34,048-byte** graphics bank, while `OBJ-MOJI.CGX` is another **34,048-byte** text-facing bank with very different binary structure.
Together they look like the core reusable text and glyph resources for the UI.

The two banks also differ quite a bit in character:

File | Size | Nonzero bytes | Unique byte values | Reading
---|---:|---:|---:|---
`KANJI.CGX` | `34,048` | `14,649` | `256` | broad, dense character inventory
`OBJ-MOJI.CGX` | `34,048` | `10,046` | `205` | more UI-facing or object-text-focused bank

So even though the files are the same size, they do not look like clones with different names.
`KANJI.CGX` appears to preserve the wider character set, while `OBJ-MOJI.CGX` looks more shaped around assembled UI text usage.

The object side is a little stranger:

* `MOJI.OBJ` is **13,568 bytes**
* `SCENARIO.OBJ` is also **13,568 bytes**
* `INPUT.OBJ` is **13,568 bytes**

`MOJI.OBJ` and `SCENARIO.OBJ` are not just similar in shape.
They have the same hash and the same opening records, which suggests the same underlying object-layout container was being reused under different UI-facing names.

`INPUT.OBJ`, by contrast, opens with a different set of repeating 3-word groups and looks like a distinct placement set tailored to the input flow.

That split is clearer if you compare the first few record triples:

File | First 3-word records | Reading
---|---|---
`MOJI.OBJ` | `[0x0080, 0xCAB2, 0x3030]`, `[0x0080, 0xCAAA, 0x2030]`, `[0x0080, 0x18C0, 0x8C30]` | text-facing object layout
`SCENARIO.OBJ` | same opening triples as `MOJI.OBJ` | reused or near-identical layout container
`INPUT.OBJ` | `[0x0000, 0xE0E0, 0x7130]`, `[0x0000, 0xE8E0, 0x6130]`, `[0x0000, 0xF0E0, 0x7030]` | separate input-specific placement structure

`INPUT.OBJ` also starts with more zero-led triples than the other two.
That makes it feel less like a generic text-placement file and more like a dedicated object-layout surface for the input workflow itself.

That gives the text layer a nice split:

* `KANJI.CGX` and `OBJ-MOJI.CGX` as reusable graphics banks
* `MOJI.OBJ` / `SCENARIO.OBJ` / `INPUT.OBJ` as object-side placement or assembly data for those graphics

So the branch is not only storing finished menu screens.
It still preserves the lower-level machinery needed to build text-bearing UI panels out of reusable graphics and object records.

### Shared Banks, Icons, and Save-Side UI
The remaining graphics banks look like reusable panel or HUD assets rather than one-screen specials:

* `icon_p.CGX`, `icon_p-F.CGX`, `icon_p-G.CGX`
* `iconpd.CGX`, `iconpd-F.CGX`, `iconpd-G.CGX`
* `optishd.CGX`, `optishd-F.CGX`, `optishd-G.CGX`
* `SAVED.CGX`, `SAVED-F.CGX`
* `ICON-GGG.CGX`
* `KAGE-G.CGX`

The repeated `-F` and `-G` suffixes make these look like state or variant banks rather than separate unrelated graphics sets.
That is exactly the sort of naming you would expect in a menu-heavy simulation game with repeated panel states and icon modes.

---
## The is Subdirectory Looks Like an Internal Work Area
The lone `is/` directory is not just noise.
It contains **81** more files of its own:

Type | Count in `is/`
---|---:
`.CGX` | 25
`.COL` | 11
`.SCR` | 20
`.BAK` | 24
`.old` | 1

This is much more than a tiny support folder.
It is effectively a second SIM asset workspace, with many lowercase or shortened names and several files that have no top-level equivalent at all:

* `menu.CGX`, `menu.SCR`, `menu.COL`
* `sim.CGX`
* `start.SCR`, `start.COL`, `start-ma.SCR`
* `samp.CGX`, `samp.COL`, `samp.SCR`, `samp1.SCR`
* `bank.CGX`, `bank.SCR`, `bank.COL`, `bank-ji.SCR`
* `city.SCR`, `bud.SCR`, `eva.SCR`, `waku.SCR`, `rrr.SCR`

Even where the names line up, the files are usually not identical.
For example:

* top-level `BG2bit.CGX`, `BG2bit.COL`, and `BG2bit.SCR` all differ from `is/bg2bit.*`
* `INPUT-BG.CGX` differs from `is/input-bg.CGX`
* `OBJ-MOJI.CGX` differs from `is/obj-moji.CGX`
* `icon_p.CGX` differs from `is/icon-p.CGX`
* top-level `KANJI.CGX` is **34,048 bytes**, while `is/kanji.CGX` is **17,664 bytes**

That makes `is/` look much more like an internal staging or editor-side work area than a plain backup copy of the top level.

### The is Directory Has Its Own Internal Families
The `is/` branch also has a stronger internal structure than the top level.
Its families cluster into a few clear groups:

Family | Example files | Reading
---|---|---
Core menu banks | `menu.CGX`, `menu.COL`, `menu.SCR` | generic menu composition set
Start and setup | `start.SCR`, `start.COL`, `start-ma.SCR` | start-screen and entry-state assets
Bank or reference sets | `bank.CGX`, `bank.COL`, `bank.SCR`, `bank-ji.SCR` | likely editor-side reference or staging screens
Map and city support | `map-1.CGX`, `map-map.CGX`, `mapname.CGX`, `city.SCR`, `bud.SCR`, `eva.SCR` | city and map-support assets
Text banks | `moji.CGX`, `mojiA.CGX`, `kanji.CGX`, `obj-moji.CGX` | alternate text and object-text resources
Icon and object banks | `icon-p.CGX`, `micon.CGX`, `newobj.CGX`, `optish.CGX` | reusable UI and object-support sets
Samples and tests | `samp.CGX`, `samp.COL`, `samp.SCR`, `samp1.SCR` | likely sample or test screens

That makes `is/` feel less like "the same files but lower case" and more like a hands-on work area where generic menu resources, sample screens, and alternate text/icon banks were being tried out alongside the named production assets at the top level.

### The Text and Glyph Side in is Is Richer Than the Top Level
The `is/` directory is also where the deepest text and glyph material lives.

The key families are:

* `moji.CGX`, `moji.CGX.BAK`, `moji.CGX.old`
* `mojiA.CGX`, `mojiA.CGX.BAK`
* `kanji.CGX`, `kanji.CGX.BAK`
* `obj-moji.CGX`
* `select.CGX`, `select.CGX.BAK`
* `sel.CGX`, `sel.CGX.BAK`
* `bank-ji.SCR`
* `NIN.SCR` and `nin.SCR.BAK`

That is already more varied than the top level.
Instead of one `KANJI` bank and one `OBJ-MOJI` bank, the staging area keeps multiple text-bank variants, dedicated select-screen banks, and at least one screen file whose name directly points at kanji handling.

### The Smaller Banks Look Like a Separate Text Tier
One of the clearest patterns in `is/` is the split between smaller `17,664` byte text banks and larger `34,048` byte UI banks.

File | Size | Reading
---|---:|---
`moji.CGX` | `17,664` bytes | compact general text bank
`mojiA.CGX` | `17,664` bytes | alternate compact text bank
`kanji.CGX` | `17,664` bytes | compact kanji-side bank
`obj-moji.CGX` | `34,048` bytes | larger object-text bank
`select.CGX` | `34,048` bytes | large select-screen text/UI bank
`sel.CGX` | `34,048` bytes | alternate select-side text/UI bank

That looks like a real tier split inside the editor pipeline:

* smaller banks for low-level reusable text resources
* larger banks for assembled UI-facing text and panel graphics

The top level hints at the same idea, but `is/` makes it much clearer.

### moji and mojiA Look Closely Related, While kanji Is Structurally Distinct
The three smaller text banks are not all doing the same job.

`moji.CGX` and `mojiA.CGX` are very close:

* same size at `17,664` bytes
* same broad opening structure
* first binary difference at byte `253`
* similar nonzero-byte counts, with `6,965` for `moji` and `5,804` for `mojiA`

That makes them look like two nearby revisions or variants of the same general text-bank family.

`kanji.CGX` is different much earlier.
It diverges from both `moji` and `mojiA` at byte `9`, and its opening values are visibly less like the very sparse `moji` headers.
It also carries fewer unique byte values overall.

So the safest reading is:

* `moji` and `mojiA` are sibling banks in the same general text tier
* `kanji` is a separate bank with a different glyph inventory and a different structural role

That lines up nicely with the names.
The smaller text tier does not just hold "font data" in the abstract.
It appears to separate ordinary menu text from a more specialized kanji-side bank.

### The Stability Pattern Also Tells a Story
The revision pattern across the three banks is useful too.

* `moji.CGX` differs from both its `.BAK` and `.old` forms
* `mojiA.CGX` differs from its `.BAK`
* `kanji.CGX` is identical to `kanji.CGX.BAK`

That makes `kanji` look comparatively settled, while the general-purpose `moji` banks were still moving.

For a UI-heavy project, that makes sense.
The broader menu text banks would be more likely to keep changing as screens and labels were revised, while a larger kanji bank could stabilize earlier if it was acting as a more general reusable character source.

### The Revision Trail Shows Text Assets Were Still Moving
The text banks inside `is/` also preserve a strong revision story:

* `moji.CGX` differs from `moji.CGX.BAK`, with the first change at byte `2,361`
* `moji.CGX` also differs from `moji.CGX.old`, with the first change at byte `253`
* `mojiA.CGX` differs from `mojiA.CGX.BAK`, with the first change at byte `2,377`
* `select.CGX` differs from `select.CGX.BAK`, with the first change at byte `16,427`
* `sel.CGX` differs from `sel.CGX.BAK`, with the first change at byte `9,737`

That is a useful spread.
Some changes happen quite early in the file, while others land much later, which suggests these were real edits to the bank contents rather than automatic timestamp churn or metadata noise.

`kanji.CGX` is the main stable exception here.
It is identical to `kanji.CGX.BAK`, which suggests at least one part of the text pipeline had already settled while other banks were still being revised.

### bank-ji and NIN Look Like Special-Purpose Screen Sets
The screen side adds two especially interesting outliers:

* `bank-ji.SCR` at the standard `8,960` bytes
* `NIN.SCR` at a much larger `16,640` bytes, with `nin.SCR.BAK` surviving at `8,192` bytes

`bank-ji.SCR` opens with repeated `0x03FF` words, while `NIN.SCR` opens with repeated `0x02FF` words.
Those are unusually rigid patterns even by the standards of the other `.SCR` files, which makes both files look like dedicated utility or special-purpose text screens rather than ordinary menu layouts.

The naming hints at two different roles:

* `bank-ji` looks like a kanji-related bank or reference screen
* `NIN` may be a branding or Nintendo-specific presentation screen

Even without a full format decode, they are strong evidence that `is/` was carrying not just production screens, but also helper layouts and text-bank support surfaces for the UI toolchain itself.

### The is Directory Also Preserves Its Own Revision Story
The `is/` folder has **24** `.BAK` files of its own plus one `moji.CGX.old`.
That is a nice clue that this was still an actively edited branch, not just a static mirror of the parent directory.

The most visibly revised groups inside `is/` include:

* `bank.*`
* `kanji.CGX`
* `moji.CGX` and `mojiA.CGX`
* `select.CGX`
* `icon-*`, `micon-*`, `newobj-*`, and `optish-*`
* `sim.CGX`

That combination reinforces the same general picture as the top level.
This was a UI-production workspace with real iteration history, not a stripped-down art export folder.

---
## What the Backup Trail Shows
The top-level revision trail is smaller than Mario Kart's, but it is still very revealing.

There are **37** `.BAK` files at the top level, and they split like this:

Extension | Count
---|---:
`.SCR.BAK` | 14
`.CGX.BAK` | 13
`.SFX.BAK` | 6
`.OBJ.BAK` | 3
`.COL.BAK` | 1

That pattern is useful.
The SIM branch was preserving not only layout and graphics revisions, but also tool-side `.SFX` revisions.
That strengthens the case that `.SFX` was part of the active authoring workflow rather than dead baggage.

The main revision clusters are easy to spot:

* `SELECT-SCENARIO*`
* `INPUT*`
* `MAP-SELECT*`
* `TOWN*`
* `LEVEL*`
* `icon_p*`, `iconpd*`, and `optishd*`

So the heaviest visible churn was concentrated in exactly the parts of the game where a simulation UI would need lots of tuning: scenario flow, input flow, town display, and reusable panel/icon banks.

---
## Interpretation
The `SIM` branch is one of the cleanest UI-production artifacts in Sugiyama's NEWS_04 workspace.

What makes it especially valuable is not just that it preserves SimCity SNES front-end graphics.
It also preserves the structure of the tool pipeline around them:

* fixed layout, object, palette, and graphics formats
* per-screen `.SFX` sidecars with embedded `S-CG-CAD` tool versions
* a separate `is/` work area with related but non-identical staging assets
* a meaningful `.BAK` trail across both screens and tool-side files

That makes this page a much better complement to source-code-oriented leak analysis.
Instead of showing how SimCity SNES was programmed, `SIM` shows how its screen-heavy interface was actually built, revised, and organized on the art side.
