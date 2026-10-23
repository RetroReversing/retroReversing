---
layout: post
tags:
- n64
- tutorial
- reverseengineering
title: AI Assisted N64 Decompilation Tutorial
category: n64
permalink: /ai-assisted-n64-decompilation
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: AI Assisted N64 Decompilation
    url: '#'
editlink: consoles/n64/AIAssistedN64Decompilation.md
updatedAt: '2026-10-23'
excerpt: 'Get Codex or Claude Code, supply your N64 ROM, and copy one prompt to start with our decompdecomp fork. See the measured Turok result and timing.'
---

# AI Assisted N64 Decompilation Tutorial
**Get Codex or Claude Code, supply your N64 ROM, and paste the prompt below.** The agent can set up our decompdecomp fork and start checking recovered C against your game. You can start before learning the compiler and disassembly tools; the later sections explain how to judge the results.

## Quick Start with Your ROM and One Prompt
Use an agent that can run commands and read files on your computer. Follow these steps:
* **Get a coding agent** - Install and sign in to [Codex](https://learn.chatgpt.com/docs/quickstart), or open the **Code** tab in the [Claude desktop app](https://code.claude.com/docs/en/desktop). Choose a local session and a new working folder [^17] [^18].
* **Supply your ROM** - Attach your own `.z64`, `.n64`, or `.v64` file to the chat. If the client will not accept that file type, paste the ROM's full local path and give the agent access to its folder. A path on your computer needs a local agent session.
* **Paste the starter prompt** - Use **Copy starter prompt** below, paste it into the agent, and send it with the ROM or path. You do not need to clone or install decompdecomp by hand first.
* **Answer required setup questions** - The agent may need permission to install a dependency or your explicit acceptance of a proprietary compiler license. Keep the first target small: one C function that passes the real compiler comparison.

This is the complete starter prompt; it has no placeholders to fill in:

{% capture n64_starter_prompt %}
Help me start a matching decompilation of the N64 ROM I am supplying.
Use my attached ROM or local path. If inaccessible, ask for its full path.

Use the main branch of RetroReversing's decompdecomp fork:
https://github.com/RetroReversing/decompdecomp
Record the exact commit used. Read README and AGENTS.md, detect my OS,
and use supported tools in a new dedicated workspace. Preserve my ROM
and existing projects. Reuse verified installed tools where suitable.
Ask before installing a proprietary compiler; do not accept its license
for me. Create workspace and database parent directories before import.
Disable app windows, tray, updates, and agent discovery for isolated work.

Work from my ROM. Do not consult existing game source, other game
decompilation projects, leaked code, or source-derived maps. Tool code
and generic hardware/format documentation are allowed. Keep my ROM,
extracted binaries, disassembly, and recovered C local.

Keep this first session within 30 minutes of wall time, including setup.
Use one agent unless I ask for delegation. After required instructions,
read only code needed for the current stage; avoid an architecture survey.
Before calling an unfamiliar API, read its signature and one real usage.
Keep tool output short and save detailed logs to files.

First identify byte order, region, revision, and hashes, then import.
Validate that discovery reaches the main CPU program and distinguishes
RSP microcode/data from CPU code. Do not trust compiler detection or
candidate-code coverage without checking their evidence.
If import fails, preserve the failing config and full error. Investigate
for at most 10 minutes or five hypothesis-driven attempts, whichever comes
first. Do not bypass validation, delete required sections, or change the
target to make import pass. If still blocked, save a reproducible diagnosis
and stop with a clear report rather than using the remaining quota.

Only after a successful import, compare plausible compiler settings,
run a bounded automatic draft/matching pass, and investigate one small
function. Keep targets and the judge fixed. Accept C only after compiling
and linking it to the exact original bytes. Save best attempts locally.

Update a short audit/checkpoint after setup, import, an accepted match,
and any blocking error: commands, hashes, settings, counts, and next step.
Export and verify the original ROM where supported and within the time
budget; distinguish it from an analysis image. Stop workers at the budget.
Report completed and blocked stages, verified C bytes/functions, coverage
only when its denominator is validated, remaining assembly, actual build
results, setup versus matching time, and how to resume. An assembly-backed
rebuild or plausible draft is not a full decompilation.
{% endcapture %}
{% include copy-prompt.html id="n64-starter-prompt" text=n64_starter_prompt %}

The prompt asks the agent to do the setup and first matching attempts. A successful first session can also uncover an unsupported format or compiler; record that obstacle rather than treating a plausible C draft as finished work. For a browser-only exercise without a ROM, use [the one-function exercise below](#try-one-function-before-installing-anything).

---
## What Our Turok Run Actually Took
We used **GPT-6.1 Sol in Codex**, alongside decompdecomp, m2c, compiler comparisons, and decomp-permuter. On **23 October 2026**, our European revision 0 Turok run reached **419 exactly matching C functions and 26,112 bytes**, or **4.2% of the 626,012 bytes identified as candidate code**. This percentage does not measure the whole game.

Our recorded elapsed times were:

Checkpoint | Local time (BST) | Elapsed from first import
---|---|---
First recorded ROM import | 17:31:41 | Starting point
419 verified C matches reached | 18:02:03 | About 30 minutes
Full original-cartridge rebuild verified with those 419 C selections | 18:10:17 | About 39 minutes

These are wall-clock observations from our import/match records and build log, not a controlled model benchmark. The session included compressed-code investigation, RNC tool fixes, compiler comparisons, manual refinement, and build verification. The earlier macOS port and tools installed before the first import are outside this timing. Much of the routine drafting and matching was done by the local tools; GPT-6.1 Sol helped direct and repair the workflow.

**Do not extrapolate 30 minutes to a completion date.** At that checkpoint, the remaining 1,950 open candidates included harder functions, and code still needs boundary and type review. Most of the verified rebuild still uses assembly. Another game, machine, compiler setup, or agent model may behave differently; we have not measured this run with Claude Code. See [the detailed Turok case study](#turok-europe-a-rom-only-case-study-in-progress) and [source checkpoint](https://github.com/RetroReversing/turok-decomp) for the exact input, compiler settings, and remaining work.

### What Another 30 Minutes With Terra Added
We then gave **GPT-5.6 Terra** an isolated copy of the 419-function checkpoint and a 30-minute matching window. On 23 October 2026, that window ran from **20:55:45 to 21:25:45 BST**. Setup began at 20:50:07 BST; copying the workspace and subsequent backup and verification work were outside the matching window.

The comparison keeps the same 626,012-byte detected-code denominator:

Measurement | Starting checkpoint | After Terra | Gain
---|---|---|---
Exactly matching C functions | 419 | 442 | 23
Matching code bytes | 26,112 | 27,964 | 1,852
Detected-code coverage | 4.171% | 4.467% | 0.296 percentage points

Rounded to one decimal place, this moved **4.2% to 4.5%**. This was a continuation with prepared drafts, installed tools, and compiler settings already available. It is not a comparison of the two models' speed or ability, and it does not establish a sustainable completion rate.

The useful findings were in the C representation of the existing assembly:
* **Recover stack workspaces** - Some m2c drafts modeled an address-passed workspace as a single scalar. In `func_80033F64`, a five-word local array with an interior pointer reproduced the target's stack offsets and matched all 332 bytes. Check the stack accesses and callees before deciding whether a local is a scalar, array, or structure.
* **Recover forwarded arguments** - Small wrappers sometimes left incoming argument registers untouched while setting a later argument. A draft that passed only the visible constant put it in the wrong register. For example, `func_80049504` matched when represented as forwarding two incoming arguments followed by `0x13`. Inspect the caller and callee together rather than trusting an incomplete inferred prototype.
* **Inspect temporary lifetimes** - Reducing artificial m2c temporaries helped `func_800112D8` match 140 bytes. Local declaration order and padding also affected generated stack accesses. These are compiler-specific matching hypotheses; they do not prove the original variable names or source layout.
* **Stop unproductive searches** - The bounded decomp-permuter pass found no additional exact matches in this follow-up. Targeted edits produced the reported gains. A search that helped an earlier batch need not help the next one.

These candidates still need type and readability review. Some retain unknown-type placeholders, provisional declarations, or stack-offset expressions that should not be copied as general C programming practice. Exact machine-code matching is evidence about the selected compiler output, not proof that the recovered source is portable or that its gameplay meaning is understood.

**Verification and recovery:** the experiment database failed during the first post-deadline backup. We reconstructed the isolated state from the untouched baseline and the 23 recovered candidates. All 23 recovered candidates passed independent per-function comparisons afterward. A full rebuild selected 442 C functions out of 2,405 exported functions, with no rejected C selections, and reproduced the original 8,388,608-byte cartridge byte for byte. Its normalized SHA-1 remained `88916d5d2e2470f395ad8f4245d34138ef2d156a`. This verification was outside the 30-minute score window; assembly supplied the remaining code. The published source repository linked above remains the separately verified 419-function checkpoint; this follow-up is an isolated experiment.

---
## What the Kimi Code V-Rally Attempt Revealed
A fresh-game attempt on **V-Rally Edition 99, Europe revision 0** used our earlier starter prompt in Kimi Code on 23 October 2026. The selected model was **K2.8 Preview High**, as confirmed by the person running the experiment.

**The run stopped during import, before matching C.** It preserved the ROM, identified its pair-swapped byte order, recorded hashes, checked out the requested fork revision, and installed free tools. Its first custom import script omitted the database parent directory; creating that directory resolved the initial error. The next import exposed a generated segment/BSS configuration problem.

The exported activity spans **21:22:18 to 21:40:34 BST, about 18 minutes 16 seconds**. The final provider error says the **five-hour usage allowance** was exhausted. The person running the experiment confirmed that the allowance was **100% available at the start**, on the **Kimi Plus plan costing $20 per month**. This session exhausted that full five-hour allowance in about 18 minutes of wall time; it did not run for five hours. These are the participant's plan and price for this run, not a claim about every subscription or future pricing.

The following totals sum each usage event in the supplied session export once:

Recorded usage | Main agent | Exploration helper | Total
---|---|---|---
Successful usage records | 58 | 23 | 81
Uncached input tokens | 104,288 | 140,846 | 245,134
Cached input tokens read | 3,651,840 | 1,901,312 | 5,553,152
Output tokens | 36,855 | 9,178 | 46,033

These are logged processing totals, including repeated cached context. They are not unique-text counts, prices, or a calculation of how Kimi charges its allowance. There were 82 requests; the final main-agent request failed. The exploration helper made 32 file-reading calls across import, compilers, matching, export, server routes, and tests before the first import was completed.

The failure exposed two different problems:
* **Importer layout** - Adding discovered code segments shortened the original main segment's ROM-backed range. Its BSS extent still depended on the old range. Splat then calculated a parent end of `0x8002E338`, below the explicit BSS start of `0x800A73E0`, and rejected the configuration. Preserving the original BSS address range is required; deleting BSS or disabling validation is not a valid repair.
* **Unbounded investigation** - The agent repeatedly investigated a suspected duplicate BSS and tried unfamiliar parser APIs with incorrect arguments or nonexistent names. Large source reads and repeated context processing consumed the session without producing a successful import. The only saved audit write still marked completed setup work as pending.

There were **no verified C matches or successful builds in that exported session**. A validated coverage denominator was not established, so a whole-game completion percentage cannot be inferred. The heuristic report of ten extra code segments and 554 KiB was preliminary discovery, not proof that all those bytes were CPU code.

The revised starter prompt limits the first session to 30 minutes, uses one agent by default, requires stage checkpoints, and caps import debugging at ten minutes or five hypothesis-driven attempts. It asks the agent to inspect API signatures before calling them and to stop with a reproducible diagnosis when blocked. It also uses `main` and records its commit rather than pinning new sessions to the earlier experiment revision.

**Importer follow-up:** [the BSS preservation fix](https://github.com/RetroReversing/decompdecomp/pull/3) preserves the original memory extent when discovering additional code, and converts that extent to the actual BSS size during export. Its synthetic regression checks both BSS addresses and repeated discovery. Standalone export also retains known startup aliases when discovery gives the target function an address-based name. A fresh isolated import with the fix found 2,121 candidates covering 565,980 bytes; these remain candidate-code statistics, and no C matching pass was run. Its standalone export selected zero C functions out of 2,122 exported functions including startup, and rebuilt the complete 12,582,912-byte normalized original ROM byte for byte. The normalized SHA-1 was `da3f262dfb86cff1376c9a1aa081212e5a7aad64`. This later validation used the repaired tool and is separate from the failed Kimi session. If your `main` checkout does not yet include that fix, use its `codex/n64-bss-import` branch at `72cac6c` for the retry.

We are gathering these runs for a comparison of **models, prices, usage limits, and verified results**. This K2.8 Preview High attempt consumed the available five-hour allowance without producing a verified C match. That is a poor practical result for this session, even though an importer defect blocked the matching stage. The subscription price was $20 per month; that is not a $20 charge for this individual run. The export does not establish a per-run dollar cost or how cached tokens count toward the allowance.

The runs used different starting conditions: Sol's Turok run included tool development; Terra continued an already working project. A fairer Kimi retry should begin with the verified importer, record setup and matching time separately, and retain this failed-run result alongside the retry. Record the exact model setting, plan or API price, allowance available at the start, and verified matching bytes for each future run. The [completed Sol run through Abacus.ai](#what-sol-through-abacusai-achieved-on-v-rally) provides another fresh-start observation on the same ROM and tool revision. Record prompt and importer differences alongside future results, since those conditions affect the comparison. These observations are preliminary data; a broader ranking needs more runs.

---
## What Sol Through Abacus.ai Achieved on V-Rally
A second fresh-start V-Rally session used **GPT-6.1 Sol through Abacus.ai** on 23 October 2026. The app log identifies `OPENAI_GPT6_1_SOL`; the saved local records do not establish its reasoning-effort setting. It used the same European revision 0 ROM and historical tool commit `af853d2` as the Kimi attempt, and encountered the same importer defect.

**The result was 603 matching C functions covering 34,164 bytes**, or **6.0363% of the 565,980 detected candidate-code bytes**. The full 12,582,912-byte normalized ROM rebuilt byte for byte, retaining all 603 C selections without rejected selections falling back to assembly. Pair-swapping the output back also reproduced the supplied original file exactly. Most code remains assembly, and these percentages do not measure complete game recovery.

We checked the saved checkpoint and output files independently: SQLite integrity passed, all 603 selected C files existed, their matched target spans agreed with the final ROM, and the target aggregate and recorded judge-file hashes were unchanged. The tool checkout was clean. This review compared the saved artifacts; it did not recompile every C file again. The evidence available locally was project metadata, app logs, scripts, audit records, and build artifacts, rather than a complete verbatim chat export.

### How the Workflow Reached That Result
Sol's session repaired the generated layout through a local adapter before freezing the matching targets. It merged discovered ranges sharing the same ROM-to-VRAM mapping into main subsegments while preserving main/BSS boundaries. The failed import and before/after configuration were retained. Although the tool checkout stayed clean, this adapter changed import behavior; it was not an untouched stock import. This repair differs from the generic fork fix linked above.

The accepted C came from **local m2c drafting, compilation, exact linked-byte judging, and engine propagation**. The automatic pass processed 2,101 open candidates in **165.527 seconds**, about **2 minutes 46 seconds**. Its own draft counter reported 544 matches; the project total, including propagated matches, was 603. Describe this as a Sol-directed workflow yielding 603 verified matches, rather than 603 functions manually written by Sol.

A later investigation of the 28-byte `func_80012168` added no matches. Six compilable KMC flag configurations retained a score of 5. The permuter rejected the baseline with a parser error and generated no variants. The agent correctly kept that near match separate from the accepted C count. The KMC-compatible compiler remains a working hypothesis; no proprietary alternative was installed for this run.

The supported GNU linker eventually completed. An alternative `ld.lld` diagnostic failed on symbol metadata and was not used for the successful build. The session's notes also withdrew unsupported helper claims about compressed code and linker speedups. Saved byte comparisons and measured results provide stronger evidence than those initial diagnoses.

The recorded timeline, in BST on 23 October 2026, was:

Stage | Time or duration
---|---
Session started | 21:44:17
First import failed | 22:01:36
Repaired import completed | 22:13:05
Automatic matching | 22:21:53 to 22:24:39
Export, compile, link, and comparison | About 18 minutes 4 seconds
Final verification completed | 22:45:53
Total wall time through verification | About 61 minutes 36 seconds

Roughly 37.5 minutes elapsed before automatic matching began, so the successful outcome still includes considerable orchestration overhead. Total wall time includes setup, investigation, build time, waiting, and a user continuation; it is not uninterrupted model generation.

---
### Price, Allowance, and the Preliminary Comparison
The participant reported an **Abacus.ai subscription costing $10 per month**, with a **20,000-token monthly allocation**, a **3,000-token cap for premium models such as Sol**, and approximately **2,000 tokens used by this run**. These are the participant's platform-reported units and price for this experiment. They are not raw model input/output token counts or a verified public price list.

That usage equals **10% of the stated monthly allocation** and approximately **66.7% of the premium cap**. Other usage would affect the remaining balance. Local project metadata recorded `creditsUsed: 0`, which we did not treat as proof of a free run because the participant observed usage. A subscription price does not establish a per-run dollar charge, and Abacus's units cannot be directly compared with Kimi's input/output/cache token counts.

The fresh-start observations compare as follows:

Measurement | Kimi Code | Sol through Abacus.ai
---|---|---
Model | K2.8 Preview High | GPT-6.1 Sol, effort unrecorded
Participant's monthly subscription | Plus, $20 | $10
Reported allowance consumed | Full five-hour allowance, 100% available at start | About 2,000 platform units; 3,000 premium cap
Wall time to recorded outcome | About 18 minutes 16 seconds | About 61 minutes 36 seconds
Initial importer defect | Encountered; remained blocked | Encountered; worked around
Verified matching C | None observed | 603 functions, 34,164 bytes
Full original-ROM rebuild | None | Byte-identical

**Sol through Abacus.ai delivered the more useful end-to-end result in these sessions.** It overcame the importer blocker and produced a verified checkpoint within the reported premium allowance. The longer wall-clock run, continuation, differing platform quotas, and shared automatic tools prevent a strict equal-budget model ranking or a precise cost-per-token comparison.

For a stronger matching comparison, run both models from the same validated import with zero accepted C, the same prompt, compiler/tool revisions, and matching window. Keep setup success and cost as separate outcomes, including the failed Kimi attempt. Review the seven uncovered frame patterns, 29 uncovered returns, and extra exported assembly entry before treating the candidate-code denominator as complete executable coverage.

---
## Try One Function Before Installing Anything
Open the [Body Harvest scratches linked by its maintainer](https://decomp.me/preset/211), or an existing Nintendo 64 scratch on [decomp.me](https://decomp.me). A scratch contains a target function, candidate source, type context, and compiler settings. Editing and saving someone else's scratch creates a fork [^1] [^2].

For a first attempt, choose a short function with straightforward control flow. A getter, setter, or small arithmetic helper is easier to investigate than a graphics routine. The following is a suggested exercise, not a promise of a match within a particular time:
* **Keep the baseline** - Record the scratch URL, current score, compiler, flags, and existing C. Keep the target assembly fixed.
* **Ask for an explanation** - Give your AI assistant the target assembly, current C, relevant context, and the prompt below. Use source you are entitled to share; decomp.me stores submitted scratch data.
* **Compile one proposal** - Put the candidate in the scratch's source editor. Preserve its context and settings. Read the compiler error or assembly diff before making another change.
* **Keep the best attempt** - Save an improved fork and note what changed. An explained mismatch is a useful result even when the function still does not match.

Use this prompt with your chosen function:

```text
Help me match this one N64 function in C.
First explain its inputs, outputs, memory accesses, signedness, and branches.
Account for MIPS branch delay slots. Mark uncertain types and meanings.
Then propose one small change to the current C and predict its effect.
Preserve symbol names, target assembly, compiler, flags, and context.
Do not claim a match until I provide the actual compiler comparison.

Compiler and flags: <copy from the scratch>
Target assembly: <one function>
Current C: <current candidate>
Context: <relevant types, macros, globals, and prototypes>
Current compiler error or diff: <actual output>
```

**Read the metric correctly.** decomp.me's difference score gets smaller as the candidate gets closer. Some local tools instead report a similarity percentage that rises toward 100%. A compiler error is a failed attempt. Only the configured tool's exact-match result counts as a match [^1].

Your stopping point for this first exercise is a saved candidate, its actual comparison, and a short explanation of the remaining difference. To contribute it to the game, continue through the local build checks below.

---
## Where REA and decomp.wtf Fit
[REA](https://github.com/isTurn/REA) connects a coding agent to analysis tools. [decomp.wtf](https://github.com/i12bp8/decomp.wtf) provides a workspace for compiler-backed matching. Choose according to the result you need:

Starting goal | Tool or workflow | What establishes success
---|---|---
Try a function with minimal setup | decomp.me exercise above | The selected compiler's comparison against fixed target assembly.
Inspect a supported binary through your agent | REA with a configured analysis provider | Evidence such as addresses, assembly, and references; matching still needs a compiler comparison.
Try a local matching workspace with a supplied N64 demo | decomp.wtf, archived version | Actual compiler and judge output for a demo function, followed by export verification.
Contribute C to an existing game | That project's build and diff tools | The candidate is included and the complete configured build matches.

### REA for Agent Access to Analysis
REA exposes pseudocode, assembly, symbols, and references through local Model Context Protocol (MCP) tools. Native analysis uses a configured Hopper, Ghidra, or IDA installation. Check the README's Node.js requirement, then run:

```bash
npx rea-agents@latest setup
```

Review the proposed agent registrations and provider setup, then restart the agent as instructed. Its [installation guide](https://github.com/isTurn/REA/blob/main/docs/installation.md) explains host and provider requirements [^13].

**Check the N64 input path first.** REA's [raw-binary guide](https://github.com/isTurn/REA/blob/main/docs/raw-binary.md) lists x86, x86-64, ARM, and ARM64 with little-endian Ghidra languages. It explicitly excludes big-endian raw targets and does not list MIPS. That documented loader is therefore unsuitable for directly importing a big-endian N64 ROM [^14].

Ghidra's own processor support does not establish what an agent wrapper exposes. For direct N64 analysis, follow the [N64 Ghidra import guide](/n64-decompiling). For a supported executable, such as a desktop port under investigation, ask REA for one function's assembly, callers, and memory accesses. Keep inferred names separate from observed instructions and use the compiler loop when testing a source hypothesis.

---
### decomp.wtf and the Supplied N64 Demo
The author discontinued decomp.wtf and archived its repository on **15 October 2026**. Its README identifies **0.10.6** as the final version. Treat it as an archived experiment with no promised fixes [^15].

The published setup supports Linux and an unstable Windows path through WSL 2; macOS is unsupported. Follow the [archived installation instructions](https://github.com/i12bp8/decomp.wtf#install). The bundled **Demo Quest 64**, built from public-domain code and zlib, lets you try the workflow without a commercial cartridge dump [^15].

After installation, connect your agent with:

```bash
decomp connect
```

Start with this bounded request:

```text
Open the bundled Demo Quest 64 project. Work on one function only.
Show its target, candidate C, compiler settings, and actual judge result.
Keep the target and verification rules fixed. Stop after a verified
score of zero or report the remaining mismatch.
```

The project documents N64 compiler matching and rebuildable exports. Its export can retain unmatched functions as assembly, so also apply [the candidate-selection checks below](#prove-that-your-c-is-in-the-build). A rebuilt ROM alone does not demonstrate that every function has been recovered as C [^15].

---
## Start a ROM-Only Project with decompdecomp
For a game without a prepared decompilation project, our [decompdecomp fork](https://github.com/RetroReversing/decompdecomp) adds macOS support to the continuing tool. It imports a ROM, discovers candidate functions, generates m2c drafts, and checks compiled candidates against the target bytes. The older decomp.wtf commands above belong to the archived application; use the current fork's instructions for a new project [^16].

On a Mac, install from the fork after installing Git and Apple's command line tools:

```sh
git clone https://github.com/RetroReversing/decompdecomp.git
cd decompdecomp
bash site/public/install.sh
```

The installer creates `~/Applications/decompdecomp.app`. Open it, complete **Compilers & tools**, and import your own ROM. On Apple Silicon, the period KMC compiler requires Rosetta; IDO compilers require separate explicit license acceptance. Start with one project and keep its ROM, drafts, disassembly, and recovered code in a private working directory.

For the first working session, use the project's controls:
* **Run autopilot** - Let the free machine-draft pass try the discovered functions before starting a helper. Open one result and compare the draft, compiler output, and target.
* **Save the constraints** - Put the ROM-only prompt below into **Instructions for agents** and select **Save instructions** before starting an AI helper.
* **Start one helper** - Use **Start agents** in the app and choose a supported local CLI or API model. Current decompdecomp runs helpers inside the app; it removed the archived `decomp connect` and `decomp mcp` commands.
* **Export a checkpoint** - Use **Export** in the project header. Check how many functions were selected as C, whether any fell back to assembly, and what image the build actually compared.

Before asking an agent to recover C, record these facts:
* **Identify the bytes** - Read the ROM magic, region, revision, size, and normalized hash. A filename extension does not establish byte order.
* **Check import coverage** - Compare the discovered code with the boot routine. A handful of functions may describe a loader while the main game remains compressed.
* **Treat compiler detection as a hypothesis** - Test several nontrivial functions with candidate versions and flags. A tiny function that matches two compilers cannot distinguish them.
* **Run the automatic draft pass** - Keep exact compiler matches and inspect the remaining errors. Draft C is a starting point, even when it looks plausible.
* **Preserve an audit trail** - Record tool revision, extraction checks, compiler settings, candidate bytes, and build results. Keep original target hashes fixed.

Use this instruction when working without existing game source:

```text
Work only from my supplied ROM and machine-derived analysis.
Do not read existing game source, decompilation repositories, symbol maps,
or articles that derive names and types from that source.
You may read tool code and generic hardware or file-format documentation.
Keep game binaries, disassembly, and recovered C local.
Explain uncertain names and types. Accept C only after the existing
linked-byte judge passes. Report code coverage separately from matches.
```

---
### Turok Europe: A ROM-Only Case Study in Progress
We started this experiment on 23 October 2026 using the supplied European revision 0 ROM, without consulting existing Turok source or decompilation projects. **This is an unfinished decompilation**, with the extraction and matching stages recorded separately. These measurements describe this exact input, not every Turok release.

The [Turok decompilation repository](https://github.com/RetroReversing/turok-decomp) contains the 419-function C checkpoint, build configuration, and a preparation script. Supply your own supported ROM to regenerate the assembly and assets locally; no ROM or compiler binaries are included.

The initial inspection established the following baseline:

Measurement | ROM-derived result
--- | ---
File size | 8,388,608 bytes
Header game code | `NTUP`, Europe, revision 0
Actual input byte order | 16-bit-swapped v64, despite the `.n64` filename
Entry address | `0x80000400`
Initial import | 12 candidate functions, 3,680 bytes

The normalized ROM SHA-1 is:

```text
88916d5d2e2470f395ad8f4245d34138ef2d156a
```

The small initial import was the first obstacle. Following the bootstrap's memory accesses showed a check for an `RNC` header at ROM offset `0x783690`, followed by decompression to RAM address `0x80001300`. Stopping after the initial import would have missed the main program.

The main container uses **RNC method 1**. Its header declares 462,217 packed bytes and 1,015,248 unpacked bytes. We executed the decoder from this ROM in a bounded MIPS emulator, then independently implemented the format reader and compared the complete outputs. The packed CRC16 was `f045`, the unpacked CRC16 was `a680`, and the unpacked SHA-256 was:

```text
f0c9bd34991216298c760a683908458ed50435d052dd4e67af24374bfea5104d
```

The output ends at `0x800F90D0`, the same address where the bootstrap begins clearing BSS. Agreement between the header, decoder output, checksums, and bootstrap memory layout provides a stronger extraction check than readable disassembly alone.

Feeding that verified output into the importer's compressed-code analysis path produced **2,404 candidate functions**. Some very short boundaries still need review. This count describes discovery, not recovered C, and the 1,015,248-byte payload includes material that has not yet been classified as code or data.

The bootstrap initially suggested KMC GCC, while the expanded main program suggested IDO. After explicit acceptance of the compiler licenses, we installed both preserved IDO 5.3 and 7.1 toolchains. Across 59 drafted functions in two samples, 12 matched with each version. Both versions produced the same match counts, so IDO 5.3 remains a provisional working choice, not an identification of the original release.

The IDO 5.3 attempts used these working flags from the tool's compiler registry:

```text
-O2 -mips2 -G 0 -non_shared -Xcpluscomm -Wab,-r4300_mul
```

Keep those settings in your log when comparing a candidate. They are measured working settings for this experiment; they do not prove that every function or library in the ROM used that configuration.

The initial automatic draft pass, byte-pointer refinement, manual recovery, and bounded mutation pass reached **419 exact function matches, covering 26,112 bytes**. Against the 2,404 discovered candidates and their 626,012 bytes, that is about 17.4% by function count but only 4.2% by bytes. Another 35 candidates were classified as assembly. These are analysis statistics, not a whole-game completion percentage; unidentified code and data remain outside that denominator.

The [30-minute Terra continuation](#what-another-30-minutes-with-terra-added) later reached 442 exact matches and 27,964 bytes using the same denominator. The counts and build described below refer to the initial 419-function checkpoint.

A manual attempt illustrates why types matter. The target at `0x8000EF70` indexed records with a 12-byte stride. Giving that table an explicit record type fixed the draft's pointer scaling; the score improved from 55 to 10. The remaining diff involved register allocation around a counter update. Expressing it as a pre-increment produced score 0 under both tested compilers. This establishes a machine-code match for that function; the table's gameplay meaning remains unproven.

**Reproduction status:** a fresh import with the RNC method-1 reader reached the same 2,404 candidates without the private extraction hook. The reader verifies both checksums before accepting a block and uses instruction patterns to reject blocks that do not look like code. The implementation and tests were introduced in [the RNC importer and cartridge export pull request](https://github.com/RetroReversing/decompdecomp/pull/2), tested at historical commit `af853d2`. That work is merged into `main`; use the fork's main branch for new sessions and record its exact commit.

After importing, select IDO 5.3 in the compiler settings as the provisional working choice, run the automatic draft pass, then inspect individual mismatches. The quoted counts are observations from this experiment, not a promise that every future tool revision will identify exactly the same boundaries.

**Verified build:** the final standalone export selected **419 C functions out of 2,405 exported functions**, with the remaining code kept as assembly. After fixing generated linker names and references across split assembly files, it rebuilt the expanded image, reconstructed the RNC container from linked output, and reproduced the complete original **8,388,608-byte cartridge** byte for byte. Its SHA-1 was the fixed normalized hash above. The extra exported startup function explains why this denominator differs from the discovery database.

This proves a partial matching build, not a complete decompilation. The packed reconstruction uses the original stream's coding decisions and replaces literal spans with bytes from the newly linked program; it decodes that result again and rejects incompatible back-references. A general compressor would be needed for arbitrary edits. Assembly and asset fallbacks still supply most of the game.

A bounded three-minute mutation pass tested 16,208 candidate rewrites, improving 13 functions and finding 10 further exact matches. Every accepted rewrite went through the same byte judge. Register allocation and instruction ordering can depend on C expression shape, so a semantic explanation is useful, but the compiler comparison remains the acceptance test.

---
## Know What You Are Trying to Recover
A **matching decompilation** reconstructs source that compiles to the original machine code with the project's chosen toolchain. A **static recompilation** translates machine instructions into code for another platform. The [N64 recomp guide](/how-to-create-an-n64-recomp) covers that second route.

For the broader tool landscape, see [AI-Assisted Decompilation for Retro Games](/ai-assisted-decompilation). These terms help explain the matching loop:

Term | Meaning in this tutorial
---|---
<a id="glossary-target"></a>Target | Original instructions and data used as the fixed comparison.
<a id="glossary-context"></a>Context | Types, macros, global declarations, and function prototypes needed to compile the candidate.
<a id="glossary-codegen"></a>Code generation | The instructions produced by a particular compiler and set of flags.
<a id="glossary-match"></a>Match | The candidate reproduces the required instructions or bytes under the project's comparison rules.
<a id="glossary-fallback"></a>Assembly fallback | Original assembly used in place of a C function that has not yet been accepted as matching.

The AI proposes hypotheses; the compiler and comparison test them. This is the tutorial's schematic workflow:

```mermaid
flowchart TD
  A["Target and context"] --> B["Candidate C"]
  B --> C["Compile and compare"]
  C --> D["Explain first difference"]
  D --> B
  C --> E["Integrate and verify ROM"]
```

For ROM mapping, debugger setup, and MIPS background, use the [N64 reversing introduction](/N64Reversing).

{% include_cached link-to-other-post.html post="/N64Reversing" description="Prepare an exact ROM revision, follow loaded code, and understand the evidence behind a decompilation." %}

---
## Build a Known Project Locally
[Body Harvest's decompilation](https://github.com/jaytheham/body-harvest-decompilation) provides a practical local example. Its agent instructions specify C89 and IDO 5.3 with `-O2 -mips2 -32`. Its build supports separately identified US and EU inputs. Use the project's current README if its setup changes [^2] [^3].

Keep your original ROM separate from experiments. For the US walkthrough, the repository expects a big-endian image named `baserom.us.z64` with SHA-1 `bbb6666f5014a473747ee4145f036d9fb25d7348`. Renaming a different revision does not convert it [^2].

### Windows Setup
The documented native Windows path needs Git and 64-bit Python 3.12. Clone the project:

```powershell
git clone https://github.com/jaytheham/body-harvest-decompilation.git
cd body-harvest-decompilation
```

Place your supported ROM in that directory as `baserom.us.z64`, then run:

```powershell
.\tools\extract.ps1
.\tools\make.ps1
```

The extraction script prepares the pinned local tools. The documented success output is `build/bh.us.z64: OK`. This confirms the starting checkout rebuilds the target. The README notes that some other development scripts still use Docker; a successful native build does not establish that every helper works natively [^2].

---
### Ubuntu or WSL Setup
The project's Linux instructions target Ubuntu 22.04. Check its [packages.txt](https://github.com/jaytheham/body-harvest-decompilation/blob/master/packages.txt) for system dependencies. Clone recursively, then install the [Python requirements](https://github.com/jaytheham/body-harvest-decompilation/blob/master/requirements.txt) as shown below:

```bash
git clone --recursive https://github.com/jaytheham/body-harvest-decompilation.git
cd body-harvest-decompilation
```

From the cloned directory, install the Python requirements in a virtual environment:

```bash
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
```

After placing the supported US ROM at `baserom.us.z64`, extract and build:

```bash
make extract
make --jobs
```

Expect `build/bh.us.z64: OK`. Follow the README's host-compiler guidance if using a newer Ubuntu release. Fix a failing baseline before asking an agent to change game code [^2].

---
## Give the Agent One Bounded Task
Create a branch for your attempt and choose one unmatched function. Read that project's instructions first, including its contribution policy for AI-assisted work. Body Harvest's [AGENTS.md](https://github.com/jaytheham/body-harvest-decompilation/blob/master/AGENTS.md) describes its source layout and matching tools; Snowboard Kids 2's [agent guide](https://github.com/cdlewis/snowboardkids2-decomp/blob/main/CLAUDE.md) shows another function-level workflow [^3] [^4].

Create your attempt branch from a checkout whose baseline build passes:

```bash
git switch -c match-first-function
```

Give the agent a small evidence packet:
* **Identity** - Game revision, repository commit, function symbol, and source file.
* **Compiler** - Exact compiler version, language restrictions, and flags from this project.
* **Code** - The target assembly, current candidate, and relevant declarations.
* **Examples** - One or two already matched functions with similar instructions or data access.
* **Verification** - The actual build and diff commands, expected success output, and current baseline result.

Use this task prompt after filling in its placeholders:

```text
Work on <function> in <source file> only.
Read the repository's instructions and the supplied matched examples first.
Allowed edits: <source file and specific related header, if needed>.
Keep ROMs, target assembly, checksums, compiler flags, and verification scripts fixed.

Explain one mismatch, predict one change, then compile and compare it.
Preserve the best candidate separately before another attempt.
Use the project's C dialect and existing declarations. Mark uncertain types.
Do not replace the function with inline assembly or an assembly fallback.

Confirm that the candidate C is actually included in the verification build.
Run <function comparison command> and <whole-project verification command>.
If eight attempts bring no improvement, stop and report the best candidate,
remaining differences, commands run, and exact verification results.
```

The attempt limit is a suggested starting budget. Increase it deliberately after reviewing the remaining problem. Chris Lewis's [account of agent-assisted matching](https://blog.chrislewis.au/using-coding-agents-to-decompile-nintendo-64-games/) describes why separate candidate files and small changes made results easier to understand and recover [^5].

---
## Diagnose the Diff Before Asking for More Code
A plausible explanation of a function's purpose does not settle how its original compiler expressed it. Ask the agent to identify the **first meaningful instruction difference**, then test a specific cause.

Use this table to choose the next investigation:

Observed difference | Useful next check
---|---
Compiler rejects the candidate | Check missing declarations and the project's C dialect before changing the algorithm.
Loads have different widths or sign extension | Revisit field and parameter types against the original instructions and callers.
Branch conditions or destinations differ | Check signed comparisons, conditional structure, and delay-slot behavior.
Calls or memory accesses are missing | Check side effects and whether the proposed C silently removed work.
Field offsets disagree | Calculate offsets explicitly and compare all functions using the proposed structure.
Logic agrees but registers or stack slots differ | Study nearby matched code and compiler behavior; consider the project's permuter after the structure is sound.
Function matches but the ROM differs | Check integration, declarations, data layout, relocations, and other functions affected by the change.

[asm-differ](https://github.com/simonlindholm/asm-differ) compares target and compiled assembly. Its output helps locate a difference; it does not explain the game's intent for you. The Body Harvest repository includes its own configuration and tools, so use those rather than a generic compiler invocation [^3] [^6].

For the Body Harvest Linux/WSL checkout, run the configured comparison from the repository root after building. Replace `FUNCTION_SYMBOL` with the exact symbol you selected:

```bash
python3 tools/asm-differ/diff.py --no-pager FUNCTION_SYMBOL
```

Feed the next attempt concrete evidence:

```text
The candidate compiled, but the comparison still differs.
The first meaningful difference is: <target versus current instructions>.
Current candidate: <code or path>
Best prior candidate: <code or path>
Explain two possible causes. Choose one, change only that cause, and rerun
our configured comparison. Preserve the previous best if this becomes worse.
```

---
## Prove That Your C Is in the Build
A matching ROM can still contain original assembly. Many projects deliberately use an [assembly fallback](#glossary-fallback) while a C implementation is unfinished.

Body Harvest wraps unfinished candidates with `NON_MATCHING`. Its instructions describe enabling the candidate for matching work; the README warns that the broad `NON_MATCHING=1` configuration contains unfinished code. Enable your selected function through the project's documented process. Do not treat a default build that still selects its assembly as proof that the C matches [^2] [^3].

Before accepting a function, establish these results:
* **Candidate selected** - The build compiled this C body and did not silently use the original assembly.
* **Function compared** - Its configured assembly comparison matches, including relevant data and references.
* **Project verified** - The complete target comparison passes with that C integrated.
* **Change reviewed** - The diff contains the intended function and justified declarations. Target hashes, verification scripts, and generated output have not been altered to manufacture success.

For Body Harvest's US build, the final ROM check should again report `build/bh.us.z64: OK`. Shared source changes can also affect its EU build; verify the affected supported versions before proposing the change [^3].

This matters particularly with agents: Lewis documents a case where an assistant changed the expected SHA-1 to make a failing build pass. His later workflow protected that value and required verification through a controlled build script [^7].

---
## Learn from Projects in the Catalogue
These projects publish explicit AI disclosures or agent workflows. Use each example for the stage of reverse engineering it documents:

Project | Published evidence | Useful lesson
---|---|---
[Body Harvest](https://github.com/jaytheham/body-harvest-decompilation) | A matching-decompilation agent guide with compiler settings, source rules, and comparison tools [^3]. | Keep target assembly fixed, reuse matched references, and verify integrated C.
[Snowboard Kids 2](https://github.com/cdlewis/snowboardkids2-decomp) | Agent instructions and the author's series on AI-assisted matching [^4] [^5] [^7]. | Isolate a function, preserve attempts, and require a complete build after integration.
[Snowboard Kids](https://github.com/cdlewis/snowboardkids-decomp) | The author's retrospective describes agents, IDO investigations, and expert contributions [^8]. | Use compiler-specific evidence and shared lessons; a percentage alone does not document the game.
[GoldenEye PC Port](https://github.com/jkdansereau/goldeneye-pc-port) | Its README discloses AI coding agents in development of a native port [^9]. | Porting an existing decompilation adds platform work; it is a different verification target from matching a ROM.
[Jet Force Gemini Recomp](https://github.com/TK22-26/JetForceGemini-Recomp) | Its README describes AI assistance and continuing accuracy and gameplay testing [^10]. | A campaign test and original-console accuracy answer different questions.
[Pilotwings 64 recomp](https://github.com/danielgomesvieira2000/pilotwings-64-recomp) | Its README discloses AI use and credits the decompilation and runtime foundations [^11]. | Distinguish an AI-assisted port from the original matching-decompilation effort.
[Ogre Battle 64 recomp](https://github.com/lfarroco/ogre-battle-64-recomp) | Its README discloses an AI experiment and documents bank and RSP regeneration [^12]. | Generated CPU code still depends on correct segments, microcode, and a native runtime.

The Snowboard Kids projects are valuable references even where their original matching work is complete. Their documentation identifies cleanup, naming, and understanding as further work. Do not assume an old unmatched-function queue still exists [^4] [^8].

---
## Continue After Your First Attempt
Keep a short result with the target symbol, candidate, comparison output, and any uncertainties. A partial result should say precisely what still differs. For a verified match, follow the project's contribution instructions and include the build result with your proposed change.

For a game without an existing project, first establish a code map, supported ROM revision, compiler hypothesis, and an assembly rebuild. [Splat](https://github.com/ethteck/splat), [spimdisasm](https://github.com/Decompollaborate/spimdisasm), and [m2c](https://github.com/matt-kempster/m2c) support that groundwork. The [N64 reversing introduction](/N64Reversing) explains the broader process. Reuse the one-function AI loop once the target and comparison are trustworthy.

---
# References
[^1]: [decomp.me FAQ](https://www.decomp.me/faq) and [New Scratch page](https://www.decomp.me/new), scratch contents, forking, scoring, compiler settings, and stored submissions.
[^2]: [Body Harvest README](https://github.com/jaytheham/body-harvest-decompilation), supported ROM hashes, Windows/Linux builds, and non-matching configurations.
[^3]: [Body Harvest agent instructions](https://github.com/jaytheham/body-harvest-decompilation/blob/master/AGENTS.md), compiler settings, candidate selection, reference searches, and whole-ROM verification.
[^4]: [Snowboard Kids 2 agent instructions](https://github.com/cdlewis/snowboardkids2-decomp/blob/main/CLAUDE.md) and [README](https://github.com/cdlewis/snowboardkids2-decomp), isolated matching environments, integration checks, and contribution work.
[^5]: Chris Lewis, [Using Coding Agents to Decompile Nintendo 64 Games](https://blog.chrislewis.au/using-coding-agents-to-decompile-nintendo-64-games/), 4 November 2025, a documented human-led matching workflow.
[^6]: [asm-differ README](https://github.com/simonlindholm/asm-differ), project configuration and assembly comparisons.
[^7]: Chris Lewis, [The Long Tail of LLM-Assisted Decompilation](https://blog.chrislewis.au/the-long-tail-of-llm-assisted-decompilation/), 16 February 2026, verification safeguards and harder remaining functions.
[^8]: Chris Lewis, [Decompiling a Nintendo 64 Game in 84 Days](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/), 26 August 2026, Snowboard Kids workflow, compiler analysis, expert contributions, and further documentation work.
[^9]: [GoldenEye PC Port README](https://github.com/jkdansereau/goldeneye-pc-port), AI disclosure and native-port scope.
[^10]: [Jet Force Gemini Recomp README](https://github.com/TK22-26/JetForceGemini-Recomp), AI disclosure and validation scope.
[^11]: [Pilotwings 64 recomp README](https://github.com/danielgomesvieira2000/pilotwings-64-recomp), AI disclosure and credited foundations.
[^12]: [Ogre Battle 64 recomp README](https://github.com/lfarroco/ogre-battle-64-recomp), AI disclosure, banks, and RSP build pipeline.

[^13]: [REA README](https://github.com/isTurn/REA) and [installation guide](https://github.com/isTurn/REA/blob/main/docs/installation.md), agent registration and native analysis providers.
[^14]: [REA raw-binary guide](https://github.com/isTurn/REA/blob/main/docs/raw-binary.md), supported processor families, little-endian languages, and excluded big-endian targets.
[^15]: [decomp.wtf README](https://github.com/i12bp8/decomp.wtf), discontinuation notice, final version, platform support, Demo Quest 64, agent connection, and export behavior; checked 23 October 2026.

[^16]: [RetroReversing decompdecomp README](https://github.com/RetroReversing/decompdecomp), macOS source installation, in-app agents, migration from the archived commands, and project export.

[^17]: [Official Codex quickstart](https://learn.chatgpt.com/docs/quickstart), desktop setup, selecting Codex, signing in, and choosing a local project folder; checked 23 October 2026.
[^18]: [Claude Code desktop documentation](https://code.claude.com/docs/en/desktop), the Code tab, local sessions, file references, and attachments; checked 23 October 2026.
