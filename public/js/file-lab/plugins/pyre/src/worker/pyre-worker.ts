/// <reference lib="webworker" />

import type {
  WorkerRequest,
  WorkerReply,
  InitRequest,
  OpenRequest,
  DecompileRequest,
  CloseRequest,
  Hex,
} from "../decompiler/types";

var PYRE_DECOMPILER_BASE = "https://pyre.fuzzing.science/decompiler/";
var pyreLoader: ((opts: { locateFile: (path: string) => string }) => Promise<EmModule>) | null = null;

interface EmModule {
  FS: {
    mkdir(path: string): void;
    stat(path: string): unknown;
    writeFile(path: string, data: Uint8Array): void;
    createLazyFile(
      parent: string,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
    ): void;
  };
  ccall: (...args: unknown[]) => unknown;
  cwrap: (
    name: string,
    ret: string | null,
    args: (string | null)[],
  ) => (...args: unknown[]) => unknown;
  HEAPU8: Uint8Array;
  UTF8ToString: (ptr: number) => string;
  _malloc: (n: number) => number;
  _free: (ptr: number) => void;
}

interface DecompilerApi {
  init: (specRoot: string) => number;
  add_spec_dir: (dir: string) => number;
  create: (languageId: string) => number;
  add_region: (
    handle: number,
    addr: bigint,
    bytes: number,
    size: number,
  ) => number;
  add_symbol: (handle: number, addr: bigint, name: string) => number;
  add_string: (handle: number, addr: bigint, len: bigint) => number;
  add_readonly: (handle: number, addr: bigint, size: bigint) => number;
  decompile: (handle: number, addr: bigint, name: string) => number;
  free_string: (ptr: number) => void;
  destroy: (handle: number) => void;
}

let mod: EmModule | null = null;
let api: DecompilerApi | null = null;
const sessions = new Map<number, number>();
let nextSession = 1;
let cachedManifest: { files: { path: string; size: number }[] } | null = null;
const mountedArchs = new Set<string>();

async function loadPyreDecompiler() {
  if (!pyreLoader) {
    const url = PYRE_DECOMPILER_BASE + "pyre_decompiler.js";
    const imported = await import(/* @vite-ignore */ url);
    pyreLoader = imported.default;
  }
  return pyreLoader!;
}

function bindApi(m: EmModule): DecompilerApi {
  return {
    init: m.cwrap("pyre_init", "number", ["string"]) as DecompilerApi["init"],
    add_spec_dir: m.cwrap("pyre_add_spec_dir", "number", [
      "string",
    ]) as DecompilerApi["add_spec_dir"],
    create: m.cwrap("pyre_create", "number", ["string"]) as DecompilerApi["create"],
    add_region: m.cwrap("pyre_add_region", "number", [
      "number",
      "bigint",
      "number",
      "number",
    ]) as DecompilerApi["add_region"],
    add_symbol: m.cwrap("pyre_add_symbol", "number", [
      "number",
      "bigint",
      "string",
    ]) as DecompilerApi["add_symbol"],
    add_string: m.cwrap("pyre_add_string", "number", [
      "number",
      "bigint",
      "bigint",
    ]) as DecompilerApi["add_string"],
    add_readonly: m.cwrap("pyre_add_readonly", "number", [
      "number",
      "bigint",
      "bigint",
    ]) as DecompilerApi["add_readonly"],
    decompile: m.cwrap("pyre_decompile", "number", [
      "number",
      "bigint",
      "string",
    ]) as DecompilerApi["decompile"],
    free_string: m.cwrap("pyre_free_string", null, [
      "number",
    ]) as DecompilerApi["free_string"],
    destroy: m.cwrap("pyre_destroy", null, ["number"]) as DecompilerApi["destroy"],
  };
}

function ensureSpecDir(FS: EmModule["FS"], dirPath: string) {
  const parts = dirPath.split("/").filter(Boolean);
  let cur = "";
  for (const part of parts) {
    cur += "/" + part;
    try {
      FS.mkdir(cur);
    } catch {
      /* EEXIST */
    }
  }
}

const prefetchedSpecFiles = new Set<string>();

/**
 * Prefetch a spec file via fetch and write it into emscripten's FS.
 * Lazy FS mounts use synchronous XHR, which COEP `require-corp` blocks for
 * cross-origin URLs (File Lab enables cross-origin isolation for R2).
 * Async fetch is handled by coi-serviceworker, which injects CORP headers.
 */
