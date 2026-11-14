#!/usr/bin/env python3
"""Rebuild the article's targeted patch-ablation examples on macOS.

Usage: python3 reproduce.py /Volumes/Data/pm-patch-run \
    --binutils-prefix /opt/homebrew/bin/mips-linux-gnu-

Requires git, make, Apple clang/Xcode command-line tools, and modern GNU MIPS
binutils. The work directory must be empty. Downloads public GPL toolchain
sources; does not use game code or modify installed compilers.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import platform
import shutil
import subprocess

GCC = 'd97824ffc7517675646960442b3f512a473e4404'
BINUTILS = 'fb13863bb812ac34417916e0b8a6e16f5ca6badb'
CFLAGS = '-O2 -std=gnu89 -Wno-return-type -Wno-error -Wno-implicit-function-declaration -Wno-int-conversion -Wno-incompatible-function-pointer-types'
ASSET_ROOT = Path(__file__).resolve().parent


def execute(args, cwd, env=None, log=None):
    command = [str(a) for a in args]
    if log:
        with open(log, 'a') as stream:
            stream.write('$ ' + ' '.join(command) + '\n')
            stream.flush()
            subprocess.run(command, cwd=cwd, env=env, stdout=stream,
                           stderr=subprocess.STDOUT, check=True)
        return ''
    return subprocess.check_output(command, cwd=cwd, env=env, text=True,
                                   stderr=subprocess.STDOUT)


def build_tools(root, cc='clang', jobs=4):
    tools = root / 'tools'
    tools.mkdir(exist_ok=True)
    for name, repo, revision, extra in [
        ('gcc', 'gcc-papermario', GCC, ''),
        ('binutils', 'binutils-papermario', BINUTILS, ' -DDARWIN'),
    ]:
        source = root / (name + '-source')
        execute(['git', 'clone', '--quiet', 'https://github.com/pmret/' + repo + '.git', source], root)
        execute(['git', 'checkout', '--quiet', revision], source)
        env = dict(os.environ, CC=cc, CFLAGS=CFLAGS + extra)
        config = ['./configure', '--target=mips-nintendo-nu64',
                  '--prefix=' + str(root / 'install'), '--disable-gprof',
                  '--disable-gdb', '--disable-werror',
                  '--host=i386-apple-darwin', '--build=i386-apple-darwin']
        if name == 'gcc':
            config.append('--with-gnu-as')
        log = root / (name + '-build.log')
        execute(config, source, env, log)
        targets = ['cpp', 'cc1', 'xgcc'] if name == 'gcc' else ['all-gas']
        make = ['make', '-j' + str(jobs), *targets, 'CFLAGS=' + CFLAGS + extra]
        execute(make, source, env, log)
        binary = source / ('cc1' if name == 'gcc' else 'gas/as-new')
        shutil.copy2(binary, tools / ('cc1-patched' if name == 'gcc' else 'as-patched'))
        variants = [('entry.patch', 'cc1-entry-reverted'), ('cse.patch', 'cc1-cse-reverted')] if name == 'gcc' else [('assembler.patch', 'as-reverted'), ('metadata.patch', 'as-debug-metadata-reverted')]
        for patch, output in variants:
            patch_path = ASSET_ROOT / 'reversions' / patch
            execute(['git', 'apply', patch_path], source)
            # These 1990s makefiles can miss sub-second source changes.
            # Remove objects so a variant cannot reuse the previous variant's code.
            if name == 'gcc':
                for filename in ['mips.o', 'cse.o', 'cc1']:
                    (source / filename).unlink(missing_ok=True)
            else:
                for directory in ['gas', 'bfd']:
                    for pattern in ['*.o', '*.lo']:
                        for obj in (source / directory).rglob(pattern):
                            obj.unlink()
            execute(make, source, env, log)
            shutil.copy2(binary, tools / output)
            execute(['git', 'apply', '--reverse', patch_path], source)


def run_examples(root, prefix, cc='clang'):
    """Run with prebuilt tools too; useful for independently repeating comparisons."""
    cases = root / 'cases'
    if not cases.exists():
        shutil.copytree(ASSET_ROOT / 'cases', cases)
    results = root / 'results'
    results.mkdir(exist_ok=True)
    tools = root / 'tools'
    (root / '.work').mkdir(exist_ok=True)
    cc_flags = ['-quiet', '-G0', '-mips3', '-mgp32', '-mfp32', '-O2']
    as_flags = ['-EB', '-mips3', '-G0']
    jobs = []
    for case in ['control', 'naked']:
        jobs += [(case, 'patched', 'cc1-patched', 'as-patched', []),
                 (case, 'reverted', 'cc1-entry-reverted', 'as-patched', [])]
    jobs += [('constant', 'patched', 'cc1-patched', 'as-patched', []),
             ('constant', 'cse-reverted', 'cc1-cse-reverted', 'as-patched', [])]
    for case in ['debug-label', 'real-label', 'alignment']:
        jobs += [(case, 'patched', None, 'as-patched', []),
                 (case, 'reverted', None, 'as-reverted', [])]
    jobs += [('metadata', 'patched', None, 'as-patched', ['-g2']),
             ('metadata', 'reverted', None, 'as-debug-metadata-reverted', ['-g2'])]
    records = []
    for case, variant, compiler, assembler, flags in jobs:
        stem = 'results/' + case + '-' + variant
        source = 'cases/' + case + ('.c' if compiler else '.s')
        env = dict(os.environ, N64ALIGN='ON')
        if compiler:
            execute([tools / compiler, *cc_flags, source, '-o', '.work/compiler.s'], root)
            shutil.copy2(root / '.work/compiler.s', root / (stem + '.s'))
            source = '.work/compiler.s'
        execute([tools / assembler, *as_flags, *flags, '-o', stem + '.o', source], root, env)
        # ld can add an input filename symbol; hold that filename fixed too.
        shutil.copy2(root / (stem + '.o'), root / '.work/object.o')
        execute([prefix + 'ld', '-m', 'elf32btsmip', '--build-id=none', '-T',
                 'cases/layout.ld', '-o', stem + '.elf', '.work/object.o'], root)
        execute([prefix + 'objcopy', '-O', 'binary', '-j', '.text', stem + '.elf', stem + '.text.bin'], root)
        for suffix, args in [('disassembly.txt', [prefix + 'objdump', '-D', '-j', '.text', stem + '.elf']),
                             ('symbols.txt', [prefix + 'nm', '-S', '-n', stem + '.elf']),
                             ('headers.txt', [prefix + 'readelf', '-h', '-S', stem + '.o'])]:
            (root / (stem + '.' + suffix)).write_text(execute(args, root))
        data = (root / (stem + '.text.bin')).read_bytes()
        obj = (root / (stem + '.o')).read_bytes()
        elf = (root / (stem + '.elf')).read_bytes()
        records.append(dict(case=case, variant=variant, compiler=compiler,
                            assembler=assembler, text_bytes=len(data),
                            text_words=[data[i:i+4].hex() for i in range(0, len(data), 4)],
                            text_sha256=hashlib.sha256(data).hexdigest(),
                            object_bytes=len(obj), object_sha256=hashlib.sha256(obj).hexdigest(),
                            linked_elf_bytes=len(elf), linked_elf_sha256=hashlib.sha256(elf).hexdigest()))
    comparisons = []
    for case in ['control', 'naked', 'constant', 'debug-label', 'real-label', 'alignment', 'metadata']:
        pair = [item for item in records if item['case'] == case]
        a, b = (bytes.fromhex(''.join(item['text_words'])) for item in pair)
        comparisons.append(dict(case=case, variants=[item['variant'] for item in pair],
                                differing_byte_offsets=[i for i in range(max(len(a), len(b)))
                                                        if a[i:i+1] != b[i:i+1]],
                                identical_text=a == b,
                                identical_object=pair[0]['object_sha256'] == pair[1]['object_sha256'],
                                identical_linked_elf=pair[0]['linked_elf_sha256'] == pair[1]['linked_elf_sha256']))
    report = dict(gcc_revision=GCC, binutils_revision=BINUTILS,
                  host=platform.platform(), machine=platform.machine(),
                  host_compiler=execute([cc, '--version'], root), host_cflags=CFLAGS,
                  linker=execute([prefix + 'ld', '--version'], root),
                  compiler_flags=cc_flags, assembler_flags=as_flags,
                  environment={'N64ALIGN': 'ON'},
                  comparison='Targeted reversions; N64 target and host-portability patches retained.',
                  results=records, comparisons=comparisons)
    (root / 'results.json').write_text(json.dumps(report, indent=2) + '\n')
    return report


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('work_directory', type=Path)
    p.add_argument('--binutils-prefix', default='mips-linux-gnu-')
    p.add_argument('--cc', default='clang')
    p.add_argument('--jobs', type=int, default=4)
    args = p.parse_args()
    root = args.work_directory.resolve()
    if root.exists() and any(root.iterdir()):
        p.error('Choose an empty work directory.')
    root.mkdir(parents=True, exist_ok=True)
    build_tools(root, args.cc, args.jobs)
    report = run_examples(root, args.binutils_prefix, args.cc)
    print('Completed', len(report['results']), 'builds; see', root / 'results.json')


if __name__ == '__main__':
    main()
