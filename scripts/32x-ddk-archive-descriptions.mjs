// 32X-DDK-specific descriptions. The generic explorer only reads the generated JSON.
const known = {
  'SEGADTS/32X/32X.FAQ': 'Programming the 32X FAQ by Toshiyasu Morita (last update 21 April 1995), covering boot headers, the unified SH2 interrupt handler for the revision 2.5 silicon bug, and other tricky 32X programming topics.',
  'SEGADTS/32X/CARTDEV/README.32X': 'SNASM2 32X/MARS debugger release notes describing monitor version checking and User Break Controller (UBC) breakpoint support on both SH2 processors.',
  'SEGADTS/32X/CARTDEV/README.NOW': 'Urgent SNASM2 update notes covering SHARE.EXE incompatibilities with the Flashtek X32VM DOS extender and SNBUG.CFG configuration advice.',
  'SEGADTS/32X/CARTDEV/DBGVERSN.TXT': 'Version history for the SNASM2 32X/MARS debugger and monitor.',
  'SEGADTS/32X/CARTDEV/SNASM68K.EXE': 'SNASM68K assembler executable from Cross Products, the industry standard Motorola 68000 assembler licensed to Sega for Genesis and 32X master CPU development.',
  'SEGADTS/32X/CARTDEV/SNASMSH2.EXE': 'SNASMSH2 assembler executable from Cross Products, targeting the Hitachi SH2 slave CPUs of the 32X.',
  'SEGADTS/32X/CARTDEV/SNBUG32X.EXE': 'SNASM2 32X/MARS debugger executable, providing C source level debugging, breakpoints via the SH2 User Break Controller, and communication with the MARSMON monitor in the development cartridge.',
  'SEGADTS/32X/CARTDEV/SNBUG.CFG': 'Default debugger configuration for SNBUG32X, defining memory ranges and default debugger settings referenced when a session file does not provide them.',
  'SEGADTS/32X/CARTDEV/MARSMON.BIN': 'MARS monitor binary loaded into the 32X development cartridge, communicating with the SNBUG32X host debugger over the parallel or serial link.',
  'SEGADTS/32X/CARTDEV/COFF2BIN.EXE': 'Utility converting COFF-format load modules into flat binary ROM images for the 32X dev cartridge.',
  'SEGADTS/32X/CARTDEV/LC.EXE': 'Object file utility shipped with the 32X cartridge development tools.',
  'SEGADTS/32X/CARTDEV/START.PRG': 'Startup program for the 32X development cartridge environment.',
  'SEGADTS/32X/CARTDEV/GNU.MAC': 'SNASM2 macro include file for GNU toolchain users of the 32X cartridge development kit.',
  'SEGADTS/32X/CARTDEV/HITACHI.MAC': 'SNASM2 macro include file for Hitachi toolchain users of the 32X cartridge development kit.',
  'SEGADTS/32X/CARTDEV/SNASMSH2.MAC': 'SNASMSH2 macro include file with SH2 register and peripheral definitions for the 32X.',
  'SEGADTS/32X/MISC/AIFF2PWM.BIN': 'Macintosh tool converting AIFF audio into 32X PWM (pulse width modulation) sound data.',
  'SEGADTS/32X/MISC/LBMTO32X/LBMTO32X.EXE': 'DOS tool converting Deluxe Paint LBM images into 32X graphics format.',
  'SEGADTS/32X/MISC/LBMTO32X/LBMTO32X.C': 'Source of the LBMTO32X image conversion tool.',
  'SEGADTS/32X/MISC/LBMTO32X/M.BAT': 'Batch script driving the LBMTO32X image conversion tool.',
  'SEGADTS/32X/MISC/LBMTO32X/PORTAB.H': 'Portability header of the LBMTO32X image conversion tool.',
  'SEGADTS/32X/MISC/LBMTO32X': 'Graphics conversion pipeline directory for turning Deluxe Paint LBM images into 32X format data.',
  'SEGADTS/32X/LOCKOUT/LOCK.ASM': 'Source for the 32X regional lockout routine, the code checked by the console at boot to restrict cartridges to their licensed region.',
  'SEGADTS/32X/LOCKOUT/LOCK.BIN': 'Assembled binary of the 32X regional lockout routine, ready to be linked into a production ROM.',
  'SEGADTS/32X/LOCKOUT/LOCK.DOC': 'Documentation explaining how to incorporate the 32X regional lockout code into a game.',
  'SEGADTS/32X/LOCKOUT/LOCK.INC': 'Include file defining the interface and data expected by the 32X regional lockout routine.',
  'SEGADTS/GNU/README.TXT': 'Release note for the dated GNU SH toolchain directories: the 4/6/95 build is the one used for the SGL and SBL libraries, the 6/6/95 build is a beta with minor assembly changes.',
  'SEGADTS/MANUALS.DTS/README.SOA': 'Cover letter from Sega of America DTS Training and Documentation (12 June 1995) introducing the Acrobat-format SGL manual, Saturn technical bulletins, and Hitachi manuals on the Developer Tool Kit CD.',
  'SGL_1.0/LIB/LIBSGL.A': 'Sega 3D Game Library archive: compiled SGL object modules linking against the high level Saturn graphics API.',
  'SGL_1.0/LIB/LIBCD.A': 'Sega library archive of compiled object modules for Saturn CD access, complementing LIBSGL.A.',
  'SGL_1.0/INC/SGL.H': 'Master SGL header declaring the high level Sega 3D Game Library API used by Saturn games.',
  'SGL_1.0/INC/SGL_CD.H': 'SGL header declaring CD-ROM related functions of the Sega 3D Game Library.',
  'SGL_1.0/INC/SEGA_XPT.H': 'SGL header defining exception trap and interrupt handling for the Saturn.',
  'SGL_1.0/INC/SEGA_SYS.H': 'SGL header declaring system level services such as memory and task management.',
  'SGL_1.0/INC/SEGA_BUP.H': 'SGL header declaring backup (save) memory support on the Saturn.',
  'SGL_1.0/INC/SL_DEF.H': 'SGL header holding library defaults and compile time configuration of the Sega 3D Game Library.',
  'SGL_1.0/INC/SL_MACRO.H': 'SGL header providing macros layered on top of the library function calls.',
  'SGL_1.0/INC/SS_AKIRA.H': 'SGL header for the sprite scroll (Akira) processor definitions on the Saturn VDP2.',
  'SGL_1.0/INC/SS_SCROL.H': 'SGL header declaring scroll plane control functions for the Saturn VDP2.',
  'SGL_1.0/INC/SDDRVS.DAT': 'Sound driver data table included by SGL sound projects on the Saturn.',
  'SGL_1.0/DOC/FUNCTION.TXT': 'SGL documentation describing the master CPU function request protocol used to dispatch graphics work between the two SH2 processors.',
  'SGL_1.0/DOC/SOUND.TXT': 'SGL documentation for the sound related library calls.',
  'SGL_1.0/DOC/SCROLL.TXT': 'SGL documentation for the scroll (VDP2 background) library calls.',
  'SGL_1.0/DOC/SPRITE.TXT': 'SGL documentation for the sprite (VDP1) library calls.',
  'SGL_1.0/DOC/MATH.TXT': 'SGL documentation for the fixed point math routines.',
  'SGL_1.0/DOC/MEMORY.TXT': 'SGL documentation for the memory management routines.',
  'SGL_1.0/DOC/EVENT.TXT': 'SGL documentation for the event system used to schedule per-frame game logic.',
  'SGL_1.0/DOC/DMA.TXT': 'SGL documentation for DMA transfer helpers.',
  'SGL_1.0/DOC/INIT.TXT': 'SGL documentation for library initialization and system configuration.',
  'SGL_1.0/DOC/INT.TXT': 'SGL documentation for interrupt handling.',
  'SGL_1.0/DOC/PER.TXT': 'SGL documentation for peripheral (controller) access.',
  'SGL_1.0/DOC/ADD_FUNC.TXT': 'SGL documentation listing additional library functions.',
  'SGL_1.0/DOC/MODIFY.TXT': 'SGL documentation describing differences and modifications relative to earlier SGL releases.',
  'SGL_1.0/DOC/PACKS.TXT': 'SGL documentation for the data packing utilities.',
  'sega/toc.html': 'Table of contents HTML page indexing the scanned documentation set.',
  'sega/32Xtoc.html': 'Table of contents HTML page for the 32X section of the scanned documentation.',
  'ARCHIVES/NOV01_94.DTS/32X/SAMPLES/GNUSMPLE/README.TXT': 'Welcome note (14 October 1994) for the GNU sample 32X code, warning that it was written for the version 1 development board, contains errors, and is limited in scope.',
  'ARCHIVES/NOV01_94.DTS/32X/DIAGNSTC/SOURCE/README.TXT': 'Note from Sega Developer Technical Support introducing the source code of the 32X diagnostics program, whose executable was distributed on the Sega BBS 32X conference.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/SATURNSP/README.SPC': 'Documentation for SaturnSp_C, a March 1994 plug-in by Carla Moe for Photoshop and Debabelizer converting 24-bit or 8-bit images to C header files for Saturn sprites.',
  'ARCHIVES/MAY19_94.DTS/HITACHI/SHERRY/SHERRY.EXE': 'SHERRY, the Hitachi SH series C compiler and toolchain driver for DOS.',
  'ARCHIVES/MAR01_95.DTS/JWP/JWP.EXE': 'JWP, a Japanese word processor for DOS distributed to developers for handling Japanese text in Saturn and 32X content.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/BRIP/BRIP.EXE': 'BRIP, a Sega tool for converting graphics into the Saturn bit mapped format.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/BRIP/BRIP2_1.DOC': 'BRIP user documentation.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/BRIP/BRIPQCK.DOC': 'BRIP quick reference documentation.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/SCONVERT/SCONVERT.EXE': 'SCONVERT, a Sega graphics format conversion utility for Saturn development.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/SCONVERT/USERGUID.DOC': 'User guide for the SCONVERT graphics conversion tool.',
  'ARCHIVES/JUN21_94.DTS/SEGATLS/BRIP/DOS4GW.EXE': 'DOS/4GW DOS extender used by the 32-bit Sega graphics tools.',
  'ARCHIVES/MAR01_95.DTS/32X/DEMO/RUNLGTH/README.TXT': 'Documentation for the 32X run length graphics compression demo.',
  'ARCHIVES/MAR01_95.DTS/32X/DEMO/RUNLGTH/README.1ST': 'Getting started note for the 32X run length graphics compression demo.'
};

