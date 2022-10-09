---
layout: post
tags: 
- howitworks
- emulator
title: How Emulators work
thumbnail: /public/consoles/Computer Old Design.png
permalink: /how-emulators-work
image: /public/images/articles/How Emulators Work.jpg
twitterimage: /public/images/articles/How Emulators Work.jpg
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
In this analogy how does the Baker remember what step of the recipe he is on? Lets say the recipe steps are numbered, they need to use their brain to remember the step number they are on. Then every time they move to the next step they increases the number they are remembering by 1. This is exactly what a CPU needs to do, but since a CPU doesn't have a human brain the CPU instead has what are called **Registers**.

**Registers** are small pieces of memory that can only store a small amount of information at once (lets say just one number). So in this example the CPU needs a register to remember what line of the recipe (program) it is executing. This little piece of memory (register) for keeping track of the location it is at has a special name called the **Program Counter** or **PC** for short. It is exactly the same as the Baker keeping track of which step number of the recipe they are on, they are counting up just like the **Program Counter**.

## Binary & Hex Representations
So we now know that CPUs store the step they are on in the Program Counter but what do those steps look like? Computers don't understand human language, only 1/On and 0/Off (Binary numbers).

The steps of the recipe/program are called Instructions and they are indeed a series of 1s and 0s, but Humans are not good at reading long lines of 1s and 0s and Humans need to be able to program and understand computer Instructions so although they are 1s and 0s to the CPU us Humans represent them as **Hex Values** split up into **Bytes** instead.

A Byte is just eight 1s and 0s in a row and could look like this to a CPU: `00000011`, but us humans find it easier to represent a single Byte as a Hex Value instead which would look like this `0x03`. The **0x** at the start just tells us that its  a Hex value so we know its not a decimal value but is also sometimes written with a Dollar sign instead like this: `$03`, but we will be using the **0x** throughout this site.

## Intructions & Opcode
Now that we know we can represent CPU Instructions as Hex values we can look at some real CPU instructions used by a number of common processors:
* **0x04** - In a **Z80 CPU** this Hex increments the **B Register** think of the B register as similar to the Program Counter but doesn't just store where we are in the program it can store whatever number you would like
* **0xEA** - In a **6502 CPU** this Hex is called a No-Operation or NOP for short, yes doing nothing is a valid thing for a CPU to do, CPUs need time to relax too you know!

These are two examples of different CPUs from real Nintendo games consoles, the Z80 CPU was used in the GameBoy and the 6502 was used in the NES.

Also just incase you start to panic and think you need to learn all sorts of different Hex values and what they do, you don't, emulator developers always have a reference form this nearby and  there is a much simpler way to write instructions known as **Assembly Language**. Most emulators however use the Hex value in the CPU emulation loop to **decode** which instruction it should now execute.
