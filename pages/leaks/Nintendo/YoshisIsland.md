---
layout: post
tags:
- snes
- leak
- sourcecode
title: Original Yoshi's Island Source Code (Gigaleak)
category: 
- leak
- snes
permalink: /yoshis-island-source-code
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
  - name: Original Yoshi's Island Source Code
    url: #
recommend:
- snes
- leak
- sourcecode
editlink: /leaks/Nintendo/YoshisIsland.md
updatedAt: '2026-03-31'
---

The Nintendo Gigaleak preserves a very large Yoshi's Island archive under `other/SFC/ソースデータ/ヨッシーアイランド`.

This is the Super Famicom codebase for **Super Mario World 2: Yoshi's Island**, and it survives in a much richer form than a simple asm drop.
The leak keeps three Japanese version branches, a full SFC build tree, a separate `chip` audio-side build, huge piles of background and ending assets, message-conversion tools, debug notes, and a workstation-side converter farm under `ツール`.

{% include link-to-other-post.html post="/gigaleak" description="For more information on the wider Nintendo Gigaleak, check out this post." %}

---
## At a Glance
This archive is one of the broader SNES game folders in the Gigaleak.
It preserves both the game-side 65C816 source and the PC-side asset pipeline that fed into it.

The quickest way to read it is like this:

* `日本_Ver0`, `日本_Ver1`, and `日本_Ver2` are not tiny patch folders - each one is a large full project snapshot
* `日本_Ver2` looks like the most useful late branch because it keeps linked outputs like `.hex`, `.map`, `.sym`, `.lnk`, ROM split binaries, and build scripts
* the `sfc` folder is only one piece of the project - graphics, messages, ending data, panel data, and map resources live in parallel folders beside it
* `ツール` is a real workstation-side production tree with dozens of Yoshi-specific converters, X11-era helper programs, and bug-tracking notes
* the source still carries region and bug flags for `JPN`, `NES`, and `PAL`, so this Japanese branch was clearly being used to manage overseas revisions too

At the top level, the four big branches look like this:

Branch | File count | What it mainly looks like
---|---|---
`日本_Ver0` | 4,715 | Earliest of the three large Japanese snapshots, already a full project tree
`日本_Ver1` | 4,396 | Slightly leaner branch with the same broad structure and a backup `mk.BAK`
`日本_Ver2` | 4,257 | Most useful late snapshot, with full SFC build outputs, docs, bug notes, and ROM split binaries
`ツール` | 757 | Shared workstation-side converter and utility tree used across the project

---
# Root Directory (SFC.7z/ソースデータ/ヨッシーアイランド)
At the top level, the archive is split into three numbered Japanese branches and one big shared tool area.

{% capture yi_root_body %}
This is not one neat "final source" folder.
It looks more like Nintendo kept multiple whole-project snapshots around while also carrying a separate workstation toolbox for conversion, debugging, and data preparation.
{% endcapture %}

{% capture yi_root_items %}
- 日本_Ver0 - Large early Japanese project snapshot with `sfc`, `chip`, `union`, asset folders, docs, and build scripts
- 日本_Ver1 - Another full Japanese project snapshot with the same broad layout and extra backup files like `mk.BAK`
- 日本_Ver2 - The most revealing late branch, with linked outputs, ROM split binaries, debug notes, and region/bug conditionals in the source
- ツール - Shared conversion and utility workspace with `bin`, `ctools`, `doc`, test folders, and bug-tracking notes
{% endcapture %}

{% include connected-folder-tree.html folder="ヨッシーアイランド" path="/" body=yi_root_body version="/" content=yi_root_items %}

The important thing here is scale.
Nintendo was not just archiving a small `asm` folder.
Each version branch already contains the game program, data build folders, screen resources, messages, ending assets, and support code as one coordinated workspace.

---
## How Complete This Looks
This archive looks much closer to a working internal source snapshot than a token leak sample.

The strongest signs are:

* the `日本_Ver2/sfc` tree keeps linked outputs such as `.hex`, `.map`, `.sym`, `.lnk`, plus split ROM binaries like `ys_rom_0.bin` through `ys_rom_3.bin`
* the top-level project makefiles do not just build one folder - they recurse through `chip`, `sfc`, and `union`
* the version branches preserve editable assets and source-side resources beside the asm, including `msg`, `bgdt`, `char`, `endt`, `pnl`, `scr_file`, and `mpdt`
* the shared `ツール` directory keeps the workstation-side converters that prepared background, message, object, ending, and map data

The main caveat is the same one that applies to several Gigaleak projects:
this looks like a near-complete production snapshot, but not a perfectly self-contained rebuild package.
The Nintendo assembler, linker, and helper executables the makefiles expect are not all preserved inside the branch itself.

So the safest description is that this is a **near-complete Yoshi's Island production archive** with a lot of the real day-to-day pipeline still attached.

---
## Version Snapshot Comparison
The three numbered Japanese branches are close enough in layout that they look like consecutive internal snapshots rather than unrelated forks.

Branch | Shared folders present | What stands out
---|---|---
`日本_Ver0` | `sfc`, `chip`, `union`, `char`, `bgdt`, `msg`, `endt`, `pnl`, `scr_file`, `sound`, `course` | Broad early project tree with the full workspace already in place
`日本_Ver1` | Same broad structure as Ver0 | Adds `mk.BAK`, suggesting active script iteration rather than a frozen export
`日本_Ver2` | Same broad structure as Ver1 | Keeps the most obvious build outputs, debug docs, bug notes, and split ROM binaries

That pattern matters because it suggests the numbered folders are whole working states of the project, not just tiny diff packs.
`日本_Ver2` is still the best place to start, because it preserves the clearest evidence of how the build was actually being driven near the end.

---
# The Main Ver2 Branch
`日本_Ver2` is the branch that feels most like a live late-stage production snapshot.
It keeps the main SFC program, the separate `chip` program, shared headers in `union`, and the giant piles of game content that those binaries were built from.

{% capture yi_ver2_body %}
This is much wider than a normal code dump.
The branch mixes asm, build products, documentation, messages, course data, background resources, and ending assets in one place.
{% endcapture %}

{% capture yi_ver2_items %}
- sfc - Main 65C816 game program with `ys_main.asm`, world modules, enemy modules, linked outputs, and ROM split binaries
- chip - Separate program and data build for the audio-side or coprocessor-side code, including `ys_chip0.hex`
- union - Shared headers and RAM layouts such as `mctbl.h`, `ys_bgcheck.h`, `ys_mapobj.h`, `ys_mram.asm`, and `ys_ram.asm`
- char - Large character and graphics workspace
- bgdt - Huge background-data workspace, almost 1,000 files on its own
- endt - Ending and event data with hundreds of `.end` resources
- msg - Message scripts, compiled `.dat` files, converters, and message tables
- pnl - Panel data workspace
- scr_file - Screen-layout resources
- mpdt - Map or point data resources including `.mpd`, `.pdt`, and converter tables
- doc - Debug notes, bug notes, RAM docs, enemy docs, and tool notes
{% endcapture %}

{% include connected-folder-tree.html folder="日本_Ver2" path="日本_Ver2" body=yi_ver2_body version="Ver2" content=yi_ver2_items %}

The file counts inside `日本_Ver2` make the shape of the project clearer:

Folder | File count | Why it matters
---|---|---
`char` | 1,014 | Character and graphics production was one of the biggest parts of the project
`bgdt` | 994 | Background/status/screen data was another huge pipeline in its own right
`endt` | 965 | Ending and event sequences had their own large authored data set
`msg` | 299 | Dialogue and event text had a full conversion workflow, not just a few script files
`course` | 190 | Course and world parameter data lived outside the main asm tree
`sfc` | 189 | The actual SNES program source is only one layer of the total project

That is one of the most useful things about this leak.
It makes Yoshi's Island look like what it really was to the developers: a large authored data project wrapped around one assembly core.

---
## The Chip and Union Support Folders
The top-level `Makefile` does not build `sfc` on its own.
It recurses through `chip`, `sfc`, and `union`, which means those folders were part of the normal build, not optional extras.

`chip` looks like the companion program-side workspace.
It keeps files such as `ys_chip0.asm` through `ys_chip7.asm`, the matching `ys_chip0.hex` and `ys_chip0.map`, plus music and message-side modules like `ys_mplay.asm`, `ys_mplay0.asm`, `ys_mplay3.asm`, `ys_mpldt.asm`, `ys_msge0.asm`, and `ys_msub0.asm`.

Even without reverse engineering every file, that tells us something important about the project layout:
the main game program, the companion chip-side code, and their shared headers were being managed as separate but coordinated build targets.

`union` is the glue layer between them.
It keeps shared headers and RAM definitions such as `mctbl.h`, `msg.h`, `ys_bgcheck.h`, `ys_mapobj.h`, `ys_mram.asm`, and `ys_ram.asm`.

That makes `union` the place where game-side logic, shared data tables, and memory layout rules were being kept consistent across the rest of the project.

---
## The Message Pipeline
The `msg` folder is one of the easiest places in the archive to see a full authored-data workflow from start to finish.

{% capture yi_msg_body %}
The folder keeps editable message inputs, intermediate data, converted outputs, label tables, converter source, and even older boss-message backups.
That makes it one of the clearest miniature pipelines in the whole archive.
{% endcapture %}

