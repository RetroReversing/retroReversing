---
layout: post
tags:
- snes
- fileformats
title: Super Famicom / SNES File Formats
category: snes
permalink: /snes-file-formats
breadcrumbs:
  - name: Home
    url: /
  - name: Super Nintendo (Super Famicom)
    url: /snes
  - name: SNES File Formats
    url: #
recommend:
- snes
- fileformats
editlink: /consoles/snes/SNESFileFormats.md
updatedAt: '2026-03-31'
excerpt: SNES file formats from leaked Nintendo workspaces and source trees
---

# Super Famicom / SNES File Formats
This page covers the main file formats that now show up clearly in leaked Nintendo Super Famicom workspaces.

The most useful recent evidence comes from the Super Mario Kart source and art branches, the SimCity SNES `SIM` workspace, the Zelda SNES art folders, and the SFX-DOS environment. That gives us a much firmer basis than older “maybe this means screen data” style guesses.

{% include link-to-other-post.html post="/super-mario-kart-source-code" description="For a full source-side view of these formats in practice, see the Super Mario Kart source page." %}

---
## Source and Build Files
The code-side SNES leaks preserve a fairly standard Nintendo workstation mix of assembly, definitions, linkable outputs, and makefiles.

Extension | What it usually is | What we now know
---|---|---
`.ASM` | 65c816 assembly source | The main source form in Super Mario Kart and F-Zero. Real game logic, editor code, runtime systems, and tools all survive in `.asm`
`.DEF` | Definition or include file | Used for shared constants, labels, WRAM layouts, and structured symbol definitions such as `work.def` and `label.def`
`.REL` | Relocatable object or linked module | Shows up in SNES build flows like F-Zero as an intermediate or link-target file rather than plain source
`.MAKE` / `makefile` | Build recipe | Nintendo source trees preserve makefiles that show the real module list and regional build differences
`.BAT` | DOS build or helper script | Common in the broader SNES tooling ecosystem, especially where assets or editors were launched from DOS environments

The main lesson from the leaks is that Nintendo did not keep source and content tooling neatly separated.
Editor code, game code, support libraries, and content pipelines often lived in the same project tree.

---
## Graphics, Layout, and UI Formats
The workstation-side asset formats are where the recent leak work has taught us the most.
The deeper breakdown below now follows the same order the data tends to build up in practice: palette data in `.COL`, tile graphics in `.CGX`, then composed screen layouts in `.SCR`.

Extension | What it usually is | What we now know
---|---|---
`.SCR` | Screen or layout table | In the Mario Kart and SimCity art workspaces these are not raw images. They are fixed-layout screen or tile composition files, very often `8,960` bytes, built from structured 16-bit entries
`.OBJ` | Object or object-layout data | In Mario Kart and SimCity these are fixed-capacity object-layout containers, often `13,568` bytes, with repeated short record patterns rather than graphic data
`.CGX` | Character or tile graphics bank | One of the main Nintendo workstation graphics formats. In the art branches it holds text banks, menu graphics, object graphics, environment banks, and larger panel or HUD graphics
`.COL` | Palette data | Packed color tables. In Mario Kart and SimCity these are very often `1,024` bytes and sit directly beside `SCR` and `CGX` files
`.MAP` | Map or area data | Seen heavily in Zelda SNES and the Mario Kart source tree. The name covers editable layout-side map resources rather than final ROM-only representations
`.MD7` | Raw Mode 7 map data | Clearly visible in the Mario Kart art branch as `32,768` byte map files like `C.MD7` and `S.MD7`
`.BAK` | Backup revision | Not a format in the gameplay sense, but an important part of how Nintendo workspaces were preserved. These are real earlier revisions, not just meaningless duplicates
`.old` | Older saved revision | Rare but very useful. In SimCity `moji.CGX.old` shows that some banks kept an edit trail beyond the usual `.BAK` pattern

The important pattern is that Nintendo's art-side SNES folders preserve layout, object placement, palette, and graphics as separate editable layers.
They were not just painting final screens and baking them immediately into ROM.

---
## What the Wider Leak Adds
The strongest new clue does not come from a single game folder.
It comes from the wider `NEWS_04` restore, where Nintendo's workstation files preserve the CAD tool's own native working area.

The most useful paths are:

* `home/sugiyama/.CAD_SRD/`
* `home/arimoto/.CAD_SRD/`
* `home/arimoto/CAD_ERR.TXT`
* `home/sugiyama/SAMPLE.sfx_main.LST`
* `home/sugiyama/.CAD_SRD/CAD.sfx_main.LST`

That matters because `.CAD_SRD` is not a game-specific UI folder.
It is a tool-side workspace that stores the same format family directly:

Type | Example files | What this confirms
---|---|---
`.SCR` | `CAD-0.SCR` to `CAD-3.SCR` | the CAD environment used fixed `8,960` byte screen containers natively
`.CGX` | `CAD-0.CGX` to `CAD-3.CGX` | graphics banks were grouped into numbered CAD pages
`.COL` | `CAD-0.COL` to `CAD-3.COL` | palette data was kept beside each CAD page
`.OBJ` | `CAD-0.OBJ` to `CAD-3.OBJ` | object data was a first-class CAD layer, not a later runtime-only export
`.OBX` | `CAD-0.OBX`, `CAD-3.OBX` | the tool also had a larger object-adjacent companion format with its own `S-CG-CAD` header
`.DAT` / `.LST` | `CAD.sfx_main.DAT`, `CAD.sfx_main.LST` | the CAD tool kept its own loader and asset manifest sidecars

The `CAD.sfx_main.LST` files are the best single provenance artifact.
They explicitly point at the tool-side loader path:

`/usr/local/srd/cad/sfc/sfx_main.hex`

and then list the asset groups the tool expected to manage:

* `CAD-0.CGX` to `CAD-3.CGX`
* `CAD-0.OBJ` to `CAD-3.OBJ`
* `CAD-0.COL` to `CAD-3.COL`

That means the current format story is no longer just that these files happen to sit beside each other in game branches.
Nintendo's own CAD workspace and loader manifests treat them as linked editable layers.

The small `CAD_ERR.TXT` log supports that too.
It records an object pass from `OBJ Number = 0` through `OBJ Number = 3`, which matches the numbered CAD pages and makes the object-bank model much harder to dismiss as coincidence.

Another useful trace survives in `CAD_pglist.dat`, where `sfx_main` is listed under the Japanese heading `転送プログラム`, or "transfer program."
That makes `sfx_main` look less like a passive file suffix and more like a real CAD-side transfer component in the SRD workstation pipeline.

The numbered CAD samples also make it easier to separate per-format roles.
`CAD-0.SCR`, `CAD-0.CGX`, `CAD-0.COL`, and `CAD-0.OBJ` all begin with live data immediately, while formats like `CAD-0.OBX` and some `CAD-3` variants keep large silent regions before their active blocks.
That is another good sign that Nintendo's toolchain was using several related containers for different stages of the same screen or object workflow rather than one generic binary dump.

---
## What COL Looks Like in Practice
`.COL` looks much more like raw palette data than older writeups tended to imply.

In both Mario Kart and SimCity:

* many `.COL` files are exactly `1,024` bytes
* they sit directly beside matching `.SCR` and `.CGX` files
* their contents read as packed little-endian color words rather than text or layout records

So the practical reading is simple:

* `.CGX` is the graphics bank
* `.COL` is the matching color table

`.COL` is usually an editor-side companion to a particular screen or graphics family rather than a project-global palette blob.
That is why the files so often sit directly beside matching `SCR` and `CGX` names.

For Super Mario Kart specifically, this matches how modern editors like Epic Edit read the format:

* raw SNES CGRAM-style palette data
* `BGR555` packed colors
* `16` colors per palette row
* `2` bytes per color
* little-endian 16-bit words on disk

You can inspect a `.COL` file directly below.
This viewer groups the file into 16-color rows and renders each entry as a swatch using the same `BGR555` decoding described above.

<rr-sandpack
  template="react-ts"
  app="/public/js/sandpack/examples/SnesColPaletteViewer.tsx">
</rr-sandpack>

The CAD samples make the palette reading even stronger.
`CAD-0.COL` opens with words like:

* `0x7FFF`
* `0x7359`
* `0x5A93`
* `0x4A0F`
* `0x41CD`

