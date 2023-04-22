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
This tutorial series will guide you through the basics of decompiling a c++ executable, from setup all the way to reversing c++ classes. The video tutorial is created by James Tate over on his excellent youtube channel, it is highly recommended you subscribe here: [James Tate - YouTube](https://www.youtube.com/channel/UCwSxJ5kXVFPWi6fYuj6o78w)

## Download & Run Ghidra
You can download Ghidra from the official site: [Ghidra](https://ghidra-sre.org/)

You will also need a Java Development Kit (JDK) which you can download from the AdoptOpenDSK official site: [AdoptOpenJDK - Open source, prebuilt OpenJDK binaries](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot)

You can now run Ghidra from the extracted folder by running the main script 
```bash
./ghidraRun
```
It may ask you for your JDK path, enter where you installed your OpenJDK [^1].

## Create a New project
First of all you need a project in order to start reverse engineering a binary executable. To do this use `File -> New project`.

## Import your binary executable
To follow along in this tutorial you should compile the sample code provided:
[GitHub - james-tate/ghidraExampleSource](https://github.com/james-tate/ghidraExampleSource)

You can use the compiler of your choice as long as it supports C++, so if you have a special compiler for PS2/Dreamcast/Xbox/Gamecube etc then feel free to use that but bear in mind importing executables for those systems will require a 3rd party plugin known as a `loader`.

You can import a file into Ghidra very simply with:
```File -> Import File```
Find your executable file that you build with your c++ compiler.

This will open the import dialog, in this tutorial we also want to load in the external libraries, this makes it easier to reverse engineer as you can swap between the main executable and the libraries really easily in Ghidra [^2].

To do this click options and set the Library Paths in the dialog.

It will now start importing the file and ask you if you want to analyse it, select yes and keep the default settings.

## How to find the main function
If you have symbols you can use the `Go To..` menu and type main but if you don't have symbols then we will need to find it.

To find it go to the `.text` section and it will take you to the `entry` function. If you are using the same example as the video tutorial then you will have a `__libc_start_main` function and its first parameter is a function pointer to the `main` function.

If you are using a different executable or compiled with a different compiler this can be setup differently, but entry will call main somewhere so it may require a bit of debugging with a debugger such as `gdb` or an emulators built-in debugger.

When you have found what you believe to be the main method, right click on the auto generated function name and select rename function.

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

## Step 1: Set up an array and a structure

First, let's set up an array and a structure in your code:

1. Modify the function signature to populate it with more meaningful information.
2. Obtain the current system time and use it as a seed for the random function.
3. Call the random function, generate a random number, and pass it into the functions.

## Step 2: Dive into the code

Take a close look at the code and try to identify the class constructor and virtual function calls. This will help you understand the class structure better.

## Step 3: Create a class in Ghidra

Now that you have a better understanding of the code, let's create a class in Ghidra:

1. Edit the function signature and select the calling convention as `thiscall`.
2. Right-click on the function and choose "Auto Create Class" to create the class.
3. Give the auto-generated class a more meaningful name, like "Derived".

## Step 4: Give your class members meaningful names

Take some time to identify the data types of the class members. Once you know what each member is, update their names to make your code easier to understand.

## Step 5: Set up the virtual table for the base class

It's time to identify the base class that your derived class is inheriting from:

1. Rename the base class to a more meaningful name.
2. Create a structure called "BaseVtable" with virtual function types.

## Step 6: Create a virtual table for the derived class

Now that you've identified the base class, let's create a virtual table for the derived class:

1. Create a new structure for the derived class's virtual table.
2. Add the inherited virtual functions and any new virtual functions to the derived class's virtual table.
3. Replace the base class virtual table pointer with the derived class virtual table pointer.

## Step 7: Analyze nested classes

Finally, let's take a look at any nested classes:

1. Identify any nested classes and their constructors.
2. Analyze the nested class and update the class structure accordingly.

That's it! You've successfully analyzed and identified classes in Ghidra. Keep practicing to improve your reverse engineering skills. Happy coding!

---
# Derived Class Tutorial

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

---
# References
[^1]: [Software Reverse Engineering with Ghidra -- Setup and Installation - YouTube](https://www.youtube.com/watch?v=4v8WkHmSFUU)
[^2]: [Software Reverse Engineering with Ghidra -- How to import files and get started - YouTube](https://www.youtube.com/watch?v=OlWm9Oh9bj8)
[^3]: [Software Reverse Engineering with Ghidra -- Creating Structures - YouTube](https://www.youtube.com/watch?v=Y-BhEfbg7C4)
[^4]: [Software Reverse Engineering with Ghidra -- Creating Arrays and Changing Function Signatures - YouTube](https://www.youtube.com/watch?v=xP6ddyVeUWg&list=PLRAe18TJ_NTE9cr18OPphn82WS8gVv-te&index=5)

