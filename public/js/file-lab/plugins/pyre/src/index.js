import "./components/pyre-viewer.js";
import "./plugin.css";
import { isPyreBinary } from "./match.js";

var LOG_PREFIX = "[file-lab:pyre]";

export default {
  id: "pyre",
  title: "Pyre",
  order: 36,

  matches(ctx) {
    var matched = isPyreBinary(ctx);
    console.log(LOG_PREFIX, "matches", {
      filename: ctx && ctx.filename,
      size: ctx && ctx.bytes && ctx.bytes.length,
      matched: matched
    });
    return matched;
  },

  activate(ctx, panel, host) {
    var workerUrl = host.resolveAsset("./pyre-worker.js");
    console.log(LOG_PREFIX, "activate", {
      filename: ctx && ctx.filename,
      size: ctx && ctx.bytes && ctx.bytes.length,
      workerUrl: workerUrl
    });
    panel.innerHTML = "";
    var viewer = document.createElement("pyre-viewer");
    viewer.host = host;
    panel.appendChild(viewer);
    if (typeof viewer.loadFile === "function") {
      viewer.loadFile(ctx.filename, ctx.bytes, workerUrl);
    } else {
      console.warn(LOG_PREFIX, "activate: pyre-viewer element missing or loadFile unavailable");
    }
    panel._pyreViewer = viewer;
  },

  deactivate(panel) {
    console.log(LOG_PREFIX, "deactivate");
    panel._pyreViewer = null;
    panel.innerHTML = "";
  }
};
