---
layout: post
tags: 
- wii
- sdk
- leak
- gamecube
title: Nintendo Wii Diagnostic Disc Source Code
category: wii
image: /public/images/wii/Nintendo Wii Diagnostic Disc Source Code.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/Nintendo Wii Diagnostic Disc Source Code.jpg
permalink: /nintendo-wii-diag4rvl-leak
redirect_from:
  - /nintendo-wii-diag4rvl-leak/
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
- gamecube
editlink: /consoles/wii/WiiDiagnosticDisc.md
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

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">MddlWin - A Windows GUI created by Nintendo to organise which tests will be written to the Wii/Gamecube Diagnostic Disc. Each test is its own ELF file that tests a specific part of the hardware. <a href="https://t.co/dnLAUO4CN3">pic.twitter.com/dnLAUO4CN3</a></p>&mdash; 🕹 RetroReversing.com - Reverse Retro Games 🕹 (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1419260438810877960?ref_src=twsrc%5Etfw">July 25, 2021</a></blockquote> 

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

{% capture card_1_1_items %}
- const int|||bufsize
- char|||buffer[bufsize]
- int|||restsize
- int|||now
- bool|||isend
- |||TFileStream2::TFileStream2(const AnsiString s,Word in):TFileStream(s,in)
- int __fastcall|||TFileStream2::Readln(void *p)
- int __fastcall|||TFileStream2::Readst(char *p)
- int|||ScanString(char *in,char *table)
- char|||ReadString(char *in,char *table,bool *Find)
- char|||TrimString(char *in,char *table)
{% endcapture %}

{% capture card_1_2_items %}
- |||Form1 *Form1
- AnsiString|||ConvertSl(char *s)
- int|||SearchGroup(char *p)
- int|||SearchDiag(char *p)
- void|||DecodeGroups(char *groups,int *glink)
- void|||DecodeDiags(char *diags,int *dlink)
- bool|||GetFileData(AnsiString name,TSearchRec&sr)
- void|||CopyResource(AnsiString from,AnsiString to,bool isDelete)
- AnsiString|||groupfile
- AnsiString|||diagfile
- AnsiString|||resourcefile
- AnsiString|||masterfile
- AnsiString|||dvdrootdir
- AnsiString|||mddldefname
- char|||ENV_ROOT
- char|||systemname
- AnsiString|||rootdir
- const|||BUTTON_WIDTH
- const|||BUTTON_HEIGHT
- |||tablestr table[]
- TPanel|||list[sizeof(table)/sizeof(tablestr)]
- const|||BUFFER_SIZE
- int|||DiagSize
- int|||GroupSize
- DData|||Diag[1000]
- GData|||Group[300]
- bool|||isTreeViewSelected
- NodeStr|||TV2Node
- bool|||ppcmode
- int|||Lang
- __fastcall|||TForm1::TForm1(TComponent *Owner):TForm(Owner)
- void __fastcall|||TForm1::FormClose(TObject *Sender,TCloseAction&Action)
- bool|||TForm1::isSelectedDiag()
- bool|||TForm1::isSelectedGroup()
- char|||AddResource(TListBox *L,char *from,char *to)
- DData|||TForm1::DoDiag(char *name,TFileStream2 *f,DData&Diag,TListBox *L)
- GData|||TForm1::DoGroup(char *name,TFileStream2 *f,GData&Group)
- int|||SearchGroup(char *p)
- int|||SearchDiag(char *p)
- void|||DecodeGroups(char *groups,int *glink)
- void|||DecodeDiags(char *diags,int *dlink)
- bool|||TForm1::ReadMddl(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)
- bool|||DoDiag2(DData&Diag,TListBox *L,int&num)
- bool|||TForm1::ReadMddl(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)
- int __fastcall|||TForm1::SelectClick()
- void __fastcall|||TForm1::BevelClick(TObject *Sender)
- void __fastcall|||TForm1::ListBox1Click(TObject *Sender)
- struct NodeStr|||TForm1::Develop(bool isParent,int i,NodeStr Node,TTreeView *GroupTree)
- struct NodeStr __fastcall|||TForm1::DevelopChild(int i,NodeStr Node,TTreeView *GroupTree)
- void __fastcall|||TForm1::GroupReadClick()
- void __fastcall|||TForm1::GroupTreeClick(TObject *Sender)
- AnsiString|||ConvertSl(char *s)
- void|||TForm1::UpdateSystem()
- void|||TForm1::ShowDiagContents(TListBox *ListBox,int target)
- void|||TForm1::ShowGroupContents(TListBox *ListBox,int target)
- void __fastcall|||TForm1::GroupTreeMouseDown(TObject *Sender,TMouseButton Button,TShiftState Shift,int X,int Y)
- void __fastcall|||TForm1::JumpToClick(TObject *Sender)
- void __fastcall|||TForm1::GroupTreeMouseUp(TObject *Sender,TMouseButton Button,TShiftState Shift,int X,int Y)
- void __fastcall|||TForm1::MasterTreeDragOver(TObject *Sender,TObject *Source,int X,int Y,TDragState State,bool&Accept)
- void __fastcall|||TForm1::MasterTreeDragDrop(TObject *Sender,TObject *Source,int X,int Y)
- bool|||GetFileData(AnsiString name,TSearchRec&sr)
- void|||CopyResource(AnsiString from,AnsiString to,bool isDelete)
- bool|||isMatchCache(TListBox *L,AnsiString file,AnsiString dfile)
- void|||FDelete(AnsiString dname,AnsiString fname)
- void __fastcall|||TForm1::CreateButtonClick(TObject *Sender)
- int|||TForm1::isMatchResource(AnsiString str,TListBox *L)
- void __fastcall|||TForm1::FileFormatGroupClick(TObject *Sender)
- void __fastcall|||TForm1::FormActivate(TObject *Sender)
- void __fastcall|||TForm1::RootPanelClick(TObject *Sender)
- void|||TForm1::ParseArg()
- void __fastcall|||TForm1::DvdrootPanelClick(TObject *Sender)
- void __fastcall|||TForm1::MddlPanelClick(TObject *Sender)
- void __fastcall|||TForm1::DeleteButtonClick(TObject *Sender)
- void|||TForm1::SetErrorMessage(EMode mode,TListBox *L,AnsiString s)
- void|||TrimRAdd(TListBox *L,AnsiString s)
- void|||TrimLAdd(TListBox *L,AnsiString s)
- void|||TrimAdd(TListBox *L,AnsiString s)
- bool|||TForm1::ReadMddl2(AnsiString filename,TListBox *L1,TListBox *L2,TListBox *L3)
- void __fastcall|||TForm1::CheckButtonClick(TObject *Sender)
- void __fastcall|||TForm1::WMGetMinMaxInfo(TWMGetMinMaxInfo&msg)
- void __fastcall|||TForm1::LangGroupClick(TObject *Sender)
{% endcapture %}

