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

This guide is for all beginners who are interested in learning more about the technical details of their favourite consoles and games. The guide aims to be as console-agnostic as possible,  but after you have completed this you should look into the details of the specific console you are interested in.

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

Consider this: There are many devices that you use daily, like physical gadgets or computer programs, but most people don't have the skill to look inside them to check if they might invade your privacy or have flaws that could make you less safe. Reverse engineering gives you the skill to be able to check for security flaws and tracking functionality that companies often don't disclose to the public.

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
ISO files are sometimes incorrectly called ROMs and technically they are a copy of data that was on a Read-Only memory format but there are some fundamental differences between them.

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

So we know know that we can represent each byte as two Hexadecimal digits, why don't we open up some of those game files!

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
   Files come in many different formats, for example an image format such as JPG is very different in structure from an executable file such as a Windows Executable. Files tend to have an extension such as **.jpg** or **.exe** but this does not always match what is actually contained inside the file.


There are so many file formats out there (and many variations) that you couldn't possibly know them all, so its best to just learn what you need when you need it. Most standard formats are well documented online and for the others that may be custom to a specific game or application we can reverse engineer the assembly code of how the software reads (or writes to) the file.

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
   When looking at custom file formats or even just executables, one of the most valuable pieces of data in these files are Text Strings, especially if they are in standard ASCII or UTF-8 format.
   There is a really easy way to dump out all the ASCII strings in a file using the **strings** command like so:
```
strings yourfilename
```
</div>
</section> 

## Game Audio and Music
A core part of all video games is the Audio, whether as background music or sound effects, finding out how the sound system works for your chosen game can be fascinating. We have a seperate post covering Game Audio and Music reversing and file format information.
{% include link-to-other-post.html post="/how-retro-audio-worked" description="For more information about Game Audio check out this post." %}

## Memory Dumps
Instead of relying on an infinite number of random attempts to find hidden codes or features, memory dumps provide an efficient way to access and analyze software. It allows for systematic reverse engineering (RE) of the software to uncover "secret" codes that may only be available in memory.

Knowing how data is structured in memory is a crucial skill to be able to tear apart how software works and ultimately learn about any hidden functionality, security issues or privacy violations.

A practical example is the **Nokia 5210** cell phone's security code. While the manufacturer claimed it was unbreakable, memory dumps revealed a secret sequence (*3001#12345#) to unlock the phone. This discovery can be beneficial to end users who want to unlock their phone or even just for users to know that its possible.

## Data Representations
The exact representation a game uses will vary based on the compiler used, system its developed for and even programmer preference. 

Here are the most common data representations:
* **Single Character** (e.g the letter A) - Single byte ASCII
* **ASCII Text** (e.g the string 'Hello') - One Byte per character and normally ended with a Null Terminator **0x00**
* **UTF-8 Text** (e.g the string 'Hello') - Two Bytes per character and normally ended with a Null Terminator **0x00**
* **Boolean** - Either 1 Byte, 4 Bytes or occasionaly 1 Bit (along with 7 other boolean bits)
* **Integer/Short** - 2 Bytes (16Bit systems) or 4 Bytes (32Bit systems)
* **Long** - 4 Bytes

## Endianness
Endianness refers to the byte order or how multi-byte data is stored in memory. It's important to understand endianness because games often need to work with data structures that span multiple bytes, such as integers or color values. 

There are two main types of endianness:
* **Big-Endian** - In a big-endian system, the most significant byte (the "big end") of a data word is stored at the lowest memory address, and the least significant byte (the "little end") is stored at the highest memory address. It's like writing numbers from left to right, with the most significant digits on the left. This is the order you'd naturally expect when reading a number.
* **Little-Endian** - In a little-endian system, it's the opposite. The least significant byte is stored at the lowest memory address, and the most significant byte is stored at the highest memory address. It's as if you were writing numbers from right to left, with the least significant digits on the right.

If you're developing a game on a little-endian PC but targeting a big-endian games console, you'd need to swap the bytes when loading or saving data. This byte-swapping can be essential when working with things like color values, sound samples, or binary file formats that need to be read and written correctly.

Additionally, some retro consoles, like the Sega Genesis, used a mixture of big-endian and little-endian data formats, adding another layer of complexity. Understanding the specific endianness of the target console and adapting your code accordingly is crucial for retro game development to ensure that data is interpreted correctly, graphics are displayed accurately, and sound is played as intended.

