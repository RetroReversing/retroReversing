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
* **Logo** - 
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
psptestcases_forTRC50-Japanese | .pdf | Japanese version
ptrc52-English | .doc, .pdf | 
ptrc52-Japanese | .doc, .pdf | Japanese version
