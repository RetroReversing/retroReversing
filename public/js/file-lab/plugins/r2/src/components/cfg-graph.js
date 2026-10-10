import { LitElement, html, css, svg } from "lit";
import { parseCfgGraph, layoutCfgGraph, edgePath } from "../cfg-graph-parse.js";

export class CfgGraphElement extends LitElement {
  static properties = {
    source: { type: String },
    selectedNodeId: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      min-height: 0;
      height: 100%;
    }

    .cfg-shell {
      display: flex;
      flex-direction: column;
      min-height: 0;
      height: 100%;
      gap: 8px;
    }

    .cfg-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-shrink: 0;
      color: var(--rr-color-meta, #888);
      font-size: 12px;
    }

    .cfg-legend {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    .cfg-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .cfg-legend-line {
      width: 18px;
      height: 0;
      border-top: 2px solid var(--rr-color-content-border, #ececec);
    }

    .cfg-legend-line.is-jump {
      border-top-color: var(--rr-color-r2-call, #116329);
    }

    .cfg-legend-line.is-fail {
      border-top-color: var(--rr-color-r2-number, #953800);
      border-top-style: dashed;
    }

    .cfg-scroll {
      flex: 1;
      min-height: 0;
      overflow: auto;
      border: 1px solid var(--rr-color-code-border, #d0d7de);
      border-radius: 8px;
      background:
        linear-gradient(90deg, var(--rr-color-content-border-subtle, #e2e2e2) 1px, transparent 1px) 0 0 / 24px 24px,
        linear-gradient(var(--rr-color-content-border-subtle, #e2e2e2) 1px, transparent 1px) 0 0 / 24px 24px,
        var(--rr-color-code-bg, #f6f8fa);
    }

    .cfg-svg {
      display: block;
      min-width: 100%;
    }

    .cfg-node {
      cursor: pointer;
    }

    .cfg-node rect {
      fill: var(--rr-color-card-bg, #ffffff);
      stroke: var(--rr-color-accent, #2575dc);
      stroke-width: 2;
    }

    .cfg-node.is-selected rect {
      stroke: var(--rr-color-content-link, #0085b6);
      stroke-width: 2.5;
    }

    .cfg-node:hover rect {
      stroke: var(--rr-color-content-link, #0085b6);
    }

    .cfg-node-header {
      fill: var(--rr-color-code-bg, #f6f8fa);
      stroke: none;
    }

    .cfg-node-title {
      fill: var(--rr-color-heading, #4f4f4f);
      font-size: 12px;
      font-weight: 700;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .cfg-node-meta {
      fill: var(--rr-color-meta, #888);
      font-size: 10px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .cfg-node-body {
      fill: var(--rr-color-content-text, #333);
      font-size: 11px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .cfg-edge {
      fill: none;
      stroke-width: 1.75;
    }

    .cfg-edge.is-jump {
      stroke: var(--rr-color-r2-call, #116329);
    }

    .cfg-edge.is-fail {
      stroke: var(--rr-color-r2-number, #953800);
      stroke-dasharray: 6 4;
    }

    .cfg-edge.is-highlight {
      stroke-width: 2.5;
      opacity: 1;
    }

    .cfg-edge.is-dim {
      opacity: 0.18;
    }

    .cfg-empty,
    .cfg-error {
      padding: 12px;
      color: var(--rr-color-meta, #888);
      font-size: 12px;
    }

    .cfg-error {
      color: var(--rr-color-content-text, #333);
    }
  `;

  constructor() {
    super();
    this.source = "";
    this.selectedNodeId = "";
    this._layout = null;
    this._error = "";
    this._markerId = "cfg-arrow-" + Math.random().toString(36).slice(2);
  }

  willUpdate(changed) {
    if (changed.has("source")) {
      this._buildLayout();
    }
  }

  _buildLayout() {
    if (!this.source) {
      this._layout = null;
      this._error = "";
      return;
    }

    try {
      var graph = parseCfgGraph(this.source);
      this._layout = layoutCfgGraph(graph);
      this._error = "";
      if (!this._layout.nodes.length) {
        throw new Error("Graph contains no basic blocks");
      }
    } catch (err) {
      this._layout = null;
      this._error = err && err.message ? err.message : String(err);
    }
  }

  _selectNode(nodeId) {
    this.selectedNodeId = this.selectedNodeId === nodeId ? "" : nodeId;
  }

  _nodeBodyLines(node) {
    var body = String(node.body || "").split("\n").filter(Boolean);
    if (body.length) return body.slice(0, 8);
    if (node.ninstr != null) return [node.ninstr + " instructions"];
    if (node.size) return [node.size + " bytes"];
    return ["Basic block"];
  }

  _edgeClass(edge) {
    var classes = ["cfg-edge", edge.kind === "fail" ? "is-fail" : "is-jump"];
    if (this.selectedNodeId) {
      if (edge.from === this.selectedNodeId || edge.to === this.selectedNodeId) {
        classes.push("is-highlight");
      } else {
        classes.push("is-dim");
      }
    }
    return classes.join(" ");
  }

  _nodeClass(node) {
    var classes = ["cfg-node"];
    if (node.id === this.selectedNodeId) classes.push("is-selected");
    return classes.join(" ");
  }

  _renderSvg(layout) {
    var self = this;
    var nodeById = new Map();
    layout.nodes.forEach(function (node) {
      nodeById.set(node.id, node);
    });

    return svg`
      <svg
        class="cfg-svg"
        width="${layout.width}"
        height="${layout.height}"
        viewBox="0 0 ${layout.width} ${layout.height}"
        role="img"
        aria-label="Control flow graph"
      >
        <defs>
          <marker id="${this._markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="context-stroke"></path>
          </marker>
        </defs>

        ${layout.edges.map(function (edge) {
          var fromNode = nodeById.get(edge.from);
          var toNode = nodeById.get(edge.to);
          if (!fromNode || !toNode) return null;
          return svg`
            <path
              class="${self._edgeClass(edge)}"
              style="marker-end: url(#${self._markerId})"
              d="${edgePath(fromNode, toNode, edge.kind)}"
            ></path>
          `;
        })}

        ${layout.nodes.map(function (node) {
          var lines = self._nodeBodyLines(node);
          return svg`
            <g
              class="${self._nodeClass(node)}"
              transform="translate(${node.x}, ${node.y})"
              @click=${function () { self._selectNode(node.id); }}
            >
              <rect width="${node.width}" height="${node.height}" rx="10" ry="10"></rect>
              <rect class="cfg-node-header" x="1" y="1" width="${node.width - 2}" height="28" rx="9" ry="9"></rect>
              <text class="cfg-node-title" x="12" y="19">${node.title}</text>
              ${node.size
                ? svg`<text class="cfg-node-meta" x="${node.width - 12}" y="19" text-anchor="end">${node.size}b</text>`
                : null}
              ${lines.map(function (line, index) {
                return svg`<text class="cfg-node-body" x="12" y="${42 + index * 14}">${line}</text>`;
              })}
            </g>
          `;
        })}
      </svg>
    `;
  }

  render() {
    if (this._error) {
      return html`<div class="cfg-error">${this._error}</div>`;
    }

    if (!this._layout) {
      return html`<div class="cfg-empty">No graph data.</div>`;
    }

    var layout = this._layout;

    return html`
      <div class="cfg-shell">
        <div class="cfg-toolbar">
          <span>${layout.nodes.length.toLocaleString()} blocks · ${layout.edges.length.toLocaleString()} edges</span>
          <div class="cfg-legend" aria-hidden="true">
            <span class="cfg-legend-item"><span class="cfg-legend-line is-jump"></span> jump</span>
            <span class="cfg-legend-item"><span class="cfg-legend-line is-fail"></span> branch</span>
          </div>
        </div>
        <div class="cfg-scroll">
          ${this._renderSvg(layout)}
        </div>
      </div>
    `;
  }
}

customElements.define("cfg-graph", CfgGraphElement);
