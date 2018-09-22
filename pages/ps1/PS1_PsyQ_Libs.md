---
layout: post
tags: 
- ps1
- sdk
title: Official Sony PS1 Libraries 
thumbnail: /public/consoles/Sony Playstation.png
image: /public/psyqlibs.png
permalink: /ps1-libs
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name:Official Sony PS1 Libraries 
    url: #
recommend: ps1
editlink: /ps1/PS1_PsyQ_Libs.md
---

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

