/**
 * Sega Saturn IP.BIN / system-area Initial Program.
 * Layout follows Disc Format Standards ST-040-R4 (system ID at 0x00, security
 * code at 0x100 for 0xD00 bytes, then area codes and the application initial program).
 */

export var HW_MAGIC = "SEGA SEGASATURN ";
export var LOAD_BASE = 0x06002000;
export var SECURITY_OFFSET = 0x100;
export var SECURITY_END = 0xE00;
export var IP_SIZE_MIN = 0x1000;
export var IP_SIZE_MAX = 0x8000;
export var WORK_RAM_END = 0x06100000;

var CD_SYNC = [0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00];

var AREA_NAMES = {
  J: "Japan, SYS_AREJ.OBJ",
  T: "Asia NTSC, SYS_ARET.OBJ",
  U: "North America, SYS_AREU.OBJ",
  E: "PAL, SYS_AREE.OBJ"
};

var PERIPHERAL_NAMES = {
  J: "Control pad",
  A: "Analog controller",
  M: "Mouse",
  K: "Keyboard",
  S: "Steering controller",
  T: "Multitap",
  C: "Battle cable",
  D: "Modem or Net Link",
  E: "Multi controller",
  F: "Floppy disk drive",
  G: "Virtua Gun",
  P: "MPEG cartridge",
  R: "Data cartridge",
  W: "Expansion RAM",
  X: "XBAND"
};

var FIELD_DEFS = [
  { id: "hardware_identifier", offset: 0x00, size: 16, kind: "ascii", label: "Hardware identifier", doc: "Must be the 16-byte string SEGA SEGASATURN, including the trailing space. The boot ROM will not load the disc without it." },
  { id: "maker_id", offset: 0x10, size: 16, kind: "ascii", label: "Maker ID", doc: "Sega brand titles use SEGA ENTERPRISES. Third-party titles use SEGA TP plus the company code, space padded to 16 bytes." },
  { id: "product_number", offset: 0x20, size: 10, kind: "ascii", label: "Product number", doc: "Sega product number, 10 bytes, space padded. Sega brand numbers look like GS-9099. Third-party numbers look like T-99901G." },
  { id: "version", offset: 0x2a, size: 6, kind: "ascii", label: "Version", doc: "Disc Format Standards require V, one digit, a period, and three digits. A master disc is V1.000." },
  { id: "release_date", offset: 0x30, size: 8, kind: "date", label: "Release date", doc: "Creation date of the master disc. The standard form is YYYYMMDD. A few early discs store MMDDYYYY instead." },
  { id: "device_information", offset: 0x38, size: 8, kind: "ascii", label: "Device information", doc: "CD set index, for example CD-1/1 or CD-2/3, space padded to 8 bytes." },
  { id: "area_symbols", offset: 0x40, size: 10, kind: "areas", label: "Compatible area symbols", doc: "Region letters, packed with no separators. J Japan, T Asia NTSC, U North America, E PAL. Each letter needs the matching SYS_ARE*.OBJ after the security code." },
  { id: "area_padding", offset: 0x4a, size: 6, kind: "spaces", label: "Area symbol padding", doc: "Six ASCII spaces. The area-symbol field is 10 bytes and this pad finishes the row at 0x50." },
  { id: "peripherals", offset: 0x50, size: 16, kind: "peripherals", label: "Compatible peripherals", doc: "Input devices the game supports, packed with no separators and space padded. ST-040 defines J pad, A analog, M mouse, K keyboard, S steering, and T multitap." },
  { id: "game_title", offset: 0x60, size: 0x70, kind: "ascii", label: "Game title", doc: "Up to 112 bytes. Regional titles may be separated with / or written as J:TITLE." },
  { id: "reserved_0xd0", offset: 0xd0, size: 16, kind: "zeros", label: "Reserved", doc: "Reserved. Disc Format Standards require these 16 bytes to be 00h." },
  { id: "ip_size", offset: 0xe0, size: 4, kind: "u32", label: "IP size", doc: "Byte length of the whole Initial Program: system ID, security code, area codes, and application initial program. Legal range is 0x1000 to 0x8000 and the value must be a multiple of 4." },
  { id: "reserved_0xe4", offset: 0xe4, size: 4, kind: "u32", label: "Reserved", doc: "Reserved in the final disc spec and should be 0. Boot ROM 0.8 treated this longword as a start address." },
  { id: "stack_master", offset: 0xe8, size: 4, kind: "u32", label: "Master SH-2 stack", doc: "Master SH-2 stack pointer. 0 selects the default stack 0x06001000-0x06001FFF. A non-zero value must be 4-byte aligned." },
  { id: "stack_slave", offset: 0xec, size: 4, kind: "u32", label: "Slave SH-2 stack", doc: "Slave SH-2 stack pointer. 0 selects the default stack 0x06000D00-0x06000FFF. A non-zero value must be 4-byte aligned." },
  { id: "first_read_address", offset: 0xf0, size: 4, kind: "u32", label: "1st read address", doc: "Work RAM destination for file identifier 2, transferred while the security code displays the Sega logo. 0 disables the transfer. A non-zero address must sit above the loaded IP and below 0x06100000." },
  { id: "first_read_size", offset: 0xf4, size: 4, kind: "u32", label: "1st read size", doc: "Ignored when booting from CD. The longword is still required to be 4-byte aligned." },
  { id: "reserved_0xf8", offset: 0xf8, size: 4, kind: "u32", label: "Reserved", doc: "Reserved. Should be 0." },
  { id: "reserved_0xfc", offset: 0xfc, size: 4, kind: "u32", label: "Reserved", doc: "Reserved. Should be 0." }
];

