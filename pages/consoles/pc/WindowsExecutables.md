---
permalink: /WindowsExecutables
layout: post
title: Windows Executables (NE, LE and PE Files)
recommendTitle: All PC Posts
editlink: ../pages/consoles/pc/WindowsExecutables.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
excerpt: Awesome list of Windows Executable File Format information
breadcrumbs:
  - name: Home
    url: /
  - name: PC
    url: /pc
  - name: Windows Executables
    url: #
recommend: 
 - pc
 - windows
 - fileformats
tags:
  - pc
  - windows
  - fileformats
---
This page provides a comprehensive guide to **reverse engineering** Windows executable files, focusing on the evolution from classic **New Executable (NE)** and **Linear Executable (LE)** formats to the modern **Portable Executable (PE)** format used in all current Windows systems. 

Whether you are interested in reverse engineering, game modding, or simply curious about how Windows programs work under the hood, you'll find practical information about:
- Tools and techniques for dumping and inspecting Windows executable files.
- How to extract and analyze metadata from Windows executables, including headers and sections.
- Understanding the Rich Header and its significance for identifying compiler and linker toolchains.
- Exploring debug symbols with a focus on CodeView formats and how to locate them in classic game executables.
- The history and structure of NE, LE, and PE executable formats.

By the end of this guide, you'll have a solid foundation for exploring and dissecting Windows executables, with resources and examples tailored for retro game reverse engineering and technical analysis.

---
# Reverse Engineering Windows Executables
This section focuses on the core information that you need to get started reversing a windows game or other windows software.

## How to dump a Windows (PE) executable?
Dumping a Portable Executable (PE) file refers to extracting information from the file, such as its headers, sections, and other metadata. This process is often used for debugging and analysis. You can dump a PE file from the command line using either **Dumpbin** or **objdump**.

**Dumpbin** (Microsoft SDK): If you have the Microsoft Visual Studio Development Tools installed, you can use the **dumpbin** utility to display information about a PE file. Open a Command Prompt and run the following command:
```bash
dumpbin /headers yourfile.exe
```

**objdump** (GNU Binutils): If you're using a Unix-like environment, the objdump tool from the GNU Binutils can be used to examine PE files. Run the following command:
```bash
objdump -x yourfile.exe
```

---
## How to check for interesting data
  Windows executables can sometimes contain hidden or unexpected data embedded within them. This can include debug symbols, developer notes, secret messages, copyright strings, easter eggs, or artifacts from the build process. This data can be extremely valuable for reverse engineering and game hacking as it can give clues as to what each function does or even what its original name might have been.

### Checking for Plain Text Strings
  The simplest way to find hidden text is by scanning for printable ASCII or Unicode strings. This can reveal embedded messages, URLs, error messages, or even references to tools and libraries used during development.
  ```bash
  strings your.exe > your.exe.txt
  ```
  This command will print out all printable strings found in the binary to the text file, you can then open it to do a brief skip for any interesting looking strings.

### Checking for embedded files
  Executables can also contain other files embedded inside them such as images, archives or even other executables, you can check with the **binwalk** command:
  ```bash
  binwalk your.exe
  ```
  
  If you did find data then you can extract with `-e`.

### Checking for overlays
  An overlay is data appended to the end of the executable, this command returns true if there is an overlay:
  ```bash
  rabin2 -Ij your.exe | jq '.info.overlay'
  ```

### Checking for Debug Data in PE executables
  The executable may have been built with debug information includes, one way to check is to use the **rabin2** command like so:
  ```bash
  rabin2 -Ij your.exe | jq '.info | {dbg_file, stripped, linenum, lsyms}'
  ```

  The output looks like this:
  ```js
   {
    "dbg_file": "", // Could contain a reference to a .pdb file path
    "stripped": false, // Whether debug information was removed
    "linenum": true, // Whether it contains line number information
    "lsyms": true // whether it contains local symbol information
  }
  ```

  Note that just because stripped is false or linenum/lsyms is true does not mean you have access to the information, it may have been put in a external .pdb file which will likely not have been included with the game.

  Note that if its not stripped and the dbg_file is a blank string then there is a good chance the debug symcols are embedded inside the executable in a section, see the CodeView section of this page.

  Here is what each of these fields means and how **rabin2** got the value:

