// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.MicrosoftPe || (root.MicrosoftPe = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (MicrosoftPe_, KaitaiStream) {
/**
 * @see {@link https://learn.microsoft.com/en-us/windows/win32/debug/pe-format|Source}
 */

var MicrosoftPe = (function() {
  MicrosoftPe.PeFormat = Object.freeze({
    ROM_IMAGE: 263,
    PE32: 267,
    PE32_PLUS: 523,

    263: "ROM_IMAGE",
    267: "PE32",
    523: "PE32_PLUS",
  });

  function MicrosoftPe(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  MicrosoftPe.prototype._read = function() {
    this._debug.mz = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.mz = new MzPlaceholder(this._io, this, this._root);
    this.mz._read();
    this._debug.mz.end = this._io.pos;
  }

  var Annoyingstring = MicrosoftPe.Annoyingstring = (function() {
    function Annoyingstring(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Annoyingstring.prototype._read = function() {
    }
    Object.defineProperty(Annoyingstring.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._debug._m_name = {  };
        this._m_name = (this.nameZeroes == 0 ? this.nameFromOffset : this.nameFromShort);
        return this._m_name;
      }
    });
    Object.defineProperty(Annoyingstring.prototype, 'nameFromOffset', {
      get: function() {
        if (this._m_nameFromOffset !== undefined)
          return this._m_nameFromOffset;
        if (this.nameZeroes == 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek((this.nameZeroes == 0 ? this._parent._parent.symbolNameTableOffset + this.nameOffset : 0));
          this._debug._m_nameFromOffset = { start: io.pos, ioOffset: io.byteOffset };
          this._m_nameFromOffset = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, false), "ASCII");
          this._debug._m_nameFromOffset.end = io.pos;
          io.seek(_pos);
        }
        return this._m_nameFromOffset;
      }
    });
    Object.defineProperty(Annoyingstring.prototype, 'nameFromShort', {
      get: function() {
        if (this._m_nameFromShort !== undefined)
          return this._m_nameFromShort;
        if (this.nameZeroes != 0) {
          var _pos = this._io.pos;
          this._io.seek(0);
          this._debug._m_nameFromShort = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_nameFromShort = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, false), "ASCII");
          this._debug._m_nameFromShort.end = this._io.pos;
          this._io.seek(_pos);
        }
        return this._m_nameFromShort;
      }
    });
    Object.defineProperty(Annoyingstring.prototype, 'nameOffset', {
      get: function() {
        if (this._m_nameOffset !== undefined)
          return this._m_nameOffset;
        var _pos = this._io.pos;
        this._io.seek(4);
        this._debug._m_nameOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_nameOffset = this._io.readU4le();
        this._debug._m_nameOffset.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_nameOffset;
      }
    });
    Object.defineProperty(Annoyingstring.prototype, 'nameZeroes', {
      get: function() {
        if (this._m_nameZeroes !== undefined)
          return this._m_nameZeroes;
        var _pos = this._io.pos;
        this._io.seek(0);
        this._debug._m_nameZeroes = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_nameZeroes = this._io.readU4le();
        this._debug._m_nameZeroes.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_nameZeroes;
      }
    });

    return Annoyingstring;
  })();

  /**
   * @see {@link https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#the-attribute-certificate-table-image-only|Source}
   */

  var CertificateEntry = MicrosoftPe.CertificateEntry = (function() {
    CertificateEntry.CertificateRevision = Object.freeze({
      REVISION_1_0: 256,
      REVISION_2_0: 512,

      256: "REVISION_1_0",
      512: "REVISION_2_0",
    });

    CertificateEntry.CertificateTypeEnum = Object.freeze({
      X509: 1,
      PKCS_SIGNED_DATA: 2,
      RESERVED_1: 3,
      TS_STACK_SIGNED: 4,

      1: "X509",
      2: "PKCS_SIGNED_DATA",
      3: "RESERVED_1",
      4: "TS_STACK_SIGNED",
    });

    function CertificateEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CertificateEntry.prototype._read = function() {
      this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.length = this._io.readU4le();
      this._debug.length.end = this._io.pos;
      this._debug.revision = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MicrosoftPe.CertificateEntry.CertificateRevision" };
      this.revision = this._io.readU2le();
      this._debug.revision.end = this._io.pos;
      this._debug.certificateType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MicrosoftPe.CertificateEntry.CertificateTypeEnum" };
      this.certificateType = this._io.readU2le();
      this._debug.certificateType.end = this._io.pos;
      this._debug.certificateBytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.certificateBytes = this._io.readBytes(this.length - 8);
      this._debug.certificateBytes.end = this._io.pos;
    }

    /**
     * Specifies the length of the attribute certificate entry.
     */

    /**
     * Contains the certificate version number.
     */

    /**
     * Specifies the type of content in bCertificate
     */

    /**
     * Contains a certificate, such as an Authenticode signature.
     */

    return CertificateEntry;
  })();

  var CertificateTable = MicrosoftPe.CertificateTable = (function() {
    function CertificateTable(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CertificateTable.prototype._read = function() {
      this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.items.arr = [];
      this.items = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_items = new CertificateEntry(this._io, this, this._root);
        try {
          _t_items._read();
        } finally {
          this.items.push(_t_items);
        }
        this._debug.items.arr[this.items.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.items.end = this._io.pos;
    }

    return CertificateTable;
  })();

  /**
   * @see 3.3. COFF File Header (Object and Image)
   */

  var CoffHeader = MicrosoftPe.CoffHeader = (function() {
    CoffHeader.MachineType = Object.freeze({
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

    function CoffHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CoffHeader.prototype._read = function() {
      this._debug.machine = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MicrosoftPe.CoffHeader.MachineType" };
      this.machine = this._io.readU2le();
      this._debug.machine.end = this._io.pos;
      this._debug.numberOfSections = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfSections = this._io.readU2le();
      this._debug.numberOfSections.end = this._io.pos;
      this._debug.timeDateStamp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeDateStamp = this._io.readU4le();
      this._debug.timeDateStamp.end = this._io.pos;
      this._debug.pointerToSymbolTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointerToSymbolTable = this._io.readU4le();
      this._debug.pointerToSymbolTable.end = this._io.pos;
      this._debug.numberOfSymbols = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfSymbols = this._io.readU4le();
      this._debug.numberOfSymbols.end = this._io.pos;
      this._debug.sizeOfOptionalHeader = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfOptionalHeader = this._io.readU2le();
      this._debug.sizeOfOptionalHeader.end = this._io.pos;
      this._debug.characteristics = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.characteristics = this._io.readU2le();
      this._debug.characteristics.end = this._io.pos;
    }
    Object.defineProperty(CoffHeader.prototype, 'symbolNameTableOffset', {
      get: function() {
        if (this._m_symbolNameTableOffset !== undefined)
          return this._m_symbolNameTableOffset;
        this._debug._m_symbolNameTableOffset = {  };
        this._m_symbolNameTableOffset = this.pointerToSymbolTable + this.symbolTableSize;
        return this._m_symbolNameTableOffset;
      }
    });
    Object.defineProperty(CoffHeader.prototype, 'symbolNameTableSize', {
      get: function() {
        if (this._m_symbolNameTableSize !== undefined)
          return this._m_symbolNameTableSize;
        var _pos = this._io.pos;
        this._io.seek(this.symbolNameTableOffset);
        this._debug._m_symbolNameTableSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_symbolNameTableSize = this._io.readU4le();
        this._debug._m_symbolNameTableSize.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_symbolNameTableSize;
      }
    });
    Object.defineProperty(CoffHeader.prototype, 'symbolTable', {
      get: function() {
        if (this._m_symbolTable !== undefined)
          return this._m_symbolTable;
        var _pos = this._io.pos;
        this._io.seek(this.pointerToSymbolTable);
        this._debug._m_symbolTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug._m_symbolTable.arr = [];
        this._m_symbolTable = [];
        for (var i = 0; i < this.numberOfSymbols; i++) {
          this._debug._m_symbolTable.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t__m_symbolTable = new CoffSymbol(this._io, this, this._root);
          try {
            _t__m_symbolTable._read();
          } finally {
            this._m_symbolTable.push(_t__m_symbolTable);
          }
          this._debug._m_symbolTable.arr[i].end = this._io.pos;
        }
        this._debug._m_symbolTable.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_symbolTable;
      }
    });
    Object.defineProperty(CoffHeader.prototype, 'symbolTableSize', {
      get: function() {
        if (this._m_symbolTableSize !== undefined)
          return this._m_symbolTableSize;
        this._debug._m_symbolTableSize = {  };
        this._m_symbolTableSize = this.numberOfSymbols * 18;
        return this._m_symbolTableSize;
      }
    });

    return CoffHeader;
  })();

  var CoffSymbol = MicrosoftPe.CoffSymbol = (function() {
    function CoffSymbol(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CoffSymbol.prototype._read = function() {
      this._debug.nameAnnoying = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_nameAnnoying = this._io.readBytes(8);
      var _io__raw_nameAnnoying = new KaitaiStream(this._raw_nameAnnoying);
      this.nameAnnoying = new Annoyingstring(_io__raw_nameAnnoying, this, this._root);
      this.nameAnnoying._read();
      this._debug.nameAnnoying.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
      this._debug.sectionNumber = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionNumber = this._io.readU2le();
      this._debug.sectionNumber.end = this._io.pos;
      this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.type = this._io.readU2le();
      this._debug.type.end = this._io.pos;
      this._debug.storageClass = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.storageClass = this._io.readU1();
      this._debug.storageClass.end = this._io.pos;
      this._debug.numberOfAuxSymbols = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfAuxSymbols = this._io.readU1();
      this._debug.numberOfAuxSymbols.end = this._io.pos;
    }
    Object.defineProperty(CoffSymbol.prototype, 'data', {
      get: function() {
        if (this._m_data !== undefined)
          return this._m_data;
        var _pos = this._io.pos;
        this._io.seek(this.section.pointerToRawData + this.value);
        this._debug._m_data = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_data = this._io.readBytes(1);
        this._debug._m_data.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_data;
      }
    });
    Object.defineProperty(CoffSymbol.prototype, 'section', {
      get: function() {
        if (this._m_section !== undefined)
          return this._m_section;
        this._debug._m_section = {  };
        this._m_section = this._root.pe.sections[this.sectionNumber - 1];
        return this._m_section;
      }
    });

    return CoffSymbol;
  })();

  var DataDir = MicrosoftPe.DataDir = (function() {
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

  var MzPlaceholder = MicrosoftPe.MzPlaceholder = (function() {
    function MzPlaceholder(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MzPlaceholder.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(2);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([77, 90])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([77, 90]), this.magic, this._io, "/types/mz_placeholder/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.data1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data1 = this._io.readBytes(58);
      this._debug.data1.end = this._io.pos;
      this._debug.ofsPe = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofsPe = this._io.readU4le();
      this._debug.ofsPe.end = this._io.pos;
    }

    /**
     * In PE file, an offset to PE header
     */

    return MzPlaceholder;
  })();

  var OptionalHeader = MicrosoftPe.OptionalHeader = (function() {
    function OptionalHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    OptionalHeader.prototype._read = function() {
      this._debug.std = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.std = new OptionalHeaderStd(this._io, this, this._root);
      this.std._read();
      this._debug.std.end = this._io.pos;
      this._debug.windows = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.windows = new OptionalHeaderWindows(this._io, this, this._root);
      this.windows._read();
      this._debug.windows.end = this._io.pos;
      this._debug.dataDirs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataDirs = new OptionalHeaderDataDirs(this._io, this, this._root);
      this.dataDirs._read();
      this._debug.dataDirs.end = this._io.pos;
    }

    return OptionalHeader;
  })();

  var OptionalHeaderDataDirs = MicrosoftPe.OptionalHeaderDataDirs = (function() {
    function OptionalHeaderDataDirs(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    OptionalHeaderDataDirs.prototype._read = function() {
      this._debug.exportTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.exportTable = new DataDir(this._io, this, this._root);
      this.exportTable._read();
      this._debug.exportTable.end = this._io.pos;
      this._debug.importTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.importTable = new DataDir(this._io, this, this._root);
      this.importTable._read();
      this._debug.importTable.end = this._io.pos;
      this._debug.resourceTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.resourceTable = new DataDir(this._io, this, this._root);
      this.resourceTable._read();
      this._debug.resourceTable.end = this._io.pos;
      this._debug.exceptionTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.exceptionTable = new DataDir(this._io, this, this._root);
      this.exceptionTable._read();
      this._debug.exceptionTable.end = this._io.pos;
      this._debug.certificateTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.certificateTable = new DataDir(this._io, this, this._root);
      this.certificateTable._read();
      this._debug.certificateTable.end = this._io.pos;
      this._debug.baseRelocationTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.baseRelocationTable = new DataDir(this._io, this, this._root);
      this.baseRelocationTable._read();
      this._debug.baseRelocationTable.end = this._io.pos;
      this._debug.debug = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.debug = new DataDir(this._io, this, this._root);
      this.debug._read();
      this._debug.debug.end = this._io.pos;
      this._debug.architecture = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.architecture = new DataDir(this._io, this, this._root);
      this.architecture._read();
      this._debug.architecture.end = this._io.pos;
      this._debug.globalPtr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.globalPtr = new DataDir(this._io, this, this._root);
      this.globalPtr._read();
      this._debug.globalPtr.end = this._io.pos;
      this._debug.tlsTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tlsTable = new DataDir(this._io, this, this._root);
      this.tlsTable._read();
      this._debug.tlsTable.end = this._io.pos;
      this._debug.loadConfigTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.loadConfigTable = new DataDir(this._io, this, this._root);
      this.loadConfigTable._read();
      this._debug.loadConfigTable.end = this._io.pos;
      this._debug.boundImport = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boundImport = new DataDir(this._io, this, this._root);
      this.boundImport._read();
      this._debug.boundImport.end = this._io.pos;
      this._debug.iat = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.iat = new DataDir(this._io, this, this._root);
      this.iat._read();
      this._debug.iat.end = this._io.pos;
      this._debug.delayImportDescriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delayImportDescriptor = new DataDir(this._io, this, this._root);
      this.delayImportDescriptor._read();
      this._debug.delayImportDescriptor.end = this._io.pos;
      this._debug.clrRuntimeHeader = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.clrRuntimeHeader = new DataDir(this._io, this, this._root);
      this.clrRuntimeHeader._read();
      this._debug.clrRuntimeHeader.end = this._io.pos;
    }

    return OptionalHeaderDataDirs;
  })();

  var OptionalHeaderStd = MicrosoftPe.OptionalHeaderStd = (function() {
    function OptionalHeaderStd(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    OptionalHeaderStd.prototype._read = function() {
      this._debug.format = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MicrosoftPe.PeFormat" };
      this.format = this._io.readU2le();
      this._debug.format.end = this._io.pos;
      this._debug.majorLinkerVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.majorLinkerVersion = this._io.readU1();
      this._debug.majorLinkerVersion.end = this._io.pos;
      this._debug.minorLinkerVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minorLinkerVersion = this._io.readU1();
      this._debug.minorLinkerVersion.end = this._io.pos;
      this._debug.sizeOfCode = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfCode = this._io.readU4le();
      this._debug.sizeOfCode.end = this._io.pos;
      this._debug.sizeOfInitializedData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfInitializedData = this._io.readU4le();
      this._debug.sizeOfInitializedData.end = this._io.pos;
      this._debug.sizeOfUninitializedData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfUninitializedData = this._io.readU4le();
      this._debug.sizeOfUninitializedData.end = this._io.pos;
      this._debug.addressOfEntryPoint = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.addressOfEntryPoint = this._io.readU4le();
      this._debug.addressOfEntryPoint.end = this._io.pos;
      this._debug.baseOfCode = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.baseOfCode = this._io.readU4le();
      this._debug.baseOfCode.end = this._io.pos;
      if (this.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.baseOfData = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.baseOfData = this._io.readU4le();
        this._debug.baseOfData.end = this._io.pos;
      }
    }

    return OptionalHeaderStd;
  })();

  var OptionalHeaderWindows = MicrosoftPe.OptionalHeaderWindows = (function() {
    OptionalHeaderWindows.SubsystemEnum = Object.freeze({
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

    function OptionalHeaderWindows(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    OptionalHeaderWindows.prototype._read = function() {
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.imageBase32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.imageBase32 = this._io.readU4le();
        this._debug.imageBase32.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32_PLUS) {
        this._debug.imageBase64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.imageBase64 = this._io.readU8le();
        this._debug.imageBase64.end = this._io.pos;
      }
      this._debug.sectionAlignment = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionAlignment = this._io.readU4le();
      this._debug.sectionAlignment.end = this._io.pos;
      this._debug.fileAlignment = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileAlignment = this._io.readU4le();
      this._debug.fileAlignment.end = this._io.pos;
      this._debug.majorOperatingSystemVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.majorOperatingSystemVersion = this._io.readU2le();
      this._debug.majorOperatingSystemVersion.end = this._io.pos;
      this._debug.minorOperatingSystemVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minorOperatingSystemVersion = this._io.readU2le();
      this._debug.minorOperatingSystemVersion.end = this._io.pos;
      this._debug.majorImageVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.majorImageVersion = this._io.readU2le();
      this._debug.majorImageVersion.end = this._io.pos;
      this._debug.minorImageVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minorImageVersion = this._io.readU2le();
      this._debug.minorImageVersion.end = this._io.pos;
      this._debug.majorSubsystemVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.majorSubsystemVersion = this._io.readU2le();
      this._debug.majorSubsystemVersion.end = this._io.pos;
      this._debug.minorSubsystemVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minorSubsystemVersion = this._io.readU2le();
      this._debug.minorSubsystemVersion.end = this._io.pos;
      this._debug.win32VersionValue = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.win32VersionValue = this._io.readU4le();
      this._debug.win32VersionValue.end = this._io.pos;
      this._debug.sizeOfImage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfImage = this._io.readU4le();
      this._debug.sizeOfImage.end = this._io.pos;
      this._debug.sizeOfHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeOfHeaders = this._io.readU4le();
      this._debug.sizeOfHeaders.end = this._io.pos;
      this._debug.checkSum = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.checkSum = this._io.readU4le();
      this._debug.checkSum.end = this._io.pos;
      this._debug.subsystem = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MicrosoftPe.OptionalHeaderWindows.SubsystemEnum" };
      this.subsystem = this._io.readU2le();
      this._debug.subsystem.end = this._io.pos;
      this._debug.dllCharacteristics = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dllCharacteristics = this._io.readU2le();
      this._debug.dllCharacteristics.end = this._io.pos;
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.sizeOfStackReserve32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfStackReserve32 = this._io.readU4le();
        this._debug.sizeOfStackReserve32.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32_PLUS) {
        this._debug.sizeOfStackReserve64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfStackReserve64 = this._io.readU8le();
        this._debug.sizeOfStackReserve64.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.sizeOfStackCommit32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfStackCommit32 = this._io.readU4le();
        this._debug.sizeOfStackCommit32.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32_PLUS) {
        this._debug.sizeOfStackCommit64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfStackCommit64 = this._io.readU8le();
        this._debug.sizeOfStackCommit64.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.sizeOfHeapReserve32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfHeapReserve32 = this._io.readU4le();
        this._debug.sizeOfHeapReserve32.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32_PLUS) {
        this._debug.sizeOfHeapReserve64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfHeapReserve64 = this._io.readU8le();
        this._debug.sizeOfHeapReserve64.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32) {
        this._debug.sizeOfHeapCommit32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfHeapCommit32 = this._io.readU4le();
        this._debug.sizeOfHeapCommit32.end = this._io.pos;
      }
      if (this._parent.std.format == MicrosoftPe.PeFormat.PE32_PLUS) {
        this._debug.sizeOfHeapCommit64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sizeOfHeapCommit64 = this._io.readU8le();
        this._debug.sizeOfHeapCommit64.end = this._io.pos;
      }
      this._debug.loaderFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.loaderFlags = this._io.readU4le();
      this._debug.loaderFlags.end = this._io.pos;
      this._debug.numberOfRvaAndSizes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfRvaAndSizes = this._io.readU4le();
      this._debug.numberOfRvaAndSizes.end = this._io.pos;
    }

    return OptionalHeaderWindows;
  })();

  var PeHeader = MicrosoftPe.PeHeader = (function() {
    function PeHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    PeHeader.prototype._read = function() {
      this._debug.peSignature = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.peSignature = this._io.readBytes(4);
      this._debug.peSignature.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.peSignature, new Uint8Array([80, 69, 0, 0])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([80, 69, 0, 0]), this.peSignature, this._io, "/types/pe_header/seq/0");
        this._debug.peSignature.validationError = _err;
        throw _err;
      }
      this._debug.coffHdr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.coffHdr = new CoffHeader(this._io, this, this._root);
      this.coffHdr._read();
      this._debug.coffHdr.end = this._io.pos;
      this._debug.optionalHdr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_optionalHdr = this._io.readBytes(this.coffHdr.sizeOfOptionalHeader);
      var _io__raw_optionalHdr = new KaitaiStream(this._raw_optionalHdr);
      this.optionalHdr = new OptionalHeader(_io__raw_optionalHdr, this, this._root);
      this.optionalHdr._read();
      this._debug.optionalHdr.end = this._io.pos;
      this._debug.sections = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.sections.arr = [];
      this.sections = [];
      for (var i = 0; i < this.coffHdr.numberOfSections; i++) {
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
    Object.defineProperty(PeHeader.prototype, 'certificateTable', {
      get: function() {
        if (this._m_certificateTable !== undefined)
          return this._m_certificateTable;
        if (this.optionalHdr.dataDirs.certificateTable.virtualAddress != 0) {
          var _pos = this._io.pos;
          this._io.seek(this.optionalHdr.dataDirs.certificateTable.virtualAddress);
          this._debug._m_certificateTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._raw__m_certificateTable = this._io.readBytes(this.optionalHdr.dataDirs.certificateTable.size);
          var _io__raw__m_certificateTable = new KaitaiStream(this._raw__m_certificateTable);
          this._m_certificateTable = new CertificateTable(_io__raw__m_certificateTable, this, this._root);
          this._m_certificateTable._read();
          this._debug._m_certificateTable.end = this._io.pos;
          this._io.seek(_pos);
        }
        return this._m_certificateTable;
      }
    });

    return PeHeader;
  })();

  var Section = MicrosoftPe.Section = (function() {
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
      this._debug.numberOfRelocations = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfRelocations = this._io.readU2le();
      this._debug.numberOfRelocations.end = this._io.pos;
      this._debug.numberOfLinenumbers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numberOfLinenumbers = this._io.readU2le();
      this._debug.numberOfLinenumbers.end = this._io.pos;
      this._debug.characteristics = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.characteristics = this._io.readU4le();
      this._debug.characteristics.end = this._io.pos;
    }
    Object.defineProperty(Section.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var _pos = this._io.pos;
        this._io.seek(this.pointerToRawData);
        this._debug._m_body = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_body = this._io.readBytes(this.sizeOfRawData);
        this._debug._m_body.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_body;
      }
    });

    return Section;
  })();
  Object.defineProperty(MicrosoftPe.prototype, 'pe', {
    get: function() {
      if (this._m_pe !== undefined)
        return this._m_pe;
      var _pos = this._io.pos;
      this._io.seek(this.mz.ofsPe);
      this._debug._m_pe = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._m_pe = new PeHeader(this._io, this, this._root);
      this._m_pe._read();
      this._debug._m_pe.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_pe;
    }
  });

  return MicrosoftPe;
})();
MicrosoftPe_.MicrosoftPe = MicrosoftPe;
});
