/**
 * PlayStation 1 disc and PS-X EXE helpers for File Lab.
 * A BIN/CUE data track is an ISO9660 volume stored in 2048-byte user
 * sectors. MODE2/2352 user bytes start at offset 24. A PS-X EXE is a
 * 0x800-byte header plus a little-endian MIPS payload copied to the
 * destination address in the header.
 */

var PSX_MAGIC = [0x50, 0x53, 0x2d, 0x58, 0x20, 0x45, 0x58, 0x45];
var CD_SYNC = [0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00];
var USER_SIZE = 2048;
var MAX_CUE_BYTES = 1024 * 1024;
var MAX_DIR_BYTES = 1024 * 1024;
var MAX_FILES = 4000;
var MAX_EXTRACT = 32 * 1024 * 1024;

function readU32(bytes, offset) {
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  ) >>> 0;
}

function latin1(bytes, start, length) {
  var text = "";
  var end = Math.min(bytes.length, start + length);
  for (var i = start; i < end; i++) {
    var value = bytes[i];
    if (value === 0) break;
    text += String.fromCharCode(value);
  }
  return text;
}

function isSync(bytes, offset) {
  if (!bytes || offset < 0 || offset + CD_SYNC.length > bytes.length) return false;
  for (var i = 0; i < CD_SYNC.length; i++) {
    if (bytes[offset + i] !== CD_SYNC[i]) return false;
  }
  return true;
}

function hasCd001(bytes, offset) {
  if (!bytes || offset < 0 || offset + 6 > bytes.length) return false;
  if (bytes[offset] !== 1 && bytes[offset] !== 2) return false;
  return bytes[offset + 1] === 0x43 &&
    bytes[offset + 2] === 0x44 &&
    bytes[offset + 3] === 0x30 &&
    bytes[offset + 4] === 0x30 &&
    bytes[offset + 5] === 0x31;
}

function layoutForMode(mode) {
  if (mode === "MODE1/2352") {
    return { sectorSize: 2352, userOffset: 16, userSize: USER_SIZE, mode: mode };
  }
  if (mode === "MODE2/2352") {
    return { sectorSize: 2352, userOffset: 24, userSize: USER_SIZE, mode: mode };
  }
  if (mode === "MODE2/2336") {
    return { sectorSize: 2336, userOffset: 8, userSize: USER_SIZE, mode: mode };
  }
  if (mode === "MODE1/2048") {
    return { sectorSize: 2048, userOffset: 0, userSize: USER_SIZE, mode: mode };
  }
  return null;
}

function inPsxRam(addr) {
  var value = addr >>> 0;
  var physical = value & 0x1fffffff;
  if (physical >= 0x00200000) return false;
  var segment = (value & 0xfe000000) >>> 0;
  return segment === 0x80000000 || segment === 0xa0000000;
}

export function decodeCueText(bytes) {
  if (!bytes || bytes.length < 8 || bytes.length > MAX_CUE_BYTES) return null;
  for (var i = 0; i < bytes.length; i++) {
    var value = bytes[i];
    if (value === 9 || value === 10 || value === 13) continue;
    if (value < 32 || value > 126) return null;
  }
  var text = "";
  for (var j = 0; j < bytes.length; j++) text += String.fromCharCode(bytes[j]);
  return text;
}

