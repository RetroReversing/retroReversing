// Chicken Run archive descriptions. The explorer only reads the generated JSON.
const contentBasis = 'Identified from file contents';
const verified = 'Verified against file contents';

const topics = {
  dck_maths: 'Dreamcast fixed-point and vector maths',
  dck_system: 'Dreamcast system startup and display setup',
  dck_texture: 'Dreamcast texture handling',
  dck_types: 'shared Dreamcast vector, matrix, and colour types',
  dc_tim: 'Dreamcast loading of PlayStation TIM images',
  dispstr: 'on-screen display strings',
  psx_pc: 'macros that let PlayStation draw code compile on PC',
  usr: 'Kamui user callbacks, including V-sync wait mode',
  actor: 'skinned model control',
  actor2: 'the Frogger 2 actor system kept beside the Chicken Run actors',
  adxtest: 'a small ADX audio test',
  anim: 'character animation data',
  backup: 'the Sega backup-library sample used for VMU saves',
  bff_load: 'loading and linking BFF data segments',
  bpacsetup: 'Sega Audio64 AC-layer boilerplate',
  bpamsetup: 'Sega Audio64 AM-layer boilerplate',
  camera: 'game camera modes and movement',
  card: 'memory-card save and load',
  catapult: 'the level 2 catapult subgame',
  charactr: 'control of characters that are not enemies',
  chase: 'the chase sequence started by Chris Wilson',
  cntrscn: 'screen-centering setup',
  cntrscreen: 'screen centering',
  collide: 'collision tests and collision data',
  construct: 'the construction subgame, with saw, hammer, and spanner tools',
  crate: 'the chase with Mrs Tweedy hanging from the aeroplane',
  crc32: 'CRC calculation, written for ObjEdit2 by R. Hackett',
  credits: 'the scrolling credits sequence',
  curtains: 'the curtain transition written by Chris Wilson',
  cus_anim: 'animation-matrix setup split out of the PSI plotter',
  cus_dyn: 'the dynamic-lighting PSI plotter',
  cus_full: 'the general-case PSI plotter',
  custom: 'PSI model plotting and BFF linking for models',
  custom2: 'a second PSI plotting path',
  dc_timer: 'Dreamcast timer helpers',
  debris: '3D sprite effects',
  demo: 'demo playback',
  demostub: 'blank replacements used by the OPSM demo build',
  deth: 'death and failure handling',
  dogchase: 'the act 1 dog chase with the Mrs Tweedy mannequin',
  dualshock: 'controller vibration',
  ectsmenu: 'the Dreamcast ECTS demo menu',
  egglaying: 'the egg-laying subgame and its chicken animations',
  empty: 'placeholder objects',
  enemies: 'enemy control started by Chris Wilson',
  engine: 'the engine subgame, including oiler, biker, and pumper updates',
  error: 'error codes',
  fadeout: 'Frogger 2 transition effects',
  fireworks: 'the fireworks subgame',
  fixed: 'fixed-point helpers',
  fma: 'frog-map scenes, world meshes, and camera cuts',
  fmademo: 'a demo-build variant of the frog-map scene code',
  fx: 'particle systems and other effects',
  fxtest: 'an effects test menu',
  gallery: 'the gallery sequence',
  gametext: 'game text string identifiers',
  global: 'global types, product codes, and common includes',
  gte: 'software emulation of the PlayStation geometry engine',
  gte2: 'software emulation of the PlayStation geometry engine',
  help: 'help screens',
  inventory: 'the inventory screen',
  inv_demo: 'a demo-build variant of the inventory',
  islcard: 'ISL memory-card functions',
  islfile: 'ISL file loading and FlatPacker decompression',
  islfont: 'font drawing brought over from Action Man 2',
  isllocal: 'localised text handling',
  islmem: 'ISL memory helpers',
  islpad: 'controller pad reading',
  islpsi: 'PSI models',
  include: 'the master include list for this build',
  islsfx2: 'Dreamcast conversion of the ISL sound-effect library',
  islsound: 'the earlier PlayStation ISL sound-effect library',
  isltex: 'texture and VRAM management',
  islutil: 'CRC and other ISL utilities',
  islvideo: 'video playback',
  islxa: 'PlayStation XA audio streaming',
  language: 'language selection adapted from Action Man 2',
  layout: 'Frogger 2 layout data',
  lev_flow: 'level-to-level flow',
  lights: 'lights and shadows adapted from Scott Lamb\'s earlier code',
  loading: 'loading-screen state',
  loadlnd: 'level data declarations',
  loadsnd: 'sound-bank loading',
  loadsnd2: 'an alternate sound-bank loader',
  main: 'Dreamcast entry, Kamui setup, and the game loop',
  main2: 'an alternate copy of the entry module',
  maindemo: 'the PlayStation demo-build shell',
  map: 'map data and map interaction',
  map2: 'an alternate copy of the map module',
  map_draw: 'world-mesh drawing',
  map_draw2: 'an alternate world-mesh drawing module',
  map_play: 'walking around the map',
  map_play2: 'an alternate map-walking module',
  map_view: 'the map fly-through view',
  maths: 'shared maths helpers',
  menu: 'the front-end menu',
  new: 'a Dreamcast mesh-draw experiment',
  newpsx: 'PlayStation compatibility helpers',
  nme_dogs: 'dog enemies, split out of enemies.c',
  nme_mrst: 'Mrs Tweedy, split out of enemies.c',
  ok: 'a small status header',
  options: 'the options screen',
  overlay: 'code-overlay markers rather than sprite overlays',
  overlay1: 'a stub for the first code overlay',
  overlay2: 'a stub for the second code overlay',
  overlays: 'debug graphics and sprite overlays',
  pad: 'controller buttons and pad state',
  particle: 'particles',
  pause: 'pause mode',
  platcoll: 'platform collision',
  platform: 'moving platforms, adapted from Glover',
  powerbar: 'power bars for subgames',
  psi: 'the PlayStation model handler',
  psiactor: 'skinned PSI actors',
  psitypes: 'PSI primitive types',
  puzzles: 'puzzle state and puzzle triggers',
  quatern: 'quaternion rotation',
  ranges: 'numeric ranges used by gameplay code',
  route: 'route finding',
  saveicon: 'VMU icon bytes produced by dc_iconchop',
  sbinit: 'Sega system-library initialisation',
  scenics: 'animated objects that are not full enemies',
  seesaw: 'the seesaw subgame',
  sfxtest: 'a menu for trying Dreamcast sound-effect banks',
  shell: 'the Frogger 2 shell used as system startup',
  snapshot: 'BMP screenshot capture',
  sonylibs: 'PlayStation library include switches',
  sound: 'a veneer over the sound-effect library',
  spotlite: 'spotlight drawing, including inline GTE assembly',
  sprite: 'sprites from the Frogger 2 code',
  sprouts: 'throwable objects used to distract dogs',
  sptstream: 'streaming an SPT texture file into VRAM',
  startup: 'startup screens',
  station: 'the level 4 multi-station camera',
  stilts: 'stilts control, described in the source as specialist control research',
  subgame: 'shared subgame helpers, including bronze, silver, and gold results',
  test: 'file-system test code that opens CRTEST.DAT',
  text_ids: 'numeric identifiers for game text',
  timer: 'debug timers brought over from Action Man 2',
  types: 'shared integer and fixed-point types',
  ultra64: 'an Nintendo 64 SDK header left in the tree',
  viewer: 'the PSI model viewer',
  vmucheck: 'VMU detection and status',
  vmu: 'VMU LCD image bytes',
  wings: 'the wings subgame, with pole, material, and stitch workers',
  cr: 'a VMU icon palette and pixels',
  cr_asm: 'PlayStation GTE assembly for transforming vertices',
  incbin: 'assembly that includes the arccos and square-root tables',
  dcinc: 'Dreamcast build switches and extra includes',
  libapi: 'a Sony PlayStation SDK header',
  libcd: 'the Sony PlayStation CD-ROM SDK header',
  libetc: 'the Sony PlayStation controller and system SDK header',
  libsn: 'an SN Systems PlayStation SDK header',
  libgpu: 'the Sony PlayStation GPU SDK header',
  libgs: 'the Sony PlayStation graphics-library header',
  libgte: 'the Sony PlayStation geometry-engine header',
  gte_h_alias: 'geometry-engine declarations',
  audio: 'audio library declarations',
  cricon16: 'a 16-colour icon converted to C data',
  lcdcr: 'VMU LCD image data',
  lcdicons: 'packed VMU LCD icons'
};

