#!/usr/bin/env node
/**
 * format-docs.js
 *
 * Applies Claude.md formatting rules to Markdown documentation files.
 * Run before committing to keep all pages consistently formatted.
 *
 * Rules enforced:
 *   em-dash          — (U+2014) → - outside code spans and fenced blocks
 *   curly-quotes     "/"/'/'\u2018-\u201D → straight ASCII quotes
 *   blank-after-fence ```lang\n\n → ```lang\n (no blank line after fence opener)
 *   numbered-list    1. item    → * item (ordered lists → unordered)
 *   backtick-heading ## `code`  → ## code (no backticks inside headings)
 *   bold-heading     ## **text** → ## text (no bold markers inside headings)
 *   table-pipes      | col |    → col    (no leading/trailing pipe on rows)
 *   table-blank      text\ntbl  → text\n\ntbl (blank line before table)
 *   blank-before-heading text\n## → text\n\n## (blank line before headings)
 *   tight-lists      * a\n\n* b → * a\n* b (no blank lines between list items)
 *   hr-heading       ---\n\n## → ---\n## (no blank between HR and heading)
 *   heading-content  ##\n\n txt → ##\n txt (no blank after heading before prose)
 *
 * Usage:
 *   node format-docs.js                   # format all .md files recursively
 *   node format-docs.js path/to/file.md   # format a single file
 *   node format-docs.js --check           # report issues without modifying
 *   node format-docs.js --check .         # check all .md files
 *   node format-docs.js --quiet --check .  # check, summary only (CI-friendly)
 *
 * Pre-commit hook setup:
 *   cp format-docs.js /path/to/repo/
 *   echo '#!/bin/sh\nnode format-docs.js --check .' > .git/hooks/pre-commit
 *   chmod +x .git/hooks/pre-commit
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const argv   = process.argv.slice(2);
const CHECK  = argv.includes('--check');
const QUIET  = argv.includes('--quiet');
const TARGET = argv.find(a => !a.startsWith('-')) ?? '.';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Replace `search` with `replace` only in segments outside backtick spans. */
function replaceOutsideInlineCode(str, search, replace) {
  const parts = str.split('`');
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i].split(search).join(replace);
  }
  return parts.join('`');
}

/**
 * Returns a stateful predicate that tracks fenced code blocks, Liquid
 * capture blocks, and page frontmatter. Call once per line, in order. Returns
 * true for lines that are inside (or are the boundary of) a protected block
 * and should be skipped by formatting rules.
 */