{% capture card_1_3_items %}
- u32|||Verbose
- ElfHdr|||Eh
- ElfPrgHdr|||Ph
- u32|||Swap32(u32 val)
- u16|||Swap16(u16 val)
- void|||SwapPh(ElfPrgHdr *pp)
- void|||SwapEh(ElfHdr *ep)
- DolImage|||EatPh(FILE *fp)
- DolImage|||ElfRead(const char *elfFile)
- int|||Pad32(FILE *fout,u32 bytes)
- int|||DumpDol(DolImage *ip,char *outFile)
- void|||ConvertToUnixFmt(char *fmt)
- static u32|||Swap32(u32 val)
- static u16|||Swap16(u16 val)
- static void|||SwapPh(ElfPrgHdr *pp)
- static void|||SwapEh(ElfHdr *ep)
- static DolImage|||EatPh(FILE *fp)
- static DolImage|||ElfRead(const char *elfFile)
- static int|||Pad32(FILE *fout,u32 bytes)
- static int|||DumpDol(DolImage *ip,char *outFile)
- static void|||ConvertToUnixFmt(char *fmt)
- int|||MakeDol(char *inFile,char *outFile)
{% endcapture %}

{% capture section_1_cards %}
{% include source-code-card.html title="TFileStream2.cpp" items=card_1_1_items functions="6" variables="5" lines="164" %}
{% include source-code-card.html title="Unit1.cpp" items=card_1_2_items functions="59" variables="22" lines="2294" %}
{% include source-code-card.html title="makedol.c" items=card_1_3_items functions="19" variables="3" lines="496" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_1_cards %}

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


{% capture card_2_1_items %}
- void|||SKITInit(void)
- void|||SKITRenderPoint(int x,int y,int pixel,u32 clr)
- void|||SKITRenderText(int x,int y,f32 scale,const char *msg)
- void|||SKITRenderLine(s16 x1,s16 y1,s16 x2,s16 y2,u32 clr)
- void|||SKITRenderRectangle(s16 x1,s16 y1,s16 x2,s16 y2,u32 clr)
- void|||SKITRenderCircle(s16 x,s16 y,s16 r,s16 div,u32 clr)
- void|||SKITRenderTime(int x,int y,f32 scale)
- void|||SKITResetHandler(void)
- void|||SKITWaitMilliSec(u32 msec)
- void|||SKITWaitMicroSec(u32 usec)
- void|||SKITWaitNanoSec(u32 nsec)
{% endcapture %}

{% capture section_2_cards %}
{% include source-code-card.html title="simplekit.h" items=card_2_1_items functions="11" variables="0" lines="47" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_2_cards %}

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

{% capture card_3_1_items %}
- JPad|||jPad[PAD_MAX_CONTROLLERS]
- BOOL|||Down
- BOOL|||Left
- BOOL|||Right
- BOOL|||A
- |||BOOL B
- BO|||L L
- BOOL|||R
- BOOL|||X
- BOOL|||Y
- BOOL|||Z
- BOOL|||Start
- |||BASIC_PAD_TYPE
- BASIC_PAD_TYPE|||padGet(void)
- BASIC_PAD_TYPE|||padWait(void)
- BASIC_PAD_TYPE|||padGetRaw(void)
- BASIC_PAD_TYPE|||padGetRawEx(u32 num)
{% endcapture %}

