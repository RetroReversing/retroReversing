var SKIP_KEYS = { _io: true, _parent: true, _root: true, _m_: true, _debug: true };

export function buildParseTree(root, maxDepth, options) {
  maxDepth = typeof maxDepth === "number" ? maxDepth : 20;
  options = options || {};
  if (root === null || root === undefined) return [];
  return walkObjectChildren(root, [], 0, maxDepth, new WeakSet(), options);
}

function makeNode(label, type, value, path, children, doc) {
  return {
    id: path.join("."),
    label: label,
    type: type,
    value: value || "",
    doc: doc || "",
    children: children || []
  };
}

function shouldSkipKey(key) {
  if (!key || SKIP_KEYS[key]) return true;
  if (key.indexOf("_m_") === 0 || key.indexOf("_raw_") === 0) return true;
  if (key === "constructor" || key === "_read") return true;
  return false;
}

function collectPropertyNames(value) {
  var names = new Set();

  Object.keys(value).forEach(function (key) {
    if (!shouldSkipKey(key)) names.add(key);
  });

  var proto = Object.getPrototypeOf(value);
  while (proto && proto !== Object.prototype) {
    Object.getOwnPropertyNames(proto).forEach(function (key) {
      if (shouldSkipKey(key)) return;
      var desc = Object.getOwnPropertyDescriptor(proto, key);
      if (!desc) return;
      if (desc.get && typeof desc.get === "function") {
        names.add(key);
      }
    });
    proto = Object.getPrototypeOf(proto);
  }

  return Array.from(names).sort();
}

function readProperty(value, key) {
  var child = value[key];
  if (typeof child === "function") return { kind: "skip" };
  return { kind: "ok", value: child };
}

function lookupDoc(path, options) {
  if (!options || typeof options.docLookup !== "function") return "";
  return options.docLookup(path) || "";
}

function walkField(parent, key, path, depth, maxDepth, seen, options) {
  var child;

  try {
    var read = readProperty(parent, key);
    if (read.kind === "skip") return null;
    child = read.value;
  } catch (err) {
    return makeNode(
      key,
      "error",
      err && err.message ? err.message : String(err),
      path,
      [],
      lookupDoc(path, options)
    );
  }

  return walkValue(child, key, path, depth, maxDepth, seen, options);
}

function walkValue(value, label, path, depth, maxDepth, seen, options) {
  var doc = lookupDoc(path, options);

  if (depth > maxDepth) {
    return makeNode(label, "truncated", "…", path, [], doc);
  }

  if (value === null || value === undefined) {
    return makeNode(label, "null", String(value), path, [], doc);
  }

  var kind = typeof value;
  if (kind === "boolean" || kind === "number" || kind === "string" || kind === "bigint") {
    return makeNode(label, kind, formatScalar(value), path, [], doc);
  }

  if (value instanceof Uint8Array) {
    return makeNode(label, "bytes", formatBytes(value), path, [], doc);
  }

  if (ArrayBuffer.isView(value)) {
    return makeNode(
      label,
      "bytes",
      formatBytes(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)),
      path,
      [],
      doc
    );
  }

  if (Array.isArray(value)) {
    var arrayChildren = [];
    for (var i = 0; i < value.length; i++) {
      arrayChildren.push(walkValue(value[i], String(i), path.concat(String(i)), depth + 1, maxDepth, seen, options));
    }
    return makeNode(label, "array", value.length + " item(s)", path, arrayChildren, doc);
  }

  if (kind === "object") {
    if (seen.has(value)) {
      return makeNode(label, "ref", "[circular]", path, [], doc);
    }
    seen.add(value);
    return makeNode(label, "object", "", path, walkObjectChildren(value, path, depth + 1, maxDepth, seen, options), doc);
  }

  return makeNode(label, kind, String(value), path, [], doc);
}

function walkObjectChildren(value, path, depth, maxDepth, seen, options) {
  var keys = collectPropertyNames(value);
  var nodes = [];

  for (var k = 0; k < keys.length; k++) {
    var key = keys[k];
    var node = walkField(value, key, path.concat(key), depth, maxDepth, seen, options);
    if (node) nodes.push(node);
  }

  return nodes;
}

function formatScalar(value) {
  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
}

function formatBytes(bytes) {
  if (!bytes || !bytes.length) return "empty";
  var preview = Array.from(bytes.slice(0, 16)).map(function (b) {
    return b.toString(16).padStart(2, "0");
  }).join(" ");
  if (bytes.length > 16) preview += " … (" + bytes.length + " bytes)";
  else preview += " (" + bytes.length + " bytes)";
  return preview;
}

export function hasChildren(node) {
  return !!(node && node.children && node.children.length);
}
