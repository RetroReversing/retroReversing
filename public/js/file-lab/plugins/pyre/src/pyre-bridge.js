import { DecompilerClient } from "./decompiler/client.ts";
import { detectFormat, parseBinary } from "./parsers/index.ts";
import { PYRE_SPECS_BASE, PYRE_MANIFEST_URL } from "./constants.js";
import { buildNameToAddr, buildNameToAddrFromBinary, resolveOptsFromBinary } from "./decompiler/resolve-call.js";
import { renderDecompileHtml } from "./render-decompile.js";
import { extractCallees, createCallersIndex } from "./xrefs.js";

export {
  buildNameToAddr,
  buildNameToAddrFromBinary,
  resolveOptsFromBinary,
  renderDecompileHtml,
  extractCallees,
  createCallersIndex
};

/**
 * @param {Uint8Array} bytes
 * @returns {boolean}
 */
export function canParseBinary(bytes) {
  return detectFormat(bytes) !== null;
}

/**
 * @param {Uint8Array} bytes
 * @param {string} workerUrl
 * @returns {Promise<{
 *   binary: import("./decompiler/types.ts").ParsedBinary,
 *   client: DecompilerClient,
 *   session: import("./decompiler/client.ts").DecompilerSession,
 *   close: () => Promise<void>
 * }>}
 */
export async function createPyreSession(bytes, workerUrl) {
  var binary = await parseBinary(bytes);
  var client = new DecompilerClient(workerUrl);
  await client.init({
    specBaseUrl: PYRE_SPECS_BASE,
    manifestUrl: PYRE_MANIFEST_URL,
    arch: binary.arch
  });
  var session = await client.open({
    languageId: binary.languageId,
    regions: binary.regions,
    symbols: binary.symbols,
    readonly: binary.readonly,
    strings: binary.strings
  });

  return {
    binary: binary,
    client: client,
    session: session,
    close: async function () {
      await session.close().catch(function () {});
      client.terminate();
    }
  };
}

/**
 * @param {import("./decompiler/client.ts").DecompilerSession} session
 * @param {number | bigint} offset
 * @param {string} [name]
 * @returns {Promise<string>}
 */
export async function decompileFunction(session, offset, name) {
  var addr = typeof offset === "bigint" ? offset : BigInt(offset >>> 0);
  return session.decompile(addr, name || undefined);
}
