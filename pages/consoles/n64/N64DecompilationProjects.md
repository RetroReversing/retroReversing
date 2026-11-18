---
layout: post
title: N64 Decompilation Projects, Recompilations and Ports
permalink: /n64-decompilation-projects
category: n64
tags:
- n64
- sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Decompilation Projects
    url: /n64-decompilation-projects
editlink: consoles/n64/N64DecompilationProjects.md
updatedAt: '2026-11-18'
excerpt: Explore Nintendo 64 decompilation projects, static recompilations and native ports with game artwork, project notes, progress and source repositories.
placeholderimages:
- /public/games/Mario Kart 64 (USA).png
- /public/N64/Super_Mario_64_box_cover.jpg
---

[Nintendo 64](/n64) decompilation projects recover the code behind cartridge games, from Super Mario 64 and Mario Kart 64 to less familiar corners of the library.
This illustrated guide follows three routes into that code: source reconstruction, recompilation and native ports.
Each project links to its repository, with artwork, progress and technical notes drawn from the [RetroReversing project catalogue](/decompilations.json).

A matching decompilation aims to rebuild the original machine code from recovered source.
A static recompilation translates the original instructions into code for another platform.
A native port adapts a game to run on different hardware; some ports use static recompilation, while others build on recovered source.
Projects labelled as recompilations appear in that section even when they also provide a native port.

Progress figures retain the catalogue's original measure: functional coverage, accuracy and byte matching describe different things.
Repository activity describes maintenance, rather than completion or playability.
The linked repositories provide build instructions, supported game versions and asset requirements.

For a practical introduction to matching game code, the [AI Assisted N64 Decompilation Tutorial](/ai-assisted-n64-decompilation) covers compiler detection, local matches and coding agents.

{% include_cached link-to-other-post.html post="/ai-assisted-n64-decompilation" description="Follow the process of reconstructing Nintendo 64 source code and checking it against an original ROM." %}

<link rel="stylesheet" href="{{ '/public/css/decomp-project-articles.css' | relative_url }}">
{% include decomp-project-articles.html console="nintendo-64" %}
