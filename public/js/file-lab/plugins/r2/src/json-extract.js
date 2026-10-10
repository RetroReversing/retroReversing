export function extractJsonPayload(raw) {
  var text = String(raw || "").trim();
  if (!text) throw new Error("Empty graph response");

  var start = text.search(/[\[{]/);
  if (start === -1) throw new Error("No JSON graph payload found");

  var depth = 0;
  var inString = false;
  var escape = false;
  var started = false;

  for (var i = start; i < text.length; i++) {
    var ch = text[i];
    if (inString) {
      if (escape) escape = false;
      else if (ch === "\\") escape = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "{" || ch === "[") {
      depth++;
      started = true;
    } else if (ch === "}" || ch === "]") {
      depth--;
      if (started && depth === 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  throw new Error("Malformed graph JSON");
}
