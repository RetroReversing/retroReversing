/** Generate the Chicken Run archive index for the reusable archive explorer.
 *
 * Usage: node scripts/generate-chicken-run-archive-data.mjs "/path/to/Chicken Run [source]"
 * Source bytes, absolute paths, and copied filesystem dates are never published.
 */

import { closeSync, openSync, readSync, readdirSync, lstatSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { description } from './chicken-run-archive-descriptions.mjs';

const source = process.argv[2] && resolve(process.argv[2]);
if (!source) throw new Error('Usage: node scripts/generate-chicken-run-archive-data.mjs /path/to/source');

const folders = [];
const files = [];
const folderDescriptions = [
  {
    path: '',
    description: 'Top of the leaked Chicken Run source copy. The two named folders are the Dreamcast game tree and a small PSI model viewer adapted from the Frogger 2 shell.',
    basis: 'Identified from the contained folder names, makefiles, and source trees'
  },
  {
    path: 'cr',
    description: 'Primary Dreamcast working tree. Its root contains the Katana port, while its subfolders preserve the PlayStation build, a source snapshot, copied headers, lookup tables, and Visual Studio metadata.',
    basis: 'Identified from the contained makefiles, projects, and source trees'
  },
  {
    path: 'cr/Copy of source',
    description: 'Parallel source snapshot kept beside the Dreamcast files. Many files match the root tree, while others preserve alternate revisions of the same shared game code.',
    basis: 'Identified by comparing shared filenames and file contents'
  },
  {
    path: 'cr/cr',
    description: 'Visual Studio 6 and SourceSafe metadata for the Win32 external-target project. This folder records the PC project and its original source-control connection rather than another copy of the game code.',
    basis: 'Identified from the DSP, build log, and source-control metadata'
  },
  {
    path: 'cr/incbn',
    description: 'Binary maths lookup tables used by the shared engine: arccosine data and a square-root table. The assembly include file that embeds these tables sits in the parent source tree.',
    basis: 'Identified from the binary filenames and declarations in incbin.s'
  },
  {
    path: 'cr/includeps',
    description: 'Local include directory containing copied Sony PlayStation SDK headers and headers for the in-house ISL libraries used by the shared and Dreamcast-conversion code.',
    basis: 'Identified from header names and declarations'
  },
  {
    path: 'cr/source',
    description: 'PlayStation PSYQ build tree. It contains the PlayStation-oriented copy of the game code, regional and demo makefiles, linker scripts, mastering batches, and platform-specific support files.',
    basis: 'Identified from the PSYQ makefiles, linker scripts, and mastering commands'
  },
  {
    path: 'simple model shell',
    description: 'Small Katana and Kamui 2 model viewer built around the PSI model plotter. Its startup code still identifies it as the Frogger 2 shell, showing the tool was adapted for Chicken Run artists.',
    basis: 'Identified from the makefile, entry point, and model-rendering sources'
  }
];

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
      const sample = Buffer.alloc(Math.min(size, 262144));
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
  root: 'Chicken Run',
  initialPath: 'cr',
  locations: [
    { label: 'Dreamcast tree', path: 'cr' },
    { label: 'PlayStation tree', path: 'cr/source' },
    { label: 'Source snapshot', path: 'cr/Copy of source' },
    { label: 'Library headers', path: 'cr/includeps' },
    { label: 'Model shell', path: 'simple model shell' }
  ],
  note: 'File contents and copied filesystem dates are not included. Descriptions come from comments, declarations, and file headers in this archive. Uncertain entries are marked.',
  folders,
  folderDescriptions,
  files
};

const output = resolve(dirname(fileURLToPath(import.meta.url)), '../public/data/chicken-run-source-archive.json');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify(data));
const uncertain = files.filter((file) => /not established|Empty file|Binary file/.test(file.description));
process.stdout.write(`Wrote ${files.length} files and ${folders.length} folders\n`);
process.stdout.write(`Uncertain: ${uncertain.length}\n`);
for (const file of uncertain) process.stdout.write(`  ${file.path}: ${file.description}\n`);
