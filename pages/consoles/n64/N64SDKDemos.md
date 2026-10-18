---
layout: post
tags:
- n64
- sdk
- devkit
title: Nintendo 64 SDK Demo Programs
category: n64
placeholderimages:
- /public/images/n64/sdk-samples/spgame-tv-background.webp
- /public/images/n64/sdk-samples/mipmap-brick.webp
permalink: /n64-sdk-demos
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Official Nintendo 64 SDK
    url: /n64-sdk
  - name: SDK Demo Programs
    url: '#'
editlink: /consoles/n64/N64SDKDemos.md
updatedAt: '2026-10-19'
---

The [Nintendo 64](/n64) operating system SDK shipped demonstration source projects alongside its libraries and tools. They cover graphics, audio, input, host communication, storage, and performance measurement. The extracted OS-PC 2.0H installer places examples directly under `USR/SRC/PR`, the IRIX 2.0I distribution uses `usr/src/PR/demos`, and the later PC installers for OS-PC-SGI 2.0J and OS-PC 2.0L place them under `Ultra_Dev_Demo/usr/src/PR/demos`. The 2.0L `README_DEMOS.txt` describes 43 projects there, plus a shared `Texture` asset directory [^22] [^15] [^10] [^11].

Other copies survive in game development archives. A `README_DEMOS` in the Project Reality (`PR`) tree preserved beside *Turok: Dinosaur Hunter* describes 35 projects [^1]. That tree places Iguana's `tengine` beside the samples, reflecting one developer's working environment rather than a list of code compiled into *Turok*. The separate [Oman archive](/oman-archive) preserves many `APPS` projects. Complete-file checksums show where these copies overlap exactly [^2].

This page maps these official release copies, explains what the projects teach, and compares them with the Turok and Oman trees. The surrounding tools and libraries are covered in the SDK overview:

{% include_cached link-to-other-post.html post="/n64-sdk" description="The official toolkit, libraries, development utilities, and selected packaged examples that surround these demos." %}

---
# Key terms
The SDK uses these abbreviations throughout its source and notes:
* <a id="glossary-rsp"></a>**RSP** - Reality Signal Processor, which runs graphics and audio microcode.
* <a id="glossary-rdp"></a>**RDP** - Reality Display Processor, which rasterizes graphics commands.
* <a id="glossary-rcp"></a>**RCP** - Reality Coprocessor, which includes the RSP and RDP.
* <a id="glossary-lod"></a>**LOD** - Level of detail, selecting a model or texture representation for its screen size or distance.

---
# Where are the SDK demos?
The IRIX 2.0I distribution stores its installation manifest in `os20i/dist/ultra.idb` and its data in `ultra.dev`. The manifest assigns the demo files to the `ultra.dev.demo` subsystem and lists their destination as `usr/src/PR/demos`. Its release notes say the `/usr/src/PR` structure was revised for 2.0I and point to `demos/README_DEMOS.txt` [^15] [^16]. Extraction recovered all 3,040 files indexed by `ultra.idb`, including 771 files in the demo tree. The counts below were checked against the extracted directories [^15].

The 2.0H PC installer contains an InstallShield v3 `N64os20h.z` archive. Its `USR/SRC/PR` tree has 40 immediate example or shared-asset folders, plus a `Doc` folder. Later PC releases package the demo source inside InstallShield cabinets. The 2.0J disc has a `PC/DATA1.CAB`; the 2.0L `os20l_eng.exe` contains another `data1.cab`. Extracting either cabinet reveals the same installation path, `Ultra_Dev_Demo/usr/src/PR/`, with `demos`, `demos_old`, `assets`, and `libsrc` beneath it [^22] [^10] [^11]. These are source distributions rather than collections of prebuilt ROM images.

The dated SDK releases and the two development copies can be placed side by side. The dates belong to bundled release notes or installer readmes, not to every file in a tree or to an archive's creation. The Turok and Oman counts are same-named folders from the [inventory](#official-demo-inventory), while the package counts distinguish main and older demo folders [^18] [^20] [^21] [^22]:

Copy | Version evidence | Notes dated | Demo folders | Release-notes file
---|---|---|---|---
Turok `src/PR` | 2.0G base (inferred) | 30 September 1996 | 38 inventory matches | `src/PR/relnotes`
Oman `APPS` | 2.0G base (inferred) | 30 September 1996 | 28 same-named inventory matches | `MAN/RELNOTES`
OS-PC | 2.0H | 19 March 1997 (PC readme) | 40 direct | `readme.20h`, `relnotes.20h`
OS-Library IRIX | 2.0I | 15 December 1997 | 44 main | `os20i/relnotes20I.txt`
OS-PC-SGI | 2.0J | 1 February 1999 | 43 main + 5 old | `relnotes20J.jp`
OS-PC | 2.0L | 3 July 2000 | 44 main + 7 old | `relnotes20L.txt`