{% capture card_3_2_items %}
- OSFontHeader|||GetRomFontHeader(void)
- const GXColor|||DefaultTextPalette[DEFAULT_TEXT_PALETTE_NUM]
- void|||InitRomFont(void)
- OSFontHeader|||GetRomFontHeader(void)
- void|||DsSetROMFontSize(s16 size,s16 space)
- void|||DsGetROMFontSize(s16 *size,s16 *space)
- u32|||DsSetFontColor(u32 color)
- int|||DsPuts(s16 x,s16 y,s16 z,char *string)
- int|||DsPrintf(s16 x,s16 y,s16 z,char *fmt,...)
{% endcapture %}

{% capture card_3_3_items %}
- u32|||ComputeCRC32(u8 *buf,u32 length)
{% endcapture %}

{% capture card_3_4_items %}
- void|||InitSystem(GXRenderModeObj *mode)
- BOOL|||InitLayerSystem(MEMAllocator *hHeap,ILayer layer)
- MEMAllocator|||GetSysAllocator(void)
- void|||InitAllocator(MemPack *userMem1,MemPack *userMem2)
- void|||BeforeRender(void)
- void|||DoneRender(void)
- void|||SwapBuffers(void)
- GXRenderModeObj|||GetRenderModeObj(void)
- void|||GetCurrentBuffer(void)
- void|||ReInit(GXRenderModeObj *mode)
- void|||SwapRmodeBuffers(RMODE_SET mode)
- OSThreadQueue|||jPostRetraceCallbackThreadQueue
{% endcapture %}

{% capture card_3_5_items %}
- LGradationColor|||DefaultBgGradPalette[]
- ILayer|||LtCreateTextLayer(s32 x,s32 y,s32 chrElmsX,s32 chrElmsY,s32 bufferHeight)
- void|||LtPrintf(ILayer layer,char *format,...)
- void|||LtPrintfEx(ILayer layer,LPOINT cursor,char *format,...)
- void|||LtPuts(ILayer layer,char *buffer)
- void|||LtPutsEx(ILayer layer,LPOINT cursor,char *buffer)
- u32|||LtSetTextColor(ILayer layer,u32 color)
- u32|||LtGetTextColor(ILayer layer)
- BOOL|||LtSetTextReverse(ILayer layer,BOOL reverse)
- BOOL|||LtGetTextReverse(ILayer layer)
- BOOL|||LtSetTextBlink(ILayer layer,BOOL blink)
- BOOL|||LtGetTextBlink(ILayer layer)
- s32|||LtSetTextFontHeight(ILayer layer,s32 fontHeight)
- s32|||LtGetTextFontHeight(ILayer layer)
- BOOL|||LtSetTextCursorVisible(ILayer layer,BOOL visible)
- BOOL|||LtGetTextCursorVisible(ILayer layer)
- LPOINT|||LtSetTextCursor(ILayer layer,LPOINT cursor)
- LPOINT|||LtGetTextCursor(ILayer layer)
- u32|||LtInputDataEx(ILayer layer,u32 Initial)
- u16|||LtInputData16Ex(ILayer layer,u16 Initial)
- u32|||LtInputDecimalEx(ILayer layer,u32 Initial)
- BOOL|||LtInputBoolEx(ILayer layer,BOOL Value)
- u32|||LtInputData(u32 Initial)
- u16|||LtInputData16(u16 Initial)
- u32|||LtInputDecimal(u32 Initial)
- BOOL|||LtInputBool(BOOL Value)
- BOOL|||LtShowMessage(const char *Message)
- ILayer|||LiCreateImageLayer(s32 x,s32 y,u32 width,u32 height,char *fileName)
- void|||LiAdjustImageSizeIntoOriginal(ILayer layer)
- LRatio|||LiSetImageRatio(ILayer layer,LRatio ratio)
- LRatio|||LiGetImageRatio(ILayer layer)
- u32|||LiSetImageId(ILayer layer,u32 id)
- u32|||LiGetImageId(ILayer layer)
- void|||LmSetRootLayer(ILayer layer)
- ILayer|||LmGetRootLayer(void)
- void|||LmSetCurrentLayer(ILayer layer)
- ILayer|||LmGetCurrentLayer(void)
- ILayer|||LmCreateSubLayer(s32 x,s32 y,u32 w,u32 h)
- ILayer|||LmCreateTextSubLayerEx(char *name,s32 x,s32 y,s32 chrElmsX,s32 chrElmsY,s32 bufferHeight)
- ILayer|||LmCreateTextSubLayer(char *name,s32 x,s32 y,s32 chrElmsX,s32 chrElmsY)
- ILayer|||LmCreateImageSubLayer(s32 x,s32 y,u32 width,u32 height,char *fileName)
- BOOL|||LmDeleteLayer(ILayer layer)
- BOOL|||LmDeleteSubLayer(ILayer layer)
- BOOL|||LmDeleteSubLayerIndex(s32 index)
- ILayer|||LmGetSubLayer(s32 index)
- void|||LmIntoLayer(s32 index)
- void|||LmBackLayer(void)
{% endcapture %}

