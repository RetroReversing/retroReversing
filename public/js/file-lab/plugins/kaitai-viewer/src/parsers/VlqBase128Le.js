// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.VlqBase128Le || (root.VlqBase128Le = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (VlqBase128Le_, KaitaiStream) {
/**
 * A variable-length unsigned/signed integer using base128 encoding. 1-byte groups
 * consist of 1-bit flag of continuation and 7-bit value chunk, and are ordered
 * "least significant group first", i.e. in "little-endian" manner.
 * 
 * This particular encoding is specified and used in:
 * 
 * * DWARF debug file format, where it's dubbed "unsigned LEB128" or "ULEB128".
 *   <https://dwarfstd.org/doc/dwarf-2.0.0.pdf> - page 139
 * * Google Protocol Buffers, where it's called "Base 128 Varints".
 *   <https://protobuf.dev/programming-guides/encoding/#varints>
 * * Apache Lucene, where it's called "VInt"
 *   <https://lucene.apache.org/core/3_5_0/fileformats.html#VInt>
 * * Apache Avro uses this as a basis for integer encoding, adding ZigZag on
 *   top of it for signed ints
 *   <https://avro.apache.org/docs/1.12.0/specification/#primitive-types-1>
 * 
 * More information on this encoding is available at <https://en.wikipedia.org/wiki/LEB128>
 * 
 * This particular implementation supports integer values up to 64 bits (i.e. the
 * maximum unsigned value supported is `2**64 - 1`), which implies that serialized
 * values can be up to 10 bytes in length.
 * 
 * If the most significant 10th byte (`groups[9]`) is present, its `has_next`
 * must be `false` (otherwise we would have 11 or more bytes, which is not
 * supported) and its `value` can be only `0` or `1` (because a 9-byte VLQ can
 * represent `9 * 7 = 63` bits already, so the 10th byte can only add 1 bit,
 * since only integers up to 64 bits are supported). These restrictions are
 * enforced by this implementation. They were inspired by the Protoscope tool,
 * see <https://github.com/protocolbuffers/protoscope/blob/8e7a6aafa2c9958527b1e0747e66e1bfff045819/writer.go#L644-L648>.
 */

var VlqBase128Le = (function() {
  function VlqBase128Le(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  VlqBase128Le.prototype._read = function() {
    this._debug.groups = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.groups.arr = [];
    this.groups = [];
    var i = 0;
    do {
      this._debug.groups.arr[this.groups.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_groups = new Group(this._io, this, this._root, i, (i != 0 ? this.groups[i - 1].intermValue : 0), (i != 0 ? (i == 9 ? 9223372036854775808 : this.groups[i - 1].multiplier * 128) : 1));
      try {
        _t_groups._read();
      } finally {
        var _ = _t_groups;
        this.groups.push(_);
      }
      this._debug.groups.arr[this.groups.length - 1].end = this._io.pos;
      i++;
    } while (!(!(_.hasNext)));
    this._debug.groups.end = this._io.pos;
  }

  /**
   * One byte group, clearly divided into 7-bit "value" chunk and 1-bit "continuation" flag.
   */

  var Group = VlqBase128Le.Group = (function() {
    function Group(_io, _parent, _root, idx, prevIntermValue, multiplier) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.idx = idx;
      this.prevIntermValue = prevIntermValue;
      this.multiplier = multiplier;
      this._debug = {};

    }
    Group.prototype._read = function() {
      this._debug.hasNext = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.hasNext = this._io.readBitsIntBe(1) != 0;
      this._debug.hasNext.end = this._io.pos;
      if (!(this.hasNext == (this.idx == 9 ? false : this.hasNext))) {
        var _err = new KaitaiStream.ValidationNotEqualError((this.idx == 9 ? false : this.hasNext), this.hasNext, this._io, "/types/group/seq/0");
        this._debug.hasNext.validationError = _err;
        throw _err;
      }
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readBitsIntBe(7);
      this._debug.value.end = this._io.pos;
      if (!(this.value <= (this.idx == 9 ? 1 : 127))) {
        var _err = new KaitaiStream.ValidationGreaterThanError((this.idx == 9 ? 1 : 127), this.value, this._io, "/types/group/seq/1");
        this._debug.value.validationError = _err;
        throw _err;
      }
    }
    Object.defineProperty(Group.prototype, 'intermValue', {
      get: function() {
        if (this._m_intermValue !== undefined)
          return this._m_intermValue;
        this._debug._m_intermValue = {  };
        this._m_intermValue = (this.prevIntermValue + this.value * this.multiplier);
        return this._m_intermValue;
      }
    });

    /**
     * If `true`, then we have more bytes to read.
     * 
     * Since this implementation only supports serialized values up to 10
     * bytes, this must be `false` in the 10th group (`groups[9]`).
     */

    /**
     * The 7-bit (base128) numeric value chunk of this group
     * 
     * Since this implementation only supports integer values up to 64 bits,
     * the `value` in the 10th group (`groups[9]`) can only be `0` or `1`
     * (otherwise the width of the represented value would be 65 bits or
     * more, which is not supported).
     */

    return Group;
  })();
  Object.defineProperty(VlqBase128Le.prototype, 'len', {
    get: function() {
      if (this._m_len !== undefined)
        return this._m_len;
      this._debug._m_len = {  };
      this._m_len = this.groups.length;
      return this._m_len;
    }
  });
  Object.defineProperty(VlqBase128Le.prototype, 'signBit', {
    get: function() {
      if (this._m_signBit !== undefined)
        return this._m_signBit;
      this._debug._m_signBit = {  };
      this._m_signBit = (this.len == 10 ? 9223372036854775808 : this.groups[this.groups.length - 1].multiplier * 64);
      return this._m_signBit;
    }
  });

  /**
   * Resulting unsigned value as normal integer
   */
  Object.defineProperty(VlqBase128Le.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      this._debug._m_value = {  };
      this._m_value = this.groups[this.groups.length - 1].intermValue;
      return this._m_value;
    }
  });
  Object.defineProperty(VlqBase128Le.prototype, 'valueSigned', {
    get: function() {
      if (this._m_valueSigned !== undefined)
        return this._m_valueSigned;
      this._debug._m_valueSigned = {  };
      this._m_valueSigned = ( ((this.signBit > 0) && (this.value >= this.signBit))  ? -((this.signBit - (this.value - this.signBit))) : this.value);
      return this._m_valueSigned;
    }
  });

  return VlqBase128Le;
})();
VlqBase128Le_.VlqBase128Le = VlqBase128Le;
});
