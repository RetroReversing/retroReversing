---
layout: post
permalink: /disassemblers
thumbnail: /public/images/RetroReversingLogoSmall.png
console: disassemblers
breadcrumbs:
  - name: Home
    url: /
  - name: Disassemblers - A Deep Dive
    url: /disassemblers
editlink: ../categories/tools/Disassemblers.md
title: Disassemblers - A Deep Dive
recommend: 
 - tools
 - software
tags:
 - disassemblers
 - tools
 - software
---

# Understanding How Disassemblers Work: A Deep Dive

In the world of retro gaming, reverse engineering, and software development, disassemblers are essential tools. 

They provide a bridge between binary code and human-readable assembly language, allowing developers and enthusiasts to analyze and understand software at a fundamental level. 

This post delves into how disassemblers work, their significance, and why they're indispensable for anyone interested in reverse engineering or low-level programming.

## What is a Disassembler?

A disassembler is a tool that converts machine code—binary instructions executed by a CPU—back into assembly language. 

## What is Assembly Language?
Assembly language is a low-level programming language that is closely related to machine code but is easier for humans to read and understand. 

Each CPU architecture (e.g., x86, ARM, MIPS) has its own set of instructions and corresponding assembly language.

## Why use a Disassembler?
Disassemblers are used primarily in reverse engineering, debugging, and analyzing how a program operates internally. 

They provide insights into the logic and flow of a program without requiring access to the original source code.

---

# The Disassembly Process: Step-by-Step

To understand how disassemblers work, it’s essential to break down the disassembly process into key steps:

## Step 1 - Loading the Binary
The first step in disassembly is loading the binary file into the disassembler.
This binary file is typically an executable or a compiled program that contains the machine code.
The disassembler reads this file byte by byte, interpreting each byte as part of an instruction.

## Step 2 - Identifying Instruction Boundaries
CPUs execute instructions in sequence, with each instruction typically consisting of an operation code (opcode) and operands. 

However, machine code is just a stream of bytes, so the disassembler must identify where each instruction begins and ends. 

This can be challenging because instruction lengths can vary depending on the CPU architecture.

Disassemblers use several techniques to identify instruction boundaries:
   - **Linear Sweep** - The disassembler starts at the entry point of the program and reads instructions sequentially. 
   - **Recursive Descent** - Starting at the entry point, the disassembler follows control flow instructions (like jumps and calls) to identify the next instructions to decode. 

### Linear Sweep
The disassembler starts at the entry point of the program and reads instructions sequentially. 

This method assumes that all instructions are valid and contiguous, which is not always the case, especially with data interleaved in the code or with obfuscation techniques.

A Javascript example of Linear sweep for a Z80 disassembler is shown below, it only has a few opcodes to show the main ideas:
```js
// Z80 opcode map (simplified)
const z80Instructions = {
    0x00: { mnemonic: 'NOP', size: 1 },
    0x3E: { mnemonic: 'LD A,', size: 2 },  // 2-byte instruction
    0x06: { mnemonic: 'LD B,', size: 2 },  // 2-byte instruction
    0x0E: { mnemonic: 'LD C,', size: 2 },  // 2-byte instruction
    0x76: { mnemonic: 'HALT', size: 1 },
    // Add more opcodes as needed
};

// Sample Z80 binary data (machine code)
const binaryData = new Uint8Array([0x3E, 0x12, 0x06, 0x34, 0x00, 0x76]);

function disassembleZ80(binary) {
    let pc = 0; // Program counter

    while (pc < binary.length) {
        const opcode = binary[pc];
        const instruction = z80Instructions[opcode];

        if (!instruction) {
            console.log(`Unknown opcode: 0x${opcode.toString(16).toUpperCase()}`);
            pc += 1;
            continue;
        }

        const { mnemonic, size } = instruction;
        let assemblyLine = mnemonic;

        // Handle any additional bytes (operands)
        if (size > 1) {
            const operand = binary.slice(pc + 1, pc + size);
            const operandHex = Array.from(operand).map(byte => `0x${byte.toString(16).toUpperCase()}`);
            assemblyLine += operandHex.join(', ');
        }

        console.log(`0x${pc.toString(16).toUpperCase()}: ${assemblyLine}`);
        pc += size;
    }
}

disassembleZ80(binaryData);
```


### Recursive Descent
Recursive Descent is a more sophisticated disassembly technique than Linear Sweep.

Instead of just reading the binary sequentially, it follows the flow of execution by interpreting control flow instructions like jumps and calls. 

This approach allows it to handle non-linear code paths better and avoid disassembling data that might be interleaved with code.

