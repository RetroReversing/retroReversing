/**
 * Shared detection for Saturn SH-2 images opened by File Lab.
 * Cooked IP.BIN is linked at 0x06002000. Raw disc programs (00MENU.BIN
 * and the 8-byte stack/entry header) do not store a load address, so
 * they are mapped at file offset 0.
 */

var HW_MAGIC = "SEGA SEGASATURN ";
var LOW_START = 0x06000000;
var LOW_END = 0x06100000;
var HIGH_START = 0x00200000;
var HIGH_END = 0x00300000;

function readBe32(bytes, offset) {
  return (
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>> 0
  );
}

function inWorkRam(addr) {
  return (addr >= LOW_START && addr < LOW_END) || (addr >= HIGH_START && addr < HIGH_END);
}

function magicAt(bytes, offset) {
  if (!bytes || offset < 0 || offset + HW_MAGIC.length > bytes.length) return false;
  for (var i = 0; i < HW_MAGIC.length; i++) {
    if (bytes[offset + i] !== HW_MAGIC.charCodeAt(i)) return false;
  }
  return true;
}

export function locateSaturnSh2(bytes) {
  if (!bytes || bytes.length < 16 || (bytes.length & 1)) return null;

  if (bytes.length >= 0x100 && magicAt(bytes, 0)) {
    return {
      kind: "ip",
      baddr: 0x06002000,
      entry: 0x06002100,
      entryName: "entry"
    };
  }

  var first = readBe32(bytes, 0);
  var second = readBe32(bytes, 4);
  if (inWorkRam(first) && inWorkRam(second) && (first & 3) === 0 && (second & 1) === 0) {
    return {
      kind: "program",
      baddr: 0,
      entry: 8,
      entryName: "entry"
    };
  }

  var word = (bytes[0] << 8) | bytes[1];
  if ((word & 0xf000) !== 0xd000) return null;
  var disp = word & 0xff;
  var pool = 4 + disp * 4;
  if (pool + 4 > bytes.length) return null;
  var value = readBe32(bytes, pool);
  if ((value & 3) !== 0 || !inWorkRam(value)) return null;

  return {
    kind: "program",
    baddr: 0,
    entry: 0,
    entryName: "entry"
  };
}

export function saturnR2ArchArgs(image) {
  if (!image) return [];
  return [
    "-a", "sh",
    "-b", "32",
    "-m", "0x" + image.baddr.toString(16),
    "-e", "cfg.bigendian=true",
    "-e", "asm.cpu=sh2"
  ];
}

export function saturnR2AnalyzeCommand(image) {
  if (!image) return "aaa; aflj";
  return "s 0x" + image.entry.toString(16) + "; af; aaa; aflj";
}
