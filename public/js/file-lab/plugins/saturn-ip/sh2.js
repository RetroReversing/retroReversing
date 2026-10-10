/**
 * Linear SH-2 decoder for Saturn Initial Program code.
 * Unknown encodings stay as .word so data inside the boot image stays visible.
 */

function sext(value, bits) {
  var sign = 1 << (bits - 1);
  var masked = value & ((1 << bits) - 1);
  return (masked & sign) ? masked - (1 << bits) : masked;
}

function hex(value, width) {
  var text = (value >>> 0).toString(16);
  while (text.length < width) text = "0" + text;
  return text;
}

function reg(index) {
  return "r" + (index & 0xf);
}

function imm8(value) {
  var signed = sext(value, 8);
  if (signed < 0) return "#" + signed;
  return "#0x" + hex(signed, 2);
}

function addr(value) {
  return "0x" + hex(value, 8);
}

function controlName(code) {
  if (code === 0) return "sr";
  if (code === 1) return "gbr";
  if (code === 2) return "vbr";
  if (code === 3) return "ssr";
  if (code === 4) return "spc";
  if (code >= 8) return "r" + (code - 8) + "_bank";
  return null;
}

function decode0(word) {
  if (word === 0x0008) return { text: "clrt" };
  if (word === 0x0009) return { text: "nop" };
  if (word === 0x000b) return { text: "rts", delay: true };
  if (word === 0x0018) return { text: "sett" };
  if (word === 0x0019) return { text: "div0u" };
  if (word === 0x001b) return { text: "sleep" };
  if (word === 0x0028) return { text: "clrmac" };
  if (word === 0x002b) return { text: "rte", delay: true };

  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var code = (word >>> 4) & 0xf;

  if ((word & 0xf00f) === 0x0002) {
    var stc = controlName(code);
    if (stc) return { text: "stc " + stc + ", " + reg(rn) };
  }
  if ((word & 0xf0ff) === 0x0003) return { text: "bsrf " + reg(rn), delay: true };
  if ((word & 0xf0ff) === 0x0023) return { text: "braf " + reg(rn), delay: true };
  if ((word & 0xf0ff) === 0x000a) return { text: "sts mach, " + reg(rn) };
  if ((word & 0xf0ff) === 0x001a) return { text: "sts macl, " + reg(rn) };
  if ((word & 0xf0ff) === 0x002a) return { text: "sts pr, " + reg(rn) };
  if ((word & 0xf0ff) === 0x0029) return { text: "movt " + reg(rn) };

  if ((word & 0xf00f) === 0x0004) return { text: "mov.b " + reg(rm) + ", @(" + reg(0) + ", " + reg(rn) + ")" };
  if ((word & 0xf00f) === 0x0005) return { text: "mov.w " + reg(rm) + ", @(" + reg(0) + ", " + reg(rn) + ")" };
  if ((word & 0xf00f) === 0x0006) return { text: "mov.l " + reg(rm) + ", @(" + reg(0) + ", " + reg(rn) + ")" };
  if ((word & 0xf00f) === 0x0007) return { text: "mul.l " + reg(rm) + ", " + reg(rn) };
  if ((word & 0xf00f) === 0x000c) return { text: "mov.b @(" + reg(0) + ", " + reg(rm) + "), " + reg(rn) };
  if ((word & 0xf00f) === 0x000d) return { text: "mov.w @(" + reg(0) + ", " + reg(rm) + "), " + reg(rn) };
  if ((word & 0xf00f) === 0x000e) return { text: "mov.l @(" + reg(0) + ", " + reg(rm) + "), " + reg(rn) };
  if ((word & 0xf00f) === 0x000f) return { text: "mac.l @" + reg(rm) + "+, @" + reg(rn) + "+" };

  return null;
}

