import { HEX_ROW_BYTES } from "./constants.js";
import { findRegionAt, findRegionById } from "../../hex-highlights.js";

function getRegionSliceInRow(region, rowOffset) {
  var rowEnd = rowOffset + HEX_ROW_BYTES;
  if (region.end <= rowOffset || region.start >= rowEnd) return null;

  var sliceStart = Math.max(region.start, rowOffset);
  var sliceEnd = Math.min(region.end, rowEnd);

  return {
    colStart: sliceStart - rowOffset + 1,
    colSpan: sliceEnd - sliceStart,
    isFirstRow: sliceStart === region.start,
    isLastRow: sliceEnd === region.end
  };
}

function buildOutlineClass(kind, slice) {
  var classes = ["hex-block-outline", "outline-" + kind];
  if (slice.isFirstRow) classes.push("is-first-row");
  if (slice.isLastRow) classes.push("is-last-row");
  return classes.join(" ");
}

function buildOutlineSpan(slice, kind, variant) {
  var left;
  var width;

  if (variant === "hex") {
    left = (slice.colStart - 1) * 3;
    width = slice.colSpan * 3 - 1;
  } else {
    left = slice.colStart - 1;
    width = slice.colSpan;
  }

  return (
    '<span class="' + buildOutlineClass(kind, slice) + " " + variant + '-outline" style="left:' +
    left + "ch;width:" + width + 'ch"></span>'
  );
}

function renderByteSpan(className, content, region) {
  if (!region) return content;

  return (
    '<span class="' + className + " hl-" + region.colorIndex + '" data-region-id="' + region.id + '">' +
    content + "</span>"
  );
}

function renderHighlightedByte(hex, absOffset, regions) {
  var region = findRegionAt(regions, absOffset);
  if (!region) return hex;
  return renderByteSpan("hex-byte", hex, region);
}

function renderHighlightedAscii(ch, absOffset, regions, escapeHtml) {
  var region = findRegionAt(regions, absOffset);
  var printable = ch >= 32 && ch <= 126;
  var content = printable
    ? escapeHtml(String.fromCharCode(ch))
    : '<span class="non-printable">.</span>';

  if (!region) return content;
  return renderByteSpan("ascii-byte", content, region);
}

function resolveOutline(regions, interaction) {
  if (!regions || !interaction) return null;

  if (interaction.selectedRegionId != null) {
    var selected = findRegionById(regions, interaction.selectedRegionId);
    if (selected) return { region: selected, kind: "selected" };
  }

  if (interaction.hoverRegionId != null) {
    var hovered = findRegionById(regions, interaction.hoverRegionId);
    if (hovered) return { region: hovered, kind: "hover" };
  }

  return null;
}

export function buildHexRow(data, rowIndex, escapeHtml, regions, interaction) {
  var offset = rowIndex * HEX_ROW_BYTES;
  var row = data.subarray(offset, Math.min(offset + HEX_ROW_BYTES, data.length));
  var hexParts = [];
  var asciiParts = [];

  for (var i = 0; i < HEX_ROW_BYTES; i++) {
    if (i < row.length) {
      var absOffset = offset + i;
      var hex = row[i].toString(16).toUpperCase().padStart(2, "0");
      hexParts.push(regions ? renderHighlightedByte(hex, absOffset, regions) : hex);
      asciiParts.push(regions ? renderHighlightedAscii(row[i], absOffset, regions, escapeHtml) : (
        row[i] >= 32 && row[i] <= 126
          ? escapeHtml(String.fromCharCode(row[i]))
          : '<span class="non-printable">.</span>'
      ));
    } else {
      hexParts.push("  ");
      asciiParts.push(" ");
    }
  }

  var outline = resolveOutline(regions, interaction);
  var outlineHtml = "";
  var asciiOutlineHtml = "";

  if (outline) {
    var slice = getRegionSliceInRow(outline.region, offset);
    if (slice) {
      outlineHtml = buildOutlineSpan(slice, outline.kind, "hex");
      asciiOutlineHtml = buildOutlineSpan(slice, outline.kind, "ascii");
    }
  }

  var line = document.createElement("div");
  line.className = "rr-file-lab-hex-row";
  line.innerHTML =
    '<span class="offset">' + offset.toString(16).toUpperCase().padStart(8, "0") + "</span>  " +
    '<span class="hex-bytes"><span class="hex-bytes-track">' + hexParts.join(" ") + outlineHtml + "</span></span>  " +
    '<span class="ascii"><span class="ascii-track">' + asciiParts.join("") + asciiOutlineHtml + "</span></span>";
  return line;
}

export function findRegionMarker(target) {
  if (!target || typeof target.closest !== "function") return null;
  return target.closest(".hex-byte[data-region-id], .ascii-byte[data-region-id]");
}