This method is more accurate for complex binaries with non-linear control flow but requires more computational effort.


Here’s a simple JavaScript example demonstrating Recursive Descent disassembly for a Z80 CPU.
```js
// Simplified Z80 opcode map
const z80Instructions = {
    0x00: { mnemonic: 'NOP', size: 1 },
    0x3E: { mnemonic: 'LD A,', size: 2 },  // 2-byte instruction
    0x06: { mnemonic: 'LD B,', size: 2 },  // 2-byte instruction
    0x0E: { mnemonic: 'LD C,', size: 2 },  // 2-byte instruction
    0xC3: { mnemonic: 'JP', size: 3 },     // Unconditional jump (3 bytes)
    0x76: { mnemonic: 'HALT', size: 1 },
    // Add more opcodes as needed
};

// Sample Z80 binary data (machine code)
const binaryData = new Uint8Array([0x3E, 0x12, 0xC3, 0x08, 0x00, 0x00, 0x76, 0x00, 0x06, 0x34]);

// To keep track of visited addresses
const visitedAddresses = new Set();

function disassembleZ80Recursive(binary, pc = 0) {
    while (pc < binary.length) {
        if (visitedAddresses.has(pc)) {
            return; // Already disassembled this part, avoid infinite loops
        }

        visitedAddresses.add(pc);

        const opcode = binary[pc];
        const instruction = z80Instructions[opcode];

        if (!instruction) {
            console.log(`Unknown opcode: 0x${opcode.toString(16).toUpperCase()} at address 0x${pc.toString(16).toUpperCase()}`);
            pc += 1;
            continue;
        }

        const { mnemonic, size } = instruction;
        let assemblyLine = mnemonic;

        // Handle any additional bytes (operands)
        let operands = [];
        if (size > 1) {
            operands = binary.slice(pc + 1, pc + size);
            const operandHex = Array.from(operands).map(byte => `0x${byte.toString(16).toUpperCase()}`);
            assemblyLine += operandHex.join(', ');
        }

        console.log(`0x${pc.toString(16).toUpperCase()}: ${assemblyLine}`);

        if (opcode === 0xC3) { // JP (unconditional jump)
            const jumpAddress = operands[1] << 8 | operands[0];
            disassembleZ80Recursive(binary, jumpAddress); // Follow the jump
            return; // Stop linear disassembly and follow the jump
        }

        pc += size;
    }
}

disassembleZ80Recursive(binaryData);
```

---
## Step 3 - Decoding Instructions
Once instruction boundaries are identified, the disassembler decodes the opcode and operands. 
   
Each opcode corresponds to a specific operation (like `MOV`, `ADD`, or `JMP`), and the operands specify the data or addresses involved in the operation.

The disassembler uses a CPU-specific instruction set to interpret the opcodes and operands. 

For example, the x86 architecture has a different set of opcodes compared to ARM, and the disassembler must know the specific architecture to decode the instructions correctly.

---
## Step 4 - Mapping Addresses to Symbols
If available, the disassembler will map memory addresses to symbolic names (e.g., function names, variable names). 
   
This process involves cross-referencing the binary with debugging symbols (if they exist) or creating symbols based on patterns identified in the code. 
   
### Function Signatures
For example, common library functions may be recognized by their binary signature, even if symbols are stripped from the binary:

Disassemblers can use known function signatures (e.g., common library functions) to identify parts of the code. For instance, a call to a `printf` function might help the disassembler understand that the following bytes are format strings or arguments.


---
## Step 5 - Handling Data Sections
In addition to code, binaries contain data sections that store constants, strings, and other non-executable data. 
   
The disassembler must distinguish between code and data sections to avoid misinterpreting data as code. This distinction is critical in producing accurate assembly output.

Advanced disassemblers use heuristics and pattern matching to identify common data structures, such as strings, arrays, and tables, ensuring they are correctly interpreted.

### Heuristics in Disassembly
Heuristics in disassembly refer to the use of rule-based methods and educated guesses to make decisions when the disassembler is not entirely sure about how to interpret a segment of code or data. These heuristics help in:
- **Differentiating Code and Data**: In many binaries, code and data are intermixed. Heuristics help determine whether a sequence of bytes represents executable instructions or data. For example, if a segment of bytes doesn’t match known instruction patterns, it might be data.
- **Identifying Data Structures**: Heuristics can analyze patterns to identify common data structures, like strings, arrays, or tables, by looking for sequences of bytes that match known characteristics (e.g., null-terminated strings).

### Pattern Matching for Data Structures