The Turok and Oman notes explicitly call their OS release 2.0G. They have identical MD5 checksums and match Oman's separately named `RELNOTES.093096`. Both copies also retain the older layout, with examples directly in `PR` or `APPS`, as in 2.0H, rather than the `usr/src/PR/demos` tree introduced in 2.0I. This makes 2.0G the best documented base version for the two copies, but neither is an untouched SDK distribution; its individual projects could have been modified or added later [^21] [^22].

Each packaged main count includes `Texture`, a shared asset folder rather than a standalone application. The 2.0H count also includes `tile_rect3d.disk`, a 64DD variant listed in `README_DEMOS_64DD`. In 2.0L, `README_DEMOS.txt` specifically names eight projects that depend on `Texture`, including `blockmonkey`, `mipmap`, `spgame`, and `threadmonkey`. Moving one of those projects without `Texture` can therefore break its build [^22] [^11] [^15].

The 2.0L guide says a plain `make` produces a debugger-oriented ROM image, while `make FINAL=YES` builds one intended for a Nintendo 64 Control Deck. It warns that host-dependent programs such as `hostio` are exceptions. Those instructions describe the original development environment; the extracted sources and their Makefiles have not been rebuilt on a modern machine for this article [^11].

## What changed between the releases?
The shared main demo directory names mostly persist, but their files are not necessarily byte-identical. For example, `onetri` has the same 11 relative file paths in the 2.0J and 2.0L packages, yet only one file matches byte for byte. Treat the release label as part of a source file's identity, even when its project name is unchanged [^10] [^11].

The main-folder changes visible in the supplied packages are:
* **OS-PC 2.0H** - Examples sit directly in `USR/SRC/PR`. The package includes `font`, `tile_rect3d.disk`, and `host_test` as well as `nnsample1` and `nnsample2`; its release notes specifically introduce the two Nintendo scheduler/F3DEX samples, the Rumble Pak test, and the 64DD font sample [^22].
* **IRIX 2.0I** - `cptest`, `greset`, `gtdemo`, `hostio`, `print`, `simple`, `spin`, and `turbomonkey` are in the extracted main `demos` tree. The release notes call `gs2dex`, `eeptest`, and `sramtest` new 2.0I demos [^15] [^16].
* **2.0J main demos** - `nnsample1` and `nnsample2` appear directly under `demos`. Their English `README.ASCII` files describe a Nintendo scheduler example and an F3DEX 1.21 level-of-detail and microcode-loading example, respectively [^12].
* **2.0L main demos** - `flash`, `spritemonkeyEX`, and `threadmonkey` appear under `demos`. The guide identifies them as Flash ROM testing, S2DEX2 sprite rendering, and thread profiling examples [^11].
* **Older PC examples** - `gtdemo`, `host_test`, `hostio`, `simple`, and `turbomonkey` are under `demos_old` in both PC packages. In 2.0L, `nnsample1` and `nnsample2` also appear there. They moved out of the main demo directory in this copy; the folder change does not mean their source was removed [^10] [^11].

`greset` illustrates a platform-specific omission. The 2.0H PC archive retains its entry in `README_DEMOS` and its HTML description, but contains no `greset` source or executable. The byte-identical source in Oman, Turok, and IRIX 2.0I opens IRIX's `/dev/mmem` and writes the SGI development board's reset-control register. The 2.0H PC readme instead shows a `reset` command sent through Partner-N64PC. These details suggest why the PC package omitted the utility, although the installer does not state a reason [^24].

---
# Official demo inventory
This inventory places the Oman and Turok copies before the extracted 2.0H, 2.0I, 2.0J, and 2.0L example folders. In the Oman column, `Yes` means a folder is in `APPS`, while `Yes (/PR)` means it is only in the separate `usr/src/PR` tree. `Yes (NTRON.SKIP)` identifies the Tron source under that name in `APPS`. In the later PC columns, `Old` means a folder is in `demos_old`. A dash means no same-named folder was found in the compared locations, not that no related code exists. Names were matched without case sensitivity, and folder presence alone does not establish identical file contents. The descriptions draw on the release guides and individual source files. `Texture` is a shared asset folder, not an application [^1] [^2] [^10] [^11] [^12] [^15] [^20] [^22] [^25] [^26]:

