---
layout: post
tags: 
- howitworks
- emulator
title: How Emulators work
thumbnail: /public/consoles/Computer Old Design.png
image: /public/images/articles/How Emulators Work.jpg
twitterimage: /public/images/articles/How Emulators Work.jpg
permalink: /how-emulators-work
breadcrumbs:
  - name: Home
    url: /
  - name: How it Works
    url: /howitworks
  - name: How Emulators Work
    url: #
recommend: 
- howitworks
- nes
editlink: /articles/HowItWorks/HowEmulatorsWork.md
updatedAt: '2022-10-09'
---
# Introduction to How Emulators Work
Emulators are computer programs that run on one system such as a PC or games console but pretend to be another system such as retro console like the NES or GameBoy.

But how do they work? How would you implement an Emulator? Where should you start if you are interested in Emulator development? This post attempts to answer all those questions.

## What can be emulated?
Normally emulators are pretending to be a physical system so we need to simulate all the connections between physical components such as different electronic chips.

However there are also many emulators that are pretending to be systems that never existed in a physical form such as fantasy consoles like the **PICO-8**.

So in this post we are just going to call the thing we want to pretend to be: the **system**.

## What is a System made of?
Normally when we are talking about a system such as a games console or PC they have a few common components that we will need to simulate on our host system such as:
* **A CPU Chip** - e.g Z80, 6502, SH-2, x86, ARM etc
* **ROM** - Read-Only Memory such as a Game Cartridge (or ISO for CD based systems which are also Read-Only)
* **RAM** - A bunch of memory modules to store the current state of the system
* **Input Interface** - Such as controllers for game consoles or keyboard/mouse of PC-like systems
* **Display/Output Interface** - Normally a screen such as a monitor or TV but could also be an more physical output like printing on paper
* **Audio Output Interface** - Some systems such as games consoles have Audio processing chips which need to be simulated

## What types of emulation are there?
There are two main categories of emulators: High Level Emulators (HLE) and Low Level Emulators (LLE).

---
# Emulating The CPU
You can think of a CPU as an infinite loop, it does the same thing over and over until it has no more electricity and switches off. So a CPU should be easy to emulate on another system right? Just create a while loop that runs forever and does everything a CPU would do each cycle. Well sort of.. its not quite that easy but we are on the right track.

## Fetch-Decode-Execute Cycle
Every iteration of the loop (known as a clock cycle in CPU terms) the CPU goes through a process known as the **fetch–decode–execute cycle**.

At a very high level this would be:
* **Fetch** - find where the next instruction I should execute is located
* **Decode** - understand what the instruction is asking me to do
* **Execute** - actually do what the instruction wants

Thats what CPUs do from the moment they are started until the end of time (or when they are powered off).

So imagine you are a baker with an endless list of tasks to do to make cakes and every time you have finished one of those tasks you just move on to the next one, forever. The task in this case is what a CPU calls an instruction, for example put in flour to the bowl would be an instruction. 

**Fetching** would be the Baker moving on from the previous step and finding the next step of the recipe (it might be on the next line of the recipe book or on another page). **Decoding** the instruction would be the Baker reading that step of the recipe and **executing** would be physically putting the flour in the bowl.

## Program Counter & Registers
In this analogy how does the Baker remember what step of the recipe he is on? Let's say the recipe steps are numbered, they need to use their brain to remember the step number they are on. Then every time they move to the next step they increases the number they are remembering by 1. This is exactly what a CPU needs to do, but since a CPU doesn't have a human brain the CPU instead has what are called **Registers**.

**Registers** are small pieces of memory that can only store a small amount of information at once (lets say just one number). So in this example the CPU needs a register to remember what line of the recipe (program) it is executing. This little piece of memory (register) for keeping track of the location it is at has a special name called the **Program Counter** or **PC** for short. It is exactly the same as the Baker keeping track of which step number of the recipe they are on, they are counting up just like the **Program Counter**.

## Binary & Hex Representations
So we now know that CPUs store the step they are on in the Program Counter but what do those steps look like? Computers don't understand human language, only 1/On and 0/Off (Binary numbers).

