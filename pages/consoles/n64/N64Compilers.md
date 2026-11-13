---
layout: post
title: Nintendo 64 Compilers and Their Differences
permalink: /n64-compilers
category: n64
tags:
- n64
- tools
- sdk
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Nintendo 64 Compilers
    url: '#'
editlink: /consoles/n64/N64Compilers.md
updatedAt: '2026-11-13'
excerpt: 'A reference to N64 compiler families, versions, assemblers and matching differences, covering SGI IDO, KMC GCC, SN64, Paper Mario GCC and iQue EGCS.'
---

[Nintendo 64](/n64) development used several C/C++ toolchains, including SGI IDO, Kyoto Microcomputer's exeGCC, SN Systems' GNU-based tools and Metrowerks CodeWarrior. Their versions, vendor changes and assemblers can produce different machine code from the same source. Nintendo's own development documentation lists both IDO and exeGCC options [^1].

This guide brings together documented production toolchains, preserved builds and modern matching implementations. It also covers later iQue compilers and experimental comparison profiles, with their status stated separately. **A compiler that can target the N64 is not automatically a compiler known to have built a commercial N64 game.** This is a catalogue of the evidenced families and variants below, not a claim that every private studio build has survived.

---
## Compiler Families at a Glance
The main choices differ in more than their version numbers. Follow the family sections for the evidence and practical consequences:

Family or variant | Historical or matching role | Main distinction
---|---|---
SGI IDO 5.3 | Historical N64 development; early-game matching | SGI compiler pipeline, separate from GCC
SGI IDO 7.1 | Historical N64 development; later-game matching | Different SGI release; cannot substitute for 5.3 when matching
Metrowerks CodeWarrior | Documented N64 C/C++ development product | Integrated development tools; N64 version is distinct from other CodeWarrior targets
KMC exeGCC / GCC 2.7.2 | Historical development and matching | KMC-targeted GNU toolchain; modern matching builds reproduce its output
SN64 GCC 2.7.2 | Preserved SN builds 0001, 0004 and 0006 | SN-specific compiler builds and ASN64 assembly
SN64 GCC 2.8.1 | Production-game matching evidence | Later SN compiler; paired assembler matters
SN64 2.7.2-970404 reconstruction | Modern reconstruction | Recreated compiler plus compatibility assembly; distinct from preserved executables
Paper Mario GCC 2.8.1 | Modern matching implementation for Paper Mario | Patched compiler and paired GNU binutils
GCC 2.8.1 + ASN64 2.56 | Modern comparison pairing | Tests GCC generation with original SN assembly; not a separate proven historical release
EGCS 1.1.2 / GCC 2.91.66 | Later iQue rebuilds | Separate GNU branch and toolchain; not an SN64 alias
Other SGI and later GNU versions | Comparison or homebrew | Capability alone does not establish retail N64 use

The tables describe families rather than assigning one compiler to every game from a particular publisher. A single executable can combine game code, boot code and libraries built with different tools [^2] [^3].

---
## Glossary
These terms explain the differences discussed below:
* <a id="glossary-ido"></a>**IDO** - IRIS Development Option, SGI's development toolchain for IRIX.
* <a id="glossary-gcc"></a>**GCC** - GNU Compiler Collection; historical packages may call it the GNU C Compiler.
* <a id="glossary-abi"></a>**ABI** - Application Binary Interface. Defines conventions such as parameter passing, register use and data layout.
* <a id="glossary-isa"></a>**ISA** - Instruction Set Architecture. A processor's available instructions, distinct from its calling convention.
* <a id="glossary-assembler"></a>**Assembler** - Converts assembly into object code. Macro expansion and instruction scheduling can affect the bytes.
* <a id="glossary-elf"></a>**ELF / ECOFF / PsyQ object** - Object-file formats used along different toolchain paths. Matching tools may convert a historical format into ELF for linking.
* <a id="glossary-egcs"></a>**EGCS** - Experimental GNU Compiler System, a GNU compiler development branch. EGCS 1.1.2 identifies itself with the GCC version 2.91.66.
* <a id="glossary-bss"></a>**BSS** - Storage reserved for uninitialized or zero-initialized objects, normally without storing their zero bytes in the executable file.
* <a id="glossary-debug"></a>**DWARF / STABS** - Debug-information formats used to describe source lines, functions and types to a debugger.
* <a id="glossary-rsp"></a>**RSP** - Reality Signal Processor. Its microcode is separate from the main CPU's C/C++ compilation.

