import fs from "fs";
import {
  buildExeHighlightPayload,
  detectLayout,
  locatePsxExe,
  parseCue,
  parseDiscBytes,
  parseDiscSource,
  psxR2AnalyzeCommand,
  psxR2ArchArgs
} from "./psx-image.js";

function ascii(text) {
  var bytes = new Uint8Array(text.length);
  for (var i = 0; i < text.length; i++) bytes[i] = text.charCodeAt(i);
  return bytes;
}

function writeU32Both(buf, offset, value) {
  buf[offset] = value & 255;
  buf[offset + 1] = (value >>> 8) & 255;
  buf[offset + 2] = (value >>> 16) & 255;
  buf[offset + 3] = (value >>> 24) & 255;
  buf[offset + 4] = (value >>> 24) & 255;
  buf[offset + 5] = (value >>> 16) & 255;
  buf[offset + 6] = (value >>> 8) & 255;
  buf[offset + 7] = value & 255;
}

function writeDirRecord(buf, offset, record) {
  var name = record.nameBytes || ascii(record.name);
  var length = (33 + name.length + 1) & ~1;
  buf[offset] = length;
  writeU32Both(buf, offset + 2, record.lba);
  writeU32Both(buf, offset + 10, record.size);
  buf[offset + 25] = record.flags || 0;
  buf[offset + 32] = name.length;
  buf.set(name, offset + 33);
  return length;
}

function mode2Sector(user, mode) {
  var sector = new Uint8Array(2352);
  sector[0] = 0x00;
  for (var i = 1; i < 11; i++) sector[i] = 0xff;
  sector[11] = 0x00;
  sector[15] = mode;
  sector.set(user, mode === 1 ? 16 : 24);
  return sector;
}

function buildExe() {
  var file = new Uint8Array(0x800 + 16);
  file.set(ascii("PS-X EXE"), 0);
  var view = new DataView(file.buffer);
  view.setUint32(0x10, 0x80010000, true);
  view.setUint32(0x14, 0, true);
  view.setUint32(0x18, 0x80010000, true);
  view.setUint32(0x1c, 16, true);
  view.setUint32(0x30, 0x801fff00, true);
  var marker = ascii("TEST MARKER");
  file.set(marker, 0x4c);
  file.set([0xf0, 0xff, 0xbd, 0x27, 0x08, 0x00, 0xe0, 0x03], 0x800);
  return file;
}

