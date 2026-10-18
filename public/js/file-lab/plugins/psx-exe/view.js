import { locatePsxExe } from "../../psx-image.js";

function hex(value) {
  var text = (value >>> 0).toString(16);
  while (text.length < 8) text = "0" + text;
  return "0x" + text;
}

function fieldRow(label, value) {
  var row = document.createElement("tr");
  var head = document.createElement("th");
  head.textContent = label;
  var cell = document.createElement("td");
  var code = document.createElement("code");
  code.textContent = value;
  cell.appendChild(code);
  row.appendChild(head);
  row.appendChild(cell);
  return row;
}

export function mountPsxExeView(ctx, panel) {
  panel.classList.add("rr-file-lab-psx-exe");
  panel.textContent = "";
  var exe = locatePsxExe(ctx.bytes);
  var title = document.createElement("h3");
  title.textContent = exe ? "PS-X EXE" : "Not a PS-X EXE";
  panel.appendChild(title);
  if (!exe) {
    var missing = document.createElement("p");
    missing.textContent = "This file does not start with a PS-X EXE header.";
    panel.appendChild(missing);
    return;
  }

  var intro = document.createElement("p");
  intro.textContent = "The payload starts at file offset 0x800 and is copied to " + hex(exe.dest) + ". R2 and Pyre use that address as the base of the MIPS listing.";
  panel.appendChild(intro);

  var table = document.createElement("table");
  table.className = "rr-file-lab-psx-fields";
  table.appendChild(fieldRow("Initial PC", hex(exe.pc)));
  table.appendChild(fieldRow("Initial GP", hex(exe.gp)));
  table.appendChild(fieldRow("Destination", hex(exe.dest)));
  table.appendChild(fieldRow("Payload size", hex(exe.payloadSize)));
  if (exe.dataSize) table.appendChild(fieldRow("Data", hex(exe.dataAddr) + " size " + hex(exe.dataSize)));
  if (exe.bssSize) table.appendChild(fieldRow("BSS", hex(exe.bssAddr) + " size " + hex(exe.bssSize)));
  if (exe.stackBase) table.appendChild(fieldRow("Stack base", hex(exe.stackBase)));
  if (exe.marker) table.appendChild(fieldRow("Marker", exe.marker));
  panel.appendChild(table);
}

export function destroyPsxExeView(panel) {
  if (!panel) return;
  panel.textContent = "";
  panel.classList.remove("rr-file-lab-psx-exe");
}
