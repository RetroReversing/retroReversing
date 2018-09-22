---
layout: post
tags: 
- ps1
- sdk
- assembly
title: Playstation 1 PsyQ Linker (Psylink.exe)
thumbnail: /public/consoles/Sony Playstation.png
image: /public/PS1_PsyQ_Linker.png
permalink: /ps1-psylink
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: Playstation 1 PsyQ Linker (Psylink.exe)
    url: #
recommend: ps1
editlink: /ps1/PS1 PsyQ Linker.md
---

## PSY-Q Linker Files
The PS1 linker files for the game chicken run by Blitz Games were made publicly available and are available for both the release and the demo version: `crtest.lnk` and `crdemo.lnk` respectivly. 

### So what are these control (.lnk) files?
Control files are files that help the linker to decide where in memory a specific binary should be placed, they can be given any extension but using .LNK was common practise as the official PSYQ development samples used this file naming convention.

So if you have a .lnk file you can figure out the structure of a playstation executable, which libraries were used and what the original source file names would have been.

### How would a developer use .lnk files in their workflow?
You can pass a .lnk file as a control parameter to the PSX Linker (PSYLINK.EXE) like so:
```c
$(PSYLINK) /l $(LIBISL) /psx /wo /v /c /strip /nostriplib @crdemo.lnk,crdemo.cpe,crdemo.sym,crdemo.map
```

The use of the @ operator is explained in the PSX developer documentation:
```
Long command lines can be stored in control files.  By using an
'@' sign in front of the control file name the contents of the
control file can be embedded in the command line.

The contents of the control file can be split across several lines
without the need to use any special characters.  An end of line in
a control file is treated as a space.

You can specify as many control files as you want on the command
line and a control file can even reference another control file.
```

### ORG directive
The ORG directive is normally used is assemblers/linkers to choose a specific location for certain pieces of code. For the PS1 the executable is normally started at location 0x00018000 but for demos it seems to be 0x80018000, not sure why.
```asm
;        org     $00018000
; 18000, this is a demo disk...
        org     $80018000
```

### REGS directive
The REGS directive sets the initial value of registers, in the case below this will set the program counter to the location of `__SN_ENTRY_POINT` which is a symbol defined in the standard library `SNLIB.LIB`.
```asm
  		regs    pc=__SN_ENTRY_POINT	
```

### Group directive
You can also specify a section group such as text or bss here. In this executable we only have text for code and bss for small static variable init. Also it looks like they used to have a grouo called dcache but it was commented out.
```asm
text    group

; I've removed the dcache area so that it's definitely all available
; for the model plotter. So just be careful to use it for leaf-routine
; optimisations only, rather than the placement of moderately commonly used
; globals (as was the case in the shell)  - Fred

;dcache  group   obj(0x1f800000),size(0x400)

bss     group   bss	
```

### Overlays
The PSYQ development kit offered a uniqu feature called `Overlays` which allowed developers to switch out parts of the executable at run time, meaning they could load different executable code into memory at different times. This allowed better use of memory as developers were not limited to just the space of RAM.

Chicken run demo didn't use overlays but the main released game did, it looks like they made effective use of this feature by splitting the game into subgames and using the same section of memory (vid_ovl) to load the subgame in depending on where the player is.
```asm
;overlay1                group   file("overlay1.bin")                            ; Test 1
;overlay2                group   over(overlay1),file("overlay2.bin")     ; Test 2
;vid_ovl                 group   over(overlay1),file("vid_ovl.bin")    ; video play

vid_ovl                 group   file("vid_ovl.bin")      ; video
sub1_ovl                group   over(vid_ovl),file("sub1_ovl.bin")     ; subgames
sub2_ovl                group   over(vid_ovl),file("sub2_ovl.bin")     ; subgames
sub4_ovl                group   over(vid_ovl),file("sub4_ovl.bin")     ; subgames
deb_ovl                 group   over(vid_ovl),file("deb_ovl.bin")      ; debug menu
; exp_ovl			group	over(overlay1),file("exp_ovl.bin")	; explore game
```
Also of interesting note is there is a debug menu in the game that occupies this same region of memory, does this mean the debug menu doesn't apply when in the sub games? Also what happened to sub3? they went straight to subgame 4...

### Section directive
The section directive allows youto specify the order of sections within the executable, if a section is missed out such as "icontim" it will be added to the start.

So for example if in the example below the `section	.bss,bss` was missed out, it would still create that section but it would be before the other sections.
Example:
```asm
;        section.4096 align4k.text,text
;        section align4k.*,text
;        section align4k.bss,bss
;        section align4k.sbss,bss


	section .*,text
	section	.sdata,text
	section	.sbss,bss
	section	.bss,bss

	section vid_ovl.*, vid_ovl
	section sub1_ovl.*, sub1_ovl
	section sub2_ovl.*, sub2_ovl
	section sub4_ovl.*, sub4_ovl
	section deb_ovl.*, deb_ovl
```