function magicAt(bytes, offset) {
  if (!bytes || offset < 0 || offset + HW_MAGIC.length > bytes.length) return false;
  for (var i = 0; i < HW_MAGIC.length; i++) {
    if (bytes[offset + i] !== HW_MAGIC.charCodeAt(i)) return false;
  }
  return true;
}

function hasCdSync(bytes) {
  if (!bytes || bytes.length < CD_SYNC.length) return false;
  for (var i = 0; i < CD_SYNC.length; i++) {
    if (bytes[i] !== CD_SYNC[i]) return false;
  }
  return true;
}

export function locateSaturnIp(bytes) {
  if (!bytes || bytes.length < 0x100) return null;
  if (magicAt(bytes, 0)) {
    return { kind: "user", sectorSize: 2048, userOffset: 0, userSize: 2048 };
  }
  if (bytes.length >= 0x110 && hasCdSync(bytes) && magicAt(bytes, 16) && bytes.length % 2352 === 0) {
    return { kind: "mode1-2352", sectorSize: 2352, userOffset: 16, userSize: 2048 };
  }
  return null;
}

export function matchesSaturnIp(ctx) {
  return !!locateSaturnIp(ctx && ctx.bytes);
}

export function extractUserBytes(bytes, layout) {
  if (!layout || layout.kind === "user") return bytes;
  var sectors = Math.min(Math.floor(bytes.length / layout.sectorSize), 16);
  var out = new Uint8Array(sectors * layout.userSize);
  for (var i = 0; i < sectors; i++) {
    var src = i * layout.sectorSize + layout.userOffset;
    out.set(bytes.subarray(src, src + layout.userSize), i * layout.userSize);
  }
  return out;
}

function readAscii(bytes, offset, size) {
  var chars = [];
  var end = Math.min(bytes.length, offset + size);
  for (var i = offset; i < end; i++) {
    var value = bytes[i];
    if (value >= 0x20 && value < 0x7f) chars.push(String.fromCharCode(value));
    else if (value === 0) chars.push(" ");
    else chars.push(".");
  }
  return chars.join("");
}

function readU32be(bytes, offset) {
  if (offset + 4 > bytes.length) return null;
  return (
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>> 0
  );
}

function isZeroRange(bytes, offset, size) {
  var end = Math.min(bytes.length, offset + size);
  for (var i = offset; i < end; i++) {
    if (bytes[i] !== 0) return false;
  }
  return end === offset + size;
}

function isSpaces(text) {
  return /^ *$/.test(text);
}

