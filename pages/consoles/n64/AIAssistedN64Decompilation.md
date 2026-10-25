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

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-new-project.png" alt="decompdecomp's New project screen with a V-Rally N64 ROM selected, the compiler menu, and the Start decompiling button" width="1445" height="951" size="document" title="Start with the local app" caption="Select your ROM and compiler, then let the automatic matching pass run before starting an AI agent." %}

Let the app import the game and finish its **free matches** pass before opening **Agents & models**. Its local tools draft C and check it against the game's bytes; this stage uses **zero AI model tokens**. It still takes computer time, and setup may need free tool downloads or your explicit acceptance of a proprietary compiler license. Record the matches and save or export a checkpoint. Then start an agent for the functions the automatic pass could not match. The amount of free progress varies by game and compiler [^16].

In our separate app run on V-Rally, the automatic draft pass reported **469 matches**. The project overview then showed **551 of 2,101 functions matched**, or **5.26% of detected code**, with **zero agents started**. The other 82 matches came from the app's automatic reuse of matching code on identical functions. This screenshot is the result after the free local stage; it is a different run from the model sessions in the table below.

{% include article-figure.html src="/public/images/n64/decompdecomp-v-rally-free-matches.png" alt="decompdecomp V-Rally project overview showing 551 of 2,101 functions matched, 5.26 percent of code, and zero agents working" width="1462" height="951" size="document" title="After the free matching pass" caption="V-Rally reached 551 matched functions, or 5.26% of detected code, before an AI agent was started." %}

## Start Agents in decompdecomp
The free pass has done the easy work. Give the remaining functions to a coding agent.

**Connect your agent.** Use Codex CLI or Claude Code with your signed-in account, or enter a provider's API key in **Agents & models**. Installation instructions are below.

**Start with one worker.** Open your game and click **Start agents**. Choose an agent, model, and effort. Set **How many** to **1**, then select **Start**.

{% include article-figure.html src="/public/images/n64/decompdecomp-start-agents.webp" alt="decompdecomp Start agents panel with Codex CLI selected, model and effort menus, five workers, and eight functions per session" width="1193" height="926" size="document" title="Configure your agents" caption="How many controls parallel workers. Functions per session controls how often each worker starts a fresh conversation. The selected model and five-worker count are examples, not recommendations." %}

**Watch the map turn green.** Each worker writes candidate C, then the app compiles it and checks the bytes against your ROM. Differences go back to the worker for another attempt. Verified matches are saved automatically [^16].

**Keep an eye on usage.** Model calls use your provider's paid allowance or API balance. Check its usage page and export a checkpoint before moving the project.

**Use your subscription first.** For regular decompilation work, our first choice is Codex CLI with ChatGPT sign-in or Claude Code with an eligible Claude subscription. The monthly fee includes an allowance, so repeated matching attempts can cost less than paying for every model call through an API. This is especially useful if you already subscribe: work within the included allowance adds no separate API charge [^25] [^26].

**Watch the limits.** Subscriptions have usage limits, and additional credits or extra usage can cost more. Sign in with your subscription account to use its allowance; supplying an API key uses API billing. Savings depend on how often you work and which model you use. The API-equivalent costs below are comparison estimates, not subscription bills.

---
### Install OpenAI Codex CLI
Codex CLI is the terminal program decompdecomp launches for OpenAI models. Select **Codex CLI** in **Start agents** and use **Install it for me**, or run the official installer below on macOS or Linux:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Open a new terminal, run `codex`, and follow the sign-in prompts. You can also use `codex login`; check installation with `codex --version`. The [official Codex CLI guide](https://learn.chatgpt.com/docs/codex/cli) includes Windows installation [^22].

**Subscription budget.** ChatGPT Plus is about **$20/month**, with Codex CLI access and included Sol/Luna usage. Pro starts at **$100/month**, with higher-priced tiers for heavier use. Available models and limits depend on your account; check the model picker and usage dashboard [^25].

For comparing the main current model families, these are Standard API prices in USD per **one million tokens**, checked 25 October 2026. Input is what the model reads; output is what it generates. Cached input is reused context. These are API rates, not extra charges on top of included subscription usage [^19]:

Model | Input | Cached input | Output | Recommended
---|---:|---:|---:|---
GPT-6 Luna | $0.10 | $0.01 | $0.50 | Cheap; little progress in our Turok trials
GPT-6.1 Sol | $2 | $0.10 | $10 | **Best value in our shared-checkpoint test**
GPT-6 Astra | $10 | $1 | $50 | Higher cost; try when Sol stalls

Sol costs about one-fifth of Astra at these base rates. Actual session cost depends on retries, context, and output, including reasoning. Cache writes, long contexts, and faster service modes can add charges; the [OpenAI pricing page](https://developers.openai.com/api/docs/pricing) has the full rate card.

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
Claude Haiku 5.5 | $0.10 | $0.01 | $0.50 | Cheapest; untested in our decomp trials
Claude Sonnet 5.5 | $2 | $0.10 | $10 | **Our tested Claude starting choice**
Claude Opus 5.5 | $4 | $0.20 | $20 | Twice Sonnet's base rates; untested here
Claude Fable 5.1 | $10 | $0.25 | $50 | Most expensive here; untested

Haiku's listed rates apply to prompts up to 100,000 tokens; longer prompts cost more. Cache writes and fast modes also affect billing. Fable may require separately paid usage credits even with a subscription, so check its label before starting workers. See [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing) and [Claude Code model access](https://code.claude.com/docs/en/model-config) [^27].

Return to decompdecomp and select **Installed it already? Look again** if needed. Choose your CLI, model, and effort, then start one worker. The app supplies the task and tool connection.

---
### What the Agent Settings Mean
The launch panel above has two controls that affect how much work runs and how much context each agent carries:

* **How many** - The number of workers running at once. The screenshot selects five, each claiming different work. More workers can increase throughput, but also increase simultaneous model usage, compiler load, and the chance of hitting provider limits. Start with one.
* **Functions per session** - How much work a worker attempts before ending its conversation and starting a fresh one. The default is **8**. In the matching workflow, the CLI is instructed to complete eight claims that it has compiled; a claim can contain a batch of small functions. A compiled claim can count even when it does not match; repeated compiler checks on that claim do not each use another slot. This is not a promise of eight new matches. Five workers with this setting do not stop after 40 matches: the app starts further sessions while work remains [^24].
* **Lower or higher values** - A lower value resets conversation history more often, keeping context smaller but repeating session setup and guide-reading overhead. A higher value lets a worker carry more recent reasoning between functions, but its conversation can grow larger and cost more to process. Saved matches, best attempts, and project notes remain available after a reset. Leave the default at eight initially; changing it does not guarantee lower cost or better matches.

The agent is trying to reproduce the original machine code. A green match means the function compiled to the same bytes; it does not prove that its names or explanation capture the original developer's intent. Keep automatic matches separate from results produced by model agents when comparing progress.


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
