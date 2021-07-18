---
permalink: /tutorials/introduction
layout: post
title: Beginners Guide to Reverse Engineering (Retro Games)
thumbnail: /public/consoles/Computer Old Design.png
image: /public/images/Reverse Engineering Beginners Guide.jpg
console: introduction
breadcrumbs:
  - name: Home
    url: /
  - name: Techniques & Tutorials
    url: /tutorials
  - name: Beginners Guide to Reverse Engineering (Retro Games)
    url: #
redirect_from:
  - /introduction
  - /intro
  - /tutorial/intro
  - /beginners-guide
recommend: 
- introduction
- tutorial
tags:
- introduction
editlink: ../categories/tutorials/Introduction.md
updatedAt: '2020-03-29'
---

This guide is for all beginners who are interesting in learning more about the technical details of their favourite consoles and games. The guide aims to be as console-agnostic as possible,  but after you have completed this you should look into the details of the specific console you are interested in.

# Lesson 1 - What? Why? How?
Many people are confused about what exactly is involved in reverse engineering or why exactly people would "waste their time" on such a task. Well lets find out...

## What is Reverse engineering?
Presumably by being on this page you at least have a slight idea about what reverse engineering is and may even have some pre-conceptions. 

At the end of the day it really is what it says on the tin, "Reverse engineering" taking the engineering process in reverse from finished product to learn how it was made.

A reverse engineer is a scientist that studies man-made object rather than natural phenomena.

## Why reverse retro games?
Ok but why exactly would people spend their time reverse engineering an old game instead of creating brand new games?

There are many reasons for this such as pure nostalgia and preservation of a part of our modern history, the same way people study traditional art, studying games is a rather obscure version of appreciating human history.

When a game is reverse engineered it becomes open to new life, new levels, sounds and more hours of fun. Reversing is like a game inside the game, when you have finished playing the game the fun of reversing can begin!

## Why learn reverse engineering?
It is almost guaranteed to make you a better programmer, you are studying the code of very intelligent developers and you can learn from both their genius and their mistakes.

Not only that but you will start to understand in depth how computers work and it can help protect your own games from hackers and may even start you on a path learning about cyber security and malware protection.

## What is the benefit to having reversed a game?
The most obvious benefit is to allow people to get more from their games, enjoy more hours in their favourite games, get that nostalgic buzz! 

Whether that is translating a game into a new language, improving the sound or visuals, or porting a classic game to a more modern system, you are bringing the enjoyment that this game gave to you to brand new audiences.

It might not exactly be saving lives in the traditional sense, but the hours of joy you can bring to gamers old and new is priceless.

## Is reverse engineering legal?
Yes, in fact there are many cases where the courts have sided with the reverse-engineer when it comes to anti-competitive practises.

