---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Tool Source Code
category: gba
permalink: /game-boy-advance-tool-source-code
redirect_from:
  - /game-boy-advance-tool-source-code/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  Game Boy Advance Tool Source Code
    url: #
recommend: 
- sdk
- gba
editlink: /consoles/gba/GBAToolSourceCode.md
---

# Introduction
In the Game Boy Advance SDK Version 3.0 the source code for a variety of tools are available to learn from and modify. These tools all have a command line interface (CLI) and are targeted for the Windows Operating System. They even come with Visual C++ 5.0 project files to make it really easy to build and extend, if you can still find a working version of VC++ 5.0 for your PC.

## What tools have source code available?
The GBA development tools with source code available are:

Tool Name | Description
---|---
act2agb | Converts an Adobe Photoshop .ACT (Adobe Color Table) file to a GBA Palette in C source code form
agbparts | Converts a bitmap image into 8x8 pixel parts useful for an optimized tileset or even sprites
bin2h | generates a C header file from the Binary result of objcopy
bmp2agb | Converts BMP images to either binary or text with optional compression
bmp2bin | Converts BMP files to binary formats .imb (Image Binary) and .plb (Palette Binary)
bmp2map | Converts BMP files to C-source code based on 8x8 pixel tiles
bmpgrid | Splits up a Bitmap into tiles/partitions based on input width/height (minimum 8x8)
bmpred | Reduces the colors of a BMP image using a specified palette 
sgi2bmp | Converts an SGI format image into a BMP format image

---
## What other information is included?
Along with a directory for each of the tools mentioned above, there are also a few files and directories that provide further information:
* **doc** - Three text documents that provide information about the tools
* **etc** - Empty folder
* **include** - Contains the C-header files for the common tool library (libmagbx)
* **lib** - contains the pre-build library libmagbx.lib
* **libsrc** - contains the source code for libmagbx
* **readme.txt** - brief notes on how to setup Visual C++ to build the tools

---
## What is libMagbX?
It seems to be a library containing common functionality used across multiple development tools for GBA development, as most of the tools operate on images there is common code to read and write image formats.

### Why is the library called libmagbX?
So the first 3 letters **lib** is a common prefix for statically compiled libraries, the next letter M is unknown but it could be short for iMage since this library mainly handles image conversions. The next 3 letters AGB stands for Advanced Game Boy but the last letter X is unknown.

---
# Tool Source Code
Each individual tool has its own source code folder, however the interesting logic is all in the common library known as **libmagbX**, all the folders contain are Visual C++ project files and a main.cpp file that calls the functionality from the common library.

## Common files in each tool folder
Since each tool has its own Visual C++ project, there are a few common files that you will see across the codebase:
* *.dsp - Microsoft Developer Studio Project File
* *.dsw - Microsoft Developer Studio Workspace File
* *.ncb - Non-compiled Browse file - contains debug symbols used by Intellisense
* *.plg - Most recent Project Build Log in HTML format
* *.rc - Resource Script - contains information embedded in the tool executable

## act2agb
This folder contains contains the source code for the tool that converts Adobe Photoshop Palette files into GBA compatible palette files. 

There is not much of interest here as all the main.cpp source file itself does is:
* Usage Information printing to Command Line
* Parsing of command line arguments
* Calling of **Palette.LoadACT** from the **libmagbX** library
* writing out the result to a C source file

So the actual processing of the ACT file format and the conversion to GBA format is all in the **Palette** class of the **libmagbX** library.

File Name | Extension | Description
---|---|---
act2agb | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | Just contains main function that shows the usage information, parses the arguments and calls the library functions
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## Agbparts (agbparts)
This folder contains 

File Name | Extension | Description
---|---|---
agbparts | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## Bin2h (bin2h)
This folder contains 

File Name | Extension | Description
---|---|---
bin2h | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## BMP to bin (bmp2bin)
This folder contains the source code to **bmp2bin** which is a simple tool that converts a single BMP image into a binary .IMB file that can be included inside a GBA ROM.

File Name | Extension | Description
---|---|---
bmp2bin | .aps, .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## BMP to map (bmp2map)
This folder contains the source code for **bmp2map** which converts a BMP image into a C Source code file that can be compiled into a GBA ROM. It splits the single BMP image into 8x8 tiles that can be drawn using GBA functions.

File Name | Extension | Description
---|---|---
bmp2map | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## Split BMP into grid of images (bmpgrid)
This folder contains the source code for **bmpgrid** a command line tool that converts a single BMP into multiple images based on the width and height of a tile.

File Name | Extension | Description
---|---|---
BmpGrid | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files
main | .cpp | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)

