---
layout: post
tags:
- sdk
- saturn
- sega
- psyq
- hitachi
title: Sega Saturn Library Formats
image: /public/images/saturn/Sega Saturn Library Formats.jpg
thumbnail: /public/consoles/Sega Saturn.png
permalink: /sega-saturn-library-formats/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /segasaturn
  - name: Sega Saturn Library Formats
    url: #
recommend: devkit
editlink: /sega/saturn/SaturnLibraryFormats.md
---

The Sega Saturn SDK comes with pre-build static libraries such as `SEGA_GFS` which are required to interact with the Saturn hardware and provides a nice extraction layer .

There are two standard GNU (.a) and Hitachi (.lib). The Sega Saturn libraries contain compiled versions for both standards.

# GNU Libraries

## Creating IDA Signatures for GNU Saturn Libraries
The tricky part is creating signature files for IDA Pro as the standard `pelf` tools from IDA Pro don't work.

You will notice for example that running `pelf` on `LIBSGL.A` will give the following output:
```
./pelf LIBSGL.A
LIBSGL.A: skipped 289, total 289
```

Running `pcf` on the same library provides:
```
LIBSGL.A: skipped 0, total 0 (SKIPPED ALL MODULES!)
```

What is interesting is that if you extract the .a file and run `pcf` on the extracting *.o files it works and create a .pat file.

My guess is that since the .o files are in COFF format PELF can't understand them, which makes sense. So PCF should have worked right? I presume its due to COFF files normally being in a different library format (.lib) and so it doesn't support GNU `.a` archives of COFF code.

So we need to write a script which extract the archive, runs `pcf` on all the extracting .o files and then concatinates all the .pat files into a single file.

Here is a script we wrote for exactly this purpose, note that you will need `pcf` and `sigmake` executables from the IDA Pro installation for your platform.
```python
import os
import fnmatch
import subprocess

patfiles=[]

def execute_command(bashCommand):
    print bashCommand
    return subprocess.check_output(bashCommand.split(),stderr= subprocess.STDOUT)

def extract_library(libraryName, libraryFileName):
    execute_command("rm -rf ./"+libraryName)
    execute_command("mkdir -p "+libraryName)
    try:
        execute_command("tar -C./"+libraryName+" -xvf ./"+libraryFileName)
    except:
        pass

def loopThroughExtarctedOFiles(libraryName, filename):
    for root, dirnames, filenames in os.walk('./'+libraryName):
        for filename in fnmatch.filter(filenames, '*.[oO]'):
            print filename
            execute_command("./pcf ./"+libraryName+"/"+filename)
            patfileName = filename.replace(".o",".pat").replace(".O",".pat")
            patfiles.append("./"+libraryName+"/"+patfileName)

for root, dirnames, filenames in os.walk('.'):
    for filename in fnmatch.filter(filenames, '*.[aA]'):
        libraryName = filename.replace('.a','').replace('.A','')
        extract_library(libraryName, filename)
        loopThroughExtarctedOFiles(libraryName, filename)
        print filename
        print patfiles

execute_command("rm -f *.sig")
execute_command("./sigmake -nSegaSaturn "+'+'.join(patfiles)+" "+'SegaSaturn.sig')
```

---
# Hitachi Libraries
The Sega SDK comes with pre-build Hitachi library files (*.lib) for use with the Hitachi SH2 toolchain.

## Librarian (lbr)
You can obtain the Hitachi Librarian online from an old Dreamcast SDK. The Hitachi Librarian is for building and extracting static libraries, which are just a bunch of compressed object code (.obj files are assembled but not linked machine language).

You use the librarien tool (`lbr.exe`) from the command line like so:
```
lbr libraryName.lib
```
For example to list the object modules in `SEGA_GFS.LIB` on windows:
```
lbr.exe SEGA_GFS.LIB /LIST
```

### Librarian Sub Command Files
Similar to Makefiles the Hitachi Librarian supports a file to tell it how to build a library from a bunch of compiled object (.obj) files.


## Creating IDA Signatures for Hitachi Libraries
Currently it is unknown how to create IDA Pro Signatures from the Hitachi versions of the libraries.

But here are a few hints to see if you can help solve the problem.
First lets use the librarian to extract the specific module files like so:
```
lbr.exe SEGA_GFS.LIB /EXTRACT=gfs /OUTPUT=gfs
```
The problem is the resulting extraction is also a library file format so it cannot be passed to `pcf` to create signatures.

Is it possible to get standard COFF object files from the hitachi libraries?

---
# PSYQ Libraries
Note that although these library files also have the extension `.lib` they are not compatible with the Hitachi libraries listed above.

## PSYLIB

Example to list the contents of a PsyQ static library:
```dos
PSYLIB.EXE /l LIBSN.LIB
```

To extract the object files:
```
PSYLIB.EXE /x LIBSN.LIB
```

## Creating IDA Signatures for PSYQ Saturn Libraries
The extracted .OBJ files cannot be understood by the standard `pelf` or `pcf` but IDA Pro comes with `ppsx` which does support the PSYQ library file type.

The only problem is that when you run it it will complain about the saturn processor as it is only developed for the PSX MIPS based processor:
```
Fatal [CD.OBJ] (CD.OBJ): Unknown processor type 8
```
