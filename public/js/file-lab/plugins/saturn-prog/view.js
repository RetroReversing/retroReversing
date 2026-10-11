import { decodeSh2 } from "../saturn-ip/sh2.js";
import { createVirtualList } from "../../virtual-scroll.js";
import { formatWorkRam, parseSaturnProgram, readBe32 } from "./parse.js";

var ASM_ROW_HEIGHT = 22;
var LIST_LIMIT = 0x100000;

function hexBytes(value, width) {
  var text = (value >>> 0).toString(16);
  while (text.length < width) text = "0" + text;
  return text;
}

function section(title, body) {
  var wrap = document.createElement("section");
  wrap.className = "rr-file-lab-saturn-prog-section";
  var heading = document.createElement("h3");
  heading.textContent = title;
  wrap.appendChild(heading);
  wrap.appendChild(body);
  return wrap;
}

function annotate(decoded, bytes) {
  var target = decoded.target;
  if (target == null || target < 0) return decoded.text;
  if (decoded.text.indexOf("mov.l @(") === 0 && target + 4 <= bytes.length) {
    return decoded.text + "  ; " + formatWorkRam(readBe32(bytes, target));
  }
  if (decoded.text.indexOf("mov.w @(") === 0 && target + 2 <= bytes.length) {
    var word = (bytes[target] << 8) | bytes[target + 1];
    return decoded.text + "  ; 0x" + hexBytes(word, 4);
  }
  return decoded.text;
}

function renderSummary(parsed) {
  var summary = document.createElement("div");
  summary.className = "rr-file-lab-saturn-prog-summary";
  var title = document.createElement("h3");
  title.textContent = "SH-2 program";
  var note = document.createElement("p");
  var header = parsed.header;
  if (header.kind === "pool" && header.register === 15) {
    note.textContent = "Raw SH-2 image. The first instruction loads " + formatWorkRam(header.value) + " into r15, the stack pointer. The address this file is copied to is chosen by the loader and is not stored in the image, so the listing uses file offsets.";
  } else if (header.kind === "pool") {
    note.textContent = "Raw SH-2 image. The first instruction loads " + formatWorkRam(header.value) + " into r" + header.register + ". The load address is not stored in the file, so the listing uses file offsets.";
  } else {
    note.textContent = "Raw SH-2 image with an 8-byte header. The longwords are " + formatWorkRam(header.stack) + " and " + formatWorkRam(header.entry) + ", read here as the initial stack and the entry point. The listing starts at file offset 0x8.";
  }
  summary.appendChild(title);
  summary.appendChild(note);
  return summary;
}

function renderHeader(parsed, escapeHtml) {
  var table = document.createElement("table");
  table.className = "rr-file-lab-saturn-prog-fields";
  var header = parsed.header;
  var rows = [];
  if (header.kind === "pool") {
    rows = [
      ["0x0000", "First instruction", "mov.l @(disp, PC), r" + header.register],
      ["0x" + hexBytes(header.poolOffset, 4), header.register === 15 ? "Stack pointer" : "Pointer", formatWorkRam(header.value)]
    ];
  } else {
    rows = [
      ["0x0000", "Stack longword", formatWorkRam(header.stack)],
      ["0x0004", "Entry longword", formatWorkRam(header.entry)]
    ];
  }
  table.innerHTML =
    "<thead><tr><th>Offset</th><th>Field</th><th>Value</th></tr></thead><tbody>" +
    rows.map(function (row) {
      return "<tr><td><code>" + escapeHtml(row[0]) + "</code></td><td>" + escapeHtml(row[1]) + "</td><td><code>" + escapeHtml(row[2]) + "</code></td></tr>";
    }).join("") +
    "</tbody>";
  return table;
}

function renderBanners(parsed, escapeHtml) {
  if (!parsed.banners.length && !parsed.versionTexts.length) {
    var empty = document.createElement("p");
    empty.textContent = "No SEGALIB or SGL version banners in this image.";
    return empty;
  }

  var wrap = document.createElement("div");
  if (parsed.banners.length) {
    var table = document.createElement("table");
    table.className = "rr-file-lab-saturn-prog-fields";
    table.innerHTML =
      "<thead><tr><th>Offset</th><th>Library</th><th>Version</th><th>Date</th></tr></thead><tbody>" +
      parsed.banners.map(function (banner) {
        return "<tr><td><code>0x" + escapeHtml(hexBytes(banner.offset, 4)) + "</code></td><td>" +
          escapeHtml(banner.library) + "</td><td>" + escapeHtml(banner.version) + "</td><td>" +
          escapeHtml(banner.date || "") + "</td></tr>";
      }).join("") +
      "</tbody>";
    wrap.appendChild(table);
  }

  parsed.versionTexts.forEach(function (item) {
    var line = document.createElement("p");
    line.innerHTML = "<code>0x" + escapeHtml(hexBytes(item.offset, 4)) + "</code> " + escapeHtml(item.text);
    wrap.appendChild(line);
  });
  return wrap;
}