You can see the difference that the section directive makes by inspecting the map file generated, change the order of sections or comment some out to see what the default behaviour is.

Note that it will still group sections together based on the group directive, so the text sections will be together and the bss sections will be grouped together.

### INCLUDE directive
The Include directive is used to include a specific compiled C/asm object, normally produced by a C compiler, this will allow specifying the rough order that the objects should be linked in the executable, but note that the linker can reorder during optimisation so this order is not guaranteed!

Example based on the Chicken Run crdemo.lnk:
```asm						   
;include "fixed.obj"
;include "powerbar.obj"
;include "fx.obj"
;include "map_asm.obj"
;"Particle" was being initialised, but never used for anything
;include "particle.obj"

        include "demostub.obj"

        include "dualshock.obj"
        include "pad.obj"
;        include "options.obj"
;       include "gallery.obj"
;        include "cntrscn.obj"

        include "fmademo.obj"
        include "inv_demo.obj"
        include "startup.obj"
        include "credits.obj"
        include "timer.obj"
;        include "main.obj"
        include "maindemo.obj"
        include "actor.obj"

;        include "lev_flow.obj"
        include "map_view.obj"
        include "map_play.obj"

        include "bff_load.obj"
        include "map_draw.obj"
        include "snapshot.obj"
        include "debris.obj"
        include "lights.obj"
        include "puzzles.obj"
        include "collide.obj"
        include "maths.obj"
        include "camera.obj"

        include "enemies.obj"

        include "platform.obj"
        include "platcoll.obj"


        include "overlays.obj"
        include "scenics.obj"
        include "sound.obj"

        include "cr_asm.obj"
        include "sptstream.obj"
;        include "card.obj"

        include "loadsnd.obj"
        include "help.obj"
        include "deth.obj"
        include "demo.obj"

        include "nme_dogs.obj"	;,exp_ovl
        include "nme_mrst.obj"	;,exp_ovl
        include "route.obj"     ;,exp_ovl
        include "sprouts.obj"	;,exp_ovl
        include "charactr.obj"	;,exp_ovl
;        include "curtains.obj"	;,exp_ovl

        include "language.obj"
        include "map.obj"
        include "pause.obj"


;include "stilts.obj"
;include "station.obj"
;include "fxtest.obj"

        include "subgame.obj"

;        include "menu.obj",deb_ovl
;        include "viewer.obj",deb_ovl
;        include "cus_dyn.obj",deb_ovl
;        include "cus_full.obj",deb_ovl


;        include "dogchase.obj",sub1_ovl
        include "fireworks.obj"
;        include "catapult.obj",sub2_ovl
;        include "seesaw.obj",sub2_ovl
;        include "engine.obj",sub4_ovl
;        include "construct.obj",sub4_ovl
;        include "wings.obj",sub4_ovl
;        include "egglaying.obj",sub4_ovl
;        include "crate.obj",sub4_ovl

;include "overlay1.obj", overlay1
;include "overlay2.obj", overlay2




; Things that have been adapted from the ISL libs, rather than
; actually using them

        include "custom.obj"
        include "custom2.obj"
        include "cus_anim.obj"

;        include "islvideo.obj",vid_ovl
        include "islutil.obj"
        include "incbin.obj"
        include "islxa.obj"
        include "islfile.obj"
		include "islfont.obj"
```

### Inclib Directive
The inclib directive is very similar to the include directive but instead links in a full library of files.
Example from Chicken Run source code:
```asm

; The ISL libraries
; "Debug" or "Release" versions are switched betwen in the makefile
; by cunning use of environment variables.

        inclib  "islmem.lib"
        inclib  "isltex.lib"
        inclib  "isllocal.lib"
        inclib  "islpad.lib"
        inclib  "islsfx2.lib"
        inclib  "islcard.lib"
        inclib  "islcard.lib"

; -- REMOVED ISL LIBS --
; -- video has the multi-language stuff --
; -- psi is now in custom.c --
; -- util has had it's un-flat-packer rewritten --
; -- sound is now islsfx2 --
; -- xa has a fix for "current sector" establishment
; -- file has an assert check for XA playing
; -- islfont now copes with "OE" and "oe" for French use

;        inclib  "islvideo.lib"
;        inclib  "islutil.lib"
;        inclib  "islpsi.lib"
;        inclib  "islsound.lib"
;        inclib  "islxa.lib"
;        inclib  "islfile.lib"
;        inclib  "islfont.lib"

; -- Sony Libs --

       ;inclib  "libsn.lib"
       ;inclib "c:\psx\crtest\source\none2.lib"

; Fred's cunning plan:
; PSX\ISL\LIB\DEBUG\NONE2.LIB is actually LIBSN.LIB
; PSX\ISL\LIB\RELEASE\NONE2.LIB is the real thing
	   inclib none2.lib

	inclib  "libapi.lib"
	inclib  "libpad.lib"
	inclib	"libmcrd.lib"
	inclib	"libcard.lib"
	inclib  "libgpu.lib"
	inclib  "libgs.lib"
	inclib  "libgte.lib"
	inclib  "libcd.lib"
	inclib  "libetc.lib"
	inclib  "libspu.lib"
	inclib  "libc2.lib"
        inclib  "libds.lib"
;        inclib  "libpress.lib",vid_ovl
```

