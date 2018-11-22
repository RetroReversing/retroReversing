---
layout: post
tags: 
- n64
title: Mupen64+ Emulator for Mac
image: /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /mupen64mac
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Mupen emulator MacOSX
    url: #
recommend: n64
editlink: /n64/Mupen64Mac.md
---

# Introduction
The Mupen64+ N64 emulator 

# Building for MacOSX
## First install dependencies in Brew
```bash
brew install pkg-config libpng sdl freetype nasm binutils
```

## Run Make
```
Make all DEBUGGER=1
```

## Errors

## 'cmath' file not found
If you get this error you will need to modify the MakeFile and change -mmacosx-version-min= in both places to the version of your OS (e.g 10.14)

## unrecognised output format `macho64'
```
nasm: fatal: unrecognised output format `macho64' - use -hf for a list
```
Make sure to install a new version of nasm:
```
brew install nasm 
```

### 'dis-asm.h' file not found
```
../../src/debugger/dbg_memory.c:37:10: fatal error: 'dis-asm.h' file not found
#include <dis-asm.h>
```
So after installing bin-utils via brew you need to run the following in your current bash session:
```
export LDFLAGS="-L/usr/local/opt/binutils/lib"
 export CPPFLAGS="-I/usr/local/opt/binutils/include"
```

So We get further but now an new error probably due to the version of binutils:
```
../../src/debugger/dbg_memory.c:113:19: error: use of undeclared identifier 'print_insn_i386'; did you mean
      'print_insn_m32c'?
    disassemble = print_insn_i386;
