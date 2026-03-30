import { useMemo, useState } from 'react';
import FileUpload from './FileUpload';

interface PaletteColor {
  value: number;
  hex: string;
  rgbHex: string;
  rgbLabel: string;
}

interface ParsedPalette {
  byteLength: number;
  colorCount: number;
  rowCount: number;
  rows: PaletteColor[][];
  warnings: string[];
}

function scale5Bit(value: number): number {
  return (value << 3) | (value >> 2);
}

function decodeColor(value: number): PaletteColor {
  const red = scale5Bit(value & 0x1f);
  const green = scale5Bit((value >> 5) & 0x1f);
  const blue = scale5Bit((value >> 10) & 0x1f);

  return {
    value,
    hex: value.toString(16).toUpperCase().padStart(4, '0'),
    rgbHex: `#${red.toString(16).padStart(2, '0')}${green
      .toString(16)
      .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`,
    rgbLabel: `${red}, ${green}, ${blue}`,
  };
}

function parseColFile(buffer: Uint8Array): ParsedPalette | null {
  if (buffer.length < 2) return null;

  const warnings: string[] = [];
  if (buffer.length % 2 !== 0) {
    warnings.push('Odd file size detected. The final byte was ignored.');
  }

  const wordCount = Math.floor(buffer.length / 2);
  const colors: PaletteColor[] = [];

  for (let i = 0; i < wordCount; i += 1) {
    const offset = i * 2;
    const value = buffer[offset] | (buffer[offset + 1] << 8);
    colors.push(decodeColor(value));
  }

  const rows: PaletteColor[][] = [];
  for (let i = 0; i < colors.length; i += 16) {
    rows.push(colors.slice(i, i + 16));
  }

  if (wordCount !== 512) {
    warnings.push(
      `This file has ${wordCount} colors instead of the common 512-color SNES workstation palette bank.`,
    );
  }

  return {
    byteLength: buffer.length,
    colorCount: wordCount,
    rowCount: rows.length,
    rows,
    warnings,
  };
}

function getTextColor(rgbHex: string): string {
  const red = parseInt(rgbHex.slice(1, 3), 16);
  const green = parseInt(rgbHex.slice(3, 5), 16);
  const blue = parseInt(rgbHex.slice(5, 7), 16);
  const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
  return luminance > 160 ? '#111827' : '#f9fafb';
}

function SnesColPaletteViewer() {
  const [palette, setPalette] = useState<ParsedPalette | null>(null);

  const summary = useMemo(() => {
    if (!palette) return null;
    return `${palette.byteLength} bytes, ${palette.colorCount} colors, ${palette.rowCount} palette rows`;
  }, [palette]);

  return (
    <div className="p-4 space-y-4">
      <h3>Load a SNES .COL palette file to visualize every color row:</h3>
      <p>
        This viewer reads the file as little-endian SNES BGR555 color words and groups them into
        rows of 16 colors.
      </p>
      <FileUpload accept=".col,.COL" onLoad={(buffer) => setPalette(parseColFile(buffer))} />

      {palette && (
        <div className="space-y-4">
          <div className="border border-gray-300 rounded p-3 bg-gray-50">
            <div className="font-medium">Palette Summary</div>
            <div>{summary}</div>
            {palette.warnings.map((warning) => (
              <div key={warning} style={{ color: '#92400e' }}>
                {warning}
              </div>
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="table-auto border-collapse border border-gray-400 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-1 text-left">Row</th>
                  {Array.from({ length: 16 }, (_, index) => (
                    <th key={index} className="px-2 py-1 text-left">
                      {index}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {palette.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border border-gray-300">
                    <td className="px-2 py-1 font-medium">{rowIndex.toString().padStart(2, '0')}</td>
                    {row.map((color, colorIndex) => (
                      <td
                        key={`${rowIndex}-${colorIndex}`}
                        style={{
                          background: color.rgbHex,
                          color: getTextColor(color.rgbHex),
                          border: '1px solid #999',
                          minWidth: '2.5em',
                          padding: '0.35em',
                          verticalAlign: 'top',
                        }}
                      >
                        <div style={{ fontWeight: 600 }}>{color.hex}</div>
                      </td>
                    ))}
                    {row.length < 16 &&
                      Array.from({ length: 16 - row.length }, (_, fillerIndex) => (
                        <td key={`filler-${rowIndex}-${fillerIndex}`} className="px-2 py-1">
                          -
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default SnesColPaletteViewer;