# OBJ File format
When you pass -c to `CCPSX.EXE` it can generate a compiled object for each of the source files, this is very useful when you have a make file set up using `PSYMAKE.EXE`, and you can be reasonably confident most games were developed with some sort of build system such as psymake.

The resulting obj files are in the LINK 2 format and can be dumped using the PSYQ development tool called `DUMPOBJ.EXE`, you will have to run this in DOSBOX as it is a 16-bit executable.
```bash
DUMPOBJ.EXE hello.obj /c >hello_dumped.txt
```

This will produce output similar to:
```
Header : LNK version 2
46 : Processor type 7
16 : Section symbol number 1 '.rdata' in group 0 alignment 8
16 : Section symbol number 2 '.text' in group 0 alignment 8
16 : Section symbol number 3 '.data' in group 0 alignment 8
16 : Section symbol number 4 '.sdata' in group 0 alignment 8
16 : Section symbol number 5 '.sbss' in group 0 alignment 8
16 : Section symbol number 6 '.bss' in group 0 alignment 8
16 : Section symbol number 7 '.ctors' in group 0 alignment 8
16 : Section symbol number 8 '.dtors' in group 0 alignment 8
28 : Define file number 9 as "HE\HELLOWORLD.C"
6 : Switch to section 2
6 : Switch to section 1
2 : Code 14 bytes

0000:48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21 00 

6 : Switch to section 2
6 : Switch to section 2
6 : Switch to section 2
2 : Code 76 bytes

0000:e8 ff bd 27 14 00 bf af 10 00 be af 21 f0 a0 03 
0010:00 00 00 0c 00 00 00 00 00 00 04 3c 00 00 84 24 
0020:00 00 00 0c 00 00 00 00 21 10 00 00 00 00 00 08 
0030:00 00 00 00 21 e8 c0 03 14 00 bf 8f 10 00 be 8f 
0040:18 00 bd 27 08 00 e0 03 00 00 00 00 

10 : Patch type 74 at offset 10 with [b]
10 : Patch type 82 at offset 18 with (sectbase(1)+$0)
10 : Patch type 84 at offset 1c with (sectbase(1)+$0)
10 : Patch type 74 at offset 20 with [c]
10 : Patch type 74 at offset 2c with (sectbase(2)+$34)
6 : Switch to section 2
60 : End SLD info at offset 0
14 : XREF symbol number b '__main'
14 : XREF symbol number c 'printf'
12 : XDEF symbol number a 'main' at offset 0 in section 2
74 : Function start :
  section 0002
  offset $00000000
  file 0000
  start line 0
  frame reg 30
  frame size 24
  return pc reg 31
  mask $c0000000
  mask offset -4
  name main
76 : Function end :
  section 0002
  offset $0000004c
  end line 0
0 : End of file
```

Notice that in the example we have a definition (XDEF) for the `main` function and we are referencing (XREF) `printf` from the standard libraries.

The code for the function is printed in hexidecimal but you can convert this to assembly using a disassembler.

# LIB File format
A library file is just a collection of object files in the same format as above. In fact a lib is just an archive of them! The PSYQ development kit comes with a set of official sony libraries that are used in almost every retail game released.

You can print the contents of a library (.lib) file using the PSYQ development tool called `PSYLIB.EXE` like so:
```bash
PSYLIB.EXE \l LIBSN.LIB
```

This will result in output like so:
```c
PsyLib version 2.04

Module     Date     Time   Externals defined

OPEN     20-09-95 20:44:22 PCopen 
CLOSE    20-09-95 20:44:22 PCclose 
LSEEK    20-09-95 20:44:22 PClseek 
CREAT    20-09-95 20:44:22 PCcreat 
SNREAD   20-09-95 20:44:22 _SN_read 
SNMAIN   20-09-95 20:44:22 __bss __heapsize __SN_ENTRY_POINT __bsslen __data 
                           __main __text __datalen __textlen 
                           __do_global_dtors __heapbase 
```
Each Module would be a .c/.asm file compiled into an object file and then added to the library using the PSYLIB /a option. You can extract all the object files by pasing the `/x` command line flat to `PSYLIB.EXE`.


