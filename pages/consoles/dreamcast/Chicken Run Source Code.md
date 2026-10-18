---
layout: post
tags: 
- dreamcast
- ps1
- pc
- games
- sourcecode
title: Chicken Run Source Code
category: dreamcast
placeholderimages:
- /public/games/chicken-run/Chicken-Run-Dreamcast-USA.webp
- /public/games/chicken-run/Chicken-Run-PlayStation-USA.webp
permalink: /Chicken-Run-Source-Code
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: Chicken Run Source Code
    url: #
videocarousel:
  - title: Blitz Game Studios
    image: https://img.youtube.com/vi/XVSNxQbQFJw/0.jpg
    youtube: 'XVSNxQbQFJw'
  - title: Chicken Run
    image: https://img.youtube.com/vi/thRXO3YwOCg/0.jpg
    youtube: 'thRXO3YwOCg'
recommend: 
- dreamcast
- ps1
- sega
references:
- Dreamcast Hub
editlink: /consoles/dreamcast/Chicken Run Source Code.md
updatedAt: '2026-10-18'
---

<link rel="stylesheet" href="/public/css/game-data-visual.css">
<script defer src="/public/js/game-data-visual.js"></script>

# Inside Chicken Run
<figure>
  <img src="/public/games/chicken-run/Chicken-Run-Dreamcast-USA.webp" alt="Chicken Run Dreamcast box art">
  <figcaption>
    <a href="https://www.mobygames.com/game/3108/chicken-run/">Chicken Run (2000)</a>
  </figcaption>
</figure>
Developed by Blitz Games (formerly known as Interactive Studios Limited) in 2000 as a cross-platform action adventure based on the movie of the same name. Eidos published it for [Dreamcast](/dreamcast), [PlayStation](/ps1), and [Windows](/pc) [^1]. The `isl` prefix on libraries such as `islfile.c` and `islfont.c` is that earlier company name.

The stranger details survive in the game's source code. This was not a package prepared for an audience. It circulated in a wider bundle of Dreamcast projects, although its original provenance remains unclear.

What survived captures far more than the finished port. The folders preserve a Katana build, the PlayStation PSYQ version, a Visual Studio 6 project, and fragments inherited from Frogger 2, Action Man 2, Glover, and Titan.

It is a working history of the game rather than a polished release. There are duplicate source trees, empty headers, programmer jokes, demo stubs, disc-building instructions, and a small model viewer that still introduces itself as the Frogger 2 shell. The GD Workshop project for the disc `CHICKENRUN1` was created on 25 July 2000 and modified on 10 August 2000.

---
# Explore the source
The complete copy contains 820 files across 7 folders. Its shape explains the rest of the article: one Dreamcast working tree, a PlayStation source directory, a nearby snapshot, copied library headers, and a small model viewer.

Of the 217 filenames shared by `cr` and `cr/Copy of source`, 122 match byte for byte and 95 differ. `chase.h` is empty in both. These are development folders frozen at different moments, not a clean source release.

