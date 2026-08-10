/**
 * Fixed-height virtual list for File Lab plugin panels.
 */
export function createVirtualList(options) {
  var totalCount = options.totalCount || 0;
  var rowHeight = options.rowHeight || 20;
  var overscan = typeof options.overscan === "number" ? options.overscan : 12;
  var renderRow = options.renderRow;
  var mount = options.mount;

  var destroyed = false;
  var rafId = 0;
  var lastRange = { start: -1, end: -1 };

  var root = document.createElement("div");
  root.className = "rr-file-lab-virtual-root";

  if (options.beforeScroll) {
    root.appendChild(options.beforeScroll);
  }

  var scrollEl = document.createElement("div");
  scrollEl.className = "rr-file-lab-virtual-scroll";

  var spacerEl = document.createElement("div");
  spacerEl.className = "rr-file-lab-virtual-spacer";

  var windowEl = document.createElement("div");
  windowEl.className = "rr-file-lab-virtual-window";

  spacerEl.appendChild(windowEl);
  scrollEl.appendChild(spacerEl);
  root.appendChild(scrollEl);

  mount.appendChild(root);

  function setTotalCount(count) {
    totalCount = Math.max(0, count);
    spacerEl.style.height = (totalCount * rowHeight) + "px";
    lastRange.start = -1;
    lastRange.end = -1;
    updateVisible(true);
  }

  function updateVisible(force) {
    if (destroyed || !totalCount) {
      windowEl.innerHTML = "";
      return;
    }

    var scrollTop = scrollEl.scrollTop;
    var viewportHeight = scrollEl.clientHeight || 0;
    var startIndex = Math.floor(scrollTop / rowHeight);
    var visibleCount = Math.max(1, Math.ceil(viewportHeight / rowHeight));
    var start = Math.max(0, startIndex - overscan);
    var end = Math.min(totalCount, startIndex + visibleCount + overscan);

    if (!force && start === lastRange.start && end === lastRange.end) {
      return;
    }

    lastRange.start = start;
    lastRange.end = end;
    windowEl.style.transform = "translateY(" + (start * rowHeight) + "px)";

    var frag = document.createDocumentFragment();
    for (var i = start; i < end; i++) {
      frag.appendChild(renderRow(i));
    }

    windowEl.innerHTML = "";
    windowEl.appendChild(frag);
  }

  function onScroll() {
    if (rafId) return;
    rafId = window.requestAnimationFrame(function () {
      rafId = 0;
      updateVisible(false);
    });
  }

  function onResize() {
    lastRange.start = -1;
    lastRange.end = -1;
    updateVisible(true);
  }

  scrollEl.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  var resizeObserver = null;
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(scrollEl);
  }

  setTotalCount(totalCount);

  return {
    root: root,
    scrollEl: scrollEl,
    setTotalCount: setTotalCount,
    scrollToIndex: function (index) {
      scrollEl.scrollTop = Math.max(0, index * rowHeight);
      updateVisible(true);
    },
    refresh: function () {
      lastRange.start = -1;
      lastRange.end = -1;
      updateVisible(true);
    },
    destroy: function () {
      if (destroyed) return;
      destroyed = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      scrollEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (resizeObserver) resizeObserver.disconnect();
      root.remove();
    }
  };
}
