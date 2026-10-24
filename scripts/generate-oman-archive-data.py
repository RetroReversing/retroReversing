#!/usr/bin/env python3
"""Generate the Oman archive explorer's metadata from a local extracted copy.

Only names, sizes, checksums, and short descriptions are published. Source bytes
and copied filesystem dates stay in the local archive.
Usage: python3 scripts/generate-oman-archive-data.py /path/to/oman
"""
import hashlib
import json
import re
import subprocess
import sys
from collections import Counter, defaultdict
from pathlib import Path

SOURCE = Path(sys.argv[1]).resolve() if len(sys.argv) == 2 else None
if not SOURCE or not SOURCE.is_dir():
    raise SystemExit('Usage: python3 scripts/generate-oman-archive-data.py /path/to/oman')
OUTPUT = Path(__file__).resolve().parent.parent / 'public/data/oman-archive.json'
SKIP = {'.ds_store', 'thumbs.db', 'desktop.ini', '__macosx'}

TOPICS = {
    'APPS': 'Nintendo 64 development demos, diagnostic programs, and performance tests',
    'AS': 'C-based Algorithm Simulator experiments for pre-hardware graphics development',
    'COSIM': 'C and MIPS assembly co-simulation tests for early Project Reality hardware',
    'DOC': 'HeadStart hardware, software, and developer documentation',
    'HW': 'Reality Coprocessor hardware design, simulation, synthesis, and layout files',
    'HW2': 'a second Reality Coprocessor hardware design tree with Verilog and synthesis files',
    'INCLUDE': 'shared Nintendo 64 and SGI development headers',
    'IOSIM': 'I/O simulator source, test vectors, and hardware communication data',
    'KERN': 'IRIX kernel integration and installation files for the development hardware',
    'LIB': 'SGI host and Nintendo 64 support libraries',
    'LIBULTRA': 'Nintendo 64 operating-system and graphics library source',
    'MAN': 'Unix manual pages and release notes for development tools and APIs',
    'RDPSIM': 'Reality Display Processor simulator source, tests, and generated artifacts',
    'RDPSIM2': 'a second Reality Display Processor simulator tree with source and tests',
    'RSPASM': 'RSP assembler source and generation scripts',
    'RSPASM1201': 'another RSP assembler source tree and generation scripts',
    'RSPCODE': 'RSP graphics, audio, and boot microcode source',
    'RSPSIM': 'Reality Signal Processor simulator and regression tests',
    'TOOLS': 'host-side tools for ROM creation, debugging, conversion, and display-list analysis',
    'usr': 'IRIX-style installed Nintendo 64 SDK include, source, and share files',
    'var': 'IRIX-style system configuration files for the development hardware',
}
PARTS = {
    'SRC': 'source modules', 'SYN': 'synthesis inputs and scripts', 'SIM': 'simulation inputs',
    'TEST': 'test cases and vectors', 'TESTS': 'test cases and vectors', 'DATA': 'test or asset data',
    'HDR': 'headers and shared definitions', 'BACKEND': 'simulator back-end code',
    'TOOLS': 'support tools', 'INCLUDE': 'headers and shared definitions',
    'COMPASS': 'Compass physical design scripts', 'LAYOUT': 'physical layout data',
    'GRAPHICS': 'graphics microcode', 'AUDIO': 'audio microcode or audio APIs',
    'BOOT': 'startup and boot code', 'DEV': 'developer-facing programming manuals',
    'VERIF': 'hardware verification plans', 'PICS': 'documentation images and texture examples',
    'CHIP': 'chip design files', 'RCP': 'Reality Coprocessor', 'RSP': 'Reality Signal Processor',
    'RDP': 'Reality Display Processor', 'VU': 'vector unit', 'VI': 'video interface',
    'AI': 'audio interface', 'PI': 'parallel interface', 'SI': 'serial interface',
    'RI': 'RDRAM interface', 'MI': 'memory interface', 'TC': 'texture coordinate unit',
    'TM': 'texture memory', 'TF': 'texture filter', 'BL': 'blender', 'CC': 'color combiner',
    'CS': 'command shuffler', 'EW': 'edge walker', 'ST': 'span test',
    'DMAREGRE': 'DMA regression tests', 'VUREGRE': 'vector-unit regression tests',
    'SUREGRE': 'scalar-unit regression tests', 'BPREGRE': 'breakpoint regression tests',
    'MEMREGRE': 'memory regression tests', 'DIREGRE': 'decode regression tests',
    'ILREGRE': 'instruction-load regression tests', 'RANDOM': 'randomized tests',
}
DOC_TOPICS = {
    'ABI': 'audio binary interface', 'AUDBI': 'audio binary interface',
    'AUDUCODE': 'audio microcode architecture', 'GFXBI': 'graphics binary interface',
    'GRUCODE': 'graphics microcode architecture', 'SWARCH': 'software architecture',
    'RCP_ELEC_SPEC': 'RCP electrical specification', 'RDP_COMMANDS': 'RDP commands',
    'RDPPROG': 'RDP programming', 'RSPARCH': 'RSP instruction-set architecture',
    'RSPASM': 'RSP assembly directives', 'VUINST': 'RSP vector instructions',
    'BL': 'hardware blender', 'CC': 'color combiner', 'TF': 'texture filter',
    'PI': 'parallel interface', 'IO': 'I/O subsystem', 'GONOGO': 'go/no-go diagnostics',
    'TUTORIAL': 'Nintendo 64 development tutorial', 'WALKAPP': 'walk-through application',
    'OSCORE': 'operating-system core services and threads',
    'OSINTRO': 'operating-system introduction',
    'OVERVIEWHARDWARE': 'Nintendo 64 hardware overview',
    'OVERVIEWRUNTIME': 'runtime system overview',
    'OVERVIEWCOMPILETIME': 'compile-time toolchain overview',
    'MEMORYMGMT': 'memory management', 'ADVMEMORYMGMT': 'advanced memory management',
    'AUDIOFORMATS': 'audio file formats', 'AUDIOLIB': 'audio library API',
    'AUDIOMEMORYUSAGE': 'audio memory usage', 'AUDIOTOOLS': 'audio tools',
    'BLENDER': 'graphics blender', 'GFXUCODE': 'graphics microcode',
    'IO': 'I/O subsystem', 'INSTALLATION': 'development environment installation',
    'SCHEDULER': 'operating-system task scheduler',
    'RDPSTATEMACHINE': 'RDP state machine', 'RSPSTATEMACHINE': 'RSP state machine',
    'TEXRECT': 'textured rectangles', 'TEXTURE': 'texture processing',
    'SOFTWAREBRINGUP': 'software bring-up sequence',
    'PERFORMANCETUNE': 'performance tuning', 'SPRITES': 'sprite rendering',
    'SPRITEUCODE': 'sprite microcode', 'RSPREFCARD': 'RSP programmer reference',
    'RSPPROGGUIDE': 'RSP programming guide',
}