The steps of the recipe/program are called Instructions and they are indeed a series of 1s and 0s, but Humans are not good at reading long lines of 1s and 0s and Humans need to be able to program and understand computer Instructions so although they are 1s and 0s to the CPU us Humans represent them as **Hex Values** split up into **Bytes** instead.

A Byte is just eight 1s and 0s in a row and could look like this to a CPU: `00000011`, but us humans find it easier to represent a single Byte as a Hex Value instead which would look like this `0x03`. The **0x** at the start just tells us that its  a Hex value so we know its not a decimal value but is also sometimes written with a Dollar sign instead like this: `$03`, but we will be using the **0x** throughout this site.

## Instructions & Opcodes
Now that we know we can represent CPU Instructions as Hex values we can look at some real CPU instructions used by a number of common processors:
* **0x04** - In a **Z80 CPU** this Hex increments the **B Register** think of the B register as similar to the Program Counter but doesn't just store where we are in the program it can store whatever number you would like
* **0xEA** - In a **6502 CPU** this Hex is called a No-Operation or NOP for short, yes doing nothing is a valid thing for a CPU to do, CPUs need time to relax too you know!

These are two examples of different CPUs from real Nintendo games consoles, the Z80 CPU was used in the GameBoy and the 6502 was used in the NES.

Note that in these two examples the Instruction was only one Byte long, as you can imagine one Byte is not very much information with only 256 possible values. So Instructions can be many bytes long, the limit depends on which CPU we are talking about. 

But in all CPUs the 1st byte is known as the **Opcode** and is used to determine how many bytes long this instruction will be.

Also just incase you start to panic and think you need to learn all sorts of different Hex values and what they do, you don't, emulator developers always have a reference form this nearby and  there is a much simpler way to write instructions known as **Assembly Language**. Most emulators however use the Hex value in the CPU emulation loop to **decode** which instruction it should now execute.

### Opcode Mnemonics & Assembly langauge
Most Humans find it easier to remember patterns of letters (Mnemonics) that a set of Hex values such as `0x45 0xFF 0xEA`. The Mnemonics used to represent Opcodes is called **Assembly Language** and they are normally just shorthand of what the operation does e.g:
* **MUL** - Multiplies two numbers
* **ADD** - Adds two numbers
* **SUB** - Subtracts two numbers
* **BEQ** - Branch (Change location of Program Counter) if numbers are equal to each other

### Opcode Categories
Not all opcodes are created equal, some are for modifying RAM, others are for changing the location of the Program Counter (Branching).

For the 6502 CPU the reddit user **mysticreddit** suggests breaking the 56 instruction set down into categories [^1]:
* **Load/Store** - LDA, LDX, LDY, STA, STX, STY, TAX, TAY, TXA, TYA
* **Arithmetic** - ADC, SBC, CLC, SEC, INC, DEC, INX, INY, DEX, DEY, CMP, CPY, CPX
* **Branching** - BCC, BCS, BEQ, BNE, BMI, BPL, BVC, BVS
* **Logic** - AND, ORA, EOR
* **Bit manipulation** - ASL, LSR, ROL, ROR, BIT, CLC, SEC
* **Misc** - NOP
* **Modes** - CLD, SED, CLI, SEI, CLV
* **Stack** - PHA, PLA, PHP, PLP
* **Flow Control** - JSR, JMP, RTS, RTI, BRK
* **Undocumented instructions** - The CPU Vendor has never told anyone what these do

## Putting it all together

Here is some pseudo code to piece together that we have talked about so far:
```js
var instructions = [0xEA, 0xEA, 0xEA,...]; // All the steps that make up our recipe/program
var programCounter = 0; // start at... well the start of the instructions array

while(true) { // loop forever and ever
    fetchedInstruction = instructions[programCounter]; // get the instruction from the array at the current step we are on (program counter)
    switch(fetchedInstruction) {
      // Now decode the instruction
      case 0xEA: // lets check if the opcode is 0xEA
	 // Lets do nothing as this is a NOP (No-operation instruction)
    }
    programCounter = programCounter + 1; // go to the next instruction in the loop
}
```