---
## SGI IDO 5.3 and 7.1
[IDO](#glossary-ido) is SGI's compiler family, rather than a vendor build of GCC. Nintendo's manual lists IDO 5.3 and IDO 7.1 for SGI workstations running different IRIX releases. The workstation's operating-system version and the compiler's version are separate labels [^1].

{% include article-figure.html src="/public/images/n64/partner-n64-compiler-options.webp" alt="Nintendo manual table listing exeGCC and IDO options for PARTNER-N64 workstation and PC development systems" width="1237" height="1600" size="document" title="Nintendo documented multiple compiler options" caption="The PARTNER-N64 comparison lists exeGCC on both host families and IDO on SGI. Source: [Introduction to Nintendo 64](https://ultra64.ca/files/documentation/nintendo/Nintendo_64_Intro_to_the_N64.pdf), PDF page 112. Select the scan to enlarge." %}

IDO 5.3 and 7.1 should be treated as separate matching candidates. decompdecomp describes 5.3 as an early-game starting point and 7.1 as a later first-party starting point. These are search hints, not a rule that identifies a game's toolchain from its release year. Ocarina of Time's build system is a useful concrete example of retaining different compiler settings for different parts and editions [^3] [^4].

### How IDO Runs on Modern Computers
The [ido-static-recomp project](https://github.com/decompals/ido-static-recomp) converts selected IRIX toolchain programs into programs for modern hosts. It supports both 5.3 and 7.1, including the C frontend, optimizer and code generator. This preserves a historical compilation pipeline rather than asking a current compiler to approximate its output [^5].

Running an original IRIX executable through an emulator is another route. The host execution method should be recorded separately from the target compiler version: a statically recompiled IDO 5.3 is still intended to reproduce IDO 5.3 output [^4] [^5].

---
### IDO Matching Characteristics
The [decompdecomp IDO guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/ido.md) documents useful observations. Unconditional branches within functions often use `b`, encoded as `beq $zero, $zero`. Expression structure, first assignments and temporary lifetimes can influence register allocation. Floating-point constants and argument home slots also provide clues [^4].

These are tendencies, not fingerprints that uniquely identify a version. A `b` instruction can also come from handwritten assembly. A compiler family guess still needs compilation evidence.

The guide uses `-O2 -mips2` as a common starting point, with other optimization and instruction-set choices needed for some files. Its source-layout observations are deliberately narrower: one IDO 5.3 comparison changed output after whitespace was collapsed, but the mechanism was not established. Preserve working source layout and test formatting changes under fixed inputs rather than treating all whitespace as harmless [^4].

---
## KMC exeGCC and GCC 2.7.2
Kyoto Microcomputer, usually shortened to KMC, supplied exeGCC for the PARTNER-N64 environment. Nintendo documents SGI-hosted and PC-hosted exeGCC packages. **PARTNER-N64 names a development system; it is not an alternative name for SN Systems' compiler.** The manual's KMC branding and compiler table help keep those products separate [^1].

The [decompals KMC matching compiler](https://github.com/decompals/mips-gcc-2.7.2) is GCC 2.7.2 tailored to reproduce KMC output. In decompdecomp, the `gcc-2.7.2-kmc` profile pairs that compiler with matching binutils 2.6. This is a modern matching build, rather than an untouched copy of the original PC package [^6] [^7].

The [KMC matching guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/gcc-kmc.md) starts with `-O2 -mips3 -G0`. It notes that GCC commonly uses `j` for an unconditional jump inside a function, where IDO often uses `b`. Local declaration order, variable lifetimes and expression ordering can change registers and stack slots. Those observations explain why changing the spelling of equivalent C can matter [^8].

Debug options deserve attention too. In the documented KMC workflow, `-g` or `-g3` can change instruction placement around calls and returns because debug line labels interact with old assembler scheduling. Recording only `-O2` is therefore an incomplete build recipe [^8].

---
## SN Systems SN64 GCC
[SN Systems](/companies/snsystems) supplied a PC development system with GNU-based C/C++ compilation, its ASN64 assembler and PSYLINK linker. The [SN64 manual](https://ultra64.ca/files/documentation/sn-systems/SN_Systems_PC_Development_System_for_the_Nintendo_64.pdf) describes CCN64 as a driver that invokes the compilation, assembly and linking stages. A driver's version is not necessarily the GCC backend's version [^9].

The [SN64 SDK article](/sn64-sdk-sn-systems) covers the wider package. For compiler matching, the important identity is the combination of frontend, compiler build, assembler and flags.

### Preserved SN64 Builds
The inspected decompdecomp registry distinguishes these original compiler profiles. Its integration notes explain the assembler pairings and preservation sources [^2] [^7]:

Compiler | Profile ID | Assembly path and important difference
---|---|---
GCC 2.7.2 build 0001 | `sn-n64-272-0001` | Original compiler with ASN64 2.56; the integration borrows the pinned 2.8.1 preprocessor
GCC 2.7.2 build 0004 | `sn-n64-272-0004` | Preserved compiler and its own assembler; also uses the pinned 2.8.1 preprocessor
GCC 2.7.2 build 0006 | `sn-n64-272-0006` | Preserved compiler, preprocessor and paired assembler
GCC 2.8.1 | `sn-n64-281` | Preserved compiler with its preprocessor and ASN64 2.78

The borrowed preprocessors are properties of these modern integrations. They should not be described as the exact contents of the original 0001 or 0004 distribution.

SN64 2.8.1 assembly cannot simply be fed to the older ASN64 2.56: the integration documents rejected `%hi`/`%lo` expressions. Build 0001 also rejects the `-mcpu=VR4300` option used by the 2.8.1 default profile. An unsupported option can reveal a wrong compiler assumption before any matching begins [^2].

For modern matching, decompdecomp runs the preserved programs through wibo, converts their [PsyQ objects to ELF](#glossary-elf), then links and compares bytes. Object conversion is part of the reproduction path, not evidence that the historical compiler produced ELF [^2].

---
### Games That Demonstrate the Differences
The [Excitebike 64 matching project](https://github.com/chasmlol/excitebike64) documents SN64 GCC 2.8.1 for game code and 2.7.2 builds 0006 and 0001 for its boot loader. Its libultra and libgcc use KMC-compatible GCC 2.7.2 with binutils 2.6. This is a concrete example of several compiler profiles within one game's build [^10].

The [Turok 2 project](https://github.com/mgrz18/turok2-decomp) reports matching engine and VM-module code with SN64 GCC 2.8.1, including `-O2 -mno-fix4300`, and a byte-exact ROM rebuild. That supports this game's configuration; it does not establish a universal SN64 flag set [^11].

---
### Reconstructed SN64 GCC 2.7.2-970404
The [SN64-gcc project](https://github.com/decompals/SN64-gcc) recreates a version of the SN64 GCC toolchain. decompdecomp exposes its 2.7.2-970404 reconstruction separately as `sn-n64-272-970404`. It uses native compiler programs, a `modern-asn64` compatibility wrapper and GNU assembly tools [^2] [^12].

This is useful when investigating SN-style generation without executing the original Windows compiler. It is not an alias for preserved build 0001, 0004 or 0006. Its default profile includes `-fno-exceptions` because the reconstruction enables exceptions by default. Reproduction still has to be established for the functions and data being matched [^2].

---
## Metrowerks CodeWarrior for Nintendo 64
CodeWarrior was also offered for N64 development. Metrowerks' [CodeWarrior's Architectural Advantage](https://www.nxp.jp/docs/en/white-paper/CWX-WP.pdf), finalized in September 2000, lists Nintendo64 MIPS as a C/C++ target hosted on Windows 95/98/NT. Its architecture combines a project manager, editor, compiler, linker and debugger through target-specific tools [^18].

This is a separate product family to investigate alongside IDO and the GNU variants. A CodeWarrior version for GameCube, PlayStation or another MIPS target is not an interchangeable N64 compiler. The product name identifies the environment; exact compiler plugins, libraries and options still need to be established for a matching project.

The inspected N64 profile list does not include CodeWarrior. The sources used here establish the N64 product's availability, but do not identify a particular retail game's matching compiler build or justify CodeWarrior-specific instruction fingerprints. Those remain gaps rather than reasons to omit the product from the historical catalogue [^7] [^18].

---
## Paper Mario GCC 2.8.1
The [Paper Mario team's GCC fork](https://github.com/pmret/gcc-papermario) is a community-maintained GCC 2.8.1 toolchain with N64 target support, language extensions, host fixes and debugging changes. Its companion [binutils fork](https://github.com/pmret/binutils-papermario) supplies a modified assembler and related tools. Sharing the version string 2.8.1 with SN64 does not make these pipelines interchangeable [^13].

**There is no single binary change applied to every function.** Some patches change instructions or data placement when their conditions are met. Others enable source that the unpatched compiler rejects, or change only debug information and object-file metadata. The patch inventory below describes source-level mechanisms; the measured examples then test selected effects. No whole-game A/B rebuild is claimed.

The audited revisions are GCC [`d97824f`](https://github.com/pmret/gcc-papermario/tree/d97824ffc7517675646960442b3f512a473e4404) and binutils [`fb13863`](https://github.com/pmret/binutils-papermario/tree/fb13863bb812ac34417916e0b8a6e16f5ca6badb). The GCC repository's initial 1,217 files match GNU's GCC 2.8.1 release archive. The subsequent patches are modern matching/build changes; their presence does not prove that Nintendo's original compiler contained the same source edits [^19].

### What Counts as a Binary Difference?
A compiler comparison needs to distinguish the executable payload from its container:
* **Instructions and runtime data** - Changes to `.text`, constants, initialized data, addresses or padding can change the ROM and its execution. Equivalent C behavior can still produce different instruction bytes.
* **Debug information and object metadata** - `.debug_*`, STABS records, symbol tables and ELF headers can differ while the extracted executable payload remains identical. These differences reach the ROM only if the build packages them or they affect linking/layout.
* **Build acceptance** - A new target or language feature can make compilation possible. If the unpatched build rejects the input, there is no unpatched binary to compare.

For a controlled comparison, hold the source, headers, compiler host, flags, assembler and linker settings fixed, and change only the patch under investigation. Plain GCC 2.8.1 does not provide this fork's `mips-nintendo-nu64` target, so comparing an unpatched generic MIPS build also requires making target defaults equivalent [^20].

---
### Compiler Patches and Their Output Effects
The compiler changes have different triggers. The expected effects below follow from the implementation; the `addu`/`subu` case also has an explicit maintainer report:

Patch | Without the change | With the change and effect on output
---|---|---
N64 target configuration | The `mips-nintendo-nu64` target is unavailable | Adds VR4300/MIPS III defaults, Nintendo macros and 32-bit integer/long/pointer definitions. Passing `-mips3` through its driver also selects 32-bit general/floating-point registers. Defaults and macros can change instructions, declarations and data; this is not a fixed byte substitution [^20].
`naked` functions | This MIPS backend does not implement the attribute; ordinary functions receive compiler-managed entry/exit code | For a function marked `__attribute__((naked))`, skips prologue/epilogue expansion and disallows the automatic return-instruction path. Stack adjustment, register-save/restore and return instructions that would otherwise be generated can disappear. The author must supply the required assembly. Unmarked functions do not take these new early exits [^21].
Named sections | This backend lacks the added named-section output hook | Emits `.section NAME` for section attributes. The linker can place that function/data elsewhere, changing addresses, relocations and padding. Moving an item does not inherently rewrite its arithmetic, but address-dependent instructions can change [^22].
Negative-constant optimizer fix | The maintainers report host GCC 6 versus GCC 9 producing different MIPS `addu`/`subu` choices around `0x80000000` | Changes one condition in common-subexpression elimination to preserve the intended matching output across those host builds. This can change actual `.text` instruction bytes in affected expressions; it is not merely a debug-record correction [^23].
Japanese-text preprocessing | No added N64-specific encoding/line-ending handling | `N64GCC_KANJI` selects optional SJIS/EUC handling and octal escaping of multibyte text. `N64GCC_CUTCR=ON` normalizes CRLF and removes trailing DOS EOF. These can change accepted input, preprocessing and resulting string/data bytes where the original handling differed; neither option applies a universal instruction rewrite [^24].
Anonymous structs/unions | The parser does not construct these unnamed members in the same way | Enables direct access to their nested fields. A follow-up removes the field-search optimization that breaks this for structures with more than 15 members. This expands accepted source; it does not inherently add a runtime wrapper or an extra pointer indirection [^25].
64-bit/macOS host support | Old assumptions about host-side floating-point storage and legacy build interfaces can prevent correct builds | Separately copies the low/high halves of compiler-internal floating constants and adds host/build compatibility. The intent is to run the old compiler correctly on modern hosts, not change the N64's pointer width. Output equality still needs checking [^26].
Debug output fixes | Some debug labels, abbreviation tables and line records are unsuitable for the paired assembler or debugger | Renames DWARF labels, terminates the abbreviation table, corrects line-table size accounting and makes STABS line references function-relative. These directly change debug records/labels. Their interaction with assembler scheduling is covered below [^27].

The negative-constant fix changes the guard from `-INTVAL(const_arg1) >= 0` to `(-INTVAL(const_arg1) >> 0x1f) >= 0`. The [maintainer's explanation](https://github.com/pmret/gcc-papermario/pull/18) identifies the resulting `addu`/`subu` discrepancy. It does not establish that every function changes, or provide a universal byte delta for the game [^23].

The MIPS instruction-description file, `config/mips/mips.md`, is unchanged from the repository's GCC 2.8.1 baseline. The large-looking `mips.c` diff mostly changes whitespace; ignoring whitespace leaves 44 added lines implementing the `naked` checks. That narrow backend change should not be mistaken for a wholesale replacement of GCC's instruction selector [^19] [^21].

---
### Binutils Patches and Their Output Effects
The paired assembler can change the final machine code even when the compiler emits the same assembly. The binutils fork starts from GNU binutils 2.9.1 and adds the following behavior:

Patch | Without the change | With the change and effect on output
---|---|---
N64 assembly compatibility | Different target defaults, instruction eligibility and directive/register parsing | Adds the Nintendo target, symbolic register parsing, N64-specific handling of MIPS instruction levels and `.set` behavior. Some inputs become accepted; expanded instructions and object flags can differ. This is not evidence of new instructions in the N64 CPU [^28].
Debug-label delay-slot handling | A label blocks the assembler from moving the previous instruction into a branch's delay slot | Labels with the special `._D_` prefix are excluded from that barrier check; real labels still block the swap. When other safety checks allow it, instruction order and delay-slot filling can change. The maintainers added this so debugging could retain Paper Mario's matching opcodes [^29].
Global-pointer relaxation control | Eligible references may be relaxed to use `$gp` | Adds `.set nogpopt` to suppress that optimization and `.set gpopt` to restore it. Affected load/address sequences can differ in their instructions and size, which can also affect delay-slot opportunities and later addresses. Merely installing the patch does not disable relaxation everywhere [^30].
Binary inclusion and common-data alignment | No added `.incbin` directive or `N64ALIGN` policy | `.incbin` inserts the selected file bytes directly. With `N64ALIGN=ON`, common symbols receive at least 8-byte alignment at sizes of 16 bytes or more, and 16-byte alignment at 1,024 bytes or more. This can move BSS symbols and change address references without adding initialized bytes for the BSS itself [^28].
ELF symbols and file layout | Different symbol classification/counting and load-segment file-offset adjustment | Changes local/global symbol bookkeeping and the symbol table's `sh_info`; skips a load-segment offset-adjustment block in the NU64 configuration. ELF bytes/file offsets can differ independently of the extracted ROM payload [^28] [^31].
Debugger metadata | Older debug-section/symbol handling | Adds `.MIPS.abiflags` for the relevant debug mode, changes STABS/ECOFF handling, drops selected local-label symbols and forces final MIPS ELF flags to `0x60001101`. These are object/debug metadata changes, not a request for the CPU to execute a different instruction set [^32].

**The debug-label fix crosses the usual code/debug boundary.** A label emits no CPU instruction, but the unpatched assembler treats it as a scheduling barrier. Removing that barrier can move a real instruction into a delay slot and change `.text`. In contrast, repairing a debug-table terminator can change the ELF without changing any instruction. These effects must be checked separately [^27] [^29].

---
### What This Means for Matching
For the same ordinary C with no added attributes or encoding options, the fork does not automatically insert a new code sequence. Important differences can still come from target defaults, the optimizer's negative-constant fix and the assembler's scheduling/relaxation behavior. Source using new extensions may have no successful unpatched counterpart at all.

A whole-file ELF comparison will also detect debug and metadata changes. To establish a game-code difference, compare linked instructions, runtime data and symbol placement, then the final ROM. The sources above identify concrete mechanisms and reported cases; this article does not claim a measured count of changed Paper Mario functions or bytes.

---
### Measured Binary Comparisons
Small controlled examples demonstrate which differences reach executable bytes. Seven example pairs were built on Apple Silicon macOS 27.0.1 using Apple Clang 21.0.0 to build the historical tools. The GCC and binutils source revisions are pinned above. GNU MIPS binutils `2.47.20260726` linked every pair at `0x80000400` with the same linker script [^33].

**Here, "reverted" means selected patch behavior was removed from the Paper Mario fork.** The N64 target and modern-host fixes stayed in both builds. This avoids comparing different target configurations or an original GCC release that cannot build the same target on this host. The downloadable reversion files identify every source edit.

The comparisons isolate these behaviors:
* **Compiler entry/exit** - Restore ordinary prologue/epilogue and return eligibility, while retaining `naked` attribute recognition so both compilers accept identical C. This is a behavior ablation, not pristine GCC ignoring an unsupported attribute.
* **Assembler scheduling and alignment** - Restore the debug-label scheduling barrier and remove the `N64ALIGN` block. The scheduling test has no common data; the alignment test has no debug label, so each exercises one of those changes.
* **Object/debug metadata** - Reverse binutils commit `2e31907` in a separate assembler build.
* **Negative-constant optimization** - Restore the pre-PR-18 condition in a separate compiler build.

Both compiler variants use `-G0 -mips3 -mgp32 -mfp32 -O2`. Assembly uses `-EB -mips3 -G0`, with `-g2` added for the metadata test. `N64ALIGN=ON` is identical on both sides. Compiler-generated assembly and the linker input object use fixed temporary filenames to avoid filename-only debug/symbol differences. Every pair uses the same final linker and script [^33].

The table compares the extracted, linked `.text` bytes. Lengths include section padding; differing bytes means differing byte positions, not differing instructions:

Example | Reverted / patched .text length | Differing bytes | Measured result
---|---|---|---
Ordinary C arithmetic | 16 / 16 bytes | 0 | Instructions, object file and linked ELF are identical
Naked assembly entry | 16 / 16 bytes | 3 | Function size falls from 16 to 8 bytes; an extra compiler-generated return disappears, but section padding keeps `.text` at 16 bytes
Special debug label before return | 16 / 16 bytes | 6 | `addiu` moves into the return's delay slot
Real label before return | 16 / 16 bytes | 0 | The real-label barrier still prevents that swap
Common-symbol alignment | 32 / 32 bytes | 2 | Both referenced [BSS](#glossary-bss) addresses move by 12 bytes; two address operands change
Object/debug metadata | 16 / 16 bytes | 0 | Objects differ: 887 bytes reverted, 675 patched. Linked instructions remain identical
Two uses of `0x80000000U` | 32 / 32 bytes | 0 | Both emit the same `subu` sequence on this host; this does not reproduce the GCC 6 versus GCC 9 case

Every compile/assemble/link sequence was repeated. Object, linked ELF and extracted `.text` hashes were stable across repeats. Full SHA-256 hashes, source files, exact reversions, symbol listings and disassemblies are in the [experiment download](/public/data/n64-compiler-patches/experiment.zip). The [machine-readable results](/public/data/n64-compiler-patches/results.json) record tool versions and flags. These are synthetic examples; no game code or ROM was used [^33].

#### Naked Functions Can Shrink Without Shrinking the Section
The test C supplies its own return sequence:

```c
void __attribute__((naked)) naked_entry(void) {
    __asm__ volatile (".set noreorder\n\tjr $31\n\tnop\n\t.set reorder");
}
```

With ordinary entry/exit behavior restored, the compiler adds another return after the inline assembly. The measured function bodies contain these big-endian instruction words:

Output | Function words | Function size
---|---|---
Ordinary entry/exit behavior restored | `03e00008 00000000 03e00008 00000000` | 16 bytes
Patched naked behavior | `03e00008 00000000` | 8 bytes

`03e00008` is `jr $ra`; `00000000` is `nop`. The patched section fills the remaining eight bytes with zero padding, so only three byte positions differ in the complete 16-byte `.text` section. The source intentionally supplies assembly for the whole entry; this is not evidence that arbitrary C is safe inside a naked function [^33].

---
#### A Debug Label Changes Real Instruction Order
The assembly example places `._D_LM1` between an arithmetic instruction and a return:

```nasm
    addiu $2,$4,1
._D_LM1:
    jr $31
    nop
```

The first two linked instruction words change as follows:

Output | Words at 0x80000400 and 0x80000404 | Execution order
---|---|---
Debug-label barrier restored | `24820001 03e00008` | `addiu $v0,$a0,1`, then `jr $ra`; the delay slot is a NOP
Patched assembler | `03e00008 24820001` | `jr $ra`, with `addiu $v0,$a0,1` in its delay slot

A MIPS delay-slot instruction executes before control transfers. The patch changes the placement of the arithmetic operation without changing this example's intended result. Replacing the special label with `real_label` makes the two assemblers produce identical bytes. This control confirms that the observed change is specific to the debug-label exception [^29] [^33].

---
#### Alignment Changes Linked Address Operands
The alignment example declares 32-byte and 1,024-byte common symbols, both requesting four-byte alignment. Its linker script deliberately starts BSS allocation after a one-byte reservation so stronger alignment has a visible effect. This is a constructed layout, not a recovered Paper Mario layout.

With `N64ALIGN=ON` on both sides, the symbols and references change as follows:

Symbol or instruction | Alignment block removed | Patched assembler
---|---|---
`large` address | `0x80000424` | `0x80000430`
`small` address | `0x80000824` | `0x80000830`
`addiu $v0,$v0,%lo(small)` | `24420824` | `24420830`
`addiu $v1,$v1,%lo(large)` | `24630424` | `24630430`

Both addresses move by `0x0c`. Only the last byte of each shown instruction changes, giving two differing `.text` bytes. The BSS space is not stored as initialized ROM data; its placement still affects instructions that refer to it [^28] [^33].

---
#### A Different Object File Can Contain Identical Code
The metadata test reverses the GDB compatibility commit while retaining the other assembler changes. A two-instruction function assembled with `-g2` produces these objects:

Property | Metadata commit reverted | Patched assembler
---|---|---
Object size | 887 bytes | 675 bytes
ELF flags | `0x10000001` | `0x60001101`
Relevant section | `.mdebug`, 240 bytes | `.MIPS.abiflags`, 24 bytes
Linked `.text` SHA-256 | `2235882e0b98070fdcac3cc7d809aa3e768019c7fe2d6a6c0cf08009d32dfde7` | Same hash

The linker script discards those metadata sections. The resulting instruction bytes are identical, while the complete linked ELFs still differ. An ELF checksum alone would therefore overstate the change to the executable payload. The header flags do not turn this two-instruction example into different CPU code [^32] [^33].

---
#### The Negative-Constant Test Did Not Reproduce the Reported Difference
The compiler probe uses the same large constant twice:

```c
unsigned int constant_reuse(unsigned int x, unsigned int y) {
    unsigned int a = x + 0x80000000U;
    unsigned int b = y + 0x80000000U;
    return a ^ b;
}
```

Both the patched compiler and the version with only the CSE condition reverted emit identical objects and linked code. Both use `subu` for these operations. This is a negative result for this source and Apple Clang 21 host build, not a refutation of the maintainer's GCC 6/GCC 9 report. Reproducing that reported host-dependent difference requires those host compiler conditions and a triggering input [^23] [^33].

The [reproduction script](/public/data/n64-compiler-patches/reproduce.py) builds the pinned tools, applies the supplied reversions and reruns all examples in an empty directory. It targets the macOS host configuration used here. The archive includes the sources and reversion files it needs; no installed game project or compiler is modified [^33].

---
### Compiler Profiles in decompdecomp
In decompdecomp, `gcc-2.8.1-pm` uses the paired GNU toolchain. A separate profile, `gcc-2.8.1-pm-sn-as`, takes the PM compiler's assembly and processes it with original SN ASN64 2.56 before object conversion. This tests a different assembler path with the same compiler family [^2] [^7].

The hybrid profile can help reproduce scheduling and macro encodings. Its existence does not prove that a studio shipped this exact compiler/assembler pairing. A matching implementation is evidence about reproducible output; identifying an original distribution needs additional historical evidence.

---
## EGCS and the iQue Releases
[EGCS](#glossary-egcs) belongs in an N64 compiler reference because later iQue releases rebuilt N64 software with it. The Ocarina of Time Makefile explicitly selects EGCS for some iQue files and libraries while retaining other compiler paths. An iQue build should therefore be investigated separately from an original cartridge revision [^3].

decompdecomp distinguishes a modern matching build, `gcc-egcs-2.91.66`, from `gcc-egcs-1.1.2-4`, an original Linux EGCS release. The former is paired with EGCS-era binutils; the latter needs its original 32-bit host runtime. Their related version names do not establish identical output for every input [^2] [^14].

The matching profile defaults include `-mno-abicalls -fno-pic` for ordinary executable code. These affect how code addresses functions and data. They belong in the recorded configuration alongside optimization and register-width settings [^7] [^14].

---
## Other SGI Versions and Modern N64 Compilers
An inventory of tools capable of generating N64-compatible instructions is larger than the list of toolchains evidenced in production games. decompdecomp makes the distinction explicit with these additional profiles [^2] [^4]:

Profile | What it adds | Evidence boundary
---|---|---
`ido-5.3-cxx` | IDO 5.3's separate C++ frontend | C++ comparison path; not interchangeable with its C frontend
`ido-4.1` | Earlier SGI compiler; ECOFF conversion | Experimental comparison; retail N64 use not established here
`ido-5.2` | Another earlier SGI release | Experimental comparison; retail N64 use not established here
`ido-6.0` | Intermediate SGI release | Experimental comparison; retail N64 use not established here
`mipspro-7.4.4` | Later SGI compiler | Experimental comparison; retail N64 use unconfirmed
`gcc-4.4.0-n64` | Later MIPS64 ELF compiler configured for the N64 ABI | Experimental later compiler; not a retail-era identification

The integration notes state that real execution of the additional SGI packs remained pending license acceptance in that validation. A picker entry should not be reported as a successfully tested compiler solely because it is registered [^2].

For new homebrew, [libdragon](https://libdragon.dev/) provides an open-source N64 development environment with a modern GCC cross-toolchain. Its [toolchain build script](https://github.com/DragonMinded/libdragon/blob/trunk/tools/build-toolchain.sh) configures a `mips64-elf` target. This serves a different purpose from reproducing the output of a 1990s compiler [^15].

Likewise, the [old-gcc collection](https://github.com/decompals/old-gcc) offers many historical MIPS compiler builds. Availability of GCC 2.8.0, 2.95.x or another version is useful for experiments, but does not by itself identify an N64 game that used it [^16].

---
## RSP Compilers Are a Separate Category
The [RSP](#glossary-rsp) runs microcode alongside the main CPU. A compiler for that processor does not replace IDO or GCC for the game's main C/C++ program.

[RSPL](https://github.com/HailToDodongo/rspl) is a modern high-level language and transpiler that emits RSP MIPS assembly. It exposes vector lanes through swizzle syntax and produces overlays usable by libdragon. It is relevant to new microcode development, rather than evidence of a historical cartridge's main-CPU compiler [^17].

---
## What Actually Changes the Machine Code?
Compiler identity is only one part of the recipe. The following settings explain common mismatches in the documented IDO, KMC, SN64 and EGCS workflows [^2] [^4] [^7] [^8] [^14]:

Setting | Difference to investigate
---|---
Compiler version and vendor patches | Optimization passes, instruction selection and register allocation
Optimization level | Inlining, loop structure, common expressions and scheduling
ISA selection, such as `-mips2` or `-mips3` | Which instructions may be emitted; not the same as pointer size
ABI and register widths | Calling conventions, structure returns, integer and floating-point register use
Small-data settings, such as `-G0` | Whether eligible data uses small-data addressing
PIC and ABI-call settings | Global-pointer setup and function/data access sequences
Floating-point options | Register mode, conversions and possibly data representation, such as short doubles
CPU workaround flags | Instruction sequences or scheduling intended for processor hazards
Assembler version and options | Pseudo-instruction expansion, delay slots and object relocations
Headers, macros and prototypes | Argument conversions, structure offsets and visible expression structure
Debug settings and source layout | Can affect historical output; compare under controlled inputs

The N64's 64-bit CPU does not imply that every game used 64-bit pointers or a 64-bit calling convention. ISA level, register-width options and the [ABI](#glossary-abi) must be recorded independently. Even an assembly alias can hide a difference: the SN integration documents `addu` and `daddu` both appearing as `move` in a display while encoding different instructions [^2] [^7].

There is no supported universal ranking of these compilers by speed or code size in the sources used here. Such a comparison needs the same workload, equivalent semantics, explicit settings and measurements on the target hardware. The best compiler for matching is the one that reproduces the target bytes.

---
## Identifying a Game's Compiler
A useful identification combines historical evidence with reproduction. These checks narrow the search without mistaking a visual resemblance for proof:
* **Start with the exact release** - A cartridge revision, a later regional conversion and an iQue rebuild can have different toolchains.
* **Read an existing matching project's configuration** - Record compiler builds, assemblers and file-specific flags, not just the top-level default.
* **Use instruction patterns as clues** - IDO's frequent `b` versus GCC's frequent `j` can suggest a family. They cannot establish a compiler version.
* **Compare several nontrivial functions** - Include calls, global data, branches and floating point. Tiny arithmetic functions may match multiple compilers.
* **Separate game and library evidence** - Boot code, libultra and an engine may need different profiles.
* **Verify linked bytes and data** - Function matching needs addresses and relocations resolved. A complete ROM rebuild is a separate, stronger integration check.

The [decompdecomp compiler notes](https://github.com/RetroReversing/decompdecomp/blob/main/docs/sn64-compilers.md) provide a useful caution: a 32-function probe found two new SN64 2.8.1 matches among candidates developed under KMC. That justified narrow compiler overrides, rather than identifying the whole game as SN64. Some controls also matched more than one compiler [^2].

For an applied walkthrough, the AI-assisted tutorial covers importing a ROM, checking compiler evidence and testing recovered C:

{% include_cached link-to-other-post.html post="/ai-assisted-n64-decompilation" description="Apply compiler identification and exact-byte matching in an N64 decompilation project." %}

---
## Running Historical Compilers Today
Host support is a practical consideration, separate from code-generation identity. The following summarizes the inspected decompdecomp-rr integration as of 13 November 2026; it is not a claim that every downloadable release of the app includes the same profiles [^2] [^7]:

Toolchain path | Modern execution approach | Limit to keep in mind
---|---|---
IDO 5.3 / 7.1 C | Static recompilation for modern hosts | Preserve the exact compiler release and flags
KMC-compatible, PM and reconstructed EGCS builds | Linux packs; Intel macOS packs use Rosetta on Apple Silicon | A different host build needs output verification
Original SN64 builds | wibo, ASN64 and PsyQ-to-ELF conversion; Windows path uses WSL | Original tools and assembler pairings remain significant
Reconstructed SN64 970404 | Native source build on macOS; pinned Linux build | Compatibility implementation, not an original SN executable
Additional SGI profiles | Bundled IRIX emulation on Linux; WSL or an optional Linux VM on other hosts | Experimental; integration notes distinguish configuration from execution validation
Original EGCS and GCC 4.4 | Linux executables with pinned runtime libraries | VM/container checks do not establish physical-host coverage everywhere

Imported community projects may retain their own build scripts instead of using these built-in profiles. Preserve that configuration when reproducing an existing decompilation. Main-CPU compilers also do not replace the separate [RSP](#glossary-rsp) microcode toolchain [^3].

For wider context, see the [C/C++ compiler toolchain reference](/compilers), the [Nintendo 64 SDK article](/n64-sdk) and the [SN64 SDK article](/sn64-sdk-sn-systems).

---
# References
[^1]: Nintendo, [Introduction to Nintendo 64](https://ultra64.ca/files/documentation/nintendo/Nintendo_64_Intro_to_the_N64.pdf), Chapter 6, PDF pp. 112-115, PARTNER-N64 host/compiler comparison and exeGCC installation.
[^2]: RetroReversing/decompdecomp, [SN64 compiler integration](https://github.com/RetroReversing/decompdecomp/blob/main/docs/sn64-compilers.md). Cross-checked against the local decompdecomp-rr checkout on 13 November 2026; distinguishes original tools, reconstructed profiles and validation limits.
[^3]: zeldaret, [Ocarina of Time Makefile](https://github.com/zeldaret/oot/blob/main/Makefile), compiler selection, iQue-specific EGCS objects, library settings and microcode assembly.
[^4]: RetroReversing/decompdecomp, [IDO matching guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/ido.md), matching observations and experimental SGI comparison profiles.
[^5]: decompals, [ido-static-recomp](https://github.com/decompals/ido-static-recomp), supported 5.3/7.1 toolchain programs and modern-host builds.
[^6]: decompals, [mips-gcc-2.7.2](https://github.com/decompals/mips-gcc-2.7.2), GCC build tailored to KMC output.
[^7]: RetroReversing/decompdecomp, [toolchain registry](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/toolchains.toml) and [N64 platform definition](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/__init__.py). Local checkout inspected on 13 November 2026 for profile identities, flags, dependencies and host paths.
[^8]: RetroReversing/decompdecomp, [KMC GCC matching guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/gcc-kmc.md), jump patterns, register allocation and debug-sensitive assembly.
[^9]: SN Systems, [PC Development System for the Nintendo 64](https://ultra64.ca/files/documentation/sn-systems/SN_Systems_PC_Development_System_for_the_Nintendo_64.pdf), Chapter 13, PDF pp. 244-246, CCN64 driver and processing stages.
[^10]: chasmlol, [Excitebike 64 README, Toolchain](https://github.com/chasmlol/excitebike64#toolchain), SN64 game/boot compiler builds and KMC library tools. Project-reported configuration; this article does not independently rebuild the ROM.
[^11]: mgrz18, [Turok 2 decompilation](https://github.com/mgrz18/turok2-decomp), project-reported SN64 identification and byte-exact rebuild.
[^12]: decompals, [SN64-gcc](https://github.com/decompals/SN64-gcc), reconstruction containing the 2.7.2-970404 tree.
[^13]: Paper Mario Reverse-Engineering Team, [gcc-papermario](https://github.com/pmret/gcc-papermario) and [binutils-papermario](https://github.com/pmret/binutils-papermario), matching compiler and assembler forks.
[^14]: RetroReversing/decompdecomp, [additional GNU compiler guide](https://github.com/RetroReversing/decompdecomp/blob/main/src/decompnet/consoles/n64/guides/gcc-variants.md), PM and EGCS distinctions and host limitations.
[^15]: libdragon, [project documentation](https://libdragon.dev/) and [GCC toolchain build script](https://github.com/DragonMinded/libdragon/blob/trunk/tools/build-toolchain.sh).
[^16]: decompals, [old-gcc](https://github.com/decompals/old-gcc), available historical compiler versions and big-endian target option.

[^17]: HailToDodongo, [RSPL](https://github.com/HailToDodongo/rspl), RSP language, assembly output and libdragon overlay support.

[^18]: Metrowerks, [CodeWarrior's Architectural Advantage](https://www.nxp.jp/docs/en/white-paper/CWX-WP.pdf), finalized 13 September 2000, Table 1, printed p. 11, Nintendo64 MIPS target and Windows hosts.

[^19]: Paper Mario GCC, [initial GCC 2.8.1 import](https://github.com/pmret/gcc-papermario/commit/57261bd), compared with the [GNU GCC 2.8.1 release archive](https://ftp.gnu.org/gnu/gcc/gcc-2.8.1.tar.gz). All 1,217 imported files were byte-identical in this audit. Subsequent changes inspected through revision `d97824ffc7517675646960442b3f512a473e4404`.
[^20]: Paper Mario GCC, [pinned N64 target configuration](https://github.com/pmret/gcc-papermario/blob/d97824ffc7517675646960442b3f512a473e4404/config/mips/nu64.h) and [configure script](https://github.com/pmret/gcc-papermario/blob/d97824ffc7517675646960442b3f512a473e4404/configure), target definitions, driver specifications and NU64 preprocessing mode.
[^21]: Paper Mario GCC, [original N64/naked patch](https://github.com/pmret/gcc-papermario/commit/253149a88a983f38df62086e7e1c7f5b64c58bd6), attribute validation/merging, prologue/epilogue early returns and return-instruction eligibility.
[^22]: Paper Mario GCC, [named-section output hook](https://github.com/pmret/gcc-papermario/commit/f4ab61e56ac00005db7ee7860f800eea74e27b79).
[^23]: Paper Mario GCC, [PR #18](https://github.com/pmret/gcc-papermario/pull/18), host GCC version differences and the negative-constant test in `cse.c`.
[^24]: Paper Mario GCC, [pinned preprocessor source](https://github.com/pmret/gcc-papermario/blob/d97824ffc7517675646960442b3f512a473e4404/cccp.c), `kanjienv_check`, `iskanji1`, `safe_write` and `nu64cutcr`.
[^25]: Paper Mario GCC, [anonymous struct/union parser support](https://github.com/pmret/gcc-papermario/commit/0e70194617ccd9a3f490294c80637f5669529aa6) and [large-structure lookup fix](https://github.com/pmret/gcc-papermario/commit/ec1b55fd4aa9bb53b8d3578ad8c06e233aacd000).
[^26]: Paper Mario GCC, [64-bit host support](https://github.com/pmret/gcc-papermario/commit/5cfb8c61f7fb5d2d0a67174d4e64d703cc128111) and [pinned host configuration/build instructions](https://github.com/pmret/gcc-papermario/blob/d97824ffc7517675646960442b3f512a473e4404/PAPERMARIO.md).
[^27]: Paper Mario GCC, [DWARF label changes](https://github.com/pmret/gcc-papermario/commit/7fdb8b13fb4d208be853c4c3d640da45f958b6fe), [abbreviation terminator](https://github.com/pmret/gcc-papermario/commit/8c569243c3fad470937188aa151a5f5a5e403281), [line-table accounting](https://github.com/pmret/gcc-papermario/commit/9ecb77b91abad6ca31f0c4592b0851f5a44b5537) and [STABS changes](https://github.com/pmret/gcc-papermario/commit/80c3e66c4826f20aeaa0ac3aa435f0d7e027da84).
[^28]: Paper Mario binutils, [initial PM changes](https://github.com/pmret/binutils-papermario/commit/52217868b2cf8ad5ece46edd7c04a063ef9726eb), Nintendo assembly behavior, register parsing, `.incbin`, `N64ALIGN` and ELF file-layout changes. Final source audited through `fb13863bb812ac34417916e0b8a6e16f5ca6badb`.
[^29]: Paper Mario binutils, [PR #6](https://github.com/pmret/binutils-papermario/pull/6), recognizing debug labels during delay-slot arrangement.
[^30]: Paper Mario binutils, [global-pointer relaxation control](https://github.com/pmret/binutils-papermario/commit/a4a26910691de92569a0ff16dd0bf8a839073062), `.set gpopt`, `.set nogpopt` and `nopic_need_relax`.
[^31]: Paper Mario binutils, [symbol-table fix](https://github.com/pmret/binutils-papermario/commit/ff133fd3e5b16a716680e71e14b5dff3c8569606), local symbol count and MIPS symbol classification.
[^32]: Paper Mario binutils, [GDB compatibility changes](https://github.com/pmret/binutils-papermario/commit/2e31907239ac0d50aaa03f1c8c1e90e8840f0f84), ABI flags, debug sections and symbol filtering.

[^33]: RetroReversing, [Paper Mario patch experiment bundle](/public/data/n64-compiler-patches/experiment.zip), [results and SHA-256 hashes](/public/data/n64-compiler-patches/results.json), and [reproduction script](/public/data/n64-compiler-patches/reproduce.py). Seven controlled example pairs compiled/assembled and linked on 13 November 2026; all 14 build paths repeated with stable hashes. Reversions retain the common N64 target and modern-host support. No full-game A/B rebuild or runtime execution is claimed.
