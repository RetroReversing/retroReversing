// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.UefiTe || (root.UefiTe = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (UefiTe_, KaitaiStream) {
/**
 * This type of executables could be found inside the UEFI firmware. The UEFI
 * firmware is stored in SPI flash memory, which is a chip soldered on a
 * system's motherboard. UEFI firmware is very modular: it usually contains
 * dozens, if not hundreds, of executables. To store all these separates files,
 * the firmware is laid out in volumes using the Firmware File System (FFS), a
 * file system specifically designed to store firmware images. The volumes
 * contain files that are identified by GUIDs and each of these files contain
 * one or more sections holding the data. One of these sections contains the
 * actual executable image. Most of the executable images follow the PE format.
 * However, some of them follow the TE format.
 * 
 * The Terse Executable (TE) image format was created as a mechanism to reduce
 * the overhead of the PE/COFF headers in PE32/PE32+ images, resulting in a
 * corresponding reduction of image sizes for executables running in the PI
 * (Platform Initialization) Architecture environment. Reducing image size
 * provides an opportunity for use of a smaller system flash part.
 * 
 * So the TE format is basically a stripped version of PE.
 * @see {@link https://uefi.org/sites/default/files/resources/PI_Spec_1_6.pdf|Source}
 */

var UefiTe = (function() {
  function UefiTe(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  UefiTe.prototype._read = function() {
    this._debug.teHdr = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._raw_teHdr = this._io.readBytes(40);
    var _io__raw_teHdr = new KaitaiStream(this._raw_teHdr);
    this.teHdr = new TeHeader(_io__raw_teHdr, this, this._root);
    this.teHdr._read();
    this._debug.teHdr.end = this._io.pos;
    this._debug.sections = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.sections.arr = [];
    this.sections = [];
    for (var i = 0; i < this.teHdr.numSections; i++) {
      this._debug.sections.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_sections = new Section(this._io, this, this._root);
      try {
        _t_sections._read();
      } finally {
        this.sections.push(_t_sections);
      }
      this._debug.sections.arr[i].end = this._io.pos;
    }
    this._debug.sections.end = this._io.pos;
  }

  var DataDir = UefiTe.DataDir = (function() {
    function DataDir(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DataDir.prototype._read = function() {
      this._debug.virtualAddress = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.virtualAddress = this._io.readU4le();
      this._debug.virtualAddress.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
    }

    return DataDir;
  })();

  var HeaderDataDirs = UefiTe.HeaderDataDirs = (function() {
    function HeaderDataDirs(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    HeaderDataDirs.prototype._read = function() {
      this._debug.baseRelocationTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.baseRelocationTable = new DataDir(this._io, this, this._root);
      this.baseRelocationTable._read();
      this._debug.baseRelocationTable.end = this._io.pos;
      this._debug.debug = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.debug = new DataDir(this._io, this, this._root);
      this.debug._read();
      this._debug.debug.end = this._io.pos;
    }

    return HeaderDataDirs;
  })();

  var Section = UefiTe.Section = (function() {
    function Section(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Section.prototype._read = function() {
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(8), 0), "UTF-8");
      this._debug.name.end = this._io.pos;
      this._debug.virtualSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.virtualSize = this._io.readU4le();
      this._debug.virtualSize.end = this._io.pos;
      this._debug.virtualAddress = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.virtualAddress = this._io.readU4le();
      this._debug.virtualAddress.end = this._io.pos;
      this._debug.sizeOfRawData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfRawData = this._io.readU4le();
      this._debug.sizeOfRawData.end = this._io.pos;
      this._debug.pointerToRawData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointerToRawData = this._io.readU4le();
      this._debug.pointerToRawData.end = this._io.pos;
      this._debug.pointerToRelocations = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointerToRelocations = this._io.readU4le();
      this._debug.pointerToRelocations.end = this._io.pos;
      this._debug.pointerToLinenumbers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointerToLinenumbers = this._io.readU4le();
      this._debug.pointerToLinenumbers.end = this._io.pos;
      this._debug.numRelocations = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numRelocations = this._io.readU2le();
      this._debug.numRelocations.end = this._io.pos;
      this._debug.numLinenumbers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numLinenumbers = this._io.readU2le();
      this._debug.numLinenumbers.end = this._io.pos;
      this._debug.characteristics = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.characteristics = this._io.readU4le();
      this._debug.characteristics.end = this._io.pos;
    }
    Object.defineProperty(Section.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var _pos = this._io.pos;
        this._io.seek((this.pointerToRawData - this._root.teHdr.strippedSize) + this._root.teHdr._io.size);
        this._debug._m_body = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_body = this._io.readBytes(this.sizeOfRawData);
        this._debug._m_body.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_body;
      }
    });

    return Section;
  })();

  var TeHeader = UefiTe.TeHeader = (function() {
    TeHeader.MachineType = Object.freeze({
      UNKNOWN: 0,
      I386: 332,
      R4000: 358,
      WCE_MIPS_V2: 361,
      ALPHA: 388,
      SH3: 418,
      SH3_DSP: 419,
      SH4: 422,
      SH5: 424,
      ARM: 448,
      THUMB: 450,
      ARM_NT: 452,
      AM33: 467,
      POWERPC: 496,
      POWERPC_FP: 497,
      IA64: 512,
      MIPS16: 614,
      ALPHA64_OR_AXP64: 644,
      MIPS_FPU: 870,
      MIPS16_FPU: 1126,
      EBC: 3772,
      RISCV32: 20530,
      RISCV64: 20580,
      RISCV128: 20776,
      LOONGARCH32: 25138,
      LOONGARCH64: 25188,
      AMD64: 34404,
      M32R: 36929,
      ARM64: 43620,

      0: "UNKNOWN",
      332: "I386",
      358: "R4000",
      361: "WCE_MIPS_V2",
      388: "ALPHA",
      418: "SH3",
      419: "SH3_DSP",
      422: "SH4",
      424: "SH5",
      448: "ARM",
      450: "THUMB",
      452: "ARM_NT",
      467: "AM33",
      496: "POWERPC",
      497: "POWERPC_FP",
      512: "IA64",
      614: "MIPS16",
      644: "ALPHA64_OR_AXP64",
      870: "MIPS_FPU",
      1126: "MIPS16_FPU",
      3772: "EBC",
      20530: "RISCV32",
      20580: "RISCV64",
      20776: "RISCV128",
      25138: "LOONGARCH32",
      25188: "LOONGARCH64",
      34404: "AMD64",
      36929: "M32R",
      43620: "ARM64",
    });

    TeHeader.SubsystemEnum = Object.freeze({
      UNKNOWN: 0,
      NATIVE: 1,
      WINDOWS_GUI: 2,
      WINDOWS_CUI: 3,
      POSIX_CUI: 7,
      WINDOWS_CE_GUI: 9,
      EFI_APPLICATION: 10,
      EFI_BOOT_SERVICE_DRIVER: 11,
      EFI_RUNTIME_DRIVER: 12,
      EFI_ROM: 13,
      XBOX: 14,
      WINDOWS_BOOT_APPLICATION: 16,

      0: "UNKNOWN",
      1: "NATIVE",
      2: "WINDOWS_GUI",
      3: "WINDOWS_CUI",
      7: "POSIX_CUI",
      9: "WINDOWS_CE_GUI",
      10: "EFI_APPLICATION",
      11: "EFI_BOOT_SERVICE_DRIVER",
      12: "EFI_RUNTIME_DRIVER",
      13: "EFI_ROM",
      14: "XBOX",
      16: "WINDOWS_BOOT_APPLICATION",
    });

    function TeHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TeHeader.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(2);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([86, 90])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([86, 90]), this.magic, this._io, "/types/te_header/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.machine = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "UefiTe.TeHeader.MachineType" };
      this.machine = this._io.readU2le();
      this._debug.machine.end = this._io.pos;
      this._debug.numSections = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSections = this._io.readU1();
      this._debug.numSections.end = this._io.pos;
      this._debug.subsystem = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "UefiTe.TeHeader.SubsystemEnum" };
      this.subsystem = this._io.readU1();
      this._debug.subsystem.end = this._io.pos;
      this._debug.strippedSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strippedSize = this._io.readU2le();
      this._debug.strippedSize.end = this._io.pos;
      this._debug.entryPointAddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.entryPointAddr = this._io.readU4le();
      this._debug.entryPointAddr.end = this._io.pos;
      this._debug.baseOfCode = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.baseOfCode = this._io.readU4le();
      this._debug.baseOfCode.end = this._io.pos;
      this._debug.imageBase = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.imageBase = this._io.readU8le();
      this._debug.imageBase.end = this._io.pos;
      this._debug.dataDirs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataDirs = new HeaderDataDirs(this._io, this, this._root);
      this.dataDirs._read();
      this._debug.dataDirs.end = this._io.pos;
    }

    return TeHeader;
  })();

  return UefiTe;
})();
UefiTe_.UefiTe = UefiTe;
});
