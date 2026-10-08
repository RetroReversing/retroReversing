import { resolveCall } from "./decompiler/resolve-call.js";

function formatAddr(addr) {
  return "0x" + addr.toString(16).toUpperCase();
}

function escape(text, host) {
  if (host && host.api && typeof host.api.escapeHtml === "function") {
    return host.api.escapeHtml(text);
  }
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Turn decompiled pseudo-C into HTML with clickable call-site buttons.
 * @param {string} code
 * @param {Map<string, bigint>} nameToAddr
 * @param {object | null} host
 * @param {{ peImageBase?: bigint } | null | undefined} [resolveOpts]
 * @returns {string}
 */
export function renderDecompileHtml(code, nameToAddr, host, resolveOpts) {
  if (!code) return "";

  var re = /\b([A-Za-z_][A-Za-z0-9_]*)\b(?=\s*\()/g;
  var out = "";
  var lastIndex = 0;
  var m;

  while ((m = re.exec(code)) !== null) {
    var id = m[1];
    var addr = resolveCall(id, nameToAddr, resolveOpts);
    out += escape(code.slice(lastIndex, m.index), host);
    if (addr != null) {
      out +=
        '<button type="button" class="pyre-call-site" data-addr="' +
        escape(addr.toString(), host) +
        '" title="Open ' +
        escape(id, host) +
        " (" +
        escape(formatAddr(addr), host) +
        ') — click or Cmd+click">' +
        escape(id, host) +
        "</button>";
    } else {
      out += escape(id, host);
    }
    lastIndex = m.index + id.length;
  }

  out += escape(code.slice(lastIndex), host);
  return out;
}
