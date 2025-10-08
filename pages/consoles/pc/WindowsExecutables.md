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
tags:
  - pc
  - windows
---

# Introduction
Windows has played a significant role in the world of PC gaming, offering a vast and diverse library of video games spanning various genres and styles. 

In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, gaming transitioned to a more user-friendly and graphical environment, but many DOS games continued to run using compatibility features provided by Windows. 

The Windows platform offers backward compatibility for DOS games, allowing enthusiasts to relive the nostalgia of classic titles from the DOS era. This compatibility, along with the vast library of modern Windows-based games, showcases the ongoing role of Windows as a versatile and enduring platform for gamers.

---
# Windows Executable File Formats (NE,LE and PE)
Over the years there was a number of different file formats for storing executable programs, luckily unless you are dealing with Windows 3.1 games you can safely ignore them all apart from the most recent Portable Executable (PE) file format.

The Executable file formats are: 
* **New Executable** (NE) - Used in Windows 1.0 to Windows 3.1
   - The NE format was the first executable file format used in the early versions of Windows. It was a 16-bit format and was primarily used for Windows 1.0, 2.x, and 3.0. NE files had the .exe extension and were limited to 16-bit code.
* **Linear Executable** (LE) - Used in Windows 3.0 and Windows 3.1 (Win32s)
   - The LE format was introduced with Windows 3.0, and it allowed for limited 32-bit code execution. It was used in conjunction with the Win32s extension to enable 32-bit Windows applications to run on 16-bit Windows. LE files had the .exe extension and were a transitional format during the move to 32-bit computing.
* **Portable Executable** (PE) - Used in Windows NT3.1+
   - The PE format was a significant advancement over the earlier New Executable (NE) and Linear Executable (LE) formats, as it allowed for 32-bit code and brought modern features and extensibility to Windows executables. The use of PE continued in subsequent versions of Windows NT, including Windows NT 3.5, 3.51, and subsequent releases, eventually becoming the standard format for Windows executables in all later Windows operating systems.
 
## New Executable Format
The following is the New Executable header structure from the MinGW version of **winnt.h** (Under GPL license):
```cpp
/*
 * This is the Windows executable (NE) header.
 * the name IMAGE_OS2_HEADER is misleading, but in the SDK this way.
 */
#include <pshpack2.h>
typedef struct
{
    WORD  ne_magic;             /* 00 NE signature 'NE' */
    BYTE  ne_ver;               /* 02 Linker version number */
    BYTE  ne_rev;               /* 03 Linker revision number */
    WORD  ne_enttab;            /* 04 Offset to entry table relative to NE */
    WORD  ne_cbenttab;          /* 06 Length of entry table in bytes */
    LONG  ne_crc;               /* 08 Checksum */
    WORD  ne_flags;             /* 0c Flags about segments in this file */
    WORD  ne_autodata;          /* 0e Automatic data segment number */
    WORD  ne_heap;              /* 10 Initial size of local heap */
    WORD  ne_stack;             /* 12 Initial size of stack */
    DWORD ne_csip;              /* 14 Initial CS:IP */
    DWORD ne_sssp;              /* 18 Initial SS:SP */
    WORD  ne_cseg;              /* 1c # of entries in segment table */
    WORD  ne_cmod;              /* 1e # of entries in module reference tab. */
    WORD  ne_cbnrestab;         /* 20 Length of nonresident-name table     */
    WORD  ne_segtab;            /* 22 Offset to segment table */
    WORD  ne_rsrctab;           /* 24 Offset to resource table */
    WORD  ne_restab;            /* 26 Offset to resident-name table */
    WORD  ne_modtab;            /* 28 Offset to module reference table */
    WORD  ne_imptab;            /* 2a Offset to imported name table */
    DWORD ne_nrestab;           /* 2c Offset to nonresident-name table */
    WORD  ne_cmovent;           /* 30 # of movable entry points */
    WORD  ne_align;             /* 32 Logical sector alignment shift count */
    WORD  ne_cres;              /* 34 # of resource segments */
    BYTE  ne_exetyp;            /* 36 Flags indicating target OS */
    BYTE  ne_flagsothers;       /* 37 Additional information flags */
    WORD  ne_pretthunks;        /* 38 Offset to return thunks */
    WORD  ne_psegrefbytes;      /* 3a Offset to segment ref. bytes */
    WORD  ne_swaparea;          /* 3c Reserved by Microsoft */
    WORD  ne_expver;            /* 3e Expected Windows version number */
} IMAGE_OS2_HEADER, *PIMAGE_OS2_HEADER;
```
 
## Portable Executable
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

## How to dump a Windows executable?
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
The easiest way for a quick check if you have any embedded debug symbols is just to run the **strings** command over the executable and look for any strings that look like mangled function names e.g `?GetValidAnimStr@@YAHPAD0H@Z`. If this is the case then we just need a way to extract the information, as just running **strings** will miss out vital information such as how to link the function name to the actual function in assembly code and other debugging information such as line number to assembly mapping.

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

