import { useEffect, useMemo, useRef, useState } from 'react';
import FileUpload from './FileUpload';

type BitDepth = 2 | 4 | 8;

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

interface ParsedCgx {
  byteLength: number;
  tileCount: number;
  bytesPerTile: number;
  tiles: Uint8Array[];
  warnings: string[];
}

interface ParsedCol {
  colorCount: number;
  rowCount: number;
  rows: PaletteColor[][];
}

function parseScrTileIndexes(buffer: Uint8Array): number[] {
  const layoutBytes = Math.min(buffer.length, 8192);
  const tileIndexes: number[] = [];

  for (let offset = 0; offset + 1 < layoutBytes; offset += 2) {
    const raw = buffer[offset] | (buffer[offset + 1] << 8);
    tileIndexes.push(raw & 0x03ff);
  }

  return tileIndexes;
}

function detectBitDepth(cgxBuffer: Uint8Array | null, scrBuffer: Uint8Array | null): AutoDetectResult | null {
  if (!cgxBuffer || !scrBuffer) return null;

  const tileIndexes = parseScrTileIndexes(scrBuffer);
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
    byteLength: buffer.length,
    tileCount,
    bytesPerTile: tileSize,
    tiles,
    warnings,
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

  return {
    colorCount: colors.length,
    rowCount: rows.length,
    rows,
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

function getGrayscaleColor(index: number, bitDepth: BitDepth): [number, number, number] {
  const max = (1 << bitDepth) - 1;
  const shade = Math.round((index / max) * 255);
  return [shade, shade, shade];
}

function getPaletteColor(
  index: number,
  bitDepth: BitDepth,
  palette: ParsedCol | null,
  selectedRow: number,
): [number, number, number] {
  if (!palette) {
    return getGrayscaleColor(index, bitDepth);
  }

  if (bitDepth === 8) {
    const flat = palette.rows.flat().slice(0, 256);
    const picked = flat[index];
    if (picked) {
      return [
        parseInt(picked.rgbHex.slice(1, 3), 16),
        parseInt(picked.rgbHex.slice(3, 5), 16),
        parseInt(picked.rgbHex.slice(5, 7), 16),
      ];
    }
    return getGrayscaleColor(index, bitDepth);
  }

  const row = palette.rows[selectedRow] || palette.rows[0];
  const limit = bitDepth === 2 ? 4 : 16;
  const picked = row?.[index % limit];
  if (!picked) {
    return getGrayscaleColor(index, bitDepth);
  }

  return [
    parseInt(picked.rgbHex.slice(1, 3), 16),
    parseInt(picked.rgbHex.slice(3, 5), 16),
    parseInt(picked.rgbHex.slice(5, 7), 16),
  ];
}

function drawTiles(
  canvas: HTMLCanvasElement,
  parsed: ParsedCgx,
  bitDepth: BitDepth,
  tilesPerRow: number,
  scale: number,
  palette: ParsedCol | null,
  selectedRow: number,
) {
  const tileRows = Math.max(1, Math.ceil(parsed.tileCount / tilesPerRow));
  const width = tilesPerRow * 8;
  const height = tileRows * 8;
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width * scale}px`;
  canvas.style.height = `${height * scale}px`;
  canvas.style.imageRendering = 'pixelated';

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const image = ctx.createImageData(width, height);
  const data = image.data;

  for (let tileIndex = 0; tileIndex < parsed.tiles.length; tileIndex += 1) {
    const tile = parsed.tiles[tileIndex];
    const tileX = (tileIndex % tilesPerRow) * 8;
    const tileY = Math.floor(tileIndex / tilesPerRow) * 8;

    for (let y = 0; y < 8; y += 1) {
      for (let x = 0; x < 8; x += 1) {
        const colorIndex = decodePixel(tile, bitDepth, x, y);
        const [red, green, blue] = getPaletteColor(colorIndex, bitDepth, palette, selectedRow);
        const pixelIndex = ((tileY + y) * width + (tileX + x)) * 4;
        data[pixelIndex] = red;
        data[pixelIndex + 1] = green;
        data[pixelIndex + 2] = blue;
        data[pixelIndex + 3] = 255;
      }
    }
  }

  ctx.putImageData(image, 0, 0);
}

function SnesCgxViewer() {
  const [buffer, setBuffer] = useState<Uint8Array | null>(null);
  const [scrBuffer, setScrBuffer] = useState<Uint8Array | null>(null);
  const [paletteBuffer, setPaletteBuffer] = useState<Uint8Array | null>(null);
  const [bitDepth, setBitDepth] = useState<BitDepth>(4);
  const [manualBitDepth, setManualBitDepth] = useState(false);
  const [tilesPerRow, setTilesPerRow] = useState(16);
  const [scale, setScale] = useState(3);
  const [selectedRow, setSelectedRow] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const parsed = useMemo(() => {
    if (!buffer) return null;
    return parseCgx(buffer, bitDepth);
  }, [buffer, bitDepth]);

  const palette = useMemo(() => {
    if (!paletteBuffer) return null;
    return parseCol(paletteBuffer);
  }, [paletteBuffer]);

  const autoDetect = useMemo(() => detectBitDepth(buffer, scrBuffer), [buffer, scrBuffer]);

  useEffect(() => {
    if (!autoDetect?.recommended || manualBitDepth) return;
    setBitDepth(autoDetect.recommended);
  }, [autoDetect, manualBitDepth]);

  useEffect(() => {
    if (!parsed || !canvasRef.current) return;
    drawTiles(canvasRef.current, parsed, bitDepth, tilesPerRow, scale, palette, selectedRow);
  }, [parsed, bitDepth, tilesPerRow, scale, palette, selectedRow]);

  return (
    <div className="p-4 space-y-4">
      <h3>Load a SNES .CGX file to view it as raw tile graphics:</h3>
      <p>
        This viewer treats the file as raw SNES tile data from byte zero. It defaults to 8x8
        tiles at 4bpp, with toggles for 2bpp and 8bpp banks.
      </p>

      <FileUpload
        accept=".cgx,.CGX,.bin"
        onLoad={(nextBuffer) => {
          setBuffer(nextBuffer);
          setManualBitDepth(false);
        }}
      />
      <div>
        <div className="font-medium">Optional .SCR layout file for bit-depth auto-detect</div>
        <FileUpload
          accept=".scr,.SCR"
          onLoad={(nextBuffer) => {
            setScrBuffer(nextBuffer);
            setManualBitDepth(false);
          }}
        />
      </div>
      <div>
        <div className="font-medium">Optional .COL palette file</div>
        <FileUpload accept=".col,.COL" onLoad={(nextBuffer) => setPaletteBuffer(nextBuffer)} />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <label>
          Bit depth:{' '}
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
          Tiles per row:{' '}
          <input
            type="number"
            min={1}
            max={64}
            value={tilesPerRow}
            onChange={(event) => setTilesPerRow(Math.max(1, Number(event.target.value) || 1))}
            style={{ width: '5em' }}
          />
        </label>

        <label>
          Zoom:{' '}
          <input
            type="number"
            min={1}
            max={8}
            value={scale}
            onChange={(event) => setScale(Math.max(1, Number(event.target.value) || 1))}
            style={{ width: '4em' }}
          />
        </label>

        {palette && bitDepth !== 8 && (
          <label>
            Palette row:{' '}
            <input
              type="number"
              min={0}
              max={Math.max(0, palette.rowCount - 1)}
              value={selectedRow}
              onChange={(event) =>
                setSelectedRow(
                  Math.max(0, Math.min(palette.rowCount - 1, Number(event.target.value) || 0)),
                )
              }
              style={{ width: '5em' }}
            />
          </label>
        )}
      </div>

      {parsed && (
        <div className="space-y-4">
          <div className="border border-gray-300 rounded p-3 bg-gray-50">
            <div>
              <strong>Summary:</strong> {parsed.byteLength} bytes, {parsed.tileCount} tiles,{' '}
              {parsed.bytesPerTile} bytes per tile
            </div>
            {autoDetect && (
              <div>
                <strong>Bit-depth auto-detect:</strong>{' '}
                {autoDetect.recommended
                  ? `recommended ${autoDetect.recommended}bpp from SCR tile references (max tile ${autoDetect.maxTileIndex}, fits ${autoDetect.fits.join(', ')}bpp)`
                  : `no safe fit found from SCR tile references (max tile ${autoDetect.maxTileIndex})`}
              </div>
            )}
            <div>
              <strong>Palette:</strong>{' '}
              {palette
                ? `${palette.colorCount} colors loaded${bitDepth === 8 ? ' using first 256 colors' : ` using row ${selectedRow}`}`
                : 'No .COL file loaded, using grayscale fallback'}
            </div>
            {parsed.warnings.map((warning) => (
              <div key={warning} style={{ color: '#92400e' }}>
                {warning}
              </div>
            ))}
          </div>

          <div
            style={{
              overflow: 'auto',
              border: '1px solid #d1d5db',
              background: '#111827',
              padding: '0.75rem',
            }}
          >
            <canvas ref={canvasRef} />
          </div>

          {palette && bitDepth !== 8 && (
            <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
              {(palette.rows[selectedRow] || []).slice(0, bitDepth === 2 ? 4 : 16).map((color) => (
                <div
                  key={`${selectedRow}-${color.hex}`}
                  style={{
                    background: color.rgbHex,
                    border: '1px solid #999',
                    color: '#111827',
                    padding: '0.35rem 0.45rem',
                    minWidth: '4.5rem',
                    textAlign: 'center',
                  }}
                >
                  <code>{color.hex}</code>
                </div>
              ))}
            </div>
          )}

          <p>
            Without a `.COL` file the viewer falls back to grayscale so the tile structure is still
            readable. With a palette loaded, `2bpp` uses the first 4 colors of the chosen row,
            `4bpp` uses all 16 colors in the chosen row, and `8bpp` uses the first 256 colors in
            the file.
          </p>
        </div>
      )}
    </div>
  );
}

export default SnesCgxViewer;