```
To fix this I simply added this to the top of the file:
```
#define USE_LIBOPCODES_GE_2_29 1
```

Now we get lots of linker errors…
```bash
Undefined symbols for architecture x86_64:
  "_htab_hash_pointer", referenced from:
      _xcoff_archive_info_hash in libbfd.a(xcofflink.o)
  "_libintl_dngettext", referenced from:
      _ppc64_elf_build_stubs in libbfd.a(elf64-ppc.o)
  "_xexit", referenced from:
      _spu_elf_final_link in libbfd.a(elf32-spu.o)
  "_hex_init", referenced from:
      _ihex_object_p in libbfd.a(ihex.o)
      _srec_object_p in libbfd.a(srec.o)
      _srec_mkobject in libbfd.a(srec.o)
      _symbolsrec_object_p in libbfd.a(srec.o)
      _tekhex_init in libbfd.a(tekhex.o)
      _verilog_mkobject in libbfd.a(verilog.o)
  "__hex_value", referenced from:
      _ihex_object_p in libbfd.a(ihex.o)
      _ihex_get_section_contents in libbfd.a(ihex.o)
      _srec_object_p in libbfd.a(srec.o)
      _srec_get_section_contents in libbfd.a(srec.o)
      _srec_scan in libbfd.a(srec.o)
      _tekhex_object_p in libbfd.a(tekhex.o)
      _getvalue in libbfd.a(tekhex.o)
      ...
  "_objalloc_free_block", referenced from:
      _elf_link_add_object_symbols in libbfd.a(elflink.o)
      _bfd_release in libbfd.a(opncls.o)
  "__objalloc_alloc", referenced from:
      _bfd_ecoff_debug_accumulate in libbfd.a(ecofflink.o)
      _add_memory_shuffle in libbfd.a(ecofflink.o)
      _add_file_shuffle in libbfd.a(ecofflink.o)
      _bfd_ecoff_debug_accumulate_other in libbfd.a(ecofflink.o)
      _bfd_alloc in libbfd.a(opncls.o)
      _bfd_hash_table_init_n in libbfd.a(hash.o)
      _bfd_hash_lookup in libbfd.a(hash.o)
      ...
  "_htab_elements", referenced from:
      _mips_elf_check_symbols in libbfd.a(elfxx-mips.o)
  "_htab_clear_slot", referenced from:
      __bfd_archive_close_and_cleanup in libbfd.a(archive.o)
      __bfinfdpic_resolve_final_relocs_info in libbfd.a(elf32-bfin.o)
      __frvfdpic_resolve_final_relocs_info in libbfd.a(elf32-frv.o)
      _score_elf_resolve_final_got_entry in libbfd.a(elf32-score.o)
      _score_elf_resolve_final_got_entry in libbfd.a(elf32-score7.o)
  "_xmalloc", referenced from:
      _print_insn_arc in libopcodes.a(arc-dis.o)
      _disassembler_options_arm in libopcodes.a(arm-dis.o)
      _cgen_bitset_create in libopcodes.a(cgen-bitset.o)
      _cgen_bitset_init in libopcodes.a(cgen-bitset.o)
      _cgen_bitset_copy in libopcodes.a(cgen-bitset.o)
      _disassembler_options_powerpc in libopcodes.a(ppc-dis.o)
      _disassembler_options_s390 in libopcodes.a(s390-dis.o)
      ...
  "_getpwd", referenced from:
      _adjust_relative_path in libbfd.a(archive.o)
  "_splay_tree_foreach", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
      _check_section_ebb_pcrels_fit in libbfd.a(elf32-xtensa.o)
      _removed_by_actions_map in libbfd.a(elf32-xtensa.o)
  "_splay_tree_successor", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
      _offset_with_removed_text in libbfd.a(elf32-xtensa.o)
  "_lrealpath", referenced from:
      _adjust_relative_path in libbfd.a(archive.o)
      _find_separate_debug_file in libbfd.a(opncls.o)
  "_splay_tree_lookup", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
      _text_action_add in libbfd.a(elf32-xtensa.o)
      _offset_with_removed_text in libbfd.a(elf32-xtensa.o)
  "_floatformat_m68881_ext", referenced from:
      _print_insn_arg in libopcodes.a(m68k-dis.o)
  "_htab_find_slot_with_hash", referenced from:
      _nds32_asm_init in libopcodes.a(nds32-asm.o)
      _build_hash_table in libopcodes.a(nds32-asm.o)
      __bfd_elf_discard_section_eh_frame in libbfd.a(elf-eh-frame.o)
      _elf32_aarch64_get_local_sym_hash in libbfd.a(elf32-aarch64.o)
      _elf64_aarch64_get_local_sym_hash in libbfd.a(elf64-aarch64.o)
      _get_local_sym_hash in libbfd.a(elf32-ia64.o)
      _get_local_sym_hash in libbfd.a(elf64-ia64.o)
      ...
  "_htab_find_with_hash", referenced from:
      _parse_re in libopcodes.a(nds32-asm.o)
      _parse_re2 in libopcodes.a(nds32-asm.o)
      _build_opcode_syntax in libopcodes.a(nds32-asm.o)
      _nds32_assemble in libopcodes.a(nds32-asm.o)
      _parse_aext_reg in libopcodes.a(nds32-asm.o)
  "_objalloc_create", referenced from:
      _bfd_ecoff_debug_init in libbfd.a(ecofflink.o)
      __bfd_new_bfd in libbfd.a(opncls.o)
      _bfd_hash_table_init_n in libbfd.a(hash.o)
      _elf32_aarch64_link_hash_table_create in libbfd.a(elf32-aarch64.o)
      _elf64_aarch64_link_hash_table_create in libbfd.a(elf64-aarch64.o)
      _elf32_ia64_hash_table_create in libbfd.a(elf32-ia64.o)
      _elf64_ia64_hash_table_create in libbfd.a(elf64-ia64.o)
      ...
  "__sch_toupper", referenced from:
      _iq2000_cgen_build_insn_regex in libopcodes.a(iq2000-asm.o)
      _m32c_cgen_build_insn_regex in libopcodes.a(m32c-asm.o)
      _bfd_decode_symclass in libbfd.a(syms.o)
      _epiphany_cgen_build_insn_regex in libopcodes.a(epiphany-asm.o)
      _fr30_cgen_build_insn_regex in libopcodes.a(fr30-asm.o)
      _frv_cgen_build_insn_regex in libopcodes.a(frv-asm.o)
      _ip2k_cgen_build_insn_regex in libopcodes.a(ip2k-asm.o)
      ...
  "_xregcomp", referenced from:
      _iq2000_cgen_build_insn_regex in libopcodes.a(iq2000-asm.o)
      _m32c_cgen_build_insn_regex in libopcodes.a(m32c-asm.o)
      _epiphany_cgen_build_insn_regex in libopcodes.a(epiphany-asm.o)
      _fr30_cgen_build_insn_regex in libopcodes.a(fr30-asm.o)
      _frv_cgen_build_insn_regex in libopcodes.a(frv-asm.o)
      _ip2k_cgen_build_insn_regex in libopcodes.a(ip2k-asm.o)
      _lm32_cgen_build_insn_regex in libopcodes.a(lm32-asm.o)
      ...
  "_xrealloc", referenced from:
      _som_write_object_contents in libbfd.a(som.o)
      _som_begin_writing in libbfd.a(som.o)
  "_htab_traverse_noresize", referenced from:
      __bfd_archive_close_and_cleanup in libbfd.a(archive.o)
      _elf_m68k_partition_multi_got_1 in libbfd.a(elf32-m68k.o)
  "_xregerror", referenced from:
      _iq2000_cgen_build_insn_regex in libopcodes.a(iq2000-asm.o)
      _m32c_cgen_build_insn_regex in libopcodes.a(m32c-asm.o)
      _epiphany_cgen_build_insn_regex in libopcodes.a(epiphany-asm.o)
      _fr30_cgen_build_insn_regex in libopcodes.a(fr30-asm.o)
      _frv_cgen_build_insn_regex in libopcodes.a(frv-asm.o)
      _ip2k_cgen_build_insn_regex in libopcodes.a(ip2k-asm.o)
      _lm32_cgen_build_insn_regex in libopcodes.a(lm32-asm.o)
      ...
  "_splay_tree_min", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
      _offset_with_removed_text in libbfd.a(elf32-xtensa.o)
  "__sch_tolower", referenced from:
      _cgen_keyword_lookup_name in libopcodes.a(cgen-opc.o)
      _cgen_keyword_add in libopcodes.a(cgen-opc.o)
      _ip2k_asm_hash in libopcodes.a(ip2k-opc.o)
      _parse_insn_normal in libopcodes.a(iq2000-asm.o)
      _iq2000_cgen_build_insn_regex in libopcodes.a(iq2000-asm.o)
      _iq2000_cgen_isa_register in libopcodes.a(iq2000-asm.o)
      _parse_re in libopcodes.a(nds32-asm.o)
      ...
  "_splay_tree_new", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
  "_htab_hash_string", referenced from:
      _parse_re in libopcodes.a(nds32-asm.o)
      _parse_re2 in libopcodes.a(nds32-asm.o)
      _nds32_asm_init in libopcodes.a(nds32-asm.o)
      _build_hash_table in libopcodes.a(nds32-asm.o)
      _htab_hash_hash in libopcodes.a(nds32-asm.o)
      _build_opcode_syntax in libopcodes.a(nds32-asm.o)
      _nds32_assemble in libopcodes.a(nds32-asm.o)
      ...
  "_htab_traverse", referenced from:
      __bfd_mips_elf_size_dynamic_sections in libbfd.a(elfxx-mips.o)
      __bfd_mips_elf_final_link in libbfd.a(elfxx-mips.o)
      _mips_elf_resolve_final_got_entries in libbfd.a(elfxx-mips.o)
      _mips_elf_merge_got_with in libbfd.a(elfxx-mips.o)
      _elf32_aarch64_size_dynamic_sections in libbfd.a(elf32-aarch64.o)
      _elf32_aarch64_finish_dynamic_sections in libbfd.a(elf32-aarch64.o)
      _elf64_aarch64_size_dynamic_sections in libbfd.a(elf64-aarch64.o)
      ...
  "_objalloc_free", referenced from:
      _bfd_ecoff_debug_free in libbfd.a(ecofflink.o)
      __bfd_free_cached_info in libbfd.a(opncls.o)
      __bfd_delete_bfd in libbfd.a(opncls.o)
      _bfd_hash_table_init_n in libbfd.a(hash.o)
      _bfd_hash_table_free in libbfd.a(hash.o)
      __bfd_stringtab_free in libbfd.a(hash.o)
      _elf32_aarch64_link_hash_table_free in libbfd.a(elf32-aarch64.o)
      ...
  "_xstrerror", referenced from:
      _bfd_errmsg in libbfd.a(bfd.o)
  "_concat", referenced from:
      _mips_elf_check_symbols in libbfd.a(elfxx-mips.o)
      _mips_elf_create_stub_symbol in libbfd.a(elfxx-mips.o)
      _arc_elf_merge_private_bfd_data in libbfd.a(elf32-arc.o)
      _bfd_plugin_object_p in libbfd.a(plugin.o)
      _allocate_global_data_opd in libbfd.a(elf64-hppa.o)
      _elf64_hppa_finalize_opd in libbfd.a(elf64-hppa.o)
      _m68hc11_elf_export_one_stub in libbfd.a(elf32-m68hc1x.o)
      ...
  "_htab_find", referenced from:
      _print_insn16 in libopcodes.a(nds32-dis.o)
      _print_insn32 in libopcodes.a(nds32-dis.o)
      __bfd_mips_elf_relocate_section in libbfd.a(elfxx-mips.o)
      __bfd_mips_elf_finish_dynamic_symbol in libbfd.a(elfxx-mips.o)
      _mips_elf_create_local_got_entry in libbfd.a(elfxx-mips.o)
      __bfd_look_for_bfd_in_cache in libbfd.a(archive.o)
      __bfinfdpic_resolve_final_relocs_info in libbfd.a(elf32-bfin.o)
      ...
  "_htab_try_create", referenced from:
      __bfd_mips_elf_init_stubs in libbfd.a(elfxx-mips.o)
      _mips_elf_create_got_info in libbfd.a(elfxx-mips.o)
      _mips_elf_resolve_final_got_entries in libbfd.a(elfxx-mips.o)
      __bfd_elf_discard_section_eh_frame in libbfd.a(elf-eh-frame.o)
      _elf32_aarch64_link_hash_table_create in libbfd.a(elf32-aarch64.o)
      _elf64_aarch64_link_hash_table_create in libbfd.a(elf64-aarch64.o)
      __bfin_create_got_section in libbfd.a(elf32-bfin.o)
      ...
  "_cplus_demangle", referenced from:
      _bfd_demangle in libbfd.a(bfd.o)
  "_htab_create", referenced from:
      _mips_elf_resolve_final_got_entries in libbfd.a(elfxx-mips.o)
      _riscv_elf_relocate_section in libbfd.a(elf32-riscv.o)
      _riscv_elf_relocate_section in libbfd.a(elf64-riscv.o)
      __bfd_xcoff_bfd_link_hash_table_create in libbfd.a(xcofflink.o)
  "_htab_delete", referenced from:
      _mips_elf_resolve_final_got_entries in libbfd.a(elfxx-mips.o)
      _mips_elf_replace_bfd_got in libbfd.a(elfxx-mips.o)
      __bfd_archive_close_and_cleanup in libbfd.a(archive.o)
      __bfd_elf_discard_section_eh_frame_hdr in libbfd.a(elf-eh-frame.o)
      _elf32_aarch64_link_hash_table_free in libbfd.a(elf32-aarch64.o)
      _elf64_aarch64_link_hash_table_free in libbfd.a(elf64-aarch64.o)
      _elf32_ia64_link_hash_table_free in libbfd.a(elf32-ia64.o)
      ...
  "_unlink_if_ordinary", referenced from:
      _bfd_open_file in libbfd.a(cache.o)
  "_filename_ncmp", referenced from:
      __bfd_construct_extended_name_table in libbfd.a(archive.o)
      _adjust_relative_path in libbfd.a(archive.o)
      __bfd_stab_section_find_nearest_line in libbfd.a(syms.o)
  "_xregexec", referenced from:
      _iq2000_cgen_assemble_insn in libopcodes.a(iq2000-asm.o)
      _m32c_cgen_assemble_insn in libopcodes.a(m32c-asm.o)
      _epiphany_cgen_assemble_insn in libopcodes.a(epiphany-asm.o)
      _fr30_cgen_assemble_insn in libopcodes.a(fr30-asm.o)
      _frv_cgen_assemble_insn in libopcodes.a(frv-asm.o)
      _ip2k_cgen_assemble_insn in libopcodes.a(ip2k-asm.o)
      _lm32_cgen_assemble_insn in libopcodes.a(lm32-asm.o)
      ...
  "_htab_create_alloc", referenced from:
      _print_insn_nds32 in libopcodes.a(nds32-dis.o)
      _nds32_asm_init in libopcodes.a(nds32-asm.o)
      _build_hash_table in libopcodes.a(nds32-asm.o)
      __bfd_add_bfd_to_archive_cache in libbfd.a(archive.o)
  "_floatformat_ieee_single_little", referenced from:
      _print_insn_neon in libopcodes.a(arm-dis.o)
      _print_insn_wasm32 in libopcodes.a(wasm32-dis.o)
  "_splay_tree_insert", referenced from:
      _elf_xtensa_relax_section in libbfd.a(elf32-xtensa.o)
      _text_action_add in libbfd.a(elf32-xtensa.o)
  "_htab_find_slot", referenced from:
      _print_insn_nds32 in libopcodes.a(nds32-dis.o)
      __bfd_mips_elf_check_relocs in libbfd.a(elfxx-mips.o)
      _mips_elf_check_symbols in libbfd.a(elfxx-mips.o)
      _mips_elf_record_got_entry in libbfd.a(elfxx-mips.o)
      _mips_elf_recreate_got in libbfd.a(elfxx-mips.o)
      _mips_elf_resolve_got_page_ref in libbfd.a(elfxx-mips.o)
      _mips_elf_add_got_entry in libbfd.a(elfxx-mips.o)
      ...
  "_floatformat_to_double", referenced from:
      _print_insn_neon in libopcodes.a(arm-dis.o)
      _print_insn_wasm32 in libopcodes.a(wasm32-dis.o)
      _print_insn_arg in libopcodes.a(m68k-dis.o)
  "_filename_cmp", referenced from:
      _xtensa_regfile_lookup in libbfd.a(xtensa-isa.o)
      _xtensa_regfile_lookup_shortname in libbfd.a(xtensa-isa.o)
      __bfd_get_elt_at_filepos in libbfd.a(archive.o)
      __bfd_construct_extended_name_table in libbfd.a(archive.o)
      __bfd_stab_section_find_nearest_line in libbfd.a(syms.o)
      _bfinfdpic_relocate_section in libbfd.a(elf32-bfin.o)
      _elf32_frv_relocate_section in libbfd.a(elf32-frv.o)
      ...
  "_floatformat_ieee_double_big", referenced from:
      _print_insn_arg in libopcodes.a(m68k-dis.o)
  "_make_relative_prefix", referenced from:
      _bfd_plugin_object_p in libbfd.a(plugin.o)
  "_xstrdup", referenced from:
      _print_insn_riscv in libopcodes.a(riscv-dis.o)
      _build_ARC_extmap in libopcodes.a(arc-ext.o)
      _make_ia64_opcode in libopcodes.a(ia64-opc.o)
      __bfd_get_elt_at_filepos in libbfd.a(archive.o)
      __bfd_elf32_bfd_from_remote_memory in libbfd.a(elf32.o)
      _bfd_fopen in libbfd.a(opncls.o)
      _bfd_openstreamr in libbfd.a(opncls.o)
      ...
  "_xcalloc", referenced from:
      _print_insn_mmix in libopcodes.a(mmix-dis.o)
      _print_insn_nds32 in libopcodes.a(nds32-dis.o)
      _print_insn_riscv in libopcodes.a(riscv-dis.o)
      _print_insn_tic4x in libopcodes.a(tic4x-dis.o)
      _nds32_asm_init in libopcodes.a(nds32-asm.o)
      _build_hash_table in libopcodes.a(nds32-asm.o)
  "_floatformat_ieee_double_little", referenced from:
      _print_insn_wasm32 in libopcodes.a(wasm32-dis.o)
  "_floatformat_ieee_single_big", referenced from:
      _print_insn_arg in libopcodes.a(m68k-dis.o)
  "__sch_istable", referenced from:
      _remove_whitespace_and_extra_commas in libopcodes.a(disassemble.o)
      _error_handler_internal in libbfd.a(bfd.o)
      _bfd_default_scan in libbfd.a(archures.o)
      _cgen_keyword_lookup_name in libopcodes.a(cgen-opc.o)
      _cgen_keyword_add in libopcodes.a(cgen-opc.o)
      _ip2k_asm_hash in libopcodes.a(ip2k-opc.o)
      _parse_insn_normal in libopcodes.a(iq2000-asm.o)
      ...
  "_iterative_hash", referenced from:
      __bfd_elf_discard_section_eh_frame in libbfd.a(elf-eh-frame.o)
  "_xregfree", referenced from:
      _epiphany_cgen_cpu_close in libopcodes.a(epiphany-desc.o)
      _fr30_cgen_cpu_close in libopcodes.a(fr30-desc.o)
      _frv_cgen_cpu_close in libopcodes.a(frv-desc.o)
      _ip2k_cgen_cpu_close in libopcodes.a(ip2k-desc.o)
      _iq2000_cgen_cpu_close in libopcodes.a(iq2000-desc.o)
      _iq2000_cgen_build_insn_regex in libopcodes.a(iq2000-asm.o)
      _lm32_cgen_cpu_close in libopcodes.a(lm32-desc.o)
      ...
  "_htab_size", referenced from:
      _mips_elf_resolve_final_got_entries in libbfd.a(elfxx-mips.o)
  "_lbasename", referenced from:
      __bfd_append_relative_path in libbfd.a(archive.o)
      __bfd_construct_extended_name_table in libbfd.a(archive.o)
      __bfd_archive_bsd44_construct_extended_name_table in libbfd.a(archive.o)
      __bfd_bsd44_write_ar_hdr in libbfd.a(archive.o)
      _bfd_dont_truncate_arname in libbfd.a(archive.o)
      _bfd_bsd_truncate_arname in libbfd.a(archive.o)
      _bfd_gnu_truncate_arname in libbfd.a(archive.o)
      ...
  "_libintl_dgettext", referenced from:
      _print_insn_aarch64 in libopcodes.a(aarch64-dis.o)
      _print_aarch64_disassembler_options in libopcodes.a(aarch64-dis.o)
      _print_insn_arc in libopcodes.a(arc-dis.o)
      _print_arc_disassembler_options in libopcodes.a(arc-dis.o)
      _find_format_from_table in libopcodes.a(arc-dis.o)
      _print_insn in libopcodes.a(arm-dis.o)
      _disassembler_options_arm in libopcodes.a(arm-dis.o)
