// Minimal ELF parser. Extracts PT_LOAD segments, function symbols
// (SHT_SYMTAB / SHT_DYNSYM), and string ranges from .rodata.
//
// Not a general-purpose ELF library — does just enough to feed the
// decompiler. Doesn't apply relocations, parse DWARF, or distinguish
// shared object load bias (we read p_vaddr verbatim).

import type { ParsedBinary } from "../decompiler/types";
import { archFromElf } from "../decompiler/arch-map";
import { scanStrings } from "./index";

const ELFCLASS32 = 1;
const ELFCLASS64 = 2;
const ELFDATA2LSB = 1;
const ELFDATA2MSB = 2;
const PT_LOAD = 1;
const SHT_SYMTAB = 2;
const SHT_STRTAB = 3;
const SHT_DYNSYM = 11;
const STT_FUNC = 2;

export async function parseElf(bytes: Uint8Array): Promise<ParsedBinary> {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const ei_class = bytes[4];
  const ei_data = bytes[5];
  const osabi = bytes[7];
  if (ei_class !== ELFCLASS32 && ei_class !== ELFCLASS64) {
    throw new Error(`bad EI_CLASS=${ei_class}`);
  }
  const is64 = ei_class === ELFCLASS64;
  const le = ei_data === ELFDATA2LSB;
  if (ei_data !== ELFDATA2LSB && ei_data !== ELFDATA2MSB) {
    throw new Error(`bad EI_DATA=${ei_data}`);
  }

  // Header field offsets that differ between ELF32 and ELF64. Only
  // including the ones we actually read.
  const e_machine = dv.getUint16(0x12, le);
  const e_entry = is64 ? dv.getBigUint64(0x18, le) : BigInt(dv.getUint32(0x18, le));
  const e_phoff = is64 ? Number(dv.getBigUint64(0x20, le)) : dv.getUint32(0x1c, le);
  const e_shoff = is64 ? Number(dv.getBigUint64(0x28, le)) : dv.getUint32(0x20, le);
  const e_phentsize = dv.getUint16(is64 ? 0x36 : 0x2a, le);
  const e_phnum = dv.getUint16(is64 ? 0x38 : 0x2c, le);
  const e_shentsize = dv.getUint16(is64 ? 0x3a : 0x2e, le);
  const e_shnum = dv.getUint16(is64 ? 0x3c : 0x30, le);

  const archInfo = archFromElf(
    e_machine,
    ei_class as 1 | 2,
    ei_data as 1 | 2,
    osabi,
  );

  // --- Program headers → regions
  const regions: ParsedBinary["regions"] = [];
  const readonly: [bigint, bigint][] = [];
  for (let i = 0; i < e_phnum; i++) {
    const off = e_phoff + i * e_phentsize;
    const p_type = dv.getUint32(off, le);
    if (p_type !== PT_LOAD) continue;
    let p_offset: number;
    let p_vaddr: bigint;
    let p_filesz: number;
    let p_flags: number;
    if (is64) {
      p_flags = dv.getUint32(off + 4, le);
      p_offset = Number(dv.getBigUint64(off + 8, le));
      p_vaddr = dv.getBigUint64(off + 16, le);
      p_filesz = Number(dv.getBigUint64(off + 32, le));
    } else {
      p_offset = dv.getUint32(off + 4, le);
      p_vaddr = BigInt(dv.getUint32(off + 8, le));
      p_filesz = dv.getUint32(off + 16, le);
      p_flags = dv.getUint32(off + 24, le);
    }
    if (p_filesz === 0) continue;
    regions.push({
      vaddr: p_vaddr,
      bytes: bytes.subarray(p_offset, p_offset + p_filesz),
    });
    // PF_W = 2; absent → readonly. Mark for the decompiler so loads
    // can promote to const.
    if ((p_flags & 2) === 0) {
      readonly.push([p_vaddr, BigInt(p_filesz)]);
    }
  }

  // --- Section headers: find .symtab / .dynsym for function symbols
  const symbols: [bigint, string][] = [];
  const functions: ParsedBinary["functions"] = [];
  // Each section's link points to its associated string table; we
  // only need that to interpret st_name. Build a small lookup of
  // every section's offset/size/link/type.
  type Sec = {
    type: number;
    offset: number;
    size: number;
    link: number;
    entsize: number;
  };
  const secs: Sec[] = [];
  for (let i = 0; i < e_shnum; i++) {
    const off = e_shoff + i * e_shentsize;
    const sh_type = dv.getUint32(off + 4, le);
    if (is64) {
      secs.push({
        type: sh_type,
        offset: Number(dv.getBigUint64(off + 24, le)),
        size: Number(dv.getBigUint64(off + 32, le)),
        link: dv.getUint32(off + 40, le),
        entsize: Number(dv.getBigUint64(off + 56, le)),
      });
    } else {
      secs.push({
        type: sh_type,
        offset: dv.getUint32(off + 16, le),
        size: dv.getUint32(off + 20, le),
        link: dv.getUint32(off + 24, le),
        entsize: dv.getUint32(off + 36, le),
      });
    }
  }
  for (const sec of secs) {
    if (sec.type !== SHT_SYMTAB && sec.type !== SHT_DYNSYM) continue;
    const strtab = secs[sec.link];
    if (!strtab || strtab.type !== SHT_STRTAB) continue;
    const entsize = sec.entsize || (is64 ? 24 : 16);
    const count = Math.floor(sec.size / entsize);
    for (let i = 0; i < count; i++) {
      const eo = sec.offset + i * entsize;
      const st_name = dv.getUint32(eo, le);
      let st_info: number;
      let st_value: bigint;
      let st_size: number;
      if (is64) {
        st_info = dv.getUint8(eo + 4);
        st_value = dv.getBigUint64(eo + 8, le);
        st_size = Number(dv.getBigUint64(eo + 16, le));
      } else {
        st_value = BigInt(dv.getUint32(eo + 4, le));
        st_size = dv.getUint32(eo + 8, le);
        st_info = dv.getUint8(eo + 12);
      }
      const stt = st_info & 0xf;
      if (stt !== STT_FUNC) continue;
      if (st_value === 0n) continue; // skip imports / undefined
      // Read NUL-terminated name out of the string table.
      let end = strtab.offset + st_name;
      while (end < strtab.offset + strtab.size && bytes[end] !== 0) end++;
      const name = new TextDecoder("utf-8", { fatal: false }).decode(
        bytes.subarray(strtab.offset + st_name, end),
      );
      if (!name) continue;
      symbols.push([st_value, name]);
      functions.push({ addr: st_value, name, size: st_size });
    }
  }

  // --- Strings: scan every readonly region. Cheaper than walking
  // section headers for .rodata; covers .rodata.str variants too.
  const strings: [bigint, number][] = [];
  for (const region of regions) {
    const isRO = readonly.some(([a, s]) => a === region.vaddr && s === BigInt(region.bytes.length));
    if (!isRO) continue;
    strings.push(...scanStrings(region.vaddr, region.bytes));
  }

  // De-dup function entries by address (symtab + dynsym overlap).
  const seen = new Set<string>();
  const uniqFunctions = functions.filter((f) => {
    const k = f.addr.toString();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  // Stripped binary fallback: surface e_entry (typically _start) so
  // the user has somewhere to click when no symbols survive.
  if (e_entry !== 0n && !uniqFunctions.some((f) => f.addr === e_entry)) {
    uniqFunctions.push({ addr: e_entry, name: "entry" });
  }

  return {
    format: "elf",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions,
    symbols,
    strings,
    readonly,
    entryPoint: e_entry,
    functions: uniqFunctions.sort((a, b) =>
      a.addr < b.addr ? -1 : a.addr > b.addr ? 1 : 0,
    ),
  };
}