def words(value):
    value = re.sub(r'(?<=[a-z])(?=[A-Z])', ' ', value)
    value = re.sub(r'[_\-.]+', ' ', value)
    return re.sub(r'\s+', ' ', value).strip().lower()


def sample_text(data):
    return data.decode('latin1', 'replace')


def first_line(text):
    for line in text.splitlines()[:35]:
        line = line.strip(' \t#/*;=-')
        if 12 <= len(line) <= 150 and not re.search(r'copyright|proprietary|all rights reserved|\$id:', line, re.I):
            return line
    return None


def compressed_description(path, format_name):
    process = subprocess.Popen(['gzip', '-dc', str(SOURCE / path)], stdout=subprocess.PIPE,
                               stderr=subprocess.DEVNULL)
    try:
        expanded = process.stdout.read(65536)
    finally:
        process.kill()
        process.wait()
    if not expanded:
        return f'{format_name} file; the expanded content could not be identified.', 'Format verified; purpose not established'
    if path.parts[:3] == ('usr', 'share', 'catman'):
        section = path.parent.name
        return f'{format_name} preformatted Unix manual page for {path.stem} in {section}.', 'Verified from decompressed contents and location'
    if expanded.startswith(b'%!PS'):
        return f'{format_name} PostScript test output for {words(path.stem)}.', 'Identified from decompressed contents'
    if expanded.startswith(b'\x01\xda'):
        return f'{format_name} SGI RGB image data for {words(path.stem)}.', 'Identified from decompressed contents'
    if sum(32 <= b < 127 or b in (9, 10, 13) for b in expanded) / len(expanded) > .85:
        return f'{format_name} text data for {words(path.stem)} in the {path.parts[0]} tree.', 'Identified from decompressed contents; topic inferred from filename'
    return f'{format_name} binary data for {words(path.stem)} in the {path.parts[0]} tree; record meanings are not established.', 'Identified from decompressed contents; topic inferred from filename'