Those are exactly the kind of low 15-bit values you would expect from packed SNES palette entries rather than layout or text data.
The file is also only partly populated near the end, which fits an editor-side palette bank with unused slots better than a compressed blob or opaque runtime structure.

### COL Looks Like a 512-Entry Palette Bank
The size lines up neatly with a palette model too.

An ordinary `1,024` byte `.COL` file contains:

* `512` little-endian 16-bit words
* which divides cleanly into `32` groups of `16` colors

The structural model is:

* `.COL` is a 32-row palette bank
* each row holds 16 colors
* the rows were consumed by different screen, tile, or object groups inside the CAD environment

This fits the data better than treating the file as one flat pool of unrelated colors, because the values keep clustering cleanly into 16-color runs across multiple projects.

Representative examples:

File | Size | 16-color rows | Reading
---|---:|---:|---
`CAD-0.COL` | `1,024` | `32` | CAD-native palette bank with a dense first half and a sparse second half
SimCity `BG2bit.COL` | `1,024` | `32` | UI palette bank with many row-zero black entries
Mario Kart `TITLE.COL` | `1,024` | `32` | title-screen palette bank with bright gradients and extra spare rows

The first half of the file is usually much denser than the second.
For example:

* `CAD-0.COL` has `227` nonzero colors in the first `256` entries, but only `47` in the second half
* SimCity `BG2bit.COL` has `230` nonzero colors in the first half, `127` in the second
* Mario Kart `TITLE.COL` has `237` nonzero colors in the first half, `137` in the second

The later rows were often reserved, unused, or only partly populated rather than being a mandatory second image-sized block.

### The First Entry in a 16-Color Row Often Behaves Like Transparency
Another recurring pattern is what happens every 16 words.

In several files, the first color in many rows is `0x0000`.
That is especially obvious in SimCity `BG2bit.COL`, where the first entry of many 16-color groups is black:

* row `0` starts with `0x0000`
* row `1` starts with `0x0000`
* row `2` starts with `0x0000`
* row `3` starts with `0x0000`

That is exactly the sort of pattern you would expect if the format was organized around 16-color SNES palettes where color slot `0` often acts as a transparent or backdrop color.

The same pattern is weaker but still visible in the CAD and Mario Kart files.
So `.COL`:

* stores palette rows, not arbitrary standalone colors
* many rows keep a conventional slot-zero black or transparent-like entry
* is closely aligned with real SNES color usage rather than being a workstation-only abstract color list

### The Words Decode Cleanly as SNES-Style Colors
The color values themselves also decode sensibly if read as SNES-style 15-bit colors.

For example, Mario Kart `TITLE.COL` begins with:

* `0x7FFF`
* `0x7FDE`
* `0x7FBD`
* `0x7B7B`
* `0x7739`

Those all resolve into high-intensity stepped RGB values, exactly what you would expect from a bright title-screen gradient.

SimCity `BG2bit.COL` is more muted:

* `0x08AA`
* `0x0447`
* `0x4652`
* `0x35CE`

and the CAD-native `CAD-0.COL` sits somewhere between them, with strong whites, grays, and accent colors.

That does not tell us everything about the CAD tool's own UI conventions, but it does confirm that the words are behaving like real SNES CGRAM-style `BGR555` colors rather than arbitrary IDs or offsets.

A few swatches make the point much more clearly than hex alone:

Value | Sample source | Approximate color | Swatch
---|---|---|---
`0x7FFF` | Mario Kart `TITLE.COL` | bright white | <span style="display:inline-block;width:3em;height:1.2em;background:#ffffff;border:1px solid #888;"></span>
`0x7FDE` | Mario Kart `TITLE.COL` | cool off-white | <span style="display:inline-block;width:3em;height:1.2em;background:#f7f7ff;border:1px solid #888;"></span>
`0x7B7B` | Mario Kart `TITLE.COL` | pale blue-gray | <span style="display:inline-block;width:3em;height:1.2em;background:#dedef7;border:1px solid #888;"></span>
`0x7359` | CAD `CAD-0.COL` | light steel blue | <span style="display:inline-block;width:3em;height:1.2em;background:#ced6e7;border:1px solid #888;"></span>
`0x5A93` | CAD `CAD-0.COL` | muted gray-blue | <span style="display:inline-block;width:3em;height:1.2em;background:#9ca5b5;border:1px solid #888;"></span>
`0x4A0F` | CAD `CAD-0.COL` | darker slate blue | <span style="display:inline-block;width:3em;height:1.2em;background:#7b8494;border:1px solid #888;"></span>
`0x08AA` | SimCity `BG2bit.COL` | warm brown | <span style="display:inline-block;width:3em;height:1.2em;background:#522910;border:1px solid #888;"></span>
`0x0447` | SimCity `BG2bit.COL` | deep brown | <span style="display:inline-block;width:3em;height:1.2em;background:#391008;border:1px solid #888;"></span>
`0x4652` | SimCity `BG2bit.COL` | neutral gray | <span style="display:inline-block;width:3em;height:1.2em;background:#94948c;border:1px solid #888;"></span>
`0x35CE` | SimCity `BG2bit.COL` | darker gray | <span style="display:inline-block;width:3em;height:1.2em;background:#73736b;border:1px solid #888;"></span>

<img src="/public/images/snes/Super_Mario_Kart-title.png" class="wow slideInLeft postImage" />

Mario Kart `TITLE.COL` is also a good worked example because the first `16` rows really do look like screen palette rows, while row `16` onward turns into CAD-side metadata and trailer data rather than more title colors.

Here are the first `16` palette rows from the title screen as full swatches:

