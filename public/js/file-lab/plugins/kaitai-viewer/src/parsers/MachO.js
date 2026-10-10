// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream', './Asn1Der'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'), require('./Asn1Der'));
  } else {
    factory(root.MachO || (root.MachO = {}), root.KaitaiStream, root.Asn1Der || (root.Asn1Der = {}));
  }
})(typeof self !== 'undefined' ? self : this, function (MachO_, KaitaiStream, Asn1Der_) {
/**
 * @see {@link https://www.stonedcoder.org/~kd/lib/MachORuntime.pdf|Source}
 * @see {@link https://opensource.apple.com/source/python_modules/python_modules-43/Modules/macholib-1.5.1/macholib-1.5.1.tar.gz|Source}
 * @see {@link https://github.com/comex/cs/blob/07a88f9/macho_cs.py|Source}
 * @see {@link https://opensource.apple.com/source/Security/Security-55471/libsecurity_codesigning/requirements.grammar.auto.html|Source}
 * @see {@link https://github.com/apple/darwin-xnu/blob/xnu-2782.40.9/bsd/sys/codesign.h|Source}
 * @see {@link https://opensource.apple.com/source/dyld/dyld-852/src/ImageLoaderMachO.cpp.auto.html|Source}
 * @see {@link https://opensource.apple.com/source/dyld/dyld-852/src/ImageLoaderMachOCompressed.cpp.auto.html|Source}
 */

var MachO = (function() {
  MachO.CpuType = Object.freeze({
    VAX: 1,
    ROMP: 2,
    NS32032: 4,
    NS32332: 5,
    I386: 7,
    MIPS: 8,
    NS32532: 9,
    HPPA: 11,
    ARM: 12,
    MC88000: 13,
    SPARC: 14,
    I860: 15,
    I860_LITTLE: 16,
    RS6000: 17,
    POWERPC: 18,
    ABI64: 16777216,
    X86_64: 16777223,
    ARM64: 16777228,
    POWERPC64: 16777234,
    ANY: 4294967295,

    1: "VAX",
    2: "ROMP",
    4: "NS32032",
    5: "NS32332",
    7: "I386",
    8: "MIPS",
    9: "NS32532",
    11: "HPPA",
    12: "ARM",
    13: "MC88000",
    14: "SPARC",
    15: "I860",
    16: "I860_LITTLE",
    17: "RS6000",
    18: "POWERPC",
    16777216: "ABI64",
    16777223: "X86_64",
    16777228: "ARM64",
    16777234: "POWERPC64",
    4294967295: "ANY",
  });

  MachO.FileType = Object.freeze({
    OBJECT: 1,
    EXECUTE: 2,
    FVMLIB: 3,
    CORE: 4,
    PRELOAD: 5,
    DYLIB: 6,
    DYLINKER: 7,
    BUNDLE: 8,
    DYLIB_STUB: 9,
    DSYM: 10,
    KEXT_BUNDLE: 11,

    1: "OBJECT",
    2: "EXECUTE",
    3: "FVMLIB",
    4: "CORE",
    5: "PRELOAD",
    6: "DYLIB",
    7: "DYLINKER",
    8: "BUNDLE",
    9: "DYLIB_STUB",
    10: "DSYM",
    11: "KEXT_BUNDLE",
  });

  MachO.LoadCommandType = Object.freeze({
    SEGMENT: 1,
    SYMTAB: 2,
    SYMSEG: 3,
    THREAD: 4,
    UNIX_THREAD: 5,
    LOAD_FVM_LIB: 6,
    ID_FVM_LIB: 7,
    IDENT: 8,
    FVM_FILE: 9,
    PREPAGE: 10,
    DYSYMTAB: 11,
    LOAD_DYLIB: 12,
    ID_DYLIB: 13,
    LOAD_DYLINKER: 14,
    ID_DYLINKER: 15,
    PREBOUND_DYLIB: 16,
    ROUTINES: 17,
    SUB_FRAMEWORK: 18,
    SUB_UMBRELLA: 19,
    SUB_CLIENT: 20,
    SUB_LIBRARY: 21,
    TWOLEVEL_HINTS: 22,
    PREBIND_CKSUM: 23,
    SEGMENT_64: 25,
    ROUTINES_64: 26,
    UUID: 27,
    CODE_SIGNATURE: 29,
    SEGMENT_SPLIT_INFO: 30,
    LAZY_LOAD_DYLIB: 32,
    ENCRYPTION_INFO: 33,
    DYLD_INFO: 34,
    VERSION_MIN_MACOSX: 36,
    VERSION_MIN_IPHONEOS: 37,
    FUNCTION_STARTS: 38,
    DYLD_ENVIRONMENT: 39,
    DATA_IN_CODE: 41,
    SOURCE_VERSION: 42,
    DYLIB_CODE_SIGN_DRS: 43,
    ENCRYPTION_INFO_64: 44,
    LINKER_OPTION: 45,
    LINKER_OPTIMIZATION_HINT: 46,
    VERSION_MIN_TVOS: 47,
    VERSION_MIN_WATCHOS: 48,
    BUILD_VERSION: 50,
    REQ_DYLD: 2147483648,
    LOAD_WEAK_DYLIB: 2147483672,
    RPATH: 2147483676,
    REEXPORT_DYLIB: 2147483679,
    DYLD_INFO_ONLY: 2147483682,
    LOAD_UPWARD_DYLIB: 2147483683,
    MAIN: 2147483688,

    1: "SEGMENT",
    2: "SYMTAB",
    3: "SYMSEG",
    4: "THREAD",
    5: "UNIX_THREAD",
    6: "LOAD_FVM_LIB",
    7: "ID_FVM_LIB",
    8: "IDENT",
    9: "FVM_FILE",
    10: "PREPAGE",
    11: "DYSYMTAB",
    12: "LOAD_DYLIB",
    13: "ID_DYLIB",
    14: "LOAD_DYLINKER",
    15: "ID_DYLINKER",
    16: "PREBOUND_DYLIB",
    17: "ROUTINES",
    18: "SUB_FRAMEWORK",
    19: "SUB_UMBRELLA",
    20: "SUB_CLIENT",
    21: "SUB_LIBRARY",
    22: "TWOLEVEL_HINTS",
    23: "PREBIND_CKSUM",
    25: "SEGMENT_64",
    26: "ROUTINES_64",
    27: "UUID",
    29: "CODE_SIGNATURE",
    30: "SEGMENT_SPLIT_INFO",
    32: "LAZY_LOAD_DYLIB",
    33: "ENCRYPTION_INFO",
    34: "DYLD_INFO",
    36: "VERSION_MIN_MACOSX",
    37: "VERSION_MIN_IPHONEOS",
    38: "FUNCTION_STARTS",
    39: "DYLD_ENVIRONMENT",
    41: "DATA_IN_CODE",
    42: "SOURCE_VERSION",
    43: "DYLIB_CODE_SIGN_DRS",
    44: "ENCRYPTION_INFO_64",
    45: "LINKER_OPTION",
    46: "LINKER_OPTIMIZATION_HINT",
    47: "VERSION_MIN_TVOS",
    48: "VERSION_MIN_WATCHOS",
    50: "BUILD_VERSION",
    2147483648: "REQ_DYLD",
    2147483672: "LOAD_WEAK_DYLIB",
    2147483676: "RPATH",
    2147483679: "REEXPORT_DYLIB",
    2147483682: "DYLD_INFO_ONLY",
    2147483683: "LOAD_UPWARD_DYLIB",
    2147483688: "MAIN",
  });

  MachO.MagicType = Object.freeze({
    MACHO_LE_X86: 3472551422,
    MACHO_LE_X64: 3489328638,
    MACHO_BE_X86: 4277009102,
    MACHO_BE_X64: 4277009103,

    3472551422: "MACHO_LE_X86",
    3489328638: "MACHO_LE_X64",
    4277009102: "MACHO_BE_X86",
    4277009103: "MACHO_BE_X64",
  });

  function MachO(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  MachO.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.MagicType" };
    this.magic = this._io.readU4be();
    this._debug.magic.end = this._io.pos;
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new MachHeader(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.loadCommands = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.loadCommands.arr = [];
    this.loadCommands = [];
    for (var i = 0; i < this.header.ncmds; i++) {
      this._debug.loadCommands.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_loadCommands = new LoadCommand(this._io, this, this._root);
      try {
        _t_loadCommands._read();
      } finally {
        this.loadCommands.push(_t_loadCommands);
      }
      this._debug.loadCommands.arr[i].end = this._io.pos;
    }
    this._debug.loadCommands.end = this._io.pos;
  }

  var BuildVersionCommand = MachO.BuildVersionCommand = (function() {
    function BuildVersionCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BuildVersionCommand.prototype._read = function() {
      this._debug.platform = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.platform = this._io.readU4le();
      this._debug.platform.end = this._io.pos;
      this._debug.minos = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minos = this._io.readU4le();
      this._debug.minos.end = this._io.pos;
      this._debug.sdk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sdk = this._io.readU4le();
      this._debug.sdk.end = this._io.pos;
      this._debug.ntools = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ntools = this._io.readU4le();
      this._debug.ntools.end = this._io.pos;
      this._debug.tools = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.tools.arr = [];
      this.tools = [];
      for (var i = 0; i < this.ntools; i++) {
        this._debug.tools.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_tools = new BuildToolVersion(this._io, this, this._root);
        try {
          _t_tools._read();
        } finally {
          this.tools.push(_t_tools);
        }
        this._debug.tools.arr[i].end = this._io.pos;
      }
      this._debug.tools.end = this._io.pos;
    }

    var BuildToolVersion = BuildVersionCommand.BuildToolVersion = (function() {
      function BuildToolVersion(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BuildToolVersion.prototype._read = function() {
        this._debug.tool = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.tool = this._io.readU4le();
        this._debug.tool.end = this._io.pos;
        this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.version = this._io.readU4le();
        this._debug.version.end = this._io.pos;
      }

      return BuildToolVersion;
    })();

    return BuildVersionCommand;
  })();

  var CodeSignatureCommand = MachO.CodeSignatureCommand = (function() {
    function CodeSignatureCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CodeSignatureCommand.prototype._read = function() {
      this._debug.dataOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataOff = this._io.readU4le();
      this._debug.dataOff.end = this._io.pos;
      this._debug.dataSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataSize = this._io.readU4le();
      this._debug.dataSize.end = this._io.pos;
    }
    Object.defineProperty(CodeSignatureCommand.prototype, 'codeSignature', {
      get: function() {
        if (this._m_codeSignature !== undefined)
          return this._m_codeSignature;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.dataOff);
        this._debug._m_codeSignature = { start: io.pos, ioOffset: io.byteOffset };
        this._raw__m_codeSignature = io.readBytes(this.dataSize);
        var _io__raw__m_codeSignature = new KaitaiStream(this._raw__m_codeSignature);
        this._m_codeSignature = new CsBlob(_io__raw__m_codeSignature, this, this._root);
        this._m_codeSignature._read();
        this._debug._m_codeSignature.end = io.pos;
        io.seek(_pos);
        return this._m_codeSignature;
      }
    });

    return CodeSignatureCommand;
  })();

  var CsBlob = MachO.CsBlob = (function() {
    CsBlob.CsMagic = Object.freeze({
      BLOB_WRAPPER: 4208855809,
      REQUIREMENT: 4208856064,
      REQUIREMENTS: 4208856065,
      CODE_DIRECTORY: 4208856066,
      EMBEDDED_SIGNATURE: 4208856256,
      DETACHED_SIGNATURE: 4208856257,
      ENTITLEMENTS: 4208882033,
      DER_ENTITLEMENTS: 4208882034,

      4208855809: "BLOB_WRAPPER",
      4208856064: "REQUIREMENT",
      4208856065: "REQUIREMENTS",
      4208856066: "CODE_DIRECTORY",
      4208856256: "EMBEDDED_SIGNATURE",
      4208856257: "DETACHED_SIGNATURE",
      4208882033: "ENTITLEMENTS",
      4208882034: "DER_ENTITLEMENTS",
    });

    function CsBlob(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CsBlob.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.CsMagic" };
      this.magic = this._io.readU4be();
      this._debug.magic.end = this._io.pos;
      this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.length = this._io.readU4be();
      this._debug.length.end = this._io.pos;
      this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.magic) {
      case MachO.CsBlob.CsMagic.BLOB_WRAPPER:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new BlobWrapper(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.CODE_DIRECTORY:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new CodeDirectory(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.DER_ENTITLEMENTS:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new Asn1Der_.Asn1Der(_io__raw_body, null, null);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.DETACHED_SIGNATURE:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SuperBlob(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.EMBEDDED_SIGNATURE:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SuperBlob(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.ENTITLEMENTS:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new Entitlements(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.REQUIREMENT:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new Requirement(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.CsBlob.CsMagic.REQUIREMENTS:
        this._raw_body = this._io.readBytes(this.length - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new Requirements(_io__raw_body, this, this._root);
        this.body._read();
        break;
      default:
        this.body = this._io.readBytes(this.length - 8);
        break;
      }
      this._debug.body.end = this._io.pos;
    }

    var BlobIndex = CsBlob.BlobIndex = (function() {
      BlobIndex.CsslotType = Object.freeze({
        CODE_DIRECTORY: 0,
        INFO_SLOT: 1,
        REQUIREMENTS: 2,
        RESOURCE_DIR: 3,
        APPLICATION: 4,
        ENTITLEMENTS: 5,
        DER_ENTITLEMENTS: 7,
        ALTERNATE_CODE_DIRECTORIES: 4096,
        SIGNATURE_SLOT: 65536,

        0: "CODE_DIRECTORY",
        1: "INFO_SLOT",
        2: "REQUIREMENTS",
        3: "RESOURCE_DIR",
        4: "APPLICATION",
        5: "ENTITLEMENTS",
        7: "DER_ENTITLEMENTS",
        4096: "ALTERNATE_CODE_DIRECTORIES",
        65536: "SIGNATURE_SLOT",
      });

      function BlobIndex(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BlobIndex.prototype._read = function() {
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.BlobIndex.CsslotType" };
        this.type = this._io.readU4be();
        this._debug.type.end = this._io.pos;
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.offset = this._io.readU4be();
        this._debug.offset.end = this._io.pos;
      }
      Object.defineProperty(BlobIndex.prototype, 'blob', {
        get: function() {
          if (this._m_blob !== undefined)
            return this._m_blob;
          var io = this._parent._io;
          var _pos = io.pos;
          io.seek(this.offset - 8);
          this._debug._m_blob = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_blob = io.readBytesFull();
          var _io__raw__m_blob = new KaitaiStream(this._raw__m_blob);
          this._m_blob = new CsBlob(_io__raw__m_blob, this, this._root);
          this._m_blob._read();
          this._debug._m_blob.end = io.pos;
          io.seek(_pos);
          return this._m_blob;
        }
      });

      return BlobIndex;
    })();

    var BlobWrapper = CsBlob.BlobWrapper = (function() {
      function BlobWrapper(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BlobWrapper.prototype._read = function() {
        this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.data = this._io.readBytesFull();
        this._debug.data.end = this._io.pos;
      }

      return BlobWrapper;
    })();

    var CodeDirectory = CsBlob.CodeDirectory = (function() {
      function CodeDirectory(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      CodeDirectory.prototype._read = function() {
        this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.version = this._io.readU4be();
        this._debug.version.end = this._io.pos;
        this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.flags = this._io.readU4be();
        this._debug.flags.end = this._io.pos;
        this._debug.hashOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.hashOffset = this._io.readU4be();
        this._debug.hashOffset.end = this._io.pos;
        this._debug.identOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.identOffset = this._io.readU4be();
        this._debug.identOffset.end = this._io.pos;
        this._debug.nSpecialSlots = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.nSpecialSlots = this._io.readU4be();
        this._debug.nSpecialSlots.end = this._io.pos;
        this._debug.nCodeSlots = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.nCodeSlots = this._io.readU4be();
        this._debug.nCodeSlots.end = this._io.pos;
        this._debug.codeLimit = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.codeLimit = this._io.readU4be();
        this._debug.codeLimit.end = this._io.pos;
        this._debug.hashSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.hashSize = this._io.readU1();
        this._debug.hashSize.end = this._io.pos;
        this._debug.hashType = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.hashType = this._io.readU1();
        this._debug.hashType.end = this._io.pos;
        this._debug.spare1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.spare1 = this._io.readU1();
        this._debug.spare1.end = this._io.pos;
        this._debug.pageSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.pageSize = this._io.readU1();
        this._debug.pageSize.end = this._io.pos;
        this._debug.spare2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.spare2 = this._io.readU4be();
        this._debug.spare2.end = this._io.pos;
        if (this.version >= 131328) {
          this._debug.scatterOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.scatterOffset = this._io.readU4be();
          this._debug.scatterOffset.end = this._io.pos;
        }
        if (this.version >= 131584) {
          this._debug.teamIdOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.teamIdOffset = this._io.readU4be();
          this._debug.teamIdOffset.end = this._io.pos;
        }
      }
      Object.defineProperty(CodeDirectory.prototype, 'hashes', {
        get: function() {
          if (this._m_hashes !== undefined)
            return this._m_hashes;
          var _pos = this._io.pos;
          this._io.seek((this.hashOffset - 8) - this.hashSize * this.nSpecialSlots);
          this._debug._m_hashes = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._debug._m_hashes.arr = [];
          this._m_hashes = [];
          for (var i = 0; i < this.nSpecialSlots + this.nCodeSlots; i++) {
            this._debug._m_hashes.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_hashes.push(this._io.readBytes(this.hashSize));
            this._debug._m_hashes.arr[i].end = this._io.pos;
          }
          this._debug._m_hashes.end = this._io.pos;
          this._io.seek(_pos);
          return this._m_hashes;
        }
      });
      Object.defineProperty(CodeDirectory.prototype, 'ident', {
        get: function() {
          if (this._m_ident !== undefined)
            return this._m_ident;
          var _pos = this._io.pos;
          this._io.seek(this.identOffset - 8);
          this._debug._m_ident = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_ident = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
          this._debug._m_ident.end = this._io.pos;
          this._io.seek(_pos);
          return this._m_ident;
        }
      });
      Object.defineProperty(CodeDirectory.prototype, 'teamId', {
        get: function() {
          if (this._m_teamId !== undefined)
            return this._m_teamId;
          var _pos = this._io.pos;
          this._io.seek(this.teamIdOffset - 8);
          this._debug._m_teamId = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_teamId = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
          this._debug._m_teamId.end = this._io.pos;
          this._io.seek(_pos);
          return this._m_teamId;
        }
      });

      return CodeDirectory;
    })();

    var Data = CsBlob.Data = (function() {
      function Data(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Data.prototype._read = function() {
        this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.length = this._io.readU4be();
        this._debug.length.end = this._io.pos;
        this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value = this._io.readBytes(this.length);
        this._debug.value.end = this._io.pos;
        this._debug.padding = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.padding = this._io.readBytes(KaitaiStream.mod(-(this.length), 4));
        this._debug.padding.end = this._io.pos;
      }

      return Data;
    })();

    var Entitlements = CsBlob.Entitlements = (function() {
      function Entitlements(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Entitlements.prototype._read = function() {
        this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.data = this._io.readBytesFull();
        this._debug.data.end = this._io.pos;
      }

      return Entitlements;
    })();

    var Expr = CsBlob.Expr = (function() {
      Expr.CertSlot = Object.freeze({
        LEFT_CERT: 0,
        ANCHOR_CERT: 4294967295,

        0: "LEFT_CERT",
        4294967295: "ANCHOR_CERT",
      });

      Expr.OpEnum = Object.freeze({
        FALSE: 0,
        TRUE: 1,
        IDENT: 2,
        APPLE_ANCHOR: 3,
        ANCHOR_HASH: 4,
        INFO_KEY_VALUE: 5,
        AND_OP: 6,
        OR_OP: 7,
        CD_HASH: 8,
        NOT_OP: 9,
        INFO_KEY_FIELD: 10,
        CERT_FIELD: 11,
        TRUSTED_CERT: 12,
        TRUSTED_CERTS: 13,
        CERT_GENERIC: 14,
        APPLE_GENERIC_ANCHOR: 15,
        ENTITLEMENT_FIELD: 16,

        0: "FALSE",
        1: "TRUE",
        2: "IDENT",
        3: "APPLE_ANCHOR",
        4: "ANCHOR_HASH",
        5: "INFO_KEY_VALUE",
        6: "AND_OP",
        7: "OR_OP",
        8: "CD_HASH",
        9: "NOT_OP",
        10: "INFO_KEY_FIELD",
        11: "CERT_FIELD",
        12: "TRUSTED_CERT",
        13: "TRUSTED_CERTS",
        14: "CERT_GENERIC",
        15: "APPLE_GENERIC_ANCHOR",
        16: "ENTITLEMENT_FIELD",
      });

      function Expr(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Expr.prototype._read = function() {
        this._debug.op = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Expr.OpEnum" };
        this.op = this._io.readU4be();
        this._debug.op.end = this._io.pos;
        this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this.op) {
        case MachO.CsBlob.Expr.OpEnum.ANCHOR_HASH:
          this.data = new AnchorHashExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.AND_OP:
          this.data = new AndExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.APPLE_GENERIC_ANCHOR:
          this.data = new AppleGenericAnchorExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.CD_HASH:
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.CERT_FIELD:
          this.data = new CertFieldExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.CERT_GENERIC:
          this.data = new CertGenericExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.ENTITLEMENT_FIELD:
          this.data = new EntitlementFieldExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.IDENT:
          this.data = new IdentExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.INFO_KEY_FIELD:
          this.data = new InfoKeyFieldExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.INFO_KEY_VALUE:
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.NOT_OP:
          this.data = new Expr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.OR_OP:
          this.data = new OrExpr(this._io, this, this._root);
          this.data._read();
          break;
        case MachO.CsBlob.Expr.OpEnum.TRUSTED_CERT:
          this.data = new CertSlotExpr(this._io, this, this._root);
          this.data._read();
          break;
        }
        this._debug.data.end = this._io.pos;
      }

      var AnchorHashExpr = Expr.AnchorHashExpr = (function() {
        function AnchorHashExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        AnchorHashExpr.prototype._read = function() {
          this._debug.certSlot = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Expr.CertSlot" };
          this.certSlot = this._io.readU4be();
          this._debug.certSlot.end = this._io.pos;
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
        }

        return AnchorHashExpr;
      })();

      var AndExpr = Expr.AndExpr = (function() {
        function AndExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        AndExpr.prototype._read = function() {
          this._debug.left = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.left = new Expr(this._io, this, this._root);
          this.left._read();
          this._debug.left.end = this._io.pos;
          this._debug.right = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.right = new Expr(this._io, this, this._root);
          this.right._read();
          this._debug.right.end = this._io.pos;
        }

        return AndExpr;
      })();

      var AppleGenericAnchorExpr = Expr.AppleGenericAnchorExpr = (function() {
        function AppleGenericAnchorExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        AppleGenericAnchorExpr.prototype._read = function() {
        }
        Object.defineProperty(AppleGenericAnchorExpr.prototype, 'value', {
          get: function() {
            if (this._m_value !== undefined)
              return this._m_value;
            this._debug._m_value = {  };
            this._m_value = "anchor apple generic";
            return this._m_value;
          }
        });

        return AppleGenericAnchorExpr;
      })();

      var CertFieldExpr = Expr.CertFieldExpr = (function() {
        function CertFieldExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        CertFieldExpr.prototype._read = function() {
          this._debug.certSlot = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Expr.CertSlot" };
          this.certSlot = this._io.readU4be();
          this._debug.certSlot.end = this._io.pos;
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
          this._debug.match = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.match = new Match(this._io, this, this._root);
          this.match._read();
          this._debug.match.end = this._io.pos;
        }

        return CertFieldExpr;
      })();

      var CertGenericExpr = Expr.CertGenericExpr = (function() {
        function CertGenericExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        CertGenericExpr.prototype._read = function() {
          this._debug.certSlot = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Expr.CertSlot" };
          this.certSlot = this._io.readU4be();
          this._debug.certSlot.end = this._io.pos;
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
          this._debug.match = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.match = new Match(this._io, this, this._root);
          this.match._read();
          this._debug.match.end = this._io.pos;
        }

        return CertGenericExpr;
      })();

      var CertSlotExpr = Expr.CertSlotExpr = (function() {
        function CertSlotExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        CertSlotExpr.prototype._read = function() {
          this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Expr.CertSlot" };
          this.value = this._io.readU4be();
          this._debug.value.end = this._io.pos;
        }

        return CertSlotExpr;
      })();

      var EntitlementFieldExpr = Expr.EntitlementFieldExpr = (function() {
        function EntitlementFieldExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        EntitlementFieldExpr.prototype._read = function() {
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
          this._debug.match = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.match = new Match(this._io, this, this._root);
          this.match._read();
          this._debug.match.end = this._io.pos;
        }

        return EntitlementFieldExpr;
      })();

      var IdentExpr = Expr.IdentExpr = (function() {
        function IdentExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        IdentExpr.prototype._read = function() {
          this._debug.identifier = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.identifier = new Data(this._io, this, this._root);
          this.identifier._read();
          this._debug.identifier.end = this._io.pos;
        }

        return IdentExpr;
      })();

      var InfoKeyFieldExpr = Expr.InfoKeyFieldExpr = (function() {
        function InfoKeyFieldExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        InfoKeyFieldExpr.prototype._read = function() {
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
          this._debug.match = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.match = new Match(this._io, this, this._root);
          this.match._read();
          this._debug.match.end = this._io.pos;
        }

        return InfoKeyFieldExpr;
      })();

      var OrExpr = Expr.OrExpr = (function() {
        function OrExpr(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        OrExpr.prototype._read = function() {
          this._debug.left = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.left = new Expr(this._io, this, this._root);
          this.left._read();
          this._debug.left.end = this._io.pos;
          this._debug.right = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.right = new Expr(this._io, this, this._root);
          this.right._read();
          this._debug.right.end = this._io.pos;
        }

        return OrExpr;
      })();

      return Expr;
    })();

    var Match = CsBlob.Match = (function() {
      Match.Op = Object.freeze({
        EXISTS: 0,
        EQUAL: 1,
        CONTAINS: 2,
        BEGINS_WITH: 3,
        ENDS_WITH: 4,
        LESS_THAN: 5,
        GREATER_THAN: 6,
        LESS_EQUAL: 7,
        GREATER_EQUAL: 8,

        0: "EXISTS",
        1: "EQUAL",
        2: "CONTAINS",
        3: "BEGINS_WITH",
        4: "ENDS_WITH",
        5: "LESS_THAN",
        6: "GREATER_THAN",
        7: "LESS_EQUAL",
        8: "GREATER_EQUAL",
      });

      function Match(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Match.prototype._read = function() {
        this._debug.matchOp = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.Match.Op" };
        this.matchOp = this._io.readU4be();
        this._debug.matchOp.end = this._io.pos;
        if (this.matchOp != MachO.CsBlob.Match.Op.EXISTS) {
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = new Data(this._io, this, this._root);
          this.data._read();
          this._debug.data.end = this._io.pos;
        }
      }

      return Match;
    })();

    var Requirement = CsBlob.Requirement = (function() {
      function Requirement(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Requirement.prototype._read = function() {
        this._debug.kind = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.kind = this._io.readU4be();
        this._debug.kind.end = this._io.pos;
        this._debug.expr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.expr = new Expr(this._io, this, this._root);
        this.expr._read();
        this._debug.expr.end = this._io.pos;
      }

      return Requirement;
    })();

    var Requirements = CsBlob.Requirements = (function() {
      function Requirements(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Requirements.prototype._read = function() {
        this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.count = this._io.readU4be();
        this._debug.count.end = this._io.pos;
        this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.items.arr = [];
        this.items = [];
        for (var i = 0; i < this.count; i++) {
          this._debug.items.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_items = new RequirementsBlobIndex(this._io, this, this._root);
          try {
            _t_items._read();
          } finally {
            this.items.push(_t_items);
          }
          this._debug.items.arr[i].end = this._io.pos;
        }
        this._debug.items.end = this._io.pos;
      }

      return Requirements;
    })();

    var RequirementsBlobIndex = CsBlob.RequirementsBlobIndex = (function() {
      RequirementsBlobIndex.RequirementType = Object.freeze({
        HOST: 1,
        GUEST: 2,
        DESIGNATED: 3,
        LIBRARY: 4,

        1: "HOST",
        2: "GUEST",
        3: "DESIGNATED",
        4: "LIBRARY",
      });

      function RequirementsBlobIndex(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      RequirementsBlobIndex.prototype._read = function() {
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CsBlob.RequirementsBlobIndex.RequirementType" };
        this.type = this._io.readU4be();
        this._debug.type.end = this._io.pos;
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.offset = this._io.readU4be();
        this._debug.offset.end = this._io.pos;
      }
      Object.defineProperty(RequirementsBlobIndex.prototype, 'value', {
        get: function() {
          if (this._m_value !== undefined)
            return this._m_value;
          var _pos = this._io.pos;
          this._io.seek(this.offset - 8);
          this._debug._m_value = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_value = new CsBlob(this._io, this, this._root);
          this._m_value._read();
          this._debug._m_value.end = this._io.pos;
          this._io.seek(_pos);
          return this._m_value;
        }
      });

      return RequirementsBlobIndex;
    })();

    var SuperBlob = CsBlob.SuperBlob = (function() {
      function SuperBlob(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      SuperBlob.prototype._read = function() {
        this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.count = this._io.readU4be();
        this._debug.count.end = this._io.pos;
        this._debug.blobs = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.blobs.arr = [];
        this.blobs = [];
        for (var i = 0; i < this.count; i++) {
          this._debug.blobs.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_blobs = new BlobIndex(this._io, this, this._root);
          try {
            _t_blobs._read();
          } finally {
            this.blobs.push(_t_blobs);
          }
          this._debug.blobs.arr[i].end = this._io.pos;
        }
        this._debug.blobs.end = this._io.pos;
      }

      return SuperBlob;
    })();

    return CsBlob;
  })();

  var DyldInfoCommand = MachO.DyldInfoCommand = (function() {
    DyldInfoCommand.BindOpcode = Object.freeze({
      DONE: 0,
      SET_DYLIB_ORDINAL_IMMEDIATE: 16,
      SET_DYLIB_ORDINAL_ULEB: 32,
      SET_DYLIB_SPECIAL_IMMEDIATE: 48,
      SET_SYMBOL_TRAILING_FLAGS_IMMEDIATE: 64,
      SET_TYPE_IMMEDIATE: 80,
      SET_APPEND_SLEB: 96,
      SET_SEGMENT_AND_OFFSET_ULEB: 112,
      ADD_ADDRESS_ULEB: 128,
      DO_BIND: 144,
      DO_BIND_ADD_ADDRESS_ULEB: 160,
      DO_BIND_ADD_ADDRESS_IMMEDIATE_SCALED: 176,
      DO_BIND_ULEB_TIMES_SKIPPING_ULEB: 192,

      0: "DONE",
      16: "SET_DYLIB_ORDINAL_IMMEDIATE",
      32: "SET_DYLIB_ORDINAL_ULEB",
      48: "SET_DYLIB_SPECIAL_IMMEDIATE",
      64: "SET_SYMBOL_TRAILING_FLAGS_IMMEDIATE",
      80: "SET_TYPE_IMMEDIATE",
      96: "SET_APPEND_SLEB",
      112: "SET_SEGMENT_AND_OFFSET_ULEB",
      128: "ADD_ADDRESS_ULEB",
      144: "DO_BIND",
      160: "DO_BIND_ADD_ADDRESS_ULEB",
      176: "DO_BIND_ADD_ADDRESS_IMMEDIATE_SCALED",
      192: "DO_BIND_ULEB_TIMES_SKIPPING_ULEB",
    });

    function DyldInfoCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DyldInfoCommand.prototype._read = function() {
      this._debug.rebaseOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rebaseOff = this._io.readU4le();
      this._debug.rebaseOff.end = this._io.pos;
      this._debug.rebaseSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rebaseSize = this._io.readU4le();
      this._debug.rebaseSize.end = this._io.pos;
      this._debug.bindOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bindOff = this._io.readU4le();
      this._debug.bindOff.end = this._io.pos;
      this._debug.bindSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bindSize = this._io.readU4le();
      this._debug.bindSize.end = this._io.pos;
      this._debug.weakBindOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.weakBindOff = this._io.readU4le();
      this._debug.weakBindOff.end = this._io.pos;
      this._debug.weakBindSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.weakBindSize = this._io.readU4le();
      this._debug.weakBindSize.end = this._io.pos;
      this._debug.lazyBindOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lazyBindOff = this._io.readU4le();
      this._debug.lazyBindOff.end = this._io.pos;
      this._debug.lazyBindSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lazyBindSize = this._io.readU4le();
      this._debug.lazyBindSize.end = this._io.pos;
      this._debug.exportOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.exportOff = this._io.readU4le();
      this._debug.exportOff.end = this._io.pos;
      this._debug.exportSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.exportSize = this._io.readU4le();
      this._debug.exportSize.end = this._io.pos;
    }

    var BindData = DyldInfoCommand.BindData = (function() {
      function BindData(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BindData.prototype._read = function() {
        this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.items.arr = [];
        this.items = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_items = new BindItem(this._io, this, this._root);
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

      return BindData;
    })();

    var BindItem = DyldInfoCommand.BindItem = (function() {
      function BindItem(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BindItem.prototype._read = function() {
        this._debug.opcodeAndImmediate = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.opcodeAndImmediate = this._io.readU1();
        this._debug.opcodeAndImmediate.end = this._io.pos;
        if ( ((this.opcode == MachO.DyldInfoCommand.BindOpcode.SET_DYLIB_ORDINAL_ULEB) || (this.opcode == MachO.DyldInfoCommand.BindOpcode.SET_APPEND_SLEB) || (this.opcode == MachO.DyldInfoCommand.BindOpcode.SET_SEGMENT_AND_OFFSET_ULEB) || (this.opcode == MachO.DyldInfoCommand.BindOpcode.ADD_ADDRESS_ULEB) || (this.opcode == MachO.DyldInfoCommand.BindOpcode.DO_BIND_ADD_ADDRESS_ULEB) || (this.opcode == MachO.DyldInfoCommand.BindOpcode.DO_BIND_ULEB_TIMES_SKIPPING_ULEB)) ) {
          this._debug.uleb = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.uleb = new Uleb128(this._io, this, this._root);
          this.uleb._read();
          this._debug.uleb.end = this._io.pos;
        }
        if (this.opcode == MachO.DyldInfoCommand.BindOpcode.DO_BIND_ULEB_TIMES_SKIPPING_ULEB) {
          this._debug.skip = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.skip = new Uleb128(this._io, this, this._root);
          this.skip._read();
          this._debug.skip.end = this._io.pos;
        }
        if (this.opcode == MachO.DyldInfoCommand.BindOpcode.SET_SYMBOL_TRAILING_FLAGS_IMMEDIATE) {
          this._debug.symbol = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.symbol = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
          this._debug.symbol.end = this._io.pos;
        }
      }
      Object.defineProperty(BindItem.prototype, 'immediate', {
        get: function() {
          if (this._m_immediate !== undefined)
            return this._m_immediate;
          this._debug._m_immediate = {  };
          this._m_immediate = this.opcodeAndImmediate & 15;
          return this._m_immediate;
        }
      });
      Object.defineProperty(BindItem.prototype, 'opcode', {
        get: function() {
          if (this._m_opcode !== undefined)
            return this._m_opcode;
          this._debug._m_opcode = { enumName: "MachO.DyldInfoCommand.BindOpcode" };
          this._m_opcode = this.opcodeAndImmediate & 240;
          return this._m_opcode;
        }
      });

      return BindItem;
    })();

    var ExportNode = DyldInfoCommand.ExportNode = (function() {
      function ExportNode(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      ExportNode.prototype._read = function() {
        this._debug.terminalSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.terminalSize = new Uleb128(this._io, this, this._root);
        this.terminalSize._read();
        this._debug.terminalSize.end = this._io.pos;
        this._debug.childrenCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.childrenCount = this._io.readU1();
        this._debug.childrenCount.end = this._io.pos;
        this._debug.children = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.children.arr = [];
        this.children = [];
        for (var i = 0; i < this.childrenCount; i++) {
          this._debug.children.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_children = new Child(this._io, this, this._root);
          try {
            _t_children._read();
          } finally {
            this.children.push(_t_children);
          }
          this._debug.children.arr[i].end = this._io.pos;
        }
        this._debug.children.end = this._io.pos;
        this._debug.terminal = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.terminal = this._io.readBytes(this.terminalSize.value);
        this._debug.terminal.end = this._io.pos;
      }

      var Child = ExportNode.Child = (function() {
        function Child(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        Child.prototype._read = function() {
          this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
          this._debug.name.end = this._io.pos;
          this._debug.nodeOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.nodeOffset = new Uleb128(this._io, this, this._root);
          this.nodeOffset._read();
          this._debug.nodeOffset.end = this._io.pos;
        }
        Object.defineProperty(Child.prototype, 'value', {
          get: function() {
            if (this._m_value !== undefined)
              return this._m_value;
            var _pos = this._io.pos;
            this._io.seek(this.nodeOffset.value);
            this._debug._m_value = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_value = new ExportNode(this._io, this, this._root);
            this._m_value._read();
            this._debug._m_value.end = this._io.pos;
            this._io.seek(_pos);
            return this._m_value;
          }
        });

        return Child;
      })();

      return ExportNode;
    })();

    var RebaseData = DyldInfoCommand.RebaseData = (function() {
      RebaseData.Opcode = Object.freeze({
        DONE: 0,
        SET_TYPE_IMMEDIATE: 16,
        SET_SEGMENT_AND_OFFSET_ULEB: 32,
        ADD_ADDRESS_ULEB: 48,
        ADD_ADDRESS_IMMEDIATE_SCALED: 64,
        DO_REBASE_IMMEDIATE_TIMES: 80,
        DO_REBASE_ULEB_TIMES: 96,
        DO_REBASE_ADD_ADDRESS_ULEB: 112,
        DO_REBASE_ULEB_TIMES_SKIPPING_ULEB: 128,

        0: "DONE",
        16: "SET_TYPE_IMMEDIATE",
        32: "SET_SEGMENT_AND_OFFSET_ULEB",
        48: "ADD_ADDRESS_ULEB",
        64: "ADD_ADDRESS_IMMEDIATE_SCALED",
        80: "DO_REBASE_IMMEDIATE_TIMES",
        96: "DO_REBASE_ULEB_TIMES",
        112: "DO_REBASE_ADD_ADDRESS_ULEB",
        128: "DO_REBASE_ULEB_TIMES_SKIPPING_ULEB",
      });

      function RebaseData(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      RebaseData.prototype._read = function() {
        this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.items.arr = [];
        this.items = [];
        var i = 0;
        do {
          this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_items = new RebaseItem(this._io, this, this._root);
          try {
            _t_items._read();
          } finally {
            var _ = _t_items;
            this.items.push(_);
          }
          this._debug.items.arr[this.items.length - 1].end = this._io.pos;
          i++;
        } while (!(_.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.DONE));
        this._debug.items.end = this._io.pos;
      }

      var RebaseItem = RebaseData.RebaseItem = (function() {
        function RebaseItem(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        RebaseItem.prototype._read = function() {
          this._debug.opcodeAndImmediate = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.opcodeAndImmediate = this._io.readU1();
          this._debug.opcodeAndImmediate.end = this._io.pos;
          if ( ((this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.SET_SEGMENT_AND_OFFSET_ULEB) || (this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.ADD_ADDRESS_ULEB) || (this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.DO_REBASE_ULEB_TIMES) || (this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.DO_REBASE_ADD_ADDRESS_ULEB) || (this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.DO_REBASE_ULEB_TIMES_SKIPPING_ULEB)) ) {
            this._debug.uleb = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.uleb = new Uleb128(this._io, this, this._root);
            this.uleb._read();
            this._debug.uleb.end = this._io.pos;
          }
          if (this.opcode == MachO.DyldInfoCommand.RebaseData.Opcode.DO_REBASE_ULEB_TIMES_SKIPPING_ULEB) {
            this._debug.skip = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.skip = new Uleb128(this._io, this, this._root);
            this.skip._read();
            this._debug.skip.end = this._io.pos;
          }
        }
        Object.defineProperty(RebaseItem.prototype, 'immediate', {
          get: function() {
            if (this._m_immediate !== undefined)
              return this._m_immediate;
            this._debug._m_immediate = {  };
            this._m_immediate = this.opcodeAndImmediate & 15;
            return this._m_immediate;
          }
        });
        Object.defineProperty(RebaseItem.prototype, 'opcode', {
          get: function() {
            if (this._m_opcode !== undefined)
              return this._m_opcode;
            this._debug._m_opcode = { enumName: "MachO.DyldInfoCommand.RebaseData.Opcode" };
            this._m_opcode = this.opcodeAndImmediate & 240;
            return this._m_opcode;
          }
        });

        return RebaseItem;
      })();

      return RebaseData;
    })();
    Object.defineProperty(DyldInfoCommand.prototype, 'bind', {
      get: function() {
        if (this._m_bind !== undefined)
          return this._m_bind;
        if (this.bindSize != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.bindOff);
          this._debug._m_bind = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_bind = io.readBytes(this.bindSize);
          var _io__raw__m_bind = new KaitaiStream(this._raw__m_bind);
          this._m_bind = new BindData(_io__raw__m_bind, this, this._root);
          this._m_bind._read();
          this._debug._m_bind.end = io.pos;
          io.seek(_pos);
        }
        return this._m_bind;
      }
    });
    Object.defineProperty(DyldInfoCommand.prototype, 'exports', {
      get: function() {
        if (this._m_exports !== undefined)
          return this._m_exports;
        if (this.exportSize != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.exportOff);
          this._debug._m_exports = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_exports = io.readBytes(this.exportSize);
          var _io__raw__m_exports = new KaitaiStream(this._raw__m_exports);
          this._m_exports = new ExportNode(_io__raw__m_exports, this, this._root);
          this._m_exports._read();
          this._debug._m_exports.end = io.pos;
          io.seek(_pos);
        }
        return this._m_exports;
      }
    });
    Object.defineProperty(DyldInfoCommand.prototype, 'lazyBind', {
      get: function() {
        if (this._m_lazyBind !== undefined)
          return this._m_lazyBind;
        if (this.lazyBindSize != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.lazyBindOff);
          this._debug._m_lazyBind = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_lazyBind = io.readBytes(this.lazyBindSize);
          var _io__raw__m_lazyBind = new KaitaiStream(this._raw__m_lazyBind);
          this._m_lazyBind = new BindData(_io__raw__m_lazyBind, this, this._root);
          this._m_lazyBind._read();
          this._debug._m_lazyBind.end = io.pos;
          io.seek(_pos);
        }
        return this._m_lazyBind;
      }
    });
    Object.defineProperty(DyldInfoCommand.prototype, 'rebase', {
      get: function() {
        if (this._m_rebase !== undefined)
          return this._m_rebase;
        if (this.rebaseSize != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.rebaseOff);
          this._debug._m_rebase = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_rebase = io.readBytes(this.rebaseSize);
          var _io__raw__m_rebase = new KaitaiStream(this._raw__m_rebase);
          this._m_rebase = new RebaseData(_io__raw__m_rebase, this, this._root);
          this._m_rebase._read();
          this._debug._m_rebase.end = io.pos;
          io.seek(_pos);
        }
        return this._m_rebase;
      }
    });
    Object.defineProperty(DyldInfoCommand.prototype, 'weakBind', {
      get: function() {
        if (this._m_weakBind !== undefined)
          return this._m_weakBind;
        if (this.weakBindSize != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.weakBindOff);
          this._debug._m_weakBind = { start: io.pos, ioOffset: io.byteOffset };
          this._raw__m_weakBind = io.readBytes(this.weakBindSize);
          var _io__raw__m_weakBind = new KaitaiStream(this._raw__m_weakBind);
          this._m_weakBind = new BindData(_io__raw__m_weakBind, this, this._root);
          this._m_weakBind._read();
          this._debug._m_weakBind.end = io.pos;
          io.seek(_pos);
        }
        return this._m_weakBind;
      }
    });

    return DyldInfoCommand;
  })();

  var DylibCommand = MachO.DylibCommand = (function() {
    function DylibCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DylibCommand.prototype._read = function() {
      this._debug.nameOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameOffset = this._io.readU4le();
      this._debug.nameOffset.end = this._io.pos;
      this._debug.timestamp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timestamp = this._io.readU4le();
      this._debug.timestamp.end = this._io.pos;
      this._debug.currentVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.currentVersion = this._io.readU4le();
      this._debug.currentVersion.end = this._io.pos;
      this._debug.compatibilityVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.compatibilityVersion = this._io.readU4le();
      this._debug.compatibilityVersion.end = this._io.pos;
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
      this._debug.name.end = this._io.pos;
    }

    return DylibCommand;
  })();

  var DylinkerCommand = MachO.DylinkerCommand = (function() {
    function DylinkerCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DylinkerCommand.prototype._read = function() {
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = new LcStr(this._io, this, this._root);
      this.name._read();
      this._debug.name.end = this._io.pos;
    }

    return DylinkerCommand;
  })();

  var DysymtabCommand = MachO.DysymtabCommand = (function() {
    function DysymtabCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DysymtabCommand.prototype._read = function() {
      this._debug.iLocalSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.iLocalSym = this._io.readU4le();
      this._debug.iLocalSym.end = this._io.pos;
      this._debug.nLocalSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nLocalSym = this._io.readU4le();
      this._debug.nLocalSym.end = this._io.pos;
      this._debug.iExtDefSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.iExtDefSym = this._io.readU4le();
      this._debug.iExtDefSym.end = this._io.pos;
      this._debug.nExtDefSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nExtDefSym = this._io.readU4le();
      this._debug.nExtDefSym.end = this._io.pos;
      this._debug.iUndefSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.iUndefSym = this._io.readU4le();
      this._debug.iUndefSym.end = this._io.pos;
      this._debug.nUndefSym = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nUndefSym = this._io.readU4le();
      this._debug.nUndefSym.end = this._io.pos;
      this._debug.tocOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tocOff = this._io.readU4le();
      this._debug.tocOff.end = this._io.pos;
      this._debug.nToc = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nToc = this._io.readU4le();
      this._debug.nToc.end = this._io.pos;
      this._debug.modTabOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modTabOff = this._io.readU4le();
      this._debug.modTabOff.end = this._io.pos;
      this._debug.nModTab = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nModTab = this._io.readU4le();
      this._debug.nModTab.end = this._io.pos;
      this._debug.extRefSymOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.extRefSymOff = this._io.readU4le();
      this._debug.extRefSymOff.end = this._io.pos;
      this._debug.nExtRefSyms = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nExtRefSyms = this._io.readU4le();
      this._debug.nExtRefSyms.end = this._io.pos;
      this._debug.indirectSymOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.indirectSymOff = this._io.readU4le();
      this._debug.indirectSymOff.end = this._io.pos;
      this._debug.nIndirectSyms = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nIndirectSyms = this._io.readU4le();
      this._debug.nIndirectSyms.end = this._io.pos;
      this._debug.extRelOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.extRelOff = this._io.readU4le();
      this._debug.extRelOff.end = this._io.pos;
      this._debug.nExtRel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nExtRel = this._io.readU4le();
      this._debug.nExtRel.end = this._io.pos;
      this._debug.locRelOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.locRelOff = this._io.readU4le();
      this._debug.locRelOff.end = this._io.pos;
      this._debug.nLocRel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nLocRel = this._io.readU4le();
      this._debug.nLocRel.end = this._io.pos;
    }
    Object.defineProperty(DysymtabCommand.prototype, 'indirectSymbols', {
      get: function() {
        if (this._m_indirectSymbols !== undefined)
          return this._m_indirectSymbols;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.indirectSymOff);
        this._debug._m_indirectSymbols = { start: io.pos, ioOffset: io.byteOffset };
        this._debug._m_indirectSymbols.arr = [];
        this._m_indirectSymbols = [];
        for (var i = 0; i < this.nIndirectSyms; i++) {
          this._debug._m_indirectSymbols.arr[i] = { start: io.pos, ioOffset: io.byteOffset };
          this._m_indirectSymbols.push(io.readU4le());
          this._debug._m_indirectSymbols.arr[i].end = io.pos;
        }
        this._debug._m_indirectSymbols.end = io.pos;
        io.seek(_pos);
        return this._m_indirectSymbols;
      }
    });

    return DysymtabCommand;
  })();

  var EncryptionInfoCommand = MachO.EncryptionInfoCommand = (function() {
    function EncryptionInfoCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncryptionInfoCommand.prototype._read = function() {
      this._debug.cryptoff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cryptoff = this._io.readU4le();
      this._debug.cryptoff.end = this._io.pos;
      this._debug.cryptsize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cryptsize = this._io.readU4le();
      this._debug.cryptsize.end = this._io.pos;
      this._debug.cryptid = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cryptid = this._io.readU4le();
      this._debug.cryptid.end = this._io.pos;
      if ( ((this._root.magic == MachO.MagicType.MACHO_BE_X64) || (this._root.magic == MachO.MagicType.MACHO_LE_X64)) ) {
        this._debug.pad = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.pad = this._io.readU4le();
        this._debug.pad.end = this._io.pos;
      }
    }

    return EncryptionInfoCommand;
  })();

  var EntryPointCommand = MachO.EntryPointCommand = (function() {
    function EntryPointCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EntryPointCommand.prototype._read = function() {
      this._debug.entryOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.entryOff = this._io.readU8le();
      this._debug.entryOff.end = this._io.pos;
      this._debug.stackSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackSize = this._io.readU8le();
      this._debug.stackSize.end = this._io.pos;
    }

    return EntryPointCommand;
  })();

  var LcStr = MachO.LcStr = (function() {
    function LcStr(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LcStr.prototype._read = function() {
      this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.length = this._io.readU4le();
      this._debug.length.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
      this._debug.value.end = this._io.pos;
    }

    return LcStr;
  })();

  var LinkeditDataCommand = MachO.LinkeditDataCommand = (function() {
    function LinkeditDataCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LinkeditDataCommand.prototype._read = function() {
      this._debug.dataOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataOff = this._io.readU4le();
      this._debug.dataOff.end = this._io.pos;
      this._debug.dataSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataSize = this._io.readU4le();
      this._debug.dataSize.end = this._io.pos;
    }

    return LinkeditDataCommand;
  })();

  var LinkerOptionCommand = MachO.LinkerOptionCommand = (function() {
    function LinkerOptionCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LinkerOptionCommand.prototype._read = function() {
      this._debug.numStrings = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numStrings = this._io.readU4le();
      this._debug.numStrings.end = this._io.pos;
      this._debug.strings = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.strings.arr = [];
      this.strings = [];
      for (var i = 0; i < this.numStrings; i++) {
        this._debug.strings.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.strings.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8"));
        this._debug.strings.arr[i].end = this._io.pos;
      }
      this._debug.strings.end = this._io.pos;
    }

    return LinkerOptionCommand;
  })();

  var LoadCommand = MachO.LoadCommand = (function() {
    function LoadCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LoadCommand.prototype._read = function() {
      this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.LoadCommandType" };
      this.type = this._io.readU4le();
      this._debug.type.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.type) {
      case MachO.LoadCommandType.BUILD_VERSION:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new BuildVersionCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.CODE_SIGNATURE:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new CodeSignatureCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DATA_IN_CODE:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkeditDataCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DYLD_ENVIRONMENT:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylinkerCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DYLD_INFO:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DyldInfoCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DYLD_INFO_ONLY:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DyldInfoCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DYLIB_CODE_SIGN_DRS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkeditDataCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.DYSYMTAB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DysymtabCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ENCRYPTION_INFO:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new EncryptionInfoCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ENCRYPTION_INFO_64:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new EncryptionInfoCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.FUNCTION_STARTS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkeditDataCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ID_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ID_DYLINKER:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylinkerCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LAZY_LOAD_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LINKER_OPTIMIZATION_HINT:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkeditDataCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LINKER_OPTION:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkerOptionCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LOAD_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LOAD_DYLINKER:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylinkerCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LOAD_UPWARD_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.LOAD_WEAK_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.MAIN:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new EntryPointCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.REEXPORT_DYLIB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new DylibCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ROUTINES:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new RoutinesCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.ROUTINES_64:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new RoutinesCommand64(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.RPATH:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new RpathCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SEGMENT:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SegmentCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SEGMENT_64:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SegmentCommand64(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SEGMENT_SPLIT_INFO:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new LinkeditDataCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SOURCE_VERSION:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SourceVersionCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SUB_CLIENT:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SubCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SUB_FRAMEWORK:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SubCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SUB_LIBRARY:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SubCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SUB_UMBRELLA:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SubCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.SYMTAB:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SymtabCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.TWOLEVEL_HINTS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new TwolevelHintsCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.UUID:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new UuidCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.VERSION_MIN_IPHONEOS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new VersionMinCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.VERSION_MIN_MACOSX:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new VersionMinCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.VERSION_MIN_TVOS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new VersionMinCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      case MachO.LoadCommandType.VERSION_MIN_WATCHOS:
        this._raw_body = this._io.readBytes(this.size - 8);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new VersionMinCommand(_io__raw_body, this, this._root);
        this.body._read();
        break;
      default:
        this.body = this._io.readBytes(this.size - 8);
        break;
      }
      this._debug.body.end = this._io.pos;
    }

    return LoadCommand;
  })();

  var MachHeader = MachO.MachHeader = (function() {
    function MachHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MachHeader.prototype._read = function() {
      this._debug.cputype = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CpuType" };
      this.cputype = this._io.readU4le();
      this._debug.cputype.end = this._io.pos;
      this._debug.cpusubtype = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cpusubtype = this._io.readU4le();
      this._debug.cpusubtype.end = this._io.pos;
      this._debug.filetype = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.FileType" };
      this.filetype = this._io.readU4le();
      this._debug.filetype.end = this._io.pos;
      this._debug.ncmds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ncmds = this._io.readU4le();
      this._debug.ncmds.end = this._io.pos;
      this._debug.sizeofcmds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sizeofcmds = this._io.readU4le();
      this._debug.sizeofcmds.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU4le();
      this._debug.flags.end = this._io.pos;
      if ( ((this._root.magic == MachO.MagicType.MACHO_BE_X64) || (this._root.magic == MachO.MagicType.MACHO_LE_X64)) ) {
        this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved = this._io.readU4le();
        this._debug.reserved.end = this._io.pos;
      }
    }
    Object.defineProperty(MachHeader.prototype, 'flagsObj', {
      get: function() {
        if (this._m_flagsObj !== undefined)
          return this._m_flagsObj;
        this._debug._m_flagsObj = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_flagsObj = new MachoFlags(this._io, this, this._root, this.flags);
        this._m_flagsObj._read();
        this._debug._m_flagsObj.end = this._io.pos;
        return this._m_flagsObj;
      }
    });

    return MachHeader;
  })();

  var MachoFlags = MachO.MachoFlags = (function() {
    function MachoFlags(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.value = value;
      this._debug = {};

    }
    MachoFlags.prototype._read = function() {
    }

    /**
     * indicates that this binary binds to all two-level namespace modules of its dependent libraries. only used when MH_PREBINDABLE and MH_TWOLEVEL are both set.
     */
    Object.defineProperty(MachoFlags.prototype, 'allModsBound', {
      get: function() {
        if (this._m_allModsBound !== undefined)
          return this._m_allModsBound;
        this._debug._m_allModsBound = {  };
        this._m_allModsBound = (this.value & 4096) != 0;
        return this._m_allModsBound;
      }
    });

    /**
     * When this bit is set, all stacks in the task will be given stack execution privilege.  Only used in MH_EXECUTE filetypes.
     */
    Object.defineProperty(MachoFlags.prototype, 'allowStackExecution', {
      get: function() {
        if (this._m_allowStackExecution !== undefined)
          return this._m_allowStackExecution;
        this._debug._m_allowStackExecution = {  };
        this._m_allowStackExecution = (this.value & 131072) != 0;
        return this._m_allowStackExecution;
      }
    });
    Object.defineProperty(MachoFlags.prototype, 'appExtensionSafe', {
      get: function() {
        if (this._m_appExtensionSafe !== undefined)
          return this._m_appExtensionSafe;
        this._debug._m_appExtensionSafe = {  };
        this._m_appExtensionSafe = (this.value & 33554432) != 0;
        return this._m_appExtensionSafe;
      }
    });

    /**
     * the object file's undefined references are bound by the dynamic linker when loaded.
     */
    Object.defineProperty(MachoFlags.prototype, 'bindAtLoad', {
      get: function() {
        if (this._m_bindAtLoad !== undefined)
          return this._m_bindAtLoad;
        this._debug._m_bindAtLoad = {  };
        this._m_bindAtLoad = (this.value & 8) != 0;
        return this._m_bindAtLoad;
      }
    });

    /**
     * the final linked image uses weak symbols
     */
    Object.defineProperty(MachoFlags.prototype, 'bindsToWeak', {
      get: function() {
        if (this._m_bindsToWeak !== undefined)
          return this._m_bindsToWeak;
        this._debug._m_bindsToWeak = {  };
        this._m_bindsToWeak = (this.value & 65536) != 0;
        return this._m_bindsToWeak;
      }
    });

    /**
     * the binary has been canonicalized via the unprebind operation
     */
    Object.defineProperty(MachoFlags.prototype, 'canonical', {
      get: function() {
        if (this._m_canonical !== undefined)
          return this._m_canonical;
        this._debug._m_canonical = {  };
        this._m_canonical = (this.value & 16384) != 0;
        return this._m_canonical;
      }
    });
    Object.defineProperty(MachoFlags.prototype, 'deadStrippableDylib', {
      get: function() {
        if (this._m_deadStrippableDylib !== undefined)
          return this._m_deadStrippableDylib;
        this._debug._m_deadStrippableDylib = {  };
        this._m_deadStrippableDylib = (this.value & 4194304) != 0;
        return this._m_deadStrippableDylib;
      }
    });

    /**
     * the object file is input for the dynamic linker and can't be statically link-edited again
     */
    Object.defineProperty(MachoFlags.prototype, 'dyldLink', {
      get: function() {
        if (this._m_dyldLink !== undefined)
          return this._m_dyldLink;
        this._debug._m_dyldLink = {  };
        this._m_dyldLink = (this.value & 4) != 0;
        return this._m_dyldLink;
      }
    });

    /**
     * the executable is forcing all images to use flat name space bindings
     */
    Object.defineProperty(MachoFlags.prototype, 'forceFlat', {
      get: function() {
        if (this._m_forceFlat !== undefined)
          return this._m_forceFlat;
        this._debug._m_forceFlat = {  };
        this._m_forceFlat = (this.value & 256) != 0;
        return this._m_forceFlat;
      }
    });
    Object.defineProperty(MachoFlags.prototype, 'hasTlvDescriptors', {
      get: function() {
        if (this._m_hasTlvDescriptors !== undefined)
          return this._m_hasTlvDescriptors;
        this._debug._m_hasTlvDescriptors = {  };
        this._m_hasTlvDescriptors = (this.value & 8388608) != 0;
        return this._m_hasTlvDescriptors;
      }
    });

    /**
     * the object file is the output of an incremental link against a base file and can't be link-edited again
     */
    Object.defineProperty(MachoFlags.prototype, 'incrLink', {
      get: function() {
        if (this._m_incrLink !== undefined)
          return this._m_incrLink;
        this._debug._m_incrLink = {  };
        this._m_incrLink = (this.value & 2) != 0;
        return this._m_incrLink;
      }
    });

    /**
     * the shared library init routine is to be run lazily via catching memory faults to its writeable segments (obsolete)
     */
    Object.defineProperty(MachoFlags.prototype, 'lazyInit', {
      get: function() {
        if (this._m_lazyInit !== undefined)
          return this._m_lazyInit;
        this._debug._m_lazyInit = {  };
        this._m_lazyInit = (this.value & 64) != 0;
        return this._m_lazyInit;
      }
    });

    /**
     * do not have dyld notify the prebinding agent about this executable
     */
    Object.defineProperty(MachoFlags.prototype, 'noFixPrebinding', {
      get: function() {
        if (this._m_noFixPrebinding !== undefined)
          return this._m_noFixPrebinding;
        this._debug._m_noFixPrebinding = {  };
        this._m_noFixPrebinding = (this.value & 1024) != 0;
        return this._m_noFixPrebinding;
      }
    });
    Object.defineProperty(MachoFlags.prototype, 'noHeapExecution', {
      get: function() {
        if (this._m_noHeapExecution !== undefined)
          return this._m_noHeapExecution;
        this._debug._m_noHeapExecution = {  };
        this._m_noHeapExecution = (this.value & 16777216) != 0;
        return this._m_noHeapExecution;
      }
    });

    /**
     * this umbrella guarantees no multiple definitions of symbols in its sub-images so the two-level namespace hints can always be used.
     */
    Object.defineProperty(MachoFlags.prototype, 'noMultiDefs', {
      get: function() {
        if (this._m_noMultiDefs !== undefined)
          return this._m_noMultiDefs;
        this._debug._m_noMultiDefs = {  };
        this._m_noMultiDefs = (this.value & 512) != 0;
        return this._m_noMultiDefs;
      }
    });

    /**
     * When this bit is set on a dylib, the static linker does not need to examine dependent dylibs to see if any are re-exported
     */
    Object.defineProperty(MachoFlags.prototype, 'noReexportedDylibs', {
      get: function() {
        if (this._m_noReexportedDylibs !== undefined)
          return this._m_noReexportedDylibs;
        this._debug._m_noReexportedDylibs = {  };
        this._m_noReexportedDylibs = (this.value & 1048576) != 0;
        return this._m_noReexportedDylibs;
      }
    });

    /**
     * the object file has no undefined references
     */
    Object.defineProperty(MachoFlags.prototype, 'noUndefs', {
      get: function() {
        if (this._m_noUndefs !== undefined)
          return this._m_noUndefs;
        this._debug._m_noUndefs = {  };
        this._m_noUndefs = (this.value & 1) != 0;
        return this._m_noUndefs;
      }
    });

    /**
     * When this bit is set, the OS will load the main executable at a random address. Only used in MH_EXECUTE filetypes.
     */
    Object.defineProperty(MachoFlags.prototype, 'pie', {
      get: function() {
        if (this._m_pie !== undefined)
          return this._m_pie;
        this._debug._m_pie = {  };
        this._m_pie = (this.value & 2097152) != 0;
        return this._m_pie;
      }
    });

    /**
     * the binary is not prebound but can have its prebinding redone. only used when MH_PREBOUND is not set.
     */
    Object.defineProperty(MachoFlags.prototype, 'prebindable', {
      get: function() {
        if (this._m_prebindable !== undefined)
          return this._m_prebindable;
        this._debug._m_prebindable = {  };
        this._m_prebindable = (this.value & 2048) != 0;
        return this._m_prebindable;
      }
    });

    /**
     * the file has its dynamic undefined references prebound.
     */
    Object.defineProperty(MachoFlags.prototype, 'prebound', {
      get: function() {
        if (this._m_prebound !== undefined)
          return this._m_prebound;
        this._debug._m_prebound = {  };
        this._m_prebound = (this.value & 16) != 0;
        return this._m_prebound;
      }
    });

    /**
     * When this bit is set, the binary declares it is safe for use in processes with uid zero
     */
    Object.defineProperty(MachoFlags.prototype, 'rootSafe', {
      get: function() {
        if (this._m_rootSafe !== undefined)
          return this._m_rootSafe;
        this._debug._m_rootSafe = {  };
        this._m_rootSafe = (this.value & 262144) != 0;
        return this._m_rootSafe;
      }
    });

    /**
     * When this bit is set, the binary declares it is safe for use in processes when issetugid() is true
     */
    Object.defineProperty(MachoFlags.prototype, 'setuidSafe', {
      get: function() {
        if (this._m_setuidSafe !== undefined)
          return this._m_setuidSafe;
        this._debug._m_setuidSafe = {  };
        this._m_setuidSafe = (this.value & 524288) != 0;
        return this._m_setuidSafe;
      }
    });

    /**
     * the file has its read-only and read-write segments split
     */
    Object.defineProperty(MachoFlags.prototype, 'splitSegs', {
      get: function() {
        if (this._m_splitSegs !== undefined)
          return this._m_splitSegs;
        this._debug._m_splitSegs = {  };
        this._m_splitSegs = (this.value & 32) != 0;
        return this._m_splitSegs;
      }
    });

    /**
     * safe to divide up the sections into sub-sections via symbols for dead code stripping
     */
    Object.defineProperty(MachoFlags.prototype, 'subsectionsViaSymbols', {
      get: function() {
        if (this._m_subsectionsViaSymbols !== undefined)
          return this._m_subsectionsViaSymbols;
        this._debug._m_subsectionsViaSymbols = {  };
        this._m_subsectionsViaSymbols = (this.value & 8192) != 0;
        return this._m_subsectionsViaSymbols;
      }
    });

    /**
     * the image is using two-level name space bindings
     */
    Object.defineProperty(MachoFlags.prototype, 'twoLevel', {
      get: function() {
        if (this._m_twoLevel !== undefined)
          return this._m_twoLevel;
        this._debug._m_twoLevel = {  };
        this._m_twoLevel = (this.value & 128) != 0;
        return this._m_twoLevel;
      }
    });

    /**
     * the final linked image contains external weak symbols
     */
    Object.defineProperty(MachoFlags.prototype, 'weakDefines', {
      get: function() {
        if (this._m_weakDefines !== undefined)
          return this._m_weakDefines;
        this._debug._m_weakDefines = {  };
        this._m_weakDefines = (this.value & 32768) != 0;
        return this._m_weakDefines;
      }
    });

    return MachoFlags;
  })();

  var RoutinesCommand = MachO.RoutinesCommand = (function() {
    function RoutinesCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    RoutinesCommand.prototype._read = function() {
      this._debug.initAddress = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initAddress = this._io.readU4le();
      this._debug.initAddress.end = this._io.pos;
      this._debug.initModule = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initModule = this._io.readU4le();
      this._debug.initModule.end = this._io.pos;
      this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved = this._io.readBytes(24);
      this._debug.reserved.end = this._io.pos;
    }

    return RoutinesCommand;
  })();

  var RoutinesCommand64 = MachO.RoutinesCommand64 = (function() {
    function RoutinesCommand64(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    RoutinesCommand64.prototype._read = function() {
      this._debug.initAddress = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initAddress = this._io.readU8le();
      this._debug.initAddress.end = this._io.pos;
      this._debug.initModule = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initModule = this._io.readU8le();
      this._debug.initModule.end = this._io.pos;
      this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved = this._io.readBytes(48);
      this._debug.reserved.end = this._io.pos;
    }

    return RoutinesCommand64;
  })();

  var RpathCommand = MachO.RpathCommand = (function() {
    function RpathCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    RpathCommand.prototype._read = function() {
      this._debug.pathOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pathOffset = this._io.readU4le();
      this._debug.pathOffset.end = this._io.pos;
      this._debug.path = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.path = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
      this._debug.path.end = this._io.pos;
    }

    return RpathCommand;
  })();

  var SegmentCommand = MachO.SegmentCommand = (function() {
    function SegmentCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SegmentCommand.prototype._read = function() {
      this._debug.segname = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.segname = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
      this._debug.segname.end = this._io.pos;
      this._debug.vmaddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vmaddr = this._io.readU4le();
      this._debug.vmaddr.end = this._io.pos;
      this._debug.vmsize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vmsize = this._io.readU4le();
      this._debug.vmsize.end = this._io.pos;
      this._debug.fileoff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileoff = this._io.readU4le();
      this._debug.fileoff.end = this._io.pos;
      this._debug.filesize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.filesize = this._io.readU4le();
      this._debug.filesize.end = this._io.pos;
      this._debug.maxprot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxprot = new VmProt(this._io, this, this._root);
      this.maxprot._read();
      this._debug.maxprot.end = this._io.pos;
      this._debug.initprot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initprot = new VmProt(this._io, this, this._root);
      this.initprot._read();
      this._debug.initprot.end = this._io.pos;
      this._debug.nsects = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nsects = this._io.readU4le();
      this._debug.nsects.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU4le();
      this._debug.flags.end = this._io.pos;
      this._debug.sections = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.sections.arr = [];
      this.sections = [];
      for (var i = 0; i < this.nsects; i++) {
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

    var Section = SegmentCommand.Section = (function() {
      function Section(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Section.prototype._read = function() {
        this._debug.sectName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sectName = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
        this._debug.sectName.end = this._io.pos;
        this._debug.segName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.segName = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
        this._debug.segName.end = this._io.pos;
        this._debug.addr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.addr = this._io.readU4le();
        this._debug.addr.end = this._io.pos;
        this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.size = this._io.readU4le();
        this._debug.size.end = this._io.pos;
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.offset = this._io.readU4le();
        this._debug.offset.end = this._io.pos;
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.align = this._io.readU4le();
        this._debug.align.end = this._io.pos;
        this._debug.reloff = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reloff = this._io.readU4le();
        this._debug.reloff.end = this._io.pos;
        this._debug.nreloc = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.nreloc = this._io.readU4le();
        this._debug.nreloc.end = this._io.pos;
        this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.flags = this._io.readU4le();
        this._debug.flags.end = this._io.pos;
        this._debug.reserved1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved1 = this._io.readU4le();
        this._debug.reserved1.end = this._io.pos;
        this._debug.reserved2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved2 = this._io.readU4le();
        this._debug.reserved2.end = this._io.pos;
      }
      Object.defineProperty(Section.prototype, 'data', {
        get: function() {
          if (this._m_data !== undefined)
            return this._m_data;
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.offset);
          this._debug._m_data = { start: io.pos, ioOffset: io.byteOffset };
          this._m_data = io.readBytes(this.size);
          this._debug._m_data.end = io.pos;
          io.seek(_pos);
          return this._m_data;
        }
      });

      return Section;
    })();

    return SegmentCommand;
  })();

  var SegmentCommand64 = MachO.SegmentCommand64 = (function() {
    function SegmentCommand64(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SegmentCommand64.prototype._read = function() {
      this._debug.segname = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.segname = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
      this._debug.segname.end = this._io.pos;
      this._debug.vmaddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vmaddr = this._io.readU8le();
      this._debug.vmaddr.end = this._io.pos;
      this._debug.vmsize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vmsize = this._io.readU8le();
      this._debug.vmsize.end = this._io.pos;
      this._debug.fileoff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileoff = this._io.readU8le();
      this._debug.fileoff.end = this._io.pos;
      this._debug.filesize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.filesize = this._io.readU8le();
      this._debug.filesize.end = this._io.pos;
      this._debug.maxprot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxprot = new VmProt(this._io, this, this._root);
      this.maxprot._read();
      this._debug.maxprot.end = this._io.pos;
      this._debug.initprot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initprot = new VmProt(this._io, this, this._root);
      this.initprot._read();
      this._debug.initprot.end = this._io.pos;
      this._debug.nsects = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nsects = this._io.readU4le();
      this._debug.nsects.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU4le();
      this._debug.flags.end = this._io.pos;
      this._debug.sections = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.sections.arr = [];
      this.sections = [];
      for (var i = 0; i < this.nsects; i++) {
        this._debug.sections.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_sections = new Section64(this._io, this, this._root);
        try {
          _t_sections._read();
        } finally {
          this.sections.push(_t_sections);
        }
        this._debug.sections.arr[i].end = this._io.pos;
      }
      this._debug.sections.end = this._io.pos;
    }

    var Section64 = SegmentCommand64.Section64 = (function() {
      function Section64(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Section64.prototype._read = function() {
        this._debug.sectName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sectName = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
        this._debug.sectName.end = this._io.pos;
        this._debug.segName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.segName = KaitaiStream.bytesToStr(KaitaiStream.bytesStripRight(this._io.readBytes(16), 0), "ASCII");
        this._debug.segName.end = this._io.pos;
        this._debug.addr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.addr = this._io.readU8le();
        this._debug.addr.end = this._io.pos;
        this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.size = this._io.readU8le();
        this._debug.size.end = this._io.pos;
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.offset = this._io.readU4le();
        this._debug.offset.end = this._io.pos;
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.align = this._io.readU4le();
        this._debug.align.end = this._io.pos;
        this._debug.reloff = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reloff = this._io.readU4le();
        this._debug.reloff.end = this._io.pos;
        this._debug.nreloc = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.nreloc = this._io.readU4le();
        this._debug.nreloc.end = this._io.pos;
        this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.flags = this._io.readU4le();
        this._debug.flags.end = this._io.pos;
        this._debug.reserved1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved1 = this._io.readU4le();
        this._debug.reserved1.end = this._io.pos;
        this._debug.reserved2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved2 = this._io.readU4le();
        this._debug.reserved2.end = this._io.pos;
        this._debug.reserved3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.reserved3 = this._io.readU4le();
        this._debug.reserved3.end = this._io.pos;
      }

      var CfString = Section64.CfString = (function() {
        function CfString(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        CfString.prototype._read = function() {
          this._debug.isa = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.isa = this._io.readU8le();
          this._debug.isa.end = this._io.pos;
          this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.info = this._io.readU8le();
          this._debug.info.end = this._io.pos;
          this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.data = this._io.readU8le();
          this._debug.data.end = this._io.pos;
          this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.length = this._io.readU8le();
          this._debug.length.end = this._io.pos;
        }

        return CfString;
      })();

      var CfStringList = Section64.CfStringList = (function() {
        function CfStringList(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        CfStringList.prototype._read = function() {
          this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._debug.items.arr = [];
          this.items = [];
          var i = 0;
          while (!this._io.isEof()) {
            this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            var _t_items = new CfString(this._io, this, this._root);
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

        return CfStringList;
      })();

      var EhFrame = Section64.EhFrame = (function() {
        function EhFrame(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        EhFrame.prototype._read = function() {
          this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._debug.items.arr = [];
          this.items = [];
          var i = 0;
          while (!this._io.isEof()) {
            this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            var _t_items = new EhFrameItem(this._io, this, this._root);
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

        return EhFrame;
      })();

      var EhFrameItem = Section64.EhFrameItem = (function() {
        function EhFrameItem(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        EhFrameItem.prototype._read = function() {
          this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.length = this._io.readU4le();
          this._debug.length.end = this._io.pos;
          if (this.length == 4294967295) {
            this._debug.length64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.length64 = this._io.readU8le();
            this._debug.length64.end = this._io.pos;
          }
          this._debug.id = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.id = this._io.readU4le();
          this._debug.id.end = this._io.pos;
          if (this.length > 0) {
            this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
            switch (this.id) {
            case 0:
              this._raw_body = this._io.readBytes(this.length - 4);
              var _io__raw_body = new KaitaiStream(this._raw_body);
              this.body = new Cie(_io__raw_body, this, this._root);
              this.body._read();
              break;
            default:
              this.body = this._io.readBytes(this.length - 4);
              break;
            }
            this._debug.body.end = this._io.pos;
          }
        }

        var AugmentationEntry = EhFrameItem.AugmentationEntry = (function() {
          function AugmentationEntry(_io, _parent, _root) {
            this._io = _io;
            this._parent = _parent;
            this._root = _root;
            this._debug = {};

          }
          AugmentationEntry.prototype._read = function() {
            this._debug.length = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.length = new Uleb128(this._io, this, this._root);
            this.length._read();
            this._debug.length.end = this._io.pos;
            if (this._parent.augStr.next.chr == 82) {
              this._debug.fdePointerEncoding = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this.fdePointerEncoding = this._io.readU1();
              this._debug.fdePointerEncoding.end = this._io.pos;
            }
          }

          return AugmentationEntry;
        })();

        var CharChain = EhFrameItem.CharChain = (function() {
          function CharChain(_io, _parent, _root) {
            this._io = _io;
            this._parent = _parent;
            this._root = _root;
            this._debug = {};

          }
          CharChain.prototype._read = function() {
            this._debug.chr = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.chr = this._io.readU1();
            this._debug.chr.end = this._io.pos;
            if (this.chr != 0) {
              this._debug.next = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this.next = new CharChain(this._io, this, this._root);
              this.next._read();
              this._debug.next.end = this._io.pos;
            }
          }

          return CharChain;
        })();

        var Cie = EhFrameItem.Cie = (function() {
          function Cie(_io, _parent, _root) {
            this._io = _io;
            this._parent = _parent;
            this._root = _root;
            this._debug = {};

          }
          Cie.prototype._read = function() {
            this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.version = this._io.readU1();
            this._debug.version.end = this._io.pos;
            this._debug.augStr = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.augStr = new CharChain(this._io, this, this._root);
            this.augStr._read();
            this._debug.augStr.end = this._io.pos;
            this._debug.codeAlignmentFactor = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.codeAlignmentFactor = new Uleb128(this._io, this, this._root);
            this.codeAlignmentFactor._read();
            this._debug.codeAlignmentFactor.end = this._io.pos;
            this._debug.dataAlignmentFactor = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.dataAlignmentFactor = new Uleb128(this._io, this, this._root);
            this.dataAlignmentFactor._read();
            this._debug.dataAlignmentFactor.end = this._io.pos;
            this._debug.returnAddressRegister = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.returnAddressRegister = this._io.readU1();
            this._debug.returnAddressRegister.end = this._io.pos;
            if (this.augStr.chr == 122) {
              this._debug.augmentation = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this.augmentation = new AugmentationEntry(this._io, this, this._root);
              this.augmentation._read();
              this._debug.augmentation.end = this._io.pos;
            }
          }

          return Cie;
        })();

        return EhFrameItem;
      })();

      var PointerList = Section64.PointerList = (function() {
        function PointerList(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        PointerList.prototype._read = function() {
          this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._debug.items.arr = [];
          this.items = [];
          var i = 0;
          while (!this._io.isEof()) {
            this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.items.push(this._io.readU8le());
            this._debug.items.arr[this.items.length - 1].end = this._io.pos;
            i++;
          }
          this._debug.items.end = this._io.pos;
        }

        return PointerList;
      })();

      var StringList = Section64.StringList = (function() {
        function StringList(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        StringList.prototype._read = function() {
          this._debug.strings = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._debug.strings.arr = [];
          this.strings = [];
          var i = 0;
          while (!this._io.isEof()) {
            this._debug.strings.arr[this.strings.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this.strings.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII"));
            this._debug.strings.arr[this.strings.length - 1].end = this._io.pos;
            i++;
          }
          this._debug.strings.end = this._io.pos;
        }

        return StringList;
      })();
      Object.defineProperty(Section64.prototype, 'data', {
        get: function() {
          if (this._m_data !== undefined)
            return this._m_data;
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.offset);
          this._debug._m_data = { start: io.pos, ioOffset: io.byteOffset };
          switch (this.sectName) {
          case "__cfstring":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new CfStringList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__cstring":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new StringList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__eh_frame":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new EhFrame(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__got":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__la_symbol_ptr":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__nl_symbol_ptr":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_classlist":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_classname":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new StringList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_classrefs":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_imageinfo":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_methname":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new StringList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_methtype":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new StringList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_nlclslist":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_protolist":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_protorefs":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_selrefs":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          case "__objc_superrefs":
            this._raw__m_data = io.readBytes(this.size);
            var _io__raw__m_data = new KaitaiStream(this._raw__m_data);
            this._m_data = new PointerList(_io__raw__m_data, this, this._root);
            this._m_data._read();
            break;
          default:
            this._m_data = io.readBytes(this.size);
            break;
          }
          this._debug._m_data.end = io.pos;
          io.seek(_pos);
          return this._m_data;
        }
      });

      return Section64;
    })();

    return SegmentCommand64;
  })();

  var SourceVersionCommand = MachO.SourceVersionCommand = (function() {
    function SourceVersionCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SourceVersionCommand.prototype._read = function() {
      this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.version = this._io.readU8le();
      this._debug.version.end = this._io.pos;
    }

    return SourceVersionCommand;
  })();

  var SubCommand = MachO.SubCommand = (function() {
    function SubCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SubCommand.prototype._read = function() {
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = new LcStr(this._io, this, this._root);
      this.name._read();
      this._debug.name.end = this._io.pos;
    }

    return SubCommand;
  })();

  var SymtabCommand = MachO.SymtabCommand = (function() {
    function SymtabCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SymtabCommand.prototype._read = function() {
      this._debug.symOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.symOff = this._io.readU4le();
      this._debug.symOff.end = this._io.pos;
      this._debug.nSyms = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nSyms = this._io.readU4le();
      this._debug.nSyms.end = this._io.pos;
      this._debug.strOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strOff = this._io.readU4le();
      this._debug.strOff.end = this._io.pos;
      this._debug.strSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strSize = this._io.readU4le();
      this._debug.strSize.end = this._io.pos;
    }

    var Nlist = SymtabCommand.Nlist = (function() {
      function Nlist(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Nlist.prototype._read = function() {
        this._debug.un = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.un = this._io.readU4le();
        this._debug.un.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.type = this._io.readU1();
        this._debug.type.end = this._io.pos;
        this._debug.sect = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sect = this._io.readU1();
        this._debug.sect.end = this._io.pos;
        this._debug.desc = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.desc = this._io.readU2le();
        this._debug.desc.end = this._io.pos;
        this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value = this._io.readU4le();
        this._debug.value.end = this._io.pos;
      }
      Object.defineProperty(Nlist.prototype, 'name', {
        get: function() {
          if (this._m_name !== undefined)
            return this._m_name;
          if (this.un != 0) {
            var _pos = this._io.pos;
            this._io.seek(this._parent.strOff + this.un);
            this._debug._m_name = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
            this._debug._m_name.end = this._io.pos;
            this._io.seek(_pos);
          }
          return this._m_name;
        }
      });

      return Nlist;
    })();

    var Nlist64 = SymtabCommand.Nlist64 = (function() {
      function Nlist64(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Nlist64.prototype._read = function() {
        this._debug.un = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.un = this._io.readU4le();
        this._debug.un.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.type = this._io.readU1();
        this._debug.type.end = this._io.pos;
        this._debug.sect = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sect = this._io.readU1();
        this._debug.sect.end = this._io.pos;
        this._debug.desc = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.desc = this._io.readU2le();
        this._debug.desc.end = this._io.pos;
        this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value = this._io.readU8le();
        this._debug.value.end = this._io.pos;
      }
      Object.defineProperty(Nlist64.prototype, 'name', {
        get: function() {
          if (this._m_name !== undefined)
            return this._m_name;
          if (this.un != 0) {
            var _pos = this._io.pos;
            this._io.seek(this._parent.strOff + this.un);
            this._debug._m_name = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8");
            this._debug._m_name.end = this._io.pos;
            this._io.seek(_pos);
          }
          return this._m_name;
        }
      });

      return Nlist64;
    })();

    var StrTable = SymtabCommand.StrTable = (function() {
      function StrTable(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      StrTable.prototype._read = function() {
        this._debug.unknown = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.unknown = this._io.readU4le();
        this._debug.unknown.end = this._io.pos;
        this._debug.items = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.items.arr = [];
        this.items = [];
        var i = 0;
        do {
          this._debug.items.arr[this.items.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _ = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, false), "UTF-8");
          this.items.push(_);
          this._debug.items.arr[this.items.length - 1].end = this._io.pos;
          i++;
        } while (!(_ == ""));
        this._debug.items.end = this._io.pos;
      }

      return StrTable;
    })();
    Object.defineProperty(SymtabCommand.prototype, 'strs', {
      get: function() {
        if (this._m_strs !== undefined)
          return this._m_strs;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.strOff);
        this._debug._m_strs = { start: io.pos, ioOffset: io.byteOffset };
        this._raw__m_strs = io.readBytes(this.strSize);
        var _io__raw__m_strs = new KaitaiStream(this._raw__m_strs);
        this._m_strs = new StrTable(_io__raw__m_strs, this, this._root);
        this._m_strs._read();
        this._debug._m_strs.end = io.pos;
        io.seek(_pos);
        return this._m_strs;
      }
    });
    Object.defineProperty(SymtabCommand.prototype, 'symbols', {
      get: function() {
        if (this._m_symbols !== undefined)
          return this._m_symbols;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.symOff);
        this._debug._m_symbols = { start: io.pos, ioOffset: io.byteOffset };
        this._debug._m_symbols.arr = [];
        this._m_symbols = [];
        for (var i = 0; i < this.nSyms; i++) {
          this._debug._m_symbols.arr[i] = { start: io.pos, ioOffset: io.byteOffset };
          switch (this._root.magic) {
          case MachO.MagicType.MACHO_BE_X64:
            var _t__m_symbols = new Nlist64(io, this, this._root);
            try {
              _t__m_symbols._read();
            } finally {
              this._m_symbols.push(_t__m_symbols);
            }
            break;
          case MachO.MagicType.MACHO_BE_X86:
            var _t__m_symbols = new Nlist(io, this, this._root);
            try {
              _t__m_symbols._read();
            } finally {
              this._m_symbols.push(_t__m_symbols);
            }
            break;
          case MachO.MagicType.MACHO_LE_X64:
            var _t__m_symbols = new Nlist64(io, this, this._root);
            try {
              _t__m_symbols._read();
            } finally {
              this._m_symbols.push(_t__m_symbols);
            }
            break;
          case MachO.MagicType.MACHO_LE_X86:
            var _t__m_symbols = new Nlist(io, this, this._root);
            try {
              _t__m_symbols._read();
            } finally {
              this._m_symbols.push(_t__m_symbols);
            }
            break;
          }
          this._debug._m_symbols.arr[i].end = io.pos;
        }
        this._debug._m_symbols.end = io.pos;
        io.seek(_pos);
        return this._m_symbols;
      }
    });

    return SymtabCommand;
  })();

  var TwolevelHintsCommand = MachO.TwolevelHintsCommand = (function() {
    function TwolevelHintsCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TwolevelHintsCommand.prototype._read = function() {
      this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.offset = this._io.readU4le();
      this._debug.offset.end = this._io.pos;
      this._debug.numHints = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numHints = this._io.readU4le();
      this._debug.numHints.end = this._io.pos;
    }

    return TwolevelHintsCommand;
  })();

  var Uleb128 = MachO.Uleb128 = (function() {
    function Uleb128(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Uleb128.prototype._read = function() {
      this._debug.b1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.b1 = this._io.readU1();
      this._debug.b1.end = this._io.pos;
      if ((this.b1 & 128) != 0) {
        this._debug.b2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b2 = this._io.readU1();
        this._debug.b2.end = this._io.pos;
      }
      if ((this.b2 & 128) != 0) {
        this._debug.b3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b3 = this._io.readU1();
        this._debug.b3.end = this._io.pos;
      }
      if ((this.b3 & 128) != 0) {
        this._debug.b4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b4 = this._io.readU1();
        this._debug.b4.end = this._io.pos;
      }
      if ((this.b4 & 128) != 0) {
        this._debug.b5 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b5 = this._io.readU1();
        this._debug.b5.end = this._io.pos;
      }
      if ((this.b5 & 128) != 0) {
        this._debug.b6 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b6 = this._io.readU1();
        this._debug.b6.end = this._io.pos;
      }
      if ((this.b6 & 128) != 0) {
        this._debug.b7 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b7 = this._io.readU1();
        this._debug.b7.end = this._io.pos;
      }
      if ((this.b7 & 128) != 0) {
        this._debug.b8 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b8 = this._io.readU1();
        this._debug.b8.end = this._io.pos;
      }
      if ((this.b8 & 128) != 0) {
        this._debug.b9 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b9 = this._io.readU1();
        this._debug.b9.end = this._io.pos;
      }
      if ((this.b9 & 128) != 0) {
        this._debug.b10 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.b10 = this._io.readU1();
        this._debug.b10.end = this._io.pos;
      }
    }
    Object.defineProperty(Uleb128.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        this._debug._m_value = {  };
        this._m_value = (KaitaiStream.mod(this.b1, 128) << 0) + ((this.b1 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b2, 128) << 7) + ((this.b2 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b3, 128) << 14) + ((this.b3 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b4, 128) << 21) + ((this.b4 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b5, 128) << 28) + ((this.b5 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b6, 128) << 35) + ((this.b6 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b7, 128) << 42) + ((this.b7 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b8, 128) << 49) + ((this.b8 & 128) == 0 ? 0 : (KaitaiStream.mod(this.b9, 128) << 56) + ((this.b8 & 128) == 0 ? 0 : KaitaiStream.mod(this.b10, 128) << 63)))))))));
        return this._m_value;
      }
    });

    return Uleb128;
  })();

  var UuidCommand = MachO.UuidCommand = (function() {
    function UuidCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    UuidCommand.prototype._read = function() {
      this._debug.uuid = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.uuid = this._io.readBytes(16);
      this._debug.uuid.end = this._io.pos;
    }

    return UuidCommand;
  })();

  var Version = MachO.Version = (function() {
    function Version(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Version.prototype._read = function() {
      this._debug.p1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.p1 = this._io.readU1();
      this._debug.p1.end = this._io.pos;
      this._debug.minor = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minor = this._io.readU1();
      this._debug.minor.end = this._io.pos;
      this._debug.major = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.major = this._io.readU1();
      this._debug.major.end = this._io.pos;
      this._debug.release = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.release = this._io.readU1();
      this._debug.release.end = this._io.pos;
    }

    return Version;
  })();

  var VersionMinCommand = MachO.VersionMinCommand = (function() {
    function VersionMinCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    VersionMinCommand.prototype._read = function() {
      this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.version = new Version(this._io, this, this._root);
      this.version._read();
      this._debug.version.end = this._io.pos;
      this._debug.sdk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sdk = new Version(this._io, this, this._root);
      this.sdk._read();
      this._debug.sdk.end = this._io.pos;
    }

    return VersionMinCommand;
  })();

  var VmProt = MachO.VmProt = (function() {
    function VmProt(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    VmProt.prototype._read = function() {
      this._debug.stripRead = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stripRead = this._io.readBitsIntBe(1) != 0;
      this._debug.stripRead.end = this._io.pos;
      this._debug.isMask = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.isMask = this._io.readBitsIntBe(1) != 0;
      this._debug.isMask.end = this._io.pos;
      this._debug.reserved0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved0 = this._io.readBitsIntBe(1) != 0;
      this._debug.reserved0.end = this._io.pos;
      this._debug.copy = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.copy = this._io.readBitsIntBe(1) != 0;
      this._debug.copy.end = this._io.pos;
      this._debug.noChange = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noChange = this._io.readBitsIntBe(1) != 0;
      this._debug.noChange.end = this._io.pos;
      this._debug.execute = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.execute = this._io.readBitsIntBe(1) != 0;
      this._debug.execute.end = this._io.pos;
      this._debug.write = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.write = this._io.readBitsIntBe(1) != 0;
      this._debug.write.end = this._io.pos;
      this._debug.read = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.read = this._io.readBitsIntBe(1) != 0;
      this._debug.read.end = this._io.pos;
      this._debug.reserved1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved1 = this._io.readBitsIntBe(24);
      this._debug.reserved1.end = this._io.pos;
    }

    /**
     * Special marker to support execute-only protection.
     */

    /**
     * Indicates to use value as a mask against the actual protection bits.
     */

    /**
     * Reserved (unused) bit.
     */

    /**
     * Used when write permission can not be obtained, to mark the entry as COW.
     */

    /**
     * Used only by memory_object_lock_request to indicate no change to page locks.
     */

    /**
     * Execute permission.
     */

    /**
     * Write permission.
     */

    /**
     * Read permission.
     */

    /**
     * Reserved (unused) bits.
     */

    return VmProt;
  })();

  return MachO;
})();
MachO_.MachO = MachO;
});
