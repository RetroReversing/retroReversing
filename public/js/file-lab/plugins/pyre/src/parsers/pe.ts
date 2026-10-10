// Minimal PE parser. Reads the optional header to find ImageBase,
// each IMAGE_SECTION_HEADER for region/readonly, the export table,
// and the COFF symbol table for named functions. Doesn't process
// imports or relocations.

import type { ParsedBinary } from "../decompiler/types";
import { archFromPe } from "../decompiler/arch-map";
import { scanStrings } from "./index";
import {
  discoverPeExportFunctions,
  discoverPePrologueFunctions,
  discoverPeRuntimeFunctions,
  mergeFunctionEntries,
  type PeSection,
} from "./discover-functions";

const IMAGE_SCN_MEM_WRITE = 0x80000000;

export async function parsePe(bytes: Uint8Array): Promise<ParsedBinary> {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (dv.getUint16(0, true) !== 0x5a4d)
    throw new Error("not a PE: missing MZ header");
  const peOff = dv.getUint32(0x3c, true);
  if (dv.getUint32(peOff, true) !== 0x4550)
    throw new Error("not a PE: missing PE\\0\\0 signature");

  const machine = dv.getUint16(peOff + 4, true);
  const numSections = dv.getUint16(peOff + 6, true);
  const optHeaderSize = dv.getUint16(peOff + 20, true);
  const optHeaderOff = peOff + 24;
  const optMagic = dv.getUint16(optHeaderOff, true);
  const isPe32Plus = optMagic === 0x20b;
  const archInfo = archFromPe(machine);

  const imageBase = isPe32Plus
    ? dv.getBigUint64(optHeaderOff + 24, true)
    : BigInt(dv.getUint32(optHeaderOff + 28, true));

  const secOff = optHeaderOff + optHeaderSize;
  const regions: ParsedBinary["regions"] = [];
  const readonly: [bigint, bigint][] = [];
  const sections: PeSection[] = [];

  for (let i = 0; i < numSections; i++) {
    const off = secOff + i * 40;
    const name = readNul(bytes, off, 8);
    const vsize = dv.getUint32(off + 8, true);
    const vaddr = dv.getUint32(off + 12, true);
    const rawSize = dv.getUint32(off + 16, true);
    const rawPtr = dv.getUint32(off + 20, true);
    const chars = dv.getUint32(off + 36, true);

    const va = imageBase + BigInt(vaddr);
    sections.push({ name, rva: BigInt(vaddr), vsize, raw: rawPtr, rawSize, chars });

    if (rawSize > 0 || vsize > 0) {
      var regionLen = Math.max(rawSize, vsize);
      var regionBytes = new Uint8Array(regionLen);
      if (rawSize > 0) {
        regionBytes.set(bytes.subarray(rawPtr, rawPtr + rawSize));
      }
      regions.push({
        vaddr: va,
        bytes: regionBytes,
      });
    }
    if ((chars & IMAGE_SCN_MEM_WRITE) === 0 && vsize > 0) {
      readonly.push([va, BigInt(vsize)]);
    }
  }

  const dataDirOff = optHeaderOff + (isPe32Plus ? 112 : 96);
  const exportRva = dv.getUint32(dataDirOff, true);
  const symbols: [bigint, string][] = [];
  const coffFunctions: ParsedBinary["functions"] = [];

  const symTabPtr = dv.getUint32(peOff + 12, true);
  const numSyms = dv.getUint32(peOff + 16, true);
  if (symTabPtr > 0 && numSyms > 0 && symTabPtr + numSyms * 18 <= bytes.length) {
    const stringTabOff = symTabPtr + numSyms * 18;
    let i = 0;
    while (i < numSyms) {
      const eo = symTabPtr + i * 18;
      const numAux = bytes[eo + 17];
      const value = dv.getUint32(eo + 8, true);
      const sectionNumber = dv.getInt16(eo + 12, true);
      const typeField = dv.getUint16(eo + 14, true);
      const storageClass = bytes[eo + 16];

      const isFunction = ((typeField >> 4) & 0xf) === 2;
      const isCodeStorage = storageClass === 2 || storageClass === 3;
      if (
        isFunction &&
        isCodeStorage &&
        sectionNumber > 0 &&
        sectionNumber <= sections.length
      ) {
        let name: string;
        if (dv.getUint32(eo, true) === 0) {
          const strOff = dv.getUint32(eo + 4, true);
          const start = stringTabOff + strOff;
          let end = start;
          while (end < bytes.length && bytes[end] !== 0) end++;
          name = new TextDecoder().decode(bytes.subarray(start, end));
        } else {
          name = readNul(bytes, eo, 8);
        }
        if (machine === 0x14c && name.startsWith("_")) name = name.slice(1);
        if (name) {
          const sec = sections[sectionNumber - 1];
          const addr = imageBase + sec.rva + BigInt(value);
          symbols.push([addr, name]);
          coffFunctions.push({ addr, name });
        }
      }
      i += 1 + numAux;
    }
  }

  const exportFunctions = discoverPeExportFunctions(
    dv,
    bytes,
    imageBase,
    exportRva,
    sections,
  );
  const runtimeFunctions = discoverPeRuntimeFunctions(
    isPe32Plus,
    imageBase,
    dataDirOff,
    dv,
    sections,
  );
  const prologueFunctions = discoverPePrologueFunctions(
    machine,
    imageBase,
    sections,
    bytes,
  );

  let uniqFunctions = mergeFunctionEntries([
    exportFunctions,
    coffFunctions,
    runtimeFunctions,
    prologueFunctions,
  ]);

  for (const fn of uniqFunctions) {
    if (!symbols.some(([addr]) => addr === fn.addr)) {
      symbols.push([fn.addr, fn.name]);
    }
  }

  const strings: [bigint, number][] = [];
  for (const region of regions) {
    const isRO = readonly.some(([a]) => a === region.vaddr);
    if (!isRO) continue;
    strings.push(...scanStrings(region.vaddr, region.bytes));
  }

  const epRva = dv.getUint32(optHeaderOff + 16, true);
  const entryPoint = epRva > 0 ? imageBase + BigInt(epRva) : undefined;

  if (entryPoint != null && !uniqFunctions.some((f) => f.addr === entryPoint)) {
    const ep = entryPoint;
    let i = uniqFunctions.findIndex((f) => f.addr > ep);
    if (i < 0) i = uniqFunctions.length;
    uniqFunctions.splice(i, 0, { addr: ep, name: "entry" });
    symbols.push([ep, "entry"]);
  }

  return {
    format: "pe",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions,
    symbols,
    strings,
    readonly,
    entryPoint,
    functions: uniqFunctions,
    imageBase,
  };
}

function readNul(bytes: Uint8Array, off: number, max: number): string {
  let end = off;
  const stop = Math.min(off + max, bytes.length);
  while (end < stop && bytes[end] !== 0) end++;
  return new TextDecoder().decode(bytes.subarray(off, end));
}
