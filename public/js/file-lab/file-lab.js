import { PluginRegistry } from "./plugin-registry.js";
import {
  addUserPluginEntry,
  fetchPluginManifest,
  loadUserPluginEntries,
  removeUserPluginEntry
} from "./plugin-install.js";
import {
  base64ToBytes,
  bytesToBase64,
  computeFileKey,
  createFileContext,
  formatSize,
  escapeHtml
} from "./util.js";

var STORAGE_KEY = "rr-file-lab-session-v1";
var SAVE_DEBOUNCE_MS = 400;

var state = {
  open: false,
  minimized: false,
  settingsOpen: false,
  view: "tree",
  activePluginId: "hex",
  matchingPlugins: [],
  files: new Map(),
  tree: [],
  selectedPath: null,
  storageWarning: null,
  fileDetailHeader: null,
  detailHeaderStack: []
};

/** Full-page app at /file-lab/ (no site chrome). */
var isAppPage = false;

var els = {};
var saveTimer = null;
var activePanel = null;

var pluginNavigation = {
  pushDetailView: function (pluginId, options) {
    if (state.view !== "detail" || state.activePluginId !== pluginId) return false;
    state.detailHeaderStack.push({
      pluginId: pluginId,
      title: options && options.title ? String(options.title) : "",
      subtitle: options && options.subtitle ? String(options.subtitle) : "",
      onPop: options && typeof options.onPop === "function" ? options.onPop : null
    });
    updateDetailHeaderDisplay();
    return true;
  },

  popDetailView: function (pluginId) {
    if (!state.detailHeaderStack.length) return false;
    var top = state.detailHeaderStack[state.detailHeaderStack.length - 1];
    if (top.pluginId !== pluginId) return false;
    state.detailHeaderStack.pop();
    updateDetailHeaderDisplay();
    return true;
  },

  clearDetailViews: function (pluginId) {
    if (!state.detailHeaderStack.length) return;
    state.detailHeaderStack = state.detailHeaderStack.filter(function (frame) {
      return frame.pluginId !== pluginId;
    });
    updateDetailHeaderDisplay();
  }
};

var registry = new PluginRegistry(undefined, pluginNavigation);

function schedulePersist() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(persistSession, SAVE_DEBOUNCE_MS);
}

function showStorageNotice(message) {
  state.storageWarning = message;
  if (!els.storageNotice) return;
  els.storageNotice.hidden = false;
  els.storageNotice.textContent = message;
}

function clearStorageNotice() {
  state.storageWarning = null;
  if (!els.storageNotice) return;
  els.storageNotice.hidden = true;
  els.storageNotice.textContent = "";
}

function persistSession() {
  if (!window.localStorage) return;

  var payload = {
    version: 2,
    view: state.view,
    activePluginId: state.activePluginId,
    selectedPath: state.selectedPath,
    files: []
  };

  state.files.forEach(function (file, path) {
    payload.files.push({
      path: path,
      name: file.name,
      size: file.size,
      data: bytesToBase64(file.data)
    });
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    clearStorageNotice();
  } catch (err) {
    if (err && err.name === "QuotaExceededError") {
      showStorageNotice(
        "Browser storage is full. Files stay available this session, but may not restore on your next visit. Remove some files or clear other site data."
      );
    } else {
      console.error("File Lab failed to save session", err);
    }
  }

  updateTriggerState();
}

function loadSession() {
  if (!window.localStorage) return;

  var raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    var payload = JSON.parse(raw);
    if (!payload || !Array.isArray(payload.files)) return;

    state.files.clear();
    payload.files.forEach(function (entry) {
      if (!entry || !entry.path || !entry.data) return;
      state.files.set(entry.path, {
        name: entry.name || entry.path.split("/").pop(),
        path: entry.path,
        size: entry.size || 0,
        data: base64ToBytes(entry.data)
      });
    });

    state.activePluginId = payload.activePluginId || payload.activeTab || "hex";
    state.selectedPath = payload.selectedPath && state.files.has(payload.selectedPath)
      ? payload.selectedPath
      : null;
    state.view = payload.view === "detail" && state.selectedPath ? "detail" : "tree";

    rebuildTree();
    updateView();
    if (state.view === "detail") {
      renderDetail();
    } else {
      renderTree();
    }
    updateTriggerState();
  } catch (err) {
    console.error("File Lab failed to restore session", err);
  }
}

function updateTriggerState() {
  if (!els.trigger) return;
  var hasFiles = state.files.size > 0;
  els.trigger.classList.toggle("has-session", hasFiles || state.minimized);
  els.trigger.classList.toggle("is-minimized", state.minimized);
  els.trigger.setAttribute("aria-expanded", state.open ? "true" : "false");
}

