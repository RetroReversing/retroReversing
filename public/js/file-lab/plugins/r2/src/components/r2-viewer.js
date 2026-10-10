import { LitElement, html, css, nothing } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { createVirtualList } from "/public/js/file-lab/virtual-scroll.js";
import { ansiToHtml } from "../ansi-to-html.js";

var ROW_HEIGHT = 28;
var VIRTUAL_OVERSCAN = 48;
var LOG_PREFIX = "[file-lab:r2]";

var DETAIL_FORMATS = [
  { id: "info", label: "Info" },
  { id: "asm", label: "ASM" },
  { id: "esil", label: "ESIL" },
  { id: "cfg", label: "CFG" },
  { id: "graph", label: "Graph" },
  { id: "hex", label: "Hex" },
  { id: "pdc", label: "Pseudo-C" },
  { id: "ghidra", label: "Ghidra" }
];

var PYRE_BRIDGE_URL = "/public/js/file-lab/plugins/pyre/dist/pyre-bridge.js";
var PYRE_WORKER_URL = "/public/js/file-lab/plugins/pyre/dist/pyre-worker.js";

function compareFunctions(a, b, column, direction) {
  var factor = direction === "desc" ? -1 : 1;
  if (column === "name") {
    return factor * a.name.localeCompare(b.name);
  }
  if (column === "size") {
    return factor * (a.size - b.size);
  }
  return factor * (a.offset - b.offset);
}

