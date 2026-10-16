import assert from "node:assert/strict";
import fs from "node:fs";
import { decodeSh2 } from "../saturn-ip/sh2.js";
import { buildHighlightPayload, locateSaturnProgram, parseSaturnProgram } from "./parse.js";

function putU32(bytes, offset, value) {
  bytes[offset] = (value >>> 24) & 0xff;
  bytes[offset + 1] = (value >>> 16) & 0xff;
  bytes[offset + 2] = (value >>> 8) & 0xff;
  bytes[offset + 3] = value & 0xff;
}

function putAscii(bytes, offset, text) {
  for (var i = 0; i < text.length; i++) bytes[offset + i] = text.charCodeAt(i);
}

function stackImage() {
  var bytes = new Uint8Array(0x100);
  bytes[0] = 0xdf;
  bytes[1] = 0x0e;
  bytes[2] = 0xe1;
  bytes[3] = 0xf0;
  putU32(bytes, 0x3c, 0x060e9b70);
  putAscii(bytes, 0x80, "GFS_SGL Version 2.11 1996-03-21");
  putAscii(bytes, 0xb0, "Ver1.31 95/06/20SATURN(S) sample");
  return bytes;
}

var image = stackImage();
var header = locateSaturnProgram(image);
assert.equal(header.kind, "pool");
assert.equal(header.register, 15);
assert.equal(header.poolOffset, 0x3c);
assert.equal(header.value, 0x060e9b70);

var parsed = parseSaturnProgram(image);
assert.equal(parsed.banners.length, 1);
assert.equal(parsed.banners[0].text, "GFS_SGL Version 2.11 1996-03-21");
assert.equal(parsed.banners[0].offset, 0x80);
assert.equal(parsed.versionTexts[0].text.indexOf("Ver1.31 95/06/20"), 0);

var highlights = buildHighlightPayload(image);
assert.equal(highlights.formatId, "saturn_prog");
assert.equal(highlights.regions[0].start, 0x3c);
assert.equal(highlights.regions[0].label, "Initial stack pointer");

var decoded = decodeSh2(0xdf0e, 0);
assert.equal(decoded.text, "mov.l @(0x0000003c, pc), r15");
assert.equal(decoded.target, 0x3c);

var vector = new Uint8Array(32);
putU32(vector, 0, 0x06008008);
putU32(vector, 4, 0x0600b88c);
vector[8] = 0x00;
vector[9] = 0x09;
var vectorHeader = locateSaturnProgram(vector);
assert.equal(vectorHeader.kind, "vector");
assert.equal(vectorHeader.stack, 0x06008008);
assert.equal(vectorHeader.entry, 0x0600b88c);
assert.equal(vectorHeader.entryOffset, 8);

var ip = new Uint8Array(0x100);
putAscii(ip, 0, "SEGA SEGASATURN ");
assert.equal(locateSaturnProgram(ip), null);
assert.equal(locateSaturnProgram(Uint8Array.of(0x04, 0x08, 0x00, 0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)), null);

var menuPath = "/Volumes/Data/SaturnDemoExes/Bootleg_Sampler_Europe_Made_in_EU_Made_in_Japan__BOOTLEG_SAMPLER__00MENU.BIN";
var dataPath = "/Volumes/Data/SaturnDemoExes/Bootleg_Sampler_Europe_Made_in_EU_Made_in_Japan__BOOTLEG_SAMPLER__VF2DIS.BIN";
if (fs.existsSync(menuPath)) {
  var menu = new Uint8Array(fs.readFileSync(menuPath));
  var menuHeader = locateSaturnProgram(menu);
  assert.equal(menuHeader.kind, "pool");
  assert.equal(menuHeader.value, 0x060e9b70);
  var menuParsed = parseSaturnProgram(menu);
  assert.equal(menuParsed.banners.length, 0);
  assert.ok(menuParsed.versionTexts.some(function (item) { return item.text.indexOf("Ver1.31 95/06/20") === 0; }));
}
if (fs.existsSync(dataPath)) {
  var display = new Uint8Array(fs.readFileSync(dataPath));
  assert.equal(locateSaturnProgram(display), null);
}

console.log("saturn program parser tests passed");
