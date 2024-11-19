---
permalink: /pc/
layout: post
title: IBM-PC & Compatibles
recommend: pc
recommendTitle: All PC Posts
editlink: ../categories/consoles/PC.md
console: 'pc'
consoleimage: /public/consoles/Computer Old Design.png
excerpt: Awesome list of IBM PC Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: PC
    url: #
---

# Introduction
Welcome to our page dedicated to PC reverse engineering! PCs are some of the most versatile and widely-used computing platforms in the world, and there's no shortage of interesting and challenging reverse engineering topics to explore. If you're interested in learning more about the technical aspects of PCs and how they work, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to PC reverse engineering. Whether you're interested in understanding the hardware architecture of retro CPUs and GPUs, analyzing software at the binary level, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your keyboard and mouse, and get ready to dive into the exciting world of PC reverse engineering!

## MSX PC
Note that if you are interested in the MSX PC we have a seperate post on that topic:
{% include link-to-other-post.html post="/msx" description="For more information on thr MSX check out this post." %}

---
# DOS

---
## DOS Game Reverse Engineering

## Reversing DOS games with CicoParser
CicoParser is a tool that helps convert old DOS programs to run on modern computers. Instead of emulating the entire DOS system, it translates the program's assembly code into C code. This makes the program run much faster and allows for easier modification and improvement of the original application.

