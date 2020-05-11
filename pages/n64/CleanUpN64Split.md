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

# Install n64split on mac
In order to compile n64split you need to run a few commands:
	```
	brew install capstone
	brew install libyaml
	export C_INCLUDE_PATH=../sm64tools:/usr/local/Cellar/capstone/4.0.1/include/:/usr/local/Cellar/libyaml/0.2.1/include && export LIBRARY_PATH=/usr/local/opt/capstone/lib/:/usr/local/Cellar/libyaml/0.2.1/lib:/usr/local/Cellar/libpng/1.6.36/lib && make
	```

# Generate undefined_syms.txt
I have a script that generates the `undefined_syms.txt` file for you:
https://gist.github.com/RetroGameDeveloper/6d56d01179da9ad1924580ae544692a7

# Error: macro used $at after ".set noat"
You need to add the following to line 6 of the generated .s file: 
```
.set gp=64
```
---
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
---
# Error: branch address range overflow
*TODO*

---

# Error: branch out of range

---

# Known problems with n64split disasm (and objdump)

## Mario64 JP
It incorrectly disassembles `00a03821` to `move    a3,a1` which reassembles to `00a03825`, it should instead be `addu  $a3, $a1, $zero`.

---

# Can't find matching LO16 reloc against `D_0F50EE51' for R_MIPS_HI16 at 0x75d240 in section`.text80246000'

You have a %hi() but no %lo()

(it's impossible to have just a single %hi, because if you do %hi/lo(some_address + some_offset), that offset is stored in the %lo instruction)

Making the rom relocatable.


# Ram to rom
sub ram_to_rom {
    my $ram = $_[0];
    if ($ram >> 16 == 0x8033) {
        return $ram - 0x80246000 + 0x001000;
    }
    elsif ($ram >> 16 == 0x8038) {
        return $ram - 0x80378800 + 0x0F4210;
    }
    elsif ($ram >> 16 == 0x801A) {
        return $ram - 0x8016F000 + 0x21D7D0;
    }
}

todo: write a script that loops through each line and then when it finds a .byte it will mark all the rest as .byte until label line
then loop in reverse and do the same until it reaches a jump or branch or ret instruction
also could mark labels as deleted if they point to byte

```bash
sed -n 197097p yourGameName.region.split/yourGameName.region.s
```