<div style="overflow-x:auto;">
<table>
<thead>
<tr>
<th>Row</th>
<th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
<th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th>
</tr>
</thead>
<tbody>
<tr><td><code>00</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#f7f7ff;color:#000;border:1px solid #999;"><code>7FDE</code></td><td style="padding:0.2em;text-align:center;background:#efefff;color:#000;border:1px solid #999;"><code>7FBD</code></td><td style="padding:0.2em;text-align:center;background:#dedef7;color:#000;border:1px solid #999;"><code>7B7B</code></td><td style="padding:0.2em;text-align:center;background:#ceceef;color:#000;border:1px solid #999;"><code>7739</code></td><td style="padding:0.2em;text-align:center;background:#bdbdef;color:#000;border:1px solid #999;"><code>76F7</code></td><td style="padding:0.2em;text-align:center;background:#adadde;color:#000;border:1px solid #999;"><code>6EB5</code></td><td style="padding:0.2em;text-align:center;background:#9c9cce;color:#000;border:1px solid #999;"><code>6673</code></td><td style="padding:0.2em;text-align:center;background:#8c8cbd;color:#fff;border:1px solid #999;"><code>5E31</code></td><td style="padding:0.2em;text-align:center;background:#7b7bad;color:#fff;border:1px solid #999;"><code>55EF</code></td><td style="padding:0.2em;text-align:center;background:#6b6ba5;color:#fff;border:1px solid #999;"><code>51AD</code></td><td style="padding:0.2em;text-align:center;background:#5a5a94;color:#fff;border:1px solid #999;"><code>496B</code></td><td style="padding:0.2em;text-align:center;background:#4a4a7b;color:#fff;border:1px solid #999;"><code>3D29</code></td><td style="padding:0.2em;text-align:center;background:#292929;color:#fff;border:1px solid #999;"><code>14A5</code></td></tr>
<tr><td><code>01</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#e7e7e7;color:#000;border:1px solid #999;"><code>739C</code></td><td style="padding:0.2em;text-align:center;background:#f7ce84;color:#000;border:1px solid #999;"><code>433E</code></td><td style="padding:0.2em;text-align:center;background:#d6ad63;color:#000;border:1px solid #999;"><code>32BA</code></td><td style="padding:0.2em;text-align:center;background:#a57b4a;color:#fff;border:1px solid #999;"><code>25F4</code></td><td style="padding:0.2em;text-align:center;background:#846331;color:#fff;border:1px solid #999;"><code>1990</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#a50000;color:#fff;border:1px solid #999;"><code>0014</code></td><td style="padding:0.2em;text-align:center;background:#730000;color:#fff;border:1px solid #999;"><code>000E</code></td><td style="padding:0.2em;text-align:center;background:#00bd00;color:#fff;border:1px solid #999;"><code>02E0</code></td><td style="padding:0.2em;text-align:center;background:#52bdff;color:#000;border:1px solid #999;"><code>7EEA</code></td><td style="padding:0.2em;text-align:center;background:#639cf7;color:#fff;border:1px solid #999;"><code>7A6C</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#292929;color:#fff;border:1px solid #999;"><code>14A5</code></td></tr>
<tr><td><code>02</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#e7e7e7;color:#000;border:1px solid #999;"><code>739C</code></td><td style="padding:0.2em;text-align:center;background:#f7ce84;color:#000;border:1px solid #999;"><code>433E</code></td><td style="padding:0.2em;text-align:center;background:#d6ad63;color:#000;border:1px solid #999;"><code>32BA</code></td><td style="padding:0.2em;text-align:center;background:#a57b4a;color:#fff;border:1px solid #999;"><code>25F4</code></td><td style="padding:0.2em;text-align:center;background:#846331;color:#fff;border:1px solid #999;"><code>1990</code></td><td style="padding:0.2em;text-align:center;background:#00ef00;color:#fff;border:1px solid #999;"><code>03A0</code></td><td style="padding:0.2em;text-align:center;background:#00a500;color:#fff;border:1px solid #999;"><code>0280</code></td><td style="padding:0.2em;text-align:center;background:#008400;color:#fff;border:1px solid #999;"><code>0200</code></td><td style="padding:0.2em;text-align:center;background:#730000;color:#fff;border:1px solid #999;"><code>000E</code></td><td style="padding:0.2em;text-align:center;background:#52bdff;color:#000;border:1px solid #999;"><code>7EEA</code></td><td style="padding:0.2em;text-align:center;background:#639cf7;color:#fff;border:1px solid #999;"><code>7A6C</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#292929;color:#fff;border:1px solid #999;"><code>14A5</code></td></tr>
<tr><td><code>03</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#f7c600;color:#000;border:1px solid #999;"><code>031E</code></td><td style="padding:0.2em;text-align:center;background:#639cf7;color:#fff;border:1px solid #999;"><code>7A6C</code></td><td style="padding:0.2em;text-align:center;background:#00ef00;color:#fff;border:1px solid #999;"><code>03A0</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#c6ad63;color:#000;border:1px solid #999;"><code>32B8</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#e7ce84;color:#000;border:1px solid #999;"><code>433C</code></td><td style="padding:0.2em;text-align:center;background:#bdef73;color:#000;border:1px solid #999;"><code>3BB7</code></td><td style="padding:0.2em;text-align:center;background:#ffffb5;color:#000;border:1px solid #999;"><code>5BFF</code></td><td style="padding:0.2em;text-align:center;background:#d6ff84;color:#000;border:1px solid #999;"><code>43FA</code></td><td style="padding:0.2em;text-align:center;background:#94ef73;color:#000;border:1px solid #999;"><code>3BB2</code></td><td style="padding:0.2em;text-align:center;background:#ffffb5;color:#000;border:1px solid #999;"><code>5BFF</code></td><td style="padding:0.2em;text-align:center;background:#adff84;color:#000;border:1px solid #999;"><code>43F5</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td></tr>
<tr><td><code>04</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#007300;color:#fff;border:1px solid #999;"><code>01C0</code></td><td style="padding:0.2em;text-align:center;background:#739494;color:#fff;border:1px solid #999;"><code>4A4E</code></td><td style="padding:0.2em;text-align:center;background:#940000;color:#fff;border:1px solid #999;"><code>0012</code></td><td style="padding:0.2em;text-align:center;background:#00ff00;color:#fff;border:1px solid #999;"><code>03E0</code></td><td style="padding:0.2em;text-align:center;background:#00d600;color:#fff;border:1px solid #999;"><code>0340</code></td><td style="padding:0.2em;text-align:center;background:#00ad00;color:#fff;border:1px solid #999;"><code>02A0</code></td><td style="padding:0.2em;text-align:center;background:#ffbd00;color:#000;border:1px solid #999;"><code>02FF</code></td><td style="padding:0.2em;text-align:center;background:#bd7b00;color:#fff;border:1px solid #999;"><code>01F7</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>05</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#de9c21;color:#000;border:1px solid #999;"><code>127B</code></td><td style="padding:0.2em;text-align:center;background:#7b7b7b;color:#fff;border:1px solid #999;"><code>3DEF</code></td><td style="padding:0.2em;text-align:center;background:#e7ad8c;color:#000;border:1px solid #999;"><code>46BC</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#a50000;color:#fff;border:1px solid #999;"><code>0014</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#0084ff;color:#fff;border:1px solid #999;"><code>7E00</code></td><td style="padding:0.2em;text-align:center;background:#0000e7;color:#fff;border:1px solid #999;"><code>7000</code></td><td style="padding:0.2em;text-align:center;background:#ad7b5a;color:#fff;border:1px solid #999;"><code>2DF5</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>06</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#b50000;color:#fff;border:1px solid #999;"><code>0016</code></td><td style="padding:0.2em;text-align:center;background:#7b7b7b;color:#fff;border:1px solid #999;"><code>3DEF</code></td><td style="padding:0.2em;text-align:center;background:#e7ad8c;color:#000;border:1px solid #999;"><code>46BC</code></td><td style="padding:0.2em;text-align:center;background:#00ff00;color:#fff;border:1px solid #999;"><code>03E0</code></td><td style="padding:0.2em;text-align:center;background:#00b500;color:#fff;border:1px solid #999;"><code>02C0</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#0084ff;color:#fff;border:1px solid #999;"><code>7E00</code></td><td style="padding:0.2em;text-align:center;background:#0000e7;color:#fff;border:1px solid #999;"><code>7000</code></td><td style="padding:0.2em;text-align:center;background:#ad7b5a;color:#fff;border:1px solid #999;"><code>2DF5</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>07</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#a5735a;color:#fff;border:1px solid #999;"><code>2DD4</code></td><td style="padding:0.2em;text-align:center;background:#b50000;color:#fff;border:1px solid #999;"><code>0016</code></td><td style="padding:0.2em;text-align:center;background:#efbda5;color:#000;border:1px solid #999;"><code>52FD</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#ffb5b5;color:#000;border:1px solid #999;"><code>5ADF</code></td><td style="padding:0.2em;text-align:center;background:#ff5a5a;color:#fff;border:1px solid #999;"><code>2D7F</code></td><td style="padding:0.2em;text-align:center;background:#de9c21;color:#000;border:1px solid #999;"><code>127B</code></td><td style="padding:0.2em;text-align:center;background:#d6a58c;color:#000;border:1px solid #999;"><code>469A</code></td><td style="padding:0.2em;text-align:center;background:#bd7b00;color:#fff;border:1px solid #999;"><code>01F7</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>08</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#007300;color:#fff;border:1px solid #999;"><code>01C0</code></td><td style="padding:0.2em;text-align:center;background:#739494;color:#fff;border:1px solid #999;"><code>4A4E</code></td><td style="padding:0.2em;text-align:center;background:#940000;color:#fff;border:1px solid #999;"><code>0012</code></td><td style="padding:0.2em;text-align:center;background:#00ff00;color:#fff;border:1px solid #999;"><code>03E0</code></td><td style="padding:0.2em;text-align:center;background:#00d600;color:#fff;border:1px solid #999;"><code>0340</code></td><td style="padding:0.2em;text-align:center;background:#00ad00;color:#fff;border:1px solid #999;"><code>02A0</code></td><td style="padding:0.2em;text-align:center;background:#ffbd00;color:#000;border:1px solid #999;"><code>02FF</code></td><td style="padding:0.2em;text-align:center;background:#bd7b00;color:#fff;border:1px solid #999;"><code>01F7</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>09</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#de9c21;color:#000;border:1px solid #999;"><code>127B</code></td><td style="padding:0.2em;text-align:center;background:#7b7b7b;color:#fff;border:1px solid #999;"><code>3DEF</code></td><td style="padding:0.2em;text-align:center;background:#e7ad8c;color:#000;border:1px solid #999;"><code>46BC</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#a50000;color:#fff;border:1px solid #999;"><code>0014</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#0084ff;color:#fff;border:1px solid #999;"><code>7E00</code></td><td style="padding:0.2em;text-align:center;background:#0000e7;color:#fff;border:1px solid #999;"><code>7000</code></td><td style="padding:0.2em;text-align:center;background:#ad7b5a;color:#fff;border:1px solid #999;"><code>2DF5</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>10</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#b50000;color:#fff;border:1px solid #999;"><code>0016</code></td><td style="padding:0.2em;text-align:center;background:#7b7b7b;color:#fff;border:1px solid #999;"><code>3DEF</code></td><td style="padding:0.2em;text-align:center;background:#e7ad8c;color:#000;border:1px solid #999;"><code>46BC</code></td><td style="padding:0.2em;text-align:center;background:#00ff00;color:#fff;border:1px solid #999;"><code>03E0</code></td><td style="padding:0.2em;text-align:center;background:#00b500;color:#fff;border:1px solid #999;"><code>02C0</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#0084ff;color:#fff;border:1px solid #999;"><code>7E00</code></td><td style="padding:0.2em;text-align:center;background:#0000e7;color:#fff;border:1px solid #999;"><code>7000</code></td><td style="padding:0.2em;text-align:center;background:#ad7b5a;color:#fff;border:1px solid #999;"><code>2DF5</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>11</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#002929;color:#fff;border:1px solid #999;"><code>14A0</code></td><td style="padding:0.2em;text-align:center;background:#294a4a;color:#fff;border:1px solid #999;"><code>2525</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#ceefef;color:#000;border:1px solid #999;"><code>77B9</code></td><td style="padding:0.2em;text-align:center;background:#4a6b6b;color:#fff;border:1px solid #999;"><code>35A9</code></td><td style="padding:0.2em;text-align:center;background:#a5735a;color:#fff;border:1px solid #999;"><code>2DD4</code></td><td style="padding:0.2em;text-align:center;background:#b50000;color:#fff;border:1px solid #999;"><code>0016</code></td><td style="padding:0.2em;text-align:center;background:#efbda5;color:#000;border:1px solid #999;"><code>52FD</code></td><td style="padding:0.2em;text-align:center;background:#7b0000;color:#fff;border:1px solid #999;"><code>000F</code></td><td style="padding:0.2em;text-align:center;background:#ffb5b5;color:#000;border:1px solid #999;"><code>5ADF</code></td><td style="padding:0.2em;text-align:center;background:#ff5a5a;color:#fff;border:1px solid #999;"><code>2D7F</code></td><td style="padding:0.2em;text-align:center;background:#de9c21;color:#000;border:1px solid #999;"><code>127B</code></td><td style="padding:0.2em;text-align:center;background:#d6a58c;color:#000;border:1px solid #999;"><code>469A</code></td><td style="padding:0.2em;text-align:center;background:#bd7b00;color:#fff;border:1px solid #999;"><code>01F7</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
<tr><td><code>12</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#ceceef;color:#000;border:1px solid #999;"><code>7739</code></td><td style="padding:0.2em;text-align:center;background:#006bff;color:#fff;border:1px solid #999;"><code>7DA0</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffceff;color:#000;border:1px solid #999;"><code>7F3F</code></td><td style="padding:0.2em;text-align:center;background:#ff00ff;color:#fff;border:1px solid #999;"><code>7C1F</code></td><td style="padding:0.2em;text-align:center;background:#bd00bd;color:#fff;border:1px solid #999;"><code>5C17</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td></tr>
<tr><td><code>13</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#ceceef;color:#000;border:1px solid #999;"><code>7739</code></td><td style="padding:0.2em;text-align:center;background:#d600d6;color:#fff;border:1px solid #999;"><code>681A</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#00ff00;color:#fff;border:1px solid #999;"><code>03E0</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffff00;color:#000;border:1px solid #999;"><code>03FF</code></td><td style="padding:0.2em;text-align:center;background:#ffd600;color:#000;border:1px solid #999;"><code>035F</code></td><td style="padding:0.2em;text-align:center;background:#ff9c00;color:#000;border:1px solid #999;"><code>027F</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td></tr>
<tr><td><code>14</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#ceceef;color:#000;border:1px solid #999;"><code>7739</code></td><td style="padding:0.2em;text-align:center;background:#00d600;color:#fff;border:1px solid #999;"><code>0340</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#a50000;color:#fff;border:1px solid #999;"><code>0014</code></td><td style="padding:0.2em;text-align:center;background:#4a0000;color:#fff;border:1px solid #999;"><code>0009</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td></tr>
<tr><td><code>15</code></td><td style="padding:0.2em;text-align:center;background:#ffef94;color:#000;border:1px solid #999;"><code>4BBF</code></td><td style="padding:0.2em;text-align:center;background:#ff8c00;color:#fff;border:1px solid #999;"><code>023F</code></td><td style="padding:0.2em;text-align:center;background:#008c00;color:#fff;border:1px solid #999;"><code>0220</code></td><td style="padding:0.2em;text-align:center;background:#42e742;color:#000;border:1px solid #999;"><code>2388</code></td><td style="padding:0.2em;text-align:center;background:#7bd6ff;color:#000;border:1px solid #999;"><code>7F4F</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ff8c00;color:#fff;border:1px solid #999;"><code>023F</code></td><td style="padding:0.2em;text-align:center;background:#ffff00;color:#000;border:1px solid #999;"><code>03FF</code></td><td style="padding:0.2em;text-align:center;background:#ffffbd;color:#000;border:1px solid #999;"><code>5FFF</code></td><td style="padding:0.2em;text-align:center;background:#00bd21;color:#fff;border:1px solid #999;"><code>12E0</code></td><td style="padding:0.2em;text-align:center;background:#ceefff;color:#000;border:1px solid #999;"><code>7FB9</code></td><td style="padding:0.2em;text-align:center;background:#ff0000;color:#fff;border:1px solid #999;"><code>001F</code></td><td style="padding:0.2em;text-align:center;background:#a50000;color:#fff;border:1px solid #999;"><code>0014</code></td><td style="padding:0.2em;text-align:center;background:#000000;color:#fff;border:1px solid #999;"><code>0000</code></td><td style="padding:0.2em;text-align:center;background:#ffffff;color:#000;border:1px solid #999;"><code>7FFF</code></td></tr>
</tbody>
</table>
</div>

