---
permalink: /WindowsExecutables
layout: post
title: Windows Executables (NE, LE and PE Files)
recommend: 
 - pc
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
```C
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
```C
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

**Dumpbin** (Microsoft SDK): If you have the Microsoft Visual Studio Development Tools installed, you can use the dumpbin utility to display information about a PE file. Open a Command Prompt and run the following command:
```bash
dumpbin /headers yourfile.exe
```

**objdump** (GNU Binutils): If you're using a Unix-like environment, the objdump tool from the GNU Binutils can be used to examine PE files. Run the following command:
```bash
objdump -x yourfile.exe
```

## What are Relative Virtual Addresses (RVAs)?
RVA stands for "Relative Virtual Address". It is a term commonly used in the context of Windows Portable Executable (PE) files and refers to the address of a particular location within the virtual address space of a program or a module. RVAs are used to express positions or offsets relative to the base address of a module (executable or DLL) rather than as an absolute memory address.

RVA helps programs find things in their memory without needing to know exactly where everything is stored in memory. It's like a helpful set of directions.

RVA is a fundamental concept in Windows programming, as it allows for position-independent code and the ability to load modules at different base addresses in memory, enhancing the compatibility and flexibility of Windows applications.
