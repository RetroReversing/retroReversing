import { useState } from 'react';
import FileUpload from './FileUpload';

interface RomHeaderField {
  label: string;
  hex: string;
  readable: string;
}

function SnesRomHeaderViewer() {
  const [fields, setFields] = useState<RomHeaderField[] | null>(null);

  // Parse the SNES ROM Header
  // buffer is the full SNES ROM file
  function parseHeader(buffer: Uint8Array): RomHeaderField[] | null {
  // Heuristic: if the value at 0x7FD5 is 0x33, assume a valid LoROM header at 0x7FC0 (extended maker code);
  // otherwise default to 0x81C0 (crude HiROM fallback). For production use, prefer checksum-based mapping detection.
  const offset = buffer[0x7FD5] === 0x33 ? 0x7FC0 : 0x81C0;

  // If the ROM is too small to contain a full header at the detected offset, abort.
  if (buffer.length < offset + 0x20) return null;

    const getString = (start: number, len: number) =>
      new TextDecoder().decode(buffer.slice(offset + start, offset + start + len)).trim();

    const getHex = (addr: number, len = 1) =>
      Array.from(buffer.slice(offset + addr, offset + addr + len))
        .map(b => b.toString(16).padStart(2, '0').toUpperCase())
        .join('');

    return [
      { label: 'Title', hex: getString(0, 0x15), readable: '' },
      { label: 'ROM Mapping Mode', hex: getHex(0x15), readable: decodeRomMappingMode(getHex(0x15)) },
      { label: 'ROM Type', hex: getHex(0x16), readable: decodeRomType(getHex(0x16)) },
      { label: 'ROM Size', hex: getHex(0x17), readable: decodeRomSize(getHex(0x17)) },
      { label: 'SRAM Size', hex: getHex(0x18), readable: decodeSramSize(getHex(0x18)) },
      { label: 'Region Code', hex: getHex(0x19), readable: decodeCountry(getHex(0x19)) },
      { label: 'Developer ID', hex: getHex(0x1A), readable: decodeLicenseCode(getHex(0x1A)) },
      { label: 'ROM Version', hex: getHex(0x1B), readable: `1.${getHex(0x1B)}` },
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
  const map: Record<number, string> = {
    0x00: 'None',
    0x01: 'Nintendo',
    0x08: 'Capcom',
    0x0A: 'Jaleco',
    0x0B: 'Coconuts Japan',
    0x0C: 'Elite Systems',
    0x13: 'Electronic Arts',
    0x18: 'Hudson Soft',
    0x19: 'ITC Entertainment',
    0x1A: 'Yanoman',
    0x1D: 'Clary',
    0x1F: 'Virgin Interactive',
    0x20: 'KSS',
    0x22: 'POW',
    0x24: 'PCM Complete',
    0x25: 'San-X',
    0x28: 'Kotobuki Systems',
    0x29: 'Seta',
    0x2A: 'Marubeni',
    0x2D: 'Tokuma Shoten Intermedia',
    0x2E: 'Tsukuda Original',
    0x31: 'Nintendo',
    0x32: 'Bandai',
    0x33: 'Indicates extended publisher code in header',
    0x34: 'Konami',
    0x35: 'Hector',
    0x38: 'Capcom',
    0x39: 'Banpresto',
    0x3C: 'Entertainment i',
    0x3E: 'Gremlin Graphics',
    0x41: 'Ubisoft',
    0x42: 'Atlus',
    0x44: 'Malibu',
    0x46: 'Angel',
    0x47: 'Spectrum Holobyte',
    0x49: 'IREM',
    0x4A: 'Virgin Interactive',
    0x4D: 'Malibu',
    0x4F: 'U.S. Gold',
    0x50: 'Absolute',
    0x51: 'Acclaim',
    0x52: 'Activision',
    0x53: 'American Sammy',
    0x54: 'GameTek',
    0x55: 'Park Place',
    0x56: 'LJN',
    0x57: 'Matchbox',
    0x59: 'Milton Bradley',
    0x5A: 'Mindscape',
    0x5B: 'Romstar',
    0x5C: 'Naxat Soft',
    0x5D: 'Tradewest',
    0x60: 'Titus',
    0x61: 'Virgin Interactive',
    0x67: 'Ocean',
    0x69: 'Electronic Arts',
    0x6E: 'Elite Systems',
    0x6F: 'Electro Brain',
    0x70: 'Infogrames',
    0x71: 'Interplay',
    0x72: 'Broderbund',
    0x73: 'Sculptered Soft',
    0x75: 'The Sales Curve',
    0x78: 'THQ',
    0x79: 'Accolade',
    0x7A: 'Triffix Entertainment',
    0x7C: 'Microprose',
    0x7F: 'Kemco',
    0x80: 'Misawa',
    0x83: 'Lozc',
    0x86: 'Tokuma Shoten Intermedia',
    0x8B: 'Bullet-Proof Software',
    0x8C: 'Vic Tokai',
    0x8E: 'Ape',
    0x8F: 'I\'Max',
    0x91: 'Chunsoft',
    0x92: 'Video System',
    0x93: 'Ocean/Acclaim',
    0x95: 'Varie',
    0x96: 'Yonezawa/S\'pal',
    0x97: 'Kaneko',
    0x99: 'Arc',
    0x9A: 'Nihon Bussan',
    0x9B: 'Tecmo',
    0x9C: 'Imagineer',
    0x9D: 'Banpresto',
    0x9F: 'Nova',
    0xA0: 'Hori',
    0xA1: 'Bandai',
    0xA2: 'Enix',
    0xA4: 'Konami',
    0xA6: 'Kawada',
    0xA7: 'Takara',
    0xA9: 'Technos Japan',
    0xAA: 'Broderbund',
    0xAC: 'Toei Animation',
    0xAD: 'Toho',
    0xAF: 'Namco',
    0xB0: 'Acclaim',
    0xB1: 'ASCII or Nexsoft',
    0xB2: 'Bandai',
    0xB4: 'Square',
    0xB6: 'HAL',
    0xB7: 'SNK',
    0xB9: 'Pony Canyon',
    0xBA: 'Culture Brain',
    0xBB: 'Sunsoft',
    0xBD: 'Sony Imagesoft',
    0xBF: 'Sammy',
    0xC0: 'Taito',
    0xC2: 'Kemco',
    0xC3: 'Squaresoft',
    0xC4: 'Tokuma Shoten Intermedia',
    0xC5: 'Data East',
    0xC6: 'Tonkin House',
    0xC8: 'Koei',
    0xC9: 'UFL',
    0xCA: 'Ultra',
    0xCB: 'Vap',
    0xCC: 'Use Corporation',
    0xCD: 'Meldac',
    0xCE: 'Pony Canyon',
    0xCF: 'Angel',
    0xD0: 'Taito',
    0xD1: 'Sofel',
    0xD2: 'Quest',
    0xD3: 'Sigma',
    0xD4: 'Ask Kodansha',
    0xD6: 'Naxat Soft',
    0xD7: 'Copya System',
    0xD9: 'Banpresto',
    0xDA: 'Tomy',
    0xDB: 'LJN',
    0xDD: 'NCS',
    0xDE: 'Human',
    0xDF: 'Altron',
    0xE0: 'Jaleco',
    0xE1: 'Towachiki',
    0xE2: 'Uutaka',
    0xE3: 'Varie',
    0xE5: 'Epoch',
    0xE7: 'Athena',
    0xE8: 'Asmik',
    0xE9: 'Natsume',
    0xEA: 'King Records',
    0xEB: 'Atlus',
    0xEC: 'Epic/Sony Records',
    0xEE: 'IGS',
    0xF0: 'A Wave',
    0xF3: 'Extreme Entertainment',
    0xFF: 'LJN',
  };

  return map[code] || `Unknown (0x${hex})`;
}

function decodeRomMappingMode(hex: string): string {
  const val = parseInt(hex, 16);
  const map: Record<number, string> = {
    0x20: 'LoROM',
    0x21: 'LoROM + FastROM',
    0x30: 'HiROM',
    0x31: 'HiROM + FastROM',
    0x32: 'ExHiROM',
    0x35: 'ExHiROM + FastROM',
    0x40: 'SA-1',
    0x43: 'SA-1 + FastROM',
    0x50: 'S-DD1',
  };
  return map[val] || `Unknown (0x${hex})`;
}
