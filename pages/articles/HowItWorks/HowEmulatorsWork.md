---
layout: post
tags: 
- howitworks
- emulator
title: How Emulators work
thumbnail: /public/consoles/Computer Old Design.png
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
