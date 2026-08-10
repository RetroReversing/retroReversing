// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Ilbm || (root.Ilbm = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Ilbm_, KaitaiStream) {
/**
 * ILBM (Interleaved Bitmap) is an IFF FORM type for 2D raster graphics
 * with an optional color map. It was defined by Electronic Arts in 1986
 * and became the standard on the Commodore Amiga (Deluxe Paint .LBM)
 * and in many PC games of the late 1980s and early 1990s.
 * 
 * A file begins with a FORM wrapper whose form type is ILBM or PBM,
 * followed by property chunks (BMHD, CMAP, ...) and a BODY chunk
 * containing interleaved bitplane data. BODY data may be uncompressed
 * or PackBits-compressed per scanline (compression type 1).
 * 
 * Reference: EA IFF 85 supplement for FORM ILBM (Electronic Arts, 1986).
 * @see {@link https://wiki.amigaos.net/wiki/ILBM_IFF_Interleaved_Bitmap|Source}
 * @see {@link https://en.wikipedia.org/wiki/ILBM|Source}
 */

var Ilbm = (function() {
  Ilbm.ChunkIds = Object.freeze({
    ANNO: 1095650895,
    AUTH: 1096111176,
    BMHD: 1112361028,
    BODY: 1112491097,
    CAMG: 1128353095,
    CCRT: 1128485460,
    CMAP: 1129136464,
    COPY: 1129271385,
    CRNG: 1129467463,
    DEST: 1145394004,
    DPI_: 1146112288,
    GRAB: 1196572994,
    NAME: 1312902469,
    SPRT: 1397772884,

    1095650895: "ANNO",
    1096111176: "AUTH",
    1112361028: "BMHD",
    1112491097: "BODY",
    1128353095: "CAMG",
    1128485460: "CCRT",
    1129136464: "CMAP",
    1129271385: "COPY",
    1129467463: "CRNG",
    1145394004: "DEST",
    1146112288: "DPI_",
    1196572994: "GRAB",
    1312902469: "NAME",
    1397772884: "SPRT",
  });

  Ilbm.CompressionType = Object.freeze({
    NONE: 0,
    BYTE_RUN1: 1,

    0: "NONE",
    1: "BYTE_RUN1",
  });

  Ilbm.MaskingType = Object.freeze({
    NONE: 0,
    HAS_MASK: 1,
    HAS_TRANSPARENT_COLOR: 2,
    LASSO: 3,

    0: "NONE",
    1: "HAS_MASK",
    2: "HAS_TRANSPARENT_COLOR",
    3: "LASSO",
  });

  function Ilbm(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Ilbm.prototype._read = function() {
    this._debug.form = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.form = new Form(this._io, this, this._root);
    this.form._read();
    this._debug.form.end = this._io.pos;
  }

  /**
   * @see ILBM IFF supplement section 2 (BMHD)
   */

  var BitmapHeader = Ilbm.BitmapHeader = (function() {
    function BitmapHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BitmapHeader.prototype._read = function() {
      this._debug.width = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.width = this._io.readU2be();
      this._debug.width.end = this._io.pos;
      this._debug.height = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.height = this._io.readU2be();
      this._debug.height.end = this._io.pos;
      this._debug.x = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.x = this._io.readS2be();
      this._debug.x.end = this._io.pos;
      this._debug.y = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.y = this._io.readS2be();
      this._debug.y.end = this._io.pos;
      this._debug.nPlanes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nPlanes = this._io.readU1();
      this._debug.nPlanes.end = this._io.pos;
      this._debug.masking = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Ilbm.MaskingType" };
      this.masking = this._io.readU1();
      this._debug.masking.end = this._io.pos;
      this._debug.compression = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Ilbm.CompressionType" };
      this.compression = this._io.readU1();
      this._debug.compression.end = this._io.pos;
      this._debug.pad1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pad1 = this._io.readU1();
      this._debug.pad1.end = this._io.pos;
      this._debug.transparentColor = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.transparentColor = this._io.readU2be();
      this._debug.transparentColor.end = this._io.pos;
      this._debug.xAspect = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.xAspect = this._io.readU1();
      this._debug.xAspect.end = this._io.pos;
      this._debug.yAspect = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.yAspect = this._io.readU1();
      this._debug.yAspect.end = this._io.pos;
      this._debug.pageWidth = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pageWidth = this._io.readU2be();
      this._debug.pageWidth.end = this._io.pos;
      this._debug.pageHeight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pageHeight = this._io.readU2be();
      this._debug.pageHeight.end = this._io.pos;
    }

    /**
     * Bytes per bitplane scanline (16-bit word aligned)
     */
    Object.defineProperty(BitmapHeader.prototype, 'rowBytes', {
      get: function() {
        if (this._m_rowBytes !== undefined)
          return this._m_rowBytes;
        this._debug._m_rowBytes = {  };
        this._m_rowBytes = (this.width + 15 >>> 4) << 1;
        return this._m_rowBytes;
      }
    });

    return BitmapHeader;
  })();

  var BodyData = Ilbm.BodyData = (function() {
    function BodyData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BodyData.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = this._io.readBytesFull();
      this._debug.data.end = this._io.pos;
    }

    /**
     * Raw interleaved bitplane data (may be PackBits compressed per row)
     */

    return BodyData;
  })();

  var CamgMode = Ilbm.CamgMode = (function() {
    function CamgMode(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CamgMode.prototype._read = function() {
      this._debug.viewportModes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.viewportModes = this._io.readU4be();
      this._debug.viewportModes.end = this._io.pos;
    }
    Object.defineProperty(CamgMode.prototype, 'ehb', {
      get: function() {
        if (this._m_ehb !== undefined)
          return this._m_ehb;
        this._debug._m_ehb = {  };
        this._m_ehb = (this.viewportModes & 128) != 0;
        return this._m_ehb;
      }
    });
    Object.defineProperty(CamgMode.prototype, 'ham', {
      get: function() {
        if (this._m_ham !== undefined)
          return this._m_ham;
        this._debug._m_ham = {  };
        this._m_ham = (this.viewportModes & 2048) != 0;
        return this._m_ham;
      }
    });
    Object.defineProperty(CamgMode.prototype, 'hires', {
      get: function() {
        if (this._m_hires !== undefined)
          return this._m_hires;
        this._debug._m_hires = {  };
        this._m_hires = (this.viewportModes & 32768) != 0;
        return this._m_hires;
      }
    });
    Object.defineProperty(CamgMode.prototype, 'lace', {
      get: function() {
        if (this._m_lace !== undefined)
          return this._m_lace;
        this._debug._m_lace = {  };
        this._m_lace = (this.viewportModes & 4) != 0;
        return this._m_lace;
      }
    });

    return CamgMode;
  })();

  var ColorMap = Ilbm.ColorMap = (function() {
    function ColorMap(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ColorMap.prototype._read = function() {
      this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.entries.arr = [];
      this.entries = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_entries = new ColorRegister(this._io, this, this._root);
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

    return ColorMap;
  })();

  var ColorRange = Ilbm.ColorRange = (function() {
    function ColorRange(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ColorRange.prototype._read = function() {
      this._debug.pad = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pad = this._io.readU2be();
      this._debug.pad.end = this._io.pos;
      this._debug.rate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rate = this._io.readU2be();
      this._debug.rate.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU2be();
      this._debug.flags.end = this._io.pos;
      this._debug.lower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lower = this._io.readU1();
      this._debug.lower.end = this._io.pos;
      this._debug.upper = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.upper = this._io.readU1();
      this._debug.upper.end = this._io.pos;
    }

    return ColorRange;
  })();

  var ColorRegister = Ilbm.ColorRegister = (function() {
    function ColorRegister(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ColorRegister.prototype._read = function() {
      this._debug.red = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.red = this._io.readU1();
      this._debug.red.end = this._io.pos;
      this._debug.green = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.green = this._io.readU1();
      this._debug.green.end = this._io.pos;
      this._debug.blue = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.blue = this._io.readU1();
      this._debug.blue.end = this._io.pos;
    }

    return ColorRegister;
  })();

  var CycleInfo = Ilbm.CycleInfo = (function() {
    function CycleInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CycleInfo.prototype._read = function() {
      this._debug.direction = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.direction = this._io.readU2be();
      this._debug.direction.end = this._io.pos;
      this._debug.start = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.start = this._io.readU1();
      this._debug.start.end = this._io.pos;
      this._debug.end = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.end = this._io.readU1();
      this._debug.end.end = this._io.pos;
    }

    return CycleInfo;
  })();

  var DestMerge = Ilbm.DestMerge = (function() {
    function DestMerge(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DestMerge.prototype._read = function() {
      this._debug.destBit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.destBit = this._io.readU1();
      this._debug.destBit.end = this._io.pos;
      this._debug.op = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.op = this._io.readU1();
      this._debug.op.end = this._io.pos;
      this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved = this._io.readU1();
      this._debug.reserved.end = this._io.pos;
      this._debug.srcMask = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.srcMask = this._io.readU1();
      this._debug.srcMask.end = this._io.pos;
      this._debug.destMask = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.destMask = this._io.readU1();
      this._debug.destMask.end = this._io.pos;
    }

    return DestMerge;
  })();

  var DpiInfo = Ilbm.DpiInfo = (function() {
    function DpiInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DpiInfo.prototype._read = function() {
      this._debug.dpiX = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dpiX = this._io.readU2be();
      this._debug.dpiX.end = this._io.pos;
      this._debug.dpiY = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dpiY = this._io.readU2be();
      this._debug.dpiY.end = this._io.pos;
    }

    return DpiInfo;
  })();

  var Form = Ilbm.Form = (function() {
    function Form(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Form.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(4);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([70, 79, 82, 77])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([70, 79, 82, 77]), this.magic, this._io, "/types/form/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4be();
      this._debug.len.end = this._io.pos;
      this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_body = this._io.readBytes(this.len);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new FormBody(_io__raw_body, this, this._root);
      this.body._read();
      this._debug.body.end = this._io.pos;
    }

    return Form;
  })();

  var FormBody = Ilbm.FormBody = (function() {
    function FormBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FormBody.prototype._read = function() {
      this._debug.formType = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.formType = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
      this._debug.formType.end = this._io.pos;
      this._debug.chunks = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.chunks.arr = [];
      this.chunks = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.chunks.arr[this.chunks.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_chunks = new IlbmChunk(this._io, this, this._root);
        try {
          _t_chunks._read();
        } finally {
          this.chunks.push(_t_chunks);
        }
        this._debug.chunks.arr[this.chunks.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.chunks.end = this._io.pos;
    }

    return FormBody;
  })();

  var IlbmChunk = Ilbm.IlbmChunk = (function() {
    function IlbmChunk(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    IlbmChunk.prototype._read = function() {
      this._debug.id = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Ilbm.ChunkIds" };
      this.id = this._io.readU4be();
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

    var BodySlot = IlbmChunk.BodySlot = (function() {
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
    Object.defineProperty(IlbmChunk.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var io = this.bodySlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_body = { start: io.pos, ioOffset: io.byteOffset };
        switch (this.id) {
        case Ilbm.ChunkIds.ANNO:
          this._m_body = new TextData(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.AUTH:
          this._m_body = new TextData(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.BMHD:
          this._m_body = new BitmapHeader(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.BODY:
          this._m_body = new BodyData(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.CAMG:
          this._m_body = new CamgMode(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.CCRT:
          this._m_body = new CycleInfo(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.CMAP:
          this._m_body = new ColorMap(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.COPY:
          this._m_body = new TextData(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.CRNG:
          this._m_body = new ColorRange(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.DEST:
          this._m_body = new DestMerge(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.DPI_:
          this._m_body = new DpiInfo(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.GRAB:
          this._m_body = new Point2d(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.NAME:
          this._m_body = new TextData(io, this, this._root);
          this._m_body._read();
          break;
        case Ilbm.ChunkIds.SPRT:
          this._m_body = new SpritePrecedence(io, this, this._root);
          this._m_body._read();
          break;
        default:
          this._m_body = new RawData(io, this, this._root);
          this._m_body._read();
          break;
        }
        this._debug._m_body.end = io.pos;
        io.seek(_pos);
        return this._m_body;
      }
    });

    return IlbmChunk;
  })();

  var Point2d = Ilbm.Point2d = (function() {
    function Point2d(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Point2d.prototype._read = function() {
      this._debug.x = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.x = this._io.readS2be();
      this._debug.x.end = this._io.pos;
      this._debug.y = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.y = this._io.readS2be();
      this._debug.y.end = this._io.pos;
    }

    return Point2d;
  })();

  var RawData = Ilbm.RawData = (function() {
    function RawData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    RawData.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = this._io.readBytesFull();
      this._debug.data.end = this._io.pos;
    }

    return RawData;
  })();

  var SpritePrecedence = Ilbm.SpritePrecedence = (function() {
    function SpritePrecedence(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SpritePrecedence.prototype._read = function() {
      this._debug.precedence = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.precedence = this._io.readU4be();
      this._debug.precedence.end = this._io.pos;
    }

    return SpritePrecedence;
  })();

  var TextData = Ilbm.TextData = (function() {
    function TextData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TextData.prototype._read = function() {
      this._debug.text = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.text = KaitaiStream.bytesToStr(this._io.readBytesFull(), "ASCII");
      this._debug.text.end = this._io.pos;
    }

    return TextData;
  })();

  return Ilbm;
})();
Ilbm_.Ilbm = Ilbm;
});
