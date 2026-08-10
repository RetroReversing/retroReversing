import { LitElement, html, css, nothing } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { createVirtualList } from "/public/js/file-lab/virtual-scroll.js";
import { DecompilerClient } from "../decompiler/client.ts";
import { parseBinary } from "../parsers/index.ts";
import { buildNameToAddrFromBinary, resolveOptsFromBinary } from "../decompiler/resolve-call.js";
import { renderDecompileHtml } from "../render-decompile.js";
import { extractCallees, createCallersIndex } from "../xrefs.js";
import { pyreFunctionsFromR2State } from "../r2-functions.js";
import {
  PYRE_SPECS_BASE,
  PYRE_MANIFEST_URL
} from "../constants.js";

var ROW_HEIGHT = 28;
var VIRTUAL_OVERSCAN = 48;
var LOG_PREFIX = "[file-lab:pyre]";

function compareFunctions(a, b, column, direction) {
  var factor = direction === "desc" ? -1 : 1;
  if (column === "name") {
    return factor * a.name.localeCompare(b.name);
  }
  if (column === "size") {
    return factor * ((a.size || 0) - (b.size || 0));
  }
  var addrA = typeof a.addr === "bigint" ? a.addr : BigInt(a.addr || 0);
  var addrB = typeof b.addr === "bigint" ? b.addr : BigInt(b.addr || 0);
  if (addrA < addrB) return -1 * factor;
  if (addrA > addrB) return 1 * factor;
  return 0;
}

function formatAddress(value) {
  var n = typeof value === "bigint" ? value : BigInt(value || 0);
  return "0x" + n.toString(16).toUpperCase();
}

