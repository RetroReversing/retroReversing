---
layout: post
tags: 
- psp
- sdk
- snsystems
title: SN Systems ProDG PSP SDK
thumbnail: /public/consoles/Sony PSP.png
image: /public/images/psp/SN Systems ProDG PSP.jpg
twitterimage: https://www.retroreversing.com/public/images/psp/SN Systems ProDG PSP.jpg
permalink: /sn-systems-pro-dg-psp-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PSP
    url: /psp
  - name: SN Systems ProDG PSP SDK
    url: #
recommend: 
- sdk
- psp
editlink: /consoles/psp/SnSystemsProDGforPSP.md
updatedAt: '2021-03-26'
---

# Introduction 

## What is the SN Systems ProDG PSP SDK?
SN Systems were in the business of creating excellent 3rd party development tools and many game development studios relied on them to provide first class tools for console development. The PSP was no different and SN Systems started developing its PSP version of its popular ProDG SDK sometime in 2003 (as far as we know).

{% include link-to-other-post.html post="/companies/snsystems/" description="For more information about SN Systems check out this post." %}

Although SN Systems were later bought by Sony in 2005, the 2004 version of the SDKs are a true third party SDk competing with the official Sony software development kit [^4].

The SN Systems ProDG tools were later incorporated into the official Sony PSP SDK, the first version that did this is unknown but it was present in the 6.6.0 release from 2011.

## What was contained in the SDK?
The SDK contained the SN Systems Compilers (SNC C/C++), which unlike their previous SDKs, was a new compiler toolchain not based on GCC. It was optimized specifically for the handheld’s CPU architecture, allowing it to generate faster assembly code compared to Sony’s standard SDK.

The SDK contained a few main parts:
* **ProDG Tuner** (TunerforPSPv1.6.0.exe) - Game optimization
* **Target Manager** (ProDGforPSPv1.4.1.exe) - Development Kit managment interface
* **Proview** (ProViewforPSPv1.2.1.exe) - Artist preview tool

### ProDG Tuner
The SDK also contained the ProDG Tuner (Tuner-LE) which was used to for game optimization by visualising code and providing information about where the main bottlenecks are [^2].

### Target Manager
Similar to the ProDG SDKs for other consoles this SDK included the **Target Manager** which allowed shared usage of multiple PSP development Kits via the internal network.

### Proview (Proview-LE)
Proview is an optional part of the SDK tailored to artists, this allows them to test how their assets look and run on the PSP hardware without having to create a new build of the game. This can be run through the previously discussed Target Manager meaning any artist PC could connect to it similar to a shared network printer.

## What are the known versions of the SDK?
The first version of the Client License Manager was from **October 2004** (according to the CLM pdf documentation.)

So far we only know of one version number to exist:
* 2.7.1 - used in Need for Speed

But we are not sure if the 2.7.1 is the version number for the whole ProDG SDK or something else, each part e.g ProView, ProDG etc has their own version number with max being 1.6.0 for the Tuner so it is possible that the 2.7.1 is unrelated to ProDG completely.

## Have any versions of the SDK been leaked?
No versions of the original third party 2004 ProDG SDK for the PSP have currently been leaked to the internet, although a photo of it had been shared to Andrew Borman's Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When you know, you know <a href="https://t.co/23r0yLiAd1">pic.twitter.com/23r0yLiAd1</a></p>&mdash; Andrew Borman (@Borman18) <a href="https://twitter.com/Borman18/status/1375240658533900289?ref_src=twsrc%5Etfw">March 26, 2021</a></blockquote> 