export function parseCue(text) {
  if (!text) return null;
  var lines = String(text).split(/\r\n|\n|\r/);
  var files = [];
  var current = null;
  var track = null;
  var sawTrack = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line) continue;
    var file = /^FILE\s+(?:"([^"]+)"|(\S+))\s+(\S+)/i.exec(line);
    if (file) {
      current = {
        name: file[1] || file[2],
        type: file[3].toUpperCase(),
        tracks: []
      };
      files.push(current);
      track = null;
      continue;
    }
    var parsedTrack = /^TRACK\s+(\d+)\s+(\S+)/i.exec(line);
    if (parsedTrack && current) {
      sawTrack = true;
      track = {
        number: parseInt(parsedTrack[1], 10),
        mode: parsedTrack[2].toUpperCase(),
        indexes: []
      };
      current.tracks.push(track);
      continue;
    }
    var index = /^INDEX\s+(\d+)\s+(\d+):(\d+):(\d+)/i.exec(line);
    if (index && track) {
      var minutes = parseInt(index[2], 10);
      var seconds = parseInt(index[3], 10);
      var frames = parseInt(index[4], 10);
      track.indexes.push({
        number: parseInt(index[1], 10),
        frames: (minutes * 60 + seconds) * 75 + frames
      });
    }
  }

  if (!files.length || !sawTrack) return null;

  var data = null;
  for (var f = 0; f < files.length && !data; f++) {
    for (var t = 0; t < files[f].tracks.length; t++) {
      var layout = layoutForMode(files[f].tracks[t].mode);
      if (!layout) continue;
      data = {
        fileName: files[f].name,
        fileType: files[f].type,
        track: files[f].tracks[t],
        layout: layout
      };
      break;
    }
  }
  if (!data) return null;

  data.startSector = 0;
  var indexes = data.track.indexes;
  for (var k = 0; k < indexes.length; k++) {
    if (indexes[k].number === 1) data.startSector = indexes[k].frames;
  }
  return data;
}

/**
 * @param {Uint8Array} bytes
 * @param {number} [byteLength] full image size when `bytes` is only a prefix
 */
export function detectLayout(bytes, byteLength) {
  if (!bytes) return null;
  var length = byteLength == null ? bytes.length : byteLength;
  if (length < 17 * USER_SIZE) return null;

  if (length % 2352 === 0 && bytes.length >= 17 * 2352 && isSync(bytes, 0)) {
    var mode = bytes[15];
    var userOffset = mode === 1 ? 16 : mode === 2 ? 24 : -1;
    if (userOffset >= 0) {
      var modeName = mode === 1 ? "MODE1/2352" : "MODE2/2352";
      var limit = Math.min(150, Math.floor(length / 2352) - 17);
      var prefixSectors = Math.floor(bytes.length / 2352);
      for (var start = 0; start <= limit && start + 16 < prefixSectors; start++) {
        if (start > 0 && !isSync(bytes, start * 2352)) continue;
        if (hasCd001(bytes, (start + 16) * 2352 + userOffset)) {
          return {
            sectorSize: 2352,
            userOffset: userOffset,
            userSize: USER_SIZE,
            mode: modeName,
            startSector: start
          };
        }
      }
    }
  }

  if (length % 2336 === 0 && bytes.length >= 17 * 2336 && hasCd001(bytes, 16 * 2336 + 8)) {
    return {
      sectorSize: 2336,
      userOffset: 8,
      userSize: USER_SIZE,
      mode: "MODE2/2336",
      startSector: 0
    };
  }

  if (length % 2048 === 0 && bytes.length >= 17 * 2048 && hasCd001(bytes, 16 * 2048)) {
    return {
      sectorSize: 2048,
      userOffset: 0,
      userSize: USER_SIZE,
      mode: "MODE1/2048",
      startSector: 0
    };
  }

  return null;
}

export function readUserBytes(bytes, layout, lba, size, startSector) {
  if (!bytes || !layout || size < 0) return null;
  if (size === 0) return new Uint8Array(0);
  if (size > MAX_EXTRACT) return null;
  var origin = startSector || 0;
  var out = new Uint8Array(size);
  var done = 0;
  while (done < size) {
    var sector = origin + lba + Math.floor(done / layout.userSize);
    var skip = done % layout.userSize;
    var offset = sector * layout.sectorSize + layout.userOffset + skip;
    var chunk = Math.min(layout.userSize - skip, size - done);
    if (offset < 0 || offset + chunk > bytes.length) return null;
    out.set(bytes.subarray(offset, offset + chunk), done);
    done += chunk;
  }
  return out;
}

