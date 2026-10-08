// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Riff || (root.Riff = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Riff_, KaitaiStream) {
/**
 * The Resource Interchange File Format (RIFF) is a generic file container format
 * for storing data in tagged chunks. It is primarily used to store multimedia
 * such as sound and video, though it may also be used to store any arbitrary data.
 * 
 * The Microsoft implementation is mostly known through container formats
 * like AVI, ANI and WAV, which use RIFF as their basis.
 * @see {@link https://www.johnloomis.org/cpe102/asgn/asgn1/riff.html|Source}
 */

var Riff = (function() {
  Riff.Fourcc = Object.freeze({
    RIFF: 1179011410,
    INFO: 1330007625,
    LIST: 1414744396,

    1179011410: "RIFF",
    1330007625: "INFO",
    1414744396: "LIST",
  });

  function Riff(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Riff.prototype._read = function() {
    this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.chunk = new Chunk(this._io, this, this._root);
    this.chunk._read();
    this._debug.chunk.end = this._io.pos;
  }

  var Chunk = Riff.Chunk = (function() {
    function Chunk(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Chunk.prototype._read = function() {
      this._debug.id = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.id = this._io.readU4le();
      this._debug.id.end = this._io.pos;
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.dataSlot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_dataSlot = this._io.readBytes(this.len);
      var _io__raw_dataSlot = new KaitaiStream(this._raw_dataSlot);
      this.dataSlot = new Slot(_io__raw_dataSlot, this, this._root);
      this.dataSlot._read();
      this._debug.dataSlot.end = this._io.pos;
      this._debug.padByte = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.padByte = this._io.readBytes(KaitaiStream.mod(this.len, 2));
      this._debug.padByte.end = this._io.pos;
    }

    var Slot = Chunk.Slot = (function() {
      function Slot(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Slot.prototype._read = function() {
      }

      return Slot;
    })();

    return Chunk;
  })();

  var ChunkType = Riff.ChunkType = (function() {
    function ChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ChunkType.prototype._read = function() {
      if (this.chunkOfs < 0) {
        this._debug.saveChunkOfs = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.saveChunkOfs = this._io.readBytes(0);
        this._debug.saveChunkOfs.end = this._io.pos;
      }
      this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chunk = new Chunk(this._io, this, this._root);
      this.chunk._read();
      this._debug.chunk.end = this._io.pos;
    }
    Object.defineProperty(ChunkType.prototype, 'chunkData', {
      get: function() {
        if (this._m_chunkData !== undefined)
          return this._m_chunkData;
        var io = this.chunk.dataSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_chunkData = { start: io.pos, ioOffset: io.byteOffset };
        switch (this.chunkId) {
        case Riff.Fourcc.LIST:
          this._m_chunkData = new ListChunkData(io, this, this._root);
          this._m_chunkData._read();
          break;
        }
        this._debug._m_chunkData.end = io.pos;
        io.seek(_pos);
        return this._m_chunkData;
      }
    });
    Object.defineProperty(ChunkType.prototype, 'chunkId', {
      get: function() {
        if (this._m_chunkId !== undefined)
          return this._m_chunkId;
        this._debug._m_chunkId = { enumName: "Riff.Fourcc" };
        this._m_chunkId = this.chunk.id;
        return this._m_chunkId;
      }
    });
    Object.defineProperty(ChunkType.prototype, 'chunkIdReadable', {
      get: function() {
        if (this._m_chunkIdReadable !== undefined)
          return this._m_chunkIdReadable;
        var _pos = this._io.pos;
        this._io.seek(this.chunkOfs);
        this._debug._m_chunkIdReadable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_chunkIdReadable = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
        this._debug._m_chunkIdReadable.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_chunkIdReadable;
      }
    });
    Object.defineProperty(ChunkType.prototype, 'chunkOfs', {
      get: function() {
        if (this._m_chunkOfs !== undefined)
          return this._m_chunkOfs;
        this._debug._m_chunkOfs = {  };
        this._m_chunkOfs = this._io.pos;
        return this._m_chunkOfs;
      }
    });

    return ChunkType;
  })();

  /**
   * All registered subchunks in the INFO chunk are NULL-terminated strings,
   * but the unregistered might not be. By convention, the registered
   * chunk IDs are in uppercase and the unregistered IDs are in lowercase.
   * 
   * If the chunk ID of an INFO subchunk contains a lowercase
   * letter, this chunk is considered as unregistered and thus we can make
   * no assumptions about the type of data.
   */

  var InfoSubchunk = Riff.InfoSubchunk = (function() {
    function InfoSubchunk(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    InfoSubchunk.prototype._read = function() {
      if (this.chunkOfs < 0) {
        this._debug.saveChunkOfs = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.saveChunkOfs = this._io.readBytes(0);
        this._debug.saveChunkOfs.end = this._io.pos;
      }
      this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chunk = new Chunk(this._io, this, this._root);
      this.chunk._read();
      this._debug.chunk.end = this._io.pos;
    }
    Object.defineProperty(InfoSubchunk.prototype, 'chunkData', {
      get: function() {
        if (this._m_chunkData !== undefined)
          return this._m_chunkData;
        var io = this.chunk.dataSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_chunkData = { start: io.pos, ioOffset: io.byteOffset };
        switch (this.isUnregisteredTag) {
        case false:
          this._m_chunkData = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "UTF-8");
          break;
        }
        this._debug._m_chunkData.end = io.pos;
        io.seek(_pos);
        return this._m_chunkData;
      }
    });
    Object.defineProperty(InfoSubchunk.prototype, 'chunkIdReadable', {
      get: function() {
        if (this._m_chunkIdReadable !== undefined)
          return this._m_chunkIdReadable;
        this._debug._m_chunkIdReadable = {  };
        this._m_chunkIdReadable = KaitaiStream.bytesToStr(this.idChars, "ASCII");
        return this._m_chunkIdReadable;
      }
    });
    Object.defineProperty(InfoSubchunk.prototype, 'chunkOfs', {
      get: function() {
        if (this._m_chunkOfs !== undefined)
          return this._m_chunkOfs;
        this._debug._m_chunkOfs = {  };
        this._m_chunkOfs = this._io.pos;
        return this._m_chunkOfs;
      }
    });
    Object.defineProperty(InfoSubchunk.prototype, 'idChars', {
      get: function() {
        if (this._m_idChars !== undefined)
          return this._m_idChars;
        var _pos = this._io.pos;
        this._io.seek(this.chunkOfs);
        this._debug._m_idChars = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_idChars = this._io.readBytes(4);
        this._debug._m_idChars.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_idChars;
      }
    });

    /**
     * Check if chunk_id contains lowercase characters ([a-z], ASCII 97 = a, ASCII 122 = z).
     */
    Object.defineProperty(InfoSubchunk.prototype, 'isUnregisteredTag', {
      get: function() {
        if (this._m_isUnregisteredTag !== undefined)
          return this._m_isUnregisteredTag;
        this._debug._m_isUnregisteredTag = {  };
        this._m_isUnregisteredTag =  (( ((this.idChars[0] >= 97) && (this.idChars[0] <= 122)) ) || ( ((this.idChars[1] >= 97) && (this.idChars[1] <= 122)) ) || ( ((this.idChars[2] >= 97) && (this.idChars[2] <= 122)) ) || ( ((this.idChars[3] >= 97) && (this.idChars[3] <= 122)) )) ;
        return this._m_isUnregisteredTag;
      }
    });

    return InfoSubchunk;
  })();

  var ListChunkData = Riff.ListChunkData = (function() {
    function ListChunkData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ListChunkData.prototype._read = function() {
      if (this.parentChunkDataOfs < 0) {
        this._debug.saveParentChunkDataOfs = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.saveParentChunkDataOfs = this._io.readBytes(0);
        this._debug.saveParentChunkDataOfs.end = this._io.pos;
      }
      this._debug.parentChunkData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.parentChunkData = new ParentChunkData(this._io, this, this._root);
      this.parentChunkData._read();
      this._debug.parentChunkData.end = this._io.pos;
    }
    Object.defineProperty(ListChunkData.prototype, 'formType', {
      get: function() {
        if (this._m_formType !== undefined)
          return this._m_formType;
        this._debug._m_formType = { enumName: "Riff.Fourcc" };
        this._m_formType = this.parentChunkData.formType;
        return this._m_formType;
      }
    });
    Object.defineProperty(ListChunkData.prototype, 'formTypeReadable', {
      get: function() {
        if (this._m_formTypeReadable !== undefined)
          return this._m_formTypeReadable;
        var _pos = this._io.pos;
        this._io.seek(this.parentChunkDataOfs);
        this._debug._m_formTypeReadable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_formTypeReadable = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
        this._debug._m_formTypeReadable.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_formTypeReadable;
      }
    });
    Object.defineProperty(ListChunkData.prototype, 'parentChunkDataOfs', {
      get: function() {
        if (this._m_parentChunkDataOfs !== undefined)
          return this._m_parentChunkDataOfs;
        this._debug._m_parentChunkDataOfs = {  };
        this._m_parentChunkDataOfs = this._io.pos;
        return this._m_parentChunkDataOfs;
      }
    });
    Object.defineProperty(ListChunkData.prototype, 'subchunks', {
      get: function() {
        if (this._m_subchunks !== undefined)
          return this._m_subchunks;
        var io = this.parentChunkData.subchunksSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_subchunks = { start: io.pos, ioOffset: io.byteOffset };
        this._debug._m_subchunks.arr = [];
        this._m_subchunks = [];
        var i = 0;
        while (!io.isEof()) {
          this._debug._m_subchunks.arr[this._m_subchunks.length] = { start: io.pos, ioOffset: io.byteOffset };
          switch (this.formType) {
          case Riff.Fourcc.INFO:
            var _t__m_subchunks = new InfoSubchunk(io, this, this._root);
            try {
              _t__m_subchunks._read();
            } finally {
              this._m_subchunks.push(_t__m_subchunks);
            }
            break;
          default:
            var _t__m_subchunks = new ChunkType(io, this, this._root);
            try {
              _t__m_subchunks._read();
            } finally {
              this._m_subchunks.push(_t__m_subchunks);
            }
            break;
          }
          this._debug._m_subchunks.arr[this._m_subchunks.length - 1].end = io.pos;
          i++;
        }
        this._debug._m_subchunks.end = io.pos;
        io.seek(_pos);
        return this._m_subchunks;
      }
    });

    return ListChunkData;
  })();

  var ParentChunkData = Riff.ParentChunkData = (function() {
    function ParentChunkData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ParentChunkData.prototype._read = function() {
      this._debug.formType = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.formType = this._io.readU4le();
      this._debug.formType.end = this._io.pos;
      this._debug.subchunksSlot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_subchunksSlot = this._io.readBytesFull();
      var _io__raw_subchunksSlot = new KaitaiStream(this._raw_subchunksSlot);
      this.subchunksSlot = new Slot(_io__raw_subchunksSlot, this, this._root);
      this.subchunksSlot._read();
      this._debug.subchunksSlot.end = this._io.pos;
    }

    var Slot = ParentChunkData.Slot = (function() {
      function Slot(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      Slot.prototype._read = function() {
      }

      return Slot;
    })();

    return ParentChunkData;
  })();
  Object.defineProperty(Riff.prototype, 'chunkId', {
    get: function() {
      if (this._m_chunkId !== undefined)
        return this._m_chunkId;
      this._debug._m_chunkId = { enumName: "Riff.Fourcc" };
      this._m_chunkId = this.chunk.id;
      return this._m_chunkId;
    }
  });
  Object.defineProperty(Riff.prototype, 'isRiffChunk', {
    get: function() {
      if (this._m_isRiffChunk !== undefined)
        return this._m_isRiffChunk;
      this._debug._m_isRiffChunk = {  };
      this._m_isRiffChunk = this.chunkId == Riff.Fourcc.RIFF;
      return this._m_isRiffChunk;
    }
  });
  Object.defineProperty(Riff.prototype, 'parentChunkData', {
    get: function() {
      if (this._m_parentChunkData !== undefined)
        return this._m_parentChunkData;
      if (this.isRiffChunk) {
        var io = this.chunk.dataSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_parentChunkData = { start: io.pos, ioOffset: io.byteOffset };
        this._m_parentChunkData = new ParentChunkData(io, this, this._root);
        this._m_parentChunkData._read();
        this._debug._m_parentChunkData.end = io.pos;
        io.seek(_pos);
      }
      return this._m_parentChunkData;
    }
  });
  Object.defineProperty(Riff.prototype, 'subchunks', {
    get: function() {
      if (this._m_subchunks !== undefined)
        return this._m_subchunks;
      if (this.isRiffChunk) {
        var io = this.parentChunkData.subchunksSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_subchunks = { start: io.pos, ioOffset: io.byteOffset };
        this._debug._m_subchunks.arr = [];
        this._m_subchunks = [];
        var i = 0;
        while (!io.isEof()) {
          this._debug._m_subchunks.arr[this._m_subchunks.length] = { start: io.pos, ioOffset: io.byteOffset };
          var _t__m_subchunks = new ChunkType(io, this, this._root);
          try {
            _t__m_subchunks._read();
          } finally {
            this._m_subchunks.push(_t__m_subchunks);
          }
          this._debug._m_subchunks.arr[this._m_subchunks.length - 1].end = io.pos;
          i++;
        }
        this._debug._m_subchunks.end = io.pos;
        io.seek(_pos);
      }
      return this._m_subchunks;
    }
  });

  return Riff;
})();
Riff_.Riff = Riff;
});