{% capture yi_msg_items %}
- *.cmt - Human-edited message input files grouped by boss, bonus, map, and event families
- *.dat - Main message data files used as the converter input or intermediate working form
- *.dat.OUT - Converted output files emitted for the asm side to consume
- msg.LBL - Shared character and control-code label table used by the converters
- msgcnv.c / msgcnvO.c / msgcnvS.c - Three related message converters for different script/control-code cases
- BOS_OLD - Backup set of older boss message files preserved beside the live data
{% endcapture %}

{% include connected-folder-tree.html folder="msg" path="日本_Ver2/msg" body=yi_msg_body version="/" content=yi_msg_items %}

At a glance, the folder keeps:

Type | Count | What it looks like
---|---|---
`.dat` | 96 | Message source or intermediate data files
`.cmt` | 84 | Companion text/comment-style input files
`.OUT` | 87 | Converted output ready to be pulled into the asm side
`.c` | 4 | Converter source code
No extension | 10 | Helper binaries and small support files

The file naming is grouped by content family rather than by one flat script list.
There are boss and miniboss groups like `bos14`, `bos18`, `bos24`, `bos68`, baby or bonus groups like `bonb0` through `bonb5`, Kamek or Koopa-flavored groups like `kupa0` through `kupa5`, ending sets like `end0` and `end1`, and many numbered `n_msgb...` files that look like map-point or stage-event messages.

What makes the folder especially nice is that many files survive in threes:

* a `.cmt` input file
* a `.dat` file
* a `.dat.OUT` converted output file

That makes the production flow much easier to infer.
This was not just a folder of final compiled dialogue blobs.
It preserves authored message content, an intermediate message representation, and the converted output that the asm side would actually consume.

The converter source confirms that.
`msgcnv.c`, `msgcnvO.c`, and `msgcnvS.c` are all by **S. Takahata**, and each one reads a message input file plus a shared `msg.LBL` label table before writing a matching `.OUT` file.

The three converter variants also suggest different script dialects rather than one universal parser:

Tool | What stands out
---|---
`msgcnv.c` | Base message converter that emits `BYTE` lines from the label table and handles spacing/newline markers
`msgcnvO.c` | Variant that understands extra embedded argument values, including two-digit hex payloads after special control labels
`msgcnvS.c` | Similar to `msgcnvO.c`, but specialized around another control-code family

That distinction matters because it shows the message system was not only about text characters.
The scripts were also carrying inline control values for layout or behavior.

`msg.LBL` is the bridge between the human-authored side and the assembler side.
Even in raw form it is clearly a character/control lookup table, with romanized label names for kana and other symbols.

The checker tools reveal another layer of polish.
`ys_msgchk.c` is described as a Yoshi message-data editing/check program by **N. Okajima** dated **20 July 1995**.
It reads a `.dat` file, measures character widths through `ys_msgchk.h`, inserts line and page markers such as `@05`, `@06`, `@0E`, `@0F`, and `@FF`, and writes a reflowed `ch_*.dat` output.

That means the message pipeline was doing more than raw encoding.
It was also validating how dialogue would fit inside the actual message boxes on screen.

There are even small editorial traces left behind.
`msg.LBL~`, `msgcnv.c~`, `msgcnvO.c~`, and `msgcnvS.c~` preserve nearby backup copies, while the `BOS_OLD` subfolder keeps older boss message data like `bos24.dat`, `bos28.dat`, and `bos68.dat`.

So the `msg` folder is not just "where the text lives".
It is a compact record of how Yoshi's Island scripts were authored, encoded, line-checked, versioned, and turned into build-ready resources.

---
## The Auxiliary Chip Program
The `chip` folder deserves to be treated as its own program, not just as a few support files beside `sfc`.

Its `Makefile` builds a separate `"yossy" M-chip program` using a different toolchain from the main SNES code:

Step | Tool | What it does
---|---|---
Assemble | `sasm` | Assembles `.asm` files into `.pok`
Link | `slnk` | Links the `.pok` files into `ys_chip0.hex`
Map postprocess | `emln` | Uses `../union/mctbl.h` with the generated map
Copy to main build | `cp` | Copies the resulting hex into `../sfc`

The output layout is also banked separately from the main game, with group ranges like `Group_8`, `Group_9`, `Group_A`, `Group_B`, and `Group_F`.
So this is not just another naming convention inside the same program.
It is a distinct auxiliary processor-side image that feeds into the final cartridge build.

The file mix reinforces that:

Type | Count | What it suggests
---|---|---
`.asm` | 16 | Real source modules survive
No extension | 9 | Small helper scripts and local command wrappers were kept in place
`.inc` | 2 | Shared include files survive
`.hex` | 1 | Built chip image survives
`.map` | 1 | Linker map survives
`.CGX` | 1 | Graphics-side companion data was still tied into this area

`ys_chip0.asm` makes the role of the folder even clearer.
It calls itself the `"mario chip program"`, defines its own groups and sections, exports math and wave symbols like `COS`, `SIN`, `LCOS`, `LSIN`, and `FURA_WAVE_MAP`, and contains a substantial `DT_UNCOMPRESS` routine for unpacking data.

That is especially interesting because it means the chip side was not only doing sound or a tiny stub of glue code.
It was handling decompression and math-heavy utility work that the rest of the project depended on.

`ys_mplay.asm` then shows the other half of the picture.
It calls itself the `"mario chip player program"` and exports a huge amount of player, collision, movement, and object-handling logic.
The extern tables it references include:

* player status and movement data
* enemy and extra-object mode tables
* water, soap, snow, mud, and surface-state logic
* animation patterns, walking sound data, jump states, and object-spawn helpers

So the `chip` folder looks much less like a narrow audio-only sidecar than a broad support processor program handling shared movement, helper logic, decompression, and related subsystem work.

One particularly nice production detail is that the `chip` makefile copies its final `ys_chip0.hex` back into `../sfc`.
That makes the relationship between the two folders explicit:
the main game build and the chip-side build were separate, but they were still part of one coordinated cartridge-generation workflow.

---
## The Main SFC Build
The `日本_Ver2/sfc/Makefile` lays the main build process out very clearly.

Step | Tool or target | What it does
---|---|---
Assemble | `as65c` | Assembles every `.asm` file into `.rel`
Link | `link` | Links the huge module list into `ys_main.lnk`
Load | `load` | Produces `ys_main.hex`
Symbols | `insp -f -s` | Emits `ys_main.sym`
Character map | `taraka yschr` | Generates `yschr.map`
Final map merge | `azrael` | Combines `ys_main.map`, `ys_chip0.map`, and `yschr.map`
ROM split | `hex2bin` | Produces either `ys_rom_16` or four-way split `ys_rom` binaries

The makefile also shows that this branch was managing multiple regional and bug-fixed code paths from one source base.
The `VERSION` flags set `NES=0`, `JPN=1`, `PAL=0`, while also enabling several bug toggles such as `BUG00`, `BUG02`, `BUG03`, `BUG10`, and `BUG20`.

That makes `日本_Ver2` more revealing than a plain Japanese retail tree.
The source still contains conditional code for Japanese, NES/US, and PAL behavior, so this branch was clearly carrying localisation and bug-fix work rather than being a sealed-off domestic-only snapshot.

The module list is also enormous.
Besides the core program files like `ys_init.asm`, `ys_game.asm`, `ys_play.asm`, and `ys_map.asm`, the build pulls in:

* fourteen numbered enemy modules from `ys_enmy.asm` through `ys_enmy14.asm`
* boss and special-character files such as `ys_boss1.asm`, `ys_boss2.asm`, `ys_bbbros.asm`, `ys_koopa.asm`, `ys_dorobo.asm`, and `ys_babym.asm`
* world modules from `ys_w11.asm` all the way through `ys_w70.asm`
* message, map, player-data, and object data modules such as `ys_msgdt.asm`, `ys_mapdt.asm`, `ys_pldt.asm`, `ys_mpobj.asm`, and `ys_mpmv.asm`

That is one of the clearest signs that the leak is preserving the actual shipped game program rather than a stripped teaching example.

---
## How the World Modules Are Structured
The numbered world files like `ys_w11.asm`, `ys_w48.asm`, and the rest of the `ys_w11` through `ys_w70` set are some of the most revealing files in the whole archive.

At first glance they look like ordinary asm modules, but they are really hybrid content containers.
Each one pulls several parts of the production pipeline together in one place:

* raw `BGDT_xx_xx` background data blocks converted from named `.dat` files
* door and room-transition metadata that points into `ys_mapdt` course tables such as `CORS_10_00` or `CORS_47_03`
* packed enemy/event placement tables under `ENDT_xx_xx`
* player spawn positions and door-mode flags such as `PO_NORMAL`, `PO_DK_O_D`, and `PO_DK_I_U`

`ys_w11.asm` shows the pattern very cleanly.
It identifies itself as a `"BG data file"`, then embeds several converted blocks from named source files like `start.dat`, `w1ren00.dat`, `saish00e.dat`, and `saish01d.dat`.
After the large `HEX` data regions, it adds explicit next-room metadata such as door position, course-table pointer, player X/Y position, and player mode.
Then, lower down, it includes enemy/event records under `ENDT_00_01` using entries like `MSGBX`, `JBLK0`, `HEIH0`, and `YAJI0`.

That combination is historically useful because it shows the stage modules were not only "background maps".
They were junction points where visual layout, room transitions, and entity placement all met.

`ys_w48.asm` adds another important wrinkle: bug-flagged and regional variation inside a world file.
Near the top it has an `IF BUG01` block that switches the source data from a Japanese `kamee00b.dat` version to a bug-fixed `kam00b-n.dat` variant dated **13 July 1995**.