You can find it on Github:
[Education/2021/CicoParser at master · gabonator/Education](https://github.com/gabonator/Education/tree/master/2021/CicoParser)

Here is a video from the author:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4fAeUx8A-OE?si=w45EcMxhSPX2rLi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Reverse Engineering Strike Commander
Fabien Sanglard has an excellent series of articles on how he reverse engineered the classic flight simulator **Strike Commander**:
[Reverse Engineering Strike Commander](https://fabiensanglard.net/reverse_engineering_strike_commander/index.php)

---
## DOS Gaming Aspect Ratio - 320x200
The Youtuber **Displaced Gamers** has an excellent video explaining the common DOS aspect ratio:
<iframe width="560" height="315" src="https://www.youtube.com/embed/YvckyWxHAIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## 32-bit DOS Applications
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EDl9qBZ9Bb0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
The video discusses the 640k memory limitation of DOS and why many DOS games require more than 1MB of memory. The 16-bit x86 architecture used a trick to address up to one megabyte of memory, which became a limitation as software became more complicated. DOS extenders were developed to allow 32-bit memory access with almost no performance penalty, enabling 32-bit games to run on 16-bit MS-DOS. DOS extenders were based on the DPMI specification, providing larger memory access and multitasking capabilities. Developers only needed to know how to use the correct DOS external functions when mode switching was necessary. The use of DOS extenders extended the lifespan of MS-DOS and its legacy is engraved into the memory of classic DOS games, which shaped the video game industry.

### Real Mode
Real mode is a processor mode in the x86 architecture where the CPU can directly access the first 1MB of memory. In real mode, the CPU uses 16-bit registers and addresses memory using 20-bit addresses that are formed by combining a 16-bit segment address with a 16-bit offset address. Real mode is the default mode of operation for the x86 CPU, and it was used in early versions of MS-DOS.

### Protected Mode
Protected mode is another processor mode in the x86 architecture that allows the CPU to access more than 1MB of memory, up to 4GB. Protected mode uses a different memory addressing scheme, called linear addressing, where memory is addressed using 32-bit addresses. Protected mode also provides hardware-based memory protection and multitasking capabilities, which make it suitable for modern operating systems like Windows and Linux. Protected mode is used by modern operating systems, and it requires a transition from real mode to enter this mode of operation.

### DOS Extenders
DOS extenders work by extending the 16-bit real mode of the x86 architecture to allow 32-bit applications to run on the platform. In real mode, applications can only access up to 1MB of memory. DOS extenders enable applications to access more memory by running in protected mode, which allows them to use up to 4GB of memory.

DOS extenders operate by adding an additional layer between the application and the operating system. This layer intercepts certain system calls made by the application and provides additional functionality. The extender provides a set of APIs that allow the application to access memory beyond the 1MB limit and other system services that are not available in real mode.

The DOS extender typically consists of a small loader program and a runtime library that is linked with the application. When the application is launched, the loader program loads the extender and initializes it. The extender then sets up a protected mode environment and transfers control back to the application, which can now use 32-bit instructions and access more memory.

The use of DOS extenders allows applications to take full advantage of the capabilities of the x86 architecture, and it played a crucial role in the development of early PC games. DOS extenders were particularly important for games that required a lot of memory and high-performance graphics, as they allowed developers to create games that pushed the limits of the platform.

#### DPMI - DOS Protected Mode Interface
DPMI stands for "DOS Protected Mode Interface" It is a specification that provides a way for DOS applications to run in protected mode, which allows them to access more memory and run more efficiently. DPMI was developed in the late 1980s and early 1990s, during a time when the transition from 16-bit to 32-bit computing was taking place. DPMI provides a set of services that allow DOS applications to run in a protected environment, including virtual memory management, task switching, and interrupt handling. It was used extensively in the development of DOS extenders, which allowed 32-bit applications to run on DOS systems. The DPMI specification was widely adopted and helped to extend the life of the DOS platform well into the 1990s.

DPMI was created by Microsoft in the late 1980s as part of their work on the Windows 3.0 operating system. It was developed to standardize the use of DOS extenders and allow applications using them to run under the protected mode environment of Windows 3.0.

#### Popular DOS Extenders
Some popular DOS extenders include:
* **DOS4GW** - bundled with the Watcom C/C++ compiler, and used by many popular games such as Doom and Duke Nukem 3D.
* **CauseWay** - an open-source extender that was designed to be small and fast.
* **CWSDPMI** - a DPMI implementation for use with the DJGPP compiler.
* **DOS/32A** - an extender designed for use with the Borland C/C++ compiler.
* **DOS/4G** - a commercial extender used by many games and applications.

---
## DOS Game Modding

### DOS Game Corruption
If You are using a browser-based DOSBox emulator to run your games you can add this bookmarklet to your browser for it to automatically corrupt random memory addresses inside the DOS game:
[jsRTC/jsRTC_for_js-dosbox.txt at master · redscientistlabs/jsRTC](https://github.com/redscientistlabs/jsRTC/blob/master/jsRTC_for_js-dosbox.txt)

---
# Windows
Windows has played a significant role in the world of PC gaming, offering a vast and diverse library of video games spanning various genres and styles. 

In the past, many classic video games were developed for and played on DOS-based PCs. With the introduction of the Windows operating system, gaming transitioned to a more user-friendly and graphical environment, but many DOS games continued to run using compatibility features provided by Windows. 

The Windows platform offers backward compatibility for DOS games, allowing enthusiasts to relive the nostalgia of classic titles from the DOS era. This compatibility, along with the vast library of modern Windows-based games, showcases the ongoing role of Windows as a versatile and enduring platform for gamers.
 
## Windows Executable File Formats (NE,LE and PE)
Over the years there was a number of different file formats for storing executable programs, luckily unless you are dealing with Windows 3.1 games you can safely ignore them all apart from the most recent Portable Executable (PE) file format.

The Executable file formats are: 
* **New Executable** (NE) - Used in Windows 1.0 to Windows 3.1
   - The NE format was the first executable file format used in the early versions of Windows. It was a 16-bit format and was primarily used for Windows 1.0, 2.x, and 3.0. NE files had the .exe extension and were limited to 16-bit code.
* **Linear Executable** (LE) - Used in Windows 3.0 and Windows 3.1 (Win32s)
   - The LE format was introduced with Windows 3.0, and it allowed for limited 32-bit code execution. It was used in conjunction with the Win32s extension to enable 32-bit Windows applications to run on 16-bit Windows. LE files had the .exe extension and were a transitional format during the move to 32-bit computing.
* **Portable Executable** (PE) - Used in Windows NT3.1+
   - The PE format was a significant advancement over the earlier New Executable (NE) and Linear Executable (LE) formats, as it allowed for 32-bit code and brought modern features and extensibility to Windows executables. The use of PE continued in subsequent versions of Windows NT, including Windows NT 3.5, 3.51, and subsequent releases, eventually becoming the standard format for Windows executables in all later Windows operating systems.
 
### New Executable Format
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
 
### Portable Executable
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

### How to dump a Windows executable?
Dumping a Portable Executable (PE) file refers to extracting information from the file, such as its headers, sections, and other metadata. This process is often used for debugging and analysis. You can dump a PE file from the command line using either **Dumpbin** or **objdump**.

**Dumpbin** (Microsoft SDK): If you have the Microsoft Visual Studio Development Tools installed, you can use the dumpbin utility to display information about a PE file. Open a Command Prompt and run the following command:
```bash
dumpbin /headers yourfile.exe
```

**objdump** (GNU Binutils): If you're using a Unix-like environment, the objdump tool from the GNU Binutils can be used to examine PE files. Run the following command:
```bash
objdump -x yourfile.exe
```

### What are Relative Virtual Addresses (RVAs)?
RVA stands for "Relative Virtual Address". It is a term commonly used in the context of Windows Portable Executable (PE) files and refers to the address of a particular location within the virtual address space of a program or a module. RVAs are used to express positions or offsets relative to the base address of a module (executable or DLL) rather than as an absolute memory address.

RVA helps programs find things in their memory without needing to know exactly where everything is stored in memory. It's like a helpful set of directions.

RVA is a fundamental concept in Windows programming, as it allows for position-independent code and the ability to load modules at different base addresses in memory, enhancing the compatibility and flexibility of Windows applications.

---
## NVIDIA Tech Demos
NVIDIA's first tech demo can be traced back to the early years of the company. One notable early demo was showcased in 1999, featuring the GeForce 256, which was NVIDIA's first GPU. This demo highlighted the advanced capabilities of the GeForce 256, such as hardware transform and lighting, which were groundbreaking features at the time. 

Since then, NVIDIA has consistently released tech demos to showcase the capabilities of its new GPU architectures and technologies, these can be downloaded on their website and reverse engineered to see how they work [^3].

If you don't want to download and run each one you can watch this video by **Game Evolutions** showing off every demo from 1999 to 2022:
<iframe width="560" height="315" src="https://www.youtube.com/embed/jVoV2VysX3M?si=meImKQclk6YpLbOr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The UK Magazine Game Maker has an interview with Daniel Hornick, Hubert Nguyen and Curtis Beeson which described the process of creating these demos from concept to 3D art (in Maya) to code (in C++ or MEL) which is worth reading if you can find a copy [^4]. It describes techniques used in the production of the demos **Time Machine**, **Last Chance Gas Ultra**, **Ogre**, **Toys** and **Vulkan**.

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: PSi2 Issue 19
[^2]: [All Sony hardware that they developed - Generation MSX](https://www.generation-msx.nl/company/sony/14/hardware/)
[^3]: [Download NVIDIA Tech Demos - NVIDIA Cool Stuff](https://www.nvidia.com/en-gb/geforce/community/demos/)
[^4]: GameMaker UK Magazine Issue 1 October 2003 by Future Publishing
