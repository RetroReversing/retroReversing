---
layout: post
tags: 
- gamecube
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
- gamecube
- sdk
editlink: /gamecube/iQueGamecube.md
---

# Introduction
In 2020 and 2021 numerous secret files have been leaked from Nintendo thanks to Zammis Clark. Included in these files were documentation and source code for an unreleased console for the Chinese market with the codename **BB2** (BroadOn Board 2). 

This is a sequel to the Nintendo 64 Based **iQue Player** that was released in China successfully although was later cracked and piracy flooded in.

According to RGDWiki it was to be called the **iQue Box** and development stopped due to the focus switching to the upcoming Wii project [^1].

There are no known images of any prototypes developed or any mock designs of the console case but we do have a few specifications:
* width: 12"
* depth: 8"
* height: 2.5"
* Material: UL94-V0 rated ABS plastic
* DVD Drive: Front loading, located near the right side of the console

This post will cover the **bb2.7z** archive leaked in July 2021.

## Common terms and Acronyms 
The documentation and source code for the BB2 hardware uses a lot of acronyms, so the ones that we know will be listed below: 
* AES - Advanced Encryption Standard
* AIS - Audio Interface Streaming (Bus)
* AVM - Audio Video Muxing (takes the audio and video from flipper and passes to ALi chip)
* CG - Chip-Global Control
* DC - Disc Crypto (Unit)
* GI - Gamecube Disk Interface (Replaces the MEI with a standard DVD drive)
* MC - Memory Crypto (Unit)
* MEI - Matsushita Drive (Custom Gamecube DVD drive)
* SK - Secure Kernel

---
#  iQue Gamecube Documentation (bb2.7z/doc)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/doc</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains leaked documents relating to the sequel to the Chinese iQue Player which plays N64 games and had the codename **BB**. 

Most of the implementation was completed by the Chinese company **BroadOn**, in fact it was almost ready for release, however it never made it to market.

The root folder contains an index.html file which can be opened in any web browser and gives links to all the internal sites related to BB2 such as the source code archive.

This folder also contains the following sub-directories:
* **ali** - Documentation about the Multimedia System on a Chip designed by T-Squares/ALi for use in the BB2 hardware
* **dv** - Design Validation documentation
* **dvd** - DVD ROM and the custom Nintendo NROM specification for Discs
* **gamecube** - 
* **hardware** - Documentation for each of the custom chips to be designed for the project by both BroadOn and ALi
* **infrastructure** - Documentation for how to use the CVS version control system
* **licensing** - Document outlining the costs of licensing DVD playback functionality for BB2
* **marketing** - Contains a really interesting Market Analysis by BroadOn and proposal for why BB2 will be a success (Games + DVD + karaoke)
* **online** - Documentation related to Online Gaming!
* **schedules** - Contains a project schedule spreadsheet that shows all the important dates to get the hardware designed, verified and entered into production
* **security** - Documentation about how the security system will work, mainly how it will prevent piracy
* **system_hw** - 
* **system_software** - Documentation about the software that will run on the Device (ALiRes and GeckoRes)

Each of these sub directories will be covered in the rest of the post.
  </div>
</section>  


---
## ALi Multimedia Engine SOC (/ali)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/ali</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation related to the low level hardware for the Multimedia processor designed by T-Square Design (ALi) for use in project BB2.

**ALi** Corporation bought **T-Square Design** some time in 2004 and re-branded everything under their brand, so in some files you will see T-Squared and in newer files you will see ALi.

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

Older Documentation by T-Square Design:

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

---
## Design Verification Documents (/dv)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/dv</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the documentation related to automated verification that the System on a Chip behaves as expected.