export function userFileOffset(layout, lba) {
  return ((layout.startSector || 0) + lba) * layout.sectorSize + layout.userOffset;
}

function parseDirRecords(data) {
  var entries = [];
  var pos = 0;
  while (pos + 33 < data.length && entries.length < MAX_FILES) {
    var length = data[pos];
    if (length === 0) {
      var next = (Math.floor(pos / USER_SIZE) + 1) * USER_SIZE;
      if (next <= pos || next >= data.length) break;
      pos = next;
      continue;
    }
    if (length < 33 || pos + length > data.length) break;
    var nameLen = data[pos + 32];
    if (nameLen < 1 || 33 + nameLen > length) break;
    var nameBytes = data.subarray(pos + 33, pos + 33 + nameLen);
    var special = nameLen === 1 && (nameBytes[0] === 0 || nameBytes[0] === 1);
    if (!special) {
      var name = latin1(nameBytes, 0, nameLen).split(";")[0].trim();
      if (name) {
        entries.push({
          name: name,
          directory: (data[pos + 25] & 2) !== 0,
          lba: readU32(data, pos + 2),
          size: readU32(data, pos + 10)
        });
      }
    }
    pos += length;
  }
  return entries;
}

export function parseSystemCnf(text) {
  var info = {
    boot: null,
    bootPath: null,
    stack: null,
    tcb: null,
    event: null,
    text: text || ""
  };
  var lines = String(text || "").split(/\r\n|\n|\r/);
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    var eq = line.indexOf("=");
    if (eq < 0) continue;
    var key = line.slice(0, eq).trim().toUpperCase();
    var value = line.slice(eq + 1).trim();
    if (key === "BOOT") {
      info.boot = value;
      var path = value.replace(/^cdrom:/i, "").replace(/\\/g, "/");
      if (path.charAt(0) !== "/") path = "/" + path;
      info.bootPath = path.split(";")[0];
    } else if (key === "STACK") {
      info.stack = value;
    } else if (key === "TCB") {
      info.tcb = value;
    } else if (key === "EVENT") {
      info.event = value;
    }
  }
  return info;
}

/**
 * @param {Uint8Array} bytes
 * @param {number} [fileSize] ISO file size when `bytes` is only a header prefix
 */
export function locatePsxExe(bytes, fileSize) {
  if (!bytes || bytes.length < 0x50) return null;
  for (var i = 0; i < PSX_MAGIC.length; i++) {
    if (bytes[i] !== PSX_MAGIC[i]) return null;
  }

  var total = fileSize == null ? bytes.length : fileSize;
  if (total < 0x800 + 4) return null;

  var pc = readU32(bytes, 0x10);
  var gp = readU32(bytes, 0x14);
  var dest = readU32(bytes, 0x18);
  var headerPayload = readU32(bytes, 0x1c);
  if (!inPsxRam(pc) || !inPsxRam(dest) || (pc & 3) !== 0 || (dest & 3) !== 0) return null;
  if (headerPayload < 4) return null;

  var available = total - 0x800;
  var payloadSize = headerPayload <= available ? headerPayload : available;
  if (payloadSize < 4 || pc < dest || pc >= dest + payloadSize) return null;

  var marker = "";
  var markerEnd = Math.min(bytes.length, 0x800);
  for (var m = 0x4c; m < markerEnd; m++) {
    var value = bytes[m];
    if (value === 0 || value < 32 || value > 126) break;
    marker += String.fromCharCode(value);
    if (marker.length >= 160) break;
  }

  return {
    pc: pc,
    gp: gp,
    dest: dest,
    payloadSize: payloadSize,
    headerPayload: headerPayload,
    dataAddr: readU32(bytes, 0x20),
    dataSize: readU32(bytes, 0x24),
    bssAddr: readU32(bytes, 0x28),
    bssSize: readU32(bytes, 0x2c),
    stackBase: readU32(bytes, 0x30),
    stackOffset: readU32(bytes, 0x34),
    marker: marker,
    baddr: (dest - 0x800) >>> 0,
    entry: pc,
    entryName: "entry"
  };
}