function validYmd(year, month, day) {
  var y = Number(year);
  var m = Number(month);
  var d = Number(day);
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  var date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

export function formatIpDate(raw) {
  if (!/^\d{8}$/.test(raw)) return null;
  var year = raw.slice(0, 4);
  var month = raw.slice(4, 6);
  var day = raw.slice(6, 8);
  if ((year.startsWith("19") || year.startsWith("20")) && validYmd(year, month, day)) {
    return { iso: year + "-" + month + "-" + day, order: "YYYYMMDD" };
  }
  month = raw.slice(0, 2);
  day = raw.slice(2, 4);
  year = raw.slice(4, 8);
  if ((year.startsWith("19") || year.startsWith("20")) && validYmd(year, month, day)) {
    return { iso: year + "-" + month + "-" + day, order: "MMDDYYYY" };
  }
  return null;
}

function decodePacked(raw, names) {
  var symbols = [];
  var unknown = [];
  var gap = false;
  var seenSpace = false;
  for (var i = 0; i < raw.length; i++) {
    var ch = raw[i];
    if (ch === " ") {
      seenSpace = true;
      continue;
    }
    if (seenSpace) gap = true;
    if (names[ch]) symbols.push({ code: ch, name: names[ch] });
    else unknown.push(ch);
  }
  return { symbols: symbols, unknown: unknown, gap: gap };
}

function hex32(value) {
  if (value == null) return "";
  return "0x" + value.toString(16).padStart(8, "0");
}

function pushCheck(checks, level, message) {
  checks.push({ level: level, message: message });
}

function buildFields(user) {
  return FIELD_DEFS.map(function (def) {
    var present = user.length >= def.offset + def.size;
    var ascii = present ? readAscii(user, def.offset, def.size) : "";
    var trimmed = ascii.replace(/\s+$/, "");
    var number = def.kind === "u32" && present ? readU32be(user, def.offset) : null;
    var display = trimmed;
    var extra = null;

    if (!present) display = "";
    else if (def.kind === "u32") display = hex32(number);
    else if (def.kind === "date") {
      var parsed = formatIpDate(trimmed);
      display = parsed ? parsed.iso + " (" + trimmed + ", " + parsed.order + ")" : trimmed;
      extra = parsed;
    } else if (def.kind === "areas" || def.kind === "peripherals") {
      var packed = decodePacked(ascii, def.kind === "areas" ? AREA_NAMES : PERIPHERAL_NAMES);
      display = packed.symbols.length
        ? packed.symbols.map(function (item) { return item.code + " " + item.name; }).join(", ")
        : "(none)";
      extra = packed;
    } else if (def.kind === "zeros") {
      display = isZeroRange(user, def.offset, def.size) ? "00h" : "non-zero";
    } else if (def.kind === "spaces") {
      display = isSpaces(ascii) ? "spaces" : JSON.stringify(ascii);
    }

    return {
      id: def.id,
      label: def.label,
      offset: def.offset,
      size: def.size,
      kind: def.kind,
      doc: def.doc,
      raw: ascii,
      trimmed: trimmed,
      number: number,
      display: display,
      extra: extra,
      present: present
    };
  });
}

function fieldById(fields, id) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].id === id) return fields[i];
  }
  return null;
}

