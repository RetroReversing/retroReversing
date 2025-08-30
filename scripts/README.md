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
- `--export-json` - Export data to `tags-export.json`
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

Validates all tags in markdown files against approved tags from `tags-export.json`.

### Usage
```bash
node scripts/validate-tags.js [path-to-tags-export.json]
```

### Arguments
- `path-to-tags-export.json` - Path to valid tags file (default: `tags-export.json`)

### Examples
```bash
# Validate against default tags-export.json
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