That is one of the best examples on the whole page of how the branch was really being used.
Nintendo was not just toggling bug fixes in the high-level engine files.
Specific stage data modules were also being swapped and rebuilt behind `BUG` and regional conditionals.

So the `ys_wXX.asm` family is worth reading as the point where authored data stopped being abstract folders and became concrete game-stage modules inside the final build.

---
## A Full Stage Trace: World 4-8
One of the best ways to understand the whole archive is to follow one stage across multiple folders.
World 4-8 works especially well because its naming survives cleanly in several places at once.

On the program side, `ys_mapdt.asm` defines:

* `CORS_47_00` - marked as `[4-8]`
* `CORS_47_01` - marked as `[4-8]`
* `CORS_47_02` - marked as `[4-8]`
* `CORS_47_03` - marked as `[4-7]`

Then `ys_w48.asm` pulls those course pointers directly into its door and transition metadata.
That alone is already useful, because it shows stage flow was not inferred from one giant map blob.
The world module explicitly points at course-table entries for its connected rooms and boss area.

The same stage also survives in the `course` workspace as:

* `course/parmt/w_4/w48_1.prm`
* `course/parmt/w_4/w48_2.prm`
* `course/parmt/w_4/w48_3.prm`

That is the clearest sign yet that one stage was not authored as one indivisible resource.
At least for 4-8, the parameter side was split into multiple fragments that could be listed, backed up, and rebuilt independently.

The background and event data line up just as neatly.
Inside `ys_w48.asm`, the main converted resource blocks are:

* `kamee00b.dat` or the bug-fixed `kam00b-n.dat` variant for `BGDT_47_00`
* `kamee01a.dat` for `BGDT_47_01`
* `kmbosss.dat` for `BGDT_47_02`
* `kamee02.dat` for `BGDT_47_03`

And those same names survive in the authored data folders:

File | Background size | Event size | What that suggests
---|---|---|---
`kamee00b` | 1,342 bytes | 373 bytes | Main area with substantial visual and placement data
`kamee01a` | 791 bytes | 394 bytes | Another large room/segment with lots of placements
`kmbosss` | 399 bytes | 23 bytes | Boss-focused segment with much heavier BG side than event side
`kamee02` | 108 bytes | 23 bytes | Very small transition or setup segment

That size pattern is useful.
It suggests the stage was broken into at least four authored chunks with very different densities, likely mixing larger explorable areas with tiny boss or transition segments.

The art side also lines up.
The same branch keeps Kamek- and 4-8-related assets such as:

* `OBJ/KAME.OBX`
* `OBJ/KAMEKKU-MAGIC.OBJ`
* `OBJ/MAGIC-KAMEKKU-FAR.OBJ`
* `char/B3-KAME-BOSS.scr`
* `char/kameboss-NEW.CGX`
* `col/KAMEBOSS-NEW.COL`
* `char/ROM-47.CHRN` and `ROM-47-A.CHRN`

So if you trace 4-8 through the leak, the chain looks something like this:

* stage parameter fragments under `course/parmt/w_4`
* named background and event resources under `bgdt` and `endt`
* matching Kamek and boss art in `OBJ`, `char`, and `col`
* final stage assembly in `ys_w48.asm`
* course-table references in `ys_mapdt.asm`

---
## What Survived Beside the Source
The `sfc` folder is useful partly because it is messy.
It does not only keep plaintext asm.
It also keeps the kinds of outputs and scratch files that tend to vanish once a project is archived cleanly.

The file types in `日本_Ver2/sfc` include:

Type | Count | What it suggests
---|---|---
`.asm` | 109 | Main source modules dominate the folder
No extension | 45 | Build helpers, scratch files, scripts, and utility leftovers were kept in place
`.bin` | 6 | Built ROM slices or binary assets survived
`.hex` | 2 | Linked outputs were preserved
`.map` | 2 | Linker maps survived
`.lst` | 2 | At least some assembly listings were kept
`.sym` | 1 | Symbol output survives
`.lnk` | 1 | Linked image survives
`.cnf` | 1 | Runtime or build configuration survived

The built artifacts make the folder much more grounded:

* `ys_main.hex`, `ys_main.map`, `ys_main.sym`, and `ys_main.lnk` show the main game image after link/load
* `ys_chip0.hex` and `ys_chip0.map` show that the separate `chip` side was also being built in parallel
* `ys_rom_0.bin` through `ys_rom_3.bin` and `ys_rom_16_0.bin` show two different ROM-splitting strategies from the same build products
* `ys_date.inc` is regenerated during `clean`, which means date stamping was part of the everyday build flow

The scratch filenames are also revealing.
Files like `run`, `run2`, `run3`, `to_rom`, `rom`, `rom2`, `list_out`, `objtype.out`, and odd leftovers like `ys_game_edit.asm`, `ys_mplay.lst`, and `ys_enmy3.lst` make the folder feel lived in rather than polished for handoff.

---
## Documentation and Debug Notes
The `日本_Ver2/doc` folder is small, but it is one of the best places in the archive for understanding what the team was actively worrying about.

The strongest documents are these:

Document | What it reveals
---|---
`debug_mode.doc` | Explicit cheat and patch addresses for multiple debug modes in Japanese Ver2.0
`v2_bug.doc` | A tiny bug note naming a "multiply speed set bug" as a Ver2.0 fix
`v2_chg.doc` | Placeholder for Ver2.0 changes, but effectively empty in this snapshot
`check_sum.doc` | Build or verification-oriented documentation
`ramdoc`, `ys_ram.asm`, `ys_mram.asm` | The project was documenting RAM layout, not just code logic
`ys_enmy.doc`, `enmy.doc`, `enmy1.doc` | Enemy behavior and layout had their own supporting docs
`ystool.doc` | Tool-side documentation survived inside the main branch

`debug_mode.doc` is especially nice because it is so concrete.
It describes several ways to unlock development features by patching instructions to `EAH`:

* choosing the second file can turn `START` and `SELECT` into a course-clear shortcut
* choosing the third file can mark the whole game cleared and unlock all items
* the second controller can then trigger a perfect demo, world-clear demo, or ending sequence
* a separate player and boss debug mode can be unlocked through button combinations
* there is also a system pause mode with frame advance on the second controller

That is exactly the sort of material that shows how an internal test branch was really used.

The bug notes are useful too, even though they are short.
Inside `ツール`, `next_chg.doc` lists fixes planned for the next version, including a PAL save-data clear issue and a PAL-only rotating line-lift bug.
`not_chg.doc` keeps a list of unresolved bugs, including disappearing flowers, collision issues, missing map objects, and corrupted graphics after Yoshi vanishes in `4W-1`.

Together, those notes make the archive feel much closer to a late bug-tracking workspace than a sanitized code release.

---
## The Course Parameter Workspace
The `course` folder is much smaller than `bgdt` or `char`, but it is more structured than it first appears.
Instead of one flat pile of data files, it centers on `course/parmt`, which is split by world into `w_1` through `w_6`.

Inside each world folder, the layout is highly regular:

* one `wN.lis` listing and a matching `.BAK`
* one `all` file and a matching `.BAK`
* a group of stage parameter files like `w11_0.prm`, `w11_1.prm`, `w18_4.prm`, `w28_7.prm`, or `w58_6.prm`

That strongly suggests the `course` tree is holding per-stage parameter chunks rather than monolithic map data.
The numbering also maps neatly onto the world-module naming in `sfc`, which makes the relationship between `course/parmt/w_4/w48_*.prm` and `ys_w48.asm` hard to miss.

The variation in file counts is useful too.
Some stages have only one or two `.prm` fragments, while others like `w34`, `w28`, or `w58` have many.
That makes the parameter files feel like segmented sub-areas or multiple parameter pages inside one stage rather than one fixed-size record per level.

Even without decoding every `.prm` format, the structure already tells us that stage design data in Yoshi's Island was being broken into many small world-specific parameter units, then gathered into per-world listings and aggregate files during the build process.

---
## The Ending Data Workspace
The `endt` folder is one of the most striking content folders in the branch.
It contains **216** `.end` files and nothing else at the top level except a huge `back_up` directory.

That tells us two things immediately:

* ending and event resources were being authored as their own format, not hardcoded directly into the program
* the team cared enough about iteration here to keep a separate backup tree beside the live data

The filenames line up strongly with the game's worlds, bosses, enemies, and scene concepts.
Examples include:

* world-like names such as `2w3bank.end`, `4w6bank.end`, `6w7bank.end`, and `7upzone.end`
* boss or character-flavored names such as `bossbro6.end`, `kemeboss.end`, `kmbosss.end`, `jugem00e.end`, and `kamee01a.end`
* environmental or scene names like `jungl00a.end`, `snow01c.end`, `sensui.end`, `dokan.end`, and `kisya00.end`

The converter source in `ys_endtcnv.c` explains the basic structure.
It reads an `endt.TBL` file, walks each named `.end` file, and emits `../sfc/ys_endt.asm`.
Each record is read as a fixed 7-byte chunk:

* 5 bytes of entity name
* 1 byte of X coordinate
* 1 byte of Y coordinate

The converter then writes each entry as:

* one `ENDT_xx` label per resource file
* a sequence of `LWORD name|(x<<9)|(y<<17)` lines

