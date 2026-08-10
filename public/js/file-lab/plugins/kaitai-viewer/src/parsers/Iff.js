// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Iff || (root.Iff = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Iff_, KaitaiStream) {
/**
 * EA IFF 85 (Electronic Arts Interchange File Format) represents binary
 * data as a sequence of chunks. Each chunk has a 4-byte type id, a
 * 32-bit big-endian size, and a data payload. Odd-sized payloads are
 * followed by a zero pad byte.
 * 
 * ILBM, AIFF, and many Amiga-era formats build on this chunk layer.
 * @see {@link https://wiki.amigaos.net/wiki/IFF|Source}
 */

var Iff = (function() {
  function Iff(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Iff.prototype._read = function() {
  }

  var Chunk = Iff.Chunk = (function() {
    function Chunk(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Chunk.prototype._read = function() {
      this._debug.id = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.id = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
      this._debug.id.end = this._io.pos;
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4be();
      this._debug.len.end = this._io.pos;
      this._debug.bodySlot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_bodySlot = this._io.readBytes(this.len);
      var _io__raw_bodySlot = new KaitaiStream(this._raw_bodySlot);
      this.bodySlot = new BodySlot(_io__raw_bodySlot, this, this._root);
      this.bodySlot._read();
      this._debug.bodySlot.end = this._io.pos;
      this._debug.pad = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pad = this._io.readBytes(KaitaiStream.mod(this.len, 2));
      this._debug.pad.end = this._io.pos;
    }

    var BodySlot = Chunk.BodySlot = (function() {
      function BodySlot(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      BodySlot.prototype._read = function() {
      }

      return BodySlot;
    })();

    return Chunk;
  })();

  return Iff;
})();
Iff_.Iff = Iff;
});