{% capture card_3_6_items %}
- ILayerManager|||CreateLayerManager(void)
- u32|||GetTemplateLayerSize(void)
- void|||GetTemplateLayer(void *layer)
- ILayer|||CreateLayer(s32 x,s32 y,u32 width,u32 height)
- void|||DrawLayer(ILayer layer)
{% endcapture %}

{% capture card_3_7_items %}
- void|||menuOpen(ILayer Layer,MENU_TYPE *MENU)
- void|||ShowMenu(ILayer layer,const MENU_TYPE *Menu)
{% endcapture %}

{% capture card_3_8_items %}
- BOOL|||portProbe(void)
- s32|||portWrite(u32 address,u32 data)
- s32|||portRead(u32 address,u32 *data)
- u32|||portGetExiFreq(void)
- void|||portSetExiFreq(u32 freq)
{% endcapture %}

{% capture card_3_9_items %}
- void|||jStartGxThread(OSPriority priority)
- void|||jGxSuspendThread(void)
- void|||jGxResumeThread(void)
- void|||jStartPadThread(OSPriority priority)
{% endcapture %}

{% capture card_3_10_items %}
- s32|||InspectionLog(char *test_name,char *test_result,char *test_Ver)
- s32|||WriteFreeLog(char *test_name,char *test_result,char *test_Ver)
- s32|||InspectionLogFunc(char *nand_dir_name,char *nand_file_name,char *test_name,char *test_result,char *test_Ver)
- s32|||WriteLogToNand(char *nand_dir_name,char *nand_file_name,void *write_buf)
- s32|||WriteAgingLog(char *test_name,char *test_result,char *test_Ver)
- s32|||WriteAgingInfo(char *aging_info)
- s32|||AgingLogFunc(char *nand_dir_name,char *nand_file_name,char *test_name,char *test_result,char *test_Ver)
- s32|||WriteFreeLogToNand(char *nand_dir_name,char *nand_file_name,void *write_buf)
- s32|||CheckOneProcess(char *nand_file_name,char *test_name)
{% endcapture %}

{% capture card_3_11_items %}
- void|||InitBarcode(MEMAllocator *pAllocator,ILayer *layer)
- int|||GetBarcodeScan(char *strSerialNo,int timeout)
- void|||BarcodePrint(char *format,...)
- void|||BarcodePrintEx(LPOINT lp,char *format,...)
- ILayer|||GetBarcodeILayer(void)
{% endcapture %}

{% capture card_3_12_items %}
- s32|||CheckHwWriteLog(MEMHeapHandle heap)
- s32|||CheckProcessFunc(char *nand_file_name,u32 test_num,char test_name[][64],MEMHeapHandle heap)
{% endcapture %}

{% capture card_3_13_items %}
- void|||commSend(u32 ErrorCode,u32 *Data,int DataSize)
- BOOL|||commCanReceive(void)
- BOOL|||commReceive(u16 *InstructionCode,u32 *Data,int DataSize)
{% endcapture %}

{% capture card_3_14_items %}
- void|||SledTestStart(void)
- void|||SledTestOk(void)
- void|||SledTestNg(void)
- void|||SledOn(void)
- void|||SledOff(void)
- void|||SledFlashStart(int flash_time)
{% endcapture %}

{% capture section_3_cards %}
{% include source-code-card.html title="BasicPad.h" items=card_3_1_items functions="4" variables="13" lines="100" %}
{% include source-code-card.html title="BasicPuts.h" items=card_3_2_items functions="8" variables="1" lines="51" %}
{% include source-code-card.html title="Crc.h" items=card_3_3_items functions="1" variables="0" lines="26" %}
{% include source-code-card.html title="InitSystem.h" items=card_3_4_items functions="11" variables="1" lines="91" %}
{% include source-code-card.html title="Layer.h" items=card_3_5_items functions="46" variables="1" lines="213" %}
{% include source-code-card.html title="LayerInterface.h" items=card_3_6_items functions="5" variables="0" lines="139" %}
{% include source-code-card.html title="Menu.h" items=card_3_7_items functions="2" variables="0" lines="66" %}
{% include source-code-card.html title="PortExi.h" items=card_3_8_items functions="5" variables="0" lines="42" %}
{% include source-code-card.html title="Thread.h" items=card_3_9_items functions="4" variables="0" lines="44" %}
{% include source-code-card.html title="WriteLog.h" items=card_3_10_items functions="9" variables="0" lines="152" %}
{% include source-code-card.html title="barcode.h" items=card_3_11_items functions="5" variables="0" lines="59" %}
{% include source-code-card.html title="chklog.h" items=card_3_12_items functions="2" variables="0" lines="56" %}
{% include source-code-card.html title="dpsram.h" items=card_3_13_items functions="3" variables="0" lines="43" %}
{% include source-code-card.html title="sled.h" items=card_3_14_items functions="6" variables="0" lines="26" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_3_cards %}

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


