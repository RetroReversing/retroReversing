import { detectFormat } from "./parsers/index.ts";

function isJavaClass(bytes) {
  if (!bytes || bytes.length < 8) return false;
  if (bytes[0] !== 0xca || bytes[1] !== 0xfe || bytes[2] !== 0xba || bytes[3] !== 0xbe) return false;
  var major = bytes[6] | (bytes[7] << 8);
  return major >= 43 && major <= 255;
}

/**
 * Cheap header checks for formats Pyre can decompile (ELF, Mach-O, PE, WASM).
 */
export function isPyreBinary(ctx) {
  var bytes = ctx && ctx.bytes;
  if (!bytes || bytes.length < 4) return false;
  if (isJavaClass(bytes)) return false;
  return detectFormat(bytes) !== null;
}
