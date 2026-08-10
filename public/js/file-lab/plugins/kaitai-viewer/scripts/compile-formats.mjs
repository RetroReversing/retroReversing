import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

var require = createRequire(import.meta.url);
var compiler = require("kaitai-struct-compiler");

var root = join(dirname(fileURLToPath(import.meta.url)), "..");
var formatsDir = join(root, "formats");
var outDir = join(root, "src", "parsers");

mkdirSync(outDir, { recursive: true });

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

  throw new Error("Cannot find imported .ksy: " + name);
}

function createImporter() {
  return {
    importYaml: function (name) {
      var path = resolveImportPath(name);
      var text = readFileSync(path, "utf8");
      return Promise.resolve(parseYaml(text));
    }
  };
}

async function compileOne(ksyPath) {
  var text = readFileSync(ksyPath, "utf8");
  var ksy = parseYaml(text);
  var files = await compiler.compile("javascript", ksy, createImporter(), true);
  var names = Object.keys(files);

  for (var i = 0; i < names.length; i++) {
    var filename = names[i];
    if (!filename.endsWith(".js")) continue;
    writeFileSync(join(outDir, filename), files[filename], "utf8");
  }

  return names.filter(function (name) {
    return name.endsWith(".js");
  });
}

var ksyFiles = walkKsyFiles(formatsDir);
var compiled = [];

for (var j = 0; j < ksyFiles.length; j++) {
  var result = await compileOne(ksyFiles[j]);
  compiled = compiled.concat(result);
}

console.log("Compiled " + ksyFiles.length + " .ksy files -> " + compiled.length + " JavaScript modules in src/parsers/");
