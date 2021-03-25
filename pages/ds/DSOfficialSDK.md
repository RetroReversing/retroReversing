---
layout: post
tags: 
- ds
- sdk
title: Nintendo DS SDK (NITRO)
image:  /public/consoles/Nintendo DS.png
thumbnail: /public/consoles/Nintendo DS.png
permalink: /DS-NITRO-SDK
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo DS
    url: /ds
  - name: Nintendo DS Software Development Kit
    url: #
recommend: 
- ds
- sdk
editlink: /ds/DSOfficialSDK.md
---
The NITRO SDK was previously known as the IRIS SDK, but got renamed sometime before April 2004 (release 1.0 of NITRO-SDK). Much of the structure and files remain from the IRIS SDK but most files have been renamed to NITRO.

Even although the SDK was renamed to NITRO in version 1.0 it still distributed the release notes for the three IRIS SDK versions that started the project. Although in the 4.2 SDK leak these were removed ands the release notes just start from 1.0.

When the Nintendo DSi was released the SDK was once again renamed to the twilight (TWL) SDK.

# Leaked Versions of the SDK
Known Leaked versions:
* **NITRO-SDK 3.0** (Unknown Leak)
* **NITRO-SDK 4.2+ Patch** (Pokemon Platinum Source code Leak)
* **TWL-SDK 5.5** (Unknown Leak) - This is the DSi version of the SDK


# Known Versions
These are the versions that have been known to exist and their release dates:

SDK Version Name | Release Date
---|---
irisSDK-snapshot-031203 | 3rd December 2003
irisSDK-snapshot-031212 | 12th December 2003
irisSDK-snapshot-040120 | 20th January 2004 
NITRO-SDK 1.0 | 5th April 2004
NITRO-SDK 1.2 | 16th June 2004 
NITRO-SDK 2.0 | 11th March 2005 (First in english)
NITRO-SDK 2.1 | 9th May 2005 
NITRO-SDK 2.2 | 22nd August 2005 
NITRO-SDK 3.0 | 25th January 2006
NITRO-SDK 3.1 | 2nd May 2006 
NITRO-SDK 3.2 | 28th August 2006 
NITRO-SDK 4.0 | 15th February 2007 
NITRO-SDK 4.1 | 10th July 2007
NITRO-SDK 4.2 | 10th December 2007
NITRO-SDK 4.2 + Patch | 18th January 2008
TWL-SDK 5.0 | 23rd October 2008
TWL-SDK 5.1 | 27th February 2009
TWL-SDK 5.2 | 10th June 2009
TWL-SDK 5.3 | 7th August 2009
TWL-SDK 5.4 | 20th November 2009
TWL-SDK 5.5 | 12th July 2010

All three IRIS SDK version were leaked as part of the Paladin Leak on the 30th September 2020.

Note that there was also something called the "TWLwrap SDK" for DSi that was leaked but it is very different to these so it presumably wasn't a consumer SDK.

# Root Files (/)
* Makefile
* Readme-NitroSDK-3_0-060125.txt
* SrcTreeMap.txt
* bin
* build
* cache
* components
* data
* **docs** - Documentation
* **include** - C/C++ Header files for SDK libraries
* **lib** - Static libraries for the SDK
* **man** - Manual for Functions
* **tools** - SDK Tools such as elftobin and makerom

---
# Manual (/man)

Contents:
* a-z.html
* alphabet.html
* alphabet_index.html
* card
* categories.html
* changelog-oldver.html
* changelog.html
* changelog2.2branch.html
* cht
* contents.html
* cp
* css
* ctrdg
* demos
* env
* ext
* fs
* functions.html
* fx
* gx
* icons.html
* index.html
* information
* main.html
* math
* mb
* mi
* os
* pad
* prc
* romfiles
* rtc
* sdk_logo.gif
* snd
* spi
* std
* svc
* tools
* wbt
* wm
* wm_changes_041006.txt
* wvr

---
# Tools (/tools)
Contents:
* bin
* elftobin
* lib
* makerom

---
# Pre-compiled Header Cache (/cache)

The Cache folder only contains one file:
* ./cache/include/Don'tDeleteMe.txt

---
# Bin (/bin)

