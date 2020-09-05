---
layout: post
tags: 
- switch
- fileformats
title: Nintendo Switch File Formats
image:  /public/images/switch/Nintendo Switch File Formats.jpg
twitterimage: https://www.retroreversing.com/public/images/switch/Nintendo Switch File Formats.jpg
thumbnail: /public/consoles/Nintendo Switch.png
permalink: /SwitchFileFormats
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Switch
    url: /switch
  - name: Nintendo Switch File Formats
    url: #
recommend: 
- switch
- fileformats
editlink: /switch/SwitchFileFormats.md
updatedAt: '2020-09-05'
---
The Nintendo Switch development scene has introduced a lot of new file formats, some completely new and others are extensions of what had been used on the Wii and Wii U.

# Full Game Files
Full Game files come in two standard formats depending if they are game cartridges (XCI) or EShop downloads (NSP).

## XCI - NX Cart Images
The XCI format was created as a way to dump entire game cartridges to a single file.

XCI files are encrypted using the firmware specific master key and so can be run on any switch, just like game cartridges [^2].

### Creating XCI Files
{% include link-to-other-site.html title="NXDumpTool - Dump your Games to XCI" url="https://github.com/DarkMatterCore/nxdumptool" image="https://github.com/DarkMatterCore/nxdumptool/raw/master/icon.jpg" description="The recommended way of creating XCI files is to use the NX Dump Tool available on GitHub"  %}

You can also dump game cartridges if you are using SX OS using the homebrew app `SX Dumper`.

### Extracting XCI files
As XCI files are just a container for individual NCA files you can extract the contents of an XCI file with a tool called `hactool`.

Here is an example
```
./hactool --outdir ./output -x -t xci yourgame.xci
```
This will create 4 folders in the output directory:

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Normal" date="Unknown and sometimes empty" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="*.NCA" desc="NCA Files for title image and details" ></div>
      <div class="rr-info-gen" badge="*.CNMT" desc="Meta Data Files for each NCA" ></div>
    </ul>
</div>

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Secure" date="Contains Game Data" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="*.NCA" desc="Largest NCA contains game executable" ></div>
      <div class="rr-info-gen" badge="*.CNMT" desc="Meta Data Files for each NCA" ></div>
      <div class="rr-info-gen" badge="*.CERT" desc="Certificate File for encryption" ></div>
      <div class="rr-info-gen" badge="*.TIK" desc="Ticket File for encryption" ></div>
    </ul>
</div>


<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Update" date="Contains Game Patches and OS Updates" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="*.NCA" desc="Probably contains Switch OS updates" ></div>
      <div class="rr-info-gen" badge="*.CNMT" desc="Meta Data Files for each NCA" ></div>
    </ul>
</div>

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Logo" date="Nintendo logos (sometimes empty)" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="StartupMovie.gif" desc="Animated switch logo shown at the start of every game" ></div>
      <div class="rr-info-gen" badge="NintendoLogo.png" desc="Static Nintendo logo shown at the start of every game" ></div>
    </ul>
</div>

For more information about the extracted files see the section on NCA files.

### Cutting XCI files
As XCI files are a 1:1 copy of the data stored on the eMMC chip of a game cartridge it can also contain blank space at the end of the file if the game is smaller than the eMMC chip's capacity.

{% include link-to-other-site-text.html title="XCI-Cutter - A tool to remove unused space from XCI-Dumps" url="https://github.com/Destiny1984/XCI-Cutter" word1="XCI-Cutter" word2="XCI-Cutter" color1="wisteria" color2="midnight" description="You can remove this extra space with a tool such as XCI-Cutter" number="2"  %}

### XCI File Format
{% include link-to-other-site-text.html title="XCI File Format Spec" url="https://switchbrew.org/w/index.php?title=Gamecard_Format" word1="XCI Format" word2="Gamecard" color1="belize" color2="midnight" description="If you are interested in the internals of the file format, the site `SwitchBrew` has an excellent page with what each byte represents" number="3"  %}

---

## NSP - Nintendo Submission Package
NSP files is the format for games downloaded from the Switch EShop, similar to .apk on Android or .app on iOS.

NSP files are encrypted using master keys and rightsId keys and are encrypted for a specific user [^2].

### Creating NSP Files
The recommended way of creating NSP files is to use the `NX Dump Tool` homebrew available on GitHub.

