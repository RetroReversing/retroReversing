import AndroidNanoappHeader from "./parsers-esm/AndroidNanoappHeader.js";
import Bmp from "./parsers-esm/Bmp.js";
import Dex from "./parsers-esm/Dex.js";
import DosMz from "./parsers-esm/DosMz.js";
import Elf from "./parsers-esm/Elf.js";
import Gif from "./parsers-esm/Gif.js";
import Ilbm from "./parsers-esm/Ilbm.js";
import JavaClass from "./parsers-esm/JavaClass.js";
import MachO from "./parsers-esm/MachO.js";
import MachOFat from "./parsers-esm/MachOFat.js";
import MicrosoftPe from "./parsers-esm/MicrosoftPe.js";
import PythonPyc27 from "./parsers-esm/PythonPyc27.js";
import Swf from "./parsers-esm/Swf.js";
import UefiTe from "./parsers-esm/UefiTe.js";
import Wav from "./parsers-esm/Wav.js";
import {
  getExtension,
  isAndroidNanoapp,
  isBmp,
  isDex,
  isDosMz,
  isElf,
  isGif,
  isIlbm,
  isJavaClass,
  isMachO,
  isMachOFat,
  isPe,
  isSwf,
  isUefiTe,
  isWav
} from "./format-detect.js";

/**
 * Catalog of bundled Kaitai Struct parsers.
 * `detect` order defines auto-detection priority (first match wins).
 */
export var FORMATS = [
  {
    id: "elf",
    title: "ELF",
    group: "executable",
    extensions: [".elf", ".so", ".o", ".out"],
    detect: isElf,
    Parser: Elf
  },
  {
    id: "dex",
    title: "DEX",
    group: "executable",
    extensions: [".dex"],
    detect: isDex,
    Parser: Dex
  },
  {
    id: "uefi_te",
    title: "UEFI TE",
    group: "executable",
    extensions: [".te", ".efi"],
    detect: isUefiTe,
    Parser: UefiTe
  },
  {
    id: "microsoft_pe",
    title: "PE",
    group: "executable",
    extensions: [".exe", ".dll", ".sys", ".scr", ".cpl", ".ocx"],
    detect: isPe,
    Parser: MicrosoftPe
  },
  {
    id: "mach_o_fat",
    title: "Mach-O Fat",
    group: "executable",
    extensions: [".fat", ".universal"],
    detect: isMachOFat,
    Parser: MachOFat
  },
  {
    id: "java_class",
    title: "Java Class",
    group: "executable",
    extensions: [".class"],
    detect: isJavaClass,
    Parser: JavaClass
  },
  {
    id: "mach_o",
    title: "Mach-O",
    group: "executable",
    extensions: [".dylib", ".bundle"],
    detect: isMachO,
    Parser: MachO
  },
  {
    id: "dos_mz",
    title: "DOS MZ",
    group: "executable",
    extensions: [".com", ".ovl"],
    detect: isDosMz,
    Parser: DosMz
  },
  {
    id: "android_nanoapp",
    title: "Android Nanoapp",
    group: "executable",
    extensions: [".napp_header"],
    detect: isAndroidNanoapp,
    Parser: AndroidNanoappHeader
  },
  {
    id: "swf",
    title: "SWF",
    group: "executable",
    extensions: [".swf"],
    detect: isSwf,
    Parser: Swf
  },
  {
    id: "python_pyc_27",
    title: "Python 2.7 PYC",
    group: "executable",
    extensions: [".pyc"],
    detect: function (_bytes, ext) {
      return ext === ".pyc";
    },
    Parser: PythonPyc27
  },
  {
    id: "wav",
    title: "WAV",
    group: "media",
    extensions: [".wav", ".bwf"],
    detect: isWav,
    Parser: Wav
  },
  {
    id: "gif",
    title: "GIF",
    group: "media",
    extensions: [".gif"],
    detect: isGif,
    Parser: Gif
  },
  {
    id: "bmp",
    title: "BMP",
    group: "media",
    extensions: [".bmp"],
    detect: isBmp,
    Parser: Bmp
  },
  {
    id: "ilbm",
    title: "ILBM",
    group: "media",
    extensions: [".ilbm", ".lbm"],
    detect: isIlbm,
    Parser: Ilbm
  }
];

export function getFormatById(id) {
  return FORMATS.find(function (entry) {
    return entry.id === id;
  }) || null;
}

export function detectFormat(ctx) {
  var bytes = ctx.bytes;
  var ext = getExtension(ctx.filename);

  for (var i = 0; i < FORMATS.length; i++) {
    var entry = FORMATS[i];
    if (typeof entry.detect === "function" && entry.detect(bytes, ext)) {
      return entry;
    }
  }

  for (var j = 0; j < FORMATS.length; j++) {
    var byExt = FORMATS[j];
    if (ext && byExt.extensions.indexOf(ext) !== -1) {
      return byExt;
    }
  }

  return null;
}

export function listFormatsByGroup() {
  var groups = new Map();
  FORMATS.forEach(function (entry) {
    var group = entry.group || "other";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(entry);
  });
  return groups;
}