Of course this pseudo code would fail after we get to the end of the instructions array but CPUs just keep going on.

Now that you understand the Pseudo code, you can look at how real emulators are implemented:
* **NES** - [QuickNES_Core/Nes_Cpu.cpp uses a switch statement](https://github.com/RetroReversing/QuickNES_Core/blob/master/nes_emu/Nes_Cpu.cpp#L201)
* **SNES** - [snes9x2010/cpuexec.c - snes9x uses a table lookup instead of switch statement](https://github.com/RetroReversing/snes9x2010/blob/master/src/cpuexec.c#L293)
* **N64** - [mupen64plus-core/pure_interp.c uses multiple switch statements based on category of opcode](https://github.com/RetroReversing/mupen64plus-core/blob/master/src/device/r4300/pure_interp.c#L290)

## Complexities
We have covered CPU emulation at a very high level, simplifying the details to make it easier to understand, but note that CPU emulation is far from a trivial problem to solve. One of the reasons for complexity is that we are trying to simulate physical hardware, hardware with multiple chips working in parallel with each other. Whenever you have multiple tasks in parallel you get issue with **timing**, such as the Audio Processor being out of sync with the CPU so the sound doesn't match what would play on the real hardware.

### Cycle-accurate Timings
Timing units in emulators are referred to as cycles, so **Cycle-accurate** timing is the gold standard in emulation and matches what the physical hardware would do.

Most emulators don't have cycle-accurate timing and rely on estimated timings which are **good-enough** to run most software created for the hardware. The reason for this is to get real cycle-accurate timing you need to effectively emulate all sorts of very low level hardware details which requires both a lot of knowledge on the developers part and a lot of CPU time on the host machine running the emulator. 

For most emulators this is fine as users won't notice such subtle timing differences and would rather the emulator doesn't take up either entire CPU in the process. However for true preservation of the original experience cycle-accurate emulation is very important. 

### Un-documented Opcodes/Instructions
CPUs are complex pieces for hardware and not all Opcodes have been formally documented for use by programmers. However this doesn't stop programmers using instructions that have not been documented by the CPU vendor. 

This raises a question for emulator developers, what do all those un-documented instructions do? How many bytes to the instructions take up? How many Clock Cycles? To get a true answer you need to try them on real hardware and inspect what the physical chips do at a low level, this is a non-trivial task.

Most software written for a specific CPU do not use un-documented instructions as the programmers probably don't know what they do either. But there are a few retails games and software that use them for specific purposes such as anti-emulation/anti-piracy.

---
# Videos on Emulator Development
What better way to learn how to write your own emulator that watching people write one themselves. This section will link to video tutorials on emulator development, some are follow-along-at-home type and others are just mentioning the core concepts, but all are worth a watch if you are serious about emulator development.

## Apple II Emulator in React and Typescript
<section class="postSection">
<iframe height="300" src="https://www.youtube.com/embed/7QaWQwffmOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

 <div markdown="1" class="rr-post-markdown">
**Chris Torrence** has put together an excellent series of videos in which he writes an Apple II emulator from scratch that will run in any modern web browser!

Unlike our for loop in the CPU pseudo code we listed above his system uses the Javascript **setTimeout** series of functions instead but it is equivalent, it is better to do **setTimeout** when running inside a web-browser so the browser can handle other actions instead of waiting forever for the emulator to finish the loop.

Also instead of using a switch statement like we did above it is a table lookup based on the opcode, but it is functionally equivalent.

A very cool feature of his emulator is it has en embedded 6502 assembler inside it, so he can easily write tests with 6502 assembly code and run them straight inside his emulator!
 </div>
</section> 

## Commodore 64 Emulation in JavaScript - Imran Nazar - NDC London 2022
<iframe width="560" height="315" src="https://www.youtube.com/embed/NqTVANK7Mg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# References
[^1]: [Are there good books/resources/guides on Emulator Architecture and how to structure your projects? : EmuDev](https://www.reddit.com/r/EmuDev/comments/w0epiv/are_there_good_booksresourcesguides_on_emulator/)