Contents:
* ./bin/ARM9-TS/Release/mb_child_simple.srl
* ./bin/ARM9-TS/Rom/mb_child.srl
* ./bin/ARM9-TS/Rom/WMTestTool.srl
* ./bin/ARM9-TS/Rom/mb_child_simple.srl

---
# C/C++ Header files (/include)
the table below lists all the C++ header files available to use when developing Nintendo DS games.

Name | Description
---|---
nitro_win32.h |
nitro_sp.h |
nitro_wl |
nitro_wl/common |
nitro_wl/common/version_wl.h |
nitro.h |
nitro |
nitro/gx.h |
nitro/init |
nitro/init/crt0.h |
nitro/env.h |
nitro/wvr |
nitro/wvr/common |
nitro/wvr/common/wvr_common.h |
nitro/wvr/ARM9 |
nitro/wvr/ARM9/wvr.h |
nitro/cht |
nitro/cht/ARM9 |
nitro/cht/ARM9/pictocatch.h |
nitro/version.h |
nitro/parent_begin.h |
nitro/mi.h |
nitro/dtcm_begin.h |
nitro/card |
nitro/card/eeprom.h |
nitro/card/rom.h |
nitro/card/backup.h |
nitro/card/pullOut.h |
nitro/card/common.h |
nitro/card/fram.h |
nitro/card/flash.h |
nitro/snd.h |
nitro/wvr.h |
nitro/exi.h |
nitro/hw |
nitro/hw/common |
nitro/hw/common/mmap_shared.h |
nitro/hw/common/lcd.h |
nitro/hw/common/armArch.h |

---
## ARM7 Headers

Name | Description
---|---
nitro/hw/ARM7/ioreg_PAD.h |
nitro/hw/ARM7/mmap_global.h |
nitro/hw/ARM7/ioreg_OS.h |
nitro/hw/ARM7/ioreg.h |
nitro/hw/ARM7/mmap_wram.h |
nitro/hw/ARM7/mmap_main.h |
nitro/hw/ARM7/ioreg_MI.h |
nitro/hw/ARM7/ioreg_PXI.h |
nitro/hw/ARM7/ioreg_SND.h |
nitro/hw/ARM7/ioreg_EXI.h |
nitro/hw/ARM7/ioreg_GX.h |
nitro/hw/ARM7/ioreg_SPI.h |

## ARM9 Headers

Name | Description
---|---
nitro/hw/ARM9/ioreg_PAD.h |
nitro/hw/ARM9/ioreg_G3X.h |
nitro/hw/ARM9/mmap_global.h |
nitro/hw/ARM9/ioreg_G3.h |
nitro/hw/ARM9/ioreg_OS.h |
nitro/hw/ARM9/ioreg.h |
nitro/hw/ARM9/mmap_main.h |
nitro/hw/ARM9/ioreg_MI.h |
nitro/hw/ARM9/ioreg_PXI.h |
nitro/hw/ARM9/mmap_vram.h |
nitro/hw/ARM9/ioreg_EXI.h |
nitro/hw/ARM9/ioreg_GX.h |
nitro/hw/ARM9/ioreg_GXS.h |
nitro/hw/ARM9/mmap_tcm.h |
nitro/hw/ARM9/ioreg_CP.h |
nitro/hw/ARM9/ioreg_G2.h |
nitro/hw/ARM9/ioreg_G2S.h |

## Memory Interface (MI)
The memory interface includes were used to produde functions for accessing specific areas of the hardwares memory and were located in the **nitro/mi** folder.

Name | Description
---|---
nitro/mi/wram.h |
nitro/mi/dma.h |
nitro/mi/card.h |
nitro/mi/uncomp_stream.h |
nitro/mi/byteAccess.h |
nitro/mi/swap.h |
nitro/mi/stream.h |
nitro/mi/compress.h |
nitro/mi/memory.h |
nitro/mi/uncompress.h |
nitro/mi/init.h |
nitro/mi/exMemory.h |

## Misc Headers

