---
layout: post
tags: 
- wii
- sdk
- leak
title: Nintendo Wii Diagnostic Disc Source Code
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/wii/Nintendo Wii Diagnostic Disc Source Code.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/Nintendo Wii Diagnostic Disc Source Code.jpg
permalink: /nintendo-wii-diag4rvl-leak/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Wii
    url: /wii
  - name: Nintendo Wii Diagnostic Disc Source Code
    url: #
recommend: 
- wii
- sdk
editlink: /wii/WiiDiagnosticDisc.md
---
In the Nintendo leak on 20th July 2021 an archive called **DIAG4RVL.7z** was released to the internet, this archive contains a CVS repository containing  3 different software development kits for the Wii (codename Revolution).

The three folders that were contained inside this archive were:
* **DIAG** - Internal Wii Diagnostic Tool Source code
* **RevoEX** - Extensions to the Wii SDK
* **SDK** - Version 3.2 of the Wii SDK

The reason the SDK and RevoEX folder are included is they are dependencies required to build the DIAG tool from source.

The Wii SDK has been released before and we will have a separate post covering the contents of that folder in the near future. This post will focus on the contents of the **DIAG** folder.

# Introduction
Before going into depth about each of the files contained in the DIAG4RVL tool source code there are a few important things to note about the software and the hardware it runs on.

## What is DIAG4RVL?
Initially it was thought that the name DIAG4RVL just meant Diagnostic tool for Revolution (Wii), however it seems to actually be version 4 of the **Diag** tool, with version 3 being used for the Gamecube.

## Who used DIAG4?
DIAG4 was only to be used internally at Nintendo, apparently due to **security issues**. It is used to diagnose hardware issues with consoles. Presumably if you send a faulty Wii to Nintendo this is the disc they would put in the console to see what needed fixed.

## When was it released?
The first release of the DIAG4 tool was  in December 2005 and the last release (1.6) being released on the 8th August 2006 just a few months before the retail launch of the Wii.

Although according to the documentation file **DIAG_4_9_readme.txt** there was a version 4.9 released on the 9th of January 2009.

## What hardware did it run on?
It is to be run on the Wii development kit hardware (NDEV) but it is currently unverified if it runs on retail Wii hardware.

## How are the logs written?
The log files that are written during the execution of the tests are sent to the connected PC using one of the two tools:
* Barnacle (USB, RS232C connector)
* Waikiki (USB)

## What variants exist?
There are multiple variants of the Disc based on which parameters you supply to make, they each perform different tests.

The variants and the tests they perform are:
* **Master** - Runs most of the tests
    * Disk Name: RVL_DIAG_Ver4_91 (015E)
    * runs tests: full_auto aging_test sort_auto gfx_auto gtop_auto gekko_auto mem_auto manual info
* **Aging** - Runs tests to check how well the hardware ages
    * Disk Name: RVL_AGING_Ver1_0 (100J)
    * runs tests: ?
* **Master DIF** - Board Checking tests
    * Disk Name: Board_Checker_RVL_F (123J)
    * runs tests: Board_Aging Other
* **Master uji** - Possible for Retail Consoles? 
    * Disk Name: RVL_FINALIZED_DIAG_Ver2_0 (124E)
    * runs tests: sorting_f manual_f aging_test_f
* **NEC** - Seems to be a disc specific for a NEC hardware test
    * runs tests: NEC_auto info

## How is it built?
The Wii (Revolution) SDK is required to build the Diagnostic disk just like any wii game, so the DIAG4RVL.zip handily contains the wii SDK included in the folder **SDK**.

To build the SDK you need a working Wii SDK along with Cygwin, when you have that simply run the bash command to make the master disc image:
```bash
make master
```

## What does the build scripts execute?
As far as I can see building the DIAG4 Disc involves a number of different tools:
* mddl - Windows executable that takes in a .MDL file and builds a DVD_ROOT folder
* makedol - Converts the nmenu.elf file into a Gamecube/Wii executable .DOL file
* ndstop - 
* rvl0.pl - Perl script to?
* unix2dos - 
* elf2rom - 
* MakeTestPattern -

## What are all these file formats?
Here is a brief description of the main file formats you will encounter in this codebase:
* DDF format - seems to be the definition of the data to be written to a DVD such as the game name, company. Or it is used to emulate folders on a PC to act like they are a DVD for the development kit.
* MDL format - Used by MDDL.exe seems to descibe all the different diagnostic tests split into groups such as **Board_Aging** etc

