// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.AndroidNanoappHeader || (root.AndroidNanoappHeader = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (AndroidNanoappHeader_, KaitaiStream) {
/**
 * @see {@link https://android.googlesource.com/platform/system/chre/+/a7ff61b9/build/build_template.mk#130|Source}
 */

var AndroidNanoappHeader = (function() {
  function AndroidNanoappHeader(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  AndroidNanoappHeader.prototype._read = function() {
    this._debug.headerVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.headerVersion = this._io.readU4le();
    this._debug.headerVersion.end = this._io.pos;
    if (!(this.headerVersion == 1)) {
      var _err = new KaitaiStream.ValidationNotEqualError(1, this.headerVersion, this._io, "/seq/0");
      this._debug.headerVersion.validationError = _err;
      throw _err;
    }
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(4);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([78, 65, 78, 79])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([78, 65, 78, 79]), this.magic, this._io, "/seq/1");
      this._debug.magic.validationError = _err;
      throw _err;
    }
    this._debug.appId = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.appId = this._io.readU8le();
    this._debug.appId.end = this._io.pos;
    this._debug.appVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.appVersion = this._io.readU4le();
    this._debug.appVersion.end = this._io.pos;
    this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.flags = this._io.readU4le();
    this._debug.flags.end = this._io.pos;
    this._debug.hubType = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.hubType = this._io.readU8le();
    this._debug.hubType.end = this._io.pos;
    this._debug.chreApiMajorVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.chreApiMajorVersion = this._io.readU1();
    this._debug.chreApiMajorVersion.end = this._io.pos;
    this._debug.chreApiMinorVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.chreApiMinorVersion = this._io.readU1();
    this._debug.chreApiMinorVersion.end = this._io.pos;
    this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.reserved = this._io.readBytes(6);
    this._debug.reserved.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.reserved, new Uint8Array([0, 0, 0, 0, 0, 0])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([0, 0, 0, 0, 0, 0]), this.reserved, this._io, "/seq/8");
      this._debug.reserved.validationError = _err;
      throw _err;
    }
  }
  Object.defineProperty(AndroidNanoappHeader.prototype, 'isEncrypted', {
    get: function() {
      if (this._m_isEncrypted !== undefined)
        return this._m_isEncrypted;
      this._debug._m_isEncrypted = {  };
      this._m_isEncrypted = (this.flags & 2) != 0;
      return this._m_isEncrypted;
    }
  });
  Object.defineProperty(AndroidNanoappHeader.prototype, 'isSigned', {
    get: function() {
      if (this._m_isSigned !== undefined)
        return this._m_isSigned;
      this._debug._m_isSigned = {  };
      this._m_isSigned = (this.flags & 1) != 0;
      return this._m_isSigned;
    }
  });
  Object.defineProperty(AndroidNanoappHeader.prototype, 'isTcmCapable', {
    get: function() {
      if (this._m_isTcmCapable !== undefined)
        return this._m_isTcmCapable;
      this._debug._m_isTcmCapable = {  };
      this._m_isTcmCapable = (this.flags & 4) != 0;
      return this._m_isTcmCapable;
    }
  });

  return AndroidNanoappHeader;
})();
AndroidNanoappHeader_.AndroidNanoappHeader = AndroidNanoappHeader;
});
