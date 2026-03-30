import { useEffect, useMemo, useRef, useState } from 'react';
import FileUpload from './FileUpload';

type BitDepth = 2 | 4 | 8;

interface ParsedCgx {
  byteLength: number;
  tileCount: number;
  bytesPerTile: number;
  tiles: Uint8Array[];
  warnings: string[];
}

function bytesPerTile(bitDepth: BitDepth): number {
  if (bitDepth === 2) return 16;
  if (bitDepth === 4) return 32;
  return 64;
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

function drawTiles(
  canvas: HTMLCanvasElement,
  parsed: ParsedCgx,
  bitDepth: BitDepth,
  tilesPerRow: number,
  scale: number,
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
        const [red, green, blue] = getGrayscaleColor(colorIndex, bitDepth);
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
  const [bitDepth, setBitDepth] = useState<BitDepth>(4);
  const [tilesPerRow, setTilesPerRow] = useState(16);
  const [scale, setScale] = useState(3);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const parsed = useMemo(() => {
    if (!buffer) return null;
    return parseCgx(buffer, bitDepth);
  }, [buffer, bitDepth]);

  useEffect(() => {
    if (!parsed || !canvasRef.current) return;
    drawTiles(canvasRef.current, parsed, bitDepth, tilesPerRow, scale);
  }, [parsed, bitDepth, tilesPerRow, scale]);

  return (
    <div className="p-4 space-y-4">
      <h3>Load a SNES .CGX file to view it as raw tile graphics:</h3>
      <p>
        This viewer treats the file as raw SNES tile data from byte zero. It defaults to 8x8
        tiles at 4bpp, with toggles for 2bpp and 8bpp banks.
      </p>

      <FileUpload accept=".cgx,.CGX,.bin" onLoad={(nextBuffer) => setBuffer(nextBuffer)} />

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <label>
          Bit depth:{' '}
          <select
            value={bitDepth}
            onChange={(event) => setBitDepth(Number(event.target.value) as BitDepth)}
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
      </div>

      {parsed && (
        <div className="space-y-4">
          <div className="border border-gray-300 rounded p-3 bg-gray-50">
            <div>
              <strong>Summary:</strong> {parsed.byteLength} bytes, {parsed.tileCount} tiles,{' '}
              {parsed.bytesPerTile} bytes per tile
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

          <p>
            Dark pixels are low palette indices and light pixels are high palette indices. This
            first pass uses grayscale so the tile structure is readable even without a matching
            `.COL` file.
          </p>
        </div>
      )}
    </div>
  );
}

export default SnesCgxViewer;
