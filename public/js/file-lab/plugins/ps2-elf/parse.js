const ET_EXEC = 2;
const ET_SCE_IOPRELEXEC = 0xff80;
const ET_SCE_IOPRELEXEC2 = 0xff81;
const ET_SCE_EERELEXEC = 0xff90;
const ET_SCE_EERELEXEC2 = 0xff91;
const EM_MIPS = 8;
const PT_LOAD = 1;
const PT_SCE_IOPMOD = 0x70000080;
const PT_SCE_EEMOD = 0x70000090;
const SHT_RELA = 4;
const SHT_NOBITS = 8;
const SHT_REL = 9;
const SHT_SYMTAB = 2;
const SHT_DYNSYM = 11;

function hasRange(bytes, offset, size) {
  return Number.isSafeInteger(offset) && Number.isSafeInteger(size) &&
    offset >= 0 && size >= 0 && offset <= bytes.length && size <= bytes.length - offset;
}

function readTable(bytes, offset, count, stride, minimum, label) {
  if (count === 0) return;
  if (stride < minimum || !hasRange(bytes, offset, count * stride)) {
    throw new Error(label + " extends beyond the file");
  }
}

function sectionName(bytes, table, offset) {
  if (!table || offset >= table.size) return "";
  const start = table.offset + offset;
  const limit = table.offset + table.size;
  let end = start;
  while (end < limit && bytes[end] !== 0) end++;
  return new TextDecoder().decode(bytes.subarray(start, end));
}

function kindForType(type) {
  if (type === ET_SCE_IOPRELEXEC || type === ET_SCE_IOPRELEXEC2) {
    return "PS2 IOP relocatable module (IRX)";
  }
  if (type === ET_SCE_EERELEXEC || type === ET_SCE_EERELEXEC2) {
    return "PS2 EE relocatable executable";
  }
  return "MIPS executable (PS2 EE candidate)";
}

function programType(type) {
  if (type === PT_LOAD) return "Loadable segment";
  if (type === PT_SCE_IOPMOD) return "IOP module metadata";
  if (type === PT_SCE_EEMOD) return "EE module metadata";
  return "0x" + type.toString(16);
}

function sectionType(type) {
  if (type === SHT_REL) return "Relocations";
  if (type === SHT_RELA) return "Relocations with addends";
  if (type === SHT_SYMTAB) return "Symbols";
  if (type === SHT_DYNSYM) return "Dynamic symbols";
  if (type === SHT_NOBITS) return "Uninitialized data";
  if (type === PT_SCE_IOPMOD) return "IOP module metadata";
  if (type === PT_SCE_EEMOD) return "EE module metadata";
  return "0x" + type.toString(16);
}

export function matchesPs2Elf(ctx) {
  const bytes = ctx && ctx.bytes;
  if (!bytes || bytes.length < 52 ||
      bytes[0] !== 0x7f || bytes[1] !== 0x45 || bytes[2] !== 0x4c || bytes[3] !== 0x46 ||
      bytes[4] !== 1 || bytes[5] !== 1) return false;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint16(18, true) !== EM_MIPS) return false;
  const type = view.getUint16(16, true);
  return type === ET_SCE_IOPRELEXEC || type === ET_SCE_IOPRELEXEC2 ||
    type === ET_SCE_EERELEXEC || type === ET_SCE_EERELEXEC2 ||
    (type === ET_EXEC && /\.elf$/i.test(ctx.filename || ""));
}

export function parsePs2Elf(bytes, filename) {
  if (!matchesPs2Elf({ bytes, filename })) {
    throw new Error("Expected a 32-bit little-endian MIPS ELF or PS2 IRX file");
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const type = view.getUint16(16, true);
  const entry = view.getUint32(24, true);
  const phOffset = view.getUint32(28, true);
  const shOffset = view.getUint32(32, true);
  const flags = view.getUint32(36, true);
  const phStride = view.getUint16(42, true);
  const phCount = view.getUint16(44, true);
  const shStride = view.getUint16(46, true);
  const shCount = view.getUint16(48, true);
  const shStringIndex = view.getUint16(50, true);

  readTable(bytes, phOffset, phCount, phStride, 32, "Program header table");
  readTable(bytes, shOffset, shCount, shStride, 40, "Section header table");

  const programs = [];
  for (let i = 0; i < phCount; i++) {
    const at = phOffset + i * phStride;
    const segment = {
      index: i,
      type: view.getUint32(at, true),
      offset: view.getUint32(at + 4, true),
      address: view.getUint32(at + 8, true),
      fileSize: view.getUint32(at + 16, true),
      memorySize: view.getUint32(at + 20, true),
      flags: view.getUint32(at + 24, true)
    };
    if (!hasRange(bytes, segment.offset, segment.fileSize)) {
      throw new Error("Program segment " + i + " extends beyond the file");
    }
    segment.label = programType(segment.type);
    programs.push(segment);
  }

  const sections = [];
  for (let i = 0; i < shCount; i++) {
    const at = shOffset + i * shStride;
    const section = {
      index: i,
      nameOffset: view.getUint32(at, true),
      type: view.getUint32(at + 4, true),
      address: view.getUint32(at + 12, true),
      offset: view.getUint32(at + 16, true),
      size: view.getUint32(at + 20, true),
      entrySize: view.getUint32(at + 36, true)
    };
    if (section.type !== SHT_NOBITS && !hasRange(bytes, section.offset, section.size)) {
      throw new Error("Section " + i + " extends beyond the file");
    }
    section.label = sectionType(section.type);
    sections.push(section);
  }

  const names = sections[shStringIndex];
  if (shStringIndex !== 0 && (!names || !hasRange(bytes, names.offset, names.size))) {
    throw new Error("Section-name table extends beyond the file");
  }
  for (const section of sections) {
    section.name = sectionName(bytes, shStringIndex ? names : null, section.nameOffset) ||
      "Section " + section.index;
  }

  const relocations = sections.reduce((total, section) => {
    if (section.type !== SHT_REL && section.type !== SHT_RELA) return total;
    return total + Math.floor(section.size / (section.entrySize || (section.type === SHT_REL ? 8 : 12)));
  }, 0);
  const symbols = sections.reduce((total, section) => {
    if (section.type !== SHT_SYMTAB && section.type !== SHT_DYNSYM) return total;
    return total + Math.max(0, Math.floor(section.size / (section.entrySize || 16)) - 1);
  }, 0);

  return {
    kind: kindForType(type), type, entry, flags, programs, sections,
    relocations, symbols
  };
}
