# Magazine interview data

Store one JSON file per magazine in this directory. Each file has a `magazine`
display name, a `url` for its site page, and an `entries` array. Every entry has
a `type`; use `interview` for developer interviews. An interview entry records
its integer `issue`, `developer`, `platforms` array, and
`description_markdown`. Set `pages` to a one-element array for a single printed
page, a two-element array for an inclusive printed page range, or `null` when
the pages have not been verified. An empty `platforms` array means the platform
has not been verified; do not infer platform tags from a developer's other work.

Use the shared Liquid include on a magazine page or a platform page:

```liquid
{% include interview-table.html magazine="retro-gamer" show_magazine=false %}
{% include interview-table.html platform="Commodore 64" %}
```

The include selects `interview` entries by default and searches every magazine
JSON file unless `magazine` is set. It also supports exact `developer` and
integer `issue` filters. Use the same platform name in each JSON file so
cross-magazine filters remain reliable. Other feature types can be stored in
the same `entries` array without appearing in interview tables.
