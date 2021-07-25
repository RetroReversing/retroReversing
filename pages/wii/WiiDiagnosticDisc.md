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
* MDL format - Used by MDDL.exe seems to describe all the different diagnostic tests split into groups such as **Board_Aging** etc

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

This root folder also contains some important files used to build the DVD image, which are described in the table below.
  </div>
</section>  

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

There is reference to both Hollywood and Hollywood-1 (Bollywood) in the document from 2009, Hollywood is the original version of the Wii graphics chip and Hollywood-1 is the second more secure version aslso known as Bollywood. The references to Hollywood-1 and Bollywood are in the document **diag_attention_for_MP.txt** but are all in Japanese so it is hard to understand exactly what it is saying.

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
 This folder contains the source code and a pre-compiled executable for a Windows GUI program called MDDLWin.

MDDLWin is a tool to make it easier to manage all the different tests that will be executed in the DIAG tool on the Wii. 

Each test has its own compiled ELF that will be executed on the console along with some meta data such as the test name, a description and a unique 2 byte ID.


  </div>
</section>  

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">MddlWin - A Windows GUI created by Nintendo to organise which tests will be written to the Wii/Gamecube Diagnostic Disc. Each test is its own ELF file that tests a specific part of the hardware. <a href="https://t.co/dnLAUO4CN3">pic.twitter.com/dnLAUO4CN3</a></p>&mdash; 🕹 RetroReversing.com - Reverse Retro Games 🕹 (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1419260438810877960?ref_src=twsrc%5Etfw">July 25, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The main window is split into 3 top sections:
* **DIAG** - Lists all the tests along with their 2 byte unique ID
* **GROUP** - You can group multiple DIAGs together by dragging and dropping from DIAG to GROUP
* **MASTER** - You can drag and drop items from either the DIAG or GROUP lists here and only these tests will be written to DVD root.

Under the DIAG list there is a bunch of toggle buttons such as **GEKKO** these filter the DIAG list to only include the category of tests that have been toggled.

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
MDDLWin_manual.jp | .doc | Japanese manual giving brief introduction to the interface
TFileStream2 | .cpp, .h | Implementation of a simple file stream, to read bytes line by line
Unit1 | .cpp, .dfm, .h | Implementation of the GUI (TForm1) such as tree view drag and drop and loading MDL files
makedol | .c, .h | The source code for the makedol tool that converts ELF to DOL format
mddl | .bpr, .cpp, .res | Just contains the **WinMain** to create the Unit1 form, standard template from Borland C++ Builder
mddlwin | .exe | Pre-compiled executable of the tool for Windows

The project was written using Borland C++ Builder and if you have the IDE you can open the project file **mddl.bpr**.

The **Unit1.dfm** file can be edited in C++ Builder as it contains the layout of the main Form. The implementation that goes along with the form is **Unit1.cpp** and has the code for loading the MDL file and populating the form.

The code for Unit1 is fairly standard C++ Builder code so it might not be particularly interesting to you, unless you are interested in the MDL format.

What is more interesting the reverse engineers is the source code for the **makedol** tool which is contained in **makedol.c**. This tool converts compiled ELF files into the Gamecube/Wii executable Dolphin file. This can be worth a read if you have ever wondered about the difference between .DOL and .ELF files.

