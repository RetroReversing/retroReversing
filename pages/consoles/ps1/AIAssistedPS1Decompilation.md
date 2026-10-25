---
layout: post
tags:
- ps1
- tutorial
- reverseengineering
title: AI Assisted PS1 Decompilation Tutorial
category: ps1
permalink: /ai-assisted-ps1-decompilation
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PlayStation 1
    url: /ps1
  - name: AI Assisted PS1 Decompilation
    url: '#'
editlink: consoles/ps1/AIAssistedPS1Decompilation.md
updatedAt: '2026-10-25'
excerpt: 'Start a PlayStation decompilation with Chicken Run in decompdecomp. Import your disc, collect free matches, choose a compiler and connect coding agents.'
image: /public/images/ps1/decompdecomp-chicken-run-import.webp
---

<link rel="stylesheet" href="{{ '/public/css/decomp-status.css' | relative_url }}">

# AI Assisted PS1 Decompilation Tutorial
**Start with your own PlayStation disc image in decompdecomp.** Let its local tools find free matches, then connect a coding agent for the harder functions. This tutorial uses **Chicken Run** on the [Sony PlayStation](/ps1).

The goal is **matching decompilation**: recovering C that compiles to the original machine-code bytes. Your first milestone is a saved, verified function match. A finished PC port requires further work.

