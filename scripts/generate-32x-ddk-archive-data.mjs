/** Generate metadata and descriptions for the reusable archive explorer.
 *
 * Usage: node scripts/generate-32x-ddk-archive-data.mjs /path/to/32X-DDK
 * Source bytes, absolute paths, and copied filesystem dates are never published.
 */

import { closeSync, openSync, readSync, readdirSync, lstatSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { description } from './32x-ddk-archive-descriptions.mjs';

const source = process.argv[2] && resolve(process.argv[2]);
if (!source) throw new Error('Usage: node scripts/generate-32x-ddk-archive-data.mjs /path/to/32X-DDK');

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
      const sample = Buffer.alloc(Math.min(size, 65536));
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
  root: '32X-DDK',
  initialPath: 'SEGADTS/32X',
  locations: [
    { label: '32X tools', path: 'SEGADTS/32X' },
    { label: '32X docs', path: 'sega/32X' },
    { label: 'Sega bulletins', path: 'sega/Bulletins' },
    { label: 'SGL 1.0', path: 'SGL_1.0' },
    { label: 'GNU toolchain', path: 'SEGADTS/GNU' },
    { label: 'Saturn sound driver', path: 'SEGADTS/SATURN/SND_DRV' },
    { label: 'Nov 94 drop', path: 'ARCHIVES/NOV01_94.DTS/32X' },
    { label: 'Mar 95 drop', path: 'ARCHIVES/MAR01_95.DTS/32X' }
  ],
  note: 'File contents and original development dates are not included. Descriptions are based on inspected formats, filenames, and documentation references; uncertain entries are marked.',
  folders,
  files
};

const output = resolve(dirname(fileURLToPath(import.meta.url)), '../public/data/32x-ddk-archive.json');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify(data));
process.stdout.write(`Wrote ${files.length} files and ${folders.length} folders to ${output}\n`);