## Memory Pointers
When inspecting a game's memory it is important to know that the address where the data is stored will change from run to run. So for example if you know the lives is stored at a particular address in memory, if you restart the game you may find that it is stored in a completely different location. So how does the computer know where to look for the lives memory? The answer is simply using pointers.

Pointers are simply variables that point to a specific memory address asnd they can be modified at runtime.

---
# Lesson 3 - Executables, CPU & Assembly Code
This section will start to look into reverse engineering the actual code that makes the games run on the CPU.

## What is an executable and how does it work?
The Youtuber **Bisqwit** has created an excellent video on how executables work:
<iframe width="560" height="315" src="https://www.youtube.com/embed/hhgxsrAFyz8" title="What are EXE files made of?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What file format do executables have?
Executable file formats are specific data structures used by operating systems to understand how to load and execute a program. These formats vary depending on the operating system and architecture, but the most common ones are:
* **PE** - Portable Executable used in Microsoft Windows and Xbox
* **ELF** - Executable and Linkable Format used in Linux/Unix systems
* **Mach-O** - Mach Object used in MacOSX and iOS
* **COFF** - Common Object File Format used in older versions of Windows for device drivers and early Unix
* **COM** - Used in DOS and early Windows

Note that most executables don't have any file extension on Unix/MacOSX and many games consoles. Many games consoles use a modified version of ELF such as the Sony PSP's Eboot.bin files or even completly custom implementations like the original PlayStation's "PS-EXE" format.

## What is an API?
An **Application Programming Interface** (API) is a collection of functions that are so common that they are provided to every programmer of a certain  platform (e.g PS1, Xbox 360, Windows). These functions can either by included in the executable directly or dynanmically linked to at runtime from a common set of libraries. 

API functions are very useful when reversing a game or application as they tend to have documentation associated with them and give hints as to what the code that calls them might be wanting to do. So they are a very good place to start when reverse engineering an executable.

---
## Microprocessors (CPUs)
<iframe width="560" height="315" src="https://www.youtube.com/embed/EJh4BIujpHA?si=0OfwRXjM9JiWavqV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Microprocessors provided a cost-effective way to access computing power. Before microprocessors, developing custom hardware for each game or gaming system was expensive and time-consuming. Microprocessors allowed for standardized, affordable, and flexible computing platforms.

Microprocessors brought a level of standardization to the gaming industry. Instead of needing custom hardware for each game or console, developers could create games for a common microprocessor architecture (e.g., x86, ARM, or MIPS). This made it easier for developers to create games and for consumers to adopt new gaming systems.

## How a CPU Works
<iframe width="560" height="315" src="https://www.youtube.com/embed/6jSKldt7Eqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
**LiveOverflow** has an excellent introduction video to how a CPU works and what exactly assembly language is. 

A CPU for a game console or PC works by following a series of steps to process instructions and manage the game's activities. Here's a simple explanation:

* **Fetch**: The CPU fetches (reads) instructions from the game's memory. These instructions are like the rules of the game.
* **Decode**: The CPU figures out what each instruction means. It's like understanding the rules of the game, such as "move the character left" or "shoot the enemy."
* **Execute**: The CPU carries out the instructions. It makes the game characters move, calculates scores, and does other tasks as instructed.
* **Repeat**: The CPU keeps fetching, decoding, and executing instructions one after the other, making the game run smoothly.
The CPU also works with other parts of the console, like the graphics and sound chips, to create the game's visuals and sounds.

### What is a CPU Instruction?
An instruction is a basic operation or command that the CPU can execute. These instructions are written in a machine-readable form, usually in binary code, and are the fundamental building blocks of a computer program. Each CPU has its own specific set of instructions, known as its instruction set architecture (ISA).

Instructions can perform various tasks, such as:
1. **Arithmetic Operations**: These include instructions for addition, subtraction, multiplication, division, and other mathematical operations.
2. **Data Movement**: Instructions for moving data between registers, memory, and other storage locations.
3. **Control Flow**: Instructions that control the program's flow, such as branching (jumping to a different part of the program) or conditional execution (if-then-else).
4. **Logical Operations**: Instructions for performing logical operations like AND, OR, XOR, and NOT.
5. **Load and Store**: These instructions load data from memory into registers or store data from registers back into memory.
6. **Input/Output**: Instructions that allow the CPU to interact with input and output devices like keyboards, displays, and storage devices.

CPU instructions are executed sequentially, one after the other, according to the program's logic. The order and combination of these instructions determine the behavior of a computer program.

