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

