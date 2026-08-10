/**
 * Resolve a Ghidra-emitted callsite identifier to a function address.
 * Ported from pyre/web/src/decompiler/resolveCall.ts
 */

/**
 * @param {string} id
 * @param {Map<string, bigint>} nameToAddr
 * @param {{ peImageBase?: bigint } | null | undefined} [resolveOpts]
 * @returns {bigint | null}
 */
export function resolveCall(id, nameToAddr, resolveOpts) {
  var fromMap = nameToAddr.get(id);
  if (fromMap != null) return fromMap;

  // func_0x names carry a full virtual address from Ghidra.
  var m = /^func_0x([0-9a-fA-F]+)$/.exec(id);
  if (m) return BigInt("0x" + m[1]);

  // Bare FUN_<hex> fallback: on PE the hex is an RVA (add image base).
  m = /^FUN_([0-9a-fA-F]+)$/.exec(id);
  if (m) {
    var n = BigInt("0x" + m[1]);
    if (resolveOpts && resolveOpts.peImageBase != null) {
      return resolveOpts.peImageBase + n;
    }
    return n;
  }

  return null;
}

/**
 * @param {string} text
 * @returns {Generator<string>}
 */
export function* iterCallsites(text) {
  var re = /\b([A-Za-z_][A-Za-z0-9_]*)\b(?=\s*\()/g;
  var m;
  while ((m = re.exec(text)) !== null) {
    yield m[1];
  }
}

/**
 * @param {Array<{ addr: bigint, name: string }>} functions
 * @returns {Map<string, bigint>}
 */
export function buildNameToAddr(functions) {
  var map = new Map();
  if (!functions) return map;
  for (var i = 0; i < functions.length; i++) {
    var f = functions[i];
    var raw = f.addr != null ? f.addr : f.offset;
    var addr = typeof raw === "bigint" ? raw : BigInt(raw >>> 0);
    map.set(f.name, addr);
  }
  return map;
}

/**
 * Build a callsite name → address map from a parsed binary (functions + symbols).
 * @param {import("./types.ts").ParsedBinary | null | undefined} binary
 * @returns {Map<string, bigint>}
 */
export function buildNameToAddrFromBinary(binary) {
  var map = buildNameToAddr(binary && binary.functions);
  if (!binary || !binary.symbols) return map;
  for (var i = 0; i < binary.symbols.length; i++) {
    var addr = binary.symbols[i][0];
    var name = binary.symbols[i][1];
    if (!name) continue;
    map.set(name, typeof addr === "bigint" ? addr : BigInt(addr));
  }
  return map;
}

/**
 * @param {import("./types.ts").ParsedBinary | null | undefined} binary
 * @returns {{ peImageBase?: bigint }}
 */
export function resolveOptsFromBinary(binary) {
  if (!binary || binary.format !== "pe" || binary.imageBase == null) return {};
  var base = binary.imageBase;
  return {
    peImageBase: typeof base === "bigint" ? base : BigInt(base)
  };
}
