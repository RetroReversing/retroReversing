---
layout: post
tags: 
- wii
- sdk
- leak
- gamecube
title: ATI Low Level Wii SDK
category: wii
image: /public/images/wii/ATI Low Level Wii SDK.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/ATI Low Level Wii SDK.jpg
permalink: /ati-low-level-wii-sdk
breadcrumbs:
  - name: Home
    url: /
  - name: SDKs
    url: /sdks
  - name: Nintendo Wii
    url: /wii
  - name: ATI Low Level Wii SDK
    url: #
recommend: 
- wii
- sdk
- gamecube
editlink: /consoles/wii/AtiLowLevelSDK.md
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

<!-- cspell:disable -->

{% capture card_1_1_items %}
- void|||set_AIP_address_space(int whether)
- int|||get_AIP_address_space(void)
- int|||use_AIP_address_space(void)
- void|||set_AHB_IO_MEM(int value)
- int|||get_AHB_IO_MEM(void)
- int|||use_AHB_IO_MEM(void)
- void|||set_DI_NODVDRD_EN(int value)
- int|||get_DI_NODVDRD_EN(void)
- u32|||get_ACRIOINTPPC(void)
- u32|||set_ACRIOINTPPC(u32 which,u32 value)
- u32|||sendIOPMsg(u32 msg)
- void|||set_ACRARBCFGDMA_DELAYEN(int value)
- int|||get_ACRARBCFGDMA_DELAYEN(void)
- void|||set_ACRARBCFGDMA_DELAYCNT(u32 value)
- u32|||get_ACRARBCFGDMA_DELAYCNT(void)
- void|||set_ACRARBCFGCPU_DELAY(int value)
{% endcapture %}

{% capture card_1_2_items %}
- int|||AES_Busy(void)
- void|||AES_Dma(u32 srcAddr,u32 dstAddr,u32 numBlocks,u32 intrEnable)
- void|||AES_Clear(void)
- int|||_AES_Setup(u32 srcAddr,u32 dstAddr)
- int|||_AES_StartDma(u32 numBlocks,u32 intrEnable)
{% endcapture %}

{% capture card_1_3_items %}
- void|||ahbMemFlush(enum memAhbFlushGroup_e)
- void|||ahbMemRBInvalidate(enum memAhbReadBuffer_e)
- unsigned int|||busRdAHMReg(unsigned int a)
- unsigned int|||busRdMEMReg(unsigned int a)
- int|||arbInit(char *s)
{% endcapture %}

{% capture card_1_4_items %}
- int|||ahbdbgInit(void(*_Cb)(void),int mask)
{% endcapture %}

{% capture card_1_5_items %}
- AiStatus|||aiInit(void(*_tranCb)(void))
{% endcapture %}

{% capture card_1_6_items %}
- void|||__ARWaitForDMA(void)
- void|||__ARWriteDMA(u32 mmem_addr,u32 aram_addr,u32 length)
- void|||__ARReadDMA(u32 mmem_addr,u32 aram_addr,u32 length)
- u32|||__ARChecksize(void)
{% endcapture %}

{% capture card_1_7_items %}
- u32|||BUSSPEED
- void|||calibrateBusspeed(void)
{% endcapture %}

{% capture card_1_8_items %}
- u32|||_argc
- char|||_argv[]
- u32|||argInit(void)
- u32|||argCntGet(void)
- char|||argGet(u32 i)
- u32|||argCache(u32 *,char ***)
{% endcapture %}

{% capture card_1_9_items %}
- void|||_assert(const char *,const char *,int)
{% endcapture %}

{% capture card_1_10_items %}
- void|||DbgCreateTX(GXMCObj *info,u32 width,u32 height)
- void|||DbgRenderAndStretch(GXMCObj *info,u32 x,u32 y,u32 width,u32 height)
- void|||DbgRenderRefToEFB(GXMCObj *info,GXMCReferencePicture type,u32 x,u32 y,u32 plane)
- void|||DbgStub(GXMCObj *info)
- void|||DbgPrintMotionInfo(struct MacroblockDetails *mb)
- void|||DbgPrintDPCM(struct MacroblockDetails *mb)
- void|||DbgPrintMotionVector(GXMCMotionVector *mv)
- |||SigTrap
- |||SigTrap
{% endcapture %}

{% capture card_1_11_items %}
- void|||SetView(void)
- MCError|||AllocateCmdFifos(GXMCObj *mpgObj)
- MCError|||AllocatePingPongBuffers(GXMCObj *mpgObj)
- MCError|||AllocateRefrenceFrameBuffers(GXMCObj *mpgObj)
- MCError|||AllocateTexMemory(GXMCObj *info)
- GXBool|||AllocateFutureBuffers(GXMCObj *mpgObj)
- GXBool|||AllocatePastBuffers(GXMCObj *mpgObj)
- MCError|||AllocateBPictureBuffers(GXMCObj *mpgObj)
- void|||InitQueueHandler(GXMCObj *mpgObj)
- void|||MCErrorHandler(GXMCObj *mpgObj,MCError error)
- GXBool|||GXMCSelectDBuffer(GXMCObj *info,u32 bufferId)
- void|||CreateD0Texture(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)
- void|||CreateD1Texture(GXMCObj *mpgObj,u32 bufferId,u32 width,u32 height)
- void|||PerformRenderSetup(TevType type)
- void|||SetupTevStages(TevType type)
- void|||RenderImage(GXMCObj *mpgInfo,u32 width,u32 height)
- void|||CopyEFBToMemory(GXMCObj *mpgObj,GXCopyType copyType,void *destBase)
- void|||CreateFrameFromFields(GXMCObj *mpgInfo,PictureType frameType)
- void|||GXReset(GXMCObj *mpgObj)
- void|||MarkBufferBusy(GXMCObj *info,u32 id)
- void|||ProcessBlocks(GXMCObj *info)
- void|||CreateQueue(GXMCMotionVector *srcMV,GXMCMotionVector *dstMV[],GXMCMacroBlockType mbType,u32 count,u32 totalMV)
- void|||SwapBuffers(GXMCObj *mcInfo)
- void|||InterlaceRenderUV(GXMCObj *mcInfo,PictureType fType,void *dstBase)
- u32|||GXConvertLinearToTile(unsigned x,unsigned y,unsigned stride)
- void|||DestroyPingPongBuffers(GXMCObj *mpgObj)
- void|||ResetCounters(GXMCObj *mpgObj)
- void|||FreeAndReallocate(GXMCObj *mpgObj,GXBool newBuffer)
{% endcapture %}

{% capture card_1_12_items %}
- void|||busPrintf(const char *fmt,...)
- void|||busDbg(const char *fmt,...)
- u32|||busGetTime(void)
{% endcapture %}

{% capture card_1_13_items %}
- u32|||CRCCompute(void *buf,u32 nbytes)
- u32|||CRCAppend(void *buf,u32 nbytes,u32 init)
- u32|||CRCComputeMasked(void *buf,u32 nbytes)
{% endcapture %}

{% capture card_1_14_items %}
- void|||dbg_viai_setup(int compatB)
- void|||dbg_aipll_init(int compatB)
{% endcapture %}

{% capture card_1_15_items %}
- DbgHandle|||dbgOpen(const char *filename,const char *mode)
- u32|||dbgWrite(DbgHandle handle,const void *buf,u32 len)
- u32|||dbgRead(DbgHandle handle,void *buf,u32 len)
- u32|||dbgClose(DbgHandle handle)
- u8|||dbgGets(u8 *buf,u32 blockFlag)
{% endcapture %}

{% capture card_1_16_items %}
- u32|||dbgintInit(void(*dbgIrqCb)(void))
{% endcapture %}

{% capture card_1_17_items %}
- void|||lc_allocate(void *LC_addr,unsigned int bfsize)
- void|||set_HID_G(unsigned int mask)
{% endcapture %}

{% capture card_1_18_items %}
- DiStatus|||diInit(void(*_tranCb)(u32 err),void(*_doorCb)(void))
- DiStatus|||diImm(u32 *pkt,u32 *data,u32 isRead)
- DiStatus|||diDma(u32 *pkt,u32 *data,u32 len,u32 isRead)
- DiStatus|||diSync(void)
- DiStatus|||diBrk(void)
- void|||diReset(void)
- void|||_diSync(u32 iSr)
- diRegisters_t|||diReadRegisters(diRegisters_t *diRegs)
- void|||diPrintRegisters(diRegisters_t *diRegs,const char *comment)
- void|||diClobberRegisters(u32 value)
- u32|||diStraps(void)
{% endcapture %}

{% capture card_1_19_items %}
- u32|||mcrGet(Mcr *mp)
- u32|||mcrPut(Mcr *mp)
- u32|||dcrGet(Dcr *dp)
- u32|||dcrPut(Dcr *dp)
- u32|||_dcrmcrGet(DcrMcr *dmp)
- u32|||_dcrmcrPut(DcrMcr *dmp)
- void|||diagStart(void)
- void|||diagStop(u32 status)
{% endcapture %}

{% capture card_1_20_items %}
- void|||dma_load(unsigned int *inDataBlock,unsigned int *inBuffer,unsigned int inDataSize)
- void|||dma_wait(unsigned int i)
- void|||dma_store(unsigned int *outDataBlock,unsigned int *outBuffer,unsigned int outDataSize)
{% endcapture %}

{% capture card_1_21_items %}
- u32|||dolcntData(u32 chan,u32 *datah,u32 *datal)
- u32|||dolcntInit(void)
- u32|||dolcntInitV(int)
- void|||dolcntRumbleOn(u32 chan)
- void|||dolcntRumbleOff(u32 chan)
{% endcapture %}

{% capture card_1_22_items %}
- u32|||dspAi(u32 *memPtr,u32 len)
- u32|||dspAram(u32 *memPtr,u32 *aramPtr,u32 isRead,u32 len)
- void|||dspSyncAi(void)
- void|||dspSyncAram(void)
- u32|||dspWrtMbox(u32 value,u32 doIrq)
- u32|||dspRdMbox(u32 *value)
- void|||dspInit(void(*_dspCb)(void),void(*_aiCb)(void),void(*_aramCb)(void))
- void|||dspAramStable(void)
{% endcapture %}

{% capture card_1_23_items %}
- void|||dspFix(void)
{% endcapture %}

{% capture card_1_24_items %}
- u32|||dspReset(u32 cdcr)
- u32|||dspBoot(u32 *memPtr,u32 len)
- u32|||dspBootDma(u32 *memPtr,u32 dspa,u32 dscr,u32 dsbl)
- u32|||dspSyncDma(u32 delay)
- u32|||dspSendMail(u32 mail,u32 doIrq)
- u32|||dspWaitMail(u32 *mailPtr)
- u32|||dspMemRamp(u32 *memAddr,u32 len,u32 val)
{% endcapture %}