{% capture card_4_1_items %}
- BOOL|||SIusbCheckDev(s32 chan)
- BOOL|||SIusbReset(s32 chan,u32 *buf)
- BOOL|||SIusbGetStatus(s32 chan,u32 *buf)
- BOOL|||SIusbCheckFifo(s32 chan,u16 *buf)
- BOOL|||SIusbTrans(s32 chan,u8 wr_size,void *wr_buf,u8 rd_size,void *rd_buf)
- BOOL|||SIusbTransAsync(s32 chan,u8 wr_size,void *wr_buf,u8 rd_size,void *rd_buf,SIUSBcallback callback)
{% endcapture %}

{% capture card_4_2_items %}
- BOOL|||SIusbCheckAllReportFinish(void)
- BOOL|||SIusbOSReportInit(void)
- void|||SIusbOSReportOri(const char *msg,...)
- void|||SIusbOSReport(const char *msg,...)
{% endcapture %}

{% capture card_4_3_items %}
- s32|||DIAGGetEnv(Env *env)
- void|||DIAGPutEnv(Env *env)
- u32|||DIAGGetSettingLoop(void)
- u32|||DIAGGetCurrentLoop(void)
- s32|||DIAGGetCfg(Cfg *cfg)
- void|||DIAGPutCfg(Cfg *cfg)
- void|||__OSLaunchMenu(void)
- void|||__OSRelaunchTitle(void)
- s32|||NANDFinalize(void)
{% endcapture %}

{% capture card_4_4_items %}
- u32|||DIAGStart(void)
- void|||DIAGStop(u32 status)
- BOOL|||DIAGGetLogDest(s32 *chan,u32 *dev)
- s32|||DIAGProbeBarnacle(s32 chan,u32 dev)
- BOOL|||DIAGReadBarnacle(s32 chan,u32 dev,u32 command,u8 *result)
- BOOL|||DIAGCheckIPL(void)
- u32|||DIAGGetHwRev(void)
- void|||DIAGReportStart(void)
- void|||DIAGReportStop(void)
- BOOL|||DIAGReportStat(void)
- void|||DIAGInitCRC(int argc,char **argv)
- u32|||DIAGComputeCRC(s32 *buf,u32 size)
- s32|||DIAGCheckCRC(s32 *buf,u32 size)
- u32|||DIAGGetCRCValue()
- s32|||DIAGGetCRCCount()
{% endcapture %}