If you are interested in the DOL format, it is partly documented in this WiiBrew page: [DOL - WiiBrew](https://wiibrew.org/wiki/DOL)

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

---
## Include (/include)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the C/C++ Header files used throughout all the different DIAG tests. 

It is split into seven subfolders:
* **artx** - Gamecube C header files created by ARTX INC.
* **ati** - Wii C header files created by ATI and BroadOn
* **cp** - Character Pipeline C Header files for 3d character models skinning and animation by Nintendo
* **diag** - C Header files specifically for the DIAG Wii/Gamecube diagnostic disc
* **dolphin** - Misc Gamecube header files such as for parsing JPEG images and the Audio interface
* **simplekit** - Simple Kit library by Hiratsu Daisuke for rendering lines, rectangles, circles and text
* **uji** - Not quite sure what the UJI library is but contains barcode, gamepad input and image headers

  </div>
</section>  

There are also three top level header files, two of which should have been included in the ATI folder instead (in Our Opinion) are described in the table below:

File Name | Extension | Description
---|---|---
ahb | .h | Include file for declaring **PHYS_TO_PROTECTED** and **ACR_PROT_REGS_BASE** macros by ATI
ahb_fdl_defs | .h | Include file for declaring tons of preprocessor defines that has been generated by **ahb_fdl_defs.fdl**
diaginfo | .h | Include file for declaring common pre-processor defines for the name and version information

Interesting information in the **diaginfo.h** file is that it mentions **Bollywood** which is a version of the **Hollywood** graphics chip, with added security (preventing the **Trucha** Exploit).

It also mentions the following information:
Date | ID | Version of DIAG | Name
---|---|---
2006/07/20 | RVL-064J | 4.3.0 | DIAG 4.3
2006/07/28 | RVL-067J | 4.4.0 | DIAG 4.4
2006/08/02 | RVL-100J | 4.4.1 | RVL_AGING 1.0
2006/08/20 | RVL-121J | 4.4.2 | RVL_FINAL_CHECKER 1.0
2006/08/22 | RVL-123J | 4.4.3 | RVL_BOARD_CHECKER 1.0
2008/06/03 | RVL-011E | 4.7.0 | DIAG 4.7 (for Bollywood)
2008/06/30 | RVL-012E | 4.8.0 | DIAG 4.8 (for Hollywood and Bollywood)
2008/09/03 | RVL-013E | 4.9.0 | DIAG 4.9 (for Hollywood and Bollywood)

For more information on **Bollywood** check out this page: [Bollywood - RGDWiki](https://wiki.raregamingdump.ca/index.php/Bollywood)

<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
  <div class="rr-file-card">
  <img class="geopattern" data-title="ahb.h" />
  <h3>ahb.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">24</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="ahb_fdl_defs.h" />
  <h3>ahb_fdl_defs.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">14322</div>  </div>
</div>

</section>

---
### Character Pipeline (CP) (/include/cp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/cp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C Header files for the Character Pipeline SDK that was created for the Gamecube and presumably used for Wii titles too. This seems to be a more up to date version that the one previously leaked as this one has references to the year 2002.

The Character Pipeline SDK will be covered separately in its own post in the future, so the files won't be described here.
  </div>
</section>  

---
### Simplekit (/include/simplekit)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/simplekit</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C Headers of the **simplekit** library for rendering simple shapes to the screen such as Lines, rectangles, circles and even text.

  </div>
</section>  

File Name | Extension | Description
---|---|---
simplekit | .h | Include file for declaring all of the helpful render functions such as **SKITRenderText**


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
  <div class="rr-file-card">
  <img class="geopattern" data-title="simplekit.h" />
  <h3>simplekit.h</h3><ul>
    <li><span>void</span> SKITInit<span>(void)</span></li> 
    <li><span>void</span> SKITRenderPoint<span>(int x,int y,int pixel,u32 clr)</span></li> 
    <li><span>void</span> SKITRenderText<span>(int x,int y,f32 scale,const char *msg)</span></li> 
    <li><span>void</span> SKITRenderLine<span>(s16 x1,s16 y1,s16 x2,s16 y2,u32 clr)</span></li> 
    <li><span>void</span> SKITRenderRectangle<span>(s16 x1,s16 y1,s16 x2,s16 y2,u32 clr)</span></li> 
    <li><span>void</span> SKITRenderCircle<span>(s16 x,s16 y,s16 r,s16 div,u32 clr)</span></li> 
    <li><span>void</span> SKITRenderTime<span>(int x,int y,f32 scale)</span></li> 
    <li><span>void</span> SKITResetHandler<span>(void)</span></li> 
    <li><span>void</span> SKITWaitMilliSec<span>(u32 msec)</span></li> 
    <li><span>void</span> SKITWaitMicroSec<span>(u32 usec)</span></li> 
    <li><span>void</span> SKITWaitNanoSec<span>(u32 nsec)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">47</div>  </div>
</div>
</div>

</section>

---
### Uji (/include/uji)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/uji</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C Header include files for the UJI utility library, but what is the UJI library for?

  </div>
</section>  

File Name | Extension | Description
---|---|---
UJIUtility | .h | Include file for including all the other header files in the utility directory 


---
#### Utility (/include/uji/utility)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/uji/utility</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
BasicPad | .h | Include file for declaring 
BasicPuts | .h | Include file for declaring 
Crc | .h | Include file for declaring 
InitSystem | .h | Include file for declaring 
Layer | .h | Include file for declaring 
LayerInterface | .h | Include file for declaring 
Menu | .h | Include file for declaring 
PortExi | .h | Include file for declaring 
Thread | .h | Include file for declaring 
WriteLog | .h | Include file for declaring 
barcode | .h | Include file for declaring 
chklog | .h | Include file for declaring 
dpsram | .h | Include file for declaring 
sled | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
  <div class="rr-file-card">
  <img class="geopattern" data-title="BasicPad.h" />
  <h3>BasicPad.h</h3><ul>
    <li><span>JPad</span> jPad[PAD_MAX_CONTROLLERS]</li> 
    <li><span>BASIC_PAD_TYPE </span> padGet<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padWait<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padGetRaw<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padGetRawEx<span>(u32 num)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">100</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="Crc.h" />
  <h3>Crc.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">26</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="InitSystem.h" />
  <h3>InitSystem.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">91</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="Layer.h" />
  <h3>Layer.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">213</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="LayerInterface.h" />
  <h3>LayerInterface.h</h3><ul>
    <li><span>ILayerManager</span> CreateLayerManager<span>(void)</span></li> 
    <li><span>u32</span> GetTemplateLayerSize<span>(void)</span></li> 
    <li><span>void</span> GetTemplateLayer<span>(void *layer)</span></li> 
    <li><span>ILayer</span> CreateLayer<span>(s32 x,s32 y,u32 width,u32 height)</span></li> 
    <li><span>void</span> DrawLayer<span>(ILayer layer)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">139</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="Menu.h" />
  <h3>Menu.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">66</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="PortExi.h" />
  <h3>PortExi.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">42</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="Thread.h" />
  <h3>Thread.h</h3><ul>
    <li><span>void</span> jStartGxThread<span>(OSPriority priority)</span></li> 
    <li><span>void</span> jGxSuspendThread<span>(void)</span></li> 
    <li><span>void</span> jGxResumeThread<span>(void)</span></li> 
    <li><span>void</span> jStartPadThread<span>(OSPriority priority)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">44</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="WriteLog.h" />
  <h3>WriteLog.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">152</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="barcode.h" />
  <h3>barcode.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">59</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="dpsram.h" />
  <h3>dpsram.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">43</div>  </div>
</div>

  <div class="rr-file-card">
  <img class="geopattern" data-title="sled.h" />
  <h3>sled.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">26</div>  </div>
</div>

</section>
