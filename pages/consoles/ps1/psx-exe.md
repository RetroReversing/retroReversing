---
layout: post
tags: 
- ps1
- sdk
- fileformats
title: PSX-EXE Format
category: ps1
image: /public/psx-exe.png
permalink: /ps1-exe
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PlayStation 1
    url: /ps1
  - name: PS1 Executable Binary Format
    url: #
recommend: 
- ps1
- fileformats
editlink: /consoles/ps1/psx-exe.md
updatedAt: '2026-04-11'
---

The PS-X EXE format is the PlayStation 1's main "load this into RAM and jump to it" executable format.
It is used for both retail discs and homebrew.

Despite the name, it is not really similar to ELF.
A PS-X EXE is a fixed-size header followed by a flat binary blob.
The blob is copied to a specific RAM address and executed.

In practice you normally build an ELF first (because toolchains and linkers understand ELF well).
Then you convert ELF to PS-X EXE for running on console or in emulators.
For reverse engineering you often do the inverse: treat a PS-X EXE as a raw binary and re-wrap it as an ELF (or import it as "raw" with a base address).

Some quick facts about the format:
* **Header size** - The header is `0x800` bytes (2048 bytes), i.e. exactly one CD-ROM sector [^2] [^5] [^6]
* **Payload location** - The actual program data begins at file offset `0x800` [^2] [^5] [^6]
* **CD alignment** - The total file size is usually padded up to a multiple of 2048 bytes [^1] [^5] [^6]

---
## Glossary of Key Terms
If you are new to PS1 executable terminology, this quick glossary should help:

* <a id="glossary-elf"></a>**ELF** - A standard executable format used by many Unix-like toolchains.
* <a id="glossary-pc"></a>**PC** - Program Counter, the address the CPU will jump to when starting the program.
* <a id="glossary-gp"></a>**GP** - The MIPS `$gp` global pointer register, used for "small data" accesses.
* <a id="glossary-sp"></a>**SP** - The MIPS `$sp` stack pointer register.
* <a id="glossary-bss"></a>**BSS** - Uninitialized globals that should start as zero.
* <a id="glossary-objcopy"></a>**objcopy** - GNU binutils tool used to transform object/executable formats (for example, ELF to raw binary).

---
# Useful Sources
These links are worth keeping open while reading the header tables below:
* **PSXSDK elf2exe** - A minimal ELF to PS-X EXE converter (`tools/elf2exe.c`) that shows which header fields are required in practice [^3]
* **PS-X EXE header notes** - A readable breakdown of the common header fields and offsets [^2]
* **Net Yaroze User Guide** - An official document that describes PS-X EXE layout and the key fields expected by the loader (entrypoint, GP, and the "data without initial values" region) [^5]
* **BIOS Exec behaviour** - Useful when you want to know which fields the BIOS `Exec` function actually reads (PC, GP, stack, memfill) [^4]

---
# High-Level File Layout
A PS-X EXE is a 2048-byte header followed by the payload.
This is the layout you will see in most files:

```text
0x0000..0x07FF  Header (0x800 bytes)
0x0800..        Payload (flat binary to copy into RAM)
...             Optional padding up to a 2048-byte boundary
```

---
# Header Fields
The table below lists the fields you will most commonly care about when reversing or generating PS-X EXEs.
All multi-byte integers are little-endian.

Offset | Size | Name | Description
--- | --- | --- | ---
0x00 | 8 | Magic | ASCII `PS-X EXE`
0x08 | 8 | Reserved | Usually zero
0x10 | 4 | Initial PC | Initial <a href="#glossary-pc">PC</a> value (entrypoint)
0x14 | 4 | Initial GP | Initial <a href="#glossary-gp">GP</a> value
0x18 | 4 | Destination address | RAM address where the payload (from `0x800`) will be copied [^6]
0x1C | 4 | Payload size | Bytes to load from the file body (excluding the `0x800` byte header). The kernel expects this to be a multiple of `0x800`. [^6]
0x20 | 4 | Data address | Optional "data section" address. Usually zero in most executables. [^6] [^7]
0x24 | 4 | Data size | Optional "data section" size in bytes. Usually zero in most executables. [^6] [^7]
0x28 | 4 | BSS start | Uninitialized data (<a href="#glossary-bss">BSS</a>) start address. Also used as the BIOS "memfill" start. [^6] [^4]
0x2C | 4 | BSS size | Uninitialized data size in bytes. Also used as the BIOS "memfill" size. [^6] [^4]
0x30 | 4 | Stack base | If non-zero, BIOS `Exec` sets <a href="#glossary-sp">SP</a> and FP to `stack_base + stack_offset`. [^6] [^4]
0x34 | 4 | Stack offset | Added to stack base by BIOS `Exec`. [^6] [^4]
0x38 | 0x14 | Exec reserved | Must be zero in the file. Used by BIOS `Exec` to save caller registers when chaining executables. [^6] [^4]
0x4C | 0x7B4 | Marker and reserved | A region string often set to something like "Sony Computer Entertainment Inc. for North America area" followed by zero padding. The BIOS does not verify it. [^6]
0x800 | ... | Payload start | Program data begins here (copied to the load address)

