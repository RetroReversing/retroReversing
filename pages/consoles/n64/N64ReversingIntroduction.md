---
layout: post
tags: 
- n64
- introduction
title: N64 Reversing Introduction
image:  /public/N64/N64 Introduction.jpg
category: n64
permalink: /N64Reversing
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Reversing Introduction
    url: #
recommend: n64
editlink: /consoles/n64/N64ReversingIntroduction.md
updatedAt: '2026-10-16'
excerpt: 'A practical guide to N64 reverse engineering, from ROM identification and MIPS debugging to asset extraction and matching decompilation.'
---

# Learning to Reverse Engineer an N64 Game
Reverse engineering a [Nintendo 64](/n64) game means discovering how its executable code and data produce the behaviour you see on screen.
You can investigate a single mechanic, extract an asset format, make a patch, or reconstruct a whole game as buildable source code.
These goals share techniques, but they do not all require a complete decompilation.

This guide assumes you can read basic C, understand hexadecimal numbers and pointers, and use a terminal.
You do not need an original development kit or detailed knowledge of every hardware register to begin.
A useful first result is a small, repeatable discovery: find a changing value in memory, identify the instruction that updates it, and explain that function.

## Choose a Goal and a First Project
Choose a game you know well enough to reproduce a particular event.
Before starting a new project, look for an existing disassembly, decompilation, symbol map, ROM format description, or modding community for the exact game revision.
The [Super Mario 64 decompilation](https://github.com/n64decomp/sm64) provides a concrete example of a project with a documented build and supported versions [^1].
Our [Super Mario 64](/super-mario-64), [Mario Kart 64](/mario-kart-64), and [Turok source analysis](/turok64sourcecode) pages offer further game-specific context.

Select a first milestone that fits your goal:

Goal | First useful result | Evidence of success
--- | --- | ---
Understand a mechanic | Find the function that changes health, a timer, or an item count | A breakpoint catches the event and the inputs explain the result
Extract assets | Decode one texture, model, or sound bank | Dimensions, format, and runtime use agree
Make a patch | Change one verified instruction or data value | The intended behaviour changes after a fresh boot
Document an unknown game | Map one loaded code region and its callers | Runtime addresses agree with the disassembly
Create a matching decompilation | Reassemble the original bytes, then replace one function with C | The configured comparison remains identical
Port a game | Recover behaviour and replace platform dependencies | Tests cover gameplay, rendering, audio, input, and timing on the destination

For a first session, follow the memory investigation below.
For a whole-game project, establish a reproducible build before spending weeks matching C functions.

---
## Glossary
These terms distinguish the files on your computer from the program running inside the console:

Term | Meaning
--- | ---
<a id="glossary-rom"></a>ROM | The cartridge image. A ROM offset is a byte position in that file.
<a id="glossary-ram"></a>RDRAM | The console's main memory, shared by the CPU and graphics hardware.
<a id="glossary-vram"></a>VROM and VRAM | In decompilation tooling, VROM commonly identifies a ROM-side position and VRAM a runtime virtual address. VRAM here does not mean a separate graphics-memory chip.
<a id="glossary-dma"></a>DMA | Direct memory access: hardware transfers bytes between devices and memory without a CPU load/store loop for every byte.
<a id="glossary-abi"></a>ABI | Application binary interface: conventions for arguments, return values, stack layout, and register use.
<a id="glossary-symbol"></a>Symbol | A name associated with a function or data address. Names inferred by researchers are not necessarily original names.
<a id="glossary-overlay"></a>Overlay | Code or data loaded when needed, potentially reusing memory occupied by another overlay.
<a id="glossary-bss"></a>BSS | Storage for zero-initialised or uninitialised globals, normally allocated and cleared at runtime rather than stored as bytes in the ROM.
<a id="glossary-rsp"></a>RSP | Reality Signal Processor, a programmable processor used for graphics and audio tasks.
<a id="glossary-rdp"></a>RDP | Reality Display Processor, the rasteriser that draws pixels from graphics commands.
<a id="glossary-ucode"></a>Microcode | A program executed by the RSP. It is distinct from the main CPU executable.
<a id="glossary-matching"></a>Matching | Reconstructed source produces the same machine code or binary bytes as the chosen original build.

---
# Prepare the ROM and Tools
Keep an untouched input image and do experiments on copies.
Record the game, region, revision, file size, byte order, and a cryptographic hash.
A filename such as `game.z64` does not establish any of those facts by itself.
Use the exact input required by an existing project's documentation; a translation patch, overdump, or different regional release can invalidate its addresses.

## A Small Working Toolkit
Begin with a hex viewer, a debugger, and a disassembler.
Add extraction and matching tools when your investigation requires them.
The tools serve different purposes:

Task | Tool or resource | What to use it for
--- | --- | ---
Inspect the cartridge | [N64 ROM Visualizer](/n64Visualizer) and a hex editor | Header fields, raw bytes, and offsets
Navigate code | [Ghidra N64 guide](/n64-decompiling) or [Radare2 guide](/n64-radare2) | Functions, references, data types, and control flow
Observe execution | [Project64](https://github.com/Project64/project64) or [Mupen64+ RE](/mupen64RE) | Choose a build with the CPU debugger, memory access breakpoints, and tracing features you need
Split a binary | [splat](https://github.com/ethteck/splat) | Describe segments and generate extracted files and linker information [^2]
Produce assembly | [spimdisasm](https://github.com/Decompollaborate/spimdisasm) | MIPS disassembly with code/data and symbol analysis [^3]
Draft C | [m2c](https://github.com/matt-kempster/m2c) | Generate a starting point from assembly and type context [^4]
Compare compilations | [objdiff](https://github.com/encounter/objdiff) | Inspect differences between supported target and rebuilt objects [^5]
Work on a single function | [decomp.me](https://decomp.me) | A shared compiler-and-diff workspace; use the game's compiler preset [^6]

Follow each tool's installation instructions for your host OS and record the versions you use.
An existing game's build instructions take priority over a generic setup guide.
Check that your emulator build actually supports the breakpoint type you need before choosing it for a project.

---
## Check Byte Order Before Reading Addresses
A conventional cartridge image starts with one of these byte sequences.
The familiar extensions describe storage conventions, but inspect the bytes rather than trusting the suffix:

First four bytes | Common extension | Conversion to big-endian order
--- | --- | ---
`80 37 12 40` | `.z64` | Already in the expected order
`37 80 40 12` | `.v64` | Swap the two bytes in each pair
`40 12 37 80` | `.n64` | Reverse the four bytes in each word

Renaming a file does not convert it.
Use one normalised big-endian image throughout your analysis, while retaining the original dump.
The [sm64tools utilities](https://github.com/queueRAM/sm64tools) include ROM byte-order conversion tools and the historical `n64split` workflow [^7].

This Python script reads a conventional image, normalises it in memory, and reports useful header fields without changing the input.
Save it as `inspect_n64.py` and run `python3 inspect_n64.py path/to/game.z64`:

```python
from pathlib import Path
import hashlib
import struct
import sys


def normalise_rom(raw):
    if len(raw) < 0x1000 or len(raw) % 4:
        raise ValueError("Expected a cartridge image of at least 0x1000 bytes, word aligned")
    magic = raw[:4]
    if magic == bytes.fromhex("80371240"):
        return raw, "big-endian (.z64)"
    data = bytearray(raw)
    if magic == bytes.fromhex("37804012"):
        data[0::2], data[1::2] = raw[1::2], raw[0::2]
        return bytes(data), "byte-swapped (.v64)"
    if magic == bytes.fromhex("40123780"):
        for i in range(4):
            data[i::4] = raw[3 - i::4]
        return bytes(data), "word-reversed (.n64)"
    raise ValueError("Unknown header: check for a copier header, truncation, or another format")


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python3 inspect_n64.py ROM")
    raw = Path(sys.argv[1]).read_bytes()
    rom, order = normalise_rom(raw)
    entry = struct.unpack_from(">I", rom, 0x08)[0]
    crc1, crc2 = struct.unpack_from(">II", rom, 0x10)
    print(f"Input order: {order}")
    print(f"Size: {len(rom):#x} bytes")
    print(f"Input SHA-256: {hashlib.sha256(raw).hexdigest()}")
    print(f"Normalised SHA-256: {hashlib.sha256(rom).hexdigest()}")
    print(f"Header entry field: {entry:#010x}")
    print(f"Header CRC1/CRC2: {crc1:08X} {crc2:08X}")
    print(f"Title bytes: {rom[0x20:0x34]!r}")


if __name__ == "__main__":
    main()
```

The entry field is a boot-time clue, not a universal mapping from file offset to RAM.
Trace the boot code for the actual transfer of control, including bootcode-specific adjustments.
The two header checksum words are also not a whole-file identity check; tools such as [ipl3checksum](https://github.com/Decompollaborate/ipl3checksum) implement the bootcode-dependent calculation [^8].

---
## Understand the Initial Layout
The conventional header occupies ROM offsets `0x0000` through `0x003F`.
Boot code occupies the area from `0x0040` to `0x0FFF`; game content follows at `0x1000`.
That does **not** mean all subsequent bytes are executable code, or that the complete game uses one load address [^7].

Inspect startup code, then confirm which ROM ranges it copies or decompresses.
For the boot sequence and its checks, see [N64 Boot Code Analysis](/n64bootcode).

Search for readable text, assertions, source filenames, build strings, and format signatures.
A filename can suggest an original module boundary; it does not prove the compiler, language, or presence of source code.
For historical research leads, [shygoo's filename inventory](http://shygoo.net/n64-uncompiled/n64-filenames.txt) collects filename clues, while the [N64 C repository notes](http://en64.shoutwiki.com/wiki/N64_C_Repo) describe unusual source remnants.
Treat these historical resources as leads to verify against your own image.

---
# Understand the Machine and Its Addresses
The main CPU is a big-endian MIPS processor with 64-bit general-purpose registers, but common game code uses 32-bit pointers and calling conventions.
The console has 4 MiB of main memory, or 8 MiB with the Expansion Pak.
Graphics and audio involve other processors, so a CPU trace alone does not describe every operation [^9].

## Keep ROM Offsets and Runtime Addresses Separate
A debugger usually shows a CPU virtual address.
A hex editor shows an offset in a file.
A decompilation configuration may call these [VRAM and VROM](#glossary-vram).
Write down which address space each number belongs to before converting it.

These examples illustrate the distinction:

Address or value | Meaning | Important restriction
--- | --- | ---
ROM offset `0x00123400` | A position in the cartridge image | Does not identify where those bytes are loaded
Physical address `0x00001000` | A position in the main-memory physical range | Not a file offset
Virtual address `0x80001000` | Cached KSEG0 alias of that physical location | Applies to the direct-mapped CPU segment
Virtual address `0xA0001000` | Uncached KSEG1 alias of the same location | Cache state can affect observations
Graphics address `0x06001234` | Potential segment 6, offset `0x1234` in a segmented display list | Requires the current graphics segment table and microcode interpretation

For the usual 32-bit KSEG0/KSEG1 addresses, `physical = virtual & 0x1FFFFFFF` removes the alias bits.
This gives a physical address, **not a ROM offset**.
Do not apply it blindly to addresses translated by the TLB (translation lookaside buffer), or to graphics segmented pointers [^10].

For an uncompressed block copied without relocation, use `rom_offset = rom_start + (virtual_address - ram_start)` only when the address falls inside that loaded block.
For example, if ROM `0x00120000..0x00127FFF` is copied to RAM `0x80200000..0x80207FFF`, RAM `0x80201234` corresponds to ROM `0x00121234`.
These are illustrative addresses, not offsets for a particular game.

Compression breaks that byte-for-byte relationship.
An [overlay](#glossary-overlay) can also replace the code at a runtime address, so record which overlay is loaded when the observation occurs.

---
## Learn the MIPS Patterns You Will Actually Read
Start with loads, stores, comparisons, branches, calls, and address construction.
Use our [MIPS tutorials](/N64MipsAssembly) alongside the [NEC VR4300 manual](https://hack64.net/docs/VR43XX.pdf).
The [hardware architecture guide](/n64-hardware-architecture) explains how the CPU fits into the console.

Under the common o32 [ABI](#glossary-abi), integer arguments commonly begin in `a0` through `a3`, an integer result is returned in `v0`, `sp` tracks the stack, and `ra` holds the return address.
Saved registers must survive a call; temporary registers need not.
Floating-point arguments, extra arguments, and 64-bit values need closer attention to the actual convention.
Do not choose an n64 ABI simply because the console is named N64 [^11].

The instruction after an ordinary branch or jump is its delay slot and executes before control transfers.
Branch-likely instructions are an exception: their slot is annulled when the branch is not taken.
Keep this in mind when interpreting calls, returns, or patches [^12].

This illustrative sequence passes a value of 3 to a function, because the delay-slot assignment happens before the callee executes:

```nasm
jal   update_counter
addiu $a0, $zero, 3
```

Other patterns worth recognising include:
* **Address construction** - `lui` followed by `addiu` or `ori` may construct an address. Signed low halves make simple concatenation incorrect for some `addiu` sequences.
* **Signedness** - `lb` and `lh` sign-extend; `lbu` and `lhu` zero-extend. Comparisons and shifts can reveal whether a value is signed.
* **Structures** - Repeated offsets from the same base register suggest fields. Establish field widths and pointer targets before assigning a C structure.
* **Switch statements** - An indexed indirect jump may use a table of code addresses in read-only data.
* **Floating point** - COP1 operations work with floating-point registers. A bit pattern interpreted as an integer may actually be a float.
* **Compiler artefacts** - Pseudoinstructions, scheduled instructions, inlining, and register reuse can obscure the original source structure.

A plausible C listing is a hypothesis.
Correct function prototypes and data types often improve it more than renaming every temporary variable.

---
## Account for Threads and Caches
Games using the SDK can split work across threads and message queues.
A function waiting for a message may be blocked until an interrupt or another thread signals completion.
When a trace appears to jump away from the logic you were following, inspect the thread switch and queue activity before assuming a bad disassembly [^10].

CPU caches also matter when sharing memory with DMA and the RSP.
A dirty cache line can hold newer data than main memory, while a stale instruction cache can retain old code after a patch.
Trace the game's cache maintenance and use the emulator's supported patching/debugging mechanism.
A RAM write that appears correct in a memory window is not sufficient proof that the CPU or graphics hardware consumed it [^10].

---
# Your First Investigation From Gameplay to Code
Pick an event with a simple state change, such as spending one item.
Create a repeatable setup using a save file or save state and record the emulator version, settings, game revision, and exact steps.
Disable unrelated cheats and patches.

## Find the Value in Memory
Search the emulated [RDRAM](#glossary-ram) for the current value, trigger one change, then filter the results for the new value.
Repeat with different values and with periods where the value stays unchanged.
If the representation is unknown, use changed/unchanged searches rather than assuming a 32-bit integer.

A displayed value can be scaled, encoded, clamped, or copied into a separate interface variable.
Try byte, halfword, word, and floating-point interpretations when the evidence calls for them.
For the full search technique, see [Memory Hacking](/n64-rom-memory-hacking).

Prefer a debugger's emulated-memory view over raw host-process memory.
An emulator may store guest bytes in a different host order or maintain several copies.
Confirm a candidate by observing repeated events; a temporary edit can help distinguish the gameplay value from a display copy.

---
## Break on the Write and Follow Its Inputs
Set a write watchpoint on the candidate address and reproduce the event.
Record the writing instruction, program counter, relevant registers, previous value, new value, and loaded overlay.
A breakpoint on execution answers "when does this function run?"; a data watchpoint answers "who accesses this value?".

Follow the surrounding function and its callers.
If the writer is a generic copy routine, inspect its source pointer and trace the producer of those bytes.
If the breakpoint fires every frame, look for the specific transition or use a condition to narrow the hits.

Check whether the debugger stops before or after the memory access.
If no write is caught, verify the address space, width, and debugger support; the update might come from [DMA](#glossary-dma) rather than a CPU store.
A dynamic recompiler may also need different debugging settings from the interpreter.

---
## Connect the Runtime Function to the ROM
Capture a short sequence of instructions around the program counter and locate the corresponding loaded code region.
For a direct ROM-to-RAM copy, apply the verified mapping described earlier.
For compressed code, trace the loader or decompressor and keep both the compressed ROM range and the resulting RAM image.

Import the region into your disassembler at its actual runtime address with big-endian MIPS settings appropriate to the CPU.
Use an N64 loader when available, and inspect the memory blocks it creates.
Keep separate overlay mappings when two different functions occupy the same address at different times.

Our [Ghidra walkthrough](/n64-decompiling) covers the analysis environment.
When using IDA, a message that boot code was not loaded means you should inspect the loader's regions; it does not by itself indicate a damaged cartridge image.
Load the boot region separately if that is what you need to investigate.

---
## Write a Finding Someone Else Can Reproduce
Give the function a provisional descriptive name and document what remains uncertain.
For example, "subtracts an item count after a successful purchase" is stronger evidence than a name such as `updateInventory` with no explanation.

Keep a compact record containing:
* **Identity** - Game revision and normalised ROM hash.
* **Location** - ROM range, runtime address, overlay identity, and mapping evidence.
* **Trigger** - Save/setup details and the action that reaches the function.
* **Observations** - Instruction bytes, arguments, field offsets, and changes in memory.
* **Interpretation** - Proposed types and names, with confirmed facts separated from guesses.
* **Validation** - A second scenario that exercises the same logic, including an edge case.

Repeat after a fresh boot and in another level or state where appropriate.
This helps detect temporary allocations, misleading display values, and addresses that only happened to work in one save state.

---
# Map the ROM Into Code and Data
A cartridge image does not provide a universal filesystem or a complete list of functions.
Build the map incrementally from entry code, runtime transfers, data references, and format evidence.
Record each range's ROM start and end, runtime destination, compression, purpose, and confidence.

## Split With Evidence
For a new project, [splat's Quickstart](https://github.com/ethteck/splat/wiki/Quickstart) explains how to generate an initial configuration and split a ROM.
Its generated boundaries and compiler assumptions need review; they are not a recovered source tree [^2].

In an activated Python virtual environment, the initial commands are:

```bash
python3 -m pip install 'splat64[mips]'
python3 -m splat create_config baserom.z64
```

Inspect the generated YAML, then run `python3 -m splat split` with that configuration's actual filename.
Pin the working tool versions once the setup is reproducible.
If the game already has a project, use its pinned configuration instead.

Keep uncertain ranges as raw binary until there is evidence to classify them.
Do not copy another game's assembly endpoint or RAM base.
An assembler error can indicate data, a wrong instruction set, incorrect byte order, or syntax incompatibility; it does not prove that you found the end of the executable.
Conversely, data can decode into perfectly valid instructions.

The earlier [n64split configurations](https://github.com/queueRAM/sm64tools/tree/master/configs) remain useful when working with projects built around that tool.
They are game- and revision-specific, and their schema differs from splat's [^7].

---
## Identify Sections, Libraries, and File Boundaries
Separate executable instructions (`.text`), read-only constants and jump tables (`.rodata`), writable initialised globals (`.data`), and [BSS](#glossary-bss).
Code can appear in multiple regions or overlays.
An unknown range might also contain an asset archive or RSP program.

Function prologues, return sequences, call targets, alignment padding, and references help suggest boundaries.
None is sufficient alone: leaf functions may have no stack frame, tail calls can end with a jump, and padding does not reveal an original filename.
Use [spimdisasm](https://github.com/Decompollaborate/spimdisasm) to assist with section and symbol analysis, then check the results against runtime behaviour [^3].

Recognising SDK routines can expose the game's structure.
Thread creation, message queues, controller reads, DMA requests, and graphics-task submission are useful landmarks.
The [official SDK overview](/n64-sdk) explains the library context; [SN64](/sn64-sdk-sn-systems) covers another development environment.
The historical [n64sym tool](https://github.com/shygoo/n64sym) can help identify library code when you have a suitable library input.

Treat library signatures as candidates.
Compiler settings, SDK versions, static linking, and local modifications can alter a routine.
Confirm the caller's arguments and the candidate's side effects before applying a name broadly.

---
## Follow Loaders, Compression, and Overlays
Watch [DMA](#glossary-dma) requests and record the cartridge source, memory destination, length, and triggering action.
A load table can reveal more structure than scanning the entire ROM for instructions.
The SDK's [osPiStartDma documentation](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/n64man/os/osPiStartDma.htm) explains a common cartridge-transfer interface [^13].

A transfer may load compressed bytes into a temporary buffer, followed by decompression elsewhere.
Trace the output buffer and its consumers.
Recognisable formats such as MIO0 or Yay0 are useful clues, but not every game uses them and not every compressed stream has a convenient signature.
Record whether a tool's offsets refer to the original ROM, an extracted file, or decompressed output.

For an [overlay](#glossary-overlay), track its load interval, destination, entry points, BSS clearing, and any relocation records.
Importing every overlay at one address without distinguishing their lifetimes creates false references.
Heap allocations and generated code also require runtime context.

---
# Follow Graphics, Audio, and Other Data
An asset is best understood through the code that loads and consumes it.
Finding bytes that resemble a texture is a starting point; dimensions, format, palette, and the commands that use it provide stronger evidence.

## Graphics and Microcode
The CPU builds graphics work, the [RSP](#glossary-rsp) runs [microcode](#glossary-ucode), and the [RDP](#glossary-rdp) rasterises the resulting commands.
Identify the microcode family before interpreting a display list; command encodings and behaviour can differ.
RSP code needs an RSP-aware decoder, rather than the main CPU's instruction interpretation [^14].

Graphics lists may use segmented addresses.
For the documented SDK scheme, the segment table supplies a physical base and the pointer supplies an offset.
The [gSPSegment documentation](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/n64man/gsp/gSPSegment.htm) describes this translation [^15].
A value that looks like an invalid CPU pointer may therefore be valid graphics data.

For textures, establish the pixel format, bit depth, dimensions, palette where required, and layout before trusting a preview.
For models, follow vertex buffers, transforms, display lists, and animation data together.
See [3D modelling tools](/n64-3d-modelling), [RSP internals](/n64rsp), and [RDP internals](/n64rdp) for deeper coverage.

---
## Audio, Scripts, and Saves
For audio, distinguish sequences, instruments, sample banks, and the code that schedules playback.
A sequence is not necessarily a standard MIDI file, and a compressed sample needs the relevant decoding parameters.
Our [N64 Sound and Music](/n64sound) article provides the audio-specific starting point.

Game-specific scripts can look like data until you identify their interpreter.
Trace the loop that fetches opcodes and dispatches handlers, then document instruction widths, operands, and control flow.
A script disassembler may be more useful than further CPU decompilation for that part of the game.

For saves, first identify whether the game uses EEPROM, SRAM, FlashRAM, or a Controller Pak.
Compare controlled changes to a copied save, account for checksums and redundant slots, and trace the save/load routines.
Do not infer an on-cartridge structure solely from an emulator's save-file wrapper.

---
# Rebuild and Decompile the Game
Disassembly translates instruction bytes into assembly.
Decompilation reconstructs higher-level logic.
A [matching decompilation](#glossary-matching) adds the stricter requirement of reproducing the target bytes with a particular compiler and build configuration.
Even a perfect match does not recover the original comments, variable names, or unique original C expression.

## Establish a Baseline Build
Before replacing functions with C, aim to rebuild the input from assembly and untouched binary ranges.
A splitter's output is not automatically a complete build system.
You still need the appropriate assembler, linker, section ordering, addresses, alignment, and any compression or checksum steps.
Use an existing matching project's build as a worked example, rather than assuming its Makefile applies unchanged to another game [^1].

Preserve unknown assets and padding.
Compare the rebuilt image against the normalised input, locating the first differing range instead of relying on whether the emulator boots.
If your current target is a decompressed executable or one overlay, state that scope explicitly; matching that component does not establish a whole-ROM match.

A successful baseline distinguishes extraction or linking errors from changes introduced while decompiling.
Keep build commands, compiler versions, flags, expected input hashes, and output checks documented.

---
## Replace One Function at a Time
Choose a small function with understood inputs and few dependencies.
Use [m2c](https://github.com/matt-kempster/m2c) or your analysis suite to draft C, supplying known structures and function declarations.
The result still needs human review and compilation [^4].

Work through a repeatable loop:
* **Understand** - Describe the function's inputs, branches, memory accesses, and outputs.
* **Compile** - Use the project's target compiler, flags, headers, and ABI.
* **Compare** - Inspect the generated assembly with the project's diff tool.
* **Refine** - Investigate types, signedness, expression order, register allocation, and surrounding declarations.
* **Integrate** - Replace the assembly implementation in the build without linking a duplicate copy.
* **Verify** - Check the full configured binary comparison and exercise the behaviour.

[decomp.me](https://decomp.me) is useful for isolated functions and sharing compiler experiments.
[objdiff](https://github.com/encounter/objdiff) supports local object comparison in configured projects [^5][^6].
A high similarity score is useful feedback, but a function-level score does not verify final placement or the rest of the ROM.

---
## Diagnose Mismatches Before Rearranging C
A mismatch can originate outside the function you are editing.
Check the target compiler family and version, optimisation flags, floating-point settings, ABI, and included declarations.
Do not assume every game used IDO, or that modern GCC can reproduce an older compiler's output.
The [SDK setup guide](/n64-sdk-setup) supplies historical environment context.

For a symptom-based checklist, see [Troubleshooting Matching Decompilation](/decompilers#troubleshooting-matching-decompilation).
It covers instruction differences, surrounding source context, data layout, candidate file boundaries and repairing machine-generated C drafts.

If a function matches in isolation but the ROM differs, inspect section order, linker alignment, symbol addresses, relocation handling, padding, compression, and header checksums.
For compressed assets, equivalent decompressed content can still produce different compressed bytes.

Readable reconstruction and exact matching are different milestones.
For a port, platform services, timing, endianness, pointer sizes, and undefined C behaviour also need attention; matching the original executable does not make the source portable automatically.

---
# Validate Patches and Avoid Common Traps
Change one verified instruction or data field at a time and keep the original bytes in your notes.
For instruction patches, preserve delay-slot behaviour, register obligations, and control-flow assumptions.
For compressed content, patch the decoded data and rebuild its containing format rather than editing an apparent corresponding offset in the compressed stream.

Use the build's checksum step when changes affect the boot-checked region.
[ipl3checksum](https://github.com/Decompollaborate/ipl3checksum) documents the checksum algorithms and supported bootcode variants [^8].
A fresh boot is essential: a save state may retain old code, assets, or emulator translation state.
For hardware-sensitive findings, compare with another emulator configuration or real hardware when available.

These symptoms suggest specific checks:

Symptom | What to investigate
--- | ---
Most instructions look nonsensical | Byte order, CPU selection, base address, compression, and whether the range is code
A branch targets nonsense | Incorrect load mapping, mixed overlays, or a false function boundary
A pointer is outside main memory | Physical versus virtual versus segmented addresses, relocation, or a non-pointer value
A watchpoint never fires | Wrong address or width, emulator debugging mode, a replaced allocation, or DMA
An edit changes only the display | A cached interface value rather than authoritative game state
A RAM function cannot be found in the ROM | Decompression, relocation, overlays, or runtime-generated content
An extracted texture looks scrambled | Pixel format, dimensions, palette, layout, or decompression
A ROM boots only in one emulator | Boot checks, cache handling, timing, unsupported behaviour, or emulator settings
A matching function breaks the final build | Duplicate definitions, incorrect section placement, alignment, or linker configuration
A header checksum matches but the project rejects the ROM | Whole-file hash, revision, byte order, padding, or a modified dump

---
# Continue Learning and Share Useful Research
After tracing one gameplay value, choose a second milestone: decode one asset, document a loader, recover a small structure, or match one function.
Build a small body of verified results before expanding the scope to an entire game.

The site's [N64 hub](/n64) connects the hardware, development-tool, and game-specific articles.
The [Mupen64+ source walkthrough](/mupen64sourcecode) is useful when you need to understand an emulator's implementation rather than the guest game.
The [Oman archive](/oman-archive) and [iQue SDK](/ique-sdk) articles provide development-history context; follow the source-use policy of any project you contribute to.

Two supplementary videos demonstrate [Project64 emulator scripting](https://www.youtube.com/watch?v=PC0Tlz6oiN0) and [SDK tools for texture, sound, and model inspection](https://www.youtube.com/watch?v=yUX1Vga6amg).
These are supplementary demonstrations; tool interfaces and supported formats should be checked against the version you use.

When asking a community for help, include the game revision and hash, tool versions, a small disassembly excerpt, the relevant address mapping, expected behaviour, and what you have already tested.
Share scripts, symbol maps, documented structures, and reproducible findings in the form the project accepts.
For patches, identify the exact base image and distribute the patch with application instructions rather than a complete cartridge image.

---
# References
[^1]: [n64decomp - Super Mario 64](https://github.com/n64decomp/sm64), project purpose, supported versions, and build instructions.
[^2]: [splat](https://github.com/ethteck/splat) and [splat Quickstart](https://github.com/ethteck/splat/wiki/Quickstart), installation, configuration generation, and the limits of automatic splitting.
[^3]: [spimdisasm](https://github.com/Decompollaborate/spimdisasm), supported sections, symbol analysis, and MIPS/RSP disassembly.
[^4]: [m2c](https://github.com/matt-kempster/m2c), compiler targets, assembly input, type context, and decompilation workflow.
[^5]: [objdiff](https://github.com/encounter/objdiff), local object comparison for decompilation projects.
[^6]: [decomp.me source and documentation](https://github.com/decompme/decomp.me), collaborative decompilation workspace.
[^7]: [queueRAM - sm64tools](https://github.com/queueRAM/sm64tools), ROM utilities, n64split, and example configurations.
[^8]: [ipl3checksum](https://github.com/Decompollaborate/ipl3checksum), bootcode-dependent N64 checksum calculation.
[^9]: [Nintendo - Introduction to the Nintendo 64](https://ultra64.ca/files/documentation/nintendo/Nintendo_64_Intro_to_the_N64.pdf), archived hardware and memory introduction.
[^10]: [Nintendo 64 Programming Manual](https://tech-pubs.net/sgi_developer/books/ultra64-guide/index.html), CPU address spaces and memory management.
[^11]: [SGI compiler documentation - Calling conventions](https://techpubs.jurassic.nl/library/manuals/2000/007-2816-005/sgi_html/ch02.html), register and argument conventions.
[^12]: [NEC VR4300 User's Manual](https://hack64.net/docs/VR43XX.pdf), instruction behaviour and branch delay slots.
[^13]: [Nintendo SDK - osPiStartDma](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/n64man/os/osPiStartDma.htm), cartridge DMA interface.
[^14]: [SGI - Nintendo 64 RSP Programmer's Guide](https://ultra64.ca/files/documentation/silicon-graphics/SGI_Nintendo_64_RSP_Programmers_Guide.pdf), RSP architecture and programming.
[^15]: [Nintendo SDK - gSPSegment](https://ultra64.ca/files/documentation/online-manuals/man-v5-1/n64man/gsp/gSPSegment.htm), segmented graphics address translation.