![SN Systems C/C++ Compiler](https://github.com/user-attachments/assets/36139fbc-280d-4e8d-9ab3-3e9e22ebe6b9)

However version 6.6.0 of the official SDK does contains the ProDG installers from 2011:
* **ProDGforPSPv1.4.1.exe** - The main SDK including the Target Manager
* **ProViewforPSPv1.2.1.exe** - The Artist development tool
* **TunerforPSPv1.6.0.exe** - The Performance optimizer

---
# Pro DG for PSP 1.4.1 (ProDGforPSPv1.4.1.exe)

The **ProDGforPSPv1.4.1.exe** installer is the last version we are aware of for the PRODG SDK and was released in the official Sony SDK version 6.6.0 in 2011. 

It is a windows setup executable thats installs the main SDK to **C:\Program Files\SN Systems\PSP\** but not the Artist tools (ProView) or the performance optimizer (Tuner).

The 1.4.1 release contained the following development tools:
* Assembler v1.1.1737.0
* SNC PSP C/C++ Compiler v1.2.7503.0
* Linker v2.7.63.0
* PRX tool v1.7.174.0
* Debugger v2.9.9
* Target Manager v1.8.5
* Target Manager SDK
* Libraries
* Utilities
* Visual Studio Integration v1.8.7

## Installation process
checks for any versions of Visual Studio:
![Installer](https://github.com/user-attachments/assets/e31b8473-e087-4f61-87a4-b40afcf38a0d)

It installs into **C:\Program Files\SN Systems\PSP\** :
![Installer](https://github.com/user-attachments/assets/24fb4a4a-f79e-4d72-a346-dc794e875f85)

It requires the PSP Hardware SDK (SCE_PSP_HW_ROOT) to be chosen e.g **C:\usr\local\PSP\devkit** this should have alreadsy been installed:
![SCE_PSP_HW_ROOT](https://github.com/user-attachments/assets/17cfbb2c-5e77-4912-aab8-e95b70fe0392)

## Installed Files
After the ProDG installer has run it will have created two new folders in **C:\Program Files\SN Systems\PSP\** :
* Common - Client License Manager
* PSP

### Common Folder
The Common Folder contains two sub folders;
* bin - Contains the two executables **SNLauncher.exe** and **snclm.exe**
* help - Documentation about the Client License Manager in both English and Japanese in PDF and CHM formats

The Client license manager needs to be run as Administrator **SNLauncher.exe** giving the following screen: 
![Error with SNLauncher](https://github.com/user-attachments/assets/db9e3126-9e4f-4fdc-b6f1-c5d0da11ba6e)

When run it gives the following screen:
![SNLauncher.exe](https://github.com/user-attachments/assets/ad3d9bde-62ce-4b66-a6ce-bef03cf4ab22)

The **snclm.exe** executable opens the following window:
![snclm](https://github.com/user-attachments/assets/f7c2957f-48f4-4bc3-b2ef-24d42c681cf2)

Its not particularly interesting, but I was surprised that it was still bundled with the latest version of the Official SDK as the license registeration is very SN Systems specific.

---
## PSP Folder
The PSP Folder contains the main ProDG SDK files, with the compilers in the ./bin folder and the include files in the ./include folder.

This SDK also includes version 4.6.2 of **STL Port**, which is a multiplatform ANSI C++ Standard Library implementation.

### /PSP/lib Folder
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the static libraries that make up the ProDG SDK pre-compiled for PSP. You will need to include these in your build if you use the SN Systems C/C++ compiler.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
COPYING | , .NEWLIB | 
libc | .a | Static Library archive of the standard C library
libgcs | .a | Static Library archive of Internal compiler functions
libm | .a | Static Library archive of Math functions sin, cos etc
libsn | .a | Static Library archive of SN Systems helper functions such as snNotifyDebugger
libsncpp | .a | Static Library archive of libCPP run time support for C++ code. If you write any C++ code then you must link this library. It provides C++ functionality that is automatically used by the code generated from the compiler.
libsnoverlay | .a | Static Library archive of functions like load_psp_overlay
libstl | .a | Static Library archive of STL (STLPort presumably?)
psp | .ld | Linker script

---
### /PSP/bin Folder

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the compiled executables for compiling with the Sn Systems Pro DG SDK.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BlankElf | .exe | BlankElf version 1.2 used for submitting bug reports to SN Systems without leaking code
PSPDebugger | .exe | Connects to the PSP development hardware and allows breakpoints and memory editing
demangle | .dll | SN style symbol demangling library, used in snbin's --dem option
make | .exe | GNU Make 3.80 SN Build 1.17
pspas | .exe | PSP Assembler (pspas 1.1.1737.0 (dev,main @52548 #265261 ))
pspcfe | .exe | C/C++ Compiler Front End (CFE) parses C/C++ code and emits Intermediate Representation (IR) files for the COR and IPA engines to consume
pspcor | .exe | Compiler Optimization Runtime? (COR), this is the compiler's backend it consumes pspcfe's generated files, performs the requested optimizations and produces an assembly file for the assembler
pspcq | .exe | C/C++ Compiler, it runs instead of pspcfe at -O0 and -O1, directly producing assembly files from C/C++ sources
pspdemangle | .dll | GNUv3 style symbol demangling library, used in pspname.exe
pspipa | .exe | Compiler IPA (Interprocedural Analysis) backend, used at optimization levels -O4 and -O5
pspld | .exe | Linker (pspld version 2.7.63.0)
pspname | .exe | Takes a mangled (compiled) name in GNUv3 format and demangles it (pspname 1.0.37.0 (dev,main @17121 #37834 ))
pspprxgen | .exe | PSP PRX utility - pspprxgen v1.7.174.0
psprun | .exe | PSP Target Manager Command Line Tool - PSPRUN v1.8.5.0 (Apr 15 2010)
pspsnc | .exe | SN Systems' PSP compiler driver (pspsnc 1.2.7503.0 (dev,main @83716 #346325 ))
psptm | .exe | The PSP Target Manager GUI
psptmapi | .dll | PSP Target Manager API DLL
psptmapix64 | .dll | 64bit version of psptmapi.dll
sn_autoexp | .dat | 
snarl | .exe | The SN ARchive Librarian (snarl) follows the same usage as GNU ar (archive for static libraries).
snbin | .exe | The SN binary utilities program snbin.exe is a tool for manipulating ELF/PRX files and library/archive files.

### BlankElf - Used to submitting bug reports to SN System
The purpose of blankelf is to fill the code sections with zero within an ELF file. 
The ELF file will then have only debug and symbol information. It is used when customers want to send SN Systems an ELF file that has something wrong with its debug or symbol data, but they don't want to let a fully working ELF out of the office. 

You can use blankelf to zero all the code, which renders the ELF useless. However, even with no runnable code, the SN Systems support team can load the ELF and see what is wrong with its debug or symbol data.

### Snbin - Binary utilities
The SN binary utilities program **snbin.exe** is a tool for manipulating ELF/PRX files and library/archive files.
Features include: 
* Stripping of sections, symbols and debug data
* Dumping of section headers, symbol tables and program headers
* Dopying sections to a binary file
* Renaming sections
* Demangling SN-styled mangled symbols

---
### PSP Target Manager (psptm.exe)
<img width="783" alt="image" src="https://github.com/user-attachments/assets/a0a1f329-adb8-4a90-bdaa-6e42e16d2287">

The ProDG Target Manager (**psptm.exe**) is used to control access to any development hardware (targets) connected to your host PC, or remotely on your LAN. 

Target Manager must be installed and running in order that other SN Systems applications can communicate with the development hardware.

Target Manager allows you to connect to the target, load and run executable files, send TTY input to the target, and view TTY output from the target.

Target Manager can be used with a range of SCE development hardware.

Target Manager is provided with the following SN Systems products:
* ProDG
* ProView/ProView-LE
* Tuner

---
### PSP Debugger
The PSP Debugger:
<img width="1324" alt="image" src="https://github.com/user-attachments/assets/af2b8201-109d-4856-a1c7-ec9a5fae13e0">

### /PSP/sdk Folder - Example of Target Manager SDK

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/sdk</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code for the **psprun.exe** command line program to gives developers an example of how to use the ProDG Target manager SDK.

It contains a few headers and Visual Studio project files but the main code is in a 1.5K source file called **psprun.cpp**.

  </div>
</section>  

---
# ProDG Examples (/PSP/examples)

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **SN Build Samples** - 
* **Debuggerv2.Xscripting** - Examples of PSP Debugger Scripts
* **SNC VSI Projects for SCE PSP Hardware Examples** - 
* **TTY Echo** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
VSI_OverlaySamples | .zip | 


---
## Debuggerv2.xscripting (/Debuggerv2.Xscripting)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Debuggerv2.Xscripting</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains examples for scripting with the PSP Debugger. 
    
The script view allows you to execute your own ANSI-C programs to perform complex debugger operations including send/receive data to/from memory. Start or stop execution, set breakpoints, load executable files, customize debugger shortcut menus, draw text and graphics, manipulate files, change the way watches are displayed, execute other programs, etc. 

Scripts are plain text files but are compiled at run-time for very fast execution. Scripts can also be auto-loaded at debugger startup and custom script views can be saved and reloaded when you exit and restart the debugger.

This folder also contains the following sub-directories:
* **balloon** - The Standard Sony Balloon demo from the official PSP SDK
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BinFiles | .c | BinFiles.c shows how to save and load .bin files.  To ensure there is always a .bin file to load, the save .bin file runs first.
BrokenMenu | .c | BrokenMenu.c is the example used in the documentation to show that it is important to break associations between menu item IDs and the code when adding and removing them. 
IsRunning | .c | IsRunning.c is a short script demonstrating the use of the UnitIsRunning command.
Menu | .c | Menu.c demonstrates a simple menu example.
Menu2 | .c | Menu2.c is an example of using menus without interfering with the main program flow (in this case, repeatedly printing a number to the screen).
Menu3 | .c | Menu3.c is a larger example of menus and notifications.
RunToAddr | .c | RunToAddr.c shows how the UnitRunToAddress function should best be run in order to ensure that it has completed successfully.
SetMem | .c |  SetMem.c shows how to set a block of memory directly from the debugger on to the target device.
StartStop | .c | StartStop.c demonstrates the safe use of the UnitStop function.
StartStopBroken | .c |  StartStopBroken.c demonstrates the incorrect use of the UnitStop function.
addrlookup | .c | AddrLookup.c demonstrates the use of the UnitAddressToLabel and UnitAddressToLine functions and the NT_UNITSTOP notification event.
autoexec | .eic | autoexec.eic is an example of a startup script.  This script loads into the Immediate Mode Script Engine and remains resident.
balloonProfile | .c | BalloonProfile.c is an example of a simple method of profiling a program.  This example has been written to work with the PSP Graphic Library sample "balloon" and measures the amount of time between frames.
balloonTool | .c | This demonstrates how information about a program can be extracted using the UnitEvaluateExpression in conjunction with the UnitGetMemory command
balloonTool2 | .c | BalloonTool2.c is an extension of balloonTool.c script that  displays graphical output when run in conjunction with the PSP Graphics Sample "balloon".
breakpoints | .c | Breakpoints.c demonstrates the ability to add and remove breakpoints.
drawModes | .c |  DrawModes.c is used to demonstrate all of the possible draw modes available for combining graphical and text output to the screen.
dumpmem | .c | DumpMem.c shows how to use scripts to fetch memory from the target.
endianSwap | .c | EndianSwap.c demonstrates the endianSwap functions available in the scripting language.
eval | .c |  Eval.c shows an example of the use of the builtin function UnitEvaluateExpression() to evaluate expressions in the context of the target CPU.
font | .c |  Font.c shows how to retrieve and parse a font list from your system.
notifications | .c | Notifications.c demonstrates how to use notifications by using RequestNotification, GetNotification, CheckNotification and CancelNotification.
step | .c | Step.c gives an example of the stepping functionality available in the scripting language.  This version is a trivial example as the same result could be achieved using the debugger's built-in functionality.
test | .bin | written by the BinFiles.c example
timer | .c | imer.c shows how to use the Notify system to handle custom timer events.


---
### Balloon (/Debuggerv2.Xscripting/balloon)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/balloon</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the original baloon demo that is available in the Official PSP SDK from Sony, modified for the SN Systems Pro DG development kit.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
balloon | .c, .h, .sln, .vcproj | 
cloud | .c | 
fast_pf4444 | .h | Include file for declaring 
fast_pf5551 | .h | Include file for declaring 
fast_pf5650 | .h | Include file for declaring 
fast_pf8888 | .h | Include file for declaring 
main | .c | 
mssccprj | .scc | 
pole | .c | 
readme_e | .txt | 
readme_j | .txt | Japanese version of the readme
sphere | .c | 
tex_pf4444 | .h | Include file for declaring 
tex_pf5551 | .h | Include file for declaring 
tex_pf5650 | .h | Include file for declaring 
tex_pf8888 | .h | Include file for declaring 
tex_pfidx4 | .h | Include file for declaring 
tex_pfidx8 | .h | Include file for declaring 


---
## SN Build Samples
The **SN Build Samples** folder just contains some really bare bones examples of projects that can be built, it is mainly used for the Visial Studio project files.

### Helloworld (hw) (/SN Build Samples/HelloWorld (hw))
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/HelloWorld (hw)</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
PrxPreloads | .txt | Blank file
ReadMe_GP | .txt | Information about how to enable GP optimizations
hello_world | .c, .sln, .vcproj |  Visual Studio project files and a really basic Hello World example

The **ReadMeGP.exe file suggests enabling GP optimizations in the PRX project, then you need to use the following declaration on your entry point:
```c
int main() __attribute__((gp_safe));
```

---
### Resident library example (/SN Build Samples/Resident Library Example)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Resident Library Example</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains and example of a resident library  which refers to a system library that is preloaded into the PSP's memory and remains resident during runtime.

This folder also contains the following sub-directories:
* **ResidentLibExample** - Just contains the Visual Studio config needed to build both cllaer and calee
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
callee | .c | This file compiles to the resident library. It contains exported functions and variables.
caller | .c | This file compiles to a caller module and relies on exported variables and functions in the callee module.


---
### SN Math library (/SN Build Samples/VFPU examples/SnMathLib)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SnMathLib</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains example code for using the SN Systems Math library, the header files are menat to be copied and pasted and modified into the intended purpose.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
SnMathLibDef | .h | Include file for declaring VFPU vector math class sample class definition
SnMathLibGeneric | .h | VFPU vector math class sample class definition, generic implementation. Intended as a reference and for use in tools.
SnMathLibVFPU | .h | Include file for declaring VFPU vector math class sample class definition vfpu implementation


---
## SNC VSI projects for sce psp hardware examples (/SNC VSI Projects for SCE PSP Hardware Examples)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/SNC VSI Projects</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains zip files that contain a Visual Studio .NET solution, and project configurations for six of the SCE PSP samples:

* graphics\balloon
* graphics\cube
* kernelutils\exitgame
* mpeg\mpegstr
* net\adhoc\pdp_echo
* sound\at3doubleplay

These are intended to be unzipped over the top of the SCE PSP hardware sample directory.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PSP_hw_1.0.3_VSI_samples | .txt, .zip | VS Project files for Kernel version 1.0.3
PSP_hw_1.5.0_VSI_samples | .txt, .zip | The VSI projects have been tested with version 1.5.0 of the SCE PSP hardware runtime libraries and VSI .NET v 1.3.0.
PSP_hw_2.5.0_VSI_samples | .txt, .zip | VSI projects for samples from v2.5.0 of the SCE runtime libraries for PSP hardware. 
PSP_hw_3.9.5_VSI_samples | .txt, .zip | VSI projects for samples from v3.8.0 of the SCE runtime libraries for PSP hardware. 
PSP_hw_5.0.0_VSI_samples | .txt, .zip | VSI projects for samples from v3.8.0 to v5.0.0 of the SCE runtime libraries for PSP hardware


---
## TTY echo (/TTY Echo)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/TTY Echo</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a program that opens a number of TTY devices and waits for data to appear and then writes it back to the same TTY device to demonstrate the new console input function of Target Manager for PSP (V1.3.1 or above).

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
TTY Echo | .vcproj | Visual Studio project file
main | .c | Example calling sceIoOpen, sceIoWrite etc

---
# ProView for PSP 1.2.1 (ProViewforPSPv1.2.1.exe)

The installer executable contains the following files:
* Target Manager v1.8.4
* Target Manager SDK
* Files to create a bootable ProView disc image
* Command-line utility: psprun.exe
* Documentation in CHM and PDF format

## Install Process

It installs into **C:\Program Files\SN Systems\PSP\**:
<img width="495" alt="image" src="https://github.com/user-attachments/assets/9bd979bd-9542-4afa-833e-38cc756128b9">

## Installed Files
After the ProView installer has run it will have created two new folders in **C:\Program Files\SN Systems\PSP\** :
* drivers - folder with Driver Package Install (dpinst.exe)
* target - folder with different Kernel DiscImages, 1.5.2->6.0.0
* examples/proview - folder with proview example projects
* help/ProViewRelease Notes
* include/sn_proview.h
* lib/snproview.a
* legal/ProView_PSP_SUL.txt

When running dpinst.exe you get:
<img width="498" alt="image" src="https://github.com/user-attachments/assets/7154c8de-d5bb-48c3-bf6a-bb405673b954">

---
# Tuner for PSP 1.6.0 (TunerforPSPv1.6.0.exe)
Tuner is designed to work with **SCE PSP development hardware DTP-T1000A**. It does not work with the SCE PSP Testing Tool or the PSP emulator. 

Tuner for PSP version 1.6.0 contains:
* Tuner (psptuner.exe)
* Target Manager (psptm.exe)
* Demangler (pspdemangle.dll) 

<img width="491" alt="image" src="https://github.com/user-attachments/assets/926c1281-79f6-44e5-b217-a8b32783ed3f">

## Installed Files
After the Tuner installer has run it will have created two new folders in **C:\Program Files\SN Systems\PSP\** :
* /bin/PSPTuner.exe
* /help/Tuner-PSP-E (pdf and chm) Also contains a Japanese version (-J)
* /help/Tuner_Release Notes-E.htm Also contains a Japanese version (-J)
* /include/SNTuner.h
* /legal/Tuner-PSP_SUL.txt
* lib/SNTuner.a

The **PSPTuner.exe** opens the following window:
<img width="1004" alt="image" src="https://github.com/user-attachments/assets/a6f37546-643f-4b94-97c7-66e690000e0a">

It can open **.SNT** Sn Systems Tuner files.

---
# Usage in Games
Although the SDK was (initially) third party it was extremely popular among PSP development studios and many games used the SDK's excellent compilers and debug functionality.

## What games used the ProDg PSP SDK?
As this is a third party optional SDK not all PSP games would have used it as it is not a requirement and some just used the standard official Sony SDK.

However the SDK was still very popular and according to TotalVideoGames.com 20 out of the 24 launch titles for the PSP were created using the ProDG SDK! [^1].

Known games include:
* Need for Speed games
* Tales of Phantasia: Narikiri Dungeon X (just the Narikiri Dungeon X game, Phantasia X uses CodeWarrior)
* Queen's Gate: Spiral Chaos
* Weiss Schwarz Portable: Boost Weiss
* Weiss Schwarz Portable: Boost Schwarz
* Fate/Extra
* Kamigami no Asobi
* Baka to Test to Shoukanjuu Portable

## How do I find out if a game uses the PRODG SDK?
The SN compiler toolchain has its own way of calling C++ global constructors, while the GCC based official toolchain makes use of the standard **ctor** section for this purpose, pspsnc uses a custom section called **cplinit** (short for C Plus Init) alongside this a function (called **__snmain**) will be injected into the game's regular **main** function in order to call the constructors inside the section, which makes for an easy way to tell pspsnc was used for a game.

Another way would be to run the **strings** command on the main game executable.

Below is an example of strings that hint at the use of the SN Systems SDK:
```
"C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1/sdk/PSP/bin/pspsnc.exe -o ",
            "..\\nfs\\nfsa.elf",
            "..\\nfs\\nfsa.map",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\PSP\\lib\\psp.ld",
            "-strip-unused -Wl",
            "-strip-unused-data -Wl",
            " -lvfpu -G0 -u rm_CompressLitTexture -u rm_Gouraud -u rm_GouraudApt -u rm_TextureApt -u rm_NFSCar_Window -u rm_CompressGouraud -u rm_NFSCar_TextureShiny -u rm_NFSCar_Texture -u rm_NFSCar_Gouraud -u rm_CompressGouraud_minimap  ",
            "indep\\misc\\main.cpp.obj",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\PSP\\lib",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib",
            "  --start-group ctrl_stub.a display_stub.a ge_user_stub.a crt0_prx.o kernel_bridge.o ",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\ctrl_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\display_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\ge_user_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libatrac3plus_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libwave.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libsas_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\wlan_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\mediaman_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\mpeg_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\power_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_adhoc_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_adhocctl_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_apctl_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_inet_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_resolver_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_ap_dialog_dummy_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\rtc_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\utility_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libkernel.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libdeflt.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\impose_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\audio_stub_02.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\Apt\\5.03.05\\lib\\psp-sn\\libaptz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\Apt\\5.03.05\\lib\\psp-sn\\libaptauxeaglrealz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\csis\\2.07.02-psp2.7.1sdk\\lib\\psp-sn\\libcsiszd.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\snd\\9.09.07-psp2.7.1sdk\\lib\\psp-sn\\libsndzd.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\TRC\\7.01.14\\lib\\psp-sn\\libTRCa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realmemcard\\1.01.10\\lib\\psp-sn\\librealmemcardz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\EaVis\\2.01.09\\lib\\psp-sn\\libeavisa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtysock.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtygraph.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtystrings.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\netcore\\releases\\2.04.32\\lib\\psp\\libnetcorea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\videocapture\\1.00.01\\lib\\psp\\libvideocapturea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libbwaregamea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libcagea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libcorea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libnfsrmsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglanimsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglutilsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpava.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpdecodera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpvda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealdebuga.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealinputa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealmatha.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealmema.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealsystema.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealcodeca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealfilea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealstda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealfonta.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealgrapha.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealshapea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realmath\\1.00.10\\lib\\psp-sn\\librealmathz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\proview\\0.00.01\\lib\\snproview.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\AIP\\5.03.09\\lib\\psp\\libaipa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\MediaCenter\\1.00.11\\lib\\psp\\libmediacentera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\AIPFrontend\\libAIPFrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ai\\libaia.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\animation\\libanimationa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\camera\\libcameraa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\eaxsound\\libeaxsounda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\frontend\\libfrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\hud\\libhuda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\misc\\libmisca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\physics\\libphysicsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\render\\librendera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\world\\libworlda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generated\\libgenerateda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubitypes\\libubitypesa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubiengine\\libubienginea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubistd\\libubistda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\Tools\\libToolsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generatedpsp\\libgeneratedpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\psp\\libpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\online\\libonlinea.a",
            "  --end-group -nostdlib -lgu -lgum -lkernel -lm -lc -lsn -lsncpp -lgcs ",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\nfs\\indep\\misc\\main.cpp.obj",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\AIPFrontend\\libAIPFrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ai\\libaia.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\animation\\libanimationa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\camera\\libcameraa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\eaxsound\\libeaxsounda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\frontend\\libfrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\hud\\libhuda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\misc\\libmisca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\physics\\libphysicsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\render\\librendera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\world\\libworlda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generated\\libgenerateda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubitypes\\libubitypesa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubiengine\\libubienginea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubistd\\libubistda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\Tools\\libToolsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generatedpsp\\libgeneratedpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\psp\\libpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\online\\libonlinea.a"

```

This is all we currently know about this SDK, if you have any more information to share please get in touch!

# References
[^1]: [PSP Dev Tool Success For UK Firm News](https://archive.ph/20130630110629/http://www.totalvideogames.com/PSP/news/PSP-Dev-Tool-Success-For-UK-Firm-6919.html)
[^2]: [SN Systems new product – Tuner-LE for PSP™ - GamesIndustry.biz](https://www.gamesindustry.biz/articles/sn-systems-new-product-tuner-le-for-psp)
[^3]: [SN Products Home Page](http://web.archive.org/web/20050908160005/http://www.snsystems.com/Products/)
[^4]: [ProDG for PSP™](https://web.archive.org/web/20040411183416/http://www.snsys.com/PSP/ProDG.htm)
