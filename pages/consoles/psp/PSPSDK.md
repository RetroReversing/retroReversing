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
* Version 1.5.0 (psp_full_sdk_JSR) from 2005
* Version 6.6.0 (psp_sdk_660) from 2011

This page will document the latest release version 6.6.0 as it is the most complete. The 1.5.0 JSR version only contains the files that get installed to **C:\usr\local\psp\devkit** on windows. 

Wheras the more complete version also contains the ProDG installers and additional documentation.

## What was included in the SDK?
Later versions of the SDK included the ProDG development kit provided by SN Systems, which provided a way to compile PSP games using Visual Studio 2005/2008/.NET as an alternative to the Cygwin (unix like) development environment provided in the rest of the SDK.

For information on the ProDG SDK we have a seperate post:
{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information check out this post." %}

---
# Documentation (/Docs)

<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Docs</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **SNTools** - Documentation on SN Systems ProDG Tools
* **ConferenceContent** - Password protected slides from conferences in 2005 in both English and Japanese
* **TRC** - Technical Requirements Checklist - It contains important rules and restrictions for creating master discs for PSP games
  </div>
</section>  


The contents of the **SNTools** folder will not be discussed in this post as we have a sepeate page for all the SN Systems ProDG SDk information:
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

 We casn't open these files as they are protected by a password and thus can't describe what is in them.

  </div>
</section>  

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
Seminar2005-02_VFPU-Japanese | .pps | 
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
  </div>
</section>  

One of the test cases makes sure that all games that get published do not contain debug symbols unfortunetly:

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
  </div>
</section>  

Developers were free to use all the PGF files that are contained in this archive file via "libfont," which is included in PSP Runtime Library 2.0.0 or later.

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PgfContentsTable-English | .pdf | A single page table of the details of fonts for distribution (1.0.0), NewRodin Pro Latin and Matisse Pro Latin
PgfContentsTable-Japanese | .pdf | Japanese version
PgfContentsTable-Korean | .pdf | Korean version
Readme_PgfArchives-English | .txt | Brief details on the files located in this folder
Readme_PgfArchives-Japanese | .txt | Japanese version
Readme_PgfArchives-Korean | .txt | Korean version

---
# Cygwin Software Development Kit (/devkit)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

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
* **contrib** - A Photoshop plugin for the GIM texture format
* **flash** - 
* **tips** - 
* **tool_flash** - 
* **htool_updater** - Update for the PSP Tool hardware
* **data** - 
* **tool** - 
* **setup** - Hardware Tool instruction manual
  </div>
</section>  

The files in this folder are described in the table below, I have removed the japanese and korean versions to avoid duplication:

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
 This folder contains...

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
## Psp-utils binaries (/bin)
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
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
binary2elf | N/A | 
dsdcons | N/A | 
dspcons | N/A | 
dspkill | N/A | 
dspmcons | N/A | 
dspreset | N/A | 
dspstat | N/A | 
dsptun | N/A | 
dstdb | N/A | 
dsxfilesv | N/A | 
dsxlist | N/A | 
dsxping | N/A | 
dsxstart | N/A | 
enlargeprx | N/A | 
prx-version-off | N/A | 
prxinfo | N/A | 
psp-addr2line | N/A | 
psp-ar | N/A | 
psp-ar-util | N/A | 
psp-as | N/A | 
psp-c++ | N/A | 
psp-c++filt | N/A | 
psp-cpp | N/A | 
psp-g++ | N/A | 
psp-gcc | N/A | 
psp-gcov | N/A | 
psp-gnu-strip | N/A | 
psp-gprof | N/A | 
psp-ld | N/A | 
psp-nm | N/A | 
psp-objcopy | N/A | 
psp-objdump | N/A | 
psp-path-setup | N/A | 
psp-prver | N/A | 
psp-prx-strip | N/A | 
psp-ranlib | N/A | 
psp-readelf | N/A | 
psp-selcomment | .rb | 
psp-size | N/A | 
psp-strings | N/A | 
psp_boot_packager | N/A | 
pspbin2elf | N/A | 
pspexportpickup | N/A | 
pspfixup | N/A | 
pspgcsection | N/A | 
psplibgen | N/A | 
pspprofutil | N/A | 
pspsplitoverlay | N/A | 
pspuidfnkeygen | N/A | 


---
### Windows psp-utils (/bin.windows)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin.windows</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
binary2elf | .exe | 
dsbloadp | .exe | 
dsdcons | .exe | 
dspcons | .exe | 
dspkill | .exe | 
dspmcons | .exe | 
dspreset | .exe | 
dspstat | .exe | 
dstdb | .exe | 
dsxlist | .exe | 
dsxping | .exe | 
dsxstart | .exe | 
enlargeprx | .exe | 
prx-version-off | .exe | 
prxinfo | .exe | 
psp-ar-util | .exe | 
psp-prver | .exe | 
psp-prx-strip | .exe | 
psp_boot_packager | .exe | 
pspbin2elf | .exe | 
pspexportpickup | .exe | 
pspfixup | .exe | 
pspgcsection | .exe | 
psplibgen | .exe | 
pspprofutil | .exe | 
pspsplitoverlay | .exe | 
pspuidfnkeygen | .exe | 

---
## GIM Photoshop Plugin (/contrib/tool/gimPhotoshopPlugin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gimPhotoshopPlugin</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a photoshop plugin for supporting the PSP texture format .GIM (Similar to the PS1 TIM format).

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GIM_Photoshop_Plugin_Overview-English | .pdf | 
readme_e | .txt | 
tgGimFormat | .8bi | 

---
## Data (/data)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/data</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **or_dict** - 
* **movie** - 
* **picture** - 
* **ccc** - 
* **model** - 
* **scene** - 
* **sound** - 
* **dvdumd** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Readme_English | .txt | 
Readme_Sample_Code_Data-Graphics-English | .txt | 
Readme_Sample_Code_Data-Movie-English | .txt | 
Readme_Sample_Code_Data-Sound-English | .txt | 

---
## Documentation (/document)
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
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
PSP_DevKit_6.6.0_Doc_Index_e | .pdx | Adobe Acrobat Portable Document Index file, index of the other PDF files
Readme-CHM-English | .txt | Lists the documentation available in CHM format
Readme-HTML-English | .txt | Lists the documentation available in HTML format
Readme-NP_Dev-Users_Guide-English | .txt | It contains documents that describe necessary information to develop a PlayStation Network enabled application
Readme-PDF-English | .txt | Change log of pdf document changes and how t use the .PDX file

We will only document the PDF version of the documentation files in this post as they are equal to the CHM and HTML versions.

### PDF Documentation (/document/pdf)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/pdf</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **movie** - 
* **debug_support** - 
* **network** - 
* **others** - 
* **fpu-vfpu** - 
* **guideline** - 
* **image_recognition** - 
* **still** - 
* **peripheral** - 
* **graphics** - 
* **overview** - 
* **sound** - 
* **kernel** - 
* **tool** - 
* **utility** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
NP-Product_Management_Guide_e | .pdf | 
NP_SMT_Matching2-Users_Guide_e | .pdf | 
NP_SMT_Portal-Users_Guide_e | .pdf | 
NP_SMT_TPPS-Users_Guide_e | .pdf | 
NP_SMT_TSSS-Users_Guide_e | .pdf | 


---
#### Debug_support (/document/pdf/debug_support)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/debug_support</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BSOD-Overview-English | .pdf | 
Dsnet-Client-English | .pdf | 
Dsnet_Command_Reference-English | .pdf | 
GPI_GPO-Reference-English | .pdf | 
Profiler-Reference-English | .pdf | 
USB_Serial-Overview-English | .pdf | 
USB_Serial-Reference-English | .pdf | 


---
#### Fpu-vfpu (/document/pdf/fpu-vfpu)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/fpu-vfpu</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALLEGREX-Builtin_Function-Reference-English | .pdf | 
VFPU_Intrinsics-Overview-English | .pdf | 
VFPU_Intrinsics-Reference-English | .pdf | 
VFPU_Macro-Overview-English | .pdf | 
VFPU_Macro-Reference-English | .pdf | 
libfpu-Reference-English | .pdf | 
libvfpu-Overview-English | .pdf | 
libvfpu-Reference-English | .pdf | 


---
#### Graphics (/document/pdf/graphics)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/graphics</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
GE-Overview-English | .pdf | 
GE-Reference-English | .pdf | 
Graphics-Overview-English | .pdf | 
libgim_Picture-Overview-English | .pdf | 
libgim_Picture-Reference-English | .pdf | 
libgiq_Picture-Overview-English | .pdf | 
libgiq_Picture-Reference-English | .pdf | 
libgmo_Model-Overview-English | .pdf | 
libgmo_Model-Reference-English | .pdf | 
libgmq_Model-Overview-English | .pdf | 
libgmq_Model-Reference-English | .pdf | 
libgso_Scene-Overview-English | .pdf | 
libgso_Scene-Reference-English | .pdf | 
libgu-Overview-English | .pdf | 
libgu-Reference-English | .pdf | 
libgum-Overview-English | .pdf | 
libgum-Reference-English | .pdf | 
libgup-Reference-English | .pdf | 
libgxp_Packet-Reference-English | .pdf | 


---
#### Guideline (/document/pdf/guideline)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/guideline</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
CustomTheme-Packaging-English | .pdf | 
Custom_Theme-English | .pdf | 
InternetBrowser_ContentGuideline_Dev-English | .pdf | 
NP_Dev-Users_Guide_e | .pdf | 
PSN_Avatar-Guidelines_e | .pdf | 
PSP_PlayStation_Store_Content-Guidelines-English | .pdf | 
Readme-CustomTheme-Packaging-English | .txt | 
Readme-CustomTheme_CreationGuideline-English | .txt | 
Readme-InternetBrowser_ContentGuideline_Dev-English | .txt | 
Readme-PlayStation_Store_ContentGuideline-English | .txt | 


---
#### Image Recognition (/document/pdf/image_recognition)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/image_recognition</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
libface-Overview-English | .pdf | 
libface-Reference-English | .pdf | 


---
#### Kernel (/document/pdf/kernel)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/kernel</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Cache-Overview-English | .pdf | 
Cache-Reference-English | .pdf | 
IO_File_Manager-Reference-English | .pdf | 
Interrupt_Manager-Reference-English | .pdf | 
Kernel-Overview-English | .pdf | 
Loadexec-Reference-English | .pdf | 
Module_Manager-Reference-English | .pdf | 
Stdio-Reference-English | .pdf | 
System_Memory_Manager-Reference-English | .pdf | 
Thread_Manager-Reference-English | .pdf | 
Types-Reference-English | .pdf | 
libheap-Overview-English | .pdf | 
libheap-Reference-English | .pdf | 


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
#### Overview (/document/pdf/overview)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/overview</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Additional_Game_Data-Packaging-English | .pdf | 
Compiler-Overview-English | .pdf | 
ContentInformation-Check-English | .pdf | 
Downloadable_Game-Notes-English | .pdf | 
Downloadable_Game-Packaging-English | .pdf | 
Game_MasterDisc-Users_Manual-English | .pdf | 
PSP_Setup_Guide-English | .pdf | 
PSP_System_Overview-English | .pdf | 
Patch-Overview-English | .pdf | 
Patch-Packaging-English | .pdf | 
Programming-Overview-English | .pdf | 


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
  </div>
</section>  

The files in this folder are described in the table below:

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
  </div>
</section>  

The files in this folder are described in the table below:

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
  </div>
</section>  

The files in this folder are described in the table below:

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
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
VFPU-Instruction_Manual-English | .pdf | 
VFPU-Users_Manual-English | .pdf | 


---
## Flash (/flash)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/flash</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories which each just contain a single **EBOOT.PBP** file :
* **downgrade_DTP_H1500** - 
* **update_DTP_H1500** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
English-Notes_on_using_the_updater | .txt | 
Japanese-Notes_on_using_the_updater | .txt | Japanese version of the notes
Korean-Notes_on_using_the_updater | .txt | Korean version of the notes

---
## Htool_updater (/htool_updater)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/htool_updater</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains an update binary and license files for the PSP Hardware Tool Development Kit.

This folder also contains the following sub-directories:
* **license** - contains a single text file per langauge (English, Japanese, Korean) for the license file **psptool_license_e.txt**
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
htool_updater-660-A | .bin | Firmware update for the PSP Tool

---
## Include Headers (/include)
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
  </div>
</section>  

The files in this folder are described in the table below:

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
### Deci2p Headers (/include/deci2p)
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
### GIM Image Format Headers (/include/gim)
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
### Giq Headers (/include/giq)
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
### Gmo Headers (/include/gmo)
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
## Static Libraries (/lib)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/lib</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **ldscripts** - 
  </div>
</section>  

The files in this folder are described in the table below:

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
### Linker (ld) Scripts (/lib/ldscripts)
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
## Module (/module)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/module</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
libadler | .prx | 
libbase16 | .prx | 
libbase32 | .prx | 
libbase64 | .prx | 
libccc | .prx | 
libdeflt | .prx | 
libface | .prx | 
libfont | .prx | 
libfpu | .prx | 
libheap | .prx | 
libmd5 | .prx | 
libmt19937 | .prx | 
libpsmfplayer | .prx | 
libpuny | .prx | 
libqpcode | .prx | 
libsfmt11213 | .prx | 
libsfmt1279 | .prx | 
libsfmt132049 | .prx | 
libsfmt19937 | .prx | 
libsfmt216091 | .prx | 
libsfmt2281 | .prx | 
libsfmt4253 | .prx | 
libsfmt44497 | .prx | 
libsfmt607 | .prx | 
libsfmt86243 | .prx | 
libsha0 | .prx | 
libsha1 | .prx | 
libsha224 | .prx | 
libsha256 | .prx | 
libsha384 | .prx | 
libsha512 | .prx | 
psmf | .prx | 
pspnet_ap_dialog_dummy | .prx | 
scan | .prx | 
show_macaddr | .prx | 


---
## Sample (/sample)
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
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Makefile | N/A | Used to build the source code in the folder (run make)
PSP Samples | .sln | 


