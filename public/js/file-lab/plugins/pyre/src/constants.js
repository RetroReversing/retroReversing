/** Hosted Pyre assets (Ghidra decompiler WASM + SLEIGH specs). */
export var PYRE_CDN_BASE = "https://pyre.fuzzing.science/";
export var PYRE_DECOMPILER_BASE = PYRE_CDN_BASE + "decompiler/";
export var PYRE_SPECS_BASE = PYRE_CDN_BASE + "specs/";
export var PYRE_MANIFEST_URL = PYRE_SPECS_BASE + "manifest.json";
/** Site-owned PS2 and Saturn specs; other architectures use Pyre's CDN. */
export var PYRE_LOCAL_SPECS_BASE = "/public/js/file-lab/plugins/pyre/specs/";

export function specUrlsForArch(arch) {
  var base = arch === "MIPS" || arch === "r5900" || arch === "SuperH"
    ? PYRE_LOCAL_SPECS_BASE
    : PYRE_SPECS_BASE;
  return { specBaseUrl: base, manifestUrl: base + "manifest.json" };
}