{% capture card_4_5_items %}
- void|||sdi_init_intr(void(*irqCb)(void))
- void|||sdi_init(void(*irqCb)(void))
- sdi_slot_t|||sdi_handle(u32 ctrl,u32 slot)
- void|||sdi_set_debug(u32 debug)
- u32|||sdi_rd_reg(sdi_slot_t sp,u32 offset)
- void|||sdi_wr_reg(sdi_slot_t sp,u32 offset,u32 val)
- void|||sdi_wr_reg16(sdi_slot_t sp,u32 offset,u32 val)
- u32|||sdi_verif_reg(sdi_slot_t sp,u32 offset,u32 expected)
- void|||sdi_reg_intr(sdi_slot_t sp,u32 intr,void(*irq)(sdi_slot_t,void *),void *closure)
- void|||sdi_intr(void)
- u32|||sdi_get_istat(sdi_slot_t sp)
- void|||sdi_clear_istat(sdi_slot_t sp,u32 ibits)
- u32|||sdi_wait_istat(sdi_slot_t sp,u32 ibits,u32 bail_on_abort)
- void|||sdi_wr_host_ctrl(sdi_slot_t sp,u32 in_data)
- void|||sdi_int_regs_en(sdi_slot_t sp)
- void|||sdi_wr_nor_int_sts_en(sdi_slot_t sp,u32 en)
- void|||sdi_wr_err_int_sts_en(sdi_slot_t sp,u32 en)
- void|||sdi_err_int_recover(sdi_slot_t sp)
- u32|||sdi_cmd(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd)
- u32|||sdi_io_cmd(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd,u32 blk_size,u32 blk_cnt,u32 dma,u32 wr)
- void|||sdi_read_io_coherency(sdi_slot_t sp)
- void|||sdi_write_io_coherency(sdi_slot_t sp)
- u32|||sdi_resp_type_cal(sdi_slot_t sp,u32 cmd_index,u32 resp_with_busy)
- u32|||sdi_mem_cmd(sdi_slot_t sp,u32 cmd_index,u32 arg,u32 resp_with_busy)
- u32|||sdi_mem_cmd_data(sdi_slot_t sp,u32 sysaddr,u32 cmd_index,u32 blk_size,u32 blk_cnt,u32 data_addr,u32 dma,u32 wr,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd0(sdi_slot_t sp)
- u32|||sdi_cmd2(sdi_slot_t sp)
- u32|||sdi_cmd3(sdi_slot_t sp)
- u32|||sdi_cmd7(sdi_slot_t sp,u32 rca)
- u32|||sdi_cmd9(sdi_slot_t sp)
- u32|||sdi_cmd12(sdi_slot_t sp)
- u32|||sdi_cmd13(sdi_slot_t sp)
- u32|||sdi_cmd16(sdi_slot_t sp,u32 dflt_blk_size)
- u32|||sdi_cmd17(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)
- u32|||sdi_cmd18(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd23(sdi_slot_t sp,u32 blk_cnt)
- u32|||sdi_cmd24(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)
- u32|||sdi_cmd25(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd32(sdi_slot_t sp,u32 start_blk_addr)
- u32|||sdi_cmd33(sdi_slot_t sp,u32 end_blk_addr)
- u32|||sdi_cmd38(sdi_slot_t sp,u32 resp_with_busy)
- u32|||sdi_cmd52(sdi_slot_t sp,u32 reg_addr,u32 sd_wr_data,u32 fn_no,u32 raw,u32 wr,u32 resp_with_busy)
- u32|||sdioByteRead(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 resp_with_busy)
- u32|||sdioByteWrite(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 wr_data,u32 raw,u32 resp_with_busy)
- u32|||sdioExtRead(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
- u32|||sdioExtWrite(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
- u32|||sdi_cmd53(sdi_slot_t sp,u32 byte_blk_cnt,u32 wr,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
- u32|||sdi_cmd55(sdi_slot_t sp)
- u32|||sdi_acmd6(sdi_slot_t sp,u32 buswidth)
- u32|||sdi_dma_done(sdi_slot_t sp)
- u32|||sdi_abort(sdi_slot_t sp)
- u32|||sdi_suspend(sdi_slot_t sp)
- u32|||sdi_resume(sdi_slot_t sp)
- void|||sdi_set_async_mode(sdi_slot_t sp,u32 mode)
- void|||sdi_wr_clk_ctrl(sdi_slot_t sp,u32 clk_ctrl)
- void|||sdi_wr_blk_gap_ctrl(sdi_slot_t sp,u32 bgap_ctrl)
- void|||sdi_wr_timeout_reg(sdi_slot_t sp,u32 timeout_cnt)
- void|||sdi_set_bus_width(sdi_slot_t sp,u32 buswidth)
- void|||sdi_rd_sd_hc_capabilities(sdi_slot_t sp)
- u32|||sdi_clock_supply(sdi_slot_t sp,u32 div)
- void|||sdi_clock_stop(sdi_slot_t sp)
- void|||sdi_clock_change(sdi_slot_t sp,u32 div)
- void|||sdi_bus_power(sdi_slot_t sp)
- u32|||sdi_validate_ocr(sdi_slot_t sp,u32 ocr_data,u32 mem,u32 mmc)
- u32|||sdi_card_insertion(sdi_slot_t sp)
- u32|||sdi_io_card_init(sdi_slot_t sp)
- u32|||sdi_mem_card_init(sdi_slot_t sp)
- void|||sdi_mmc_card_init(sdi_slot_t sp)
- u32|||sdiSwapBytes4(u32 value)
- u32|||checkErrorInt(sdi_slot_t sp)
- u32|||sdiCardDetect(sdi_slot_t sp)
- u32|||sdiCardInit(sdi_slot_t sp)
- u32|||waitTransferComplete(sdi_slot_t sp)
- u32|||sdiGoIdle(sdi_slot_t sp)
- void|||sdiIoReset(sdi_slot_t sp)
- void|||sdiSoftReset(sdi_slot_t sp)
- u32|||sendCmd(sdi_slot_t sp,u32 arg,u32 tmdcmd)
- u32|||sdiSendStatus(sdi_slot_t sp)
- u32|||sdiSendOpCondition(sdi_slot_t sp)
- u32|||sdiAllSendCid(sdi_slot_t sp)
- u32|||sdiSendRca(sdi_slot_t sp)
- u32|||sdiSendCsd(sdi_slot_t sp)
- u32|||sdiSelectCard(sdi_slot_t sp)
- u32|||sdiSetBlockLength(sdi_slot_t sp,u32 blksiz)
- u32|||sdiSetBusWidth(sdi_slot_t sp,u32 buswidth)
- u32|||sdiAsyncAbort(sdi_slot_t sp)
- u32|||sdiSyncAbort(sdi_slot_t sp)
- void|||updateDmaPointer(sdi_slot_t sp)
- u32|||sdiReadSingleBlock(sdi_slot_t sp,u32 arg,u32 *rdbuf,u32 dma)
- u32|||sdiWriteSingleBlock(sdi_slot_t sp,u32 arg,u32 *wrbuf,u32 dma)
- u32|||sdiReadBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12,u32 infinite)
- u32|||sdiWriteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12,u32 infinite)
- u32|||sdiReadMultipleBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12)
- u32|||sdiWriteMultipleBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 dmaint,u32 auto_cmd12)
- u32|||sdiReadInfiniteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt)
- u32|||sdiWriteInfiniteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt)
- void|||sdi_init_ird(sdi_slot_t sp,u32 ctrl,u32 slot,void(*irqCb)(void))
- void|||sdi_clear_hcstruct(sdi_slot_t sp)
- void|||sdio_initUSBSDIPLLs()
- void|||sdio_DisableGpio(void)
- void|||sdio_EnableIOPJtag(void)
- void|||sdio_acr_iostrctrl1(u8 val)
- u32|||sdio_SelectCard(sdi_slot_t sp,u32 rca)
- u32|||sdio_setHSpd(sdi_slot_t sp)
- u32|||sdio_setHSpd2(sdi_slot_t sp)
- u32|||sdio_setNmlSpd(sdi_slot_t sp)
- u32|||sdio_getscr(sdi_slot_t sp)
- u32|||sdio_cidcheck(sdi_slot_t sp)
- u32|||sdio_csdcheck(sdi_slot_t sp)
- u32|||sdio_scrcheck(sdi_slot_t sp)
- u32|||sdio_check_cins(sdi_slot_t sp)
- u32|||sdio_check_crmv(sdi_slot_t sp)
- void|||sdio_udelay(u32 delay)
- void|||sdio_hc_swrst(sdi_slot_t sp,u32 type)
- u32|||sdio_wait_programend(sdi_slot_t sp)
- u32|||sdio_DeSelectCard(sdi_slot_t sp)
- u32|||sdio_rwsdioreg(sdi_slot_t sp,u32 wr,u32 fn_no,u32 blk_size,u32 blk_mode,u32 opcode,u32 reg_addr,u32 blk_cnt,u32 sysaddr,u32 dma)
- u32|||checkStatus(sdi_slot_t sp)
{% endcapture %}