<!-- cspell:disable -->
{% capture chicken_root_body %}
The game folder holds the Dreamcast working copy, the PlayStation tree, a snapshot, and a [PSI](#glossary-psi) model shell.
{% endcapture %}

{% capture chicken_folder_items %}
- cr - Dreamcast Katana sources, with source, Copy of source, includeps, and incbn inside
- simple model shell - Kamui 2 viewer for the models
{% endcapture %}

{% include connected-folder-tree.html folder="Chicken Run" path="Chicken Run [source]" body=chicken_root_body version="Source copy" content=chicken_folder_items %}
<!-- cspell:enable -->

The browser below turns the directory into a reference index. Opening a folder explains its role before listing its contents; selecting a file shows its purpose, inferred from comments, declarations, and surrounding code. The shortcuts lead directly to the main platform trees and the model shell.

The index omits file contents and filesystem dates. Those dates record when this copy was written to disk, not when Blitz authored each file.

{% include archive-explorer.html manifest="/public/data/chicken-run-source-archive.json" layout="desktop" title="Chicken Run source" layout_label="Source index" %}

## Reading the source
Before following the code into the build environment, these are the internal names used throughout the project:
* <a id="glossary-bff"></a>**BFF** - A `.BFF` file that packs a room into one container of typed segments. Each segment has a type code, a length, and a name CRC. The letters are never expanded.
* <a id="glossary-dck"></a>**DCK** - Dreamcast Katana. Prefix on the Katana-specific maths, texture, and system files.
* <a id="glossary-fla"></a>**FlatPacker** - The compressor in `islfile.c`. Packed data starts with the little-endian magic `FLA2`.
* <a id="glossary-fma"></a>**FMA** - The frog-map format. The F stands for Frogger. `map_draw.h` calls the blocks frog-map segments. The remaining letters are never expanded.
* <a id="glossary-isl"></a>**ISL** - Interactive Studios Limited, the studio name in the library copyrights. It prefixes files such as `islfile.c` and `islfont.c`.
* <a id="glossary-psi"></a>**PSI** - The studio's [PlayStation](/ps1) model format. `psi.c` calls itself the PlayStation model handler.
* <a id="glossary-psyq"></a>**PSYQ** - The PlayStation SDK named by `makefile.mak`: `ccpsx`, `dmpsx`, `asmpsx`, and PSYLINK.
* <a id="glossary-spt"></a>**SPT** - A texture stream. `sptstream.h` loads one straight into VRAM.
* <a id="glossary-vmu"></a>**VMU** - The [Dreamcast](/dreamcast) memory card. The tree has save code, icon bytes, and a 48 by 32 LCD image for it.

---
# Development environment
<div class="emoji">🔧</div>
With the folders mapped, their chronology becomes easier to read. The evidence points to a PlayStation-origin codebase that was adapted for [Dreamcast](/dreamcast), while a PC build supported development and the Windows release. `global.h` still identifies the project as `CRTest PS`, shared rendering code speaks in PlayStation GTE terms, and a Dreamcast audio file explicitly calls itself a `"Dreamcast conversion"`.

That does not mean Blitz finished the PlayStation game and then made a clean, one-way port. The branches continued to evolve together. Platform wrappers, newer regional files, and duplicate snapshots record overlapping development rather than a simple before-and-after sequence.

## PlayStation-only details
The [PlayStation](/ps1) version sits in `cr/source`. Its makefile is headed `CRTEST PS MAKEFILE` and calls the [PSYQ](#glossary-psyq) compiler, assembler, and linker from `c:\psx\bin`.

The later PlayStation header contains the final US, European, and UK product codes. Its memory-card filename combines the appropriate `BA` or `BE` prefix, the regional product code, and the suffix `CHRUN`.

Memory pressure shapes this build. The [PSYLINK](/ps1-psylink) scripts begin at `0x80010000`, then place the video player, three groups of mini-games, and the debug menu into overlapping banks. Only one bank occupies that region at a time. Fred's linker note also gives the model plotter the data-cache area and warns that only leaf routines should run there.

The PlayStation performance display counts work in VSync units. Its frame target changes between 520 units for NTSC and 620 for PAL, and an over-budget frame turns the graph red.

### Three regional masters
The final PlayStation pipeline knows exactly which executable it is making:

Build | Video mode | Product code | Languages
---|---|---|---
US | NTSC | `SLUS-01304` | US English
Europe | PAL | `SLES-03285` | Multiple languages
UK | PAL | `SLES-03188` | UK English

Select a region below to see the `TERRIT` block that produces that master.

{% include game-data-visual.html id="chicken-regions" config=site.data.chicken_run_game_visuals.regions %}

`master.bat` turns those choices into a repeatable production line. It regenerates C dependencies, invokes the correct makefile, converts the PSYQ CPE executable with `cpe2x`, sets the stack pointer to `0x801fff00`, and renames the result to match the regional product code. `datstak` then packs the loose CD files into `CRTEST.DAT`.

The demo follows the same path with `crdemo.cpe`, `CRDEMO.EXE`, and `CRDEMO.DAT`. The PlayStation tree includes most of the machinery that produced a master candidate.

---
## Dreamcast-only details
The [Dreamcast](/dreamcast) conversion occupies the root of `cr`. Its makefile includes `$(KATANA_ROOT)\Sample\dc.inc`, selects Kamui 2, and links Sega and CRI libraries for video, audio, and system services.

The platform-specific files use a [`DCK_`](#glossary-dck) prefix, short for Dreamcast Katana. Katana was Sega's code name for the console. `DCK_System` and `DCK_Texture` are typical examples.

`main.h` defines `DREAMCAST_VERSION` and maps familiar engine calls onto Kamui scene and pass operations. `main.c` requests two framebuffers and sets `0x150000 * 2` bytes aside for texture memory. Andy Eder dated the [DCK](#glossary-dck) maths and system layer 19 January 2000, providing a firm date for Dreamcast-specific porting work.

The conversion favours compatibility layers over wholesale replacement. Dreamcast-specific files sit around the shared engine and translate its assumptions into Katana graphics, audio, and storage services. Those bridges become the focus later in the article.

The Dreamcast profiler uses `syTmrGetCount()` instead of VSync units. It converts timer counts to microseconds and draws green workload strips against a three-frame grid.

This copy is not self-contained. `include.h` expects `shinobi.h`, `kamui2.h`, `sg_syhw.h`, `sg_sycbl.h`, and `machine.h`, but none of those Sega SDK headers are present. Building it requires the [Dreamcast Katana development kit](/Sega-Dreamcast-Katana-Development-Kit).

{% include_cached link-to-other-post.html post="/Sega-Dreamcast-Katana-Development-Kit" description="Katana is the Dreamcast SDK this makefile includes through dc.inc." %}

### Building the GD-ROM
The Dreamcast disc project turns the source tree into a map of Tweedy's farm. `chicken.scr` is a [GD Workshop](/sega-dreamcast-gd-workshop) script for `CHICKENRUN1`, with its system area generated by Katana's `IPMaker`.

The companion project, `chickenrun.cpj`, names the locations as files and directories. A few line up directly with the gameplay modules:

Act | Rooms named in the GD project
---|---
1 | Dog chase, egg hut, coop, garden, Fowler
2 | Catapult, fireworks, seesaw, engine hut, wings hut
4 | Flying machine, construction, egg game, pie barn

Act 3 appears through video files rather than the room names in this table. The project includes `ACT3INTRO.SFD`, `ACT3OUTRO.SFD`, a boss clip, and a bonus clip.

`chicken.scr` names 654 files on `CHICKENRUN1`. Choose a view below to compare types, acts, and [BFF](#glossary-bff) counts measured from those `File` entries.

{% include game-data-visual.html id="chicken-gd-rom" config=site.data.chicken_run_game_visuals.gd_rom %}

A ten-step note in `in.txt` records the daily ritual for replacing a room on the development disc: run `makelevdc`, unload the executable in CodeScape, remove the previous files in GD Workshop, and copy the replacement from `W:\ChickenRun\cd_\Game\cd\`. It is the kind of mundane instruction that makes the archive feel like a desk someone has just left.

---
## PC conversion and shared code
The PC path is another adaptation of the same PlayStation-shaped core. A commented-out check in `global.h` captures the tension:

```c
#ifdef _WIN32
	#error This is a PSX program, you dolt!
#endif
```

Fred Williams's inline assembler required a more practical solution. James Steele added `PSX_PC.h` so `custom.c`, `custom2.c`, and `map_draw.c` could compile on PC without creating a second drawing engine:

```c
/* Since Fred insits on being such a clever bugger and using in-line assembler, this
   file contains a load of macros so that the custom.c, custom2.c and map_draw.c
   compile and work on the PC as well as the PSX without me having to write a whole
   load of PC draw routines. */
```

The Visual Studio 6 project is an external target rather than a replacement for the console makefiles. Its SourceSafe path, `$/teamManta/CRunDC/source`, preserves a small piece of the studio's original source-control layout.

---
## Secret doors for testers
<div class="emoji">🎮</div>
The most direct route through Tweedy's farm did not appear on the map. `global.h` enables `EIDOS_DEBUG_STUFF` with the comment `"Even in burns"`. In this source snapshot, holding R3 turns the D-pad into a QA selector:

Input | Action
---|---
R3 and Up or Down | Select Mannequin, a mini-game, All Videos, All Levels, or 6 Eggs
R3 and L1 | End the current room and run the selected shortcut

Hold R3 and step through the live `testnames` labels below. The function names keep the source spelling, including `levflowCheatToManniquin`.

{% include game-data-visual.html id="chicken-debug" config=site.data.chicken_run_game_visuals.debug %}

This proves that publisher-facing shortcuts were enabled in the working build. It does not prove that every retail disc retained the same define.

There is a second entrance with no menu label. `SwimCheatCycle()` watches both analogue sticks for a four-stage sequence of directions. Completing it on the language screen prints `"Going to the Development stuff"` and opens the internal viewer. The same recogniser is called by the dog chase and most mini-games, where it acts as a quick completion shortcut.

Step through the four analogue poses below. Neutral sticks reset `language_cheatmode`.

{% include game-data-visual.html id="chicken-swim-cheat" config=site.data.chicken_run_game_visuals.swim_cheat %}

The internal viewer can start individual levels, mini-games, inventory screens, credits, and videos. Context flags tell the game whether it was entered normally, as a replay, or from debug, so the test harness can share the retail code without duplicating its level flow.

---
# The farm behind the film
<div class="emoji">🐔</div>
The development environment explains how Chicken Run was built. The runtime shows what the team was tuning. The film's cast divides neatly along a C module boundary: `charactr.c` handles "characters that aren't enemies", while Chris Wilson's `enemies.c` grew separate modules for the dogs and Mrs Tweedy.

The level-specific files are more revealing than their names suggest. `dogchase.c` controls the act 1 pursuit and its Mrs Tweedy mannequin. `crate.c` contains the later sequence in which she hangs from the aeroplane. `sprouts.c` implements the throwable sprouts used to distract guard dogs.

Even the dogs expose a design decision. Their route boxes include the collision radius plus a margin of 310 units. The comment explains why: without that extra distance, a dog outside the player's reach will never stop to bark.

## What the hourglass measures
The hourglass is the farm's shared language for danger. Lighting, noise, dogs, and Mrs Tweedy all send events to `hourglass2Inform()`. That function chooses how much sand to add or switches the display into a full alert state.

The major signals come from otherwise separate systems:

Source | Hourglass event | Meaning
---|---|---
lights.c | `HOURGLASS_IN_LIGHT` | Ginger is standing in an alert-enabled light
lights.c | `HOURGLASS_IN_SEARCHLIGHT` | A cone-shaped searchlight has found her
enemies.c | `HOURGLASS_MAKING_LOUD_NOISE` | A movement or action was noisy enough to carry
nme_dogs.c | `HOURGLASS_DOG_IN_GROWL_MODE` | A dog has progressed from suspicion to confrontation
nme_mrst.c | `HOURGLASS_IN_MRT_FOV` | Mrs Tweedy has Ginger in her field of view

Choose a source below to follow its path into `hourglass2Inform()`. The amounts are source constants, not seconds.

{% include game-data-visual.html id="chicken-hourglass" config=site.data.chicken_run_game_visuals.hourglass %}

This makes the hourglass more than a countdown graphic. It is a readable summary of several AI systems that do not otherwise know about one another. Light can fill it for a fixed duration, quiet movement can add a smaller warning, and pursuit can latch the game into an alert state.

---
## Hiding under the welly
<div class="emoji">🥾</div>
The welly does not make Ginger invisible. Every enemy carries a `welly_suspicious_timer`, and the disguise succeeds only while that enemy remains unconvinced.

The rules form a small suspicion model:

Action | Result
---|---
Move while visible inside the welly | Add 128 suspicion units per check
Duck into `STATE_HIDING` | Remove 32 units while the enemy remains uncertain
Leave the enemy's view | Remove 200 units per check
Cross 4096 units | The enemy knows Ginger is inside
Put the welly on while already observed | Reveal the trick immediately

Drag through the source timer below. The bar is remaining disguise, not a HUD graphic.

{% include game-data-visual.html id="chicken-welly" config=site.data.chicken_run_game_visuals.welly %}

The programmer's comment describes the intended rhythm better than a design document:

```c
// You can just about sneak around under the welly if you do it in short bursts with long waits,
// Coz *if he's undecided about the welly*, he calms down to zero
```

Alert-enabled lights also check for the active disguise. When the welly or gnome is visible, `EXLIGHT_SetupActorLightsAlert()` disables the alarm test before calculating the actor's lighting. The disguise therefore has to fool both the enemy vision code and the light-trigger system.

---
## How the dogs listen
Dog hearing is based on Ginger's animation, not her measured velocity. An older speed-based test survives as commented code in `DogCanHearCheck()`. The live version reads the current animation segment:

Animation | Hearing range
---|---
`GINGER_WALK` | 1200 world units
`GINGER_RUN` | 2000 world units
Anything else | No hearing response from this check

Choose a detection route below. Hearing follows the current animation segment. Sight and the lounge dog are separate checks.

{% include game-data-visual.html id="chicken-dogs" config=site.data.chicken_run_game_visuals.dogs %}

The distinction is deliberate, although the comment calls it "running rather than tiptoeing/walking". It also means the animation state is part of the stealth simulation. If movement and animation ever disagree, the dog's ears follow the animation.

The final attack distance records a piece of publisher feedback. An earlier value of 800 is commented out beside the active range of 650, with the note `"okay 800's too big (according to Eidos testers"` layered directly into `enemies.h`.

One dog ignores the general rules. In the act 4 lounge, it cannot see a rat carrying the gnome and will not detect a rat high on the windowsill. The comments record the measured geometry: rats can jump 650 units above the dog, while the sill is 1152 units higher. If the dog does see the player at floor height, its growl state triggers an immediate guard-dog fail.

---
## Eyes for every dog
The enemies can share one [PSI](#glossary-psi) model, but they cannot share one pair of animated eyes. When the engine finds a second enemy using the same model, it creates a texture instance and redirects that model's eye pointers to an independent animation target.

Normal dogs blink at random. Sleepy and angry states use `blinkOverride` to hold a particular eye frame:

```c
if (pE->blinkOverride != -1) {
    textureSetAnimation(pE->readData.animeyes.pAnim, pE->blinkOverride);
}
```

The result is economical and expressive: one geometry model can appear several times in a room, while each dog blinks independently or keeps its eyes shut, alert, or angry.

---
## Mini-games with a medal
Chicken Run breaks the escape into small mechanical jobs. `subgame.h` awards fail, bronze, silver, or gold, while each activity supplies its own start, update, drawing, and camera code:

Subgame | What the source says it is
---|---
Catapult | The level 2 catapult game
Construction | A saw, a hammer, and a spanner, with a camera on Mrs Tweedy
Egg laying | Feed, eat, swallow, lay, relief
Engine | An oiler, a biker, a pumper, and a power gauge
Fireworks | The fireworks game
Seesaw | The seesaw game
Stilts | Specialist control research. The comment says it should have been an overlay
Wings | Pole, material, and stitch workers

Egg laying keeps three small state machines in `egglaying.h`. Choose one below to see the chicken, grain, or session sequence.

{% include game-data-visual.html id="chicken-egg-laying" config=site.data.chicken_run_game_visuals.egg_laying %}

`station.c` provides the rotating camera for the level 4 hub where several of these activities meet. On [PlayStation](/ps1), the mini-games become overlay banks in the linker script. The magazine demo goes further: `demostub.c` replaces features absent from the `OPSM` build with empty functions, allowing the rest of the game to compile without being covered in conditional blocks.

The [Dreamcast](/dreamcast) has another snapshot of the game's public life. `ectsmenu.c` implements the menu used for its ECTS demonstration.

The medal display has its own visual joke. `subgame.c` calls the structure `CricketScore` and draws progress as an animated cricket-style tally. Five line textures build each mark over several frames, changing colour as the score crosses the bronze, silver, and gold thresholds.

---
## Map pieces that follow the player
Map pieces are deliberately duplicated across acts. Barry Paterson's comment explains the reason: a piece missed in one act should still be available in the next.

At the beginning of each level, `inventoryRemoveDuplicateMapPieces()` compares the scenery against the 14 saved collection flags. Any copy the player already owns is removed from the scenic list. The level designers could place another chance to collect a piece without creating duplicates in the player's inventory.

Try collecting the fourteen flags below. The board is schematic; the save stores `map_pieces_got[14]`, not a bitmask.

{% include game-data-visual.html id="chicken-map-pieces" config=site.data.chicken_run_game_visuals.map_pieces %}

---
# How a level is built
{% include sticker-text.html text="BFF" color1="#ef548f" color2="#ef8b6d" %}
A [BFF](#glossary-bff) is a file. Each published room is one `.BFF`, a container of typed segments such as `A1_DOGCHASE.BFF`. The letters are never expanded in the source.

The stealth systems, puzzles, and mini-games all depend on data produced outside the runtime. The published act data is stored differently on each platform:
* [Dreamcast](/dreamcast) - each room has its own BFF and [SPT](#glossary-spt). Many rooms also have matching `.SBB` and `.SBH` sound banks. The GD Workshop script lists them by room name, such as `A1_DOGCHASE.BFF`.
* [Windows](/pc) - the same act folders, with `.WAB` files kept beside the `.BFF` and `.SPT` data.
* [PlayStation](/ps1) - the loose files are packed into `CRTEST.DAT`. That archive also includes a `DUMMY` file filled with `00` padding.

The surviving headers expose the boundary between Chicken Run and a set of level compilers that are mostly absent from the archive.

## A frog map under the farm
<div class="emoji">🐸</div>
[FMA](#glossary-fma) is the map format. The F stands for Frogger. `map_draw.h` still calls the world data frog-map segments, one of the clearest traces of **Frogger 2** in the project.

The runtime structures must match a separate PC map compiler. With `SHORT_MAP_VERTNOS` enabled, Chicken Run expects mesh formats 5 and 6. `map_play.c` draws the playable view, `map_view.c` supplies the fly-through, and `lev_flow.c` decides where the player goes next. Puzzles and scenic objects sit in their own systems instead of becoming full enemies.

Some of the comments read like notes passed across a busy office. In `platcoll.c`, Fred reserves an idea for the moment when the main collision code becomes available:

```c
// I'll do these things for platforms, with a view to copying 'em into the main collision code
// when it's free. Luv, Fred.
```

The platform system has an even longer memory. `platform.h` says it was adapted from Glover.

---
## Inside a BFF
A [BFF](#glossary-bff) is a file on disc, not a folder. `BFF_LoadFile` opens one `.BFF` and treats it as a packed list of objects. The source never expands the three letters.

`bff_load.c` calls that list a collection of data segments shoved together into one file. Each segment begins with a `BFF_Header`: a type code, the segment's total length, and the CRC of its name.

```c
typedef struct BFF_HeaderTag
{
    unsigned long id;
    unsigned long len;
    unsigned long crc;
} BFF_Header;
```

Chicken Run does not load a level as a loose directory of objects. After the file is in memory, a link routine for each type rebuilds pointers. `BFF_FindObject` then searches by type and CRC. A zero CRC means "the only object of this type", a useful shortcut for data that appears once per level.

The type is a four-character code stored little-endian, with a version in the final byte. These are the versions defined by this source:

Code | Header | Use
---|---|---
COL1 | collide.h | Collision
PSI0, PSI1 | custom.h | [PSI](#glossary-psi) models
FMA1 | fma.h | Frog-map info
FMM5, FMM6 | map_draw.h | Frog-map meshes when short vertex numbers are on
FMW0, FMW2 | map_draw.h | Frog-map worlds
NME1 | bff_load.h | Enemies
PUZ0 | puzzles.h | Puzzles
LEV5 | puzzles.h | Level info
CAM0 | puzzles.h | Camera info
PLT1 | platform.h | Platforms
SNC0 | `scenics.h` | Scenic objects
ROU0 | route.h | Route boxes. ROU1 is the bevelled variant, and it is not the active define
TAN0 | overlays.h | Texture animation
SBH0 | sound.h | Sound-bank header. The old VH type is commented out
STG0 | platform.h | Sound triggers

Choose a load path below. The loader marks the last segment, then calls a link routine for each type.

{% include game-data-visual.html id="chicken-bff" config=site.data.chicken_run_game_visuals.bff %}

`platform.h` warns that the external level tool `cr_lev` includes the same structures. That compiler is not present, so the BFF definitions are both documentation and one half of a missing toolchain.

---
## FlatPacker
The BFF data can be wrapped again. `islfile.c` recognises [FlatPacker](#glossary-fla) files by `0x32414C46`, the little-endian bytes `FLA2`, then expands them with an LZ77-style decoder. Its history window is 4096 bytes and its longest back-reference copies 17.

On [PlayStation](/ps1), the loose disc files are collected into an index. Both `test.c` and `sptstream.c` default to `CRTEST.DAT` with the CD version suffix `;1`. The generic example `MYGAME.DAT` survives beside it in a comment.

---
## Streaming the plan screen
The planning screen had to fit through a narrower gap. `sptstream.h` sends an [SPT](#glossary-spt) texture directly to VRAM instead of holding the complete file in main memory.

Its comment describes a concrete swap: unload `FRONTEND\INVENTORY1.SPT`, then stream in `FRONTEND\PLAN.SPT`. The implementation was not yet linked into the game. The file helpers it needed were still private to another module.

---
# Porting the assets and save system
<div class="emoji">🔄</div>
Once a level is loaded, the same PlayStation ancestry appears in the assets around it. The Dreamcast code wraps, translates, and reuses older systems. Interface textures, sound names, and even the shape of the save payload show the previous platform underneath.

## The same menu art on a new GPU
The Dreamcast menus still load Sony TIM images. `menu.c` asks for `SHELL\BACKDROP.TIM`; the credits load `FRONTEND\SPLASH\ACT1.TIM`; and the ECTS menu draws TIM versions of the Chicken Run, Blitz, and Eidos logos.

`DC_TIM.c` is the bridge. It reads 4-bit, 8-bit, 15-bit, and 24-bit TIM data, expands indexed colours, and builds a texture suitable for `Kamui`. In the indexed-colour paths, PlayStation magenta becomes transparent Dreamcast RGBA1555:

```c
if ((r == 0x1f) && (g == 0) && (b == 0x1f)) {
    *bitmap++ = RGBA1555(r, g, b, 0);
} else {
    *bitmap++ = RGBA1555(r, g, b, 1);
}
```

Instead of sending every menu screen back through an art pipeline, the port teaches the new console how to understand the old console's pictures.

---
## Two kinds of progress in one save
The save system separates what the player has permanently unlocked from where the current run has reached. `GameSaveDataType` holds medals, best times, available levels, movies, and gallery stills. `GamePlayDataType` holds inventories, tasks, collected eggs and sprouts, moving-platform states, and the 14 map-piece flags.

The split supports replay. A comment in `card.h` describes two gameplay states: the saved position and a temporary replay position that is never written back to the card. Replaying an earlier act can therefore use its own inventory and room state without damaging the main game.

The structure packed onto the card contains three distinct layers:

Layer | Contents
---|---
Options | Permanent control and presentation settings
State | Unlocks, medals, best results, and total play time
Play | Current inventories, tasks, pickups, and world state

---
## A Sony header inside a Sega save
The payload retains a PlayStation memory-card header. `cardBuildBlock()` writes the Sony magic bytes `SC`, copies the same icon into all three header slots, and converts the title `"Chicken Run"` to Shift-JIS.

On Dreamcast, `islcard.c` takes that payload and builds a Sega backup-file image around it. The outer file has VMU comments, palette data, an icon, and the raw game save. Before and after the write, the code sends status graphics to the VMU LCD.

It is port archaeology in a single file: Sega's backup API on the outside, with the layout of a PlayStation save still visible within.

Choose a route below to follow the Sony header, the three save layers, or the [VMU](#glossary-vmu) wrapper.

{% include game-data-visual.html id="chicken-save" config=site.data.chicken_run_game_visuals.save %}

---
## Sound names beside the samples
Dreamcast sound effects live in Audio64 `.kat` banks. The loader sends those samples into audio RAM, but the bank does not supply the old name-based lookup expected by the game.

Blitz restores that layer from a companion text file. For every sample, `islsfx2.c` reads a WAV filename from `AUDIO\<bank>.txt`, removes the extension, converts the name to uppercase, and calculates the CRC used by the game:

```c
utilUpperStr(fname);
bank->sample[loop].nameCRC = utilStr2CRC(fname);
```

The audio port is therefore hybrid too: Sega's bank format carries the sound data, while a text sidecar reconstructs the naming convention inherited from the PlayStation engine.

---
## The smallest piece of artwork
<figure>
  <img src="/public/games/chicken-run/gingicon-pixel.webp" alt="Pixel portrait of a chicken, enlarged from 32 by 32">
  <figcaption>32 by 32</figcaption>
</figure>
At 32 by 32 pixels and 16 colours, the [Dreamcast](/dreamcast) save icon is one of the smallest finished assets in the archive. `saveicon.h` says `dc_iconchop` converted the original BMP into palette and pixel arrays for the game.

`gingicon.bmp` gives Ginger just enough room for a comb, eyes, beak, and folded wings. It is enlarged here without smoothing so every source pixel remains visible. The alternative `cricon16.bmp` is more austere: a red C and R on black.

The two LCD images use the [VMU](#glossary-vmu) screen's native 48 by 32 resolution. One does not attempt a logo or a status display. It simply offers an opinion:

![Chicken Run is lovely, the text drawn in lcdcr.bmp for the VMU LCD](/public/games/chicken-run/lcdcr-pixel.webp)

The companion image reduces the film to its essential cast: one chicken and one egg.

![Line drawing of a chicken and an egg from vmudisplay.bmp](/public/games/chicken-run/vmudisplay-pixel.webp)

---
# The games beneath Chicken Run
The porting layers make more sense when placed beside the older games still visible in the engine. Chicken Run did not begin with an empty repository. Its headers carry a family tree of earlier Blitz projects:
* **Frogger 2** - `actor2.c`, `sprite.c`, `layout.c`, `shell.c`, `gte.c`, and `fadeout.c` retain Frogger 2 titles. `main.c` still defines `globalFrogScale`, while `frogedit.dat` points to `c:\work\froggerii\leveldump`.
* **Action Man 2** - `islfont.c`, `language.c`, and `timer.c` are marked `AM2`. Barry Paterson recorded the Chicken Run language conversion on 27 March 2000. `bff_load.c` can still be compiled for either an Action Man 2 or Frogger testbed.
* **Glover** - The platform structures say they were adapted from Glover. A pointer-fixup macro also survives with a comment that it was used there but not in Frogger 2.
* **Titan** - `lights.c` credits its shadow code to Scott Lamb's `exlight` work in Titan. The include for `exlight.h` is commented out, so the earlier project itself is not part of this copy.

One relic reaches further back. `ultra64.h` is a [Nintendo 64](/n64) SDK header carrying a 1994 Silicon Graphics copyright. Neither the [Katana](/Sega-Dreamcast-Katana-Development-Kit) nor [PSYQ](#glossary-psyq) makefile uses it. It is simply an old toolchain layer that was never cleared away.

The `simple model shell` folder compresses this history into a tiny program. Its makefile builds a Kamui 2 ELF containing little more than the [PSI](#glossary-psi) model plotter. There are no chickens, dogs, or medals, yet `main.c` still calls itself the Frogger 2 shell and dates itself 9 March 2000. Even `globalFrogScale` remains, set to 2457.

---
# The people in the comments
After the platforms, formats, and inherited code, the archive resolves into individual voices. The final word belongs to the credits: `credits.c` walks a fixed sequence of string identifiers and `gametext.txt` supplies the names.

The programming lines appear in this order:

Role | People
---|---
Lead programmer | [Fred Williams](https://twitter.com/RFredW)
Programming | Tom Drummond, [David Harries](https://www.linkedin.com/in/david-harries-92a56213/), Barry Paterson, Chris Wilson
Tools programming | [James Steele](https://www.linkedin.com/in/james-steele-0a62791/), Chris Wilson
Additional programming | [Ian Bird](https://www.linkedin.com/in/ian-bird-19358780/), [Steve Bond](https://www.linkedin.com/in/steve-bond-b21ba9/), [Scott Lamb](https://www.linkedin.com/in/scottjameslamb/), Andy Sidwell, [John Whigham](https://www.linkedin.com/in/john-whigham-b8524834/)
Compression technology | [Richard Hackett](https://www.linkedin.com/in/richard-hackett-4324531/)

Darren Wood is listed as project manager, with Dave Flynn and David Manuel as team leaders. [Philip Oliver](http://www.olivertwins.com) is managing director and [Andrew Oliver](http://www.olivertwins.com) technical director. Rob Lord receives the music and sound-effects credit.

The source adds personality that the formal list cannot. Chris Wilson signs the curtain transition with a punchline:

```c
/* Curtains.c - by Chris Wilson
   It's curtains for you, my lad! */
```

The credits close on their own production statistic: 1284 chicken pies eaten during development.

---
# Reference material
The source analysis ends with one external comparison and the supporting references.

## PlayStation GameShark codes
These codes are from a published cheat list, not from a table in the source [^2]:
* **Max Eggs** - `800AA1D0 0063`
* **Have All Map Pieces** - `50000901 0000 300AA1F1 0001`, for GameShark 2.2 or higher

---
# References
[^1]: [Chicken Run (2000) - MobyGames](https://www.mobygames.com/game/3108/chicken-run/)
[^2]: [Chicken Run PlayStation codes - CheatCC](http://www.cheatcc.com/psx/codes/chickenr.html)
