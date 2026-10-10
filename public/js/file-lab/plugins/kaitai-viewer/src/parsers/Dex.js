// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream', './VlqBase128Le'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'), require('./VlqBase128Le'));
  } else {
    factory(root.Dex || (root.Dex = {}), root.KaitaiStream, root.VlqBase128Le || (root.VlqBase128Le = {}));
  }
})(typeof self !== 'undefined' ? self : this, function (Dex_, KaitaiStream, VlqBase128Le_) {
/**
 * Android OS applications executables are typically stored in its own
 * format, optimized for more efficient execution in Dalvik virtual
 * machine.
 * 
 * This format is loosely similar to Java .class file format and
 * generally holds the similar set of data: i.e. classes, methods,
 * fields, annotations, etc.
 * @see {@link https://source.android.com/docs/core/runtime/dex-format|Source}
 */

var Dex = (function() {
  Dex.ClassAccessFlags = Object.freeze({
    PUBLIC: 1,
    PRIVATE: 2,
    PROTECTED: 4,
    STATIC: 8,
    FINAL: 16,
    INTERFACE: 512,
    ABSTRACT: 1024,
    SYNTHETIC: 4096,
    ANNOTATION: 8192,
    ENUM: 16384,

    1: "PUBLIC",
    2: "PRIVATE",
    4: "PROTECTED",
    8: "STATIC",
    16: "FINAL",
    512: "INTERFACE",
    1024: "ABSTRACT",
    4096: "SYNTHETIC",
    8192: "ANNOTATION",
    16384: "ENUM",
  });

  function Dex(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Dex.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new HeaderItem(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
  }

  var AnnotationElement = Dex.AnnotationElement = (function() {
    function AnnotationElement(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    AnnotationElement.prototype._read = function() {
      this._debug.nameIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIdx = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.nameIdx._read();
      this._debug.nameIdx.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new EncodedValue(this._io, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    /**
     * element name, represented as an index into the string_ids section.
     * 
     * The string must conform to the syntax for MemberName, defined above.
     */

    /**
     * element value
     */

    return AnnotationElement;
  })();

  var CallSiteIdItem = Dex.CallSiteIdItem = (function() {
    function CallSiteIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CallSiteIdItem.prototype._read = function() {
      this._debug.callSiteOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.callSiteOff = this._io.readU4le();
      this._debug.callSiteOff.end = this._io.pos;
    }

    /**
     * offset from the start of the file to call site definition.
     * 
     * The offset should be in the data section, and the data there should
     * be in the format specified by "call_site_item" below.
     */

    return CallSiteIdItem;
  })();

  var ClassDataItem = Dex.ClassDataItem = (function() {
    function ClassDataItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ClassDataItem.prototype._read = function() {
      this._debug.staticFieldsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.staticFieldsSize = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.staticFieldsSize._read();
      this._debug.staticFieldsSize.end = this._io.pos;
      this._debug.instanceFieldsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.instanceFieldsSize = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.instanceFieldsSize._read();
      this._debug.instanceFieldsSize.end = this._io.pos;
      this._debug.directMethodsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.directMethodsSize = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.directMethodsSize._read();
      this._debug.directMethodsSize.end = this._io.pos;
      this._debug.virtualMethodsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.virtualMethodsSize = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.virtualMethodsSize._read();
      this._debug.virtualMethodsSize.end = this._io.pos;
      this._debug.staticFields = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.staticFields.arr = [];
      this.staticFields = [];
      for (var i = 0; i < this.staticFieldsSize.value; i++) {
        this._debug.staticFields.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_staticFields = new EncodedField(this._io, this, this._root);
        try {
          _t_staticFields._read();
        } finally {
          this.staticFields.push(_t_staticFields);
        }
        this._debug.staticFields.arr[i].end = this._io.pos;
      }
      this._debug.staticFields.end = this._io.pos;
      this._debug.instanceFields = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.instanceFields.arr = [];
      this.instanceFields = [];
      for (var i = 0; i < this.instanceFieldsSize.value; i++) {
        this._debug.instanceFields.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_instanceFields = new EncodedField(this._io, this, this._root);
        try {
          _t_instanceFields._read();
        } finally {
          this.instanceFields.push(_t_instanceFields);
        }
        this._debug.instanceFields.arr[i].end = this._io.pos;
      }
      this._debug.instanceFields.end = this._io.pos;
      this._debug.directMethods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.directMethods.arr = [];
      this.directMethods = [];
      for (var i = 0; i < this.directMethodsSize.value; i++) {
        this._debug.directMethods.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_directMethods = new EncodedMethod(this._io, this, this._root);
        try {
          _t_directMethods._read();
        } finally {
          this.directMethods.push(_t_directMethods);
        }
        this._debug.directMethods.arr[i].end = this._io.pos;
      }
      this._debug.directMethods.end = this._io.pos;
      this._debug.virtualMethods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.virtualMethods.arr = [];
      this.virtualMethods = [];
      for (var i = 0; i < this.virtualMethodsSize.value; i++) {
        this._debug.virtualMethods.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_virtualMethods = new EncodedMethod(this._io, this, this._root);
        try {
          _t_virtualMethods._read();
        } finally {
          this.virtualMethods.push(_t_virtualMethods);
        }
        this._debug.virtualMethods.arr[i].end = this._io.pos;
      }
      this._debug.virtualMethods.end = this._io.pos;
    }

    /**
     * the number of static fields defined in this item
     */

    /**
     * the number of instance fields defined in this item
     */

    /**
     * the number of direct methods defined in this item
     */

    /**
     * the number of virtual methods defined in this item
     */

    /**
     * the defined static fields, represented as a sequence of encoded elements.
     * 
     * The fields must be sorted by field_idx in increasing order.
     */

    /**
     * the defined instance fields, represented as a sequence of encoded elements.
     * 
     * The fields must be sorted by field_idx in increasing order.
     */

    /**
     * the defined direct (any of static, private, or constructor) methods,
     * represented as a sequence of encoded elements.
     * 
     * The methods must be sorted by method_idx in increasing order.
     */

    /**
     * the defined virtual (none of static, private, or constructor) methods,
     * represented as a sequence of encoded elements.
     * 
     * This list should not include inherited methods unless overridden by
     * the class that this item represents.
     * 
     * The methods must be sorted by method_idx in increasing order.
     * 
     * The method_idx of a virtual method must not be the same as any direct method.
     */

    return ClassDataItem;
  })();

  var ClassDefItem = Dex.ClassDefItem = (function() {
    function ClassDefItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ClassDefItem.prototype._read = function() {
      this._debug.classIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIdx = this._io.readU4le();
      this._debug.classIdx.end = this._io.pos;
      this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Dex.ClassAccessFlags" };
      this.accessFlags = this._io.readU4le();
      this._debug.accessFlags.end = this._io.pos;
      this._debug.superclassIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.superclassIdx = this._io.readU4le();
      this._debug.superclassIdx.end = this._io.pos;
      this._debug.interfacesOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.interfacesOff = this._io.readU4le();
      this._debug.interfacesOff.end = this._io.pos;
      this._debug.sourceFileIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sourceFileIdx = this._io.readU4le();
      this._debug.sourceFileIdx.end = this._io.pos;
      this._debug.annotationsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.annotationsOff = this._io.readU4le();
      this._debug.annotationsOff.end = this._io.pos;
      this._debug.classDataOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classDataOff = this._io.readU4le();
      this._debug.classDataOff.end = this._io.pos;
      this._debug.staticValuesOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.staticValuesOff = this._io.readU4le();
      this._debug.staticValuesOff.end = this._io.pos;
    }
    Object.defineProperty(ClassDefItem.prototype, 'classData', {
      get: function() {
        if (this._m_classData !== undefined)
          return this._m_classData;
        if (this.classDataOff != 0) {
          var _pos = this._io.pos;
          this._io.seek(this.classDataOff);
          this._debug._m_classData = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_classData = new ClassDataItem(this._io, this, this._root);
          this._m_classData._read();
          this._debug._m_classData.end = this._io.pos;
          this._io.seek(_pos);
        }
        return this._m_classData;
      }
    });
    Object.defineProperty(ClassDefItem.prototype, 'staticValues', {
      get: function() {
        if (this._m_staticValues !== undefined)
          return this._m_staticValues;
        if (this.staticValuesOff != 0) {
          var _pos = this._io.pos;
          this._io.seek(this.staticValuesOff);
          this._debug._m_staticValues = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this._m_staticValues = new EncodedArrayItem(this._io, this, this._root);
          this._m_staticValues._read();
          this._debug._m_staticValues.end = this._io.pos;
          this._io.seek(_pos);
        }
        return this._m_staticValues;
      }
    });
    Object.defineProperty(ClassDefItem.prototype, 'typeName', {
      get: function() {
        if (this._m_typeName !== undefined)
          return this._m_typeName;
        this._debug._m_typeName = {  };
        this._m_typeName = this._root.typeIds[this.classIdx].typeName;
        return this._m_typeName;
      }
    });

    /**
     * index into the type_ids list for this class.
     * 
     * This must be a class type, and not an array or primitive type.
     */

    /**
     * access flags for the class (public, final, etc.).
     * 
     * See "access_flags Definitions" for details.
     */

    /**
     * index into the type_ids list for the superclass,
     * or the constant value NO_INDEX if this class has no superclass
     * (i.e., it is a root class such as Object).
     * 
     * If present, this must be a class type, and not an array or primitive type.
     */

    /**
     * offset from the start of the file to the list of interfaces, or 0 if there are none.
     * 
     * This offset should be in the data section, and the data there should
     * be in the format specified by "type_list" below. Each of the elements
     * of the list must be a class type (not an array or primitive type),
     * and there must not be any duplicates.
     */

    /**
     * index into the string_ids list for the name of the file containing
     * the original source for (at least most of) this class, or the
     * special value NO_INDEX to represent a lack of this information.
     * 
     * The debug_info_item of any given method may override this source file,
     * but the expectation is that most classes will only come from one source file.
     */

    /**
     * offset from the start of the file to the annotations structure for
     * this class, or 0 if there are no annotations on this class.
     * 
     * This offset, if non-zero, should be in the data section, and the data
     * there should be in the format specified by "annotations_directory_item"
     * below,with all items referring to this class as the definer.
     */

    /**
     * offset from the start of the file to the associated class data for this
     * item, or 0 if there is no class data for this class.
     * 
     * (This may be the case, for example, if this class is a marker interface.)
     * 
     * The offset, if non-zero, should be in the data section, and the data
     * there should be in the format specified by "class_data_item" below,
     * with all items referring to this class as the definer.
     */

    /**
     * offset from the start of the file to the list of initial values for
     * static fields, or 0 if there are none (and all static fields are to be
     * initialized with 0 or null).
     * 
     * This offset should be in the data section, and the data there should
     * be in the format specified by "encoded_array_item" below.
     * 
     * The size of the array must be no larger than the number of static fields
     * declared by this class, and the elements correspond to the static fields
     * in the same order as declared in the corresponding field_list.
     * 
     * The type of each array element must match the declared type of its
     * corresponding field.
     * 
     * If there are fewer elements in the array than there are static fields,
     * then the leftover fields are initialized with a type-appropriate 0 or null.
     */

    return ClassDefItem;
  })();

  var EncodedAnnotation = Dex.EncodedAnnotation = (function() {
    function EncodedAnnotation(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedAnnotation.prototype._read = function() {
      this._debug.typeIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.typeIdx = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.typeIdx._read();
      this._debug.typeIdx.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.size._read();
      this._debug.size.end = this._io.pos;
      this._debug.elements = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.elements.arr = [];
      this.elements = [];
      for (var i = 0; i < this.size.value; i++) {
        this._debug.elements.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_elements = new AnnotationElement(this._io, this, this._root);
        try {
          _t_elements._read();
        } finally {
          this.elements.push(_t_elements);
        }
        this._debug.elements.arr[i].end = this._io.pos;
      }
      this._debug.elements.end = this._io.pos;
    }

    /**
     * type of the annotation.
     * 
     * This must be a class (not array or primitive) type.
     */

    /**
     * number of name-value mappings in this annotation
     */

    /**
     * elements of the annotation, represented directly in-line (not as offsets).
     * 
     * Elements must be sorted in increasing order by string_id index.
     */

    return EncodedAnnotation;
  })();

  var EncodedArray = Dex.EncodedArray = (function() {
    function EncodedArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedArray.prototype._read = function() {
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.size._read();
      this._debug.size.end = this._io.pos;
      this._debug.values = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.values.arr = [];
      this.values = [];
      for (var i = 0; i < this.size.value; i++) {
        this._debug.values.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_values = new EncodedValue(this._io, this, this._root);
        try {
          _t_values._read();
        } finally {
          this.values.push(_t_values);
        }
        this._debug.values.arr[i].end = this._io.pos;
      }
      this._debug.values.end = this._io.pos;
    }

    return EncodedArray;
  })();

  var EncodedArrayItem = Dex.EncodedArrayItem = (function() {
    function EncodedArrayItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedArrayItem.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new EncodedArray(this._io, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return EncodedArrayItem;
  })();

  var EncodedField = Dex.EncodedField = (function() {
    function EncodedField(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedField.prototype._read = function() {
      this._debug.fieldIdxDiff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fieldIdxDiff = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.fieldIdxDiff._read();
      this._debug.fieldIdxDiff.end = this._io.pos;
      this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accessFlags = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.accessFlags._read();
      this._debug.accessFlags.end = this._io.pos;
    }

    /**
     * index into the field_ids list for the identity of this field
     * (includes the name and descriptor), represented as a difference
     * from the index of previous element in the list.
     * 
     * The index of the first element in a list is represented directly.
     */

    /**
     * access flags for the field (public, final, etc.).
     * 
     * See "access_flags Definitions" for details.
     */

    return EncodedField;
  })();

  var EncodedMethod = Dex.EncodedMethod = (function() {
    function EncodedMethod(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedMethod.prototype._read = function() {
      this._debug.methodIdxDiff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.methodIdxDiff = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.methodIdxDiff._read();
      this._debug.methodIdxDiff.end = this._io.pos;
      this._debug.accessFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accessFlags = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.accessFlags._read();
      this._debug.accessFlags.end = this._io.pos;
      this._debug.codeOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.codeOff = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
      this.codeOff._read();
      this._debug.codeOff.end = this._io.pos;
    }

    /**
     * index into the method_ids list for the identity of this method
     * (includes the name and descriptor), represented as a difference
     * from the index of previous element in the list.
     * 
     * The index of the first element in a list is represented directly.
     */

    /**
     * access flags for the field (public, final, etc.).
     * 
     * See "access_flags Definitions" for details.
     */

    /**
     * offset from the start of the file to the code structure for this method,
     * or 0 if this method is either abstract or native.
     * 
     * The offset should be to a location in the data section.
     * 
     * The format of the data is specified by "code_item" below.
     */

    return EncodedMethod;
  })();

  var EncodedValue = Dex.EncodedValue = (function() {
    EncodedValue.ValueTypeEnum = Object.freeze({
      BYTE: 0,
      SHORT: 2,
      CHAR: 3,
      INT: 4,
      LONG: 6,
      FLOAT: 16,
      DOUBLE: 17,
      METHOD_TYPE: 21,
      METHOD_HANDLE: 22,
      STRING: 23,
      TYPE: 24,
      FIELD: 25,
      METHOD: 26,
      ENUM: 27,
      ARRAY: 28,
      ANNOTATION: 29,
      NULL: 30,
      BOOLEAN: 31,

      0: "BYTE",
      2: "SHORT",
      3: "CHAR",
      4: "INT",
      6: "LONG",
      16: "FLOAT",
      17: "DOUBLE",
      21: "METHOD_TYPE",
      22: "METHOD_HANDLE",
      23: "STRING",
      24: "TYPE",
      25: "FIELD",
      26: "METHOD",
      27: "ENUM",
      28: "ARRAY",
      29: "ANNOTATION",
      30: "NULL",
      31: "BOOLEAN",
    });

    function EncodedValue(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EncodedValue.prototype._read = function() {
      this._debug.valueArg = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.valueArg = this._io.readBitsIntBe(3);
      this._debug.valueArg.end = this._io.pos;
      this._debug.valueType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Dex.EncodedValue.ValueTypeEnum" };
      this.valueType = this._io.readBitsIntBe(5);
      this._debug.valueType.end = this._io.pos;
      this._io.alignToByte();
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this.valueType) {
      case Dex.EncodedValue.ValueTypeEnum.ANNOTATION:
        this.value = new EncodedAnnotation(this._io, this, this._root);
        this.value._read();
        break;
      case Dex.EncodedValue.ValueTypeEnum.ARRAY:
        this.value = new EncodedArray(this._io, this, this._root);
        this.value._read();
        break;
      case Dex.EncodedValue.ValueTypeEnum.BYTE:
        this.value = this._io.readS1();
        break;
      case Dex.EncodedValue.ValueTypeEnum.CHAR:
        this.value = this._io.readU2le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.DOUBLE:
        this.value = this._io.readF8le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.ENUM:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.FIELD:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.FLOAT:
        this.value = this._io.readF4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.INT:
        this.value = this._io.readS4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.LONG:
        this.value = this._io.readS8le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.METHOD:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.METHOD_HANDLE:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.METHOD_TYPE:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.SHORT:
        this.value = this._io.readS2le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.STRING:
        this.value = this._io.readU4le();
        break;
      case Dex.EncodedValue.ValueTypeEnum.TYPE:
        this.value = this._io.readU4le();
        break;
      }
      this._debug.value.end = this._io.pos;
    }

    return EncodedValue;
  })();

  var FieldIdItem = Dex.FieldIdItem = (function() {
    function FieldIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FieldIdItem.prototype._read = function() {
      this._debug.classIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIdx = this._io.readU2le();
      this._debug.classIdx.end = this._io.pos;
      this._debug.typeIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.typeIdx = this._io.readU2le();
      this._debug.typeIdx.end = this._io.pos;
      this._debug.nameIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIdx = this._io.readU4le();
      this._debug.nameIdx.end = this._io.pos;
    }

    /**
     * the definer of this field
     */
    Object.defineProperty(FieldIdItem.prototype, 'className', {
      get: function() {
        if (this._m_className !== undefined)
          return this._m_className;
        this._debug._m_className = {  };
        this._m_className = this._root.typeIds[this.classIdx].typeName;
        return this._m_className;
      }
    });

    /**
     * the name of this field
     */
    Object.defineProperty(FieldIdItem.prototype, 'fieldName', {
      get: function() {
        if (this._m_fieldName !== undefined)
          return this._m_fieldName;
        this._debug._m_fieldName = {  };
        this._m_fieldName = this._root.stringIds[this.nameIdx].value.data;
        return this._m_fieldName;
      }
    });

    /**
     * the type of this field
     */
    Object.defineProperty(FieldIdItem.prototype, 'typeName', {
      get: function() {
        if (this._m_typeName !== undefined)
          return this._m_typeName;
        this._debug._m_typeName = {  };
        this._m_typeName = this._root.typeIds[this.typeIdx].typeName;
        return this._m_typeName;
      }
    });

    /**
     * index into the type_ids list for the definer of this field.
     * This must be a class type, and not an array or primitive type.
     */

    /**
     * index into the type_ids list for the type of this field
     */

    /**
     * index into the string_ids list for the name of this field.
     * The string must conform to the syntax for MemberName, defined above.
     */

    return FieldIdItem;
  })();

  var HeaderItem = Dex.HeaderItem = (function() {
    HeaderItem.EndianConstant = Object.freeze({
      ENDIAN_CONSTANT: 305419896,
      REVERSE_ENDIAN_CONSTANT: 2018915346,

      305419896: "ENDIAN_CONSTANT",
      2018915346: "REVERSE_ENDIAN_CONSTANT",
    });

    function HeaderItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    HeaderItem.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(4);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([100, 101, 120, 10])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([100, 101, 120, 10]), this.magic, this._io, "/types/header_item/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.versionStr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.versionStr = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(4), 0, false), "ASCII");
      this._debug.versionStr.end = this._io.pos;
      this._debug.checksum = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.checksum = this._io.readU4le();
      this._debug.checksum.end = this._io.pos;
      this._debug.signature = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.signature = this._io.readBytes(20);
      this._debug.signature.end = this._io.pos;
      this._debug.fileSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileSize = this._io.readU4le();
      this._debug.fileSize.end = this._io.pos;
      this._debug.headerSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.headerSize = this._io.readU4le();
      this._debug.headerSize.end = this._io.pos;
      this._debug.endianTag = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Dex.HeaderItem.EndianConstant" };
      this.endianTag = this._io.readU4le();
      this._debug.endianTag.end = this._io.pos;
      this._debug.linkSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.linkSize = this._io.readU4le();
      this._debug.linkSize.end = this._io.pos;
      this._debug.linkOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.linkOff = this._io.readU4le();
      this._debug.linkOff.end = this._io.pos;
      this._debug.mapOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.mapOff = this._io.readU4le();
      this._debug.mapOff.end = this._io.pos;
      this._debug.stringIdsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stringIdsSize = this._io.readU4le();
      this._debug.stringIdsSize.end = this._io.pos;
      this._debug.stringIdsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stringIdsOff = this._io.readU4le();
      this._debug.stringIdsOff.end = this._io.pos;
      this._debug.typeIdsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.typeIdsSize = this._io.readU4le();
      this._debug.typeIdsSize.end = this._io.pos;
      this._debug.typeIdsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.typeIdsOff = this._io.readU4le();
      this._debug.typeIdsOff.end = this._io.pos;
      this._debug.protoIdsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.protoIdsSize = this._io.readU4le();
      this._debug.protoIdsSize.end = this._io.pos;
      this._debug.protoIdsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.protoIdsOff = this._io.readU4le();
      this._debug.protoIdsOff.end = this._io.pos;
      this._debug.fieldIdsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fieldIdsSize = this._io.readU4le();
      this._debug.fieldIdsSize.end = this._io.pos;
      this._debug.fieldIdsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fieldIdsOff = this._io.readU4le();
      this._debug.fieldIdsOff.end = this._io.pos;
      this._debug.methodIdsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.methodIdsSize = this._io.readU4le();
      this._debug.methodIdsSize.end = this._io.pos;
      this._debug.methodIdsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.methodIdsOff = this._io.readU4le();
      this._debug.methodIdsOff.end = this._io.pos;
      this._debug.classDefsSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classDefsSize = this._io.readU4le();
      this._debug.classDefsSize.end = this._io.pos;
      this._debug.classDefsOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classDefsOff = this._io.readU4le();
      this._debug.classDefsOff.end = this._io.pos;
      this._debug.dataSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataSize = this._io.readU4le();
      this._debug.dataSize.end = this._io.pos;
      this._debug.dataOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dataOff = this._io.readU4le();
      this._debug.dataOff.end = this._io.pos;
    }

    /**
     * adler32 checksum of the rest of the file (everything but magic and this field);
     * used to detect file corruption
     */

    /**
     * SHA-1 signature (hash) of the rest of the file (everything but magic, checksum,
     * and this field); used to uniquely identify files
     */

    /**
     * size of the entire file (including the header), in bytes
     */

    /**
     * size of the header (this entire section), in bytes. This allows for at
     * least a limited amount of backwards/forwards compatibility without
     * invalidating the format.
     */

    /**
     * size of the link section, or 0 if this file isn't statically linked
     */

    /**
     * offset from the start of the file to the link section, or 0 if link_size == 0.
     * The offset, if non-zero, should be to an offset into the link_data section.
     * The format of the data pointed at is left unspecified by this document;
     * this header field (and the previous) are left as hooks for use by runtime implementations.
     */

    /**
     * offset from the start of the file to the map item.
     * The offset, which must be non-zero, should be to an offset into the data
     * section, and the data should be in the format specified by "map_list" below.
     */

    /**
     * count of strings in the string identifiers list
     */

    /**
     * offset from the start of the file to the string identifiers list,
     * or 0 if string_ids_size == 0 (admittedly a strange edge case).
     * The offset, if non-zero, should be to the start of the string_ids section.
     */

    /**
     * count of elements in the type identifiers list, at most 65535
     */

    /**
     * offset from the start of the file to the type identifiers list,
     * or 0 if type_ids_size == 0 (admittedly a strange edge case).
     * The offset, if non-zero, should be to the start of the type_ids section.
     */

    /**
     * count of elements in the prototype identifiers list, at most 65535
     */

    /**
     * offset from the start of the file to the prototype identifiers list,
     * or 0 if proto_ids_size == 0 (admittedly a strange edge case).
     * The offset, if non-zero, should be to the start of the proto_ids section.
     */

    /**
     * count of elements in the field identifiers list
     */

    /**
     * offset from the start of the file to the field identifiers list,
     * or 0 if field_ids_size == 0.
     * The offset, if non-zero, should be to the start of the field_ids section.
     */

    /**
     * count of elements in the method identifiers list
     */

    /**
     * offset from the start of the file to the method identifiers list,
     * or 0 if method_ids_size == 0.
     * The offset, if non-zero, should be to the start of the method_ids section.
     */

    /**
     * count of elements in the class definitions list
     */

    /**
     * offset from the start of the file to the class definitions list,
     * or 0 if class_defs_size == 0 (admittedly a strange edge case).
     * The offset, if non-zero, should be to the start of the class_defs section.
     */

    /**
     * Size of data section in bytes. Must be an even multiple of sizeof(uint).
     */

    /**
     * offset from the start of the file to the start of the data section.
     */

    return HeaderItem;
  })();

  var MapItem = Dex.MapItem = (function() {
    MapItem.MapItemType = Object.freeze({
      HEADER_ITEM: 0,
      STRING_ID_ITEM: 1,
      TYPE_ID_ITEM: 2,
      PROTO_ID_ITEM: 3,
      FIELD_ID_ITEM: 4,
      METHOD_ID_ITEM: 5,
      CLASS_DEF_ITEM: 6,
      CALL_SITE_ID_ITEM: 7,
      METHOD_HANDLE_ITEM: 8,
      MAP_LIST: 4096,
      TYPE_LIST: 4097,
      ANNOTATION_SET_REF_LIST: 4098,
      ANNOTATION_SET_ITEM: 4099,
      CLASS_DATA_ITEM: 8192,
      CODE_ITEM: 8193,
      STRING_DATA_ITEM: 8194,
      DEBUG_INFO_ITEM: 8195,
      ANNOTATION_ITEM: 8196,
      ENCODED_ARRAY_ITEM: 8197,
      ANNOTATIONS_DIRECTORY_ITEM: 8198,

      0: "HEADER_ITEM",
      1: "STRING_ID_ITEM",
      2: "TYPE_ID_ITEM",
      3: "PROTO_ID_ITEM",
      4: "FIELD_ID_ITEM",
      5: "METHOD_ID_ITEM",
      6: "CLASS_DEF_ITEM",
      7: "CALL_SITE_ID_ITEM",
      8: "METHOD_HANDLE_ITEM",
      4096: "MAP_LIST",
      4097: "TYPE_LIST",
      4098: "ANNOTATION_SET_REF_LIST",
      4099: "ANNOTATION_SET_ITEM",
      8192: "CLASS_DATA_ITEM",
      8193: "CODE_ITEM",
      8194: "STRING_DATA_ITEM",
      8195: "DEBUG_INFO_ITEM",
      8196: "ANNOTATION_ITEM",
      8197: "ENCODED_ARRAY_ITEM",
      8198: "ANNOTATIONS_DIRECTORY_ITEM",
    });

    function MapItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MapItem.prototype._read = function() {
      this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Dex.MapItem.MapItemType" };
      this.type = this._io.readU2le();
      this._debug.type.end = this._io.pos;
      this._debug.unused = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.unused = this._io.readU2le();
      this._debug.unused.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.offset = this._io.readU4le();
      this._debug.offset.end = this._io.pos;
    }

    /**
     * type of the items; see table below
     */

    /**
     * (unused)
     */

    /**
     * count of the number of items to be found at the indicated offset
     */

    /**
     * offset from the start of the file to the items in question
     */

    return MapItem;
  })();

  var MapList = Dex.MapList = (function() {
    function MapList(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MapList.prototype._read = function() {
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.list = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.list.arr = [];
      this.list = [];
      for (var i = 0; i < this.size; i++) {
        this._debug.list.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_list = new MapItem(this._io, this, this._root);
        try {
          _t_list._read();
        } finally {
          this.list.push(_t_list);
        }
        this._debug.list.arr[i].end = this._io.pos;
      }
      this._debug.list.end = this._io.pos;
    }

    return MapList;
  })();

  var MethodIdItem = Dex.MethodIdItem = (function() {
    function MethodIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    MethodIdItem.prototype._read = function() {
      this._debug.classIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classIdx = this._io.readU2le();
      this._debug.classIdx.end = this._io.pos;
      this._debug.protoIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.protoIdx = this._io.readU2le();
      this._debug.protoIdx.end = this._io.pos;
      this._debug.nameIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameIdx = this._io.readU4le();
      this._debug.nameIdx.end = this._io.pos;
    }

    /**
     * the definer of this method
     */
    Object.defineProperty(MethodIdItem.prototype, 'className', {
      get: function() {
        if (this._m_className !== undefined)
          return this._m_className;
        this._debug._m_className = {  };
        this._m_className = this._root.typeIds[this.classIdx].typeName;
        return this._m_className;
      }
    });

    /**
     * the name of this method
     */
    Object.defineProperty(MethodIdItem.prototype, 'methodName', {
      get: function() {
        if (this._m_methodName !== undefined)
          return this._m_methodName;
        this._debug._m_methodName = {  };
        this._m_methodName = this._root.stringIds[this.nameIdx].value.data;
        return this._m_methodName;
      }
    });

    /**
     * the short-form descriptor of the prototype of this method
     */
    Object.defineProperty(MethodIdItem.prototype, 'protoDesc', {
      get: function() {
        if (this._m_protoDesc !== undefined)
          return this._m_protoDesc;
        this._debug._m_protoDesc = {  };
        this._m_protoDesc = this._root.protoIds[this.protoIdx].shortyDesc;
        return this._m_protoDesc;
      }
    });

    /**
     * index into the type_ids list for the definer of this method.
     * This must be a class or array type, and not a primitive type.
     */

    /**
     * index into the proto_ids list for the prototype of this method
     */

    /**
     * index into the string_ids list for the name of this method.
     * The string must conform to the syntax for MemberName, defined above.
     */

    return MethodIdItem;
  })();

  var ProtoIdItem = Dex.ProtoIdItem = (function() {
    function ProtoIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ProtoIdItem.prototype._read = function() {
      this._debug.shortyIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shortyIdx = this._io.readU4le();
      this._debug.shortyIdx.end = this._io.pos;
      this._debug.returnTypeIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.returnTypeIdx = this._io.readU4le();
      this._debug.returnTypeIdx.end = this._io.pos;
      this._debug.parametersOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.parametersOff = this._io.readU4le();
      this._debug.parametersOff.end = this._io.pos;
    }

    /**
     * list of parameter types for this prototype
     */
    Object.defineProperty(ProtoIdItem.prototype, 'paramsTypes', {
      get: function() {
        if (this._m_paramsTypes !== undefined)
          return this._m_paramsTypes;
        if (this.parametersOff != 0) {
          var io = this._root._io;
          var _pos = io.pos;
          io.seek(this.parametersOff);
          this._debug._m_paramsTypes = { start: io.pos, ioOffset: io.byteOffset };
          this._m_paramsTypes = new TypeList(io, this, this._root);
          this._m_paramsTypes._read();
          this._debug._m_paramsTypes.end = io.pos;
          io.seek(_pos);
        }
        return this._m_paramsTypes;
      }
    });

    /**
     * return type of this prototype
     */
    Object.defineProperty(ProtoIdItem.prototype, 'returnType', {
      get: function() {
        if (this._m_returnType !== undefined)
          return this._m_returnType;
        this._debug._m_returnType = {  };
        this._m_returnType = this._root.typeIds[this.returnTypeIdx].typeName;
        return this._m_returnType;
      }
    });

    /**
     * short-form descriptor string of this prototype, as pointed to by shorty_idx
     */
    Object.defineProperty(ProtoIdItem.prototype, 'shortyDesc', {
      get: function() {
        if (this._m_shortyDesc !== undefined)
          return this._m_shortyDesc;
        this._debug._m_shortyDesc = {  };
        this._m_shortyDesc = this._root.stringIds[this.shortyIdx].value.data;
        return this._m_shortyDesc;
      }
    });

    /**
     * index into the string_ids list for the short-form descriptor string of this prototype.
     * The string must conform to the syntax for ShortyDescriptor, defined above,
     * and must correspond to the return type and parameters of this item.
     */

    /**
     * index into the type_ids list for the return type of this prototype
     */

    /**
     * offset from the start of the file to the list of parameter types for this prototype,
     * or 0 if this prototype has no parameters.
     * This offset, if non-zero, should be in the data section, and the data
     * there should be in the format specified by "type_list" below.
     * Additionally, there should be no reference to the type void in the list.
     */

    return ProtoIdItem;
  })();

  var StringIdItem = Dex.StringIdItem = (function() {
    function StringIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    StringIdItem.prototype._read = function() {
      this._debug.stringDataOff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stringDataOff = this._io.readU4le();
      this._debug.stringDataOff.end = this._io.pos;
    }

    var StringDataItem = StringIdItem.StringDataItem = (function() {
      function StringDataItem(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._debug = {};

      }
      StringDataItem.prototype._read = function() {
        this._debug.utf16Size = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.utf16Size = new VlqBase128Le_.VlqBase128Le(this._io, null, null);
        this.utf16Size._read();
        this._debug.utf16Size.end = this._io.pos;
        this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.data = KaitaiStream.bytesToStr(this._io.readBytes(this.utf16Size.value), "ASCII");
        this._debug.data.end = this._io.pos;
      }

      return StringDataItem;
    })();
    Object.defineProperty(StringIdItem.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        var _pos = this._io.pos;
        this._io.seek(this.stringDataOff);
        this._debug._m_value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_value = new StringDataItem(this._io, this, this._root);
        this._m_value._read();
        this._debug._m_value.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_value;
      }
    });

    /**
     * offset from the start of the file to the string data for this item.
     * The offset should be to a location in the data section, and the data
     * should be in the format specified by "string_data_item" below.
     * There is no alignment requirement for the offset.
     */

    return StringIdItem;
  })();

  var TypeIdItem = Dex.TypeIdItem = (function() {
    function TypeIdItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TypeIdItem.prototype._read = function() {
      this._debug.descriptorIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.descriptorIdx = this._io.readU4le();
      this._debug.descriptorIdx.end = this._io.pos;
    }
    Object.defineProperty(TypeIdItem.prototype, 'typeName', {
      get: function() {
        if (this._m_typeName !== undefined)
          return this._m_typeName;
        this._debug._m_typeName = {  };
        this._m_typeName = this._root.stringIds[this.descriptorIdx].value.data;
        return this._m_typeName;
      }
    });

    /**
     * index into the string_ids list for the descriptor string of this type.
     * The string must conform to the syntax for TypeDescriptor, defined above.
     */

    return TypeIdItem;
  })();

  var TypeItem = Dex.TypeItem = (function() {
    function TypeItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TypeItem.prototype._read = function() {
      this._debug.typeIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.typeIdx = this._io.readU2le();
      this._debug.typeIdx.end = this._io.pos;
    }
    Object.defineProperty(TypeItem.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        this._debug._m_value = {  };
        this._m_value = this._root.typeIds[this.typeIdx].typeName;
        return this._m_value;
      }
    });

    return TypeItem;
  })();

  var TypeList = Dex.TypeList = (function() {
    function TypeList(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    TypeList.prototype._read = function() {
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.list = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.list.arr = [];
      this.list = [];
      for (var i = 0; i < this.size; i++) {
        this._debug.list.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_list = new TypeItem(this._io, this, this._root);
        try {
          _t_list._read();
        } finally {
          this.list.push(_t_list);
        }
        this._debug.list.arr[i].end = this._io.pos;
      }
      this._debug.list.end = this._io.pos;
    }

    return TypeList;
  })();

  /**
   * class definitions list.
   * 
   * The classes must be ordered such that a given class's superclass and
   * implemented interfaces appear in the list earlier than the referring class.
   * 
   * Furthermore, it is invalid for a definition for the same-named class to
   * appear more than once in the list.
   */
  Object.defineProperty(Dex.prototype, 'classDefs', {
    get: function() {
      if (this._m_classDefs !== undefined)
        return this._m_classDefs;
      var _pos = this._io.pos;
      this._io.seek(this.header.classDefsOff);
      this._debug._m_classDefs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_classDefs.arr = [];
      this._m_classDefs = [];
      for (var i = 0; i < this.header.classDefsSize; i++) {
        this._debug._m_classDefs.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_classDefs = new ClassDefItem(this._io, this, this._root);
        try {
          _t__m_classDefs._read();
        } finally {
          this._m_classDefs.push(_t__m_classDefs);
        }
        this._debug._m_classDefs.arr[i].end = this._io.pos;
      }
      this._debug._m_classDefs.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_classDefs;
    }
  });

  /**
   * data area, containing all the support data for the tables listed above.
   * 
   * Different items have different alignment requirements, and padding bytes
   * are inserted before each item if necessary to achieve proper alignment.
   */
  Object.defineProperty(Dex.prototype, 'data', {
    get: function() {
      if (this._m_data !== undefined)
        return this._m_data;
      var _pos = this._io.pos;
      this._io.seek(this.header.dataOff);
      this._debug._m_data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._m_data = this._io.readBytes(this.header.dataSize);
      this._debug._m_data.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_data;
    }
  });

  /**
   * field identifiers list.
   * 
   * These are identifiers for all fields referred to by this file, whether defined in the file or not.
   * 
   * This list must be sorted, where the defining type (by type_id index)
   * is the major order, field name (by string_id index) is the intermediate
   * order, and type (by type_id index) is the minor order.
   * 
   * The list must not contain any duplicate entries.
   */
  Object.defineProperty(Dex.prototype, 'fieldIds', {
    get: function() {
      if (this._m_fieldIds !== undefined)
        return this._m_fieldIds;
      var _pos = this._io.pos;
      this._io.seek(this.header.fieldIdsOff);
      this._debug._m_fieldIds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_fieldIds.arr = [];
      this._m_fieldIds = [];
      for (var i = 0; i < this.header.fieldIdsSize; i++) {
        this._debug._m_fieldIds.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_fieldIds = new FieldIdItem(this._io, this, this._root);
        try {
          _t__m_fieldIds._read();
        } finally {
          this._m_fieldIds.push(_t__m_fieldIds);
        }
        this._debug._m_fieldIds.arr[i].end = this._io.pos;
      }
      this._debug._m_fieldIds.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_fieldIds;
    }
  });

  /**
   * data used in statically linked files.
   * 
   * The format of the data in this section is left unspecified by this document.
   * 
   * This section is empty in unlinked files, and runtime implementations may
   * use it as they see fit.
   */
  Object.defineProperty(Dex.prototype, 'linkData', {
    get: function() {
      if (this._m_linkData !== undefined)
        return this._m_linkData;
      var _pos = this._io.pos;
      this._io.seek(this.header.linkOff);
      this._debug._m_linkData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._m_linkData = this._io.readBytes(this.header.linkSize);
      this._debug._m_linkData.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_linkData;
    }
  });
  Object.defineProperty(Dex.prototype, 'map', {
    get: function() {
      if (this._m_map !== undefined)
        return this._m_map;
      var _pos = this._io.pos;
      this._io.seek(this.header.mapOff);
      this._debug._m_map = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._m_map = new MapList(this._io, this, this._root);
      this._m_map._read();
      this._debug._m_map.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_map;
    }
  });

  /**
   * method identifiers list.
   * 
   * These are identifiers for all methods referred to by this file,
   * whether defined in the file or not.
   * 
   * This list must be sorted, where the defining type (by type_id index
   * is the major order, method name (by string_id index) is the intermediate
   * order, and method prototype (by proto_id index) is the minor order.
   * 
   * The list must not contain any duplicate entries.
   */
  Object.defineProperty(Dex.prototype, 'methodIds', {
    get: function() {
      if (this._m_methodIds !== undefined)
        return this._m_methodIds;
      var _pos = this._io.pos;
      this._io.seek(this.header.methodIdsOff);
      this._debug._m_methodIds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_methodIds.arr = [];
      this._m_methodIds = [];
      for (var i = 0; i < this.header.methodIdsSize; i++) {
        this._debug._m_methodIds.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_methodIds = new MethodIdItem(this._io, this, this._root);
        try {
          _t__m_methodIds._read();
        } finally {
          this._m_methodIds.push(_t__m_methodIds);
        }
        this._debug._m_methodIds.arr[i].end = this._io.pos;
      }
      this._debug._m_methodIds.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_methodIds;
    }
  });

  /**
   * method prototype identifiers list.
   * 
   * These are identifiers for all prototypes referred to by this file.
   * 
   * This list must be sorted in return-type (by type_id index) major order,
   * and then by argument list (lexicographic ordering, individual arguments
   * ordered by type_id index). The list must not contain any duplicate entries.
   */
  Object.defineProperty(Dex.prototype, 'protoIds', {
    get: function() {
      if (this._m_protoIds !== undefined)
        return this._m_protoIds;
      var _pos = this._io.pos;
      this._io.seek(this.header.protoIdsOff);
      this._debug._m_protoIds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_protoIds.arr = [];
      this._m_protoIds = [];
      for (var i = 0; i < this.header.protoIdsSize; i++) {
        this._debug._m_protoIds.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_protoIds = new ProtoIdItem(this._io, this, this._root);
        try {
          _t__m_protoIds._read();
        } finally {
          this._m_protoIds.push(_t__m_protoIds);
        }
        this._debug._m_protoIds.arr[i].end = this._io.pos;
      }
      this._debug._m_protoIds.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_protoIds;
    }
  });

  /**
   * string identifiers list.
   * 
   * These are identifiers for all the strings used by this file, either for
   * internal naming (e.g., type descriptors) or as constant objects referred to by code.
   * 
   * This list must be sorted by string contents, using UTF-16 code point values
   * (not in a locale-sensitive manner), and it must not contain any duplicate entries.
   */
  Object.defineProperty(Dex.prototype, 'stringIds', {
    get: function() {
      if (this._m_stringIds !== undefined)
        return this._m_stringIds;
      var _pos = this._io.pos;
      this._io.seek(this.header.stringIdsOff);
      this._debug._m_stringIds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_stringIds.arr = [];
      this._m_stringIds = [];
      for (var i = 0; i < this.header.stringIdsSize; i++) {
        this._debug._m_stringIds.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_stringIds = new StringIdItem(this._io, this, this._root);
        try {
          _t__m_stringIds._read();
        } finally {
          this._m_stringIds.push(_t__m_stringIds);
        }
        this._debug._m_stringIds.arr[i].end = this._io.pos;
      }
      this._debug._m_stringIds.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_stringIds;
    }
  });

  /**
   * type identifiers list.
   * 
   * These are identifiers for all types (classes, arrays, or primitive types)
   * referred to by this file, whether defined in the file or not.
   * 
   * This list must be sorted by string_id index, and it must not contain any duplicate entries.
   */
  Object.defineProperty(Dex.prototype, 'typeIds', {
    get: function() {
      if (this._m_typeIds !== undefined)
        return this._m_typeIds;
      var _pos = this._io.pos;
      this._io.seek(this.header.typeIdsOff);
      this._debug._m_typeIds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug._m_typeIds.arr = [];
      this._m_typeIds = [];
      for (var i = 0; i < this.header.typeIdsSize; i++) {
        this._debug._m_typeIds.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t__m_typeIds = new TypeIdItem(this._io, this, this._root);
        try {
          _t__m_typeIds._read();
        } finally {
          this._m_typeIds.push(_t__m_typeIds);
        }
        this._debug._m_typeIds.arr[i].end = this._io.pos;
      }
      this._debug._m_typeIds.end = this._io.pos;
      this._io.seek(_pos);
      return this._m_typeIds;
    }
  });

  return Dex;
})();
Dex_.Dex = Dex;
});