export function parseDiscSource(source) {
  if (!source || !source.layout || typeof source.read !== "function") return null;
  var layout = source.layout;
  var pvd = source.read(16, USER_SIZE);
  if (!pvd || pvd.length < 190 || !hasCd001(pvd, 0)) return null;

  var rootLba = readU32(pvd, 158);
  var rootSize = readU32(pvd, 166);
  if (rootSize <= 0 || rootSize > MAX_DIR_BYTES) return null;

  var files = [];

  function walk(lba, size, prefix, depth) {
    if (depth > 8 || files.length >= MAX_FILES) return;
    var raw = source.read(lba, size);
    if (!raw) return;
    var records = parseDirRecords(raw);
    for (var i = 0; i < records.length; i++) {
      var record = records[i];
      var path = prefix + record.name;
      if (record.directory) {
        if (record.size > 0 && record.size <= MAX_DIR_BYTES) {
          walk(record.lba, record.size, path + "/", depth + 1);
        }
        continue;
      }
      var entry = {
        name: record.name,
        path: path,
        lba: record.lba,
        size: record.size,
        exe: null
      };
      if (record.size >= 0x800 + 4) {
        var header = source.read(record.lba, Math.min(record.size, 0x100));
        entry.exe = locatePsxExe(header, record.size);
      }
      files.push(entry);
      if (files.length >= MAX_FILES) return;
    }
  }

  walk(rootLba, rootSize, "/", 0);

  var systemFile = null;
  for (var i = 0; i < files.length; i++) {
    if (files[i].name.toUpperCase() === "SYSTEM.CNF" && files[i].size > 0 && files[i].size <= 4096) {
      systemFile = files[i];
      break;
    }
  }

  var systemCnf = null;
  if (systemFile) {
    var cnfBytes = source.read(systemFile.lba, systemFile.size);
    if (cnfBytes) systemCnf = parseSystemCnf(latin1(cnfBytes, 0, cnfBytes.length));
  }

  var bootFile = null;
  if (systemCnf && systemCnf.bootPath) {
    var wanted = systemCnf.bootPath.toLowerCase();
    for (var j = 0; j < files.length; j++) {
      if (files[j].path.toLowerCase() === wanted) {
        bootFile = files[j];
        break;
      }
    }
  }

  return {
    layout: layout,
    volumeId: latin1(pvd, 40, 32).trim(),
    byteLength: source.byteLength || 0,
    files: files,
    systemCnf: systemCnf,
    systemFile: systemFile,
    bootFile: bootFile
  };
}

export function parseDiscBytes(bytes) {
  var layout = detectLayout(bytes);
  if (!layout) return null;
  var start = layout.startSector || 0;
  return parseDiscSource({
    layout: layout,
    byteLength: bytes.length,
    read: function (lba, size) {
      return readUserBytes(bytes, layout, lba, size, start);
    }
  });
}

export function extractUserFile(bytes, layout, lba, size) {
  if (!layout || size < 0 || size > MAX_EXTRACT) return null;
  return readUserBytes(bytes, layout, lba, size, layout.startSector || 0);
}

export function matchesPsxDisc(ctx) {
  var bytes = ctx && ctx.bytes;
  if (!bytes || bytes.length < 8) return false;
  if (detectLayout(bytes)) return true;
  var text = decodeCueText(bytes);
  return !!(text && parseCue(text));
}

export function matchesPsxExe(ctx) {
  return !!locatePsxExe(ctx && ctx.bytes);
}

export function psxR2ArchArgs(image) {
  if (!image) return [];
  return [
    "-a", "mips",
    "-b", "32",
    "-m", "0x" + image.baddr.toString(16),
    "-e", "cfg.bigendian=false",
    "-e", "asm.cpu=mips1"
  ];
}