| Field        | Meaning / Use                                                                             | PE Source / Structure                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dbg_file** | If non-empty, often indicates a path or name of an external debug file (e.g. a `.pdb`)    | Found in the **IMAGE_DEBUG_DIRECTORY** (Data Directory entry 6). The record type `IMAGE_DEBUG_TYPE_CODEVIEW` contains the PDB path and GUID.                          |
| **stripped** | `true` means debugging symbols or metadata have been removed                              | Determined by absence of a **COFF symbol table** (`PointerToSymbolTable` = 0) or missing **Debug Directory** entry in the optional header.                            |
| **linenum**  | Indicates presence of **line number mapping** (address ↔ source line)                     | Derived from **section headers**: each `IMAGE_SECTION_HEADER` has `NumberOfLinenumbers` and `PointerToLinenumbers` fields; non-zero means line info is present.       |
| **lsyms**    | Indicates presence of **local symbols**, e.g. function & variable names within the binary | Based on **COFF symbol table** in the PE header (`NumberOfSymbols` and `PointerToSymbolTable`). Non-zero values mean the table exists and local symbols are included. |

  For more information on Debug Data inside PE executables please see the section below.

---
## Rich Header - Metadata on what tools were used to build the executable
Executables produced by **Microsoft toolchains** (e.g Visual Studio) contain a hidden structure called the *Rich Header*, located between the DOS stub and the PE signature.  
This header is added automatically by `link.exe` and provides a compact record of the toolchain components that contributed object files (`.obj`) to the final binary.  

### What is in the Rich Header?
Each entry in the Rich Header corresponds to a specific tool (compiler, assembler, resource converter, linker, etc.) that emitted one or more objects during the build.  
The information includes:
* **Tool identifier (ID)** - uniquely assigned to each Microsoft build tool.
* **Version** - internal build number of that tool.
* **Count** - number of object files generated by that tool that were linked into the executable.

Together, these entries form a fingerprint of the binary’s compilation lineage, can be used for **compiler version identification** which is very useful for decompilation projects which are aiming for an exact match when re-compiling.

| Name pattern   | Created by         | Purpose                                                 | Typical count      |
| -------------  | ----------------   | ----------------------------------------------------  | ------------------ |
| **UtcXX_C**    | cl.exe             | C front end producing COFF .obj modules               | tens to hundreds   |
| **UtcXX_CPP**  | cl.exe             | C++ front end producing COFF .obj modules             | few to tens        |
| **MasmXXX**    | ml.exe, ml64.exe   | Assembler-generated .obj modules                      | few to dozens      |
| **CvtresXXX**  | cvtres.exe         | Converts .res to .obj for linking resources           | 1 to few           |
| **CvtomfXXX**  | cvtomf.exe         | OMF-to-COFF conversion for legacy OMF objects (VC6 era)                                                  | 0-few         |
| **LinkerXXX**  | link.exe           | Internal linker-generated COFF objects for runtime stubs, section defaults, incremental-link bookkeeping | ~5–15         |
| **AliasObjXX** | link.exe / lib.exe | Symbol alias / weak extern redirection (`/ALIAS`, CRT startup, alternate names)                          | few–dozen     |
| **RCXXX**      | rc.exe             | Resource compiler generated inputs (shows when rc participates in toolchain lineage)                     | 0-few         |
| **Import0**    | link.exe           | Import thunk/stub objects generated for imported DLL symbols                                             | dozens-hundreds |
| **Export0**    | link.exe           | Export table helper objects (when exporting symbols from an EXE/DLL)                                     | 0-few         |
| **LibXXX**     | lib.exe            | Librarian-produced member objects pulled from static libraries                                           | few-dozens    |

