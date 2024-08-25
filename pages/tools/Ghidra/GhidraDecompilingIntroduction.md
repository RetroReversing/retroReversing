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
recommend: 
- introduction
- ghidra
editlink: /tools/Ghidra/GhidraDecompilingIntroduction.md
youtube: "4v8WkHmSFUU?list=PLRAe18TJ_NTE9cr18OPphn82WS8gVv-te"
updatedAt: '2019-09-01'
---

# Introduction

This tutorial series will guide you through the basics of decompiling a C++ executable, from setup all the way to reversing C++ classes. 

The video tutorial is created by James Tate over on his excellent YouTube channel, and it is highly recommended that you subscribe here: [James Tate - YouTube](https://www.youtube.com/channel/UCwSxJ5kXVFPWi6fYuj6o78w).

## Download and Run Ghidra

The first step, of course, is to download Ghidra if you haven't already, which you can do from the official site:

{% include link-to-other-site.html url="https://ghidra-sre.org/" description="Download Ghidra from the Official Site" image="[.jpg](https://ghidra-sre.org/images/GHIDRA_1.png)" title="Download Ghidra"  %}

At the time of writing this tutorial, the version of Ghidra was 10.2.3.

You will also need a Java Development Kit (JDK) version 17+, which you can download from the **AdoptOpenSDK** official site: [AdoptOpenJDK - Open source, prebuilt OpenJDK binaries](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot).

You can now run Ghidra from the extracted folder by running the main script from bash (or double-clicking on it):

```bash
./ghidraRun
```
It may ask you for your JDK path. Enter where you installed your OpenJDK [^1] like so:
```bash
******************************************************************
JDK 17+ (64-bit) could not be found and must be manually chosen!
******************************************************************
Enter path to JDK home directory: 
```

If you already hava Java installed and just need to find the JDK home directory you can execute the following:
```bash
> which javac # returns location of the java compiler
> javac -version # returns the version of the java compiler
```

Note that on MacOSX it installed to: `/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home`

## Create a New Project

First of all, you need a project to start reverse-engineering a binary executable. To do this, use File -> New Project.
![GhidraNewProject](https://user-images.githubusercontent.com/40120498/233848935-697c78ab-8292-4640-8bfe-bd24bbddfa86.jpeg)

Select `Non-Shared project`, give it a name such as `Example` and click Finish.

## Obtaining Your Binary Executable to Reverse

To follow along in this tutorial, you can either compile the sample code provided or download the pre-compiled executables. 

Both are available on James's GitHub repository: [GitHub - james-tate/ghidraExampleSource](https://github.com/james-tate/ghidraExampleSource).

Note that there are two pre-compiled executables in this repository: one is stripped (which means it doesn't have any debug symbols) and the other is standard.

You can use the compiler of your choice as long as it supports C++. So, if you have a special compiler for PS2/Dreamcast/Xbox/Gamecube, etc., feel free to use that. But bear in mind that importing executables for those systems will require a third-party plugin known as a `loader`.


## Import Your Binary Executable

You can import a file into Ghidra very simply with: `File -> Import File`. Find your executable file that you built with your C++ compiler.
![GhidraImportFile](https://user-images.githubusercontent.com/40120498/233849087-e98e5568-47cf-433d-8e0c-2b9c97e0a17b.jpeg)

This will open the import dialog. In this tutorial, we also want to load in the external libraries. This makes it easier to reverse engineer, as you can swap between the main executable and the libraries really easily in Ghidra. [^2]

To do this, click "Options" and set the Library Paths in the dialog.
![GhidraImportOptions](https://user-images.githubusercontent.com/40120498/233849225-33624daf-23d3-473a-b29f-615f78ae17c9.jpeg)

It will show the Import Results dialog with a lot of interesting information it found about the binary.

Now finally double click on the `example` executable to unleash the Ghidra!
![GhidraAfterImportExe](https://user-images.githubusercontent.com/40120498/233849438-10fb08f2-3871-415c-b127-f2cad0d7b379.jpeg)

It will now start importing the file and ask you if you want to analyze it. Select "Yes" and keep the default settings.
![GhidraAnalysisOptions](https://user-images.githubusercontent.com/40120498/233849508-ed2a9bbd-ea43-47af-9454-aeded7d4843e.jpeg)


## How to Find the Main Function

If you have symbols, you can use the `Navigation -> Go To...` menu and type "main". But if you don't have symbols (e.g you used the stripped version), then we will need to find it ourselves.
![GhidraGoTo](https://user-images.githubusercontent.com/40120498/233849786-e202b2aa-f998-4a97-a9f0-1d902eaeef3f.jpeg)
![GhidraGoToMain](https://user-images.githubusercontent.com/40120498/233849850-2e6165fe-cdc9-4aef-92e9-273182e7f9b8.jpeg)


To find it manually, go to the `.text` section, and it will take you to the `entry` function. If you are using the same example as the video tutorial, then you will have a `__libc_start_main` function, and its first parameter is a function pointer to the `main` function.
![GhidraStrippedLibCStartMain](https://user-images.githubusercontent.com/40120498/233852447-fe9db32b-bae8-4e22-a096-50ab171e4a79.jpeg)

If you are using a different executable or compiled with a different compiler, this can be set up differently. But `entry` will call `main` somewhere, so it may require a bit of debugging with a debugger such as `gdb` or an emulator's built-in debugger.

When you have found what you believe to be the main method, right-click on the auto-generated function name, and select "Rename Function".
![GhidraRenameFunction](https://user-images.githubusercontent.com/40120498/233852599-ebf7c684-aed3-41c8-9472-1bf3c1aae573.jpeg)


## Decompile the Main Function
One of the main advantages of Ghidra is its free out of the box decompiler, now that you have found the main function it is easy to decompile it by going to `Window -> Decompile`.
![GhidraDecompileMain](https://user-images.githubusercontent.com/40120498/233852164-847a0031-80bb-41ed-8bab-d5f88cef501e.jpeg)

If you have debug symbols in the executable then it will look very similar to the original source:
![Ghidra Decompiled Output](https://user-images.githubusercontent.com/40120498/233852346-d8eb8cc7-0a52-43f4-b178-436d62b608cb.jpeg)



---
# Using Structures in Ghidra
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-BhEfbg7C4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
In this section, we will learn how to use structures in Ghidra by applying them to data and navigating through the program using cross-references. We will also learn how to change the function signature to improve data presentation and how to create an array and apply it to a global offset [^3].

## Setting Up Structures in Ghidra

Before we can use structures in Ghidra, we need to set them up. To do this, we can follow these steps:

1. Open the program in Ghidra and go to the Data Type Manager:
![GhidraDataTypeManager](https://user-images.githubusercontent.com/40120498/233852800-747420e6-2045-404f-b54e-94cd3dc6fe1b.jpeg)

2. Create a new structure and name it:
![GhidraNewStructure](https://user-images.githubusercontent.com/40120498/233852854-c1813250-9d6e-4645-ac26-d385e742c1a4.jpeg)

3. Add fields to the structure and set their data types and offsets.
![GhidraCreateCharField](https://user-images.githubusercontent.com/40120498/233853020-444cafdd-33d2-46ad-8fb6-2f3e3c40d51a.jpeg)

4. Save the structure.
![GhidraSaveStruct](https://user-images.githubusercontent.com/40120498/233853180-82ce838f-e5ff-4577-8885-55ae00638e4f.jpeg)


Once we have set up the structure, we can apply it to data by following these steps:

1. Highlight the data and right-click.
2. Choose "Data Type" and select the structure we created.
3. Click "Apply" to apply the structure to the data.
![GhidraManuallySetDataType](https://user-images.githubusercontent.com/40120498/233853376-a4d177cc-2dcf-4e95-a822-97c43ba72baf.jpeg)


Note that if you get something similar to:
```
yourStructName.field0x4._0_1_
```
Then this means that at offset 0x4 in the struct we have an undefined field for the structure. 

There is also a short cut for doing this directly from the decompile view by right clicking and selecting "Auto Create Structure".
![GhidraAutoCreateStructure](https://user-images.githubusercontent.com/40120498/233853414-17e9ed98-bfb8-4211-a72d-d62fc6841539.jpeg)

---

# Creating Arrays and Changing Function Signatures
<iframe width="560" height="315" src="https://www.youtube.com/embed/xP6ddyVeUWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## Navigating through the Program with Cross-References
To see where the global structure or function is being used, we can go to the listing view and look at the cross-references. The cross-references show us everywhere in the program that is referencing that particular global variable. We can double-click on the cross-reference to quickly navigate to that location in the program.

To navigate through the program using cross-references, we can follow these steps:

1. Go to the listing view and look for the cross-references.
![GhidraXRef](https://user-images.githubusercontent.com/40120498/233861646-c9728e88-0bb2-4e07-ae8f-62e34bf8eee8.jpeg)
2. Click on the cross-reference to go directly to the function.
3. Note the 'R' or 'W' beside the Cross Reference indicating whether the function Reads or Writes to it.

## Changing Function Signatures and Naming

To change the function signature in Ghidra, we can follow these steps:

1. Highlight the function and right-click.
![GhidraEditFunctionSignature](https://user-images.githubusercontent.com/40120498/233861985-552b8f50-8c76-4ece-a294-468beeb0e13d.jpeg)
2. Choose "Edit Function Signature".
3. Change the data type to the correct type (in this case, a global structure pointer).
![GhidraEditFunctionDialog](https://user-images.githubusercontent.com/40120498/233862062-b7e49446-1d41-4134-9daf-dade181bc6a2.jpeg)
4. Click "OK" to save the changes.

## Creating Arrays
We can also use Ghidra to create arrays. To do this, we first need to identify the size of the elements in the array. In our example, we can see that the size of each element is 4 bytes. We can then right-click on the global variable and select "Create Array". We can then specify the number of elements we want to create, making sure not to create too many and overwrite existing data.

To create an array in Ghidra, we can follow these steps:

1. Highlight the data and right-click.
2. Choose "Data Type" and select "Create Array".
![GhidraCreateArray](https://user-images.githubusercontent.com/40120498/234082791-55044731-0dc2-4dd6-a403-9d20fa23035a.jpeg)
3. Choose the number of elements and the data type.
4. Click "OK" to create the array.

---
# Analyzing and Identifying C++ Classes in Ghidra
<iframe width="560" height="315" src="https://www.youtube.com/embed/gdrAlpkncuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Follow these easy steps to analyze and identify classes in Ghidra.

## Step 1: Identify C++ Instance creation logic
In the video the instructor show this code in the decompile window:
```cpp
ppcVar1 = operator.new(0x14);
FUN_000111f4(ppcVar1);
(***ppcVar1)(ppcVar1, ranNum);
(**(*ppcVar1 + 0xc)) (ppcVar1, ranNum & Oxffff);
```

Take a close look at the code and try to identify the class constructor and virtual function calls. This will help you understand the class structure better.

The variable `ppcVar1` can be renamed to `this` as it represents the this pointer of the class that was created with `operator.new`.

Note that `operator.new` only appears if you have added the external libC library that it was compiled with to the project. 

The line `FUN_000111f4(ppcVar1);` is most likely a constructor call as it comes directly after the new call and also takes in the `this` pointer.

## Step 2: Create a class in Ghidra

Now that you have a better understanding of the code, let's create a class in Ghidra:

1. Edit the constructor function signature and select the calling convention as `thiscall` and save.
![GhidraThisCall](https://user-images.githubusercontent.com/40120498/234084458-881184c8-ef2b-44fb-bdee-c76514037bd3.jpeg)
2. Now when you right-click on the first parameter to the constructor function you can choose "Auto Create Class" to create the class.
![GhidraAutoCreateClass](https://user-images.githubusercontent.com/40120498/234085183-2a6c8a3e-5808-4140-b607-172648e5c4fb.jpeg)
3. Give the auto-generated class a more meaningful name.

## Step 3: Give your class members meaningful names

Take some time to identify the data types of the class members. Once you know what each member is, update their names to make your code easier to understand.

![GhidraRenameField](https://user-images.githubusercontent.com/40120498/234085780-391cbedb-82ce-453f-8475-166c2a5da347.jpeg)

## Step 4: Set up the virtual table for the base class
You will notice that the constructor calls a function at the start, this is the constructor for the base class.
![GhidraDetectingInheritanceVPtr](https://user-images.githubusercontent.com/40120498/234086523-86209e20-d4a7-47be-81f9-908d096d3b91.jpeg)

If you click on the `PTR___cxa_pure_virtual_000117ec` it will take you to the listing view where it shows three other virtual functions:
![Ghidra4VirtualFunctions](https://user-images.githubusercontent.com/40120498/234086983-e9b11b80-d4a4-4274-99ef-c7bd19d9bb26.jpeg)

It's time to create a structure to represent the VTable for the Base class:
1. Create a new structure (New -> Structure) called "BaseVtable" with a virtual function.
![GhidraBaseVTableStructure](https://user-images.githubusercontent.com/40120498/234087693-cc502518-4c49-463f-9b72-568d10fd3b4b.jpeg)
2. Add the other virtual functions in the same way (`func *`)
3. Now do the same for the Derived class as it will override some of the virtual functions

If you click on `PTR_FUN_000112a8+1_000117c` you will be taken to the listing view with 6 functions listed:
![GhidraFunctionsThatMakeUpVTable](https://user-images.githubusercontent.com/40120498/234089886-a012dd6c-231d-4058-80ee-0b702a1d651f.jpeg)

You can change these all to `__thiscall` as they are all the functions that will go into the VTable.

---
# Destructors

<iframe width="560" height="315" src="https://www.youtube.com/embed/CKrKc3jMuR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
In this tutorial, we will learn how to analyze a derived class in C++ and rename its functions for better understanding. We will start by setting up the derived class and then analyze its functions one by one.

### Detecting Destructors
If we go through all of our virtual functions in the VTable you will eventually find the Destructor for the class, which calls `operator.delete` (if you have the libc library).
![GhidraDestructor](https://user-images.githubusercontent.com/40120498/234090989-55711641-2978-4214-bcf3-a91520d2f161.jpeg)

1. Set it to a `__thiscall`
2. Rename them to a suitable deconstructor name `~ClassNameDestructor`

![GhidraDecompileDestructure](https://user-images.githubusercontent.com/40120498/234092112-ac80ec5f-502d-4017-a1a5-26572ff8f86a.jpeg)

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

Global classes are setup before the main function is even called in a function called **init**.

---
# Ghidra Shared Library Scripting and Headless Analysis
<iframe width="560" height="315" src="https://www.youtube.com/embed/ObLA0Za2PhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Reverse engineering on shared libraries can be a time-consuming task, especially when dealing with embedded systems. In this tutorial, we will explore the tools and capabilities available in native Linux, as well as the scripting interface and headless analysis tool that Ghidra offers. We will use a nonsensical example to show how to use Ghidra's headless analysis tool to scan multiple shared libraries in order to speed up your analysis.

## Prerequisites

Before starting, make sure that you have the following tools installed on your system:

- `ldd` - to list shared library dependencies
- `objdump` - to display information about object files
- Ghidra

You will also need a set of shared libraries to work with. You can download the example libraries from the author's [GitHub page]([https://github.com/ctberthiaume/gr-example-shared-libs](https://github.com/james-tate/ghidra_headless_example)).

## Analyzing Shared Libraries

### Using `ldd` and `objdump`

We can use the `ldd` command to list the shared library dependencies for a given binary. For example, running `ldd <binary>` will show which shared libraries the binary will try to pull in to execute.

We can also use `objdump` to display information about object files. For example, running `objdump -T <binary>` will show the exported symbols from the binary.

### Using Ghidra

To use Ghidra for reverse engineering shared libraries, we first need to load the shared libraries into the project. We can do this by selecting "File > Import > External Libraries" and then selecting the shared libraries we want to load.

We can then use Ghidra to analyze the shared libraries. For example, we can click on a function in the binary and Ghidra will automatically switch to the location of where that function lives inside of the shared library.

However, if we have hundreds of binaries or shared libraries to analyze, this process can be time-consuming. In such cases, we can use Ghidra' headless analysis tool and scripting interface.

## Using Ghidra' Headless Analysis Tool and Scripting Interface

To use Ghidra' headless analysis tool, we need to create a python script using the python Ghidra `FlatProgramAPI` to perform our analysis. Here, we will create a script to extract the names of objects created by calling the `setname` function:

```python
instructions = currentProgram.getListing().getInstructions(1)

for instruction in instructions:
	mnemonic = instruction.getMnemonicString()

	if mnemonic == "CALL":
		funcAddress = instruction.getOpObjects(0)[0]
		func = getFunctionContaining(toAddr(funcAddress.getOffset()))
		callingFunc = getFunctionContaining(instruction.getAddress())
		if func is not None:
			if func.getName() == "setName":
				inst = instruction.getPrevious()
				instAddr = inst.getAddress()
				while(getFunctionContaining(instAddr) == callingFunc ):
					numOps = getInstructionAt(instAddr).getNumOperands()
					for i in range(numOps):
						for op in getInstructionAt(instAddr).getOperandReferences(i):
							if op.getReferenceType().isData():
								data = getDataAt(op.getToAddress())
								if data is not None:
									if data.getDataType().toString() == "string":
										print "Found name of the {}() to be {} in {}".format(
											callingFunc, 
											data,
											currentProgram)
					inst = inst.getPrevious()
					instAddr = inst.getAddress()
```

This script gets a list of all the instructions starting at the first instruction, then goes through each of those instructions and gets the mnemonic string. We only want it to print out the string whenever it's a **CALL**. We then get the address in which we are making a call to and walk backward from this call to get each instruction until we find an instruction that is loading a string. We print out that string value.

You can execute this script by importing it in the Ghidra **Script Manager**.

We also use this script with the `analyzeHeadless` tool to automate our analysis. For example, we can run the following command:

```bash
./analyzeHeadless $(pwd) names --import $(pwd)/*.so -recursive -postScript my_script.py
```

---
# Binary Diffing with Ghidra
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HCksnJB9cbA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---
# References
[^1]: [Software Reverse Engineering with Ghidra -- Setup and Installation - YouTube](https://www.youtube.com/watch?v=4v8WkHmSFUU)
[^2]: [Software Reverse Engineering with Ghidra -- How to import files and get started - YouTube](https://www.youtube.com/watch?v=OlWm9Oh9bj8)
[^3]: [Software Reverse Engineering with Ghidra -- Creating Structures - YouTube](https://www.youtube.com/watch?v=Y-BhEfbg7C4)
[^4]: [Software Reverse Engineering with Ghidra -- Creating Arrays and Changing Function Signatures - YouTube](https://www.youtube.com/watch?v=xP6ddyVeUWg&list=PLRAe18TJ_NTE9cr18OPphn82WS8gVv-te&index=5)