It mentions that they use the Incisive Coverage Technology (ICT) software produced by **Cadence Design** which tracks the code coverage for the low level verilog hardware source code.
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BB2 Verification Overview | .pdf, .ppt | Presentation first introducing BB2 and then talking about each hardware component and their respective verilog test bench
aes_dv | .htm | HTML Document containing details on how to verify the hardware for AES encryption/decryption of content such as games
bb2_dv_list | .html | HTML Document containing a list of all the different verifications grouped by component such as GI ROM/GI SRAM/GI PCI Unit/GI DI Unit/AIS
di_system_dv | .html | HTML Document containing details on how to verify the DI Bus (Disk Interface?)
hashblocks | .gif | GIF diagram showing SHA1 hash blocks
icttutorial | .pdf | Document containing a tutorial for how to use the ICT software by **Cadence Design**
ictuser | .pdf | Document containing the Incisive Coverage Technology User Guide created by **Cadence Design**
index | .html | HTML Document containing links to all the documents in this folder grouped by company e.g ATI/ALi
iosim | .html | HTML Document containing the changes made to the Input/Output Simulator since the original BB project (iQue Player)
iosim_func | .html | HTML Document containing the functions and macros available in the I/O Sim API
mc_dv | .htm | HTML Document containing notes on MC (Memory Card?) hardware verification
sha1_dv | .htm | HTML Document containing notes on the tests for SHA Hash support in hardware for content authentication

---
## Infrastructure (/infrastructure)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/infrastructure</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains information for how to use the CVS version control system to both checkout and checkin source code to the BB2 project. 

It also contains a standard MIPS document explaining how to use the EJTAG debugger but this document can be found online without downloading this leak.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
SourceImport | .html | HTML Document containing the steps required to import a new version into the CVS repository
cvstree | .html | HTML Document containing a guide for both windows and linux users for how to checkout the CVS repository
mips-ejtag-02.60 | .pdf | Document created by MIPS containing the EJTAG Debuging solution (can easily be found officially online)


---
## Licensing (/licensing)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/licensing</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a single **dvd_licensing.htm** document that lists all the different royalties that need to be paid in order to release a device with DVD playback support. This includes Dolby Digital which has a fee per channel used, the DVD CCA fee for playing DVDs that use the Content Scramble system and the different DVD patent pools like **DVD 6C**.

According to the document it costs on average 13 USD to 15 USB per DVD player! If you thought software patents were bad, hardware patents are even more costly.

This document is worth reading just to see the sheer cost of releasing hardware that requires DVD technology.

