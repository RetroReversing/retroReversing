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
wkreport | .h | Include file for declaring functions to read and write over something called WK?


The main question we have after looking into the files in this folder is what exactly is WK, it looks like some sort of interface and has a function that allows it to be probed **WKProbe**.


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
### ATI low level SDK (/include/ati)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/ati</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C header files that provide low level acess to the wii hardware. This library was originally written for the gamecube and then updated for the Wii, it was created by ATI (formally ArtX).

This library was not provided to third party developers in the official SDK and so was only used for internal tools and software such as the Wii Operating system known as **IOS**.

  </div>
</section>  

File Name | Extension | Description
---|---|---
acr | .h | Include file for declaring 
aes | .h | Include file for declaring 
aesreg | .h | Include file for declaring 
ahb | .h | Include file for declaring 
ahbdbg | .h | Include file for declaring 
ai | .h | Include file for declaring 
ar_priv | .h | Include file for declaring 
aram | .h | Include file for declaring 
arch | .h | Include file for declaring 
args | .h | Include file for declaring 
assert | .h | Include file for declaring 
ati_usb | .h | Include file for declaring 
atidiag | .h | Include file for declaring 
ax_types | .h | Include file for declaring 
ax_ver | .h | Include file for declaring 
axdbg | .h | Include file for declaring 
axmc | .h | Include file for declaring 
big_endian | .h | Include file for declaring 
boot | .h | Include file for declaring 
busclient | .h | Include file for declaring 
casm | .inc | 
crc | .h | Include file for declaring 
dbg_viai_setup | .h | Include file for declaring 
dbgcomm | .h | Include file for declaring 
dbgint | .h | Include file for declaring 
dcbz_basic | .h | Include file for declaring 
di | .h | Include file for declaring 
diag | .h | Include file for declaring 
diagerr | .h | Include file for declaring 
dma_basic | .h | Include file for declaring 
dolcnt | .h | Include file for declaring 
dsp | .h | Include file for declaring 
dspfix | .h | Include file for declaring 
dspmxic | .h | Include file for declaring 
dvd | .h | Include file for declaring 
dvdfs | .h | Include file for declaring 
ehci | .h | Include file for declaring 
ehci-hcd | .h | Include file for declaring 
ela | .h | Include file for declaring 
exi | .h | Include file for declaring 
eximdm | .h | Include file for declaring 
fifo | .h | Include file for declaring 
filerand | .h | Include file for declaring 
filerandom | .h | Include file for declaring 
flash | .h | Include file for declaring 
font | .h | Include file for declaring 
gecko_dma | .h | Include file for declaring 
generic | .h | Include file for declaring 
getopt | .h | Include file for declaring 
gfxbu | .h | Include file for declaring 
gfxoldbu | .h | Include file for declaring 
gpioexi | .h | Include file for declaring 
hcd | .h | Include file for declaring 
hidutil | .h | Include file for declaring 
hub | .h | Include file for declaring 
i2c | .h | Include file for declaring 
irq | .h | Include file for declaring 
lib | .h | Include file for declaring 
little_endian | .h | Include file for declaring 
lomem | .h | Include file for declaring 
mc | .h | Include file for declaring 
mem | .h | Include file for declaring 
ml | .h | Include file for declaring 
mrexi | .h | Include file for declaring 
n64cnt | .h | Include file for declaring 
ntd_regs | .h | Include file for declaring 
nvram | .h | Include file for declaring 
os | .h | Include file for declaring 
reset | .h | Include file for declaring 
sdi | .h | Include file for declaring 
serrx | .h | Include file for declaring 
sfx | .h | Include file for declaring 
sha | .h | Include file for declaring 
si | .h | Include file for declaring 
snake | .h | Include file for declaring 
standio | .h | Include file for declaring 
swab | .h | Include file for declaring 
types | .h | Include file for declaring 
usb | .h | Include file for declaring 
usb-ohci | .h | Include file for declaring 
usb_bitops | .h | Include file for declaring 
usb_input | .h | Include file for declaring 
usb_list | .h | Include file for declaring 
usb_mem | .h | Include file for declaring 
usb_other | .h | Include file for declaring 
usb_scsi | .h | Include file for declaring 
usb_spin | .h | Include file for declaring 
usb_timer | .h | Include file for declaring 
usb_wait | .h | Include file for declaring 
util | .h | Include file for declaring 
vi | .h | Include file for declaring 
vi_conexant | .h | Include file for declaring 
video | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="acr.h" />
  <h3>acr.h</h3>
  <ul>
    <li><span>void</span> set_AIP_address_space<span>(int whether)</span></li> 
    <li><span>int</span> get_AIP_address_space<span>(void)</span></li> 
    <li><span>int</span> use_AIP_address_space<span>(void)</span></li> 
    <li><span>void</span> set_AHB_IO_MEM<span>(int value)</span></li> 
    <li><span>int</span> get_AHB_IO_MEM<span>(void)</span></li> 
    <li><span>int</span> use_AHB_IO_MEM<span>(void)</span></li> 
    <li><span>void</span> set_DI_NODVDRD_EN<span>(int value)</span></li> 
    <li><span>int</span> get_DI_NODVDRD_EN<span>(void)</span></li> 
    <li><span>u32</span> get_ACRIOINTPPC<span>(void)</span></li> 
    <li><span>u32</span> set_ACRIOINTPPC<span>(u32 which,u32 value)</span></li> 
    <li><span>u32</span> sendIOPMsg<span>(u32 msg)</span></li> 
    <li><span>void</span> set_ACRARBCFGDMA_DELAYEN<span>(int value)</span></li> 
    <li><span>int</span> get_ACRARBCFGDMA_DELAYEN<span>(void)</span></li> 
    <li><span>void</span> set_ACRARBCFGDMA_DELAYCNT<span>(u32 value)</span></li> 
    <li><span>u32</span> get_ACRARBCFGDMA_DELAYCNT<span>(void)</span></li> 
    <li><span>void</span> set_ACRARBCFGCPU_DELAY<span>(int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">16</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">31</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="aes.h" />
  <h3>aes.h</h3>
  <ul>
    <li><span>int</span> AES_Busy<span>(void)</span></li> 
    <li><span>void</span> AES_Dma<span>(u32 srcAddr,u32 dstAddr,u32 numBlocks,u32 intrEnable)</span></li> 
    <li><span>void</span> AES_Clear<span>(void)</span></li> 
    <li><span>int</span> _AES_Setup<span>(u32 srcAddr,u32 dstAddr)</span></li> 
    <li><span>int</span> _AES_StartDma<span>(u32 numBlocks,u32 intrEnable)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">16</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="aesreg.h" />
  <h3>aesreg.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">54</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ahb.h" />
  <h3>ahb.h</h3>
  <ul>
    <li><span>void</span> ahbMemFlush<span>(enum memAhbFlushGroup_e)</span></li> 
    <li><span>void</span> ahbMemRBInvalidate<span>(enum memAhbReadBuffer_e)</span></li> 
    <li><span>unsigned int</span> busRdAHMReg<span>(unsigned int a)</span></li> 
    <li><span>unsigned int</span> busRdMEMReg<span>(unsigned int a)</span></li> 
    <li><span>int</span> arbInit<span>(char *s)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ahbdbg.h" />
  <h3>ahbdbg.h</h3>
  <ul>
    <li><span>int</span> ahbdbgInit<span>(void(*_Cb)(void),int mask)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">15</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ai.h" />
  <h3>ai.h</h3>
  <ul>
    <li><span>AiStatus</span> aiInit<span>(void(*_tranCb)(void))</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ar_priv.h" />
  <h3>ar_priv.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">79</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="aram.h" />
  <h3>aram.h</h3>
  <ul>
    <li><span>void</span> __ARWaitForDMA<span>(void)</span></li> 
    <li><span>void</span> __ARWriteDMA<span>(u32 mmem_addr,u32 aram_addr,u32 length)</span></li> 
    <li><span>void</span> __ARReadDMA<span>(u32 mmem_addr,u32 aram_addr,u32 length)</span></li> 
    <li><span>u32</span> __ARChecksize<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">28</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="arch.h" />
  <h3>arch.h</h3>
  <ul>
    <li><span>u32</span> BUSSPEED</li> 
    <li><span>void</span> calibrateBusspeed<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">70</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="args.h" />
  <h3>args.h</h3>
  <ul>
    <li><span>u32</span> _argc</li> 
    <li><span>char </span> _argv[]</li> 
    <li><span>u32</span> argInit<span>(void)</span></li> 
    <li><span>u32</span> argCntGet<span>(void)</span></li> 
    <li><span>char </span> argGet<span>(u32 i)</span></li> 
    <li><span>u32</span> argCache<span>(u32 *,char ***)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">52</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="assert.h" />
  <h3>assert.h</h3>
  <ul>
    <li><span>void</span> _assert<span>(const char *,const char *,int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="atidiag.h" />
  <h3>atidiag.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">61</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ax_types.h" />
  <h3>ax_types.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">189</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ax_ver.h" />
  <h3>ax_ver.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">68</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="axdbg.h" />
  <h3>axdbg.h</h3>
  <ul>
    <li><span>void</span> DbgCreateTX<span>(GXMCObj *info,u32 width,u32 height)</span></li> 
    <li><span>void</span> DbgRenderAndStretch<span>(GXMCObj *info,u32 x,u32 y,u32 width,u32 height)</span></li> 
    <li><span>void</span> DbgRenderRefToEFB<span>(GXMCObj *info,GXMCReferencePicture type,u32 x,u32 y,u32 plane)</span></li> 
    <li><span>void</span> DbgStub<span>(GXMCObj *info)</span></li> 
    <li><span>void</span> DbgPrintMotionInfo<span>(struct MacroblockDetails *mb)</span></li> 
    <li><span>void</span> DbgPrintDPCM<span>(struct MacroblockDetails *mb)</span></li> 
    <li><span>void</span> DbgPrintMotionVector<span>(GXMCMotionVector *mv)</span></li> 
    <li><span></span> SigTrap</li> 
    <li><span></span> SigTrap</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">107</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="axmc.h" />
  <h3>axmc.h</h3>
  <ul>
    <li><span>void</span> SetView<span>(void)</span></li> 
    <li><span>MCError</span> AllocateCmdFifos<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocatePingPongBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateRefrenceFrameBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateTexMemory<span>(GXMCObj *info)</span></li> 
    <li><span>GXBool</span> AllocateFutureBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>GXBool</span> AllocatePastBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateBPictureBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> InitQueueHandler<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> MCErrorHandler<span>(GXMCObj *mpgObj,MCError error)</span></li> 
    <li><span>GXBool</span> GXMCSelectDBuffer<span>(GXMCObj *info,u32 bufferId)</span></li> 
    <li><span>void</span> CreateD0Texture<span>(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)</span></li> 
    <li><span>void</span> CreateD1Texture<span>(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)</span></li> 
    <li><span>void</span> PerformRenderSetup<span>(TevType type)</span></li> 
    <li><span>void</span> SetupTevStages<span>(TevType type)</span></li> 
    <li><span>void</span> RenderImage<span>(GXMCObj *mpgInfo,u32 width,u32 height)</span></li> 
    <li><span>void</span> CopyEFBToMemory<span>(GXMCObj *mpgObj,GXCopyType copyType,void *destBase)</span></li> 
    <li><span>void</span> CreateFrameFromFields<span>(GXMCObj *mpgInfo,PictureType frameType)</span></li> 
    <li><span>void</span> GXReset<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> MarkBufferBusy<span>(GXMCObj *info,u32 id)</span></li> 
    <li><span>void</span> ProcessBlocks<span>(GXMCObj *info)</span></li> 
    <li><span>void</span> CreateQueue<span>(GXMCMotionVector *srcMV,GXMCMotionVector *dstMV[],GXMCMacroBlockType mbType,u32 count,u32 totalMV)</span></li> 
    <li><span>void</span> SwapBuffers<span>(GXMCObj *mcInfo)</span></li> 
    <li><span>void</span> InterlaceRenderUV<span>(GXMCObj *mcInfo,PictureType fType,void *dstBase)</span></li> 
    <li><span>u32</span> GXConvertLinearToTile<span>(unsigned x,unsigned y,unsigned stride)</span></li> 
    <li><span>void</span> DestroyPingPongBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> ResetCounters<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> FreeAndReallocate<span>(GXMCObj *mpgObj,GXBool newBuffer)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">28</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">78</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="big_endian.h" />
  <h3>big_endian.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">69</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="boot.h" />
  <h3>boot.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="busclient.h" />
  <h3>busclient.h</h3>
  <ul>
    <li><span>void</span> busPrintf<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> busDbg<span>(const char *fmt,...)</span></li> 
    <li><span>u32</span> busGetTime<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="crc.h" />
  <h3>crc.h</h3>
  <ul>
    <li><span>u32</span> CRCCompute<span>(void *buf,u32 nbytes)</span></li> 
    <li><span>u32</span> CRCAppend<span>(void *buf,u32 nbytes,u32 init)</span></li> 
    <li><span>u32</span> CRCComputeMasked<span>(void *buf,u32 nbytes)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">41</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbg_viai_setup.h" />
  <h3>dbg_viai_setup.h</h3>
  <ul>
    <li><span>void</span> dbg_viai_setup<span>(int compatB)</span></li> 
    <li><span>void</span> dbg_aipll_init<span>(int compatB)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">6</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbgcomm.h" />
  <h3>dbgcomm.h</h3>
  <ul>
    <li><span>DbgHandle</span> dbgOpen<span>(const char *filename,const char *mode)</span></li> 
    <li><span>u32</span> dbgWrite<span>(DbgHandle handle,const void *buf,u32 len)</span></li> 
    <li><span>u32</span> dbgRead<span>(DbgHandle handle,void *buf,u32 len)</span></li> 
    <li><span>u32</span> dbgClose<span>(DbgHandle handle)</span></li> 
    <li><span>u8 </span> dbgGets<span>(u8 *buf,u32 blockFlag)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">48</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbgint.h" />
  <h3>dbgint.h</h3>
  <ul>
    <li><span>u32</span> dbgintInit<span>(void(*dbgIrqCb)(void))</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">34</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dcbz_basic.h" />
  <h3>dcbz_basic.h</h3>
  <ul>
    <li><span>void</span> lc_allocate<span>(void *LC_addr,unsigned int bfsize)</span></li> 
    <li><span>void</span> set_HID_G<span>(unsigned int mask)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">9</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="di.h" />
  <h3>di.h</h3>
  <ul>
    <li><span>DiStatus</span> diInit<span>(void(*_tranCb)(u32 err),void(*_doorCb)(void))</span></li> 
    <li><span>DiStatus</span> diImm<span>(u32 *pkt,u32 *data,u32 isRead)</span></li> 
    <li><span>DiStatus</span> diDma<span>(u32 *pkt,u32 *data,u32 len,u32 isRead)</span></li> 
    <li><span>DiStatus</span> diSync<span>(void)</span></li> 
    <li><span>DiStatus</span> diBrk<span>(void)</span></li> 
    <li><span>void</span> diReset<span>(void)</span></li> 
    <li><span>void</span> _diSync<span>(u32 iSr)</span></li> 
    <li><span>diRegisters_t </span> diReadRegisters<span>(diRegisters_t *diRegs)</span></li> 
    <li><span>void</span> diPrintRegisters<span>(diRegisters_t *diRegs,const char *comment)</span></li> 
    <li><span>void</span> diClobberRegisters<span>(u32 value)</span></li> 
    <li><span>u32</span> diStraps<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="diag.h" />
  <h3>diag.h</h3>
  <ul>
    <li><span>u32</span> mcrGet<span>(Mcr *mp)</span></li> 
    <li><span>u32</span> mcrPut<span>(Mcr *mp)</span></li> 
    <li><span>u32</span> dcrGet<span>(Dcr *dp)</span></li> 
    <li><span>u32</span> dcrPut<span>(Dcr *dp)</span></li> 
    <li><span>u32</span> _dcrmcrGet<span>(DcrMcr *dmp)</span></li> 
    <li><span>u32</span> _dcrmcrPut<span>(DcrMcr *dmp)</span></li> 
    <li><span>void</span> diagStart<span>(void)</span></li> 
    <li><span>void</span> diagStop<span>(u32 status)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">105</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="diagerr.h" />
  <h3>diagerr.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">48</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dma_basic.h" />
  <h3>dma_basic.h</h3>
  <ul>
    <li><span>void</span> dma_load<span>(unsigned int *inDataBlock,unsigned int *inBuffer,unsigned int inDataSize)</span></li> 
    <li><span>void</span> dma_wait<span>(unsigned int i)</span></li> 
    <li><span>void</span> dma_store<span>(unsigned int *outDataBlock,unsigned int *outBuffer,unsigned int outDataSize)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dolcnt.h" />
  <h3>dolcnt.h</h3>
  <ul>
    <li><span>u32</span> dolcntData<span>(u32 chan,u32 *datah,u32 *datal)</span></li> 
    <li><span>u32</span> dolcntInit<span>(void)</span></li> 
    <li><span>u32</span> dolcntInitV<span>(int)</span></li> 
    <li><span>void</span> dolcntRumbleOn<span>(u32 chan)</span></li> 
    <li><span>void</span> dolcntRumbleOff<span>(u32 chan)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dsp.h" />
  <h3>dsp.h</h3>
  <ul>
    <li><span>u32</span> dspAi<span>(u32 *memPtr,u32 len)</span></li> 
    <li><span>u32</span> dspAram<span>(u32 *memPtr,u32 *aramPtr,u32 isRead,u32 len)</span></li> 
    <li><span>void</span> dspSyncAi<span>(void)</span></li> 
    <li><span>void</span> dspSyncAram<span>(void)</span></li> 
    <li><span>u32</span> dspWrtMbox<span>(u32 value,u32 doIrq)</span></li> 
    <li><span>u32</span> dspRdMbox<span>(u32 *value)</span></li> 
    <li><span>void</span> dspInit<span>(void(*_dspCb)(void),void(*_aiCb)(void),void(*_aramCb)(void))</span></li> 
    <li><span>void</span> dspAramStable<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">45</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dspfix.h" />
  <h3>dspfix.h</h3>
  <ul>
    <li><span>void</span> dspFix<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">2</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dspmxic.h" />
  <h3>dspmxic.h</h3>
  <ul>
    <li><span>u32</span> dspReset<span>(u32 cdcr)</span></li> 
    <li><span>u32</span> dspBoot<span>(u32 *memPtr,u32 len)</span></li> 
    <li><span>u32</span> dspBootDma<span>(u32 *memPtr,u32 dspa,u32 dscr,u32 dsbl)</span></li> 
    <li><span>u32</span> dspSyncDma<span>(u32 delay)</span></li> 
    <li><span>u32</span> dspSendMail<span>(u32 mail,u32 doIrq)</span></li> 
    <li><span>u32</span> dspWaitMail<span>(u32 *mailPtr)</span></li> 
    <li><span>u32</span> dspMemRamp<span>(u32 *memAddr,u32 len,u32 val)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">93</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dvd.h" />
  <h3>dvd.h</h3>
  <ul>
    <li><span>u32</span> dvdStopMotor<span>(u32 setting,u32 *response)</span></li> 
    <li><span>u32</span> dvdRead<span>(u32 addr,u32 len,u32 *mem)</span></li> 
    <li><span>void</span> dvdSetNdevFS<span>(u32 offset)</span></li> 
    <li><span>u32</span> dvdReadBuf<span>(u32 addr,u32 len,u32 *dest)</span></li> 
    <li><span>u32</span> dvdReadDVD<span>(u32 startSector,u32 numberOfSectors,u32 *mem)</span></li> 
    <li><span>u32</span> dvdWriteBuf<span>(u32 addr,u32 len,u32 *src)</span></li> 
    <li><span>u32</span> dvdSync<span>(void)</span></li> 
    <li><span>u32</span> dvdErrSet<span>(u32 len)</span></li> 
    <li><span>u32</span> dvdBrk<span>(void)</span></li> 
    <li><span>u32</span> dvdInit<span>(void(*tranCb)(u32 err),void(*doorCb)(void))</span></li> 
    <li><span>u32</span> dvdErrReq<span>(u32 *retErr)</span></li> 
    <li><span>u32</span> dvdAsStart<span>(u32 addr,u32 sz)</span></li> 
    <li><span>u32</span> dvdAsStop<span>(void)</span></li> 
    <li><span>u32</span> dvdDoor<span>(u32 open)</span></li> 
    <li><span>u32</span> dvdInquiry<span>(u32 *inq)</span></li> 
    <li><span>u32</span> dvdReadID<span>(u32 *id)</span></li> 
    <li><span>u32</span> dvdAsBuffer<span>(u32 onOff,u32 pages,u32 *status)</span></li> 
    <li><span>u32</span> dvdRequestDiskStatus<span>(u32 *diskStatus)</span></li> 
    <li><span>u32</span> dvdRequestError<span>(u32 *response)</span></li> 
    <li><span>void</span> dvdPrintPacket<span>(dvd_u *pkt)</span></li> 
    <li><span>void</span> _dvdFlush<span>(u32 enable)</span></li> 
    <li><span>u16</span> deviceCode</li> 
    <li><span>u32</span> releaseDate</li> 
    <li><span>u32</span> padding[2]</li> 
    <li><span></span> dvdInquiry_t</li> 
    <li><span>void</span> dvdPrintInquiry<span>(const char *comment,dvdInquiry_t *s)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">121</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dvdfs.h" />
  <h3>dvdfs.h</h3>
  <ul>
    <li><span>u32</span> dvdFsInit<span>(void)</span></li> 
    <li><span>u32</span> dvdFsDeToInd<span>(DirEntry *de)</span></li> 
    <li><span>DirEntry </span> dvdFsFind<span>(const char *path)</span></li> 
    <li><span>DirEntry </span> dvdFsIndToDe<span>(u32 ind)</span></li> 
    <li><span>void </span> fileLoad<span>(const char *file,u32 *rLen)</span></li> 
    <li><span>char </span> lineGet<span>(char *buf,u32 bLen)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ehci-hcd.h" />
  <h3>ehci-hcd.h</h3>
  <ul>
    <li><span>int</span> ehci_start<span>(struct usb_hcd *hcd)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">12</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ela.h" />
  <h3>ela.h</h3>
  <ul>
    <li><span>void</span> init_ELA<span>(p_ela_init_reg)</span></li> 
    <li><span>void</span> post_ELA<span>(int wrap_cnt)</span></li> 
    <li><span>void</span> log_ELA<span>(int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">94</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="exi.h" />
  <h3>exi.h</h3>
  <ul>
    <li><span>ExiStatus</span> exiInit<span>(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))</span></li> 
    <li><span>ExiStatus</span> exiCustomInit<span>(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))</span></li> 
    <li><span>ExiStatus</span> exiSelect<span>(u32 chan,u32 dev,u32 freq)</span></li> 
    <li><span>ExiStatus</span> exiDeselect<span>(u32 chan)</span></li> 
    <li><span>ExiStatus</span> exiDma<span>(u32 chan,u8 *buf,u32 len,u32 type)</span></li> 
    <li><span>ExiStatus</span> exiImm<span>(u32 chan,u8 *buf,u32 len,u32 type)</span></li> 
    <li><span>ExiStatus</span> exiSync<span>(u32 chan)</span></li> 
    <li><span>u32</span> exiPresent<span>(u32 chan)</span></li> 
    <li><span>void</span> exi32Enable<span>(void)</span></li> 
    <li><span>void</span> exi32Disable<span>(void)</span></li> 
    <li><span>void</span> exiPrint<span>(char *buf,int len)</span></li> 
    <li><span>u32</span> exiGetID<span>(u32 chan,u32 dev)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">12</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">85</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="eximdm.h" />
  <h3>eximdm.h</h3>
  <ul>
    <li><span>u32</span> mdmInit<span>(u32 mdmDev,u32 mdmCsel)</span></li> 
    <li><span>u32</span> mdmRegRd<span>(u32 reg,u8 *buf,u32 len)</span></li> 
    <li><span>u32</span> mdmRegWrt<span>(u32 reg,u8 *buf,u32 len)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">40</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="fifo.h" />
  <h3>fifo.h</h3>
  <ul>
    <li><span>void</span> fifoCreate<span>(const char *name,Fifo *fp,u32 *list,u32 size)</span></li> 
    <li><span>u32</span> fifoGetExt<span>(Fifo *fp,u32 *valp,u32 flags)</span></li> 
    <li><span>u32</span> fifoGet<span>(Fifo *fp)</span></li> 
    <li><span>u32</span> fifoPutExt<span>(Fifo *fp,u32 val,u32 flags)</span></li> 
    <li><span>void</span> fifoPut<span>(Fifo *fp,u32 val)</span></li> 
    <li><span>u32</span> fifoCnt<span>(Fifo *fp)</span></li> 
    <li><span>void</span> EnableWriteCombine<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">61</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="filerand.h" />
  <h3>filerand.h</h3>
  <ul>
    <li><span>void</span> sfilerand<span>(unsigned long seed)</span></li> 
    <li><span>unsigned short</span> filerand<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="filerandom.h" />
  <h3>filerandom.h</h3>
  <ul>
    <li><span>void</span> sfilerandom<span>(unsigned long seed)</span></li> 
    <li><span>unsigned long</span> filerandom<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="flash.h" />
  <h3>flash.h</h3>
  <ul>
    <li><span>u32</span> flashReadSeg<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashRead<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashWritePage<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashWrite<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashStatGet<span>(u32 chan,u32 *ret)</span></li> 
    <li><span>u32</span> flashStatClr<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashErase<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashEraseSec<span>(u32 chan,u32 addr)</span></li> 
    <li><span>u32</span> flashSleep<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashWake<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashIdRd<span>(u32 chan,u32 *ret)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">53</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="font.h" />
  <h3>font.h</h3>
  <ul>
    <li><span>void</span> fontInit<span>(u32 addr,u32 vidMode)</span></li> 
    <li><span>void</span> cls<span>(void)</span></li> 
    <li><span>void</span> fgSet<span>(u32 y,u32 u,u32 v)</span></li> 
    <li><span>void</span> bgSet<span>(u32 y,u32 u,u32 v)</span></li> 
    <li><span>void</span> cursorSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> pixSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> pixClear<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> putChar<span>(u32 cc)</span></li> 
    <li><span>void</span> putStr<span>(const char *str)</span></li> 
    <li><span>void</span> fontPut<span>(const char *str,u32 len)</span></li> 
    <li><span>u32</span> fontColsGet<span>(void)</span></li> 
    <li><span>u32</span> fontRowsGet<span>(void)</span></li> 
    <li><span>void</span> fontOff<span>(void)</span></li> 
    <li><span>void</span> fontOn<span>(void)</span></li> 
    <li><span>void</span> fontCursSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> gfxBltCpy<span>(u32 *src,u32 cols,u32 rows,u32 x,u32 y)</span></li> 
    <li><span>void</span> gfxRectDraw<span>(u32 x,u32 y,u32 cols,u32 rows)</span></li> 
    <li><span>u8 </span> gfxChkppmfmt<span>(u8 *ppm,u32 *cols,u32 *rows)</span></li> 
    <li><span>u8</span> gfxChkbmpfmt<span>(u8 *cp,u32 *xsize,u32 *ysize,u8 **pStart,u8 **pEnd)</span></li> 
    <li><span>u8 </span> gfxCvrtbmp2rgb<span>(u8 *pEnd,u8 *pStart,u32 width,u32 height)</span></li> 
    <li><span>void</span> gfxCvrtrgb2yuv<span>(u8 *data,u32 cols,u32 rows)</span></li> 
    <li><span>void</span> gfxCvrt444to422<span>(u8 *src,u32 cols,u32 rows,u8 *dest)</span></li> 
    <li><span>void</span> gfxCvrt444to422Stride<span>(u8 *src,u32 cols,u32 rows,u8 *dest,u32 stride)</span></li> 
    <li><span>u32</span> scrColsGet<span>(void)</span></li> 
    <li><span>u32</span> scrRowsGet<span>(void)</span></li> 
    <li><span>void</span> xLMarginSet<span>(u32 xLMargin)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">26</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">60</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gecko_dma.h" />
  <h3>gecko_dma.h</h3>
  <ul>
    <li><span>asm DMAStatus</span> dmaEnable<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaDisable<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaErrorStatus<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaQueueLen<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaFlush<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaAlloc<span>(register unsigned long,register unsigned long)</span></li> 
    <li><span>asm DMAStatus</span> dmaRead<span>(register unsigned long,register unsigned long,register unsigned long)</span></li> 
    <li><span>asm DMAStatus</span> dmaWrite<span>(register unsigned long,register unsigned long,register unsigned long)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">84</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="generic.h" />
  <h3>generic.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">181</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="getopt.h" />
  <h3>getopt.h</h3>
  <ul>
    <li><span>char </span> optarg</li> 
    <li><span>int</span> optind</li> 
    <li><span>int</span> getopt<span>(int ac,char *av[],char *opts)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">36</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gfxbu.h" />
  <h3>gfxbu.h</h3>
  <ul>
    <li><span>void</span> gfxbuInit<span>()</span></li> 
    <li><span>u32</span> gfxbuFinish<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">42</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gfxoldbu.h" />
  <h3>gfxoldbu.h</h3>
  <ul>
    <li><span>void</span> gfxoldbuInit<span>(char *testName)</span></li> 
    <li><span>void </span> gfxoldbuDisplay</li> 
    <li><span>u32</span> gfxoldbuUpdate<span>()</span></li> 
    <li><span>u32</span> gfxoldbuFinish<span>()</span></li> 
    <li><span>u32</span> gfxoldbuFinishAA<span>()</span></li> 
    <li><span>void</span> gfxSetClearColor<span>(u8 red,u8 green,u8 blue,u8 alpha)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">84</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gpioexi.h" />
  <h3>gpioexi.h</h3>
  <ul>
    <li><span>void</span> initGpioExi<span>(void)</span></li> 
    <li><span>void</span> setVideoReset<span>(int value)</span></li> 
    <li><span>void</span> setI2CEnable<span>(int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">10</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hcd.h" />
  <h3>hcd.h</h3>
  <ul>
    <li><span>struct usb_hcd</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hcd_dev</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hcd_timeout</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hc_driver</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>int</span> usb_hcd_pci_probe<span>(int *dev,int *id)</span></li> 
    <li><span>void</span> usb_hcd_pci_remove<span>(struct pci_dev *dev)</span></li> 
    <li><span>int</span> usb_hcd_pci_suspend<span>(struct pci_dev *dev,u32 state)</span></li> 
    <li><span>int</span> usb_hcd_pci_resume<span>(struct pci_dev *dev)</span></li> 
    <li><span>void</span> usb_claim_bandwidth<span>(struct usb_device *dev,struct urb *urb,int bustime,int isoc)</span></li> 
    <li><span>void</span> usb_release_bandwidth<span>(struct usb_device *dev,struct urb *urb,int isoc)</span></li> 
    <li><span>int</span> usb_check_bandwidth<span>(struct usb_device *dev,struct urb *urb)</span></li> 
    <li><span>long</span> usb_calc_bus_time<span>(int speed,int is_input,int isoc,int bytecount)</span></li> 
    <li><span>inline struct usb_bus </span> hcd_to_bus<span>(struct usb_hcd *hcd){return hcd->bus</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">298</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hidutil.h" />
  <h3>hidutil.h</h3>
  <ul>
    <li><span>void</span> sethid2<span>(unsigned int hid2_value)</span></li> 
    <li><span>unsigned int</span> gethid0<span>(void)</span></li> 
    <li><span>void</span> sethid0<span>(unsigned int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hub.h" />
  <h3>hub.h</h3>
  <ul>
    <li><span>struct usb_driver </span> hub_probe<span>(struct usb_device *dev,unsigned int i,const struct usb_device_id *id)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">152</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="i2c.h" />
  <h3>i2c.h</h3>
  <ul>
    <li><span>int</span> sendI2CData<span>(u8 slaveAddr,u8 *pData,int nBytes)</span></li> 
    <li><span>int</span> rcvI2CData<span>(u8 slaveAddr,u8 *pData,int maxBytes)</span></li> 
    <li><span>int</span> getI2CError<span>()</span></li> 
    <li><span>void</span> initI2C<span>()</span></li> 
    <li><span>void</span> initI2CExi<span>(void)</span></li> 
    <li><span>void</span> setSCL<span>(int)</span></li> 
    <li><span>void</span> setSDA<span>(int)</span></li> 
    <li><span>int</span> getSCL<span>(void)</span></li> 
    <li><span>int</span> getSDA<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="irq.h" />
  <h3>irq.h</h3>
  <ul>
    <li><span>void</span> irqHandler<span>(void)</span></li> 
    <li><span>void</span> irqCbAddPI<span>(void(*irqCb)(),u32 mask)</span></li> 
    <li><span>void</span> irqACRHandler<span>(void)</span></li> 
    <li><span>void</span> irqCbAddACR<span>(void(*irqCb)(),u32 mask)</span></li> 
    <li><span>u32</span> irqDisable<span>(void)</span></li> 
    <li><span>void</span> irqEnable<span>(u32 oldMask)</span></li> 
    <li><span>void</span> irqInit<span>(void(*intCb)(void))</span></li> 
    <li><span>void</span> clkInit<span>(void(*intCb)(void),u32 decVal)</span></li> 
    <li><span>void</span> _clkHndlr<span>(void)</span></li> 
    <li><span>void</span> _irqHndlr<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">90</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="lib.h" />
  <h3>lib.h</h3>
  <ul>
    <li><span>u16</span> bRd16<span>(u32 src)</span></li> 
    <li><span>u32</span> bRd32<span>(u32 src)</span></li> 
    <li><span>void</span> busWrt16<span>(u32 address,u16 data)</span></li> 
    <li><span>void</span> busWrt32<span>(u32 address,u32 data)</span></li> 
    <li><span>u16</span> busRd16<span>(u32 address)</span></li> 
    <li><span>u32</span> busRd32<span>(u32 address)</span></li> 
    <li><span>void</span> bWrt16<span>(u32 address,u32 data)</span></li> 
    <li><span>void</span> bWrt32<span>(u32 address,u32 data)</span></li> 
    <li><span>void</span> _dcWb<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> _dcWbInv<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> _dcInv<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> dcWb<span>(u32 addr,u32 len)</span></li> 
    <li><span>void</span> dcWbInv<span>(u32 addr,u32 len)</span></li> 
    <li><span>void</span> dcInv<span>(u32 addr,u32 len)</span></li> 
    <li><span>u32</span> rand32<span>(void)</span></li> 
    <li><span>double</span> drand48<span>(void)</span></li> 
    <li><span>double</span> erand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>long int</span> mrand48<span>(void)</span></li> 
    <li><span>int</span> lrand48<span>(void)</span></li> 
    <li><span>int</span> nrand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>int</span> jrand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>void</span> srand48<span>(int seedval)</span></li> 
    <li><span>unsigned short </span> seed48<span>(unsigned short seed16v[3])</span></li> 
    <li><span>void</span> lcong48<span>(unsigned short param[7])</span></li> 
    <li><span>void</span> tbRead<span>(u32 *)</span></li> 
    <li><span>void</span> tbWrite<span>(u32 *)</span></li> 
    <li><span>void</span> udelay<span>(u32 delay)</span></li> 
    <li><span>void</span> busDelay<span>(u32 count)</span></li> 
    <li><span>u32</span> timeGet<span>(void)</span></li> 
    <li><span>void</span> halt<span>(void)</span></li> 
    <li><span>void</span> ppcL2Enable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Enable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Disable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Flush<span>(void)</span></li> 
    <li><span>void</span> ppcPSLSQEnable<span>(void)</span></li> 
    <li><span>void</span> ppcDARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcDARGet<span>(void)</span></li> 
    <li><span>void</span> ppcHID0Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcHID1Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID2Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID2Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID4Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID4Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID1Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID2Get<span>(void)</span></li> 
    <li><span>void</span> ppcL2CRSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcL2CRGet<span>(void)</span></li> 
    <li><span>void</span> ppcWPARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcWPARGet<span>(void)</span></li> 
    <li><span>void</span> ppcDecSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcMsrSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcMsrGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBUSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBUGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBLSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBLGet<span>(void)</span></li> 
    <li><span>u32</span> ppcPVRGet<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG1Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG2Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG3Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG0Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG1Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG2Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG3Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcDBAT0UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT0LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT1UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT1LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT2UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT2LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT3UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT3LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT4UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT4LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT5UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT5LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT6UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT6LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT7UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT7LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT0UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT0LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT1UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT1LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT2UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT2LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT3UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT3LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT4UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT4LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT5UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT5LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT6UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT6LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT7UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT7LGet<span>(void)</span></li> 
    <li><span>void</span> ppcDBAT0USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT0LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT1USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT1LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT2USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT2LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT3USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT3LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT4USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT4LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT5USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT5LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT6USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT6LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT7USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT7LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT0USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT0LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT1USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT1LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT2USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT2LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT3USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT3LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT4USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT4LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT5USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT5LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT6USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT6LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT7USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT7LSet<span>(u32 val)</span></li> 
    <li><span>void</span> setIrqHndlr<span>(void(*hndlr)())</span></li> 
    <li><span>void</span> ppcEARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcEARGet<span>()</span></li> 
    <li><span>void</span> __ecowx<span>(u32 addr,u32 val)</span></li> 
    <li><span>u32</span> __eciwx<span>(u32 addr)</span></li> 
    <li><span>void</span> __dcbi<span>(u32 *,u32)</span></li> 
    <li><span>void</span> __icbi<span>(u32 *,u32)</span></li> 
    <li><span>u32</span> __lwarx<span>(u32)</span></li> 
    <li><span>void</span> __stwcx<span>(u32,u32)</span></li> 
    <li><span>void</span> _ctxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> _irqCtxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> ppcSync<span>(void)</span></li> 
    <li><span>void</span> ppcEieio<span>(void)</span></li> 
    <li><span>void</span> ppcEeieo<span>(void)</span></li> 
    <li><span>u32</span> ppcStackPtrGet<span>()</span></li> 
    <li><span>void</span> ppcStackPtrSet<span>(u32 val)</span></li> 
    <li><span>void</span> rwbuzz<span>(void)</span></li> 
    <li><span>int</span> strcasecmp<span>(const char *s1,const char *s2)</span></li> 
    <li><span>int</span> strncasecmp<span>(const char *s1,const char *s2,u32 c)</span></li> 
    <li><span>void </span> memcpy32<span>(void *s1,const void *s2,u32 n)</span></li> 
    <li><span>void </span> memset32<span>(void *s,u32 c,u32 n)</span></li> 
    <li><span>int</span> memcmp32<span>(const void *s1,const void *s2,u32 n)</span></li> 
    <li><span>int</span> atoh<span>(const char *str)</span></li> 
    <li><span>s32</span> ntoi<span>(const char *str,u32 base,u32 *val)</span></li> 
    <li><span>void</span> serInit2<span>(u32 dev,u32 csel)</span></li> 
    <li><span>void</span> serInit<span>(void)</span></li> 
    <li><span>void</span> serOn<span>(void)</span></li> 
    <li><span>void</span> serOff<span>(void)</span></li> 
    <li><span>int</span> serHwFlow<span>(u32 enable)</span></li> 
    <li><span>u8</span> serVersion<span>(u32 dev,u32 csel)</span></li> 
    <li><span>int</span> serRdQLen<span>(void)</span></li> 
    <li><span>int</span> serRdUart<span>(u8 *,int)</span></li> 
    <li><span>u8</span> serRdgetkey<span>(void)</span></li> 
    <li><span>u32</span> serRdkbhit<span>(void)</span></li> 
    <li><span>void</span> diagManualStop<span>(void *fb)</span></li> 
    <li><span>void</span> dprintf<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> dsprintf<span>(char *str,const char *fmt,...)</span></li> 
    <li><span>void</span> printfv<span>(u32 verLev,const char *fmt,...)</span></li> 
    <li><span>void</span> printf0<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> printf1<span>(const char *fmt,...)</span></li> 
    <li><span>u32</span> tolower<span>(u32 cc)</span></li> 
    <li><span>int</span> atiIsNdev<span>(void)</span></li> 
    <li><span>int</span> atiIsOrca<span>(void)</span></li> 
    <li><span>void</span> initBootMode<span>(void)</span></li> 
    <li><span>u32</span> getBootMode<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">176</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">309</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="little_endian.h" />
  <h3>little_endian.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">69</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="lomem.h" />
  <h3>lomem.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">83</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mc.h" />
  <h3>mc.h</h3>
  <ul>
    <li><span>void</span> GXMCGFXInit<span>()</span></li> 
    <li><span>GXBool</span> GXMCInit<span>(GXMCObj *mcObj,u32 width,u32 height,u32 bufferCount)</span></li> 
    <li><span>void</span> GXMCBeginPicture<span>(GXMCObj *mcObj,PictureType pType)</span></li> 
    <li><span>void</span> GXMCRenderMB<span>(GXMCObj *mcObj,GXMCMacroBlockType mbType,GXMCMotionVector mv[4][2])</span></li> 
    <li><span>void</span> GXMCEndPicture<span>(GXMCObj *mcObj,GXCopyType copyType,void *dest)</span></li> 
    <li><span>void</span> GXMCSetChromaSample<span>(GXMCObj *mcObj,GXMCSampleMode mode)</span></li> 
    <li><span>void</span> GXMCFinish<span>(GXMCObj *mcObj)</span></li> 
    <li><span>GXBool</span> GXMCBufferBusy<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>GXBool</span> GXSelectDBuffer<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0YAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1YAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0UAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1UAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0VAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1VAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">15</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">313</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mem.h" />
  <h3>mem.h</h3>
  <ul>
    <li><span>const heap_t</span> MEM_NAPA_HEAP</li> 
    <li><span>const heap_t</span> MEM_DDR_HEAP</li> 
    <li><span>void</span> memInit<span>(u32 totMem)</span></li> 
    <li><span>void </span> memAlloc<span>(u32 len)</span></li> 
    <li><span>void</span> memFree<span>(void *addr,u32 len)</span></li> 
    <li><span>void</span> memSetHeap<span>(heap_t)</span></li> 
    <li><span>heap_t</span> memGetHeap<span>(void)</span></li> 
    <li><span>void </span> memAllocHeap<span>(u32 len,heap_t heap)</span></li> 
    <li><span>u32</span> memGetSize<span>(void)</span></li> 
    <li><span>void</span> memRefreshInit<span>(u32 *freq_array)</span></li> 
    <li><span>void</span> memRefreshHandler<span>(void)</span></li> 
    <li><span>void</span> memRefreshHelper<span>(u32,u32)</span></li> 
    <li><span>void</span> memRefreshThread<span>()</span></li> 
    <li><span>void</span> memRefreshThreadInit<span>(u32 *freq_array,u32 priority)</span></li> 
    <li><span>u32</span> readDirectMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readDDRMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readSeqMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readBistMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readPerfMemReg<span>(u32)</span></li> 
    <li><span>void</span> writeDirectMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeDDRMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeSeqMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeBistMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writePerfMemReg<span>(u32,u32)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">72</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ml.h" />
  <h3>ml.h</h3>
  <ul>
    <li><span>void</span> mlStart<span>(char *FileName,u32 memSize,u32 memStart)</span></li> 
    <li><span>void </span> mlAlloc<span>(u32 nbytes,MLMemType type,MLByteGrouping grouping)</span></li> 
    <li><span>void </span> mlAllocForce<span>(u32 addr,u32 nbytes,MLMemType type,MLByteGrouping grouping)</span></li> 
    <li><span>u32</span> mlGetAddr<span>(void *ptr)</span></li> 
    <li><span>void </span> mlGetCPtr<span>(u32 addr)</span></li> 
    <li><span>void</span> mlFlush<span>()</span></li> 
    <li><span>void</span> mlFree<span>(void *ptr)</span></li> 
    <li><span>void</span> mlReverseBytes<span>(void *ptr,u32 bytes)</span></li> 
    <li><span>void</span> mlSetCustomByteSwappingFunction<span>(MLByteGrouping grouping,MLByteSwappingFunction function,u32 stride)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">101</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mrexi.h" />
  <h3>mrexi.h</h3>
  <ul>
    <li><span>int</span> mrExiSerInit<span>(void)</span></li> 
    <li><span>void</span> mrExiPrint<span>(char *buf,int len)</span></li> 
    <li><span>int</span> mrExiProbe<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">63</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="n64cnt.h" />
  <h3>n64cnt.h</h3>
  <ul>
    <li><span>u32</span> joyStatus<span>(u32 chan,u32 *stData)</span></li> 
    <li><span>u32</span> joyReset<span>(u32 chan,u32 *stData)</span></li> 
    <li><span>u32</span> joyData<span>(u32 chan,u32 *data)</span></li> 
    <li><span>u16</span> joyAddrCrc<span>(u16 address)</span></li> 
    <li><span>u32</span> joyEERead<span>(u32 chan,u16 addr,u8 *data)</span></li> 
    <li><span>u32</span> joyEEWrite<span>(u32 chan,u16 addr,u8 *data)</span></li> 
    <li><span>void</span> joyDelay<span>(u32 delay)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">85</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ntd_regs.h" />
  <h3>ntd_regs.h</h3>
  <ul>
    <li><span>u16 </span> __DSPRegs</li> 
    <li><span>u32 </span> __AIRegs</li> 
    <li><span>void</span> init_ntd_regs<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">36</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="nvram.h" />
  <h3>nvram.h</h3>
  <ul>
    <li><span>u32</span> nvRamWrite<span>(u32 addr,u8 *buf,u32 len)</span></li> 
    <li><span>u32</span> nvRamRead<span>(u32 addr,u8 *buf,u32 len)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">41</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="os.h" />
  <h3>os.h</h3>
  <ul>
    <li><span>u32</span> lbolt</li> 
    <li><span>u32</span> tmIrqTot</li> 
    <li><span>Thread</span> _tIdle</li> 
    <li><span>void</span> osInit<span>(void)</span></li> 
    <li><span>u32</span> threadCreate<span>(Thread *tp,const char *name,void *stack,u32 stackLen,void(*entry)(void *data),void *data,u32 pri)</span></li> 
    <li><span>void</span> threadSetFPEnable<span>(Thread *tp,u32 val)</span></li> 
    <li><span>void</span> threadDestroy<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadStart<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadStop<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadYield<span>(void)</span></li> 
    <li><span>void</span> threadSuspend<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadResume<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadPriSet<span>(Thread *tp,u32 pri)</span></li> 
    <li><span>u32</span> threadPriGet<span>(Thread *tp)</span></li> 
    <li><span>Thread </span> threadCurGet<span>(void)</span></li> 
    <li><span>void</span> threadDelay<span>(u32 ticks)</span></li> 
    <li><span>void</span> semaInit<span>(Sema *sp,s32 cnt)</span></li> 
    <li><span>void</span> semaP<span>(Sema *sp)</span></li> 
    <li><span>void</span> semaV<span>(Sema *sp)</span></li> 
    <li><span>u32</span> semaTest<span>(Sema *sp)</span></li> 
    <li><span>void</span> condVarInit<span>(CondVar *cp,const char *name)</span></li> 
    <li><span>void</span> condVarWait<span>(CondVar *cp,Sema *sp)</span></li> 
    <li><span>void</span> condVarSignal<span>(CondVar *cp)</span></li> 
    <li><span>void</span> panic<span>(Context *,u32)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">21</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">113</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="reset.h" />
  <h3>reset.h</h3>
  <ul>
    <li><span>void</span> resetSys<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">32</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sdi.h" />
  <h3>sdi.h</h3>
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
    <li><span>void</span> sdi_clock_supply<span>(sdi_slot_t sp,u32 div)</span></li> 
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
    <li><span>u32</span> sdiFindCard<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> waitTransferComplete<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiGoIdle<span>(sdi_slot_t sp)</span></li> 
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
    <li><span>u32</span> sdiReadBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiWriteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiReadMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)</span></li> 
    <li><span>u32</span> sdiWriteMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)</span></li> 
    <li><span>u32</span> sdiReadInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>u32</span> sdiWriteInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>u32</span> sdioByteRead<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioByteWrite<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 wr_data,u32 raw,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtRead<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtWrite<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">96</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">263</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="serrx.h" />
  <h3>serrx.h</h3>
  <ul>
    <li><span>int</span> serRxInit<span>(u32 hwFlowEnable)</span></li> 
    <li><span>u8</span> serRxgetkey<span>(void)</span></li> 
    <li><span>u32</span> serRxkbhit<span>(void)</span></li> 
    <li><span>int</span> serRxInitParam<span>(u32 chan,u32 cs,u32 hwFlowEnable)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sfx.h" />
  <h3>sfx.h</h3>
  <ul>
    <li><span>void</span> sfxPlay<span>(u32 sound)</span></li> 
    <li><span>void</span> sfxInit<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">37</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sha.h" />
  <h3>sha.h</h3>
  <ul>
    <li><span>int</span> SHA_Busy<span>(void)</span></li> 
    <li><span>void</span> SHA_Calc<span>(u32 Addr,u32 numBlocks,u32 intrEnable)</span></li> 
    <li><span>void</span> SHA_Result<span>(u32 *result)</span></li> 
    <li><span>int</span> SHA_Match<span>(u32 *a,u32 *b)</span></li> 
    <li><span>void</span> SHA_Clear<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">14</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="si.h" />
  <h3>si.h</h3>
  <ul>
    <li><span>u32</span> siInit<span>(void(*comCb)(u32 sisr),void(*pollCb)(u32 sisr))</span></li> 
    <li><span>void</span> siChanOutSet<span>(u32 *chanData)</span></li> 
    <li><span>u32</span> siChansRead<span>(u32 *chanData)</span></li> 
    <li><span>void</span> siPollRegSet<span>(u32 x,u32 y,u32 enMask,u32 vbCpyMask)</span></li> 
    <li><span>void</span> siPollRegGet<span>(u32 *x,u32 *y,u32 *enMask,u32 *vbCpyMask)</span></li> 
    <li><span>u32</span> siComm<span>(u32 chanNo,u32 *out,u32 oLen,u32 iLen)</span></li> 
    <li><span>u32</span> siSync<span>(void)</span></li> 
    <li><span>void</span> siPollWait<span>(u32 chanMask)</span></li> 
    <li><span>void</span> siComDataGet<span>(u32 *in,u32 cnt)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">57</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="snake.h" />
  <h3>snake.h</h3>
  <ul>
    <li><span>void</span> Line<span>(int x,int y,int x2,int y2,unsigned char c,unsigned char u,unsigned char v)</span></li> 
    <li><span>void</span> Circle<span>(int xc,int yc,int r,unsigned char c,unsigned char u,unsigned char v)</span></li> 
    <li><span>u32</span> GameOver<span>(PLAYER *snake)</span></li> 
    <li><span>void</span> ExplodeSnake<span>(int player_num,PLAYER *snake)</span></li> 
    <li><span>void</span> PrintScore<span>(PLAYER *snake)</span></li> 
    <li><span>void</span> Delay<span>(u32 delay_value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="standio.h" />
  <h3>standio.h</h3>
  <ul>
    <li><span>int</span> ioInit<span>(void)</span></li> 
    <li><span>int</span> open<span>(const char *path,int oflag)</span></li> 
    <li><span>int</span> close<span>(int fd)</span></li> 
    <li><span>ssize_t</span> read<span>(int fd,void *buf,size_t nbytes)</span></li> 
    <li><span>off_t</span> lseek<span>(int fd,off_t offset,int whence)</span></li> 
    <li><span>off_t</span> tell<span>(int fd)</span></li> 
    <li><span>FILE </span> fopen<span>(const char *filename,const char *mode)</span></li> 
    <li><span>int</span> fclose<span>(FILE *fp)</span></li> 
    <li><span>size_t</span> fread<span>(void *ptr,size_t size,size_t nitems,FILE *fp)</span></li> 
    <li><span>int</span> fgetc<span>(FILE *stream)</span></li> 
    <li><span>int</span> getc<span>(FILE *stream)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">59</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="swab.h" />
  <h3>swab.h</h3>
  <ul>
    <li><span>__inline__ __const__ u16</span> __fswab16<span>(u16 x){return __arch__swab16(x)</span></li> 
    <li><span>__inline__ u16</span> __swab16p<span>(u16 *x){return __arch__swab16p(x)</span></li> 
    <li><span>__inline__ void</span> __swab16s<span>(u16 *addr){__arch__swab16s(addr)</span></li> 
    <li><span>__inline__ __const__ u32</span> __fswab32<span>(u32 x){return __arch__swab32(x)</span></li> 
    <li><span>__inline__ u32</span> __swab32p<span>(u32 *x){return __arch__swab32p(x)</span></li> 
    <li><span>__inline__ void</span> __swab32s<span>(u32 *addr){__arch__swab32s(addr)</span></li> 
    <li><span>u32</span> h</li> 
    <li><span>u32</span> l</li> 
    <li><span></span> return<span>(((u64)__swab32(l))<<32)|((u64)(__swab32(h)))</span></li> 
    <li><span>return</span> __arch__swab64<span>(x)</span></li> 
    <li><span>__inline__ u64</span> __swab64p<span>(u64 *x){return __arch__swab64p(x)</span></li> 
    <li><span>__inline__ void</span> __swab64s<span>(u64 *addr){__arch__swab64s(addr)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">159</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="types.h" />
  <h3>types.h</h3>
  <ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">47</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb.h" />
  <h3>usb.h</h3>
  <ul>
    <li><span>void</span> usbInit<span>()</span></li> 
    <li><span>void</span> writeDescriptor<span>(u32 addr,u32 dw0,u32 dw1,u32 dw2,u32 dw3)</span></li> 
    <li><span>void</span> writeFmInt<span>(u32 dw)</span></li> 
    <li><span>void</span> writeBulkHeadList<span>(u32 dw)</span></li> 
    <li><span>void</span> setBulkListEn<span>()</span></li> 
    <li><span>void</span> setTDFound<span>()</span></li> 
    <li><span>void</span> setOperational<span>()</span></li> 
    <li><span>void</span> writePort1Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writePort2Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeFmRem<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1FmInt<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1BulkHeadList<span>(u32 dw)</span></li> 
    <li><span>void</span> setOH1BulkListEn<span>()</span></li> 
    <li><span>void</span> setOH1TDFound<span>()</span></li> 
    <li><span>void</span> setOH1Operational<span>()</span></li> 
    <li><span>void</span> writeOH1Port1Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1Port2Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1FmRem<span>(u32 dw)</span></li> 
    <li><span>void</span> oh0Init<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void</span> oh1Init<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void</span> ehcInit<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void(</span> usb_udelay_function<span>)(u32 delay)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">39</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_input.h" />
  <h3>usb_input.h</h3>
  <ul>
    <li><span>void</span> input_register_device<span>(struct input_dev *)</span></li> 
    <li><span>void</span> input_unregister_device<span>(struct input_dev *)</span></li> 
    <li><span>void</span> input_register_handler<span>(struct input_handler *)</span></li> 
    <li><span>void</span> input_unregister_handler<span>(struct input_handler *)</span></li> 
    <li><span>int</span> input_open_device<span>(struct input_handle *)</span></li> 
    <li><span>void</span> input_close_device<span>(struct input_handle *)</span></li> 
    <li><span>void</span> input_event<span>(struct input_dev *dev,unsigned int type,unsigned int code,int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">747</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_mem.h" />
  <h3>usb_mem.h</h3>
  <ul>
    <li><span>void </span> usb_malloc_dma<span>(u32 len,u32 *dma_addr)</span></li> 
    <li><span>struct usb_pool </span> usb_pool_create<span>(u32 size,u32 uncached)</span></li> 
    <li><span>dma_addr_t</span> usb_map_single<span>(void *transfer_buffer,int data_len,int dir)</span></li> 
    <li><span>void</span> usb_unmap_single<span>(u32 dma_addr,int len,int dir)</span></li> 
    <li><span>void </span> usb_pool_alloc<span>(struct usb_pool *ppool,u32 *dma_addr)</span></li> 
    <li><span>void</span> usb_pool_free<span>(struct usb_pool *ppool,void *pobj,u32 dma_addr)</span></li> 
    <li><span>void</span> usb_pool_destroy<span>(struct usb_pool *ppool)</span></li> 
    <li><span>void </span> usb_malloc<span>(u32 len)</span></li> 
    <li><span>void</span> usb_free<span>(void *p,u32 len)</span></li> 
    <li><span>void</span> usb_memset<span>(void *cp,u32 val,int size)</span></li> 
    <li><span>void </span> usb_memscan<span>(void *addr,int c,size_t size)</span></li> 
    <li><span>u32</span> usb_check_payload<span>(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer,u32 *next_value)</span></li> 
    <li><span>u32</span> usb_fill_payload<span>(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_spin.h" />
  <h3>usb_spin.h</h3>
  <ul>
    <li><span>void</span> spin_lock_irqsave<span>(spinlock_t *sp_lock,int flags)</span></li> 
    <li><span>void</span> spin_unlock_irqrestore<span>(spinlock_t *sp_lock,int flags)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">34</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_timer.h" />
  <h3>usb_timer.h</h3>
  <ul>
    <li><span>void</span> mod_timer<span>(struct timer_list *tlist,u32 val)</span></li> 
    <li><span>void</span> del_timer_sync<span>(struct timer_list *tlist)</span></li> 
    <li><span>u32</span> timer_pending<span>(struct timer_list *tlist)</span></li> 
    <li><span>void</span> add_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>void</span> init_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>void</span> del_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>int</span> time_after<span>(u32 jiff,int timeout)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">25</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="util.h" />
  <h3>util.h</h3>
  <ul>
    <li><span>u32</span> swapBytes4<span>(u32 input)</span></li> 
    <li><span>void</span> swapBytesPtr<span>(void *ptr,int byteCount)</span></li> 
    <li><span>void</span> swapByteGroupingsPtr<span>(void *ptr,int groupSize,int groupCount)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">20</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="vi.h" />
  <h3>vi.h</h3>
  <ul>
    <li><span>vireg</span> viRegs[]</li> 
    <li><span>const encoder_type_t</span> VI_ENCODER_ROHM</li> 
    <li><span>const encoder_type_t</span> VI_ENCODER_CONXT</li> 
    <li><span>void</span> viNtsc<span>(void)</span></li> 
    <li><span>void</span> viSetFormat<span>(viFormat fmat,u32 xoff,u32 yoff,u32 height,u32 width)</span></li> 
    <li><span>void</span> viSetFieldSrc<span>(viBase field,u32 addr,u32 width,u32 stride)</span></li> 
    <li><span>void</span> viEnable<span>(u32 e)</span></li> 
    <li><span>void</span> viLoad<span>(void)</span></li> 
    <li><span>void</span> viLoadSync<span>(void)</span></li> 
    <li><span>void</span> fire_gun1<span>(int duration)</span></li> 
    <li><span>void</span> fire_gun0<span>(int duration)</span></li> 
    <li><span>int</span> mon_tstgun0clr<span>(void)</span></li> 
    <li><span>int</span> mon_tstgun1clr<span>(void)</span></li> 
    <li><span>int</span> confirm_gun0<span>(void)</span></li> 
    <li><span>int</span> confirm_gun1<span>(void)</span></li> 
    <li><span>int</span> confirm_notgun0<span>(void)</span></li> 
    <li><span>int</span> confirm_notgun1<span>(void)</span></li> 
    <li><span>int</span> chk_int<span>(int int_num)</span></li> 
    <li><span>void</span> clr_int<span>(int int_num,u32 vct,u32 enb)</span></li> 
    <li><span>void</span> viNtsc<span>(void)</span></li> 
    <li><span>u16</span> __VIRegs<span>(int index)</span></li> 
    <li><span>void</span> printVIRegs<span>(void)</span></li> 
    <li><span>void</span> SetVIInt<span>(int int_num,int int_enb,u16 hct,u16 vct)</span></li> 
    <li><span>void</span> ClrVIInt<span>(int int_num)</span></li> 
    <li><span>void</span> __VISet3in1Output<span>(VIBool enable)</span></li> 
    <li><span>void</span> GPIOInit<span>(void)</span></li> 
    <li><span>void</span> outputLed<span>(int value)</span></li> 
    <li><span>BOOL</span> __VISetSCL<span>(u32 value)</span></li> 
    <li><span>BOOL</span> __VISetSDA<span>(u32 value)</span></li> 
    <li><span>void</span> __VIOpenI2C<span>(void)</span></li> 
    <li><span>void</span> __VICloseI2C<span>(void)</span></li> 
    <li><span>void</span> __VISet3in1Output<span>(VIBool enable)</span></li> 
    <li><span>void</span> __VISetVolume<span>(u8 volumeL,u8 volumeR)</span></li> 
    <li><span>void</span> YUVSolidColor<span>(u8 y,u8 u,u8 v,u8 enable)</span></li> 
    <li><span>void</span> vipll_init<span>(void)</span></li> 
    <li><span>void</span> ViLcdInit<span>(void)</span></li> 
    <li><span>void</span> vi_setcnxt_reg<span>(u8 addr,u8 data)</span></li> 
    <li><span>void</span> viHd1080i<span>(void)</span></li> 
    <li><span>void</span> viHd720p<span>(void)</span></li> 
    <li><span>BOOL</span> __VIRelSCL<span>(u32 value)</span></li> 
    <li><span>BOOL</span> __VIDisSDA<span>(u32 value)</span></li> 
    <li><span>u8</span> VIGetSDA<span>(void)</span></li> 
    <li><span>u8</span> vi_getcnxt_reg<span>(u8 addr,u8 data)</span></li> 
    <li><span>s32</span> __VIGetI2CData<span>(u8 slaveAddr,u8 *pData,s32 nBytes)</span></li> 
    <li><span>s32</span> __VIsetI2CAddress<span>(u8 slaveAddr,u8 *pData,s32 nBytes)</span></li> 
    <li><span>void</span> set_current_vi_encoder<span>(encoder_type_t enc_type)</span></li> 
    <li><span>void</span> vi_init_hd<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">44</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">169</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="vi_conexant.h" />
  <h3>vi_conexant.h</h3>
  <ul>
    <li><span>void</span> read_print<span>(u8 addr)</span></li> 
    <li><span>void</span> conexant_set_hdtv_mode<span>(HdFormat hdtv_mode)</span></li> 
    <li><span>int</span> i2c_writereg<span>(unsigned char theSlave,unsigned char theReg,unsigned char theValue)</span></li> 
    <li><span>unsigned char</span> i2c_readreg<span>(unsigned char theSlave,unsigned char theReg)</span></li> 
    <li><span>void</span> i2c_gpioinit<span>(void)</span></li> 
    <li><span>void</span> vi_init_hd<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">15</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="video.h" />
  <h3>video.h</h3>
  <ul>
    <li><span>void</span> videoInit<span>(void *fb,int format)</span></li> 
    <li><span>void</span> videoSwapBuffers<span>(void *fb)</span></li> 
    <li><span>void</span> videoUseISR4Swap<span>(void)</span></li> 
    <li><span>int</span> videoGetEncoderType<span>(void)</span></li> 
    <li><span>void</span> viDump<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">71</div>  </div>
 </div>

</section>