// radare2.wasm maps a raw PS-X EXE without execute permission, then `af`
// skips it. Mark the map executable before any analysis command.
export function psxR2EnsureExecutableArgs(args) {
  var next = args.slice();
  var commandIndex = next.indexOf("-c");
  var at = commandIndex === -1 ? Math.max(next.length - 1, 0) : commandIndex;
  next.splice(at, 0, "-c", "ompg +x");
  return next;
}

export function psxR2AnalyzeCommand(image) {
  if (!image) return "aaa; aflj";
  return "s 0x" + image.entry.toString(16) + "; af; aaa; aflj";
}

function pushRegion(regions, path, label, start, end, doc) {
  if (end <= start) return;
  regions.push({
    path: path,
    label: label,
    start: start,
    end: end,
    depth: 1,
    doc: doc
  });
}

export function buildDiscHighlightPayload(bytes) {
  var disc = parseDiscBytes(bytes);
  if (!disc) return null;
  var regions = [];
  var pvd = userFileOffset(disc.layout, 16);
  pushRegion(
    regions,
    "primary_volume",
    "Primary volume descriptor",
    pvd,
    pvd + Math.min(USER_SIZE, disc.layout.userSize),
    "ISO9660 primary volume descriptor. The volume label and the root directory location are in this sector's user data."
  );
  if (disc.systemFile) {
    var cnf = userFileOffset(disc.layout, disc.systemFile.lba);
    pushRegion(
      regions,
      "system_cnf",
      "SYSTEM.CNF",
      cnf,
      cnf + Math.min(disc.systemFile.size, disc.layout.userSize),
      "Boot configuration. The BOOT line names the PS-X EXE the kernel loads."
    );
  }
  if (disc.bootFile) {
    var boot = userFileOffset(disc.layout, disc.bootFile.lba);
    pushRegion(
      regions,
      "boot_exe",
      disc.bootFile.name,
      boot,
      boot + Math.min(0x800, disc.bootFile.size, disc.layout.userSize),
      "First user sector of the boot executable named by SYSTEM.CNF."
    );
  }
  if (!regions.length) return null;
  for (var i = 0; i < regions.length; i++) {
    regions[i].id = i;
    regions[i].colorIndex = i % 8;
  }
  return {
    formatId: "psx_disc",
    formatTitle: "PlayStation disc",
    regions: regions
  };
}

export function buildExeHighlightPayload(bytes) {
  var exe = locatePsxExe(bytes);
  if (!exe) return null;
  var regions = [];
  pushRegion(regions, "magic", "PS-X EXE magic", 0, 8, "ASCII magic at the start of the header.");
  pushRegion(regions, "pc", "Initial PC", 0x10, 0x14, "Little-endian entry address. The BIOS jumps here after the copy.");
  pushRegion(regions, "gp", "Initial GP", 0x14, 0x18, "Little-endian initial gp. Zero means the executable sets gp itself.");
  pushRegion(regions, "dest", "Destination address", 0x18, 0x1c, "RAM address where the payload at file offset 0x800 is copied.");
  pushRegion(regions, "payload", "Payload size", 0x1c, 0x20, "Number of bytes copied from file offset 0x800.");
  if (exe.stackBase) {
    pushRegion(regions, "stack", "Stack base", 0x30, 0x34, "Stack pointer the BIOS installs before jumping to the initial PC.");
  }
  if (exe.marker) {
    pushRegion(
      regions,
      "marker",
      "Region marker",
      0x4c,
      0x4c + exe.marker.length,
      "ASCII region string stored in the header."
    );
  }
  for (var i = 0; i < regions.length; i++) {
    regions[i].id = i;
    regions[i].colorIndex = i % 8;
  }
  return {
    formatId: "psx_exe",
    formatTitle: "PS-X EXE",
    regions: regions
  };
}