function decode2(word) {
  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var low = word & 0xf;
  var table = {
    0: "mov.b " + reg(rm) + ", @" + reg(rn),
    1: "mov.w " + reg(rm) + ", @" + reg(rn),
    2: "mov.l " + reg(rm) + ", @" + reg(rn),
    4: "mov.b " + reg(rm) + ", @-" + reg(rn),
    5: "mov.w " + reg(rm) + ", @-" + reg(rn),
    6: "mov.l " + reg(rm) + ", @-" + reg(rn),
    7: "div0s " + reg(rm) + ", " + reg(rn),
    8: "tst " + reg(rm) + ", " + reg(rn),
    9: "and " + reg(rm) + ", " + reg(rn),
    10: "xor " + reg(rm) + ", " + reg(rn),
    11: "or " + reg(rm) + ", " + reg(rn),
    12: "cmp/str " + reg(rm) + ", " + reg(rn),
    13: "xtrct " + reg(rm) + ", " + reg(rn),
    14: "mulu.w " + reg(rm) + ", " + reg(rn),
    15: "muls.w " + reg(rm) + ", " + reg(rn)
  };
  return table[low] ? { text: table[low] } : null;
}

function decode3(word) {
  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var low = word & 0xf;
  var table = {
    0: "cmp/eq " + reg(rm) + ", " + reg(rn),
    2: "cmp/hs " + reg(rm) + ", " + reg(rn),
    3: "cmp/ge " + reg(rm) + ", " + reg(rn),
    4: "div1 " + reg(rm) + ", " + reg(rn),
    5: "dmulu.l " + reg(rm) + ", " + reg(rn),
    6: "cmp/hi " + reg(rm) + ", " + reg(rn),
    7: "cmp/gt " + reg(rm) + ", " + reg(rn),
    8: "sub " + reg(rm) + ", " + reg(rn),
    10: "subc " + reg(rm) + ", " + reg(rn),
    11: "subv " + reg(rm) + ", " + reg(rn),
    12: "add " + reg(rm) + ", " + reg(rn),
    13: "dmuls.l " + reg(rm) + ", " + reg(rn),
    14: "addc " + reg(rm) + ", " + reg(rn),
    15: "addv " + reg(rm) + ", " + reg(rn)
  };
  return table[low] ? { text: table[low] } : null;
}

function decode4(word) {
  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var low = word & 0xff;
  var named = {
    0x00: "shll " + reg(rn),
    0x01: "shlr " + reg(rn),
    0x04: "rotl " + reg(rn),
    0x05: "rotr " + reg(rn),
    0x08: "shll2 " + reg(rn),
    0x09: "shlr2 " + reg(rn),
    0x10: "dt " + reg(rn),
    0x11: "cmp/pz " + reg(rn),
    0x15: "cmp/pl " + reg(rn),
    0x18: "shll8 " + reg(rn),
    0x19: "shlr8 " + reg(rn),
    0x1b: "tas.b @" + reg(rn),
    0x20: "shal " + reg(rn),
    0x21: "shar " + reg(rn),
    0x24: "rotcl " + reg(rn),
    0x25: "rotcr " + reg(rn),
    0x28: "shll16 " + reg(rn),
    0x29: "shlr16 " + reg(rn),
    0x02: "sts.l mach, @-" + reg(rn),
    0x12: "sts.l macl, @-" + reg(rn),
    0x22: "sts.l pr, @-" + reg(rn),
    0x0a: "lds " + reg(rn) + ", mach",
    0x1a: "lds " + reg(rn) + ", macl",
    0x2a: "lds " + reg(rn) + ", pr",
    0x06: "lds.l @" + reg(rn) + "+, mach",
    0x16: "lds.l @" + reg(rn) + "+, macl",
    0x26: "lds.l @" + reg(rn) + "+, pr",
    0x0b: "jsr @" + reg(rn),
    0x2b: "jmp @" + reg(rn)
  };

  if (Object.prototype.hasOwnProperty.call(named, low)) {
    var delay = low === 0x0b || low === 0x2b;
    return { text: named[low], delay: delay };
  }

  if ((word & 0xf00f) === 0x400e) {
    var ldc = controlName((word >>> 4) & 0xf);
    if (ldc) return { text: "ldc " + reg(rn) + ", " + ldc };
  }
  if ((word & 0xf00f) === 0x4007) {
    var ldcPost = controlName((word >>> 4) & 0xf);
    if (ldcPost) return { text: "ldc.l @" + reg(rn) + "+, " + ldcPost };
  }
  if ((word & 0xf00f) === 0x4003) {
    var stc = controlName((word >>> 4) & 0xf);
    if (stc) return { text: "stc.l " + stc + ", @-" + reg(rn) };
  }
  if ((word & 0xf00f) === 0x400f) return { text: "mac.w @" + reg(rm) + "+, @" + reg(rn) + "+" };
  return null;
}