function renderDisassembly(parsed, bytes, escapeHtml) {
  var wrap = document.createElement("div");
  wrap.className = "rr-file-lab-saturn-prog-asm";
  var origin = parsed.header.entryOffset;
  var listEnd = Math.min(bytes.length, origin + LIST_LIMIT);
  var total = Math.floor((listEnd - origin) / 2);

  var hint = document.createElement("p");
  hint.className = "rr-file-lab-saturn-prog-asm-hint";
  hint.textContent = total
    ? "Linear sweep. Branch targets and literal-pool addresses are file offsets. A comment after mov.l or mov.w shows the value stored at that pool. Data in the image still decodes as instructions."
    : "This image has no instructions after the header.";
  if (listEnd < bytes.length) {
    hint.textContent += " The listing stops after 1 MB. The rest of the file is in the Hex tab.";
  }

  var mount = document.createElement("div");
  mount.className = "rr-file-lab-saturn-prog-asm-mount";
  wrap.appendChild(hint);
  wrap.appendChild(mount);

  if (!total) {
    return { element: wrap, destroy: function () {} };
  }

  var scroller = createVirtualList({
    mount: mount,
    totalCount: total,
    rowHeight: ASM_ROW_HEIGHT,
    overscan: 12,
    renderRow: function (index) {
      var offset = origin + index * 2;
      var word = (bytes[offset] << 8) | bytes[offset + 1];
      var decoded = decodeSh2(word, offset);
      var text = annotate(decoded, bytes);
      if (index > 0) {
        var prevOffset = offset - 2;
        var prevWord = (bytes[prevOffset] << 8) | bytes[prevOffset + 1];
        if (decodeSh2(prevWord, prevOffset).delay) text += "  ; delay slot";
      }
      var row = document.createElement("div");
      row.className = "rr-file-lab-saturn-prog-asm-row";
      row.innerHTML =
        "<code>" + hexBytes(offset, 6) + "</code>" +
        "<code>" + hexBytes(word, 4) + "</code>" +
        "<span>" + escapeHtml(text) + "</span>";
      return row;
    }
  });

  return {
    element: wrap,
    destroy: function () {
      scroller.destroy();
    }
  };
}

export function mountSaturnProgramView(ctx, panel, host) {
  var escapeHtml = host.api.escapeHtml;
  var parsed = parseSaturnProgram(ctx.bytes);
  panel.innerHTML = "";

  if (!parsed) {
    panel.innerHTML = host.api.renderNotice("This file is not a raw Saturn SH-2 program image.");
    return null;
  }

  var root = document.createElement("div");
  root.className = "rr-file-lab-saturn-prog";
  root.appendChild(renderSummary(parsed));
  root.appendChild(section("Entry", renderHeader(parsed, escapeHtml)));
  root.appendChild(section("SDK banners", renderBanners(parsed, escapeHtml)));

  var disasm = renderDisassembly(parsed, ctx.bytes, escapeHtml);
  root.appendChild(section("SH-2 listing", disasm.element));

  var sources = document.createElement("p");
  sources.className = "rr-file-lab-saturn-prog-sources";
  sources.innerHTML =
    "Disc programs are the raw images described with the other Saturn formats. " +
    "<a href=\"/sega-saturn-file-formats\">Sega Saturn file formats</a>. " +
    "Library banners are the same strings catalogued for demo discs. " +
    "<a href=\"/saturn-demos\">Sega Saturn demo discs</a>.";
  root.appendChild(sources);

  panel.appendChild(root);
  return disasm;
}

export function destroySaturnProgramView(panel) {
  if (panel._saturnProg && typeof panel._saturnProg.destroy === "function") {
    panel._saturnProg.destroy();
  }
  panel._saturnProg = null;
  panel.innerHTML = "";
}
