// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.DosMz || (root.DosMz = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (DosMz_, KaitaiStream) {
/**
 * DOS MZ file format is a traditional format for executables in MS-DOS
 * environment. Many modern formats (i.e. Windows PE) still maintain
 * compatibility stub with this format.
 * 
 * As opposed to .com file format (which basically sports one 64K code
 * segment of raw CPU instructions), DOS MZ .exe file format allowed
 * more flexible memory management, loading of larger programs and
 * added support for relocations.
 * @see {@link http://www.delorie.com/djgpp/doc/exe/|Source}
 */

var DosMz = (function() {
  function DosMz(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  DosMz.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new ExeHeader(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.body = this._io.readBytes(this.header.lenBody);
    this._debug.body.end = this._io.pos;
  }

  var ExeHeader = DosMz.ExeHeader = (function() {
    function ExeHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ExeHeader.prototype._read = function() {
      this._debug.mz = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.mz = new MzHeader(this._io, this, this._root);
      this.mz._read();
      this._debug.mz.end = this._io.pos;
      this._debug.restOfHeader = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.restOfHeader = this._io.readBytes(this.mz.lenHeader - 28);
      this._debug.restOfHeader.end = this._io.pos;
    }
    Object.defineProperty(ExeHeader.prototype, 'lenBody', {
      get: function() {
        if (this._m_lenBody !== undefined)
          return this._m_lenBody;
        this._debug._m_lenBody = {  };
        this._m_lenBody = (this.mz.lastPageExtraBytes == 0 ? this.mz.numPages * 512 : (this.mz.numPages - 1) * 512 + this.mz.lastPageExtraBytes) - this.mz.lenHeader;
        return this._m_lenBody;
      }
    });

    return ExeHeader;
  })();

  var MzHeader = DosMz.MzHeader = (function() {
    function MzHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MzHeader.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = KaitaiStream.bytesToStr(this._io.readBytes(2), "ASCII");
      this._debug.magic.end = this._io.pos;
      if (!( ((this.magic == "MZ") || (this.magic == "ZM")) )) {
        var _err = new KaitaiStream.ValidationNotAnyOfError(this.magic, this._io, "/types/mz_header/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.lastPageExtraBytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lastPageExtraBytes = this._io.readU2le();
      this._debug.lastPageExtraBytes.end = this._io.pos;
      this._debug.numPages = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numPages = this._io.readU2le();
      this._debug.numPages.end = this._io.pos;
      this._debug.numRelocations = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numRelocations = this._io.readU2le();
      this._debug.numRelocations.end = this._io.pos;
      this._debug.headerSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.headerSize = this._io.readU2le();
      this._debug.headerSize.end = this._io.pos;
      this._debug.minAllocation = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minAllocation = this._io.readU2le();
      this._debug.minAllocation.end = this._io.pos;
      this._debug.maxAllocation = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxAllocation = this._io.readU2le();
      this._debug.maxAllocation.end = this._io.pos;
      this._debug.initialSs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialSs = this._io.readU2le();
      this._debug.initialSs.end = this._io.pos;
      this._debug.initialSp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialSp = this._io.readU2le();
      this._debug.initialSp.end = this._io.pos;
      this._debug.checksum = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.checksum = this._io.readU2le();
      this._debug.checksum.end = this._io.pos;
      this._debug.initialIp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialIp = this._io.readU2le();
      this._debug.initialIp.end = this._io.pos;
      this._debug.initialCs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialCs = this._io.readU2le();
      this._debug.initialCs.end = this._io.pos;
      this._debug.ofsRelocations = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofsRelocations = this._io.readU2le();
      this._debug.ofsRelocations.end = this._io.pos;
      this._debug.overlayId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.overlayId = this._io.readU2le();
      this._debug.overlayId.end = this._io.pos;
    }
    Object.defineProperty(MzHeader.prototype, 'lenHeader', {
      get: function() {
        if (this._m_lenHeader !== undefined)
          return this._m_lenHeader;
        this._debug._m_lenHeader = {  };
        this._m_lenHeader = this.headerSize * 16;
        return this._m_lenHeader;
      }
    });

    return MzHeader;
  })();

  var Relocation = DosMz.Relocation = (function() {
    function Relocation(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Relocation.prototype._read = function() {
      this._debug.ofs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofs = this._io.readU2le();
      this._debug.ofs.end = this._io.pos;
      this._debug.seg = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.seg = this._io.readU2le();
      this._debug.seg.end = this._io.pos;
    }

    return Relocation;
  })();
  Object.defineProperty(DosMz.prototype, 'relocations', {
    get: function() {
      if (this._m_relocations !== undefined)
        return this._m_relocations;
      if (this.header.mz.ofsRelocations != 0) {
        var io = this.header._io;
        var _pos = io.pos;
        io.seek(this.header.mz.ofsRelocations);
        this._debug._m_relocations = { start: io.pos, ioOffset: io.byteOffset };
        this._debug._m_relocations.arr = [];
        this._m_relocations = [];
        for (var i = 0; i < this.header.mz.numRelocations; i++) {
          this._debug._m_relocations.arr[i] = { start: io.pos, ioOffset: io.byteOffset };
          var _t__m_relocations = new Relocation(io, this, this._root);
          try {
            _t__m_relocations._read();
          } finally {
            this._m_relocations.push(_t__m_relocations);
          }
          this._debug._m_relocations.arr[i].end = io.pos;
        }
        this._debug._m_relocations.end = io.pos;
        io.seek(_pos);
      }
      return this._m_relocations;
    }
  });

  return DosMz;
})();
DosMz_.DosMz = DosMz;
});
