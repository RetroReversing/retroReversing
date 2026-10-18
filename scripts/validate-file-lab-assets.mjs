import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../", import.meta.url));
const site = resolve(process.argv[2] || "_site");
const required = new Set([
  "coi-serviceworker.js",
  "public/js/file-lab/file-lab.js",
  "public/js/file-lab/virtual-scroll.js",
  "public/js/file-lab/plugins/r2/dist/r2-worker.js",
  "public/js/file-lab/plugins/r2/dist/wasmer/index.mjs",
  "public/js/file-lab/plugins/r2/dist/wasmer/worker.mjs",
  "public/js/file-lab/plugins/r2/dist/wasmer/wasmer_js_bg.wasm",
  "public/js/file-lab/plugins/pyre/dist/pyre-worker.js",
  "public/js/file-lab/plugins/pyre/dist/pyre-bridge.js"
]);
const manifestPath = "public/js/file-lab/plugins.json";
const manifest = JSON.parse(readFileSync(resolve(site, manifestPath), "utf8"));
required.add(manifestPath);

for (const plugin of manifest.plugins) {
  if (plugin.enabled === false) continue;
  const moduleUrl = new URL(plugin.module, "https://file-lab.invalid/");
  if (moduleUrl.origin !== "https://file-lab.invalid") continue;
  required.add(moduleUrl.pathname.slice(1));
  const base = plugin.base
    ? new URL(plugin.base.replace(/\/?$/, "/"), moduleUrl)
    : new URL("./", moduleUrl);
  for (const asset of [plugin.css, plugin.wasm].filter(Boolean)) {
    const url = new URL(asset, base);
    if (url.origin === moduleUrl.origin) required.add(url.pathname.slice(1));
  }
}

// Check every generated chunk, stylesheet and runtime asset survives Jekyll.
function addTree(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) addTree(path);
    else if (entry.isFile()) required.add(relative(source, path));
  }
}
for (const plugin of ["r2", "pyre", "kaitai-viewer"]) {
  addTree(resolve(source, "public/js/file-lab/plugins", plugin, "dist"));
}
addTree(resolve(source, "public/js/file-lab/plugins/pyre/specs"));

const errors = [];
for (const asset of required) {
  try {
    const published = resolve(site, asset);
    if (!statSync(published).isFile() || statSync(published).size === 0) {
      throw new Error("missing or empty file");
    }
    if (!readFileSync(published).equals(readFileSync(resolve(source, asset)))) {
      throw new Error("published content differs from built source");
    }
  } catch (error) {
    errors.push(`${asset}: ${error.message}`);
  }
}
if (errors.length) {
  console.error("File Lab deployment validation failed:\n" + errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${required.size} File Lab assets in ${site}`);
