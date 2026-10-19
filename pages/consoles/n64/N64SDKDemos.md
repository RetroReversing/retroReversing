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

The [Nintendo 64](/n64) operating-system SDK shipped small source projects that taught developers how to draw a first frame, schedule audio and graphics, use controllers and storage, and measure the hardware. The examples changed across releases: new peripherals gained samples, some older projects moved to a separate directory, and familiar folder names often held revised files [^1] [^11].

Two development archives preserve earlier working copies. The Oman archive has samples in both `APPS` and `usr/src/PR`. A Project Reality (`PR`) tree beside the *Turok: Dinosaur Hunter* source holds many of the same projects. Their shared 2.0G release notes identify an early SDK base, but neither tree is an untouched distribution [^21]. This guide compares those copies with the supplied 2.0H, 2.0I, 2.0J, and 2.0L packages.

The wider libraries and development tools are covered in the SDK overview:

{% include_cached link-to-other-post.html post="/n64-sdk" description="The operating-system libraries, development tools, and toolkit releases surrounding these demo projects." %}

---
# Key terms
The SDK uses these abbreviations throughout its source and notes:
* <a id="glossary-rsp"></a>**RSP** - Reality Signal Processor, which runs graphics and audio microcode.
* <a id="glossary-rdp"></a>**RDP** - Reality Display Processor, which rasterizes graphics commands.
* <a id="glossary-rcp"></a>**RCP** - Reality Coprocessor, which includes the RSP and RDP.
* <a id="glossary-lod"></a>**LOD** - Level of detail, selecting a model or texture representation for its screen size or distance.

---
# Where are the SDK demos?
The dated evidence and sample coverage place the development copies beside four packaged releases. Dates refer to bundled notes or readmes, not necessarily to when every file was created. Folder counts include the shared `Texture` asset directory; Oman's `APPS` count covers same-named inventory folders, while its other locations are listed separately [^18] [^20] [^21] [^22] [^25] [^26]:

Copy | Dated evidence | Inventory coverage | Character of the copy
---|---|---|---
Oman | 2.0G base, 30 September 1996 | 28 `APPS` folders; 5 in `usr/src/PR`; Tron in `NTRON.SKIP` | Developer archive with more than one sample tree
Turok | 2.0G base, 30 September 1996 | 38 inventory folders | `PR` working tree with retained build output
OS-PC 2.0H | PC readme dated 19 March 1997 | 40 direct folders | Earlier PC source layout, including 64DD examples
OS-Library IRIX 2.0I | Notes dated 15 December 1997 | 44 main folders | Reorganized `demos` tree
OS-PC-SGI 2.0J | Notes dated 1 February 1999 | 43 main + 5 older folders | More peripheral examples; older projects retained separately
OS-PC 2.0L | Notes dated 3 July 2000 | 44 main + 7 older folders | Flash, S2DEX2, and profiling examples

The supplied disc photographs show two editions from the later part of this sequence. The gold label identifies the IRIX 2.0I release. The teal disc is labelled **OS/SGI 2.0L**, while the 2.0L inventory below was checked against a separate **OS-PC 2.0L** package [^15] [^11] [^28].

{% capture n64_sdk_disc_figures %}
{% include article-figure.html src="/public/images/n64/sdk-discs/n64-os-library-irix-2.0i-disc.webp" alt="Gold Nintendo 64 Developer OS/Library IRIX version 2.0I disc in a paper sleeve" width="644" height="670" title="IRIX OS/Library 2.0I" caption="The supplied OS/Library IRIX 2.0I disc photograph. This edition's demo tree is compared in the inventory. Select the image for a larger view." %}
{% include article-figure.html src="/public/images/n64/sdk-discs/n64-os-sgi-2.0l-disc.webp" alt="Teal Nintendo 64 OS/SGI version 2.0L disc labelled August 2000" width="1197" height="1200" title="OS/SGI 2.0L" caption="The supplied OS/SGI 2.0L disc, labelled August 2000. The 2.0L inventory column describes the separate OS-PC edition. Select the image for a larger view." %}
{% endcapture %}
{% include article-gallery.html figures=n64_sdk_disc_figures %}

