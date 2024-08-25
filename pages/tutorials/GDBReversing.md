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
editlink: /tutorials/GDBReversing.md
updatedAt: '2020-08-28'
---

# Introduction

## What is GDB?
The GNU Debugger or GDB for short is a command line tool that allows you to disassemble and understand the code execution of a program. 

If you have ever used a debugger built into an IDE then you should be familiar with breakpoints, watch points and code stepping. 

GDB provides this functionality and is often used to implement the debugging features of IDEs.

## GDB For Reverse Engineering
GDB can thus be useful for reverse engineering as it can show and dynamically change the flow of the program, showing all state changes and code executed.

One of the key benefits lies in GDB's ability to dynamically analyze the execution of retro game code. With GDB, reverse engineers can run retro games within the debugger, observing the program's behavior, and gaining insights into memory usage, register values, and the flow of execution. 

Breakpoint support in GDB is particularly advantageous for reverse engineers dissecting retro games. By strategically placing breakpoints at critical points in the code, such as game state transitions, collision detection routines, or graphics rendering functions, analysts can pause the game at specific moments and meticulously inspect the program's state. This aids in understanding game mechanics, identifying graphical rendering processes, and uncovering the underlying algorithms governing gameplay. 

---
# GDB CheatSheet
Here's a table format for some of the most commonly used GDB commands:

| Command                       | Abbreviation | Description                                              |
| ----------------------------- | ------------ | -------------------------------------------------------- |
| `run`                         | `r`          | Start program execution from the beginning.              |
| `break`                       | `b`          | Set a breakpoint at a specified location.                |
| `continue`                    | `c`          | Continue program execution until the next breakpoint.    |
| `step`                        | `s`          | Execute the current line and stop at the first instruction of called functions. |
| `next`                        | `n`          | Execute the current line and stop at the next line in the same function. |
| `finish`                      |              | Execute remaining lines of the current function and stop when the function returns. |
| `list`                        | `l`          | Display source code around the current line.             |
| `info breakpoints`            |              | Display information about set breakpoints.               |
| `print`                       | `p`          | Print the value of a variable or expression.             |
| `backtrace`                   | `bt`         | Display a backtrace of the call stack.                  |
| `info locals`                 |              | Display values of local variables in the current stack frame. |
| `info registers`              |              | Display values of CPU registers.                         |
| `set variable`                |              | Set the value of a variable during debugging.           |
| `display`                     |              | Display the value of an expression after each debugger command. |
| `delete`                      |              | Delete a specific breakpoint or all breakpoints.         |
| `watch`                       |              | Set a watchpoint on a variable.                          |
| `info threads`                |              | Display information about threads in a multithreaded program. |
| `thread`                      |              | Switch between threads in a multithreaded program.       |
| `set pagination off`          |              | Disable pagination, allowing GDB to display long output without pausing. |
| `quit`                        | `q`          | Exit GDB.                                                |


---
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

