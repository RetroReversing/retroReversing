---
layout: post
tags: 
- introduction
title: How Do Emulators Work? A Deep Dive into Emulator Design
thumbnail: /public/consoles/Computer Old Design.png
image: /public/images/articles/How Emulators Work.jpg
twitterimage: https://www.retroreversing.com/public/images/articles/How Emulators Work.jpg
permalink: /how-emulators-work
redirect_from:
  - /emulators
  - /emulation
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: How Do Emulators Work? A Deep Dive into Emulator Design
    url: #
recommend: 
- introduction
editlink: /Introduction/HowEmulatorsWork.md
updatedAt: '2022-10-09'
---
Have you ever wondered how emulators work? How would you implement an emulator? Where should you start if you are interested in emulator development? 
This post attempts to answer all those questions.

# Introduction to Emulators
Emulators are computer programs that run on one system, such as a PC or game console, but pretend to be another system, such as a retro console like the NES or Game Boy.

## What exactly does an emulator do?
It reproduces the behavior of a specific hardware system (e.g NES, SEGA Mega Drive) in software so that original programs can run unchanged. 

It models CPU instructions, memory interactions, and device behavior well enough for software to behave as if real hardware were present.

## How can software pretend to be hardware?
It implements software models of hardware components such as registers, memory buses, I/O devices, and timers. Programs interact with these models exactly as they would with the physical components.

### Are FPGA based systems considered emulators?
Yes, FPGA systems emulate hardware by reconfiguring logic blocks to mimic the circuitry of the original system. They operate at lower abstraction levels than software emulators, providing near hardware fidelity.

### Do emulators physically simulate the low level circuits?
No. Emulators simulate what the hardware **does** (the end result), not how every transistor or wire behaves in the real world. Simulating electronics at a physical level is done by circuit simulators and is **far too slow** for running programs.

Emulators focus on reproducing the architectural effects of the hardware: how instructions behave, how memory is accessed, and how devices respond. Some include rough or cycle-level timing, while others ignore timing entirely depending on the goal.

### Why do some emulators need BIOS or firmware files?
Certain hardware relies on proprietary initialization code or system routines stored in ROM. An emulator must load these images to reproduce authentic behavior and maintain compatibility.

**Bytes N Bits** has an excellent video introducing BIOS/firmware files:
<iframe width="560" height="315" src="https://www.youtube.com/embed/LLdzqprlxi8?si=r_-_4ivtsqZHcji-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### What role do ROMs and ISOs play in emulation?
They contain the original software or firmware images meant for the target hardware. The emulator loads and executes them exactly as the real system would.

---
## Is an emulator similar to an interpreter for a high level language?
There is a loose similarity. Both run instructions that were written for something else and translate them into operations the host system can perform.

The difference is that an emulator reproduces the rules of real hardware, while a language interpreter follows the rules of a programming language.

### Similarities between Emulators and Programming Language Interpreters
Interpreters and emulators each implement an execution model that translates foreign instructions into operations the host system can perform.

Both systems typically include:
* A parser or decoder that reads the incoming instruction format (bytecode, tokens, CPU opcodes)
* Use a fetch-decode-execute style loop
* Keep a software model of program state (registers, stacks, heaps, or similar)
* Handle errors inside their own virtual environment

### Differences between Emulators and Programming Language Interpreters
Instead of interpreting source code an emulator operates on compiled (assembled) machine code intructions which are in a binary form.

Emulators must also model registers, memory buses, I/O devices, and the timing between these components, which has no analogue in most high level interpreters.

---

## Why are some emulators fast and others slow?
Speed depends on how much hardware detail is modeled and whether the emulator interprets instructions or uses JIT compilation.

Cycle accurate models are significantly slower because they reproduce low level timing.

### Why do some emulators use JIT compilers instead of interpretation?
JIT compilation converts foreign machine code into host machine code for faster execution. It reduces instruction dispatch overhead but increases implementation complexity.

---
## What makes an emulator accurate or inaccurate?
Accuracy depends on how closely the emulator matches hardware timing, instruction behavior, and device quirks. 
Omitting subtle hardware details can improve speed but reduce compatibility or fidelity.