Name | Description
---|---
nitro/itcm_begin.h |
nitro/pxi.h |
nitro/wbt.h |
nitro/pxi |
nitro/pxi/common |
nitro/pxi/common/fifo.h |
nitro/pxi/common/regname.h |
nitro/pxi/common/compparam.h |
nitro/pxi/common/init.h |
nitro/card.h |
nitro/itcm_end.h |
nitro/code32.h |
nitro/types.h |
nitro/misc.h |
nitro/ioreg.h |
nitro/specfiles |
nitro/specfiles/ARM7-TEG.lcf |
nitro/specfiles/ROM-TS.rsf |
nitro/specfiles/ARM9-TS-cloneboot-C.lcf.template |
nitro/specfiles/ARM9-TS.lsf |
nitro/specfiles/ARM9-TEG.lsf |
nitro/specfiles/ARM9-TEG-C.lcf.template |
nitro/specfiles/ARM7-TS.lsf |
nitro/specfiles/ARM9-TEG.lcf |
nitro/specfiles/ARM9-TEG.lcf.template |
nitro/specfiles/ARM9-TS.lcf |
nitro/specfiles/ARM7-TS.lcf.template |
nitro/specfiles/ARM7-TS.lcf |
nitro/specfiles/ARM9-TS-C.lcf.template |
nitro/specfiles/ndsld.response.template |
nitro/specfiles/default.bnr |
nitro/specfiles/mwldarm.response.template |
nitro/specfiles/ARM7-TEG.lsf |
nitro/specfiles/ARM9-TS.lcf.template |
nitro/specfiles/2.x |
nitro/specfiles/2.x/ARM9-TS-cloneboot-C.lcf.template |
nitro/specfiles/2.x/ARM9-TEG-C.lcf.template |
nitro/specfiles/2.x/ARM9-TEG.lcf.template |
nitro/specfiles/2.x/ARM9-TS-C.lcf.template |
nitro/specfiles/2.x/ARM9-TS.lcf.template |
nitro/specfiles/ARM7-TEG.lcf.template |
nitro/specfiles/ROM-TEG.rsf |
nitro/dtcm_end.h |
nitro/fx |
nitro/fx/fx.h |
nitro/fx/fx_mtx33.h |
nitro/fx/fx_trig.h |
nitro/fx/fx_mtx22.h |
nitro/fx/fx_mtx43.h |
nitro/fx/fx_cp.h |
nitro/fx/fx_mtx44.h |
nitro/fx/fx_mtx.h |
nitro/fx/fx_const.h |
nitro/fx/fx_vec.h |
nitro/exi |
nitro/exi/ARM7 |
nitro/exi/ARM7/genPort.h |
nitro/os.h |
nitro/utest.h |
nitro/parent_end.h |
nitro/ext |
nitro/ext/ext_scrntest.h |
nitro/ext/ext_keycontrol.h |
nitro/pad.h |
nitro/cht.h |
nitro/codereset.h |
nitro/wm |
nitro/wm/common |
nitro/wm/common/wm.h |
nitro/wm/ARM9 |
nitro/wm/ARM9/wm_api.h |
nitro/memorymap_sp.h |
nitro/std |
nitro/std/string.h |
nitro/section.h |
nitro/prc.h |
nitro/version_end.h |
nitro/ctrdg.h |
nitro/math |
nitro/math/fft.h |
nitro/math/dgt.h |
nitro/math/crc.h |
nitro/math/rand.h |
nitro/math/math.h |
nitro/math/qsort.h |
nitro/math/checksum.h |
nitro/pad |
nitro/pad/common |
nitro/pad/common/pad.h |
nitro/pad/ARM7 |
nitro/pad/ARM7/xyButton.h |
nitro/env |
nitro/env/env_system.h
nitro/spec.h
nitro/version_begin.h
nitro/components
nitro/spi
nitro/spi/common
nitro/spi/common/type.h
nitro/spi/common/userInfo_teg.h
nitro/spi/common/config.h
nitro/spi/common/pm_common.h
nitro/spi/common/userInfo_ts_300.h
nitro/spi/common/userInfo_ts_0.h
nitro/spi/common/userInfo_ts_200.h
nitro/spi/ARM7
nitro/spi/ARM7/pm.h
nitro/spi/ARM7/spi.h
nitro/spi/ARM9
nitro/spi/ARM9/pm.h
nitro/spi/ARM9/mic.h
nitro/spi/ARM9/tp.h
nitro/memorymap.h
nitro/wram_end.h
nitro/cp.h
nitro/mb
nitro/mb/mb_child.h
nitro/mb/mb_gameinfo.h
nitro/mb/mb.h
nitro/mb/mb_fake_child.h
nitro/wram_begin.h
nitro/rtc
nitro/rtc/common
nitro/rtc/common/type.h
nitro/rtc/common/fifo.h
nitro/rtc/ARM9
nitro/rtc/ARM9/api.h
nitro/rtc/ARM9/convert.h
nitro/rtc.h
nitro/spi.h
nitro/gx
nitro/gx/gx.h
nitro/gx/struct_2d.h
nitro/gx/g3c.h
nitro/gx/g3x.h
nitro/gx/g3.h
nitro/gx/gx_sp.h
nitro/gx/g2_oam.h
nitro/gx/gxcommon.h
nitro/gx/gx_vramcnt.h
nitro/gx/g2.h
nitro/gx/gx_load.h
nitro/gx/g3imm.h
nitro/gx/g3_util.h
nitro/gx/gx_capture.h
nitro/gx/g3b.h
nitro/gx/gx_bgcnt.h
nitro/prc
nitro/prc/resample.h
nitro/prc/types.h
nitro/prc/algo_superfine.h
nitro/prc/algo_common.h
nitro/prc/common.h
nitro/prc/algo_standard.h
nitro/prc/algo_light.h
nitro/prc/algo_fine.h
nitro/math.h
nitro/snd
nitro/snd/common
nitro/snd/common/main.h
nitro/snd/common/capture.h
nitro/snd/common/channel.h
nitro/snd/common/seq.h
nitro/snd/common/alarm.h
nitro/snd/common/midiplayer.h
nitro/snd/common/work.h
nitro/snd/common/data.h
nitro/snd/common/global.h
nitro/snd/common/mml.h
nitro/snd/common/exchannel.h
nitro/snd/common/util.h
nitro/snd/common/command.h
nitro/snd/common/bank.h
nitro/snd/ARM9
nitro/snd/ARM9/interface.h
nitro/os
nitro/os/common
nitro/os/common/callTrace.h
nitro/os/common/spinLock.h
nitro/os/common/profile.h
nitro/os/common/alarm.h
nitro/os/common/tick.h
nitro/os/common/valarm.h
nitro/os/common/context.h
nitro/os/common/message.h
nitro/os/common/ownerInfo.h
nitro/os/common/entropy.h
nitro/os/common/emulator.h
nitro/os/common/systemCall.h
nitro/os/common/timer.h
nitro/os/common/thread.h
nitro/os/common/printf.h
nitro/os/common/interrupt.h
nitro/os/common/system.h
nitro/os/common/mutex.h
nitro/os/common/init.h
nitro/os/common/exception.h
nitro/os/common/arena.h
nitro/os/common/reset.h
nitro/os/common/alloc.h
nitro/os/common/functionCost.h
nitro/os/ARM9
nitro/os/ARM9/argument.h
nitro/os/ARM9/protectionUnit.h
nitro/os/ARM9/vramExclusive.h
nitro/os/ARM9/cache.h
nitro/os/ARM9/protectionRegion.h
nitro/os/ARM9/china.h
nitro/os/ARM9/tcm.h
nitro/dgt
nitro/dgt/dgt.h
nitro/dgt/common.h
nitro/cp
nitro/cp/sqrt.h
nitro/cp/context.h
nitro/cp/divider.h
nitro/os_sp.h
nitro/ext.h
nitro/snd_sp.h
nitro/fs
nitro/fs/archive.h
nitro/fs/file.h
nitro/fs/overlay.h
nitro/mb.h
nitro/wm.h
nitro/ctrdg
nitro/ctrdg/common
nitro/ctrdg/common/ctrdg_common.h
nitro/sinit.h
nitro/fs.h
nitro/code16.h
nitro/std.h

