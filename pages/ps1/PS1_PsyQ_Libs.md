---
layout: post
tags: 
- ps1
- sdk
- symbols
title: Official Sony PS1 Libraries 
thumbnail: /public/consoles/Sony Playstation.png
image: /public/psyqlibs.png
permalink: /ps1-libs
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: Official Sony PS1 Libraries
    url: #
recommend: ps1
editlink: /ps1/PS1_PsyQ_Libs.md
---

Note that the order of the externals defined in this list will not reflect the order in the final linked executable, as the order here is just the order that the `PSYLIB.EXE` tool exports in. 

# LIBAPI - PS1 OS Kernel API
The `LIBAPI.LIB` file is required in all PS1 executables as it controls the Playstation Kernel and interactions between the basic Playsation Operating System.

Module  |   Date    | Externals defined
--- | --- | ---
C57      | 23-07-99 | InitHeap 
C58      | 23-07-99 | _exit 
C65      | 23-07-99 | LoadTest 
C66      | 23-07-99 | Load 
C67      | 23-07-99 | Exec 
C68      | 23-07-99 | FlushCache 
C73      | 23-07-99 | GPU_cw 
C81      | 23-07-99 | LoadExec 
C82      | 23-07-99 | GetSysSp 
C112     | 23-07-99 | _bu_init 
C113     | 23-07-99 | _96_init 
C114     | 23-07-99 | _96_remove 
C157     | 23-07-99 | GetConf 
C159     | 23-07-99 | SetMem 
C160     | 23-07-99 | _boot 
C161     | 23-07-99 | SystemError 
C167     | 23-07-99 | bufs_cb_0 
C168     | 23-07-99 | bufs_cb_1 
C169     | 23-07-99 | bufs_cb_2 
C170     | 23-07-99 | bufs_cb_3 
C174     | 23-07-99 | bufs_cb_4 
A07      | 23-07-99 | DeliverEvent 
A08      | 23-07-99 | OpenEvent 
A09      | 23-07-99 | CloseEvent 
A10      | 23-07-99 | WaitEvent 
A11      | 23-07-99 | TestEvent 
A12      | 23-07-99 | EnableEvent 
A13      | 23-07-99 | DisableEvent 
A14      | 23-07-99 | OpenTh 
A15      | 23-07-99 | CloseTh 
A16      | 23-07-99 | ChangeTh 
A18      | 23-07-99 | InitPAD2 
A19      | 23-07-99 | StartPAD2 
A20      | 23-07-99 | StopPAD2 
A21      | 23-07-99 | PAD_init2 
A22      | 23-07-99 | PAD_dr 
A23      | 23-07-99 | ReturnFromException 
A24      | 23-07-99 | ResetEntryInt 
A25      | 23-07-99 | HookEntryInt 
A32      | 23-07-99 | UnDeliverEvent 
A36      | 23-07-99 | EnterCriticalSection 
A37      | 23-07-99 | ExitCriticalSection 
A38      | 23-07-99 | Exception 
A39      | 23-07-99 | SetSp 
A40      | 23-07-99 | SwEnterCriticalSection 
A41      | 23-07-99 | SwExitCriticalSection 
A50      | 23-07-99 | open 
A51      | 23-07-99 | lseek 
A52      | 23-07-99 | read 
A53      | 23-07-99 | write 
A54      | 23-07-99 | close 
A55      | 23-07-99 | ioctl 
A64      | 23-07-99 | cd 
A65      | 23-07-99 | format 
A66      | 23-07-99 | firstfile2 
A67      | 23-07-99 | nextfile 
A68      | 23-07-99 | rename 
A69      | 23-07-99 | erase 
A70      | 23-07-99 | undelete 
A71      | 23-07-99 | AddDrv 
A72      | 23-07-99 | DelDrv 
A81      | 23-07-99 | Krom2RawAdd 
A84      | 23-07-99 | _get_errno 
A85      | 23-07-99 | _get_error 
A91      | 23-07-99 | ChangeClearPAD 
A94      | 23-07-99 | GetGp 
A95      | 23-07-99 | GetSp 
A96      | 23-07-99 | GetCr 
A97      | 23-07-99 | GetSr 
L02      | 23-07-99 | SysEnqIntRP 
L03      | 23-07-99 | SysDeqIntRP 
L10      | 23-07-99 | ChangeClearRCnt 
COUNTER  | 23-07-99 | SetRCnt GetRCnt StartRCnt StopRCnt ResetRCnt 
SC2B     | 23-07-99 | SetConf 
PATCH    | 23-07-99 | _patch_pad EnablePAD DisablePAD 
FIRST    | 23-07-99 | firstfile 
PAD      | 23-07-99 | SetInitPadFlag ReadInitPadFlag PAD_init InitPAD StartPAD *_apiPadPatch 
PADSTOP  | 23-07-99 | StopPAD 
I_HEAP2  | 23-07-99 | InitHeap2 *_AllocRestBlockTop *_TopAllocArea *_max_heap *_Candidate 
MALLOC2  | 23-07-99 | malloc2 
FREE2    | 23-07-99 | free2 
REALLOC2 | 23-07-99 | realloc2 
CALLOC2  | 23-07-99 | calloc2 
CHCLRPAD | 23-07-99 | _remove_ChgclrPAD 
I_HEAP3  | 23-07-99 | _freep InitHeap3 
MALLOC3  | 23-07-99 | malloc3 
FREE3    | 23-07-99 | free3 *_r_bp *_r_p *_r_freep 
REALLOC3 | 23-07-99 | realloc3 
CALLOC3  | 23-07-99 | calloc3 

# LIBC - Standard GCC C Library
The standard C library used for functions like printf that are compiled in almost every C-based program.

Module  |  Externals defined
--- | ---
A56      | exit 
A58      | getc 
A59      | putc 
A60      | getchar 
A61      | putchar 
A62      | gets 
A63      | puts 
C10      | todigit 
C12      | strtoul 
C13      | strtol 
C14      | abs 
C15      | labs 
C16      | atoi 
C17      | atol 
C18      | atob 
C19      | setjmp 
C20      | longjmp 
C21      | strcat 
C22      | strncat 
C23      | strcmp 
C24      | strncmp 
C25      | strcpy 
C26      | strncpy 
C27      | strlen 
C28      | index 
C29      | rindex 
C30      | strchr 
C31      | strrchr 
C32      | strpbrk 
C33      | strspn 
C34      | strcspn 
C36      | strstr 
C37      | toupper 
C38      | tolower 
C39      | bcopy 
C40      | bzero 
C42      | memcpy 
C43      | memset 
C46      | memchr 
C47      | rand 
C48      | srand 
C51      | malloc 
C52      | free 
C53      | lsearch 
C55      | calloc 
C56      | realloc 
C63      | printf 
CTYPE0   | _ctype_ 
SPRINTF  | sprintf 
ITOA     | itoa 
MEMMOVE  | memmove 
BCMP     | bcmp 
MEMCMP   | memcmp 
STRTOK   | strtok 
QSORT    | qsort 
BSEARCH  | bsearch 

# LIBC2 - Standard C library
A faster (cacheable) implementation of the C standard libraries but required more memory than standard LIBC.

Module |  Date | Externals defined
--- | --- | ---
BCMP     | 23-07-99 | bcmp 
BCOPY    | 23-07-99 | bcopy 
BZERO    | 23-07-99 | bzero 
GETC     | 23-07-99 | getc 
GETCHAR  | 23-07-99 | getchar 
GETS     | 23-07-99 | gets 
MEMCHR   | 23-07-99 | memchr 
MEMCMP   | 23-07-99 | memcmp 
MEMCPY   | 23-07-99 | memcpy 
MEMMOVE  | 23-07-99 | memmove 
MEMSET   | 23-07-99 | memset 
PUTC     | 23-07-99 | putc 
PUTCHAR  | 23-07-99 | _putchar _putchar_flash putchar 
QSORT    | 23-07-99 | qsort 
RAND     | 23-07-99 | rand srand 
STRCAT   | 23-07-99 | strcat 
STRCHR   | 23-07-99 | strchr 
STRCMP   | 23-07-99 | strcmp 
STRCPY   | 23-07-99 | strcpy 
STRCSPN  | 23-07-99 | strcspn 
STRINGS  | 23-07-99 | index rindex 
STRLEN   | 23-07-99 | strlen 
STRNCAT  | 23-07-99 | strncat 
STRNCMP  | 23-07-99 | strncmp 
STRNCPY  | 23-07-99 | strncpy 
STRPBRK  | 23-07-99 | strpbrk 
STRRCHR  | 23-07-99 | strrchr 
STRSPN   | 23-07-99 | strspn 
STRSTR   | 23-07-99 | strstr 
STRTOK   | 23-07-99 | strtok 
STRTOUL  | 23-07-99 | strtoul 
TODIGIT  | 23-07-99 | todigit 
PRINTF   | 23-07-99 | printf 
PRNT     | 23-07-99 | prnt 
SPRINTF  | 23-07-99 | sprintf 
ITOA     | 23-07-99 | itoa 
PUTS     | 23-07-99 | puts 
BSEARCH  | 23-07-99 | bsearch 
LSEARCH  | 23-07-99 | lsearch 
SETJMP   | 23-07-99 | setjmp longjmp 
EXIT     | 23-07-99 | exit 
MALLOC   | 23-07-99 | malloc free calloc realloc 
ABS_0    | 23-07-99 | abs 
ABS_1    | 23-07-99 | labs 
ATOI_0   | 23-07-99 | atoi 
ATOI_1   | 23-07-99 | atol 
CTYPE_0  | 23-07-99 | _ctype_ 
CTYPE_1  | 23-07-99 | toupper 
CTYPE_2  | 23-07-99 | tolower 
STRTOL_0 | 23-07-99 | strtol 
STRTOL_1 | 23-07-99 | atob 

# LIBCARD
LIBCARD.LIB is the library for communicating with the memory cards.

Module   |  Date  | Externals defined
--- | --- | ---
C112     | 23-07-99 | _bu_init 
C171     | 23-07-99 | _card_info 
C172     | 23-07-99 | _card_load 
C173     | 23-07-99 | _card_auto 
A74      | 23-07-99 | InitCARD2 
A75      | 23-07-99 | StartCARD2 
A76      | 23-07-99 | StopCARD2 
A78      | 23-07-99 | _card_write 
A79      | 23-07-99 | _card_read 
A80      | 23-07-99 | _new_card 
A88      | 23-07-99 | _card_chan 
A92      | 23-07-99 | _card_status 
A93      | 23-07-99 | _card_wait 
CARD     | 23-07-99 | _card_clear 
PATCH    | 23-07-99 | _patch_card _patch_card2 _copy_memcard_patch _patch_card_info 
INIT     | 23-07-99 | InitCARD StartCARD StopCARD 
END      | 23-07-99 | _ExitCard 
FORMAT   | 23-07-99 | _card_format

# LIBCD (Basic CD-ROM & Streaming)
`LIBCD.LIB` is required for any games that need to access data from the CD drive.
From the official documentation:
```
The CD/Streaming Library (libcd) consists of two separate libraries:
• The CD-ROM Library, which provides functions for controlling the PlayStation built-in CD-ROM drive. It provides CD sound control and other services.
• The Streaming Library, which is a group of functions for continuous reading of realtime data such as movies, sounds or vertex data stored on high-capacity media.
```

Module |  Date  | Externals defined
--- | --- | ---
CDROM    | 23-07-99 | StSetRing *StRingAddr *StRingSize *StRingBase *StRgb24 *StEmu_Addr *StEmu_Idx *StRingIdx1 *StRingIdx2 *StRingIdx3 *StSTART_FLAG *StStartFrame *StEndFrame *StFinalSector *Stframe_no *Stsector_offset *StCdIntrFlag *StCHANNEL *CChannel 
TOC      | 23-07-99 | CdGetToc CdGetToc2 
EVENT    | 23-07-99 | CD_cbread CD_read_dma_mode CdInit 
SYS      | 23-07-99 | CdPosToInt 
ISO9660  | 23-07-99 | CdSearchFile 
CDREAD2  | 23-07-99 | CdRead2 
CDPLAY   | 23-07-99 | CdPlay 
C_002    | 23-07-99 | StClearRing 
C_003    | 23-07-99 | StUnSetRing 
C_004    | 23-07-99 | data_ready_callback StGetBackloc 
C_005    | 23-07-99 | StSetStream *StFunc1 *StFunc2 
C_006    | 23-07-99 | StSetEmulate 
C_007    | 23-07-99 | StFreeRing 
C_008    | 23-07-99 | init_ring_status 
C_009    | 23-07-99 | StGetNext 
C_010    | 23-07-99 | StSetMask 
C_011    | 23-07-99 | debug_cause StCdInterrupt 
C_012    | 23-07-99 | StSetChannel 
C_013    | 23-07-99 | StGetNextS 
C_014    | 23-07-99 | StNextStatus 
BIOS_1   | 23-07-99 | CD_cbsync CD_cbready CD_debug CD_status CD_status1 CD_nopen CD_pos CD_mode CD_com DS_active CD_comstr CD_intstr CD_sync CD_flush CD_ready CD_cw CD_vol CD_initvol CD_initintr CD_init CD_datasync CD_set_test_parmnum *StMode 
BIOS_2   | 23-07-99 | CD_getsector 
BIOS_3   | 23-07-99 | CD_getsector2 
C_015    | 23-07-99 | StRingStatus 
S_002    | 23-07-99 | CdIntToPos 
S_003    | 23-07-99 | CdStatus 
S_004    | 23-07-99 | CdMode 
S_005    | 23-07-99 | CdLastCom 
S_006    | 23-07-99 | CdLastPos 
S_007    | 23-07-99 | CdReset 
S_008    | 23-07-99 | CdFlush 
S_009    | 23-07-99 | CdSetDebug 
S_010    | 23-07-99 | CdComstr 
S_011    | 23-07-99 | CdIntstr 
S_012    | 23-07-99 | CdSync 
S_013    | 23-07-99 | CdReady 
S_014    | 23-07-99 | CdSyncCallback 
S_015    | 23-07-99 | CdReadyCallback 
S_016    | 23-07-99 | CdControl CdControlF CdControlB 
S_020    | 23-07-99 | CdMix 
S_021    | 23-07-99 | CdGetSector 
S_022    | 23-07-99 | CdGetSector2 
S_023    | 23-07-99 | CdDataCallback 
S_024    | 23-07-99 | CdDataSync 
CDR_1    | 23-07-99 | CdReadBreak CdRead CdReadSync 
CDR_2    | 23-07-99 | CdReadCallback 
CDR_3    | 23-07-99 | CdReadMode 
TYPE_1   | 23-07-99 | CdDiskReady 
TYPE_2   | 23-07-99 | CdGetDiskType 
CRE_1    | 23-07-99 | CdReadFile 
CRE_2    | 23-07-99 | CdReadExec 

# LIBCOMB (Link Cable Library)
The Link Cable Library (`libcomb.lib`) provides functions for connecting PlayStatios's together via a “link” cable.

Module  |   Date  |  Externals defined
--- | --- | ---
COMB     | 23-07-99 | AddCOMB _comb_control 
COMB_2   | 23-07-99 | DelCOMB 
COMB_3   | 23-07-99 | ChangeClearSIO 

# LIBDS (Extended CD-ROM)
The extended CD-ROM library is basically the same as libcd but it implements a `command queue` to allow for speed differences between cpu and cdrom. You can't use both libds and libcd at the same time!

Module  |   Date  |  Externals defined
--- | --- | ---
DSSYS_1  | 23-07-99 | DS_init DS_reset_members DS_close DS_cw DS_vsync_callback DS_sync_callback DS_ready_callback DS_start_callback DS_system_status DS_lastcom DS_lastmode DS_lastpos DS_lastseek DS_lastread DS_status DS_shell_open DS_cw_system parcpy rescpy DS_stop DS_restart DS_system_active 
DSSYS_2  | 23-07-99 | DS_CQ_flush DsInit DsReset DsCommand DsPacket _DsPacket2 DsSync DsReady DsQueueLen 
DSSYS_3  | 23-07-99 | DsMix 
DSSYS_4  | 23-07-99 | DsControlF 
DSSYS_5  | 23-07-99 | DS_comstr DsComstr 
DSTOC    | 23-07-99 | DsGetToc 
DSREAD   | 23-07-99 | DsRead DsReadSync DsReadCallback DsReadBreak DsReadMode 
DSREAD2  | 23-07-99 | DsRead2 
DSREADE  | 23-07-99 | DsReadFile 
DSFILE   | 23-07-99 | DsSearchFile 
DSPLAY   | 23-07-99 | DsPlay 
DSREADY  | 23-07-99 | DsStartReadySystem DsEndReadySystem DsReadySystemMode ER_active ER_clear 
DSTYPE   | 23-07-99 | DsGetDiskType *GD_retry *GD_disk_kind 
DSCB     | 23-07-99 | *GlobalCallback 
D1_001   | 23-07-99 | DS_sync 
D1_002   | 23-07-99 | DS_ready 
D2_001   | 23-07-99 | DsClose 
D2_002   | 23-07-99 | DsStatus 
D2_003   | 23-07-99 | DsShellOpen 
D2_004   | 23-07-99 | DsLastCom 
D2_005   | 23-07-99 | DsFlush 
D2_006   | 23-07-99 | DsSystemStatus 
D3_002   | 23-07-99 | DsGetSector 
D3_003   | 23-07-99 | DsGetSector2 
D3_004   | 23-07-99 | DsDataSync 
D3_005   | 23-07-99 | DsIntToPos 
D3_006   | 23-07-99 | DsPosToInt 
D3_007   | 23-07-99 | DsSetDebug 
D3_008   | 23-07-99 | DsLastPos 
D4_002   | 23-07-99 | DsControl 
D4_003   | 23-07-99 | DsControlB 
D5_001   | 23-07-99 | DS_intstr DsIntstr 
DRE_2    | 23-07-99 | DsReadExec 
DSCB_1   | 23-07-99 | DsSyncCallback 
DSCB_2   | 23-07-99 | DsReadyCallback 
DSCB_3   | 23-07-99 | DsStartCallback 
DSCB_4   | 23-07-99 | DsDataCallback 

# LIBETC (Callbacks management Library)
The ETC library (`libetc.lib`) is mainly used for callbacks and is needed for a variety of other libraries such as graphics and sound as well as controllers. It main function is to control `callbacks`.

From the official documentation:
```
Many functions such as graphics drawing, transferring data to the sound buffer, and loading data from the CD-ROM, may execute in parallel (asynchronously) in the background. These functions are called non- blocking functions, because they don’t block the CPU from performing other tasks.

You can define callback functions that execute when the non-blocking function actually terminates. What actually happens is that when the non-blocking function completes, it generates an interrupt and the program jumps to the address registered as the callback. When the callback returns, the program returns to the point where the callback began, and normal processing resumes.

A dedicated local stack is used for a callback function so that control can return to the original state after the callback returns. All interrupts are prohibited within callback functions. (Areas in which interrupts are prohibited are called critical sections.)
```

Module  |   Date  |  Externals defined
--- | --- | ---
PAD      | 23-07-99 | PadInit *PadIdentifier PadRead 
PADSTOP  | 23-07-99 | PadStop 
VSYNC    | 23-07-99 | Hcount VSync 
INTR     | 23-07-99 | ResetCallback InterruptCallback DMACallback VSyncCallback VSyncCallbacks StopCallback RestartCallback CheckCallback GetIntrMask SetIntrMask 
INTR_VB  | 23-07-99 | Vcount startIntrVSync 
INTR_DMA | 23-07-99 | startIntrDMA 
VMODE    | 23-07-99 | SetVideoMode GetVideoMode 
HWCONFIG | 23-07-99 | get_hwconfig 