## Get the App and Your Disc Ready
[Install decompdecomp](https://github.com/RetroReversing/decompdecomp#readme), then open the app. The [RetroReversing fork](https://github.com/RetroReversing/decompdecomp) adds macOS support to [n-delic's upstream project](https://github.com/n-delic/decompdecomp). We intend to submit useful changes back upstream; check each repository's installation instructions when choosing a version.

Keep your own disc dump and its companion files together in a permanent folder. The app can read supported **BIN, ISO and CHD disc images**, or an extracted **PS-X EXE** program. Starting with the disc gives it access to additional code files as well as the boot program [^1].

**PS1 support is marked beta.** The app's PS1 demo rebuilds, but its platform definition does not claim a complete byte-for-byte retail-game rebuild. Treat import success, individual matches and a complete rebuild as separate milestones [^2].

---
## Import Chicken Run
Choose **New project**, then select your game file. Our example uses `Chicken Run (Europe) (Fr,De,It,Es).bin`. Confirm that it is your own copy and select **Start decompiling**.

{% include article-figure.html src="/public/images/ps1/decompdecomp-chicken-run-import.webp" alt="decompdecomp import screen with the European French German Italian Spanish Chicken Run BIN disc image selected, PlayStation beta notice, ownership confirmation and Start decompiling button" width="1190" height="687" size="document" title="Start with your Chicken Run disc image" caption="Our selected image is the European French, German, Italian and Spanish release. The 697 MiB shown is the disc image size, not the amount of executable code to recover. This screenshot records the import stage, before matching results." %}

### What the Import Screen Means
The screen describes the input, rather than promising a decompilation result:

Field | Meaning
---|---
Platform | The initial screen groups PlayStation 1 and 2 inputs. The importer examines the disc's boot configuration and program format to distinguish them.
Format | Disc image. The app reads its filesystem to find the program; it does not treat the entire BIN as executable code.
Entry | "From the disc" means the program's entry point will be obtained during import.
Project | `splat` is the project layout used to split the program into code and data for reconstruction.
Compiler | The app tests compiler candidates against extracted code. A filename or release year alone cannot establish the original compiler.

The PS1 importer reads the `BOOT` entry in `SYSTEM.CNF`, then loads the named **PS-X EXE**. It can also follow recognised loader references to another executable and look for additional code regions, called **overlays**. These are heuristics: custom archives or compressed code may require further investigation [^1].

If you want to understand the file the app extracts, our executable guide explains its header and memory addresses:

{% include_cached link-to-other-post.html post="/ps1-exe" description="Understand PS-X EXE headers, entry points and the difference between a file offset and a PlayStation memory address." %}

---
## Collect Free Matches First
**Let the automatic pass finish before starting agents.** Local tools draft C and compile it against the original bytes. This stage uses computer time but **no AI model tokens**. Setup may download the required tools [^3].

When it finishes, note the matched-function count and code coverage, then save or export a checkpoint. These are different measurements: ten tiny functions can represent less code than one large function.

**Keep the free-pass result separate from agent progress.** The later screenshot below was taken with two agents already working, so its match count is not a measurement of the free pass alone. We have not recorded a final coverage figure or agent cost for Chicken Run.

### Let Your Projects Help Each Other
**More compatible projects in the app mean more opportunities for free matches.** Keep projects with verified C imported in the same app library, including other regions of games you own. Shared library routines and unchanged regional code can let work on one project benefit another. You do not need to keep every project visible in a tab.

The app looks for identical functions after accounting for address differences, adapts symbol names, then recompiles the candidate against the destination game's bytes. Only an exact result counts as a match. This uses local computer time and **zero AI model tokens**; more projects improve the pool of candidates, but do not guarantee more matches. Compatible compiler settings and function boundaries still matter [^13].

Let autopilot run after importing a related project, and run it again after that project's matching progress improves. Check **Matches from other games** for transfer results. Individual functions can also show **Other games and local SDKs** suggestions: similar code is a useful starting point for an agent, but needs adaptation and verification before it counts [^13].

---
## Understand the PS1 Compiler
The compiler converts recovered C into machine instructions. Matching needs the right compiler version, flags and assembler behaviour. Plausible C can behave correctly while producing different bytes.

The app offers these PS1 compiler candidates. The usage descriptions are its starting guidance, not proof about a particular game [^2]:

Compiler | App identifier | Typical use in the app's guidance
---|---|---
GCC 2.6.3 | `gcc-2.6.3-psx` | PSY-Q 3.5-3.6; early PlayStation games, 1995-1996
GCC 2.7.2 | `gcc-2.7.2-psx` | PSY-Q 4.0-4.3; many PlayStation games, 1996-1998
GCC 2.8.1 | `gcc-2.8.1-psx` | PSY-Q 4.4; some later PlayStation games

**Let matching evidence choose Chicken Run's settings.** A PS-X EXE does not identify its exact PSY-Q version. Unless you choose a compiler explicitly, the app tests its supported GCC versions after import [^2].

### Compiler Coverage Is Incomplete
**decompdecomp does not include every compiler used for retail PS1 games.** Its three PS1 candidates cover part of the GCC family. A game built with another version or compiler family may need additional toolchain support before its C can match. Spending more on an AI model cannot correct a missing compiler.

Published matching projects document these additional compiler requirements. These are evidence from particular games and build configurations, rather than a complete catalogue of PS1 toolchains:

Missing compiler or variant | Retail-game matching evidence
---|---
GCC 2.5.7 | The [Rayman decompilation](https://github.com/rayman-decomp/rayman-ps1-decomp) explicitly requires this version [^6].
GCC 2.6.0, GCC 2.8.0 and GCC 2.7.2 CDK | [Legend of Mana](https://github.com/celophi/lom-decomp) uses these variants for different parts of its matching build. The CDK variant is distinct from the app's existing GCC 2.7.2 PSX entry [^7].
EGCS 2.91.66 / EGCS 1.1.2 | The [Vib-Ribbon project](https://github.com/PawiX25/revib) uses this compiler with a documented adjustment to its C++ compiler [^8].
GCC 2.95.2, PSY-Q build | The [Yu-Gi-Oh! Forbidden Memories project](https://github.com/gonzaloberteri/ygofm-decomp) identifies the PSY-Q 4.6 compiler and ASPSX 2.86 [^9].
Metrowerks CodeWarrior for PlayStation Release 4 | The [Digimon World decompilation](https://github.com/jype0/dw_decomp) requires its `cc_mips.dll`. This is a different compiler family from GCC [^10].
Early SGI IDO/RISCompiler-derived PS1 toolchain | The [Tokimeki Memorial project](https://github.com/CosmicScribe64/tokimemo-ps1-decomp) uses IDO 5.3 with compatibility steps to reproduce an early SGI-family compiler. decompdecomp has N64 IDO support, but no corresponding PS1 integration [^11].

**PSY-Q 4.4 is not a catch-all for later SDKs.** Preserved compiler banners identify GCC 2.8.1 in PSY-Q 4.4, EGCS 2.91.66 in 4.5, and GCC 2.95.2 in 4.6. Matching also depends on the corresponding assembler behaviour, not just the GCC version number [^12].

If the supported compilers consistently fail on plausible C, check the game's existing reverse-engineering research and toolchain evidence before increasing model cost. A compiler that runs successfully still needs matching-output validation for the game.

---
### Why the Assembler Matters Too
PSY-Q used Sony's **ASPSX assembler** after GCC. The app uses **maspsx** to reproduce its behaviours before GNU assembly, including load-delay handling and division checks. This is why selecting an arbitrary modern MIPS GCC is insufficient [^2].

Options such as `-O2` affect optimization. `-G8` controls which small globals can use the `$gp` register for addressing; the app chooses an initial small-data setting from the imported program. Workers can test alternatives when a promising C candidate will not match [^2].

**On Apple Silicon Macs**, [our compiler support fix](https://github.com/RetroReversing/decompdecomp/pull/16) enables native GCC 2.7.2 and 2.8.1 builds and runs maspsx with the app's bundled Python. The [GCC 2.6.3 support change](https://github.com/RetroReversing/decompdecomp/pull/18) adds a build from pinned source using Xcode Command Line Tools. That build also supports Intel Macs, although our local compiler check was on Apple Silicon. If the app says a compiler has no build for this computer, check whether your installed version includes the relevant change.

Use **Compilers & tools** to check tool availability. Review proposed compiler changes in the project rather than assuming that one setting must suit every code region. For background on the original development environment, see our [PSY-Q SDK guide](/Official-PlayStation-1-Software-Development-Kit) and [setup article](/psyq-sdk-setup).

---
## Start a Coding Agent
**Get an agent.** Install and sign in to [Codex CLI](https://developers.openai.com/codex/cli/) or [Claude Code](https://code.claude.com/docs/en/quickstart). In decompdecomp, open **Agents & models** and check that your agent is available. Alternatively, configure an API provider there.

**Start small.** Return to Chicken Run, select **Start agents**, choose **Decompile**, and select your agent and model. Begin with **one worker** and the default **eight functions per session** [^4].

**Try a cheap model first.** Luna or Haiku can be a starting choice for easier remaining functions. Watch actual matches and usage. When the app reports poor results and suggests moving up, try a stronger model in the same project so it can reuse saved attempts. This is a cost-control strategy, not a measured PS1 model ranking.

**Watch the verification loop.** The worker receives assembly and project context, writes candidate C, and asks the app to compile it. Differences guide another attempt. A verified match is saved; unsupported or difficult work can be released for another worker.

### Chicken Run With Agents Running
Our next screenshot shows **76 matched functions**, **0.66% of code** and **1,060 compiles**, with **two agents working**. The project is using **GCC 2.7.2 (PSY-Q 4.0-4.3)**. The selected compiler is a working configuration, not proof that every part of the game used that version.

{% include article-figure.html src="/public/images/ps1/decompdecomp-chicken-run-agent-progress.webp" alt="Chicken Run SLES-03285 in decompdecomp showing GCC 2.7.2, 76 of 1,340 functions matched, 0.66 percent of code, 1,060 compiles and two agents working above the coloured function map" width="1195" height="950" size="document" title="Chicken Run after matching has started" caption="This is an in-progress snapshot with two active agents, not the free-pass baseline. The header reports 76 of 1,340 functions matched; the Functions tab separately lists 1,498 entries. Coverage measures code bytes, so it differs from the share of functions matched." %}

The cards beneath the map show work in progress, including Luna workers and the local permuter. A card at 95% is still an unmatched candidate; it does not contribute a verified match until the byte comparison succeeds.

---
### What the Two Session Controls Change
These controls affect concurrency and conversation size, rather than guaranteeing matches:

Control | Practical effect
---|---
How many | Parallel workers. More workers consume allowance and CPU simultaneously. Start with one.
Functions per session | How many compiled claims a worker attempts before starting a fresh conversation. A claim may contain several small functions, and an unsuccessful compiled attempt can count.
Lower session size | More frequent context resets, with more repeated setup overhead.
Higher session size | More recent reasoning carried forward, but potentially larger conversations and greater token use.

Eight functions per session does **not** mean eight new matches, or that work stops after eight attempts. The app starts further sessions while work remains [^4].

### Keep Costs Visible
A subscription-backed CLI can use your included allowance; an API key consumes separately billed usage. Local compiler checks are free of model charges, but asking the agent to interpret each result still uses tokens.

Our provider setup instructions and recorded costs are collected in the companion tutorial. Its game benchmarks are labelled by game and checkpoint; do not read them as PS1 performance predictions:

{% include_cached link-to-other-post.html post="/ai-assisted-n64-decompilation" description="Codex, Claude and DeepSeek setup, subscription versus API billing, and measured model comparisons from our N64 experiments." %}

---
## Read the Function Map
Each square represents a detected function. These colours follow the app's status palette [^5]:

Status | What to look for
---|---
<span class="rr-decomp-status rr-decomp-status--todo">To do</span> | No scored candidate or active claim. It may still have failed compilations or inspection notes.
<span class="rr-decomp-status rr-decomp-status--tried">Tried</span> | A candidate was scored but did not match. The best attempt is retained.
<span class="rr-decomp-status rr-decomp-status--close">Close</span> | The candidate has a relatively good difference score. The colour is a gradient, not a guarantee of an easy finish.
<span class="rr-decomp-status rr-decomp-status--working">Working</span> | A worker currently holds the function's claim.
<span class="rr-decomp-status rr-decomp-status--matched">Matched</span> | C compiles to the target bytes under the project's comparison settings.
<span class="rr-decomp-status rr-decomp-status--polished">Polished</span> | Matched code has also received clearer names, types or comments without losing its match.
<span class="rr-decomp-status rr-decomp-status--aside">Set aside</span> | Excluded from ordinary matching work, for example because it appears to be assembly.
<span class="rr-decomp-status rr-decomp-status--not-c">Not C</span> | Multiple models assessed it as unsuitable for their C matching workflow. This assessment can be revisited.

The queue does not follow map order. It generally favours smaller functions and useful duplicate matches, while accounting for dependencies, recent failures and model results. Open a square to inspect its history rather than assuming that every dark square is untouched [^5].

---
## PS1 Obstacles Worth Recognising
**Overlays are separate code regions.** Games can load different code into the same RAM addresses at different times. If a function appears missing or its calls make no sense, check which region is loaded. A match percentage describes the code the project has identified; it does not prove every executable region on the disc was found [^1].

**Some code started as assembly.** PS1 geometry routines can use the **GTE**, the console's geometry coprocessor. GTE macros and BIOS call stubs may be set aside rather than forced into ordinary C. That is a reason to inspect the classification, not automatically change models [^2].

**A match is not a complete port.** Recovered function names and comments still need review. Export a checkpoint and inspect its build instructions; validate the program and any overlays included in that export before claiming a complete reconstruction. A playable native port also needs platform and asset work.

For the next Chicken Run checkpoint, record the exact disc edition, detected compiler, free-pass totals, model and effort, elapsed time, and actual spending or subscription usage. That will let us compare agent progress against a clear starting point.

---
# References
[^1]: decompdecomp's [PS1 executable and disc reader](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/ps1/exe.py), [PS1 import implementation](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/ps1/__init__.py), and shared [disc reader](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/ps2/disc.py). The Chicken Run edition and import-screen details are from the supplied screenshot.
[^2]: decompdecomp's [PS1 platform definition](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/ps1/__init__.py) and [PS1 matching guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/ps1/guides/ps1.md), compiler choices, beta status, assembler behaviour, small data, GTE and BIOS stubs. Inspected 25 October 2026.
[^3]: [decompdecomp README](https://github.com/RetroReversing/decompdecomp), installation, automatic matching, tools and project export.
[^4]: decompdecomp's [agent session manager](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/agents.py) and [worker tools and prompts](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/tools.py), sessions, compiled claims and worker lifecycle.
[^5]: decompdecomp's [function-map logic](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/static/js/map.js) and [claim scheduler](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/network.py), status colours and function selection.
[^6]: [Rayman PS1 decompilation build instructions](https://github.com/rayman-decomp/rayman-ps1-decomp), GCC 2.5.7 requirement.
[^7]: [Legend of Mana toolchain table](https://github.com/celophi/lom-decomp#toolchain), historical GCC variants and per-region compilation pipelines.
[^8]: [Vib-Ribbon matching project](https://github.com/PawiX25/revib), EGCS 2.91.66 and its C++ compiler adjustment.
[^9]: [Yu-Gi-Oh! Forbidden Memories toolchain](https://github.com/gonzaloberteri/ygofm-decomp#toolchain), PSY-Q GCC 2.95.2 and ASPSX 2.86.
[^10]: [Digimon World build instructions](https://github.com/jype0/dw_decomp), CodeWarrior for PlayStation Release 4 and `cc_mips.dll`.
[^11]: [Tokimeki Memorial toolchain explanation](https://github.com/CosmicScribe64/tokimemo-ps1-decomp#toolchain), early SGI-family code generation reproduced with IDO 5.3 and compatibility steps. The absence of a PS1 IDO option was checked against decompdecomp's PS1 platform definition on 25 October 2026.
[^12]: [mkst's preserved PSY-Q compiler version information](https://github.com/mkst/esa/releases), compiler banners and ASPSX versions for PSY-Q 4.4, 4.5 and 4.6.

[^13]: decompdecomp's [cross-project matching and similarity implementation](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/twins.py), [autopilot](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/engine/autopilot.py), and [function suggestions display](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/static/js/function.js). Behaviour checked in the installed RetroReversing app on 25 October 2026. The regional transfer example is covered in the [N64 tutorial](/ai-assisted-n64-decompilation#let-your-projects-help-each-other).
