---
layout: post
tags: 
- introduction
- tutorial
- learningpath
- ghidra
- decompiling
title: Introduction to Decompiling C++ with Ghidra
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/4v8WkHmSFUU/sddefault.jpg
permalink: /intro-decompiling-with-ghidra
breadcrumbs:
  - name: Home
    url: /
  - name: Ghidra
    url: /ghidra
  - name: Introduction to Decompiling C++ with Ghidra
    url: #
recommend: 
- tutorial
- tutorials
- ghidra
editlink: /articles/Ghidra/GhidraDecompilingIntroduction.md
videocarousel:
  - title: Part 1
    image: https://i.ytimg.com/vi/4v8WkHmSFUU/sddefault.jpg
    youtube: '4v8WkHmSFUU'
  - title: Part 2
    image: https://i.ytimg.com/vi/OlWm9Oh9bj8/sddefault.jpg
    youtube: 'OlWm9Oh9bj8'
  - title: Part 3
    image: https://i.ytimg.com/vi/Y-BhEfbg7C4/sddefault.jpg
    youtube: 'Y-BhEfbg7C4'
---

This tutorial will guide you through the basics of decompiling a c++ executable, from setup all the way to reversing c++ classes. The video tutorial is created by James Tate over on his excellent youtube channel, it is highly recommended you subscribe here: [James Tate - YouTube](https://www.youtube.com/channel/UCwSxJ5kXVFPWi6fYuj6o78w)

# Download & Run Ghidra
You can download Ghidra from the official site: [Ghidra](https://ghidra-sre.org/)

You will also need a Java Development Kit (JDK) which you can download from the AdoptOpenDSK official site: [AdoptOpenJDK - Open source, prebuilt OpenJDK binaries](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot)

You can now run Ghidra from the extracted folder by running the main script 
```bash
./ghidraRun
```
It may ask you for your JDK path, enter where you installed your OpenJDK [^1].

# Create a New project
First of all you need a project in order to start reverse engineering a binary executable. To do this use `File -> New project`.

# Import your binary executable
To follow along in this tutorial you should compile the sample code provided:
[GitHub - james-tate/ghidraExampleSource](https://github.com/james-tate/ghidraExampleSource)

You can use the compiler of your choice as long as it supports C++, so if you have a special compiler for PS2/Dreamcast/Xbox/Gamecube etc then feel free to use that but bear in mind importing executables for those systems will require a 3rd party plugin known as a `loader`.

You can import a file into Ghidra very simply with:
```File -> Import File```
Find your executable file that you build with your c++ compiler.

This will open the import dialog, in this tutorial we also want to load in the external libraries, this makes it easier to reverse engineer as you can swap between the main executable and the libraries really easily in Ghidra [^2].

To do this click options and set the Library Paths in the dialog.

It will now start importing the file and ask you if you want to analyse it, select yes and keep the default settings.

# How to find the main function
If you have symbols you can use the `Go To..` menu and type main but if you don't have symbols then we will need to find it.

To find it go to the `.text` section and it will take you to the `entry` function. If you are using the same example as the video tutorial then you will have a `__libc_start_main` function and its first parameter is a function pointer to the `main` function.

If you are using a different executable or compiled with a different compiler this can be setup differently, but entry will call main somewhere so it may require a bit of debugging with a debugger such as `gdb` or an emulators built-in debugger.

When you have found what you believe to be the main method, right click on the auto generated function name and select rename function.

# References
[^1]: [Software Reverse Engineering with Ghidra -- Setup and Installation - YouTube](https://www.youtube.com/watch?v=4v8WkHmSFUU)
[^2]: [Software Reverse Engineering with Ghidra -- How to import files and get started - YouTube](https://www.youtube.com/watch?v=OlWm9Oh9bj8)
[^3]: [Software Reverse Engineering with Ghidra -- Creating Structures - YouTube](https://www.youtube.com/watch?v=Y-BhEfbg7C4)

