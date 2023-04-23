---
layout: post
tags: 
- introduction
- ghidra
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
redirect_from:
 - /ghidra
recommend: 
- introduction
- ghidra
editlink: /articles/Ghidra/GhidraDecompilingIntroduction.md
youtube: "4v8WkHmSFUU?list=PLRAe18TJ_NTE9cr18OPphn82WS8gVv-te"
updatedAt: '2019-09-01'
---

# Introduction

This tutorial series will guide you through the basics of decompiling a C++ executable, from setup all the way to reversing C++ classes. The video tutorial is created by James Tate over on his excellent YouTube channel, and it is highly recommended that you subscribe here: [James Tate - YouTube](https://www.youtube.com/channel/UCwSxJ5kXVFPWi6fYuj6o78w).

## Download and Run Ghidra

The first step, of course, is to download Ghidra if you haven't already, which you can do from the official site:

{% include link-to-other-site.html url="https://ghidra-sre.org/" description="Download Ghidra from the Official Site" image="[.jpg](https://ghidra-sre.org/images/GHIDRA_1.png)" title="Download Ghidra"  %}

At the time of writing this tutorial, the version of Ghidra was 10.2.3.

You will also need a Java Development Kit (JDK), which you can download from the **AdoptOpenSDK** official site: [AdoptOpenJDK - Open source, prebuilt OpenJDK binaries](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot).

You can now run Ghidra from the extracted folder by running the main script from bash (or double-clicking on it):

```bash
./ghidraRun
```
It may ask you for your JDK path. Enter where you installed your OpenJDK. [^1]

## Create a New Project

First of all, you need a project to start reverse-engineering a binary executable. To do this, use File -> New Project.

## Obtaining Your Binary Executable to Reverse

To follow along in this tutorial, you can either compile the sample code provided or download the pre-compiled executables. Both are available on James's GitHub repository: [GitHub - james-tate/ghidraExampleSource](https://github.com/james-tate/ghidraExampleSource).

Note that there are two pre-compiled executables in this repository: one is stripped (which means it doesn't have any debug symbols) and the other is standard.

You can use the compiler of your choice as long as it supports C++. So, if you have a special compiler for PS2/Dreamcast/Xbox/Gamecube, etc., feel free to use that. But bear in mind that importing executables for those systems will require a third-party plugin known as a `loader`.


## Import Your Binary Executable

You can import a file into Ghidra very simply with: `File -> Import File`. Find your executable file that you built with your C++ compiler.

This will open the import dialog. In this tutorial, we also want to load in the external libraries. This makes it easier to reverse engineer, as you can swap between the main executable and the libraries really easily in Ghidra. [^2]

To do this, click "Options" and set the Library Paths in the dialog.

It will now start importing the file and ask you if you want to analyze it. Select "Yes" and keep the default settings.

## How to Find the Main Function

If you have symbols, you can use the `Go To...` menu and type "main". But if you don't have symbols, then we will need to find it.

To find it, go to the `.text` section, and it will take you to the `entry` function. If you are using the same example as the video tutorial, then you will have a `__libc_start_main` function, and its first parameter is a function pointer to the `main` function.

If you are using a different executable or compiled with a different compiler, this can be set up differently. But `entry` will call `main` somewhere, so it may require a bit of debugging with a debugger such as `gdb` or an emulator's built-in debugger.

When you have found what you believe to be the main method, right-click on the auto-generated function name, and select "Rename Function".


---
# Using Structures in Ghidra
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-BhEfbg7C4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
In this section, we will learn how to use structures in Ghidra by applying them to data and navigating through the program using cross-references. We will also learn how to change the function signature to improve data presentation and how to create an array and apply it to a global offset [^3].

## Setting Up Structures in Ghidra

Before we can use structures in Ghidra, we need to set them up. To do this, we can follow these steps:

1. Open the program in Ghidra and go to the Data Type Manager.
2. Create a new structure and name it.
3. Add fields to the structure and set their data types and offsets.
4. Save the structure.

Once we have set up the structure, we can apply it to data by following these steps:

1. Highlight the data and right-click.
2. Choose "Data Type" and select the structure we created.
3. Click "Apply" to apply the structure to the data.

Note that if you get something similar to:
```
yourStructName.field0x4._0_1_
```
Then this means that at offset 0x4 in the struct we have an undefined field for the structure. 

## Navigating through the Program with Cross-References

To navigate through the program using cross-references, we can follow these steps:

1. Go to the listing view and look for the cross-references.
2. Click on the cross-reference to go directly to the function.
3. Look for the references to the global variable or structure and take note of their locations.

## Changing Function Signatures

To change the function signature in Ghidra, we can follow these steps:

1. Highlight the function and right-click.
2. Choose "Edit Function Signature".
3. Change the data type to the correct type (in this case, a global structure pointer).
4. Click "OK" to save the changes.

## Naming Functions and Variables

To name functions and variables in Ghidra, we can follow these steps:

1. Highlight the function or variable and right-click.
2. Choose "Rename".
3. Type in the new name and press "Enter" to save the changes.

## Creating Arrays

To create an array in Ghidra, we can follow these steps:

1. Highlight the data and right-click.
2. Choose "Data Type" and select "Create Array".
3. Choose the number of elements and the data type.
4. Click "OK" to create the array.

## Applying Arrays to Global Offsets

To apply an array to a global offset in Ghidra, we can follow these steps:

1. Go to the global offset and right-click.
2. Choose "Data Type" and select the array we created.
3. Click "Apply" to apply the array to the global offset.

## Conclusion

In this section, we have learned how to use structures in Ghidra by applying them to data, navigating through the program using cross-references, changing function signatures, naming functions and variables, creating arrays, and applying arrays to global offsets. These skills will help us better understand the program and its data structures.

---

# Creating Arrays and Changing Function Signatures
<iframe width="560" height="315" src="https://www.youtube.com/embed/xP6ddyVeUWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Identifying Global Variables and Structures
To identify global variables and structures, we need to navigate to the main function. We can see that whenever the name of the global variable is updated, it also updates in the space where it is being used. This makes it convenient to name variables as we move through a program.

To see where the global structure is being used, we can go to the listing view and look at the cross-references. The cross-references show us everywhere in the program that is referencing that particular global variable. We can double-click on the cross-reference to quickly navigate to that location in the program.

## Editing Function Signatures
When we navigate to a function that uses a global variable or structure, we might need to edit the function signature to properly identify the type of the variable being used. We can do this by right-clicking on the function and selecting "Edit Function Signature". We can then change the type of the variable to match the global variable or structure being used.

## Creating Arrays
We can also use Ghidra to create arrays. To do this, we first need to identify the size of the elements in the array. In our example, we can see that the size of each element is 4 bytes. We can then right-click on the global variable and select "Create Array". We can then specify the number of elements we want to create, making sure not to create too many and overwrite existing data.

---
# Analyzing and Identifying C++ Classes in Ghidra
<iframe width="560" height="315" src="https://www.youtube.com/embed/gdrAlpkncuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Follow these easy steps to analyze and identify classes in Ghidra.

## Step 1: Identify C++ Instance creation logic
In the video the instructor show this code:
```cpp
ppcVar1 = operator.new(0x14);
FUN_000111f4(ppcVar1);
(***ppcVar1)(ppcVar1, ranNum);
(**(*ppcVar1 + 0xc)) (ppcVar1, ranNum & Oxffff);
```

Take a close look at the code and try to identify the class constructor and virtual function calls. This will help you understand the class structure better.

The variable `ppcVar1` can be renamed to `this` as it represents the this pointer of the class that was created with `operator.new`.

The line `FUN_000111f4(ppcVar1);` is most likely a constructor call as it comes directly after the new call and also takes in the `this` pointer.

## Step 2: Create a class in Ghidra

Now that you have a better understanding of the code, let's create a class in Ghidra:

1. Edit the constructor function signature and select the calling convention as `thiscall` and save.
2. Now when you right-click on the function you can choose "Auto Create Class" to create the class.
3. Give the auto-generated class a more meaningful name.

## Step 3: Give your class members meaningful names

Take some time to identify the data types of the class members. Once you know what each member is, update their names to make your code easier to understand.

## Step 4: Set up the virtual table for the base class
You will notice that the constructor calls a function at the start, this is the constructor for the base class.

It's time to identify the base class that your derived class is inheriting from:
1. Change the function to `__thiscall` and right click and select create class
2. Rename the base class to a more meaningful name.
3. Create a new structure (New -> Structure) called "BaseVtable" with four virtual function types.

## Step 5: Create a virtual table for the derived class

Now that you've identified the base class, let's create a virtual table for the derived class:

1. Create a new structure for the derived class's virtual table.
2. Add the inherited virtual functions and any new virtual functions to the derived class's virtual table.
3. Replace the base class virtual table pointer with the derived class virtual table pointer.

## Step 6: Analyze nested classes

Finally, let's take a look at any nested classes:

1. Identify any nested classes and their constructors.
2. Analyze the nested class and update the class structure accordingly.

That's it! You've successfully analyzed and identified classes in Ghidra. Keep practicing to improve your reverse engineering skills. Happy coding!

---
# Derived Classes

<iframe width="560" height="315" src="https://www.youtube.com/embed/CKrKc3jMuR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
In this tutorial, we will learn how to analyze a derived class in C++ and rename its functions for better understanding. We will start by setting up the derived class and then analyze its functions one by one.

## Setting up the Derived Class

1. Rename the derived class to have a meaningful name.
2. Analyze each function in the derived class to determine its purpose.
3. Rename the functions accordingly and add them to the derived class.

## Analyzing and Renaming Functions

Let's analyze and rename the functions in the derived class step by step:

### Count Function

1. Identify the count function that has a virtual function call.
2. Rename it to `derived_count`.
3. Add it to the derived class.

### Get Functions

1. Identify the get functions that return an offset for the `this` pointer.
2. Rename them to `derived_get_offset_8` and `derived_get_offset_C`.
3. Add them to the derived class.

### Switch Function

1. Identify the switch function that doesn't return anything.
2. Rename it to `derived_switch`.
3. Add it to the derived class.

### Deconstructors

1. Identify the deconstructor functions.
2. Rename them to `decon_1` and `decon_2`.
3. (Optional) Add them to the derived class.

## Analyzing the Constructor

1. Identify the constructor function.
2. Rename it to `derived_constructor`.
3. Add it to the derived class.

## Analyzing the Nested Class

1. Identify the nested class and its functions.
2. Rename the functions to `nest_constructor` and `nest_hello`.
3. Create a structure for the nested class with the renamed functions and their corresponding offsets.

## Analyzing the Derived Constructor

1. Identify the derived constructor function.
2. Rename it to `derived_constructor`.
3. Add a `nest` pointer to the derived constructor.

## Analyzing the Derived Class Members

1. Analyze the derived class members and their types.
2. Rename the members to have meaningful names.
3. Add them to the derived class.

## Updating the Virtual Table

1. Edit the virtual table to better represent the discovered functions.
2. Update the virtual table with the renamed functions.

## Analyzing the Count Function

1. Analyze the count function and its parameters.
2. Rename the parameters to have meaningful names.
3. Update the function name to reflect its purpose.

By following these steps, you can analyze and rename functions in a derived class in C++ for better understanding. Remember to only assign names to members when you have meaningful information about their purpose.

---
# Derived Class Constructors
<iframe width="560" height="315" src="https://www.youtube.com/embed/hVW4jCpuQwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In this tutorial, we'll explore a derived class constructor and its associated members. We'll also create a virtual table pointer for better understanding of the virtual function calls.

## Analyzing the Derived Class Constructor

The derived class has the following decompilation after setting most of the variable names: 

```cpp
/* DISPLAY WARNING Type casts are NOT being printed */

void __thiscall Nest::Nest(Nest *this)
{
  bool bVar1;
  char *pcVar2;
  bool bVar3;
  char *pcVar4;
  char *local_10;
  char *local_c;

  *&this-vptr = &NestVtable;
  pcVar2 = malloc(0x20);
  this->hashsub1 = pcVar2;
  pcVar2 = malloc(0x20);
  this->hashSub2 = pcVar2;
  puts("Creating Nest Object");
  this->0x1337 = 0x1337;
  this->hash = "8689d701c21f91c4085f08d9a411c629";
  local_18 = this->hashsub2;
  local_c = this->hashsub1;
  bVar3 = false;
  
  while (bar1 = bVar3, *this->hash != '\0') {
    pcVar4 = this->hash;
    this->hash = pcVar4 + 0x1;
    pcVar2 = local_c + 0x1;
    *local_c = *pcVar4;
    bVar3 = bVar1 ^ 0x1;
    local_c = pcVar2;
    if (bVar1) {
      *local_10 = *this->hash;
      local_10 = local_10 + 0x1;
      local_c = peVar2;
    }
  }
  return;
)
```

---
# C++ Classes Stack and Global Classes
<iframe width="560" height="315" src="https://www.youtube.com/embed/VUokmWqCDnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Introduction

If you've made it this far, then things are going to get a bit easier, probably a whole lot easier now, because the hard part is basically complete. In the last video, we finished talking about the derived class and how it was being set up. Now we can understand how it's getting used, how the members are getting used, and how the virtual function calls are getting used.

## Setting up the Derived Object

In the previous video, we talked about setting up the derived class. In this video, we can see that the function is doing a lot of the same things that our previous function did. Our derived constructor is being called, and our derived count is being directly called. This is because the object is being set up on the stack. Therefore, instead of these being virtual function calls, it's just calling it directly. However, the nested object is still a virtual function call, and the reason for that is that it is a pointer.

## Using a Global Pointer

In this section, we will talk about using a global pointer. We don't have a constructor here, so that means that it has to be constructed somewhere else. We know that it's not getting constructed in any of this. In one of the earlier videos, we talked about the entry function, and we see that it's calling the initializer function. This happens before the main function. Therefore, this is going to call this routine, and all of these functions are going to happen before the main function. This is a global derived object, so we can edit the function drive pointer to copy that, and then we can apply the derived structure over this.

## Wrapping Things Up

In this tutorial, we've walked through the steps of reverse engineering a program using Ghidra. Hopefully, you have gained a better understanding of Ghidra and how it can be used in your future endeavors. If there was something that I've done that was incorrect, or if you know of a better way to do some of this method ecology, then please reach out to me and let me know.

---
# Ghidra Shared Library Scripting and Headless Analysis
<iframe width="560" height="315" src="https://www.youtube.com/embed/ObLA0Za2PhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Reverse engineering on shared libraries can be a time-consuming task, especially when dealing with embedded systems. In this tutorial, we will explore the tools and capabilities available in native Linux, as well as the scripting interface and headless analysis tool that Ghidra offers. We will use a nonsensical example to show how to use Ghidra's headless analysis tool to scan multiple shared libraries in order to speed up your analysis.

## Prerequisites

Before starting, make sure that you have the following tools installed on your system:

- `ldd` - to list shared library dependencies
- `objdump` - to display information about object files
- Ghidra

You will also need a set of shared libraries to work with. You can download the example libraries from the author's [GitHub page](https://github.com/ctberthiaume/gr-example-shared-libs).

## Analyzing Shared Libraries

### Using `ldd` and `objdump`

We can use the `ldd` command to list the shared library dependencies for a given binary. For example, running `ldd <binary>` will show which shared libraries the binary will try to pull in to execute.

We can also use `objdump` to display information about object files. For example, running `objdump -T <binary>` will show the exported symbols from the binary.

### Using Ghidra

To use Ghidra for reverse engineering shared libraries, we first need to load the shared libraries into the project. We can do this by selecting "File > Import > External Libraries" and then selecting the shared libraries we want to load.

We can then use Ghidra to analyze the shared libraries. For example, we can click on a function in the binary and Ghidra will automatically switch to the location of where that function lives inside of the shared library.

However, if we have hundreds of binaries or shared libraries to analyze, this process can be time-consuming. In such cases, we can use Ghidra' headless analysis tool and scripting interface.

## Using Ghidra' Headless Analysis Tool and Scripting Interface

To use Ghidra' headless analysis tool, we need to use the `analyze-headless` script located in the `support` directory. We also need to create a script to perform our analysis. Here, we will create a script to extract the names of objects created by calling the `setname` function.

```python
for ins in f.instructions(f.start):
    if ins.get_mnemonic() == "call":
        call_addr = ins.get_operand_value(0)
        func_name = f.get_function_at(call_addr).name
        if func_name == "_ZN4Base7setNameESs":
            string_addr = ins.get_operand_value(1)
            obj_name = f.get_string_at(string_addr)
            print(obj_name)
```

This script gets a list of all the instructions starting at the first instruction, then goes through each of those instructions and gets the mnemonic string. We only want it to print out the string whenever it's a call. We then get the address in which we are making a call to and walk backward from this call to get each instruction until we find an instruction that is loading a string. We print out that string value.

We can then use this script with the `analyze-headless` tool to automate our analysis. For example, we can run the following command:

```bash
./analyze-headless.py -p $(pwd) -n my_repo --import-binaries ./build/**/*.so -s my_script.py
```

This command tells the `analyze-headless` script to import all of the

---
# References
[^1]: [Software Reverse Engineering with Ghidra -- Setup and Installation - YouTube](https://www.youtube.com/watch?v=4v8WkHmSFUU)
[^2]: [Software Reverse Engineering with Ghidra -- How to import files and get started - YouTube](https://www.youtube.com/watch?v=OlWm9Oh9bj8)
[^3]: [Software Reverse Engineering with Ghidra -- Creating Structures - YouTube](https://www.youtube.com/watch?v=Y-BhEfbg7C4)
[^4]: [Software Reverse Engineering with Ghidra -- Creating Arrays and Changing Function Signatures - YouTube](https://www.youtube.com/watch?v=xP6ddyVeUWg&list=PLRAe18TJ_NTE9cr18OPphn82WS8gVv-te&index=5)

