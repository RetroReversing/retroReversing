import { createVirtualList } from "../../virtual-scroll.js";
import { extractStrings, STRINGS_MIN_LENGTH, STRINGS_ROW_HEIGHT } from "./extract.js";
import { buildDisplayedList } from "./sort.js";

function sortIndicator(direction) {
  if (direction === "asc") return '<i class="fa fa-sort-up" aria-hidden="true"></i>';
  return '<i class="fa fa-sort-down" aria-hidden="true"></i>';
}

function buildStringsChrome(viewState, onChange) {
  var chrome = document.createElement("div");
  chrome.className = "rr-file-lab-strings-chrome";

  var toolbar = document.createElement("div");
  toolbar.className = "rr-file-lab-strings-toolbar";

  var hideLabel = document.createElement("label");
  hideLabel.className = "rr-file-lab-strings-toggle";
  hideLabel.innerHTML =
    '<input type="checkbox" class="rr-file-lab-strings-hide-duplicates"' + (viewState.hideDuplicates ? " checked" : "") + "> Hide duplicates";

  var count = document.createElement("span");
  count.className = "rr-file-lab-strings-count";

  toolbar.appendChild(hideLabel);
  toolbar.appendChild(count);

  var head = document.createElement("div");
  head.className = "rr-file-lab-strings-virtual-head";
  head.setAttribute("role", "row");

  ["offset", "text", "length"].forEach(function (column) {
    var label = column === "offset" ? "Offset" : column === "text" ? "String" : "Length";
    var button = document.createElement("button");
    button.type = "button";
    button.className = "rr-file-lab-strings-sort";
    button.setAttribute("data-sort", column);
    button.setAttribute("aria-label", "Sort by " + label);
    button.innerHTML = '<span>' + label + "</span>";
    if (viewState.sortColumn === column) {
      button.classList.add("is-active");
      button.innerHTML += " " + sortIndicator(viewState.sortDirection);
    } else {
      button.innerHTML += ' <i class="fa fa-sort rr-file-lab-strings-sort-idle" aria-hidden="true"></i>';
    }
    head.appendChild(button);
  });

  hideLabel.querySelector("input").addEventListener("change", function (event) {
    viewState.hideDuplicates = event.target.checked;
    onChange();
  });

  head.addEventListener("click", function (event) {
    var button = event.target.closest("[data-sort]");
    if (!button) return;

    var column = button.getAttribute("data-sort");
    if (viewState.sortColumn === column) {
      viewState.sortDirection = viewState.sortDirection === "asc" ? "desc" : "asc";
    } else {
      viewState.sortColumn = column;
      viewState.sortDirection = "asc";
    }
    onChange();
  });

  chrome.appendChild(toolbar);
  chrome.appendChild(head);

  return {
    root: chrome,
    countEl: count,
    headEl: head
  };
}

function updateChrome(chrome, viewState, displayedCount, rawCount) {
  chrome.countEl.textContent = displayedCount.toLocaleString() + " shown";
  if (viewState.hideDuplicates && displayedCount !== rawCount) {
    chrome.countEl.textContent += " (" + rawCount.toLocaleString() + " total)";
  }

  chrome.headEl.querySelectorAll("[data-sort]").forEach(function (button) {
    var column = button.getAttribute("data-sort");
    var label = column === "offset" ? "Offset" : column === "text" ? "String" : "Length";
    var isActive = viewState.sortColumn === column;
    button.classList.toggle("is-active", isActive);
    button.innerHTML = "<span>" + label + "</span> ";
    button.innerHTML += isActive
      ? sortIndicator(viewState.sortDirection)
      : '<i class="fa fa-sort rr-file-lab-strings-sort-idle" aria-hidden="true"></i>';
  });
}

function buildStringsRow(entry, escapeHtml) {
  var row = document.createElement("div");
  row.className = "rr-file-lab-strings-virtual-row";
  row.innerHTML =
    '<span class="rr-file-lab-strings-offset">0x' + entry.offset.toString(16).toUpperCase().padStart(8, "0") + "</span>" +
    '<span class="rr-file-lab-strings-text" title="' + escapeHtml(entry.text) + '">' + escapeHtml(entry.text) + "</span>" +
    '<span class="rr-file-lab-strings-length">' + entry.length + "</span>";
  return row;
}

export function mountStringsView(ctx, panel, host) {
  var rawStrings = extractStrings(ctx.bytes);
  panel.innerHTML = "";

  if (!rawStrings.length) {
    panel.innerHTML = '<div class="rr-file-lab-strings-empty">No ASCII strings of ' + STRINGS_MIN_LENGTH + "+ characters found in this file.</div>";
    return null;
  }

  var viewState = {
    raw: rawStrings,
    displayed: rawStrings.slice(),
    hideDuplicates: false,
    sortColumn: "offset",
    sortDirection: "asc"
  };

  var emptyMessage = document.createElement("div");
  emptyMessage.className = "rr-file-lab-strings-empty rr-file-lab-strings-filtered-empty";
  emptyMessage.hidden = true;
  emptyMessage.textContent = "No strings match the current filter.";

  var chrome = buildStringsChrome(viewState, applyView);
  var scroller = null;

  function applyView() {
    viewState.displayed = buildDisplayedList(
      viewState.raw,
      viewState.hideDuplicates,
      viewState.sortColumn,
      viewState.sortDirection
    );

    updateChrome(chrome, viewState, viewState.displayed.length, viewState.raw.length);
    emptyMessage.hidden = viewState.displayed.length > 0;

    if (!scroller) return;

    scroller.setTotalCount(viewState.displayed.length);
    scroller.scrollToIndex(0);
  }

  var wrapper = document.createElement("div");
  wrapper.className = "rr-file-lab-strings-view";
  panel.appendChild(wrapper);
  wrapper.appendChild(chrome.root);
  wrapper.appendChild(emptyMessage);

  scroller = createVirtualList({
    mount: wrapper,
    totalCount: viewState.displayed.length,
    rowHeight: STRINGS_ROW_HEIGHT,
    overscan: 14,
    renderRow: function (rowIndex) {
      return buildStringsRow(viewState.displayed[rowIndex], host.api.escapeHtml);
    }
  });

  applyView();
  return scroller;
}

export function destroyStringsView(panel) {
  if (panel._fileLabScroller) {
    panel._fileLabScroller.destroy();
    panel._fileLabScroller = null;
  }
}
