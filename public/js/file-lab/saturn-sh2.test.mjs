import assert from "node:assert/strict";
import fs from "node:fs";
import { locateSaturnSh2, saturnR2AnalyzeCommand, saturnR2ArchArgs } from "./saturn-sh2.js";

function putU32(bytes, offset, value) {
  bytes[offset] = (value >>> 24) & 0xff;
  bytes[offset + 1] = (value >>> 16) & 0xff;
  bytes[offset + 2] = (value >>> 8) & 0xff;
  bytes[offset + 3] = value & 0xff;
}

function stackImage() {
  var bytes = new Uint8Array(0x80);
  bytes[0] = 0xdf;
  bytes[1] = 0x0e;
  putU32(bytes, 0x3c, 0x060e9b70);
  return bytes;
}

var program = locateSaturnSh2(stackImage());
assert.equal(program.kind, "program");
assert.equal(program.baddr, 0);
assert.equal(program.entry, 0);
assert.deepEqual(saturnR2ArchArgs(program), [
  "-a", "sh",
  "-b", "32",
  "-m", "0x0",
  "-e", "cfg.bigendian=true",
  "-e", "asm.cpu=sh2"
]);
assert.equal(saturnR2AnalyzeCommand(program), "s 0x0; af; aaa; aflj");

var vector = new Uint8Array(32);
putU32(vector, 0, 0x06008008);
putU32(vector, 4, 0x0600b88c);
var vectorImage = locateSaturnSh2(vector);
assert.equal(vectorImage.kind, "program");
assert.equal(vectorImage.entry, 8);

var ip = new Uint8Array(0x120);
var magic = "SEGA SEGASATURN ";
for (var i = 0; i < magic.length; i++) ip[i] = magic.charCodeAt(i);
var ipImage = locateSaturnSh2(ip);
assert.equal(ipImage.kind, "ip");
assert.equal(ipImage.baddr, 0x06002000);
assert.equal(ipImage.entry, 0x06002100);
assert.equal(saturnR2AnalyzeCommand(ipImage), "s 0x6002100; af; aaa; aflj");

assert.equal(locateSaturnSh2(Uint8Array.of(0x04, 0x08, 0x00, 0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)), null);
assert.equal(saturnR2AnalyzeCommand(null), "aaa; aflj");

var menuPath = "/Volumes/Data/SaturnDemoExes/Bootleg_Sampler_Europe_Made_in_EU_Made_in_Japan__BOOTLEG_SAMPLER__00MENU.BIN";
var dataPath = "/Volumes/Data/SaturnDemoExes/Bootleg_Sampler_Europe_Made_in_EU_Made_in_Japan__BOOTLEG_SAMPLER__VF2DIS.BIN";
if (fs.existsSync(menuPath)) {
  var menu = locateSaturnSh2(new Uint8Array(fs.readFileSync(menuPath)));
  assert.equal(menu.kind, "program");
  assert.equal(menu.entry, 0);
}
if (fs.existsSync(dataPath)) {
  assert.equal(locateSaturnSh2(new Uint8Array(fs.readFileSync(dataPath))), null);
}

console.log("saturn sh2 image tests passed");
