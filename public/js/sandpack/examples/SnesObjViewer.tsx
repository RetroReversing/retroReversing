import { useEffect, useMemo, useRef, useState } from 'react';
import FileUpload from './FileUpload';

type BitDepth = 2 | 4 | 8;
type PaletteMode = 'attr' | 'manual';

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

interface ObjRecord {
  flag: number;
  rawXY: number;
  xByte: number;
  yByte: number;
  xSigned: number;
  ySigned: number;
  tileIndex: number;
  attr: number;
}

interface ParsedObj {
  byteLength: number;
  recordRegionBytes: number;
  metadataTailBytes: number;
  recordCount: number;
  activeCount: number;
  records: ObjRecord[];
  flags: number[];
  attrs: number[];
  warnings: string[];
}

function bytesPerTile(bitDepth: BitDepth): number {
  if (bitDepth === 2) return 16;
  if (bitDepth === 4) return 32;
  return 64;
}

function signedByte(value: number): number {
  return value >= 0x80 ? value - 0x100 : value;
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
  for (let offset = 0; offset + 1 < buffer.length; offset += 2) {
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
  const tileSize = bytesPerTile(bitDepth);
  const warnings: string[] = [];
  const remainder = buffer.length % tileSize;

  if (remainder !== 0) {
    warnings.push(
      `${remainder} trailing bytes do not fit the selected ${bitDepth}bpp tile size and were ignored.`,
    );
  }

  const tileCount = Math.floor(buffer.length / tileSize);
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

function parseObj(buffer: Uint8Array): ParsedObj | null {
  if (buffer.length < 6) return null;

  const warnings: string[] = [];
  const marker = new TextDecoder().decode(buffer).indexOf('NAK1989');
  const rawRecordBytes = marker >= 0 ? marker : buffer.length;
  const recordRegionBytes = rawRecordBytes - (rawRecordBytes % 6);
  const metadataTailBytes = buffer.length - recordRegionBytes;

  if (marker >= 0) {
    warnings.push(
      `Detected CAD metadata tail at byte ${recordRegionBytes}. Only the front record region is rendered.`,
    );
  } else if (buffer.length % 6 !== 0) {
    warnings.push('File length is not a multiple of 6. Trailing bytes were ignored.');
  }

  const records: ObjRecord[] = [];
  for (let offset = 0; offset + 5 < recordRegionBytes; offset += 6) {
    const flag = buffer[offset] | (buffer[offset + 1] << 8);
    const rawXY = buffer[offset + 2] | (buffer[offset + 3] << 8);
    const packed = buffer[offset + 4] | (buffer[offset + 5] << 8);
    const xByte = (rawXY >> 8) & 0xff;
    const yByte = rawXY & 0xff;
    records.push({
      flag,
      rawXY,
      xByte,
      yByte,
      xSigned: signedByte(xByte),
      ySigned: signedByte(yByte),
      tileIndex: (packed >> 8) & 0xff,
      attr: packed & 0xff,
    });
  }

  const activeRecords = records.filter(
    (record) => !(record.flag === 0 && record.rawXY === 0 && record.tileIndex === 0 && record.attr === 0),
  );

  return {
    byteLength: buffer.length,
    recordRegionBytes,
    metadataTailBytes,
    recordCount: records.length,
    activeCount: activeRecords.length,
    records: activeRecords,
    flags: [...new Set(activeRecords.map((record) => record.flag))].sort((a, b) => a - b),
    attrs: [...new Set(activeRecords.map((record) => record.attr))].sort((a, b) => a - b),
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
  const shade = max === 0 ? 0 : Math.round((index / max) * 255);
  return [shade, shade, shade];
}

function getPaletteRgb(
  palette: ParsedCol | null,
  paletteRow: number,
  colorIndex: number,
  bitDepth: BitDepth,
): [number, number, number] {
  if (!palette) {
    return getGrayscaleColor(colorIndex, bitDepth);
  }

  if (bitDepth === 8) {
    const flat = palette.rows.flat().slice(0, 256);
    const picked = flat[colorIndex];
    if (!picked) return getGrayscaleColor(colorIndex, bitDepth);
    return [
      parseInt(picked.rgbHex.slice(1, 3), 16),
      parseInt(picked.rgbHex.slice(3, 5), 16),
      parseInt(picked.rgbHex.slice(5, 7), 16),
    ];
  }

  const row = palette.rows[paletteRow] || palette.rows[0];
  const rowSize = bitDepth === 2 ? 4 : 16;
  const picked = row?.[colorIndex % rowSize];
  if (!picked) return getGrayscaleColor(colorIndex, bitDepth);

  return [
    parseInt(picked.rgbHex.slice(1, 3), 16),
    parseInt(picked.rgbHex.slice(3, 5), 16),
    parseInt(picked.rgbHex.slice(5, 7), 16),
  ];
}

function getAttrPaletteRow(attr: number): number {
  return (attr >> 1) & 0x07;
}

function drawObjects(
  canvas: HTMLCanvasElement,
  records: ObjRecord[],
  parsedCgx: ParsedCgx | null,
  parsedCol: ParsedCol | null,
  bitDepth: BitDepth,
  scale: number,
  paletteMode: PaletteMode,
  manualPaletteRow: number,
) {
  const margin = 8;
  if (records.length === 0) {
    canvas.width = 64;
    canvas.height = 32;
    canvas.style.width = `${64 * scale}px`;
    canvas.style.height = `${32 * scale}px`;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 64, 32);
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, 64, 32);
    ctx.fillStyle = '#fff';
    ctx.font = '12px sans-serif';
    ctx.fillText('No active records', 6, 18);
    return;
  }

  const xs = records.map((record) => record.xSigned);
  const ys = records.map((record) => record.ySigned);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs) + 7;
  const maxY = Math.max(...ys) + 7;
  const width = maxX - minX + 1 + margin * 2;
  const height = maxY - minY + 1 + margin * 2;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width * scale}px`;
  canvas.style.height = `${height * scale}px`;
  canvas.style.imageRendering = 'pixelated';

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const image = ctx.createImageData(width, height);
  const imageData = image.data;

  for (const record of records) {
    const startX = record.xSigned - minX + margin;
    const startY = record.ySigned - minY + margin;
    const tile = parsedCgx?.tiles[record.tileIndex] ?? null;
    const hFlip = (record.attr & 0x40) !== 0;
    const vFlip = (record.attr & 0x80) !== 0;
    const paletteRow = paletteMode === 'attr' ? getAttrPaletteRow(record.attr) : manualPaletteRow;

    for (let py = 0; py < 8; py += 1) {
      for (let px = 0; px < 8; px += 1) {
        const outX = startX + px;
        const outY = startY + py;
        if (outX < 0 || outY < 0 || outX >= width || outY >= height) continue;

        let red = 0;
        let green = 0;
        let blue = 0;
        let alpha = 255;

        if (tile) {
          const sourceX = hFlip ? 7 - px : px;
          const sourceY = vFlip ? 7 - py : py;
          const colorIndex = decodePixel(tile, bitDepth, sourceX, sourceY);
          if (colorIndex === 0) {
            alpha = 0;
          } else {
            [red, green, blue] = getPaletteRgb(parsedCol, paletteRow, colorIndex, bitDepth);
          }
        } else {
          const base = (record.tileIndex + px + py) & ((1 << Math.min(bitDepth, 4)) - 1);
          [red, green, blue] = getGrayscaleColor(base, Math.min(bitDepth, 4) as BitDepth);
        }

        const outputIndex = (outY * width + outX) * 4;
        imageData[outputIndex] = red;
        imageData[outputIndex + 1] = green;
        imageData[outputIndex + 2] = blue;
        imageData[outputIndex + 3] = alpha;
      }
    }
  }

  ctx.putImageData(image, 0, 0);
}

function formatHex(value: number, width = 2): string {
  return `0x${value.toString(16).toUpperCase().padStart(width, '0')}`;
}

function SnesObjViewer() {
  const [objBuffer, setObjBuffer] = useState<Uint8Array | null>(null);
  const [cgxBuffer, setCgxBuffer] = useState<Uint8Array | null>(null);
  const [colBuffer, setColBuffer] = useState<Uint8Array | null>(null);
  const [objName, setObjName] = useState('object-layout');
  const [bitDepth, setBitDepth] = useState<BitDepth>(4);
  const [scale, setScale] = useState(3);
  const [paletteMode, setPaletteMode] = useState<PaletteMode>('attr');
  const [manualPaletteRow, setManualPaletteRow] = useState(0);
  const [flagFilter, setFlagFilter] = useState('all');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const parsedObj = useMemo(() => (objBuffer ? parseObj(objBuffer) : null), [objBuffer]);
  const parsedCgx = useMemo(() => (cgxBuffer ? parseCgx(cgxBuffer, bitDepth) : null), [cgxBuffer, bitDepth]);
  const parsedCol = useMemo(() => (colBuffer ? parseCol(colBuffer) : null), [colBuffer]);

  const filteredRecords = useMemo(() => {
    if (!parsedObj) return [];
    if (flagFilter === 'all') return parsedObj.records;
    const wanted = Number.parseInt(flagFilter, 16);
    return parsedObj.records.filter((record) => record.flag === wanted);
  }, [parsedObj, flagFilter]);

  useEffect(() => {
    if (!canvasRef.current || !parsedObj) return;
    drawObjects(canvasRef.current, filteredRecords, parsedCgx, parsedCol, bitDepth, scale, paletteMode, manualPaletteRow);
  }, [filteredRecords, parsedObj, parsedCgx, parsedCol, bitDepth, scale, paletteMode, manualPaletteRow]);

  const palettePreview = useMemo(() => {
    if (!parsedCol) return null;
    const row = parsedCol.rows[manualPaletteRow] || parsedCol.rows[0] || [];
    return row;
  }, [parsedCol, manualPaletteRow]);

  function exportPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${objName}.png`;
    link.click();
  }

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <p>Load an SNES `.OBJ` file to render its object layout. Add matching `.CGX` and `.COL` files to see the real tiles and palettes.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <label>
            OBJ:
            <div><FileUpload accept=".obj,.OBJ" onLoad={(buffer, file) => { setObjBuffer(buffer); setObjName(file?.name || 'object-layout'); }} /></div>
          </label>
          <label>
            CGX:
            <div><FileUpload accept=".cgx,.CGX" onLoad={(buffer) => setCgxBuffer(buffer)} /></div>
          </label>
          <label>
            COL:
            <div><FileUpload accept=".col,.COL" onLoad={(buffer) => setColBuffer(buffer)} /></div>
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        <label>
          Bit depth:
          <select value={bitDepth} onChange={(event) => setBitDepth(Number(event.target.value) as BitDepth)} style={{ marginLeft: '0.5rem' }}>
            <option value={2}>2bpp</option>
            <option value={4}>4bpp</option>
            <option value={8}>8bpp</option>
          </select>
        </label>

        <label>
          Scale:
          <input
            type="range"
            min={1}
            max={8}
            value={scale}
            onChange={(event) => setScale(Number(event.target.value))}
            style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}
          />
          <span style={{ marginLeft: '0.5rem' }}>{scale}x</span>
        </label>

        <label>
          Flag filter:
          <select value={flagFilter} onChange={(event) => setFlagFilter(event.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="all">All</option>
            {parsedObj?.flags.map((flag) => (
              <option key={flag} value={flag.toString(16)}>
                {formatHex(flag, 4)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Palette mode:
          <select
            value={paletteMode}
            onChange={(event) => setPaletteMode(event.target.value as PaletteMode)}
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="attr">Use OBJ attr bits 1-3</option>
            <option value="manual">Manual row</option>
          </select>
        </label>

        {paletteMode === 'manual' && (
          <label>
            Manual row:
            <input
              type="number"
              min={0}
              max={31}
              value={manualPaletteRow}
              onChange={(event) => setManualPaletteRow(Math.max(0, Math.min(31, Number(event.target.value) || 0)))}
              style={{ marginLeft: '0.5rem', width: '4rem' }}
            />
          </label>
        )}

        <button type="button" onClick={exportPng}>Export Rendered PNG</button>
      </div>

      {parsedObj && (
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div>
            <strong>Record region:</strong> {parsedObj.recordRegionBytes.toLocaleString()} bytes ({parsedObj.recordCount.toLocaleString()} record slots)
          </div>
          <div>
            <strong>Metadata tail:</strong> {parsedObj.metadataTailBytes.toLocaleString()} bytes
          </div>
          <div>
            <strong>Active records:</strong> {filteredRecords.length.toLocaleString()} of {parsedObj.activeCount.toLocaleString()}
          </div>
          <div>
            <strong>Flags:</strong> {parsedObj.flags.map((flag) => formatHex(flag, 4)).join(', ')}
          </div>
          <div>
            <strong>Sample attrs:</strong> {parsedObj.attrs.slice(0, 16).map((attr) => formatHex(attr, 2)).join(', ')}
          </div>
          {parsedObj.warnings.length > 0 && (
            <ul>
              {parsedObj.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          )}
          {parsedCgx?.warnings.length ? (
            <ul>
              {parsedCgx.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}

      {parsedCol && palettePreview && (
        <div>
          <strong>Manual palette row preview:</strong>
          <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {palettePreview.map((color) => (
              <div key={`${color.hex}-${color.rgbHex}`} title={`${color.hex} ${color.rgbHex}`} style={{ textAlign: 'center' }}>
                <div style={{ width: '2rem', height: '2rem', background: color.rgbHex, border: '1px solid #777' }} />
                <small>{color.hex}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ overflow: 'auto', border: '1px solid #ccc', padding: '0.5rem', background: '#111' }}>
        <canvas ref={canvasRef} />
      </div>

      <p>
        This viewer treats each record as <code>flag</code>, packed <code>X/Y</code>, and packed <code>tile/attr</code>.
        When palette mode is set to <code>Use OBJ attr bits 1-3</code>, the viewer interprets the low byte like a SNES sprite attribute byte.
      </p>
    </div>
  );
}

export default SnesObjViewer;
