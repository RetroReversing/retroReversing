# Scripts
Utilities for maintaining site content and analyzing Markdown files.

## update-decomp-activity.py
Refresh repository activity in `_data/decompilations/<platform>.json` using Python 3.9+ and the standard library. The catalog also supplies complete console tables, including artwork, links, project types, mapper values, and editorial notes. The page renders each table with `{% include decomp-table.html console="nintendo-ds" %}`. The include uses `_includes/decomp-activity.html` internally for activity labels.

```bash
python3 scripts/update-decomp-activity.py
python3 scripts/update-decomp-activity.py --github-graphql
python3 scripts/update-decomp-activity.py --limit 20
python3 scripts/update-decomp-activity.py --data _data/decompilations/sega-mega-drive.json
python3 scripts/update-decomp-activity.py --data _data/reimplementations --github-graphql
python3 scripts/update-decomp-activity.py --project balloon-fight --dry-run
python3 -m unittest discover -s scripts/tests -p 'test_decomp_activity.py'
```

The script supports public GitHub, GitLab, and Codeberg repositories. Set `GITHUB_TOKEN` (or `GH_TOKEN`), `GITLAB_TOKEN`, or `CODEBERG_TOKEN` in the environment for authenticated requests; tokens are never stored in the catalog. GitHub's unauthenticated rate limit is small, so use a token for a full refresh. REST mode needs two requests per distinct repository. `--project` accepts catalog IDs and can be repeated; `--limit` bounds distinct repositories; `--data` selects a platform file or a directory of catalog files. Only files with changed activity are rewritten. Repository caching and `--limit` apply across the entire selected catalog.

For daily runs, use `--github-graphql` with `GITHUB_TOKEN` or `GH_TOKEN`. It retrieves stars, archive state, and the latest default-branch commit for up to 50 GitHub repositories in one authenticated request. Around 700 repositories need approximately 14 GraphQL requests instead of 1,400 REST requests. This mode refuses to start without a token, respects project selection and repository limits, and shares results for repeated repositories. GitLab and Codeberg continue using REST. GitHub documents the separate [REST rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) and [GraphQL rate limits](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api). Authentication and batching reduce the request budget; rate-limit errors still stop further requests and preserve earlier evidence.

The `Refresh decompilation activity` GitHub Actions workflow runs daily at 03:37 UTC and can also be started manually. After the workflow is merged into the default branch, it uses the built-in `GITHUB_TOKEN`, validates the catalog, and opens or updates a single PR on `automation/decompilation-activity`. No personal access token is needed. Enable **Allow GitHub Actions to create and approve pull requests** under the repository's Actions workflow permissions if PR creation is disabled; the workflow only creates PRs and does not approve or merge them. A partial refresh still submits successful changes, then marks the run as failed so unavailable repositories and rate limits remain visible in the logs.

For your own cron host, provide an exported token through a private environment file or your secret manager. The script only edits JSON; publishing changes remains a separate step. An example crontab entry, with paths adjusted for that host, is:

```cron
37 3 * * * . /path/to/private/decomp.env && cd /path/to/retroReversing && /usr/bin/python3 scripts/update-decomp-activity.py --github-graphql >> /path/to/decomp-refresh.log 2>&1
```

Activity uses the latest commit on the repository's default branch, including documentation and maintenance commits. Subdirectory links share repository-wide activity. Active means a commit within the preceding 12 calendar months; archived repositories and older commits are Inactive. `completion_status` is editorial data and is never inferred from activity. Failed requests retain the last successful date, URL, and status, record `check_error`, and display a warning on the page. Projects without successful evidence are Unverified. Rate limits stop the run; failed checks return a nonzero exit code while saving completed checks. Unsupported website links are retained in the catalog and skipped.

Each successful GitHub check saves `activity.github_stars` from GitHub's `stargazers_count` repository metadata, using the existing requests. Zero means a verified count of zero; null means not fetched yet or a non-GitHub project. Failed checks preserve the previous star count alongside the last successful commit evidence. The updater stores only the repository commit date; it does not save check or refresh timestamps. Identical results on later days leave catalog files unchanged. Star counts are stored in JSON without adding a table column.