# LIBGPU (Basic Graphics Library)
LibGPU is a library for utilizing the Graphics Processing Unit (GPU) and frame buffer, it works using Primitives similar to OpenGL, triangles, sprites etc.

The frame buffer is a 1mb memory chip that stores all the values of the pixels to display to the TV screen.

Module  |   Date  |  Externals defined
--- | --- | ---
FONT     | 23-07-99 | Font SetDumpFnt FntPrint FntLoad FntOpen FntFlush 
FONTTEX  | 23-07-99 | 
KPRINTF  | 23-07-99 | kanjiclut *txyuv KanjiFntOpen *KanjiFont KanjiFntClose KanjiFntFlush KanjiFntPrint 
OTAG     | 23-07-99 | DrawOTagIO DumpOTag CheckPrim 
SYS      | 23-07-99 | GPU_printf GEnv ResetGraph SetGraphDebug SetGraphQueue GetGraphDebug DrawSyncCallback SetDispMask DrawSync ClearImage ClearImage2 LoadImage StoreImage MoveImage ClearOTag ClearOTagR DrawPrim DrawOTag PutDrawEnv DrawOTagEnv GetDrawEnv PutDispEnv GetDispEnv GetODE SetDrawArea SetDrawOffset SetDrawEnv _qin _qout *_que LoadImage2 _GPU_ResetCallback StoreImage2 MoveImage2 DrawOTag2 
BREAK    | 23-07-99 | BreakDraw IsIdleGPU ContinueDraw 
PARAM    | 23-07-99 | GetDrawEnv2 GetDrawMode GetTexWindow GetDrawArea GetDrawOffset 
E00      | 23-07-99 | LoadTPage 
E01      | 23-07-99 | LoadClut 
E02      | 23-07-99 | LoadClut2 
E03      | 23-07-99 | SetDefDrawEnv 
E04      | 23-07-99 | SetDefDispEnv 
P00      | 23-07-99 | GetTPage 
P01      | 23-07-99 | GetClut 
P02      | 23-07-99 | DumpTPage 
P03      | 23-07-99 | DumpClut 
P04      | 23-07-99 | NextPrim 
P05      | 23-07-99 | IsEndPrim 
P06      | 23-07-99 | AddPrim 
P07      | 23-07-99 | AddPrims 
P08      | 23-07-99 | CatPrim 
P09      | 23-07-99 | TermPrim 
P10      | 23-07-99 | SetSemiTrans 
P11      | 23-07-99 | SetShadeTex 
P12      | 23-07-99 | SetPolyF3 
P13      | 23-07-99 | SetPolyFT3 
P14      | 23-07-99 | SetPolyG3 
P15      | 23-07-99 | SetPolyGT3 
P16      | 23-07-99 | SetPolyF4 
P17      | 23-07-99 | SetPolyFT4 
P18      | 23-07-99 | SetPolyG4 
P19      | 23-07-99 | SetPolyGT4 
P20      | 23-07-99 | SetSprt8 
P21      | 23-07-99 | SetSprt16 
P22      | 23-07-99 | SetSprt 
P23      | 23-07-99 | SetTile1 
P24      | 23-07-99 | SetTile8 
P25      | 23-07-99 | SetTile16 
P26      | 23-07-99 | SetTile 
P27      | 23-07-99 | SetLineF2 
P28      | 23-07-99 | SetLineG2 
P29      | 23-07-99 | SetLineF3 
P30      | 23-07-99 | SetLineG3 
P31      | 23-07-99 | SetLineF4 
P32      | 23-07-99 | SetLineG4 
P33      | 23-07-99 | SetDrawTPage 
P34      | 23-07-99 | SetDrawMove 
P35      | 23-07-99 | SetDrawLoad 
P36      | 23-07-99 | MargePrim 
P37      | 23-07-99 | DumpDrawEnv DumpDispEnv 
P38      | 23-07-99 | SetTexWindow 
P39      | 23-07-99 | SetPriority 
P40      | 23-07-99 | SetDrawStp 
P41      | 23-07-99 | SetDrawMode 
K00      | 23-07-99 | GetTimSize 
K01      | 23-07-99 | Krom2Tim 
T00      | 23-07-99 | OpenTIM ReadTIM 
T01      | 23-07-99 | OpenTMD ReadTMD 
KT00     | 23-07-99 | Krom2RawAdd2 
KT01     | 23-07-99 | kanjitrans 
KT02     | 23-07-99 | hankanjitrans 

# LIBGS (Extended Graphics Library)
The extended graphics library `LIBGS.LIB` builds on top of `LIBGPU` and `LIBGTE` and provides functions to display TIM images and TMD model files.

From the official docs:
```
The extended graphics library (libgs) integrates the 2D and 3D graphics systems used in libgpu and libgte. It is designed to work well with the standard graphics file formats that can be created by PlayStation authoring tools:
• The TIM format stores image resolution, color numbers and color look-up table information.
• The TMD format stores multiple objects, scale information and texture address information.
• HMD is a new format that was added in version 4.0 of the libraries. See Chapter 18, “HMD Library”, for more information about this format.
In contrast with the libgpu and libgte libraries which process polygon-level data, libgs processes data by object units (groups of polygons), allowing 3D programs to be prototyped easily. By adding attributes to objects, it’s easy to create special effects.
Using libgs involves extra overhead compared to using libgpu and libgte. However, libgs is an open architecture. Therefore, once you are ready to produce your game, you can optimize it by adding user- defined functions (via a jump table) that use libgpu and libgte services.
```

Module  |   Date  |  Externals defined
--- | --- | ---
2D_BG0   | 23-07-99 | GsSortBg 
2D_BG1   | 23-07-99 | GsSortFastBg 
2D_BG21  | 23-07-99 | GsSortFixBg16 
2D_BG22  | 23-07-99 | GsInitFixBg16 
2D_BG31  | 23-07-99 | GsSortFixBg32 
2D_BG32  | 23-07-99 | GsInitFixBg32 
2D_COM0  | 23-07-99 | _mk_spr_packet _mk_xpndsp _mk_normsp 
2D_COM1  | 23-07-99 | _make_packet 
2D_LIN0  | 23-07-99 | GsSortLine 
2D_LIN1  | 23-07-99 | GsSortGLine 
2D_BOX0  | 23-07-99 | GsSortBoxFill 
2D_PRIM  | 23-07-99 | GsSortPoly 
2D_SP0   | 23-07-99 | GsSortSprite 
2D_SP1   | 23-07-99 | GsSortFastSprite 
2D_SP2   | 23-07-99 | GsSortFlipSprite 
2D_SP41  | 23-07-99 | GsSortFastSprite2 
2D_SP42  | 23-07-99 | GsInitFastSprite2 
2D_SP43  | 23-07-99 | GsSortFastSpriteArray 
2D_SP44  | 23-07-99 | GsInitFastSpriteArray 
2D_SP45  | 23-07-99 | GsSetFastSpriteArray 
2D_SP0A  | 23-07-99 | GsSortSpriteA 
2D_SP1A  | 23-07-99 | GsSortFastSpriteA 
2D_SP0B  | 23-07-99 | GsSortSpriteB 
2D_SP1B  | 23-07-99 | GsSortFastSpriteB 
GS_001   | 23-07-99 | GsInitGraph *PSDIDX *GsDRAWENV *GsDISPENV *PSDGPU GsInitGraph2 *PSDBASEX *PSDBASEY *POSITION *CLIP2 *PSDCNT GsSortClear *PSDOFSX *PSDOFSY *GsORGOFSX *GsORGOFSY 
GS_0021  | 23-07-99 | GsGetActiveBuff 
GS_0022  | 23-07-99 | GsSetDrawBuffOffset 
GS_003   | 23-07-99 | GsSetDrawBuffClip 
GS_004   | 23-07-99 | GsSetOffset 
GS_005   | 23-07-99 | GsSetClip 
GS_006   | 23-07-99 | GsSetClip2D 
GS_007   | 23-07-99 | GsInitVcount 
GS_008   | 23-07-99 | GsGetVcount 
GS_009   | 23-07-99 | GsClearVcount 
GS_010   | 23-07-99 | GsSwapDispBuff 
GS_011   | 23-07-99 | GsClearDispArea 
GS_012   | 23-07-99 | GsSetClip2 
GS_013   | 23-07-99 | GsSetOrign 
MATRIX1  | 23-07-99 | *DSTACK 
MATRIX2  | 23-07-99 | GsInitCoordinate2 
MATRIX3  | 23-07-99 | GsInitCoord2param 
MATRIX4  | 23-07-99 | GsSetLsMatrix 
MATRIX5  | 23-07-99 | GsSetLightMatrix 
MATRIX6  | 23-07-99 | GsSetLightMatrix2 
MATRIX7  | 23-07-99 | GsMulCoord0 
MATRIX8  | 23-07-99 | GsMulCoord2 
MATRIX9  | 23-07-99 | GsMulCoord3 
MATRIX10 | 23-07-99 | print_matrix 
MATRIX11 | 23-07-99 | print_vector 
GS_101   | 23-07-99 | GsSetNearClip 
GS_102   | 23-07-99 | GsSetFarClip 
GS_103   | 23-07-99 | GsDefDispBuff 
GS_104   | 23-07-99 | GsInit3D *HWD0 *VWD0 *GsCLIP3near *GsLIGHT_MODE *GsCLIP3far 
GS_105   | 23-07-99 | GsMapModelingData 
GS_106   | 23-07-99 | GsSetProjection 
GS_107   | 23-07-99 | GsSetFlatLight *GsLIGHTWSMATRIX *_LC 
GS_108   | 23-07-99 | GsSetLightMode 
GS_109   | 23-07-99 | GsSetFogParam 
GS_110   | 23-07-99 | GsSetAmbient 
GS_111   | 23-07-99 | GsDrawOt 
GS_112   | 23-07-99 | GsDrawOtIO 
GS_113   | 23-07-99 | GsClearOt 
GS_114   | 23-07-99 | GsSortOt 
GS_1151  | 23-07-99 | gte_apply_matrixl 
GS_1152  | 23-07-99 | gte_apply_matrixll 
GS_116   | 23-07-99 | gte_copy_matrix 
GS_117   | 23-07-99 | gte_rotate_x_matrix 
GS_118   | 23-07-99 | gte_rotate_y_matrix 
GS_119   | 23-07-99 | gte_rotate_z_matrix 
GS_120   | 23-07-99 | gte_scale_matrix 
GS_121   | 23-07-99 | gte_init 
GS_122   | 23-07-99 | GsGetTimInfo 
GS_123   | 23-07-99 | Gssub_make_matrix *GsWSMATRIX *GsWSMATRIX_ORG 
GS_124   | 23-07-99 | GsSetWorkBase 
GS_125   | 23-07-99 | GsGetWorkBase 
GS_126   | 23-07-99 | GsCutOt 
GS_127   | 23-07-99 | GsDefDispBuff2 
GS_128   | 23-07-99 | *GsIDMATRIX *GsIDMATRIX2 
GS_131   | 23-07-99 | GsSetRefView2 
GS_132   | 23-07-99 | GsSetView2 
GS_133   | 23-07-99 | GsGetLw 
GS_134   | 23-07-99 | GsGetLs 
GS_135   | 23-07-99 | GsGetLws 
GS_136   | 23-07-99 | GsScaleScreen 
GS_137   | 23-07-99 | GsSetRefView2L 
PRESET_1 | 23-07-99 | GsLinkObject5 
PRESET_2 | 23-07-99 | GsPresetObject 
PRESET2  | 23-07-99 | GsSortObject5 
PRESET3  | 23-07-99 | GsSortObject5J *GsFCALL5 
PRESET4  | 23-07-99 | dmyGsPrstF3NL dmyGsPrstF3LFG dmyGsPrstF3L dmyGsPrstNF3 dmyGsTMDdivF3NL dmyGsTMDdivF3LFG dmyGsTMDdivF3L dmyGsTMDdivNF3 dmyGsPrstG3NL dmyGsPrstG3LFG dmyGsPrstG3L dmyGsPrstNG3 dmyGsTMDdivG3NL dmyGsTMDdivG3LFG dmyGsTMDdivG3L dmyGsTMDdivNG3 dmyGsPrstTF3NL dmyGsPrstTF3LFG dmyGsPrstTF3L dmyGsPrstTNF3 dmyGsTMDdivTF3NL dmyGsTMDdivTF3LFG dmyGsTMDdivTF3L dmyGsTMDdivTNF3 dmyGsPrstTG3NL dmyGsPrstTG3LFG dmyGsPrstTG3L dmyGsPrstTNG3 dmyGsTMDdivTG3NL dmyGsTMDdivTG3LFG dmyGsTMDdivTG3L dmyGsTMDdivTNG3 dmyGsPrstF4NL dmyGsPrstF4LFG dmyGsPrstF4L dmyGsPrstNF4 dmyGsTMDdivF4NL dmyGsTMDdivF4LFG dmyGsTMDdivF4L dmyGsTMDdivNF4 dmyGsPrstG4NL dmyGsPrstG4LFG dmyGsPrstG4L dmyGsPrstNG4 dmyGsTMDdivG4NL dmyGsTMDdivG4LFG dmyGsTMDdivG4L dmyGsTMDdivNG4 dmyGsPrstTF4NL dmyGsPrstTF4LFG dmyGsPrstTF4L dmyGsPrstTNF4 dmyGsTMDdivTF4NL dmyGsTMDdivTF4LFG dmyGsTMDdivTF4L dmyGsTMDdivTNF4 dmyGsPrstTG4NL dmyGsPrstTG4LFG dmyGsPrstTG4L dmyGsPrstTNG4 dmyGsTMDdivTG4NL dmyGsTMDdivTG4LFG dmyGsTMDdivTG4L dmyGsTMDdivTNG4 dmyGsTMDfastF3NL dmyGsTMDfastF3LFG dmyGsTMDfastF3L dmyGsTMDfastNF3 dmyGsTMDfastG3NL dmyGsTMDfastG3LFG dmyGsTMDfastG3L dmyGsTMDfastNG3 dmyGsTMDfastTF3NL dmyGsTMDfastTF3LFG dmyGsTMDfastTF3L dmyGsTMDfastTNF3 dmyGsTMDfastTG3NL dmyGsTMDfastTG3LFG dmyGsTMDfastTG3L dmyGsTMDfastTNG3 dmyGsTMDfastF4NL dmyGsTMDfastF4LFG dmyGsTMDfastF4L dmyGsTMDfastNF4 dmyGsTMDfastG4NL dmyGsTMDfastG4LFG dmyGsTMDfastG4L dmyGsTMDfastNG4 dmyGsTMDfastTF4NL dmyGsTMDfastTF4LFG dmyGsTMDfastTF4L dmyGsTMDfastTNF4 dmyGsTMDfastTG4NL dmyGsTMDfastTG4LFG dmyGsTMDfastTG4L dmyGsTMDfastTNG4 dmyGsTMDfastF3GL dmyGsTMDfastF3GLFG dmyGsTMDfastF3GNL dmyGsTMDfastG3GL dmyGsTMDfastG3GLFG dmyGsTMDfastG3GNL dmyGsPrstF3GL dmyGsPrstF3GLFG dmyGsPrstF3GNL dmyGsPrstG3GL dmyGsPrstG3GLFG dmyGsPrstG3GNL 
GLOBAL   | 23-07-99 | GsADIVZ GsADIVW GsADIVH *GsOUT_PACKET_P *GsMATE_C *GsLMODE *GsLIGNR *GsLIOFF *GsZOVER *GsBACKC *GsNDIV *GsTRATE *GsTON *GsDISPON 
PMD1     | 23-07-99 | GsLinkObject3 
PMD2     | 23-07-99 | GsSortObject3 
OBJT     | 23-07-99 | GsLinkObject4 
OBJT2    | 23-07-99 | GsSortObject4 
OBJT3    | 23-07-99 | GsSortObject4J *GsFCALL4 
DATG4_00 | 23-07-99 | GsA4divTG4L 
DATG4_01 | 23-07-99 | GsA4divTG4LFG 
DATG4_02 | 23-07-99 | GsA4divTG4NL 
DATG4_03 | 23-07-99 | GsA4divTNG4 
DATG4M00 | 23-07-99 | GsA4divTG4LM 
DATG4M01 | 23-07-99 | GsA4divTG4LFGM 
DATG4M02 | 23-07-99 | GsA4divTG4NLM 
DATG4M03 | 23-07-99 | GsA4divTNG4M 
DAFT4_00 | 23-07-99 | GsA4divTF4L 
DAFT4_01 | 23-07-99 | GsA4divTF4LFG 
DAFT4_02 | 23-07-99 | GsA4divTF4NL 
DAFT4_03 | 23-07-99 | GsA4divTNF4 
DAFT4M00 | 23-07-99 | GsA4divTF4LM 
DAFT4M01 | 23-07-99 | GsA4divTF4LFGM 
DAFT4M02 | 23-07-99 | GsA4divTF4NLM 
DAFT4M03 | 23-07-99 | GsA4divTNF4M 
DAG4_00  | 23-07-99 | GsA4divG4L 
DAG4_01  | 23-07-99 | GsA4divG4LFG 
DAG4_02  | 23-07-99 | GsA4divG4NL 
DAG4_03  | 23-07-99 | GsA4divNG4 
DAF4_00  | 23-07-99 | GsA4divF4L 
DAF4_01  | 23-07-99 | GsA4divF4LFG 
DAF4_02  | 23-07-99 | GsA4divF4NL 
DAF4_03  | 23-07-99 | GsA4divNF4 
DATG3_00 | 23-07-99 | GsA4divTG3L 
DATG3_01 | 23-07-99 | GsA4divTG3LFG 
DATG3_02 | *27-07-99* | GsA4divTG3NL 
DATG3_03 | 23-07-99 | GsA4divTNG3 
DAG3_00  | 23-07-99 | GsA4divG3L 
DAG3_01  | 23-07-99 | GsA4divG3LFG 
DAG3_02  | 23-07-99 | GsA4divG3NL 
DAG3_03  | 23-07-99 | GsA4divNG3 
DAG3GF00 | 23-07-99 | GsTMDfastG3GL 
DAG3GF01 | 23-07-99 | GsTMDfastG3GLFG 
DAG3GF02 | 23-07-99 | GsTMDfastG3GNL 
DAG3GP00 | 23-07-99 | GsPrstG3GL 
DAG3GP01 | 23-07-99 | GsPrstG3GLFG 
DAG3GP02 | 23-07-99 | GsPrstG3GNL 
DAFT3_00 | 23-07-99 | GsA4divTF3L 
DAFT3_01 | 23-07-99 | GsA4divTF3LFG 
DAFT3_02 | 23-07-99 | GsA4divTF3NL 
DAFT3_03 | *27-07-99* | GsA4divTNF3 
DAF3_00  | 23-07-99 | GsA4divF3L 
DAF3_01  | 23-07-99 | GsA4divF3LFG 
DAF3_02  | 23-07-99 | GsA4divF3NL 
DAF3_03  | 23-07-99 | GsA4divNF3 
DAF3GF00 | 23-07-99 | GsTMDfastF3GL 
DAF3GF01 | 23-07-99 | GsTMDfastF3GLFG 
DAF3GF02 | 23-07-99 | GsTMDfastF3GNL 
DAF3GP00 | 23-07-99 | GsPrstF3GL 
DAF3GP01 | 23-07-99 | GsPrstF3GLFG 
DAF3GP02 | 23-07-99 | GsPrstF3GNL 
DAG3MF00 | 23-07-99 | GsTMDfastG3M 
DAG3MF01 | 23-07-99 | GsTMDfastG3MFG 
DATG3MF0 | 23-07-99 | GsTMDfastTG3M 
DATG3MF1 | 23-07-99 | GsTMDfastTG3MFG 
DAG4MF00 | 23-07-99 | GsTMDfastG4M 
DAG4MF01 | 23-07-99 | GsTMDfastG4MFG 
DATG4MF0 | 23-07-99 | GsTMDfastTG4M 
DATG4MF1 | 23-07-99 | GsTMDfastTG4MFG 
DAF3MF00 | 23-07-99 | GsTMDfastF3M 
DAF3MF01 | 23-07-99 | GsTMDfastF3MFG 
DAFT3MF0 | 23-07-99 | GsTMDfastTF3M 
DAFT3MF1 | 23-07-99 | GsTMDfastTF3MFG 
DAF4MF00 | 23-07-99 | GsTMDfastF4M 
DAF4MF01 | 23-07-99 | GsTMDfastF4MFG 
DAFT4MF0 | 23-07-99 | GsTMDfastTF4M 
DAFT4MF1 | 23-07-99 | GsTMDfastTF4MFG 
DAF4GF00 | 23-07-99 | GsTMDfastF4GL 
DAF4GF01 | 23-07-99 | GsTMDfastF4GLFG 
DAF4GF02 | 23-07-99 | GsTMDfastF4GNL 
DAG4GF00 | 23-07-99 | GsTMDfastG4GL 
DAG4GF01 | 23-07-99 | GsTMDfastG4GLFG 
DAG4GF02 | 23-07-99 | GsTMDfastG4GNL 