That is a very clean clue about what the `.end` files really are.
They look like compact authored event-placement tables, not raw prose, images, or generic blobs.

The file sizes back that up.
Some entries are tiny, only **9**, **16**, or **23** bytes long, which suggests very small scene or marker lists.
Others are much larger, running into the **500-700 byte** range, which implies busier scripted scenes with many placement entries.

So the `endt` folder is best read as a structured event-scene workspace:
dozens of named placement files, a converter that turns them into assembler tables, and a large `back_up` directory preserving the iteration history behind them.

---
## What the Data Docs Show
The docs are also useful for understanding the non-code file formats.

One of the best examples is `ツール/doc/bg_data.doc`.
It is not source code at all.
It is a status table describing how the project classified BG layers and their color sets.

The document lists:

* transparency color values
* `BG1` type and color categories such as underground, grass, underwater, lava, snow, jungle, wall, flower, pipe, and sky
* `BG2` screen and color categories including perspective, night, bubble, forest, castle, jungle, and special mode-switching courses
* `BG3` types for clouds, tornadoes, sandstorms, enemy overlays, jungle, snow mountain, and more

That is the kind of evidence that makes the surrounding converter programs much easier to read.
The tools were not working on abstract "graphics".
They were converting assets against named world and layer categories that the artists and programmers both understood.

---
# The Shared Tool Workspace
The `ツール` folder is not a small afterthought.
It is a 757-file workstation-side support tree with compiled helpers, C source, documentation, and test directories.

{% capture yi_tools_body %}
This folder looks like the PC-side half of the project.
It keeps ready-to-run helper binaries in `bin`, much larger source experiments and X11-era utilities in `ctools`, format docs in `doc`, plus bug notes and small test sandboxes.
{% endcapture %}

{% capture yi_tools_items %}
- bin - Ready-to-run helper binaries such as `ys_bgdtcnv*`, `ys_colcnv`, `ys_msgchk`, `ys_m7cnv`, `ys_scrcnv`, and `ys_endcnv`
- ctools - Large source-side tool farm with many Yoshi-specific converters, X11 helpers, geometry utilities, and test programs
- doc - Tool-side docs including `bg_data.doc`
- next_chg.doc - "Fix in the next version" bug note
- not_chg.doc - "Unfixed bugs" list
- donkey_test - Small test workspace
- sleep_test - Small test workspace
- press - Packaging or compression-side helper area
- tool - Additional support utilities
{% endcapture %}

{% include connected-folder-tree.html folder="ツール" path="ツール" body=yi_tools_body version="/" content=yi_tools_items %}

The names inside `bin` and `ctools` reveal several distinct production pipelines rather than one monolithic converter.

Tool family | Examples | What it most likely handled
---|---|---
Background data | `ys_bgdtcnv`, `ys_bgdtcnv1` ... `ys_bgdtcnv38`, `bgdtchg`, `ys_colcnv` | Background/status data conversion and color handling
Map and point data | `ys_mpdtcnv`, `ys_mpdtcnv1`, `ys_m7cnv`, `ys_m7scr`, `ys_md7scr` | Map point data and Mode 7-style or map-screen conversion
Objects and enemies | `ys_objcnv`, `ys_obtpcnv`, `ys_obzcnv`, `eobjcnv`, `ys_enset`, `ys_enhmk` | Object, enemy, and type conversion
Messages and text | `msgcnv`, `ys_msgchk`, `ys_msgcntchk`, `ys_ename` | Message conversion, checking, and name-table generation
Screen and ending data | `ys_scrcnv`, `ys_endtcnv`, `ys_msge_picture` | Screen-layout and ending/event conversion
General workstation utilities | `xgraphic.c`, `xbutton.c`, `xdirset.c`, `xwdcnv.c`, `xwinutil.c` | X11-oriented editor or UI support code

`ctools` is especially interesting because it keeps both binaries and the C source for many of those programs.
It is full of small standalone utilities such as `bg3kage.c`, `course.c`, `koopa_scr.c`, `m7pars.c`, `scrchange.c`, and many converter variants with incremental suffixes like `ys_bgdtcnv21.c` through `ys_bgdtcnv38.c`.

That naming pattern feels much more like active iteration than one tidy public SDK.
The team was clearly cloning tools forward, testing new converter behavior, and keeping old revisions in place instead of replacing them cleanly.

---
## The Sound Workspace
The `sound` folder is compact, but it makes the audio side of the project feel much more tangible.

At the top level it keeps a set of prebuilt binary banks rather than source modules:

* `ys_sound.BIN`
* area or context-specific files like `ysgame0.bin`, `ysgame1.bin`, `ysboss.bin`, `ysbonus.bin`, `ysmap.bin`, `ystitle.bin`, `ysend.bin`, and `ysed.bin`
* other themed banks such as `yschika.bin`, `ysshiro.bin`, `yskuppa.bin`, `yslets.bin`, `ysse.bin`, `ysgm.bin`, and `ysor.bin`

That suggests the sound workspace in this branch is preserving assembled or exported music and sound-effect banks rather than the music source language itself.
In other words, the archive gives us the audio payloads the build used, but not the full composition-side authoring environment.

Even so, the filenames are still useful.
They show that audio was being organized by gameplay context and scene type instead of as one generic sound blob.
Boss, bonus, map, title, ending, cave, castle, and sound-effect banks were all being treated as distinct deliverables.

That fits well with the rest of the project structure.
The Yoshi's Island archive keeps many of the late-stage build products beside the source, and `sound` looks like the audio equivalent of that same pattern.

---
## Screen and Panel Authoring Files
The `scr_file` and `pnl` folders fill in another part of the content pipeline that would be easy to miss if you only read the asm.

`scr_file` looks like a library of authored screen templates and test layouts.
It contains named `.SCR` resources for:

* BG layer studies like `B2-CHIKA.SCR`, `B2-MIZU.SCR`, `B3-KUMO.SCR`, and `B3-YUKI.SCR`
* map or HUD experiments such as `MAP-M7.SCR`, `MAP-bg3.SCR`, `Map-Small.SCR`, `score.SCR`, and `SCORE-B1.SCR`
* mode or sample files like `M7-KOOPA-SAMPLE.SCR`, `mode7ts.SCR`, and `Dr_Mario.SCR`

That mix makes `scr_file` feel less like finished game content and more like a reusable screen-design and testing workspace.

`pnl`, by contrast, is extremely systematic.
It contains a large numbered run of `bg1-00` through `bg1-A6` style `.PNL` files, plus helpers like `ys_unit.TBL`, `unit.dat`, `yspn`, `yspn1`, `yspnmk`, and `yspnmk1`.

That suggests `pnl` was the panel or tile-layout side of the background pipeline:

* many small numbered panel units
* a table file describing how those units were indexed or combined
* helper utilities for generating or packing the panel outputs

Taken together, `scr_file`, `pnl`, `bgdt`, and `char` make the visual pipeline look highly modular.
Nintendo was working with reusable screens, panel sets, background-data blobs, and character resources that could be converted and recombined during the build.

---
## The Character and Color Workspaces
The `char`, `col`, and `col_file` folders are where the visual production side really opens up.

{% capture yi_char_body %}
This is the most obviously multi-format art workspace in the branch.
It keeps screen previews, banked character data, chip-side conversion sources, packed palette banks, and more descriptive palette staging files all side by side.
{% endcapture %}

{% capture yi_char_items %}
- char - Main graphics workspace with `.CHRN`, `.CHR`, `.CGX`, `.SCR`, `.scr`, `.scrN`, `.CH7`, and `.CPC`
- col - Packed or normalized palette banks such as `COL-0.COL` through `COL-34.COL` plus named sets like `KAMEBOSS-NEW.COL`
- col_file - More descriptive palette-source staging area with names like `KUSA-KAME-BOSS.COL` and `MAP-KAITEN.COL`
- chipchr.c - Converter for `.CH7` source banks into `.CPC` chip-side character outputs
- ys_colcnv.c - Palette packing and label-generation step that turns `.COL` sources into build-ready color data
{% endcapture %}

{% include connected-folder-tree.html folder="char" path="日本_Ver2/char" body=yi_char_body version="/" content=yi_char_items %}

`char` alone contains over a thousand files, and its extension spread is one of the clearest clues about how many intermediate formats the team was juggling:

Type | Count | What it most likely represents
---|---|---
`.CHRN` | 334 | Character-bank or tile-bank resources, often stage- or ROM-group-specific
`.scr` | 153 | Working screen-layout or preview files
`.scrN` | 152 | Closely paired alternate or normalized versions of the same screens
`.SCR` | 137 | Another screen-layout/export flavor, often kept beside lowercase variants
`.CHR` | 149 | Character graphics or tile data in another banked format
`.CGX` | 50 | Larger graphics blocks, often for whole art sets or grouped ranges
`.CPC` | 20 | Converted chip-side character data
`.CH7` | 10 | Mode 7 or chip-side character source banks

The naming makes the folder feel like a real graphics workshop rather than a final asset dump.

There are several broad families inside it:

* range-based banks like `0-7.CGX`, `40-47.CGX`, `90-97.CGX`, and `11A-121.CGX`
* stage or ROM slices like `ROM-47.CHRN`, `ROM-47-A.CHRN`, `ROM-47-B.CHRN`, and so on
* many BG-layer preview screens such as `B2-JUNGLE.scr`, `B2-MIZU.SCR`, `B3-NIGHT.SCR`, and `B3-MORI.scr`
* highly specific boss or setpiece resources like `B3-KAME-BOSS.scr`, `B2-KOOPA-ROOM.scr`, `B3-BOSSROOM.scr`, and `kameboss-NEW.CGX`