---
## Bmp color reducer (bmpred)
This folder contains the source code for a Command Line tool known as **bmpred** that reduces the number of unique colors inside a BMP image, useful for getting the BMP into a good state to display on the GBA.

File Name | Extension | Description
---|---|---
bmpred | .dsp, .dsw, .ncb, .opt, .plg | see common files section for description of the files
colorspace | .cpp, .h | 
main | .cpp | 
reduction | .cpp | 
res | .rc | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)


{% capture card_1_1_items %}
- u32|||GetNearestPalette(const Palette&_Pal,const Color&_C,u16 offset)
{% endcapture %}

{% capture card_1_2_items %}
- Picture|||CreateReductionPicture(const HPicture&_Hpic,const Palette&_Pal,u16 offset)
- void|||usage()
- |||__USING__MAGBX
{% endcapture %}

{% capture card_1_3_items %}
- __USING__MAGBX u32|||GetNearestPalette(const Palette&_Pal,const Color&_C,u16 offset)
- Picture|||CreateReductionPicture(const HPicture&_Hpic,const Palette&_Pal,u16 offset)
{% endcapture %}

{% capture section_1_cards %}
{% include source-code-card.html title="colorspace.cpp" items=card_1_1_items functions="1" variables="0" lines="294" %}
{% include source-code-card.html title="main.cpp" items=card_1_2_items functions="2" variables="1" lines="397" %}
{% include source-code-card.html title="reduction.cpp" items=card_1_3_items functions="2" variables="0" lines="86" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_1_cards %}

---
## SGI to BMP converter (sgi2bmp)
This folder contains the source code for a tool that converts images from the SGI Image format to a standard BMP image format. This tool can be quite useful for any GBA or N64 development that was done on SGI machines which used the SGI image format.

File Name | Extension | Description
---|---|---
GlobalFnc | .cpp, .h | 
RgbLoader | .cpp, .h | 
main | .cpp | 
pic_create | .cpp, .h | 
resource | .h | Include file for declaring the default macros from Visual C++ 5.0 (Nothing added by Nintendo)
sgi2bmp | .dsp, .dsw, .ncb, .opt, .plg, .rc | see common files section for description of the files


{% capture card_2_1_items %}
- void|||setByte|||(u8,u8**)
- void|||setWord|||(u16,u8**)
- void|||setDword|||(u32,u8**)
- void|||getByte|||(u8*,u8**)
- void|||getChar|||(char*,u8**)
- void|||getWord|||(u16*,u8**)
- void|||getShort|||(short*,u8**)
- void|||getDword|||(u32*,u8**)
- void|||getLong|||(long*,u8**)
{% endcapture %}

{% capture card_2_2_items %}
- DELIVER|||sgiCreateDeliver(unsigned long width,unsigned long height)
- bool|||LoadHeader(IMAGEHEADER *pimh,MCFile *pfile)
- BOOL|||sgiCreateImage(DELIVER *pdlv,IMAGEHEADER *pimh,unsigned char *pSrc)
- BOOL WINAPI|||tvIsExtension(const char *pchExt)
- DELIVER *WINAPI|||tvImageToTexture(const char *pchFileName)
- BOOL|||sgiCreateImage(DELIVER *pdlv,IMAGEHEADER *pimh,unsigned char *pSrc)
- DELIVER|||sgiCreateDeliver(unsigned long width,unsigned long height)
- bool|||LoadHeader(IMAGEHEADER *pimh,MCFile *pfile)
{% endcapture %}

{% capture card_2_3_items %}
- void|||usage()
{% endcapture %}

{% capture card_2_4_items %}
- |||__USING__MAGBX
- bool|||sgiLoadHeader(IMAGEHEADER&imh,std::ifstream&in)
- bool|||sgiCreateImage(HPicture&pic,IMAGEHEADER&imh,unsigned char *pSrc,char flag,short tp,Color&color)
- HPicture|||sgiImageLoad(FileName&filename,char flag,short tp,Color&color)
- static bool|||sgiCreateImage(HPicture&pic,IMAGEHEADER&imh,unsigned char *pSrc,char flag,short tp,Color&bkcolor)
{% endcapture %}

{% capture section_2_cards %}
{% include source-code-card.html title="GlobalFnc.cpp" items=card_2_1_items functions="9" variables="0" lines="82" %}
{% include source-code-card.html title="RgbLoader.cpp" items=card_2_2_items functions="8" variables="0" lines="414" %}
{% include source-code-card.html title="main.cpp" items=card_2_3_items functions="1" variables="0" lines="105" %}
{% include source-code-card.html title="pic_create.cpp" items=card_2_4_items functions="4" variables="1" lines="335" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_2_cards %}

---
# Documentation (doc)
This folder contains three text documents that describe the source code for all the tools, including the shared library and the use of the Standard Template Library (STL)

