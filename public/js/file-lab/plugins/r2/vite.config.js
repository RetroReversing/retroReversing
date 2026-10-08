import { defineConfig } from "vite";
import { resolve } from "node:path";
import { copyFileSync, mkdirSync } from "node:fs";

function copyWasmerAssets() {
  return {
    name: "copy-wasmer-assets",
    writeBundle(options) {
      var outDir = options.dir || resolve(__dirname, "dist");
      var wasmerOut = resolve(outDir, "wasmer");
      var wasmerDist = resolve(__dirname, "node_modules/@wasmer/sdk/dist");

      mkdirSync(wasmerOut, { recursive: true });
      copyFileSync(resolve(wasmerDist, "wasmer_js_bg.wasm"), resolve(wasmerOut, "wasmer_js_bg.wasm"));
      copyFileSync(resolve(wasmerDist, "index.mjs"), resolve(wasmerOut, "index.mjs"));
      copyFileSync(resolve(wasmerDist, "worker.mjs"), resolve(wasmerOut, "worker.mjs"));
    }
  };
}

export default defineConfig({
  plugins: [copyWasmerAssets()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.js"),
        "r2-worker": resolve(__dirname, "src/worker/r2-worker.js")
      },
      preserveEntrySignatures: "strict",
      external: ["/public/js/file-lab/virtual-scroll.js", "@wasmer/sdk"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "plugin[extname]",
        paths: {
          "@wasmer/sdk": "./wasmer/index.mjs"
        }
      }
    },
    sourcemap: true,
    target: "es2020"
  }
});
