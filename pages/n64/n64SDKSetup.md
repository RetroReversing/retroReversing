---
layout: post
tags: 
- n64
- intro
- sdk
- tutorial
title: Official N64 SDK Setup (MacOSX/Linux/Win)
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64SDKSetup.png
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
updatedAt: '2019-01-02'
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

## Step 4 - Setup the environment Variable
First go to directory: `~/.wine/drive_c/nintendo` and run the following command in bash:
```bash
wineconsole N64.BAT
```
This will setup all the environment variables, note that I got an error saying 
```
Can't recognize '' as an internal or external command, or batch script.
```
This is just because of the line endings being different you can ignore it.

## Step 5 - Try to Compile a sample..
In the same wineconsole that you opened in step 4 (as it now has all the environment variables setup in that console), cd to `C:\nintendo\n64kit\nusys\sample\nu0` and run make....

You will notice that absolutely nothing happens, this is because all the executables are 16-bit and Wine doesn't support them. So since we want to run it as a 32bit application we need to use a tool called `exew32.exe` which comes with the package, to use it run this in the same wineconsole shell:
`exew32 make`

This will create a `.n64` rom but I have always found I need to change the file extension to `.z64` for emulators as it is technically in that format.

# Linker Issues

# gspF3DEX2.fifo.o File not found
If you get the following error:
```
c:/ultra/gcc/mipse/bin/ld.out: cannot open c:\ultra/usr/lib/PR/gspF3DEX2.fifo.o: #2 File not found
```
For some reason some of the libraries have been renamed instead of `.fifo` they have `_fifo`, you will need to rename these as a batch.

---

# Official Nintendo SDK Documentation
* http://level42.ca/projects/ultra64/Documentation/man/n64man/misc/search.html 
