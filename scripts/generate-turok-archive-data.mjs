/** Generate metadata and descriptions for the reusable archive explorer.
 *
 * Usage: node scripts/generate-turok-archive-data.mjs /path/to/src
 * Source bytes, absolute paths, and copied filesystem dates are never published.
 */

import { closeSync, openSync, readSync, readdirSync, lstatSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { description } from './turok-archive-descriptions.mjs';

const source = process.argv[2] && resolve(process.argv[2]);
if (!source) throw new Error('Usage: node scripts/generate-turok-archive-data.mjs /path/to/src');

const folders = [];
const files = [];

function visit(folder) {
  for (const entry of readdirSync(folder, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.toLowerCase() === '.ds_store') continue;
    const absolute = join(folder, entry.name);
    const path = relative(source, absolute).split(sep).join('/');
    if (entry.isDirectory()) {
      folders.push(path);
      visit(absolute);
    } else if (entry.isFile() && !entry.isSymbolicLink()) {
      const size = lstatSync(absolute).size;
      const textLike = path.startsWith('PR/tengine/') && /\.(?:c|cc|cpp|h|hpp|s|asm|bak|inst|txt|mak|scc|old|orig)$/i.test(path);
      const sample = Buffer.alloc(Math.min(size, textLike ? 2097152 : 65536));
      const fd = openSync(absolute, 'r');
      try { readSync(fd, sample, 0, sample.length, 0); } finally { closeSync(fd); }
      const info = description(path, sample);
      files.push({ path, size, description: info.text, basis: info.basis });
    }
  }
}

visit(source);
const data = {
  version: 1,
  root: 'src',
  initialPath: 'PR/tengine',
  locations: [
    { label: 'Turok engine', path: 'PR/tengine' },
    { label: 'Nintendo SDK', path: 'PR' },
    { label: 'GNU acpp', path: 'gnu/acpp' },
    { label: 'SLATEC', path: 'slatec' },
    { label: 'X11 Motif', path: 'X11/motif' }
  ],
  note: 'File contents and original development dates are not included. Descriptions are based on inspected formats, source declarations, and documented archive research; uncertain entries are marked.',
  folders,
  files
};

const output = resolve(dirname(fileURLToPath(import.meta.url)), '../public/data/turok-source-archive.json');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify(data));
process.stdout.write(`Wrote ${files.length} files and ${folders.length} folders to ${output}\n`);
