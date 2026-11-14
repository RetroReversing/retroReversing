---
layout: post
tags:
- n64
- reverseengineering
- sourcecode
title: Why a Byte-Matching Decompilation Can Still Be Wrong
category: n64
permalink: /byte-matching-decompilation-accuracy
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Why a Byte-Matching Decompilation Can Still Be Wrong
    url: '#'
editlink: consoles/n64/ByteMatchingDecompilationAccuracy.md
updatedAt: '2026-11-14'
excerpt: 'Matching C rebuilds the original bytes, but it can still behave differently on another compiler. Real examples from a V-Rally N64 port and Super Mario 64, and how to catch them.'
---
# Why a Byte-Matching Decompilation Can Still Be Wrong
A **matching decompilation** is C source that, built with the game's original compiler and flags, produces exactly the same machine code as the retail game.
Projects such as the Super Mario 64 and Ocarina of Time decompilations use this as their definition of done, and tools like decompdecomp only count a function as finished when its bytes are identical.

**Identical bytes prove less than they seem to.**
They prove that one specific compiler turns this C into the original instructions.
They do not prove that the C means the same thing in the C language, or to any other compiler.
The gap only shows up when the code is built some other way: for a PC port, a WebAssembly build, a modern compiler, or a static recompilation.

This page walks through a real case where every car in a port of **V-Rally** started each race facing backwards, even though all the C involved matched byte for byte.
It then collects the other bugs of the same kind found in that port and in Super Mario 64, and covers ways to catch them.

---
## Glossary of Key Terms
If you are new to N64 decompilation, these terms appear throughout the page:
* <a id="glossary-matching"></a>**Matching decompilation** - C that rebuilds the original code byte for byte with the original compiler.
* <a id="glossary-abi"></a>**ABI** - Application Binary Interface: the rules for which registers and stack slots carry function arguments and results.
* <a id="glossary-o32"></a>**o32** - The 32-bit MIPS ABI used by N64 games: arguments in `$a0`-`$a3`, results in `$v0` (and `$v1`, or `$f0` for floats).
* <a id="glossary-v0"></a>**$v0** - MIPS register 2, which holds a function's return value when it returns.
* <a id="glossary-port"></a>**Port** - The game's C built for another machine, with replacements for the console's libraries and hardware.
* <a id="glossary-recomp"></a>**Static recompilation** - Translating the original machine code itself into C, instruction by instruction, as N64Recomp does.

---
# What Does Byte-Matching Actually Prove?
Matching proves that **the original compiler** produced the same bytes from your C.
That compiler fills in everything the C leaves unsaid, and it does so deterministically.

