export function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function bytesToBase64(bytes) {
  var chunkSize = 8192;
  var binary = "";
  for (var i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export function base64ToBytes(base64) {
  var binary = atob(base64);
  var bytes = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export function createFileContext(file) {
  return {
    filename: file.name,
    path: file.path,
    bytes: file.data,
    size: file.size,
    fileKey: file.fileKey || null
  };
}

/**
 * Stable content hash for shared plugin state (SHA-256 hex).
 * @param {Uint8Array} bytes
 * @returns {Promise<string | null>}
 */
export async function computeFileKey(bytes) {
  if (!bytes || !bytes.length) return null;

  if (globalThis.crypto && crypto.subtle && typeof crypto.subtle.digest === "function") {
    var hash = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(hash))
      .map(function (b) {
        return b.toString(16).padStart(2, "0");
      })
      .join("");
  }

  // Weak fallback when SubtleCrypto is unavailable.
  var head = bytes.subarray(0, Math.min(2048, bytes.length));
  var tail = bytes.length > 2048 ? bytes.subarray(bytes.length - 2048) : new Uint8Array(0);
  var acc = bytes.length;
  for (var i = 0; i < head.length; i++) acc = ((acc << 5) - acc + head[i]) | 0;
  for (var j = 0; j < tail.length; j++) acc = ((acc << 5) - acc + tail[j]) | 0;
  return "fallback-" + (acc >>> 0).toString(16) + "-" + bytes.length.toString(16);
}

export function renderNotice(message) {
  return '<div class="rr-file-lab-notice">' + escapeHtml(message) + "</div>";
}