# LIBGTE (Geometry Transformation Engine)
LIBGTE is a library for 2D/3D math calculations that use the GTW hardware chip on the playstation to calculate coordinates and colour information before it is sent to the GPU.

Module  |   Date  |  Externals defined
--- | --- | ---
SINCOS   | 23-07-99 | rsin_tbl 
GEO_00   | 23-07-99 | rsin sin_1 
GEO_01   | 23-07-99 | rcos 
FOG_00   | 23-07-99 | SetFogFar 
FOG_01   | 23-07-99 | SetFogNear 
FOG_02   | 23-07-99 | SetFogNearFar 
COR_00   | 23-07-99 | RotMatrixC 
COR_01   | 23-07-99 | H_cor_tbl csincos 
COR_02   | 23-07-99 | ccos 
COR_03   | 23-07-99 | csin_1 csin 
COR_04   | 23-07-99 | H_ln_tbl cln_1 cln 
COR_05   | 23-07-99 | csqrt_1 csqrt 
COR_06   | 23-07-99 | K_cor_tbl catan 
SQRTBL   | 23-07-99 | SQRT 
MSC00    | 23-07-99 | InitGeom 
MSC01    | 23-07-99 | SquareRoot0 
MSC02    | 23-07-99 | InvSquareRoot VectorNormal VectorNormalS VectorNormalSS MatrixNormal 
MSC03    | 23-07-99 | InterpolShort 
MSC04    | 23-07-99 | InterpolByte 
MSC05    | 23-07-99 | gteMIMefunc 
MSC07    | 23-07-99 | p2otz 
MSC08    | 23-07-99 | otz2p 
MSC09    | 23-07-99 | SquareRoot12 
MTX_000  | 23-07-99 | MulMatrix0 
MTX_001  | 23-07-99 | MulRotMatrix 
MTX_002  | 23-07-99 | MulRotMatrix0 
MTX_003  | 23-07-99 | CompMatrix 
MTX_004  | 23-07-99 | ApplyMatrixLV 
MTX_005  | 23-07-99 | ApplyRotMatrix 
MTX_006  | 23-07-99 | PushMatrix PopMatrix 
MTX_007  | 23-07-99 | ReadLightMatrix 
MTX_008  | 23-07-99 | ReadColorMatrix 
MTX_009  | 23-07-99 | ReadRotMatrix 
MTX_00A  | 23-07-99 | ScaleMatrixL 
MTX_00B  | 23-07-99 | SetMulMatrix 
MTX_00C  | 23-07-99 | CompMatrixLV 
MTX_01   | 23-07-99 | ApplyRotMatrixLV 
MTX_02   | 23-07-99 | SetMulRotMatrix 
MTX_03   | 23-07-99 | MulMatrix 
MTX_04   | 23-07-99 | MulMatrix2 
MTX_05   | 23-07-99 | ApplyMatrix 
MTX_06   | 23-07-99 | ApplyMatrixSV 
MTX_07   | 23-07-99 | TransMatrix 
MTX_08   | 23-07-99 | ScaleMatrix 
MTX_09   | 23-07-99 | SetRotMatrix 
MTX_10   | 23-07-99 | SetLightMatrix 
MTX_11   | 23-07-99 | SetColorMatrix 
MTX_12   | 23-07-99 | SetTransMatrix 
REG00    | 23-07-99 | SetRGBcd 
REG04    | 23-07-99 | ReadSZfifo3 
REG05    | 23-07-99 | ReadSZfifo4 
REG06    | 23-07-99 | ReadSXSYfifo 
REG07    | 23-07-99 | ReadRGBfifo 
REG08    | 23-07-99 | ReadGeomOffset 
REG09    | 23-07-99 | ReadGeomScreen 
REG10    | 23-07-99 | SetBackColor 
REG11    | 23-07-99 | SetFarColor 
REG12    | 23-07-99 | SetGeomOffset 
REG13    | 23-07-99 | SetGeomScreen 
SMP_02   | 23-07-99 | RotTransPers 
SMP_03   | 23-07-99 | RotTransPers3 
SMP_04   | 23-07-99 | RotTrans 
SMP_05   | 23-07-99 | NormalClip 
SMP_06   | 23-07-99 | NormalClipS 
CMB_00   | 23-07-99 | RotTransPers4 
CMB_01   | 23-07-99 | RotAverage3 
CMB_02   | 23-07-99 | RotAverage4 
CMB_03   | 23-07-99 | RotNclip 
CMB_04   | 23-07-99 | RotNclip3 
CMB_05   | 23-07-99 | RotNclip4 
CMB_06   | 23-07-99 | RotAverageNclip3 
CMB_07   | 23-07-99 | RotAverageNclip4 
CMB_08   | 23-07-99 | RotAverageNclipColorDpq3 
CMB_09   | 23-07-99 | RotAverageNclipColorCol3 
CMB_10   | 23-07-99 | ColorMatDpq 
CMB_11   | 23-07-99 | ColorMatCol 
CMB_12   | 23-07-99 | RotColorDpq 
CMB_13   | 23-07-99 | RotColorDpq3 
CMB_14   | 23-07-99 | RotColorMatDpq 
CMB_15   | 23-07-99 | RotAverageNclip3_1 
CMB_16   | 23-07-99 | RotTransPersN 
CMB_17   | 23-07-99 | RotTransPers3N 
CMB_18   | 23-07-99 | RotAverageNclipColorDpq3_1 
HGT      | 23-07-99 | RotMeshH 
CSTBL    | 23-07-99 | rcossin_tbl 
CSTBLOLD | 23-07-99 | rcossin_tbl_0 
FGO_00   | 23-07-99 | TransposeMatrix 
FGO_01   | 23-07-99 | RotMatrix 
FGO_02   | 23-07-99 | RotMatrixYXZ 
FGO_03   | 23-07-99 | RotMatrixZYX 
FGO_04   | 23-07-99 | RotMatrixX 
FGO_05   | 23-07-99 | RotMatrixY 
FGO_06   | 23-07-99 | RotMatrixZ 
FGO_07   | 23-07-99 | rcossin 
FGO_08   | 23-07-99 | RotMatrixZXY 
FGO_09   | 23-07-99 | RotMatrixXZY 
FGO_10   | 23-07-99 | RotMatrixYZX 
RMAT_00  | 23-07-99 | RotMatrixZYX_gte 
RMAT_01  | 23-07-99 | RotMatrix_gte 
RMAT_02  | 23-07-99 | RotMatrixYXZ_gte 
FT4M_00  | 23-07-99 | GsTMDfastTNF4M 
FT4M_01  | 23-07-99 | GsTMDfastTF4NLM 
FT4M_02  | 23-07-99 | GsTMDfastTF4LM 
FT4M_03  | 23-07-99 | GsTMDfastTF4LFGM 
GT4M_00  | 23-07-99 | GsTMDfastTNG4M 
GT4M_01  | 23-07-99 | GsTMDfastTG4NLM 
GT4M_02  | 23-07-99 | GsTMDfastTG4LM 
GT4M_03  | 23-07-99 | GsTMDfastTG4LFGM 
SMD_00   | 23-07-99 | RotSMD_F3 
SMD_01   | 23-07-99 | RotSMD_G3 
SMD_02   | 23-07-99 | RotSMD_FT3 
SMD_03   | 23-07-99 | RotSMD_GT3 
SMD_04   | 23-07-99 | RotSMD_F4 
SMD_05   | 23-07-99 | RotSMD_G4 
SMD_06   | 23-07-99 | RotSMD_FT4 
SMD_07   | 23-07-99 | RotSMD_GT4 
SMD_08   | 23-07-99 | RotSMD_SV_F3 
SMD_09   | 23-07-99 | RotSMD_SV_G3 
SMD_10   | 23-07-99 | RotSMD_SV_FT3 
SMD_11   | 23-07-99 | RotSMD_SV_GT3 
SMD_12   | 23-07-99 | RotSMD_SV_F4 
SMD_13   | 23-07-99 | RotSMD_SV_G4 
SMD_14   | 23-07-99 | RotSMD_SV_FT4 
SMD_15   | 23-07-99 | RotSMD_SV_GT4 
RMD_00   | 23-07-99 | RotRMD_F3 
RMD_01   | 23-07-99 | RotRMD_G3 
RMD_02   | 23-07-99 | RotRMD_FT3 
RMD_03   | 23-07-99 | RotRMD_GT3 
RMD_04   | 23-07-99 | RotRMD_F4 
RMD_05   | 23-07-99 | RotRMD_G4 
RMD_06   | 23-07-99 | RotRMD_FT4 
RMD_07   | 23-07-99 | RotRMD_GT4 
RMD_08   | 23-07-99 | RotRMD_SV_F3 
RMD_09   | 23-07-99 | RotRMD_SV_G3 
RMD_10   | 23-07-99 | RotRMD_SV_FT3 
RMD_11   | 23-07-99 | RotRMD_SV_GT3 
RMD_12   | 23-07-99 | RotRMD_SV_F4 
RMD_13   | 23-07-99 | RotRMD_SV_G4 
RMD_14   | 23-07-99 | RotRMD_SV_FT4 
RMD_15   | 23-07-99 | RotRMD_SV_GT4 
CLIP_INI | 23-07-99 | CLIPEvbf *_tmp_evbf InitClip *CLIPNearz *CLIPFarz *CLIPHdkx *CLIPHdky *CLIPKdhx *CLIPKdhy 
CLIPF_00 | 23-07-99 | Clip3FP 
CLIPF_01 | 23-07-99 | Clip4FP 
CLIPF_02 | 23-07-99 | Clip3F 
CLIPF_03 | 23-07-99 | Clip4F 
CLIPF_04 | 23-07-99 | ClipF 
CLIPF_05 | 23-07-99 | ZClipF 
DVF3_00  | 23-07-99 | GsTMDdivF3L 
DVF3_01  | 23-07-99 | GsTMDdivF3LFG 
DVF3_02  | 23-07-99 | GsTMDdivF3NL 
DVF3_03  | 23-07-99 | GsTMDdivNF3 
DVF3_04  | 23-07-99 | DivideF3 
DVFT3_00 | 23-07-99 | GsTMDdivTF3L 
DVFT3_01 | 23-07-99 | GsTMDdivTF3LFG 
DVFT3_02 | 23-07-99 | GsTMDdivTF3NL 
DVFT3_03 | 23-07-99 | GsTMDdivTNF3 
DVFT3_04 | 23-07-99 | DivideFT3 
DVG3_00  | 23-07-99 | GsTMDdivG3L 
DVG3_01  | 23-07-99 | GsTMDdivG3LFG 
DVG3_02  | 23-07-99 | GsTMDdivG3NL 
DVG3_03  | 23-07-99 | GsTMDdivNG3 
DVG3_04  | 23-07-99 | DivideG3 
DVGT3_00 | 23-07-99 | GsTMDdivTG3L 
DVGT3_01 | 23-07-99 | GsTMDdivTG3LFG 
DVGT3_02 | 23-07-99 | GsTMDdivTG3NL 
DVGT3_03 | 23-07-99 | GsTMDdivTNG3 
DVGT3_04 | 23-07-99 | DivideGT3 
DVF4_00  | 23-07-99 | GsTMDdivF4L 
DVF4_01  | 23-07-99 | GsTMDdivF4LFG 
DVF4_02  | 23-07-99 | GsTMDdivF4NL 
DVF4_03  | 23-07-99 | GsTMDdivNF4 
DVF4_04  | 23-07-99 | DivideF4 
DVFT4_00 | 23-07-99 | GsTMDdivTF4L 
DVFT4_01 | 23-07-99 | GsTMDdivTF4LFG 
DVFT4_02 | 23-07-99 | GsTMDdivTF4NL 
DVFT4_03 | 23-07-99 | GsTMDdivTNF4 
DVFT4_04 | 23-07-99 | DivideFT4 
DVG4_00  | 23-07-99 | GsTMDdivG4L 
DVG4_01  | 23-07-99 | GsTMDdivG4LFG 
DVG4_02  | 23-07-99 | GsTMDdivG4NL 
DVG4_03  | 23-07-99 | GsTMDdivNG4 
DVG4_04  | 23-07-99 | DivideG4 
DVGT4_00 | 23-07-99 | GsTMDdivTG4L 
DVGT4_01 | 23-07-99 | GsTMDdivTG4LFG 
DVGT4_02 | 23-07-99 | GsTMDdivTG4NL 
DVGT4_03 | 23-07-99 | GsTMDdivTNG4 
DVGT4_04 | 23-07-99 | DivideGT4 
DIVF3A   | 23-07-99 | RCpolyF3 RCpolyF3A 
DIVFT3A  | 23-07-99 | RCpolyFT3 RCpolyFT3A 
DIVG3A   | 23-07-99 | RCpolyG3 RCpolyG3A 
DIVGT3A  | 23-07-99 | RCpolyGT3 RCpolyGT3A 
DIVF4A   | 23-07-99 | RCpolyF4 RCpolyF4A 
DIVFT4A  | 23-07-99 | RCpolyFT4 RCpolyFT4A 
DIVG4A   | 23-07-99 | RCpolyG4 RCpolyG4A 
DIVGT4A  | 23-07-99 | RCpolyGT4 RCpolyGT4A 
DIVP     | 23-07-99 | DivPloyFT4 
DVFT4M00 | 23-07-99 | GsTMDdivTF4LM 
DVFT4M01 | 23-07-99 | GsTMDdivTF4LFGM 
DVFT4M02 | 23-07-99 | GsTMDdivTF4NLM 
DVFT4M03 | 23-07-99 | GsTMDdivTNF4M 
DVGT4M00 | 23-07-99 | GsTMDdivTG4LM 
DVGT4M01 | 23-07-99 | GsTMDdivTG4LFGM 
DVGT4M02 | 23-07-99 | GsTMDdivTG4NLM 
DVGT4M03 | 23-07-99 | GsTMDdivTNG4M 
RMPS_F   | 23-07-99 | RotMeshPrimS_F3 
RMPS_G   | 23-07-99 | RotMeshPrimS_G3 
RMPS_FT  | 23-07-99 | RotMeshPrimS_FT3 
RMPS_GT  | 23-07-99 | RotMeshPrimS_GT3 
RMPS_FC  | 23-07-99 | RotMeshPrimS_FC3 
RMPS_GC  | 23-07-99 | RotMeshPrimS_GC3 
RMPS_FCT | 23-07-99 | RotMeshPrimS_FCT3 
RMPS_GCT | 23-07-99 | RotMeshPrimS_GCT3 
RMPS_T   | 23-07-99 | RotMeshPrimS_T3 
RMPR_F   | 23-07-99 | RotMeshPrimR_F3 
RMPR_G   | 23-07-99 | RotMeshPrimR_G3 
RMPR_FT  | 23-07-99 | RotMeshPrimR_FT3 
RMPR_GT  | 23-07-99 | RotMeshPrimR_GT3 
RMPR_FC  | 23-07-99 | RotMeshPrimR_FC3 
RMPR_GC  | 23-07-99 | RotMeshPrimR_GC3 
RMPR_FCT | 23-07-99 | RotMeshPrimR_FCT3 
RMPR_GCT | 23-07-99 | RotMeshPrimR_GCT3 
RMPR_T   | 23-07-99 | RotMeshPrimR_T3 
RMPQ_T   | 23-07-99 | RotMeshPrimQ_T 
RATAN    | 23-07-99 | ratan_tbl ratan2 
PPMFT    | 23-07-99 | pers_map 
PPM      | 23-07-99 | ScanXY0 
PATCHGTE | 23-07-99 | _patch_gte 
PHN      | 23-07-99 | PhongLine 
DVF3B00  | 23-07-99 | GsTMDdivF3LB 
DVF3B01  | 23-07-99 | GsTMDdivF3LFGB 
DVF3B02  | 23-07-99 | GsTMDdivF3NLB 
DVF3B03  | 23-07-99 | GsTMDdivNF3B 
DVF4B00  | 23-07-99 | GsTMDdivF4LB 
DVF4B01  | 23-07-99 | GsTMDdivF4LFGB 
DVF4B02  | 23-07-99 | GsTMDdivF4NLB 
DVF4B03  | 23-07-99 | GsTMDdivNF4B 
DVFT3B00 | 23-07-99 | GsTMDdivTF3LB 
DVFT3B01 | 23-07-99 | GsTMDdivTF3LFGB 
DVFT3B02 | 23-07-99 | GsTMDdivTF3NLB 
DVFT3B03 | 23-07-99 | GsTMDdivTNF3B 
DVFT4B00 | 23-07-99 | GsTMDdivTF4LB 
DVFT4B01 | 23-07-99 | GsTMDdivTF4LFGB 
DVFT4B02 | 23-07-99 | GsTMDdivTF4NLB 
DVFT4B03 | 23-07-99 | GsTMDdivTNF4B 
DVG3B00  | 23-07-99 | GsTMDdivG3LB 
DVG3B01  | 23-07-99 | GsTMDdivG3LFGB 
DVG3B02  | 23-07-99 | GsTMDdivG3NLB 
DVG3B03  | 23-07-99 | GsTMDdivNG3B 
DVG4B00  | 23-07-99 | GsTMDdivG4LB 
DVG4B01  | 23-07-99 | GsTMDdivG4LFGB 
DVG4B02  | 23-07-99 | GsTMDdivG4NLB 
DVG4B03  | 23-07-99 | GsTMDdivNG4B 
DVGT3B00 | 23-07-99 | GsTMDdivTG3LB 
DVGT3B01 | 23-07-99 | GsTMDdivTG3LFGB 
DVGT3B02 | 23-07-99 | GsTMDdivTG3NLB 
DVGT3B03 | 23-07-99 | GsTMDdivTNG3B 
DVGT4B00 | 23-07-99 | GsTMDdivTG4LB 
DVGT4B01 | 23-07-99 | GsTMDdivTG4LFGB 
DVGT4B02 | 23-07-99 | GsTMDdivTG4NLB 
DVGT4B03 | 23-07-99 | GsTMDdivTNG4B 
GEO_1    | 23-07-99 | RotMatrixZYX_C 
GEO_2    | 23-07-99 | RotMatrix_C 
GEO_3    | 23-07-99 | RotMatrixYXZ_C 
GEO_4    | 23-07-99 | RotMatrixX_C 
GEO_5    | 23-07-99 | RotMatrixY_C 
GEO_6    | 23-07-99 | RotMatrixZ_C 
GEO_02_1 | 23-07-99 | EigenMatrix 
GEO_02_2 | 23-07-99 | IsIdMatrix 
GEO_03_1 | 23-07-99 | MatrixNormal_0 
GEO_03_2 | 23-07-99 | MatrixNormal_1 
GEO_03_3 | 23-07-99 | MatrixNormal_2 
SPL_1    | 23-07-99 | SubPol4 
SPL_2    | 23-07-99 | SubPol3 
MSC06_1  | 23-07-99 | LoadAverage12 
MSC06_2  | 23-07-99 | LoadAverage0 
MSC06_3  | 23-07-99 | LoadAverageShort12 
MSC06_4  | 23-07-99 | LoadAverageShort0 
MSC06_5  | 23-07-99 | LoadAverageByte 
MSC06_6  | 23-07-99 | LoadAverageCol 
REG02_1  | 23-07-99 | ReadOTZ 
REG02_2  | 23-07-99 | ReadIR0 
REG02_3  | 23-07-99 | ReadIR123 
REG02_4  | 23-07-99 | ReadSZ2 
REG02_5  | 23-07-99 | ReadMac0 
REG02_6  | 23-07-99 | ReadMAC123 
REG02_7  | 23-07-99 | ReadORGB 
REG02_8  | 23-07-99 | ReadLZC 
REG02_9  | 23-07-99 | ReadFLAG 
REG03_1  | 23-07-99 | SetVertex0 
REG03_2  | 23-07-99 | SetVertex1 
REG03_3  | 23-07-99 | SetVertex2 
REG03_4  | 23-07-99 | SetVertexTri 
REG03_5  | 23-07-99 | SetRGBfifo 
REG03_6  | 23-07-99 | SetIR123 
REG03_7  | 23-07-99 | SetIR0 
REG03_8  | 23-07-99 | SetSZfifo3 
REG03_9  | 23-07-99 | SetSZfifo4 
REG03_10 | 23-07-99 | SetSXSYfifo 
REG03_11 | 23-07-99 | SetRii 
REG03_12 | 23-07-99 | SetMAC123 
REG03_13 | 23-07-99 | SetData32 
REG03_14 | 23-07-99 | SetDQA 
REG03_15 | 23-07-99 | SetDQB 
SMP_1    | 23-07-99 | LocalLight 
SMP_2    | 23-07-99 | DpqColor 
SMP_3    | 23-07-99 | NormalColor 
SMP_4    | 23-07-99 | NormalColor3 
SMP_5    | 23-07-99 | NormalColorDpq 
SMP_6    | 23-07-99 | NormalColorDpq3 
SMP_7    | 23-07-99 | NormalColorCol 
SMP_8    | 23-07-99 | NormalColorCol3 
SMP_9    | 23-07-99 | ColorDpq 
SMP_10   | 23-07-99 | ColorCol 
SMP_11   | 23-07-99 | AverageSZ3 
SMP_12   | 23-07-99 | AverageSZ4 
SMP_00_1 | 23-07-99 | LightColor 
SMP_00_2 | 23-07-99 | DpqColorLight 
SMP_00_3 | 23-07-99 | DpqColor3 
SMP_00_4 | 23-07-99 | Intpl 
SMP_00_5 | 23-07-99 | Square12 
SMP_00_6 | 23-07-99 | Square0 
SMP_00_7 | 23-07-99 | AverageZ3 
SMP_00_8 | 23-07-99 | AverageZ4 
SMP_00_9 | 23-07-99 | OuterProduct12 
SMP_00_1 | 23-07-99 | OuterProduct0 
SMP_00_1 | 23-07-99 | Lzc 
SMP_01_1 | 23-07-99 | RotTransSV 
SMP_01_2 | 23-07-99 | SquareSS12 
SMP_01_3 | 23-07-99 | SquareSS0 
SMP_01_4 | 23-07-99 | SquareSL12 
SMP_01_5 | 23-07-99 | SquareSL0 
TMD_1    | 23-07-99 | gte_scope_f3 
TMD_2    | 23-07-99 | gte_scope_tf3 
TMD_3    | 23-07-99 | gte_scope_g3 
TMD_4    | 23-07-99 | gte_scope_tg3 
TMD_5    | 23-07-99 | gte_flat3 
TMD_6    | 23-07-99 | gte_texture_flat3 
TMD_7    | 23-07-99 | gte_gouraud3 
TMD_8    | 23-07-99 | gte_texture_gouraud3 
TMD_9    | 23-07-99 | gte_flat_fog3 
TMD_10   | 23-07-99 | gte_texture_flat_fog3 
TMD_11   | 23-07-99 | gte_gouraud_fog3 
TMD_12   | 23-07-99 | gte_texture_gouraud_fog3 
TMD_13   | 23-07-99 | gte_scope_tf4_B 
TMD_14   | 23-07-99 | gte_scope_tf4 
NOM_1    | 23-07-99 | RotTransPers_nom 
NOM_2    | 23-07-99 | RotTransPers3_nom 
NOM_3    | 23-07-99 | RotTrans_nom 
NOM_4    | 23-07-99 | RotTransPers4_nom 
NOM_5    | 23-07-99 | RotAverage3_nom 
NOM_6    | 23-07-99 | RotNclip3_nom 
NOM_7    | 23-07-99 | RotAverageNclip3_nom 
NOM_8    | 23-07-99 | RotColorDpq_nom 
NOM_9    | 23-07-99 | RotColorDpq3_nom 
NOM_10   | 23-07-99 | RotAverageNclipColorDpq3_nom 
NOM_11   | 23-07-99 | RotAverageNclipColorCol3_nom 
NOM_12   | 23-07-99 | NormalColor_nom 
NOM_13   | 23-07-99 | NormalColor3_nom 
NOM_14   | 23-07-99 | NormalColorDpq_nom 
NOM_15   | 23-07-99 | NormalColorDpq3_nom 
NOM_16   | 23-07-99 | NormalColorCol_nom 
NOM_17   | 23-07-99 | NormalColorCol3_nom 
F3_1     | 23-07-99 | GsTMDfastNF3 
F3_2     | 23-07-99 | GsTMDfastF3NL 
F3_3     | 23-07-99 | GsTMDfastF3L 
F3_4     | 23-07-99 | GsTMDfastF3LFG 
F4_1     | 23-07-99 | GsTMDfastNF4 
F4_2     | 23-07-99 | GsTMDfastF4NL 
F4_3     | 23-07-99 | GsTMDfastF4L 
F4_4     | 23-07-99 | GsTMDfastF4LFG 
F4S_1    | 23-07-99 | GsTMDfastNF4D 
F4S_2    | 23-07-99 | GsTMDfastF4NLD 
F4S_3    | 23-07-99 | GsTMDfastF4LD 
F4S_4    | 23-07-99 | GsTMDfastF4LFGD 
G3_1     | 23-07-99 | GsTMDfastNG3 
G3_2     | 23-07-99 | GsTMDfastG3NL 
G3_3     | 23-07-99 | GsTMDfastG3L 
G3_4     | 23-07-99 | GsTMDfastG3LFG 
G4_1     | 23-07-99 | GsTMDfastNG4 
G4_2     | 23-07-99 | GsTMDfastG4NL 
G4_3     | 23-07-99 | GsTMDfastG4L 
G4_4     | 23-07-99 | GsTMDfastG4LFG 
G4S_1    | 23-07-99 | GsTMDfastNG4D 
G4S_2    | 23-07-99 | GsTMDfastG4NLD 
G4S_3    | 23-07-99 | GsTMDfastG4LD 
G4S_4    | 23-07-99 | GsTMDfastG4LFGD 
FT3_1    | 23-07-99 | GsTMDfastTNF3 
FT3_2    | 23-07-99 | GsTMDfastTF3NL 
FT3_3    | 23-07-99 | GsTMDfastTF3L 
FT3_4    | 23-07-99 | GsTMDfastTF3LFG 
FT4_1    | 23-07-99 | GsTMDfastTNF4 
FT4_2    | 23-07-99 | GsTMDfastTF4NL 
FT4_3    | 23-07-99 | GsTMDfastTF4L 
FT4_4    | 23-07-99 | GsTMDfastTF4LFG 
FT4S_1   | 23-07-99 | GsTMDfastTNF4D 
FT4S_2   | 23-07-99 | GsTMDfastTF4NLD 
FT4S_3   | 23-07-99 | GsTMDfastTF4LD 
FT4S_4   | 23-07-99 | GsTMDfastTF4LFGD 
GT3_1    | 23-07-99 | GsTMDfastTNG3 
GT3_2    | 23-07-99 | GsTMDfastTG3NL 
GT3_3    | 23-07-99 | GsTMDfastTG3L 
GT3_4    | 23-07-99 | GsTMDfastTG3LFG 
GT4_1    | 23-07-99 | GsTMDfastTNG4 
GT4_2    | 23-07-99 | GsTMDfastTG4NL 
GT4_3    | 23-07-99 | GsTMDfastTG4L 
GT4_4    | 23-07-99 | GsTMDfastTG4LFG 
GT4S_1   | 23-07-99 | GsTMDfastTNG4D 
GT4S_2   | 23-07-99 | GsTMDfastTG4NLD 
GT4S_3   | 23-07-99 | GsTMDfastTG4LD 
GT4S_4   | 23-07-99 | GsTMDfastTG4LFGD 
PRS_F3_1 | 23-07-99 | GsPrstNF3 
PRS_F3_2 | 23-07-99 | GsPrstF3NL 
PRS_F3_3 | 23-07-99 | GsPrstF3L 
PRS_F3_4 | 23-07-99 | GsPrstF3LFG 
PRS_F4_1 | 23-07-99 | GsPrstNF4 
PRS_F4_2 | 23-07-99 | GsPrstF4NL 
PRS_F4_3 | 23-07-99 | GsPrstF4L 
PRS_F4_4 | 23-07-99 | GsPrstF4LFG 
PRS_F4S_ | 23-07-99 | GsPrstNF4D 
PRS_F4S_ | 23-07-99 | GsPrstF4NLD 
PRS_F4S_ | 23-07-99 | GsPrstF4LD 
PRS_F4S_ | 23-07-99 | GsPrstF4LFGD 
PRS_G3_1 | 23-07-99 | GsPrstNG3 
PRS_G3_2 | 23-07-99 | GsPrstG3NL 
PRS_G3_3 | 23-07-99 | GsPrstG3L 
PRS_G3_4 | 23-07-99 | GsPrstG3LFG 
PRS_G4_1 | 23-07-99 | GsPrstNG4 
PRS_G4_2 | 23-07-99 | GsPrstG4NL 
PRS_G4_3 | 23-07-99 | GsPrstG4L 
PRS_G4_4 | 23-07-99 | GsPrstG4LFG 
PRS_G4S_ | 23-07-99 | GsPrstNG4D 
PRS_G4S_ | 23-07-99 | GsPrstG4NLD 
PRS_G4S_ | 23-07-99 | GsPrstG4LD 
PRS_G4S_ | 23-07-99 | GsPrstG4LFGD 
PRS_FT3_ | 23-07-99 | GsPrstTNF3 
PRS_FT3_ | 23-07-99 | GsPrstTF3NL 
PRS_FT3_ | 23-07-99 | GsPrstTF3L 
PRS_FT3_ | 23-07-99 | GsPrstTF3LFG 
PRS_FT4_ | 23-07-99 | GsPrstTNF4 
PRS_FT4_ | 23-07-99 | GsPrstTF4NL 
PRS_FT4_ | 23-07-99 | GsPrstTF4L 
PRS_FT4_ | 23-07-99 | GsPrstTF4LFG 
PRS_FT4S | 23-07-99 | GsPrstTNF4D 
PRS_FT4S | 23-07-99 | GsPrstTF4NLD 
PRS_FT4S | 23-07-99 | GsPrstTF4LD 
PRS_FT4S | 23-07-99 | GsPrstTF4LFGD 
PRS_GT3_ | 23-07-99 | GsPrstTNG3 
PRS_GT3_ | 23-07-99 | GsPrstTG3NL 
PRS_GT3_ | 23-07-99 | GsPrstTG3L 
PRS_GT3_ | 23-07-99 | GsPrstTG3LFG 
PRS_GT4_ | 23-07-99 | GsPrstTNG4 
PRS_GT4_ | 23-07-99 | GsPrstTG4NL 
PRS_GT4_ | 23-07-99 | GsPrstTG4L 
PRS_GT4_ | 23-07-99 | GsPrstTG4LFG 
PRS_GT4S | 23-07-99 | GsPrstTNG4D 
PRS_GT4S | 23-07-99 | GsPrstTG4NLD 
PRS_GT4S | 23-07-99 | GsPrstTG4LD 
PRS_GT4S | 23-07-99 | GsPrstTG4LFGD 
PMD_1    | 23-07-99 | RotPMD_F3 
PMD_2    | 23-07-99 | RotPMD_G3 
PMD_3    | 23-07-99 | RotPMD_FT3 
PMD_4    | 23-07-99 | RotPMD_GT3 
PMD_5    | 23-07-99 | RotPMD_F4 
PMD_6    | 23-07-99 | RotPMD_G4 
PMD_7    | 23-07-99 | RotPMD_FT4 
PMD_8    | 23-07-99 | RotPMD_GT4 
PMD_9    | 23-07-99 | RotPMD_SV_F3 
PMD_10   | 23-07-99 | RotPMD_SV_G3 
PMD_11   | 23-07-99 | RotPMD_SV_FT3 
PMD_12   | 23-07-99 | RotPMD_SV_GT3 
PMD_13   | 23-07-99 | RotPMD_SV_F4 
PMD_14   | 23-07-99 | RotPMD_SV_G4 
PMD_15   | 23-07-99 | RotPMD_SV_FT4 
PMD_16   | 23-07-99 | RotPMD_SV_GT4 
NMD_1    | 23-07-99 | RotNMD_F3 
NMD_2    | 23-07-99 | RotNMD_G3 
NMD_3    | 23-07-99 | RotNMD_FT3 
NMD_4    | 23-07-99 | RotNMD_GT3 
NMD_5    | 23-07-99 | RotNMD_F4 
NMD_6    | 23-07-99 | RotNMD_G4 
NMD_7    | 23-07-99 | RotNMD_FT4 
NMD_8    | 23-07-99 | RotNMD_GT4 
NMD_9    | 23-07-99 | RotNMD_SV_F3 
NMD_10   | 23-07-99 | RotNMD_SV_G3 
NMD_11   | 23-07-99 | RotNMD_SV_FT3 
NMD_12   | 23-07-99 | RotNMD_SV_GT3 
NMD_13   | 23-07-99 | RotNMD_SV_F4 
NMD_14   | 23-07-99 | RotNMD_SV_G4 
NMD_15   | 23-07-99 | RotNMD_SV_FT4 
NMD_16   | 23-07-99 | RotNMD_SV_GT4 
CLIP_G_1 | 23-07-99 | Clip3GP Clip3G 
CLIP_G_2 | 23-07-99 | Clip4GP Clip4G 
CLIP_G_3 | 23-07-99 | ClipG ZClipG 
CLIP_FT_ | 23-07-99 | Clip3FTP Clip3FT 
CLIP_FT_ | 23-07-99 | Clip4FTP Clip4FT 
CLIP_FT_ | 23-07-99 | ClipFT ZClipFT 
CLIP_GT_ | 23-07-99 | Clip3GTP Clip3GT 
CLIP_GT_ | 23-07-99 | Clip4GTP Clip4GT 
CLIP_GT_ | 23-07-99 | ClipGT ZClipGT 
TRR_1    | 23-07-99 | TransRot_32 
TRR_2    | 23-07-99 | TransRotPers 
TRR_3    | 23-07-99 | TransRotPers3 
TRR_4    | 23-07-99 | ApplyTransposeMatrixLV 
F3B_1    | 23-07-99 | GsTMDfastNF3B 
F3B_2    | 23-07-99 | GsTMDfastF3NLB 
F3B_3    | 23-07-99 | GsTMDfastF3LB 
F3B_4    | 23-07-99 | GsTMDfastF3LFGB 
F4B_1    | 23-07-99 | GsTMDfastNF4B 
F4B_2    | 23-07-99 | GsTMDfastF4NLB 
F4B_3    | 23-07-99 | GsTMDfastF4LB 
F4B_4    | 23-07-99 | GsTMDfastF4LFGB 
G3B_1    | 23-07-99 | GsTMDfastNG3B 
G3B_2    | 23-07-99 | GsTMDfastG3NLB 
G3B_3    | 23-07-99 | GsTMDfastG3LB 
G3B_4    | 23-07-99 | GsTMDfastG3LFGB 
G4B_1    | 23-07-99 | GsTMDfastNG4B 
G4B_2    | 23-07-99 | GsTMDfastG4NLB 
G4B_3    | 23-07-99 | GsTMDfastG4LB 
G4B_4    | 23-07-99 | GsTMDfastG4LFGB 
FT3B_1   | 23-07-99 | GsTMDfastTNF3B 
FT3B_2   | 23-07-99 | GsTMDfastTF3NLB 
FT3B_3   | 23-07-99 | GsTMDfastTF3LB 
FT3B_4   | 23-07-99 | GsTMDfastTF3LFGB 
FT4B_1   | 23-07-99 | GsTMDfastTNF4B 
FT4B_2   | 23-07-99 | GsTMDfastTF4NLB 
FT4B_3   | 23-07-99 | GsTMDfastTF4LB 
FT4B_4   | 23-07-99 | GsTMDfastTF4LFGB 
GT3B_1   | 23-07-99 | GsTMDfastTNG3B 
GT3B_2   | 23-07-99 | GsTMDfastTG3NLB 
GT3B_3   | 23-07-99 | GsTMDfastTG3LB 
GT3B_4   | 23-07-99 | GsTMDfastTG3LFGB 
GT4B_1   | 23-07-99 | GsTMDfastTNG4B 
GT4B_2   | 23-07-99 | GsTMDfastTG4NLB 
GT4B_3   | 23-07-99 | GsTMDfastTG4LB 
GT4B_4   | 23-07-99 | GsTMDfastTG4LFGB 
GT3F_1   | 23-07-99 | GsTMDfastTNG3_FLIP 
GT3F_2   | 23-07-99 | GsTMDfastTG3NL_FLIP 
GT3F_3   | 23-07-99 | GsTMDfastTG3L_FLIP 
GT3F_4   | 23-07-99 | GsTMDfastTG3LFG_FLIP 