{% capture card_4_6_items %}
- struct partitiontable_s|||__attribute__((packed))
- struct partitionboot_s|||__attribute__((packed))
- s32|||SDMInit(BOOL,int)
- s32|||SDMOpen(struct direntry *de,char *filename)
- s32|||SDMOpenDirFile(struct direntry *de,char *name)
- s32|||SDMRead(struct direntry *de,s32 id,u8 *data)
- s32|||SDMFindFirst(struct direntry *de)
- s32|||SDMFindNext(struct direntry *de)
- s32|||SDMDirFileFind(struct direntry *de,char *name)
- void|||SDMSetAccessMode(BOOL in)
- void|||SDMFinish()
- void|||SDMAlloc(u32 size)
- void|||SDMFree(void *in)
{% endcapture %}

{% capture card_4_7_items %}
- BOOL|||WKProbe(s32 chan)
- BOOL|||WKCheckBuf(s32 chan,u16 *send,u16 *recv)
- BOOL|||WKFlushBuf(s32 chan)
- s32|||WKRead(s32 chan,void *buf,u32 len)
- s32|||WKWrite(s32 chan,void *buf,u32 len)
{% endcapture %}

{% capture section_4_cards %}
{% include source-code-card.html title="SItoUSB.h" items=card_4_1_items functions="6" variables="0" lines="39" %}
{% include source-code-card.html title="SIusbOSReport.h" items=card_4_2_items functions="4" variables="0" lines="21" %}
{% include source-code-card.html title="diagcommon.h" items=card_4_3_items functions="9" variables="0" lines="147" %}
{% include source-code-card.html title="diagsdk.h" items=card_4_4_items functions="15" variables="0" lines="86" %}
{% include source-code-card.html title="sdio.h" items=card_4_5_items functions="118" variables="0" lines="498" %}
{% include source-code-card.html title="sdm.h" items=card_4_6_items functions="13" variables="0" lines="108" %}
{% include source-code-card.html title="wkreport.h" items=card_4_7_items functions="5" variables="0" lines="22" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_4_cards %}

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

{% capture card_5_1_items %}
- AISCallback|||AIRegisterStreamCallback(AISCallback callback)
- u32|||AIGetStreamSampleCount(void)
- void|||AIResetStreamSampleCount(void)
- void|||AISetStreamTrigger(u32 trigger)
- u32|||AIGetStreamTrigger(void)
- void|||AISetStreamPlayState(u32 state)
- u32|||AIGetStreamPlayState(void)
- void|||AISetStreamSampleRate(u32 rate)
- u32|||AIGetStreamSampleRate(void)
- void|||AISetStreamVolLeft(u8 vol)
- void|||AISetStreamVolRight(u8 vol)
- u8|||AIGetStreamVolLeft(void)
- u8|||AIGetStreamVolRight(void)
{% endcapture %}

{% capture card_5_2_items %}
- ARCallback|||ARRegisterDMACallback(ARCallback callback)
- u32|||ARGetDMAStatus(void)
- void|||ARStartDMA(u32 type,u32 mainmem_addr,u32 aram_addr,u32 length)
- u32|||ARInit(u32 *stack_index_addr,u32 num_entries)
- u32|||ARGetBaseAddress(void)
- BOOL|||ARCheckInit(void)
- void|||ARReset(void)
- u32|||ARAlloc(u32 length)
- u32|||ARFree(u32 *length)
- u32|||ARGetSize(void)
- u32|||ARGetInternalSize(void)
- void|||ARSetSize(void)
- void|||ARClear(u32 flag)
- void|||__ARClearInterrupt(void)
- u16|||__ARGetInterruptStatus(void)
{% endcapture %}

