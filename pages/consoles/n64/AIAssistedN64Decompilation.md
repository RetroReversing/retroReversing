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
updatedAt: '2026-10-25'
excerpt: 'Start N64 matching decompilation with free local matches in decompdecomp, then connect coding agents and compare verified model results and costs.'
---

<link rel="stylesheet" href="{{ "/public/css/decomp-status.css" | relative_url }}">

# AI Assisted N64 Decompilation Tutorial
**Start with your own N64 ROM in decompdecomp.** Its local autopilot can find matches without spending AI tokens. When that pass finishes, connect a coding agent in the app to work on harder functions. Your first goal is a verified checkpoint, not a finished PC port. Our Turok and V-Rally results help set expectations for model progress and cost.

## Which decompdecomp Version Should You Use?
There are two repositories for the same app: [n-delic's upstream project](https://github.com/n-delic/decompdecomp) and [the RetroReversing fork](https://github.com/RetroReversing/decompdecomp). Both provide the matching workflow described here: import a game you own, let local tools find easy matches, then connect coding agents for the remaining work.

| Version | What it currently adds or supports | Choose it when |
|---|---|---|
| [Upstream](https://github.com/n-delic/decompdecomp) | The original project and its standard releases; its current install guide covers Linux and Windows. | You want the upstream repository and are using its supported desktop platforms. |
| [RetroReversing fork](https://github.com/RetroReversing/decompdecomp) | Upstream's app plus native macOS support, including relocatable `.app` bundles for Intel and Apple Silicon with Python and dependencies included. The release bundle can be moved to `/Applications`; a source installer is also documented. | You are on macOS, or want to try changes maintained in the RetroReversing fork. |

The fork is based on n-delic's project and preserves its credits and licenses. We intend to propose useful changes back to upstream as reviewable pull requests. The macOS app-bundle work is already merged into the RetroReversing fork in [PR #5](https://github.com/RetroReversing/decompdecomp/pull/5); as of 25 October 2026, upstream's install instructions still list Linux and Windows, so do not assume that feature is available there. Check both repositories for current release and contribution status. For Linux or Windows, upstream is the straightforward default; for macOS, use the RetroReversing fork for its app bundle.

## Start in the App Without AI Tokens
[Install decompdecomp](https://github.com/RetroReversing/decompdecomp#install) using the version that fits your platform, open the app, and select **New project**. Supply your own ROM, confirm that you own it, choose the compiler when prompted, and select **Start decompiling**. The screenshot shows the V-Rally import screen just before that step.

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-new-project.webp" alt="decompdecomp's New project screen with a V-Rally N64 ROM selected, the compiler menu, and the Start decompiling button" width="1445" height="951" size="document" title="Start with the local app" caption="Select your ROM and compiler, then let the automatic matching pass run before starting an AI agent." %}

Let the app import the game and finish its **free matches** pass before opening **Agents & models**. Its local tools draft C and check it against the game's bytes; this stage uses **zero AI model tokens**. It still takes computer time, and setup may need free tool downloads or your explicit acceptance of a proprietary compiler license. Record the matches and save or export a checkpoint. Then start an agent for the functions the automatic pass could not match. The amount of free progress varies by game and compiler [^16].

In our separate app run on V-Rally, the automatic draft pass reported **469 matches**. The project overview then showed **551 of 2,101 functions matched**, or **5.26% of detected code**, with **zero agents started**. The other 82 matches came from the app's automatic reuse of matching code on identical functions. This screenshot is the result after the free local stage; it is a different run from the model sessions in the table below.

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-free-matches.webp" alt="decompdecomp V-Rally project overview showing 551 of 2,101 functions matched, 5.26 percent of code, and zero agents working" width="1462" height="951" size="document" title="After the free matching pass" caption="V-Rally reached 551 matched functions, or 5.26% of detected code, before an AI agent was started." %}

---
## Understanding the Compiler
A compiler turns C into the machine instructions executed by the N64. Matching decompilation runs that process again: your recovered C must produce the same bytes. **The compiler version and its flags matter as much as the C source.** A modern compiler can produce working code that fails the original-byte comparison.

The app's compiler dropdown gives these typical usage patterns. They help choose a starting point; matching evidence determines the settings for your game [^33]:

Compiler | What the name means | Why it matters
---|---|---
IDO 5.3 | Version 5.3 of SGI's C compiler toolchain | Typically used by early N64 games (1996-97)
IDO 7.1 | A later version of the IDO toolchain | Typically used by most later first-party N64 games
KMC GCC 2.7.2 | The N64-era KMC variant of GCC 2.7.2 | Used by many third-party N64 games, including our V-Rally project

**Flags change the recipe.** Settings such as `-O2` control optimization; `-G0` and `-G8` affect small-data addressing. Debug options such as `-g` can also affect generated code with historical compilers. A mismatch can therefore come from compiler settings as well as source code.

### Compilers Missing From the N64 Dropdown
**decompdecomp does not include every known N64 compiler.** Its built-in ROM workflow currently offers the three choices above. Retail games also used other GCC versions and vendor builds; choosing KMC GCC 2.7.2 is not an exact substitute for all of them.

Documented examples outside those built-in choices include:

Toolchain | Retail-game evidence
---|---
GCC 2.8.1, Paper Mario variant | The [Paper Mario team maintains a patched GCC 2.8.1](https://github.com/pmret/gcc-papermario) for matching the game [^35].
SN Systems SN64 GCC 2.7.2 | The [Excitebike 64 matching project](https://github.com/chasmlol/excitebike64) documents builds 0006 and 0001 for its loader, including supported retail cartridge versions [^36].
SN Systems SN64 GCC 2.8.1 | Excitebike 64 uses it for game code. The [Turok 2 project](https://github.com/mgrz18/turok2-decomp) also reports confirming it on eight engine functions with `-O2` [^36] [^37].

**Related releases add more variants.** Ocarina of Time's iQue release uses EGCS for selected files. That is evidence from a later iQue release, rather than an original N64 cartridge [^38].

If a game's actual compiler is missing, correct C may still fail to match with every offered choice. Check its existing decompilation project's toolchain before spending more agent time changing the source. A community project using its own build may support compilers beyond the app's built-in ROM dropdown.

---
### How Detection Works
The app builds its compiler evidence in stages [^34]:
* **An initial guess** - N64 import looks for assembly patterns associated with IDO or GCC. For example, their use of unconditional branches and jumps can differ. This chooses a starting point; it does not prove a compiler version or flag set.
* **Real compilation checks** - Candidate C is compiled and compared with the target bytes. The app can test installed compilers against small drafts; during matching, agents can try alternatives and search flags. A successful comparison provides stronger evidence than the initial guess.
* **A compiler map** - Matched functions and background compiler surveys reveal ranges that may need different settings. Neighbouring functions help establish whether a setting applies to a range rather than one unusual function. The app guards existing matches against compiler changes; suggestions without enough neighbouring evidence can wait for your review.

{% include article-figure.html src="/public/images/n64/decompdecomp-compiler-detection.webp" alt="decompdecomp compiler summary showing IDO 5.3, twelve parts with another compiler, and two changes waiting for review" width="1175" height="257" size="document" title="Compiler evidence can change as matching progresses" caption="The project uses IDO 5.3 as its main compiler, with overrides for 12 code ranges. Two suggested changes are waiting for review." %}

**What should you do?** Click **Look at it** to review pending suggestions. The screenshot's **12 parts** means code ranges with compiler overrides, which may differ by version or flags; it does not mean 12 distinct compiler products. **Two changes waiting** means suggestions awaiting review. Start with the detected settings and let matching evidence guide changes. Proprietary toolchains require your acceptance before installation [^16].


---
### Reading a Compiler Suggestion
**Same compiler, different optimization.** Both suggestions below keep IDO 5.3 but propose `-O3`. In the first, the agent reports an exact match at `-O3`, while `-O1` and `-O2` leave nonzero difference scores. Those scores measure mismatch, not a percentage of the game recovered; zero represents an exact match in that comparison.

{% include article-figure.html src="/public/images/n64/decompdecomp-compiler-suggestions.webp" alt="Two pending IDO 5.3 compiler suggestions proposing O3, with exact-match notes, neighbour checks waiting, Use buttons for one part, and Not now buttons" width="553" height="570" size="document" title="An exact function match can suggest a compiler setting" caption="The candidates match at O3, but the range checks are still waiting for neighbouring evidence. Each Use button targets one part of the project." %}

**Why is it still waiting?** A setting that reproduces one function does not establish how the surrounding code was compiled. Here, **no neighbour settled yet** means the range check lacks a confirmed neighbouring example. Further agent matches may resolve it, or you can review and decide. Read the agent's explanation alongside the compiler-backed evidence [^34].

**What does the button change?** **Use ... for 1 part** applies the proposed settings to that code range, rather than changing the whole game's compiler. `-O3` is the optimization level, `-mips2` selects an instruction-set target, and `-G0` controls small-data addressing. **Not now** leaves the suggestion unapplied. A successful match is evidence that the settings reproduce those bytes; several settings can sometimes reproduce the same function.

---
## Start Agents in decompdecomp
The free pass has done the easy work. Give the remaining functions to a coding agent.

**Connect your agent.** Use Codex CLI or Claude Code with your signed-in account, or enter a provider's API key in **Agents & models**. Installation instructions are below.

**Start with one worker.** Open your game and click **Start agents**. Choose an agent, model, and effort. Set **How many** to **1**, then select **Start**.

**Start with the cheapest model.** After free autopilot, use **Luna or Haiku** to collect easier remaining matches. Let it work and watch for the app's [suggestion to move up](#when-to-move-to-a-more-expensive-model) before switching to a more expensive model. Keep the same project so the next model can reuse saved attempts and notes.

{% include article-figure.html src="/public/images/n64/decompdecomp-start-agents.webp" alt="decompdecomp Start agents panel with Codex CLI selected, model and effort menus, five workers, and eight functions per session" width="1193" height="926" size="document" title="Configure your agents" caption="How many controls parallel workers. Functions per session controls how often each worker starts a fresh conversation. The selected model and five-worker count are examples, not recommendations." %}

**Watch the map turn green.** Each worker writes candidate C, then the app compiles it and checks the bytes against your ROM. Differences go back to the worker for another attempt. Verified matches are saved automatically [^16].

**Keep an eye on usage.** Model calls use your provider's paid allowance or API balance. Check its usage page and export a checkpoint before moving the project.

**Use your subscription first.** For regular decompilation work, our first choice is Codex CLI with ChatGPT sign-in or Claude Code with an eligible Claude subscription. The monthly fee includes an allowance, so repeated matching attempts can cost less than paying for every model call through an API. This is especially useful if you already subscribe: work within the included allowance adds no separate API charge [^25] [^26].

**Watch the limits.** Subscriptions have usage limits, and additional credits or extra usage can cost more. Sign in with your subscription account to use its allowance; supplying an API key uses API billing. Savings depend on how often you work and which model you use. The API-equivalent costs below are comparison estimates, not subscription bills.

---
### When to Move to a More Expensive Model
**Wait for a suggestion like this before stepping up.** The app can flag when a cheaper model is spending many compilation attempts on few matches, while another model is making better progress on the project.

{% include article-figure.html src="/public/images/n64/decompdecomp-model-upgrade-suggestion.webp" alt="decompdecomp message reporting 9,524 Luna compiles for 19 matches and about 18 compiles per match for Sol low, suggesting fewer Luna helpers" width="553" height="95" size="document" title="The app's cue to move up a model" caption="Luna is still finding matches, but the recorded Sol low workers need far fewer compilation attempts per match." %}

**Read the numbers.** Here Luna made **9,524 compiles for 19 matches**, about **501 compiles per match**. Sol low needed about **18**. This suggests the remaining work may suit Sol better. Compilation counts are local build attempts, not model-call counts or dollar costs.

**Move up one tier.** Reduce or stop the cheaper workers and try the next model, such as Luna to Sol or Haiku to Sonnet. Compare its actual matches and spending before moving higher again. The exact message depends on the project's recorded worker history; this example already has results from both Luna and Sol. Keep your spending limit in place while waiting for useful evidence. We have not measured a complete cheap-first strategy against using one stronger model throughout.

---
### Install OpenAI Codex CLI
Codex CLI is the terminal program decompdecomp launches for OpenAI models. Select **Codex CLI** in **Start agents** and use **Install it for me**, or run the official installer below on macOS or Linux:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Open a new terminal, run `codex`, and follow the sign-in prompts. You can also use `codex login`; check installation with `codex --version`. The [official Codex CLI guide](https://learn.chatgpt.com/docs/codex/cli) includes Windows installation [^22].

**Subscription budget.** ChatGPT Plus is about **$20/month**, with Codex CLI access and included Sol/Luna usage. Pro starts at **$100/month**, with higher-priced tiers for heavier use. Available models and limits depend on your account; check the model picker and usage dashboard [^25].

**Paste the exact model name.** In **Start agents**, select **Codex CLI**, choose **Another model...**, and paste one of the identifiers in the table below. Set reasoning separately with the **Effort** menu; the model field should contain just the identifier, without a suffix such as `#low`. Availability depends on your signed-in account [^20].

{% include article-figure.html src="/public/images/n64/decompdecomp-codex-custom-model.webp" alt="decompdecomp Codex CLI launcher with Another model selected, an empty model-name field, Low effort, and one worker" width="560" height="579" size="document" title="Choose a Codex model by name" caption="Paste the model identifier into the field below Another model, then choose effort and start your worker. Functions per session is adjustable; the screenshot shows 10." %}

For comparing the current model families and Terra from our earlier trials, these are Standard API prices in USD per **one million tokens**, checked 25 October 2026. Input is what the model reads; output is what it generates. Cached input is reused context. These are API rates, not extra charges on top of included subscription usage [^19]:

Model | Input | Cached input | Output | Recommended
---|---:|---:|---:|---
GPT-6 Luna (`gpt-6-luna`) | $0.10 | $0.01 | $0.50 | **Try first for easier matches**
GPT-6.1 Sol (`gpt-6.1-sol`) | $2 | $0.10 | $10 | **Step up for harder work; best measured value**
GPT-5.6 Terra (`gpt-5.6-terra`) | $2 | $0.20 | $12 | Earlier tested model; higher rates than Sol [^20]
GPT-6 Astra (`gpt-6-astra`) | $10 | $1 | $50 | Higher cost; try when Sol stalls

Luna costs about one-twentieth of Sol at these base rates. Sol costs about one-fifth of Astra. Terra is included for completeness, but its current cached-input and output rates are higher than Sol's. Our Luna trials began at an already-developed Turok checkpoint and produced little progress; they do not test how much easier work Luna could collect at the start. Actual session cost depends on retries, context, and output, including reasoning. Cache writes, long contexts, and faster service modes can add charges; the [OpenAI pricing page](https://developers.openai.com/api/docs/pricing) has the full rate card.

---
### Install Anthropic Claude Code
Claude Code is the terminal agent for Claude models. Select **Claude Code** in **Start agents** and use **Install it for me**, or run the official installer below on macOS or Linux:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Open a new terminal, run `claude`, and complete browser sign-in. Check installation with `claude --version`. The [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) includes Windows instructions and supported account types [^23].

**Subscription budget.** Claude Pro is about **$20/month** when billed monthly, or roughly **$17/month** with annual billing. Max starts at **$100/month** for more usage. Both include Claude Code, subject to their limits [^28].

The main Claude families below are sorted by Standard API price, in USD per **one million tokens**, checked 25 October 2026. Subscription availability varies; these prices help compare model costs rather than predict your monthly allowance [^27]:

Model | Input | Cached input | Output | Recommended
---|---:|---:|---:|---
Claude Haiku 5.5 | $0.10 | $0.01 | $0.50 | **Try a bounded first pass; see Haiku results below**
Claude Sonnet 5.5 | $2 | $0.10 | $10 | **Step up when Haiku stalls; tested here**
Claude Opus 5.5 | $4 | $0.20 | $20 | Twice Sonnet's base rates; untested here
Claude Fable 5.1 | $10 | $0.25 | $50 | Most expensive here; untested

Haiku's listed rates apply to prompts up to 100,000 tokens; longer prompts cost more. Cache writes and fast modes also affect billing. Fable may require separately paid usage credits even with a subscription, so check its label before starting workers. See [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing) and [Claude Code model access](https://code.claude.com/docs/en/model-config) [^27].

Return to decompdecomp and select **Installed it already? Look again** if needed. Choose your CLI, model, and effort, then start one worker. The app supplies the task and tool connection.


#### What Did Claude Match in V-Rally?
Our in-app V-Rally results show why price per token is only part of the value calculation. These are additional agent results, separate from the fresh-project Sonnet session compared later in the article. Rows are sorted by total reported cost [^32]:

Model label | App-reported matches | Reported total cost | Reported cost per match
---|---:|---:|---:
`claude-sonnet-5-5#low` | 6 | $2.48 | $0.41
Haiku (version and effort unrecorded) | 337 | $141 | $0.42

**Haiku delivered many more matches, but almost the same cost per match as Sonnet:** about **42 cents versus 41 cents**. Its lower token price did not translate into a lower observed cost per successful function. A cheap model is worth a bounded first pass, but watch what it actually spends to obtain matches.

The runs had different numbers of matches, and their starting checkpoints and runtimes were not recorded here. Sonnet's six-function sample is small, so this does not establish a model ranking. These are app-reported dollar figures; we have not established whether they represent API charges or token-based estimates for subscription use.

---
### Connect DeepSeek Through the API
DeepSeek works through decompdecomp's **API key** option, so there is no separate CLI to install. Create an account at the [DeepSeek platform](https://platform.deepseek.com), add credit, and create an API key. In **Agents & models**, select the DeepSeek preset or configure its OpenAI-compatible base URL as `https://api.deepseek.com`. Enter your key, choose a supported model, then return to **Start agents** and select **API key** [^29].

{% include article-figure.html src="/public/images/n64/decompdecomp-deepseek-api-setup.webp" alt="decompdecomp API model settings showing the DeepSeek provider, model field, API address, masked API key, and Save button" width="583" height="643" size="document" title="Connect your DeepSeek account" caption="Select the provider, enter your API key and model, then save the endpoint before starting agents." %}

For a fresh connection, DeepSeek currently documents the following model names. USD prices per million tokens are shown as **off-peak to peak** ranges, checked 25 October 2026 [^30]:

Model | Input | Cached input | Output | Suggested use
---|---:|---:|---:|---
DeepSeek Flash (`deepseek-flash`) | $0.15-$0.30 | $0.003-$0.006 | $0.60-$1.20 | Low-cost first pass
DeepSeek V4 Pro (`deepseek-v4-pro`) | $0.66-$1.32 | $0.022-$0.044 | $1.98-$3.96 | Try for harder work

Our South Park run used **`deepseek-flash`**, served at the time by **DeepSeek-V4.1-Flash-1017**. Peak rates are twice off-peak rates; check the [official rate card](https://api-docs.deepseek.com/quick_start/pricing/) for its UTC schedule and current prices.


#### What Do You Get for $10 With DeepSeek?
**Our $10 bought 56 matched functions in South Park**, out of **1,423 functions detected in the project** - about **3.9% of its function count**. This is a function-count share, not a percentage of code bytes recovered. We used DeepSeek Flash, version **DeepSeek-V4.1-Flash-1017**, through decompdecomp's API agent and consumed the full $10 balance.

That works out to about **$0.18 per matched function**, including spending on unsuccessful attempts. This is one game's result; function size and difficulty affect how far another $10 will go. See the [South Park comparison](#south-park-deepseek-and-luna-in-the-app) below for the Luna results and token figures.

---
### What the Agent Settings Mean
The launch panel above has two controls that affect how much work runs and how much context each agent carries:

* **How many** - The number of workers running at once. The screenshot selects five, each claiming different work. More workers can increase throughput, but also increase simultaneous model usage, compiler load, and the chance of hitting provider limits. Start with one.
* **Functions per session** - How much work a worker attempts before ending its conversation and starting a fresh one. The default is **8**. In the matching workflow, the CLI is instructed to complete eight claims that it has compiled; a claim can contain a batch of small functions. A compiled claim can count even when it does not match; repeated compiler checks on that claim do not each use another slot. This is not a promise of eight new matches. Five workers with this setting do not stop after 40 matches: the app starts further sessions while work remains [^24].
* **Lower or higher values** - A lower value resets conversation history more often, keeping context smaller but repeating session setup and guide-reading overhead. A higher value lets a worker carry more recent reasoning between functions, but its conversation can grow larger and cost more to process. Saved matches, best attempts, and project notes remain available after a reset. Leave the default at eight initially; changing it does not guarantee lower cost or better matches.

The agent is trying to reproduce the original machine code. A green match means the function compiled to the same bytes; it does not prove that its names or explanation capture the original developer's intent. Keep automatic matches separate from results produced by model agents when comparing progress.


---
## Reading Function Status and the Work Queue
Each square in the ROM map represents a function. Its colour shows the current state, while its detail view preserves attempts and notes [^39]:

Status | What it means
---|---
<span class="rr-decomp-status rr-decomp-status--todo">To do</span> | Unmatched, unclaimed, and no scored candidate is recorded. It may never have been attempted, but failed compilations or an inspection without a scored candidate can leave it this colour.
<span class="rr-decomp-status rr-decomp-status--tried">Tried</span> | A scored candidate exists, but it does not match. The app retains the best attempt for another worker to improve.
<span class="rr-decomp-status rr-decomp-status--close">Close</span> | A tried candidate is relatively near a match according to the difference score. This is a colour gradient, not proof that only a small amount of work remains.
<span class="rr-decomp-status rr-decomp-status--working">Working</span> | A worker currently holds the function's claim. It may already have earlier attempts; this does not mean it was previously untouched.
<span class="rr-decomp-status rr-decomp-status--matched">Matched</span> | Accepted C compiles to the target bytes under the project's comparison settings.
<span class="rr-decomp-status rr-decomp-status--polished">Polished</span> | Matched C has also been given more readable names, types, and comments, while preserving the match. Those interpretations can still need human review.
<span class="rr-decomp-status rr-decomp-status--aside">Set aside</span> | Excluded from ordinary matching work, for example because it looks like hand-written assembly or a fragment of another function. Its detail view explains why.
<span class="rr-decomp-status rr-decomp-status--not-c">Not C</span> | Agents from multiple models have agreed it should be set aside as code they cannot reproduce in C. This is a recorded assessment, not a mathematical proof; its page can reopen it.

**To do is not an audit of whether anyone has looked at a function.** Open its detail view to check attempts, errors, and notes. The overview's **to go** count is broader still: it includes remaining unmatched work, including previously tried functions.

### How the App Chooses the Next Function
The normal matching strategy aims for easier progress, with adjustments based on what the project has learned [^40]:
* **Avoid collisions** - Already matched, set-aside, and currently claimed functions are not handed out as ordinary new work. A worker normally finishes or releases its current claim before taking another.
* **Prefer useful wins** - Smaller functions generally come earlier. Functions with identical copies can get priority because one match may unlock several others for free.
* **Respect dependencies** - If one function needs another matched first, that prerequisite can move forward in the queue. Work still waiting on a dependency moves back.
* **Avoid repeating failures** - Recently released functions cool down, especially for the same worker or model family. Regions with poor matching results can be deprioritised while compiler or context problems are investigated.
* **Use model results** - Once enough project history exists, models with stronger matching results can receive work repeatedly abandoned by others. This uses observed success, rather than assuming that the most expensive model is always best.

A worker can also request a particular function, and other selection strategies exist. The map stays in ROM order for navigation; the work queue does not. A grey square beside green ones may therefore be waiting its turn rather than being missed.

---
## Model Results and Costs
These are different tests: **V-Rally** measures a fresh, ROM-only setup; **Turok** measures work on an existing project. All verified C results passed a byte-identical cartridge rebuild. Percentages refer to detected code, not the whole cartridge. Each result is a single trial, not a general model ranking.

### Fresh ROM: V-Rally
All sessions used the same European ROM without existing game source. Rows are ordered by the lowest numeric cost evidence available, but subscription allowances and API-equivalent estimates are different measures and are not directly comparable.

Model | Verified result | Time | Cost evidence | Recommended
---|---|---|---|---
Claude Sonnet 5.5, low | 645 functions / 35,868 bytes / 6.337% | About 43 min | $1.70 API equivalent; $2.70 reported [^21] | **Best measured value**
GPT-6.1 Sol via Abacus.ai, effort unrecorded | 603 functions / 34,164 bytes / 6.036% | About 62 min | About 2,000 of 20,000 monthly tokens used; $10/month plan, 3,000 premium-model cap | —
Kimi K2.8 Preview High | No verified C; stopped during import | About 18 min | Started at 100%; exhausted the five-hour allowance on a $20/month Plus plan | —

Sonnet produced the largest verified checkpoint at the lowest known run-specific cost. Kimi encountered an importer defect; Sol worked around it, and Sonnet used a later revision with the fix. This difference, along with the unequal run times, means the results compare the full setup experience rather than model matching ability alone.

### South Park: DeepSeek and Luna in the App
In our South Park project, **DeepSeek Flash spent the full $10 balance and produced 56 app-reported matches**. The model was **DeepSeek-V4.1-Flash-1017**. This is a participant-reported spending result, rather than an API-equivalent estimate. These are dashboard match counts; we have not independently checked a complete cartridge rebuild for this comparison.

Model | Connection | App-reported matches | Reported tokens per match | Recorded spending
---|---|---:|---:|---
DeepSeek Flash (V4.1-Flash-1017) | API | 56 | 6,646k (6.646 million) | **$10 spent**
`gpt-6-luna` | Codex | 22 | 27,383k (27.383 million) | Subscription usage; dollar cost unrecorded

**What did $10 buy?** In this run, **56 matches at about $0.18 each**, or **5.6 matches per dollar**. This includes allowance spent on unsuccessful attempts as well as successful matches. Function sizes and difficulty vary, so it is a concrete South Park data point rather than a guaranteed yield for another game [^31].

**DeepSeek used about one-quarter as many reported tokens per match**: Luna's figure was roughly **4.1 times higher**. DeepSeek also recorded more matches in this snapshot, making it a promising option for an inexpensive first pass. We did not record equal runtimes, starting checkpoints, or effort settings, so this does not establish a speed or model-quality ranking.

**Tokens per match is an average, not a bill.** The app divides recorded tokens across the model's sessions by its matches, so unsuccessful work contributes too. It displays this figure when it has no nonzero dollar-cost record. Input, output, cache use, and the provider's tokenizer all affect the relationship to money; Luna's Codex subscription usage is also billed differently from a prepaid API balance. The confirmed $10 spend lets us calculate DeepSeek's average cost per match, but we cannot calculate Luna's dollar cost or a dollar-for-dollar comparison from these figures [^31].

---
### Same Turok checkpoint: 56.100% with source available
These five 30-minute runs used the same source-assisted checkpoint, so they are the fairest model comparison. Costs are **API-equivalent estimates for the whole session**, not subscription charges [^19] [^20]. Rows are sorted from cheapest to most expensive.

Model and effort | New C functions | Final coverage | Estimated cost | Recommended
---|---:|---:|---:|---
GPT-6 Luna, low | 1 | 56.175% | $0.35 | —
GPT-6 Luna, high | 0 | 56.100% | $0.36 | —
GPT-6.1 Sol, low | 6 | 56.509% | $2.21 | —
GPT-6.1 Sol, high | 29 | 57.441% | $2.63 | **Best value**
GPT-6 Astra, high | 22 | 57.335% | $18.78 | —

Sol high added **29 functions for $2.63**, compared with Astra high's **22 for $18.78**. Luna cost less but added one function at low effort and none at high effort. These are single trials and do not predict performance on another game.

### Earlier Turok progression checkpoints
These runs began at different coverage levels; the first two were ROM-only, and later runs had source access. Because both the checkpoint and available source changed, the rows are not a like-for-like model ranking. Costs are still sorted low to high.

Starting coverage | Model and effort | Source access | Ending coverage | Estimated cost
---|---|---|---|---:
9.878% | GPT-6.1 Sol, low | Yes | 38.951% | $3.51
4.171% | GPT-5.6 Terra, medium | No | 4.467% | $4.31
4.467% | GPT-6.1 Sol, low | No | 9.878% | $6.90
38.951% | GPT-6 Astra, low | Yes | 56.100% | $22.61

The initial GPT-6.1 Sol Turok run reached about **4.2%** roughly 30 minutes after import; its complete cartridge check took about nine more minutes. Source access changes the task substantially, so do not compare those ROM-only results directly with source-assisted gains. Across the nine costed Turok trials above, the estimated API-equivalent cost was **$61.64**; the shared-checkpoint runs are alternative continuations, so their gains are not additive.

Turok costs apply published Standard API rates to recorded usage. They exclude subscriptions, taxes, local CPU time, and separately billed tools; they are estimates, not necessarily what a subscriber paid [^19] [^20]. A verified match means C rebuilt to the target bytes; recovered names and explanations may still be uncertain.

---
# References


[^16]: [RetroReversing decompdecomp README](https://github.com/RetroReversing/decompdecomp), macOS app bundles and source installation, in-app agents, migration from the archived commands, and project export; see also the [upstream README](https://github.com/n-delic/decompdecomp) for its supported platforms and releases.

[^19]: [OpenAI API pricing](https://developers.openai.com/api/docs/pricing), Standard and Fast token rates, cache-write rates, and Priority/Fast naming; checked 24 October 2026. Costs in this article are estimates applied to local agent usage records, not subscription charges.
[^20]: OpenAI model pricing pages for [GPT-5.6 Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [GPT-6 Astra](https://developers.openai.com/api/docs/models/gpt-6-astra), and [GPT-6 Luna](https://developers.openai.com/api/docs/models/gpt-6-luna), cached-input and output rates and applicable long-context multipliers; checked 24 October 2026.

[^21]: [Anthropic Sonnet 5.5 model documentation](https://platform.claude.com/docs/en/models/sonnet-5-5/overview), Standard input, output, five-minute cache-write, and cache-read pricing; checked 24 October 2026. The API-equivalent estimate uses deduplicated supplied session usage, separately from the participant-reported $2.70 cost.
[^22]: [Official Codex CLI guide](https://learn.chatgpt.com/docs/codex/cli), standalone installation and first-run sign-in.
[^23]: [Claude Code quickstart](https://code.claude.com/docs/en/quickstart), native installation, version check, supported accounts, and first-run sign-in.
[^24]: decompdecomp's [agent session manager](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/agents.py) and [worker prompts](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/tools.py), default session size, compiled-claim counting, and automatic session renewal.
[^25]: [Codex pricing](https://learn.chatgpt.com/docs/pricing) and [authentication](https://learn.chatgpt.com/docs/auth), included subscription usage, usage limits, additional credits, and separate API-key billing.
[^26]: [Claude Code cost guide](https://code.claude.com/docs/en/costs), included Pro and Max subscription usage, plan limits, additional usage credits, and the distinction between estimated session cost and subscription billing.

[^27]: [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing) and [Claude Code model configuration](https://code.claude.com/docs/en/model-config), current family prices, Haiku long-context pricing, and Fable usage-credit requirements; checked 25 October 2026.
[^28]: [Claude subscription pricing](https://claude.com/pricing), Pro monthly and annual pricing, Max entry price, and Claude Code inclusion; checked 25 October 2026.

[^29]: [DeepSeek API quickstart](https://api-docs.deepseek.com/), API-key creation, OpenAI-compatible base URL, and documented model names.
[^30]: [DeepSeek model pricing](https://api-docs.deepseek.com/quick_start/pricing/), Flash and Pro rates, cache-hit pricing, peak/off-peak schedule, and deductions from topped-up balances; checked 25 October 2026.
[^31]: decompdecomp's [agent statistics display](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/static/js/agents.js) and [session accounting](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/agents.py), cumulative tokens per match and dollar-cost fallback. South Park counts, DeepSeek Flash model/version, and confirmation that the run consumed the full $10 balance were supplied by the participant. Cost per match is $10 / 56; matches per dollar is 56 / $10.

[^32]: Participant-supplied decompdecomp V-Rally statistics: `claude-sonnet-5-5#low`, six matches, $2.48 total and $0.41 per match; Haiku, 337 matches, $141 total and $0.42 per match. Haiku version, effort, timing, checkpoints, and billing basis were not supplied.

[^33]: decompdecomp's [N64 platform definition](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/__init__.py), supported compiler versions; [IDO guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/ido.md), compiler behaviour and matching context.
[^34]: decompdecomp's [N64 ROM reader](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/rom.py), initial assembly heuristic; [import compiler tests](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/engine/importing.py), small-draft comparison; [compiler engine](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/engine/compilers.py) and [app guide](https://github.com/RetroReversing/decompdecomp/blob/main/docs/GUIDE.md), flag search, surveys, range checks, suggestions, and safeguards for matched code.

[^35]: [Paper Mario GCC repository](https://github.com/pmret/gcc-papermario), GCC 2.8.1 with patches for matching Paper Mario.
[^36]: [Excitebike 64 toolchain documentation](https://github.com/chasmlol/excitebike64#toolchain), SN64 GCC 2.8.1 for game code, SN64 GCC 2.7.2 builds 0006 and 0001 for the loader, and retail USA Rev 1 and European build targets.
[^37]: [Turok 2 decompilation project](https://github.com/mgrz18/turok2-decomp), reported confirmation of SN64 GCC 2.8.1 with `-O2` on eight engine functions.
[^38]: [Ocarina of Time build configuration](https://github.com/zeldaret/oot/blob/main/Makefile), EGCS compiler selection for specific iQue files and libraries.

[^39]: decompdecomp's [map colour logic](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/static/js/map.js) and [map legend](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/app/static/index.html), scored candidates, active claims, matched/polished states, and set-aside labels.
[^40]: decompdecomp's [function claim scheduler and attempt recording](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/network.py), default strategies, duplicate-code priority, dependencies, release cooldowns, regional success, model routing, and failed-compilation accounting.
