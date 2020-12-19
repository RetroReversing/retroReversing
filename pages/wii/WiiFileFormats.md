---
layout: post
tags: 
- wii
- fileformats
title: Wii File Formats
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/images/wii/Wii File Formats.jpg
twitterimage: https://www.retroreversing.com/public/images/wii/Wii File Formats.jpg
permalink: /wii-file-formats
breadcrumbs:
  - name: Home
    url: /
  - name: Wii
    url: /wii
  - name: Wii File Formats
    url: #
recommend: 
- wii
- fileformats
editlink: ./wii/WiiFileFormats.md
updatedAt: '2020-11-25'
excerpt: Find out about the most common Wii File formats in this post
---
<section class="postSection">
    <img src="/public/images/wii/Wii File Formats.jpg" class="wow slideInLeft postImage" />

 <div markdown="1">
When reverse engineering Wii games it is very important to know the file formats that were commonly used in game development.

Many of the asset formats in this document are from the NintendoWare for Revolution toolset [^1].
 </div>
</section> 


# ISO Files
ISO files are a standard format for distributing the contents of a physical disc as a single file. If you want to back up your Wii game discs this is one of the formats you may want to use.

ISO Images can be used in most Gamecube emulators such as Dolphin.

---
# WAD files
Not to be confused with Doom WAD, WAD files for the wii are applications that can be installed to the Wii's NAND.

## ShowMiiWads
The best way to see the contents of a WAD file is to use the .Net tool called ShowMiiWads.

## How to extract Wii Wads into .app files
First you need to use **wii.cs** tools called `WadMii.exe` (you can run this in wine on MacOSX or Linux) and point it at the .wad file and give it an extract location.

This will generate a bunch of .app files, you will notice each of these .app files has the file header of "55 AA 38 2D" or U.8-.

---
# APP files
When you have extracted a WAD you will get a bunch of .APP files, these are archives which can be extracted with tools such as **ARCTool** or **U8Mii**.

## How to extract .app files
You can use a GUI tool such as `U8Mii.exe` or a command line interface such as `ARCTool`.

### With Wiimms SZS Tools
You can download Wiimms SZS Tools here: https://szs.wiimm.de/download.html

Here is an example of extracting a U8 archive:

```
wszst x ./lineattack/00000002.app
```

This tool can also be used to manipulate a lot of other file formats, such as TPL and BRRES.

### With U8Mii
U8Mii is a windows executable that has a GUI for opening App files, on windows you should be able to double click it but on Linux or Mac you will need to use WINE like so:
```
wine U8Mii.exe 
```

### With ARC Tool
You can download ARCTool here: <a href="http://wiibrew.org/wiki/ARCTool">http://wiibrew.org/wiki/ARCTool</a>

here is an example of extracting an app from the Line Attack game:
```
python ARCTool.py ./lineattack/00000002.app
```

---
# Executable file formats
There are two main executable file formats for the Nintendo Wii:
* **DOL** - Static executable (same as gamecube format)
* **REL** - Relocatable executable library (similar to a DLL/DYLIB)


---
# 2D Asset Formats
File formats for 2D assets include:
* **BRLAN** (Binary Revolution Layout AnimatioN) - Wii format for title animations (Binary)
* **BRLYT** (Binary Revolution LaYouT) - Wii format for layout
* **TPL** (Texture Palette Library) - Wii format for texture palettes (colours)
* **THP** - Video + Audio content
* **RLAN** (Revolution Layout AnimatioN) - Wii format for title animations (XML)
* **RLYT** (Binary Revolution LaYouT) - Wii format for layout (XML)

The following formats are used for particle effects:
* **EFLS** - Particle Effect List
* **BREFF** - Binary Particle effects
* **BREFT** - Binary Particle textures

---
# 3D Asset Formats
3D assets for the Nintendo Wii come in three different types of formats, the plain text XML version, the raw version and the binary version. They normally have the same name but the binary version has a **B** at the start of the name.

The **R** letter at the start (or after the B) refers to the Wii codename known as Revolution.

The Binary file formats for 3D assets include:
* **BRRES** - Binary Resource Pack (archive of assets)
* **BRANM** - Binary 3D Animation
* **BRMDL** - Binary 3D Model
* **BRTEX** - Binary Texture
* **BRPLT** - Binary Palette
* **BRCHA** - Binary Bone animation
* **BRTSA** - Binary Texture Animation
* **BRSHA** - Binary Vertex animation
* **BRVIA** - Binary Visibility animation
* **BRTPA** - Binary Texture Pattern
* **BRCLA** - Binary Colour Animation
* **BRSCA** - Binary Scene Settings

The raw file formats for 3D assets include:
* **MDL0** - Raw 3D Model
* **TEX0** - Raw Texture
* **PLT0** - Raw Palette
* **CHR0** - Raw Bone Animation
* **SRT0** - Raw Texture Animation
* **SHP0** - Raw Vertex Animation
* **VIS0** - Raw Visibility Animation
* **PAT0** - Raw Texture Pattern
* **CLR0** - Raw Colour Animation
* **SCN0** - Raw Scene Settings

The Source XML file formats for 3D assets include:
* **RMDL** - Source 3D Model
* **RTEX** - Source Texture
* **RPLT** - Source Palette
* **RCHA** - Source Bone Animation
* **RTSA** - Source Texture Animation
* **RSHA** - Source Vertex Animation
* **RVIA** - Source Visibility Animation
* **RTPA** - Source Texture Pattern
* **RCLA** - Source Colour Animation
* **RSCA** - Source Scene Settings

---
# Audio formats
The binary audio formats for Wii are:
* **BRSTM** - Audio Stream
* **BCSTM** - Audio Stream
* **BFSTM** - Audio Stream
* **BRSAR** - Sound Archive
* **BRWSD** - RSAR Sound file
* **BRBNK** - Sound Bank file
* **BRSEQ** - Sound Sequence file


---
# Other Archive formats
* **BRRES** - Common archive format for Wii assets (models etc)
* **PAC**
* **PCS** - PCS Compressed archive
* **ARC** - Standard Archive
* **RARC**
* **MRG** - Resource Group
* **MRGC** - Compressed Resource Group
* **SZS** - YAZ0 compressed file

---
# References
[^1]: [brawltools/SupportedFilesHandler.cs at master · libertyernie/brawltools · GitHub](https://github.com/libertyernie/brawltools/blob/master/BrawlLib/SSBB/SupportedFilesHandler.cs)
