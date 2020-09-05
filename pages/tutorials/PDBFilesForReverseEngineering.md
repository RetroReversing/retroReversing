---
layout: post
tags: 
- tutorial
- introduction
- tools
- xbox
- pc
title: Using PDB files for Reverse Engineering
image: /public/images/tools/Using PDB files for Reversing.jpg
twitterimage: http://www.retroreversing.com/public/images/tools/Using PDB files for Reversing.jpg
thumbnail: /public/consoles/Tools.jpg
permalink: /PDBFileReversing
breadcrumbs:
  - name: Home
    url: /
  - name: Tutorials
    url: /tutorials
  - name: Using PDB files for Reverse Engineering
    url: #
recommend: tutorials
editlink: /tutorials/PDBFilesForReverseEngineering.md
---

If you are very lucky indeed then the game you want to reverse engineer comes with full debug symbols in the form of a Program Database file or PDB for short.

These files tend to be created by Microsoft Visual C++ compilers and contain all the debug symbol information for an executable (function names, class names etc) [^1].

This means the PDB files are much more likely for platforms such as the PC and Xbox.

They are a lot harder to find than executables with symbols embedded inside as it is much easier for developers to spot the file on a disc than to check if an executable is suspiciously large.

This means that the number of retail games that come with full PDB files is very low indeed, almost like a needle in a haystack.

PDB files pretty much takes away the bulk of the work of a reversing project, as you no longer need to find out what to name every function and it is easy to see where to start.

But the question is, how do we use these binary blobs of debug data to give our executables back their function names? That is exactly what this post will cover.

---
# Displaying the symbols located in a PDB file
PDB files are not like GCC .map or .sym files, they are n to plain text, they are a custom binary format.

So in order to display the debug information that is contained in a PDB file you can use a tool like radare2, or more specifically rabin2 which is a tool that comes as part of standard radare2.

To use rabin2 to display the symbol information to the command line you can run the following command:
```bash
rabin2 -P YourFile.pdb
```

Also if it is a fairly standard executable that you are reversing you can check to see if radare2 can download a pdb file for your executable from the official Microsoft symbol server like so:
```bash
rabin2 -PP YoutFile.exe
```

---
# Using PDB files with Binary Ninja
Binary Ninja makes it almost too easy, just open your game executable and perform analysis like usual. Now go to the `Tools` menu and select `PDB` -> `Set Symbol Path`.

This will open a file dialog, use it to find where you have your .pdb file. Now if you are lucky and the pub file matches the executable that you have analysed you should start seeing function names being populated in the interface!

---
# Using PDB files with Ghidra
To load a pdb file, first open the PE game executable and run analysis. Next just Go to the menu option File -> Load PDB File. 

If the executable is in the PE format and has been compiled with debug support Ghidra will start to populate the function names correctly.

Note that there is also a Download PDB file but it is really only for standard Microsoft symbols.

---
# Using PDB files in radare2
First of all load the binary into radare2 but **DO NOT** run analysis yet!
Instead you need to run `idp` to load the pdb file if its in the same directory as the executable and then run analize as normal.

---
# References
[^1]: https://reverseengineering.stackexchange.com/questions/17298/pdb-file-vs-sdb-file