---
## What CGX Looks Like in Practice
`.CGX` is the main graphics bank format.

In the recent leak work it uses a few very common size classes:

Size | Where it shows up | Reading
---|---|---
`17,664` bytes | smaller text and utility banks in SimCity and Mario Kart | compact tile or glyph bank
`34,048` bytes | common menu, UI, object-text, and title banks | larger graphics or panel bank
`65,792` bytes | large shared Mario Kart bank like `BG-ITEM.CGX` | very large packed graphics set

The important thing is not the exact byte count alone, but the role.
`.CGX` is consistently where Nintendo kept reusable character, tile, text, or panel graphics before they were assembled into complete screens.

The surviving CAD-tool screenshot is especially helpful here too.
Its left-hand controls explicitly show `4bit` and `8*8`, which means the tool was editing at least some `CGX` banks as raw 8x8 4bpp SNES tiles rather than as a higher-level wrapped image format.

<img src="/public/images/snes/SNES-CGE.jpg" class="wow slideInLeft postImage" />

### What the Size Tiers Mean
The repeated size classes are meaningful enough to treat as separate tiers rather than random project choices.

Tier | Common sizes | Role
---|---|---
Small text/utilities | `17,664` bytes | compact glyph banks, helper graphics, smaller text resources
Standard UI banks | `34,048` bytes | title graphics, menu panels, object-text banks, larger icon sets
Large shared banks | `65,792` bytes | broad multi-purpose environment or item banks

SimCity shows the split very clearly:

* top-level `KANJI.CGX` and `OBJ-MOJI.CGX` are both `34,048` bytes, but they behave differently
* inside `SIM/is`, `moji.CGX`, `mojiA.CGX`, and `kanji.CGX` are all `17,664` bytes and look like a separate smaller text tier

Nintendo's tools were not just saving “graphics” in one generic container.
They were using a few stable bank sizes depending on whether the asset was a compact glyph set, a standard UI bank, or a much larger shared bank.

The CAD-native `CGX` banks are also behaving like raw tile banks rather than wrapper formats.
For example, `CAD-1.CGX` begins immediately with dense graphic-looking bytes such as:

