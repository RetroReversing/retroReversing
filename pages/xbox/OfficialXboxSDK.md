---
layout: post
tags: 
- xbox
- sdk
title: Official Xbox SDK (XDK)
thumbnail: /public/consoles/Microsoft Xbox.png
image: /public/images/xbox/XboxSDK.jpg
permalink: /xbox-sdk-xdk
breadcrumbs:
  - name: Home
    url: /
  - name: Microsoft Xbox (Original)
    url: /xbox
  - name: Official Xbox SDK (XDK)
    url: #
recommend:
- xbox
- sdk
editlink: /xbox/OfficialXboxSDK.md
---
The Official software development kit for the original xbox was called the XDK (Xbox Development Kit). This was only provided to developers on their Xbox Developer Services website (xds.xbox.com) and not via CD/DVD.

This was mainly due to the frequency in which the XDK changes, new builds would be available very frequently, at least a couple every month. This was a stark contrast to the SDKs from the previous generation that would only have a handful of releases during the whole lifetime of the console.

Unsurprisingly the XDK requires Microsoft Visual Studio as the IDE and Microsoft Visual C++ compilers. This was very welcome by existing Windows PC developers and was considerably easier to use than the PS2 or Gamecube development environments.

# Publicly Leaked XDKs
The following versions of the SDK have been released to the public unofficially and can be found on sites like archive.org:
* XDK 4361 2002-03-01 (Accession)
* XDK 4627 2002-07-05 (WAM)
* XDK 5558 2003-06-12 (COMPLEX)
* XDK 5659 2003-08-27 (COMPLEX)
* XDK 5788 2003-11-24 (COMPLEX)
* XDK 5849
* XDK 5933 2005-03-22 (WAM)

---
# Cleaning up Previous installs
It is important to remove previous installs of the SDK and the installer actively checks the version number of an installed xdk and won't allow you to install prior versions.

## Registry keys
You need to remove the following registry keys using regedit on windows or wine:
```
HKEY_LOCAL_MACHINE\Software\Microsoft\XboxSDK

HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\Microsoft Xbox SDK
```
---
# Installing the XDK
Note that you MUST install Visual Studio 6.0 and apply Service Pack 4 and above (SP6 works) otherwise the XDK installer will not install the Samples, include or lib files so you will have an incomplete SDK!

## Step 1 - Install Microsoft Visual C++ 6.0
If possible try to download the following iso if you don't already have Visual C++:
`Microsoft_DevTools_January_2001_Visual_C++_6.0.iso`

## Step 2 - Apply the Service Pack
The XDK installer checks to see if your copy of Visual C++ is up to date with Service Pack 4, but any service pack later then that will also work. You can get the latest service pack 6 from the official Microsoft website:
[Download Service Pack 6 for Visual Basic 6.0, Visual C++ 6.0 with Visual Source Safe 6.0d from Official Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=9183)

## Step 3 - Install the Processor Pack
In early versions of the XDK such as `XDK4361` it comes with an installer called `Visual Studio Processor Pack`. Make sure to run this before installing the XDK.

## Step 3 - Run the SetupXDK.exe file
Run the SetupXDK executable and it will guide you through the rest of the installation process.

## Optional Steps
The following are optional installers that might be useful, you don't need these tools but they could come in helpful for debugging specific issues.

### Install Microsoft Network Monitor 2.0
Comes with XDK 4361. It is a tool for Network debugging, useful for debugging issues with online/lan games.

---
# Documentation
The documentation folder contains a few helpful files which we have listen in the table below with a brief description of its purpose, but the main documentation comes in the form of a CHM (Windows Compiled Help Format) file called `.chm`;

File Name | Notes
--- | ---
xboxwhitepapers.url | goes to `https://xds.xbox.com/BPProgInfo.asp?page=content/wp_index.htm`
xboxguide.url | https://xds.xbox.com/BPProgInfo.asp?Page=content/cert_req.htm
adadeded.xml | Seems to be an example Leaderboard xml document, something to do with xbox live leaderboards?
XboxSDK.chi | Compiled Help index for the CHM file

---
# Samples
If you had Visual C++ installed when you installed the SDK you will find a `Samples` folder under `Program Files/ Microsoft Xbox SDK` which contains example source code that can be compiled for the Xbox.

---
# Includes

---
# Libraries
