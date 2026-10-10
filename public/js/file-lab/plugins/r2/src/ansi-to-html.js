function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeAnsiInput(text) {
  var normalized = String(text || "").replace(/\u009b/g, "\u001b");
  return normalized.replace(/([^\u001b]|^)\[(\d{1,3}(?:;\d{1,3})*)m/g, function (_, prefix, codes) {
    return prefix + "\u001b[" + codes + "m";
  });
}

function rgbDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
}

var ROLE_PALETTE = {
  mnemonic: [58, 150, 221],
  number: [193, 156, 0],
  call: [19, 161, 14],
  register: [204, 204, 204],
  label: [138, 180, 248],
  comment: [106, 115, 125]
};

var ANSI16 = [
  "#000000", "#cc0000", "#19a14e", "#c19c00",
  "#3a96dd", "#9933cc", "#008080", "#cccccc",
  "#808080", "#ff5555", "#55ff55", "#ffff55",
  "#5555ff", "#ff55ff", "#55ffff", "#ffffff"
];

function rgbToRole(r, g, b) {
  var bestRole = null;
  var bestDistance = 9999;
  Object.keys(ROLE_PALETTE).forEach(function (role) {
    var palette = ROLE_PALETTE[role];
    var distance = rgbDistance(palette, [r, g, b]);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestRole = role;
    }
  });
  return bestDistance <= 48 ? bestRole : null;
}

function createStyleState() {
  return {
    classes: [],
    style: []
  };
}

function resetStyleState(state) {
  state.classes = [];
  state.style = [];
}

function styleStateToAttrs(state) {
  var attrs = [];
  if (state.classes.length) {
    attrs.push('class="' + state.classes.join(" ") + '"');
  }
  if (state.style.length) {
    attrs.push('style="' + state.style.join(";") + '"');
  }
  return attrs.length ? " " + attrs.join(" ") : "";
}

function applySgrCodes(state, codes) {
  if (!codes.length || (codes.length === 1 && codes[0] === 0)) {
    resetStyleState(state);
    return;
  }

  for (var i = 0; i < codes.length; i++) {
    var code = codes[i];

    if (code === 0) {
      resetStyleState(state);
      continue;
    }
    if (code === 1) {
      if (state.classes.indexOf("r2-bold") === -1) state.classes.push("r2-bold");
      continue;
    }
    if (code === 22) {
      state.classes = state.classes.filter(function (item) { return item !== "r2-bold"; });
      continue;
    }
    if (code >= 30 && code <= 37) {
      state.style = state.style.filter(function (item) { return item.indexOf("color:") !== 0; });
      state.classes = state.classes.filter(function (item) { return item.indexOf("r2-") !== 0 || item === "r2-bold"; });
      var basicRgb = hexToRgb(ANSI16[code - 30]);
      var basicRole = rgbToRole(basicRgb[0], basicRgb[1], basicRgb[2]);
      if (basicRole) state.classes.push("r2-" + basicRole);
      else state.style.push("color:" + ANSI16[code - 30]);
      continue;
    }
    if (code >= 90 && code <= 97) {
      state.style = state.style.filter(function (item) { return item.indexOf("color:") !== 0; });
      state.classes = state.classes.filter(function (item) { return item.indexOf("r2-") !== 0 || item === "r2-bold"; });
      state.style.push("color:" + ANSI16[code - 90 + 8]);
      continue;
    }
    if (code === 38 && codes[i + 1] === 2 && i + 4 < codes.length) {
      var r = codes[i + 2];
      var g = codes[i + 3];
      var b = codes[i + 4];
      i += 4;
      state.style = state.style.filter(function (item) { return item.indexOf("color:") !== 0; });
      state.classes = state.classes.filter(function (item) { return item.indexOf("r2-") !== 0 || item === "r2-bold"; });
      var mappedRole = rgbToRole(r, g, b);
      if (mappedRole) state.classes.push("r2-" + mappedRole);
      else state.style.push("color:rgb(" + r + "," + g + "," + b + ")");
      continue;
    }
    if (code === 39) {
      state.style = state.style.filter(function (item) { return item.indexOf("color:") !== 0; });
      state.classes = state.classes.filter(function (item) { return item.indexOf("r2-") !== 0 || item === "r2-bold"; });
    }
  }
}

function hexToRgb(hex) {
  var value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16)
  ];
}

function parseSgrCodes(codeString) {
  if (!codeString) return [0];
  return codeString.split(";").map(function (part) {
    return Number(part);
  }).filter(function (num) {
    return !Number.isNaN(num);
  });
}

export function ansiToHtml(text) {
  var input = normalizeAnsiInput(text);
  var state = createStyleState();
  var html = "";
  var index = 0;
  var regex = /\u001b\[([\d;]*)m/g;
  var match;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > index) {
      var chunk = input.slice(index, match.index);
      html += state.classes.length || state.style.length
        ? "<span" + styleStateToAttrs(state) + ">" + escapeHtml(chunk) + "</span>"
        : escapeHtml(chunk);
    }
    applySgrCodes(state, parseSgrCodes(match[1]));
    index = regex.lastIndex;
  }

  if (index < input.length) {
    var tail = input.slice(index);
    html += state.classes.length || state.style.length
      ? "<span" + styleStateToAttrs(state) + ">" + escapeHtml(tail) + "</span>"
      : escapeHtml(tail);
  }

  return html;
}
