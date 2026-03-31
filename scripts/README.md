# Scripts

Node.js utilities for analyzing markdown files in the `categories/` and `pages/` directories.

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
- Lists files missing each field
- Distinguishes between files with no frontmatter (❌) vs missing specific fields (⚠️)
- Shows coverage statistics

## extract-tags.js

Extracts and analyzes all tags used in markdown frontmatter.

### Usage
```bash
node scripts/extract-tags.js [options]
```

### Options
- `--sort-by-count` - Sort by usage count (default)
- `--sort-by-name` - Sort alphabetically
- `--detailed` - Show which files use each tag
- `--export-json` - Export data to `valid-tags.json`
- `--export-csv` - Export statistics to `tags-export.csv`
- `--help` - Show help

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
- Tag usage statistics with counts and percentages
- Top 10 most used tags
- Optional detailed file-to-tag mappings
- Export options for JSON/CSV formats

## validate-tags.js

Validates all tags in markdown files against approved tags from `valid-tags.json`.

### Usage
```bash
node scripts/validate-tags.js [path-to-valid-tags.json]
```

### Arguments
- `path-to-valid-tags.json` - Path to valid tags file (default: `valid-tags.json`)

### Examples
```bash
# Validate against default valid-tags.json
node scripts/validate-tags.js

# Validate against custom tags file
node scripts/validate-tags.js /path/to/custom-tags.json
```

### Output
- Reports any invalid tags found in files
- Shows summary of invalid tags with file counts
- Provides detailed file-by-file error report
- Exits with code 0 (success) or 1 (validation failed)

### Prerequisites
Generate the tags export file first:
```bash
node scripts/extract-tags.js --export-json
```

## validate-includes.js

Validates all `{% include link-to-other-post.html post="..." %}` references in markdown files to ensure the `post=` parameter matches an actual post's permalink.

### Usage
```bash
node scripts/validate-includes.js
```

### Description
- Scans all markdown files in `categories/` and `pages/` for `{% include link-to-other-post.html post="..." %}` syntax.
- Checks that each `post=` value matches a valid permalink from the frontmatter of any markdown file.
- Reports any invalid or missing references, including line numbers and suggestions for similar permalinks.

### Output
- Summary of total files processed and files with invalid references
- Detailed file-by-file error report with line numbers and suggestions
- Exits with code 0 (all references valid) or 1 (invalid references found)

### Example
```bash
node scripts/validate-includes.js
```

### Fixing Issues
- Ensure the referenced post exists and has a `permalink` in its frontmatter
- Verify the `post=` path matches the exact permalink (case-sensitive)
- Remove or update references to non-existent posts
- Fill in or remove empty post paths (e.g., `post="//"`)

## generate-placeholder-social-images.js

Generates static social-card JPGs for posts and category pages that do not have an `image` or `twitterimage` in frontmatter.

### Usage
```bash
node scripts/generate-placeholder-social-images.js
```

### Description
- Scans `pages/` and `categories/` for Markdown and HTML content files
- Uses `title`, `shorttitle`, `permalink`, `category` and the `category_images` block in `_config.yml`
- Uses the Ruby `geo_pattern` gem to generate deterministic SVG backgrounds from each page seed
- Uses `@resvg/resvg-js` in Node to rasterize the SVG into a JPG
- Falls back to `rsvg-convert` when the Node renderer is unavailable
- Outputs deterministic JPGs and SVGs to `public/generated/placeholders/`
- Names each output from the permalink, so `/ps4/` becomes `ps4.jpg`
- Skips hidden pages and pages that already define `image` or `twitterimage`

### Output
- Creates 1200x630 JPGs suitable for Twitter/Open Graph cards
- Saves the source SVG alongside each JPG in `public/generated/placeholders/`
- Reuses existing generated files when they are already up to date
- Prints a generated/skipped summary at the end

### Requirements
- `gem install geo_pattern` for real GeoPattern SVG backgrounds
- `npm install` to install the Node rasterizer used for JPG output
- Optional: `brew install librsvg` for `rsvg-convert` fallback support

## convert-scr-to-png.js

Converts Nintendo workstation `.SCR` layout files into PNGs using the matching `.CGX` graphics bank and optional `.COL` palette bank. In folder mode it also writes a standalone PNG tile-sheet for every `.CGX` it finds.

### Usage
```bash
node scripts/convert-scr-to-png.js <file.scr|folder> [options]
```

### Options
- `--cgx <file>` - Path to the matching `.CGX` file
- `--col <file>` - Path to the matching `.COL` file
- `--out <file>` - Output PNG path
- `--bit-depth <n>` - Force `2`, `4`, or `8`
- `--block <mode>` - Render `all`, `0`, `1`, `2`, or `3`
- `--help` - Show usage

### Default behavior
- If you pass only a `.SCR` file, the script looks for a `.CGX` with the same basename in the same folder
- It also looks for a `.COL` with the same basename in the same folder
- If no `.COL` is found, it still renders using a grayscale fallback
- If no bit depth is forced, the script tries to auto-detect it from the `.SCR` tile references and the `.CGX` size
- If you pass a folder, the script scans it recursively and converts every `.SCR` it finds
- In folder mode, it also renders every `.CGX` it finds as `filename.CGX.png`
- For those standalone `.CGX` renders it uses:
  - the same-name `.COL` first
  - otherwise the closest-named sibling `.COL`
  - otherwise grayscale
- If a same-name `.SCR` exists beside a `.CGX`, the script uses it for bit-depth auto-detection
- In folder mode, `--out` should be a directory. The script mirrors the source subfolder structure inside it
- In folder mode, do not pass `--cgx` or `--col`. Each `.SCR` auto-matches its own sibling files

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

- **Triggers**: Runs on PRs that modify markdown files in `categories/` or `pages/`
- **Generates**: Current tags export for validation
- **Checks**: Metadata completeness (editlink, updatedAt fields)
- **Validates**: All tags against approved list
- **Reports**: Detailed results as PR comments and workflow artifacts
- **Blocks**: PRs with invalid tags (metadata warnings don't block merges)

### Action Outputs

- **PR Comments**: Automated validation summary with status and recommendations
- **Workflow Artifacts**: Detailed reports downloadable for 90 days
- **Status Checks**: Pass/fail status for required validations
- **Step Summary**: Quick overview in the Actions tab

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
