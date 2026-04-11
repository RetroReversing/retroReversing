---
layout: post
tags: 
- gameboy
- games
- sourcecode
title: Mr Do! Source Code (Game Boy)
category: gameboy
youtube: "qLtNkZ1GHh0"
image: /public/games/MrDoGameboy.jpg
permalink: /mrdo
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Game Boy
    url: /gameboy
  - name: Mr Do! Source Code (Game Boy)
    url: #
recommend: gameboy
editlink: /consoles/gameboy/Mrdo.md
updatedAt: '2026-04-11'
---

The source code for Ocean Software's Mr Do! port to the Game Boy has been officially released by two of the original developers.
The original release is a single monolithic assembly file (`mrdo.asm`) containing code, data tables, and large blocks of embedded graphics data [^2].

Description from Paul Hughes [^1]:
```
Many moons ago I debugged and finished off Ocean's Mr Do! for the original Game Boy. 

As **Joffa**, the late, great original author, decided to release the source code, 

I thought I'd also put it up.
```

The header for the source file also mentions Wesley Knackers and gives a start date of June 28, 1990 and a last date of September 5, 1990:

```cpp
****************************************************************************
*									   *
*		MR DO! (C) 1990 SPECIAL FX SOFTWARE LIMITED		   *
*									   *
*		           BY WESLEY KNACKERS				   *
*									   *
*		  	  START DATE 28/06/90				   *
*		  	   LAST DATE 05/09/90				   *
*									   *
****************************************************************************
```

Known developers mentioned across the release and related posts:
* **Paul Hughes**
* **Joffa**
* **Wesley Knackers**

---
## Glossary of Key Terms
If you are new to Game Boy reverse engineering terminology, this quick glossary should help:
* <a id="glossary-dma"></a>**DMA** - The Game Boy OAM DMA mechanism used to copy 160 bytes of sprite attribute data into OAM via the `DMA` register (`$FF46`) [^3].
* <a id="glossary-oam"></a>**OAM** - Object Attribute Memory (`$FE00`) containing the hardware sprite list (position, tile, attributes) [^3].
* <a id="glossary-vram"></a>**VRAM** - Video RAM (`$8000-$9FFF`) containing tile graphics and background/window tilemaps [^3].
* <a id="glossary-wram"></a>**WRAM** - Work RAM (`$C000-$DFFF`) used for variables, buffers, and scratch space [^3].
* <a id="glossary-hram"></a>**HRAM** - High RAM (`$FF80-$FFFE`) used here to run short routines (including the DMA trigger) without being blocked during OAM DMA [^3].

---
# Code overview
The source is useful because it is not a "disassembly" or a ROM dump.
It is proper annotated game code with labels and routines that map closely onto the retail behaviour.

Some highlights worth skimming first:
* **Main loop** - `START` runs `SYSETUP`, `MENU`, and then enters a per-level loop that calls the gameplay subsystems in a predictable order.
* **State-machine style** - Multiple behaviours are selected via jump tables (`BADTAB`, `APPLETAB`, `LOGOTAB`, etc.) rather than long chains of branches.
* **2x2 meta-tiles** - The map is built from 4-tile blocks (top-left/top-right/bottom-left/bottom-right) with additional tables for "eaten" wall variants.
* **Split-screen rendering** - `SPLITSCREEN` does a status-window pass, then triggers OAM DMA for gameplay sprites after a timing delay.

---
# Memory map and data structures
The file defines a set of fixed addresses that make its rendering and buffering model easier to follow.
This is also a good example of how much you can get done on a ROM-only cartridge by leaning on careful RAM layout.

Key addresses used throughout the code are:
Name | Address | Notes
---|---|---
`STACK` | `$CFFF` | Stack top (end of WRAM)
`OBJSET` | `$8000` | Sprite tile data base in <a href="#glossary-vram">VRAM</a>
`BGSET` | `$9000` | Background tile data base in <a href="#glossary-vram">VRAM</a>
`DISPSCREEN` | `$9800` | Background tilemap for gameplay
`STATSCREEN` | `$9C00` | Background tilemap for the status window
`BACKSCREEN` | `$C800` | RAM buffer used for background work
`BYTESCREEN` | `$CC00` | Small RAM buffer used as scratch / temp
`OAMRAM` | `$FE00` | <a href="#glossary-oam">OAM</a>
`INTRAM` | `$FF80` | <a href="#glossary-hram">HRAM</a>

## Sprite records
The game uses fixed-size records in WRAM to represent sprites and "actors".
The comments in the `SPRITES` block give the layout, and you can see the same pattern repeated in multiple systems (Mr Do, dinos/ghosts, apples).

The sprite record fields are:
Field | Offset | Purpose
---|---|---
`TYP` | 0 | Actor type (used as an index into jump tables)
`YNO` | 1 | Y position (pixel units)
`XNO` | 2 | X position (pixel units)
`GNO` | 3 | Base tile index / graphics selector
`FLG` | 4 | Flags (palette, flip, priority, etc.)
`ADL` | 5 | Pointer / address low byte (varies by actor)
`YSD` | 6 | Y speed / delta
`XSD` | 7 | X speed / delta