---
# Wii DIAG tool Source Code (/)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage"></div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code and all the fields required to build the DIAG4 tool for Wii. 
It is split into five main folders:
* **build** - Contains the Source code for all the tests and tools used, this is the main folder of interest
* **docs** - Documentation mainly in Japanese
* **dvddata** - Contains all of the assets used by the various tests such as images sounds etc, these are copied straight to the DVD.
* **include** - All the C Header files used throughout the codebase
* **mddlwin** - Contains the source code to the MDDL.exe tool along with a manual in Japanese

  </div>
</section>  

This root folder also contains some important files used to build the DVD image, which are described in the table below.

File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
master | .ddf, .mdl | The Disk description files for building the Main DIAG4 DVD
master.aging | .ddf | Disk description file for building the Ageing tests DVD
master.dif | .ddf | Disk description file to create the Board Checking (DIF) DVD
master.uji | .ddf | Disk description file to create the Final DIAG4 DVD (possibly for retail hardware?)
readme.en | .txt | Short english documentation explaining how to build and use the discs


---
## Docs (/docs)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/docs</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation explaining how to use and how to write tests that verify the Nintendo Gamecube and Wii hardware. Since the Wii version of DIAG was just a fork of the original gamecube the documentation will mention either depending on how to date the document is.

  </div>
</section>  

File Name | Extension | Description
---|---|---
DIAG4_9_readme | .txt | Contains notes about DIAG version 4.9 such as the IOS (Wii OS) versions supported
DIAG4_list | .xls | List of all the tests along with a 2 byte identifier for the tests (e.g 0x0100)
NMENU_Option_Usage | .txt | English text document explaining the difference between the three different NMenu parameters (SD2NAND, NANDLoader, SDLoader)
PCB_Test_number | .xls | Seems to be a list of tests along with two different version numbers called MP and PP, unsure what they are
aging_sequence | .txt | The order in which to run the tests for the ageing disc
diag_attention_for_MP | .txt | Summary of DIAG precautions, mentions changes between Hollywood and Hollywood1, changes in the IOS Operating System
diag_gfx_check.jp | .doc | Japanese Word document containing details on how to write graphics tests for Flipper that are pass/fail, there are three methods (gfxoldbuFinish, CRC Compute, DIAGCheck CRC)
diag_memchk.jp | .doc | Word document describing how to write low level hardware tests for the various different memory chips inside the Nintendo Gamecube
diag_readme | .txt | Basic description of how to use the DIAG Tool for gamecube mentions Zebra and Gekko, but no idea what zebra is
err_code | .txt | Perl script with a .txt extensio that contains all the different error codes for each of the tests e.g tex-lodA, ddr_test etc
make_offset_sdimage_readme | .txt | Document explaining how to create and burn an SD Card image for use with SDLoader
sdloader_readme | .txt | Document explaining how to modify the DIAG tests via SD Card instead of burning a new Disc
trace_code | .txt | Document by BroadOn which describes all the different LED codes for Boot0/Boot1/Boot2/SD Card app/IOS boot, they are all one byte and are displayed as hexadecimal

There is reference to both Hollywood and Hollywood-1 (Bollywood) in the document from 2009, Hollywood is the Wii graphics chip but would Hollywood-1 be the initial codename for the WiiU GPU? Or is it just a revision for the Wii mini? The references to Hollywood-1 and Bollywood are in the document **diag_attention_for_MP.txt** but are all in Japanese so it is hard to understand exactly what it is saying.

One of the most interesting documents here is the **diag_gfx_check.jp.doc** file as it explains three different methods for verifying that the graphics hardware is working and code examples of how to use each one.

---
### ATI Hardware Docs (/docs/ati/hw/)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/docs/ati/hw/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a subset of content already leaked and documented in the Emerald leak. These documents were created by ATI and relate to the Wii hardware. For a description of the files check out our post on the Emerald Leak under the section **doc/hw/sys**.

  </div>
</section>  

---
## Mddlwin (/mddlwin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/mddlwin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code and executable for a Windows GUI program called MDDLWin.

  </div>
</section>  

