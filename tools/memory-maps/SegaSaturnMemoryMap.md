---
layout: post
tags: 
- tools
- segasaturn
- saturn
- memorymap
title: Sega Saturn Memory Map
image: /public/images/saturn/Sega Saturn Memory Map.jpg
permalink: /segaSaturnMemoryMap
recommend: segasaturn
editlink: ../tools/memory-maps/SegaSaturnMemoryMap.html
---

# Main memory Map
The table below highlights the main areas that can be accessed in Sega Saturn games.

Start | End | Name | Description
---|---|---|---
0x00 | 0x000FFFFF | Boot ROM | Repets every 512 kb
0x00100000 | 0x0017FFFF |	SMPC registers | 
0x00180000 | 0x001FFFFF | Backup RAM | 
0x00200000 | 0x002FFFFF | Work RAM Low | 
0x00300000 | 0x003FFFFF | Random data | Random on every read (mostly 0x00)
0x00400000 | 0x007FFFFF | Zero |  Always returns 0x0000
0x00800000 | 0x00FFFFFF | Unknown |  Always returns 0x00000001000200030004000500060007
0x01000000 | 0x017FFFFF | Master Init (MINIT) |  Data written goes to Master SH-2 `Free Running Timer`. Section is Write Only.
0x01800000 | 0x01FFFFFF | Slave Init (SINIT) | Data written goes to Slave SH-2 `Free Running Timer`. Section is Write Only.
0x02000000 | 0x03FFFFFF | CS0 | Cartridge 0
0x04000000 | 0x04FFFFFF | CS1 | Cartridge 1
0x05000000 | 0x057FFFFF | Dummy | 
0x05800000 | 0x058FFFFF | CD-ROM registers (CS2) | Repeats every 64 Bytes 
0x05900000 | 0x059FFFFF | Unknown | It will lockup the saturn when read
0x05A00000 | 0x05AFFFFF | 68000 Audio Work RAM | Stores audio data that will be played
0x05B00000 | 0x05BFFFFF | SCSP registers | 
0x05C00000 | 0x05C7FFFF | VDP1 VRAM | Video RAM for the 3D VDP1
0x05C80000 | 0x05CFFFFF | VDP1 Framebuffer | Current Image Buffer for the VDP1 to render to
0x05D00000 | 0x05D7FFFF | VDP1 Registers | VDP1 variables that change the functionality of how the VDP1 operates
0x05D80000 | 0x05DFFFFF | Lockup when read | 
0x05E00000 | 0x05EFFFFF | VDP2 VRAM | Video Display Processor 2 (Background) Video RAM - Repeats every 512 kb
0x05F00000 | 0x05F7FFFF | VDP2 CRAM | VDP2 Color RAM - Basically the background Palette - Repeats every 4kb
0x05F80000 | 0x05FBFFFF | VDP2 registers | VDP2 variables that change the functionality of how the VDP2 operates - Repeats every 512 bytes
0x05FC0000 | 0x05FDFFFF | Unknown | Always returns 0x000E0000
0x05FE0000 | 0x05FEFFFF | SCU registers | Repeats every 256 bytes
0x05FF0000 | 0x05FFFFFF | Unknown registers | Repeats every 256 bytes
0x06000000 | 0x07FFFFFF | Work RAM High | 

<script src="/public/js/badger-accordion.min.js" />


    <dl class="badger-accordion js-badger-accordion">
        <dt class="badger-accordion__header">
            <button class="badger-accordion__trigger js-badger-accordion-header">
                <h1 class="badger-accordion__trigger-title">
                    Boot ROM
                </h1>
                <div class="badger-accordion__trigger-icon">
                </div>
            </button>
        </dt>
        <dd class="badger-accordion__panel js-badger-accordion-panel">
            <div class="badger-accordion__panel-inner text-module js-badger-accordion-panel-inner">
                <p>The Boot ROM is...</p>
            </div>
        </dd>
        <dt class="badger-accordion__header">
            <button class="badger-accordion__trigger js-badger-accordion-header">
                <div class="badger-accordion__trigger-title">
                   SMPC registers
                </div>
                <div class="badger-accordion__trigger-icon">
                </div>
            </button>
        </dt>
        <dd class="badger-accordion__panel js-badger-accordion-panel">
            <div class="badger-accordion__panel-inner text-module js-badger-accordion-panel-inner">
                <p>SMPC</p>
            </div>
        </dd>
        <dt class="badger-accordion__header">
            <button class="badger-accordion__trigger js-badger-accordion-header">
                <div class="badger-accordion__trigger-title">
                    Backup RAM
                </div>
                <div class="badger-accordion__trigger-icon">
                </div>
            </button>
        </dt>
        <dd class="badger-accordion__panel js-badger-accordion-panel">
            <div class="badger-accordion__panel-inner text-module js-badger-accordion-panel-inner">
                <p>Backup ram..</p>
            </div>
        </dd>
    </dl>

<script>
var accordionDomNode = document.querySelector('.js-badger-accordion');
var accordion = new BadgerAccordion(accordionDomNode); 
</script>

---
# References
[^1]: [SH-2CPU - Yabause](https://wiki.yabause.org/index.php5?title=SH-2CPU)
