/**
 * Collect byte ranges from Kaitai Struct objects compiled with debug mode.
 */

export function extractRegions(root) {
  var regions = [];
  var visited = new WeakSet();
  walkObject(root, [], regions, visited);
  return regions;
}

function walkObject(obj, pathParts, regions, visited) {
  if (!obj || typeof obj !== "object") return;
  if (visited.has(obj)) return;
  visited.add(obj);

  var debug = obj._debug;
  if (!debug || typeof debug !== "object") return;

  for (var i = 0; i < Object.keys(debug).length; i++) {
    var key = Object.keys(debug)[i];
    var entry = debug[key];
    if (!entry || typeof entry !== "object") continue;

    if (typeof entry.start === "number" && typeof entry.end === "number" && entry.end > entry.start) {
      var depth = pathParts.length + 1;
      regions.push({
        path: pathParts.concat(key).join("."),
        label: key,
        start: entry.start,
        end: entry.end,
        depth: depth,
        colorIndex: depth % 8
      });
    }

    var child = obj[key];
    if (child && typeof child === "object") {
      walkValue(child, pathParts.concat(key), regions, visited);
    }
  }
}

function walkValue(value, pathParts, regions, visited) {
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      walkObject(value[i], pathParts.concat(String(i)), regions, visited);
    }
    return;
  }

  walkObject(value, pathParts, regions, visited);
}