[100th Coin](https://www.youtube.com/watch?v=oYjYmSniQyM) has a video looking at the accuracy of Nintendo's Official Emulators:
<iframe width="560" height="315" src="https://www.youtube.com/embed/oYjYmSniQyM?si=mCZFaJtGIbhSutoD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### What is cycle accuracy and why does it matter?
Cycle accuracy means the emulator reproduces hardware behavior at the granularity of individual clock cycles. 

This is essential for software that relies on precise timing, such as demos or tightly synchronized games.

### Why are timing bugs in old hardware hard to emulate?
They often arise from electrical characteristics, propagation delays, or undocumented behavior. Reproducing these requires extremely detailed models that are expensive to implement.

### What causes compatibility issues in emulators?
Missing hardware features, incorrect timing, or simplified device models can all break software that depends on subtle behavior. Some games rely on undocumented quirks that are difficult to replicate.

---
## What is the difference between high-level and low-level emulation?
There are two main categories of emulators: High Level Emulators (HLE) and Low Level Emulators (LLE).
* **Low-Level Emulation (LLE)** - maximizes accuracy by simulating each hardware component including timing behaviours but is computationally expensive.
* **High-Level Emulation (HLE)** - Detects API functions and implements an alternative using modern APIs, rather than executing each instruction of the API function calls.

Some modern emulators blend both approaches to balance compatibility and performance. For example, they might use LLE for the CPU and HLE for the graphics or audio subsystems.

For a deeper dive into it check out [High and low-level emulation - Emulation General Wiki](https://emulation.gametechwiki.com/index.php/High_and_low-level_emulation)


---
## What can be emulated?
Normally, emulators are pretending to be a physical system, so we need to simulate all the connections between physical components, such as different electronic chips.

However, there are also many emulators that simulate systems which never existed in physical form, such as fantasy consoles like the **PICO-8**.

So in this post, we are just going to call the thing we want to pretend to be: the **system**.

### What is a System made of?
Normally, when we are talking about a system such as a game console or PC, they have a few common components that we will need to simulate on our host system, such as:
* **A CPU Chip** - e.g Z80, 6502, SH-2, x86, ARM, etc.
* **ROM** - Read-Only Memory, such as a game cartridge (or ISO for CD-based systems, which are also read-only)
* **RAM** - Memory modules to store the current state of the system
* **Input Interface** - Such as controllers for game consoles or keyboard/mouse for PC-like systems
* **Display/Output Interface** - Normally a screen such as a monitor or TV, but could also be a more physical output like printing on paper
* **Audio Output Interface** - Some systems, such as game consoles, have audio processing chips which need to be simulated

### How do emulators handle graphics, audio, and controllers?
They implement software models of the original GPU, audio chip, and input devices. Each instruction or register write updates these models so the output matches what real hardware would produce.

---
# Emulating The CPU
You can think of a CPU as running in an infinite loop, performing the same operations repeatedly until it loses power and switches off. So a CPU should be easy to emulate on another system, right? Just create a while loop that runs forever and does everything a CPU would do each cycle. Well, sort of... it's not quite that easy, but we are on the right track.

## Fetch-Decode-Execute Cycle
Every iteration of the loop (known as a clock cycle in CPU terms), the CPU goes through a process known as the **fetch–decode–execute cycle**.

At a very high level, this would be:
* **Fetch** - Find where the next instruction to execute is located
* **Decode** - Understand what the instruction is asking to do
* **Execute** - Actually do what the instruction wants

That's what CPUs do from the moment they are started until they are powered off.

So imagine you are a baker with an endless list of tasks to do to make cakes, and every time you finish one of those tasks, you just move on to the next one, forever. The task in this case is what a CPU calls an instruction; for example, "put flour in the bowl" would be an instruction. 

**Fetching** would be the baker moving on from the previous step and finding the next step of the recipe (it might be on the next line of the recipe book or on another page). 
**Decoding** the instruction would be the baker reading that step of the recipe, and **executing** would be physically putting the flour in the bowl.

[Tom Scott](https://www.youtube.com/@TomScottGo) has a great video where he explains the Fetch-Decode-Execute Cycle:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z5JC9Ve1sfI?si=fW9VISQJl-dTD8qd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Program Counter & Registers
In this analogy, how does the baker remember what step of the recipe he is on? Let's say the recipe steps are numbered; he needs to use his brain to remember the step number he is on. Then, every time he moves to the next step, he increases the number he is remembering by 1. This is exactly what a CPU needs to do, but since a CPU doesn't have a human brain, it instead has what are called **Registers**.

**Registers** are small pieces of memory that can only store a small amount of information at once (let's say just one number). So in this example, the CPU needs a register to remember what line of the recipe (program) it is executing. This little piece of memory (register) for keeping track of the location it is at has a special name called the **Program Counter** or **PC** for short. It is exactly the same as the baker keeping track of which step number of the recipe he is on; he is counting up just like the **Program Counter**.

---
## Binary & Hex Representations
So we now know that CPUs store the step they are on in the Program Counter, but what do those steps look like? Computers don't understand human language; they only understand 1/On and 0/Off (binary numbers).

The steps of the recipe/program are called instructions, and they are indeed a series of 1s and 0s. However, humans are not good at reading long lines of 1s and 0s, and humans need to be able to program and understand computer instructions. So, although they are 1s and 0s to the CPU, we humans represent them as **Hex Values** split up into **Bytes** instead.

A byte is just eight 1s and 0s in a row and could look like this to a CPU: `00000011`, but humans find it easier to represent a single byte as a hex value instead, which would look like this: `0x03`. The **0x** at the start just tells us that it's a hex value, so we know it's not a decimal value. It is also sometimes written with a dollar sign instead, like this: `$03`, but we will be using **0x** throughout this site.

---
## Instructions & Opcodes
Now that we know we can represent CPU instructions as hex values, we can look at some real CPU instructions used by a number of common processors:
* **0x04** - In a **Z80 CPU**, this hex increments the **B Register**. Think of the B register as similar to the Program Counter, but it doesn't just store where we are in the program; it can store whatever number you would like.
* **0xEA** - In a **6502 CPU**, this hex is called a No-Operation or NOP for short. Yes, doing nothing is a valid thing for a CPU to do—CPUs need time to relax too, you know!

These are two examples of different CPUs from real Nintendo game consoles: the Z80 CPU was used in the Game Boy, and the 6502 was used in the NES.

Note that in these two examples, the instruction was only one byte long. As you can imagine, one byte is not very much information, with only 256 possible values. So instructions can be many bytes long; the limit depends on which CPU we are talking about. 

But in all CPUs, the first byte is known as the **Opcode** and is used to determine how many bytes long the instruction will be.

Also, just in case you start to panic and think you need to learn all sorts of different hex values and what they do, you don't—emulator developers always have a reference for this nearby, and there is a much simpler way to write instructions known as **Assembly Language**. Most emulators, however, use the hex value in the CPU emulation loop to **decode** which instruction it should now execute.

### Opcode Mnemonics & Assembly language
Most humans find it easier to remember patterns of letters (mnemonics) than a set of hex values such as `0x45 0xFF 0xEA`. The mnemonics used to represent opcodes are called **Assembly Language**, and they are normally just shorthand for what the operation does, e.g.:
* **MUL** - Multiplies two numbers
* **ADD** - Adds two numbers
* **SUB** - Subtracts two numbers
* **BEQ** - Branch (change location of Program Counter) if numbers are equal to each other

### Opcode Categories
Not all opcodes are created equal; some are for modifying RAM, others are for changing the location of the Program Counter (branching).

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

Of course, this pseudo code would fail after we get to the end of the instructions array, but CPUs just keep going.

Now that you understand the Pseudo code, you can look at how real emulators are implemented:
* **NES** - [QuickNES_Core/Nes_Cpu.cpp uses a switch statement](https://github.com/RetroReversing/QuickNES_Core/blob/master/nes_emu/Nes_Cpu.cpp#L201)
* **SNES** - [snes9x2010/cpuexec.c - snes9x uses a table lookup instead of switch statement](https://github.com/RetroReversing/snes9x2010/blob/master/src/cpuexec.c#L293)
* **N64** - [mupen64plus-core/pure_interp.c uses multiple switch statements based on category of opcode](https://github.com/RetroReversing/mupen64plus-core/blob/master/src/device/r4300/pure_interp.c#L290)

## Complexities
We have covered CPU emulation at a very high level, simplifying the details to make it easier to understand, but note that CPU emulation is far from a trivial problem to solve. 

One of the reasons for complexity is that we are trying to simulate physical hardware—hardware with multiple chips working in parallel with each other. 

Whenever you have multiple tasks running in parallel, you encounter issues with **timing**, such as the audio processor being out of sync with the CPU, causing the sound to not match what would play on the real hardware.

### Cycle-accurate Timings
Timing units in emulators are referred to as cycles, so **cycle-accurate** timing is the gold standard in emulation and matches what the physical hardware would do.

Most emulators don't have cycle-accurate timing and rely on estimated timings which are **good enough** to run most software created for the hardware. The reason for this is that to get real cycle-accurate timing, you need to effectively emulate all sorts of very low-level hardware details, which requires both a lot of knowledge on the developer's part and a lot of CPU time on the host machine running the emulator. 

For most emulators, this is fine, as users won't notice such subtle timing differences and would prefer the emulator not to consume the entire CPU in the process. However, for true preservation of the original experience, cycle-accurate emulation is very important. 

### Un-documented Opcodes/Instructions
CPUs are complex pieces of hardware, and not all opcodes have been formally documented for use by programmers. However, this doesn't stop programmers from using instructions that have not been documented by the CPU vendor. 

This raises a question for emulator developers: what do all those undocumented instructions do? How many bytes do the instructions take up? How many clock cycles? To get a true answer, you need to try them on real hardware and inspect what the physical chips do at a low level. This is a non-trivial task.

Most software written for a specific CPU does not use undocumented instructions, as the programmers probably don't know what they do either. But there are a few retail games and software that use them for specific purposes, such as anti-emulation or anti-piracy.

---
# Emulating the Memory
All systems you would want to emulate have a certain amount of RAM/memory where they store values that impact the running of the program. Variables such as the player's score would be saved in this memory.

A simple way to emulate a system's memory is to use a large array of bytes, and whenever you need to read or write to a memory location, you access the specific index in the array.

For example here is some pseudo code for that:
```js
var systemMemory = [0x06, 0x01...];

var playerScorePointer = 0; // store the location in memory where the player score is stored

// Lets read the value at position 0 (value of playerScorePointer) of the emulated system's memory
var playerScore = systemMemory[playerScorePointer];

// Now lets write a new score for the player, just add 1 because they got 1 more point
systemMemory[playerScorePointer] = systemMemory[playerScorePointer] + 1;
```

However, it is not quite this simple, as many systems use something called memory-mapped registers/variables. These are certain addresses of memory that, when either read from or written to, interact with some sort of input/output device, such as a game controller.

So the CPU can be dumb and just write to a certain address, but the Memory Management Unit needs to be able to tell where that write should occur. Should it write to:
* High RAM
* Low RAM
* Save RAM (SRAM)
* Audio/Graphics RAM

These will all be different chips on the board but will all just be referenced by an address. So how does the MMU know which addresses point to which memory chips? This is where the memory map comes in handy.

## Memory Maps
A memory map is a piece of documentation that is used to indicate which address ranges are used for what purpose. Here are some example memory maps for various consoles:
* **NES** - [CPU memory map - NESdev Wiki](https://www.nesdev.org/wiki/CPU_memory_map)
* **SNES** - [Super NES Programming/SNES memory map - Wikibooks, open books for an open world](https://en.wikibooks.org/wiki/Super_NES_Programming/SNES_memory_map)
* **N64** - [Memory map detailed - en64 wiki](http://en64.shoutwiki.com/wiki/Memory_map_detailed)

You will notice that for many game consoles and other systems, there are tons of memory addresses that are mapped to nothing at all. It seems like a huge waste of memory to emulate these unused addresses in a big byte array.

So instead of a simple array for all of RAM, it might be better to have smaller arrays—one for each type of memory—and have specific read and write functions that handle going to the correct memory array.

Here is some pseudo code after taking into account what was have said above:
```js
var HighRAM = [0x00,0x12, ...];
var LowRAM = [0x00,0x12, ...];

function read(addressLocation) {
  if (addressLocation > 0 && addressLocation <= 0xFF) {
    // Read from LowRAM
	return LowRAM[addressLocation];
  }

// other if statements for HighRam and other pieces of memory such as SaveRAM, Cartridge ROM or controller input would go here

}

function write(addressLocation, valueToWrite) {
  if (addressLocation > 0 && addressLocation <= 0xFF) {
    // Write to LowRAM
	LowRAM[addressLocation] = valueToWrite;
  }

// other if statements for HighRam and other pieces of memory such as SaveRAM or writing pixels to a screen would go here
}
```

Now that you understand the pseudo code, you can look at how real emulators are implemented:
* **NES** - [QuickNES_Core/Nes_Cpu.cpp uses a bunch of Macros such as READ_LOW/READ_PROG ](https://github.com/RetroReversing/QuickNES_Core/blob/master/nes_emu/Nes_Cpu.cpp#L98)
* **SNES** - [snes9x2010/memmap.c atis an example of using multiple smaller arrays one for each type of RAM](https://github.com/RetroReversing/snes9x2010/blob/master/src/memmap.c#L429)

---
# Emulating Graphics/Video
Many systems that you will want to emulate have some sort of graphical output, whether that is to a TV screen such as a CRT or a more permanent physical form via a device such as a printer.

Every system handles graphical output in a very different way, so this section will only cover things that they have in common, specifically when talking about a CRT or other TV-like display.

Just as we have the **Central Processing Unit** (CPU) to process system instructions and the **Memory Management Unit** (MMU) to handle system memory, for graphics we typically refer to the management interface as the **Picture Processing Unit** or PPU.

The PPU normally renders a pixel at a time, but how do you know the color of that pixel? Well, you need to take into account all the background tiles, sprites, etc., that intersect at that pixel.

## PPU Timing
But what about timing? There is a risk that your emulated PPU will get out of sync with the emulated CPU, resulting in all sorts of weird behavior. 

The simplest way to solve this issue is to run both the PPU and CPU in the same thread and determine how many pixels are drawn to the screen per CPU cycle. That means you can run one CPU cycle, then call the PPU to draw that number of pixels, and so on in an infinite loop. The problem with this is that if the system you are emulating is more recent or powerful, you won't have enough GHz on your host machine to emulate that system.

---
# Learning how to write your own emulators
Now that you know the basics of how emulators work, you might be interested in writing your own. This section covers some useful resources available on the web to help you get started.

## Games and Interactive experiences on emulator development
There are a few "games" (or interactive experiences) that can teach the basics of emulator development and are a great way to start as they are very interactive so you can put the theory into practise straight away.

### EmuDevZ - A game that teaches you emulator development
This is a very unique game, it teaches you the basics of emulator development in a fun way, a browser game! It is a very good way to learn the basics:
[EmuDevz](https://afska.github.io/emudevz/#/)

---
# Videos on Emulator Development
What better way to learn how to write your own emulator than by watching people write one themselves? This section will link to video tutorials on emulator development. Some are follow-along-at-home type, and others just mention the core concepts, but all are worth a watch if you are serious about emulator development.

## Apple II Emulator in React and Typescript
<section class="postSection">
<iframe height="300" src="https://www.youtube.com/embed/7QaWQwffmOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="wow slideInLeft postImage"></iframe>

 <div markdown="1" class="rr-post-markdown">
**Chris Torrence** has put together an excellent series of videos in which he writes an Apple II emulator from scratch that will run in any modern web browser!

Unlike our for loop in the CPU pseudo code we listed above, his system uses the JavaScript **setTimeout** series of functions instead, but it is equivalent. It is better to use **setTimeout** when running inside a web browser so the browser can handle other actions instead of waiting forever for the emulator to finish the loop.

Also, instead of using a switch statement like we did above, it is a table lookup based on the opcode, but it is functionally equivalent.

A very cool feature of his emulator is it has an embedded 6502 assembler inside it, so he can easily write tests with 6502 assembly code and run them straight inside his emulator!
 </div>
</section> 

## NES Emulator from Scratch by javidx9
<section class="postSection">
<iframe height="300" class="wow slideInRight postImageRight" src="https://www.youtube.com/embed/F8kx56OZQhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <div markdown="1" class="rr-post-markdown">
**javidx9** has created an excellent series where he dives into the world of NES emulator development.
 </div>
</section> 

## Commodore 64 Emulation in JavaScript - Imran Nazar - NDC London 2022
<section class="postSection">
<iframe height="300" class="wow slideInLeft postImage" src="https://www.youtube.com/embed/NqTVANK7Mg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div markdown="1" class="rr-post-markdown">
**Imran Nazar** goes over how and why he created a Commodore 64 emulator in Javascript. It is a very good introduction to the concepts of emulators such as the CPU loop, MMU and PPU but doesn't go into the specifics for how his emulator works in terms of code.
 </div>
</section> 


## Creating a NES emulator in C++11
<section class="postSection">
<iframe height="300" class="wow slideInLeft postImageRight" src="https://www.youtube.com/embed/y71lli8MS8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div markdown="1" class="rr-post-markdown">
**Bisqwit** holds a live coding session where he writes a NES emulator using features new to C++11. Make sure to enable subtitles for this video as that is where all the description is, there is no narration for this video. It is split into two 30 minute videos and can be a little hard to follow reading the subtitles and watching the code editing at the same time but it has a charm to it.
 </div>
</section> 

---
# References
[^1]: [Are there good books/resources/guides on Emulator Architecture and how to structure your projects? : EmuDev](https://www.reddit.com/r/EmuDev/comments/w0epiv/are_there_good_booksresourcesguides_on_emulator/)
