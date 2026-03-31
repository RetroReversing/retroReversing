import { useEffect, useMemo, useRef, useState } from 'react';
import FileUpload from './FileUpload';

type BitDepth = 2 | 4 | 8;
type ViewMode = 'all' | 0 | 1 | 2 | 3;

interface AutoDetectResult {
  recommended: BitDepth | null;
  fits: BitDepth[];
  maxTileIndex: number;
}

interface PaletteColor {
  value: number;
  hex: string;
  rgbHex: string;
}

interface ParsedCol {
  rows: PaletteColor[][];
}

interface ParsedCgx {
  tileCount: number;
  bytesPerTile: number;
  tiles: Uint8Array[];
  warnings: string[];
}

interface ScrEntry {
  raw: number;
  tileIndex: number;
  paletteIndex: number;
  priority: number;
  hFlip: boolean;
  vFlip: boolean;
}

interface ParsedScr {
  byteLength: number;
  layoutBytes: number;
  metadataBytes: number;
  trailerBytes: number;
  extraBytes: number;
  entryCount: number;
  blockCount: number;
  blocks: ScrEntry[][];
  warnings: string[];
  paletteUsage: number[];
  priorityUsage: number[];
  hFlipUsage: number[];
  vFlipUsage: number[];
}

function detectBitDepth(scr: ParsedScr | null, cgxBuffer: Uint8Array | null): AutoDetectResult | null {
  if (!scr || !cgxBuffer) return null;

  const tileIndexes = scr.blocks.flat().map((entry) => entry.tileIndex);
  if (tileIndexes.length === 0) return null;

  const maxTileIndex = Math.max(...tileIndexes);
  const fits = ([2, 4, 8] as BitDepth[]).filter(
    (bitDepth) => Math.floor(cgxBuffer.length / bytesPerTile(bitDepth)) > maxTileIndex,
  );

  return {
    recommended: fits[0] ?? null,
    fits,
    maxTileIndex,
  };
}

function bytesPerTile(bitDepth: BitDepth): number {
  if (bitDepth === 2) return 16;
  if (bitDepth === 4) return 32;
  return 64;
}

function scale5Bit(value: number): number {
  return (value << 3) | (value >> 2);
}

function decodePaletteColor(value: number): PaletteColor {
  const red = scale5Bit(value & 0x1f);
  const green = scale5Bit((value >> 5) & 0x1f);
  const blue = scale5Bit((value >> 10) & 0x1f);

  return {
    value,
    hex: value.toString(16).toUpperCase().padStart(4, '0'),
    rgbHex: `#${red.toString(16).padStart(2, '0')}${green
      .toString(16)
      .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`,
  };
}

function parseCol(buffer: Uint8Array): ParsedCol | null {
  if (buffer.length < 2) return null;
  const colors: PaletteColor[] = [];
  const wordCount = Math.floor(buffer.length / 2);

  for (let i = 0; i < wordCount; i += 1) {
    const offset = i * 2;
    const value = buffer[offset] | (buffer[offset + 1] << 8);
    colors.push(decodePaletteColor(value));
  }

  const rows: PaletteColor[][] = [];
  for (let i = 0; i < colors.length; i += 16) {
    rows.push(colors.slice(i, i + 16));
  }

  return { rows };
}

function parseCgx(buffer: Uint8Array, bitDepth: BitDepth): ParsedCgx {
  const warnings: string[] = [];
  const tileSize = bytesPerTile(bitDepth);
  const tileCount = Math.floor(buffer.length / tileSize);
  const remainder = buffer.length % tileSize;

  if (remainder !== 0) {
    warnings.push(
      `${remainder} trailing bytes do not fit the selected ${bitDepth}bpp tile size and were ignored.`,
    );
  }

  const tiles: Uint8Array[] = [];
  for (let i = 0; i < tileCount; i += 1) {
    const start = i * tileSize;
    tiles.push(buffer.slice(start, start + tileSize));
  }

  return {
    tileCount,
    bytesPerTile: tileSize,
    tiles,
    warnings,
  };
}

