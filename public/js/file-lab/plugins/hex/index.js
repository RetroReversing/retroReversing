import { createVirtualList } from "../../virtual-scroll.js";
import { findRegionById } from "../../hex-highlights.js";
import { HEX_ROW_BYTES, HEX_ROW_HEIGHT } from "./constants.js";
import { buildHexRow, findRegionMarker } from "./render-row.js";
import { clearRegionDetails, renderRegionDetails } from "./region-details.js";

async function ensureHighlights(ctx, host, registry) {
  var existing = host.api.getHexHighlights(ctx.path);
  if (existing && existing.regions && existing.regions.length) {
    return existing;
  }

  if (!registry) return null;

  try {
    var runtime = await registry.loadPlugin("kaitai-viewer");
    if (!runtime || typeof runtime.plugin.computeHexHighlights !== "function") {
      return null;
    }
    return await runtime.plugin.computeHexHighlights(ctx, host);
  } catch (err) {
    return null;
  }
}

function bindRegionInteractions(layout, main, details, getHighlightState, getInteraction, setInteraction, scroller, data, escapeHtml) {
  function selectRegion(regionId) {
    var highlightState = getHighlightState();
    var region = findRegionById(highlightState && highlightState.regions, regionId);
    if (!region) return;
    setInteraction({ selectedRegionId: region.id });
    renderRegionDetails(details, region, highlightState, data, escapeHtml);
    scroller.refresh();
  }

  main.addEventListener("mouseover", function (event) {
    var marker = findRegionMarker(event.target);
    var interaction = getInteraction();
    var nextHover = marker ? Number(marker.getAttribute("data-region-id")) : null;

    if (interaction.hoverRegionId === nextHover) return;

    setInteraction({ hoverRegionId: nextHover });
    scroller.refresh();
  });

  main.addEventListener("mouseout", function (event) {
    var related = event.relatedTarget;
    if (related && main.contains(related)) {
      var marker = findRegionMarker(related);
      var interaction = getInteraction();
      if (marker && Number(marker.getAttribute("data-region-id")) === interaction.hoverRegionId) {
        return;
      }
    }

    var interaction = getInteraction();
    if (interaction.hoverRegionId == null) return;
    setInteraction({ hoverRegionId: null });
    scroller.refresh();
  });

  main.addEventListener("click", function (event) {
    var marker = findRegionMarker(event.target);
    if (!marker) return;
    event.preventDefault();
    selectRegion(marker.getAttribute("data-region-id"));
  });
}

export default {
  id: "hex",
  title: "Hex",
  order: 10,

  matches() {
    return true;
  },

  async activate(ctx, panel, host, registry) {
    var data = ctx.bytes;
    var rowCount = Math.ceil(data.length / HEX_ROW_BYTES) || 1;
    panel.innerHTML = "";

    var highlightState = host.api.getHexHighlights(ctx.path);
    if (!highlightState || !highlightState.regions || !highlightState.regions.length) {
      highlightState = await ensureHighlights(ctx, host, registry);
    }

    var hasHighlights = !!(highlightState && highlightState.regions && highlightState.regions.length);

    var layout = document.createElement("div");
    layout.className = "rr-file-lab-hex-layout";

    var main = document.createElement("div");
    main.className = "rr-file-lab-hex-main";

    var details = document.createElement("aside");
    details.className = "rr-file-lab-hex-details";
    clearRegionDetails(details);

    var interaction = {
      hoverRegionId: null,
      selectedRegionId: null
    };

    function getHighlightState() {
      return highlightState;
    }

    function getInteraction() {
      return interaction;
    }

    function setInteraction(patch) {
      if (Object.prototype.hasOwnProperty.call(patch, "hoverRegionId")) {
        interaction.hoverRegionId = patch.hoverRegionId;
      }
      if (Object.prototype.hasOwnProperty.call(patch, "selectedRegionId")) {
        interaction.selectedRegionId = patch.selectedRegionId;
      }
    }

    var scroller = createVirtualList({
      mount: main,
      totalCount: rowCount,
      rowHeight: HEX_ROW_HEIGHT,
      overscan: 16,
      renderRow: function (rowIndex) {
        return buildHexRow(
          data,
          rowIndex,
          host.api.escapeHtml,
          highlightState && highlightState.regions,
          interaction
        );
      }
    });

    layout.appendChild(main);
    if (hasHighlights) {
      layout.appendChild(details);
      bindRegionInteractions(
        layout,
        main,
        details,
        getHighlightState,
        getInteraction,
        setInteraction,
        scroller,
        data,
        host.api.escapeHtml
      );
    }

    panel.appendChild(layout);

    var unsubscribe = host.api.onHexHighlightsChange(function (detail) {
      if (!detail || detail.path !== ctx.path) return;
      highlightState = detail.data;
      interaction.hoverRegionId = null;
      interaction.selectedRegionId = null;
      clearRegionDetails(details);
      scroller.refresh();
    });

    panel._fileLabScroller = scroller;
    panel._fileLabHighlightUnsub = unsubscribe;
    panel._fileLabHexLayout = layout;
  },

  deactivate(panel) {
    if (panel._fileLabHighlightUnsub) {
      panel._fileLabHighlightUnsub();
      panel._fileLabHighlightUnsub = null;
    }
    if (panel._fileLabScroller) {
      panel._fileLabScroller.destroy();
      panel._fileLabScroller = null;
    }
    panel._fileLabHexLayout = null;
  }
};