File Name | Extension | Description
---|---|---
MDDLWin_manual.jp | .doc | 
TFileStream2 | .cpp, .h | 
Unit1 | .cpp, .dfm, .h | 
makedol | .c, .h | 
mddl | .bpr, .cpp, .res | 
mddlwin | .exe | Pre-compiled executable of the tool for Windows


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
  <div class="rr-file-card">
  <img class="geopattern" data-title="TFileStream2.cpp" />
  <h3>TFileStream2.cpp</h3><ul>
    <li><span>const int</span> bufsize</li> 
    <li><span>char</span> buffer[bufsize]</li> 
    <li><span>int</span> restsize</li> 
    <li><span>int</span> now</li> 
    <li><span>bool</span> isend</li> 
    <li><span></span> TFileStream2<span>::TFileStream2(const AnsiString s,Word in):TFileStream(s,in)</span></li> 
    <li><span>int __fastcall</span> TFileStream2<span>::Readln(void *p)</span></li> 
    <li><span>int __fastcall</span> TFileStream2<span>::Readst(char *p)</span></li> 
    <li><span>int</span> ScanString<span>(char *in,char *table)</span></li> 
    <li><span>char </span> ReadString<span>(char *in,char *table,bool *Find)</span></li> 
    <li><span>char </span> TrimString<span>(char *in,char *table)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">164</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="Unit1.cpp" />
  <h3>Unit1.cpp</h3><ul>
    <li><span></span> Form1 *Form1</li> 
    <li><span>AnsiString</span> ConvertSl<span>(char *s)</span></li> 
    <li><span>int</span> SearchGroup<span>(char *p)</span></li> 
    <li><span>int</span> SearchDiag<span>(char *p)</span></li> 
    <li><span>void</span> DecodeGroups<span>(char *groups,int *glink)</span></li> 
    <li><span>void</span> DecodeDiags<span>(char *diags,int *dlink)</span></li> 
    <li><span>bool</span> GetFileData<span>(AnsiString name,TSearchRec&sr)</span></li> 
    <li><span>void</span> CopyResource<span>(AnsiString from,AnsiString to,bool isDelete)</span></li> 
    <li><span>AnsiString</span> groupfile</li> 
    <li><span>AnsiString</span> diagfile</li> 
    <li><span>AnsiString</span> resourcefile</li> 
    <li><span>AnsiString</span> masterfile</li> 
    <li><span>AnsiString</span> dvdrootdir</li> 
    <li><span>AnsiString</span> mddldefname</li> 
    <li><span>char </span> ENV_ROOT</li> 
    <li><span>char </span> systemname</li> 
    <li><span>AnsiString</span> rootdir</li> 
    <li><span>const</span> BUTTON_WIDTH</li> 
    <li><span>const</span> BUTTON_HEIGHT</li> 
    <li><span></span> tablestr table[]</li> 
    <li><span>TPanel </span> list<span>[sizeof(table)/sizeof(tablestr)]</span></li> 
    <li><span>const</span> BUFFER_SIZE</li> 
    <li><span>int</span> DiagSize</li> 
    <li><span>int</span> GroupSize</li> 
    <li><span>DData</span> Diag[1000]</li> 
    <li><span>GData</span> Group[300]</li> 
    <li><span>bool</span> isTreeViewSelected</li> 
    <li><span>NodeStr</span> TV2Node</li> 
    <li><span>bool</span> ppcmode</li> 
    <li><span>int</span> Lang</li> 
    <li><span>__fastcall</span> TForm1<span>::TForm1(TComponent *Owner):TForm(Owner)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::FormClose(TObject *Sender,TCloseAction&Action)</span></li> 
    <li><span>bool</span> TForm1<span>::isSelectedDiag()</span></li> 
    <li><span>bool</span> TForm1<span>::isSelectedGroup()</span></li> 
    <li><span>char </span> AddResource<span>(TListBox *L,char *from,char *to)</span></li> 
    <li><span>DData </span> TForm1<span>::DoDiag(char *name,TFileStream2 *f,DData&Diag,TListBox *L)</span></li> 
    <li><span>GData </span> TForm1<span>::DoGroup(char *name,TFileStream2 *f,GData&Group)</span></li> 
    <li><span>int</span> SearchGroup<span>(char *p)</span></li> 
    <li><span>int</span> SearchDiag<span>(char *p)</span></li> 
    <li><span>void</span> DecodeGroups<span>(char *groups,int *glink)</span></li> 
    <li><span>void</span> DecodeDiags<span>(char *diags,int *dlink)</span></li> 
    <li><span>bool</span> TForm1<span>::ReadMddl(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)</span></li> 
    <li><span>bool</span> DoDiag2<span>(DData&Diag,TListBox *L,int&num)</span></li> 
    <li><span>bool</span> TForm1<span>::ReadMddl(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)</span></li> 
    <li><span>int __fastcall</span> TForm1<span>::SelectClick()</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::BevelClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::ListBox1Click(TObject *Sender)</span></li> 
    <li><span>struct NodeStr</span> TForm1<span>::Develop(bool isParent,int i,NodeStr Node,TTreeView *GroupTree)</span></li> 
    <li><span>struct NodeStr __fastcall</span> TForm1<span>::DevelopChild(int i,NodeStr Node,TTreeView *GroupTree)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::GroupReadClick()</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::GroupTreeClick(TObject *Sender)</span></li> 
    <li><span>AnsiString</span> ConvertSl<span>(char *s)</span></li> 
    <li><span>void</span> TForm1<span>::UpdateSystem()</span></li> 
    <li><span>void</span> TForm1<span>::ShowDiagContents(TListBox *ListBox,int target)</span></li> 
    <li><span>void</span> TForm1<span>::ShowGroupContents(TListBox *ListBox,int target)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::GroupTreeMouseDown(TObject *Sender,TMouseButton Button,TShiftState Shift,int X,int Y)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::JumpToClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::GroupTreeMouseUp(TObject *Sender,TMouseButton Button,TShiftState Shift,int X,int Y)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::MasterTreeDragOver(TObject *Sender,TObject *Source,int X,int Y,TDragState State,bool&Accept)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::MasterTreeDragDrop(TObject *Sender,TObject *Source,int X,int Y)</span></li> 
    <li><span>bool</span> GetFileData<span>(AnsiString name,TSearchRec&sr)</span></li> 
    <li><span>void</span> CopyResource<span>(AnsiString from,AnsiString to,bool isDelete)</span></li> 
    <li><span>bool</span> isMatchCache<span>(TListBox *L,AnsiString file,AnsiString dfile)</span></li> 
    <li><span>void</span> FDelete<span>(AnsiString dname,AnsiString fname)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::CreateButtonClick(TObject *Sender)</span></li> 
    <li><span>int</span> TForm1<span>::isMatchResource(AnsiString str,TListBox *L)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::FileFormatGroupClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::FormActivate(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::RootPanelClick(TObject *Sender)</span></li> 
    <li><span>void</span> TForm1<span>::ParseArg()</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::DvdrootPanelClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::MddlPanelClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::DeleteButtonClick(TObject *Sender)</span></li> 
    <li><span>void</span> TForm1<span>::SetErrorMessage(EMode mode,TListBox *L,AnsiString s)</span></li> 
    <li><span>void</span> TrimRAdd<span>(TListBox *L,AnsiString s)</span></li> 
    <li><span>void</span> TrimLAdd<span>(TListBox *L,AnsiString s)</span></li> 
    <li><span>void</span> TrimAdd<span>(TListBox *L,AnsiString s)</span></li> 
    <li><span>bool</span> TForm1<span>::ReadMddl2(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::CheckButtonClick(TObject *Sender)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::WMGetMinMaxInfo(TWMGetMinMaxInfo&msg)</span></li> 
    <li><span>void __fastcall</span> TForm1<span>::LangGroupClick(TObject *Sender)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">59</div>    <div class="rr-file-stat rr-file-stats-variables">22</div>    <div class="rr-file-stat rr-file-stats-lines">2294</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="makedol.c" />
  <h3>makedol.c</h3><ul>
    <li><span>u32</span> Verbose</li> 
    <li><span>ElfHdr</span> Eh</li> 
    <li><span>ElfPrgHdr </span> Ph</li> 
    <li><span>u32</span> Swap32<span>(u32 val)</span></li> 
    <li><span>u16</span> Swap16<span>(u16 val)</span></li> 
    <li><span>void</span> SwapPh<span>(ElfPrgHdr *pp)</span></li> 
    <li><span>void</span> SwapEh<span>(ElfHdr *ep)</span></li> 
    <li><span>DolImage </span> EatPh<span>(FILE *fp)</span></li> 
    <li><span>DolImage </span> ElfRead<span>(const char *elfFile)</span></li> 
    <li><span>int</span> Pad32<span>(FILE *fout,u32 bytes)</span></li> 
    <li><span>int</span> DumpDol<span>(DolImage *ip,char *outFile)</span></li> 
    <li><span>void</span> ConvertToUnixFmt<span>(char *fmt)</span></li> 
    <li><span>static u32</span> Swap32<span>(u32 val)</span></li> 
    <li><span>static u16</span> Swap16<span>(u16 val)</span></li> 
    <li><span>static void</span> SwapPh<span>(ElfPrgHdr *pp)</span></li> 
    <li><span>static void</span> SwapEh<span>(ElfHdr *ep)</span></li> 
    <li><span>static DolImage </span> EatPh<span>(FILE *fp)</span></li> 
    <li><span>static DolImage </span> ElfRead<span>(const char *elfFile)</span></li> 
    <li><span>static int</span> Pad32<span>(FILE *fout,u32 bytes)</span></li> 
    <li><span>static int</span> DumpDol<span>(DolImage *ip,char *outFile)</span></li> 
    <li><span>static void</span> ConvertToUnixFmt<span>(char *fmt)</span></li> 
    <li><span>int</span> MakeDol<span>(char *inFile,char *outFile)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">19</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">496</div>  </div>
</div>

</section>
