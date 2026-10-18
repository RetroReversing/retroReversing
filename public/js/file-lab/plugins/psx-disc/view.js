import { decodeCueText, parseCue, parseDiscBytes, parseDiscSource, readUserBytes } from "../../psx-image.js";

var EXTRACT_LIMIT = 4 * 1024 * 1024;

function hex(value) {
  return "0x" + (value >>> 0).toString(16);
}

function directoryOf(path) {
  var slash = path.lastIndexOf("/");
  return slash >= 0 ? path.slice(0, slash) : "";
}

function baseName(path) {
  var slash = path.lastIndexOf("/");
  return slash >= 0 ? path.slice(slash + 1) : path;
}

function fieldRow(label, value) {
  var row = document.createElement("tr");
  var head = document.createElement("th");
  head.textContent = label;
  var cell = document.createElement("td");
  cell.textContent = value;
  row.appendChild(head);
  row.appendChild(cell);
  return row;
}

function section(title, body) {
  var wrap = document.createElement("section");
  wrap.className = "rr-file-lab-psx-section";
  var heading = document.createElement("h3");
  heading.textContent = title;
  wrap.appendChild(heading);
  wrap.appendChild(body);
  return wrap;
}

function findSibling(files, dir, name) {
  var wanted = name.toLowerCase();
  for (var i = 0; i < files.length; i++) {
    if (directoryOf(files[i].path) !== dir) continue;
    if (files[i].name.toLowerCase() === wanted || baseName(files[i].path).toLowerCase() === wanted) {
      return files[i];
    }
  }
  return null;
}

function cueForImage(files, image) {
  var dir = directoryOf(image.path);
  for (var i = 0; i < files.length; i++) {
    if (directoryOf(files[i].path) !== dir) continue;
    if (files[i].path === image.path) continue;
    var lower = files[i].name.toLowerCase();
    if (!lower.endsWith(".cue")) continue;
    return files[i];
  }
  return null;
}

function loadDisc(ctx, host) {
  var files = host.api.listFiles ? host.api.listFiles() : [];
  var dir = directoryOf(ctx.path);
  var cueText = decodeCueText(ctx.bytes);
  var cue = cueText ? parseCue(cueText) : null;

  if (cue) {
    var image = findSibling(files, dir, cue.fileName);
    var imageBytes = image && host.api.readFile ? host.api.readFile(image.path) : null;
    if (!imageBytes) {
      return { cue: cue, disc: null, imagePath: null, missingImage: true };
    }
    var fromBytes = parseDiscBytes(imageBytes);
    return {
      cue: cue,
      disc: fromBytes,
      imagePath: image.path,
      imageBytes: imageBytes,
      missingImage: false
    };
  }

  var disc = parseDiscBytes(ctx.bytes);
  var sibling = cueForImage(files, ctx);
  var siblingBytes = sibling && host.api.readFile ? host.api.readFile(sibling.path) : null;
  var siblingCue = siblingBytes ? parseCue(decodeCueText(siblingBytes) || "") : null;
  if (siblingCue && siblingCue.fileName.toLowerCase() !== baseName(ctx.path).toLowerCase()) {
    siblingCue = null;
  }
  if (!disc && siblingCue) {
    var cueLayout = Object.assign({}, siblingCue.layout, { startSector: siblingCue.startSector });
    disc = parseDiscSource({
      layout: cueLayout,
      byteLength: ctx.bytes.length,
      read: function (lba, size) {
        return readUserBytes(ctx.bytes, siblingCue.layout, lba, size, siblingCue.startSector || 0);
      }
    });
  }

  return {
    cue: siblingCue,
    disc: disc,
    imagePath: ctx.path,
    imageBytes: ctx.bytes,
    missingImage: false
  };
}

function extractedPath(host, imagePath, fileName) {
  var dir = directoryOf(imagePath);
  var candidate = dir ? dir + "/" + fileName : fileName;
  var files = host.api.listFiles ? host.api.listFiles() : [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].path === candidate) {
      return imagePath + "/" + fileName;
    }
  }
  return candidate;
}

