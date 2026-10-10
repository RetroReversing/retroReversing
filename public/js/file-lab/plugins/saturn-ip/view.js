import { createVirtualList } from "../../virtual-scroll.js";
import { disassembleRange } from "./sh2.js";
import { LOAD_BASE, SECURITY_END, SECURITY_OFFSET, parseSaturnIp } from "./parse.js";

var ASM_ROW_HEIGHT = 22;

function hexOffset(value, width) {
  return "0x" + value.toString(16).padStart(width, "0");
}

function vma(offset) {
  return hexOffset((LOAD_BASE + offset) >>> 0, 8);
}

function section(title, body) {
  var wrap = document.createElement("section");
  wrap.className = "rr-file-lab-saturn-ip-section";
  var heading = document.createElement("h3");
  heading.textContent = title;
  wrap.appendChild(heading);
  wrap.appendChild(body);
  return wrap;
}

function renderSummary(parsed, escapeHtml) {
  var summary = document.createElement("header");
  summary.className = "rr-file-lab-saturn-ip-summary";
  var title = parsed.summary.title || "(no title)";
  var meta = [
    parsed.summary.product,
    parsed.summary.version,
    parsed.summary.date,
    parsed.summary.maker
  ].filter(Boolean).join("  ");

  summary.innerHTML =
    "<h3>" + escapeHtml(title) + "</h3>" +
    "<p>" + escapeHtml(meta || "Saturn Initial Program") + "</p>" +
    "<p>SDK samples link <code>SYSID</code> at <code>" + escapeHtml(hexOffset(LOAD_BASE, 8)) +
    "</code>. File offset <code>N</code> is SH-2 address <code>" + escapeHtml(hexOffset(LOAD_BASE, 8)) +
    " + N</code>. The boot ROM enters the security code at <code>" + escapeHtml(vma(SECURITY_OFFSET)) + "</code>.</p>";

  if (parsed.layout.kind === "mode1-2352") {
    var note = document.createElement("p");
    note.textContent = "This file is a MODE1/2352 track. Fields are read from the 2048-byte user data in each sector. Hex highlights use the raw file offsets and skip the 16-byte sector header.";
    summary.appendChild(note);
  }

  return summary;
}

function renderChecks(checks, escapeHtml) {
  var list = document.createElement("ul");
  list.className = "rr-file-lab-saturn-ip-checks";
  checks.forEach(function (check) {
    var item = document.createElement("li");
    item.className = "is-" + check.level;
    item.textContent = check.message;
    list.appendChild(item);
  });
  if (!checks.length) {
    list.innerHTML = "<li class=\"is-warn\">" + escapeHtml("No checks were produced.") + "</li>";
  }
  return list;
}

function renderFields(fields, escapeHtml) {
  var table = document.createElement("table");
  table.className = "rr-file-lab-saturn-ip-fields";
  table.innerHTML =
    "<thead><tr><th>Offset</th><th>VMA</th><th>Size</th><th>Field</th><th>Value</th></tr></thead>";
  var body = document.createElement("tbody");
  fields.forEach(function (field) {
    var row = document.createElement("tr");
    row.innerHTML =
      "<td><code>" + escapeHtml(hexOffset(field.offset, 4)) + "</code></td>" +
      "<td><code>" + escapeHtml(vma(field.offset)) + "</code></td>" +
      "<td>" + escapeHtml(String(field.size)) + "</td>" +
      "<td>" + escapeHtml(field.label) + "</td>" +
      "<td>" + escapeHtml(field.display || "") + "</td>";
    row.title = field.doc;
    body.appendChild(row);
  });
  table.appendChild(body);
  return table;
}

function renderLayout(parsed, escapeHtml) {
  var blocks = [
    {
      label: "System ID",
      start: 0,
      end: Math.min(0x100, parsed.user.length),
      note: "Game title, product number, stacks, and 1st read pointer."
    }
  ];

  if (parsed.codeEnd > SECURITY_OFFSET) {
    blocks.push({
      label: "Security code",
      start: SECURITY_OFFSET,
      end: Math.min(parsed.codeEnd, SECURITY_END),
      note: "SYS_SEC.OBJ. Entered by the boot ROM at " + vma(SECURITY_OFFSET) + "."
    });
  }

  if (parsed.codeEnd > SECURITY_END) {
    blocks.push({
      label: "Area codes and AIP",
      start: SECURITY_END,
      end: parsed.codeEnd,
      note: "Region objects, then the application initial program."
    });
  }

  var list = document.createElement("ul");
  list.className = "rr-file-lab-saturn-ip-layout";
  blocks.forEach(function (block) {
    var item = document.createElement("li");
    item.innerHTML =
      "<strong>" + escapeHtml(block.label) + "</strong> " +
      "<code>" + escapeHtml(hexOffset(block.start, 4)) + "-" + escapeHtml(hexOffset(block.end, 4)) + "</code> " +
      "<code>" + escapeHtml(vma(block.start)) + "</code> " +
      "<span>" + escapeHtml(block.note) + "</span>";
    list.appendChild(item);
  });
  return list;
}