When using the BIOS `LoadTest/Load` functions, the BIOS copies header bytes `0x10..0x4B` into a separate `headerbuf` structure.
In PsyQ documentation this `headerbuf` layout is the `EXEC` structure (PC, GP, text/data/BSS addresses and sizes, and stack fields). [^7]
The BIOS `Exec` function then reads the PC/GP/stack/memfill values from that buffer and starts the program [^4]
This means the ASCII marker at `0x4C` is not part of the data structure that `Exec` reads [^4]

---
# BIOS Load and Exec Semantics
The key thing to know is that the BIOS/kernel does not execute the file "in place".
It reads the header, copies the payload to RAM, optionally clears a memory range, and then jumps to the entrypoint [^6] [^4]

The standard sequence is:
* Call `LoadTest` to parse the PS-X EXE header into an in-memory `headerbuf` (`0x10..0x4B` from the file header) [^4]
* Call `Load` to additionally copy the payload to the destination address (and flush caches) [^4]
* Call `Exec(headerbuf, param1, param2)` to clear the BSS/memfill range, set up registers, and jump to the entrypoint [^4]

Some details that affect real programs and reverse engineering:
* **Memfill is word-based and slow** - The BIOS memfill runs word-by-word, so the BSS address and size must be multiples of 4. It also runs in slow ROM, so large memfills are expensive. [^6]
* **The Exec reserved region is live state** - `Exec` saves the caller's `RA`, `SP`, `R30`, `R28`, `R16` into the reserved region (`0x38..0x4B`) in the `headerbuf` structure, not onto the stack. [^6] [^4]
* **Stack fields are context dependent** - If the stack base is zero, `Exec` leaves the caller's stack unchanged. Boot executables often end up using the `SYSTEM.CNF` stack instead of the EXE header values. [^6] [^4]
* **Two parameters are passed to the entrypoint** - `param1` and `param2` are passed in `R4` and `R5`. Many boot flows end up passing `R4=1` and `R5=0`. [^6] [^4]
* **Return-to-caller is possible (sometimes)** - A non-boot executable can return to the caller by jumping to the incoming `RA` (and by preserving stack/register conventions). If the boot executable returns to the BIOS, the BIOS typically locks up. [^6]

---
# Boot Executable and SYSTEM.CNF Notes
On CD-ROM, the first executable is normally selected via `SYSTEM.CNF` [^6]

A typical `SYSTEM.CNF` includes:
* **BOOT line** - Path to the boot executable, plus an optional argument string
* **STACK** - The stack top used by the boot process
* **TCB/EVENT** - Kernel configuration for threads and events

The kernel can copy the optional `BOOT` argument string to RAM at `0x00000180`, where the executable can read it if it wants to implement a command line. [^6]

---
# Deep Dive Into PSXSDK elf2exe
The PSXSDK `elf2exe.c` tool is intentionally small.
It does not parse ELF program headers or sections.
Instead, it shells out to <a href="#glossary-objcopy">objcopy</a> to turn the ELF into a flat binary.
Then it writes a PS-X EXE header with a few hard-coded defaults, and appends the binary blob.

This is the rough flow of the tool:
* **Write header skeleton** - Write the magic at `0x00`, then `fseek` around to fill a handful of fields [^3]
* **Hard-code entrypoint and destination address** - It writes `0x80010000` into both Initial PC (`0x10`) and Destination address (`0x18`) [^3]
* **Optionally set GP** - It writes the Initial GP (`0x14`) from `-gp=<hex>`, defaulting to `0` [^3]
* **Hard-code stack** - It writes `0x801FFFF0` at `0x30` (and leaves the stack offset at `0`) [^3]
* **Write an ASCII marker** - It writes a region string at `0x4C` selected by `-mark_jpn`, `-mark_eur`, or `-mark=<mark>` [^3]
* **Run objcopy** - It calls `objcopy -O binary input.elf input.elf.bin` [^3]
* **Append payload at 0x800** - It copies `input.elf.bin` into the output file starting at `0x800` [^3]
* **Pad to 2048 bytes** - It extends the output file to a multiple of 2048 bytes [^3]
* **Backpatch the payload size** - It writes `(final_file_size - 0x800)` into the Payload size field at `0x1C` [^3]

