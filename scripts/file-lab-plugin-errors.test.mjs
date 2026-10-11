import assert from "node:assert/strict";
import { test } from "node:test";
import { PluginRegistry } from "../public/js/file-lab/plugin-registry.js";

const workingModule = "data:text/javascript,export default {matches: () => true}";
const missingModule = "./missing-plugin-for-error-test.js";

test("failed imports report a plugin name while working views remain available", async () => {
  let errors;
  const registry = new PluginRegistry(undefined, undefined, value => { errors = value; });
  registry.setEntries([
    { id: "broken", title: "Broken plugin", module: missingModule, match: { always: true } },
    { id: "working", title: "Working plugin", module: workingModule, match: { always: true } },
    { id: "disabled", module: missingModule, enabled: false }
  ]);
  const matches = await registry.getMatchingPlugins({ size: 32, bytes: new Uint8Array(32) });
  assert.deepEqual(matches.map(entry => entry.id), ["working"]);
  assert.deepEqual(errors, [{ id: "broken", title: "Broken plugin" }]);
  // A successful retry removes the notice rather than leaving a stale failure.
  registry.getEntry("broken").module = workingModule;
  await registry.loadPlugin("broken");
  assert.deepEqual(errors, []);
});

test("preload failures report an error and removing the plugin clears it", async t => {
  let errors;
  t.mock.method(globalThis, "fetch", async () => ({
    ok: true,
    json: async () => ({ plugins: [{ id: "preload", module: missingModule, preload: true }] })
  }));
  const oldWindow = globalThis.window;
  globalThis.window = {};
  t.after(() => { globalThis.window = oldWindow; });
  const registry = new PluginRegistry(undefined, undefined, value => { errors = value; });
  await registry.init();
  assert.deepEqual(errors, [{ id: "preload", title: "preload" }]);
  registry.setEntries([]);
  assert.deepEqual(errors, []);
});
