---
layout: post
tags: 
- psp
- sdk
title: Official Sony PSP SDK
thumbnail: /public/consoles/Sony PSP.png
_image: /public/images/psp/SN Systems ProDG PSP.jpg
_twitterimage: https://www.retroreversing.com/public/images/psp/SN Systems ProDG PSP.jpg
permalink: /pspsdk
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PSP
    url: /psp
  - name: Official Sony PSP SDK
    url: #
recommend: 
- sdk
- psp
editlink: /consoles/psp/PSPSDK.md
_updatedAt: '2024-12-06'
---

# Introduction 

## What versions of the SDK have been leaked?
* **Version 1.5.0** (psp_full_sdk_JSR) from 2005
* **Version 6.6.0** (psp_sdk_660) from 2011

This page will document the latest release version 6.6.0 as it is the most complete. The 1.5.0 JSR version only contains the files that get installed to **C:\usr\local\psp\devkit** on windows. 

Wheras the more complete version also contains the ProDG installers and additional documentation.

## What was included in the SDK?
Later versions of the SDK included the ProDG development kit provided by SN Systems, which provided a way to compile PSP games using Visual Studio 2005/2008/.NET as an alternative to the Cygwin (unix like) development environment provided in the rest of the SDK.

For information on the ProDG SDK we have a separate post:
{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information check out this post." %}

---
# High Level Documentation (/Docs)

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Docs</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation for the Technical Requirementments Checklist and some conference slides, along with the SN Systems ProDG documentation.

This folder also contains the following sub-directories:
* **SNTools** - Documentation on SN Systems ProDG Tools
* **ConferenceContent** - Password protected slides from conferences in 2005 in both English and Japanese
* **TRC** - Technical Requirements Checklist - It contains important rules and restrictions for creating master discs for PSP games

The contents of the **SNTools** folder will not be discussed in this post as we have a sepeate page for all the SN Systems ProDG SDk information:


  </div>
</section>  


{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information check out this post." %}


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PSP_Setup_Guide-English | .pdf | 40 page guide on setting up the SDK on both windows and linux and connecting to the development hardware
PSP_Setup_Guide-Japanese | .pdf | Japanese Version
PSP_Setup_Guide-Korean | .pdf | Korean Version

## Conference Content
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Conference</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Powerpoint files from Sony seminars hosted in both February 2005 and July 2005, with the February content only being in Japanese but the July content being in both English and Japanese. 

 **We can't open these files as they are protected by a password and thus can't describe what is in them.**

One of the files was unencrypted (**Seminar2005-02_VFPU-Japanese**) and it's from the **Sony software development seminar**  that took place on 28th February 2005.

  </div>
</section>  

The VFPU session has this cool screenshot of a dragon example to show that the VFPU is suitable for real-time transformations of 3D models, such as animations:
<img width="317" alt="Dragon PSP example" src="https://github.com/user-attachments/assets/01245a44-ec09-4e55-a22c-6990576a2dcc">


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Seminar2005-02_GRAPHICS-Japanese | .pps | 
Seminar2005-02_KERNEL-Japanese | .pps | 
Seminar2005-02_MASTER-Japanese | .pps | 
Seminar2005-02_MPEG-Japanese | .pps | 
Seminar2005-02_NETWORK-Japanese | .pps | 
Seminar2005-02_SOUND-Japanese | .pps | 
Seminar2005-02_Utility-Japanese | .pps | 
Seminar2005-02_VFPU-Japanese | .pps | 19 slides that talks about how to Utilize the VFPU Effectively (libvfpu) and Key Considerations.
Seminar2005-07_browser-English | .pps | 
Seminar2005-07_graphics-English | .pps | 
Seminar2005-07_network-English | .pps | 
Seminar2005-07_savedata-English | .pps | 
Seminar2005-07_sound-English | .pps | 
Seminar2005-07_umd-English | .pps | 
Seminar2005-07_update-English | .pps | 
Seminar2005-07_browser-Japanese | .pps | 
Seminar2005-07_graphics-Japanese | .pps | 
Seminar2005-07_network-Japanese | .pps | 
Seminar2005-07_savedata-Japanese | .pps | 
Seminar2005-07_sound-Japanese | .pps | 
Seminar2005-07_umd-Japanese | .pps | 
Seminar2005-07_update-Japanese | .pps | 

---
# Technical Requirements Checklist (/TRC)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/TRC</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the Technical Requirements Checklist that need to be followed in order to get Sony to green light a PSP game. It has strict brand guidelines on how to use the Sony and Playstation branding along with all the naming conventions in all the different langauges and PSP versions.

 It also has a document of all the test cases that each game goes through before mastering.

This folder also contains the following sub-directories:
* **Logo** - Adobe Illustrator (.ai) vector images of the allowed Sony logos


One of the test cases makes sure that all games that get published do not contain debug symbols unfortunetly:
  </div>
</section>  


> It is forbidden to include the following types of files in the master in any form, even in archive format.
> - Data and files used only for development and debugging purposes such as program source files, executable files with symbols, map files, and driver modules used in title development
> - Data and files designed only for use on other platforms such as Windows wallpaper and screensavers

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BrandGuideline_E_100729L | .pdf | 
BrandGuideline_J_101112L | .pdf | Japanese version of the Brand Guidelines
Frequency_Specification-Guideline-English | .pdf | 138 page brand guidlines on how to use the Playstation brands (including PsOne, Ps3 etc)
Frequency_Specification-Guideline-Japanease | .pdf | Japanese version of the brand guidelines
Frequency_Specification-Guideline-Korean | .pdf | Korean version f the brand guidelines
PSP_NC_E1000_WW_temp_20111005 | .pdf | PSP Naming Convensions for PSP-E1000 series - Temporary release from October 5, 2011
PSP_NC_N1000_WW_temp_1.01 | .pdf | PSP Naming Convensions for PSP-N1000 series - Temporary release 1.01 August 2009
PSP_NC_v200_WW_temp | .pdf | PSP Naming Convensions for PSP-2000
PSP_NC_v3.00_WW_temp_1.01 | .pdf | PSP Naming Convensions for PSP-3000 series - Temporary release 1.01 January 2009
psp_nc_de_3_10 | .pdf | PSP Naming Convensions for German
psp_nc_en_3_10 | .pdf | PSP Naming Convensions for English
psp_nc_es_3_10 | .pdf | PSP Naming Convensions for Spanish
psp_nc_fr_3_10 | .pdf | PSP Naming Convensions for French
psp_nc_it_3_10 | .pdf | PSP Naming Convensions for Italian
psp_nc_ja_3_10 | .pdf | PSP Naming Convensions for Japanese
psp_nc_ko_3_10 | .pdf | PSP Naming Convensions for Korean
psp_nc_nl_3_10 | .pdf | PSP Naming Convensions for Dutch
psp_nc_pt-PT_3_10 | .pdf | PSP Naming Convensions for Portugese
psp_nc_ru_3_10 | .pdf | PSP Naming Convensions for Russian
psp_nc_zh-Hans_3_10 | .pdf | PSP Naming Convensions for Chinese Simplified
psp_nc_zh-Hant_3_10 | .pdf | PSP Naming Convensions for Chinese Traditional
psptestcases_forTRC50-English | .pdf | 94 page document on all the tests that are done on every game when the master copy is recieved by Sony
psptestcases_forTRC50-Japanese | .pdf | Japanese version of all the test cases
ptrc52-English | .doc, .pdf | TRC for PSPTM Software, Version 5.2, including information on how to submit the TRC form
ptrc52-Japanese | .doc, .pdf | Japanese version of the TRC


---
# PSP PGF Fonts  (pgf_archives_1.0.0)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains infromation on the officially supported fonts for PSP.

The PGF font format is a proprietary font format developed by Sony specifically for the PlayStation Portable (PSP). It is used to render text in PSP applications and games efficiently, taking into account the constraints of the PSP hardware. PGF stands for PlayStation Game Font, and it is part of the PSP's system libraries.

 They are mainly:
 * FTT-Matisse Pro Latin - serif font
 * FTT-NewRodin Pro Latin - san serif font
 * AsiaKNHH-SONY-uni - Korean font

In various different combinations such as bold italic etc

This folder also contains the following sub-directories for each size of the font, containing all the .pgf files for each variant (korean, japanese etc):
* **org** - the original version of the font
* **6pt** -  6 point version of the font
* **8pt** -  8 point version of the font
* **10pt** - 10 point version of the font
* **14pt** - 14 point version of the font
* **18pt** - 18 point version of the font
* **22pt** - 22 point version of the font


Developers were free to use all the PGF files that are contained in this archive file via "libfont," which is included in PSP Runtime Library 2.0.0 or later.
  </div>
</section>  


The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PgfContentsTable-English | .pdf | A single page table of the details of fonts for distribution (1.0.0), NewRodin Pro Latin and Matisse Pro Latin
Readme_PgfArchives-English | .txt | Brief details on the files located in this folder

---
# Cygwin Software Development Kit (/devkit)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/devkit</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the main software development kit for both Window and Linux.

This folder also contains the following sub-directories:
* **1st_read** - The initial documentation to be read first
* **bin** - Binary Executables for compiling/building in both cygwin and linux (also known as psp-utils)
* **bin.windows** - Windows version of the build tools such as compilers
* **bin.linux** - Linux version of the build tools such as compilers
* **document** - Main Documentation
* **include** - SDK header files
* **lib** - SDK Static Library files
* **module** - Compiled PRX modules
* **src** - Source code to the libraries
* **sample** - Examples for using the PSP SDK, e.g for playing sound or displaying graphics on the PSP
* **data** - Data used in the sample applications
* **contrib** - A Photoshop plugin for the GIM texture format
* **htool_updater** - Update for the PSP Tool hardware
* **flash** - 
* **tips** - 
* **tool_flash** - 
* **tool** - 
* **setup** - Hardware Tool instruction manual

The files in this folder are described in the table below, I have removed the japanese and korean versions to avoid duplication:
  </div>
</section>  


File Name | Extension | Description
---|---|---
Install_e | .bat | Windows Batch file for moving the bin.windows exe files into the bin directory 
Readme-English | .txt | Brief description of the Contents of the devkit directory
Readme-Hardware_tool_Kernel_Update_Binary-English | .txt | Changelog for htool_updater folder
Readme-PSP_Supplement_Font-English | .txt | Limited explanations of some font related files
Readme-PSP_Utils_Windows-English | .txt | Lists all the files in bin.windows (psp-utils) and a changelog
Readme-Testing_tool_Kernel_Update_Binary-English | .txt | List of files in the flash folder and a changelog

## Install instructions
When first recieving the devkit the developers had to run a few commands to install the SDK.

```
    Cygwin > cd /usr/local/psp
    Cygwin > unzip psp-utils-x.x.x-windows.zip
    Cygwin > cd ./devkit
    Cygwin > ./Install_e.bat
```

This will move the Linux commands in **/usr/local/psp/devkit/bin** to **/usr/local/psp/devkit/bin.linux** and will install commands for Windows XP.
After installation, /usr/local/psp/devkit/bin.linux and /usr/local/psp/devkit/bin.windows may be deleted.

---
## Initial documentation (/1st_read)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1st_read</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the bare bones documentation that should be read as soon as recieveing the development kit, such as setting up the system.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Changes-English | .txt | History of changes to the whole devkit going all the way back to 0.5.0
Flash_Update_Instruction_H1500-English | .txt | A note on updating the DTP-H2500/DTP-H1500 (A) firmware
Flash_Update_Instruction_T1000-English | .txt | A note on updating the DTP-T2000/DTP-T1000 (A) firmware
Hardware-Restriction-English | .pdf | 16 page PDF on low level restrictions on assembly instructions on both the CPU and VFPU
Important_notice-English | .txt |  A note on providing a system update with your game due to operation of titles created with the new version of Runtime Library will not be guaranteed on the old PSP system software.
PSP_Setup_Guide-English | .pdf | 40 page PDF on setting everything up
Sample_List-English | .txt | Description of all the samples included in the sample folder


---
# PSP Utils Binary Toolchain (/bin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin</div>
  <div markdown="1" class="rr-post-markdown">
 The /bin folder is the result of running the **Install_e.bat** install script, and copies the windows version of psp-utils into the /bin folder, where the linux versions are their by default. As such the contents of this folder will not be documented as they are the same as the contents in **bin.linux** and **bin.windows** folders.

  </div>
</section>  

---
### Linux psp-utils (/bin.linux)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin.linux</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the command line programs to build and debug PSP games in a Linux environment.

 The executables that start with "ds" are part of "dsnet for PSP" which is a debugging environment that uses the **DECI2P** protocol. It enables the host and the PSP tool to work together so that applications that will run on the target can be developed more efficiently.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
binary2elf | N/A | pspbin2elf creates an elf file for PSP when no specification is made on the command line
dsdcons | N/A | dsdcons is a console program that is the companion to dstdb's remote console input/output function. dstdb opens a DTTYP protocol server on the specified port number so that it can be used by the remote console
dspcons | N/A | dspcons is a console program that is the destination of TTYP input/output of the target program
dspkill | N/A | dspkill is a program for forcibly disconnecting a client that is connected to a specific protocol from the client programs that are connected to the entire target
dspmcons | N/A | dspmcons is a dedicated console program for running the dsnetm_psp debug console, which runs as CP on the PSP TOOL
dspreset | N/A | dspreset is a client program for resetting the entire target.
dspstat | N/A | dspstat is a client program for displaying a list of client programs that are connected to the entire target. It is used to identify people who are currently using the target.
dsptun | N/A | dsptun is a program that relays packets wrapped in the ETHERP protocol from the target to a linux tun device, when the Ether over DECI2p feature is enabled by setting bit 15 of the boot parameter.
dstdb | N/A | dstdb is a source-level/instruction-level debugger.
dsxfilesv | N/A | dsxfilesv is a file server program for processing Remote File Access requests that are sent from the target program.
dsxlist | N/A | dsxlist is a client program for displaying a list of modules that are loaded on the target.
dsxping | N/A | dsxping is a client program for diagnosing whether or not there is a response from the target program. Normally, this client program need not be used.
dsxstart | N/A | dsxstart is a client program for loading modules on the target. It operates in a similar manner as dstdb's mstart command.
enlargeprx | N/A | 
prx-version-off | N/A | 
prxinfo | N/A | Displays information about PSP relocatable execution format (.prx) objects.
psp-addr2line | N/A | 
psp-ar | N/A | Archiver
psp-ar-util | N/A | 
psp-as | N/A | Assembler
psp-c++ | N/A | 
psp-c++filt | N/A | 
psp-cpp | N/A | 
psp-g++ | N/A | C++ compiler
psp-gcc | N/A | C compiler
psp-gcov | N/A | Coverage collects the number of times each line of source code is executed in terms of basic blocks.
psp-gnu-strip | N/A | Deletes symbol information from an elf-format relocatable object.
psp-gprof | N/A | Profile calculates the number of times the routines in a module are executed and how long it takes to execute each routine.
psp-ld | N/A | Linker
psp-nm | N/A | Outputs a list of symbols in an object
psp-objcopy | N/A | Converts the format of an object file 
psp-objdump | N/A | Displays information about an object file
psp-path-setup | N/A | PSP compiler path search and setup
psp-prver | N/A | Command for confirming the version of the static library
psp-prx-strip | N/A | Deletes symbol information from a PSP relocatable execution format (.prx) object.
psp-ranlib | N/A | Generates index information for an archive
psp-readelf | N/A | 
psp-selcomment | .rb | Comment language filter, e.g only including english comments
psp-size | N/A | Displays the size of each section in an object
psp-strings | N/A | Gets the ASCII strings from an ELF
psp_boot_packager | N/A | The psp_boot_packager tool is used for packaging.
pspbin2elf | N/A | same as binary2elf
pspexportpickup | N/A | The pspexportpickup command is used to find mangled symbols in an object file that correspond to exported functions and variables previously specified in SCE_LIB_EXPORTPICKUP_*() macros and generates a library definition file in C source code.
pspfixup | N/A | Converts an elf-format relocatable object to the PSP relocatable execution format (.prx).
pspgcsection | N/A | An internal auxiliary tool
psplibgen | N/A | Generates stub information required for linking objects.
pspprofutil | N/A | Same as psp-gprof but for prx files
pspsplitoverlay | N/A | This command separates the overlay file off the PSP ELF that is generated with an overlay segment attached. 
pspuidfnkeygen | N/A | 


---
### Windows psp-utils (/bin.windows)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin.windows</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains thw windows compiled versions of the build utilities.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
binary2elf | .exe | binary2elf creates an elf file for PSP when no specification is made on the command line
dsbloadp | .exe | dsbloadp is a client program for sending the PSP boot code to the target.
dsdcons | .exe | dsdcons is a console program that is the companion to dstdb's remote console input/output function.
dspcons | .exe | dspcons is a console program that is the destination of TTYP input/output of the target program.
dspkill | .exe | dspkill is a program for forcibly disconnecting a client that is connected to a specific protocol from the client programs that are connected to the entire target.
dspmcons | .exe | dspmcons is a dedicated console program for running the dsnetm_psp debug console, which runs as CP on the PSP TOOL.
dspreset | .exe | dsbloadp is a client program for sending the PSP boot code to the target.
dspstat | .exe | dspstat is a client program for displaying a list of client programs that are connected to the entire target.
dstdb | .exe | dstdb is a source-level/instruction-level debugger.
dsxlist | .exe | dsxlist is a client program for displaying a list of modules that are loaded on the target.
dsxping | .exe | dsxping is a client program for diagnosing whether or not there is a response from the target program.
dsxstart | .exe | dsxstart is a client program for loading modules on the target.
enlargeprx | .exe | 
prx-version-off | .exe | 
prxinfo | .exe | Displays information about PSP relocatable execution format (.prx) objects.
psp-ar-util | .exe | 
psp-prver | .exe | Command for confirming the version of the static library
psp-prx-strip | .exe | Deletes symbol information from a PSP relocatable execution format (.prx) object.
psp_boot_packager | .exe | The psp_boot_packager tool is used for packaging.
pspbin2elf | .exe | same as binary2elf
pspexportpickup | .exe | The pspexportpickup command is used to find mangled symbols in an object file that correspond to exported functions and variables previously specified in SCE_LIB_EXPORTPICKUP_*() macros and generates a library definition file in C source code.
pspfixup | .exe | Converts an elf-format relocatable object to the PSP relocatable execution format (.prx).
pspgcsection | .exe | An internal auxiliary tool
psplibgen | .exe | Generates stub information required for linking objects.
pspprofutil | .exe | Same as psp-gprof but for prx files
pspsplitoverlay | .exe | This command separates the overlay file off the PSP ELF that is generated with an overlay segment attached. 
pspuidfnkeygen | .exe | 

---
# GIM Photoshop Plugin (/contrib/tool/gimPhotoshopPlugin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gimPhotoshopPlugin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a photoshop plugin for supporting the PSP texture format .GIM (Similar to the PS1 TIM format).

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GIM_Photoshop_Plugin_Overview-English | .pdf | 6 page PDF explaining how to use the photoshop plugin
readme_e | .txt | Brief explanation and changelog for the photoshop plugin
tgGimFormat | .8bi | The Photoshop 6.0 Plugin for GIM image format

When running the plugin in Photoshop 6.0 you get the following dialog to save to GIM format:
<img width="562" alt="GIM Photoshop Plugin" src="https://github.com/user-attachments/assets/ff3d1a81-e27c-4c2a-927e-dfb78c90e0f2">


---
# Data (/data)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/data</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains data used for the samples to keep them separate from the actual source code.

This folder also contains the following sub-directories:
* **ccc** - libccc Data File
* **dvdumd** - DVD/UMD(TM) Image File for the dvdumd sample (sample/dvdumd)
* **model** - Model Data File for GMO
* **movie** - PSMF Stream File and MP4 Stream File
* **or_dict** - libface data
* **picture** - Image Data File for GIM
* **scene** - A sample scene
* **sound** - Data File for libsndp for the playsmf sample (sample/sound/playsmf)

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
Readme_English | .txt | brief description of all the folders in the data folder an a changelog
Readme_Sample_Code_Data-Graphics-English | .txt | Changelog for the Graphics samples
Readme_Sample_Code_Data-Movie-English | .txt | Changelog for the Movie samples
Readme_Sample_Code_Data-Sound-English | .txt | Changelog for the Sound samples

---

---
# Module (/module)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/module</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

| File Name                 | Extension | Description                                             |
|---------------------------|-----------|---------------------------------------------------------|
| libadler                  | .prx      | Implements Adler-32 checksum computation.              |
| libbase16                 | .prx      | Provides Base16 (hexadecimal) encoding and decoding.    |
| libbase32                 | .prx      | Provides Base32 encoding and decoding functionality.    |
| libbase64                 | .prx      | Implements Base64 encoding and decoding.               |
| libccc                    | .prx      | Character Code Conversion utilities  |
| libdeflt                  | .prx      | libdeflt is a library for expanding data in zlib format, deflate format, gzip format, and PK0304 zip format which are defined in RFC 1950, RFC 1951, and RFC 1952.        |
| libface                   | .prx      | Manages face detection or recognition utilities.        |
| libfont                   | .prx      | Handles font rendering and manipulation.               |
| libfpu                    | .prx      | FPU functions |
| libheap                   | .prx      | Provides heap memory management functionality.          |
| libmd5                    | .prx      | Implements the MD5 hashing algorithm.                  |
| libmt19937                | .prx      | Mersenne Twister random number generator (MT19937).     |
| libpsmfplayer             | .prx      | Plays PSP Motion Format (PSMF) video files.            |
| libpuny                   | .prx      | Handles Punycode encoding for internationalized domain names. |
| libqpcode                 | .prx      | Encodes and decodes Quoted-Printable format.            |
| libsfmt11213              | .prx      | SIMD-oriented Fast Mersenne Twister (11213 parameters). |
| libsfmt1279               | .prx      | SIMD-oriented Fast Mersenne Twister (1279 parameters).  |
| libsfmt132049             | .prx      | SIMD-oriented Fast Mersenne Twister (132049 parameters).|
| libsfmt19937              | .prx      | SIMD-oriented Fast Mersenne Twister (19937 parameters). |
| libsfmt216091             | .prx      | SIMD-oriented Fast Mersenne Twister (216091 parameters).|
| libsfmt2281               | .prx      | SIMD-oriented Fast Mersenne Twister (2281 parameters).  |
| libsfmt4253               | .prx      | SIMD-oriented Fast Mersenne Twister (4253 parameters).  |
| libsfmt44497              | .prx      | SIMD-oriented Fast Mersenne Twister (44497 parameters). |
| libsfmt607                | .prx      | SIMD-oriented Fast Mersenne Twister (607 parameters).   |
| libsfmt86243              | .prx      | SIMD-oriented Fast Mersenne Twister (86243 parameters). |
| libsha0                   | .prx      | Implements the SHA-0 hashing algorithm.                |
| libsha1                   | .prx      | Implements the SHA-1 hashing algorithm.                |
| libsha224                 | .prx      | Implements the SHA-224 hashing algorithm.              |
| libsha256                 | .prx      | Implements the SHA-256 hashing algorithm.              |
| libsha384                 | .prx      | Implements the SHA-384 hashing algorithm.              |
| libsha512                 | .prx      | Implements the SHA-512 hashing algorithm.              |
| psmf                      | .prx      | Provides core functionality for handling PSP Motion Format headers. |
| pspnet_ap_dialog_dummy    | .prx      | Dummy module for PSP network access point dialogs.      |
| scan                      | .prx      |  |
| show_macaddr              | .prx      | Displays the device's MAC address.                     |




---
# Documentation (/document)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/document</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the main documentation for the Software Development Kit

This folder also contains the following sub-directories:
* **chm** - CHM version of the documentation in both english and japanese (PSP™ Programmer Tool Runtime Library)
* **html** - HTML version of the documentation in both english and japanese (PSP™ Programmer Tool Runtime Library)
* **pdf** - PDF version of the documentation
* **PSP_DevKit_6.6.0_Doc_Index_e** - Index (.idx) files
* **format** - GIM, GMO and GSO format information in PDF format
* **sound** - PHD/PBD Format documentation in PDF format
* **hardware_manual** - Hardware Manual Release 1.0.0 (2006)
* **tool** - PDF Tool documentation

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
PSP_DevKit_6.6.0_Doc_Index_e | .pdx | Adobe Acrobat Portable Document Index file, index of the other PDF files
Readme-CHM-English | .txt | Lists the documentation available in CHM format
Readme-HTML-English | .txt | Lists the documentation available in HTML format
Readme-NP_Dev-Users_Guide-English | .txt | It contains documents that describe necessary information to develop a PlayStation Network enabled application
Readme-PDF-English | .txt | Change log of pdf document changes and how t use the .PDX file

We will only document the PDF version of the documentation files in this post as they are equal to the CHM and HTML versions.

---
### PDF Documentation (/document/pdf)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/pdf</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **overview** - General overview o topics such as the compiler toolchain
* **movie** - Documentation on Movie playback such as AVI Encoding, MP4 Playback
* **debug_support** - Documentation related to debugging PSP software
* **network** - Documentation on the networking libraries such as **pspnet**
* **others** - Misc documentation on libraries like Adler and Game authoring
* **fpu-vfpu** - Low level FPU and VFPU SDK documentation
* **guideline** - General guidelines for tasks such as creating a custom PSP system theme
* **image_recognition** - Documentation for libface, which is a library for analyzing grayscale images and recognizing the faces of people whose pictures appear in those images
* **still** - JPEG and PNG Library documentation
* **peripheral** - References for APIs such as Battery, Storage and UMD
* **graphics** - References for the APIs for graphics such as 3D models (GMOs) and graphics engine
* **sound** - References for the Sound APIs for MP3/VOB, sound input etc
* **kernel** - Low level kernel information like threading a cache
* **tool** - Documentation on software related to the Hardware Tool
* **utility** - Documentation on Browser, RSS Reader utilities

The files in this folder are described in the table below, they are mainly related to the **Network Platform (NP)**, specifically the PlayStation Network **Server Management Tools** or SMT for short:
  </div>
</section>  


File Name | Extension | Description
---|---|---
NP-Product_Management_Guide_e | .pdf | NP Product Management Guide
NP_SMT_Matching2-Users_Guide_e | .pdf | PlayStation Network SMT - NP Matching 2 Tools User's Guide
NP_SMT_Portal-Users_Guide_e | .pdf | PlayStation Network SMT - Portal User's Guide
NP_SMT_TPPS-Users_Guide_e | .pdf | PlayStation Network SMT - Title Patch Publishing System User's Guide
NP_SMT_TSSS-Users_Guide_e | .pdf | PlayStation Network SMT - Title Small Storage Service User's Guide

**SMT** are a group of web-based tools that support the development of applications with respect to the various PlayStation®Network communication services. 

In the course of testing the behavior of applications in the communication services (such as the NP score ranking service, NP matching 2 service, and patch distribution service), SMT functions can be used to modify PlayStation®Network server settings and to obtain registered data.

The **SMT Portal** is a portal site for connecting to the various SMT tools and for managing all the user and organization privileges for the tools. 

The "administrator", the user who registered the NP Communication IDs and title IDs (product codes) for an organization, can set the access privileges for the organization and the organization's users using the SMT Portal.

---
#### Overview (/document/pdf/overview)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/overview</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains overview information on topics such as the compiler and how to package DLC for your game for the Playstation Store.

Note that **psp-gcc 1.x** is based on GCC 3.3.x and **psp-gcc 2.x** is based on GCC 4.0.x.
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Additional_Game_Data-Packaging-English | .pdf | This document explains the step-by-step procedure needed to create a PSP additional gamedata package. It describes how to create data and programs so they can be distributed as DLC
Compiler-Overview-English | .pdf | Overview of the GCC based compiler toolchain
ContentInformation-Check-English | .pdf | This is a function which checks the files which make up content information shown on the XMB
Downloadable_Game-Notes-English | .pdf | Notes on Creating PSP Downloadable Games such as difference in access timing compared to UMD
Downloadable_Game-Packaging-English | .pdf | This document describes the procedure for creating a PSP downloadable game package.
Game_MasterDisc-Users_Manual-English | .pdf | Game Master Disc Creation Procedure
PSP_Setup_Guide-English | .pdf | 40 page guide on setting everything up
PSP_System_Overview-English | .pdf | 8 Page high level hardware architecture
Patch-Overview-English | .pdf | A patch system is provided that can add or replace any program or data file of a previously released application supplied on a UMD, or of a PSPTM downloadable game application installed on a Memory Stick.
Patch-Packaging-English | .pdf | PSP Patch Package Creation Guide
Programming-Overview-English | .pdf | PSP Programming Tutorial

The PSP kernel loader can handle two types of object files. One is a relocatable object file format unique to the PSPTM kernel called a PRX file, and the other is a normal ELF executable object file.
Every module that is loaded in memory is identified by a unique 32-bit ID called a module ID.

A PRX-format module can be used as a resident library. A resident library provides some of its functions to another module.

---
#### Debug_support (/document/pdf/debug_support)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/debug_support</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains information on debugging PSP software with Dsnet. **Dsnet** is a debugging environment that uses the **DECI2P** protocol. It enables the host and the PSPTM tool to work together so that applications that will run on the target can be developed more efficiently.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BSOD-Overview-English | .pdf | Blue Screen of Death module documentation that saves the state when a crash occurs.
Dsnet-Client-English | .pdf | dsnet for PSP Overview
Dsnet_Command_Reference-English | .pdf | dstdb source-level/instruction-level debugger Command Reference
GPI_GPO-Reference-English | .pdf | 6 page GPI / GPO Manipulation Utility Reference
Profiler-Reference-English | .pdf | Profiler Operation Utility Reference, documentation for the low level profiling API
USB_Serial-Overview-English | .pdf | USB Serial Driver Overview, The USB serial driver enables the TOOL (DTP-T1000 / DTP-H1500) to communicate with a PC via serial communication over USB using the Abstract Control Model (ACM) of the USB Communication Device Class (CDC).
USB_Serial-Reference-English | .pdf | USB Serial Driver Reference, low level API documentation



**BSOD** is a module which, when erroneous processing occurs in a program on the DTP-H1500, if possible halts the program in that state and allows the conditions in which the error occurred to be observed. 

It enables the values of registers and of the program counter, the state of threads, and the state of the synchronization primitives such as semaphores and event flags, to be observed as they were at the time when the crash occurred.

---
#### FPU and VFPU (/document/pdf/fpu-vfpu)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/fpu-vfpu</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation for the Vector FPU, the Allegrex CPU and the FPU.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALLEGREX-Builtin_Function-Reference-English | .pdf | Built in CPU functions like __builtin_allegrex_clz
VFPU_Intrinsics-Overview-English | .pdf | The psp-gcc VFPU intrinsics are functions which enable gcc to use V4SF and V16SF mode types as built-in types.
VFPU_Intrinsics-Reference-English | .pdf | VFPU Intrinsics Reference
VFPU_Macro-Overview-English | .pdf | psp-as VFPU Assembler Overview
VFPU_Macro-Reference-English | .pdf | psp-as VFPU Macro Reference
libvfpu-Overview-English | .pdf | VFPU Operation Library (libvfpu) is a library that performs vector and matrix operations using VFPU instructions. It also provides the ability to copy memory using vfpu vector load and store instructions.
libfpu-Reference-English | .pdf | libfpu Reference for functions like sceFpuFloor
libvfpu-Reference-English | .pdf | libvfpu Reference for functions like sceVfpuScalarAbs 


---
#### Graphics (/document/pdf/graphics)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/graphics</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation related to 3D gaphics such as the GMO 3d Model API and how the Graphics engine works.

 The **Graphics Engine manager (geman)** is a service for controlling the Graphics Engine, which is the drawing engine of the PSPTM.
geman provides functions for managing display lists (sequences of commands that are transferred to the Graphics Engine) as a queue. By using geman, an application can create and transfer display lists without being concerned with when drawing actually ends.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GE-Overview-English | .pdf | 21 page Graphics Engine Manager (geman) Overview
GE-Reference-English | .pdf | Graphics Engine Manager (geman) Reference for functions such as sceGeListEnQueue
Graphics-Overview-English | .pdf | High level overview of the Graphics Processing Flow
libgim_Picture-Overview-English | .pdf | libgim_picture is a library for handling 2D graphics data that are to be used as textures. It provides functions for parsing 2D graphics data files into picture structures having image and palette subblocks, functions for animating picture structures, and functions for setting textures in conjunction with libgu by creating display lists based on picture structures.
libgim_Picture-Reference-English | .pdf | libgim_picture Reference
libgiq_Picture-Overview-English | .pdf | libgiq_picture is a lightweight version of libgim_picture. It provides an almost identical API as libgim_picture but can display GIM files with less CPU load.
libgiq_Picture-Reference-English | .pdf | libgiq_picture Reference
libgmo_Model-Overview-English | .pdf | libgmo is a library for handling 3D model data. It provides functions for parsing 3D model data files into model structures having bone, part, and material subblocks, functions for animating model structures, and functions for creating display lists based on model structures in conjunction with libgu.
libgmo_Model-Reference-English | .pdf | libgmo_model Reference
libgmq_Model-Overview-English | .pdf | libgmq_model is a lightweight version of libgmo_model. It provides an almost identical API as libgmo_model but can display GMO files with less CPU load.
libgmq_Model-Reference-English | .pdf | libgmq_model Reference
libgso_Scene-Overview-English | .pdf | libgso is a library which handles 3D scene data. libgso provides structure definitions and macro definitions for the 3D scene format. Using these, information on lights, cameras, etc. declared in the 3D scene format can be obtained.
libgso_Scene-Reference-English | .pdf | libgso_scene Reference
libgu-Overview-English | .pdf | libgu is a basic library that uses the Graphics Engine to draw graphics. It is primarily used to create display lists (sequences of drawing parameters and drawing commands) that are used by the Graphics Engine to perform the actual drawing. The library also provides functions for starting, interrupting, and synchronizing drawing operations.
libgu-Reference-English | .pdf | libgu Reference
libgum-Overview-English | .pdf | libgum is a library for supporting 3D operations. It has functions for performing matrix calculations such as rotation, scaling, and perspective projection as well as functions for reflecting the calculation result matrix in a display list that was created using libgu.
libgum-Reference-English | .pdf | libgum Reference
libgup-Reference-English | .pdf | libgup Reference
libgxp_Packet-Reference-English | .pdf | libgxp_packet Reference


---
#### Guideline (/document/pdf/guideline)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/guideline</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documents on misc topics such as creating custom system themes or creating content for the internet browser, including the PSP Flash player plugin.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
CustomTheme-Packaging-English | .pdf | Custom Theme Package Creation Guide
Custom_Theme-English | .pdf | Custom Theme Creation Guidelines
InternetBrowser_ContentGuideline_Dev-English | .pdf | 53 page Guidelines for Creating Content for the PSP Internet Browser
NP_Dev-Users_Guide_e | .pdf | 21 page Network Platform for Development User's Guide
PSN_Avatar-Guidelines_e | .pdf | PlayStation®Network Avatar Guidelines, including premium paid for avatars (also mentions vita and PS3)
PSP_PlayStation_Store_Content-Guidelines-English | .pdf | 25 page document explains how to create system files, gives precautions when creating content information, and provides notes that should be followed when creating user programs and data.
Readme-CustomTheme-Packaging-English | .txt | Changelog for the Custom_Theme-English document
Readme-CustomTheme_CreationGuideline-English | .txt | Changelog for the CustomTheme-Packaging-English.pdf
Readme-InternetBrowser_ContentGuideline_Dev-English | .txt | Changelog for the InternetBrowser_ContentGuideline_Dev-English.pdf
Readme-PlayStation_Store_ContentGuideline-English | .txt | Changelog for the PSP_PlayStation_Store_Content-Guideline-English.pdf


---
#### Image Recognition (/document/pdf/image_recognition)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/image_recognition</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation on the Face recognition API provided by the PSP SDK.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
libface-Overview-English | .pdf | libface is a library for analyzing grayscale images and recognizing the faces of people whose pictures appear in those images
libface-Reference-English | .pdf | libface reference api with functions such as sceFaceDetection


---
#### Kernel (/document/pdf/kernel)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/kernel</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains low level documentation on how the PSP Kernel works for example details of the cache inside the .

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Cache-Overview-English | .pdf | 14 page ALLEGREX CPU Cache Overview
Cache-Reference-English | .pdf | Cache Manipulation Utilities Reference
IO_File_Manager-Reference-English | .pdf | Reference for IO file functions such as SceIoStat
Interrupt_Manager-Reference-English | .pdf | intrman (PSP Interrupt Manager) Reference
Kernel-Overview-English | .pdf | 24 page PSP Kernel Overview
Loadexec-Reference-English | .pdf | Restarting the PSP and Starting Applications (loadexec) Reference
Module_Manager-Reference-English | .pdf | PSP Module Manager Reference
Stdio-Reference-English | .pdf | Reference for functions such as sceKernelRegisterStdoutPipe
System_Memory_Manager-Reference-English | .pdf | PSP System Memory Manager Reference
Thread_Manager-Reference-English | .pdf | PSP Thread Manager Specifications Reference
Types-Reference-English | .pdf | Common Type Definitions Reference
libheap-Overview-English | .pdf | libheap is a library for managing in smaller chunks, memory that is first allocated using the fixed-length memory pool (FPL) of the thread manager. libheap is useful when you want to perform malloc()/free()-like memory management without depending on libc. It can also be used when you want to allocate multiple independent heaps.
libheap-Reference-English | .pdf | libheap Reference for functions such as sceHeapAllocHeapMemory


---
#### Movie (/document/pdf/movie)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/movie</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AVIenc-Overview-English | .pdf | 
AVIenc-Reference-English | .pdf | 
Movie-Overview-English | .pdf | 
libmp4-Overview-English | .pdf | 
libmp4-Reference-English | .pdf | 
libmpeg-Overview-English | .pdf | 
libmpeg-Reference-English | .pdf | 
libpsmf-Overview-English | .pdf | 
libpsmf-Reference-English | .pdf | 
libpsmfplayer-Overview-English | .pdf | 
libpsmfplayer-Reference-English | .pdf | 


---
#### Network (/document/pdf/network)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/network</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Game_Sharing-Authoring-English | .pdf | 
Game_Sharing-Overview-English | .pdf | 
HTTPS-Overview-English | .pdf | 
HTTPS-Reference-English | .pdf | 
Ifhandle-Overview-English | .pdf | 
Ifhandle-Reference-English | .pdf | 
NP-Overview-English | .pdf | 
NP-Reference-English | .pdf | 
NPDRM-Overview-English | .pdf | 
NPDRM-Reference-English | .pdf | 
NP_Account-Overview-English | .pdf | 
NP_Auth-Reference-English | .pdf | 
NP_Commerce-Overview-English | .pdf | 
NP_Commerce_Programming_Guide-English | .pdf | 
NP_Common-Reference-English | .pdf | 
NP_Communication-Overview-English | .pdf | 
NP_In_Game_Commerce2-Overview-English | .pdf | 
NP_In_Game_Commerce2-Reference-English | .pdf | 
NP_Lookup-Overview-English | .pdf | 
NP_Lookup-Reference-English | .pdf | 
NP_Matching2-Overview-English | .pdf | 
NP_Matching2-Reference-English | .pdf | 
NP_Matching2_System-Overview-English | .pdf | 
NP_Roster-Reference-English | .pdf | 
NP_Service-Reference-English | .pdf | 
Network-Overview-English | .pdf | 
Network_Infrastructure_Mode-Overview-English | .pdf | 
PSPNET-Overview-English | .pdf | 
PSPNET_Adhoc-Reference-English | .pdf | 
PSPNET_Adhoc_Discover-Overview-English | .pdf | 
PSPNET_Adhoc_Discover-Reference-English | .pdf | 
PSPNET_Adhoc_Matching-Overview-English | .pdf | 
PSPNET_Adhoc_Matching-Reference-English | .pdf | 
PSPNET_Adhocctl-Reference-English | .pdf | 
PSPNET_Ap_Dialog_Dummy-Reference-English | .pdf | 
PSPNET_Apctl-Reference-English | .pdf | 
PSPNET_Core-Reference-English | .pdf | 
PSPNET_Error-Reference-English | .pdf | 
PSPNET_Inet-Reference-English | .pdf | 
PSPNET_Resolver-Overview-English | .pdf | 
PSPNET_Resolver-Reference-English | .pdf | 
PSP_Boot_Binary-Overview-English | .pdf | 
Wlan-Overview-English | .pdf | 
Wlan-Reference-English | .pdf | 
libbase16-Overview-English | .pdf | 
libbase16-Reference-English | .pdf | 
libbase32-Overview-English | .pdf | 
libbase32-Reference-English | .pdf | 
libbase64-Overview-English | .pdf | 
libbase64-Reference-English | .pdf | 
libgameupdate-Overview-English | .pdf | 
libgameupdate-Reference-English | .pdf | 
libhttp-Overview-English | .pdf | 
libhttp-Reference-English | .pdf | 
libparse_HTTP-Overview-English | .pdf | 
libparse_HTTP-Reference-English | .pdf | 
libparse_URI-Overview-English | .pdf | 
libparse_URI-Reference-English | .pdf | 
libqpcode-Overview-English | .pdf | 
libqpcode-Reference-English | .pdf | 
libssl-Overview-English | .pdf | 
libssl-Reference-English | .pdf | 


---
#### Others (/document/pdf/others)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/others</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GameData-Authoring-English | .pdf | 
GameData-Reference-English | .pdf | 
OpenPSID-Overview-English | .pdf | 
OpenPSID-Reference-English | .pdf | 
libadler-Overview-English | .pdf | 
libadler-Reference-English | .pdf | 
libccc-Reference-English | .pdf | 
libdeflt-Overview-English | .pdf | 
libdeflt-Reference-English | .pdf | 
libfont-Overview-English | .pdf | 
libfont-Reference-English | .pdf | 
libmd5-Overview-English | .pdf | 
libmd5-Reference-English | .pdf | 
libmt19937-Overview-English | .pdf | 
libmt19937-Reference-English | .pdf | 
libpuny-Overview-English | .pdf | 
libpuny-Reference-English | .pdf | 
libsfmt11213-Overview-English | .pdf | 
libsfmt11213-Reference-English | .pdf | 
libsfmt1279-Overview-English | .pdf | 
libsfmt1279-Reference-English | .pdf | 
libsfmt132049-Overview-English | .pdf | 
libsfmt132049-Reference-English | .pdf | 
libsfmt19937-Overview-English | .pdf | 
libsfmt19937-Reference-English | .pdf | 
libsfmt216091-Overview-English | .pdf | 
libsfmt216091-Reference-English | .pdf | 
libsfmt2281-Overview-English | .pdf | 
libsfmt2281-Reference-English | .pdf | 
libsfmt4253-Overview-English | .pdf | 
libsfmt4253-Reference-English | .pdf | 
libsfmt44497-Overview-English | .pdf | 
libsfmt44497-Reference-English | .pdf | 
libsfmt607-Overview-English | .pdf | 
libsfmt607-Reference-English | .pdf | 
libsfmt86243-Overview-English | .pdf | 
libsfmt86243-Reference-English | .pdf | 
libsha0-Overview-English | .pdf | 
libsha0-Reference-English | .pdf | 
libsha1-Overview-English | .pdf | 
libsha1-Reference-English | .pdf | 
libsha224-Overview-English | .pdf | 
libsha224-Reference-English | .pdf | 
libsha256-Overview-English | .pdf | 
libsha256-Reference-English | .pdf | 
libsha384-Overview-English | .pdf | 
libsha384-Reference-English | .pdf | 
libsha512-Overview-English | .pdf | 
libsha512-Reference-English | .pdf | 


---
#### Peripheral (/document/pdf/peripheral)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/peripheral</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BatteryIcon-Overview-English | .pdf | 
Controller-Overview-English | .pdf | 
Controller-Reference-English | .pdf | 
DMAC-Overview-English | .pdf | 
DMAC-Reference-English | .pdf | 
Display-Overview-English | .pdf | 
Display-Reference-English | .pdf | 
FATMS-Overview-English | .pdf | 
FATMS-Reference-English | .pdf | 
HeadphoneRemote-Overview-English | .pdf | 
HeadphoneRemote-Reference-English | .pdf | 
ISO9660-Reference-English | .pdf | 
Impose-Reference-English | .pdf | 
Power-Overview-English | .pdf | 
Power-Reference-English | .pdf | 
RTC-Overview-English | .pdf | 
RTC-Reference-English | .pdf | 
UMD-Overview-English | .pdf | 
UMD-Reference-English | .pdf | 
UMD_Block-Reference-English | .pdf | 
UMD_Cache-Overview-English | .pdf | 
USB_Camera-Overview-English | .pdf | 
USB_Camera-Reference-English | .pdf | 
USB_Driver-Overview-English | .pdf | 
USB_Driver-Reference-English | .pdf | 
USB_Gps-Overview-English | .pdf | 
USB_Gps-Reference-English | .pdf | 
USB_Mic-Overview-English | .pdf | 
USB_Mic-Reference-English | .pdf | 
USB_PSPComm-Overview-English | .pdf | 
USB_PSPComm-Reference-English | .pdf | 
fmacvideo-Overview-English | .pdf | 
fmacvideo-Reference-English | .pdf | 


---
#### Sound (/document/pdf/sound)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/sound</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
AudioInput-Overview-English | .pdf | 
AudioInput-Reference-English | .pdf | 
AudioRouting-Reference-English | .pdf | 
PHD_PBD_Format-English | .pdf | 
Sas-Overview-English | .pdf | 
SimpleAudio-Overview-English | .pdf | 
SimpleAudio-Reference-English | .pdf | 
Sound-Overview-English | .pdf | 
VAG_Format-English | .pdf | 
Vaudio-Overview-English | .pdf | 
Vaudio-Reference-English | .pdf | 
libaac-Overview-English | .pdf | 
libaac-Reference-English | .pdf | 
libatrac3plus-Overview-English | .pdf | 
libatrac3plus-Reference-English | .pdf | 
libg729-Overview-English | .pdf | 
libg729-Reference-English | .pdf | 
libmp3-Overview-English | .pdf | 
libmp3-Reference-English | .pdf | 
libp3da-Overview-English | .pdf | 
libp3da-Reference-English | .pdf | 
libsas-Overview-English | .pdf | 
libsas-Reference-English | .pdf | 
libsndp-Overview-English | .pdf | 
libsndp-Reference-English | .pdf | 
libulaw-Overview-English | .pdf | 
libulaw-Reference-English | .pdf | 
libwave-Overview-English | .pdf | 
libwave-Reference-English | .pdf | 


---
#### Still (/document/pdf/still)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/still</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
JPEGDEC-Overview-English | .pdf | 
JPEGDEC-Reference-English | .pdf | 
SCEJPEGENC-Overview-English | .pdf | 
SCEJPEGENC-Reference-English | .pdf | 
scepng-Overview-English | .pdf | 
scepng-Reference-English | .pdf | 


---
#### Tool (/document/pdf/tool)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/tool</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PSMF_Composer-Tool-English | .pdf | 
PSMF_Encoder-Tool-English | .pdf | 
PSPhtool_Updater-English | .pdf | 
Readme-Stream_Composer_Doc-English | .txt | 
Stream_Composer-Tool-English | .pdf | 


---
#### Utility (/document/pdf/utility)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/utility</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Utility-Overview-English | .pdf | 
Utility-Reference-English | .pdf | 
Utility_Gamedata_Install-Overview-English | .pdf | 
Utility_Gamedata_Install-Reference-English | .pdf | 
Utility_InternetBrowser-Overview-English | .pdf | 
Utility_InternetBrowser-Reference-English | .pdf | 
Utility_RssChannelSubscriber-Overview-English | .pdf | 
Utility_RssReader-Overview-English | .pdf | 
Utility_RssReader-Reference-English | .pdf | 
Utility_Savedata-Overview-English | .pdf | 
Utility_Savedata-Reference-English | .pdf | 
Utility_Savedata-Reference-Member-English | .pdf | 



### Format (/document/format)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/format</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GIM_Format-Overview-English | .pdf | 
GMO_Format-Overview-English | .pdf | 
GMO_Format-Reference-English | .pdf | 
GSO_Format-Overview-English | .pdf | 
GSO_Format-Reference-English | .pdf | 


---
### Hardware_manual (/document/hardware_manual)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/hardware_manual</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **Graphics_Engine** - 
* **VFPU** - 
* **ALLEGREX** -

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
Hardware-Restriction-English | .pdf | 
Readme-English | .txt | 


---
### Allegrex Hardware Documentation (/document/hardware_manual/ALLEGREX)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ALLEGREX</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **Instruction_list** - Just contains one file **ALLEGREX_FPU-Instruction_List-English.pdf** that...

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
ALLEGREX-Instruction_Manual-English | .pdf | 
ALLEGREX-Users_Manual-English | .pdf | 
FPU-Instruction_Manual-English | .pdf | 
FPU-Users_Manual-English | .pdf | 


---
### Graphics Engine Documentation (/document/hardware_manual/Graphics_Engine)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Graphics_Engine</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **Command_list** - Japanese and Korean version of Graphics_Engine-Command_List
* **Graphics_Engine-Command_list** - Just contains one file **Graphics_Engine-Command_List-English.pdf** that...

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
Graphics_Engine-Command_Reference_Manual-English | .pdf | 
Graphics_Engine-Users_Manual-English | .pdf | 

---
### VFPU Documentation (/document/hardware_manual/VFPU)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/VFPU</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **VFPU-Instruction_list** - Just contains one file **VFPU-Instruction_List-English.pdf** that... 
* **Instruction_list** - Japanese and korean version of Vfpu-instruction_list

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
VFPU-Instruction_Manual-English | .pdf | 
VFPU-Users_Manual-English | .pdf | 


---
# Flash (/flash)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/flash</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories which each just contain a single **EBOOT.PBP** file :
* **downgrade_DTP_H1500** - 
* **update_DTP_H1500** - 

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
English-Notes_on_using_the_updater | .txt | 
Japanese-Notes_on_using_the_updater | .txt | Japanese version of the notes
Korean-Notes_on_using_the_updater | .txt | Korean version of the notes

---
# Htool_updater (/htool_updater)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/htool_updater</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains an update binary and license files for the PSP Hardware Tool Development Kit.

This folder also contains the following sub-directories:
* **license** - contains a single text file per langauge (English, Japanese, Korean) for the license file **psptool_license_e.txt**

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
htool_updater-660-A | .bin | Firmware update for the PSP Tool

---
# Include Headers (/include)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **gmq** - 
* **gso** - 
* **gxp** - 
* **libhttp** - 
* **deci2p** - 
* **gim** - 
* **giq** - 
* **pspnet** - 
* **gmo** - 
* **np** - 
* **utility** - 

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
allegrex | .h | Include file for declaring 
audioerror | .h | Include file for declaring 
audioinput | .h | Include file for declaring 
audiooutput | .h | Include file for declaring 
audiorouting | .h | Include file for declaring 
avienc | .h | Include file for declaring 
breakcode | .h | Include file for declaring 
cpureg | .h | Include file for declaring 
crashdump | .h | Include file for declaring 
ctrlsvc | .h | Include file for declaring 
deci2p | .h | Include file for declaring 
devkit_version | .h | Include file for declaring 
displaysvc | .h | Include file for declaring 
dmacdrv | .h | Include file for declaring 
exportcplusplus | .h | Include file for declaring 
fatms | .h | Include file for declaring 
fmacvideo | .h | Include file for declaring 
gecmd | .h | Include file for declaring 
geman | .h | Include file for declaring 
gevtx | .h | Include file for declaring 
gprof | .h | Include file for declaring 
hpremotedrv | .h | Include file for declaring 
impose | .h | Include file for declaring 
intrman | .h | Include file for declaring 
iofilemgr | .h | Include file for declaring 
iofilemgr_dirent | .h | Include file for declaring 
iofilemgr_dnas | .h | Include file for declaring 
iofilemgr_dnas_inline | .h | Include file for declaring 
iofilemgr_fcntl | .h | Include file for declaring 
iofilemgr_stat | .h | Include file for declaring 
isofs_ioctl | .h | Include file for declaring 
kernel | .h | Include file for declaring 
kerneltypes | .h | Include file for declaring 
kernelutils | .h | Include file for declaring 
kerror | .h | Include file for declaring 
libaac | .h | Include file for declaring 
libadler | .h | Include file for declaring 
libatrac3plus | .h | Include file for declaring 
libatrac3plus_aa3 | .h | Include file for declaring 
libbase16 | .h | Include file for declaring 
libbase32 | .h | Include file for declaring 
libbase64 | .h | Include file for declaring 
libccc | .h | Include file for declaring 
libdeflt | .h | Include file for declaring 
libface | .h | Include file for declaring 
libfont | .h | Include file for declaring 
libfpu | .h | Include file for declaring 
libg729 | .h | Include file for declaring 
libgameupdate | .h | Include file for declaring 
libgu | .h | Include file for declaring 
libgum | .h | Include file for declaring 
libgup | .h | Include file for declaring 
libheap | .h | Include file for declaring 
libhttp | .h | Include file for declaring 
libhttp_error | .h | Include file for declaring 
libhttps | .h | Include file for declaring 
libmd5 | .h | Include file for declaring 
libmp3 | .h | Include file for declaring 
libmp4 | .h | Include file for declaring 
libmpeg | .h | Include file for declaring 
libmt19937 | .h | Include file for declaring 
libp3da | .h | Include file for declaring 
libp3da_types | .h | Include file for declaring 
libp3da_values | .h | Include file for declaring 
libparse_http | .h | Include file for declaring 
libparse_uri | .h | Include file for declaring 
libpsmf | .h | Include file for declaring 
libpsmfplayer | .h | Include file for declaring 
libpuny | .h | Include file for declaring 
libqpcode | .h | Include file for declaring 
libsas | .h | Include file for declaring 
libsfmt11213 | .h | Include file for declaring 
libsfmt1279 | .h | Include file for declaring 
libsfmt132049 | .h | Include file for declaring 
libsfmt19937 | .h | Include file for declaring 
libsfmt216091 | .h | Include file for declaring 
libsfmt2281 | .h | Include file for declaring 
libsfmt4253 | .h | Include file for declaring 
libsfmt44497 | .h | Include file for declaring 
libsfmt607 | .h | Include file for declaring 
libsfmt86243 | .h | Include file for declaring 
libsha0 | .h | Include file for declaring 
libsha1 | .h | Include file for declaring 
libsha224 | .h | Include file for declaring 
libsha256 | .h | Include file for declaring 
libsha384 | .h | Include file for declaring 
libsha512 | .h | Include file for declaring 
libsndp | .h | Include file for declaring 
libssl | .h | Include file for declaring 
libvfpu | .h | Include file for declaring 
libwave | .h | Include file for declaring 
loadexec | .h | Include file for declaring 
mediaman | .h | Include file for declaring 
moduleexport | .h | Include file for declaring 
modulemgr | .h | Include file for declaring 
modulemgr_gamesharing | .h | Include file for declaring 
mscm_error | .h | Include file for declaring 
msstor_error | .h | Include file for declaring 
openpsid | .h | Include file for declaring 
powersvc | .h | Include file for declaring 
profiler | .h | Include file for declaring 
pspalias | .h | Include file for declaring 
pspconst | .h | Include file for declaring 
psperror | .h | Include file for declaring 
pspioctl | .h | Include file for declaring 
pspkeywords | .h | Include file for declaring 
pspnet | .h | Include file for declaring 
pspnet_adhoc | .h | Include file for declaring 
pspnet_adhoc_discover | .h | Include file for declaring 
pspnet_adhoc_matching | .h | Include file for declaring 
pspnet_adhocctl | .h | Include file for declaring 
pspnet_ap_dialog_dummy | .h | Include file for declaring 
pspnet_apctl | .h | Include file for declaring 
pspnet_error | .h | Include file for declaring 
pspnet_inet | .h | Include file for declaring 
pspnet_resolver | .h | Include file for declaring 
pspnet_upnp | .h | Include file for declaring 
pspstdint | .h | Include file for declaring 
psptypes | .h | Include file for declaring 
rtcsvc | .h | Include file for declaring 
scejpeg | .h | Include file for declaring 
scejpegenc | .h | Include file for declaring 
scepng | .h | Include file for declaring 
sceulaw | .h | Include file for declaring 
scratchpad | .h | Include file for declaring 
sdphd | .h | Include file for declaring 
sysmem | .h | Include file for declaring 
thread | .h | Include file for declaring 
umddevctl | .h | Include file for declaring 
umddisc | .h | Include file for declaring 
umderror | .h | Include file for declaring 
usb | .h | Include file for declaring 
usbacc | .h | Include file for declaring 
usbcam | .h | Include file for declaring 
usbgps | .h | Include file for declaring 
usbmic | .h | Include file for declaring 
usbpspcm | .h | Include file for declaring 
usbser | .h | Include file for declaring 
vaudio | .h | Include file for declaring 
wlan | .h | Include file for declaring 


---
## Deci2p Headers (/include/deci2p)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/deci2p</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
dbgp | .h | Include file for declaring 
dcmp | .h | Include file for declaring 
deci2p | .h | Include file for declaring 
drfp | .h | Include file for declaring 
loadp | .h | Include file for declaring 
netmp | .h | Include file for declaring 
ttyp | .h | Include file for declaring 


---
## GIM Image Format Headers (/include/gim)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gim</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gim_format | .h | Include file for declaring 
gim_metrics | .h | Include file for declaring 
gim_picture | .h | Include file for declaring 
gim_protected | .h | Include file for declaring 


---
## Giq Headers (/include/giq)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/giq</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
giq_format | .h | Include file for declaring 
giq_picture | .h | Include file for declaring 
giq_protected | .h | Include file for declaring 


---
## Gmo Headers (/include/gmo)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gmo</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gmo_format | .h | Include file for declaring 
gmo_metrics | .h | Include file for declaring 
gmo_model | .h | Include file for declaring 
gmo_protected | .h | Include file for declaring 


---
### Gmq Headers (/include/gmq)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gmq</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gmq_format | .h | Include file for declaring 
gmq_model | .h | Include file for declaring 
gmq_protected | .h | Include file for declaring 


---
### Gso headers (/include/gso)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gso</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gso_format | .h | Include file for declaring 
gso_scene | .h | Include file for declaring 


---
### Gxp headers (/include/gxp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gxp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
gxp_format | .h | Include file for declaring 
gxp_packet | .h | Include file for declaring 


---
### Lib Http headers (/include/libhttp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/libhttp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
http_methods | .h | Include file for declaring 
http_status_code | .h | Include file for declaring 
schemes | .h | Include file for declaring 


---
### Np Headers (/include/np)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/np</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
np | .h | Include file for declaring 
np_auth | .h | Include file for declaring 
np_commerce2 | .h | Include file for declaring 
np_common | .h | Include file for declaring 
np_drm | .h | Include file for declaring 
np_drm_inline | .h | Include file for declaring 
np_error | .h | Include file for declaring 
np_lookup | .h | Include file for declaring 
np_matching2 | .h | Include file for declaring 
np_roster | .h | Include file for declaring 
np_service | .h | Include file for declaring 


---
### PSP Net inet headers (/include/pspnet/netinet)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/netinet</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
in | .h | Include file for declaring 
ip_var | .h | Include file for declaring 
tcp | .h | Include file for declaring 
tcp_fsm | .h | Include file for declaring 
tcp_var | .h | Include file for declaring 
udp_var | .h | Include file for declaring 


---
### PSP Net System Headers (/include/pspnet/sys)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/sys</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
poll | .h | Include file for declaring 
select | .h | Include file for declaring 
socket | .h | Include file for declaring 
time | .h | Include file for declaring 
uio | .h | Include file for declaring 


---
### Utility Headers (/include/utility)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/utility</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
utility_auto_connect | .h | Include file for declaring 
utility_common | .h | Include file for declaring 
utility_gamedata_install | .h | Include file for declaring 
utility_gamesharing | .h | Include file for declaring 
utility_htmlviewer | .h | Include file for declaring 
utility_module | .h | Include file for declaring 
utility_msgdialog | .h | Include file for declaring 
utility_netconf | .h | Include file for declaring 
utility_netparam | .h | Include file for declaring 
utility_np_signin | .h | Include file for declaring 
utility_osk | .h | Include file for declaring 
utility_ps3scan | .h | Include file for declaring 
utility_psn | .h | Include file for declaring 
utility_rss_reader | .h | Include file for declaring 
utility_rss_subscriber | .h | Include file for declaring 
utility_savedata | .h | Include file for declaring 
utility_screenshot | .h | Include file for declaring 
utility_store_checkout | .h | Include file for declaring 
utility_sysparam | .h | Include file for declaring 


---
# Static Libraries (/lib)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/lib</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **ldscripts** - 
The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
audio_stub_02 | .a | Static Library archive of 
audiorouting_stub | .a | Static Library archive of 
crt0_elf | .o | 
crt0_prx | .o | 
crt0_prxlibc | .o | 
ctrl_stub | .a | Static Library archive of 
deci2p_user_stub | .a | Static Library archive of 
display_stub | .a | Static Library archive of 
dmac_stub | .a | Static Library archive of 
exportgcc_eh | .o | 
exportlibc | .o | 
exportlibm | .o | 
g729_stub | .a | Static Library archive of 
g729_stub_weak | .a | Static Library archive of 
ge_user_stub | .a | Static Library archive of 
hpremote_stub | .a | Static Library archive of 
ifhandle_stub | .a | Static Library archive of 
ifhandle_stub_weak | .a | Static Library archive of 
impose_stub | .a | Static Library archive of 
kernel_bridge | .o | 
libaac_stub | .a | Static Library archive of 
libaac_stub_weak | .a | Static Library archive of 
libadler | .a | Static Library archive of 
libadler_stub | .a | Static Library archive of 
libadler_stub_weak | .a | Static Library archive of 
libatrac3plus_stub | .a | Static Library archive of 
libatrac3plus_stub_weak | .a | Static Library archive of 
libavienc | .a | Static Library archive of 
libbase16 | .a | Static Library archive of 
libbase16_stub | .a | Static Library archive of 
libbase16_stub_weak | .a | Static Library archive of 
libbase32 | .a | Static Library archive of 
libbase32_stub | .a | Static Library archive of 
libbase32_stub_weak | .a | Static Library archive of 
libbase64 | .a | Static Library archive of 
libbase64_stub | .a | Static Library archive of 
libbase64_stub_weak | .a | Static Library archive of 
libc_stub | .a | Static Library archive of 
libc_stub_weak | .a | Static Library archive of 
libccc | .a | Static Library archive of 
libccc_stub | .a | Static Library archive of 
libccc_stub_weak | .a | Static Library archive of 
libdeflt | .a | Static Library archive of 
libdeflt_small | .a | Static Library archive of 
libdeflt_stub | .a | Static Library archive of 
libdeflt_stub_weak | .a | Static Library archive of 
libface_stub | .a | Static Library archive of 
libface_stub_weak | .a | Static Library archive of 
libfmacvideo | .a | Static Library archive of 
libfont_stub | .a | Static Library archive of 
libfont_stub_weak | .a | Static Library archive of 
libfpu | .a | Static Library archive of 
libfpu_stub | .a | Static Library archive of 
libfpu_stub_weak | .a | Static Library archive of 
libgameupdate_stub | .a | Static Library archive of 
libgameupdate_stub_weak | .a | Static Library archive of 
libgcc_eh_stub | .a | Static Library archive of 
libgcc_eh_stub_weak | .a | Static Library archive of 
libgcovio | .a | Static Library archive of 
libgim_picture | .a | Static Library archive of 
libgiq_picture | .a | Static Library archive of 
libgmo_model | .a | Static Library archive of 
libgmo_model_vfpu | .a | Static Library archive of 
libgmq_model | .a | Static Library archive of 
libgprof | .a | Static Library archive of 
libgso_scene | .a | Static Library archive of 
libgu | .a | Static Library archive of 
libgu_debug | .a | Static Library archive of 
libgum | .a | Static Library archive of 
libgum_vfpu | .a | Static Library archive of 
libgxp_packet | .a | Static Library archive of 
libheap | .a | Static Library archive of 
libheap_stub | .a | Static Library archive of 
libheap_stub_weak | .a | Static Library archive of 
libhttp_stub | .a | Static Library archive of 
libhttp_stub_weak | .a | Static Library archive of 
libkernel | .a | Static Library archive of 
libm_stub | .a | Static Library archive of 
libm_stub_weak | .a | Static Library archive of 
libmd5 | .a | Static Library archive of 
libmd5_stub | .a | Static Library archive of 
libmd5_stub_weak | .a | Static Library archive of 
libmp3_stub | .a | Static Library archive of 
libmp3_stub_weak | .a | Static Library archive of 
libmp4_stub | .a | Static Library archive of 
libmp4_stub_weak | .a | Static Library archive of 
libmt19937 | .a | Static Library archive of 
libmt19937_stub | .a | Static Library archive of 
libmt19937_stub_weak | .a | Static Library archive of 
libp3da | .a | Static Library archive of 
libp3da_weak | .a | Static Library archive of 
libparse_http_stub | .a | Static Library archive of 
libparse_http_stub_weak | .a | Static Library archive of 
libparse_uri_stub | .a | Static Library archive of 
libparse_uri_stub_weak | .a | Static Library archive of 
libpsmfplayer | .a | Static Library archive of 
libpsmfplayer_stub | .a | Static Library archive of 
libpsmfplayer_stub_weak | .a | Static Library archive of 
libpuny | .a | Static Library archive of 
libpuny_stub | .a | Static Library archive of 
libpuny_stub_weak | .a | Static Library archive of 
libqpcode | .a | Static Library archive of 
libqpcode_stub | .a | Static Library archive of 
libqpcode_stub_weak | .a | Static Library archive of 
libsas | .a | Static Library archive of 
libsas_weak | .a | Static Library archive of 
libscejpegenc | .a | Static Library archive of 
libscejpegenc_vfpu | .a | Static Library archive of 
libscepng | .a | Static Library archive of 
libsceulaw | .a | Static Library archive of 
libsfmt11213 | .a | Static Library archive of 
libsfmt11213_stub | .a | Static Library archive of 
libsfmt11213_stub_weak | .a | Static Library archive of 
libsfmt1279 | .a | Static Library archive of 
libsfmt1279_stub | .a | Static Library archive of 
libsfmt1279_stub_weak | .a | Static Library archive of 
libsfmt132049 | .a | Static Library archive of 
libsfmt132049_stub | .a | Static Library archive of 
libsfmt132049_stub_weak | .a | Static Library archive of 
libsfmt19937 | .a | Static Library archive of 
libsfmt19937_stub | .a | Static Library archive of 
libsfmt19937_stub_weak | .a | Static Library archive of 
libsfmt216091 | .a | Static Library archive of 
libsfmt216091_stub | .a | Static Library archive of 
libsfmt216091_stub_weak | .a | Static Library archive of 
libsfmt2281 | .a | Static Library archive of 
libsfmt2281_stub | .a | Static Library archive of 
libsfmt2281_stub_weak | .a | Static Library archive of 
libsfmt4253 | .a | Static Library archive of 
libsfmt4253_stub | .a | Static Library archive of 
libsfmt4253_stub_weak | .a | Static Library archive of 
libsfmt44497 | .a | Static Library archive of 
libsfmt44497_stub | .a | Static Library archive of 
libsfmt44497_stub_weak | .a | Static Library archive of 
libsfmt607 | .a | Static Library archive of 
libsfmt607_stub | .a | Static Library archive of 
libsfmt607_stub_weak | .a | Static Library archive of 
libsfmt86243 | .a | Static Library archive of 
libsfmt86243_stub | .a | Static Library archive of 
libsfmt86243_stub_weak | .a | Static Library archive of 
libsha0 | .a | Static Library archive of 
libsha0_stub | .a | Static Library archive of 
libsha0_stub_weak | .a | Static Library archive of 
libsha1 | .a | Static Library archive of 
libsha1_stub | .a | Static Library archive of 
libsha1_stub_weak | .a | Static Library archive of 
libsha224 | .a | Static Library archive of 
libsha224_stub | .a | Static Library archive of 
libsha224_stub_weak | .a | Static Library archive of 
libsha256 | .a | Static Library archive of 
libsha256_stub | .a | Static Library archive of 
libsha256_stub_weak | .a | Static Library archive of 
libsha384 | .a | Static Library archive of 
libsha384_stub | .a | Static Library archive of 
libsha384_stub_weak | .a | Static Library archive of 
libsha512 | .a | Static Library archive of 
libsha512_stub | .a | Static Library archive of 
libsha512_stub_weak | .a | Static Library archive of 
libsndp | .a | Static Library archive of 
libssl_stub | .a | Static Library archive of 
libssl_stub_weak | .a | Static Library archive of 
libvfpu | .a | Static Library archive of 
libwave | .a | Static Library archive of 
mediaman_stub | .a | Static Library archive of 
modulemgr_user_stub_03 | .a | Static Library archive of 
mpeg_stub | .a | Static Library archive of 
mpeg_stub_weak | .a | Static Library archive of 
np_auth_stub | .a | Static Library archive of 
np_auth_stub_weak | .a | Static Library archive of 
np_commerce2_stub | .a | Static Library archive of 
np_commerce2_stub_weak | .a | Static Library archive of 
np_matching2_stub | .a | Static Library archive of 
np_matching2_stub_weak | .a | Static Library archive of 
np_service_stub | .a | Static Library archive of 
np_service_stub_weak | .a | Static Library archive of 
np_stub | .a | Static Library archive of 
np_stub_weak | .a | Static Library archive of 
npdrm_stub | .a | Static Library archive of 
npdrm_stub_weak | .a | Static Library archive of 
openpsid_stub | .a | Static Library archive of 
power_stub | .a | Static Library archive of 
psmf_stub | .a | Static Library archive of 
psmf_stub_weak | .a | Static Library archive of 
pspnet_adhoc_discover_stub | .a | Static Library archive of 
pspnet_adhoc_discover_stub_weak | .a | Static Library archive of 
pspnet_adhoc_matching_stub | .a | Static Library archive of 
pspnet_adhoc_matching_stub_weak | .a | Static Library archive of 
pspnet_adhoc_stub | .a | Static Library archive of 
pspnet_adhoc_stub_weak | .a | Static Library archive of 
pspnet_adhocctl_stub | .a | Static Library archive of 
pspnet_adhocctl_stub_weak | .a | Static Library archive of 
pspnet_ap_dialog_dummy_stub | .a | Static Library archive of 
pspnet_ap_dialog_dummy_stub_weak | .a | Static Library archive of 
pspnet_apctl_stub | .a | Static Library archive of 
pspnet_apctl_stub_weak | .a | Static Library archive of 
pspnet_inet_stub | .a | Static Library archive of 
pspnet_inet_stub_weak | .a | Static Library archive of 
pspnet_resolver_stub | .a | Static Library archive of 
pspnet_resolver_stub_weak | .a | Static Library archive of 
pspnet_stub | .a | Static Library archive of 
pspnet_stub_weak | .a | Static Library archive of 
pspnet_upnp_stub | .a | Static Library archive of 
pspnet_upnp_stub_weak | .a | Static Library archive of 
pspspecs_1 | N/A | 
pspspecs_2 | N/A | 
rtc_stub | .a | Static Library archive of 
scejpeg_stub | .a | Static Library archive of 
scejpeg_stub_weak | .a | Static Library archive of 
usb_stub | .a | Static Library archive of 
usbacc_stub | .a | Static Library archive of 
usbacc_stub_weak | .a | Static Library archive of 
usbcam_stub | .a | Static Library archive of 
usbcam_stub_weak | .a | Static Library archive of 
usbgps_stub | .a | Static Library archive of 
usbgps_stub_weak | .a | Static Library archive of 
usbmic_stub | .a | Static Library archive of 
usbmic_stub_weak | .a | Static Library archive of 
usbser_stub | .a | Static Library archive of 
utility_stub | .a | Static Library archive of 
vaudio_stub | .a | Static Library archive of 
vaudio_stub_weak | .a | Static Library archive of 
wlan_stub | .a | Static Library archive of 


---
## Linker (ld) Scripts (/lib/ldscripts)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ldscripts</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
elf32elmip | .x, .xbn, .xc, .xn | 
prx | .xr | 




---
# Samples (/sample)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/sample</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **net** - 
* **mpeg** - 
* **avi** - 
* **fileio** - 
* **face** - 
* **hash** - 
* **deflt** - 
* **module** - 
* **fmac** - 
* **ccc** - 
* **png** - 
* **guideline** - 
* **usb** - 
* **profiling** - 
* **tips** - 
* **np** - 
* **kernelutils** - 
* **font** - 
* **rand** - 
* **jpeg** - 
* **graphics** - 
* **sound** - 
* **dvdumd** - 
* **tool** - 
* **player** - 
* **utility** - 
The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
PSP Samples | .sln | 


