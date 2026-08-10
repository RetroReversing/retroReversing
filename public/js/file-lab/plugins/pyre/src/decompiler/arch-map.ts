// Map binary-format machine codes to Ghidra SLEIGH language IDs.
//
// Ported from resources/decompiler/src/ArchMap.cpp:8 — the same set
// the user's LLDB plugin uses, expanded to cover formats we accept in
// the browser (ELF + Mach-O + PE + WASM) rather than just LLDB triples.
//
// SLEIGH IDs follow the form `<processor>:<endian>:<size>:<variant>:<compiler>`.
// Compiler suffix is appended only when we can guess it from the
// binary's loader/format.

export type Endian = "LE" | "BE";

export interface ArchHint {
  processor: string;
  endian: Endian;
  size: 32 | 64;
  variant?: string;
}

// Pretty arch name (human-readable, status bar) → SLEIGH variant
// mapping. Default variants are picked per Ghidra's `<default>=true`
// flag in each .ldefs file.
function joinId(h: ArchHint, compiler?: string): string {
  const parts = [h.processor, h.endian, String(h.size), h.variant ?? "default"];
  if (compiler) parts.push(compiler);
  return parts.join(":");
}

// ELF e_machine values we care about.
const EM_386 = 3;
const EM_ARM = 40;
const EM_X86_64 = 62;
const EM_AARCH64 = 183;
const EM_RISCV = 243;
const EM_MIPS = 8;
const EM_PPC = 20;
const EM_PPC64 = 21;
const EM_SPARC = 2;
const EM_SPARCV9 = 43;

// Mach-O cputype constants (from <mach/machine.h>).
const CPU_TYPE_X86 = 7;
const CPU_TYPE_X86_64 = 7 | 0x01000000;
const CPU_TYPE_ARM = 12;
const CPU_TYPE_ARM64 = 12 | 0x01000000;
const CPU_TYPE_PPC = 18;
const CPU_TYPE_PPC64 = 18 | 0x01000000;

// PE machine values (IMAGE_FILE_MACHINE_*).
const IMAGE_FILE_MACHINE_I386 = 0x014c;
const IMAGE_FILE_MACHINE_AMD64 = 0x8664;
const IMAGE_FILE_MACHINE_ARM = 0x01c0;
const IMAGE_FILE_MACHINE_ARM64 = 0xaa64;
const IMAGE_FILE_MACHINE_THUMB = 0x01c2;

export function archFromElf(
  e_machine: number,
  ei_class: 1 | 2,
  ei_data: 1 | 2,
  osabi: number,
): { hint: ArchHint; languageId: string; arch: string } {
  const endian: Endian = ei_data === 2 ? "BE" : "LE";
  const bits = ei_class === 2 ? 64 : 32;
  // ELFOSABI_NONE (0) and ELFOSABI_LINUX (3) → SysV ABI → gcc compiler
  // spec. Anything else (Solaris, FreeBSD, ...) we leave to the
  // SLEIGH default since wrong cspecs are louder failures than absent
  // ones.
  const compiler = osabi === 0 || osabi === 3 ? "gcc" : undefined;

  switch (e_machine) {
    case EM_X86_64: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 64 };
      return { hint, languageId: joinId(hint, compiler), arch: "x86" };
    }
    case EM_386: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 32 };
      return { hint, languageId: joinId(hint, compiler), arch: "x86" };
    }
    case EM_AARCH64: {
      const hint: ArchHint = {
        processor: "AARCH64",
        endian: "LE",
        size: 64,
        variant: "v8A",
      };
      return { hint, languageId: joinId(hint, compiler), arch: "AARCH64" };
    }
    case EM_ARM: {
      const hint: ArchHint = {
        processor: "ARM",
        endian,
        size: 32,
        variant: "v7",
      };
      return { hint, languageId: joinId(hint, compiler), arch: "ARM" };
    }
    case EM_MIPS: {
      const hint: ArchHint = { processor: "MIPS", endian, size: bits };
      return { hint, languageId: joinId(hint, compiler), arch: "MIPS" };
    }
    case EM_PPC:
    case EM_PPC64: {
      const hint: ArchHint = {
        processor: "PowerPC",
        endian,
        size: e_machine === EM_PPC64 ? 64 : 32,
      };
      return { hint, languageId: joinId(hint, compiler), arch: "PowerPC" };
    }
    case EM_RISCV: {
      const hint: ArchHint = { processor: "RISCV", endian: "LE", size: bits };
      return { hint, languageId: joinId(hint, compiler), arch: "RISCV" };
    }
    case EM_SPARC:
    case EM_SPARCV9: {
      const hint: ArchHint = {
        processor: "sparc",
        endian: "BE",
        size: e_machine === EM_SPARCV9 ? 64 : 32,
      };
      return { hint, languageId: joinId(hint, compiler), arch: "sparc" };
    }
    default:
      throw new Error(`unsupported ELF e_machine: ${e_machine}`);
  }
}

