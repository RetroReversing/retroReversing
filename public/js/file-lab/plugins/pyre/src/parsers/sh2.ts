// Raw Saturn SH-2 image. The whole file is one RAM region. Cooked
// IP.BIN is mapped at the boot-ROM link address 0x06002000. Disc
// programs have no stored load address, so their addresses are file offsets.

import type { ParsedBinary } from "../decompiler/types";
import { archForSuperH2 } from "../decompiler/arch-map";
import { locateSaturnSh2 } from "../../../../saturn-sh2.js";

const PROLOGUE_STS = 0x4f22;
const PROLOGUE_MOV = 0x2fe6;
const MAX_FUNCTIONS = 2000;
const MAX_STRINGS = 1500;

export async function parseSh2(bytes: Uint8Array): Promise<ParsedBinary> {
  const image = locateSaturnSh2(bytes);
  if (!image) throw new Error("not a Saturn SH-2 image");

  const archInfo = archForSuperH2();
  const base = BigInt(image.baddr);
  const functions: ParsedBinary["functions"] = [];
  const symbols: [bigint, string][] = [];
  const seen = new Set<number>();

  function addFunction(offset: number, name: string) {
    if (seen.has(offset) || functions.length >= MAX_FUNCTIONS) return;
    if (offset < 0 || offset + 1 >= bytes.length) return;
    seen.add(offset);
    const addr = base + BigInt(offset);
    functions.push({ addr, name });
    symbols.push([addr, name]);
  }

  addFunction(image.entry - image.baddr, image.entryName);

  for (let i = 0; i + 1 < bytes.length; i += 2) {
    const word = (bytes[i] << 8) | bytes[i + 1];
    if (word !== PROLOGUE_STS && word !== PROLOGUE_MOV) continue;
    addFunction(i, "fcn_" + i.toString(16));
    if (functions.length >= MAX_FUNCTIONS) break;
  }

  return {
    format: "sh2",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions: [{ vaddr: base, bytes }],
    symbols,
    strings: collectStrings(bytes, base),
    readonly: [[base, BigInt(bytes.length)]],
    entryPoint: BigInt(image.entry),
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
