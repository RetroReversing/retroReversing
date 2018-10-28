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
I previously used a build from `ultra64.ca` cut couldn't get it to work, then found this youtube video by `Alpha Tango Video
` which contains a pre-built version that comes with Make/MIPS64 GCC etc so I found that much easier to use. Video is: [Installing the Nintendo 64 Development Kit in Windows 2000/98SE and building sample roms - YouTube](https://www.youtube.com/watch?v=84wk0mZ8gfM)

## Step 2 - Run the installers through WINE
Extract the ISO from Step 1 and run the following in bash:
```bash
wineconsole install.bat
```

This should open lots of installers, one after another similar to the youtube video but running in `WINE`.

## Step 3 - Find the Install location
This will depend what version of WINE and which platform, I was using MacOSX so my C:/ drive location was:
```
~/.wine/drive_c/
```


# Linker Issues

# Error linking 32-bit code with 64-bit code
If you get the following error:
```
ld: Z:\Users\username\temp_c\ultra/usr/lib\libgultra_d.a(rmonbrk.o): linking 32-bit code with 64-bit code
```

---

# Official Nintendo SDK Documentation
* http://level42.ca/projects/ultra64/Documentation/man/n64man/misc/search.html 