function makeFenceTracker() {
  let inFence      = false;
  let inCapture    = false;
  let inFrontmatter = false;
  let lineCount     = 0;

  return function isProtected(ln) {
    lineCount++;
    // Frontmatter: --- at the very start (line 1) and --- after it closes the block
    if (lineCount === 1 && /^-{3}/.test(ln.trim())) {
      inFrontmatter = true;
      return true;
    }
    if (inFrontmatter && lineCount > 1 && /^-{3}/.test(ln.trim())) {
      inFrontmatter = false;
      return true;
    }

    if (/^(`{3,}|~{3,})/.test(ln.trim())) { inFence = !inFence; return true; }
    if (/^\{%-?\s*capture\b/.test(ln))    { inCapture = true;   return true; }
    if (/^\{%-?\s*endcapture\b/.test(ln)) { inCapture = false;  return true; }
    return inFrontmatter || inFence || inCapture;
  };
}

/** True when a line is a Markdown list item marker (unordered or ordered). */
function isListItemLine(ln) {
  return /^\s*(?:[*+-]|\d+\.)\s+/.test(ln);
}

// ---------------------------------------------------------------------------
// Per-line rules (applied while tracking fenced code block state)
// ---------------------------------------------------------------------------

function applyLineRules(lines) {
  const out        = [];
  const fixes      = [];
  const isProtected = makeFenceTracker();

  for (let i = 0; i < lines.length; i++) {
    let ln  = lines[i];
    const n = i + 1; // 1-based for reporting

    if (isProtected(ln)) {
      out.push(ln);
      continue;
    }

    // -----------------------------------------------------------------------
    // Rule: no blank lines immediately after a code fence opener
    // e.g.  ```bash\n\ncode  →  ```bash\ncode
    // Must be checked before isProtected so we can intercept lines that sit
    // inside a fence block (isProtected would otherwise pass them through).
    // -----------------------------------------------------------------------
    if (ln.trim() === '' && out.length > 0 && /^(`{3,}|~{3,})\S/.test(out[out.length - 1].trim())) {
      fixes.push(`L${n}: blank-after-fence`);
      continue;
    }

    // -----------------------------------------------------------------------
    // Rule: unordered list items must use * not -
    // Matches "- item" or "   - item" (with optional leading spaces).
    // Excludes table separators (---|---) and HR markers (---) because
    // those never have a space immediately after the leading hyphens.
    // -----------------------------------------------------------------------
    if (/^( *)- /.test(ln)) {
      const fixed = ln.replace(/^( *)- /, '$1* ');
      fixes.push(`L${n}: dash-list`);
      ln = fixed;
    }

    // -----------------------------------------------------------------------
    // Rule: remove bold markers wrapping a backtick span (**`code`** → `code`)
    // The backtick already provides distinct styling; bold is redundant.
    // -----------------------------------------------------------------------
    if (ln.includes('**`')) {
      const fixed = ln.replace(/\*\*(`[^`]+`)\*\*/g, '$1');
      if (fixed !== ln) {
        fixes.push(`L${n}: bold-backtick`);
        ln = fixed;
      }
    }

    // -----------------------------------------------------------------------
    // Rule: em-dash (—) → hyphen (-) outside inline code spans
    // -----------------------------------------------------------------------
    if (ln.includes('\u2014')) {
      const fixed = replaceOutsideInlineCode(ln, '\u2014', '-');
      if (fixed !== ln) {
        fixes.push(`L${n}: em-dash`);
        ln = fixed;
      }
    }

    // -----------------------------------------------------------------------
    // Rule: curly/smart quotes → straight ASCII quotes (outside inline code)
    // Covers left/right double quotes (U+201C/U+201D) and
    // left/right single quotes (U+2018/U+2019).
    // -----------------------------------------------------------------------
    if (/[\u201C\u201D\u2018\u2019]/.test(ln)) {
      let fixed = replaceOutsideInlineCode(ln, '\u201C', '"');
      fixed     = replaceOutsideInlineCode(fixed, '\u201D', '"');
      fixed     = replaceOutsideInlineCode(fixed, '\u2018', "'");
      fixed     = replaceOutsideInlineCode(fixed, '\u2019', "'");
      if (fixed !== ln) {
        fixes.push(`L${n}: curly-quotes`);
        ln = fixed;
      }
    }

    // -----------------------------------------------------------------------
    // Rule: numbered list → unordered list
    // Matches "1. text", "12. text" etc. at the start of the line.
    // -----------------------------------------------------------------------
    if (/^\d+\. /.test(ln)) {
      const fixed = ln.replace(/^\d+\. /, '* ');
      fixes.push(`L${n}: numbered-list`);
      ln = fixed;
    }

    // -----------------------------------------------------------------------
    // Rule: no numeric prefixes in headings (e.g. "### 7. Title" → "### Title")
    // -----------------------------------------------------------------------
    if (/^#{1,5} \d+\. /.test(ln)) {
      const fixed = ln.replace(/^(#{1,5} )\d+\. /, '$1');
      fixes.push(`L${n}: numbered-heading`);
      ln = fixed;
    }

    // -----------------------------------------------------------------------
    // Rule: no bold markers inside headings (H1–H5)
    // CSS handles heading weight; **…** is redundant and against style rules.
    // -----------------------------------------------------------------------
    if (/^#{1,5} /.test(ln) && ln.includes('**')) {
      const fixed = ln.replace(/\*\*([^*]+)\*\*/g, '$1');
      if (fixed !== ln) {
        fixes.push(`L${n}: bold-heading`);
        ln = fixed;
      }
    }

    // -----------------------------------------------------------------------
    // Rule: no backtick code spans inside headings (H1–H5)
    // -----------------------------------------------------------------------
    if (/^#{1,5} /.test(ln) && ln.includes('`')) {
      const fixed = ln.replace(/`([^`]*)`/g, '$1');
      if (fixed !== ln) {
        fixes.push(`L${n}: backtick-heading`);
        ln = fixed;
      }
    }

    // -----------------------------------------------------------------------
    // Rule: table rows must not start or end with a pipe character
    // Covers data rows:  | cell | cell |  →  cell | cell
    // Covers separators: |---|---|        →  ---|---
    // -----------------------------------------------------------------------
    if (/^\|/.test(ln) && /\|$/.test(ln)) {
      const fixed = ln
        .replace(/^\| ?/, '')  // strip leading "| " or "|"
        .replace(/ ?\|$/, ''); // strip trailing " |" or "|"
      if (fixed !== ln) {
        fixes.push(`L${n}: table-pipes`);
        ln = fixed;
      }
    }

    out.push(ln);
  }

  return { lines: out, fixes };
}

// ---------------------------------------------------------------------------
// Multi-line rules (applied via regex on the joined string)
// ---------------------------------------------------------------------------

function applyMultiLineRules(text, fixes) {
  // Rule: ensure blank line after frontmatter closing --- before any content/heading
  // Frontmatter is identified by --- at the very start (line 1), then closing ---
  const isFrontmatter = /^---\n[\s\S]*?\n---\n/.test(text);
  
  let after0 = text;
  if (isFrontmatter) {
    // For frontmatter files, ensure there's a blank line after closing ---
    // Match: opening ---, any content, closing ---, optional newline, then non-newline char
    after0 = text.replace(/^(---\n[\s\S]*?\n---)(\n)(?=\S)/m, '$1\n\n');
    if (after0 !== text) {
      fixes.push('multiline: missing blank line after frontmatter');
    }
  }

  // Rule: no blank line(s) between a --- HR and the next heading
  // e.g.  ---\n\n## Heading  →  ---\n## Heading
  // For frontmatter files, don't apply this to the closing --- of frontmatter
  let after1 = after0;
  if (!isFrontmatter) {
    after1 = after0.replace(/^---\n\n+(#{1,5} )/gm, '---\n$1');
    if (after1 !== after0) {
      fixes.push('multiline: blank between HR and heading');
    }
  } else {
    // For frontmatter files, only apply the HR rule to HRs AFTER the frontmatter
    const frontmatterEnd = after0.search(/\n---\n/);
    if (frontmatterEnd !== -1) {
      const frontmatterPart = after0.substring(0, frontmatterEnd + 5); // +5 for "\n---\n"
      const restPart = after0.substring(frontmatterEnd + 5);
      const fixedRest = restPart.replace(/^---\n\n+(#{1,5} )/gm, '---\n$1');
      if (fixedRest !== restPart) {
        fixes.push('multiline: blank between HR and heading');
        after1 = frontmatterPart + fixedRest;
      }
    }
  }

  // Rule: no blank line(s) between a heading and its first content line.
  // Skips cases where the blank is followed by another heading, HR, HTML,
  // Liquid tags, or a blank-only line (preserved intentionally).
  const after2 = after1.replace(/^(#{1,5} [^\n]+)\n\n+(?=[^\n#\-<{%])/gm, '$1\n');
  if (after2 !== after1) {
    fixes.push('multiline: blank between heading and content');
  }

  // Rule: blank line required before a table header row.
  // A table is identified by a header row (containing |) immediately followed
  // by a separator row (only [-|: ] chars, must contain both | and -).
  // Inserts a blank line if the line preceding the header is non-blank and is
  // not itself a table row (which would mean we are already inside a table).
  const after3 = after2.replace(
    /^([^\n]+)\n([^\n]*\|[^\n]*\n[-|: ]+)/gm,
    (match, prevLine, tableBlock) => {
      const sep = tableBlock.split('\n')[1] ?? '';
      if (!sep.includes('|') || !sep.includes('-')) return match;
      if (prevLine.includes('|')) return match; // already inside a table
      return `${prevLine}\n\n${tableBlock}`;
    }
  );
  if (after3 !== after2) {
    fixes.push('multiline: missing blank line before table');
  }

  // Rule: blank line required before every heading.
  // Uses line-by-line processing to correctly skip fenced code blocks,
  // where heading-like syntax (e.g. ## bash comment) must not be modified.
  // Also skips when the preceding line is an HR (---), since the hr-heading
  // rule requires headings to immediately follow an HR with no blank line.
  const after4 = (() => {
    const lines  = after3.split('\n');
    const out    = [];
    let inFence  = false;
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      if (/^(`{3,}|~{3,})/.test(ln.trim())) inFence = !inFence;

      if (!inFence && /^#{1,5} /.test(ln) && i > 0 && lines[i - 1] !== '') {
        if (!/^-+$/.test(lines[i - 1])) {
          out.push('');
          modified = true;
        }
      }
      out.push(ln);
    }

    if (modified) fixes.push('multiline: missing blank line before heading');
    return out.join('\n');
  })();

  // Rule: no blank line(s) between adjacent list items.
  // e.g.  * item a\n\n* item b  →  * item a\n* item b
  // Uses protected-block tracking so fenced code, frontmatter, and capture
  // blocks are never modified by this rule.
  const after5 = (() => {
    const lines       = after4.split('\n');
    const out         = [];
    const isProtected = makeFenceTracker();
    let modified      = false;

    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];

      if (isProtected(ln)) {
        out.push(ln);
        continue;
      }

      if (ln.trim() === '') {
        let prevIndex = out.length - 1;
        while (prevIndex >= 0 && out[prevIndex].trim() === '') prevIndex--;

        let nextIndex = i + 1;
        while (nextIndex < lines.length && lines[nextIndex].trim() === '') nextIndex++;

        const prev = prevIndex >= 0 ? out[prevIndex] : '';
        const next = nextIndex < lines.length ? lines[nextIndex] : '';

        if (isListItemLine(prev) && isListItemLine(next)) {
          modified = true;
          continue;
        }
      }

      out.push(ln);
    }

    if (modified) fixes.push('multiline: blank between list items');
    return out.join('\n');
  })();

  return after5;
}

