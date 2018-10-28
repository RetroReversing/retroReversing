---
layout: post
tags: 
- n64
- intro
- sdk
- tutorial
title: Official N64 SDK Setup (MacOSX/Linux/Win)
thumbnail: /public/consoles/Nintendo 64.png
image: /public/consoles/Nintendo 64.png
permalink: /n64-sdk-setup
youtube: 84wk0mZ8gfM
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Official N64 SDK Setup (MacOSX/Linux/Win)
    url: #
recommend: n64
editlink: /n64/n64SDKSetup.md
---

# Introduction
The Official Nintendo 64 software development kit (SDK) was created by a partnership between Silicon Graphics (SGI) and Nintendo to be released with the development hardware produced by SGI and Intelligen Systems (IS).

The SDK was produced for 2 platforms, the first was IRIX which is a Unix os that runs on the SGI workstations, since these workstations were very expensive Nintendo also released the SDK software for PC (MS/Dos & Windows 95). 

# Setup on MacOSX and Linux
For this tutorial you will need WINE to run the N64 SDK windows pc executables on your OS. As far as I know this is the only way to run the official dev  kit unless there is an easier way to use the IRIX (SGI UNIX) executables that were also released.

I personally use CrossOver for Mac that comes with its own Wine.app, create a new Wine Bottle and you should be good to go.

## Step 1 - Download the SDK
You can find the official development kit multiple places online including `ultra64.ca`, for this tutorial we will be using Release 5.0, Released on the 4th August 1999 but any release should work.

## Step 2 - Run the installers through WINE
The intallers I ran were:
* `NINTENDO 64 SDK 5.0 (Installer) (CD-RIP)/pc/Setup.exe`
* `NINTENDO 64 SDK 5.0 (Installer) (CD-RIP)/OS2.0K/pc/N64OS20K_eng.exe`

In MacOSX I can right click the .exe file and click open in WINE.app.

## Step 3 - Find the Install location
This will depend what version of WINE and which platform, I was using MacOSX with CrossOver so ym C:/ drive location was:
```
/Users/alasdairmorrison/Library/Application Support/CrossOver/Bottles/MYBottleName/drive_c/
```
If you also use CrossOver for Mac make sure to change the `MYBottleName` to your own bottle name above.

## Step 4 - Install MinGW
Even although our native platform has its own make, to make it simpler we will just use MinGW for now, so download and install `mingw-get-setup.exe`. Later I will experiment with using the native `make` executable on MacOSX and Linux.

This step is required because unlike the PS1 SDK, the N64 SDK does not come with a 'make' executable pre-built.

---

# Official Nintendo SDK Documentation
* http://level42.ca/projects/ultra64/Documentation/man/n64man/misc/search.html 