function formatAddress(value) {
  return "0x" + (Number(value) >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

export class R2ViewerElement extends LitElement {
  static properties = {
    filename: { type: String },
    bytes: { type: Object },
    workerUrl: { type: String },
    status: { type: String },
    progressPhase: { type: String },
    progressPercent: { type: Number },
    progressDetail: { type: String },
    errorMessage: { type: String },
    functions: { type: Array },
    filterText: { type: String },
    sortColumn: { type: String },
    sortDirection: { type: String },
    displayedCount: { type: Number },
    selectedFunction: { type: Object },
    detailFormat: { type: String },
    detailLoading: { type: Boolean },
    detailError: { type: String },
    pyreSupported: { type: Boolean }
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      height: 100%;
      margin: 0;
      padding: 0;
      color: var(--rr-color-content-text, #333);
      font-size: 13px;
      line-height: 1.45;
    }

    .panel-ready {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-shrink: 0;
      margin: 0;
      padding: 0 10px 8px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
    }

    .toolbar label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--rr-color-heading, #4f4f4f);
    }

    .toolbar input[type="search"] {
      min-width: 220px;
      height: 32px;
      padding: 0 10px;
      border: 1px solid var(--rr-color-content-border, #ececec);
      border-radius: 6px;
      background: var(--rr-color-pre-bg, #fff);
      color: var(--rr-color-content-text, #333);
      font: inherit;
    }

    .meta {
      color: var(--rr-color-meta, #888);
      font-size: 12px;
    }

    .status {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid var(--rr-color-content-border, #ececec);
      background: var(--rr-color-code-bg, #f6f8fa);
      color: var(--rr-color-content-text, #333);
    }

    .status.is-error {
      border-color: var(--rr-color-content-border-strong, #eaeaea);
      background: var(--rr-color-table-stripe, #f3f3f3);
    }

    .progress {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .progress-bar {
      height: 8px;
      border-radius: 999px;
      overflow: hidden;
      background: var(--rr-color-content-border-subtle, #e2e2e2);
    }

    .progress-bar > span {
      display: block;
      height: 100%;
      background: var(--rr-color-heading, #4f4f4f);
      transition: width 0.2s ease;
    }

    .list-shell {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      border: 0;
      border-radius: 0;
      overflow: hidden;
      background: var(--rr-color-pre-bg, #fff);
    }

    .view-stack {
      flex: 1;
      min-height: 0;
      display: flex;
      width: 200%;
      transform: translateX(0);
      transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .view-stack.is-detail {
      transform: translateX(-50%);
    }

    .list-pane,
    .detail-pane {
      width: 50%;
      min-width: 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }

    .detail-pane {
      background: var(--rr-color-pre-bg, #fff);
    }

    .detail-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      flex-shrink: 0;
      padding: 8px 10px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
    }

    .detail-tab {
      padding: 5px 10px;
      border: 1px solid transparent;
      border-radius: 8px;
      background: transparent;
      color: var(--rr-color-tab-text, #616161);
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .detail-tab.is-active {
      color: var(--rr-color-accent, #0366d6);
      border-color: var(--rr-color-content-border, #ececec);
      background: var(--rr-color-pre-bg, #fff);
    }

    .detail-tab:hover,
    .detail-tab:focus {
      color: var(--rr-color-heading, #4f4f4f);
      outline: none;
    }

    .detail-body {
      flex: 1;
      min-height: 0;
      overflow: auto;
      padding: 10px 12px;
    }

    .detail-body.is-graph {
      display: flex;
      flex-direction: column;
      padding: 8px 10px 10px;
      overflow: hidden;
    }

    .detail-status {
      color: var(--rr-color-meta, #888);
      font-size: 12px;
    }

    .detail-status.is-error {
      color: var(--rr-color-content-text, #333);
    }

    .detail-retry {
      margin-top: 8px;
      padding: 4px 10px;
      border: 1px solid var(--rr-color-content-border, #ececec);
      border-radius: 6px;
      background: var(--rr-color-btn-secondary-bg, #f6f8fa);
      color: var(--rr-color-content-link, #0366d6);
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .detail-retry:hover,
    .detail-retry:focus {
      border-color: var(--rr-color-btn-secondary-hover-border, #d0d7de);
      background: var(--rr-color-btn-secondary-hover-bg, #eef1f4);
      outline: none;
    }

    .detail-output {
      margin: 0;
      color: var(--rr-color-content-text, #333);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      line-height: 1.45;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .detail-output.is-cfg {
      white-space: pre;
      overflow-x: auto;
    }

    .detail-output.is-color,
    .detail-output.is-ghidra {
      background: var(--rr-color-code-bg, #f6f8fa);
      border: 1px solid var(--rr-color-code-border, #d0d7de);
      border-radius: 8px;
      padding: 10px 12px;
    }

    .detail-hint {
      margin: 0 0 8px;
      color: var(--rr-color-content-muted, #57606a);
      font-size: 12px;
    }

    .detail-output .pyre-call-site {
      display: inline;
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--rr-color-content-link, #0366d6);
      font: inherit;
      text-decoration: underline;
      text-decoration-style: dotted;
      text-underline-offset: 2px;
      cursor: pointer;
    }

    .detail-output .pyre-call-site:hover,
    .detail-output .pyre-call-site:focus {
      color: var(--rr-color-accent, #0366d6);
      text-decoration-style: solid;
      outline: none;
    }

    .ghidra-xrefs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }

    @media (max-width: 900px) {
      .ghidra-xrefs {
        grid-template-columns: 1fr;
      }
    }

    .ghidra-xrefs-group {
      min-width: 0;
      border: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      border-radius: 8px;
      background: var(--rr-color-pre-bg, #fff);
      overflow: hidden;
    }

    .ghidra-xrefs-label {
      padding: 6px 10px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      color: var(--rr-color-table-head-text, #616161);
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .ghidra-xrefs-empty {
      padding: 8px 10px;
      color: var(--rr-color-content-muted, #57606a);
      font-size: 12px;
      line-height: 1.4;
    }

    .ghidra-xrefs-list {
      list-style: none;
      margin: 0;
      padding: 4px;
      max-height: 120px;
      overflow: auto;
    }

    .ghidra-xref {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      padding: 5px 8px;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: inherit;
      font: inherit;
      font-size: 12px;
      text-align: left;
      cursor: pointer;
    }

    .ghidra-xref:hover,
    .ghidra-xref:focus {
      background: var(--rr-color-btn-secondary-hover-bg, #eef1f4);
      outline: none;
    }

    .ghidra-xref-name {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--rr-color-content-link, #0366d6);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .ghidra-xref-addr {
      flex-shrink: 0;
      color: var(--rr-color-content-muted, #57606a);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 11px;
    }

    .detail-output .r2-mnemonic {
      color: var(--rr-color-r2-mnemonic, #0550ae);
    }

    .detail-output .r2-number {
      color: var(--rr-color-r2-number, #953800);
    }

    .detail-output .r2-call {
      color: var(--rr-color-r2-call, #116329);
    }

    .detail-output .r2-register {
      color: var(--rr-color-r2-register, #57606a);
    }

    .detail-output .r2-label {
      color: var(--rr-color-r2-label, #6639ba);
    }

    .detail-output .r2-comment {
      color: var(--rr-color-r2-comment, #6e7781);
    }

    .detail-output .r2-bold {
      font-weight: 700;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 120px minmax(0, 1fr);
      gap: 8px 12px;
      margin: 0;
    }

    .detail-grid dt {
      margin: 0;
      color: var(--rr-color-meta, #888);
      font-size: 12px;
      font-weight: 600;
    }

    .detail-grid dd {
      margin: 0;
      color: var(--rr-color-content-text, #333);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      word-break: break-word;
    }

    .list-head {
      flex-shrink: 0;
      display: grid;
      grid-template-columns: 120px minmax(180px, 1fr) 90px;
      gap: 8px;
      padding: 8px 10px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      color: var(--rr-color-table-head-text, #616161);
      font-weight: 600;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      background: var(--rr-color-pre-bg, #fff);
    }

    .list-head button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0;
      border: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
      text-align: left;
    }

    .list-head button.is-active {
      color: var(--rr-color-heading, #4f4f4f);
    }

    .list-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .virtual-mount {
      flex: 1;
      min-height: 0;
    }

    .virtual-mount .rr-file-lab-virtual-root {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
    }

    .virtual-mount .rr-file-lab-virtual-scroll {
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
    }

    .virtual-mount .rr-file-lab-virtual-spacer {
      position: relative;
      width: 100%;
    }

    .virtual-mount .rr-file-lab-virtual-window {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      will-change: transform;
    }

    .fn-row {
      display: grid;
      grid-template-columns: 120px minmax(180px, 1fr) 90px;
      gap: 8px;
      align-items: center;
      height: 28px;
      padding: 0 10px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      cursor: pointer;
    }

    .fn-row:hover {
      background: var(--rr-color-table-hover, #f5f5f5);
    }

    .fn-row.is-selected {
      background: var(--rr-color-table-hover, #f5f5f5);
    }

    .fn-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .fn-size {
      color: var(--rr-color-meta, #888);
      text-align: right;
    }
  `;

  constructor() {
    super();
    this.filename = "";
    this.bytes = null;
    this.workerUrl = "";
    this.status = "idle";
    this.progressPhase = "";
    this.progressPercent = 0;
    this.progressDetail = "";
    this.errorMessage = "";
    this.functions = [];
    this.filterText = "";
    this.sortColumn = "offset";
    this.sortDirection = "asc";
    this.displayedCount = 0;
    this.selectedFunction = null;
    this.detailFormat = "info";
    this.detailLoading = false;
    this.detailError = "";
    this.pyreSupported = false;
    this.host = null;
    this.pyreBridgeUrl = PYRE_BRIDGE_URL;
    this.pyreWorkerUrl = PYRE_WORKER_URL;
    this._worker = null;
    this._requestId = 0;
    this._detailRequestId = 0;
    this._formatCache = {};
    this._pendingDetail = null;
    this._virtualList = null;
    this._virtualMountRef = createRef();
    this._displayed = [];
    this._lastLoggedProgress = "";
    this._pyreBridge = null;
    this._pyreBridgePromise = null;
    this._pyreSession = null;
    this._pyreInitPromise = null;
    this._ghidraNavStack = [];
    this._ghidraCallersIndex = null;
  }

  loadFile(filename, bytes, workerUrl) {
    console.log(LOG_PREFIX, "loadFile", {
      filename: filename,
      bytes: bytes && bytes.length,
      workerUrl: workerUrl
    });
    this.filename = filename;
    this.bytes = bytes;
    this.workerUrl = workerUrl;
    this._startAnalysis();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopWorker();
    this._destroyVirtualList();
    this._teardownPyreSession();
  }

  _teardownPyreSession() {
    if (this._pyreSession) {
      this._pyreSession.close().catch(function () {});
      this._pyreSession = null;
    }
    this._pyreInitPromise = null;
    this._ghidraCallersIndex = null;
  }

  updated(changed) {
    if (
      (changed.has("functions") || changed.has("filterText") || changed.has("sortColumn") || changed.has("sortDirection")) &&
      this.status === "ready"
    ) {
      this._refreshDisplayed();
    }
    if (changed.has("selectedFunction") && this._virtualList) {
      this._virtualList.refresh();
    }
    if (changed.has("selectedFunction") && this.selectedFunction && this.detailFormat !== "info") {
      this._ensureFunctionDetail(this.detailFormat);
    }
    if (changed.has("detailFormat") && this.selectedFunction && this.detailFormat !== "info") {
      this._ensureFunctionDetail(this.detailFormat);
    }
    if (changed.has("status") && this.status === "ready") {
      this.updateComplete.then(function () {
        if (this._virtualMountRef.value) {
          this._mountVirtualList();
          this._refreshDisplayed();
        }
      }.bind(this));
    }
  }

  _stopWorker() {
    if (this._worker) {
      this._worker.terminate();
      this._worker = null;
    }
  }

  _destroyVirtualList() {
    if (this._virtualList) {
      this._virtualList.destroy();
      this._virtualList = null;
    }
  }

  _startAnalysis() {
    if (!globalThis.crossOriginIsolated) {
      console.warn(LOG_PREFIX, "blocked: page is not cross-origin isolated");
      this.status = "error";
      this.errorMessage =
        "The R2 plugin needs cross-origin isolation (SharedArrayBuffer). " +
        "If this page just reloaded, open the R2 tab again. " +
        "Otherwise hard-refresh once so the File Lab isolation service worker can install.";
      return;
    }

    if (!this.bytes || !this.bytes.length || !this.workerUrl) {
      console.warn(LOG_PREFIX, "blocked: missing inputs", {
        bytes: this.bytes && this.bytes.length,
        workerUrl: this.workerUrl
      });
      this.status = "error";
      this.errorMessage = "Missing file data or worker URL.";
      return;
    }

    this._stopWorker();
    this.status = "loading";
    this.progressPhase = "init";
    this.progressPercent = 0;
    this.progressDetail = "Starting radare2 worker";
    this.errorMessage = "";
    if (this.selectedFunction && this.host && this.host.api && this.host.api.popDetailView) {
      this.host.api.popDetailView();
    }
    this.functions = [];
    this.selectedFunction = null;
    this.detailFormat = "info";
    this.detailLoading = false;
    this.detailError = "";
    this.pyreSupported = false;
    this._formatCache = {};
    this._pendingDetail = null;
    this._ghidraNavStack = [];
    this._ghidraCallersIndex = null;
    this._teardownPyreSession();

    console.log(LOG_PREFIX, "spawning worker", { workerUrl: this.workerUrl });
    this._worker = new Worker(this.workerUrl, { type: "module" });
    var requestId = ++this._requestId;

    this._worker.onmessage = function (event) {
      var msg = event.data;
      if (!msg) return;

      if (msg.type === "functionDetail" || msg.type === "functionDetailError") {
        this._handleFunctionDetailMessage(msg);
        return;
      }

      if (msg.type === "progress" && msg.phase === "function-detail") {
        return;
      }

      if (!msg.id || msg.id !== requestId) {
        console.debug(LOG_PREFIX, "ignoring stale worker message", {
          msgId: msg.id,
          requestId: requestId,
          type: msg.type
        });
        return;
      }

      if (msg.type === "progress") {
        var progressKey = msg.phase + ":" + Math.floor((msg.percent || 0) / 10);
        if (progressKey !== this._lastLoggedProgress || msg.phase === "analyzing") {
          this._lastLoggedProgress = progressKey;
          console.log(LOG_PREFIX, "progress", {
            phase: msg.phase,
            percent: msg.percent,
            detail: msg.detail
          });
        }
        if (msg.phase === "function-detail") {
          return;
        }
        this.progressPhase = msg.phase;
        this.progressPercent = msg.percent || 0;
        this.progressDetail = msg.detail || "";
        if (msg.phase === "analyzing") {
          this.status = "analyzing";
        }
        return;
      }

      if (msg.type === "result") {
        console.log(LOG_PREFIX, "analysis complete", {
          functions: Array.isArray(msg.functions) ? msg.functions.length : 0
        });
        this.functions = Array.isArray(msg.functions) ? msg.functions : [];
        this.status = "ready";
        this.progressPercent = 100;
        this.progressDetail = this.functions.length.toLocaleString() + " functions";
        this._persistSharedState();
        this._checkPyreSupport();
        return;
      }

      if (msg.type === "error") {
        console.error(LOG_PREFIX, "worker error", msg.message);
        this.status = "error";
        this.errorMessage = msg.message || "radare2 analysis failed.";
      }
    }.bind(this);

    this._worker.onerror = function (event) {
      console.error(LOG_PREFIX, "worker onerror", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
      this.status = "error";
      this.errorMessage = event.message || "radare2 worker failed.";
    }.bind(this);

    console.log(LOG_PREFIX, "postMessage analyze", {
      requestId: requestId,
      filename: this.filename,
      bytes: this.bytes.length
    });
    this._worker.postMessage({
      type: "analyze",
      id: requestId,
      filename: this.filename,
      bytes: this.bytes.slice().buffer
    });
  }

  async _loadPyreBridge() {
    if (this._pyreBridge) return this._pyreBridge;
    if (!this._pyreBridgePromise) {
      var url = this.pyreBridgeUrl || PYRE_BRIDGE_URL;
      this._pyreBridgePromise = import(/* @vite-ignore */ url).then(function (mod) {
        this._pyreBridge = mod;
        return mod;
      }.bind(this)).catch(function (err) {
        this._pyreBridgePromise = null;
        throw err;
      }.bind(this));
    }
    return this._pyreBridgePromise;
  }

  async _checkPyreSupport() {
    if (!this.bytes || !this.bytes.length) {
      this.pyreSupported = false;
      return;
    }
    try {
      var bridge = await this._loadPyreBridge();
      this.pyreSupported = bridge.canParseBinary(this.bytes);
    } catch (err) {
      console.warn(LOG_PREFIX, "Pyre bridge unavailable", err);
      this.pyreSupported = false;
    }
  }

  async _ensurePyreSession() {
    if (this._pyreSession) return this._pyreSession;
    if (!this._pyreInitPromise) {
      var self = this;
      this._pyreInitPromise = (async function () {
        var bridge = await self._loadPyreBridge();
        if (!bridge.canParseBinary(self.bytes)) {
          throw new Error("Pyre supports ELF, Mach-O, PE, and WASM only.");
        }
        var workerUrl = self.pyreWorkerUrl || PYRE_WORKER_URL;
        self._pyreSession = await bridge.createPyreSession(self.bytes, workerUrl);
        return self._pyreSession;
      })().catch(function (err) {
        self._pyreInitPromise = null;
        throw err;
      });
    }
    return this._pyreInitPromise;
  }

  _detailFormatsForFile() {
    if (this.pyreSupported) return DETAIL_FORMATS;
    return DETAIL_FORMATS.filter(function (format) {
      return format.id !== "ghidra";
    });
  }

  _persistSharedState() {
    if (!this.host || !this.host.api || typeof this.host.api.setPluginState !== "function") return;
    if (!this.functions || !this.functions.length) return;

    this.host.api.setPluginState({
      version: 1,
      analyzedAt: Date.now(),
      functions: this.functions.map(function (entry) {
        return {
          offset: entry.offset,
          name: entry.name,
          size: entry.size,
          type: entry.type || "",
          cc: entry.cc || "",
          nargs: entry.nargs,
          nbbs: entry.nbbs,
          isPure: entry.isPure
        };
      })
    }).catch(function (err) {
      console.warn(LOG_PREFIX, "failed to persist shared plugin state", err);
    });
  }

  _refreshDisplayed() {
    var query = (this.filterText || "").trim().toLowerCase();
    var list = this.functions.slice();

    if (query) {
      list = list.filter(function (entry) {
        return (
          entry.name.toLowerCase().indexOf(query) !== -1 ||
          formatAddress(entry.offset).toLowerCase().indexOf(query) !== -1
        );
      });
    }

    list.sort(function (a, b) {
      return compareFunctions(a, b, this.sortColumn, this.sortDirection);
    }.bind(this));

    this._displayed = list;
    this.displayedCount = list.length;

    if (this.selectedFunction) {
      var stillVisible = list.some(function (entry) {
        return entry.offset === this.selectedFunction.offset && entry.name === this.selectedFunction.name;
      }.bind(this));
      if (!stillVisible) {
        if (this.host && this.host.api && this.host.api.popDetailView) {
          this.host.api.popDetailView();
        }
        this.selectedFunction = null;
      }
    }

    if (this._virtualList) {
      this._virtualList.setTotalCount(list.length);
      this._virtualList.refresh();
    }
  }

  _selectFunction(index) {
    var entry = this._displayed[index];
    if (!entry) return;

    var sameSelection =
      this.selectedFunction &&
      this.selectedFunction.offset === entry.offset &&
      this.selectedFunction.name === entry.name;
    if (sameSelection) return;

    this._ghidraNavStack = [entry];
    if (this.host && this.host.api && this.host.api.clearDetailViews) {
      this.host.api.clearDetailViews();
    } else if (this.selectedFunction && this.host && this.host.api && this.host.api.popDetailView) {
      this.host.api.popDetailView();
    }

    this.selectedFunction = entry;
    this.detailError = "";
    this._pushDetailHeader(entry);
    if (this.detailFormat !== "info") {
      this._ensureFunctionDetail(this.detailFormat);
    }
  }

  _findFunctionEntry(offset, nameHint) {
    var target = typeof offset === "bigint" ? offset : BigInt(offset >>> 0);
    for (var i = 0; i < this.functions.length; i++) {
      if (BigInt(this.functions[i].offset >>> 0) === target) {
        return this.functions[i];
      }
    }
    var targetNum = Number(target);
    var name = nameHint || ("FUN_" + target.toString(16));
    return { offset: targetNum, name: name, size: 0 };
  }

  _restoreGhidraNavStack() {
    var entry = this._ghidraNavStack[this._ghidraNavStack.length - 1];
    if (!entry) {
      this.selectedFunction = null;
      this.detailLoading = false;
      this.detailError = "";
      if (this._virtualList) this._virtualList.refresh();
      return;
    }

    this.selectedFunction = entry;
    this.detailError = "";
    if (this._getCachedFormatText(entry, "ghidra")) {
      this.detailLoading = false;
    } else if (this.detailFormat === "ghidra") {
      this._ensureGhidraDetail({});
    }
    if (this._virtualList) this._virtualList.refresh();
  }

  _followGhidraCall(addr, nameHint) {
    var entry = this._findFunctionEntry(addr, nameHint);
    if (this.selectedFunction && this.selectedFunction.offset === entry.offset) return;

    this._ghidraNavStack.push(entry);
    this.selectedFunction = entry;
    this.detailError = "";
    this._pushDetailHeader(entry);
    this._ensureGhidraDetail({});
    if (this._virtualList) this._virtualList.refresh();
  }

  _onGhidraDetailClick(event) {
    var button = event.target.closest(".pyre-call-site");
    if (!button) return;

    var addrText = button.getAttribute("data-addr");
    if (!addrText) return;

    event.preventDefault();
    this._followGhidraCall(BigInt(addrText), button.textContent || "");
  }

  _getGhidraResolveContext() {
    var bridge = this._pyreBridge;
    var binary = this._pyreSession && this._pyreSession.binary;
    if (!bridge) return null;
    return {
      nameToAddr:
        bridge.buildNameToAddrFromBinary && binary
          ? bridge.buildNameToAddrFromBinary(binary)
          : bridge.buildNameToAddr(this.functions),
      resolveOpts:
        bridge.resolveOptsFromBinary && binary
          ? bridge.resolveOptsFromBinary(binary)
          : null
    };
  }

  _ensureGhidraCallersIndex() {
    if (!this._ghidraCallersIndex && this._pyreBridge && this._pyreBridge.createCallersIndex) {
      this._ghidraCallersIndex = this._pyreBridge.createCallersIndex();
    }
    return this._ghidraCallersIndex;
  }

  _indexGhidraCallers(fn, code) {
    var index = this._ensureGhidraCallersIndex();
    var ctx = this._getGhidraResolveContext();
    if (!index || !ctx || !fn || !code) return;
    index.addFromDecompile(fn.offset, fn.name, code, ctx.nameToAddr, ctx.resolveOpts);
  }

  _onGhidraXrefClick(event) {
    var button = event.target.closest(".ghidra-xref");
    if (!button) return;

    var addrText = button.getAttribute("data-addr");
    if (!addrText) return;

    event.preventDefault();
    var nameEl = button.querySelector(".ghidra-xref-name");
    this._followGhidraCall(BigInt(addrText), nameEl ? nameEl.textContent || "" : "");
  }

  _renderGhidraXrefs(callees, callers) {
    var self = this;

    function renderGroup(label, items, emptyText) {
      if (!items.length) {
        return html`
          <div class="ghidra-xrefs-group">
            <div class="ghidra-xrefs-label">${label} (0)</div>
            <div class="ghidra-xrefs-empty">${emptyText}</div>
          </div>
        `;
      }
      return html`
        <div class="ghidra-xrefs-group">
          <div class="ghidra-xrefs-label">${label} (${items.length})</div>
          <ul class="ghidra-xrefs-list">
            ${items.map(function (item) {
              return html`
                <li>
                  <button
                    type="button"
                    class="ghidra-xref"
                    data-addr=${item.addr.toString()}
                    @click=${self._onGhidraXrefClick}
                  >
                    <span class="ghidra-xref-name">${item.name}</span>
                    <span class="ghidra-xref-addr">${formatAddress(Number(item.addr))}</span>
                  </button>
                </li>
              `;
            })}
          </ul>
        </div>
      `;
    }

    return html`
      <div class="ghidra-xrefs">
        ${renderGroup("Callees", callees, "No resolved calls in this decompilation.")}
        ${renderGroup(
          "Callers",
          callers,
          "Decompile other functions to discover callers."
        )}
      </div>
    `;
  }

  _pushDetailHeader(entry) {
    if (!entry || !this.host || !this.host.api || !this.host.api.pushDetailView) return;
    var self = this;
    this.host.api.pushDetailView({
      title: entry.name,
      subtitle: formatAddress(entry.offset) + (this.filename ? " · " + this.filename : ""),
      onPop: function () {
        if (self.detailFormat === "ghidra" && self._ghidraNavStack.length > 1) {
          self._ghidraNavStack.pop();
          self._restoreGhidraNavStack();
          return;
        }
        self._ghidraNavStack = [];
        self.selectedFunction = null;
        self.detailLoading = false;
        self.detailError = "";
      }
    });
  }

  _functionCacheKey(fn) {
    if (!fn) return "";
    return fn.offset + ":" + fn.name;
  }

  _getCachedFormatText(fn, format) {
    var entry = this._formatCache[this._functionCacheKey(fn)];
    return entry && entry[format] ? entry[format] : "";
  }

  _setCachedFormatText(fn, format, text) {
    var key = this._functionCacheKey(fn);
    if (!this._formatCache[key]) {
      this._formatCache[key] = {};
    }
    this._formatCache[key][format] = text;
  }

  _ensureFunctionDetail(format, options) {
    options = options || {};
    if (!format || format === "info") return;
    if (!this.selectedFunction || this.status !== "ready") return;

    if (format === "ghidra") {
      this._ensureGhidraDetail(options);
      return;
    }

    if (!this._worker) return;

    if (!options.forceRefresh && this._getCachedFormatText(this.selectedFunction, format)) {
      this.detailLoading = false;
      this.detailError = "";
      return;
    }

    this.detailLoading = true;
    this.detailError = "";
    var requestId = ++this._detailRequestId;
    this._pendingDetail = {
      requestId: requestId,
      format: format,
      offset: this.selectedFunction.offset,
      name: this.selectedFunction.name
    };

    this._worker.postMessage({
      type: "functionDetail",
      id: requestId,
      filename: this.filename,
      bytes: this.bytes.slice().buffer,
      offset: this.selectedFunction.offset,
      size: this.selectedFunction.size,
      nbbs: this.selectedFunction.nbbs,
      format: format,
      forceRefresh: options.forceRefresh === true
    });
  }

  async _ensureGhidraDetail(options) {
    options = options || {};
    if (!this.selectedFunction) return;

    if (!options.forceRefresh && this._getCachedFormatText(this.selectedFunction, "ghidra")) {
      this.detailLoading = false;
      this.detailError = "";
      this._indexGhidraCallers(
        this.selectedFunction,
        this._getCachedFormatText(this.selectedFunction, "ghidra")
      );
      return;
    }

    this.detailLoading = true;
    this.detailError = "";
    var fn = this.selectedFunction;
    var requestId = ++this._detailRequestId;
    this._pendingDetail = {
      requestId: requestId,
      format: "ghidra",
      offset: fn.offset,
      name: fn.name
    };

    try {
      var bridge = await this._loadPyreBridge();
      var pyre = await this._ensurePyreSession();
      var code = await bridge.decompileFunction(pyre.session, fn.offset, fn.name);
      if (!this._pendingDetail || this._pendingDetail.requestId !== requestId) return;
      if (
        !this.selectedFunction ||
        this.selectedFunction.offset !== fn.offset ||
        this.selectedFunction.name !== fn.name ||
        this.detailFormat !== "ghidra"
      ) {
        return;
      }
      this.detailLoading = false;
      this.detailError = "";
      this._setCachedFormatText(fn, "ghidra", code || "");
      this._indexGhidraCallers(fn, code || "");
    } catch (err) {
      if (!this._pendingDetail || this._pendingDetail.requestId !== requestId) return;
      if (this.detailFormat !== "ghidra") return;
      this.detailLoading = false;
      this.detailError = err instanceof Error ? err.message : String(err);
    } finally {
      if (this._pendingDetail && this._pendingDetail.requestId === requestId) {
        this._pendingDetail = null;
      }
    }
  }

  _handleFunctionDetailMessage(msg) {
    if (!this._pendingDetail || msg.id !== this._pendingDetail.requestId) {
      return;
    }

    var pending = this._pendingDetail;
    this._pendingDetail = null;

    if (
      !this.selectedFunction ||
      this.selectedFunction.offset !== pending.offset ||
      this.selectedFunction.name !== pending.name ||
      this.detailFormat !== pending.format
    ) {
      return;
    }

    this.detailLoading = false;

    if (msg.type === "functionDetailError") {
      this.detailError = msg.message || "Failed to load function view.";
      return;
    }

    this.detailError = "";
    this._setCachedFormatText(this.selectedFunction, pending.format, msg.text || "");
  }

  _onDetailFormat(format) {
    if (this.detailFormat === format) return;
    this.detailFormat = format;
    this.detailError = "";
    if (format !== "info") {
      this._ensureFunctionDetail(format);
    } else {
      this.detailLoading = false;
    }
  }

  _retryDetailFormat() {
    if (!this.selectedFunction || this.detailFormat === "info") return;
    var key = this._functionCacheKey(this.selectedFunction);
    if (this._formatCache[key]) {
      delete this._formatCache[key][this.detailFormat];
    }
    this._ensureFunctionDetail(this.detailFormat, { forceRefresh: true });
  }

  _renderDetailContent() {
    if (!this.selectedFunction) return nothing;

    if (this.detailFormat === "info") {
      return html`
        <dl class="detail-grid">
          ${this._detailFields(this.selectedFunction).map(function (field) {
            return html`<dt>${field[0]}</dt><dd>${field[1]}</dd>`;
          })}
        </dl>
      `;
    }

    if (this.detailLoading) {
      var loadingLabel = this.detailFormat === "ghidra"
        ? "Decompiling with Ghidra (Pyre)..."
        : "Generating " + this.detailFormat.toUpperCase() + " view...";
      return html`<div class="detail-status">${loadingLabel}</div>`;
    }

    if (this.detailError) {
      return html`
        <div class="detail-status is-error">${this.detailError}</div>
        <button type="button" class="detail-retry" @click=${this._retryDetailFormat}>Retry</button>
      `;
    }

    var text = this._getCachedFormatText(this.selectedFunction, this.detailFormat);
    if (!text) {
      return html`<div class="detail-status">No output for this view.</div>`;
    }

    if (this.detailFormat === "graph") {
      return html`<cfg-graph .source=${text}></cfg-graph>`;
    }

    if (this.detailFormat === "ghidra") {
      return this._renderGhidraOutput(text);
    }

    return html`<pre class="detail-output is-color ${this.detailFormat === "cfg" ? "is-cfg" : ""}">${unsafeHTML(ansiToHtml(text))}</pre>`;
  }

  _renderGhidraOutput(text) {
    if (!text) {
      return html`<div class="detail-status">No output for this view.</div>`;
    }

    var bridge = this._pyreBridge;
    if (!bridge || typeof bridge.renderDecompileHtml !== "function") {
      return html`<pre class="detail-output is-ghidra">${text}</pre>`;
    }

    var binary = this._pyreSession && this._pyreSession.binary;
    var nameToAddr =
      bridge.buildNameToAddrFromBinary && binary
        ? bridge.buildNameToAddrFromBinary(binary)
        : bridge.buildNameToAddr(this.functions);
    var resolveOpts =
      bridge.resolveOptsFromBinary && binary
        ? bridge.resolveOptsFromBinary(binary)
        : null;
    var callees = bridge.extractCallees
      ? bridge.extractCallees(text, nameToAddr, resolveOpts)
      : [];
    this._indexGhidraCallers(this.selectedFunction, text);
    var index = this._ensureGhidraCallersIndex();
    var callers = index
      ? index.getCallers(BigInt(this.selectedFunction.offset >>> 0))
      : [];
    var htmlText = bridge.renderDecompileHtml(text, nameToAddr, this.host, resolveOpts);
    return html`
      ${this._renderGhidraXrefs(callees, callers)}
      <p class="detail-hint">Click a call or xref to follow · Back returns</p>
      <div class="detail-output is-ghidra" @click=${this._onGhidraDetailClick}>${unsafeHTML(htmlText)}</div>
    `;
  }

  _detailFields(fn) {
    if (!fn) return [];
    var end = fn.offset + Math.max(0, fn.size || 0);
    var fields = [
      ["Address", formatAddress(fn.offset)],
      ["End", formatAddress(end)],
      ["Size", (fn.size || 0).toLocaleString() + " bytes"]
    ];
    if (fn.type) fields.push(["Type", fn.type]);
    if (fn.cc) fields.push(["Calling convention", fn.cc]);
    if (fn.nargs != null && fn.nargs !== "") fields.push(["Arguments", String(fn.nargs)]);
    if (fn.nbbs != null && fn.nbbs !== "") fields.push(["Basic blocks", String(fn.nbbs)]);
    if (fn.isPure != null) fields.push(["Pure", fn.isPure ? "yes" : "no"]);
    return fields;
  }

  _mountVirtualList() {
    if (this._virtualList || !this._virtualMountRef.value) return;

    var self = this;
    this._virtualList = createVirtualList({
      totalCount: this.displayedCount,
      rowHeight: ROW_HEIGHT,
      overscan: VIRTUAL_OVERSCAN,
      mount: this._virtualMountRef.value,
      renderRow: function (index) {
        var entry = self._displayed[index];
        if (!entry) return document.createElement("div");
        var row = document.createElement("div");
        row.className = "fn-row";
        if (
          self.selectedFunction &&
          self.selectedFunction.offset === entry.offset &&
          self.selectedFunction.name === entry.name
        ) {
          row.classList.add("is-selected");
        }

        row.addEventListener("click", function () {
          self._selectFunction(index);
        });

        var addr = document.createElement("span");
        addr.textContent = formatAddress(entry.offset);

        var name = document.createElement("span");
        name.className = "fn-name";
        name.title = entry.name;
        name.textContent = entry.name;

        var size = document.createElement("span");
        size.className = "fn-size";
        size.textContent = entry.size.toLocaleString();

        row.appendChild(addr);
        row.appendChild(name);
        row.appendChild(size);
        return row;
      }
    });
    this._virtualList.refresh();
  }

  _onFilterInput(event) {
    this.filterText = event.target.value;
  }

  _onSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }

  _sortLabel(column, label) {
    var active = this.sortColumn === column;
    var arrow = active ? (this.sortDirection === "asc" ? "▲" : "▼") : "";
    return html`<button type="button" class="${active ? "is-active" : ""}" @click=${function () { this._onSort(column); }.bind(this)}>${label} ${arrow}</button>`;
  }

  render() {
    return html`
      ${this.status === "loading" || this.status === "analyzing"
        ? html`
            <div class="status progress">
              <div>${this.progressDetail || (this.status === "analyzing" ? "Analyzing with radare2 (this can take a few minutes)..." : "Loading radare2...")}</div>
              <div class="progress-bar"><span style="width:${this.progressPercent}%"></span></div>
              <div class="meta">${this.progressPhase}${this.progressPercent ? " - " + this.progressPercent + "%" : ""}</div>
            </div>
          `
        : nothing}

      ${this.status === "error"
        ? html`<div class="status is-error">${this.errorMessage}</div>`
        : nothing}

      ${this.status === "ready"
        ? html`
            <div class="panel-ready">
              <div class="view-stack ${this.selectedFunction ? "is-detail" : ""}">
                <div class="list-pane">
                  <div class="toolbar">
                    <label>
                      Filter
                      <input
                        type="search"
                        .value=${this.filterText}
                        @input=${this._onFilterInput}
                        placeholder="Name or address"
                      />
                    </label>
                    <span class="meta">${this.displayedCount.toLocaleString()} shown${this.displayedCount !== this.functions.length ? " (" + this.functions.length.toLocaleString() + " total)" : ""}</span>
                  </div>
                  <div class="list-shell">
                    <div class="list-head">
                      ${this._sortLabel("offset", "Address")}
                      ${this._sortLabel("name", "Function")}
                      ${this._sortLabel("size", "Size")}
                    </div>
                    <div class="list-body">
                      <div class="virtual-mount" ${ref(this._virtualMountRef)}></div>
                    </div>
                  </div>
                </div>
                <aside class="detail-pane" aria-label="Function details">
                  <div class="detail-tabs" role="tablist" aria-label="Function views">
                    ${this._detailFormatsForFile().map(function (format) {
                      return html`
                        <button
                          type="button"
                          class="detail-tab ${this.detailFormat === format.id ? "is-active" : ""}"
                          role="tab"
                          aria-selected=${this.detailFormat === format.id ? "true" : "false"}
                          @click=${function () { this._onDetailFormat(format.id); }.bind(this)}
                        >${format.label}</button>
                      `;
                    }, this)}
                  </div>
                  <div class="detail-body ${this.detailFormat === "graph" ? "is-graph" : ""}">
                    ${this._renderDetailContent()}
                  </div>
                </aside>
              </div>
            </div>
          `
        : nothing}
    `;
  }

}

customElements.define("r2-viewer", R2ViewerElement);