More information on DVD 6C is available here: [DVD6C PATENT POOL / FAQ](http://www.dvd6cla.com/faq.html)

  </div>
</section>  


---
## Marketing (/marketing)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/marketing</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the file **BB2-MRD.doc** which lists the marketing analysis that has been done so far and how that releases to releasing the BB2 product.

They list the main competitors as the Sony PS2 and also the Xbox that is available in Hong Kong, not to mention the problem with the government policy cracking down on console hardware.

They note that due to rampant piracy in the Chinese market it is very hard to make money on per-game releases, especially on the PC platform. So most income made from the Chinese gaming market is from online games such as League of Legends micro-transactions.

  </div>
</section>  

---
## Dvd (/dvd)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/dvd</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documentation for both the standard DVD-ROM format along with the Gamecube specific NROM format created by Nintendo. According to the documentation Nintendo confirmed that Gamecube games can tolerate a read speed of up to 250ms, but if you go as high as 300ms it causes major errors.

The plan was to create custom BB2 Discs that are more secure than the original Gamecube NROM format, potentially using the Content Scrambling System (CSS).

BroadOn wanted **ALi** to modify the System on a Chip (SOC) to allow reading the BB2 format NROM discs along with standard DVDs so it would need to support the custom lead-in Control Data Zone and the scramble initialisation. Not sure if it got far enough for ALi to implement this however.

It also contains brief information about the Content Scrambling System (CSS), so not sure if they were going to apply CSS to the custom NROM discs for the Chinese market.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BB2 DVD Disc Performance | .xls | Spreadsheet containing low level detailed comparisons of NROM such as Hashing Overhead, Stroke Length and Access Time
BB2 DVD Disc Performance Summary | .doc | Document containing table of differences between DVD and NROM speeds
Ecma-267 | .pdf | Document containing the official ECMA standard for 120 mm DVD ROM discs  (easily available online)
INF-8090 | .PDF | Document containing ATAPI DVD Device specification for the DVD Format written by the SFF Committee (easily available online)
dvdnrom | .html | HTML Document containing information about the differences between NROM and DVD formats

---
## Online (/online)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/online</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains an extensive document called **OnlineGaming.doc** which uses multiple sources to decide how best to create their own Online Gaming infrastructure. It has details on how the online play in gamecube games is implemented and more general information such as how matchmaking servers work. It is worth a read to get an overview of what 2004 online gaming was like from a game development perspective.

It also contains a link to Arnim Laeuger's USB to GBA adapter: [USB to GBA](https://web.archive.org/web/20021225065822/http://home.knuut.de/arnim.laeuger/usb_gba/usb_gba.html) and a link to **GBATEK** pages, but not sure what they had planed for the GBA, could it have been something to do with the Gamecube to GBA adapter? 

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
OnlineGaming | .doc | Document containing an overview of Online gaming Infrastructure
USBN96041 | .pdf | Document containing the specification by National Semiconductor for USB controller chip
index | .html | HTML Document containing links to the other two documents and a few other links to gba homebrew on the web


---
## BB2 Project Schedule (/schedules)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/schedules</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the spreadsheet **BB2-Schedule.xls** that surprisingly contains the schedule for the BB2 Project. The project start date was on the 30th January 2004 and the proposed production build start was to be 31st January 2005.

The spreadsheet was last updated on the 14th May 2004, this could be roughly the date where resources were moved from this project over to the upcoming Wii.

  </div>
</section>  

---
## Hardware (/hardware)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/hardware</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the low level hardware documentation for each of the custom chips that would make up the  Gamecube Disc Interface (**GI**) to be designed by BroadOn.

Also contains details about the Digital Video Input Interface (VI) to be designed by ALi as an enhancement to their **M3357** Multimedia Chip.

The Audio Input interface (**AI**) was to receive Audio from GC hardware and Mux it with the **M3357** Multimedia Chip, this chip was also to be designed by ALi.

The Audio Interface Streaming (AIS) unit is used to stream data from the drive to the Gamecube Flipper CPU.

To save cost the **M3358** SoC was to perform operations that are normally handled by separate components on the Gamecube motherboard these are:
* Disc Interface (DI)
* Servo (controls DVD mechanical hardware)
* TV Encoder
* Clock Generator

The most interesting part is how it all comes together utilising the original Gamecube Flipper and Gekko components with a new Multimedia Chip.
  </div>
</section>  

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is the architecture of the proposed iQue Box the sequel to the iQue Player. It mixes <a href="https://twitter.com/hashtag/Gamecube?src=hash&amp;ref_src=twsrc%5Etfw">#Gamecube</a> hardware such as Gekko and Flipper with a customised Multimedia processor M3358 created by ALi that handles clock generator, Disc/Video/Audio interfaces <a href="https://twitter.com/hashtag/Nintendo?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo</a> <a href="https://t.co/7L3C7GpTIf">pic.twitter.com/7L3C7GpTIf</a></p>&mdash; 🕹 RetroReversing.com - Reverse Retro Games 🕹 (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1421555084354334722?ref_src=twsrc%5Etfw">July 31, 2021</a></blockquote>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
3357+ Project Overview | .pdf, .ppt | A presentation given to ALi to suggest what needs to be modified in the ALi M3357 Multimedia Chip to add support for the Gamecube Interface
3358 Pinout | .doc, .pdf | Contains diagrams and lots of information about the 3358, not just pin-out info, worth reading
BB2 AI Spec | .doc, .pdf | Audio Interface specification which is used as an enhancement to the 3358 to allow taking in Audio from the Flipper Gamecube CPU
BB2 EJTAG Debugging | .doc, .pdf | Document outlining how to enable the EJTAG interface via NVRAM
BB2 Hardware Overview | .pdf, .ppt | A presentation which covers the BB2 console project as a whole
BB2 Issues | .xls | Spreadsheet containing the list of issues that are yet to be resolved for each of the components
BB2 VI Spec | .doc, .pdf | Document containing the Video interface design specification such as the low level timings and signals
BroadOn_SoC_Documents | .html | HTML Document containing links to each of the documents in this folder, this should have been called index.html
GI Interface Spec | .doc, .pdf | Document containing all the low level signals of the Gamecube Interface such as **alt_boot**
aes-unit | .html | HTML Document containing details on the AES unit which contains the Disc and Memory Crypto components for encrypting and decrypting data as it passes through the system
ais-unit | .html | HTML Document containing details on the AIS unit which moves 16bit samples from the AIS interface to the Flipper CPU
bb2-block | .gif | GIF Image of the integration between Gecko, flipper and the custom MCM by ALi (used in gi-arch.html)
bi-unit | .html | HTML Document containing details on the BI Unit which connects the PCI Bus to the GI unit.
dc-unit | .html | HTML Document containing details of the Disk Crypto (DC) unit which coordinates the SHA1, AES, PCI and DI to do complex memory decryption
di-unit | .html | HTML Document containing details on the Disk Interface (DI) for Flipper which is used to read data over the GI Buffer in a similar manner to how it would on a real gamecube
gi-arch | .html | HTML Document containing details of the Gamecube Interface (GI) as a whole
gi-block | .gif | GIF Image of the individual parts that make up the Gamecube Interface (SRAM, DI, AIS, SHA1, AES, PCI)
mc-unit | .html | HTML Document containing details of the Memory Crypto (MC) unit which is used for encryption, decryption and hasing of data in main memory
sec-ctrl | .html | HTML Document containing details about the Secure controller and the different modes it supports
sha1-unit | .html | HTML Document containing details of the SHA1 hardware unit which hashes data in GI SRAM

The files **BB2 Hardware Overview.pdf** and **3357+ Project Overview.pdf** are by far the most interesting file in this folder as it pretty much described the entire BB2 project and what each company (BroadOn/ALi) need to do.

**3358 Pinout.pdf** is also worth a look as it has some excellent diagrams that show how everything works together. The Gekko and Flipper hardware connect to the custom 3358 chip via DI/VI/AI/AIS and also use it as a clock generator.

---
## Security (/security)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/security</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains documents related to the security of the device and the content that will be played on it. This includes the RSA and ECC algortihms used and general notes for how to write secure code on both the client and network level.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Eccdesc | .htm | HTML Document containing the ECC algorithms used in the BB Player and how they were implemented (Poly Math and Elliptic Math)
Rsadesc | .htm | HTML Document containing  the RSA algorithm used and how it was implemented in the system
ac | .htm | HTML Document containing a proposal for Activation codes which are human readable and would be input by the players themselves
algorithms | .htm | HTML Document containing  a table of different crypto algorithms used in the BB Player and where they are used in the system, such as RSA, EC, ECDSA and Ring Validate
ctauth | .html | HTML Document containing the proposal for Content Authentication using a Ticket based system and Hierarchical Hashing
cthash-fig1 | .gif | GIF Diagram showing content authentication between the Drive and Disk interface (DI)
dvdcopies | .htm | HTML Document containing a list of companies that provide copy protection for DVD-9 Disks
netDataSecurity | .htm | HTML Document containing the requirements for secure network data processing on the BB2 device to protect both the player data and the Intellectual property
secure_coding | .htm | HTML Document containing a list of common secure coding practises such as buffer overflow protection

In **secure_coding.html** it mentions the Xbox Dashboard hack which used a buffer overflow on a loaded font (.xtf) file to trick the system into loading a 3GB data block into memory.

In **dvdcopies.htm** it mentions that **DCA Inc.** and **Sonopress** are the companies that master Original Xbox DVD disks.

---
## System Software (/system_software)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/system_software</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains details on the System Software that would need to be written for the system called the "Universal Player".

There were two CPU architectures that software had to be compiled to
* PowerPC (Gekko Gamecube Processor)
* MIPS32 (ALi Multimedia Processor)

The SDK used for developing the BB2 System software was split into 3 parts:
* **usr** - X86 libraries/binaries and include files for compiling on Windows/Linux
* **gc** - C/C++ Headers and Libraries to run on the Gamecube Gekko processor
* **soc** - C/C++ Headers and Libraries to run on the ALi System on a Chip

The files in this folder are described in the table below:
  </div>
</section>  


File Name | Extension | Description
---|---|---
alisys | .dia, .png | Diagram of the ALiRes resident software components that will be run on the custom ALi Multimedia Chip such as the main control loop and game launcher
bb2_definition | .doc, .html | Contains the definition of the product which is a Universal Plug and Play Gamecube compatible console with DVD and other media player that has secure rights management
build_env | .html | HTML Document containing details on how to build the software on both Windows and Linux
func_spec | .html | HTML Document containing the functional specification of the BB2 Software (Secure Mode, Secure Boot, AliRes, GekkoRes)
sk_entry | .html | HTML Document containing details on how to enable entry into the Secure Kernel for EJTAG debugging
sw_structure | .html | HTML Document containing details on how the two main software components that are resident in memory in each of the 2 CPUs GeckoRes and AliRes
sw_tasks | .html | HTML Document containing all the tasks that need to be completed on the software side (last updated 25th March 2004)

In the file **bb2_definition.html** it mentions that they has plans for two different versions of the hardware one for developing countries (iQue Version) and the other for developed countries (Nintendo). The interesting thing about the Nintendo version is that they wanted backward compatibility with original Gamecube Discs along with support for the new BoardOn software.

It has mention of connecting to a PC to download games to the system, not just for purchases but for rentals and demos too! 

---
## System Hardware (/system_hw)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/system_hw</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **dvd_loader** - Information about the requirements for the DVD drive
* **pwr_supply** - Information for the Power supply required for the console
* **mechanical** - Diagrams and information about how the outer case for the console looks
  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
BB2 BOMs | .xls | Bill of Materials spreadsheet containing a list of all the parts required and their manufacturer and part ID
BB2 CPU Board Layout | .vsd | Microsoft Visio file containing the main CPU board layout
BB2 ME & ID Requirements | .doc | Document containing the Mechanical Engineering and Industrial Design Requirements such as the case dimensions (width: 12"  depth:8" height: 2.5")
BB2 System Diagram | .vsd | Microsoft Visio file containing all the main units such and how they connect to each other on the board
DVD Loader Requirements for BB | .doc | Duplicate to the file in the sub directory dvd_loader

The **BB2 ME & ID Requirements | .doc** is the most interesting file in this folder as it lists the dimensions of the console along with a few details such as the plastic (UL94-V0 ABS) it will be made out of and where the DVD-drive will be (right hand side, front loading)

---
### Dvd Loader (/system_hw/dvd_loader)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/dvd_loader</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a single document called **DVD Loader Requirements for BB.doc** that contains the basic requirements for the DVD drive that will be included in the BB2 console. It needs to be able to support up to 2.66GB dual layer 8cm disks and up to 8.54GB for dual layer 12cm disks.

The maximum access time should be 250msec (3-7x) with a maximum spin up time of 5 seconds, and it should have a laser lifetime of 10k hours.
  </div>
</section>  


---
### Mechanical (/system_hw/mechanical)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/mechanical</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains details about what the physical console would look like, including the ports on the front and rear of the unit and how it would look from the top.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Front Panel Requirement | .doc | Document containing a list of all the features of the front panel such as 4 gamecube ports, start/stop/eject, usb port and two memory card ports
Rear Panel Requirement | .doc | Document containing details of the ports on the rear of the console such as S-Video and Component out, USB and ethernet ports and a HDD expansion bay
bb2_box | .vsd | Microsoft Visio file containing a diagram of the internals of the console
bb_2_f_r_panel | .vsd | Microsoft Visio file containing a diagram of the outer case of the console

The most interesting file in this folder is definitely the **bb_2_f_r_panel.vsd** file which provides a diagram of what the console would have looked like from the top, front and back.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is the closest we can get to see what the unreleased iQue Box Player would have looked like. Basically a small top loading DVD player with 4 <a href="https://twitter.com/hashtag/Gamecube?src=hash&amp;ref_src=twsrc%5Etfw">#Gamecube</a> ports on the front and 2 memory card slots 1/3 <a href="https://t.co/vB2waUaWHx">pic.twitter.com/vB2waUaWHx</a></p>&mdash; 🕹 RetroReversing.com - Reverse Retro Games 🕹 (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1421829947409195009?ref_src=twsrc%5Etfw">August 1, 2021</a></blockquote> 

---
### Power Supply (/system_hw/pwr_supply)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/pwr_supply</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains information on sourcing a power supply for the BB2 console, such as all the power requirements for each chip and also the dimensions so it would fit in the case.

  </div>
</section>  

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
Power Requirements | .xls | Spreadsheet containing the DC voltage requirements of all the components of the board 
Power Supply Requirement | .doc | Document containing open frame power supply requirements for the unit
atx_conn | .vsd | Microsoft Visio file containing a diagram of an ATX 20 pin connector used for the power supply
bb2_pwr_sply_dim | .vsd | Microsoft Visio file containing a diagram showing the size of the power supply required


---
# References
[^1]: [iQue Box - RGDWiki](https://wiki.raregamingdump.ca/index.php/iQue_Box)