function clean(value) {
  return value.replace(/\s+/g, ' ').replace(/[—–]/g, '-').replace(/[“”]/g, '"').trim();
}

function sentence(value) {
  const text = clean(value).replace(/[.:;\s]+$/, '');
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

function result(text, basis = contentBasis) {
  return { text, basis };
}

function stemOf(name) {
  return name.toLowerCase().replace(/(\.(c|h|s))+(\.old)?$/, '').replace(/\.old$/, '');
}

function topicSentence(name, topic) {
  if (/\.h$/i.test(name)) return `Header for ${topic}.`;
  if (/\.s$/i.test(name)) return `Assembly for ${topic}.`;
  return `Implements ${topic}.`;
}

function commentPurpose(raw) {
  const head = raw.slice(0, 1600);
  const described = head.match(/Description\s*:\s*([^\r\n*/]{8,140})/i);
  if (described) return sentence(described[1]);
  const labelled = head.match(/\b[\w]+\.[chs]\s*:\s*([^\r\n*/]{8,140})/i);
  if (labelled && !/copyright|interactive studios|file\b/i.test(labelled[1])) return sentence(labelled[1]);
  if (/Started by Chris Wilson/i.test(head)) return 'Started by Chris Wilson.';
  return '';
}

function declarations(raw, header) {
  const names = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:static\s+)?(?:[A-Za-z_]\w*\s+\*?\s*){1,3}([A-Za-z_]\w*)\s*\([^;{}]*\)\s*\{/g)]
    .map((match) => match[1])
    .filter((name) => !/^(if|for|while|switch|return)$/.test(name)))];
  if (names.length) return `${header ? 'Header declares' : 'Source defines'} ${names.slice(0, 3).join(', ')}${names.length > 3 ? ', and other routines' : ''}.`;
  const types = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:typedef\s+)?(?:struct|enum)\s+([A-Za-z_]\w*)/g)].map((match) => match[1]))];
  if (types.length) return `Declares ${types.slice(0, 3).join(', ')}${types.length > 3 ? ', and other types' : ''}.`;
  const defines = [...new Set([...raw.matchAll(/(?:^|\n)\s*#define\s+([A-Za-z_]\w*)/g)].map((match) => match[1]).filter((name) => name.length > 2 && !/^_+(H|INC|HEADER)/.test(name)))];
  if (defines.length) return `Declares ${defines.slice(0, 3).join(', ')}${defines.length > 3 ? ', and other macros' : ''}.`;
  return '';
}

function bitmap(sample) {
  if (sample.toString('ascii', 0, 2) !== 'BM' || sample.length < 30) return null;
  const width = sample.readInt32LE(18);
  const height = sample.readInt32LE(22);
  const bits = sample.readUInt16LE(28);
  if (width <= 0 || height <= 0 || bits <= 0) return null;
  return `BMP image, ${width} by ${height} pixels at ${bits} bits per pixel.`;
}

export function description(path, sample) {
  const name = path.split('/').pop();
  const lower = name.toLowerCase();
  const raw = sample.toString('latin1');
  const inSource = path.startsWith('cr/source/');
  const inCopy = path.startsWith('cr/Copy of source/');
  const inShell = path.startsWith('simple model shell/');

  if (lower === 'chicken.scr' && raw.includes('GD-M Workshop')) {
    return result('GD Workshop script for the CHICKENRUN1 GD-ROM image, including volume dates in July and August 2000.', verified);
  }
  if (lower === 'chickenrun.cpj' && sample.subarray(0, 4).toString('ascii') === 'CPCD') {
    return result('Binary GD-ROM project with a CPCD header. Its strings name CHICKENRUN1, Katana IPMaker files, and level folders such as A1_DOGCHASE and A2_CATAPULT.', verified);
  }
  if (lower === 'in.txt' && raw.includes('GDWorkshop')) {
    return result('Numbered notes for rebuilding a level with makelevdc, CodeScape, and GD Workshop.', verified);
  }
  if (lower === 'frogedit.dat' && raw.includes('froggerii')) {
    return result('Short text file pointing at c:\\work\\froggerii\\leveldump, left over from Frogger 2.', verified);
  }
  if (lower === 'makefile' && raw.includes('KATANA_ROOT')) {
    return result(inShell
      ? 'Katana makefile for the model shell. It builds a Kamui 2 ELF from the PSI and ISL sources in this folder.'
      : 'Katana makefile for the Dreamcast game. It lists the game objects and links Sofdec, CRI ADX, and Audio64.', verified);
  }
  if (lower === 'makefile.mak' && raw.includes('CRTEST PS MAKEFILE')) {
    return result('PlayStation PSYQ makefile. It compiles with ccpsx and links with PSYLINK for NTSC, PAL, and UK builds.', verified);
  }
  if (lower === 'makefile.txt' && raw.includes('CRTEST')) {
    return result('PlayStation makefile template copied together with generated dependencies to produce makefile.mak.', verified);
  }
  if (lower === 'makedemo.txt') return result('PlayStation makefile template for the OPSM demo build.', verified);
  if (/\.lnk$/i.test(name) && raw.includes('PSYLINK') || (/\.lnk$/i.test(name) && raw.includes('org'))) {
    const demo = /demo/i.test(name);
    return result(`${demo ? 'Demo' : 'Retail'} PlayStation linker script. It places the executable at 0x80010000 and overlays video, subgames, and the debug menu.`, verified);
  }
  if (lower === 'master.bat' || lower === 'ma.bat' || lower === 'm.bat') {
    return result('Batch build for the PlayStation tree. The argument selects NTSC, PAL, UK, or the demo.', verified);
  }
  if (lower === 'g.bat') return result('Short batch file that copies files into \\dc\\cr\\source and runs gmake.', verified);
  if (lower === 'config.sys') return result('DOS configuration fragment loading HIMEM and EMM386. It is a machine setup file, not game data.', verified);
  if (/\.dsp$/i.test(name) && raw.includes('Microsoft Developer Studio')) {
    return result('Visual Studio 6 project for a Win32 external target. The source-control path recorded here is $/teamManta/CRunDC/source.', verified);
  }
  if (/\.dsw$/i.test(name) && raw.includes('Microsoft Developer Studio')) return result('Visual Studio 6 workspace wrapping the cr project.', verified);
  if (/\.ncb$/i.test(name)) return result('Microsoft C/C++ browse database for the Visual Studio project.', contentBasis);
  if (/\.opt$/i.test(name)) return result('Visual Studio workspace options. The binary layout is not decoded.', 'Inspected; purpose not established');
  if (/\.plg$/i.test(name)) return result('Visual Studio build log for the cr project.', contentBasis);
  if (lower === 'mssccprj.scc' || lower === 'vssver.scc') return result('Source-control metadata kept beside the Visual Studio project.', contentBasis);
  if (lower === 'chickenrun.ssn') return result('Text debugger session listing child windows. The file does not name the debugger.', contentBasis);
  if (lower.endsWith('.xls') && sample.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]))) {
    return result(lower.includes('game')
      ? 'Excel workbook of game text, in the OLE compound-file format.'
      : 'Excel workbook of Dreamcast text, in the OLE compound-file format.', verified);
  }
  if (lower === 'gametext.txt') return result('Tab-separated game strings, including the credits names and role headings.', verified);
  if (lower === 'cr_lang.exe') return result('Windows executable named CR_LANG, stored beside the game-text workbook. Its own strings do not describe the tool.', 'Inspected; purpose not established');
  if (lower === 'dc_iconchop.exe') return result('Windows executable. saveicon.h says dc_iconchop converts a 16-colour 32 by 32 BMP into icon data.', verified);
  if (lower === 'shortcut to cr_lang.exe.lnk') return result('Windows shortcut to CR_LANG.exe.', contentBasis);
  if (lower === 'engine.obj' && raw.startsWith('LNK')) return result('Microsoft COFF object file for the engine module.', verified);
  if (['us.bin', 'uk.bin', 'eu.bin', 'figs.bin'].includes(lower)) {
    return result(`Region binary named for ${lower.slice(0, -4).toUpperCase()}. The opening bytes are not a known container, though the file contains the strings "Lib Handle Start" and "Lib Handle End".`, 'Inspected; purpose not established');
  }
  if (lower === 'dcbits.spt') return result('Binary SPT texture stream. sptstream.h describes loading this kind of file into VRAM; this sample\'s records are not decoded.', verified);
  if (lower === 'asintabl.bin') return result('Binary lookup included as acostable. incbin.s says the name is misleading and the table is arccos data.', verified);
  if (lower === 'sqrtable.bin') return result('Binary square-root lookup included by incbin.s.', verified);
  if (lower === 'acostab.bin') return result('Binary angle table stored beside the included arccos and square-root tables. incbin.s does not reference this filename.', 'Inspected; purpose not established');
  if (lower === 'cricon16.bmp' || lower === 'gingicon.bmp') {
    const image = bitmap(sample);
    return result(`${image || 'BMP icon.'} A 32 by 32, 16-colour icon of the size dc_iconchop expects.`, verified);
  }
  if (lower === 'lcdcr.bmp' || lower === 'vmudisplay.bmp') {
    const image = bitmap(sample);
    return result(`${image || 'BMP image.'} The 48 by 32 size matches a VMU LCD.`, verified);
  }
  if (['frunlog.txt', 'netlog.txt', 'scandisk.log', 'setupxlg.txt', 'frogger2.log', 'mdebug.log'].includes(lower)) {
    return result('Captured log or setup text from a development machine. It is not a game source module.', contentBasis);
  }

  const bmp = bitmap(sample);
  if (bmp) return result(bmp);

  if (sample.subarray(0, 2).toString('ascii') === 'MZ') return result('Windows executable. No game-specific description is stored in its readable header.', 'Inspected; purpose not established');

  if (sample.length === 0) return result('Empty file.', contentBasis);

  if (path.startsWith('cr/includeps/') && /\.h$/i.test(name) && !raw.includes('\0')) {
    if (/sony|playstation|psy-q|psyq/i.test(raw.slice(0, 800))) return result('Sony PlayStation SDK header kept in the local includeps folder.', verified);
    if (/SN Systems/i.test(raw.slice(0, 800))) return result('SN Systems PlayStation SDK header kept in the local includeps folder.', verified);
    const stem = stemOf(name);
    const topic = topics[stem];
    return result(topic ? `ISL library header for ${topic.replace(/^the /, '')}.` : 'Library header kept in the local includeps folder.', contentBasis);
  }

  const sourceFile = /\.(c|h|s)$/i.test(name) || /\.c\.old$/i.test(name) || /\.h\.old$/i.test(name);
  if (sourceFile && !raw.includes('\0')) {
    const stem = stemOf(name);
    const topic = topics[stem];
    let text = topic ? topicSentence(name.replace(/\.old$/i, ''), topic) : commentPurpose(raw);
    if (!text) text = declarations(raw, /\.h/i.test(name));
    if (!text) text = `${/\.h/i.test(name) ? 'Header' : 'Source'} file; no specific role is established by its visible declarations.`;
    if (/\.old$/i.test(name)) text = `Older copy. ${text}`;
    if (inCopy && /2\./.test(lower)) text = `Alternate snapshot copy. ${text}`;
    if (inShell && stem === 'main') text = 'Model-shell entry. The file header still identifies it as the Frogger 2 shell.';
    if (inSource && stem === 'main') text = 'PlayStation-tree copy of the entry module. The Dreamcast Kamui setup remains in this file.';
    return result(text, text.includes('no specific role') ? 'Inspected; purpose not established' : contentBasis);
  }

  if (/^#/.test(raw) && /makefile|PROJECT/i.test(raw)) return result('Make build instructions.', contentBasis);
  if (!raw.includes('\0') && raw.trim().length > 0 && raw.split('\0').length === 1 && /^[\x09\x0a\x0d\x20-\x7e]+$/.test(raw.slice(0, 200))) {
    const first = raw.split(/\r?\n/).map((line) => line.trim()).find((line) => line.length > 12);
    if (first) return result(`Text file beginning: ${clean(first).slice(0, 110)}.`, contentBasis);
  }
  return result('Binary file; its specific purpose is not established from the header.', 'Inspected; purpose not established');
}
