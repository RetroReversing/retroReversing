// Turok-specific descriptions. The generic explorer only reads the generated JSON.
const known = {
  '123': 'Small binary file without a recognizable header; its role is unknown.',
  'PR/cartdata.dat': 'Indexed game-data container whose offsets lead to graphics, textures, levels, audio, and other stored blocks.',
  'PR/tengine/cartdata.dat': 'Small indexed data container in the Turok project, distinct from the larger PR/cartdata.dat.',
  'PR/tengine/oldcartdata.dat': 'Another indexed game-data container; the name does not establish when it was made.',
  'PR/tengine/rom.rnc': 'Nintendo 64 ROM image with a cartridge header, despite the .rnc suffix.',
  'PR/tengine/spec': 'ROM specification defining code, assets, and memory segments for the build.',
  'PR/tengine/boot.c': 'Bootstrap source that loads the remaining game code, including an RNC-compressed segment.',
  'PR/tengine/cart.c': 'Implements indexed sets and reads asset blocks from cartridge data.',
  'PR/tengine/cartdir.h': 'Defines numeric directory entries for the indexed game-data collections.',
  'PR/tengine/cheats.c': 'Implements the cheat menu, including option selection, updates, and drawing.',
  'PR/tengine/control.c': 'Implements controller input and Controller Pak handling.',
  'PR/tengine/ai.c': 'Implements AI events, attacks, movement, feigned death, and resurrection.',
  'PR/tengine/aidoor.c': 'Implements door, switch, timer, and pressure-trigger behavior.',
  'PR/tengine/scene.c': 'Implements scene setup, collision instances, and requests for world-data blocks.',
  'PR/tengine/geometry.c': 'Implements geometry drawing, render modes, shadows, and decompression.',
  'PR/tengine/audio.c': 'Manages sound playback, channels, voices, and environmental audio.',
  'PR/tengine/map.c': 'Implements the in-game map, including reveal and drawing routines.',
  'PR/tengine/tengine.c': 'Contains the engine entry points and game initialization, boot, and idle routines.',
  'PR/tengine/rnc1.s': 'MIPS assembly unpacker for RNC method 1.',
  'PR/tengine/rnc2.s': 'MIPS assembly unpacker for RNC method 2.',
  'PR/tengine/sfx.ctl': 'Sound-effects control bank describing instruments and sample mappings.',
  'PR/tengine/sfx.tbl': 'Sample table paired with the sound-effects control bank.',
  'PR/tengine/testbank.ctl': 'Control bank for the surviving music instruments.',
  'PR/tengine/testbank.tbl': 'Sample table paired with the music control bank.',
  'PR/README_DEMOS': 'Nintendo SDK notes about the included demonstration programs.',
  'PR/relnotes': 'Nintendo SDK release notes, including IRIX installation details.',
  'gnu/acpp/README': 'Documentation identifying acpp as a modified GNU C preprocessor.',
  'gnu/acpp/version.c': 'Defines the archived preprocessor version string.',
  'slatec/sladaf': 'Fixed-record Fortran source for the SLATEC mathematical library.',
  'slatec/slatbl': 'Index of SLATEC routine names and source positions.',
  'slatec/slakwd': 'Keyword index for the SLATEC routines.',
  'slatec/slacat': 'Category index for the SLATEC routines.',
  'X11/motif/mmkmf': 'Short file containing a path to an IRIX Motif Makefile generator.'
};

