import { buildHighlightPayload, matchesSaturnProgram } from "./parse.js";
import { destroySaturnProgramView, mountSaturnProgramView } from "./view.js";

export function computeHexHighlights(ctx, host) {
  if (!ctx || !host || !host.api) return null;
  if (!matchesSaturnProgram(ctx)) {
    host.api.clearHexHighlights(ctx.path);
    return null;
  }

  var payload = buildHighlightPayload(ctx.bytes);
  if (!payload || !payload.regions.length) {
    host.api.clearHexHighlights(ctx.path);
    return null;
  }

  host.api.setHexHighlights(ctx.path, payload);
  return payload;
}

export default {
  id: "saturn-prog",
  title: "Program",
  order: 16,

  matches: function (ctx) {
    return matchesSaturnProgram(ctx);
  },

  activate: function (ctx, panel, host) {
    computeHexHighlights(ctx, host);
    panel._saturnProg = mountSaturnProgramView(ctx, panel, host);
  },

  deactivate: function (panel) {
    destroySaturnProgramView(panel);
  },

  computeHexHighlights: computeHexHighlights
};
