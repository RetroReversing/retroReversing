import { Wasmer, init } from "@wasmer/sdk";
import { extractJsonPayload } from "../json-extract.js";

var LOG_PREFIX = "[file-lab:r2:worker]";
var R2_WASM_URL = "https://radareorg.github.io/r2wasm/radare2.wasm";
var WASMER_DIR = new URL("./wasmer/", import.meta.url).href;
var WASMER_SDK_WASM = WASMER_DIR + "wasmer_js_bg.wasm";
var WASMER_SDK_JS = WASMER_DIR + "index.mjs";
var WASMER_WORKER_JS = WASMER_DIR + "worker.mjs";

console.log(LOG_PREFIX, "loaded", {
  wasmerDir: WASMER_DIR,
  wasmerWasm: WASMER_SDK_WASM,
  wasmerSdk: WASMER_SDK_JS,
  wasmerWorker: WASMER_WORKER_JS,
  crossOriginIsolated: globalThis.crossOriginIsolated
});

var wasmerReady = false;
var cachedPkg = null;
var lastProgressKey = "";
var detailCache = new Map();

function postProgress(id, phase, percent, detail) {
  var pct = percent || 0;
  var key = phase + ":" + Math.floor(pct / 5);
  if (key === lastProgressKey && pct !== 100) return;
  lastProgressKey = key;
  self.postMessage({
    type: "progress",
    id: id,
    phase: phase,
    percent: pct,
    detail: detail || ""
  });
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(message));
      }, ms);
    })
  ]);
}

async function ensureWasmer() {
  if (wasmerReady) {
    console.log(LOG_PREFIX, "Wasmer already initialized");
    return;
  }
  if (!globalThis.crossOriginIsolated) {
    throw new Error(
      "Cross-origin isolation is required for radare2.wasm. Reload the page and try the R2 tab again."
    );
  }

  console.log(LOG_PREFIX, "fetching Wasmer runtime", WASMER_SDK_WASM);
  var wasmResponse = await fetch(WASMER_SDK_WASM);
  if (!wasmResponse.ok) {
    throw new Error("Failed to load Wasmer runtime (" + wasmResponse.status + ")");
  }
  console.log(LOG_PREFIX, "compiling Wasmer runtime");
  var wasmModule = await WebAssembly.compile(await wasmResponse.arrayBuffer());

  console.log(LOG_PREFIX, "initializing Wasmer SDK", {
    sdkUrl: WASMER_SDK_JS,
    workerUrl: WASMER_WORKER_JS
  });
  await init({
    module: wasmModule,
    sdkUrl: WASMER_SDK_JS,
    workerUrl: WASMER_WORKER_JS
  });
  wasmerReady = true;
  console.log(LOG_PREFIX, "Wasmer ready");
}

async function loadR2Package(id, wasmUrl) {
  if (cachedPkg) {
    console.log(LOG_PREFIX, "using cached radare2 package");
    return cachedPkg;
  }

  var url = wasmUrl || R2_WASM_URL;
  console.log(LOG_PREFIX, "downloading radare2.wasm", url);
  var response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to download radare2.wasm (" + response.status + ")");
  }

  var total = Number(response.headers.get("content-length")) || 0;
  if (!response.body || !total) {
    var buffer = new Uint8Array(await response.arrayBuffer());
    postProgress(id, "loading-wasm", 100);
    cachedPkg = Wasmer.fromWasm(buffer);
    console.log(LOG_PREFIX, "radare2.wasm loaded (no stream)", { bytes: buffer.length });
    return cachedPkg;
  }

  var reader = response.body.getReader();
  var chunks = [];
  var received = 0;

  while (true) {
    var chunk = await reader.read();
    if (chunk.done) break;
    chunks.push(chunk.value);
    received += chunk.value.length;
    postProgress(id, "loading-wasm", Math.min(99, Math.round((received / total) * 100)));
  }

  var merged = new Uint8Array(received);
  var offset = 0;
  for (var i = 0; i < chunks.length; i++) {
    merged.set(chunks[i], offset);
    offset += chunks[i].length;
  }

  postProgress(id, "loading-wasm", 100);
  cachedPkg = Wasmer.fromWasm(merged);
  console.log(LOG_PREFIX, "radare2.wasm loaded", { bytes: merged.length });
  return cachedPkg;
}

