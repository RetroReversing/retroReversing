---
permalink: /tutorials/gdb-reversing
layout: post
title: Reversing with GDB (GNU Debugger)
thumbnail: /public/consoles/Computer Old Design.png
image: /public/images/tools/ReversingWithGDB.jpg
twitterimage: http://www.retroreversing.com/public/images/tools/ReversingWithGDB.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Techniques & Tutorials
    url: /tutorials
  - name:  Reverse Engineering with GDB
    url: #
recommend: 
- introduction
- tutorial
tags:
- introduction
- gdb
editlink: /articles/TechniquesAndTutorials/GDBReversing.md
updatedAt: '2020-08-28'
---

The GNU Debugger or GDB for short is a command line tool that allows you to disassemble and understand the code execution of a program. 

If you have ever used a debugger built into an IDE then you should be familiar with breakpoints, watch points and code stepping. 

GDB provides this functionality and is often used to implement the debugging features of IDEs.

GDB can thus be useful for reverse engineering as it can show and dynamically change the flow of the program, showing all state changes and code executed.

# Simple License Check Example
<iframe width="560" height="315" src="https://www.youtube.com/embed/VroEiMOJPm8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this video tutorial from LiveOverflow it gives a brief introduction on how to understand a simple license check application [^1].

You can download the files used in the tutorial from LiveOverflows Github page: [liveoverflow_youtube/0x05_simple_crackme_intro_assembler at master · LiveOverflow/liveoverflow_youtube · GitHub](https://github.com/LiveOverflow/liveoverflow_youtube/tree/master/0x05_simple_crackme_intro_assembler)

It is a linux executable that can be run either on a linux distribution or in Docker.

## Running the example without GDB
You can simply execute the provided example on a linux machine like so:
```
./license_1 TEST-KEY-1234
```

It will check to see if the argument is a valid license key, in this case `TEST-KEY-1234` is not a valid license key so it prints the string "WRONG!"

## Running the example with GDB
It is just as simple to run the example through GDB, it just has a few extra steps before execution. You can run the executable through gdb like so:
```bash
gdb license_1
```

Notice that it won't start execution straight away and instead give a command line prompt for you to execute a command into.

The commands you can type into here are known as GDB commands and provide options for setting breakpoints, disassembling and much more.

## Disassemble the main function
As this is a program compiled from C it has a main function, you can disassemble this function with GDB like so:
```
disassemble main
```

How easy is that? You can now see a full assembly listing of the main function! This is all the code that the CPU will execute when running your executable.

### Switching Disassembly Syntax from AT&T to Intel
Some people prefer the intel syntax for disassembled code and you can set this with the following GDB command:
```
set disassembly-flavor intel
```

## Create a new breakpoint
To create a breakpoint it is very simple you just use the command `break` along with the function name or address you want to break execution flow on. So for example:
```
break main
```

## Running the program
To start execution so that we can reach our breakpoint simply type the command:
```
run
```

Note that you can also pass in arguments to the program as parameters to the run command so for out example we can pass a license key to the executable like so:
```
run TEST-KEY-1234
```

Also notice that if you use run when a program is already running it asks if you want to restart it, if you are looking to just go to the next breakpoint then use the `continue` command instead.

## View Register values
Registers are small pieces of memory that store values inside the CPU, assembly code works with registers to provide most of the logic. You can view their current values at the current breakpoint like so:
```
info registers
```

## Stepping to the next instruction
You have a few commands to step to the next instruction "ni" (next instruction) and "si" (step instruction. The difference is that ni doesn't not step into function calls but si does.
```
ni ; step over function calls
si ; step into function calls
```

## Changing the value of registers
You can dynamically alter the values of registers with GDB too like so:
```
set $eax=0
```
This will set the EAX register to 0, but you can set it to any value you want.

# References
[^1]: [Reversing and Cracking first simple Program - bin 0x05 - YouTube](https://www.youtube.com/watch?v=VroEiMOJPm8&list=WL&index=40)
