import assert from "node:assert/strict";
import test from "node:test";
import { matchesPs2Elf, parsePs2Elf } from "./parse.js";
import { isMipsElf, isUnsupportedMipsElf } from "../pyre/src/mips-elf.js";
import { isEmotionEngineElf } from "../pyre/src/ps2-mips.js";
import { specUrlsForArch } from "../pyre/src/constants.js";

function sample(type) {
  const bytes = new Uint8Array(256);
  const view = new DataView(bytes.buffer);
  bytes.set([0x7f, 0x45, 0x4c, 0x46, 1, 1, 1]);
  view.setUint16(16, type, true);
  view.setUint16(18, 8, true);
  view.setUint32(24, 0x25d0, true);
  view.setUint32(28, 52, true);
  view.setUint32(32, 84, true);
  view.setUint32(36, 0x20924001, true);
  view.setUint16(40, 52, true);
  view.setUint16(42, 32, true);
  view.setUint16(44, 1, true);
  view.setUint16(46, 40, true);
  view.setUint16(48, 2, true);
  view.setUint16(50, 1, true);
  view.setUint32(52, type === 0xff80 ? 0x70000080 : 1, true);
  view.setUint32(56, 164, true);
  view.setUint32(68, 20, true);
  view.setUint32(72, 20, true);
  view.setUint32(76, 4, true);
  view.setUint32(84 + 40, 1, true);
  view.setUint32(84 + 44, 3, true);
  view.setUint32(84 + 56, 184, true);
  view.setUint32(84 + 60, 16, true);
  bytes.set(new TextEncoder().encode("\0.iopmod\0.text\0"), 184);
  return bytes;
}

test("recognizes PS2 IOP IRX by ELF type and parses its module segment", () => {
  const bytes = sample(0xff80);
  assert.equal(matchesPs2Elf({ bytes, filename: "MODULE.IRX" }), true);
  assert.equal(isMipsElf(bytes), true);
  assert.equal(isUnsupportedMipsElf(bytes), false);
  const parsed = parsePs2Elf(bytes, "MODULE.IRX");
  assert.match(parsed.kind, /IOP relocatable module/);
  assert.equal(parsed.entry, 0x25d0);
  assert.equal(parsed.programs[0].label, "IOP module metadata");
  assert.equal(parsed.sections[1].name, ".iopmod");
});

test("recognizes MIPS executables by ELF content and filename", () => {
  const bytes = sample(2);
  assert.equal(matchesPs2Elf({ bytes, filename: "GAME.ELF" }), true);
  assert.match(parsePs2Elf(bytes, "GAME.ELF").kind, /EE candidate/);
  assert.equal(matchesPs2Elf({ bytes, filename: "GAME.IRX" }), false);
});

test("rejects truncated tables and non-MIPS ELF files", () => {
  const bytes = sample(0xff80);
  const view = new DataView(bytes.buffer);
  view.setUint32(28, 250, true);
  assert.throws(() => parsePs2Elf(bytes, "MODULE.IRX"), /Program header table/);
  view.setUint16(18, 3, true);
  assert.equal(matchesPs2Elf({ bytes, filename: "MODULE.IRX" }), false);
  assert.equal(isMipsElf(bytes), false);
});

test("Pyre keeps unsupported MIPS encodings hidden", () => {
  const bytes = sample(2);
  bytes[4] = 2;
  assert.equal(isUnsupportedMipsElf(bytes), true);
});

test("distinguishes Emotion Engine and IOP ELF headers", () => {
  assert.equal(isEmotionEngineElf(2, 0x20924001), true);
  assert.equal(isEmotionEngineElf(0xff90, 0), true);
  assert.equal(isEmotionEngineElf(0xff80, 1), false);
});

test("Pyre selects bundled specs for MIPS, R5900, and SuperH", () => {
  for (const arch of ["MIPS", "r5900", "SuperH"]) {
    const urls = specUrlsForArch(arch);
    assert.match(urls.manifestUrl, /\/public\/js\/file-lab\/plugins\/pyre\/specs\/manifest\.json$/);
  }
  assert.match(specUrlsForArch("x86").manifestUrl, /^https:\/\/pyre\.fuzzing\.science\//);
});
