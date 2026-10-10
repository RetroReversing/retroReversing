import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      zlib: resolve(__dirname, "src/shims/zlib-stub.js"),
      "iconv-lite": resolve(__dirname, "src/shims/iconv-lite-stub.js")
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      output: {
        assetFileNames: "plugin[extname]"
      }
    },
    sourcemap: true,
    target: "es2020"
  }
});