// ---------------------------------------------------------------------------
// Warning checks (report only — cannot be auto-fixed)
// ---------------------------------------------------------------------------

/**
 * Checks for Markdown tables that immediately follow a heading or HR with no
 * intervening prose sentence. Returns an array of warning strings.
 *
 * Detection logic:
 *   A table separator row is a line containing only [-|: ] chars that
 *   includes both '|' and '-'. When one is found, we walk back past the
 *   header row to the first non-blank line before it. If that line is a
 *   heading (# …) or an HR (---), the table has no intro sentence.
 */
function checkTableIntros(lines) {
  const warnings   = [];
  const isProtected = makeFenceTracker();

  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (isProtected(ln)) continue;

    // Table separator: only dashes, pipes, colons, spaces — and must have both
    if (!/^[-|: ]+$/.test(ln) || !ln.includes('|') || !ln.includes('-')) continue;

    // The line before the separator is the header row — it must contain '|'
    if (i < 1 || !lines[i - 1].includes('|')) continue;

    // Walk back past the header to find the last non-blank line before it
    let prev = i - 2;
    while (prev >= 0 && lines[prev].trim() === '') prev--;

    // Flag if that line is a heading or HR (meaning no intro sentence exists)
    if (prev < 0 || /^#{1,5} /.test(lines[prev]) || /^-+$/.test(lines[prev])) {
      warnings.push(`L${i + 1}: table-no-intro`);
    }
  }

  return warnings;
}

