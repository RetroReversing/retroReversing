var DB_NAME = "rr-file-lab-plugin-state";
var DB_VERSION = 1;
var STORE_NAME = "files";

var dbPromise = null;

function openDb() {
  if (dbPromise) return dbPromise;
  if (!window.indexedDB) {
    dbPromise = Promise.reject(new Error("IndexedDB unavailable"));
    return dbPromise;
  }

  dbPromise = new Promise(function (resolve, reject) {
    var request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = function () {
      reject(request.error || new Error("IndexedDB open failed"));
    };
    request.onsuccess = function () {
      resolve(request.result);
    };
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });

  return dbPromise;
}

function idbGet(store, key) {
  return new Promise(function (resolve, reject) {
    var request = store.get(key);
    request.onsuccess = function () {
      resolve(request.result);
    };
    request.onerror = function () {
      reject(request.error || new Error("IndexedDB get failed"));
    };
  });
}

function idbPut(store, key, value) {
  return new Promise(function (resolve, reject) {
    var request = store.put(value, key);
    request.onsuccess = function () {
      resolve();
    };
    request.onerror = function () {
      reject(request.error || new Error("IndexedDB put failed"));
    };
  });
}

/**
 * @returns {Promise<{ version: number, fileKey: string, updatedAt: number, plugins: Record<string, unknown> } | null>}
 */
export async function getFileRecord(fileKey) {
  if (!fileKey) return null;
  try {
    var db = await openDb();
    var tx = db.transaction(STORE_NAME, "readonly");
    var record = await idbGet(tx.objectStore(STORE_NAME), fileKey);
    if (!record || typeof record !== "object") return null;
    if (!record.plugins || typeof record.plugins !== "object") {
      record.plugins = {};
    }
    return record;
  } catch (err) {
    console.warn("[file-lab:plugin-state] getFileRecord failed", err);
    return null;
  }
}

/**
 * @returns {Promise<unknown | null>}
 */
export async function getPluginData(fileKey, pluginId) {
  if (!fileKey || !pluginId) return null;
  var record = await getFileRecord(fileKey);
  if (!record) return null;
  return record.plugins[pluginId] ?? null;
}

/**
 * Replace one plugin's blob inside the shared per-file record.
 * @returns {Promise<void>}
 */
export async function setPluginData(fileKey, pluginId, data) {
  if (!fileKey || !pluginId) return;

  try {
    var db = await openDb();
    var tx = db.transaction(STORE_NAME, "readwrite");
    var store = tx.objectStore(STORE_NAME);
    var record = await idbGet(store, fileKey);
    if (!record || typeof record !== "object") {
      record = { version: 1, fileKey: fileKey, updatedAt: 0, plugins: {} };
    }
    if (!record.plugins || typeof record.plugins !== "object") {
      record.plugins = {};
    }
    record.version = 1;
    record.fileKey = fileKey;
    record.updatedAt = Date.now();
    record.plugins[pluginId] = data;
    await idbPut(store, fileKey, record);
  } catch (err) {
    console.warn("[file-lab:plugin-state] setPluginData failed", pluginId, err);
  }
}
