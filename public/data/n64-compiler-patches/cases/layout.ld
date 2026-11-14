SECTIONS {
 . = 0x80000400;
 .text : { *(.text) }
 . = ALIGN(16);
 .data : { *(.data) *(.rodata) }
 .bss (NOLOAD) : { . += 1; *(COMMON) *(.bss) }
 /DISCARD/ : { *(.reginfo) *(.MIPS.abiflags) *(.pdr) *(.mdebug) *(.comment) *(.note*) }
}