Object.assign(known, {
  'PR/tengine/hsb.h': 'Declares hue-offset and saturation-reduction color functions.',
  'PR/tengine/qsort.h': 'Declares the local qsort function and its comparison and swap callbacks.',
  'PR/tengine/stdafx.h': 'Convenience header including the N64, shared definitions, and memory headers.',
  'PR/tengine/dosvers/hsb.h': 'Host-side header declaring hue-offset and saturation-reduction color functions.',
  'PR/tengine/dosvers/qsort.h': 'Host-side header declaring the local qsort comparison and swap interface.',
  'PR/tengine/dosvers/stdafx.h': 'Host-side convenience header including N64, shared definition, and memory headers.',
  'PR/tengine/dosvers/marc.cpp': 'Single call that triggers a scene sound effect at the listener position; this is a code fragment.',
  'PR/tengine/dosvers/pp.bak': 'Backup of the Rob Northen Computing ProPack compression and decompression header.',
  'PR/tengine/dosvers/rnc.bak': 'Backup assembly source for the ProPack method 2 unpacker.',
  'PR/tengine/dosvers/rnc1.bak': 'Backup assembly source for the ProPack method 1 unpacker.',
  'PR/tengine/dosvers/rnc2.bak': 'Backup assembly source for the ProPack method 2 unpacker.',
  'PR/tengine/dosvers/temp.bak': 'Backup engine source beginning with N64 startup and game-loop includes.',
  'PR/tengine/dosvers/temp2.bak': 'Backup particle-system source beginning with game object and scene includes.',
  'PR/tengine/u64inc/rcp.bak': 'Backup N64 SDK header defining Reality Coprocessor registers and memory-map bits.',
  'PR/tengine/u64inc/sptask.bak': 'Backup N64 SDK header declaring the OSTask task structure and related constants.'
});

const contentBasis = 'Identified from file contents';

// Each topic below was checked against declarations, routines, or opening comments
// in the game source. These are descriptions of code, not claims about retail use.
const engineTopics = {
  'adpcm': 'ADPCM audio decoding',
  'ai': 'enemy AI events, decisions, attacks, and movement',
  'aidoor': 'door, switch, and timed trigger AI',
  'aistand': 'standard enemy AI states and actions',
  'aistruc': 'enemy attributes and dynamic AI state',
  'aiweap': 'weapon behavior for Turok and enemies',
  'anim': 'game animation frames and transitions',
  'attract': 'attract-mode input recording and playback',
  'audheap': 'the audio heap buffer',
  'audio': 'sound playback, channels, and voices',
  'audiocfx': 'contextual and front-end sound effects',
  'audiomgr': 'the low-level audio manager and frame messages',
  'boot': 'the bootstrap that loads and unpacks game code',
  'boss': 'shared boss encounter control',
  'camera': 'game camera modes and movement',
  'campaign': 'the Campaigner boss encounter',
  'cart': 'indexed cartridge data and asset blocks',
  'cfb': 'the 16-bit color frame buffer',
  'cheats': 'the cheat menu and its flags',
  'cinecam': 'cinematic camera movement',
  'coll': 'bounds and intersection tests',
  'collinfo': 'collision records and object defaults',
  'control': 'controller input and Controller Pak state',
  'crdcam': 'the credits camera sequence',
  'defs': 'shared game utilities and global definitions',
  'dlists': 'static N64 display-list setup',
  'fifo': 'the optional FIFO buffer',
  'frontend': 'legal screens and front-end menus',
  'fx': 'swoosh and other visual effects',
  'galrecam': 'the gallery camera sequence',
  'gdl': 'display-list storage',
  'geometry': 'geometry drawing, render modes, and shadows',
  'gfx16bit': '16-bit overlay glyphs and numerals',
  'gfxyield': 'the graphics task yield buffer',
  'graphu64': 'N64 graphics and model drawing',
  'hash': 'hash-table storage',
  'hedtrack': 'enemy head tracking',
  'hsb': 'hue and color conversion',
  'huffman': 'Huffman tables used by ProPack decompression',
  'humvee': 'the Humvee boss encounter',
  'instcol': 'collision between object instances',
  'introcam': 'the introduction camera sequence',
  'lists': 'linked-list allocation and traversal',
  'loadsave': 'load and save menus and state',
  'longhunt': 'the Longhunter boss encounter',
  'mantis': 'the Mantis boss encounter',
  'map': 'the in-game map and its reveal logic',
  'mattable': 'animation matrix allocation',
  'memory': 'memory copying, clearing, and checks',
  'mempool': 'the dynamic allocation pool',
  'onscrn': 'on-screen text and graphics',
  'options': 'game options and their stored defaults',
  'particle': 'particle creation, updates, and deletion',
  'pause': 'the pause menu and its options',
  'persist': 'persistent game data and crash identifiers',
  'pickup': 'collectible and pickup interactions',
  'prfault': 'Nintendo 64 fault display and diagnostics',
  'qsort': 'quicksort and its helper routines',
  'regicol': 'collision against world regions',
  'romstruc': 'ROM-format geometry and numeric structures',
  'scene': 'scene setup, collision instances, and world-data requests',
  'sched': 'the Nintendo 64 task scheduler',
  'simppool': 'allocation of simple game instances',
  'stacks': 'thread and fault-handler stacks',
  'sun': 'sunlight and frame data',
  'tcontrol': "Turok's movement abilities and input actions",
  'tengine': 'engine startup, initialization, and main loops',
  'textload': 'texture loading and cache invalidation',
  'tmove': "Turok's movement, life setup, and warps",
  'train': 'training-mode state and drawing',
  'trex': 'the T. rex boss encounter',
  'turret': 'turret tracking and aiming',
  'unicol': 'collision between animated objects',
  'unpack': 'ProPack RNC decompression',
  'volume': 'plane and volume intersection geometry',
  'wallcoll': 'wall and line collision geometry',
  'warp': 'warp destination handling',
  'wradcol': 'wall-radius collision checks',
  'zbuffer': 'the 16-bit depth buffer'
};