---
# Documentation (/docs)
Contents:
* README
* SDKHowTo
* SDKRules
* SDKTools
* TechnicalNotes

## SDK How Tos (/docs/SDKHowTo)
* SDKHowTo/HowToMakeMyVRamBankType.txt
* SDKHowTo/HowToBuildSDKTree.pdf
* SDKHowTo/HowToJoinAGBDevEnv.txt

## SDK Rules (/docs/SDKRules)
* SDKRules/Rule-Defines.html
* SDKRules/NitroSDKStandard.css
* SDKRules/Rule-NameSpace.html

## READMEs (/docs/README)
* README/ReleaseNotes-3.0.pdf
* README/history/ReleaseNotes-2.2.pdf
* README/history/ReleaseNotes-2.0.pdf
* README/history/ReleaseNotes-2.1.pdf
* README/history/ReleaseNotes-031212.pdf
* README/history/ReleaseNotes-1.2.pdf
* README/history/ReleaseNotes-031203.pdf
* README/history/ReleaseNotes-1.0.pdf
* README/history/ReleaseNotes-040120.pdf
* README/QuickStartForSDK.pdf


## Technical Notes (/docs/TechnicalNotes)
* TechnicalNotes/AboutWirelessManager.pdf
* TechnicalNotes/AboutSound.pdf
* TechnicalNotes/AboutPatternRecognition.pdf
* TechnicalNotes/NitroRomFormat.pdf
* TechnicalNotes/AboutFileSystem.pdf
* TechnicalNotes/WmTutorial.pdf
* TechnicalNotes/AboutMultiBoot.pdf
* TechnicalNotes/AboutThreadInfo.pdf
* TechnicalNotes/AboutComponents.pdf
* TechnicalNotes/MechanismOfProfiler.pdf
* SDKTools
* SDKTools/CygwinPackageList.pdf

