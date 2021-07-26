---
layout: post
tags: 
- wii
- sdk
- leak
- gc
title: ATI Low Level Wii SDK
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/wii/ATI Low Level Wii SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/ATI Low Level Wii SDK.jpg
permalink: /ati-low-level-wii-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Wii
    url: /wii
  - name: ATI Low Level Wii SDK
    url: #
recommend: 
- wii
- sdk
- gc
editlink: /wii/AtiLowLevelSDK.md
updatedAt: '2021-07-26'
---

# Introduction
In 2020 and 2021 numerous secret files have been leaked from Nintendo thanks to Zammis Clark. Included in these files were source code for a variety of Wii internal applications such as a Diagnostic tool known as **DIAG4**. 

This post will cover the **Low Level Wii SDK** created by ATI/ArtX for the Wii/Gamecube which was included as part of the **DIAG4** source code.

## What is the ATI Low Level Wii SDK?
In order to develop the Wii Operating System (**IOS**) and other internal diagnostic tools (e.g DIAG4) an SDK was created to abstract the low level hardware in a C/C++ library.

## Where did it come from?
In the 2021 Nintendo Leak an archive was released called **DIAG4RVL.7Z**, if you extract this archive and go to the path **DIAG/include**

In here you will find a folder for each version **artx** and **ati**.

## What was it used for?
It was used internally at Nintendo to make it easier to write hardware diagnostic tests for use in the DIAG4 tool. It was presumably also used for development of the Wii Operating System known as **IOS**.

## What is the difference between the ArtX and ATI versions?
The ArtX version is the original and was created for the Gamecube and used in the Diagnostics tool for Gamecube and potentially the Gamecube Operating System. 

The ATI version is a fork of the ArtX version which has been updated for the Wii console.

---
# Artx (/include/artx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/artx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains Gamecube header files provided by the Company **ArtX**, the company later changed its name to **ATI** during the development of the wii.

This folder is provided for use in the Gamecube DIAG tests and there is an updated version of this folder with Wii support in the **ati** folder.

Since most of the files in this folder have a more up to date version in the **ati** folder, they will not be documented here as it would be very repetitive. So check out the section on the ATI folder below instead.

For more information you can take a diff of the two folders if you are especially interested in the differences but overall it is not of much interest to most users.

  </div>
</section>  

---
# ATI low level SDK (/include/ati)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/include/ati</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C header files that provide low level access to the wii hardware. This library was originally written for the gamecube and then updated for the Wii, it was created by ATI (formally ArtX).

This library was not provided to third party developers in the official SDK and so was only used for internal tools and software such as the Wii Operating system known as **IOS**.

Most of the include files are at the top level but there are also a few sub-directories:
* **bfm750** - only contains one file but nothing is defined in it
* **diag** - Low level PowerPC register access functions
* **export** - unknown purpose, seems to be just a subset of gx folder files
* **fdl** - low level C header files generated from fiddle .fdl files
* **gx** - Graphics header files
* **gxu** - Graphics Utility header files
* **helper** - Compiler related constants
* **private** - Internal debug functions for ATI

We have provided descriptions for the files at the root level of this folder in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
acr | .h | Include file for declaring ?
aes | .h | Include file for declaring ?
aesreg | .h | Include file for declaring a few AES pre-processor constants such as **AES_BASE_REG** it was written by **BroadOn**
ahb | .h | Include file for declaring a few functions for accessing the AHB (Advanced High-performance Bus) bus 
ahbdbg | .h | Include file for declaring a debug AHB function called **ahbdbgInit**
ai | .h | Include file for declaring a function to initialise the Audio Interface **aiInit**
ar_priv | .h | Include file for declaring ARAM pre-processor constants
aram | .h | Include file for declaring ARAM related functions such as **__ARReadDMA**
arch | .h | Include file for declaring constants related to the hardware architecture it is running on ORCA/NDEV/DRIP such as **BUSSPEED_DEFAULT**
args | .h | Include file for declaring ?
assert | .h | Include file for declaring a simple assert function for debugging
ati_usb | .h | Include file for declaring low level USB interface functions
atidiag | .h | Include file for including lots of other header files for hardware components such as **ai.h** 
ax_types | .h | Include file for declaring common standard types for ArtX code such as **AXint8**
ax_ver | .h | Include file for declaring constants for the different hardware versions e.g **DOLPHIN_REV_A**
axdbg | .h | Include file for declaring a few debug functions
axmc | .h | Include file for declaring ?
big_endian | .h | Include file for declaring macros that convert to big endian format
boot | .h | Include file for declaring two strings **BOOT_BLK** and **AUTOBOOT_BLK**
busclient | .h | Include file for declaring ?
casm | .inc | 
crc | .h | Include file for declaring ?
dbg_viai_setup | .h | Include file for declaring ?
dbgcomm | .h | Include file for declaring 
dbgint | .h | Include file for declaring 
dcbz_basic | .h | Include file for declaring 
di | .h | Include file for declaring 
diag | .h | Include file for declaring 
diagerr | .h | Include file for declaring 
dma_basic | .h | Include file for declaring 
dolcnt | .h | Include file for declaring 
dsp | .h | Include file for declaring 
dspfix | .h | Include file for declaring 
dspmxic | .h | Include file for declaring 
dvd | .h | Include file for declaring 
dvdfs | .h | Include file for declaring 
ehci | .h | Include file for declaring 
ehci-hcd | .h | Include file for declaring 
ela | .h | Include file for declaring 
exi | .h | Include file for declaring 
eximdm | .h | Include file for declaring 
fifo | .h | Include file for declaring 
filerand | .h | Include file for declaring 
filerandom | .h | Include file for declaring 
flash | .h | Include file for declaring 
font | .h | Include file for declaring 
gecko_dma | .h | Include file for declaring 
generic | .h | Include file for declaring 
getopt | .h | Include file for declaring 
gfxbu | .h | Include file for declaring 
gfxoldbu | .h | Include file for declaring 
gpioexi | .h | Include file for declaring 
hcd | .h | Include file for declaring 
hidutil | .h | Include file for declaring 
hub | .h | Include file for declaring 
i2c | .h | Include file for declaring 
irq | .h | Include file for declaring 
lib | .h | Include file for declaring 
little_endian | .h | Include file for declaring 
lomem | .h | Include file for declaring 
mc | .h | Include file for declaring 
mem | .h | Include file for declaring 
ml | .h | Include file for declaring 
mrexi | .h | Include file for declaring 
n64cnt | .h | Include file for declaring 
ntd_regs | .h | Include file for declaring 
nvram | .h | Include file for declaring 
os | .h | Include file for declaring 
reset | .h | Include file for declaring 
sdi | .h | Include file for declaring 
serrx | .h | Include file for declaring 
sfx | .h | Include file for declaring 
sha | .h | Include file for declaring 
si | .h | Include file for declaring 
snake | .h | Include file for declaring 
standio | .h | Include file for declaring 
swab | .h | Include file for declaring 
types | .h | Include file for declaring 
usb | .h | Include file for declaring 
usb-ohci | .h | Include file for declaring 
usb_bitops | .h | Include file for declaring 
usb_input | .h | Include file for declaring 
usb_list | .h | Include file for declaring 
usb_mem | .h | Include file for declaring 
usb_other | .h | Include file for declaring 
usb_scsi | .h | Include file for declaring 
usb_spin | .h | Include file for declaring 
usb_timer | .h | Include file for declaring 
usb_wait | .h | Include file for declaring 
util | .h | Include file for declaring 
vi | .h | Include file for declaring 
vi_conexant | .h | Include file for declaring 
video | .h | Include file for declaring 

Interestingly the file **arch.h** mentions a platform called **DRIP** along with **NDEV** and **ORCA**. NDEV is the Wii development kit hardware and ORCA is the Gamecube one but not sure what DRIP is.

The file **boot.h** refers to two BLK files used at boot time, but not sure what they are used for:
* boot.blk
* autoboot.blk

The file **generic.h** is actually from the Linux Kernel (**linux/byteorder_generic.h**), so technically if this is linked into any distributed Wii software it could be a GPL violation.