### What is Assembly language?
Assembly language is a low-level programming language that's a step above the binary machine language that computers understand. It uses human-readable mnemonics and symbols to represent the basic operations a computer's Central Processing Unit (CPU) can perform, like adding numbers, moving data, and making decisions.

In essence, assembly language is a way for humans to communicate with computers in a more understandable way, making it easier to write software that can perform specific tasks or functions on a computer's hardware.

### Do I need to learn Assembly Language for reversing?
You do not need to learn assembly language to reverse engineer retro games, however if you want to write your own games from scratch then it is reccomended. 
For reversing you might be dealing with multiple CPUs on a single console so learning the entire instruction set would be too time consuming and by the time you get to actually reversing you may have forgotten much of what you have just learned. 

The best way is to learn as you go and use the Internet as a reference when you need to know what an instruction does.

However there are a few basics that you should know before getting your hands dirty and these apply to the Assembly language used in most retro video game consoles. These will be covered in the next few sections.


### What Assembly language Should I learn?
It depends on the platform (specifically CPU) that your game was built for, here are some examples:
* **Z80 Assembly Language** - Game Boy, Sega Master System, Sega Game Gear
* **6502 Assembly Language** - Nintendo Entertainment System, SNES, PC Engine / TurboGrafx-16
* **Motorola 68000 Assembly Language** - Sega Mega Drive
* **MIPS Assembly Language** - Sony Playstation 1, Sony Playstation 2, Sony PSP, Nintendo 64
* **SuperH Assembly Language** - Sega Saturn, Sega Dreamcast
* **ARM Assembly Language** - Game Boy Advance, Nintendo DS, Nintendo 3DS, iPhone, Android
* **PowerPC Assembly Language** - Nintendo Gamecube, Nintendo Wii, Nintendo Wii U, Microsoft Xbox 360, Sony Playstation 3
* **Intel x86 Assembly Language** - Microsoft Xbox

Note that the above are the rough groups, some specific CPUs have more specialised instructions that are exclusive to that console, but mostly its the same programming language.

### How similar are Instruction Set Architectures
Here is a simple comparison table that highlights some key differences between different CPU Instruction Set Architectures (ISA). Please note that this table is not exhaustive and focuses on high-level distinctions:

| ISA         | Example Instructions | Number of Registers | Memory Addressing Modes | Complex Instructions | Endianness |
|-------------|----------------------|---------------------|-------------------------|-----------------------|------------|
| Z80         | ADD, SUB, MOV        | 8 General Purpose  | Immediate, Direct, Indexed, Register Indirect | Conditional Jumps, Bit Manipulation | Little-Endian |
| 6502        | ADC, LDA, STA        | 3 General Purpose  | Zero Page, Absolute, Indexed, Indirect | None                  | Little-Endian |
| 68K         | ADD, SUB, MOVE       | 16 General Purpose | Register Direct, Immediate, Memory Indirect | Multiply, Divide, Bit Manipulation | Big-Endian |
| MIPS        | ADD, SUB, LW         | 32 General Purpose | Immediate, Register Direct, Base + Offset | Load/Store, Multiply, Divide | Big-Endian |
| x86         | ADD, SUB, MOV        | 8 General Purpose  | Register Direct, Immediate, Memory Indirect | Complex Arithmetic, SIMD | Little-Endian |
| ARM         | ADD, SUB, LDR        | 16 General Purpose | Immediate, Register Direct, Base + Offset | SIMD, Multiply, Divide | Little-Endian |
| SuperH      | ADD, SUB, MOV        | 16 General Purpose | Immediate, Register Direct, Memory Indirect | Multiply, Divide, Bit Manipulation | Little-Endian |
| PowerPC     | ADD, SUB, LWZ        | 32 General Purpose | Immediate, Register Direct, Base + Offset | SIMD, Multiply, Divide | Big-Endian |

This table provides a broad overview of these architectures, but there are many more details and specific instructions within each ISA. The number of registers, addressing modes, and the availability of complex instructions can significantly vary even within a single architecture, and the choice of endianness (byte order) can have important implications for software compatibility. For a deep dive into any of these ISAs, you would typically need to consult the official documentation or specific resources for each architecture.

### How do I convert my game into assembly language?
The process of taking a final game executable/ROM and converting it into human readable Assembly language is called disassembling.

You need to choose a Disassembler that works for your game's Instruction Set Architecture (ISA), this will depend on which console or PC your game is compiled for.