---
# Components (/components)
Contents:
* ichneumon
* mongoose
* racoon (DSi)
* ferret (DSi)

---
# Static Libraries (/lib)
the table below lists all the Static Libraries that a Nintendo DS game can link to to provide useful functionality. There are normally two versions of a static Library, one compiled with the standard toolchain and another compiled for Thumb.

Name | Thumb | Description
---|---|---
libsyscall.a | N/A |
crt0.o | N/A |
libcard.a | libcard.thumb.a | 
libcht.a | libcht.thumb.a | 
libcp.a | libcp.thumb.a | 
libctrdg.a | libctrdg.thumb.a | 
libdgt.a | libdgt.thumb.a | 
libe3s.a | libe3s.thumb.a | 
libenv.a | libenv.thumb.a | 
libext.a | libext.thumb.a | 
libfs.a | libfs.thumb.a | 
libfx.a | libfx.thumb.a | 
libgx.a | libgx.thumb.a | 
libmath.a | libmath.thumb.a | 
libmb.a | libmb.thumb.a | 
libmi.a | libmi.thumb.a | 
libos.CALLTRACE.a | libos.CALLTRACE.thumb.a | 
libos.FUNCTIONCOST.a | ibos.FUNCTIONCOST.thumb.a | 
libos.a | libos.thumb.a | 
libos_TS0.a | libos_TS0.thumb.a | 
libos_TS100.a | libos_TS100.thumb.a | 
libos_TS200.a | libos_TS200.thumb.a | 
libprc.a | libprc.thumb.a | 
libpxi.a | libpxi.thumb.a | 
librtc.a | librtc.thumb.a | 
libsnd.a | libsnd.thumb.a | 
libspi.a | libspi.thumb.a | 
libspi_TS0.a | libspi_TS0.thumb.a | 
libspi_TS100.a | libspi_TS100.thumb.a | 
libspi_TS200.a | libspi_TS200.thumb.a | 
libstd.a | libstd.thumb.a | 
libstubscw.a | libstubscw.thumb.a | 
libstubsisd.a | libstubsisd.thumb.a | 
libutest.a | libutest.thumb.a | 
libwbt.a | libwbt.thumb.a | 
libwfs.a | libwfs.thumb.a | 
libwm.a | libwm.thumb.a | 
libwvr.a | libwvr.thumb.a | 

---
# Source Code (/build)
Contents:
* Makefile
* buildsetup
* buildtools
* demos
* libraries
* tools

---

# Data (/data)
Contents:
* cht_data
* for_china
* wl_icons