export function archFromMacho(
  cputype: number,
  isApplePlatform: boolean,
): { hint: ArchHint; languageId: string; arch: string } {
  switch (cputype) {
    case CPU_TYPE_X86_64: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 64 };
      // Apple platforms use the SysV-ish gcc cspec; the dedicated
      // "darwin" cspec doesn't exist in stock Ghidra.
      return { hint, languageId: joinId(hint, "gcc"), arch: "x86" };
    }
    case CPU_TYPE_X86: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 32 };
      return { hint, languageId: joinId(hint, "gcc"), arch: "x86" };
    }
    case CPU_TYPE_ARM64: {
      // Always use the v8A variant — the dedicated "AppleSilicon"
      // variant references AARCH64_AppleSilicon.sla which the
      // pre-built spec set we ship doesn't include (only AARCH64.sla
      // is bundled). v8A decodes arm64e binaries correctly; the only
      // thing it misses is Apple's AMX matrix-extension opcodes,
      // which the average binary doesn't use. Re-enable the
      // AppleSilicon path once specs/stage-specs.sh learns to compile
      // .slaspec → .sla via sleighc.
      void isApplePlatform;
      const hint: ArchHint = {
        processor: "AARCH64",
        endian: "LE",
        size: 64,
        variant: "v8A",
      };
      return { hint, languageId: joinId(hint), arch: "AARCH64" };
    }
    case CPU_TYPE_ARM: {
      const hint: ArchHint = {
        processor: "ARM",
        endian: "LE",
        size: 32,
        variant: "v7",
      };
      return { hint, languageId: joinId(hint), arch: "ARM" };
    }
    case CPU_TYPE_PPC:
    case CPU_TYPE_PPC64: {
      const hint: ArchHint = {
        processor: "PowerPC",
        endian: "BE",
        size: cputype === CPU_TYPE_PPC64 ? 64 : 32,
      };
      return { hint, languageId: joinId(hint), arch: "PowerPC" };
    }
    default:
      throw new Error(`unsupported Mach-O cputype: 0x${cputype.toString(16)}`);
  }
}

export function archFromPe(
  machine: number,
): { hint: ArchHint; languageId: string; arch: string } {
  switch (machine) {
    case IMAGE_FILE_MACHINE_AMD64: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 64 };
      return { hint, languageId: joinId(hint, "windows"), arch: "x86" };
    }
    case IMAGE_FILE_MACHINE_I386: {
      const hint: ArchHint = { processor: "x86", endian: "LE", size: 32 };
      return { hint, languageId: joinId(hint, "windows"), arch: "x86" };
    }
    case IMAGE_FILE_MACHINE_ARM64: {
      const hint: ArchHint = {
        processor: "AARCH64",
        endian: "LE",
        size: 64,
        variant: "v8A",
      };
      return { hint, languageId: joinId(hint, "windows"), arch: "AARCH64" };
    }
    case IMAGE_FILE_MACHINE_ARM:
    case IMAGE_FILE_MACHINE_THUMB: {
      const hint: ArchHint = {
        processor: "ARM",
        endian: "LE",
        size: 32,
        variant: "v7",
      };
      return { hint, languageId: joinId(hint, "windows"), arch: "ARM" };
    }
    default:
      throw new Error(`unsupported PE machine: 0x${machine.toString(16)}`);
  }
}

export function archForWasm(): { hint: ArchHint; languageId: string; arch: string } {
  const hint: ArchHint = { processor: "Wasm", endian: "LE", size: 32 };
  return { hint, languageId: joinId(hint), arch: "Wasm" };
}