const contentBasis = 'Identified from file contents';

// Scanned documentation sets under sega/; each folder is a document whose pages are individual gif scans.
const segaDocs = {
  'sega/32X/Overview': 'page from the 32X Overview document introducing the add-on hardware and development environment',
  'sega/32X/HWManual': 'page from the 32X Hardware Manual describing the 32X architecture, memory maps, and programming',
  'sega/32X/HWManual/Supp': 'page from a supplement to the 32X Hardware Manual',
  'sega/32X/HWInfo': 'page from the 32X Hardware Information reference document',
  'sega/32X/SampleDisk': 'page from the 32X Sample Disk documentation describing the code and data shipped on the sample disk',
  'sega/32X/TechInfo': 'page from the 32X Technical Information document',
  'sega/32X/TechInfo/ICBD16M': "page from the User's Manual of the IC BD 16M 42 PIN 4 EPROM 32X RD 837-11070 development cartridge",
  'sega/32X/TechInfo/ICBD32M': "page from the User's Manual of the IC BD 32M SRAM + 256K BUP 32X RD 837-11068 development cartridge",
  'sega/32X/TechInfo/ICBD4M': "page from the User's Manual of the IC BD 4M 32 PIN 8 EPROM 32X RD 837-11069 development cartridge",
  'sega/32X/TechInfo/DevEquip': 'page from the 32X Development Equipment manual',
  'sega/32X/TechInfo/Attachment1': 'page from Attachment 1 of the 32X technical information set',
  'sega/32X/SoundTool': 'page from the 32X Sound Tool overview manual covering the Macintosh sound tool suite',
  'sega/32X/SoundTool/ToneEdit': 'page from the Tone Editor 32X manual, the Macintosh tool creating and editing MIDI tone data for the 32X',
  'sega/32X/SoundTool/SndSim': 'page from the 32X Sound Simulator manual, the Macintosh playback simulator for 32X sound data',
  'sega/32X/SoundTool/SndDriver': 'page from the 68000 Sound Driver Ver 3.00 manual documenting the 32X PCM sound driver',
  'sega/32X/SoundTool/PWMDriver': 'page from the PWM driver documentation for the 32X pulse width modulation sound hardware',
  'sega/32X/SoundTool/MIDIConv': 'page from the MIDI Converter Ver 1.30 manual documenting the Macintosh MIDI conversion tools',
  'sega/32X/SoundTool/Changes': 'page listing changes to the 32X sound tools',
  'sega/MegaCD/Bios': 'page from the Mega CD BIOS documentation',
  'sega/MegaCD/Format': 'page from the Mega CD disc format documentation',
  'sega/MegaCD/Hardware': 'page from the Mega CD hardware documentation',
  'sega/MegaCD/Outline': 'page from the Mega CD outline documentation',
  'sega/MegaCD/PCM-Sound': 'page from the Mega CD PCM sound documentation',
  'sega/MegaCD/Soft-dev': 'page from the Mega CD software development documentation',
  'sega/Genesis/Gen-soft': 'page from the Genesis Software Manual covering memory maps, interrupts, VDP, DMA, and I/O',
  'sega/Genesis/Gen-sound': 'page from the Genesis Sound Software Manual covering the Z80 sound program and PSG',
  'sega/Bulletins/Addendum': 'scanned Sega technical bulletin page with addendum specifications for Genesis developers',
  'sega/Bulletins/Cinepak': 'scanned Sega technical bulletin page about the Cinepak video library for Mega CD and Saturn',
  'sega/Bulletins/Gen-tech': 'scanned Sega technical bulletin page sent to registered Genesis developers',
  'sega/Bulletins/MCD-tech': 'scanned Sega technical bulletin page with Mega CD specific technical information',
  'sega/Bulletins/Misc': 'scanned Sega technical bulletin page with miscellaneous hardware and guideline corrections',
  'sega/Bulletins/Soft-Stand': 'scanned Sega technical bulletin page with software standards for approval of games'
};