That variety matters because it shows the artists and tool authors were not working in one universal graphics format.
They were keeping multiple banked, rotated, screen-level, and color-side representations of the same broad visual material.

The tool sources help explain why.
`chipchr.c` is described as a `chip OBJ rotation chara convert` program.
It reads a `.CH7` file and produces a `.CPC` output, rearranging pixel data into the format needed for chip-side rotated object graphics.

That means pairs like:

* `28-2F.CH7` and `28-2F.CPC`
* `80-87.CH7` and `80-87.CPC`
* `11A-121.CH7` and `11A-121.CPC`

are not redundant copies.
They are source-and-converted representations for a specific graphics-processing path.

The color side is just as structured.
The main `col` folder contains numbered banks like `COL-0.COL` through `COL-34.COL`, named palettes like `KUSA.COL`, `SORA.COL`, and `KAMEBOSS-NEW.COL`, plus helper files like `yscol.TBL`, `yscol`, `yscol1`, `yscolmk`, and `yscolmk1`.

`col_file` looks more like a design-side staging area.
It keeps more descriptive names such as:

* `KUSA-KAME-BOSS.COL`
* `KUSA-en-kin.COL`
* `MAP-KAITEN.COL`
* `score.COL`
* `soapland.COL`
* `v-ram-kabe.COL`
* `v-ram-room.COL`

That split is useful.
It suggests `col_file` held more human-meaningful source palette files, while `col` held the normalized or packed palette banks used by the build.

`ys_colcnv.c` confirms that conversion step.
It reads a table file, opens named `.COL` palette files, extracts selected color ranges, writes a label table, and emits one packed binary color-data output.

The pipeline around `char` is easier to read if you break it into stages:

* screen and tile experiments in `.SCR`, `.scr`, and `.scrN`
* character-bank assets in `.CHR`, `.CHRN`, and `.CGX`
* specialized chip-side transforms through `.CH7` to `.CPC`
* palette authoring in `col_file`
* palette packing and label generation into `col`

The World 4-8 chain makes this especially concrete.
That stage links to:

* `char/ROM-47.CHRN` and `ROM-47-A.CHRN`
* `char/B3-KAME-BOSS.scr`
* `char/kameboss-NEW.CGX`
* `col/KAMEBOSS-NEW.COL`
* `col_file/KUSA-KAME-BOSS.COL`

---
## The Object Sprite Pipeline
The `OBJ` folder fills in the other half of the visual side: moving sprites, enemy pieces, effect graphics, and object-bank assignments.

{% capture yi_obj_body %}
This is where enemy, boss, effect, and demo object resources were kept before being turned into assembler tables and bank assignments.
The surrounding tool sources show that these files were part of a repeatable conversion path rather than loose art blobs.
{% endcapture %}

{% capture yi_obj_items %}
- *.OBJ - Main object and sprite-layout resources for enemies, bosses, effects, demos, and setpieces
- *.OBX - Companion object format used by a smaller number of larger or special cases
- eobjcnv.c - Converts one `.OBJ` resource into assembler-ready object bytes with explicit offsets
- ys_objcnv.c - Generates `ys_pld.h` and `ys_pldt.asm` from table-driven object resources
- ys_obtpcnv.c - Builds object-bank assignment data that lines up with `OBJCHRBK` usage in `ys_init.asm`
{% endcapture %}

{% include connected-folder-tree.html folder="OBJ" path="日本_Ver2/OBJ" body=yi_obj_body version="/" content=yi_obj_items %}

Its file mix is simple but telling:

Type | Count | What it suggests
---|---|---
`.OBJ` | 110 | Main object or sprite-layout resources
`.OBX` | 9 | Variant or companion object format used for some larger or special cases

The filenames make the folder feel very close to active game production rather than a cleaned technical dump.
It contains direct references to enemies, bosses, effects, and special scenes such as:

* `KAMEKKU-NEW.OBJ`, `KAMEKKU-MAGIC.OBJ`, and `MAGIC-KAMEKKU-NEW.OBJ`
* `BIG-HEIHO.OBJ`, `GHOST-HEIHO.OBJ`, and `Tubo-Heiho.OBJ`
* `JUGEMU02.OBJ`, `MIZU-JUGEMU02.OBJ`, and `ANA-JUGEMU-NEW.OBJ`
* `TORIBOSS-KIRARI.OBJ`, `OPENING-7-KAMECCK.OBJ`, and `W1-DEMO-YOSHIS.OBJ`
* effect and reaction files like `BAKUHATU-1.OBJ`, `MAGIC-KIRAKIRA.OBJ`, `MIZU-SHIBUKI.OBJ`, and `YUKI-CHIRI.OBJ`

That tells us the folder is not limited to one object class.
It mixes enemy art, boss-specific pieces, setpiece graphics, opening/demo assets, and transient effect graphics.

The converter sources explain how these files were being used.

`eobjcnv.c` takes one named `.OBJ` file plus X and Y offsets, reads a fixed `32 x 64 x 6` object-data structure, and emits `eobj.dat` as assembler-ready byte pairs for position, character number, attributes, and size.

That looks like a direct bridge from a design-side object layout file into stage- or enemy-placement data the asm side could consume.

`ys_objcnv.c` goes further and shows a whole table-driven object build.
It reads object names from `ysobj.TBL`, opens corresponding `.SPR` files, and generates:

* `../sfc/ys_pld.h` - pattern-name equates
* `../sfc/ys_pldt.asm` - object count tables, pointer tables, and packed object data

That is a really important clue.
At least one object-art pipeline was not just "manually copied into the game".
It was systematically generating assembly include files used by the main program.

`ys_obtpcnv.c` reveals another layer again.
It reads an `.ojd` object-bank data file plus `objtyp.dat`, then emits `objtyp.lis` entries named relative to `CHR10`.
That lines up very well with what survives in `ys_init.asm`, where `OBJCHRBK` is used to assign object character banks based on object type.

So the broad object pipeline seems to have looked something like this:

* authored sprite or object resources in `OBJ`
* table-driven conversion through tools like `ys_objcnv.c`
* generated object and pattern tables in `ys_pld.h` and `ys_pldt.asm`
* object-bank assignment through `ys_obtpcnv.c` and `OBJCHRBK`
* runtime palette selection through object color tables such as `OBJ_MAIN_COL`, `OBJ_SUB_*_COL`, `KOPPA_OBJ_COL`, and `KOOPA_OBJ_COL` in `ys_color.h`

That ties `OBJ`, `char`, and `col` together very neatly.
They are three parts of the same sprite-production path: object layouts, graphics banks, and palette/bank selection.

---
## The Background and Map Data Workspaces
Two of the biggest non-code folders in `日本_Ver2` are `bgdt` and `mpdt`, and the converter sources make their roles much easier to explain.

`bgdt` is the larger one by far.
It contains **220** `.dat` files at the top level, plus a `back_up` directory.
Many of the filenames closely mirror the ones in `endt`, which suggests that the two folders were often tracking parallel aspects of the same stages or scenes.

A few examples make the overlap obvious:

* `2w3bank.dat` and `2w3bank.end`
* `4w6bank.dat` and `4w6bank.end`
* `bossbro6.dat` and `bossbro6.end`
* `jungl00a.dat` and `jungl00a.end`
* `sensui.dat` and `sensui.end`

That does not mean the formats are the same.
In fact, the size pattern suggests the opposite.
The `.dat` files are usually much larger than the matching `.end` files, often by several times, which fits the idea that `bgdt` stores background/status/layout data while `endt` stores compact event-placement records.

The converter source `ys_bgdtcnv.c` confirms that the format is treated as raw binary background data.
It takes one named `.dat` file, reads it byte-for-byte, and writes a `bgdt.lis` listing with:

* a generated timestamp header
* a global `BGDT_00_00` label
* straight `HEX` lines for the data bytes
* a trailing `FF` separator

That is a very plain conversion step, and that plainness is useful.
It suggests the heavy semantic work happened earlier in the editor pipeline, while `ys_bgdtcnv.c` served mainly as the final "turn this prepared background data into assembler-friendly bytes" stage.

`mpdt` is smaller, but more explicit about structure.
It keeps `.mpd` and `.pdt` files like `map01.mpd`, `now_map1.pdt`, and `w6-map-2.pdt`, plus `mpptdt.TBL` and `mpdobj.lis`.

`ys_mpdtcnv.c` shows that the `.pdt` side stores map-point status data:

* map type
* parts pointer
* course data pointer
* timer
* player start position
* multiple "course clear" branches with next-point links
* arrays of per-state player movement data

The converter sorts records by world, rewrites next-point references, and emits labels like `MPSTATUS`, `MPSTAT_xx`, and `MPCLR_xx_y`.

So the broad data picture in Yoshi's Island looks like this:

* `bgdt` holds large prepared background/status/layout data blobs
* `endt` holds compact event-placement records that become `ys_endt.asm`
* `mpdt` holds world-map or point-status progression data with explicit branching and player-position state

---
## Why the Tool Workspace Matters
The most valuable thing about `ツール` is that it explains where the giant non-code folders in `日本_Ver2` came from.

Without `ツール`, folders like `bgdt`, `endt`, `msg`, `pnl`, and `mpdt` would mostly look like opaque game data.
With the converters beside them, the archive reads much more clearly as a workstation-to-cartridge pipeline:

* authored background categories in docs like `bg_data.doc`
* editable resource files in folders such as `msg`, `mpdt`, and `endt`
* dedicated converters for those formats in `bin` and `ctools`
* final SNES program modules in `sfc` that consume the converted outputs

That is the main reason this archive is so valuable.
It shows not just what the shipped code looked like, but how Nintendo's staff were moving from authored content on the workstation to game-ready data on the cartridge.

---
# The NEWS Tape Restores
The separate `NEWS.7z` archive adds another Yoshi's Island angle under `other/NEWS/テープリストア`.
Two of the restored tape tarballs, `NEWS_09.tar` and `NEWS_11.tar`, contain substantial Yoshi-related material.

They are not structured like the `日本_Ver2` source tree.
Instead of one integrated project folder with `sfc`, `chip`, `union`, `msg`, and `bgdt`, these are personal workstation-style archives:

* `NEWS_09` keeps its files under `./home/nogami/yoshi/`
* `NEWS_11` keeps its files under `./hino/yoshi/`

That difference matters immediately.
These tapes look like individual art and layout workspaces rather than whole-project source snapshots.

The broad comparison looks like this:

Archive | Main location | What it mostly contains | How it relates to `日本_Ver2`
---|---|---|---
`NEWS_09.tar` | `home/nogami/yoshi` | Art assets, palettes, panel files, maps, many backups, and several VRAM-oriented subfolders | Overlaps the main `char`/`OBJ`/`col` material, but often preserves earlier or alternate versions
`NEWS_11.tar` | `hino/yoshi` | Much larger art workspace with CGX, OBJ, OBZ, SCR, SPR, test material, region variants, ending material, and many backups | Closer to the late branch than `NEWS_09`, but still much messier and richer in intermediate files than `日本_Ver2`

{% capture yi_news09_body %}
This is not a source tree.
It is a personal Yoshi art workspace full of live assets, VRAM experiments, tests, and rejected material.
{% endcapture %}

{% capture yi_news09_items %}
- OBJ-VRAM - Large VRAM-oriented object graphics staging area
- ENKEI-VRAM - Another sizable VRAM subgroup, likely for perspective or special-scene work
- KINKEI-VRAM - Smaller related VRAM subgroup
- TEST - General testing area for map, BG, and object experiments
- OBJ-BOTU - Discarded or rejected object-side material
- BG-BOTU - Rejected or shelved background-side material
- YOKOMAP-V-RAM - Small horizontal-map VRAM experiment folder
{% endcapture %}

{% include connected-folder-tree.html folder="NEWS_09 yoshi" path="NEWS_09/home/nogami/yoshi" body=yi_news09_body version="/" content=yi_news09_items %}

{% capture yi_news11_body %}
This second workspace is much broader.
It preserves late-looking character banks, animation-state files, sprite resources, ending-specific folders, region variants, and bulk backup sets.
{% endcapture %}

{% capture yi_news11_items %}
- CHR-stock - Large stockpile of character-bank material
- BAK-chr - Bulk backed-up character revisions
- V-RAM - VRAM-specific graphics and palette staging
- 4chr-PNL-BAK - Older panel or four-character-layout backups
- ENDING - Dedicated ending and staff-roll art workspace
- BAK-color - Bulk color and palette backups
- NEW-MAP - Distinct stream of newer map-related work
- SPR - Sprite-state resources kept separately from the main object files
- birds - TIFF test art and raw visual experiments
{% endcapture %}

{% include connected-folder-tree.html folder="NEWS_11 yoshi" path="NEWS_11/hino/yoshi" body=yi_news11_body version="/" content=yi_news11_items %}

---
## What Makes Them Different
The first big difference is simply scope.
The Yoshi folders inside the NEWS tapes are mostly art-side and layout-side workspaces.
They do not contain the integrated program-side structure that makes `日本_Ver2` feel like a full production snapshot.

There is no equivalent of:

* `sfc`
* `chip`
* `union`
* `msg`
* `bgdt`
* `endt`

Instead, the tapes concentrate on the kinds of files that artists and content-side staff would have kept close at hand:

* `.CGX`
* `.COL`
* `.OBJ`
* `.OBX` or `.OBZ`
* `.SCR`
* `.PNL`
* `.MAP`
* many `.BAK` alternates

So the NEWS material is best read as a supplement to the source archive, not a replacement for it.
`日本_Ver2` explains the build.
The NEWS tapes explain more of the day-to-day artwork and iteration that fed into that build.

The extension mix makes that very clear:

Type | `NEWS_09` count | `NEWS_11` count | What it implies
---|---|---|---
`.CGX` | 210 | 582 | Character and graphics-bank work dominates both tapes, especially `NEWS_11`
`.COL` | 125 | 355 | Palette iteration was a major part of both workspaces
`.OBJ` | 117 | 316 | Object-side layout and sprite resources survive heavily in both
`.SCR` | 52 | 286 | `NEWS_11` keeps far more authored screen and scene layouts
`.PNL` | 51 | 91 | Panel and tile-layout work is visible in both, but broader in `NEWS_11`
`.OBX` / `.OBZ` | 38 `OBX` and 1 `OBZ` | 21 `OBX` and 72 `OBZ` | `NEWS_11` preserves a much larger animation or state-oriented object layer
`.SPR` | none visible | 58 | Sprite-state resources are a major extra layer in `NEWS_11`
`.BAK` | 445 | 384 | Both tapes are full of nearby backups rather than polished final-only files

---
## How Much Overlap There Is
There is real overlap with the `日本_Ver2` `char`, `OBJ`, and `col` folders, but not enough to call the NEWS tapes simple duplicates.

By filename:

Archive | Unique filenames in the Yoshi folder | Overlap with `日本_Ver2` art-side filenames
---|---|---
`NEWS_09` | about `1,095` | about `112`
`NEWS_11` | about `2,024` | about `195`

Those counts are only filename overlap, but they are still useful.
Most of the NEWS material does not line up one-to-one with the cleaner `日本_Ver2` art folders.

The overlaps are also mixed.
Some files are exact matches, while others share the same names but not the same contents.

File | `NEWS_09` vs `日本_Ver2` | `NEWS_11` vs `日本_Ver2`
---|---|---
`B3-KONOHA.SCR` | exact match | exact match
`48-4F.CGX` | different content | exact match
`COL-0.COL` | different content | exact match
`B3-KUMO.SCR` | not checked here | exact match
`B2-IWAYAMA.SCR` | not checked here | different content
`MAGIC-KAMEKKU-FAR.OBJ` | different content | not checked here

That pattern is the most important clue in the whole comparison.
The NEWS tapes were not just dumping random duplicates of the final art set.
They preserve a mixture of shared late assets, earlier revisions, and alternate working versions.

---
## What NEWS 09 Adds
`NEWS_09` feels like a focused personal art workspace with a heavy emphasis on object, color, panel, and VRAM-side experimentation.

Its largest subfolders are especially revealing:

Folder | File count | What it suggests
---|---|---
`OBJ-VRAM` | 132 | Object graphics were being staged in a VRAM-oriented workspace
`ENKEI-VRAM` | 86 | Another VRAM-oriented art area, likely for perspective or special background work
`TEST` | 77 | A large amount of throwaway or trial material survived
`KINKEI-VRAM` | 38 | Yet another special-purpose VRAM/art grouping
`OBJ-BOTU` | 11 | Rejected or discarded object-side material
`YOKOMAP-V-RAM` | 4 | Horizontal-map VRAM experiments or special map-display work

That is very different from the cleaner `日本_Ver2/char` folder.
It looks like an artist's live working directory, with multiple side bins for tests, VRAM experiments, and discarded material.

Some of the unique `NEWS_09` names make that especially obvious:

* `-CLR-.CGX`, `-CLR-.OBJ`, `-CLR-.SCR`, and `-CLR-.PNL`
* `-INK-TEST-.CGX` and `-INK-TEST-.COL`
* `test-bg1.scr`, `test-bg2.scr`, `test-bg3.scr`, `test-map.bgx`, and `test-obj.cgx`
* `kamebossdush.cgx`, `kamebossdush.OBJ`, and `kamebossdush.COL`
* many `.BAK` alternates of the same CGX, COL, OBJ, and PNL resources

So `NEWS_09` adds something the main source archive barely shows:
the live scratchpad around the Yoshi art pipeline, including experiments, side variants, and material that may have been abandoned before the cleaner project snapshot was made.

---
## Digging Into NEWS 09
The structure inside `NEWS_09` makes it feel like a rough, production-floor art directory rather than a clean asset handoff.

The biggest clue is how aggressively the files are split into working bins:

* `OBJ-VRAM`
* `ENKEI-VRAM`
* `KINKEI-VRAM`
* `TEST`
* `OBJ-BOTU`
* `BG-BOTU`
* `YOKOMAP-V-RAM`

That is not how the integrated source branch is organized.
Those folder names are much closer to "where the artist put things while working" than "how the final project was meant to be archived."

The file mix reinforces that.
`NEWS_09` is dominated by:

* `445` `.BAK` files
* `210` `.CGX`
* `125` `.COL`
* `117` `.OBJ`
* `52` `.SCR`
* `51` `.PNL`

So this is a very backup-heavy workspace, and that matters historically.
It preserves revision noise that the cleaner `char`, `OBJ`, and `col` folders mostly smooth away.

Some of the filenames are especially revealing:

