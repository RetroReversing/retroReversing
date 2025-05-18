import { useState } from 'react';
import FileUpload from './FileUpload';

interface RomHeaderField {
  label: string;
  hex: string;
  readable: string;
}

function SnesRomHeaderViewer() {
  const [fields, setFields] = useState<RomHeaderField[] | null>(null);

  function parseHeader(buffer: Uint8Array): RomHeaderField[] | null {
    const offset = buffer[0x7FD5] === 0x33 ? 0x7FC0 : 0x81C0;
    if (buffer.length < offset + 0x20) return null;

    const getString = (start: number, len: number) =>
      new TextDecoder().decode(buffer.slice(offset + start, offset + start + len)).trim();

    const getHex = (addr: number, len = 1) =>
      Array.from(buffer.slice(offset + addr, offset + addr + len))
        .map(b => b.toString(16).padStart(2, '0').toUpperCase())
        .join('');

    return [
      { label: 'Title', hex: getString(0, 21), readable: '' },
      { label: 'ROM Type', hex: getHex(0x16), readable: decodeRomType(getHex(0x16)) },
      { label: 'ROM Size', hex: getHex(0x17), readable: decodeRomSize(getHex(0x17)) },
      { label: 'SRAM Size', hex: getHex(0x18), readable: decodeSramSize(getHex(0x18)) },
      { label: 'Country', hex: getHex(0x19), readable: decodeCountry(getHex(0x19)) },
      { label: 'License Code', hex: getHex(0x19), readable: decodeLicenseCode(getHex(0x19)) },
      { label: 'Version', hex: getHex(0x1B), readable: `1.${getHex(0x1B)}` },
      { label: 'Checksum Complement', hex: getHex(0x1C, 2), readable: '' },
      { label: 'Checksum', hex: getHex(0x1E, 2), readable: '' },
    ];
  }

  return (
    <div className="p-4 space-y-4">
      <h3>Load your SNES ROM below to see the headers:</h3>
      <FileUpload accept=".sfc,.smc" onLoad={(buffer) => setFields(parseHeader(buffer))} />
      {fields && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 text-left">Field</th>
              <th className="px-2 py-1 text-left">Hex</th>
              <th className="px-2 py-1 text-left">Readable</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(({ label, hex, readable }) => (
              <tr key={label} className="border border-gray-300">
                <td className="px-2 py-1">{label}</td>
                <td className="px-2 py-1">{hex}</td>
                <td className="px-2 py-1">{readable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SnesRomHeaderViewer;

export function decodeRomType(hex: string): string {
  const type = parseInt(hex, 16);
  const map: Record<number, string> = {
    0x00: 'ROM only',
    0x01: 'ROM + RAM',
    0x02: 'ROM + RAM + Battery',
    0x03: 'ROM + DSP1',
    0x04: 'ROM + DSP1 + RAM',
    0x05: 'ROM + DSP1 + RAM + Battery',
    0x10: 'ROM + Super FX',
    0x13: 'ROM + Super FX + RAM + Battery',
    0x20: 'ROM + SA-1',
    0x23: 'ROM + SA-1 + RAM + Battery',
    0x30: 'ROM + SDD1',
    0xF3: 'ROM + S-RTC + RAM + Battery',
    0xF5: 'ROM + OBC-1 + RAM + Battery',
    0xF6: 'ROM + ST-010',
    0xF9: 'ROM + Super FX + RAM',
    0xFA: 'ROM + Super FX + RAM + Battery',
    0xFB: 'ROM + ST-011',
    0xFC: 'ROM + ST-018',
    0xFD: 'ROM + DSP2',
    0xFE: 'ROM + DSP3',
    0xFF: 'ROM + DSP4',
  };
  return map[type] || `Unknown (0x${hex})`;
}

export function decodeRomSize(hex: string): string {
  const exponent = parseInt(hex, 16);
  return exponent >= 0x08 && exponent <= 0x0C
    ? `${2 ** (exponent + 10) / 1024} KB`
    : 'Unknown';
}

export function decodeSramSize(hex: string): string {
  if (hex === '00') return 'None';
  const exponent = parseInt(hex, 16);
  return `${2 ** (exponent + 10) / 1024} KB`;
}

export function decodeCountry(hex: string): string {
  const map: Record<number, string> = {
    0x00: 'Japan',
    0x01: 'USA',
    0x02: 'Europe',
    0x03: 'Sweden',
    0x04: 'Finland',
    0x05: 'Denmark',
    0x06: 'France',
    0x07: 'Holland',
    0x08: 'Spain',
    0x09: 'Germany',
    0x0A: 'Italy',
    0x0B: 'China',
    0x0C: 'Indonesia',
    0x0D: 'South Korea',
    0x0E: 'Other (Asia)',
    0x0F: 'Other (World)',
    0x10: 'Canada',
    0x11: 'Brazil',
    0x12: 'Australia',
    0x13: 'Other (PAL)',
    0x14: 'Other (NTSC)',
    0x15: 'Other (Unified)',
  };
  return map[parseInt(hex, 16)] || 'Unknown';
}

export function decodeLicenseCode(hex: string): string {
  const code = parseInt(hex, 16);
  return code === 0x33 ? 'Extended (New)' : `Old (${hex})`;
}
