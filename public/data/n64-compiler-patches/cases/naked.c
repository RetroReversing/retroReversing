void __attribute__((naked)) naked_entry(void) {
    __asm__ volatile (".set noreorder\n\tjr $31\n\tnop\n\t.set reorder");
}
