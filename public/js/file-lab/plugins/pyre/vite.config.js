import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.js"),
        "pyre-bridge": resolve(__dirname, "src/pyre-bridge.js"),
        "pyre-worker": resolve(__dirname, "src/worker/pyre-worker.ts")
      },
      preserveEntrySignatures: "strict",
      external: ["/public/js/file-lab/virtual-scroll.js"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "plugin[extname]"
      }
    },
    sourcemap: true,
    target: "es2022"
  }
});