---
# Main loop and jump-table pattern
At the top level the program flow is very direct:
* **Boot** - `START` sets up the stack, calls `SYSETUP`, runs the menu, and resets the game state.
* **Per level** - `LEVELSETUP` prepares graphics and variables and then drops into `MAINLOOP`.
* **Per frame** - `MAINLOOP` calls the major gameplay subsystems (input, Mr Do movement/eating, baddies, collisions, apples, sprite dumping, timers, RNG, and flag updates).

One of the most reusable techniques in the file is the jump-table driven state machine.
For example, `BADTAB` maps each actor type to its update routine, and `APPLETAB` does the same for apple states.
This is a good pattern to steal when writing your own LR35902 assembly because it keeps the hot-path branch structure compact.

---
# Rendering, split-screen, and DMA
The code uses two different "sprite worlds" and then does a timed swap:
* **Status sprites** - A separate OAM-shaped buffer (`STATUSOBJ`) is DMA'd first, with the LCDC configured so the status window is enabled.
* **Gameplay sprites** - After updating the status line graphics, the code waits a fixed amount of time and then DMA's the gameplay sprite list (`GAMEOBJ`) and disables the status window again.

This is orchestrated by `SPLITSCREEN`, and it relies on a tiny DMA-trigger routine being copied into <a href="#glossary-hram">HRAM</a> during `SYSETUP`.
The routine is then called via the `BLITS` label, passing the source high-byte in `A` before writing to `DMA` (`$FF46`) [^3].

If you are reverse engineering the ROM in an emulator, the easy breakpoint targets are:
* **OAM DMA** - writes to `$FF46` (DMA).
* **Mode changes** - writes to `LCDC` (`$FF40`) to enable/disable the window.

---
# Map format and 2x2 meta-tiles
The background is assembled from 2x2 blocks of tile IDs.
The `BLOCKS`, `CORNERS`, `CHERRY`, `FOOD`, and `APPLE` tables each store 4 bytes in the order "top-left, top-right, bottom-left, bottom-right".

There are also multiple "eat tables" (for example `UTL`, `UTR`, `UBL`, `UBR`) that appear to define the replacement tiles to use when Mr Do chews through walls in a particular direction.
If you are trying to re-implement or rewrite the map system, these tables are a good anchor for reconstructing the exact tile semantics.

---
# RNG and text routines
The RNG is a compact 3-byte state (`RND1`, `RND2`, `RND3`) stirred each frame and mixed with the `DIV` hardware register.
It is small enough that you can single-step it and see how entropy flows into map generation (for example the gravel fill in `DRAWMAP`).

The text routines are also worth a quick look because they show a very practical "engine" approach:
strings are stored in a compact custom format, and `PRINTEXT` renders them directly into the background tilemap.

---
# Assembling it today
The source uses an older assembler dialect with directives like `DEFB`, `DEFW`, `DEFS`, `HEX`, `ORG`, and `ENT`.
That means you should not expect it to assemble cleanly with modern `rgbds` without some conversion work [^4].

If you want to get it building as an exercise, a reasonable approach is:
* **Start with `rgbds` scaffolding** - Create a ROM0 header section and make sure the reset entry and cartridge header bytes land at the expected addresses [^3][^4].
* **Convert directives mechanically** - Map `DEFB`/`DEFW`/`DEFS` to `db`/`dw`/`ds`, and replace `HEX` blocks with `db $..` sequences.
* **Replace `ORG` with sections** - Translate fixed `ORG` placements into `SECTION` blocks pinned to ROM0/ROMX addresses.
* **Validate in an emulator** - Use breakpoints on `$FF46` and `LCDC` to confirm you are hitting the same high-level flow as the original.

Also note that the in-file cartridge header comments claim a 256K ROM, but the ROM size byte in the header is written as `0`.
If you do attempt a rebuild, you will need to reconcile those fields with the actual output ROM size.

---
# Fun breadcrumbs in the comments
The release is full of tiny details that give it some personality and make it easier to follow.
Some examples you will see while browsing:
* **"STOPS STUPID BUG!"** - A defensive load before a compare in the status-sprite dump routine.
* **`HIGHBUFF`** - A hardcoded string containing `FROBUSH HERE` in the high-score data block.

---
# Development kit
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It was started on Special FX's own Gameboy assembler and hardware and was finished on Ocean's own Atari ST based assembler and hardware.</p>&mdash; Paul Hughes (@PaulieHughes) <a href="https://twitter.com/PaulieHughes/status/1231294467879116800?ref_src=twsrc%5Etfw">February 22, 2020</a></blockquote>

---
# References
[^1]: https://www.pauliehughes.com/downloads.htm
[^2]: https://www.pauliehughes.com/index_htm_files/mrdo.asm
[^3]: https://gbdev.io/pandocs/
[^4]: https://rgbds.gbdev.io/
