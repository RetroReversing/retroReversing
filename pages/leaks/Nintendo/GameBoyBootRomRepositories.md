---
layout: post
tags:
- gameboy
- gba
- leak
- sourcecode
title: Gigaleak - Game Boy Boot ROM Repositories
category: leak
permalink: /game-boy-boot-rom-repositories/
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Game Boy Boot ROM Repositories
    url: #
recommend:
- gameboy
- gba
- leak
editlink: /leaks/Nintendo/GameBoyBootRomRepositories.md
updatedAt: '2026-03-29'
---

The Nintendo Gigaleak preserves a small but very interesting `other/agb_bootrom` folder.
Despite the name, it is not just a pair of boot ROM binaries.
On disk it survives as two complete Subversion repositories: one for `agb_bootrom` and one for `cgb_bootrom`.

That makes this material more useful than a normal ROM dump.
It preserves repository structure, commit dates, author names, supporting build files, documentation, and extra tools around the boot ROM work itself.

{% include link-to-other-post.html post="/gigaleak" description="For the wider Nintendo Gigaleak overview, including the other major source archives, check out this post." %}

---
## At a Glance
The boot ROM repositories are worth their own page because they preserve:

* two separate SVN repositories rather than one exported working folder
* proper `trunk`, `branches`, and `tags` layout
* dated revision history from 2009
* an AGB repository that includes startup code, monitor code, headers, libraries, docs, and later build tools
* a smaller CGB repository that preserves multiple `.com` and `.dmg` artifacts rather than one final file

Repository | Revisions on disk | Earliest date | Latest date | Visible author
---|---|---|---|---
`agb_bootrom` | 7 revisions (`0` to `6`) | `24 April 2009` | `9 October 2009` | `nakasima`
`cgb_bootrom` | 3 revisions (`0` to `2`) | `24 April 2009` | `24 April 2009` | `nakasima`

---
## On-Disk Layout
At the top level, the folder is very simple:

{% capture root_body %}
The outer folder just contains the two repositories.
Each one is preserved as a real Subversion FSFS repo with `db`, `revprops`, `hooks`, and `locks`.
{% endcapture %}

{% capture folder_items %}
- agb_bootrom - AGB boot ROM Subversion repository
- cgb_bootrom - CGB boot ROM Subversion repository
{% endcapture %}

{% include connected-folder-tree.html folder="agb_bootrom" path="/other/agb_bootrom" body=root_body version="/other/agb_bootrom" content=folder_items %}

That is the first important thing to understand.
The leak did not just preserve `trunk` as a loose export.
It preserved the repositories themselves.

---
## What the Revision Metadata Shows
Even without local `svnlook` installed, the FSFS `revprops` files preserve the revision dates, author, and commit messages.

For `agb_bootrom`, the visible sequence looks like this:

Revision | Date | Author | Log message
---|---|---|---
`1` | `2009-04-24 01:45:30 UTC` | `nakasima` | empty
`2` | `2009-04-24 02:04:18 UTC` | `nakasima` | empty
`3` | `2009-10-08 07:08:52 UTC` | `nakasima` | `AgbComp追加。`
`4` | `2009-10-09 04:12:15 UTC` | `nakasima` | `AgbCompバイナリ追加。`
`5` | `2009-10-09 04:16:09 UTC` | `nakasima` | `Bmp2Agb追加。`
`6` | `2009-10-09 04:19:45 UTC` | `nakasima` | `HTMLリファレンスをAgbSDKからコピー。`

So the repository was not static.
It was first set up in April 2009, then extended in October 2009 with:

* the `AgbComp` source
* the `AgbComp` binary
* the `Bmp2Agb` tool
* HTML reference material copied from `AgbSDK`

The `cgb_bootrom` repository is much smaller.
Its visible revision metadata only shows the initial April 2009 import window, with no later October expansion.

---
## AGB Boot ROM Repository
The AGB side is the richer of the two repositories.
Its trunk looks less like a single boot ROM project and more like a compact AGB boot/monitor development tree with build support around it.

### Trunk Structure
The path names stored in the repository show these major areas:

* `/trunk/AgbMnTs3_000605.bin`
* `/trunk/build`
* `/trunk/build/AgbInclude`
* `/trunk/build/AgbLib`
* `/trunk/build/tools`
* `/trunk/doc`

That already tells us this is broader than a lone ROM image.

### Headers and Include Files
The AGB repository preserves a full `AgbInclude` directory with headers and assembly includes such as:

* `Agb.h`
* `AgbDefine.h`
* `AgbDefine.s`
* `AgbDefineArm.s`
* `AgbMacro.h`
* `AgbMacro.s`
* `AgbMacroArm.s`
* `AgbMemoryMap.h`
* `AgbMemoryMap.s`
* `AgbMemoryMapArm.s`
* `AgbMultiBoot.h`
* `AgbSound.h`
* `AgbSystemCall.h`
* `AgbTypes.h`
* `IsAgbPrint.h`