* `00 00 00 3F 1F 5F 3F 7F`
* `3F 7F 3C 7C 38 78 38 78`

while SimCity banks such as `KANJI.CGX` and `OBJ-MOJI.CGX` show very different early bytes but the same broad fixed-size bank behavior.

That does not give us a full tile decode yet, but it does support a few practical conclusions:

* `.CGX` does not carry a large structured header
* it is direct character or tile-plane data from the start of the file
* different size tiers reflect different bank capacities, not different container grammars

### CGX Sizes Fit Raw 8x8 Tile Banks Well
The common size classes also line up cleanly with raw SNES tile math.

If you treat `.CGX` as 4bpp SNES character data, where each 8x8 tile takes `32` bytes, the standard file sizes become:

Size | 4bpp tile count
---|---:
`17,664` bytes | `552` tiles
`34,048` bytes | `1,064` tiles
`65,792` bytes | `2,056` tiles

That is a very clean fit.
It does not prove that every bank is 4bpp, but it is much more convincing than the older idea that these files needed a large hidden wrapper or a non-tile-oriented decode.

The CAD screenshot strengthens that further because it shows `4bit` mode directly in the editor UI.
So a viewer should:

* default to `8x8` tiles
* default to `4bpp` for ordinary `CGX`
* allow `2bpp` as an explicit option for special banks like `BG2bit.CGX`

### Many CGX Files End in Blank or Fill Tiles
The tails of the files are also informative.

Representative endings:

File | Tail behavior | Reading
---|---|---
CAD `CAD-0.CGX` | ends with repeated `0x04` bytes | filled or reserved tile area
SimCity `KANJI.CGX` | ends with repeated `0x02` bytes | another fill-like tail rather than a text header
Mario Kart `MOJI.CGX` | last `92` bytes mostly zero | bank ends with partial blank area
Mario Kart `TITLE.CGX` | last `399` bytes are zero | large blank tile tail

That matters because it makes the format look even more like a raw tile bank.
Instead of ending in obvious metadata, many files simply taper off into empty or fill-like tile space.

### What This Means for a Viewer
The format is clear enough to support a reliable `CGX` viewer.

The viewer model is:

* read the file from byte `0` as raw tile data
* render it as `8x8` SNES character tiles
* default to `4bpp`
* support `2bpp` for files whose names or companion assets mark a reduced-bit-depth bank
* treat trailing zero or fill tiles as unused space rather than parsing them as a separate footer format

Some projects may also have used `8bpp` banks under the same extension.
So a practical viewer should expose a bit-depth toggle rather than hard-coding one mode forever.

You can inspect a `.CGX` file directly below.
This viewer treats the file as raw SNES tile data from byte zero, defaults to `4bpp`, and lets you switch bit depth when a bank like `BG2bit.CGX` needs a different decode.

<rr-sandpack
  template="react-ts"
  app="/public/js/sandpack/examples/SnesCgxViewer.tsx">
</rr-sandpack>

---
## What SCR Looks Like in Practice
`.SCR` is one of the most common and most misunderstood formats in the leaks.

The format now reads clearly:

* many Nintendo SNES workstation `.SCR` files are exactly `8,960` bytes
* they read as structured 16-bit values rather than bitmap pixels
* their openings often look like ordered tile or layout tables, not compressed art

<img src="/public/images/snes/CAD-TOOL-SCR.jpg" class="wow slideInLeft postImage" />

The surviving CAD-tool screenshot is especially helpful here because it shows the format in its native context.
The tool exposes `SCREEN`, `OBJ`, `MAP`, and `SFX FILE` as separate operations, which matches the exact layer split now visible in the SimCity and Mario Kart workspaces.

A few examples:

File | Opening pattern | Reading
---|---|---
Mario Kart `SELECT-SCENARIO.SCR` | `0x0020`, `0x0021`, `0x0022`, `0x0023` | ordered layout/table entries
Mario Kart `MAP-SELECT.SCR` | `0xFFFF`, `0x0800`, `0x0801`, `0x0802` | another structured layout table
SimCity `TOWN.SCR` | repeating low 16-bit values like `0x0601`, `0x100B`, `0x100C` | patterned screen composition data
SimCity `bank-ji.SCR` | long run of `0x03FF` | special-purpose text or bank screen rather than ordinary menu art

`.SCR` is an editor-side screen composition format built from 16-bit layout entries.
It is reusable workstation layout data rather than a one-to-one PPU dump.

Some files also show template reuse.
In the SimCity branch, `SELECT-SCENARIO.SCR` and `INPUT1.SCR` share the same opening structure before diverging later, which shows the team was building multiple UI screens from a shared composition base.

### What We Can Say More Precisely About SCR
The strongest low-level clues now are:

* the files are consistently word-oriented rather than byte-oriented
* many openings look like ordered tile or table IDs
* some files are dominated by long repeated words, marking fill regions or template blocks

That is easy to see in a few representative openings:

File | First words | Reading
---|---|---
SimCity `SELECT-SCENARIO.SCR` | `0x0020`, `0x0021`, `0x0022` ... `0x0060`, `0x0061` | ordered tile/table sequence
SimCity `MAP-SELECT.SCR` | `0xFFFF`, `0x0800`, `0x0801`, `0x0802` ... | layout table with a sentinel-like opening word
Mario Kart `TITLE.SCR` | `0x00D9` repeated | large fill or repeated template region
Mario Kart `DOKAN.SCR` | `0x1C00`, `0x1C01`, `0x5C01`, `0x5C00` repeating | strongly patterned tile/flip arrangement
SimCity `bank-ji.SCR` | `0x03FF` repeated | special-purpose screen or text-bank support layout

So `.SCR` is:

* a 16-bit screen-composition format
* with repeated fill regions and template reuse
* storing tile IDs plus per-entry flags rather than raw pixels

### The SCR Container Layout
The SimCity `SIM` workspace shows the structure clearly.

An `8,960` byte `.SCR` file breaks into three broad parts:

Range | Size | Role
---|---:|---
`0x0000` to `0x1fff` | `2,048` bytes | first `32x32` tilemap-like block
`0x2000` to `0x3fff` | `2,048` bytes | second `32x32` tilemap-like block
`0x4000` to `0x5fff` | `2,048` bytes | third `32x32` tilemap-like block
`0x6000` to `0x7fff` | `2,048` bytes | fourth `32x32` tilemap-like block
`0x8000` to `0x80ff` | `256` bytes | tool metadata block
`0x8100` to `0x82ff` | `512` bytes | trailer or reserved tail region

That first `8,192` byte region is the key insight.
It is exactly four `2,048` byte chunks, and each `2,048` byte chunk is exactly `1,024` 16-bit entries, which matches a `32x32` tilemap very neatly.

The structure is:

* `.SCR` stores four `32x32` layout blocks forming a larger editor canvas
* then appends a small metadata area
* then appends a final trailer region that may hold sentinels, padding, or editor-side state

### The Metadata Block Is Real, Not Just Garbage
The most surprising clue is what happens at offset `0x2000` words, or byte `8192`.

In several SimCity `.SCR` files, the `256` byte block after the four tilemap-sized chunks begins with the same ASCII tool signature seen in `.SFX`:

`NAK1989 S-CG-CADVer...`

That means `.SCR` is not only “screen layout data.”
At least in the SimCity pipeline, it is a container that mixes:

* raw layout tables
* a small embedded tool metadata block
* a final trailer area

This means the workstation was saving editor-state information directly inside the screen file rather than only in a separate sidecar.

That also lines up very well with the surviving CAD-tool screenshot from the same broader Nintendo workstation ecosystem.
The UI explicitly exposes `SCREEN`, `OBJ`, `MAP`, and `SFX FILE` operations side by side, which is exactly the same layered split now visible in the SimCity file set.

### The First Four Blocks Really Do Behave Like Reusable Screen Chunks
The repeated layout blocks make the four-part model even more convincing.

For example:

* `SELECT-SCENARIO.SCR` has the same opening words at word `0` and word `1024`
* `MAP-SELECT.SCR` shows the same thing
* `TOWN.SCR` repeats the same opening pattern at words `0`, `1024`, `2048`, and `3072`

