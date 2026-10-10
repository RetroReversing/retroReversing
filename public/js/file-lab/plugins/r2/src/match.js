function bytesMatch(bytes, offset, pattern) {
  if (!bytes || !pattern || !pattern.length) return false;
  if (bytes.length < offset + pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (bytes[offset + i] !== pattern[i]) return false;
  }
  return true;
}

function readU2Le(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readU4Le(bytes, offset) {
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  ) >>> 0;
}

function readU4Be(bytes, offset) {
  return (
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>> 0
  );
}

function isElf(bytes) {
  return bytesMatch(bytes, 0, [0x7f, 0x45, 0x4c, 0x46]);
}

function isPe(bytes) {
  if (!bytesMatch(bytes, 0, [0x4d, 0x5a]) || bytes.length < 0x40) return false;
  var peOffset = readU4Le(bytes, 0x3c);
  if (peOffset + 4 > bytes.length) return false;
  return (
    bytes[peOffset] === 0x50 &&
    bytes[peOffset + 1] === 0x45 &&
    bytes[peOffset + 2] === 0x00 &&
    bytes[peOffset + 3] === 0x00
  );
}

function isJavaClass(bytes) {
  if (!bytesMatch(bytes, 0, [0xca, 0xfe, 0xba, 0xbe]) || bytes.length < 8) return false;
  var major = readU2Le(bytes, 6);
  return major >= 43 && major <= 255;
}

function isMachOFat(bytes) {
  if (!bytesMatch(bytes, 0, [0xca, 0xfe, 0xba, 0xbe]) || bytes.length < 8) return false;
  if (isJavaClass(bytes)) return false;
  var numFat = readU4Be(bytes, 4);
  return numFat >= 1 && numFat <= 32;
}

function isMachO(bytes) {
  return (
    bytesMatch(bytes, 0, [0xfe, 0xed, 0xfa, 0xce]) ||
    bytesMatch(bytes, 0, [0xce, 0xfa, 0xed, 0xfe]) ||
    bytesMatch(bytes, 0, [0xfe, 0xed, 0xfa, 0xcf]) ||
    bytesMatch(bytes, 0, [0xcf, 0xfa, 0xed, 0xfe])
  );
}

function isDex(bytes) {
  return bytesMatch(bytes, 0, [0x64, 0x65, 0x78, 0x0a]);
}

function isUefiTe(bytes) {
  return bytes.length >= 2 && bytes[0] === 0x5a && bytes[1] === 0x56;
}

function isDosMz(bytes) {
  return bytesMatch(bytes, 0, [0x4d, 0x5a]) && !isPe(bytes) && !isUefiTe(bytes);
}

function isWasmModule(bytes) {
  return bytesMatch(bytes, 0, [0x00, 0x61, 0x73, 0x6d]);
}

function isNesRom(bytes) {
  return bytesMatch(bytes, 0, [0x4e, 0x45, 0x53, 0x1a]);
}

function isPythonPyc27(bytes) {
  return bytesMatch(bytes, 0, [0x03, 0xf3, 0x0d, 0x0a]);
}

function isSwf(bytes) {
  if (bytes.length < 3) return false;
  var sig = String.fromCharCode(bytes[0], bytes[1], bytes[2]);
  return sig === "FWS" || sig === "CWS" || sig === "ZWS";
}

/**
 * Cheap header checks for formats radare2 can open as binaries.
 */
export function isRadare2Binary(ctx) {
  var bytes = ctx && ctx.bytes;
  if (!bytes || bytes.length < 4) return false;

  return (
    isElf(bytes) ||
    isPe(bytes) ||
    isMachO(bytes) ||
    isMachOFat(bytes) ||
    isJavaClass(bytes) ||
    isDex(bytes) ||
    isDosMz(bytes) ||
    isUefiTe(bytes) ||
    isWasmModule(bytes) ||
    isNesRom(bytes) ||
    isPythonPyc27(bytes) ||
    isSwf(bytes)
  );
}