{% capture card_1_25_items %}
- u32|||dvdStopMotor(u32 setting,u32 *response)
- u32|||dvdRead(u32 addr,u32 len,u32 *mem)
- void|||dvdSetNdevFS(u32 offset)
- u32|||dvdReadBuf(u32 addr,u32 len,u32 *dest)
- u32|||dvdReadDVD(u32 startSector,u32 numberOfSectors,u32 *mem)
- u32|||dvdWriteBuf(u32 addr,u32 len,u32 *src)
- u32|||dvdSync(void)
- u32|||dvdErrSet(u32 len)
- u32|||dvdBrk(void)
- u32|||dvdInit(void(*tranCb)(u32 err),void(*doorCb)(void))
- u32|||dvdErrReq(u32 *retErr)
- u32|||dvdAsStart(u32 addr,u32 sz)
- u32|||dvdAsStop(void)
- u32|||dvdDoor(u32 open)
- u32|||dvdInquiry(u32 *inq)
- u32|||dvdReadID(u32 *id)
- u32|||dvdAsBuffer(u32 onOff,u32 pages,u32 *status)
- u32|||dvdRequestDiskStatus(u32 *diskStatus)
- u32|||dvdRequestError(u32 *response)
- void|||dvdPrintPacket(dvd_u *pkt)
- void|||_dvdFlush(u32 enable)
- u16|||deviceCode
- u32|||releaseDate
- u32|||padding[2]
- |||dvdInquiry_t
- void|||dvdPrintInquiry(const char *comment,dvdInquiry_t *s)
{% endcapture %}

{% capture card_1_26_items %}
- u32|||dvdFsInit(void)
- u32|||dvdFsDeToInd(DirEntry *de)
- DirEntry|||dvdFsFind(const char *path)
- DirEntry|||dvdFsIndToDe(u32 ind)
- void|||fileLoad(const char *file,u32 *rLen)
- char|||lineGet(char *buf,u32 bLen)
{% endcapture %}

{% capture card_1_27_items %}
- int|||ehci_start(struct usb_hcd *hcd)
{% endcapture %}

{% capture card_1_28_items %}
- void|||init_ELA(p_ela_init_reg)
- void|||post_ELA(int wrap_cnt)
- void|||log_ELA(int)
{% endcapture %}

{% capture card_1_29_items %}
- ExiStatus|||exiInit(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))
- ExiStatus|||exiCustomInit(void(*extDetachCb)(u32 chan),void(*extIrqCb)(u32 chan),void(*tranCb)(u32 chan))
- ExiStatus|||exiSelect(u32 chan,u32 dev,u32 freq)
- ExiStatus|||exiDeselect(u32 chan)
- ExiStatus|||exiDma(u32 chan,u8 *buf,u32 len,u32 type)
- ExiStatus|||exiImm(u32 chan,u8 *buf,u32 len,u32 type)
- ExiStatus|||exiSync(u32 chan)
- u32|||exiPresent(u32 chan)
- void|||exi32Enable(void)
- void|||exi32Disable(void)
- void|||exiPrint(char *buf,int len)
- u32|||exiGetID(u32 chan,u32 dev)
{% endcapture %}

{% capture card_1_30_items %}
- u32|||mdmInit(u32 mdmDev,u32 mdmCsel)
- u32|||mdmRegRd(u32 reg,u8 *buf,u32 len)
- u32|||mdmRegWrt(u32 reg,u8 *buf,u32 len)
{% endcapture %}

{% capture card_1_31_items %}
- void|||fifoCreate(const char *name,Fifo *fp,u32 *list,u32 size)
- u32|||fifoGetExt(Fifo *fp,u32 *valp,u32 flags)
- u32|||fifoGet(Fifo *fp)
- u32|||fifoPutExt(Fifo *fp,u32 val,u32 flags)
- void|||fifoPut(Fifo *fp,u32 val)
- u32|||fifoCnt(Fifo *fp)
- void|||EnableWriteCombine()
{% endcapture %}

{% capture card_1_32_items %}
- void|||sfilerand(unsigned long seed)
- unsigned short|||filerand()
{% endcapture %}

{% capture card_1_33_items %}
- void|||sfilerandom(unsigned long seed)
- unsigned long|||filerandom()
{% endcapture %}

{% capture card_1_34_items %}
- u32|||flashReadSeg(u32 chan,u32 src,u32 dst,u32 len)
- u32|||flashRead(u32 chan,u32 src,u32 dst,u32 len)
- u32|||flashWritePage(u32 chan,u32 src,u32 dst,u32 len)
- u32|||flashWrite(u32 chan,u32 src,u32 dst,u32 len)
- u32|||flashStatGet(u32 chan,u32 *ret)
- u32|||flashStatClr(u32 chan)
- u32|||flashErase(u32 chan)
- u32|||flashEraseSec(u32 chan,u32 addr)
- u32|||flashSleep(u32 chan)
- u32|||flashWake(u32 chan)
- u32|||flashIdRd(u32 chan,u32 *ret)
{% endcapture %}

{% capture card_1_35_items %}
- void|||fontInit(u32 addr,u32 vidMode)
- void|||cls(void)
- void|||fgSet(u32 y,u32 u,u32 v)
- void|||bgSet(u32 y,u32 u,u32 v)
- void|||cursorSet(u32 x,u32 y)
- void|||pixSet(u32 x,u32 y)
- void|||pixClear(u32 x,u32 y)
- void|||putChar(u32 cc)
- void|||putStr(const char *str)
- void|||fontPut(const char *str,u32 len)
- u32|||fontColsGet(void)
- u32|||fontRowsGet(void)
- void|||fontOff(void)
- void|||fontOn(void)
- void|||fontCursSet(u32 x,u32 y)
- void|||gfxBltCpy(u32 *src,u32 cols,u32 rows,u32 x,u32 y)
- void|||gfxRectDraw(u32 x,u32 y,u32 cols,u32 rows)
- u8|||gfxChkppmfmt(u8 *ppm,u32 *cols,u32 *rows)
- u8|||gfxChkbmpfmt(u8 *cp,u32 *xsize,u32 *ysize,u8 **pStart,u8 **pEnd)
- u8|||gfxCvrtbmp2rgb(u8 *pEnd,u8 *pStart,u32 width,u32 height)
- void|||gfxCvrtrgb2yuv(u8 *data,u32 cols,u32 rows)
- void|||gfxCvrt444to422(u8 *src,u32 cols,u32 rows,u8 *dest)
- void|||gfxCvrt444to422Stride(u8 *src,u32 cols,u32 rows,u8 *dest,u32 stride)
- u32|||scrColsGet(void)
- u32|||scrRowsGet(void)
- void|||xLMarginSet(u32 xLMargin)
{% endcapture %}

{% capture card_1_36_items %}
- asm DMAStatus|||dmaEnable()
- asm DMAStatus|||dmaDisable()
- asm DMAStatus|||dmaErrorStatus()
- asm DMAStatus|||dmaQueueLen()
- asm DMAStatus|||dmaFlush()
- asm DMAStatus|||dmaAlloc(register unsigned long,register unsigned long)
- asm DMAStatus|||dmaRead(register unsigned long,register unsigned long,register unsigned long)
- asm DMAStatus|||dmaWrite(register unsigned long,register unsigned long,register unsigned long)
{% endcapture %}

{% capture card_1_37_items %}
- char|||optarg
- int|||optind
- int|||getopt(int ac,char *av[],char *opts)
{% endcapture %}

{% capture card_1_38_items %}
- void|||gfxbuInit()
- u32|||gfxbuFinish()
{% endcapture %}

{% capture card_1_39_items %}
- void|||gfxoldbuInit(char *testName)
- void|||gfxoldbuDisplay
- u32|||gfxoldbuUpdate()
- u32|||gfxoldbuFinish()
- u32|||gfxoldbuFinishAA()
- void|||gfxSetClearColor(u8 red,u8 green,u8 blue,u8 alpha)
{% endcapture %}

{% capture card_1_40_items %}
- void|||initGpioExi(void)
- void|||setVideoReset(int value)
- void|||setI2CEnable(int value)
{% endcapture %}