export class PyreViewerElement extends LitElement {
  static properties = {
    filename: { type: String },
    bytes: { type: Object },
    workerUrl: { type: String },
    status: { type: String },
    progressDetail: { type: String },
    errorMessage: { type: String },
    binaryFormat: { type: String },
    binaryArch: { type: String },
    functionListSource: { type: String },
    functions: { type: Array },
    filterText: { type: String },
    sortColumn: { type: String },
    sortDirection: { type: String },
    displayedCount: { type: Number },
    selectedFunction: { type: Object },
    detailLoading: { type: Boolean },
    detailError: { type: String },
    detailCode: { type: String }
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

    .detail-header {
      flex-shrink: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 8px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      font-weight: 600;
      color: var(--rr-color-heading, #4f4f4f);
      font-size: 12px;
    }

    .detail-hint {
      font-weight: 400;
      color: var(--rr-color-meta, #888);
      font-size: 11px;
    }

    .detail-body {
      flex: 1;
      min-height: 0;
      overflow: auto;
      padding: 10px 12px;
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

    .detail-output {
      margin: 0;
      color: var(--rr-color-content-text, #333);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      line-height: 1.45;
      white-space: pre-wrap;
      word-break: break-word;
      background: var(--rr-color-code-bg, #f6f8fa);
      border: 1px solid var(--rr-color-code-border, #d0d7de);
      border-radius: 8px;
      padding: 10px 12px;
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

    .fn-row:hover,
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
    this.progressDetail = "";
    this.errorMessage = "";
    this.binaryFormat = "";
    this.binaryArch = "";
    this.functionListSource = "";
    this.functions = [];
    this.filterText = "";
    this.sortColumn = "addr";
    this.sortDirection = "asc";
    this.displayedCount = 0;
    this.selectedFunction = null;
    this.detailLoading = false;
    this.detailError = "";
    this.detailCode = "";
    this.host = null;
    this._client = null;
    this._session = null;
    this._decompileCache = new Map();
    this._virtualList = null;
    this._virtualMountRef = createRef();
    this._displayed = [];
    this._loadToken = 0;
    this._navStack = [];
    this._binary = null;
    this._callersIndex = createCallersIndex();
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
    this._teardown();
    this._destroyVirtualList();
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
    if (changed.has("status") && this.status === "ready") {
      this.updateComplete.then(function () {
        if (this._virtualMountRef.value) {
          this._mountVirtualList();
          this._refreshDisplayed();
        }
      }.bind(this));
    }
  }

  _teardown() {
    if (this._session) {
      this._session.close().catch(function () {});
      this._session = null;
    }
    if (this._client) {
      this._client.terminate();
      this._client = null;
    }
    this._decompileCache.clear();
  }

  _destroyVirtualList() {
    if (this._virtualList) {
      this._virtualList.destroy();
      this._virtualList = null;
    }
  }

  async _startAnalysis() {
    var token = ++this._loadToken;
    this._teardown();

    if (!this.bytes || !this.bytes.length || !this.workerUrl) {
      this.status = "error";
      this.errorMessage = "Missing file data or worker URL.";
      return;
    }

    this.status = "loading";
    this.progressDetail = "Parsing binary...";
    this.errorMessage = "";
    this.functions = [];
    this.selectedFunction = null;
    this.detailLoading = false;
    this.detailError = "";
    this.detailCode = "";
    this.binaryFormat = "";
    this.binaryArch = "";
    this.functionListSource = "";
    this._navStack = [];

    this._binary = null;
    this._callersIndex.clear();
    if (this.host && this.host.api && this.host.api.clearDetailViews) {
      this.host.api.clearDetailViews();
    } else if (this.host && this.host.api && this.host.api.popDetailView) {
      this.host.api.popDetailView();
    }

    try {
      var binary = await parseBinary(this.bytes);
      if (token !== this._loadToken) return;

      this._binary = binary;
      this.binaryFormat = binary.format;
      this.binaryArch = binary.arch;

      var functions = binary.functions || [];
      this.functionListSource = "parser";

      if (this.host && this.host.api && typeof this.host.api.getPluginState === "function") {
        var r2State = await this.host.api.getPluginState("r2");
        var fromR2 = pyreFunctionsFromR2State(r2State);
        if (fromR2) {
          functions = fromR2;
          this.functionListSource = "r2";
        }
      }

      this.functions = functions;
      this.progressDetail = "Loading Ghidra decompiler (Pyre)...";

      var client = new DecompilerClient(this.workerUrl);
      await client.init({
        specBaseUrl: PYRE_SPECS_BASE,
        manifestUrl: PYRE_MANIFEST_URL,
        arch: binary.arch
      });
      if (token !== this._loadToken) {
        client.terminate();
        return;
      }

      this.progressDetail = "Opening decompiler session...";
      var session = await client.open({
        languageId: binary.languageId,
        regions: binary.regions,
        symbols: binary.symbols,
        readonly: binary.readonly,
        strings: binary.strings
      });
      if (token !== this._loadToken) {
        session.close().catch(function () {});
        client.terminate();
        return;
      }

      this._client = client;
      this._session = session;
      this.status = "ready";
      var sourceLabel = this.functionListSource === "r2" ? " · R2 functions" : "";
      this.progressDetail =
        binary.format.toUpperCase() +
        " · " +
        binary.arch +
        " · " +
        this.functions.length.toLocaleString() +
        " functions" +
        sourceLabel;
    } catch (err) {
      if (token !== this._loadToken) return;
      console.error(LOG_PREFIX, "analysis failed", err);
      this.status = "error";
      this.errorMessage = err instanceof Error ? err.message : String(err);
    }
  }

  _refreshDisplayed() {
    var query = (this.filterText || "").trim().toLowerCase();
    var list = this.functions.slice();

    if (query) {
      list = list.filter(function (entry) {
        return (
          entry.name.toLowerCase().indexOf(query) !== -1 ||
          formatAddress(entry.addr).toLowerCase().indexOf(query) !== -1
        );
      });
    }

    list.sort(function (a, b) {
      return compareFunctions(a, b, this.sortColumn, this.sortDirection);
    }.bind(this));

    this._displayed = list;
    this.displayedCount = list.length;

    if (this.selectedFunction) {
      var selected = this.selectedFunction;
      var stillVisible = list.some(function (entry) {
        return entry.addr === selected.addr && entry.name === selected.name;
      });
      if (!stillVisible) {
        if (this.host && this.host.api && this.host.api.clearDetailViews) {
          this.host.api.clearDetailViews();
        }
        this._navStack = [];
        this.selectedFunction = null;
        this.detailCode = "";
      }
    }

    if (this._virtualList) {
      this._virtualList.setTotalCount(list.length);
      this._virtualList.refresh();
    }
  }

  _findFunctionEntry(addr, nameHint) {
    var target = typeof addr === "bigint" ? addr : BigInt(addr || 0);
    for (var i = 0; i < this.functions.length; i++) {
      if (this.functions[i].addr === target) return this.functions[i];
    }
    var name = nameHint || ("FUN_" + target.toString(16));
    return { addr: target, name: name };
  }

  _restoreFromNavStack() {
    var entry = this._navStack[this._navStack.length - 1];
    if (!entry) {
      this.selectedFunction = null;
      this.detailLoading = false;
      this.detailError = "";
      this.detailCode = "";
      if (this._virtualList) this._virtualList.refresh();
      return;
    }

    this.selectedFunction = entry;
    this.detailError = "";
    var cacheKey = entry.addr.toString() + ":" + entry.name;
    if (this._decompileCache.has(cacheKey)) {
      this.detailCode = this._decompileCache.get(cacheKey);
      this.detailLoading = false;
    } else {
      this.detailCode = "";
      this._loadDecompile(entry);
    }
    if (this._virtualList) this._virtualList.refresh();
  }

  _followCall(addr, nameHint) {
    var entry = this._findFunctionEntry(addr, nameHint);
    if (this.selectedFunction && this.selectedFunction.addr === entry.addr) return;

    this._navStack.push(entry);
    this.selectedFunction = entry;
    this.detailError = "";
    this._pushDetailHeader(entry);
    this._loadDecompile(entry);
    if (this._virtualList) this._virtualList.refresh();
  }

  _onDetailClick(event) {
    var button = event.target.closest(".pyre-call-site");
    if (!button) return;

    var addrText = button.getAttribute("data-addr");
    if (!addrText) return;

    event.preventDefault();
    this._followCall(BigInt(addrText), button.textContent || "");
  }

  _selectFunction(index) {
    var entry = this._displayed[index];
    if (!entry) return;

    var sameSelection =
      this.selectedFunction &&
      this.selectedFunction.addr === entry.addr &&
      this.selectedFunction.name === entry.name;
    if (sameSelection) return;

    this._navStack = [entry];
    if (this.host && this.host.api && this.host.api.clearDetailViews) {
      this.host.api.clearDetailViews();
    }

    this.selectedFunction = entry;
    this.detailError = "";
    this._pushDetailHeader(entry);
    this._loadDecompile(entry);
  }

  _pushDetailHeader(entry) {
    if (!entry || !this.host || !this.host.api || !this.host.api.pushDetailView) return;
    var self = this;
    this.host.api.pushDetailView({
      title: entry.name,
      subtitle: formatAddress(entry.addr) + (this.filename ? " · " + this.filename : ""),
      onPop: function () {
        if (self._navStack.length) {
          self._navStack.pop();
        }
        self._restoreFromNavStack();
      }
    });
  }

  _indexCallers(entry, code) {
    if (!entry || !code || !this._callersIndex) return;
    this._callersIndex.addFromDecompile(
      entry.addr,
      entry.name,
      code,
      buildNameToAddrFromBinary(this._binary),
      resolveOptsFromBinary(this._binary)
    );
  }

  _onXrefClick(event) {
    var button = event.target.closest(".ghidra-xref");
    if (!button) return;

    var addrText = button.getAttribute("data-addr");
    if (!addrText) return;

    event.preventDefault();
    var nameEl = button.querySelector(".ghidra-xref-name");
    this._followCall(BigInt(addrText), nameEl ? nameEl.textContent || "" : "");
  }

  _renderXrefs(callees, callers) {
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
                    @click=${self._onXrefClick}
                  >
                    <span class="ghidra-xref-name">${item.name}</span>
                    <span class="ghidra-xref-addr">${formatAddress(item.addr)}</span>
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

  async _loadDecompile(entry, forceRefresh) {
    if (!entry || !this._session) return;

    var cacheKey = entry.addr.toString() + ":" + entry.name;
    if (!forceRefresh && this._decompileCache.has(cacheKey)) {
      var cached = this._decompileCache.get(cacheKey);
      this.detailCode = cached;
      this.detailLoading = false;
      this.detailError = "";
      this._indexCallers(entry, cached);
      return;
    }

    this.detailLoading = true;
    this.detailError = "";
    this.detailCode = "";

    try {
      var code = await this._session.decompile(entry.addr, entry.name);
      this._decompileCache.set(cacheKey, code);
      this._indexCallers(entry, code);
      if (this.selectedFunction && this.selectedFunction.addr === entry.addr) {
        this.detailCode = code;
        this.detailLoading = false;
      }
    } catch (err) {
      if (this.selectedFunction && this.selectedFunction.addr === entry.addr) {
        this.detailLoading = false;
        this.detailError = err instanceof Error ? err.message : String(err);
      }
    }
  }

  _retryDecompile() {
    if (!this.selectedFunction) return;
    var cacheKey = this.selectedFunction.addr.toString() + ":" + this.selectedFunction.name;
    this._decompileCache.delete(cacheKey);
    this._loadDecompile(this.selectedFunction, true);
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
          self.selectedFunction.addr === entry.addr &&
          self.selectedFunction.name === entry.name
        ) {
          row.classList.add("is-selected");
        }

        row.addEventListener("click", function () {
          self._selectFunction(index);
        });

        var addr = document.createElement("span");
        addr.textContent = formatAddress(entry.addr);

        var name = document.createElement("span");
        name.className = "fn-name";
        name.title = entry.name;
        name.textContent = entry.name;

        var size = document.createElement("span");
        size.className = "fn-size";
        size.textContent = entry.size != null ? entry.size.toLocaleString() : "—";

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

  _renderDecompileOutput() {
    if (!this.detailCode) return html`No output.`;
    var nameToAddr = buildNameToAddrFromBinary(this._binary);
    var resolveOpts = resolveOptsFromBinary(this._binary);
    var callees = extractCallees(this.detailCode, nameToAddr, resolveOpts);
    if (this.selectedFunction) {
      this._indexCallers(this.selectedFunction, this.detailCode);
    }
    var callers = this.selectedFunction
      ? this._callersIndex.getCallers(this.selectedFunction.addr)
      : [];
    var htmlText = renderDecompileHtml(
      this.detailCode,
      nameToAddr,
      this.host,
      resolveOpts
    );
    return html`
      ${this._renderXrefs(callees, callers)}
      <div class="detail-output" @click=${this._onDetailClick}>${unsafeHTML(htmlText)}</div>
    `;
  }

  render() {
    return html`
      ${this.status === "loading"
        ? html`<div class="status">${this.progressDetail || "Loading Pyre..."}</div>`
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
                    <span class="meta">${this.progressDetail}${this.displayedCount !== this.functions.length ? " · " + this.displayedCount.toLocaleString() + " shown" : ""}</span>
                  </div>
                  <div class="list-shell">
                    <div class="list-head">
                      ${this._sortLabel("addr", "Address")}
                      ${this._sortLabel("name", "Function")}
                      ${this._sortLabel("size", "Size")}
                    </div>
                    <div class="list-body">
                      <div class="virtual-mount" ${ref(this._virtualMountRef)}></div>
                    </div>
                  </div>
                </div>
                <aside class="detail-pane" aria-label="Decompiled function">
                  <div class="detail-header">
                    <span>Ghidra pseudo-C</span>
                    <span class="detail-hint">Click a call or xref to follow · Back returns</span>
                  </div>
                  <div class="detail-body">
                    ${this.selectedFunction
                      ? this.detailLoading
                        ? html`<div class="detail-status">Decompiling ${this.selectedFunction.name}...</div>`
                        : this.detailError
                          ? html`
                              <div class="detail-status is-error">${this.detailError}</div>
                              <button type="button" class="detail-retry" @click=${this._retryDecompile}>Retry</button>
                            `
                          : this._renderDecompileOutput()
                      : html`<div class="detail-status">Select a function to decompile.</div>`}
                  </div>
                </aside>
              </div>
            </div>
          `
        : nothing}
    `;
  }
}

customElements.define("pyre-viewer", PyreViewerElement);