So the front of these files is not one long scrolling stream of tile entries.
It is several fixed screen-sized layout blocks packed into one editor-side container.

### The Four SCR Blocks Do Not All Play the Same Role
The CAD-native samples help here too.
`CAD-0.SCR` does not repeat the same leading words across all four blocks:

* block `0` begins with `0x2001` repeated
* block `1` begins with `0xFC01` repeated
* blocks `2` and `3` begin as all zeroes

That matters because the four `32x32` blocks are not simply four clones of one screen.
They act as four addressable screen-sized layers or pages inside one CAD container.

By contrast, SimCity's `TOWN.SCR` repeats the same opening words across all four blocks:

* `0x0601`
* `0x0601`
* `0x100B`
* `0x100C`

Some files use all four blocks as matching layout pages, while others actively populate only the first one or two.

The trailer is also more patterned than it first appeared.
`CAD-0.SCR` alternates `0xFFFF` and `0x0000` pairs near the end, while `TOWN.SCR` ends in a solid run of `0xFFFF`.
So the final `512` byte region was not random padding.
It is a reserved editor-side tail with stable sentinel behavior.

### What the SCR Words Actually Look Like
The strongest breakthrough is that the main `8,192` byte layout region does not just look vaguely table-like.
It behaves like standard SNES background tilemap words.

Across Mario Kart, SimCity, and the native CAD samples, the same bit split keeps working:

Bits | Meaning | Why it fits
---|---|---
`0-9` | Tile number | the low ten bits vary in the same way you would expect from tile references
`10-12` | Palette row | files use small palette ranges like `0-3` or `0-7`, which matches SNES palette-bank selection
`13` | Priority | some files toggle this bit while still keeping sensible tile IDs
`14` | Horizontal flip | patterned files like `DOKAN.SCR` show symmetrical high-bit variants
`15` | Vertical flip | the highest bit toggles in the same places as other tile-orientation style changes

That matters because the layout side is no longer just a broad guess.
An `.SCR` file stores four editor-side `32x32` SNES BG tilemaps, then appends CAD metadata and a trailer.

### A Real Render Test Works
The cleanest proof came from Mario Kart.
When `TITLE.SCR` was rendered as four `32x32` blocks using that standard SNES tilemap model, with `TITLE.CGX` decoded as raw `4bpp` tiles and `TITLE.COL` used as the palette bank, the result produced a coherent Super Mario Kart title image instead of noise.

That tells us three very useful things at once:

* the tile numbers are real tile references
* the palette bits are selecting the right color rows
* the file is not some custom packed image format hiding behind the `.SCR` extension

The viewer below uses that same decode.

<rr-sandpack
  template="react-ts"
  app="/public/js/sandpack/examples/SnesScrViewer.tsx">
</rr-sandpack>

---
## What OBJ Looks Like in Practice
`.OBJ` is another format that is now straightforward to describe.

In both Mario Kart and SimCity, the files look like structured object-placement or object-text records rather than graphics:

* they commonly appear at `13,568` bytes
* they break naturally into short repeating groups
* they sit beside text banks, menu screens, and object-facing graphics
* the CAD-native variants preserve the same front-end record model at a larger capacity

The Mario Kart object files are especially revealing because many of them read cleanly as repeating 3-word entries.
For example, files like `JUGEM.OBJ`, `POLE.OBJ`, and `CAR.OBJ` open with repeated triples that look much more like compact object definitions than tile data.

The SimCity side adds another clue:

* `MOJI.OBJ` and `SCENARIO.OBJ` share the same opening record pattern
* `INPUT.OBJ` is shaped differently and looks tied to the input workflow

So `.OBJ` is not generic “object graphics”.
It is an object-side placement or assembly format, and in UI-heavy projects it can also carry object-form text layout data.

The native CAD samples tighten that up further.
`CAD-0.OBJ` is `26,880` bytes rather than `13,568`, but it keeps the same compact 3-word rhythm:

* `0080 08F8 3331`
* `0080 00F8 3231`
* `0080 F8F8 3131`

So the smaller Mario Kart and SimCity `.OBJ` files now look less like a different format and more like a smaller-capacity or differently banked member of the same broader family.

### The OBJ Container Layout
The biggest recent breakthrough is that the front record region is not just a flat pool of entries.
For the standard smaller `.OBJ` files, the size matches a frame-based layout exactly.

Format family | Total size | Front record region | Capacity at 6 bytes per record | Tail
---|---:|---:|---:|---
Mario Kart / SimCity `.OBJ` | `13,568` bytes | first `12,288` bytes | `2,048` records | `1,280` byte CAD tail
CAD-native `.OBJ` | `26,880` bytes | first `24,576` bytes | `4,096` records | `2,304` byte CAD tail
CAD-native `.OBX` | `51,456` bytes | first `49,152` bytes | `8,192` records | `2,304` byte CAD tail

For the standard smaller `.OBJ` files, `12,288` bytes breaks down cleanly as:

* `32` frames
* `64` entry slots per frame
* `6` bytes per entry

That is:

* `32 x 64 x 6 = 12,288`

The larger `.OBX` size also lines up neatly with a doubled frame and slot count:

* `64` frames
* `128` entry slots per frame
* `6` bytes per entry
* `64 x 128 x 6 = 49,152`

That front region is where the object records live.
The tail is not part of the record stream.
In files like `MOJI.OBJ`, `INPUT.OBJ`, and `TITLE.OBJ`, the ASCII `NAK1989 S-CG-CAD...` tool signature starts exactly at byte `12,288`.
In `CAD-0.OBJ` the same kind of transition happens at byte `24,576`.

So the format is not just “a file full of triples”.
It is a framed object-record container followed by a CAD metadata block.

The one awkward case is the larger CAD-native `.OBJ` files.
Their `24,576` byte front region fits `4,096` entries exactly, which suggests either:

* a double-capacity `.OBJ` variant with `32` frames of `128` entries
* or a format revision that sits between the smaller `.OBJ` and later `.OBX` layout

So the safest summary is:

* small `.OBJ` files very likely use `32 x 64` framed entry storage
* `.OBX` very likely expands that to `64 x 128`
* the larger CAD-native `.OBJ` files look like a higher-capacity close relative rather than a totally different format

### The OBJ Record Shape
Across both Mario Kart and SimCity, the front record region behaves as a repeating 3-word model.

Representative openings:

File | First record triples
---|---
SimCity `MOJI.OBJ` | `[0x0080, 0xCAB2, 0x3030]`, `[0x0080, 0xCAAA, 0x2030]`, `[0x0080, 0x18C0, 0x8C30]`
SimCity `SCENARIO.OBJ` | same opening triples as `MOJI.OBJ`
SimCity `INPUT.OBJ` | `[0x0000, 0xE0E0, 0x7130]`, `[0x0000, 0xE8E0, 0x6130]`, `[0x0000, 0xF0E0, 0x7030]`
Mario Kart `CAR.OBJ` | `[0x0080, 0xF8F8, 0xB333]`, `[0x0080, 0xF0F8, 0xB233]`, `[0x0080, 0xE8F8, 0xB133]`
Mario Kart `JUGEM.OBJ` | `[0x0080, 0xED00, 0x0C30]`, `[0x0080, 0xEDF8, 0x0E30]`, `[0x0080, 0xEDF0, 0x0E30]`
Mario Kart `POLE.OBJ` | `[0x0080, 0x18F8, 0x333A]`, `[0x0080, 0x10F8, 0x323A]`, `[0x0080, 0x18F0, 0x233A]`

That gives us a concrete six-byte record model:

* byte `1` plus byte `2` form the first word
* byte `3` plus byte `4` form the packed coordinate word
* byte `5` plus byte `6` form the packed tile-and-attribute word

That is much narrower than the old “some kind of object data” label.

Using the byte order preserved on disk, the record is:

Byte | Role
---|---
`1` | display or state flags, with bit `7` heavily used
`2` | secondary group or class byte
`3` | `Y` displacement
`4` | `X` displacement
`5` | attribute byte
`6` | tile number

### The Middle Word Packs X and Y
The coordinate word is one of the easiest parts to read.

When the second word is split into two bytes, it behaves like packed `X` and `Y` positions:

