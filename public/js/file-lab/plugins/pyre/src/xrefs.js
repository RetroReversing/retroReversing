import { iterCallsites, resolveCall } from "./decompiler/resolve-call.js";

/**
 * @typedef {{ name: string, addr: bigint }} XrefTarget
 */

/**
 * Extract unique resolved callees from decompiled pseudo-C.
 * @param {string} code
 * @param {Map<string, bigint>} nameToAddr
 * @param {{ peImageBase?: bigint } | null | undefined} [resolveOpts]
 * @returns {XrefTarget[]}
 */
export function extractCallees(code, nameToAddr, resolveOpts) {
  var seen = new Set();
  var out = [];
  var source = code || "";

  for (var name of iterCallsites(source)) {
    if (seen.has(name)) continue;
    seen.add(name);
    var addr = resolveCall(name, nameToAddr, resolveOpts);
    if (addr == null) continue;
    out.push({ name: name, addr: addr });
  }

  out.sort(function (a, b) {
    if (a.addr < b.addr) return -1;
    if (a.addr > b.addr) return 1;
    return a.name.localeCompare(b.name);
  });
  return out;
}

function addrKey(addr) {
  return typeof addr === "bigint" ? addr.toString() : String(addr);
}

/**
 * Lazy reverse index: callee address → callers discovered during decompilation.
 * @returns {{
 *   addFromDecompile: (
 *     callerAddr: bigint | number,
 *     callerName: string,
 *     code: string,
 *     nameToAddr: Map<string, bigint>,
 *     resolveOpts?: { peImageBase?: bigint } | null
 *   ) => void,
 *   getCallers: (targetAddr: bigint | number) => XrefTarget[],
 *   clear: () => void
 * }}
 */
export function createCallersIndex() {
  /** @type {Map<string, XrefTarget[]>} */
  var byTarget = new Map();

  return {
    addFromDecompile: function (callerAddr, callerName, code, nameToAddr, resolveOpts) {
      var caller = {
        name: callerName || "",
        addr: typeof callerAddr === "bigint" ? callerAddr : BigInt(callerAddr >>> 0)
      };
      var callees = extractCallees(code, nameToAddr, resolveOpts);
      for (var i = 0; i < callees.length; i++) {
        var key = addrKey(callees[i].addr);
        var list = byTarget.get(key);
        if (!list) {
          list = [];
          byTarget.set(key, list);
        }
        var exists = false;
        for (var j = 0; j < list.length; j++) {
          if (list[j].addr === caller.addr) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          list.push(caller);
        }
      }
    },

    getCallers: function (targetAddr) {
      var list = byTarget.get(addrKey(targetAddr));
      if (!list || !list.length) return [];
      return list.slice().sort(function (a, b) {
        if (a.addr < b.addr) return -1;
        if (a.addr > b.addr) return 1;
        return a.name.localeCompare(b.name);
      });
    },

    clear: function () {
      byTarget.clear();
    }
  };
}