{% include link-to-other-site.html title="NXDumpTool - Dump your Games to NSP" url="https://github.com/DarkMatterCore/nxdumptool" image="https://github.com/DarkMatterCore/nxdumptool/raw/master/icon.jpg" description="The recommended way of creating NSP files is to use the NX Dump Tool available on GitHub"  %}

Even although NSP is the format for Eshop games the application `NX Dump Tool` allows you to dump cartridges as NSP files.

---
# Archive File Formats
These files store part of the game and are normally included inside other file formats.

## NCA - Nintendo Content Archives
NCA files are compressed archives (think zip) that contain game data, normally multiple NCA files can be extracted from a single XCI or NSP file.

There are multiple types of NCA file depending on what they contain:
* EXEFS - Executable file system (code)
* ROMFS - Read Only file system (data)
* PFS0 - P??? File system (data)

### EXEFS (Executable filesystem partition)
ExeFS stands for Executable filesystem and is part of the largest Nintendo Content Archive (NCA) file for a game. It is a file system that contains Nintendo Switch executables known as NSO's [^1].

There are a few files contains in the executable filesystem that we will cover in this section.

If you want to mod a game to change the actual behaviour (executable code) then this is the where you start, there are also multiple ways to apply an ExeFS mod which will be covered in another section.

### CNMT (Content Meta Data) (*.cnmt.nca)
CNMT files are small meta data files that are inside an XCI or NSP archive.

{% include link-to-other-site-text.html title="CNMT File Format Spec" url="https://switchbrew.org/wiki/CNMT" word1="CNMT" word2="CNMT" color1="belize" color2="midnight" description="If you are interested in the internals of the file format, the site `SwitchBrew` has an excellent page with what each byte represents" number="5"  %}

---
# EXEFS File Formats
This section covers the game code which is all stored in the executable Filesystem partition or EXEFS. 

## NPDM (*.npdm)
The NPDM file contains information about the game for example the title and services that the game is allowed to access.

## Nintendo Switch Object (NSO) Files
NSO files are compiled Nintendo Switch executable code and can only be run if they are in the EXEFS partition of the game. These are compile from source files, normally from the official Nintendo Switch Software Development Kit.


### rtld (Runtime Link editor NSO executable)
Basically the runtime Link editor executable is the first code that runs when a game is started. Its job is to manage the other executable code modules (NSO files) in memory.

{% include link-to-other-site-text.html title="Runtime Link Editor (RTLD)" url="https://switchbrew.org/wiki/Rtld" word1="RTLD" word2="RTLD" color1="green" color2="midnight" description="If you are interested in the internals of how the RTLD works, the site `SwitchBrew` has an excellent page" number="6"  %}

### main (NSO executable)
There is a `main` NSO executable file in the EXEFS partition, this as its name suggests is where the main game code was compiled.

### sdk (NSO executable)
There is a `sdk` executable in the EXEFS portion, this is presumably the build of the official Nintendo Switch SDK.

### subsdk's (nso executable)
It is still unclear what the sub SDK executable are, my guess would be they are dynamic libraries of code. It is possible these are optional libraries bundled with the official Switch SDK.

For example:
* subsdk0
* subsdk1

---
# Game Engine File Formats

## Archive Files

### SZS (ARMS & Mario Kart)
The SZS file format is used in many of Nintendos first party games on the switch such as `ARMS` and actually comes from the Wii version of Mario Kart. It is an archive file that compresses game assets such as Models and Textures [^3].

{% include link-to-other-site-text.html title="SZS Modifier" url="http://www.chadsoft.co.uk/wiicoder/" word1="SZS" word2="SZS" color1="green" color2="midnight" description="ChadSoft has created a tool to modify SZS files aptly called the SZS Modifier" number="6"  %}



---
# References
[^1]: [RELEASE - ExeFSManager - A Simple ExeFS Manager GBAtemp.net - The Independent Video Game Community](https://gbatemp.net/threads/exefsmanager-a-simple-exefs-manager.526794/)
[^2]: [differences between nsp and xci files? GBAtemp.net - The Independent Video Game Community](https://gbatemp.net/threads/differences-between-nsp-and-xci-files.511776/)
[^3]: [CTools & SZS Modifier](http://www.chadsoft.co.uk/wiicoder/)
