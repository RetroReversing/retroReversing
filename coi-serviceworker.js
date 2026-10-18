// Isolate File Lab for SharedArrayBuffer without isolating articles and embeds.
const FILE_LAB_PATH = "/file-lab";

function isFileLabUrl(url) {
  return new URL(url).pathname.replace(/\/+$/, "") === FILE_LAB_PATH;
}

if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

  self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.cache === "only-if-cached" && request.mode !== "same-origin") return;

    event.respondWith((async () => {
      const client = event.clientId && await self.clients.get(event.clientId);
      const needsIsolation = request.mode === "navigate"
        ? isFileLabUrl(request.url)
        : client && isFileLabUrl(client.url);
      const response = await fetch(request);
      if (!needsIsolation || response.status === 0) return response;

      const headers = new Headers(response.headers);
      headers.set("Cross-Origin-Embedder-Policy", "require-corp");
      headers.set("Cross-Origin-Opener-Policy", "same-origin");
      headers.set("Cross-Origin-Resource-Policy", "cross-origin");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    })());
  });
} else if ("serviceWorker" in navigator && window.isSecureContext) {
  const isFileLabPage = isFileLabUrl(window.location.href);
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    // Reload once when switching from the old site-wide worker or first isolating File Lab.
    if (isFileLabPage !== window.crossOriginIsolated) window.location.reload();
  });
  navigator.serviceWorker.register("/coi-serviceworker.js", { scope: "/" })
    .catch(error => console.error("File Lab isolation worker failed to register:", error));
}
