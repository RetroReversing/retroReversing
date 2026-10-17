# Bundled Pyre language specs

File Lab serves these SLEIGH files from its own site because the hosted Pyre
manifest does not include MIPS or SuperH. The Pyre decompiler JavaScript/WASM remains
hosted at `pyre.fuzzing.science`.

- `SuperH/data/languages`: Ghidra SH-2 language for Saturn files. See
  `SuperH/NOTICE` for its source and license.
- `MIPS/data/languages`: Ghidra 12.1.4 MIPS32 little-endian language for PS2
  IOP modules. The `.sla`, `.pspec`, and `.cspec` files came from the
  [official Ghidra 12.1.4 release](https://github.com/NationalSecurityAgency/ghidra/releases/tag/Ghidra_12.1.4_build).
  `mips.ldefs` is a reduced definition containing only that language.
- `r5900/data/languages`: Emotion Engine language from
  [ghidra-emotionengine-reloaded v2.1.38](https://github.com/chaoticgd/ghidra-emotionengine-reloaded/releases/tag/v2.1.38).
  The `.ldefs`, `.pspec`, and `.cspec` files came from its Ghidra 12.1.4
  extension archive. `r5900.sla` was compiled from the archive's
  `r5900.slaspec` and `.sinc` files with Ghidra 12.1.4's `sleigh_opt`.

The Ghidra and Emotion Engine files use the Apache License 2.0; see `LICENSE-APACHE-2.0.txt` and
`NOTICE-GHIDRA.txt`. `manifest.json` lists the runtime files and byte sizes.

The parser selects R5900 when the ELF header declares Sony's EE relocatable
type or `EF_MIPS_MACH_5900`. Other ELF32 little-endian MIPS files use MIPS32.
This gives decompilation, but the browser ELF loader still does not apply IRX
relocations or perform Ghidra's full analysis pass. Symbol and call targets in
relocatable modules may therefore be incomplete.
