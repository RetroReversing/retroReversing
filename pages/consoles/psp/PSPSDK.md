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
* **1st_read** - The documentation
* **bin** - Binary Executables for compiling/building in both cygwin and linux
* **htool_updater** - 
* **module** - 
* **include** - 
* **setup** - 
* **document** - 
* **bin.linux** - 
* **contrib** - 
* **flash** - 
* **sample** - 
* **tips** - 
* **lib** - 
* **bin.windows** - 
* **tool_flash** - 
* **data** - 
* **tool** - 
* **src** - 
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Install_e | .bat | Windows Batch file for running 
Install_j | .bat | Windows Batch file for running 
Install_k | .bat | Windows Batch file for running 
Readme-English | .txt | 
Readme-Hardware_tool_Kernel_Update_Binary-English | .txt | 
Readme-Hardware_tool_Kernel_Update_Binary-Japanese | .txt | Japanese version
Readme-Hardware_tool_Kernel_Update_Binary-Korean | .txt | Korean version
Readme-Japanese | .txt | Japanese version of the readme
Readme-PSP_Supplement_Font-English | .txt | 
Readme-PSP_Supplement_Font-Japanese | .txt | Japanese version
Readme-PSP_Supplement_Font-Korean | .txt | Korean version
Readme-PSP_Utils_Windows-English | .txt | 
Readme-PSP_Utils_Windows-Japanese | .txt | Japanese version
Readme-PSP_Utils_Windows-Korean | .txt | Korean version
Readme-Testing_tool_Kernel_Update_Binary-English | .txt | 
Readme-Testing_tool_Kernel_Update_Binary-Japanese | .txt | Japanese version
Readme-Testing_tool_Kernel_Update_Binary-Korean | .txt | Korean version


---
## 1st_read (/1st_read)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/1st_read</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Changes-English | .txt | 
Changes-Japanese | .txt | 
Flash_Update_Instruction_H1500-English | .txt | 
Flash_Update_Instruction_H1500-Japanese | .txt | Japanese version
Flash_Update_Instruction_H1500-Korean | .txt | Korean version
Flash_Update_Instruction_T1000-English | .txt | 
Flash_Update_Instruction_T1000-Japanese | .txt | Japanese version
Flash_Update_Instruction_T1000-Korean | .txt | Korean version
Hardware-Restriction-English | .pdf | 
Hardware-Restriction-Japanese | .pdf | Japanese version
Important_notice-English | .txt | 
Important_notice-Japanese | .txt | Japanese version
PSP_Setup_Guide-English | .pdf | 
PSP_Setup_Guide-Japanese | .pdf | Japanese version
Sample_List-English | .txt | 
Sample_List-Japanese | .txt | Japanese version


---
## Bin (/bin)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/bin</div>
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
dsptun | N/A | 
dstdb | .exe | 
dsxfilesv | N/A | 
dsxlist | .exe | 
dsxping | .exe | 
dsxstart | .exe | 
enlargeprx | .exe | 
kbooti | .bin | 
make_package_npdrm | , .exe | 
prx-version-off | .exe | 
prxinfo | .exe | 
psp-addr2line | N/A | 
psp-ar | N/A | 
psp-ar-util | .exe | 
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
psp-prver | .exe | 
psp-prx-strip | .exe | 
psp-ranlib | N/A | 
psp-readelf | N/A | 
psp-selcomment | .rb | 
psp-size | N/A | 
psp-strings | N/A | 
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
## Bin.linux (/bin.linux)
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
## Bin.windows (/bin.windows)
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