Record | Split bytes | Reading
---|---|---
Mario Kart `CAR.OBJ` `0xF8F8` | `X=0xF8`, `Y=0xF8` | top-left tile in a 4x4 kart tile group
Mario Kart `CAR.OBJ` `0xF0F8` | `X=0xF0`, `Y=0xF8` | one tile left of the first
Mario Kart `CAR.OBJ` `0xF8F0` | `X=0xF8`, `Y=0xF0` | one tile down from the first row
Mario Kart `POLE.OBJ` `0x18F8` | `X=0x18`, `Y=0xF8` | right-hand tile column
Mario Kart `POLE.OBJ` `0x10F8` | `X=0x10`, `Y=0xF8` | left-hand tile column

Those values move in `8`-pixel steps exactly the way a sprite or object-placement format should.
The byte values also run cleanly through wraparound-style positions like `0xF8`, `0xF0`, `0xE8`, which is what you would expect if the editor stored them as signed or screen-relative 8-bit coordinates rather than larger absolute map positions.

### The Third Word Packs Tile Index and Attributes
The third word is just as structured.
Its high byte behaves like a tile number, while its low byte behaves like an attribute or palette byte.

That is easiest to see in the Mario Kart art objects:

Family | Third-word pattern | Reading
---|---|---
`CAR.OBJ` | `0xB333`, `0xB233`, `0xB133`, `0xB033` | tile indices step across a row while attribute `0x33` stays fixed
`POLE.OBJ` | `0x333A`, `0x323A`, `0x233A`, `0x223A` | tile indices change, attribute `0x3A` stays fixed
`JUGEM.OBJ` | `0x273A`, `0x263A`, `0x253A`, `0x2430` | mostly stable attributes with a small family-specific mix
`MOJI.OBJ` | `0x3030`, `0x2030`, `0x8C30`, `0x8230` | text and UI tiles with a stable `0x30` attribute byte

That means a practical decode is:

* third-word high byte = tile index
* third-word low byte = object attributes, palette, or flip state

The exact bit split of that low byte still needs a dedicated pass, but its role as a shared attribute field is already clear from the repeated per-family constants.

### The Attribute Byte Has Stable Family Patterns
The low byte of the third word is not random.
It clusters into a small number of stable families across the record area.

The most common groups are:

* `0x30` to `0x3F`
* `0x70` to `0x7F`
* rarer `0xB0` to `0xBF` and `0xF0` to `0xFF`
* a sparse low-value group like `0x00`, `0x02`, `0x08`, or `0x0A`

That is visible in the live files:

File | Dominant attribute values
---|---
Mario Kart `CAR.OBJ` | `0x30`, `0x31`, `0x33`, `0x39`, `0x3B`, `0x3F`
Mario Kart `POLE.OBJ` | `0x30`, `0x31`, `0x34`, `0x39`, `0x3A`, `0x3B`
Mario Kart `JUGEM.OBJ` | heavy `0x3A`, plus `0x30`, `0x39`, `0x35`, `0x70`, `0x7A`
Mario Kart `TITLE.OBJ` | `0x30`, `0x38`, `0x3A`, `0x3C`, `0x3E`
SimCity `MOJI.OBJ` | almost entirely `0x30`, `0x32`, `0x34`

That is exactly what you would expect if the low byte was carrying a compact attribute field with a few stable combinations reused across one object family at a time.

The bit distribution is useful too.
Across the most active object files, bits `4` and `5` are the most stable part of the field, while the lower bits vary much more from family to family.
That lines up strikingly well with the standard SNES sprite attribute byte:

Bits | Likely role
---|---
`0` | name-select or a related per-tile switch
`1-3` | palette row
`4-5` | priority
`6` | horizontal flip
`7` | vertical flip

So the current best reading is:

* bits `1-3` choose the palette row or another closely related color group
* bits `4-5` are part of a common priority-style base pattern
* bits `6-7` mark flip variants, which is exactly why families like `0x30`, `0x70`, `0xB0`, and `0xF0` recur together
* bit `0` still needs a smaller dedicated pass, but it behaves like a low-level per-tile mode bit rather than random noise

That still stops short of naming every bit precisely, but it is already much stronger than treating the low byte as an opaque blob.

### Byte 1 and Byte 2 Have Separate Roles
The parser details line up well with the on-disk data here.
The first two bytes are not one opaque 16-bit flag field with a single meaning.
They are two separate bytes with different jobs:

Byte | Role
---|---
`1` | display bit in bit `7`, tile-size bit in bit `0`
`2` | group info or another tool-side classification byte

That explains an important pattern in the live files:

* records with byte `1 = 0x80` are the ones that render as visible object entries
* many records with byte `1 = 0x00` still carry coordinates, attributes, and tile numbers, but they are not display-enabled

So the old “first word as one class field” reading was too coarse.
The more accurate model is:

* byte `1` controls display and size state
* byte `2` carries additional grouping or tool-side record info

That also explains why text-heavy files like `OBJ-MOJI-ENG.OBJ` can mix `0x80` and `0x00` entries throughout a frame without using them as hard frame separators.

### OBJ Is OAM-Like, Not Raw OAM
The `.OBJ` records are very close in spirit to SNES OAM, but they are not raw hardware OAM dumps.

The overlap with OAM is obvious:

* per-object `X` and `Y` placement
* a tile number
* an attribute-style byte
* repeated fixed-size object records

But several things make it clear that `.OBJ` is still an editor-side container rather than literal SNES OAM:

* the records are `6` bytes each, not the packed size used by real SNES OAM
* the files are wrapped in large fixed-capacity CAD containers
* the first word behaves like a tool-side flag field rather than a direct SNES sprite register value
* the back of the file switches into CAD metadata instead of continuing as sprite records

So the safest description is:

* `.CGX` stores the sprite graphics
* `.COL` stores the palette rows
* `.OBJ` stores the editor-side sprite or object layout
* runtime code would still need to convert that data into real SNES OAM entries

That distinction matters because it explains why the object records feel so hardware-adjacent while still preserving much more workstation structure than a straight OAM dump would.

### One OBJ File Holds Many Frames
Once the frame layout is used directly, the container shape becomes much cleaner.
Standard `.OBJ` files preserve up to `32` frames with `64` entry slots per frame, while `.OBX` extends that model.

That means one `.OBJ` file is not a single sprite definition.
It is a framed animation or state container.

The Mario Kart files make that easy to see:

* `CAR.OBJ` has a run of small `16`-tile kart frames in its early 64-entry frame slots
* `JUGEM.OBJ` preserves a sequence of similarly sized visible frames with stable `0x30` and `0x3A` attribute families
* `OBJ-MOJI.OBJ` and `OBJ-MOJI-ENG.OBJ` use the same 32-frame structure, but many of those frames look more like text or UI states than ordinary sprite animation

So the best summary is:

* `.OBJ` is a framed object-layout format
* the frames can represent animation, pose changes, text states, or UI variants
* the visible content of a frame is controlled by byte `1`'s display bit, not just by whether the slot is nonzero

You can inspect an `.OBJ` file directly below.
This viewer renders the front record region as object placements, and if you add matching `.CGX` and `.COL` files it will use the current SNES-like attribute decode to draw the real tiles with palette and flip handling.

<rr-sandpack
  template="react-ts"
  app="/public/js/sandpack/examples/SnesObjViewer.tsx">
</rr-sandpack>

---
## What SFX Means in These Leaks
`.SFX` is the most unusual SNES format we can now talk about with confidence.

In the SimCity `SIM` workspace, every top-level `.SFX` file is exactly `2,048` bytes and begins with an ASCII tool signature like:

`NAK1989 S-CG-CADVer1.21 900611`

That tells us a few useful things immediately:

* `.SFX` in this context is not a sound-effect file
* it is not just a random project-local binary blob either
* it is a tool-side sidecar produced by a dedicated `S-CG-CAD` graphics or layout tool

The payloads after the header differ per screen, which means they preserve screen-specific metadata rather than one shared stub.
`TOWN.SFX` is especially valuable because it has a much denser payload than the other files and contains several internal configuration regions.

The CAD-tool screenshot helps here too.
It makes `SFX FILE` look much more like a saved editor-side metadata or project-state operation than a gameplay format, which is exactly how the SimCity sidecars behave on disk.

So for SNES leak work, `.SFX` should currently be read as:

* a SimCity-side CAD metadata format
* not a general-purpose SNES audio or runtime file type

