import { detectGameBoyMode, matchesGameBoyRom } from "./match.js";

export default {
  id: "gameboy-emulator",
  title: "Emulator",
  order: 30,

  matches(ctx) {
    return matchesGameBoyRom(ctx);
  },

  async activate(ctx, panel, host) {
    var mode = detectGameBoyMode(ctx.bytes);

    panel.innerHTML =
      '<div class="rr-file-lab-plugin-placeholder">' +
      "<h3>" + host.api.escapeHtml(ctx.filename) + "</h3>" +
      "<p>Detected a " + host.api.escapeHtml(mode) + " ROM header.</p>" +
      "<p>This tab is a plugin stub. Drop a WASM core beside <code>index.js</code> in this plugin folder and reference it from <code>plugins.json</code>.</p>" +
      (host.wasm ? "<p>WASM module loaded.</p>" : "") +
      "</div>";
  }
};
