---
layout: post
tags: 
- n64
- introduction
title: N64 Reversing Introduction
image:  /public/N64/N64 Introduction.jpg
thumbnail: /public/consoles/Nintendo 64.png
permalink: /N64Reversing
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: N64 Reversing Introduction
    url: #
recommend: n64
editlink: /n64/N64ReversingIntroduction.md
updatedAt: '2020-03-29'
---

This post will give a brief introduction for the tools and techniques you need to start reverse engineering and decompiling a N64 Game.

# Part 1 - Looking for Initial Clues

## Find filenames in rom
One way to get a hint of the programming languages that a rom was written in (normally either c or c++) is to look for any left over references to the filenames in  the rom.

One really nice website that lists this information is:
http://shygoo.net/n64-uncompiled/n64-filenames.txt

## Find left over source code in the rom
Very occasionally you can be lucky and see a snippet or two of the original source code left in the rom, you can view a list of these here:
http://en64.shoutwiki.com/wiki/N64_C_Repo

-------

# Part 2 - Splitting up the ROM

## Introduction to N64Split
N64 Split is a tool initially developed for Super Mario 64 for extracting files out of the n64 rom but it is now general enough to be used for any N64 game.

This is the tool we will be using to start reversing the game of your choice.

You can download N64 Split here: [queueRAM/sm64tools: Collection of tools for Super Mario 64 ROM hacking](https://github.com/queueRAM/sm64tools)

## Find existing N64Split configs
If someone has already started reversing a game you may be lucky and they could have generated a config file that we can use in N64Split:
https://github.com/queueRAM/sm64tools/tree/master/configs

## Creating a new N64Split config
If the game you want to reverse engineer does not yet have a split file config then we can create one using the following template:
```yaml
# ROM splitter configuration file
name: "Your Game Name (Region)"

# checksums from ROM header offsets 0x10 and 0x14
# used for auto configuration detection
checksum1: 0xA03CF036
checksum2: 0xBCC1C5D2

# base filename used for outputs - [please, no spaces)
basename: "yourGameName.region"

# ranges to split the ROM into
# types:
#   asm      - MIPS assembly block.  Symbol names are in 'labels' list below
#   behavior - behavior script
#   bin      - raw binary, usually data
#   header   - ROM header block
#   instrset - instrument set
#   level    - level commands
#   m64      - M64 music sequence bank
#   mio0     - MIO0 compressed data block.  may have texture breakdown
#   ptr      - RAM address or ROM offset pointer
#
#   textures types:
#      rgba   - 16-bit RGBA - [5-5-5-1)
#      ia     - 16/8/4/1-bit greyscale
#      skybox - grid of 32x32 16-bit RGBA
ranges:
   # start,  end,      type,     label
   - [0x000000, 0x000040, "header", "header"]
   - [0x000040, 0x001000, "bin",    "boot"]
   - [0x001000, 0x0B6A40, "asm", "main", 0x80241800]
# Labels for functions or data memory addresses
# All label addresses are RAM addresses
# Order does not matter
labels:
  - [0x80241800, "EntryPoint"]
```

Save this with a filename in the form: `gameName.region.yaml` in the config folder next to n64split executable.

### Set checksum values
You will notice in the above template that there are 2 checksum addresses:
```yaml
checksum1: 0xA03CF036
checksum2: 0xBCC1C5D2
```
These are currently set to the checksum for Mario64 which will be no good for any other game, so lets get some proper values for this!

You will need to change the checksum1 and checksum2 values to the values of your specific rom. 

You can find the values by opening the Z64 ROM in a hex editor and going to address 0x10 and copying the hex value at that location. The same for checksum2 at 0x14 in the ROM.

### Set Entry point values
In two sections of the above template we have reference to the hex address `0x80241800`.
One is in the labels section:
```yaml
labels:
  - [0x80241800, "EntryPoint"]
```

The other is in the main range section:
```yaml
   - [0x001000, 0x0B6A40, "asm", "main", 0x80241800]
```

 This is called the Entry Point of a game and it is start point for the game code in RAM, the value above is for the Super Mario ROM.

So we need to replace this value with the start address of the game you are wanting to reverse.

Again open your ROM in a hex editor and go to address: 0x08 and use the 4 bytes at that address to set the entry point for you rom.

### Set end of assembly
This is much trickier, so while we know that the assembly code starts at 0x001000 we don’t know where it finishes. This will require some disassembling and detective work which is what we will do in the next section so for now keep it at `0x0B6A40` which is where the initial Mario code ends. We will find the proper value for this later on.

### Run N64Split
If you have put your new config file inside the config folder beside the n64split executable then you should be able to run this:
```bash
./n64split GameName.z64
``` 

It detects the correct config file using the checksum settings we defined earlier.

If however you would rather keep the config file in a different directory you can directly specify it like so:
```bash
./n64split -c gameName.region.yaml  GameName.z64
``` 

If all goes well the output should be similar to:
```bash
root@69b99468cc18:/sm64tools# ./n64split GameName.z64
Using config file: configs/gameName.region.yaml
Splitting into "gameName.region.split" directory

ROM split statistics:
Total decoded section size:  B5A80/800000 (8.87%)
```

This will create a `gameName.region.split` directory, where gameName and region are replaced with your specific rom settings. Don’t worry about that low percentage of decoded section we still have a few more ticks which can help increase the percentage decoded quickly.


### N64Split Output

Lets briefly look at the output of our initial run of n64split, if you open the directory it created it contains a number of different files listed below:

Name | Description
--- | ---
Makefile | 
Makefile.split |
bin | This is where the binary blobs get extracted to, initially you will have `yourGameName.region.000040.boot.bin` which contains the boot code common in all roms
geo | geometry will be extracted here (currently none)
geo_commands.inc |
globals.inc |  This is where all the labels you defined will be placed allowing compilers/assemblers to refer to them
levels  | Game Levels will be placed here when we tell n64split how to decode the levels
macros.inc  |
models  | 3D Model data will be placed in this folder
textures  | Game textures will be placed here when we tell n64split where in the rom the textures are
yourGameName.region.ld  |
yourGameName.region.s |

### The MakeFile
The MakeFile generated by n64 split is a great start but you will notice running `make` doesn’t actually manage to rebuild the rom as certain settings will need to be changed first.

While changing these there is also a number of other modifications to do to the makeFile so I tend to just replace the entire makefile with one based on the Sm64 project. This allows us to set it up to compile with the IDO compiler initially and we can easily change to a n64 version of gcc when we find out which compiler is used for this ROM.

Here is the new MakeFile:
```bash
TODO: Get the contents of the file
```

Notice you can now run `make` and it will try to create the ROM from the split sections, cool! 

Note that currently it will fail with lots of errors when you run `make` but this is actually good as we will cover this in the next section as it is giving us hints as to where the assembly code stops and the data section begins!

This will form the basis of your reversing project, soon it will be filled with .c files, 3d models and other data and will all be able to be rebuilt back into the original rom using `make`!

However the current content of the folder is not very useful at the moment as we haven’t actually split the rom into any proper areas yet but that is what we will do in the Next section.

So now at the end of this section you will have a folder with files that will eventually become the reversed source code of the game, we just need to tell n64split where the code, models, levels and other assets are in the game. To do that we will need to do some digging to understand the internals of your chosen game rom.

------
# Part 3 - Code Analysis

## Use the make
You will notice that running `make` will produce tons of assembler errors, well there is a good reason for this, remember when we talked about finding the end of the assembly section and we just kept the value from Mario64? 

Well that is whats throwing these errors, it is trying to assemble bytes that are not valid instructions and there for are data.

Ok so lets see what the first error that its throwing as that will give as a hint to say that address is definetly past the end of the assembly section, lets pipe the output of make to a file called output.txt:
```bash
make &>output.txt
```

So if we open this output.txt file and look at the top we get:
```
yourGameName.region.s: Assembler messages:
yourGameName.region.s:1111: Error: opcode not supported on this processor: vr4300 (mips3) `movn $zero,$zero,$zero'
```

Now open `yourGameName.region.s` and go to line number it says the first error is at (in the example above its 1111).

A quick way to do this on linux with nano install is to run:
```bash
nano +1111 yourGameName.region.s
```

You will notice a line similar to 
```asm
/* 001F00 80242700 0B */  movn  $zero, $zero, $zero
```
The instructions and addresses will most likely be completely different but what we are interested in is the first part of the comment `001F00` this is the offset where we got an invalid instruction so we know this is not supposed to be asm.


## Splitting up the assembly code into smaller files
Having one giant .s assembly file is not very manageable and I can (almost) guarantee it wasn’t that way when originally developing the rom. So lets try to split up the file into smaller chunks by looking for hints of `file boundaries` inside the assembly.

These can often be a certain number of nops between 2 functions symbolising that each function is in a different file or we can use the rodata for clues as to the file boundary information.

**TODO**

The tricky part is coming up with names for each of these files based on the functions they contain. Initially I create dummy file names and then rename them later when we can figure out what functions the file contains and name the file something more appropriate like `saveGame.c` or `drawLevel.c`.

### Find Ultra64 SDK Library Symbols
You can use this tool: https://github.com/shygoo/n64sym 
```bash
n64sym paper_mario.bin -l libs/libgultra_rom.a
```

-------
# Part 4 - Decompilation to C code

## Linker Reinsertion
So now that you have all the assembly code in seperate .s files we can start decompilation! 

The technique we will use is called Linker reinsertion and it requires that your Linker supports scripts (*.ld files), we will be using the gcc mips ld for this task.

The idea of Linker reinstertion is to slowly replace the assembly files with an equivalent C file, function by function, maing sure that the resulting assembly generated by the C code is identical to the original assembly.

So pick an interesting looking .s file to start with and create a .c file with the same name but in the source directory.

Lets say your assembly file was called target.s and located in the asm directory, then just create a target.c file in the src directory.

For example:
```
src/target.c
asm/target.s
```

Now pick one function from target.s file and create it in target.c, constantly monitor the assembly output as we want it to match exactly to the original.

-------
# Part 5 -Misc

## Embedded Javascript engine in Project64
Youtube: https://www.youtube.com/watch?v=PC0Tlz6oiN0 

## Use the official tools to display textures, sounds and NIF models
youtube - https://www.youtube.com/watch?v=yUX1Vga6amg 

## IDA Pro
When loading Turok .z64 into IDA pro an error window pops up with:
`The boot code is not loaded into the database, use manual load to load it`

