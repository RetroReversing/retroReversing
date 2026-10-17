/** Sony ELF types and EF_MIPS_MACH_5900 identify Emotion Engine code. */
export function isEmotionEngineElf(type, flags) {
  return type === 0xff90 || type === 0xff91 ||
    (flags & 0x00ff0000) === 0x00920000;
}