function renderSummary(loaded) {
  var box = document.createElement("div");
  var title = document.createElement("h3");
  title.textContent = "PlayStation disc";
  box.appendChild(title);

  if (loaded.missingImage) {
    var missing = document.createElement("p");
    missing.textContent = "This cue names " + loaded.cue.fileName + " as a " + loaded.cue.layout.mode + " track. Drop that file beside the cue to list the disc.";
    box.appendChild(missing);
    return box;
  }

  if (!loaded.disc) {
    var failed = document.createElement("p");
    failed.textContent = "The data track does not contain an ISO9660 primary volume descriptor.";
    box.appendChild(failed);
    return box;
  }

  var disc = loaded.disc;
  var intro = document.createElement("p");
  var label = disc.volumeId || "(no volume label)";
  var sectors = disc.layout.sectorSize ? Math.floor((disc.byteLength || loaded.imageBytes.length) / disc.layout.sectorSize) : 0;
  intro.textContent = label + " is a " + disc.layout.mode + " track, " + sectors + " sectors.";
  box.appendChild(intro);

  if (loaded.cue) {
    var cueLine = document.createElement("p");
    cueLine.className = "rr-file-lab-psx-note";
    cueLine.textContent = "Cue sheet names " + loaded.cue.fileName + " as track " + loaded.cue.track.number + " " + loaded.cue.track.mode + ".";
    box.appendChild(cueLine);
  }

  var next = document.createElement("p");
  next.className = "rr-file-lab-psx-note";
  next.textContent = "Open the boot executable to disassemble it as little-endian MIPS I and decompile it from the destination address.";
  box.appendChild(next);
  return box;
}

function renderCnf(cnf) {
  var pre = document.createElement("pre");
  pre.className = "rr-file-lab-psx-cnf";
  pre.textContent = cnf && cnf.text ? cnf.text.replace(/\s+$/, "") : "(no SYSTEM.CNF)";
  return pre;
}

function renderFiles(loaded, host) {
  var table = document.createElement("table");
  table.className = "rr-file-lab-psx-fields";
  var head = document.createElement("tr");
  ["File", "Size", "LBA", "Notes", ""].forEach(function (label) {
    var cell = document.createElement("th");
    cell.textContent = label;
    head.appendChild(cell);
  });
  table.appendChild(head);

  var disc = loaded.disc;
  disc.files.forEach(function (file) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = file.path;
    var size = document.createElement("td");
    size.textContent = String(file.size);
    var lba = document.createElement("td");
    lba.textContent = String(file.lba);
    var notes = document.createElement("td");
    var note = "";
    if (disc.bootFile && file.path === disc.bootFile.path) note = "Boot executable";
    else if (file.exe) note = "PS-X EXE";
    else if (file.name.toUpperCase() === "SYSTEM.CNF") note = "Boot configuration";
    if (file.exe) {
      note += (note ? ", " : "") + "PC " + hex(file.exe.pc) + ", load " + hex(file.exe.dest);
    }
    notes.textContent = note;

    var action = document.createElement("td");
    if (file.size > 0 && file.size <= EXTRACT_LIMIT && host.api.addExtractedFile && loaded.imageBytes) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "rr-file-lab-psx-open";
      button.textContent = file.exe ? "Open executable" : "Open file";
      button.addEventListener("click", function () {
        var bytes = readUserBytes(
          loaded.imageBytes,
          disc.layout,
          file.lba,
          file.size,
          disc.layout.startSector || 0
        );
        if (!bytes) return;
        var path = extractedPath(host, loaded.imagePath, file.path.replace(/^\/+/, ""));
        host.api.addExtractedFile(path, bytes);
      });
      action.appendChild(button);
    }

    row.appendChild(name);
    row.appendChild(size);
    row.appendChild(lba);
    row.appendChild(notes);
    row.appendChild(action);
    table.appendChild(row);
  });

  return table;
}

export function mountPsxDiscView(ctx, panel, host) {
  panel.classList.add("rr-file-lab-psx-disc");
  panel.textContent = "";
  var loaded = loadDisc(ctx, host);
  panel.appendChild(renderSummary(loaded));
  if (!loaded.disc) return { loaded: loaded };

  if (loaded.disc.systemCnf) {
    var body = document.createElement("div");
    if (loaded.disc.systemCnf.boot) {
      var boot = document.createElement("p");
      boot.textContent = "BOOT " + loaded.disc.systemCnf.boot;
      body.appendChild(boot);
    }
    body.appendChild(renderCnf(loaded.disc.systemCnf));
    panel.appendChild(section("SYSTEM.CNF", body));
  }

  panel.appendChild(section("Files", renderFiles(loaded, host)));
  return { loaded: loaded };
}

export function destroyPsxDiscView(panel) {
  if (!panel) return;
  panel.textContent = "";
  panel.classList.remove("rr-file-lab-psx-disc");
}