function parseScr(buffer: Uint8Array): ParsedScr | null {
  if (buffer.length < 2) return null;

  const warnings: string[] = [];
  if (buffer.length % 2 !== 0) {
    warnings.push('Odd file size detected. The final byte was ignored.');
  }

  const layoutBytes = Math.min(buffer.length, 8192);
  const wordCount = Math.floor(layoutBytes / 2);
  const blockCount = Math.min(4, Math.floor(wordCount / 1024));
  const blocks: ScrEntry[][] = [];

  const paletteSet = new Set<number>();
  const prioritySet = new Set<number>();
  const hFlipSet = new Set<number>();
  const vFlipSet = new Set<number>();

  for (let blockIndex = 0; blockIndex < blockCount; blockIndex += 1) {
    const entries: ScrEntry[] = [];
    const startWord = blockIndex * 1024;

    for (let i = 0; i < 1024 && startWord + i < wordCount; i += 1) {
      const wordOffset = (startWord + i) * 2;
      const raw = buffer[wordOffset] | (buffer[wordOffset + 1] << 8);
      const entry: ScrEntry = {
        raw,
        tileIndex: raw & 0x03ff,
        paletteIndex: (raw >> 10) & 0x07,
        priority: (raw >> 13) & 0x01,
        hFlip: ((raw >> 14) & 0x01) === 1,
        vFlip: ((raw >> 15) & 0x01) === 1,
      };
      entries.push(entry);
      paletteSet.add(entry.paletteIndex);
      prioritySet.add(entry.priority);
      hFlipSet.add(entry.hFlip ? 1 : 0);
      vFlipSet.add(entry.vFlip ? 1 : 0);
    }

    blocks.push(entries);
  }

  const metadataBytes = buffer.length > 8192 ? Math.min(buffer.length - 8192, 256) : 0;
  const trailerBytes =
    buffer.length > 8448 ? Math.min(buffer.length - 8448, 512) : Math.max(0, buffer.length - 8448);
  const extraBytes = Math.max(0, buffer.length - 8960);

  if (buffer.length < 8192) {
    warnings.push('This file is shorter than the common four-block 8192-byte SCR layout region.');
  } else if (buffer.length > 8192) {
    warnings.push(
      'This viewer renders the first 8192 bytes as four 32x32 tilemap blocks and leaves later metadata and trailer regions unrendered.',
    );
  }

  return {
    byteLength: buffer.length,
    layoutBytes,
    metadataBytes,
    trailerBytes,
    extraBytes,
    entryCount: wordCount,
    blockCount,
    blocks,
    warnings,
    paletteUsage: [...paletteSet].sort((a, b) => a - b),
    priorityUsage: [...prioritySet].sort((a, b) => a - b),
    hFlipUsage: [...hFlipSet].sort((a, b) => a - b),
    vFlipUsage: [...vFlipSet].sort((a, b) => a - b),
  };
}

