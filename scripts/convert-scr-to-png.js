#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BIT_DEPTHS = [2, 4, 8];

function printHelp() {
  console.log(`
SCR to PNG Converter
====================

Converts Nintendo workstation .SCR layout files into PNGs using the matching
.CGX graphics bank and optional .COL palette bank. Folder mode also writes a
tile-sheet PNG for every .CGX it finds.

Usage
-----
node scripts/convert-scr-to-png.js <file.scr|folder> [options]

Options
-------
--cgx <file>         Path to the matching .CGX file
--col <file>         Path to the matching .COL file
--out <file>         Output PNG path
--bit-depth <n>      Force 2, 4, or 8bpp instead of auto-detect
--block <mode>       all, 0, 1, 2, or 3
--help               Show this help

Default behavior
----------------
If only a .SCR path is passed, the script looks in the same directory for:

* <same-name>.CGX or <same-name>.cgx
* <same-name>.COL or <same-name>.col

If a folder is passed instead, the script scans it recursively and converts every
".SCR" file it finds using those same matching rules. It also renders every
".CGX" file as a standalone tile-sheet PNG named like "file.CGX.png".

Standalone CGX previews use:

* the same-name .COL first
* otherwise the closest-named sibling .COL
* otherwise grayscale

If a same-name .SCR exists beside a .CGX, it is also used for bit-depth
auto-detection.

Examples
--------
node scripts/convert-scr-to-png.js assets/TITLE.SCR
node scripts/convert-scr-to-png.js assets/
node scripts/convert-scr-to-png.js assets/TITLE.SCR --cgx assets/TITLE.CGX --col assets/TITLE.COL
node scripts/convert-scr-to-png.js assets/end-demo-A.SCR --bit-depth 2 --out /tmp/end-demo-A.png
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function readFile(filePath) {
  return new Uint8Array(fs.readFileSync(filePath));
}

function parseArgs(argv) {
  const args = argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  if (args.length === 0) {
    printHelp();
    process.exit(1);
  }

  const options = {
    scr: null,
    cgx: null,
    col: null,
    out: null,
    bitDepth: null,
    block: 'all',
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    if (!arg.startsWith('--') && !options.scr) {
      options.scr = arg;
      continue;
    }

    if (arg === '--cgx') {
      options.cgx = args[++i];
      continue;
    }

    if (arg === '--col') {
      options.col = args[++i];
      continue;
    }

    if (arg === '--out') {
      options.out = args[++i];
      continue;
    }

    if (arg === '--bit-depth') {
      const value = Number(args[++i]);
      if (!BIT_DEPTHS.includes(value)) {
        fail(`Invalid bit depth "${value}". Use 2, 4, or 8.`);
      }
      options.bitDepth = value;
      continue;
    }

    if (arg === '--block') {
      const value = args[++i];
      if (!(value === 'all' || ['0', '1', '2', '3'].includes(value))) {
        fail('Invalid block mode. Use all, 0, 1, 2, or 3.');
      }
      options.block = value;
      continue;
    }

    fail(`Unknown argument "${arg}". Use --help for usage.`);
  }

  if (!options.scr) {
    fail('Missing .SCR input path.');
  }

  return options;
}

function fileExists(filePath) {
  return filePath && fs.existsSync(filePath) && fs.statSync(filePath).isFile();
}

function directoryExists(filePath) {
  return filePath && fs.existsSync(filePath) && fs.statSync(filePath).isDirectory();
}

function findSibling(basePath, extensions) {
  const directory = path.dirname(basePath);
  const stem = path.basename(basePath, path.extname(basePath));

  for (const extension of extensions) {
    const candidate = path.join(directory, `${stem}${extension}`);
    if (fileExists(candidate)) {
      return candidate;
    }
  }

  return null;
}

function findScrFilesRecursively(directoryPath) {
  const results = [];

  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.scr') {
        results.push(fullPath);
      }
    }
  }

  walk(directoryPath);
  return results.sort();
}

function findFilesRecursively(directoryPath, lowerCaseExtension) {
  const results = [];

  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && path.extname(entry.name).toLowerCase() === lowerCaseExtension) {
        results.push(fullPath);
      }
    }
  }

  walk(directoryPath);
  return results.sort();
}

function commonPrefixLength(a, b) {
  let i = 0;
  const limit = Math.min(a.length, b.length);
  while (i < limit && a[i] === b[i]) {
    i += 1;
  }
  return i;
}

function findBestSiblingCol(basePath) {
  const exact = findSibling(basePath, ['.COL', '.col']);
  if (exact) {
    return exact;
  }

  const directory = path.dirname(basePath);
  const targetStem = path.basename(basePath, path.extname(basePath)).toLowerCase();
  const candidates = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && ['.col'].includes(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name);

  if (candidates.length === 0) {
    return null;
  }

  const ranked = candidates
    .map((name) => {
      const stem = path.basename(name, path.extname(name)).toLowerCase();
      const prefixScore = commonPrefixLength(targetStem, stem);
      const containsScore = targetStem.includes(stem) || stem.includes(targetStem) ? 50 : 0;
      const lengthPenalty = Math.abs(targetStem.length - stem.length);
      return {
        name,
        score: prefixScore * 10 + containsScore - lengthPenalty,
      };
    })
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  return path.join(directory, ranked[0].name);
}

function bytesPerTile(bitDepth) {
  if (bitDepth === 2) return 16;
  if (bitDepth === 4) return 32;
  return 64;
}

function scale5Bit(value) {
  return (value << 3) | (value >> 2);
}

function decodePaletteColor(value) {
  const red = scale5Bit(value & 0x1f);
  const green = scale5Bit((value >> 5) & 0x1f);
  const blue = scale5Bit((value >> 10) & 0x1f);
  return { red, green, blue };
}

function parseCol(buffer) {
  if (!buffer || buffer.length < 2) {
    return null;
  }

  const colors = [];
  const wordCount = Math.floor(buffer.length / 2);

  for (let i = 0; i < wordCount; i += 1) {
    const offset = i * 2;
    const value = buffer[offset] | (buffer[offset + 1] << 8);
    colors.push(decodePaletteColor(value));
  }

  const rows = [];
  for (let i = 0; i < colors.length; i += 16) {
    rows.push(colors.slice(i, i + 16));
  }

  return { rows };
}

function parseCgx(buffer, bitDepth) {
  const tileSize = bytesPerTile(bitDepth);
  const tileCount = Math.floor(buffer.length / tileSize);
  const tiles = [];

  for (let i = 0; i < tileCount; i += 1) {
    const start = i * tileSize;
    tiles.push(buffer.slice(start, start + tileSize));
  }

  return {
    tileCount,
    bytesPerTile: tileSize,
    tiles,
  };
}

function parseScr(buffer) {
  const layoutBytes = Math.min(buffer.length, 8192);
  const blocks = [];
  const tileIndexes = [];

  for (let blockIndex = 0; blockIndex < 4; blockIndex += 1) {
    const entries = [];
    const blockOffset = blockIndex * 2048;
    if (blockOffset >= layoutBytes) break;

    for (let offset = blockOffset; offset + 1 < Math.min(blockOffset + 2048, layoutBytes); offset += 2) {
      const raw = buffer[offset] | (buffer[offset + 1] << 8);
      const entry = {
        raw,
        tileIndex: raw & 0x03ff,
        paletteIndex: (raw >> 10) & 0x07,
        priority: (raw >> 13) & 0x01,
        hFlip: ((raw >> 14) & 0x01) === 1,
        vFlip: ((raw >> 15) & 0x01) === 1,
      };
      entries.push(entry);
      tileIndexes.push(entry.tileIndex);
    }

    blocks.push(entries);
  }

  return {
    byteLength: buffer.length,
    blocks,
    tileIndexes,
  };
}

function detectBitDepth(scr, cgxBuffer) {
  if (!scr || !cgxBuffer || scr.tileIndexes.length === 0) {
    return null;
  }

  const maxTileIndex = Math.max(...scr.tileIndexes);
  const fits = BIT_DEPTHS.filter(
    (bitDepth) => Math.floor(cgxBuffer.length / bytesPerTile(bitDepth)) > maxTileIndex,
  );

  return {
    recommended: fits[0] || null,
    fits,
    maxTileIndex,
  };
}

function decodePixel(tile, bitDepth, x, y) {
  const shift = 7 - x;
  const p0 = (tile[y * 2] >> shift) & 1;
  const p1 = (tile[y * 2 + 1] >> shift) & 1;

  if (bitDepth === 2) {
    return p0 | (p1 << 1);
  }

  const p2 = (tile[16 + y * 2] >> shift) & 1;
  const p3 = (tile[16 + y * 2 + 1] >> shift) & 1;

  if (bitDepth === 4) {
    return p0 | (p1 << 1) | (p2 << 2) | (p3 << 3);
  }

  const p4 = (tile[32 + y * 2] >> shift) & 1;
  const p5 = (tile[32 + y * 2 + 1] >> shift) & 1;
  const p6 = (tile[48 + y * 2] >> shift) & 1;
  const p7 = (tile[48 + y * 2 + 1] >> shift) & 1;

  return p0 | (p1 << 1) | (p2 << 2) | (p3 << 3) | (p4 << 4) | (p5 << 5) | (p6 << 6) | (p7 << 7);
}

function getPaletteColor(palette, paletteIndex, colorIndex, bitDepth) {
  if (!palette) {
    const max = (1 << bitDepth) - 1;
    const shade = Math.round((colorIndex / Math.max(max, 1)) * 255);
    return { red: shade, green: shade, blue: shade };
  }

  if (bitDepth === 8) {
    const flat = palette.rows.flat().slice(0, 256);
    return flat[colorIndex] || { red: 0, green: 0, blue: 0 };
  }

  const row = palette.rows[paletteIndex] || palette.rows[0] || [];
  const rowSize = bitDepth === 2 ? 4 : 16;
  return row[colorIndex % rowSize] || { red: 0, green: 0, blue: 0 };
}

function drawBlock(rgba, canvasWidth, startX, startY, block, cgx, palette, bitDepth) {
  for (let tileIndex = 0; tileIndex < block.length; tileIndex += 1) {
    const entry = block[tileIndex];
    const tile = cgx.tiles[entry.tileIndex];
    const tileX = startX + (tileIndex % 32) * 8;
    const tileY = startY + Math.floor(tileIndex / 32) * 8;

    for (let py = 0; py < 8; py += 1) {
      for (let px = 0; px < 8; px += 1) {
        const sourceX = entry.hFlip ? 7 - px : px;
        const sourceY = entry.vFlip ? 7 - py : py;
        const colorIndex = tile ? decodePixel(tile, bitDepth, sourceX, sourceY) : 0;
        const color = getPaletteColor(palette, entry.paletteIndex, colorIndex, bitDepth);
        const pixelOffset = ((tileY + py) * canvasWidth + (tileX + px)) * 4;
        rgba[pixelOffset] = color.red;
        rgba[pixelOffset + 1] = color.green;
        rgba[pixelOffset + 2] = color.blue;
        rgba[pixelOffset + 3] = 255;
      }
    }
  }
}

function renderScr(scr, cgx, palette, bitDepth, blockMode) {
  const blockWidth = 32 * 8;
  const blockHeight = 32 * 8;
  const showAll = blockMode === 'all';
  const width = showAll ? blockWidth * 2 : blockWidth;
  const height = showAll ? blockHeight * 2 : blockHeight;
  const rgba = Buffer.alloc(width * height * 4);

  const blockIndexes = showAll ? [0, 1, 2, 3] : [Number(blockMode)];

  for (const blockIndex of blockIndexes) {
    const block = scr.blocks[blockIndex];
    if (!block) continue;
    const offsetX = showAll ? (blockIndex % 2) * blockWidth : 0;
    const offsetY = showAll ? Math.floor(blockIndex / 2) * blockHeight : 0;
    drawBlock(rgba, width, offsetX, offsetY, block, cgx, palette, bitDepth);
  }

  return { width, height, rgba };
}

function renderCgx(cgx, palette, bitDepth, tilesPerRow = 16) {
  const width = tilesPerRow * 8;
  const tileRows = Math.max(1, Math.ceil(cgx.tileCount / tilesPerRow));
  const height = tileRows * 8;
  const rgba = Buffer.alloc(width * height * 4);

  for (let tileIndex = 0; tileIndex < cgx.tiles.length; tileIndex += 1) {
    const tile = cgx.tiles[tileIndex];
    const tileX = (tileIndex % tilesPerRow) * 8;
    const tileY = Math.floor(tileIndex / tilesPerRow) * 8;

    for (let py = 0; py < 8; py += 1) {
      for (let px = 0; px < 8; px += 1) {
        const colorIndex = decodePixel(tile, bitDepth, px, py);
        const color = getPaletteColor(palette, 0, colorIndex, bitDepth);
        const pixelOffset = ((tileY + py) * width + (tileX + px)) * 4;
        rgba[pixelOffset] = color.red;
        rgba[pixelOffset + 1] = color.green;
        rgba[pixelOffset + 2] = color.blue;
        rgba[pixelOffset + 3] = 255;
      }
    }
  }

  return { width, height, rgba };
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buffer) {
  let crc = 0xffffffff;
  for (let i = 0; i < buffer.length; i += 1) {
    crc = CRC_TABLE[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32BE(data.length, 0);
  const crcBuffer = Buffer.alloc(4);
  const crcValue = crc32(Buffer.concat([typeBuffer, data]));
  crcBuffer.writeUInt32BE(crcValue, 0);
  return Buffer.concat([lengthBuffer, typeBuffer, data, crcBuffer]);
}

function encodePng(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0;
    rgba.copy(raw, rowStart + 1, y * stride, y * stride + stride);
  }

  const compressed = zlib.deflateSync(raw);
  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0)),
  ]);
}

function convertSingleScr(scrPath, options, directoryMode = false, rootDirectory = null) {
  const cgxPath = options.cgx
    ? path.resolve(options.cgx)
    : findSibling(scrPath, ['.CGX', '.cgx']);
  const colPath = options.col
    ? path.resolve(options.col)
    : findSibling(scrPath, ['.COL', '.col']);

  if (!cgxPath) {
    throw new Error(`No matching .CGX file found for ${scrPath}`);
  }

  if (!fileExists(cgxPath)) {
    throw new Error(`CGX file not found: ${cgxPath}`);
  }

  let outPath;
  if (options.out && !directoryMode) {
    outPath = path.resolve(options.out);
  } else if (options.out && directoryMode) {
    const outRoot = path.resolve(options.out);
    const relativeDir = rootDirectory ? path.relative(rootDirectory, path.dirname(scrPath)) : '';
    const targetDir = path.join(outRoot, relativeDir);
    fs.mkdirSync(targetDir, { recursive: true });
    outPath = path.join(targetDir, `${path.basename(scrPath, path.extname(scrPath))}.png`);
  } else {
    outPath = path.join(path.dirname(scrPath), `${path.basename(scrPath, path.extname(scrPath))}.png`);
  }

  const scrBuffer = readFile(scrPath);
  const cgxBuffer = readFile(cgxPath);
  const colBuffer = colPath && fileExists(colPath) ? readFile(colPath) : null;

  const scr = parseScr(scrBuffer);
  const detect = detectBitDepth(scr, cgxBuffer);
  const bitDepth = options.bitDepth || (detect && detect.recommended) || 4;
  const cgx = parseCgx(cgxBuffer, bitDepth);
  const palette = parseCol(colBuffer);
  const rendered = renderScr(scr, cgx, palette, bitDepth, options.block);
  const png = encodePng(rendered.width, rendered.height, rendered.rgba);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);

  return {
    outPath,
    scrPath,
    cgxPath,
    colPath: colPath && fileExists(colPath) ? colPath : null,
    bitDepth,
    detect,
    width: rendered.width,
    height: rendered.height,
  };
}

function convertSingleCgx(cgxPath, options, rootDirectory = null) {
  const colPath = findBestSiblingCol(cgxPath);
  const siblingScrPath = findSibling(cgxPath, ['.SCR', '.scr']);
  const cgxBuffer = readFile(cgxPath);
  const scr = siblingScrPath && fileExists(siblingScrPath) ? parseScr(readFile(siblingScrPath)) : null;
  const detect = detectBitDepth(scr, cgxBuffer);
  const bitDepth = options.bitDepth || (detect && detect.recommended) || 4;
  const palette = colPath && fileExists(colPath) ? parseCol(readFile(colPath)) : null;
  const cgx = parseCgx(cgxBuffer, bitDepth);
  const rendered = renderCgx(cgx, palette, bitDepth, 16);
  const png = encodePng(rendered.width, rendered.height, rendered.rgba);

  let outPath;
  if (options.out) {
    const outRoot = path.resolve(options.out);
    const relativeDir = rootDirectory ? path.relative(rootDirectory, path.dirname(cgxPath)) : '';
    const targetDir = path.join(outRoot, relativeDir);
    fs.mkdirSync(targetDir, { recursive: true });
    outPath = path.join(targetDir, `${path.basename(cgxPath)}.png`);
  } else {
    outPath = `${cgxPath}.png`;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);

  return {
    outPath,
    cgxPath,
    colPath: colPath && fileExists(colPath) ? colPath : null,
    scrPath: siblingScrPath && fileExists(siblingScrPath) ? siblingScrPath : null,
    bitDepth,
    detect,
    width: rendered.width,
    height: rendered.height,
  };
}

function main() {
  const options = parseArgs(process.argv);
  const inputPath = path.resolve(options.scr);

  if (fileExists(inputPath)) {
    const result = convertSingleScr(inputPath, options, false, null);
    console.log(`Wrote ${result.outPath}`);
    console.log(`SCR: ${result.scrPath}`);
    console.log(`CGX: ${result.cgxPath}`);
    console.log(`COL: ${result.colPath || 'none, grayscale fallback'}`);
    console.log(`Bit depth: ${result.bitDepth}bpp`);
    if (result.detect) {
      console.log(
        `Auto-detect: max tile ${result.detect.maxTileIndex}, fits ${result.detect.fits.length ? result.detect.fits.join(', ') + 'bpp' : 'none'}`
      );
    }
    console.log(`View: ${options.block === 'all' ? 'all 4 blocks' : `block ${options.block}`}`);
    console.log(`Output size: ${result.width}x${result.height}`);
    return;
  }

  if (directoryExists(inputPath)) {
    if (options.cgx || options.col) {
      fail('Do not use --cgx or --col with a directory input. Folder mode auto-matches each SCR by basename.');
    }

    const scrFiles = findScrFilesRecursively(inputPath);
    const cgxFiles = findFilesRecursively(inputPath, '.cgx');
    if (scrFiles.length === 0) {
      console.log(`No .SCR files found under ${inputPath}`);
    }

    let convertedScr = 0;
    let skippedScr = 0;
    let convertedCgx = 0;
    let skippedCgx = 0;

    for (const scrPath of scrFiles) {
      try {
        const result = convertSingleScr(scrPath, options, true, inputPath);
        convertedScr += 1;
        console.log(`Wrote ${result.outPath}`);
      } catch (error) {
        skippedScr += 1;
        console.error(`Skipped ${scrPath}: ${error.message}`);
      }
    }

    for (const cgxPath of cgxFiles) {
      try {
        const result = convertSingleCgx(cgxPath, options, inputPath);
        convertedCgx += 1;
        console.log(`Wrote ${result.outPath}`);
      } catch (error) {
        skippedCgx += 1;
        console.error(`Skipped ${cgxPath}: ${error.message}`);
      }
    }

    console.log(`Converted ${convertedScr} SCR files`);
    console.log(`Converted ${convertedCgx} CGX files`);
    if (skippedScr > 0) {
      console.log(`Skipped ${skippedScr} SCR files`);
    }
    if (skippedCgx > 0) {
      console.log(`Skipped ${skippedCgx} CGX files`);
    }
    return;
  }

  fail(`Input path not found: ${inputPath}`);
}

main();
