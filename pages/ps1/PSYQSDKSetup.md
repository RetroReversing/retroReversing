---
layout: post
tags: 
- ps1
- reverseengineering
- sdk
- tutorial
title: PSYQ SDK Setup on MacOSX/Linux
thumbnail: /public/consoles/Sony Playstation.png
image: /public/images/ps1/Sony PS1 PsyQ SDK Setup.jpg
twitterimage: http://www.retroreversing.com/public/images/ps1/Sony PS1 PsyQ SDK Setup.jpg
permalink: /psyq-sdk-setup
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 1
    url: /ps1
  - name: PSYQ SDK Setup on MacOSX/Linux
    url: #
recommend: ps1
editlink: /ps1/PSYQSDKSetup.md
---

# Hello World example
We are going to use the PSX Hello world example from PSXDEV (<a href="http://www.psxdev.net/help/psyq_hello_world.html">http://www.psxdev.net/help/psyq_hello_world.html</a>)
Create a new file called Hello.C
```c
/*
===========================================================
                Sony PlayStation 1 Source Code
===========================================================
                         FONT EXAMPLE
Displays text on the screen using the built in GPU routines
-----------------------------------------------------------

    Developer / Programmer..............: SCEI & PSXDEV.net
    Software Ddevelopment Kit...........: PSY-Q
	Last Updated........................: 04/MAY/2017

    Original code by SCEI | Edited by PSXDEV.net
    
	NOTE: This example uses double buffering.

  Copyright (C) 1994,1995 by Sony Computer Entertainment Inc.
   Sony Computer Entertainment Inc. Development Department.
                   All Rights Reserved.
				   
                    http://psxdev.net/

-----------------------------------------------------------*/

#include <stdlib.h>
#include <libgte.h>
#include <libgpu.h>
#include <libgs.h>

#define OT_LENGTH 1 // the ordertable length
#define PACKETMAX 18 // the maximum number of objects on the screen
#define SCREEN_WIDTH  320 // screen width
#define	SCREEN_HEIGHT 240 // screen height (240 NTSC, 256 PAL)

GsOT myOT[2]; // ordering table header
GsOT_TAG myOT_TAG[2][1<<OT_LENGTH]; // ordering table unit
PACKET GPUPacketArea[2][PACKETMAX]; // GPU packet data

u_long _ramsize   = 0x00200000; // force 2 megabytes of RAM
u_long _stacksize = 0x00004000; // force 16 kilobytes of stack

// --------
// INTEGERS
// --------
short CurrentBuffer = 0; // holds the current buffer number

// ----------
// PROTOTYPES
// ----------
void graphics(); // inits the GPU
void display(); // updates the GPU (IE: VRAM/SGRAM/framebuffer)

const DEBUG = 1; // debugging (1=on, 0=off)

// ----
// MAIN
// ----
int main() 
{
	graphics(); // setup the graphics (seen below)
	FntLoad(960, 256); // load the font from the BIOS into the framebuffer
	SetDumpFnt(FntOpen(5, 20, 320, 240, 0, 512)); // screen X,Y | max text length X,Y | autmatic background clear 0,1 | max characters
	
	if (DEBUG) // should debug be true (equal 1)...
	{
		// print to the TTY stream (only visible if you're using one)
		printf("\n\nHello World\n");
		printf("\nhttp://psxdev.net/");
	}

	while (1) // draw and display forever
	{
		FntPrint("             HELLO WORLD\n\n          HTTP://PSXDEV.NET/");
		display();
	}

	return 0; // this will never be reached because we're in a while loop above
}

void graphics()
{
	SetVideoMode(1); // PAL mode
	//SetVideoMode(0); // NTSC mode
	
	GsInitGraph(SCREEN_WIDTH, SCREEN_HEIGHT, GsINTER|GsOFSGPU, 1, 0); // set the graphics mode resolutions (GsNONINTER for NTSC, and GsINTER for PAL)
	GsDefDispBuff(0, 0, 0, SCREEN_HEIGHT); // tell the GPU to draw from the top left coordinates of the framebuffer
	
	// init the ordertables
	myOT[0].length = OT_LENGTH;
	myOT[1].length = OT_LENGTH;
	myOT[0].org = myOT_TAG[0];
	myOT[1].org = myOT_TAG[1];
	
	// clear the ordertables
	GsClearOt(0,0,&myOT[0]);
	GsClearOt(0,0,&myOT[1]);
}


void display()
{
	// refresh the font
	FntFlush(-1);
	
	// get the current buffer
	CurrentBuffer = GsGetActiveBuff();
	
	// setup the packet workbase
	GsSetWorkBase((PACKET*)GPUPacketArea[CurrentBuffer]);
	
	// clear the ordering table
	GsClearOt(0,0, &myOT[CurrentBuffer]);
	
	// wait for all drawing to finish
	DrawSync(0);
	
	// wait for v_blank interrupt
	VSync(0);
	
	// flip the double buffers
	GsSwapDispBuff();
	
	// clear the ordering table with a background color (R,G,B)
	GsSortClear(50,50,50, &myOT[CurrentBuffer]);
	
	// draw the ordering table
	GsDrawOt(&myOT[CurrentBuffer]);
}
```

# 32-bit compilers using Wine
You can run the 32-bit compilers built for windows through WINE on Mac and Linux.

Create a new batch (`hello32.bat`) file in the same folder as `hello.c` you created previously with the following contents:
```batch
REM ================= PSX DEVELOPMENT ENVIRONMENT VARIABLES =============
REM       RELEASE 1.8 LIBRARY 3.6.1 Date: 1-31-1998 Time: 21:38:44
set PATH=C:\Psyq\bin;
set PSX_PATH=C:\Psyq\bin
set LIBRARY_PATH=C:\Psyq\lib
set C_PLUS_INCLUDE_PATH=C:\Psyq\include
set C_INCLUDE_PATH=C:\Psyq\include
set PSYQ_PATH=C:\Psyq\bin

set COMPILER_PATH=C:\Psyq\bin
set GO32=DPMISTACK 1000000 
set G032TMP=C:\TEMP
set TMPDIR=C:\TEMP
 
CCPSX.EXE HELLO.C -o HELLO.CPE
  
pause
```

You should now be able to run this in the terminal like so:
```bash
wineconsole hello32.bat
```

You should now get an HELLO.CPE file that you need to convert to a PSX Executable with `CPE2X.EXE` but that only seems to work under dosbox for me...

## Error : could not execute cpppsx
This happens because the PSYQ.ini file has incorrect paths, since I was using the Z: drive I had to change it to:
```batch
[ccpsx]
stdlib=libgs.lib libgte.lib libgpu.lib libspu.lib libsnd.lib libetc.lib libapi.lib libsn.lib libc.lib libcd.lib libcard.lib libmath.lib

compiler_path=Z:\Psyq\bin
assembler_path=Z:\Psyq\bin
linker_path=Z:\Psyq\bin
library_path=Z:\Psyq\lib
c_include_path=Z:\Psyq\include
cplus_include_path=Z:\Psyq\include
```

## Error - can't read 'sn.ini' or 'psyq.ini' config files - stopping.
Make sure you have a file called PSYQ.INI in the bin directory and that you have not renamed it etc.

# 16-bit compilers using DOSBox
If you can't get the 32-bit compilers to work there is another option, the PSYQ SDK comes with 16-bit versions of the compilers built for DOS that we can emulate in DOSBOX.
The 16-bit executables are located in the psyq folder which is located at the same level as the bin directory.

Create a new batch (`hello16.bat`) file in the same folder as `hello.c` you created previously with the following contents:
```batch
REM ================= PSX DEVELOPMENT ENVIRONMENT VARIABLES =============
REM       RELEASE 1.8 LIBRARY 3.6.1 Date: 1-31-1998 Time: 21:38:44
set PATH=C:\Psyq\psyq;
set PSX_PATH=C:\Psyq\psyq
set LIBRARY_PATH=C:\Psyq\lib
set C_PLUS_INCLUDE_PATH=C:\Psyq\include
set C_INCLUDE_PATH=C:\Psyq\include
set PSYQ_PATH=C:\Psyq\psyq

set COMPILER_PATH=C:\Psyq\psyq
set GO32=DPMISTACK 1000000 
set G032TMP=C:\TEMP
set TMPDIR=C:\TEMP
 
CCPSX.EXE HELLO.C -o HELLO.CPE
CPE2EXE HELLO.CPE
pause
```
Now right click this file and select open with DOSBOX which will run the batch script and leave you at a new command prompt in DOS. If everything went successfuly you will notice a generated file called HELLO.EXE.

---

# TOMB5 Example
Tomb Raider 5 (Chronicles) reversing project. It uses a modern version of make with the original PSYQ compilers so you can't run it through PSYMAKE.
In order to get this to run on MacOSX and Linux I needed to create a windows .bat file to wrap around the `cc1psx.exe` file so that we can run it in wineconsole with all the paths already setup.
So create a new file called cc1psx.bat with the following contents:
```bat
REM ================= PSX DEVELOPMENT ENVIRONMENT VARIABLES =============
REM       RELEASE 1.8 LIBRARY 3.6.1 Date: 1-31-1998 Time: 21:38:44
set PATH=Z:\Psyq\bin;
set PSX_PATH=Z:\Psyq\bin
set LIBRARY_PATH=Z:\Psyq\lib
set C_PLUS_INCLUDE_PATH=Z:\Psyq\include
set C_INCLUDE_PATH=Z:\Psyq\include
set PSYQ_PATH=Z:\Psyq\bin

set COMPILER_PATH=Z:\Psyq\bin
set GO32=DPMISTACK 1000000 
set G032TMP=Z:\TEMP
set TMPDIR=Z:\TEMP

CCPSX.EXE %*
```
Replace the path with the directory of your Psyq installation, I found it was easier to experiment running commands with `wineconsole cmd` to make sure all the paths are valid.

Now we can edit the `Makefile` so that we can replace:
```
CC         = ccpsx
```
with:
```
CC         = wineconsole ./bin/cc1psx.bat
```
