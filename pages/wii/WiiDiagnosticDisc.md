---
layout: post
tags: 
- wii
- sdk
- leak
- gc
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
* **ati** - Wii C header files created by ATI and BroadOn (forked from artx folder)
* **cp** - Character Pipeline C Header files for 3d character models skinning and animation by Nintendo
* **diag** - C Header files specifically for the DIAG Wii/Gamecube diagnostic disc
* **dolphin** - Misc Gamecube header files such as for parsing JPEG images and the Audio interface
* **simplekit** - Simple Kit library by Hiratsu Daisuke for rendering lines, rectangles, circles and text
* **uji** - Not quite sure what the UJI library is but contains barcode, gamepad input and image headers

There are also three top level header files, two of which should have been included in the ATI folder instead (in Our Opinion) are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
ahb | .h | Include file for declaring **PHYS_TO_PROTECTED** and **ACR_PROT_REGS_BASE** macros by ATI
ahb_fdl_defs | .h | Include file for declaring tons of preprocessor defines that has been generated by **ahb_fdl_defs.fdl**
diaginfo | .h | Include file for declaring common pre-processor defines for the name and version information

Interesting information in the **diaginfo.h** file is that it mentions **Bollywood** which is a version of the **Hollywood** graphics chip, with added security (preventing the **Trucha** Exploit).

It also mentions the following information:

Date | ID | Version of DIAG | Name
---|---|---|---
2006/07/20 | RVL-064J | 4.3.0 | DIAG 4.3
2006/07/28 | RVL-067J | 4.4.0 | DIAG 4.4
2006/08/02 | RVL-100J | 4.4.1 | RVL_AGING 1.0
2006/08/20 | RVL-121J | 4.4.2 | RVL_FINAL_CHECKER 1.0
2006/08/22 | RVL-123J | 4.4.3 | RVL_BOARD_CHECKER 1.0
2008/06/03 | RVL-011E | 4.7.0 | DIAG 4.7 (for Bollywood)
2008/06/30 | RVL-012E | 4.8.0 | DIAG 4.8 (for Hollywood and Bollywood)
2008/09/03 | RVL-013E | 4.9.0 | DIAG 4.9 (for Hollywood and Bollywood)

