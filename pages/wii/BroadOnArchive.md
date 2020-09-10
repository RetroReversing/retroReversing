---
layout: post
tags: 
- n64
- sdk
- leak
- wii
- ique
title: BroadOn Archive - Nintendo May 2020 Leak (4Chan)
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/Wii/Nintendo Wii May 2020 Source Code Leak.jpg
permalink: /broadon-archive
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Wii
    url: /wii
  - name: BroadOn Archive
    url: #
recommend: n64
editlink: /wii/BroadOnArchive.md
updatedAt: '2020-09-10'
twitterimage: https://www.retroreversing.com/public/Wii/Nintendo Wii May 2020 Source Code Leak.jpg
videocarousel:
  - title: MVG
    image: https://i.ytimg.com/vi/n8G7eq0GlQs/sddefault.jpg
    youtube: 'n8G7eq0GlQs'
---

In early May 2020 a leak of Nintendo Source Code hit the popular image board 4chan. The material contained in this leak was obtained by a young hacker known as **Zammis Clark**.

More content was later uploaded throughout 2020 such as the Gigaleak which contained source code for many popular Nintendo classics.
{% include link-to-other-post.html post="/gigaleak" description="For more information on the original Gigaleak check out this post." %}


# The Uploads 
The material itself was uploaded twice, the first upload was named `unsorted.zip`. The problem with this archive was that it contained many files with the extension `,v` (comma intentional).

The archive was then re-uploaded with the CVS files fixed and called it "unsorted-nocvs.zip".

## What are CVS Files
Concurrent Versions System or CVS is a version control system which predates both Git and SVN and was based on the Revision Control System (RCS).

When the files were downloaded from the Nintendo server they were in a CVS repository. 

A CVS repository is file-based, where the version history, file contents and commit messages are stored in a `,v` file.

Thus the original leak of the files were not the raw files. Each file was wrapped in a container that had the additional version control information.

In order to view the actual file you would need to use a VCS or RCS command to get the latest version of the file.

## To CVS or not to CVS?
If you are just interested in browsing the files then it is highly recommended you download the noCVS version as it is not just a case of removing the `,v` from the filename, you need to use CVS or RCS commands to fix the files.

However the advantage of the CVS version is that it contains the commit history of the files which can be very interesting!

## Contents of the Archive
Whether you have the original or the NOCVS fixed version you will get 3 different tar files in the archive:
* rvl-factory.tar - 111.3MB (Not affected by CVS)
* depot.tar -  2.9GB
* depotrvl.tar - 533.9MB

---
# Depot.tar - iQue specifications by RouteFree
The name depot may be related to the network functionality of the iQue  known as the iQue Depot. 

The iQue Depot is the service that was later enchanted and used for the Nintendo Wii. 

## CVSROOT Folder
As the name implies this folder is for the configuration of the Concurrent Versions System. You can think of this folder as similar to the `.git` folder in more modern projects. Nothing interesting to see here.

## HW Folder - Kilopass XPM hardware Verilog Source
The HW folder contains hardware specifications for the Kilopass Super Permanent Memory or XPM. This is kept operate from the rest of the source as it is 3rd party technology licensed from Kilopass.

This is presumable the hardware used in the iQue Player to enable storing code and data on the chip in a way that makes it harder for reverse engineers to access the data.

There is basic Verilog source code in this folder along with official specifications all from Kilopass themselves.

### Data Sheets
The DataSheets folder contains three pdf files:
* KPS13_DS_V031605.pdf - DS013T (version 2005-03-17) Datasheet
* TMDG013T_V1.3.pdf - Testing Methodology Design Guidelines
* xpm_integration_guideline_RevF-06APR2005.pdf - Kilopass XPM IP Integration Guideline 

### GDS Folder
The `gds` folder contains more Verilog source files, such as the TSMC layout layer mapping (`Virtuoso_0.13um_Ver2.1a.1.map`) along with the GDS files used to describe it in a graphical form.

### Models Folder
The `models` folder contains the timing library Verilog source code in both ascii (*.lib) and binary compiled form (*.db). This also contains the Verilog source file `kp13ts64_r01w01_70c3p.v` which is the main code for the Kilopass `32kx8` XPM.

### Netlist Folder
The `netlist` folder contains the netlist specification in the CDL file format, this is a plain text document that specifies what each node is connected to in the circuit.

---
## RF Folder - Project BB
Not sure why this man directory is called `rf` but it contains most of the files for the iQue Player (also known as Project BB during development). This includes hardware source code (Verilog), software source, SDK and Documentation.

This folder contains two files at the root called `BBdefs` and `BBrules`, these are both common Make definitions that get included into Makefiles in the child folders. 

There is also an empty sub folder called `ecad` and it is unclear what this folder could be been used for but it is likely that it is hardware related and would stand for electronic computer-aided design.

### DOC folder - Documentation
The iQue player was codenamed the "BB" project (possibly reference to something in Chinese?) so much of the documentation references the system as the BB or BB Player.

### HW folder - iQue Player Hardware
This folder contains the Verilog source code and a bunch of software source code that is used to help verify that the hardware is working correctly.

### SW folder - iQue Software (SDK etc)
This folder contains the source code for software related to the iQue Player such as the SDK.

The top level of this folder is a bash script called `mklinks` which simply creates symbolic links to common folders so they can be used easily after they have been built.

#### BBPlayer folder

#### Linux Dev Root - iQue development environment for Linux

