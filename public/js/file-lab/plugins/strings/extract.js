export var STRINGS_MIN_LENGTH = 4;
export var STRINGS_ROW_HEIGHT = 30;

export function extractStrings(data) {
  var results = [];
  var current = "";
  var start = 0;

  for (var i = 0; i < data.length; i++) {
    var byte = data[i];
    if (byte >= 32 && byte <= 126) {
      if (!current.length) start = i;
      current += String.fromCharCode(byte);
    } else if (current.length) {
      if (current.length >= STRINGS_MIN_LENGTH) {
        results.push({ offset: start, text: current, length: current.length });
      }
      current = "";
    }
  }

  if (current.length >= STRINGS_MIN_LENGTH) {
    results.push({ offset: start, text: current, length: current.length });
  }

  return results;
}
