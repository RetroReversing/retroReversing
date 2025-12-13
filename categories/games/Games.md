---
permalink: /games
layout: post
console: games
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

{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" %}

## Retail Console Game Source code (C/C++)
We have a specific page that serves as a directory for officially released or leaked source code of retail console games, specifically focusing on the official source code rather than disassemblies and decompilations:

{% include link-to-other-post.html post="/source-code/retail-console-source-code" %}

## Game Engines & Middleware
Game engines provide the foundational logic for graphics, audio, and input, while middleware focuses on specific subsystems like physics (PhysX) or sound (FMOD). Our page explores the evolution of these tools, from proprietary in-house engines to commercial giants like Unity and Game Maker, and categorizes them by platform to aid in reverse engineering efforts.

{% include link-to-other-post.html post="/games/engines" %}

## Games with Debug Symbols
We have a specific post that aggregates all our posts on games with debug symbols separated by console platform here:

{% include link-to-other-post.html post="/symbols" %}

---
# All Posts related to Specific Games

{% include console.html %}