function buildChecks(user, fields) {
  var checks = [];
  var hardware = fieldById(fields, "hardware_identifier");
  var version = fieldById(fields, "version");
  var date = fieldById(fields, "release_date");
  var areas = fieldById(fields, "area_symbols");
  var areaPad = fieldById(fields, "area_padding");
  var peripherals = fieldById(fields, "peripherals");
  var reservedD0 = fieldById(fields, "reserved_0xd0");
  var ipSizeField = fieldById(fields, "ip_size");
  var reservedE4 = fieldById(fields, "reserved_0xe4");
  var stackM = fieldById(fields, "stack_master");
  var stackS = fieldById(fields, "stack_slave");
  var firstRead = fieldById(fields, "first_read_address");
  var firstSize = fieldById(fields, "first_read_size");
  var reservedF8 = fieldById(fields, "reserved_0xf8");
  var reservedFc = fieldById(fields, "reserved_0xfc");
  var ipSize = ipSizeField && ipSizeField.number != null ? ipSizeField.number : 0;

  if (hardware && hardware.raw === HW_MAGIC) {
    pushCheck(checks, "ok", "Hardware identifier matches SEGA SEGASATURN.");
  } else {
    pushCheck(checks, "bad", "Hardware identifier is not the required SEGA SEGASATURN string.");
  }

  if (version && /^V\d\.\d{3}$/.test(version.trimmed)) {
    pushCheck(checks, "ok", "Version matches the V#.### pattern from the disc spec.");
  } else if (version && version.trimmed.indexOf("V") === 0) {
    pushCheck(checks, "warn", "Version starts with V but is not the six-character V#.### form (" + version.trimmed + ").");
  } else {
    pushCheck(checks, "warn", "Version does not follow V#.###.");
  }

  if (date && date.extra) {
    pushCheck(checks, date.extra.order === "YYYYMMDD" ? "ok" : "warn", "Release date reads as " + date.extra.iso + " (" + date.extra.order + ").");
  } else {
    pushCheck(checks, "warn", "Release date is not a valid YYYYMMDD or MMDDYYYY value.");
  }

  if (areas && areas.extra) {
    if (!areas.extra.symbols.length) {
      pushCheck(checks, "bad", "No area symbol is set, so the boot ROM area check cannot pass.");
    } else if (areas.extra.unknown.length || areas.extra.gap) {
      pushCheck(checks, "warn", "Area symbols contain a gap or a letter outside J, T, U, and E.");
    } else {
      pushCheck(checks, "ok", "Area symbols are " + areas.extra.symbols.map(function (item) { return item.code; }).join("") + ".");
    }
  }

  if (areaPad && isSpaces(areaPad.raw)) {
    pushCheck(checks, "ok", "Area-symbol padding is spaces.");
  } else {
    pushCheck(checks, "warn", "Area-symbol padding is not six spaces.");
  }

  if (peripherals && peripherals.extra && (peripherals.extra.unknown.length || peripherals.extra.gap)) {
    pushCheck(checks, "warn", "Peripheral list has a gap or an unlisted device code.");
  } else if (peripherals && peripherals.extra && peripherals.extra.symbols.length) {
    pushCheck(checks, "ok", "Peripherals: " + peripherals.extra.symbols.map(function (item) { return item.code; }).join("") + ".");
  }

  if (reservedD0 && reservedD0.display === "00h") {
    pushCheck(checks, "ok", "Reserved bytes at 0xD0 are clear.");
  } else {
    pushCheck(checks, "warn", "Reserved bytes at 0xD0 are not all 00h.");
  }

  if (ipSize >= IP_SIZE_MIN && ipSize <= IP_SIZE_MAX && (ipSize & 3) === 0) {
    pushCheck(checks, "ok", "IP size " + hex32(ipSize) + " is inside 0x1000-0x8000 and 4-byte aligned.");
    if (user.length < ipSize) {
      pushCheck(checks, "warn", "This file is " + user.length + " bytes, shorter than the IP size. The security code or application initial program is truncated.");
    }
  } else {
    pushCheck(checks, "bad", "IP size " + hex32(ipSize) + " is outside 0x1000-0x8000 or is not 4-byte aligned.");
  }

  if (reservedE4 && reservedE4.number === 0) {
    pushCheck(checks, "ok", "Reserved longword at 0xE4 is 0.");
  } else if (reservedE4) {
    pushCheck(checks, "warn", "Reserved longword at 0xE4 is " + hex32(reservedE4.number) + ". Early boot ROM 0.8 used this as a start address.");
  }

  [stackM, stackS].forEach(function (stack, index) {
    var name = index === 0 ? "Master" : "Slave";
    if (!stack || stack.number == null) return;
    if (stack.number === 0) {
      pushCheck(checks, "ok", name + " stack is 0, so the boot ROM uses the default stack.");
    } else if (stack.number & 3) {
      pushCheck(checks, "bad", name + " stack " + hex32(stack.number) + " is not 4-byte aligned.");
    } else {
      pushCheck(checks, "ok", name + " stack pointer is " + hex32(stack.number) + ".");
    }
  });

  if (firstRead && firstRead.number === 0) {
    pushCheck(checks, "ok", "1st read transfer is disabled.");
  } else if (firstRead && ipSize) {
    if (firstRead.number & 3) {
      pushCheck(checks, "bad", "1st read address is not 4-byte aligned.");
    } else if (firstRead.number <= (LOAD_BASE + ipSize) >>> 0) {
      pushCheck(checks, "warn", "1st read address " + hex32(firstRead.number) + " is not above the loaded IP at " + hex32((LOAD_BASE + ipSize) >>> 0) + ".");
    } else if (firstRead.number >= WORK_RAM_END - 4) {
      pushCheck(checks, "warn", "1st read address is not below the end of high work RAM.");
    } else {
      pushCheck(checks, "ok", "1st read address " + hex32(firstRead.number) + " sits in high work RAM above the Initial Program.");
    }
  }

  if (firstSize && (firstSize.number & 3) !== 0) {
    pushCheck(checks, "warn", "1st read size is not 4-byte aligned. CD boot ignores this field.");
  }

  if (reservedF8 && reservedF8.number !== 0) {
    pushCheck(checks, "warn", "Reserved longword at 0xF8 is not 0.");
  }
  if (reservedFc && reservedFc.number !== 0) {
    pushCheck(checks, "warn", "Reserved longword at 0xFC is not 0.");
  }

  return checks;
}

function userRegion(id, label, start, end, doc, depth) {
  return { id: id, label: label, start: start, end: end, doc: doc, depth: depth };
}

