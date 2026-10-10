import "./components/r2-viewer.js";
import "./components/cfg-graph.js";
import "./plugin.css";
import { isRadare2Binary } from "./match.js";

var LOG_PREFIX = "[file-lab:r2]";

export default {
  id: "r2",
  title: "R2",
  order: 35,

  matches(ctx) {
    var matched = isRadare2Binary(ctx);
    console.log(LOG_PREFIX, "matches", {
      filename: ctx && ctx.filename,
      size: ctx && ctx.bytes && ctx.bytes.length,
      matched: matched
    });
    return matched;
  },

  activate(ctx, panel, host) {
    var workerUrl = host.resolveAsset("./r2-worker.js");
    console.log(LOG_PREFIX, "activate", {
      filename: ctx && ctx.filename,
      size: ctx && ctx.bytes && ctx.bytes.length,
      workerUrl: workerUrl,
      crossOriginIsolated: globalThis.crossOriginIsolated
    });
    panel.innerHTML = "";
    var viewer = document.createElement("r2-viewer");
    viewer.host = host;
    panel.appendChild(viewer);
    if (typeof viewer.loadFile === "function") {
      viewer.loadFile(ctx.filename, ctx.bytes, workerUrl);
    } else {
      console.warn(LOG_PREFIX, "activate: r2-viewer element missing or loadFile unavailable");
    }
    panel._r2Viewer = viewer;
  },

  deactivate(panel) {
    console.log(LOG_PREFIX, "deactivate");
    panel._r2Viewer = null;
    panel.innerHTML = "";
  }
};
