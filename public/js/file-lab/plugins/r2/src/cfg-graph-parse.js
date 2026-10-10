import { extractJsonPayload } from "./json-extract.js";

function stripAnsi(text) {
  return String(text || "")
    .replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\u009b[0-?]*[ -/]*[@-~]/g, "")
    .replace(/([^\u001b]|^)\[(\d{1,3}(?:;\d{1,3})*)m/g, "$1");
}

function formatAddress(value) {
  var addr = normalizeAddr(value);
  if (addr == null) return "0x00000000";
  return "0x" + addr.toString(16).toUpperCase().padStart(8, "0");
}

function normalizeAddr(value) {
  if (value == null || value === "") return null;
  if (typeof value === "string") {
    var trimmed = value.trim();
    if (/^0x/i.test(trimmed)) {
      var hex = parseInt(trimmed, 16);
      return Number.isFinite(hex) ? hex >>> 0 : null;
    }
    var parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed >>> 0 : null;
  }
  var num = Number(value);
  if (!Number.isFinite(num)) return null;
  if (num >= 0xffffffffffff0000) return null;
  return num >>> 0;
}

function idFromAddr(value) {
  var addr = normalizeAddr(value);
  return addr == null ? null : String(addr);
}

function normalizeBody(body) {
  return stripAnsi(body).replace(/\r/g, "").trim();
}

function previewBody(body, maxLines) {
  var lines = normalizeBody(body).split("\n").filter(Boolean);
  if (lines.length <= maxLines) return lines.join("\n");
  return lines.slice(0, maxLines).join("\n") + "\n…";
}

function bodyFromBlock(block) {
  if (!block || !Array.isArray(block.ops)) return "";
  return block.ops.map(function (op) {
    if (!op) return "";
    return String(op.disasm || op.opcode || op.type || "").trim();
  }).filter(Boolean).slice(0, 10).join("\n");
}

function looksLikeBasicBlock(entry) {
  if (!entry || entry.addr == null) return false;
  return entry.jump != null
    || entry.fail != null
    || entry.size != null
    || Array.isArray(entry.ops);
}

function looksLikeVisualGraphNode(entry) {
  if (!entry) return false;
  return (entry.title != null || entry.body != null)
    && entry.addr == null
    && entry.jump == null
    && entry.fail == null;
}

function graphFromBasicBlocks(blocks) {
  var nodes = [];
  var edges = [];
  var addrSet = new Set();

  blocks.forEach(function (bb) {
    if (bb == null || bb.addr == null) return;
    var id = idFromAddr(bb.addr);
    if (!id) return;
    addrSet.add(id);
    nodes.push({
      id: id,
      addr: normalizeAddr(bb.addr) || 0,
      title: formatAddress(bb.addr),
      body: previewBody(bodyFromBlock(bb), 10),
      size: Number(bb.size) || 0,
      ninstr: bb.ninstr != null ? bb.ninstr : (Array.isArray(bb.ops) ? bb.ops.length : null)
    });
  });

  blocks.forEach(function (bb) {
    if (bb == null || bb.addr == null) return;
    var from = idFromAddr(bb.addr);
    if (!from) return;
    var jumpId = idFromAddr(bb.jump);
    var failId = idFromAddr(bb.fail);
    if (jumpId) {
      edges.push({ from: from, to: jumpId, kind: "jump" });
      addrSet.add(jumpId);
    }
    if (failId && failId !== jumpId) {
      edges.push({ from: from, to: failId, kind: "fail" });
      addrSet.add(failId);
    }
    var switchData = bb.switch_op || bb.switchop;
    if (switchData && Array.isArray(switchData.cases)) {
      switchData.cases.forEach(function (caseOp, index) {
        if (!caseOp) return;
        var caseId = idFromAddr(caseOp.jump || caseOp.addr || caseOp.to);
        if (!caseId) return;
        edges.push({ from: from, to: caseId, kind: index ? "fail" : "jump" });
        addrSet.add(caseId);
      });
    }
  });

  addrSet.forEach(function (id) {
    if (!nodes.some(function (node) { return node.id === id; })) {
      nodes.push({
        id: id,
        addr: normalizeAddr(id) || 0,
        title: formatAddress(id),
        body: "",
        size: 0,
        ninstr: null
      });
    }
  });

  nodes.sort(function (a, b) { return a.addr - b.addr; });
  return { nodes: nodes, edges: edges };
}