For more information on **Bollywood** check out this page: [Bollywood - RGDWiki](https://wiki.raregamingdump.ca/index.php/Bollywood)

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
  <div class="css-folder css-folder-left wow slideInLeft postImage">simplekit</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C Headers of the **simplekit** library for rendering simple shapes to the screen such as Lines, rectangles, circles and even text.

  </div>
</section>  

File Name | Extension | Description
---|---|---
simplekit | .h | Include file for declaring all of the helpful render functions such as **SKITRenderText**


<div class="rr-source-code-title">Code Files</div>
<section class="rr-main-cards">
  <div class="rr-file-card">
    <img class="geopattern" data-title="simplekit.h" />
  <h3>simplekit.h</h3>
  <ul>
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
  <div class="rr-file-stats">    
     <div class="rr-file-stat rr-file-stats-functions">11</div>
    <div class="rr-file-stat rr-file-stats-variables">0</div>
    <div class="rr-file-stat rr-file-stats-lines">47</div>
  </div>
</div>

</section>

---
### Uji (/include/uji)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/uji</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C Header include files for the UJI utility library, but what is the UJI library for? Some header files call it the **Dolphin DEMO library** so it looks like a simple library of common functions used for small Gamecube demos.

  </div>
</section>  

This folder simply contains one top level include which is used to include all the files in the sub directory **/utility**.

File Name | Extension | Description
---|---|---
UJIUtility | .h | Include file for including all the other header files in the utility directory 


---
#### Utility (/include/uji/utility)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/uji/utility</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the actual source code for the entire **uji** library, these could easily have been put top level but maybe there was a plan to add additional folders of functionality to uji which never happened. 

  </div>
</section>  

File Name | Extension | Description
---|---|---
BasicPad | .h | Include file for declaring 2 C structures **BASIC_PAD_TYPE** and **JPad** that hold button presses and stick X/Y position
BasicPuts | .h | Include file for declaring **DsPuts** and **DsPrintf** functions that draw text to the screen buffer
Crc | .h | Include file for declaring a function to compute the CRC 32 of a buffer **ComputeCRC32**
InitSystem | .h | Include file for declaring initialisation functions such as **InitSystem** along with render functions such as **BeforeRender** and **DoneRender**
Layer | .h | Include file for declaring a layer system where you can have multiple layers of images on screen, text layers etc
LayerInterface | .h | Include file for declaring the two main structures used for layers: **_tagLayerManager** and **_tagLayer** (ILayer)
Menu | .h | Include file for declaring Menu related structures such as **MENU_ELEMENT_TYPE** and **MENU_TYPE** along with functions **menuOpen** and **ShowMenu**
PortExi | .h | Include file for declaring what looks like connection via a Exi port, not sure what it is but it has functions **portWrite** and **portRead**
Thread | .h | Include file for declaring functions to start threads such as **jStartGxThread** and  **jStartPadThread**
WriteLog | .h | Include file for declaring functions that allow writing to log fines in NAND
barcode | .h | Include file for declaring a few functions to draw a 2D barcode containing text messages such as **BarcodePrint**
chklog | .h | Include file for declaring functions for checking log messages in NAND such as **CheckHwWriteLog**
dpsram | .h | Include file for declaring Dual Ported SRam functions such as **commSend** and **commReceive**
sled | .h | Include file for declaring functions such as **SledOn** and **SledFlashStart**, not really sure what Sled is however, an LED interface would be a guess

The most interesting part of this codebase is the LayerSystem allowing easy drawing of Menus with Images and Text, very useful when creating gamecube/wii demos.

If we didn't already have multiple homebrew examples showing off similar functionality this would be a great library to recommend for anyone wanting to create some simple 2D interfaces on the Gamecube!

<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="BasicPad.h" />
  <h3>BasicPad.h</h3>
  <ul>
    <li><span>JPad</span> jPad[PAD_MAX_CONTROLLERS]</li> 
    <li><span>BOOL</span> Down</li> 
    <li><span>BOOL</span> Left</li> 
    <li><span>BOOL</span> Right</li> 
    <li><span>BOOL</span> A</li> 
    <li><span></span> BOOL B</li> 
    <li><span>BO</span> L L</li> 
    <li><span>BOOL</span> R</li> 
    <li><span>BOOL</span> X</li> 
    <li><span>BOOL</span> Y</li> 
    <li><span>BOOL</span> Z</li> 
    <li><span>BOOL</span> Start</li> 
    <li><span></span> BASIC_PAD_TYPE</li> 
    <li><span>BASIC_PAD_TYPE </span> padGet<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padWait<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padGetRaw<span>(void)</span></li> 
    <li><span>BASIC_PAD_TYPE </span> padGetRawEx<span>(u32 num)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">13</div>    <div class="rr-file-stat rr-file-stats-lines">100</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="BasicPuts.h" />
  <h3>BasicPuts.h</h3>
  <ul>
    <li><span>OSFontHeader </span> GetRomFontHeader<span>(void)</span></li> 
    <li><span>const GXColor</span> DefaultTextPalette[DEFAULT_TEXT_PALETTE_NUM]</li> 
    <li><span>void</span> InitRomFont<span>(void)</span></li> 
    <li><span>OSFontHeader </span> GetRomFontHeader<span>(void)</span></li> 
    <li><span>void</span> DsSetROMFontSize<span>(s16 size,s16 space)</span></li> 
    <li><span>void</span> DsGetROMFontSize<span>(s16 *size,s16 *space)</span></li> 
    <li><span>u32</span> DsSetFontColor<span>(u32 color)</span></li> 
    <li><span>int</span> DsPuts<span>(s16 x,s16 y,s16 z,char *string)</span></li> 
    <li><span>int</span> DsPrintf<span>(s16 x,s16 y,s16 z,char *fmt,...)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="Crc.h" />
  <h3>Crc.h</h3>
  <ul>
    <li><span>u32</span> ComputeCRC32<span>(u8 *buf,u32 length)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">26</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="InitSystem.h" />
  <h3>InitSystem.h</h3>
  <ul>
    <li><span>void</span> InitSystem<span>(GXRenderModeObj *mode)</span></li> 
    <li><span>BOOL</span> InitLayerSystem<span>(MEMAllocator *hHeap,ILayer layer)</span></li> 
    <li><span>MEMAllocator </span> GetSysAllocator<span>(void)</span></li> 
    <li><span>void</span> InitAllocator<span>(MemPack *userMem1,MemPack *userMem2)</span></li> 
    <li><span>void</span> BeforeRender<span>(void)</span></li> 
    <li><span>void</span> DoneRender<span>(void)</span></li> 
    <li><span>void</span> SwapBuffers<span>(void)</span></li> 
    <li><span>GXRenderModeObj </span> GetRenderModeObj<span>(void)</span></li> 
    <li><span>void </span> GetCurrentBuffer<span>(void)</span></li> 
    <li><span>void</span> ReInit<span>(GXRenderModeObj *mode)</span></li> 
    <li><span>void</span> SwapRmodeBuffers<span>(RMODE_SET mode)</span></li> 
    <li><span>OSThreadQueue</span> jPostRetraceCallbackThreadQueue</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">91</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="Layer.h" />
  <h3>Layer.h</h3>
  <ul>
    <li><span>LGradationColor</span> DefaultBgGradPallete[]</li> 
    <li><span>ILayer</span> LtCreateTextLayer<span>(s32 x,s32 y,s32 chrElmsX,s32 chrElmsY,s32 bufferHeight)</span></li> 
    <li><span>void</span> LtPrintf<span>(ILayer layer,char *format,...)</span></li> 
    <li><span>void</span> LtPrintfEx<span>(ILayer layer,LPOINT cursor,char *format,...)</span></li> 
    <li><span>void</span> LtPuts<span>(ILayer layer,char *buffer)</span></li> 
    <li><span>void</span> LtPutsEx<span>(ILayer layer,LPOINT cursor,char *buffer)</span></li> 
    <li><span>u32</span> LtSetTextColor<span>(ILayer layer,u32 color)</span></li> 
    <li><span>u32</span> LtGetTextColor<span>(ILayer layer)</span></li> 
    <li><span>BOOL</span> LtSetTextReverse<span>(ILayer layer,BOOL reverse)</span></li> 
    <li><span>BOOL</span> LtGetTextReverse<span>(ILayer layer)</span></li> 
    <li><span>BOOL</span> LtSetTextBlink<span>(ILayer layer,BOOL blink)</span></li> 
    <li><span>BOOL</span> LtGetTextBlink<span>(ILayer layer)</span></li> 
    <li><span>s32</span> LtSetTextFontHeight<span>(ILayer layer,s32 fontHeight)</span></li> 
    <li><span>s32</span> LtGetTextFontHeight<span>(ILayer layer)</span></li> 
    <li><span>BOOL</span> LtSetTextCursorVisible<span>(ILayer layer,BOOL visible)</span></li> 
    <li><span>BOOL</span> LtGetTextCursorVisible<span>(ILayer layer)</span></li> 
    <li><span>LPOINT</span> LtSetTextCursor<span>(ILayer layer,LPOINT cursor)</span></li> 
    <li><span>LPOINT</span> LtGetTextCursor<span>(ILayer layer)</span></li> 
    <li><span>u32</span> LtInputDataEx<span>(ILayer layer,u32 Initial)</span></li> 
    <li><span>u16</span> LtInputData16Ex<span>(ILayer layer,u16 Initial)</span></li> 
    <li><span>u32</span> LtInputDecimalEx<span>(ILayer layer,u32 Initial)</span></li> 
    <li><span>BOOL</span> LtInputBoolEx<span>(ILayer layer,BOOL Value)</span></li> 
    <li><span>u32</span> LtInputData<span>(u32 Initial)</span></li> 
    <li><span>u16</span> LtInputData16<span>(u16 Initial)</span></li> 
    <li><span>u32</span> LtInputDecimal<span>(u32 Initial)</span></li> 
    <li><span>BOOL</span> LtInputBool<span>(BOOL Value)</span></li> 
    <li><span>BOOL</span> LtShowMessage<span>(const char *Message)</span></li> 
    <li><span>ILayer</span> LiCreateImageLayer<span>(s32 x,s32 y,u32 width,u32 height,char *fileName)</span></li> 
    <li><span>void</span> LiAdjustImageSizeIntoOriginal<span>(ILayer layer)</span></li> 
    <li><span>LRatio</span> LiSetImageRatio<span>(ILayer layer,LRatio ratio)</span></li> 
    <li><span>LRatio</span> LiGetImageRatio<span>(ILayer layer)</span></li> 
    <li><span>u32</span> LiSetImageId<span>(ILayer layer,u32 id)</span></li> 
    <li><span>u32</span> LiGetImageId<span>(ILayer layer)</span></li> 
    <li><span>void</span> LmSetRootLayer<span>(ILayer layer)</span></li> 
    <li><span>ILayer</span> LmGetRootLayer<span>(void)</span></li> 
    <li><span>void</span> LmSetCurrentLayer<span>(ILayer layer)</span></li> 
    <li><span>ILayer</span> LmGetCurrentLayer<span>(void)</span></li> 
    <li><span>ILayer</span> LmCreateSubLayer<span>(s32 x,s32 y,u32 w,u32 h)</span></li> 
    <li><span>ILayer</span> LmCreateTextSubLayerEx<span>(char *name,s32 x,s32 y,s32 chrElmsX,s32 chrElmsY,s32 bufferHeight)</span></li> 
    <li><span>ILayer</span> LmCreateTextSubLayer<span>(char *name,s32 x,s32 y,s32 chrElmsX,s32 chrElmsY)</span></li> 
    <li><span>ILayer</span> LmCreateImageSubLayer<span>(s32 x,s32 y,u32 width,u32 height,char *fileName)</span></li> 
    <li><span>BOOL</span> LmDeleteLayer<span>(ILayer layer)</span></li> 
    <li><span>BOOL</span> LmDeleteSubLayer<span>(ILayer layer)</span></li> 
    <li><span>BOOL</span> LmDeleteSubLayerIndex<span>(s32 index)</span></li> 
    <li><span>ILayer</span> LmGetSubLayer<span>(s32 index)</span></li> 
    <li><span>void</span> LmIntoLayer<span>(s32 index)</span></li> 
    <li><span>void</span> LmBackLayer<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">46</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">213</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="LayerInterface.h" />
  <h3>LayerInterface.h</h3>
  <ul>
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
  <h3>Menu.h</h3>
  <ul>
    <li><span>void</span> menuOpen<span>(ILayer Layer,MENU_TYPE *MENU)</span></li> 
    <li><span>void</span> ShowMenu<span>(ILayer layer,const MENU_TYPE *Menu)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">66</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="PortExi.h" />
  <h3>PortExi.h</h3>
  <ul>
    <li><span>BOOL</span> portProbe<span>(void)</span></li> 
    <li><span>s32</span> portWrite<span>(u32 address,u32 data)</span></li> 
    <li><span>s32</span> portRead<span>(u32 address,u32 *data)</span></li> 
    <li><span>u32</span> portGetExiFreq<span>(void)</span></li> 
    <li><span>void</span> portSetExiFreq<span>(u32 freq)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">42</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="Thread.h" />
  <h3>Thread.h</h3>
  <ul>
    <li><span>void</span> jStartGxThread<span>(OSPriority priority)</span></li> 
    <li><span>void</span> jGxSuspendThread<span>(void)</span></li> 
    <li><span>void</span> jGxResumeThread<span>(void)</span></li> 
    <li><span>void</span> jStartPadThread<span>(OSPriority priority)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">44</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="WriteLog.h" />
  <h3>WriteLog.h</h3>
  <ul>
    <li><span>s32</span> InspectionLog<span>(char *test_name,char *test_result,char *test_Ver)</span></li> 
    <li><span>s32</span> WriteFreeLog<span>(char *test_name,char *test_result,char *test_Ver)</span></li> 
    <li><span>s32</span> InspectionLogFunc<span>(char *nand_dir_name,char *nand_file_name,char *test_name,char *test_result,char *test_Ver)</span></li> 
    <li><span>s32</span> WriteLogToNand<span>(char *nand_dir_name,char *nand_file_name,void *write_buf)</span></li> 
    <li><span>s32</span> WriteAgingLog<span>(char *test_name,char *test_result,char *test_Ver)</span></li> 
    <li><span>s32</span> WriteAgingInfo<span>(char *aging_info)</span></li> 
    <li><span>s32</span> AgingLogFunc<span>(char *nand_dir_name,char *nand_file_name,char *test_name,char *test_result,char *test_Ver)</span></li> 
    <li><span>s32</span> WriteFreeLogToNand<span>(char *nand_dir_name,char *nand_file_name,void *write_buf)</span></li> 
    <li><span>s32</span> CheckOneProcess<span>(char *nand_file_name,char *test_name)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">152</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="barcode.h" />
  <h3>barcode.h</h3>
  <ul>
    <li><span>void</span> InitBarcode<span>(MEMAllocator *pAllocator,ILayer *layer)</span></li> 
    <li><span>int</span> GetBarcodeScan<span>(char *strSerialNo,int timeout)</span></li> 
    <li><span>void</span> BarcodePrint<span>(char *format,...)</span></li> 
    <li><span>void</span> BarcodePrintEx<span>(LPOINT lp,char *format,...)</span></li> 
    <li><span>ILayer</span> GetBarcodeILayer<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">59</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="chklog.h" />
  <h3>chklog.h</h3>
  <ul>
    <li><span>s32</span> CheckHwWriteLog<span>(MEMHeapHandle heap)</span></li> 
    <li><span>s32</span> CheckProcessFunc<span>(char *nand_file_name,u32 test_num,char test_name[][64],MEMHeapHandle heap)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">56</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dpsram.h" />
  <h3>dpsram.h</h3>
  <ul>
    <li><span>void</span> commSend<span>(u32 ErrorCode,u32 *Data,int DataSize)</span></li> 
    <li><span>BOOL</span> commCanReceive<span>(void)</span></li> 
    <li><span>BOOL</span> commReceive<span>(u16 *InstructionCode,u32 *Data,int DataSize)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">43</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sled.h" />
  <h3>sled.h</h3>
  <ul>
    <li><span>void</span> SledTestStart<span>(void)</span></li> 
    <li><span>void</span> SledTestOk<span>(void)</span></li> 
    <li><span>void</span> SledTestNg<span>(void)</span></li> 
    <li><span>void</span> SledOn<span>(void)</span></li> 
    <li><span>void</span> SledOff<span>(void)</span></li> 
    <li><span>void</span> SledFlashStart<span>(int flash_time)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">26</div>  </div>
 </div>

</section>

---
### Diag Test SDK Headers (/include/diag)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/diag</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains C Header files that make up the Diag SDK to write tests that run in the **DIAG4** tool.

It seems most of the files are mostly written by ArtX but others have japanese comments which suggests Nintendo has modified it.

  </div>
</section>  

File Name | Extension | Description
---|---|---
SItoUSB | .h | Include file for declaring functions that send data from the Serial Interface to USB
SIusbOSReport | .h | Include file for declaring functions that write an Operating System Report via the USB interface
diagcommon | .h | Include file for declaring common functions used in DIAG tests to get and set environment settings
diagerr | .h | Include file for declaring pre-processor constants such as **DE_GECKO** and **DE_AES**
diagsdk | .h | Include file for declaring functions that must be called by every test such as **DIAGStart**
sdio | .h | Include file for declaring structures and functions for interfacing with SD cards
sdm | .h | Include file for declaring higher level constants and functions for SD card file systems such as reading and writing a particular file
wkreport | .h | Include file for declaring functions to read and write data using **Waikiki**


The main question we have after looking into the files in this folder is what exactly is Waikiki, it looks like some sort of interface and has a function that allows it to be probed **WKProbe**.


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="SItoUSB.h" />
  <h3>SItoUSB.h</h3>
  <ul>
    <li><span>BOOL</span> SIusbCheckDev<span>(s32 chan)</span></li> 
    <li><span>BOOL</span> SIusbReset<span>(s32 chan,u32 *buf)</span></li> 
    <li><span>BOOL</span> SIusbGetStatus<span>(s32 chan,u32 *buf)</span></li> 
    <li><span>BOOL</span> SIusbCheckFifo<span>(s32 chan,u16 *buf)</span></li> 
    <li><span>BOOL</span> SIusbTrans<span>(s32 chan,u8 wr_size,void *wr_buf,u8 rd_size,void *rd_buf)</span></li> 
    <li><span>BOOL</span> SIusbTransAsync<span>(s32 chan,u8 wr_size,void *wr_buf,u8 rd_size,void *rd_buf,SIUSBcallback callback)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">39</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="SIusbOSReport.h" />
  <h3>SIusbOSReport.h</h3>
  <ul>
    <li><span>BOOL</span> SIusbCheckAllReportFinish<span>(void)</span></li> 
    <li><span>BOOL</span> SIusbOSReportInit<span>(void)</span></li> 
    <li><span>void</span> SIusbOSReportOri<span>(const char *msg,...)</span></li> 
    <li><span>void</span> SIusbOSReport<span>(const char *msg,...)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">21</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="diagcommon.h" />
  <h3>diagcommon.h</h3>
  <ul>
    <li><span>s32</span> DIAGGetEnv<span>(Env *env)</span></li> 
    <li><span>void</span> DIAGPutEnv<span>(Env *env)</span></li> 
    <li><span>u32</span> DIAGGetSettingLoop<span>(void)</span></li> 
    <li><span>u32</span> DIAGGetCurrentLoop<span>(void)</span></li> 
    <li><span>s32</span> DIAGGetCfg<span>(Cfg *cfg)</span></li> 
    <li><span>void</span> DIAGPutCfg<span>(Cfg *cfg)</span></li> 
    <li><span>void</span> __OSLaunchMenu<span>(void)</span></li> 
    <li><span>void</span> __OSRelaunchTitle<span>(void)</span></li> 
    <li><span>s32</span> NANDFinalize<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">147</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="diagsdk.h" />
  <h3>diagsdk.h</h3>
  <ul>
    <li><span>u32</span> DIAGStart<span>(void)</span></li> 
    <li><span>void</span> DIAGStop<span>(u32 status)</span></li> 
    <li><span>BOOL</span> DIAGGetLogDest<span>(s32 *chan,u32 *dev)</span></li> 
    <li><span>s32</span> DIAGProbeBarnacle<span>(s32 chan,u32 dev)</span></li> 
    <li><span>BOOL</span> DIAGReadBarnacle<span>(s32 chan,u32 dev,u32 command,u8 *result)</span></li> 
    <li><span>BOOL</span> DIAGCheckIPL<span>(void)</span></li> 
    <li><span>u32</span> DIAGGetHwRev<span>(void)</span></li> 
    <li><span>void</span> DIAGReportStart<span>(void)</span></li> 
    <li><span>void</span> DIAGReportStop<span>(void)</span></li> 
    <li><span>BOOL</span> DIAGReportStat<span>(void)</span></li> 
    <li><span>void</span> DIAGInitCRC<span>(int argc,char **argv)</span></li> 
    <li><span>u32</span> DIAGComputeCRC<span>(s32 *buf,u32 size)</span></li> 
    <li><span>s32</span> DIAGCheckCRC<span>(s32 *buf,u32 size)</span></li> 
    <li><span>u32</span> DIAGGetCRCValue<span>()</span></li> 
    <li><span>s32</span> DIAGGetCRCCount<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">15</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">86</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sdio.h" />
  <h3>sdio.h</h3>
  <ul>
    <li><span>void</span> sdi_init_intr<span>(void(*irqCb)(void))</span></li> 
    <li><span>void</span> sdi_init<span>(void(*irqCb)(void))</span></li> 
    <li><span>sdi_slot_t</span> sdi_handle<span>(u32 ctrl,u32 slot)</span></li> 
    <li><span>void</span> sdi_set_debug<span>(u32 debug)</span></li> 
    <li><span>u32</span> sdi_rd_reg<span>(sdi_slot_t sp,u32 offset)</span></li> 
    <li><span>void</span> sdi_wr_reg<span>(sdi_slot_t sp,u32 offset,u32 val)</span></li> 
    <li><span>void</span> sdi_wr_reg16<span>(sdi_slot_t sp,u32 offset,u32 val)</span></li> 
    <li><span>u32</span> sdi_verif_reg<span>(sdi_slot_t sp,u32 offset,u32 expected)</span></li> 
    <li><span>void</span> sdi_reg_intr<span>(sdi_slot_t sp,u32 intr,void(*irq)(sdi_slot_t,void *),void *closure)</span></li> 
    <li><span>void</span> sdi_intr<span>(void)</span></li> 
    <li><span>u32</span> sdi_get_istat<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_clear_istat<span>(sdi_slot_t sp,u32 ibits)</span></li> 
    <li><span>u32</span> sdi_wait_istat<span>(sdi_slot_t sp,u32 ibits,u32 bail_on_abort)</span></li> 
    <li><span>void</span> sdi_wr_host_ctrl<span>(sdi_slot_t sp,u32 in_data)</span></li> 
    <li><span>void</span> sdi_int_regs_en<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_wr_nor_int_sts_en<span>(sdi_slot_t sp,u32 en)</span></li> 
    <li><span>void</span> sdi_wr_err_int_sts_en<span>(sdi_slot_t sp,u32 en)</span></li> 
    <li><span>void</span> sdi_err_int_recover<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd<span>(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd)</span></li> 
    <li><span>u32</span> sdi_io_cmd<span>(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd,u32 blk_size,u32 blk_cnt,u32 dma,u32 wr)</span></li> 
    <li><span>void</span> sdi_read_io_coherency<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_write_io_coherency<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_resp_type_cal<span>(sdi_slot_t sp,u32 cmd_index,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_mem_cmd<span>(sdi_slot_t sp,u32 cmd_index,u32 arg,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_mem_cmd_data<span>(sdi_slot_t sp,u32 sysaddr,u32 cmd_index,u32 blk_size,u32 blk_cnt,u32 data_addr,u32 dma,u32 wr,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd0<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd2<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd3<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd7<span>(sdi_slot_t sp,u32 rca)</span></li> 
    <li><span>u32</span> sdi_cmd9<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd12<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd13<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd16<span>(sdi_slot_t sp,u32 dflt_blk_size)</span></li> 
    <li><span>u32</span> sdi_cmd17<span>(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd18<span>(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd23<span>(sdi_slot_t sp,u32 blk_cnt)</span></li> 
    <li><span>u32</span> sdi_cmd24<span>(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd25<span>(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd32<span>(sdi_slot_t sp,u32 start_blk_addr)</span></li> 
    <li><span>u32</span> sdi_cmd33<span>(sdi_slot_t sp,u32 end_blk_addr)</span></li> 
    <li><span>u32</span> sdi_cmd38<span>(sdi_slot_t sp,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd52<span>(sdi_slot_t sp,u32 reg_addr,u32 sd_wr_data,u32 fn_no,u32 raw,u32 wr,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioByteRead<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioByteWrite<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 wr_data,u32 raw,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtRead<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtWrite<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd53<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 wr,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd55<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_acmd6<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>u32</span> sdi_dma_done<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_abort<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_suspend<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_resume<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_set_async_mode<span>(sdi_slot_t sp,u32 mode)</span></li> 
    <li><span>void</span> sdi_wr_clk_ctrl<span>(sdi_slot_t sp,u32 clk_ctrl)</span></li> 
    <li><span>void</span> sdi_wr_blk_gap_ctrl<span>(sdi_slot_t sp,u32 bgap_ctrl)</span></li> 
    <li><span>void</span> sdi_wr_timeout_reg<span>(sdi_slot_t sp,u32 timeout_cnt)</span></li> 
    <li><span>void</span> sdi_set_bus_width<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>void</span> sdi_rd_sd_hc_capabilities<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_clock_supply<span>(sdi_slot_t sp,u32 div)</span></li> 
    <li><span>void</span> sdi_clock_stop<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_clock_change<span>(sdi_slot_t sp,u32 div)</span></li> 
    <li><span>void</span> sdi_bus_power<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_validate_ocr<span>(sdi_slot_t sp,u32 ocr_data,u32 mem,u32 mmc)</span></li> 
    <li><span>u32</span> sdi_card_insertion<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_io_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_mem_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_mmc_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSwapBytes4<span>(u32 value)</span></li> 
    <li><span>u32</span> checkErrorInt<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiCardDetect<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiCardInit<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> waitTransferComplete<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiGoIdle<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiIoReset<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiSoftReset<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sendCmd<span>(sdi_slot_t sp,u32 arg,u32 tmdcmd)</span></li> 
    <li><span>u32</span> sdiSendStatus<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendOpCondition<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiAllSendCid<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendRca<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendCsd<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSelectCard<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSetBlockLength<span>(sdi_slot_t sp,u32 blksiz)</span></li> 
    <li><span>u32</span> sdiSetBusWidth<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>u32</span> sdiAsyncAbort<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSyncAbort<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> updateDmaPointer<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiReadSingleBlock<span>(sdi_slot_t sp,u32 arg,u32 *rdbuf,u32 dma)</span></li> 
    <li><span>u32</span> sdiWriteSingleBlock<span>(sdi_slot_t sp,u32 arg,u32 *wrbuf,u32 dma)</span></li> 
    <li><span>u32</span> sdiReadBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiWriteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiReadMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12)</span></li> 
    <li><span>u32</span> sdiWriteMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12)</span></li> 
    <li><span>u32</span> sdiReadInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>u32</span> sdiWriteInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>void</span> sdi_init_ird<span>(sdi_slot_t sp,u32 ctrl,u32 slot,void(*irqCb)(void))</span></li> 
    <li><span>void</span> sdi_clear_hcstruct<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdio_initUSBSDIPLLs<span>()</span></li> 
    <li><span>void</span> sdio_DisableGpio<span>(void)</span></li> 
    <li><span>void</span> sdio_EnableIOPJtag<span>(void)</span></li> 
    <li><span>void</span> sdio_acr_iostrctrl1<span>(u8 val)</span></li> 
    <li><span>u32</span> sdio_SelectCard<span>(sdi_slot_t sp,u32 rca)</span></li> 
    <li><span>u32</span> sdio_setHSpd<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_setHSpd2<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_setNmlSpd<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_getscr<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_cidcheck<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_csdcheck<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_scrcheck<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_check_cins<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_check_crmv<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdio_udelay<span>(u32 delay)</span></li> 
    <li><span>void</span> sdio_hc_swrst<span>(sdi_slot_t sp,u32 type)</span></li> 
    <li><span>u32</span> sdio_wait_programend<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_DeSelectCard<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdio_rwsdioreg<span>(sdi_slot_t sp,u32 wr,u32 fn_no,u32 blk_size,u32 blk_mode,u32 opcode,u32 reg_addr,u32 blk_cnt,u32 sysaddr,u32 dma)</span></li> 
    <li><span>u32</span> checkStatus<span>(sdi_slot_t sp)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">118</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">498</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sdm.h" />
  <h3>sdm.h</h3>
  <ul>
    <li><span>struct partitiontable_s</span> __attribute__<span>((packed))</span></li> 
    <li><span>struct partitionboot_s</span> __attribute__<span>((packed))</span></li> 
    <li><span>s32</span> SDMInit<span>(BOOL,int)</span></li> 
    <li><span>s32</span> SDMOpen<span>(struct direntry *de,char *filename)</span></li> 
    <li><span>s32</span> SDMOpenDirFile<span>(struct direntry *de,char *name)</span></li> 
    <li><span>s32</span> SDMRead<span>(struct direntry *de,s32 id,u8 *data)</span></li> 
    <li><span>s32</span> SDMFindFirst<span>(struct direntry *de)</span></li> 
    <li><span>s32</span> SDMFindNext<span>(struct direntry *de)</span></li> 
    <li><span>s32</span> SDMDirFileFind<span>(struct direntry *de,char *name)</span></li> 
    <li><span>void</span> SDMSetAccessMode<span>(BOOL in)</span></li> 
    <li><span>void</span> SDMFinish<span>()</span></li> 
    <li><span>void </span> SDMAlloc<span>(u32 size)</span></li> 
    <li><span>void</span> SDMFree<span>(void *in)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">108</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="wkreport.h" />
  <h3>wkreport.h</h3>
  <ul>
    <li><span>BOOL</span> WKProbe<span>(s32 chan)</span></li> 
    <li><span>BOOL</span> WKCheckBuf<span>(s32 chan,u16 *send,u16 *recv)</span></li> 
    <li><span>BOOL</span> WKFlushBuf<span>(s32 chan)</span></li> 
    <li><span>s32</span> WKRead<span>(s32 chan,void *buf,u32 len)</span></li> 
    <li><span>s32</span> WKWrite<span>(s32 chan,void *buf,u32 len)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">22</div>  </div>
 </div>

</section>

---
### Dolphin (/include/dolphin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/dolphin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a subset of files from the **Dolphin OS**.

  </div>
</section>  

File Name | Extension | Description
---|---|---
ais | .h | Include file for declaring the Audio Interface constants and functions
ar | .h | Include file for declaring  functions and constants that access memory from ARAM
arq | .h | Include file for declaring functions and structures for a ARAM based Queue implementation
doldefs | .h | Include file for declaring a few preprocessor macros such as **DOLPHIN_LIB_VERSION**
dtk | .h | Include file for declaring functions and structures for a DVD Audio Track Player such as **DTKQueueTrack**
hio | .h | Include file for declaring Windows API functions called the Host Interface that can read and write data including something called a Mailbox
jpeg | .h | Include file for declaring functions to convert JPEG images to Textures such as **JPEGDecompressToTexRGBA8**

The most interesting file in this directory is **hio.h** which acts as a host interface sending and receiving data from the Gamecube/Wii to a windows PC. It also has the concept of a Mailbox, but it is uncertain how it works without finding the implementation files.

<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="ais.h" />
  <h3>ais.h</h3>
  <ul>
    <li><span>AISCallback</span> AIRegisterStreamCallback<span>(AISCallback callback)</span></li> 
    <li><span>u32</span> AIGetStreamSampleCount<span>(void)</span></li> 
    <li><span>void</span> AIResetStreamSampleCount<span>(void)</span></li> 
    <li><span>void</span> AISetStreamTrigger<span>(u32 trigger)</span></li> 
    <li><span>u32</span> AIGetStreamTrigger<span>(void)</span></li> 
    <li><span>void</span> AISetStreamPlayState<span>(u32 state)</span></li> 
    <li><span>u32</span> AIGetStreamPlayState<span>(void)</span></li> 
    <li><span>void</span> AISetStreamSampleRate<span>(u32 rate)</span></li> 
    <li><span>u32</span> AIGetStreamSampleRate<span>(void)</span></li> 
    <li><span>void</span> AISetStreamVolLeft<span>(u8 vol)</span></li> 
    <li><span>void</span> AISetStreamVolRight<span>(u8 vol)</span></li> 
    <li><span>u8</span> AIGetStreamVolLeft<span>(void)</span></li> 
    <li><span>u8</span> AIGetStreamVolRight<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">86</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ar.h" />
  <h3>ar.h</h3>
  <ul>
    <li><span>ARCallback</span> ARRegisterDMACallback<span>(ARCallback callback)</span></li> 
    <li><span>u32</span> ARGetDMAStatus<span>(void)</span></li> 
    <li><span>void</span> ARStartDMA<span>(u32 type,u32 mainmem_addr,u32 aram_addr,u32 length)</span></li> 
    <li><span>u32</span> ARInit<span>(u32 *stack_index_addr,u32 num_entries)</span></li> 
    <li><span>u32</span> ARGetBaseAddress<span>(void)</span></li> 
    <li><span>BOOL</span> ARCheckInit<span>(void)</span></li> 
    <li><span>void</span> ARReset<span>(void)</span></li> 
    <li><span>u32</span> ARAlloc<span>(u32 length)</span></li> 
    <li><span>u32</span> ARFree<span>(u32 *length)</span></li> 
    <li><span>u32</span> ARGetSize<span>(void)</span></li> 
    <li><span>u32</span> ARGetInternalSize<span>(void)</span></li> 
    <li><span>void</span> ARSetSize<span>(void)</span></li> 
    <li><span>void</span> ARClear<span>(u32 flag)</span></li> 
    <li><span>void</span> __ARClearInterrupt<span>(void)</span></li> 
    <li><span>u16</span> __ARGetInterruptStatus<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">15</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">173</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="arq.h" />
  <h3>arq.h</h3>
  <ul>
    <li><span>void</span> ARQInit<span>(void)</span></li> 
    <li><span>void</span> ARQReset<span>(void)</span></li> 
    <li><span>void</span> ARQPostRequest<span>(ARQRequest *task,u32 owner,u32 type,u32 priority,u32 source,u32 dest,u32 length,ARQCallback callback)</span></li> 
    <li><span>void</span> ARQRemoveRequest<span>(ARQRequest *task)</span></li> 
    <li><span>void</span> ARQRemoveOwnerRequest<span>(u32 owner)</span></li> 
    <li><span>void</span> ARQFlushQueue<span>(void)</span></li> 
    <li><span>void</span> ARQSetChunkSize<span>(u32 size)</span></li> 
    <li><span>u32</span> ARQGetChunkSize<span>(void)</span></li> 
    <li><span>BOOL</span> ARQCheckInit<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">125</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dtk.h" />
  <h3>dtk.h</h3>
  <ul>
    <li><span>void</span> DTKInit<span>(void)</span></li> 
    <li><span>void</span> DTKShutdown<span>(void)</span></li> 
    <li><span>u32</span> DTKQueueTrack<span>(char *fileName,DTKTrack *track,u32 eventMask,DTKCallback callback)</span></li> 
    <li><span>u32</span> DTKRemoveTrack<span>(DTKTrack *track)</span></li> 
    <li><span>BOOL</span> DTKFlushTracks<span>(DTKFlushCallback callback)</span></li> 
    <li><span>void</span> DTKSetSampleRate<span>(u32 samplerate)</span></li> 
    <li><span>u32</span> DTKGetSampleRate<span>(void)</span></li> 
    <li><span>void</span> DTKSetInterruptFrequency<span>(u32 samples)</span></li> 
    <li><span>u32</span> DTKGetInterruptFrequency<span>(void)</span></li> 
    <li><span>void</span> DTKSetRepeatMode<span>(u32 repeat)</span></li> 
    <li><span>u32</span> DTKGetRepeatMode<span>(void)</span></li> 
    <li><span>BOOL</span> DTKSetState<span>(u32 state)</span></li> 
    <li><span>u32</span> DTKGetState<span>(void)</span></li> 
    <li><span>BOOL</span> DTKNextTrack<span>(void)</span></li> 
    <li><span>BOOL</span> DTKPrevTrack<span>(void)</span></li> 
    <li><span>u32</span> DTKGetPosition<span>(void)</span></li> 
    <li><span>DTKTrack </span> DTKGetCurrentTrack<span>(void)</span></li> 
    <li><span>void</span> DTKSetVolume<span>(u8 left,u8 right)</span></li> 
    <li><span>u16</span> DTKGetVolume<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">19</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">112</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hio.h" />
  <h3>hio.h</h3>
  <ul>
    <li><span>BOOL WINAPI</span> HIOEnumDevices<span>(HIOEnumCallback callback)</span></li> 
    <li><span>BOOL WINAPI</span> HIOInit<span>(s32 chan,HIOCallback callback)</span></li> 
    <li><span>BOOL WINAPI</span> HIOInitEx<span>(s32 chan,u32 dev,HIOCallback callback)</span></li> 
    <li><span>BOOL WINAPI</span> HIOReadMailbox<span>(u32 *word)</span></li> 
    <li><span>BOOL WINAPI</span> HIOWriteMailbox<span>(u32 word)</span></li> 
    <li><span>BOOL WINAPI</span> HIORead<span>(u32 addr,void *buffer,s32 size)</span></li> 
    <li><span>BOOL WINAPI</span> HIOWrite<span>(u32 addr,const void *buffer,s32 size)</span></li> 
    <li><span>BOOL WINAPI</span> HIOReadAsync<span>(u32 addr,void *buffer,s32 size,HIOCallback callback)</span></li> 
    <li><span>BOOL WINAPI</span> HIOWriteAsync<span>(u32 addr,const void *buffer,s32 size,HIOCallback callback)</span></li> 
    <li><span>BOOL WINAPI</span> HIOReadStatus<span>(u32 *status)</span></li> 
    <li><span>BOOL WINAPI</span> HIOInit2<span>(s32 chan,HIOCallback callback,HIONotify notify,void *param)</span></li> 
    <li><span>BOOL WINAPI</span> HIOInitEx2<span>(s32 chan,s32 dev,HIOCallback callback,HIONotify notify,void *param)</span></li> 
    <li><span>void WINAPI</span> HIOExit<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">77</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="jpeg.h" />
  <h3>jpeg.h</h3>
  <ul>
    <li><span>BOOL</span> JPEGGetFileInfo<span>(u8 *jpegData,JPEGFileInfo *info)</span></li> 
    <li><span>u32</span> JPEGCalcMemory<span>(JPEGFileInfo *info)</span></li> 
    <li><span>BOOL</span> JPEGOpenDecompressor<span>(JPEGDecompressor *decomp,u8 *errorCode,u8 *workSpace,u8 *jpegData,JPEGFileInfo *info)</span></li> 
    <li><span>void</span> JPEGDecompressRawImage<span>(JPEGDecompressor *decomp,void *dataY,void *dataCb,void *dataCr)</span></li> 
    <li><span>void</span> JPEGDecompressToXfb<span>(JPEGDecompressor *decomp,void *xfbData,u32 xfbWidth,u32 xfbHeight)</span></li> 
    <li><span>void</span> JPEGDecompressToTexYCbCr<span>(JPEGDecompressor *decomp,void *texY,void *texCb,void *texCr)</span></li> 
    <li><span>void</span> JPEGDecompressToTexRGBA8<span>(JPEGDecompressor *decomp,void *texData,u8 alpha)</span></li> 
    <li><span>BOOL</span> JPEGGetNextRGBA8Tile<span>(JPEGDecompressor *decomp,void *texData,u8 alpha,BOOL init)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">172</div>  </div>
 </div>

</section>

---
### Artx (/include/artx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/artx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Gamecube header files provided by the Company ArtX, the company later changed its name to ATI during the development of the wii.

This folder is provided for use in the Gamecube DIAG tests and there is an updated version of this folder with Wii support in the **ati** folder.

Since most of the files in this folder have a more up to date version in the **ati** folder, they will not be documented here as it would be very repetitive. So check out the section on the ATI folder below instead.

For more information you can take a diff of the two folders if you are especially interested in the differences but overall it is not of much interest to most users.

  </div>
</section>  

---
### ATI Low Level SDK (/include/ati)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/ati</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C header files that provide low level acess to the wii hardware. This library was originally written for the gamecube and then updated for the Wii, it was created by ATI (formally ArtX).

This library was not provided to third party developers in the official SDK and so was only used for internal tools and software such as the Wii Operating system known as **IOS**.

This section was rather big so we have moved it out into its own post instead, you can view our post documenting this SDK here:

  </div>
</section>  
{% include link-to-other-post.html post="/ati-low-level-wii-sdk/" description="For more information about the ATI Low level SDK for Wii check out this post." %}
