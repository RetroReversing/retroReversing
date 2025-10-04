---
layout: post
tags: 
- n64
- sdk
- snsystems
title: SN64 - Nintendo 64 Software Development Kit (SDK)
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 SN64 Software Development Kit.jpg
permalink: /sn64-sdk-sn-systems
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: SN64 - Nintendo 64 Software Development Kit (SDK)
    url: #
recommend: n64
editlink: /consoles/n64/SN64_SDK.md
updatedAt: '2020-06-27'
---

SN64 was a software development kit for the Nintendo 64 created by `SN Systems` and was especially popular with 3rd party game developers.

# Introduction
<section class="postSection">
    <img src="/public/N64/SN64_Devkit_By_ChrisCor.jpg" class="wow slideInLeft postImage" />
    <img src="/public/N64/SN64_Devkit_By_ChrisCor2.jpg" class="wow slideInLeft postImage" />
<div markdown="1">
Sn Systems are a company that have always specialised in creating excellent tools for game developers. Their most popular product during the N64 lifecycle was called PSYQ and targeted Sony PlayStation and Sega Saturn consoles. 

It was inevitable that SN Systems would create a SDK for the newly announced Ultra 64 to target the 3rd party development market as an alternative to Nintendos own offering. 

This made it a really popular choice for 3rd party game developers as it was slightly easier to port code between the consoles using the SDK.

SN64 went under a multitude of different names as SN Systems were constantly re-branding it, these include:
* **N64Win95** - Probably a popular name before the official PartnerN64 came out
* **SN64** - Most common name
* **Psy-Q N64** - Name in some of the development tools such as Assembler **asmn64.exe** from December 1993
* **Pro-DG** - To align with their other development tools late in the lifecycle of the N64.