* `-CLR-.CGX`, `-CLR-.MAP`, `-CLR-.OBJ`, `-CLR-.PNL`, `-CLR-.SCR`
* `-INK-TEST-.CGX` and `-INK-TEST-.COL`
* `test-map.bgx`, `test-map.bcl`, `test-bg1.scr`, `test-bg2.scr`, `test-bg3.scr`
* `holder.scr` and `holder-2.scr`
* `kamebossdush.cgx`, `kamebossdush.OBJ`, and `kamebossdush.COL`

That is the sort of naming you expect from a live experimentation folder.
It captures "clear this out", "ink test this", "hold this version", and "try this map variant" rather than only the names that survived into the final asset bank.

The dates fit that picture too.
The sampled files in `NEWS_09` cluster heavily across `1994` and the first half of `1995`, with many top-level Yoshi art files dating from spring and early summer `1995`.
So this looks like an active mid-development personal workspace rather than a post-release dump.

---
## What NEWS 11 Adds
`NEWS_11` is much larger and feels closer to a late production art repository.
It still overlaps the `日本_Ver2` art folders, but it preserves far more side branches and specialist subdirectories.

Its biggest subfolders are:

Folder | File count | What it suggests
---|---|---
`CHR-stock` | 150 | A large store of character-bank source or staging material
`BAK-chr` | 137 | Backed-up character revisions were kept in bulk
`V-RAM` | 125 | VRAM-specific graphics and palette staging was a major concern
`4chr-PNL-BAK` | 87 | Older panel or 4-character-layout backups were preserved
`ENDING` | 83 | Ending-specific visual work survived outside the main project tree
`BAK-color` | 73 | Bulk color/palette backups
`NEW-MAP` | 62 | A distinct stream of newer map-related art/layout work
`SPR` | 33 | Sprite resources survive here much more explicitly than in `日本_Ver2`

This is also where the NEWS material starts to show things that feel genuinely new rather than just alternate copies.
Examples include:

* many `OBZ` Yoshi movement and action files such as `yoshi-swiming.OBZ`, `yoshi-jump-nobi-KOOPA.OBZ`, `yoshi-fura-fura.OBZ`, and `yoshi-BOSS-END.OBZ`
* explicit region-leaning art variants such as `60-63-JAP.CGX`, `60-63-PAL.CGX`, `74-77-JAP.CGX`, and `74-77-PAL.CGX`
* `birds/` test TIFF files, which look much closer to raw artwork iteration than normal build inputs
* separate `ENDING`, `MAP-YOKO`, `NEW-color`, and `KOOPA-FINAL` folders that make the workspace look strongly task-oriented rather than just format-oriented
* `SPR` files like `CRYS.SPR`, `POLY.SPR`, `KSYS.SPR`, and `P0OB.SPR`, which are much more visible here than in the main branch

Taken together, `NEWS_11` feels like the stronger of the two supplementary archives.
It preserves a lot more of the visual-production process that sits behind the cleaned-up resources in `日本_Ver2`.

---
## Digging Into NEWS 11
If `NEWS_09` looks like a rough personal scratchpad, `NEWS_11` looks like a much broader art and animation workspace that stayed close to the later asset pipeline.

Its top-level subfolders are unusually informative:

* `CHR-stock`
* `BAK-chr`
* `V-RAM`
* `4chr-PNL-BAK`
* `ENDING`
* `BAK-color`
* `NEW-MAP`
* `SPR`
* `birds`

That tells us the workspace was being split by task as much as by file type.
Instead of one flat art dump, it separates stock character banks, VRAM work, color backups, map updates, ending material, and explicit sprite-state resources.

The extension spread is also much richer than `NEWS_09`:

* `582` `.CGX`
* `355` `.COL`
* `316` `.OBJ`
* `286` `.SCR`
* `91` `.PNL`
* `72` `.OBZ`
* `58` `.SPR`
* `53` `.MAP`
* `13` `.tiff`

The `.OBZ` and `.SPR` layers are the standout additions.
They make `NEWS_11` feel much closer to an animation-state and sprite-behavior workspace than the main `日本_Ver2` art folders.

---
## The OBZ and SPR Animation Layer
The single biggest thing `NEWS_11` adds is a huge collection of what look like Yoshi and object animation-state resources.

The `.OBZ` names are extremely descriptive.
They are not generic lumps of binary data.
They read like state labels or action names:

* `yoshi-stop-walk-run-jump.OBZ`
* `yoshi-jump-nobi-KOOPA.OBZ`
* `yoshi-fura-fura.OBZ`
* `yoshi-swiming.OBZ`
* `yoshi-dosun.OBZ`
* `yoshi-low-fiar.OBZ`
* `yoshi-bero-ue-yoko.OBZ`
* `yoshi-bonus.OBZ`
* `yoshi-BOSS-END.OBZ`
* `tamago-run.OBZ`
* `tamago-door.OBZ`
* `tamago-nage.OBZ`
* `baby-mario.OBZ`
* `WORLD-CLEAR-DEMO.OBZ`
* `DOOR.OBZ` and `DOKAN-UP.OBZ`

That naming strongly suggests these files are not just another object-art format.
They look like preauthored state sets for Yoshi, eggs, Baby Mario, doors, pipes, and demos.

The matching `.SPR` files push that interpretation further.
`NEWS_11` keeps top-level sprite resources like:

* `CRYS.SPR`
* `POLY.SPR`
* `KSYS.SPR`
* `P0OB.SPR`
* `PCHG.SPR`
* `SWIM.SPR`
* `SJMP.SPR`
* `SLIP.SPR`
* `BOMB.SPR`
* `SBER.SPR`

It also has a dedicated `SPR/` subfolder containing one-to-one looking companions such as:

* `SPR/yoshi-swiming.SPR`
* `SPR/yoshi-jump-nobi-nage.SPR`
* `SPR/yoshi-oshi.SPR`
* `SPR/yoshi-pelori.SPR`
* `SPR/yoshi-dosun.SPR`
* `SPR/yoshi-stop-walk-run-jump.SPR`
* `SPR/tamago-run.SPR`
* `SPR/tamago-door.SPR`
* `SPR/tamago-nage.SPR`
* `SPR/baby-mario.SPR`

That is one of the strongest "new" areas in the NEWS tapes.
The main `日本_Ver2` branch tells us a lot about character banks and object conversion, but `NEWS_11` adds a much clearer view of animation-state naming and sprite-state organization.

There are also some useful structural clues inside the files themselves.
All `72` of the `.OBZ` files in `NEWS_11` are exactly `27,136` bytes long.
That is a strong sign that they are not arbitrary exported art files.
They look more like fixed-format state blocks or uniformly packed animation resources.

The `.SPR` files are very different.
Their sizes vary widely, from only a few hundred bytes up into the low kilobytes, which makes them feel more like compact descriptor, table, or script-like companions rather than the main payload data.

The basename overlap strengthens that reading.
Out of `72` unique `.OBZ` basenames and `58` unique `.SPR` basenames, `31` names are shared directly.

Some of the strongest pairs are:

* `yoshi-stop-walk-run-jump.OBZ` and `SPR/yoshi-stop-walk-run-jump.SPR`
* `yoshi-swiming.OBZ` and `SPR/yoshi-swiming.SPR`
* `yoshi-swiming-cogi.OBZ` and `SPR/yoshi-swiming-cogi.SPR`
* `yoshi-boyoyon.OBZ` and `SPR/yoshi-boyoyon.SPR`
* `yoshi-ottotto.OBZ` and `SPR/yoshi-ottotto.SPR`
* `tamago-run.OBZ` and `SPR/tamago-run.SPR`
* `tamago-door.OBZ` and `SPR/tamago-door.SPR`
* `baby-mario.OBZ` and `SPR/baby-mario.SPR`

That makes the split much easier to describe.
The `.OBZ` side looks like the heavy per-state asset block, while the `.SPR` side looks like a smaller companion layer for those same states.

The unmatched names are just as interesting.
The `.OBZ`-only set includes things like:

* `WORLD-CLEAR-DEMO`
* `baby-W1-DEMO`
* `yoshi-BABY-KIMEPOSE`
* `yoshi-BOSS-END`
* `yoshi-KAIDAN`
* `yoshi-SUBERI`
* `yoshi-YOGAN`
* `DOKAN-UP` and `DOKAN-DOWN`

So the `OBZ` pool clearly covers demos, special poses, stairs, sliding, lava, and pipe transitions beyond the states that got paired `SPR` companions.

By contrast, the `SPR`-only pool contains shorter symbolic names such as:

* `SJMP`, `SJMP-1`, `SJMP-2`, `SJMP-3`
* `SWIM`
* `SLIP`
* `BOMB`
* `BERO`
* `SBER`
* `DMGE`
* `CRYS`, `POLY`, `KSYS`, and `PCHG`

Those names look more like shorthand state labels or helper tables than user-facing asset names.
Taken together, that makes `NEWS_11` feel like it is preserving a real character-state resource system rather than just a loose pile of sprite files.

One last detail makes this even more important:
those `yoshi-*`, `tamago-*`, `baby-mario`, `WORLD-CLEAR-DEMO`, and `DOKAN-*` names do not show up at all in the main `日本_Ver2` tree.
So this whole naming layer is effectively unique to the NEWS tape workspace.

If you group those names by family, the shape becomes even clearer:

