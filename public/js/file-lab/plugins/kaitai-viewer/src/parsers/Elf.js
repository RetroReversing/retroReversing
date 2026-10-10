// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'));
  } else {
    factory(root.Elf || (root.Elf = {}), root.KaitaiStream);
  }
})(typeof self !== 'undefined' ? self : this, function (Elf_, KaitaiStream) {
/**
 * @see {@link https://sourceware.org/git/?p=glibc.git;a=blob;f=elf/elf.h;hb=0f62fe0532|Source}
 * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/contents.html|Source}
 * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/elf-application-binary-interface.html|Source}
 */

var Elf = (function() {
  Elf.Bits = Object.freeze({
    B32: 1,
    B64: 2,

    1: "B32",
    2: "B64",
  });

  Elf.DynamicArrayTags = Object.freeze({
    NULL: 0,
    NEEDED: 1,
    PLTRELSZ: 2,
    PLTGOT: 3,
    HASH: 4,
    STRTAB: 5,
    SYMTAB: 6,
    RELA: 7,
    RELASZ: 8,
    RELAENT: 9,
    STRSZ: 10,
    SYMENT: 11,
    INIT: 12,
    FINI: 13,
    SONAME: 14,
    RPATH: 15,
    SYMBOLIC: 16,
    REL: 17,
    RELSZ: 18,
    RELENT: 19,
    PLTREL: 20,
    DEBUG: 21,
    TEXTREL: 22,
    JMPREL: 23,
    BIND_NOW: 24,
    INIT_ARRAY: 25,
    FINI_ARRAY: 26,
    INIT_ARRAYSZ: 27,
    FINI_ARRAYSZ: 28,
    RUNPATH: 29,
    FLAGS: 30,
    PREINIT_ARRAY: 32,
    PREINIT_ARRAYSZ: 33,
    SYMTAB_SHNDX: 34,
    RELRSZ: 35,
    RELR: 36,
    RELRENT: 37,
    DEPRECATED_SPARC_REGISTER: 117440513,
    SUNW_AUXILIARY: 1610612749,
    SUNW_RTLDINF: 1610612750,
    SUNW_FILTER: 1610612751,
    SUNW_CAP: 1610612752,
    SUNW_SYMTAB: 1610612753,
    SUNW_SYMSZ: 1610612754,
    SUNW_SORTENT: 1610612755,
    SUNW_SYMSORT: 1610612756,
    SUNW_SYMSORTSZ: 1610612757,
    SUNW_TLSSORT: 1610612758,
    SUNW_TLSSORTSZ: 1610612759,
    SUNW_CAPINFO: 1610612760,
    SUNW_STRPAD: 1610612761,
    SUNW_CAPCHAIN: 1610612762,
    SUNW_LDMACH: 1610612763,
    SUNW_SYMTAB_SHNDX: 1610612764,
    SUNW_CAPCHAINENT: 1610612765,
    SUNW_DEFERRED: 1610612766,
    SUNW_CAPCHAINSZ: 1610612767,
    SUNW_PHNAME: 1610612768,
    SUNW_PARENT: 1610612769,
    SUNW_SX_ASLR: 1610612771,
    SUNW_RELAX: 1610612773,
    SUNW_KMOD: 1610612775,
    SUNW_SX_NXHEAP: 1610612777,
    SUNW_SX_NXSTACK: 1610612779,
    SUNW_SX_ADIHEAP: 1610612781,
    SUNW_SX_ADISTACK: 1610612783,
    SUNW_SX_SSBD: 1610612785,
    SUNW_SYMNSORT: 1610612786,
    SUNW_SYMNSORTSZ: 1610612787,
    GNU_FLAGS_1: 1879047668,
    GNU_PRELINKED: 1879047669,
    GNU_CONFLICTSZ: 1879047670,
    GNU_LIBLISTSZ: 1879047671,
    CHECKSUM: 1879047672,
    PLTPADSZ: 1879047673,
    MOVEENT: 1879047674,
    MOVESZ: 1879047675,
    FEATURE_1: 1879047676,
    POSFLAG_1: 1879047677,
    SYMINSZ: 1879047678,
    SYMINENT: 1879047679,
    GNU_HASH: 1879047925,
    TLSDESC_PLT: 1879047926,
    TLSDESC_GOT: 1879047927,
    GNU_CONFLICT: 1879047928,
    GNU_LIBLIST: 1879047929,
    CONFIG: 1879047930,
    DEPAUDIT: 1879047931,
    AUDIT: 1879047932,
    PLTPAD: 1879047933,
    MOVETAB: 1879047934,
    SYMINFO: 1879047935,
    VERSYM: 1879048176,
    RELACOUNT: 1879048185,
    RELCOUNT: 1879048186,
    FLAGS_1: 1879048187,
    VERDEF: 1879048188,
    VERDEFNUM: 1879048189,
    VERNEED: 1879048190,
    VERNEEDNUM: 1879048191,
    SPARC_REGISTER: 1879048193,
    AUXILIARY: 2147483645,
    USED: 2147483646,
    FILTER: 2147483647,

    0: "NULL",
    1: "NEEDED",
    2: "PLTRELSZ",
    3: "PLTGOT",
    4: "HASH",
    5: "STRTAB",
    6: "SYMTAB",
    7: "RELA",
    8: "RELASZ",
    9: "RELAENT",
    10: "STRSZ",
    11: "SYMENT",
    12: "INIT",
    13: "FINI",
    14: "SONAME",
    15: "RPATH",
    16: "SYMBOLIC",
    17: "REL",
    18: "RELSZ",
    19: "RELENT",
    20: "PLTREL",
    21: "DEBUG",
    22: "TEXTREL",
    23: "JMPREL",
    24: "BIND_NOW",
    25: "INIT_ARRAY",
    26: "FINI_ARRAY",
    27: "INIT_ARRAYSZ",
    28: "FINI_ARRAYSZ",
    29: "RUNPATH",
    30: "FLAGS",
    32: "PREINIT_ARRAY",
    33: "PREINIT_ARRAYSZ",
    34: "SYMTAB_SHNDX",
    35: "RELRSZ",
    36: "RELR",
    37: "RELRENT",
    117440513: "DEPRECATED_SPARC_REGISTER",
    1610612749: "SUNW_AUXILIARY",
    1610612750: "SUNW_RTLDINF",
    1610612751: "SUNW_FILTER",
    1610612752: "SUNW_CAP",
    1610612753: "SUNW_SYMTAB",
    1610612754: "SUNW_SYMSZ",
    1610612755: "SUNW_SORTENT",
    1610612756: "SUNW_SYMSORT",
    1610612757: "SUNW_SYMSORTSZ",
    1610612758: "SUNW_TLSSORT",
    1610612759: "SUNW_TLSSORTSZ",
    1610612760: "SUNW_CAPINFO",
    1610612761: "SUNW_STRPAD",
    1610612762: "SUNW_CAPCHAIN",
    1610612763: "SUNW_LDMACH",
    1610612764: "SUNW_SYMTAB_SHNDX",
    1610612765: "SUNW_CAPCHAINENT",
    1610612766: "SUNW_DEFERRED",
    1610612767: "SUNW_CAPCHAINSZ",
    1610612768: "SUNW_PHNAME",
    1610612769: "SUNW_PARENT",
    1610612771: "SUNW_SX_ASLR",
    1610612773: "SUNW_RELAX",
    1610612775: "SUNW_KMOD",
    1610612777: "SUNW_SX_NXHEAP",
    1610612779: "SUNW_SX_NXSTACK",
    1610612781: "SUNW_SX_ADIHEAP",
    1610612783: "SUNW_SX_ADISTACK",
    1610612785: "SUNW_SX_SSBD",
    1610612786: "SUNW_SYMNSORT",
    1610612787: "SUNW_SYMNSORTSZ",
    1879047668: "GNU_FLAGS_1",
    1879047669: "GNU_PRELINKED",
    1879047670: "GNU_CONFLICTSZ",
    1879047671: "GNU_LIBLISTSZ",
    1879047672: "CHECKSUM",
    1879047673: "PLTPADSZ",
    1879047674: "MOVEENT",
    1879047675: "MOVESZ",
    1879047676: "FEATURE_1",
    1879047677: "POSFLAG_1",
    1879047678: "SYMINSZ",
    1879047679: "SYMINENT",
    1879047925: "GNU_HASH",
    1879047926: "TLSDESC_PLT",
    1879047927: "TLSDESC_GOT",
    1879047928: "GNU_CONFLICT",
    1879047929: "GNU_LIBLIST",
    1879047930: "CONFIG",
    1879047931: "DEPAUDIT",
    1879047932: "AUDIT",
    1879047933: "PLTPAD",
    1879047934: "MOVETAB",
    1879047935: "SYMINFO",
    1879048176: "VERSYM",
    1879048185: "RELACOUNT",
    1879048186: "RELCOUNT",
    1879048187: "FLAGS_1",
    1879048188: "VERDEF",
    1879048189: "VERDEFNUM",
    1879048190: "VERNEED",
    1879048191: "VERNEEDNUM",
    1879048193: "SPARC_REGISTER",
    2147483645: "AUXILIARY",
    2147483646: "USED",
    2147483647: "FILTER",
  });

  Elf.Endian = Object.freeze({
    LE: 1,
    BE: 2,

    1: "LE",
    2: "BE",
  });

  Elf.Machine = Object.freeze({
    NO_MACHINE: 0,
    M32: 1,
    SPARC: 2,
    X86: 3,
    M68K: 4,
    M88K: 5,
    IAMCU: 6,
    I860: 7,
    MIPS: 8,
    S370: 9,
    MIPS_RS3_LE: 10,
    PARISC: 15,
    VPP500: 17,
    SPARC32PLUS: 18,
    I960: 19,
    POWERPC: 20,
    POWERPC64: 21,
    S390: 22,
    SPU: 23,
    V800: 36,
    FR20: 37,
    RH32: 38,
    RCE: 39,
    ARM: 40,
    OLD_ALPHA: 41,
    SUPERH: 42,
    SPARC_V9: 43,
    TRICORE: 44,
    ARC: 45,
    H8_300: 46,
    H8_300H: 47,
    H8S: 48,
    H8_500: 49,
    IA_64: 50,
    MIPS_X: 51,
    COLDFIRE: 52,
    M68HC12: 53,
    MMA: 54,
    PCP: 55,
    NCPU: 56,
    NDR1: 57,
    STARCORE: 58,
    ME16: 59,
    ST100: 60,
    TINYJ: 61,
    X86_64: 62,
    PDSP: 63,
    PDP10: 64,
    PDP11: 65,
    FX66: 66,
    ST9PLUS: 67,
    ST7: 68,
    MC68HC16: 69,
    MC68HC11: 70,
    MC68HC08: 71,
    MC68HC05: 72,
    SVX: 73,
    ST19: 74,
    VAX: 75,
    CRIS: 76,
    JAVELIN: 77,
    FIREPATH: 78,
    ZSP: 79,
    MMIX: 80,
    HUANY: 81,
    PRISM: 82,
    AVR: 83,
    FR30: 84,
    D10V: 85,
    D30V: 86,
    V850: 87,
    M32R: 88,
    MN10300: 89,
    MN10200: 90,
    PICOJAVA: 91,
    OPENRISC: 92,
    ARC_COMPACT: 93,
    XTENSA: 94,
    VIDEOCORE: 95,
    TMM_GPP: 96,
    NS32K: 97,
    TPC: 98,
    SNP1K: 99,
    ST200: 100,
    IP2K: 101,
    MAX: 102,
    COMPACT_RISC: 103,
    F2MC16: 104,
    MSP430: 105,
    BLACKFIN: 106,
    SE_C33: 107,
    SEP: 108,
    ARCA: 109,
    UNICORE: 110,
    EXCESS: 111,
    DXP: 112,
    ALTERA_NIOS2: 113,
    CRX: 114,
    XGATE: 115,
    C166: 116,
    M16C: 117,
    DSPIC30F: 118,
    FREESCALE_CE: 119,
    M32C: 120,
    TSK3000: 131,
    RS08: 132,
    SHARC: 133,
    ECOG2: 134,
    SCORE7: 135,
    DSP24: 136,
    VIDEOCORE3: 137,
    LATTICEMICO32: 138,
    SE_C17: 139,
    TI_C6000: 140,
    TI_C2000: 141,
    TI_C5500: 142,
    TI_ARP32: 143,
    TI_PRU: 144,
    MMDSP_PLUS: 160,
    CYPRESS_M8C: 161,
    R32C: 162,
    TRIMEDIA: 163,
    QDSP6: 164,
    I8051: 165,
    STXP7X: 166,
    NDS32: 167,
    ECOG1X: 168,
    MAXQ30: 169,
    XIMO16: 170,
    MANIK: 171,
    CRAYNV2: 172,
    RX: 173,
    METAG: 174,
    MCST_ELBRUS: 175,
    ECOG16: 176,
    CR16: 177,
    ETPU: 178,
    SLE9X: 179,
    L10M: 180,
    K10M: 181,
    AARCH64: 183,
    AVR32: 185,
    STM8: 186,
    TILE64: 187,
    TILEPRO: 188,
    MICROBLAZE: 189,
    CUDA: 190,
    TILEGX: 191,
    CLOUDSHIELD: 192,
    COREA_1ST: 193,
    COREA_2ND: 194,
    ARCV2: 195,
    OPEN8: 196,
    RL78: 197,
    VIDEOCORE5: 198,
    RENESAS_78KOR: 199,
    FREESCALE_56800EX: 200,
    BA1: 201,
    BA2: 202,
    XCORE: 203,
    MCHP_PIC: 204,
    INTELGT: 205,
    INTEL206: 206,
    INTEL207: 207,
    INTEL208: 208,
    INTEL209: 209,
    KM32: 210,
    KMX32: 211,
    KMX16: 212,
    KMX8: 213,
    KVARC: 214,
    CDP: 215,
    COGE: 216,
    COOL: 217,
    NORC: 218,
    CSR_KALIMBA: 219,
    Z80: 220,
    VISIUM: 221,
    FT32: 222,
    MOXIE: 223,
    AMD_GPU: 224,
    RISCV: 243,
    LANAI: 244,
    CEVA: 245,
    CEVA_X2: 246,
    BPF: 247,
    GRAPHCORE_IPU: 248,
    IMG1: 249,
    NFP: 250,
    VE: 251,
    CSKY: 252,
    ARC_COMPACT3_64: 253,
    MCS6502: 254,
    ARC_COMPACT3: 255,
    KVX: 256,
    WDC65816: 257,
    LOONGARCH: 258,
    KF32: 259,
    U16_U8CORE: 260,
    TACHYUM: 261,
    NXP_56800EF: 262,
    AVR_OLD: 4183,
    MSP430_OLD: 4185,
    ADAPTEVA_EPIPHANY: 4643,
    MT: 9520,
    CYGNUS_FR30: 13104,
    WEBASSEMBLY: 16727,
    XC16X: 18056,
    S12Z: 19951,
    CYGNUS_FRV: 21569,
    DLX: 23205,
    CYGNUS_D10V: 30288,
    CYGNUS_D30V: 30326,
    IP2K_OLD: 33303,
    CYGNUS_POWERPC: 36901,
    ALPHA: 36902,
    CYGNUS_M32R: 36929,
    CYGNUS_V850: 36992,
    S390_OLD: 41872,
    XTENSA_OLD: 43975,
    XSTORMY16: 44357,
    MICROBLAZE_OLD: 47787,
    CYGNUS_MN10300: 48879,
    CYGNUS_MN10200: 57005,
    CYGNUS_MEP: 61453,
    M32C_OLD: 65200,
    IQ2000: 65210,
    NIOS32: 65211,
    MOXIE_OLD: 65261,

    0: "NO_MACHINE",
    1: "M32",
    2: "SPARC",
    3: "X86",
    4: "M68K",
    5: "M88K",
    6: "IAMCU",
    7: "I860",
    8: "MIPS",
    9: "S370",
    10: "MIPS_RS3_LE",
    15: "PARISC",
    17: "VPP500",
    18: "SPARC32PLUS",
    19: "I960",
    20: "POWERPC",
    21: "POWERPC64",
    22: "S390",
    23: "SPU",
    36: "V800",
    37: "FR20",
    38: "RH32",
    39: "RCE",
    40: "ARM",
    41: "OLD_ALPHA",
    42: "SUPERH",
    43: "SPARC_V9",
    44: "TRICORE",
    45: "ARC",
    46: "H8_300",
    47: "H8_300H",
    48: "H8S",
    49: "H8_500",
    50: "IA_64",
    51: "MIPS_X",
    52: "COLDFIRE",
    53: "M68HC12",
    54: "MMA",
    55: "PCP",
    56: "NCPU",
    57: "NDR1",
    58: "STARCORE",
    59: "ME16",
    60: "ST100",
    61: "TINYJ",
    62: "X86_64",
    63: "PDSP",
    64: "PDP10",
    65: "PDP11",
    66: "FX66",
    67: "ST9PLUS",
    68: "ST7",
    69: "MC68HC16",
    70: "MC68HC11",
    71: "MC68HC08",
    72: "MC68HC05",
    73: "SVX",
    74: "ST19",
    75: "VAX",
    76: "CRIS",
    77: "JAVELIN",
    78: "FIREPATH",
    79: "ZSP",
    80: "MMIX",
    81: "HUANY",
    82: "PRISM",
    83: "AVR",
    84: "FR30",
    85: "D10V",
    86: "D30V",
    87: "V850",
    88: "M32R",
    89: "MN10300",
    90: "MN10200",
    91: "PICOJAVA",
    92: "OPENRISC",
    93: "ARC_COMPACT",
    94: "XTENSA",
    95: "VIDEOCORE",
    96: "TMM_GPP",
    97: "NS32K",
    98: "TPC",
    99: "SNP1K",
    100: "ST200",
    101: "IP2K",
    102: "MAX",
    103: "COMPACT_RISC",
    104: "F2MC16",
    105: "MSP430",
    106: "BLACKFIN",
    107: "SE_C33",
    108: "SEP",
    109: "ARCA",
    110: "UNICORE",
    111: "EXCESS",
    112: "DXP",
    113: "ALTERA_NIOS2",
    114: "CRX",
    115: "XGATE",
    116: "C166",
    117: "M16C",
    118: "DSPIC30F",
    119: "FREESCALE_CE",
    120: "M32C",
    131: "TSK3000",
    132: "RS08",
    133: "SHARC",
    134: "ECOG2",
    135: "SCORE7",
    136: "DSP24",
    137: "VIDEOCORE3",
    138: "LATTICEMICO32",
    139: "SE_C17",
    140: "TI_C6000",
    141: "TI_C2000",
    142: "TI_C5500",
    143: "TI_ARP32",
    144: "TI_PRU",
    160: "MMDSP_PLUS",
    161: "CYPRESS_M8C",
    162: "R32C",
    163: "TRIMEDIA",
    164: "QDSP6",
    165: "I8051",
    166: "STXP7X",
    167: "NDS32",
    168: "ECOG1X",
    169: "MAXQ30",
    170: "XIMO16",
    171: "MANIK",
    172: "CRAYNV2",
    173: "RX",
    174: "METAG",
    175: "MCST_ELBRUS",
    176: "ECOG16",
    177: "CR16",
    178: "ETPU",
    179: "SLE9X",
    180: "L10M",
    181: "K10M",
    183: "AARCH64",
    185: "AVR32",
    186: "STM8",
    187: "TILE64",
    188: "TILEPRO",
    189: "MICROBLAZE",
    190: "CUDA",
    191: "TILEGX",
    192: "CLOUDSHIELD",
    193: "COREA_1ST",
    194: "COREA_2ND",
    195: "ARCV2",
    196: "OPEN8",
    197: "RL78",
    198: "VIDEOCORE5",
    199: "RENESAS_78KOR",
    200: "FREESCALE_56800EX",
    201: "BA1",
    202: "BA2",
    203: "XCORE",
    204: "MCHP_PIC",
    205: "INTELGT",
    206: "INTEL206",
    207: "INTEL207",
    208: "INTEL208",
    209: "INTEL209",
    210: "KM32",
    211: "KMX32",
    212: "KMX16",
    213: "KMX8",
    214: "KVARC",
    215: "CDP",
    216: "COGE",
    217: "COOL",
    218: "NORC",
    219: "CSR_KALIMBA",
    220: "Z80",
    221: "VISIUM",
    222: "FT32",
    223: "MOXIE",
    224: "AMD_GPU",
    243: "RISCV",
    244: "LANAI",
    245: "CEVA",
    246: "CEVA_X2",
    247: "BPF",
    248: "GRAPHCORE_IPU",
    249: "IMG1",
    250: "NFP",
    251: "VE",
    252: "CSKY",
    253: "ARC_COMPACT3_64",
    254: "MCS6502",
    255: "ARC_COMPACT3",
    256: "KVX",
    257: "WDC65816",
    258: "LOONGARCH",
    259: "KF32",
    260: "U16_U8CORE",
    261: "TACHYUM",
    262: "NXP_56800EF",
    4183: "AVR_OLD",
    4185: "MSP430_OLD",
    4643: "ADAPTEVA_EPIPHANY",
    9520: "MT",
    13104: "CYGNUS_FR30",
    16727: "WEBASSEMBLY",
    18056: "XC16X",
    19951: "S12Z",
    21569: "CYGNUS_FRV",
    23205: "DLX",
    30288: "CYGNUS_D10V",
    30326: "CYGNUS_D30V",
    33303: "IP2K_OLD",
    36901: "CYGNUS_POWERPC",
    36902: "ALPHA",
    36929: "CYGNUS_M32R",
    36992: "CYGNUS_V850",
    41872: "S390_OLD",
    43975: "XTENSA_OLD",
    44357: "XSTORMY16",
    47787: "MICROBLAZE_OLD",
    48879: "CYGNUS_MN10300",
    57005: "CYGNUS_MN10200",
    61453: "CYGNUS_MEP",
    65200: "M32C_OLD",
    65210: "IQ2000",
    65211: "NIOS32",
    65261: "MOXIE_OLD",
  });

  Elf.ObjType = Object.freeze({
    NO_FILE_TYPE: 0,
    RELOCATABLE: 1,
    EXECUTABLE: 2,
    SHARED: 3,
    CORE: 4,

    0: "NO_FILE_TYPE",
    1: "RELOCATABLE",
    2: "EXECUTABLE",
    3: "SHARED",
    4: "CORE",
  });

  Elf.OsAbi = Object.freeze({
    SYSTEM_V: 0,
    HP_UX: 1,
    NETBSD: 2,
    GNU: 3,
    SOLARIS: 6,
    AIX: 7,
    IRIX: 8,
    FREEBSD: 9,
    TRU64: 10,
    MODESTO: 11,
    OPENBSD: 12,
    OPENVMS: 13,
    NSK: 14,
    AROS: 15,
    FENIXOS: 16,
    CLOUDABI: 17,
    OPENVOS: 18,

    0: "SYSTEM_V",
    1: "HP_UX",
    2: "NETBSD",
    3: "GNU",
    6: "SOLARIS",
    7: "AIX",
    8: "IRIX",
    9: "FREEBSD",
    10: "TRU64",
    11: "MODESTO",
    12: "OPENBSD",
    13: "OPENVMS",
    14: "NSK",
    15: "AROS",
    16: "FENIXOS",
    17: "CLOUDABI",
    18: "OPENVOS",
  });

  Elf.PhType = Object.freeze({
    NULL_TYPE: 0,
    LOAD: 1,
    DYNAMIC: 2,
    INTERP: 3,
    NOTE: 4,
    SHLIB: 5,
    PHDR: 6,
    TLS: 7,
    GNU_EH_FRAME: 1685382480,
    GNU_STACK: 1685382481,
    GNU_RELRO: 1685382482,
    GNU_PROPERTY: 1685382483,
    PAX_FLAGS: 1694766464,
    ARM_EXIDX: 1879048193,

    0: "NULL_TYPE",
    1: "LOAD",
    2: "DYNAMIC",
    3: "INTERP",
    4: "NOTE",
    5: "SHLIB",
    6: "PHDR",
    7: "TLS",
    1685382480: "GNU_EH_FRAME",
    1685382481: "GNU_STACK",
    1685382482: "GNU_RELRO",
    1685382483: "GNU_PROPERTY",
    1694766464: "PAX_FLAGS",
    1879048193: "ARM_EXIDX",
  });

  Elf.SectionHeaderIdxSpecial = Object.freeze({
    UNDEFINED: 0,
    BEFORE: 65280,
    AFTER: 65281,
    AMD64_LCOMMON: 65282,
    SUNW_IGNORE: 65343,
    ABS: 65521,
    COMMON: 65522,
    XINDEX: 65535,

    0: "UNDEFINED",
    65280: "BEFORE",
    65281: "AFTER",
    65282: "AMD64_LCOMMON",
    65343: "SUNW_IGNORE",
    65521: "ABS",
    65522: "COMMON",
    65535: "XINDEX",
  });

  Elf.ShType = Object.freeze({
    NULL_TYPE: 0,
    PROGBITS: 1,
    SYMTAB: 2,
    STRTAB: 3,
    RELA: 4,
    HASH: 5,
    DYNAMIC: 6,
    NOTE: 7,
    NOBITS: 8,
    REL: 9,
    SHLIB: 10,
    DYNSYM: 11,
    INIT_ARRAY: 14,
    FINI_ARRAY: 15,
    PREINIT_ARRAY: 16,
    GROUP: 17,
    SYMTAB_SHNDX: 18,
    RELR: 19,
    SUNW_SYMNSORT: 1879048172,
    SUNW_PHNAME: 1879048173,
    SUNW_ANCILLARY: 1879048174,
    SUNW_CAPCHAIN: 1879048175,
    SUNW_CAPINFO: 1879048176,
    SUNW_SYMSORT: 1879048177,
    SUNW_TLSSORT: 1879048178,
    SUNW_LDYNSYM: 1879048179,
    SUNW_DOF: 1879048180,
    SUNW_CAP: 1879048181,
    SUNW_SIGNATURE: 1879048182,
    SUNW_ANNOTATE: 1879048183,
    SUNW_DEBUGSTR: 1879048184,
    SUNW_DEBUG: 1879048185,
    SUNW_MOVE: 1879048186,
    SUNW_COMDAT: 1879048187,
    SUNW_SYMINFO: 1879048188,
    SUNW_VERDEF: 1879048189,
    SUNW_VERNEED: 1879048190,
    SUNW_VERSYM: 1879048191,
    SPARC_GOTDATA: 1879048192,
    AMD64_UNWIND: 1879048193,
    ARM_PREEMPTMAP: 1879048194,
    ARM_ATTRIBUTES: 1879048195,
    ARM_DEBUGOVERLAY: 1879048196,
    ARM_OVERLAYSECTION: 1879048197,

    0: "NULL_TYPE",
    1: "PROGBITS",
    2: "SYMTAB",
    3: "STRTAB",
    4: "RELA",
    5: "HASH",
    6: "DYNAMIC",
    7: "NOTE",
    8: "NOBITS",
    9: "REL",
    10: "SHLIB",
    11: "DYNSYM",
    14: "INIT_ARRAY",
    15: "FINI_ARRAY",
    16: "PREINIT_ARRAY",
    17: "GROUP",
    18: "SYMTAB_SHNDX",
    19: "RELR",
    1879048172: "SUNW_SYMNSORT",
    1879048173: "SUNW_PHNAME",
    1879048174: "SUNW_ANCILLARY",
    1879048175: "SUNW_CAPCHAIN",
    1879048176: "SUNW_CAPINFO",
    1879048177: "SUNW_SYMSORT",
    1879048178: "SUNW_TLSSORT",
    1879048179: "SUNW_LDYNSYM",
    1879048180: "SUNW_DOF",
    1879048181: "SUNW_CAP",
    1879048182: "SUNW_SIGNATURE",
    1879048183: "SUNW_ANNOTATE",
    1879048184: "SUNW_DEBUGSTR",
    1879048185: "SUNW_DEBUG",
    1879048186: "SUNW_MOVE",
    1879048187: "SUNW_COMDAT",
    1879048188: "SUNW_SYMINFO",
    1879048189: "SUNW_VERDEF",
    1879048190: "SUNW_VERNEED",
    1879048191: "SUNW_VERSYM",
    1879048192: "SPARC_GOTDATA",
    1879048193: "AMD64_UNWIND",
    1879048194: "ARM_PREEMPTMAP",
    1879048195: "ARM_ATTRIBUTES",
    1879048196: "ARM_DEBUGOVERLAY",
    1879048197: "ARM_OVERLAYSECTION",
  });

  Elf.SymbolBinding = Object.freeze({
    LOCAL: 0,
    GLOBAL_SYMBOL: 1,
    WEAK: 2,
    OS10: 10,
    OS11: 11,
    OS12: 12,
    PROC13: 13,
    PROC14: 14,
    PROC15: 15,

    0: "LOCAL",
    1: "GLOBAL_SYMBOL",
    2: "WEAK",
    10: "OS10",
    11: "OS11",
    12: "OS12",
    13: "PROC13",
    14: "PROC14",
    15: "PROC15",
  });

  Elf.SymbolType = Object.freeze({
    NO_TYPE: 0,
    OBJECT: 1,
    FUNC: 2,
    SECTION: 3,
    FILE: 4,
    COMMON: 5,
    TLS: 6,
    RELC: 8,
    SRELC: 9,
    GNU_IFUNC: 10,
    OS11: 11,
    OS12: 12,
    PROC13: 13,
    PROC14: 14,
    PROC15: 15,

    0: "NO_TYPE",
    1: "OBJECT",
    2: "FUNC",
    3: "SECTION",
    4: "FILE",
    5: "COMMON",
    6: "TLS",
    8: "RELC",
    9: "SRELC",
    10: "GNU_IFUNC",
    11: "OS11",
    12: "OS12",
    13: "PROC13",
    14: "PROC14",
    15: "PROC15",
  });

  Elf.SymbolVisibility = Object.freeze({
    DEFAULT: 0,
    INTERNAL: 1,
    HIDDEN: 2,
    PROTECTED: 3,
    EXPORTED: 4,
    SINGLETON: 5,
    ELIMINATE: 6,

    0: "DEFAULT",
    1: "INTERNAL",
    2: "HIDDEN",
    3: "PROTECTED",
    4: "EXPORTED",
    5: "SINGLETON",
    6: "ELIMINATE",
  });

  function Elf(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Elf.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(4);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([127, 69, 76, 70])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([127, 69, 76, 70]), this.magic, this._io, "/seq/0");
      this._debug.magic.validationError = _err;
      throw _err;
    }
    this._debug.bits = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.Bits" };
    this.bits = this._io.readU1();
    this._debug.bits.end = this._io.pos;
    this._debug.endian = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.Endian" };
    this.endian = this._io.readU1();
    this._debug.endian.end = this._io.pos;
    this._debug.eiVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.eiVersion = this._io.readU1();
    this._debug.eiVersion.end = this._io.pos;
    if (!(this.eiVersion == 1)) {
      var _err = new KaitaiStream.ValidationNotEqualError(1, this.eiVersion, this._io, "/seq/3");
      this._debug.eiVersion.validationError = _err;
      throw _err;
    }
    this._debug.abi = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.OsAbi" };
    this.abi = this._io.readU1();
    this._debug.abi.end = this._io.pos;
    this._debug.abiVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.abiVersion = this._io.readU1();
    this._debug.abiVersion.end = this._io.pos;
    this._debug.pad = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.pad = this._io.readBytes(7);
    this._debug.pad.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.pad, new Uint8Array([0, 0, 0, 0, 0, 0, 0])) == 0))) {
      var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([0, 0, 0, 0, 0, 0, 0]), this.pad, this._io, "/seq/6");
      this._debug.pad.validationError = _err;
      throw _err;
    }
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new EndianElf(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
  }

  var DtFlag1Values = Elf.DtFlag1Values = (function() {
    function DtFlag1Values(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.value = value;
      this._debug = {};

    }
    DtFlag1Values.prototype._read = function() {
    }

    /**
     * Configuration alternative created.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'confalt', {
      get: function() {
        if (this._m_confalt !== undefined)
          return this._m_confalt;
        this._debug._m_confalt = {  };
        this._m_confalt = (this.value & 8192) != 0;
        return this._m_confalt;
      }
    });

    /**
     * Direct binding enabled.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'direct', {
      get: function() {
        if (this._m_direct !== undefined)
          return this._m_direct;
        this._debug._m_direct = {  };
        this._m_direct = (this.value & 256) != 0;
        return this._m_direct;
      }
    });

    /**
     * Disp reloc applied at build time.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'dispreldne', {
      get: function() {
        if (this._m_dispreldne !== undefined)
          return this._m_dispreldne;
        this._debug._m_dispreldne = {  };
        this._m_dispreldne = (this.value & 32768) != 0;
        return this._m_dispreldne;
      }
    });

    /**
     * Disp reloc applied at run-time.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'disprelpnd', {
      get: function() {
        if (this._m_disprelpnd !== undefined)
          return this._m_disprelpnd;
        this._debug._m_disprelpnd = {  };
        this._m_disprelpnd = (this.value & 65536) != 0;
        return this._m_disprelpnd;
      }
    });

    /**
     * Object is modified after built.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'edited', {
      get: function() {
        if (this._m_edited !== undefined)
          return this._m_edited;
        this._debug._m_edited = {  };
        this._m_edited = (this.value & 2097152) != 0;
        return this._m_edited;
      }
    });

    /**
     * Filtee terminates filters search.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'endfiltee', {
      get: function() {
        if (this._m_endfiltee !== undefined)
          return this._m_endfiltee;
        this._debug._m_endfiltee = {  };
        this._m_endfiltee = (this.value & 16384) != 0;
        return this._m_endfiltee;
      }
    });

    /**
     * Global auditing required.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'globaudit', {
      get: function() {
        if (this._m_globaudit !== undefined)
          return this._m_globaudit;
        this._debug._m_globaudit = {  };
        this._m_globaudit = (this.value & 16777216) != 0;
        return this._m_globaudit;
      }
    });

    /**
     * Set RTLD_GROUP for this object.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'group', {
      get: function() {
        if (this._m_group !== undefined)
          return this._m_group;
        this._debug._m_group = {  };
        this._m_group = (this.value & 4) != 0;
        return this._m_group;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'ignmuldef', {
      get: function() {
        if (this._m_ignmuldef !== undefined)
          return this._m_ignmuldef;
        this._debug._m_ignmuldef = {  };
        this._m_ignmuldef = (this.value & 262144) != 0;
        return this._m_ignmuldef;
      }
    });

    /**
     * Set RTLD_INITFIRST for this object
     */
    Object.defineProperty(DtFlag1Values.prototype, 'initfirst', {
      get: function() {
        if (this._m_initfirst !== undefined)
          return this._m_initfirst;
        this._debug._m_initfirst = {  };
        this._m_initfirst = (this.value & 32) != 0;
        return this._m_initfirst;
      }
    });

    /**
     * Object is used to interpose.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'interpose', {
      get: function() {
        if (this._m_interpose !== undefined)
          return this._m_interpose;
        this._debug._m_interpose = {  };
        this._m_interpose = (this.value & 1024) != 0;
        return this._m_interpose;
      }
    });

    /**
     * Trigger filtee loading at runtime.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'loadfltr', {
      get: function() {
        if (this._m_loadfltr !== undefined)
          return this._m_loadfltr;
        this._debug._m_loadfltr = {  };
        this._m_loadfltr = (this.value & 16) != 0;
        return this._m_loadfltr;
      }
    });

    /**
     * Ignore default lib search path.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'nodeflib', {
      get: function() {
        if (this._m_nodeflib !== undefined)
          return this._m_nodeflib;
        this._debug._m_nodeflib = {  };
        this._m_nodeflib = (this.value & 2048) != 0;
        return this._m_nodeflib;
      }
    });

    /**
     * Set RTLD_NODELETE for this object.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'nodelete', {
      get: function() {
        if (this._m_nodelete !== undefined)
          return this._m_nodelete;
        this._debug._m_nodelete = {  };
        this._m_nodelete = (this.value & 8) != 0;
        return this._m_nodelete;
      }
    });

    /**
     * Object has no-direct binding.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'nodirect', {
      get: function() {
        if (this._m_nodirect !== undefined)
          return this._m_nodirect;
        this._debug._m_nodirect = {  };
        this._m_nodirect = (this.value & 131072) != 0;
        return this._m_nodirect;
      }
    });

    /**
     * Object can't be dldump'ed.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'nodump', {
      get: function() {
        if (this._m_nodump !== undefined)
          return this._m_nodump;
        this._debug._m_nodump = {  };
        this._m_nodump = (this.value & 4096) != 0;
        return this._m_nodump;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'nohdr', {
      get: function() {
        if (this._m_nohdr !== undefined)
          return this._m_nohdr;
        this._debug._m_nohdr = {  };
        this._m_nohdr = (this.value & 1048576) != 0;
        return this._m_nohdr;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'noksyms', {
      get: function() {
        if (this._m_noksyms !== undefined)
          return this._m_noksyms;
        this._debug._m_noksyms = {  };
        this._m_noksyms = (this.value & 524288) != 0;
        return this._m_noksyms;
      }
    });

    /**
     * Set RTLD_NOOPEN for this object.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'noopen', {
      get: function() {
        if (this._m_noopen !== undefined)
          return this._m_noopen;
        this._debug._m_noopen = {  };
        this._m_noopen = (this.value & 64) != 0;
        return this._m_noopen;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'noreloc', {
      get: function() {
        if (this._m_noreloc !== undefined)
          return this._m_noreloc;
        this._debug._m_noreloc = {  };
        this._m_noreloc = (this.value & 4194304) != 0;
        return this._m_noreloc;
      }
    });

    /**
     * Set RTLD_NOW for this object.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'now', {
      get: function() {
        if (this._m_now !== undefined)
          return this._m_now;
        this._debug._m_now = {  };
        this._m_now = (this.value & 1) != 0;
        return this._m_now;
      }
    });

    /**
     * $ORIGIN must be handled.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'origin', {
      get: function() {
        if (this._m_origin !== undefined)
          return this._m_origin;
        this._debug._m_origin = {  };
        this._m_origin = (this.value & 128) != 0;
        return this._m_origin;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'pie', {
      get: function() {
        if (this._m_pie !== undefined)
          return this._m_pie;
        this._debug._m_pie = {  };
        this._m_pie = (this.value & 134217728) != 0;
        return this._m_pie;
      }
    });

    /**
     * Set RTLD_GLOBAL for this object.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'rtldGlobal', {
      get: function() {
        if (this._m_rtldGlobal !== undefined)
          return this._m_rtldGlobal;
        this._debug._m_rtldGlobal = {  };
        this._m_rtldGlobal = (this.value & 2) != 0;
        return this._m_rtldGlobal;
      }
    });

    /**
     * Singleton symbols are used.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'singleton', {
      get: function() {
        if (this._m_singleton !== undefined)
          return this._m_singleton;
        this._debug._m_singleton = {  };
        this._m_singleton = (this.value & 33554432) != 0;
        return this._m_singleton;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'stub', {
      get: function() {
        if (this._m_stub !== undefined)
          return this._m_stub;
        this._debug._m_stub = {  };
        this._m_stub = (this.value & 67108864) != 0;
        return this._m_stub;
      }
    });

    /**
     * Object has individual interposers.
     */
    Object.defineProperty(DtFlag1Values.prototype, 'symintpose', {
      get: function() {
        if (this._m_symintpose !== undefined)
          return this._m_symintpose;
        this._debug._m_symintpose = {  };
        this._m_symintpose = (this.value & 8388608) != 0;
        return this._m_symintpose;
      }
    });
    Object.defineProperty(DtFlag1Values.prototype, 'trans', {
      get: function() {
        if (this._m_trans !== undefined)
          return this._m_trans;
        this._debug._m_trans = {  };
        this._m_trans = (this.value & 512) != 0;
        return this._m_trans;
      }
    });

    return DtFlag1Values;
  })();

  /**
   * @see {@link https://refspecs.linuxbase.org/elf/gabi4+/ch5.dynamic.html|Figure 5-11: DT_FLAGS values}
   * @see {@link https://github.com/golang/go/blob/48dfddbab3/src/debug/elf/elf.go#L1079-L1095|Source}
   * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/dynamic-section.html#GUID-4336A69A-D905-4FCE-A398-80375A9E6464__CHAPTER7-TBL-5|Source}
   */

  var DtFlagValues = Elf.DtFlagValues = (function() {
    function DtFlagValues(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.value = value;
      this._debug = {};

    }
    DtFlagValues.prototype._read = function() {
    }

    /**
     * all relocations for this object must be processed before returning
     * control to the program
     */
    Object.defineProperty(DtFlagValues.prototype, 'bindNow', {
      get: function() {
        if (this._m_bindNow !== undefined)
          return this._m_bindNow;
        this._debug._m_bindNow = {  };
        this._m_bindNow = (this.value & 8) != 0;
        return this._m_bindNow;
      }
    });

    /**
     * object may reference the $ORIGIN substitution string
     */
    Object.defineProperty(DtFlagValues.prototype, 'origin', {
      get: function() {
        if (this._m_origin !== undefined)
          return this._m_origin;
        this._debug._m_origin = {  };
        this._m_origin = (this.value & 1) != 0;
        return this._m_origin;
      }
    });

    /**
     * object uses static thread-local storage scheme
     */
    Object.defineProperty(DtFlagValues.prototype, 'staticTls', {
      get: function() {
        if (this._m_staticTls !== undefined)
          return this._m_staticTls;
        this._debug._m_staticTls = {  };
        this._m_staticTls = (this.value & 16) != 0;
        return this._m_staticTls;
      }
    });

    /**
     * symbolic linking
     */
    Object.defineProperty(DtFlagValues.prototype, 'symbolic', {
      get: function() {
        if (this._m_symbolic !== undefined)
          return this._m_symbolic;
        this._debug._m_symbolic = {  };
        this._m_symbolic = (this.value & 2) != 0;
        return this._m_symbolic;
      }
    });

    /**
     * relocation entries might request modifications to a non-writable segment
     */
    Object.defineProperty(DtFlagValues.prototype, 'textrel', {
      get: function() {
        if (this._m_textrel !== undefined)
          return this._m_textrel;
        this._debug._m_textrel = {  };
        this._m_textrel = (this.value & 4) != 0;
        return this._m_textrel;
      }
    });

    return DtFlagValues;
  })();

  var EndianElf = Elf.EndianElf = (function() {
    function EndianElf(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    EndianElf.prototype._read = function() {
      switch (this._root.endian) {
      case Elf.Endian.LE:
        this._is_le = true;
        break;
      case Elf.Endian.BE:
        this._is_le = false;
        break;
      }

      if (this._is_le === true) {
        this._readLE();
      } else if (this._is_le === false) {
        this._readBE();
      } else {
        throw new KaitaiStream.UndecidedEndiannessError();
      }
    }
    EndianElf.prototype._readLE = function() {
      this._debug.eType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.ObjType" };
      this.eType = this._io.readU2le();
      this._debug.eType.end = this._io.pos;
      this._debug.machine = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.Machine" };
      this.machine = this._io.readU2le();
      this._debug.machine.end = this._io.pos;
      this._debug.eVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.eVersion = this._io.readU4le();
      this._debug.eVersion.end = this._io.pos;
      this._debug.entryPoint = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.entryPoint = this._io.readU4le();
        break;
      case Elf.Bits.B64:
        this.entryPoint = this._io.readU8le();
        break;
      }
      this._debug.entryPoint.end = this._io.pos;
      this._debug.ofsProgramHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.ofsProgramHeaders = this._io.readU4le();
        break;
      case Elf.Bits.B64:
        this.ofsProgramHeaders = this._io.readU8le();
        break;
      }
      this._debug.ofsProgramHeaders.end = this._io.pos;
      this._debug.ofsSectionHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.ofsSectionHeaders = this._io.readU4le();
        break;
      case Elf.Bits.B64:
        this.ofsSectionHeaders = this._io.readU8le();
        break;
      }
      this._debug.ofsSectionHeaders.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readBytes(4);
      this._debug.flags.end = this._io.pos;
      this._debug.eEhsize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.eEhsize = this._io.readU2le();
      this._debug.eEhsize.end = this._io.pos;
      this._debug.programHeaderSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.programHeaderSize = this._io.readU2le();
      this._debug.programHeaderSize.end = this._io.pos;
      this._debug.numProgramHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numProgramHeaders = this._io.readU2le();
      this._debug.numProgramHeaders.end = this._io.pos;
      this._debug.sectionHeaderSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionHeaderSize = this._io.readU2le();
      this._debug.sectionHeaderSize.end = this._io.pos;
      this._debug.numSectionHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSectionHeaders = this._io.readU2le();
      this._debug.numSectionHeaders.end = this._io.pos;
      this._debug.sectionNamesIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionNamesIdx = this._io.readU2le();
      this._debug.sectionNamesIdx.end = this._io.pos;
    }
    EndianElf.prototype._readBE = function() {
      this._debug.eType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.ObjType" };
      this.eType = this._io.readU2be();
      this._debug.eType.end = this._io.pos;
      this._debug.machine = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.Machine" };
      this.machine = this._io.readU2be();
      this._debug.machine.end = this._io.pos;
      this._debug.eVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.eVersion = this._io.readU4be();
      this._debug.eVersion.end = this._io.pos;
      this._debug.entryPoint = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.entryPoint = this._io.readU4be();
        break;
      case Elf.Bits.B64:
        this.entryPoint = this._io.readU8be();
        break;
      }
      this._debug.entryPoint.end = this._io.pos;
      this._debug.ofsProgramHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.ofsProgramHeaders = this._io.readU4be();
        break;
      case Elf.Bits.B64:
        this.ofsProgramHeaders = this._io.readU8be();
        break;
      }
      this._debug.ofsProgramHeaders.end = this._io.pos;
      this._debug.ofsSectionHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      switch (this._root.bits) {
      case Elf.Bits.B32:
        this.ofsSectionHeaders = this._io.readU4be();
        break;
      case Elf.Bits.B64:
        this.ofsSectionHeaders = this._io.readU8be();
        break;
      }
      this._debug.ofsSectionHeaders.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = this._io.readBytes(4);
      this._debug.flags.end = this._io.pos;
      this._debug.eEhsize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.eEhsize = this._io.readU2be();
      this._debug.eEhsize.end = this._io.pos;
      this._debug.programHeaderSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.programHeaderSize = this._io.readU2be();
      this._debug.programHeaderSize.end = this._io.pos;
      this._debug.numProgramHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numProgramHeaders = this._io.readU2be();
      this._debug.numProgramHeaders.end = this._io.pos;
      this._debug.sectionHeaderSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionHeaderSize = this._io.readU2be();
      this._debug.sectionHeaderSize.end = this._io.pos;
      this._debug.numSectionHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSectionHeaders = this._io.readU2be();
      this._debug.numSectionHeaders.end = this._io.pos;
      this._debug.sectionNamesIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sectionNamesIdx = this._io.readU2be();
      this._debug.sectionNamesIdx.end = this._io.pos;
    }

    var DynamicSection = EndianElf.DynamicSection = (function() {
      function DynamicSection(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      DynamicSection.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      DynamicSection.prototype._readLE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new DynamicSectionEntry(this._io, this, this._root, this._is_le);
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
      DynamicSection.prototype._readBE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new DynamicSectionEntry(this._io, this, this._root, this._is_le);
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
      Object.defineProperty(DynamicSection.prototype, 'isStringTableLinked', {
        get: function() {
          if (this._m_isStringTableLinked !== undefined)
            return this._m_isStringTableLinked;
          this._debug._m_isStringTableLinked = {  };
          this._m_isStringTableLinked = this._parent.linkedSection.type == Elf.ShType.STRTAB;
          return this._m_isStringTableLinked;
        }
      });

      return DynamicSection;
    })();

    /**
     * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/dynamic-section.html|Source}
     * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/ch5.dynamic.html#dynamic_section|Source}
     */

    var DynamicSectionEntry = EndianElf.DynamicSectionEntry = (function() {
      function DynamicSectionEntry(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      DynamicSectionEntry.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      DynamicSectionEntry.prototype._readLE = function() {
        this._debug.tag = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.tag = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.tag = this._io.readU8le();
          break;
        }
        this._debug.tag.end = this._io.pos;
        this._debug.valueOrPtr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.valueOrPtr = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.valueOrPtr = this._io.readU8le();
          break;
        }
        this._debug.valueOrPtr.end = this._io.pos;
      }
      DynamicSectionEntry.prototype._readBE = function() {
        this._debug.tag = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.tag = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.tag = this._io.readU8be();
          break;
        }
        this._debug.tag.end = this._io.pos;
        this._debug.valueOrPtr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.valueOrPtr = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.valueOrPtr = this._io.readU8be();
          break;
        }
        this._debug.valueOrPtr.end = this._io.pos;
      }
      Object.defineProperty(DynamicSectionEntry.prototype, 'flag1Values', {
        get: function() {
          if (this._m_flag1Values !== undefined)
            return this._m_flag1Values;
          if (this.tagEnum == Elf.DynamicArrayTags.FLAGS_1) {
            if (this._is_le) {
              this._debug._m_flag1Values = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this._m_flag1Values = new DtFlag1Values(this._io, this, this._root, this.valueOrPtr);
              this._m_flag1Values._read();
              this._debug._m_flag1Values.end = this._io.pos;
            } else {
              this._debug._m_flag1Values = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this._m_flag1Values = new DtFlag1Values(this._io, this, this._root, this.valueOrPtr);
              this._m_flag1Values._read();
              this._debug._m_flag1Values.end = this._io.pos;
            }
          }
          return this._m_flag1Values;
        }
      });
      Object.defineProperty(DynamicSectionEntry.prototype, 'flagValues', {
        get: function() {
          if (this._m_flagValues !== undefined)
            return this._m_flagValues;
          if (this.tagEnum == Elf.DynamicArrayTags.FLAGS) {
            if (this._is_le) {
              this._debug._m_flagValues = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this._m_flagValues = new DtFlagValues(this._io, this, this._root, this.valueOrPtr);
              this._m_flagValues._read();
              this._debug._m_flagValues.end = this._io.pos;
            } else {
              this._debug._m_flagValues = { start: this._io.pos, ioOffset: this._io.byteOffset };
              this._m_flagValues = new DtFlagValues(this._io, this, this._root, this.valueOrPtr);
              this._m_flagValues._read();
              this._debug._m_flagValues.end = this._io.pos;
            }
          }
          return this._m_flagValues;
        }
      });
      Object.defineProperty(DynamicSectionEntry.prototype, 'isValueStr', {
        get: function() {
          if (this._m_isValueStr !== undefined)
            return this._m_isValueStr;
          this._debug._m_isValueStr = {  };
          this._m_isValueStr =  ((this.valueOrPtr != 0) && ( ((this.tagEnum == Elf.DynamicArrayTags.NEEDED) || (this.tagEnum == Elf.DynamicArrayTags.SONAME) || (this.tagEnum == Elf.DynamicArrayTags.RPATH) || (this.tagEnum == Elf.DynamicArrayTags.RUNPATH) || (this.tagEnum == Elf.DynamicArrayTags.SUNW_AUXILIARY) || (this.tagEnum == Elf.DynamicArrayTags.SUNW_FILTER) || (this.tagEnum == Elf.DynamicArrayTags.AUXILIARY) || (this.tagEnum == Elf.DynamicArrayTags.FILTER) || (this.tagEnum == Elf.DynamicArrayTags.CONFIG) || (this.tagEnum == Elf.DynamicArrayTags.DEPAUDIT) || (this.tagEnum == Elf.DynamicArrayTags.AUDIT)) )) ;
          return this._m_isValueStr;
        }
      });
      Object.defineProperty(DynamicSectionEntry.prototype, 'tagEnum', {
        get: function() {
          if (this._m_tagEnum !== undefined)
            return this._m_tagEnum;
          this._debug._m_tagEnum = { enumName: "Elf.DynamicArrayTags" };
          this._m_tagEnum = this.tag;
          return this._m_tagEnum;
        }
      });
      Object.defineProperty(DynamicSectionEntry.prototype, 'valueStr', {
        get: function() {
          if (this._m_valueStr !== undefined)
            return this._m_valueStr;
          if ( ((this.isValueStr) && (this._parent.isStringTableLinked)) ) {
            var io = this._parent._parent.linkedSection.body._io;
            var _pos = io.pos;
            io.seek(this.valueOrPtr);
            if (this._is_le) {
              this._debug._m_valueStr = { start: io.pos, ioOffset: io.byteOffset };
              this._m_valueStr = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
              this._debug._m_valueStr.end = io.pos;
            } else {
              this._debug._m_valueStr = { start: io.pos, ioOffset: io.byteOffset };
              this._m_valueStr = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
              this._debug._m_valueStr.end = io.pos;
            }
            io.seek(_pos);
          }
          return this._m_valueStr;
        }
      });

      return DynamicSectionEntry;
    })();

    var DynsymSection = EndianElf.DynsymSection = (function() {
      function DynsymSection(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      DynsymSection.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      DynsymSection.prototype._readLE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new DynsymSectionEntry(this._io, this, this._root, this._is_le);
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
      DynsymSection.prototype._readBE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new DynsymSectionEntry(this._io, this, this._root, this._is_le);
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
      Object.defineProperty(DynsymSection.prototype, 'isStringTableLinked', {
        get: function() {
          if (this._m_isStringTableLinked !== undefined)
            return this._m_isStringTableLinked;
          this._debug._m_isStringTableLinked = {  };
          this._m_isStringTableLinked = this._parent.linkedSection.type == Elf.ShType.STRTAB;
          return this._m_isStringTableLinked;
        }
      });

      return DynsymSection;
    })();

    /**
     * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/symbol-table-section.html|Source}
     * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/ch4.symtab.html|Source}
     */

    var DynsymSectionEntry = EndianElf.DynsymSectionEntry = (function() {
      function DynsymSectionEntry(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      DynsymSectionEntry.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      DynsymSectionEntry.prototype._readLE = function() {
        this._debug.ofsName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.ofsName = this._io.readU4le();
        this._debug.ofsName.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.valueB32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.valueB32 = this._io.readU4le();
          this._debug.valueB32.end = this._io.pos;
        }
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.sizeB32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.sizeB32 = this._io.readU4le();
          this._debug.sizeB32.end = this._io.pos;
        }
        this._debug.bind = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.SymbolBinding" };
        this.bind = this._io.readBitsIntBe(4);
        this._debug.bind.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.SymbolType" };
        this.type = this._io.readBitsIntBe(4);
        this._debug.type.end = this._io.pos;
        this._io.alignToByte();
        this._debug.other = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.other = this._io.readU1();
        this._debug.other.end = this._io.pos;
        this._debug.shIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.shIdx = this._io.readU2le();
        this._debug.shIdx.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.valueB64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.valueB64 = this._io.readU8le();
          this._debug.valueB64.end = this._io.pos;
        }
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.sizeB64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.sizeB64 = this._io.readU8le();
          this._debug.sizeB64.end = this._io.pos;
        }
      }
      DynsymSectionEntry.prototype._readBE = function() {
        this._debug.ofsName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.ofsName = this._io.readU4be();
        this._debug.ofsName.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.valueB32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.valueB32 = this._io.readU4be();
          this._debug.valueB32.end = this._io.pos;
        }
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.sizeB32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.sizeB32 = this._io.readU4be();
          this._debug.sizeB32.end = this._io.pos;
        }
        this._debug.bind = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.SymbolBinding" };
        this.bind = this._io.readBitsIntBe(4);
        this._debug.bind.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.SymbolType" };
        this.type = this._io.readBitsIntBe(4);
        this._debug.type.end = this._io.pos;
        this._io.alignToByte();
        this._debug.other = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.other = this._io.readU1();
        this._debug.other.end = this._io.pos;
        this._debug.shIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.shIdx = this._io.readU2be();
        this._debug.shIdx.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.valueB64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.valueB64 = this._io.readU8be();
          this._debug.valueB64.end = this._io.pos;
        }
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.sizeB64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.sizeB64 = this._io.readU8be();
          this._debug.sizeB64.end = this._io.pos;
        }
      }
      Object.defineProperty(DynsymSectionEntry.prototype, 'isShIdxOs', {
        get: function() {
          if (this._m_isShIdxOs !== undefined)
            return this._m_isShIdxOs;
          this._debug._m_isShIdxOs = {  };
          this._m_isShIdxOs =  ((this.shIdx >= this._root.shIdxLoOs) && (this.shIdx <= this._root.shIdxHiOs)) ;
          return this._m_isShIdxOs;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'isShIdxProc', {
        get: function() {
          if (this._m_isShIdxProc !== undefined)
            return this._m_isShIdxProc;
          this._debug._m_isShIdxProc = {  };
          this._m_isShIdxProc =  ((this.shIdx >= this._root.shIdxLoProc) && (this.shIdx <= this._root.shIdxHiProc)) ;
          return this._m_isShIdxProc;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'isShIdxReserved', {
        get: function() {
          if (this._m_isShIdxReserved !== undefined)
            return this._m_isShIdxReserved;
          this._debug._m_isShIdxReserved = {  };
          this._m_isShIdxReserved =  ((this.shIdx >= this._root.shIdxLoReserved) && (this.shIdx <= this._root.shIdxHiReserved)) ;
          return this._m_isShIdxReserved;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'name', {
        get: function() {
          if (this._m_name !== undefined)
            return this._m_name;
          if ( ((this.ofsName != 0) && (this._parent.isStringTableLinked)) ) {
            var io = this._parent._parent.linkedSection.body._io;
            var _pos = io.pos;
            io.seek(this.ofsName);
            if (this._is_le) {
              this._debug._m_name = { start: io.pos, ioOffset: io.byteOffset };
              this._m_name = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "UTF-8");
              this._debug._m_name.end = io.pos;
            } else {
              this._debug._m_name = { start: io.pos, ioOffset: io.byteOffset };
              this._m_name = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "UTF-8");
              this._debug._m_name.end = io.pos;
            }
            io.seek(_pos);
          }
          return this._m_name;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'shIdxSpecial', {
        get: function() {
          if (this._m_shIdxSpecial !== undefined)
            return this._m_shIdxSpecial;
          this._debug._m_shIdxSpecial = { enumName: "Elf.SectionHeaderIdxSpecial" };
          this._m_shIdxSpecial = this.shIdx;
          return this._m_shIdxSpecial;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'size', {
        get: function() {
          if (this._m_size !== undefined)
            return this._m_size;
          this._debug._m_size = {  };
          this._m_size = (this._root.bits == Elf.Bits.B32 ? this.sizeB32 : (this._root.bits == Elf.Bits.B64 ? this.sizeB64 : 0));
          return this._m_size;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'value', {
        get: function() {
          if (this._m_value !== undefined)
            return this._m_value;
          this._debug._m_value = {  };
          this._m_value = (this._root.bits == Elf.Bits.B32 ? this.valueB32 : (this._root.bits == Elf.Bits.B64 ? this.valueB64 : 0));
          return this._m_value;
        }
      });
      Object.defineProperty(DynsymSectionEntry.prototype, 'visibility', {
        get: function() {
          if (this._m_visibility !== undefined)
            return this._m_visibility;
          this._debug._m_visibility = { enumName: "Elf.SymbolVisibility" };
          this._m_visibility = this.other & 3;
          return this._m_visibility;
        }
      });

      /**
       * don't read this field, access `visibility` instead
       */

      /**
       * section header index
       */

      return DynsymSectionEntry;
    })();

    var NoteSection = EndianElf.NoteSection = (function() {
      function NoteSection(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      NoteSection.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      NoteSection.prototype._readLE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new NoteSectionEntry(this._io, this, this._root, this._is_le);
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
      NoteSection.prototype._readBE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new NoteSectionEntry(this._io, this, this._root, this._is_le);
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

      return NoteSection;
    })();

    /**
     * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/note-section.html|Source}
     * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/ch5.pheader.html#note_section|Source}
     */

    var NoteSectionEntry = EndianElf.NoteSectionEntry = (function() {
      function NoteSectionEntry(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      NoteSectionEntry.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      NoteSectionEntry.prototype._readLE = function() {
        this._debug.lenName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.lenName = this._io.readU4le();
        this._debug.lenName.end = this._io.pos;
        this._debug.lenDescriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.lenDescriptor = this._io.readU4le();
        this._debug.lenDescriptor.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.type = this._io.readU4le();
        this._debug.type.end = this._io.pos;
        this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.name = KaitaiStream.bytesTerminate(this._io.readBytes(this.lenName), 0, false);
        this._debug.name.end = this._io.pos;
        this._debug.namePadding = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.namePadding = this._io.readBytes(KaitaiStream.mod(-(this.lenName), 4));
        this._debug.namePadding.end = this._io.pos;
        this._debug.descriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.descriptor = this._io.readBytes(this.lenDescriptor);
        this._debug.descriptor.end = this._io.pos;
        this._debug.descriptorPadding = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.descriptorPadding = this._io.readBytes(KaitaiStream.mod(-(this.lenDescriptor), 4));
        this._debug.descriptorPadding.end = this._io.pos;
      }
      NoteSectionEntry.prototype._readBE = function() {
        this._debug.lenName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.lenName = this._io.readU4be();
        this._debug.lenName.end = this._io.pos;
        this._debug.lenDescriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.lenDescriptor = this._io.readU4be();
        this._debug.lenDescriptor.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.type = this._io.readU4be();
        this._debug.type.end = this._io.pos;
        this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.name = KaitaiStream.bytesTerminate(this._io.readBytes(this.lenName), 0, false);
        this._debug.name.end = this._io.pos;
        this._debug.namePadding = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.namePadding = this._io.readBytes(KaitaiStream.mod(-(this.lenName), 4));
        this._debug.namePadding.end = this._io.pos;
        this._debug.descriptor = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.descriptor = this._io.readBytes(this.lenDescriptor);
        this._debug.descriptor.end = this._io.pos;
        this._debug.descriptorPadding = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.descriptorPadding = this._io.readBytes(KaitaiStream.mod(-(this.lenDescriptor), 4));
        this._debug.descriptorPadding.end = this._io.pos;
      }

      /**
       * Although the ELF specification seems to hint that the `note_name` field
       * is ASCII this isn't the case for Linux binaries that have a
       * `.gnu.build.attributes` section.
       * @see {@link https://fedoraproject.org/wiki/Toolchain/Watermark#Proposed_Specification_for_non-loaded_notes|Source}
       */

      return NoteSectionEntry;
    })();

    var ProgramHeader = EndianElf.ProgramHeader = (function() {
      function ProgramHeader(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      ProgramHeader.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      ProgramHeader.prototype._readLE = function() {
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.PhType" };
        this.type = this._io.readU4le();
        this._debug.type.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.flags64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.flags64 = this._io.readU4le();
          this._debug.flags64.end = this._io.pos;
        }
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.offset = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.offset = this._io.readU8le();
          break;
        }
        this._debug.offset.end = this._io.pos;
        this._debug.vaddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.vaddr = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.vaddr = this._io.readU8le();
          break;
        }
        this._debug.vaddr.end = this._io.pos;
        this._debug.paddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.paddr = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.paddr = this._io.readU8le();
          break;
        }
        this._debug.paddr.end = this._io.pos;
        this._debug.filesz = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.filesz = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.filesz = this._io.readU8le();
          break;
        }
        this._debug.filesz.end = this._io.pos;
        this._debug.memsz = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.memsz = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.memsz = this._io.readU8le();
          break;
        }
        this._debug.memsz.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.flags32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.flags32 = this._io.readU4le();
          this._debug.flags32.end = this._io.pos;
        }
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.align = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.align = this._io.readU8le();
          break;
        }
        this._debug.align.end = this._io.pos;
      }
      ProgramHeader.prototype._readBE = function() {
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.PhType" };
        this.type = this._io.readU4be();
        this._debug.type.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B64) {
          this._debug.flags64 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.flags64 = this._io.readU4be();
          this._debug.flags64.end = this._io.pos;
        }
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.offset = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.offset = this._io.readU8be();
          break;
        }
        this._debug.offset.end = this._io.pos;
        this._debug.vaddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.vaddr = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.vaddr = this._io.readU8be();
          break;
        }
        this._debug.vaddr.end = this._io.pos;
        this._debug.paddr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.paddr = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.paddr = this._io.readU8be();
          break;
        }
        this._debug.paddr.end = this._io.pos;
        this._debug.filesz = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.filesz = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.filesz = this._io.readU8be();
          break;
        }
        this._debug.filesz.end = this._io.pos;
        this._debug.memsz = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.memsz = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.memsz = this._io.readU8be();
          break;
        }
        this._debug.memsz.end = this._io.pos;
        if (this._root.bits == Elf.Bits.B32) {
          this._debug.flags32 = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.flags32 = this._io.readU4be();
          this._debug.flags32.end = this._io.pos;
        }
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.align = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.align = this._io.readU8be();
          break;
        }
        this._debug.align.end = this._io.pos;
      }
      Object.defineProperty(ProgramHeader.prototype, 'flagsObj', {
        get: function() {
          if (this._m_flagsObj !== undefined)
            return this._m_flagsObj;
          if (this._is_le) {
            this._debug._m_flagsObj = { start: this._io.pos, ioOffset: this._io.byteOffset };
            switch (this._root.bits) {
            case Elf.Bits.B32:
              this._m_flagsObj = new PhdrTypeFlags(this._io, this, this._root, this.flags32);
              this._m_flagsObj._read();
              break;
            case Elf.Bits.B64:
              this._m_flagsObj = new PhdrTypeFlags(this._io, this, this._root, this.flags64);
              this._m_flagsObj._read();
              break;
            }
            this._debug._m_flagsObj.end = this._io.pos;
          } else {
            this._debug._m_flagsObj = { start: this._io.pos, ioOffset: this._io.byteOffset };
            switch (this._root.bits) {
            case Elf.Bits.B32:
              this._m_flagsObj = new PhdrTypeFlags(this._io, this, this._root, this.flags32);
              this._m_flagsObj._read();
              break;
            case Elf.Bits.B64:
              this._m_flagsObj = new PhdrTypeFlags(this._io, this, this._root, this.flags64);
              this._m_flagsObj._read();
              break;
            }
            this._debug._m_flagsObj.end = this._io.pos;
          }
          return this._m_flagsObj;
        }
      });

      return ProgramHeader;
    })();

    /**
     * @see {@link https://docs.oracle.com/en/operating-systems/solaris/oracle-solaris/11.4/linkers-libraries/relocation-sections.html|Source}
     * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/ch4.reloc.html|Source}
     */

    var RelocationSection = EndianElf.RelocationSection = (function() {
      function RelocationSection(_io, _parent, _root, _is_le, hasAddend) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this.hasAddend = hasAddend;
        this._debug = {};

      }
      RelocationSection.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      RelocationSection.prototype._readLE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new RelocationSectionEntry(this._io, this, this._root, this._is_le);
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
      RelocationSection.prototype._readBE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          var _t_entries = new RelocationSectionEntry(this._io, this, this._root, this._is_le);
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

      return RelocationSection;
    })();

    var RelocationSectionEntry = EndianElf.RelocationSectionEntry = (function() {
      function RelocationSectionEntry(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      RelocationSectionEntry.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      RelocationSectionEntry.prototype._readLE = function() {
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.offset = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.offset = this._io.readU8le();
          break;
        }
        this._debug.offset.end = this._io.pos;
        this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.info = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.info = this._io.readU8le();
          break;
        }
        this._debug.info.end = this._io.pos;
        if (this._parent.hasAddend) {
          this._debug.addend = { start: this._io.pos, ioOffset: this._io.byteOffset };
          switch (this._root.bits) {
          case Elf.Bits.B32:
            this.addend = this._io.readS4le();
            break;
          case Elf.Bits.B64:
            this.addend = this._io.readS8le();
            break;
          }
          this._debug.addend.end = this._io.pos;
        }
      }
      RelocationSectionEntry.prototype._readBE = function() {
        this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.offset = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.offset = this._io.readU8be();
          break;
        }
        this._debug.offset.end = this._io.pos;
        this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.info = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.info = this._io.readU8be();
          break;
        }
        this._debug.info.end = this._io.pos;
        if (this._parent.hasAddend) {
          this._debug.addend = { start: this._io.pos, ioOffset: this._io.byteOffset };
          switch (this._root.bits) {
          case Elf.Bits.B32:
            this.addend = this._io.readS4be();
            break;
          case Elf.Bits.B64:
            this.addend = this._io.readS8be();
            break;
          }
          this._debug.addend.end = this._io.pos;
        }
      }

      return RelocationSectionEntry;
    })();

    var SectionHeader = EndianElf.SectionHeader = (function() {
      function SectionHeader(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      SectionHeader.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      SectionHeader.prototype._readLE = function() {
        this._debug.ofsName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.ofsName = this._io.readU4le();
        this._debug.ofsName.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.ShType" };
        this.type = this._io.readU4le();
        this._debug.type.end = this._io.pos;
        this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.flags = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.flags = this._io.readU8le();
          break;
        }
        this._debug.flags.end = this._io.pos;
        this._debug.addr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.addr = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.addr = this._io.readU8le();
          break;
        }
        this._debug.addr.end = this._io.pos;
        this._debug.ofsBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.ofsBody = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.ofsBody = this._io.readU8le();
          break;
        }
        this._debug.ofsBody.end = this._io.pos;
        this._debug.lenBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.lenBody = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.lenBody = this._io.readU8le();
          break;
        }
        this._debug.lenBody.end = this._io.pos;
        this._debug.linkedSectionIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.linkedSectionIdx = this._io.readU4le();
        this._debug.linkedSectionIdx.end = this._io.pos;
        this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.info = this._io.readBytes(4);
        this._debug.info.end = this._io.pos;
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.align = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.align = this._io.readU8le();
          break;
        }
        this._debug.align.end = this._io.pos;
        this._debug.entrySize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.entrySize = this._io.readU4le();
          break;
        case Elf.Bits.B64:
          this.entrySize = this._io.readU8le();
          break;
        }
        this._debug.entrySize.end = this._io.pos;
      }
      SectionHeader.prototype._readBE = function() {
        this._debug.ofsName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.ofsName = this._io.readU4be();
        this._debug.ofsName.end = this._io.pos;
        this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Elf.ShType" };
        this.type = this._io.readU4be();
        this._debug.type.end = this._io.pos;
        this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.flags = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.flags = this._io.readU8be();
          break;
        }
        this._debug.flags.end = this._io.pos;
        this._debug.addr = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.addr = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.addr = this._io.readU8be();
          break;
        }
        this._debug.addr.end = this._io.pos;
        this._debug.ofsBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.ofsBody = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.ofsBody = this._io.readU8be();
          break;
        }
        this._debug.ofsBody.end = this._io.pos;
        this._debug.lenBody = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.lenBody = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.lenBody = this._io.readU8be();
          break;
        }
        this._debug.lenBody.end = this._io.pos;
        this._debug.linkedSectionIdx = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.linkedSectionIdx = this._io.readU4be();
        this._debug.linkedSectionIdx.end = this._io.pos;
        this._debug.info = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.info = this._io.readBytes(4);
        this._debug.info.end = this._io.pos;
        this._debug.align = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.align = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.align = this._io.readU8be();
          break;
        }
        this._debug.align.end = this._io.pos;
        this._debug.entrySize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this._root.bits) {
        case Elf.Bits.B32:
          this.entrySize = this._io.readU4be();
          break;
        case Elf.Bits.B64:
          this.entrySize = this._io.readU8be();
          break;
        }
        this._debug.entrySize.end = this._io.pos;
      }
      Object.defineProperty(SectionHeader.prototype, 'body', {
        get: function() {
          if (this._m_body !== undefined)
            return this._m_body;
          if (this.type != Elf.ShType.NOBITS) {
            var io = this._root._io;
            var _pos = io.pos;
            io.seek(this.ofsBody);
            if (this._is_le) {
              this._debug._m_body = { start: io.pos, ioOffset: io.byteOffset };
              switch (this.type) {
              case Elf.ShType.DYNAMIC:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynamicSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.DYNSYM:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynsymSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.NOTE:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new NoteSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.REL:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new RelocationSection(_io__raw__m_body, this, this._root, this._is_le, false);
                this._m_body._read();
                break;
              case Elf.ShType.RELA:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new RelocationSection(_io__raw__m_body, this, this._root, this._is_le, true);
                this._m_body._read();
                break;
              case Elf.ShType.STRTAB:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new StringsStruct(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.SYMTAB:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynsymSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              default:
                this._m_body = io.readBytes(this.lenBody);
                break;
              }
              this._debug._m_body.end = io.pos;
            } else {
              this._debug._m_body = { start: io.pos, ioOffset: io.byteOffset };
              switch (this.type) {
              case Elf.ShType.DYNAMIC:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynamicSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.DYNSYM:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynsymSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.NOTE:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new NoteSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.REL:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new RelocationSection(_io__raw__m_body, this, this._root, this._is_le, false);
                this._m_body._read();
                break;
              case Elf.ShType.RELA:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new RelocationSection(_io__raw__m_body, this, this._root, this._is_le, true);
                this._m_body._read();
                break;
              case Elf.ShType.STRTAB:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new StringsStruct(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              case Elf.ShType.SYMTAB:
                this._raw__m_body = io.readBytes(this.lenBody);
                var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
                this._m_body = new DynsymSection(_io__raw__m_body, this, this._root, this._is_le);
                this._m_body._read();
                break;
              default:
                this._m_body = io.readBytes(this.lenBody);
                break;
              }
              this._debug._m_body.end = io.pos;
            }
            io.seek(_pos);
          }
          return this._m_body;
        }
      });
      Object.defineProperty(SectionHeader.prototype, 'flagsObj', {
        get: function() {
          if (this._m_flagsObj !== undefined)
            return this._m_flagsObj;
          if (this._is_le) {
            this._debug._m_flagsObj = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_flagsObj = new SectionHeaderFlags(this._io, this, this._root, this.flags);
            this._m_flagsObj._read();
            this._debug._m_flagsObj.end = this._io.pos;
          } else {
            this._debug._m_flagsObj = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._m_flagsObj = new SectionHeaderFlags(this._io, this, this._root, this.flags);
            this._m_flagsObj._read();
            this._debug._m_flagsObj.end = this._io.pos;
          }
          return this._m_flagsObj;
        }
      });

      /**
       * may reference a later section header, so don't try to access too early (use only lazy `instances`)
       * @see {@link https://refspecs.linuxfoundation.org/elf/gabi4+/ch4.sheader.html#sh_link|Source}
       */
      Object.defineProperty(SectionHeader.prototype, 'linkedSection', {
        get: function() {
          if (this._m_linkedSection !== undefined)
            return this._m_linkedSection;
          if ( ((this.linkedSectionIdx != Elf.SectionHeaderIdxSpecial.UNDEFINED) && (this.linkedSectionIdx < this._root.header.numSectionHeaders)) ) {
            this._debug._m_linkedSection = {  };
            this._m_linkedSection = this._root.header.sectionHeaders[this.linkedSectionIdx];
          }
          return this._m_linkedSection;
        }
      });
      Object.defineProperty(SectionHeader.prototype, 'name', {
        get: function() {
          if (this._m_name !== undefined)
            return this._m_name;
          var io = this._root.header.sectionNames._io;
          var _pos = io.pos;
          io.seek(this.ofsName);
          if (this._is_le) {
            this._debug._m_name = { start: io.pos, ioOffset: io.byteOffset };
            this._m_name = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
            this._debug._m_name.end = io.pos;
          } else {
            this._debug._m_name = { start: io.pos, ioOffset: io.byteOffset };
            this._m_name = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
            this._debug._m_name.end = io.pos;
          }
          io.seek(_pos);
          return this._m_name;
        }
      });

      return SectionHeader;
    })();

    var StringsStruct = EndianElf.StringsStruct = (function() {
      function StringsStruct(_io, _parent, _root, _is_le) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root;
        this._is_le = _is_le;
        this._debug = {};

      }
      StringsStruct.prototype._read = function() {

        if (this._is_le === true) {
          this._readLE();
        } else if (this._is_le === false) {
          this._readBE();
        } else {
          throw new KaitaiStream.UndecidedEndiannessError();
        }
      }
      StringsStruct.prototype._readLE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.entries.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8"));
          this._debug.entries.arr[this.entries.length - 1].end = this._io.pos;
          i++;
        }
        this._debug.entries.end = this._io.pos;
      }
      StringsStruct.prototype._readBE = function() {
        this._debug.entries = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug.entries.arr = [];
        this.entries = [];
        var i = 0;
        while (!this._io.isEof()) {
          this._debug.entries.arr[this.entries.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.entries.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "UTF-8"));
          this._debug.entries.arr[this.entries.length - 1].end = this._io.pos;
          i++;
        }
        this._debug.entries.end = this._io.pos;
      }

      return StringsStruct;
    })();
    Object.defineProperty(EndianElf.prototype, 'programHeaders', {
      get: function() {
        if (this._m_programHeaders !== undefined)
          return this._m_programHeaders;
        var _pos = this._io.pos;
        this._io.seek(this.ofsProgramHeaders);
        this._debug._m_programHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug._m_programHeaders.arr = [];
        if (this._is_le) {
          this._raw__m_programHeaders = [];
          this._m_programHeaders = [];
          for (var i = 0; i < this.numProgramHeaders; i++) {
            this._debug._m_programHeaders.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_programHeaders.push(this._io.readBytes(this.programHeaderSize));
            var _io__raw__m_programHeaders = new KaitaiStream(this._raw__m_programHeaders[i]);
            var _t__m_programHeaders = new ProgramHeader(_io__raw__m_programHeaders, this, this._root, this._is_le);
            try {
              _t__m_programHeaders._read();
            } finally {
              this._m_programHeaders.push(_t__m_programHeaders);
            }
            this._debug._m_programHeaders.arr[i].end = this._io.pos;
          }
        } else {
          this._raw__m_programHeaders = [];
          this._m_programHeaders = [];
          for (var i = 0; i < this.numProgramHeaders; i++) {
            this._debug._m_programHeaders.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_programHeaders.push(this._io.readBytes(this.programHeaderSize));
            var _io__raw__m_programHeaders = new KaitaiStream(this._raw__m_programHeaders[i]);
            var _t__m_programHeaders = new ProgramHeader(_io__raw__m_programHeaders, this, this._root, this._is_le);
            try {
              _t__m_programHeaders._read();
            } finally {
              this._m_programHeaders.push(_t__m_programHeaders);
            }
            this._debug._m_programHeaders.arr[i].end = this._io.pos;
          }
        }
        this._debug._m_programHeaders.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_programHeaders;
      }
    });
    Object.defineProperty(EndianElf.prototype, 'sectionHeaders', {
      get: function() {
        if (this._m_sectionHeaders !== undefined)
          return this._m_sectionHeaders;
        var _pos = this._io.pos;
        this._io.seek(this.ofsSectionHeaders);
        this._debug._m_sectionHeaders = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._debug._m_sectionHeaders.arr = [];
        if (this._is_le) {
          this._raw__m_sectionHeaders = [];
          this._m_sectionHeaders = [];
          for (var i = 0; i < this.numSectionHeaders; i++) {
            this._debug._m_sectionHeaders.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_sectionHeaders.push(this._io.readBytes(this.sectionHeaderSize));
            var _io__raw__m_sectionHeaders = new KaitaiStream(this._raw__m_sectionHeaders[i]);
            var _t__m_sectionHeaders = new SectionHeader(_io__raw__m_sectionHeaders, this, this._root, this._is_le);
            try {
              _t__m_sectionHeaders._read();
            } finally {
              this._m_sectionHeaders.push(_t__m_sectionHeaders);
            }
            this._debug._m_sectionHeaders.arr[i].end = this._io.pos;
          }
        } else {
          this._raw__m_sectionHeaders = [];
          this._m_sectionHeaders = [];
          for (var i = 0; i < this.numSectionHeaders; i++) {
            this._debug._m_sectionHeaders.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_sectionHeaders.push(this._io.readBytes(this.sectionHeaderSize));
            var _io__raw__m_sectionHeaders = new KaitaiStream(this._raw__m_sectionHeaders[i]);
            var _t__m_sectionHeaders = new SectionHeader(_io__raw__m_sectionHeaders, this, this._root, this._is_le);
            try {
              _t__m_sectionHeaders._read();
            } finally {
              this._m_sectionHeaders.push(_t__m_sectionHeaders);
            }
            this._debug._m_sectionHeaders.arr[i].end = this._io.pos;
          }
        }
        this._debug._m_sectionHeaders.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_sectionHeaders;
      }
    });
    Object.defineProperty(EndianElf.prototype, 'sectionNames', {
      get: function() {
        if (this._m_sectionNames !== undefined)
          return this._m_sectionNames;
        if ( ((this.sectionNamesIdx != Elf.SectionHeaderIdxSpecial.UNDEFINED) && (this.sectionNamesIdx < this._root.header.numSectionHeaders)) ) {
          var _pos = this._io.pos;
          this._io.seek(this.sectionHeaders[this.sectionNamesIdx].ofsBody);
          if (this._is_le) {
            this._debug._m_sectionNames = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_sectionNames = this._io.readBytes(this.sectionHeaders[this.sectionNamesIdx].lenBody);
            var _io__raw__m_sectionNames = new KaitaiStream(this._raw__m_sectionNames);
            this._m_sectionNames = new StringsStruct(_io__raw__m_sectionNames, this, this._root, this._is_le);
            this._m_sectionNames._read();
            this._debug._m_sectionNames.end = this._io.pos;
          } else {
            this._debug._m_sectionNames = { start: this._io.pos, ioOffset: this._io.byteOffset };
            this._raw__m_sectionNames = this._io.readBytes(this.sectionHeaders[this.sectionNamesIdx].lenBody);
            var _io__raw__m_sectionNames = new KaitaiStream(this._raw__m_sectionNames);
            this._m_sectionNames = new StringsStruct(_io__raw__m_sectionNames, this, this._root, this._is_le);
            this._m_sectionNames._read();
            this._debug._m_sectionNames.end = this._io.pos;
          }
          this._io.seek(_pos);
        }
        return this._m_sectionNames;
      }
    });

    return EndianElf;
  })();

  var PhdrTypeFlags = Elf.PhdrTypeFlags = (function() {
    function PhdrTypeFlags(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.value = value;
      this._debug = {};

    }
    PhdrTypeFlags.prototype._read = function() {
    }
    Object.defineProperty(PhdrTypeFlags.prototype, 'execute', {
      get: function() {
        if (this._m_execute !== undefined)
          return this._m_execute;
        this._debug._m_execute = {  };
        this._m_execute = (this.value & 1) != 0;
        return this._m_execute;
      }
    });
    Object.defineProperty(PhdrTypeFlags.prototype, 'maskProc', {
      get: function() {
        if (this._m_maskProc !== undefined)
          return this._m_maskProc;
        this._debug._m_maskProc = {  };
        this._m_maskProc = (this.value & 4026531840) != 0;
        return this._m_maskProc;
      }
    });
    Object.defineProperty(PhdrTypeFlags.prototype, 'read', {
      get: function() {
        if (this._m_read !== undefined)
          return this._m_read;
        this._debug._m_read = {  };
        this._m_read = (this.value & 4) != 0;
        return this._m_read;
      }
    });
    Object.defineProperty(PhdrTypeFlags.prototype, 'write', {
      get: function() {
        if (this._m_write !== undefined)
          return this._m_write;
        this._debug._m_write = {  };
        this._m_write = (this.value & 2) != 0;
        return this._m_write;
      }
    });

    return PhdrTypeFlags;
  })();

  var SectionHeaderFlags = Elf.SectionHeaderFlags = (function() {
    function SectionHeaderFlags(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this.value = value;
      this._debug = {};

    }
    SectionHeaderFlags.prototype._read = function() {
    }

    /**
     * occupies memory during execution
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'alloc', {
      get: function() {
        if (this._m_alloc !== undefined)
          return this._m_alloc;
        this._debug._m_alloc = {  };
        this._m_alloc = (this.value & 2) != 0;
        return this._m_alloc;
      }
    });

    /**
     * section is excluded unless referenced or allocated (Solaris)
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'exclude', {
      get: function() {
        if (this._m_exclude !== undefined)
          return this._m_exclude;
        this._debug._m_exclude = {  };
        this._m_exclude = (this.value & 134217728) != 0;
        return this._m_exclude;
      }
    });

    /**
     * executable
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'execInstr', {
      get: function() {
        if (this._m_execInstr !== undefined)
          return this._m_execInstr;
        this._debug._m_execInstr = {  };
        this._m_execInstr = (this.value & 4) != 0;
        return this._m_execInstr;
      }
    });

    /**
     * section is member of a group
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'group', {
      get: function() {
        if (this._m_group !== undefined)
          return this._m_group;
        this._debug._m_group = {  };
        this._m_group = (this.value & 512) != 0;
        return this._m_group;
      }
    });

    /**
     * 'sh_info' contains SHT index
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'infoLink', {
      get: function() {
        if (this._m_infoLink !== undefined)
          return this._m_infoLink;
        this._debug._m_infoLink = {  };
        this._m_infoLink = (this.value & 64) != 0;
        return this._m_infoLink;
      }
    });

    /**
     * preserve order after combining
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'linkOrder', {
      get: function() {
        if (this._m_linkOrder !== undefined)
          return this._m_linkOrder;
        this._debug._m_linkOrder = {  };
        this._m_linkOrder = (this.value & 128) != 0;
        return this._m_linkOrder;
      }
    });

    /**
     * OS-specific
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'maskOs', {
      get: function() {
        if (this._m_maskOs !== undefined)
          return this._m_maskOs;
        this._debug._m_maskOs = {  };
        this._m_maskOs = (this.value & 267386880) != 0;
        return this._m_maskOs;
      }
    });

    /**
     * Processor-specific
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'maskProc', {
      get: function() {
        if (this._m_maskProc !== undefined)
          return this._m_maskProc;
        this._debug._m_maskProc = {  };
        this._m_maskProc = (this.value & 4026531840) != 0;
        return this._m_maskProc;
      }
    });

    /**
     * might be merged
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'merge', {
      get: function() {
        if (this._m_merge !== undefined)
          return this._m_merge;
        this._debug._m_merge = {  };
        this._m_merge = (this.value & 16) != 0;
        return this._m_merge;
      }
    });

    /**
     * special ordering requirement (Solaris)
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'ordered', {
      get: function() {
        if (this._m_ordered !== undefined)
          return this._m_ordered;
        this._debug._m_ordered = {  };
        this._m_ordered = (this.value & 67108864) != 0;
        return this._m_ordered;
      }
    });

    /**
     * non-standard OS specific handling required
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'osNonConforming', {
      get: function() {
        if (this._m_osNonConforming !== undefined)
          return this._m_osNonConforming;
        this._debug._m_osNonConforming = {  };
        this._m_osNonConforming = (this.value & 256) != 0;
        return this._m_osNonConforming;
      }
    });

    /**
     * contains nul-terminated strings
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'strings', {
      get: function() {
        if (this._m_strings !== undefined)
          return this._m_strings;
        this._debug._m_strings = {  };
        this._m_strings = (this.value & 32) != 0;
        return this._m_strings;
      }
    });

    /**
     * section hold thread-local data
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'tls', {
      get: function() {
        if (this._m_tls !== undefined)
          return this._m_tls;
        this._debug._m_tls = {  };
        this._m_tls = (this.value & 1024) != 0;
        return this._m_tls;
      }
    });

    /**
     * writable
     */
    Object.defineProperty(SectionHeaderFlags.prototype, 'write', {
      get: function() {
        if (this._m_write !== undefined)
          return this._m_write;
        this._debug._m_write = {  };
        this._m_write = (this.value & 1) != 0;
        return this._m_write;
      }
    });

    return SectionHeaderFlags;
  })();
  Object.defineProperty(Elf.prototype, 'shIdxHiOs', {
    get: function() {
      if (this._m_shIdxHiOs !== undefined)
        return this._m_shIdxHiOs;
      this._debug._m_shIdxHiOs = {  };
      this._m_shIdxHiOs = 65343;
      return this._m_shIdxHiOs;
    }
  });
  Object.defineProperty(Elf.prototype, 'shIdxHiProc', {
    get: function() {
      if (this._m_shIdxHiProc !== undefined)
        return this._m_shIdxHiProc;
      this._debug._m_shIdxHiProc = {  };
      this._m_shIdxHiProc = 65311;
      return this._m_shIdxHiProc;
    }
  });
  Object.defineProperty(Elf.prototype, 'shIdxHiReserved', {
    get: function() {
      if (this._m_shIdxHiReserved !== undefined)
        return this._m_shIdxHiReserved;
      this._debug._m_shIdxHiReserved = {  };
      this._m_shIdxHiReserved = 65535;
      return this._m_shIdxHiReserved;
    }
  });
  Object.defineProperty(Elf.prototype, 'shIdxLoOs', {
    get: function() {
      if (this._m_shIdxLoOs !== undefined)
        return this._m_shIdxLoOs;
      this._debug._m_shIdxLoOs = {  };
      this._m_shIdxLoOs = 65312;
      return this._m_shIdxLoOs;
    }
  });
  Object.defineProperty(Elf.prototype, 'shIdxLoProc', {
    get: function() {
      if (this._m_shIdxLoProc !== undefined)
        return this._m_shIdxLoProc;
      this._debug._m_shIdxLoProc = {  };
      this._m_shIdxLoProc = 65280;
      return this._m_shIdxLoProc;
    }
  });
  Object.defineProperty(Elf.prototype, 'shIdxLoReserved', {
    get: function() {
      if (this._m_shIdxLoReserved !== undefined)
        return this._m_shIdxLoReserved;
      this._debug._m_shIdxLoReserved = {  };
      this._m_shIdxLoReserved = 65280;
      return this._m_shIdxLoReserved;
    }
  });

  /**
   * File identification, must be 0x7f + "ELF".
   */

  /**
   * File class: designates target machine word size (32 or 64
   * bits). The size of many integer fields in this format will
   * depend on this setting.
   */

  /**
   * Endianness used for all integers.
   */

  /**
   * ELF header version.
   */

  /**
   * Specifies which OS- and ABI-related extensions will be used
   * in this ELF file.
   */

  /**
   * Version of ABI targeted by this ELF file. Interpretation
   * depends on `abi` attribute.
   */

  return Elf;
})();
Elf_.Elf = Elf;
});