async function readStream(stream) {
  if (!stream) return "";
  var reader = stream.getReader();
  var decoder = new TextDecoder();
  var output = "";

  while (true) {
    var chunk = await reader.read();
    if (chunk.done) break;
    output += decoder.decode(chunk.value, { stream: true });
  }

  output += decoder.decode();
  return output;
}

async function closeStdin(instance) {
  try {
    if (instance.stdin && instance.stdin.getWriter) {
      await instance.stdin.getWriter().close();
    }
  } catch (_) {
    /* ignore */
  }
}

function extractWaitOutput(result) {
  if (result == null) {
    return { code: -1, stdout: "", stderr: "" };
  }
  if (typeof result === "string") {
    return { code: 0, stdout: result, stderr: "" };
  }
  return {
    code: Number(result.code != null ? result.code : result.exitCode != null ? result.exitCode : 0),
    stdout: String(result.stdout != null ? result.stdout : ""),
    stderr: String(result.stderr != null ? result.stderr : "")
  };
}

function parseFunctionJson(output) {
  var start = output.indexOf("[");
  var end = output.lastIndexOf("]");
  if (start === -1 || end <= start) {
    throw new Error("radare2 did not return a function list for this file");
  }
  return JSON.parse(output.slice(start, end + 1));
}

function normalizeFunctions(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map(function (entry) {
    var offset = entry.offset != null ? entry.offset : entry.addr;
    return {
      offset: Number(offset) || 0,
      name: String(entry.name || "unknown"),
      size: Number(entry.size) || 0,
      type: String(entry.type || ""),
      cc: entry.cc != null ? String(entry.cc) : "",
      nargs: entry.nargs != null ? entry.nargs : null,
      nbbs: entry.nbbs != null ? entry.nbbs : null,
      isPure: entry["is-pure"] != null ? Boolean(entry["is-pure"]) : null
    };
  });
}

function formatAddress(offset) {
  return "0x" + (Number(offset) >>> 0).toString(16);
}

