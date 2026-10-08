// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Asn1Der || (root.Asn1Der = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Asn1Der_, KaitaiStream) {
/**
 * ASN.1 (Abstract Syntax Notation One) DER (Distinguished Encoding
 * Rules) is a standard-backed serialization scheme used in many
 * different use-cases. Particularly popular usage scenarios are X.509
 * certificates and some telecommunication / networking protocols.
 * 
 * DER is self-describing encoding scheme which allows representation
 * of simple, atomic data elements, such as strings and numbers, and
 * complex objects, such as sequences of other elements.
 * 
 * DER is a subset of BER (Basic Encoding Rules), with an emphasis on
 * being non-ambiguous: there's always exactly one canonical way to
 * encode a data structure defined in terms of ASN.1 using DER.
 * 
 * This spec allows full parsing of format syntax, but to understand
 * the semantics, one would typically require a dictionary of Object
 * Identifiers (OIDs), to match OID bodies against some human-readable
 * list of constants. OIDs are covered by many different standards,
 * so typically it's simpler to use a pre-compiled list of them, such
 * as:
 * 
 * * <https://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg>
 * * <http://oid-info.com/>
 * * <https://www.alvestrand.no/objectid/top.html>
 * @see {@link https://www.itu.int/itu-t/recommendations/rec.aspx?rec=12483&lang=en|Source}
 */

var Asn1Der = (function() {
  Asn1Der.TypeTag = Object.freeze({
    END_OF_CONTENT: 0,
    BOOLEAN: 1,
    INTEGER: 2,
    BIT_STRING: 3,
    OCTET_STRING: 4,
    NULL_VALUE: 5,
    OBJECT_ID: 6,
    OBJECT_DESCRIPTOR: 7,
    EXTERNAL: 8,
    REAL: 9,
    ENUMERATED: 10,
    EMBEDDED_PDV: 11,
    UTF8STRING: 12,
    RELATIVE_OID: 13,
    SEQUENCE_10: 16,
    PRINTABLE_STRING: 19,
    IA5STRING: 22,
    SEQUENCE_30: 48,
    SET: 49,

    0: "END_OF_CONTENT",
    1: "BOOLEAN",
    2: "INTEGER",
    3: "BIT_STRING",
    4: "OCTET_STRING",
    5: "NULL_VALUE",
    6: "OBJECT_ID",
    7: "OBJECT_DESCRIPTOR",
    8: "EXTERNAL",
    9: "REAL",
    10: "ENUMERATED",
    11: "EMBEDDED_PDV",
    12: "UTF8STRING",
    13: "RELATIVE_OID",
    16: "SEQUENCE_10",
    19: "PRINTABLE_STRING",
    22: "IA5STRING",
    48: "SEQUENCE_30",
    49: "SET",
  });

  function Asn1Der(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Asn1Der.prototype._read = function() {
    this._debug.typeTag = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Asn1Der.TypeTag" };
    this.typeTag = this._io.readU1();
    this._debug.typeTag.end = this._io.pos;
    this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.len = new LenEncoded(this._io, this, this._root);
    this.len._read();
    this._debug.len.end = this._io.pos;
    this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
    switch (this.typeTag) {
    case Asn1Der.TypeTag.OBJECT_ID:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodyObjectId(_io__raw_body, this, this._root);
      this.body._read();
      break;
    case Asn1Der.TypeTag.PRINTABLE_STRING:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodyPrintableString(_io__raw_body, this, this._root);
      this.body._read();
      break;
    case Asn1Der.TypeTag.SEQUENCE_10:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodySequence(_io__raw_body, this, this._root);
      this.body._read();
      break;
    case Asn1Der.TypeTag.SEQUENCE_30:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodySequence(_io__raw_body, this, this._root);
      this.body._read();
      break;
    case Asn1Der.TypeTag.SET:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodySequence(_io__raw_body, this, this._root);
      this.body._read();
      break;
    case Asn1Der.TypeTag.UTF8STRING:
      this._raw_body = this._io.readBytes(this.len.result);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new BodyUtf8string(_io__raw_body, this, this._root);
      this.body._read();
      break;
    default:
      this.body = this._io.readBytes(this.len.result);
      break;
    }
    this._debug.body.end = this._io.pos;
  }

  /**
   * @see {@link https://learn.microsoft.com/en-us/windows/win32/seccertenroll/about-object-identifier|Source}
   */

  var BodyObjectId = Asn1Der.BodyObjectId = (function() {
    function BodyObjectId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BodyObjectId.prototype._read = function() {
      this._debug.firstAndSecond = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.firstAndSecond = this._io.readU1();
      this._debug.firstAndSecond.end = this._io.pos;
      this._debug.rest = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rest = this._io.readBytesFull();
      this._debug.rest.end = this._io.pos;
    }
    Object.defineProperty(BodyObjectId.prototype, 'first', {
      get: function() {
        if (this._m_first !== undefined)
          return this._m_first;
        this._debug._m_first = {  };
        this._m_first = Math.floor(this.firstAndSecond / 40);
        return this._m_first;
      }
    });
    Object.defineProperty(BodyObjectId.prototype, 'second', {
      get: function() {
        if (this._m_second !== undefined)
          return this._m_second;
        this._debug._m_second = {  };
        this._m_second = KaitaiStream.mod(this.firstAndSecond, 40);
        return this._m_second;
      }
    });

    return BodyObjectId;
  })();

  var BodyPrintableString = Asn1Der.BodyPrintableString = (function() {
    function BodyPrintableString(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BodyPrintableString.prototype._read = function() {
      this._debug.str = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.str = KaitaiStream.bytesToStr(this._io.readBytesFull(), "ASCII");
      this._debug.str.end = this._io.pos;
    }

    return BodyPrintableString;
  })();

  var BodySequence = Asn1Der.BodySequence = (function() {
    function BodySequence(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BodySequence.prototype._read = function() {
      this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.entries.arr = [];
      this.entries = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_entries = new Asn1Der(this._io, this, this._root);
        try {
          _t_entries._read();
        } finally {
          this.entries.push(_t_entries);
        }
        this._debug.entries.arr[this.entries.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.entries.end = this._io.pos;
    }

    return BodySequence;
  })();

  var BodyUtf8string = Asn1Der.BodyUtf8string = (function() {
    function BodyUtf8string(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BodyUtf8string.prototype._read = function() {
      this._debug.str = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.str = KaitaiStream.bytesToStr(this._io.readBytesFull(), "UTF-8");
      this._debug.str.end = this._io.pos;
    }

    return BodyUtf8string;
  })();

  var LenEncoded = Asn1Der.LenEncoded = (function() {
    function LenEncoded(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LenEncoded.prototype._read = function() {
      this._debug.b1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.b1 = this._io.readU1();
      this._debug.b1.end = this._io.pos;
      if (this.b1 == 130) {
        this._debug.int2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.int2 = this._io.readU2be();
        this._debug.int2.end = this._io.pos;
      }
      if (this.b1 == 129) {
        this._debug.int1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.int1 = this._io.readU1();
        this._debug.int1.end = this._io.pos;
      }
    }
    Object.defineProperty(LenEncoded.prototype, 'result', {
      get: function() {
        if (this._m_result !== undefined)
          return this._m_result;
        this._debug._m_result = {  };
        this._m_result = (this.b1 == 129 ? this.int1 : (this.b1 == 130 ? this.int2 : this.b1));
        return this._m_result;
      }
    });

    return LenEncoded;
  })();

  return Asn1Der;
})();
Asn1Der_.Asn1Der = Asn1Der;
});
