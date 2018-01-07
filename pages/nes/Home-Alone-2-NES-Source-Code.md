---
title: Home Alone 2 NES Source Code
layout: post
author: amorri40
permalink: /home-alone-2-nes-source-code/
tags:
- nes
- games
recommend: nes
youtube: cqsCqG-uako
source-id: 1H2w_1W9uv3uGGAasoNzfTNVo_eezOpEQY5comaUNsXk
published: true
---
## Home Alone 2 NES Source Code

The Source Code for "Home Alone 2" was released by Frank Cifaldi from GameHistoryorg (**[@frankcifald**i](https://twitter.com/frankcifaldi)).

The same Game Engine seems to have been used in at least 5 games developed by [Imagineering](https://en.wikipedia.org/wiki/Imagineering_(company)) for the Nintendo Entertainment System.

* Attack of the Killer Tomatoes

* Simpsons 2 (not sure if Bart vs. the Space Mutants or *Bart vs. the World* or *[Bartman Meets Radioactive Ma*n](https://en.wikipedia.org/wiki/Bartman_Meets_Radioactive_Man))

* Barbie

* Swamp Thing

* Home Alone 2

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_0.gif)![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_1.png)

### UTL Directory (Utility directory)

Thanks to "**freem**" on the NesDev forums we have a good description of the tools available in the UTL directory of the source code.

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>A65.EXE</td>
    <td>6502 NES Assembler 
Usage:     a65 [path]infile[.a65] [[path]outfile[.lod]]</td>
  </tr>
</table>


```

Most likely; here are some results after looking through the files in the "UTL" directory:

* A65.EXE looks to be a 6502 assembler.

* CMATCH.EXE and CMERGE.EXE are probably dev tools, but I'm not sure what they're for.

* CNGNIN.EXE: "This utility replaces the color palette information in dest.nin with the palette information from source.nin"

* CSM.EXE: "merge part of font from source to destination."

* DL.EXE, if I had to guess, seems to be used for downloading data to a development cartridge...

* L2G.EXE: "LBM2GRP - LBM to GRP Converter Rev 1.0 (1/22/92)" (as a USA company, that'd be 1992/01/22 under YYYY/MM/DD)

* L2N.EXE: "LBM2NIN - lbm to nin Converter Rev 1.0 June 7, 1991" (Probably the main tool used for graphics conversion, given the number of LBM files in the archive)

* LOD2BIN.EXE: Converts .LOD to binary files, presumably.

* LOD2RAW.EXE: "LOD2RAW - .LOD to .RAW File Conversion Utility Rev 0.0"

* MW.EXE: "MakeWorld" graphical program (uses a mouse)

* NIN2LOD.EXE: Converts .NIN files to .LOD files, whatever each of those are.

* NIN2OBJ2.EXE: Converts a .NIN to assembler source?

* NIN2RAW.EXE: Converts .NIN files to a .RAW file.

* TXTCMP.EXE: "TXTCMP - Text Compression Rev 1.0"

* RAWMRG.EXE: "RAWMRG - Raw Screen Map Merge Rev 0.1"

* RLCMP.EXE: "RLCMP - Run-Length Compression Rev 0.1"

* TXTCMP.EXE: "TXTCMP - Text Compression Rev 1.0"

```

[[https://forums.nesdev.com/viewtopic.php?f=5&t=14339](https://forums.nesdev.com/viewtopic.php?f=5&t=14339) ]

### File Formats

The file formats used in the source are listed in the following table:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>.NIN</td>
    <td>Nintendo image format?</td>
  </tr>
  <tr>
    <td>.RAW</td>
    <td></td>
  </tr>
  <tr>
    <td>.LOD</td>
    <td>I think this is compiled object files from assembly but not sure why its called LOD</td>
  </tr>
  <tr>
    <td>.LBM</td>
    <td></td>
  </tr>
  <tr>
    <td>.GRP</td>
    <td></td>
  </tr>
  <tr>
    <td>.SRC</td>
    <td>6502 Assembler Header files?</td>
  </tr>
  <tr>
    <td>.A65</td>
    <td>6502 Assembler Source Code Implementation files</td>
  </tr>
  <tr>
    <td>.CEW</td>
    <td>6502 Assembler Source Code but with some minor differences</td>
  </tr>
</table>


### BASE.A65 vs BASE.CEW

There seems to be three different versions of the "BASE" file, all with minor differences. I'm trying to figure out what CEW stands for as I presume the main build is the BASE.A65 file. 

It looks like BASE.CEW is older than its .A65 sibling as the A65 version has additional code plus some of the CEW code commented out.

The third file is BASE.OLD which presumably is just an older version of BASE.A65 and not that interesting.

``` diff

index 3846790..31a1b55 100644

--- a/BASE.CEW

+++ b/BASE.A65

@@ -251,10 +251,10 @@ l0		sta	ditirq

 		tya

 		pha

 

-		ldx	irq_ha

-		bne	l3

-

-		ldx	#11

+;		ldx	irq_ha

+;		bne	l3

+;

+		ldx	#8

 l1		dex

 		bne	l1

 

@@ -263,34 +263,44 @@ l1		dex

 ;		lda	#$e0

 ;		sta	vramadr

 

-	lda	#128+2

-	sta	pointer

-	lda	#27*4

-	sta	regdata

-	lda	#128+3

-	sta	pointer

-	lda	#27*4

-	sta	regdata

-	lda	#128+4

-	sta	pointer

-	lda	#27*4

-	sta	regdata

-	lda	#128+5

-	sta	pointer

-	lda	#27*4

-	sta	regdata

-	

+;	ldy	#27*4

+;	ldx	#128+2

+;	stx	pointer

+;	sty	regdata

+;	inx

+;	stx	pointer

+;	sty	regdata

+;	inx

+;	stx	pointer

+;	sty	regdata

+;	inx

+;	stx	pointer

+;	sty	regdata

+;	

 		

-	sta	mmc3reg2

-	sta	mmc3reg3

-	sta	mmc3reg4

-	sta	mmc3reg5

+;	sty	mmc3reg2

+;	sty	mmc3reg3

+;	sty	mmc3reg4

+;	sty	mmc3reg5

 

-		jmp	l9

+;		jmp	l9

 

 l3		ldx	irq_ha	;which bank to switch in

 		ldy	irqtbl,x

 		

+		cpx	#0

+		bne	l4

+		ldx	#128+0

+

+		stx	pointer	

+		sty	regdata

+		sty	mmc3reg0

+		inx

+		stx	pointer	

+		sty	regdata

+		sty	mmc3reg1

+

+l4

 		ldx	#128+2

 

 		stx	pointer	

@@ -355,7 +365,7 @@ irqtbl

 	db	(f_jail1_w)*4

 	db	(tape_w)*4

 	db	(caught_w)*4

-

+	db	(movie_w)*4

 ;-------------------------------------------------------------------------

 

 spritdma

```