#### Strings
- **Null-Terminated Strings**: Many disassemblers use pattern matching to identify strings by searching for sequences of printable ASCII characters followed by a null byte (`0x00`). For example, the bytes `0x48 0x65 0x6C 0x6C 0x6F 0x00` can be recognized as the string `"Hello"`.
- **Length-Prefixed Strings**: Some strings are stored with a length prefix (e.g., Pascal strings). Disassemblers can be programmed to recognize a common length prefix followed by a sequence of characters.

#### Arrays
- **Homogeneous Arrays**: An array of integers or floats often appears as a sequence of similarly sized elements. Disassemblers can identify these patterns by looking for repeated sequences of bytes with the same size and spacing.
- **Pattern Recognition**: In more advanced scenarios, disassemblers might recognize arrays by the access patterns in the code (e.g., loops that iterate over a sequence of memory addresses).

#### Tables
- **Jump Tables**: In compiled code, jump tables are often used for switch-case statements. These are sequences of addresses that the program jumps to based on a value. Disassemblers can identify these by looking for tables of addresses and recognizing the code that accesses them.
- **Function Pointer Tables**: Similar to jump tables, function pointer tables are arrays of addresses where each entry points to a function. These are common in object-oriented code (e.g., virtual function tables in C++).
  
#### Type Propagation
Some disassemblers use type propagation, where they infer the type of variables and structures based on how they are used. For example, if a certain memory address is accessed as a string in one part of the code, the disassembler might propagate this type information to other accesses of the same address.

### Data Structure Signatures
Certain data structures have known memory layouts (e.g., a struct with specific offsets for fields). Disassemblers use these patterns to recognize and label data structures in the binary.

### User Interaction and Annotations
- **User-Assisted Analysis**: Advanced disassemblers like Ghidra and IDA Pro allow users to interactively mark sections of the binary as code or data. They can also allow users to define custom data structures and apply them to memory regions.
- **Annotations and Comments**: Users can add comments and annotations that help guide the disassembler in future analysis. For example, if a user recognizes a specific data structure, they can annotate it, and the disassembler may use this information to identify similar structures elsewhere in the binary.

### Pattern Recognition with AI
Some cutting-edge disassemblers are beginning to use machine learning models to recognize patterns in binaries. These models can be trained on large datasets of known binaries to improve their ability to recognize data structures and code patterns, even in obfuscated or packed executables.


---
## Step 6 - Reconstructing Control Flow
Disassemblers often reconstruct the program's control flow to present a clearer picture of the program’s logic. 

This involves analyzing jump and call instructions to determine how different parts of the program interact. 

Some disassemblers can generate control flow graphs (CFGs) that visually represent the paths through the code.

### Control Flow Analysis
Disassemblers analyze the control flow of the program to understand how different parts of the code are executed. By understanding loops, conditional branches, and jumps, they can predict which areas of the code are likely data and which are executable code.

## Step 7 - Generating Human-Readable Assembly Code
The final step is to output the assembly code in a human-readable format. 

The disassembler converts the decoded instructions, mapped symbols, and reconstructed control flow into assembly code that closely mirrors the original source code (if it were written in assembly). 

This code can then be reviewed, analyzed, or modified by the user.

---
# Types of Disassemblers

There are different types of disassemblers, each with its specific use cases and features:

- **Static Disassemblers**: These analyze the binary without executing it. They are faster and safer since they don’t run potentially harmful code. However, static disassemblers might struggle with dynamic features of the code, such as self-modifying code or obfuscation techniques.

- **Dynamic Disassemblers**: These work alongside a debugger, disassembling code as it is executed. This approach allows the disassembler to handle dynamic code and provides insights into runtime behavior, like changes in control flow and data. However, it requires running the program, which might be risky if the program is malicious.

- **Interactive Disassemblers**: Tools like Ghidra and IDA Pro fall into this category. They combine static and dynamic disassembly features, allowing users to interactively explore the code, modify the disassembly, and even execute the code in a controlled environment.

---
# Challenges in Disassembly

While disassemblers are powerful tools, they face several challenges:

- **Obfuscation and Anti-Reverse Engineering Techniques**: Many programs use obfuscation techniques to make disassembly difficult. This can include instruction reordering, encrypted code sections, and junk code insertion, all of which confuse linear disassembly methods.

- **Instruction Ambiguity**: In some cases, it’s challenging to distinguish between code and data, especially when a binary intermixes the two. This can lead to incorrect disassembly if the wrong bytes are interpreted as instructions.

- **Lack of Symbols and Debugging Information**: When binaries are stripped of symbols and debugging information, the disassembler must rely on pattern recognition and heuristics to name functions and variables. This can result in less meaningful disassembly output, making analysis more difficult.