Each project also has a manually maintained `ai_used` field: `true` means confirmed AI use in the project's development, `false` means explicitly confirmed no AI use, and `null` means unknown. Leave it null unless the maintainers or project documentation establish the answer; absence of an AI statement does not mean false. Keep a source link in the game's `notes_markdown` when documenting a confirmed value. This field applies to that project, so a decompilation and its separately cataloged port can have different values. The activity updater never infers or changes `ai_used`.

To add a project, open its platform file and give it a globally unique, readable ID under `projects` with `name`, `platforms`, `repository_url`, `project_type`, `completion_status`, `legacy_status`, `ai_used: null`, and an `activity` object with `github_stars: null`. Use lowercase names with hyphens, such as `balloon-fight`; distinguish shared names with a console or project suffix, such as `tetris-nes` and `tetris-game-boy`. Keep IDs stable when editing display names. Add a row to the relevant `consoles` entry referencing that ID in `project`. Each console has a display `name`, ordered `columns`, and ordered `rows`. Each row supplies `name_markdown` (including its project link), `images` (objects with `url`, `alt`, and `width`), `project_types` (an array of objects with `name` and `url`), `notes_markdown`, and an optional `mapper` for four-column tables. Markdown fields support existing inline links and formatting. Row display data stays separate from repository identity because several games can share one repository.

Independently written reimplementations belong in `_data/reimplementations/<platform>.json`, using the same schema. They are not rendered on the decompilation page. Move both the project record and its table row, including artwork, completion figures and ports. For a game with both a source reconstruction and a separate reimplementation, keep the source reconstruction in the decompilation catalog and store the reimplementation separately. Do not attach reimplementations to decompilation rows through `project_types` or `ports`. A repository containing both approaches can have separate records with distinct IDs. Never copy a different repository's commit date or stars when splitting a port into its own record.

The daily workflow refreshes both directories with separate updater invocations and includes both in its update PR. The default script invocation continues to select only the decompilation catalog; use `--data _data/reimplementations` for the separate catalog.

Each platform file retains `schema_version: 1`, `projects`, and `consoles`.
The filename must match its console key, for example `sega-mega-drive.json` contains `consoles["sega-mega-drive"]`.
Keep every table row's referenced project in the same file.
Platforms with only prose-linked projects can use an empty `consoles` object.
Add new platform files directly; no shared manifest or generated aggregate is needed.
Jekyll loads the directory as `site.data.decompilations`, and the table include selects the platform by key.
Direct activity includes also require `platform="sega-mega-drive"` alongside the project ID.
Keep project IDs unique across all files; the updater rejects duplicate project or console IDs before making requests.

The table requests artwork with `crossorigin="anonymous"` because File Lab enables COEP `require-corp` on the site. External image hosts must return `Access-Control-Allow-Origin: *` or explicitly allow the site origin. A successful GET alone is insufficient: check the image content type, actual image data, and CORS response headers with an `Origin` request header. Prefer verified `raw.githubusercontent.com/libretro-thumbnails/` URLs; the separate `thumbnails.libretro.com` host does not currently return the CORS headers required by the table. Resolve Libretro image symlinks to actual PNG files, as raw GitHub URLs can serve their targets as plain text. Table images load lazily to avoid fetching the entire directory at once.

`legacy_status` preserves an existing undated label until the first check; new projects can leave it null. Entries without a check or legacy label display “Not checked”. Alternate ports and projects linked outside tables are also cataloged, but only console rows display activity. Add or edit images in JSON and verify them according to the contributing guide. The refresh script only updates activity fields and leaves table content intact. Review JSON changes before committing. The script does not commit, push, or schedule runs.

Each console row also has manually maintained `completion_percent` (0-100, or null if unknown), `completion_qualifier` (empty for an exact value, or `>` for a lower bound), and `completion_metric` (`completion`, `functional`, `accuracy`, or `executable-byte-matching`). Use `executable-byte-matching` for exact executable reconstruction coverage; it does not imply semantic C decompilation is complete. Preserve the source's measure: functional coverage and matching accuracy are not completion percentages. Migrated percentages retain the existing page's figures; they are not newly verified progress estimates. Do not infer 100% from a playable port or from an activity check.

Store each game's ports in its row's `ports` array. A port has `name`, `url`, `platforms` (for example `["PC"]`, `["iOS"]`, or `["Browser"]`), `description_markdown`, and `project_types` (an array of type names, such as `["Static recompilation", "Native port"]`). A port supporting several targets can list all confirmed platforms. An empty array means no ports have been recorded; an empty `platforms` array means the target has not been specified. Only add destinations supported by the project's documentation. The type column combines the row's `project_types` and the ports' `project_types` as comma-separated links to their respective URLs. Record each type separately; do not combine labels with slashes or commas. Identical type/URL pairs display once. Multiple ports include their project names in the type links to distinguish repositories. Port descriptions and target platforms also render in the status/notes column. The activity updater never changes percentages or ports.

