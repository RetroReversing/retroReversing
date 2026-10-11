/**
 * Raw Sega Saturn SH-2 programs (.BIN, .PRG, and similar disc images).
 * These are not COFF and they are not IP.BIN. The work-RAM load address is
 * chosen by the loader and is not stored in the file.
 */

import { locateSaturnIp } from "../saturn-ip/parse.js";

var LOW_START = 0x06000000;
var LOW_END = 0x06100000;
var HIGH_START = 0x00200000;
var HIGH_END = 0x00300000;

var LIB_NAMES = [
  "GFS_SGL", "GFS_SBL", "STM_SGL", "STM_SBL", "CPK", "SYS", "BUP", "FLD", "PCM",
  "CDC", "DPSYS", "SPR", "SCL", "SND", "MTH", "DMA", "INT", "MEM", "MPG", "CMP",
  "DBG", "CSH", "BPL", "PER", "TIM"
];

var LIB_ALT = LIB_NAMES.join("|");
var LIB_LONG = new RegExp("(" + LIB_ALT + ")\\s+Version\\s+(\\d+\\.\\d+)(?:\\s+(\\d{4}-\\d{2}-\\d{2}))?", "ig");
var LIB_SHORT = new RegExp("(" + LIB_ALT + ")\\s+(\\d+\\.\\d+)\\s+(\\d{4}-\\d{2}-\\d{2})", "ig");
var SAMPLE_VER = /Ver\d+\.\d+ \d{2}\/\d{2}\/\d{2}/g;

export function readBe32(bytes, offset) {
  return ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;
}

export function workRamName(addr) {
  if (addr >= LOW_START && addr < LOW_END) return "low work RAM";
  if (addr >= HIGH_START && addr < HIGH_END) return "high work RAM";
  return null;
}

function asciiSlice(bytes, start, end) {
  var text = "";
  for (var i = start; i < end; i++) text += String.fromCharCode(bytes[i]);
  return text;
}

function collectStrings(bytes, minLen) {
  var out = [];
  var start = -1;
  for (var i = 0; i <= bytes.length; i++) {
    var value = i < bytes.length ? bytes[i] : 0;
    if (value >= 0x20 && value < 0x7f) {
      if (start < 0) start = i;
    } else if (start >= 0) {
      if (i - start >= minLen) out.push({ offset: start, text: asciiSlice(bytes, start, i) });
      start = -1;
    }
  }
  return out;
}

export function locateSaturnProgram(bytes) {
  if (!bytes || bytes.length < 16 || (bytes.length & 1)) return null;
  if (locateSaturnIp(bytes)) return null;

  var first = readBe32(bytes, 0);
  var second = readBe32(bytes, 4);
  if (workRamName(first) && workRamName(second) && (first & 3) === 0 && (second & 1) === 0) {
    return {
      kind: "vector",
      stack: first,
      entry: second,
      entryOffset: 8
    };
  }

  var word = (bytes[0] << 8) | bytes[1];
  if ((word & 0xf000) !== 0xd000) return null;
  var disp = word & 0xff;
  var pool = 4 + disp * 4;
  if (pool + 4 > bytes.length) return null;
  var value = readBe32(bytes, pool);
  if ((value & 3) !== 0 || !workRamName(value)) return null;

  return {
    kind: "pool",
    register: (word >>> 8) & 0xf,
    poolOffset: pool,
    value: value,
    entryOffset: 0
  };
}

export function matchesSaturnProgram(ctx) {
  return !!locateSaturnProgram(ctx && ctx.bytes);
}

function pushBanner(banners, seen, offset, lib, version, date, span) {
  if (seen[offset] || banners.length >= 40) return;
  seen[offset] = true;
  var name = lib.toUpperCase();
  banners.push({
    offset: offset,
    library: name,
    version: version,
    date: date || "",
    span: span,
    text: name + " Version " + version + (date ? " " + date : "")
  });
}

