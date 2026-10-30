---
permalink: /symbols
layout: post
category: symbols
title: Debug Symbols in Retail Games (Console & PC)
breadcrumbs:
  - name: Home
    url: /
  - name: Debug Symbols in Retail Games (Console & PC)
    url: /#
redirect_from:
  - /debug
  - /games/symbols
  - /debugsymbols
  - /unstrippedbinaries
editlink: ../categories/games/DebugSymbolsInGames.md
updatedAt: '2026-10-30'
tags:
  - symbols
  - debug
  - games
recommend:
  - symbols
  - debug
  - games
  - sdk
---

# Introduction to Debug Symbols
Finding debug symbols for a game can feel like opening a strategy guide: function names reveal routes through the code that would otherwise take days to trace. They do not explain every design choice, but they give a reversing project a much better starting map.

## Where do debug symbols come from?
Compilers and assemblers can record names and addresses while turning source into machine code. Richer debug information may also associate instructions with source files, line numbers, types and local variables. The idea resembles a web source map, but the amount of detail varies greatly between a simple symbol table and a full debug database [^1].

## What are debug symbols used for?
Developers use this information to set breakpoints by function name and, when line records survive, step through source lines. A symbol table alone can name functions without recovering the original source or every local variable [^1].

It also turns a crash stack of addresses into recognizable function calls, provided the symbols match the game build.

## Must the symbols be inside the game executable?
No. Microsoft's toolchain commonly stores debugging information in a separate `.pdb` file, keeping it out of the shipped executable [^1]. GNU tools can likewise split an ELF executable from its debug file; GDB can match the pair through a debug link or build ID [^2]. For a retail game, finding a PDB, map or debug file elsewhere can therefore be just as useful as finding an unstripped executable. Check that it belongs to the same build before trusting its addresses.

## Why are debug symbols only in some games?
Teams often strip debug information from release binaries or keep it in a separate file. Sometimes an unstripped build or a companion symbol file still reaches a retail disc. The platform lists below collect examples rather than assuming every release used the same process.

## Which games are likely to contain debug symbols?
Assembly projects can have labels and symbol maps too; they are not limited to C or C++ games. Early cartridge releases rarely carry large source-level debug records because space was costly, but a surviving development build or separate map can still supply names. On disc-based systems, a stray unstripped executable is easier to accommodate.

---
# Games by Platform with debug symbols 

## Sony Consoles
Our Sony lists contain examples from PS1, PS2 and PSP releases, including PS2 demo discs. Their formats and the detail they retain differ, so inspect the individual game before assuming that every listed binary includes full source-level records.

### Sony Playstation 1 
We have a post specifically listing all the debug symbols for the PS1 here:
{% include_cached link-to-other-post.html post="/ps1-debug-symbols" description="Retail PlayStation 1 games that shipped with debug symbols." %}

### Sony Playstation 2
We have a post specifically listing all the debug symbols for the PS2 Demos here:
{% include_cached link-to-other-post.html post="/ps2-demos" description="PlayStation 2 demo discs that still contain debug symbols." %} 

Retail PS2 examples are collected separately:
{% include_cached link-to-other-post.html post="/ps2-unstripped" description="Retail PlayStation 2 games that shipped with debug symbols." %}

### Sony Playstation Portable
{% include_cached link-to-other-post.html post="/psp-debug-symbols" description="PSP games that shipped with debug symbols." %}

---
## Nintendo consoles
Finding symbols in older Nintendo retail cartridges can feel like looking for a needle in a haystack; sometimes all that survives is a stray developer string. GameCube discs gave developers much more room to leave build artefacts behind, and our later-console lists show how often those artefacts repay inspection.

### Nintendo 64
Cartridge size gave Nintendo 64 teams a reason to leave large debug data out of retail ROMs. That is a useful expectation when searching, not proof that no retail build retained any names.

But we do have part of the Turok source code which contains them: [Turok 64 Official Source Code Analysis](/turok64sourcecode)

There has also been a number of Nintendo leaks, leaking the full source code for multiple Nintendo 64 games. Not to forget the excellent work the community is doing on reversing N64 games even without any symbols present!

### Nintendo GameCube 
{% include_cached link-to-other-post.html post="/gamecube-debug-symbols" description="GameCube games that shipped with debug symbols." %}

### Nintendo Wii 
{% include_cached link-to-other-post.html post="/wii-debug-symbols" description="Wii games that shipped with debug symbols." %}

### Nintendo Wii U
{% include_cached link-to-other-post.html post="/wii-u-unstripped" description="Wii U games that shipped with debug symbols." %}


---
## SEGA consoles
We have not yet found a Sega Saturn retail disc with debug symbols. Sega's release practices may have played a part, but we do not have evidence for a general policy; if you find an example, please let us know.

### Sega Dreamcast
{% include_cached link-to-other-post.html post="/sega-dreamcast-game-debug-symbols" description="Dreamcast games that shipped with debug symbols." %}

---
## Debug symbols on Microsoft consoles

### Microsoft Xbox 
{% include_cached link-to-other-post.html post="/xbox-game-debug-symbols" description="Original Xbox games that shipped with debug symbols." %}


There are also a few platforms that may have games with debug symbols but it is currently unknown:
* 3DO
* Cybiko
* GP32/GP2X/Pandora
* N-Gage
* Neo Geo X
* Sega CD/Sega 32X


---

<div>
{% include console.html %}
</div>

---
# References
[^1]: [Microsoft, “Symbol Files”](https://learn.microsoft.com/en-us/windows/win32/debug/symbol-files)
[^2]: [GDB manual, “Separate Debug Files”](https://www.sourceware.org/gdb/current/onlinedocs/gdb.html/Separate-Debug-Files.html)
