import { declarativeMatch, shouldAttemptLoad, shouldAttemptLoadForContext } from "./plugin-match.js";
import { loadUserPluginEntries } from "./plugin-install.js";
import {
  clearHexHighlights,
  getHexHighlights,
  onHexHighlightsChange,
  setHexHighlights
} from "./hex-highlights.js";
import { escapeHtml, formatSize, renderNotice } from "./util.js";
import { getFileRecord, getPluginData, setPluginData } from "./plugin-state.js";

var DEFAULT_CONFIG_URL = "/public/js/file-lab/plugins.json";

function resolvePluginBase(entry) {
  if (entry.base) {
    return entry.base.endsWith("/") ? entry.base : entry.base + "/";
  }
  var module = entry.module || "";
  var idx = module.lastIndexOf("/");
  return idx >= 0 ? module.slice(0, idx + 1) : "/";
}

function resolveAssetUrl(base, path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return path;
  return base + path.replace(/^\.\//, "");
}

function normalizeEntry(entry) {
  var base = resolvePluginBase(entry);
  return {
    id: entry.id,
    title: entry.title || entry.id,
    module: entry.module,
    base: base,
    wasm: resolveAssetUrl(base, entry.wasm || null),
    css: resolveAssetUrl(base, entry.css || null),
    match: entry.match || null,
    preload: entry.preload === true,
    enabled: entry.enabled !== false,
    order: typeof entry.order === "number" ? entry.order : 100,
    source: entry.source || null,
    userInstalled: entry.userInstalled === true
  };
}

function mergePluginEntries(builtIn, userInstalled) {
  var merged = builtIn.slice();
  userInstalled.forEach(function (entry) {
    var index = merged.findIndex(function (item) {
      return item.id === entry.id;
    });
    if (index >= 0) {
      merged[index] = entry;
    } else {
      merged.push(entry);
    }
  });
  merged.sort(function (a, b) {
    return a.order - b.order;
  });
  return merged;
}

async function loadStylesheet(url) {
  if (!url || document.querySelector('link[data-rr-file-lab-plugin-css="' + url + '"]')) return;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  link.setAttribute("data-rr-file-lab-plugin-css", url);
  document.head.appendChild(link);
}

async function loadWasm(url, imports) {
  var response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch WASM: " + url);
  var result = await WebAssembly.instantiateStreaming(response, imports || {});
  return result.instance;
}

function createHostApi(navigation, pluginId, fileKey) {
  var api = {
    escapeHtml: escapeHtml,
    formatSize: formatSize,
    renderNotice: renderNotice,
    loadWasm: loadWasm,
    setHexHighlights: setHexHighlights,
    getHexHighlights: getHexHighlights,
    clearHexHighlights: clearHexHighlights,
    onHexHighlightsChange: onHexHighlightsChange
  };

  if (fileKey) {
    api.fileKey = fileKey;
    api.getSharedState = function () {
      return getFileRecord(fileKey);
    };
    api.getPluginState = function (sourcePluginId) {
      return getPluginData(fileKey, sourcePluginId || pluginId);
    };
    api.setPluginState = function (data) {
      return setPluginData(fileKey, pluginId, data);
    };
  }

  if (navigation && pluginId) {
    api.pushDetailView = function (options) {
      return navigation.pushDetailView(pluginId, options || {});
    };
    api.popDetailView = function () {
      return navigation.popDetailView(pluginId);
    };
    api.clearDetailViews = function () {
      return navigation.clearDetailViews(pluginId);
    };
  }

  return api;
}

function createPluginHost(entry, runtime, navigation, ctx) {
  var fileKey = ctx && ctx.fileKey ? ctx.fileKey : null;
  return {
    config: entry,
    baseUrl: entry.base,
    fileKey: fileKey,
    resolveAsset: function (path) {
      return resolveAssetUrl(entry.base, path);
    },
    wasm: runtime.wasm,
    api: createHostApi(navigation, entry.id, fileKey)
  };
}

export class PluginRegistry {
  constructor(configUrl, navigation) {
    this.configUrl = configUrl || DEFAULT_CONFIG_URL;
    this.navigation = navigation || null;
    this.builtInEntries = [];
    this.entries = [];
    this.loaded = new Map();
    this.hostApi = createHostApi();
  }

  async init() {
    var response = await fetch(this.configUrl);
    if (!response.ok) throw new Error("Failed to load File Lab plugin config");
    var config = await response.json();
    this.builtInEntries = (config.plugins || []).map(normalizeEntry).filter(function (entry) {
      return entry.id && entry.module;
    });
    this.reloadFromStorage();

    var preloadTasks = this.entries.filter(shouldAttemptLoad).map(function (entry) {
      return this.loadPlugin(entry.id).catch(function (err) {
        console.error("File Lab failed to preload plugin", entry.id, err);
      });
    }, this);

    await Promise.all(preloadTasks);
  }

  getEntry(id) {
    return this.entries.find(function (entry) {
      return entry.id === id;
    }) || null;
  }

  setEntries(entries) {
    this.entries = entries.slice().sort(function (a, b) {
      return a.order - b.order;
    });
    this.loaded.clear();
  }

  reloadFromStorage() {
    var userInstalled = loadUserPluginEntries().map(normalizeEntry).filter(function (entry) {
      return entry.id && entry.module;
    });
    this.setEntries(mergePluginEntries(this.builtInEntries, userInstalled));
  }

  async registerUserPlugin(entry) {
    this.reloadFromStorage();
    if (entry.preload || (entry.match && entry.match.always)) {
      await this.loadPlugin(entry.id).catch(function (err) {
        console.error("File Lab failed to preload installed plugin", entry.id, err);
      });
    }
  }

  async loadPlugin(id) {
    if (this.loaded.has(id)) return this.loaded.get(id);

    var entry = this.getEntry(id);
    if (!entry || entry.enabled === false) return null;

    if (entry.css) await loadStylesheet(entry.css);

    var module = await import(entry.module);
    var pluginExport = module.default || module;
    var runtime = {
      entry: entry,
      plugin: pluginExport,
      wasm: null
    };

    if (entry.wasm) {
      runtime.wasm = await loadWasm(entry.wasm, pluginExport.wasmImports || {});
    }

    if (typeof pluginExport.init === "function") {
      await pluginExport.init(createPluginHost(entry, runtime, this.navigation));
    }

    this.loaded.set(id, runtime);
    return runtime;
  }

  async evaluatePlugin(entry, ctx) {
    if (!shouldAttemptLoadForContext(entry, ctx)) return false;

    var runtime;
    try {
      runtime = await this.loadPlugin(entry.id);
    } catch (err) {
      console.error("File Lab failed to load plugin", entry.id, err);
      return false;
    }

    if (!runtime) return false;

    if (typeof runtime.plugin.matches === "function") {
      var result = runtime.plugin.matches(ctx);
      return result && typeof result.then === "function" ? await result : !!result;
    }

    return declarativeMatch(entry.match, ctx);
  }

  async getMatchingPlugins(ctx) {
    var matches = [];

    for (var i = 0; i < this.entries.length; i++) {
      var entry = this.entries[i];
      if (await this.evaluatePlugin(entry, ctx)) {
        matches.push(entry);
      }
    }

    return matches;
  }

  async activatePlugin(id, ctx, panel) {
    var runtime = await this.loadPlugin(id);
    if (!runtime || typeof runtime.plugin.activate !== "function") return;

    panel.innerHTML = "";
    var host = createPluginHost(runtime.entry, runtime, this.navigation, ctx);
    var result = runtime.plugin.activate(ctx, panel, host, this);

    if (result && typeof result.then === "function") {
      await result;
    }
  }

  async deactivatePlugin(id, panel) {
    var runtime = this.loaded.get(id);
    if (!runtime || typeof runtime.plugin.deactivate !== "function") return;

    var result = runtime.plugin.deactivate(panel, createPluginHost(runtime.entry, runtime, this.navigation));

    if (result && typeof result.then === "function") {
      await result;
    }
  }
}