def source_description(path, text, ext):
    name = path.name
    if ext == '.v' or ext == '.vh':
        modules = re.findall(r'\bmodule\s+([A-Za-z_]\w*)', text)
        if modules:
            return f'Verilog hardware description defining {", ".join(dict.fromkeys(modules[:3]))}' + (' and other modules.' if len(modules) > 3 else '.')
        return 'Verilog hardware description; no module declaration was found in the inspected portion.'
    if ext in {'.c', '.h', '.s', '.cpp', '.y', '.l'}:
        prefix = 'C header' if ext == '.h' else 'MIPS assembly' if ext == '.s' else 'C source'
        if ext == '.y': prefix = 'Parser grammar'
        if ext == '.l': prefix = 'Lexer specification'
        if ext == '.s':
            for header in re.finditer(r'(?m)^\s*(?:/\*+|\*|;|#)?\s*([A-Za-z][A-Za-z0-9 /,:_-]{12,90})\s*(?:\*/)?\s*$', text[:500]):
                label = header.group(1).strip()
                if not re.search(r'copyright|proprietary|revision|silicon graphics|coded instructions|federal law|disclosed', label, re.I):
                    return f'MIPS assembly test or routine labeled "{label}".'
        funcs = list(dict.fromkeys(re.findall(r'(?m)^\s*(?:static\s+|extern\s+|inline\s+)*(?:[A-Za-z_]\w*[\s*]+){1,5}([A-Za-z_]\w*)\s*\([^;{}]*\)\s*\{', text)))
        funcs = [x for x in funcs if x not in {'if', 'for', 'while', 'switch'}]
        if funcs:
            return f'{prefix} defining {", ".join(funcs[:3])}' + (' and other routines.' if len(funcs) > 3 else '.')
        symbols = list(dict.fromkeys(re.findall(r'(?m)^\s*(?:#define|\.globl|\.global|\.ent|typedef\s+(?:struct|enum))\s+([A-Za-z_]\w*)', text)))
        if symbols:
            return f'{prefix} declaring {", ".join(symbols[:3])}' + (' and other symbols.' if len(symbols) > 3 else '.')
        if ext == '.s' and path.parts[0] == 'RSPSIM' and re.search(r'(?m)^\s*\.(?:base|data|word)\b', text):
            return f'RSP regression assembly test {path.stem}, with instruction and test-data directives.'
        if ext == '.s' and path.parts[0] == 'RSPCODE':
            return f'RSP microcode assembly for {words(path.stem)}; the specific routine is inferred from its filename.'
        modules = re.findall(r'(?m)^\s*(?:\.include|#include)\s+["<]([^">]+)', text)
        if modules: return f'{prefix} using {", ".join(modules[:2])}; its specific behavior is not established here.'
        return f'{prefix}; its specific role is not established by the inspected text.'
    return None


