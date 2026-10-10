function getExtension(filename) {
  var base = String(filename || "").split(/[/\\]/).pop() || "";
  var dot = base.lastIndexOf(".");
  if (dot <= 0) return "";
  return base.slice(dot).toLowerCase();
}

function parseHexPattern(value) {
  if (typeof value === "number") return value & 0xff;
  var cleaned = String(value).trim().replace(/^0x/i, "");
  if (!cleaned.length) return null;
  return parseInt(cleaned, 16) & 0xff;
}

function bytesMatchPattern(bytes, offset, pattern) {
  if (!Array.isArray(pattern) || !pattern.length) return false;
  var start = typeof pattern[0] === "number" && pattern.length > 1 && typeof pattern[1] !== "string"
    ? pattern[0]
    : offset;
  var values = typeof pattern[0] === "number" && pattern.length > 1 && typeof pattern[1] !== "string"
    ? pattern.slice(1)
    : pattern;

  for (var i = 0; i < values.length; i++) {
    var expected = parseHexPattern(values[i]);
    if (expected === null) return false;
    if (bytes[start + i] !== expected) return false;
  }
  return true;
}

/**
 * Fast JSON match rules evaluated before a plugin module is imported.
 * All specified rules must pass. An empty rule object never matches here.
 */
export function declarativeMatch(rules, ctx) {
  if (!rules) return false;
  if (rules.always === true) return true;

  var matchedAnyRule = false;

  if (Array.isArray(rules.extensions) && rules.extensions.length) {
    matchedAnyRule = true;
    var ext = getExtension(ctx.filename);
    var ok = rules.extensions.some(function (candidate) {
      var normalized = String(candidate).toLowerCase();
      if (!normalized.startsWith(".")) normalized = "." + normalized;
      return ext === normalized;
    });
    if (!ok) return false;
  }

  if (typeof rules.minSize === "number") {
    matchedAnyRule = true;
    if (ctx.size < rules.minSize) return false;
  }

  if (typeof rules.maxSize === "number") {
    matchedAnyRule = true;
    if (ctx.size > rules.maxSize) return false;
  }

  if (Array.isArray(rules.filenameIncludes) && rules.filenameIncludes.length) {
    matchedAnyRule = true;
    var haystack = (ctx.path || ctx.filename || "").toLowerCase();
    var includesOk = rules.filenameIncludes.some(function (part) {
      return haystack.indexOf(String(part).toLowerCase()) !== -1;
    });
    if (!includesOk) return false;
  }

  if (Array.isArray(rules.magic) && rules.magic.length) {
    matchedAnyRule = true;
    for (var m = 0; m < rules.magic.length; m++) {
      var rule = rules.magic[m];
      var offset = 0;
      var pattern = rule;
      if (rule && typeof rule === "object" && !Array.isArray(rule)) {
        offset = rule.offset || 0;
        pattern = rule.bytes || rule.pattern || [];
      } else if (Array.isArray(rule)) {
        offset = rule[0];
        pattern = rule.slice(1);
      }
      if (!bytesMatchPattern(ctx.bytes, offset, pattern)) return false;
    }
  }

  return matchedAnyRule;
}

export function shouldAttemptLoad(entry) {
  if (entry.enabled === false) return false;
  if (entry.preload === true) return true;
  if (entry.match && entry.match.always === true) return true;
  return false;
}

export function shouldAttemptLoadForContext(entry, ctx) {
  if (entry.enabled === false) return false;
  if (shouldAttemptLoad(entry)) return true;
  if (!entry.match || !Object.keys(entry.match).length) return true;
  return declarativeMatch(entry.match, ctx);
}
