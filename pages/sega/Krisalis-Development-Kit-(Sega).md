---
layout: post
tags:
- devkit
- hardware
- gamegear
- sms
- sega
title: Krisalis Development Kit (Sega Master System/Game Gear)
thumbnail: /public/consoles/Sega Game Gear.png
image: /public/nAxI7tmNzVZDcZMLzn8JA_img_3.png
permalink: /krisalis-development-kit-(sega)/
breadcrumbs:
  - name: Home
    url: /
  - name: Development Kits
    url: /devkit
  - name: Krisalis Development Kit (Sega Master System/Game Gear)
    url: #
recommend: devkit
editlink: /sega/Krisalis-Development-Kit-(Sega).md
---

# Krisalis Development Kit

In the early to mid 1990s Krisalis Software Ltd created their own in-house sega Game Gear and Master System Development Kit. 

Shaun Hollingworth and Matt Furniss are credited with creation of the kits hardware and software components. Presumably Shaun was in charge of the hardware (as his name is credited on the board itself) and Matt the software BIOS.

It seems to be very similar to Spidersofts own in-house dev kit (called ESYS) and it seems they worked quite closely on it. They also shared development software between the two software houses such as the Krisalis Assembler (KASM).

![image alt text]({{ site.url }}/public/nAxI7tmNzVZDcZMLzn8JA_img_0.jpg)

## Gear Video Decoder

The Gear Video decoder was a board created by Shaun Hollingworth, which presumably is the board that connects the Game Gear to the TV monitor or development system. 

![image alt text]({{ site.url }}/public/nAxI7tmNzVZDcZMLzn8JA_img_1.jpg)

Games World magazine even featured a version of this hardware (which they called ESYS-RGB) in the first issue dated July 1994, which was sold to other games studios or press outlets rather than to the general public. Presumably this is the hardware they used to provide screenshots for the Game Gear games published in the magazine.

![image alt text]({{ site.url }}/public/nAxI7tmNzVZDcZMLzn8JA_img_2.jpg)

## Krisalis and Spidersoft collaboration

It seems both Krisalis and Spidersoft were creating their own development hardware in collaboration with one another, presumably sharing experience of what works and what doesn't work so the other studio can improve their own development kit. They were both mentioned in the Games World article as creator of the ESYS-RGB adapter.

RetroSpark on SMSPower.org has the following to say on the comparison:


> This development system shares many similarities with Spidersoft's ESYS (described by Matt Taylor), including apparent support for easily swapping the ribbon cable and cartridge for use on a different system. 
> 
> In fact, we discussed the possibility that this box is ESYS. Matt mentioned that Krisalis wrote the software for ESYS - perhaps they were also subcontracted to build the hardware. However, there is at least one difference between this box and Matt's - this box does not appear to have a battery backup for the SRAM. 

## ESYS Development Kit

Matt Taylor mentions the similar ESYS development tool used in-house at rival software company Spidersoft:

```

Spidersoft designed and built its own development system called ESYS. This was a ROM emulator box about the size of house brick containing 512Kb of RAM connected to a PC via a parallel cable. 

Several were in use at Spidersoft at any one time and they were also sold to other developers. The beauty of the system was that different cartridge interface cards were produced for different consoles, meaning that the same ESYS box could be used for Game Boy, Game Gear, Master System, Megadrive, SNES, NES, and even Jaguar. 

The ESYS box also had battery backup meaning that ROM images downloaded to it could be retained even when removed from a PC, making demonstrating work to publishers very easy. Spidersoft also produced a modified Game Gear and interface board that allowed video output from a Game Gear to be put onto a monitor or television, which was useful during development.

```

## Development Kit BIOS

The BIOS for this development kit has been dumped by the talented people over at SMSPower.org and it runs out that you can run it in an emulator as either a Master System ROM OR a Game Gear ROM! The Bootup screen shows a different image depending on if its being run as a Master System game or Game Gear as can be seen in the screenshots below.

## Master System Mode

![image alt text]({{ site.url }}/public/nAxI7tmNzVZDcZMLzn8JA_img_3.png)

## Game Gear Mode

![image alt text]({{ site.url }}/public/nAxI7tmNzVZDcZMLzn8JA_img_4.png)

---
# PC Development Tools used with Krisalis

Initially Krisalis used PDS but then later moved to their own handwritten development toolchain.

## What was PDS?

