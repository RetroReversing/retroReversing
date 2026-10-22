---
layout: post
tags:
- n64
- tutorial
- reverseengineering
title: Testing and Automating an N64 Recomp
category: n64
permalink: /testing-an-n64-recomp
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Testing and Automating an N64 Recomp
    url: '#'
editlink: /consoles/n64/TestingAnN64Recomp.md
updatedAt: '2026-10-22'
excerpt: 'Build reproducible N64 recomp projects and diagnose gameplay differences with subsystem traces, reference emulators, and ROM-free public CI.'
---

# Testing and Automating an N64 Recomp
A translated function compiling successfully says little about whether a game runs correctly. An N64 recomp also depends on memory mapping, DMA, overlays, operating-system calls, RSP tasks, rendering, audio, input, and saves. Test these boundaries with a verified ROM revision and a repeatable gameplay path [^1] [^2].

The [guide to creating an N64 recomp](/how-to-create-an-n64-recomp) covers the initial translation and runtime. This page turns its validation checklist into a workflow for finding the first observable difference.

{% include_cached link-to-other-post.html post="/how-to-create-an-n64-recomp" description="Prepare the ROM, code map, N64Recomp metadata, and native runtime before building a regression suite." %}

---
## Fix the Inputs Before Comparing Behavior
Choose one game revision and normalize its byte order. Record the SHA-256 digest of that working image, the emulator versions and settings, the N64Recomp commit, runtime and renderer commits, and the host compiler version. A changed input or translator can change results even when the gameplay test is identical [^1].

Keep a small test manifest for each scenario. It should name the initial save or fresh-boot state, controller inputs, expected scene transition, and the first frame or event to inspect. A save state alone is a poor fixture when its format or cached code depends on one emulator version. Retain the steps needed to reach the state from a fresh boot.

For matching-decomp builds, also pin the historical compiler and linker setup. A byte-for-byte ROM comparison depends on toolchain behavior and object layout, not just equivalent C source [^3].

---
## Compare at Subsystem Boundaries
Run the same scenario in the native build and a reference emulator. If possible, repeat a disputed result with another independent emulator or original hardware. [ares](https://github.com/ares-emulator/ares), [Mupen64Plus](https://github.com/mupen64plus/mupen64plus-core), and [Project64](https://github.com/project64/project64) offer different implementations; agreement between two emulators is useful evidence, but it does not prove original hardware behavior [^4].

Start with narrow checkpoints rather than a whole-session screenshot:
* **Boot** - Entry point, initialized RDRAM ranges, thread creation, and first message-queue activity.
* **Loading** - PI DMA source and destination, decompressed byte count, overlay identity, relocations, and first indirect call into loaded code.
* **Output** - RSP task or microcode identity, first display list, framebuffer effects, and audio task timing.
* **Gameplay** - Controller state, scene transition, simulation tick, save write, save reload, and restart.

For one mismatch, log the first differing event and work backward to the last matching boundary. If an overlay crash follows a DMA, compare loaded bytes and relocations before changing gameplay code. If the simulation advances behind a blank screen, investigate the RSP and display-list path first [^1] [^2].

An illustrative trace record could contain these fields; their names are a local test convention rather than a tool format:

```json
{
  "scenario": "fresh-boot-first-scene",
  "frame": 120,
  "event": "overlay-load",
  "overlay": "<project overlay identifier>",
  "pc": "<guest program counter>",
  "dma_source": "<ROM offset>",
  "dma_destination": "<guest RAM address>",
  "rdram_region_sha256": "<digest of selected guest bytes>"
}
```

Compare selected memory ranges and event order, not an entire emulator save-state file. Exclude nondeterministic host timestamps and paths from the comparison. Keep the recorded input and game revision beside each trace so a later failure can be reproduced.

---
## Separate Public and ROM-Dependent Automation
Public continuous integration can compile project-owned runtime and patch code, lint configuration, test parsers against synthetic or homebrew fixtures, and check that generated metadata is stable. It should not fetch a retail ROM. Keep exact-ROM matching, full recomp generation, and emulator-to-native gameplay tests in a local or authorized private environment that has the verified input [^1] [^3].

Useful gates for the private build are a matching input hash, resolved indirect-call targets, recognized overlay sections, successful host compilation, and saved regression traces. For a matching decompilation, compare the complete rebuilt image with the expected hash. For a static recomp, test behavior rather than expecting a rebuilt N64 ROM.

Before packaging, inspect the release file list and binary contents for accidentally included ROM or extracted assets. [Zelda64Recomp](https://github.com/Zelda64Recomp/Zelda64Recomp) documents a distribution model in which the user supplies the original game and the repository and releases contain no game assets [^5].

---
# References
[^1]: [N64Recomp](https://github.com/N64Recomp/N64Recomp), tool inputs, generated code, patches, and overlay handling.
[^2]: [N64ModernRuntime](https://github.com/N64Recomp/N64ModernRuntime), runtime services and hardware interfaces required by a native port.
[^3]: [Super Mario 64 decompilation](https://github.com/n64decomp/sm64), exact-ROM build model and version-specific inputs.
[^4]: [ares](https://github.com/ares-emulator/ares), [Mupen64Plus core](https://github.com/mupen64plus/mupen64plus-core), and [Project64](https://github.com/project64/project64), independent emulator implementations.
[^5]: [Zelda64Recomp README](https://github.com/Zelda64Recomp/Zelda64Recomp), game-asset distribution statement and user-supplied ROM requirement.