## check-metadata.js
Finds markdown files missing specified frontmatter fields.

### Usage
```bash
node scripts/check-metadata.js [field1] [field2] ...
```

### Examples
```bash
# Check for missing editlink and updatedAt fields (default)
node scripts/check-metadata.js

# Check for specific fields
node scripts/check-metadata.js title layout permalink

# Check single field
node scripts/check-metadata.js updatedAt
```

### Output
* Lists files missing each field
* Distinguishes between files with no frontmatter (❌) vs missing specific fields (⚠️)
* Shows coverage statistics

## find-missing-updatedAt.js
Lists markdown posts in `pages/` that do not have an `updatedAt` field.

### Usage
```bash
node scripts/find-missing-updatedAt.js
```

### Output
* Shows every file missing `updatedAt`
* Distinguishes between files with no frontmatter (❌) vs files with frontmatter but no `updatedAt` (⚠️)
* Prints a total count of scanned files and missing files

## extract-tags.js
Extracts and analyzes all tags used in markdown frontmatter.

### Usage
```bash
node scripts/extract-tags.js [options]
```

### Options
* `--sort-by-count` - Sort by usage count (default)
* `--sort-by-name` - Sort alphabetically
* `--detailed` - Show which files use each tag
* `--export-json` - Export data to `_data/valid-tags.json`
* `--export-csv` - Export statistics to `tags-export.csv`
* `--help` - Show help

### Examples
```bash
# Basic tag analysis
node scripts/extract-tags.js

# Alphabetical sorting with detailed file listings
node scripts/extract-tags.js --sort-by-name --detailed

# Export data for further analysis
node scripts/extract-tags.js --export-json --export-csv
```

### Output
* Tag usage statistics with counts and percentages
* Top 10 most used tags
* Optional detailed file-to-tag mappings
* Export options for JSON/CSV formats

## validate-tags.js
Validates all tags in markdown files against approved tags from `_data/valid-tags.json`.

### Usage
```bash
node scripts/validate-tags.js [path-to-valid-tags.json]
```

### Arguments
* `path-to-valid-tags.json` - Path to valid tags file (default: `_data/valid-tags.json`)

### Examples
```bash
# Validate against default _data/valid-tags.json
node scripts/validate-tags.js

# Validate against custom tags file
node scripts/validate-tags.js /path/to/custom-tags.json
```

### Output
* Reports any invalid tags found in files
* Shows summary of invalid tags with file counts
* Provides detailed file-by-file error report
* Exits with code 0 (success) or 1 (validation failed)

### Prerequisites
Generate the tags export file first:
```bash
node scripts/extract-tags.js --export-json
```

## validate-includes.js
Validates all `{% include_cached link-to-other-post.html post="..." %}` references in markdown files to ensure the `post=` parameter matches an actual post's permalink.

### Usage
```bash
node scripts/validate-includes.js
```

### Description
* Scans all markdown files in `categories/` and `pages/` for `{% include_cached link-to-other-post.html post="..." %}` syntax.
* Checks that each `post=` value matches a valid permalink from the frontmatter of any markdown file.
* Reports any invalid or missing references, including line numbers and suggestions for similar permalinks.

### Output
* Summary of total files processed and files with invalid references
* Detailed file-by-file error report with line numbers and suggestions
* Exits with code 0 (all references valid) or 1 (invalid references found)

### Example
```bash
node scripts/validate-includes.js
```

### Fixing Issues
* Ensure the referenced post exists and has a `permalink` in its frontmatter
* Verify the `post=` path matches the exact permalink (case-sensitive)
* Remove or update references to non-existent posts
* Fill in or remove empty post paths (e.g., `post="//"`)

## generate-placeholder-social-images.js
Generates static social-card JPGs for posts and category pages that do not have an `image` or `twitterimage` in frontmatter.

### Usage
```bash
node scripts/generate-placeholder-social-images.js
```

