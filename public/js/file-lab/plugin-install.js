var USER_PLUGINS_KEY = "rr-file-lab-user-plugins";

function resolveAssetUrl(base, path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return path;
  return base + path.replace(/^\.\//, "");
}

function manifestBaseUrl(manifestUrl) {
  return manifestUrl.slice(0, manifestUrl.lastIndexOf("/") + 1);
}

export function loadUserPluginEntries() {
  if (!window.localStorage) return [];
  try {
    var raw = localStorage.getItem(USER_PLUGINS_KEY);
    var parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("File Lab failed to read user plugins", err);
    return [];
  }
}

export function saveUserPluginEntries(entries) {
  if (!window.localStorage) return;
  localStorage.setItem(USER_PLUGINS_KEY, JSON.stringify(entries));
}

export function normalizeRemoteManifest(manifest, manifestUrl) {
  if (!manifest || !manifest.id || !manifest.module) {
    throw new Error("Manifest must include id and module");
  }

  var base = manifest.base || manifestBaseUrl(manifestUrl);
  if (!base.endsWith("/")) base += "/";

  return {
    id: manifest.id,
    title: manifest.title || manifest.id,
    module: resolveAssetUrl(base, manifest.module),
    base: base,
    wasm: manifest.wasm ? resolveAssetUrl(base, manifest.wasm) : null,
    css: manifest.css ? resolveAssetUrl(base, manifest.css) : null,
    match: manifest.match || null,
    preload: manifest.preload === true,
    enabled: manifest.enabled !== false,
    order: typeof manifest.order === "number" ? manifest.order : 500,
    source: manifestUrl,
    userInstalled: true
  };
}

export async function fetchPluginManifest(manifestUrl) {
  var trimmed = String(manifestUrl || "").trim();
  if (!trimmed) throw new Error("Manifest URL is required");

  var response = await fetch(trimmed);
  if (!response.ok) {
    throw new Error("Failed to fetch plugin manifest (" + response.status + ")");
  }

  var manifest = await response.json();
  return normalizeRemoteManifest(manifest, trimmed);
}

export function addUserPluginEntry(entry) {
  var entries = loadUserPluginEntries();
  var index = entries.findIndex(function (item) {
    return item.id === entry.id;
  });

  if (index >= 0) {
    entries[index] = entry;
  } else {
    entries.push(entry);
  }

  saveUserPluginEntries(entries);
  return entries;
}

export function removeUserPluginEntry(id) {
  var entries = loadUserPluginEntries().filter(function (item) {
    return item.id !== id;
  });
  saveUserPluginEntries(entries);
  return entries;
}
