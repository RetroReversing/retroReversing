---
title: Home Alone 2 NES Source Code
layout: post
permalink: /home-alone-2-nes-source-code/
tags:
- nes
- games
- sourcecode
recommend: nes
youtube: cqsCqG-uako
image: https://img.youtube.com/vi/cqsCqG-uako/0.jpg
editlink: /nes/Home-Alone-2-NES-Source-Code.md
updatedAt: '2018-09-19'
---

# Home Alone 2 NES Source Code

The Source Code for "Home Alone 2" was kindly released by Frank Cifaldi from GameHistoryorg ([@frankcifald](https://twitter.com/frankcifaldi)).

# Games on the same engine
The same Game Engine seems to have been used in at least 5 games developed by [Imagineering](https://en.wikipedia.org/wiki/Imagineering_(company)) for the Nintendo Entertainment System.

* Attack of the Killer Tomatoes
* Simpsons 2 (not sure if Bart vs. the Space Mutants or *Bart vs. the World* or *[Bartman Meets Radioactive Ma*n](https://en.wikipedia.org/wiki/Bartman_Meets_Radioactive_Man))
* Barbie
* Swamp Thing
* Home Alone 2

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_0.gif)![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_1.png)

---
# Source Code
This section will analyze the source code for Home Alone 2 on the Nintendo Entertainment system.

## Full Source Code structure

<div id="filelist1" markdown="1">
* /HomeAlone2_NES_Src/ENG/ENGEQU.SRC
* /HomeAlone2_NES_Src/ENG/SCRPVAR.SRC
* /HomeAlone2_NES_Src/ENG/STATEQU.SRC
* /HomeAlone2_NES_Src/ENG/TEREQU.SRC
* /HomeAlone2_NES_Src/ENG/OBJCODE.SRC
* /HomeAlone2_NES_Src/ENG/FILEINFO.FI
* /HomeAlone2_NES_Src/ENG/PRNTCODE.GME
* /HomeAlone2_NES_Src/ENG/ENGPGF.SRC
* /HomeAlone2_NES_Src/ENG/BGMOD.SRC
* /HomeAlone2_NES_Src/ENG/SPMOVE.SRC
* /HomeAlone2_NES_Src/ENG/WLDCOM.SRC
* /HomeAlone2_NES_Src/ENG/STUFVAR.SRC
* /HomeAlone2_NES_Src/ENG/TERPGF.SRC
* /HomeAlone2_NES_Src/ENG/ENGVAR.SRC
* /HomeAlone2_NES_Src/ENG/SCRPEQU.SRC
* /HomeAlone2_NES_Src/ENG/STATVAR.SRC
* /HomeAlone2_NES_Src/ENG/COLLCODE.SRC
* /HomeAlone2_NES_Src/ENG/STUFPGF.SRC
* /HomeAlone2_NES_Src/ENG/WLDTABS.SRC
* /HomeAlone2_NES_Src/ENG/TERVAR.SRC
* /HomeAlone2_NES_Src/ENG/CAMCODE.SRC
* /HomeAlone2_NES_Src/ENG/STUFCODE.SRC
* /HomeAlone2_NES_Src/ENG/SCRPPGF.SRC
* /HomeAlone2_NES_Src/ENG/TERCODE.SRC
* /HomeAlone2_NES_Src/ENG/STUFEQU.SRC
* /HomeAlone2_NES_Src/ENG/HOTSCODE.SRC
* /HomeAlone2_NES_Src/ENG/COLLVAR.SRC
* /HomeAlone2_NES_Src/ENG/STTCOD.SRC
* /HomeAlone2_NES_Src/ENG/WLDPGF.SRC
* /HomeAlone2_NES_Src/ENG/STTVAR.SRC
* /HomeAlone2_NES_Src/ENG/HOTSVAR.SRC
* /HomeAlone2_NES_Src/ENG/COLLEQU.SRC
* /HomeAlone2_NES_Src/ENG/WLDVAR.SRC
* /HomeAlone2_NES_Src/ENG/CAMVAR.SRC
* /HomeAlone2_NES_Src/ENG/BGENGINE.SRC
* /HomeAlone2_NES_Src/ENG/ENGCODE.SRC
* /HomeAlone2_NES_Src/ENG/STTPGF.SRC
* /HomeAlone2_NES_Src/ENG/HOTSPGF.SRC
* /HomeAlone2_NES_Src/ENG/SCRPCODE.SRC
* /HomeAlone2_NES_Src/ENG/STATCODE.SRC
* /HomeAlone2_NES_Src/ENG/COLLPGF.SRC
* /HomeAlone2_NES_Src/ENG/STTEQU.SRC
* /HomeAlone2_NES_Src/ENG/HOTSEQU.SRC
* /HomeAlone2_NES_Src/ENG/PRNTNRAM.GME
* /HomeAlone2_NES_Src/ENG/PRNTDEFS.GME
* /HomeAlone2_NES_Src/ENG/PRNTZRAM.GME
* /HomeAlone2_NES_Src/DEVDOC
* /HomeAlone2_NES_Src/DEVDOC/FILEINFO.FI
* /HomeAlone2_NES_Src/DEVDOC/SCRPDOC.DOC
* /HomeAlone2_NES_Src/DEVDOC/TEMPLATE
* /HomeAlone2_NES_Src/DEVDOC/NEWNES.DOC
* /HomeAlone2_NES_Src/DEVDOC/INSTALL.DOC
* /HomeAlone2_NES_Src/DEVDOC/ADDING.DOC
* /HomeAlone2_NES_Src/LL3
* /HomeAlone2_NES_Src/LL3/CLEAN.BAT
* /HomeAlone2_NES_Src/LL3/FILEINFO.FI
* /HomeAlone2_NES_Src/LL3/GR
* /HomeAlone2_NES_Src/LL3/GR/LL3SPR2.LBM
* /HomeAlone2_NES_Src/LL3/GR/LL3SPR1.LBM
* /HomeAlone2_NES_Src/LL3/GR/FILEINFO.FI
* /HomeAlone2_NES_Src/LL3/GR/GR.MAK
* /HomeAlone2_NES_Src/LL3/SETDIR.BAT
* /HomeAlone2_NES_Src/LL3/DLG.BAT
* /HomeAlone2_NES_Src/LL3/DLC.BAT
* /HomeAlone2_NES_Src/LL3/MP30.SRC
* /HomeAlone2_NES_Src/LL3/BASE.ERR
* /HomeAlone2_NES_Src/LL3/WLDATA3.A65
* /HomeAlone2_NES_Src/LL3/ST3.SRC
* /HomeAlone2_NES_Src/LL3/LL3SEQS.SRC
* /HomeAlone2_NES_Src/LL3/HT3.SRC
* /HomeAlone2_NES_Src/LL3/BG
* /HomeAlone2_NES_Src/LL3/BG/C21.LBM
* /HomeAlone2_NES_Src/LL3/BG/C20.LBM
* /HomeAlone2_NES_Src/LL3/BG/C19A.LBM
* /HomeAlone2_NES_Src/LL3/BG/C22.LBM
* /HomeAlone2_NES_Src/LL3/BG/C23.LBM
* /HomeAlone2_NES_Src/LL3/BG/BG.MAK
* /HomeAlone2_NES_Src/LL3/BG/C8.LBM
* /HomeAlone2_NES_Src/LL3/BG/C9.LBM
* /HomeAlone2_NES_Src/LL3/BG/C3P1P1.WLD
* /HomeAlone2_NES_Src/LL3/BG/C18.LBM
* /HomeAlone2_NES_Src/LL3/BG/C19.LBM
* /HomeAlone2_NES_Src/LL3/BG/DP_PREFS
* /HomeAlone2_NES_Src/LL3/BG/WALL6.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL7.LBM
* /HomeAlone2_NES_Src/LL3/BG/ERR
* /HomeAlone2_NES_Src/LL3/BG/WALL5.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL4.LBM
* /HomeAlone2_NES_Src/LL3/BG/BP2.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL1.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL3.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL2.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALLEND.LBM
* /HomeAlone2_NES_Src/LL3/BG/C4_OLD.LBM
* /HomeAlone2_NES_Src/LL3/BG/NEWC18.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL9.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL8.LBM
* /HomeAlone2_NES_Src/LL3/BG/C7.LBM
* /HomeAlone2_NES_Src/LL3/BG/C14.LBM
* /HomeAlone2_NES_Src/LL3/BG/C15.LBM
* /HomeAlone2_NES_Src/LL3/BG/C6.LBM
* /HomeAlone2_NES_Src/LL3/BG/C4.LBM
* /HomeAlone2_NES_Src/LL3/BG/C17.LBM
* /HomeAlone2_NES_Src/LL3/BG/C16.LBM
* /HomeAlone2_NES_Src/LL3/BG/C5.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL11.LBM
* /HomeAlone2_NES_Src/LL3/BG/C1.LBM
* /HomeAlone2_NES_Src/LL3/BG/C12.LBM
* /HomeAlone2_NES_Src/LL3/BG/C13.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL10.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL12.LBM
* /HomeAlone2_NES_Src/LL3/BG/C2.LBM
* /HomeAlone2_NES_Src/LL3/BG/C11.LBM
* /HomeAlone2_NES_Src/LL3/BG/C10.LBM
* /HomeAlone2_NES_Src/LL3/BG/C3.LBM
* /HomeAlone2_NES_Src/LL3/BG/WALL13.LBM
* /HomeAlone2_NES_Src/LL3/DLALL.BAT
* /HomeAlone2_NES_Src/LL3/BGDATA3.SRC
* /HomeAlone2_NES_Src/LL3/SF3.SRC
* /HomeAlone2_NES_Src/LL3/DIRID.SRC
* /HomeAlone2_NES_Src/LL3/SS3.SRC
* /HomeAlone2_NES_Src/LL3/LL3.A65
* /HomeAlone2_NES_Src/LL3/LL3COD.SRC
* /HomeAlone2_NES_Src/LL4
* /HomeAlone2_NES_Src/LL4/CLEAN.BAT
* /HomeAlone2_NES_Src/LL4/FILEINFO.FI
* /HomeAlone2_NES_Src/LL4/LL4SEQS.SRC
* /HomeAlone2_NES_Src/LL4/LL4COD.SRC
* /HomeAlone2_NES_Src/LL4/GR
* /HomeAlone2_NES_Src/LL4/GR/L4W0.NLD
* /HomeAlone2_NES_Src/LL4/GR/FILEINFO.FI
* /HomeAlone2_NES_Src/LL4/GR/DP_PREFS
* /HomeAlone2_NES_Src/LL4/GR/LL4SPR1.LBM
* /HomeAlone2_NES_Src/LL4/GR/LL4SPR2.LBM
* /HomeAlone2_NES_Src/LL4/GR/GR.MAK
* /HomeAlone2_NES_Src/LL4/GR/PICKUPS.LBM
* /HomeAlone2_NES_Src/LL4/GR/ENEMY1.LBM
* /HomeAlone2_NES_Src/LL4/SETDIR.BAT
* /HomeAlone2_NES_Src/LL4/DLG.BAT
* /HomeAlone2_NES_Src/LL4/DLC.BAT
* /HomeAlone2_NES_Src/LL4/SETDIR.CEW
* /HomeAlone2_NES_Src/LL4/HT4.SRC
* /HomeAlone2_NES_Src/LL4/ST4.SRC
* /HomeAlone2_NES_Src/LL4/WLDATA4.A65
* /HomeAlone2_NES_Src/LL4/BG
* /HomeAlone2_NES_Src/LL4/BG/TOWN8.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN9.LBM
* /HomeAlone2_NES_Src/LL4/BG/PIC.NLD
* /HomeAlone2_NES_Src/LL4/BG/BG.MAK
* /HomeAlone2_NES_Src/LL4/BG/FILEINFO.FI
* /HomeAlone2_NES_Src/LL4/BG/DP_PREFS
* /HomeAlone2_NES_Src/LL4/BG/PIC1A.WLD
* /HomeAlone2_NES_Src/LL4/BG/ERR
* /HomeAlone2_NES_Src/LL4/BG/C5A.WLD
* /HomeAlone2_NES_Src/LL4/BG/C3_C4.WLD
* /HomeAlone2_NES_Src/LL4/BG/PIC1.NLD
* /HomeAlone2_NES_Src/LL4/BG/TOWN10.LBM
* /HomeAlone2_NES_Src/LL4/BG/BG_3.MAK
* /HomeAlone2_NES_Src/LL4/BG/PIC1.WLD
* /HomeAlone2_NES_Src/LL4/BG/C4P1P1.WLD
* /HomeAlone2_NES_Src/LL4/BG/TOWN1.LBM
* /HomeAlone2_NES_Src/LL4/BG/TH1.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN2.LBM
* /HomeAlone2_NES_Src/LL4/BG/TH2.LBM
* /HomeAlone2_NES_Src/LL4/BG/TH3.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN3.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN7.LBM
* /HomeAlone2_NES_Src/LL4/BG/PIC.WLD
* /HomeAlone2_NES_Src/LL4/BG/TH6.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN6.LBM
* /HomeAlone2_NES_Src/LL4/BG/L4W0.WLD
* /HomeAlone2_NES_Src/LL4/BG/TOWN4.LBM
* /HomeAlone2_NES_Src/LL4/BG/TH4.LBM
* /HomeAlone2_NES_Src/LL4/BG/TH5.LBM
* /HomeAlone2_NES_Src/LL4/BG/TOWN5.LBM
* /HomeAlone2_NES_Src/LL4/DLALL.BAT
* /HomeAlone2_NES_Src/LL4/LL4.A65
* /HomeAlone2_NES_Src/LL4/DIRID.SRC
* /HomeAlone2_NES_Src/LL4/BGDATA4.SRC
* /HomeAlone2_NES_Src/LL4/MP40.SRC
* /HomeAlone2_NES_Src/LL4/SS4.SRC
* /HomeAlone2_NES_Src/LL4/SF4.SRC
* /HomeAlone2_NES_Src/TIMECLCK
* /HomeAlone2_NES_Src/LL2
* /HomeAlone2_NES_Src/LL2/CLEAN.BAT
* /HomeAlone2_NES_Src/LL2/FILEINFO.FI
* /HomeAlone2_NES_Src/LL2/GR
* /HomeAlone2_NES_Src/LL2/GR/LL2SPR4.LBM
* /HomeAlone2_NES_Src/LL2/GR/FILEINFO.FI
* /HomeAlone2_NES_Src/LL2/GR/LL2SPR1.LBM
* /HomeAlone2_NES_Src/LL2/GR/LL2SPR2.LBM
* /HomeAlone2_NES_Src/LL2/GR/LL2SPR3.LBM
* /HomeAlone2_NES_Src/LL2/GR/DP_PREFS
* /HomeAlone2_NES_Src/LL2/GR/_BACKUP_.LBM
* /HomeAlone2_NES_Src/LL2/GR/GR.MAK
* /HomeAlone2_NES_Src/LL2/GR/BU
* /HomeAlone2_NES_Src/LL2/GR/BU/LL2COM.SPR
* /HomeAlone2_NES_Src/LL2/DP_PREFS
* /HomeAlone2_NES_Src/LL2/SETDIR.BAT
* /HomeAlone2_NES_Src/LL2/DLG.BAT
* /HomeAlone2_NES_Src/LL2/LL2COD.SRC
* /HomeAlone2_NES_Src/LL2/DLC.BAT
* /HomeAlone2_NES_Src/LL2/LL2SEQS.SRC
* /HomeAlone2_NES_Src/LL2/WLDATA2.A65
* /HomeAlone2_NES_Src/LL2/MP20.SRC
* /HomeAlone2_NES_Src/LL2/BG
* /HomeAlone2_NES_Src/LL2/BG/BARTMAN.LBM
* /HomeAlone2_NES_Src/LL2/BG/C2P1P2.WLD
* /HomeAlone2_NES_Src/LL2/BG/C2.DOC
* /HomeAlone2_NES_Src/LL2/BG/C2P1P1.WLD
* /HomeAlone2_NES_Src/LL2/BG/BG.MAK
* /HomeAlone2_NES_Src/LL2/BG/FILEINFO.FI
* /HomeAlone2_NES_Src/LL2/BG/DP_PREFS
* /HomeAlone2_NES_Src/LL2/BG/BADD.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD2.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD3.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADE.LBM
* /HomeAlone2_NES_Src/LL2/BG/ERR
* /HomeAlone2_NES_Src/LL2/BG/MK.BAT
* /HomeAlone2_NES_Src/LL2/BG/BAD1.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADF.LBM
* /HomeAlone2_NES_Src/LL2/BG/BLANK.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD4.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADB.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADC.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD5.LBM
* /HomeAlone2_NES_Src/LL2/BG/ALPHA.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADA.GRP
* /HomeAlone2_NES_Src/LL2/BG/BAD7.LBM
* /HomeAlone2_NES_Src/LL2/BG/BADA.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD6.LBM
* /HomeAlone2_NES_Src/LL2/BG/TREE.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD8.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD9.LBM
* /HomeAlone2_NES_Src/LL2/BG/_BACKUP_.LBM
* /HomeAlone2_NES_Src/LL2/BG/BLANK1.LBM
* /HomeAlone2_NES_Src/LL2/BG/BLANK2.LBM
* /HomeAlone2_NES_Src/LL2/BG/BU
* /HomeAlone2_NES_Src/LL2/BG/BU/BG.MAK
* /HomeAlone2_NES_Src/LL2/BG/TREE2.LBM
* /HomeAlone2_NES_Src/LL2/BG/TREE3.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD13.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD12.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD10.LBM
* /HomeAlone2_NES_Src/LL2/BG/BAD11.LBM
* /HomeAlone2_NES_Src/LL2/DLALL.BAT
* /HomeAlone2_NES_Src/LL2/HT2.SRC
* /HomeAlone2_NES_Src/LL2/ST2.SRC
* /HomeAlone2_NES_Src/LL2/BGDATA2.SRC
* /HomeAlone2_NES_Src/LL2/JJ
* /HomeAlone2_NES_Src/LL2/SS2.SRC
* /HomeAlone2_NES_Src/LL2/DIRID.SRC
* /HomeAlone2_NES_Src/LL2/SF2.SRC
* /HomeAlone2_NES_Src/LL2/LL2.A65
* /HomeAlone2_NES_Src/ERR
* /HomeAlone2_NES_Src/TREEINFO.NCD
* /HomeAlone2_NES_Src/LL0
* /HomeAlone2_NES_Src/LL0/OPBK
* /HomeAlone2_NES_Src/LL0/OPENING.SRC
* /HomeAlone2_NES_Src/LL0/ZIPLL0.BAT
* /HomeAlone2_NES_Src/LL0/E1.SRC
* /HomeAlone2_NES_Src/LL0/TEXT.MAK
* /HomeAlone2_NES_Src/LL0/OPEN_DAT
* /HomeAlone2_NES_Src/LL0/IRQ_HA.SRC
* /HomeAlone2_NES_Src/LL0/CLEAN.BAT
* /HomeAlone2_NES_Src/LL0/FILEINFO.FI
* /HomeAlone2_NES_Src/LL0/ENDING.SRC
* /HomeAlone2_NES_Src/LL0/HA2NES.CRD
* /HomeAlone2_NES_Src/LL0/GAMEOVER.SRC
* /HomeAlone2_NES_Src/LL0/JJ.BAT
* /HomeAlone2_NES_Src/LL0/TEXT.A65
* /HomeAlone2_NES_Src/LL0/GR
* /HomeAlone2_NES_Src/LL0/GR/FILEINFO.FI
* /HomeAlone2_NES_Src/LL0/GR/LL0SPR.LBM
* /HomeAlone2_NES_Src/LL0/GR/DP_PREFS
* /HomeAlone2_NES_Src/LL0/GR/LL0SPR1.LBM
* /HomeAlone2_NES_Src/LL0/GR/LL0SPR2.LBM
* /HomeAlone2_NES_Src/LL0/GR/MK.BAT
* /HomeAlone2_NES_Src/LL0/GR/_BACKUP_.LBM
* /HomeAlone2_NES_Src/LL0/GR/GR.MAK
* /HomeAlone2_NES_Src/LL0/TXTADR.A65
* /HomeAlone2_NES_Src/LL0/CREDIT.SRC
* /HomeAlone2_NES_Src/LL0/ENDTXT
* /HomeAlone2_NES_Src/LL0/DP_PREFS
* /HomeAlone2_NES_Src/LL0/SETDIR.BAT
* /HomeAlone2_NES_Src/LL0/DLG.BAT
* /HomeAlone2_NES_Src/LL0/DECOMP.SRC
* /HomeAlone2_NES_Src/LL0/MP0.SRC
* /HomeAlone2_NES_Src/LL0/LL0COD.SRC
* /HomeAlone2_NES_Src/LL0/JTXT
* /HomeAlone2_NES_Src/LL0/JOUT
* /HomeAlone2_NES_Src/LL0/DLC.BAT
* /HomeAlone2_NES_Src/LL0/OPEN_TXT
* /HomeAlone2_NES_Src/LL0/WLDATA0.A65
* /HomeAlone2_NES_Src/LL0/MOVIE1.SRC
* /HomeAlone2_NES_Src/LL0/HT00.SRC
* /HomeAlone2_NES_Src/LL0/TITLE.SRC
* /HomeAlone2_NES_Src/LL0/BG
* /HomeAlone2_NES_Src/LL0/BG/E1F2.NIN
* /HomeAlone2_NES_Src/LL0/BG/TITLE.LBM
* /HomeAlone2_NES_Src/LL0/BG/C1P1P5.LOD
* /HomeAlone2_NES_Src/LL0/BG/OS2.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1.RAW
* /HomeAlone2_NES_Src/LL0/BG/E1A.NIN
* /HomeAlone2_NES_Src/LL0/BG/PARENTS.LBM
* /HomeAlone2_NES_Src/LL0/BG/TESTF1.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F3.NIN
* /HomeAlone2_NES_Src/LL0/BG/AL.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F1.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F5A.NIN
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1.jpg
* /HomeAlone2_NES_Src/LL0/BG/E1F5.RLC
* /HomeAlone2_NES_Src/LL0/BG/OS1.LBM
* /HomeAlone2_NES_Src/LL0/BG/OS0.LBM
* /HomeAlone2_NES_Src/LL0/BG/BG.MAK
* /HomeAlone2_NES_Src/LL0/BG/E1F4.RLC
* /HomeAlone2_NES_Src/LL0/BG/E1_OLD.LBM
* /HomeAlone2_NES_Src/LL0/BG/S4A.A65
* /HomeAlone2_NES_Src/LL0/BG/S5A.A65
* /HomeAlone2_NES_Src/LL0/BG/E1F4.NIN
* /HomeAlone2_NES_Src/LL0/BG/FILEINFO.FI
* /HomeAlone2_NES_Src/LL0/BG/JAIL1.LBM
* /HomeAlone2_NES_Src/LL0/BG/MOVIE2.LBM
* /HomeAlone2_NES_Src/LL0/BG/CAUGHT.LBM
* /HomeAlone2_NES_Src/LL0/BG/JAIL0.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F1.RLC
* /HomeAlone2_NES_Src/LL0/BG/CREDIT.RAW
* /HomeAlone2_NES_Src/LL0/BG/E1F5.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F4A.NIN
* /HomeAlone2_NES_Src/LL0/BG/JJ.BAT
* /HomeAlone2_NES_Src/LL0/BG/E1F3.RLC
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1.LBM
* /HomeAlone2_NES_Src/LL0/BG/ARMS2.PCX
* /HomeAlone2_NES_Src/LL0/BG/GAMEOVER.RAW
* /HomeAlone2_NES_Src/LL0/BG/MOVIE_O.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F2.RLC
* /HomeAlone2_NES_Src/LL0/BG/MOVIE2A.NIN
* /HomeAlone2_NES_Src/LL0/BG/MISC.NIN
* /HomeAlone2_NES_Src/LL0/BG/DP_PREFS
* /HomeAlone2_NES_Src/LL0/BG/LL0SPR1.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F3A.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F3.RAW
* /HomeAlone2_NES_Src/LL0/BG/JAIL1A.NIN
* /HomeAlone2_NES_Src/LL0/BG/S0.LBM
* /HomeAlone2_NES_Src/LL0/BG/TAPE.LBM
* /HomeAlone2_NES_Src/LL0/BG/GAMEOVER.RLC
* /HomeAlone2_NES_Src/LL0/BG/S1.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F2.RAW
* /HomeAlone2_NES_Src/LL0/BG/S2A.A65
* /HomeAlone2_NES_Src/LL0/BG/ERR
* /HomeAlone2_NES_Src/LL0/BG/E1.NIN
* /HomeAlone2_NES_Src/LL0/BG/ARMS3.GIF
* /HomeAlone2_NES_Src/LL0/BG/OPENING.NIN
* /HomeAlone2_NES_Src/LL0/BG/S3.LBM
* /HomeAlone2_NES_Src/LL0/BG/HOTR.LBM
* /HomeAlone2_NES_Src/LL0/BG/S2.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F1.RAW
* /HomeAlone2_NES_Src/LL0/BG/OS1A.NIN
* /HomeAlone2_NES_Src/LL0/BG/CREDIT.RLC
* /HomeAlone2_NES_Src/LL0/BG/P5.DOC
* /HomeAlone2_NES_Src/LL0/BG/CREDIT.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F5.RAW
* /HomeAlone2_NES_Src/LL0/BG/CHARS.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F4.RAW
* /HomeAlone2_NES_Src/LL0/BG/GAMEOA.NIN
* /HomeAlone2_NES_Src/LL0/BG/S3A.A65
* /HomeAlone2_NES_Src/LL0/BG/GAMEOVER.NIN
* /HomeAlone2_NES_Src/LL0/BG/C1P1P5.WLD
* /HomeAlone2_NES_Src/LL0/BG/CHRIS.LBM
* /HomeAlone2_NES_Src/LL0/BG/TOM_MEM.LBM
* /HomeAlone2_NES_Src/LL0/BG/FAMILYA.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1.RLC
* /HomeAlone2_NES_Src/LL0/BG/ENDING.NIN
* /HomeAlone2_NES_Src/LL0/BG/S5.LBM
* /HomeAlone2_NES_Src/LL0/BG/FAMILY.LBM
* /HomeAlone2_NES_Src/LL0/BG/S4.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1.PCX
* /HomeAlone2_NES_Src/LL0/BG/C0P1P1.WLD
* /HomeAlone2_NES_Src/LL0/BG/E1F2A.NIN
* /HomeAlone2_NES_Src/LL0/BG/ALPHA89.NIN
* /HomeAlone2_NES_Src/LL0/BG/FAMILY.NIN
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1.RAW
* /HomeAlone2_NES_Src/LL0/BG/TAPE.RLC
* /HomeAlone2_NES_Src/LL0/BG/ALPHA89.LBM
* /HomeAlone2_NES_Src/LL0/BG/SP.MAK
* /HomeAlone2_NES_Src/LL0/BG/GAMEOVER.LBM
* /HomeAlone2_NES_Src/LL0/BG/CHRIS.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F1A.NIN
* /HomeAlone2_NES_Src/LL0/BG/TOM_MEM.NIN
* /HomeAlone2_NES_Src/LL0/BG/C1P1P5.NIN
* /HomeAlone2_NES_Src/LL0/BG/JAIL1.RAW
* /HomeAlone2_NES_Src/LL0/BG/MOVIE2.RAW
* /HomeAlone2_NES_Src/LL0/BG/CAUGHT.RAW
* /HomeAlone2_NES_Src/LL0/BG/OS0_OLD.LBM
* /HomeAlone2_NES_Src/LL0/BG/C0P1P1.NIN
* /HomeAlone2_NES_Src/LL0/BG/CREDIT.LBM
* /HomeAlone2_NES_Src/LL0/BG/_BACKUP_.LBM
* /HomeAlone2_NES_Src/LL0/BG/S0.A65
* /HomeAlone2_NES_Src/LL0/BG/OS1.RAW
* /HomeAlone2_NES_Src/LL0/BG/TITLE.CEW
* /HomeAlone2_NES_Src/LL0/BG/CREDIT.OLD
* /HomeAlone2_NES_Src/LL0/BG/OS2A.NIN
* /HomeAlone2_NES_Src/LL0/BG/S1.A65
* /HomeAlone2_NES_Src/LL0/BG/TITLE.RAW
* /HomeAlone2_NES_Src/LL0/BG/TOM_MEMA.NIN
* /HomeAlone2_NES_Src/LL0/BG/OS2.RAW
* /HomeAlone2_NES_Src/LL0/BG/E1.LBM
* /HomeAlone2_NES_Src/LL0/BG/TOM_MEM.RLC
* /HomeAlone2_NES_Src/LL0/BG/F_JAIL.NIN
* /HomeAlone2_NES_Src/LL0/BG/PARENTS.RAW
* /HomeAlone2_NES_Src/LL0/BG/FAMILY.RLC
* /HomeAlone2_NES_Src/LL0/BG/S1A.A65
* /HomeAlone2_NES_Src/LL0/BG/TITLE.RLC
* /HomeAlone2_NES_Src/LL0/BG/E1F0_OLD.LBM
* /HomeAlone2_NES_Src/LL0/BG/OS2.RLC
* /HomeAlone2_NES_Src/LL0/BG/TOM_MEM.RAW
* /HomeAlone2_NES_Src/LL0/BG/PARENTS.RLC
* /HomeAlone2_NES_Src/LL0/BG/BACK.LBM
* /HomeAlone2_NES_Src/LL0/BG/EJOE.RAW
* /HomeAlone2_NES_Src/LL0/BG/FAMILY.RAW
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1A.NIN
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1.NIN
* /HomeAlone2_NES_Src/LL0/BG/LV1END1.NIN
* /HomeAlone2_NES_Src/LL0/BG/TEXT.LBM
* /HomeAlone2_NES_Src/LL0/BG/OS1.RLC
* /HomeAlone2_NES_Src/LL0/BG/C0P1P1.RAW
* /HomeAlone2_NES_Src/LL0/BG/E1F5.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F4.LBM
* /HomeAlone2_NES_Src/LL0/BG/C1P1P5.RAW
* /HomeAlone2_NES_Src/LL0/BG/JAIL1.NIN
* /HomeAlone2_NES_Src/LL0/BG/MOVIE2.NIN
* /HomeAlone2_NES_Src/LL0/BG/CAUGHT.NIN
* /HomeAlone2_NES_Src/LL0/BG/CAUGHT.RLC
* /HomeAlone2_NES_Src/LL0/BG/MOVIE2.RLC
* /HomeAlone2_NES_Src/LL0/BG/JAIL1.RLC
* /HomeAlone2_NES_Src/LL0/BG/E1F0.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F1.LBM
* /HomeAlone2_NES_Src/LL0/BG/TESTF1.A65
* /HomeAlone2_NES_Src/LL0/BG/OPEN1.NIN
* /HomeAlone2_NES_Src/LL0/BG/OS1.NIN
* /HomeAlone2_NES_Src/LL0/BG/PARENTS.NIN
* /HomeAlone2_NES_Src/LL0/BG/TAPE.RAW
* /HomeAlone2_NES_Src/LL0/BG/ARMS1
* /HomeAlone2_NES_Src/LL0/BG/MOVIE1.RLC
* /HomeAlone2_NES_Src/LL0/BG/MOVIE.NIN
* /HomeAlone2_NES_Src/LL0/BG/E1F3.LBM
* /HomeAlone2_NES_Src/LL0/BG/E1F2.LBM
* /HomeAlone2_NES_Src/LL0/BG/TITLE.NIN
* /HomeAlone2_NES_Src/LL0/BG/OS2.NIN
* /HomeAlone2_NES_Src/LL0/BG/LL0ABCST.LOD
* /HomeAlone2_NES_Src/LL0/DLALL.BAT
* /HomeAlone2_NES_Src/LL0/OLD.LL0
* /HomeAlone2_NES_Src/LL0/SF0.SRC
* /HomeAlone2_NES_Src/LL0/LL0ZIPB.BAT
* /HomeAlone2_NES_Src/LL0/BGDATA0.SRC
* /HomeAlone2_NES_Src/LL0/TOM_MEM.SRC
* /HomeAlone2_NES_Src/LL0/DIRID.SRC
* /HomeAlone2_NES_Src/LL0/F1.SRC
* /HomeAlone2_NES_Src/LL0/ENDTXTOU
* /HomeAlone2_NES_Src/LL0/LL0SEQS.SRC
* /HomeAlone2_NES_Src/LL0/TXTCMP.EXE
* /HomeAlone2_NES_Src/LL0/TEXTO.A65
* /HomeAlone2_NES_Src/LL0/LL0.A65
* /HomeAlone2_NES_Src/LL1
* /HomeAlone2_NES_Src/LL1/CLEAN.BAT
* /HomeAlone2_NES_Src/LL1/FILEINFO.FI
* /HomeAlone2_NES_Src/LL1/.DS_Store
* /HomeAlone2_NES_Src/LL1/GR
* /HomeAlone2_NES_Src/LL1/GR/KNEW.LBM
* /HomeAlone2_NES_Src/LL1/GR/KITSP.LBM
* /HomeAlone2_NES_Src/LL1/GR/FILEINFO.FI
* /HomeAlone2_NES_Src/LL1/GR/ENEMYMEN.LBM
* /HomeAlone2_NES_Src/LL1/GR/DP_PREFS
* /HomeAlone2_NES_Src/LL1/GR/LL1SPR4.LBM
* /HomeAlone2_NES_Src/LL1/GR/LL1SPR5.LBM
* /HomeAlone2_NES_Src/LL1/GR/CONC.LBM
* /HomeAlone2_NES_Src/LL1/GR/DICK.LBM
* /HomeAlone2_NES_Src/LL1/GR/LL1SPR2.LBM
* /HomeAlone2_NES_Src/LL1/GR/BLANK.LBM
* /HomeAlone2_NES_Src/LL1/GR/CHEF.LBM
* /HomeAlone2_NES_Src/LL1/GR/CHEF2.LBM
* /HomeAlone2_NES_Src/LL1/GR/LL1SPR3.LBM
* /HomeAlone2_NES_Src/LL1/GR/LL1SPR1.LBM
* /HomeAlone2_NES_Src/LL1/GR/CHEF1.LBM
* /HomeAlone2_NES_Src/LL1/GR/KNEW2.LBM
* /HomeAlone2_NES_Src/LL1/GR/WAITER.LBM
* /HomeAlone2_NES_Src/LL1/GR/GR.MAK
* /HomeAlone2_NES_Src/LL1/GR/ICONS.LBM
* /HomeAlone2_NES_Src/LL1/GR/MAID.LBM
* /HomeAlone2_NES_Src/LL1/GR/DISH.LBM
* /HomeAlone2_NES_Src/LL1/GR/GSA.LBM
* /HomeAlone2_NES_Src/LL1/GR/GHOSTS.LBM
* /HomeAlone2_NES_Src/LL1/GR/ENEMY2.LBM
* /HomeAlone2_NES_Src/LL1/SETDIR.BAT
* /HomeAlone2_NES_Src/LL1/LAYOUT.DOC
* /HomeAlone2_NES_Src/LL1/DLG.BAT
* /HomeAlone2_NES_Src/LL1/MP10.SRC
* /HomeAlone2_NES_Src/LL1/DLC.BAT
* /HomeAlone2_NES_Src/LL1/WLDATA1.A65
* /HomeAlone2_NES_Src/LL1/HT1.CEW
* /HomeAlone2_NES_Src/LL1/HT1.SRC
* /HomeAlone2_NES_Src/LL1/ST1.SRC
* /HomeAlone2_NES_Src/LL1/LL1
* /HomeAlone2_NES_Src/LL1/BG
* /HomeAlone2_NES_Src/LL1/BG/16B.LBM
* /HomeAlone2_NES_Src/LL1/BG/12BRA.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBM.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBL.LBM
* /HomeAlone2_NES_Src/LL1/BG/16C.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC.NLD
* /HomeAlone2_NES_Src/LL1/BG/L2.WLD
* /HomeAlone2_NES_Src/LL1/BG/16A.LBM
* /HomeAlone2_NES_Src/LL1/BG/11CR.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC1.TMP
* /HomeAlone2_NES_Src/LL1/BG/GIFTS.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBN.LBM
* /HomeAlone2_NES_Src/LL1/BG/BG.MAK
* /HomeAlone2_NES_Src/LL1/BG/NEWS.GRP
* /HomeAlone2_NES_Src/LL1/BG/ELEV.LBM
* /HomeAlone2_NES_Src/LL1/BG/FILEINFO.FI
* /HomeAlone2_NES_Src/LL1/BG/16D.LBM
* /HomeAlone2_NES_Src/LL1/BG/ELEV.GRP
* /HomeAlone2_NES_Src/LL1/BG/LOBK.LBM
* /HomeAlone2_NES_Src/LL1/BG/NEWS.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBJ.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBBY.LBM
* /HomeAlone2_NES_Src/LL1/BG/14ER.LBM
* /HomeAlone2_NES_Src/LL1/BG/16E.LBM
* /HomeAlone2_NES_Src/LL1/BG/15CR.LBM
* /HomeAlone2_NES_Src/LL1/BG/12DR.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBH.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBI.LBM
* /HomeAlone2_NES_Src/LL1/BG/16F.LBM
* /HomeAlone2_NES_Src/LL1/BG/12FRA.LBM
* /HomeAlone2_NES_Src/LL1/BG/16CRA.LBM
* /HomeAlone2_NES_Src/LL1/BG/DP_PREFS
* /HomeAlone2_NES_Src/LL1/BG/K10.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC1A.WLD
* /HomeAlone2_NES_Src/LL1/BG/K6.LBM
* /HomeAlone2_NES_Src/LL1/BG/11E.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBFB.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBFT.LBM
* /HomeAlone2_NES_Src/LL1/BG/FIXP2.BAT
* /HomeAlone2_NES_Src/LL1/BG/11D.LBM
* /HomeAlone2_NES_Src/LL1/BG/K7.LBM
* /HomeAlone2_NES_Src/LL1/BG/ERR
* /HomeAlone2_NES_Src/LL1/BG/C1P1P1.WLD
* /HomeAlone2_NES_Src/LL1/BG/C1P1P3.WLD
* /HomeAlone2_NES_Src/LL1/BG/K5.LBM
* /HomeAlone2_NES_Src/LL1/BG/MK.BAT
* /HomeAlone2_NES_Src/LL1/BG/11F.LBM
* /HomeAlone2_NES_Src/LL1/BG/K4.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC1.NLD
* /HomeAlone2_NES_Src/LL1/BG/C1P1P2.WLD
* /HomeAlone2_NES_Src/LL1/BG/12BR.LBM
* /HomeAlone2_NES_Src/LL1/BG/11C.LBM
* /HomeAlone2_NES_Src/LL1/BG/BLANK.LBM
* /HomeAlone2_NES_Src/LL1/BG/COMMON1.LBM
* /HomeAlone2_NES_Src/LL1/BG/K1.LBM
* /HomeAlone2_NES_Src/LL1/BG/11B.LBM
* /HomeAlone2_NES_Src/LL1/BG/C1P1P5.WLD
* /HomeAlone2_NES_Src/LL1/BG/K3.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBGT.LBM
* /HomeAlone2_NES_Src/LL1/BG/COMMON3.LBM
* /HomeAlone2_NES_Src/LL1/BG/COMMON2.LBM
* /HomeAlone2_NES_Src/LL1/BG/14CR.LBM
* /HomeAlone2_NES_Src/LL1/BG/K2.LBM
* /HomeAlone2_NES_Src/LL1/BG/11A.LBM
* /HomeAlone2_NES_Src/LL1/BG/C1P1P4.WLD
* /HomeAlone2_NES_Src/LL1/BG/KNEWS.LBM
* /HomeAlone2_NES_Src/LL1/BG/12A.LBM
* /HomeAlone2_NES_Src/LL1/BG/L1W1.WLD
* /HomeAlone2_NES_Src/LL1/BG/12C.LBM
* /HomeAlone2_NES_Src/LL1/BG/12B.LBM
* /HomeAlone2_NES_Src/LL1/BG/L1W0.WLD
* /HomeAlone2_NES_Src/LL1/BG/K9.LBM
* /HomeAlone2_NES_Src/LL1/BG/12F.LBM
* /HomeAlone2_NES_Src/LL1/BG/JJ.LBM
* /HomeAlone2_NES_Src/LL1/BG/K8.LBM
* /HomeAlone2_NES_Src/LL1/BG/12E.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC1.WLD
* /HomeAlone2_NES_Src/LL1/BG/LOBET.LBM
* /HomeAlone2_NES_Src/LL1/BG/12D.LBM
* /HomeAlone2_NES_Src/LL1/BG/CHR.DOC
* /HomeAlone2_NES_Src/LL1/BG/14C.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBD.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBE.LBM
* /HomeAlone2_NES_Src/LL1/BG/14B.LBM
* /HomeAlone2_NES_Src/LL1/BG/15F.LBM
* /HomeAlone2_NES_Src/LL1/BG/15D.LBM
* /HomeAlone2_NES_Src/LL1/BG/ALLEY.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBG.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBF.LBM
* /HomeAlone2_NES_Src/LL1/BG/15E.LBM
* /HomeAlone2_NES_Src/LL1/BG/14A.LBM
* /HomeAlone2_NES_Src/LL1/BG/14E.LBM
* /HomeAlone2_NES_Src/LL1/BG/15A.LBM
* /HomeAlone2_NES_Src/LL1/BG/PIC.WLD
* /HomeAlone2_NES_Src/LL1/BG/LOBB.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBC.LBM
* /HomeAlone2_NES_Src/LL1/BG/14D.LBM
* /HomeAlone2_NES_Src/LL1/BG/15B.LBM
* /HomeAlone2_NES_Src/LL1/BG/14F.LBM
* /HomeAlone2_NES_Src/LL1/BG/LOBA.LBM
* /HomeAlone2_NES_Src/LL1/BG/15C.LBM
* /HomeAlone2_NES_Src/LL1/BG/11CRA.LBM
* /HomeAlone2_NES_Src/LL1/DLALL.BAT
* /HomeAlone2_NES_Src/LL1/SS1.SRC
* /HomeAlone2_NES_Src/LL1/LL1COD.SRC
* /HomeAlone2_NES_Src/LL1/SF1.SRC
* /HomeAlone2_NES_Src/LL1/DIRID.SRC
* /HomeAlone2_NES_Src/LL1/LL1SEQS.SRC
* /HomeAlone2_NES_Src/LL1/BGDATA1.SRC
* /HomeAlone2_NES_Src/LL1/LL1.A65
* /HomeAlone2_NES_Src/AUD
* /HomeAlone2_NES_Src/AUD/AUDIOMAC.AUD
* /HomeAlone2_NES_Src/AUD/COMMON.AUD
* /HomeAlone2_NES_Src/AUD/TEMP.AUD
* /HomeAlone2_NES_Src/AUD/HMA2
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SK.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SI.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S9.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S8.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SC.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S5.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S4.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SB.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2.INS
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2DEF.SND
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S6.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S7.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SA.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2.SND
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S3.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SE.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SD.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S2.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2.MUS
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SF.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_SG.SQ1
* /HomeAlone2_NES_Src/AUD/HMA2/HMA2_S1.SQ1
* /HomeAlone2_NES_Src/AUD/AUDIONFF.AUD
* /HomeAlone2_NES_Src/AUD/AUDSIZE.SYM
* /HomeAlone2_NES_Src/AUD/INST.AUD
* /HomeAlone2_NES_Src/AUD/AUDIODEF.AUD
* /HomeAlone2_NES_Src/AUD/AU.SYM
* /HomeAlone2_NES_Src/AUD/ERR
* /HomeAlone2_NES_Src/AUD/MK.BAT
* /HomeAlone2_NES_Src/AUD/BR-5AE7.MDS
* /HomeAlone2_NES_Src/AUD/AUDIO.AUD
* /HomeAlone2_NES_Src/AUD/AU.LOD
* /HomeAlone2_NES_Src/AUD/AU_DEFS.SRC
* /HomeAlone2_NES_Src/AUD/AUDIO.DOC
* /HomeAlone2_NES_Src/AUD/NES.H
* /HomeAlone2_NES_Src/AUD/AUDIO.A65
* /HomeAlone2_NES_Src/AUD/AU.BAT
* /HomeAlone2_NES_Src/AUD/AUPROG.LOD
* /HomeAlone2_NES_Src/AUD/HMA2_062.TXT
* /HomeAlone2_NES_Src/AUD/MUSIC.AUD
* /HomeAlone2_NES_Src/AUD/SEQUENCE.AUD
* /HomeAlone2_NES_Src/AUD/AUDIO.DAT
* /HomeAlone2_NES_Src/AUD/MUSIC.A65
* /HomeAlone2_NES_Src/AUD/AU_CODE.SRC
* /HomeAlone2_NES_Src/AUD/AUDIONZP.AUD
* /HomeAlone2_NES_Src/AUD/AUDIOZP.AUD
* /HomeAlone2_NES_Src/AUD/WAVE.DAT
* /HomeAlone2_NES_Src/AUD/SOUND.AUD
* /HomeAlone2_NES_Src/AUD/AUDIODRU.AUD
* /HomeAlone2_NES_Src/AUD/AUDIO.SYM
* /HomeAlone2_NES_Src/AUD/AUDIOINC.AUD
* /HomeAlone2_NES_Src/AUD/AUDIOFFP.AUD
* /HomeAlone2_NES_Src/AUD/DRUMS.A65
* /HomeAlone2_NES_Src/AUD/AUDIO.LOD
* /HomeAlone2_NES_Src/AUD/AU.A65
* /HomeAlone2_NES_Src/PUB
* /HomeAlone2_NES_Src/PUB/DLDISK.BAT
* /HomeAlone2_NES_Src/PUB/STACOD.SRC
* /HomeAlone2_NES_Src/PUB/PUBVAR.SRC
* /HomeAlone2_NES_Src/PUB/PUBBRN.SRC
* /HomeAlone2_NES_Src/PUB/CLEAN.BAT
* /HomeAlone2_NES_Src/PUB/FILEINFO.FI
* /HomeAlone2_NES_Src/PUB/PUBCOD.SRC
* /HomeAlone2_NES_Src/PUB/CLALL.BAT
* /HomeAlone2_NES_Src/PUB/PUBMAC.SRC
* /HomeAlone2_NES_Src/PUB/GR
* /HomeAlone2_NES_Src/PUB/GR/KNEW.LBM
* /HomeAlone2_NES_Src/PUB/GR/RLCMP.EXE
* /HomeAlone2_NES_Src/PUB/GR/KEVINMIS.LBM
* /HomeAlone2_NES_Src/PUB/GR/KEVIN.LBM
* /HomeAlone2_NES_Src/PUB/GR/DP_PREFS
* /HomeAlone2_NES_Src/PUB/GR/PUBCOM.LBM
* /HomeAlone2_NES_Src/PUB/GR/KEVINRUN.LBM
* /HomeAlone2_NES_Src/PUB/GR/BLANK.LBM
* /HomeAlone2_NES_Src/PUB/GR/PICKUPS.CEW
* /HomeAlone2_NES_Src/PUB/GR/KNEWS.LBM
* /HomeAlone2_NES_Src/PUB/GR/KNEW2.LBM
* /HomeAlone2_NES_Src/PUB/GR/KNEW3.LBM
* /HomeAlone2_NES_Src/PUB/GR/_BACKUP_.LBM
* /HomeAlone2_NES_Src/PUB/GR/myapp.txt
* /HomeAlone2_NES_Src/PUB/GR/GR.MAK
* /HomeAlone2_NES_Src/PUB/GR/KEVINOLD.LBM
* /HomeAlone2_NES_Src/PUB/GR/ALI.NIN
* /HomeAlone2_NES_Src/PUB/GR/BU
* /HomeAlone2_NES_Src/PUB/GR/BU/PUBCOM.SPR
* /HomeAlone2_NES_Src/PUB/GR/PICKUPS.LBM
* /HomeAlone2_NES_Src/PUB/GR/KEVINJMP.LBM
* /HomeAlone2_NES_Src/PUB/GR/L2N.EXE
* /HomeAlone2_NES_Src/PUB/STAVAR.SRC
* /HomeAlone2_NES_Src/PUB/MKDISK.BAT
* /HomeAlone2_NES_Src/PUB/MMNVAR.SRC
* /HomeAlone2_NES_Src/PUB/BSUBS.SRC
* /HomeAlone2_NES_Src/PUB/PUBEQU.SRC
* /HomeAlone2_NES_Src/PUB/MMC1LOD.BAT
* /HomeAlone2_NES_Src/PUB/PUBPGF.SRC
* /HomeAlone2_NES_Src/PUB/STAEQU.SRC
* /HomeAlone2_NES_Src/PUB/B3CSET.BIN
* /HomeAlone2_NES_Src/PUB/MF.BAT
* /HomeAlone2_NES_Src/PUB/WLDP
* /HomeAlone2_NES_Src/PUB/B3PROG1.BIN
* /HomeAlone2_NES_Src/PUB/DLALL.BAT
* /HomeAlone2_NES_Src/PUB/AF.BAT
* /HomeAlone2_NES_Src/PUB/PUBSET.SRC
* /HomeAlone2_NES_Src/PUB/MVMAIN.SRC
* /HomeAlone2_NES_Src/PUB/DIRID.SRC
* /HomeAlone2_NES_Src/PUB/PUBCOM.SRC
* /HomeAlone2_NES_Src/PUB/PUBCOM.CEW
* /HomeAlone2_NES_Src/PUB/PUBINT.SRC
* /HomeAlone2_NES_Src/PUB/SFC.SRC
* /HomeAlone2_NES_Src/PUB/TMP.BAT
* /HomeAlone2_NES_Src/BlofPost
* /HomeAlone2_NES_Src/BlofPost/Pub_GR_Sheet_0003.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0008.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0009.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0001.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0015.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0014.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0000.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0016.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0002.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0003.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0013.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0007.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0006.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0012.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0004.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0010.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0011.jpg
* /HomeAlone2_NES_Src/BlofPost/Sheet_0005.jpg
* /HomeAlone2_NES_Src/UTL
* /HomeAlone2_NES_Src/UTL/LOD2RAW.EXE
* /HomeAlone2_NES_Src/UTL/CMERGE.EXE
* /HomeAlone2_NES_Src/UTL/NIN2OBJ2.EXE
* /HomeAlone2_NES_Src/UTL/RLCMP.EXE
* /HomeAlone2_NES_Src/UTL/CNGNIN.EXE
* /HomeAlone2_NES_Src/UTL/FILEINFO.FI
* /HomeAlone2_NES_Src/UTL/NIN2LOD.EXE
* /HomeAlone2_NES_Src/UTL/PKZIP.EXE
* /HomeAlone2_NES_Src/UTL/CMATCH.EXE
* /HomeAlone2_NES_Src/UTL/A65.EXE
* /HomeAlone2_NES_Src/UTL/L2G.EXE
* /HomeAlone2_NES_Src/UTL/err
* /HomeAlone2_NES_Src/UTL/POPD.EXE
* /HomeAlone2_NES_Src/UTL/ERRCHK.EXE
* /HomeAlone2_NES_Src/UTL/MK.BAT
* /HomeAlone2_NES_Src/UTL/WLD2RAW.EXE
* /HomeAlone2_NES_Src/UTL/RAWMRG.EXE
* /HomeAlone2_NES_Src/UTL/LBM2NIN.EXE
* /HomeAlone2_NES_Src/UTL/TM.EXE
* /HomeAlone2_NES_Src/UTL/BKUP.BAT
* /HomeAlone2_NES_Src/UTL/NOTE.EXE
* /HomeAlone2_NES_Src/UTL/MAKE.EXE
* /HomeAlone2_NES_Src/UTL/JTS.BAT
* /HomeAlone2_NES_Src/UTL/MW.EXE
* /HomeAlone2_NES_Src/UTL/AD.BAT
* /HomeAlone2_NES_Src/UTL/NIN2RAW.EXE
* /HomeAlone2_NES_Src/UTL/CSM.EXE
* /HomeAlone2_NES_Src/UTL/PUSHD.EXE
* /HomeAlone2_NES_Src/UTL/EGAVGA.BGI
* /HomeAlone2_NES_Src/UTL/DL.EXE
* /HomeAlone2_NES_Src/UTL/TXTCMP.EXE
* /HomeAlone2_NES_Src/UTL/PKUNZIP.EXE
* /HomeAlone2_NES_Src/UTL/LOD2BIN.EXE
* /HomeAlone2_NES_Src/UTL/IN.EXE
* /HomeAlone2_NES_Src/UTL/A65WLD.BAT
* /HomeAlone2_NES_Src/UTL/OUT.EXE
* /HomeAlone2_NES_Src/UTL/L2N.EXE
* /HomeAlone2_NES_Src/BASE
* /HomeAlone2_NES_Src/BASE/BNKMAC.SRC
* /HomeAlone2_NES_Src/BASE/BASETABS.SRC
* /HomeAlone2_NES_Src/BASE/BASE.CEW
* /HomeAlone2_NES_Src/BASE/ASMSET.SRC
* /HomeAlone2_NES_Src/BASE/BNKEQU.SRC
* /HomeAlone2_NES_Src/BASE/BASE.A65
* /HomeAlone2_NES_Src/BASE/BASVAR.SRC
* /HomeAlone2_NES_Src/BASE/JOYEQU.SRC
* /HomeAlone2_NES_Src/BASE/BASMAC.SRC
* /HomeAlone2_NES_Src/BASE/BNKSET.A65
* /HomeAlone2_NES_Src/BASE/BASE.OLD
* /HomeAlone2_NES_Src/BASE/BASEQU.SRC
* /HomeAlone2_NES_Src/SETPATH.BAT
</div>

{% include folder-browser.html selector="#filelist1" %}

## Directory Analysis

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
  <tr>
    <td>CMERGE.EXE</td>
    <td>Merge Char sets (e.g merge family char set and jail1 set) and returns a NIN file</td>
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
    <td>RAW image format (why have these when we have the LBM files?)</td>
  </tr>
  <tr>
    <td>.LOD</td>
    <td>I think this is compiled object files from assembly but not sure why its called LOD</td>
  </tr>
  <tr>
    <td>.LBM</td>
    <td>Deluxe Paint Images (Interlaced bitmaps), can be opened with XnViewMP</td>
  </tr>
  <tr>
    <td>.GRP</td>
    <td></td>
  </tr>
  <tr>
    <td>.SRC</td>
    <td>6502 Assembler Header files used for includes</td>
  </tr>
  <tr>
    <td>.A65</td>
    <td>6502 Assembler Source Code Implementation files</td>
  </tr>
  <tr>
    <td>.CEW</td>
    <td>6502 Assembler Source Code but with some minor differences</td>
  </tr>
  <tr>
    <td>.GME</td>
    <td>6502 Assembler Source Code Implementation files, these are only located in the Engine folder so does it stand for Game Engine?</td>
  </tr>
</table>


### Game Asset Pipeline

The game uses GNU Makefiles to build its assets into the shippable product. It all starts with Deluxe Paint on the Amiga, the artists draw pixel art on pre-defined templates and save them as the standard Deluxe Paint .LBM files.

Those LBM files need to be converted into a format that the game engine can read and display on the screen. To convert the .LBM format into a NES friendly (2bpp) image format the developers use a tool called "l2n" which I presume they developed themselves or license from another game development studio.

The .MAK makefiles have the format:

```make

movie1.nin:	movie1.lbm

#

#		"create movie 1 screen"

#

		l2n movie1

```

Where movie1.nin is the output file expected by the makefile and movie1.lbm is the input file.

### BASE Directory

The BASE directory contains all the glue code that puts everything together, sets up the banking etc.

#### BASE.A65 vs BASE.CEW

There seems to be three different versions of the "BASE" file, all with minor differences. I'm trying to figure out what CEW stands for as I presume the main build is the BASE.A65 file. 

It looks like BASE.CEW is older than its .A65 sibling as the A65 version has additional code plus some of the CEW code commented out.

The third file is BASE.OLD which presumably is just an older version of BASE.A65 and not that interesting.

### DEVDOC Directory (Developer Documentation)

This directory contains some very interesting documentation written by the developers for how to use the game engine, scripting etc.

<table>
  <tr>
    <td>File Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ADDING.DOC      </td>
    <td>Describes how to go about creating a new ll* directory for the game (local levels). </td>
  </tr>
  <tr>
    <td>FILEINFO.FI    </td>
    <td>Information about the other files in the directory, mentions Game Boy but not sure the purpose of this file.</td>
  </tr>
  <tr>
    <td>INSTALL.DOC</td>
    <td>Installing a new project directory on your hard drive</td>
  </tr>
  <tr>
    <td>NEWNES.DOC      </td>
    <td>Documents how to build the project for different environments, such as Prod, Demo etc</td>
  </tr>
  <tr>
    <td>SCRPDOC.DOC</td>
    <td>Engine scripting documentation, how to use the scripting language</td>
  </tr>
  <tr>
    <td>TEMPLATE</td>
    <td>A bunch of Comment Templates for use in the assembly code, for example how to document a function similar to javadoc.</td>
  </tr>
</table>


### PUB (Public?) Directory

This directory seems to contain all the assets that are required on every level, for example the main character sprites and pickups.

I presume its called public because other developers can work on their own "local levels" but share the PUB folder with each other when they make changes.

#### PUB/GR (Public Graphics directory)

Mainly contains LBM files (Deluxe Paint) for Kevin and pickups used in all the other levels.

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_2.jpg)

### Local Level Directories (ll0 -> ll4)

I presume these are the different game levels?

#### Common FIles

<table>
  <tr>
    <td>CLEAN.BAT</td>
    <td>Clean the folder by removing all the compiled files (*.nin, *.lod, *.spr, *.mem etc)</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


### Local Level 0

#### Local level 0 Backgrounds

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_3.jpg)

#### Local Level 0 Graphics (ll0/GR)

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_4.jpg)

### Local Level 1

#### Local Level 01 Backgrounds

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_5.jpg)

#### Local Level 01 Graphics

![image alt text]({{ site.url }}/public/XYg5KG06Vbr1qMtPjnDcXg_img_6.jpg)

### Local vs Full Game build

It looks like there are 2 different ways to compile the game, one is a 'local build' which only contains a certain level (ll0, ll1 etc) and the other is the full game which contains all the levels.

### ENG (Game Engine) Directory

### Developers
* Tony Lau
* Christoper Will (Is he known in the code as Henry C. Will IV? )
* Joseph A. Moses (Known in the code as Jesus? )

