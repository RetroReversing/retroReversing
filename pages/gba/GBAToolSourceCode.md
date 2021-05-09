---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Tool Source Code
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
image: /public/images/gba/Game Boy Advance Tool Source Code.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance Tool Source Code.jpg
permalink: /game-boy-advance-tool-source-code/
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
editlink: /gba/GBAToolSourceCode.md
---

# Introduction
In the Game Boy Advance SDK Version 3.0 the source code for a variety of tools are available to learn from and modify. These tools all have a command line interface (CLI) and are targeted for the Windows Operating System. They even come with Visual C++ 5.0 project files to make it really easy to build and extend, if you can still find a working version of VC++ 5.0 for your PC.

## What tools have source code available?
The GBA development tools with source code available are:

Tool Name | Description
---|---
act2agb | Converts an Adobe Photoshop .ACT (Adobe Color Table) file to a GBA pallete in C source code form
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


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="colorspace.cpp" />
  <h3>colorspace.cpp</h3><ul>
    <li><span>u32</span> GetNearestPalette<span>(const Palette&_Pal,const Color&_C,u16 offset)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">294</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.cpp" />
  <h3>main.cpp</h3><ul>
    <li><span>Picture </span> CreateReductionPicture<span>(const HPicture&_Hpic,const Palette&_Pal,u16 offset)</span></li> 
    <li><span>void</span> usage<span>()</span></li> 
    <li><span></span> __USING__MAGBX</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">397</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="reduction.cpp" />
  <h3>reduction.cpp</h3><ul>
    <li><span>__USING__MAGBX u32</span> GetNearestPalette<span>(const Palette&_Pal,const Color&_C,u16 offset)</span></li> 
    <li><span>Picture </span> CreateReductionPicture<span>(const HPicture&_Hpic,const Palette&_Pal,u16 offset)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">86</div>  </div>
</div>

</section>

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


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="GlobalFnc.cpp" />
  <h3>GlobalFnc.cpp</h3><ul>
    <li><span>void</span> setByte<span class="rr-func-args">(u8,u8**)</span></li> 
    <li><span>void</span> setWord<span class="rr-func-args">(u16,u8**)</span></li> 
    <li><span>void</span> setDword<span class="rr-func-args">(u32,u8**)</span></li> 
    <li><span>void</span> getByte<span class="rr-func-args">(u8*,u8**)</span></li> 
    <li><span>void</span> getChar<span class="rr-func-args">(char*,u8**)</span></li> 
    <li><span>void</span> getWord<span class="rr-func-args">(u16*,u8**)</span></li> 
    <li><span>void</span> getShort<span class="rr-func-args">(short*,u8**)</span></li> 
    <li><span>void</span> getDword<span class="rr-func-args">(u32*,u8**)</span></li> 
    <li><span>void</span> getLong<span class="rr-func-args">(long*,u8**)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">82</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="RgbLoader.cpp" />
  <h3>RgbLoader.cpp</h3><ul>
    <li><span>DELIVER </span> sgiCreateDeliver<span>(unsigned long width,unsigned long height)</span></li> 
    <li><span>bool</span> LoadHeader<span>(IMAGEHEADER *pimh,MCFile *pfile)</span></li> 
    <li><span>BOOL</span> sgiCreateImage<span>(DELIVER *pdlv,IMAGEHEADER *pimh,unsigned char *pSrc)</span></li> 
    <li><span>BOOL WINAPI</span> tvIsExtension<span>(const char *pchExt)</span></li> 
    <li><span>DELIVER *WINAPI</span> tvImageToTexture<span>(const char *pchFileName)</span></li> 
    <li><span>BOOL</span> sgiCreateImage<span>(DELIVER *pdlv,IMAGEHEADER *pimh,unsigned char *pSrc)</span></li> 
    <li><span>DELIVER </span> sgiCreateDeliver<span>(unsigned long width,unsigned long height)</span></li> 
    <li><span>bool</span> LoadHeader<span>(IMAGEHEADER *pimh,MCFile *pfile)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">414</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.cpp" />
  <h3>main.cpp</h3><ul>
    <li><span>void</span> usage<span>()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">105</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="pic_create.cpp" />
  <h3>pic_create.cpp</h3><ul>
    <li><span></span> __USING__MAGBX</li> 
    <li><span>bool</span> sgiLoadHeader<span>(IMAGEHEADER&imh,std::ifstream&in)</span></li> 
    <li><span>bool</span> sgiCreateImage<span>(HPicture&pic,IMAGEHEADER&imh,unsigned char *pSrc,char flag,short tp,Color&color)</span></li> 
    <li><span>HPicture </span> sgiImageLoad<span>(FileName&filename,char flag,short tp,Color&color)</span></li> 
    <li><span>static bool</span> sgiCreateImage<span>(HPicture&pic,IMAGEHEADER&imh,unsigned char *pSrc,char flag,short tp,Color&bkcolor)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">335</div>  </div>
</div>