# LIBGUN
Lightgun library

Module  |   Date  |  Externals defined
--- | --- | ---
GUN      | 22-09-97 | RemoveGUN StopGun StartGun SelectGUN StartGUN StopGUN InitGUN SendGUN EnableGUN DisableGUN 
NEWGUN   | 22-09-97 | _InitGun _ExitGun _check_gun_flag _clear_gun_flag read_gun_v read_gun_h 

# LIBHMD (HMD model, texture and animation format handling)
The LIBHMD.LIB library supports loading the HMD format which is a 3D object that contains animation, texture and vertices to represent an object in 3D space.

Module  |   Date  |  Externals defined
--- | --- | ---
00000008 | 23-07-99 | GsU_00000008 
00000009 | 23-07-99 | GsU_00000009 
0000000A | 23-07-99 | GsU_0000000a 
0000000B | 23-07-99 | GsU_0000000b 
0000000C | 23-07-99 | GsU_0000000c 
0000000D | 23-07-99 | GsU_0000000d 
0000000E | 23-07-99 | GsU_0000000e 
0000000F | 23-07-99 | GsU_0000000f 
00000010 | 23-07-99 | GsU_00000010 
00000011 | 23-07-99 | GsU_00000011 
00000012 | 23-07-99 | GsU_00000012 
00000013 | 23-07-99 | GsU_00000013 
00000014 | 23-07-99 | GsU_00000014 
00000015 | 23-07-99 | GsU_00000015 
00000016 | 23-07-99 | GsU_00000016 
00000017 | 23-07-99 | GsU_00000017 
00000018 | 23-07-99 | GsU_00000018 
00000019 | 23-07-99 | GsU_00000019 
0000001C | 23-07-99 | GsU_0000001c 
0000001D | 23-07-99 | GsU_0000001d 
00000209 | 23-07-99 | GsU_00000209 
0000020B | 23-07-99 | GsU_0000020b 
0000020D | 23-07-99 | GsU_0000020d 
0000020F | 23-07-99 | GsU_0000020f 
00000211 | 23-07-99 | GsU_00000211 
00000213 | 23-07-99 | GsU_00000213 
00000215 | 23-07-99 | GsU_00000215 
00000217 | 23-07-99 | GsU_00000217 
00020008 | 23-07-99 | GsU_00020008 
00020009 | 23-07-99 | GsU_00020009 
0002000A | 23-07-99 | GsU_0002000a 
0002000B | 23-07-99 | GsU_0002000b 
0002000C | 23-07-99 | GsU_0002000c 
0002000D | 23-07-99 | GsU_0002000d 
0002000E | 23-07-99 | GsU_0002000e 
0002000F | 23-07-99 | GsU_0002000f 
00020010 | 23-07-99 | GsU_00020010 
00020011 | 23-07-99 | GsU_00020011 
00020012 | 23-07-99 | GsU_00020012 
00020013 | 23-07-99 | GsU_00020013 
00020014 | 23-07-99 | GsU_00020014 
00020015 | 23-07-99 | GsU_00020015 
00020016 | 23-07-99 | GsU_00020016 
00020017 | 23-07-99 | GsU_00020017 
00020209 | 23-07-99 | GsU_00020209 
0002020B | 23-07-99 | GsU_0002020b 
0002020D | 23-07-99 | GsU_0002020d 
0002020F | 23-07-99 | GsU_0002020f 
00020211 | 23-07-99 | GsU_00020211 
00020213 | 23-07-99 | GsU_00020213 
00020215 | 23-07-99 | GsU_00020215 
00020217 | 23-07-99 | GsU_00020217 
00040048 | 23-07-99 | GsU_00040048 
00040049 | 23-07-99 | GsU_00040049 
0004004C | 23-07-99 | GsU_0004004c 
0004004D | 23-07-99 | GsU_0004004d 
00040050 | 23-07-99 | GsU_00040050 
00040051 | 23-07-99 | GsU_00040051 
00040054 | 23-07-99 | GsU_00040054 
00040055 | 23-07-99 | GsU_00040055 
00040058 | 23-07-99 | GsU_00040058 
00040059 | 23-07-99 | GsU_00040059 
0004005C | 23-07-99 | GsU_0004005c 
0004005D | 23-07-99 | GsU_0004005d 
00040148 | 23-07-99 | GsU_00040148 
00040149 | 23-07-99 | GsU_00040149 
0004014C | 23-07-99 | GsU_0004014c 
0004014D | 23-07-99 | GsU_0004014d 
00040150 | 23-07-99 | GsU_00040150 
00040151 | 23-07-99 | GsU_00040151 
00040154 | 23-07-99 | GsU_00040154 
00040155 | 23-07-99 | GsU_00040155 
00040249 | 23-07-99 | GsU_00040249 
0004024D | 23-07-99 | GsU_0004024d 
00040251 | 23-07-99 | GsU_00040251 
00040255 | 23-07-99 | GsU_00040255 
00100008 | 23-07-99 | GsU_00100008 
00100009 | 23-07-99 | GsU_00100009 
0010000A | 23-07-99 | GsU_0010000a 
0010000B | 23-07-99 | GsU_0010000b 
0010000C | 23-07-99 | GsU_0010000c 
0010000D | 23-07-99 | GsU_0010000d 
0010000E | 23-07-99 | GsU_0010000e 
0010000F | 23-07-99 | GsU_0010000f 
00100010 | 23-07-99 | GsU_00100010 
00100011 | 23-07-99 | GsU_00100011 
00100012 | 23-07-99 | GsU_00100012 
00100013 | 23-07-99 | GsU_00100013 
00100014 | 23-07-99 | GsU_00100014 
00100015 | 23-07-99 | GsU_00100015 
00100016 | 23-07-99 | GsU_00100016 
00100017 | 23-07-99 | GsU_00100017 
00100209 | 23-07-99 | GsU_00100209 
0010020B | 23-07-99 | GsU_0010020b 
0010020D | 23-07-99 | GsU_0010020d 
0010020F | 23-07-99 | GsU_0010020f 
00100211 | 23-07-99 | GsU_00100211 
00100213 | 23-07-99 | GsU_00100213 
00100215 | 23-07-99 | GsU_00100215 
00100217 | 23-07-99 | GsU_00100217 
00200008 | 23-07-99 | GsU_00200008 
00200009 | 23-07-99 | GsU_00200009 
0020000C | 23-07-99 | GsU_0020000c 
0020000D | 23-07-99 | GsU_0020000d 
00200010 | 23-07-99 | GsU_00200010 
00200011 | 23-07-99 | GsU_00200011 
00200014 | 23-07-99 | GsU_00200014 
00200015 | 23-07-99 | GsU_00200015 
00200209 | 23-07-99 | GsU_00200209 
0020020D | 23-07-99 | GsU_0020020d 
00200211 | 23-07-99 | GsU_00200211 
00200215 | 23-07-99 | GsU_00200215 
00240048 | 23-07-99 | GsU_00240048 
00240049 | 23-07-99 | GsU_00240049 
0024004C | 23-07-99 | GsU_0024004c 
0024004D | 23-07-99 | GsU_0024004d 
00240050 | 23-07-99 | GsU_00240050 
00240051 | 23-07-99 | GsU_00240051 
00240054 | 23-07-99 | GsU_00240054 
00240055 | 23-07-99 | GsU_00240055 
00240249 | 23-07-99 | GsU_00240249 
0024024D | 23-07-99 | GsU_0024024d 
00240251 | 23-07-99 | GsU_00240251 
00240255 | 23-07-99 | GsU_00240255 
00300008 | 23-07-99 | GsU_00300008 
00300009 | 23-07-99 | GsU_00300009 
0030000C | 23-07-99 | GsU_0030000c 
0030000D | 23-07-99 | GsU_0030000d 
00300010 | 23-07-99 | GsU_00300010 
00300011 | 23-07-99 | GsU_00300011 
00300014 | 23-07-99 | GsU_00300014 
00300015 | 23-07-99 | GsU_00300015 
00300209 | 23-07-99 | GsU_00300209 
0030020D | 23-07-99 | GsU_0030020d 
00300211 | 23-07-99 | GsU_00300211 
00300215 | 23-07-99 | GsU_00300215 
01000000 | 23-07-99 | GsU_01000000 
0100000C | 23-07-99 | GsU_0100000c 
0100000D | 23-07-99 | GsU_0100000d 
0100000E | 23-07-99 | GsU_0100000e 
0100000F | 23-07-99 | GsU_0100000f 
01000014 | 23-07-99 | GsU_01000014 
01000015 | 23-07-99 | GsU_01000015 
01000016 | 23-07-99 | GsU_01000016 
01000017 | 23-07-99 | GsU_01000017 
0100020D | 23-07-99 | GsU_0100020d 
0100020F | 23-07-99 | GsU_0100020f 
01000215 | 23-07-99 | GsU_01000215 
01000217 | 23-07-99 | GsU_01000217 
0102000C | 23-07-99 | GsU_0102000c 
0102000D | 23-07-99 | GsU_0102000d 
0102000E | 23-07-99 | GsU_0102000e 
0102000F | 23-07-99 | GsU_0102000f 
01020014 | 23-07-99 | GsU_01020014 
01020015 | 23-07-99 | GsU_01020015 
01020016 | 23-07-99 | GsU_01020016 
01020017 | 23-07-99 | GsU_01020017 
0102020D | 23-07-99 | GsU_0102020d 
0102020F | 23-07-99 | GsU_0102020f 
01020215 | 23-07-99 | GsU_01020215 
01020217 | 23-07-99 | GsU_01020217 
01040048 | 23-07-99 | GsU_01040048 
01040049 | 23-07-99 | GsU_01040049 
0104004C | 23-07-99 | GsU_0104004c 
0104004D | 23-07-99 | GsU_0104004d 
01040050 | 23-07-99 | GsU_01040050 
01040051 | 23-07-99 | GsU_01040051 
01040054 | 23-07-99 | GsU_01040054 
01040055 | 23-07-99 | GsU_01040055 
01040249 | 23-07-99 | GsU_01040249 
0104024D | 23-07-99 | GsU_0104024d 
01040251 | 23-07-99 | GsU_01040251 
01040255 | 23-07-99 | GsU_01040255 
0120000C | 23-07-99 | GsU_0120000c 
0120000D | 23-07-99 | GsU_0120000d 
01200014 | 23-07-99 | GsU_01200014 
01200015 | 23-07-99 | GsU_01200015 
0120020D | 23-07-99 | GsU_0120020d 
01200215 | 23-07-99 | GsU_01200215 
01240048 | 23-07-99 | GsU_01240048 
01240049 | 23-07-99 | GsU_01240049 
0124004C | 23-07-99 | GsU_0124004c 
0124004D | 23-07-99 | GsU_0124004d 
01240050 | 23-07-99 | GsU_01240050 
01240051 | 23-07-99 | GsU_01240051 
01240054 | 23-07-99 | GsU_01240054 
01240055 | 23-07-99 | GsU_01240055 
01240249 | 23-07-99 | GsU_01240249 
0124024D | 23-07-99 | GsU_0124024d 
01240251 | 23-07-99 | GsU_01240251 
01240255 | 23-07-99 | GsU_01240255 
ANIM     | 23-07-99 | GsScanAnim GsLinkAnim 
ANIM2    | 23-07-99 | GsSetBetaParam 
BEZIER   | 23-07-99 | setBezierCof 
BETA     | 23-07-99 | setBetaCof 
MIME     | 23-07-99 | GsInitRstVtxMIMe GsInitRstNrmMIMe 
00000000 | 23-07-99 | GsU_00000000 
00010008 | 23-07-99 | GsU_00010008 
00010009 | 23-07-99 | GsU_00010009 
0001000C | 23-07-99 | GsU_0001000c 
0001000D | 23-07-99 | GsU_0001000d 
00010010 | 23-07-99 | GsU_00010010 
00010011 | 23-07-99 | GsU_00010011 
00010014 | 23-07-99 | GsU_00010014 
00010015 | 23-07-99 | GsU_00010015 
00030008 | 23-07-99 | GsU_00030008 
00030009 | 23-07-99 | GsU_00030009 
0003000C | 23-07-99 | GsU_0003000c 
0003000D | 23-07-99 | GsU_0003000d 
00030010 | 23-07-99 | GsU_00030010 
00030011 | 23-07-99 | GsU_00030011 
00030014 | 23-07-99 | GsU_00030014 
00030015 | 23-07-99 | GsU_00030015 
00050048 | 23-07-99 | GsU_00050048 
00050049 | 23-07-99 | GsU_00050049 
0005004C | 23-07-99 | GsU_0005004c 
0005004D | 23-07-99 | GsU_0005004d 
00050050 | 23-07-99 | GsU_00050050 
00050051 | 23-07-99 | GsU_00050051 
00050054 | 23-07-99 | GsU_00050054 
00050055 | 23-07-99 | GsU_00050055 
02000000 | 23-07-99 | GsU_02000000 
02000001 | 23-07-99 | GsU_02000001 
03000000 | 23-07-99 | GsU_03000000 
03000001 | 23-07-99 | GsU_03000001 
03000002 | 23-07-99 | GsU_03000002 
03000003 | 23-07-99 | GsU_03000003 
03000009 | 23-07-99 | GsU_03000009 
0300000A | 23-07-99 | GsU_0300000a 
0300000B | 23-07-99 | GsU_0300000b 
03000100 | 23-07-99 | GsU_03000100 
03000901 | 23-07-99 | GsU_03000901 
03000902 | 23-07-99 | GsU_03000902 
03000909 | 23-07-99 | GsU_03000909 
0300090A | 23-07-99 | GsU_0300090a 
03010110 | 23-07-99 | GsU_03010110 
03010111 | 23-07-99 | GsU_03010111 
03010112 | 23-07-99 | GsU_03010112 
03010121 | 23-07-99 | GsU_03010121 
03010122 | 23-07-99 | GsU_03010122 
03010141 | 23-07-99 | GsU_03010141 
03010142 | 23-07-99 | GsU_03010142 
03010171 | 23-07-99 | GsU_03010171 
03010172 | 23-07-99 | GsU_03010172 
03010182 | 23-07-99 | GsU_03010182 
03010210 | 23-07-99 | GsU_03010210 
03010211 | 23-07-99 | GsU_03010211 
03010212 | 23-07-99 | GsU_03010212 
03010221 | 23-07-99 | GsU_03010221 
03010222 | 23-07-99 | GsU_03010222 
03010241 | 23-07-99 | GsU_03010241 
03010242 | 23-07-99 | GsU_03010242 
03010271 | 23-07-99 | GsU_03010271 
03010272 | 23-07-99 | GsU_03010272 
03010310 | 23-07-99 | GsU_03010310 
03010311 | 23-07-99 | GsU_03010311 
03010312 | 23-07-99 | GsU_03010312 
03010321 | 23-07-99 | GsU_03010321 
03010322 | 23-07-99 | GsU_03010322 
03010341 | 23-07-99 | GsU_03010341 
03010342 | 23-07-99 | GsU_03010342 
03010371 | 23-07-99 | GsU_03010371 
03010372 | 23-07-99 | GsU_03010372 
04010011 | 23-07-99 | GsU_04010011 
04010018 | 23-07-99 | GsU_04010018 
04010019 | 23-07-99 | GsU_04010019 
04010028 | 23-07-99 | GsU_04010028 GsU_04010029 
07000100 | 23-07-99 | GsU_07000100 
07010100 | 23-07-99 | GsU_07010100 
07020100 | 23-07-99 | GsU_07020100 
07030100 | 23-07-99 | GsU_07030100 
00080008 | 23-07-99 | GsU_00080008 
00080009 | 23-07-99 | GsU_00080009 
0008000C | 23-07-99 | GsU_0008000c 
0008000D | 23-07-99 | GsU_0008000d 
00080010 | 23-07-99 | GsU_00080010 
00080011 | 23-07-99 | GsU_00080011 
00080014 | 23-07-99 | GsU_00080014 
00080015 | 23-07-99 | GsU_00080015 
000A0008 | 23-07-99 | GsU_000a0008 
000A0009 | 23-07-99 | GsU_000a0009 
000A000C | 23-07-99 | GsU_000a000c 
000A000D | 23-07-99 | GsU_000a000d 
000A0010 | 23-07-99 | GsU_000a0010 
000A0011 | 23-07-99 | GsU_000a0011 
000A0014 | 23-07-99 | GsU_000a0014 
000A0015 | 23-07-99 | GsU_000a0015 
000C0048 | 23-07-99 | GsU_000c0048 
000C0049 | 23-07-99 | GsU_000c0049 
000C004C | 23-07-99 | GsU_000c004c 
000C004D | 23-07-99 | GsU_000c004d 
000C0050 | 23-07-99 | GsU_000c0050 
000C0051 | 23-07-99 | GsU_000c0051 
000C0054 | 23-07-99 | GsU_000c0054 
000C0055 | 23-07-99 | GsU_000c0055 
04010010 | 23-07-99 | GsU_04010010 
04010020 | 23-07-99 | GsU_04010020 GsU_04010021 
05000000 | 23-07-99 | GsU_05000000 
05000001 | 23-07-99 | GsU_05000001 
06000100 | 23-07-99 | GsU_06000100 
0600100C | 23-07-99 | GsU_0600100c 
06001014 | 23-07-99 | GsU_06001014 
0600110C | 23-07-99 | GsU_0600110c 
06001114 | 23-07-99 | GsU_06001114 
0600200C | 23-07-99 | GsU_0600200c 
06002014 | 23-07-99 | GsU_06002014 
0600300C | 23-07-99 | GsU_0600300c 
06003014 | 23-07-99 | GsU_06003014 
0600400C | 23-07-99 | GsU_0600400c 
06004014 | 23-07-99 | GsU_06004014 
0600500C | 23-07-99 | GsU_0600500c 
06005014 | 23-07-99 | GsU_06005014 
07000200 | 23-07-99 | GsU_07000200 
07010200 | 23-07-99 | GsU_07010200 
07020200 | 23-07-99 | GsU_07020200 
07030200 | 23-07-99 | GsU_07030200 
00140048 | 23-07-99 | GsU_00140048 
00140049 | 23-07-99 | GsU_00140049 
0014004C | 23-07-99 | GsU_0014004c 
0014004D | 23-07-99 | GsU_0014004d 
00140050 | 23-07-99 | GsU_00140050 
00140051 | 23-07-99 | GsU_00140051 
00140054 | 23-07-99 | GsU_00140054 
00140055 | 23-07-99 | GsU_00140055 
00140249 | 23-07-99 | GsU_00140249 
0014024D | 23-07-99 | GsU_0014024d 
00140251 | 23-07-99 | GsU_00140251 
00140255 | 23-07-99 | GsU_00140255 
00340048 | 23-07-99 | GsU_00340048 
00340049 | 23-07-99 | GsU_00340049 
0034004C | 23-07-99 | GsU_0034004c 
0034004D | 23-07-99 | GsU_0034004d 
00340050 | 23-07-99 | GsU_00340050 
00340051 | 23-07-99 | GsU_00340051 
00340054 | 23-07-99 | GsU_00340054 
00340055 | 23-07-99 | GsU_00340055 
00340249 | 23-07-99 | GsU_00340249 
0034024D | 23-07-99 | GsU_0034024d 
00340251 | 23-07-99 | GsU_00340251 
00340255 | 23-07-99 | GsU_00340255 
01140048 | 23-07-99 | GsU_01140048 
01140049 | 23-07-99 | GsU_01140049 
0114004C | 23-07-99 | GsU_0114004c 
0114004D | 23-07-99 | GsU_0114004d 
01140050 | 23-07-99 | GsU_01140050 
01140051 | 23-07-99 | GsU_01140051 
01140054 | 23-07-99 | GsU_01140054 
01140055 | 23-07-99 | GsU_01140055 
01140249 | 23-07-99 | GsU_01140249 
0114024D | 23-07-99 | GsU_0114024d 
01140251 | 23-07-99 | GsU_01140251 
01140255 | 23-07-99 | GsU_01140255 
01340048 | 23-07-99 | GsU_01340048 
01340049 | 23-07-99 | GsU_01340049 
0134004C | 23-07-99 | GsU_0134004c 
0134004D | 23-07-99 | GsU_0134004d 
01340050 | 23-07-99 | GsU_01340050 
01340051 | 23-07-99 | GsU_01340051 
01340054 | 23-07-99 | GsU_01340054 
01340055 | 23-07-99 | GsU_01340055 
01340249 | 23-07-99 | GsU_01340249 
0134024D | 23-07-99 | GsU_0134024d 
01340251 | 23-07-99 | GsU_01340251 
01340255 | 23-07-99 | GsU_01340255 
0020000A | 23-07-99 | GsU_0020000a 
0020000B | 23-07-99 | GsU_0020000b 
0020000E | 23-07-99 | GsU_0020000e 
0020000F | 23-07-99 | GsU_0020000f 
00200012 | 23-07-99 | GsU_00200012 
00200013 | 23-07-99 | GsU_00200013 
00200016 | 23-07-99 | GsU_00200016 
00200017 | 23-07-99 | GsU_00200017 
0020020B | 23-07-99 | GsU_0020020b 
0020020F | 23-07-99 | GsU_0020020f 
00200213 | 23-07-99 | GsU_00200213 
00200217 | 23-07-99 | GsU_00200217 
0030000A | 23-07-99 | GsU_0030000a 
0030000B | 23-07-99 | GsU_0030000b 
0030000E | 23-07-99 | GsU_0030000e 
0030000F | 23-07-99 | GsU_0030000f 
00300012 | 23-07-99 | GsU_00300012 
00300013 | 23-07-99 | GsU_00300013 
00300016 | 23-07-99 | GsU_00300016 
00300017 | 23-07-99 | GsU_00300017 
0030020B | 23-07-99 | GsU_0030020b 
0030020F | 23-07-99 | GsU_0030020f 
00300213 | 23-07-99 | GsU_00300213 
00300217 | 23-07-99 | GsU_00300217 
0120000E | 23-07-99 | GsU_0120000e 
0120000F | 23-07-99 | GsU_0120000f 
01200016 | 23-07-99 | GsU_01200016 
01200017 | 23-07-99 | GsU_01200017 
0120020F | 23-07-99 | GsU_0120020f 
01200217 | 23-07-99 | GsU_01200217 
03000010 | 23-07-99 | GsU_03000010 
03001010 | 23-07-99 | GsU_03001010 
03002010 | 23-07-99 | GsU_03002010 
03003010 | 23-07-99 | GsU_03003010 
03004010 | 23-07-99 | GsU_03004010 
03005010 | 23-07-99 | GsU_03005010 
03000011 | 23-07-99 | GsU_03000011 
03001011 | 23-07-99 | GsU_03001011 
03002011 | 23-07-99 | GsU_03002011 
03003011 | 23-07-99 | GsU_03003011 
03004011 | 23-07-99 | GsU_03004011 
03005011 | 23-07-99 | GsU_03005011 
03000012 | 23-07-99 | GsU_03000012 
03001012 | 23-07-99 | GsU_03001012 
03002012 | 23-07-99 | GsU_03002012 
03003012 | 23-07-99 | GsU_03003012 
03004012 | 23-07-99 | GsU_03004012 
03005012 | 23-07-99 | GsU_03005012 
03000013 | 23-07-99 | GsU_03000013 
03001013 | 23-07-99 | GsU_03001013 
03002013 | 23-07-99 | GsU_03002013 
03003013 | 23-07-99 | GsU_03003013 
03004013 | 23-07-99 | GsU_03004013 
03005013 | 23-07-99 | GsU_03005013 
03000019 | 23-07-99 | GsU_03000019 
03001019 | 23-07-99 | GsU_03001019 
03002019 | 23-07-99 | GsU_03002019 
03003019 | 23-07-99 | GsU_03003019 
03004019 | 23-07-99 | GsU_03004019 
03005019 | 23-07-99 | GsU_03005019 
0300001A | 23-07-99 | GsU_0300001a 
0300101A | 23-07-99 | GsU_0300101a 
0300201A | 23-07-99 | GsU_0300201a 
0300301A | 23-07-99 | GsU_0300301a 
0300401A | 23-07-99 | GsU_0300401a 
0300501A | 23-07-99 | GsU_0300501a 
0300001B | 23-07-99 | GsU_0300001b 
0300101B | 23-07-99 | GsU_0300101b 
0300201B | 23-07-99 | GsU_0300201b 
0300301B | 23-07-99 | GsU_0300301b 
0300401B | 23-07-99 | GsU_0300401b 
0300501B | 23-07-99 | GsU_0300501b 
03000020 | 23-07-99 | GsU_03000020 
03001020 | 23-07-99 | GsU_03001020 
03002020 | 23-07-99 | GsU_03002020 
03003020 | 23-07-99 | GsU_03003020 
03004020 | 23-07-99 | GsU_03004020 
03005020 | 23-07-99 | GsU_03005020 
03000021 | 23-07-99 | GsU_03000021 
03001021 | 23-07-99 | GsU_03001021 
03002021 | 23-07-99 | GsU_03002021 
03003021 | 23-07-99 | GsU_03003021 
03004021 | 23-07-99 | GsU_03004021 
03005021 | 23-07-99 | GsU_03005021 
03000022 | 23-07-99 | GsU_03000022 
03001022 | 23-07-99 | GsU_03001022 
03002022 | 23-07-99 | GsU_03002022 
03003022 | 23-07-99 | GsU_03003022 
03004022 | 23-07-99 | GsU_03004022 
03005022 | 23-07-99 | GsU_03005022 
03000023 | 23-07-99 | GsU_03000023 
03001023 | 23-07-99 | GsU_03001023 
03002023 | 23-07-99 | GsU_03002023 
03003023 | 23-07-99 | GsU_03003023 
03004023 | 23-07-99 | GsU_03004023 
03005023 | 23-07-99 | GsU_03005023 
03000029 | 23-07-99 | GsU_03000029 
03001029 | 23-07-99 | GsU_03001029 
03002029 | 23-07-99 | GsU_03002029 
03003029 | 23-07-99 | GsU_03003029 
03004029 | 23-07-99 | GsU_03004029 
03005029 | 23-07-99 | GsU_03005029 
0300002A | 23-07-99 | GsU_0300002a 
0300102A | 23-07-99 | GsU_0300102a 
0300202A | 23-07-99 | GsU_0300202a 
0300302A | 23-07-99 | GsU_0300302a 
0300402A | 23-07-99 | GsU_0300402a 
0300502A | 23-07-99 | GsU_0300502a 
0300002B | 23-07-99 | GsU_0300002b 
0300102B | 23-07-99 | GsU_0300102b 
0300202B | 23-07-99 | GsU_0300202b 
0300302B | 23-07-99 | GsU_0300302b 
0300402B | 23-07-99 | GsU_0300402b 
0300502B | 23-07-99 | GsU_0300502b 
03000030 | 23-07-99 | GsU_03000030 
03001030 | 23-07-99 | GsU_03001030 
03002030 | 23-07-99 | GsU_03002030 
03003030 | 23-07-99 | GsU_03003030 
03004030 | 23-07-99 | GsU_03004030 
03005030 | 23-07-99 | GsU_03005030 
03000031 | 23-07-99 | GsU_03000031 
03001031 | 23-07-99 | GsU_03001031 
03002031 | 23-07-99 | GsU_03002031 
03003031 | 23-07-99 | GsU_03003031 
03004031 | 23-07-99 | GsU_03004031 
03005031 | 23-07-99 | GsU_03005031 
03000032 | 23-07-99 | GsU_03000032 
03001032 | 23-07-99 | GsU_03001032 
03002032 | 23-07-99 | GsU_03002032 
03003032 | 23-07-99 | GsU_03003032 
03004032 | 23-07-99 | GsU_03004032 
03005032 | 23-07-99 | GsU_03005032 
03000033 | 23-07-99 | GsU_03000033 
03001033 | 23-07-99 | GsU_03001033 
03002033 | 23-07-99 | GsU_03002033 
03003033 | 23-07-99 | GsU_03003033 
03004033 | 23-07-99 | GsU_03004033 
03005033 | 23-07-99 | GsU_03005033 
03000039 | 23-07-99 | GsU_03000039 
03001039 | 23-07-99 | GsU_03001039 
03002039 | 23-07-99 | GsU_03002039 
03003039 | 23-07-99 | GsU_03003039 
03004039 | 23-07-99 | GsU_03004039 
03005039 | 23-07-99 | GsU_03005039 
0300003A | 23-07-99 | GsU_0300003a 
0300103A | 23-07-99 | GsU_0300103a 
0300203A | 23-07-99 | GsU_0300203a 
0300303A | 23-07-99 | GsU_0300303a 
0300403A | 23-07-99 | GsU_0300403a 
0300503A | 23-07-99 | GsU_0300503a 
0300003B | 23-07-99 | GsU_0300003b 
0300103B | 23-07-99 | GsU_0300103b 
0300203B | 23-07-99 | GsU_0300203b 
0300303B | 23-07-99 | GsU_0300303b 
0300403B | 23-07-99 | GsU_0300403b 
0300503B | 23-07-99 | GsU_0300503b 
03000111 | 23-07-99 | GsU_03000111 
03001111 | 23-07-99 | GsU_03001111 
03002111 | 23-07-99 | GsU_03002111 
03003111 | 23-07-99 | GsU_03003111 
03004111 | 23-07-99 | GsU_03004111 
03005111 | 23-07-99 | GsU_03005111 
03000112 | 23-07-99 | GsU_03000112 
03001112 | 23-07-99 | GsU_03001112 
03002112 | 23-07-99 | GsU_03002112 
03003112 | 23-07-99 | GsU_03003112 
03004112 | 23-07-99 | GsU_03004112 
03005112 | 23-07-99 | GsU_03005112 
03000119 | 23-07-99 | GsU_03000119 
03001119 | 23-07-99 | GsU_03001119 
03002119 | 23-07-99 | GsU_03002119 
03003119 | 23-07-99 | GsU_03003119 
03004119 | 23-07-99 | GsU_03004119 
03005119 | 23-07-99 | GsU_03005119 
0300011A | 23-07-99 | GsU_0300011a 
0300111A | 23-07-99 | GsU_0300111a 
0300211A | 23-07-99 | GsU_0300211a 
0300311A | 23-07-99 | GsU_0300311a 
0300411A | 23-07-99 | GsU_0300411a 
0300511A | 23-07-99 | GsU_0300511a 
03000910 | 23-07-99 | GsU_03000910 
03001910 | 23-07-99 | GsU_03001910 
03002910 | 23-07-99 | GsU_03002910 
03003910 | 23-07-99 | GsU_03003910 
03004910 | 23-07-99 | GsU_03004910 
03005910 | 23-07-99 | GsU_03005910 
03000911 | 23-07-99 | GsU_03000911 
03001911 | 23-07-99 | GsU_03001911 
03002911 | 23-07-99 | GsU_03002911 
03003911 | 23-07-99 | GsU_03003911 
03004911 | 23-07-99 | GsU_03004911 
03005911 | 23-07-99 | GsU_03005911 
03000912 | 23-07-99 | GsU_03000912 
03001912 | 23-07-99 | GsU_03001912 
03002912 | 23-07-99 | GsU_03002912 
03003912 | 23-07-99 | GsU_03003912 
03004912 | 23-07-99 | GsU_03004912 
03005912 | 23-07-99 | GsU_03005912 
03000919 | 23-07-99 | GsU_03000919 
03001919 | 23-07-99 | GsU_03001919 
03002919 | 23-07-99 | GsU_03002919 
03003919 | 23-07-99 | GsU_03003919 
03004919 | 23-07-99 | GsU_03004919 
03005919 | 23-07-99 | GsU_03005919 
0300091A | 23-07-99 | GsU_0300091a 
0300191A | 23-07-99 | GsU_0300191a 
0300291A | 23-07-99 | GsU_0300291a 
0300391A | 23-07-99 | GsU_0300391a 
0300491A | 23-07-99 | GsU_0300491a 
0300591A | 23-07-99 | GsU_0300591a 
MIME_S   | 23-07-99 | GsVNMIMeFunc GsRestoreOrgsVNMIMe 
SCANUNIT | 23-07-99 | GsScanUnit GsGetHeadpUnit 
SORTUNIT | 23-07-99 | GsSortUnit 
MAPUNIT  | 23-07-99 | GsMapUnit *USTACK 
CMAPUNIT | 23-07-99 | GsMapCoordUnit 
LWUNIT   | 23-07-99 | GsGetLwUnit 
LSUNIT   | 23-07-99 | GsGetLsUnit 
LWSUNIT  | 23-07-99 | GsGetLwsUnit 
VWUNIT   | 23-07-99 | GsSetViewUnit 
RVWUNIT  | 23-07-99 | GsSetRefViewUnit 
RVWLUNIT | 23-07-99 | GsSetRefViewLUnit 

