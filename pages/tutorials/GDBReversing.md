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
redirect_from:
 - /gdb
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

For MacOS we have created a custom homebrew tap for easy installation available [here](https://github.com/RetroReversing/homebrew-gdb-multiarch)
You can use it like so:
```bash
brew tap RetroReversing/gdb-multiarch
brew install gdb-multiarch
/usr/local/Cellar/gdb-multiarch/15.1/bin/gdb-multiarch
```

### How to use gdb-multiarch
Once installed, you can use `gdb-multiarch` similarly to the standard `gdb`. The key difference is that `gdb-multiarch` allows you to specify the target architecture when loading an executable.
     ```bash
     gdb-multiarch -q -tui -ex "target sim" -ex "load" -ex "run" -ex "quit" my_program.elf
     ```

### How to see what architectures are available
You can see what target architectures are available simply by using the following command in gdb:
```bash
set architecture
```
It will print out something like this if it really is gdb-multiarch:
```
Requires an argument. Valid arguments are i386, i386:x86-64, i386:x64-32, i8086, i386:intel, i386:x86-64:intel, i386:x64-32:intel, i386:nacl, i386:x86-64:nacl, i386:x64-32:nacl, aarch64, aarch64:ilp32, arm, armv2, armv2a, armv3, armv3m, armv4, armv4t, armv5, armv5t, armv5te, xscale, ep9312, iwmmxt, iwmmxt2, armv5tej, armv6, armv6kz, armv6t2, armv6k, armv7, armv6-m, armv6s-m, armv7e-m, armv8-a, armv8-r, armv8-m.base, armv8-m.main, arm_any, alpha, alpha:ev4, alpha:ev5, alpha:ev6, hppa1.0, ia64-elf64, ia64-elf32, m68k, m68k:68000, m68k:68008, m68k:68010, m68k:68020, m68k:68030, m68k:68040, m68k:68060, m68k:cpu32, m68k:fido, m68k:isa-a:nodiv, m68k:isa-a, m68k:isa-a:mac, m68k:isa-a:emac, m68k:isa-aplus, m68k:isa-aplus:mac, m68k:isa-aplus:emac, m68k:isa-b:nousp, m68k:isa-b:nousp:mac, m68k:isa-b:nousp:emac, m68k:isa-b, m68k:isa-b:mac, m68k:isa-b:emac, m68k:isa-b:float, m68k:isa-b:float:mac, m68k:isa-b:float:emac, m68k:isa-c, m68k:isa-c:mac, m68k:isa-c:emac, m68k:isa-c:nodiv, m68k:isa-c:nodiv:mac, m68k:isa-c:nodiv:emac, m68k:5200, m68k:5206e, m68k:5307, m68k:5407, m68k:528x, m68k:521x, m68k:5249, m68k:547x, m68k:548x, m68k:cfv4e, mips, mips:3000, mips:3900, mips:4000, mips:4010, mips:4100, mips:4111, mips:4120, mips:4300, mips:4400, mips:4600, mips:4650, mips:5000, mips:5400, mips:5500, mips:5900, mips:6000, mips:7000, mips:8000, mips:9000, mips:10000, mips:12000, mips:14000, mips:16000, mips:16, mips:mips5, mips:isa32, mips:isa32r2, mips:isa32r3, mips:isa32r5, mips:isa32r6, mips:isa64, mips:isa64r2, mips:isa64r3, mips:isa64r5, mips:isa64r6, mips:sb1, mips:loongson_2e, mips:loongson_2f, mips:loongson_3a, mips:octeon, mips:octeon+, mips:octeon2, mips:octeon3, mips:xlr, mips:interaptiv-mr2, mips:micromips, rs6000:6000, rs6000:rs1, rs6000:rsc, rs6000:rs2, powerpc:common64, powerpc:common, powerpc:603, powerpc:EC603e, powerpc:604, powerpc:403, powerpc:601, powerpc:620, powerpc:630, powerpc:a35, powerpc:rs64ii, powerpc:rs64iii, powerpc:7400, powerpc:e500, powerpc:e500mc, powerpc:e500mc64, powerpc:MPC8XX, powerpc:750, powerpc:titan, powerpc:vle, powerpc:e5500, powerpc:e6500, riscv, riscv:rv64, riscv:rv32, s390:64-bit, s390:31-bit, sh, sh2, sh2e, sh-dsp, sh3, sh3-nommu, sh3-dsp, sh3e, sh4, sh4a, sh4al-dsp, sh4-nofpu, sh4-nommu-nofpu, sh4a-nofpu, sh2a, sh2a-nofpu, sh2a-nofpu-or-sh4-nommu-nofpu, sh2a-nofpu-or-sh3-nommu, sh2a-or-sh4, sh2a-or-sh3e, sparc, sparc:sparclet, sparc:sparclite, sparc:v8plus, sparc:v8plusa, sparc:sparclite_le, sparc:v9, sparc:v9a, sparc:v8plusb, sparc:v9b, sparc:v8plusc, sparc:v9c, sparc:v8plusd, sparc:v9d, sparc:v8pluse, sparc:v9e, sparc:v8plusv, sparc:v9v, sparc:v8plusm, sparc:v9m, sparc:v8plusm8, sparc:v9m8, m32r, m32rx, m32r2, auto.
```

Most useful for games consoles would be:
* arm - Nintendo GBA/DS (mGBA has a GDB stub)
* mips:4300 - Nintendo 64
* mips:3000 - Playstation 1
* mips:5900 - Playstation 2
* powerpc - Gamecube/Wii/ps3
* m68k - Sega Mega Drive
* sh2 - Sega Saturn
* sh4 - Sega Dreamcast

You will notice that there is no good options for 6502 or Z80 variants in GDB as these systems tend to be too old to have official GDB support.

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
# Adding GDB to existing emulators/software
Not all emulators have support for GDB out of the box, which is a shame as it is an incredibly useful feature for reverse engineering. Luckily most good emulators are open source so we can in theory add GDB support ourselves!

## Using Rust and rust-gdb-remote-protocol
**Marcin Mikołajczyk** has a good tutorial on how to add GDB support to a dummy MIPS CPU emulator using Rust and specifically the **rust-gdb-remote-protocol** available to read online [here](https://medium.com/virtuslab/integrating-gdb-support-in-an-emulator-ef41ff13f301).

Note that if you are using MacOS you will need to get the MIPS compiler **mipsel-unknown-linux-gnu** using the folowing custom homebrew tap:
```bash
brew tap messense/macos-cross-toolchains
brew install mipsel-unknown-linux-gnu
```
It will install to a path similar to `/usr/local/Cellar/mipsel-unknown-linux-gnu/13.3.0/bin` which you can either add to PATH or just run directly:
```bash
/usr/local/Cellar/mipsel-unknown-linux-gnu/13.3.0/bin/mipsel-unknown-linux-gnu-gcc --version

/usr/local/Cellar/mipsel-unknown-linux-gnu/13.3.0/bin/mipsel-unknown-linux-gnu-gcc -nostdlib -march=r3000 -Wl,--section-start=.text=0xbfc00000 hello_mips.c

/usr/local/Cellar/mipsel-unknown-linux-gnu/13.3.0/bin/mipsel-linux-gnu-objcopy -O binary -j .text a.out a.bin
```
This will give you a.out to use with the emulator

To run the rust program itself you can simple do:
```
cargo build
cargo run a.bin
```

Initially it give the output:
```
thread 'main' panicked at 'index out of bounds: the len is 80 but the index is 384', src/cpu.rs:28:19
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```
Which may or may not be intentional to start the tutorial. However switching to the final branch did at least listen for gdb on port 2424.

If you load up standard GDB and type the following command in:
```gdb
target remote localhost:2424
```

The GDB server will output the following:
```bash
Listening on port 2424
Got connection
Connection closed
```

This is probably because GDB only has the target architecture that your CPU has (probably either x64 or arm) but requires mips support. This is where **gdb-multiarch** comes in useful as it is a build of GDB with all the architectures enabled. However the problem is there doesn't seem to be any release of it for MacOS, so if you are on Linux you should be fine but for MacOS we will need to build GDB ourselves.

---
# References
[^1]: [Reversing and Cracking first simple Program - bin 0x05 - YouTube](https://www.youtube.com/watch?v=VroEiMOJPm8&list=WL&index=40)