Family | `OBZ` | `OBJ` | `SPR` | What it looks like
---|---|---|---|---
`yoshi-*` | 48 | 53 | 20 | Core Yoshi movement, pose, and interaction states
`tamago-*` | 12 | 3 | 7 | Egg-related actions such as running, throwing, doors, and water-side variants
`baby-*` | 3 | 3 | 1 | Baby Mario-specific demo or reaction states
`DOKAN*` / `DOOR*` | 4 | 2 | 0 | Pipe and door transition resources

That is much more specific than the main source archive.
The integrated `日本_Ver2` branch gives the program, converted art banks, and object tables.
`NEWS_11` adds a much more human-readable action vocabulary for how Yoshi, eggs, Baby Mario, and doors were being staged on the art side.

The Yoshi family alone is broad enough to sketch out a rough state catalogue:

* locomotion and pose states like `yoshi-stop-walk-run-jump`, `yoshi-naname`, and `yoshi-slow`
* terrain or hazard states like `yoshi-SUBERI`, `yoshi-YOGAN`, and `yoshi-mizu`
* interaction states like `yoshi-oshi`, `yoshi-pelori`, `yoshi-bomb`, and `yoshi-bero-ue-yoko`
* balance or stumble states like `yoshi-ottotto`, `yoshi-fura-fura`, and `yoshi-boyoyon`
* climb or transition states like `yoshi-KAIDAN` and `yoshi-KAIDAN-DOWN`
* demo or special-sequence states like `yoshi-BOSS-END`, `yoshi-BABY-KIMEPOSE`, and `yoshi-bonus`

The egg-side names are just as nice because they feel like a miniature subsystem of their own:

* `tamago-run`
* `tamago-nage`
* `tamago-nage-2`
* `tamago-door`
* `tamago-door-out`
* `tamago-umi`
* `tamago-run-KOOPA`

So `NEWS_11` is not only preserving character art.
It is preserving a pretty granular naming layer for movement, interaction, demo, and projectile states that sits somewhere between animation planning and final resource packaging.

---
## Tracing One State Family
One of the best examples is `yoshi-stop-walk-run-jump`, because the same name survives in three different NEWS-side formats:

* `yoshi-stop-walk-run-jump.OBJ`
* `yoshi-stop-walk-run-jump.OBZ`
* `SPR/yoshi-stop-walk-run-jump.SPR`

Those three files do not look like duplicates.
They look like stages in the same broader asset path:

File | Size | Date | What it most likely represents
---|---|---|---
`yoshi-stop-walk-run-jump.OBJ` | `13,568` bytes | `1993-07-28` | Older object-side or layout-side source asset
`SPR/yoshi-stop-walk-run-jump.SPR` | `1,394` bytes | `1994-05-12` | Compact sprite-state companion data
`yoshi-stop-walk-run-jump.OBZ` | `27,136` bytes | `1995-05-17` | Later fixed-size packed state resource

That date spread is especially useful.
It suggests the state family was not authored once and frozen.
It was being carried forward through multiple production representations over at least two years.

The same pattern shows up in other state families too:

File family | Older layer | Smaller companion layer | Later packed layer
---|---|---|---
`yoshi-swiming` | `yoshi-swiming.OBJ` (`1992-06-23`) | `SPR/yoshi-swiming.SPR` (`1993-11-10`) | `yoshi-swiming.OBZ` (`1994-08-29`)
`tamago-run` | no matching plain `.OBJ` seen here | `SPR/tamago-run.SPR` (`1994-06-03`) | `tamago-run.OBZ` (`1994-08-25`)
`baby-mario` | no matching plain `.OBJ` seen here | `SPR/baby-mario.SPR` (`1994-02-02`) | `baby-mario.OBZ` (`1994-06-08`)

That makes the NEWS material much more than "extra art."
It is one of the clearest surviving windows into how character and interaction states were renamed, repackaged, and likely moved through multiple tool-side formats over time.

---
## The Ending Workspace
`NEWS_11/ENDING` is another major addition.
This is not just a handful of leftover files.
It is a dedicated ending-art workspace with its own screens, palettes, staff-roll objects, and backup revisions.

The folder includes:

* `No-1.SCR` through `No-5.SCR`
* `No1-BG2.CGX` through `No5-BG2.CGX`
* palette sets like `ENDING-No1.COL` through `ENDING-No5.COL`
* staff-roll resources such as `STAF-ROLL.OBJ`, `STAF-ROLL.OBX`, `STAF-ROLL-center.OBX`, `STAF-ROLL-M.OBX`, and several `STAF-ROLL-ENGRISH-*` objects
* bird-related art like `TORI.CGX`, `TORI.OBJ`, `TORI-INDY.CGX`, and `TORI-INDY.OBJ`
* test and clear files such as `TEST-1.SCR`, `TEST-1.CGX`, `TEST-1.COL`, and `-CLR-.CGX`

That is a lot richer than the main Yoshi source branch, where ending logic is visible through `endt` and program-side references but the visual authoring process is much less exposed.

The `STAF-ROLL-ENGRISH-*` names are especially fun because they show the ending workspace preserving draft or working labels for the staff-roll content rather than cleaned public-facing names.

The folder structure also suggests the ending visuals were being built as composited scenes rather than one flat art bank.
There are at least five numbered screen sets:

* `No-1.SCR` to `No-5.SCR`
* matching `No1-BG2.CGX` to `No5-BG2.CGX`
* matching `ENDING-No1.COL` to `ENDING-No5.COL`

That looks very much like a multi-screen ending sequence with per-scene background graphics and dedicated palette sets.

Then, layered on top of those screens, the workspace keeps:

* message-side objects such as `MESSAGE.OBJ`, `MESSAGE-5.OBJ`, and `MESSAGE.OBX`
* staff-roll objects like `STAF-ROLL.OBJ`, `STAF-ROLL.OBX`, `STAF-ROLL-center.OBX`, and `STAF-ROLL-M.OBX`
* language-specific or content-specific variants such as `STAF-ROLL-HIRAGANA-0.OBX` and `STAF-ROLL-ENGRISH-0.OBX` through `STAF-ROLL-ENGRISH-3.OBX`
* bird graphics and object layers through `TORI.CGX`, `TORI.OBJ`, `TORI-INDY.CGX`, and `TORI-INDY.OBJ`

That is a surprisingly complete look at the visual side of the game's ending and credits.
The main source archive tells us where ending placement data lived.
`NEWS_11/ENDING` shows that the ending artwork itself was being managed as a small production workspace with scene screens, layered message/staff-roll objects, character elements, and many nearby backups.

---
## Region Variants and Late Art Branching
`NEWS_11` also keeps some unusually explicit regional art variants:

* `60-63-JAP.CGX`
* `60-63-PAL.CGX`
* `60-63-NOA.CGX.BAK`
* `74-77-JAP.CGX`
* `74-77-PAL.CGX`
* `74-77-NOA.CGX.BAK`

That is important because the main source branch already shows `JPN`, `NES`, and `PAL` conditionals in the build.
The NEWS workspace shows the visual side of that same process.

In other words, the regional branching was not just happening in the asm.
At least some graphics banks were also being split into Japanese, PAL, and NOA-oriented variants at the art-workspace level.

That makes `NEWS_11` especially valuable when read beside `日本_Ver2`.
One shows the regional switches inside the build system.
The other shows the corresponding messier art-side branching that fed those builds.

The actual bank comparison sharpens that point.
All of these region-labelled files share the same `1995-07-10` date and the same `17,664` byte size:

* `60-63-JAP.CGX`
* `60-63-PAL.CGX`
* `60-63-NOA.CGX.BAK`
* `74-77-JAP.CGX`
* `74-77-PAL.CGX`
* `74-77-NOA.CGX.BAK`

But they are not all the same data.

Bank | JAP | PAL | NOA backup | Relation to `日本_Ver2`
---|---|---|---|---
`60-63` | distinct | distinct | distinct | no plain `60-63.CGX` was found in `日本_Ver2`
`74-77` | distinct | identical to `NOA` backup | identical to `PAL` | plain `74-77.CGX` exists in `日本_Ver2`, but differs from both NEWS variants checked

That is a nice concrete example of what the NEWS tapes add.
The main source branch shows that Yoshi's Island still carried `JPN`, `NES`, and `PAL` conditionals.
The NEWS art workspace shows that at least some character banks were being branched the same way, and not always as three fully independent end states.

In the `74-77` case, the `PAL` build candidate and the backed-up `NOA` candidate are byte-identical, while the `JAP` bank differs from both.
So the regional split could be two-way in practice even when three labels were present in the workspace.

---
## What Seems To Be New Versus Duplicated
The safest way to phrase the relationship is:

* some files are duplicated exactly between `NEWS_11` and `日本_Ver2`
* some files keep the same names but preserve different intermediate contents
* many files in both NEWS tapes do not appear in the main branch at all

That means the NEWS tapes are not redundant even when filenames overlap.
The overlap often marks shared asset families, but not always the same revision of those assets.

In practical terms:

* use `日本_Ver2` when you want the cleanest view of the integrated Yoshi's Island build
* use `NEWS_09` when you want a rougher personal workspace full of tests, VRAM groupings, and discarded object-side material
* use `NEWS_11` when you want the richest supplementary art archive, especially for character banks, sprite states, ending visuals, and region-variant graphics

So the NEWS tape restores do not replace the main Yoshi source folder.
They make it deeper.
They show much more of the messy artist-side history that sits behind the cleaner `char`, `OBJ`, and `col` data in the core Gigaleak snapshot.
