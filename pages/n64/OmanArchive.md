---
layout: post
tags: 
- n64
- sdk
- leak
title: Oman Archive
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 Oman Archive.jpg
permalink: /oman-archive
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Oman Archive
    url: #
recommend: n64
editlink: /n64/OmanArchive.md
updatedAt: 25th April 2020
---

The "Oman Archive" was a leak of Nintendo Technical documents from a source inside SGI in late 1999. It was uploaded to the internet under the name `oman.rar` but has since been repackaged into multiple other archive formats.

Even the origin of the name itself is clouded in mystery with some saying it was leaked by a person called Oman and others disagreeing, but very little information is known about the leak.

It is believed that the archive kickstarted the N64 Emulation development scene and that without it we wouldn't have made much of the early progress in figuring out how the hardware worked [^1].

However the problem with the Oman archive is that the contents were obtained illegally and thus any development based on the stolen content would be liable for copyright infringement.

Thus many talented N64 emulator authors refuse to use the material and instead reverse engineer the inner working of the system themselves. This prevents the code (and the resulting binary) from any patent/copyright/trademark violations, but requires a lot of time and patience. So we are thankful for all these dedicated developers, helping maintain the codebase in a way that prevents distribution of N64 emulators from becoming illegal [^2].

If you plan to do any N64 development then stay as far away from the Oman Archive as you can, including leaving this page...

However historically these documents are very interesting and preservation of the material is vital. So even if the originally material disappears from the internet forever (unlikely but not impossible) lets at least clear up a few misconceptions by asking: What exactly IS in the Oman archive?

---
# Top Level files
Like most leaks there are a bunch of misc files at the root of the archive that are not always particularly relevant. This section will try to categorised them as best we can.

## SN64 SDK Files
These documents are all from February 1997 and really should have been in a folder called N64Win95 or Sn64 as they all come from the same product, maybe it was a copy error by the original author of the leak.

They are from a development kit by `SN Systems` known as `SN64` and this was the Windows 95 version of the SDK. SN64 is just the brand name of the Nintendo 64 versions of SN Systems `PSYQ` development kit that also supported Playstation and Saturn consoles. 

This made it a really popular choice for 3rd party game developers as it was slightly easier to port code between the consoles using the SDK.

{% include link-to-other-post.html post="/sn64-sdk-sn-systems" description="If you are wondering what these files do check out our page on the SN64 SDK." %}

All of the files in the root directory up to and including `N64NOTES.TXT` (9th March 1997) are from this SN64 SDK. The other top level files are listed separately below.

## tmp file
Although the file simple called `tmp` looks like a linux directory it is in fact an ASCII Text file that is the output of running a directory command on their `E:\oman\DOC` folder.

## AUD.c
A C-source file that must have been misplaced, not sure exactly where it came from but it was created by SGI in 1994. The same file exists in `TOOLS\EMULATE\AUD.C` so it must have been copied by accident to the top level directory.

## docs.zip
This contains a subset of the files from the `/DOC` folder and they are all identical in contents to those files too. This zip can be ignored and you can go straight to the `/DOC` folder.

## INSTD.tar
This TAR archive contains the N64 SDK version 2.0G (for RCP 2.0) for use on an IRIX Unix machine, to install just copy the 2 folders (var and usr) to the root of your SGI IRIX.

Also note that these files also exist extracted in the root directory of the main tar file.

## usr folder
The files in this tar are part of the standard N64 SDK so will not be covered here as they have been covered multiple times elsewhere.

### tmp folder
The tmp folder is blank and contains no data, it should not have been included in the archive.

### var/inst folder
IRIX machines comes with a command called `inst` used for installing software distributed by SGI [^3]. 

The program saves the details of everything that has been installed in the `/var/inst` folder, and so the SDK comes with a few files used by the inst program when listing what is installed:

Name | Description
---|---
rsp_dev | Install record for `Nintendo 64 RSP Development Environment 2.0G`
ultra | Install record for `Ultra 64 Development Environment, 2.0G`
rsp_audio | Install record for `Nintendo 64 RSP Audio Microcode Source Code 2.0G`
gng_noship | Install record for `Ultra 64 Noship Go/No-go Test Software 2.0G`
rsp_gfx | Install record for `Nintendo 64 RSP Graphics Microcode Source Code 2.0G`
hist | History file for IRIX inst command
.rqsfiles | standard file on all IRIX machines that have inst command
orphan | standard file on all IRIX machines that have inst command
.machine_inventory | Holds metadata about the current machine
INSTLOG | Log file from the last time the inst command ran

### var/sysgen/master.d folder
The folder `var/sysgen/master.d` on an IRIX system is used by the `lboot` command to define the master files for the bootable kernel. In this case it just contains one file called `u64` for the show N64 SDK.

Master files are basically configuration for all the modules on an IRIX system and can be viewed using the `master` command [^4].

---
# AS Folder (Algorithm Simulator)
The folder called `AS` is at the top level and contains a brief README saying that this folder contains a C program that begins to model the algorithms and functionality of the MSP and MDP (presumably the RSP and RDP).

The Algorithm Simulator was used before the N64 hardware prototype was available to develop on and allowed developers to get a head start on their games.

The folder contains:
* *.c C source code
* *.h C header files
* *.o compiled version of the *.c files
* *.RGB - Textures
* *.I - 3D object files

---
# COSIM Folder (Co-Simulation)
The `Cosim` folder contains C and Assembly source code used to test the hardware including testing the early Verilog model for "Project Reality".

Co-Simulation is using software to verify and test simulated hardware, in this case it is testing the N64 development hardware with a few basic software tests [^5].

---
# HW & HW2 Folders (Hardware Verilog Models)
Verilog is a Hardware Description Language used to Design and verify hardware. The HW and HW2 folders contain Verilog descriptions for the Nintendo 64 hardware, including the prototype development boards.

---
# References
[^1]: [Why did N64 emulation hit a reef? : emulation](https://www.reddit.com/r/emulation/comments/6leedm/why_did_n64_emulation_hit_a_reef/) 
[^2]: [/vg/ - Emulation General /emugen/ - 4chan](https://yuki.la/vg/67102961)
[^3]: [inst - IRIX](https://nixdoc.net/man-pages/IRIX/man1/inst.1.html)
[^4]: [master - IRIX](http://nixdoc.net/man-pages/IRIX/man2/man4/master.4.html)
[^5]: [HW/SW CoSim](http://www.frobnotz.com/cosim/cosim.html)