# LIBMATH
Basic Maths library that supports floating point operations.

Module  |   Date  |  Externals defined
--- | --- | ---
ADDDF3   | 23-07-99 | __adddf3 
ADDMANT  | 23-07-99 | _add_mant_d 
ADDSF3   | 23-07-99 | __addsf3 
DBSHIFT  | 23-07-99 | _dbl_shift 
DBSHIFTU | 23-07-99 | _dbl_shift_us 
DIVDF3   | 23-07-99 | __divdf3 _comp_mant 
DIVSF3   | 23-07-99 | __divsf3 
EQDF2    | 23-07-99 | __eqdf2 
EQSF2    | 23-07-99 | __eqsf2 
EXTSFDF2 | 23-07-99 | __extendsfdf2 
FIXDFSI  | 23-07-99 | __fixdfsi 
FIXSFSI  | 23-07-99 | __fixsfsi 
FIXUDFSI | 23-07-99 | __fixunsdfsi 
FIXUSFSI | 23-07-99 | __fixunssfsi 
FLTSIDF  | 23-07-99 | __floatsidf 
FLTSISF  | 23-07-99 | __floatsisf 
GEDF2    | 23-07-99 | __gedf2 
GESF2    | 23-07-99 | __gesf2 
GTDF2    | 23-07-99 | __gtdf2 
GTSF2    | 23-07-99 | __gtsf2 
LEDF2    | 23-07-99 | __ledf2 
LESF2    | 23-07-99 | __lesf2 
LTDF2    | 23-07-99 | __ltdf2 
LTSF2    | 23-07-99 | __ltsf2 
MAINASU  | 23-07-99 | _mainasu 
MULDF3   | 23-07-99 | __muldf3 _mul_mant_d 
MULSF3   | 23-07-99 | __mulsf3 
NEDF2    | 23-07-99 | __nedf2 
NEGDF2   | 23-07-99 | __negdf2 
NEGSF2   | 23-07-99 | __negsf2 
NESF2    | 23-07-99 | __nesf2 
SUBDF3   | 23-07-99 | __subdf3 
SUBSF3   | 23-07-99 | __subsf3 
TRUDFSF2 | 23-07-99 | __truncdfsf2 
FERR     | 23-07-99 | math_errno math_err_point _err_math 
ARC00    | 23-07-99 | atan 
ARC01    | 23-07-99 | atan2 
ARC02    | 23-07-99 | asin 
ARC03    | 23-07-99 | acos 
EXP      | 23-07-99 | exp 
FLOOR00  | 23-07-99 | floor 
FLOOR01  | 23-07-99 | ceil 
HYPOT    | 23-07-99 | hypot 
LDEXP00  | 23-07-99 | ldexp 
LDEXP01  | 23-07-99 | frexp 
LOG00    | 23-07-99 | log 
LOG01    | 23-07-99 | log10 
MODF00   | 23-07-99 | modf 
MODF01   | 23-07-99 | fmod 
POW      | 23-07-99 | pow 
SIN00    | 23-07-99 | tan sin 
SIN01    | 23-07-99 | cos 
SINH00   | 23-07-99 | sinh 
SINH01   | 23-07-99 | cosh 
SINH02   | 23-07-99 | tanh 
SQRT     | 23-07-99 | sqrt 
PRINTF2  | 23-07-99 | printf2 sprintf2 
STRTOD00 | 23-07-99 | atof 
STRTOD01 | 23-07-99 | strtod 

