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

