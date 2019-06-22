---
layout: post
tags:
- sdk
- compilers
- saturn
- sega
title: Sega Saturn Hitachi Compiler Toolchain
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn Hitachi Compiler Toolchain.jpg
permalink: /sega-saturn-hitachi-compiler/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Hitachi Compiler Toolchain
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnHitachiToolchain.md
---

Hitachi released a toolchain for Sega Saturn development, this is an alternative to the GNU toolchain also available from Sega.

# Executables

Executable | Description
---|---
asmsh.exe | SH Assembler
binadj.exe |
cnvs.exe |  SYSROF STYPE OBJECT CONVERTER
dwfcnv.exe | DWARF absolute-object file converter
elf2bin.exe | ELF2BIN: ELF -> binary converter Ver. 0.82
elfcnv.exe | SYSROF -> ELF/DWARF Convert Tool Ver. 1.0D
rof2bin.exe | SYSROF-BINARY TRANSLATOR Ver. 2.51 for Windows95
lnk.exe | H SERIES LINKAGE EDITOR Ver. 6.0A
s2bin.exe | 
lbr.exe | H SERIES OBJECT LIBRARIAN Ver. 2.0A
shc.exe |  SH SERIES C/C++ Compiler Ver. 5.0(Release31)
shcprep.exe | 
shcmdl.exe | 
shctil.exe | 
shcasm.exe | 
shcprm.exe | 
shcpep.exe | 
shcgen.exe |  
shcppfrt.exe | 
shcfrt.exe | 
shcpp.exe | SH SERIES C/C++ Compiler Ver. 5.0(Release31)


## Dwarf Converter (DWFCNV.exe)
Example usage:
```
dwfcnv.exe -browser="$(OBJDIR)\cppdtb\$(*F).dtb" -sysrof="$(OBJDIR)\$*.o" "$(OBJDIR)\$*.obj"
```

## SHC (shc.exe)
SHC is the C compile provided for the SH processors by Hitachi.


---
# Hitachi Libraries

Name | Description
---|---
SHCNPIC.LIB  | Library not compatible with position-independent code for SH7600 
 

## LBR (Librarian)
The Hitachi Librarian is used for creating and modifying static library files `.lib`, possibly in SYSROF format.

---
# ABS Files
ABS files are the compiled and linked form of the Sega Saturn same programs compiled with the hitachi toolchain.

The format could be SYSROF:
File Header: 80 21 00 80

Seems to contain OBJ files, possibly similar to COFF or ELF in concept but a completely different format.

## SYSROF object module format
Where is the spec for the SYSROF object module format?


### SysRof in dreamcast
There are a few hints that sysrof and the Hitachi compiler are used for dreamcast development such as Scream Dreamcast game: [Scream/Makefile at 62fbf14bb46ea9f6b7cf5a34078d7a81214cbd6e · RedRingRico/Scream](https://github.com/RedRingRico/Scream/blob/62fbf14bb46ea9f6b7cf5a34078d7a81214cbd6e/Source/Makefile) 