# LIBMCRD (Extended Memory card)
Higher level library for using the playstation memory cards, higherlevel than libcard.

Module  |   Date  |  Externals defined
--- | --- | ---
INIT     | 23-07-99 | MemCardInit MemCardEnd 
LIBMCRD  | 23-07-99 | PushCallbackFunc MemCardCallback PullCallbackFunc McrdGetGlobalStructure MemCardStart MemCardStop MemCardExist MemCardAccept MemCardOpen MemCardSync MemCardClose MemCardReadData MemCardWriteData MemCardReadFile MemCardWriteFile MemCardGetDirentry MemCardCreateFile MemCardFormat 
USERFUNC | 23-07-99 | UserFuncInit UserFuncOpen UserFuncExecute UserFuncComplete 
BIOS     | 23-07-99 | funcEvSpIOE funcEvSpError funcEvSpTimeout funcEvSpNewcard funcEvSpIOEx funcEvSpErrorx funcEvSpTimeoutx funcEvSpNewcardx _card_open _card_start _clr_card_event _card_close _card_stop _get_card_event _get_card_event_x _chk_card_event _chk_card_event_x 
LOW      | 23-07-99 | _card_format2 _card_create2 
DELETE   | 23-07-99 | MemCardDeleteFile 
UNFORMAT | 23-07-99 | MemCardUnformat 

