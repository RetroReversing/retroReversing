import { LitElement, html, css, nothing } from "lit";
import { FORMATS, detectFormat, getFormatById, listFormatsByGroup } from "../format-registry.js";
import { buildParseTree, hasChildren } from "../parse-result-tree.js";
import { getFieldDoc } from "../format-docs.js";
import { parseBytes } from "../parse-format.js";
import { extractRegions } from "../extract-regions.js";

export class KaitaiViewerElement extends LitElement {
  static properties = {
    bytes: { type: Object },
    filename: { type: String },
    selectedFormatId: { type: String },
    status: { type: String },
    errorMessage: { type: String },
    treeNodes: { type: Array },
    expandedIds: { type: Object }
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-height: 0;
      height: 100%;
      color: var(--rr-color-content-text, #333);
      font-size: 13px;
      line-height: 1.45;
    }

    .toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
    }

    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--rr-color-heading, #4f4f4f);
    }

    select {
      min-width: 160px;
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
      color: var(--rr-color-heading, #4f4f4f);
    }

    .tree-wrap {
      flex: 1;
      min-height: 0;
      overflow: auto;
      border: 1px solid var(--rr-color-content-border, #ececec);
      border-radius: 8px;
      background: var(--rr-color-pre-bg, #fff);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
    }

    .tree-header {
      display: grid;
      grid-template-columns: 18px minmax(140px, 1fr) 90px minmax(100px, 0.9fr) minmax(160px, 1.4fr);
      gap: 8px;
      padding: 8px 10px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      color: var(--rr-color-table-head-text, #616161);
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 1;
      background: var(--rr-color-pre-bg, #fff);
    }

    ul.tree {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ul.tree ul.tree {
      padding-left: 16px;
      border-left: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
      margin-left: 10px;
    }

    .tree-row {
      display: grid;
      grid-template-columns: 18px minmax(140px, 1fr) 90px minmax(100px, 0.9fr) minmax(160px, 1.4fr);
      gap: 8px;
      align-items: start;
      padding: 4px 10px;
      border-bottom: 1px solid var(--rr-color-content-border-subtle, #e2e2e2);
    }

    .tree-row:hover {
      background: var(--rr-color-table-hover, #f5f5f5);
    }

    .tree-row.is-branch {
      cursor: pointer;
    }

    .twisty {
      width: 18px;
      color: var(--rr-color-meta, #888);
      user-select: none;
      line-height: 1.4;
    }

    .twisty.is-leaf {
      visibility: hidden;
    }

    .field-name {
      color: var(--rr-color-content-strong, #00577a);
      word-break: break-word;
    }

    .field-type {
      color: var(--rr-color-meta, #888);
      white-space: nowrap;
    }

    .field-value {
      word-break: break-word;
      color: var(--rr-color-content-text, #333);
    }

    .field-value:empty {
      display: none;
    }

    .field-doc {
      color: var(--rr-color-meta, #888);
      font-family: inherit;
      font-size: 11px;
      line-height: 1.35;
      word-break: break-word;
    }

    .field-doc:empty {
      display: none;
    }
  `;

  constructor() {
    super();
    this.bytes = new Uint8Array(0);
    this.filename = "";
    this.filePath = "";
    this.host = null;
    this.selectedFormatId = "";
    this.status = "idle";
    this.errorMessage = "";
    this.treeNodes = [];
    this.expandedIds = {};
  }

  updated(changed) {
    if (changed.has("selectedFormatId") && !changed.has("bytes") && !changed.has("filename")) {
      this.parseCurrent();
    }
  }

  loadFile(filename, bytes) {
    this.filename = filename;
    this.bytes = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
    var detected = detectFormat({ bytes: this.bytes, filename: this.filename });
    this.selectedFormatId = detected ? detected.id : (FORMATS[0] && FORMATS[0].id) || "";
    this.parseCurrent();
  }

  parseCurrent() {
    var format = getFormatById(this.selectedFormatId);
    if (!format || !this.bytes || !this.bytes.length) {
      this.status = "empty";
      this.treeNodes = [];
      this.errorMessage = "";
      this.expandedIds = {};
      this.publishHexHighlights(null);
      return;
    }

    try {
      var parsedResult = parseBytes(this.bytes, this.selectedFormatId, { maxDepth: 20 });
      var formatId = this.selectedFormatId;
      this.treeNodes = buildParseTree(parsedResult.parsed, 20, {
        docLookup: function (path) {
          return getFieldDoc(formatId, path);
        }
      });
      this.expandedIds = {};
      this.status = "ok";
      this.errorMessage = "";
      var regions = extractRegions(parsedResult.parsed);
      for (var i = 0; i < regions.length; i++) {
        regions[i].id = i;
        regions[i].doc = getFieldDoc(formatId, regions[i].path.split("."));
      }
      this.publishHexHighlights({
        formatId: formatId,
        formatTitle: format.title,
        regions: regions
      });
    } catch (err) {
      this.status = "error";
      this.errorMessage = err && err.message ? err.message : String(err);
      this.treeNodes = [];
      this.expandedIds = {};
      this.publishHexHighlights(null);
    }
  }

  publishHexHighlights(payload) {
    if (!this.host || !this.host.api || !this.filePath) return;

    if (!payload || !payload.regions || !payload.regions.length) {
      this.host.api.clearHexHighlights(this.filePath);
      return;
    }

    this.host.api.setHexHighlights(this.filePath, payload);
  }

  onFormatChange(event) {
    this.selectedFormatId = event.target.value;
  }

  toggleNode(nodeId) {
    var next = Object.assign({}, this.expandedIds);
    if (next[nodeId]) {
      delete next[nodeId];
    } else {
      next[nodeId] = true;
    }
    this.expandedIds = next;
  }

  isExpanded(nodeId) {
    return !!this.expandedIds[nodeId];
  }

  renderTreeNode(node, depth) {
    depth = depth || 0;
    var branch = hasChildren(node);
    var expanded = branch && this.isExpanded(node.id);
    var showValue = node.value && (!branch || node.type === "array");

    return html`
      <li>
        <div
          class=${"tree-row" + (branch ? " is-branch" : "")}
          @click=${branch ? function () { this.toggleNode(node.id); } : undefined}
        >
          <span class=${"twisty" + (branch ? "" : " is-leaf")} aria-hidden="true">${branch ? (expanded ? "▾" : "▸") : ""}</span>
          <span class="field-name">${node.label}</span>
          <span class="field-type">${node.type}</span>
          <span class="field-value">${showValue ? node.value : ""}</span>
          <span class="field-doc" title=${node.doc || ""}>${node.doc || ""}</span>
        </div>
        ${branch && expanded
          ? html`<ul class="tree">${node.children.map(function (child) {
            return this.renderTreeNode(child, depth + 1);
          }, this)}</ul>`
          : nothing}
      </li>
    `;
  }

  renderFormatOptions() {
    var groups = listFormatsByGroup();
    var labels = {
      executable: "Executables",
      media: "Media"
    };
    var htmlParts = [];

    groups.forEach(function (entries, group) {
      htmlParts.push(html`
        <optgroup label=${labels[group] || group}>
          ${entries.map(function (entry) {
            return html`<option value=${entry.id}>${entry.title}</option>`;
          })}
        </optgroup>
      `);
    });

    return htmlParts;
  }

  renderDetectedLabel() {
    var detected = detectFormat({ bytes: this.bytes, filename: this.filename });
    if (!detected || detected.id === this.selectedFormatId) {
      return html`<span class="meta">Auto-detected: ${detected ? detected.title : "none"}</span>`;
    }
    return html`<span class="meta">Auto-detected: ${detected.title} (override active)</span>`;
  }

  render() {
    return html`
      <div class="toolbar">
        <label>
          Format
          <select .value=${this.selectedFormatId} @change=${this.onFormatChange}>
            ${this.renderFormatOptions()}
          </select>
        </label>
        ${this.renderDetectedLabel()}
        <span class="meta">${this.bytes ? this.bytes.length : 0} bytes</span>
      </div>

      ${this.status === "error"
        ? html`<div class="status is-error">Parse failed: ${this.errorMessage}</div>`
        : this.status === "empty"
          ? html`<div class="status">Drop a supported binary to inspect its structure.</div>`
          : null}

      <div class="tree-wrap">
        ${this.treeNodes.length
          ? html`
              <div class="tree-header">
                <span></span>
                <span>Field</span>
                <span>Type</span>
                <span>Value</span>
                <span>Doc</span>
              </div>
              <ul class="tree">
                ${this.treeNodes.map(function (node) {
                  return this.renderTreeNode(node, 0);
                }, this)}
              </ul>
            `
          : this.status === "ok"
            ? html`<div class="status">Parsed successfully, but no fields were emitted.</div>`
            : null}
      </div>
    `;
  }
}

if (!customElements.get("kaitai-viewer")) {
  customElements.define("kaitai-viewer", KaitaiViewerElement);
}