If you are interested there are a few court battles that are relevant:
* [SEGA vs Accolade](https://en.wikipedia.org/wiki/Sega_v._Accolade#Settlement)
* [Sony Computer Entertainment, Inc. v. Connectix Corp. - Wikipedia](https://en.wikipedia.org/wiki/Sony_Computer_Entertainment,_Inc._v._Connectix_Corp.)

In fact reverse engineering already plays a vital role in ensuring your freedom in an increasingly more technological society. How do you know a voting machine is accurately counting your vote? Or how do you know if your computer is spying on you? You could reverse engineer it and find out.

---
# Lesson 2 - Introduction to Data Structures & Formats
Presumably if you have read this far you are interested in learning at least the basics of reverse engineering, how exciting! Trust me you will absolutely love it when you get started and in fact it can be a little addictive...

## ROM files
Let's start at the beginning, you might have seen ROM files before, well actually I can safely assume you HAVE used a few of them in your favourite emulator.

But what exactly are ROM files? How did that big plastic cartridge become a single file that can be run into an emulator? Let's find out!
{% include link-to-other-post.html post="/how-retro-cartridges-roms-worked" description="Have you ever wondered how a game cartridge for Game Boy or the NES actually works? Find out here!" %}


## ISO files
ISO files are sometimes called ROMs and technically they are a copy of data that was on a Read-Only memory format but there are some fundamental differences between them.

If you are unaware ISO files are copies of the data on a CD, DVD or Blu-ray Disc. Thus one of the major differences between this and a ROM file is it actually is a standard file format that can be opened in a tool such as Windows Explorer or Apple Finder and you can explore all the sub files inside. 

It is generally easier to find graphics, sounds, maps, videos and such in ISO files as they tend to be individual files with a useful file extension. Although this is not always the case as many games engines like to pack up all their files into a single or multiple compressed files. 


## Bits & Hexadecimal 

<section class="postSection">
<iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/ViRR7qoeMpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div markdown="1">
As we have said before games are just a series of 1's and 0's so we could look at your favourite ROM or favourite ISO file in this way and you could, with enough time, find out what each bit represents.

However humans are not very good at distinguishing parents of bits, so we have a much easier way to view these files in a format called Hexadecimal! In Hexadecimal every single Byte in a ROM or well any file on a computer can be represented as 2 digits using the numbers 0->9 and the letters A->F.

Don't worry you will not need to learn how to convert to Hexadecimal, there are plenty of tools for that, and you will pick up the most common Hex codes as you go along.

In fact you may have already seen Hexadecimal if you have worked with Colours as they can be represented as 3 different bytes (Red/Green/Blue), each one of those bytes can be represented as 2 hex digits for example `#FFFFFF` (White).

 </div>
</section> 

## Viewing files with a Hex editor
Now that you know why the Hexadecimal notation is useful for developers to represent bytes, let's use a tool that every reverse engineer has handy at all times, the HEX editor!

As we know a game is build up of either a single file (ROM) or multiple files, but at the end of the day they are all files and all contain bytes of data.

So we know know that we can represent each byte as a HEX codes, why don't we open up some of those game files!

Depending on your platform there are multiple good HEX editors to choose from, but here are just a few:
* Hex Fiend (Mac OSX)
* Win Hex (Windows)
* Bless Hex Editor (Linux)

Some ROM hacks are done purely with a HEX editor and emulator so this is a powerful tool to get you started, but there are many other useful tools to learn along the way to make it even easier.

So go on give it a try, open your favourite ROM in a Hex editor and see what you can find!

## File Formats

<section class="postSection">
<iframe  class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/KN8YgJnShPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <div markdown="1">
You will come across many different file formats on your travels but don't worry about learning specific formats, most are well documented online and you can get a cheat sheet of Magic headers if you are curious.

There are so many file formats out there (and many variations) that you couldn't possibly know them all, so just learn what you need when you need it.

 </div>
</section> 

## Magic Headers & the file command
Now you know the basics of how data can be represented you can dive into many different file formats used in games. You can view them in Hexadecimal with a Hex Editor and you can spot the Magic Header (if the file has one). This can be very useful for looking at files in ISO files, especially if they do not have a file extension.

The Magic Header for a file tends to be the first few bytes of the file, for example wav sound files start with the first 4 ASCII characters `WAVE`.

Wikipedia has a useful table of the most common file formats and what their Magic headers are:
[List of file signatures - Wikipedia](https://en.wikipedia.org/wiki/List_of_file_signatures)

So you could open your file in a Hex editor and search that page for what file type it is. But there exists an even easier solution, systems based on UNIX come pre-installed with a useful tool called `file` which can tell you what a file contains regardless of its extension.

An example of using file:
```
file unknownfile
```

## Custom File formats
Many files used in games could be a custom format created specifically for that game (or engine), understanding how to decode these custom file formats is a vital skill that is worth learning.

We will cover how to reverse engineer a custom file format in a later lesson, but for now you might be surprised how many games contain standard well-documented file formats on their CD's or Floppies.

## Strings are your friend
<section class="postSection">
<iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/V3_vc7BO9lU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <div markdown="1">
```
strings yourfilename
```
</div>
</section> 

---
# Lesson 3 - Executables, CPU & Assembly Code
This section will start to look into reverse engineering the actual code that makes the games run on the CPU.

## What is an executable and how does it work?
The Youtuber **Bisqwit** bhas created an excellent video on how executables work:
<iframe width="560" height="315" src="https://www.youtube.com/embed/hhgxsrAFyz8" title="What are EXE files made of?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How a CPU Works
<iframe width="560" height="315" src="https://www.youtube.com/embed/6jSKldt7Eqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
LiveOverflow has an excellent introduction video to how a CPU works and what exactly assembly language is. 

### CPU Registers
In this video you will learn about registers, which it describes as global variables that the CPU accesses directly, which is a really nice way to think about them. 
Each CPU has a number of built in registers which can each store a set number of Bytes, the number of bytes that they store is defined by the CPU, for example a 64-bit CPU will have 64-bits for each register.

Almost all CPUs have special instructions that are designated for a particular purpose, one common example is the Program Counter which basically stores the location of the next instruction to execute on the CPU.

### The Stack
But what happens when you want to store more data than the limited number of registers available on the CPU? 
This is where the computers RAM comes in, no matter how simple your console or PC is it will have some sort of RAM available and is used to store data such as the players X and Y Position.

So how do we read and write data to this RAM? One simple way of saving and loading data is with something called the Stack.

You can think of the stack like a deck of cards, you can add new cards only to the top of the deck which represents writing to the stack. For reading data from the stack you can only take the top most card, which is also the most recently written piece of data.

Although unlike a deck of cards when you add more data the address of the data goes downwards instead of upwards, so if the first element in a stack is at position 10 then when you add another byte of data its address would be 9.

In fact the CPU has designated instructions to read and write from the stack, often called `push` and `pop`. Where push adds an aditional piece of data to the stack and pop removes the most recently added data from the stack of data.

## Reversing with GDB
GDB is a very useful tool to debug through an application, with functionality to set breakpoints and disassemble the code, which makes it a very useful tool for basic reverse engineering.
{% include link-to-other-post.html post="/tutorials/gdb-reversing" description="For more information about GDB check out this post." %}

---
# Next Steps - Choosing your console
You may already have a game or console chosen that you would like to reverse, if not we would suggest you start with either Game Boy or the Nintendo Entertainment System as there are many tools and documentation available for these platforms.

## Nintendo Consoles
We have pages on each of the following **Nintendo** consoles:
* [Nintendo Entertainment System](https://www.retroreversing.com/nes/)
* [Nintendo Game Boy](https://www.retroreversing.com/gameboy)
* [Nintendo 64](https://www.retroreversing.com/n64/)
* [Nintendo Gamecube (Dolphin)](https://www.retroreversing.com/gamecube/)
* [Nintendo Wii](https://www.retroreversing.com/wii/)
* [Nintendo 3DS](https://www.retroreversing.com/3ds/)
* [Nintendo WiiU](https://www.retroreversing.com/wiiU/)

## SEGA Consoles
We have pages on each of the following **SEGA** consoles:
* [Sega Master System](https://www.retroreversing.com/sms/)
* [Sega Mega Drive (Genesis)](https://www.retroreversing.com/md/)
* [Sega Saturn](https://www.retroreversing.com/saturn/)
* [Sega Dreamcast](https://www.retroreversing.com/dreamcast/)
* [Sega Game Gear](https://www.retroreversing.com/gamegear/)

## Sony Consoles
We have pages on each of the following **Sony** consoles:
* [Sony Playstation 1](https://www.retroreversing.com/ps1/)
* [Sony Playstation 2](https://www.retroreversing.com/ps2)
* [Sony Playstation Portable](https://www.retroreversing.com/psp/)

## Microsoft Consoles & PC
We have pages on each of the following **Microsoft** consoles along with a section of the IBM-PC:
* [Microsoft Xbox](https://www.retroreversing.com/xbox/)
* [PC](https://www.retroreversing.com/pc/)


---
# All Posts tagged with Introduction

<div>

{% include console.html %}
</div>
