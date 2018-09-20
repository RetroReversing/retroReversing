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

### INCLUDE directive

The rest of the contents of crdemo.lnk is:
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
