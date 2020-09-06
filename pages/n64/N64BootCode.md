---
layout: post
tags: 
- n64
- assembly
title: N64 Boot Code Analysis
image:  /public/N64/N64BootCodeAnalysis.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /n64bootcode
breadcrumbs:
  - name: Home
    url: /
  - name: N64
    url: /n64
  - name: N64 Boot Code Analysis
    url: #
recommend: n64
editlink: /n64/N64BootCode.md
updatedAt: '2019-10-27'
---

# Introduction to Nintendo 64 Bootcode
In this post we will be exploring the Nintendo 64 Bootstrapping Code or Boot code for short.

The boot code is a short piece of MIPS assembly code located in every single N64 ROM that starts at offset 0x40 and has a size of 4032 bytes.

Technically any code could have been placed in this section of the ROM as long as it initialises the hardware, but in practise there were only a couple of variations on the standard bootcode.

## Different Bootcodes used
The Boot Codes can be named after the CIC (Lockout) chip that they were created to work with and have the format `CIC-NUS-####`, to detect which boot code has which name we can take the MD5 hash of the code and compare it to the table below [^3].


Md5 Hash | PAL Name (CIC chip) | NA Name (CIC Chip) | Details
---|---|---|---
2dacea29bd5ae921009b68f2763112d8 | CIC-NUS-7101 | CIC-NUS-6102 | Used in 88% of games
877439da8c0021675bbbcfb63c0a10a6 | CIC-NUS-7103 | CIC-NUS-6103 | Used in 3% of games (e.g 1080 Snowboarding)
519f29ee1440f2c7b39a79eea1aec40d | CIC-NUS-7105 | CIC-NUS-6105 | Used in 4% of games (e.g Legend of Zelda OOT)
?? | CIC-NUS-7106 | CIC-NUS-6106 | Used in 3 games (Yoshi's Story, Cruis'n World and F-Zero X) [^4]
?? | CIC-NUS-7102 | CIC-NUS-6101 | Used in 1 game: Starfox64 (also known as Lylat Wars in PAL)

## Standard Bootcode
The standard Boot Code (`CIC-NUS-7101`/`CIC-NUS-6102`) is what we will analysis in this post as it covers 88% of all Retail N64 games and the other Boot Codes tend to be based on it anyway.

The md5 hash for this boot code in binary format is:
```
2dacea29bd5ae921009b68f2763112d8
```
So you can check if your rom uses this bootcode by copying 4032 bytes from offset 0x0040 into a separate file and running the `md5` command on it.

## What execute the bootcode
When the `PIF ROM` has finished executing and it passes the anti-piracy CIC check it always jumps to address `0xA4000040` in memory. This is the start of the bootcode and will be where the start of the code analysis will begin.