</section>

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


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="agbtypes.h" />
  <h3>agbtypes.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">154</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="angle.h" />
  <h3>angle.h</h3><ul>
    <li><span>_AGB_ANGLE_PIE</span> <span>(3.14159265359f)</span></li>
    <li><span>double const</span> m_rad2agb</li> 
    <li><span>double const</span> m_agb2rad</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">62</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bmpstruct.h" />
  <h3>bmpstruct.h</h3><ul>
    <li><span>BMP_COMP_RGB</span> <span>(0)</span></li>
    <li><span>BMP_COMP_RLE8</span> <span>(1)</span></li>
    <li><span>BMP_COMP_RLE4</span> <span>(2)</span></li>
    <li><span>BMP_COMP_BITFIELDS</span> <span>(3)</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">60</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="buffer.h" />
  <h3>buffer.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">81</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="char16set.h" />
  <h3>char16set.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">49</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="char256set.h" />
  <h3>char256set.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">50</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="character.h" />
  <h3>character.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">138</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="character16.h" />
  <h3>character16.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">40</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="character256.h" />
  <h3>character256.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">25</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="charset.h" />
  <h3>charset.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">73</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="color.h" />
  <h3>color.h</h3><ul>
    <li><span>bool</span> operator==<span class="rr-func-args">(Color const&,Color const&)</span></li> 
    <li><span>bool</span> operator!=<span class="rr-func-args">(Color const&,Color const&)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">60</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="hpicture.h" />
  <h3>hpicture.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">108</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="map.h" />
  <h3>map.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">78</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="map16.h" />
  <h3>map16.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">52</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="map256.h" />
  <h3>map256.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">49</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="mapsrimage.h" />
  <h3>mapsrimage.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">45</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="maptextimage.h" />
  <h3>maptextimage.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">96</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="maptextunit.h" />
  <h3>maptextunit.h</h3><ul>
    <li><span>MT_NONE_FLIP</span> <span>(0)</span></li>
    <li><span>MT_H_FLIP</span> <span>(1)</span></li>
    <li><span>MT_V_FLIP</span> <span>(2)</span></li>
    <li><span>MT_HV_FLIP</span> <span>(3)</span></li>
    <li><span>bool</span> operator==<span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
    <li><span>bool</span> operator!=<span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
    <li><span>bool</span> operator<<span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
    <li><span>bool</span> operator><span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
    <li><span>bool</span> operator<=<span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
    <li><span>bool</span> operator>=<span class="rr-func-args">(MapTextUnit const&,MapTextUnit const&)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">57</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="palette.h" />
  <h3>palette.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">101</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="picture.h" />
  <h3>picture.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">128</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="util.h" />
  <h3>util.h</h3><ul>
    <li><span>void</span> _itoa_c_hex<span>(char val,char *str)</span></li> 
    <li><span>inline _Ty</span> Min<span>(const _Ty&_L,const _Ty&_R){
    return (_L < _R )? _L : _R ;
}</span></li> 
    <li><span>inline _Ty</span> Max<span>(const _Ty&_L,const _Ty&_R){
    return (_L > _R )? _L : _R ;
}</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">154</div>  </div>
</div>

</section>


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


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="color.cpp" />
  <h3>color.cpp</h3><ul>
    <li><span>bool</span> operator<span>==(const Color&_L,const Color&_R)</span></li> 
    <li><span>bool</span> operator!</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">74</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="filename.cpp" />
  <h3>filename.cpp</h3><ul>
    <li><span>FileName</span> operator<span>+(const PathName&_L,const FileName&_R)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">256</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="image.cpp" />
  <h3>image.cpp</h3><ul>
    <li><span>__USING__MAGBX u8 </span> create_data_array_from_image4b<span>(const Image<u8>&image)</span></li> 
    <li><span>u8 </span> create_data_array_from_image8b<span>(const Image<u8>&image)</span></li> 
    <li><span>u16 </span> create_data_array_from_image16b<span>(const Image<u16>&image)</span></li> 
    <li><span>u32 </span> create_data_array_from_image32b<span>(const Image<u32>&image)</span></li> 
    <li><span>u32</span> get_array_count_4b<span>(const Image<u8>&image)</span></li> 
    <li><span>u32</span> get_array_count_8b<span>(const Image<u8>&image)</span></li> 
    <li><span>u32</span> get_array_count_16b<span>(const Image<u16>&image)</span></li> 
    <li><span>u32</span> get_array_count_32b<span>(const Image<u32>&image)</span></li> 
    <li><span>u8 </span> create_data_array_from_image4b<span>(const Image<u8>&image)</span></li> 
    <li><span>u8 </span> create_data_array_from_image8b<span>(const Image<u8>&image)</span></li> 
    <li><span>u16 </span> create_data_array_from_image16b<span>(const Image<u16>&image)</span></li> 
    <li><span>u32 </span> create_data_array_from_image32b<span>(const Image<u32>&image)</span></li> 
    <li><span>u32</span> get_array_count_4b<span>(const Image<u8>&image)</span></li> 
    <li><span>u32</span> get_array_count_8b<span>(const Image<u8>&image)</span></li> 
    <li><span>u32</span> get_array_count_16b<span>(const Image<u16>&image)</span></li> 
    <li><span>u32</span> get_array_count_32b<span>(const Image<u32>&image)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">16</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">161</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="maptextunit.cpp" />
  <h3>maptextunit.cpp</h3><ul>
    <li><span>bool</span> operator<span>==(const MapTextUnit&_L,const MapTextUnit&_R)</span></li> 
    <li><span>bool</span> operator!</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">93</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="util.cpp" />
  <h3>util.cpp</h3><ul>
    <li><span>void</span> _itoa_c_hex<span>(char val,char *str)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">208</div>  </div>
</div>

</section>