### The Wider Leak Connects SFX to SRD's CAD Tool
The `SFX` story becomes much stronger once the wider leak is included.

In `NEWS_04`, both `SAMPLE.sfx_main.LST` and `CAD.sfx_main.LST` point to the same loader path:

`/usr/local/srd/cad/sfc/sfx_main.hex`

That tells us two useful things:

* `sfx_main` was an actual SRD CAD-side tool component, not just a strange suffix in one SimCity branch
* the `.SFX` sidecars and `sfx_main` naming belong to the same workstation ecosystem

So `.SFX` does not mean one general Nintendo binary format.
It is a CAD-tool metadata and loader layer inside SRD's Super Famicom art pipeline.

The tiny `.DAT` files paired with the manifests help here too.
`CAD.sfx_main.DAT` and `sfx_main.DAT` are only `120` bytes long, but they are clearly structured binary records rather than text.
That makes them look like project-state or transfer-parameter files used by `sfx_main`, not screen assets in their own right.

### What the SFX Field Layout Looks Like
The SimCity sidecars are now clear enough to sketch a working structure.

Common pattern:

* `0x0000` to about `0x002f`: ASCII tool header
* around `0x0030` onward: tiny setup flags
* around `0x0100`: first short control block
* later regions: screen-specific payloads

The best example is `TOWN.SFX`, which has at least these active regions:

Range | Role
---|---
`0x0030` to `0x005f` | setup flags and small counters
`0x0100` to `0x015f` | denser setup/control block
`0x0200` to `0x02ef` | first large payload block
`0x0320` to `0x03ef` | second large payload block
`0x0400` to `0x04ef` | structured lower block
`0x0500` to `0x05ef` | second lower block with similar shape

`.SFX` is not one flat parameter list.
At least in SimCity, it is a serialized multi-block tool record for a screen definition.

### OBX Looks Like a Sister CAD Container
The wider leak also hints at a second CAD-side object container: `.OBX`.

The direct `.OBX` findings are:

* `CAD-0.OBX` and `CAD-3.OBX` survive directly inside `.CAD_SRD`
* `CAD-0.OBX` is larger than its matching `CAD-0.OBJ`, at `51,456` bytes versus `26,880`
* `CAD-3.OBX` matches `CAD-3.OBJ` in size at `26,880` bytes
* `CAD-3.OBX` carries the same trailing `NAK1989 S-CG-CADVer1.23 901226` header block seen in other CAD-side files
* `CAD-0.OBX` stays zeroed until offset `624`, unlike `CAD-0.OBJ`, which begins with active object-style records immediately

That makes `.OBX` look less like a random duplicate and more like a companion object container with a different internal layout or staging role.
The exact field meanings still need work, but it clearly belongs to the same CAD ecosystem as `.OBJ`, `.SCR`, and `.SFX`.

### OBJ and OBX Do Not Behave the Same Way
The direct CAD samples make the split clear.

File | Size | First active offset | Reading
---|---:|---:|---
`CAD-0.OBJ` | `26,880` | `0` | live object-style records begin immediately
`CAD-0.OBX` | `51,456` | `624` | delayed start, sparse active regions, companion container
`CAD-3.OBJ` | `26,880` | `24,576` | mostly header and late active block only
`CAD-3.OBX` | `26,880` | `24,576` | identical active tail to `CAD-3.OBJ`

The first live words show the contrast nicely.
`CAD-0.OBJ` opens with the same kind of compact 3-word record pattern already seen in Mario Kart and SimCity, such as:

* `0080 08F8 3331`
* `0080 00F8 3231`
* `0080 F8F8 3131`

`CAD-0.OBX` instead stays quiet for a while and then begins with a different-looking run:

* `0080 1018 1D31`
* `0080 1010 1C31`
* `0080 0018 1B31`

So `.OBX` does not just look bigger.
It is a differently structured object-side container that preserves extra staging or banked object state that the plain `.OBJ` layer does not keep.

One especially interesting detail is that `CAD-3.OBJ` and `CAD-3.OBX` are identical in size and both only become active at offset `24,576`.
That makes them look like late-stage header-plus-tail containers rather than live fully populated editing banks.
So the CAD environment may have been able to save both active object pages and partially empty page containers using the same broad family of files.

### cadd and caddat Look Like Tool-State Files
The two largest unknown files in `.CAD_SRD` now look much less mysterious than they did at first.

File | Size | Strongest clues
---|---:|---
`cadd` | `708,432` | contains CAD paths, project names, repeated `CAD-0` to `CAD-3`, and `sfx_main` references
`caddat` | `708,245` | contains short project strings like `CAR/XX1`, `CAR/XX2`, `CAR/XX3`, plus repeated `UCUR`

`cadd` contains strings such as:

* `/usr/local/srd/cad/sfc/sfx_main`
* `/home/sugiyama/.CAD_SRD/sfx_main`
* `/home/sugiyama/.CAD_SRD/CAD`
* repeated `CAD-0`, `CAD-1`, `CAD-2`, `CAD-3`

It also includes older project paths like `.../arimoto/SF2/...`, which makes it look more like a saved CAD program or session-state file than a clean per-project asset container.

`caddat` is much quieter, but the strings it does preserve are telling:

* `sos1`
* `CAR/XX1`
* `CAR/XX2`
* `CAR/XX3`
* repeated `UCUR`

That makes `caddat` look like a compact project-state or recent-work record rather than a graphics bank.
The `CAR/XX*` strings are especially interesting because they bridge this generic CAD workspace back toward the Mario Kart-style art branches.

The current reading is:

* `cadd` is the broader CAD-side program, session, or environment state container
* `caddat` is a smaller associated project-data or current-work record

Neither file is decoded yet, but both now look like part of the same workstation toolchain rather than unrelated binary leftovers.

---
## Mode 7 and Map-Side Formats
The Mario Kart material also gives us a clearer picture of the formats used around Mode 7 production.

Extension | What it usually is | What we now know
---|---|---
`.MD7` | Mode 7 map data | In the Mario Kart art branch these are raw `32 KB` files that look like dense structured map data rather than graphics
`.MAP` | Editable map-side resource | Used in broader SNES art and source trees for room, area, or world layout data

One useful detail from Mario Kart is that `C.MD7` and `CCC1.MD7` are identical while `S.MD7` is different, which shows the files are stable raw map bodies rather than volatile export wrappers.

### What MD7 Looks Like at the Data Level
The leaked `.MD7` files are useful because they do not behave like compressed art or wrapper files.

What we can say confidently:

* they are raw `32,768` byte files
* they read cleanly as dense 16-bit word tables
* the word distributions are stable enough to compare across files

For example:

* `C.MD7` begins with values like `0x08F0`, `0x08F0`, `0x08F0`, `0x07F0`
* `S.MD7` has a different distribution and even includes more `0x0000` entries
* `C.MD7` and `CCC1.MD7` are identical, confirming that these are actual map bodies rather than one-off export sessions with volatile headers

So `.MD7` now looks much more like a raw Mode 7 map or cell table than a graphics format.

---
## Quick Notes on Revision Trails
Nintendo's workstation folders make heavy use of non-final file variants.

Marker | What it usually means | What we now know
---|---|---
`.BAK` | backup revision | Often a meaningful earlier revision, not just a duplicate
`.old` | older saved revision | Rare, but clearly used in active editing workflows

This matters because revision files are often the difference between “we have the final asset” and “we can actually see the iteration process.”
That is especially true in the Mario Kart and SimCity art branches, where menu, text, and course-family work often survives in both current and backup form.

---
## What Still Needs More Work
A few SNES workstation formats are still only partly understood.

The best next candidates for deeper reverse engineering are:

* the exact field meanings inside SimCity's `.SFX` records
* the exact bit layout of the 3-word `.OBJ` records
* the relationship between `.OBJ` and `.OBX` in the native CAD workspace
* the exact role of `cadd` and `caddat` inside the SRD CAD environment
* the precise editor-side canvas or block structure inside `.SCR`
* the relationship between `.MAP` and runtime map packing in projects like Zelda and Mario Kart
* the packing rules behind the different `.CGX` size tiers

But compared with where this started, we can now say a lot more confidently that many of these “mystery extensions” were part of a layered Nintendo art and UI toolchain rather than arbitrary binary leftovers.
