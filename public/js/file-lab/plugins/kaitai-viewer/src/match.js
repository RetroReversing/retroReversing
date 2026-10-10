import { detectFormat } from "./format-registry.js";

export function matchesKaitaiFile(ctx) {
  return !!detectFormat(ctx);
}
