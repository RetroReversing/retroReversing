// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.JavaClass || (root.JavaClass = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (JavaClass_, KaitaiStream) {
/**
 * @see {@link https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-4.html|Source}
 * @see {@link https://docs.oracle.com/javase/specs/jls/se6/jls3.pdf|Source}
 * @see {@link https://github.com/openjdk/jdk/blob/jdk-21%2B14/src/jdk.hotspot.agent/share/classes/sun/jvm/hotspot/runtime/ClassConstants.java|Source}
 * @see {@link https://github.com/openjdk/jdk/blob/jdk-21%2B14/src/java.base/share/native/include/classfile_constants.h.template|Source}
 * @see {@link https://github.com/openjdk/jdk/blob/jdk-21%2B14/src/hotspot/share/classfile/classFileParser.cpp|Source}
 */

var JavaClass = (function() {
  function JavaClass(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  JavaClass.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(4);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([202, 254, 186, 190])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([202, 254, 186, 190]), this.magic, this._io, "/seq/0");
      this._debug.magic.validationError = _err;
      throw _err;
    }
    this._debug.versionMinor = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.versionMinor = this._io.readU2be();
    this._debug.versionMinor.end = this._io.pos;
    this._debug.versionMajor = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.versionMajor = this._io.readU2be();
    this._debug.versionMajor.end = this._io.pos;
    if (!(this.versionMajor >= 43)) {
      var _err = new KaitaiStream.ValidationLessThanError(43, this.versionMajor, this._io, "/seq/2");
      this._debug.versionMajor.validationError = _err;
      throw _err;
    }
    this._debug.constantPoolCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.constantPoolCount = this._io.readU2be();
    this._debug.constantPoolCount.end = this._io.pos;
    this._debug.constantPool = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.constantPool.arr = [];
    this.constantPool = [];
    for (var i = 0; i < this.constantPoolCount - 1; i++) {
      this._debug.constantPool.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_constantPool = new ConstantPoolEntry(this._io, this, this._root, (i != 0 ? this.constantPool[i - 1].isTwoEntries : false));
      try {
        _t_constantPool._read();
      } finally {
        this.constantPool.push(_t_constantPool);
      }
      this._debug.constantPool.arr[i].end = this._io.pos;
    }
    this._debug.constantPool.end = this._io.pos;
    this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.accessFlags = this._io.readU2be();
    this._debug.accessFlags.end = this._io.pos;
    this._debug.thisClass = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.thisClass = this._io.readU2be();
    this._debug.thisClass.end = this._io.pos;
    this._debug.superClass = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.superClass = this._io.readU2be();
    this._debug.superClass.end = this._io.pos;
    this._debug.interfacesCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.interfacesCount = this._io.readU2be();
    this._debug.interfacesCount.end = this._io.pos;
    this._debug.interfaces = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.interfaces.arr = [];
    this.interfaces = [];
    for (var i = 0; i < this.interfacesCount; i++) {
      this._debug.interfaces.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.interfaces.push(this._io.readU2be());
      this._debug.interfaces.arr[i].end = this._io.pos;
    }
    this._debug.interfaces.end = this._io.pos;
    this._debug.fieldsCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.fieldsCount = this._io.readU2be();
    this._debug.fieldsCount.end = this._io.pos;
    this._debug.fields = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.fields.arr = [];
    this.fields = [];
    for (var i = 0; i < this.fieldsCount; i++) {
      this._debug.fields.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_fields = new FieldInfo(this._io, this, this._root);
      try {
        _t_fields._read();
      } finally {
        this.fields.push(_t_fields);
      }
      this._debug.fields.arr[i].end = this._io.pos;
    }
    this._debug.fields.end = this._io.pos;
    this._debug.methodsCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.methodsCount = this._io.readU2be();
    this._debug.methodsCount.end = this._io.pos;
    this._debug.methods = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.methods.arr = [];
    this.methods = [];
    for (var i = 0; i < this.methodsCount; i++) {
      this._debug.methods.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_methods = new MethodInfo(this._io, this, this._root);
      try {
        _t_methods._read();
      } finally {
        this.methods.push(_t_methods);
      }
      this._debug.methods.arr[i].end = this._io.pos;
    }
    this._debug.methods.end = this._io.pos;
    this._debug.attributesCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.attributesCount = this._io.readU2be();
    this._debug.attributesCount.end = this._io.pos;
    this._debug.attributes = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._debug.attributes.arr = [];
    this.attributes = [];
    for (var i = 0; i < this.attributesCount; i++) {
      this._debug.attributes.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      var _t_attributes = new AttributeInfo(this._io, this, this._root);
      try {
        _t_attributes._read();
      } finally {
        this.attributes.push(_t_attributes);
      }
      this._debug.attributes.arr[i].end = this._io.pos;
    }
    this._debug.attributes.end = this._io.pos;
  }

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7|Source}
   */

  var AttributeInfo = JavaClass.AttributeInfo = (function() {
    function AttributeInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    AttributeInfo.prototype._read = function() {
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
      this._debug.attributeLength = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attributeLength = this._io.readU4be();
      this._debug.attributeLength.end = this._io.pos;
      this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.nameAsStr) {
      case "Code":
        this._raw_info = this._io.readBytes(this.attributeLength);
        var _io__raw_info = new KaitaiStream(this._raw_info);
        this.info = new AttrBodyCode(_io__raw_info, this, this._root);
        this.info._read();
        break;
      case "Exceptions":
        this._raw_info = this._io.readBytes(this.attributeLength);
        var _io__raw_info = new KaitaiStream(this._raw_info);
        this.info = new AttrBodyExceptions(_io__raw_info, this, this._root);
        this.info._read();
        break;
      case "LineNumberTable":
        this._raw_info = this._io.readBytes(this.attributeLength);
        var _io__raw_info = new KaitaiStream(this._raw_info);
        this.info = new AttrBodyLineNumberTable(_io__raw_info, this, this._root);
        this.info._read();
        break;
      case "SourceFile":
        this._raw_info = this._io.readBytes(this.attributeLength);
        var _io__raw_info = new KaitaiStream(this._raw_info);
        this.info = new AttrBodySourceFile(_io__raw_info, this, this._root);
        this.info._read();
        break;
      default:
        this.info = this._io.readBytes(this.attributeLength);
        break;
      }
      this._debug.info.end = this._io.pos;
    }

    /**
     * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.3|Source}
     */

    var AttrBodyCode = AttributeInfo.AttrBodyCode = (function() {
      function AttrBodyCode(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      AttrBodyCode.prototype._read = function() {
        this._debug.maxStack = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.maxStack = this._io.readU2be();
        this._debug.maxStack.end = this._io.pos;
        this._debug.maxLocals = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.maxLocals = this._io.readU2be();
        this._debug.maxLocals.end = this._io.pos;
        this._debug.codeLength = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.codeLength = this._io.readU4be();
        this._debug.codeLength.end = this._io.pos;
        this._debug.code = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.code = this._io.readBytes(this.codeLength);
        this._debug.code.end = this._io.pos;
        this._debug.exceptionTableLength = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.exceptionTableLength = this._io.readU2be();
        this._debug.exceptionTableLength.end = this._io.pos;
        this._debug.exceptionTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.exceptionTable.arr = [];
        this.exceptionTable = [];
        for (var i = 0; i < this.exceptionTableLength; i++) {
          this._debug.exceptionTable.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_exceptionTable = new ExceptionEntry(this._io, this, this._root);
          try {
            _t_exceptionTable._read();
          } finally {
            this.exceptionTable.push(_t_exceptionTable);
          }
          this._debug.exceptionTable.arr[i].end = this._io.pos;
        }
        this._debug.exceptionTable.end = this._io.pos;
        this._debug.attributesCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.attributesCount = this._io.readU2be();
        this._debug.attributesCount.end = this._io.pos;
        this._debug.attributes = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.attributes.arr = [];
        this.attributes = [];
        for (var i = 0; i < this.attributesCount; i++) {
          this._debug.attributes.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_attributes = new AttributeInfo(this._io, this, this._root);
          try {
            _t_attributes._read();
          } finally {
            this.attributes.push(_t_attributes);
          }
          this._debug.attributes.arr[i].end = this._io.pos;
        }
        this._debug.attributes.end = this._io.pos;
      }

      /**
       * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.3|Source}
       */

      var ExceptionEntry = AttrBodyCode.ExceptionEntry = (function() {
        function ExceptionEntry(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        ExceptionEntry.prototype._read = function() {
          this._debug.startPc = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.startPc = this._io.readU2be();
          this._debug.startPc.end = this._io.pos;
          this._debug.endPc = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.endPc = this._io.readU2be();
          this._debug.endPc.end = this._io.pos;
          this._debug.handlerPc = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.handlerPc = this._io.readU2be();
          this._debug.handlerPc.end = this._io.pos;
          this._debug.catchType = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.catchType = this._io.readU2be();
          this._debug.catchType.end = this._io.pos;
        }
        Object.defineProperty(ExceptionEntry.prototype, 'catchException', {
          get: function() {
            if (this._m_catchException !== undefined)
              return this._m_catchException;
            if (this.catchType != 0) {
              this._debug._m_catchException = {  };
              this._m_catchException = this._root.constantPool[this.catchType - 1];
            }
            return this._m_catchException;
          }
        });

        /**
         * Start of a code region where exception handler is being
         * active, index in code array (inclusive)
         */

        /**
         * End of a code region where exception handler is being
         * active, index in code array (exclusive)
         */

        /**
         * Start of exception handler code, index in code array
         */

        /**
         * Exception class that this handler catches, index in constant
         * pool, or 0 (catch all exceptions handler, used to implement
         * `finally`).
         */

        return ExceptionEntry;
      })();

      return AttrBodyCode;
    })();

    /**
     * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.5|Source}
     */

    var AttrBodyExceptions = AttributeInfo.AttrBodyExceptions = (function() {
      function AttrBodyExceptions(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      AttrBodyExceptions.prototype._read = function() {
        this._debug.numberOfExceptions = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.numberOfExceptions = this._io.readU2be();
        this._debug.numberOfExceptions.end = this._io.pos;
        this._debug.exceptions = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.exceptions.arr = [];
        this.exceptions = [];
        for (var i = 0; i < this.numberOfExceptions; i++) {
          this._debug.exceptions.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_exceptions = new ExceptionTableEntry(this._io, this, this._root);
          try {
            _t_exceptions._read();
          } finally {
            this.exceptions.push(_t_exceptions);
          }
          this._debug.exceptions.arr[i].end = this._io.pos;
        }
        this._debug.exceptions.end = this._io.pos;
      }

      var ExceptionTableEntry = AttrBodyExceptions.ExceptionTableEntry = (function() {
        function ExceptionTableEntry(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        ExceptionTableEntry.prototype._read = function() {
          this._debug.index = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.index = this._io.readU2be();
          this._debug.index.end = this._io.pos;
        }
        Object.defineProperty(ExceptionTableEntry.prototype, 'asInfo', {
          get: function() {
            if (this._m_asInfo !== undefined)
              return this._m_asInfo;
            this._debug._m_asInfo = {  };
            this._m_asInfo = this._root.constantPool[this.index - 1].cpInfo;
            return this._m_asInfo;
          }
        });
        Object.defineProperty(ExceptionTableEntry.prototype, 'nameAsStr', {
          get: function() {
            if (this._m_nameAsStr !== undefined)
              return this._m_nameAsStr;
            this._debug._m_nameAsStr = {  };
            this._m_nameAsStr = this.asInfo.nameAsStr;
            return this._m_nameAsStr;
          }
        });

        return ExceptionTableEntry;
      })();

      return AttrBodyExceptions;
    })();

    /**
     * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.12|Source}
     */

    var AttrBodyLineNumberTable = AttributeInfo.AttrBodyLineNumberTable = (function() {
      function AttrBodyLineNumberTable(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      AttrBodyLineNumberTable.prototype._read = function() {
        this._debug.lineNumberTableLength = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.lineNumberTableLength = this._io.readU2be();
        this._debug.lineNumberTableLength.end = this._io.pos;
        this._debug.lineNumberTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.lineNumberTable.arr = [];
        this.lineNumberTable = [];
        for (var i = 0; i < this.lineNumberTableLength; i++) {
          this._debug.lineNumberTable.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_lineNumberTable = new LineNumberTableEntry(this._io, this, this._root);
          try {
            _t_lineNumberTable._read();
          } finally {
            this.lineNumberTable.push(_t_lineNumberTable);
          }
          this._debug.lineNumberTable.arr[i].end = this._io.pos;
        }
        this._debug.lineNumberTable.end = this._io.pos;
      }

      var LineNumberTableEntry = AttrBodyLineNumberTable.LineNumberTableEntry = (function() {
        function LineNumberTableEntry(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root;
          this._debug = {};

        }
        LineNumberTableEntry.prototype._read = function() {
          this._debug.startPc = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.startPc = this._io.readU2be();
          this._debug.startPc.end = this._io.pos;
          this._debug.lineNumber = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.lineNumber = this._io.readU2be();
          this._debug.lineNumber.end = this._io.pos;
        }

        return LineNumberTableEntry;
      })();

      return AttrBodyLineNumberTable;
    })();

    /**
     * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.10|Source}
     */

    var AttrBodySourceFile = AttributeInfo.AttrBodySourceFile = (function() {
      function AttrBodySourceFile(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      AttrBodySourceFile.prototype._read = function() {
        this._debug.sourcefileIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.sourcefileIndex = this._io.readU2be();
        this._debug.sourcefileIndex.end = this._io.pos;
      }
      Object.defineProperty(AttrBodySourceFile.prototype, 'sourcefileAsStr', {
        get: function() {
          if (this._m_sourcefileAsStr !== undefined)
            return this._m_sourcefileAsStr;
          this._debug._m_sourcefileAsStr = {  };
          this._m_sourcefileAsStr = this._root.constantPool[this.sourcefileIndex - 1].cpInfo.value;
          return this._m_sourcefileAsStr;
        }
      });

      return AttrBodySourceFile;
    })();
    Object.defineProperty(AttributeInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this._root.constantPool[this.nameIndex - 1].cpInfo.value;
        return this._m_nameAsStr;
      }
    });

    return AttributeInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.1|Source}
   */

  var ClassCpInfo = JavaClass.ClassCpInfo = (function() {
    function ClassCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ClassCpInfo.prototype._read = function() {
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
    }
    Object.defineProperty(ClassCpInfo.prototype, 'nameAsInfo', {
      get: function() {
        if (this._m_nameAsInfo !== undefined)
          return this._m_nameAsInfo;
        this._debug._m_nameAsInfo = {  };
        this._m_nameAsInfo = this._root.constantPool[this.nameIndex - 1].cpInfo;
        return this._m_nameAsInfo;
      }
    });
    Object.defineProperty(ClassCpInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this.nameAsInfo.value;
        return this._m_nameAsStr;
      }
    });

    return ClassCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4|Source}
   */

  var ConstantPoolEntry = JavaClass.ConstantPoolEntry = (function() {
    ConstantPoolEntry.TagEnum = Object.freeze({
      UTF8: 1,
      INTEGER: 3,
      FLOAT: 4,
      LONG: 5,
      DOUBLE: 6,
      CLASS_TYPE: 7,
      STRING: 8,
      FIELD_REF: 9,
      METHOD_REF: 10,
      INTERFACE_METHOD_REF: 11,
      NAME_AND_TYPE: 12,
      METHOD_HANDLE: 15,
      METHOD_TYPE: 16,
      DYNAMIC: 17,
      INVOKE_DYNAMIC: 18,
      MODULE: 19,
      PACKAGE: 20,

      1: "UTF8",
      3: "INTEGER",
      4: "FLOAT",
      5: "LONG",
      6: "DOUBLE",
      7: "CLASS_TYPE",
      8: "STRING",
      9: "FIELD_REF",
      10: "METHOD_REF",
      11: "INTERFACE_METHOD_REF",
      12: "NAME_AND_TYPE",
      15: "METHOD_HANDLE",
      16: "METHOD_TYPE",
      17: "DYNAMIC",
      18: "INVOKE_DYNAMIC",
      19: "MODULE",
      20: "PACKAGE",
    });

    function ConstantPoolEntry(_io, _parent, _root, isPrevTwoEntries) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.isPrevTwoEntries = isPrevTwoEntries;
      this._debug = {};

    }
    ConstantPoolEntry.prototype._read = function() {
      if (!(this.isPrevTwoEntries)) {
        this._debug.tag = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "JavaClass.ConstantPoolEntry.TagEnum" };
        this.tag = this._io.readU1();
        this._debug.tag.end = this._io.pos;
      }
      if (!(this.isPrevTwoEntries)) {
        this._debug.cpInfo = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this.tag) {
        case JavaClass.ConstantPoolEntry.TagEnum.CLASS_TYPE:
          this.cpInfo = new ClassCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.DOUBLE:
          this.cpInfo = new DoubleCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.DYNAMIC:
          this.cpInfo = new DynamicCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.FIELD_REF:
          this.cpInfo = new FieldRefCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.FLOAT:
          this.cpInfo = new FloatCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.INTEGER:
          this.cpInfo = new IntegerCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.INTERFACE_METHOD_REF:
          this.cpInfo = new InterfaceMethodRefCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.INVOKE_DYNAMIC:
          this.cpInfo = new InvokeDynamicCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.LONG:
          this.cpInfo = new LongCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.METHOD_HANDLE:
          this.cpInfo = new MethodHandleCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.METHOD_REF:
          this.cpInfo = new MethodRefCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.METHOD_TYPE:
          this.cpInfo = new MethodTypeCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.MODULE:
          this.cpInfo = new ModulePackageCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.NAME_AND_TYPE:
          this.cpInfo = new NameAndTypeCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.PACKAGE:
          this.cpInfo = new ModulePackageCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.STRING:
          this.cpInfo = new StringCpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        case JavaClass.ConstantPoolEntry.TagEnum.UTF8:
          this.cpInfo = new Utf8CpInfo(this._io, this, this._root);
          this.cpInfo._read();
          break;
        }
        this._debug.cpInfo.end = this._io.pos;
      }
    }
    Object.defineProperty(ConstantPoolEntry.prototype, 'isTwoEntries', {
      get: function() {
        if (this._m_isTwoEntries !== undefined)
          return this._m_isTwoEntries;
        this._debug._m_isTwoEntries = {  };
        this._m_isTwoEntries = (this.isPrevTwoEntries ? false :  ((this.tag == JavaClass.ConstantPoolEntry.TagEnum.LONG) || (this.tag == JavaClass.ConstantPoolEntry.TagEnum.DOUBLE)) );
        return this._m_isTwoEntries;
      }
    });

    return ConstantPoolEntry;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.6|Source}
   */

  var DoubleCpInfo = JavaClass.DoubleCpInfo = (function() {
    function DoubleCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DoubleCpInfo.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readF8be();
      this._debug.value.end = this._io.pos;
    }

    return DoubleCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-4.html#jvms-4.4.10|Source}
   */

  var DynamicCpInfo = JavaClass.DynamicCpInfo = (function() {
    function DynamicCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DynamicCpInfo.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new VersionGuard(this._io, this, this._root, 55);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.bootstrapMethodAttrIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bootstrapMethodAttrIndex = this._io.readU2be();
      this._debug.bootstrapMethodAttrIndex.end = this._io.pos;
      this._debug.nameAndTypeIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameAndTypeIndex = this._io.readU2be();
      this._debug.nameAndTypeIndex.end = this._io.pos;
    }

    return DynamicCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.5|Source}
   */

  var FieldInfo = JavaClass.FieldInfo = (function() {
    function FieldInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FieldInfo.prototype._read = function() {
      this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accessFlags = this._io.readU2be();
      this._debug.accessFlags.end = this._io.pos;
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
      this._debug.descriptorIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.descriptorIndex = this._io.readU2be();
      this._debug.descriptorIndex.end = this._io.pos;
      this._debug.attributesCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attributesCount = this._io.readU2be();
      this._debug.attributesCount.end = this._io.pos;
      this._debug.attributes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.attributes.arr = [];
      this.attributes = [];
      for (var i = 0; i < this.attributesCount; i++) {
        this._debug.attributes.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_attributes = new AttributeInfo(this._io, this, this._root);
        try {
          _t_attributes._read();
        } finally {
          this.attributes.push(_t_attributes);
        }
        this._debug.attributes.arr[i].end = this._io.pos;
      }
      this._debug.attributes.end = this._io.pos;
    }
    Object.defineProperty(FieldInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this._root.constantPool[this.nameIndex - 1].cpInfo.value;
        return this._m_nameAsStr;
      }
    });

    return FieldInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2|Source}
   */

  var FieldRefCpInfo = JavaClass.FieldRefCpInfo = (function() {
    function FieldRefCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FieldRefCpInfo.prototype._read = function() {
      this._debug.classIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIndex = this._io.readU2be();
      this._debug.classIndex.end = this._io.pos;
      this._debug.nameAndTypeIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameAndTypeIndex = this._io.readU2be();
      this._debug.nameAndTypeIndex.end = this._io.pos;
    }
    Object.defineProperty(FieldRefCpInfo.prototype, 'classAsInfo', {
      get: function() {
        if (this._m_classAsInfo !== undefined)
          return this._m_classAsInfo;
        this._debug._m_classAsInfo = {  };
        this._m_classAsInfo = this._root.constantPool[this.classIndex - 1].cpInfo;
        return this._m_classAsInfo;
      }
    });
    Object.defineProperty(FieldRefCpInfo.prototype, 'nameAndTypeAsInfo', {
      get: function() {
        if (this._m_nameAndTypeAsInfo !== undefined)
          return this._m_nameAndTypeAsInfo;
        this._debug._m_nameAndTypeAsInfo = {  };
        this._m_nameAndTypeAsInfo = this._root.constantPool[this.nameAndTypeIndex - 1].cpInfo;
        return this._m_nameAndTypeAsInfo;
      }
    });

    return FieldRefCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.5|Source}
   */

  var FloatCpInfo = JavaClass.FloatCpInfo = (function() {
    function FloatCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FloatCpInfo.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readF4be();
      this._debug.value.end = this._io.pos;
    }

    return FloatCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.4|Source}
   */

  var IntegerCpInfo = JavaClass.IntegerCpInfo = (function() {
    function IntegerCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    IntegerCpInfo.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readU4be();
      this._debug.value.end = this._io.pos;
    }

    return IntegerCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2|Source}
   */

  var InterfaceMethodRefCpInfo = JavaClass.InterfaceMethodRefCpInfo = (function() {
    function InterfaceMethodRefCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    InterfaceMethodRefCpInfo.prototype._read = function() {
      this._debug.classIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIndex = this._io.readU2be();
      this._debug.classIndex.end = this._io.pos;
      this._debug.nameAndTypeIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameAndTypeIndex = this._io.readU2be();
      this._debug.nameAndTypeIndex.end = this._io.pos;
    }
    Object.defineProperty(InterfaceMethodRefCpInfo.prototype, 'classAsInfo', {
      get: function() {
        if (this._m_classAsInfo !== undefined)
          return this._m_classAsInfo;
        this._debug._m_classAsInfo = {  };
        this._m_classAsInfo = this._root.constantPool[this.classIndex - 1].cpInfo;
        return this._m_classAsInfo;
      }
    });
    Object.defineProperty(InterfaceMethodRefCpInfo.prototype, 'nameAndTypeAsInfo', {
      get: function() {
        if (this._m_nameAndTypeAsInfo !== undefined)
          return this._m_nameAndTypeAsInfo;
        this._debug._m_nameAndTypeAsInfo = {  };
        this._m_nameAndTypeAsInfo = this._root.constantPool[this.nameAndTypeIndex - 1].cpInfo;
        return this._m_nameAndTypeAsInfo;
      }
    });

    return InterfaceMethodRefCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.10|Source}
   */

  var InvokeDynamicCpInfo = JavaClass.InvokeDynamicCpInfo = (function() {
    function InvokeDynamicCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    InvokeDynamicCpInfo.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new VersionGuard(this._io, this, this._root, 51);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.bootstrapMethodAttrIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bootstrapMethodAttrIndex = this._io.readU2be();
      this._debug.bootstrapMethodAttrIndex.end = this._io.pos;
      this._debug.nameAndTypeIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameAndTypeIndex = this._io.readU2be();
      this._debug.nameAndTypeIndex.end = this._io.pos;
    }

    return InvokeDynamicCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.5|Source}
   */

  var LongCpInfo = JavaClass.LongCpInfo = (function() {
    function LongCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    LongCpInfo.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readU8be();
      this._debug.value.end = this._io.pos;
    }

    return LongCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.8|Source}
   */

  var MethodHandleCpInfo = JavaClass.MethodHandleCpInfo = (function() {
    MethodHandleCpInfo.ReferenceKindEnum = Object.freeze({
      GET_FIELD: 1,
      GET_STATIC: 2,
      PUT_FIELD: 3,
      PUT_STATIC: 4,
      INVOKE_VIRTUAL: 5,
      INVOKE_STATIC: 6,
      INVOKE_SPECIAL: 7,
      NEW_INVOKE_SPECIAL: 8,
      INVOKE_INTERFACE: 9,

      1: "GET_FIELD",
      2: "GET_STATIC",
      3: "PUT_FIELD",
      4: "PUT_STATIC",
      5: "INVOKE_VIRTUAL",
      6: "INVOKE_STATIC",
      7: "INVOKE_SPECIAL",
      8: "NEW_INVOKE_SPECIAL",
      9: "INVOKE_INTERFACE",
    });

    function MethodHandleCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MethodHandleCpInfo.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new VersionGuard(this._io, this, this._root, 51);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.referenceKind = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "JavaClass.MethodHandleCpInfo.ReferenceKindEnum" };
      this.referenceKind = this._io.readU1();
      this._debug.referenceKind.end = this._io.pos;
      this._debug.referenceIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.referenceIndex = this._io.readU2be();
      this._debug.referenceIndex.end = this._io.pos;
    }

    return MethodHandleCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.6|Source}
   */

  var MethodInfo = JavaClass.MethodInfo = (function() {
    function MethodInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MethodInfo.prototype._read = function() {
      this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accessFlags = this._io.readU2be();
      this._debug.accessFlags.end = this._io.pos;
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
      this._debug.descriptorIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.descriptorIndex = this._io.readU2be();
      this._debug.descriptorIndex.end = this._io.pos;
      this._debug.attributesCount = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attributesCount = this._io.readU2be();
      this._debug.attributesCount.end = this._io.pos;
      this._debug.attributes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.attributes.arr = [];
      this.attributes = [];
      for (var i = 0; i < this.attributesCount; i++) {
        this._debug.attributes.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_attributes = new AttributeInfo(this._io, this, this._root);
        try {
          _t_attributes._read();
        } finally {
          this.attributes.push(_t_attributes);
        }
        this._debug.attributes.arr[i].end = this._io.pos;
      }
      this._debug.attributes.end = this._io.pos;
    }
    Object.defineProperty(MethodInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this._root.constantPool[this.nameIndex - 1].cpInfo.value;
        return this._m_nameAsStr;
      }
    });

    return MethodInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2|Source}
   */

  var MethodRefCpInfo = JavaClass.MethodRefCpInfo = (function() {
    function MethodRefCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MethodRefCpInfo.prototype._read = function() {
      this._debug.classIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIndex = this._io.readU2be();
      this._debug.classIndex.end = this._io.pos;
      this._debug.nameAndTypeIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameAndTypeIndex = this._io.readU2be();
      this._debug.nameAndTypeIndex.end = this._io.pos;
    }
    Object.defineProperty(MethodRefCpInfo.prototype, 'classAsInfo', {
      get: function() {
        if (this._m_classAsInfo !== undefined)
          return this._m_classAsInfo;
        this._debug._m_classAsInfo = {  };
        this._m_classAsInfo = this._root.constantPool[this.classIndex - 1].cpInfo;
        return this._m_classAsInfo;
      }
    });
    Object.defineProperty(MethodRefCpInfo.prototype, 'nameAndTypeAsInfo', {
      get: function() {
        if (this._m_nameAndTypeAsInfo !== undefined)
          return this._m_nameAndTypeAsInfo;
        this._debug._m_nameAndTypeAsInfo = {  };
        this._m_nameAndTypeAsInfo = this._root.constantPool[this.nameAndTypeIndex - 1].cpInfo;
        return this._m_nameAndTypeAsInfo;
      }
    });

    return MethodRefCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.9|Source}
   */

  var MethodTypeCpInfo = JavaClass.MethodTypeCpInfo = (function() {
    function MethodTypeCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MethodTypeCpInfo.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new VersionGuard(this._io, this, this._root, 51);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.descriptorIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.descriptorIndex = this._io.readU2be();
      this._debug.descriptorIndex.end = this._io.pos;
    }

    return MethodTypeCpInfo;
  })();

  /**
   * Project Jigsaw modules introduced in Java 9
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-3.html#jvms-3.16|Source}
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-4.html#jvms-4.4.11|Source}
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-4.html#jvms-4.4.12|Source}
   */

  var ModulePackageCpInfo = JavaClass.ModulePackageCpInfo = (function() {
    function ModulePackageCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ModulePackageCpInfo.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new VersionGuard(this._io, this, this._root, 53);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
    }
    Object.defineProperty(ModulePackageCpInfo.prototype, 'nameAsInfo', {
      get: function() {
        if (this._m_nameAsInfo !== undefined)
          return this._m_nameAsInfo;
        this._debug._m_nameAsInfo = {  };
        this._m_nameAsInfo = this._root.constantPool[this.nameIndex - 1].cpInfo;
        return this._m_nameAsInfo;
      }
    });
    Object.defineProperty(ModulePackageCpInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this.nameAsInfo.value;
        return this._m_nameAsStr;
      }
    });

    return ModulePackageCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.6|Source}
   */

  var NameAndTypeCpInfo = JavaClass.NameAndTypeCpInfo = (function() {
    function NameAndTypeCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    NameAndTypeCpInfo.prototype._read = function() {
      this._debug.nameIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIndex = this._io.readU2be();
      this._debug.nameIndex.end = this._io.pos;
      this._debug.descriptorIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.descriptorIndex = this._io.readU2be();
      this._debug.descriptorIndex.end = this._io.pos;
    }
    Object.defineProperty(NameAndTypeCpInfo.prototype, 'descriptorAsInfo', {
      get: function() {
        if (this._m_descriptorAsInfo !== undefined)
          return this._m_descriptorAsInfo;
        this._debug._m_descriptorAsInfo = {  };
        this._m_descriptorAsInfo = this._root.constantPool[this.descriptorIndex - 1].cpInfo;
        return this._m_descriptorAsInfo;
      }
    });
    Object.defineProperty(NameAndTypeCpInfo.prototype, 'descriptorAsStr', {
      get: function() {
        if (this._m_descriptorAsStr !== undefined)
          return this._m_descriptorAsStr;
        this._debug._m_descriptorAsStr = {  };
        this._m_descriptorAsStr = this.descriptorAsInfo.value;
        return this._m_descriptorAsStr;
      }
    });
    Object.defineProperty(NameAndTypeCpInfo.prototype, 'nameAsInfo', {
      get: function() {
        if (this._m_nameAsInfo !== undefined)
          return this._m_nameAsInfo;
        this._debug._m_nameAsInfo = {  };
        this._m_nameAsInfo = this._root.constantPool[this.nameIndex - 1].cpInfo;
        return this._m_nameAsInfo;
      }
    });
    Object.defineProperty(NameAndTypeCpInfo.prototype, 'nameAsStr', {
      get: function() {
        if (this._m_nameAsStr !== undefined)
          return this._m_nameAsStr;
        this._debug._m_nameAsStr = {  };
        this._m_nameAsStr = this.nameAsInfo.value;
        return this._m_nameAsStr;
      }
    });

    return NameAndTypeCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.3|Source}
   */

  var StringCpInfo = JavaClass.StringCpInfo = (function() {
    function StringCpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    StringCpInfo.prototype._read = function() {
      this._debug.stringIndex = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stringIndex = this._io.readU2be();
      this._debug.stringIndex.end = this._io.pos;
    }

    return StringCpInfo;
  })();

  /**
   * @see {@link https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.7|Source}
   */

  var Utf8CpInfo = JavaClass.Utf8CpInfo = (function() {
    function Utf8CpInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    Utf8CpInfo.prototype._read = function() {
      this._debug.strLen = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strLen = this._io.readU2be();
      this._debug.strLen.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = KaitaiStream.bytesToStr(this._io.readBytes(this.strLen), "UTF-8");
      this._debug.value.end = this._io.pos;
    }

    return Utf8CpInfo;
  })();

  /**
   * `class` file format version 45.3 (appeared in the very first publicly
   * known release of Java SE AND JDK 1.0.2, released 23th January 1996) is so
   * ancient that it's taken for granted. Earlier formats seem to be
   * undocumented. Changes of `version_minor` don't change `class` format.
   * Earlier `version_major`s likely belong to Oak programming language, the
   * proprietary predecessor of Java.
   * @see James Gosling, Bill Joy and Guy Steele. The Java Language Specification. English. Ed. by Lisa Friendly. Addison-Wesley, Aug. 1996, p. 825. ISBN: 0-201-63451-1.
   * @see Frank Yellin and Tim Lindholm. The Java Virtual Machine Specification. English. Ed. by Lisa Friendly. Addison-Wesley, Sept. 1996, p. 475. ISBN: 0-201-63452-X.
   */

  var VersionGuard = JavaClass.VersionGuard = (function() {
    function VersionGuard(_io, _parent, _root, major) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.major = major;
      this._debug = {};

    }
    VersionGuard.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readBytes(0);
      this._debug._unnamed0.end = this._io.pos;
      var _ = this._unnamed0;
      if (!(this._root.versionMajor >= this.major)) {
        var _err = new KaitaiStream.ValidationExprError(this._unnamed0, this._io, "/types/version_guard/seq/0");
        this._debug._unnamed0.validationError = _err;
        throw _err;
      }
    }

    return VersionGuard;
  })();

  return JavaClass;
})();
JavaClass_.JavaClass = JavaClass;
});
