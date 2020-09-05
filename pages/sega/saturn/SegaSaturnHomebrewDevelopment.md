---
layout: post
tags:
- homebrew
- saturn
- sega
title: Sega Saturn Homebrew Development
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn Homebrew Development.jpg
twitterimage: http://www.retroreversing.com/public/images/saturn/Sega Saturn Homebrew Development.jpg
permalink: /sega-saturn-homebrew-development/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Homebrew Development
    url: #
recommend: saturn
editlink: /sega/saturn/SegaSaturnHomebrewDevelopment.md
updatedAt: '2020-06-27'
---
There are multiple ways to create your own Homebrew for the Sega Saturn, one is to use the official SDK but a much better way is to use one of the open-source modern development kits available. 

# libYaul
LibYaul is an open source SDK based on GCC 8.2.0 and is supported on Windows, Linux and MacOSX, although I couldn't fully run it on OSX but the toolchain executables themselves build fine.

## Basic Specification of this Toolchain
*Compiler name* - GCC
*Compiler Version* - 8.2.0

## Initial Setup
We need to clone the repository and initialise the submodules before building the SDK.
```bash
git clone https://github.com/ijacquez/libyaul.git
cd libyaul
cp yaul.env.in .yaul.env
source .yaul.env
git submodule init
git submodule update -f --recursive
```

### MacOSX Specific Initial Setup
For Mac OSX make sure you have brew install and run the follopwing in a new terminal window:
```bash
brew install make gcc wget unzip zip p7zip diffutils dos2unix gpatch
```

## Building the toolchain
Before building the rest of the SDK you have a choice, you can either downloads the pre-build SDK if its available for your platform or compile it yourself. Honestly I would just download the pre-built version if OSX was supported but sadly I had to go through these steps:
```
cd build-scripts
cp -v config{.in,}
./build-compiler
```

### How to fix gpq missing issue
If it fails with missing dependencies such as `gpg` then use your platforms package manager to install it, for example on OSX:
```
brew install gpg md5sha1sum
```

### How to fix isl function missing issue
If it fails with errors about `isl` functions missing then you will need to apply this patch by finding the downloaded gcc source (normally in tmp) and using this diff:
```diff
--- .../gcc/graphite.h 2018-01-03 11:03:58.000000000 +0000
+++ .../gcc/graphite.h 2018-07-29 17:42:55.836121000 +0000
@@ -37,6 +37,8 @@
 #include <isl/schedule.h>
 #include <isl/ast_build.h>
 #include <isl/schedule_node.h>
+#include <isl/id.h>
+#include <isl/space.h>
```
This fix is from the official GCC Bugzilla [86724 – Compilation error with new isl 0.20 (missing includes)](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=86724)

---
## Lets build the rest of the SDK
To build run the following command:
```bash
SILENT=1 make install-release
```
Unfortunately I couldn't get this to work on OSX but for anyone interested in getting further I have added some notes below.

### Common Problems

### env.mk:12: *** Path YAUL_INSTALL_ROOT (install root directory) does not exist.  Stop.
Strangely even when you have clearly defined `$YAUL_INSTALL_ROOT` to a valid non-relative path such as `/opt/tool-chains/sh2eb-elf` it will still give this error.

Even running mkdir to make sure it exists doesn't help but you can try if you want:
```bash
mkdir -p $YAUL_INSTALL_ROOT
```

Not sure how to fix this yet, apparent from commenting out the check for this in `env.mk`. Or just changing the `ifneq` to `ifeq`.

### sh2eb-elf tool-chain has not been installed properly
If you get the following error:
```
/opt/tool-chains/sh2eb-elf/bin/sh2eb-elf-as
sh2eb-elf tool-chain has not been installed properly (see build-scripts/)
make[1]: *** [check-tool-chain] Error 1
make: *** [/Users/alasdairmorrison/libyaul/build] Error 2
```
Then you need to make sure you have followed the Toolchain build instructions above and it is able to find the environment variables.
