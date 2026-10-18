# Magazine interview data

Store one JSON file per magazine in this directory. Each file has a `magazine`
display name, a `url` for its site page, and an `entries` array. Every entry has
a `type`; use `interview` for developer interviews. An interview entry records
its integer `issue`, `developer`, `people`, `platforms`, `tags`, and
`description_markdown`. `people` contains the individual people named in the
`developer` display string; omit collective labels such as "former studio staff"
and handles without an identified person. Leave `people` empty for entries that
name only a group or handle. `tags` uses the same valid topic labels as post
frontmatter (for example, `homebrew`); it can be empty until labels are
curated. Set `pages` to a one-element array
for a single printed page, a two-element array for an inclusive printed page
range, or `null` when the pages have not been verified. An empty `platforms`
array means no platform
was substantiated or the interview is not platform-specific (for example, an
interview about a magazine or event). Do not infer platform tags from a
developer's other work.

Use the shared Liquid include on a magazine page or a platform page:

```liquid
{% include interview-table.html magazine="retro-gamer" show_magazine=false %}
{% include interview-table.html platform="Commodore 64" %}
{% include interview-table.html platforms="NES|Nintendo Entertainment System" %}
```

The include selects `interview` entries by default and searches every magazine
JSON file unless `magazine` is set. It also supports exact `developer` and
integer `issue` filters. Use `platforms` with pipe-separated exact labels when
a hub covers multiple names or related models; an entry matching more than one
label still appears once. Prefer the same platform name in each JSON file so
cross-magazine filters remain reliable. Other feature types can be stored in
the same `entries` array without appearing in interview tables.