---
## Header Values Written by elf2exe
If you are sanity-checking an output file in a hex editor, these are the key offsets and values written by `elf2exe.c` [^3]

Offset | Field | Value written by PSXSDK elf2exe | Notes
--- | --- | --- | ---
0x00 | Magic | `PS-X EXE` | Always written
0x10 | Initial PC | `0x80010000` | Hard-coded
0x14 | Initial GP | `-gp=<hex>` (default `0x00000000`) | Supported but not listed in the `usage:` help text
0x18 | Destination address | `0x80010000` | Hard-coded
0x1C | Payload size | `(aligned_output_size - 0x800)` | Backpatched after padding
0x30 | Stack base | `0x801FFFF0` | Hard-coded
0x34 | Stack offset | `0x00000000` | Left untouched (the file is sparse/zero-filled here)
0x4C | Marker | Region string | `-mark_jpn`, `-mark_eur`, or `-mark=<mark>` (default: USA string)

---
## Toolchain Assumptions
The converter relies on `objcopy` to flatten the ELF into a raw blob.
In `elf2exe.c` the command is built using the `OBJCOPY_PATH` macro, which must be defined when compiling the tool (or patched into the source) [^3]

It also writes the intermediate file by simply appending `.bin` to the input filename.
So an input named `main.elf` will produce an intermediate `main.elf.bin` before it is copied into the PS-X EXE and deleted again [^3]

Two details matter a lot if you try to use this tool as-is:
* **It assumes a fixed link address** - Because it forces the destination address and PC to `0x80010000`, your ELF must be linked to run from `0x80010000`.
  If your code is linked for a different address, the BIOS will copy it to the wrong place and jump to the wrong place.
* **It only fills a subset of the header** - Fields like Memfill start/size are left as zero, so the BIOS won't clear a BSS region for you.

There is also a small implementation gotcha in the file copy loop.
It uses `while(!feof(f)) { fgetc(); fputc(); }`, which typically writes one extra byte (`0xFF`) after the real payload.
If you depend on exact payload size, you should fix the loop (or be aware that the PS-X EXE may contain a single trailing junk byte before padding).

---
# Reversing Notes
If you are importing a PS-X EXE into a disassembler, the easiest approach is usually to treat it as raw binary plus metadata from the header:
* **Base address** - Use Destination address (`0x18`) as the base address for the payload
* **Entrypoint** - Use Initial PC (`0x10`) as the entrypoint
* **Skip header** - Skip the first `0x800` bytes when importing, because that is the header

For example, you can extract just the payload like this:

```bash
dd if=GAME.EXE of=payload.bin bs=2048 skip=1
```

Then import `payload.bin` as a raw MIPS little-endian binary at the destination address you read from the header.

---
# Related Formats
If you are dealing with PS1 discs or dev builds, you may also run into formats that are not plain PS-X EXE:
* **PsyQ .CPE** - A chunked "debug executable" format used by PsyQ toolchains. It can contain many small load chunks and explicit register settings for the entrypoint. [^6]
* **Custom relocatable executables** - Rarely, a disc can contain executables with magic like `PS-X EXR` that are not supported by the standard PSX kernel loader. [^6]

---
# References
[^1]: [linux-mips PS1](https://www.linux-mips.org/wiki/PS1)
[^2]: [Zanneth PS-X EXE file format](https://zanneth.com/2020/04/06/psx-exe-file-format/)
[^3]: [PSXSDK elf2exe.c](https://github.com/cetygamer/psxsdk/blob/master/tools/elf2exe.c)
[^4]: [psx-spx BIOS kernel `Exec`](https://psx-spx.consoledev.net/kernelbios/#exec)
[^5]: [Net Yaroze Official Startup Guide (PDF)](https://www.psxdev.net/downloads/Net%20Yaroze%20Official%20-%20Startup%20Guide.pdf)
[^6]: [psx-spx CDROM File Formats (PS-X EXE and SYSTEM.CNF)](https://psx-spx.consoledev.net/cdromfileformats/)
[^7]: [PsyQ Run-Time Library Reference (EXEC structure)](https://psx.arthus.net/sdk/Psy-Q/DOCS/Devrefs/Libref.pdf)