Images on the left of the Development kit hardware are courtesy of ChrisCor on Twitter who kindly gave permission for us to include his photos on this page you can check out his Twitter here: [ChrisCor (@Jackhead_ASG) / Twitter](https://twitter.com/Jackhead_ASG) [^1].

</div>
</section>

---
# Contents of the SDK (106)
An early version of SN64 was released in the "Oman Archive" with a date of February 1997. It wasn't specifically stated but the files at the top level of the Oman archive with the Feb 97 date are all from the SN64 development kit.

This SDK is version 106 which is the 10th release and the 6th patch and was released in early 1997.

## Index files
These files are legitimately useless, why? Well they should list the contents of the folder but they actually only list themselves. They don't give a single other filename that should be in the directory, total waste of space.
`00_INDEX.HTM`
`00_INDEX.TXT`

## Documentation Files

Name | Description
---|---
README.zip | Contains documentation for the Psy-Q debugger (Version 2, Release 10, Patch Level 6) in TXT and RTF formats 

## Windows Executables

Name | Description
---|---
SETCSUM.zip | Contains SETCSUM.exe
SETCSUM.exe | Program to Set checksum and entry point for your ROM image
PSYLINK3.zip | Contains psylink32.exe
PSYLINK32.exe | The PSYQ 32 bit linker
PSYLIB2.zip | Contains PSYLIB2.exe
PSYLIB2.exe | The PSYQ SDK Librarian
ELFCONV.zip | Contains ELFCONV.exe from December 1996
ELFCONV.EXE | Convert resulting ELF to N64 executable format
CCN64.zip | Contains CCN64.exe from January 1997 
CCN64.exe | C compiler for N64
REL106.exe | PSYQ Release setup
PAT106.exe | PSYQ Patch setup
N64104.exe |
LOADBIOS.exe | Program to load BIOS on to Sn64 cartridge 

---
## GNUN6432.zip - GNU GCC 2.7.2 for Nintendo 64
The **GNUN6432.zip** archive contains the Psy-Q port of the GNU C/C++ compiler toolchain for Nintendo 64.

It was based on **GCC 2.7.2** and this specific build from SN Systems was `2.7.2.SN32.3.7 Build 0001` and they were compiled on the **19th February 1997**. 

These are the files it contains:
* **CC1N64.exe** (1.4MB) - The GNU C Compiler based on version **2.7.2**for Nintendo 64
* **CC1PLN64.exe** (1.8MB) - The GNU C++ Compiler based on version **2.7.2** for Nintendo 64
* **CPPN64.exe** (115KB) - The The C Preprocessor (GNU CPP) based on version **2.7.2** for Nintendo 64

They all contain the string `[AL 1.1, MM 40]` near the version information just after **Nintendo 64**, but not quite sure what this means.

---
## N6432.zip - SN64 SDK from December 1996
This archive contains the **32bit SN64 SDK** from December 1996 that run under **Windows 95**. Many of these are the same as the files in the Windows Executables section but from a slightly earlier date.

These files would normally be located in the developers **C:\** drive at location `c:\n64\bin32`.

The Full List of files contained in the archive are included below:

| Name          | Modified   | Size   | Description                            |
| ------------- | ---------- | ------ | ------------------------------- |
| TBIOS2.COM    | 28/11/1996 | 17 KB  | BIOS replacement for `psybios` for N64 version only  |
| asmn6432.exe  | 12/12/1996 | 134 KB | 32bit N64 Assembler for windows `Psy-Q N64 Version 2.33`  |
| asn6432.exe   | 12/12/1996 | 89 KB  | Another assembler `Psy-Q ASN64 version 2.55`   |
| ELFCONV.EXE   | 12/12/1996 | 57 KB  | Convert resulting ELF to N64 executable format |
| PSYMAKE.COM   | 12/04/1995 | 19 KB  | Fork of Make by SN Systems known as PSYMake (runs makefiles) |
| RUN.EXE       | 24/10/1996 | 5 KB   | Standard PSYQ program to load executables on to cartridge   |
| CCN6432.EXE  | 29/11/1996 | 64 KB  | N64 C compiler (N64 version 3.01) |
| KANJI.COM     | 30/06/1995 | 512 B  | Program that converts Kanji from one format to another |
| RUNCART.EXE   | 22/11/1996 | 12 KB  | Program that loads a bios on to the SN64 cartridge that plays the pass through game connected to the cartridge   |
| PSYLINK32.EXE | 02/12/1996 | 70 KB  | PSYQ Linker |
| SETCSUM.EXE   | 28/11/1996 | 37 KB  | Program to Set checksum and entry point for your ROM image |
| LOADBIOS.EXE  | 22/11/1996 | 14 KB  | Program to load BIOS to the SN64 cartridge |
| PSYLIB2.EXE   | 03/12/1996 | 52 KB  | PSYQ Librarian |
| PSYQ.INI      | 02/12/1996 | 132 B  | Configuration INI file for the PSYQ SDK |
| DBUNG64.EXE   | 20/11/1996 | 161 KB | ?   |
| README.N64    | 25/11/1996 | 637 B  | Standard Readme with information about the files   |
| test          | ---        | 23 KB  | Folder containing example project |


There are two different assemblers in the same zip file:
*  Psy-Q N64 Version 2.33
*  Psy-Q ASN64 version 2.55

Not quite sure what the difference is, but they are definetlky not just different versions of the same assembler, they have different functionality.

### asn6432
**asn6432.exe** was built using the Watcom C/C++ compiler and its 32-bit runtime library, the usage information is below:
```
Psy-Q ASN64 version 2.55
Copyright (c) 1988-1996 S.N. Systems Software Limited,  all rights reserved
usage : asn64 [-option ...] inputfile
```

There is a reference to asn6432 inside the c-compiler **ccn6432.exe**.

### asmn64
**asmn64** was built using the Watcom C/C++ compiler and its 32-bit runtime library, the usage information is below:

```bash
Psy-Q N64 version 2.33
Copyright (c) 1988-1996 S.N. Systems Software Limited,  all rights reserved
USAGE : asmn64 /options source,object,symbol,listing,temporary file
Options : /c              enable listing of conditioned out lines
          /d              debug mode - do not run
          /e symb=value{;symb=value}   equate symbol(s)
          /g              write non-global symbols to linker object file
          /i              display information window
          /j path         specify include file search path
          /k              allow use of ifeq, etc.
          /l              produce linkable output file
          /m              expand macros in listing file
          /o opts         set assembler options/optimisations
          /p              produce pure binary output file
          /ps             produce binary file in s-record format
          /q              run quietly
          /w              write equates to symbol/linker file
          /x              treat undefined symbols as XREFs
          /z              include line number info in linker file
          /zd             generate source level debug info
Assembler options (first of +/- specified is default) :
          ae+/-           automatically align halfwords and words
          an-/+           allow alternate number format
          at+/-           allow assembler to use temp register
          c-/+            case sensitivity
          d-/+            descope local labels on equ, set, etc.
          e+/-            print lines containing errors
          f<name>         specify section to hold floating point constants
          h-/+            automatic hazard removal (ISA 1 only)
          l-/+            use '!' as leading character for local labels
          l<char>         make <char> the local label character (not + or -)
          m+/-            enable/disable macro instructions
          n-/+            insert nop in branch delay slots
          r-/+            allow $ prefixed register names
          s-/+            treat equated symbols as labels
          w+/-            print warnings
          we-/+           treat warnings as errors
          ws-/+           allow white space in operands
          v-/+            write local labels to symbol file
          x-/+            assume xrefs are in the section they are declared in
```

### ccn6432 - Psy-Q CC N64 version 3.01
The SN Systems versions of the GNU C-compiler known as **Psy-Q CC** is **ccn6432.exe** (64KB), it was compiled using the Microsoft Visual C++ (uses the Runtime Library) on 29th November 1996. It is likely using a version of GCC between 2.5.x and 2.7.x but it is hard to tell, here is the usage information:

```bash
N64 version 3.01
Usage: %s [options / files]
Main options :
 -c          compile to object file
 -S          compile to assembler source
 -E          pre-process only
 -v          print executed commands
 -o FILE     specify output file
 -l LIBRARY  specify library to link in
 -L DIR      specify directory to search for libraries
 -I DIR      specify directory to search for include files
 -D NAME     define pre-processor macro
 -D NAME=DEF define pre-processor macro to string DEF
 -U NAME     undefine pre-processor macro
 -g          generate debugging information
 -ON         set optimisation level N : O0=none, O3=max
 -f...       compiler option/optimisation - see compiler documentation
 -m...       machine specific option - see compiler documentation
 -ansi       check code for ANSI compliance
 -Wall       enable all warnings
 -w          disable all warnings
 -W...       other warning control - see compiler documentation
 -Wp,...     specify pre-processor option(s)
 -Wa,...     specify assembler option(s)
 -Wl,...     specify linker option(s)
 -X...       specify linker option (same as -Wl,...)
 -nostdlib   do not link in the standard libraries
 -save-temps preserve intermediate temporary files
Associated expected tools: 
C preprocessor : %-10s (in PSYQ.INI 'compiler_path' directory)
C compiler     : %-10s (in PSYQ.INI 'compiler_path' directory)
C++ compiler   : %-10s (in PSYQ.INI 'compiler_path' directory)
Assembler      : %-10s (in PSYQ.INI directory)
Linker         : %-10s (in PSYQ.INI directory)
```


### Test folder inside N6432.zip
There is a folder inside the zip simply called `test` that contains a basic initialise example for N64.

| Name          | Modified   | Size   | Description                            |
| ------------- | ---------- | ------ | ------------------------------- |
| PSYQ.OBJ      | 26/11/1996 | 11 KB  | Compiled Object file |
| PSYQ.H        | 29/11/1996 | 34 B   | Header file that only exports one function called `init_debug` |
| TEST.LNK      | 29/11/1996 | 4000 B | Link file configuration for the order in which to link files into the final executable |
| MAKEFILE.MAK  | 29/11/1996 | 294 B  | Makefile to run the example |
| SNMAIN.S      | 29/11/1996 | 814 B  | Assembly code for the entry point for the game |
| TEST.C        | 12/12/1996 | 805 B  | Simple C code to initialise the N64 |
| PSYQDBG.OBJ   | 12/12/1996 | 9 KB   | Compiled Object file (debug version) |


---
# References
[^1]: [ChrisCor (@Jackhead_ASG) / Twitter](https://twitter.com/Jackhead_ASG)
