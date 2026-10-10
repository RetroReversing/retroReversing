/**
 * Shared store for Kaitai-driven byte range highlights in the Hex plugin.
 */

var store = new Map();
var listeners = new Set();

export function setHexHighlights(filePath, data) {
  if (!filePath) return;

  if (!data || !Array.isArray(data.regions) || !data.regions.length) {
    store.delete(filePath);
    notify({ path: filePath, data: null });
    return;
  }

  store.set(filePath, data);
  notify({ path: filePath, data: data });
}

export function getHexHighlights(filePath) {
  if (!filePath) return null;
  return store.get(filePath) || null;
}

export function clearHexHighlights(filePath) {
  if (!filePath) return;
  store.delete(filePath);
  notify({ path: filePath, data: null });
}

export function onHexHighlightsChange(listener) {
  listeners.add(listener);
  return function () {
    listeners.delete(listener);
  };
}

function notify(detail) {
  listeners.forEach(function (listener) {
    listener(detail);
  });
}

export function findRegionAt(regions, offset) {
  if (!regions || !regions.length) return null;

  var best = null;
  for (var i = 0; i < regions.length; i++) {
    var region = regions[i];
    if (offset < region.start || offset >= region.end) continue;
    if (!best || region.end - region.start < best.end - best.start) {
      best = region;
    }
  }

  return best;
}

export function findRegionById(regions, regionId) {
  if (!regions || regionId == null) return null;
  var id = Number(regionId);
  if (!Number.isFinite(id) || id < 0 || id >= regions.length) return null;
  return regions[id];
}