function findBanners(strings) {
  var banners = [];
  var seen = {};
  strings.forEach(function (entry) {
    var match;
    LIB_LONG.lastIndex = 0;
    while ((match = LIB_LONG.exec(entry.text))) {
      pushBanner(banners, seen, entry.offset + match.index, match[1], match[2], match[3] || "", match[0].length);
    }
    LIB_SHORT.lastIndex = 0;
    while ((match = LIB_SHORT.exec(entry.text))) {
      var at = entry.offset + match.index;
      var before = entry.text.slice(Math.max(0, match.index - 8), match.index);
      if (/Version\s+$/i.test(before)) continue;
      pushBanner(banners, seen, at, match[1], match[2], match[3] || "", match[0].length);
    }
  });
  return banners;
}

function findVersionTexts(strings) {
  var found = [];
  strings.forEach(function (entry) {
    var match;
    SAMPLE_VER.lastIndex = 0;
    while ((match = SAMPLE_VER.exec(entry.text))) {
      if (found.length >= 8) return;
      var slice = entry.text.slice(match.index, match.index + 64).replace(/\s+$/, "");
      found.push({ offset: entry.offset + match.index, text: slice });
    }
  });
  return found;
}

export function parseSaturnProgram(bytes) {
  var header = locateSaturnProgram(bytes);
  if (!header) return null;
  var strings = collectStrings(bytes, 8);
  return {
    header: header,
    size: bytes.length,
    banners: findBanners(strings),
    versionTexts: findVersionTexts(strings)
  };
}

function hex(value, width) {
  var text = (value >>> 0).toString(16);
  while (text.length < width) text = "0" + text;
  return "0x" + text;
}

export function buildHighlightPayload(bytes) {
  var parsed = parseSaturnProgram(bytes);
  if (!parsed) return null;

  var regions = [];
  var header = parsed.header;

  if (header.kind === "pool") {
    var stack = header.register === 15;
    regions.push({
      path: "work_ram_pointer",
      label: stack ? "Initial stack pointer" : "Work RAM pointer",
      start: header.poolOffset,
      end: header.poolOffset + 4,
      depth: 1,
      doc: stack
        ? "The first instruction is mov.l @(disp, PC), r15. r15 is the stack pointer, and this longword is the value it loads. The address lives in " + workRamName(header.value) + "."
        : "The first instruction is a PC-relative long load of a " + workRamName(header.value) + " address into r" + header.register + "."
    });
  } else {
    regions.push({
      path: "header_stack",
      label: "Header stack longword",
      start: 0,
      end: 4,
      depth: 1,
      doc: "First big-endian longword. Disc loaders that use this header treat it as the initial stack pointer (" + workRamName(header.stack) + ")."
    });
    regions.push({
      path: "header_entry",
      label: "Header entry longword",
      start: 4,
      end: 8,
      depth: 1,
      doc: "Second big-endian longword. Disc loaders that use this header treat it as the entry point (" + workRamName(header.entry) + ")."
    });
  }

  parsed.banners.forEach(function (banner) {
    regions.push({
      path: "banner_" + banner.offset.toString(16),
      label: banner.text,
      start: banner.offset,
      end: banner.offset + banner.span,
      depth: 2,
      doc: "SEGALIB / SGL companion library banner embedded in the image."
    });
  });

  parsed.versionTexts.forEach(function (item) {
    regions.push({
      path: "version_" + item.offset.toString(16),
      label: item.text,
      start: item.offset,
      end: item.offset + item.text.length,
      depth: 2,
      doc: "Embedded version text. Early SGL sample libraries use a Ver#.## YY/MM/DD prefix."
    });
  });

  for (var i = 0; i < regions.length; i++) {
    regions[i].id = i;
    regions[i].colorIndex = regions[i].depth % 8;
  }

  if (!regions.length) return null;

  return {
    formatId: "saturn_prog",
    formatTitle: "Sega Saturn program",
    regions: regions
  };
}

export function formatWorkRam(addr) {
  var name = workRamName(addr);
  return hex(addr, 8) + (name ? " (" + name + ")" : "");
}
