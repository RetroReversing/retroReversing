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
updatedAt: '2026-10-24'
excerpt: 'Start N64 matching decompilation with free local matches in decompdecomp, then use a copyable agent prompt and compare verified model results and costs.'
---

# AI Assisted N64 Decompilation Tutorial
**Start with your own N64 ROM in decompdecomp.** Its local autopilot can find matches without spending AI tokens. When that pass finishes, use Codex or Claude Code and the starter prompt below for harder functions. Your first goal is a verified checkpoint, not a finished PC port.

You can also give the ROM directly to an agent and let it handle setup. The model comparison helps decide where to spend your next session; our Turok and V-Rally results show what each path produced.

## Start in the App Without AI Tokens
[Install the RetroReversing decompdecomp fork](https://github.com/RetroReversing/decompdecomp#install), open the app, and select **New project**. Supply your own ROM, confirm that you own it, choose the compiler when prompted, and select **Start decompiling**. The screenshot shows the V-Rally import screen just before that step.

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-new-project.png" alt="decompdecomp's New project screen with a V-Rally N64 ROM selected, the compiler menu, and the Start decompiling button" width="1445" height="951" size="document" title="Start with the local app" caption="Select your ROM and compiler, then let the automatic matching pass run before starting an AI agent." %}

Let the app import the game and finish its **free matches** pass before opening **Agents & models**. Its local tools draft C and check it against the game's bytes; this stage uses **zero AI model tokens**. It still takes computer time, and setup may need free tool downloads or your explicit acceptance of a proprietary compiler license. Record the matches and save or export a checkpoint. Then start an agent for the functions the automatic pass could not match. The amount of free progress varies by game and compiler [^16].

In our separate app run on V-Rally, the automatic draft pass reported **469 matches**. The project overview then showed **551 of 2,101 functions matched**, or **5.26% of detected code**, with **zero agents started**. The other 82 matches came from the app's automatic reuse of matching code on identical functions. This screenshot is the result after the free local stage; it is a different run from the model sessions in the table below.

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-free-matches.png" alt="decompdecomp V-Rally project overview showing 551 of 2,101 functions matched, 5.26 percent of code, and zero agents working" width="1462" height="951" size="document" title="After the free matching pass" caption="V-Rally reached 551 matched functions, or 5.26% of detected code, before an AI agent was started." %}

If you prefer the agent to handle setup too, follow the prompt route below. Both routes use decompdecomp's matching engine; do not count the app's automatic matches as extra model-produced work.

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

Use RetroReversing's decompdecomp fork, main branch:
https://github.com/RetroReversing/decompdecomp
Read README and AGENTS.md, record the commit, OS, model and effort.
Preserve my ROM and existing projects. Reuse verified installed tools
and an existing checkpoint when available; otherwise create an isolated
workspace with its database parent directories. Disable windows, tray,
updates and agent discovery for isolated work. Ask me to accept any
required proprietary compiler license; do not accept it for me.

Use relevant existing game source, decompilation projects, symbol maps,
and documentation where available. First check local files and a targeted
reference search; avoid broad repository tours. Record what you reused
and distinguish source-assisted reconstruction from ROM-only recovery.

Budget this first session to 30 minutes including setup and verification.
Record start and deadline. Use one agent unless I request delegation.
Keep working while productive; a progress report is not a reason to stop.
Read only instructions and code needed for the current stage. Check an
unfamiliar API's signature and one real usage before calling it.
Keep output short, save detailed logs, and summarize long-running jobs
at meaningful checkpoints rather than repeatedly polling the model.

Identify ROM byte order, region, revision and hashes. Import, then check
that discovery reaches the main CPU program rather than only its loader.
Keep compiler detection and coverage provisional until supported by evidence.
If blocked, preserve the error and failing config. Investigate at most
10 minutes or five hypothesis-driven attempts, whichever comes first.
Never bypass validation or change target bytes to make import succeed.

After import, run the free automatic draft/matching pass first.
Use its results to guide compiler checks and choose a small near match.
Explain one mismatch, test one source/type hypothesis, then check related
functions if the pattern works. Compile/judge each candidate locally.
Cache attempted source/context/settings/target combinations and skip exact
repeats. Bound searches; change strategy if they stop producing improvement.
Preserve best candidates and source formatting. Keep targets and judge fixed.

Batch function checks and save accepted sources with their provenance.
Do not rebuild the complete ROM after every small match. Use full builds
at integration checkpoints and at the end; reserve time based on observed
build duration. If verification cannot finish within budget, report pending
work explicitly. Stop matching workers at the deadline.

Report verified C functions/bytes, coverage with its denominator, remaining
assembly, full original-ROM verification, setup/matching/build time, token
usage and cost if available, and the saved checkpoint's next step.
Drafts, isolated matches, and assembly-backed rebuilds are different results.
{% endcapture %}
{% include copy-prompt.html id="n64-starter-prompt" text=n64_starter_prompt %}

The prompt asks the agent to do the setup and first matching attempts. A successful first session can also uncover an unsupported format or compiler; record that obstacle rather than treating a plausible C draft as finished work. For a browser-only exercise without a ROM, use [the one-function exercise](#other-ways-to-get-started).

---
## Which Model Should You Start With?
**GPT-6.1 Sol is our practical starting choice.** It produced useful ROM-only checkpoints and performed well in our most comparable matching test. Sonnet 5.5 at low effort also delivered a strong fresh-project result in Claude Code. These are observations from our sessions, not a universal model ranking.

Use the two comparisons below for different decisions: **V-Rally tests starting a new project; Turok tests continuing a prepared checkpoint.** All reported C results passed a complete byte-identical cartridge rebuild. An identical rebuild still uses assembly for functions that have not been recovered.

### Starting a New Game With V-Rally
All three sessions used the same European V-Rally ROM and worked **without existing game source**. They covered setup, import, automatic drafting, matching, and export.

The main outcomes were:

Model | Verified matching C | Recorded wall time | Cost or allowance evidence
---|---|---|---
Kimi K2.8 Preview High | None observed; stopped during import | About 18 minutes | Full five-hour allowance consumed on the participant's $20/month Plus plan
GPT-6.1 Sol through Abacus.ai, effort unrecorded | 603 functions / 34,164 bytes / 6.036% | About 62 minutes | About 2,000 platform units on a $10/month plan; 3,000 premium-model cap
Claude Sonnet 5.5, low effort | 645 functions / 35,868 bytes / 6.337% | About 43 minutes | Participant reported $2.70; approximately $1.70 Standard API equivalent

**Sonnet produced the largest verified fresh-project checkpoint**, while Sol also completed the workflow successfully. Kimi exhausted its available allowance before producing verified C. However, Kimi encountered an importer defect, Sol worked around it, and Sonnet used a later revision containing the fix. That difference prevents treating the results as a clean test of matching ability.

The practical lesson is to **use the fixed tool revision and limit import troubleshooting before spending more allowance**. Once import works, run the automatic draft pass before asking a model to tackle the remaining functions. Much of both successful results came from local drafting and compiler checks, not functions individually written by the model.

Abacus platform units, Kimi allowance, reported session spending, and API-equivalent prices are different measurements. The runs also had different elapsed times. Treat this table as evidence about the complete getting-started experience, rather than a cost-per-token leaderboard.

---
### Continuing From the Same Turok Checkpoint
This is the closer model comparison. Each run started from **1,763 verified C functions / 56.100% of detected code**, with **original source, headers, and object files available**. Each had 30 minutes for matching, followed by verification. Later agents did not consult the other comparison runs' findings.

The verified gains and estimated whole-session costs were:

Model and effort | New C functions | New matching bytes | Final coverage | Standard API-equivalent cost
---|---|---|---|---
GPT-6.1 Sol, high | 29 | 8,396 | 57.441% | $2.63
GPT-6.1 Sol, low | 6 | 2,560 | 56.509% | $2.21
GPT-6 Astra, high | 22 | 7,732 | 57.335% | $18.78
GPT-6 Luna, low | 1 | 472 | 56.175% | $0.35
GPT-6 Luna, high | 0 | 0 | 56.100% | $0.36

**Sol high gave the best measured progress per dollar in this comparison.** It produced seven more functions than Astra high, but only 664 more code bytes, at about 86% lower estimated cost. Both function count and code size matter. Luna low was cheapest overall, but made little progress in the half hour. Luna high added no matches: its source-mapping probes failed the fixed comparison, and the unchanged baseline still rebuilt byte-identically. Increasing Luna's effort did not improve the result in these two trials; this does not establish a general high-versus-low rule.

Sol low added six functions by combining existing constant references with original module-level data declarations. All additions passed independent compilation and the complete cartridge rebuild, with no rejections or fallbacks. From the same starting point, **Sol high produced about 3.3 times as many matching bytes for roughly 19% more estimated whole-session cost**. This supports high effort for this particular workload, while remaining a single trial per setting.

These were single trials with different agent decisions and search strategies. The result supports trying Sol high for another bounded session; it does not establish that Astra or Luna will perform the same way on another game. The earlier Sol low continuations below used different checkpoints; the new 56.100% run is the direct low-versus-high comparison.

---
## What Should Your First Session Produce?
The starter prompt allows **30 minutes including setup**. Our Turok continuation tests allowed **30 minutes of matching after setup**, with verification afterward. Those budgets should not be compared as if they were the same.

Ask for a small, resumable result:
* **A working import** - Confirm that discovery reached the main game program, not just its loader.
* **Real matches** - Count C functions and bytes accepted by the actual compiler comparison.
* **A verified checkpoint** - Record which C functions participated in the build and how much assembly remains.
* **A next step** - Save the workspace, tool revision, compiler settings, best attempts, and unresolved problem.

Our initial **GPT-6.1 Sol Turok run reached 419 matching functions, about 4.2% of detected code, roughly 30 minutes after the first import**. The complete cartridge check finished about nine minutes later. It included tool repairs and is an example of elapsed work, not a prediction of how quickly a game can be completed.

**A plausible C listing is not a match.** Matching decompilation means that C compiles to the original bytes. A static recompilation translates machine instructions for another platform; see the [N64 recomp guide](/how-to-create-an-n64-recomp) for that route.

---
## Spend Less Time and Allowance
The biggest savings in our sessions came from reducing repeated work, not simply choosing the cheapest model. These are practical changes supported by the trials; we have not measured a combined savings percentage:
* **Reuse setup and references** - Keep a working toolchain, validated import, and resumable checkpoint. Relevant source, types, and maps can avoid rediscovering known facts; record when they contribute.
* **Let local tools do routine work** - Run autopilot before paid matching. Ask the model to diagnose a mismatch and design a bounded batch, then let local compiler checks test candidates without a model call for every variant.
* **Avoid duplicate attempts and context** - Save source, context, settings, and target hashes with each attempt. Reuse compact notes instead of rereading whole transcripts, and skip identical combinations. Short logs and fewer polling turns reduce repeated context processing.
* **Build at useful checkpoints** - Recheck each changed function, but group accepted changes before a full ROM build. Keep the final full-cartridge check: skipping it inflated some apparent results. Reserve time for the linker rather than spending the entire budget on matching.
* **Choose effort by verified output** - In our shared-checkpoint trial, Sol high produced about 3.3 times the matching bytes of Sol low for 19% more estimated cost. Luna was cheap but added little; lower token prices alone did not buy faster progress.
* **Stop unproductive searches** - Put limits on import debugging and candidate searches. Preserve the best result and change hypotheses when attempts stop improving. A fixed time budget should not become an instruction to consume the remaining allowance without useful work.

These controls are included in the starter prompt. Existing source is welcome in ordinary projects; we restricted it only for the ROM-only experiments reported here.

---
## The Findings That Changed Our Workflow
### Existing Source Changes the Task
Giving an agent original game source is a major advantage. In our Turok continuations, Sol low moved **9.878% to 38.951%**, then Astra low moved **38.951% to 56.100%**. These were source-assisted reconstruction runs, including reuse of original C, rather than ROM-only decompilation.

Types and build configuration mattered as much as function bodies. For example, the supplied source had a particle limit changed from 128 to 2. Restoring the original limit corrected structure layouts and unlocked further exact matches. Having source does not guarantee that its current configuration matches the retail ROM.

### Repeated Small Mistakes Can Explain Many Failures
Both games exposed drafts that omitted arguments passed through unchanged in CPU registers. Recognizing that pattern let agents fix families of wrappers instead of guessing at each function independently. Incorrect pointer types and structure layouts produced similar repeated failures.

Ask the agent to explain the first concrete mismatch, test one hypothesis, and reuse a proven pattern only after checking each new candidate. Broad brute-force searches often produced little progress.

### The Complete ROM Check Matters
An isolated function match can still fail when integrated. Sol's source-assisted Turok pass initially appeared to reach **45.213%**, but data-placement checks rejected 115 candidates. The retained **38.951%** selection rebuilt correctly. A separate ROM-only run excluded five jump-table candidates after the complete image differed.

Keep target bytes, compiler settings, and verification rules fixed. Ask for both **accepted C coverage** and **the complete original-cartridge comparison**. An expanded analysis image is a different target, and a cartridge rebuilt mostly from assembly is not a complete decompilation.

### Preserve Formatting While Diagnosing IDO Matches
In one controlled IDO example, preserving whitespace matched; collapsing it changed instruction order and broke the match. The exact compiler mechanism is unconfirmed. A wider 22-function gain also included declaration fixes, so it cannot all be credited to line breaks.

The practical precaution is simple: **save the original candidate and recheck after formatting**. The [decompdecomp IDO guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/ido.md) records the observation and how to test it.

---
## What Did the Turok Sessions Cost?
**These are API-equivalent estimates, not Codex subscription charges or measured subscription allowance usage.** They apply published Standard rates to recorded token usage. Whole-session estimates include setup, matching, verification, and reporting by the agent [^19] [^20].

The nine completed trials measured so far were:

Model and effort | Existing source available? | Verified coverage change | 30-minute matching estimate | Whole-session estimate
---|---|---|---|---
GPT-5.6 Terra, medium | No | 4.171% -> 4.467% | $3.20 | $4.31
GPT-6.1 Sol, low | No | 4.467% -> 9.878% | $3.50 | $6.90
GPT-6.1 Sol, low | Yes | 9.878% -> 38.951% | $2.76 | $3.51
GPT-6 Astra, low | Yes | 38.951% -> 56.100% | $17.91 | $22.61
GPT-6 Luna, low | Yes | 56.100% -> 56.175% | $0.26 | $0.35
GPT-6 Astra, high | Yes | 56.100% -> 57.335% | $14.67 | $18.78
GPT-6.1 Sol, high | Yes | 56.100% -> 57.441% | $1.91 | $2.63
GPT-6 Luna, high | Yes | 56.100% -> 56.100% | $0.24 | $0.36
GPT-6.1 Sol, low | Yes | 56.100% -> 56.509% | $1.59 | $2.21
Total spending estimate across these trials | Mixed | Alternative branches, not additive progress | $46.04 | $61.64

Coverage uses a fixed **626,012-byte detected-code denominator**, not the cartridge size. The final five model rows are alternative continuations of the same checkpoint; do not add their gains together.

**How we estimated cost:** count each usage event once, price cached reads separately, and include reasoning in output without charging it twice. Most input was reused cached context. We applied applicable long-context rates; recorded cache-write counts were zero. If uncached tokens instead incurred default cache-write rates, the combined estimate would rise by about $1.49. The matching-window split uses response timestamps and is approximate. Local CPU time, this parent chat, subscription fees, taxes, and separately billed tools are excluded.

The agent tool advertised Priority service. At published Fast/Priority-equivalent rates, these whole sessions would be roughly **$123**, rather than $62. Neither estimate reconstructs a subscription bill [^19] [^20].

For Sonnet's V-Rally session, repeated transcript records were deduplicated by message ID. Published rates applied to ordinary input, cache writes, cached reads, and output gave approximately **$1.70 API equivalent**, separately from the participant's **$2.70 reported cost**. The archive does not explain that difference [^21].

---
## Check the Agent's Output Before Continuing
Use the compiler and build tools as the judge. Keep the original ROM private and unchanged, and save a checkpoint before trying another model.

A useful review checks:
* **The right input** - ROM region, revision, byte order, and hash. A filename extension does not establish byte order.
* **The right code** - The C candidate is selected in the build, rather than silently replaced by original assembly.
* **The right comparison** - The original cartridge passes its full byte comparison, with any rejected C selections reported.
* **Honest scope** - Coverage describes detected candidate code, not a validated percentage of the entire game.

If a candidate compiles but differs, ask for one bounded investigation:

```text
Explain the first meaningful difference between this candidate and the target.
Propose one small source or type change and predict its effect.
Keep the target bytes, compiler settings, and judge fixed.
Compile and compare, preserving the previous best candidate.
Do not claim success until the actual comparison passes.
Confirm that the accepted C is selected in the complete verification build.
```

For an existing decompilation, follow its own agent and contribution rules. [Body Harvest](https://github.com/jaytheham/body-harvest-decompilation) and [Snowboard Kids 2](https://github.com/cdlewis/snowboardkids2-decomp) provide useful examples [^2] [^3] [^4]. Chris Lewis's [account of completing Snowboard Kids](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/) explains why matching, cleanup, naming, and understanding remain separate work [^8].

---
## Other Ways to Get Started
**Try one function in the browser:** [decomp.me](https://decomp.me) provides a target, candidate C, context, and compiler settings in a scratch. Fork a short function, ask the agent for one small change, and run the real comparison. Its difference score falls toward zero as the candidate improves [^1].

**Use the app first:** follow [the no-token app walkthrough](#start-in-the-app-without-ai-tokens) above, then connect an agent after the local pass finishes [^16].

**Use REA for analysis:** [REA](https://github.com/isTurn/REA) connects agents to supported Ghidra, Hopper, or IDA analysis. Its documented raw-binary loader does not support big-endian MIPS N64 ROMs, so use a supported import path rather than assuming generic Ghidra support makes the wrapper suitable. Analysis output still needs compiler verification for a matching decompilation [^13] [^14].

<!-- cspell:disable-next-line -->
**Avoid archived setup instructions:** decomp.wtf was discontinued at version 0.10.6. Its old `decomp connect` workflow is not the current fork's agent setup. Use the continuing decompdecomp instructions for a new project [^15] [^16].

For ROM mapping and MIPS background, continue with the [N64 reversing introduction](/N64Reversing). Keep the first task small, save verified progress, and choose the next model based on the specific problem left to solve.

---
# References
[^1]: [decomp.me FAQ](https://www.decomp.me/faq) and [New Scratch page](https://www.decomp.me/new), scratch contents, forking, scoring, compiler settings, and stored submissions.
[^2]: [Body Harvest README](https://github.com/jaytheham/body-harvest-decompilation), supported ROM hashes, Windows/Linux builds, and non-matching configurations.
[^3]: [Body Harvest agent instructions](https://github.com/jaytheham/body-harvest-decompilation/blob/master/AGENTS.md), compiler settings, candidate selection, reference searches, and whole-ROM verification.
[^4]: [Snowboard Kids 2 agent instructions](https://github.com/cdlewis/snowboardkids2-decomp/blob/main/CLAUDE.md) and [README](https://github.com/cdlewis/snowboardkids2-decomp), isolated matching environments, integration checks, and contribution work.
[^8]: Chris Lewis, [Decompiling a Nintendo 64 Game in 84 Days](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/), 26 August 2026, Snowboard Kids workflow, compiler analysis, expert contributions, and further documentation work.

[^13]: [REA README](https://github.com/isTurn/REA) and [installation guide](https://github.com/isTurn/REA/blob/main/docs/installation.md), agent registration and native analysis providers.
[^14]: [REA raw-binary guide](https://github.com/isTurn/REA/blob/main/docs/raw-binary.md), supported processor families, little-endian languages, and excluded big-endian targets.
[^15]: [decomp.wtf README](https://github.com/i12bp8/decomp.wtf), discontinuation notice, final version, platform support, Demo Quest 64, agent connection, and export behavior; checked 23 October 2026.

[^16]: [RetroReversing decompdecomp README](https://github.com/RetroReversing/decompdecomp), macOS source installation, in-app agents, migration from the archived commands, and project export.

[^17]: [Official Codex quickstart](https://learn.chatgpt.com/docs/quickstart), desktop setup, selecting Codex, signing in, and choosing a local project folder; checked 23 October 2026.
[^18]: [Claude Code desktop documentation](https://code.claude.com/docs/en/desktop), the Code tab, local sessions, file references, and attachments; checked 23 October 2026.

[^19]: [OpenAI API pricing](https://developers.openai.com/api/docs/pricing), Standard and Fast token rates, cache-write rates, and Priority/Fast naming; checked 24 October 2026. Costs in this article are estimates applied to local agent usage records, not subscription charges.
[^20]: OpenAI model pricing pages for [GPT-5.6 Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [GPT-6 Astra](https://developers.openai.com/api/docs/models/gpt-6-astra), and [GPT-6 Luna](https://developers.openai.com/api/docs/models/gpt-6-luna), cached-input and output rates and applicable long-context multipliers; checked 24 October 2026.

[^21]: [Anthropic Sonnet 5.5 model documentation](https://platform.claude.com/docs/en/models/sonnet-5-5/overview), Standard input, output, five-minute cache-write, and cache-read pricing; checked 24 October 2026. The API-equivalent estimate uses deduplicated supplied session usage, separately from the participant-reported $2.70 cost.
