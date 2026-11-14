unsigned int constant_reuse(unsigned int x, unsigned int y) {
    unsigned int a = x + 0x80000000U;
    unsigned int b = y + 0x80000000U;
    return a ^ b;
}