PDS stands for the Programmers Development System created by "Programmers Development Systems Ltd" (More Information: [http://www.cpcwiki.eu/index.php/PDS_development_system](http://www.cpcwiki.eu/index.php/PDS_development_system))

It seems to be waiting for the PDS running the on programmers PC to send the code through the hardware interface into the development kit.

Shaun Hollingworth on this development kit:
> The version you have was originally designed to support the PDS Z80 dev system, but increasingly people ran out of symbol space when developing, so I hastily ported our in house z80 assembler (also written by yours truly) which ran on Atari STs to the PC (completely rewritten in 8086 16 bit code) which solved that problem. KasmZ80 also had a z80 debugger with breakpoints using some z80 RST xx instruction, though I can't remember which one. 
> 
> We used it for all z80 dev work at Krisalis. We had versions for other CPUs including ARM. 

## KasmZ80

So they initially used the PDS Z80 software development kit but due to lack of symbol space (symbols are names of variables, functions etc) they needed to use their own assembler which Shawn ported from the Atari ST to the PC in 1992.

It was called the Krisalis Assembler Z80 (KasmZ80) and they later distributed versions to other software companies such as Spidersoft.

Matt Taylor (ex Spidersoft employee) on developing Lemmings 2 with KASM:

> The development compilers and debugging software, called KASM, was written by Krisalis Software and allowed for real-time debugging and breakpointing of code running on any device attached to the ESYS box. 

### Single Codebase for multiple platforms

Matt Taylor (ex Spidersoft employee) on developing Lemmings 2 with KASM for both Master System and Game Gear[^1]:

> The code was written using a single codebase for both MS/GG versions as well as the Game Boy version, and was developed in around 8 months.


### Example Code for KASMz80 (Playing Sound Samples)

Thanks to MattTaylor on SMSPower.org[^2] we have an example source file which would be parsed by the KASM assembler and produced a ROM for Game Gear and Master System!

```assembly

SMPRTE   DB 0 

INSREG:   LD C,#80      ;Initialise sound registers 

   LD B,3 

ISR10:   LD A,C 

   OUT (PSG),A 

   XOR A 

   OUT (PSG),A    

   LD A,C 

   ADD #20 

   LD C,A 

   DJNZ ISR10 

   RET 

    

PSGSAMP:   DI 

   CALL INSREG 

   LD HL,LETSGO   ;Sample data 

   LD BC,6346      ;Length 

   LD A,16      ;Rate 

   LD (SMPRTE),A 

PSGS10:   LD A,(HL) 

   SUB 127 

   PUSH HL 

   LD L,A 

   LD H,0 

   ADD HL,HL 

   ADD HL,HL 

   LD A,(SMPRTE) 

   LD E,A 

PSGS20:   DEC E 

   JR NZ,PSGS20    

   LD A,L 

   ADD 255&SAMPTB 

   LD E,A 

   LD A,H 

   ADC SAMPTB/256 

   LD D,A 

   PUSH BC 

   LD A,(DE) 

   LD B,A 

   INC DE 

   LD A,(DE) 

   LD C,A 

   INC DE 

   LD A,(DE) 

   LD D,A 

   LD E,C 

   LD C,PSG 

   OUT (C),B 

   OUT (C),E    

   OUT (C),D    

   POP BC 

   POP HL 

   DEC BC 

   INC HL 

   LD A,B 

   OR C 

   JP NZ,PSGS10 

   EI 

   RET 

SAMPTB:   INCBIN L2SGSMTB.BIN   ; 1024 

LETSGO:   INCBIN L2LETSGO.SMP   ; 6346 

```

 

# References
[^1]: [http://www.smspower.org/forums/8528-Lemmings2SMSGG](http://www.smspower.org/forums/8528-Lemmings2SMSGG) - information on developing Lemmings 2 with KASM
[^2]: [http://www.smspower.org/forums/14724-PlayingSoundSamples#78968](http://www.smspower.org/forums/14724-PlayingSoundSamples#78968) - example of KASM source code
[^3]: [https://www.flickr.com/photos/23778385@N07/15132453349/in/album-72157647817215536/](https://www.flickr.com/photos/23778385@N07/15132453349/in/album-72157647817215536/) - images of hardware from Krisalis SDK
[^4]: [http://www.smspower.org/forums/15019-KrisalisSoftwareSMSGGDevBox](http://www.smspower.org/forums/15019-KrisalisSoftwareSMSGGDevBox) - tons of excellent Krisalis Dev kit information
[^5]: [http://web.archive.org/web/19971010205654/krisalis.co.uk/](http://web.archive.org/web/19971010205654/krisalis.co.uk/) - The old Krisalis Software website on the WayBack Machine

