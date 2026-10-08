function formatHexOffset(value) {
  return "0x" + value.toString(16).toUpperCase().padStart(8, "0");
}

function formatPreview(data, start, end, maxBytes) {
  maxBytes = maxBytes || 64;
  var slice = data.subarray(start, Math.min(end, start + maxBytes));
  var parts = [];
  for (var i = 0; i < slice.length; i++) {
    parts.push(slice[i].toString(16).toUpperCase().padStart(2, "0"));
  }
  var text = parts.join(" ");
  if (end - start > maxBytes) {
    text += " …";
  }
  return text;
}

function renderDetailRow(label, valueHtml) {
  return (
    '<div class="rr-file-lab-hex-detail-row">' +
    '<div class="rr-file-lab-hex-detail-label">' + label + "</div>" +
    '<div class="rr-file-lab-hex-detail-value">' + valueHtml + "</div>" +
    "</div>"
  );
}

export function renderRegionDetails(container, region, highlightState, data, escapeHtml) {
  if (!container) return;

  if (!region) {
    container.innerHTML =
      '<div class="rr-file-lab-hex-details-empty">Click a highlighted byte to inspect its parsed field.</div>';
    return;
  }

  var size = region.end - region.start;
  var parts = [
    renderDetailRow("Field", "<code>" + escapeHtml(region.path) + "</code>"),
    renderDetailRow("Range", (
      "<code>" + formatHexOffset(region.start) + "</code> – <code>" +
      formatHexOffset(region.end - 1) + "</code>"
    )),
    renderDetailRow("Size", escapeHtml(String(size) + " byte" + (size === 1 ? "" : "s")))
  ];

  if (highlightState && highlightState.formatTitle) {
    parts.unshift(renderDetailRow("Format", escapeHtml(highlightState.formatTitle)));
  }

  if (region.doc) {
    parts.push(renderDetailRow("Doc", escapeHtml(region.doc)));
  }

  if (data && size > 0) {
    parts.push(renderDetailRow("Preview", (
      "<code class=\"rr-file-lab-hex-detail-preview\">" +
      escapeHtml(formatPreview(data, region.start, region.end)) +
      "</code>"
    )));
  }

  container.innerHTML =
    '<div class="rr-file-lab-hex-details-card">' +
    '<div class="rr-file-lab-hex-details-title">Parsed field</div>' +
    parts.join("") +
    "</div>";
}

export function clearRegionDetails(container) {
  if (!container) return;
  container.innerHTML =
    '<div class="rr-file-lab-hex-details-empty">Click a highlighted byte to inspect its parsed field.</div>';
}
