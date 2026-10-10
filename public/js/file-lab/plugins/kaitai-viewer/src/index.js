import "./components/kaitai-viewer.js";
import "./plugin.css";
import { buildHighlightPayload } from "./parse-format.js";

export async function computeHexHighlights(ctx, host) {
  if (!ctx || !ctx.bytes || !ctx.bytes.length || !host || !host.api) return null;

  try {
    var payload = buildHighlightPayload(ctx.bytes, ctx.filename, null);
    if (!payload || !payload.regions.length) {
      host.api.clearHexHighlights(ctx.path);
      return null;
    }

    host.api.setHexHighlights(ctx.path, payload);
    return payload;
  } catch (err) {
    host.api.clearHexHighlights(ctx.path);
    return null;
  }
}

export default {
  id: "kaitai-viewer",
  title: "Kaitai",
  order: 25,

  matches() {
    return true;
  },

  activate(ctx, panel, host) {
    panel.innerHTML = '<div class="kaitai-viewer-root"><kaitai-viewer></kaitai-viewer></div>';
    var viewer = panel.querySelector("kaitai-viewer");
    if (viewer) {
      viewer.host = host;
      viewer.filePath = ctx.path;
      if (typeof viewer.loadFile === "function") {
        viewer.loadFile(ctx.filename, ctx.bytes);
      }
    }
    panel._kaitaiViewer = viewer;
  },

  deactivate(panel) {
    panel._kaitaiViewer = null;
    panel.innerHTML = "";
  },

  computeHexHighlights: computeHexHighlights
};