function graphFromNodeList(list) {
  var nodes = [];
  var edges = [];

  list.forEach(function (entry, index) {
    if (!entry) return;
    var id = entry.id != null ? String(entry.id) : (entry.addr != null ? String(entry.addr) : String(index));
    var addr = entry.addr != null ? Number(entry.addr) : (entry.offset != null ? Number(entry.offset) : Number(id) || 0);
    var rawBody = entry.body || entry.label || bodyFromBlock(entry) || "";
    if (rawBody.indexOf("base64:") === 0) {
      try {
        rawBody = atob(rawBody.slice(7));
      } catch (_) {
        /* keep raw */
      }
    }
    nodes.push({
      id: id,
      addr: addr,
      title: entry.title ? String(entry.title) : formatAddress(addr),
      body: previewBody(rawBody, 12),
      size: entry.size != null ? Number(entry.size) : 0,
      ninstr: entry.ninstr != null ? entry.ninstr : null
    });

    var nodeEdges = entry.edges || entry.out || entry.targets || [];
    if (Array.isArray(nodeEdges)) {
      nodeEdges.forEach(function (target, edgeIndex) {
        if (target == null) return;
        var to = typeof target === "object"
          ? String(target.id != null ? target.id : (target.addr != null ? target.addr : target.to))
          : String(target);
        edges.push({
          from: id,
          to: to,
          kind: edgeIndex === 0 ? "jump" : "fail"
        });
      });
    }
  });

  return { nodes: nodes, edges: edges };
}

function graphFromNodesEdges(nodeList, edgeList) {
  var graph = graphFromNodeList(nodeList);
  if (!Array.isArray(edgeList) || !edgeList.length) return graph;

  edgeList.forEach(function (edge) {
    if (!edge) return;
    var from = String(edge.from != null ? edge.from : (edge.source != null ? edge.source : edge.u));
    var to = String(edge.to != null ? edge.to : (edge.target != null ? edge.target : edge.v));
    if (!from || !to) return;
    if (!graph.edges.some(function (item) { return item.from === from && item.to === to; })) {
      graph.edges.push({ from: from, to: to, kind: edge.type || edge.kind || "jump" });
    }
  });

  return graph;
}

export function parseCfgGraph(raw) {
  var data = JSON.parse(extractJsonPayload(raw));

  if (Array.isArray(data)) {
    if (data.length && looksLikeBasicBlock(data[0])) {
      return graphFromBasicBlocks(data);
    }
    if (data.length && looksLikeVisualGraphNode(data[0])) {
      throw new Error("Graph payload used visual node format instead of basic blocks");
    }
    return graphFromNodeList(data);
  }

  if (data.blocks && Array.isArray(data.blocks)) {
    return graphFromBasicBlocks(data.blocks);
  }

  if (data.nodes && Array.isArray(data.nodes)) {
    return graphFromNodesEdges(data.nodes, data.edges);
  }

  if (data.graph && data.graph.nodes) {
    return graphFromNodesEdges(data.graph.nodes, data.graph.edges);
  }

  throw new Error("Unrecognized CFG graph JSON shape");
}