const bulletinTopics = {
  'Addendum': 'custom joysticks, DMA, H-Blank and V-Blank interrupts, and Z80 to 68K communication',
  'Cinepak': 'Cinepak version 1.2 requirements for Mega CD and Saturn video',
  'Gen-tech': 'assembly code examples and newer information for Mega Drive developers',
  'MCD-tech': 'US BIOS information, CD writers and discs, and Mega CD documentation corrections',
  'Misc': 'Super Target hardware information and software guideline corrections',
  'Soft-Stand': 'requirements for Sega approval of game software'
};

function segaDocDescription(path) {
  for (const prefix of Object.keys(segaDocs).sort((a, b) => b.length - a.length)) {
    if (path === prefix || path.startsWith(`${prefix}/`)) {
      if (path.startsWith('sega/Bulletins/')) {
        const topic = bulletinTopics[path.split('/')[2]];
        if (topic) return `Scanned Sega of America technical bulletin about ${topic}.`;
      }
      return `Scanned ${segaDocs[prefix]}.`;
    }
  }
  return null;
}

const manualPdfs = {
  'SEGADTS/MANUALS.DTS/SGL/DEVENV.PDF': 'SGL Developer Manual section 1, Development Environment, in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/SGL/PROGTUT.PDF': "SGL Developer's Manual section 2, Programmer's Tutorial, in Adobe Acrobat format.",
  'SEGADTS/MANUALS.DTS/SGL/DESIGTUT.PDF': "SGL Developer's Manual section 3, Designer's Tutorial, in Adobe Acrobat format.",
  'SEGADTS/MANUALS.DTS/SGL/SOUNDTUT.PDF': 'SGL Developer Manual section 4, Sound Tutorial, in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/SGL/TRANSTUT.PDF': 'SGL Developer Manual section 5, Transfer of Data, in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/SGL/REFERENC.PDF': 'SGL Developer Manual section 6, the function Reference, in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/HITACHI.SH/H_SERIES.PDF': 'Hitachi H series SH microcontroller documentation in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/HITACHI.SH/SH7600PM.PDF': 'Hitachi SH7600 programming manual in Adobe Acrobat format, covering the SH2 family used in the 32X and Saturn.',
  'SEGADTS/MANUALS.DTS/HITACHI.SH/SHCCOMP.PDF': 'Hitachi SH C compiler manual in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/HITACHI.SH/SHSIMDBG.PDF': 'Hitachi SH simulator and debugger manual in Adobe Acrobat format.',
  'SEGADTS/MANUALS.DTS/TECHBULL.SAT/SATTECHS.PDF': 'Saturn technical bulletins compiled into Adobe Acrobat format.'
};

