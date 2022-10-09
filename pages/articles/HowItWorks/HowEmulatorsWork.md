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

But how do they work? How would you implement a Emulator? Where should you start if you are interested in Emulator development? This post attempts to answer all those questions.

## What can be emulated?
Normally emulators are pretending to be a physical system so we need to simulate all the connections between physical components such as different electronic chips.

However there are also many emulators that are pretending to be systems that never existed in a physical form such as fantasy consoles like the **PICO-8**.

So in this post we are just going to call the thing we want to pretent to be: the **system**.

## What is a System made of?
Normally when we are talking about a system such as a games console or PC they have a few common components that we will need to simulate on our host system such as:
* **A CPU Chip** - e.g Z80, 6502, SH-2, x86, ARM etc
* **RAM** - A bunch of memory modules to store the current state of the system
* **Input Interface** - Such as controllers for game consoles or keyboard/mouse of PC-like systems
* **Display/Output Interface** - Normally a screen such as a moniitor or TV but could also be an more physical output like printing on paper
* **Audio Output Interface** - Some systems such as games consoles have Audio processing chips which need to be simulated

## What types of emulation are there?
There are two main cateogies of emulators: High Level Emulators (HLE) and Low Level Emulators (LLE).

---
# Emulating The CPU
You can think of a CPU as an infinite loop, it does the same thing over and over until it has no more electricity and switches off. So a CPU should be easy to emulate on another system right? Just create a while loop that runs forever and does everything a CPU would do each cycle. Well sort of.. its not quite that easy but we are on the right track.

Every iteration of the loop (known as a clock cycle in CPU terms) the CPU goes through a process known as the **fetch–decode–execute cycle**.

At a very high level this would be:
* **Fetch** - find where the next instruction I should execute is located
* **Decode** - understand what the instruction is asking me to do
* **Execute** - actually do what the instruction wants

Thats what CPUs do from the moment they are started until the end of time (or when they are powered off).

So imagine you are a baker with an endless list of tasks to do to make cakes and every time you have finished one of those tasks you just move on to the next one, forever. The task in this case is what a CPU calls an instruction, for example put in flour to the bowl would be an instruction. 

**Fetching** would be the Baker moving on from the previous step and finding the next step of the recipe (it might be on the next line of the recipe book or on another page). **Decoding** the instruction would be the Baker reading that step of the recipe and **executing** would be physically putting the flour in the bowl.
