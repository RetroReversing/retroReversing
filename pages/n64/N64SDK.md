---
layout: post
tags: 
- n64
- sdk
title: Official Nintendo 64 SDK
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 SDK.jpg
permalink: /n64-sdk
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Nintendo 64 Software Development Kit
    url: #
recommend: n64
editlink: /n64/N64SDK.md
updatedAt: '2020-08-09'
twitterimage: https://www.retroreversing.com/public/N64/N64 SDK.jpg
---
This post covers the Official Nintendo 64 Software Development kit that was sent to developers is actually split among a number of different discs due to its size.

These Discs include:
* N64Kit - Applications used for N64 development
* N64 OS - The SDK files (includes, libraries etc)
* Nintendo 64 Sound Tools - Tools for Musicians
* Documentation

# N64Kit CD (N64 Developers Toolkit)
The N64 Developers toolkit contained all the following applications used for N64 Development:
* ccbl - Color Combiner and Blender N64 code
* DPTEST  - PC application to communicate with ccbl
* DDTools
* HVQ/HVQM - Imge and Video compression
* Monegi Multi Viewer64
* NIFF
* NuSYSTEM
* N64 Disk Drive Multi File System (MFS)

The CD contains a PC and SGI folder, with the SGI folder simply containing a tar archive of all the contents.

On Windows a **Setup.exe** file was included that is installed into `C:\nintendo\n64kit` and contained pre-compiled executables for all of the main applications.

## Known Versions of N64Kit
Latest Version: **5.2**

Released Versions: **3.0**, **4.0**, **4.1**, **5.0**, **5.1**, **5.2**

{% include link-to-other-site.html url="" description="N64kit was distributed to developers in the form of CDs, Ultra64.ca has full CD ISOs of versions 3.0->5.2." image="https://ultra64.ca/wordpress/wp-content/uploads/2020/02/Nintendo_64_Developers_Toolkit_v4.0.jpg" title="Download N64Kit from ultra64.ca"  %}


Version 5.1 (10th Feb 2000) of the kit was partially released in the BroadOn archive leak of May 2020 due to its use in the iQue player development.

## ccbl - ColorCombiner and Blender Demo
This is an application that runs on the Nintendo 64 hardware to teach programmers about the RDP features. It has the ability to communicate with a Windows Application called `dptest` for which the source code is also available.

## dptest - Display Processor Test tool
Windows application that communicates with the N64 application `ccbl` to save and load configurations.

It works with a number of different N64 development flash cartridges such as:
* MSP-A/MSP-B/MSP-C
* Partner-N64
* IS-Viewer64

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Files" date="Files in the dptest folder" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="dptest.exe" desc="Main application for communicating from PC to N64"></div>
      <div class="rr-info-gen" badge="TargetN64.dll" desc="DLL for communication between flash cartridge and the PC "></div>
 <div class="rr-info-gen" badge="KMCCtrl.dll" desc="DLL for communication through the KMC Partner N64 flash cartirdge" ></div>
 <div class="rr-info-gen" badge="dptest.n64" desc="Compiled N64 rom of CCBL that communicated with dptest" ></div>
    </ul>
</div>

---
## HVQ - Image & Video compression
<section class="postSection">
  {% include sticker-text.html text="HVQ" color1="#ef548f" color2="#ef8b6d"  %}

 <div markdown="1">
  The Hybrid Vector Quantization (HVQ) algorithm is an effective form of image compression for low bit rate images and can out perform JPEG by between 10 and 20%.

This allowed developers to compress their textures down and allow much more data to be stored on the limited cartridge space provided by the Nintendo 64.

  Also since videos are just a collection of images there is a variant of the algorithm called **HVQM** that compress video content. This folder contains code for both the image and video compression tools.

  If a game used the HVQ algorithm they were required to show a logo which was contained in the `HVQlogo` folder.

  The source code suggests that the algorithm may have been written by Hudson.
 </div>
</section> 

### hvq2enc
This folder contains a pre-built Windows executable called `hvq2enc.exe` for compressing BMP or PPM images into HVQ encoded images.

There is also a version of this tool for video content called `hvqm2enc.exe`which supports converting uncompressed AVI files to compressed HVQM2 files.

### libhvq2
libHVQ2 is the main static library used to decompress static images (for movies see **libhvqm2**) on the Nintendo 64. The source code for the library itself is not provided in the SDK, but the header files and the  static library files (including RSP microcode) are included along with some pretty decent documentation.

There are two methods of decompressing the data, one is purley CPU using just functions in the static library.

The other uses the CPU to decode half of the data then passes it over to the RSP microcode to do the rest, saving CPU time.

Filename | Description
---|---
GUIDE.txt | Tutorial for using both the CPU and RSP versions
rspcode/hvq2sp2.o | RSP Microcode to decompress the intermediate image to 32-bit image data
rspcode/hvq2sp1.o | RSP Microcode to decompress the intermediate image to 16-bit image data
FUNCTIONS.txt | Documentation for each function in the lbirary
lib/HVQ2File.h | Contains the HVQ2Header structure for parsing the data header
lib/libhvq2.a | The main static library that must be linked to use HVQ functionality
lib/HVQmd.h | N64 version of the Machine Dependent (MD) definitions.
lib/hvq2dec.h | Header file for all the functions and main structures in the library
README.txt | Overview of the folder contents


### nuHvq - Nintendo Ultra HVQ
NuHVQ is a Nintendo 64 sample project provided by **Monegi Corporation** to demonstrate loading HVQ compressed images on the N64 via the NuSystem API.

This is a higher level version of the code presented in the sample folder, which essentially does the same thing but without NuSystem.

This example seems to have been forked from the **nu4** sample code as it includes the same music and code.

### sample - Sample code for N64
This folder contains the bare-bones implementation of a N64 image viewer for images compressed with HVQ. This does not use the NuSystem API so it is lower level than the nuHvq sample but provides similar functionality.

Filename | Description
---|---
hvqwork.c | Variable setup for memory used by HVQ2 RSP microcode
sample.hvq | Sample Image compressed with HVQ
Makefile | Standard Makefile for building sample
system.c | Implements the standard boilerplate code such as **mainproc**
spec | Standard ROM spec file but notably includes the "sample.hvq" image as a segment
cfb.c | Just contains the CFBPix Frame Buffer
main.c | Contains the sample specific logic to load the HVQ image
README.txt | Brief overview of how to use the sample
system.h | Header file for all the definitions from **main.c**
hvqbuf.c | Simply defines the HVQ buffer where the image is read into

---
# N64 Operating System
The N64 OS was initially released with both SGI and PC versions on the same disc, later it was moved to a disc for each operating system.

On Windows it was installed into `C:\Ultra\usr` and used a UNIX-like directory structure containing the following folders:
* include - C Source code Header files
* lib - compiled static libraries for N64
* sbin - a few custom command line tools
* src - Source code for Demo applications and the libultra and libnaudio libraries

## Known Versions
Latest Version: **2.0L**
Released Versions: **2.0J**, **2.0K**, **2.0H**, **2.0L**
