---
permalink: /mame-source-code
layout: post
title: MAME Source Code
excerpt: A guide to the MAME repository structure, including its top-level directories, files, plugins, and build system.
category: 
- arcade
- sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: MAME Source Code
    url: #
recommend: 
- sourcecode
- emulation
- arcade
tags:
- sourcecode
- emulation
- arcade
editlink: ../pages/SourceCode/mame/MAMESourceCode.md
updatedAt: '2026-10-21'
---

# MAME Repository Structure
A guide to every top-level directory and file in this repository.

---
## Glossary of Key Terms
If you are new to MAME's source tree, this glossary covers the acronyms used throughout the page.

* <a id="glossary-asmjit"></a>**AsmJIT** - A lightweight library for generating machine code at runtime, used for [JIT](#glossary-jit) compilation of emulated CPUs directly into host machine instructions.
* <a id="glossary-bdf"></a>**BDF** - Bitmap Distribution Format. A plain-text font format that stores glyph bitmaps. Used by MAME's built-in UI renderer to draw on-screen text without depending on host OS font APIs.
* <a id="glossary-bgfx"></a>**BGFX** - A cross-platform rendering abstraction library that sits on top of Direct3D, OpenGL, Metal, and Vulkan. MAME uses it to implement post-processing effects such as scanlines, shadow masks, and bloom in a renderer-agnostic way.
* <a id="glossary-catch2"></a>**Catch2** - A header-only C++ unit testing framework. MAME's `tests/` suite is written against it.
* <a id="glossary-chd"></a>**CHD** - Compressed Hunks of Data. MAME's disk image format, designed to efficiently store large hard drive and CD-ROM images with per-hunk compression and SHA1 verification. Managed by the `chdman` command-line tool.
* <a id="glossary-doxygen"></a>**Doxygen** - A documentation generator that reads specially formatted comments in C/C++ source code and produces browsable HTML or other API reference formats.
* <a id="glossary-genie"></a>**Genie** - A [Lua](#glossary-lua)-based build system generator, similar to CMake or Premake. MAME uses it to produce platform-specific Makefiles and IDE project files from a single set of Lua scripts kept in `scripts/`.
* <a id="glossary-glsl"></a>**GLSL** - OpenGL Shading Language. A C-like language for writing GPU shader programs targeting the OpenGL/Vulkan graphics pipeline.
* <a id="glossary-hlsl"></a>**HLSL** - High Level Shading Language. Microsoft's shader language for the DirectX/Direct3D graphics pipeline, used by MAME's legacy Windows renderer.
* <a id="glossary-jedec"></a>**JEDEC** - A semiconductor industry standard that defines, among other things, the binary format used to store the fuse-map contents of PLD/GAL chips. `jedutil` converts between JEDEC files and other internal representations.
* <a id="glossary-jit"></a>**JIT** - Just-In-Time compilation. A technique where emulated CPU instructions are translated and compiled into host machine code at runtime rather than interpreted one-by-one, giving a large speed boost. MAME uses [AsmJIT](#glossary-asmjit) for this.
* <a id="glossary-lua"></a>**Lua** - A lightweight, embeddable scripting language. MAME embeds a Lua interpreter to power its plugin system, the interactive console, and the [Genie](#glossary-genie) build system.
* <a id="glossary-ntsc"></a>**NTSC** - National Television System Committee. The analog television broadcast standard used in North America and Japan. MAME's CRT shaders can simulate NTSC signal artefacts such as colour bleeding and dot crawl for authentic display output.
* <a id="glossary-osd"></a>**OSD** - OS-Dependent layer. The abstraction layer in MAME (`src/osd/`) that isolates all platform-specific code, including windowing, audio output, and input handling, so the rest of the emulator is portable.
* <a id="glossary-rom"></a>**ROM** - Read-Only Memory. In the MAME context, a dump of the binary data stored on the chips inside an arcade PCB or console cartridge. MAME loads these dumps to run the original software.
* <a id="glossary-sdl"></a>**SDL** - Simple DirectMedia Layer. A cross-platform library providing a unified API for window creation, input, audio, and 2D rendering. MAME's non-Windows [OSD](#glossary-osd) backends are largely built on SDL.
* <a id="glossary-solenoid"></a>**Solenoid** - An electromechanical coil that produces a strong linear push when energised. In pinball machines they drive flippers, pop bumpers, slingshots, ball launchers, and the cabinet knocker. Because solenoid sounds come from physical mechanisms rather than audio circuitry, they cannot be reconstructed from circuit simulation, so MAME uses recorded WAV samples for them.
* <a id="glossary-sphinx"></a>**Sphinx** - A Python-based documentation build tool that converts reStructuredText (`.rst`) source files into HTML, PDF, and other formats. MAME's `docs/` site is built with Sphinx.
* <a id="glossary-xslt"></a>**XSLT** - Extensible Stylesheet Language Transformations. A language for transforming XML documents into other XML, HTML, or plain-text documents. MAME uses XSLT to render its XML layout files into HTML for the web interface.
* <a id="glossary-z80"></a>**Z80** - The Zilog Z80, an 8-bit CPU from 1976 that powered a huge number of arcade games and home computers. `src/zexall/` runs the Z80 Exerciser against MAME's Z80 core to verify correctness.

---
## Directories
The top-level directories in the MAME source tree are listed below, with a short summary of what each one contains.

Directory | Summary
---|---
[`3rdparty/`](#third-party-libraries-3rdparty) | Vendored third-party libraries (rendering, compression, scripting, testing, build system)
[`android-project/`](#android-build-project-android-project) | Gradle project for building MAME on Android
[`artwork/`](#display-effect-artwork-artwork) | CRT display effect textures for the BGFX renderer
[`attic/`](#archived-research-files-attic) | Retired source files kept as historical documentation and research references
[`benchmarks/`](#performance-benchmarks-benchmarks) | Standalone C++ micro-benchmarks for core components
[`bgfx/`](#bgfx-renderer-assets-bgfx) | Shader files and post-processing effect chain configs for the BGFX renderer
[`build/`](#build-output-build) | Compiler output directory (not tracked by git)
[`ctrlr/`](#controller-configurations-ctrlr) | XML input configs for third-party arcade control panels
[`docs/`](#documentation-website-docs) | Source files for the MAME documentation website
[`doxygen/`](#api-reference-generator-doxygen) | Config and templates for Doxygen API reference generation
[`hash/`](#software-lists-hash) | Software list XMLs describing ROMs for every emulated system
[`hlsl/`](#directx-hlsl-shaders-hlsl) | DirectX HLSL shaders for the legacy Windows renderer
[`ini/`](#configuration-presets-ini) | Example and preset INI configuration files
[`keymaps/`](#keyboard-layout-remaps-keymaps) | Key remapping files for non-QWERTY host keyboards
[`language/`](#ui-translations-language) | UI string translation files for all supported locales
[`plugins/`](#lua-plugin-system-plugins) | Lua plugins extending MAME at runtime
[`projects/`](#build-system-project-metadata-projects) | Sparse top-level project metadata for the build system
[`regtests/`](#regression-tests-regtests) | Regression tests for `chdman` and `jedutil`
[`roms/`](#rom-storage-roms) | Placeholder directory for development ROMs (not included in repo)
[`samples/`](#audio-samples-samples) | Audio samples for hardware that is difficult to emulate accurately
[`scripts/`](#build-system-scripts-scripts) | Genie/Lua build system scripts
[`src/`](#c-source-code-src) | All MAME C++ source code
[`tests/`](#unit-tests-tests) | Unit tests using Catch2
[`web/`](#web-server-interface-web) | Assets and front-end panels for MAME's built-in HTTP server

---
## Files
The most important top-level files are listed below, along with a short description of their role.

File | Summary
---|---
`makefile` | Primary build entry point; orchestrates the [Genie](#glossary-genie)-based build system
`dist.mak` | Makefile fragment for producing release archives and installers
`uismall.bdf` | [BDF](#glossary-bdf) bitmap font used by MAME's built-in UI renderer
`COPYING` | GNU General Public License v2
`README.md` | Project overview and quick-start build instructions
`CONTRIBUTING.md` | Brief contributor guidelines
`.editorconfig` | Editor indentation, line-ending, and charset settings
`.gitattributes` | Git line-ending normalisation and diff behaviour
`.gitignore` | Files and directories excluded from version control
`.travis.yml` | Legacy Travis CI configuration for automated build checks
`.github/` | GitHub issue and pull request templates

---
# Renderer

## Display Effect Artwork (artwork/)
CRT and display effect artwork assets used by the [BGFX](#glossary-bgfx) renderer. Contains PNG texture files for shadow masks, aperture grilles, and scanline overlays, plus a `bgfx/` subdirectory for additional [BGFX](#glossary-bgfx)-specific artwork.

---
## BGFX Renderer Assets (bgfx/)
Configuration and shader files for the [BGFX](#glossary-bgfx)-based renderer. Contains post-processing effect chains (`chains/`), [GLSL](#glossary-glsl)/[HLSL](#glossary-hlsl)/Metal shaders (`shaders/`), and screen effect presets (`effects/`).

---
## DirectX HLSL Shaders (hlsl/)
DirectX [HLSL](#glossary-hlsl) shader files for the Direct3D renderer (Windows). These are the equivalent of the [BGFX](#glossary-bgfx) shaders but for the legacy D3D pipeline. Includes effects for bloom, scanlines, phosphor, [NTSC](#glossary-ntsc) simulation, and more.

---
# Documentation

---
## Debugger automation
[Coco Town](https://www.youtube.com/watch?v=ySY8EN0sE6I) demonstrates automating MAME's CoCo debugger. The workflow shows how debugger scripting can support repeated reverse-engineering tasks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ySY8EN0sE6I" title="Automate the MAME CoCo Debugger | #SepTandy" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Documentation Website (docs/)
Source files for the MAME documentation website. Built with [Sphinx](#glossary-sphinx); contains reStructuredText source (`source/`), themes, and a `Makefile` to generate HTML output.

---
## API Reference Generator (doxygen/)
Configuration and templates for generating [Doxygen](#glossary-doxygen) API documentation from the C++ source. Includes `doxygen.config`, custom HTML header/footer, and a stylesheet.

---
# Games, Software and other Assets

## Software Lists (hash/)
XML databases that describe every known software item (cartridges, floppy disks, cassettes, CD-ROMs, etc.) for every system MAME emulates. Licensed under CC0-1.0 (public domain). Contains 759 XML files, 5 legacy `.hsi` files, and a README - totalling around **141,000 individual software entries**.

### Purpose
Software lists serve two roles:

* **ROM verification** - MAME checks loaded media against the CRC32 and SHA1 hashes recorded here to confirm the image is a known-good dump.
* **Documentation** - Each entry records the title, publisher, year, serial number, region compatibility, PCB type, and other metadata that would otherwise be lost.

### File Naming
Each file is named `<system>[_<mediatype>].xml`. Systems with only one primary media type (e.g. `nes.xml`, `snes.xml`, `gameboy.xml`) have no suffix. Systems that shipped software on multiple media get one file per type:

Suffix | Media type | Count
---|---|---
`_flop` | Floppy disk | 125
`_cart` | Cartridge | 101
`_cass` | Cassette tape | 86
`_rom` | ROM (chip/EPROM dump) | 26
`_hdd` | Hard disk image | 20
`_cdrom` / `_cd` | CD-ROM | 13
`_card` | Memory/flash card | 6
`_quik` | Quickload binary | 8
`_snap` | Snapshot | 5

For example, the Atari 800 has `a800.xml` (cartridges), `a800_flop.xml` (floppy disks), and `a800_cass.xml` (cassettes) as three separate lists.

### XML Structure
Each file has a `<softwarelist>` root element. Every software item is a `<software>` entry:

```xml
<softwarelist name="nes" description="Nintendo Entertainment System cartridges">
  <software name="mario" cloneof="marioeu">
    <description>Mario Bros. (Europe, rev. A)</description>
    <year>1986</year>
    <publisher>Nintendo</publisher>
    <info name="serial" value="NES-MA-EEC"/>
    <part name="cart" interface="nes_cart">
      <feature name="slot" value="nrom"/>
      <feature name="pcb" value="NES-NROM-128"/>
      <dataarea name="prg" size="32768">
        <rom name="pal-ma-0 prg" size="16384" crc="2aec46c2"
             sha1="f5d609720bc60bcb02f434d41149ae68e9f6b899" offset="0"/>
      </dataarea>
    </part>
  </software>
</softwarelist>
```

Key attributes and elements:

Element / Attribute | Purpose
---|---
`<software name>` | Short identifier used on the MAME command line
`cloneof` | Parent entry - used for regional variants, revisions, alternate dumps
`supported` | Absent = working; `"partial"` = known issues; `"no"` = does not run
`<info>` | Freeform metadata: serial number, release date, alt title, programmer, etc.
`<sharedfeat>` | Shared feature across all parts, e.g. `compatibility="PAL"`
`<notes>` | Free-text notes, often explaining why an entry is unsupported
`<part name interface>` | A loadable media slot; `interface` must match the slot the machine exposes
`<feature>` | Slot/PCB/mapper configuration (e.g. NES mapper type, mirroring mode)
`<dataarea>/<rom>` | The actual binary region: filename, size, CRC32, SHA1, load offset

### .hsi Files
Five files use an older `<hashfile>` format instead of `<softwarelist>`. These are simpler CRC32-keyed lookup tables with no part/dataarea structure, used for the Atari 5200 and a few other systems where only basic hash identification is needed:

```xml
<hashfile>
  <hash crc32="4019ecec" name="Astro Chase (Parker Brothers)">
    <year>1982</year>
    <manufacturer>Parker Brothers</manufacturer>
    <extrainfo>A13MIRRORING</extrainfo>
  </hash>
</hashfile>
```

### Scale
The 759 XML files collectively document software for systems ranging from 1970s mainframes and microcomputers through to 2000s consoles, covering arcade conversions, productivity software, games, operating system disks, diagnostic ROMs, and prototype releases. Many entries include multiple regional variants and revisions as `cloneof` children of a parent entry.

---
## Lua Plugin System (plugins/)
[Lua](#glossary-lua) plugins that extend MAME's functionality at runtime. All code is BSD-3-Clause licensed unless noted per file.

### How the plugin system works
When MAME starts, `boot.lua` is executed first. It reads the `pluginspath` option, sets up Lua's `package.path`, then iterates `manager.plugins` and calls `require(name)` followed by `plugin.startplugin()` for every plugin with `"start": "true"` in its manifest. Plugins that are off by default must be enabled in `plugin.ini` or via `-plugin <name>` on the command line.

### plugin.json Manifest
Every entry (plugin or library) declares itself with a JSON manifest validated against `plugin.schema`. The required fields are:

Field | Values | Purpose
---|---|---
`name` | alphanumeric + underscore | Identifier used by `require()` and the `-plugin` flag
`description` | string | Human-readable label
`version` | string | Semver string
`author` | string | Author name or email
`type` | `"plugin"` or `"library"` | Libraries are shared helpers, not started directly
`start` | `"true"` / `"false"` | Whether MAME auto-starts the plugin (plugins only)

`boot.lua` - The plugin system entry point. Sets up internationalisation helpers (`_()`, `N_()`), builds `package.path` from `pluginspath`, then loads and starts all enabled plugins.

---
### Plugins (type "plugin")
The built-in plugins are listed below, including whether they start automatically and who maintains them.

Plugin | Default on | Author | Purpose
---|---|---|---
`autofire` | no | Jack Li | Simulates held button presses at a configurable rate, mapped to any input
`cheat` | no | Carl | Loads and applies cheat codes from JSON, XML, or simple text files
`cheatfind` | no | Carl | Lua console library for scanning emulated memory to discover new cheat values
`console` | no | Carl | Interactive [Lua](#glossary-lua) REPL accessible while a game is running, with tab-completion and persistent history
`data` | **yes** | Carl | Aggregates data from external `.dat` files (history, mameinfo, marp scores, etc.) and surfaces them in the UI info panel
`discord` | no | Carl | Updates Discord Rich Presence with the currently running machine name and play time
`dummy` | no | Miodrag Milanovic | Minimal skeleton used as a reference when writing new plugins
`gdbstub` | no | Carl | Exposes emulated CPUs over a GDB remote serial protocol socket so a real GDB debugger can attach and step through emulated code
`hiscore` | no | borgar@borgar.net | Saves and restores high score RAM using `hiscore.dat` definitions, replicating the behaviour of older MAME builds (CC0 licensed)
`inputmacro` | no | Vas Crabb | Records and replays sequences of inputs, bound to a configurable trigger key
`layout` | **yes** | Carl | Runs per-machine [Lua](#glossary-lua) layout scripts embedded in `.lay` files, providing `reset` and `frame` callbacks for dynamic artwork
`offscreenreload` | no | Vas Crabb | Sends a configurable input sequence when the crosshair moves off-screen, for light-gun games that require an off-screen shot to reload
`portname` | no | Carl | Overrides the display names of I/O port fields using per-game JSON data files
`timecode` | no | Vas Crabb | Writes a timestamped log of emulated frame counts to a file, used for video capture synchronisation
`timer` | no | Vas Crabb | Tracks and displays cumulative play time for each machine across sessions
`vector` | no | Ryan Holtz | Demonstration plugin that hooks into the vector renderer's frame-begin/end and line-draw callbacks

---
### Libraries (type "library")
The shared plugin libraries are listed below.

Library | Author | Purpose
---|---|---
`commonui` | Vas Crabb | Shared UI helper functions used by multiple plugins
`json` | David Kolf | Pure-[Lua](#glossary-lua) JSON encoder/decoder (v2.5.0)
`xml` | Gavin Kistner | Pure-[Lua](#glossary-lua) SAX-style XML parser (SLAXML v0.8)

---
### data/ Plugin Internals
The `data` plugin is the most complex. It ships with sub-scripts for each data source:

Script | Data source
---|---
`data_history.lua` | `history.dat` - arcade game history
`data_mameinfo.lua` | `mameinfo.dat` - driver technical notes
`data_messinfo.lua` | `messinfo.dat` - console/computer driver notes
`data_sysinfo.lua` | `sysinfo.dat` - system information
`data_hiscore.lua` | `hiscore.dat` - high score records
`data_marp.lua` | MARP score data
`data_story.lua` | `story.dat` - game storylines
`data_command.lua` | `command.dat` - move lists for fighting games
`data_gameinit.lua` | `gameinit.dat` - game initialisation hints

Each sub-script exposes a `check(setname)` function that returns a heading if it supports that machine, and a `get()` function that returns the content. `database.lua` and `load_dat.lua` provide shared `.dat` file parsing utilities.

---
## ROM Storage (roms/)
The default location MAME looks for [ROM](#glossary-rom) sets and hard disk images at runtime. The directory ships with a single file:

`dir.txt` - a plain-text placeholder (`Place ROM directories here`) whose only purpose is to ensure the empty directory is tracked by git, since git does not version-track empty directories.

No actual ROM files are included in the repository - distributing them would violate copyright.

[Bytes N Bits](https://www.youtube.com/watch?v=p8EARNSOGI0) explains MAME ROM sets. The overview helps relate the files supplied to the emulator to its machine definitions and ROM-loading code.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p8EARNSOGI0" title="MAME ROMs Explained" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

### How MAME resolves ROMs
When you run a machine, MAME searches every directory listed in `rompath` (default: `roms`) for a match. It accepts two layouts inside each path:

* **ZIP archive** - `roms/<machinename>.zip` containing the individual ROM chip dump files.
* **Subdirectory** - `roms/<machinename>/` containing the same files unpacked.

[CHD](#glossary-chd) disk images (`.chd`) follow the same pattern but are typically stored in a subdirectory named after the machine: `roms/<machinename>/<diskname>.chd`.

### Configuring additional paths
The `rompath` option accepts multiple semicolon-separated directories, so you can keep ROMs spread across different locations without moving them:

```bash
mame <machine> -rompath /path/to/roms;/another/romset
```

The option also has the aliases `-rp`, `-biospath`, and `-bp` for historical compatibility. The default value (`roms`) is relative to the directory MAME is launched from, so the repo's `roms/` folder is used automatically when running a development build from the repo root.

### Parent/clone sets
Many arcade games share ROM chips with a parent set (e.g. regional variants or revisions). MAME searches `rompath` for both the clone's ZIP and the parent's ZIP, merging them as needed. You do not need to duplicate shared files.

---
## Audio Samples (samples/)
Real-world audio recordings used by MAME to reproduce mechanical sounds for hardware that is impractical to emulate synthetically. Licensed under CC0-1.0 (public domain - recorded by team members and contributors from real hardware).

Like `roms/`, this directory ships with a `dir.txt` placeholder (`Place samples directories here`) so git tracks the otherwise-empty directory. No additional sample sets are bundled beyond `floppy/`.

### Why samples exist
Some sounds - motor whirr, head seek clicks, mechanical latches - are produced by physical mechanisms rather than audio circuitry, making them impossible to reconstruct from the circuit simulation alone. Drivers that need them declare a list of required sample names; if the files are absent MAME mutes that sound channel silently rather than erroring out.

`floppy/` - The only sample set shipped in the repo. Contains 22 WAV files (44100 Hz, mono) recorded from two real drives:
* 3.5" samples - recorded from a **Sony MPF420-1** drive.
* 5.25" samples - recorded from a **Chinon FZ502** drive.

The files are split into three categories:

Category | Files | Description
---|---|---
Spin | `*_spin_start_empty/loaded`, `*_spin_empty/loaded`, `*_spin_end` | Motor spinning up (with/without disk), steady spin, and spin-down
Step | `*_step_1_1` | A single head step pulse
Seek | `*_seek_2ms`, `*_seek_6ms`, `*_seek_12ms`, `*_seek_20ms` | Composite seek sounds at four speeds (2 ms and 5.25"/3.5" `seek_2ms` are synthesised; all others are real recordings)

The prefix `35_` denotes 3.5" and `525_` denotes 5.25". Floppy sound is opt-in per driver - a driver must call `enable_sound(true)` on its `floppy_sound_device`; if the sample files are missing the device silently disables itself.

### Configuring additional paths
Like `rompath`, the `samplepath` option (alias `-sp`) accepts semicolon-separated directories and defaults to `samples` relative to the MAME launch directory:

```bash
mame <machine> -samplepath /path/to/samples;/another/samples
```

Additional community sample packs (covering gun sounds, pinball [solenoids](#glossary-solenoid), coin mechs, etc.) can be dropped into any directory on this path and MAME will find them automatically.

---
# Main C++ Source Code (src/)
All MAME C++ source code, split across eight subdirectories.

---
## src/emu/
The core emulation engine - the lowest-level layer that everything else builds on. Key areas:

### Device System
`device.cpp/h` defines the base class for every piece of emulated hardware. All chips, boards, and peripherals inherit from it. The `di*.cpp/h` files are *device interfaces* - optional capability mixins a device can inherit to declare what it can do:

Interface | Purpose
---|---
`diexec` | CPU execution and scheduling
`dimemory` | Memory map declaration
`disound` | Audio output
`divideo` | Video output
`diimage` | Media image attachment (floppy, cartridge, etc.)
`dirtc` | Real-time clock
`diserial` | Serial I/O
`dinvram` | Non-volatile RAM persistence
`distate` | CPU register state (for debugger)
`didisasm` | Disassembly (for debugger)

### Memory Subsystem
`emumem*.cpp/h` - A heavily templated system for mapping address spaces. Split across many files for read/write handlers at 8/16/32/64-bit widths. Supports mirroring, banking, RAM/ROM overlays, and per-access-width handlers.

### Scheduler
`schedule.cpp` - Co-operative timeslicing of all CPU cores and timed devices. Every device schedules callbacks at precise `attotime` timestamps (attosecond resolution).

### Rendering
`render.cpp`, `rendlay.cpp` - The display composition engine. `rendlay.cpp` parses `.LAY` artwork layout XML files and composites game screens, bezels, and overlays into a final output image.

### Input
`ioport.cpp`, `input.cpp`, `inputdev.cpp` - The I/O port system maps physical inputs (keyboard, joystick, mouse) through configurable bindings to emulated inputs (DIP switches, coin slots, joystick directions, buttons).

### Audio
`sound.cpp`, `speaker.cpp` - Mixes all sound streams from all active sound devices into the final output buffer. `speaker.cpp` defines the speaker device that anchors streams to screen positions.

### Save States
`save.cpp` - Serialises the complete machine state to a file by registering every stateful variable at startup.

### ROM Loading
`romload.cpp` - Finds, loads, CRC-verifies, and maps ROM regions from the `rompath` into the address space.

### Graphics
`tilemap.cpp`, `drawgfx.cpp` - Generic tile-map engine and sprite/tile pixel-drawing primitives used by hundreds of drivers.

### Subdirectories
The main subdirectories under `src/emu/` are listed below.
* `debug/` - The integrated debugger: CPU stepping, breakpoints (`dvbpoints`), watchpoints (`dvwpoints`), expression evaluator (`express`), memory viewer (`dvmemory`), disassembly viewer (`dvdisasm`), register viewer (`dvstate`).
* `ui/` - The in-game overlay UI (the interface you reach by pressing Tab): main menu, game selection, input mapping, options screens, audio effects, file manager, cheat options, system info, and more (~80 source files).
* `video/` - Video support utilities: `generic.cpp` for common video patterns, `resnet.cpp` for resistor-network colour decoding, `rgbutil.cpp` for fast SIMD colour math.
* `audio_effects/` - DSP audio effects pipeline: compressor, EQ, filters, reverb.
* `layout/` - Built-in `.lay` artwork layout files compiled directly into the binary.
* `drivers/` - Stub that `#include`s the full driver list.

---
## src/devices/
Every piece of emulated hardware, each in its own file. Split into six subdirectories:

### cpu/ (211 CPU families)
Every CPU core MAME emulates, one subdirectory per architecture. Includes: `z80`, `m68000`, `arm`/`arm7`, `mips`, `x86`, `6502`, `avr8`, `powerpc`, `sparc`, `sh`, `v60`, `tms9900`, `pdp1`, and over 200 more. Each core implements the `diexec` and `distate` interfaces and optionally `didisasm`.

### sound/ (371 chips)
Individual sound chip implementations: `ay8910`, `ym2151`, `ym2612`, `pokey`, `sn76496`, `okim6242`, `c140`, `qsound`, `aica`, and hundreds more - covering every era from 1970s beeper chips to 1990s wavetable synthesisers.

### machine/ (~1,120 files)
Support logic chips: timers (`6522via`, `8253pit`), UARTs (`ins8250`, `z80scc`), FDC controllers (`wd1770`, `upd765`), DMA (`am9517a`), interrupt controllers, memory mappers, custom ASICs, and miscellaneous glue logic.

### video/ (330 files)
Dedicated video chips: PPUs, VDPs, sprite generators, palette chips, and line buffers. Examples: `315_5124` (Sega Master System VDP), `ppu2c0x` (NES PPU), `tms9928a`, `mc6845` (CRTC), `k052109` (Konami tile layer).

### bus/ (184 expansion bus families)
Cartridge slots, expansion port connectors, and I/O buses. Each subdirectory models a specific bus standard and the cards/cartridges that plug into it: `a2bus` (Apple II), `nes` (NES cartridge), `megadrive`, `snes`, `amiga`, `isa`, `pci`, and many more.

### imagedev/
Media image devices: `floppy` (with the floppy sound system), `cassette`, `cartrom`, `harddriv`, `cdromimg`, `magtape`, `memcard`, `midiin`/`midiout`, `printer`, `snapquik` (snapshot/quickload), `picture`, and others.

---
## src/frontend/mame/
The MAME-specific application shell that sits on top of the engine. It owns the command-line interface, the Lua scripting engine, and the full game-selection UI.

### Core Files
The main frontend files are listed below.
* `mame.cpp/h` - The top-level `mame_machine_manager` object; application entry point.
* `clifront.cpp` - Processes all command-line operations: `-listxml`, `-verifyroms`, `-romident`, `-createconfig`, etc.
* `mameopts.cpp` - Registers all MAME-specific command-line options on top of the base engine options.
* `audit.cpp` - ROM set auditing: scans `rompath` and reports missing, wrong-size, or bad-CRC files.
* `cheat.cpp` - The runtime cheat engine (separate from the `cheat` Lua plugin).
* `infoxml.cpp` - Generates the full `-listxml` machine database output.
* `media_ident.cpp` - Identifies unknown ROM files by CRC/SHA1 against the driver database.

### Lua Engine
`luaengine*.cpp` - Embeds a Lua interpreter and exposes MAME internals as a Lua API, split across five files:
* `luaengine.cpp` - Core setup, plugin loading, `emu.*` table.
* `luaengine_debug.cpp` - Debugger bindings (breakpoints, watchpoints, expression evaluation).
* `luaengine_input.cpp` - Input port and device bindings.
* `luaengine_mem.cpp` - Memory space read/write bindings.
* `luaengine_render.cpp` - Render target and screen bindings.

### ui/ (~80 source files)
The complete in-game UI: game/software selection browser (`selgame`, `selsoft`), main menu, input mapping, audio effects UI, options menus, file manager, floppy/tape/cartridge controls, state save/load, cheat options, plugin options, system info, barcode reader, and more.

---
## Internal utility libraries (src/lib/)
Internal utility libraries used across the rest of the codebase.

### Foundational utilities  (src/lib/util/)
Foundational utilities with no dependency on the emulation engine. Includes: CHD read/write (`chd.cpp`), AVI I/O (`aviio.cpp`), PNG (`png.cpp`), FLAC (`flac.cpp`), XML parser (`xmlfile.cpp`), ZIP/7z decompression (`unzip.cpp`, `un7z.cpp`), Unicode handling (`unicode.cpp`), SHA1/MD5/CRC hashing (`hashing.cpp`, `hash.cpp`), palette management (`palette.cpp`), options parser (`options.cpp`), HTTP/WebSocket client and server (via asio headers), PLA/JEDEC file parsing (`plaparse.cpp`, `jedparse.cpp`), and many more.

### Disk Image Format Parsers (src/lib/formats/) - 445 files
Parsers and writers for disk and tape media image formats. Each file handles a specific format used by `imagedev/floppy` and `imagedev/cassette` to translate image files into the internal track/sector model.

#### Infrastructure
Shared base code used by multiple format implementations - not formats themselves.

File | Purpose
---|---
`all` | Registers all compiled-in formats
`basicdsk` | Base implementation for simple sector-mapped disk formats
`cassimg` | Cassette image abstraction (sample-level)
`flopimg` | Floppy image abstraction (new implementation)
`flopimg_legacy` | Floppy image abstraction (legacy implementation)
`fsblk` | Filesystem operations on mounted image blocks
`fsblk_vec` | Block device backed by a `vector<u8>`
`fsmeta` | Filesystem metadata management
`fsmgr` | Filesystem management for floppy and HD images
`imageutl` | Shared image utility functions
`mfm_hd` | MFM hard disk base implementation
`rpk` | ROM pack (cartridge packaging) format

#### Filesystem Implementations
The table below lists the filesystem backends used by the format layer.

File | Filesystem
---|---
`fs_cbmdos` | Commodore DOS (1541, 1571, 1581, etc.)
`fs_coco_os9` | CoCo OS-9
`fs_coco_rsdos` | CoCo RS-DOS (Color Computer "Disk BASIC")
`fs_fat` | FAT12/FAT16
`fs_hp98x5` | HP 9845
`fs_hplif` | HP LIF (Logical Interchange Format)
`fs_isis` | Intel ISIS-II
`fs_oric_jasmin` | Oric Jasmin
`fs_prodos` | Apple ProDOS
`fs_unformatted` | Unformatted disk
`fs_vtech` | VTech

#### Audio File Formats
The table below lists the audio-backed image formats handled here.

File | Format
---|---
`aiffile` | Apple AIFF - cassette images in Apple's audio format
`flacfile` | FLAC audio
`wavfile` | WAV audio

#### Generic / Cross-Platform Disk Containers
The table below lists container formats that can hold media from many different systems.

File | Format | Notes
---|---|---
`cqm_dsk` | CopyQM | DOS-era mass duplication tool image format
`dfi_dsk` | DiscFerret Flux Image | Raw flux-level capture format
`dmk_dsk` | DMK | David M. Keil's TRS-80 Model 4 format; supports copy-protection
`dsk_dsk` | DSK | Generic .DSK container used by many emulators
`fdi_dsk` | FDI v2.0 | Formatted Disk Image; supports non-standard sectors
`g64_dsk` | G64 | Commodore GCR bitstream format for C1541/C1571
`hxchfe_dsk` | HFE | HxC Floppy Emulator hardware format
`hxcmfm_dsk` | HxC MFM | HxC MFM variant
`imd_dsk` | IMD | ImageDisk by Dave Dunfield; widely used for CP/M disks
`ipf_dsk` | IPF | SPS/Software Preservation Society; preserves copy-protection
`mfi_dsk` | MFI | MAME's own floppy image format
`pasti_dsk` | Pasti | Atari ST format preserving copy-protection flux
`td0_dsk` | TD0 | TeleDisk; includes data-compression and sector metadata
`upd765_dsk` | uPD765 | Raw sector format matching NEC uPD765 FDC register layout

#### Apple Family
The table below lists the Apple-family image formats.

File | System | Media
---|---|---
`ap2_dsk` | Apple II | Disk images (DOS 3.3, ProDOS)
`ap_dsk35` | Apple / Mac | 3.5" GCR disk images
`as_dsk` | Apple II | Applesauce flux-decoded output

#### Atari Family
The table below lists the Atari-family image formats.

File | System | Media
---|---|---
`a26_cas` | Atari 2600 | SuperCharger cassette images
`atari_dsk` | Atari 8-bit | Disk images (ATR)
`st_dsk` | Atari ST | Standard ST/MSA disk images
`pasti_dsk` | Atari ST | Copy-protected disk images

#### Commodore Family
The table below lists the Commodore-family image formats.

File | System | Media
---|---|---
`c3040_dsk` | CBM 2040/3040 | Sector disk images
`c4040_dsk` | CBM 4040 | Sector disk images
`c8280_dsk` | CBM 8280 | 8" disk images
`cbm_crt` | C64 | Cartridge .CRT images
`cbm_tap` | C16 / C64 / VIC-20 | TAP cassette images
`d64_dsk` | C1541 / C1551 | D64 sector disk images
`d71_dsk` | C1571 | D71 sector disk images
`d80_dsk` | CBM 8050 | D80 sector disk images
`d81_dsk` | C1581 | D81 disk images
`d82_dsk` | CBM 8250 / SFD-1001 | D82 sector disk images
`g64_dsk` | C1541 / C1571 | G64 GCR bitstream images

#### Acorn / BBC Micro Family
The table below lists the Acorn and BBC Micro image formats.

File | System | Media
---|---|---
`acorn_dsk` | BBC Micro / Electron / Archimedes | Disk images
`afs_dsk` | Acorn FileStore | Disk images
`apd_dsk` | Archimedes | APD protected disk images
`atom_dsk` | Acorn Atom | Disk images
`atom_tap` | Acorn Atom | Cassette (Kansas City Standard)
`fsd_dsk` | BBC Micro | FSD format disk images
`uef_cas` | BBC Micro / Electron / Atom | UEF cassette images; also covers CUTS/Kansas City standard systems

#### Sinclair / ZX Spectrum Family
The table below lists the Sinclair and ZX Spectrum image formats.

File | System | Media
---|---|---
`opd_dsk` | ZX Spectrum | Opus Discovery disk images
`ql_dsk` | Sinclair QL | QL disk images
`sdd_dsk` | ZX Spectrum | Speccy-DOS SDD disk images
`trd_dsk` | ZX Spectrum | TR-DOS TRD disk images
`tzx_cas` | ZX Spectrum / others | TZX cassette images; also used for MSX and others
`zx81_p` | ZX81 | ZX81 cassette .P files

#### TRS-80 / CoCo / Dragon Family
The table below lists the TRS-80, CoCo, and Dragon image formats.

File | System | Media
---|---|---
`coco_cas` | TRS-80 CoCo | CAS cassette images
`coco_rawdsk` | TRS-80 CoCo | Raw disk images
`jvc_dsk` | TRS-80 CoCo / Dragon | JVC disk images
`trs80_dsk` | TRS-80 | JV1/JV3 disk images
`trs_cas` | TRS-80 | Cassette images
`vdk_dsk` | Dragon / CoCo | VDK disk images

#### Japanese Computers
The table below lists the Japanese computer image formats.

File | System | Media
---|---|---
`2d_dsk` | Sharp MZ / X1 | Sharp 2D disk format
`d88_dsk` | NEC PC-88 / PC-98 | D77/D88 disk images
`dcp_dsk` | NEC PC-98 | DCP/DCU disk images
`dim_dsk` | NEC PC-98 | DIM disk images
`dip_dsk` | NEC PC-98 | DIP disk images
`fm7_cas` | Fujitsu FM-7 | Cassette images
`fmsx_cas` | MSX | Cassette images (via TZX)
`fmtowns_dsk` | Fujitsu FM Towns | Disk images
`msx_dsk` | MSX | Disk images
`mz_cas` | Sharp MZ series | Cassette images
`nfd_dsk` | NEC PC-98 | NFD disk images
`p6001_cas` | NEC PC-6001 | Cassette images
`pc98_dsk` | NEC PC-98 | Generic disk images
`pc98fdi_dsk` | NEC PC-98 | FDI disk images
`sc3000_bit` | Sega SC-3000 | .BIT cassette images
`sf7000_dsk` | Sega SF-7000 | Disk images
`x1_tap` | Sharp X1 | TAP cassette images
`xdf_dsk` | Sharp X68000 | Bare-bones disk images

#### Soviet / Eastern European Computers
The table below lists the Soviet and Eastern European computer image formats.

File | System | Media
---|---|---
`agat840k_hle_dsk` | Agat (Soviet Apple II clone) | 840KB floppy - sector-level images
`bk0010_dsk` | BK-0010 / DVK / UKNC (Soviet PDP-11) | Disk images
`ds9_dsk` | Agat-9 | 840KB controller disk images
`dvk_mx_dsk` | DVK MX controller | Disk images
`idpart_dsk` | Iskra Delta Partner | Disk images
`iq151_dsk` | IQ-151 (Czechoslovak) | Disk images
`juku_dsk` | Juku E5101/E5104 (Estonian) | Disk images
`lviv_lvt` | Lviv PC-01 (Ukrainian) | LVT tape images
`ms0515_dsk` | MS-0515 (Soviet) | Disk images
`pk8020_dsk` | PK-8020 Korvet (Soviet) | Disk images
`pyldin_dsk` | Pyldin-601 (Soviet) | Disk images
`rk_cas` | RK format (Soviet PDP-11) | Tape images
`smx_dsk` | Specialist MX (Soviet) | Disk images
`tim011_dsk` | TIM-011 (Yugoslav) | Disk images
`vector06_dsk` | Vector-06C (Soviet) | Disk images

#### DEC and HP Systems
The table below lists the DEC and HP image formats.

File | System | Media
---|---|---
`h17disk` | Heathkit H17 | Hard-sectored 5.25" disk images
`h8_cas` | Heathkit H8/H88 | H8T cassette images
`hp300_dsk` | HP 300 series | Disk images
`hp_ipc_dsk` | HP IPC | Disk images
`hpi_dsk` | HP | Disk images
`hti_tape` | HP | Tape images
`ibmxdf_dsk` | IBM PC | XDF Extended Density Format
`rx01_dsk` | DEC RX01 | 8" disk images
`rx50_dsk` | DEC Rainbow 100/190 | RX50 disk images

#### Luxor ABC (Swedish)
The table below lists the Luxor ABC image formats.

File | System | Media
---|---|---
`abc1600_dsk` | Luxor ABC 1600 | Disk images
`abc800_dsk` | Luxor ABC 830/832/834/838 | Disk images
`abc800i_dsk` | Luxor ABC 830 | Interleaved disk images
`abcfd2_dsk` | Scandia Metric ABC FD2 | Disk images

#### Thomson (French)
The table below lists the Thomson image formats.

File | System | Media
---|---|---
`sap_dsk` | Thomson TO/MO series | SAP disk images
`thom_cas` | Thomson 8-bit | Cassette images
`thom_dsk` | Thomson 8-bit | Disk images

#### Oric
The table below lists the Oric image formats.

File | System | Media
---|---|---
`oric_dsk` | Oric-1 / Atmos | Disk images
`oric_tap` | Oric-1 / Atmos | Tape images

#### Ensoniq / Music Synthesizers
The table below lists the Ensoniq and other synthesizer image formats.

File | System | Media
---|---|---
`esq16_dsk` | Ensoniq ESQ-M, VFX-SD, SD-1, EPS-16+ | 16-bit synthesizer disk images
`esq8_dsk` | Ensoniq ESQ-1, SQ-80 | 8-bit synthesizer disk images
`ppg_dsk` | PPG Waveterm | Waveterm disk images

#### Other Home Computers
The table below lists the remaining home-computer image formats.

File | System | Media
---|---|---
`a5105_dsk` | A5105 (East German KC compact) | Disk images
`ace_tap` | Jupiter Ace | TAP cassette images
`adam_cas` | Coleco Adam | Cassette images
`adam_dsk` | Coleco Adam | Disk images
`aim_dsk` | AIM-65 | Disk images
`ami_dsk` | Amiga | Disk images (ADF)
`apf_apt` | APF Imagination Machine | Cassette images
`apollo_dsk` | Apollo (Helios) | Disk images
`applix_dsk` | Applix 1616 | Disk images
`apricotpc_dsk` | ACT Apricot PC | Disk images
`apridisk` | ACT Apricot | APD disk images
`aquarius_caq` | Mattel Aquarius | CAQ cassette images
`as_dsk` | Applesauce | Solved output formats
`asst128_dsk` | ASST-128 | Disk images
`bw12_dsk` | Bondwell 12/14 | Disk images
`bw2_dsk` | Bondwell 2 | Disk images
`camplynx_cas` | Camputers Lynx | Cassette images
`camplynx_dsk` | Camputers Lynx | Disk images
`ccvf_dsk` | Compucolor II | Virtual Floppy Disk images
`cgen_cas` | EACA Colour Genie | Cassette images
`cgenie_dsk` | EACA Colour Genie | Disk images
`comx35_dsk` | COMX-35 | Disk images
`concept_dsk` | Corvus Concept | Disk images
`coupedsk` | SAM Coupé | Disk images
`cp68_dsk` | CP68 | Disk images
`cpis_dsk` | Telenova Compis | Disk images
`csw_cas` | Various | CSW (Compressed Square Wave) cassette images
`dmv_dsk` | NCR Decision Mate V | Disk images
`ep64_dsk` | Enterprise 64/128 | Disk images
`excali64_dsk` | Excalibur 64 | Disk images
`fc100_cas` | FC-100 | Cassette images
`fdd_dsk` | Various | FDD sector images
`fdos_dsk` | FDOS | Disk images
`fl1_dsk` | FloppyOne DOS | Disk images
`flex_dsk` | FLEX (TSC / 6800) | Disk images
`fz1_dsk` | FZ-1 | Disk images
`gtp_cas` | Galaksija (Yugoslav) | GTP cassette images
`guab_dsk` | GUAB | Disk images
`hect_dsk` | Hector (Micronique) | Disk images
`hect_tap` | Hector (Micronique) | K7/FOR cassette images
`hector_minidisc` | Hector Minidisc | Minidisc images
`img_dsk` | IBM PC / various | Raw sector .IMG images
`itt3030_dsk` | ITT 3030 | Disk images
`jfd_dsk` | JASPP | JASPP Floppy Disk images
`kc_cas` | KC85 | Cassette images
`kc85_dsk` | KC85 | Disk images
`kim1_cas` | MOS KIM-1 | Cassette images
`lw30_dsk` | Brother LW-30 | Disk images
`m20_dsk` | Olivetti M20 | Disk images
`m5_dsk` | Sord M5 | Disk images
`mbee_cas` | Microbee | Cassette images
`mdos_dsk` | Motorola MDOS | Disk images (IBM 3740 compatible)
`mm_dsk` | MM | Disk images
`mtx_dsk` | Memotech MTX | Disk images
`nabupc_dsk` | NABU PC | Disk images
`nanos_dsk` | NANOS | Disk images
`nascom_dsk` | Nascom 1/2/3 | Disk images
`naslite_dsk` | NASLite | Disk images
`nes_dsk` | NES / Famicom Disk System | FDS disk images
`orao_cas` | Orao (Yugoslav) | TAP cassette images
`p2000t_cas` | Philips P2000T | Cassette images
`pc_dsk` | IBM PC | Generic PC disk images
`phc25_cas` | Sanyo PHC-25 | Cassette images
`poly_dsk` | Poly CP/M | Disk images
`primoptp` | Microkey Primo (Hungarian) | PTP tape images
`rc759_dsk` | Regnecentralen RC759 Piccoline | Disk images
`roland_dsk` | Roland samplers | Disk images
`sdf_dsk` | SAM Coupé | SDF disk images
`smx_dsk` | Specialist MX | Disk images
`sol_cas` | SOL-20 | Cassette images
`sorc_cas` | Exidy Sorcerer | Cassette images
`sorc_dsk` | Exidy Sorcerer | Disk images
`sord_cas` | Sord M5 | Cassette images
`spc1000_cas` | Samsung SPC-1000 | Cassette images
`svi_cas` | Spectravideo SVI-318/328 | Cassette images
`svi_dsk` | Spectravideo SVI-318/328 | Disk images
`swd_dsk` | Swift Disc | Disk images
`tandy2k_dsk` | Tandy 2000 | Disk images
`tibdd001_dsk` | TIB Disc Drive DD-001 | Disk images
`tiki100_dsk` | TIKI 100 | Disk images
`tvc_cas` | Videoton TVC | Cassette images
`tvc_dsk` | Videoton TVC | Disk images
`uniflex_dsk` | UniFLEX | Disk images (512-byte sectors)
`victor9k_dsk` | Victor 9000 | Disk images
`vg5k_cas` | VG-5000 | .K7 cassette images
`vgi_dsk` | Micropolis | VGI hard-sectored disk images
`vt_cas` | VTech | Cassette images
`vt_dsk` | VTech | Disk images
`wren_dsk` | Wren Executive | Disk images
`x07_cas` | Canon X-07 | Cassette images

### Analog Circuit Simulator (src/lib/netlist/)
A full analog circuit simulator. Parses netlist descriptions of discrete circuits (resistors, capacitors, transistors, logic gates) and solves them in real time using numerical integration. Used to accurately emulate the discrete audio circuits found in early arcade games (e.g. Pong, Gun Fight) rather than substituting recorded samples.

---
## OSD - OS-Dependent layer (src/osd/)
The [OSD](#glossary-osd) layer contains all platform-specific code. The rest of MAME calls abstract interfaces defined here; the platform backends implement them.

### interface/
Abstract C++ interfaces (`inputman.h`, `audio.h`, `midiport.h`, `uievents.h`, etc.) that each platform backend must implement.

### modules/
Platform-agnostic module implementations shared across backends, covering: debugger integration, file I/O, font rendering, input handling, MIDI, network devices, OpenGL, audio output, render pipeline, and window management.

### Platform Backends
The platform backends are listed below.

Directory | Platform | Notes
---|---|---
`sdl/` | Linux + macOS fallback | SDL2-based window, input, audio
`sdl3/` | Cross-platform | SDL3 backend
`windows/` | Windows | Win32-native window (`winmain.cpp`), DirectInput, DirectSound, Direct3D
`mac/` | macOS | AppKit/Metal window (`mamefswindow.mm`), OpenGL view (`oglview.mm`), native event loop

---
## src/tools/
Standalone command-line utilities that use MAME's internal libraries but are built as separate binaries.

Tool | Purpose
---|---
`chdman.cpp` | Create, verify, convert, and inspect [CHD](#glossary-chd) disk images
`floptool.cpp` | Convert and inspect floppy disk images between formats
`castool.cpp` | Convert and inspect cassette tape images
`jedutil.cpp` | Convert between [JEDEC](#glossary-jedec) PLD fuse-map files and internal representations
`romcmp.cpp` | Compare two ROM sets and report differences
`unidasm.cpp` | Universal disassembler - disassemble binary files using any of MAME's CPU cores
`ldresample.cpp` | Resample raw LaserDisc audio captures
`ldverify.cpp` | Verify LaserDisc image integrity
`pngcmp.cpp` | Compare two PNG files for regression testing
`regrep.cpp` | Generate HTML regression test reports
`srcclean.cpp` | Normalise source file whitespace and line endings
`imgtool/` | Create and manage filesystem images (Commodore, Apple II, etc.)

---
## src/mame/
Driver source code, organised into 359 manufacturer subdirectories. Each subdirectory contains the `.cpp` and `.h` files that define the machine configurations, memory maps, I/O port bindings, and video/audio wiring for every system that manufacturer made. Examples: `apple/`, `atari/`, `capcom/`, `nintendo/`, `sega/`, `snk/`, `taito/`, `konami/`.

Each driver calls `GAME(...)` or `CONS(...)` or `COMP(...)` macros to register itself in the global driver list, declaring the machine name, parent, year, manufacturer, and the function that builds its `machine_config`.

---
## ZEXALL - Z80 instruction set exerciser (src/zexall/)
A minimal self-contained MAME build target whose only purpose is to run **ZEXALL** - the Z80 instruction set exerciser originally written by Frank D. Cringle in 1994, adapted for MAME's Z80 core by Kevin Horton. It is the definitive regression test for MAME's [Z80](#glossary-z80) CPU implementation.

### Files
The ZEXALL target is split across the files below.

File | Description
---|---
`zexall.z80` | The original ZEXALL test program in [Z80](#glossary-z80) assembly (GPL-2.0). The actual test logic and expected CRC values.
`zexall.h` | The assembled binary of `zexall.z80` baked into a C++ header as a `uint8_t` array (`zexall_binary[0x2189]`).
`interface.h` | A small hand-written [Z80](#glossary-z80) machine-code stub (`interface_binary[0x51]`) that bridges CP/M-style BDOS calls to MAME's memory-mapped I/O output ports. Written directly in hex - no assembly source exists.
`zexall.cpp` | The MAME driver. Instantiates a Z80 at 3.579 MHz, maps 64 KB of RAM, loads the interface stub at `0x0000` and the ZEXALL binary at `0x0100`, and monitors three memory-mapped I/O ports for output.
`main.cpp` | The standalone entry point. Constructs a stripped-down `machine_manager` with video and sound disabled, throttle off, and runs the single `zexall` machine to completion.

### How It Works
Each test group exercises one instruction or a family of related instructions by systematically cycling through a large set of machine states. For each state:
* **Registers** - The registers (IY, IX, HL, DE, BC, AF, SP) and a 2-byte memory operand are set to specific values.
* **Instruction** - The instruction under test executes.
* **CRC update** - The resulting machine state is fed into a running 32-bit CRC.

At the end of a test group the computed CRC is compared against an **expected value measured empirically on real Z80 hardware**. A mismatch means MAME's Z80 core produces different results to the silicon.

The test space is controlled by two vectors per instruction:
* **Increment vector** - bits set here are cycled as a binary counter (e.g. if the accumulator byte is `0xFF`, all 256 accumulator values are tested).
* **Shift vector** - bits set here are inverted one at a time across separate test runs.

The total test case count is the product of `2^(increment bits) × (shift bits)`. Some groups run millions of combinations; others only dozens.

#### The output mechanism
The original ZEXALL was designed for CP/M, which uses BDOS calls (`CALL 5`) to print strings. Kevin Horton's interface stub intercepts these calls and redirects them to three memory-mapped ports at the top of the 64 KB address space:

Address | Port | Purpose
---|---|---
`0xFFFF` | `output_data` | The character to output
`0xFFFE` | `output_req` | Incremented to signal a new character is ready
`0xFFFC` | `output_ack` | Incremented by the host to acknowledge receipt

`zexall.cpp` polls these ports each emulated cycle and prints each received character to the console via `osd_printf_info`. The driver watches for the string `"Tests complete"` and calls `machine().schedule_exit()` to terminate cleanly.

### Running It
Because `main.cpp` builds a standalone MAME binary containing only the `zexall` driver (no other machines, no UI), it runs as:

```bash
./zexall
```

Output is printed directly to the terminal. A passing run ends with `Tests complete`. Any line containing `ERROR` indicates a CRC mismatch on a specific instruction group - meaning MAME's Z80 core produced a different flag or register result than real hardware.

### Why It Matters
The [Z80](#glossary-z80) has many edge cases - undefined flag behaviour, the `R` register increments, block instruction flag interactions, undocumented `IXH`/`IXL` half-registers - that are easy to get subtly wrong. ZEXALL catches all of these by running on real silicon first and recording the expected CRCs. Any Z80 core change that alters observed behaviour will cause a ZEXALL failure, making it an unambiguous correctness gate.

# Testing and Performance

### Unit Tests (tests/)
Unit tests for the emulation core and libraries, using the [Catch2](#glossary-catch2) framework. Mirrors the `src/emu/` and `src/lib/` structure.

---
### Regression Tests (regtests/)
Regression test suite. Contains test definitions for `chdman` ([CHD](#glossary-chd) file tool) and `jedutil` ([JEDEC](#glossary-jedec) file tool), along with a `regtests.mak` makefile to run them.

---
### Performance Benchmarks (benchmarks/)
Micro-benchmarks for testing performance of core MAME components. Contains standalone C++ benchmark programs.

---
# Configuration


## Controller Configurations (ctrlr/)
Controller configuration files (`.cfg`) that remap MAME's input system for specific third-party arcade control panels. Loaded at runtime with the `-ctrlr <name>` flag (omit the `.cfg` extension).

### Files Included
The controller configuration files shipped with the repo are listed below.

File | Hardware
---|---
`hotrod.cfg` | Hanaho HotRod arcade panel
`hotrodse.cfg` | Hanaho HotRod SE arcade panel
`scorpionxg.cfg` | Digital Systems Design Scorpion XG-2
`slikstik.cfg` | SlikStik arcade cabinet
`xarcade.cfg` | Xgaming X-Arcade dual-joystick panel

### File format
Each file is XML with a `<mameconfig version="10">` root element containing one or more `<system>` blocks:

* `<system name="default">` - applies to every machine.
* `<system name="neogeo">` (or any other driver name) - overrides the default for that specific machine only. `xarcade.cfg` and `slikstik.cfg` both use this to remap buttons to match the Neo Geo's A/B/C/D layout, and `slikstik.cfg` additionally has per-game overrides for `asteroid`, `missile`, and `tempest`.

Inside each `<system>` block there are two types of entry:

### Low-level scancode remaps
Redirect one raw key to another before any port binding is evaluated:
```xml
<remap origcode="KEYCODE_UP" newcode="KEYCODE_8PAD" />
```
All five panels use this to route the arrow keys through the numpad (which is how their joysticks report to the OS).

### Port bindings
Assign one or more inputs to a named MAME input port:
```xml
<port type="P1_BUTTON1">
    <newseq type="standard">KEYCODE_LCONTROL OR JOYCODE_1_BUTTON1 OR MOUSECODE_1_BUTTON1</newseq>
</port>
```

Input sequence syntax:
* `OR` - any of the listed inputs triggers the action.
* **Space-separated codes** - a chord; all must be held simultaneously (used for menu combos like coin+start).
* `NONE` - explicitly disables an input that would otherwise be inherited.

Input source prefixes: `KEYCODE_*` (keyboard), `JOYCODE_<player>_*` (joystick/gamepad), `MOUSECODE_<player>_*` (mouse buttons).

### Usage
To load one of these controller profiles, pass its base name to the `-ctrlr` flag:
```bash
mame <machine> -ctrlr xarcade
```
---
## Configuration Presets (ini/)
Ready-to-use INI snippet files for MAME's Direct3D post-processing pipeline. All files use the standard MAME INI format: one `key value` pair per line, `#` for comments. They are not loaded automatically - you copy the settings you want into your own `mame.ini` or a per-machine INI file.

The directory is split into two subdirectories by purpose `presets` and `examples`.

### presets/
Complete post-processing configurations for a specific display technology. Drop the contents of one of these into your INI to get an appropriate visual style for a whole category of hardware.

File | Target hardware | What it configures
---|---|---
`raster.ini` | CRT raster displays (most arcade games, consoles) | Shadow mask, scanlines, bloom, phosphor persistence, colour matrix, BT.601 525-line chroma
`vector.ini` | Vector displays (Asteroids, Tempest, etc.) | Beam width/intensity/flicker, phosphor persistence, bloom with a bright-centre falloff, no scanlines
`vector-mono.ini` | Monochrome vector displays | Same as vector but stripped to a single colour channel
`lcd.ini` | Colour LCD panels (handheld consoles) | Slot-mask shadow, no scanlines, neutral colour matrix
`lcd-matrix.ini` | Dot-matrix LCD (e.g. older handhelds) | Monochrome matrix shadow mask, heavy defocus, boosted saturation for the characteristic greenish tint
`gameboy.ini` | Game Boy LCD | Same slot-mask pattern as `lcd.ini` with GBA-like neutral colour tuning
`gba.ini` | Game Boy Advance LCD | Identical to `gameboy.ini` - slot-mask, no scanlines, flat colour

---
### examples/
Single-purpose colour space snippets. Each file sets only the `chroma_*` parameters that control how MAME maps the emulated system's native colour space to your monitor. Intended to be mixed into a preset rather than used standalone.

#### Phosphor Colour Examples
The phosphor presets below cover common CRT and display technologies.

File | Phosphor | Common use
---|---|---
`p1.ini` | P1 - multipurpose green, medium persistence | Green-screen monitors
`p2.ini` | P2 - blue-green, long persistence | Early radar and oscilloscope displays
`p3.ini` | P3 - amber/orange | Amber-screen monitors
`p4.ini` | P4 - white (standard TV phosphor) | Consumer CRT televisions
`p7.ini` | P7 - blue with yellow-green afterglow | Early vector arcade monitors
`p14.ini` | P14 - yellow-orange | Specialised industrial displays
`p35.ini` | P35 - yellow-green, medium persistence | Green-screen terminals
`p55.ini` | P55 - trichromatic for CRT projectors | CRT projection systems

#### Broadcast Colour Space Examples
The broadcast colour-space presets below map common video standards to their intended use.

File | Standard | Use
---|---|---
`bt601-525.ini` | BT.601 525-line | Most 60 Hz arcade, console, and computer systems (US/Japan)
`bt601-625.ini` | BT.601 625-line | 50 Hz PAL arcade and computer systems (Europe)
`ntscj.ini` | NTSC-J | Japanese 60 Hz systems - same chromaticity as BT.601 525-line but with a 9300K (D93) white point
`bt709.ini` | BT.709 / sRGB | Post-1995 computers and HD game systems

---
## Keyboard Layout Remaps (keymaps/)
Keyboard mapping files (`.map`) that remap non-QWERTY host keyboards so that MAME's input system receives the correct key identifiers. Licensed under CC0-1.0 (public domain).

### Why they exist
MAME's internal key identifiers (`ITEM_ID_Q`, `ITEM_ID_A`, etc.) are defined relative to a standard US QWERTY layout. On a French AZERTY keyboard the physical key in the QWERTY-Q position produces `A`, so without a keymap MAME would interpret it incorrectly. Keymap files describe only the keys that *differ* from QWERTY - anything not listed passes through unchanged.

### File naming
Each file follows the pattern `km_<locale>_<OS>.map`:

File | Layout | OS
---|---|---
`km_be_LINUX.map` | Belgian | Linux
`km_br_LINUX.map` | Brazilian | Linux
`km_ch_LINUX.map` | Swiss | Linux
`km_de_LINUX.map` | German QWERTZ | Linux
`km_es_LINUX.map` | Spanish | Linux
`km_fr_LINUX.map` | French AZERTY | Linux
`km_fr_OSX.map` | French AZERTY | macOS
`km_gb_LINUX.map` | British | Linux
`km_it_LINUX.map` | Italian | Linux
`km_pt_LINUX.map` | Portuguese | Linux
`km_se_LINUX.map` | Swedish | Linux
`km_se_OSX.map` | Swedish | macOS

### File format
Each file is an INI-style text file with a `[SDL2]` section header (all keymaps target the [SDL](#glossary-sdl)2 backend). Each non-comment line has three columns:

```
ITEM_ID_<key>    SDL_SCANCODE_<scancode>    <display_char>
```

* **Column 1** - MAME's internal key identifier, named after the QWERTY key in that physical position (e.g. `ITEM_ID_Q`).
* **Column 2** - The [SDL](#glossary-sdl)2 scancode that the host OS reports for that physical key (e.g. `SDL_SCANCODE_A` on a French keyboard where the QWERTY-Q physical position sends `A`).
* **Column 3** - The visible character, included as a human-readable label only.

Example - the Y↔Z swap on a German QWERTZ keyboard:

```
ITEM_ID_Y    SDL_SCANCODE_Z    Y
ITEM_ID_Z    SDL_SCANCODE_Y    Z
```

### Known issues
Several files (`km_fr_LINUX.map`, `km_fr_OSX.map`) contain a `FIXME` comment noting that they produce parse errors and need updating.

---
## UI Translations (language/)
Translation files for MAME's UI strings. Each subdirectory is a locale (e.g. `Chinese_Simplified`, `French`, `German`) containing the translated string catalogue.

---
# Misc

## Web Server Interface (web/)
Assets for MAME's built-in web server interface. Licensed under BSD-3-Clause. Contains two distinct pieces:

### layout.xsl
An [XSLT](#glossary-xslt) stylesheet that transforms MAME's `.LAY` XML layout files into live, interactive HTML pages served by MAME's built-in HTTP server. The transformation:
* Converts `.LAY` elements (`rect`, `text`, `disk`, `led7seg`) into equivalent SVG shapes, positioned and coloured to match the original layout.
* Injects JavaScript that opens a WebSocket connection back to MAME (`ws://localhost:8080/socket`).
* Sends button press/release events to MAME over WebSocket when the user clicks SVG elements.
* Receives display-state updates from MAME (e.g. which segments of a 7-segment LED are lit) and updates the SVG in real time.

### esqpanel/vfx/
A hand-crafted browser front panel for the Ensoniq VFX family of synthesiser keyboards. Consists of:
* `FrontPanel.html` - The page shell. On load it opens a WebSocket to MAME and instantiates the panel object from `FrontPanel.js`, showing a "Waiting to connect…" message on the display until the connection is established.
* `FrontPanel.js` - A self-contained JavaScript module (`fp`) that models the physical controls of the VFX, VFX-SD, SD-1, and SD-1/32 keyboards. It renders buttons, indicator lights (off / on / blinking), rotary knobs, and multi-character segment displays as DOM elements. User interactions are sent to MAME over the same WebSocket, and incoming messages update the display and light states accordingly.

### Running the Web Server
The HTTP server is off by default. Three command-line flags control it:

Flag | Default | Description
---|---|---
`-http` / `-nohttp` | off | Enable or disable the HTTP server
`-http_port <port>` | `8080` | Port to listen on
`-http_root <path>` | `web` | Directory served as the document root (i.e. this folder)

Basic usage - start MAME with the server enabled:

```bash
mame <machine> -http
```

Then open `http://localhost:8080` in a browser. MAME serves everything under `web/` as static files, so `layout.xsl` and `esqpanel/` are immediately accessible.

Custom port and root:

```bash
mame apple2 -http -http_port 6502 -http_root /path/to/custom/web
```

The WebSocket endpoint used by both `layout.xsl` and the Ensoniq front panel is always at `ws://<host>:<port>/socket`.

---
## Archived Research Files (attic/)
Archived source files that are no longer part of the active build but are kept as historical documentation and research references. Every file here is either a standalone tool that was superseded, a stub/skeleton left over from in-progress work, or extended notes on reverse-engineered hardware protection. The directory contains seven files:

`fd1094dp.cpp` - A standalone C++ program (not compiled into MAME) by Charles MacDonald and Nicola Salmoria. It reads 128 MB of raw data extracted from a physical FD1094 encrypted Sega CPU and produces the 8 KB keyfile that MAME's `fd1094.cpp` driver uses to decrypt ROM data. Superseded once the key derivation was fully understood and built into the main emulator.

**`fddebug.cpp` / `fddebug.h`** - A retired debugging module by Aaron Giles for interactively cracking FD1094 encryption keys at runtime. The bulk of the implementation is wrapped in `#if 0` and compiled out; only a hollow stub of `fd1094_init_debugging()` remains. The commented-out body contains extensive notes on known M68000 instruction sequences found in Sega System 16B games, which were used as known-plaintext anchors when brute-forcing unknown keys.

`jalmah.x68` - Motorola 68000 assembly source (`.x68` format, assembled with the Human68k cross-assembler) by Angelo Salese. Contains simulation snippets for the MCU protection routines in Jaleco mahjong arcade games, written while reverse-engineering the hardware.

`jrcrypt.cpp` - A GPL-licensed standalone C++ program by David Caldwell (1997) documenting the XOR/lookup-table encryption scheme used by Jr. Pac-Man ROMs. Self-described as a documentation artifact; the actual decryption is handled inside the live MAME driver.

`opwolf_cchip.txt` - A detailed plain-text research document describing the Taito TC0030CMD "C-Chip" copy-protection microcontroller used in Operation Wolf. Records the original software simulation that MAME used before an actual EPROM dump of the chip became available, explains the chip's co-operative threading model (32 thread slots, one per enemy), and catalogues the differences between the original and bootleg versions of the game. Kept purely as documentation now that real C-Chip emulation has replaced the simulation.

`unkfr.cpp` - A driver skeleton by David Haywood acting as a holding area for unidentified fruit machine ROMs that have not yet been matched to a known platform. Most of the driver body is wrapped in `#if 0`. The file's own comment instructs contributors to remove confirmed-bad ROMs and migrate anything positively identified to the correct driver.

---
## Third-Party Libraries (3rdparty/)
Third-party libraries vendored into the repo. Includes cryptography (aes256cbc), networking (asio), [JIT](#glossary-jit) compilation ([AsmJIT](#glossary-asmjit)), rendering ([BGFX](#glossary-bgfx), bimg, bx), compression (flac), XML parsing (expat), image decoding (libjpeg), [Lua](#glossary-lua) scripting (lua), SQLite (lsqlite3), benchmarking (benchmark), testing ([Catch2](#glossary-catch2)), and the [Genie](#glossary-genie) build system used to generate project files.

---
# Building

## Build System Scripts (scripts/)
Build system scripts. Contains [Lua](#glossary-lua) scripts for [Genie](#glossary-genie) (`genie.lua`, `toolchain.lua`, `extlib.lua`), subdirectories for per-target and per-source build rules (`src/`, `target/`), font generation (`font/`), [XSLT](#glossary-xslt) transforms (`xslt/`), a [ROM](#glossary-rom) management utility (`minimaws/`), and build resource files (`resources/`).

---
## Android Build Project (android-project/)
Gradle project files for building MAME as an Android application. Contains the standard Android project structure (`app/`, `build.gradle`, `gradle.properties`, etc.).

---
## Build System Project Metadata (projects/)
A working area for external MAME-based projects. The directory ships with only a `README.md` and a `.gitignore` that ignores everything except those two files - any project you clone here is intentionally untracked by the main repo.

### How It Works
When you run `make PROJECT=<name>`, the build system sets `TARGET` to the project name and appends the project's own [Genie](#glossary-genie) Lua build script to the build:

```
projects/<name>/scripts/target/<name>/<subtarget>.lua
```

So a project cloned as `projects/foo/` must provide that script path to be buildable.

### What You'd Put Here
Typical projects that belong here are listed below.
* A **custom operator build** targeting only specific hardware (e.g. a stripped binary containing only CPS2 or Neo Geo drivers)
* A **platform-specific distribution** - this is how older standalone MESS builds worked before MESS merged into MAME
* A **third-party fork** that adds proprietary drivers, a custom UI, or different default options, built on top of MAME's core without modifying the main tree

---
## Build Output (build/)
Output directory created during compilation. Contains generated build system files (`generated/`), compiled object files and binaries, and IDE project files (`projects/`). Not tracked by git.

