---
layout: post
tags: 
- vita
- sdk
title: Official Sony Vita SDK
thumbnail: /public/consoles/Sony PS Vita.png
permalink: /official-vita-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation Vita
    url: /psp
  - name: Official Sony Vita Software Development Kit
    url: #
recommend: 
- sdk
- vita
editlink: /consoles/vita/OfficialSonyVitaSDK.md
---

# Introduction
A Torrent with 52.61GB of content was anonymously leaked online in May 2019 containing pretty much all the Official Playstation Vita Software Development Kit files.

It was split into 2 main folders:
* **PlaystationPartners** (1.54MB) Documentation for 
* **psvita** (52.60 GB) - the main SDK files

---
# PlaystationPartners (/PlaystationPartners)
The Playstation Partners folder is not particularly interesting, it is just legal information about becoming a registered Playstation Partner.

Size | Name | Notes
---|---|---
1.1M | PlayStation_GDPA_Japanese.pdf | PLAYSTATION GLOBAL DEVELOPER & PUBLISHER AGREEMENT (Japanese)
410K | PlayStation GDPA v1.03 (clickthrough).pdf | PLAYSTATION GLOBAL DEVELOPER & PUBLISHER AGREEMENT (English)
6.4K | PRIVACYPOLICY.TXT | Same as **TOS.TXT**
6.4K | TOS.TXT | The Terms of Service for Playstation Partners Registration Portal
586B | FAQ.TXT | PartnerHome Frequently Asked Questions such as GDPA questions


---
# Main PS Vita SDK (/psvita)
The Main PS Vita SDK folder has been neatly organized into a number of different categories which makes it much easier to just get the content you are interested in.

Name | Size | Notes
---|---|---
Docs | 993.71 MB | Contains all the documentation for the entire SDK in both English and Japanese
Software | 209.67 MB | Contains the SDK Manager along with the SN Systems DBS plus VC extensions
PUPs | 13.56 GB | Playstation Update packages for the DevKit and TestKit hardware from version 1.680 to 3.650
Engines | 4.79 GB | Contains the Unity, PhyreEngine and live2d Cubism SDKs
SDKS | 33.07 GB | Contains 3.300/3.500/3.550/3.570 SDKs plus the Photon PSVita SDK

---
## Software (/psvita/Software)

Name | Size | Notes
---|---
SDK_Manager-2_8_2.exe | 61M | 
SN-DBSv2.5.6.60.exe | 41M | 
SN-DBSv2.5.4.2.exe | 41M | 
SN-DBS-VC-Extension-2017v1.0.20.0.exe | 7.0M | 
SN-DBS-VC-Extension-2017v1.0.21.0.exe | 7.0M | 
SN-DBS-VC-Extension-2010v1.0.20.0.exe | 6.4M | 
SN-DBS-VC-Extension-2010v1.0.21.0.exe | 6.4M | 
SN-DBS-VC-Extension-2012v1.0.20.0.exe | 6.4M | 
SN-DBS-VC-Extension-2012v1.0.21.0.exe | 6.4M | 
SN-DBS-VC-Extension-2013v1.0.20.0.exe | 6.4M | 
SN-DBS-VC-Extension-2013v1.0.21.0.exe | 6.4M | 
SN-DBS-VC-Extension-2015v1.0.20.0.exe | 6.4M | 
SN-DBS-VC-Extension-2015v1.0.21.0.exe | 6.4M | 

---
## Docs (/psvita/Docs)
Most of the files are contained in the root of the Docs folder in an unorganized mannor, but there are two subfolders:
* PhyreEngine - Extracted content from **PhyreEngine_3.21.0.0_EnglishDocs.zip**
* TrainingVideos - contains an mp4 and flash videos about optimizing games for the Vita

Note that in the table below we have not included the Japanese files unless no english version exists, to avoid duplicate content.

Size | Name | Notes
---|---|---
215M | DevStation12_Programming_Slides.zip | 
130M | NGPGameDesignDay2011.zip | 
82M | VITA_DevCon_2011_Slides.zip | 
46M | PhyreEngine_3.21.0.0_EnglishDocs.zip | 
42M | DevStation12_Network_and_Submissions_Slides.zip | 
33M | DevStation12_Business_Slides.zip | 
15M | 24658.mp4 | 
13M | Vita_Network_Presentation_PDFs.zip | 
6.0M | VITA_Tuning_Workshop_2011_Slides.zip | 
3.7M | SystemSoftware_Themes_Overview_20141219.pdf | 
3.7M | Unity_logos.zip | 
2.6M | SN-DBS_Documentation-2.5.4-English.zip | 
2.5M | SN-DBS_Documentation_2.5.6-English.zip | 
2.0M | PS_Vita-TestCase_for_TRC1.7_e.pdf | 
1.1M | PS_Vita-TRC1.7_e.pdf | 
827K | PS_Vita_Testcase-1_7-CHM_En.zip | 
658K | PSN_Service_Setup-Guide_e.pdf | 
426K | In-game | 
412K | PS_Vita-TRC1_7-CHM_e.zip | 
166K | SCEE_Virtual_Currency_Policy.pdf | 
161K | SupplementarySubmissionForm-1_10-20121212.zip | 
159K | Cross-Title-Commerce.pdf | 
127K | SCEE | 
89K | Demo_to_Full_Game_Upsell.pdf | 
51K | SN-DBS_ReleaseNotes_e.htm | 
18K | SN-DBS-VC-Extension-2012-ReleaseNotes-E.htm | 
18K | SN-DBS-VC-Extension-2010-ReleaseNotes-E.htm | 
17K | SN-DBS-VC-Extension-2013-ReleaseNotes-E.htm | 
17K | SN-DBS-VC-Extension-2015-ReleaseNotes-E.htm | 
15K | SN-DBS-VC-Extension-2017-ReleaseNotes-E.htm | 
12K | faq.txt | 
7.4K | PSTVDev.txt | 

---
### Training Videos (/Docs/TrainingVideos)

This folder contains both English and Japanese training videos related to optimizing games for the Playstation Vita.

It contains a single MP4 video called **Lesson1.mp4** which lasts 6minutes and 38 seconds and talks about requesting and configuring Playstation Network (PSN) services for Vita games. It is quite an interesting video for people who have never seen the secret Vita Developer Network website (DevNet) that was only available to registered developers.

It also contains around 100MB zip files for Japanese and English flash content called **PS_Vita_Tutorial_Videos_SDK_1800_E.zip**.

These Videos are split into two sections with the following contents:
* Introduction
    * Setting up Your Development Environment
    * Controlling Development Kits
    * Battery Monitor, Controller Capture and Screen Capture
    * Performing Distributed Builds
* Razor
    * Capturing CPU Traces
    * Analyzing CPU Traces
    * CPU HUD
    * Exporting CPU Trace Information

---