function readAllDirectoryEntries(reader) {
  return new Promise(function (resolve, reject) {
    var entries = [];

    function readBatch() {
      reader.readEntries(function (batch) {
        if (!batch.length) {
          resolve(entries);
          return;
        }
        entries = entries.concat(Array.prototype.slice.call(batch));
        readBatch();
      }, reject);
    }

    readBatch();
  });
}

function traverseEntry(entry, basePath) {
  basePath = basePath || "";

  if (entry.isFile) {
    return new Promise(function (resolve, reject) {
      entry.file(function (file) {
        resolve([{ file: file, path: basePath + file.name }]);
      }, reject);
    });
  }

  if (entry.isDirectory) {
    var dirPath = basePath + entry.name + "/";
    var reader = entry.createReader();
    return readAllDirectoryEntries(reader).then(function (entries) {
      return Promise.all(entries.map(function (child) {
        return traverseEntry(child, dirPath);
      })).then(function (nested) {
        return nested.reduce(function (acc, list) {
          return acc.concat(list);
        }, []);
      });
    });
  }

  return Promise.resolve([]);
}

function collectDroppedItems(dataTransfer) {
  var items = dataTransfer.items;
  if (items && items.length) {
    var entryPromises = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.kind !== "file") continue;
      var entry = item.webkitGetAsEntry && item.webkitGetAsEntry();
      if (entry) {
        entryPromises.push(traverseEntry(entry, ""));
      } else {
        var file = item.getAsFile();
        if (file) {
          entryPromises.push(Promise.resolve([{ file: file, path: file.name }]));
        }
      }
    }
    if (entryPromises.length) {
      return Promise.all(entryPromises).then(function (groups) {
        return groups.reduce(function (acc, list) {
          return acc.concat(list);
        }, []);
      });
    }
  }

  var files = dataTransfer.files;
  var plain = [];
  for (var j = 0; j < files.length; j++) {
    plain.push({ file: files[j], path: files[j].name });
  }
  return Promise.resolve(plain);
}