---
# GDB for Console Game Development and Reversing
One thing to keep in mind is that you can't just use any GDB executable, it needs to match the target CPU architecture, for example here is one for Z80:
 * **Z80** - [legumbre/gdb-z80: GDB with Z80 target support](https://github.com/legumbre/gdb-z80)

 Also some emulators have GDB support out of the box:
 * **GBA** - mgba (use -g flag) [mgba-emu/mgba: mGBA Game Boy Advance Emulator](https://github.com/mgba-emu/mgba)
 * **GBA/GB** - vba-m (use -G flag) [visualboyadvance-m/visualboyadvance-m: The continuing development of the legendary VBA gameboy advance emulator.](https://github.com/visualboyadvance-m/visualboyadvance-m)

## gdb-multiarch
`gdb-multiarch` is a variant of the GNU Debugger (GDB) designed to support multiple architectures, making it more convenient to work with executables targeting different instruction sets or CPU architectures within the same GDB instance.

The primary motivation for using `gdb-multiarch` arises in situations where you need to debug binaries compiled for architectures other than the one on which GDB is running. It provides a single interface to handle debugging sessions for multiple architectures, allowing you to seamlessly switch between them without restarting GDB.

This is very useful for connecting to game console emulator's that already contain a **GDB Stub** (covered in a future section).

### Where to get gdb-multiarch
On systems that support package managers, you can typically install `gdb-multiarch` alongside the standard GDB. For example, on Debian-based systems:
     ```bash
     sudo apt-get install gdb-multiarch
     ```

### How to use gdb-multiarch
Once installed, you can use `gdb-multiarch` similarly to the standard `gdb`. The key difference is that `gdb-multiarch` allows you to specify the target architecture when loading an executable.
     ```bash
     gdb-multiarch -q -tui -ex "target sim" -ex "load" -ex "run" -ex "quit" my_program.elf
     ```

### How to change target architecture
You can change the target architecture within the GDB session using the `set architecture` command.
     ```bash
     set architecture arm
     ```

This flexibility is particularly useful when working with cross-compilation environments or when dealing with software that supports multiple architectures.



---
# GDB Frontends
GDB frontends are graphical or text-based interfaces that provide a user-friendly way to interact with the GNU Debugger (GDB). These frontends simplify the debugging process by offering features like syntax highlighting, variable inspection, and breakpoint management. Here are some popular GDB frontends:
* **GDBGUI** - [gdbgui](https://www.gdbgui.com/)
* **DDD** - [DDD - Data Display Debugger - GNU Project - Free Software Foundation (FSF)](https://www.gnu.org/software/ddd/)

### GDBGUI
GDBGUI is a modern and browser-based graphical interface for GDB, providing a convenient way to interact with the GNU Debugger. It allows developers to debug programs through a web-based interface, offering features like source code visualization, variable inspection, and breakpoint management.

### DDD (Data Display Debugger)
DDD is a popular graphical debugger front-end for GDB. It provides a visual representation of data structures, making it easier to inspect variables. DDD supports multiple programming languages and includes features such as source code highlighting, breakpoints, and a powerful interface for interacting with GDB.

### Ghidra
Newer versions of Ghidra also support GDB debugging, here is an article explaining how to set it up for Game Boy Advance: [A first look at Ghidra's Debugger - Game Boy Advance Edition | Wrongbaud's Blog](https://wrongbaud.github.io/posts/ghidra-debugger/)

It uses the mGBA emulator as it provides a GDB stub which can be connected to Ghidra (through gdb-multiarch). The next session will explain what GDB stubs are and what they are used for.

---
# GDB Stubs
GDB Stubs are components embedded within target programs to enable **remote debugging**, they form a crucial link between the GDB debugger and the running program, facilitating communication, control, and inspection of the target's runtime behavior. 

## What do GDB Stubs do?
GDB Stubs interpret commands received from the GDB debugger, executing actions within the target program accordingly. Commands may include setting breakpoints, stepping through code, inspecting memory, and altering the program's state.

GDB Stubs, developers gain fine-grained control over the execution of the target program. Breakpoints can be set, and program execution can be paused, allowing for detailed inspection and analysis of the program's runtime behavior.

## How does it compare to using regular GDB on an executable?
Regular GDB runs on the same system as the program being debugged, GDB Stubs however communicate over a network connection enabling bidirectional communication between the debugger and the target program running on another system. This remote connectivity is especially valuable in scenarios where physical access to the running program is limited.

This is great for debugging software that don't have a debugging environment such as games consoles and other embedded systems.

## What exactly are GDB stubs?
GDB Stubs consist of a lightweight set of code seamlessly integrated into the binary of the target program. This embedded code is responsible for establishing a communication channel between the running program and the GDB debugger.

## How does the stub communicate with the GDB debugger?
Communication between the GDB debugger and GDB Stubs follows the **GDB Remote Serial Protocol**. This protocol defines a standardized format for messages exchanged between the debugger and the stub, allowing for coherent interaction during debugging sessions.

You can find out more about the GDB Remote Serial Protocol on the official documentation website: [Remote Protocol (Debugging with GDB)](https://sourceware.org/gdb/current/onlinedocs/gdb.html/Remote-Protocol.html#Remote-Protocol)

## Security Implications
As GDB Stubs provide a pathway for remote interaction with a program, developers must consider security implications and ensure proper safeguards to prevent unauthorized access. Software should not be released with the GDB stub embedded inside and proper network hygene is required between the two remote systems to prevent Man in the Middle attacks.

---
# References
[^1]: [Reversing and Cracking first simple Program - bin 0x05 - YouTube](https://www.youtube.com/watch?v=VroEiMOJPm8&list=WL&index=40)
