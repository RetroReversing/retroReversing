export function bytesMatch(bytes, offset, pattern) {
  if (!bytes || !pattern || !pattern.length) return false;
  if (bytes.length < offset + pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (bytes[offset + i] !== pattern[i]) return false;
  }
  return true;
}

export function readU2Le(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

export function readU4Le(bytes, offset) {
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  ) >>> 0;
}

export function readU4Be(bytes, offset) {
  return (
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>> 0
  );
}

export function isElf(bytes) {
  return bytesMatch(bytes, 0, [0x7f, 0x45, 0x4c, 0x46]);
}

export function isDex(bytes) {
  return bytesMatch(bytes, 0, [0x64, 0x65, 0x78, 0x0a]);
}

export function isUefiTe(bytes) {
  return bytes.length >= 2 && bytes[0] === 0x5a && bytes[1] === 0x56;
}

export function isPe(bytes) {
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

export function isJavaClass(bytes) {
  if (!bytesMatch(bytes, 0, [0xca, 0xfe, 0xba, 0xbe]) || bytes.length < 8) return false;
  var major = readU2Le(bytes, 6);
  return major >= 43 && major <= 255;
}

export function isMachOFat(bytes) {
  if (!bytesMatch(bytes, 0, [0xca, 0xfe, 0xba, 0xbe]) || bytes.length < 8) return false;
  if (isJavaClass(bytes)) return false;
  var numFat = readU4Be(bytes, 4);
  return numFat >= 1 && numFat <= 32;
}

export function isMachO(bytes) {
  return (
    bytesMatch(bytes, 0, [0xfe, 0xed, 0xfa, 0xce]) ||
    bytesMatch(bytes, 0, [0xce, 0xfa, 0xed, 0xfe]) ||
    bytesMatch(bytes, 0, [0xfe, 0xed, 0xfa, 0xcf]) ||
    bytesMatch(bytes, 0, [0xcf, 0xfa, 0xed, 0xfe])
  );
}

export function isDosMz(bytes) {
  return bytesMatch(bytes, 0, [0x4d, 0x5a]) && !isPe(bytes) && !isUefiTe(bytes);
}

export function isAndroidNanoapp(bytes) {
  return (
    bytes.length >= 8 &&
    bytes[4] === 0x4e &&
    bytes[5] === 0x41 &&
    bytes[6] === 0x4e &&
    bytes[7] === 0x4f
  );
}

export function isSwf(bytes) {
  if (bytes.length < 3) return false;
  var sig = String.fromCharCode(bytes[0], bytes[1], bytes[2]);
  return sig === "FWS" || sig === "CWS" || sig === "ZWS";
}

export function isWav(bytes) {
  return (
    bytesMatch(bytes, 0, [0x52, 0x49, 0x46, 0x46]) &&
    bytes.length >= 12 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x41 &&
    bytes[10] === 0x56 &&
    bytes[11] === 0x45
  );
}

export function isGif(bytes) {
  return bytesMatch(bytes, 0, [0x47, 0x49, 0x46]);
}

export function isBmp(bytes) {
  return bytesMatch(bytes, 0, [0x42, 0x4d]);
}

export function isIlbm(bytes) {
  if (!bytesMatch(bytes, 0, [0x46, 0x4f, 0x52, 0x4d]) || bytes.length < 12) return false;
  return (
    bytesMatch(bytes, 8, [0x49, 0x4c, 0x42, 0x4d]) ||
    bytesMatch(bytes, 8, [0x50, 0x42, 0x4d, 0x20])
  );
}

export function getExtension(filename) {
  var base = String(filename || "").toLowerCase();
  var dot = base.lastIndexOf(".");
  if (dot <= 0) return "";
  return base.slice(dot);
}