<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="acr.h" />
  <h3>acr.h</h3>
  <ul>
    <li><span>void</span> set_AIP_address_space<span>(int whether)</span></li> 
    <li><span>int</span> get_AIP_address_space<span>(void)</span></li> 
    <li><span>int</span> use_AIP_address_space<span>(void)</span></li> 
    <li><span>void</span> set_AHB_IO_MEM<span>(int value)</span></li> 
    <li><span>int</span> get_AHB_IO_MEM<span>(void)</span></li> 
    <li><span>int</span> use_AHB_IO_MEM<span>(void)</span></li> 
    <li><span>void</span> set_DI_NODVDRD_EN<span>(int value)</span></li> 
    <li><span>int</span> get_DI_NODVDRD_EN<span>(void)</span></li> 
    <li><span>u32</span> get_ACRIOINTPPC<span>(void)</span></li> 
    <li><span>u32</span> set_ACRIOINTPPC<span>(u32 which,u32 value)</span></li> 
    <li><span>u32</span> sendIOPMsg<span>(u32 msg)</span></li> 
    <li><span>void</span> set_ACRARBCFGDMA_DELAYEN<span>(int value)</span></li> 
    <li><span>int</span> get_ACRARBCFGDMA_DELAYEN<span>(void)</span></li> 
    <li><span>void</span> set_ACRARBCFGDMA_DELAYCNT<span>(u32 value)</span></li> 
    <li><span>u32</span> get_ACRARBCFGDMA_DELAYCNT<span>(void)</span></li> 
    <li><span>void</span> set_ACRARBCFGCPU_DELAY<span>(int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">16</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">31</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="aes.h" />
  <h3>aes.h</h3>
  <ul>
    <li><span>int</span> AES_Busy<span>(void)</span></li> 
    <li><span>void</span> AES_Dma<span>(u32 srcAddr,u32 dstAddr,u32 numBlocks,u32 intrEnable)</span></li> 
    <li><span>void</span> AES_Clear<span>(void)</span></li> 
    <li><span>int</span> _AES_Setup<span>(u32 srcAddr,u32 dstAddr)</span></li> 
    <li><span>int</span> _AES_StartDma<span>(u32 numBlocks,u32 intrEnable)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">16</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ahb.h" />
  <h3>ahb.h</h3>
  <ul>
    <li><span>void</span> ahbMemFlush<span>(enum memAhbFlushGroup_e)</span></li> 
    <li><span>void</span> ahbMemRBInvalidate<span>(enum memAhbReadBuffer_e)</span></li> 
    <li><span>unsigned int</span> busRdAHMReg<span>(unsigned int a)</span></li> 
    <li><span>unsigned int</span> busRdMEMReg<span>(unsigned int a)</span></li> 
    <li><span>int</span> arbInit<span>(char *s)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ahbdbg.h" />
  <h3>ahbdbg.h</h3>
  <ul>
    <li><span>int</span> ahbdbgInit<span>(void(*_Cb)(void),int mask)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">15</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ai.h" />
  <h3>ai.h</h3>
  <ul>
    <li><span>AiStatus</span> aiInit<span>(void(*_tranCb)(void))</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="aram.h" />
  <h3>aram.h</h3>
  <ul>
    <li><span>void</span> __ARWaitForDMA<span>(void)</span></li> 
    <li><span>void</span> __ARWriteDMA<span>(u32 mmem_addr,u32 aram_addr,u32 length)</span></li> 
    <li><span>void</span> __ARReadDMA<span>(u32 mmem_addr,u32 aram_addr,u32 length)</span></li> 
    <li><span>u32</span> __ARChecksize<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">28</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="arch.h" />
  <h3>arch.h</h3>
  <ul>
    <li><span>u32</span> BUSSPEED</li> 
    <li><span>void</span> calibrateBusspeed<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">70</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="args.h" />
  <h3>args.h</h3>
  <ul>
    <li><span>u32</span> _argc</li> 
    <li><span>char </span> _argv[]</li> 
    <li><span>u32</span> argInit<span>(void)</span></li> 
    <li><span>u32</span> argCntGet<span>(void)</span></li> 
    <li><span>char </span> argGet<span>(u32 i)</span></li> 
    <li><span>u32</span> argCache<span>(u32 *,char ***)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">52</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="assert.h" />
  <h3>assert.h</h3>
  <ul>
    <li><span>void</span> _assert<span>(const char *,const char *,int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="axdbg.h" />
  <h3>axdbg.h</h3>
  <ul>
    <li><span>void</span> DbgCreateTX<span>(GXMCObj *info,u32 width,u32 height)</span></li> 
    <li><span>void</span> DbgRenderAndStretch<span>(GXMCObj *info,u32 x,u32 y,u32 width,u32 height)</span></li> 
    <li><span>void</span> DbgRenderRefToEFB<span>(GXMCObj *info,GXMCReferencePicture type,u32 x,u32 y,u32 plane)</span></li> 
    <li><span>void</span> DbgStub<span>(GXMCObj *info)</span></li> 
    <li><span>void</span> DbgPrintMotionInfo<span>(struct MacroblockDetails *mb)</span></li> 
    <li><span>void</span> DbgPrintDPCM<span>(struct MacroblockDetails *mb)</span></li> 
    <li><span>void</span> DbgPrintMotionVector<span>(GXMCMotionVector *mv)</span></li> 
    <li><span></span> SigTrap</li> 
    <li><span></span> SigTrap</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">107</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="axmc.h" />
  <h3>axmc.h</h3>
  <ul>
    <li><span>void</span> SetView<span>(void)</span></li> 
    <li><span>MCError</span> AllocateCmdFifos<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocatePingPongBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateRefrenceFrameBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateTexMemory<span>(GXMCObj *info)</span></li> 
    <li><span>GXBool</span> AllocateFutureBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>GXBool</span> AllocatePastBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>MCError</span> AllocateBPictureBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> InitQueueHandler<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> MCErrorHandler<span>(GXMCObj *mpgObj,MCError error)</span></li> 
    <li><span>GXBool</span> GXMCSelectDBuffer<span>(GXMCObj *info,u32 bufferId)</span></li> 
    <li><span>void</span> CreateD0Texture<span>(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)</span></li> 
    <li><span>void</span> CreateD1Texture<span>(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)</span></li> 
    <li><span>void</span> PerformRenderSetup<span>(TevType type)</span></li> 
    <li><span>void</span> SetupTevStages<span>(TevType type)</span></li> 
    <li><span>void</span> RenderImage<span>(GXMCObj *mpgInfo,u32 width,u32 height)</span></li> 
    <li><span>void</span> CopyEFBToMemory<span>(GXMCObj *mpgObj,GXCopyType copyType,void *destBase)</span></li> 
    <li><span>void</span> CreateFrameFromFields<span>(GXMCObj *mpgInfo,PictureType frameType)</span></li> 
    <li><span>void</span> GXReset<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> MarkBufferBusy<span>(GXMCObj *info,u32 id)</span></li> 
    <li><span>void</span> ProcessBlocks<span>(GXMCObj *info)</span></li> 
    <li><span>void</span> CreateQueue<span>(GXMCMotionVector *srcMV,GXMCMotionVector *dstMV[],GXMCMacroBlockType mbType,u32 count,u32 totalMV)</span></li> 
    <li><span>void</span> SwapBuffers<span>(GXMCObj *mcInfo)</span></li> 
    <li><span>void</span> InterlaceRenderUV<span>(GXMCObj *mcInfo,PictureType fType,void *dstBase)</span></li> 
    <li><span>u32</span> GXConvertLinearToTile<span>(unsigned x,unsigned y,unsigned stride)</span></li> 
    <li><span>void</span> DestroyPingPongBuffers<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> ResetCounters<span>(GXMCObj *mpgObj)</span></li> 
    <li><span>void</span> FreeAndReallocate<span>(GXMCObj *mpgObj,GXBool newBuffer)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">28</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">78</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="busclient.h" />
  <h3>busclient.h</h3>
  <ul>
    <li><span>void</span> busPrintf<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> busDbg<span>(const char *fmt,...)</span></li> 
    <li><span>u32</span> busGetTime<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="crc.h" />
  <h3>crc.h</h3>
  <ul>
    <li><span>u32</span> CRCCompute<span>(void *buf,u32 nbytes)</span></li> 
    <li><span>u32</span> CRCAppend<span>(void *buf,u32 nbytes,u32 init)</span></li> 
    <li><span>u32</span> CRCComputeMasked<span>(void *buf,u32 nbytes)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">41</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbg_viai_setup.h" />
  <h3>dbg_viai_setup.h</h3>
  <ul>
    <li><span>void</span> dbg_viai_setup<span>(int compatB)</span></li> 
    <li><span>void</span> dbg_aipll_init<span>(int compatB)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">6</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbgcomm.h" />
  <h3>dbgcomm.h</h3>
  <ul>
    <li><span>DbgHandle</span> dbgOpen<span>(const char *filename,const char *mode)</span></li> 
    <li><span>u32</span> dbgWrite<span>(DbgHandle handle,const void *buf,u32 len)</span></li> 
    <li><span>u32</span> dbgRead<span>(DbgHandle handle,void *buf,u32 len)</span></li> 
    <li><span>u32</span> dbgClose<span>(DbgHandle handle)</span></li> 
    <li><span>u8 </span> dbgGets<span>(u8 *buf,u32 blockFlag)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">48</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dbgint.h" />
  <h3>dbgint.h</h3>
  <ul>
    <li><span>u32</span> dbgintInit<span>(void(*dbgIrqCb)(void))</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">34</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dcbz_basic.h" />
  <h3>dcbz_basic.h</h3>
  <ul>
    <li><span>void</span> lc_allocate<span>(void *LC_addr,unsigned int bfsize)</span></li> 
    <li><span>void</span> set_HID_G<span>(unsigned int mask)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">9</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="di.h" />
  <h3>di.h</h3>
  <ul>
    <li><span>DiStatus</span> diInit<span>(void(*_tranCb)(u32 err),void(*_doorCb)(void))</span></li> 
    <li><span>DiStatus</span> diImm<span>(u32 *pkt,u32 *data,u32 isRead)</span></li> 
    <li><span>DiStatus</span> diDma<span>(u32 *pkt,u32 *data,u32 len,u32 isRead)</span></li> 
    <li><span>DiStatus</span> diSync<span>(void)</span></li> 
    <li><span>DiStatus</span> diBrk<span>(void)</span></li> 
    <li><span>void</span> diReset<span>(void)</span></li> 
    <li><span>void</span> _diSync<span>(u32 iSr)</span></li> 
    <li><span>diRegisters_t </span> diReadRegisters<span>(diRegisters_t *diRegs)</span></li> 
    <li><span>void</span> diPrintRegisters<span>(diRegisters_t *diRegs,const char *comment)</span></li> 
    <li><span>void</span> diClobberRegisters<span>(u32 value)</span></li> 
    <li><span>u32</span> diStraps<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="diag.h" />
  <h3>diag.h</h3>
  <ul>
    <li><span>u32</span> mcrGet<span>(Mcr *mp)</span></li> 
    <li><span>u32</span> mcrPut<span>(Mcr *mp)</span></li> 
    <li><span>u32</span> dcrGet<span>(Dcr *dp)</span></li> 
    <li><span>u32</span> dcrPut<span>(Dcr *dp)</span></li> 
    <li><span>u32</span> _dcrmcrGet<span>(DcrMcr *dmp)</span></li> 
    <li><span>u32</span> _dcrmcrPut<span>(DcrMcr *dmp)</span></li> 
    <li><span>void</span> diagStart<span>(void)</span></li> 
    <li><span>void</span> diagStop<span>(u32 status)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">105</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dma_basic.h" />
  <h3>dma_basic.h</h3>
  <ul>
    <li><span>void</span> dma_load<span>(unsigned int *inDataBlock,unsigned int *inBuffer,unsigned int inDataSize)</span></li> 
    <li><span>void</span> dma_wait<span>(unsigned int i)</span></li> 
    <li><span>void</span> dma_store<span>(unsigned int *outDataBlock,unsigned int *outBuffer,unsigned int outDataSize)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dolcnt.h" />
  <h3>dolcnt.h</h3>
  <ul>
    <li><span>u32</span> dolcntData<span>(u32 chan,u32 *datah,u32 *datal)</span></li> 
    <li><span>u32</span> dolcntInit<span>(void)</span></li> 
    <li><span>u32</span> dolcntInitV<span>(int)</span></li> 
    <li><span>void</span> dolcntRumbleOn<span>(u32 chan)</span></li> 
    <li><span>void</span> dolcntRumbleOff<span>(u32 chan)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dsp.h" />
  <h3>dsp.h</h3>
  <ul>
    <li><span>u32</span> dspAi<span>(u32 *memPtr,u32 len)</span></li> 
    <li><span>u32</span> dspAram<span>(u32 *memPtr,u32 *aramPtr,u32 isRead,u32 len)</span></li> 
    <li><span>void</span> dspSyncAi<span>(void)</span></li> 
    <li><span>void</span> dspSyncAram<span>(void)</span></li> 
    <li><span>u32</span> dspWrtMbox<span>(u32 value,u32 doIrq)</span></li> 
    <li><span>u32</span> dspRdMbox<span>(u32 *value)</span></li> 
    <li><span>void</span> dspInit<span>(void(*_dspCb)(void),void(*_aiCb)(void),void(*_aramCb)(void))</span></li> 
    <li><span>void</span> dspAramStable<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">45</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dspfix.h" />
  <h3>dspfix.h</h3>
  <ul>
    <li><span>void</span> dspFix<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">2</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dspmxic.h" />
  <h3>dspmxic.h</h3>
  <ul>
    <li><span>u32</span> dspReset<span>(u32 cdcr)</span></li> 
    <li><span>u32</span> dspBoot<span>(u32 *memPtr,u32 len)</span></li> 
    <li><span>u32</span> dspBootDma<span>(u32 *memPtr,u32 dspa,u32 dscr,u32 dsbl)</span></li> 
    <li><span>u32</span> dspSyncDma<span>(u32 delay)</span></li> 
    <li><span>u32</span> dspSendMail<span>(u32 mail,u32 doIrq)</span></li> 
    <li><span>u32</span> dspWaitMail<span>(u32 *mailPtr)</span></li> 
    <li><span>u32</span> dspMemRamp<span>(u32 *memAddr,u32 len,u32 val)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">93</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dvd.h" />
  <h3>dvd.h</h3>
  <ul>
    <li><span>u32</span> dvdStopMotor<span>(u32 setting,u32 *response)</span></li> 
    <li><span>u32</span> dvdRead<span>(u32 addr,u32 len,u32 *mem)</span></li> 
    <li><span>void</span> dvdSetNdevFS<span>(u32 offset)</span></li> 
    <li><span>u32</span> dvdReadBuf<span>(u32 addr,u32 len,u32 *dest)</span></li> 
    <li><span>u32</span> dvdReadDVD<span>(u32 startSector,u32 numberOfSectors,u32 *mem)</span></li> 
    <li><span>u32</span> dvdWriteBuf<span>(u32 addr,u32 len,u32 *src)</span></li> 
    <li><span>u32</span> dvdSync<span>(void)</span></li> 
    <li><span>u32</span> dvdErrSet<span>(u32 len)</span></li> 
    <li><span>u32</span> dvdBrk<span>(void)</span></li> 
    <li><span>u32</span> dvdInit<span>(void(*tranCb)(u32 err),void(*doorCb)(void))</span></li> 
    <li><span>u32</span> dvdErrReq<span>(u32 *retErr)</span></li> 
    <li><span>u32</span> dvdAsStart<span>(u32 addr,u32 sz)</span></li> 
    <li><span>u32</span> dvdAsStop<span>(void)</span></li> 
    <li><span>u32</span> dvdDoor<span>(u32 open)</span></li> 
    <li><span>u32</span> dvdInquiry<span>(u32 *inq)</span></li> 
    <li><span>u32</span> dvdReadID<span>(u32 *id)</span></li> 
    <li><span>u32</span> dvdAsBuffer<span>(u32 onOff,u32 pages,u32 *status)</span></li> 
    <li><span>u32</span> dvdRequestDiskStatus<span>(u32 *diskStatus)</span></li> 
    <li><span>u32</span> dvdRequestError<span>(u32 *response)</span></li> 
    <li><span>void</span> dvdPrintPacket<span>(dvd_u *pkt)</span></li> 
    <li><span>void</span> _dvdFlush<span>(u32 enable)</span></li> 
    <li><span>u16</span> deviceCode</li> 
    <li><span>u32</span> releaseDate</li> 
    <li><span>u32</span> padding[2]</li> 
    <li><span></span> dvdInquiry_t</li> 
    <li><span>void</span> dvdPrintInquiry<span>(const char *comment,dvdInquiry_t *s)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">121</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="dvdfs.h" />
  <h3>dvdfs.h</h3>
  <ul>
    <li><span>u32</span> dvdFsInit<span>(void)</span></li> 
    <li><span>u32</span> dvdFsDeToInd<span>(DirEntry *de)</span></li> 
    <li><span>DirEntry </span> dvdFsFind<span>(const char *path)</span></li> 
    <li><span>DirEntry </span> dvdFsIndToDe<span>(u32 ind)</span></li> 
    <li><span>void </span> fileLoad<span>(const char *file,u32 *rLen)</span></li> 
    <li><span>char </span> lineGet<span>(char *buf,u32 bLen)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ehci-hcd.h" />
  <h3>ehci-hcd.h</h3>
  <ul>
    <li><span>int</span> ehci_start<span>(struct usb_hcd *hcd)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">12</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ela.h" />
  <h3>ela.h</h3>
  <ul>
    <li><span>void</span> init_ELA<span>(p_ela_init_reg)</span></li> 
    <li><span>void</span> post_ELA<span>(int wrap_cnt)</span></li> 
    <li><span>void</span> log_ELA<span>(int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">94</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="exi.h" />
  <h3>exi.h</h3>
  <ul>
    <li><span>ExiStatus</span> exiInit<span>(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))</span></li> 
    <li><span>ExiStatus</span> exiCustomInit<span>(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))</span></li> 
    <li><span>ExiStatus</span> exiSelect<span>(u32 chan,u32 dev,u32 freq)</span></li> 
    <li><span>ExiStatus</span> exiDeselect<span>(u32 chan)</span></li> 
    <li><span>ExiStatus</span> exiDma<span>(u32 chan,u8 *buf,u32 len,u32 type)</span></li> 
    <li><span>ExiStatus</span> exiImm<span>(u32 chan,u8 *buf,u32 len,u32 type)</span></li> 
    <li><span>ExiStatus</span> exiSync<span>(u32 chan)</span></li> 
    <li><span>u32</span> exiPresent<span>(u32 chan)</span></li> 
    <li><span>void</span> exi32Enable<span>(void)</span></li> 
    <li><span>void</span> exi32Disable<span>(void)</span></li> 
    <li><span>void</span> exiPrint<span>(char *buf,int len)</span></li> 
    <li><span>u32</span> exiGetID<span>(u32 chan,u32 dev)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">12</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">85</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="eximdm.h" />
  <h3>eximdm.h</h3>
  <ul>
    <li><span>u32</span> mdmInit<span>(u32 mdmDev,u32 mdmCsel)</span></li> 
    <li><span>u32</span> mdmRegRd<span>(u32 reg,u8 *buf,u32 len)</span></li> 
    <li><span>u32</span> mdmRegWrt<span>(u32 reg,u8 *buf,u32 len)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">40</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="fifo.h" />
  <h3>fifo.h</h3>
  <ul>
    <li><span>void</span> fifoCreate<span>(const char *name,Fifo *fp,u32 *list,u32 size)</span></li> 
    <li><span>u32</span> fifoGetExt<span>(Fifo *fp,u32 *valp,u32 flags)</span></li> 
    <li><span>u32</span> fifoGet<span>(Fifo *fp)</span></li> 
    <li><span>u32</span> fifoPutExt<span>(Fifo *fp,u32 val,u32 flags)</span></li> 
    <li><span>void</span> fifoPut<span>(Fifo *fp,u32 val)</span></li> 
    <li><span>u32</span> fifoCnt<span>(Fifo *fp)</span></li> 
    <li><span>void</span> EnableWriteCombine<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">61</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="filerand.h" />
  <h3>filerand.h</h3>
  <ul>
    <li><span>void</span> sfilerand<span>(unsigned long seed)</span></li> 
    <li><span>unsigned short</span> filerand<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="filerandom.h" />
  <h3>filerandom.h</h3>
  <ul>
    <li><span>void</span> sfilerandom<span>(unsigned long seed)</span></li> 
    <li><span>unsigned long</span> filerandom<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="flash.h" />
  <h3>flash.h</h3>
  <ul>
    <li><span>u32</span> flashReadSeg<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashRead<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashWritePage<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashWrite<span>(u32 chan,u32 src,u32 dst,u32 len)</span></li> 
    <li><span>u32</span> flashStatGet<span>(u32 chan,u32 *ret)</span></li> 
    <li><span>u32</span> flashStatClr<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashErase<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashEraseSec<span>(u32 chan,u32 addr)</span></li> 
    <li><span>u32</span> flashSleep<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashWake<span>(u32 chan)</span></li> 
    <li><span>u32</span> flashIdRd<span>(u32 chan,u32 *ret)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">53</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="font.h" />
  <h3>font.h</h3>
  <ul>
    <li><span>void</span> fontInit<span>(u32 addr,u32 vidMode)</span></li> 
    <li><span>void</span> cls<span>(void)</span></li> 
    <li><span>void</span> fgSet<span>(u32 y,u32 u,u32 v)</span></li> 
    <li><span>void</span> bgSet<span>(u32 y,u32 u,u32 v)</span></li> 
    <li><span>void</span> cursorSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> pixSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> pixClear<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> putChar<span>(u32 cc)</span></li> 
    <li><span>void</span> putStr<span>(const char *str)</span></li> 
    <li><span>void</span> fontPut<span>(const char *str,u32 len)</span></li> 
    <li><span>u32</span> fontColsGet<span>(void)</span></li> 
    <li><span>u32</span> fontRowsGet<span>(void)</span></li> 
    <li><span>void</span> fontOff<span>(void)</span></li> 
    <li><span>void</span> fontOn<span>(void)</span></li> 
    <li><span>void</span> fontCursSet<span>(u32 x,u32 y)</span></li> 
    <li><span>void</span> gfxBltCpy<span>(u32 *src,u32 cols,u32 rows,u32 x,u32 y)</span></li> 
    <li><span>void</span> gfxRectDraw<span>(u32 x,u32 y,u32 cols,u32 rows)</span></li> 
    <li><span>u8 </span> gfxChkppmfmt<span>(u8 *ppm,u32 *cols,u32 *rows)</span></li> 
    <li><span>u8</span> gfxChkbmpfmt<span>(u8 *cp,u32 *xsize,u32 *ysize,u8 **pStart,u8 **pEnd)</span></li> 
    <li><span>u8 </span> gfxCvrtbmp2rgb<span>(u8 *pEnd,u8 *pStart,u32 width,u32 height)</span></li> 
    <li><span>void</span> gfxCvrtrgb2yuv<span>(u8 *data,u32 cols,u32 rows)</span></li> 
    <li><span>void</span> gfxCvrt444to422<span>(u8 *src,u32 cols,u32 rows,u8 *dest)</span></li> 
    <li><span>void</span> gfxCvrt444to422Stride<span>(u8 *src,u32 cols,u32 rows,u8 *dest,u32 stride)</span></li> 
    <li><span>u32</span> scrColsGet<span>(void)</span></li> 
    <li><span>u32</span> scrRowsGet<span>(void)</span></li> 
    <li><span>void</span> xLMarginSet<span>(u32 xLMargin)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">26</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">60</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gecko_dma.h" />
  <h3>gecko_dma.h</h3>
  <ul>
    <li><span>asm DMAStatus</span> dmaEnable<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaDisable<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaErrorStatus<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaQueueLen<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaFlush<span>()</span></li> 
    <li><span>asm DMAStatus</span> dmaAlloc<span>(register unsigned long,register unsigned long)</span></li> 
    <li><span>asm DMAStatus</span> dmaRead<span>(register unsigned long,register unsigned long,register unsigned long)</span></li> 
    <li><span>asm DMAStatus</span> dmaWrite<span>(register unsigned long,register unsigned long,register unsigned long)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">84</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="getopt.h" />
  <h3>getopt.h</h3>
  <ul>
    <li><span>char </span> optarg</li> 
    <li><span>int</span> optind</li> 
    <li><span>int</span> getopt<span>(int ac,char *av[],char *opts)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">36</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gfxbu.h" />
  <h3>gfxbu.h</h3>
  <ul>
    <li><span>void</span> gfxbuInit<span>()</span></li> 
    <li><span>u32</span> gfxbuFinish<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">42</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gfxoldbu.h" />
  <h3>gfxoldbu.h</h3>
  <ul>
    <li><span>void</span> gfxoldbuInit<span>(char *testName)</span></li> 
    <li><span>void </span> gfxoldbuDisplay</li> 
    <li><span>u32</span> gfxoldbuUpdate<span>()</span></li> 
    <li><span>u32</span> gfxoldbuFinish<span>()</span></li> 
    <li><span>u32</span> gfxoldbuFinishAA<span>()</span></li> 
    <li><span>void</span> gfxSetClearColor<span>(u8 red,u8 green,u8 blue,u8 alpha)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">84</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gpioexi.h" />
  <h3>gpioexi.h</h3>
  <ul>
    <li><span>void</span> initGpioExi<span>(void)</span></li> 
    <li><span>void</span> setVideoReset<span>(int value)</span></li> 
    <li><span>void</span> setI2CEnable<span>(int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">10</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hcd.h" />
  <h3>hcd.h</h3>
  <ul>
    <li><span>struct usb_hcd</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hcd_dev</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hcd_timeout</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>struct hc_driver</span> __attribute__<span>((aligned(32)))</span></li> 
    <li><span>int</span> usb_hcd_pci_probe<span>(int *dev,int *id)</span></li> 
    <li><span>void</span> usb_hcd_pci_remove<span>(struct pci_dev *dev)</span></li> 
    <li><span>int</span> usb_hcd_pci_suspend<span>(struct pci_dev *dev,u32 state)</span></li> 
    <li><span>int</span> usb_hcd_pci_resume<span>(struct pci_dev *dev)</span></li> 
    <li><span>void</span> usb_claim_bandwidth<span>(struct usb_device *dev,struct urb *urb,int bustime,int isoc)</span></li> 
    <li><span>void</span> usb_release_bandwidth<span>(struct usb_device *dev,struct urb *urb,int isoc)</span></li> 
    <li><span>int</span> usb_check_bandwidth<span>(struct usb_device *dev,struct urb *urb)</span></li> 
    <li><span>long</span> usb_calc_bus_time<span>(int speed,int is_input,int isoc,int bytecount)</span></li> 
    <li><span>inline struct usb_bus </span> hcd_to_bus<span>(struct usb_hcd *hcd){return hcd->bus</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">298</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hidutil.h" />
  <h3>hidutil.h</h3>
  <ul>
    <li><span>void</span> sethid2<span>(unsigned int hid2_value)</span></li> 
    <li><span>unsigned int</span> gethid0<span>(void)</span></li> 
    <li><span>void</span> sethid0<span>(unsigned int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">11</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="hub.h" />
  <h3>hub.h</h3>
  <ul>
    <li><span>struct usb_driver </span> hub_probe<span>(struct usb_device *dev,unsigned int i,const struct usb_device_id *id)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">152</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="i2c.h" />
  <h3>i2c.h</h3>
  <ul>
    <li><span>int</span> sendI2CData<span>(u8 slaveAddr,u8 *pData,int nBytes)</span></li> 
    <li><span>int</span> rcvI2CData<span>(u8 slaveAddr,u8 *pData,int maxBytes)</span></li> 
    <li><span>int</span> getI2CError<span>()</span></li> 
    <li><span>void</span> initI2C<span>()</span></li> 
    <li><span>void</span> initI2CExi<span>(void)</span></li> 
    <li><span>void</span> setSCL<span>(int)</span></li> 
    <li><span>void</span> setSDA<span>(int)</span></li> 
    <li><span>int</span> getSCL<span>(void)</span></li> 
    <li><span>int</span> getSDA<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">51</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="irq.h" />
  <h3>irq.h</h3>
  <ul>
    <li><span>void</span> irqHandler<span>(void)</span></li> 
    <li><span>void</span> irqCbAddPI<span>(void(*irqCb)(),u32 mask)</span></li> 
    <li><span>void</span> irqACRHandler<span>(void)</span></li> 
    <li><span>void</span> irqCbAddACR<span>(void(*irqCb)(),u32 mask)</span></li> 
    <li><span>u32</span> irqDisable<span>(void)</span></li> 
    <li><span>void</span> irqEnable<span>(u32 oldMask)</span></li> 
    <li><span>void</span> irqInit<span>(void(*intCb)(void))</span></li> 
    <li><span>void</span> clkInit<span>(void(*intCb)(void),u32 decVal)</span></li> 
    <li><span>void</span> _clkHndlr<span>(void)</span></li> 
    <li><span>void</span> _irqHndlr<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">90</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="lib.h" />
  <h3>lib.h</h3>
  <ul>
    <li><span>u16</span> bRd16<span>(u32 src)</span></li> 
    <li><span>u32</span> bRd32<span>(u32 src)</span></li> 
    <li><span>void</span> busWrt16<span>(u32 address,u16 data)</span></li> 
    <li><span>void</span> busWrt32<span>(u32 address,u32 data)</span></li> 
    <li><span>u16</span> busRd16<span>(u32 address)</span></li> 
    <li><span>u32</span> busRd32<span>(u32 address)</span></li> 
    <li><span>void</span> bWrt16<span>(u32 address,u32 data)</span></li> 
    <li><span>void</span> bWrt32<span>(u32 address,u32 data)</span></li> 
    <li><span>void</span> _dcWb<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> _dcWbInv<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> _dcInv<span>(u32 addr,u32 off)</span></li> 
    <li><span>void</span> dcWb<span>(u32 addr,u32 len)</span></li> 
    <li><span>void</span> dcWbInv<span>(u32 addr,u32 len)</span></li> 
    <li><span>void</span> dcInv<span>(u32 addr,u32 len)</span></li> 
    <li><span>u32</span> rand32<span>(void)</span></li> 
    <li><span>double</span> drand48<span>(void)</span></li> 
    <li><span>double</span> erand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>long int</span> mrand48<span>(void)</span></li> 
    <li><span>int</span> lrand48<span>(void)</span></li> 
    <li><span>int</span> nrand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>int</span> jrand48<span>(unsigned short xsubi[3])</span></li> 
    <li><span>void</span> srand48<span>(int seedval)</span></li> 
    <li><span>unsigned short </span> seed48<span>(unsigned short seed16v[3])</span></li> 
    <li><span>void</span> lcong48<span>(unsigned short param[7])</span></li> 
    <li><span>void</span> tbRead<span>(u32 *)</span></li> 
    <li><span>void</span> tbWrite<span>(u32 *)</span></li> 
    <li><span>void</span> udelay<span>(u32 delay)</span></li> 
    <li><span>void</span> busDelay<span>(u32 count)</span></li> 
    <li><span>u32</span> timeGet<span>(void)</span></li> 
    <li><span>void</span> halt<span>(void)</span></li> 
    <li><span>void</span> ppcL2Enable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Enable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Disable<span>(void)</span></li> 
    <li><span>void</span> ppcL1Flush<span>(void)</span></li> 
    <li><span>void</span> ppcPSLSQEnable<span>(void)</span></li> 
    <li><span>void</span> ppcDARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcDARGet<span>(void)</span></li> 
    <li><span>void</span> ppcHID0Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcHID1Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID2Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID2Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID4Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID4Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID1Get<span>(void)</span></li> 
    <li><span>u32</span> ppcECID2Get<span>(void)</span></li> 
    <li><span>void</span> ppcL2CRSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcL2CRGet<span>(void)</span></li> 
    <li><span>void</span> ppcWPARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcWPARGet<span>(void)</span></li> 
    <li><span>void</span> ppcDecSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcMsrSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcMsrGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBUSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBUGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBLSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBLGet<span>(void)</span></li> 
    <li><span>u32</span> ppcPVRGet<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG0Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG1Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG2Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG3Get<span>(void)</span></li> 
    <li><span>u32</span> ppcSPRG0Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG1Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG2Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcSPRG3Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcDBAT0UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT0LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT1UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT1LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT2UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT2LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT3UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT3LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT4UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT4LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT5UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT5LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT6UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT6LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT7UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcDBAT7LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT0UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT0LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT1UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT1LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT2UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT2LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT3UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT3LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT4UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT4LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT5UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT5LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT6UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT6LGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT7UGet<span>(void)</span></li> 
    <li><span>u32</span> ppcIBAT7LGet<span>(void)</span></li> 
    <li><span>void</span> ppcDBAT0USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT0LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT1USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT1LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT2USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT2LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT3USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT3LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT4USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT4LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT5USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT5LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT6USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT6LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT7USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcDBAT7LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT0USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT0LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT1USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT1LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT2USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT2LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT3USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT3LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT4USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT4LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT5USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT5LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT6USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT6LSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT7USet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcIBAT7LSet<span>(u32 val)</span></li> 
    <li><span>void</span> setIrqHndlr<span>(void(*hndlr)())</span></li> 
    <li><span>void</span> ppcEARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcEARGet<span>()</span></li> 
    <li><span>void</span> __ecowx<span>(u32 addr,u32 val)</span></li> 
    <li><span>u32</span> __eciwx<span>(u32 addr)</span></li> 
    <li><span>void</span> __dcbi<span>(u32 *,u32)</span></li> 
    <li><span>void</span> __icbi<span>(u32 *,u32)</span></li> 
    <li><span>u32</span> __lwarx<span>(u32)</span></li> 
    <li><span>void</span> __stwcx<span>(u32,u32)</span></li> 
    <li><span>void</span> _ctxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> _irqCtxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> ppcSync<span>(void)</span></li> 
    <li><span>void</span> ppcEieio<span>(void)</span></li> 
    <li><span>void</span> ppcEeieo<span>(void)</span></li> 
    <li><span>u32</span> ppcStackPtrGet<span>()</span></li> 
    <li><span>void</span> ppcStackPtrSet<span>(u32 val)</span></li> 
    <li><span>void</span> rwbuzz<span>(void)</span></li> 
    <li><span>int</span> strcasecmp<span>(const char *s1,const char *s2)</span></li> 
    <li><span>int</span> strncasecmp<span>(const char *s1,const char *s2,u32 c)</span></li> 
    <li><span>void </span> memcpy32<span>(void *s1,const void *s2,u32 n)</span></li> 
    <li><span>void </span> memset32<span>(void *s,u32 c,u32 n)</span></li> 
    <li><span>int</span> memcmp32<span>(const void *s1,const void *s2,u32 n)</span></li> 
    <li><span>int</span> atoh<span>(const char *str)</span></li> 
    <li><span>s32</span> ntoi<span>(const char *str,u32 base,u32 *val)</span></li> 
    <li><span>void</span> serInit2<span>(u32 dev,u32 csel)</span></li> 
    <li><span>void</span> serInit<span>(void)</span></li> 
    <li><span>void</span> serOn<span>(void)</span></li> 
    <li><span>void</span> serOff<span>(void)</span></li> 
    <li><span>int</span> serHwFlow<span>(u32 enable)</span></li> 
    <li><span>u8</span> serVersion<span>(u32 dev,u32 csel)</span></li> 
    <li><span>int</span> serRdQLen<span>(void)</span></li> 
    <li><span>int</span> serRdUart<span>(u8 *,int)</span></li> 
    <li><span>u8</span> serRdgetkey<span>(void)</span></li> 
    <li><span>u32</span> serRdkbhit<span>(void)</span></li> 
    <li><span>void</span> diagManualStop<span>(void *fb)</span></li> 
    <li><span>void</span> dprintf<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> dsprintf<span>(char *str,const char *fmt,...)</span></li> 
    <li><span>void</span> printfv<span>(u32 verLev,const char *fmt,...)</span></li> 
    <li><span>void</span> printf0<span>(const char *fmt,...)</span></li> 
    <li><span>void</span> printf1<span>(const char *fmt,...)</span></li> 
    <li><span>u32</span> tolower<span>(u32 cc)</span></li> 
    <li><span>int</span> atiIsNdev<span>(void)</span></li> 
    <li><span>int</span> atiIsOrca<span>(void)</span></li> 
    <li><span>void</span> initBootMode<span>(void)</span></li> 
    <li><span>u32</span> getBootMode<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">176</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">309</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mc.h" />
  <h3>mc.h</h3>
  <ul>
    <li><span>void</span> GXMCGFXInit<span>()</span></li> 
    <li><span>GXBool</span> GXMCInit<span>(GXMCObj *mcObj,u32 width,u32 height,u32 bufferCount)</span></li> 
    <li><span>void</span> GXMCBeginPicture<span>(GXMCObj *mcObj,PictureType pType)</span></li> 
    <li><span>void</span> GXMCRenderMB<span>(GXMCObj *mcObj,GXMCMacroBlockType mbType,GXMCMotionVector mv[4][2])</span></li> 
    <li><span>void</span> GXMCEndPicture<span>(GXMCObj *mcObj,GXCopyType copyType,void *dest)</span></li> 
    <li><span>void</span> GXMCSetChromaSample<span>(GXMCObj *mcObj,GXMCSampleMode mode)</span></li> 
    <li><span>void</span> GXMCFinish<span>(GXMCObj *mcObj)</span></li> 
    <li><span>GXBool</span> GXMCBufferBusy<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>GXBool</span> GXSelectDBuffer<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0YAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1YAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0UAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1UAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD0VAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
    <li><span>u8 </span> GXMCGetD1VAddress<span>(GXMCObj *mcObj,u32 bufferId)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">15</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">313</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mem.h" />
  <h3>mem.h</h3>
  <ul>
    <li><span>const heap_t</span> MEM_NAPA_HEAP</li> 
    <li><span>const heap_t</span> MEM_DDR_HEAP</li> 
    <li><span>void</span> memInit<span>(u32 totMem)</span></li> 
    <li><span>void </span> memAlloc<span>(u32 len)</span></li> 
    <li><span>void</span> memFree<span>(void *addr,u32 len)</span></li> 
    <li><span>void</span> memSetHeap<span>(heap_t)</span></li> 
    <li><span>heap_t</span> memGetHeap<span>(void)</span></li> 
    <li><span>void </span> memAllocHeap<span>(u32 len,heap_t heap)</span></li> 
    <li><span>u32</span> memGetSize<span>(void)</span></li> 
    <li><span>void</span> memRefreshInit<span>(u32 *freq_array)</span></li> 
    <li><span>void</span> memRefreshHandler<span>(void)</span></li> 
    <li><span>void</span> memRefreshHelper<span>(u32,u32)</span></li> 
    <li><span>void</span> memRefreshThread<span>()</span></li> 
    <li><span>void</span> memRefreshThreadInit<span>(u32 *freq_array,u32 priority)</span></li> 
    <li><span>u32</span> readDirectMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readDDRMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readSeqMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readBistMemReg<span>(u32)</span></li> 
    <li><span>u32</span> readPerfMemReg<span>(u32)</span></li> 
    <li><span>void</span> writeDirectMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeDDRMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeSeqMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writeBistMemReg<span>(u32,u32)</span></li> 
    <li><span>void</span> writePerfMemReg<span>(u32,u32)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">72</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ml.h" />
  <h3>ml.h</h3>
  <ul>
    <li><span>void</span> mlStart<span>(char *FileName,u32 memSize,u32 memStart)</span></li> 
    <li><span>void </span> mlAlloc<span>(u32 nbytes,MLMemType type,MLByteGrouping grouping)</span></li> 
    <li><span>void </span> mlAllocForce<span>(u32 addr,u32 nbytes,MLMemType type,MLByteGrouping grouping)</span></li> 
    <li><span>u32</span> mlGetAddr<span>(void *ptr)</span></li> 
    <li><span>void </span> mlGetCPtr<span>(u32 addr)</span></li> 
    <li><span>void</span> mlFlush<span>()</span></li> 
    <li><span>void</span> mlFree<span>(void *ptr)</span></li> 
    <li><span>void</span> mlReverseBytes<span>(void *ptr,u32 bytes)</span></li> 
    <li><span>void</span> mlSetCustomByteSwappingFunction<span>(MLByteGrouping grouping,MLByteSwappingFunction function,u32 stride)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">101</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mrexi.h" />
  <h3>mrexi.h</h3>
  <ul>
    <li><span>int</span> mrExiSerInit<span>(void)</span></li> 
    <li><span>void</span> mrExiPrint<span>(char *buf,int len)</span></li> 
    <li><span>int</span> mrExiProbe<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">63</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="n64cnt.h" />
  <h3>n64cnt.h</h3>
  <ul>
    <li><span>u32</span> joyStatus<span>(u32 chan,u32 *stData)</span></li> 
    <li><span>u32</span> joyReset<span>(u32 chan,u32 *stData)</span></li> 
    <li><span>u32</span> joyData<span>(u32 chan,u32 *data)</span></li> 
    <li><span>u16</span> joyAddrCrc<span>(u16 address)</span></li> 
    <li><span>u32</span> joyEERead<span>(u32 chan,u16 addr,u8 *data)</span></li> 
    <li><span>u32</span> joyEEWrite<span>(u32 chan,u16 addr,u8 *data)</span></li> 
    <li><span>void</span> joyDelay<span>(u32 delay)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">85</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="ntd_regs.h" />
  <h3>ntd_regs.h</h3>
  <ul>
    <li><span>u16 </span> __DSPRegs</li> 
    <li><span>u32 </span> __AIRegs</li> 
    <li><span>void</span> init_ntd_regs<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">36</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="nvram.h" />
  <h3>nvram.h</h3>
  <ul>
    <li><span>u32</span> nvRamWrite<span>(u32 addr,u8 *buf,u32 len)</span></li> 
    <li><span>u32</span> nvRamRead<span>(u32 addr,u8 *buf,u32 len)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">41</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="os.h" />
  <h3>os.h</h3>
  <ul>
    <li><span>u32</span> lbolt</li> 
    <li><span>u32</span> tmIrqTot</li> 
    <li><span>Thread</span> _tIdle</li> 
    <li><span>void</span> osInit<span>(void)</span></li> 
    <li><span>u32</span> threadCreate<span>(Thread *tp,const char *name,void *stack,u32 stackLen,void(*entry)(void *data),void *data,u32 pri)</span></li> 
    <li><span>void</span> threadSetFPEnable<span>(Thread *tp,u32 val)</span></li> 
    <li><span>void</span> threadDestroy<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadStart<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadStop<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadYield<span>(void)</span></li> 
    <li><span>void</span> threadSuspend<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadResume<span>(Thread *tp)</span></li> 
    <li><span>void</span> threadPriSet<span>(Thread *tp,u32 pri)</span></li> 
    <li><span>u32</span> threadPriGet<span>(Thread *tp)</span></li> 
    <li><span>Thread </span> threadCurGet<span>(void)</span></li> 
    <li><span>void</span> threadDelay<span>(u32 ticks)</span></li> 
    <li><span>void</span> semaInit<span>(Sema *sp,s32 cnt)</span></li> 
    <li><span>void</span> semaP<span>(Sema *sp)</span></li> 
    <li><span>void</span> semaV<span>(Sema *sp)</span></li> 
    <li><span>u32</span> semaTest<span>(Sema *sp)</span></li> 
    <li><span>void</span> condVarInit<span>(CondVar *cp,const char *name)</span></li> 
    <li><span>void</span> condVarWait<span>(CondVar *cp,Sema *sp)</span></li> 
    <li><span>void</span> condVarSignal<span>(CondVar *cp)</span></li> 
    <li><span>void</span> panic<span>(Context *,u32)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">21</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">113</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="reset.h" />
  <h3>reset.h</h3>
  <ul>
    <li><span>void</span> resetSys<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">32</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sdi.h" />
  <h3>sdi.h</h3>
  <ul>
    <li><span>void</span> sdi_init_intr<span>(void(*irqCb)(void))</span></li> 
    <li><span>void</span> sdi_init<span>(void(*irqCb)(void))</span></li> 
    <li><span>sdi_slot_t</span> sdi_handle<span>(u32 ctrl,u32 slot)</span></li> 
    <li><span>void</span> sdi_set_debug<span>(u32 debug)</span></li> 
    <li><span>u32</span> sdi_rd_reg<span>(sdi_slot_t sp,u32 offset)</span></li> 
    <li><span>void</span> sdi_wr_reg<span>(sdi_slot_t sp,u32 offset,u32 val)</span></li> 
    <li><span>void</span> sdi_wr_reg16<span>(sdi_slot_t sp,u32 offset,u32 val)</span></li> 
    <li><span>u32</span> sdi_verif_reg<span>(sdi_slot_t sp,u32 offset,u32 expected)</span></li> 
    <li><span>void</span> sdi_reg_intr<span>(sdi_slot_t sp,u32 intr,void(*irq)(sdi_slot_t,void *),void *closure)</span></li> 
    <li><span>void</span> sdi_intr<span>(void)</span></li> 
    <li><span>u32</span> sdi_get_istat<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_clear_istat<span>(sdi_slot_t sp,u32 ibits)</span></li> 
    <li><span>u32</span> sdi_wait_istat<span>(sdi_slot_t sp,u32 ibits,u32 bail_on_abort)</span></li> 
    <li><span>void</span> sdi_wr_host_ctrl<span>(sdi_slot_t sp,u32 in_data)</span></li> 
    <li><span>void</span> sdi_int_regs_en<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_wr_nor_int_sts_en<span>(sdi_slot_t sp,u32 en)</span></li> 
    <li><span>void</span> sdi_wr_err_int_sts_en<span>(sdi_slot_t sp,u32 en)</span></li> 
    <li><span>void</span> sdi_err_int_recover<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd<span>(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd)</span></li> 
    <li><span>u32</span> sdi_io_cmd<span>(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd,u32 blk_size,u32 blk_cnt,u32 dma,u32 wr)</span></li> 
    <li><span>void</span> sdi_read_io_coherency<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_write_io_coherency<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_resp_type_cal<span>(sdi_slot_t sp,u32 cmd_index,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_mem_cmd<span>(sdi_slot_t sp,u32 cmd_index,u32 arg,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_mem_cmd_data<span>(sdi_slot_t sp,u32 sysaddr,u32 cmd_index,u32 blk_size,u32 blk_cnt,u32 data_addr,u32 dma,u32 wr,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd0<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd2<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd3<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd7<span>(sdi_slot_t sp,u32 rca)</span></li> 
    <li><span>u32</span> sdi_cmd9<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd12<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd13<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_cmd16<span>(sdi_slot_t sp,u32 dflt_blk_size)</span></li> 
    <li><span>u32</span> sdi_cmd17<span>(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd18<span>(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd23<span>(sdi_slot_t sp,u32 blk_cnt)</span></li> 
    <li><span>u32</span> sdi_cmd24<span>(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd25<span>(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd32<span>(sdi_slot_t sp,u32 start_blk_addr)</span></li> 
    <li><span>u32</span> sdi_cmd33<span>(sdi_slot_t sp,u32 end_blk_addr)</span></li> 
    <li><span>u32</span> sdi_cmd38<span>(sdi_slot_t sp,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd52<span>(sdi_slot_t sp,u32 reg_addr,u32 sd_wr_data,u32 fn_no,u32 raw,u32 wr,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd53<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 wr,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdi_cmd55<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_acmd6<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>u32</span> sdi_dma_done<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_abort<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_suspend<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_resume<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_set_async_mode<span>(sdi_slot_t sp,u32 mode)</span></li> 
    <li><span>void</span> sdi_wr_clk_ctrl<span>(sdi_slot_t sp,u32 clk_ctrl)</span></li> 
    <li><span>void</span> sdi_wr_blk_gap_ctrl<span>(sdi_slot_t sp,u32 bgap_ctrl)</span></li> 
    <li><span>void</span> sdi_wr_timeout_reg<span>(sdi_slot_t sp,u32 timeout_cnt)</span></li> 
    <li><span>void</span> sdi_set_bus_width<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>void</span> sdi_rd_sd_hc_capabilities<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_clock_supply<span>(sdi_slot_t sp,u32 div)</span></li> 
    <li><span>void</span> sdi_clock_stop<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_clock_change<span>(sdi_slot_t sp,u32 div)</span></li> 
    <li><span>void</span> sdi_bus_power<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_validate_ocr<span>(sdi_slot_t sp,u32 ocr_data,u32 mem,u32 mmc)</span></li> 
    <li><span>u32</span> sdi_card_insertion<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_io_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdi_mem_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdi_mmc_card_init<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSwapBytes4<span>(u32 value)</span></li> 
    <li><span>u32</span> checkErrorInt<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiCardDetect<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiFindCard<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> waitTransferComplete<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiGoIdle<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiIoReset<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> sdiSoftReset<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sendCmd<span>(sdi_slot_t sp,u32 arg,u32 tmdcmd)</span></li> 
    <li><span>u32</span> sdiSendStatus<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendOpCondition<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiAllSendCid<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendRca<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSendCsd<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSelectCard<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSetBlockLength<span>(sdi_slot_t sp,u32 blksiz)</span></li> 
    <li><span>u32</span> sdiSetBusWidth<span>(sdi_slot_t sp,u32 buswidth)</span></li> 
    <li><span>u32</span> sdiAsyncAbort<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiSyncAbort<span>(sdi_slot_t sp)</span></li> 
    <li><span>void</span> updateDmaPointer<span>(sdi_slot_t sp)</span></li> 
    <li><span>u32</span> sdiReadSingleBlock<span>(sdi_slot_t sp,u32 arg,u32 *rdbuf,u32 dma)</span></li> 
    <li><span>u32</span> sdiWriteSingleBlock<span>(sdi_slot_t sp,u32 arg,u32 *wrbuf,u32 dma)</span></li> 
    <li><span>u32</span> sdiReadBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiWriteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)</span></li> 
    <li><span>u32</span> sdiReadMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)</span></li> 
    <li><span>u32</span> sdiWriteMultipleBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)</span></li> 
    <li><span>u32</span> sdiReadInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>u32</span> sdiWriteInfiniteBlock<span>(sdi_slot_t sp,u32 arg,u32 blkcnt)</span></li> 
    <li><span>u32</span> sdioByteRead<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioByteWrite<span>(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 wr_data,u32 raw,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtRead<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
    <li><span>u32</span> sdioExtWrite<span>(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">96</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">263</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="serrx.h" />
  <h3>serrx.h</h3>
  <ul>
    <li><span>int</span> serRxInit<span>(u32 hwFlowEnable)</span></li> 
    <li><span>u8</span> serRxgetkey<span>(void)</span></li> 
    <li><span>u32</span> serRxkbhit<span>(void)</span></li> 
    <li><span>int</span> serRxInitParam<span>(u32 chan,u32 cs,u32 hwFlowEnable)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sfx.h" />
  <h3>sfx.h</h3>
  <ul>
    <li><span>void</span> sfxPlay<span>(u32 sound)</span></li> 
    <li><span>void</span> sfxInit<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">37</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="sha.h" />
  <h3>sha.h</h3>
  <ul>
    <li><span>int</span> SHA_Busy<span>(void)</span></li> 
    <li><span>void</span> SHA_Calc<span>(u32 Addr,u32 numBlocks,u32 intrEnable)</span></li> 
    <li><span>void</span> SHA_Result<span>(u32 *result)</span></li> 
    <li><span>int</span> SHA_Match<span>(u32 *a,u32 *b)</span></li> 
    <li><span>void</span> SHA_Clear<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">14</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="si.h" />
  <h3>si.h</h3>
  <ul>
    <li><span>u32</span> siInit<span>(void(*comCb)(u32 sisr),void(*pollCb)(u32 sisr))</span></li> 
    <li><span>void</span> siChanOutSet<span>(u32 *chanData)</span></li> 
    <li><span>u32</span> siChansRead<span>(u32 *chanData)</span></li> 
    <li><span>void</span> siPollRegSet<span>(u32 x,u32 y,u32 enMask,u32 vbCpyMask)</span></li> 
    <li><span>void</span> siPollRegGet<span>(u32 *x,u32 *y,u32 *enMask,u32 *vbCpyMask)</span></li> 
    <li><span>u32</span> siComm<span>(u32 chanNo,u32 *out,u32 oLen,u32 iLen)</span></li> 
    <li><span>u32</span> siSync<span>(void)</span></li> 
    <li><span>void</span> siPollWait<span>(u32 chanMask)</span></li> 
    <li><span>void</span> siComDataGet<span>(u32 *in,u32 cnt)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">57</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="snake.h" />
  <h3>snake.h</h3>
  <ul>
    <li><span>void</span> Line<span>(int x,int y,int x2,int y2,unsigned char c,unsigned char u,unsigned char v)</span></li> 
    <li><span>void</span> Circle<span>(int xc,int yc,int r,unsigned char c,unsigned char u,unsigned char v)</span></li> 
    <li><span>u32</span> GameOver<span>(PLAYER *snake)</span></li> 
    <li><span>void</span> ExplodeSnake<span>(int player_num,PLAYER *snake)</span></li> 
    <li><span>void</span> PrintScore<span>(PLAYER *snake)</span></li> 
    <li><span>void</span> Delay<span>(u32 delay_value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">117</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="standio.h" />
  <h3>standio.h</h3>
  <ul>
    <li><span>int</span> ioInit<span>(void)</span></li> 
    <li><span>int</span> open<span>(const char *path,int oflag)</span></li> 
    <li><span>int</span> close<span>(int fd)</span></li> 
    <li><span>ssize_t</span> read<span>(int fd,void *buf,size_t nbytes)</span></li> 
    <li><span>off_t</span> lseek<span>(int fd,off_t offset,int whence)</span></li> 
    <li><span>off_t</span> tell<span>(int fd)</span></li> 
    <li><span>FILE </span> fopen<span>(const char *filename,const char *mode)</span></li> 
    <li><span>int</span> fclose<span>(FILE *fp)</span></li> 
    <li><span>size_t</span> fread<span>(void *ptr,size_t size,size_t nitems,FILE *fp)</span></li> 
    <li><span>int</span> fgetc<span>(FILE *stream)</span></li> 
    <li><span>int</span> getc<span>(FILE *stream)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">59</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="swab.h" />
  <h3>swab.h</h3>
  <ul>
    <li><span>__inline__ __const__ u16</span> __fswab16<span>(u16 x){return __arch__swab16(x)</span></li> 
    <li><span>__inline__ u16</span> __swab16p<span>(u16 *x){return __arch__swab16p(x)</span></li> 
    <li><span>__inline__ void</span> __swab16s<span>(u16 *addr){__arch__swab16s(addr)</span></li> 
    <li><span>__inline__ __const__ u32</span> __fswab32<span>(u32 x){return __arch__swab32(x)</span></li> 
    <li><span>__inline__ u32</span> __swab32p<span>(u32 *x){return __arch__swab32p(x)</span></li> 
    <li><span>__inline__ void</span> __swab32s<span>(u32 *addr){__arch__swab32s(addr)</span></li> 
    <li><span>u32</span> h</li> 
    <li><span>u32</span> l</li> 
    <li><span></span> return<span>(((u64)__swab32(l))<<32)|((u64)(__swab32(h)))</span></li> 
    <li><span>return</span> __arch__swab64<span>(x)</span></li> 
    <li><span>__inline__ u64</span> __swab64p<span>(u64 *x){return __arch__swab64p(x)</span></li> 
    <li><span>__inline__ void</span> __swab64s<span>(u64 *addr){__arch__swab64s(addr)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">159</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb.h" />
  <h3>usb.h</h3>
  <ul>
    <li><span>void</span> usbInit<span>()</span></li> 
    <li><span>void</span> writeDescriptor<span>(u32 addr,u32 dw0,u32 dw1,u32 dw2,u32 dw3)</span></li> 
    <li><span>void</span> writeFmInt<span>(u32 dw)</span></li> 
    <li><span>void</span> writeBulkHeadList<span>(u32 dw)</span></li> 
    <li><span>void</span> setBulkListEn<span>()</span></li> 
    <li><span>void</span> setTDFound<span>()</span></li> 
    <li><span>void</span> setOperational<span>()</span></li> 
    <li><span>void</span> writePort1Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writePort2Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeFmRem<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1FmInt<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1BulkHeadList<span>(u32 dw)</span></li> 
    <li><span>void</span> setOH1BulkListEn<span>()</span></li> 
    <li><span>void</span> setOH1TDFound<span>()</span></li> 
    <li><span>void</span> setOH1Operational<span>()</span></li> 
    <li><span>void</span> writeOH1Port1Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1Port2Stat<span>(u32 dw)</span></li> 
    <li><span>void</span> writeOH1FmRem<span>(u32 dw)</span></li> 
    <li><span>void</span> oh0Init<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void</span> oh1Init<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void</span> ehcInit<span>(void(*_Cb)(void),int mask)</span></li> 
    <li><span>void(</span> usb_udelay_function<span>)(u32 delay)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">22</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">39</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_input.h" />
  <h3>usb_input.h</h3>
  <ul>
    <li><span>void</span> input_register_device<span>(struct input_dev *)</span></li> 
    <li><span>void</span> input_unregister_device<span>(struct input_dev *)</span></li> 
    <li><span>void</span> input_register_handler<span>(struct input_handler *)</span></li> 
    <li><span>void</span> input_unregister_handler<span>(struct input_handler *)</span></li> 
    <li><span>int</span> input_open_device<span>(struct input_handle *)</span></li> 
    <li><span>void</span> input_close_device<span>(struct input_handle *)</span></li> 
    <li><span>void</span> input_event<span>(struct input_dev *dev,unsigned int type,unsigned int code,int value)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">747</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_mem.h" />
  <h3>usb_mem.h</h3>
  <ul>
    <li><span>void </span> usb_malloc_dma<span>(u32 len,u32 *dma_addr)</span></li> 
    <li><span>struct usb_pool </span> usb_pool_create<span>(u32 size,u32 uncached)</span></li> 
    <li><span>dma_addr_t</span> usb_map_single<span>(void *transfer_buffer,int data_len,int dir)</span></li> 
    <li><span>void</span> usb_unmap_single<span>(u32 dma_addr,int len,int dir)</span></li> 
    <li><span>void </span> usb_pool_alloc<span>(struct usb_pool *ppool,u32 *dma_addr)</span></li> 
    <li><span>void</span> usb_pool_free<span>(struct usb_pool *ppool,void *pobj,u32 dma_addr)</span></li> 
    <li><span>void</span> usb_pool_destroy<span>(struct usb_pool *ppool)</span></li> 
    <li><span>void </span> usb_malloc<span>(u32 len)</span></li> 
    <li><span>void</span> usb_free<span>(void *p,u32 len)</span></li> 
    <li><span>void</span> usb_memset<span>(void *cp,u32 val,int size)</span></li> 
    <li><span>void </span> usb_memscan<span>(void *addr,int c,size_t size)</span></li> 
    <li><span>u32</span> usb_check_payload<span>(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer,u32 *next_value)</span></li> 
    <li><span>u32</span> usb_fill_payload<span>(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">13</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_spin.h" />
  <h3>usb_spin.h</h3>
  <ul>
    <li><span>void</span> spin_lock_irqsave<span>(spinlock_t *sp_lock,int flags)</span></li> 
    <li><span>void</span> spin_unlock_irqrestore<span>(spinlock_t *sp_lock,int flags)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">34</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="usb_timer.h" />
  <h3>usb_timer.h</h3>
  <ul>
    <li><span>void</span> mod_timer<span>(struct timer_list *tlist,u32 val)</span></li> 
    <li><span>void</span> del_timer_sync<span>(struct timer_list *tlist)</span></li> 
    <li><span>u32</span> timer_pending<span>(struct timer_list *tlist)</span></li> 
    <li><span>void</span> add_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>void</span> init_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>void</span> del_timer<span>(struct timer_list *wh)</span></li> 
    <li><span>int</span> time_after<span>(u32 jiff,int timeout)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">7</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">25</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="util.h" />
  <h3>util.h</h3>
  <ul>
    <li><span>u32</span> swapBytes4<span>(u32 input)</span></li> 
    <li><span>void</span> swapBytesPtr<span>(void *ptr,int byteCount)</span></li> 
    <li><span>void</span> swapByteGroupingsPtr<span>(void *ptr,int groupSize,int groupCount)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">20</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="vi.h" />
  <h3>vi.h</h3>
  <ul>
    <li><span>vireg</span> viRegs[]</li> 
    <li><span>const encoder_type_t</span> VI_ENCODER_ROHM</li> 
    <li><span>const encoder_type_t</span> VI_ENCODER_CONXT</li> 
    <li><span>void</span> viNtsc<span>(void)</span></li> 
    <li><span>void</span> viSetFormat<span>(viFormat fmat,u32 xoff,u32 yoff,u32 height,u32 width)</span></li> 
    <li><span>void</span> viSetFieldSrc<span>(viBase field,u32 addr,u32 width,u32 stride)</span></li> 
    <li><span>void</span> viEnable<span>(u32 e)</span></li> 
    <li><span>void</span> viLoad<span>(void)</span></li> 
    <li><span>void</span> viLoadSync<span>(void)</span></li> 
    <li><span>void</span> fire_gun1<span>(int duration)</span></li> 
    <li><span>void</span> fire_gun0<span>(int duration)</span></li> 
    <li><span>int</span> mon_tstgun0clr<span>(void)</span></li> 
    <li><span>int</span> mon_tstgun1clr<span>(void)</span></li> 
    <li><span>int</span> confirm_gun0<span>(void)</span></li> 
    <li><span>int</span> confirm_gun1<span>(void)</span></li> 
    <li><span>int</span> confirm_notgun0<span>(void)</span></li> 
    <li><span>int</span> confirm_notgun1<span>(void)</span></li> 
    <li><span>int</span> chk_int<span>(int int_num)</span></li> 
    <li><span>void</span> clr_int<span>(int int_num,u32 vct,u32 enb)</span></li> 
    <li><span>void</span> viNtsc<span>(void)</span></li> 
    <li><span>u16</span> __VIRegs<span>(int index)</span></li> 
    <li><span>void</span> printVIRegs<span>(void)</span></li> 
    <li><span>void</span> SetVIInt<span>(int int_num,int int_enb,u16 hct,u16 vct)</span></li> 
    <li><span>void</span> ClrVIInt<span>(int int_num)</span></li> 
    <li><span>void</span> __VISet3in1Output<span>(VIBool enable)</span></li> 
    <li><span>void</span> GPIOInit<span>(void)</span></li> 
    <li><span>void</span> outputLed<span>(int value)</span></li> 
    <li><span>BOOL</span> __VISetSCL<span>(u32 value)</span></li> 
    <li><span>BOOL</span> __VISetSDA<span>(u32 value)</span></li> 
    <li><span>void</span> __VIOpenI2C<span>(void)</span></li> 
    <li><span>void</span> __VICloseI2C<span>(void)</span></li> 
    <li><span>void</span> __VISet3in1Output<span>(VIBool enable)</span></li> 
    <li><span>void</span> __VISetVolume<span>(u8 volumeL,u8 volumeR)</span></li> 
    <li><span>void</span> YUVSolidColor<span>(u8 y,u8 u,u8 v,u8 enable)</span></li> 
    <li><span>void</span> vipll_init<span>(void)</span></li> 
    <li><span>void</span> ViLcdInit<span>(void)</span></li> 
    <li><span>void</span> vi_setcnxt_reg<span>(u8 addr,u8 data)</span></li> 
    <li><span>void</span> viHd1080i<span>(void)</span></li> 
    <li><span>void</span> viHd720p<span>(void)</span></li> 
    <li><span>BOOL</span> __VIRelSCL<span>(u32 value)</span></li> 
    <li><span>BOOL</span> __VIDisSDA<span>(u32 value)</span></li> 
    <li><span>u8</span> VIGetSDA<span>(void)</span></li> 
    <li><span>u8</span> vi_getcnxt_reg<span>(u8 addr,u8 data)</span></li> 
    <li><span>s32</span> __VIGetI2CData<span>(u8 slaveAddr,u8 *pData,s32 nBytes)</span></li> 
    <li><span>s32</span> __VIsetI2CAddress<span>(u8 slaveAddr,u8 *pData,s32 nBytes)</span></li> 
    <li><span>void</span> set_current_vi_encoder<span>(encoder_type_t enc_type)</span></li> 
    <li><span>void</span> vi_init_hd<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">44</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">169</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="vi_conexant.h" />
  <h3>vi_conexant.h</h3>
  <ul>
    <li><span>void</span> read_print<span>(u8 addr)</span></li> 
    <li><span>void</span> conexant_set_hdtv_mode<span>(HdFormat hdtv_mode)</span></li> 
    <li><span>int</span> i2c_writereg<span>(unsigned char theSlave,unsigned char theReg,unsigned char theValue)</span></li> 
    <li><span>unsigned char</span> i2c_readreg<span>(unsigned char theSlave,unsigned char theReg)</span></li> 
    <li><span>void</span> i2c_gpioinit<span>(void)</span></li> 
    <li><span>void</span> vi_init_hd<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">15</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="video.h" />
  <h3>video.h</h3>
  <ul>
    <li><span>void</span> videoInit<span>(void *fb,int format)</span></li> 
    <li><span>void</span> videoSwapBuffers<span>(void *fb)</span></li> 
    <li><span>void</span> videoUseISR4Swap<span>(void)</span></li> 
    <li><span>int</span> videoGetEncoderType<span>(void)</span></li> 
    <li><span>void</span> viDump<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">71</div>  </div>
 </div>

</section>

---
## Diag (ati/diag)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/diag</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains interfaces for direct access to PowerPC registers, including Broadway specific ones. Judging by the name of this folder it is maily for testing that the PowerPC CPU is correctly handling the different register values in tests written for **DIAG4RVL**.

  </div>
</section>  

File Name | Extension | Description
---|---|---
PPCArch | .h | Include file for declaring pre-processor constants for PowerPC such as **IBAT4U** which is a Broadway register
model/unshared | .h | Include file for declaring a bunch of powerPX functions  for getting and setting register values such as **ppcHID0Set**


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="unshared.h" />
  <h3>unshared.h</h3>
  <ul>
    <li><span>void</span> halt<span>(void)</span></li> 
    <li><span>void</span> ppcL1Enable<span>(void)</span></li> 
    <li><span>void</span> ppcL2Enable<span>(void)</span></li> 
    <li><span>void</span> ppcHID0Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID0Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID2Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID2Get<span>(void)</span></li> 
    <li><span>void</span> ppcHID4Set<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcHID4Get<span>(void)</span></li> 
    <li><span>void</span> ppcL2CRSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcL2CRGet<span>(void)</span></li> 
    <li><span>void</span> ppcWPARSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcWPARGet<span>(void)</span></li> 
    <li><span>void</span> ppcDecSet<span>(u32 val)</span></li> 
    <li><span>void</span> ppcMsrSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcMsrGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBUSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBUGet<span>(void)</span></li> 
    <li><span>void</span> ppcTBLSet<span>(u32 val)</span></li> 
    <li><span>u32</span> ppcTBLGet<span>(void)</span></li> 
    <li><span>u32</span> ppcPVRGet<span>(void)</span></li> 
    <li><span>void</span> setIrqHndlr<span>(void(*hndlr)())</span></li> 
    <li><span>void</span> __dcbi<span>(u32 *,u32)</span></li> 
    <li><span>void</span> __icbi<span>(u32 *,u32)</span></li> 
    <li><span>u32</span> __lwarx<span>(u32)</span></li> 
    <li><span>void</span> __stwcx<span>(u32,u32)</span></li> 
    <li><span>void</span> _ctxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> _irqCtxSw<span>(void *newCtx)</span></li> 
    <li><span>void</span> ppcSync<span>(void)</span></li> 
    <li><span>void</span> ppcEeieo<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">30</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">76</div>  </div>
 </div>

</section>

---
## Export (ati/export)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/export</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains a subset of the header files copied from the GX folder, basically identical copies without the **gxreg.h** file. No idea why these would be used instead of the standard ones under the GX folder..

Check the next section for the description of the GX files for information on them, no point in duplicating the descriptions in this section.

  </div>
</section> 

---
## Fiddle (FDL) Generated Headers (ati/fdl)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/fdl</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains C header files automatically generated from a tool called **fiddle** that takes in Field  description language **.fdl** files and returns a C header file with lots of pre-processor constants.

The original fiddle files have already been documented in the Emerald leak, so if you are interested check out our page on that leak.

  </div>
</section>  

{% include link-to-other-post.html post="/emeraldleak" description="For more information on the Emerald leak check out this post." %}

File Name | Extension | Description
---|---|---
ahb_fdl_defs | .h | Include file for declaring ?
bp_reg | .h | Include file for declaring Blitting Processor details
cp_reg | .h | Include file for declaring Command processor details
dsp_reg | .h | Include file for declaring Digital Signal Processor details
gen_if | .h | Include file for declaring ?
gen_reg | .h | Include file for declaring ?
io_reg | .h | Include file for declaring ?
mem_reg | .h | Include file for declaring ?
pe_misc | .h | Include file for declaring Pixel engine details
pe_reg | .h | Include file for declaring Pixel engine register details
pi_reg | .h | Include file for declaring Processor Interface
ra_gen | .h | Include file for declaring ?
ras2_tev_if | .h | Include file for declaring ?
ras_reg | .h | Include file for declaring ?
su_reg | .h | Include file for declaring Setup Unit details
tev_reg | .h | Include file for declaring Texture Color Combiner details
tx_reg | .h | Include file for declaring Texture registers
vi_reg | .h | Include file for declaring Video Interface registers
xf_cmds | .h | Include file for declaring XF (Transform unit) commands
xf_mem | .h | Include file for declaring ?
xf_state | .h | Include file for declaring ?
xf_ucode | .h | Include file for declaring ?

Not exactly sure what the Gamecube/Wii **XF** hardware is but seems to be able to read commands and microcode (ucode).

---
## Gx (ati/gx)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gx</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the C-Header files used for Graphics development using the Gamecube/Wii GPU known as Flipper/Broadway.

  </div>
</section>  

File Name | Extension | Description
---|---|---
gx | .h | Include file for declaring all the Graphics related structures and functions such as **GXInitTexObj**
gxfifo | .h | Include file for declaring a simulation of the Graphics FIFO pipeline in software
gxreg | .h | Include file for declaring a simulation of the Graphics hardware Registers in software
vertex | .h | Include file for declaring pre-processor defines related to vertices such as **GXTexCoord2bv**


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="gx.h" />
  <h3>gx.h</h3>
  <ul>
    <li><span>void </span> memset32<span>(void *,u32,u32)</span></li> 
    <li><span>void </span> memcpy32<span>(void *,const void *,u32)</span></li> 
    <li><span>int</span> memcmp32<span>(const void *,const void *,u32)</span></li> 
    <li><span>void</span> GXSetVtxDesc<span>(GXAttr Attr,GXAttrType Type)</span></li> 
    <li><span>void</span> GXSetVtxDescv<span>(GXVtxDescList *AttrPtr)</span></li> 
    <li><span>void</span> GXGetVtxDesc<span>(GXAttr Attr,GXAttrType *TypePtr)</span></li> 
    <li><span>void</span> GXClearVtxDesc<span>(void)</span></li> 
    <li><span>void</span> GXSetVtxAttrFmt<span>(GXVtxFmtID Idx,GXAttr Attr,GXCompCnt CompCnt,GXCompType CompType,u8 Shift)</span></li> 
    <li><span>void</span> GXSetVtxAttrFmtv<span>(GXVtxFmtID Idx,GXVtxFmtList *AttrPtr)</span></li> 
    <li><span>void</span> GXGetVtxAttrFmt<span>(GXVtxFmtID Idx,GXAttr Attr,GXCompCnt *CompCnt,GXCompType *CompType,u8 *Shift)</span></li> 
    <li><span>void</span> GXSetArray<span>(GXAttr Attr,u32 Base,u8 Stride)</span></li> 
    <li><span>void</span> GXGetArray<span>(GXAttr Attr,u32 *Base,u8 *Stride)</span></li> 
    <li><span>void</span> GXSetTexCoordGen<span>(GXTexCoord Coord,GXTexGenType Type,u8 MatIdx)</span></li> 
    <li><span>void</span> GXGetTexCoordGen<span>(GXTexCoord Coord,GXTexGenType *Type,u8 *MatIdx)</span></li> 
    <li><span>void</span> GXSetTexCoordGen2<span>(GXTexCoord Coord,GXTexGenFunc Func,GXTexGenSrc Source,u8 MatIdx)</span></li> 
    <li><span>void</span> GXSetTexCoordWrap<span>(GXTexCoord Coord,GXBool CylWrapS,GXBool CylWrapT,GXBool BiasS,GXBool BiasT,GXBool LineOffset,GXBool PointOffset)</span></li> 
    <li><span>void</span> GXSetBumpSource<span>(GXTexCoord Coord,GXTexCoord SrcCoord,GXLightID SrcLight)</span></li> 
    <li><span>void</span> GXGetBumpSource<span>(GXTexCoord Coord,GXTexCoord *SrcCoord,GXLightID *SrcLight)</span></li> 
    <li><span>void</span> GXSetTexCoordTrans<span>(GXTexCoord Coord,GXMtxName MtxIdx,GXBool Normalize)</span></li> 
    <li><span>void</span> GXSetDualTexTrans<span>(GXBool Enable)</span></li> 
    <li><span>void</span> GXSetCCConstColor<span>(GXCCRegID CCReg,GXColor Color)</span></li> 
    <li><span>void</span> GXGetCCConstColor<span>(GXCCRegID CCReg,GXColor *Color)</span></li> 
    <li><span>void</span> GXSetCCConstSelect<span>(GXCCStageID CCStageId,GXCCColSelect ConstSelect)</span></li> 
    <li><span>void</span> GXGetCCConstSelect<span>(GXCCStageID CCStageId,GXCCColSelect *ConstSelect)</span></li> 
    <li><span>void</span> GXSetACConstSelect<span>(GXCCStageID CCStageId,GXCCColSelect ConstSelect)</span></li> 
    <li><span>void</span> GXGetACConstSelect<span>(GXCCStageID CCStageId,GXCCColSelect *ConstSelect)</span></li> 
    <li><span>void</span> GXSetCCSwapModeTableEntry<span>(GXCCSwSelect CCSwapId,GXCCChannel Red,GXCCChannel Green,GXCCChannel Blue,GXCCChannel Alpha)</span></li> 
    <li><span>void</span> GXGetCCSwapModeTableEntry<span>(GXCCSwSelect CCSwapId,GXCCChannel *Red,GXCCChannel *Green,GXCCChannel *Blue,GXCCChannel *Alpha)</span></li> 
    <li><span>void</span> GXSetCCSwapMode<span>(GXCCStageID CCStageId,GXCCSwSelect TextureSwap,GXCCSwSelect RasterSwap)</span></li> 
    <li><span>void</span> GXGetCCSwapMode<span>(GXCCStageID CCStageId,GXCCSwSelect *TextureSwap,GXCCSwSelect *RasterSwap)</span></li> 
    <li><span>void</span> GXClearVertexCache<span>(void)</span></li> 
    <li><span>void</span> GXGetVertexCacheStatus<span>(u32 *CheckCnt,u32 *MissCnt,u32 *StallCnt)</span></li> 
    <li><span>void</span> GXBeginPrimitive<span>(GXPrimitive Type,GXVtxFmtID VatIdx,u16 Nverts)</span></li> 
    <li><span>void</span> GXBeginPrimitive2<span>(GXPrimitive Type,GXVtxFmtID VatIdx,u16 Nverts)</span></li> 
    <li><span>void</span> GXEndPrimitive<span>(void)</span></li> 
    <li><span>void</span> GXSetLineWidth<span>(u8 Width,GXTexOffsets Offset)</span></li> 
    <li><span>void</span> GXGetLineWidth<span>(u8 *Width,GXTexOffsets *Offset)</span></li> 
    <li><span>void</span> GXSetPointSize<span>(u8 PointSize,GXTexOffsets Offset)</span></li> 
    <li><span>void</span> GXGetPointSize<span>(u8 *PointSize,GXTexOffsets *Offset)</span></li> 
    <li><span>void</span> GXSetShadeMode<span>(GXShadeModes Mode)</span></li> 
    <li><span>void</span> GXGetShadeMode<span>(GXShadeModes *Mode)</span></li> 
    <li><span>void</span> GXSetAntiAliasing<span>(GXBool Mode,u8 SamplePts[4][3][2])</span></li> 
    <li><span>void</span> GXGetAntiAliasing<span>(GXBool *Mode,u8 SamplePts[4][3][2])</span></li> 
    <li><span>void</span> GXSetCoPlanar<span>(GXBool Enable)</span></li> 
    <li><span>void</span> GXGetCoPlanar<span>(GXBool *Enable)</span></li> 
    <li><span>void</span> GXSetFieldMode<span>(GXBool texLod,GXBool linewd)</span></li> 
    <li><span>void</span> GXSetProjection<span>(f32 Matrix[4][4],GXProjMtxType type)</span></li> 
    <li><span>void</span> GXLoadPosMatrixIndx<span>(u32 ArrayIdx,GXMtxName MatName)</span></li> 
    <li><span>void</span> GXLoadNormMatrixIndx<span>(u32 ArrayIdx,GXMtxName MatName)</span></li> 
    <li><span>void</span> GXLoadTexMatrixIndx<span>(u32 ArrayIdx,GXMtxName MatName,GXMtxType Type)</span></li> 
    <li><span>void</span> GXLoadPosMatrixImm<span>(f32 *MatrixPtr,GXMtxName MatName)</span></li> 
    <li><span>void</span> GXLoadNormMatrixImm<span>(f32 *MatrixPtr,GXMtxName MatName)</span></li> 
    <li><span>void</span> GXLoadTexMatrixImm<span>(f32 *MatrixPtr,GXMtxName MatName,GXMtxType Type)</span></li> 
    <li><span>void</span> GXSetDefaultMatrix<span>(GXMtxName MatName)</span></li> 
    <li><span>void</span> GXGetDefaultMatrix<span>(GXMtxName *MatName)</span></li> 
    <li><span>void</span> GXSetViewport<span>(s16 Left,s16 Top,u16 Width,u16 Height,f32 Near,f32 Far)</span></li> 
    <li><span>void</span> GXGetViewport<span>(s16 *Left,s16 *Top,u16 *Width,u16 *Height,f32 *Near,f32 *Far)</span></li> 
    <li><span>void</span> GXSetScissor<span>(u16 Left,u16 Top,u16 Width,u16 Height)</span></li> 
    <li><span>void</span> GXGetScissor<span>(u16 *Left,u16 *Top,u16 *Width,u16 *Height)</span></li> 
    <li><span>void</span> GXSetCullMode<span>(GXCullModes Mode)</span></li> 
    <li><span>void</span> GXGetCullMode<span>(GXCullModes *Mode)</span></li> 
    <li><span>void</span> GXInitLightAttn<span>(GXLightObj *ptr,f32 A0,f32 A1,f32 A2,f32 K0,f32 K1,f32 K2)</span></li> 
    <li><span>void</span> GXInitShininess<span>(GXLightObj *ptr,f32 Shininess)</span></li> 
    <li><span>void</span> GXInitLightPos<span>(GXLightObj *ptr,f32 X,f32 Y,f32 Z)</span></li> 
    <li><span>void</span> GXInitLightDir<span>(GXLightObj *ptr,f32 X,f32 Y,f32 Z)</span></li> 
    <li><span>void</span> GXInitLightColor<span>(GXLightObj *ptr,GXColor LightColor)</span></li> 
    <li><span>void</span> GXLoadLightStateImm<span>(GXLightObj *ptr,GXLightID LightId)</span></li> 
    <li><span>void</span> GXLoadLightStateIndx<span>(u32 LightObjIdx,GXLightID LightId)</span></li> 
    <li><span>void</span> GXSetAmbientColor<span>(GXColorID ColorId,GXColor AmbColor)</span></li> 
    <li><span>void</span> GXGetAmbientColor<span>(GXColorID ColorId,GXColor *AmbColor)</span></li> 
    <li><span>void</span> GXSetMaterialColor<span>(GXColorID ColorId,GXColor MatColor)</span></li> 
    <li><span>void</span> GXGetMaterialColor<span>(GXColorID ColorId,GXColor *MatColor)</span></li> 
    <li><span>void</span> GXSetLightCtrl<span>(GXColorID ColorId,GXBool Enable,GXColorSrc AmbSource,GXColorSrc MatSource,GXLightID LightMask,GXDiffuseFn DiffFunc,GXAttnFn AttnFunc)</span></li> 
    <li><span>void</span> GXGetLightCtrl<span>(GXColorID ColorId,GXBool *Enable,GXColorSrc *AmbSource,GXColorSrc *MatSource,GXLightID *LightMask,GXDiffuseFn *DiffFunc,GXAttnFn *AttnFunc)</span></li> 
    <li><span>void</span> GXInitTexObj<span>(GXTexObj *TexObjPtr,void *ImagePtr,u16 Width,u16 Height,GXTexFormats Format,GXTexWrapModes WrapS,GXTexWrapModes WrapT,GXTexFilters MinFilt,GXTexFilters MagFilt,f32 MinLod,f32 MaxLod,f32 LodBias,GXBool doEdgeLod)</span></li> 
    <li><span>void</span> GXInitTexObj2<span>(GXTexObj *TexObjPtr,GXBool LodClamp,GXTexAnisotropy MaxAniso,GXBool FieldPredict,GXBool BilinearRound)</span></li> 
    <li><span>void</span> GXInitTlutObj<span>(GXTlutObj *TlutObjPtr,void *LutPtr,u16 NumEntries,GXTlutFormats Format)</span></li> 
    <li><span>void</span> GXInitTexRegion<span>(GXTexRegion *TexRegionPtr,GXBool IsCached,void *TmemEvenPtr,u8 WidthEven,u8 HeightEven,void *TmemOddPtr,u8 WidthOdd,u8 HeightOdd)</span></li> 
    <li><span>void</span> GXInitTlutRegion<span>(GXTlutRegion *TlutRegionPtr,void *TmemPtr)</span></li> 
    <li><span>void</span> GXPreLoadTexture<span>(GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)</span></li> 
    <li><span>void</span> GXLoadTlut<span>(GXTlutObj *TlutObjPtr,GXTlutRegion *TlutRegionPtr)</span></li> 
    <li><span>void</span> GXLoadTexState<span>(GXTexMapID TexId,GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)</span></li> 
    <li><span>void</span> GXLoadTlutState<span>(GXTexMapID TexId,GXTlutObj *TlutObjPtr,GXTlutRegion *TlutRegionPtr)</span></li> 
    <li><span>void</span> GXClearTexRegion<span>(GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)</span></li> 
    <li><span>void</span> GXFlushTextureState<span>(void)</span></li> 
    <li><span>void</span> GXInitIndirectTexture<span>(GXCCStageID CCStageId,GXIndTexMapID TexId,GXIndTexFormats Fmt,GXIndTexBias Bias,GXIndTexAlphaSel AlphaSel,GXIndTexMtxID MatrixSel,GXIndTexWrap WrapS,GXIndTexWrap WrapT,GXBool IndLOD,GXBool AddPrev)</span></li> 
    <li><span>void</span> GXSetIndTexMtx<span>(GXIndTexMtxID MtxId,f32 OffsetMatrix[3][2],u8 ScaleExp)</span></li> 
    <li><span>void</span> GXSetIndTexScale<span>(GXIndTexMapID IndTexId,GXIndTexScale ScaleS,GXIndTexScale ScaleT)</span></li> 
    <li><span>void</span> GXSetIndTexOrder<span>(u8 NumIndTex,GXIndTexMapID IndTexId[],GXTexMapID TexId[],GXTexCoord TexCoord[])</span></li> 
    <li><span>void</span> GXSetCCOp<span>(GXCCStageID CCStageId,GXCCOps ColorOp,GXCCArgs Arg1,GXCCArgs Arg2,GXCCArgs Arg3,GXCCArgs Arg4)</span></li> 
    <li><span>void</span> GXGetCCOp<span>(GXCCStageID CCStageId,GXCCOps *ColorOp,GXCCArgs *Arg1,GXCCArgs *Arg2,GXCCArgs *Arg3,GXCCArgs *Arg4)</span></li> 
    <li><span>void</span> GXSetACOp<span>(GXCCStageID CCStageId,GXCCOps ColorOp,GXCCArgs Arg1,GXCCArgs Arg2,GXCCArgs Arg3,GXCCArgs Arg4)</span></li> 
    <li><span>void</span> GXGetACOp<span>(GXCCStageID CCStageId,GXCCOps *ColorOp,GXCCArgs *Arg1,GXCCArgs *Arg2,GXCCArgs *Arg3,GXCCArgs *Arg4)</span></li> 
    <li><span>void</span> GXSetCCOutput<span>(GXCCStageID CCStageId,GXCCScale Scale,GXCCBias AddBias,GXCCClamp Clamp,GXCCRegID CCReg)</span></li> 
    <li><span>void</span> GXGetCCOutput<span>(GXCCStageID CCStageId,GXCCScale *Scale,GXCCBias *AddBias,GXCCClamp *Clamp,GXCCRegID *CCReg)</span></li> 
    <li><span>void</span> GXSetACOutput<span>(GXCCStageID CCStageId,GXCCScale Scale,GXCCBias AddBias,GXCCClamp Clamp,GXCCRegID CCReg)</span></li> 
    <li><span>void</span> GXGetACOutput<span>(GXCCStageID CCStageId,GXCCScale *Scale,GXCCBias *AddBias,GXCCClamp *Clamp,GXCCRegID *CCReg)</span></li> 
    <li><span>void</span> GXSetCCColor<span>(GXCCRegID CCReg,GXColor Color)</span></li> 
    <li><span>void</span> GXSetCCColor2<span>(GXCCRegID CCReg,s16 red,s16 grn,s16 blu,s16 alp)</span></li> 
    <li><span>void</span> GXGetCCColor<span>(GXCCRegID CCReg,GXColor *Color)</span></li> 
    <li><span>void</span> GXSetCCOrder<span>(u8 NumStages,GXTexMapID TexId[],GXTexCoord TexCoord[],GXColorID ColorId[])</span></li> 
    <li><span>void</span> GXGetCCOrder<span>(u8 *NumStages,GXTexMapID TexId[],GXTexCoord TexCoord[],GXColorID ColorId[])</span></li> 
    <li><span>void</span> GXSyncSuTsRegs<span>(void)</span></li> 
    <li><span>void</span> GXGetSuTexSize<span>(GXTexCoord coord,u32 *w,u32 *h)</span></li> 
    <li><span>void</span> GXSetRange<span>(f32 NearZ,f32 SideX)</span></li> 
    <li><span>void</span> GXSetFog<span>(GXFogTypes Type,GXBool Proj,GXBool Range,f32 StartZ,f32 EndZ,f32 NearZ,f32 FarZ,f32 SideX,GXColor Color)</span></li> 
    <li><span>void</span> GXGetFog<span>(GXFogTypes *Type,GXBool *Proj,GXBool *Range,f32 *StartZ,f32 *EndZ,f32 *NearZ,f32 *FarZ,f32 *SideX,GXColor *Color)</span></li> 
    <li><span>void</span> GXSetColorMode<span>(GXColorModes Ops,GXBlendModes SrcFactor,GXBlendModes DstFactor,GXLogicOps logicOp,GXBool Dither)</span></li> 
    <li><span>void</span> GXGetColorMode<span>(GXColorModes *Ops,GXBlendModes *SrcFactor,GXBlendModes *DstFactor,GXLogicOps *logicOp,GXBool *Dither)</span></li> 
    <li><span>void</span> GXSetBlendOp<span>(GXBlendOps op)</span></li> 
    <li><span>void</span> GXSetDestAlpha<span>(GXBool Enable,u8 Alpha)</span></li> 
    <li><span>void</span> GXGetDestAlpha<span>(GXBool *Enable,u8 *Alpha)</span></li> 
    <li><span>void</span> GXSetZMode<span>(GXBool CompareEnable,GXBool UpdateEnable,GXCompare Func)</span></li> 
    <li><span>void</span> GXGetZMode<span>(GXBool *CompareEnable,GXBool *UpdateEnable,GXCompare *Func)</span></li> 
    <li><span>void</span> GXSetZTexture<span>(GXZTexOp op,GXZTexFormat fmt,f32 zBias)</span></li> 
    <li><span>void</span> GXGetZTexture<span>(GXZTexOp *op,GXZTexFormat *fmt,f32 *zBias)</span></li> 
    <li><span>void</span> GXSetAlphaFunc<span>(GXAlphaLogic AlphaLogic,GXCompare Func0,GXCompare Func1,u8 RefValue0,u8 RefValue1)</span></li> 
    <li><span>void</span> GXGetAlphaFunc<span>(GXAlphaLogic *AlphaLogic,GXCompare *Func0,GXCompare *Func1,u8 *RefValue0,u8 *RefValue1)</span></li> 
    <li><span>void</span> GXSetPixelFormat<span>(GXPixelFormats Format,GXZCmprFormats ZCmpr,GXBool ZTop)</span></li> 
    <li><span>void</span> GXGetPixelFormat<span>(GXPixelFormats *Format,GXZCmprFormats *ZCmpr,GXBool *ZTop)</span></li> 
    <li><span>void</span> GXSetColorMask<span>(GXBool ColorMask,GXBool AlphaMask)</span></li> 
    <li><span>void</span> GXSetMotionComp<span>(GXBool OddMask,GXBool EvenMask)</span></li> 
    <li><span>void</span> GXGetMotionComp<span>(GXBool *OddMask,GXBool *EvenMask)</span></li> 
    <li><span>void</span> GXBeginDisplayList<span>(void *BasePtr,u32 nBytes)</span></li> 
    <li><span>u32</span> GXEndDisplayList<span>(void)</span></li> 
    <li><span>void</span> GXCallDisplayList<span>(void *BasePtr,u32 nBytes)</span></li> 
    <li><span>void</span> GXSetCopyControl<span>(GXFbClamps ClampFlags,GXTexFormats TexFormat,GXFbInterlace Interlaced,GXGamma Gamma,u16 VertScale,GXBool MipFilter)</span></li> 
    <li><span>void</span> GXSetCopyColorConv<span>(GXCCV ccvFlag)</span></li> 
    <li><span>void</span> GXSetAAFilter<span>(u8 Coefficients[7])</span></li> 
    <li><span>void</span> GXGetAAFilter<span>(u8 Coefficients[7])</span></li> 
    <li><span>void</span> GXCopyFBToDisplay<span>(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)</span></li> 
    <li><span>void </span> GXHDOffset<span>(u16 PrevSrcHeight,void *DstBasePtr,u16 DstStride,GXBool RstEnable,GXBool HFilter)</span></li> 
    <li><span>void</span> GXSetHD<span>(u16 AlphaRst,u16 ScaleRst,GXBool RstEnable,GXBool HFilter)</span></li> 
    <li><span>void</span> GXCopyFBToDisplay16<span>(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)</span></li> 
    <li><span>void</span> GXCopyFBToDisplay32<span>(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)</span></li> 
    <li><span>void</span> GXCopyFBToTexture<span>(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)</span></li> 
    <li><span>void</span> GXSetClear<span>(GXColor ClearColor,u32 ClearZ)</span></li> 
    <li><span>void</span> GXGetClear<span>(GXColor *ClearColor,u32 *ClearZ)</span></li> 
    <li><span>void</span> GXClearBoundingBox<span>(void)</span></li> 
    <li><span>void</span> GXGetBoundingBox<span>(u16 *Left,u16 *Right,u16 *Top,u16 *Bottom)</span></li> 
    <li><span>void</span> GXSetQuadOffset<span>(u16 left,u16 top)</span></li> 
    <li><span>u32</span> GXReadPixelColorAlpha<span>(u16 x,u16 y)</span></li> 
    <li><span>u32</span> GXReadPixelColor<span>(u16 x,u16 y)</span></li> 
    <li><span>void</span> GXWritePixelColor<span>(u16 x,u16 y,u32 color)</span></li> 
    <li><span>u32</span> GXGetPerfMetric<span>(GXPerf perf)</span></li> 
    <li><span>void</span> GXInitPerfCounters<span>(GXPerfBlock blockA,u32 valA,GXPerfBlock blockB,u32 valB,GXPerfBlock blockC,u32 valC,GXPerfBlock blockD,u32 valD)</span></li> 
    <li><span>void</span> GXInitPEPerfCounters<span>(GXBool pe0,GXBool pe1,GXBool pe2,GXBool pe3,GXBool pe4,GXBool pe5)</span></li> 
    <li><span>void</span> GXDisplayPerfCounters<span>(void)</span></li> 
    <li><span>void</span> GXSetFifoBase<span>(u32 BasePtr,u32 Size,GXBool SetDefaults)</span></li> 
    <li><span>void</span> GXSetFifoLimits<span>(u32 HiWaterMark,u32 LoWaterMark,u32 RdBreakMark)</span></li> 
    <li><span>void</span> GXSetInterrupts<span>(GXBool Underflow,GXBool Overflow,GXBool BreakPoint)</span></li> 
    <li><span>void</span> GXClearInterrupts<span>(GXBool Underflow,GXBool Overflow,GXBool BreakPoint)</span></li> 
    <li><span>void</span> GXSetFifoPtrs<span>(u32 WritePtr,u32 ReadPtr)</span></li> 
    <li><span>void</span> GXGetFifoPtrs<span>(u32 *WritePtrPtr,u32 *ReadPtrPtr)</span></li> 
    <li><span>void</span> GXGetFifoStatusFull<span>(GXBool *Underflow,GXBool *Overflow,GXBool *Break,GXBool *RDIdle,GXBool *CPIdle)</span></li> 
    <li><span>void</span> GXGetFifoStatus<span>(GXBool *Underflow,GXBool *Overflow,GXBool *Break)</span></li> 
    <li><span>void</span> GXDisplayFifoStatus<span>(void)</span></li> 
    <li><span>void</span> GXGetFifoCount<span>(u32 *FifoCount)</span></li> 
    <li><span>void</span> GXSetFifoEnable<span>(GXBool Read,GXBool WrPtrInc)</span></li> 
    <li><span>void</span> GXInit<span>(void)</span></li> 
    <li><span>void</span> GXInit2<span>(void)</span></li> 
    <li><span>void</span> GXInitB<span>(u32 revNo)</span></li> 
    <li><span>void</span> GXSetPERefresh<span>(u32 peRefresh)</span></li> 
    <li><span>void</span> GXSetTXRefresh<span>(u32 txRefresh)</span></li> 
    <li><span>void</span> GXAbortFrame<span>(void)</span></li> 
    <li><span>void</span> GXSetDrawSync<span>(u16 Token)</span></li> 
    <li><span>void</span> GXGetDrawSync<span>(u16 *Token)</span></li> 
    <li><span>GXBool</span> GXDrawDone<span>(void)</span></li> 
    <li><span>GXBool</span> GXDrawDoneSafe<span>(void)</span></li> 
    <li><span>void</span> GXFlush<span>(void)</span></li> 
    <li><span>void</span> GXHWSync<span>(u8 Token)</span></li> 
    <li><span>void</span> GXBypass<span>(u32 regData)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">172</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">1513</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gxfifo.h" />
  <h3>gxfifo.h</h3>
  <ul>
    <li><span>void</span> gxFifoWrite<span>(u32 d,u32 sz)</span></li> 
    <li><span>void</span> GXResetCacheAlignment<span>()</span></li> 
    <li><span>void</span> GXSimStart<span>(char *fileName)</span></li> 
    <li><span>void</span> GXSimEnd<span>(void)</span></li> 
    <li><span>void</span> GXSimEnd<span>(void)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">172</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gxreg.h" />
  <h3>gxreg.h</h3>
  <ul>
    <li><span>void</span> gxRegWrite16<span>(u32 addr,u16 data)</span></li> 
    <li><span>void</span> gxRegWrite32<span>(u32 addr,u32 data)</span></li> 
    <li><span>u16</span> gxRegRead16<span>(u32 addr,u32 cpIdleFlag)</span></li> 
    <li><span>u32</span> gxRegRead32<span>(u32 addr)</span></li> 
    <li><span>void</span> simSync<span>(void)</span></li> 
    <li><span>void</span> GXWriteXFRegs<span>(u32 addr,u8 Count,u32 *data)</span></li> 
    <li><span>void</span> GXWriteXFRegDirect<span>(u32 addr,u32 data)</span></li> 
    <li><span>void</span> GXReadXFReg<span>(u32 addr,u32 *data)</span></li> 
    <li><span>void</span> GXWriteCPReg<span>(u8 addr,u16 data)</span></li> 
    <li><span>void</span> GXReadCPReg<span>(u8 addr,u16 *data)</span></li> 
    <li><span>void</span> GXWritePIReg<span>(u8 addr,u32 data)</span></li> 
    <li><span>void</span> GXReadPIReg<span>(u8 addr,u32 *data)</span></li> 
    <li><span>void</span> GXWritePEReg<span>(u8 addr,u16 data)</span></li> 
    <li><span>void</span> GXReadPEReg<span>(u8 addr,u16 *data)</span></li> 
    <li><span>void</span> GXSUBypassCmd<span>(u8 cmd,u32 data)</span></li> 
    <li><span>void</span> GXLoadCPReg<span>(u8 reg,u32 data)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">16</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">174</div>  </div>
 </div>

</section>

---
## Gxu Library Headers (ati/gxu)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/gxu</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the header file for the GXU library which is similar to GLU if you have ever used OpenGL, it contains Graphical utility functions for reading textures and setting up view Matrices. 

  </div>
</section>  

File Name | Extension | Description
---|---|---
gxu | .h | Include file for declaring all the Utility functions provided by the GXU library


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="gxu.h" />
  <h3>gxu.h</h3>
  <ul>
    <li><span>void</span> gxuGetFrustum<span>(float l,float r,float b,float t,float n,float f,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetLightFrustum<span>(float l,float r,float b,float t,float n,float sS,float tS,float sT,float tT,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetOrtho<span>(float l,float r,float b,float t,float n,float f,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetPerspective<span>(float fov,float aspect,float n,float f,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetRotate<span>(float deg,float x,float y,float z,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetTranslate<span>(float x,float y,float z,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetScale<span>(float x,float y,float z,float m[3][4])</span></li> 
    <li><span>void</span> gxuGetIdentity<span>(float m[3][4])</span></li> 
    <li><span>u32</span> gxuGetInverse<span>(float mat[3][4],float inv[3][4])</span></li> 
    <li><span>void</span> gxuGetTranspose<span>(float mat[3][4],float xPose[3][4])</span></li> 
    <li><span>void</span> gxuMultMatrix<span>(float current[3][4],float mat[3][4])</span></li> 
    <li><span>void</span> gxuMultVec<span>(float vec[3],float mat[3][4])</span></li> 
    <li><span>AXuint32</span> gxuGetPPMFileSize<span>(char *FileName,AXuint32 *width,AXuint32 *height)</span></li> 
    <li><span>AXuint32</span> gxuGetImageFileSize<span>(char *FileName,AXuint32 *width,AXuint32 *height)</span></li> 
    <li><span>AXuint32</span> gxuReadBitmapFile<span>(char *FileName,AXuint32 *width,AXuint32 *height,GXColor **bImage)</span></li> 
    <li><span>AXuint32</span> gxuWriteBitmapFile<span>(char *FileName,AXuint32 w,AXuint32 h,GXTexFormats format,void *bImage)</span></li> 
    <li><span>AXuint32</span> gxuReadPPMFile<span>(char *FileName,AXuint32 *width,AXuint32 *height,GXColor **bImage)</span></li> 
    <li><span>AXuint32</span> gxuWritePPMFile<span>(char *FileName,AXuint32 w,AXuint32 h,GXTexFormats format,void *bImage)</span></li> 
    <li><span>AXuint32</span> gxuReadDDSFile<span>(char *FileName,AXuint32 *width,AXuint32 *height,AXuint32 *numLod,void **bImage)</span></li> 
    <li><span>void</span> gxuGenImage<span>(GXUImageType iType,AXuint32 width,AXuint32 height,GXUColorType color,GXColor *bImage)</span></li> 
    <li><span>void</span> gxuConvertImage<span>(AXuint32 imageW,AXuint32 imageH,GXColor *rgbImage,GXTexFormats texFmt,GXBool generateLut,GXTlutFormats tlutFmt,void *lut,void *image)</span></li> 
    <li><span>void</span> gxuGetIndexedImage<span>(GXUImageType iType,GXUColorType color,AXuint32 imageW,AXuint32 imageH,GXColor *planarImage,GXTlutFormats tlutFmt,AXuint32 numEntries,void *lutPtr)</span></li> 
    <li><span>void</span> gxuRandomImage<span>(AXuint32 imageW,AXuint32 imageH,GXBool mipMapped,GXTexFormats texFmt,GXTlutFormats tlutFmt,void *lut,void *image)</span></li> 
    <li><span>AXuint32</span> gxuGetNumLevels<span>(AXuint32 width,AXuint32 height)</span></li> 
    <li><span>void</span> gxuGetTiledImage<span>(GXColor *planarImage,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,void *tiledImage)</span></li> 
    <li><span>void</span> gxuGetBorderedTiledImage<span>(GXColor *planarImage,GXColor border,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,void *tiledImage)</span></li> 
    <li><span>void</span> gxuFormatImage<span>(GXColor *planarImage,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,GXTlutFormats tlutFmt,void *lut,void *tiledImage)</span></li> 
    <li><span>AXuint32</span> gxuGetTiledSize<span>(GXBool mipMapped,GXTexFormats tilefmt,AXuint32 width,AXuint32 height)</span></li> 
    <li><span>void</span> gxuTexPreloadAlloc<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *EvenPtr,AXuint32 *OddPtr)</span></li> 
    <li><span>void</span> gxuTexPreloadAllocL<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexPreloadAllocH<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexAllocTlut<span>(GXTlutFormats fmt,AXuint32 nEntries,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexAllocTlut2<span>(GXTlutFormats fmt,AXuint32 nEntries,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexCachedAlloc<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *EvenPtr,AXuint32 *OddPtr)</span></li> 
    <li><span>void</span> gxuTexCachedAllocL<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexCachedAllocH<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexCachedAlloc2<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *EvenPtr,AXuint32 *OddPtr)</span></li> 
    <li><span>void</span> gxuTexCachedAllocL2<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexCachedAllocH2<span>(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)</span></li> 
    <li><span>void</span> gxuTexCacheFree<span>(AXuint32 EvenPtr,AXuint32 OddPtr)</span></li> 
    <li><span>void</span> gxuTexMemFree<span>(AXuint32 Ptr)</span></li> 
    <li><span>void</span> gxuBumpInit<span>(AXuint32 nStages)</span></li> 
    <li><span>void</span> gxuInitRasterState<span>(char *fileName)</span></li> 
    <li><span>void</span> gxuInitEFB<span>(u32 col,u32 z,u32 left,u32 top,u32 width,u32 height,GXPixelFormats fmt)</span></li> 
    <li><span>void</span> gxuCopyOut<span>(u32 left,u32 top,u32 width,u32 height)</span></li> 
    <li><span>void</span> gxuBUDInit<span>(int argc,char **argv,u32 left,u32 top,u32 width,u32 height)</span></li> 
    <li><span>void</span> gxuBUDInitB<span>(u32 revNo,int argc,char **argv,u32 left,u32 top,u32 width,u32 height)</span></li> 
    <li><span>void</span> gxuBUDFinish<span>(int argc,char **argv,u32 left,u32 top,u32 width,u32 height)</span></li> 
    <li><span>int</span> width</li> 
    <li><span>int</span> height</li> 
    <li><span>GXColor </span> pixels</li> 
    <li><span></span> gxuCachedImage</li> 
    <li><span>gxuCachedImage</span> gxuCachedImages[]</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">48</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">317</div>  </div>
 </div>

</section>

---
## Helper (ati/helper)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/helper</div>
  <div markdown="1" class="rr-post-markdown">
 This folder only contains one file called **compiler.h** which defines certain pre-processor constants based on which compiler has been used.

Compilers supported are:
* ATI GNU Compiler
* GNU C Compiler
* Watcom C Compiler

The pre-processor constants defined are used for purposes such as calling conventions (**AX_CDECL**) or to mark certain arguments or variables as unused in the code (**ATI_VARIABLE_NOT_USED**).
  </div>
</section>  


---
## Private (ati/private)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/private</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains miscellaneous files related to debugging the low level hardware components, presumably this was just meant for internal use at ATI themselves.

  </div>
</section>  

File Name | Extension | Description
---|---|---
common | .h | Include file for including all the other files in the private folder 
fdl_assert | .h | Include file for declaring the **FDL_ASSERT** macro
gxdebug | .h | Include file for declaring a few pre-processor based Graphic Debug functions such as **DbgPrintf**
gxreg | .h | Include file for declaring low level graphics hardware debug functions such as **GXWriteXFRegs**
gxtypes | .h | Include file for declaring useful graphical stuctures and functions such as **__GXTexRegionInt_struct**


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">

 <div class="rr-file-card">
  <img class="geopattern" data-title="gxreg.h" />
  <h3>gxreg.h</h3>
  <ul>
    <li><span>void</span> gxRegWrite16<span>(u32 addr,u16 data)</span></li> 
    <li><span>void</span> gxRegWrite32<span>(u32 addr,u32 data)</span></li> 
    <li><span>u16</span> gxRegRead16<span>(u32 addr,u32 cpIdleFlag)</span></li> 
    <li><span>u32</span> gxRegRead32<span>(u32 addr)</span></li> 
    <li><span>void</span> simSync<span>(void)</span></li> 
    <li><span>void</span> GXWriteXFRegs<span>(u32 addr,u8 Count,u32 *data)</span></li> 
    <li><span>void</span> GXWriteXFRegDirect<span>(u32 addr,u32 data)</span></li> 
    <li><span>void</span> GXReadXFReg<span>(u32 addr,u32 *data)</span></li> 
    <li><span>void</span> GXWriteCPReg<span>(u8 addr,u16 data)</span></li> 
    <li><span>void</span> GXReadCPReg<span>(u8 addr,u16 *data)</span></li> 
    <li><span>void</span> GXWritePIReg<span>(u8 addr,u32 data)</span></li> 
    <li><span>void</span> GXReadPIReg<span>(u8 addr,u32 *data)</span></li> 
    <li><span>void</span> GXWritePEReg<span>(u8 addr,u16 data)</span></li> 
    <li><span>void</span> GXReadPEReg<span>(u8 addr,u16 *data)</span></li> 
    <li><span>void</span> GXSUBypassCmd<span>(u8 cmd,u32 data)</span></li> 
    <li><span>void</span> GXLoadCPReg<span>(u8 reg,u32 data)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">16</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">174</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="gxtypes.h" />
  <h3>gxtypes.h</h3>
  <ul>
    <li><span>GXData </span> gx</li> 
    <li><span>GXBool</span> fifoInit</li> 
    <li><span>u32</span> Color</li> 
    <li><span>f32</span> a[3]</li> 
    <li><span>f32</span> k[3]</li> 
    <li><span>f32</span> lpos[3]</li> 
    <li><span>f32</span> ldir[3]</li> 
    <li><span></span> GXLightObjInt</li> 
    <li><span>u32</span> mode1</li> 
    <li><span>u32</span> image0</li> 
    <li><span>u32</span> image3</li> 
    <li><span>u32</span> loadImage0</li> 
    <li><span>u32</span> loadImage3</li> 
    <li><span></span> GXTexObjInt</li> 
    <li><span>void</span> gxLoadSuTsRegs<span>(void)</span></li> 
    <li><span>void</span> gxXfVtxSpecs<span>(u32 vatIdx)</span></li> 
    <li><span>void</span> gxSetMatrixIndex<span>(GXAttr matIdxAttr)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">281</div>  </div>
 </div>

</section>