async function prefetchSpecFile(
  FS: EmModule["FS"],
  relPath: string,
  url: string,
) {
  if (prefetchedSpecFiles.has(relPath)) return;

  const fullPath = "/spec/" + relPath;
  try {
    FS.stat(fullPath);
    prefetchedSpecFiles.add(relPath);
    return;
  } catch {
    /* not mounted yet */
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`fetch spec ${url}: ${response.status}`);
  }
  const data = new Uint8Array(await response.arrayBuffer());
  ensureSpecDir(FS, fullPath.substring(0, fullPath.lastIndexOf("/")));
  FS.writeFile(fullPath, data);
  prefetchedSpecFiles.add(relPath);
}

async function doInit(req: InitRequest) {
  if (!mod) {
    const PyreDecompiler = await loadPyreDecompiler();
    mod = (await PyreDecompiler({
      locateFile: (path: string) => PYRE_DECOMPILER_BASE + path,
    })) as EmModule;
    api = bindApi(mod);
    try {
      mod.FS.mkdir("/spec");
    } catch {
      /* fine */
    }
  }
  if (mountedArchs.has(req.arch)) return;

  if (!cachedManifest) {
    const r = await fetch(req.manifestUrl);
    if (!r.ok) throw new Error(`fetch manifest ${req.manifestUrl}: ${r.status}`);
    cachedManifest = await r.json();
  }

  const archPrefix = req.arch + "/";
  const langDirs = new Set<string>();
  const entries = cachedManifest!.files.filter((entry) =>
    entry.path.startsWith(archPrefix),
  );

  for (const entry of entries) {
    await prefetchSpecFile(
      mod!.FS,
      entry.path,
      req.specBaseUrl + entry.path,
    );
    const parts = entry.path.split("/");
    if (parts[parts.length - 2] === "languages") {
      langDirs.add("/spec/" + parts.slice(0, -1).join("/"));
    }
  }

  for (const dir of langDirs) {
    if (api!.add_spec_dir(dir) !== 0) {
      throw new Error(`add_spec_dir(${dir}) failed`);
    }
  }

  mountedArchs.add(req.arch);
}

function doOpen(req: OpenRequest): number {
  if (!mod || !api) throw new Error("worker not initialized");
  if (req.regions.length === 0)
    throw new Error("open requires at least one region");

  const handle = api.create(req.languageId);
  if (!handle) throw new Error(`decompiler create failed for ${req.languageId}`);

  for (const region of req.regions) {
    const u8 =
      region.bytes instanceof Uint8Array
        ? region.bytes
        : new Uint8Array(region.bytes);
    if (u8.length === 0) continue;
    const ptr = mod._malloc(u8.length);
    mod.HEAPU8.set(u8, ptr);
    api.add_region(handle, region.vaddr, ptr, u8.length);
    mod._free(ptr);
  }
  for (const [addr, name] of req.symbols) api.add_symbol(handle, addr, name);
  for (const [addr, size] of req.readonly) api.add_readonly(handle, addr, size);
  for (const [addr, len] of req.strings)
    api.add_string(handle, addr, BigInt(len));

  const id = nextSession++;
  sessions.set(id, handle);
  return id;
}

function doDecompile(req: DecompileRequest): string {
  if (!mod || !api) throw new Error("worker not initialized");
  const handle = sessions.get(req.sessionId);
  if (!handle) throw new Error(`unknown session ${req.sessionId}`);
  const cstr = api.decompile(handle, req.address, req.name ?? "");
  if (!cstr) throw new Error("decompile returned null");
  const code = mod.UTF8ToString(cstr);
  api.free_string(cstr);
  return code;
}

function doClose(req: CloseRequest) {
  if (!api) return;
  const handle = sessions.get(req.sessionId);
  if (handle != null) {
    api.destroy(handle);
    sessions.delete(req.sessionId);
  }
}

self.addEventListener("message", async (ev: MessageEvent<WorkerRequest>) => {
  const req = ev.data;
  try {
    let reply: WorkerReply;
    switch (req.cmd) {
      case "init":
        await doInit(req);
        reply = { id: req.id, ok: true };
        break;
      case "open":
        reply = { id: req.id, ok: true, sessionId: doOpen(req) };
        break;
      case "decompile":
        reply = { id: req.id, ok: true, code: doDecompile(req) };
        break;
      case "close":
        doClose(req);
        reply = { id: req.id, ok: true };
        break;
      default:
        reply = { id: (req as { id: number }).id, ok: false, error: "unknown cmd" };
    }
    (self as unknown as Worker).postMessage(reply);
  } catch (err) {
    (self as unknown as Worker).postMessage({
      id: req.id,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    } satisfies WorkerReply);
  }
});

export type { Hex };