We have a seperate post covering how disassemblers work below:
{% include link-to-other-post.html post="/disassemblers" description="For more information on Disassemblers check out this post." %}

## CPU Internals

### The No Operation Instruction (NOP)
In the world of assembly language programming, every Central Processing Unit (CPU) includes an instruction that accomplishes precisely nothing. These unassuming instructions are commonly referred to as 'No Operation' or NOPs. When a NOP is executed, the CPU undergoes a brief, yet essential, period of inactivity, ultimately ending up in the exact state it occupied before executing the instruction.

While this might seem counterproductive, NOPs have their indispensable uses. One of their primary functions is to 'waste time' intentionally. CPUs operate relentlessly, executing instructions in rapid succession, and sometimes, you need the CPU to pause briefly, awaiting the readiness of another part of the system. In such cases, NOPs prove invaluable. They serve as a placeholder or a delay mechanism, ensuring that the CPU remains occupied without altering its state.

Imagine a scenario where a CPU needs to synchronize with external hardware that operates at a different speed. By inserting NOPs strategically, you can create the necessary time gaps, allowing the CPU to align its actions with the external hardware's pace. This is just one example of how NOPs find practical application in assembly programming, despite their seemingly 'do-nothing' nature.

Also NOP instructions can be used to insert empty space or "padding" in the code. This can be useful for aligning instructions in memory or adjusting the size of loops and branches. For example, if you want to ensure that a certain block of code is located at a specific memory address, you can insert NOP instructions to fill the gap between the end of the previous code and the desired location.

### CPU Registers
In this video you will learn about registers, which it describes as global variables that the CPU accesses directly, which is a really nice way to think about them. 
Each CPU has a number of built in registers which can each store a set number of Bytes, the number of bytes that they store is defined by the CPU, for example a 64-bit CPU will have 64-bits for each register.

Almost all CPUs have special registers that are designated for a particular purpose, one common example is the Program Counter which basically stores the location of the next instruction to execute on the CPU.

### The Stack
But what happens when you want to store more data than the limited number of registers available on the CPU? 
This is where the computers RAM comes in, no matter how simple your console or PC is it will have some sort of RAM available and is used to store data such as the players X and Y Position.

So how do we read and write data to this RAM? One simple way of saving and loading data is with something called the Stack.

You can think of the stack like a deck of cards, you can add new cards only to the top of the deck which represents writing to the stack. For reading data from the stack you can only take the top most card, which is also the most recently written piece of data.

Although unlike a deck of cards when you add more data the address of the data goes downwards instead of upwards, so if the first element in a stack is at position 10 then when you add another byte of data its address would be 9.

In fact the CPU has designated instructions to read and write from the stack, often called `push` and `pop`. Where push adds an aditional piece of data to the stack and pop removes the most recently added data from the stack of data.

### Random Number Generation (RNG)
While a CPU diligently follows every instruction it receives, this unwavering predictability presents a challenge for game developers. Players crave the excitement of unpredictability to make each gaming experience unique. So, how can a CPU introduce randomness into the game world?

One elegant solution involves a Random Number Generator (RNG) that relies on the timing of user input. The CPU continuously increments a counter until the player presses a button. With the timing of button presses being entirely unpredictable, the CPU uses this ever-evolving count to generate random numbers. This injects a vital element of surprise and distinctiveness into every gaming session.

This technique is frequently employed in early games, especially when other random seeds, like the current time in milliseconds, which is guaranteed to be unique but somewhat predictable, are unavailable.

---
## What is an emulator and how does it work?
We have a specific post covering exactly how emulators works including tips for writing your own emulators:
{% include link-to-other-post.html post="/how-emulators-work" description="For more information on how emulators work check out this post." %}

## Reversing with GDB
GDB is a very useful tool to debug through an application, with functionality to set breakpoints and disassemble the code, which makes it a very useful tool for basic reverse engineering.
{% include link-to-other-post.html post="/tutorials/gdb-reversing" description="For more information about GDB check out this post." %}

---
# Next Steps - Choosing your console
You may already have a game or console chosen that you would like to reverse, if not we would suggest you start with either Game Boy or the Nintendo Entertainment System as there are many tools and documentation available for these platforms.

## Nintendo Consoles
We have pages on each of the following **Nintendo** consoles:
* [Nintendo Entertainment System](https://www.retroreversing.com/nes)
* [Super Nintendo Entertainment System](https://www.retroreversing.com/snes/)
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