### How do I extract the Rich Header Information?
You can use **richprint** an open source tool by **dishather** that you can find here:
[dishather/richprint: Print compiler information stored in Rich Header of PE executables.](https://github.com/dishather/richprint)

You can also use **rabin2**/**radare2** to get the information, and even export as JSON like so:
```bash
rabin2 -Hj your.exe
```

You will get output like:
```js
[
  {"name":"RICH_ENTRY_NAME","vaddr":152,"paddr":152,"comment":"Utc12_CPP","format":"s","pf":[{"type":"s","offset":152,"value":152,"string":"..."}]}, // Name is Utc12_CPP which is C++ compiler
  {"name":"RICH_ENTRY_ID","vaddr":152,"paddr":152,"comment":"0x0000000b","format":"x","pf":[{"type":"x","offset":152,"value":-1}]},      // Internal Microsoft ID for the Utc12_CPP C++ compiler (0x0b)
  {"name":"RICH_ENTRY_VERSION","vaddr":154,"paddr":154,"comment":"0x00001fe8","format":"x","pf":[{"type":"x","offset":154,"value":-1}]}, // Version of the C++ compiler (0x1fe8)
  {"name":"RICH_ENTRY_TIMES","vaddr":156,"paddr":156,"comment":"0x00000011","format":"x","pf":[{"type":"x","offset":156,"value":-1}]}    // Number of objs created by this version of the C++ compiler (0x11 = 17)
]
```

So from the above we can see that there were **17 .cpp source files** compiled with Visual Studio 6.0 that made up the final executable.

Not quite sure what Utc stands for, its possible an internal codename such as **Universal Tool Compiler** but this is not confirmed, the 12 is the Microsoft C Version number (**_MSC_VER**) which maps to Visual Studio 6.0 the 12th release of Microsoft C.

---
# Windows Executable File Formats (NE, LE and PE)
Over the years there was a number of different file formats for storing executable programs, luckily unless you are dealing with Windows 3.1 games you can safely ignore them all apart from the most recent **Portable Executable (PE)** file format.

The Executable file formats for **Windows** are: 
* **New Executable (NE)** - 16-bit format used from Windows 1.0 to Windows 3.1
* **Linear Executable (LE)** - 32-bit format used in Windows 3.0+ but only really used for games that use **DOS Extenders**
* **Portable Executable (PE)** - 32-bit used in all modern windows games (Windows NT 3.1+)

Since the only time you will encounter LE executables is in DOS Extenders, we will not take a deep dive into the format here, but it was based on the original NE format.

If you are reversing a Windows PC game (not DOS) then the format you need to know about is the  **Portable Executable (PE)** format.

---
## MZ Executable Header - Common to all Windows executable formats
All DOS and Windows executables start with an **MZ header**, named after **Mark Zbikowski**, who designed the format for **MS-DOS**.  
It describes how to load the executable in real mode: how many bytes to load, where the program’s stack begins, and how much memory to reserve.

Every NE, LE, and PE file also begins with an MZ header and a **DOS stub program** (usually printing "This program cannot be run in DOS mode"), followed by a pointer to the next header which will say what the rest of the exe format will be such as **NE** or **PE**.

| Offset | Size (bytes) | Name | Description |
|---|---:|---|---|
| 0x00 | 2 | Signature | Must be "MZ" (0x4D, 0x5A). Identifies an MS-DOS executable. |
| 0x02 | 2 | Bytes on Last Page | Number of bytes used on the last 512-byte page of the file. 0 means exactly 512 bytes. Used to compute the total image size. |
| 0x04 | 2 | Pages in File | Total number of 512-byte pages in the file. Together with the previous field, gives total file size. |
| 0x06 | 2 | Relocation Entries | Count of relocation records immediately following the header. Each relocation is a segment:offset pair that the loader adjusts to the program’s load address. |
| 0x08 | 2 | Header Size (paragraphs) | Size of the header in 16-byte paragraphs. The loader skips this much before copying the program image into memory. |
| 0x0A | 2 | Minimum Extra Paragraphs | Minimum additional memory (in 16-byte paragraphs) to allocate after the program image — similar to a heap. |
| 0x0C | 2 | Maximum Extra Paragraphs | Maximum additional memory to allocate; the loader tries to give this amount if available. |
| 0x0E | 2 | Initial SS | Initial value of the stack segment, relative to the program’s load segment. |
| 0x10 | 2 | Initial SP | Initial stack pointer. Together with SS, defines the starting stack position. |
| 0x12 | 2 | Checksum | Simple word checksum (two’s complement) over the file. Usually 0. |
| 0x14 | 2 | Initial IP | Instruction pointer for program start (CS:IP). |
| 0x16 | 2 | Initial CS | Code segment for program start, relative to load segment. |
| 0x18 | 2 | Relocation Table Offset | File offset (in bytes) to the relocation table, which follows the header. |
| 0x1A | 2 | Overlay Number | Overlay index; 0 for the main program. Used by old overlay managers. |
| 0x1C | 8 | Reserved | Four 2-byte reserved words, not used by DOS. |
| 0x24 | 2 | OEM Identifier | OEM ID value used by non-Microsoft tools (rarely used). |
| 0x26 | 2 | OEM Information | OEM-specific information field. |
| 0x28 | 20 | Reserved 2 | Ten more 2-byte reserved words. |
| 0x3C | 4 | Pointer to New Header | File offset of the next header — for example, the **NE** or **PE** header. For pure DOS executables, this points past the file. |
| 0x40+ | ... | Relocation Table | List of segment:offset pairs that need to be fixed to the program’s load segment. |
| — | — | DOS Stub | Actual DOS code to run if executed under MS-DOS. In Windows executables, this typically prints "This program cannot be run in DOS mode." |

Since the MZ format is for DOS and not Windows in will not be covered in this page.

This structure is known as **IMAGE_DOS_HEADER** in Microsoft’s `WinNT.h` and can be seen on their official rust api docs here [IMAGE_DOS_HEADER](https://microsoft.github.io/windows-docs-rs/doc/windows/Win32/System/SystemServices/struct.IMAGE_DOS_HEADER.html)

For a deep dive into the MZ header and the DOS stub check out **0xRick's** excellent page: [A dive into the PE file format - DOS Header, DOS Stub and Rich Header - 0xRick’s Blog](https://0xrick.github.io/win-internals/pe3/)

---
## New Executable Format (NE) - Windows 1.0 to Windows 3.1
<img width="560" height="369" alt="The NE exe format was used in Tetris for Windows" src="https://github.com/user-attachments/assets/cb2ebaec-7379-4a1b-8ac4-12b525308516" />

The **New Executable (NE)** format was introduced with 16-bit Windows (starting from Windows 1.0 and 2.0) and OS/2 1.x.
It extended the earlier **MZ** DOS format to support multiple code and data segments, dynamic linking, and relocations suitable for protected-mode environments.

### How many windows games use the New Executable format (NE)?
Only 16-bit games from Windows 3.x that were not DOS executables (MZ format), so it is likely maybe just a couple thousand games, **MobyGames** lists about **2,236** titles on the the [List of all Windows 16-bit games - MobyGames](https://www.mobygames.com/platform/win3x/) page.

Some example games that use the NE executable format are:
* Tetris for Windows

Although a small subset of Windows 3.1x games were actually using **PE format** instead, so not all games on that list will be NE format but the vast majority will be. 

There are about **1,429** unique executables in the New Executable (NE) format in the [eXoWin3x Project](https://wiki.retro-exo.com/index.php/EXOWin3x) project so if you are interested in taking a look at the format that is a greak place to start: .

---
### How to extract information for NE executable?
You will notice that many reverse engineering tools don't have good support for NE format executables, they may load them but the analysis is very weak and often incorrect.

Some tools such as **cvdump.exe** will refuse to work with such an old format:
```
CVDUMP : fatal error : Unknown executable signature
```

Other tools like **dumpbin.exe** will think its a MS DOS executable and refer you to **EXEHDR**:
```
TETRIS.EXE is an MS-DOS executable; use EXEHDR to dump it
```

### Are there embedded debug symbols?
In NE format executables, there are **typically no symbols** in the traditional debugging sense.

NE executables don't have a built-in debug symbol format like modern PE files (which can contain PDB references or COFF symbols). If you needed debug symbols for 16-bit Windows development, they were stored separately in a **.SYM** or **.MAP** file. 

However all is not lost there are some exported functions inside the executable including both the name and module description. These map function names to ordinal numbers, which then map to entry points via the **Entry Table**
Although local variables, function parameters, and internal function names are not stored in the executable.

You can view any exported functions using the rabin2 command:
```bash
rabin2 -s TETRIS.EXE
```
In the game **Tetris for windows** it prints this:
```ruby
[Symbols]

nth paddr       vaddr      bind   type size lib name
――――――――――――――――――――――――――――――――――――――――――――――――――――
0    0x00006db1 0x00006db1 NONE   NONE 0        TETRIS
1    0x000046c0 0x000046c0 GLOBAL NONE 0        ADDHIGHSCOREPROC
2    0x000045d6 0x000045d6 GLOBAL NONE 0        HIGHSCOREDLGPROC
3    0x00000c36 0x00000c36 GLOBAL NONE 0        SIMPLEWINPROC
4    0x00004d46 0x00004d46 GLOBAL NONE 0        GAMEGRIDWNDPROC
5    0x0000382c 0x0000382c GLOBAL NONE 0        SCOREWNDPROC
6    0x000047d2 0x000047d2 GLOBAL NONE 0        BACKGROUNDDLGPROC
7    0x00008b12 0x00008b12 GLOBAL NONE 0        ___EXPORTEDSTUB
0    0x00006db1 0x00006db1 NONE   NONE 0        Damn Bitchin Tetris Game for Win3
9    0x00000700 0x00000700 GLOBAL NONE 0        entry8
10   0x00007eb2 0x00007eb2 GLOBAL NONE 0        entry9
```

So you can at least see the procedures such as **TETRIS**, **ADDHIGHSCOREPROC**, **HIGHSCOREDLGPROC** etc

---
### NE Executable Header
An NE file still starts with an **MZ header** and **DOS stub**, followed by a pointer to the NE header.

There is a lot of interesting metadata that you can use to learn about your executable in the header, such as the version of the linker used to produce it, the entry point for knowing where to start disassembling and all the offsets to the various interesting parts of the executable.

Most offsets in the table below are from the "NE" header as the DOS stub could be of variable size, but some are offsets relative to the start of the file so be careful.

| Offset (from NE header start) | Size (bytes) | Name | Description |
|---|---:|---|---|
| 0x00 | 2 | Signature | Must be "NE" (0x4E, 0x45).  |
| 0x02 | 1 | Major Linker Version | Linker major version that produced the image.  |
| 0x03 | 1 | Minor Linker Version | Linker minor revision.  |
| 0x04 | 2 | Entry Table Offset | Offset to the **entry table** which maps ordinals to code entry points; used by the loader and by fixups that call exported ordinals.  |
| 0x06 | 2 | Entry Table Length | Size of the entry table in bytes.  |
| 0x08 | 4 | File Load CRC | 32-bit checksum of the whole file (often 0); the checksum field is treated as 0 during calculation.  |
| 0x0C | 2 | Flag Word | Module attributes: data model, DLL bit, CPU/NPX usage, etc. Useful to spot DLLs and memory model.  |
| 0x0E | 2 | Auto Data Segment Index | Segment number for the automatic data segment (0 if none).  |
| 0x10 | 2 | Initial Heap Size | Extra local heap bytes added to the data segment at load time.  |
| 0x12 | 2 | Initial Stack Size | Bytes reserved for the initial stack.  |
| 0x14 | 4 | Entry Point | Initial CS:IP as a pair of segment number and offset where execution begins.  |
| 0x18 | 4 | Initial Stack Pointer | Initial SS:SP as a pair of segment number and offset.  |
| 0x1C | 2 | Segment Count | Number of entries in the **segment table**. Each segment entry describes where a code/data segment lives in the file, its length, flags (CODE/DATA, MOVEABLE, PRELOAD, RELOCINFO, discard priority), and its minimum allocation size.  |
| 0x1E | 2 | Module Reference Count | Number of entries in the **module reference table** (imported modules).  |
| 0x20 | 2 | Non-resident Name Table Size | Size in bytes of the **non-resident name table** (strings not kept resident in memory).  |
| 0x22 | 2 | Segment Table Offset | Offset to the **segment table**. File offsets inside segment entries are stored in logical sectors, scaled by the header’s Align Shift Count.  |
| 0x24 | 2 | Resource Table Offset | Offset to the **resource table**. Contains its own alignment count and records that group resources by type with per-resource location and size.  |
| 0x26 | 2 | Resident Name Table Offset | Offset to the **resident name table**. Holds the module name and exported names that must stay in memory; names are length-prefixed and carry an ordinal.  |
| 0x28 | 2 | Module Reference Table Offset | Offset to the **module reference table**. Each 2-byte entry points to a module name string in the Imported Names Table.  |
| 0x2A | 2 | Imported Names Table Offset | Offset to the **imported names table** (Pascal-style strings for imported module and procedure names referenced by fixups).  |
| 0x2C | 4 | Non-resident Name Table Offset (file) | Absolute file offset of the **non-resident name table**; contains the module description and additional exported names, not kept resident.  |
| 0x30 | 2 | Movable Entry Count | Number of entry-table entries that refer to moveable segments (helps loader manage movable code).  |
| 0x32 | 2 | Align Shift Count | Logical sector alignment for **segment table** offsets: file offsets are stored in units of 1 << count (default 9 = 512 bytes).  |
| 0x34 | 2 | Resource Entry Count | Number of resource entries in the resource table (not bytes).  |
| 0x36 | 1 | Target OS | Executable type used by the loader, e.g. 0x02 = Windows.  |
| 0x37 | 1 | Other Flags | Additional compatibility flags; some toolchains set bits like "supports long names". Often 0 in practice.  |
| 0x38 | 2 | Return Thunks Offset | Offset (from NE header) to return thunk data for mixed-mode thunking; commonly 0 for normal apps.  |
| 0x3A | 2 | Segment Ref Bytes Offset | Offset (from NE header) to per-segment reference bytes used by the loader; commonly 0.  |
| 0x3C | 2 | Minimum Code Swap Area | Minimum code swap area size; reserved by Microsoft in some docs.  |
| 0x3E | 2 | Expected Windows Version | Expected Windows version as a WORD (major/minor packed). Used for runtime version checks.  |


Here is the a C structure for the **New Executable** header from the MinGW version of **winnt.h** (Under GPL license): [File: winnt.h - IMAGE_OS2_HEADER](https://sources.debian.org/src/mingw-w64/5.0.1-1/mingw-w64-tools/widl/include/winnt.h/#L1156)

--- 
## Portable Executable - Windows NT3.1+ - The modern executable
You can find the structure of the PE file format in the C Header file called `winnt.h` located in any Windows NT based Software Development Kit or from the open source MinGW (Minimalist GNU for Windows) collection.

The following is the Portable Executable header structure from the MinGW version of **winnt.h** (Under GPL license):
```c
typedef struct _IMAGE_NT_HEADERS {
  DWORD Signature; /* "PE"\0\0 */	/* 0x00 */
  IMAGE_FILE_HEADER FileHeader;		/* 0x04 */
  IMAGE_OPTIONAL_HEADER32 OptionalHeader;	/* 0x18 */
} IMAGE_NT_HEADERS32, *PIMAGE_NT_HEADERS32;

