---
layout: post
tags: 
- introduction
- tutorial
- n64
- ghidra
title: N64 Decompiling with Ghidra
category: n64
image: https://i.ytimg.com/vi/3d3a39LuCwc/hqdefault.jpg
permalink: /n64-decompiling
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Decompiling Nintendo 64 Games
    url: #
recommend: 
- n64
- tutorial
- tutorials
- ghidra
editlink: /tools/Ghidra/GhidraN64.md
updatedAt: '2026-10-22'
youtube: "3d3a39LuCwc"
---

# Importing a Nintendo 64 ROM

## Download and Install Ghidra
Before following the steps on this post please make sure you have a working Ghidra environment setup.

So you should be able to run the script `ghidraRun` (contains .bat on windows) and it should start up Ghidra.

## Download the Loader
Ghidra doesn't support Nintendo 64 ROMS out of the box, presumably because not a lot of malware was written for the N64 and thus the NSA would never need one.

Luckily a user known as `Warranty Voider` has created a loader module which enables us to import N64 ROMS like any other executable [^1].

You can find it here:
[GitHub - zeroKilo/N64LoaderWV: Ghidra Loader Module for N64 ROMs](https://github.com/zeroKilo/N64LoaderWV)

On the GitHub page you need to either select `clone` or `Download as zip`, we would suggest just downloading the zip for now.

You only need to clone if you are planning on contributing, but even then you would probably fork first and then clone.

## Import a ROM file
Find a .z64 file and import it into the project, it should come up as "N64 Loader by Warranty Voider", but if it comes up as "binary" then it has not been installed correctly.

If the loader does not appear, check that the extension was built for your installed Ghidra version and that Ghidra is using its required JDK. The loader README notes that Ghidra 12.1 requires JDK 21; an older JDK 12 instruction will not work for that release [^3].

---
## Find Code Loaded After the ROM Import
An imported ROM is only the starting image. Ghidra can follow direct references in the mapped code, but it cannot infer every function that a game later decompresses, relocates, or loads as an overlay. If a function runs in RAM but does not appear at that address in the imported program, first trace the game's load or DMA operation. Record the ROM source, decompressed output if any, RAM destination, and the game state that triggers the load [^3].

The [N64LoaderWV README](https://github.com/zeroKilo/N64LoaderWV) documents an `RDRAM dump file` import option. After triggering the code in an emulator, capture a complete 4 MiB base-memory or 8 MiB Expansion Pak RDRAM dump and import it with that option. Inspect the new memory blocks and disassemble the loaded region at its runtime address. The dump must be exactly one of those sizes; a small extracted overlay file is not a substitute for this loader option [^3].

A dump records one moment in execution. When two overlays use the same RAM address at different times, capture them separately and keep their symbols tied to their overlay and game revision. Compare the loaded bytes and relocation evidence with the original ROM before transferring names into the main project. The [N64 reversing introduction](/N64Reversing#connect-the-runtime-function-to-the-rom) explains how to connect a RAM function back to its cartridge range.

---
# Detecting N64 API signatures
After importing the game into Ghidra you will notice that all the functions have default names that start with: `FUN_`. 

These names are not very helpful and we know that the games were compiled with a version of the Official Nintendo 64 SDK, so if we could find those libraries in the binary then we can give them useful names and help start solving the puzzle.

[Warranty Voider](https://www.youtube.com/watch?v=fhI3Vpw7FVk) demonstrates using signature files with N64LoaderWV. The walkthrough complements the written steps for recognising SDK functions in an imported ROM.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fhI3Vpw7FVk" title="N64LoaderWV - How to use signature files" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Downloading pre-generated Signature files
Over on AssemblerGames there is a pack of `Signature Files` for N64 SDK libraries. You can think of these as a sort of regular expression for compiled function code. It is not always accurate but it is a great start, you can download them from assembler games 
[Here](https://web.archive.org/web/20191111210232/https://assemblergames.com/threads/reverse-engineering-n64-signature-files-for-ida-pro-radare2.70138/)

## Using IDA Pro's Signature files with ApplySig
After downloading you will notice that these were created for the competing Disassembler called `IDA Pro`. So in order to open them in Ghidra we need a plugin, the plugin we are looking for is called `ApplySig.py`.

However currently the plugin `ApplySig.py` doesn't work with the N64 Loader due to the addresses as it gives the following error:
```
java.lang.IllegalArgumentException: java.lang.IllegalArgumentException: Invalid address 0x80000450L
```

In order to get ApplySig to work you need a patch to ApplySig from user `celophi ` which is available here: [Update ApplySig.py by celophi · Pull Request #7 · NWMonster/ApplySig · GitHub](https://github.com/NWMonster/ApplySig/pull/7)

To run it you need to put the script in your home/ghidra_scripts folder and run the "Script Manager" tool, select the checkbox beside `ApplySig` then click the green run icon.

It will then ask for the *.sig file to open, make sure to select one of the sig files that you downloaded earlier [^2].

---
# Importing N64 Types
If you have a version of the N64 SDK then you can use the `Parse C Source` feature of Ghidra to automatically import structs/classes/defines etc from C Header files. This can save a lot of time from creating them all manually.

If there are any errors with the parsing of the C files then you will need to locate the generated file called: `CParserPlugin.out`. Normally it is generated in the current users home directory so you can run:
```
cat ~/CParserPlugin.out
```
---
# References
[^1]: [N64 ROM Decompiling With Ghidra - N64LoaderWV - YouTube](https://www.youtube.com/watch?v=3d3a39LuCwc)
[^2]: [Assembler Games N64 Signatures (Wayback Machine)](https://web.archive.org/web/20191111210232/https://assemblergames.com/threads/reverse-engineering-n64-signature-files-for-ida-pro-radare2.70138/)
[^3]: [N64LoaderWV README](https://github.com/zeroKilo/N64LoaderWV), ROM import scope, runtime memory dump option and size requirements, and current JDK guidance.


