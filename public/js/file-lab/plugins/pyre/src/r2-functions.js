/**
 * Convert radare2 function entries from shared plugin state into Pyre's
 * { addr, name, size? } shape.
 *
 * @param {unknown} r2State
 * @returns {Array<{ addr: bigint, name: string, size?: number }> | null}
 */
export function pyreFunctionsFromR2State(r2State) {
  if (!r2State || typeof r2State !== "object") return null;
  var list = r2State.functions;
  if (!Array.isArray(list) || !list.length) return null;

  var out = [];
  var seen = new Set();

  for (var i = 0; i < list.length; i++) {
    var entry = list[i];
    if (!entry || typeof entry !== "object") continue;
    var offset = entry.offset != null ? entry.offset : entry.addr;
    var offsetNum = Number(offset);
    if (!Number.isFinite(offsetNum)) continue;

    var addr = BigInt(offsetNum >>> 0);
    var key = addr.toString();
    if (seen.has(key)) continue;
    seen.add(key);

    var name = entry.name != null ? String(entry.name) : "unknown";
    var size = Number(entry.size);
    out.push({
      addr: addr,
      name: name,
      size: Number.isFinite(size) && size > 0 ? size : undefined
    });
  }

  if (!out.length) return null;

  out.sort(function (a, b) {
    if (a.addr < b.addr) return -1;
    if (a.addr > b.addr) return 1;
    return 0;
  });

  return out;
}