The C can therefore leave gaps that the original compiler happens to fill correctly:
* **Registers left over from a call** - If a function ends right after calling another one, the callee's result is still in [`$v0`](#glossary-v0). A caller can use it even if the C declares the function `void` and never returns anything.
* **Arguments in registers** - Under [o32](#glossary-o32) the first four arguments live in `$a0`-`$a3`. A function declared with no parameters can still pass `$a0` along to the next call, because nothing overwrote it.
* **Prototypes that disagree with the definition** - Old compilers accept a call through a wrong or missing prototype. On MIPS the arguments land in the same registers either way.
* **Memory layout** - Big-endian byte order, bitfield order, struct sizes and the order of locals on the stack are all fixed by that one compiler and CPU.
* **Data that never came from the C** - A jump table or constant that is still extracted data from the ROM is checked as bytes, not as what the C says it should be.

None of these change the bytes the original compiler emits, so a byte comparison can never see them.
They break as soon as a different compiler, ABI or memory model takes over.

---
# Case Study - V-Rally Cars That Started Backwards
V-Rally Edition 99 is a 1999 rally game developed by Eden Studios and published by Infogrames for the Nintendo 64.
The RetroReversing fork of [decompdecomp](https://github.com/RetroReversing/decompdecomp) builds a matching N64 project's C as a WebAssembly port, which runs natively or in a browser with a software renderer.

In that port, every car started the race facing the wrong way.
The game showed its red wrong-way cross on the start line, and the cars had to turn round before racing.
The real game, on a console or an emulator, starts them facing down the track.

{% capture vrally_start_figures %}
{% include article-figure.html src="/public/images/n64/byte-matching/v-rally-port-wrong-way-start.webp" alt="V-Rally WebAssembly port at the start of a race with the red wrong-way cross showing" width="320" height="240" title="Before the fix" caption="The port's start line: the red cross is the game's wrong-way warning, because every car was turned 180 degrees." %}
{% include article-figure.html src="/public/images/n64/byte-matching/v-rally-port-fixed-start.webp" alt="V-Rally WebAssembly port at the start of a race with the cars facing the START banner" width="320" height="240" title="After the fix" caption="The same port after the fix: the cars face the START banner, as on the console." %}
{% endcapture %}
{% include article-gallery.html figures=vrally_start_figures %}

## Finding the Difference with a Reversing Emulator
<div class="emoji">🔎</div>
The investigation ran the original ROM in [mupenRE](https://github.com/RetroReversing/mupen64plus-core), RetroReversing's fork of the mupen64plus core with [libRetroReversing](https://github.com/RetroReversing/libRetroReversing) built in, from a headless frontend.
The frontend replayed the same scripted controller input as the port and dumped RDRAM at chosen moments.
The port wrote its memory in the same layout, so the two could be compared word by word.

The comparison showed what each tool established:
* **Memory dumps** - Every car had the same start position in both, but each car's 3x3 orientation matrix began with `-1.0` on the console and `+1.0` in the port, a 180 degree turn around the vertical axis.
* **Write breakpoints** - A watch on the matrix showed it was converted every frame from a 12-bit fixed-point copy, which had been built once by a 3x3 matrix multiply.
* **Execution breakpoints** - A breakpoint on the Euler-angles-to-matrix function logged its input on the console as `(0, 0x800, 0x1000)`. With 4096 units to a full turn, `0x800` is a heading of 180 degrees.

Following that heading back led to a small helper that works out each car's starting heading from the track's path points.

---
## The C That Matched
The helper's matched C ends by calling a wrapper around an `atan2` routine, and it is declared `void`.
Its caller, however, uses its result.
A simplified version looks like this:

{% capture vrally_c_tab %}
```c
void angle_atan2_thunk(void);       /* matched C: ends by calling atan2 */

void start_heading(s32 *pos, Path *path) {
    /* ... work out the next two path points ... */
    angle_atan2_thunk(next->x - here->x, next->z - here->z);
    /* no return statement */
}

/* the caller, in another file, with no prototype in scope */
s32 start_heading();
heading = start_heading(pos, path);
```
{% endcapture %}

{% capture vrally_asm_tab %}
```nasm
; the end of the start-heading helper
jal   angle_atan2_thunk     ; the wrapper ends by calling atan2, which leaves the angle in $v0
subu  $a1, $v0, $a1         ; (delay slot)
lw    $ra, 0x10($sp)        ; nothing touches $v0 after the call...
jr    $ra                   ; ...so the angle is still there when this returns
addiu $sp, $sp, 0x18
```
{% endcapture %}

{% capture vrally_tabs %}
{% include rr-tab.html title="Matched C (simplified)" default=true content=vrally_c_tab %}
{% include rr-tab.html title="Original MIPS" content=vrally_asm_tab %}
{% endcapture %}

{% include rr-tabs.html group="vrally-heading" tabs=vrally_tabs %}

On the N64 this is harmless.
`atan2` returns the heading in `$v0`.
The wrapper returns without touching `$v0`, and so does the helper.
The caller reads `$v0` and gets the correct heading.

The original compiler happened to produce the right instructions from C that, in the C language, returns nothing.
The C matches perfectly.
It is also, strictly, wrong: calling a function through a declaration whose return type disagrees with its definition is undefined behaviour in C, as is using the value of a function that returned none [^1].

---
## Why the Port Got It Wrong
WebAssembly has no shared result register.
To keep this kind of matched C working, the decompdecomp port gives `$v0` a word in memory.
Its rules were:
* **A function that ends by calling something that returns a value** stores that value in the `$v0` word.
* **Any other void function** stores 0 there.

The wrapper followed the first rule and stored the heading.
The helper ends by calling the wrapper, which is itself void, so it followed the second rule and stored 0 over the heading.
Every car got heading 0, which on this track points backwards.

The fix leaves the `$v0` word alone when a void function ends by calling another void function, because on MIPS that callee's leftover value is exactly what the caller sees [^2].

---
# Other Examples from the Same Port
Getting V-Rally's matched C to run as a WebAssembly build turned up a series of bugs of the same shape.
Each function involved matched byte for byte with KMC GCC 2.7.2, and each one behaved differently once compiled with clang for another target:

Example | What the matched C relied on | What happened in the port
---|---|---
A list helper declared `void` | Its caller took the new list node from `$v0` | The HUD wrote its texture through address `0x0C` and the race stopped on its first frame
A strip-drawing routine | Called a fixed 17-argument texture loader through a variadic prototype `f(void *, u32, s32, s32, ...)` | 13 arguments went into a varargs buffer the loader never read, so the intro picture's strips loaded as 0 by 0 pixels
A text-table loader | Declared the game's own variadic `sprintf` with a fixed three-argument prototype | A texture pack's name came out wrong, its size became 0 and the heap stopped the game
A function called through a pointer | Declared no parameters but passed `$a0` on to its next call | The text table came from a stale register value
A loader taking a struct by value | The C declared the struct as 640 bytes, but the caller passed 708 and the loader read past 640 from the stack | The last texture name was cut short
Road texture coordinates | `u8` in the caller and `s32` in the callee, which MIPS registers hide | Widened with their sign, 255 became -1 and the road rendered as a checkerboard
A track flags word using bitfields | The MIPS compiler gives the first bitfield the top bits | The port read the wrong bit, ran off the end of a segment table and corrupted the next one
`v0 = v & 0xFFFF` | A 32-bit load, then a mask | A newer optimiser turned it into a 16-bit load of the low half, which with big-endian memory is the wrong half: vertex indices came back 0
The game's own `__fixdfdi` and `__floatdidf` | Signed double-to-64-bit conversions, in the game's own code | The port's replacements were unsigned, so -1.5 became 0 and -1 became about 1.8e19

The port's documentation also records cases found while bringing the game up [^3]:
* **A switch statement** - Its case labels disagreed with its jump table and still matched, because the jump table was still the original data from the ROM rather than generated from the C.
* **Locals reached through the stack layout** - C that worked only because the original compiler put two locals next to each other.
* **Functions the split had left as data** - Code the project had never identified as functions, so there was no C for the port to compile.

The fixes for all of these are in decompdecomp's WebAssembly build pipeline, each with a regression test describing the case [^4].

---
# Examples from Super Mario 64
The [Super Mario 64 decompilation](https://github.com/n64decomp/sm64) is open about the same problem.
Its matching build keeps several pieces of undefined behaviour, because removing them would change the bytes.
A `NON_MATCHING` build defines `AVOID_UB`, which swaps in correct C wherever the matching version depends on IDO's behaviour [^5].

Examples visible in its source include:
* **Missing return values** - Two collision-detection functions in `object_collision.c` are declared to return `s32` but fall off the end on one path. The source marks them `//! no return value` and adds `return 0;` only under `AVOID_UB` [^6].
* **Bad declarations** - `src/goddard/bad_declarations.h` declares some functions without their real parameters. Some calls only match when compiled with these wrong prototypes, so the header uses them unless `AVOID_UB` is set [^7].
* **Arrays that overlap** - The cosine table is the second part of the sine table. The matching build declares it as a separate array, and reading past the end of the sine table into it is undefined behaviour that modern compilers can optimise against. With `AVOID_UB` it becomes a pointer into the sine table [^8].

The project also checks every file with the host's GCC (`-fsyntax-only -Wall -Wextra`, with `AVOID_UB` defined) alongside the IDO build, so many of these gaps are at least visible to the developers [^9].

---
# Why It Happens
The common thread is that a matching decompilation is judged by one compiler.
Everything that compiler decides deterministically is free for the C to get wrong.

The examples above fall into a few groups:
* **ABI leftovers** - Results left in `$v0`, arguments left in `$a0`-`$a3`, and values that keep their bits only because MIPS registers are 32 bits wide whatever the declared type.
* **Prototypes** - Missing, wrong, or variadic-versus-fixed declarations. Old C compilers accept them, and MIPS passes the arguments in the same registers anyway.
* **Implementation-defined layout** - Byte order, bitfield order, struct padding and sizes, and stack placement.
* **Data outside the C** - Jump tables and constant pools still linked from extracted ROM data, so the C that should describe them is never checked.
* **Runtime outside the decompilation** - Library routines a port replaces, such as libultra or compiler helpers, which have to match the game's versions exactly, including their sign handling.

Decompiled code is especially prone to these because it is written backwards from the assembly.
A decompiler or a person can write any C that reproduces the instructions, and the shortest matching C is often one that leans on these details.

---
# How to Catch Behaviour Differences
Byte-matching is still the right test for a decompilation.
It just needs to be paired with checks that look at behaviour.

Useful techniques, roughly in order of cost:
* **Compile with a second, modern compiler** - Run every file through GCC or clang with warnings as errors for implicit declarations, missing returns and prototype mismatches. SM64's syntax check is a good template [^9].
* **Keep one prototype per function** - Put each function's real signature in a shared header so that every call site agrees with the definition.
* **Mark known undefined behaviour** - Use an `AVOID_UB`-style switch so a port or non-matching build gets correct C while the matching build stays byte-identical [^5].
* **Build a port as a test** - A port, a WebAssembly build or a non-matching native build exercises the C under a different compiler and ABI. Every bug on this page came from doing that.
* **Compare against the original running** - Run the ROM in an emulator with scripted input and compare memory with the port at the same moment. Use write breakpoints to find which code produced a difference, and execution breakpoints to see a function's real arguments.
* **Compare against a static recompilation** - N64Recomp translates the original instructions to C, so recompiled code behaves like the original by construction. Running the same recorded calls through the recompiled function and the decompiled one isolates a difference to a single function.

The RetroReversing guide to testing recompilations covers comparing behaviour at subsystem boundaries with reference emulators, which applies equally to decompilation ports:

{% include_cached link-to-other-post.html post="/testing-an-n64-recomp" description="Diagnose gameplay differences with subsystem traces, reference emulators and reproducible input." %}

If you are starting a matching decompilation of your own, the [AI-assisted N64 decompilation tutorial](/ai-assisted-n64-decompilation) walks through decompdecomp's workflow on V-Rally, from importing the ROM to verified matches.
Treat those verified matches as the first test, not the last.

---
# References
[^1]: ISO/IEC 9899:1999 (C99), section 6.5.2.2 paragraph 9 (a call through a function type incompatible with the definition) and section 6.9.1 paragraph 12 (reaching the closing brace of a function whose value the caller uses); see the [C99 committee draft N1256](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf)
[^2]: [decompdecomp PR #1198 - a void function ending in a void call keeps the $v0 its callee left](https://github.com/RetroReversing/decompdecomp/pull/1198)
[^3]: [decompdecomp docs/PORTING.md - Port export and the WebAssembly build](https://github.com/RetroReversing/decompdecomp/blob/main/docs/PORTING.md)
[^4]: [decompdecomp tests/test_port_wasm.py and tests/test_n64_port_host.py](https://github.com/RetroReversing/decompdecomp/tree/main/tests)
[^5]: [Super Mario 64 decompilation Makefile - NON_MATCHING defines AVOID_UB](https://github.com/n64decomp/sm64/blob/master/Makefile)
[^6]: [Super Mario 64 decompilation src/game/object_collision.c](https://github.com/n64decomp/sm64/blob/master/src/game/object_collision.c)
[^7]: [Super Mario 64 decompilation src/goddard/bad_declarations.h](https://github.com/n64decomp/sm64/blob/master/src/goddard/bad_declarations.h)
[^8]: [Super Mario 64 decompilation src/engine/math_util.h](https://github.com/n64decomp/sm64/blob/master/src/engine/math_util.h)
[^9]: [Super Mario 64 decompilation Makefile - CC_CHECK host compiler syntax check](https://github.com/n64decomp/sm64/blob/master/Makefile)