The 2.0G attribution for Oman and Turok comes from byte-identical release notes in the two archives. It identifies a base version, not the age or revision of every project. Turok's `PR` tree also contains Iguana's `tengine` and compiled demo output. Those files show a working development tree; a sample's presence beside the game does not establish that it was compiled into *Turok* [^1] [^21].

## How did the collection change?
The 2.0H PC package still places projects directly in `USR/SRC/PR`. Its notes describe `nnsample1` as a scheduler example and `nnsample2` as an F3DEX and [LOD](#glossary-lod) example. The package also has a Rumble Pak test, a 64DD font sample, and a disk variant of `tile_rect3d` [^22].

The 2.0I IRIX release groups the examples under `usr/src/PR/demos`. Its notes identify `gs2dex`, `eeptest`, and `sramtest` as new samples. It also includes `cptest`, `greset`, `print`, and `spin`, projects familiar from the earlier working trees [^15] [^16].

`greset` helps explain why a dash in one release need not mean the lesson disappeared. Oman, Turok, and IRIX 2.0I have byte-identical source that opens IRIX's `/dev/mmem` and writes the SGI board's reset-control register. The 2.0H PC archive documents `greset` but has no program files for it; its PC readme instead shows a Partner-N64PC `reset` command. The platform difference is a plausible reason for the omission, although the installer does not say why [^24].

By 2.0J, examples for 64DD, the Transfer Pak, and voice recognition appear in the inspected PC collection. `gtdemo`, `host_test`, `hostio`, `simple`, and `turbomonkey` sit in `demos_old` rather than the main folder; they remain available. In 2.0L, `nnsample1` and `nnsample2` join them there, while `flash`, `spritemonkeyEX`, and `threadmonkey` appear in the main set. The last three cover Flash ROM testing, S2DEX2 sprites, and thread profiling [^10] [^11] [^12].

These are source distributions, with assets and build files alongside the C code. Some projects need the shared `Texture` directory. The 2.0L guide names eight that depend on it, including `mipmap` and `spgame` [^11].

---
# Official demo inventory
The table shows which inspected copies contain each sample. `Yes` means a same-named folder is present; Oman's `Yes (/PR)` locates a project in its separate `usr/src/PR` tree, and `Yes (NTRON.SKIP)` identifies its Tron source under that name. `Old` means a later PC release places the project in `demos_old`. A dash means the project was not found in the compared locations; it does not rule out related code elsewhere. The descriptions summarize the supplied guides and source. `Texture` is shared data, not an application [^1] [^10] [^11] [^15] [^20] [^22] [^25] [^26]:

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

Oman has five projects only in its `usr/src/PR` tree: `blockmonkey`, `chrome`, `ci8fb`, `cptest`, and `fault`. Its `APPS/NTRON.SKIP` folder is a Tron project: the Makefile sets `APP = tron` and builds `TRON.C`. A search across the extracted Oman tree found references to `tile_rect2d`, `topgun`, and `turbomonkey`, but no demo source for those three [^25] [^26].

---
# How closely do Oman and Turok match?
The inventory contains 33 demo projects present in both archives, counting Oman's alternate `PR` and `NTRON.SKIP` paths but excluding the shared `Texture` asset folder. Only `overlay`, `polyline`, and `print` are byte-identical as complete folders. In seven more projects, every Oman file matches a Turok file at the same relative path, but Turok has additional files. Across all 33 projects, 29 have at least one exact file match [^27].

The Oman archive viewer shows the wider directory tree, including the SDK examples and hardware verification programs:

{% include_cached link-to-other-post.html post="/oman-archive" description="Browse the Oman archive's file and folder descriptions, checksums, SDK demos, and Project Reality hardware material." %}

The seven projects with extra Turok files are `ginv`, `greset`, `gtdemo`, `hostio`, `onetri`, `simple`, and `soundmonkey`. Their 106 extra files are mostly object files, ROM images, executables, dependency files, and build maps. `GTDEMO` also retains generated `walktable` and `punchtable` tools and headers. These build products explain why a folder can contain the same source as Oman without being identical as a whole [^27].

Other matches are partial. Oman's `chrome` shares four texture files with Turok, while its nine corresponding source and build files differ. `mipmap` matches on 53 of 54 Oman files. Release labels matter too: `onetri` has the same 11 relative file paths in the 2.0J and 2.0L packages, but only one file is byte-identical across those two versions [^2] [^10] [^11] [^25].

The Turok source analysis explains the game engine and build environment surrounding its copy of the `PR` samples:

{% include_cached link-to-other-post.html post="/turok64sourcecode" description="Explore Turok's neighboring game source, ROM build plan, development hardware, and the SDK samples in its PR tree." %}

---
# What do the demos teach?
The collection starts with the structure of a running frame, then moves into rendering, host communication, audio, and peripherals. The source is useful even when a sample's on-screen result is simple.

## A first frame, memory overlays, and scheduling
`ONETRI` draws spinning triangles. Beyond the geometry, it sets up threads, message queues, graphics output, and a ROM `spec` file. `OVERLAY` extends that pattern by placing alternative code and data segments in the same RAM space at different times. Together they show the basic program structure and one way to reuse limited memory [^3].

`SIMPLE` joins graphics, controller input, music, and sound effects. It gives audio work higher scheduling priority because a missed audio deadline is audible, while graphics can repeat a frame. `nnsample1` later provides a different scheduler implementation for developers studying how to coordinate graphics tasks [^4] [^12].

---
## Texture filtering, graphics tasks, and measurement
`MIPMAP` compares point filtering, bilinear filtering, generated mip levels, and prepared mip levels in four views. Its controller menu changes the texture and scale so the difference becomes visible [^5]. The brick images below are two original SGI-format inputs from Oman, converted losslessly for the article. They are textures, not screenshots from a running console:

<link rel="stylesheet" href="/public/css/n64-sdk-samples.css">
{% capture n64_mipmap_figures %}
{% include article-figure.html src="/public/images/n64/sdk-samples/mipmap-brick.webp" alt="Red brick texture from the N64 MIPMAP demo at 32 by 32 pixels" width="32" height="32" title="Base brick texture" caption="`APPS/MIPMAP/BRICK.RGB`, 32 x 32 pixels. The higher-detail input for the sample's comparison." %}
{% include article-figure.html src="/public/images/n64/sdk-samples/mipmap-brick-level-2.webp" alt="Reduced red brick texture from the N64 MIPMAP demo at 8 by 8 pixels" width="8" height="8" title="Reduced brick texture" caption="`APPS/MIPMAP/BRICK2.RGB`, 8 x 8 pixels. A smaller level is selected when the surface occupies fewer screen pixels." %}
{% endcapture %}
<div class="rr-sdk-samples__pixel-art">
{% include article-gallery.html figures=n64_mipmap_figures %}
</div>

`GTDEMO` combines animated characters, a punch action, and turbo graphics tasks. It exposes timing bars for CPU and [RCP](#glossary-rcp) work. `AUTOFILL` narrows the question to triangle fill rate: it varies triangle shape and count, then records timing data for plotting. The pair shows how SDK examples could teach both visible effects and measurement methods [^6] [^7].

Other rows isolate one rendering choice: `chrome` uses reflection mapping, `fogworld` combines fog with volume culling, and `tile_rect3d` tiles large surfaces without visible seams [^1] [^22].

---
## Sprites and audio
`SPGAME` builds a scene from a background, moving ball sprites, and sprite-rendered text. Its build file converts the source images with `mksprite`; the program draws seven ball objects [^8]. The two images below are source assets, not captured frames:

{% capture n64_sprite_figures %}
{% include article-figure.html src="/public/images/n64/sdk-samples/spgame-tv-background.webp" alt="Lightning over a city at night, used as a background source image in the SPGAME sprite sample" width="320" height="240" title="Background source" caption="From `APPS/SPGAME/TEXTURE/L2_TV.RGB`. The build file turns this 320 x 240 image into sprite data." %}
{% include article-figure.html src="/public/images/n64/sdk-samples/spgame-ball.webp" alt="Round brown ball sprite on a dark background from the SPGAME sample" width="61" height="61" title="Ball source" caption="From `APPS/SPGAME/TEXTURE/BALL.RGBA`. The sample moves seven instances of this sprite." %}
{% endcapture %}
{% include article-gallery.html figures=n64_sprite_figures %}

The sample family also tracks graphics microcode changes. `spritemonkey` demonstrates Sprite2D, `gs2dex` covers S2DEX, and 2.0L's `spritemonkeyEX` uses S2DEX2. For audio, `playseq` demonstrates sequence playback while `soundmonkey` exercises sequence and sound players with voice limits [^11] [^15].

---
## Host tools, controllers, and storage
`TERRAIN` lets a developer edit hills with the N64 controller and save generated terrain data back to an SGI Indy. Its README distinguishes launching the host-side editor from loading only the ROM. `HOSTIO` is a smaller host-to-target communication example [^9] [^1].

Other projects test the edges of the system: `pfs` exercises Controller Pak files, `motortest` controls the Rumble Pak, and `eeptest`, `sramtest`, and `flash` test different save-memory devices. `print` measures `osSyncPrintf` with and without `osInitRdb`, making a host debug facility into a timing experiment [^11] [^15].

---
# Beyond the OS demo collection
The N64 Developers Toolkit 5.2 disc is labelled August 2000. Its later examples are organized separately: `NuSystem/sample` includes projects such as `nuoverlay` and `nulod`; other packages contain HVQ video and sound-tool samples. These complement the operating-system demos rather than replacing the collection above [^13] [^19].

{% include article-figure.html src="/public/images/n64/sdk-discs/n64-developers-toolkit-5.2-disc.webp" alt="Green Nintendo 64 Developers Toolkit version 5.2 disc labelled August 2000" width="1200" height="1198" size="document" title="Developers Toolkit 5.2" caption="The supplied Toolkit 5.2 disc photograph. Its label reads August 2000. The NuSystem, HVQ, and sound-tool examples are outside the OS demo inventory. Select the image for a larger view." %}

The Oman archive viewer indexes its wider `APPS` tree, including hardware tests outside this catalog. The Turok source analysis explains the adjacent game engine and build environment.

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
[^15]: Supplied N64 Developers OS-Library IRIX v2.0I, `os20i/dist/ultra.idb` and `ultra.dev`. All 3,040 indexed files were extracted, including 771 files in `usr/src/PR/demos` and 44 immediate demo folders including `Texture`. The project descriptions above were checked against `cptest/README`, `greset/greset.c`, `print/print.c`, and `spin/README` in that extracted tree.
[^16]: Supplied OS-Library IRIX v2.0I, `os20i/relnotes20I.txt` and `Readme_first.txt`. The notes identify the reorganized `usr/src/PR/demos` path and name `gs2dex`, `eeptest`, and `sramtest` as new examples in 2.0I.
[^18]: The supplied IRIX v2.0I `os20i/relnotes20I.txt` is headed `12/15` without a year; [n64os-info's release-note chronology](https://github.com/akopetsch/n64os-info#versions) identifies it as 1997. The supplied 2.0J `relnotes20J.jp` is dated `02/01/99`, and 2.0L `relnotes20L.txt` is dated `07/03/00`. These are dates printed on release notes, which may differ from actual distribution dates.
[^19]: The supplied `Nintendo_64_Developers_Toolkit_v5.2.jpg` shows the original disc label reading `August, 2000`. No more precise release date is established by that label.
[^20]: Inventory presence check of the extracted IRIX v2.0I `usr/src/PR/demos`, PC v2.0J and v2.0L `Ultra_Dev_Demo/usr/src/PR/demos` and `demos_old`, Turok `src/PR`, and Oman `oman/APPS`. Immediate directory names were compared without case sensitivity. The `host_test` description was checked against v2.0L `demos_old/host_test/game.c`.
[^21]: Turok `src/PR/relnotes`, Oman `MAN/RELNOTES`, and Oman `MAN/RELNOTES_OLD/RELNOTES.093096` are byte-identical (MD5 `26eb7b01c4a239093abaecb195ccf0bf`). Their header says `September 30 release` and identifies Ultra 64 version `2.0G for RCP 2.0`; [the N64 OS release-note chronology](https://github.com/akopetsch/n64os-info#versions) dates 2.0G to 1996. These notes identify a release present in the archives, not a verified version or creation date for every other file in either tree.
[^22]: Supplied Nintendo 64 OS-PC v2.0H, `N64os20h.z`, extracted with [unshieldv3](https://github.com/wfr/unshieldv3). Its 2,056 archive entries include `USR/SRC/PR/` with 40 immediate example or shared-asset directories and one `Doc` directory. `readme.20h` prints `1997.3.19 2.0H(PC)`; `relnotes.20h` identifies the release as 2.0H and lists the new examples. `USR/SRC/PR/README_DEMOS_64DD` describes `FONT` and `TILE_RECT3D.DISK`.
[^24]: The complete 2.0H `N64os20h.z` file list has `MAN/demoinfo/greset.html` and `USR/SRC/PR/README_DEMOS`, but no `greset` source or executable. Its `readme.20h` shows `uhPartnerCmd(hfd, "rd FILENAME, 0xb0000000\nreset\ng\n")`. Oman `APPS/GRESET/GRESET.C`, Turok `src/PR/greset/greset.c`, and IRIX 2.0I `usr/src/PR/demos/greset/greset.c` have the same complete-file MD5, `f35b2e68ae1b0edd7aceff16c6e737b4`.
[^25]: Inventory check of the supplied Oman `oman/APPS` and `oman/usr/src/PR` directories. `blockmonkey`, `chrome`, `ci8fb`, `cptest`, and `fault` appear directly under `usr/src/PR` but not `APPS`. All 13 files in Oman `usr/src/PR/chrome` have same-named relative paths in Turok `src/PR/chrome`. Complete-file MD5 matches for `Texture/gameday.rgb`, `mahogany.rgb`, `metallic.rgb`, and `smroad.rgb`; the other nine files do not match byte for byte.
[^26]: Full extracted Oman tree searched for exact demo directory names and filename stems, plus text references to `tile_rect2d`, `topgun`, and `turbomonkey`. `APPS/NTRON.SKIP/MAKEFILE` names `tron` as its application and includes `TRON.C`; its `CFB.C`, `DYNAMIC.C`, and `ZBUFFER.C` have complete-file MD5 matches in Turok `src/PR/tron`. `APPS/PFS/MAIN.C` lists the other three names as Controller Pak menu labels. `TOOLS/CONV/FLT2C.C` also mentions Topgun in a comment.
[^27]: Complete-folder comparison of 33 inventory demo projects found in both Turok `src/PR` and Oman `APPS`, `usr/src/PR`, or `APPS/NTRON.SKIP`. Relative file paths were matched without case sensitivity; equal-length files counted as identical only when their complete-file MD5 matched. Incidental `.DS_Store` and `Thumbs.db` files were excluded. Three projects have identical file sets and contents; ten have every Oman file represented identically in Turok, seven of those with 106 additional Turok files; 29 share at least one exact file. The `gtdemo/Makefile` generates `walktable.h` and `punchtable.h` from their named helper programs.
[^28]: Supplied disc photographs `Nintendo_64_Developers_OS-Library_IRIX_v2.0I.jpg` and `Nintendo_64_OS-SGI_v2.0L.jpg`. The latter disc label reads `OS/SGI`, version `2.0L`, and `August, 2000`; the 2.0L source distribution analyzed for the inventory is the separately supplied OS-PC package described in [^11].