function buildUserRegions(user, fields, ipSize) {
  var regions = [];
  fields.forEach(function (field) {
    if (!field.present) return;
    var end = Math.min(field.offset + field.size, user.length);
    if (end <= field.offset) return;
    regions.push(userRegion(field.id, field.label, field.offset, end, field.doc, 2));
  });

  var codeEnd = user.length;
  if (ipSize >= IP_SIZE_MIN && ipSize <= IP_SIZE_MAX) codeEnd = Math.min(user.length, ipSize);

  if (codeEnd > SECURITY_OFFSET) {
    var securityEnd = Math.min(codeEnd, SECURITY_END);
    regions.push(userRegion(
      "security_code",
      "Security code",
      SECURITY_OFFSET,
      securityEnd,
      "SYS_SEC.OBJ, fixed 0xD00 bytes in a full IP. The boot ROM enters this code at 0x06002100 after the system ID check. The object must be linked unchanged.",
      1
    ));
  }

  if (codeEnd > SECURITY_END) {
    regions.push(userRegion(
      "area_and_aip",
      "Area codes and application initial program",
      SECURITY_END,
      codeEnd,
      "SYS_AREJ.OBJ, SYS_ARET.OBJ, SYS_AREU.OBJ, and SYS_AREE.OBJ are linked here in any subset, then the application initial program. Each area object is the same size, from 0x20 to 0x100 bytes. The boot ROM runs the matching area code, then the AIP.",
      1
    ));
  }

  return regions;
}

function mapUserRange(start, end, layout, fileLength) {
  if (end <= start) return [];
  if (!layout || layout.kind === "user") {
    var clippedEnd = Math.min(end, fileLength);
    if (clippedEnd <= start) return [];
    return [{ start: start, end: clippedEnd }];
  }

  var ranges = [];
  var cursor = start;
  while (cursor < end) {
    var sector = Math.floor(cursor / layout.userSize);
    var within = cursor - sector * layout.userSize;
    var take = Math.min(layout.userSize - within, end - cursor);
    var rawStart = sector * layout.sectorSize + layout.userOffset + within;
    var rawEnd = rawStart + take;
    if (rawStart >= fileLength) break;
    if (rawEnd > fileLength) rawEnd = fileLength;
    if (rawEnd > rawStart) ranges.push({ start: rawStart, end: rawEnd });
    cursor += take;
  }
  return ranges;
}

export function parseSaturnIp(bytes) {
  var layout = locateSaturnIp(bytes);
  if (!layout) return null;

  var user = extractUserBytes(bytes, layout);
  if (user.length < 0x100) return null;

  var fields = buildFields(user);
  var ipSizeField = fieldById(fields, "ip_size");
  var ipSize = ipSizeField && ipSizeField.number != null ? ipSizeField.number : 0;
  var title = fieldById(fields, "game_title");
  var product = fieldById(fields, "product_number");
  var version = fieldById(fields, "version");
  var date = fieldById(fields, "release_date");
  var maker = fieldById(fields, "maker_id");
  var codeEnd = user.length;
  if (ipSize >= IP_SIZE_MIN && ipSize <= IP_SIZE_MAX) codeEnd = Math.min(user.length, ipSize);

  return {
    layout: layout,
    user: user,
    fields: fields,
    checks: buildChecks(user, fields),
    regions: buildUserRegions(user, fields, ipSize),
    ipSize: ipSize,
    codeEnd: codeEnd,
    loadBase: LOAD_BASE,
    summary: {
      title: title ? title.trimmed : "",
      product: product ? product.trimmed : "",
      version: version ? version.trimmed : "",
      date: date && date.extra ? date.extra.iso : (date ? date.trimmed : ""),
      maker: maker ? maker.trimmed : ""
    }
  };
}

export function buildHighlightPayload(bytes) {
  var parsed = parseSaturnIp(bytes);
  if (!parsed) return null;

  var regions = [];
  parsed.regions.forEach(function (region) {
    var pieces = mapUserRange(region.start, region.end, parsed.layout, bytes.length);
    pieces.forEach(function (piece) {
      regions.push({
        path: region.id,
        label: region.label,
        start: piece.start,
        end: piece.end,
        depth: region.depth,
        colorIndex: region.depth % 8,
        doc: region.doc
      });
    });
  });

  for (var i = 0; i < regions.length; i++) regions[i].id = i;

  return {
    formatId: "saturn_ip",
    formatTitle: "Sega Saturn IP.BIN",
    regions: regions
  };
}