def describe(path, data, size):
    name, ext = path.name, path.suffix.lower()
    text = sample_text(data)
    kind = 'Identified from file contents'
    if size == 0: return 'Empty file with no content to identify its purpose.', kind
    if data.startswith(b'<MakerFile '):
        m = re.match(rb'<MakerFile ([^>]+)>', data)
        version = m.group(1).decode('ascii', 'replace') if m else 'unknown'
        stem = path.stem.upper()
        topic = DOC_TOPICS.get(stem)
        if not topic and path.parts[0] == 'DOC': topic = words(stem)
        return f'Adobe FrameMaker {version} document' + (f' concerning {topic}.' if topic else '; the document title is not established from the binary header.'), 'Format verified; topic inferred from filename and location' if topic else kind
    if data.startswith(b'%!PS'):
        title = re.search(r'(?m)^%%Title:\s*(.{1,100})', text)
        return f'PostScript document' + (f' titled {title.group(1).strip()}.' if title else f' associated with {words(path.stem)}.'), kind if title else 'Format verified; topic inferred from filename'
    if data.startswith(b'PK\x03\x04'):
        import zipfile
        try:
            with zipfile.ZipFile(SOURCE / path) as z:
                names = z.namelist()
                return f'ZIP archive containing {len(names):,} entries' + (f', including {", ".join(names[:3])}.' if names else '.'), kind
        except (OSError, ValueError, zipfile.BadZipFile):
            return 'ZIP-format archive; the member list could not be read.', kind
    if data.startswith(b'\x1f\x8b'): return compressed_description(path, 'Gzip-compressed')
    if data.startswith(b'\x1f\x9d'): return compressed_description(path, 'Unix compress (.Z)')
    if data.startswith(b'\x1f\x1e'): return compressed_description(path, 'Unix pack-compressed')
    if data.startswith(b'MZ'): return f'DOS executable associated with {words(path.stem)}; its runtime behavior was not inspected.', 'Format verified; topic inferred from filename'
    if data.startswith(b'!<arch>\n'): return 'Unix static library archive containing compiled object modules.', kind
    if data.startswith(b'\x7fELF'):
        machine = 'MIPS ' if len(data) > 20 and int.from_bytes(data[18:20], 'little' if data[5] == 1 else 'big') == 8 else ''
        return f'Compiled {machine}ELF binary with program or symbol data.', kind
    if data.startswith(b'FORM') and data[8:12] in (b'AIFF', b'AIFC'):
        comm = data.find(b'COMM')
        if comm >= 0 and comm + 16 <= len(data):
            channels = int.from_bytes(data[comm+8:comm+10], 'big')
            frames = int.from_bytes(data[comm+10:comm+14], 'big')
            return f'{data[8:12].decode()} audio with {channels} channel(s) and {frames:,} sample frames.', kind
        return f'{data[8:12].decode()} audio file.', kind
    if data.startswith(b'\x01\xda') and len(data) >= 12:
        h,w = int.from_bytes(data[6:8],'big'),int.from_bytes(data[8:10],'big')
        return f'SGI RGB image ({w} x {h} pixels).' if 0 < h < 10000 and 0 < w < 10000 else 'SGI RGB image.', kind
    if data.startswith(b'\x80\x37\x12\x40'): return 'Nintendo 64 ROM image identified by its cartridge byte-order signature.', kind
    if ext == '.3p' or (path.parts[0] == 'MAN' and ext in {'.1', '.3'}):
        header = re.search(r'(?m)^\.(?:TH|Dt)\s+([^\n]+)', text)
        return f'Unix manual page for {header.group(1).strip()[:100]}.' if header else f'Unix manual page for {name}.', kind if header else 'Inferred from format and location'
    if name.upper() in {'MAKEFILE', 'MAKEFILE.INCLUDE', 'MAKEFILE.OLD', 'MAKEDC'} or ext in {'.mk', '.makefile'}:
        targets = re.findall(r'(?m)^([A-Za-z_][\w.-]*):(?!=)', text)
        return 'Make build instructions' + (f' with targets {", ".join(dict.fromkeys(targets[:3]))}.' if targets else ' for this directory.'), kind
    if ext == '.ss' and b'\x00' not in data[:4096]:
        module = re.search(r'(?m)^\s*module\s*=\s*([A-Za-z_]\w*)', text)
        target = module.group(1) if module else path.stem.lower()
        return f'Synthesis script for {target}, setting timing, load, and Verilog input conditions.', 'Identified from script contents' if module else 'Inspected script; target inferred from filename'
    if ext in {'.v', '.vh', '.c', '.h', '.s', '.cpp', '.y', '.l'} and b'\x00' not in data[:4096]:
        result = source_description(path, text, ext)
        return result, kind if 'specific role is not established' not in result else 'Inspected; purpose not established'
    if ext in {'.synscr', '.qtvscr', '.scrscr', '.dprscr', '.parscr', '.merscr', '.drcscr', '.verscr', '.netcmpscr'}:
        commands = re.findall(r'(?m)^\s*([a-z][a-z_]+)\b', text)
        return f'Hardware tool script for {words(path.stem)}' + (f'; starts with {", ".join(commands[:2])} commands.' if commands else '.'), 'Inspected script; topic inferred from filename'
    if ext in {'.ss', '.cmd', '.tcl', '.sh', '.awk', '.pl', '.script'} and b'\x00' not in data[:4096]:
        line = first_line(text)
        return f'Text script or command file for {words(path.stem)}' + (f'; begins: {line[:90]}.' if line else '.'), 'Inspected text; topic inferred from filename'
    if ext in {'.tst', '.in', '.data', '.dhex', '.drc', '.con', '.tmg', '.vmd', '.vsyn', '.report', '.tab', '.sym', '.flr', '.cvg', '.rdp'}:
        if b'\x00' not in data[:4096]:
            return f'Text {words(ext[1:])} data for {words(path.stem)}; {len(text.splitlines()):,} lines in the inspected portion.', 'Inspected format; topic inferred from filename and location'
        return f'Binary {words(ext[1:])} data for {words(path.stem)}; record meanings are not established.', 'Inspected format; topic inferred from filename and location'
    if ext in {'.o', '.so', '.archive', '.a', '.lib'}:
        return f'Compiled or archived build output for {words(path.stem)}; the internal format was not identified.', 'Inferred from filename and location'
    if ext in {'.txt', '.htm', '.html', '.readme'} or name.upper().startswith(('README', 'RELNOTE', 'INSTALL', '00_INDEX')):
        line = first_line(text)
        if line and b'\x00' not in data[:4096]: return f'Text document beginning: {line[:120]}.', kind
    if b'\x00' not in data[:4096] and data:
        line = first_line(text)
        if line: return f'Text file beginning: {line[:120]}.', kind
    return f'File associated with {words(path.stem)} in the {path.parts[0]} tree; its specific format or purpose is not established.', 'Purpose not established'

