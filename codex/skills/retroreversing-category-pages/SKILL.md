---
name: "retroreversing-category-pages"
description: "Use when creating or editing RetroReversing category hub pages under categories/** (consoles/tools/misc/companies). Enforces correct frontmatter, structure, and link patterns."
---

# RetroReversing Category Pages

Category pages live in `categories/**` and publish to a top-level permalink like `/nes`, `/wiiu`, `/disassemblers`, or `/gdc`.

They have two jobs:

* act as the hub/index for a topic (usually a console/tool/company), linking to relevant RetroReversing posts
* curate high-quality external sources so the page stands alone as a reference

If you are not editing `categories/**`, use the broader `retroreversing-contributing` skill instead.

## Identify the category page type

Pick the smallest structure that fits:

* **Hub (preferred for new pages):** short intro + organised internal links + a small curated external list.
* **Reference list:** mostly tables of resources grouped by subtopic.
* **Timeline/index:** lots of items grouped by year/event (example: `categories/misc/GDC.md`).

When extending an older, very large page, avoid sweeping rewrites. Preserve stable headings and refactor incrementally.
Do not remove existing embedded content such as videos, tweets, or other primary-source embeds unless the user explicitly asks for their removal. These embeds often preserve useful technical or historical context. You may move or regroup them into more appropriate sections.

## Frontmatter checklist (category pages)

Follow `CONTRIBUTING.md` frontmatter rules and keep it minimal.

Required/typical keys:

* `layout: post`
* `title:` no colons
* `permalink:` no trailing `/` (example: `/wiiu`)
* `category:` must match a key in `_config.yml` under `category:` (this drives the header icon), can be a list of multiple but start with just one or 2
* `tags:` YAML list; include the main category tag and any broad qualifiers (e.g. `introduction`, `tools`)
* `breadcrumbs:` Home -> Section -> Current
* `editlink:` must point at the repo file relative to the GitHub `pages/` folder (category pages usually use `../categories/.../File.md`)

Useful/optional keys:

* `excerpt:` short, technical summary
* `updatedAt:` `'YYYY-MM-DD'` (update only for meaningful content changes)
* `recommendTitle:` e.g. `All WiiU Posts` (this titles the sidebar)
* `recommend:` list of tags that should appear in the recommended sidebar
* `redirect_from:` list of legacy permalinks you still want to support
* `consoleimage:` for console hubs (used by search/cards in some views)
* `image:` and `twitterimage:` only when you have a real hero image; otherwise omit

## Minimal starter template

Use this as a starting point for a new console hub page (adjust values; omit optional keys you do not need):

```yaml
---
layout: post
permalink: /wiiu
title: Nintendo Wii U Reverse Engineering
category: wiiu
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /consoles
  - name: Nintendo Wii U Reverse Engineering
    url: #
tags:
  - wiiu
  - introduction
recommendTitle: All WiiU Posts
recommend:
  - wiiu
  - wii
  - introduction
editlink: ../categories/consoles/WiiU.md
excerpt: Awesome list of Nintendo Wii U reverse engineering and dev resources
updatedAt: "2026-04-12"
---
```

Recommended heading skeleton:

```markdown
# Introduction

---
# Hardware

---
# Reverse Engineering

---
# Games

---
# All Posts

---
# References
```


## Common H1 sections (recommended)

Across existing category pages (especially `categories/consoles/*.md`), the most common H1 sections are:

* `# Introduction`
* `# Hardware`
* `# Reverse Engineering`
* `# Games`
* `# All Posts` (usually renders the on-site list via `{% include console.html %}`)
* `# References`

Typical `# All Posts` section:

```liquid
# All Posts
<div>

{% include console.html %}

</div>
```

Common optional H1 sections when the platform/topic needs them:

* `# File Formats`
* `# Emulation`
* `# Development Kits (Hardware)`
* `# Software Development Kits` / `# Software Development Kit`
* `# Middleware`
* `# Game Engines`
* `# Tools`


## Content structure (recommended)

For hub-style pages, follow the newer pattern seen in `categories/consoles/WiiU.md`:

* 2-4 sentence **intro** explaining why the category matters and how to use the page.
* Use a small set of stable H1 sections separated by `---` (examples):
  * `# Introduction`
  * `# Hardware`
  * `# Reverse Engineering`
  * `# Middleware` (when platform-specific)
  * `# Game Engines`
  * `# Tools` (if the platform has unique toolchains)
  * `# Games` (for debug-symbol lists, good starter targets, etc)
* `# All Posts` near the end (this renders the internal listing for the category)
* `# References` last when you have citations
* Prefer short subsections that end in one or more links (internal or external), rather than long essay blocks.

## Console hub extras (NES-style)

`categories/consoles/Nes.md` is a good example of a *fully built-out* console hub. When a console category has enough material, these patterns work well:

* **Lead-in before the first H1** - 2 short paragraphs that explain the two roles of the page (internal hub + curated external reference) and how the sections are organised.
* **More specific H1 sections when justified** - beyond `# Introduction` / `# Hardware`, consider dedicated H1 blocks like:
  * `# Game Software Development for the <console>`
  * `# Game Modding and ROM Hacking`
  * `# Homebrew <console> Development`
  * `# Reverse Engineering <console> games`
  Only add these if you have enough links/content to avoid thin sections.
* **FAQ-style subheadings** - within an H1 section, use `###` question headings ("How long did it take…?", "What did the SDK look like?") to make the page skimmable; each answer should end in one or more links (internal or external).
* **Primary-source quote blocks** - short `>` quotes are useful for provenance and “why this matters”, backed by a footnote when the quote is evidence.
* **Embedded media (sparingly)** - a teardown / explanation video, tweet, or other primary-source embed can be worth keeping when it teaches a hardware concept or preserves development context; keep the surrounding text tight and technical.
* **Preserve existing embeds** - when editing an existing category page, keep embedded videos, tweets, and similar source material unless the user explicitly asks to remove them. Reorganising is fine, deletion is not.
* **Hands-on callouts** - include at least one concrete “try this” (emulator/debugger step, tool invocation, or a small workflow) when the console has established reversing tooling.

If a console doesn’t have enough depth yet, prefer the simpler hub pattern (short intro + links + `# All Posts`) rather than forcing these extras.


Remember the Markdown hygiene rules from `CONTRIBUTING.md`:

* Use `---` before major section jumps (and when jumping back up the heading hierarchy).
* No blank line between `---` and the next heading.
* No blank line between a heading and its first paragraph.
* Never use numbered lists; use `*` bullets introduced by a sentence ending in `:`.
* Use tables when a list would exceed ~10 items.

## Linking rules

Internal links (to other RetroReversing pages):

```liquid
{% include_cached link-to-other-post.html post="/permalink" description="1 sentence on why this is relevant." %}
```

External links that stand alone as their own paragraph/line:

```liquid
{% include link-to-other-site.html
  title="Resource title"
  url="https://example.com"
  description="1-2 sentences explaining what it is and why it matters." %}
```

Inline external links inside a sentence can be normal Markdown links; add a footnote only when the link is serving as evidence for a claim.

## References

If the page makes specific historical/technical claims (dates, counts, quotes), add footnotes and end with:

`# References`

Keep quotes short and make sure references back up the specific claim.

## Creating a brand-new category

If you add a new top-level category page:

* Ensure the `category:` key exists in `_config.yml` under `category:` with `title` and `image`.
