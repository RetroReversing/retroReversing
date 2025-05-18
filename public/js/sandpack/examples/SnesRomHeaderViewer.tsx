import { useState } from 'react';
import FileUpload from './FileUpload';

interface RomHeader {
  title: string;
  romType: string;
  romSize: string;
  sramSize: string;
  country: string;
  licenseCode: string;
  version: string;
  checksumComplement: string;
  checksum: string;
}

/**
 * Allows the user to upload a SNES ROM file and parses the header values for display.
 */
function SnesRomHeaderViewer() {
  const [header, setHeader] = useState<RomHeader | null>(null);

  function parseHeader(buffer: Uint8Array): RomHeader | null {
    const offset = buffer[0x7FD5] === 0x33 ? 0x7FC0 : 0x81C0; // crude check for HiROM
    if (buffer.length < offset + 0x20) return null;

    const getString = (start: number, len: number) =>
      new TextDecoder().decode(buffer.slice(offset + start, offset + start + len)).trim();

    const getHex = (addr: number, len = 1) =>
      Array.from(buffer.slice(offset + addr, offset + addr + len))
        .map(b => b.toString(16).padStart(2, '0').toUpperCase())
        .join('');

    return {
      title: getString(0, 21),
      romType: getHex(0x15),
      romSize: getHex(0x16),
      sramSize: getHex(0x17),
      country: getHex(0x18),
      licenseCode: getHex(0x19),
      version: getHex(0x1B),
      checksumComplement: getHex(0x1C, 2),
      checksum: getHex(0x1E, 2),
    };
  }

  return (
    <div className="w-full p-4 space-y-4">
      <h3>Load your SNES ROM below to see the headers:</h3>
      <FileUpload accept=".sfc,.smc" onLoad={(buffer) => setHeader(parseHeader(buffer))} />
      {header && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <tbody>
            {Object.entries(header).map(([key, value]) => (
              <tr key={key} className="border border-gray-300">
                <td className="px-2 py-1 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                <td className="px-2 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SnesRomHeaderViewer;