### Description
* Scans `pages/` and `categories/` for Markdown and HTML content files
* Uses `title`, `shorttitle`, `permalink`, `category` and the `category` block in `_config.yml` (with per-key `title` and `image` fields)
* Uses the Ruby `geo_pattern` gem to generate deterministic SVG backgrounds from each page seed
* Uses `@resvg/resvg-js` in Node to rasterize the SVG into a JPG
* Falls back to `rsvg-convert` when the Node renderer is unavailable
* Outputs deterministic JPGs and SVGs to `public/generated/placeholders/`
* Names each output from the permalink, so `/ps4/` becomes `ps4.jpg`
* Skips hidden pages and pages that already define `image` or `twitterimage`

### Output
* Creates 1200x630 JPGs suitable for Twitter/Open Graph cards
* Saves the source SVG alongside each JPG in `public/generated/placeholders/`
* Reuses existing generated files when they are already up to date
* Prints a generated/skipped summary at the end

### Requirements
* `gem install geo_pattern` for real GeoPattern SVG backgrounds
* `npm install` to install the Node rasterizer used for JPG output
* Optional: `brew install librsvg` for `rsvg-convert` fallback support

## convert-scr-to-png.js
Converts Nintendo workstation `.SCR` layout files into PNGs using the matching `.CGX` graphics bank and optional `.COL` palette bank. In folder mode it also writes a standalone PNG tile-sheet for every `.CGX` it finds.

### Usage
```bash
node scripts/convert-scr-to-png.js <file.scr|folder> [options]
```

### Options
* `--cgx <file>` - Path to the matching `.CGX` file
* `--col <file>` - Path to the matching `.COL` file
* `--out <file>` - Output PNG path
* `--bit-depth <n>` - Force `2`, `4`, or `8`
* `--block <mode>` - Render `all`, `0`, `1`, `2`, or `3`
* `--help` - Show usage

### Default behavior
* If you pass only a `.SCR` file, the script looks for a `.CGX` with the same basename in the same folder
* It also looks for a `.COL` with the same basename in the same folder
* If no `.COL` is found, it still renders using a grayscale fallback
* If no bit depth is forced, the script tries to auto-detect it from the `.SCR` tile references and the `.CGX` size
* If you pass a folder, the script scans it recursively and converts every `.SCR` it finds
* In folder mode, it also renders every `.CGX` it finds as `filename.CGX.png`
* For those standalone `.CGX` renders it uses:
  * the same-name `.COL` first
  * otherwise the closest-named sibling `.COL`
  * otherwise grayscale
* If a same-name `.SCR` exists beside a `.CGX`, the script uses it for bit-depth auto-detection
* In folder mode, `--out` should be a directory. The script mirrors the source subfolder structure inside it
* In folder mode, do not pass `--cgx` or `--col`. Each `.SCR` auto-matches its own sibling files

### Examples
```bash
node scripts/convert-scr-to-png.js /path/to/TITLE.SCR
node scripts/convert-scr-to-png.js /path/to/workspace/
node scripts/convert-scr-to-png.js /path/to/workspace/ --out /tmp/rendered-scr/
node scripts/convert-scr-to-png.js /path/to/TITLE.SCR --cgx /path/to/TITLE.CGX --col /path/to/TITLE.COL
node scripts/convert-scr-to-png.js /path/to/end-demo-A.SCR --bit-depth 2 --out /tmp/end-demo-A.png
```

## GitHub Action Integration
The repository includes a GitHub Action (`.github/workflows/markdown-validation.yml`) that automatically runs these scripts on pull requests to ensure content quality.

### What the Action Does
* **Triggers**: Runs on PRs that modify markdown files in `categories/` or `pages/`
* **Generates**: Current tags export for validation
* **Checks**: Metadata completeness (editlink, updatedAt fields)
* **Validates**: All tags against approved list
* **Reports**: Detailed results as PR comments and workflow artifacts
* **Blocks**: PRs with invalid tags (metadata warnings don't block merges)

### Action Outputs
* **PR Comments**: Automated validation summary with status and recommendations
* **Workflow Artifacts**: Detailed reports downloadable for 90 days
* **Status Checks**: Pass/fail status for required validations
* **Step Summary**: Quick overview in the Actions tab

### Local Development
Run the same checks locally before pushing:

```bash
# Quick validation
node scripts/validate-tags.js

# Full metadata analysis
node scripts/check-metadata.js editlink title

# Generate fresh tags export
node scripts/extract-tags.js --export-json
```
