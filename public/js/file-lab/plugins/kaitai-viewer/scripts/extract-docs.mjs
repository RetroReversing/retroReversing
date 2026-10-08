import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

var root = join(dirname(fileURLToPath(import.meta.url)), "..");
var formatsDir = join(root, "formats");
var outFile = join(root, "src", "generated", "format-docs.json");

mkdirSync(dirname(outFile), { recursive: true });

function walkKsyFiles(dir, results) {
  results = results || [];
  for (var entry of readdirSync(dir)) {
    var path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walkKsyFiles(path, results);
    } else if (entry.endsWith(".ksy")) {
      results.push(path);
    }
  }
  return results;
}

function resolveImportPath(name) {
  var normalized = String(name).replace(/^\//, "");
  var leaf = basename(normalized);
  var candidates = [
    join(formatsDir, normalized + ".ksy"),
    join(formatsDir, leaf + ".ksy"),
    join(formatsDir, "executable", leaf + ".ksy"),
    join(formatsDir, "common", leaf + ".ksy"),
    join(formatsDir, "serialization", "asn1", leaf + ".ksy")
  ];

  for (var i = 0; i < candidates.length; i++) {
    if (existsSync(candidates[i])) return candidates[i];
  }

  return null;
}

function toCamelCase(id) {
  return String(id).replace(/_([a-z0-9])/g, function (_, c) {
    return c.toUpperCase();
  });
}

function normalizeDoc(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  if (Array.isArray(value)) return value.map(normalizeDoc).filter(Boolean).join(" ");
  return String(value).trim();
}

function normalizeDocRef(value) {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) return value.map(normalizeDocRef).filter(Boolean).join("; ");
  return String(value).trim();
}

function resolveTypeName(typeValue) {
  if (!typeValue || typeof typeValue !== "string") return null;
  var base = typeValue.split("(")[0].trim();
  if (!base || base === "str" || base === "u1" || base === "u2" || base === "u4" || base === "u8") return null;
  if (base === "s1" || base === "s2" || base === "s4" || base === "s8") return null;
  if (base.indexOf("/") !== -1) return basename(base);
  return base;
}

function loadKsyWithImports(path, cache, stack) {
  if (cache.has(path)) return cache.get(path);
  if (stack.has(path)) return cache.get(path) || { meta: {}, types: {}, seq: [], instances: {} };

  stack.add(path);
  var ksy = parseYaml(readFileSync(path, "utf8"));
  var merged = {
    meta: ksy.meta || {},
    types: Object.assign({}, ksy.types || {}),
    seq: ksy.seq || [],
    instances: ksy.instances || {}
  };

  var imports = (ksy.meta && ksy.meta.imports) || [];
  for (var i = 0; i < imports.length; i++) {
    var importPath = resolveImportPath(imports[i]);
    if (!importPath) continue;
    var imported = loadKsyWithImports(importPath, cache, stack);
    merged.types = Object.assign({}, imported.types, merged.types);
  }

  stack.delete(path);
  cache.set(path, merged);
  return merged;
}

function pickDoc(entry) {
  var doc = normalizeDoc(entry.doc);
  if (doc) return doc;
  return normalizeDocRef(entry["doc-ref"]);
}

function walkType(typeDef, prefix, docs, types) {
  if (!typeDef) return;

  var typeDoc = pickDoc(typeDef);
  if (typeDoc && prefix) docs[prefix] = typeDoc;

  walkSeq(typeDef.seq, prefix, docs, types);
  walkInstances(typeDef.instances, prefix, docs, types);
}

function walkSeq(seq, prefix, docs, types) {
  if (!Array.isArray(seq)) return;

  for (var i = 0; i < seq.length; i++) {
    var item = seq[i];
    if (!item || !item.id) continue;

    var fieldName = toCamelCase(item.id);
    var path = prefix ? prefix + "." + fieldName : fieldName;
    var doc = pickDoc(item);
    if (doc) docs[path] = doc;

    var typeName = resolveTypeName(item.type);
    if (typeName && types[typeName]) {
      walkType(types[typeName], path, docs, types);
    }
  }
}

function walkInstances(instances, prefix, docs, types) {
  if (!instances || typeof instances !== "object") return;

  Object.keys(instances).forEach(function (id) {
    var inst = instances[id];
    var fieldName = toCamelCase(id);
    var path = prefix ? prefix + "." + fieldName : fieldName;
    var doc = pickDoc(inst);
    if (doc) docs[path] = doc;

    var typeName = resolveTypeName(inst.type);
    if (typeName && types[typeName]) {
      walkType(types[typeName], path, docs, types);
    }
  });
}

function extractDocsFromKsy(ksyPath) {
  var cache = new Map();
  var ksy = loadKsyWithImports(ksyPath, cache, new Set());
  var formatId = ksy.meta && ksy.meta.id;
  if (!formatId) return null;

  var docs = {};
  var types = ksy.types || {};

  walkSeq(ksy.seq, "", docs, types);
  walkInstances(ksy.instances, "", docs, types);

  Object.keys(types).forEach(function (typeName) {
    // Type-level docs for paths reached only via typing are handled via walkType from parents.
  });

  return { id: formatId, docs: docs };
}

var rootFormats = [
  "formats/gif.ksy",
  "formats/bmp.ksy",
  "formats/wav.ksy",
  "formats/executable/elf.ksy",
  "formats/executable/microsoft_pe.ksy",
  "formats/executable/mach_o.ksy",
  "formats/executable/mach_o_fat.ksy",
  "formats/executable/dos_mz.ksy",
  "formats/executable/dex.ksy",
  "formats/executable/java_class.ksy",
  "formats/executable/uefi_te.ksy",
  "formats/executable/swf.ksy",
  "formats/executable/python_pyc_27.ksy",
  "formats/executable/android_nanoapp_header.ksy"
];

var output = {};

for (var j = 0; j < rootFormats.length; j++) {
  var ksyPath = join(root, rootFormats[j]);
  if (!existsSync(ksyPath)) continue;
  var result = extractDocsFromKsy(ksyPath);
  if (result) output[result.id] = result.docs;
}

writeFileSync(outFile, JSON.stringify(output, null, 2), "utf8");

var total = Object.values(output).reduce(function (sum, docs) {
  return sum + Object.keys(docs).length;
}, 0);

console.log("Extracted " + total + " doc strings for " + Object.keys(output).length + " formats -> src/generated/format-docs.json");