function stripAnsi(text) {
  return String(text || "")
    .replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\u009b[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\[(?:\d{1,3}(?:;\d{1,3})*)?m/g, "");
}

function withBaseArgs(args) {
  return [
    "-q",
    "-e", "bin.relocs.apply=true",
    "-e", "bin.cache=true",
    "-e", "io.cache=true"
  ].concat(args.slice(1));
}

function withPlainOutputArgs(args) {
  return withBaseArgs([
    "-q",
    "-e", "scr.color=0",
    "-e", "scr.highlight=0",
    "-e", "log.level=error"
  ].concat(args.slice(1)));
}

function withGraphOutputArgs(args) {
  return withBaseArgs([
    "-q",
    "-e", "log.level=error"
  ].concat(args.slice(1)));
}

function withColorOutputArgs(args) {
  return withBaseArgs([
    "-q",
    "-e", "scr.color=3",
    "-e", "scr.highlight=1"
  ].concat(args.slice(1)));
}

function buildDetailArgs(offset, size, format) {
  var addr = formatAddress(offset);
  var starter = format === "graph"
    ? withGraphOutputArgs([
      "-q",
      "-c", "aa",
      "-c", "s " + addr,
      "-c", "af"
    ])
    : withColorOutputArgs([
      "-q",
      "-c", "aa",
      "-c", "s " + addr,
      "-c", "af"
    ]);
  var args = starter;

  switch (format) {
    case "asm":
      args.push("-c", "pdf");
      break;
    case "esil":
      args.push("-e", "asm.esil=true");
      args.push("-c", "pdf");
      break;
    case "cfg":
      args.push("-c", "agf");
      break;
    case "graph":
      args.push("-c", "agfj");
      break;
    case "hex": {
      var byteCount = Math.max(1, Math.min(Number(size) || 64, 4096));
      args.push("-c", "b " + byteCount);
      args.push("-c", "px");
      break;
    }
    case "pdc":
      args.push("-c", "pdc");
      break;
    default:
      throw new Error("Unknown function view format: " + format);
  }

  args.push("input.bin");
  return args;
}

function formatDetailLabel(format) {
  switch (format) {
    case "asm": return "disassembly";
    case "esil": return "ESIL";
    case "cfg": return "control-flow graph";
    case "graph": return "interactive graph";
    case "hex": return "hex dump";
    case "pdc": return "pseudo-C";
    default: return format;
  }
}

function extractR2Error(stderr, exitCode) {
  var text = stripAnsi(stderr || "").trim();
  if (!text) {
    return exitCode !== 0 ? "radare2 exited with code " + exitCode : "";
  }

  var lines = text.split("\n");
  var errors = lines.filter(function (line) {
    return /^ERROR:/i.test(line.trim());
  });

  if (errors.length) {
    return errors[errors.length - 1].replace(/^ERROR:\s*/i, "").trim();
  }

  var warnings = lines.filter(function (line) {
    return /^WARN:/i.test(line.trim());
  });
  if (warnings.length) {
    return warnings[warnings.length - 1].replace(/^WARN:\s*/i, "").trim();
  }

  var other = lines.filter(function (line) {
    var trimmed = line.trim();
    return trimmed && !/^INFO:/i.test(trimmed);
  });
  if (other.length) {
    return other[other.length - 1].trim();
  }

  return exitCode !== 0 ? "radare2 exited with code " + exitCode : "";
}

function assertR2Output(stdout, stderr, exitCode, emptyMessage, preserveAnsi) {
  var cleaned = preserveAnsi ? String(stdout || "") : stripAnsi(stdout);
  if (cleaned.trim()) return cleaned;

  var message = extractR2Error(stderr, exitCode);
  if (message) {
    throw new Error(stripAnsi(message));
  }

  throw new Error(emptyMessage || "radare2 returned no output");
}

async function runR2WithArgs(id, bytes, args, options) {
  options = options || {};
  var progressPhase = options.progressPhase || "analyzing";
  var progressDetail = options.progressDetail || "Running radare2";
  var startTimeout = options.startTimeout || 120000;
  var runTimeout = options.runTimeout || 600000;
  var emptyMessage = options.emptyMessage || "radare2 returned no output";

  postProgress(id, progressPhase, 0, progressDetail);

  var pkg = await loadR2Package(id, R2_WASM_URL);
  var mountName = "input.bin";

  console.log(LOG_PREFIX, "running radare2", {
    args: args,
    inputBytes: bytes.length
  });

  var instance = await withTimeout(
    pkg.entrypoint.run({
      args: args,
      mount: {
        "./": (function () {
          var mount = {};
          mount[mountName] = bytes;
          return mount;
        })()
      }
    }),
    startTimeout,
    "Timed out waiting for radare2 to start (" + Math.round(startTimeout / 1000) + "s)"
  );

  var stdout = "";
  var stderr = "";
  var exitCode = 0;

  if (typeof instance.wait === "function") {
    var waitResult = await withTimeout(
      instance.wait(),
      runTimeout,
      "radare2 command timed out after " + Math.round(runTimeout / 1000) + " seconds"
    );
    var extracted = extractWaitOutput(waitResult);
    stdout = extracted.stdout;
    stderr = extracted.stderr;
    exitCode = extracted.code;
  } else {
    await closeStdin(instance);
    stdout = await withTimeout(readStream(instance.stdout), runTimeout, "radare2 stdout timed out");
    stderr = await withTimeout(readStream(instance.stderr), runTimeout, "radare2 stderr timed out");
    try {
      instance.free();
    } catch (_) {
      /* ignore */
    }
  }

  if (stderr.trim()) {
    console.warn(LOG_PREFIX, "radare2 stderr", stderr.trim().slice(0, 800));
  }

  postProgress(id, progressPhase, 100, progressDetail);
  return assertR2Output(stdout, stderr, exitCode, emptyMessage, options.preserveAnsi === true);
}

async function runR2Command(id, bytes, r2Command, options) {
  return runR2WithArgs(id, bytes, withPlainOutputArgs([
    "-q",
    "-c", r2Command,
    "input.bin"
  ]), options);
}

async function analyzeBinary(id, filename, bytes) {
  postProgress(id, "analyzing", 0, "Running radare2 analysis");
  var r2Command = "aaa; aflj";
  console.log(LOG_PREFIX, "analyzeBinary", {
    displayName: String(filename || "binary").split(/[/\\]/).pop() || "binary",
    command: r2Command
  });

  var stdout = await runR2Command(id, bytes, r2Command, {
    progressPhase: "analyzing",
    progressDetail: "Running radare2 analysis"
  });

  return normalizeFunctions(parseFunctionJson(stdout));
}

function buildGraphBlockArgs(offset, command, useFullAnalysis) {
  var addr = formatAddress(offset);
  var args = withGraphOutputArgs([
    "-q",
    "-c", useFullAnalysis ? "aaa" : "aa",
    "-c", "s " + addr,
    "-c", "af",
    "-c", command
  ]);
  args.push("input.bin");
  return args;
}

function countGraphBlocks(data) {
  if (!data) return 0;
  if (Array.isArray(data)) {
    if (!data.length) return 0;
    if (data[0] && data[0].addr != null && (data[0].jump != null || data[0].fail != null || data[0].size != null || Array.isArray(data[0].ops))) {
      return data.length;
    }
    return data.length;
  }
  if (Array.isArray(data.blocks)) return data.blocks.length;
  if (Array.isArray(data.nodes)) return data.nodes.length;
  return 0;
}

function isVisualGraphPayload(data) {
  if (!Array.isArray(data) || !data.length || !data[0]) return false;
  var entry = data[0];
  return (entry.title != null || entry.body != null)
    && entry.addr == null
    && entry.jump == null
    && entry.fail == null;
}

function isValidGraphPayload(data) {
  if (!data) return false;
  if (Array.isArray(data.blocks) && data.blocks.length) return true;
  if (Array.isArray(data)) {
    if (!data.length) return false;
    if (isVisualGraphPayload(data)) return false;
    return data.length > 0;
  }
  if (Array.isArray(data.nodes) && data.nodes.length) return true;
  return false;
}

function isAdequateGraphPayload(data, expectedNbbs) {
  if (!isValidGraphPayload(data)) return false;
  var count = countGraphBlocks(data);
  if (!count) return false;
  if (expectedNbbs != null && expectedNbbs > 1 && count < Math.min(expectedNbbs, 2)) {
    return false;
  }
  return true;
}

async function fetchFunctionGraph(id, offset, size, bytes, expectedNbbs, forceRefresh) {
  var cacheKey = offset + ":graph:v2";
  if (!forceRefresh && detailCache.has(cacheKey)) {
    return detailCache.get(cacheKey);
  }

  var label = formatDetailLabel("graph");
  var attempts = [
    { name: "afbj-aaa", args: buildGraphBlockArgs(offset, "afbj", true) },
    { name: "agfj-aaa", args: buildGraphBlockArgs(offset, "agfj", true) },
    { name: "afbj-aa", args: buildGraphBlockArgs(offset, "afbj", false) },
    { name: "agfj-aa", args: buildGraphBlockArgs(offset, "agfj", false) }
  ];
  var lastError = null;
  var bestJson = null;
  var bestCount = 0;

  for (var i = 0; i < attempts.length; i++) {
    var attempt = attempts[i];
    try {
      console.log(LOG_PREFIX, "fetchFunctionGraph trying", attempt.name);
      var stdout = await runR2WithArgs(id, bytes, attempt.args, {
        progressPhase: "function-detail",
        progressDetail: "Generating " + label + " (" + attempt.name + ")",
        startTimeout: 120000,
        runTimeout: 180000,
        emptyMessage: "radare2 returned no graph JSON for this function",
        preserveAnsi: false
      });
      var json = extractJsonPayload(stdout);
      var data = JSON.parse(json);
      if (!isValidGraphPayload(data)) {
        throw new Error("Graph JSON did not contain any basic blocks");
      }
      var count = countGraphBlocks(data);
      if (count > bestCount) {
        bestCount = count;
        bestJson = json;
      }
      if (isAdequateGraphPayload(data, expectedNbbs)) {
        detailCache.set(cacheKey, json);
        return json;
      }
      throw new Error("Graph JSON returned too few basic blocks (" + count + ")");
    } catch (err) {
      lastError = err;
      console.warn(LOG_PREFIX, "graph attempt failed:", attempt.name, err);
    }
  }

  if (bestJson) {
    detailCache.set(cacheKey, bestJson);
    return bestJson;
  }

  throw lastError || new Error("Could not build control-flow graph for this function");
}

async function fetchFunctionDetail(id, offset, size, format, bytes, expectedNbbs, forceRefresh) {
  var cacheKey = offset + ":" + format + (format === "graph" ? ":v2" : "");
  if (!forceRefresh && detailCache.has(cacheKey)) {
    return detailCache.get(cacheKey);
  }

  if (format === "graph") {
    return fetchFunctionGraph(id, offset, size, bytes, expectedNbbs, forceRefresh);
  }

  var args = buildDetailArgs(offset, size, format);
  var label = formatDetailLabel(format);
  console.log(LOG_PREFIX, "fetchFunctionDetail", {
    offset: offset,
    format: format,
    args: args
  });

  var stdout = await runR2WithArgs(id, bytes, args, {
    progressPhase: "function-detail",
    progressDetail: "Generating " + label,
    startTimeout: 120000,
    runTimeout: 180000,
    emptyMessage: "radare2 returned no " + label + " output for this function",
    preserveAnsi: format !== "graph"
  });

  var text = stdout.trim();
  detailCache.set(cacheKey, text);
  return text;
}

self.onmessage = async function (event) {
  var msg = event.data;
  if (!msg) return;

  if (msg.type === "analyze") {
    console.log(LOG_PREFIX, "analyze request", {
      id: msg.id,
      filename: msg.filename,
      bytes: msg.bytes && msg.bytes.byteLength
    });

    try {
      lastProgressKey = "";
      detailCache.clear();
      postProgress(msg.id, "init", 0, "Initializing Wasmer");
      await ensureWasmer();
      var functions = await analyzeBinary(msg.id, msg.filename, new Uint8Array(msg.bytes));
      console.log(LOG_PREFIX, "posting result", {
        id: msg.id,
        functions: functions.length
      });
      self.postMessage({ type: "result", id: msg.id, functions: functions });
    } catch (err) {
      console.error(LOG_PREFIX, "analysis failed", err);
      self.postMessage({
        type: "error",
        id: msg.id,
        message: err && err.message ? err.message : String(err)
      });
    }
    return;
  }

  if (msg.type === "functionDetail") {
    console.log(LOG_PREFIX, "functionDetail request", {
      id: msg.id,
      offset: msg.offset,
      format: msg.format
    });

    try {
      await ensureWasmer();
      var detailText = await fetchFunctionDetail(
        msg.id,
        msg.offset,
        msg.size,
        msg.format,
        new Uint8Array(msg.bytes),
        msg.nbbs,
        msg.forceRefresh === true
      );
      self.postMessage({
        type: "functionDetail",
        id: msg.id,
        offset: msg.offset,
        format: msg.format,
        text: detailText
      });
    } catch (err) {
      console.error(LOG_PREFIX, "functionDetail failed", err);
      self.postMessage({
        type: "functionDetailError",
        id: msg.id,
        offset: msg.offset,
        format: msg.format,
        message: err && err.message ? err.message : String(err)
      });
    }
  }
};