Folder | What it demonstrates | Oman | Turok | 2.0H | 2.0I | 2.0J | 2.0L
---|---|---|---|---|---|---|---
`autofill` | Triangle fill-rate measurement | Yes | Yes | Yes | Yes | Yes | Yes
`blockmonkey` | Display-list and rendering performance | Yes (/PR) | Yes | Yes | Yes | Yes | Yes
`bumpmap` | Bump mapping | Yes | Yes | Yes | Yes | Yes | Yes
`chrome` | Reflection mapping | Yes (/PR) | Yes | Yes | Yes | Yes | Yes
`ci8fb` | 8-bit color-index frame-buffer rendering | Yes (/PR) | Yes | Yes | Yes | Yes | Yes
`cptest` | Small C++ application and runtime support | Yes (/PR) | Yes | - | Yes | - | -
`ddspgame` | 64DD commands and error handling | - | - | - | - | Yes | Yes
`detail` | Multitiling, detail textures, and mipmaps | Yes | Yes | Yes | Yes | Yes | Yes
`eeptest` | 4 Kbit and 16 Kbit EEPROM tests | - | - | - | Yes | Yes | Yes
`fault` | CPU fault-event handling | Yes (/PR) | Yes | Yes | Yes | Yes | Yes
`flash` | 1 Mbit Flash ROM tests | - | - | - | - | - | Yes
`font` | 64DD mask-ROM font data access | - | - | Yes | - | - | -
`fogworld` | Fog and volume culling | Yes | Yes | Yes | Yes | Yes | Yes
`gbpak` | Transfer Pak access to a Game Boy cartridge | - | - | - | - | Yes | Yes
`ginv` | CPU, RCP, and memory inventory | Yes | Yes | Yes | Yes | Yes | Yes
`gl` | Partner-N64 game loader | - | - | - | - | Yes | Yes
`greset` | Host-side development-board reset utility | Yes | Yes | - | Yes | - | -
`ground` | Clipping a large ground plane | Yes | Yes | Yes | Yes | Yes | Yes
`gs2dex` | S2DEX sprite microcode | - | - | - | Yes | Yes | Yes
`gtdemo` | Animated characters and turbo graphics tasks | Yes | Yes | Yes | Yes | Old | Old
`host_test` | Host-to-target data transfer using `osReadHost` and `osWriteHost` | - | - | Yes | - | Old | Old
`hostio` | Indy-to-target data exchange | Yes | Yes | Yes | Yes | Old | Old
`lights` | Specular lighting and simulated shadows | Yes | Yes | Yes | Yes | Yes | Yes
`mipmap` | Texture filtering and mipmap comparison | Yes | Yes | Yes | Yes | Yes | Yes
`morphcube` | CPU vertex morphing alongside graphics tasks | Yes | Yes | Yes | Yes | Yes | Yes
`morphfaces` | Two-dimensional image morphing and blending | Yes | Yes | Yes | Yes | Yes | Yes
`motortest` | Rumble Pak control | - | - | Yes | Yes | Yes | Yes
`nnsample1` | Nintendo scheduler and graphics tasks | - | - | Yes | Yes | Yes | Old
`nnsample2` | F3DEX 1.21 [LOD](#glossary-lod) and microcode loading | - | - | Yes | Yes | Yes | Old
`nosPak` | Controller Pak menu with Nintendo font data | Yes | Yes | Yes | Yes | Yes | Yes
`onetri` | Single-polygon rendering | Yes | Yes | Yes | Yes | Yes | Yes
`onetri-fpal` | Full-screen PAL version of `onetri` | - | - | - | - | Yes | Yes
`overlay` | Reusing RAM with code and data overlays | Yes | Yes | Yes | Yes | Yes | Yes
`pfs` | Controller Pak file-system operations | Yes | Yes | Yes | Yes | Yes | Yes
`playseq` | Audio sequence player | Yes | Yes | Yes | Yes | Yes | Yes
`playseq.naudio` | Sequence player using `n_audio` | - | - | - | - | Yes | Yes
`polyline` | Switching polygon and line microcode | Yes | Yes | Yes | Yes | Yes | Yes
`print` | `osSyncPrintf` performance with and without `osInitRdb` | Yes | Yes | - | Yes | - | -
`reboot` | Starting a disk program from a Game Pak | - | - | - | - | Yes | Yes
`simple` | Graphics, audio, input, and task scheduling | Yes | Yes | Yes | Yes | Old | Old
`soundmonkey` | Sequence and sound players with voice limits | Yes | Yes | Yes | Yes | Yes | Yes
`spgame` | Foreground and background sprites | Yes | Yes | Yes | Yes | Yes | Yes
`spin` | Interactive RCP and RDP graphics controls | Yes | Yes | - | Yes | - | -
`spritemonkey` | Sprite2D microcode | Yes | Yes | Yes | Yes | Yes | Yes
`spritemonkeyEX` | S2DEX2 sprite microcode | - | - | - | - | - | Yes
`sramtest` | 256 Kbit SRAM tests | - | - | - | Yes | Yes | Yes
`terrain` | Controller-driven terrain editor | Yes | Yes | Yes | Yes | Yes | Yes
`texlight` | Diffuse and specular lighting on textured objects | Yes | Yes | Yes | Yes | Yes | Yes
`threadmonkey` | Thread profiler | - | - | - | - | - | Yes
`tile_rect2d` | Tiled texture rectangles | - | Yes | Yes | Yes | Yes | Yes
`tile_rect3d` | Seamless tiled triangles | - | Yes | Yes | Yes | Yes | Yes
`tile_rect3d.disk` | 64DD version of `tile_rect3d` | - | - | Yes | - | - | -
`topgun` | Geometry converted from a MultiGen `.flt` model | - | Yes | Yes | Yes | Yes | Yes
`tron` | Transparent walls and an RDP hang workaround | Yes (NTRON.SKIP) | Yes | Yes | Yes | Yes | Yes
`turbomonkey` | Turbo graphics microcode performance | - | Yes | Yes | Yes | Old | Old
`voice` | Japanese-language speech-recognition sample | - | - | - | - | Yes | Yes
`Texture` | Shared textures for other demos; not an app | Yes | Yes | Yes | Yes | Yes | Yes

The `demos_old` entries remain useful: `SIMPLE` and `GTDEMO`, for example, introduce scheduling and graphics tasks. `host_test` exercises host-to-target data transfer through `osReadHost` and `osWriteHost`. The folder name is a packaging distinction, not a judgment that these examples are unimportant [^10] [^11].

Oman's separate `usr/src/PR` tree also contains `blockmonkey`, `chrome`, `ci8fb`, `cptest`, and `fault`, none of which is a top-level `APPS` folder. These five `Yes (/PR)` entries are outside the 28 same-named `APPS` matches counted above. Oman's `chrome` shares four byte-identical textures with Turok's copy, while its nine same-path source and build files differ [^25].

A full-tree filename audit also found Oman's Tron source in `APPS/NTRON.SKIP`. Its Makefile sets `APP = tron` and lists `tron.c` among its sources. Three files match Turok's `tron` project byte for byte. No `tile_rect2d`, `topgun`, or `turbomonkey` demo directory or source file was found anywhere in the extracted Oman tree; their names appear only in references such as the Controller Pak menu list [^26].

---
## What does IRIX 2.0I add?
The extracted 2.0I tree has four projects missing from all three inspected PC releases' example directories [^15] [^22]:
* `cptest` - Tests a small C++ application. Its README cautions that this unsupported example uses SGI's `CC` compiler without the multiply bug fix.
* `greset` - A host utility that maps `/dev/mmem` and toggles the development board's reset control, simulating a target reset.
* `print` - Measures `osSyncPrintf` timing with and without `osInitRdb`, then prints the per-call results in nanoseconds. Its source is a performance test rather than a display demo.
* `spin` - Pairs a Tcl/Tk host interface with a console application through the ramrom link. It lets a developer change models, textures, combiner settings, and render modes while observing the result on a TV. Its README says it began as a hardware and software verification tool and provides recorded UI examples for mipmapping, detail textures, and transparency.

The Turok copy's `README_DEMOS` describes `cptest`, `greset`, and `spin`. The extracted 2.0I package confirms their presence in an official SDK release [^1] [^15].

The 2.0I package also puts `gtdemo`, `hostio`, `simple`, and `turbomonkey` directly in `demos`. The later PC packages retain those four under `demos_old`. This explains why looking only inside a later release's main `demos` directory misses several familiar examples [^10] [^11] [^15].

---
# What does the comparison establish?
The packaged SDKs establish that many names in the Turok and Oman archives are official samples. They do not make those archives identical copies of any inspected release. Of the 35 projects described by Turok's `PR/README_DEMOS`, 25 have a same-named top-level folder in Oman `APPS` with at least one byte-identical file. Across those 25 projects, 420 files have the same relative path (ignoring case) and the same complete-file MD5 in both copies. The matches include source, build files, and assets. `ONETRI` and `GTDEMO` match on every Oman file in their folders; `MIPMAP` matches on 53 of 54 [^2].

The 2.0H package adds an earlier official comparison: 539 files match the Turok tree across 34 same-named folders, and 353 match Oman across 25. These are complete-file, same-path MD5 matches. They establish substantial shared sample material while leaving the Turok and Oman version attribution tied to their own 2.0G release notes [^23] [^21].

The extracted IRIX 2.0I tree offers a direct release comparison. It has 530 same-path, byte-identical files across 38 same-named Turok folders, and 382 across 28 Oman folders. For example, 51 of its 53 `mipmap` files match each of those two archives. Its `spin/README` is also identical to the Turok copy. These are substantial overlaps, although the matching files do not make either archive a complete 2.0I copy [^17].

The later 2.0L installer has 79 same-path, byte-identical files across ten same-named Turok folders, and 49 across seven Oman folders. These counts include the shared `Texture` assets. In particular, 34 `mipmap` files match in all three trees. Other same-named projects differ substantially, so the official folder name establishes a project's presence in the SDK without establishing that every later copy is the same revision [^14].

These are examples of exact Oman-Turok matches. The MD5 values identify file contents in those two copies; the installer folders above provide separate evidence for the 2.0J and 2.0L releases:

Oman `APPS` file | Turok `PR` file | Shared MD5
---|---|---
`ONETRI/ONETRI.C` | `onetri/onetri.c` | `58d104e677168da5b8ef03b8dfedd5c9`
`GTDEMO/GTDEMO.C` | `gtdemo/gtdemo.c` | `c500fc5ab4df201142583c3cb39f6667`
`SIMPLE/AUDIO.C` | `simple/audio.c` | `cd1ac4d0c195e2265565bdb1f107aac4`
`SPGAME/TEXTURE/BALL.RGBA` | `spgame/Texture/ball.rgba` | `ae987df0fe05f6132d0c361306abf9b3`

The Turok tree also contains compiled objects and ROMs beside some sample sources. Their presence shows local builds or retained build output, not that those sample ROMs shipped commercially. Other `PR` folders, including `gng` tests and the game-specific `tengine`, serve different purposes.

---
# From a triangle to a scheduled game frame
The smallest demos isolate one idea at a time. The more advanced ones combine several Nintendo 64 subsystems, making the collection a practical route from a first display list to a running application.

## ONETRI and OVERLAY
`ONETRI` draws spinning triangles. Its source sets up the idle and main threads, message queues, graphics output, and a `spec` ROM layout. That makes it more useful than a bare triangle call: it shows the surrounding structure needed to run graphics on the console [^3].

`OVERLAY` starts from the same simple example but divides code and data into alternative ROM segments that occupy the same area of RAM at different times. Its source names separate `plain` and `texture` segment boundaries. This demonstrates how a game can reuse memory when two routines never need to reside there together [^3].

## SIMPLE and audio priority
`SIMPLE` combines graphics, controller input, music, and sound effects. Its source header describes an idle thread, a scheduler, an audio thread, and a game thread. Audio work receives higher priority because missing audio output is audible, while a late graphics frame can repeat the previous image [^4].

That thread layout explains why the SDK demos are useful even when their pictures are modest. They expose the scheduling decisions a game must make around the [RSP](#glossary-rsp), rather than only showing a rendered effect.

---
# Graphics demonstrations
The graphics samples make rendering choices visible or measurable. Their source assets also show what went into the display lists, without presenting a converted texture as a screenshot from a running console.

## MIPMAP compares four sampling paths
`MIPMAP` splits its display into four views: point sampling, bilinear sampling, generated mip levels, and hand-prepared mip levels. Its README explains the comparison and the controller menu used to change textures and scale [^5]. The program is a lesson in how texture detail changes as geometry becomes smaller on screen.

The archived brick inputs below are two levels of the same mip chain. `BRICK.RGB` is 32 x 32 pixels; `BRICK2.RGB` is 8 x 8. The WebP files are lossless conversions of the SGI images in Oman `APPS/MIPMAP`, and the source files also match the Turok copy byte for byte [^2]:

<link rel="stylesheet" href="/public/css/n64-sdk-samples.css">
{% capture n64_mipmap_figures %}
{% include article-figure.html src="/public/images/n64/sdk-samples/mipmap-brick.webp" alt="Red brick texture from the N64 MIPMAP demo at 32 by 32 pixels" width="32" height="32" title="Base brick texture" caption="`APPS/MIPMAP/BRICK.RGB`, 32 x 32 pixels. The higher-detail input for the sample's comparison." %}
{% include article-figure.html src="/public/images/n64/sdk-samples/mipmap-brick-level-2.webp" alt="Reduced red brick texture from the N64 MIPMAP demo at 8 by 8 pixels" width="8" height="8" title="Reduced brick texture" caption="`APPS/MIPMAP/BRICK2.RGB`, 8 x 8 pixels. A smaller level is selected when the surface occupies fewer screen pixels." %}
{% endcapture %}
<div class="rr-sdk-samples__pixel-art">
{% include article-gallery.html figures=n64_mipmap_figures %}
</div>

---
## GTDEMO and graphics tasks
`GTDEMO` uses animated characters, a punch action, and the turbo graphics microcode. Its README lists multiple graphics tasks, host-side matrix work for hierarchical animation, and timer bars for CPU and [RCP](#glossary-rcp) work. The controller can switch characters and toggle sorting and Z-buffering [^6]. It shows how a visually richer sample can also be a timing experiment.

`AUTOFILL` is more narrowly a measurement tool. Its README says it varies triangle area and aspect ratio, adds triangles until a frame-time threshold is crossed, and records fill-rate data for plotting. It explicitly warns that the [RDP](#glossary-rdp) measurement still consumes DRAM bandwidth to feed the display-list FIFO [^7].

---
## SPGAME builds a sprite scene
`SPGAME` demonstrates the sprite library with a background, moving ball sprites, and sprite-rendered text. Its build file feeds `L2_TV.RGB` and `BALL.RGBA` through `mksprite`; its source calls `spInit`, `spDraw`, and `spFinish` and animates seven ball objects [^8].

These are the original SGI-format inputs, converted losslessly for the article. The image of lightning is a texture used by the sample, not a captured game frame:

{% capture n64_sprite_figures %}
{% include article-figure.html src="/public/images/n64/sdk-samples/spgame-tv-background.webp" alt="Lightning over a city at night, used as a background source image in the SPGAME sprite sample" width="320" height="240" title="Background source" caption="From `APPS/SPGAME/TEXTURE/L2_TV.RGB`. The build file turns this 320 x 240 image into sprite data." %}
{% include article-figure.html src="/public/images/n64/sdk-samples/spgame-ball.webp" alt="Round brown ball sprite on a dark background from the SPGAME sample" width="61" height="61" title="Ball source" caption="From `APPS/SPGAME/TEXTURE/BALL.RGBA`. The sample moves seven instances of this sprite." %}
{% endcapture %}
{% include article-gallery.html figures=n64_sprite_figures %}

---
# TERRAIN joins console input to an Indy host
`TERRAIN` is an interactive terrain editor, not just a rendering test. Its README describes changing hills with the controller on the Ultra 64 development hardware, then saving generated terrain data back to the SGI Indy. The exported headers carry geometry and display-list data that another program can use [^9].

The README distinguishes launching the host-side `terrain` program from loading the ROM directly with `gload`: the host process enables features that a standalone ROM launch does not. This is a concrete example of the two-computer workflow behind some SDK samples. `HOSTIO` provides a smaller demonstration of the host-to-target API used for such communication [^1].

---
# Which demos are shared with Oman?
The table lists every `README_DEMOS` project with a byte-identical, same-path file under a same-named Oman `APPS` folder. Counts cover complete files in the extracted copies, including assets and build files; they are not counts of source modules alone [^2]. The purposes are summarized from `README_DEMOS` and the individual project notes [^1].

Demo | Main lesson | Identical files
---|---|---:
`autofill` | RDP triangle fill-rate measurement | 18
`detail` | Multitiled detail and mipmapped textures | 24
`fogworld` | Fog and volume culling | 26
`ginv` | Development-board hardware inventory | 4
`greset` | Simulated target reset | 2
`ground` | Clipping precision on large ground planes | 21
`gtdemo` | Animated characters and turbo graphics tasks | 26
`hostio` | Indy-to-target data exchange | 5
`lights` | RSP lighting, highlights, and a controllable shadow | 14
`mipmap` | Texture sampling and mip-level comparison | 53
`morphcube` | CPU vertex morphing alongside the graphics pipeline | 13
`morphfaces` | Two-dimensional image morphing with multiple passes | 18
`nosPak` | Nintendo font-data library and sample program | 15
`onetri` | A minimal triangle program | 11
`overlay` | Reusing memory with ROM code overlays | 10
`pfs` | Controller Pak file-system operations | 10
`playseq` | Audio sequence playback | 4
`polyline` | Switching triangle and line microcode | 10
`simple` | Graphics, audio, controller input, and scheduling | 26
`soundmonkey` | Audio sequence and sound players | 4
`spgame` | Foreground and background sprites | 14
`spin` | Interactive RDP mode exploration | 35
`spritemonkey` | Sprite microcode | 10
`terrain` | Terrain editing and host communication | 25
`texlight` | Texturing with diffuse and specular lighting | 22

The Turok `README_DEMOS` also describes these ten projects without a same-named top-level directory in Oman `APPS`. All ten appear in at least one supplied official SDK release. `cptest` is listed in IRIX 2.0I, eight appear in the main 2.0J and 2.0L `demos` directories, and `turbomonkey` is in those PC releases' `demos_old` directories. This shows why the Oman tree is not a complete SDK demo inventory [^10] [^11] [^15]:

Demo | What the Turok note describes
---|---
`blockmonkey` | Display-list size and rendering-time experiment
`chrome` | Reflection mapping
`ci8fb` | 8-bit color-index frame-buffer fill test
`cptest` | Minimal C++ application and runtime support
`fault` | CPU exception handling without RMON
`tile_rect2d` | Two-dimensional texture tiling
`tile_rect3d` | Tiled triangle textures without visible seams
`topgun` | Model conversion from a MultiGen `.flt` file
`tron` | Transparent walls and an RDP hang workaround
`turbomonkey` | Turbo microcode performance comparison

`BUMPMAP` has 23 exact file matches in the two trees but is absent from this copy of `README_DEMOS`. Two supporting folders, `PRINT` and `TEXTURE`, also share files. Conversely, Oman has an `SPBENCH` source folder while the same-named Turok folder contains compiled output and generated headers; no same-relative-path file matched in that pair. These distinctions prevent a directory-name comparison from being mistaken for a complete SDK release manifest [^2].

For the wider toolkit, see the [N64 SDK overview](/n64-sdk). The [Oman archive viewer](/oman-archive#browse-the-oman-archive) indexes the full `APPS` tree, including hardware verification projects outside the demo catalog. The [Turok source analysis](/turok64sourcecode) explains the adjacent game engine and its build environment.

---
# Other toolkit sample collections
The N64 Developers Toolkit 5.2 disc is labelled August 2000 [^19]. It organizes later examples differently. Its PC `basic/data1.cab` contains `NuSystem/sample` projects such as `nu1`, `nuoverlay`, `nulod`, and `numirror`. Separate `hvq/data1.cab` contents provide HVQ and HVQM decoding samples, while `SndTools/data1.cab` has sound demos such as `crossfade`, `fxsong`, and `n64dd`. These are useful companion examples, but they are not the OS-PC `usr/src/PR/demos` collection catalogued above [^13].

---
# References
[^1]: Turok source copy, `src/PR/README_DEMOS`, inspected in the supplied archive. It describes 35 named demo applications. This file is not a distribution manifest for every Nintendo 64 SDK version.
[^2]: File comparison of the supplied Turok `src/PR` and Oman `oman/APPS` trees. Folder and relative file paths were matched without case sensitivity; only pairs with equal byte length and identical MD5 of the complete file were counted. Incidental `.DS_Store` files were excluded from the comparison.
[^3]: Oman `APPS/ONETRI/ONETRI.C`, `APPS/OVERLAY/OVERLAY.C`, and corresponding identical files in Turok `src/PR/onetri` and `src/PR/overlay`.
[^4]: Oman `APPS/SIMPLE/SIMPLE.C`, also identical to Turok `src/PR/simple/simple.c`.
[^5]: Oman `APPS/MIPMAP/README` and the project's texture files; the Turok copy contains matching source and textures but no top-level `mipmap/README`.
[^6]: Oman `APPS/GTDEMO/README`, identical to Turok `src/PR/gtdemo/README`.
[^7]: Oman `APPS/AUTOFILL/README`, identical to Turok `src/PR/autofill/README`.
[^8]: Oman `APPS/SPGAME/MAKEFILE` and `SPGAME.C`, identical to the corresponding files in Turok `src/PR/spgame`.
[^9]: Oman `APPS/TERRAIN/README`, identical to Turok `src/PR/terrain/README`.
[^10]: Supplied Nintendo 64 OS-PC-SGI v2.0J, `PC/DATA1.CAB`, extracted `Ultra_Dev_Demo/usr/src/PR/`. The `demos` directory has 43 immediate subdirectories and `demos_old` has five.
[^11]: Supplied Nintendo 64 OS-PC v2.0L, `os20l_eng.exe` containing `data1.cab`, extracted `Ultra_Dev_Demo/usr/src/PR/`. Its `demos/README_DEMOS.txt` explains the applications, shared textures, and build modes. The `demos` directory has 44 immediate subdirectories and `demos_old` has seven.
[^12]: OS-PC-SGI v2.0J, `demos/nnsample1/README.ASCII` and `demos/nnsample2/README.ASCII`.
[^13]: Supplied N64 Developers Toolkit v5.2, extracted PC InstallShield cabinets `basic/data1.cab`, `hvq/data1.cab`, and `SndTools/data1.cab`. The corresponding sample folders were inspected after extraction.
[^14]: File comparison of OS-PC v2.0L `Ultra_Dev_Demo/usr/src/PR/demos`, Turok `src/PR`, and Oman `oman/APPS`. Folders and relative paths were matched without case sensitivity. Equal-length files were counted only when their complete-file MD5 checksums matched. Incidental `.DS_Store` files were excluded.
[^15]: Supplied N64 Developers OS-Library IRIX v2.0I, `os20i/dist/ultra.idb` and `ultra.dev`. All 3,040 indexed files were extracted, including 771 files in `usr/src/PR/demos` and 44 immediate demo folders including `Texture`. The project descriptions above were checked against `cptest/README`, `greset/greset.c`, `print/print.c`, and `spin/README` in that extracted tree.
[^16]: Supplied OS-Library IRIX v2.0I, `os20i/relnotes20I.txt` and `Readme_first.txt`. The notes identify the reorganized `usr/src/PR/demos` path and name `gs2dex`, `eeptest`, and `sramtest` as new examples in 2.0I.
[^17]: File comparison of extracted IRIX v2.0I `usr/src/PR/demos`, Turok `src/PR`, and Oman `oman/APPS`. Same-named folders and relative file paths were matched without case sensitivity. Equal-length files were counted only when their complete-file MD5 checksums matched. Incidental `.DS_Store` files were excluded.
[^18]: The supplied IRIX v2.0I `os20i/relnotes20I.txt` is headed `12/15` without a year; [n64os-info's release-note chronology](https://github.com/akopetsch/n64os-info#versions) identifies it as 1997. The supplied 2.0J `relnotes20J.jp` is dated `02/01/99`, and 2.0L `relnotes20L.txt` is dated `07/03/00`. These are dates printed on release notes, which may differ from actual distribution dates.
[^19]: The supplied `Nintendo_64_Developers_Toolkit_v5.2.jpg` shows the original disc label reading `August, 2000`. No more precise release date is established by that label.
[^20]: Inventory presence check of the extracted IRIX v2.0I `usr/src/PR/demos`, PC v2.0J and v2.0L `Ultra_Dev_Demo/usr/src/PR/demos` and `demos_old`, Turok `src/PR`, and Oman `oman/APPS`. Immediate directory names were compared without case sensitivity. The `host_test` description was checked against v2.0L `demos_old/host_test/game.c`.
[^21]: Turok `src/PR/relnotes`, Oman `MAN/RELNOTES`, and Oman `MAN/RELNOTES_OLD/RELNOTES.093096` are byte-identical (MD5 `26eb7b01c4a239093abaecb195ccf0bf`). Their header says `September 30 release` and identifies Ultra 64 version `2.0G for RCP 2.0`; [the N64 OS release-note chronology](https://github.com/akopetsch/n64os-info#versions) dates 2.0G to 1996. These notes identify a release present in the archives, not a verified version or creation date for every other file in either tree.
[^22]: Supplied Nintendo 64 OS-PC v2.0H, `N64os20h.z`, extracted with [unshieldv3](https://github.com/wfr/unshieldv3). Its 2,056 archive entries include `USR/SRC/PR/` with 40 immediate example or shared-asset directories and one `Doc` directory. `readme.20h` prints `1997.3.19 2.0H(PC)`; `relnotes.20h` identifies the release as 2.0H and lists the new examples. `USR/SRC/PR/README_DEMOS_64DD` describes `FONT` and `TILE_RECT3D.DISK`.
[^23]: Complete-file comparison of extracted 2.0H `USR/SRC/PR` with the supplied Turok `src/PR` and Oman `oman/APPS`. Same-named folders and relative paths were matched without case sensitivity; equal-length files counted only when their MD5 checksums matched. Incidental `.DS_Store` files were excluded.
[^24]: The complete 2.0H `N64os20h.z` file list has `MAN/demoinfo/greset.html` and `USR/SRC/PR/README_DEMOS`, but no `greset` source or executable. Its `readme.20h` shows `uhPartnerCmd(hfd, "rd FILENAME, 0xb0000000\nreset\ng\n")`. Oman `APPS/GRESET/GRESET.C`, Turok `src/PR/greset/greset.c`, and IRIX 2.0I `usr/src/PR/demos/greset/greset.c` have the same complete-file MD5, `f35b2e68ae1b0edd7aceff16c6e737b4`.
[^25]: Inventory check of the supplied Oman `oman/APPS` and `oman/usr/src/PR` directories. `blockmonkey`, `chrome`, `ci8fb`, `cptest`, and `fault` appear directly under `usr/src/PR` but not `APPS`. All 13 files in Oman `usr/src/PR/chrome` have same-named relative paths in Turok `src/PR/chrome`. Complete-file MD5 matches for `Texture/gameday.rgb`, `mahogany.rgb`, `metallic.rgb`, and `smroad.rgb`; the other nine files do not match byte for byte.
[^26]: Full extracted Oman tree searched for exact demo directory names and filename stems, plus text references to `tile_rect2d`, `topgun`, and `turbomonkey`. `APPS/NTRON.SKIP/MAKEFILE` names `tron` as its application and includes `TRON.C`; its `CFB.C`, `DYNAMIC.C`, and `ZBUFFER.C` have complete-file MD5 matches in Turok `src/PR/tron`. `APPS/PFS/MAIN.C` lists the other three names as Controller Pak menu labels. `TOOLS/CONV/FLT2C.C` also mentions Topgun in a comment.
