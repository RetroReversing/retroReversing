export function matchesGameBoyRom(ctx) {
  var name = (ctx.filename || "").toLowerCase();
  if (!name.endsWith(".gb") && !name.endsWith(".gbc")) return false;
  if (ctx.size < 32768) return false;

  var headerStart = 0x104;
  if (ctx.bytes.length < headerStart + 4) return false;

  var expected = [0xce, 0xed, 0x66, 0x66];
  for (var i = 0; i < expected.length; i++) {
    if (ctx.bytes[headerStart + i] !== expected[i]) return false;
  }

  return true;
}

export function detectGameBoyMode(bytes) {
  var cgbFlag = bytes.length > 0x143 ? bytes[0x143] : 0;
  return cgbFlag === 0x80 ? "Game Boy Color" : "Game Boy";
}
