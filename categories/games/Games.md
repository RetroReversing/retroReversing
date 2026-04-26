---
permalink: /games
layout: post
category: 
- games
- introduction
title: Games specific posts
breadcrumbs:
  - name: Home
    url: /
  - name: Games
    url: /games
redirect_from:
  - /games/all
  - /games/
editlink: ../categories/games/Games.md
tags:
  - games
---

This page collects all the posts that are related to reverse engineering a specific game rather than an entire console or platform.

## Decompiled Retail Console Games
This page maintains a comprehensive, curated list of retail console games that have been successfully reverse engineered and decompiled back into compilable source code (C/C++). It tracks the progress of major community projects across platforms like the **Nintendo 64**, **GameCube**, and **PlayStation**, including high-profile achievements such as *Super Mario 64*, *The Legend of Zelda: Ocarina of Time*, and *Jak and Daxter*. We have a specific post all about it here:

{% include_cached link-to-other-post.html post="/source-code/decompiled-retail-console-games" %}

## Retail Console Game Source code (C/C++)
We have a specific page that serves as a directory for officially released or leaked source code of retail console games, specifically focusing on the official source code rather than disassemblies and decompilations:

{% include_cached link-to-other-post.html post="/source-code/retail-console-source-code" %}

## Game Engines & Middleware
Game engines provide the foundational logic for graphics, audio, and input, while middleware focuses on specific subsystems like physics (PhysX) or sound (FMOD). Our page explores the evolution of these tools, from proprietary in-house engines to commercial giants like Unity and Game Maker, and categorizes them by platform to aid in reverse engineering efforts.

{% include_cached link-to-other-post.html post="/games/engines" %}

## Games with Debug Symbols
We have a specific post that aggregates all our posts on games with debug symbols separated by console platform here:

{% include_cached link-to-other-post.html post="/symbols" %}

---
# Arcade Games
This section collects our arcade game-specific posts:

### Batman Forever - The Arcade Game
This post covers the arcade version of **Batman Forever**, focusing on the game itself rather than the wider Midway arcade hardware family.
{% include_cached link-to-other-post.html post="/batman-forever" %}

---
# NES Games
This section collects our NES game-specific posts and source code investigations:

### Super Mario Bros
This post covers reverse engineering work on the original **Super Mario Bros** for the NES, including analysis and tooling around one of the most studied 8-bit platformers.
{% include_cached link-to-other-post.html post="/super-mario-bros" %}

### Home Alone 2
This post covers the recovered **Home Alone 2** NES source code and explains what survives in the archive for researchers interested in late-era commercial NES development.
{% include_cached link-to-other-post.html post="/home-alone-2-nes-source-code" %}

