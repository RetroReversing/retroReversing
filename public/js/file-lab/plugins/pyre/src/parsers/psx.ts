// PS-X EXE. The 0x800-byte header is metadata. The payload is mapped at
// the destination address and decompiled as little-endian MIPS.

import type { ParsedBinary } from "../decompiler/types";
import { archForPsx } from "../decompiler/arch-map";
import { locatePsxExe } from "../../../../psx-image.js";

const MAX_FUNCTIONS = 2000;
const MAX_STRINGS = 1500;

function readU32(bytes: Uint8Array, offset: number): number {
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  ) >>> 0;
}

export async function parsePsx(bytes: Uint8Array): Promise<ParsedBinary> {
  const image = locatePsxExe(bytes);
  if (!image) throw new Error("not a PS-X EXE");

  const archInfo = archForPsx();
  const payload = bytes.subarray(0x800, 0x800 + image.payloadSize);
  const base = BigInt(image.dest);
  const functions: ParsedBinary["functions"] = [];
  const symbols: [bigint, string][] = [];
  const seen = new Set<number>();

  function addFunction(offset: number, name: string) {
    if (seen.has(offset) || functions.length >= MAX_FUNCTIONS) return;
    if (offset < 0 || offset + 3 >= payload.length) return;
    seen.add(offset);
    const addr = base + BigInt(offset);
    functions.push({ addr, name });
    symbols.push([addr, name]);
  }

  addFunction(image.pc - image.dest, image.entryName);

  for (let i = 0; i + 3 < payload.length; i += 4) {
    const word = readU32(payload, i);
    // addiu sp, sp, -imm
    if ((word & 0xffff0000) !== 0x27bd0000 || (word & 0x8000) === 0) continue;
    addFunction(i, "fcn_" + i.toString(16));
    if (functions.length >= MAX_FUNCTIONS) break;
  }

  return {
    format: "psx",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions: [{ vaddr: base, bytes: payload }],
    symbols,
    strings: collectStrings(payload, base),
    readonly: [[base, BigInt(payload.length)]],
    entryPoint: BigInt(image.pc),
    functions,
  };
}

function collectStrings(bytes: Uint8Array, base: bigint): [bigint, number][] {
  const out: [bigint, number][] = [];
  let start = -1;
  for (let i = 0; i <= bytes.length; i++) {
    const value = i < bytes.length ? bytes[i] : 0;
    const printable = value >= 0x20 && value < 0x7f;
    if (printable) {
      if (start < 0) start = i;
    } else if (start >= 0) {
      if (value === 0 && i - start >= 6 && out.length < MAX_STRINGS) {
        out.push([base + BigInt(start), i - start]);
      }
      start = -1;
    }
  }
  return out;
}