// ---------------------------------------------------------------------------
// File processor
// ---------------------------------------------------------------------------

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const lines    = original.split('\n');

  const { lines: patched, fixes } = applyLineRules(lines);
  const result   = applyMultiLineRules(patched.join('\n'), fixes);
  const warnings = checkTableIntros(result.split('\n'));

  const hasChanges  = result !== original;
  const hasWarnings = warnings.length > 0;

  if (!hasChanges && !hasWarnings) return { changed: false, warned: false };

  if (hasChanges && !CHECK) {
    fs.writeFileSync(filePath, result, 'utf8');
  }

  const rel = path.relative(process.cwd(), filePath);

  if (hasChanges && !QUIET) {
    const status = CHECK ? '\u26A0\uFE0F  CHECK' : '\u2705 FIXED';
    console.log(`${status}  ${rel}  (${fixes.length} fix${fixes.length === 1 ? '' : 'es'})`);
    fixes.forEach(f => console.log(`        ${f}`));
  }

  if (hasWarnings && !QUIET) {
    console.log(`\uD83D\uDCA1 WARN   ${rel}  (${warnings.length} table${warnings.length === 1 ? '' : 's'} missing intro sentence)`);
    warnings.forEach(w => console.log(`        ${w}`));
  }

  return { changed: hasChanges, warned: hasWarnings };
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

function collectMarkdownFiles(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    return target.endsWith('.md') ? [target] : [];
  }

  const files = [];
  const SKIP  = new Set([
    'node_modules', 'vendor', '3rdparty', 'bgfx', 'build',
    'dist', '.git', 'generated',
  ]);

  (function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      if (SKIP.has(entry)) continue;

      const full = path.join(dir, entry);
      const s    = fs.statSync(full);

      if (s.isDirectory()) {
        walk(full);
      } else if (entry.endsWith('.md')) {
        files.push(full);
      }
    }
  })(target);

  return files;
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const mdFiles = collectMarkdownFiles(TARGET);
let changed = 0;
let warned  = 0;

for (const f of mdFiles) {
  const result = processFile(f);
  if (result.changed) changed++;
  if (result.warned)  warned++;
}

if (changed === 0 && warned === 0) {
  console.log('All markdown files are properly formatted.');
} else {
  if (changed > 0 && CHECK) {
    console.log(`\n${changed} file(s) need formatting. Run without --check to apply fixes.`);
  } else if (changed > 0) {
    console.log(`\nFormatted ${changed} file(s).`);
  }
  if (warned > 0) {
    console.log(`\n${warned} file(s) have tables missing an intro sentence (add prose before the table header).`);
  }
}

if (CHECK && (changed > 0 || warned > 0)) process.exit(1);
