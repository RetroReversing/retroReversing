import { matchesPs2Elf, parsePs2Elf } from "./parse.js";

function hex(value) {
  return "0x" + value.toString(16).toUpperCase();
}

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value != null) node.textContent = value;
  return node;
}

function addSection(root, title) {
  const section = element("section", "rr-file-lab-ps2-section");
  section.appendChild(element("h3", "", title));
  root.appendChild(section);
  return section;
}

function addTable(section, headers, rows) {
  const wrapper = element("div", "rr-file-lab-ps2-table-wrap");
  const table = element("table", "rr-file-lab-ps2-table");
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  for (const header of headers) headRow.appendChild(element("th", "", header));
  head.appendChild(headRow);
  table.appendChild(head);
  const body = document.createElement("tbody");
  for (const row of rows) {
    const tr = document.createElement("tr");
    for (const value of row) tr.appendChild(element("td", "", value));
    body.appendChild(tr);
  }
  table.appendChild(body);
  wrapper.appendChild(table);
  section.appendChild(wrapper);
}

function mount(ctx, panel) {
  const parsed = parsePs2Elf(ctx.bytes, ctx.filename);
  const root = element("div", "rr-file-lab-ps2");
  root.appendChild(element("h2", "", parsed.kind));
  root.appendChild(element("p", "rr-file-lab-ps2-intro",
    "ELF32 little-endian MIPS. Inspect the load map and module sections here; use R2 for disassembly and analysis."));

  addTable(addSection(root, "Header"), ["Field", "Value"], [
    ["File", ctx.filename],
    ["ELF type", hex(parsed.type)],
    ["Entry point", hex(parsed.entry)],
    ["MIPS flags", hex(parsed.flags)],
    ["Program headers", String(parsed.programs.length)],
    ["Sections", String(parsed.sections.length)],
    ["Symbol entries", String(parsed.symbols)],
    ["Relocation entries", String(parsed.relocations)]
  ]);

  if (parsed.programs.length) {
    addTable(addSection(root, "Program segments"),
      ["#", "Type", "File offset", "Load address", "File size", "Memory size", "Flags"],
      parsed.programs.map((segment) => [
        String(segment.index), segment.label, hex(segment.offset), hex(segment.address),
        hex(segment.fileSize), hex(segment.memorySize), hex(segment.flags)
      ]));
  }

  if (parsed.sections.length) {
    addTable(addSection(root, "Sections"),
      ["#", "Name", "Type", "Address", "File offset", "Size"],
      parsed.sections.map((section) => [
        String(section.index), section.name, section.label,
        hex(section.address), hex(section.offset), hex(section.size)
      ]));
  }

  root.appendChild(element("p", "rr-file-lab-ps2-note",
    "Open Pyre for C-like decompilation. File Lab uses a local R5900 language spec for Emotion Engine executables and MIPS32 for IOP modules."));
  panel.replaceChildren(root);
}

export default {
  id: "ps2-elf",
  title: "PS2 ELF",
  order: 32,
  matches: matchesPs2Elf,
  activate(ctx, panel) {
    try {
      mount(ctx, panel);
    } catch (error) {
      panel.replaceChildren(element("p", "rr-file-lab-ps2-error", error.message));
    }
  },
  deactivate(panel) {
    panel.replaceChildren();
  }
};