const engineHeaders = {
  'adpcm2.h': 'Declares ADPCM decoding data and debug assertions for the audio code.',
  'behavior.h': 'Defines how an intersection reacts: ignore, stick, slide, and related behavior flags.',
  'bossflgs.h': 'Defines the BossLevels enumeration and boss progress flags.',
  'cammodes.h': 'Defines the CameraModes enumeration used by camera control.',
  'cppu64.h': 'Sets N64 graphics microcode and C/C++ language macros before including SDK headers.',
  'debug.h': 'Defines the debug-build allocation macro and related conditional setup.',
  'matdefs.h': 'Defines material flags such as flat shading, self illumination, and two-sided drawing.',
  'parttype.h': 'Defines particle categories including arrows and bullets.',
  'pp.h': 'Declares ProPack RNC compression structures and unpacking interfaces.',
  'regtype.h': 'Defines region material types such as grass, water, and steel.',
  'rommodel.h': 'Declares ROM-format model facets and related geometry structures.',
  'scaling.h': 'Defines visible-distance and near/far clipping constants.',
  'sfx.h': 'Declares sound sample structures and game sound types.',
  'snddefs.h': 'Defines sound-effect loop and envelope flags.',
  'spec.h': 'Defines ROM segment identifiers and screen dimensions shared with the build.',
  'version.h': 'Defines the game version number as a source constant.'
};

function aiff(sample) {
  if (sample.toString('ascii', 0, 4) !== 'FORM') return null;
  const form = sample.toString('ascii', 8, 12);
  if (!['AIFF', 'AIFC'].includes(form)) return null;
  const offset = sample.indexOf(Buffer.from('COMM'), 12);
  if (offset < 0 || offset + 18 > sample.length) return `${form} audio file.`;
  const channels = sample.readUInt16BE(offset + 8);
  const frames = sample.readUInt32BE(offset + 10);
  const bits = sample.readUInt16BE(offset + 14);
  const compressed = form === 'AIFC' && sample.toString('ascii', offset + 26, offset + 30) === 'VAPC';
  let rate = 0;
  if (offset + 26 <= sample.length) {
    const exponent = (sample.readUInt16BE(offset + 16) & 0x7fff) - 16383;
    rate = Math.round(Number(sample.readBigUInt64BE(offset + 18)) * 2 ** (exponent - 63));
  }
  const seconds = rate > 0 ? `, about ${(frames / rate).toFixed(2)} seconds at ${rate.toLocaleString('en-US')} Hz` : '';
  const loop = sample.indexOf(Buffer.from('MARK'), 12) >= 0 ? ' The file includes marker positions.' : '';
  return `${compressed ? 'Nintendo 64 VADPCM-compressed audio' : `${form} audio`}: ${channels} channel${channels === 1 ? '' : 's'}, ${frames.toLocaleString('en-US')} sample frames, ${bits}-bit samples${seconds}.${loop}`;
}