function decodePixel(tile: Uint8Array, bitDepth: BitDepth, x: number, y: number): number {
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

function getDiagnosticColor(entry: ScrEntry, pixelIndex: number, bitDepth: BitDepth): [number, number, number] {
  const max = (1 << Math.min(bitDepth, 4)) - 1;
  const brightness = Math.round((pixelIndex / Math.max(max, 1)) * 255);
  const paletteTint = Math.round((entry.paletteIndex / 7) * 180);
  const flipTint = entry.hFlip || entry.vFlip ? 50 : 0;
  return [brightness, Math.min(255, paletteTint + brightness / 4), Math.min(255, flipTint + 40)];
}

function getPaletteRgb(
  palette: ParsedCol | null,
  paletteIndex: number,
  colorIndex: number,
  bitDepth: BitDepth,
): [number, number, number] {
  if (!palette) {
    return [0, 0, 0];
  }

  if (bitDepth === 8) {
    const flat = palette.rows.flat().slice(0, 256);
    const picked = flat[colorIndex];
    if (!picked) return [0, 0, 0];
    return [
      parseInt(picked.rgbHex.slice(1, 3), 16),
      parseInt(picked.rgbHex.slice(3, 5), 16),
      parseInt(picked.rgbHex.slice(5, 7), 16),
    ];
  }

  const row = palette.rows[paletteIndex] || palette.rows[0];
  const rowSize = bitDepth === 2 ? 4 : 16;
  const picked = row?.[colorIndex % rowSize];
  if (!picked) return [0, 0, 0];
  return [
    parseInt(picked.rgbHex.slice(1, 3), 16),
    parseInt(picked.rgbHex.slice(3, 5), 16),
    parseInt(picked.rgbHex.slice(5, 7), 16),
  ];
}

function drawEntry(
  imageData: Uint8ClampedArray,
  canvasWidth: number,
  startX: number,
  startY: number,
  entry: ScrEntry,
  tile: Uint8Array | null,
  bitDepth: BitDepth,
  palette: ParsedCol | null,
) {
  for (let py = 0; py < 8; py += 1) {
    for (let px = 0; px < 8; px += 1) {
      let red = 0;
      let green = 0;
      let blue = 0;

      if (tile) {
        const sourceX = entry.hFlip ? 7 - px : px;
        const sourceY = entry.vFlip ? 7 - py : py;
        const colorIndex = decodePixel(tile, bitDepth, sourceX, sourceY);
        [red, green, blue] = getPaletteRgb(palette, entry.paletteIndex, colorIndex, bitDepth);

        if (!palette) {
          const shade = bitDepth === 8 ? colorIndex : Math.round((colorIndex / ((1 << bitDepth) - 1)) * 255);
          red = shade;
          green = shade;
          blue = shade;
        }
      } else {
        const diagnosticIndex = (entry.tileIndex + px + py) & ((1 << Math.min(bitDepth, 4)) - 1);
        [red, green, blue] = getDiagnosticColor(entry, diagnosticIndex, bitDepth);
      }

      const outputIndex = ((startY + py) * canvasWidth + (startX + px)) * 4;
      imageData[outputIndex] = red;
      imageData[outputIndex + 1] = green;
      imageData[outputIndex + 2] = blue;
      imageData[outputIndex + 3] = 255;
    }
  }
}

function drawScr(
  canvas: HTMLCanvasElement,
  scr: ParsedScr,
  cgx: ParsedCgx | null,
  palette: ParsedCol | null,
  bitDepth: BitDepth,
  scale: number,
  viewMode: ViewMode,
) {
  const blockWidth = 32 * 8;
  const blockHeight = 32 * 8;
  const showAll = viewMode === 'all';
  const canvasWidth = showAll ? blockWidth * 2 : blockWidth;
  const canvasHeight = showAll ? blockHeight * 2 : blockHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.width = `${canvasWidth * scale}px`;
  canvas.style.height = `${canvasHeight * scale}px`;
  canvas.style.imageRendering = 'pixelated';

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const image = ctx.createImageData(canvasWidth, canvasHeight);
  const data = image.data;

  const blockIndexes = showAll ? [0, 1, 2, 3] : [viewMode];

  for (const blockIndex of blockIndexes) {
    const block = scr.blocks[blockIndex];
    if (!block) continue;

    const blockOffsetX = showAll ? (blockIndex % 2) * blockWidth : 0;
    const blockOffsetY = showAll ? Math.floor(blockIndex / 2) * blockHeight : 0;

    for (let tileIndex = 0; tileIndex < block.length; tileIndex += 1) {
      const entry = block[tileIndex];
      const tileX = (tileIndex % 32) * 8;
      const tileY = Math.floor(tileIndex / 32) * 8;
      const tile = cgx?.tiles[entry.tileIndex] || null;
      drawEntry(
        data,
        canvasWidth,
        blockOffsetX + tileX,
        blockOffsetY + tileY,
        entry,
        tile,
        bitDepth,
        palette,
      );
    }
  }

  ctx.putImageData(image, 0, 0);
}

function SnesScrViewer() {
  const [scrBuffer, setScrBuffer] = useState<Uint8Array | null>(null);
  const [cgxBuffer, setCgxBuffer] = useState<Uint8Array | null>(null);
  const [colBuffer, setColBuffer] = useState<Uint8Array | null>(null);
  const [scrFileName, setScrFileName] = useState('snes-scr-render');
  const [bitDepth, setBitDepth] = useState<BitDepth>(4);
  const [manualBitDepth, setManualBitDepth] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [scale, setScale] = useState(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const scr = useMemo(() => {
    if (!scrBuffer) return null;
    return parseScr(scrBuffer);
  }, [scrBuffer]);

  const cgx = useMemo(() => {
    if (!cgxBuffer) return null;
    return parseCgx(cgxBuffer, bitDepth);
  }, [cgxBuffer, bitDepth]);

  const palette = useMemo(() => {
    if (!colBuffer) return null;
    return parseCol(colBuffer);
  }, [colBuffer]);

  const autoDetect = useMemo(() => detectBitDepth(scr, cgxBuffer), [scr, cgxBuffer]);

  useEffect(() => {
    if (!autoDetect?.recommended || manualBitDepth) return;
    setBitDepth(autoDetect.recommended);
  }, [autoDetect, manualBitDepth]);

  useEffect(() => {
    if (!scr || !canvasRef.current) return;
    drawScr(canvasRef.current, scr, cgx, palette, bitDepth, scale, viewMode);
  }, [scr, cgx, palette, bitDepth, scale, viewMode]);

  function downloadRenderedImage() {
    if (!canvasRef.current) return;

    const baseName = scrFileName.replace(/\.[^/.]+$/, '') || 'snes-scr-render';
    const viewSuffix = viewMode === 'all' ? 'all-blocks' : `block-${viewMode}`;
    const link = document.createElement('a');
    link.href = canvasRef.current.toDataURL('image/png');
    link.download = `${baseName}-${viewSuffix}.png`;
    link.click();
  }

  return (
    <div className="p-4 space-y-4">
      <h3>Load a SNES .SCR file to view its four 32x32 layout blocks:</h3>
      <p>
        This viewer treats the first 8192 bytes of the file as four standard SNES-style 32x32
        tilemap blocks. Add the matching .CGX and .COL files to render the full screen image.
      </p>

      <div>
        <div className="font-medium">Required .SCR file</div>
        <FileUpload
          accept=".scr,.SCR,.BAK"
          onLoad={(buffer, file) => {
            setScrBuffer(buffer);
            setManualBitDepth(false);
            if (file?.name) {
              setScrFileName(file.name);
            }
          }}
        />
      </div>

      <div>
        <div className="font-medium">Optional .CGX graphics file</div>
        <FileUpload
          accept=".cgx,.CGX,.bin,.BAK"
          onLoad={(buffer) => {
            setCgxBuffer(buffer);
            setManualBitDepth(false);
          }}
        />
      </div>

      <div>
        <div className="font-medium">Optional .COL palette file</div>
        <FileUpload accept=".col,.COL,.BAK" onLoad={(buffer) => setColBuffer(buffer)} />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <label>
          View:{' '}
          <select
            value={String(viewMode)}
            onChange={(event) => {
              const value = event.target.value;
              if (value === 'all') {
                setViewMode('all');
                return;
              }
              setViewMode(Number(value) as ViewMode);
            }}
          >
            <option value="all">All 4 blocks</option>
            <option value="0">Block 0</option>
            <option value="1">Block 1</option>
            <option value="2">Block 2</option>
            <option value="3">Block 3</option>
          </select>
        </label>

        <label>
          CGX bit depth:{' '}
          <select
            value={bitDepth}
            onChange={(event) => {
              setManualBitDepth(true);
              setBitDepth(Number(event.target.value) as BitDepth);
            }}
          >
            <option value={2}>2bpp</option>
            <option value={4}>4bpp</option>
            <option value={8}>8bpp</option>
          </select>
        </label>

        <label>
          Zoom:{' '}
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            value={scale}
            onChange={(event) => setScale(Number(event.target.value))}
          />{' '}
          {scale}x
        </label>
      </div>

      {scr && (
        <div className="border border-gray-300 rounded p-3 bg-gray-50 space-y-1">
          <div className="font-medium">SCR Summary</div>
          <div>{scr.byteLength} bytes total</div>
          <div>{scr.layoutBytes} bytes rendered as tilemap blocks</div>
          <div>{scr.entryCount} 16-bit entries across {scr.blockCount} detected blocks</div>
          {autoDetect && (
            <div>
              Auto-detect: {autoDetect.recommended
                ? `recommended ${autoDetect.recommended}bpp from CGX size and SCR tile references (max tile ${autoDetect.maxTileIndex}, fits ${autoDetect.fits.join(', ')}bpp)`
                : `no safe CGX bit depth fit found from SCR tile references (max tile ${autoDetect.maxTileIndex})`}
            </div>
          )}
          <div>Palette values used: {scr.paletteUsage.join(', ') || 'none'}</div>
          <div>Priority values used: {scr.priorityUsage.join(', ') || 'none'}</div>
          <div>Horizontal flip values used: {scr.hFlipUsage.join(', ') || 'none'}</div>
          <div>Vertical flip values used: {scr.vFlipUsage.join(', ') || 'none'}</div>
          {scr.metadataBytes > 0 && <div>{scr.metadataBytes} metadata bytes after the first 8192 bytes</div>}
          {scr.trailerBytes > 0 && <div>{scr.trailerBytes} trailer bytes after the metadata region</div>}
          {scr.extraBytes > 0 && <div>{scr.extraBytes} extra bytes beyond the common 8960-byte size</div>}
          {scr.warnings.map((warning) => (
            <div key={warning} style={{ color: '#92400e' }}>
              {warning}
            </div>
          ))}
        </div>
      )}

      {cgx && (
        <div className="border border-gray-300 rounded p-3 bg-gray-50 space-y-1">
          <div className="font-medium">CGX Summary</div>
          <div>{cgx.tileCount} tiles at {cgx.bytesPerTile} bytes per tile</div>
          {cgx.warnings.map((warning) => (
            <div key={warning} style={{ color: '#92400e' }}>
              {warning}
            </div>
          ))}
        </div>
      )}

      {palette && (
        <div className="border border-gray-300 rounded p-3 bg-gray-50 space-y-2">
          <div className="font-medium">COL Summary</div>
          <div>{palette.rows.length} palette rows loaded</div>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {(palette.rows[0] || []).slice(0, 16).map((color, index) => (
              <div
                key={`${color.hex}-${index}`}
                title={`0x${color.hex}`}
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  background: color.rgbHex,
                  border: '1px solid #6b7280',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {scr && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={downloadRenderedImage}
            style={{
              background: '#0f766e',
              color: '#ffffff',
              border: 'none',
              borderRadius: '0.375rem',
              padding: '0.65rem 0.9rem',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Export Rendered PNG
          </button>
          <span style={{ color: '#4b5563' }}>
            Saves the current canvas view, including the selected block mode and palette mapping.
          </span>
        </div>
      )}

      {scr && (
        <div className="border border-gray-300 rounded p-3 bg-white overflow-auto">
          <canvas ref={canvasRef} />
        </div>
      )}
    </div>
  );
}

export default SnesScrViewer;
