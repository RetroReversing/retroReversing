import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { basename, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

var root = join(dirname(fileURLToPath(import.meta.url)), "..");
var umdDir = join(root, "src", "parsers");
var esmDir = join(root, "src", "parsers-esm");

mkdirSync(esmDir, { recursive: true });

function extractUmdImports(source) {
  var defineMatch = source.match(/define\(\[([^\]]+)\]/);
  if (!defineMatch) return [];

  var parts = defineMatch[1].split(",").map(function (part) {
    return part.trim().replace(/^['"]|['"]$/g, "");
  });

  var modules = parts.filter(function (part) {
    return part.indexOf("./") === 0;
  }).map(function (part) {
    return part.slice(2);
  });

  var factoryMatch = source.match(/function \((\w+), KaitaiStream((?:, \w+)*)\)/);
  var params = factoryMatch && factoryMatch[2] ? factoryMatch[2].match(/\w+/g) || [] : [];

  return modules.map(function (file, index) {
    return { file: file, param: params[index] || file + "_" };
  });
}

function convertUmdToEsm(source, className) {
  var bodyMatch = source.match(
    new RegExp(
      "var " + className + " = \\(function\\(\\) \\{([\\s\\S]+?)\\n  return " + className + ";\\n\\}\\)\\(\\);"
    )
  );
  if (!bodyMatch) {
    throw new Error("Could not extract " + className + " body");
  }

  var imports = extractUmdImports(source);
  var lines = [
    "import KaitaiStream from \"kaitai-struct/KaitaiStream.js\";"
  ];

  for (var i = 0; i < imports.length; i++) {
    var imp = imports[i];
    lines.push("import " + imp.file + "Root from \"./" + imp.file + ".js\";");
    lines.push("var " + imp.param + " = { " + imp.file + ": " + imp.file + "Root };");
  }

  lines.push("");
  lines.push("var " + className + " = (function() {" + bodyMatch[1] + "\n  return " + className + ";\n})();");
  lines.push("");
  lines.push("export default " + className + ";");
  lines.push("export { " + className + " };");

  return lines.join("\n");
}

var parserFiles = readdirSync(umdDir).filter(function (name) {
  return name.endsWith(".js");
});

for (var j = 0; j < parserFiles.length; j++) {
  var file = parserFiles[j];
  var className = basename(file, ".js");
  var source = readFileSync(join(umdDir, file), "utf8");
  var esm = convertUmdToEsm(source, className);
  writeFileSync(join(esmDir, file), esm, "utf8");
}

console.log("Converted " + parserFiles.length + " Kaitai parsers to ES modules in src/parsers-esm/");