function source(path, sample) {
  if (!/\.(c|cc|cpp|h|hpp|s|asm|y)$/i.test(path)) return null;
  const raw = sample.toString('latin1');
  if (raw.includes('\0')) return null;
  const parts = path.split('/');
  const inEngine = parts[0] === 'PR' && parts[1] === 'tengine' && (parts.length === 3 || (parts.length === 4 && parts[2] === 'dosvers'));
  const filename = parts.at(-1);
  if (inEngine && engineHeaders[filename]) return engineHeaders[filename];
  const stem = filename.replace(/\.(c|cpp|h|s)$/i, '');
  const topic = inEngine && engineTopics[stem];
  if (topic && /\.(c|cpp|s)$/i.test(filename)) {
    return `${parts[2] === 'dosvers' ? 'Host-side source variant that implements' : 'Implements'} ${topic}.`;
  }
  if (topic && /\.h$/i.test(filename) && /(?:extern|typedef|struct|enum|class|#define)/.test(raw)) {
    return `Header declaring types, constants, or interfaces for ${topic}.`;
  }
  if (path.startsWith('PR/tengine/') && !path.includes('/dosvers/')) {
    const opening = raw.slice(0, 600);
    const boss = opening.match(/\/\/\s*(.*?)\s+boss control file/i);
    if (boss && boss[1].trim()) return `Game source for the ${boss[1].replace(/er$/, '')} boss encounter; the opening comment identifies it as boss control code.`;
    const camera = opening.match(/\/\/\s*(.*?)\s+camera control(?: file)?/i);
    if (camera) return `Implements ${camera[1].toLowerCase()} camera control.`;
    if (/\/\/\s*turok movement/i.test(opening)) return 'Implements Turok movement and motion controls.';
    if (/\/\/\s*turok control functions/i.test(opening)) return 'Implements controls for Turok\'s abilities.';
  }
  const array = raw.match(/(?:UINT8|unsigned char|BYTE|u8)\s+([A-Za-z_]\w*)\s*\[\s*\]\s*=/);
  if (/\.h$/i.test(path) && array && /0x[0-9a-f]{2}/i.test(raw)) return `C header containing the ${array[1]} byte array, used as embedded graphic or binary data.`;
  const names = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:static\s+)?(?:[A-Za-z_]\w*\s*\*?\s+){1,4}([A-Za-z_]\w*)\s*\([^;{}]*\)\s*\{/g)]
    .map((match) => match[1]).filter((name) => !/^(if|for|while|switch|return)$/.test(name)))];
  if (names.length) return `Source defines ${names.slice(0, 3).join(', ')}${names.length > 3 ? ', and other routines' : ''}.`;
  const types = [...new Set([...raw.matchAll(/(?:^|\n)\s*(?:typedef\s+)?(?:struct|enum|class)\s+([A-Za-z_]\w*)/g)].map((match) => match[1]))];
  if (types.length) return `Header declares ${types.slice(0, 3).join(', ')}${types.length > 3 ? ', and other types' : ''}.`;
  const defines = [...new Set([...raw.matchAll(/(?:^|\n)\s*#define\s+([A-Za-z_]\w*)/g)].map((match) => match[1]).filter((name) => !/^_+(INC|H|HEADER)/.test(name)))];
  if (defines.length) return `Source declares ${defines.slice(0, 3).join(', ')}${defines.length > 3 ? ', and other macros' : ''}.`;
  return `${/\.(h|hpp)$/i.test(path) ? 'Header' : 'Source'} file; no specific role is established by its visible declarations.`;
}

function engineSpecial(path, sample) {
  if (!path.startsWith('PR/tengine/')) return null;
  const name = path.split('/').pop();
  const raw = sample.toString('latin1');
  const text = (value) => ({ text: value, basis: contentBasis });
  if (sample.subarray(0, 4).equals(Buffer.from([0x80, 0x37, 0x12, 0x40]))) {
    return text('Nintendo 64 ROM image; its opening bytes are the cartridge byte-order signature.');
  }
  if (path === 'PR/tengine/cooky.dat' && sample.readUInt32BE(0) === 11) {
    return text('Indexed game-data container with eleven root blocks and a big-endian offset table.');
  }
  if (['contscr.bin', 'title.bin'].includes(name) && sample.length === 65536) {
    return text('Headerless image-like data; the 307,200-byte file could hold a 320 by 240 image with four bytes per pixel, but the pixel format is not identified.');
  }
  if (['dis.tx', 'dis.txt', 'temp', 'temp.txt'].includes(name) && raw.includes('DISASSEMBLER')) {
    return text('Generated disassembly listing for the tengine code segment, with addresses and source references.');
  }
  if (name === 'Makedepend' && raw.includes('.o:')) return text('Generated object-file dependency list naming the headers required by each compilation unit.');
  if (name === 'segments' && raw.includes('SegmentRomStart')) return text('Assembly symbol assignments for ROM segment start and end addresses.');
  if (name === 'm' && raw.includes('dos2unix')) return text('Short shell command list converting DOS line endings in the host-side build files.');
  if (name === 'acclmid.txt' && raw.includes('Acclaim Entertainment')) return text('Short text label reading "Acclaim Entertainment, Inc."; no additional purpose is recorded.');
  if (['crap', 'musicvol.cpp'].includes(name) && raw.includes('musicvolume')) return text('Loose code fragment adjusting music volume for menu choices; it is not a complete source module.');
  if (/\.mak$/i.test(name) && raw.includes('Microsoft Developer Studio Generated NMAKE File')) return text('Microsoft Developer Studio generated NMAKE project file for a Win32 engine build.');
  if (/\.mdp$/i.test(name) && raw.startsWith('JSG0')) return text('Binary Microsoft Developer Studio project file for a host-side engine configuration.');
  if (/\.ncb$/i.test(name) && raw.startsWith('Microsoft C/C++ program database')) return text('Microsoft C/C++ program database used for source browsing in the host-side project.');
  if (name === 'mssccprj.scc' && raw.startsWith('SCC = This is a Source Code Control file')) return text('Source-control project metadata naming the Turok Engine dosvers project.');
  if (name === 'spec' && raw.includes('ROM spec file')) return text('Host-side copy of the ROM specification, with segment placement and memory-map notes.');
  if (name === 'spec.bak' && raw.includes('ROM spec file')) return text('Backup copy of the ROM specification, with segment placement and memory-map notes.');
  if (['fnlcat.cmp', 'fnlcave.cmp', 'fnljungl.cmp', 'sequence.cmp', 'jungle.seq'].includes(name) && sample.readUInt32BE(0) === 0x44) {
    return text('Binary music sequence with a 0x44-byte big-endian offset directory followed by event data.');
  }
  if (/\.sym$/i.test(name) && raw.startsWith('SF01')) return text('Binary sound-data table with an SF01 signature; its individual records have not been decoded.');
  if (/\.rok$/i.test(name)) {
    const label = raw.match(/(?:Level 1|Wingame\.sbk)/);
    if (label) return text(`Binary data with an embedded "${label[0]}" label; the full format has not been decoded.`);
  }
  if (/\.ctl$/i.test(name) && raw.startsWith('B1')) return text('Nintendo 64 audio control bank with a B1 header, containing instrument and sound definitions.');
  if (/\.tbl$/i.test(name) && sample.includes(0)) return text('Binary sample-data table paired with an audio control bank.');
  if (/\.inst$/i.test(name) && /envelope\s+\w+[\s\S]*attackTime/.test(raw)) return text('Text instrument definitions with envelopes, timing values, and sample mappings.');
  if (path.startsWith('PR/tengine/sounds/')) {
    const lines = raw.split(/\r?\n/);
    if (/^\d+$/.test(lines[0]) && /^\d+$/.test(lines[1]) && lines[2]?.includes('.aif')) {
      return text(`Text audio-element list naming ${Number(lines[1]).toLocaleString('en-US')} samples; its first line gives a ${lines[0]} setting.`);
    }
    if (raw.startsWith('#!') && raw.includes('vadpcm_enc')) return text('C-shell wrapper that runs Nintendo’s VADPCM encoder on an AIFF sample.');
    if (raw.startsWith('#!') && raw.includes('tabledesign')) return text('C-shell wrapper that generates a VADPCM predictor table for an AIFF sample.');
    if (raw.includes('Directory of E:')) return text('DOS-style directory listing of sound files; it is an inventory rather than audio data.');
  }
  if (/\.bak$/i.test(name) && !raw.includes('\0')) {
    const base = name.replace(/\.bak$/i, '').toLowerCase();
    if (engineTopics[base] && /(?:#include|#define|\/\/|\/\*)/.test(raw)) {
      return text(`Backup source copy concerning ${engineTopics[base]}; its contents may differ from the neighboring active file.`);
    }
  }
  if (/\.(old|orig)$/i.test(name) && !raw.includes('\0') && /#(?:include|define)/.test(raw)) {
    return text('Older text copy of a C header, preserving declarations or macros from an earlier variant.');
  }
  return null;
}

export function description(path, sample) {
  if (known[path]) return { text: known[path], basis: 'Verified against file contents' };
  const name = path.split('/').pop();
  const area = path.startsWith('PR/tengine/') ? 'Turok project' : path.startsWith('PR/') ? 'Nintendo SDK tree' : 'surrounding archive';
  const special = engineSpecial(path, sample);
  if (special) return special;
  const sound = aiff(sample);
  if (sound) return { text: sound, basis: contentBasis };
  if (sample.toString('ascii', 0, 4) === 'MThd') return { text: 'Standard MIDI sequence with timed musical events.', basis: contentBasis };
  if (sample.subarray(0, 4).equals(Buffer.from([127, 69, 76, 70]))) {
    const mips = sample.length > 20 && sample.readUInt16BE(18) === 8;
    return { text: `Compiled ${mips ? 'MIPS ' : ''}ELF object containing machine code and symbol data.`, basis: contentBasis };
  }
  if (sample.toString('ascii', 0, 8) === '!<arch>\n') return { text: 'Unix archive containing compiled object modules.', basis: contentBasis };
  if (sample[0] === 0x1f && sample[1] === 0x8b) return { text: 'Gzip-compressed data; its uncompressed subject is not identified here.', basis: contentBasis };
  if (sample.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return { text: 'PNG image file.', basis: contentBasis };
  if (sample.toString('ascii', 0, 3) === 'GIF') return { text: 'GIF image file.', basis: contentBasis };
  if (sample[0] === 0xff && sample[1] === 0xd8) return { text: 'JPEG image file.', basis: contentBasis };
  const code = source(path, sample);
  if (code) return { text: code, basis: code.includes('no specific role is established') ? 'Inspected; purpose not established' : contentBasis };
  const raw = sample.toString('latin1');
  if (/\.tbl$/i.test(name) && /^\s*2\s+4\s+[-+\d\s.]+$/.test(raw)) return { text: 'Text VADPCM predictor table: its first lines specify order 2 and four predictors, followed by signed coefficients.', basis: contentBasis };
  if (/\.tbl$/i.test(name) && /^\s*[-+\d\s.]+$/.test(raw) && /\d/.test(raw)) return { text: 'Text table of numeric coefficients.', basis: contentBasis };
  if (/^(readme|relnotes)/i.test(name) && !raw.includes('\0')) {
    const first = raw.split(/\r?\n/).map((line) => line.trim()).find((line) => line.length > 8 && !/^[-=*#]+$/.test(line));
    if (first) return { text: `Documentation beginning: ${first.slice(0, 110)}${first.length > 110 ? '...' : ''}`, basis: contentBasis };
  }
  if (/^(makefile|.*\.mk$)/i.test(name) && !raw.includes('\0')) return { text: `Make build instructions in the ${area}.`, basis: contentBasis };
  if (/\.(dat|bin|raw|cmp|rnc)$/i.test(name)) return { text: `Binary data in the ${area}; its exact contents are not identified.`, basis: 'Purpose not established' };
  if (/\.(ctl|tbl|inst)$/i.test(name)) return { text: `Audio bank or table data in the ${area}; individual entries are not catalogued.`, basis: 'Inferred from format and location' };
  if (/\.bak$/i.test(name)) return { text: `Backup copy in the ${area}; its contents have not been analyzed.`, basis: 'Inferred from filename and location' };
  return { text: `File in the ${area}; its specific purpose is not established.`, basis: 'Purpose not established' };
}
