---
layout: post
tags: 
- gc
- leak
title: iQue Gamecube Leak (BB2)
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/gc/iQue gamecube.jpg
twitterimage: https://www.retroreversing.com/public/images/gc/iQue gamecube.jpg
permalink: /ique-gamecube/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gamecube
    url: /wii
  - name: iQue Gamecube Leak (BB2)
    url: #
recommend: 
- wii
- sdk
- gc
editlink: /gamecube/iQueGamecube.md
---

# Introduction
In 2020 and 2021 numerous secret files have been leaked from Nintendo thanks to Zammis Clark. Included in these files were documentation and source code for an unreleased console for the Chinese market with the codename **BB2**. 

This is a sequel to the Nintendo 64 Based **iQue Player** that was released in China successfully.

This post will cover the **bb2.7z** archive leaked in July 2021.

#  iQue Gamecube Documentation (bb2.7z/doc)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/doc</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains leaked documents relating to the sequel to the Chinese iQue Player which plays N64 games and had the codename **BB**. 

Most of the implementation was completed by the Chinese company **BroadOn**, in fact it was almost ready for release, however it never made it to market.

The root folder contains an index.html file which can be opened in any webbrowser and gives links to all the internal sites related to BB2 such as the source code archive.

This folder also contains the following sub-directories:
* **ali** - Documentation about the Multimedia System on a Chip designed by T-Squares/ALi for use in the BB2 hardware
* **dv** - Design Validation documentation
* **dvd** - 
* **gamecube** - 
* **hardware** - 
* **infrastructure** - 
* **licensing** - Document outlining the costs of licensing DVD playback functionality for BB2
* **marketing** - Contains a really interesting Market Analysis by BroadOn and proposal for why BB2 will be a success (Games + DVD + karaoke)
* **online** - Documentation related to Online Gaming!
* **schedules** - 
* **security** - 
* **system_hw** - 
* **system_software** - 

  </div>
</section>  


---
## Ali Multimedia Engine SOC (/ali)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ali</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation related to the low level hardware for the Multimedia processor designed by T-Square Design (ALi) for use in project BB2.

ALi Corporation bought **T-Square Design** some time in 2004 and re-branded everything under their brand, so in some files you will see T-Squared and in newer files you will see ALi.

The company T-Square design (Also known as T2Design in the documentation) designed the **T630x** range of Multimedia System on A chip (SOC) but when they were bought by ALi they renamed this range to the **M630x** range.

The newer chips in the range were later named as the **335X** causing even more confusing, you will find documentation about all the different chips in this folder, but the main thing to remember is that they the resulting BB2 SOC contains features from all of them.

Ali Family of  **Networked DVD Multimedia Processor** chips:
* 6303/6304/6305/6306 - 2003 and earlier designed by T2-design
* 3355/3357 - 2003 newer versions of 630X range
* 3358 - The BB2 chip requested in 2004

The BB2 project initially choose to base the system on the **M3357** clocked as 200MHZ with MPEG 1,2,4 support, a PCI interface and hardware Variable Length Decoding (VLD).

In 2004 they requested the **M3358** which is a custom version of the **M3357** with a few changes such as a 32bit SDRAM width instead of 16bit width.

The SOC provides functionality for Audio (DSP) and Graphics (Display Engine) along with DVD playback, MP3 playback and Networking. It does this with a in-built  MIPS32 RISC-based CPU and a Digital Signal Processor (DSP).

