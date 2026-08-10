import type { FunctionEntry } from "../decompiler/types";

const IMAGE_SCN_MEM_EXECUTE = 0x20000000;
const IMAGE_FILE_MACHINE_I386 = 0x014c;
const IMAGE_FILE_MACHINE_AMD64 = 0x8664;

export type PeSection = {
  name: string;
  rva: bigint;
  vsize: number;
  raw: number;
  rawSize: number;
  chars: number;
};

export function rvaToFile(
  rva: number,
  secs: PeSection[],
): number | null {
  for (const s of secs) {
    const start = Number(s.rva);
    if (rva >= start && rva < start + s.vsize) {
      return s.raw + (rva - start);
    }
  }
  return null;
}

/** All export RVAs, including ordinal-only entries. */
export function discoverPeExportFunctions(
  dv: DataView,
  bytes: Uint8Array,
  imageBase: bigint,
  exportRva: number,
  sections: PeSection[],
): FunctionEntry[] {
  const out: FunctionEntry[] = [];
  if (exportRva <= 0) return out;

  const exportFileOff = rvaToFile(exportRva, sections);
  if (exportFileOff == null) return out;

  const numFuncs = dv.getUint32(exportFileOff + 20, true);
  const numNames = dv.getUint32(exportFileOff + 24, true);
  const addrFuncsRva = dv.getUint32(exportFileOff + 28, true);
  const addrNamesRva = dv.getUint32(exportFileOff + 32, true);
  const addrOrdsRva = dv.getUint32(exportFileOff + 36, true);

  const funcsOff = rvaToFile(addrFuncsRva, sections);
  const namesOff = rvaToFile(addrNamesRva, sections);
  const ordsOff = rvaToFile(addrOrdsRva, sections);
  if (funcsOff == null) return out;

  const nameByOrdinal = new Map<number, string>();
  if (namesOff != null && ordsOff != null) {
    for (let i = 0; i < numNames; i++) {
      const nameRva = dv.getUint32(namesOff + i * 4, true);
      const ord = dv.getUint16(ordsOff + i * 2, true);
      const nameFileOff = rvaToFile(nameRva, sections);
      if (nameFileOff == null) continue;
      let end = nameFileOff;
      while (end < bytes.length && bytes[end] !== 0) end++;
      nameByOrdinal.set(ord, new TextDecoder().decode(bytes.subarray(nameFileOff, end)));
    }
  }

  for (let ord = 0; ord < numFuncs; ord++) {
    const fnRva = dv.getUint32(funcsOff + ord * 4, true);
    if (fnRva === 0) continue;
    const addr = imageBase + BigInt(fnRva);
    const name = nameByOrdinal.get(ord) || `export_${ord}`;
    out.push({ addr, name });
  }

  return out;
}

/** x64 PE: IMAGE_RUNTIME_FUNCTION_ENTRY table (reliable for MSVC builds). */
export function discoverPeRuntimeFunctions(
  isPe32Plus: boolean,
  imageBase: bigint,
  dataDirOff: number,
  dv: DataView,
  sections: PeSection[],
): FunctionEntry[] {
  const out: FunctionEntry[] = [];
  if (!isPe32Plus) return out;

  const excRva = dv.getUint32(dataDirOff + 3 * 8, true);
  const excSize = dv.getUint32(dataDirOff + 3 * 8 + 4, true);
  if (excRva <= 0 || excSize < 12) return out;

  const excOff = rvaToFile(excRva, sections);
  if (excOff == null) return out;

  const count = Math.floor(excSize / 12);
  for (let i = 0; i < count; i++) {
    const beginRva = dv.getUint32(excOff + i * 12, true);
    const endRva = dv.getUint32(excOff + i * 12 + 4, true);
    if (beginRva === 0) continue;
    const addr = imageBase + BigInt(beginRva);
    const size = endRva > beginRva ? endRva - beginRva : undefined;
    out.push({
      addr,
      name: `FUN_${beginRva.toString(16)}`,
      size,
    });
  }

  return out;
}

/**
 * Scan executable sections for common function prologues. Used when COFF
 * symbols were stripped (typical MSVC /DEBUG:PDB-only builds).
 */
export function discoverPePrologueFunctions(
  machine: number,
  imageBase: bigint,
  sections: PeSection[],
  bytes: Uint8Array,
): FunctionEntry[] {
  const out: FunctionEntry[] = [];
  const is32 = machine === IMAGE_FILE_MACHINE_I386;
  const is64 = machine === IMAGE_FILE_MACHINE_AMD64;
  if (!is32 && !is64) return out;

  const minGap = 16;

  for (const sec of sections) {
    if ((sec.chars & IMAGE_SCN_MEM_EXECUTE) === 0) continue;
    if (sec.rawSize < 4) continue;

    const start = sec.raw;
    const end = sec.raw + sec.rawSize;
    let lastFound = -minGap;

    for (let i = start; i < end - 3; i++) {
      if (i - lastFound < minGap) continue;

      let match = false;
      if (is32) {
        if (
          (bytes[i] === 0x55 && bytes[i + 1] === 0x8b && bytes[i + 2] === 0xec) ||
          (bytes[i] === 0x55 && bytes[i + 1] === 0x89 && bytes[i + 2] === 0xe5)
        ) {
          match = true;
        }
      } else if (is64) {
        if (
          (bytes[i] === 0x48 && bytes[i + 1] === 0x89 && bytes[i + 2] === 0x5c && bytes[i + 3] === 0x24) ||
          (bytes[i] === 0x48 && bytes[i + 1] === 0x83 && bytes[i + 2] === 0xec) ||
          (bytes[i] === 0x40 && bytes[i + 1] === 0x53) ||
          (bytes[i] === 0x48 && bytes[i + 1] === 0x8b && bytes[i + 2] === 0xc4)
        ) {
          match = true;
        }
      }

      if (match) {
        const rva = Number(sec.rva) + (i - start);
        out.push({
          addr: imageBase + BigInt(rva),
          name: `FUN_${rva.toString(16)}`,
        });
        lastFound = i;
      }
    }
  }

  return out;
}

export function mergeFunctionEntries(
  lists: FunctionEntry[][],
): FunctionEntry[] {
  const byAddr = new Map<string, FunctionEntry>();

  for (const list of lists) {
    for (const fn of list) {
      const key = fn.addr.toString();
      const existing = byAddr.get(key);
      if (!existing) {
        byAddr.set(key, fn);
        continue;
      }
      // Prefer a real name over FUN_ / export_ synthetic names.
      if (isSyntheticName(existing.name) && !isSyntheticName(fn.name)) {
        byAddr.set(key, { ...fn, size: fn.size ?? existing.size });
      } else if (fn.size != null && existing.size == null) {
        byAddr.set(key, { ...existing, size: fn.size });
      }
    }
  }

  return Array.from(byAddr.values()).sort((a, b) =>
    a.addr < b.addr ? -1 : a.addr > b.addr ? 1 : 0,
  );
}

function isSyntheticName(name: string): boolean {
  return (
    name === "entry" ||
    name.startsWith("FUN_") ||
    name.startsWith("export_")
  );
}