function decode6(word) {
  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var low = word & 0xf;
  var table = {
    0: "mov.b @" + reg(rm) + ", " + reg(rn),
    1: "mov.w @" + reg(rm) + ", " + reg(rn),
    2: "mov.l @" + reg(rm) + ", " + reg(rn),
    3: "mov " + reg(rm) + ", " + reg(rn),
    4: "mov.b @" + reg(rm) + "+, " + reg(rn),
    5: "mov.w @" + reg(rm) + "+, " + reg(rn),
    6: "mov.l @" + reg(rm) + "+, " + reg(rn),
    7: "not " + reg(rm) + ", " + reg(rn),
    8: "swap.b " + reg(rm) + ", " + reg(rn),
    9: "swap.w " + reg(rm) + ", " + reg(rn),
    10: "negc " + reg(rm) + ", " + reg(rn),
    11: "neg " + reg(rm) + ", " + reg(rn),
    12: "extu.b " + reg(rm) + ", " + reg(rn),
    13: "extu.w " + reg(rm) + ", " + reg(rn),
    14: "exts.b " + reg(rm) + ", " + reg(rn),
    15: "exts.w " + reg(rm) + ", " + reg(rn)
  };
  return table[low] ? { text: table[low] } : null;
}

function branch8(word, pc, mnemonic, delay) {
  var disp = sext(word & 0xff, 8);
  return {
    text: mnemonic + " " + addr((pc + 4 + disp * 2) >>> 0),
    delay: delay,
    target: (pc + 4 + disp * 2) >>> 0
  };
}

function decode8(word, pc) {
  var rn = (word >>> 8) & 0xf;
  var disp = word & 0xf;
  var op = word & 0xff00;
  if (op === 0x8000) return { text: "mov.b r0, @(" + disp + ", " + reg(rn) + ")" };
  if (op === 0x8100) return { text: "mov.w r0, @(" + (disp * 2) + ", " + reg(rn) + ")" };
  if (op === 0x8400) return { text: "mov.b @(" + disp + ", " + reg((word >>> 4) & 0xf) + "), r0" };
  if (op === 0x8500) return { text: "mov.w @(" + (disp * 2) + ", " + reg((word >>> 4) & 0xf) + "), r0" };
  if (op === 0x8800) return { text: "cmp/eq " + imm8(word & 0xff) + ", r0" };
  if (op === 0x8900) return branch8(word, pc, "bt", false);
  if (op === 0x8b00) return branch8(word, pc, "bf", false);
  if (op === 0x8d00) return branch8(word, pc, "bt/s", true);
  if (op === 0x8f00) return branch8(word, pc, "bf/s", true);
  return null;
}

