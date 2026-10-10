// Minimal Mach-O parser. Handles 64-bit thin binaries today; 32-bit
// and fat archives can come later. Each LC_SEGMENT_64 becomes a
// region at its own vmaddr — the WebLoadImage's multi-region design
// is what makes this work for layouts like __PAGEZERO + __TEXT +
// __DATA at non-contiguous addresses.

import type { ParsedBinary } from "../decompiler/types";
import { archFromMacho } from "../decompiler/arch-map";
import { scanStrings } from "./index";

const MH_MAGIC_64 = 0xfeedfacf;
const MH_CIGAM_64 = 0xcffaedfe;
const FAT_MAGIC = 0xcafebabe;
const FAT_CIGAM = 0xbebafeca;
const FAT_MAGIC_64 = 0xcafebabf;
const FAT_CIGAM_64 = 0xbfbafeca;
const LC_SEGMENT_64 = 0x19;
const LC_SYMTAB = 0x02;
const LC_FUNCTION_STARTS = 0x26;

// Fat/universal arch picker. Apple Silicon machines decompile arm64
// most usefully; otherwise prefer x86_64. Fall through to whatever's
// in the binary — but never pick PowerPC over an arm64 alternative.
const SLICE_PREFERENCE = [
  0x100000c, // CPU_TYPE_ARM64
  0x200000c, // CPU_TYPE_ARM64_32
  0x1000007, // CPU_TYPE_X86_64
  0x7,       // CPU_TYPE_X86
  0xc,       // CPU_TYPE_ARM
];

function pickBestSlice(
  archs: { cputype: number; offset: number; size: number }[],
): { cputype: number; offset: number; size: number } {
  for (const want of SLICE_PREFERENCE) {
    const hit = archs.find((a) => a.cputype === want);
    if (hit) return hit;
  }
  return archs[0];
}