The Display Engine (DE) supports both PAL and NTSC along with both interlaced and progressive scan modes! The Display Engine is split into two main parts the Video Post Processor (VPOST) and the Digital Video Interface (DVI).

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALi_Chip_Family | .html | HTML Document containing  a table of all the different chips in the ALi family such as the **6303** along with details such as their speed in Mhz and if it supports Variable Length Decoding (VLD) for MPEG.
ALi_Development_Team_for_N3358 | .html | HTML Document containing the names and numbers of everyone from T2 Design who was working on the N3358 Chip
ALi_SoC_Documents | .html | HTML Document containing links to all the other documents in this directory listed by category
DE_3357vs6304_feature_comp | .doc | Document containing a table of the differences between the 6304 chips and the 3357 chip
DE_M3357_PG_V15(ReleaseBO040409) | .pdf | Document containing the Display Engine M3357 Program Guide by T-square design
DSPLibrary_v0.30_030625 | .pdf | Document containing The Audio DSP library build as part of the M6304
M3357_AUDIO_PLL_spec(ReleaseBO040325) | .pdf | Document containing very low level details of a PLL based Clock generator
M3357_Audio_Spec_v131(ReleaseBO040323) | .pdf | Document containing Audio Specification such as the registers and how DMA works for Audio
M3357_DE_Specification_Ver_3.1(ReleaseBO040409) | .pdf | Document containing the Display Engine Specification
M3357_IDE_Spec(ReleaseBO040323) | .pdf | Document containing the specification for the IDE interface used by CD ROMs
M3357_MemController_Spec(ReleaseBO040329) | .pdf | Document containing the Memory Controller Specification (Aribter and ram_control)
M3357_ServoInterface_Spec(ReleaseBO040323) | .pdf | Document containing details on Servo, which is used to control the Motors and read head on the DVD drive
M3357_Spec(ReleaseBO040317) | .pdf | Document containing the full specification for the 3357 (Updated in 2004)
M3357_datasheet(ReleaseBO040421) | .pdf | Document containing details such as pin-outs and other diagrams showing the low level functionality
M3357_datasheet(ReleaseBO040423) | .pdf | Document containing a slightly more up to date version of the **M3357 datasheet**
M3357_datasheet20040412(ReleaseBO040414) | .pdf | Document containing yet another version of the **M3357 datasheet**
M3357_video_in_Specification_050(ReleaseBO040408) | .pdf | Document containing a specification of the interface for Video in, so it can take in a TV signal and display it picture in picture (November 2003)
M3358_Memo040316 | .ppt | Presentation talking about the M3358 chips and the differences from the previous M3357 (32bit sdram width instead of 16bit)
M3358_WorkMode | .doc | Document containing a list of all the different modes the SOC can be in such as **STANDBY_MODE**
M6306_JPGDec_Specification_V0.4_030627 | .pdf | Document containing details on a C/C++ library for decoding JPG images called **t2mpgdec**
M6306_SW_hwlibspce_rtl8139_v0.6.0_030821 | .pdf | Document containing details on the PCI Ethernet network card adaptor driver
M6306_net_fs_lib_v0.5_030701 | .pdf | Document containing details on a C/C++ library for network communication
M630X_SW_hwlibspce_eth_com_v0.6.1_030911 | .pdf | Document containing details on the PCI Ethernet communication interface
M630X_SW_hwlibspce_islpci_v0.6.1_030911 | .pdf | Document containing details for the mini-PCI ethernet interface
N3357 | .doc | Editable Word Document version of the M3357 specification document (it is a typo it being called N3357)
how_to_run_ali_sims | .txt | Text file containing details on how to run the Verilog files as a simulation of the ALi hardware
index | .html | HTML Document containing links to all the files in this folder organised into categories
m3357_Audio_pg(ReleaseBO040323) | .pdf | Document containing information on the T2-Audio CPU
m3357_tvenc_spec031209S(ReleaseBO040409) | .pdf | Document containing low level information on TV encoding for PAL and NTSC
vr4300 | .pdf | Document containing the specification of the NEC VR4300 used in the Nintendo 64 (not sure why it is here)

Official MIPS documentation can be found online without the need to download this leak, the files from MIPS located in this folder are:

File Name | Extension | Description
---|---|---
MIPS32INT-AFP-00.95 | .pdf | Introduction to the MIPS32 Architecture Document officially from MIPS
R4400_Uman_book_Ed2 | .pdf | The MIPS R4000 Microprocessor User’s Manual by Joe Heinrich
ejtag200 | .pdf | Document created by MIPS containing the EJTAG Debuging solution (can easily be found officially online)

Older Documentation by TSquare Design:

File Name | Extension | Description
---|---|---
platform_user_manual_T6306 | .pdf | Document containing the user manual for the T6306 System on a Chip
T2HW design flow | .pdf | Document containing flow charts for the process that the T2 team should use to design new hardware (quite interesting)
T2RISC1C_PROGRAM_GUIDE | .doc | Document containing early documentation from June 2003 about the T2 CPU based on the MIPS32 architecture
T2RiscInfo | .txt | Text file containing information about the T2 32bit RISC CPU and lists the incompatibilities with MIPS32
T2_Development_Team_for_N3357 | .html | HTML Document containing a table of all the people involved in the project for BB2 from T2 Design
T6304_SW_FSLIB_V0.51_030702 | .pdf | Document containing a C/C++ filesystem library called **T2STDIO** for the **T630X** series of chips
T6304_SW_OSLIB_V0.53_030714 | .pdf | Document containing details on the real-time multitasking OS called **TDS-se**
T6304_hw_DE_Driver_intspec_v103_030909 | .pdf | Document containing the Display Engine SDK documentation (very interesting)
T6304_hw_device_switch_v1.0_040315 | .doc | Document containing details on how the hardware switches mode for example switching between Network mode and DVD mode
T6304_sw_decifx_intspec_v125_030801 | .pdf | Document containing details on the Audio/Video Decoder C/C++ library
T6305_datasheet | .pdf | Document containing information from ALi about the T6305 Multimedia processor (can play dvds, mp3s etc) (May 2004)
T6306_DS_V1.1 | .pdf | Document containing the data sheet designed by T-Square for the **T6306** (October 2003)
TS072_platform_user_manual__v1.04_030908 | .pdf | Document containing tutorials with photos for how to use and debug the SOC hardware!

If you are interested in software development the most interesting file to read is the **T6304_hw_DE_Driver_intspec_v103_030909.pdf** as it defined the SDK to use the low level Display Engine in the chip.

if you are more of a hardware fan check out **TS072_platform_user_manual__v1.04_030908.pdf** as it has photographs of the hardware in use along with information on how it was used.