{% capture card_1_41_items %}
- struct usb_hcd|||__attribute__((aligned(32)))
- struct hcd_dev|||__attribute__((aligned(32)))
- struct hcd_timeout|||__attribute__((aligned(32)))
- struct hc_driver|||__attribute__((aligned(32)))
- int|||usb_hcd_pci_probe(int *dev,int *id)
- void|||usb_hcd_pci_remove(struct pci_dev *dev)
- int|||usb_hcd_pci_suspend(struct pci_dev *dev,u32 state)
- int|||usb_hcd_pci_resume(struct pci_dev *dev)
- void|||usb_claim_bandwidth(struct usb_device *dev,struct urb *urb,int bustime,int isoc)
- void|||usb_release_bandwidth(struct usb_device *dev,struct urb *urb,int isoc)
- int|||usb_check_bandwidth(struct usb_device *dev,struct urb *urb)
- long|||usb_calc_bus_time(int speed,int is_input,int isoc,int bytecount)
- inline struct usb_bus|||hcd_to_bus(struct usb_hcd *hcd){return hcd->bus
{% endcapture %}

{% capture card_1_42_items %}
- void|||sethid2(unsigned int hid2_value)
- unsigned int|||gethid0(void)
- void|||sethid0(unsigned int)
{% endcapture %}

{% capture card_1_43_items %}
- struct usb_driver|||hub_probe(struct usb_device *dev,unsigned int i,const struct usb_device_id *id)
{% endcapture %}

{% capture card_1_44_items %}
- int|||sendI2CData(u8 slaveAddr,u8 *pData,int nBytes)
- int|||rcvI2CData(u8 slaveAddr,u8 *pData,int maxBytes)
- int|||getI2CError()
- void|||initI2C()
- void|||initI2CExi(void)
- void|||setSCL(int)
- void|||setSDA(int)
- int|||getSCL(void)
- int|||getSDA(void)
{% endcapture %}

{% capture card_1_45_items %}
- void|||irqHandler(void)
- void|||irqCbAddPI(void(*irqCb)(),u32 mask)
- void|||irqACRHandler(void)
- void|||irqCbAddACR(void(*irqCb)(),u32 mask)
- u32|||irqDisable(void)
- void|||irqEnable(u32 oldMask)
- void|||irqInit(void(*intCb)(void))
- void|||clkInit(void(*intCb)(void),u32 decVal)
- void|||_clkHndlr(void)
- void|||_irqHndlr(void)
{% endcapture %}

{% capture card_1_46_items %}
- u16|||bRd16(u32 src)
- u32|||bRd32(u32 src)
- void|||busWrt16(u32 address,u16 data)
- void|||busWrt32(u32 address,u32 data)
- u16|||busRd16(u32 address)
- u32|||busRd32(u32 address)
- void|||bWrt16(u32 address,u32 data)
- void|||bWrt32(u32 address,u32 data)
- void|||_dcWb(u32 addr,u32 off)
- void|||_dcWbInv(u32 addr,u32 off)
- void|||_dcInv(u32 addr,u32 off)
- void|||dcWb(u32 addr,u32 len)
- void|||dcWbInv(u32 addr,u32 len)
- void|||dcInv(u32 addr,u32 len)
- u32|||rand32(void)
- double|||drand48(void)
- double|||erand48(unsigned short xsubi[3])
- long int|||mrand48(void)
- int|||lrand48(void)
- int|||nrand48(unsigned short xsubi[3])
- int|||jrand48(unsigned short xsubi[3])
- void|||srand48(int seedval)
- unsigned short|||seed48(unsigned short seed16v[3])
- void|||lcong48(unsigned short param[7])
- void|||tbRead(u32 *)
- void|||tbWrite(u32 *)
- void|||udelay(u32 delay)
- void|||busDelay(u32 count)
- u32|||timeGet(void)
- void|||halt(void)
- void|||ppcL2Enable(void)
- void|||ppcL1Enable(void)
- void|||ppcL1Disable(void)
- void|||ppcL1Flush(void)
- void|||ppcPSLSQEnable(void)
- void|||ppcDARSet(u32 val)
- u32|||ppcDARGet(void)
- void|||ppcHID0Set(u32 val)
- u32|||ppcHID0Get(void)
- u32|||ppcHID1Get(void)
- void|||ppcHID2Set(u32 val)
- u32|||ppcHID2Get(void)
- void|||ppcHID4Set(u32 val)
- u32|||ppcHID4Get(void)
- u32|||ppcECID0Get(void)
- u32|||ppcECID1Get(void)
- u32|||ppcECID2Get(void)
- void|||ppcL2CRSet(u32 val)
- u32|||ppcL2CRGet(void)
- void|||ppcWPARSet(u32 val)
- u32|||ppcWPARGet(void)
- void|||ppcDecSet(u32 val)
- void|||ppcMsrSet(u32 val)
- u32|||ppcMsrGet(void)
- void|||ppcTBUSet(u32 val)
- u32|||ppcTBUGet(void)
- void|||ppcTBLSet(u32 val)
- u32|||ppcTBLGet(void)
- u32|||ppcPVRGet(void)
- u32|||ppcSPRG0Get(void)
- u32|||ppcSPRG1Get(void)
- u32|||ppcSPRG2Get(void)
- u32|||ppcSPRG3Get(void)
- u32|||ppcSPRG0Set(u32 val)
- u32|||ppcSPRG1Set(u32 val)
- u32|||ppcSPRG2Set(u32 val)
- u32|||ppcSPRG3Set(u32 val)
- u32|||ppcDBAT0UGet(void)
- u32|||ppcDBAT0LGet(void)
- u32|||ppcDBAT1UGet(void)
- u32|||ppcDBAT1LGet(void)
- u32|||ppcDBAT2UGet(void)
- u32|||ppcDBAT2LGet(void)
- u32|||ppcDBAT3UGet(void)
- u32|||ppcDBAT3LGet(void)
- u32|||ppcDBAT4UGet(void)
- u32|||ppcDBAT4LGet(void)
- u32|||ppcDBAT5UGet(void)
- u32|||ppcDBAT5LGet(void)
- u32|||ppcDBAT6UGet(void)
- u32|||ppcDBAT6LGet(void)
- u32|||ppcDBAT7UGet(void)
- u32|||ppcDBAT7LGet(void)
- u32|||ppcIBAT0UGet(void)
- u32|||ppcIBAT0LGet(void)
- u32|||ppcIBAT1UGet(void)
- u32|||ppcIBAT1LGet(void)
- u32|||ppcIBAT2UGet(void)
- u32|||ppcIBAT2LGet(void)
- u32|||ppcIBAT3UGet(void)
- u32|||ppcIBAT3LGet(void)
- u32|||ppcIBAT4UGet(void)
- u32|||ppcIBAT4LGet(void)
- u32|||ppcIBAT5UGet(void)
- u32|||ppcIBAT5LGet(void)
- u32|||ppcIBAT6UGet(void)
- u32|||ppcIBAT6LGet(void)
- u32|||ppcIBAT7UGet(void)
- u32|||ppcIBAT7LGet(void)
- void|||ppcDBAT0USet(u32 val)
- void|||ppcDBAT0LSet(u32 val)
- void|||ppcDBAT1USet(u32 val)
- void|||ppcDBAT1LSet(u32 val)
- void|||ppcDBAT2USet(u32 val)
- void|||ppcDBAT2LSet(u32 val)
- void|||ppcDBAT3USet(u32 val)
- void|||ppcDBAT3LSet(u32 val)
- void|||ppcDBAT4USet(u32 val)
- void|||ppcDBAT4LSet(u32 val)
- void|||ppcDBAT5USet(u32 val)
- void|||ppcDBAT5LSet(u32 val)
- void|||ppcDBAT6USet(u32 val)
- void|||ppcDBAT6LSet(u32 val)
- void|||ppcDBAT7USet(u32 val)
- void|||ppcDBAT7LSet(u32 val)
- void|||ppcIBAT0USet(u32 val)
- void|||ppcIBAT0LSet(u32 val)
- void|||ppcIBAT1USet(u32 val)
- void|||ppcIBAT1LSet(u32 val)
- void|||ppcIBAT2USet(u32 val)
- void|||ppcIBAT2LSet(u32 val)
- void|||ppcIBAT3USet(u32 val)
- void|||ppcIBAT3LSet(u32 val)
- void|||ppcIBAT4USet(u32 val)
- void|||ppcIBAT4LSet(u32 val)
- void|||ppcIBAT5USet(u32 val)
- void|||ppcIBAT5LSet(u32 val)
- void|||ppcIBAT6USet(u32 val)
- void|||ppcIBAT6LSet(u32 val)
- void|||ppcIBAT7USet(u32 val)
- void|||ppcIBAT7LSet(u32 val)
- void|||setIrqHndlr(void(*hndlr)())
- void|||ppcEARSet(u32 val)
- u32|||ppcEARGet()
- void|||__ecowx(u32 addr,u32 val)
- u32|||__eciwx(u32 addr)
- void|||__dcbi(u32 *,u32)
- void|||__icbi(u32 *,u32)
- u32|||__lwarx(u32)
- void|||__stwcx(u32,u32)
- void|||_ctxSw(void *newCtx)
- void|||_irqCtxSw(void *newCtx)
- void|||ppcSync(void)
- void|||ppcEieio(void)
- void|||ppcEeieo(void)
- u32|||ppcStackPtrGet()
- void|||ppcStackPtrSet(u32 val)
- void|||rwbuzz(void)
- int|||strcasecmp(const char *s1,const char *s2)
- int|||strncasecmp(const char *s1,const char *s2,u32 c)
- void|||memcpy32(void *s1,const void *s2,u32 n)
- void|||memset32(void *s,u32 c,u32 n)
- int|||memcmp32(const void *s1,const void *s2,u32 n)
- int|||atoh(const char *str)
- s32|||ntoi(const char *str,u32 base,u32 *val)
- void|||serInit2(u32 dev,u32 csel)
- void|||serInit(void)
- void|||serOn(void)
- void|||serOff(void)
- int|||serHwFlow(u32 enable)
- u8|||serVersion(u32 dev,u32 csel)
- int|||serRdQLen(void)
- int|||serRdUart(u8 *,int)
- u8|||serRdgetkey(void)
- u32|||serRdkbhit(void)
- void|||diagManualStop(void *fb)
- void|||dprintf(const char *fmt,...)
- void|||dsprintf(char *str,const char *fmt,...)
- void|||printfv(u32 verLev,const char *fmt,...)
- void|||printf0(const char *fmt,...)
- void|||printf1(const char *fmt,...)
- u32|||tolower(u32 cc)
- int|||atiIsNdev(void)
- int|||atiIsOrca(void)
- void|||initBootMode(void)
- u32|||getBootMode(void)
{% endcapture %}

{% capture card_1_47_items %}
- void|||GXMCGFXInit()
- GXBool|||GXMCInit(GXMCObj *mcObj,u32 width,u32 height,u32 bufferCount)
- void|||GXMCBeginPicture(GXMCObj *mcObj,PictureType pType)
- void|||GXMCRenderMB(GXMCObj *mcObj,GXMCMacroBlockType mbType,GXMCMotionVector mv[4][2])
- void|||GXMCEndPicture(GXMCObj *mcObj,GXCopyType copyType,void *dest)
- void|||GXMCSetChromaSample(GXMCObj *mcObj,GXMCSampleMode mode)
- void|||GXMCFinish(GXMCObj *mcObj)
- GXBool|||GXMCBufferBusy(GXMCObj *mcObj,u32 bufferId)
- GXBool|||GXSelectDBuffer(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD0YAddress(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD1YAddress(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD0UAddress(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD1UAddress(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD0VAddress(GXMCObj *mcObj,u32 bufferId)
- u8|||GXMCGetD1VAddress(GXMCObj *mcObj,u32 bufferId)
{% endcapture %}

{% capture card_1_48_items %}
- const heap_t|||MEM_NAPA_HEAP
- const heap_t|||MEM_DDR_HEAP
- void|||memInit(u32 totMem)
- void|||memAlloc(u32 len)
- void|||memFree(void *addr,u32 len)
- void|||memSetHeap(heap_t)
- heap_t|||memGetHeap(void)
- void|||memAllocHeap(u32 len,heap_t heap)
- u32|||memGetSize(void)
- void|||memRefreshInit(u32 *freq_array)
- void|||memRefreshHandler(void)
- void|||memRefreshHelper(u32,u32)
- void|||memRefreshThread()
- void|||memRefreshThreadInit(u32 *freq_array,u32 priority)
- u32|||readDirectMemReg(u32)
- u32|||readDDRMemReg(u32)
- u32|||readSeqMemReg(u32)
- u32|||readBistMemReg(u32)
- u32|||readPerfMemReg(u32)
- void|||writeDirectMemReg(u32,u32)
- void|||writeDDRMemReg(u32,u32)
- void|||writeSeqMemReg(u32,u32)
- void|||writeBistMemReg(u32,u32)
- void|||writePerfMemReg(u32,u32)
{% endcapture %}

{% capture card_1_49_items %}
- void|||mlStart(char *FileName,u32 memSize,u32 memStart)
- void|||mlAlloc(u32 nbytes,MLMemType type,MLByteGrouping grouping)
- void|||mlAllocForce(u32 addr,u32 nbytes,MLMemType type,MLByteGrouping grouping)
- u32|||mlGetAddr(void *ptr)
- void|||mlGetCPtr(u32 addr)
- void|||mlFlush()
- void|||mlFree(void *ptr)
- void|||mlReverseBytes(void *ptr,u32 bytes)
- void|||mlSetCustomByteSwappingFunction(MLByteGrouping grouping,MLByteSwappingFunction function,u32 stride)
{% endcapture %}

{% capture card_1_50_items %}
- int|||mrExiSerInit(void)
- void|||mrExiPrint(char *buf,int len)
- int|||mrExiProbe(void)
{% endcapture %}

{% capture card_1_51_items %}
- u32|||joyStatus(u32 chan,u32 *stData)
- u32|||joyReset(u32 chan,u32 *stData)
- u32|||joyData(u32 chan,u32 *data)
- u16|||joyAddrCrc(u16 address)
- u32|||joyEERead(u32 chan,u16 addr,u8 *data)
- u32|||joyEEWrite(u32 chan,u16 addr,u8 *data)
- void|||joyDelay(u32 delay)
{% endcapture %}

{% capture card_1_52_items %}
- u16|||__DSPRegs
- u32|||__AIRegs
- void|||init_ntd_regs(void)
{% endcapture %}

{% capture card_1_53_items %}
- u32|||nvRamWrite(u32 addr,u8 *buf,u32 len)
- u32|||nvRamRead(u32 addr,u8 *buf,u32 len)
{% endcapture %}

{% capture card_1_54_items %}
- u32|||lbolt
- u32|||tmIrqTot
- Thread|||_tIdle
- void|||osInit(void)
- u32|||threadCreate(Thread *tp,const char *name,void *stack,u32 stackLen,void(*entry)(void *data),void *data,u32 pri)
- void|||threadSetFPEnable(Thread *tp,u32 val)
- void|||threadDestroy(Thread *tp)
- void|||threadStart(Thread *tp)
- void|||threadStop(Thread *tp)
- void|||threadYield(void)
- void|||threadSuspend(Thread *tp)
- void|||threadResume(Thread *tp)
- void|||threadPriSet(Thread *tp,u32 pri)
- u32|||threadPriGet(Thread *tp)
- Thread|||threadCurGet(void)
- void|||threadDelay(u32 ticks)
- void|||semaInit(Sema *sp,s32 cnt)
- void|||semaP(Sema *sp)
- void|||semaV(Sema *sp)
- u32|||semaTest(Sema *sp)
- void|||condVarInit(CondVar *cp,const char *name)
- void|||condVarWait(CondVar *cp,Sema *sp)
- void|||condVarSignal(CondVar *cp)
- void|||panic(Context *,u32)
{% endcapture %}

{% capture card_1_55_items %}
- void|||resetSys(void)
{% endcapture %}

{% capture card_1_56_items %}
- void|||sdi_init_intr(void(*irqCb)(void))
- void|||sdi_init(void(*irqCb)(void))
- sdi_slot_t|||sdi_handle(u32 ctrl,u32 slot)
- void|||sdi_set_debug(u32 debug)
- u32|||sdi_rd_reg(sdi_slot_t sp,u32 offset)
- void|||sdi_wr_reg(sdi_slot_t sp,u32 offset,u32 val)
- void|||sdi_wr_reg16(sdi_slot_t sp,u32 offset,u32 val)
- u32|||sdi_verif_reg(sdi_slot_t sp,u32 offset,u32 expected)
- void|||sdi_reg_intr(sdi_slot_t sp,u32 intr,void(*irq)(sdi_slot_t,void *),void *closure)
- void|||sdi_intr(void)
- u32|||sdi_get_istat(sdi_slot_t sp)
- void|||sdi_clear_istat(sdi_slot_t sp,u32 ibits)
- u32|||sdi_wait_istat(sdi_slot_t sp,u32 ibits,u32 bail_on_abort)
- void|||sdi_wr_host_ctrl(sdi_slot_t sp,u32 in_data)
- void|||sdi_int_regs_en(sdi_slot_t sp)
- void|||sdi_wr_nor_int_sts_en(sdi_slot_t sp,u32 en)
- void|||sdi_wr_err_int_sts_en(sdi_slot_t sp,u32 en)
- void|||sdi_err_int_recover(sdi_slot_t sp)
- u32|||sdi_cmd(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd)
- u32|||sdi_io_cmd(sdi_slot_t sp,u32 sysaddr,u32 blkszcnt,u32 arg,u32 tmdcmd,u32 blk_size,u32 blk_cnt,u32 dma,u32 wr)
- void|||sdi_read_io_coherency(sdi_slot_t sp)
- void|||sdi_write_io_coherency(sdi_slot_t sp)
- u32|||sdi_resp_type_cal(sdi_slot_t sp,u32 cmd_index,u32 resp_with_busy)
- u32|||sdi_mem_cmd(sdi_slot_t sp,u32 cmd_index,u32 arg,u32 resp_with_busy)
- u32|||sdi_mem_cmd_data(sdi_slot_t sp,u32 sysaddr,u32 cmd_index,u32 blk_size,u32 blk_cnt,u32 data_addr,u32 dma,u32 wr,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd0(sdi_slot_t sp)
- u32|||sdi_cmd2(sdi_slot_t sp)
- u32|||sdi_cmd3(sdi_slot_t sp)
- u32|||sdi_cmd7(sdi_slot_t sp,u32 rca)
- u32|||sdi_cmd9(sdi_slot_t sp)
- u32|||sdi_cmd12(sdi_slot_t sp)
- u32|||sdi_cmd13(sdi_slot_t sp)
- u32|||sdi_cmd16(sdi_slot_t sp,u32 dflt_blk_size)
- u32|||sdi_cmd17(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)
- u32|||sdi_cmd18(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd23(sdi_slot_t sp,u32 blk_cnt)
- u32|||sdi_cmd24(sdi_slot_t sp,u32 data_addr,u32 dma,u32 resp_with_busy)
- u32|||sdi_cmd25(sdi_slot_t sp,u32 blk_cnt,u32 data_addr,u32 dma,u32 auto_cmd12,u32 resp_with_busy)
- u32|||sdi_cmd32(sdi_slot_t sp,u32 start_blk_addr)
- u32|||sdi_cmd33(sdi_slot_t sp,u32 end_blk_addr)
- u32|||sdi_cmd38(sdi_slot_t sp,u32 resp_with_busy)
- u32|||sdi_cmd52(sdi_slot_t sp,u32 reg_addr,u32 sd_wr_data,u32 fn_no,u32 raw,u32 wr,u32 resp_with_busy)
- u32|||sdi_cmd53(sdi_slot_t sp,u32 byte_blk_cnt,u32 wr,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
- u32|||sdi_cmd55(sdi_slot_t sp)
- u32|||sdi_acmd6(sdi_slot_t sp,u32 buswidth)
- u32|||sdi_dma_done(sdi_slot_t sp)
- u32|||sdi_abort(sdi_slot_t sp)
- u32|||sdi_suspend(sdi_slot_t sp)
- u32|||sdi_resume(sdi_slot_t sp)
- void|||sdi_set_async_mode(sdi_slot_t sp,u32 mode)
- void|||sdi_wr_clk_ctrl(sdi_slot_t sp,u32 clk_ctrl)
- void|||sdi_wr_blk_gap_ctrl(sdi_slot_t sp,u32 bgap_ctrl)
- void|||sdi_wr_timeout_reg(sdi_slot_t sp,u32 timeout_cnt)
- void|||sdi_set_bus_width(sdi_slot_t sp,u32 buswidth)
- void|||sdi_rd_sd_hc_capabilities(sdi_slot_t sp)
- void|||sdi_clock_supply(sdi_slot_t sp,u32 div)
- void|||sdi_clock_stop(sdi_slot_t sp)
- void|||sdi_clock_change(sdi_slot_t sp,u32 div)
- void|||sdi_bus_power(sdi_slot_t sp)
- u32|||sdi_validate_ocr(sdi_slot_t sp,u32 ocr_data,u32 mem,u32 mmc)
- u32|||sdi_card_insertion(sdi_slot_t sp)
- u32|||sdi_io_card_init(sdi_slot_t sp)
- u32|||sdi_mem_card_init(sdi_slot_t sp)
- void|||sdi_mmc_card_init(sdi_slot_t sp)
- u32|||sdiSwapBytes4(u32 value)
- u32|||checkErrorInt(sdi_slot_t sp)
- u32|||sdiCardDetect(sdi_slot_t sp)
- u32|||sdiFindCard(sdi_slot_t sp)
- u32|||waitTransferComplete(sdi_slot_t sp)
- void|||sdiGoIdle(sdi_slot_t sp)
- void|||sdiIoReset(sdi_slot_t sp)
- void|||sdiSoftReset(sdi_slot_t sp)
- u32|||sendCmd(sdi_slot_t sp,u32 arg,u32 tmdcmd)
- u32|||sdiSendStatus(sdi_slot_t sp)
- u32|||sdiSendOpCondition(sdi_slot_t sp)
- u32|||sdiAllSendCid(sdi_slot_t sp)
- u32|||sdiSendRca(sdi_slot_t sp)
- u32|||sdiSendCsd(sdi_slot_t sp)
- u32|||sdiSelectCard(sdi_slot_t sp)
- u32|||sdiSetBlockLength(sdi_slot_t sp,u32 blksiz)
- u32|||sdiSetBusWidth(sdi_slot_t sp,u32 buswidth)
- u32|||sdiAsyncAbort(sdi_slot_t sp)
- u32|||sdiSyncAbort(sdi_slot_t sp)
- void|||updateDmaPointer(sdi_slot_t sp)
- u32|||sdiReadSingleBlock(sdi_slot_t sp,u32 arg,u32 *rdbuf,u32 dma)
- u32|||sdiWriteSingleBlock(sdi_slot_t sp,u32 arg,u32 *wrbuf,u32 dma)
- u32|||sdiReadBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)
- u32|||sdiWriteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 dma,u32 auto_cmd12,u32 infinite)
- u32|||sdiReadMultipleBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)
- u32|||sdiWriteMultipleBlock(sdi_slot_t sp,u32 arg,u32 blkcnt,u32 auto_cmd12,u32 dma)
- u32|||sdiReadInfiniteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt)
- u32|||sdiWriteInfiniteBlock(sdi_slot_t sp,u32 arg,u32 blkcnt)
- u32|||sdioByteRead(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 resp_with_busy)
- u32|||sdioByteWrite(sdi_slot_t sp,u32 fn_no,u32 reg_addr,u32 wr_data,u32 raw,u32 resp_with_busy)
- u32|||sdioExtRead(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
- u32|||sdioExtWrite(sdi_slot_t sp,u32 byte_blk_cnt,u32 fn_no,u32 blk_mode,u32 opcode,u32 reg_addr,u32 dma,u32 infinite,u32 resp_with_busy)
{% endcapture %}

{% capture card_1_57_items %}
- int|||serRxInit(u32 hwFlowEnable)
- u8|||serRxgetkey(void)
- u32|||serRxkbhit(void)
- int|||serRxInitParam(u32 chan,u32 cs,u32 hwFlowEnable)
{% endcapture %}

{% capture card_1_58_items %}
- void|||sfxPlay(u32 sound)
- void|||sfxInit(void)
{% endcapture %}

{% capture card_1_59_items %}
- int|||SHA_Busy(void)
- void|||SHA_Calc(u32 Addr,u32 numBlocks,u32 intrEnable)
- void|||SHA_Result(u32 *result)
- int|||SHA_Match(u32 *a,u32 *b)
- void|||SHA_Clear(void)
{% endcapture %}

{% capture card_1_60_items %}
- u32|||siInit(void(*comCb)(u32 sisr),void(*pollCb)(u32 sisr))
- void|||siChanOutSet(u32 *chanData)
- u32|||siChansRead(u32 *chanData)
- void|||siPollRegSet(u32 x,u32 y,u32 enMask,u32 vbCpyMask)
- void|||siPollRegGet(u32 *x,u32 *y,u32 *enMask,u32 *vbCpyMask)
- u32|||siComm(u32 chanNo,u32 *out,u32 oLen,u32 iLen)
- u32|||siSync(void)
- void|||siPollWait(u32 chanMask)
- void|||siComDataGet(u32 *in,u32 cnt)
{% endcapture %}

{% capture card_1_61_items %}
- void|||Line(int x,int y,int x2,int y2,unsigned char c,unsigned char u,unsigned char v)
- void|||Circle(int xc,int yc,int r,unsigned char c,unsigned char u,unsigned char v)
- u32|||GameOver(PLAYER *snake)
- void|||ExplodeSnake(int player_num,PLAYER *snake)
- void|||PrintScore(PLAYER *snake)
- void|||Delay(u32 delay_value)
{% endcapture %}

{% capture card_1_62_items %}
- int|||ioInit(void)
- int|||open(const char *path,int oflag)
- int|||close(int fd)
- ssize_t|||read(int fd,void *buf,size_t nbytes)
- off_t|||lseek(int fd,off_t offset,int whence)
- off_t|||tell(int fd)
- FILE|||fopen(const char *filename,const char *mode)
- int|||fclose(FILE *fp)
- size_t|||fread(void *ptr,size_t size,size_t nitems,FILE *fp)
- int|||fgetc(FILE *stream)
- int|||getc(FILE *stream)
{% endcapture %}

{% capture card_1_63_items %}
- __inline__ __const__ u16|||__fswab16(u16 x){return __arch__swab16(x)
- __inline__ u16|||__swab16p(u16 *x){return __arch__swab16p(x)
- __inline__ void|||__swab16s(u16 *addr){__arch__swab16s(addr)
- __inline__ __const__ u32|||__fswab32(u32 x){return __arch__swab32(x)
- __inline__ u32|||__swab32p(u32 *x){return __arch__swab32p(x)
- __inline__ void|||__swab32s(u32 *addr){__arch__swab32s(addr)
- u32|||h
- u32|||l
- |||return(((u64)__swab32(l))
- return|||__arch__swab64(x)
- __inline__ u64|||__swab64p(u64 *x){return __arch__swab64p(x)
- __inline__ void|||__swab64s(u64 *addr){__arch__swab64s(addr)
{% endcapture %}

{% capture card_1_64_items %}
- void|||usbInit()
- void|||writeDescriptor(u32 addr,u32 dw0,u32 dw1,u32 dw2,u32 dw3)
- void|||writeFmInt(u32 dw)
- void|||writeBulkHeadList(u32 dw)
- void|||setBulkListEn()
- void|||setTDFound()
- void|||setOperational()
- void|||writePort1Stat(u32 dw)
- void|||writePort2Stat(u32 dw)
- void|||writeFmRem(u32 dw)
- void|||writeOH1FmInt(u32 dw)
- void|||writeOH1BulkHeadList(u32 dw)
- void|||setOH1BulkListEn()
- void|||setOH1TDFound()
- void|||setOH1Operational()
- void|||writeOH1Port1Stat(u32 dw)
- void|||writeOH1Port2Stat(u32 dw)
- void|||writeOH1FmRem(u32 dw)
- void|||oh0Init(void(*_Cb)(void),int mask)
- void|||oh1Init(void(*_Cb)(void),int mask)
- void|||ehcInit(void(*_Cb)(void),int mask)
- void(|||usb_udelay_function)(u32 delay)
{% endcapture %}

{% capture card_1_65_items %}
- void|||input_register_device(struct input_dev *)
- void|||input_unregister_device(struct input_dev *)
- void|||input_register_handler(struct input_handler *)
- void|||input_unregister_handler(struct input_handler *)
- int|||input_open_device(struct input_handle *)
- void|||input_close_device(struct input_handle *)
- void|||input_event(struct input_dev *dev,unsigned int type,unsigned int code,int value)
{% endcapture %}

{% capture card_1_66_items %}
- void|||usb_malloc_dma(u32 len,u32 *dma_addr)
- struct usb_pool|||usb_pool_create(u32 size,u32 uncached)
- dma_addr_t|||usb_map_single(void *transfer_buffer,int data_len,int dir)
- void|||usb_unmap_single(u32 dma_addr,int len,int dir)
- void|||usb_pool_alloc(struct usb_pool *ppool,u32 *dma_addr)
- void|||usb_pool_free(struct usb_pool *ppool,void *pobj,u32 dma_addr)
- void|||usb_pool_destroy(struct usb_pool *ppool)
- void|||usb_malloc(u32 len)
- void|||usb_free(void *p,u32 len)
- void|||usb_memset(void *cp,u32 val,int size)
- void|||usb_memscan(void *addr,int c,size_t size)
- u32|||usb_check_payload(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer,u32 *next_value)
- u32|||usb_fill_payload(u32 StartValue,u32 IncrBy,u32 BufferLength,u32 *pBuffer)
{% endcapture %}

{% capture card_1_67_items %}
- void|||spin_lock_irqsave(spinlock_t *sp_lock,int flags)
- void|||spin_unlock_irqrestore(spinlock_t *sp_lock,int flags)
{% endcapture %}

{% capture card_1_68_items %}
- void|||mod_timer(struct timer_list *tlist,u32 val)
- void|||del_timer_sync(struct timer_list *tlist)
- u32|||timer_pending(struct timer_list *tlist)
- void|||add_timer(struct timer_list *wh)
- void|||init_timer(struct timer_list *wh)
- void|||del_timer(struct timer_list *wh)
- int|||time_after(u32 jiff,int timeout)
{% endcapture %}

{% capture card_1_69_items %}
- u32|||swapBytes4(u32 input)
- void|||swapBytesPtr(void *ptr,int byteCount)
- void|||swapByteGroupingsPtr(void *ptr,int groupSize,int groupCount)
{% endcapture %}

{% capture card_1_70_items %}
- vireg|||viRegs[]
- const encoder_type_t|||VI_ENCODER_ROHM
- const encoder_type_t|||VI_ENCODER_CONXT
- void|||viNtsc(void)
- void|||viSetFormat(viFormat fmat,u32 xoff,u32 yoff,u32 height,u32 width)
- void|||viSetFieldSrc(viBase field,u32 addr,u32 width,u32 stride)
- void|||viEnable(u32 e)
- void|||viLoad(void)
- void|||viLoadSync(void)
- void|||fire_gun1(int duration)
- void|||fire_gun0(int duration)
- int|||mon_tstgun0clr(void)
- int|||mon_tstgun1clr(void)
- int|||confirm_gun0(void)
- int|||confirm_gun1(void)
- int|||confirm_notgun0(void)
- int|||confirm_notgun1(void)
- int|||chk_int(int int_num)
- void|||clr_int(int int_num,u32 vct,u32 enb)
- void|||viNtsc(void)
- u16|||__VIRegs(int index)
- void|||printVIRegs(void)
- void|||SetVIInt(int int_num,int int_enb,u16 hct,u16 vct)
- void|||ClrVIInt(int int_num)
- void|||__VISet3in1Output(VIBool enable)
- void|||GPIOInit(void)
- void|||outputLed(int value)
- BOOL|||__VISetSCL(u32 value)
- BOOL|||__VISetSDA(u32 value)
- void|||__VIOpenI2C(void)
- void|||__VICloseI2C(void)
- void|||__VISet3in1Output(VIBool enable)
- void|||__VISetVolume(u8 volumeL,u8 volumeR)
- void|||YUVSolidColor(u8 y,u8 u,u8 v,u8 enable)
- void|||vipll_init(void)
- void|||ViLcdInit(void)
- void|||vi_setcnxt_reg(u8 addr,u8 data)
- void|||viHd1080i(void)
- void|||viHd720p(void)
- BOOL|||__VIRelSCL(u32 value)
- BOOL|||__VIDisSDA(u32 value)
- u8|||VIGetSDA(void)
- u8|||vi_getcnxt_reg(u8 addr,u8 data)
- s32|||__VIGetI2CData(u8 slaveAddr,u8 *pData,s32 nBytes)
- s32|||__VIsetI2CAddress(u8 slaveAddr,u8 *pData,s32 nBytes)
- void|||set_current_vi_encoder(encoder_type_t enc_type)
- void|||vi_init_hd(void)
{% endcapture %}

{% capture card_1_71_items %}
- void|||read_print(u8 addr)
- void|||conexant_set_hdtv_mode(HdFormat hdtv_mode)
- int|||i2c_writereg(unsigned char theSlave,unsigned char theReg,unsigned char theValue)
- unsigned char|||i2c_readreg(unsigned char theSlave,unsigned char theReg)
- void|||i2c_gpioinit(void)
- void|||vi_init_hd(void)
{% endcapture %}

{% capture card_1_72_items %}
- void|||videoInit(void *fb,int format)
- void|||videoSwapBuffers(void *fb)
- void|||videoUseISR4Swap(void)
- int|||videoGetEncoderType(void)
- void|||viDump(void)
{% endcapture %}

{% capture section_1_cards %}
{% include_cached source-code-card.html title="acr.h" items=card_1_1_items functions="16" variables="0" lines="31" %}
{% include_cached source-code-card.html title="aes.h" items=card_1_2_items functions="5" variables="0" lines="16" %}
{% include_cached source-code-card.html title="ahb.h" items=card_1_3_items functions="5" variables="0" lines="51" %}
{% include_cached source-code-card.html title="ahbdbg.h" items=card_1_4_items functions="1" variables="0" lines="15" %}
{% include_cached source-code-card.html title="ai.h" items=card_1_5_items functions="1" variables="0" lines="35" %}
{% include_cached source-code-card.html title="aram.h" items=card_1_6_items functions="4" variables="0" lines="28" %}
{% include_cached source-code-card.html title="arch.h" items=card_1_7_items functions="1" variables="1" lines="70" %}
{% include_cached source-code-card.html title="args.h" items=card_1_8_items functions="4" variables="2" lines="52" %}
{% include_cached source-code-card.html title="assert.h" items=card_1_9_items functions="1" variables="0" lines="35" %}
{% include_cached source-code-card.html title="axdbg.h" items=card_1_10_items functions="7" variables="2" lines="107" %}
{% include_cached source-code-card.html title="axmc.h" items=card_1_11_items functions="28" variables="0" lines="78" %}
{% include_cached source-code-card.html title="busclient.h" items=card_1_12_items functions="3" variables="0" lines="51" %}
{% include_cached source-code-card.html title="crc.h" items=card_1_13_items functions="3" variables="0" lines="41" %}
{% include_cached source-code-card.html title="dbg_viai_setup.h" items=card_1_14_items functions="2" variables="0" lines="6" %}
{% include_cached source-code-card.html title="dbgcomm.h" items=card_1_15_items functions="5" variables="0" lines="48" %}
{% include_cached source-code-card.html title="dbgint.h" items=card_1_16_items functions="1" variables="0" lines="34" %}
{% include_cached source-code-card.html title="dcbz_basic.h" items=card_1_17_items functions="2" variables="0" lines="9" %}
{% include_cached source-code-card.html title="di.h" items=card_1_18_items functions="11" variables="0" lines="117" %}
{% include_cached source-code-card.html title="diag.h" items=card_1_19_items functions="8" variables="0" lines="105" %}
{% include_cached source-code-card.html title="dma_basic.h" items=card_1_20_items functions="3" variables="0" lines="11" %}
{% include_cached source-code-card.html title="dolcnt.h" items=card_1_21_items functions="5" variables="0" lines="117" %}
{% include_cached source-code-card.html title="dsp.h" items=card_1_22_items functions="8" variables="0" lines="45" %}
{% include_cached source-code-card.html title="dspfix.h" items=card_1_23_items functions="1" variables="0" lines="2" %}
{% include_cached source-code-card.html title="dspmxic.h" items=card_1_24_items functions="7" variables="0" lines="93" %}
{% include_cached source-code-card.html title="dvd.h" items=card_1_25_items functions="22" variables="4" lines="121" %}
{% include_cached source-code-card.html title="dvdfs.h" items=card_1_26_items functions="6" variables="0" lines="51" %}
{% include_cached source-code-card.html title="ehci-hcd.h" items=card_1_27_items functions="1" variables="0" lines="12" %}
{% include_cached source-code-card.html title="ela.h" items=card_1_28_items functions="3" variables="0" lines="94" %}
{% include_cached source-code-card.html title="exi.h" items=card_1_29_items functions="12" variables="0" lines="85" %}
{% include_cached source-code-card.html title="eximdm.h" items=card_1_30_items functions="3" variables="0" lines="40" %}
{% include_cached source-code-card.html title="fifo.h" items=card_1_31_items functions="7" variables="0" lines="61" %}
{% include_cached source-code-card.html title="filerand.h" items=card_1_32_items functions="2" variables="0" lines="11" %}
{% include_cached source-code-card.html title="filerandom.h" items=card_1_33_items functions="2" variables="0" lines="11" %}
{% include_cached source-code-card.html title="flash.h" items=card_1_34_items functions="11" variables="0" lines="53" %}
{% include_cached source-code-card.html title="font.h" items=card_1_35_items functions="26" variables="0" lines="60" %}
{% include_cached source-code-card.html title="gecko_dma.h" items=card_1_36_items functions="8" variables="0" lines="84" %}
{% include_cached source-code-card.html title="getopt.h" items=card_1_37_items functions="1" variables="2" lines="36" %}
{% include_cached source-code-card.html title="gfxbu.h" items=card_1_38_items functions="2" variables="0" lines="42" %}
{% include_cached source-code-card.html title="gfxoldbu.h" items=card_1_39_items functions="5" variables="1" lines="84" %}
{% include_cached source-code-card.html title="gpioexi.h" items=card_1_40_items functions="3" variables="0" lines="10" %}
{% include_cached source-code-card.html title="hcd.h" items=card_1_41_items functions="13" variables="0" lines="298" %}
{% include_cached source-code-card.html title="hidutil.h" items=card_1_42_items functions="3" variables="0" lines="11" %}
{% include_cached source-code-card.html title="hub.h" items=card_1_43_items functions="1" variables="0" lines="152" %}
{% include_cached source-code-card.html title="i2c.h" items=card_1_44_items functions="9" variables="0" lines="51" %}
{% include_cached source-code-card.html title="irq.h" items=card_1_45_items functions="10" variables="0" lines="90" %}
{% include_cached source-code-card.html title="lib.h" items=card_1_46_items functions="176" variables="0" lines="309" %}
{% include_cached source-code-card.html title="mc.h" items=card_1_47_items functions="15" variables="0" lines="313" %}
{% include_cached source-code-card.html title="mem.h" items=card_1_48_items functions="22" variables="2" lines="72" %}
{% include_cached source-code-card.html title="ml.h" items=card_1_49_items functions="9" variables="0" lines="101" %}
{% include_cached source-code-card.html title="mrexi.h" items=card_1_50_items functions="3" variables="0" lines="63" %}
{% include_cached source-code-card.html title="n64cnt.h" items=card_1_51_items functions="7" variables="0" lines="85" %}
{% include_cached source-code-card.html title="ntd_regs.h" items=card_1_52_items functions="1" variables="2" lines="36" %}
{% include_cached source-code-card.html title="nvram.h" items=card_1_53_items functions="2" variables="0" lines="41" %}
{% include_cached source-code-card.html title="os.h" items=card_1_54_items functions="21" variables="3" lines="113" %}
{% include_cached source-code-card.html title="reset.h" items=card_1_55_items functions="1" variables="0" lines="32" %}
{% include_cached source-code-card.html title="sdi.h" items=card_1_56_items functions="96" variables="0" lines="263" %}
{% include_cached source-code-card.html title="serrx.h" items=card_1_57_items functions="4" variables="0" lines="35" %}
{% include_cached source-code-card.html title="sfx.h" items=card_1_58_items functions="2" variables="0" lines="37" %}
{% include_cached source-code-card.html title="sha.h" items=card_1_59_items functions="5" variables="0" lines="14" %}
{% include_cached source-code-card.html title="si.h" items=card_1_60_items functions="9" variables="0" lines="57" %}
{% include_cached source-code-card.html title="snake.h" items=card_1_61_items functions="6" variables="0" lines="117" %}
{% include_cached source-code-card.html title="standio.h" items=card_1_62_items functions="11" variables="0" lines="59" %}
{% include_cached source-code-card.html title="swab.h" items=card_1_63_items functions="10" variables="2" lines="159" %}
{% include_cached source-code-card.html title="usb.h" items=card_1_64_items functions="22" variables="0" lines="39" %}
{% include_cached source-code-card.html title="usb_input.h" items=card_1_65_items functions="7" variables="0" lines="747" %}
{% include_cached source-code-card.html title="usb_mem.h" items=card_1_66_items functions="13" variables="0" lines="35" %}
{% include_cached source-code-card.html title="usb_spin.h" items=card_1_67_items functions="2" variables="0" lines="34" %}
{% include_cached source-code-card.html title="usb_timer.h" items=card_1_68_items functions="7" variables="0" lines="25" %}
{% include_cached source-code-card.html title="util.h" items=card_1_69_items functions="3" variables="0" lines="20" %}
{% include_cached source-code-card.html title="vi.h" items=card_1_70_items functions="44" variables="3" lines="169" %}
{% include_cached source-code-card.html title="vi_conexant.h" items=card_1_71_items functions="6" variables="0" lines="15" %}
{% include_cached source-code-card.html title="video.h" items=card_1_72_items functions="5" variables="0" lines="71" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_1_cards %}

<!-- cspell:enable -->

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


{% capture card_2_1_items %}
- void|||halt(void)
- void|||ppcL1Enable(void)
- void|||ppcL2Enable(void)
- void|||ppcHID0Set(u32 val)
- u32|||ppcHID0Get(void)
- void|||ppcHID2Set(u32 val)
- u32|||ppcHID2Get(void)
- void|||ppcHID4Set(u32 val)
- u32|||ppcHID4Get(void)
- void|||ppcL2CRSet(u32 val)
- u32|||ppcL2CRGet(void)
- void|||ppcWPARSet(u32 val)
- u32|||ppcWPARGet(void)
- void|||ppcDecSet(u32 val)
- void|||ppcMsrSet(u32 val)
- u32|||ppcMsrGet(void)
- void|||ppcTBUSet(u32 val)
- u32|||ppcTBUGet(void)
- void|||ppcTBLSet(u32 val)
- u32|||ppcTBLGet(void)
- u32|||ppcPVRGet(void)
- void|||setIrqHndlr(void(*hndlr)())
- void|||__dcbi(u32 *,u32)
- void|||__icbi(u32 *,u32)
- u32|||__lwarx(u32)
- void|||__stwcx(u32,u32)
- void|||_ctxSw(void *newCtx)
- void|||_irqCtxSw(void *newCtx)
- void|||ppcSync(void)
- void|||ppcEeieo(void)
{% endcapture %}

{% capture section_2_cards %}
{% include_cached source-code-card.html title="unshared.h" items=card_2_1_items functions="30" variables="0" lines="76" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_2_cards %}

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


{% capture card_3_1_items %}
- void|||memset32(void *,u32,u32)
- void|||memcpy32(void *,const void *,u32)
- int|||memcmp32(const void *,const void *,u32)
- void|||GXSetVtxDesc(GXAttr Attr,GXAttrType Type)
- void|||GXSetVtxDescv(GXVtxDescList *AttrPtr)
- void|||GXGetVtxDesc(GXAttr Attr,GXAttrType *TypePtr)
- void|||GXClearVtxDesc(void)
- void|||GXSetVtxAttrFmt(GXVtxFmtID Idx,GXAttr Attr,GXCompCnt CompCnt,GXCompType CompType,u8 Shift)
- void|||GXSetVtxAttrFmtv(GXVtxFmtID Idx,GXVtxFmtList *AttrPtr)
- void|||GXGetVtxAttrFmt(GXVtxFmtID Idx,GXAttr Attr,GXCompCnt *CompCnt,GXCompType *CompType,u8 *Shift)
- void|||GXSetArray(GXAttr Attr,u32 Base,u8 Stride)
- void|||GXGetArray(GXAttr Attr,u32 *Base,u8 *Stride)
- void|||GXSetTexCoordGen(GXTexCoord Coord,GXTexGenType Type,u8 MatIdx)
- void|||GXGetTexCoordGen(GXTexCoord Coord,GXTexGenType *Type,u8 *MatIdx)
- void|||GXSetTexCoordGen2(GXTexCoord Coord,GXTexGenFunc Func,GXTexGenSrc Source,u8 MatIdx)
- void|||GXSetTexCoordWrap(GXTexCoord Coord,GXBool CylWrapS,GXBool CylWrapT,GXBool BiasS,GXBool BiasT,GXBool LineOffset,GXBool PointOffset)
- void|||GXSetBumpSource(GXTexCoord Coord,GXTexCoord SrcCoord,GXLightID SrcLight)
- void|||GXGetBumpSource(GXTexCoord Coord,GXTexCoord *SrcCoord,GXLightID *SrcLight)
- void|||GXSetTexCoordTrans(GXTexCoord Coord,GXMtxName MtxIdx,GXBool Normalize)
- void|||GXSetDualTexTrans(GXBool Enable)
- void|||GXSetCCConstColor(GXCCRegID CCReg,GXColor Color)
- void|||GXGetCCConstColor(GXCCRegID CCReg,GXColor *Color)
- void|||GXSetCCConstSelect(GXCCStageID CCStageId,GXCCColSelect ConstSelect)
- void|||GXGetCCConstSelect(GXCCStageID CCStageId,GXCCColSelect *ConstSelect)
- void|||GXSetACConstSelect(GXCCStageID CCStageId,GXCCColSelect ConstSelect)
- void|||GXGetACConstSelect(GXCCStageID CCStageId,GXCCColSelect *ConstSelect)
- void|||GXSetCCSwapModeTableEntry(GXCCSwSelect CCSwapId,GXCCChannel Red,GXCCChannel Green,GXCCChannel Blue,GXCCChannel Alpha)
- void|||GXGetCCSwapModeTableEntry(GXCCSwSelect CCSwapId,GXCCChannel *Red,GXCCChannel *Green,GXCCChannel *Blue,GXCCChannel *Alpha)
- void|||GXSetCCSwapMode(GXCCStageID CCStageId,GXCCSwSelect TextureSwap,GXCCSwSelect RasterSwap)
- void|||GXGetCCSwapMode(GXCCStageID CCStageId,GXCCSwSelect *TextureSwap,GXCCSwSelect *RasterSwap)
- void|||GXClearVertexCache(void)
- void|||GXGetVertexCacheStatus(u32 *CheckCnt,u32 *MissCnt,u32 *StallCnt)
- void|||GXBeginPrimitive(GXPrimitive Type,GXVtxFmtID VatIdx,u16 Nverts)
- void|||GXBeginPrimitive2(GXPrimitive Type,GXVtxFmtID VatIdx,u16 Nverts)
- void|||GXEndPrimitive(void)
- void|||GXSetLineWidth(u8 Width,GXTexOffsets Offset)
- void|||GXGetLineWidth(u8 *Width,GXTexOffsets *Offset)
- void|||GXSetPointSize(u8 PointSize,GXTexOffsets Offset)
- void|||GXGetPointSize(u8 *PointSize,GXTexOffsets *Offset)
- void|||GXSetShadeMode(GXShadeModes Mode)
- void|||GXGetShadeMode(GXShadeModes *Mode)
- void|||GXSetAntiAliasing(GXBool Mode,u8 SamplePts[4][3][2])
- void|||GXGetAntiAliasing(GXBool *Mode,u8 SamplePts[4][3][2])
- void|||GXSetCoPlanar(GXBool Enable)
- void|||GXGetCoPlanar(GXBool *Enable)
- void|||GXSetFieldMode(GXBool texLod,GXBool linewd)
- void|||GXSetProjection(f32 Matrix[4][4],GXProjMtxType type)
- void|||GXLoadPosMatrixIndx(u32 ArrayIdx,GXMtxName MatName)
- void|||GXLoadNormMatrixIndx(u32 ArrayIdx,GXMtxName MatName)
- void|||GXLoadTexMatrixIndx(u32 ArrayIdx,GXMtxName MatName,GXMtxType Type)
- void|||GXLoadPosMatrixImm(f32 *MatrixPtr,GXMtxName MatName)
- void|||GXLoadNormMatrixImm(f32 *MatrixPtr,GXMtxName MatName)
- void|||GXLoadTexMatrixImm(f32 *MatrixPtr,GXMtxName MatName,GXMtxType Type)
- void|||GXSetDefaultMatrix(GXMtxName MatName)
- void|||GXGetDefaultMatrix(GXMtxName *MatName)
- void|||GXSetViewport(s16 Left,s16 Top,u16 Width,u16 Height,f32 Near,f32 Far)
- void|||GXGetViewport(s16 *Left,s16 *Top,u16 *Width,u16 *Height,f32 *Near,f32 *Far)
- void|||GXSetScissor(u16 Left,u16 Top,u16 Width,u16 Height)
- void|||GXGetScissor(u16 *Left,u16 *Top,u16 *Width,u16 *Height)
- void|||GXSetCullMode(GXCullModes Mode)
- void|||GXGetCullMode(GXCullModes *Mode)
- void|||GXInitLightAttn(GXLightObj *ptr,f32 A0,f32 A1,f32 A2,f32 K0,f32 K1,f32 K2)
- void|||GXInitShininess(GXLightObj *ptr,f32 Shininess)
- void|||GXInitLightPos(GXLightObj *ptr,f32 X,f32 Y,f32 Z)
- void|||GXInitLightDir(GXLightObj *ptr,f32 X,f32 Y,f32 Z)
- void|||GXInitLightColor(GXLightObj *ptr,GXColor LightColor)
- void|||GXLoadLightStateImm(GXLightObj *ptr,GXLightID LightId)
- void|||GXLoadLightStateIndx(u32 LightObjIdx,GXLightID LightId)
- void|||GXSetAmbientColor(GXColorID ColorId,GXColor AmbColor)
- void|||GXGetAmbientColor(GXColorID ColorId,GXColor *AmbColor)
- void|||GXSetMaterialColor(GXColorID ColorId,GXColor MatColor)
- void|||GXGetMaterialColor(GXColorID ColorId,GXColor *MatColor)
- void|||GXSetLightCtrl(GXColorID ColorId,GXBool Enable,GXColorSrc AmbSource,GXColorSrc MatSource,GXLightID LightMask,GXDiffuseFn DiffFunc,GXAttnFn AttnFunc)
- void|||GXGetLightCtrl(GXColorID ColorId,GXBool *Enable,GXColorSrc *AmbSource,GXColorSrc *MatSource,GXLightID *LightMask,GXDiffuseFn *DiffFunc,GXAttnFn *AttnFunc)
- void|||GXInitTexObj(GXTexObj *TexObjPtr,void *ImagePtr,u16 Width,u16 Height,GXTexFormats Format,GXTexWrapModes WrapS,GXTexWrapModes WrapT,GXTexFilters MinFilt,GXTexFilters MagFilt,f32 MinLod,f32 MaxLod,f32 LodBias,GXBool doEdgeLod)
- void|||GXInitTexObj2(GXTexObj *TexObjPtr,GXBool LodClamp,GXTexAnisotropy MaxAniso,GXBool FieldPredict,GXBool BilinearRound)
- void|||GXInitTlutObj(GXTlutObj *TlutObjPtr,void *LutPtr,u16 NumEntries,GXTlutFormats Format)
- void|||GXInitTexRegion(GXTexRegion *TexRegionPtr,GXBool IsCached,void *TmemEvenPtr,u8 WidthEven,u8 HeightEven,void *TmemOddPtr,u8 WidthOdd,u8 HeightOdd)
- void|||GXInitTlutRegion(GXTlutRegion *TlutRegionPtr,void *TmemPtr)
- void|||GXPreLoadTexture(GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)
- void|||GXLoadTlut(GXTlutObj *TlutObjPtr,GXTlutRegion *TlutRegionPtr)
- void|||GXLoadTexState(GXTexMapID TexId,GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)
- void|||GXLoadTlutState(GXTexMapID TexId,GXTlutObj *TlutObjPtr,GXTlutRegion *TlutRegionPtr)
- void|||GXClearTexRegion(GXTexObj *TexObjPtr,GXTexRegion *TexRegionPtr)
- void|||GXFlushTextureState(void)
- void|||GXInitIndirectTexture(GXCCStageID CCStageId,GXIndTexMapID TexId,GXIndTexFormats Fmt,GXIndTexBias Bias,GXIndTexAlphaSel AlphaSel,GXIndTexMtxID MatrixSel,GXIndTexWrap WrapS,GXIndTexWrap WrapT,GXBool IndLOD,GXBool AddPrev)
- void|||GXSetIndTexMtx(GXIndTexMtxID MtxId,f32 OffsetMatrix[3][2],u8 ScaleExp)
- void|||GXSetIndTexScale(GXIndTexMapID IndTexId,GXIndTexScale ScaleS,GXIndTexScale ScaleT)
- void|||GXSetIndTexOrder(u8 NumIndTex,GXIndTexMapID IndTexId[],GXTexMapID TexId[],GXTexCoord TexCoord[])
- void|||GXSetCCOp(GXCCStageID CCStageId,GXCCOps ColorOp,GXCCArgs Arg1,GXCCArgs Arg2,GXCCArgs Arg3,GXCCArgs Arg4)
- void|||GXGetCCOp(GXCCStageID CCStageId,GXCCOps *ColorOp,GXCCArgs *Arg1,GXCCArgs *Arg2,GXCCArgs *Arg3,GXCCArgs *Arg4)
- void|||GXSetACOp(GXCCStageID CCStageId,GXCCOps ColorOp,GXCCArgs Arg1,GXCCArgs Arg2,GXCCArgs Arg3,GXCCArgs Arg4)
- void|||GXGetACOp(GXCCStageID CCStageId,GXCCOps *ColorOp,GXCCArgs *Arg1,GXCCArgs *Arg2,GXCCArgs *Arg3,GXCCArgs *Arg4)
- void|||GXSetCCOutput(GXCCStageID CCStageId,GXCCScale Scale,GXCCBias AddBias,GXCCClamp Clamp,GXCCRegID CCReg)
- void|||GXGetCCOutput(GXCCStageID CCStageId,GXCCScale *Scale,GXCCBias *AddBias,GXCCClamp *Clamp,GXCCRegID *CCReg)
- void|||GXSetACOutput(GXCCStageID CCStageId,GXCCScale Scale,GXCCBias AddBias,GXCCClamp Clamp,GXCCRegID CCReg)
- void|||GXGetACOutput(GXCCStageID CCStageId,GXCCScale *Scale,GXCCBias *AddBias,GXCCClamp *Clamp,GXCCRegID *CCReg)
- void|||GXSetCCColor(GXCCRegID CCReg,GXColor Color)
- void|||GXSetCCColor2(GXCCRegID CCReg,s16 red,s16 grn,s16 blu,s16 alp)
- void|||GXGetCCColor(GXCCRegID CCReg,GXColor *Color)
- void|||GXSetCCOrder(u8 NumStages,GXTexMapID TexId[],GXTexCoord TexCoord[],GXColorID ColorId[])
- void|||GXGetCCOrder(u8 *NumStages,GXTexMapID TexId[],GXTexCoord TexCoord[],GXColorID ColorId[])
- void|||GXSyncSuTsRegs(void)
- void|||GXGetSuTexSize(GXTexCoord coord,u32 *w,u32 *h)
- void|||GXSetRange(f32 NearZ,f32 SideX)
- void|||GXSetFog(GXFogTypes Type,GXBool Proj,GXBool Range,f32 StartZ,f32 EndZ,f32 NearZ,f32 FarZ,f32 SideX,GXColor Color)
- void|||GXGetFog(GXFogTypes *Type,GXBool *Proj,GXBool *Range,f32 *StartZ,f32 *EndZ,f32 *NearZ,f32 *FarZ,f32 *SideX,GXColor *Color)
- void|||GXSetColorMode(GXColorModes Ops,GXBlendModes SrcFactor,GXBlendModes DstFactor,GXLogicOps logicOp,GXBool Dither)
- void|||GXGetColorMode(GXColorModes *Ops,GXBlendModes *SrcFactor,GXBlendModes *DstFactor,GXLogicOps *logicOp,GXBool *Dither)
- void|||GXSetBlendOp(GXBlendOps op)
- void|||GXSetDestAlpha(GXBool Enable,u8 Alpha)
- void|||GXGetDestAlpha(GXBool *Enable,u8 *Alpha)
- void|||GXSetZMode(GXBool CompareEnable,GXBool UpdateEnable,GXCompare Func)
- void|||GXGetZMode(GXBool *CompareEnable,GXBool *UpdateEnable,GXCompare *Func)
- void|||GXSetZTexture(GXZTexOp op,GXZTexFormat fmt,f32 zBias)
- void|||GXGetZTexture(GXZTexOp *op,GXZTexFormat *fmt,f32 *zBias)
- void|||GXSetAlphaFunc(GXAlphaLogic AlphaLogic,GXCompare Func0,GXCompare Func1,u8 RefValue0,u8 RefValue1)
- void|||GXGetAlphaFunc(GXAlphaLogic *AlphaLogic,GXCompare *Func0,GXCompare *Func1,u8 *RefValue0,u8 *RefValue1)
- void|||GXSetPixelFormat(GXPixelFormats Format,GXZCmprFormats ZCmpr,GXBool ZTop)
- void|||GXGetPixelFormat(GXPixelFormats *Format,GXZCmprFormats *ZCmpr,GXBool *ZTop)
- void|||GXSetColorMask(GXBool ColorMask,GXBool AlphaMask)
- void|||GXSetMotionComp(GXBool OddMask,GXBool EvenMask)
- void|||GXGetMotionComp(GXBool *OddMask,GXBool *EvenMask)
- void|||GXBeginDisplayList(void *BasePtr,u32 nBytes)
- u32|||GXEndDisplayList(void)
- void|||GXCallDisplayList(void *BasePtr,u32 nBytes)
- void|||GXSetCopyControl(GXFbClamps ClampFlags,GXTexFormats TexFormat,GXFbInterlace Interlaced,GXGamma Gamma,u16 VertScale,GXBool MipFilter)
- void|||GXSetCopyColorConv(GXCCV ccvFlag)
- void|||GXSetAAFilter(u8 Coefficients[7])
- void|||GXGetAAFilter(u8 Coefficients[7])
- void|||GXCopyFBToDisplay(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)
- void|||GXHDOffset(u16 PrevSrcHeight,void *DstBasePtr,u16 DstStride,GXBool RstEnable,GXBool HFilter)
- void|||GXSetHD(u16 AlphaRst,u16 ScaleRst,GXBool RstEnable,GXBool HFilter)
- void|||GXCopyFBToDisplay16(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)
- void|||GXCopyFBToDisplay32(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)
- void|||GXCopyFBToTexture(u16 SrcLeft,u16 SrcTop,u16 SrcWidth,u16 SrcHeight,void *DstBasePtr,u16 DstStride,GXBool Clear)
- void|||GXSetClear(GXColor ClearColor,u32 ClearZ)
- void|||GXGetClear(GXColor *ClearColor,u32 *ClearZ)
- void|||GXClearBoundingBox(void)
- void|||GXGetBoundingBox(u16 *Left,u16 *Right,u16 *Top,u16 *Bottom)
- void|||GXSetQuadOffset(u16 left,u16 top)
- u32|||GXReadPixelColorAlpha(u16 x,u16 y)
- u32|||GXReadPixelColor(u16 x,u16 y)
- void|||GXWritePixelColor(u16 x,u16 y,u32 color)
- u32|||GXGetPerfMetric(GXPerf perf)
- void|||GXInitPerfCounters(GXPerfBlock blockA,u32 valA,GXPerfBlock blockB,u32 valB,GXPerfBlock blockC,u32 valC,GXPerfBlock blockD,u32 valD)
- void|||GXInitPEPerfCounters(GXBool pe0,GXBool pe1,GXBool pe2,GXBool pe3,GXBool pe4,GXBool pe5)
- void|||GXDisplayPerfCounters(void)
- void|||GXSetFifoBase(u32 BasePtr,u32 Size,GXBool SetDefaults)
- void|||GXSetFifoLimits(u32 HiWaterMark,u32 LoWaterMark,u32 RdBreakMark)
- void|||GXSetInterrupts(GXBool Underflow,GXBool Overflow,GXBool BreakPoint)
- void|||GXClearInterrupts(GXBool Underflow,GXBool Overflow,GXBool BreakPoint)
- void|||GXSetFifoPtrs(u32 WritePtr,u32 ReadPtr)
- void|||GXGetFifoPtrs(u32 *WritePtrPtr,u32 *ReadPtrPtr)
- void|||GXGetFifoStatusFull(GXBool *Underflow,GXBool *Overflow,GXBool *Break,GXBool *RDIdle,GXBool *CPIdle)
- void|||GXGetFifoStatus(GXBool *Underflow,GXBool *Overflow,GXBool *Break)
- void|||GXDisplayFifoStatus(void)
- void|||GXGetFifoCount(u32 *FifoCount)
- void|||GXSetFifoEnable(GXBool Read,GXBool WrPtrInc)
- void|||GXInit(void)
- void|||GXInit2(void)
- void|||GXInitB(u32 revNo)
- void|||GXSetPERefresh(u32 peRefresh)
- void|||GXSetTXRefresh(u32 txRefresh)
- void|||GXAbortFrame(void)
- void|||GXSetDrawSync(u16 Token)
- void|||GXGetDrawSync(u16 *Token)
- GXBool|||GXDrawDone(void)
- GXBool|||GXDrawDoneSafe(void)
- void|||GXFlush(void)
- void|||GXHWSync(u8 Token)
- void|||GXBypass(u32 regData)
{% endcapture %}

{% capture card_3_2_items %}
- void|||gxFifoWrite(u32 d,u32 sz)
- void|||GXResetCacheAlignment()
- void|||GXSimStart(char *fileName)
- void|||GXSimEnd(void)
- void|||GXSimEnd(void)
{% endcapture %}

{% capture card_3_3_items %}
- void|||gxRegWrite16(u32 addr,u16 data)
- void|||gxRegWrite32(u32 addr,u32 data)
- u16|||gxRegRead16(u32 addr,u32 cpIdleFlag)
- u32|||gxRegRead32(u32 addr)
- void|||simSync(void)
- void|||GXWriteXFRegs(u32 addr,u8 Count,u32 *data)
- void|||GXWriteXFRegDirect(u32 addr,u32 data)
- void|||GXReadXFReg(u32 addr,u32 *data)
- void|||GXWriteCPReg(u8 addr,u16 data)
- void|||GXReadCPReg(u8 addr,u16 *data)
- void|||GXWritePIReg(u8 addr,u32 data)
- void|||GXReadPIReg(u8 addr,u32 *data)
- void|||GXWritePEReg(u8 addr,u16 data)
- void|||GXReadPEReg(u8 addr,u16 *data)
- void|||GXSUBypassCmd(u8 cmd,u32 data)
- void|||GXLoadCPReg(u8 reg,u32 data)
{% endcapture %}

{% capture section_3_cards %}
{% include_cached source-code-card.html title="gx.h" items=card_3_1_items functions="172" variables="0" lines="1513" %}
{% include_cached source-code-card.html title="gxfifo.h" items=card_3_2_items functions="5" variables="0" lines="172" %}
{% include_cached source-code-card.html title="gxreg.h" items=card_3_3_items functions="16" variables="0" lines="174" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_3_cards %}

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


{% capture card_4_1_items %}
- void|||gxuGetFrustum(float l,float r,float b,float t,float n,float f,float m[3][4])
- void|||gxuGetLightFrustum(float l,float r,float b,float t,float n,float sS,float tS,float sT,float tT,float m[3][4])
- void|||gxuGetOrtho(float l,float r,float b,float t,float n,float f,float m[3][4])
- void|||gxuGetPerspective(float fov,float aspect,float n,float f,float m[3][4])
- void|||gxuGetRotate(float deg,float x,float y,float z,float m[3][4])
- void|||gxuGetTranslate(float x,float y,float z,float m[3][4])
- void|||gxuGetScale(float x,float y,float z,float m[3][4])
- void|||gxuGetIdentity(float m[3][4])
- u32|||gxuGetInverse(float mat[3][4],float inv[3][4])
- void|||gxuGetTranspose(float mat[3][4],float xPose[3][4])
- void|||gxuMultMatrix(float current[3][4],float mat[3][4])
- void|||gxuMultVec(float vec[3],float mat[3][4])
- AXuint32|||gxuGetPPMFileSize(char *FileName,AXuint32 *width,AXuint32 *height)
- AXuint32|||gxuGetImageFileSize(char *FileName,AXuint32 *width,AXuint32 *height)
- AXuint32|||gxuReadBitmapFile(char *FileName,AXuint32 *width,AXuint32 *height,GXColor **bImage)
- AXuint32|||gxuWriteBitmapFile(char *FileName,AXuint32 w,AXuint32 h,GXTexFormats format,void *bImage)
- AXuint32|||gxuReadPPMFile(char *FileName,AXuint32 *width,AXuint32 *height,GXColor **bImage)
- AXuint32|||gxuWritePPMFile(char *FileName,AXuint32 w,AXuint32 h,GXTexFormats format,void *bImage)
- AXuint32|||gxuReadDDSFile(char *FileName,AXuint32 *width,AXuint32 *height,AXuint32 *numLod,void **bImage)
- void|||gxuGenImage(GXUImageType iType,AXuint32 width,AXuint32 height,GXUColorType color,GXColor *bImage)
- void|||gxuConvertImage(AXuint32 imageW,AXuint32 imageH,GXColor *rgbImage,GXTexFormats texFmt,GXBool generateLut,GXTlutFormats tlutFmt,void *lut,void *image)
- void|||gxuGetIndexedImage(GXUImageType iType,GXUColorType color,AXuint32 imageW,AXuint32 imageH,GXColor *planarImage,GXTlutFormats tlutFmt,AXuint32 numEntries,void *lutPtr)
- void|||gxuRandomImage(AXuint32 imageW,AXuint32 imageH,GXBool mipMapped,GXTexFormats texFmt,GXTlutFormats tlutFmt,void *lut,void *image)
- AXuint32|||gxuGetNumLevels(AXuint32 width,AXuint32 height)
- void|||gxuGetTiledImage(GXColor *planarImage,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,void *tiledImage)
- void|||gxuGetBorderedTiledImage(GXColor *planarImage,GXColor border,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,void *tiledImage)
- void|||gxuFormatImage(GXColor *planarImage,AXuint32 width,AXuint32 height,GXBool mipMapped,GXTexFormats tilefmt,GXTlutFormats tlutFmt,void *lut,void *tiledImage)
- AXuint32|||gxuGetTiledSize(GXBool mipMapped,GXTexFormats tilefmt,AXuint32 width,AXuint32 height)
- void|||gxuTexPreloadAlloc(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *EvenPtr,AXuint32 *OddPtr)
- void|||gxuTexPreloadAllocL(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *ptr)
- void|||gxuTexPreloadAllocH(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint32 width,AXuint32 height,AXuint32 *ptr)
- void|||gxuTexAllocTlut(GXTlutFormats fmt,AXuint32 nEntries,AXuint32 *ptr)
- void|||gxuTexAllocTlut2(GXTlutFormats fmt,AXuint32 nEntries,AXuint32 *ptr)
- void|||gxuTexCachedAlloc(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *EvenPtr,AXuint32 *OddPtr)
- void|||gxuTexCachedAllocL(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)
- void|||gxuTexCachedAllocH(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)
- void|||gxuTexCachedAlloc2(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *EvenPtr,AXuint32 *OddPtr)
- void|||gxuTexCachedAllocL2(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)
- void|||gxuTexCachedAllocH2(GXUMipMapType mipMapped,GXTexFormats fmt,AXuint8 cacheWidth,AXuint8 cacheHeight,AXuint32 *ptr)
- void|||gxuTexCacheFree(AXuint32 EvenPtr,AXuint32 OddPtr)
- void|||gxuTexMemFree(AXuint32 Ptr)
- void|||gxuBumpInit(AXuint32 nStages)
- void|||gxuInitRasterState(char *fileName)
- void|||gxuInitEFB(u32 col,u32 z,u32 left,u32 top,u32 width,u32 height,GXPixelFormats fmt)
- void|||gxuCopyOut(u32 left,u32 top,u32 width,u32 height)
- void|||gxuBUDInit(int argc,char **argv,u32 left,u32 top,u32 width,u32 height)
- void|||gxuBUDInitB(u32 revNo,int argc,char **argv,u32 left,u32 top,u32 width,u32 height)
- void|||gxuBUDFinish(int argc,char **argv,u32 left,u32 top,u32 width,u32 height)
- int|||width
- int|||height
- GXColor|||pixels
- |||gxuCachedImage
- gxuCachedImage|||gxuCachedImages[]
{% endcapture %}

{% capture section_4_cards %}
{% include_cached source-code-card.html title="gxu.h" items=card_4_1_items functions="48" variables="5" lines="317" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_4_cards %}

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


{% capture card_5_1_items %}
- void|||gxRegWrite16(u32 addr,u16 data)
- void|||gxRegWrite32(u32 addr,u32 data)
- u16|||gxRegRead16(u32 addr,u32 cpIdleFlag)
- u32|||gxRegRead32(u32 addr)
- void|||simSync(void)
- void|||GXWriteXFRegs(u32 addr,u8 Count,u32 *data)
- void|||GXWriteXFRegDirect(u32 addr,u32 data)
- void|||GXReadXFReg(u32 addr,u32 *data)
- void|||GXWriteCPReg(u8 addr,u16 data)
- void|||GXReadCPReg(u8 addr,u16 *data)
- void|||GXWritePIReg(u8 addr,u32 data)
- void|||GXReadPIReg(u8 addr,u32 *data)
- void|||GXWritePEReg(u8 addr,u16 data)
- void|||GXReadPEReg(u8 addr,u16 *data)
- void|||GXSUBypassCmd(u8 cmd,u32 data)
- void|||GXLoadCPReg(u8 reg,u32 data)
{% endcapture %}

{% capture card_5_2_items %}
- GXData|||gx
- GXBool|||fifoInit
- u32|||Color
- f32|||a[3]
- f32|||k[3]
- f32|||lpos[3]
- f32|||ldir[3]
- |||GXLightObjInt
- u32|||mode1
- u32|||image0
- u32|||image3
- u32|||loadImage0
- u32|||loadImage3
- |||GXTexObjInt
- void|||gxLoadSuTsRegs(void)
- void|||gxXfVtxSpecs(u32 vatIdx)
- void|||gxSetMatrixIndex(GXAttr matIdxAttr)
{% endcapture %}

{% capture section_5_cards %}
{% include_cached source-code-card.html title="gxreg.h" items=card_5_1_items functions="16" variables="0" lines="174" %}
{% include_cached source-code-card.html title="gxtypes.h" items=card_5_2_items functions="3" variables="14" lines="281" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_5_cards %}