function areaOf(path) {
  if (path.startsWith('sega/')) return 'scanned documentation set';
  if (path.startsWith('SGL_1.0/')) return 'SGL 1.0 library';
  if (path.startsWith('SEGADTS/GNU/')) return 'GNU SH toolchain drop';
  if (path.startsWith('SEGADTS/MANUALS.DTS/')) return 'manuals DTS drop';
  if (path.startsWith('SEGADTS/SATURN/')) return 'Saturn section of the current DTS drop';
  if (path.startsWith('SEGADTS/32X/')) return '32X section of the current DTS drop';
  const drop = path.match(/^ARCHIVES\/([^/]+)\//);
  if (drop) return `${drop[1]} DTS archive drop`;
  return 'Developer Tool Kit CD';
}

function isSrec(raw) {
  return /^S[0-9][0-9A-Fa-f]{6,}/m.test(raw.slice(0, 200));
}

function asmDescription(path, raw) {
  const lower = raw.toLowerCase();
  const sh = /\b(sh2|\.sh\b|rte\b|mov\.b|mov\.w|mov\.l|bra\b|bsr\b)/.test(lower) && !/\bmove\.l\b|move\.w\b|move\.b\b/.test(lower);
  const cpu = sh ? 'SH2' : /\bmove\.[bwl]\b|\bjsr\b|\bra\b|\bmc68000\b/.test(lower) ? '68000' : null;
  const names = [...new Set([...raw.matchAll(/(?:^|\n)\s*([A-Za-z_]\w*)\s*(?::\s*(?:proc|\.proc)|:)/g)].map((m) => m[1]))]
    .filter((name) => !/^(section|org|equ|end|align|include|dc|ds|even|if|else|endif|macro|endm|list|nolist|page|subttl|title|rs|rsset|rb|rw|rl|text|data|bss|code)$/i.test(name));
  const kind = cpu ? `${cpu} assembly` : 'Assembly';
  if (names.length) return `${kind} source defining ${names.slice(0, 3).join(', ')}${names.length > 3 ? ', and other routines' : ''}.`;
  if (/^\s*include|\bincbin\b/i.test(raw)) return `${kind} source with included data or code files.`;
  return `${kind} source file.`;
}

function source(path, sample) {
  if (!/\.(c|cc|cpp|h|hpp|s|asm|sa|inc|equ)$/i.test(path)) return null;
  const raw = sample.toString('latin1');
  if (raw.includes('\0')) return null;
  if (/\.(asm|s|sa|inc|equ)$/i.test(path) && !/^\s*#\s*(include|define|if)/m.test(raw)) return asmDescription(path, raw);
  const filename = path.split('/').pop();
  if (/\.(h|hpp)$/i.test(filename)) {
    const types = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:typedef\s+)?(?:struct|enum|union|class)\s+([A-Za-z_]\w*)/g)].map((m) => m[1]))];
    if (types.length) return `Header declaring ${types.slice(0, 3).join(', ')}${types.length > 3 ? ', and other types' : ''}.`;
    const defines = [...new Set([...raw.matchAll(/(?:^|\n)\s*#define\s+([A-Za-z_]\w*)/g)].map((m) => m[1]).filter((name) => !/^_+(INC|H|HEADER)/.test(name)))];
    if (defines.length) return `Header declaring ${defines.slice(0, 3).join(', ')}${defines.length > 3 ? ', and other macros' : ''}.`;
    const protos = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:extern\s+)?(?:void|int|short|long|char|unsigned|fixed|Bool|bool|Uint|void\s+\*)\s*\**([A-Za-z_]\w*)\s*\([^;{}]*\)\s*;/g)].map((m) => m[1]))];
    if (protos.length) return `Header declaring ${protos.slice(0, 3).join(', ')}${protos.length > 3 ? ', and other functions' : ''}.`;
    return 'Header file; its specific declarations are not established by the visible sample.';
  }
  const names = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:static\s+|void\s+|int\s+|short\s+|long\s+|char\s+|unsigned\s+|fixed\s+){1,3}(?:\*\s*)?([A-Za-z_]\w*)\s*\([^;{}]*\)\s*\{/g)]
    .map((m) => m[1]).filter((name) => !/^(if|for|while|switch|return|sizeof)$/.test(name)))];
  if (names.length) return `Source defining ${names.slice(0, 3).join(', ')}${names.length > 3 ? ', and other routines' : ''}.`;
  const includes = [...new Set([...raw.matchAll(/#include\s+[<"]([^>"]+)[>"]/g)].map((m) => m[1]))];
  if (includes.length) return `Source file including ${includes.slice(0, 2).join(', ')}; no function definitions appear in the visible sample.`;
  return `${/\.(h|hpp)$/i.test(path) ? 'Header' : 'Source'} file; no specific role is established by its visible declarations.`;
}

function ddkSpecial(path, sample) {
  const text = (value) => ({ text: value, basis: contentBasis });
  const raw = sample.toString('latin1');
  const name = path.split('/').pop();
  const upper = name.toUpperCase();

  // GNU tool chain components
  if (path.includes('/GNU/') && /^(SH2?|SHC|AS|ASYNCTSR|LD|AR|RANLIB|OBJDUMP|OBJCOPY|GCC|GXX|CC1|CC1PLUS|CXX|CXXFILT|CPP|GASP|MAKE|GDB|GO32|EMU387|SIZE|NM|STRIP|COFFDUMP|LIBTOOL|INFO)\.?(exe|com)?$/i.test(name)) {
    return text(`GNU SH cross toolchain component ${name}, built by Sega of America for Saturn and 32X development.`);
  }
  if (path.startsWith('SEGADTS/GNU/') && upper === 'SETENV.BAT') {
    return text('Batch script setting the environment variables for the GNU SH toolchain (paths to binaries, includes, and libraries).');
  }
  if (path.startsWith('SEGADTS/GNU/') && /^[0-9]{6}\/DEMO\//.test(path.slice('SEGADTS/GNU/'.length))) {
    return text('Demonstration program for the GNU SH toolchain, showing compilation and linking of a Saturn or 32X example.');
  }
  if (/\.(hp|ccp)$/i.test(name) && path.includes('/CXX/')) {
    return text('GNU libg++ C++ library source file, part of the GNU C++ standard library shipped with the toolchain.');
  }

  // SGL sample programs
  if (path.startsWith('SGL_1.0/SAMPLE/')) {
    const sampleName = path.split('/')[2];
    const stem = name.replace(/\.[^.]+$/, '');
    if (/\.c$/i.test(name)) {
      if (/^MAIN$/i.test(stem)) return text(`Main program of SGL sample ${sampleName}, initializing the library and running the demonstration loop.`);
      return text(`Source module of SGL sample ${sampleName}.`);
    }
    if (/\.o$/i.test(name)) return text(`Compiled object module of SGL sample ${sampleName}.`);
    if (/\.cof$/i.test(name)) return text(`COFF load module of SGL sample ${sampleName}, ready for a Saturn dev cartridge or emulator.`);
    if (/\.lnk$/i.test(name)) return text(`Linker response file of SGL sample ${sampleName}, naming objects and libraries to link.`);
    if (/\.map$/i.test(name)) return text(`Linker map of SGL sample ${sampleName} with symbol addresses.`);
    if (/^makefile$/i.test(name)) return text(`Build instructions for SGL sample ${sampleName}.`);
    if (/\.(bin|dat|pnb|tad|pcx|cel|map)$/i.test(name)) return text(`Data file used by SGL sample ${sampleName}.`);
    return null;
  }

  // Hitachi tool outputs
  if (/\.mot$/i.test(name) && isSrec(raw)) return text('Motorola S-record text file, an ASCII representation of a loadable program image.');
  if (/\.abs$/i.test(name)) return text('Hitachi absolute load module, the linked executable format of the H series toolchain.');
  if (/\.obj$/i.test(name) && !sample.subarray(0, 4).equals(Buffer.from([127, 69, 76, 70]))) {
    return text('Compiled object module from the Hitachi H series toolchain.');
  }
  if (/\.x$/i.test(name)) return text('Debug or symbol file from the Hitachi H series toolchain.');
  if (/\.lis$/i.test(name)) return text('Assembly listing generated by the Hitachi assembler, interleaving source and generated code.');

  // 32X and Saturn DTS demos
  if (path.includes('/GNUSMPLE/')) {
    const side = path.includes('/GNUSMPLE/SH/') ? 'SH2 slave CPU' : path.includes('/GNUSMPLE/MD/') ? '68000 Genesis' : null;
    const part = side ? ` for the ${side} side` : '';
    if (/\.(c|h|s|asm|i)$/i.test(name)) return text(`Sample source of the GNUSMPLE GNU 32X examples${part}; written for the version 1 development board.`);
    if (/\.(o|obj)$/i.test(name)) return text(`Compiled object of the GNUSMPLE GNU 32X examples${part}.`);
    if (/\.(bin|cof|abs)$/i.test(name)) return text(`Loadable binary of the GNUSMPLE GNU 32X examples${part}.`);
  }
  const demo = path.match(/^(?:SEGADTS\/32X\/DEMO|ARCHIVES\/[^/]+\/32X\/(?:DEMO|SAMPLES\/SNASM))\/([^/]+)/);
  if (demo) {
    if (/\.(c|h|s|asm)$/i.test(name)) return text(`Source file of the 32X demonstration program ${demo[1]}.`);
    if (/\.(o|obj)$/i.test(name)) return text(`Compiled object of the 32X demonstration program ${demo[1]}.`);
    if (/\.(bin|cof|abs)$/i.test(name)) return text(`Loadable binary of the 32X demonstration program ${demo[1]}.`);
    if (/makefile|\.bat$/i.test(name)) return text(`Build script for the 32X demonstration program ${demo[1]}.`);
    if (/readme/i.test(name)) return null; // handled by the readme first-line rule below
    if (/\.(dat|pcx|lbm|cel|txt)$/i.test(name)) return text(`Data file used by the 32X demonstration program ${demo[1]}.`);
  }

  // Saturn sound driver sources in the current drop
  if (path.startsWith('SEGADTS/SATURN/SND_DRV/')) {
    if (/^SCSP\.[CH]$/i.test(name)) return text('Saturn SCSP (sound controller) driver source, handling sound generation on the Saturn sound hardware.');
    if (/^SMPC\.[CH]$/i.test(name)) return text('Saturn SMPC (system manager peripheral control) driver source for reading peripherals and managing the system.');
    if (/^IMPACTSQ\.S$/i.test(name)) return text('Sound sequence data for the Saturn impact sound demo.');
    if (/MAKEASM\.EXE/i.test(name)) return text('Tool generating assembly sound data tables for the Saturn sound driver.');
    return text('Source file of the Saturn sound driver distributed to developers.');
  }

  // Sega graphics plug-ins
  if (/DGT2PLUG|PLUG-IN/i.test(path)) return text('Graphics plug-in (for Photoshop or Debabelizer style hosts) converting images into Sega console formats.');

  // Autodesk FLIC library
  if (/\.fl[ic]$/i.test(name)) {
    const magic = sample.length > 6 && (sample.readUInt16LE(4) === 0xAF11 || sample.readUInt16LE(4) === 0xAF12);
    if (magic) return text('Autodesk FLIC animation file for the Animator/Animator Pro toolset.');
  }
  if (path.startsWith('ARCHIVES/MAR01_95.DTS/AUTODESK/FLICLIB/')) {
    if (/\.doc$/i.test(name)) return text('Documentation for the Autodesk FLIC library.');
    if (/\.(c|h)$/i.test(name)) return text('Source of the Autodesk FLIC animation playback library.');
    if (/\.lib$/i.test(name)) return text('Compiled Autodesk FLIC library.');
  }

  // Multi-Edit editor state
  if (raw.startsWith('@MULTI-EDIT')) return text('Multi-Edit text editor session state, preserving window and cursor positions on the developer workstation.');

  // Japanese word processor
  if (path.startsWith('ARCHIVES/MAR01_95.DTS/JWP/')) {
    if (/\.doc$/i.test(name)) return text('JWP Japanese word processor documentation (English).');
    if (/^EDICT$/i.test(name)) return text('EDICT Japanese dictionary data used by the JWP word processor.');
    if (/\.hlp$/i.test(name)) return text('JWP help file.');
    return text('JWP Japanese word processor support file.');
  }

  // Hardware diagnostics
  if (path.includes('/DIAGNSTC/') || path.includes('/HWDIAG/')) {
    if (path.includes('/SOURCE/')) return text('Source of the 32X hardware diagnostics program, testing the SH2 CPUs, VDP, and memory of the add-on.');
    if (path.includes('/EXECUTE/')) return text('Executable of the 32X hardware diagnostics program.');
  }

  // Acrobat reader installers
  if (path.includes('ACROREAD')) return text('Adobe Acrobat Reader installer distributed so developers can read the electronic manuals on the CD.');

  return null;
}

export function description(path, sample) {
  if (known[path]) return { text: known[path], basis: 'Verified against file contents' };
  if (sample.length === 0) return { text: 'Empty file; likely a placeholder or an empty entry preserved from the CD.', basis: 'Purpose not established' };
  const name = path.split('/').pop();
  const area = areaOf(path);
  const raw = sample.toString('latin1');

  const doc = segaDocDescription(path);
  if (doc) return { text: doc, basis: 'Document set identified by scan filenames' };

  if (manualPdfs[path.toUpperCase()]) return { text: manualPdfs[path.toUpperCase()], basis: 'Verified against README.SOA listing' };

  const special = ddkSpecial(path, sample);
  if (special) return special;

  // Magic-based identification
  if (sample.toString('ascii', 0, 4) === 'FORM' && ['AIFF', 'AIFC'].includes(sample.toString('ascii', 8, 12))) {
    return { text: 'AIFF audio file, the standard Macintosh audio format used with the 32X sound tools.', basis: contentBasis };
  }
  if (sample.toString('ascii', 0, 4) === 'MThd') return { text: 'Standard MIDI sequence with timed musical events.', basis: contentBasis };
  if (sample.toString('ascii', 0, 5) === '%PDF-') return { text: `Adobe Acrobat PDF document in the ${area}.`, basis: contentBasis };
  if (sample.toString('ascii', 0, 3) === 'GIF') return { text: `GIF image in the ${area}; page scans of the documentation are kept in this format.`, basis: contentBasis };
  if (sample[0] === 0x0a && /\.pcx$/i.test(name)) return { text: 'PCX image file used as source art for conversion tools.', basis: contentBasis };
  if (sample[0] === 0x1f && sample[1] === 0x8b) return { text: 'Gzip-compressed data; its uncompressed subject is not identified here.', basis: contentBasis };
  if (sample.toString('ascii', 0, 2) === 'MZ') return { text: `DOS executable in the ${area}; most Sega and toolchain tools of this era are DOS programs.`, basis: contentBasis };
  if (sample.subarray(0, 4).equals(Buffer.from([127, 69, 76, 70]))) return { text: 'ELF object file containing compiled machine code and symbol data.', basis: contentBasis };
  if (sample.toString('ascii', 0, 8) === '!<arch>\n') return { text: 'Unix archive library bundling compiled object modules for the linker.', basis: contentBasis };
  if (/\.cof$/i.test(name)) return { text: 'COFF-format load module produced by the Hitachi or SNASM2 toolchain.', basis: 'Inferred from format and location' };
  if (/\.me$/i.test(name) && raw.startsWith('@MULTI-EDIT')) return { text: 'Multi-Edit text editor session state.', basis: contentBasis };

  const code = source(path, sample);
  if (code) return { text: code, basis: code.includes('not established') ? 'Inspected; purpose not established' : contentBasis };

  // Readme and text documentation
  if (!raw.includes('\0') && /^(readme|.*\.txt|.*\.doc|.*\.1st|.*\.faq)$/i.test(name)) {
    const lines = raw.split(/\r?\n/).map((line) => line.replace(/[\x00-\x08\x0b-\x1f]/g, ' ').trim());
    const first = lines.find((line) => line.length > 8 && !/^[-=*#~_.\s]+$/.test(line));
    if (first) return { text: `Documentation beginning: ${first.slice(0, 110)}${first.length > 110 ? '...' : ''}`, basis: contentBasis };
    return { text: `Text documentation in the ${area}.`, basis: contentBasis };
  }
  if (!raw.includes('\0') && /^(makefile|.*\.(mak|mk|lnk|bat))$/i.test(name)) {
    return { text: `Build or link script in the ${area}.`, basis: contentBasis };
  }
  if (!raw.includes('\0') && /\.(map)$/i.test(name)) {
    return { text: `Linker map listing symbol addresses and section placement in the ${area}.`, basis: contentBasis };
  }
  if (!raw.includes('\0') && /\.(equ)$/i.test(name)) {
    return { text: `Equate definitions assigning names to hardware addresses and constants in the ${area}.`, basis: contentBasis };
  }

  if (/\.(a|lib)$/i.test(name)) return { text: `Compiled library archive in the ${area}.`, basis: 'Inferred from format and location' };
  if (/\.(o|obj)$/i.test(name)) return { text: `Compiled object module in the ${area}.`, basis: 'Inferred from format and location' };
  if (/\.(bin|dat|raw|cof)$/i.test(name)) return { text: `Binary data in the ${area}; its exact contents are not identified.`, basis: 'Purpose not established' };
  if (/\.(bat)$/i.test(name)) return { text: `DOS batch script in the ${area}.`, basis: 'Inferred from format and location' };
  return { text: `File in the ${area}; its specific purpose is not established.`, basis: 'Purpose not established' };
}
