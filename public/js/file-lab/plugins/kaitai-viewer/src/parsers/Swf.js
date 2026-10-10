// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Swf || (root.Swf = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Swf_, KaitaiStream) {
/**
 * SWF files are used by Adobe Flash (AKA Shockwave Flash, Macromedia
 * Flash) to encode rich interactive multimedia content and are,
 * essentially, a container for special bytecode instructions to play
 * back that content. In early 2000s, it was dominant rich multimedia
 * web format (.swf files were integrated into web pages and played
 * back with a browser plugin), but its usage largely declined in
 * 2010s, as HTML5 and performant browser-native solutions
 * (i.e. JavaScript engines and graphical approaches, such as WebGL)
 * emerged.
 * 
 * There are a lot of versions of SWF (~36), format is somewhat
 * documented by Adobe.
 * @see {@link https://open-flash.github.io/mirrors/swf-spec-19.pdf|Source}
 */

var Swf = (function() {
  Swf.Compressions = Object.freeze({
    ZLIB: 67,
    NONE: 70,
    LZMA: 90,

    67: "ZLIB",
    70: "NONE",
    90: "LZMA",
  });

  Swf.TagType = Object.freeze({
    END_OF_FILE: 0,
    PLACE_OBJECT: 4,
    REMOVE_OBJECT: 5,
    SET_BACKGROUND_COLOR: 9,
    DEFINE_SOUND: 14,
    PLACE_OBJECT2: 26,
    REMOVE_OBJECT2: 28,
    FRAME_LABEL: 43,
    EXPORT_ASSETS: 56,
    SCRIPT_LIMITS: 65,
    FILE_ATTRIBUTES: 69,
    PLACE_OBJECT3: 70,
    SYMBOL_CLASS: 76,
    METADATA: 77,
    DEFINE_SCALING_GRID: 78,
    DO_ABC: 82,
    DEFINE_SCENE_AND_FRAME_LABEL_DATA: 86,

    0: "END_OF_FILE",
    4: "PLACE_OBJECT",
    5: "REMOVE_OBJECT",
    9: "SET_BACKGROUND_COLOR",
    14: "DEFINE_SOUND",
    26: "PLACE_OBJECT2",
    28: "REMOVE_OBJECT2",
    43: "FRAME_LABEL",
    56: "EXPORT_ASSETS",
    65: "SCRIPT_LIMITS",
    69: "FILE_ATTRIBUTES",
    70: "PLACE_OBJECT3",
    76: "SYMBOL_CLASS",
    77: "METADATA",
    78: "DEFINE_SCALING_GRID",
    82: "DO_ABC",
    86: "DEFINE_SCENE_AND_FRAME_LABEL_DATA",
  });

  function Swf(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Swf.prototype._read = function() {
    this._debug.compression = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Swf.Compressions" };
    this.compression = this._io.readU1();
    this._debug.compression.end = this._io.pos;
    this._debug.signature = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.signature = this._io.readBytes(2);
    this._debug.signature.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.signature, new Uint8Array([87, 83])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([87, 83]), this.signature, this._io, "/seq/1");
      this._debug.signature.validationError = _err;
      throw _err;
    }
    this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.version = this._io.readU1();
    this._debug.version.end = this._io.pos;
    this._debug.lenFile = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.lenFile = this._io.readU4le();
    this._debug.lenFile.end = this._io.pos;
    if (this.compression == Swf.Compressions.NONE) {
      this._debug.plainBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_plainBody = this._io.readBytesFull();
      var _io__raw_plainBody = new KaitaiStream(this._raw_plainBody);
      this.plainBody = new SwfBody(_io__raw_plainBody, this, this._root);
      this.plainBody._read();
      this._debug.plainBody.end = this._io.pos;
    }
    if (this.compression == Swf.Compressions.ZLIB) {
      this._debug.zlibBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw__raw_zlibBody = this._io.readBytesFull();
      this._raw_zlibBody = KaitaiStream.processZlib(this._raw__raw_zlibBody);
      var _io__raw_zlibBody = new KaitaiStream(this._raw_zlibBody);
      this.zlibBody = new SwfBody(_io__raw_zlibBody, this, this._root);
      this.zlibBody._read();
      this._debug.zlibBody.end = this._io.pos;
    }
  }

  var DefineSoundBody = Swf.DefineSoundBody = (function() {
    DefineSoundBody.Bps = Object.freeze({
      SOUND_8_BIT: 0,
      SOUND_16_BIT: 1,

      0: "SOUND_8_BIT",
      1: "SOUND_16_BIT",
    });

    DefineSoundBody.Channels = Object.freeze({
      MONO: 0,
      STEREO: 1,

      0: "MONO",
      1: "STEREO",
    });

    DefineSoundBody.SamplingRates = Object.freeze({
      RATE_5_5_KHZ: 0,
      RATE_11_KHZ: 1,
      RATE_22_KHZ: 2,
      RATE_44_KHZ: 3,

      0: "RATE_5_5_KHZ",
      1: "RATE_11_KHZ",
      2: "RATE_22_KHZ",
      3: "RATE_44_KHZ",
    });

    function DefineSoundBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DefineSoundBody.prototype._read = function() {
      this._debug.id = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.id = this._io.readU2le();
      this._debug.id.end = this._io.pos;
      this._debug.format = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.format = this._io.readBitsIntBe(4);
      this._debug.format.end = this._io.pos;
      this._debug.samplingRate = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Swf.DefineSoundBody.SamplingRates" };
      this.samplingRate = this._io.readBitsIntBe(2);
      this._debug.samplingRate.end = this._io.pos;
      this._debug.bitsPerSample = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Swf.DefineSoundBody.Bps" };
      this.bitsPerSample = this._io.readBitsIntBe(1);
      this._debug.bitsPerSample.end = this._io.pos;
      this._debug.numChannels = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Swf.DefineSoundBody.Channels" };
      this.numChannels = this._io.readBitsIntBe(1);
      this._debug.numChannels.end = this._io.pos;
      this._io.alignToByte();
      this._debug.numSamples = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSamples = this._io.readU4le();
      this._debug.numSamples.end = this._io.pos;
    }

    /**
     * Sound sampling rate, as per enum. Ignored for Nellymoser and Speex codecs.
     */

    return DefineSoundBody;
  })();

  var DoAbcBody = Swf.DoAbcBody = (function() {
    function DoAbcBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DoAbcBody.prototype._read = function() {
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU4le();
      this._debug.flags.end = this._io.pos;
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
      this._debug.name.end = this._io.pos;
      this._debug.abcdata = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.abcdata = this._io.readBytesFull();
      this._debug.abcdata.end = this._io.pos;
    }

    return DoAbcBody;
  })();

  var RecordHeader = Swf.RecordHeader = (function() {
    function RecordHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    RecordHeader.prototype._read = function() {
      this._debug.tagCodeAndLength = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tagCodeAndLength = this._io.readU2le();
      this._debug.tagCodeAndLength.end = this._io.pos;
      if (this.smallLen == 63) {
        this._debug.bigLen = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.bigLen = this._io.readS4le();
        this._debug.bigLen.end = this._io.pos;
      }
    }
    Object.defineProperty(RecordHeader.prototype, 'len', {
      get: function() {
        if (this._m_len !== undefined)
          return this._m_len;
        this._debug._m_len = {  };
        this._m_len = (this.smallLen == 63 ? this.bigLen : this.smallLen);
        return this._m_len;
      }
    });
    Object.defineProperty(RecordHeader.prototype, 'smallLen', {
      get: function() {
        if (this._m_smallLen !== undefined)
          return this._m_smallLen;
        this._debug._m_smallLen = {  };
        this._m_smallLen = this.tagCodeAndLength & 63;
        return this._m_smallLen;
      }
    });
    Object.defineProperty(RecordHeader.prototype, 'tagType', {
      get: function() {
        if (this._m_tagType !== undefined)
          return this._m_tagType;
        this._debug._m_tagType = { enumName: "Swf.TagType" };
        this._m_tagType = this.tagCodeAndLength >>> 6;
        return this._m_tagType;
      }
    });

    return RecordHeader;
  })();

  var Rect = Swf.Rect = (function() {
    function Rect(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Rect.prototype._read = function() {
      this._debug.b1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.b1 = this._io.readU1();
      this._debug.b1.end = this._io.pos;
      this._debug.skip = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.skip = this._io.readBytes(this.numBytes);
      this._debug.skip.end = this._io.pos;
    }
    Object.defineProperty(Rect.prototype, 'numBits', {
      get: function() {
        if (this._m_numBits !== undefined)
          return this._m_numBits;
        this._debug._m_numBits = {  };
        this._m_numBits = this.b1 >>> 3;
        return this._m_numBits;
      }
    });
    Object.defineProperty(Rect.prototype, 'numBytes', {
      get: function() {
        if (this._m_numBytes !== undefined)
          return this._m_numBytes;
        this._debug._m_numBytes = {  };
        this._m_numBytes = Math.floor(((this.numBits * 4 - 3) + 7) / 8);
        return this._m_numBytes;
      }
    });

    return Rect;
  })();

  var Rgb = Swf.Rgb = (function() {
    function Rgb(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Rgb.prototype._read = function() {
      this._debug.r = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.r = this._io.readU1();
      this._debug.r.end = this._io.pos;
      this._debug.g = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.g = this._io.readU1();
      this._debug.g.end = this._io.pos;
      this._debug.b = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.b = this._io.readU1();
      this._debug.b.end = this._io.pos;
    }

    return Rgb;
  })();

  var ScriptLimitsBody = Swf.ScriptLimitsBody = (function() {
    function ScriptLimitsBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ScriptLimitsBody.prototype._read = function() {
      this._debug.maxRecursionDepth = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxRecursionDepth = this._io.readU2le();
      this._debug.maxRecursionDepth.end = this._io.pos;
      this._debug.scriptTimeoutSeconds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.scriptTimeoutSeconds = this._io.readU2le();
      this._debug.scriptTimeoutSeconds.end = this._io.pos;
    }

    return ScriptLimitsBody;
  })();

  var SwfBody = Swf.SwfBody = (function() {
    function SwfBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SwfBody.prototype._read = function() {
      this._debug.rect = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rect = new Rect(this._io, this, this._root);
      this.rect._read();
      this._debug.rect.end = this._io.pos;
      this._debug.frameRate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frameRate = this._io.readU2le();
      this._debug.frameRate.end = this._io.pos;
      this._debug.frameCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frameCount = this._io.readU2le();
      this._debug.frameCount.end = this._io.pos;
      if (this._root.version >= 8) {
        this._debug.fileAttributesTag = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.fileAttributesTag = new Tag(this._io, this, this._root);
        this.fileAttributesTag._read();
        this._debug.fileAttributesTag.end = this._io.pos;
      }
      this._debug.tags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.tags.arr = [];
      this.tags = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.tags.arr[this.tags.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_tags = new Tag(this._io, this, this._root);
        try {
          _t_tags._read();
        } finally {
          this.tags.push(_t_tags);
        }
        this._debug.tags.arr[this.tags.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.tags.end = this._io.pos;
    }

    return SwfBody;
  })();

  var SymbolClassBody = Swf.SymbolClassBody = (function() {
    function SymbolClassBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SymbolClassBody.prototype._read = function() {
      this._debug.numSymbols = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSymbols = this._io.readU2le();
      this._debug.numSymbols.end = this._io.pos;
      this._debug.symbols = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.symbols.arr = [];
      this.symbols = [];
      for (var i = 0; i < this.numSymbols; i++) {
        this._debug.symbols.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_symbols = new Symbol(this._io, this, this._root);
        try {
          _t_symbols._read();
        } finally {
          this.symbols.push(_t_symbols);
        }
        this._debug.symbols.arr[i].end = this._io.pos;
      }
      this._debug.symbols.end = this._io.pos;
    }

    var Symbol = SymbolClassBody.Symbol = (function() {
      function Symbol(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Symbol.prototype._read = function() {
        this._debug.tag = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.tag = this._io.readU2le();
        this._debug.tag.end = this._io.pos;
        this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.name = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
        this._debug.name.end = this._io.pos;
      }

      return Symbol;
    })();

    return SymbolClassBody;
  })();

  var Tag = Swf.Tag = (function() {
    function Tag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Tag.prototype._read = function() {
      this._debug.recordHeader = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.recordHeader = new RecordHeader(this._io, this, this._root);
      this.recordHeader._read();
      this._debug.recordHeader.end = this._io.pos;
      this._debug.tagBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.recordHeader.tagType) {
      case Swf.TagType.DEFINE_SOUND:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new DefineSoundBody(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      case Swf.TagType.DO_ABC:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new DoAbcBody(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      case Swf.TagType.EXPORT_ASSETS:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new SymbolClassBody(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      case Swf.TagType.SCRIPT_LIMITS:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new ScriptLimitsBody(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      case Swf.TagType.SET_BACKGROUND_COLOR:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new Rgb(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      case Swf.TagType.SYMBOL_CLASS:
        this._raw_tagBody = this._io.readBytes(this.recordHeader.len);
        var _io__raw_tagBody = new KaitaiStream(this._raw_tagBody);
        this.tagBody = new SymbolClassBody(_io__raw_tagBody, this, this._root);
        this.tagBody._read();
        break;
      default:
        this.tagBody = this._io.readBytes(this.recordHeader.len);
        break;
      }
      this._debug.tagBody.end = this._io.pos;
    }

    return Tag;
  })();

  return Swf;
})();
Swf_.Swf = Swf;
});