# LIBMCX - PocketStation
Provides functions to control the PocketStation (a playstation memory card with a screen that can run ARM code) (reffered to as PDA in the official developer documentation.

Module  |   Date  |  Externals defined
--- | --- | ---
MCXCMD1  | 23-07-99 | McxGetApl 
MCXCMD2  | 23-07-99 | McxExecApl 
MCXCMD3  | 23-07-99 | _mcxRxRestLen 
MCXCMD4  | 23-07-99 | McxGetTime 
MCXCMD5  | 23-07-99 | McxGetMem 
MCXCMD6  | 23-07-99 | _mcxTxGetMem _mcxRxGetMem 
MCXCMD7  | 23-07-99 | McxSetMem 
MCXCMD8  | 23-07-99 | _mcxTxSetMem _mcxRxSetMem 
MCXCMD9  | 23-07-99 | McxReadDev 
MCXCMD10 | 23-07-99 | _mcxTxReadDev _mcxRxReadDev 
MCXCMD11 | 23-07-99 | McxWriteDev 
MCXCMD12 | 23-07-99 | _mcxTxWriteDev _mcxRxWriteDev 
MCXCMD13 | 23-07-99 | McxSetTime 
MCXCMD14 | 23-07-99 | McxGetUIFS 
MCXCMD15 | 23-07-99 | McxSetUIFS 
MCXCMD16 | 23-07-99 | McxShowTrans 
MCXCMD17 | 23-07-99 | _mcxTxSetTrans 
MCXCMD18 | 23-07-99 | McxHideTrans 
MCXCMD19 | 23-07-99 | McxCurrCtrl 
MCXCMD20 | 23-07-99 | McxFlashAcs 
MCXCMD21 | 23-07-99 | McxGetSerial 
MCXCMD22 | 23-07-99 | McxSetLED 
MCXCMD23 | 23-07-99 | McxCardType McxGetMcxInfo 
MCXCMD24 | 23-07-99 | McxAllInfo 
MCXCMD25 | 23-07-99 | McxExecFlag 
MCXCMD26 | 23-07-99 | McxGetInfo 
MCXCMD27 | 23-07-99 | chkMemArea 
MCXRESI  | 23-07-99 | _mcxTblCardEnt _mcxTblDsrEnt _mcxStat _mcxCmdSeq _mcxPort _mcxPass _mcxUIFSretry _mcxTxLen _mcxRxLen *_mcxFuncNo _mcxChkRsrv *_mcxRestSize _mcxStepSio *_mcxTxBuf *_mcxFuncGetTx *_mcxRxBuf *_mcxFuncApplyRx *_mcxDataLen *_mcxPtrBuff *_mcxSum *_mcxPtrCmdBuf0 *_mcxPtrCmdBuf1 *_mcxParam *_mcxFlag 
MCXINIT  | 23-07-99 | McxStartCom McxStopCom 
MCXMAIN  | 23-07-99 | _mcxDsrEntry _mcxInitSioMode _mcxSetRC2wait _mcxChkRC2wait _mcxSioRW McxSync 
MCXDSR   | 23-07-99 | _mcxStartFastDsr _mcxStopFastDsr _mcxFastDsrEnt _mcxIntRestSize _mcxCallFromC _mcxVecDsr _mcxVecSave 

# LIBPAD
The `LIBPAD.LIB` library is used to interface with the game pads (controllers), including Dual shock controllers.

Module  |   Date  |  Externals defined
--- | --- | ---
PDCMD1   | 23-07-99 | PadSetAct 
PDCMD2   | 23-07-99 | PadSetActAlign 
PDCMD3   | 23-07-99 | PadSetMainMode 
PDENT1   | 23-07-99 | PadChkMtap 
PDENT2   | 23-07-99 | PadGetState 
PDENT3   | 23-07-99 | PadInfoMode 
PDENT4   | 23-07-99 | PadInfoAct 
PDENT5   | 23-07-99 | PadInfoComb 
PDGUNRES | 23-07-99 | _padGunResultPtr _padGunHitCntPtr _padGunEnalePort _padGunMachType oldVcount _padSetIntH2000 _padGetGunPos *_padGunPosRecv _padSetGunPort *_padGunSavePadPtr *_padGunSaveTxBuf *_padGunSaveTxLen 
PDGN1INI | 23-07-99 | PadInitGun 
PDGN2INI | 23-07-99 | PadEnableGun 
PDGUN    | 23-07-99 | PadRemoveGun 
PDMAIINI | 23-07-99 | PadStartCom PadStopCom 
PDMAIN1  | 23-07-99 | PadEnableCom 
PDMAIN2  | 23-07-99 | PadChkVsync 
PDDIRINI | 23-07-99 | PadInitDirect 
PDTAPINI | 23-07-99 | PadInitMtap 
PDDIRRES | 23-07-99 | _padInitDirPort _dirFailAuto 
PDTAPRES | 23-07-99 | _mtapLastResult _padInitMtapPort _mtapFailAuto 
PDRESRES | 23-07-99 | _padFuncNextPort _padFuncClrInfo _padFuncGetTxd _padFuncCurrLimit _padFuncPtr2Port _padFuncPort2Info _padFuncSendAuto _padFuncChkEng _padFuncRecvAuto _padFuncClrCmdNo _padFuncIntGun _padFuncSetGunPort _padFuncGetGunPos _padInfoDir _padIntExec _padGunExec _padSioChan _padSioState _padTotalCurr _padModeMtap _padChanStart _padChanStop _padFixResult _padVsyncParam _padIntPad _padIsVsync _padCalledIntPad *_padRestPeriod _padInitSioMode _padSetRC2wait _padChkRC2wait _padClrIntSio0 _padWaitRXready _padSioRW _padSioRW2 _padSetCmd _padSendAtLoadInfo _padRecvAtLoadInfo _padGetActSize _padLoadActInfo _padCmdParaMode 
PDHOKRES | 23-07-99 | *_padGunPosHbuf *_padGunPosVbuf _padGunInitHook _padGunExitHook _padGetHitCount _padClrHitCount 

# LIBPress
LIBPress is a compression library that can compress and decompress sound and image data using a few different compression algorithms such as DCT (Discrete Cosine Transform), BVQ (Block Vector Quantization) and Huffman Encoding.

Module  |   Date  |  Externals defined
--- | --- | ---
LIBPRESS | 23-07-99 | DecDCTReset DecDCTGetEnv DecDCTPutEnv DecDCTin DecDCTout DecDCTinSync DecDCToutSync DecDCTinCallback DecDCToutCallback 
VLC      | 23-07-99 | DecDCTvlcSize DecDCTvlc 
VLC_C    | 23-07-99 | DecDCTvlcSize2 DecDCTvlc2 
BUILD    | 23-07-99 | DecDCTvlcBuild 
ENCSPU   | 23-07-99 | EncSPU 
ENCSPU2  | 23-07-99 | EncSPU2 
TABLE    | 23-07-99 | CF_DVLC CF2_DVLC 
DCT002   | 23-07-99 | DecDCTBufSize 
TBL_001  | 23-07-99 | DCL_DVLC 
TBL_002  | 23-07-99 | DCC_DVLC 

# LIBSIO
LibSIO is a standard input output library for development kits to connect to and from PC,so you can write out debugging information to the PC.

Module  |   Date  |  Externals defined
--- | --- | ---
SIOHANDL | 23-07-99 | *siobuf _sio_driver siocons DelSIO AddSIO 
LIBSIO   | 23-07-99 | _cdevinput _cdevscan _circgetc _ioabort add_nullcon_driver 
SIO      | 23-07-99 | _sio_control *cntl *mode *baud 
SIOCB    | 23-07-99 | Sio1Callback 

# LIBSN
LibSN (Sn systems reference?) is a very low-level library for managing the stack pointer (SP along with access to the PC).
It is used along with 2MByte and 8MByte.obj files.

Module  |   Date  |  Externals defined
--- | --- | ---
OPEN     | 20-09-95 | PCopen 
CLOSE    | 20-09-95 | PCclose 
LSEEK    | 20-09-95 | PClseek 
CREAT    | 20-09-95 | PCcreat 
SNREAD   | 20-09-95 | _SN_read 
SNMAIN   | 20-09-95 | __bss __heapsize __SN_ENTRY_POINT __bsslen __data  __main __text __datalen __textlen  __do_global_dtors __heapbase 
FSINIT   | 20-09-95 | PCinit 
SNWRITE  | 20-09-95 | _SN_write 
READ     | 20-09-95 | PCread 
WRITE    | 20-09-95 | PCwrite 
SNDEF    | 20-09-95 | _stacksize _ramsize 
PUREV    | 20-09-95 | __pure_virtual 
CACHE    | 20-09-95 | SNFlushCache 
_ASHLDI3 | 20-09-95 | __ashldi3 
_ASHRDI3 | 20-09-95 | __ashrdi3 
_CMPDI2  | 20-09-95 | __cmpdi2 
_DIVDI3  | 20-09-95 | __divdi3 
_EH      | 20-09-95 | __throw_type_match __register_exceptions __find_first_exception_table_match 
_FFSDI2  | 20-09-95 | __ffsdi2 
_FXDFDI  | 20-09-95 | __fixdfdi 
_FXSFDI  | 20-09-95 | __fixsfdi 
_FXTFDI  | 20-09-95 | 
_FXUSDFD | 20-09-95 | __fixunsdfdi 
_FIXUSDF | 20-09-95 | __fixunsdfsi 
_FXUSSFD | 20-09-95 | __fixunssfdi 
_FXUSSFS | 20-09-95 | __fixunssfsi 
_FXUSTFD | 20-09-95 | 
_FXUSXFD | 20-09-95 | 
_FXUSXFS | 20-09-95 | 
_FXXFDI  | 20-09-95 | 
_FLTDIDF | 20-09-95 | __floatdidf 
_FLTDISF | 20-09-95 | __floatdisf 
_FLTDITF | 20-09-95 | 
_FLTDIXF | 20-09-95 | 
_LSHLDI3 | 20-09-95 | __lshldi3 
_LSHRDI3 | 20-09-95 | __lshrdi3 
_MODDI3  | 20-09-95 | __moddi3 
_MULDI3  | 20-09-95 | __muldi3 
_NEGDI2  | 20-09-95 | __negdi2 
_NEW_HAN | 20-09-95 | set_new_handler __new_handler  __default_new_handler 
_OP_DELE | 20-09-95 | __builtin_delete 
_OP_NEW  | 20-09-95 | __builtin_new 
_OP_VDEL | 20-09-95 | __builtin_vec_delete 
_OP_VNEW | 20-09-95 | __builtin_vec_new 
_SHTAB   | 20-09-95 | __shtab 
_TRAMPOL | 20-09-95 | 
_UCMPDI2 | 20-09-95 | __ucmpdi2 
_UDIVDI3 | 20-09-95 | __udivdi3 
_UDIVMOD | 20-09-95 | __udivmoddi4 
_UDIV_W_ | 20-09-95 | __udiv_w_sdiv 
_UMODDI3 | 20-09-95 | __umoddi3 
_VARARGS | 20-09-95 | __builtin_saveregs 
__GCC_BC | 20-09-95 | __gcc_bcmp 

# LIBSND
LibSND is the extended sound library that is at a higher level than the basic libspu, it can play VAB and SEQ audio files, along with a variety of different sound effects.

Module  |   Date  |  Externals defined
--- | --- | ---
CCADSR   | 23-07-99 | _SsUtResolveADSR _SsUtBuildADSR 
CC_0     | 23-07-99 | _SsContBankChange 
CC_6     | 23-07-99 | _SsContDataEntry 
CC_7     | 23-07-99 | _SsContMainVol 
CC_10    | 23-07-99 | _SsContPanpot 
CC_11    | 23-07-99 | _SsContExpression 
CC_64    | 23-07-99 | _SsContDamper 
CC_91    | 23-07-99 | _SsContExternal 
CC_98    | 23-07-99 | _SsContNrpn1 
CC_99    | 23-07-99 | _SsContNrpn2 
CC_100   | 23-07-99 | _SsContRpn1 
CC_101   | 23-07-99 | _SsContRpn2 
CC_121   | 23-07-99 | _SsContResetAll 
DE_0     | 23-07-99 | _SsSetNrpnVabAttr0 
DE_1     | 23-07-99 | _SsSetNrpnVabAttr1 
DE_2     | 23-07-99 | _SsSetNrpnVabAttr2 
DE_3     | 23-07-99 | _SsSetNrpnVabAttr3 
DE_4     | 23-07-99 | _SsSetNrpnVabAttr4 
DE_5     | 23-07-99 | _SsSetNrpnVabAttr5 
DE_6     | 23-07-99 | _SsSetNrpnVabAttr6 
DE_7     | 23-07-99 | _SsSetNrpnVabAttr7 
DE_8     | 23-07-99 | _SsSetNrpnVabAttr8 
DE_9     | 23-07-99 | _SsSetNrpnVabAttr9 
DE_10    | 23-07-99 | _SsSetNrpnVabAttr10 
DE_11    | 23-07-99 | _SsSetNrpnVabAttr11 
DE_12    | 23-07-99 | _SsSetNrpnVabAttr12 
DE_13    | 23-07-99 | _SsSetNrpnVabAttr13 
DE_14    | 23-07-99 | _SsSetNrpnVabAttr14 
DE_15    | 23-07-99 | _SsSetNrpnVabAttr15 
DE_16    | 23-07-99 | _SsSetNrpnVabAttr16 
DE_17    | 23-07-99 | _SsSetNrpnVabAttr17 
DE_18    | 23-07-99 | _SsSetNrpnVabAttr18 
DE_19    | 23-07-99 | _SsSetNrpnVabAttr19 
CRES     | 23-07-99 | _SsSndCrescendo 
DECRES   | 23-07-99 | 
MIDIBEND | 23-07-99 | _SsSetPitchBend 
MIDICC   | 23-07-99 | _SsSetControlChange 
MIDIMETA | 23-07-99 | _SsGetMetaEvent 
MIDINOTE | 23-07-99 | _SsNoteOn 
MIDIPROG | 23-07-99 | _SsSetProgramChange 
MIDIREAD | 23-07-99 | _SsSeqPlay _SsGetSeqData _SsSeqGetEof 
MIDITIME | 23-07-99 | _SsReadDeltaValue 
NEXT     | 23-07-99 | _SsSndNextSep 
NPAUSE   | 23-07-99 | _SsSndNextPause 
PAUSE    | 23-07-99 | _SsSndPause 
PLAY     | 23-07-99 | _SsSndPlay 
REPLAY   | 23-07-99 | _SsSndReplay 
SEPINIT  | 23-07-99 | _SsInitSoundSep 
SEQINIT  | 23-07-99 | _SsInitSoundSeq 
SSACCELE | 23-07-99 | _SsSndSetAccele SsSeqSetAccelerando SsSepSetAccelerando 
SSCALL   | 23-07-99 | SsSeqCalledTbyT 
SSCLOSE  | 23-07-99 | SsSeqClose SsSepClose 
SSCMUTE  | 23-07-99 | SsChannelMute 
SSGCMUTE | 23-07-99 | SsGetChannelMute 
SSCRES   | 23-07-99 | _SsSndSetCres SsSeqSetCrescendo SsSepSetCrescendo 
SSDECRES | 23-07-99 | _SsSndSetDecres SsSeqSetDecrescendo SsSepSetDecrescendo 
SSEND    | 23-07-99 | SsEnd 
SSGM     | 23-07-99 | SsGetMute 
SSGMV    | 23-07-99 | SsGetMVol 
SSGNC    | 23-07-99 | SsGetNck 
SSGRV    | 23-07-99 | SsGetRVol 
SSGSATTR | 23-07-99 | SsGetSerialAttr 
SSGSV    | 23-07-99 | SsGetSerialVol 
SSINIT   | 23-07-99 | _snd_vmask _SsInit *_SsMarkCallback *VBLANK_MINUS *_snd_openflag *_snd_ev_flag *SsFCALL *_ss_score *_snd_seq_s_max *_snd_seq_t_max 
SSINIT_C | 23-07-99 | SsInit 
SSINIT_H | 23-07-99 | SsInitHot 
SSLOOP   | 23-07-99 | SsSetLoop 
SSISEOS  | 23-07-99 | SsIsEos 
SSMARK   | 23-07-99 | SsSetMarkCallback 
SSNEXT   | 23-07-99 | SsSetNext 
SSNEXT_2 | 23-07-99 | SsSeqSetNext 
SSNOFF   | 23-07-99 | SsSetNoiseOff 
SSNON    | 23-07-99 | SsSetNoiseOn 
SSOPENP  | 23-07-99 | SsSepOpen 
SSOPENQ  | 23-07-99 | SsSeqOpen 
SSOPENPJ | 23-07-99 | SsSepOpenJ 
SSOPENQJ | 23-07-99 | SsSeqOpenJ 
SSPAUSE  | 23-07-99 | _SsSndSetPauseMode SsSeqPause SsSepPause 
SSPLAY   | 23-07-99 | SsSeqPlay 
SSPLAY_2 | 23-07-99 | SsSepPlay 
SSPLAYB  | 23-07-99 | SsPlayBack 
SSQUIT   | 23-07-99 | SsQuit 
SSREPLAY | 23-07-99 | _SsSndSetReplayMode SsSeqReplay SsSepReplay 
PLAYMODE | 23-07-99 | Snd_SetPlayMode 
SSRIT    | 23-07-99 | _SsSndSetRit SsSeqSetRitardando SsSepSetRitardando 
SSP      | 23-07-99 | SsSeqSkip 
SSSP     | 23-07-99 | SsSetCurrentPoint 
SSPPTP   | 23-07-99 | SsSeqPlayPtoP 
SSSATTR  | 23-07-99 | SsSetSerialAttr 
SSSM     | 23-07-99 | SsSetMute 
SSSMV    | 23-07-99 | SsSetMVol 
SSSNC    | 23-07-99 | SsSetNck 
SSSRV    | 23-07-99 | SsSetRVol 
SSSTART  | 23-07-99 | _snd_seq_tick_env SsStart SsStart2 
SSSTOP   | 23-07-99 | _SsSndStop SsSeqStop SsSepStop 
SSSV     | 23-07-99 | SsSetSerialVol 
SSTABLE  | 23-07-99 | SsSetTableSize 
SSTEMPO  | 23-07-99 | SsSetTempo 
SSTICK   | 23-07-99 | SsSetTickMode 
SSTICKCB | 23-07-99 | SsSetTickCallback 
SSVKOFF  | 23-07-99 | SsVoKeyOff 
SSVKON   | 23-07-99 | SsVoKeyOn 
SSVOL    | 23-07-99 | _SsSndSetVol SsSeqSetVol SsSepSetVol 
SSVOL_2  | 23-07-99 | SsSeqGetVol 
TEMPO    | 23-07-99 | _SsSndTempo 
VOL      | 23-07-99 | _SsSndSetVolData 
DMYNOT1  | 23-07-99 | dmy_nothing1 
DMYNOTE  | 23-07-99 | dmy_SsNoteOn 
DMYPROG  | 23-07-99 | dmy_SsSetProgramChange 
DMYMETA  | 23-07-99 | dmy_SsGetMetaEvent 
DMYBEND  | 23-07-99 | dmy_SsSetPitchBend 
DMYCC    | 23-07-99 | dmy_SsSetControlChange 
DMYCC_0  | 23-07-99 | dmy_SsContBankChange 
DMYCC_6  | 23-07-99 | dmy_SsContDataEntry 
DMYCC_7  | 23-07-99 | dmy_SsContMainVol 
DMYCC_10 | 23-07-99 | dmy_SsContPanpot 
DMYCC_11 | 23-07-99 | dmy_SsContExpression 
DMYCC_64 | 23-07-99 | dmy_SsContDamper 
DMYCC_91 | 23-07-99 | dmy_SsContExternal 
DMYCC_98 | 23-07-99 | dmy_SsContNrpn1 
DMYCC_99 | 23-07-99 | dmy_SsContNrpn2 
DMYCC100 | 23-07-99 | dmy_SsContRpn1 
DMYCC101 | 23-07-99 | dmy_SsContRpn2 
DMYCC121 | 23-07-99 | dmy_SsContResetAll 
DMYDE_0  | 23-07-99 | dmy_SsSetNrpnVabAttr0 
DMYDE_1  | 23-07-99 | dmy_SsSetNrpnVabAttr1 
DMYDE_2  | 23-07-99 | dmy_SsSetNrpnVabAttr2 
DMYDE_3  | 23-07-99 | dmy_SsSetNrpnVabAttr3 
DMYDE_4  | 23-07-99 | dmy_SsSetNrpnVabAttr4 
DMYDE_5  | 23-07-99 | dmy_SsSetNrpnVabAttr5 
DMYDE_6  | 23-07-99 | dmy_SsSetNrpnVabAttr6 
DMYDE_7  | 23-07-99 | dmy_SsSetNrpnVabAttr7 
DMYDE_8  | 23-07-99 | dmy_SsSetNrpnVabAttr8 
DMYDE_9  | 23-07-99 | dmy_SsSetNrpnVabAttr9 
DMYDE_10 | 23-07-99 | dmy_SsSetNrpnVabAttr10 
DMYDE_11 | 23-07-99 | dmy_SsSetNrpnVabAttr11 
DMYDE_12 | 23-07-99 | dmy_SsSetNrpnVabAttr12 
DMYDE_13 | 23-07-99 | dmy_SsSetNrpnVabAttr13 
DMYDE_14 | 23-07-99 | dmy_SsSetNrpnVabAttr14 
DMYDE_15 | 23-07-99 | dmy_SsSetNrpnVabAttr15 
DMYDE_16 | 23-07-99 | dmy_SsSetNrpnVabAttr16 
DMYDE_17 | 23-07-99 | dmy_SsSetNrpnVabAttr17 
DMYDE_18 | 23-07-99 | dmy_SsSetNrpnVabAttr18 
DMYDE_19 | 23-07-99 | dmy_SsSetNrpnVabAttr19 
SSGCP    | 23-07-99 | SsGetCurrentPoint 
SSVM     | 23-07-99 | SsSetVoiceMask 
SSVM_2   | 23-07-99 | SsGetVoiceMask 
UT_AKO   | 23-07-99 | SsUtAllKeyOff 
UT_AUTOP | 23-07-99 | SsUtAutoPan 
UT_AUTOV | 23-07-99 | SsUtAutoVol 
UT_CADSR | 23-07-99 | SsUtChangeADSR 
UT_CP    | 23-07-99 | SsUtChangePitch 
UT_F     | 23-07-99 | SsUtFlush 
UT_GPA   | 23-07-99 | SsUtGetProgAtr 
UT_GVA   | 23-07-99 | SsUtGetVagAtr 
UT_GVAD  | 23-07-99 | SsUtGetVagAddr 
UT_GVAFT | 23-07-99 | SsUtGetVagAddrFromTone 
UT_GVBA  | 23-07-99 | SsUtGetVBaddrInSB 
UT_GVH   | 23-07-99 | SsUtGetVabHdr 
UT_KEY   | 23-07-99 | SsUtKeyOn SsUtKeyOff 
UT_KEYV  | 23-07-99 | SsUtKeyOnV SsUtKeyOffV 
UT_PB    | 23-07-99 | SsUtPitchBend 
UT_RDEL  | 23-07-99 | SsUtSetReverbDelay 
UT_RDEP  | 23-07-99 | SsUtSetReverbDepth 
UT_REV   | 23-07-99 | SsUtSetReverbType 
UT_REV_2 | 23-07-99 | SsUtGetReverbType 
UT_RFB   | 23-07-99 | SsUtSetReverbFeedback 
UT_ROFF  | 23-07-99 | SsUtReverbOff 
UT_RON   | 23-07-99 | SsUtReverbOn 
UT_SPA   | 23-07-99 | SsUtSetProgAtr 
UT_SVA   | 23-07-99 | SsUtSetVagAtr 
UT_SVH   | 23-07-99 | SsUtSetVabHdr 
UT_VVOL  | 23-07-99 | SsUtGetDetVVol 
UT_VVOL2 | 23-07-99 | SsUtSetDetVVol 
UT_VVOL3 | 23-07-99 | SsUtGetVVol 
UT_VVOL4 | 23-07-99 | SsUtSetVVol 
VM_ALOC1 | 23-07-99 | _SsVmAlloc 
VM_ALOC2 | 23-07-99 | _SsVmDoAllocate 
VM_AUTOP | 23-07-99 | SeAutoPan SetAutoPan 
VM_AUTOV | 23-07-99 | SeAutoVol SetAutoVol 
VM_DOFF  | 23-07-99 | _SsVmDamperOff 
VM_DON   | 23-07-99 | _SsVmDamperOn 
VM_F     | 23-07-99 | _SsVmFlush *_svm_envx_ptr *_svm_envx_hist *_svm_voice *_svm_okof1 *_svm_okon1 *_svm_okof2 *_svm_okon2 *_autovol *_autopan *_svm_sreg_dirty *_svm_sreg_buf *_svm_orev2 *_svm_orev1 *_svm_onos2 *_svm_onos1 
VM_G     | 23-07-99 | *_svm_stereo_mono *_svm_vab_not_send_size *_svm_rattr *_svm_vab_used *_SsVmMaxVoice *_svm_vab_count *kMaxPrograms *_svm_cur *_svm_damper *_svm_auto_kof_mode *_svm_vab_vh *_svm_vab_pg *_svm_vab_tn *_svm_vab_start *_svm_vab_total *_svm_vh *_svm_pg *_svm_tn *_svm_vg 
VM_INIT  | 23-07-99 | _SsVmInit 
VM_KEY   | 23-07-99 | _SsVmKeyOn _SsVmKeyOff _SsVmSeKeyOn _SsVmSeKeyOff 
VM_KEY_2 | 23-07-99 | KeyOnCheck 
VM_N2P   | 23-07-99 | note2pitch SsPitchFromNote note2pitch2 
VM_NO1   | 23-07-99 | vmNoiseOn 
VM_NO2   | 23-07-99 | vmNoiseOn2 
VM_NOFF  | 23-07-99 | vmNoiseOff 
VM_NOISE | 23-07-99 | _SsVmNoiseOnWithAdsr _SsVmNoiseOn 
VM_NOIS2 | 23-07-99 | _SsVmNoiseOff 
VM_NOWOF | 23-07-99 | _SsVmKeyOffNow 
VM_NOWON | 23-07-99 | _SsVmKeyOnNow 
VM_PB    | 23-07-99 | _SsVmPBVoice _SsVmPitchBend 
VM_PORTA | 23-07-99 | 
VM_PROG  | 23-07-99 | _SsVmGetProgVol _SsVmSetProgPan _SsVmGetProgPan 
VM_PROG2 | 23-07-99 | _SsVmSetProgVol 
VM_SEQ   | 23-07-99 | _SsVmSetSeqVol _SsVmGetSeqVol _SsVmSeqKeyOff 
VM_SEQ_2 | 23-07-99 | _SsVmGetSeqLVol _SsVmGetSeqRVol 
VM_SPB   | 23-07-99 | SePitchBend 
VM_STAV  | 23-07-99 | _SsVmSelectToneAndVag 
VM_VIB   | 23-07-99 | SeVibOn SetVib SsUtVibrateOn SsUtVibrateOff 
VM_VOL   | 23-07-99 | _SsVmSetVol 
VM_VSU   | 23-07-99 | _SsVmVSetUp 
VS_AUTO  | 23-07-99 | SsSetAutoKeyOffMode 
VS_MONO  | 23-07-99 | SsSetMono SsSetStereo 
VS_SRV   | 23-07-99 | SsSetReservedVoice 
VS_VAB   | 23-07-99 | SsVabClose 
VS_VFB   | 23-07-99 | SsVabFakeBody 
VS_VH    | 23-07-99 | SsVabOpenHeadSticky _SsVabOpenHeadWithMode SsVabFakeHead 
VS_VH2   | 23-07-99 | SsVabOpenHead 
VS_VT    | 23-07-99 | SsVabTransfer 
VS_VTB   | 23-07-99 | SsVabTransBody 
VS_VTBP  | 23-07-99 | SsVabTransBodyPartly 
VS_VTC   | 23-07-99 | SsVabTransCompleted 
VM_ALOC3 | 23-07-99 | SsBlockVoiceAllocation 
VM_ALOC4 | 23-07-99 | SsUnBlockVoiceAllocation 
VM_ALOC5 | 23-07-99 | SsAllocateVoices 
Q_KEYON  | 23-07-99 | SsQueueKeyOn 
Q_KEYON2 | 23-07-99 | SsQueueReverb 
Q_KEYON3 | 23-07-99 | SsQueueRegisters 
Q_KEYON4 | 23-07-99 | SsGetActualProgFromProg 
Q_KEYON5 | 23-07-99 | SsSetVoiceSettings 
Q_KEYON6 | 23-07-99 | SsVoiceCheck 

# LIBSPU
The basic sound library for contacting the Sound processing Unit (SPU).

Module  |   Date  |  Externals defined
--- | --- | ---
SPU      | 23-07-99 | _spu_RXX _spu_tsa _spu_transMode _spu_addrMode _spu_mem_mode _spu_mem_mode_plus _spu_mem_mode_unit _spu_mem_mode_unitM _spu_inTransfer _spu_transferCallback _spu_IRQCallback _spu_init _spu_Fw1ts *_spu_RQ _spu_FiDMA _spu_Fr_ _spu_t _spu_Fw _spu_Fr _spu_FsetRXX _spu_FsetRXXa _spu_FgetRXXa _spu_FsetPCR 
S_CB     | 23-07-99 | _SpuCallback 
S_DCB    | 23-07-99 | _SpuDataCallback 
SPU_GEX  | 23-07-99 | 
S_INI    | 23-07-99 | _spu_EVdma _spu_keystat _spu_trans_mode _spu_rev_flag _spu_rev_reserve_wa _spu_rev_offsetaddr _spu_rev_attr _spu_RQvoice _spu_RQmask _spu_voice_centerNote _spu_env _SpuInit SpuStart _spu_isCalled 
S_I      | 23-07-99 | SpuInit 
S_IH     | 23-07-99 | SpuInitHot 
S_Q      | 23-07-99 | SpuQuit 
S_SM     | 23-07-99 | SpuSetMute 
S_GM     | 23-07-99 | SpuGetMute 
S_M      | 23-07-99 | _spu_AllocBlockNum _spu_AllocLastNum _spu_memList 
S_M_INT  | 23-07-99 | _spu_gcSPU 
S_M_INIT | 23-07-99 | SpuInitMalloc 
S_M_UTIL | 23-07-99 | _SpuIsInAllocateArea _SpuIsInAllocateArea_ 
S_M_M    | 23-07-99 | SpuMalloc 
S_M_WSA  | 23-07-99 | SpuMallocWithStartAddr 
S_M_F    | 23-07-99 | SpuFree 
S_M_X    | 23-07-99 | _spu_print 
S_SE     | 23-07-99 | SpuSetEnv 
S_F      | 23-07-99 | SpuFlush 
ZEROBUF  | 23-07-99 | _spu_zerobuf 
S_SAV    | 23-07-99 | _SpuSetAnyVoice 
S_GAV    | 23-07-99 | _SpuGetAnyVoice 
S_SNV    | 23-07-99 | SpuSetNoiseVoice 
S_GNV    | 23-07-99 | SpuGetNoiseVoice 
S_SNC    | 23-07-99 | SpuSetNoiseClock 
S_GNC    | 23-07-99 | SpuGetNoiseClock 
S_SR     | 23-07-99 | SpuSetReverb 
S_GR     | 23-07-99 | SpuGetReverb 
S_SRMP   | 23-07-99 | SpuSetReverbModeParam 
S_GRMP   | 23-07-99 | SpuGetReverbModeParam 
S_SRA    | 23-07-99 | _spu_setReverbAttr 
S_RRWA   | 23-07-99 | SpuReserveReverbWorkArea 
S_IRWAR  | 23-07-99 | SpuIsReverbWorkAreaReserved 
S_SRD    | 23-07-99 | SpuSetReverbDepth 
S_SRV    | 23-07-99 | SpuSetReverbVoice 
S_GRV    | 23-07-99 | SpuGetReverbVoice 
S_CRWA   | 23-07-99 | SpuClearReverbWorkArea 
S_RDD    | 23-07-99 | SpuReadDecodedData 
S_SI     | 23-07-99 | SpuSetIRQ 
S_GI     | 23-07-99 | SpuGetIRQ 
S_SIA    | 23-07-99 | SpuSetIRQAddr 
S_GIA    | 23-07-99 | SpuGetIRQAddr 
S_SIC    | 23-07-99 | SpuSetIRQCallback 
S_SK     | 23-07-99 | SpuSetKey 
S_GKS    | 23-07-99 | SpuGetKeyStatus 
S_SKOWA  | 23-07-99 | SpuSetKeyOnWithAttr 
S_GVEA   | 23-07-99 | SpuGetVoiceEnvelopeAttr 
S_R      | 23-07-99 | SpuRead 
S_W      | 23-07-99 | SpuWrite 
S_W0     | 23-07-99 | SpuWrite0 
S_STSA   | 23-07-99 | SpuSetTransferStartAddr 
S_GTSA   | 23-07-99 | SpuGetTransferStartAddr 
S_STM    | 23-07-99 | SpuSetTransferMode 
S_GTM    | 23-07-99 | SpuGetTransferMode 
S_WP     | 23-07-99 | SpuWritePartly 
S_ITC    | 23-07-99 | SpuIsTransferCompleted 
S_STC    | 23-07-99 | SpuSetTransferCallback 
S_IT     | 23-07-99 | _spu_setInTransfer _spu_getInTransfer 
S_SPLV   | 23-07-99 | SpuSetPitchLFOVoice 
S_GPLV   | 23-07-99 | SpuGetPitchLFOVoice 
S_GCA    | 23-07-99 | SpuGetCommonAttr 
S_N2P    | 23-07-99 | _spu_note2pitch _spu_pitch2note 
SR_GAKS  | 23-07-99 | SpuRGetAllKeysStatus SpuGetAllKeysStatus 
ST       | 23-07-99 | SpuStTransfer SpuStInit SpuStQuit SpuStGetStatus SpuStGetVoiceStatus SpuStSetPreparationFinishedCallback SpuStSetTransferFinishedCallback SpuStSetStreamFinishedCallback 
T_C      | 23-07-99 | TimerCallback 
VERSION  | 23-07-99 | 
S_SESA   | 23-07-99 | SpuSetESA 
S_SVV    | 23-07-99 | SpuSetVoiceVolume 
S_SVVA   | 23-07-99 | SpuSetVoiceVolumeAttr 
S_SVP    | 23-07-99 | SpuSetVoicePitch 
S_SVN    | 23-07-99 | SpuSetVoiceNote 
S_SVSN   | 23-07-99 | SpuSetVoiceSampleNote 
S_SVSA   | 23-07-99 | SpuSetVoiceStartAddr 
S_SVLSA  | 23-07-99 | SpuSetVoiceLoopStartAddr 
S_SVAR   | 23-07-99 | SpuSetVoiceAR 
S_SVDR   | 23-07-99 | SpuSetVoiceDR 
S_SVSR   | 23-07-99 | SpuSetVoiceSR 
S_SVRR   | 23-07-99 | SpuSetVoiceRR 
S_SVSL   | 23-07-99 | SpuSetVoiceSL 
S_SVARA  | 23-07-99 | SpuSetVoiceARAttr 
S_SVSRA  | 23-07-99 | SpuSetVoiceSRAttr 
S_SVRRA  | 23-07-99 | SpuSetVoiceRRAttr 
S_SVAD   | 23-07-99 | SpuSetVoiceADSR 
S_SVADA  | 23-07-99 | SpuSetVoiceADSRAttr 
S_SVA    | 23-07-99 | SpuSetVoiceAttr 
SR_SVA   | 23-07-99 | SpuRSetVoiceAttr 
SN_SVA   | 23-07-99 | SpuNSetVoiceAttr 
SL_SVA   | 23-07-99 | SpuLSetVoiceAttr 
S_GVV    | 23-07-99 | SpuGetVoiceVolume 
S_GVVA   | 23-07-99 | SpuGetVoiceVolumeAttr 
S_GVVX   | 23-07-99 | SpuGetVoiceVolumeX 
S_GVP    | 23-07-99 | SpuGetVoicePitch 
S_GVN    | 23-07-99 | SpuGetVoiceNote 
S_GVSN   | 23-07-99 | SpuGetVoiceSampleNote 
S_GVEX   | 23-07-99 | SpuGetVoiceEnvelope 
S_GVSA   | 23-07-99 | SpuGetVoiceStartAddr 
S_GVLSA  | 23-07-99 | SpuGetVoiceLoopStartAddr 
S_GVAR   | 23-07-99 | SpuGetVoiceAR 
S_GVDR   | 23-07-99 | SpuGetVoiceDR 
S_GVSR   | 23-07-99 | SpuGetVoiceSR 
S_GVRR   | 23-07-99 | SpuGetVoiceRR 
S_GVSL   | 23-07-99 | SpuGetVoiceSL 
S_GVARA  | 23-07-99 | SpuGetVoiceARAttr 
S_GVSRA  | 23-07-99 | SpuGetVoiceSRAttr 
S_GVRRA  | 23-07-99 | SpuGetVoiceRRAttr 
S_GVAD   | 23-07-99 | SpuGetVoiceADSR 
S_GVADA  | 23-07-99 | SpuGetVoiceADSRAttr 
S_SCMV   | 23-07-99 | SpuSetCommonMasterVolume 
S_SCMVA  | 23-07-99 | SpuSetCommonMasterVolumeAttr 
S_SCCV   | 23-07-99 | SpuSetCommonCDVolume 
S_SCCR   | 23-07-99 | SpuSetCommonCDReverb 
S_SCCM   | 23-07-99 | SpuSetCommonCDMix 
S_GCMV   | 23-07-99 | SpuGetCommonMasterVolume 
S_GCMVX  | 23-07-99 | SpuGetCommonMasterVolumeX 
S_GCMVA  | 23-07-99 | SpuGetCommonMasterVolumeAttr 
S_GCCV   | 23-07-99 | SpuGetCommonCDVolume 
S_GCCR   | 23-07-99 | SpuGetCommonCDReverb 
S_GCCM   | 23-07-99 | SpuGetCommonCDMix 
S_SCA    | 23-07-99 | SpuSetCommonAttr 
S_SCERR  | 23-07-99 | *SpuCommonError 
S_SRMT   | 23-07-99 | SpuSetReverbModeType 
S_SRMD   | 23-07-99 | SpuSetReverbModeDepth 
S_SRMDT  | 23-07-99 | SpuSetReverbModeDelayTime 
S_SRMFB  | 23-07-99 | SpuSetReverbModeFeedback 
S_GRMT   | 23-07-99 | SpuGetReverbModeType 
S_GRMD   | 23-07-99 | SpuGetReverbModeDepth 
S_GRMDT  | 23-07-99 | SpuGetReverbModeDelayTime 
S_GRMFB  | 23-07-99 | SpuGetReverbModeFeedback 
S_GVA    | 23-07-99 | SpuGetVoiceAttr 
SN_GVA   | 23-07-99 | SpuNGetVoiceAttr 
S_RMP0   | 23-07-99 | _spu_rev_startaddr 
S_RMP1   | 23-07-99 | _spu_rev_workareasize 
S_RMP2   | 23-07-99 | _spu_rev_param 

# LIBTAP
The Playstation Multi-Tap library that allows 8 players to connect to one playstation with their controller and memory card.

Module  |   Date  |  Externals defined
--- | --- | ---
TAP      | 22-09-97 | InitTAP StartTAP StopTAP SendTAP EnableTAP DisableTAP 

Function Names in linking order
```
InitTAP
StartTAP
StopTAP
SendTAP
EnableTAP
DisableTAP
bzero
PAD_dr
EnterCriticalSection
ExitCriticalSection
SysEnqIntRP
SysDeqIntRP
ChangeClearRCnt
```