folders = []
files = []
children = defaultdict(list)
for item in sorted(SOURCE.rglob('*'), key=lambda p: str(p.relative_to(SOURCE)).casefold()):
    rel = item.relative_to(SOURCE)
    if any(part.lower() in SKIP or part.startswith('._') for part in rel.parts): continue
    path = rel.as_posix()
    if item.is_dir():
        folders.append(path)
    elif item.is_file() and not item.is_symlink():
        digest = hashlib.md5()
        with item.open('rb') as stream:
            while block := stream.read(1024 * 1024): digest.update(block)
        with item.open('rb') as stream: sample = stream.read(65536)
        desc, basis = describe(rel, sample, item.stat().st_size)
        files.append({'path': path, 'size': item.stat().st_size, 'md5': digest.hexdigest(), 'description': desc, 'basis': basis})
        for i in range(1, len(rel.parts)):
            children['/'.join(rel.parts[:i])].append(item)

folder_descriptions = [{'path': '', 'description': f'The Oman collection combines SGI Project Reality hardware and simulator work with Nintendo 64 SDK documentation, tools, microcode, and sample programs. This index covers {len(files):,} files.', 'basis': 'Summarized from the inspected archive tree'}]
for path in folders:
    parts = path.split('/')
    top = parts[0]
    if len(parts) == 1:
        description = f'Contains {TOPICS.get(top, words(top))}.'
        basis = 'Verified from descendant files and archive documentation' if top in TOPICS else 'Inferred from descendant files'
    else:
        local = [p for p in children[path] if p.parent.relative_to(SOURCE).as_posix() == path]
        extensions = Counter((p.suffix.lower() or '[none]') for p in local)
        role = PARTS.get(parts[-1].upper())
        if not role:
            label = words(parts[-1].replace('.DELETED','').replace('.SKIP',''))
            if top == 'APPS': role = f'the {label} demo or test project'
            elif top in {'HW', 'HW2'}: role = f'{label} hardware design files'
            elif top in {'RDPSIM', 'RDPSIM2', 'RSPSIM'}: role = f'{label} simulator or regression files'
            elif top == 'MAN': role = f'{label} manual pages'
            else: role = f'{label} files'
        context = TOPICS.get(top, top)
        description = f'Contains {role} within {context}.'
        if extensions:
            kinds = ', '.join(f'{ext} ({count})' for ext, count in extensions.most_common(3))
            description += f' Direct files include {kinds}.'
        if parts[-1].upper().endswith('.DELETED'): description += ' The directory name marks this tree as deleted in the source copy.'
        if parts[-1].upper().endswith('.SKIP'): description += ' The directory name marks this tree as skipped in the source copy.'
        basis = 'Summarized from path and direct file types'
    folder_descriptions.append({'path': path, 'description': description, 'basis': basis})

manifest = {
    'version': 1,
    'root': 'oman',
    'initialPath': 'DOC',
    'locations': [
        {'label':'Documentation','path':'DOC'}, {'label':'Hardware designs','path':'HW'},
        {'label':'Hardware designs 2','path':'HW2'}, {'label':'RSP microcode','path':'RSPCODE'},
        {'label':'RDP simulator','path':'RDPSIM'}, {'label':'SDK applications','path':'APPS'},
        {'label':'IRIX SDK tree','path':'usr'}
    ],
    'note': 'This is a metadata index only. MD5 values cover the complete files in the local extracted Oman copy. Descriptions distinguish inspected formats and declarations from filename-based inferences; original file contents and dates are omitted.',
    'folders': folders,
    'folderDescriptions': folder_descriptions,
    'files': files,
}
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(json.dumps(manifest, ensure_ascii=True, separators=(',', ':')), encoding='utf-8')
print(f'Wrote {len(files):,} files and {len(folders):,} folders to {OUTPUT}')
