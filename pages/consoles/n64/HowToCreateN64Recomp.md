---
layout: post
tags:
- n64
- tutorial
- reverseengineering
title: How to Create an N64 Recomp
category: n64
permalink: /how-to-create-an-n64-recomp
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: How to Create an N64 Recomp
    url: '#'
editlink: /consoles/n64/HowToCreateN64Recomp.md
updatedAt: '2026-10-22'
excerpt: 'Create a Nintendo 64 static recompilation with a verified ROM, code and overlay maps, N64Recomp, a native runtime, and game-by-game validation.'
---

# How to Create an N64 Recomp
An N64 recomp turns a particular game's MIPS machine code into native code for a modern computer. The practical route is to identify the exact ROM, map its executable code, provide symbols and relocation information to [N64Recomp](https://github.com/N64Recomp/N64Recomp), then connect the generated code to a native runtime. A working port also needs graphics, audio, input, saving, and careful tests [^1].

This guide is for developers comfortable with C or C++, pointers, hexadecimal addresses, and a terminal. It gives you a first milestone and a path to a playable port. There is no universal command that turns an arbitrary `.z64` file into a finished PC game.

## Choose the Right Kind of Project
A **static recompilation** translates the original instructions into host-compilable C. A **matching decompilation** reconstructs source that rebuilds the original ROM byte for byte. A **source port** adapts reconstructed source to a new platform. These can share research, but only the matching project needs to recover equivalent high-level C for every function. [Zelda64Recomp](https://github.com/Zelda64Recomp/Zelda64Recomp) uses static recompilation for Majora's Mask and uses knowledge from its decompilation project for modifications [^2].

Aim for one observable milestone at a time:
* **Mapped ROM** - You can explain where the initial code and one runtime-loaded code region reside in ROM and RAM.
* **Recompiled function** - A small function translates, compiles, and produces the same results as the original for chosen inputs.
* **Bootable program** - The original entry and initialization path runs with native memory and operating-system services.
* **Playable program** - Graphics, audio, input, overlays, ROM reads, and saves work through a full gameplay path.

The first two milestones are a realistic starting project. A compiled translation alone is not a playable port.

---
## What You Need
The minimum toolchain is a C++20 compiler, CMake 3.20 or newer, Git, Python, and an N64 disassembler. N64Recomp documents the C++20 and CMake requirements and uses submodules [^1]. [Splat](https://github.com/ethteck/splat) can split ROM regions, while [spimdisasm](https://github.com/Decompollaborate/spimdisasm) and [Rabbitizer](https://github.com/Decompollaborate/rabbitizer) help inspect MIPS instructions. An emulator with debugging or execution tracing helps confirm what actually loads and runs [^3].

Install Splat in a Python virtual environment for a new N64 analysis project:

```bash
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -U "splat64[mips]"
```

These terms recur throughout the workflow:
* <a id="glossary-vrom"></a>**VROM** - A game's logical ROM address for data that may be compressed or relocated.
* <a id="glossary-vram"></a>**VRAM** - The virtual address at which the CPU expects code or data in memory.
* <a id="glossary-overlay"></a>**Overlay** - Code loaded into a RAM region only when needed, often with relocation records.
* <a id="glossary-rsp"></a>**RSP** - The N64's separate processor used by graphics and audio microcode.
* <a id="glossary-libultra"></a>**libultra** - Nintendo's operating-system and hardware interface library for N64 games.

Start with a title that has an existing disassembly, symbol list, or decompilation and a well-understood graphics path. [Our N64 reverse-engineering introduction](/N64Reversing) covers ROM layout, MIPS analysis, and matching decompilation in more detail.

{% include_cached link-to-other-post.html post="/N64Reversing" description="Learn how to identify executable regions and follow N64 code before preparing recomp metadata." %}

---
## Build a Reproducible Input
Pick one exact cartridge revision. Region, revision, and byte order affect every offset and symbol address. Keep the original dump separate from the working copy, and record the working copy's SHA-256 hash. Do not commit the ROM or extracted game assets to the public repository.

The first four bytes identify the common dump byte orders:

Format | First four bytes | Interpretation
---|---|---
`.z64` | `80 37 12 40` | Native big-endian byte order
`.v64` | `37 80 40 12` | Adjacent bytes swapped
`.n64` | `40 12 37 80` | Bytes reversed within each 32-bit word

You can inspect the header and hash a `.z64` working copy with:

```bash
xxd -l 16 baserom.us.z64
shasum -a 256 baserom.us.z64
```

On Linux, `sha256sum baserom.us.z64` gives the same kind of digest. If the header indicates `.v64` or `.n64` order, normalize a *copy* before calculating offsets or comparing bytes. Reject unknown headers and mismatched hashes in the build script. Do not assume a filename proves the revision [^4].

The ROM header is not a complete memory map. Boot code loads the first executable segment, and the game may later DMA or decompress more code. Trace those transfers in an emulator when the load address cannot be established from the ROM's own tables [^5].

---
## Map Code, Data, and Overlays
Record each executable segment's ROM location, load address, size, and evidence. Use Splat or an existing project's segment configuration to split the image, but review its output. MIPS data can decode as plausible instructions, and an initial ROM import will miss code that is decompressed or loaded later [^3].

A useful project map looks like this. The values are placeholders, not addresses to copy into a real game:

```text
region          ROM range       RAM address     evidence
main code       <start..end>    <load address>  boot DMA trace
actor overlay   <start..end>    <load address>  overlay table + relocation records
RSP microcode   <start..end>    RSP IMEM        task setup and DMA trace
```

Build a function list from direct call targets, known entry points, callbacks, and execution traces. Check indirect calls and switch jump tables separately. For each suspected function, keep its address, size, section, and confidence. A jump table is data containing code addresses; translating the table itself as instructions will corrupt the output.

For an [overlay](#glossary-overlay), preserve both its [VROM](#glossary-vrom) range and [VRAM](#glossary-vram) destination, plus BSS size and relocation records. An overlay's ROM position alone cannot identify its callable functions. Relocation handling must respect paired MIPS high and low address operands rather than rewriting apparent pointers by guesswork [^1].

Check for TLB instructions and unusual virtual-memory mapping early. A game that changes its address translation may need game-specific runtime work or binary patches; masking every address into RDRAM is not a general fix.

---
## Build N64Recomp and Generate Code
Build the upstream tool from a pinned revision so its configuration format and output remain reproducible. Its repository requires recursive submodules:

```bash
git clone --recurse-submodules https://github.com/N64Recomp/N64Recomp.git
cmake -S N64Recomp -B N64Recomp/build -DCMAKE_BUILD_TYPE=Release
cmake --build N64Recomp/build --config Release
```

N64Recomp's documented input model needs executable bytes and metadata for function boundaries and relocations; its README describes supplying that metadata with an ELF file. The exact configuration fields and generated targets can change, so use the README and a working project's configuration from the same pinned tool revision. Do not paste another game's entry point, overlay list, or symbol addresses into your project [^1].

The recompiler takes a TOML configuration as its first argument. Once your own ROM, symbols or ELF, entry point, and output paths are configured, invoke the built tool with:

```bash
./N64Recomp/build/N64Recomp path/to/recomp.toml
```

For a concrete configuration with real symbols, patches, and overlay metadata, inspect [Zelda64Recomp's configuration](https://github.com/Zelda64Recomp/Zelda64Recomp/blob/dev/us.rev1.toml). Its addresses belong to Majora's Mask and should only be used to understand the file format [^1].

Your first translation should be a small, direct-call function with known input and output. Compare its behavior against the original under an emulator. Then add call targets and loaded sections incrementally. A successful C compilation proves the generated source is syntactically valid; it does not establish accurate emulation of memory, timing, or hardware services.

N64Recomp translates CPU instructions and has a separate [RSP](#glossary-rsp) recompiler. RSP overlay support was added after parts of the README were written, so check the features of the exact revision you pin [^7]. Identify the game's graphics and audio microcode before choosing to recompile it or intercept standard tasks at a higher level.

---
## Connect a Native Runtime
Generated game functions still expect N64 memory and services. [N64ModernRuntime](https://github.com/N64Recomp/N64ModernRuntime) supplies two relevant libraries: `ultramodern` covers much of [libultra](#glossary-libultra), and `librecomp` bridges generated code to it. The project documents threads, controllers, audio, message queues, timers, RSP tasks, overlay handling, PI DMA, and common cartridge save types. It expects the port to provide platform callbacks and a renderer [^6].

Integrate subsystems in the order the game first needs them:
* **Memory and entry** - Initialize RDRAM and map the code/data sections at the addresses expected by the game.
* **Operating-system calls** - Replace thread, queue, timer, and DMA behavior used during initialization.
* **Loaded code** - Make overlay loading, relocation, and indirect-call dispatch agree with the original addresses.
* **Display and sound** - Identify RSP tasks and connect the graphics renderer and audio output.
* **Input and persistence** - Translate controller input and implement the game's actual save medium.

Save formats matter. EEPROM, SRAM, and FlashRAM are accessed differently; a native save file must reflect the game's chosen medium if you want compatibility with original data [^6]. For renderer integration, inspect [RT64](https://github.com/rt64/rt64), which N64ModernRuntime recommends. Zelda64Recomp shows these pieces assembled in a real project [^2] [^6].

The [asset workflow in the N64 reversing introduction](/N64Reversing#choose-an-asset-path-for-a-recomp) explains when to read original data from the user's ROM and when extraction or rebuilding is needed.

---
## Worked Example From Zelda64Recomp
Majora's Mask is a useful case study because the [Zelda64Recomp repository](https://github.com/Zelda64Recomp/Zelda64Recomp) publishes the configuration, build instructions, and native project together. This is an explanation of its files, not a configuration for another game [^2] [^8].

The path from input to executable is visible in these project files:
* **Game input** - `BUILDING.md` identifies one supported US ROM revision and instructs the developer to decompress a local copy before recompilation. The game itself runs with the standard ROM.
* **CPU metadata** - `us.rev1.toml` names the entry point, decompressed ROM, symbol file, overlay-section file, and generated-function output directory. Its `stubs` and `ignored` lists distinguish deliberately replaced hardware calls from a symbol that is not actually a function.
* **Targeted changes** - The same TOML file records instruction patches by function and VRAM address. This makes each deviation from the original instructions inspectable.
* **RSP translation** - `BUILDING.md` runs `RSPRecomp` with separate audio and JPEG microcode configurations after the CPU recompilation.
* **Native build** - The project then uses CMake to compile the translated functions and platform code into a desktop executable. Its README identifies RT64 as the renderer and explains that releases contain no game assets [^2] [^8].

For a new title, begin by reproducing the *roles* of those files: verified input, symbol and overlay metadata, a small patch set, identified microcode, and a host build. The Majora's Mask addresses and patch words are evidence about that game only. A port that translates its CPU functions still needs its own runtime tests for DMA, graphics, audio, input, and saves.

For a repeatable validation and build process, see [Testing and Automating an N64 Recomp](/testing-an-n64-recomp). The [N64 reversing introduction](/N64Reversing#keep-symbols-and-overlay-evidence-under-version-control) also gives a versioned symbol-record template.

---
## Harder Case Study From GoldenEye
[GoldenRecomp](https://github.com/kholdfuzion/goldenrecomp) documents obstacles that its GoldenEye 007 port encountered after symbol recovery. Its developers changed the underlying decomp build to avoid the game's TLB-dependent memory layout. They also modified their N64Recomp fork for jump tables whose targets crossed segment boundaries. These describe the project's documented solution at that point in development, not a claim that every current N64Recomp version has the same limits [^9].

The later [GoldenEye64Recomp](https://github.com/cblock85/GoldenEye64Recomp) documents a patch that turns a supported user-supplied NTSC-U dump into its TLB-free layout. Its symbol files and patches are specific to that revision. The project also reports remaining custom display-command effects and timing issues, showing why a game can be playable while still differing from the original [^10].

GoldenEye suggests four checks before treating a translated build as a portable game:
* **Address mapping** - Trace TLB writes and virtual ranges before assuming every guest address maps directly to RDRAM.
* **Control flow** - Inspect switch destinations and function pointers across segment boundaries; a translator needs the correct targets.
* **Rendering** - Identify graphics commands and microcode that the chosen renderer does not implement.
* **Timing** - Compare gameplay actions at the original simulation cadence before adding display interpolation or higher refresh rates.

A different title may need none of these changes. Use GoldenEye as a diagnostic example, then verify each issue against the exact ROM and tool revisions in your own project [^9] [^10].

---
## Validate Each Milestone
Test behavior in a reference emulator and the native build using the same ROM revision and game state. Log the first mismatch, then reduce it to one subsystem. A second independent emulator can help distinguish a port error from an emulator-specific behavior.

Useful checks are:
* **CPU** - Function return values, memory writes, branch delay slots, sign extension, unaligned loads, and floating-point edge cases.
* **Loading** - Entry point, overlay transitions, relocations, decompression, and ROM DMA results.
* **Video and audio** - First frame, scene transitions, custom microcode tasks, audio timing, and framebuffer effects.
* **Gameplay** - Input latency, one complete route through the game, save creation, save reload, and restart.

If the program hangs during initialization, inspect its last OS message queue or DMA wait before changing translated game code. If it crashes on an overlay transition, compare the loaded bytes, relocation records, and indirect target address. If it renders a blank frame while gameplay advances, inspect the RSP task and display-list path [^5] [^6].

---
## Common Questions
These are the decisions that most often change the scope of a new project.
### Do I need a complete decompilation first?
No. Static recompilation translates instructions, while a matching decompilation reconstructs buildable source. Existing decomp work is valuable for symbols, structures, and overlays, but Zelda64Recomp explicitly says its port does not recompile the decompiled game's C [^2].

---
### Can N64Recomp convert any ROM automatically?
No. The tool requires correct metadata and a runtime matched to the game's behavior. Overlays, indirect calls, unusual address mappings, custom microcode, and save hardware all require investigation [^1] [^6].

---
### What is the smallest useful success?
Verify one ROM revision, document one executable region, translate one known function, and compare its output and memory changes with the original. That produces evidence you can build on without claiming the game is playable.

---
# References
[^1]: [N64Recomp README](https://github.com/N64Recomp/N64Recomp), input model, instruction translation, overlays, RSP support, and build requirements.
[^2]: [Zelda64Recomp README](https://github.com/Zelda64Recomp/Zelda64Recomp), architecture, use of decompilation research, and runtime features.
[^3]: [Splat documentation](https://github.com/ethteck/splat) and [spimdisasm documentation](https://github.com/Decompollaborate/spimdisasm), ROM splitting and disassembly workflows.
[^4]: [N64Recomp ROM byte-order handling](https://github.com/N64Recomp/N64Recomp) and [Zelda64Recomp ROM selection FAQ](https://github.com/Zelda64Recomp/Zelda64Recomp), accepted dump representations and revision specificity.
[^5]: [Nintendo 64 Programming Manual](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/), cartridge DMA, memory, and operating-system behavior.
[^6]: [N64ModernRuntime README](https://github.com/N64Recomp/N64ModernRuntime), runtime services, platform callbacks, renderer integration, and save media.
[^7]: [N64Recomp pull request 118](https://github.com/N64Recomp/N64Recomp/pull/118), merged RSPRecomp overlay support.
[^8]: [Zelda64Recomp build instructions](https://github.com/Zelda64Recomp/Zelda64Recomp/blob/dev/BUILDING.md) and [Majora's Mask recomp configuration](https://github.com/Zelda64Recomp/Zelda64Recomp/blob/dev/us.rev1.toml), concrete input and build pipeline.
[^9]: [GoldenRecomp README](https://github.com/kholdfuzion/goldenrecomp), documented TLB-free build and cross-segment jump-table changes.
[^10]: [GoldenEye64Recomp README](https://github.com/cblock85/GoldenEye64Recomp), supported ROM, local patching, and reported renderer and timing limitations.