typedef struct _IMAGE_FILE_HEADER {
  WORD  Machine;
  WORD  NumberOfSections;
  DWORD TimeDateStamp;
  DWORD PointerToSymbolTable;
  DWORD NumberOfSymbols;
  WORD  SizeOfOptionalHeader;
  WORD  Characteristics;
} IMAGE_FILE_HEADER, *PIMAGE_FILE_HEADER;
```

You can also find out more about the Portable Executable format on the official Windows SDK Documentation site: [PE Format - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format)

---
## DOS Compatibility
In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, many DOS games continued to run using compatibility features provided by Windows.

Since both DOS and Windows executables used the .EXE file extension, users would inevitabling get confused by trying to run a Windows executable on DOS. So the Windows executable format even to this very day still has a small DOS executable at the top to tell users that they need windows to run the executable. 

This would start a long line of backwards compatibility features built into the various windows executable formats that have evolved over the years.

---
## What are Relative Virtual Addresses (RVAs)?
RVA stands for "Relative Virtual Address". It is a term commonly used in the context of Windows Portable Executable (PE) files and refers to the address of a particular location within the virtual address space of a program or a module. 

RVAs are used to express positions or offsets relative to the base address of a module (executable or DLL) rather than as an absolute memory address.

RVA helps programs find things in their memory without needing to know exactly where everything is stored in memory. It's like a helpful set of directions.

RVA is a fundamental concept in Windows programming, as it allows for position-independent code and the ability to load modules at different base addresses in memory, enhancing the compatibility and flexibility of Windows applications.

---
# CodeView Debugging Symbols (1985-2025+)
<img width="641" height="301" alt="CodeView 2.0 from 1987" src="https://github.com/user-attachments/assets/bb1d0c31-6464-4ee4-b16f-46aa2ce69e0b" />

The **Microsoft CodeView** Debugger stores its debug symbols in different places (and formats) depending on the version of Microsoft Visual C was used, if you are lucky enough to find a windows game that has debug symbols it is possible that they are in a CodeView format. 

Depending on the age of the game (what version of Visual Studio was used) the debug symbols could either be stored embedded inside the executable itself or in a separate .pdb file.

You can find a table of the rough time frame when you can find each version of CodeView Debug symbols:

| Era          | Toolchain            | CodeView Signature | Typical Year | Debug Symbol Data Location     |
| ------------ | -------------------- | ------------------ | ------------ | ----------------- |
| CodeView 2.x | MS C 6.0             | `NB02`             | ~1990        | Inside executable           |
| CodeView 4.x | MSVC 4.x–6.0         | `NB09`             | ~1995–2000   | Inside executable or path to external `.pdb` file  |
| CodeView 7.0 | MSVC 7.0+ (.NET era) | `RSDS` (or `CV7`)  | 2002–present | GUID + Age + path |

If the executable is pre-1995 e.g **Microsoft C 6.0** and compiled with debug mode on then it is likely to contain debug symbols directly inside the executable in the **.rdata** section of the exe file.

If the executable was built using **Visual C++ 4.x to 6.0** the symbols could be either inside the executable or as a separate .PDB file, both using the same **CodeView** 4.x record format (`NB09`, `NB10`, `NB11`). 

It all depended on the compile switch used for building the executable:

| Compiler switch     | Where symbols end up                          | Typical header in EXE                         |
| ------------------- | --------------------------------------------- | --------------------------------------------- |
| `/Zi` + link /DEBUG | External `.pdb` file (partial info in .exe)   | `NB09` or `NB10` block with a path to the PDB |
| `/Z7` (no /DEBUG)   | **Inline CodeView info inside the .obj/.exe** | `NB11` (sometimes `CV4`) directly embedded    |


For example the game **Mike Stewart's Pro Bodyboarding** from 1999 was compiled with the Inline CodeView information. However opening it in Ghidra or radare they are unable to do anything with this information so its very easy to miss if you don't know where to look. It if very common to just rely on reversing tools like Ghidra to look for debug symbols and presume they are not there if it doesn't find them, but this can miss vital information.


## Checking for embedded CodeView symbols in an executable
The easiest way for a quick check if you have any embedded debug symbols is just to run the **strings** command over the executable and look for any strings that look like mangled function names e.g `?GetValidAnimStr@@YAHPAD0H@Z`. 

If this is the case then we just need a way to extract the information, as just running **strings** will miss out vital information such as how to link the function name to the actual function in assembly code and other debugging information such as line number to assembly mapping.

If you a copy of **dumpbin.exe** from a version of Visual Studio you can run the following in either wine or windows: 
```bash
wine dumpbin.exe /headers mspb.exe
```

You will get a bunch of headers printed out, look for the `.rdata` section it will list any debug directories found in the section along with the format like so:
```ruby
SECTION HEADER #2
  .rdata name
    1DAE virtual size
   21000 virtual address (00421000 to 00422DAD)
    2000 size of raw data
   21000 file pointer to raw data (00021000 to 00022FFF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

  Debug Directories

        Time Type        Size      RVA  Pointer
    -------- ------- -------- -------- --------
    3751D21C misc         110 00000000    28000    Image Name: Release/beast98.exe
    3751D21C fpo         1CD0 00000000    28110
    3751D21C cv         30E7C 00000000    29DE0    Format: NB11
```

You can see that this executable has debug directories in the NB11 format!
However **dumpbin.exe** does not emit the CodeView blob as binary and will not decode the NBxx format records. It can help you locate them, but you need to read the bytes yourself.

First of all the file pointer to CV data is very useful, if you open the executable in a hex editor and jump to offset `0x29DE0` you will get to the start of the CodeView debugging section, it also lists the size so you could extract just this data like so:
```bash
dd if=mspb.exe of=debug-cv.bin bs=1 skip=$((0x29DE0)) count=$((0x30E7C))
```

But there is an even easier way with [microsoft-pdb/cvdump/cvdump.exe](https://github.com/microsoft/microsoft-pdb/blob/master/cvdump/cvdump.exe) you can give your executable directly to cvdump and it will tell you what all the debug information means.


### Embedded CodeView 4.x symbols
The **CVTRES 5.x linker** (Visual Studio 6.0) often embedded CodeView 4 format directly into .`debug$S` and `.debug$T` sections of the PE. Many reverse engineering tools such as Ghidra and Binary Ninja will ignore this data, or even crsh while opening the executable.

You can find these blocks of data by looking for the "CV" string in a hex editor, for CodeView 4 it would then be followed by the version number `0x04`. So you can search for the Hex `43 56 04 00` to find the start of the data.

```c
struct CV4Header {
  char Signature[4];   // "CV4\0"
  uint32_t Offset;     // Offset to symbol or type records
  // followed by compiler signature and variable-length symbol records
};
```

Also `NB11` (bytes 4E 42 31 31) marks a **CodeView database header** used inside PDB v4.x and inline CV4-style blocks.

```c
struct NB11Header
{
    char Signature[0x4]; //  e.g. "NB11"
    char SubType; // e.g. 'P' for publics, T for Types etc see table below
    uint16_t dataLength; // length of data following
    uint16_t Reserved1;
    uint16_t Reserved2;
};
// there are now NB11Header.dataLength bytes here (e.g 2 in the executable I have)
```

Table of the subtypes:

| Signature | Contents             |
| --------- | -------------------- |
| `NB11T`   | Type records         |
| `NB11S`   | Symbol records       |
| `NB11P`   | Public symbol table  |
| `NB11M`   | Module info table    |
| `NB11F`   | File/line info       |
| `NB11`    | Generic header block |

You can find out more here: [DebugInfo.com - Matching debug information](https://www.debuginfo.com/articles/debuginfomatch.html)

---
# Windows Object File Formats - The foundation of executables and libraries
Before an executable file (`.exe` or `.dll`) is created, compilers first produce **object files**, typically one per source code file, for example a `main.obj` **object file** would be created from a `main.cpp` source file.

## What is an Object file?
An object file is an intermediate binary that contains machine code, data, relocation entries, and symbol information — but it is **not yet executable**. In order to make it executable it needs to be linked together with the other compiled translation units (objects) to become a single executable or library, this is what a **linker** does.

## Why care about Object file formats?
So you might wonder why you should care about the object file formats, as after all it is unlikely that the developers would distribute their intermediate .obj files along with a retail game, and that is true. 

The reason is simple, executable formats are **based on** the object file format, for example the **Portable Executable (PE)** format was essentially built as an extension of the COFF object format. So to understand the executable formats you really need to understant the formats they are based on, this gives the added benefit of when you decide to do a full decompilation you understand how all the object files link together in the executable making it easier to re-compile into a near byte-accurate replica.

## What file format do Object files use?
Object files follow a defined **object format**, which specifies how sections, symbols, and relocations are stored on disk.  
Different compilers and operating systems use different object formats, but their purpose is always the same: to provide the linker with everything needed to build a complete program or library.

On Windows, several object formats have been used over time, reflecting the evolution of the platform and its toolchains:
* **OMF** (Object Module Format) - used by early **DOS** and **16-bit Windows** compilers.  
* **COFF** (Common Object File Format) - adopted for 32-bit and 64-bit Windows and still in use today.  

Unless you are reverse engineering an early windows or DOS game, the format you will most likely encounter is **COFF**. Also a side note if you are compiling with **GCC** the intermedia object files are actually in ELF format and then when they are linked together they get converted to a COFF-based PE executable.

---
## COFF Object Files (1990s–present) - The foundation of PE executables
**Common Object File Format** (COFF) is the object module format produced by Microsoft and LLVM toolchains on Windows before linking into a PE image.

The **Portable Executable (PE)** and **Common Object File Format (COFF)** are directly related — the PE format is essentially an extension of COFF.
Microsoft built PE on top of COFF to support Windows’ runtime loader while keeping compatibility with existing compiler and linker infrastructure.

### What is in a COFF .obj?
A COFF object contains the following data:
* **COFF file header** - machine, number of sections, timestamp, pointer to symbol table, number of symbols, size of optional header, characteristics.
* **Section headers** - name, virtual size/addr placeholders, size of raw data, pointer to raw data, pointer to relocations, pointer to line numbers (legacy), counts, flags.
* **Section data** - bytes for `.text`, `.data`, `.rdata`, `.pdata` etc.
* **Relocations** - per section, each relocation references a symbol table index and a relocation type such as `IMAGE_REL_I386_DIR32` or `IMAGE_REL_AMD64_REL32`.
* **COFF symbol table** - array of `IMAGE_SYMBOL` entries with storage class, section number, and auxiliary records for functions, files, and COMDAT details.
* **String table** - follows the symbol table for names longer than 8 bytes.

For more information check out the official specification: [PE Format - Win32 apps](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-file-header-object-and-image)

---
### Sections in COFF .obj files
Section names and purposes are similar to PE images, but .obj sections are not yet assigned final RVAs and can include many small, tool-generated sections.

Typical examples:
* `.text` - code produced by the compiler.
* `.rdata` - constants, jump tables, RTTI.
* `.data`/`.bss` - initialized/uninitialized globals.
* `.xdata`/`.pdata` - exception unwinding metadata on x64.
* `.drectve` - linker directives emitted by the compiler, e.g. default libraries or section attributes.
* `.debug*` - CodeView records when requested.

Section flags in the header (e.g. `IMAGE_SCN_CNT_CODE`, `IMAGE_SCN_MEM_READ`) guide the linker when it merges or discards sections.

---
## COFF symbol table and auxiliary records
Every .obj has a **COFF symbol table** describing external names, section definitions, functions, and compiler artifacts.

This is information required to link all the objects together, and final executables only include a COFF symbol table if linked with `/DEBUG`; otherwise symbols are omitted from the PE.
