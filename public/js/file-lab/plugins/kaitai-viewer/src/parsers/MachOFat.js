// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream', './MachO'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'), require('./MachO'));
  } else {
    factory(root.MachOFat || (root.MachOFat = {}), root.KaitaiStream, root.MachO || (root.MachO = {}));
  }
})(typeof self !== 'undefined' ? self : this, function (MachOFat_, KaitaiStream, MachO_) {
/**
 * This is a simple container format that encapsulates multiple Mach-O files,
 * each generally for a different architecture. XNU can execute these files just
 * like single-arch Mach-Os and will pick the appropriate entry.
 * @see {@link https://opensource.apple.com/source/xnu/xnu-7195.121.3/EXTERNAL_HEADERS/mach-o/fat.h.auto.html|Source}
 */

var MachOFat = (function() {
  function MachOFat(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  MachOFat.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(4);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([202, 254, 186, 190])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([202, 254, 186, 190]), this.magic, this._io, "/seq/0");
      this._debug.magic.validationError = _err;
      throw _err;
    }
    this._debug.numFatArch = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.numFatArch = this._io.readU4be();
    this._debug.numFatArch.end = this._io.pos;
    this._debug.fatArchs = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.fatArchs.arr = [];
    this.fatArchs = [];
    for (var i = 0; i < this.numFatArch; i++) {
      this._debug.fatArchs.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_fatArchs = new FatArch(this._io, this, this._root);
      try {
        _t_fatArchs._read();
      } finally {
        this.fatArchs.push(_t_fatArchs);
      }
      this._debug.fatArchs.arr[i].end = this._io.pos;
    }
    this._debug.fatArchs.end = this._io.pos;
  }

  var FatArch = MachOFat.FatArch = (function() {
    function FatArch(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FatArch.prototype._read = function() {
      this._debug.cpuType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "MachO.CpuType" };
      this.cpuType = this._io.readU4be();
      this._debug.cpuType.end = this._io.pos;
      this._debug.cpuSubtype = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cpuSubtype = this._io.readU4be();
      this._debug.cpuSubtype.end = this._io.pos;
      this._debug.ofsObject = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofsObject = this._io.readU4be();
      this._debug.ofsObject.end = this._io.pos;
      this._debug.lenObject = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenObject = this._io.readU4be();
      this._debug.lenObject.end = this._io.pos;
      this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.align = this._io.readU4be();
      this._debug.align.end = this._io.pos;
    }
    Object.defineProperty(FatArch.prototype, 'object', {
      get: function() {
        if (this._m_object !== undefined)
          return this._m_object;
        var _pos = this._io.pos;
        this._io.seek(this.ofsObject);
        this._debug._m_object = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._raw__m_object = this._io.readBytes(this.lenObject);
        var _io__raw__m_object = new KaitaiStream(this._raw__m_object);
        this._m_object = new MachO_.MachO(_io__raw__m_object, null, null);
        this._m_object._read();
        this._debug._m_object.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_object;
      }
    });

    return FatArch;
  })();

  return MachOFat;
})();
MachOFat_.MachOFat = MachOFat;
});
