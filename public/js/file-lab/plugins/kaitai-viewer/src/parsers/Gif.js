// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Gif || (root.Gif = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Gif_, KaitaiStream) {
/**
 * GIF (Graphics Interchange Format) is an image file format, developed
 * in 1987. It became popular in 1990s as one of the main image formats
 * used in World Wide Web.
 * 
 * GIF format allows encoding of palette-based images up to 256 colors
 * (each of the colors can be chosen from a 24-bit RGB
 * colorspace). Image data stream uses LZW (Lempel-Ziv-Welch) lossless
 * compression.
 * 
 * Over the years, several version of the format were published and
 * several extensions to it were made, namely, a popular Netscape
 * extension that allows to store several images in one file, switching
 * between them, which produces crude form of animation.
 * 
 * Structurally, format consists of several mandatory headers and then
 * a stream of blocks follows. Blocks can carry additional
 * metainformation or image data.
 */

var Gif = (function() {
  Gif.BlockType = Object.freeze({
    EXTENSION: 33,
    LOCAL_IMAGE_DESCRIPTOR: 44,
    END_OF_FILE: 59,

    33: "EXTENSION",
    44: "LOCAL_IMAGE_DESCRIPTOR",
    59: "END_OF_FILE",
  });

  Gif.ExtensionLabel = Object.freeze({
    GRAPHIC_CONTROL: 249,
    COMMENT: 254,
    APPLICATION: 255,

    249: "GRAPHIC_CONTROL",
    254: "COMMENT",
    255: "APPLICATION",
  });

  function Gif(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Gif.prototype._read = function() {
    this._debug.hdr = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.hdr = new Header(this._io, this, this._root);
    this.hdr._read();
    this._debug.hdr.end = this._io.pos;
    this._debug.logicalScreenDescriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.logicalScreenDescriptor = new LogicalScreenDescriptorStruct(this._io, this, this._root);
    this.logicalScreenDescriptor._read();
    this._debug.logicalScreenDescriptor.end = this._io.pos;
    if (this.logicalScreenDescriptor.hasColorTable) {
      this._debug.globalColorTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_globalColorTable = this._io.readBytes(this.logicalScreenDescriptor.colorTableSize * 3);
      var _io__raw_globalColorTable = new KaitaiStream(this._raw_globalColorTable);
      this.globalColorTable = new ColorTable(_io__raw_globalColorTable, this, this._root);
      this.globalColorTable._read();
      this._debug.globalColorTable.end = this._io.pos;
    }
    this._debug.blocks = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.blocks.arr = [];
    this.blocks = [];
    var i = 0;
    do {
      this._debug.blocks.arr[this.blocks.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_blocks = new Block(this._io, this, this._root);
      try {
        _t_blocks._read();
      } finally {
        var _ = _t_blocks;
        this.blocks.push(_);
      }
      this._debug.blocks.arr[this.blocks.length - 1].end = this._io.pos;
      i++;
    } while (!( ((this._io.isEof()) || (_.blockType == Gif.BlockType.END_OF_FILE)) ));
    this._debug.blocks.end = this._io.pos;
  }

  var ApplicationId = Gif.ApplicationId = (function() {
    function ApplicationId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ApplicationId.prototype._read = function() {
      this._debug.lenBytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenBytes = this._io.readU1();
      this._debug.lenBytes.end = this._io.pos;
      if (!(this.lenBytes == 11)) {
        var _err = new KaitaiStream.ValidationNotEqualError(11, this.lenBytes, this._io, "/types/application_id/seq/0");
        this._debug.lenBytes.validationError = _err;
        throw _err;
      }
      this._debug.applicationIdentifier = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.applicationIdentifier = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
      this._debug.applicationIdentifier.end = this._io.pos;
      this._debug.applicationAuthCode = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.applicationAuthCode = this._io.readBytes(3);
      this._debug.applicationAuthCode.end = this._io.pos;
    }

    return ApplicationId;
  })();

  var Block = Gif.Block = (function() {
    function Block(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Block.prototype._read = function() {
      this._debug.blockType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Gif.BlockType" };
      this.blockType = this._io.readU1();
      this._debug.blockType.end = this._io.pos;
      this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.blockType) {
      case Gif.BlockType.EXTENSION:
        this.body = new Extension(this._io, this, this._root);
        this.body._read();
        break;
      case Gif.BlockType.LOCAL_IMAGE_DESCRIPTOR:
        this.body = new LocalImageDescriptor(this._io, this, this._root);
        this.body._read();
        break;
      }
      this._debug.body.end = this._io.pos;
    }

    return Block;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 19}
   */

  var ColorTable = Gif.ColorTable = (function() {
    function ColorTable(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ColorTable.prototype._read = function() {
      this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.entries.arr = [];
      this.entries = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_entries = new ColorTableEntry(this._io, this, this._root);
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

    return ColorTable;
  })();

  var ColorTableEntry = Gif.ColorTableEntry = (function() {
    function ColorTableEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ColorTableEntry.prototype._read = function() {
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

    return ColorTableEntry;
  })();

  var ExtApplication = Gif.ExtApplication = (function() {
    function ExtApplication(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ExtApplication.prototype._read = function() {
      this._debug.applicationId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.applicationId = new ApplicationId(this._io, this, this._root);
      this.applicationId._read();
      this._debug.applicationId.end = this._io.pos;
      this._debug.subblocks = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.subblocks.arr = [];
      this.subblocks = [];
      var i = 0;
      do {
        this._debug.subblocks.arr[this.subblocks.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_subblocks = new Subblock(this._io, this, this._root);
        try {
          _t_subblocks._read();
        } finally {
          var _ = _t_subblocks;
          this.subblocks.push(_);
        }
        this._debug.subblocks.arr[this.subblocks.length - 1].end = this._io.pos;
        i++;
      } while (!(_.lenBytes == 0));
      this._debug.subblocks.end = this._io.pos;
    }

    return ExtApplication;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 23}
   */

  var ExtGraphicControl = Gif.ExtGraphicControl = (function() {
    function ExtGraphicControl(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ExtGraphicControl.prototype._read = function() {
      this._debug.blockSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.blockSize = this._io.readBytes(1);
      this._debug.blockSize.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.blockSize, new Uint8Array([4])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([4]), this.blockSize, this._io, "/types/ext_graphic_control/seq/0");
        this._debug.blockSize.validationError = _err;
        throw _err;
      }
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU1();
      this._debug.flags.end = this._io.pos;
      this._debug.delayTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delayTime = this._io.readU2le();
      this._debug.delayTime.end = this._io.pos;
      this._debug.transparentIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.transparentIdx = this._io.readU1();
      this._debug.transparentIdx.end = this._io.pos;
      this._debug.terminator = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.terminator = this._io.readBytes(1);
      this._debug.terminator.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.terminator, new Uint8Array([0])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([0]), this.terminator, this._io, "/types/ext_graphic_control/seq/4");
        this._debug.terminator.validationError = _err;
        throw _err;
      }
    }
    Object.defineProperty(ExtGraphicControl.prototype, 'transparentColorFlag', {
      get: function() {
        if (this._m_transparentColorFlag !== undefined)
          return this._m_transparentColorFlag;
        this._debug._m_transparentColorFlag = {  };
        this._m_transparentColorFlag = (this.flags & 1) != 0;
        return this._m_transparentColorFlag;
      }
    });
    Object.defineProperty(ExtGraphicControl.prototype, 'userInputFlag', {
      get: function() {
        if (this._m_userInputFlag !== undefined)
          return this._m_userInputFlag;
        this._debug._m_userInputFlag = {  };
        this._m_userInputFlag = (this.flags & 2) != 0;
        return this._m_userInputFlag;
      }
    });

    return ExtGraphicControl;
  })();

  var Extension = Gif.Extension = (function() {
    function Extension(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Extension.prototype._read = function() {
      this._debug.label = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Gif.ExtensionLabel" };
      this.label = this._io.readU1();
      this._debug.label.end = this._io.pos;
      this._debug.body = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.label) {
      case Gif.ExtensionLabel.APPLICATION:
        this.body = new ExtApplication(this._io, this, this._root);
        this.body._read();
        break;
      case Gif.ExtensionLabel.COMMENT:
        this.body = new Subblocks(this._io, this, this._root);
        this.body._read();
        break;
      case Gif.ExtensionLabel.GRAPHIC_CONTROL:
        this.body = new ExtGraphicControl(this._io, this, this._root);
        this.body._read();
        break;
      default:
        this.body = new Subblocks(this._io, this, this._root);
        this.body._read();
        break;
      }
      this._debug.body.end = this._io.pos;
    }

    return Extension;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 17}
   */

  var Header = Gif.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Header.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(3);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([71, 73, 70])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([71, 73, 70]), this.magic, this._io, "/types/header/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.version = KaitaiStream.bytesToStr(this._io.readBytes(3), "ASCII");
      this._debug.version.end = this._io.pos;
    }

    return Header;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 22}
   */

  var ImageData = Gif.ImageData = (function() {
    function ImageData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ImageData.prototype._read = function() {
      this._debug.lzwMinCodeSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lzwMinCodeSize = this._io.readU1();
      this._debug.lzwMinCodeSize.end = this._io.pos;
      this._debug.subblocks = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.subblocks = new Subblocks(this._io, this, this._root);
      this.subblocks._read();
      this._debug.subblocks.end = this._io.pos;
    }

    return ImageData;
  })();

  var LocalImageDescriptor = Gif.LocalImageDescriptor = (function() {
    function LocalImageDescriptor(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LocalImageDescriptor.prototype._read = function() {
      this._debug.left = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.left = this._io.readU2le();
      this._debug.left.end = this._io.pos;
      this._debug.top = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.top = this._io.readU2le();
      this._debug.top.end = this._io.pos;
      this._debug.width = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.width = this._io.readU2le();
      this._debug.width.end = this._io.pos;
      this._debug.height = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.height = this._io.readU2le();
      this._debug.height.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU1();
      this._debug.flags.end = this._io.pos;
      if (this.hasColorTable) {
        this._debug.localColorTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._raw_localColorTable = this._io.readBytes(this.colorTableSize * 3);
        var _io__raw_localColorTable = new KaitaiStream(this._raw_localColorTable);
        this.localColorTable = new ColorTable(_io__raw_localColorTable, this, this._root);
        this.localColorTable._read();
        this._debug.localColorTable.end = this._io.pos;
      }
      this._debug.imageData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.imageData = new ImageData(this._io, this, this._root);
      this.imageData._read();
      this._debug.imageData.end = this._io.pos;
    }
    Object.defineProperty(LocalImageDescriptor.prototype, 'colorTableSize', {
      get: function() {
        if (this._m_colorTableSize !== undefined)
          return this._m_colorTableSize;
        this._debug._m_colorTableSize = {  };
        this._m_colorTableSize = 2 << (this.flags & 7);
        return this._m_colorTableSize;
      }
    });
    Object.defineProperty(LocalImageDescriptor.prototype, 'hasColorTable', {
      get: function() {
        if (this._m_hasColorTable !== undefined)
          return this._m_hasColorTable;
        this._debug._m_hasColorTable = {  };
        this._m_hasColorTable = (this.flags & 128) != 0;
        return this._m_hasColorTable;
      }
    });
    Object.defineProperty(LocalImageDescriptor.prototype, 'hasInterlace', {
      get: function() {
        if (this._m_hasInterlace !== undefined)
          return this._m_hasInterlace;
        this._debug._m_hasInterlace = {  };
        this._m_hasInterlace = (this.flags & 64) != 0;
        return this._m_hasInterlace;
      }
    });
    Object.defineProperty(LocalImageDescriptor.prototype, 'hasSortedColorTable', {
      get: function() {
        if (this._m_hasSortedColorTable !== undefined)
          return this._m_hasSortedColorTable;
        this._debug._m_hasSortedColorTable = {  };
        this._m_hasSortedColorTable = (this.flags & 32) != 0;
        return this._m_hasSortedColorTable;
      }
    });

    return LocalImageDescriptor;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 18}
   */

  var LogicalScreenDescriptorStruct = Gif.LogicalScreenDescriptorStruct = (function() {
    function LogicalScreenDescriptorStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LogicalScreenDescriptorStruct.prototype._read = function() {
      this._debug.screenWidth = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.screenWidth = this._io.readU2le();
      this._debug.screenWidth.end = this._io.pos;
      this._debug.screenHeight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.screenHeight = this._io.readU2le();
      this._debug.screenHeight.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readU1();
      this._debug.flags.end = this._io.pos;
      this._debug.bgColorIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bgColorIndex = this._io.readU1();
      this._debug.bgColorIndex.end = this._io.pos;
      this._debug.pixelAspectRatio = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pixelAspectRatio = this._io.readU1();
      this._debug.pixelAspectRatio.end = this._io.pos;
    }
    Object.defineProperty(LogicalScreenDescriptorStruct.prototype, 'colorTableSize', {
      get: function() {
        if (this._m_colorTableSize !== undefined)
          return this._m_colorTableSize;
        this._debug._m_colorTableSize = {  };
        this._m_colorTableSize = 2 << (this.flags & 7);
        return this._m_colorTableSize;
      }
    });
    Object.defineProperty(LogicalScreenDescriptorStruct.prototype, 'hasColorTable', {
      get: function() {
        if (this._m_hasColorTable !== undefined)
          return this._m_hasColorTable;
        this._debug._m_hasColorTable = {  };
        this._m_hasColorTable = (this.flags & 128) != 0;
        return this._m_hasColorTable;
      }
    });

    return LogicalScreenDescriptorStruct;
  })();

  var Subblock = Gif.Subblock = (function() {
    function Subblock(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Subblock.prototype._read = function() {
      this._debug.lenBytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lenBytes = this._io.readU1();
      this._debug.lenBytes.end = this._io.pos;
      this._debug.bytes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bytes = this._io.readBytes(this.lenBytes);
      this._debug.bytes.end = this._io.pos;
    }

    return Subblock;
  })();

  var Subblocks = Gif.Subblocks = (function() {
    function Subblocks(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Subblocks.prototype._read = function() {
      this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.entries.arr = [];
      this.entries = [];
      var i = 0;
      do {
        this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_entries = new Subblock(this._io, this, this._root);
        try {
          _t_entries._read();
        } finally {
          var _ = _t_entries;
          this.entries.push(_);
        }
        this._debug.entries.arr[this.entries.length - 1].end = this._io.pos;
        i++;
      } while (!(_.lenBytes == 0));
      this._debug.entries.end = this._io.pos;
    }

    return Subblocks;
  })();

  /**
   * @see {@link https://www.w3.org/Graphics/GIF/spec-gif89a.txt|- section 18}
   */

  return Gif;
})();
Gif_.Gif = Gif;
});
