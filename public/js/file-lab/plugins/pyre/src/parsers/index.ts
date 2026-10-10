// Magic-byte dispatch to the right parser. Always returns a
// ParsedBinary or throws — never returns a partial result, so the UI
// can rely on every advertised arch/region/symbol existing.

import type { ParsedBinary } from "../decompiler/types";
import { parseElf } from "./elf";
import { parseMacho } from "./macho";
import { parsePe } from "./pe";
import { parseWasm } from "./wasm";

export function detectFormat(
  bytes: Uint8Array,
): "elf" | "macho" | "pe" | "wasm" | null {
  if (bytes.length < 4) return null;
  // ELF: 7F 45 4C 46
  if (
    bytes[0] === 0x7f &&
    bytes[1] === 0x45 &&
    bytes[2] === 0x4c &&
    bytes[3] === 0x46
  )
    return "elf";
  // Mach-O 64-bit LE/BE, 32-bit LE/BE, and fat/universal (CAFEBABE /
  // CAFEBABF and the byte-swapped variants). Fat dispatch — picking
  // the best slice — happens inside the Mach-O parser.
  //
  // Caveat: 0xCAFEBABE is also the Java .class magic. The convention
  // is to gate it on a sane nfat_arch count; the fat Mach-O parser
  // does that check and falls through with a clear error if it looks
  // like Java. We accept the false-positive routing here since Java
  // .class isn't otherwise supported.
  //
  // `>>> 0` coerces the OR result (signed int32) back into an unsigned
  // uint32. Without it any magic with the top bit set (FEEDFACF,
  // CAFEBABE, ...) compares as negative and never matches the
  // positive hex literal — i.e. *every* Mach-O variant fell through
  // the detector before this fix.
  const m =
    (((bytes[0] << 24) |
      (bytes[1] << 16) |
      (bytes[2] << 8) |
      bytes[3]) >>>
      0);
  if (
    m === 0xfeedfacf ||
    m === 0xcffaedfe ||
    m === 0xfeedface ||
    m === 0xcefaedfe ||
    m === 0xcafebabe ||
    m === 0xbebafeca ||
    m === 0xcafebabf ||
    m === 0xbfbafeca
  )
    return "macho";
  // PE: starts with "MZ", then we check the PE header offset later
  if (bytes[0] === 0x4d && bytes[1] === 0x5a) return "pe";
  // WASM: 00 61 73 6D
  if (
    bytes[0] === 0x00 &&
    bytes[1] === 0x61 &&
    bytes[2] === 0x73 &&
    bytes[3] === 0x6d
  )
    return "wasm";
  return null;
}

export async function parseBinary(bytes: Uint8Array): Promise<ParsedBinary> {
  const fmt = detectFormat(bytes);
  switch (fmt) {
    case "elf":
      return parseElf(bytes);
    case "macho":
      return parseMacho(bytes);
    case "pe":
      return parsePe(bytes);
    case "wasm":
      return parseWasm(bytes);
    default:
      throw new Error("unrecognized binary format (not ELF/Mach-O/PE/WASM)");
  }
}

// Helper used by every parser: scan a region for printable C strings,
// emit (vaddr, length) tuples ≥ 4 chars. The decompiler turns these
// into `char[len]` symbols so loads render as string literals.
export function scanStrings(
  vaddr: bigint,
  bytes: Uint8Array,
  minLen = 4,
): [bigint, number][] {
  const out: [bigint, number][] = [];
  let start = -1;
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i];
    const printable = (b >= 0x20 && b < 0x7f) || b === 0x09 || b === 0x0a;
    if (printable) {
      if (start < 0) start = i;
    } else {
      if (start >= 0 && b === 0 && i - start >= minLen) {
        out.push([vaddr + BigInt(start), i - start]);
      }
      start = -1;
    }
  }
  return out;
}
