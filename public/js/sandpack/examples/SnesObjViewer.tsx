import { useEffect, useMemo, useRef, useState } from 'react';
import FileUpload from './FileUpload';

type BitDepth = 2 | 4 | 8;
type PaletteMode = 'attr' | 'manual';
type GroupMode = 'frame64' | 'frame128';

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
  pixels: Uint8Array;
  warnings: string[];
}

interface ObjRecord {
  byte1: number;
  groupInfo: number;
  display: boolean;
  largeTile: boolean;
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
  displayedCount: number;
  records: ObjRecord[];
  byte1Values: number[];
  groupInfoValues: number[];
  attrs: number[];
  warnings: string[];
}

interface ObjGroup {
  label: string;
  records: ObjRecord[];
}

const OBJECT_SIZE_SETTINGS = {
  0: { label: '8x8 and 16x16', small: [8, 8], large: [16, 16] },
  1: { label: '8x8 and 32x32', small: [8, 8], large: [32, 32] },
  2: { label: '8x8 and 64x64', small: [8, 8], large: [64, 64] },
  3: { label: '16x16 and 32x32', small: [16, 16], large: [32, 32] },
  4: { label: '16x16 and 64x64', small: [16, 16], large: [64, 64] },
  5: { label: '32x32 and 64x64', small: [32, 32], large: [64, 64] },
  6: { label: '16x32 and 32x64', small: [16, 32], large: [32, 64] },
  7: { label: '16x32 and 32x32', small: [16, 32], large: [32, 32] },
} as const;

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

  let source = buffer;
  if (buffer.length > 0x200 && buffer.length % 0x1000 === 0x200) {
    source = buffer.slice(0, buffer.length - 0x200);
  }

  const colors: PaletteColor[] = [];
  for (let offset = 0; offset + 1 < source.length; offset += 2) {
    const value = source[offset] | (source[offset + 1] << 8);
    colors.push(decodePaletteColor(value));
  }

  const rows: PaletteColor[][] = [];
  for (let i = 0; i < colors.length; i += 16) {
    rows.push(colors.slice(i, i + 16));
  }

  return { rows };
}