function readFileAsUint8Array(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(new Uint8Array(reader.result));
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function addFilesToState(entries) {
  return Promise.all(entries.map(function (entry) {
    return readFileAsUint8Array(entry.file).then(function (data) {
      var path = entry.path.replace(/^\/+/, "");
      state.files.set(path, {
        name: entry.file.name,
        path: path,
        size: data.byteLength,
        data: data
      });
    });
  })).then(function () {
    rebuildTree();
    renderTree();
    schedulePersist();
  });
}

function rebuildTree() {
  var root = { name: "", path: "", children: new Map(), files: [] };

  state.files.forEach(function (file, path) {
    var parts = path.split("/");
    var node = root;

    for (var i = 0; i < parts.length - 1; i++) {
      var part = parts[i];
      if (!node.children.has(part)) {
        node.children.set(part, {
          name: part,
          path: parts.slice(0, i + 1).join("/") + "/",
          children: new Map(),
          files: []
        });
      }
      node = node.children.get(part);
    }

    node.files.push(file);
  });

  state.tree = sortTreeNode(root);
}

function sortTreeNode(node) {
  var folders = Array.from(node.children.values()).map(sortTreeNode);
  folders.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var files = node.files.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return {
    name: node.name,
    path: node.path,
    folders: folders,
    files: files
  };
}

function updateSettingsView() {
  if (!els.settings || !els.settingsToggle) return;

  els.settings.hidden = !state.settingsOpen;
  els.settingsToggle.setAttribute("aria-expanded", state.settingsOpen ? "true" : "false");
  els.dialog.classList.toggle("is-settings-open", state.settingsOpen);
}

function openSettings() {
  state.settingsOpen = true;
  updateSettingsView();
}

function closeSettings() {
  state.settingsOpen = false;
  setInstallError("");
  updateSettingsView();
}

function toggleSettings() {
  if (state.settingsOpen) {
    closeSettings();
  } else {
    openSettings();
  }
}

function renderInstalledPlugins() {
  if (!els.installedPlugins) return;

  var entries = loadUserPluginEntries();
  if (!entries.length) {
    els.installedPlugins.innerHTML = "";
    return;
  }

  els.installedPlugins.innerHTML = entries.map(function (entry) {
    return (
      '<li class="rr-file-lab-installed-plugin">' +
      '<span class="rr-file-lab-installed-plugin-title">' + escapeHtml(entry.title || entry.id) + "</span>" +
      '<button type="button" class="rr-file-lab-installed-plugin-remove" data-plugin-id="' + escapeHtml(entry.id) + '" aria-label="Remove ' + escapeHtml(entry.title || entry.id) + ' plugin">Remove</button>' +
      "</li>"
    );
  }).join("");
}

function setInstallError(message) {
  if (!els.installError) return;
  if (!message) {
    els.installError.hidden = true;
    els.installError.textContent = "";
    return;
  }
  els.installError.hidden = false;
  els.installError.textContent = message;
}

async function handleInstallPlugin() {
  var url = els.pluginUrl.value.trim();
  if (!url) {
    setInstallError("Enter a manifest URL first.");
    return;
  }

  setInstallError("");
  els.installButton.disabled = true;

  try {
    var entry = await fetchPluginManifest(url);
    addUserPluginEntry(entry);
    await registry.registerUserPlugin(entry);
    els.pluginUrl.value = "";
    renderInstalledPlugins();
  } catch (err) {
    setInstallError(err && err.message ? err.message : "Failed to install plugin.");
  } finally {
    els.installButton.disabled = false;
  }
}

function handleRemoveInstalledPlugin(id) {
  removeUserPluginEntry(id);
  registry.reloadFromStorage();
  renderInstalledPlugins();
  if (state.view === "detail" && state.selectedPath) {
    renderDetail();
  }
}

function renderTree() {
  if (state.storageWarning && els.storageNotice) {
    els.storageNotice.hidden = false;
    els.storageNotice.textContent = state.storageWarning;
  }

  if (!state.files.size) {
    els.treeWrap.innerHTML = '<div class="rr-file-lab-tree-empty">No files loaded yet. Drop binaries, ROMs, archives, or folders above.</div>';
    return;
  }

  var html = '<ul class="rr-file-lab-tree">' + renderTreeNode(state.tree) + "</ul>";
  els.treeWrap.innerHTML = html;

  els.treeWrap.querySelectorAll("[data-file-path]").forEach(function (button) {
    button.addEventListener("click", function () {
      openFileDetail(button.getAttribute("data-file-path"));
    });
  });
}

function renderTreeNode(node) {
  var html = "";

  node.folders.forEach(function (folder) {
    html += '<li class="rr-file-lab-tree-item">';
    html += '<div class="rr-file-lab-tree-row is-folder"><i class="fa fa-folder" aria-hidden="true"></i><span>' + escapeHtml(folder.name) + "</span></div>";
    html += "<ul>" + renderTreeNode(folder) + "</ul>";
    html += "</li>";
  });

  node.files.forEach(function (file) {
    html += '<li class="rr-file-lab-tree-item">';
    html += '<button type="button" class="rr-file-lab-tree-row" data-file-path="' + escapeHtml(file.path) + '">';
    html += '<i class="fa fa-file" aria-hidden="true"></i>';
    html += "<span>" + escapeHtml(file.name) + "</span>";
    html += '<span class="rr-file-lab-tree-size">' + formatSize(file.size) + "</span>";
    html += "</button></li>";
  });

  return html;
}

async function openFileDetail(path) {
  if (!state.files.has(path)) return;
  state.selectedPath = path;
  state.view = "detail";
  await renderDetail();
  schedulePersist();
}

function backToTree() {
  deactivateCurrentPlugin();
  state.view = "tree";
  state.selectedPath = null;
  state.matchingPlugins = [];
  state.fileDetailHeader = null;
  state.detailHeaderStack = [];
  updateView();
  schedulePersist();
}

function updateDetailHeaderDisplay() {
  if (state.view !== "detail") return;

  var frame = state.detailHeaderStack.length
    ? state.detailHeaderStack[state.detailHeaderStack.length - 1]
    : null;

  if (frame) {
    els.detailName.textContent = frame.title;
    els.detailPath.textContent = frame.subtitle;
    els.back.setAttribute("aria-label", "Back");
    return;
  }

  if (state.fileDetailHeader) {
    els.detailName.textContent = state.fileDetailHeader.name;
    els.detailPath.textContent = state.fileDetailHeader.path;
    els.back.setAttribute("aria-label", "Back to file tree");
  }
}

function handleDetailBack() {
  if (state.detailHeaderStack.length) {
    var frame = state.detailHeaderStack.pop();
    if (typeof frame.onPop === "function") {
      frame.onPop();
    }
    updateDetailHeaderDisplay();
    return;
  }
  backToTree();
}

function updateView() {
  var inDetail = state.view === "detail";
  els.stage.classList.toggle("is-detail", inDetail);
  els.dialog.classList.toggle("is-detail", inDetail);
  els.headerTree.hidden = inDetail;
  els.headerDetail.hidden = !inDetail;
  els.tabs.hidden = !inDetail || !state.matchingPlugins.length;
}

function renderPluginTabs() {
  els.tabs.innerHTML = state.matchingPlugins.map(function (entry) {
    var active = entry.id === state.activePluginId;
    return (
      '<button type="button" class="rr-file-lab-tab' + (active ? " is-active" : "") + '" data-plugin-id="' + escapeHtml(entry.id) + '" role="tab" aria-selected="' + (active ? "true" : "false") + '">' +
      escapeHtml(entry.title) +
      "</button>"
    );
  }).join("");
}

function ensurePluginPanel(pluginId) {
  var panel = els.pluginPanels.querySelector('[data-plugin-id="' + pluginId + '"]');
  if (panel) return panel;

  panel = document.createElement("div");
  panel.className = "rr-file-lab-tab-panel";
  panel.setAttribute("data-plugin-id", pluginId);
  panel.setAttribute("role", "tabpanel");
  els.pluginPanels.appendChild(panel);
  return panel;
}

function deactivateCurrentPlugin() {
  if (!activePanel || !state.activePluginId) return;
  pluginNavigation.clearDetailViews(state.activePluginId);
  registry.deactivatePlugin(state.activePluginId, activePanel);
  activePanel.classList.remove("is-active");
  activePanel = null;
}

async function ensureFileKey(file) {
  if (!file || file.fileKey) return file && file.fileKey;
  file.fileKey = await computeFileKey(file.data);
  return file.fileKey;
}

async function activateCurrentPlugin(file) {
  deactivateCurrentPlugin();

  var panel = ensurePluginPanel(state.activePluginId);
  panel.classList.add("is-active");

  els.pluginPanels.querySelectorAll(".rr-file-lab-tab-panel").forEach(function (node) {
    node.classList.toggle("is-active", node === panel);
  });

  activePanel = panel;
  await ensureFileKey(file);
  var ctx = createFileContext(file);
  await registry.activatePlugin(state.activePluginId, ctx, panel);
}

async function renderDetail() {
  var file = state.files.get(state.selectedPath);
  if (!file) return;

  state.detailHeaderStack = [];
  state.fileDetailHeader = {
    name: file.name,
    path: file.path === file.name
      ? formatSize(file.size)
      : file.path + " - " + formatSize(file.size)
  };
  updateDetailHeaderDisplay();

  var ctx = createFileContext(file);
  state.matchingPlugins = await registry.getMatchingPlugins(ctx);

  if (!state.matchingPlugins.length) {
    els.tabs.innerHTML = "";
    els.pluginPanels.innerHTML = '<div class="rr-file-lab-strings-empty">No File Lab plugins matched this file.</div>';
    updateView();
    return;
  }

  var hasActive = state.matchingPlugins.some(function (entry) {
    return entry.id === state.activePluginId;
  });
  if (!hasActive) {
    state.activePluginId = state.matchingPlugins[0].id;
  }

  renderPluginTabs();
  updateView();
  await activateCurrentPlugin(file);
}

function showModal() {
  state.open = true;
  state.minimized = false;
  if (els.backdrop) {
    els.backdrop.classList.add("is-open");
    els.backdrop.setAttribute("aria-hidden", "false");
  }
  document.body.classList.add("rr-file-lab-open");
  updateTriggerState();
}

function hideModal() {
  state.open = false;
  if (els.backdrop) {
    els.backdrop.classList.remove("is-open");
    els.backdrop.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("rr-file-lab-open");
  updateTriggerState();
}

function openModal() {
  showModal();
  if (state.view === "detail" && state.selectedPath) {
    renderDetail();
  }
}

function minimizeModal() {
  state.minimized = true;
  closeSettings();
  if (isAppPage) {
    window.location.href = "/";
  } else {
    hideModal();
  }
  schedulePersist();
}

function closeModal() {
  state.minimized = false;
  closeSettings();
  if (isAppPage) {
    window.location.href = "/";
  } else {
    hideModal();
  }
  schedulePersist();
}

function handleDrop(event) {
  event.preventDefault();
  els.dropzone.classList.remove("is-dragover");

  collectDroppedItems(event.dataTransfer).then(function (entries) {
    if (!entries.length) return;
    return addFilesToState(entries);
  }).catch(function (err) {
    console.error("File Lab failed to read dropped files", err);
  });
}

function handleFileInput(event) {
  var inputFiles = event.target.files;
  if (!inputFiles || !inputFiles.length) return;

  var entries = [];
  for (var i = 0; i < inputFiles.length; i++) {
    var file = inputFiles[i];
    var relativePath = file.webkitRelativePath || file.name;
    entries.push({ file: file, path: relativePath });
  }

  addFilesToState(entries).finally(function () {
    event.target.value = "";
  });
}

function bindEvents() {
  if (els.trigger) {
    els.trigger.addEventListener("click", function (event) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openModal();
    });
  }

  els.minimize.addEventListener("click", minimizeModal);
  els.close.addEventListener("click", closeModal);
  els.settingsToggle.addEventListener("click", toggleSettings);

  if (els.backdrop) {
    els.backdrop.addEventListener("click", function (event) {
      if (event.target === els.backdrop) minimizeModal();
    });
  }

  els.back.addEventListener("click", handleDetailBack);

  document.addEventListener("keydown", function (event) {
    if (!state.open && !isAppPage) return;
    if (event.key === "Escape") {
      if (state.settingsOpen) {
        closeSettings();
      } else if (state.view === "detail") {
        handleDetailBack();
      } else {
        minimizeModal();
      }
    }
  });

  ["dragenter", "dragover"].forEach(function (type) {
    els.dropzone.addEventListener(type, function (event) {
      event.preventDefault();
      els.dropzone.classList.add("is-dragover");
    });
  });

  ["dragleave", "drop"].forEach(function (type) {
    els.dropzone.addEventListener(type, function (event) {
      event.preventDefault();
      if (type === "drop") {
        handleDrop(event);
      } else {
        els.dropzone.classList.remove("is-dragover");
      }
    });
  });

  els.fileInput.addEventListener("change", handleFileInput);

  els.installButton.addEventListener("click", handleInstallPlugin);
  els.pluginUrl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") handleInstallPlugin();
  });
  els.installedPlugins.addEventListener("click", function (event) {
    var button = event.target.closest("[data-plugin-id]");
    if (!button || !button.classList.contains("rr-file-lab-installed-plugin-remove")) return;
    handleRemoveInstalledPlugin(button.getAttribute("data-plugin-id"));
  });

  els.tabs.addEventListener("click", function (event) {
    var tab = event.target.closest("[data-plugin-id]");
    if (!tab || !state.selectedPath) return;
    state.activePluginId = tab.getAttribute("data-plugin-id");
    renderDetail();
    schedulePersist();
  });
}