That is useful because it makes the repo feel SDK-adjacent rather than only ROM-specific.

### Monitor, Startup, and Sound Code
The `build` tree also includes a substantial amount of ARM source and support code:

* `AgbMon.c`, `AgbMon.h`, `AgbMonData.c`, `AgbMonSub16.c`, `AgbMonSub32.c`
* `AgbSound.c`, `AgbSoundAsmArm.s`, `AgbMPlay.c`
* `crt0Arm.s`, `crt0ArmCst.s`, `crt0IncludeArm.s`, `crt0KeyAddr.s`
* `MPlayDefPrvArm.s`, `MusicPlayDefArm.s`
* `ds_startup_arm.s`, `ds_sine_arm.s`, `multi18_Arm.s`

The strongest inference here is that the repository sits at the boundary between boot code, monitor code, and low-level AGB system support.
It does not look like a single isolated source file for the retail boot ROM.

### Libraries and Build Artifacts
The `AgbLib` folder preserves several prebuilt libraries and associated `.alf` outputs:

* `libagbsyscall.a`
* `libagbsyscall154.a`
* `libagbsyscall98r2.a`
* `libisagbprn.a`
* `libagbsyscall_arm.alf`
* `libagbsyscall_arm154.alf`
* `libagbsyscall_arm99r1p2.alf`
* `libisagbprn_arm.alf`

That is another clue that this is a development/support repository wrapped around the boot ROM work, not just the ROM source itself.

### Later Tool Additions
The October 2009 commits added a `tools` tree that is visible directly in the stored repository paths:

Tool | Paths preserved in the repo | Notes
---|---|---
`AgbComp` | `AgbComp.cpp`, `AgbComp.h`, `AgbComp.bpr`, `AgbComp.exe`, `agbcomp.htm`, `read_me.txt` | Added in revisions `3` and `4`, then documented in `6`
`Bmp2Agb` | `Bmp2Agb.cpp`, `Bmp2Agb.h`, `Bmp2Agb.bpr`, `Bmp2Agb.exe`, `bmp2agb.htm` | Added in revisions `5` and `6`

The `.bpr` files suggest Borland C++ Builder projects.
The `.htm` files are especially interesting because the commit log explicitly says they were copied from `AgbSDK`.

### Docs
The `doc` tree includes several visible paths too:

* `doc/000209-agb`
* `doc/AGB`
* `doc/AGB_ROM`
* `doc/AgbStack.txt`
* `doc/GNUPro-98r2`
* `doc/joyboot-a.gif`
* `doc/joyboot-b.gif`

That is a nice reminder that this repository preserves documentation and workflow context, not only code.

---
## CGB Boot ROM Repository
The `cgb_bootrom` repository is much smaller and more focused than the AGB one.

Its visible trunk paths are:

* `/trunk/AgbCgbMn2_1.com`
* `/trunk/CgbEs2Mn.com`
* `/trunk/build/agb_cgb.dmg`
* `/trunk/build/asmagbcgb.bat`
* `/trunk/build/cgb_es2.dmg`
* `/trunk/build/cgbw6def.dmg`
* `/trunk/doc/CGB`

That gives it a different feel from the AGB repository.
The CGB side looks much more like a compact monitor/build package centered on a handful of binaries and `.dmg` build files, with far less surrounding support code.

Even so, it is still more than a single boot image.
The repository structure and multiple build artifacts suggest a small internal working tree rather than just a dumped ROM.

---
## Why This Deserves a Separate Page
The main Gigaleak overview page can only spare a short summary for material like this.
The boot ROM repositories deserve more room because the interesting part is not just "Nintendo boot ROM files leaked".

What actually survives is:

* repository history
* author and date metadata
* `trunk/branches/tags`
* build-system context
* low-level AGB include files and libraries
* monitor, startup, and sound source
* later tool additions and copied HTML references

That makes this folder useful to several different kinds of readers at once:

* people interested in boot ROMs themselves
* people researching Nintendo's low-level AGB tooling
* people interested in how internal repositories were organized
* people tracing where the extracted `*_bootrom_trunk.zip` files actually came from

---
## What Still Needs Deeper Work
This page is mainly about what survives on disk.
There is still more technical work that could be done later:

* reconstruct the full `trunk` trees with real Subversion tooling
* inspect the `.dmg`, `.com`, and `.bin` artifacts in detail
* compare the preserved AGB/CGB monitor files against known dumped boot ROMs
* document what `AgbComp` and `Bmp2Agb` actually do beyond their names and file layout

So this is a good standalone page already, but it is also a nice launch point for future deeper reverse-engineering posts.
