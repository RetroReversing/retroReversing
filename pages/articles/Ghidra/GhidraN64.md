---
layout: post
tags: 
- introduction
- tutorial
- n64
- ghidra
- decompiling
title: N64 Decompiling with Ghidra
thumbnail: /public/consoles/Nintendo 64.png
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
editlink: /articles/Ghidra/GhidraN64.md
youtube: "3d3a39LuCwc"
---


# Download the Loader
[GitHub - zeroKilo/N64LoaderWV: Ghidra Loader Module for N64 ROMs](https://github.com/zeroKilo/N64LoaderWV)
On the GitHub page you need to either select `clone` or `Download as zip`. 

You only need to clone if you are planning on contributing, but even then you would probably fork first and then clone.

# Import a rom file
Find a .z64 file and import it into the project, it should come up as "N64 Loader by Warranty Voider", but if it comes up as "binary" then it has not been installed correctly.

If the N64 Loader option doesn't appear for you then you probably don't have JDK 12 or higher, you can either install JDK12 or build the plugin yourself on jdk11 which is what I did and works just fine :)

---
# Detecting N64 API signatures
Currently the plugin `ApplySig.py` doesn't work with the N64 Loader due to the addresses as it gives the following error:
```
java.lang.IllegalArgumentException: java.lang.IllegalArgumentException: Invalid address 0x80000450L
```

In order to get ApplySig to work you need a patch to ApplySig from user `celophi ` which is available here: [Update ApplySig.py by celophi · Pull Request #7 · NWMonster/ApplySig · GitHub](https://github.com/NWMonster/ApplySig/pull/7)

To run it you need to put the script in your home/ghidra_scripts folder and run the "Script Manager" tool, select the checkbox beside `ApplySig` then click the green run icon.

It will then ask for the *.sig file to open, you can find a few here: https://assemblergames.com/threads/reverse-engineering-n64-signature-files-for-ida-pro-radare2.70138/ 

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