The three text files are as follows:
* library.txt  - 
* prevcl.txt - 
* tools.txt - 


---
# C Header files for libMagbX (include)
This folder contains all the C header files used by each of the tools in order to describe the functionality of the common library. This allows each tool to use common functions from the libMagbX, reducing the need for duplicate code in each tool.

File Name | Extension | Description
---|---|---
agbtypes | .h | Include file for declaring 
angle | .h | Include file for declaring 
bmpstruct | .h | Include file for declaring 
buffer | .h | Include file for declaring 
char16set | .h | Include file for declaring 
char256set | .h | Include file for declaring 
character | .h | Include file for declaring 
character16 | .h | Include file for declaring 
character256 | .h | Include file for declaring 
charset | .h | Include file for declaring 
color | .h | Include file for declaring 
filename | .h | Include file for declaring 
hpicture | .h | Include file for declaring 
image | .h | Include file for declaring 
map | .h | Include file for declaring 
map16 | .h | Include file for declaring 
map256 | .h | Include file for declaring 
mapsrimage | .h | Include file for declaring 
maptextimage | .h | Include file for declaring 
maptextunit | .h | Include file for declaring 
palette | .h | Include file for declaring 
pathname | .h | Include file for declaring 
picture | .h | Include file for declaring 
util | .h | Include file for declaring 


{% capture card_3_1_items %}

{% endcapture %}

{% capture card_3_2_items %}
- _AGB_ANGLE_PIE|||(3.14159265359f)
- double const|||m_rad2agb
- double const|||m_agb2rad
{% endcapture %}

{% capture card_3_3_items %}
- BMP_COMP_RGB|||(0)
- BMP_COMP_RLE8|||(1)
- BMP_COMP_RLE4|||(2)
- BMP_COMP_BITFIELDS|||(3)
{% endcapture %}

{% capture card_3_4_items %}

{% endcapture %}

{% capture card_3_5_items %}

{% endcapture %}

{% capture card_3_6_items %}

{% endcapture %}

{% capture card_3_7_items %}

{% endcapture %}

{% capture card_3_8_items %}

{% endcapture %}

{% capture card_3_9_items %}

{% endcapture %}

{% capture card_3_10_items %}

{% endcapture %}

{% capture card_3_11_items %}
- bool|||operator==|||(Color const&,Color const&)
- bool|||operator!=|||(Color const&,Color const&)
{% endcapture %}

{% capture card_3_12_items %}

{% endcapture %}

{% capture card_3_13_items %}

{% endcapture %}

{% capture card_3_14_items %}

{% endcapture %}

{% capture card_3_15_items %}

{% endcapture %}

{% capture card_3_16_items %}

{% endcapture %}

{% capture card_3_17_items %}

{% endcapture %}

{% capture card_3_18_items %}
- MT_NONE_FLIP|||(0)
- MT_H_FLIP|||(1)
- MT_V_FLIP|||(2)
- MT_HV_FLIP|||(3)
- bool|||operator==|||(MapTextUnit const&,MapTextUnit const&)
- bool|||operator!=|||(MapTextUnit const&,MapTextUnit const&)
- bool|||operator<|||(MapTextUnit const&,MapTextUnit const&)
- bool|||operator>|||(MapTextUnit const&,MapTextUnit const&)
- bool|||operator<=|||(MapTextUnit const&,MapTextUnit const&)
- bool|||operator>=|||(MapTextUnit const&,MapTextUnit const&)
{% endcapture %}

{% capture card_3_19_items %}

{% endcapture %}

{% capture card_3_20_items %}

{% endcapture %}

