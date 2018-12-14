---
layout: post
tags: 
- n64
title: Cleaning up n64split assembly code
image:  /public/N64/N64 Introduction.jpg
thumbnail: /public/consoles/Nintendo 64.png
permalink: /CleanUpN64Split
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Cleaning up n64split assembly code
    url: #
recommend: n64
editlink: /n64/CleanUpN64Split.md
---

# Generate undefined_syms.txt
I have a script that generates the `undefined_syms.txt` file for you:
https://gist.github.com/RetroGameDeveloper/6d56d01179da9ad1924580ae544692a7

# Error: macro used $at after ".set noat"
You need to add the following to line 6 of the generated .s file: 
```
.set gp=64
```

# Invalid operands

Examples:
```
Error: invalid operands `mfc2 $s1,$k1,0'
Error: invalid operands `lwc2 $t5,%lo(D_00FF1C00)($a0)'
Error: invalid operands `sync 9'
```

# opcode not supported on this processor
Examples:
```
Error: opcode not supported on this processor: vr4300 (mips3) `madd $a0,$zero'
opcode not supported on this processor: vr4300 (mips3) `lsa $zero,$zero,$a0,1'
opcode not supported on this processor: vr4300 (mips3) `mfhc1 $k0,$f0'
```

# Error: branch address range overflow
*TODO*

---

# Known problems with n64split disasm (and objdump)

## Mario64 JP
It incorrectly disassembles `00a03821` to `move    a3,a1` which reassembles to `00a03825`, it should instead be `addu  $a3, $a1, $zero`.