{% capture card_5_3_items %}
- void|||ARQInit(void)
- void|||ARQReset(void)
- void|||ARQPostRequest(ARQRequest *task,u32 owner,u32 type,u32 priority,u32 source,u32 dest,u32 length,ARQCallback callback)
- void|||ARQRemoveRequest(ARQRequest *task)
- void|||ARQRemoveOwnerRequest(u32 owner)
- void|||ARQFlushQueue(void)
- void|||ARQSetChunkSize(u32 size)
- u32|||ARQGetChunkSize(void)
- BOOL|||ARQCheckInit(void)
{% endcapture %}

{% capture card_5_4_items %}
- void|||DTKInit(void)
- void|||DTKShutdown(void)
- u32|||DTKQueueTrack(char *fileName,DTKTrack *track,u32 eventMask,DTKCallback callback)
- u32|||DTKRemoveTrack(DTKTrack *track)
- BOOL|||DTKFlushTracks(DTKFlushCallback callback)
- void|||DTKSetSampleRate(u32 samplerate)
- u32|||DTKGetSampleRate(void)
- void|||DTKSetInterruptFrequency(u32 samples)
- u32|||DTKGetInterruptFrequency(void)
- void|||DTKSetRepeatMode(u32 repeat)
- u32|||DTKGetRepeatMode(void)
- BOOL|||DTKSetState(u32 state)
- u32|||DTKGetState(void)
- BOOL|||DTKNextTrack(void)
- BOOL|||DTKPrevTrack(void)
- u32|||DTKGetPosition(void)
- DTKTrack|||DTKGetCurrentTrack(void)
- void|||DTKSetVolume(u8 left,u8 right)
- u16|||DTKGetVolume(void)
{% endcapture %}

{% capture card_5_5_items %}
- BOOL WINAPI|||HIOEnumDevices(HIOEnumCallback callback)
- BOOL WINAPI|||HIOInit(s32 chan,HIOCallback callback)
- BOOL WINAPI|||HIOInitEx(s32 chan,u32 dev,HIOCallback callback)
- BOOL WINAPI|||HIOReadMailbox(u32 *word)
- BOOL WINAPI|||HIOWriteMailbox(u32 word)
- BOOL WINAPI|||HIORead(u32 addr,void *buffer,s32 size)
- BOOL WINAPI|||HIOWrite(u32 addr,const void *buffer,s32 size)
- BOOL WINAPI|||HIOReadAsync(u32 addr,void *buffer,s32 size,HIOCallback callback)
- BOOL WINAPI|||HIOWriteAsync(u32 addr,const void *buffer,s32 size,HIOCallback callback)
- BOOL WINAPI|||HIOReadStatus(u32 *status)
- BOOL WINAPI|||HIOInit2(s32 chan,HIOCallback callback,HIONotify notify,void *param)
- BOOL WINAPI|||HIOInitEx2(s32 chan,s32 dev,HIOCallback callback,HIONotify notify,void *param)
- void WINAPI|||HIOExit()
{% endcapture %}

{% capture card_5_6_items %}
- BOOL|||JPEGGetFileInfo(u8 *jpegData,JPEGFileInfo *info)
- u32|||JPEGCalcMemory(JPEGFileInfo *info)
- BOOL|||JPEGOpenDecompressor(JPEGDecompressor *decomp,u8 *errorCode,u8 *workSpace,u8 *jpegData,JPEGFileInfo *info)
- void|||JPEGDecompressRawImage(JPEGDecompressor *decomp,void *dataY,void *dataCb,void *dataCr)
- void|||JPEGDecompressToXfb(JPEGDecompressor *decomp,void *xfbData,u32 xfbWidth,u32 xfbHeight)
- void|||JPEGDecompressToTexYCbCr(JPEGDecompressor *decomp,void *texY,void *texCb,void *texCr)
- void|||JPEGDecompressToTexRGBA8(JPEGDecompressor *decomp,void *texData,u8 alpha)
- BOOL|||JPEGGetNextRGBA8Tile(JPEGDecompressor *decomp,void *texData,u8 alpha,BOOL init)
{% endcapture %}

{% capture section_5_cards %}
{% include source-code-card.html title="ais.h" items=card_5_1_items functions="13" variables="0" lines="86" %}
{% include source-code-card.html title="ar.h" items=card_5_2_items functions="15" variables="0" lines="173" %}
{% include source-code-card.html title="arq.h" items=card_5_3_items functions="9" variables="0" lines="125" %}
{% include source-code-card.html title="dtk.h" items=card_5_4_items functions="19" variables="0" lines="112" %}
{% include source-code-card.html title="hio.h" items=card_5_5_items functions="13" variables="0" lines="77" %}
{% include source-code-card.html title="jpeg.h" items=card_5_6_items functions="8" variables="0" lines="172" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_5_cards %}

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
 This folder contains the C header files that provide low level access to the wii hardware. This library was originally written for the gamecube and then updated for the Wii, it was created by ATI (formally ArtX).

This library was not provided to third party developers in the official SDK and so was only used for internal tools and software such as the Wii Operating system known as **IOS**.

This section was rather big so we have moved it out into its own post instead, you can view our post documenting this SDK here:

  </div>
</section>  
{% include link-to-other-post.html post="/ati-low-level-wii-sdk" description="For more information about the ATI Low level SDK for Wii check out this post." %}
