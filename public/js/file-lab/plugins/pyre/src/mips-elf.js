/** Inspect ELF headers before offering a spec set for MIPS files. */
export function isMipsElf(bytes) {
  if (!bytes || bytes.length < 20 ||
      bytes[0] !== 0x7f || bytes[1] !== 0x45 || bytes[2] !== 0x4c || bytes[3] !== 0x46 ||
      (bytes[5] !== 1 && bytes[5] !== 2)) return false;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return view.getUint16(18, bytes[5] === 1) === 8;
}

/** The bundled MIPS and R5900 specs currently cover ELF32 little endian only. */
export function isUnsupportedMipsElf(bytes) {
  return isMipsElf(bytes) && (bytes[4] !== 1 || bytes[5] !== 1);
}