export function layoutCfgGraph(graph) {
  var nodes = graph.nodes.slice();
  var edges = graph.edges.slice();
  if (!nodes.length) {
    return { nodes: [], edges: [], width: 0, height: 0 };
  }

  var nodeById = new Map();
  nodes.forEach(function (node) {
    nodeById.set(node.id, node);
  });

  var incoming = new Map();
  nodes.forEach(function (node) { incoming.set(node.id, 0); });
  edges.forEach(function (edge) {
    if (incoming.has(edge.to)) incoming.set(edge.to, incoming.get(edge.to) + 1);
  });

  var entry = nodes.slice().sort(function (a, b) {
    return (incoming.get(a.id) || 0) - (incoming.get(b.id) || 0) || a.addr - b.addr;
  })[0];

  var layer = new Map();
  var queue = [{ id: entry.id, depth: 0 }];
  var seen = new Set();

  while (queue.length) {
    var item = queue.shift();
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    layer.set(item.id, Math.max(layer.get(item.id) || 0, item.depth));

    edges.filter(function (edge) { return edge.from === item.id; }).forEach(function (edge) {
      queue.push({ id: edge.to, depth: item.depth + 1 });
    });
  }

  nodes.forEach(function (node) {
    if (!layer.has(node.id)) layer.set(node.id, 0);
  });

  var maxLayer = 0;
  layer.forEach(function (value) { maxLayer = Math.max(maxLayer, value); });

  for (var sweep = 0; sweep <= maxLayer; sweep++) {
    edges.forEach(function (edge) {
      var fromLayer = layer.get(edge.from) || 0;
      var toLayer = layer.get(edge.to) || 0;
      if (toLayer <= fromLayer) {
        layer.set(edge.to, fromLayer + 1);
        maxLayer = Math.max(maxLayer, fromLayer + 1);
      }
    });
  }

  var layers = [];
  for (var i = 0; i <= maxLayer; i++) layers.push([]);

  nodes.forEach(function (node) {
    layers[layer.get(node.id) || 0].push(node);
  });

  layers.forEach(function (row) {
    row.sort(function (a, b) { return a.addr - b.addr; });
  });

  var nodeWidth = 280;
  var lineHeight = 14;
  var headerHeight = 34;
  var hGap = 70;
  var vGap = 36;
  var pad = 24;
  var maxCols = 0;

  layers.forEach(function (row) {
    maxCols = Math.max(maxCols, row.length);
    row.forEach(function (node) {
      var lines = normalizeBody(node.body).split("\n").filter(Boolean);
      var visibleLines = Math.min(Math.max(lines.length, 1), 8);
      if (!lines.length && node.ninstr != null) visibleLines = 2;
      node._lineCount = visibleLines;
      node._height = headerHeight + visibleLines * lineHeight + 16;
    });
  });

  var layerHeights = layers.map(function (row) {
    return row.reduce(function (max, node) {
      return Math.max(max, node._height);
    }, headerHeight + lineHeight + 16);
  });

  var maxRowWidth = maxCols * nodeWidth + Math.max(0, maxCols - 1) * hGap;
  var cursorY = pad;

  layers.forEach(function (row, layerIndex) {
    var rowHeight = layerHeights[layerIndex];
    var rowWidth = row.length * nodeWidth + Math.max(0, row.length - 1) * hGap;
    var cursorX = pad + Math.max(0, (maxRowWidth - rowWidth) / 2);

    row.forEach(function (node) {
      node.x = cursorX;
      node.y = cursorY + Math.max(0, (rowHeight - node._height) / 2);
      node.width = nodeWidth;
      node.height = node._height;
      cursorX += nodeWidth + hGap;
    });

    cursorY += rowHeight + vGap;
  });

  var width = pad * 2 + maxRowWidth;
  var height = pad * 2 + layerHeights.reduce(function (sum, rowHeight) {
    return sum + rowHeight;
  }, 0) + Math.max(0, layers.length - 1) * vGap;

  return {
    nodes: nodes,
    edges: edges,
    width: Math.max(width, 320),
    height: Math.max(height, 240)
  };
}

export function edgePath(fromNode, toNode, kind) {
  var x1 = fromNode.x + fromNode.width / 2;
  var y1 = fromNode.y + fromNode.height;
  var x2 = toNode.x + toNode.width / 2;
  var y2 = toNode.y;

  if (Math.abs(x1 - x2) < 1) {
    return "M " + x1 + " " + y1 + " L " + x2 + " " + y2;
  }

  var midY = y1 + Math.max(24, (y2 - y1) * 0.45);
  return "M " + x1 + " " + y1 + " C " + x1 + " " + midY + ", " + x2 + " " + midY + ", " + x2 + " " + y2;
}