## The Final Fantasy Battle Engine: A Dissection of Physical Attacks
[Displaced Gamers](https://www.youtube.com/watch?v=O_CLnBCgJks) has an excellent video dissecting the underlying code, hidden math, and bugs governing physical attacks in the original NES Final Fantasy. The video explores how battle stats like accuracy, critical hit rates, and elemental weaknesses are processed in Assembly, revealing several programming oversights that heavily impact gameplay. It provides a fascinating look into early RPG mechanics and console game reverse engineering.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O_CLnBCgJks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Core Architecture:
* **System Scope:** Analysis of the physical attack mechanics within the Final Fantasy (NES/Famicom) battle engine.
* **Code Footprint:** The execution logic for a single physical attack consists of 781 total bytes (excluding called subroutines), responsible for animation, damage calculation, and variable reporting.

Base Stat Formulas:
* **Attack Power:** Calculated as `(Character Strength / 2) + Weapon Power`. The decimal value is truncated.
* **Accuracy:** Calculated as `Base Character Accuracy + Equipped Weapon Accuracy`.
* **Hits per Attack:** Calculated as `(Accuracy / 32) + 1`. This value determines how many discrete damage rolls are executed per attack command.
* **Evade:** Calculated as `Base 48 + Agility Modifier - Armor Weight Penalty`.
* **Absorb (Defense):** Total numerical summation of all equipped armor mitigation values.

The Black Belt / Master Class Exceptions:
* **Armed:** Attack power receives a hardcoded `+1` modifier in addition to standard formulas.
* **Unarmed:** Attack power and Critical Hit values bypass standard logic and are set to `Current Level * 2`. The hit count is calculated normally but then strictly doubled.
* **Unarmored:** Absorb value logic is bypassed and set equal to the character's `Current Level`.

RNG, Hit Validation, and Damage Calculation:
* **Turn Order:** Agility does not govern turn priority. An array queue of players and enemies undergoes 16 RNG-based memory position swaps to randomize round sequence.
* **Hit Chance Formula:** `168 (Flat Base Constant) + Attacker Accuracy - Defender Evade`. The initial calculation before the evasion deduction is hard-capped at 255.
* **Battle RNG Validation:** A random value generated between `0` and `200`. A roll of `200` forces an automatic miss. If `Hit Chance >= Battle RNG`, the attack successfully lands.
* **Base Damage Roll:** Generates a random value bounded by `[Attack Power]` and `[Attack Power * 2]`. 
* **Calculated Damage:** `Damage Roll - Defender Absorb`. Floor value is strictly clamped at a minimum of `1` damage.
* **Critical Hits:** If the same `Battle RNG <= Critical Hit Rate`, a critical strike occurs. A secondary raw damage roll is executed and added directly to the damage total, completely ignoring the defender's Absorb stat.

Critical Engine Bugs & Logic Errors:
* **Critical Hit Memory Fetch Error:** When querying the ROM table for a weapon's stored critical hit rate, the engine skips the instruction to load the stat. Instead, it writes the weapon's *index array ID* into RAM. Consequently, later-game weapons (higher index table values) yield artificially high crit rates regardless of intended design.
* **Ailment Application on Misses:** Ailments run against `100 - Defender Magic Defense` and an RNG check. However, the logic utilizes a non-resetting running tally of connected hits to permit ailment rolls. If hit #1 connects, the flag turns non-zero; if hit #2 misses completely, the engine still executes the ailment roll against the player because the flag remains non-zero.
* **Elemental Weakness Inversion:** When an enemy executes a physical attack carrying a status effect (e.g., Poison), the engine erroneously cross-references the player's resistances against the *enemy's innate elemental weaknesses* rather than the status type. (Example: Resisting Poison from a Scum enemy requires equipping Fire/Ice resistance, as the Scum is weak to Fire/Ice).
* **Player Element Nullification:** Weapons with elemental attributes (e.g., Flame Sword) fail to trigger elemental damage bonuses because the combat routine queries the *player character's* element variable (which is nonexistent/null) instead of the *equipped weapon's* variable.
* **Stun/Sleep Accuracy Omission:** When an attack target is under Stun or Sleep status, the attacker correctly receives a +25% attack power bonus. However, the logic jump bypasses the instruction to apply the attacker's accuracy stat entirely, locking the base hit chance at a fixed `84%` (168 base / 200).

---
# Game Boy Games
This section collects our Game Boy game-specific posts and source code investigations:

### Pokemon Red and Blue
This post covers reverse engineering **Pokemon Red and Blue** on the Game Boy, including community reconstruction work and related historical material about the games' development.
{% include_cached link-to-other-post.html post="/pokemonredblue" %}

### Pokemon Original Source Code Leak
This post covers the leaked original **Pokemon** source material and explains what it reveals about the early Game Boy-era codebase and development process.
{% include_cached link-to-other-post.html post="/pokemon-original-source-code" %}

### Zelda Link's Awakening
This post covers the leaked original **The Legend of Zelda: Link's Awakening** Game Boy source code and the value of the archive for studying Nintendo's handheld development workflow.
{% include_cached link-to-other-post.html post="/zelda-links-awakening" %}

---
# Game Boy Color Games
This section collects our Game Boy Color game-specific posts:

### Zelda Link's Awakening DX
This post covers the **Link's Awakening DX** source code materials, showing how the Game Boy Color revision differs from the earlier monochrome release.
{% include_cached link-to-other-post.html post="/zelda-links-awakening-dx" %}

---
# Super Nintendo Games
This section collects our Super Nintendo game-specific posts and source code investigations:

### F-Zero
This post covers the leaked **F-Zero** source code and what it shows about early Super Famicom launch-era game development.
{% include_cached link-to-other-post.html post="/f-zero-source-code" %}

### Super Mario Kart
This post covers the leaked **Super Mario Kart** source code and the surrounding development files that help document Nintendo's Mode 7 racing workflow.
{% include_cached link-to-other-post.html post="/super-mario-kart-source-code" %}

### Super Mario Collection / All-Stars
This post covers the source archive for **Super Mario Collection / Super Mario All-Stars**, including how Nintendo adapted earlier NES titles for the Super Nintendo.
{% include_cached link-to-other-post.html post="/super-mario-collection-source-code" %}

### Star Fox
This post covers the leaked original **Star Fox** source code and the technical context around Nintendo and Argonaut's early polygon pipeline.
{% include_cached link-to-other-post.html post="/star-fox-source-code" %}

### Star Fox 2
This post covers the leaked **Star Fox 2** source code and the unfinished but historically important state of the project.
{% include_cached link-to-other-post.html post="/star-fox-2-source-code" %}

### Wild Trax / Stunt Race FX
This post covers the leaked source code for **Wild Trax / Stunt Race FX**, a useful case study for Super FX-powered racing technology on the SNES.
{% include_cached link-to-other-post.html post="/wild-trax-source-code" %}

### Yoshi's Island
This post covers the leaked **Yoshi's Island** source code and the implementation details behind one of Nintendo's most visually distinctive 2D platformers.
{% include_cached link-to-other-post.html post="/yoshis-island-source-code" %}

### The Legend of Zelda - A Link to the Past
This post covers the leaked **A Link to the Past** source code and its importance for understanding large-scale first-party Super Nintendo game development.
{% include_cached link-to-other-post.html post="/zelda-a-link-to-the-past-source-code" %}

---
# GameCube Games
This section collects our GameCube game-specific posts:

### 007 Agent Under Fire
This post covers reverse engineering work on the GameCube version of **007 Agent Under Fire**, with attention to the game's own binaries and assets.
{% include_cached link-to-other-post.html post="/007-agent-under-fire" %}

---
# Nintendo 64 Games
This section collects our Nintendo 64 game-specific posts and source code investigations:

### Super Mario 64
This post covers **Super Mario 64** reverse engineering, including tools, level work, and analysis tied to the best-known N64 decompilation effort.
{% include_cached link-to-other-post.html post="/super-mario-64" %}

### Mario Kart 64
This post covers **Mario Kart 64** specifically, gathering reverse engineering material around the game's code, assets, and mechanics.
{% include_cached link-to-other-post.html post="/mario-kart-64" %}

### Turok 64
This post covers the official **Turok** Nintendo 64 source code archive and explains what it reveals about a major commercial western N64 production.
{% include_cached link-to-other-post.html post="/turok64sourcecode" %}

---
# PlayStation 1 Games
This section collects our PlayStation 1 game-specific posts:

### Crash Bandicoot
This post covers the original **Crash Bandicoot** on PlayStation 1, including reverse engineering notes and development context around Naughty Dog's early PS1 technology.
{% include_cached link-to-other-post.html post="/crash-bandicoot" %}

---
# Dreamcast Games
This section collects our Dreamcast game-specific posts and source code investigations:

### Chicken Run
This post covers the recovered **Chicken Run** Dreamcast source code and what it shows about licensed late-era Dreamcast game production.
{% include_cached link-to-other-post.html post="/Chicken-Run-Source-Code" %}

---
# PlayStation Portable Games
This section collects our PSP game-specific posts:

### Saints Row Undercover
This post covers the PSP prototype of **Saints Row Undercover**, including its unusual release history and what can be learned from the surviving build.
{% include_cached link-to-other-post.html post="/psp-saints-row-undercover" %}

---
# Multi-platform Games
This section collects game-specific posts that span multiple retail platforms:

### The Simpsons Hit & Run
This post covers the **Simpsons Hit & Run** source code leak, which is relevant across multiple released platforms rather than belonging to a single console family.
{% include_cached link-to-other-post.html post="/simpsons-hit-and-run-source-code" %}

---
# PC Games
This section collects our PC game-specific posts and source code investigations:

### Planet X3
This post covers **Planet X3**, a modern MS-DOS strategy game whose tooling and technical design make it relevant to retro PC development research.
{% include_cached link-to-other-post.html post="/planet-x3-dos" %}

## Deponia Magnet Puzzle Soft-Lock Fix
[Nathan Baggs](https://www.youtube.com/watch?v=lT4McPl5kQU) has a detailed video breakdown about reverse engineering a persistent, game-breaking bug in the point-and-click adventure game **Deponia**. The investigation covers diagnosing a magnet puzzle soft-lock using tools like Ghidra, x64dbg, and RenderDoc to analyze memory and engine behavior. 
By discovering an embedded Lua debugger (**mobdebug**) and decompiling the game's bytecode (**LuaJit**), the root cause-a failure to initialize condition states upon reloading-is identified and resolved via custom Lua code injection.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lT4McPl5kQU" title="Why Saving This Game Breaks It Forever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---
# All Posts related to Specific Games

{% include console.html %}
