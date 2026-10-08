// Minimal WebAssembly parser. Walks the section list, picks out
// function names from the optional `name` custom section, and emits
// one region containing the entire `code` section so the decompiler's
// Wasm SLEIGH spec sees a continuous code stream.
//
// Quirk worth flagging: the wasm SLEIGH spec treats addresses as
// offsets into the code section, not the file. We expose code-section
// offsets directly as virtual addresses — the decompiler's
// "entrypoint" semantics fall out of that mapping.

import type { ParsedBinary } from "../decompiler/types";
import { archForWasm } from "../decompiler/arch-map";

export async function parseWasm(bytes: Uint8Array): Promise<ParsedBinary> {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (
    bytes[0] !== 0x00 ||
    bytes[1] !== 0x61 ||
    bytes[2] !== 0x73 ||
    bytes[3] !== 0x6d
  ) {
    throw new Error("bad wasm magic");
  }

  const archInfo = archForWasm();

  let p = 8; // skip magic + version
  const sections: { id: number; off: number; size: number }[] = [];
  while (p < bytes.length) {
    const id = bytes[p++];
    const [size, after] = readUleb(bytes, p);
    p = after;
    sections.push({ id, off: p, size: Number(size) });
    p += Number(size);
  }

  let codeRegion: { vaddr: bigint; bytes: Uint8Array } | null = null;
  const functions: ParsedBinary["functions"] = [];
  const symbols: [bigint, string][] = [];

  for (const s of sections) {
    if (s.id === 10) {
      // Code section: surface as a single region starting at vaddr 0.
      codeRegion = {
        vaddr: 0n,
        bytes: bytes.subarray(s.off, s.off + s.size),
      };
      // Each function body is preceded by its body size as ULEB128;
      // walk the section to pull starts.
      let q = s.off;
      const [count, qAfterCount] = readUleb(bytes, q);
      q = qAfterCount;
      for (let i = 0n; i < count; i++) {
        const [bodySize, after] = readUleb(bytes, q);
        const startVa = BigInt(q - s.off);
        functions.push({
          addr: startVa,
          name: `func_${i}`,
          size: Number(bodySize),
        });
        q = after + Number(bodySize);
      }
    } else if (s.id === 0) {
      // Custom section. Look for "name" subsection (per the wasm
      // name-section spec) — gives us human function names instead of
      // func_0, func_1, ...
      let q = s.off;
      const [nameLen, qAfter] = readUleb(bytes, q);
      q = qAfter;
      const sectionName = new TextDecoder().decode(
        bytes.subarray(q, q + Number(nameLen)),
      );
      q += Number(nameLen);
      if (sectionName !== "name") continue;
      const end = s.off + s.size;
      while (q < end) {
        const subId = bytes[q++];
        const [subSize, qS] = readUleb(bytes, q);
        q = qS;
        const subEnd = q + Number(subSize);
        if (subId === 1) {
          // function name subsection
          const [fnCount, qC] = readUleb(bytes, q);
          q = qC;
          for (let i = 0n; i < fnCount; i++) {
            const [idx, qI] = readUleb(bytes, q);
            q = qI;
            const [nLen, qN] = readUleb(bytes, q);
            q = qN;
            const nm = new TextDecoder().decode(
              bytes.subarray(q, q + Number(nLen)),
            );
            q += Number(nLen);
            const fIdx = Number(idx);
            if (fIdx < functions.length) {
              functions[fIdx].name = nm;
              symbols.push([functions[fIdx].addr, nm]);
            }
          }
        } else {
          q = subEnd;
        }
      }
    }
  }

  if (!codeRegion) throw new Error("wasm has no code section");

  return {
    format: "wasm",
    arch: archInfo.arch,
    languageId: archInfo.languageId,
    regions: [codeRegion],
    symbols,
    strings: [], // wasm strings live in data section; not surfaced in v1
    readonly: [[codeRegion.vaddr, BigInt(codeRegion.bytes.length)]],
    entryPoint: undefined,
    functions: functions.sort((a, b) =>
      a.addr < b.addr ? -1 : a.addr > b.addr ? 1 : 0,
    ),
  };

  // Hint: dv unused for wasm parsing — reading single bytes is enough,
  // and ULEB128 decoding is byte-oriented. Kept the import in case we
  // later read globals/memory section values.
  void dv;
}

function readUleb(bytes: Uint8Array, off: number): [bigint, number] {
  let result = 0n;
  let shift = 0n;
  let p = off;
  let b: number;
  do {
    b = bytes[p++];
    result |= BigInt(b & 0x7f) << shift;
    shift += 7n;
  } while (b & 0x80);
  return [result, p];
}