function decodeC(word) {
  var disp = word & 0xff;
  var op = word & 0xff00;
  if (op === 0xc000) return { text: "mov.b r0, @(" + disp + ", gbr)" };
  if (op === 0xc100) return { text: "mov.w r0, @(" + (disp * 2) + ", gbr)" };
  if (op === 0xc200) return { text: "mov.l r0, @(" + (disp * 4) + ", gbr)" };
  if (op === 0xc300) return { text: "trapa " + imm8(disp) };
  if (op === 0xc400) return { text: "mov.b @(" + disp + ", gbr), r0" };
  if (op === 0xc500) return { text: "mov.w @(" + (disp * 2) + ", gbr), r0" };
  if (op === 0xc600) return { text: "mov.l @(" + (disp * 4) + ", gbr), r0" };
  if (op === 0xc800) return { text: "tst " + imm8(disp) + ", r0" };
  if (op === 0xc900) return { text: "and " + imm8(disp) + ", r0" };
  if (op === 0xca00) return { text: "xor " + imm8(disp) + ", r0" };
  if (op === 0xcb00) return { text: "or " + imm8(disp) + ", r0" };
  if (op === 0xcc00) return { text: "tst.b " + imm8(disp) + ", @(r0, gbr)" };
  if (op === 0xcd00) return { text: "and.b " + imm8(disp) + ", @(r0, gbr)" };
  if (op === 0xce00) return { text: "or.b " + imm8(disp) + ", @(r0, gbr)" };
  if (op === 0xcf00) return { text: "xor.b " + imm8(disp) + ", @(r0, gbr)" };
  return null;
}

export function decodeSh2(word, pc) {
  var nibble = word >>> 12;
  var rn = (word >>> 8) & 0xf;
  var rm = (word >>> 4) & 0xf;
  var decoded = null;

  if (nibble === 0x0) decoded = decode0(word);
  else if (nibble === 0x1) decoded = { text: "mov.l " + reg(rm) + ", @(" + ((word & 0xf) * 4) + ", " + reg(rn) + ")" };
  else if (nibble === 0x2) decoded = decode2(word);
  else if (nibble === 0x3) decoded = decode3(word);
  else if (nibble === 0x4) decoded = decode4(word);
  else if (nibble === 0x5) decoded = { text: "mov.l @(" + ((word & 0xf) * 4) + ", " + reg(rm) + "), " + reg(rn) };
  else if (nibble === 0x6) decoded = decode6(word);
  else if (nibble === 0x7) decoded = { text: "add " + imm8(word & 0xff) + ", " + reg(rn) };
  else if (nibble === 0x8) decoded = decode8(word, pc);
  else if (nibble === 0x9) {
    var dispW = word & 0xff;
    var targetW = ((pc + 4) + dispW * 2) >>> 0;
    decoded = { text: "mov.w @(" + addr(targetW) + ", pc), " + reg(rn), target: targetW };
  } else if (nibble === 0xa || nibble === 0xb) {
    var disp12 = sext(word & 0xfff, 12);
    var target = (pc + 4 + disp12 * 2) >>> 0;
    decoded = { text: (nibble === 0xa ? "bra " : "bsr ") + addr(target), delay: true, target: target };
  } else if (nibble === 0xc) decoded = decodeC(word);
  else if (nibble === 0xd) {
    var dispL = word & 0xff;
    var targetL = ((((pc + 4) & ~3) + dispL * 4) >>> 0);
    decoded = { text: "mov.l @(" + addr(targetL) + ", pc), " + reg(rn), target: targetL };
  } else if (nibble === 0xe) decoded = { text: "mov " + imm8(word & 0xff) + ", " + reg(rn) };

  if (!decoded || !decoded.text) {
    return { text: ".word 0x" + hex(word, 4), delay: false, target: null, size: 2 };
  }

  return {
    text: decoded.text,
    delay: !!decoded.delay,
    target: decoded.target == null ? null : decoded.target,
    size: 2
  };
}

export function disassembleRange(bytes, start, end, loadBase) {
  var lines = [];
  var cursor = start + (start & 1);
  var limit = Math.min(end, bytes.length);
  var pendingDelay = false;

  while (cursor + 1 < limit) {
    var word = (bytes[cursor] << 8) | bytes[cursor + 1];
    var pc = (loadBase + cursor) >>> 0;
    var decoded = decodeSh2(word, pc);
    var text = decoded.text;
    if (pendingDelay) text += "  ; delay slot";
    lines.push({
      offset: cursor,
      pc: pc,
      word: word,
      text: text,
      target: decoded.target
    });
    pendingDelay = decoded.delay;
    cursor += 2;
  }

  return lines;
}