function parseCgx(buffer: Uint8Array, bitDepth: BitDepth): ParsedCgx {
  let source = buffer;
  const tileSize = bytesPerTile(bitDepth);
  const warnings: string[] = [];
  if (buffer.length > 0x500 && buffer.length % 0x1000 === 0x500) {
    source = buffer.slice(0, buffer.length - 0x500);
    warnings.push('Trimmed the standard 0x500-byte CAD tail from the CGX file before decoding.');
  }

  const remainder = source.length % tileSize;

  if (remainder !== 0) {
    warnings.push(
      `${remainder} trailing bytes do not fit the selected ${bitDepth}bpp tile size and were ignored.`,
    );
  }

  const tileCount = Math.floor(source.length / tileSize);
  const tiles: Uint8Array[] = [];
  const pixels = new Uint8Array(tileCount * 64);
  for (let i = 0; i < tileCount; i += 1) {
    const start = i * tileSize;
    const tile = source.slice(start, start + tileSize);
    tiles.push(tile);
    for (let y = 0; y < 8; y += 1) {
      for (let x = 0; x < 8; x += 1) {
        pixels[i * 64 + y * 8 + x] = decodePixel(tile, bitDepth, x, y);
      }
    }
  }

  return {
    tileCount,
    bytesPerTile: tileSize,
    tiles,
    pixels,
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
    const byte1 = buffer[offset];
    const groupInfo = buffer[offset + 1];
    const rawXY = buffer[offset + 2] | (buffer[offset + 3] << 8);
    const packed = buffer[offset + 4] | (buffer[offset + 5] << 8);
    const xByte = (rawXY >> 8) & 0xff;
    const yByte = rawXY & 0xff;
    records.push({
      byte1,
      groupInfo,
      display: (byte1 & 0x80) !== 0,
      largeTile: (byte1 & 0x01) !== 0,
      rawXY,
      xByte,
      yByte,
      xSigned: signedByte(xByte),
      ySigned: signedByte(yByte),
      tileIndex: (packed >> 8) & 0xff,
      attr: packed & 0xff,
    });
  }

  const meaningfulRecords = records.filter(
    (record) =>
      !(
        record.byte1 === 0 &&
        record.groupInfo === 0 &&
        record.rawXY === 0 &&
        record.tileIndex === 0 &&
        record.attr === 0
      ),
  );
  const displayedRecords = meaningfulRecords.filter((record) => record.display);

  return {
    byteLength: buffer.length,
    recordRegionBytes,
    metadataTailBytes,
    recordCount: records.length,
    displayedCount: displayedRecords.length,
    records,
    byte1Values: [...new Set(meaningfulRecords.map((record) => record.byte1))].sort((a, b) => a - b),
    groupInfoValues: [...new Set(meaningfulRecords.map((record) => record.groupInfo))].sort((a, b) => a - b),
    attrs: [...new Set(meaningfulRecords.map((record) => record.attr))].sort((a, b) => a - b),
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
  paletteIndex: number,
  bitDepth: BitDepth,
): [number, number, number] {
  if (!palette) {
    return getGrayscaleColor(paletteIndex, bitDepth);
  }

  const flat = palette.rows.flat();
  const picked = flat[paletteIndex];
  if (!picked) return getGrayscaleColor(paletteIndex, bitDepth);

  return [
    parseInt(picked.rgbHex.slice(1, 3), 16),
    parseInt(picked.rgbHex.slice(3, 5), 16),
    parseInt(picked.rgbHex.slice(5, 7), 16),
  ];
}

function getAttrPaletteRow(attr: number): number {
  return (attr >> 1) & 0x07;
}

function getObjectDimensions(mode: number, largeTile: boolean): [number, number] {
  const setting = OBJECT_SIZE_SETTINGS[mode as keyof typeof OBJECT_SIZE_SETTINGS] || OBJECT_SIZE_SETTINGS[0];
  return largeTile ? [...setting.large] as [number, number] : [...setting.small] as [number, number];
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
  objectSizeMode: number,
  vramOffset: number,
  cgramOffset: number,
) {
  const margin = 8;
  const visibleRecords = records.filter((record) => record.display);
  if (visibleRecords.length === 0) {
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
    ctx.fillText('No displayed records', 6, 18);
    return;
  }

  const xs = visibleRecords.map((record) => record.xSigned);
  const ys = visibleRecords.map((record) => record.ySigned);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(
    ...visibleRecords.map((record) => record.xSigned + getObjectDimensions(objectSizeMode, record.largeTile)[0] - 1),
  );
  const maxY = Math.max(
    ...visibleRecords.map((record) => record.ySigned + getObjectDimensions(objectSizeMode, record.largeTile)[1] - 1),
  );
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

  for (const record of [...visibleRecords].reverse()) {
    const startX = record.xSigned - minX + margin;
    const startY = record.ySigned - minY + margin;
    const hFlip = (record.attr & 0x40) !== 0;
    const vFlip = (record.attr & 0x80) !== 0;
    const paletteRow = paletteMode === 'attr' ? getAttrPaletteRow(record.attr) : manualPaletteRow;
    const [objectWidth, objectHeight] = getObjectDimensions(objectSizeMode, record.largeTile);
    const tileBase = vramOffset * 2 + ((((record.attr & 0x01) << 8) | record.tileIndex) * 64);

    for (let py = 0; py < objectHeight; py += 1) {
      for (let px = 0; px < objectWidth; px += 1) {
        const outX = startX + px;
        const outY = startY + py;
        if (outX < 0 || outY < 0 || outX >= width || outY >= height) continue;

        let red = 0;
        let green = 0;
        let blue = 0;
        let alpha = 255;

        if (parsedCgx) {
          const sourceX = hFlip ? objectWidth - 1 - px : px;
          const sourceY = vFlip ? objectHeight - 1 - py : py;
          const pixelOffset =
            tileBase +
            ((sourceX & 0xfff8) << 3) +
            ((sourceY & 0xfff8) << 7) +
            (sourceX & 0x7) +
            ((sourceY & 0x7) << 3);
          const colorIndex = parsedCgx.pixels[pixelOffset] ?? 0;
          if (colorIndex === 0) {
            alpha = 0;
          } else {
            const paletteIndex =
              bitDepth === 8
                ? cgramOffset + colorIndex
                : cgramOffset + paletteRow * 16 + colorIndex;
            [red, green, blue] = getPaletteRgb(parsedCol, paletteIndex, bitDepth);
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

function buildGroups(records: ObjRecord[], mode: GroupMode): ObjGroup[] {
  const frameSize = mode === 'frame64' ? 64 : 128;
  const groups: ObjGroup[] = [];
  for (let i = 0; i < records.length; i += frameSize) {
    const frameRecords = records.slice(i, i + frameSize);
    if (frameRecords.length > 0) {
      const shown = frameRecords.filter((record) => record.display).length;
      groups.push({
        label: `${frameSize}-entry frame ${Math.floor(i / frameSize) + 1} (${shown} shown)`,
        records: frameRecords,
      });
    }
  }
  return groups;
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
  const [groupMode, setGroupMode] = useState<GroupMode>('frame64');
  const [groupIndex, setGroupIndex] = useState(0);
  const [objectSizeMode, setObjectSizeMode] = useState(0);
  const [vramOffset, setVramOffset] = useState(0);
  const [cgramOffset, setCgramOffset] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const parsedObj = useMemo(() => (objBuffer ? parseObj(objBuffer) : null), [objBuffer]);
  const parsedCgx = useMemo(() => (cgxBuffer ? parseCgx(cgxBuffer, bitDepth) : null), [cgxBuffer, bitDepth]);
  const parsedCol = useMemo(() => (colBuffer ? parseCol(colBuffer) : null), [colBuffer]);

  useEffect(() => {
    if (!parsedObj) return;
    const likelyMode = parsedObj.recordRegionBytes >= 49152 ? 'frame128' : 'frame64';
    setGroupMode(likelyMode);
  }, [parsedObj]);

  const groups = useMemo(() => buildGroups(parsedObj?.records || [], groupMode), [parsedObj, groupMode]);
  const visibleRecords = useMemo(() => {
    if (groups.length === 0) return [];
    const safeIndex = Math.max(0, Math.min(groupIndex, groups.length - 1));
    return groups[safeIndex]?.records ?? [];
  }, [groups, groupIndex]);

  useEffect(() => {
    setGroupIndex(0);
  }, [objBuffer, groupMode]);

  useEffect(() => {
    if (!canvasRef.current || !parsedObj) return;
    drawObjects(
      canvasRef.current,
      visibleRecords,
      parsedCgx,
      parsedCol,
      bitDepth,
      scale,
      paletteMode,
      manualPaletteRow,
      objectSizeMode,
      vramOffset,
      cgramOffset,
    );
  }, [
    visibleRecords,
    parsedObj,
    parsedCgx,
    parsedCol,
    bitDepth,
    scale,
    paletteMode,
    manualPaletteRow,
    objectSizeMode,
    vramOffset,
    cgramOffset,
  ]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (groups.length <= 1) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setGroupIndex((current) => Math.max(0, current - 1));
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setGroupIndex((current) => Math.min(groups.length - 1, current + 1));
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [groups.length]);

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
    const suffix = groups.length > 1 ? `-frame-${groupIndex + 1}` : '';
    link.download = `${objName}${suffix}.png`;
    link.click();
  }

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ overflow: 'auto', border: '1px solid #ccc', padding: '0.5rem', background: '#111' }}>
        <canvas ref={canvasRef} />
      </div>

      <div>
        <p>Load an SNES `.OBJ` or `.OBX` file to render its framed object data. Add matching `.CGX` and `.COL` files to see the real tiles and palettes. The VRAM and CGRAM offsets default to `0` for direct companion-file viewing.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <label>
            OBJ / OBX:
            <div><FileUpload accept=".obj,.OBJ,.obx,.OBX" onLoad={(buffer, file) => { setObjBuffer(buffer); setObjName(file?.name || 'object-layout'); }} /></div>
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
          Frame mode:
          <select value={groupMode} onChange={(event) => setGroupMode(event.target.value as GroupMode)} style={{ marginLeft: '0.5rem' }}>
            <option value="frame64">64-entry frames</option>
            <option value="frame128">128-entry frames</option>
          </select>
        </label>

        <label>
          OBJ size:
          <select value={objectSizeMode} onChange={(event) => setObjectSizeMode(Number(event.target.value))} style={{ marginLeft: '0.5rem' }}>
            {Object.entries(OBJECT_SIZE_SETTINGS).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          VRAM offset:
          <input
            type="number"
            value={vramOffset}
            onChange={(event) => setVramOffset(Number(event.target.value) || 0)}
            style={{ marginLeft: '0.5rem', width: '6rem' }}
          />
        </label>

        <label>
          CGRAM offset:
          <input
            type="number"
            value={cgramOffset}
            onChange={(event) => setCgramOffset(Number(event.target.value) || 0)}
            style={{ marginLeft: '0.5rem', width: '6rem' }}
          />
        </label>

        {groups.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setGroupIndex((current) => Math.max(0, current - 1))}
              disabled={groupIndex <= 0}
            >
              Previous Frame
            </button>
            <label>
              Frame:
              <select
                value={groupIndex}
                onChange={(event) => setGroupIndex(Number(event.target.value))}
                style={{ marginLeft: '0.5rem', maxWidth: '18rem' }}
              >
                {groups.map((group, index) => (
                  <option key={`${group.label}-${index}`} value={index}>
                    {index + 1}. {group.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() => setGroupIndex((current) => Math.min(groups.length - 1, current + 1))}
              disabled={groupIndex >= groups.length - 1}
            >
              Next Frame
            </button>
          </>
        )}

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
            <strong>Displayed records:</strong> {parsedObj.displayedCount.toLocaleString()}
          </div>
          <div>
            <strong>Visible slots:</strong> {visibleRecords.length.toLocaleString()}
          </div>
          <div>
            <strong>Groups:</strong> {groups.length.toLocaleString()}
            {groups.length > 0 ? ` (${groups[Math.max(0, Math.min(groupIndex, groups.length - 1))].label})` : ''}
          </div>
          <div>
            <strong>OBJ size mode:</strong> {OBJECT_SIZE_SETTINGS[objectSizeMode as keyof typeof OBJECT_SIZE_SETTINGS]?.label}
          </div>
          <div>
            <strong>VRAM offset:</strong> {vramOffset}
          </div>
          <div>
            <strong>CGRAM offset:</strong> {cgramOffset}
          </div>
          <div>
            <strong>Byte 1 values:</strong> {parsedObj.byte1Values.map((value) => formatHex(value, 2)).join(', ')}
          </div>
          <div>
            <strong>Byte 2 values:</strong> {parsedObj.groupInfoValues.slice(0, 16).map((value) => formatHex(value, 2)).join(', ')}
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

      <p>
        This viewer treats each entry as byte <code>1</code> display and size flags, byte <code>2</code> group info, byte <code>3</code> <code>Y</code>, byte <code>4</code> <code>X</code>, byte <code>5</code> attributes, and byte <code>6</code> tile number.
        When palette mode is set to <code>Use OBJ attr bits 1-3</code>, the viewer interprets the attribute byte like a SNES sprite attribute field and only draws entries whose display bit is set.
      </p>
    </div>
  );
}

export default SnesObjViewer;
