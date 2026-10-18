import { buildDiscHighlightPayload, matchesPsxDisc } from "../../psx-image.js";
import { destroyPsxDiscView, mountPsxDiscView } from "./view.js";

export function computeHexHighlights(ctx, host) {
  if (!ctx || !host || !host.api) return null;
  var payload = buildDiscHighlightPayload(ctx.bytes);
  if (!payload || !payload.regions.length) {
    host.api.clearHexHighlights(ctx.path);
    return null;
  }
  host.api.setHexHighlights(ctx.path, payload);
  return payload;
}

export default {
  id: "psx-disc",
  title: "Disc",
  order: 17,

  matches: function (ctx) {
    return matchesPsxDisc(ctx);
  },

  activate: function (ctx, panel, host) {
    computeHexHighlights(ctx, host);
    panel._psxDisc = mountPsxDiscView(ctx, panel, host);
  },

  deactivate: function (panel) {
    destroyPsxDiscView(panel);
  },

  computeHexHighlights: computeHexHighlights
};