async function init() {
  isAppPage = document.body.classList.contains("rr-file-lab-page");

  els.trigger = document.getElementById("rr-file-lab-trigger");
  els.backdrop = document.getElementById("rr-file-lab-backdrop");
  els.dialog = document.getElementById("rr-file-lab-dialog");

  if (isAppPage) {
    if (!els.dialog) return;
    document.body.classList.add("rr-file-lab-standalone");
  } else if (!els.trigger || !els.backdrop) {
    return;
  }

  els.headerTree = document.getElementById("rr-file-lab-header-tree");
  els.headerDetail = document.getElementById("rr-file-lab-header-detail");
  els.minimize = document.getElementById("rr-file-lab-minimize");
  els.close = document.getElementById("rr-file-lab-close");
  els.settingsToggle = document.getElementById("rr-file-lab-settings-toggle");
  els.settings = document.getElementById("rr-file-lab-settings");
  els.stage = document.getElementById("rr-file-lab-stage");
  els.dropzone = document.getElementById("rr-file-lab-dropzone");
  els.treeWrap = document.getElementById("rr-file-lab-tree-wrap");
  els.storageNotice = document.getElementById("rr-file-lab-storage-notice");
  els.back = document.getElementById("rr-file-lab-back");
  els.detailName = document.getElementById("rr-file-lab-detail-name");
  els.detailPath = document.getElementById("rr-file-lab-detail-path");
  els.tabs = document.getElementById("rr-file-lab-tabs");
  els.fileInput = document.getElementById("rr-file-lab-file-input");
  els.pluginPanels = document.getElementById("rr-file-lab-plugin-panels");
  els.pluginUrl = document.getElementById("rr-file-lab-plugin-url");
  els.installButton = document.getElementById("rr-file-lab-plugin-install");
  els.installedPlugins = document.getElementById("rr-file-lab-installed-plugins");
  els.installError = document.getElementById("rr-file-lab-install-error");

  bindEvents();

  try {
    await registry.init();
  } catch (err) {
    console.error("File Lab failed to initialize plugins", err);
  }

  renderInstalledPlugins();

  loadSession();
  if (!state.files.size) {
    renderTree();
  }

  if (isAppPage) {
    state.open = true;
    state.minimized = false;
    document.body.classList.add("rr-file-lab-open");
  }

  updateTriggerState();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
