---
permalink: /games
layout: post
category: games
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
# NES Games

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
# All Posts related to Specific Games

{% include console.html %}