#### export_headers folder
This folder just contains C header files that are all for the iQue specific features such as security and Network features.

Header File Name | Description
---|---
aes.h | Defines functions such as `aes_HwKeyExpand`, `aes_SwEncrypt` and `aes_SwDecrypt`
aes_api.h | Defines structors and preprocessor directives along with functions such as `aesMakeKey`
bbcert.h | Project BB Certificate structures and preprocessor defines 
bbticket.h | BbTicket structure which is used to verify a user owns a game
bbtoolsapi.h | Handy tool functions such as `generateUnsignedBbCert`
bbmetadata.h | Metadata structors to hold data such as SHA has of games
bbreg.h | BB Player User Registration Data Structure
bbtypes.h | Common types for BB Player software
ultratypes.h | Standard N64 types from the Official N64 SDK

It also contains `libcryptoX86.a` which is the result of compiling the BBPlayer libcrypto library on X86 hardware and is used for the server code.

The executable `pkgbootrl` is whats called the "Bundle tool" and the source code is located in `rf/sw/bbplayer/tools/crls`.

#### Kits folder - Software Development Kits

The `N64 Sound Tools` folder holds the content distributed to Musicians as an addon to the official N64 SDK.

{% include link-to-other-post.html post="/n64sound" description="You can find out more about the N64 Sound Tools here." %}

The `n64kit` folder partially contains the Japanese version of the N64 Developers Kit Version 5.1 from 2000/02/10. A newer more complete version of this development kit is available on `ultra64.ca` so the contents won't be mentioned here.

{% include link-to-other-post.html post="/n64-sdk" description="For more information about the n64kit view this post." %}

For some reason it only contains the `nusys`, `nustd` and `misc` folders of the n64kit.

---
#### n64os20I folder - Internal N64 development tools
This folder contains the final version of the internal N64 development tools from SGI, an earlier version of this content was released as part of the "Oman Archive", so only the changes will be listed here.

{% include link-to-other-post.html post="/oman-archive" description="To view details about the files released in the oman archive check out this post." %}

---
### Verification folder
The Verification folder contains the source code for a tool called `aes` which is simply code to do simple Advanced Encryption Standard (AES) encryption and decryption.

For security the iQue Player only allows running signed and encrypted code, AES Cipher block chaining (CBC) is the encryption algorithm used for this. This tool specifically is used to test the encryption and decryption of binary content.

In fact this folder comes with two pre-compiled Windows executables:
* test_dec.exe - Test decryption
* test_enc.exe - Test encryption

The source code for these too executables are `test_dec.c` and `test_enc.c` respectively. 

The AES algorithms is also known as `rijndael` which is why most of the source code files start with that name as a prefix. These files come from the AES reference implementation by *Paulo Barreto* and *Vincent Rijmen*.

{% include link-to-other-site-text.html title="AES Reference Implementation" url="https://github.com/Leont/crypt-rijndael/tree/master/rijndael-vals/reference%20implementation" word1="crypt-rijndael" word2="on github" color1="wisteria" color2="midnight" description="You can find the AES Reference implementation code on Github." %}
 
The folder also contains `*.bin` files that can be used to test the algorithm, when you feed in `input.bin` into test_dec then `output.bin` and `deciphered.bin` should match exactly.

### Java folder
This folder is pretty boring in that it just contains a standard distribution of Apache Ant version 1.4.1. Apache Ant is basically a task runner written in Java, but it is unclear what they were using it for in the iQue project. 

Nothing is customised so we will not cover the contents here.

### LIB folder - BCP PLI library code
The Library folder contains the source code for two very similar libraries:
* RCP PLI (Reality Co-Processor PLI) - version 1.1
* BCP PLI (BB Co-Processor PLI) - version 1.2

PLI stands for Programming Language Interface and refers to the Verilog PLI as these libraries are used to communicate with the verily models of the Reality Co-processor (RCP or BCP).

The RCP version is presumably from SGI as part of the original Ultra 64 project, but it was not previously released in the "Oman Archive". It requires an SGI IRIX workstation to compile.

The code in these libraries seems to be related to interprocess communication (IPC) for managing shared data in the system.

The BCP version of the library is a fork of the RCP library with added support to be able to compile on linux. 

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Changes" date="Between RCP and BCP" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="plusarg.c" desc="change on line 81 - just changes hard coded 4 to hard coded 1, something to do with the command line arguments"></div>
      <div class="rr-info-gen" badge="simipc.h" desc="BCP has additional preprocessor defines such as `BCP_COMBINE_XZ` in an additional 'Broadon Extension' section at the end"></div>
 <div class="rr-info-gen" badge="socket.c" desc="Adds some new code in `ifndef __sgi__` blocks to make it run in the linux toolchain" ></div>
 <div class="rr-info-gen" badge="rdram.c" desc="seems to have been removed from the RCP version" ></div>
    </ul>
</div>

Each version contains a `.tab` file (`rcppli.tab` and `bcppli.tab`) which is a verilog file [^2] and has the form:
```
$my_function_name call=CalledByThis size=32 maxargs=1 roparm=ffffffff nocallback 
```

If you build the libraries you will get a static library output (`libbcppli.a` and `librcppli.a`).

Both the resulting library files and tab files are used in the the Behavioural Simulator code (located in rf/hw/chip).


---
# References
[^1]: [Revision Control System - Wikipedia](https://en.wikipedia.org/wiki/Revision_Control_System#Second_generation)
[^2]: Principles of Verilog PLI By Swapnajit Mittra page 6
