import { KaitaiStream } from "kaitai-struct";
import { detectFormat, getFormatById } from "./format-registry.js";
import { buildParseTree } from "./parse-result-tree.js";
import { extractRegions } from "./extract-regions.js";
import { getFieldDoc } from "./format-docs.js";

export function parseBytes(bytes, formatId, options) {
  options = options || {};
  var format = getFormatById(formatId);
  if (!format) {
    throw new Error("Unknown format: " + formatId);
  }

  var parsed = new format.Parser(new KaitaiStream(bytes));
  if (typeof parsed._read === "function" && parsed._debug) {
    parsed._read();
  }

  if (options.expandTree !== false) {
    buildParseTree(parsed, options.maxDepth || 20);
  }

  return { format: format, parsed: parsed };
}

export function detectAndParse(bytes, filename, options) {
  var detected = detectFormat({ bytes: bytes, filename: filename });
  if (!detected) return null;
  return parseBytes(bytes, detected.id, options);
}

export function buildHighlightPayload(bytes, filename, formatId) {
  var resolvedFormatId = formatId;
  var parsedResult;

  if (resolvedFormatId) {
    parsedResult = parseBytes(bytes, resolvedFormatId);
  } else {
    var detected = detectFormat({ bytes: bytes, filename: filename });
    if (!detected) return null;
    resolvedFormatId = detected.id;
    parsedResult = parseBytes(bytes, resolvedFormatId);
  }

  var format = getFormatById(resolvedFormatId);
  var regions = extractRegions(parsedResult.parsed);

  for (var i = 0; i < regions.length; i++) {
    regions[i].id = i;
    regions[i].doc = getFieldDoc(resolvedFormatId, regions[i].path.split("."));
  }

  return {
    formatId: resolvedFormatId,
    formatTitle: format ? format.title : resolvedFormatId,
    regions: regions
  };
}