```

This is due to brew not installing libiberty.a library file. I found it quite difficult to fix using brew so I installed macports and ran:
```bash
sudo port install x86_64-elf-binutils
```
The look in the folder: `/opt/local/x86_64-elf/host/lib` and you will find a libiberty.a file, copy this across to: `/usr/local/opt/binutils/lib`
```bash
cp /usr/local/opt/binutils/lib/libiberty.a /usr/local/opt/binutils/lib
```

Ok now we have a lot less linker errors we now just need to find libintl.

Now finally change the Makefile on line 643 to add `-L/usr/local/opt/binutils/lib -liberty -lintl -liconv` so it should look like:
```
ifeq ($(DEBUGGER), 1)
  SOURCE += \
    $(SRCDIR)/debugger/dbg_debugger.c \
    $(SRCDIR)/debugger/dbg_decoder.c \
    $(SRCDIR)/debugger/dbg_memory.c \
    $(SRCDIR)/debugger/dbg_breakpoints.c
  LDLIBS += -lopcodes -lbfd -L/usr/local/opt/binutils/lib -liberty -lintl -liconv

```

So Finally we have a `libmupen64plus.dylib` with the  debugger enabled! Now what? How do we use it?!

---

# Building the Console Application
You need to point APIDIR to the location of the core source code you checked out earlier.
```
make APIDIR=/../mupen64plus-core-master/src/api DEBUG=1 all
```

The console application is the simplest frontend for the emulator and it also has a very basic debugger in it.

Now copy over the …

---

# Compiling Glitch64
```
brew install boost
```
Change line 137 to match:
```
CFLAGS += $(OPTFLAGS) $(WARNFLAGS) -ffast-math -fno-strict-aliasing -fvisibility=hidden -I../../src -I../../src/Glitch64/inc -DGCC -I/usr/local/Cellar/boost/1.67.0_1/include
```

---

# Running the emulator
example.v64 only seems to work with glide64 graphics for me.
```
./mupen64plus --corelib ./libmupen64plus.dylib --gfx ./mupen64plus-video-glide64mk2.dylib ./example.v64
```

---

# Source code analysis

## Device folder
Contains most of the emulator logic for the N64.

### r4300_core
The r4300 is the main CPU used in the Nintendo64, it is based on the R4200 by MIPS Technologies Inc.
[R4200 - Wikipedia](https://en.wikipedia.org/wiki/R4200)

The main implementation of the cpu is contained in the `r4300_core` folder along with implementations of the 3 co-processors (cp0, cp1 and cp2).

More information about the CPU can be found here:
[N64 Programming/CPU overview - Wikibooks, open books for an open world](https://en.wikibooks.org/wiki/N64_Programming/CPU_overview)


### rdp_core
### rsp_core
### ai_controller
### mi_controller
### pi_controller
### ri_controller
### si_controller
### vi_controller
### pif;
### rdram
### memory

### game_controller 
### biopak 
### mempak
### rumblepak
### transferpak
### gb_cart

### cart

### dd_controller

