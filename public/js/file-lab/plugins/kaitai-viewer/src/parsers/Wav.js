// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'kaitai-struct/KaitaiStream', './Riff'], factory);
  } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
    factory(exports, require('kaitai-struct/KaitaiStream'), require('./Riff'));
  } else {
    factory(root.Wav || (root.Wav = {}), root.KaitaiStream, root.Riff || (root.Riff = {}));
  }
})(typeof self !== 'undefined' ? self : this, function (Wav_, KaitaiStream, Riff_) {
/**
 * The WAVE file format is a subset of Microsoft's RIFF specification for the
 * storage of multimedia files. A RIFF file starts out with a file header
 * followed by a sequence of data chunks. A WAVE file is often just a RIFF
 * file with a single "WAVE" chunk which consists of two sub-chunks --
 * a "fmt " chunk specifying the data format and a "data" chunk containing
 * the actual sample data, although other chunks exist and are used.
 * 
 * An extension of the file format is the Broadcast Wave Format (BWF) for radio
 * broadcasts. Sample files can be found at:
 * 
 * <https://www.bbc.co.uk/rd/publications/saqas>
 * 
 * This Kaitai implementation was written by John Byrd of Gigantic Software
 * (jbyrd@giganticsoftware.com), and it is likely to contain bugs.
 * @see {@link http://soundfile.sapp.org/doc/WaveFormat/|Source}
 * @see {@link https://www.mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html|Source}
 * @see {@link https://web.archive.org/web/20101031101749/http://www.ebu.ch/fr/technical/publications/userguides/bwf_user_guide.php|Source}
 */

var Wav = (function() {
  Wav.Fourcc = Object.freeze({
    ID3: 540238953,
    CUE: 543520099,
    FMT: 544501094,
    WAVE: 1163280727,
    RIFF: 1179011410,
    PEAK: 1262568784,
    IXML: 1280137321,
    INFO: 1330007625,
    LIST: 1414744396,
    PMX: 1481461855,
    CHNA: 1634625635,
    DATA: 1635017060,
    UMID: 1684630901,
    MINF: 1718511981,
    AXML: 1819113569,
    REGN: 1852269938,
    AFSP: 1886611041,
    FACT: 1952670054,
    BEXT: 1954047330,

    540238953: "ID3",
    543520099: "CUE",
    544501094: "FMT",
    1163280727: "WAVE",
    1179011410: "RIFF",
    1262568784: "PEAK",
    1280137321: "IXML",
    1330007625: "INFO",
    1414744396: "LIST",
    1481461855: "PMX",
    1634625635: "CHNA",
    1635017060: "DATA",
    1684630901: "UMID",
    1718511981: "MINF",
    1819113569: "AXML",
    1852269938: "REGN",
    1886611041: "AFSP",
    1952670054: "FACT",
    1954047330: "BEXT",
  });

  Wav.WFormatTagType = Object.freeze({
    UNKNOWN: 0,
    PCM: 1,
    ADPCM: 2,
    IEEE_FLOAT: 3,
    VSELP: 4,
    IBM_CVSD: 5,
    ALAW: 6,
    MULAW: 7,
    DTS: 8,
    DRM: 9,
    WMAVOICE9: 10,
    WMAVOICE10: 11,
    OKI_ADPCM: 16,
    DVI_ADPCM: 17,
    MEDIASPACE_ADPCM: 18,
    SIERRA_ADPCM: 19,
    G723_ADPCM: 20,
    DIGISTD: 21,
    DIGIFIX: 22,
    DIALOGIC_OKI_ADPCM: 23,
    MEDIAVISION_ADPCM: 24,
    CU_CODEC: 25,
    HP_DYN_VOICE: 26,
    YAMAHA_ADPCM: 32,
    SONARC: 33,
    DSPGROUP_TRUESPEECH: 34,
    ECHOSC1: 35,
    AUDIOFILE_AF36: 36,
    APTX: 37,
    AUDIOFILE_AF10: 38,
    PROSODY_1612: 39,
    LRC: 40,
    DOLBY_AC2: 48,
    GSM610: 49,
    MSNAUDIO: 50,
    ANTEX_ADPCME: 51,
    CONTROL_RES_VQLPC: 52,
    DIGIREAL: 53,
    DIGIADPCM: 54,
    CONTROL_RES_CR10: 55,
    NMS_VBXADPCM: 56,
    CS_IMAADPCM: 57,
    ECHOSC3: 58,
    ROCKWELL_ADPCM: 59,
    ROCKWELL_DIGITALK: 60,
    XEBEC: 61,
    G721_ADPCM: 64,
    G728_CELP: 65,
    MSG723: 66,
    INTEL_G723_1: 67,
    INTEL_G729: 68,
    SHARP_G726: 69,
    MPEG: 80,
    RT24: 82,
    PAC: 83,
    MPEGLAYER3: 85,
    LUCENT_G723: 89,
    CIRRUS: 96,
    ESPCM: 97,
    VOXWARE: 98,
    CANOPUS_ATRAC: 99,
    G726_ADPCM: 100,
    G722_ADPCM: 101,
    DSAT: 102,
    DSAT_DISPLAY: 103,
    VOXWARE_BYTE_ALIGNED: 105,
    VOXWARE_AC8: 112,
    VOXWARE_AC10: 113,
    VOXWARE_AC16: 114,
    VOXWARE_AC20: 115,
    VOXWARE_RT24: 116,
    VOXWARE_RT29: 117,
    VOXWARE_RT29HW: 118,
    VOXWARE_VR12: 119,
    VOXWARE_VR18: 120,
    VOXWARE_TQ40: 121,
    VOXWARE_SC3: 122,
    VOXWARE_SC3_1: 123,
    SOFTSOUND: 128,
    VOXWARE_TQ60: 129,
    MSRT24: 130,
    G729A: 131,
    MVI_MVI2: 132,
    DF_G726: 133,
    DF_GSM610: 134,
    ISIAUDIO: 136,
    ONLIVE: 137,
    MULTITUDE_FT_SX20: 138,
    INFOCOM_ITS_G721_ADPCM: 139,
    CONVEDIA_G729: 140,
    CONGRUENCY: 141,
    SBC24: 145,
    DOLBY_AC3_SPDIF: 146,
    MEDIASONIC_G723: 147,
    PROSODY_8KBPS: 148,
    ZYXEL_ADPCM: 151,
    PHILIPS_LPCBB: 152,
    PACKED: 153,
    MALDEN_PHONYTALK: 160,
    RACAL_RECORDER_GSM: 161,
    RACAL_RECORDER_G720_A: 162,
    RACAL_RECORDER_G723_1: 163,
    RACAL_RECORDER_TETRA_ACELP: 164,
    NEC_AAC: 176,
    RAW_AAC1: 255,
    RHETOREX_ADPCM: 256,
    IRAT: 257,
    VIVO_G723: 273,
    VIVO_SIREN: 274,
    PHILIPS_CELP: 288,
    PHILIPS_GRUNDIG: 289,
    DIGITAL_G723: 291,
    SANYO_LD_ADPCM: 293,
    SIPROLAB_ACEPLNET: 304,
    SIPROLAB_ACELP4800: 305,
    SIPROLAB_ACELP8V3: 306,
    SIPROLAB_G729: 307,
    SIPROLAB_G729A: 308,
    SIPROLAB_KELVIN: 309,
    VOICEAGE_AMR: 310,
    G726ADPCM: 320,
    DICTAPHONE_CELP68: 321,
    DICTAPHONE_CELP54: 322,
    QUALCOMM_PUREVOICE: 336,
    QUALCOMM_HALFRATE: 337,
    TUBGSM: 341,
    MSAUDIO1: 352,
    WMAUDIO2: 353,
    WMAUDIO3: 354,
    WMAUDIO_LOSSLESS: 355,
    WMASPDIF: 356,
    UNISYS_NAP_ADPCM: 368,
    UNISYS_NAP_ULAW: 369,
    UNISYS_NAP_ALAW: 370,
    UNISYS_NAP_16K: 371,
    SYCOM_ACM_SYC008: 372,
    SYCOM_ACM_SYC701_G726L: 373,
    SYCOM_ACM_SYC701_CELP54: 374,
    SYCOM_ACM_SYC701_CELP68: 375,
    KNOWLEDGE_ADVENTURE_ADPCM: 376,
    FRAUNHOFER_IIS_MPEG2_AAC: 384,
    DTS_DS: 400,
    CREATIVE_ADPCM: 512,
    CREATIVE_FASTSPEECH8: 514,
    CREATIVE_FASTSPEECH10: 515,
    UHER_ADPCM: 528,
    ULEAD_DV_AUDIO: 533,
    ULEAD_DV_AUDIO_1: 534,
    QUARTERDECK: 544,
    ILINK_VC: 560,
    RAW_SPORT: 576,
    ESST_AC3: 577,
    GENERIC_PASSTHRU: 585,
    IPI_HSX: 592,
    IPI_RPELP: 593,
    CS2: 608,
    SONY_SCX: 624,
    SONY_SCY: 625,
    SONY_ATRAC3: 626,
    SONY_SPC: 627,
    TELUM_AUDIO: 640,
    TELUM_IA_AUDIO: 641,
    NORCOM_VOICE_SYSTEMS_ADPCM: 645,
    FM_TOWNS_SND: 768,
    MICRONAS: 848,
    MICRONAS_CELP833: 849,
    BTV_DIGITAL: 1024,
    INTEL_MUSIC_CODER: 1025,
    INDEO_AUDIO: 1026,
    QDESIGN_MUSIC: 1104,
    ON2_VP7_AUDIO: 1280,
    ON2_VP6_AUDIO: 1281,
    VME_VMPCM: 1664,
    TPC: 1665,
    LIGHTWAVE_LOSSLESS: 2222,
    OLIGSM: 4096,
    OLIADPCM: 4097,
    OLICELP: 4098,
    OLISBC: 4099,
    OLIOPR: 4100,
    LH_CODEC: 4352,
    LH_CODEC_CELP: 4353,
    LH_CODEC_SBC8: 4354,
    LH_CODEC_SBC12: 4355,
    LH_CODEC_SBC16: 4356,
    NORRIS: 5120,
    ISIAUDIO_2: 5121,
    SOUNDSPACE_MUSICOMPRESS: 5376,
    MPEG_ADTS_AAC: 5632,
    MPEG_RAW_AAC: 5633,
    MPEG_LOAS: 5634,
    NOKIA_MPEG_ADTS_AAC: 5640,
    NOKIA_MPEG_RAW_AAC: 5641,
    VODAFONE_MPEG_ADTS_AAC: 5642,
    VODAFONE_MPEG_RAW_AAC: 5643,
    MPEG_HEAAC: 5648,
    VOXWARE_RT24_SPEECH: 6172,
    SONICFOUNDRY_LOSSLESS: 6513,
    INNINGS_TELECOM_ADPCM: 6521,
    LUCENT_SX8300P: 7175,
    LUCENT_SX5363S: 7180,
    CUSEEME: 7939,
    NTCSOFT_ALF2CM_ACM: 8132,
    DVM: 8192,
    DTS2: 8193,
    MAKEAVIS: 13075,
    DIVIO_MPEG4_AAC: 16707,
    NOKIA_ADAPTIVE_MULTIRATE: 16897,
    DIVIO_G726: 16963,
    LEAD_SPEECH: 17228,
    LEAD_VORBIS: 22092,
    WAVPACK_AUDIO: 22358,
    OGG_VORBIS_MODE_1: 26447,
    OGG_VORBIS_MODE_2: 26448,
    OGG_VORBIS_MODE_3: 26449,
    OGG_VORBIS_MODE_1_PLUS: 26479,
    OGG_VORBIS_MODE_2_PLUS: 26480,
    OGG_VORBIS_MODE_3_PLUS: 26481,
    THREECOM_NBX: 28672,
    FAAD_AAC: 28781,
    AMR_NB: 29537,
    AMR_WB: 29538,
    AMR_WP: 29539,
    GSM_AMR_CBR: 31265,
    GSM_AMR_VBR_SID: 31266,
    COMVERSE_INFOSYS_G723_1: 41216,
    COMVERSE_INFOSYS_AVQSBC: 41217,
    COMVERSE_INFOSYS_SBC: 41218,
    SYMBOL_G729_A: 41219,
    VOICEAGE_AMR_WB: 41220,
    INGENIENT_G726: 41221,
    MPEG4_AAC: 41222,
    ENCORE_G726: 41223,
    ZOLL_ASAO: 41224,
    SPEEX_VOICE: 41225,
    VIANIX_MASC: 41226,
    WM9_SPECTRUM_ANALYZER: 41227,
    WMF_SPECTRUM_ANAYZER: 41228,
    GSM_610: 41229,
    GSM_620: 41230,
    GSM_660: 41231,
    GSM_690: 41232,
    GSM_ADAPTIVE_MULTIRATE_WB: 41233,
    POLYCOM_G722: 41234,
    POLYCOM_G728: 41235,
    POLYCOM_G729_A: 41236,
    POLYCOM_SIREN: 41237,
    GLOBAL_IP_ILBC: 41238,
    RADIOTIME_TIME_SHIFT_RADIO: 41239,
    NICE_ACA: 41240,
    NICE_ADPCM: 41241,
    VOCORD_G721: 41242,
    VOCORD_G726: 41243,
    VOCORD_G722_1: 41244,
    VOCORD_G728: 41245,
    VOCORD_G729: 41246,
    VOCORD_G729_A: 41247,
    VOCORD_G723_1: 41248,
    VOCORD_LBC: 41249,
    NICE_G728: 41250,
    FRANCE_TELECOM_G729: 41251,
    CODIAN: 41252,
    FLAC: 61868,
    EXTENSIBLE: 65534,
    DEVELOPMENT: 65535,

    0: "UNKNOWN",
    1: "PCM",
    2: "ADPCM",
    3: "IEEE_FLOAT",
    4: "VSELP",
    5: "IBM_CVSD",
    6: "ALAW",
    7: "MULAW",
    8: "DTS",
    9: "DRM",
    10: "WMAVOICE9",
    11: "WMAVOICE10",
    16: "OKI_ADPCM",
    17: "DVI_ADPCM",
    18: "MEDIASPACE_ADPCM",
    19: "SIERRA_ADPCM",
    20: "G723_ADPCM",
    21: "DIGISTD",
    22: "DIGIFIX",
    23: "DIALOGIC_OKI_ADPCM",
    24: "MEDIAVISION_ADPCM",
    25: "CU_CODEC",
    26: "HP_DYN_VOICE",
    32: "YAMAHA_ADPCM",
    33: "SONARC",
    34: "DSPGROUP_TRUESPEECH",
    35: "ECHOSC1",
    36: "AUDIOFILE_AF36",
    37: "APTX",
    38: "AUDIOFILE_AF10",
    39: "PROSODY_1612",
    40: "LRC",
    48: "DOLBY_AC2",
    49: "GSM610",
    50: "MSNAUDIO",
    51: "ANTEX_ADPCME",
    52: "CONTROL_RES_VQLPC",
    53: "DIGIREAL",
    54: "DIGIADPCM",
    55: "CONTROL_RES_CR10",
    56: "NMS_VBXADPCM",
    57: "CS_IMAADPCM",
    58: "ECHOSC3",
    59: "ROCKWELL_ADPCM",
    60: "ROCKWELL_DIGITALK",
    61: "XEBEC",
    64: "G721_ADPCM",
    65: "G728_CELP",
    66: "MSG723",
    67: "INTEL_G723_1",
    68: "INTEL_G729",
    69: "SHARP_G726",
    80: "MPEG",
    82: "RT24",
    83: "PAC",
    85: "MPEGLAYER3",
    89: "LUCENT_G723",
    96: "CIRRUS",
    97: "ESPCM",
    98: "VOXWARE",
    99: "CANOPUS_ATRAC",
    100: "G726_ADPCM",
    101: "G722_ADPCM",
    102: "DSAT",
    103: "DSAT_DISPLAY",
    105: "VOXWARE_BYTE_ALIGNED",
    112: "VOXWARE_AC8",
    113: "VOXWARE_AC10",
    114: "VOXWARE_AC16",
    115: "VOXWARE_AC20",
    116: "VOXWARE_RT24",
    117: "VOXWARE_RT29",
    118: "VOXWARE_RT29HW",
    119: "VOXWARE_VR12",
    120: "VOXWARE_VR18",
    121: "VOXWARE_TQ40",
    122: "VOXWARE_SC3",
    123: "VOXWARE_SC3_1",
    128: "SOFTSOUND",
    129: "VOXWARE_TQ60",
    130: "MSRT24",
    131: "G729A",
    132: "MVI_MVI2",
    133: "DF_G726",
    134: "DF_GSM610",
    136: "ISIAUDIO",
    137: "ONLIVE",
    138: "MULTITUDE_FT_SX20",
    139: "INFOCOM_ITS_G721_ADPCM",
    140: "CONVEDIA_G729",
    141: "CONGRUENCY",
    145: "SBC24",
    146: "DOLBY_AC3_SPDIF",
    147: "MEDIASONIC_G723",
    148: "PROSODY_8KBPS",
    151: "ZYXEL_ADPCM",
    152: "PHILIPS_LPCBB",
    153: "PACKED",
    160: "MALDEN_PHONYTALK",
    161: "RACAL_RECORDER_GSM",
    162: "RACAL_RECORDER_G720_A",
    163: "RACAL_RECORDER_G723_1",
    164: "RACAL_RECORDER_TETRA_ACELP",
    176: "NEC_AAC",
    255: "RAW_AAC1",
    256: "RHETOREX_ADPCM",
    257: "IRAT",
    273: "VIVO_G723",
    274: "VIVO_SIREN",
    288: "PHILIPS_CELP",
    289: "PHILIPS_GRUNDIG",
    291: "DIGITAL_G723",
    293: "SANYO_LD_ADPCM",
    304: "SIPROLAB_ACEPLNET",
    305: "SIPROLAB_ACELP4800",
    306: "SIPROLAB_ACELP8V3",
    307: "SIPROLAB_G729",
    308: "SIPROLAB_G729A",
    309: "SIPROLAB_KELVIN",
    310: "VOICEAGE_AMR",
    320: "G726ADPCM",
    321: "DICTAPHONE_CELP68",
    322: "DICTAPHONE_CELP54",
    336: "QUALCOMM_PUREVOICE",
    337: "QUALCOMM_HALFRATE",
    341: "TUBGSM",
    352: "MSAUDIO1",
    353: "WMAUDIO2",
    354: "WMAUDIO3",
    355: "WMAUDIO_LOSSLESS",
    356: "WMASPDIF",
    368: "UNISYS_NAP_ADPCM",
    369: "UNISYS_NAP_ULAW",
    370: "UNISYS_NAP_ALAW",
    371: "UNISYS_NAP_16K",
    372: "SYCOM_ACM_SYC008",
    373: "SYCOM_ACM_SYC701_G726L",
    374: "SYCOM_ACM_SYC701_CELP54",
    375: "SYCOM_ACM_SYC701_CELP68",
    376: "KNOWLEDGE_ADVENTURE_ADPCM",
    384: "FRAUNHOFER_IIS_MPEG2_AAC",
    400: "DTS_DS",
    512: "CREATIVE_ADPCM",
    514: "CREATIVE_FASTSPEECH8",
    515: "CREATIVE_FASTSPEECH10",
    528: "UHER_ADPCM",
    533: "ULEAD_DV_AUDIO",
    534: "ULEAD_DV_AUDIO_1",
    544: "QUARTERDECK",
    560: "ILINK_VC",
    576: "RAW_SPORT",
    577: "ESST_AC3",
    585: "GENERIC_PASSTHRU",
    592: "IPI_HSX",
    593: "IPI_RPELP",
    608: "CS2",
    624: "SONY_SCX",
    625: "SONY_SCY",
    626: "SONY_ATRAC3",
    627: "SONY_SPC",
    640: "TELUM_AUDIO",
    641: "TELUM_IA_AUDIO",
    645: "NORCOM_VOICE_SYSTEMS_ADPCM",
    768: "FM_TOWNS_SND",
    848: "MICRONAS",
    849: "MICRONAS_CELP833",
    1024: "BTV_DIGITAL",
    1025: "INTEL_MUSIC_CODER",
    1026: "INDEO_AUDIO",
    1104: "QDESIGN_MUSIC",
    1280: "ON2_VP7_AUDIO",
    1281: "ON2_VP6_AUDIO",
    1664: "VME_VMPCM",
    1665: "TPC",
    2222: "LIGHTWAVE_LOSSLESS",
    4096: "OLIGSM",
    4097: "OLIADPCM",
    4098: "OLICELP",
    4099: "OLISBC",
    4100: "OLIOPR",
    4352: "LH_CODEC",
    4353: "LH_CODEC_CELP",
    4354: "LH_CODEC_SBC8",
    4355: "LH_CODEC_SBC12",
    4356: "LH_CODEC_SBC16",
    5120: "NORRIS",
    5121: "ISIAUDIO_2",
    5376: "SOUNDSPACE_MUSICOMPRESS",
    5632: "MPEG_ADTS_AAC",
    5633: "MPEG_RAW_AAC",
    5634: "MPEG_LOAS",
    5640: "NOKIA_MPEG_ADTS_AAC",
    5641: "NOKIA_MPEG_RAW_AAC",
    5642: "VODAFONE_MPEG_ADTS_AAC",
    5643: "VODAFONE_MPEG_RAW_AAC",
    5648: "MPEG_HEAAC",
    6172: "VOXWARE_RT24_SPEECH",
    6513: "SONICFOUNDRY_LOSSLESS",
    6521: "INNINGS_TELECOM_ADPCM",
    7175: "LUCENT_SX8300P",
    7180: "LUCENT_SX5363S",
    7939: "CUSEEME",
    8132: "NTCSOFT_ALF2CM_ACM",
    8192: "DVM",
    8193: "DTS2",
    13075: "MAKEAVIS",
    16707: "DIVIO_MPEG4_AAC",
    16897: "NOKIA_ADAPTIVE_MULTIRATE",
    16963: "DIVIO_G726",
    17228: "LEAD_SPEECH",
    22092: "LEAD_VORBIS",
    22358: "WAVPACK_AUDIO",
    26447: "OGG_VORBIS_MODE_1",
    26448: "OGG_VORBIS_MODE_2",
    26449: "OGG_VORBIS_MODE_3",
    26479: "OGG_VORBIS_MODE_1_PLUS",
    26480: "OGG_VORBIS_MODE_2_PLUS",
    26481: "OGG_VORBIS_MODE_3_PLUS",
    28672: "THREECOM_NBX",
    28781: "FAAD_AAC",
    29537: "AMR_NB",
    29538: "AMR_WB",
    29539: "AMR_WP",
    31265: "GSM_AMR_CBR",
    31266: "GSM_AMR_VBR_SID",
    41216: "COMVERSE_INFOSYS_G723_1",
    41217: "COMVERSE_INFOSYS_AVQSBC",
    41218: "COMVERSE_INFOSYS_SBC",
    41219: "SYMBOL_G729_A",
    41220: "VOICEAGE_AMR_WB",
    41221: "INGENIENT_G726",
    41222: "MPEG4_AAC",
    41223: "ENCORE_G726",
    41224: "ZOLL_ASAO",
    41225: "SPEEX_VOICE",
    41226: "VIANIX_MASC",
    41227: "WM9_SPECTRUM_ANALYZER",
    41228: "WMF_SPECTRUM_ANAYZER",
    41229: "GSM_610",
    41230: "GSM_620",
    41231: "GSM_660",
    41232: "GSM_690",
    41233: "GSM_ADAPTIVE_MULTIRATE_WB",
    41234: "POLYCOM_G722",
    41235: "POLYCOM_G728",
    41236: "POLYCOM_G729_A",
    41237: "POLYCOM_SIREN",
    41238: "GLOBAL_IP_ILBC",
    41239: "RADIOTIME_TIME_SHIFT_RADIO",
    41240: "NICE_ACA",
    41241: "NICE_ADPCM",
    41242: "VOCORD_G721",
    41243: "VOCORD_G726",
    41244: "VOCORD_G722_1",
    41245: "VOCORD_G728",
    41246: "VOCORD_G729",
    41247: "VOCORD_G729_A",
    41248: "VOCORD_G723_1",
    41249: "VOCORD_LBC",
    41250: "NICE_G728",
    41251: "FRANCE_TELECOM_G729",
    41252: "CODIAN",
    61868: "FLAC",
    65534: "EXTENSIBLE",
    65535: "DEVELOPMENT",
  });

  function Wav(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Wav.prototype._read = function() {
    this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.chunk = new Riff_.Riff.Chunk(this._io, null, null);
    this.chunk._read();
    this._debug.chunk.end = this._io.pos;
  }

  /**
   * @see {@link https://www.mmsp.ece.mcgill.ca/Documents/Downloads/AFsp/|Source}
   */

  var AfspChunkType = Wav.AfspChunkType = (function() {
    function AfspChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    AfspChunkType.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readBytes(4);
      this._debug.magic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([65, 70, 115, 112])) == 0))) {
        var _err = new KaitaiStream.ValidationNotEqualError(new Uint8Array([65, 70, 115, 112]), this.magic, this._io, "/types/afsp_chunk_type/seq/0");
        this._debug.magic.validationError = _err;
        throw _err;
      }
      this._debug.infoRecords = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.infoRecords.arr = [];
      this.infoRecords = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.infoRecords.arr[this.infoRecords.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.infoRecords.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII"));
        this._debug.infoRecords.arr[this.infoRecords.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.infoRecords.end = this._io.pos;
    }

    /**
     * An array of AFsp information records, in the `<field_name>: <value>`
     * format (e.g. "`program: CopyAudio`"). The list of existing information
     * record types are available in the `doc-ref` links.
     * @see {@link https://www.mmsp.ece.mcgill.ca/Documents/Software/Packages/AFsp/libtsp/AF/AFsetInfo.html|Source}
     * @see {@link https://www.mmsp.ece.mcgill.ca/Documents/Software/Packages/AFsp/libtsp/AF/AFprintInfoRecs.html|Source}
     */

    return AfspChunkType;
  })();

  /**
   * @see {@link https://tech.ebu.ch/docs/tech/tech3285s5.pdf|Source}
   */

  var AxmlChunkType = Wav.AxmlChunkType = (function() {
    function AxmlChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    AxmlChunkType.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = KaitaiStream.bytesToStr(this._io.readBytesFull(), "UTF-8");
      this._debug.data.end = this._io.pos;
    }

    return AxmlChunkType;
  })();

  /**
   * @see {@link https://en.wikipedia.org/wiki/Broadcast_Wave_Format|Source}
   */

  var BextChunkType = Wav.BextChunkType = (function() {
    function BextChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    BextChunkType.prototype._read = function() {
      this._debug.description = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.description = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(256), 0, false), "ASCII");
      this._debug.description.end = this._io.pos;
      this._debug.originator = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.originator = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(32), 0, false), "ASCII");
      this._debug.originator.end = this._io.pos;
      this._debug.originatorReference = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.originatorReference = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(32), 0, false), "ASCII");
      this._debug.originatorReference.end = this._io.pos;
      this._debug.originationDate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.originationDate = KaitaiStream.bytesToStr(this._io.readBytes(10), "ASCII");
      this._debug.originationDate.end = this._io.pos;
      this._debug.originationTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.originationTime = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
      this._debug.originationTime.end = this._io.pos;
      this._debug.timeReferenceLow = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeReferenceLow = this._io.readU4le();
      this._debug.timeReferenceLow.end = this._io.pos;
      this._debug.timeReferenceHigh = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeReferenceHigh = this._io.readU4le();
      this._debug.timeReferenceHigh.end = this._io.pos;
      this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.version = this._io.readU2le();
      this._debug.version.end = this._io.pos;
      this._debug.umid = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.umid = this._io.readBytes(64);
      this._debug.umid.end = this._io.pos;
      this._debug.loudnessValue = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.loudnessValue = this._io.readU2le();
      this._debug.loudnessValue.end = this._io.pos;
      this._debug.loudnessRange = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.loudnessRange = this._io.readU2le();
      this._debug.loudnessRange.end = this._io.pos;
      this._debug.maxTruePeakLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxTruePeakLevel = this._io.readU2le();
      this._debug.maxTruePeakLevel.end = this._io.pos;
      this._debug.maxMomentaryLoudness = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxMomentaryLoudness = this._io.readU2le();
      this._debug.maxMomentaryLoudness.end = this._io.pos;
      this._debug.maxShortTermLoudness = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxShortTermLoudness = this._io.readU2le();
      this._debug.maxShortTermLoudness.end = this._io.pos;
    }

    return BextChunkType;
  })();

  var ChannelMaskAndSubformatType = Wav.ChannelMaskAndSubformatType = (function() {
    function ChannelMaskAndSubformatType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ChannelMaskAndSubformatType.prototype._read = function() {
      this._debug.dwChannelMask = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwChannelMask = new ChannelMaskType(this._io, this, this._root);
      this.dwChannelMask._read();
      this._debug.dwChannelMask.end = this._io.pos;
      this._debug.subformat = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.subformat = new GuidType(this._io, this, this._root);
      this.subformat._read();
      this._debug.subformat.end = this._io.pos;
    }

    return ChannelMaskAndSubformatType;
  })();

  var ChannelMaskType = Wav.ChannelMaskType = (function() {
    function ChannelMaskType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ChannelMaskType.prototype._read = function() {
      this._debug.frontRightOfCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frontRightOfCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.frontRightOfCenter.end = this._io.pos;
      this._debug.frontLeftOfCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frontLeftOfCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.frontLeftOfCenter.end = this._io.pos;
      this._debug.backRight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.backRight = this._io.readBitsIntBe(1) != 0;
      this._debug.backRight.end = this._io.pos;
      this._debug.backLeft = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.backLeft = this._io.readBitsIntBe(1) != 0;
      this._debug.backLeft.end = this._io.pos;
      this._debug.lowFrequency = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lowFrequency = this._io.readBitsIntBe(1) != 0;
      this._debug.lowFrequency.end = this._io.pos;
      this._debug.frontCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frontCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.frontCenter.end = this._io.pos;
      this._debug.frontRight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frontRight = this._io.readBitsIntBe(1) != 0;
      this._debug.frontRight.end = this._io.pos;
      this._debug.frontLeft = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.frontLeft = this._io.readBitsIntBe(1) != 0;
      this._debug.frontLeft.end = this._io.pos;
      this._debug.topCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.topCenter.end = this._io.pos;
      this._debug.sideRight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sideRight = this._io.readBitsIntBe(1) != 0;
      this._debug.sideRight.end = this._io.pos;
      this._debug.sideLeft = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sideLeft = this._io.readBitsIntBe(1) != 0;
      this._debug.sideLeft.end = this._io.pos;
      this._debug.backCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.backCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.backCenter.end = this._io.pos;
      this._debug.topBackLeft = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topBackLeft = this._io.readBitsIntBe(1) != 0;
      this._debug.topBackLeft.end = this._io.pos;
      this._debug.topFrontRight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topFrontRight = this._io.readBitsIntBe(1) != 0;
      this._debug.topFrontRight.end = this._io.pos;
      this._debug.topFrontCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topFrontCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.topFrontCenter.end = this._io.pos;
      this._debug.topFrontLeft = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topFrontLeft = this._io.readBitsIntBe(1) != 0;
      this._debug.topFrontLeft.end = this._io.pos;
      this._debug.unused1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.unused1 = this._io.readBitsIntBe(6);
      this._debug.unused1.end = this._io.pos;
      this._debug.topBackRight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topBackRight = this._io.readBitsIntBe(1) != 0;
      this._debug.topBackRight.end = this._io.pos;
      this._debug.topBackCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.topBackCenter = this._io.readBitsIntBe(1) != 0;
      this._debug.topBackCenter.end = this._io.pos;
      this._debug.unused2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.unused2 = this._io.readBitsIntBe(8);
      this._debug.unused2.end = this._io.pos;
    }

    return ChannelMaskType;
  })();

  var ChunkType = Wav.ChunkType = (function() {
    function ChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ChunkType.prototype._read = function() {
      this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chunk = new Riff_.Riff.Chunk(this._io, null, null);
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
        case Wav.Fourcc.AFSP:
          this._m_chunkData = new AfspChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.AXML:
          this._m_chunkData = new AxmlChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.BEXT:
          this._m_chunkData = new BextChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.CUE:
          this._m_chunkData = new CueChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.DATA:
          this._m_chunkData = new DataChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.FACT:
          this._m_chunkData = new FactChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.FMT:
          this._m_chunkData = new FormatChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.IXML:
          this._m_chunkData = new IxmlChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.LIST:
          this._m_chunkData = new ListChunkType(io, this, this._root);
          this._m_chunkData._read();
          break;
        case Wav.Fourcc.PMX:
          this._m_chunkData = new PmxChunkType(io, this, this._root);
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
        this._debug._m_chunkId = { enumName: "Wav.Fourcc" };
        this._m_chunkId = this.chunk.id;
        return this._m_chunkId;
      }
    });

    return ChunkType;
  })();

  var CueChunkType = Wav.CueChunkType = (function() {
    function CueChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CueChunkType.prototype._read = function() {
      this._debug.dwCuePoints = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwCuePoints = this._io.readU4le();
      this._debug.dwCuePoints.end = this._io.pos;
      this._debug.cuePoints = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._debug.cuePoints.arr = [];
      this.cuePoints = [];
      for (var i = 0; i < this.dwCuePoints; i++) {
        this._debug.cuePoints.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_cuePoints = new CuePointType(this._io, this, this._root);
        try {
          _t_cuePoints._read();
        } finally {
          this.cuePoints.push(_t_cuePoints);
        }
        this._debug.cuePoints.arr[i].end = this._io.pos;
      }
      this._debug.cuePoints.end = this._io.pos;
    }

    return CueChunkType;
  })();

  var CuePointType = Wav.CuePointType = (function() {
    function CuePointType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    CuePointType.prototype._read = function() {
      this._debug.dwName = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwName = this._io.readU4le();
      this._debug.dwName.end = this._io.pos;
      this._debug.dwPosition = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwPosition = this._io.readU4le();
      this._debug.dwPosition.end = this._io.pos;
      this._debug.fccChunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fccChunk = this._io.readU4le();
      this._debug.fccChunk.end = this._io.pos;
      this._debug.dwChunkStart = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwChunkStart = this._io.readU4le();
      this._debug.dwChunkStart.end = this._io.pos;
      this._debug.dwBlockStart = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwBlockStart = this._io.readU4le();
      this._debug.dwBlockStart.end = this._io.pos;
      this._debug.dwSampleOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dwSampleOffset = this._io.readU4le();
      this._debug.dwSampleOffset.end = this._io.pos;
    }

    return CuePointType;
  })();

  var DataChunkType = Wav.DataChunkType = (function() {
    function DataChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    DataChunkType.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = this._io.readBytesFull();
      this._debug.data.end = this._io.pos;
    }

    return DataChunkType;
  })();

  /**
   * required for all non-PCM formats
   * (`w_format_tag != w_format_tag_type::pcm` or `not is_basic_pcm` in
   * `format_chunk_type` context)
   */

  var FactChunkType = Wav.FactChunkType = (function() {
    function FactChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FactChunkType.prototype._read = function() {
      this._debug.numSamplesPerChannel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numSamplesPerChannel = this._io.readU4le();
      this._debug.numSamplesPerChannel.end = this._io.pos;
    }

    return FactChunkType;
  })();

  var FormatChunkType = Wav.FormatChunkType = (function() {
    function FormatChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    FormatChunkType.prototype._read = function() {
      this._debug.wFormatTag = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Wav.WFormatTagType" };
      this.wFormatTag = this._io.readU2le();
      this._debug.wFormatTag.end = this._io.pos;
      this._debug.nChannels = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nChannels = this._io.readU2le();
      this._debug.nChannels.end = this._io.pos;
      this._debug.nSamplesPerSec = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nSamplesPerSec = this._io.readU4le();
      this._debug.nSamplesPerSec.end = this._io.pos;
      this._debug.nAvgBytesPerSec = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nAvgBytesPerSec = this._io.readU4le();
      this._debug.nAvgBytesPerSec.end = this._io.pos;
      this._debug.nBlockAlign = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nBlockAlign = this._io.readU2le();
      this._debug.nBlockAlign.end = this._io.pos;
      this._debug.wBitsPerSample = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.wBitsPerSample = this._io.readU2le();
      this._debug.wBitsPerSample.end = this._io.pos;
      if (!(this.isBasicPcm)) {
        this._debug.cbSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.cbSize = this._io.readU2le();
        this._debug.cbSize.end = this._io.pos;
      }
      if (this.isCbSizeMeaningful) {
        this._debug.wValidBitsPerSample = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.wValidBitsPerSample = this._io.readU2le();
        this._debug.wValidBitsPerSample.end = this._io.pos;
      }
      if (this.isExtensible) {
        this._debug.channelMaskAndSubformat = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.channelMaskAndSubformat = new ChannelMaskAndSubformatType(this._io, this, this._root);
        this.channelMaskAndSubformat._read();
        this._debug.channelMaskAndSubformat.end = this._io.pos;
      }
    }
    Object.defineProperty(FormatChunkType.prototype, 'isBasicFloat', {
      get: function() {
        if (this._m_isBasicFloat !== undefined)
          return this._m_isBasicFloat;
        this._debug._m_isBasicFloat = {  };
        this._m_isBasicFloat = this.wFormatTag == Wav.WFormatTagType.IEEE_FLOAT;
        return this._m_isBasicFloat;
      }
    });
    Object.defineProperty(FormatChunkType.prototype, 'isBasicPcm', {
      get: function() {
        if (this._m_isBasicPcm !== undefined)
          return this._m_isBasicPcm;
        this._debug._m_isBasicPcm = {  };
        this._m_isBasicPcm = this.wFormatTag == Wav.WFormatTagType.PCM;
        return this._m_isBasicPcm;
      }
    });
    Object.defineProperty(FormatChunkType.prototype, 'isCbSizeMeaningful', {
      get: function() {
        if (this._m_isCbSizeMeaningful !== undefined)
          return this._m_isCbSizeMeaningful;
        this._debug._m_isCbSizeMeaningful = {  };
        this._m_isCbSizeMeaningful =  ((!(this.isBasicPcm)) && (this.cbSize != 0)) ;
        return this._m_isCbSizeMeaningful;
      }
    });
    Object.defineProperty(FormatChunkType.prototype, 'isExtensible', {
      get: function() {
        if (this._m_isExtensible !== undefined)
          return this._m_isExtensible;
        this._debug._m_isExtensible = {  };
        this._m_isExtensible = this.wFormatTag == Wav.WFormatTagType.EXTENSIBLE;
        return this._m_isExtensible;
      }
    });

    return FormatChunkType;
  })();

  var GuidType = Wav.GuidType = (function() {
    function GuidType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    GuidType.prototype._read = function() {
      this._debug.data1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data1 = this._io.readU4le();
      this._debug.data1.end = this._io.pos;
      this._debug.data2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data2 = this._io.readU2le();
      this._debug.data2.end = this._io.pos;
      this._debug.data3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data3 = this._io.readU2le();
      this._debug.data3.end = this._io.pos;
      this._debug.data4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data4 = this._io.readU4be();
      this._debug.data4.end = this._io.pos;
      this._debug.data4a = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data4a = this._io.readU4be();
      this._debug.data4a.end = this._io.pos;
    }

    return GuidType;
  })();

  var InfoChunkType = Wav.InfoChunkType = (function() {
    function InfoChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    InfoChunkType.prototype._read = function() {
      this._debug.chunk = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chunk = new Riff_.Riff.Chunk(this._io, null, null);
      this.chunk._read();
      this._debug.chunk.end = this._io.pos;
    }
    Object.defineProperty(InfoChunkType.prototype, 'chunkData', {
      get: function() {
        if (this._m_chunkData !== undefined)
          return this._m_chunkData;
        var io = this.chunk.dataSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_chunkData = { start: io.pos, ioOffset: io.byteOffset };
        this._m_chunkData = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
        this._debug._m_chunkData.end = io.pos;
        io.seek(_pos);
        return this._m_chunkData;
      }
    });

    return InfoChunkType;
  })();

  /**
   * @see {@link https://en.wikipedia.org/wiki/IXML|Source}
   */

  var IxmlChunkType = Wav.IxmlChunkType = (function() {
    function IxmlChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    IxmlChunkType.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = KaitaiStream.bytesToStr(this._io.readBytesFull(), "UTF-8");
      this._debug.data.end = this._io.pos;
    }

    return IxmlChunkType;
  })();

  var ListChunkType = Wav.ListChunkType = (function() {
    function ListChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    ListChunkType.prototype._read = function() {
      this._debug.parentChunkData = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.parentChunkData = new Riff_.Riff.ParentChunkData(this._io, null, null);
      this.parentChunkData._read();
      this._debug.parentChunkData.end = this._io.pos;
    }
    Object.defineProperty(ListChunkType.prototype, 'formType', {
      get: function() {
        if (this._m_formType !== undefined)
          return this._m_formType;
        this._debug._m_formType = { enumName: "Wav.Fourcc" };
        this._m_formType = this.parentChunkData.formType;
        return this._m_formType;
      }
    });
    Object.defineProperty(ListChunkType.prototype, 'subchunks', {
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
          case Wav.Fourcc.INFO:
            var _t__m_subchunks = new InfoChunkType(io, this, this._root);
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

    return ListChunkType;
  })();

  var PmxChunkType = Wav.PmxChunkType = (function() {
    function PmxChunkType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    PmxChunkType.prototype._read = function() {
      this._debug.data = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.data = KaitaiStream.bytesToStr(this._io.readBytesFull(), "UTF-8");
      this._debug.data.end = this._io.pos;
    }

    /**
     * XMP data
     * @see {@link https://github.com/adobe/XMP-Toolkit-SDK/blob/v2022.06/docs/XMPSpecificationPart3.pdf|Source}
     */

    return PmxChunkType;
  })();

  var SampleType = Wav.SampleType = (function() {
    function SampleType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SampleType.prototype._read = function() {
      this._debug.sample = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sample = this._io.readU2le();
      this._debug.sample.end = this._io.pos;
    }

    return SampleType;
  })();

  var SamplesType = Wav.SamplesType = (function() {
    function SamplesType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root;
      this._debug = {};

    }
    SamplesType.prototype._read = function() {
      this._debug.samples = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.samples = this._io.readU4le();
      this._debug.samples.end = this._io.pos;
    }

    return SamplesType;
  })();
  Object.defineProperty(Wav.prototype, 'chunkId', {
    get: function() {
      if (this._m_chunkId !== undefined)
        return this._m_chunkId;
      this._debug._m_chunkId = { enumName: "Wav.Fourcc" };
      this._m_chunkId = this.chunk.id;
      return this._m_chunkId;
    }
  });
  Object.defineProperty(Wav.prototype, 'formType', {
    get: function() {
      if (this._m_formType !== undefined)
        return this._m_formType;
      this._debug._m_formType = { enumName: "Wav.Fourcc" };
      this._m_formType = this.parentChunkData.formType;
      return this._m_formType;
    }
  });
  Object.defineProperty(Wav.prototype, 'isFormTypeWave', {
    get: function() {
      if (this._m_isFormTypeWave !== undefined)
        return this._m_isFormTypeWave;
      this._debug._m_isFormTypeWave = {  };
      this._m_isFormTypeWave =  ((this.isRiffChunk) && (this.formType == Wav.Fourcc.WAVE)) ;
      return this._m_isFormTypeWave;
    }
  });
  Object.defineProperty(Wav.prototype, 'isRiffChunk', {
    get: function() {
      if (this._m_isRiffChunk !== undefined)
        return this._m_isRiffChunk;
      this._debug._m_isRiffChunk = {  };
      this._m_isRiffChunk = this.chunkId == Wav.Fourcc.RIFF;
      return this._m_isRiffChunk;
    }
  });
  Object.defineProperty(Wav.prototype, 'parentChunkData', {
    get: function() {
      if (this._m_parentChunkData !== undefined)
        return this._m_parentChunkData;
      if (this.isRiffChunk) {
        var io = this.chunk.dataSlot._io;
        var _pos = io.pos;
        io.seek(0);
        this._debug._m_parentChunkData = { start: io.pos, ioOffset: io.byteOffset };
        this._m_parentChunkData = new Riff_.Riff.ParentChunkData(io, null, null);
        this._m_parentChunkData._read();
        this._debug._m_parentChunkData.end = io.pos;
        io.seek(_pos);
      }
      return this._m_parentChunkData;
    }
  });
  Object.defineProperty(Wav.prototype, 'subchunks', {
    get: function() {
      if (this._m_subchunks !== undefined)
        return this._m_subchunks;
      if (this.isFormTypeWave) {
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

  return Wav;
})();
Wav_.Wav = Wav;
});
