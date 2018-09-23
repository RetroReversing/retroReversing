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

# LIBAPI

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

# LIBSN

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

# LIBC

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

# LIBC2

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

# LIBCD

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

# LIBCOMB
The Link Cable Library (`libcomb.lib`) provides functions for connecting PlayStatios's together via a “link” cable.

Module  |   Date  |  Externals defined
--- | --- | ---
COMB     | 23-07-99 | AddCOMB _comb_control 
COMB_2   | 23-07-99 | DelCOMB 
COMB_3   | 23-07-99 | ChangeClearSIO 

# LIBDS
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

# LIBETC
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

# LIBGPU
LibGPU is a library for utilizing the GPU and frame buffer, it works using Primitives similar to OpenGL, triangles, sprites etc.

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

# LIBGS

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

# LIBGTE

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