function buildImage(mode) {
  var sectors = [];
  for (var i = 0; i < 22; i++) sectors.push(new Uint8Array(2048));

  var pvd = sectors[16];
  pvd[0] = 1;
  pvd.set(ascii("CD001"), 1);
  pvd[6] = 1;
  pvd.set(ascii("ATV BUILD"), 40);
  writeDirRecord(pvd, 156, {
    lba: 18,
    size: 2048,
    flags: 2,
    nameBytes: Uint8Array.of(0)
  });

  var dir = sectors[18];
  var cursor = 0;
  cursor += writeDirRecord(dir, cursor, { lba: 18, size: 2048, flags: 2, nameBytes: Uint8Array.of(0) });
  cursor += writeDirRecord(dir, cursor, { lba: 18, size: 2048, flags: 2, nameBytes: Uint8Array.of(1) });
  var cnf = ascii("BOOT=cdrom:\\SLUS_000.00;1\r\nTCB=4\r\nEVENT=10\r\nSTACK=801FFF00\r\n");
  cursor += writeDirRecord(dir, cursor, { lba: 19, size: cnf.length, flags: 0, name: "SYSTEM.CNF" });
  var exe = buildExe();
  writeDirRecord(dir, cursor, { lba: 20, size: exe.length, flags: 0, name: "SLUS_000.00" });
  sectors[19].set(cnf, 0);
  sectors[20].set(exe.subarray(0, 2048), 0);
  sectors[21].set(exe.subarray(2048), 0);

  if (mode === 2048) {
    var cooked = new Uint8Array(sectors.length * 2048);
    for (var s = 0; s < sectors.length; s++) cooked.set(sectors[s], s * 2048);
    return cooked;
  }

  var raw = new Uint8Array(sectors.length * 2352);
  var modeByte = mode === 1 ? 1 : 2;
  for (var n = 0; n < sectors.length; n++) {
    raw.set(mode2Sector(sectors[n], modeByte), n * 2352);
  }
  return raw;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

var cue = parseCue('FILE "GAME.BIN" BINARY\n  TRACK 01 MODE2/2352\n    INDEX 01 00:00:00\n');
assert(cue && cue.fileName === "GAME.BIN" && cue.layout.mode === "MODE2/2352" && cue.startSector === 0, "cue");

var image = buildImage(2);
var layout = detectLayout(image);
assert(layout && layout.mode === "MODE2/2352" && layout.userOffset === 24, "mode2 layout");
var disc = parseDiscBytes(image);
assert(disc && disc.volumeId === "ATV BUILD", "volume");
assert(disc.systemCnf && disc.systemCnf.bootPath === "/SLUS_000.00", "boot path");
assert(disc.bootFile && disc.bootFile.exe && disc.bootFile.exe.pc === 0x80010000, "boot pc");
assert(disc.bootFile.exe.dest === 0x80010000 && disc.bootFile.exe.payloadSize === 16, "payload");
assert(disc.bootFile.exe.baddr === 0x8000f800, "r2 base");
assert(disc.bootFile.exe.marker === "TEST MARKER", "marker");

var highlights = buildExeHighlightPayload(buildExe());
assert(highlights.regions.length >= 6 && highlights.regions[0].id === 0, "exe highlights");

var args = psxR2ArchArgs(disc.bootFile.exe);
assert(args.indexOf("mips") >= 0 && args.indexOf("asm.cpu=mips1") >= 0 && args.indexOf("0x8000f800") >= 0, "r2 args");
assert(psxR2AnalyzeCommand(disc.bootFile.exe).indexOf("0x80010000") >= 0, "r2 command");

var mode1 = buildImage(1);
assert(detectLayout(mode1).mode === "MODE1/2352" && detectLayout(mode1).userOffset === 16, "mode1");
assert(parseDiscBytes(mode1).bootFile.name === "SLUS_000.00", "mode1 boot");
assert(parseDiscBytes(buildImage(2048)).volumeId === "ATV BUILD", "cooked");
assert(detectLayout(new Uint8Array(64)) === null, "reject short");
assert(locatePsxExe(new Uint8Array([0x50, 0x53])) === null, "reject truncated exe");

var atvCue = "/Volumes/Data/RR/Prototypes/PS1/ATV Quad Power Racing - Build 121 - July 5 2000/ATV.CUE";
var atvBin = "/Volumes/Data/RR/Prototypes/PS1/ATV Quad Power Racing - Build 121 - July 5 2000/ATV.BIN";
if (fs.existsSync(atvBin) && fs.existsSync(atvCue)) {
  var cueText = fs.readFileSync(atvCue, "utf8");
  var parsedCue = parseCue(cueText);
  assert(parsedCue.fileName === "ATV.BIN" && parsedCue.layout.mode === "MODE2/2352", "atv cue");
  var fd = fs.openSync(atvBin, "r");
  var stat = fs.fstatSync(fd);
  var prefix = Buffer.alloc(17 * 2352);
  fs.readSync(fd, prefix, 0, prefix.length, 0);
  var atvLayout = detectLayout(new Uint8Array(prefix.buffer, prefix.byteOffset, prefix.byteLength), stat.size);
  assert(atvLayout && atvLayout.mode === "MODE2/2352" && atvLayout.startSector === 0, "atv layout");
  var atv = parseDiscSource({
    layout: atvLayout,
    byteLength: stat.size,
    read: function (lba, size) {
      var out = Buffer.alloc(size);
      var done = 0;
      while (done < size) {
        var sector = lba + Math.floor(done / atvLayout.userSize);
        var skip = done % atvLayout.userSize;
        var offset = sector * atvLayout.sectorSize + atvLayout.userOffset + skip;
        var chunk = Math.min(atvLayout.userSize - skip, size - done);
        if (offset + chunk > stat.size) return null;
        fs.readSync(fd, out, done, chunk, offset);
        done += chunk;
      }
      return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
    }
  });
  fs.closeSync(fd);
  assert(atv && atv.systemCnf.bootPath === "/SLUS_011.37", "atv boot path " + (atv && atv.systemCnf && atv.systemCnf.bootPath));
  assert(atv.bootFile && atv.bootFile.exe.pc === 0x801e3cd4, "atv pc");
  assert(atv.bootFile.exe.dest === 0x801e0000 && atv.bootFile.exe.payloadSize === 0xc000, "atv dest");
  assert(atv.files.length === 22, "atv file count " + (atv && atv.files.length));
}

console.log("psx image tests passed");
