import { buildHighlightPayload, matchesSaturnIp } from "./parse.js";
import { destroySaturnIpView, mountSaturnIpView } from "./view.js";

export function computeHexHighlights(ctx, host) {
  if (!ctx || !host || !host.api) return null;
  if (!matchesSaturnIp(ctx)) {
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
  id: "saturn-ip",
  title: "Initial Program",
  order: 15,

  matches: function (ctx) {
    return matchesSaturnIp(ctx);
  },

  activate: function (ctx, panel, host) {
    computeHexHighlights(ctx, host);
    panel._saturnIp = mountSaturnIpView(ctx, panel, host);
  },

  deactivate: function (panel) {
    destroySaturnIpView(panel);
  },

  computeHexHighlights: computeHexHighlights
};
