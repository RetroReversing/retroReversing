import { mountStringsView, destroyStringsView } from "./view.js";

export default {
  id: "strings",
  title: "Strings",
  order: 20,

  matches() {
    return true;
  },

  activate(ctx, panel, host) {
    panel._fileLabScroller = mountStringsView(ctx, panel, host);
  },

  deactivate(panel) {
    destroyStringsView(panel);
  }
};
