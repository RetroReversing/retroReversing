import { buildExeHighlightPayload, matchesPsxExe } from "../../psx-image.js";
import { destroyPsxExeView, mountPsxExeView } from "./view.js";

export function computeHexHighlights(ctx, host) {
  if (!ctx || !host || !host.api) return null;
  var payload = buildExeHighlightPayload(ctx.bytes);
  if (!payload || !payload.regions.length) {
    host.api.clearHexHighlights(ctx.path);
    return null;
  }
  host.api.setHexHighlights(ctx.path, payload);
  return payload;
}

export default {
  id: "psx-exe",
  title: "Executable",
  order: 18,

  matches: function (ctx) {
    return matchesPsxExe(ctx);
  },

  activate: function (ctx, panel, host) {
    computeHexHighlights(ctx, host);
    mountPsxExeView(ctx, panel);
  },

  deactivate: function (panel) {
    destroyPsxExeView(panel);
  },

  computeHexHighlights: computeHexHighlights
};