## What does the bootcode do?
In the official N64 SDK documentation you can read about some of the tasks that the bootcode is responsible for:
[Chapter 6 - N64 Operating System Overview](http://n64devkit.square7.ch/pro-man/pro06/06-10.htm)

Basically it all boils down to initialization of the different chips (CP0, RCP, RDRAM) and loading and jumping to the actual game code.

## Why have different bootcodes?
One reason is for security and to prevent backup devices being used, for example the `CIC-NUS-6103` and `CIC-NUS-6106` change the RAM entry point for the game [^5].

Currently more analysis is needed to compare the different bootcodes and figure out why the differences were required and how similar they are. Comment below if you have any information that might be of use.

---
# Pseudo C-code
Before jumping straight into the Assembly code for the bootcode we can have a look at a simplified form of the code, which is a sort of decompilation, but bare in mind that the code was originally written in assembly so its not a true decompilation.

We have split up the code into the functions displayed in the table below:

Fake Name | Address | Purpose
---|---|---
Boot() | 0xa4000040 | Start of Bootcode (Initialize C0P and RCP)
SevenSeventyEight() | 0xa4000778 |
EightEighty() | 0xa4000880 |
AFourty() | a4000a40

We will simplify the code by treating each block of code as a C function, and what better place to start than the code at address `0xA4000040`:
```c
void Boot_a4000040()
{
  bool bVar1;
  int iVar2;
  int extraout_v1;
  int extraout_v1_00;
  undefined4 *puVar3;
  undefined4 *puVar4;
  uint local_t2_64;
  uint uVar5;
  uint uVar6;
  undefined4 uVar7;
  uint *puVar8;
  int iVar9;
  int iVar10;
  int iVar11;
  int iVar12;
  uint uVar13;
  int iVar14;
  int iVar15;
  uint uVar16;
  int *piVar17;
  undefined4 *puVar18;
  undefined local_60 [72];
  

  // Co-Processor Zero Exception & Timer Registers
  setCopReg(0,Cause,0,0); // Cause of Last Exception
  setCopReg(0,Count,0,0); // Timer Count
  setCopReg(0,Compare,0,0); // Timer Compare
  

  if (RI_SELECT == 0) {
    local_t2_64 = 0xa3f80000;
    puVar3 = (undefined4 *)&MI_BASE;
    _RI_CONFIG = 0x40;
    
    // Loop 8000 to delay 24000 cycles
    iVar11 = 8000;
    do {
      iVar11 = iVar11 + -1;
    } while (iVar11 != 0);
    
    
    RI_CURRENT_LOAD = 0;
    RI_SELECT = 0x14;
    countdown = 4;
    do {
      countdown = countdown + -1;
    } while (countdown != 0);
    
    RI_BASE = 0xe;
    countdown2 = 0x20;
    do {
      countdown2 = countdown2 + -1;
    } while (countdown2 != 0);
    
    
    MI_BASE = 0x10f;
    RDRAM_DELAY = 0x18082838;
    RDRAM_REF_ROW = 0;
    RDRAM_DEVICE_ID = 0x80000000;
    
    uVar6 = 0;
    iVar8 = 0;
    puVar9 = (uint *)&RDRAM_BASE;
    iVar15 = 0;
    uVar13 = 0;
    iVar14 = 0;
    iVar12 = 0;
    piVar17 = (int *)local_60;
    puVar18 = (undefined4 *)local_60;
    if (MI_VERSION == 0x1010101) {
      // Version >=2 RCP
      iVar10 = 0x200;
      iVar12 =  0xa3f04000;
      piVar18 = (int *)auStack96;
    }
    else {
      // Version 1 RCP
      iVar10 = 0x400;
      iVar12 = 0xa3f08000;
    }
    do {
      *(int *)(iVar12 + 4) = iVar11;
      iVar2 = SevenSeventyEight(); // call SevenSeventyEight_a4000778()
      if (iVar2 == 0) break;
      *piVar18 = iVar2;
      *puVar3 = 0x2000;
      uVar6 = *puVar9;
      piVar18[1] = uVar6 & 0xf0ff0000;
      piVar18 = piVar18 + 2;
      *puVar3 = 0x1000;
      if ((uVar6 & 0xf0ff0000) == 0xb0190000) {
        iVar16 = iVar16 + 0x8000000;
        uVar14 = uVar14 + 0x200000;
        iVar13 = iVar13 * 2 + 1;
      }
      *puVar3 = 0x2000;
      uVar6 = puVar9[9];
      uVar17 = *puVar9;
      *puVar3 = 0x1000;
      if (((uVar6 & 0xffff) == 0x500) && ((uVar17 & 0x1000000) == 0)) {
        puVar9[6] = 0x101c0a04;
      }
      else {
        puVar9[6] = 0x80c1204;
      }
      iVar11 = iVar11 + 0x8000000;
      puVar9 = (uint *)((int)puVar9 + iVar10 * 2);
      uVar7 = uVar7 + 1;
    } while (uVar7 < 8);
    *(undefined4 *)(iVar5 + 0xc) = 0xc0000000;
    *(undefined4 *)(iVar5 + 4) = 0x80000000;
    do {
      if (puVar19[1] == -0x4ff70000) {
        *(iVar12 + 4) = iVar16;
        AFourty(*puVar19,1); // call AFourty_a4000a40()
        uVar14 += 0x100000;
        *(iVar12 + 4) = iVar15;
        iVar5 = extraout_v1;
      }
      else {
        *(int *)(iVar12 + 4) = iVar15;
        AFourty(*puVar19,1); // call AFourty_a4000a40()
        iVar15 = iVar15 + 0x8000000;
        iVar5 = extraout_v1_00;
      }
      puVar19 = puVar19 + 2;
    } while (iVar5 + 1 < (int)uVar7);
    _DAT_a4700010 = iVar13 << 0x13 | 0x63634;
    _DAT_a0000318 = uVar14 & 0xfffffff;
    uVar14 = 0x80000000;
    setCopReg(0,TagLo,0,0);
    setCopReg(0,TagHi,0,0);
    do {
      cacheOp(8,uVar14);
      bVar1 = uVar14 < 0x80003fe0;
      uVar14 = uVar14 + 0x20;
    } while (bVar1);
    uVar14 = 0x80000000;
    do {
      cacheOp(9,uVar14);
      bVar1 = uVar14 < 0x80001ff0;
      uVar14 = uVar14 + 0x10;
    } while (bVar1);
  }
  else {
    // RI_SELECT was not equal to 0, so lets just run a subset of the code
    uVar14 = 0x80000000;
    setCopReg(0,TagLo,0,0);
    setCopReg(0,TagHi,0,0);
    
    while (uVar14 < 0x80003fe0) {
      cacheOp(8,uVar14);
      uVar14 = uVar14 + 0x20;
    }
    
    uVar14 = 0x80000000;
    while (uVar14 < 0x80001ff0) {
      cacheOp(1,uVar14);
      uVar14 = uVar14 + 0x10;
    }
  }
  
  // Copy the 6102 bootcode from 0xa40004c0 to address 0x80000000 in RAM
  int* current_loc = &CIC_NUS_6102_Code_Start_Location; // CIC_NUS_6102_Code_Start_Location is 0xa40004c0
  int* destination_loc = &DAT_a0000000;
  
  while (puVar3 < 0xa4000774) {
    byte value = *current_loc;
    current_loc++;
    *destination_loc = value;
    destination_loc++;
  }
  
  CIC_NUS_6102_Code(); // 0x80000000 is the code that was loaded previously
  return;
}
```

## CIC_NUS_6102_Code()
This is a small piece of code that was loaded into memory in the previous function.
```c
void CIC_NUS_6102_Code() {
  u4 *puVar1;
  u4 *puVar2;
  uint in_t1;
  int in_t3;
  int unaff_s3;
  u4 unaff_s4;
  u4 unaff_s5;
  u4 unaff_s7;
  
  _PI_DRAM_ADDR = in_t1 & 0x1fffffff;
  do {
  } while ((_PI_STATUS & 2) != 0);
  
  __PI_DMA_CART_ADDR = in_t3 + 0x1000U & 0x1fffffff;
  _PI_DMA_WRITE_LEN = 0xfffff;
  
  do {
  } while ((_PI_STATUS & 1) != 0);
  
  if (_SP_PC_BASE != 0) {
    _SP_PC_BASE = 0;
  }
  
  _SP_STATUS = 0xaaaaae;
  _MI_INTR_MASK = 0x555;
  _SI_STATUS = 0;
  _AI_STATUS = 0;
  _MI_BASE = 0x800;
  _PI_STATUS = 2;
  
  if (unaff_s3 == 0) {
    _CART_DOMAIN_ADDRESS = 0xb0000000; // (CART_DOM1_ADDR2)
  }
  else {
    _CART_DOMAIN_ADDRESS = 0xa6000000; // (CART_DOM1_ADDR1)
  }
  
  // Write Zeros To Entire RSP DMEM & IMEM Regions
  
  current_address = &SP_MEM_BASE;
  _DAT_a0000300 = unaff_s4;
  _DAT_a0000304 = unaff_s3;
  _DAT_a000030c = unaff_s5;
  _DAT_a0000314 = unaff_s7;
  
  // Clear RSP DMEM
  do {
    next_address = current_address + 1;
    *current_address = 0;
    current_address = next_address;
  } while (next_address != &RSP_IMEM_START);
  
  
  // Clear RSP IMEM
  current_address = &RSP_IMEM_START;
  
  do {
    next_address = current_address + 1;
    *current_address = 0;
    current_address = next_address;
  } while (next_address != 0xa4002000);
                  
  Boot_Address_Offset(); // Boot_Address_Offset == 0xb0000008
  return;
}
```

## SevenSeventyEight()
This function loops 4 times and sums up the output from the `EightEighty_a4000880` function.
```c
u8 SevenSeventyEight_a4000778() {
  undefined4 in_v1;
  
  int count = 0;
  int total = 0;
  while (count < 4) {
    count += 1;
    total += EightEighty_a4000880();
  };
  FUN_a4000a40(total >> 2, 1);
  return CONCAT44(total >> 2, in_v1);
}
```

## EightEighty()

```c
u4 EightEighty_a4000880() {
  int iVar5;
  
  int counter = 0;
  int result = 0;
  int iVar5 = 0;
  
  while (counter < 0x50) {
    if (iVar5 > 0x3f) {
      return 0;
    }
    
    int iVar1 = FUN_a400090c(iVar5);
    if (iVar1 > 0) {
      result += (iVar1 - counter) * iVar5;
      counter = iVar1;
    }
    iVar5 += 1;
  }
  
  result = FUN_a4000980(result * 0x16  - 0x370);
  return result;
}
```

---
# Assembly Code

Some basics before reading the assembly listing:
```
$t0.. Temporary registers
$s0.. Saved registers (get saved on stack)
$k0 & $K1 Reserved for Kernal
$gp - Global Pointer
$sp - Stack Pointer (location of stack in memory)
$fp - Frame Pointer
$v0 - function result 32bit
$v1 - function result 64bit
$a0.. - function argument registers
$ra - return address from function
```
After running the boot code in an emulator I traced each unique instruction executed and made notes on the purpose of each instruction.

The boot code that executed came to 438 lines of MIPS assembly which is listed below:
```asm
; Format of code is 0xMEMORY_ADDRESS: [HEX_BYTES] DISSASSEMBLED_BYTES]
; First initialise the Coprocessor 0 memory
; Copy $zero to C0_CAUSE (Cause of Last Exception) in coprocessor 0.
; Repeated for Timer Count (C0_COUNT) and Timer Compare (C0_COMPARE)
0xa4000040: [40806800] mtc0 $zero,C0_CAUSE ; Cause of Last Exception
0xa4000044: [40804800] mtc0 $zero,C0_COUNT
0xa4000048: [40805800] mtc0 $zero,C0_COMPARE

; set the $t0 register to 
; $t0 = (0xa470 << 16);
; $t0 = 0xA4700000
0xa400004c: [3c08a470] lui $t0,0xa470 ; Load Upper Immediate

; Now we add 0 to the $t0 register for some reason…
; $t0 = $t0 +0;
; So now $t0 = 0xA4700000
0xa4000050: [25080000] addiu $t0,$t0,0 ; Add Immediate Unsigned

; Now we use add 12 to $t0 and dereference it as a pointer
; $t1 = MEM[$t0 + 12];
; $t1 = MEM[0xA4700000 + 12];
; So now $t1 = 0
0xa4000054: [8d09000c] lw $t1,12($t0) ; Load Word

; if $t1 != $zero advance_pc(0xA4000410 << 2));
; Since $t1 does equal 0  we don’t branch and go straight to next instruction
0xa4000058: [152000ed] bne $t1,$zero,0xA4000410 ; Branch on Not Equal

; Now we are going to initialise some values on the STACK
; So first lets update the Stack Pointer ($sp) to give us 24 bytes
; before running: $sp = 0xA4001FF0
; $sp = $sp - 24
; after running: $sp = 0xA4001FD8
0xa4000060: [27bdffe8] addiu $sp,$sp,-24 ; Add Immediate Unsigned

; Now that we have the 24 bytes lets store the S registers to save them
; MEM[$sp + 0] = $s3; ($s3 was 0 when executing)
0xa4000064: [afb30000] sw $s3,0($sp) ; Store word
; MEM[$sp + 4] = $s4;  ($s4 was 1 when executing)
0xa4000068: [afb40004] sw $s4,4($sp)
; MEM[$sp + 8] = $s5;  ($s5 was 0 when executing)
0xa400006c: [afb50008] sw $s5,8($sp)
; MEM[$sp + 12] = $s6;  ($s6 was 0x3F when executing)
0xa4000070: [afb6000c] sw $s6,12($sp)
; MEM[$sp + 16] = $s7;  ($s7 was 0 when executing)
0xa4000074: [afb70010] sw $s7,16($sp)

; Now lets
0xa4000078: [3c08a470] lui $t0,0xa470 ; Load Upper Immediate
0xa400007c: [25080000] addiu $t0,$t0,0
0xa4000080: [3c0aa3f8] lui $t2,0xa3f8 ; Load Upper Immediate
0xa4000084: [3c0ba3f0] lui $t3,0xa3f0 ; Load Upper Immediate
0xa4000088: [3c0ca430] lui $t4,0xa430 ; Load Upper Immediate
0xa400008c: [258c0000] addiu $t4,$t4,0
0xa4000090: [34090040] ori $t1,$zero,0x40
0xa4000094: [ad090004] sw $t1,4($t0)

0xa4000098: [24111f40] li $s1,8000 ; Load how many times to loop into $s1 (8000)

; —— Start of Loop (8000 times) ——
; Loop seems to be waiting for other hardware to init
; it simply counts down from 8000 to zero
0xa400009c: [00000000] nop ; do nothing while we wait for other hardware
0xa40000a0: [2231ffff] addi $s1,$s1,-1 ; $s1=$s1-1
0xa40000a4: [1620fffd] bne $s1,$zero,0xA400009C
; —— End of Loop ——

0xa40000ac: [ad000008] sw $zero,8($t0)
0xa40000b0: [34090014] ori $t1,$zero,0x14
0xa40000b4: [ad09000c] sw $t1,12($t0)
0xa40000b8: [ad000000] sw $zero,0($t0)

0xa40000bc: [24110004] li $s1,4 ; Load how many times to loop into $s1 (4)

; —— Start of Loop (4 times) ——
0xa40000c0: [00000000] nop 
0xa40000c4: [2231ffff] addi $s1,$s1,-1 ; $s1=$s1-1
0xa40000c8: [1620fffd] bne $s1,$zero,0xA40000C0
; —— End of Loop ——

0xa40000d0: [3409000e] ori $t1,$zero,0xe
0xa40000d4: [ad090000] sw $t1,0($t0)

0xa40000d8: [24110020] li $s1,32  ; Load how many times to loop into $s1 (32)

; —— Start of Loop (32 times) ——
0xa40000dc: [2231ffff] addi $s1,$s1,-1
0xa40000e0: [1620fffe] bne $s1,$zero,0xA40000DC
; —— End of Loop ——

0xa40000e8: [ad890000] sw $t1,0($t4)
0xa40000ec: [3c091808] lui $t1,0x1808 ; Load Upper Immediate
0xa40000f0: [35292838] ori $t1,$t1,0x2838
0xa40000f4: [ad490008] sw $t1,8($t2)
0xa40000f8: [ad400014] sw $zero,20($t2)
0xa40000fc: [3c098000] lui $t1,0x8000 ; Load Upper Immediate
0xa4000100: [ad490004] sw $t1,4($t2)
0xa4000104: [00006825] or $t5,$zero,$zero
0xa4000108: [00007025] or $t6,$zero,$zero
0xa400010c: [3c0fa3f0] lui $t7,0xa3f0 ; Load Upper Immediate
0xa4000110: [0000c025] or $t8,$zero,$zero
0xa4000114: [3c19a3f0] lui $t9,0xa3f0 ; Load Upper Immediate
0xa4000118: [3c16a000] lui $s6,0xa000 ; Load Upper Immediate
0xa400011c: [0000b825] or $s7,$zero,$zero
0xa4000120: [3c06a3f0] lui $a2,0xa3f0 ; Load Upper Immediate
0xa4000124: [3c07a000] lui $a3,0xa000 ; Load Upper Immediate
0xa4000128: [00009025] or $s2,$zero,$zero
0xa400012c: [3c14a000] lui $s4,0xa000 ; Load Upper Immediate

; Assign 72 Bytes on Stack
0xa4000130: [27bdffb8] addiu $sp,$sp,-72
0xa4000134: [03a0f025] or $s8,$sp,$zero
0xa4000138: [3c10a430] lui $s0,0xa430 # Load Upper Immediate
0xa400013c: [8e100004] lw $s0,4($s0)
0xa4000140: [3c110101] lui $s1,0x101 # Load Upper Immediate
0xa4000144: [26310101] addiu $s1,$s1,257
0xa4000148: [16110005] bne $s0,$s1,0xA4000160
0xa4000160: [24100400] li $s0,1024
0xa4000164: [35718000] ori $s1,$t3,0x8000

; —— Start of Loop (5 times) ——
0xa4000168: [ae2e0004] sw $t6,4($s1)
0xa400016c: [25f5000c] addiu $s5,$t7,12

; Call Function $v0 = SevenSeventyEight()
0xa4000170: [0d0001de] jal 0xA4000778
; Break out of loop if $v0 = 0 ($v0 is the return value of SevenSeventyEight())
0xa4000178: [10400038] beq $v0,$zero,0xA400025C

0xa4000180: [afa20000] sw $v0,0($sp)
0xa4000184: [24092000] li $t1,8192
0xa4000188: [ad890000] sw $t1,0($t4)
0xa400018c: [8deb0000] lw $t3,0($t7)
0xa4000190: [3c08f0ff] lui $t0,0xf0ff
0xa4000194: [01685824] and $t3,$t3,$t0
0xa4000198: [afab0004] sw $t3,4($sp)

; Delete 8 Bytes on Stack
0xa400019c: [23bd0008] addi $sp,$sp,8
0xa40001a0: [24091000] li $t1,4096
0xa40001a4: [ad890000] sw $t1,0($t4)
0xa40001a8: [3c08b019] lui $t0,0xb019
0xa40001ac: [1568000c] bne $t3,$t0,0xA40001E0
0xa40001b4: [3c080800] lui $t0,0x800
0xa40001b8: [0308c020] add $t8,$t8,$t0
0xa40001bc: [0330c820] add $t9,$t9,$s0
0xa40001c0: [0330c820] add $t9,$t9,$s0
0xa40001c4: [3c080020] lui $t0,0x20
0xa40001c8: [02c8b020] add $s6,$s6,$t0
0xa40001cc: [0288a020] add $s4,$s4,$t0
0xa40001d0: [00129040] sll $s2,$s2,1
0xa40001d4: [22520001] addi $s2,$s2,1
0xa40001d8: [10000003] b 0xA40001E8
0xa40001e8: [24082000] li $t0,8192
0xa40001ec: [ad880000] sw $t0,0($t4)
0xa40001f0: [8de90024] lw $t1,36($t7)
0xa40001f4: [8dfa0000] lw $k0,0($t7)
0xa40001f8: [24081000] li $t0,4096
0xa40001fc: [ad880000] sw $t0,0($t4)
0xa4000200: [3129ffff] andi $t1,$t1,0xffff
0xa4000204: [24080500] li $t0,1280
0xa4000208: [15280009] bne $t1,$t0,0xA4000230
0xa4000210: [3c1b0100] lui $k1,0x100
0xa4000214: [035bd024] and $k0,$k0,$k1
0xa4000218: [17400005] bne $k0,$zero,0xA4000230
0xa4000230: [3c08080c] lui $t0,0x80c
0xa4000234: [35081204] ori $t0,$t0,0x1204
0xa4000238: [ade80018] sw $t0,24($t7)
0xa400023c: [3c080800] lui $t0,0x800
0xa4000240: [01c87020] add $t6,$t6,$t0
0xa4000244: [01f07820] add $t7,$t7,$s0
0xa4000248: [01f07820] add $t7,$t7,$s0
0xa400024c: [25ad0001] addiu $t5,$t5,1
0xa4000250: [2da80008] sltiu $t0,$t5,8
0xa4000254: [1500ffc4] bne $t0,$zero,0xA4000168
; —— End of Loop ——

0xa400025c: [3c08c400] lui $t0,0xc400
0xa4000260: [ad48000c] sw $t0,12($t2)
0xa4000264: [3c088000] lui $t0,0x8000
0xa4000268: [ad480004] sw $t0,4($t2)
0xa400026c: [03c0e825] or $sp,$s8,$zero
0xa4000270: [00001825] or $v1,$zero,$zero

; —— Start of Loop (4 times) ——
0xa4000274: [8fa90004] lw $t1,4($sp)
0xa4000278: [3c08b009] lui $t0,0xb009
0xa400027c: [15280016] bne $t1,$t0,0xA40002D8
0xa40002d8: [ae370004] sw $s7,4($s1)
0xa40002dc: [24d5000c] addiu $s5,$a2,12
0xa40002e0: [8fa40000] lw $a0,0($sp)
; Delete 8 Bytes on Stack
0xa40002e4: [23bd0008] addi $sp,$sp,8
0xa40002e8: [24050001] li $a1,1

; Call Function AForty($a0,$a1)
0xa40002ec: [0d000290] jal 0xA4000A40
0xa40002f4: [8ce80000] lw $t0,0($a3)
0xa40002f8: [3c080008] lui $t0,0x8
0xa40002fc: [01074020] add $t0,$t0,$a3
0xa4000300: [8d090000] lw $t1,0($t0)
0xa4000304: [3c080010] lui $t0,0x10
0xa4000308: [01074020] add $t0,$t0,$a3
0xa400030c: [8d090000] lw $t1,0($t0)
0xa4000310: [3c080018] lui $t0,0x18
0xa4000314: [01074020] add $t0,$t0,$a3
0xa4000318: [8d090000] lw $t1,0($t0)
0xa400031c: [8ce80000] lw $t0,0($a3)
0xa4000320: [3c080008] lui $t0,0x8
0xa4000324: [01074020] add $t0,$t0,$a3
0xa4000328: [8d090000] lw $t1,0($t0)
0xa400032c: [3c080010] lui $t0,0x10
0xa4000330: [01074020] add $t0,$t0,$a3
0xa4000334: [8d090000] lw $t1,0($t0)
0xa4000338: [3c080018] lui $t0,0x18
0xa400033c: [01074020] add $t0,$t0,$a3
0xa4000340: [8d090000] lw $t1,0($t0)
0xa4000344: [3c080800] lui $t0,0x800
0xa4000348: [02e8b820] add $s7,$s7,$t0
0xa400034c: [00d03020] add $a2,$a2,$s0
0xa4000350: [00d03020] add $a2,$a2,$s0
0xa4000354: [3c080020] lui $t0,0x20
0xa4000358: [00e83820] add $a3,$a3,$t0
0xa400035c: [24630001] addiu $v1,$v1,1
0xa4000360: [006d402a] slt $t0,$v1,$t5
0xa4000364: [1500ffc3] bne $t0,$zero,0xA4000274
; —— End of Loop ——

0xa400036c: [3c0aa470] lui $t2,0xa470
0xa4000370: [001294c0] sll $s2,$s2,19
0xa4000374: [3c090006] lui $t1,0x6
0xa4000378: [35293634] ori $t1,$t1,0x3634
0xa400037c: [01324825] or $t1,$t1,$s2
0xa4000380: [ad490010] sw $t1,16($t2)
0xa4000384: [8d490010] lw $t1,16($t2)
0xa4000388: [3c08a000] lui $t0,0xa000
0xa400038c: [35080300] ori $t0,$t0,0x300
0xa4000390: [3c090fff] lui $t1,0xfff
0xa4000394: [3529ffff] ori $t1,$t1,0xffff
0xa4000398: [02c9b024] and $s6,$s6,$t1
0xa400039c: [ad160018] sw $s6,24($t0)
0xa40003a0: [03c0e825] or $sp,$s8,$zero

; Delete 72 Bytes on Stack
0xa40003a4: [27bd0048] addiu $sp,$sp,72
; Load the Saved S registers back from stack
0xa40003a8: [8fb30000] lw $s3,0($sp)
0xa40003ac: [8fb40004] lw $s4,4($sp)
0xa40003b0: [8fb50008] lw $s5,8($sp)
0xa40003b4: [8fb6000c] lw $s6,12($sp)
0xa40003b8: [8fb70010] lw $s7,16($sp)

; Delete 24 Bytes on Stack
0xa40003bc: [27bd0018] addiu $sp,$sp,24
0xa40003c0: [3c088000] lui $t0,0x8000
0xa40003c4: [25080000] addiu $t0,$t0,0
0xa40003c8: [25094000] addiu $t1,$t0,16384
0xa40003cc: [2529ffe0] addiu $t1,$t1,-32
0xa40003d0: [4080e000] mtc0 $zero,C0_TAGLO
0xa40003d4: [4080e800] mtc0 $zero,C0_TAGHI

; —— Start of Loop (until $at == 0, 512 times) ——
0xa40003d8: [bd080000] cache 0x8,0x0($t0)
0xa40003dc: [0109082b] sltu $at,$t0,$t1
0xa40003e0: [1420fffd] bne $at,$zero,0xA40003D8
; —— End of Loop ——

0xa40003e8: [3c088000] lui $t0,0x8000
0xa40003ec: [25080000] addiu $t0,$t0,0
0xa40003f0: [25092000] addiu $t1,$t0,8192
0xa40003f4: [2529fff0] addiu $t1,$t1,-16

; —— Start of Loop (until $at == 0, 512 times) ——
0xa40003f8: [bd090000] cache 0x9,0x0($t0)
0xa40003fc: [0109082b] sltu $at,$t0,$t1
0xa4000400: [1420fffd] bne $at,$zero,0xA40003F8
; —— End of Loop ——

0xa4000408: [10000013] b 0xA4000458
0xa4000458: [3c0aa400] lui $t2,0xa400
0xa400045c: [254a0000] addiu $t2,$t2,0
0xa4000460: [3c0bfff0] lui $t3,0xfff0
0xa4000464: [3c090010] lui $t1,0x10
0xa4000468: [014b5024] and $t2,$t2,$t3
0xa400046c: [3c08a400] lui $t0,0xa400
0xa4000470: [2529ffff] addiu $t1,$t1,-1
0xa4000474: [3c0ba400] lui $t3,0xa400
0xa4000478: [250804c0] addiu $t0,$t0,1216
0xa400047c: [256b0774] addiu $t3,$t3,1908
0xa4000480: [01094024] and $t0,$t0,$t1
0xa4000484: [01695824] and $t3,$t3,$t1
0xa4000488: [3c09a000] lui $t1,0xa000
0xa400048c: [010a4025] or $t0,$t0,$t2
0xa4000490: [016a5825] or $t3,$t3,$t2
0xa4000494: [25290000] addiu $t1,$t1,0

; —— Start of Loop (until $at == 0, 173 times) ——
0xa4000498: [8d0d0000] lw $t5,0($t0)
0xa400049c: [25080004] addiu $t0,$t0,4
0xa40004a0: [010b082b] sltu $at,$t0,$t3
0xa40004a4: [25290004] addiu $t1,$t1,4
0xa40004a8: [1420fffb] bne $at,$zero,0xA4000498
; —— End of Loop ——

0xa40004b0: [3c0c8000] lui $t4,0x8000
0xa40004b4: [258c0000] addiu $t4,$t4,0
0xa40004b8: [01800008] jr $t4

;  —— Start Function SevenSeventyEight (called 5 times) —— 
; This function basically preserves all the registers on stack
; then it calls function EightEighty() exactly 4 times
; Assign 160 Bytes on Stack
0xa4000778: [27bdff60] addiu $sp,$sp,-160

; Start Saving all the registers into the newly created stack space
0xa400077c: [afb00040] sw $s0,64($sp)
0xa4000780: [afb10044] sw $s1,68($sp)
0xa4000784: [00008825] or $s1,$zero,$zero
0xa4000788: [00008025] or $s0,$zero,$zero
0xa400078c: [afa20000] sw $v0,0($sp)
0xa4000790: [afa30004] sw $v1,4($sp)
0xa4000794: [afa40008] sw $a0,8($sp)
0xa4000798: [afa5000c] sw $a1,12($sp)
0xa400079c: [afa60010] sw $a2,16($sp)
0xa40007a0: [afa70014] sw $a3,20($sp)
0xa40007a4: [afa80018] sw $t0,24($sp)
0xa40007a8: [afa9001c] sw $t1,28($sp)
0xa40007ac: [afaa0020] sw $t2,32($sp)
0xa40007b0: [afab0024] sw $t3,36($sp)
0xa40007b4: [afac0028] sw $t4,40($sp)
0xa40007b8: [afad002c] sw $t5,44($sp)
0xa40007bc: [afae0030] sw $t6,48($sp)
0xa40007c0: [afaf0034] sw $t7,52($sp)
0xa40007c4: [afb80038] sw $t8,56($sp)
0xa40007c8: [afb9003c] sw $t9,60($sp)
0xa40007cc: [afb20048] sw $s2,72($sp)
0xa40007d0: [afb3004c] sw $s3,76($sp)
0xa40007d4: [afb40050] sw $s4,80($sp)
0xa40007d8: [afb50054] sw $s5,84($sp)
0xa40007dc: [afb60058] sw $s6,88($sp)
0xa40007e0: [afb7005c] sw $s7,92($sp)
0xa40007e4: [afbe0060] sw $s8,96($sp)
0xa40007e8: [afbf0064] sw $ra,100($sp)
; End Saving Registers to Stack

; —— Start of Loop (4 times) ——
0xa40007ec: [0d000220] jal 0xA4000880 ; Call function EightEighty()
0xa40007f4: [26100001] addiu $s0,$s0,1; $s0 = $s0 + 1
0xa40007f8: [2a090004] slti $t1,$s0,4 ' if $s0 < imm $t1 = 1
0xa40007fc: [1520fffb] bne $t1,$zero,0xA40007EC
; —— End of Loop ——

; Load all the registers back from the stack
0xa4000804: [00112082] srl $a0,$s1,2
0xa4000808: [0d000290] jal 0xA4000A40
0xa4000810: [8fbf0064] lw $ra,100($sp)
0xa4000814: [00111082] srl $v0,$s1,2
0xa4000818: [8fb10044] lw $s1,68($sp)
0xa400081c: [8fa30004] lw $v1,4($sp)
0xa4000820: [8fa40008] lw $a0,8($sp)
0xa4000824: [8fa5000c] lw $a1,12($sp)
0xa4000828: [8fa60010] lw $a2,16($sp)
0xa400082c: [8fa70014] lw $a3,20($sp)
0xa4000830: [8fa80018] lw $t0,24($sp)
0xa4000834: [8fa9001c] lw $t1,28($sp)
0xa4000838: [8faa0020] lw $t2,32($sp)
0xa400083c: [8fab0024] lw $t3,36($sp)
0xa4000840: [8fac0028] lw $t4,40($sp)
0xa4000844: [8fad002c] lw $t5,44($sp)
0xa4000848: [8fae0030] lw $t6,48($sp)
0xa400084c: [8faf0034] lw $t7,52($sp)
0xa4000850: [8fb80038] lw $t8,56($sp)
0xa4000854: [8fb9003c] lw $t9,60($sp)
0xa4000858: [8fb00040] lw $s0,64($sp)
0xa400085c: [8fb20048] lw $s2,72($sp)
0xa4000860: [8fb3004c] lw $s3,76($sp)
0xa4000864: [8fb40050] lw $s4,80($sp)
0xa4000868: [8fb50054] lw $s5,84($sp)
0xa400086c: [8fb60058] lw $s6,88($sp)
0xa4000870: [8fb7005c] lw $s7,92($sp)
0xa4000874: [8fbe0060] lw $s8,96($sp)

; Return back to wherever called this function
0xa4000878: [03e00008] jr $ra ; return;
; ——— End Function ——

; —— Start Function EightEighty (runs 20 times) ——
; Add 32 Bytes on Stack
0xa4000880: [27bdffe0] addiu $sp,$sp,-32
0xa4000884: [afbf001c] sw $ra,28($sp); store the return address on the stack

0xa4000888: [00004825] or $t1,$zero,$zero
0xa400088c: [00005825] or $t3,$zero,$zero
0xa4000890: [00006025] or $t4,$zero,$zero

; —— Start of Loop (? times) ——
0xa4000894: [299a0040] slti $k0,$t4,64
0xa4000898: [53400018] beql $k0,$zero,0xA40008FC ; if $k0==0 return;

; Call Function NinetyC()
0xa40008a0: [0d000243] jal 0xA400090C
0xa40008a8: [58400008] blezl $v0,0xA40008CC
0xa40008b0: [0049d023] subu $k0,$v0,$t1
0xa40008b4: [034c0019] multu $k0,$t4
0xa40008b8: [00404825] or $t1,$v0,$zero
0xa40008bc: [0000d012] mflo $k0
0xa40008c0: [017a5821] addu $t3,$t3,$k0
0xa40008c4: [00000000] nop 
0xa40008c8: [293a0050] slti $k0,$t1,80
0xa40008cc: [1740fff1] bne $k0,$zero,0xA4000894
; —— End of Loop ——

0xa40008d4: [000b2080] sll $a0,$t3,2
0xa40008d8: [008b2023] subu $a0,$a0,$t3
0xa40008dc: [00042080] sll $a0,$a0,2
0xa40008e0: [008b2023] subu $a0,$a0,$t3
0xa40008e4: [00042040] sll $a0,$a0,1

; Call function NineEighty()
0xa40008e8: [0d000260] jal 0xA4000980 ; JUMP to Function
0xa40008f0: [10000003] b 0xA4000900
0xa40008fc: [8fbf001c] lw $ra,28($sp) ; load the return address on the stack

; Delete 32 Bytes on Stack
0xa4000900: [27bd0020] addiu $sp,$sp,32
; return from function
0xa4000904: [03e00008] jr $ra; return;
; ——— End Function ——


; —— Start Function  NinetyC (runs 288 times) ——
; Add 40 Bytes on Stack
0xa400090c: [27bdffd8] addiu $sp,$sp,-40
0xa4000910: [afbf001c] sw $ra,28($sp)
0xa4000914: [00001025] or $v0,$zero,$zero
0xa4000918: [0d000290] jal 0xA4000A40
0xa4000920: [0000f025] or $s8,$zero,$zero
0xa4000924: [241affff] li $k0,-1
0xa4000928: [ae9a0004] sw $k0,4($s4)
0xa400092c: [8e830004] lw $v1,4($s4)
0xa4000930: [ae9a0000] sw $k0,0($s4)
0xa4000934: [ae9a0000] sw $k0,0($s4)
0xa4000938: [0000e025] or $gp,$zero,$zero
0xa400093c: [00031c02] srl $v1,$v1,16
0xa4000940: [307a0001] andi $k0,$v1,0x1
0xa4000944: [53400003] beql $k0,$zero,0xA4000954
0xa400094c: [24420001] addiu $v0,$v0,1
0xa4000950: [279c0001] addiu $gp,$gp,1
0xa4000954: [2b9a0008] slti $k0,$gp,8
0xa4000958: [1740fff9] bne $k0,$zero,0xA4000940
0xa4000960: [27de0001] addiu $s8,$s8,1
0xa4000964: [2bda000a] slti $k0,$s8,10
0xa4000968: [5740ffef] bnel $k0,$zero,0xA4000928
0xa4000970: [8fbf001c] lw $ra,28($sp)

; Delete 40 Bytes on Stack
0xa4000974: [27bd0028] addiu $sp,$sp,40
; Return from function
0xa4000978: [03e00008] jr $ra; return;
; ——— End Function ——


; —— Start Function NineEighty ——
; Add 40 Bytes on Stack
0xa4000980: [27bdffd8] addiu $sp,$sp,-40
0xa4000984: [afbf001c] sw $ra,28($sp)
0xa4000988: [afa40020] sw $a0,32($sp)
0xa400098c: [a3a00027] sb $zero,39($sp)
0xa4000990: [00004025] or $t0,$zero,$zero
0xa4000994: [00005025] or $t2,$zero,$zero
0xa4000998: [340dc800] ori $t5,$zero,0xc800
0xa400099c: [00007025] or $t6,$zero,$zero
0xa40009a0: [29da0040] slti $k0,$t6,64
0xa40009a4: [57400004] bnel $k0,$zero,0xA40009B8
0xa40009b8: [0d000290] jal 0xA4000A40

; Call Function AaDeeZero()
0xa40009c0: [0d0002b4] jal 0xA4000AD0

; Call Function AaDeeZero()
0xa40009c8: [0d0002b4] jal 0xA4000AD0
0xa40009d0: [93ba0027] lbu $k0,39($sp)
0xa40009d4: [241b0320] li $k1,800
0xa40009d8: [8fa40020] lw $a0,32($sp)
0xa40009dc: [035b0019] multu $k0,$k1
0xa40009e0: [00004012] mflo $t0
0xa40009e4: [0104d023] subu $k0,$t0,$a0
0xa40009e8: [07430003] bgezl $k0,0xA40009F8
0xa40009f0: [0088d023] subu $k0,$a0,$t0
0xa40009f4: [034dd82a] slt $k1,$k0,$t5
0xa40009f8: [53600004] beql $k1,$zero,0xA4000A0C
0xa4000a00: [03406825] or $t5,$k0,$zero
0xa4000a04: [01c05025] or $t2,$t6,$zero
0xa4000a08: [8fa40020] lw $a0,32($sp)
0xa4000a0c: [0104d82a] slt $k1,$t0,$a0
0xa4000a10: [53600006] beql $k1,$zero,0xA4000A2C
0xa4000a18: [25ce0001] addiu $t6,$t6,1
0xa4000a1c: [29db0041] slti $k1,$t6,65
0xa4000a20: [5760ffe0] bnel $k1,$zero,0xA40009A4
0xa4000a2c: [00021042] srl $v0,$v0,1
0xa4000a30: [8fbf001c] lw $ra,28($sp)

; Delete 40 Bytes on Stack
0xa4000a34: [27bd0028] addiu $sp,$sp,40
0xa4000a38: [03e00008] jr $ra ; return;
; ——— End Function ——


; —— Start Function AForty ——
; Add 8 Bytes on Stack
0xa4000a40: [27bdffd8] addiu $sp,$sp,-40
0xa4000a44: [308400ff] andi $a0,$a0,0xff
0xa4000a48: [241b0001] li $k1,1
0xa4000a4c: [3884003f] xori $a0,$a0,0x3f
0xa4000a50: [afbf001c] sw $ra,28($sp)
0xa4000a54: [14bb0003] bne $a1,$k1,0xA4000A64
0xa4000a5c: [3c1a8000] lui $k0,0x8000
0xa4000a60: [01fa7825] or $t7,$t7,$k0
0xa4000a64: [309a0001] andi $k0,$a0,0x1
0xa4000a68: [001ad180] sll $k0,$k0,6
0xa4000a6c: [01fa7825] or $t7,$t7,$k0
0xa4000a70: [309a0002] andi $k0,$a0,0x2
0xa4000a74: [001ad340] sll $k0,$k0,13
0xa4000a78: [01fa7825] or $t7,$t7,$k0
0xa4000a7c: [309a0004] andi $k0,$a0,0x4
0xa4000a80: [001ad500] sll $k0,$k0,20
0xa4000a84: [01fa7825] or $t7,$t7,$k0
0xa4000a88: [309a0008] andi $k0,$a0,0x8
0xa4000a8c: [001ad100] sll $k0,$k0,4
0xa4000a90: [01fa7825] or $t7,$t7,$k0
0xa4000a94: [309a0010] andi $k0,$a0,0x10
0xa4000a98: [001ad2c0] sll $k0,$k0,11
0xa4000a9c: [01fa7825] or $t7,$t7,$k0
0xa4000aa0: [309a0020] andi $k0,$a0,0x20
0xa4000aa4: [001ad480] sll $k0,$k0,18
0xa4000aa8: [01fa7825] or $t7,$t7,$k0
0xa4000aac: [241b0001] li $k1,1
0xa4000ab0: [14bb0003] bne $a1,$k1,0xA4000AC0
0xa4000ab8: [3c1aa430] lui $k0,0xa430
0xa4000abc: [af400000] sw $zero,0($k0)
0xa4000ac0: [8fbf001c] lw $ra,28($sp)
; Delete 40 Bytes on Stack
0xa4000ac4: [27bd0028] addiu $sp,$sp,40
0xa4000ac8: [03e00008] jr $ra
; ——— End Function ——


; —— Start Function AaDeeZero ——
; Add 40 Bytes on Stack and save return address
0xa4000ad0: [27bdffd8] addiu $sp,$sp,-40
0xa4000ad4: [afbf001c] sw $ra,28($sp)

; $k0 = 8192
0xa4000ad8: [241a2000] li $k0,8192
; $k1 = 0xa430
0xa4000adc: [3c1ba430] lui $k1,0xa430

; MEM[$k1] = $k0 (8192)
0xa4000ae0: [af7a0000] sw $k0,0($k1)
0xa4000ae4: [0000f025] or $s8,$zero,$zero
0xa4000ae8: [8ebe0000] lw $s8,0($s5)
0xa4000aec: [241a1000] li $k0,4096
0xa4000af0: [af7a0000] sw $k0,0($k1)
0xa4000af4: [241b0040] li $k1,64
0xa4000af8: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^6
0xa4000afc: [001bd982] srl $k1,$k1,6
0xa4000b00: [0000d025] or $k0,$zero,$zero
0xa4000b04: [035bd025] or $k0,$k0,$k1
0xa4000b08: [241b4000] li $k1,16384
0xa4000b0c: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^13
0xa4000b10: [001bdb42] srl $k1,$k1,13
0xa4000b14: [035bd025] or $k0,$k0,$k1
0xa4000b18: [3c1b0040] lui $k1,0x40
0xa4000b1c: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^20
0xa4000b20: [001bdd02] srl $k1,$k1,20
0xa4000b24: [035bd025] or $k0,$k0,$k1
0xa4000b28: [241b0080] li $k1,128
0xa4000b2c: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^4
0xa4000b30: [001bd902] srl $k1,$k1,4
0xa4000b34: [035bd025] or $k0,$k0,$k1
0xa4000b38: [341b8000] ori $k1,$zero,0x8000
0xa4000b3c: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^11
0xa4000b40: [001bdac2] srl $k1,$k1,11
0xa4000b44: [035bd025] or $k0,$k0,$k1
0xa4000b48: [3c1b0080] lui $k1,0x80
0xa4000b4c: [037ed824] and $k1,$k1,$s8
; Now divide $k1 by 2^18
0xa4000b50: [001bdc82] srl $k1,$k1,18 ; $k1 = $k1 >> 18;
0xa4000b54: [035bd025] or $k0,$k0,$k1 ; $k0 = $k0 | $k1; 
0xa4000b58: [a09a0000] sb $k0,0($a0) ; MEM[$a0] = $k0

; Load return address back from stack
0xa4000b5c: [8fbf001c] lw $ra,28($sp)

; Delete 40 Bytes on Stack
0xa4000b60: [27bd0028] addiu $sp,$sp,40
0xa4000b64: [03e00008] jr $ra
; ——— End Function ——
```

# References
[^1]: http://www.it.uu.se/education/course/homepage/os/vt18/module-1/memory-mapped-io/
[^2]: http://www.mrc.uidaho.edu/mrc/people/jff/digital/MIPSir.html 
[^3]: Talcardo Jirones in the comment sections of this page
[^4]: [Micro-64](http://micro-64.com/database/gamecic.shtml)
[^5]: [ROM - en64 wiki](http://en64.shoutwiki.com/wiki/ROM)