export async function parseMacho(bytes: Uint8Array): Promise<ParsedBinary> {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const magic = dv.getUint32(0, true);

  // ---- Fat/universal: read big-endian header, pick a slice, recurse.
  if (
    magic === FAT_MAGIC ||
    magic === FAT_CIGAM ||
    magic === FAT_MAGIC_64 ||
    magic === FAT_CIGAM_64
  ) {
    // All fat fields are big-endian on disk regardless of slice
    // endianness. The CIGAM variants would only happen on a host
    // reading a fat header written on the opposite endian — vanishingly
    // rare, but cheap to handle.
    const isFat64 = magic === FAT_MAGIC_64 || magic === FAT_CIGAM_64;
    const nfat = dv.getUint32(4, false);
    // Sanity gate: 0xCAFEBABE is also Java .class magic. A real fat
    // Mach-O with > ~64 archs is implausible; bail out so we don't
    // try to parse a class file as universal Mach-O.
    if (nfat === 0 || nfat > 64) {
      throw new Error(
        "looks like 0xCAFEBABE but not a Mach-O fat header (Java .class?)",
      );
    }
    const archs: { cputype: number; offset: number; size: number }[] = [];
    let p = 8;
    for (let i = 0; i < nfat; i++) {
      const cputype = dv.getInt32(p, false);
      // skip cpusubtype at p+4
      const offset = isFat64
        ? Number(dv.getBigUint64(p + 8, false))
        : dv.getUint32(p + 8, false);
      const size = isFat64
        ? Number(dv.getBigUint64(p + 16, false))
        : dv.getUint32(p + 12, false);
      archs.push({ cputype, offset, size });
      p += isFat64 ? 32 : 20;
    }
    const slice = pickBestSlice(archs);
    if (slice.offset + slice.size > bytes.length) {
      throw new Error(
        `fat slice offset+size (${slice.offset}+${slice.size}) exceeds file (${bytes.length})`,
      );
    }
    // subarray rather than slice — no copy. The recursive parseMacho
    // call will see thin-Mach-O magic at offset 0 of the view.
    return parseMacho(
      bytes.subarray(slice.offset, slice.offset + slice.size),
    );
  }

  let le: boolean;
  if (magic === MH_MAGIC_64) le = true;
  else if (magic === MH_CIGAM_64) le = false;
  else throw new Error("only 64-bit Mach-O thin binaries supported in v1");

  const cputype = dv.getInt32(4, le);
  const ncmds = dv.getUint32(16, le);
  const sizeofcmds = dv.getUint32(20, le);

  const headerSize = 32; // mach_header_64
  // Heuristic: ARM64 cputype with platform load command would be
  // cleaner, but reading LC_BUILD_VERSION just for that is overkill.
  // Anything with cputype == ARM64 that isn't MH_OBJECT is treated as
  // Apple platform — same heuristic Ghidra's importer uses.
  const archInfo = archFromMacho(cputype, true);

  const regions: ParsedBinary["regions"] = [];
  const readonly: [bigint, bigint][] = [];
  const functions: ParsedBinary["functions"] = [];
  const symbols: [bigint, string][] = [];

  let baseTextVMA: bigint | null = null;
  let cmdOff = headerSize;
  const cmdEnd = cmdOff + sizeofcmds;

  for (let i = 0; i < ncmds && cmdOff < cmdEnd; i++) {
    const cmd = dv.getUint32(cmdOff, le);
    const cmdsize = dv.getUint32(cmdOff + 4, le);

    if (cmd === LC_SEGMENT_64) {
      const segname = readNul(bytes, cmdOff + 8, 16);
      const vmaddr = dv.getBigUint64(cmdOff + 24, le);
      const vmsize = dv.getBigUint64(cmdOff + 32, le);
      const fileoff = Number(dv.getBigUint64(cmdOff + 40, le));
      const filesize = Number(dv.getBigUint64(cmdOff + 48, le));
      const initprot = dv.getUint32(cmdOff + 56, le);

      // __PAGEZERO has filesize=0 and is just a no-access guard at 0;
      // skip it so we don't add a phantom region at 0.
      if (filesize > 0) {
        regions.push({ vaddr: vmaddr, bytes: bytes.subarray(fileoff, fileoff + filesize) });
        // VM_PROT_WRITE = 2
        if ((initprot & 2) === 0) readonly.push([vmaddr, vmsize]);
      }
      if (segname === "__TEXT" && baseTextVMA == null) baseTextVMA = vmaddr;
    } else if (cmd === LC_SYMTAB) {
      const symoff = dv.getUint32(cmdOff + 8, le);
      const nsyms = dv.getUint32(cmdOff + 12, le);
      const stroff = dv.getUint32(cmdOff + 16, le);
      const strsize = dv.getUint32(cmdOff + 20, le);
      // nlist_64: { n_strx:u32, n_type:u8, n_sect:u8, n_desc:u16, n_value:u64 } = 16 bytes
      for (let s = 0; s < nsyms; s++) {
        const off = symoff + s * 16;
        const n_strx = dv.getUint32(off, le);
        const n_type = dv.getUint8(off + 4);
        const n_value = dv.getBigUint64(off + 8, le);
        // N_TYPE mask = 0x0e; N_SECT = 0x0e (fully resolved local/global symbol)
        if ((n_type & 0x0e) !== 0x0e) continue;
        if (n_value === 0n) continue;
        const nameEnd = Math.min(stroff + strsize, findNul(bytes, stroff + n_strx));
        let name = new TextDecoder().decode(bytes.subarray(stroff + n_strx, nameEnd));
        // Strip Mach-O's leading underscore (_main → main) so xrefs
        // and the libc prototype matcher line up with the C-level name.
        if (name.startsWith("_")) name = name.slice(1);
        if (!name) continue;
        symbols.push([n_value, name]);
        functions.push({ addr: n_value, name });
      }
    } else if (cmd === LC_FUNCTION_STARTS) {
      // ULEB128-delta list relative to __TEXT base. Surface even
      // anonymous starts so the function list isn't empty when symbols
      // were stripped.
      const dataoff = dv.getUint32(cmdOff + 8, le);
      const datasize = dv.getUint32(cmdOff + 12, le);
      const base = baseTextVMA ?? 0n;
      let cur = base;
      let p = dataoff;
      const end = dataoff + datasize;
      while (p < end) {
        let result = 0n;
        let shift = 0n;
        let b: number;
        do {
          b = bytes[p++];
          result |= BigInt(b & 0x7f) << shift;
          shift += 7n;
        } while (b & 0x80 && p < end);
        if (result === 0n) break;
        cur += result;
        if (!functions.find((f) => f.addr === cur))
          functions.push({ addr: cur, name: `FUN_${cur.toString(16)}` });
      }
    }

    cmdOff += cmdsize;
  }

  // Scan readonly regions for strings.
  const strings: [bigint, number][] = [];
  for (const region of regions) {
    const isRO = readonly.some(
      ([a]) => a === region.vaddr,
    );
    if (!isRO) continue;
    strings.push(...scanStrings(region.vaddr, region.bytes));
  }

  // Sort + dedupe by address.
  const seen = new Set<string>();
  const uniqFunctions = functions
    .filter((f) => {
      const k = f.addr.toString();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .sort((a, b) => (a.addr < b.addr ? -1 : a.addr > b.addr ? 1 : 0));

  return {
    format: "macho",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions,
    symbols,
    strings,
    readonly,
    entryPoint: baseTextVMA ?? undefined,
    functions: uniqFunctions,
  };
}

function readNul(bytes: Uint8Array, off: number, max: number): string {
  let end = off;
  const stop = Math.min(off + max, bytes.length);
  while (end < stop && bytes[end] !== 0) end++;
  return new TextDecoder().decode(bytes.subarray(off, end));
}

function findNul(bytes: Uint8Array, off: number): number {
  let i = off;
  while (i < bytes.length && bytes[i] !== 0) i++;
  return i;
}