{% capture card_3_21_items %}
- void|||_itoa_c_hex(char val,char *str)
- inline _Ty|||Min(const _Ty&_L,const _Ty&_R){ return (_L
- inline _Ty|||Max(const _Ty&_L,const _Ty&_R){ return (_L > _R )? _L : _R ; }
{% endcapture %}

{% capture section_3_cards %}
{% include source-code-card.html title="agbtypes.h" items=card_3_1_items functions="0" variables="0" lines="154" %}
{% include source-code-card.html title="angle.h" items=card_3_2_items functions="0" variables="2" lines="62" %}
{% include source-code-card.html title="bmpstruct.h" items=card_3_3_items functions="0" variables="0" lines="60" %}
{% include source-code-card.html title="buffer.h" items=card_3_4_items functions="0" variables="0" lines="81" %}
{% include source-code-card.html title="char16set.h" items=card_3_5_items functions="0" variables="0" lines="49" %}
{% include source-code-card.html title="char256set.h" items=card_3_6_items functions="0" variables="0" lines="50" %}
{% include source-code-card.html title="character.h" items=card_3_7_items functions="0" variables="0" lines="138" %}
{% include source-code-card.html title="character16.h" items=card_3_8_items functions="0" variables="0" lines="40" %}
{% include source-code-card.html title="character256.h" items=card_3_9_items functions="0" variables="0" lines="25" %}
{% include source-code-card.html title="charset.h" items=card_3_10_items functions="0" variables="0" lines="73" %}
{% include source-code-card.html title="color.h" items=card_3_11_items functions="2" variables="0" lines="60" %}
{% include source-code-card.html title="hpicture.h" items=card_3_12_items functions="0" variables="0" lines="108" %}
{% include source-code-card.html title="map.h" items=card_3_13_items functions="0" variables="0" lines="78" %}
{% include source-code-card.html title="map16.h" items=card_3_14_items functions="0" variables="0" lines="52" %}
{% include source-code-card.html title="map256.h" items=card_3_15_items functions="0" variables="0" lines="49" %}
{% include source-code-card.html title="mapsrimage.h" items=card_3_16_items functions="0" variables="0" lines="45" %}
{% include source-code-card.html title="maptextimage.h" items=card_3_17_items functions="0" variables="0" lines="96" %}
{% include source-code-card.html title="maptextunit.h" items=card_3_18_items functions="6" variables="0" lines="57" %}
{% include source-code-card.html title="palette.h" items=card_3_19_items functions="0" variables="0" lines="101" %}
{% include source-code-card.html title="picture.h" items=card_3_20_items functions="0" variables="0" lines="128" %}
{% include source-code-card.html title="util.h" items=card_3_21_items functions="3" variables="0" lines="154" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_3_cards %}


---
# Library Source code (libmagbX)
This folder contains the actual C++ source code for the libMagbX library that is used by each of the development tools listed at the start of this page. Most of the functionality of this library is Image manipulation.

File Name | Extension | Description
---|---|---
angle | .cpp | 
buffer | .cpp | 
char16set | .cpp | 
char256set | .cpp | 
character | .cpp | 
character16 | .cpp | 
charset | .cpp | 
color | .cpp | 
filename | .cpp | 
hpicture | .cpp | 
image | .cpp | 
libsrc | .dep, .dsp, .dsw, .ncb, .opt, .plg | see common files section for description of the files
map | .cpp | 
map16 | .cpp | 
map256 | .cpp | 
mapsrimage | .cpp | 
maptextimage | .cpp | 
maptextunit | .cpp | 
palette | .cpp | Contains functions to parse Adobe ACT files and convert to GBA format palettes
pathname | .cpp | 
picture | .cpp | 
util | .cpp | 


{% capture card_4_1_items %}
- bool|||operator==(const Color&_L,const Color&_R)
- bool|||operator!
{% endcapture %}

{% capture card_4_2_items %}
- FileName|||operator+(const PathName&_L,const FileName&_R)
{% endcapture %}

{% capture card_4_3_items %}
- __USING__MAGBX u8|||create_data_array_from_image4b(const Image&image)
- u8|||create_data_array_from_image8b(const Image&image)
- u16|||create_data_array_from_image16b(const Image&image)
- u32|||create_data_array_from_image32b(const Image&image)
- u32|||get_array_count_4b(const Image&image)
- u32|||get_array_count_8b(const Image&image)
- u32|||get_array_count_16b(const Image&image)
- u32|||get_array_count_32b(const Image&image)
- u8|||create_data_array_from_image4b(const Image&image)
- u8|||create_data_array_from_image8b(const Image&image)
- u16|||create_data_array_from_image16b(const Image&image)
- u32|||create_data_array_from_image32b(const Image&image)
- u32|||get_array_count_4b(const Image&image)
- u32|||get_array_count_8b(const Image&image)
- u32|||get_array_count_16b(const Image&image)
- u32|||get_array_count_32b(const Image&image)
{% endcapture %}

{% capture card_4_4_items %}
- bool|||operator==(const MapTextUnit&_L,const MapTextUnit&_R)
- bool|||operator!
{% endcapture %}

{% capture card_4_5_items %}
- void|||_itoa_c_hex(char val,char *str)
{% endcapture %}

{% capture section_4_cards %}
{% include source-code-card.html title="color.cpp" items=card_4_1_items functions="1" variables="1" lines="74" %}
{% include source-code-card.html title="filename.cpp" items=card_4_2_items functions="1" variables="0" lines="256" %}
{% include source-code-card.html title="image.cpp" items=card_4_3_items functions="16" variables="0" lines="161" %}
{% include source-code-card.html title="maptextunit.cpp" items=card_4_4_items functions="1" variables="1" lines="93" %}
{% include source-code-card.html title="util.cpp" items=card_4_5_items functions="1" variables="0" lines="208" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_4_cards %}