function codeRanges(parsed) {
  var ranges = [];
  if (parsed.codeEnd > SECURITY_OFFSET) {
    ranges.push({
      id: "security",
      label: "Security code",
      start: SECURITY_OFFSET,
      end: Math.min(parsed.codeEnd, SECURITY_END)
    });
  }
  if (parsed.codeEnd > SECURITY_END) {
    ranges.push({
      id: "aip",
      label: "Area codes and AIP",
      start: SECURITY_END,
      end: parsed.codeEnd
    });
  }
  if (ranges.length > 1) {
    ranges.push({
      id: "all",
      label: "All boot code",
      start: SECURITY_OFFSET,
      end: parsed.codeEnd
    });
  }
  return ranges;
}

function renderDisassembly(parsed, escapeHtml) {
  var wrap = document.createElement("div");
  wrap.className = "rr-file-lab-saturn-ip-asm";
  var ranges = codeRanges(parsed);

  if (!ranges.length) {
    wrap.textContent = "This file ends before the security code, so there is no SH-2 boot code to list.";
    return { element: wrap, destroy: function () {} };
  }

  var decoded = {};
  ranges.forEach(function (range) {
    decoded[range.id] = disassembleRange(parsed.user, range.start, range.end, LOAD_BASE);
  });

  var currentId = ranges[0].id;
  var toolbar = document.createElement("div");
  toolbar.className = "rr-file-lab-saturn-ip-asm-toolbar";
  ranges.forEach(function (range) {
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = range.label;
    button.dataset.range = range.id;
    if (range.id === currentId) button.className = "is-active";
    toolbar.appendChild(button);
  });

  var hint = document.createElement("p");
  hint.className = "rr-file-lab-saturn-ip-asm-hint";
  hint.textContent = "Linear SH-2 sweep. Bytes that are data inside SYS_SEC or an area object still decode as instructions. Branch targets use the 0x06002000 link address.";

  var mount = document.createElement("div");
  mount.className = "rr-file-lab-saturn-ip-asm-mount";

  wrap.appendChild(toolbar);
  wrap.appendChild(hint);
  wrap.appendChild(mount);

  var lines = decoded[currentId];
  var scroller = createVirtualList({
    mount: mount,
    totalCount: lines.length,
    rowHeight: ASM_ROW_HEIGHT,
    overscan: 12,
    renderRow: function (index) {
      var line = lines[index];
      var row = document.createElement("div");
      row.className = "rr-file-lab-saturn-ip-asm-row";
      row.innerHTML =
        "<code>" + escapeHtml(hexOffset(line.pc, 8)) + "</code>" +
        "<code>" + escapeHtml(hexOffset(line.offset, 4)) + "</code>" +
        "<code>" + escapeHtml(line.word.toString(16).padStart(4, "0")) + "</code>" +
        "<span>" + escapeHtml(line.text) + "</span>";
      return row;
    }
  });

  toolbar.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button || !decoded[button.dataset.range]) return;
    currentId = button.dataset.range;
    lines = decoded[currentId];
    toolbar.querySelectorAll("button").forEach(function (item) {
      item.className = item === button ? "is-active" : "";
    });
    scroller.setTotalCount(lines.length);
    scroller.scrollToIndex(0);
  });

  return {
    element: wrap,
    destroy: function () {
      scroller.destroy();
    }
  };
}

export function mountSaturnIpView(ctx, panel, host) {
  var escapeHtml = host.api.escapeHtml;
  var parsed = parseSaturnIp(ctx.bytes);
  panel.innerHTML = "";

  if (!parsed) {
    panel.innerHTML = host.api.renderNotice("This file does not start with a Saturn Initial Program header.");
    return null;
  }

  var root = document.createElement("div");
  root.className = "rr-file-lab-saturn-ip";
  root.appendChild(renderSummary(parsed, escapeHtml));
  root.appendChild(section("Boot checks", renderChecks(parsed.checks, escapeHtml)));
  root.appendChild(section("System ID", renderFields(parsed.fields, escapeHtml)));
  root.appendChild(section("Boot layout", renderLayout(parsed, escapeHtml)));

  var disasm = renderDisassembly(parsed, escapeHtml);
  root.appendChild(section("SH-2 listing", disasm.element));

  var sources = document.createElement("p");
  sources.className = "rr-file-lab-saturn-ip-sources";
  sources.innerHTML =
    "Field sizes follow Sega Disc Format Standards ST-040. Background on how the SDK links <code>SYS_SEC.OBJ</code> and the area objects: " +
    "<a href=\"/sega-saturn-initial-program-ip\">Sega Saturn IP.BIN</a>.";
  root.appendChild(sources);

  panel.appendChild(root);
  return disasm;
}

export function destroySaturnIpView(panel) {
  if (panel._saturnIp && typeof panel._saturnIp.destroy === "function") {
    panel._saturnIp.destroy();
  }
  panel._saturnIp = null;
  panel.innerHTML = "";
}
