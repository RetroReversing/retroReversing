import assert from "node:assert/strict";
import { decodeSh2, disassembleRange } from "./sh2.js";
import { buildHighlightPayload, formatIpDate, parseSaturnIp } from "./parse.js";

function expectInsn(opcode, pc, text, extra) {
  var decoded = decodeSh2(opcode, pc);
  assert.equal(decoded.text, text, "0x" + opcode.toString(16));
  if (extra) {
    if (extra.delay != null) assert.equal(decoded.delay, extra.delay);
    if (extra.target != null) assert.equal(decoded.target, extra.target);
  }
}

var pc = 0x06002100;
expectInsn(0x0009, pc, "nop");
expectInsn(0x000b, pc, "rts", { delay: true });
expectInsn(0x0008, pc, "clrt");
expectInsn(0x0018, pc, "sett");
expectInsn(0x0019, pc, "div0u");
expectInsn(0x0028, pc, "clrmac");
expectInsn(0x002b, pc, "rte", { delay: true });
expectInsn(0x001b, pc, "sleep");
expectInsn(0xe123, pc, "mov #0x23, r1");
expectInsn(0xe1ff, pc, "mov #-1, r1");
expectInsn(0x6103, pc, "mov r0, r1");
expectInsn(0x310c, pc, "add r0, r1");
expectInsn(0x7005, pc, "add #0x05, r0");
expectInsn(0x7080, pc, "add #-128, r0");
expectInsn(0xa000, pc, "bra 0x06002104", { delay: true, target: 0x06002104 });
expectInsn(0xaffe, pc, "bra 0x06002100", { delay: true, target: 0x06002100 });
expectInsn(0xb000, pc, "bsr 0x06002104", { delay: true, target: 0x06002104 });
expectInsn(0x8901, pc, "bt 0x06002106", { delay: false, target: 0x06002106 });
expectInsn(0x8d01, pc, "bt/s 0x06002106", { delay: true, target: 0x06002106 });
expectInsn(0xd102, pc, "mov.l @(0x0600210c, pc), r1", { target: 0x0600210c });
expectInsn(0x400b, pc, "jsr @r0", { delay: true });
expectInsn(0x412b, pc, "jmp @r1", { delay: true });
expectInsn(0x0000, pc, ".word 0x0000");

var delayed = disassembleRange(Uint8Array.of(0x00, 0x0b, 0x00, 0x09), 0, 4, 0x06002000);
assert.equal(delayed[0].text, "rts");
assert.match(delayed[1].text, /nop\s+; delay slot/);

assert.deepEqual(formatIpDate("19940912"), { iso: "1994-09-12", order: "YYYYMMDD" });
assert.deepEqual(formatIpDate("04171995"), { iso: "1995-04-17", order: "MMDDYYYY" });
assert.equal(formatIpDate("19941399"), null);

function putAscii(bytes, offset, text, size) {
  for (var i = 0; i < size; i++) bytes[offset + i] = i < text.length ? text.charCodeAt(i) : 0x20;
}

function putU32(bytes, offset, value) {
  bytes[offset] = (value >>> 24) & 0xff;
  bytes[offset + 1] = (value >>> 16) & 0xff;
  bytes[offset + 2] = (value >>> 8) & 0xff;
  bytes[offset + 3] = value & 0xff;
}

function sampleIp() {
  var bytes = new Uint8Array(0x1200);
  putAscii(bytes, 0x00, "SEGA SEGASATURN ", 16);
  putAscii(bytes, 0x10, "SEGA TP T-999", 16);
  putAscii(bytes, 0x20, "T-99901G", 10);
  putAscii(bytes, 0x2a, "V1.000", 6);
  putAscii(bytes, 0x30, "19940912", 8);
  putAscii(bytes, 0x38, "CD-1/1", 8);
  putAscii(bytes, 0x40, "JT", 10);
  putAscii(bytes, 0x50, "JM", 16);
  putAscii(bytes, 0x60, "SAMPLE GAME", 0x70);
  putU32(bytes, 0xe0, 0x1000);
  putU32(bytes, 0xe8, 0);
  putU32(bytes, 0xec, 0);
  putU32(bytes, 0xf0, 0x06004000);
  putU32(bytes, 0xf4, 0x00002000);
  bytes[0x100] = 0x00;
  bytes[0x101] = 0x09;
  bytes[0x102] = 0x00;
  bytes[0x103] = 0x0b;
  bytes[0xe00] = 0xa0;
  bytes[0xe01] = 0x00;
  return bytes;
}

var parsed = parseSaturnIp(sampleIp());
assert.ok(parsed);
assert.equal(parsed.summary.title, "SAMPLE GAME");
assert.equal(parsed.summary.product, "T-99901G");
assert.equal(parsed.summary.version, "V1.000");
assert.equal(parsed.summary.date, "1994-09-12");
assert.equal(parsed.ipSize, 0x1000);
assert.ok(parsed.checks.some(function (check) { return check.level === "ok" && /Area symbols are JT/.test(check.message); }));
assert.ok(parsed.checks.some(function (check) { return /1st read address 0x06004000/.test(check.message); }));

var security = parsed.regions.find(function (region) { return region.id === "security_code"; });
var aip = parsed.regions.find(function (region) { return region.id === "area_and_aip"; });
assert.equal(security.start, 0x100);
assert.equal(security.end, 0xe00);
assert.equal(aip.start, 0xe00);
assert.equal(aip.end, 0x1000);

var highlights = buildHighlightPayload(sampleIp());
assert.equal(highlights.formatId, "saturn_ip");
assert.equal(highlights.regions[0].start, 0);
assert.equal(highlights.regions[0].id, 0);

var raw = new Uint8Array(2352 * 2);
raw[0] = 0x00;
for (var i = 1; i < 11; i++) raw[i] = 0xff;
raw[11] = 0x00;
var user = sampleIp();
raw.set(user.subarray(0, 2048), 16);
raw.set(user.subarray(2048, 4096), 2352 + 16);
var rawParsed = parseSaturnIp(raw);
assert.equal(rawParsed.layout.kind, "mode1-2352");
assert.equal(rawParsed.summary.title, "SAMPLE GAME");
var rawHighlights = buildHighlightPayload(raw);
var hardware = rawHighlights.regions.find(function (region) { return region.path === "hardware_identifier"; });
assert.equal(hardware.start, 16);
var securityRaw = rawHighlights.regions.filter(function (region) { return region.path === "security_code"; });
assert.ok(securityRaw.length >= 2, "security code should split across raw sectors");
assert.equal(securityRaw[0].start, 16 + 0x100);

assert.equal(parseSaturnIp(Uint8Array.of(1, 2, 3, 4)), null);

console.log("saturn ip parser tests passed");
